/**
 * The local marketplace in the agent window (see common/marketplace.ts).
 *
 * Patched in for Cursor's backend (build/patches/patches.mjs, `marketplace-*`):
 * `provider` answers the Customize page instead of DashboardService,
 * `effectivePlugins` tells the extension host what to clone and load. The
 * catalog is read from GitHub (the renderer's CSP allows https fetches) and
 * kept in localStorage with the installs.
 */
import { cursorHost, type StructMessage } from '../../../../glass/host/cursorHost.js';
import {
	type CatalogPlugin,
	catalog,
	catalogFromManifest,
	effectivePlugins,
	findPlugin,
	isStale,
	localPluginDirs,
	MARKETPLACE_STORAGE_KEY,
	type MarketplaceSnapshot,
	type MarketplaceSource,
	type MarketplaceState,
	mcpConfigPath,
	type ParsedMarketplace,
	parseGitHubRepo,
	parseState,
	pluginJson,
	pluginManifestPath,
	type RepoContents,
	resolvePluginRefs,
	serializeState,
	snapshotFromParse,
	sourceId,
	stableId,
} from '../common/marketplace.js';

const GITHUB_API = 'https://api.github.com';
const FETCH_TIMEOUT_MS = 20_000;
const FETCH_CONCURRENCY = 12;
const TEAM_ONLY = 'Team plugins need a Cursor team account, which local mode does not use.';

// --- State -------------------------------------------------------------------

let cached: MarketplaceState | undefined;

// Another window changed it.
globalThis.addEventListener?.('storage', (e) => {
	if (e.key === MARKETPLACE_STORAGE_KEY) {
		cached = undefined;
	}
});

function load(): MarketplaceState {
	if (cached === undefined) {
		cached = parseState(globalThis.localStorage?.getItem(MARKETPLACE_STORAGE_KEY));
	}
	return cached;
}

function save(state: MarketplaceState): void {
	cached = state;
	try {
		globalThis.localStorage?.setItem(MARKETPLACE_STORAGE_KEY, serializeState(state));
	} catch (e) {
		console.warn('[local mode] could not save the marketplace', e);
	}
}

function update(change: (state: MarketplaceState) => MarketplaceState): MarketplaceState {
	const next = change(load());
	save(next);
	return next;
}

// --- Reading marketplaces from GitHub --------------------------------------------

async function get(url: string, accept?: string): Promise<Response> {
	const r = await fetch(url, {
		headers: accept === undefined ? {} : { Accept: accept },
		signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
	});
	if (!r.ok) {
		throw new Error(`${r.status} ${r.statusText || 'error'} from ${url}`);
	}
	return r;
}

const getJson = async (url: string): Promise<unknown> => (await get(url)).json();

async function eachLimit<T>(items: readonly T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
	let next = 0;
	const worker = async () => {
		while (next < items.length) {
			await fn(items[next++]);
		}
	};
	await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
}

/**
 * One marketplace: its commit and file list (GitHub API, two requests), its
 * manifest and, for plugins inside the repository, their plugin.json and MCP
 * config (raw.githubusercontent.com).
 */
export async function readMarketplace(source: MarketplaceSource, now = Date.now()): Promise<MarketplaceSnapshot> {
	const repo = parseGitHubRepo(source.gitUrl);
	if (repo === undefined) {
		throw new Error(`${source.gitUrl} is not a GitHub repository.`);
	}
	const api = `${GITHUB_API}/repos/${repo.owner}/${repo.repo}`;
	let commitSha: string | undefined;
	try {
		const sha = (
			await (
				await get(`${api}/commits/${encodeURIComponent(source.gitRef ?? 'HEAD')}`, 'application/vnd.github.sha')
			).text()
		).trim();
		commitSha = /^[0-9a-f]{40}$/u.test(sha) ? sha : undefined;
	} catch {}
	const ref = commitSha ?? source.gitRef ?? 'HEAD';
	const raw = (path: string) => `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${ref}/${path}`;

	// Without the file list (rate limited), plugins keep their manifest entry only.
	let paths: string[] | undefined;
	try {
		const tree = (await getJson(`${api}/git/trees/${ref}?recursive=1`)) as {
			tree?: { path?: string; type?: string }[];
		};
		paths = (tree.tree ?? []).flatMap((t) => (t.type === 'blob' && typeof t.path === 'string' ? [t.path] : []));
	} catch {}
	const files = new Set(paths ?? []);
	const has = (path: string) => paths === undefined || files.has(path);

	let manifest: unknown;
	for (const path of ['.cursor-plugin/marketplace.json', '.claude-plugin/marketplace.json']) {
		if (manifest === undefined && has(path)) {
			try {
				manifest = await getJson(raw(path));
			} catch {}
		}
	}
	if (manifest === undefined) {
		// A repository that is one plugin rather than a marketplace.
		const own = paths === undefined ? undefined : pluginManifestPath(files, '');
		const plugin = own === undefined ? undefined : ((await getJson(raw(own))) as Record<string, unknown>);
		if (plugin === undefined) {
			throw new Error(`${repo.url} has no .cursor-plugin/marketplace.json or .claude-plugin/marketplace.json.`);
		}
		const name = typeof plugin.name === 'string' && plugin.name ? plugin.name : repo.repo;
		manifest = { name: repo.repo, plugins: [{ name, source: './', description: plugin.description }] };
	}

	const pluginManifests = new Map<string, unknown>();
	const mcpConfigs = new Map<string, unknown>();
	if (paths !== undefined) {
		await eachLimit(localPluginDirs(manifest), FETCH_CONCURRENCY, async (dir) => {
			const own = pluginManifestPath(files, dir);
			const mcp = mcpConfigPath(files, dir);
			try {
				own !== undefined && pluginManifests.set(dir, await getJson(raw(own)));
			} catch {}
			try {
				mcp !== undefined && mcpConfigs.set(dir, await getJson(raw(mcp)));
			} catch {}
		});
	}
	const contents: RepoContents = { repo, ref, commitSha, paths, pluginManifests, mcpConfigs };
	return catalogFromManifest(source, manifest, contents, now);
}

