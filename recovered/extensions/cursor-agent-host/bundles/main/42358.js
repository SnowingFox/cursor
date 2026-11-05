// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 42358 range:7733227..7733922
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42358: (e, t, r) => {
    "use strict";
    function n(e2, t2, r2) {
      const n2 = e2.get(t2);
      e2.set(t2, r2), n2?.();
    }
    function s(e2, t2) {
      const r2 = e2.get(t2);
      return void 0 !== r2 && e2.delete(t2), r2;
    }
    function o(e2, t2, r2) {
      let n2 = e2.get(t2);
      void 0 === n2 && (n2 = { value: r2(), refs: 0 }, e2.set(t2, n2)), n2.refs += 1;
      const s2 = n2;
      let o2 = false;
      return { get value() {
        return s2.value;
      }, release() {
        o2 || (o2 = true, e2.get(t2) === s2 && (s2.refs -= 1, s2.refs <= 0 && (e2.delete(t2), s2.value.dispose())));
      } };
    }
    r.d(t, { B4: () => o, Dp: () => n, Qr: () => s });
  }