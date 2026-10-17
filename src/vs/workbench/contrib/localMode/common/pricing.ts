/**
 * List prices for estimating what local-mode requests would cost, in USD per
 * million tokens. Claude prices follow orca's table (claude-model-pricing.ts);
 * OpenAI prices are the public API rates. Gateways may charge differently, so
 * the Usage page always labels these as estimates.
 */

export interface ModelPrice {
	input: number;
	output: number;
	cacheRead: number;
	cacheWrite: number;
}

const claude = (input: number, output: number): ModelPrice => ({
	input,
	output,
	cacheRead: input / 10,
	// 5-minute TTL writes; agent prompts use the default TTL.
	cacheWrite: input * 1.25,
});

const openai = (input: number, output: number, cacheRead: number): ModelPrice => ({
	input,
	output,
	cacheRead,
	// OpenAI does not bill cache writes separately.
	cacheWrite: input,
});

/** First match wins, so more specific patterns come first. */
const PRICES: [RegExp, ModelPrice][] = [
	[/fable-5(?![0-9])/u, claude(10, 50)],
	[/opus-5(?![0-9])/u, claude(5, 25)],
	[/opus-4-(?:5|6|7|8)(?![0-9])/u, claude(5, 25)],
	[/opus-4(?:-1)?(?![0-9])/u, claude(15, 75)],
	[/sonnet-5(?![0-9])/u, claude(2, 10)],
	[/sonnet-4|sonnet-3-[57]|3-[57]-sonnet/u, claude(3, 15)],
	[/haiku-4-5(?![0-9])/u, claude(1, 5)],
	[/haiku-3-5|3-5-haiku/u, { input: 0.8, output: 4, cacheRead: 0.08, cacheWrite: 1 }],
	[/haiku-3(?![0-9-])|3-haiku/u, { input: 0.25, output: 1.25, cacheRead: 0.03, cacheWrite: 0.3 }],
	[/gpt-5(?:-[0-9]+)?-nano/u, openai(0.05, 0.4, 0.005)],
	[/gpt-5(?:-[0-9]+)?-mini/u, openai(0.25, 2, 0.025)],
	[/gpt-5/u, openai(1.25, 10, 0.125)],
	[/gpt-4-1-nano/u, openai(0.1, 0.4, 0.025)],
	[/gpt-4-1-mini/u, openai(0.4, 1.6, 0.1)],
	[/gpt-4-1/u, openai(2, 8, 0.5)],
	[/gpt-4o-mini/u, openai(0.15, 0.6, 0.075)],
	[/gpt-4o/u, openai(2.5, 10, 1.25)],
	[/o4-mini/u, openai(1.1, 4.4, 0.275)],
	[/(?:^|[/-])o3(?![0-9])/u, openai(2, 8, 0.5)],
];

/** "Claude-Opus-4.8-thinking" and "anthropic/claude-opus-4-8" both price as claude-opus-4-8. */
export function priceFor(model: string): ModelPrice | undefined {
	const id = model.toLowerCase().trim().replace(/\./gu, '-');
	return PRICES.find(([pattern]) => pattern.test(id))?.[1];
}

export interface TokenCounts {
	/** New (uncached) input tokens. */
	input: number;
	output: number;
	cacheRead: number;
	cacheWrite: number;
}

/** Estimated USD, or undefined when the model has no known price. */
export function estimateCost(model: string, tokens: TokenCounts): number | undefined {
	const p = priceFor(model);
	if (p === undefined) {
		return undefined;
	}
	return (
		(tokens.input * p.input +
			tokens.output * p.output +
			tokens.cacheRead * p.cacheRead +
			tokens.cacheWrite * p.cacheWrite) /
		1_000_000
	);
}
