// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 599 range:157307..158149
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
599: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto3 = void 0;
    const r2 = n2(829), o2 = n2(331), a2 = n2(455), s2 = n2(228);
    t2.proto3 = (0, r2.makeProtoRuntime)("proto3", (e3) => new o2.InternalFieldList(e3, (e4) => (0, s2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        if (t3.opt) continue;
        const n3 = t3.localName, r3 = e3;
        if (t3.repeated) r3[n3] = [];
        else switch (t3.kind) {
          case "oneof":
            r3[n3] = { case: void 0 };
            break;
          case "enum":
            r3[n3] = 0;
            break;
          case "map":
            r3[n3] = {};
            break;
          case "scalar":
            r3[n3] = (0, a2.scalarZeroValue)(t3.T, t3.L);
        }
      }
    });
  }