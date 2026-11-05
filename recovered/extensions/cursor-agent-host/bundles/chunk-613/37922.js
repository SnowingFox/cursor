// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 37922 range:208172..208714
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37922: (A, e, t) => {
  "use strict";
  const r = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = t(38238), o = t(16618);
  function n(A2) {
    if (!A2 || "function" != typeof A2.dispatch) throw new s("Argument agent must implement Agent");
    Object.defineProperty(globalThis, r, { value: A2, writable: true, enumerable: false, configurable: false });
  }
  function i() {
    return globalThis[r];
  }
  void 0 === i() && n(new o()), A.exports = { setGlobalDispatcher: n, getGlobalDispatcher: i };
}