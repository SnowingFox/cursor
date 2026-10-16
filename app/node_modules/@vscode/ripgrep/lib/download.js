// @ts-check
'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const https = require('https');
const util = require('util');
const url = require('url');
const stream = require('stream');
const child_process = require('child_process');
const proxy_from_env = require('proxy-from-env');
const yauzl = require('yauzl'); // use yauzl ^2.9.2 because vscode already ships with it.
const packageVersion = require('../package.json').version;
const tmpDir = path.join(os.tmpdir(), `vscode-ripgrep-cache-${packageVersion}`);

const fsUnlink = util.promisify(fs.unlink);
const fsExists = util.promisify(fs.exists);
const fsMkdir = util.promisify(fs.mkdir);

const isWindows = os.platform() === 'win32';

const REPO = 'anysphere/ripgrep';
const pipelineAsync = util.promisify(stream.pipeline);

/**
 * @param {string} _url
 */
function isGithubUrl(_url) {
    return url.parse(_url).hostname === 'api.github.com';
}


/**
 * @param {any} opts
 */
function redactAuthorization(opts) {
    if (opts && opts.headers && opts.headers.authorization) {
        return { ...opts, headers: { ...opts.headers, authorization: '<redacted>' } };
    }
    return opts;
}

/**
 * @param {string} _url
 * @param {fs.PathLike} dest
 * @param {any} opts
 */
function download(_url, dest, opts) {

    const proxy = proxy_from_env.getProxyForUrl(url.parse(_url));
    if (proxy !== '') {
        var HttpsProxyAgent = require('https-proxy-agent');
        opts = {
            ...opts,
            "agent": new HttpsProxyAgent.HttpsProxyAgent(proxy),
            proxy
        };
    }


    if (opts.headers && opts.headers.authorization && !isGithubUrl(_url)) {
        delete opts.headers.authorization;
    }

    return new Promise((resolve, reject) => {
        console.log(`Download options: ${JSON.stringify(redactAuthorization(opts))}`);
        const mergedOpts = {
            ...url.parse(_url),
            ...opts
        };
        https.get(mergedOpts, response => {
            console.log('statusCode: ' + response.statusCode);
            if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
                response.resume();
                console.log('Following redirect to: ' + response.headers.location);
                return download(response.headers.location, dest, opts)
                    .then(resolve, reject);
            } else if (response.statusCode !== 200) {
                response.resume();
                reject(new Error('Download failed with ' + response.statusCode));
                return;
            }

            // stream.pipeline (unlike bare .pipe()) propagates mid-transfer
            // response errors, so an interrupted stream rejects here and the
            // postinstall retry loop re-attempts instead of leaving a
            // truncated file behind or hanging.
            pipelineAsync(response, fs.createWriteStream(dest)).then(resolve, reject);
        }).on('error', async err => {
            try {
                await fsUnlink(dest);
            } catch (e) { }
            reject(err);
        });
    });
}

/**
 * @param {string} _url
 * @param {any} opts
 */
function get(_url, opts) {
    console.log(`GET ${_url}`);

    const proxy = proxy_from_env.getProxyForUrl(url.parse(_url));
    if (proxy !== '') {
        var HttpsProxyAgent = require('https-proxy-agent');
        opts = {
            ...opts,
            "agent": new HttpsProxyAgent.HttpsProxyAgent(proxy)
        };
    }

    return new Promise((resolve, reject) => {
        let result = '';
        opts = {
            ...url.parse(_url),
            ...opts
        };
        https.get(opts, response => {
            if (response.statusCode !== 200) {
                reject(new Error('Request failed: ' + response.statusCode));
            }

            response.on('data', d => {
                result += d.toString();
            });

            response.on('end', () => {
                resolve(result);
            });

            response.on('error', e => {
                reject(e);
            });
        }).on('error', e => reject(e));
    });
}

/**
 * @param {string} repo
 * @param {string} tag
 */
function getApiUrl(repo, tag) {
    return `https://api.github.com/repos/${repo}/releases/tags/${tag}`;
}

