// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 609 range:158151..159429
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeEnum = a2.makeEnumType = a2.setEnumType = a2.getEnumType = void 0;
    const o2 = n2(98), s2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function t2(e3, a3, n3, o3) {
      e3[s2] = r2(a3, n3.map((a4) => ({ no: a4.no, name: a4.name, localName: e3[a4.no] })), o3);
    }
    function r2(e3, a3, n3) {
      const o3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ Object.create(null), t3 = [];
      for (const e4 of a3) {
        const a4 = i2(e4);
        t3.push(a4), o3[e4.name] = a4, s3[e4.no] = a4;
      }
      return { typeName: e3, values: t3, findName: (e4) => o3[e4], findNumber: (e4) => s3[e4] };
    }
    function i2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    a2.getEnumType = function(e3) {
      const a3 = e3[s2];
      return (0, o2.assert)(a3, "missing enum type on enum object"), a3;
    }, a2.setEnumType = t2, a2.makeEnumType = r2, a2.makeEnum = function(e3, a3, n3) {
      const o3 = {};
      for (const e4 of a3) {
        const a4 = i2(e4);
        o3[a4.localName] = a4.no, o3[a4.no] = a4.localName;
      }
      return t2(o3, e3, a3, n3), o3;
    };
  }