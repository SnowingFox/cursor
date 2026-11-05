// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5682 range:485743..486572
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5682: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeMessageType = void 0;
    const a2 = t2(4193);
    n2.makeMessageType = function(e3, n3, t3, s2) {
      var o2;
      const r = null !== (o2 = null == s2 ? void 0 : s2.localName) && void 0 !== o2 ? o2 : n3.substring(n3.lastIndexOf(".") + 1), i = { [r]: function(n4) {
        e3.util.initFields(this), e3.util.initPartial(n4, this);
      } }[r];
      return Object.setPrototypeOf(i.prototype, new a2.Message()), Object.assign(i, { runtime: e3, typeName: n3, fields: e3.util.newFieldList(t3), fromBinary: (e4, n4) => new i().fromBinary(e4, n4), fromJson: (e4, n4) => new i().fromJson(e4, n4), fromJsonString: (e4, n4) => new i().fromJsonString(e4, n4), equals: (n4, t4) => e3.util.equals(i, n4, t4) }), i;
    };
  }