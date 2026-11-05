// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 609 range:33754..35046
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.makeEnum = A2.makeEnumType = A2.setEnumType = A2.getEnumType = void 0;
    const n2 = t2(3098), r2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o2(e3, A3, t3, n3) {
      e3[r2] = s(A3, t3.map((A4) => ({ no: A4.no, name: A4.name, localName: e3[A4.no] })), n3);
    }
    function s(e3, A3, t3) {
      const n3 = /* @__PURE__ */ Object.create(null), r3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of A3) {
        const A4 = a(e4);
        o3.push(A4), n3[e4.name] = A4, r3[e4.no] = A4;
      }
      return { typeName: e3, values: o3, findName: (e4) => n3[e4], findNumber: (e4) => r3[e4] };
    }
    function a(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    A2.getEnumType = function(e3) {
      const A3 = e3[r2];
      return (0, n2.assert)(A3, "missing enum type on enum object"), A3;
    }, A2.setEnumType = o2, A2.makeEnumType = s, A2.makeEnum = function(e3, A3, t3) {
      const n3 = {};
      for (const e4 of A3) {
        const A4 = a(e4);
        n3[A4.localName] = A4.no, n3[A4.no] = A4.localName;
      }
      return o2(n3, e3, A3, t3), n3;
    };
  }