// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 86829 range:11095018..11095760
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