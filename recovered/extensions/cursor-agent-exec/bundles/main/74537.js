// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 74537 range:6409595..6411041
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74537: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromEvent = void 0;
    const n = r(51078), s = r(65683), o = ["addListener", "removeListener"], i = ["addEventListener", "removeEventListener"], a = ["on", "off"];
    function c(e2, t2, r2, n2, s2) {
      const [c2, p] = d(m = r2) ? i : l(m) ? o : u(m) ? a : [];
      var m;
      if (!c2 || !p) throw new TypeError("Invalid event target");
      r2[c2](n2, e2, s2), t2.add(() => r2[p](n2, e2, s2));
    }
    function l(e2) {
      return (0, n.isFunction)(e2.addListener) && (0, n.isFunction)(e2.removeListener);
    }
    function u(e2) {
      return (0, n.isFunction)(e2.on) && (0, n.isFunction)(e2.off);
    }
    function d(e2) {
      return (0, n.isFunction)(e2.addEventListener) && (0, n.isFunction)(e2.removeEventListener);
    }
    t.fromEvent = function e2(t2, r2, o2, i2) {
      if ((0, n.isFunction)(o2) && (i2 = o2, o2 = void 0), i2) return (0, s.mapOneOrManyArgs)(i2)(e2(t2, r2, o2));
      const a2 = l(t2) || u(t2) || d(t2);
      if (!a2 && !(0, n.isArrayLike)(t2)) throw new TypeError("Invalid event target");
      return new n.Observable((e3) => {
        const n2 = (...t3) => e3.next(1 < t3.length ? t3 : t3[0]);
        if (a2) c(n2, e3, t2, r2, o2);
        else for (let s2 = 0; s2 < t2.length && !e3.closed; s2++) {
          const i3 = t2[s2];
          c(n2, e3, i3, r2, o2);
        }
      });
    };
  }