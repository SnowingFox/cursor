// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 35682 range:7286847..7287662
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35682: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeMessageType = void 0;
    const n = r(24193);
    t.makeMessageType = function(e2, t2, r2, s) {
      var o;
      const i = null !== (o = null == s ? void 0 : s.localName) && void 0 !== o ? o : t2.substring(t2.lastIndexOf(".") + 1), a = { [i]: function(t3) {
        e2.util.initFields(this), e2.util.initPartial(t3, this);
      } }[i];
      return Object.setPrototypeOf(a.prototype, new n.Message()), Object.assign(a, { runtime: e2, typeName: t2, fields: e2.util.newFieldList(r2), fromBinary: (e3, t3) => new a().fromBinary(e3, t3), fromJson: (e3, t3) => new a().fromJson(e3, t3), fromJsonString: (e3, t3) => new a().fromJsonString(e3, t3), equals: (t3, r3) => e2.util.equals(a, t3, r3) }), a;
    };
  }