import { type ReactNode, useState } from 'react';
import { formatTokenCount } from '../../common/format.js';
import { dayKey, dayRange, type HeatCell, type Totals } from '../../common/usage.js';

/** Token series, in stacking order (orca's palette). */
export const SERIES = [
	{ key: 'input', label: 'Input', color: 'rgb(14 165 233 / 0.85)' },
	{ key: 'output', label: 'Output', color: 'rgb(16 185 129 / 0.85)' },
	{ key: 'cacheRead', label: 'Cache read', color: 'rgb(245 158 11 / 0.75)' },
	{ key: 'cacheWrite', label: 'Cache write', color: 'rgb(217 70 239 / 0.7)' },
] as const;

const dayFormat = new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
const monthFormat = new Intl.DateTimeFormat(undefined, { month: 'short' });
const parseDay = (key: string) => new Date(`${key}T12:00:00`);

export function formatDay(key: string): string {
	return dayFormat.format(parseDay(key));
}

/** Proportional bar of the four token kinds, with a legend. */
export function TokenMix({ totals }: { totals: Totals }): ReactNode {
	const sum = totals.input + totals.output + totals.cacheRead + totals.cacheWrite;
	return (
		<div className="lm-mix">
			<div className="lm-mix-bar" role="img" aria-label="Token mix">
				{SERIES.map((s) =>
					totals[s.key] > 0 ? (
						<span key={s.key} style={{ flexGrow: totals[s.key], background: s.color }} title={s.label} />
					) : null,
				)}
			</div>
			<div className="lm-legend">
				{SERIES.map((s) => (
					<span key={s.key} className="lm-legend-item">
						<i style={{ background: s.color }} />
						{s.label}
						<b>{formatTokenCount(totals[s.key])}</b>
						<span className="lm-muted">{sum === 0 ? '0%' : `${Math.round((totals[s.key] / sum) * 100)}%`}</span>
					</span>
				))}
			</div>
		</div>
	);
}

/** Stacked daily bars over [from, to] with a hover readout. */
export function DailyChart(props: { days: Map<string, Totals>; from: number; to: number }): ReactNode {
	const keys = dayRange(props.from, props.to);
	const [hover, setHover] = useState<number | undefined>(undefined);
	const max = Math.max(1, ...keys.map((k) => props.days.get(k)?.tokens ?? 0));
	const shown = hover === undefined ? undefined : keys[hover];
	const shownTotals = shown === undefined ? undefined : props.days.get(shown);
	const labelEvery = Math.ceil(keys.length / 6);

	return (
		<div className="lm-daily">
			<div className="lm-daily-readout">
				{shown === undefined ? (
					<span className="lm-muted">Hover a day for details · peak {formatTokenCount(max)} tokens</span>
				) : (
					<>
						<b>{formatDay(shown)}</b>
						{shownTotals === undefined ? (
							<span className="lm-muted">No requests</span>
						) : (
							<>
								<span>
									{shownTotals.requests} request{shownTotals.requests === 1 ? '' : 's'}
								</span>
								{SERIES.map((s) => (
									<span key={s.key} className="lm-legend-item">
										<i style={{ background: s.color }} />
										{formatTokenCount(shownTotals[s.key])}
									</span>
								))}
							</>
						)}
					</>
				)}
			</div>
			<div
				className="lm-daily-bars"
				role="img"
				aria-label={`Daily tokens, peak ${formatTokenCount(max)}`}
				onPointerMove={(e) => {
					const r = e.currentTarget.getBoundingClientRect();
					setHover(Math.min(keys.length - 1, Math.max(0, Math.floor(((e.clientX - r.left) / r.width) * keys.length))));
				}}
				onPointerLeave={() => setHover(undefined)}
			>
				{keys.map((k, i) => {
					const t = props.days.get(k);
					return (
						<div key={k} className="lm-daily-col" data-hover={hover === i || undefined}>
							<div className="lm-daily-stack" style={{ height: `${((t?.tokens ?? 0) / max) * 100}%` }}>
								{t === undefined
									? null
									: SERIES.map((s) =>
											t[s.key] > 0 ? <span key={s.key} style={{ flexGrow: t[s.key], background: s.color }} /> : null,
										)}
							</div>
						</div>
					);
				})}
			</div>
			<div className="lm-daily-axis">
				{keys.map((k, i) => (
					<span key={k}>{i % labelEvery === 0 ? parseDay(k).getDate() : ''}</span>
				))}
			</div>
		</div>
	);
}

/** GitHub-style activity grid: one column per week, Sunday on top. */
export function Heatmap({ columns }: { columns: HeatCell[][] }): ReactNode {
	const today = dayKey(Date.now());
	return (
		<div className="lm-heat">
			<div className="lm-heat-days" aria-hidden="true">
				<span />
				<span>Mon</span>
				<span />
				<span>Wed</span>
				<span />
				<span>Fri</span>
				<span />
			</div>
			<div className="lm-heat-body">
				<div className="lm-heat-months" aria-hidden="true">
					{columns.map((col, i) => {
						const first = parseDay(col[0].day);
						const prev = i === 0 ? undefined : parseDay(columns[i - 1][0].day);
						return (
							<span key={col[0].day}>
								{prev === undefined || prev.getMonth() !== first.getMonth() ? monthFormat.format(first) : ''}
							</span>
						);
					})}
				</div>
				<div className="lm-heat-grid">
					{columns.map((col) => (
						<div key={col[0].day} className="lm-heat-col">
							{col.map((c) => (
								<span
									key={c.day}
									className="lm-heat-cell"
									data-level={c.level}
									data-future={c.future || undefined}
									data-today={c.day === today || undefined}
									title={c.future ? undefined : `${formatDay(c.day)}: ${formatTokenCount(c.tokens)} tokens`}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function HeatLegend(): ReactNode {
	return (
		<span className="lm-heat-legend">
			Less
			{[0, 1, 2, 3, 4].map((l) => (
				<span key={l} className="lm-heat-cell" data-level={l} />
			))}
			More
		</span>
	);
}

/** Thin share-of-total bar for breakdown rows. */
export function ShareBar({ value, max }: { value: number; max: number }): ReactNode {
	return (
		<span className="lm-share">
			<span style={{ width: `${max === 0 ? 0 : Math.max(2, (value / max) * 100)}%` }} />
		</span>
	);
}
