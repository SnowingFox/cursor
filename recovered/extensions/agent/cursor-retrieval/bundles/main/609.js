// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 609 range:45183..46481
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.makeEnum = a2.makeEnumType = a2.setEnumType = a2.getEnumType = void 0;
    const t2 = n2(3098), s2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o2(e3, a3, n3, t3) {
      e3[s2] = r2(a3, n3.map((a4) => ({ no: a4.no, name: a4.name, localName: e3[a4.no] })), t3);
    }
    function r2(e3, a3, n3) {
      const t3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of a3) {
        const a4 = i2(e4);
        o3.push(a4), t3[e4.name] = a4, s3[e4.no] = a4;
      }
      return { typeName: e3, values: o3, findName: (e4) => t3[e4], findNumber: (e4) => s3[e4] };
    }
    function i2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    a2.getEnumType = function(e3) {
      const a3 = e3[s2];
      return (0, t2.assert)(a3, "missing enum type on enum object"), a3;
    }, a2.setEnumType = o2, a2.makeEnumType = r2, a2.makeEnum = function(e3, a3, n3) {
      const t3 = {};
      for (const e4 of a3) {
        const a4 = i2(e4);
        t3[a4.localName] = a4.no, t3[a4.no] = a4.localName;
      }
      return o2(t3, e3, a3, n3), t3;
    };
  }