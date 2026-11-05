// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 609 range:342513..343808
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.makeEnum = e2.makeEnumType = e2.setEnumType = e2.getEnumType = void 0;
    const n2 = r2(3098), s2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function i2(t3, e3, r3, n3) {
      t3[s2] = o2(e3, r3.map((e4) => ({ no: e4.no, name: e4.name, localName: t3[e4.no] })), n3);
    }
    function o2(t3, e3, r3) {
      const n3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ Object.create(null), i3 = [];
      for (const t4 of e3) {
        const e4 = a(t4);
        i3.push(e4), n3[t4.name] = e4, s3[t4.no] = e4;
      }
      return { typeName: t3, values: i3, findName: (t4) => n3[t4], findNumber: (t4) => s3[t4] };
    }
    function a(t3) {
      return "localName" in t3 ? t3 : Object.assign(Object.assign({}, t3), { localName: t3.name });
    }
    e2.getEnumType = function(t3) {
      const e3 = t3[s2];
      return (0, n2.assert)(e3, "missing enum type on enum object"), e3;
    }, e2.setEnumType = i2, e2.makeEnumType = o2, e2.makeEnum = function(t3, e3, r3) {
      const n3 = {};
      for (const t4 of e3) {
        const e4 = a(t4);
        n3[e4.localName] = e4.no, n3[e4.no] = e4.localName;
      }
      return i2(n3, t3, e3, r3), n3;
    };
  }