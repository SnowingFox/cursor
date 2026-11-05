// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5682 range:438074..438914
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5682: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeMessageType = void 0;
    const n2 = r2(4193);
    t2.makeMessageType = function(e3, t3, r3, o2) {
      var s2;
      const i2 = null !== (s2 = null == o2 ? void 0 : o2.localName) && void 0 !== s2 ? s2 : t3.substring(t3.lastIndexOf(".") + 1), a2 = { [i2]: function(t4) {
        e3.util.initFields(this), e3.util.initPartial(t4, this);
      } }[i2];
      return Object.setPrototypeOf(a2.prototype, new n2.Message()), Object.assign(a2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(r3), fromBinary: (e4, t4) => new a2().fromBinary(e4, t4), fromJson: (e4, t4) => new a2().fromJson(e4, t4), fromJsonString: (e4, t4) => new a2().fromJsonString(e4, t4), equals: (t4, r4) => e3.util.equals(a2, t4, r4) }), a2;
    };
  }