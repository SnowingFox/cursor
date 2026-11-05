// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 27599 range:895437..896289
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27599: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.proto3 = void 0;
    const n = r(86829), o = r(94331), s = r(31455), i = r(66228);
    t.proto3 = (0, n.makeProtoRuntime)("proto3", (e2) => new o.InternalFieldList(e2, (e3) => (0, i.normalizeFieldInfos)(e3, true)), (e2) => {
      for (const t2 of e2.getType().fields.byMember()) {
        if (t2.opt) continue;
        const r2 = t2.localName, n2 = e2;
        if (t2.repeated) n2[r2] = [];
        else switch (t2.kind) {
          case "oneof":
            n2[r2] = { case: void 0 };
            break;
          case "enum":
            n2[r2] = 0;
            break;
          case "map":
            n2[r2] = {};
            break;
          case "scalar":
            n2[r2] = (0, s.scalarZeroValue)(t2.T, t2.L);
        }
      }
    });
  }