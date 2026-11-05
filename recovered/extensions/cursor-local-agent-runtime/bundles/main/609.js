// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 609 range:12127..13399
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
609: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeEnum = t.makeEnumType = t.setEnumType = t.getEnumType = void 0;
    const n = r(43098), o = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function s(e2, t2, r2, n2) {
      e2[o] = i(t2, r2.map((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] })), n2);
    }
    function i(e2, t2, r2) {
      const n2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ Object.create(null), s2 = [];
      for (const e3 of t2) {
        const t3 = a(e3);
        s2.push(t3), n2[e3.name] = t3, o2[e3.no] = t3;
      }
      return { typeName: e2, values: s2, findName: (e3) => n2[e3], findNumber: (e3) => o2[e3] };
    }
    function a(e2) {
      return "localName" in e2 ? e2 : Object.assign(Object.assign({}, e2), { localName: e2.name });
    }
    t.getEnumType = function(e2) {
      const t2 = e2[o];
      return (0, n.assert)(t2, "missing enum type on enum object"), t2;
    }, t.setEnumType = s, t.makeEnumType = i, t.makeEnum = function(e2, t2, r2) {
      const n2 = {};
      for (const e3 of t2) {
        const t3 = a(e3);
        n2[t3.localName] = t3.no, n2[t3.no] = t3.localName;
      }
      return s(n2, e2, t2, r2), n2;
    };
  }