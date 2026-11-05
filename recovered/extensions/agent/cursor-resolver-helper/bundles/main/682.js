// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 682 range:178895..179715
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
682: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeMessageType = void 0;
    const o2 = n2(193);
    a2.makeMessageType = function(e3, a3, n3, s2) {
      var t2;
      const r2 = null !== (t2 = null == s2 ? void 0 : s2.localName) && void 0 !== t2 ? t2 : a3.substring(a3.lastIndexOf(".") + 1), i2 = { [r2]: function(a4) {
        e3.util.initFields(this), e3.util.initPartial(a4, this);
      } }[r2];
      return Object.setPrototypeOf(i2.prototype, new o2.Message()), Object.assign(i2, { runtime: e3, typeName: a3, fields: e3.util.newFieldList(n3), fromBinary: (e4, a4) => new i2().fromBinary(e4, a4), fromJson: (e4, a4) => new i2().fromJson(e4, a4), fromJsonString: (e4, a4) => new i2().fromJsonString(e4, a4), equals: (a4, n4) => e3.util.equals(i2, a4, n4) }), i2;
    };
  }