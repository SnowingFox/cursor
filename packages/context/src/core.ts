// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../context/dist/core.js" range:372203..374050
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
function n(t, r) {
  return {
    symbol: t,
    defaultValue: r
  };
}
function s(t) {
  const r = new AbortController();
  if (t.aborted) return r.abort(t.reason), {
    signal: r.signal,
    abort(t) {
      r.abort(t);
    },
    unlink() {}
  };
  const e = () => r.abort(t.reason);
  return t.addEventListener("abort", e, {
    once: !0
  }), {
    signal: r.signal,
    abort(n) {
      t.removeEventListener("abort", e), r.abort(n);
    },
    unlink() {
      t.removeEventListener("abort", e);
    }
  };
}
class i {
  constructor(t, r, e, n) {
    this.parent = t, this.values = e || new Map(), this.name = n, this.signal = r || (t ? t.signal : new AbortController().signal);
  }
  get canceled() {
    return this.signal.aborted;
  }
  get reason() {
    return this.signal.reason;
  }
  get(t) {
    return this.values.has(t.symbol) ? this.values.get(t.symbol) : this.parent ? this.parent.get(t) : t.defaultValue;
  }
  with(t, r) {
    const e = new Map(this.values);
    return e.set(t.symbol, r), new i(this, void 0, e);
  }
  withCancel() {
    const t = s(this.signal);
    return [new i(this, t.signal), r => t.abort(r)];
  }
  withUnlinkableCancel() {
    const t = s(this.signal);
    return [new i(this, t.signal), r => t.abort(r), () => t.unlink()];
  }
  withTimeout(t) {
    const r = s(this.signal),
      e = new i(this, r.signal),
      n = setTimeout(() => {
        r.abort(new Error("context deadline exceeded"));
      }, t);
    return r.signal.addEventListener("abort", () => {
      clearTimeout(n);
    }, {
      once: !0
    }), e;
  }
  withDeadline(t) {
    const r = t.getTime() - Date.now();
    if (r <= 0) {
      const t = s(this.signal);
      return t.abort(new Error("context deadline exceeded")), new i(this, t.signal);
    }
    return this.withTimeout(r);
  }
  withTimeoutAndCancel(t) {
    const [r, e] = this.withCancel();
    return [r.withTimeout(t), e];
  }
  withName(t) {
    return new i(this, void 0, void 0, t);
  }
  withDetached() {
    return new i(this, new AbortController().signal);
  }
  getParent() {
    return this.parent;
  }
  getPath() {
    const t = [];
    let r = this;
    for (; r;) r.name && t.unshift(r.name), r = r.getParent();
    return t;
  }
}
function o() {
  return new i();
}
function a(t) {
  return new Promise(r => {
    t.canceled ? r() : t.signal.addEventListener("abort", () => r(), {
      once: !0
    });
  });
}
export { n as cF, o as q6, a as uk };
