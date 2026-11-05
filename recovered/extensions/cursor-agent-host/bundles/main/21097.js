// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 21097 range:4403220..4403839
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21097: (e, t, r) => {
    "use strict";
    r.d(t, { S: () => n, u: () => s });
    r(36038);
    function n(e2, t2) {
      return t2 instanceof e2 ? t2 : new e2(t2);
    }
    function s(e2, t2) {
      function r2(t3) {
        return true === t3.done ? t3 : { done: t3.done, value: n(e2, t3.value) };
      }
      return { [Symbol.asyncIterator]() {
        const e3 = t2[Symbol.asyncIterator](), n2 = { next: () => e3.next().then(r2) };
        return void 0 !== e3.throw && (n2.throw = (t3) => e3.throw(t3).then(r2)), void 0 !== e3.return && (n2.return = (t3) => e3.return(t3).then(r2)), n2;
      } };
    }
  }