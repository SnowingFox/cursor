// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5682 range:454869..455709
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeMessageType = void 0;
    const t2 = a2(4193);
    n2.makeMessageType = function(e3, n3, a3, s2) {
      var o2;
      const r2 = null !== (o2 = null == s2 ? void 0 : s2.localName) && void 0 !== o2 ? o2 : n3.substring(n3.lastIndexOf(".") + 1), i2 = { [r2]: function(n4) {
        e3.util.initFields(this), e3.util.initPartial(n4, this);
      } }[r2];
      return Object.setPrototypeOf(i2.prototype, new t2.Message()), Object.assign(i2, { runtime: e3, typeName: n3, fields: e3.util.newFieldList(a3), fromBinary: (e4, n4) => new i2().fromBinary(e4, n4), fromJson: (e4, n4) => new i2().fromJson(e4, n4), fromJsonString: (e4, n4) => new i2().fromJsonString(e4, n4), equals: (n4, a4) => e3.util.equals(i2, n4, a4) }), i2;
    };
  }