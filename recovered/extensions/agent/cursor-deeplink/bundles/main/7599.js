// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7599 range:709556..710419
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7599: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto3 = void 0;
    const n2 = A2(6829), r2 = A2(4331), o2 = A2(1455), s = A2(6228);
    t2.proto3 = (0, n2.makeProtoRuntime)("proto3", (e3) => new r2.InternalFieldList(e3, (e4) => (0, s.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        if (t3.opt) continue;
        const A3 = t3.localName, n3 = e3;
        if (t3.repeated) n3[A3] = [];
        else switch (t3.kind) {
          case "oneof":
            n3[A3] = { case: void 0 };
            break;
          case "enum":
            n3[A3] = 0;
            break;
          case "map":
            n3[A3] = {};
            break;
          case "scalar":
            n3[A3] = (0, o2.scalarZeroValue)(t3.T, t3.L);
        }
      }
    });
  }