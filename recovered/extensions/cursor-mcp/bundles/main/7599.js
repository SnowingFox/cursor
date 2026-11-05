// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7599 range:693215..694080
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7599: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto3 = void 0;
    const n2 = r2(6829), o2 = r2(4331), s2 = r2(3836), i2 = r2(6228);
    t2.proto3 = (0, n2.makeProtoRuntime)("proto3", (e3) => new o2.InternalFieldList(e3, (e4) => (0, i2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        if (t3.opt) continue;
        const r3 = t3.localName, n3 = e3;
        if (t3.repeated) n3[r3] = [];
        else switch (t3.kind) {
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
            n3[r3] = (0, s2.scalarZeroValue)(t3.T, t3.L);
        }
      }
    });
  }