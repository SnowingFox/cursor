import { type ReactNode, useMemo, useState, useSyncExternalStore } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import { formatCost, formatDuration, formatTokenCount } from '../../common/format.js';
import {
	cacheHitRate,
	type Group,
	heatmap,
	recordCost,
	streaks,
	summarize,
	TYPE_LABELS,
	toCsv,
	totalTokens,
	type UsageRecord,
} from '../../common/usage.js';
import { clearUsage, subscribeUsage, usageRecords } from '../usageStore.js';
import { Icon } from './icons.js';
import { ProviderAvatar } from './ProviderCard.js';
import { DailyChart, HeatLegend, Heatmap, ShareBar, TokenMix } from './UsageCharts.js';

type Range = '7d' | '30d' | '90d' | 'all';
const RANGES: { key: Range; label: string; days?: number }[] = [
	{ key: '7d', label: '7 days', days: 7 },
	{ key: '30d', label: '30 days', days: 30 },
	{ key: '90d', label: '90 days', days: 90 },
	{ key: 'all', label: 'All time' },
];
const PAGE_SIZE = 20;
const DAY_MS = 86_400_000;

const timeFormat = new Intl.DateTimeFormat(undefined, {
	month: 'short',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
});

function startOfDay(ms: number): number {
	const d = new Date(ms);
	d.setHours(0, 0, 0, 0);
	return d.getTime();
}

