// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 609 range:46660..47958
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
609: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeEnum = t2.makeEnumType = t2.setEnumType = t2.getEnumType = void 0;
    const n2 = r2(3098), o2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function s2(e3, t3, r3, n3) {
      e3[o2] = i2(t3, r3.map((t4) => ({ no: t4.no, name: t4.name, localName: e3[t4.no] })), n3);
    }
    function i2(e3, t3, r3) {
      const n3 = /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ Object.create(null), s3 = [];
      for (const e4 of t3) {
        const t4 = a2(e4);
        s3.push(t4), n3[e4.name] = t4, o3[e4.no] = t4;
      }
      return { typeName: e3, values: s3, findName: (e4) => n3[e4], findNumber: (e4) => o3[e4] };
    }
    function a2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    t2.getEnumType = function(e3) {
      const t3 = e3[o2];
      return (0, n2.assert)(t3, "missing enum type on enum object"), t3;
    }, t2.setEnumType = s2, t2.makeEnumType = i2, t2.makeEnum = function(e3, t3, r3) {
      const n3 = {};
      for (const e4 of t3) {
        const t4 = a2(e4);
        n3[t4.localName] = t4.no, n3[t4.no] = t4.localName;
      }
      return s2(n3, e3, t3, r3), n3;
    };
  }