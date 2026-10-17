import { describe, expect, it } from 'vitest';
import {
	type CatalogPlugin,
	CURSOR_MARKETPLACE_NAME,
	catalog,
	catalogFromManifest,
	categoryKeys,
	componentsFromTree,
	DEFAULT_SOURCES,
	effectivePlugins,
	findPlugin,
	humanize,
	isStale,
	localPluginDirs,
	type MarketplaceSource,
	type MarketplaceState,
	mcpServers,
	parseGitHubRepo,
	parseState,
	pluginId,
	pluginLocation,
	type RepoContents,
	resolvePluginRefs,
	SNAPSHOT_TTL_MS,
	serializeState,
	snapshotFromParse,
	sourceId,
	stableId,
} from '../../common/marketplace.js';

const NOW = Date.UTC(2026, 9, 17, 12, 0, 0);
const SHA = 'a'.repeat(40);

describe('ids', () => {
	it('are stable, numeric and fit an int64', () => {
		const id = stableId('plugin:x');
		expect(id).toBe(stableId('plugin:x'));
		expect(id).toMatch(/^[1-9]\d*$/u);
		expect(Number(id)).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
		expect(BigInt(id)).toBeGreaterThan(0n);
		expect(stableId('plugin:y')).not.toBe(id);
	});

	it('name a marketplace by its repository, however it is written', () => {
		const id = sourceId('https://github.com/cursor/plugins');
		expect(sourceId('github.com/Cursor/plugins.git')).toBe(id);
		expect(sourceId('git@github.com:cursor/plugins.git')).toBe(id);
		expect(pluginId({ id }, 'teaching')).not.toBe(pluginId({ id }, 'other'));
	});
});

describe('parseGitHubRepo', () => {
	it('takes URLs, SSH remotes and owner/repo', () => {
		const want = { owner: 'cursor', repo: 'plugins', url: 'https://github.com/cursor/plugins' };
		expect(parseGitHubRepo('https://github.com/cursor/plugins')).toEqual(want);
		expect(parseGitHubRepo('https://github.com/cursor/plugins.git')).toEqual(want);
		expect(parseGitHubRepo('github.com/cursor/plugins/tree/main/teaching')).toEqual(want);
		expect(parseGitHubRepo('git@github.com:cursor/plugins.git')).toEqual(want);
		expect(parseGitHubRepo('cursor/plugins')).toEqual(want);
	});

	it('rejects anything else', () => {
		expect(parseGitHubRepo('https://gitlab.com/a/b')).toBeUndefined();
		expect(parseGitHubRepo('https://github.com/only-owner')).toBeUndefined();
		expect(parseGitHubRepo('not a url')).toBeUndefined();
	});
});

describe('pluginLocation', () => {
	it('resolves folders against the repository or pluginRoot', () => {
		expect(pluginLocation('./plugins/x')).toEqual({ kind: 'local', path: 'plugins/x' });
		expect(pluginLocation('teaching')).toEqual({ kind: 'local', path: 'teaching' });
		expect(pluginLocation('x', 'plugins')).toEqual({ kind: 'local', path: 'plugins/x' });
		expect(pluginLocation('./x', 'plugins')).toEqual({ kind: 'local', path: 'x' });
		expect(pluginLocation('./')).toEqual({ kind: 'local', path: '' });
		expect(pluginLocation('../escape')).toBeUndefined();
	});

	it("understands Claude Code's repository sources", () => {
		expect(pluginLocation({ source: 'github', repo: 'acme/tool' })).toEqual({
			kind: 'git',
			url: 'https://github.com/acme/tool',
		});
		expect(pluginLocation({ source: 'url', url: 'https://github.com/acme/tool.git', sha: SHA })).toEqual({
			kind: 'git',
			url: 'https://github.com/acme/tool',
			ref: SHA,
		});
		expect(
			pluginLocation({ source: 'git-subdir', url: 'https://github.com/acme/mono.git', path: 'plugins/a', ref: 'v1' }),
		).toEqual({ kind: 'git', url: 'https://github.com/acme/mono', path: 'plugins/a', ref: 'v1' });
		expect(pluginLocation({ source: 'url', url: 'http://insecure.example/x' })).toBeUndefined();
		expect(pluginLocation({ source: 'git-subdir', url: 'https://github.com/a/b', path: '../x' })).toBeUndefined();
		expect(pluginLocation({ source: 'npm', package: 'x' })).toBeUndefined();
	});
});