const inflight = new Map<string, Promise<MarketplaceSnapshot>>();

function refresh(source: MarketplaceSource): Promise<MarketplaceSnapshot> {
	let p = inflight.get(source.id);
	if (p === undefined) {
		p = readMarketplace(source)
			.then((snapshot) => {
				update((s) => ({ ...s, snapshots: { ...s.snapshots, [source.id]: snapshot } }));
				return snapshot;
			})
			.finally(() => inflight.delete(source.id));
		inflight.set(source.id, p);
	}
	return p;
}

/** Reads the marketplaces never read; stale ones refresh in the background. */
async function ensureCatalog(): Promise<MarketplaceState> {
	const s = load();
	const now = Date.now();
	const readable = s.sources.filter((x) => parseGitHubRepo(x.gitUrl) !== undefined);
	for (const source of readable) {
		if (s.snapshots[source.id] !== undefined && isStale(s.snapshots[source.id], now)) {
			refresh(source).catch((e) => console.warn(`[local mode] could not refresh ${source.gitUrl}`, e));
		}
	}
	await Promise.all(
		readable
			.filter((x) => s.snapshots[x.id] === undefined)
			.map((source) => refresh(source).catch((e) => console.warn(`[local mode] could not read ${source.gitUrl}`, e))),
	);
	return load();
}

/** Has the extension host reload plugins (clone new installs, drop removed ones). */
function reloadPlugins(): void {
	cursorHost()
		.cursor.pluginsService?.requestPluginsRefresh()
		.catch((e) => console.warn('[local mode] plugin reload failed', e));
}

// --- aiserver.v1 messages ------------------------------------------------------

const big = (id: string | number | bigint | undefined): bigint => {
	try {
		return BigInt(id ?? 0);
	} catch {
		return 0n;
	}
};

function struct(json: Record<string, unknown> | undefined): StructMessage | undefined {
	if (json === undefined) {
		return undefined;
	}
	try {
		return cursorHost().cursor.proto.Struct.fromJson(json);
	} catch {
		return undefined;
	}
}

function toJson(variables: unknown): Record<string, unknown> | undefined {
	const json = (variables as StructMessage | undefined)?.toJson?.();
	return json !== null && typeof json === 'object' && !Array.isArray(json)
		? (json as Record<string, unknown>)
		: undefined;
}

function marketplaceMessage(source: MarketplaceSource, snap: MarketplaceSnapshot): object {
	return new (cursorHost().cursor.proto.Marketplace)({
		id: big(source.id),
		name: snap.name,
		...(snap.displayName ? { displayName: snap.displayName } : {}),
		...(snap.description ? { description: snap.description } : {}),
		gitUrl: snap.gitUrl,
		gitRef: snap.gitRef,
		// The page files marketplaces with a user under "personal".
		...(source.builtin ? {} : { userId: 0 }),
		createdAt: 0n,
		updatedAt: big(snap.fetchedAt),
		lastIndexedAt: big(snap.fetchedAt),
		...(snap.commitSha ? { lastIndexedCommitSha: snap.commitSha } : {}),
	});
}

