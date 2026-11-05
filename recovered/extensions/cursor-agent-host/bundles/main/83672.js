// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83672 range:11976729..11977371
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