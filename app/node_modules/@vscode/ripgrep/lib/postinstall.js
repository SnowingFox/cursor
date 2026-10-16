// @ts-check
'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');
const util = require('util');
const child_process = require('child_process');

const download = require('./download');

const fsExists = util.promisify(fs.exists);
const readdir = util.promisify(fs.readdir);
const mkdir = util.promisify(fs.mkdir);
const exec = util.promisify(child_process.exec);

const forceInstall = process.argv.includes('--force');
if (forceInstall) {
    console.log('--force, ignoring caches');
}

const VERSION = '15.1.0-cursor5';
const BIN_PATH = path.join(__dirname, '../bin');

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled rejection: ', promise, 'reason:', reason);
});

async function getTarget() {
    const arch = process.env.npm_config_arch || os.arch();

    switch (os.platform()) {
        case 'darwin':
            return arch === 'arm64' ? 'aarch64-apple-darwin' :
                'x86_64-apple-darwin';
        case 'win32':
            return arch === 'x64' ? 'x86_64-pc-windows-msvc' :
                arch === 'arm64' ? 'aarch64-pc-windows-msvc' :
                    'i686-pc-windows-msvc';
        case 'linux':
            return arch === 'x64' ? 'x86_64-unknown-linux-musl' :
                arch === 'arm' ? 'armv7-unknown-linux-gnueabihf' :
                    arch === 'armv7l' ? 'armv7-unknown-linux-gnueabihf' :
                        arch === 'arm64' ? 'aarch64-unknown-linux-musl' :
                            arch === 'ppc64' ? 'powerpc64-unknown-linux-gnu' :
                                arch === 's390x' ? 's390x-unknown-linux-gnu' :
                                    'i686-unknown-linux-gnu'
        default: throw new Error('Unknown platform: ' + os.platform());
    }
}

/**
 * Sleep for a specified number of milliseconds
 * @param {number} ms Time to sleep in milliseconds
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry a function with exponential backoff
 * @param {Function} fn Function to retry
 * @param {number} maxRetries Maximum number of retries
 * @returns {Promise<any>}
 */
async function retry(fn, maxRetries = 5) {
    let retries = 0;
    let lastError;

    while (retries < maxRetries) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            retries++;

            if (retries >= maxRetries) {
                break;
            }

            const delay = Math.pow(2, retries) * 1000;
            console.error(err);
            console.log(`Download attempt ${retries} failed, retrying in ${delay / 1000} seconds...`);
            await sleep(delay);
        }
    }

    throw lastError;
}

async function main() {
    const binExists = await fsExists(BIN_PATH);
    const binNotEmpty = binExists && (await readdir(BIN_PATH)).length > 0;
    if (!forceInstall && binExists && binNotEmpty) {
        console.log('bin/ folder already exists, exiting');
        process.exit(0);
    }

    if (!binExists) {
        await mkdir(BIN_PATH);
    }

    const target = await getTarget();
    const opts = {
        version: VERSION,
        token: process.env['GITHUB_TOKEN'],
        target: await getTarget(),
        destDir: BIN_PATH,
        force: forceInstall
    };

    try {
        await retry(() => download(opts));
    } catch (err) {
        console.error(`Downloading ripgrep failed after multiple retries: ${err.stack}`);
        process.exit(1);
    }
}

main();
