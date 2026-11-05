// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/19.js sha256:08f41fe4f6eaae7113148c036c67c95086444c8a1a5aafcfb598c2260e6021bb
// module: "../cursor-sdk-local-runtime/dist/run-store/in-memory-run-event-notifier.js" range:1247..2203
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
class r {
  constructor() {
    this.subscribersByRun = new Map();
  }
  async publishRunEventAppended(e) {
    const t = this.subscribersByRun.get(e.runId);
    if (t) for (const n of t) {
      if (n.closed) continue;
      const t = n.waiters.shift();
      t ? t({
        value: e,
        done: !1
      }) : n.queue.push(e);
    }
  }
  subscribeRunEvents(e) {
    const t = {
        closed: !1,
        queue: [],
        waiters: []
      },
      n = this.subscribersByRun.get(e.runId) ?? new Set();
    n.add(t), this.subscribersByRun.set(e.runId, n);
    const r = e.signal,
      s = () => {
        if (r?.removeEventListener("abort", s), !t.closed) for (t.closed = !0, n.delete(t), 0 === n.size && this.subscribersByRun.delete(e.runId); t.waiters.length > 0;) t.waiters.shift()?.({
          value: void 0,
          done: !0
        });
      };
    return r?.aborted ? s() : r?.addEventListener("abort", s, {
      once: !0
    }), {
      [Symbol.asyncIterator]: () => ({
        next: async () => {
          const e = t.queue.shift();
          return e ? {
            value: e,
            done: !1
          } : t.closed || r?.aborted ? (s(), {
            value: void 0,
            done: !0
          }) : new Promise(e => {
            t.waiters.push(e);
          });
        },
        return: async () => (s(), {
          value: void 0,
          done: !0
        })
      })
    };
  }
}
function s() {
  return new r();
}
export { r as U, s as y };
