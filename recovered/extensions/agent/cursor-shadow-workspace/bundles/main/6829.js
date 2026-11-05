// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6829 range:509875..510631
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.makeProtoRuntime = void 0;
    const n2 = t2(609), r2 = t2(5682), o2 = t2(1802), s = t2(536), a = t2(7141), i = t2(2672);
    A2.makeProtoRuntime = function(e3, A3, t3) {
      return { syntax: e3, json: (0, s.makeJsonFormat)(), bin: (0, a.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, i.makeUtilCommon)()), { newFieldList: A3, initFields: t3 }), makeMessageType(e4, A4, t4) {
        return (0, r2.makeMessageType)(this, e4, A4, t4);
      }, makeEnum: n2.makeEnum, makeEnumType: n2.makeEnumType, getEnumType: n2.getEnumType, makeExtension(e4, A4, t4) {
        return (0, o2.makeExtension)(this, e4, A4, t4);
      } };
    };
  }