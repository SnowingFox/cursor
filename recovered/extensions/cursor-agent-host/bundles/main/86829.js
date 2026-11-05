// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86829 range:12194163..12194905
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86829: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeProtoRuntime = void 0;
    const n = r(609), s = r(35682), o = r(1802), i = r(20536), a = r(47141), c = r(62672);
    t.makeProtoRuntime = function(e2, t2, r2) {
      return { syntax: e2, json: (0, i.makeJsonFormat)(), bin: (0, a.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, c.makeUtilCommon)()), { newFieldList: t2, initFields: r2 }), makeMessageType(e3, t3, r3) {
        return (0, s.makeMessageType)(this, e3, t3, r3);
      }, makeEnum: n.makeEnum, makeEnumType: n.makeEnumType, getEnumType: n.getEnumType, makeExtension(e3, t3, r3) {
        return (0, o.makeExtension)(this, e3, t3, r3);
      } };
    };
  }