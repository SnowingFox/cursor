// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28967 range:4872252..4873563
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28967: (e, t, r) => {
    "use strict";
    r.d(t, { Q$: () => o, pg: () => d, d3: () => l, _r: () => i, Mt: () => p, kx: () => u });
    var n = r(73024), s = r(98995);
    const o = JSON.parse('{"xh":["@anysphere/tree-chunk-napi","@napi-rs/canvas","tree-sitter","tree-sitter-bash"]}').xh;
    function i(e2) {
      return Object.assign(new Error(e2), { code: "MODULE_NOT_FOUND" });
    }
    function a(e2) {
      const t2 = e2.split("/");
      return e2.startsWith("@") ? t2.slice(0, 2).join("/") : t2[0];
    }
    function c(e2) {
      return "" !== e2 && "." !== e2 && ".." !== e2 && !/[\\\u0000-\u001f\u007f]/.test(e2);
    }
    function l(e2, t2 = o) {
      const r2 = a(e2);
      if (!t2.includes(r2)) return false;
      const n2 = e2.slice(r2.length);
      return "" === n2 || n2.startsWith("/") && n2.slice(1).split("/").every(c);
    }
    function u(e2) {
      return `agent-harness:host-natives:${n.realpathSync(e2)}`;
    }
    function d(e2, t2) {
      const r2 = a(t2), n2 = Object.hasOwn(e2, r2) ? e2[r2] : void 0;
      if (void 0 === n2) throw i(`agent harness: this host does not serve native "${r2}"`);
      return t2 === r2 ? n2 : (0, s.createRequire)(n2).resolve(t2);
    }
    function p(e2, { provided: t2 = o } = {}) {
      return e2.filter((e3) => !l(e3, t2));
    }
  }