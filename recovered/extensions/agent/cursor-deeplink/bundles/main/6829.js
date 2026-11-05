// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6829 range:621397..622153
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeProtoRuntime = void 0;
    const n2 = A2(609), r2 = A2(5682), o2 = A2(1802), s = A2(536), i = A2(7141), a = A2(2672);
    t2.makeProtoRuntime = function(e3, t3, A3) {
      return { syntax: e3, json: (0, s.makeJsonFormat)(), bin: (0, i.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, a.makeUtilCommon)()), { newFieldList: t3, initFields: A3 }), makeMessageType(e4, t4, A4) {
        return (0, r2.makeMessageType)(this, e4, t4, A4);
      }, makeEnum: n2.makeEnum, makeEnumType: n2.makeEnumType, getEnumType: n2.getEnumType, makeExtension(e4, t4, A4) {
        return (0, o2.makeExtension)(this, e4, t4, A4);
      } };
    };
  }