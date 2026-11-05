// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3672 range:376617..377270
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3672: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.proto2 = void 0;
    const a2 = t2(6829), s2 = t2(4331), o2 = t2(6228);
    n2.proto2 = (0, a2.makeProtoRuntime)("proto2", (e3) => new s2.InternalFieldList(e3, (e4) => (0, o2.normalizeFieldInfos)(e4, false)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        const t3 = n3.localName, a3 = e3;
        if (n3.repeated) a3[t3] = [];
        else switch (n3.kind) {
          case "oneof":
            a3[t3] = { case: void 0 };
            break;
          case "map":
            a3[t3] = {};
        }
      }
    });
  }