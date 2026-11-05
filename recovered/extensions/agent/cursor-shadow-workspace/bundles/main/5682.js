// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5682 range:454417..455246
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.makeMessageType = void 0;
    const n2 = t2(4193);
    A2.makeMessageType = function(e3, A3, t3, r2) {
      var o2;
      const s = null !== (o2 = null == r2 ? void 0 : r2.localName) && void 0 !== o2 ? o2 : A3.substring(A3.lastIndexOf(".") + 1), a = { [s]: function(A4) {
        e3.util.initFields(this), e3.util.initPartial(A4, this);
      } }[s];
      return Object.setPrototypeOf(a.prototype, new n2.Message()), Object.assign(a, { runtime: e3, typeName: A3, fields: e3.util.newFieldList(t3), fromBinary: (e4, A4) => new a().fromBinary(e4, A4), fromJson: (e4, A4) => new a().fromJson(e4, A4), fromJsonString: (e4, A4) => new a().fromJsonString(e4, A4), equals: (A4, t4) => e3.util.equals(a, A4, t4) }), a;
    };
  }