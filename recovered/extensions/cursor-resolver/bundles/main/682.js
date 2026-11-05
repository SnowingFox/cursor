// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 682 range:178895..179715
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
682: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeMessageType = void 0;
    const r2 = n2(193);
    t2.makeMessageType = function(e3, t3, n3, o2) {
      var a2;
      const s2 = null !== (a2 = null == o2 ? void 0 : o2.localName) && void 0 !== a2 ? a2 : t3.substring(t3.lastIndexOf(".") + 1), i2 = { [s2]: function(t4) {
        e3.util.initFields(this), e3.util.initPartial(t4, this);
      } }[s2];
      return Object.setPrototypeOf(i2.prototype, new r2.Message()), Object.assign(i2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(n3), fromBinary: (e4, t4) => new i2().fromBinary(e4, t4), fromJson: (e4, t4) => new i2().fromJson(e4, t4), fromJsonString: (e4, t4) => new i2().fromJsonString(e4, t4), equals: (t4, n4) => e3.util.equals(i2, t4, n4) }), i2;
    };
  }