// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6829 range:510521..511281
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeProtoRuntime = void 0;
    const t2 = a2(609), s2 = a2(5682), o2 = a2(1802), r2 = a2(536), i2 = a2(7141), A = a2(2672);
    n2.makeProtoRuntime = function(e3, n3, a3) {
      return { syntax: e3, json: (0, r2.makeJsonFormat)(), bin: (0, i2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, A.makeUtilCommon)()), { newFieldList: n3, initFields: a3 }), makeMessageType(e4, n4, a4) {
        return (0, s2.makeMessageType)(this, e4, n4, a4);
      }, makeEnum: t2.makeEnum, makeEnumType: t2.makeEnumType, getEnumType: t2.getEnumType, makeExtension(e4, n4, a4) {
        return (0, o2.makeExtension)(this, e4, n4, a4);
      } };
    };
  }