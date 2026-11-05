// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 609 range:33769..35067
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.makeEnum = n2.makeEnumType = n2.setEnumType = n2.getEnumType = void 0;
    const t2 = a2(3098), s2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o2(e3, n3, a3, t3) {
      e3[s2] = r2(n3, a3.map((n4) => ({ no: n4.no, name: n4.name, localName: e3[n4.no] })), t3);
    }
    function r2(e3, n3, a3) {
      const t3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of n3) {
        const n4 = i2(e4);
        o3.push(n4), t3[e4.name] = n4, s3[e4.no] = n4;
      }
      return { typeName: e3, values: o3, findName: (e4) => t3[e4], findNumber: (e4) => s3[e4] };
    }
    function i2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    n2.getEnumType = function(e3) {
      const n3 = e3[s2];
      return (0, t2.assert)(n3, "missing enum type on enum object"), n3;
    }, n2.setEnumType = o2, n2.makeEnumType = r2, n2.makeEnum = function(e3, n3, a3) {
      const t3 = {};
      for (const e4 of n3) {
        const n4 = i2(e4);
        t3[n4.localName] = n4.no, t3[n4.no] = n4.localName;
      }
      return o2(t3, e3, n3, a3), t3;
    };
  }