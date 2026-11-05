// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 46645 range:3366403..3366993
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