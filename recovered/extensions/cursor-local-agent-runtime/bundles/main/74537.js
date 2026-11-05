// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 74537 range:7209738..7211184
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74537: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromEvent = void 0;
    const n = r(51078), o = r(65683), s = ["addListener", "removeListener"], i = ["addEventListener", "removeEventListener"], a = ["on", "off"];
    function l(e2, t2, r2, n2, o2) {
      const [l2, p] = d(h = r2) ? i : c(h) ? s : u(h) ? a : [];
      var h;
      if (!l2 || !p) throw new TypeError("Invalid event target");
      r2[l2](n2, e2, o2), t2.add(() => r2[p](n2, e2, o2));
    }
    function c(e2) {
      return (0, n.isFunction)(e2.addListener) && (0, n.isFunction)(e2.removeListener);
    }
    function u(e2) {
      return (0, n.isFunction)(e2.on) && (0, n.isFunction)(e2.off);
    }
    function d(e2) {
      return (0, n.isFunction)(e2.addEventListener) && (0, n.isFunction)(e2.removeEventListener);
    }
    t.fromEvent = function e2(t2, r2, s2, i2) {
      if ((0, n.isFunction)(s2) && (i2 = s2, s2 = void 0), i2) return (0, o.mapOneOrManyArgs)(i2)(e2(t2, r2, s2));
      const a2 = c(t2) || u(t2) || d(t2);
      if (!a2 && !(0, n.isArrayLike)(t2)) throw new TypeError("Invalid event target");
      return new n.Observable((e3) => {
        const n2 = (...t3) => e3.next(1 < t3.length ? t3 : t3[0]);
        if (a2) l(n2, e3, t2, r2, s2);
        else for (let o2 = 0; o2 < t2.length && !e3.closed; o2++) {
          const i3 = t2[o2];
          l(n2, e3, i3, r2, s2);
        }
      });
    };
  }