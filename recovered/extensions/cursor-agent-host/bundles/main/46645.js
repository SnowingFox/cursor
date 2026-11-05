// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 46645 range:7924414..7925004
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46645: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinct = void 0;
    const n = r(51078), s = r(64462);
    t.distinct = function(e2, t2) {
      return (r2) => new n.Observable((o) => {
        const i = /* @__PURE__ */ new Set();
        r2.subscribe((0, n.operate)({ destination: o, next: (t3) => {
          const r3 = e2 ? e2(t3) : t3;
          i.has(r3) || (i.add(r3), o.next(t3));
        } })), t2 && (0, n.from)(t2).subscribe((0, n.operate)({ destination: o, next: () => i.clear(), complete: s.noop }));
      });
    };
  }