function download(name: string, text: string): void {
	const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
	const a = document.createElement('a');
	a.href = url;
	a.download = name;
	document.body.append(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

function Stat(props: { label: string; value: string; sub: ReactNode }): ReactNode {
	return (
		<div className="lm-stat">
			<span className="lm-stat-label">{props.label}</span>
			<span className="lm-stat-value">{props.value}</span>
			<span className="lm-stat-sub">{props.sub}</span>
		</div>
	);
}

function Panel(props: { title: string; trailing?: ReactNode; children: ReactNode }): ReactNode {
	return (
		<section className="local-mode-card lm-panel">
			<div className="lm-panel-header">
				<span className="local-mode-block-title">{props.title}</span>
				{props.trailing}
			</div>
			<div className="lm-panel-body">{props.children}</div>
		</section>
	);
}

function costText(g: { cost: number; unpriced: number; requests: number }): string {
	return g.unpriced === g.requests ? '—' : formatCost(g.cost);
}

function Breakdown(props: { groups: Group[]; label: string; showProvider?: boolean }): ReactNode {
	const max = props.groups[0]?.tokens ?? 0;
	return (
		<table className="lm-table lm-breakdown">
			<thead>
				<tr>
					<th>{props.label}</th>
					<th className="lm-num">Requests</th>
					<th className="lm-num">Tokens</th>
					<th className="lm-num">Cost</th>
				</tr>
			</thead>
			<tbody>
				{props.groups.slice(0, 12).map((g) => (
					<tr key={`${g.provider ?? ''}/${g.key}`}>
						<td>
							<span className="lm-cell-main" title={g.key}>
								{g.key}
							</span>
							{props.showProvider && g.provider ? <span className="lm-muted"> · {g.provider}</span> : null}
							<ShareBar value={g.tokens} max={max} />
						</td>
						<td className="lm-num">{g.requests.toLocaleString()}</td>
						<td className="lm-num">{formatTokenCount(g.tokens)}</td>
						<td className="lm-num">{costText(g)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

function RequestsTable({ records }: { records: UsageRecord[] }): ReactNode {
	const [page, setPage] = useState(0);
	const newest = useMemo(() => [...records].reverse(), [records]);
	const pages = Math.max(1, Math.ceil(newest.length / PAGE_SIZE));
	const current = Math.min(page, pages - 1);
	const rows = newest.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE);

	return (
		<>
			<table className="lm-table lm-requests">
				<thead>
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Model</th>
						<th className="lm-num">Tokens</th>
						<th className="lm-num">Cost</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((r) => {
						const cost = recordCost(r);
						return (
							<tr key={r.id}>
								<td title={new Date(r.at).toISOString()} className="lm-nowrap">
									{timeFormat.format(r.at)}
								</td>
								<td>
									<span className="lm-badge" data-type={r.type}>
										{TYPE_LABELS[r.type] ?? r.type}
									</span>
								</td>
								<td>
									<span className="lm-cell-main" title={`${r.provider} · ${r.model}`}>
										{r.model}
									</span>
									<span className="lm-cell-sub">
										{r.provider} · {r.steps} call{r.steps === 1 ? '' : 's'} · {formatDuration(r.endedAt - r.at)}
									</span>
								</td>
								<td
									className="lm-num"
									title={`Input ${r.input.toLocaleString()}\nOutput ${r.output.toLocaleString()}\nCache read ${r.cacheRead.toLocaleString()}\nCache write ${r.cacheWrite.toLocaleString()}`}
								>
									{formatTokenCount(totalTokens(r))}
								</td>
								<td className="lm-num" title={cost === undefined ? 'No list price for this model' : undefined}>
									{cost === undefined ? '—' : formatCost(cost)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{pages > 1 ? (
				<div className="lm-pager">
					<span className="lm-muted">
						{current * PAGE_SIZE + 1}–{Math.min(newest.length, (current + 1) * PAGE_SIZE)} of{' '}
						{newest.length.toLocaleString()}
					</span>
					<button
						type="button"
						className="local-mode-link-button"
						disabled={current === 0}
						onClick={() => setPage(current - 1)}
					>
						Previous
					</button>
					<button
						type="button"
						className="local-mode-link-button"
						disabled={current >= pages - 1}
						onClick={() => setPage(current + 1)}
					>
						Next
					</button>
				</div>
			) : null}
		</>
	);
}

/** Settings > Usage: what the custom providers have served on this machine. */
export function UsagePage(): ReactNode {
	const { Page } = cursorHost().cursor.ui;
	const all = useSyncExternalStore(subscribeUsage, usageRecords);
	const [range, setRange] = useState<Range>('30d');
	const [provider, setProvider] = useState('');
	const [confirmClear, setConfirmClear] = useState(false);

	const providers = useMemo(() => [...new Set(all.map((r) => r.provider))].sort(), [all]);
	// Recomputed when records change, so charts stay stable between renders.
	const now = useMemo(() => Date.now(), [all]);
	const days = RANGES.find((r) => r.key === range)?.days;
	const from = days === undefined ? startOfDay(all[0]?.at ?? now) : startOfDay(now - (days - 1) * DAY_MS);
	const byProvider = useMemo(() => (provider ? all.filter((r) => r.provider === provider) : all), [all, provider]);
	const records = useMemo(() => byProvider.filter((r) => r.at >= from), [byProvider, from]);
	const summary = useMemo(() => summarize(records), [records]);
	const history = useMemo(() => summarize(byProvider), [byProvider]);
	const heat = useMemo(() => heatmap(history.days, 26, now), [history, now]);
	const streak = streaks(history.days, now);
	const t = summary.totals;
	const chartFrom = Math.max(from, startOfDay(now - 89 * DAY_MS));

	const page = (children: ReactNode) => (
		<Page
			title="Usage"
			description="Requests served by your custom providers, recorded on this machine. Costs are estimates from public list prices."
		>
			<div className="local-mode-settings lm-usage">{children}</div>
		</Page>
	);

	if (all.length === 0) {
		return page(
			<div className="local-mode-card local-mode-empty">
				<div className="local-mode-empty-title">No usage yet</div>
				<div className="local-mode-hint">
					Run an agent on a custom provider model; every request will show up here with its tokens and cost.
				</div>
			</div>,
		);
	}

	return page(
		<>
			<div className="lm-toolbar">
				<label className="lm-select">
					{provider ? <ProviderAvatar name={provider} size="sm" /> : null}
					<select value={provider} aria-label="Provider" onChange={(e) => setProvider(e.target.value)}>
						<option value="">All providers</option>
						{providers.map((p) => (
							<option key={p} value={p}>
								{p}
							</option>
						))}
					</select>
					<Icon name="chevron" size={12} />
				</label>
				<div className="local-mode-segmented">
					{RANGES.map((r) => (
						<button
							key={r.key}
							type="button"
							aria-pressed={range === r.key}
							data-active={range === r.key || undefined}
							onClick={() => setRange(r.key)}
						>
							{r.label}
						</button>
					))}
				</div>
				<span className="lm-spacer" />
				<button
					type="button"
					className="local-mode-button lm-export"
					disabled={records.length === 0}
					onClick={() => download(`cursor-usage-${new Date().toISOString().slice(0, 10)}.csv`, toCsv(records))}
				>
					Export CSV
				</button>
			</div>

			<div className="lm-stats">
				<Stat
					label="Requests"
					value={t.requests.toLocaleString()}
					sub={`${t.steps.toLocaleString()} calls · ${summary.activeDays} active day${summary.activeDays === 1 ? '' : 's'}`}
				/>
				<Stat
					label="Tokens"
					value={formatTokenCount(t.tokens)}
					sub={`${formatTokenCount(t.input + t.cacheRead + t.cacheWrite)} in · ${formatTokenCount(t.output)} out`}
				/>
				<Stat
					label="Est. cost"
					value={t.unpriced === t.requests ? '—' : formatCost(t.cost)}
					sub={
						t.unpriced > 0
							? `${t.unpriced.toLocaleString()} unpriced`
							: t.requests > 0
								? `${formatCost(t.cost / t.requests)} per request`
								: 'Nothing yet'
					}
				/>
				<Stat
					label="Cache hit rate"
					value={`${Math.round(cacheHitRate(t) * 100)}%`}
					sub={`${formatTokenCount(t.cacheRead)} read from cache`}
				/>
			</div>

			{records.length === 0 ? (
				<div className="local-mode-card local-mode-empty">
					<div className="local-mode-hint">No requests in this period.</div>
				</div>
			) : (
				<>
					<Panel
						title="Daily tokens"
						trailing={<span className="lm-muted">{days === undefined ? 'last 90 days' : ''}</span>}
					>
						<DailyChart days={summary.days} from={chartFrom} to={now} />
						<TokenMix totals={t} />
					</Panel>

					<Panel title="By provider">
						<div className="lm-tiles">
							{summary.byProvider.map((g) => (
								<button
									key={g.key}
									type="button"
									className="lm-tile"
									data-active={provider === g.key || undefined}
									title={provider === g.key ? 'Show all providers' : `Only ${g.key}`}
									onClick={() => setProvider(provider === g.key ? '' : g.key)}
								>
									<span className="lm-tile-head">
										<ProviderAvatar name={g.key} size="sm" />
										<span className="lm-cell-main">{g.key}</span>
										<span className="lm-muted">{Math.round((g.tokens / Math.max(1, t.tokens)) * 100)}%</span>
									</span>
									<span className="lm-tile-value">{formatTokenCount(g.tokens)}</span>
									<span className="lm-muted">
										{g.requests.toLocaleString()} requests · {costText(g)}
									</span>
									<ShareBar value={g.tokens} max={t.tokens} />
								</button>
							))}
						</div>
					</Panel>

					<Panel title="By model">
						<Breakdown groups={summary.byModel} label="Model" showProvider={!provider} />
					</Panel>

					{summary.byProject.length > 1 || summary.byProject[0]?.key !== 'No project' ? (
						<Panel title="By project">
							<Breakdown groups={summary.byProject} label="Project" />
						</Panel>
					) : null}

					<Panel
						title="Requests"
						trailing={<span className="lm-muted">{records.length.toLocaleString()} in this period</span>}
					>
						<RequestsTable key={`${range}/${provider}`} records={records} />
					</Panel>
				</>
			)}

			<Panel
				title="Activity"
				trailing={
					<span className="lm-muted">
						{streak.current} day streak · longest {streak.longest} · {history.activeDays} active days
					</span>
				}
			>
				<Heatmap columns={heat} />
				<div className="lm-heat-footer">
					<span className="lm-muted">Last 26 weeks{provider ? ` · ${provider}` : ''}</span>
					<HeatLegend />
				</div>
			</Panel>

			<div className="lm-footer">
				<span className="lm-muted">
					{all.length.toLocaleString()} requests recorded since {timeFormat.format(all[0].at)}. Average request{' '}
					{formatDuration(t.requests === 0 ? 0 : t.durationMs / t.requests)}.
				</span>
				<button
					type="button"
					className="local-mode-link-button"
					data-danger={confirmClear || undefined}
					onBlur={() => setConfirmClear(false)}
					onClick={() => {
						if (confirmClear) {
							clearUsage();
						}
						setConfirmClear(!confirmClear);
					}}
				>
					{confirmClear ? 'Click again to delete all usage history' : 'Clear history'}
				</button>
			</div>
		</>,
	);
}
