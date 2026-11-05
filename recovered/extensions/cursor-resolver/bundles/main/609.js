// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 609 range:158151..159429
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
609: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeEnum = t2.makeEnumType = t2.setEnumType = t2.getEnumType = void 0;
    const r2 = n2(98), o2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function a2(e3, t3, n3, r3) {
      e3[o2] = s2(t3, n3.map((t4) => ({ no: t4.no, name: t4.name, localName: e3[t4.no] })), r3);
    }
    function s2(e3, t3, n3) {
      const r3 = /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ Object.create(null), a3 = [];
      for (const e4 of t3) {
        const t4 = i2(e4);
        a3.push(t4), r3[e4.name] = t4, o3[e4.no] = t4;
      }
      return { typeName: e3, values: a3, findName: (e4) => r3[e4], findNumber: (e4) => o3[e4] };
    }
    function i2(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    t2.getEnumType = function(e3) {
      const t3 = e3[o2];
      return (0, r2.assert)(t3, "missing enum type on enum object"), t3;
    }, t2.setEnumType = a2, t2.makeEnumType = s2, t2.makeEnum = function(e3, t3, n3) {
      const r3 = {};
      for (const e4 of t3) {
        const t4 = i2(e4);
        r3[t4.localName] = t4.no, r3[t4.no] = t4.localName;
      }
      return a2(r3, e3, t3, n3), r3;
    };
  }