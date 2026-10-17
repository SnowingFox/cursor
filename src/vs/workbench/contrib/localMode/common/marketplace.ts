/**
 * Local marketplace: the Customize page's plugin catalog without Cursor's
 * backend. Plugins come from public git marketplaces (a repository with a
 * `.cursor-plugin/marketplace.json` or `.claude-plugin/marketplace.json`),
 * read straight from GitHub; installs are kept on this machine and handed to
 * the extension host, which clones and loads them like backend installs.
 *
 * This file is the pure part: manifest parsing, IDs and the stored state.
 */

/** A marketplace the user follows. */
export interface MarketplaceSource {
	/** Stable numeric ID (decimal string), derived from the repository. */
	id: string;
	/** `https://github.com/<owner>/<repo>` */
	gitUrl: string;
	/** Branch, tag or commit; the default branch when unset. */
	gitRef?: string;
	/** Seeded by default; not removable from the page. */
	builtin?: boolean;
	/** Replaces the manifest's marketplace name. */
	name?: string;
	displayName?: string;
	/** Discover features the marketplace's own plugins (folders outside `third_party/`). */
	featured?: boolean;
}

/** Where Cursor's marketplace keeps partner plugins. */
const PARTNER_DIR = 'third_party/';

export interface Component {
	name: string;
	description?: string;
	sourcePath?: string;
}

/** One plugin as the catalog lists it. */
export interface CatalogPlugin {
	/** Stable numeric ID (decimal string): the page installs by `BigInt(id)`. */
	id: string;
	name: string;
	displayName: string;
	description: string;
	marketplaceId: string;
	marketplaceName: string;
	/** Where the extension host clones the plugin from. */
	gitUrl: string;
	gitRef?: string;
	gitPath?: string;
	/** Lives in the marketplace repository (rather than a repository of its own). */
	local: boolean;
	logoUrl?: string;
	homepage?: string;
	author?: string;
	version?: string;
	tags: string[];
	categoryKeys: string[];
	skills: Component[];
	rules: Component[];
	commands: Component[];
	subagents: Component[];
	hooks: Component[];
	mcpServers: Component[];
	variables?: Record<string, unknown>;
}

/** A marketplace as last read from its repository. */
export interface MarketplaceSnapshot {
	sourceId: string;
	name: string;
	displayName?: string;
	description?: string;
	gitUrl: string;
	/** The ref the plugins were read at: the commit when known. */
	gitRef: string;
	commitSha?: string;
	/** Epoch ms. */
	fetchedAt: number;
	/** CATALOG_VERSION when it was read. */
	version: number;
	plugins: CatalogPlugin[];
}

export interface PluginInstall {
	/** The catalog entry at install time, so an install outlives catalog changes. */
	plugin: CatalogPlugin;
	/** Epoch ms. */
	installedAt: number;
	variables?: Record<string, unknown>;
}

export interface MarketplaceState {
	sources: MarketplaceSource[];
	snapshots: Record<string, MarketplaceSnapshot>;
	installs: PluginInstall[];
}

/** localStorage key (shared by every window of the profile). */
export const MARKETPLACE_STORAGE_KEY = 'cursorLocalMode.marketplace';

/** Snapshots older than this are read again when the catalog is listed. */
export const SNAPSHOT_TTL_MS = 6 * 60 * 60_000;

/** Bumped when what a snapshot holds changes: older ones are read again. */
export const CATALOG_VERSION = 1;

/** Cursor's marketplace keeps the backend's name, which the page treats as Cursor's own. */
export const CURSOR_MARKETPLACE_NAME = 'cursor-public';

export const DEFAULT_SOURCES: MarketplaceSource[] = [
	{
		id: sourceId('https://github.com/cursor/plugins'),
		gitUrl: 'https://github.com/cursor/plugins',
		builtin: true,
		name: CURSOR_MARKETPLACE_NAME,
		displayName: 'Cursor',
		featured: true,
	},
	{
		id: sourceId('https://github.com/anthropics/claude-plugins-official'),
		gitUrl: 'https://github.com/anthropics/claude-plugins-official',
		builtin: true,
		displayName: 'Claude Code',
	},
];

/**
 * cyrb53: a 53-bit string hash, so IDs fit in a JS number and a protobuf
 * int64 alike. Never 0 (the page treats 0 as "no plugin").
 */
