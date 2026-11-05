// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86555 range:12176618..12180044
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86555: (e, t, r) => {
    "use strict";
    const { kForOnEventAttribute: n, kListener: s } = r(78864), o = /* @__PURE__ */ Symbol("kCode"), i = /* @__PURE__ */ Symbol("kData"), a = /* @__PURE__ */ Symbol("kError"), c = /* @__PURE__ */ Symbol("kMessage"), l = /* @__PURE__ */ Symbol("kReason"), u = /* @__PURE__ */ Symbol("kTarget"), d = /* @__PURE__ */ Symbol("kType"), p = /* @__PURE__ */ Symbol("kWasClean");
    class m {
      constructor(e2) {
        this[u] = null, this[d] = e2;
      }
      get target() {
        return this[u];
      }
      get type() {
        return this[d];
      }
    }
    Object.defineProperty(m.prototype, "target", { enumerable: true }), Object.defineProperty(m.prototype, "type", { enumerable: true });
    class h extends m {
      constructor(e2, t2 = {}) {
        super(e2), this[o] = void 0 === t2.code ? 0 : t2.code, this[l] = void 0 === t2.reason ? "" : t2.reason, this[p] = void 0 !== t2.wasClean && t2.wasClean;
      }
      get code() {
        return this[o];
      }
      get reason() {
        return this[l];
      }
      get wasClean() {
        return this[p];
      }
    }
    Object.defineProperty(h.prototype, "code", { enumerable: true }), Object.defineProperty(h.prototype, "reason", { enumerable: true }), Object.defineProperty(h.prototype, "wasClean", { enumerable: true });
    class f extends m {
      constructor(e2, t2 = {}) {
        super(e2), this[a] = void 0 === t2.error ? null : t2.error, this[c] = void 0 === t2.message ? "" : t2.message;
      }
      get error() {
        return this[a];
      }
      get message() {
        return this[c];
      }
    }
    Object.defineProperty(f.prototype, "error", { enumerable: true }), Object.defineProperty(f.prototype, "message", { enumerable: true });
    class g extends m {
      constructor(e2, t2 = {}) {
        super(e2), this[i] = void 0 === t2.data ? null : t2.data;
      }
      get data() {
        return this[i];
      }
    }
    Object.defineProperty(g.prototype, "data", { enumerable: true });
    const y = { addEventListener(e2, t2, r2 = {}) {
      for (const o3 of this.listeners(e2)) if (!r2[n] && o3[s] === t2 && !o3[n]) return;
      let o2;
      if ("message" === e2) o2 = function(e3, r3) {
        const n2 = new g("message", { data: r3 ? e3 : e3.toString() });
        n2[u] = this, w(t2, this, n2);
      };
      else if ("close" === e2) o2 = function(e3, r3) {
        const n2 = new h("close", { code: e3, reason: r3.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
        n2[u] = this, w(t2, this, n2);
      };
      else if ("error" === e2) o2 = function(e3) {
        const r3 = new f("error", { error: e3, message: e3.message });
        r3[u] = this, w(t2, this, r3);
      };
      else {
        if ("open" !== e2) return;
        o2 = function() {
          const e3 = new m("open");
          e3[u] = this, w(t2, this, e3);
        };
      }
      o2[n] = !!r2[n], o2[s] = t2, r2.once ? this.once(e2, o2) : this.on(e2, o2);
    }, removeEventListener(e2, t2) {
      for (const r2 of this.listeners(e2)) if (r2[s] === t2 && !r2[n]) {
        this.removeListener(e2, r2);
        break;
      }
    } };
    function w(e2, t2, r2) {
      "object" == typeof e2 && e2.handleEvent ? e2.handleEvent.call(e2, r2) : e2.call(t2, r2);
    }
    e.exports = { CloseEvent: h, ErrorEvent: f, Event: m, EventTarget: y, MessageEvent: g };
  }