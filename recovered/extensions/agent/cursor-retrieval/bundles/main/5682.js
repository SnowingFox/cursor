// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5682 range:761264..762104
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeMessageType = void 0;
    const t2 = n2(4193);
    a2.makeMessageType = function(e3, a3, n3, s2) {
      var o2;
      const r2 = null !== (o2 = null == s2 ? void 0 : s2.localName) && void 0 !== o2 ? o2 : a3.substring(a3.lastIndexOf(".") + 1), i2 = { [r2]: function(a4) {
        e3.util.initFields(this), e3.util.initPartial(a4, this);
      } }[r2];
      return Object.setPrototypeOf(i2.prototype, new t2.Message()), Object.assign(i2, { runtime: e3, typeName: a3, fields: e3.util.newFieldList(n3), fromBinary: (e4, a4) => new i2().fromBinary(e4, a4), fromJson: (e4, a4) => new i2().fromJson(e4, a4), fromJsonString: (e4, a4) => new i2().fromJsonString(e4, a4), equals: (a4, n4) => e3.util.equals(i2, a4, n4) }), i2;
    };
  }