declare function s(t: any, r: any, e: any): Promise<Map<any, any>>;
declare function i(t: any, r: any, e: any): Promise<any[]>;
declare function o(t: any): Promise<unknown>;
declare function a(t: any, r: any): Promise<unknown>;
declare class u extends Error {
    constructor(t: any);
}
declare function c(t: any, r: any, e: any): Promise<unknown>;
declare function l(t: any, r?: number): Promise<unknown>;
declare class m {
    constructor(t: any);
    enqueue(t: any): Promise<any>;
    enqueueList(t: any, r: any): Promise<Map<any, any>>;
    close(): Promise<unknown>;
}
export { u as MU, l as O$, i as PH, m as TJ, o as cb, a as st, c as wj, s as xb };
//# sourceMappingURL=promise-extras.d.ts.map