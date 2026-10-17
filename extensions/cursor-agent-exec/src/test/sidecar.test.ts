import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import type {
	Account,
	LoginStart,
	LoginStatus,
	SidecarConfig,
	SubscriptionsStatus,
} from '../../../../src/vs/workbench/contrib/localMode/common/subscriptions.js';
import { ensureSidecar, findBinary, management, renderConfig, stopSidecar } from '../sidecar.js';
import { handle } from '../subscriptions.js';

// Signing in must not open a browser during tests.
vi.mock('../sidecar.js', async (original) => ({ ...(await original<object>()), openExternal: vi.fn() }));

describe('renderConfig', () => {
	it('binds to loopback with the client key, management key and data dir', () => {
		const yaml = renderConfig(
			{ port: 18_317, apiKey: 'sk-local-a"b', dataDir: '/data/cliproxyapi', strategy: 'fill-first', proxyUrl: '' },
			'mgmt',
		);
		expect(yaml).toContain('  host: "127.0.0.1"\n  port: 18317\n');
		expect(yaml).toContain('  allow-remote: false\n  secret-key: "mgmt"\n');
		expect(yaml).toContain('  api-keys:\n    - "sk-local-a\\"b"\n');
		expect(yaml).toContain('  strategy: "fill-first"\n  session-affinity: true\n  session-affinity-ttl: "60m"\n');
		expect(yaml).toContain('  retry:\n    request-retry: 2\n    max-retry-interval: 30\n');
		expect(yaml).toContain('upstream:\n  claude:\n    model-level-cooling: true\n');
		expect(yaml).toContain('  proxy-url: ""\n  streaming:\n    bootstrap-retries: 1\n');
		expect(yaml).toContain('  auth-dir: "/data/cliproxyapi/auths"\n');
	});
});

describe('findBinary', () => {
	it('prefers the override, then the installed copy, then PATH', async () => {
		const root = await mkdtemp(path.join(os.tmpdir(), 'lm-bin-'));
		try {
			const dist = path.join(root, 'app/extensions/cursor-agent-exec/dist');
			const bundled = path.join(root, 'app/resources/cliproxyapi/cli-proxy-api');
			const onPath = path.join(root, 'bin/cliproxyapi');
			await mkdir(dist, { recursive: true });
			await mkdir(path.dirname(onPath), { recursive: true });
			await writeFile(onPath, '');
			const env = { PATH: path.dirname(onPath) };
			expect(findBinary({ ...env, CURSOR_CLIPROXYAPI_BIN: '/x/cli-proxy-api' }, dist)).toBe('/x/cli-proxy-api');
			expect(findBinary(env, dist)).toBe(onPath);
			await mkdir(path.dirname(bundled), { recursive: true });
			await writeFile(bundled, '');
			expect(findBinary(env, dist)).toBe(bundled);
		} finally {
			await rm(root, { recursive: true, force: true });
		}
	});
});

// From src/ the installed copy is not where dist/ looks for it.
const installed = path.resolve(import.meta.dirname, '../../../../app/resources/cliproxyapi/cli-proxy-api');
if (!process.env.CURSOR_CLIPROXYAPI_BIN && existsSync(installed)) {
	process.env.CURSOR_CLIPROXYAPI_BIN = installed;
}
const binary = findBinary();

