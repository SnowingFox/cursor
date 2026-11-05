// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 599 range:157307..158149
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
599: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.proto3 = void 0;
    const o2 = n2(829), s2 = n2(331), t2 = n2(455), r2 = n2(228);
    a2.proto3 = (0, o2.makeProtoRuntime)("proto3", (e3) => new s2.InternalFieldList(e3, (e4) => (0, r2.normalizeFieldInfos)(e4, true)), (e3) => {
      for (const a3 of e3.getType().fields.byMember()) {
        if (a3.opt) continue;
        const n3 = a3.localName, o3 = e3;
        if (a3.repeated) o3[n3] = [];
        else switch (a3.kind) {
          case "oneof":
            o3[n3] = { case: void 0 };
            break;
          case "enum":
            o3[n3] = 0;
            break;
          case "map":
            o3[n3] = {};
            break;
          case "scalar":
            o3[n3] = (0, t2.scalarZeroValue)(a3.T, a3.L);
        }
      }
    });
  }