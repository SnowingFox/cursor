// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3672 range:372426..373079
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3672: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.proto2 = void 0;
    const n2 = t2(6829), r2 = t2(4331), o2 = t2(6228);
    A2.proto2 = (0, n2.makeProtoRuntime)("proto2", (e3) => new r2.InternalFieldList(e3, (e4) => (0, o2.normalizeFieldInfos)(e4, false)), (e3) => {
      for (const A3 of e3.getType().fields.byMember()) {
        const t3 = A3.localName, n3 = e3;
        if (A3.repeated) n3[t3] = [];
        else switch (A3.kind) {
          case "oneof":
            n3[t3] = { case: void 0 };
            break;
          case "map":
            n3[t3] = {};
        }
      }
    });
  }