declare function n(t: any, r: any): {
    symbol: any;
    defaultValue: any;
};
declare class i {
    constructor(t: any, r: any, e: any, n: any);
    get canceled(): any;
    get reason(): any;
    get(t: any): any;
    with(t: any, r: any): i;
    withCancel(): (i | ((r: any) => void))[];
    withUnlinkableCancel(): (i | ((r: any) => void))[];
    withTimeout(t: any): i;
    withDeadline(t: any): i;
    withTimeoutAndCancel(t: any): any[];
    withName(t: any): i;
    withDetached(): i;
    getParent(): any;
    getPath(): any[];
}
declare function o(): i;
declare function a(t: any): Promise<unknown>;
export { n as cF, o as q6, a as uk };
//# sourceMappingURL=core.d.ts.map