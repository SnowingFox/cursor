// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91417 range:13725256..13725745
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91417: (e, t, r) => {
    "use strict";
    r.d(t, { S: () => o, h: () => a });
    var n = r(40328), s = r(8032);
    class o extends n.T {
      constructor(e2, t2) {
        super(e2, s.C.Unavailable), this.thresholdMs = t2;
      }
    }
    const i = 10;
    function a(e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < i && void 0 !== t2; e3++) {
        if (t2 instanceof o) return true;
        t2 = t2 instanceof Error ? t2.cause : void 0;
      }
      return false;
    }
  }