// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7599 range:906347..907212
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7599: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.proto3 = void 0;
    const t2 = n2(6829), s2 = n2(4331), o2 = n2(1455), r2 = n2(6228);
    a2.proto3 = (0, t2.makeProtoRuntime)("proto3", (e3) => new s2.InternalFieldList(e3, (e4) => (0, r2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const a3 of e3.getType().fields.byMember()) {
        if (a3.opt) continue;
        const n3 = a3.localName, t3 = e3;
        if (a3.repeated) t3[n3] = [];
        else switch (a3.kind) {
          case "oneof":
            t3[n3] = { case: void 0 };
            break;
          case "enum":
            t3[n3] = 0;
            break;
          case "map":
            t3[n3] = {};
            break;
          case "scalar":
            t3[n3] = (0, o2.scalarZeroValue)(a3.T, a3.L);
        }
      }
    });
  }