describe('components', () => {
	const paths = [
		'p/skills/review/SKILL.md',
		'p/skills/review/notes.md',
		'p/skills/nested/deeper/SKILL.md',
		'p/rules/style.mdc',
		'p/commands/ship.md',
		'p/agents/explorer.md',
		'p/hooks/hooks.json',
		'other/skills/x/SKILL.md',
	];

	it('come from the file list of the plugin folder', () => {
		expect(componentsFromTree(paths, 'p')).toEqual({
			skills: [{ name: 'review', sourcePath: 'p/skills/review/SKILL.md' }],
			rules: [{ name: 'style', sourcePath: 'p/rules/style.mdc' }],
			commands: [{ name: 'ship', sourcePath: 'p/commands/ship.md' }],
			subagents: [{ name: 'explorer', sourcePath: 'p/agents/explorer.md' }],
			hooks: [{ name: 'hooks.json', sourcePath: 'p/hooks/hooks.json' }],
		});
		expect(componentsFromTree(['skills/a/SKILL.md'], '').skills).toEqual([
			{ name: 'a', sourcePath: 'skills/a/SKILL.md' },
		]);
	});

	it('list MCP servers by name', () => {
		expect(mcpServers({ mcpServers: { linear: {}, github: {} } })).toEqual([{ name: 'linear' }, { name: 'github' }]);
		expect(mcpServers(null)).toEqual([]);
	});

	it('map categories to the curated sections', () => {
		expect(categoryKeys(['Productivity', 'design', 'database', 'development'])).toEqual([
			'PRODUCTIVITY',
			'DESIGN',
			'DATA_ANALYTICS',
		]);
		expect(humanize('cursor-team-kit')).toBe('Cursor Team Kit');
	});
});

const cursorSource = DEFAULT_SOURCES[0];
const repo = { owner: 'cursor', repo: 'plugins', url: 'https://github.com/cursor/plugins' };
const contents = (overrides: Partial<RepoContents> = {}): RepoContents => ({
	repo,
	ref: SHA,
	commitSha: SHA,
	paths: [
		'teaching/.cursor-plugin/plugin.json',
		'teaching/skills/plan/SKILL.md',
		'teaching/mcp.json',
		'third_party/gmail/.cursor-plugin/plugin.json',
	],
	pluginManifests: new Map<string, unknown>([
		['teaching', { displayName: 'Teaching', logo: 'assets/logo.svg', keywords: ['education'] }],
	]),
	mcpConfigs: new Map<string, unknown>([['teaching', { mcpServers: { notes: {} } }]]),
	...overrides,
});
const manifest = {
	name: 'cursor-plugins',
	metadata: { description: 'Official Cursor plugins' },
	plugins: [
		{ name: 'teaching', source: 'teaching', description: 'Skill mapping.' },
		{ name: 'gmail', source: 'third_party/gmail', description: 'Mail.' },
		{ name: 'finance', source: 'third_party/finance', minClientVersions: { cursor: 'never' } },
		{ name: 'teaching', source: 'duplicate' },
		{ name: 'bad', source: '../outside' },
		{ name: 'ext', source: { source: 'url', url: 'https://github.com/acme/ext.git', sha: SHA }, category: 'security' },
	],
};

describe('catalogFromManifest', () => {
	const snap = catalogFromManifest(cursorSource, manifest, contents(), NOW);

	it('lists every installable plugin once', () => {
		expect(snap).toMatchObject({
			sourceId: cursorSource.id,
			name: CURSOR_MARKETPLACE_NAME,
			displayName: 'Cursor',
			description: 'Official Cursor plugins',
			gitUrl: repo.url,
			gitRef: SHA,
			fetchedAt: NOW,
		});
		expect(snap.plugins.map((p) => p.name)).toEqual(['teaching', 'gmail', 'ext']);
	});

	it('reads plugins inside the repository from their folder', () => {
		const [teaching, gmail] = snap.plugins;
		expect(teaching).toMatchObject({
			id: pluginId(cursorSource, 'teaching'),
			displayName: 'Teaching',
			description: 'Skill mapping.',
			gitUrl: repo.url,
			gitRef: SHA,
			gitPath: 'teaching',
			local: true,
			logoUrl: `https://raw.githubusercontent.com/cursor/plugins/${SHA}/teaching/assets/logo.svg`,
			categoryKeys: ['FEATURED', 'RESEARCH'],
			skills: [{ name: 'plan' }],
			mcpServers: [{ name: 'notes' }],
		});
		expect(gmail).toMatchObject({ displayName: 'Gmail', gitPath: 'third_party/gmail', skills: [], categoryKeys: [] });
	});

	it('points other plugins at their own repository', () => {
		expect(snap.plugins[2]).toMatchObject({
			gitUrl: 'https://github.com/acme/ext',
			gitRef: SHA,
			local: false,
			categoryKeys: ['INFRASTRUCTURE'],
			skills: [],
		});
		expect(snap.plugins[2].gitPath).toBeUndefined();
	});

	it('keeps manifest entries when the file list is unavailable', () => {
		const bare = catalogFromManifest(cursorSource, manifest, contents({ paths: undefined }), NOW);
		expect(bare.plugins).toHaveLength(3);
		expect(bare.plugins[0].skills).toEqual([]);
	});

	it('knows which folders to read', () => {
		expect(localPluginDirs(manifest)).toEqual(['teaching', 'third_party/gmail', 'third_party/finance', 'duplicate']);
		expect(localPluginDirs({ metadata: { pluginRoot: 'plugins' }, plugins: [{ source: 'a' }] })).toEqual(['plugins/a']);
	});
});