export function stableId(key: string): string {
	let h1 = 0xdeadbeef;
	let h2 = 0x41c6ce57;
	for (let i = 0; i < key.length; i++) {
		const c = key.charCodeAt(i);
		h1 = Math.imul(h1 ^ c, 2654435761);
		h2 = Math.imul(h2 ^ c, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
	return String(n === 0 ? 1 : n);
}

export interface GitHubRepo {
	owner: string;
	repo: string;
	/** `https://github.com/<owner>/<repo>` */
	url: string;
}

/** `https://github.com/o/r(.git)`, `github.com/o/r/tree/...`, `git@github.com:o/r.git` or `o/r`. */
export function parseGitHubRepo(input: string): GitHubRepo | undefined {
	const text = input.trim();
	const ssh = /^git@github\.com:([^/\s]+)\/([^/\s]+?)(?:\.git)?\/?$/iu.exec(text);
	const short = /^([\w.-]+)\/([\w.-]+)$/u.exec(text);
	let owner: string | undefined;
	let repo: string | undefined;
	if (ssh !== null) {
		[, owner, repo] = ssh;
	} else if (short !== null && !text.includes('.com')) {
		[, owner, repo] = short;
	} else {
		let url: URL;
		try {
			url = new URL(/^[a-z][a-z0-9+.-]*:\/\//iu.test(text) ? text : `https://${text}`);
		} catch {
			return undefined;
		}
		if (url.hostname.toLowerCase() !== 'github.com' && url.hostname.toLowerCase() !== 'www.github.com') {
			return undefined;
		}
		[owner, repo] = url.pathname.split('/').filter(Boolean);
	}
	repo = repo?.replace(/\.git$/iu, '');
	if (!owner || !repo || !/^[\w.-]+$/u.test(owner) || !/^[\w.-]+$/u.test(repo)) {
		return undefined;
	}
	return { owner, repo, url: `https://github.com/${owner}/${repo}` };
}

export function sourceId(gitUrl: string): string {
	const repo = parseGitHubRepo(gitUrl);
	return stableId(`marketplace:${(repo?.url ?? gitUrl.trim()).toLowerCase()}`);
}

export function pluginId(source: Pick<MarketplaceSource, 'id'>, name: string): string {
	return stableId(`plugin:${source.id}/${name}`);
}

export type PluginLocation =
	| { kind: 'local'; path: string }
	| { kind: 'git'; url: string; path?: string; ref?: string };

/** Joins manifest paths; undefined when one escapes the repository. */
export function joinPath(...parts: (string | undefined)[]): string | undefined {
	const out: string[] = [];
	for (const part of parts) {
		for (const seg of String(part ?? '').split('/')) {
			if (seg === '' || seg === '.') {
				continue;
			}
			if (seg === '..') {
				return undefined;
			}
			out.push(seg);
		}
	}
	return out.join('/');
}

const text = (v: unknown): string | undefined => (typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined);

/**
 * Where a manifest entry's plugin lives: a folder of the marketplace
 * repository (`"./plugins/x"`, `"x"`) or another repository (Claude Code's
 * `github` / `url` / `git-subdir` sources).
 */
export function pluginLocation(source: unknown, pluginRoot?: string): PluginLocation | undefined {
	if (typeof source === 'string') {
		// "./x" is relative to the repository; a bare "x" to metadata.pluginRoot.
		const path = source.trim().startsWith('./') ? joinPath(source) : joinPath(pluginRoot, source);
		return path === undefined ? undefined : { kind: 'local', path };
	}
	if (source === null || typeof source !== 'object') {
		return undefined;
	}
	const s = source as Record<string, unknown>;
	const type = text(s.source) ?? text(s.type);
	const ref = text(s.sha) ?? text(s.ref);
	const path = text(s.path) === undefined ? undefined : joinPath(text(s.path));
	if (text(s.path) !== undefined && path === undefined) {
		return undefined;
	}
	let url: string | undefined;
	if (type === 'github') {
		const repo = text(s.repo) ?? (text(s.owner) && text(s.name) ? `${text(s.owner)}/${text(s.name)}` : undefined);
		url = repo === undefined ? undefined : parseGitHubRepo(repo)?.url;
	} else if (type === 'url' || type === 'git' || type === 'git-subdir') {
		url = text(s.url);
	}
	if (url === undefined || !/^https:\/\//iu.test(url)) {
		return undefined;
	}
	return { kind: 'git', url: url.replace(/\.git$/iu, ''), ...(path ? { path } : {}), ...(ref ? { ref } : {}) };
}

/** "cursor-team-kit" → "Cursor Team Kit". */
export function humanize(name: string): string {
	return name
		.split(/[-_\s]+/u)
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

// Manifest categories / keywords → the Customize page's curated sections.
const CATEGORY_KEYS: [RegExp, string][] = [
	[/^(?:productivity|workflow|automation)$/u, 'PRODUCTIVITY'],
	[/^(?:design|ui|ux|figma)$/u, 'DESIGN'],
	[/^(?:data|database|databases|analytics|data-analytics)$/u, 'DATA_ANALYTICS'],
	[/^(?:infrastructure|deployment|devops|cloud|monitoring|observability|security)$/u, 'INFRASTRUCTURE'],
	[/^(?:payments?|billing)$/u, 'PAYMENTS'],
	[/^(?:research|learning|education)$/u, 'RESEARCH'],
	[/^(?:documents?|docs|files)$/u, 'DOCUMENTS_AND_FILES'],
	[/^(?:sales|crm|marketing)$/u, 'SALES'],
	[/^(?:support|customer-support)$/u, 'CUSTOMER_SUPPORT'],
	[/^(?:finance|legal|accounting)$/u, 'FINANCE_AND_LEGAL'],
	[/^(?:scheduling|calendar)$/u, 'SCHEDULING'],
	[/^(?:communication|collaboration|email|chat)$/u, 'INBOX_AND_COLLABORATION'],
	[/^(?:agents?|orchestration|multi-agent)$/u, 'AGENT_ORCHESTRATION'],
];

export function categoryKeys(words: string[]): string[] {
	const keys: string[] = [];
	for (const w of words) {
		const word = w.trim().toLowerCase();
		const key = CATEGORY_KEYS.find(([re]) => re.test(word))?.[1];
		if (key !== undefined && !keys.includes(key)) {
			keys.push(key);
		}
	}
	return keys;
}

const stem = (file: string) => file.replace(/\.[^.]+$/u, '');

/** Skills, rules, commands, agents and hooks of the plugin in `dir`, from the repository's file list. */
export function componentsFromTree(
	paths: readonly string[],
	dir: string,
): Pick<CatalogPlugin, 'skills' | 'rules' | 'commands' | 'subagents' | 'hooks'> {
	const prefix = dir === '' ? '' : `${dir}/`;
	const out = { skills: [], rules: [], commands: [], subagents: [], hooks: [] } as Pick<
		CatalogPlugin,
		'skills' | 'rules' | 'commands' | 'subagents' | 'hooks'
	>;
	for (const p of paths) {
		if (!p.startsWith(prefix)) {
			continue;
		}
		const rest = p.slice(prefix.length).split('/');
		const [top, second, third] = rest;
		if (top === 'skills' && rest.length === 3 && third === 'SKILL.md') {
			out.skills.push({ name: second, sourcePath: p });
		} else if (top === 'rules' && rest.length === 2 && /\.mdc?$/u.test(second)) {
			out.rules.push({ name: stem(second), sourcePath: p });
		} else if (top === 'commands' && rest.length === 2 && /\.md$/u.test(second)) {
			out.commands.push({ name: stem(second), sourcePath: p });
		} else if (top === 'agents' && rest.length === 2 && /\.md$/u.test(second)) {
			out.subagents.push({ name: stem(second), sourcePath: p });
		} else if (top === 'hooks' && rest.length === 2 && second === 'hooks.json') {
			out.hooks.push({ name: 'hooks.json', sourcePath: p });
		}
	}
	return out;
}

/** The plugin manifest of the plugin in `dir`, if the repository has one. */
export function pluginManifestPath(paths: ReadonlySet<string>, dir: string): string | undefined {
	return ['.cursor-plugin/plugin.json', '.claude-plugin/plugin.json', 'plugin.json']
		.map((f) => joinPath(dir, f) as string)
		.find((p) => paths.has(p));
}

/** The MCP config of the plugin in `dir`, if the repository has one. */
export function mcpConfigPath(paths: ReadonlySet<string>, dir: string): string | undefined {
	return ['.mcp.json', 'mcp.json'].map((f) => joinPath(dir, f) as string).find((p) => paths.has(p));
}

export function mcpServers(config: unknown): Component[] {
	const servers = (config as { mcpServers?: unknown } | null)?.mcpServers;
	return servers !== null && typeof servers === 'object' ? Object.keys(servers).map((name) => ({ name })) : [];
}

/** What reading a marketplace repository produced, for `catalogFromManifest`. */
export interface RepoContents {
	repo: GitHubRepo;
	/** The ref the files were read at (commit when known). */
	ref: string;
	commitSha?: string;
	/** Every file of the repository; undefined when the listing was unavailable. */
	paths?: readonly string[];
	/** Plugin manifests by plugin folder. */
	pluginManifests: ReadonlyMap<string, unknown>;
	/** MCP configs by plugin folder. */
	mcpConfigs: ReadonlyMap<string, unknown>;
}

const rawUrl = (repo: GitHubRepo, ref: string, path: string) =>
	`https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${ref}/${path}`;

function logoUrl(logo: unknown, repo: GitHubRepo, ref: string, dir: string): string | undefined {
	const l = text(logo);
	if (l === undefined) {
		return undefined;
	}
	if (/^https:\/\//iu.test(l)) {
		return l;
	}
	const path = joinPath(dir, l);
	return path === undefined ? undefined : rawUrl(repo, ref, path);
}

function authorName(author: unknown): string | undefined {
	return text(author) ?? text((author as { name?: unknown } | null)?.name);
}

function words(...lists: unknown[]): string[] {
	return lists.flatMap((l) =>
		Array.isArray(l) ? l.filter((w): w is string => typeof w === 'string') : text(l) ? [l as string] : [],
	);
}

/** The catalog of one marketplace from its manifest and what was read of its repository. */
export function catalogFromManifest(
	source: MarketplaceSource,
	manifest: unknown,
	contents: RepoContents,
	now: number,
): MarketplaceSnapshot {
	const m = (manifest ?? {}) as Record<string, unknown>;
	const metadata = (m.metadata ?? {}) as Record<string, unknown>;
	const name = source.name ?? text(m.name) ?? contents.repo.repo;
	const plugins: CatalogPlugin[] = [];
	const seen = new Set<string>();
	for (const raw of Array.isArray(m.plugins) ? m.plugins : []) {
		const entry = (raw ?? {}) as Record<string, unknown>;
		const pluginName = text(entry.name);
		const minCursor = text((entry.minClientVersions as Record<string, unknown> | undefined)?.cursor);
		if (pluginName === undefined || seen.has(pluginName) || minCursor === 'never') {
			continue;
		}
		const location = pluginLocation(entry.source ?? './', text(metadata.pluginRoot));
		if (location === undefined) {
			continue;
		}
		seen.add(pluginName);
		const local = location.kind === 'local';
		const dir = local ? location.path : '';
		const own = (local ? contents.pluginManifests.get(dir) : undefined) as Record<string, unknown> | undefined;
		const components = local && contents.paths !== undefined ? componentsFromTree(contents.paths, dir) : undefined;
		const keywords = words(entry.category, entry.tags, entry.keywords, own?.keywords);
		const variables = (own?.variables ?? entry.variables) as Record<string, unknown> | undefined;
		plugins.push({
			id: pluginId(source, pluginName),
			name: pluginName,
			displayName: text(own?.displayName) ?? text(entry.displayName) ?? humanize(pluginName),
			description: text(own?.description) ?? text(entry.description) ?? '',
			marketplaceId: source.id,
			marketplaceName: name,
			gitUrl: local ? contents.repo.url : location.url,
			gitRef: local ? contents.ref : location.ref,
			...(local ? (dir === '' ? {} : { gitPath: dir }) : location.path ? { gitPath: location.path } : {}),
			local,
			logoUrl: local ? logoUrl(own?.logo ?? entry.logo, contents.repo, contents.ref, dir) : text(entry.logo),
			homepage: text(entry.homepage) ?? text(own?.homepage),
			author: authorName(own?.author) ?? authorName(entry.author),
			version: text(own?.version) ?? text(entry.version),
			tags: [...new Set(keywords.map((w) => w.toLowerCase()))],
			categoryKeys: [
				...(source.featured && local && !`${dir}/`.startsWith(PARTNER_DIR) ? ['FEATURED'] : []),
				...categoryKeys(keywords),
			],
			skills: components?.skills ?? [],
			rules: components?.rules ?? [],
			commands: components?.commands ?? [],
			subagents: components?.subagents ?? [],
			hooks: components?.hooks ?? [],
			mcpServers: local ? mcpServers(contents.mcpConfigs.get(dir) ?? own?.mcpServers) : [],
			...(variables !== null && typeof variables === 'object' && !Array.isArray(variables) ? { variables } : {}),
		});
	}
	return {
		sourceId: source.id,
		name,
		displayName: source.displayName ?? text(m.displayName) ?? humanize(name),
		description: text(metadata.description) ?? text(m.description),
		gitUrl: contents.repo.url,
		gitRef: contents.ref,
		commitSha: contents.commitSha,
		fetchedAt: now,
		version: CATALOG_VERSION,
		plugins,
	};
}

export function isStale(snapshot: MarketplaceSnapshot | undefined, now: number): boolean {
	return snapshot === undefined || now - snapshot.fetchedAt > SNAPSHOT_TTL_MS || now < snapshot.fetchedAt;
}

/** Stored state, with the default marketplaces added and anything malformed dropped. */
export function parseState(json: string | null | undefined): MarketplaceState {
	let raw: Partial<MarketplaceState> = {};
	try {
		const v = JSON.parse(json ?? '{}');
		raw = v !== null && typeof v === 'object' ? v : {};
	} catch {}
	const sources: MarketplaceSource[] = [...DEFAULT_SOURCES];
	for (const s of Array.isArray(raw.sources) ? raw.sources : []) {
		if (typeof s?.gitUrl === 'string' && typeof s.id === 'string' && !sources.some((x) => x.id === s.id)) {
			sources.push({ id: s.id, gitUrl: s.gitUrl, ...(typeof s.gitRef === 'string' ? { gitRef: s.gitRef } : {}) });
		}
	}
	const snapshots: Record<string, MarketplaceSnapshot> = {};
	const stored = raw.snapshots !== null && typeof raw.snapshots === 'object' ? raw.snapshots : {};
	for (const s of sources) {
		const snap = (stored as Record<string, MarketplaceSnapshot>)[s.id];
		if (snap?.version === CATALOG_VERSION && Array.isArray(snap.plugins) && typeof snap.fetchedAt === 'number') {
			snapshots[s.id] = snap;
		}
	}
	const installs = (Array.isArray(raw.installs) ? raw.installs : []).filter(
		(i): i is PluginInstall => typeof i?.plugin?.id === 'string' && typeof i.plugin.name === 'string',
	);
	return { sources, snapshots, installs };
}

export function serializeState(state: MarketplaceState): string {
	return JSON.stringify({
		version: 1,
		// Built-in sources are re-added on every read.
		sources: state.sources.filter((s) => !s.builtin).map(({ id, gitUrl, gitRef }) => ({ id, gitUrl, gitRef })),
		snapshots: state.snapshots,
		installs: state.installs,
	});
}

/** Every plugin of every followed marketplace, first marketplace first. */
export function catalog(state: MarketplaceState): CatalogPlugin[] {
	return state.sources.flatMap((s) => state.snapshots[s.id]?.plugins ?? []);
}

/** A catalog plugin, or an installed one whose marketplace no longer lists it. */
export function findPlugin(state: MarketplaceState, id: string): CatalogPlugin | undefined {
	return catalog(state).find((p) => p.id === id) ?? state.installs.find((i) => i.plugin.id === id)?.plugin;
}

/** The plugin folders a manifest has in the marketplace repository itself. */
export function localPluginDirs(manifest: unknown): string[] {
	const m = (manifest ?? {}) as Record<string, unknown>;
	const root = text((m.metadata as Record<string, unknown> | undefined)?.pluginRoot);
	const dirs = new Set<string>();
	for (const entry of Array.isArray(m.plugins) ? m.plugins : []) {
		const location = pluginLocation((entry as Record<string, unknown> | null)?.source ?? './', root);
		location?.kind === 'local' && dirs.add(location.path);
	}
	return [...dirs];
}

/** A component list of a parsed plugin (`aiserver.v1.SkillDescriptor` and friends). */
function componentList(list: unknown): Component[] {
	return (Array.isArray(list) ? list : []).flatMap((c) =>
		text(c?.name) ? [{ name: c.name, ...(text(c.description) ? { description: c.description } : {}) }] : [],
	);
}

/** The extension host's parse of a marketplace repository (`aiserver.v1.ParseGitHubRepoForPluginsResponse`). */
export interface ParsedMarketplace {
	marketplaceName: string;
	marketplaceDescription?: string;
	defaultBranch?: string;
	repositoryUrl: string;
	commitSha?: string;
	plugins: {
		name: string;
		displayName?: string;
		description?: string;
		gitPath?: string;
		logoUrl?: string;
		sourceGitUrl?: string;
		sourceGitRef?: string;
		parseError?: string;
		variables?: Record<string, unknown>;
		skills?: unknown;
		subagents?: unknown;
		hooks?: unknown;
		rules?: unknown;
		mcpServers?: unknown;
		commands?: unknown;
	}[];
}

/** A catalog from the extension host's parse (a GitHub URL pasted on the page, a local folder). */
export function snapshotFromParse(
	source: MarketplaceSource,
	parsed: ParsedMarketplace,
	gitRef: string | undefined,
	now: number,
): MarketplaceSnapshot {
	const ref = text(parsed.commitSha) ?? text(parsed.defaultBranch) ?? text(gitRef) ?? 'HEAD';
	const name = source.name ?? (text(parsed.marketplaceName) as string);
	return {
		sourceId: source.id,
		name,
		displayName: source.displayName ?? humanize(name),
		description: text(parsed.marketplaceDescription),
		gitUrl: parsed.repositoryUrl,
		gitRef: ref,
		commitSha: text(parsed.commitSha),
		fetchedAt: now,
		version: CATALOG_VERSION,
		plugins: parsed.plugins
			.filter((p) => text(p.name) && !text(p.parseError))
			.map((p) => {
				const external = text(p.sourceGitUrl);
				return {
					id: pluginId(source, p.name),
					name: p.name,
					displayName: text(p.displayName) ?? humanize(p.name),
					description: text(p.description) ?? '',
					marketplaceId: source.id,
					marketplaceName: name,
					gitUrl: external ?? parsed.repositoryUrl,
					gitRef: external ? text(p.sourceGitRef) : ref,
					...(text(p.gitPath) ? { gitPath: p.gitPath } : {}),
					local: external === undefined,
					logoUrl: text(p.logoUrl),
					tags: [],
					categoryKeys: [],
					skills: componentList(p.skills),
					rules: componentList(p.rules),
					commands: componentList(p.commands),
					subagents: componentList(p.subagents),
					hooks: componentList(p.hooks),
					mcpServers: componentList(p.mcpServers),
					...(p.variables !== undefined ? { variables: p.variables } : {}),
				};
			}),
	};
}

/**
 * An `aiserver.v1.Plugin` in its JSON form, as the extension host reads it: a
 * marketplace plugin names its marketplace (installed from that clone), any
 * other plugin is cloned from its own repository.
 */
export function pluginJson(p: CatalogPlugin, marketplaceRef?: string): Record<string, unknown> {
	return {
		id: p.id,
		name: p.name,
		displayName: p.displayName,
		description: p.description,
		gitUrl: p.gitUrl,
		...(p.gitRef ? { gitRef: p.gitRef } : {}),
		...(p.gitPath ? { gitPath: p.gitPath } : {}),
		fullRef: `${p.marketplaceName}/${p.name}`,
		isPublished: true,
		...(p.local
			? {
					marketplaceId: p.marketplaceId,
					marketplace: {
						id: p.marketplaceId,
						name: p.marketplaceName,
						gitUrl: p.gitUrl,
						gitRef: marketplaceRef ?? p.gitRef,
					},
				}
			: {}),
	};
}

/**
 * `aiserver.v1.GetEffectiveUserPluginsResponse` in its JSON form: what the
 * extension host clones and loads.
 */
export function effectivePlugins(state: MarketplaceState): {
	plugins: Record<string, unknown>[];
	marketplaces: Record<string, unknown>[];
} {
	const marketplaces = new Map<string, Record<string, unknown>>();
	const plugins = state.installs.map(({ plugin: p, variables }) => {
		const json = pluginJson(p);
		if (json.marketplace !== undefined) {
			marketplaces.set(p.marketplaceId, json.marketplace as Record<string, unknown>);
		}
		return {
			plugin: json,
			isEnabled: true,
			isTeamRequired: false,
			hasTeamConfiguredVariables: false,
			...(variables === undefined
				? {}
				: { configuredVariables: variables, configuredVariableKeys: Object.keys(variables) }),
		};
	});
	return { plugins, marketplaces: [...marketplaces.values()] };
}

/** Project installs name plugins `<name>` (Cursor's marketplace) or `<marketplace>/<name>`. */
export function resolvePluginRefs(
	state: MarketplaceState,
	refs: readonly { name: string; marketplaceName?: string }[],
): CatalogPlugin[] {
	const all = [...catalog(state), ...state.installs.map((i) => i.plugin)];
	return refs.flatMap((ref) => {
		const market = text(ref.marketplaceName) ?? CURSOR_MARKETPLACE_NAME;
		const hit = all.find((p) => p.name === ref.name && p.marketplaceName === market);
		return hit === undefined ? [] : [hit];
	});
}
