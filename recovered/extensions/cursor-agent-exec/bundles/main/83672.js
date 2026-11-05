// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 83672 range:10912011..10912653
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83672: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.proto2 = void 0;
    const n = r(86829), s = r(94331), o = r(66228);
    t.proto2 = (0, n.makeProtoRuntime)("proto2", (e2) => new s.InternalFieldList(e2, (e3) => (0, o.normalizeFieldInfos)(e3, false)), (e2) => {
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