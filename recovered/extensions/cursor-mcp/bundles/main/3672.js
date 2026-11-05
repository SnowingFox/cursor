// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3672 range:283261..283914
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3672: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.proto2 = void 0;
    const n2 = r2(6829), o2 = r2(4331), s2 = r2(6228);
    t2.proto2 = (0, n2.makeProtoRuntime)("proto2", (e3) => new o2.InternalFieldList(e3, (e4) => (0, s2.normalizeFieldInfos)(e4, false)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        const r3 = t3.localName, n3 = e3;
        if (t3.repeated) n3[r3] = [];
        else switch (t3.kind) {
          case "oneof":
            n3[r3] = { case: void 0 };
            break;
          case "map":
            n3[r3] = {};
        }
      }
    });
  }