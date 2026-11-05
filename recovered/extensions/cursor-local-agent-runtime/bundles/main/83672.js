// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 83672 range:7502873..7503515
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83672: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.proto2 = void 0;
    const n = r(86829), o = r(94331), s = r(66228);
    t.proto2 = (0, n.makeProtoRuntime)("proto2", (e2) => new o.InternalFieldList(e2, (e3) => (0, s.normalizeFieldInfos)(e3, false)), (e2) => {
      for (const t2 of e2.getType().fields.byMember()) {
        const r2 = t2.localName, n2 = e2;
        if (t2.repeated) n2[r2] = [];
        else switch (t2.kind) {
          case "oneof":
            n2[r2] = { case: void 0 };
            break;
          case "map":
            n2[r2] = {};
        }
      }
    });
  }