function pluginMessage(p: CatalogPlugin, state: MarketplaceState): object {
	const source = state.sources.find((s) => s.id === p.marketplaceId);
	const snap = state.snapshots[p.marketplaceId];
	const variables = struct(p.variables);
	return new (cursorHost().cursor.proto.Plugin)({
		id: big(p.id),
		name: p.name,
		displayName: p.displayName,
		description: p.description,
		status: 3, // APPROVED
		lifecycleState: 1, // PUBLIC_LISTED
		repositoryUrl:
			p.homepage ?? (p.local && p.gitPath ? `${p.gitUrl}/tree/${p.gitRef ?? 'HEAD'}/${p.gitPath}` : p.gitUrl),
		tags: p.tags,
		...(p.logoUrl ? { logoUrl: p.logoUrl } : {}),
		isPublished: true,
		createdAt: 0n,
		updatedAt: big(snap?.fetchedAt),
		marketplaceId: big(p.marketplaceId),
		...(source !== undefined && snap !== undefined ? { marketplace: marketplaceMessage(source, snap) } : {}),
		...(p.author
			? {
					publisher: {
						id: big(stableId(`publisher:${p.author}`)),
						name: p.author,
						displayName: p.author,
						isUserOwned: false,
						isVerified: false,
					},
				}
			: {}),
		gitUrl: p.gitUrl,
		...(p.gitRef ? { gitRef: p.gitRef } : {}),
		...(p.gitPath ? { gitPath: p.gitPath } : {}),
		fullRef: `${p.marketplaceName}/${p.name}`,
		skills: p.skills,
		subagents: p.subagents,
		hooks: p.hooks,
		rules: p.rules,
		mcpServers: p.mcpServers,
		commands: p.commands,
		curatedCategoryKeys: p.categoryKeys,
		...(variables === undefined ? {} : { variables }),
	});
}

function installMessage(p: CatalogPlugin, installedAt: number, state: MarketplaceState): object {
	return new (cursorHost().cursor.proto.UserPluginInstall)({
		userId: 0,
		pluginId: big(p.id),
		isEnabled: true,
		createdAt: big(installedAt),
		updatedAt: big(installedAt),
		plugin: pluginMessage(p, state),
	});
}

// --- Marketplaces the user adds ---------------------------------------------------

function addSource(gitUrl: string, gitRef?: string): MarketplaceSource {
	const repo = parseGitHubRepo(gitUrl);
	const url = repo?.url ?? gitUrl.trim();
	const id = sourceId(url);
	const existing = load().sources.find((s) => s.id === id);
	if (existing !== undefined) {
		return existing;
	}
	const source: MarketplaceSource = { id, gitUrl: url, ...(gitRef ? { gitRef } : {}) };
	update((s) => ({ ...s, sources: [...s.sources, source] }));
	return source;
}

async function addGitHubMarketplace(gitUrl: string | undefined, gitRef?: string): Promise<MarketplaceSnapshot> {
	if (!gitUrl || parseGitHubRepo(gitUrl) === undefined) {
		throw new Error('Local mode can add marketplaces from GitHub repositories (https://github.com/<owner>/<repo>).');
	}
	const source = addSource(gitUrl, gitRef);
	try {
		return await refresh(source);
	} catch (e) {
		// Don't keep a marketplace that could not be read.
		update((s) => ({ ...s, sources: s.sources.filter((x) => x.id !== source.id || x.builtin) }));
		throw e;
	}
}

async function refreshPage(): Promise<void> {
	const service = cursorHost().cursor.pluginsService;
	await service?._refreshMarketplacePluginsFromDashboardClient(service._getCurrentCacheKey(), { forceRefetch: true });
}

// --- The Customize page's plugins backend --------------------------------------

type Request = Record<string, unknown> | undefined;

