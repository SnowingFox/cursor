// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4989 range:403388..403811
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4989: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(23237);
    class s extends Error {
      constructor(e2, t2, r2, s2) {
        super(s2 || `can't resolve reference ${r2} from id ${t2}`), this.missingRef = (0, n.resolveUrl)(e2, t2, r2), this.missingSchema = (0, n.normalizeId)((0, n.getFullPath)(e2, this.missingRef));
      }
    }
    t.default = s;
  }