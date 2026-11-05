// @recovered-by cursor-re
// module: stub for zod
// basis: inferred confidence: C
// method: stub
// run: ext-p0 2026-11-05T10:07:27.327Z
// TODO(stub): zod is not installed at the repo root; the real schemas ship in the unshipped protocol package
export namespace z {
	export type infer<T> = any;
	export type output<T> = any;
	export type input<T> = any;
	export type ZodType<T = any> = any;
	export type ZodTypeDef = any;
	export type RefinementCtx = any;
	export const ZodIssueCode: any;
	export class ZodError extends Error { constructor(issues?: any); readonly issues: any[] }
	export function object(...args: any[]): any;
	export function strictObject(...args: any[]): any;
	export function string(...args: any[]): any;
	export function number(...args: any[]): any;
	export function boolean(...args: any[]): any;
	export function literal(...args: any[]): any;
	export function enum(...args: any[]): any;
	export function unknown(...args: any[]): any;
	export function tuple(...args: any[]): any;
	export function record(...args: any[]): any;
	export function array(...args: any[]): any;
	export function union(...args: any[]): any;
	export function discriminatedUnion(...args: any[]): any;
	export function nullable(...args: any[]): any;
	export function optional(...args: any[]): any;
	export function coerce(...args: any[]): any;
}
