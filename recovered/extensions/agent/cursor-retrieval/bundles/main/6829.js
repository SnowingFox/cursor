// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6829 range:830798..831558
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeProtoRuntime = void 0;
    const t2 = n2(609), s2 = n2(5682), o2 = n2(1802), r2 = n2(536), i2 = n2(7141), l = n2(2672);
    a2.makeProtoRuntime = function(e3, a3, n3) {
      return { syntax: e3, json: (0, r2.makeJsonFormat)(), bin: (0, i2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), { newFieldList: a3, initFields: n3 }), makeMessageType(e4, a4, n4) {
        return (0, s2.makeMessageType)(this, e4, a4, n4);
      }, makeEnum: t2.makeEnum, makeEnumType: t2.makeEnumType, getEnumType: t2.getEnumType, makeExtension(e4, a4, n4) {
        return (0, o2.makeExtension)(this, e4, a4, n4);
      } };
    };
  }