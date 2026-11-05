// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6829 range:541201..541957
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6829: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeProtoRuntime = void 0;
    const a2 = t2(609), s2 = t2(5682), o2 = t2(1802), r = t2(536), i = t2(7141), A = t2(2672);
    n2.makeProtoRuntime = function(e3, n3, t3) {
      return { syntax: e3, json: (0, r.makeJsonFormat)(), bin: (0, i.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, A.makeUtilCommon)()), { newFieldList: n3, initFields: t3 }), makeMessageType(e4, n4, t4) {
        return (0, s2.makeMessageType)(this, e4, n4, t4);
      }, makeEnum: a2.makeEnum, makeEnumType: a2.makeEnumType, getEnumType: a2.getEnumType, makeExtension(e4, n4, t4) {
        return (0, o2.makeExtension)(this, e4, n4, t4);
      } };
    };
  }