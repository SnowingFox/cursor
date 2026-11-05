// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6829 range:3757785..3758543
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.makeProtoRuntime = void 0;
    const n2 = r2(609), s2 = r2(5682), i2 = r2(1802), o2 = r2(536), a = r2(7141), u = r2(2672);
    e2.makeProtoRuntime = function(t3, e3, r3) {
      return { syntax: t3, json: (0, o2.makeJsonFormat)(), bin: (0, a.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, u.makeUtilCommon)()), { newFieldList: e3, initFields: r3 }), makeMessageType(t4, e4, r4) {
        return (0, s2.makeMessageType)(this, t4, e4, r4);
      }, makeEnum: n2.makeEnum, makeEnumType: n2.makeEnumType, getEnumType: n2.getEnumType, makeExtension(t4, e4, r4) {
        return (0, i2.makeExtension)(this, t4, e4, r4);
      } };
    };
  }