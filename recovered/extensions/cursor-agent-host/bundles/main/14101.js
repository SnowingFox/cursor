// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 14101 range:3986116..3987088
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14101: (e, t, r) => {
    "use strict";
    r.d(t, { XI: () => o, wH: () => s, xc: () => n });
    class n {
      constructor(e2 = 0) {
        this.nextId = e2;
      }
      next() {
        return this.nextId++;
      }
      peekNext() {
        return this.nextId;
      }
      observe(e2) {
        Number.isSafeInteger(e2) && e2 >= this.nextId && (this.nextId = e2 + 1);
      }
    }
    function s(e2, t2 = new n()) {
      return i(e2, (e3) => {
        e3.id = t2.next();
      });
    }
    function o(e2, t2) {
      return i(e2, (e3) => {
        t2.observe(e3.id);
      });
    }
    function i(e2, t2) {
      const { enqueuePostTurnEndedWork: r2, flushPostTurnEndedWork: n2 } = e2;
      return { sendUpdate: (t3, r3) => e2.sendUpdate(t3, r3), query: (r3, n3) => (t2(n3), e2.query(r3, n3)), enqueuePostTurnEndedWork: void 0 === r2 ? void 0 : (t3) => r2.call(e2, t3), flushPostTurnEndedWork: void 0 === n2 ? void 0 : (t3) => n2.call(e2, t3) };
    }
  }