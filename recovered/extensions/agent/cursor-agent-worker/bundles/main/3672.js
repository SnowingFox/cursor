// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3672 range:130527..131196
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3672: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.proto2 = void 0;
    const s10 = n10(6829), o10 = n10(4331), r10 = n10(6228);
    a10.proto2 = (0, s10.makeProtoRuntime)("proto2", (e11) => new o10.InternalFieldList(e11, (e12) => (0, r10.normalizeFieldInfos)(e12, false)), (e11) => {
      for (const a11 of e11.getType().fields.byMember()) {
        const n11 = a11.localName, s11 = e11;
        if (a11.repeated) s11[n11] = [];
        else switch (a11.kind) {
          case "oneof":
            s11[n11] = { case: void 0 };
            break;
          case "map":
            s11[n11] = {};
        }
      }
    });
  }