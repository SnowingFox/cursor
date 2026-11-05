// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86829 range:7602616..7603358
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86829: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeProtoRuntime = void 0;
    const n = r(609), o = r(35682), s = r(1802), i = r(20536), a = r(47141), l = r(62672);
    t.makeProtoRuntime = function(e2, t2, r2) {
      return { syntax: e2, json: (0, i.makeJsonFormat)(), bin: (0, a.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), { newFieldList: t2, initFields: r2 }), makeMessageType(e3, t3, r3) {
        return (0, o.makeMessageType)(this, e3, t3, r3);
      }, makeEnum: n.makeEnum, makeEnumType: n.makeEnumType, getEnumType: n.getEnumType, makeExtension(e3, t3, r3) {
        return (0, s.makeExtension)(this, e3, t3, r3);
      } };
    };
  }