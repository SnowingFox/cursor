// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 79205 range:7352078..7352393
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79205: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.schedulePromise = void 0;
    const n = r(51078), o = r(36448), s = r(54464);
    t.schedulePromise = function(e2, t2) {
      return (0, n.from)(e2).pipe((0, s.subscribeOn)(t2), (0, o.observeOn)(t2));
    };
  }