// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3672 range:372687..373340
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3672: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.proto2 = void 0;
    const t2 = a2(6829), s2 = a2(4331), o2 = a2(6228);
    n2.proto2 = (0, t2.makeProtoRuntime)("proto2", (e3) => new s2.InternalFieldList(e3, (e4) => (0, o2.normalizeFieldInfos)(e4, false)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        const a3 = n3.localName, t3 = e3;
        if (n3.repeated) t3[a3] = [];
        else switch (n3.kind) {
          case "oneof":
            t3[a3] = { case: void 0 };
            break;
          case "map":
            t3[a3] = {};
        }
      }
    });
  }