// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 4989 range:45386..45809
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4989: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(23237);
    class o extends Error {
      constructor(e2, t2, r2, o2) {
        super(o2 || `can't resolve reference ${r2} from id ${t2}`), this.missingRef = (0, n.resolveUrl)(e2, t2, r2), this.missingSchema = (0, n.normalizeId)((0, n.getFullPath)(e2, this.missingRef));
      }
    }
    t.default = o;
  }