/**
 * Download the release asset via GitHub's direct (browser) download URL.
 * Public release assets are served from GitHub's CDN with no API rate limit.
 * The api.github.com path below shares an anonymous 60-requests/hour/IP
 * budget with everything else egressing the same NAT (e.g. all of CI), which
 * intermittently 403s; this path avoids api.github.com entirely.
 * @param {{ force: boolean; version: string; }} opts
 * @param {string} assetName
 * @param {string} downloadFolder
 */
async function getAssetFromDirectUrl(opts, assetName, downloadFolder) {
    const assetDownloadPath = path.join(downloadFolder, assetName);

    // We can just use the cached binary
    if (!opts.force && await fsExists(assetDownloadPath)) {
        console.log('Using cached download: ' + assetDownloadPath);
        return;
    }

    const downloadUrl = `https://github.com/${REPO}/releases/download/${opts.version}/${assetName}`;
    console.log(`Downloading from ${downloadUrl}`);
    console.log(`Downloading to ${assetDownloadPath}`);

    await download(downloadUrl, assetDownloadPath, {
        headers: {
            'user-agent': 'vscode-ripgrep',
            accept: 'application/octet-stream'
        }
    });
}

/**
 * @param {{ force: boolean; token: string; version: string; }} opts
 * @param {string} assetName
 * @param {string} downloadFolder
 */
async function getAssetFromGithubApi(opts, assetName, downloadFolder) {
    const assetDownloadPath = path.join(downloadFolder, assetName);

    // We can just use the cached binary
    if (!opts.force && await fsExists(assetDownloadPath)) {
        console.log('Using cached download: ' + assetDownloadPath);
        return assetDownloadPath;
    }

    const downloadOpts = {
        headers: {
            'user-agent': 'vscode-ripgrep'
        }
    };

    if (opts.token) {
        downloadOpts.headers.authorization = `token ${opts.token}`;
    }

    console.log(`Finding release for ${opts.version}`);
    const release = await get(getApiUrl(REPO, opts.version), downloadOpts);
    let jsonRelease;
    try {
        jsonRelease = JSON.parse(release);
    } catch (e) {
        throw new Error('Malformed API response: ' + e.stack);
    }

    if (!jsonRelease.assets) {
        throw new Error('Bad API response: ' + JSON.stringify(release));
    }

    const asset = jsonRelease.assets.find(a => a.name === assetName);
    if (!asset) {
        throw new Error('Asset not found with name: ' + assetName);
    }

    console.log(`Downloading from ${asset.url}`);
    console.log(`Downloading to ${assetDownloadPath}`);

    downloadOpts.headers.accept = 'application/octet-stream';
    await download(asset.url, assetDownloadPath, downloadOpts);
}

/**
 * @param {string} zipPath
 * @param {string} destinationDir
 */
function unzipWindows(zipPath, destinationDir) {
    // code from https://stackoverflow.com/questions/63932027/how-to-unzip-to-a-folder-using-yauzl
    return new Promise((resolve, reject) => {
        try {
            // Create folder if not exists
            fs.promises.mkdir(path.dirname(destinationDir), { recursive: true });

            // Same as example we open the zip.
            yauzl.open(zipPath, { lazyEntries: true }, (err, zipFile) => {
                if (err) {
                    zipFile?.close();
                    reject(err);
                    return;
                }

                // This is the key. We start by reading the first entry.
                zipFile.readEntry();

                // Now for every entry, we will write a file or dir
                // to disk. Then call zipFile.readEntry() again to
                // trigger the next cycle.
                zipFile.on('entry', (entry) => {
                    try {
                        // Directories
                        if (/\/$/.test(entry.fileName)) {
                            // Create the directory then read the next entry.
                            //fs.promises.mkdir(path.join(destinationDir, entry.fileName), { recursive: true });
                            zipFile.readEntry();
                        }
                        // Ignore other Files
                        else if (!/rg\.exe$/.test(entry.fileName)) {
                            zipFile.readEntry();
                        }
                        else {
                            // Write the file to disk.
                            zipFile.openReadStream(entry, (readErr, readStream) => {
                                if (readErr) {
                                    zipFile.close();
                                    reject(readErr);
                                    return;
                                }

                                const file = fs.createWriteStream(path.join(destinationDir, "rg.exe" /*entry.fileName*/));
                                readStream.pipe(file);
                                file.on('finish', () => {
                                    // Wait until the file is finished writing, then read the next entry.
                                    // @ts-ignore: Typing for close() is wrong.
                                    file.close(() => {
                                        zipFile.readEntry();
                                    });

                                    file.on('error', (err) => {
                                        zipFile.close();
                                        reject(err);
                                    });
                                });
                            });
                        }
                    } catch (e) {
                        zipFile.close();
                        reject(e);
                    }
                });
                zipFile.on('end', (err) => {
                    resolve();
                });
                zipFile.on('error', (err) => {
                    zipFile.close();
                    reject(err);
                });
            });
        }
        catch (e) {
            reject(e);
        }
    });
}

