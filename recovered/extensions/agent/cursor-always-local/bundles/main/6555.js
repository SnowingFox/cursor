// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6555 range:3680291..3683736
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6555: (t2, e2, r2) => {
    "use strict";
    const { kForOnEventAttribute: n2, kListener: s2 } = r2(8864), i2 = /* @__PURE__ */ Symbol("kCode"), o2 = /* @__PURE__ */ Symbol("kData"), a = /* @__PURE__ */ Symbol("kError"), u = /* @__PURE__ */ Symbol("kMessage"), c = /* @__PURE__ */ Symbol("kReason"), l = /* @__PURE__ */ Symbol("kTarget"), m = /* @__PURE__ */ Symbol("kType"), d = /* @__PURE__ */ Symbol("kWasClean");
    class f {
      constructor(t3) {
        this[l] = null, this[m] = t3;
      }
      get target() {
        return this[l];
      }
      get type() {
        return this[m];
      }
    }
    Object.defineProperty(f.prototype, "target", { enumerable: true }), Object.defineProperty(f.prototype, "type", { enumerable: true });
    class p extends f {
      constructor(t3, e3 = {}) {
        super(t3), this[i2] = void 0 === e3.code ? 0 : e3.code, this[c] = void 0 === e3.reason ? "" : e3.reason, this[d] = void 0 !== e3.wasClean && e3.wasClean;
      }
      get code() {
        return this[i2];
      }
      get reason() {
        return this[c];
      }
      get wasClean() {
        return this[d];
      }
    }
    Object.defineProperty(p.prototype, "code", { enumerable: true }), Object.defineProperty(p.prototype, "reason", { enumerable: true }), Object.defineProperty(p.prototype, "wasClean", { enumerable: true });
    class h extends f {
      constructor(t3, e3 = {}) {
        super(t3), this[a] = void 0 === e3.error ? null : e3.error, this[u] = void 0 === e3.message ? "" : e3.message;
      }
      get error() {
        return this[a];
      }
      get message() {
        return this[u];
      }
    }
    Object.defineProperty(h.prototype, "error", { enumerable: true }), Object.defineProperty(h.prototype, "message", { enumerable: true });
    class g extends f {
      constructor(t3, e3 = {}) {
        super(t3), this[o2] = void 0 === e3.data ? null : e3.data;
      }
      get data() {
        return this[o2];
      }
    }
    Object.defineProperty(g.prototype, "data", { enumerable: true });
    const A = { addEventListener(t3, e3, r3 = {}) {
      for (const i4 of this.listeners(t3)) if (!r3[n2] && i4[s2] === e3 && !i4[n2]) return;
      let i3;
      if ("message" === t3) i3 = function(t4, r4) {
        const n3 = new g("message", { data: r4 ? t4 : t4.toString() });
        n3[l] = this, _(e3, this, n3);
      };
      else if ("close" === t3) i3 = function(t4, r4) {
        const n3 = new p("close", { code: t4, reason: r4.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
        n3[l] = this, _(e3, this, n3);
      };
      else if ("error" === t3) i3 = function(t4) {
        const r4 = new h("error", { error: t4, message: t4.message });
        r4[l] = this, _(e3, this, r4);
      };
      else {
        if ("open" !== t3) return;
        i3 = function() {
          const t4 = new f("open");
          t4[l] = this, _(e3, this, t4);
        };
      }
      i3[n2] = !!r3[n2], i3[s2] = e3, r3.once ? this.once(t3, i3) : this.on(t3, i3);
    }, removeEventListener(t3, e3) {
      for (const r3 of this.listeners(t3)) if (r3[s2] === e3 && !r3[n2]) {
        this.removeListener(t3, r3);
        break;
      }
    } };
    function _(t3, e3, r3) {
      "object" == typeof t3 && t3.handleEvent ? t3.handleEvent.call(t3, r3) : t3.call(e3, r3);
    }
    t2.exports = { CloseEvent: p, ErrorEvent: h, Event: f, EventTarget: A, MessageEvent: g };
  }