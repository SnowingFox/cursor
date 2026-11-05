// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1097 range:403919..404547
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1097: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { S: () => n2, u: () => s2 });
    r2(6038);
    function n2(t3, e3) {
      return e3 instanceof t3 ? e3 : new t3(e3);
    }
    function s2(t3, e3) {
      function r3(e4) {
        return true === e4.done ? e4 : { done: e4.done, value: n2(t3, e4.value) };
      }
      return { [Symbol.asyncIterator]() {
        const t4 = e3[Symbol.asyncIterator](), n3 = { next: () => t4.next().then(r3) };
        return void 0 !== t4.throw && (n3.throw = (e4) => t4.throw(e4).then(r3)), void 0 !== t4.return && (n3.return = (e4) => t4.return(e4).then(r3)), n3;
      } };
    }
  }