describe('snapshotFromParse', () => {
	it("turns the extension host's parse into a catalog", () => {
		const source: MarketplaceSource = {
			id: sourceId('https://github.com/acme/market'),
			gitUrl: 'https://github.com/acme/market',
		};
		const snap = snapshotFromParse(
			source,
			{
				marketplaceName: 'acme',
				repositoryUrl: 'https://github.com/acme/market',
				commitSha: SHA,
				plugins: [
					{ name: 'one', gitPath: 'plugins/one', skills: [{ name: 's', description: 'd' }, { name: '' }] },
					{ name: 'two', sourceGitUrl: 'https://github.com/acme/two', sourceGitRef: 'v2' },
					{ name: 'broken', parseError: 'no manifest' },
				],
			},
			undefined,
			NOW,
		);
		expect(snap.name).toBe('acme');
		expect(snap.plugins.map((p) => [p.name, p.local, p.gitUrl, p.gitRef, p.gitPath])).toEqual([
			['one', true, 'https://github.com/acme/market', SHA, 'plugins/one'],
			['two', false, 'https://github.com/acme/two', 'v2', undefined],
		]);
		expect(snap.plugins[0].skills).toEqual([{ name: 's', description: 'd' }]);
	});
});

function stateWith(installs: CatalogPlugin[]): MarketplaceState {
	const snap = catalogFromManifest(cursorSource, manifest, contents(), NOW);
	return {
		sources: [...DEFAULT_SOURCES],
		snapshots: { [cursorSource.id]: snap },
		installs: installs.map((plugin) => ({ plugin, installedAt: NOW })),
	};
}

describe('state', () => {
	it('round-trips, always with the built-in marketplaces', () => {
		const added: MarketplaceSource = { id: sourceId('acme/market'), gitUrl: 'https://github.com/acme/market' };
		const state = { ...stateWith([]), sources: [...DEFAULT_SOURCES, added] };
		const back = parseState(serializeState(state));
		expect(back.sources).toEqual([...DEFAULT_SOURCES, added]);
		expect(back.snapshots[cursorSource.id].plugins).toHaveLength(3);
		expect(JSON.parse(serializeState(state)).sources).toEqual([{ id: added.id, gitUrl: added.gitUrl }]);
	});

	it('survives garbage', () => {
		expect(parseState('nope').sources).toEqual(DEFAULT_SOURCES);
		expect(parseState('{"installs":[{"plugin":null},{"plugin":{"id":"1","name":"x"}}]}').installs).toHaveLength(1);
		expect(parseState(undefined).installs).toEqual([]);
	});

	it('drops snapshots an older version read', () => {
		const state = stateWith([]);
		const old = { ...state, snapshots: { [cursorSource.id]: { ...state.snapshots[cursorSource.id], version: 0 } } };
		expect(parseState(serializeState(old)).snapshots).toEqual({});
	});

	it('goes stale after a while', () => {
		const snap = stateWith([]).snapshots[cursorSource.id];
		expect(isStale(snap, NOW + 1000)).toBe(false);
		expect(isStale(snap, NOW + SNAPSHOT_TTL_MS + 1)).toBe(true);
		expect(isStale(undefined, NOW)).toBe(true);
	});

	it('finds catalog and installed plugins', () => {
		const state = stateWith([]);
		const teaching = catalog(state)[0];
		expect(findPlugin(state, teaching.id)).toBe(teaching);
		const gone = { ...teaching, id: '42', name: 'gone' };
		expect(findPlugin(stateWith([gone]), '42')).toEqual(gone);
		expect(resolvePluginRefs(state, [{ name: 'teaching' }, { name: 'gmail', marketplaceName: 'other' }])).toEqual([
			teaching,
		]);
	});
});

describe('effectivePlugins', () => {
	it('tells the extension host where to clone each install from', () => {
		const state = stateWith([]);
		const [teaching, , ext] = catalog(state);
		const out = effectivePlugins({
			...state,
			installs: [
				{ plugin: teaching, installedAt: NOW, variables: { token: 'x' } },
				{ plugin: ext, installedAt: NOW },
			],
		});
		const marketplace = { id: cursorSource.id, name: CURSOR_MARKETPLACE_NAME, gitUrl: repo.url, gitRef: SHA };
		expect(out.marketplaces).toEqual([marketplace]);
		expect(out.plugins[0]).toEqual({
			plugin: {
				id: teaching.id,
				name: 'teaching',
				displayName: 'Teaching',
				description: 'Skill mapping.',
				gitUrl: repo.url,
				gitRef: SHA,
				gitPath: 'teaching',
				fullRef: 'cursor-public/teaching',
				isPublished: true,
				marketplaceId: cursorSource.id,
				marketplace,
			},
			isEnabled: true,
			isTeamRequired: false,
			hasTeamConfiguredVariables: false,
			configuredVariables: { token: 'x' },
			configuredVariableKeys: ['token'],
		});
		expect(out.plugins[1].plugin).not.toHaveProperty('marketplace');
		expect(out.plugins[1].plugin).toMatchObject({ gitUrl: 'https://github.com/acme/ext', gitRef: SHA });
	});
});
