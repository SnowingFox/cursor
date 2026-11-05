// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5682 range:1287051..1287883
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.makeMessageType = void 0;
    const n2 = r2(4193);
    e2.makeMessageType = function(t3, e3, r3, s2) {
      var i2;
      const o2 = null !== (i2 = null == s2 ? void 0 : s2.localName) && void 0 !== i2 ? i2 : e3.substring(e3.lastIndexOf(".") + 1), a = { [o2]: function(e4) {
        t3.util.initFields(this), t3.util.initPartial(e4, this);
      } }[o2];
      return Object.setPrototypeOf(a.prototype, new n2.Message()), Object.assign(a, { runtime: t3, typeName: e3, fields: t3.util.newFieldList(r3), fromBinary: (t4, e4) => new a().fromBinary(t4, e4), fromJson: (t4, e4) => new a().fromJson(t4, e4), fromJsonString: (t4, e4) => new a().fromJsonString(t4, e4), equals: (e4, r4) => t3.util.equals(a, e4, r4) }), a;
    };
  }