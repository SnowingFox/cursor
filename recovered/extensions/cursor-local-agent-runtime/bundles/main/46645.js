// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 46645 range:1386719..1387309
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46645: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinct = void 0;
    const n = r(51078), o = r(64462);
    t.distinct = function(e2, t2) {
      return (r2) => new n.Observable((s) => {
        const i = /* @__PURE__ */ new Set();
        r2.subscribe((0, n.operate)({ destination: s, next: (t3) => {
          const r3 = e2 ? e2(t3) : t3;
          i.has(r3) || (i.add(r3), s.next(t3));
        } })), t2 && (0, n.from)(t2).subscribe((0, n.operate)({ destination: s, next: () => i.clear(), complete: o.noop }));
      });
    };
  }