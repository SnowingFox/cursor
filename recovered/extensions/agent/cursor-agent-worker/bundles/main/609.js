// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 609 range:21606..22981
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.makeEnum = a10.makeEnumType = a10.setEnumType = a10.getEnumType = void 0;
    const s10 = n10(3098), o10 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function r10(e11, a11, n11, s11) {
      e11[o10] = t10(a11, n11.map((a12) => ({ no: a12.no, name: a12.name, localName: e11[a12.no] })), s11);
    }
    function t10(e11, a11, n11) {
      const s11 = /* @__PURE__ */ Object.create(null), o11 = /* @__PURE__ */ Object.create(null), r11 = [];
      for (const e12 of a11) {
        const a12 = i10(e12);
        r11.push(a12), s11[e12.name] = a12, o11[e12.no] = a12;
      }
      return { typeName: e11, values: r11, findName: (e12) => s11[e12], findNumber: (e12) => o11[e12] };
    }
    function i10(e11) {
      return "localName" in e11 ? e11 : Object.assign(Object.assign({}, e11), { localName: e11.name });
    }
    a10.getEnumType = function(e11) {
      const a11 = e11[o10];
      return (0, s10.assert)(a11, "missing enum type on enum object"), a11;
    }, a10.setEnumType = r10, a10.makeEnumType = t10, a10.makeEnum = function(e11, a11, n11) {
      const s11 = {};
      for (const e12 of a11) {
        const a12 = i10(e12);
        s11[a12.localName] = a12.no, s11[a12.no] = a12.localName;
      }
      return r10(s11, e11, a11, n11), s11;
    };
  }