// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 609 range:37513..38805
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
609: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.makeEnum = t2.makeEnumType = t2.setEnumType = t2.getEnumType = void 0;
    const n2 = A2(3098), r2 = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function o2(e3, t3, A3, n3) {
      e3[r2] = s(t3, A3.map((t4) => ({ no: t4.no, name: t4.name, localName: e3[t4.no] })), n3);
    }
    function s(e3, t3, A3) {
      const n3 = /* @__PURE__ */ Object.create(null), r3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of t3) {
        const t4 = i(e4);
        o3.push(t4), n3[e4.name] = t4, r3[e4.no] = t4;
      }
      return { typeName: e3, values: o3, findName: (e4) => n3[e4], findNumber: (e4) => r3[e4] };
    }
    function i(e3) {
      return "localName" in e3 ? e3 : Object.assign(Object.assign({}, e3), { localName: e3.name });
    }
    t2.getEnumType = function(e3) {
      const t3 = e3[r2];
      return (0, n2.assert)(t3, "missing enum type on enum object"), t3;
    }, t2.setEnumType = o2, t2.makeEnumType = s, t2.makeEnum = function(e3, t3, A3) {
      const n3 = {};
      for (const e4 of t3) {
        const t4 = i(e4);
        n3[t4.localName] = t4.no, n3[t4.no] = t4.localName;
      }
      return o2(n3, e3, t3, A3), n3;
    };
  }