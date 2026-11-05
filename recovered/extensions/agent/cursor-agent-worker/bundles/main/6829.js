// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6829 range:197071..197859
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6829: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.makeProtoRuntime = void 0;
    const s10 = n10(609), o10 = n10(5682), r10 = n10(1802), t10 = n10(536), i10 = n10(7141), m10 = n10(2672);
    a10.makeProtoRuntime = function(e11, a11, n11) {
      return { syntax: e11, json: (0, t10.makeJsonFormat)(), bin: (0, i10.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, m10.makeUtilCommon)()), { newFieldList: a11, initFields: n11 }), makeMessageType(e12, a12, n12) {
        return (0, o10.makeMessageType)(this, e12, a12, n12);
      }, makeEnum: s10.makeEnum, makeEnumType: s10.makeEnumType, getEnumType: s10.getEnumType, makeExtension(e12, a12, n12) {
        return (0, r10.makeExtension)(this, e12, a12, n12);
      } };
    };
  }