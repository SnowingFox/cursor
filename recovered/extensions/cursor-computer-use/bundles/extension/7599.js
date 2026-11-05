// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7599 range:616078..616941
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7599: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.proto3 = void 0;
    const a2 = t2(6829), s2 = t2(4331), o2 = t2(1455), r = t2(6228);
    n2.proto3 = (0, a2.makeProtoRuntime)("proto3", (e3) => new s2.InternalFieldList(e3, (e4) => (0, r.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        if (n3.opt) continue;
        const t3 = n3.localName, a3 = e3;
        if (n3.repeated) a3[t3] = [];
        else switch (n3.kind) {
          case "oneof":
            a3[t3] = { case: void 0 };
            break;
          case "enum":
            a3[t3] = 0;
            break;
          case "map":
            a3[t3] = {};
            break;
          case "scalar":
            a3[t3] = (0, o2.scalarZeroValue)(n3.T, n3.L);
        }
      }
    });
  }