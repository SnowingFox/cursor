// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 609 range:37945..39237
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
609: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeEnum = n2.makeEnumType = n2.setEnumType = n2.getEnumType = void 0;
    const a2 = t2(3098), s2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o2(e3, n3, t3, a3) {
      e3[s2] = r(n3, t3.map((n4) => ({ no: n4.no, name: n4.name, localName: e3[n4.no] })), a3);
    }
    function r(e3, n3, t3) {
      const a3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of n3) {
        const n4 = i(e4);
        o3.push(n4), a3[e4.name] = n4, s3[e4.no] = n4;
      }
      return { typeName: e3, values: o3, findName: (e4) => a3[e4], findNumber: (e4) => s3[e4] };
    }
    function i(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    n2.getEnumType = function(e3) {
      const n3 = e3[s2];
      return (0, a2.assert)(n3, "missing enum type on enum object"), n3;
    }, n2.setEnumType = o2, n2.makeEnumType = r, n2.makeEnum = function(e3, n3, t3) {
      const a3 = {};
      for (const e4 of n3) {
        const n4 = i(e4);
        a3[n4.localName] = n4.no, a3[n4.no] = n4.localName;
      }
      return o2(a3, e3, n3, t3), a3;
    };
  }