describe.skipIf(binary === undefined)('CLIProxyAPI sidecar', { timeout: 30_000 }, () => {
	let config: SidecarConfig;

	beforeAll(async () => {
		const dataDir = await mkdtemp(path.join(os.tmpdir(), 'lm-sidecar-'));
		config = { port: 19_000 + Math.floor(Math.random() * 500), apiKey: 'sk-local-test', dataDir };
	});

	afterAll(async () => {
		await stopSidecar();
		await rm(config.dataDir, { recursive: true, force: true });
	});

	it('starts on demand with no accounts', async () => {
		const status = (await handle({ op: 'status', sidecar: config })) as SubscriptionsStatus;
		expect(status).toMatchObject({ running: true, accounts: [] });
		expect(status.binary).toBe(binary);
		expect(status.version).toMatch(/^\d+\.\d+/u);
	});

	it('requires the client key on inference routes', async () => {
		const url = `http://127.0.0.1:${config.port}/v1/models`;
		expect((await fetch(url)).status).toBe(401);
		const ok = await fetch(url, { headers: { authorization: `Bearer ${config.apiKey}` } });
		expect(ok.status).toBe(200);
	});

	it('lists, updates and signs out an account', async () => {
		const sidecar = await ensureSidecar(config);
		const name = 'codex-test.json';
		await management(sidecar, 'POST', `/credentials?name=${name}`, {
			type: 'codex',
			email: 'test@example.com',
			access_token: 'not-a-token',
			refresh_token: 'not-a-token',
			account_id: 'acct-test',
			plan_type: 'plus',
			// Far away, so the sidecar never tries to refresh it.
			expired: '2099-01-01T00:00:00Z',
		});
		let status = (await handle({ op: 'status', sidecar: config })) as SubscriptionsStatus;
		expect(status.accounts).toEqual([
			expect.objectContaining<Partial<Account>>({
				name,
				type: 'codex',
				email: 'test@example.com',
				plan: 'Plus',
				disabled: false,
			}),
		]);

		status = (await handle({
			op: 'update',
			sidecar: config,
			name,
			patch: { proxyUrl: 'socks5://127.0.0.1:1080', disabled: true },
		})) as SubscriptionsStatus;
		expect(status.accounts[0]).toMatchObject({
			disabled: true,
			status: 'disabled',
			proxyUrl: 'socks5://127.0.0.1:1080',
		});
		expect(JSON.parse(await readFile(path.join(config.dataDir, 'auths', name), 'utf8')).proxy_url).toBe(
			'socks5://127.0.0.1:1080',
		);
		await expect(handle({ op: 'update', sidecar: config, name, patch: { proxyUrl: 'ftp://nope' } })).rejects.toThrow(
			/http/u,
		);

		status = (await handle({ op: 'remove', sidecar: config, name })) as SubscriptionsStatus;
		expect(status.accounts).toEqual([]);
	});

	it('starts a sign-in and cancels it', async () => {
		const login = (await handle({ op: 'login', sidecar: config, type: 'codex' })) as LoginStart;
		expect(login).toMatchObject({ flow: 'browser', state: expect.any(String) });
		expect(new URL(login.url).host).toBe('auth.openai.com');
		expect(await handle({ op: 'login-status', sidecar: config, state: login.state })).toEqual({ status: 'wait' });
		await handle({ op: 'login-cancel', sidecar: config, state: login.state });
		const after = (await handle({ op: 'login-status', sidecar: config, state: login.state })) as LoginStatus;
		expect(after.status).toBe('error');
	});

	it('applies routing and proxy settings without a restart', async () => {
		const before = await ensureSidecar(config);
		const after = await ensureSidecar({
			...config,
			strategy: 'weighted-round-robin',
			proxyUrl: 'http://127.0.0.1:9',
			routing: { sessionAffinity: false, retries: 0, modelCooling: false, streamRetries: 3 },
		});
		expect(after.pid).toBe(before.pid);
		const settings = await management(after, 'GET', '/config');
		expect(settings?.routing).toMatchObject({
			strategy: 'weighted-round-robin',
			'session-affinity': false,
			retry: { 'request-retry': 0, 'max-retry-interval': 30 },
		});
		expect(settings?.upstream?.codex?.['model-level-cooling']).toBe(false);
		expect(settings?.requests).toMatchObject({
			'proxy-url': 'http://127.0.0.1:9',
			streaming: { 'bootstrap-retries': 3 },
		});
	});

	it('adopts a running sidecar after an extension host restart, restarts for a new key', async () => {
		const first = await ensureSidecar(config);
		// What a new extension host sees: no sidecar in memory, one on disk.
		clearInterval(first.timer);
		globalThis.__cursorLocalModeSidecar!.current = undefined;
		const adopted = await ensureSidecar(config);
		expect(adopted.pid).toBe(first.pid);

		const restarted = await ensureSidecar({ ...config, apiKey: 'sk-local-other' });
		expect(restarted.pid).not.toBe(first.pid);
		const res = await fetch(`http://127.0.0.1:${config.port}/v1/models`, {
			headers: { authorization: 'Bearer sk-local-other' },
		});
		expect(res.status).toBe(200);
	});

	it('explains a port that is taken', async () => {
		const other = await mkdtemp(path.join(os.tmpdir(), 'lm-sidecar-'));
		const state = globalThis.__cursorLocalModeSidecar!;
		const running = state.current;
		try {
			// Same port, different data dir: the running sidecar is not ours to adopt.
			state.current = undefined;
			await expect(ensureSidecar({ ...config, apiKey: 'sk-local-third', dataDir: other })).rejects.toThrow(
				/already in use/u,
			);
		} finally {
			state.current = running;
			await rm(other, { recursive: true, force: true });
		}
	});
});
