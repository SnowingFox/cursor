// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3672 range:993264..993917
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3672: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.proto2 = void 0;
    const n2 = r2(6829), s2 = r2(4331), i2 = r2(6228);
    e2.proto2 = (0, n2.makeProtoRuntime)("proto2", (t3) => new s2.InternalFieldList(t3, (t4) => (0, i2.normalizeFieldInfos)(t4, false)), (t3) => {
      for (const e3 of t3.getType().fields.byMember()) {
        const r3 = e3.localName, n3 = t3;
        if (e3.repeated) n3[r3] = [];
        else switch (e3.kind) {
          case "oneof":
            n3[r3] = { case: void 0 };
            break;
          case "map":
            n3[r3] = {};
        }
      }
    });
  }