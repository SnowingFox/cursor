// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 5349 range:31864..36071
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5349: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.BoundedFrameQueue = t.SequenceValidator = t.AgentWebSocketDeliveryAmbiguousError = void 0, t.identityMatches = function(e2, t2) {
    return void 0 !== t2 && t2.runId === e2.runId && t2.requestId === e2.requestId;
  }, t.headersToAgentWebSocketHeaders = a, t.agentWebSocketHeadersToHeaders = c, t.connectErrorFromAgentWebSocket = function(e2) {
    const t2 = new i.ConnectError(e2.rawMessage, e2.code, c(e2.metadata));
    return t2.details = e2.details.map((e3) => ({ type: e3.typeName, value: e3.binaryValue })), t2;
  }, t.runStartFrame = function(e2, t2, n2) {
    const i2 = new Headers(t2);
    void 0 !== n2 && i2.set(r.AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, n2);
    return new o.AgentWebSocketClientFrame({ frame: { case: "runStart", value: new o.AgentWebSocketRunStart({ identity: e2, headers: a(i2) }) } });
  }, t.clientMessageFrame = function(e2, t2, n2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "clientMessage", value: new o.AgentWebSocketClientMessage({ runId: e2, sequence: t2, message: n2 }) } });
  }, t.halfCloseFrame = function(e2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "halfClose", value: new o.AgentWebSocketClientHalfClose({ runId: e2 }) } });
  }, t.cancelRunFrame = function(e2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "cancelRun", value: new o.AgentWebSocketCancelRun({ runId: e2 }) } });
  }, t.rawDataBytes = function(e2) {
    if (Array.isArray(e2)) return Buffer.concat(e2);
    if (e2 instanceof ArrayBuffer) return new Uint8Array(e2);
    return new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
  };
  const r = n(637), o = n(3192), i = n(8394);
  class s extends Error {
    constructor(e2, t2) {
      super(e2), Object.defineProperty(this, "message", { configurable: true, enumerable: true, writable: true, value: e2 }), void 0 !== t2 && "cause" in t2 && Object.defineProperty(this, "cause", { configurable: true, writable: true, value: t2.cause }), this.agentWebSocketDiagnostics = t2?.diagnostics, this.name = "AgentWebSocketDeliveryAmbiguousError";
    }
  }
  function a(e2) {
    const t2 = [];
    return e2.forEach((e3, n2) => {
      t2.push(new o.AgentWebSocketHeader({ name: n2, value: e3 }));
    }), t2;
  }
  function c(e2) {
    const t2 = new Headers();
    for (const n2 of e2) t2.append(n2.name, n2.value);
    return t2;
  }
  t.AgentWebSocketDeliveryAmbiguousError = s;
  t.SequenceValidator = class {
    constructor() {
      this.next = BigInt(0);
    }
    accept(e2) {
      if (e2 !== this.next) throw new Error(`Agent WebSocket sequence ${e2} arrived out of order`);
      this.next += BigInt(1);
    }
  };
  class l {
    constructor(e2, t2) {
      this.maxBufferedBytes = e2, this.onReturn = t2, this.values = [], this.readers = [], this.bufferedBytes = 0;
    }
    push(e2, t2) {
      if (void 0 !== this.terminal) return true;
      const n2 = this.readers.shift();
      return void 0 !== n2 ? (n2.resolve({ done: false, value: e2 }), true) : !(this.bufferedBytes + t2 > this.maxBufferedBytes) && (this.bufferedBytes += t2, this.values.push({ value: e2, bytes: t2 }), true);
    }
    end() {
      this.settle(void 0);
    }
    error(e2) {
      this.settle(e2);
    }
    settle(e2) {
      if (void 0 === this.terminal) {
        this.terminal = { error: e2 }, void 0 !== e2 && (this.values.length = 0, this.bufferedBytes = 0);
        for (const t2 of this.readers.splice(0)) void 0 === e2 ? t2.resolve({ done: true, value: void 0 }) : t2.reject(e2);
      }
    }
    [Symbol.asyncIterator]() {
      return { next: () => {
        const e2 = this.values.shift();
        if (void 0 !== e2) return this.bufferedBytes -= e2.bytes, Promise.resolve({ done: false, value: e2.value });
        const t2 = this.terminal;
        return void 0 !== t2 ? void 0 === t2.error ? Promise.resolve({ done: true, value: void 0 }) : Promise.reject(t2.error) : new Promise((e3, t3) => {
          this.readers.push({ resolve: e3, reject: t3 });
        });
      }, return: async () => (await this.onReturn(), { done: true, value: void 0 }) };
    }
  }
  t.BoundedFrameQueue = l;
}