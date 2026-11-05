// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 829 range:193855..194594
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
829: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeProtoRuntime = void 0;
    const r2 = n2(609), o2 = n2(682), a2 = n2(802), s2 = n2(536), i2 = n2(141), l2 = n2(672);
    t2.makeProtoRuntime = function(e3, t3, n3) {
      return { syntax: e3, json: (0, s2.makeJsonFormat)(), bin: (0, i2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, l2.makeUtilCommon)()), { newFieldList: t3, initFields: n3 }), makeMessageType(e4, t4, n4) {
        return (0, o2.makeMessageType)(this, e4, t4, n4);
      }, makeEnum: r2.makeEnum, makeEnumType: r2.makeEnumType, getEnumType: r2.getEnumType, makeExtension(e4, t4, n4) {
        return (0, a2.makeExtension)(this, e4, t4, n4);
      } };
    };
  }