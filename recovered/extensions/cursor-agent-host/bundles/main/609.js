// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 609 range:8991..10263
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
609: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.makeEnum = t.makeEnumType = t.setEnumType = t.getEnumType = void 0;
    const n = r(43098), s = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o(e2, t2, r2, n2) {
      e2[s] = i(t2, r2.map((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] })), n2);
    }
    function i(e2, t2, r2) {
      const n2 = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), o2 = [];
      for (const e3 of t2) {
        const t3 = a(e3);
        o2.push(t3), n2[e3.name] = t3, s2[e3.no] = t3;
      }
      return { typeName: e2, values: o2, findName: (e3) => n2[e3], findNumber: (e3) => s2[e3] };
    }
    function a(e2) {
      return "localName" in e2 ? e2 : Object.assign(Object.assign({}, e2), { localName: e2.name });
    }
    t.getEnumType = function(e2) {
      const t2 = e2[s];
      return (0, n.assert)(t2, "missing enum type on enum object"), t2;
    }, t.setEnumType = o, t.makeEnumType = i, t.makeEnum = function(e2, t2, r2) {
      const n2 = {};
      for (const e3 of t2) {
        const t3 = a(e3);
        n2[t3.localName] = t3.no, n2[t3.no] = t3.localName;
      }
      return o(n2, e2, t2, r2), n2;
    };
  }