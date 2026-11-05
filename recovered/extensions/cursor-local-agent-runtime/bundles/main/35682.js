// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 35682 range:1051671..1052486
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35682: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeMessageType = void 0;
    const n = r(24193);
    t.makeMessageType = function(e2, t2, r2, o) {
      var s;
      const i = null !== (s = null == o ? void 0 : o.localName) && void 0 !== s ? s : t2.substring(t2.lastIndexOf(".") + 1), a = { [i]: function(t3) {
        e2.util.initFields(this), e2.util.initPartial(t3, this);
      } }[i];
      return Object.setPrototypeOf(a.prototype, new n.Message()), Object.assign(a, { runtime: e2, typeName: t2, fields: e2.util.newFieldList(r2), fromBinary: (e3, t3) => new a().fromBinary(e3, t3), fromJson: (e3, t3) => new a().fromJson(e3, t3), fromJsonString: (e3, t3) => new a().fromJsonString(e3, t3), equals: (t3, r3) => e2.util.equals(a, t3, r3) }), a;
    };
  }