/**
 * Handle whitespace in filepath as powershell splits path with whitespaces
 * @param {string} path
 */
function sanitizePathForPowershell(path) {
    path = path.replace(/ /g, '` '); // replace whitespace with "` " as solution provided here https://stackoverflow.com/a/18537344/7374562
    return path;
}

function untar(zipPath, destinationDir) {
    return new Promise((resolve, reject) => {
        const excludes = ['--exclude', 'doc', '--exclude', 'complete', '--exclude', 'README.md', '--exclude', 'COPYING', '--exclude', 'UNLICENSE', '--exclude', 'LICENSE-MIT'];
        const unzipProc = child_process.spawn('tar', ['--strip-components', '1', '-xvf', zipPath, '-C', destinationDir, ...excludes], { stdio: 'inherit' });
        unzipProc.on('error', err => {
            reject(err);
        });
        unzipProc.on('close', code => {
            console.log(`tar xvf exited with ${code}`);
            if (code !== 0) {
                reject(new Error(`tar xvf exited with ${code}`));
                return;
            }

            resolve();
        });
    });
}

/**
 * @param {string} zipPath
 * @param {string} destinationDir
 */
async function unzipRipgrep(zipPath, destinationDir) {
    if (isWindows) {
        await unzipWindows(zipPath, destinationDir);
    } else {
        await untar(zipPath, destinationDir);
    }

    const expectedName = path.join(destinationDir, 'rg');
    if (await fsExists(expectedName)) {
        return expectedName;
    }

    if (await fsExists(expectedName + '.exe')) {
        return expectedName + '.exe';
    }

    throw new Error(`Expecting rg or rg.exe unzipped into ${destinationDir}, didn't find one.`);
}

module.exports = async opts => {
    if (!opts.version) {
        return Promise.reject(new Error('Missing version'));
    }

    if (!opts.target) {
        return Promise.reject(new Error('Missing target'));
    }

    const extension = isWindows ? '.zip' : '.tar.gz';
    const assetName = ['ripgrep', opts.version, opts.target].join('-') + extension;

    if (!await fsExists(tmpDir)) {
        await fsMkdir(tmpDir);
    }

    const assetDownloadPath = path.join(tmpDir, assetName);
    try {
        try {
            await getAssetFromDirectUrl(opts, assetName, tmpDir);
        } catch (directErr) {
            console.log(`Direct release download failed (${directErr.message}), falling back to the GitHub API`);
            // Remove any partial download so the API path cannot mistake it
            // for a valid cached asset.
            try {
                await fsUnlink(assetDownloadPath);
            } catch (e) { }
            await getAssetFromGithubApi(opts, assetName, tmpDir)
        }
    } catch (e) {
        console.log('Deleting invalid download cache');
        try {
            await fsUnlink(assetDownloadPath);
        } catch (e) { }

        throw e;
    }

    console.log(`Unzipping to ${opts.destDir}`);
    try {
        const destinationPath = await unzipRipgrep(assetDownloadPath, opts.destDir);
        if (!isWindows) {
            await util.promisify(fs.chmod)(destinationPath, '755');
        }
    } catch (e) {
        console.log('Deleting invalid download');

        try {
            await fsUnlink(assetDownloadPath);
        } catch (e) { }

        throw e;
    }
};
