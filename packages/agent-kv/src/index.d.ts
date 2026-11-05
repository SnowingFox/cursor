import * as __dep0 from "@anysphere/proto/generated/agent/v1/agent_pb";
declare function p(t: any): string;
declare function h(t: any): Uint8Array<ArrayBuffer>;
declare function _(t: any): Promise<Uint8Array<ArrayBuffer>>;
declare class J {
    constructor();
    getBlob(t: any, r: any): Promise<any>;
    setBlob(t: any, r: any, e: any): Promise<void>;
    setBlobLocallyOnly(t: any, r: any, e: any): Promise<void>;
    flush(t: any): Promise<void>;
}
declare class S {
    constructor();
    set(t: any, r: any): void;
    subscribe(t: any, r: any): () => void;
    get(t: any): any;
}
declare function x(t: any, r: any, e: any): Promise<any>;
declare function T(t: any): boolean;
declare const U: (t: any) => {
    agentId: any;
    latestRootBlobId: Uint8Array<ArrayBuffer>;
    name: string;
    mode: string;
    isRunEverything: boolean;
    approvalMode: undefined;
    createdAt: number;
    lastUsedModel: undefined;
    lastDebugServerPort: undefined;
    currentPlanUri: undefined;
    subagentInfo: undefined;
    blobEncryptionKey: string;
};
declare class j {
    serialize(t: any): Uint8Array<ArrayBuffer>;
    deserialize(t: any): any;
    getBlobType(): {
        kind: string;
    };
}
declare class z {
    constructor(t: any, r: any, e?: {});
    subscribeToMetadata(t: any, r: any): any;
    setMetadata(t: any, r: any): void;
    getMetadata(t: any): any;
    getId(): any;
    getBlobStore(): any;
    getConversationStateStructure(): any;
    getLastRequestIdFromConversation(t: any): Promise<any>;
    getFullConversation(t: any): Promise<__dep0.ljj>;
    deserializeConversationStateStructure(t: any, r: any): Promise<__dep0.ljj>;
    getFullConversationWithSubagents(t: any): Promise<{
        conversationState: __dep0.ljj;
        subagentStates: {};
    }>;
    getLatestCheckpoint(): any;
    handleCheckpoint(t: any, r: any): Promise<void>;
    resetFromDb(t: any): Promise<void>;
    tryResetFromDb(t: any): Promise<boolean>;
    dispose(): Promise<void>;
}
declare function V(t: any): any;
declare class ct {
    constructor(t: any, r: any, e: any, n?: {});
    run(t: any): Promise<void>;
}
export { j as aY, z as pH, ct as hC, J as ve, S as We, V as y_, h as aD, _ as Bk, U as sh, T as TU, x as Vn, p as nj };
//# sourceMappingURL=index.d.ts.map