const provider = {
	async listMarketplacePlugins(request: Request) {
		const s = await ensureCatalog();
		const id = request?.marketplaceId === undefined ? undefined : String(request.marketplaceId);
		const plugins = id === undefined ? catalog(s) : (s.snapshots[id]?.plugins ?? []);
		return { plugins: plugins.map((p) => pluginMessage(p, s)), nextPageToken: '' };
	},
	async listMarketplaces() {
		const s = await ensureCatalog();
		return {
			marketplaces: s.sources.flatMap((source) => {
				const snap = s.snapshots[source.id];
				return snap === undefined ? [] : [marketplaceMessage(source, snap)];
			}),
		};
	},
	async listUserPluginInstalls() {
		const s = load();
		return { installs: s.installs.map((i) => installMessage(i.plugin, i.installedAt, s)) };
	},
	async getPlugin(request: Request) {
		const s = load();
		const p = findPlugin(s, String(request?.pluginId));
		if (p === undefined) {
			throw new Error('This plugin is not in any marketplace local mode knows.');
		}
		return { plugin: pluginMessage(p, s) };
	},
	async installUserPlugin(request: Request) {
		const s = await ensureCatalog();
		const p = findPlugin(s, String(request?.pluginId));
		if (p === undefined) {
			throw new Error('This plugin is not in any marketplace local mode knows.');
		}
		const variables = toJson(request?.variables);
		const installedAt = Date.now();
		const next = update((x) => ({
			...x,
			installs: [
				...x.installs.filter((i) => i.plugin.id !== p.id),
				{ plugin: p, installedAt, ...(variables === undefined ? {} : { variables }) },
			],
		}));
		reloadPlugins();
		return { install: installMessage(p, installedAt, next) };
	},
	async updateUserPluginInstall(request: Request) {
		const id = String(request?.pluginId);
		const variables = toJson(request?.variables);
		const next = update((x) => ({
			...x,
			installs: x.installs.map((i) => (i.plugin.id === id && variables !== undefined ? { ...i, variables } : i)),
		}));
		const install = next.installs.find((i) => i.plugin.id === id);
		reloadPlugins();
		return { install: install === undefined ? undefined : installMessage(install.plugin, install.installedAt, next) };
	},
	async uninstallUserPlugin(request: Request) {
		const id = String(request?.pluginId);
		update((x) => ({ ...x, installs: x.installs.filter((i) => i.plugin.id !== id) }));
		reloadPlugins();
		return { success: true };
	},
	async installTeamPlugin(): Promise<never> {
		throw new Error(TEAM_ONLY);
	},
	async uninstallTeamPlugin(): Promise<never> {
		throw new Error(TEAM_ONLY);
	},
	async addMarketplace(request: Request) {
		if (request?.teamId !== undefined) {
			throw new Error(TEAM_ONLY);
		}
		const snap = await addGitHubMarketplace(
			request?.gitUrl as string | undefined,
			request?.gitRef as string | undefined,
		);
		const source = load().sources.find((s) => s.id === snap.sourceId) as MarketplaceSource;
		return { marketplace: marketplaceMessage(source, snap) };
	},
	async removeMarketplace(request: Request) {
		const id = String(request?.marketplaceId);
		if (load().sources.some((s) => s.id === id && s.builtin)) {
			throw new Error("Local mode's built-in marketplaces can't be removed.");
		}
		update((x) => {
			const { [id]: _, ...snapshots } = x.snapshots;
			return { ...x, sources: x.sources.filter((s) => s.id !== id), snapshots };
		});
		return { success: true };
	},
	async registerMarketplaceAndPlugins(request: Request) {
		const snap = await addGitHubMarketplace(
			request?.gitUrl as string | undefined,
			request?.gitRef as string | undefined,
		);
		return {
			marketplaceId: big(snap.sourceId),
			plugins: snap.plugins.map((p) => ({ pluginId: big(p.id), name: p.name })),
		};
	},
};

/**
 * A marketplace the extension host parsed (a GitHub URL pasted into the page's
 * search, or a local folder): kept as parsed; GitHub ones refresh like the rest.
 */
async function persistParsed({
	gitRef,
	parseResult,
}: {
	gitRef?: string;
	parseResult: ParsedMarketplace;
}): Promise<void> {
	const parsed: ParsedMarketplace = {
		...parseResult,
		plugins: parseResult.plugins.map((p) => ({ ...p, variables: toJson(p.variables) })),
	};
	const source = addSource(parsed.repositoryUrl, gitRef);
	const snapshot = snapshotFromParse(source, parsed, gitRef, Date.now());
	update((s) => ({ ...s, snapshots: { ...s.snapshots, [source.id]: snapshot } }));
}

/** The Claude Code marketplaces this machine knows, added like any GitHub marketplace. */
async function importClaudeMarketplaces(): Promise<{ discovered: number; registered: number; failed: number }> {
	const result = { discovered: 0, registered: 0, failed: 0 };
	const host = await cursorHost().cursor.pluginsService?._waitForProvider();
	const payloads = (await host?.discoverClaudeMarketplacePayloads([])) ?? [];
	result.discovered = payloads.length;
	for (const p of payloads) {
		if (parseGitHubRepo(p.gitUrl) === undefined) {
			result.failed++;
			continue;
		}
		addSource(p.gitUrl);
		result.registered++;
	}
	if (result.registered > 0) {
		await ensureCatalog();
		await refreshPage().catch(() => {});
	}
	return result;
}

export const marketplace = {
	provider,
	effectivePlugins: () => effectivePlugins(load()),
	/** `$resolveProjectPlugins`: project installs (`.cursor/settings.json`) by name. */
	resolveProjectPlugins: (refs: { name: string; marketplaceName?: string }[]) => {
		const s = load();
		return { plugins: resolvePluginRefs(s, refs).map((p) => pluginJson(p, s.snapshots[p.marketplaceId]?.gitRef)) };
	},
	persistParsed,
	importClaudeMarketplaces,
};
