// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7599 range:4390603..4391468
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7599: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.proto3 = void 0;
    const n2 = r2(6829), s2 = r2(4331), i2 = r2(1455), o2 = r2(6228);
    e2.proto3 = (0, n2.makeProtoRuntime)("proto3", (t3) => new s2.InternalFieldList(t3, (t4) => (0, o2.normalizeFieldInfos)(t4, true)), (t3) => {
      for (const e3 of t3.getType().fields.byMember()) {
        if (e3.opt) continue;
        const r3 = e3.localName, n3 = t3;
        if (e3.repeated) n3[r3] = [];
        else switch (e3.kind) {
          case "oneof":
            n3[r3] = { case: void 0 };
            break;
          case "enum":
            n3[r3] = 0;
            break;
          case "map":
            n3[r3] = {};
            break;
          case "scalar":
            n3[r3] = (0, i2.scalarZeroValue)(e3.T, e3.L);
        }
      }
    });
  }