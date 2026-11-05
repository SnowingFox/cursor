// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6829 range:581838..582598
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6829: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeProtoRuntime = void 0;
    const n2 = r2(609), o2 = r2(5682), s2 = r2(1802), i2 = r2(536), a2 = r2(7141), c = r2(2672);
    t2.makeProtoRuntime = function(e3, t3, r3) {
      return { syntax: e3, json: (0, i2.makeJsonFormat)(), bin: (0, a2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, c.makeUtilCommon)()), { newFieldList: t3, initFields: r3 }), makeMessageType(e4, t4, r4) {
        return (0, o2.makeMessageType)(this, e4, t4, r4);
      }, makeEnum: n2.makeEnum, makeEnumType: n2.makeEnumType, getEnumType: n2.getEnumType, makeExtension(e4, t4, r4) {
        return (0, s2.makeExtension)(this, e4, t4, r4);
      } };
    };
  }