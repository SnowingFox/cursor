// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7599 range:585386..586251
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7599: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.proto3 = void 0;
    const t2 = a2(6829), s2 = a2(4331), o2 = a2(1455), r2 = a2(6228);
    n2.proto3 = (0, t2.makeProtoRuntime)("proto3", (e3) => new s2.InternalFieldList(e3, (e4) => (0, r2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        if (n3.opt) continue;
        const a3 = n3.localName, t3 = e3;
        if (n3.repeated) t3[a3] = [];
        else switch (n3.kind) {
          case "oneof":
            t3[a3] = { case: void 0 };
            break;
          case "enum":
            t3[a3] = 0;
            break;
          case "map":
            t3[a3] = {};
            break;
          case "scalar":
            t3[a3] = (0, o2.scalarZeroValue)(n3.T, n3.L);
        }
      }
    });
  }