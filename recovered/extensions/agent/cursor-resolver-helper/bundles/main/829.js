// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 829 range:193855..194594
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
829: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeProtoRuntime = void 0;
    const o2 = n2(609), s2 = n2(682), t2 = n2(802), r2 = n2(536), i2 = n2(141), m2 = n2(672);
    a2.makeProtoRuntime = function(e3, a3, n3) {
      return { syntax: e3, json: (0, r2.makeJsonFormat)(), bin: (0, i2.makeBinaryFormat)(), util: Object.assign(Object.assign({}, (0, m2.makeUtilCommon)()), { newFieldList: a3, initFields: n3 }), makeMessageType(e4, a4, n4) {
        return (0, s2.makeMessageType)(this, e4, a4, n4);
      }, makeEnum: o2.makeEnum, makeEnumType: o2.makeEnumType, getEnumType: o2.getEnumType, makeExtension(e4, a4, n4) {
        return (0, t2.makeExtension)(this, e4, a4, n4);
      } };
    };
  }