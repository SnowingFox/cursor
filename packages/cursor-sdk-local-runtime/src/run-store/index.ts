// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../cursor-sdk-local-runtime/dist/run-store/index.js" range:394975..401079
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "./id";
import * as __dep1 from "@anysphere/agent-kv/index";
import * as __dep2 from "./status";
import * as __dep3 from "./in-memory-run-event-notifier";
import * as __dep4 from "node:fs";
import * as __dep5 from "node:net";
import * as __dep6 from "node:path";
const __exp0 = s.U;
const __exp1 = n.M2;
const __exp2 = n.WQ;
var n = __dep0;
__dep1, __dep2;
var s = __dep3,
  i = __dep4,
  o = __dep5,
  a = __dep6;
class u {
  constructor(t) {
    this.socketPath = t.socketPath, this.connectTimeoutMs = t.connectTimeoutMs ?? 1e3, this.requestTimeoutMs = t.requestTimeoutMs ?? 5e3;
  }
  async publishRunEventAppended(t) {
    const r = await p({
      socketPath: this.socketPath,
      timeoutMs: this.connectTimeoutMs
    });
    try {
      d(r, {
        type: "publish",
        hint: t
      });
      const e = await async function (t, r) {
        const e = new AbortController(),
          n = setTimeout(() => e.abort(), r);
        try {
          for await (const r of f(t, e.signal)) return r;
        } catch (t) {
          if (e.signal.aborted) throw new Error("Timed out waiting for notifier response");
          throw t;
        } finally {
          clearTimeout(n);
        }
        throw new Error("Notifier closed before sending a response");
      }(r, this.requestTimeoutMs);
      if ("error" === e.type) throw new Error(e.message);
      if ("ack" !== e.type) throw new Error(`Unexpected notifier response ${e.type}`);
    } finally {
      r.destroy();
    }
  }
  subscribeRunEvents(t) {
    const r = function () {
        let t, r;
        return {
          promise: new Promise((e, n) => {
            t = e, r = n;
          }),
          resolve: t,
          reject: r
        };
      }(),
      e = this.createSubscription(t, r);
    return {
      ready: r.promise,
      [Symbol.asyncIterator]: () => e[Symbol.asyncIterator]()
    };
  }
  async *createSubscription(t, r) {
    let e;
    try {
      e = await p({
        socketPath: this.socketPath,
        timeoutMs: this.connectTimeoutMs,
        signal: t.signal
      });
      const n = f(e, t.signal)[Symbol.asyncIterator]();
      try {
        d(e, {
          type: "subscribe",
          runId: t.runId
        });
        const s = await n.next();
        if (s.done) throw new Error("Notifier closed before confirming subscription");
        if ("error" === s.value.type) throw new Error(s.value.message);
        if ("ack" !== s.value.type) throw new Error(`Unexpected notifier response ${s.value.type}`);
        r.resolve();
        for await (const t of {
          [Symbol.asyncIterator]: () => n
        }) if ("hint" === t.type && (yield t.hint), "error" === t.type) throw new Error(t.message);
      } catch (t) {
        throw r.reject(t), t;
      } finally {
        await n.return?.();
      }
    } catch (t) {
      throw r.reject(t), t;
    } finally {
      e?.destroy();
    }
  }
}
class c {
  static async listen(t) {
    const r = new c(t);
    return await r.listen(), r;
  }
  constructor(t) {
    this.options = t, this.subscribersByRun = new Map(), this.runBySubscriber = new Map(), this.sockets = new Set(), this.server = (0, o.createServer)(t => this.handleSocket(t));
  }
  async listen() {
    var t;
    m(t = this.options.socketPath) || ((0, i.mkdirSync)((0, a.dirname)(t), {
      recursive: !0
    }), l(t)), await new Promise((t, r) => {
      const e = t => {
          s(), r(t);
        },
        n = () => {
          s(), t();
        },
        s = () => {
          this.server.off("error", e), this.server.off("listening", n);
        };
      this.server.once("error", e), this.server.once("listening", n), this.server.listen(this.options.socketPath);
    });
  }
  async close() {
    for (const t of this.sockets) t.destroy();
    this.sockets.clear(), this.subscribersByRun.clear(), this.runBySubscriber.clear(), await new Promise((t, r) => {
      this.server.close(e => {
        e ? r(e) : t();
      });
    }).catch(t => {
      if ("ERR_SERVER_NOT_RUNNING" !== ("object" == typeof t && null !== t && "code" in t ? t.code : void 0)) throw t;
    }), l(this.options.socketPath);
  }
  handleSocket(t) {
    this.sockets.add(t);
    let r = "";
    t.on("data", e => {
      for (r += e.toString("utf8");;) {
        const e = r.indexOf("\n");
        if (-1 === e) return;
        const n = r.slice(0, e);
        r = r.slice(e + 1), this.handleLine(t, n);
      }
    }), t.on("close", () => this.cleanupSocket(t)), t.on("error", () => this.cleanupSocket(t));
  }
  handleLine(t, r) {
    const e = function (t) {
      const r = g(t);
      if (r) return "subscribe" === r.type && "string" == typeof r.runId ? {
        type: "subscribe",
        runId: r.runId
      } : "publish" === r.type && _(r.hint) ? {
        type: "publish",
        hint: r.hint
      } : void 0;
    }(r);
    return e ? "subscribe" === e.type ? (this.subscribe(t, e.runId), void d(t, {
      type: "ack"
    })) : (this.publish(e.hint), d(t, {
      type: "ack"
    }), void t.end()) : (d(t, {
      type: "error",
      message: "Invalid notifier message"
    }), void t.end());
  }
  subscribe(t, r) {
    this.unsubscribe(t);
    const e = this.subscribersByRun.get(r) ?? new Set();
    e.add(t), this.subscribersByRun.set(r, e), this.runBySubscriber.set(t, r);
  }
  publish(t) {
    const r = this.subscribersByRun.get(t.runId);
    if (r) for (const e of r) e.destroyed || d(e, {
      type: "hint",
      hint: t
    });
  }
  cleanupSocket(t) {
    this.unsubscribe(t), this.sockets.delete(t);
  }
  unsubscribe(t) {
    const r = this.runBySubscriber.get(t);
    if (!r) return;
    const e = this.subscribersByRun.get(r);
    e?.delete(t), 0 === e?.size && this.subscribersByRun.delete(r), this.runBySubscriber.delete(t);
  }
}
function l(t) {
  m(t) || (0, i.existsSync)(t) && (0, i.unlinkSync)(t);
}
function m(t) {
  return t.startsWith("\\\\.\\pipe\\");
}
function d(t, r) {
  t.write(`${JSON.stringify(r)}\n`);
}
async function p(t) {
  if (t.signal?.aborted) throw w(t.signal);
  return new Promise((r, e) => {
    const n = (0, o.createConnection)(t.socketPath),
      s = setTimeout(() => {
        c(), n.destroy(), e(new Error(`Timed out connecting to ${t.socketPath}`));
      }, t.timeoutMs),
      i = () => {
        c(), r(n);
      },
      a = t => {
        c(), e(t);
      },
      u = () => {
        c(), n.destroy(), e(w(t.signal));
      },
      c = () => {
        clearTimeout(s), n.off("connect", i), n.off("error", a), t.signal?.removeEventListener("abort", u);
      };
    n.once("connect", i), n.once("error", a), t.signal?.addEventListener("abort", u, {
      once: !0
    });
  });
}
async function* f(t, r) {
  let e = "";
  const n = [];
  let s,
    i,
    o = !1;
  const a = () => {
      s?.(), s = void 0;
    },
    u = r => {
      for (e += r.toString("utf8");;) {
        const r = e.indexOf("\n");
        if (-1 === r) break;
        const s = e.slice(0, r);
        e = e.slice(r + 1);
        const a = h(s);
        if (!a) {
          i = new Error("Invalid notifier server message"), o = !0, t.destroy();
          break;
        }
        n.push(a);
      }
      a();
    },
    c = () => {
      o = !0, a();
    },
    l = t => {
      i = t, o = !0, a();
    },
    m = () => {
      i = w(r), o = !0, t.destroy(), a();
    };
  t.on("data", u), t.on("close", c), t.on("error", l), r?.addEventListener("abort", m, {
    once: !0
  });
  try {
    for (;;) {
      const t = n.shift();
      if (t) yield t;else {
        if (i) throw i;
        if (o) return;
        await new Promise(t => {
          s = t;
        });
      }
    }
  } finally {
    t.off("data", u), t.off("close", c), t.off("error", l), r?.removeEventListener("abort", m);
  }
}
function h(t) {
  const r = g(t);
  if (r) return "ack" === r.type ? {
    type: "ack"
  } : "error" === r.type && "string" == typeof r.message ? {
    type: "error",
    message: r.message
  } : "hint" === r.type && _(r.hint) ? {
    type: "hint",
    hint: r.hint
  } : void 0;
}
function g(t) {
  try {
    const r = JSON.parse(t);
    if ("object" != typeof r || null === r || Array.isArray(r)) return;
    const e = {};
    for (const [t, n] of Object.entries(r)) e[t] = n;
    return e;
  } catch {
    return;
  }
}
function _(t) {
  return Boolean(t && "object" == typeof t && "string" == typeof t.runId && "string" == typeof t.offset);
}
function w(t) {
  const r = t?.reason;
  return r instanceof Error ? r : new Error("Run event notifier aborted");
}
export { __exp0 as U1, u as tY, c as w, __exp1 as M2, __exp2 as WQ };
