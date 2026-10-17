/**
 * Plausible usage history for previewing the Usage page (devtool "Seed sample
 * usage"). Deterministic for a given seed so screenshots are repeatable.
 */
import type { UsageRecord } from './usage.js';

const MODELS = [
	{ provider: 'AsterGate', model: 'claude-opus-4-8', weight: 5, out: 3_000 },
	{ provider: 'AsterGate', model: 'claude-opus-5', weight: 3, out: 4_000 },
	{ provider: 'AsterGate', model: 'claude-haiku-4-5', weight: 2, out: 900 },
	{ provider: 'OpenRouter', model: 'gpt-5', weight: 2, out: 2_500 },
	{ provider: 'Ollama', model: 'qwen3-coder:30b', weight: 1, out: 1_200 },
];
const PROJECTS = ['cursor', 'web-client', 'orca', 'luna-PC'];

/** mulberry32 */
function random(seed: number): () => number {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
	};
}

export function sampleUsage(now: number, days = 120, seed = 7): UsageRecord[] {
	const rand = random(seed);
	const pick = <T extends { weight: number }>(items: T[]): T => {
		let r = rand() * items.reduce((s, x) => s + x.weight, 0);
		for (const x of items) {
			r -= x.weight;
			if (r < 0) {
				return x;
			}
		}
		return items[0];
	};
	const records: UsageRecord[] = [];
	for (let d = days - 1; d >= 0; d--) {
		const day = new Date(now - d * 86_400_000);
		const weekend = day.getDay() === 0 || day.getDay() === 6;
		// Busier lately, quieter on weekends, some days off.
		if (rand() < (weekend ? 0.55 : 0.12)) {
			continue;
		}
		const count = Math.round((2 + rand() * 14) * (1 + (days - d) / days) * (weekend ? 0.4 : 1));
		for (let i = 0; i < count; i++) {
			const m = pick(MODELS);
			const at = new Date(day);
			at.setHours(9 + Math.floor(rand() * 12), Math.floor(rand() * 60), Math.floor(rand() * 60), 0);
			if (at.getTime() > now) {
				continue;
			}
			const steps = 1 + Math.floor(rand() * rand() * 25);
			const context = 20_000 + Math.floor(rand() * 120_000);
			const cached = m.provider === 'Ollama' ? 0 : Math.floor(context * steps * (0.75 + rand() * 0.2));
			records.push({
				id: `sample-${d}-${i}`,
				conversationId: `sample-conv-${d}-${Math.floor(i / 3)}`,
				type: rand() < 0.1 ? 'resume' : 'agent',
				at: at.getTime(),
				endedAt: at.getTime() + steps * (2_000 + Math.floor(rand() * 9_000)),
				provider: m.provider,
				model: m.model,
				steps,
				input: Math.floor(context * (m.provider === 'Ollama' ? steps : 0.15 + rand() * 0.3)),
				output: Math.floor(m.out * steps * (0.4 + rand())),
				cacheRead: cached,
				cacheWrite: m.provider === 'Ollama' ? 0 : Math.floor(context * (0.1 + rand() * 0.3)),
				reasoning: 0,
				project: PROJECTS[Math.floor(rand() * rand() * PROJECTS.length)],
			});
		}
	}
	return records.sort((a, b) => a.at - b.at);
}
