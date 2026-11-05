// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5682 range:555911..556740
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeMessageType = void 0;
    const n2 = A2(4193);
    t2.makeMessageType = function(e3, t3, A3, r2) {
      var o2;
      const s = null !== (o2 = null == r2 ? void 0 : r2.localName) && void 0 !== o2 ? o2 : t3.substring(t3.lastIndexOf(".") + 1), i = { [s]: function(t4) {
        e3.util.initFields(this), e3.util.initPartial(t4, this);
      } }[s];
      return Object.setPrototypeOf(i.prototype, new n2.Message()), Object.assign(i, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(A3), fromBinary: (e4, t4) => new i().fromBinary(e4, t4), fromJson: (e4, t4) => new i().fromJson(e4, t4), fromJsonString: (e4, t4) => new i().fromJsonString(e4, t4), equals: (t4, A4) => e3.util.equals(i, t4, A4) }), i;
    };
  }