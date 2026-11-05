// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 29254 range:119630..121131
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29254: (A) => {
  "use strict";
  let e = 0;
  const t = 1e3;
  let r;
  const s = /* @__PURE__ */ Symbol("kFastTimer"), o = [];
  function n() {
    e += 499;
    let A2 = 0, t2 = o.length;
    for (; A2 < t2; ) {
      const r2 = o[A2];
      0 === r2._state ? (r2._idleStart = e - 499, r2._state = 1) : 1 === r2._state && e >= r2._idleStart + r2._idleTimeout && (r2._state = -1, r2._idleStart = -1, r2._onTimeout(r2._timerArg)), -1 === r2._state ? (r2._state = -2, 0 !== --t2 && (o[A2] = o[t2])) : ++A2;
    }
    o.length = t2, 0 !== o.length && i();
  }
  function i() {
    r ? r.refresh() : (clearTimeout(r), r = setTimeout(n, 499), r.unref && r.unref());
  }
  class a {
    [s] = true;
    _state = -2;
    _idleTimeout = -1;
    _idleStart = -1;
    _onTimeout;
    _timerArg;
    constructor(A2, e2, t2) {
      this._onTimeout = A2, this._idleTimeout = e2, this._timerArg = t2, this.refresh();
    }
    refresh() {
      -2 === this._state && o.push(this), r && 1 !== o.length || i(), this._state = 0;
    }
    clear() {
      this._state = -1, this._idleStart = -1;
    }
  }
  A.exports = { setTimeout: (A2, e2, r2) => e2 <= t ? setTimeout(A2, e2, r2) : new a(A2, e2, r2), clearTimeout(A2) {
    A2[s] ? A2.clear() : clearTimeout(A2);
  }, setFastTimeout: (A2, e2, t2) => new a(A2, e2, t2), clearFastTimeout(A2) {
    A2.clear();
  }, now: () => e, tick(A2 = 0) {
    e += A2 - t + 1, n(), n();
  }, reset() {
    e = 0, o.length = 0, clearTimeout(r), r = null;
  }, kFastTimer: s };
}