// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5682 range:169160..170039
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5682: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.makeMessageType = void 0;
    const s10 = n10(4193);
    a10.makeMessageType = function(e11, a11, n11, o10) {
      var r10;
      const t10 = null !== (r10 = null == o10 ? void 0 : o10.localName) && void 0 !== r10 ? r10 : a11.substring(a11.lastIndexOf(".") + 1), i10 = { [t10]: function(a12) {
        e11.util.initFields(this), e11.util.initPartial(a12, this);
      } }[t10];
      return Object.setPrototypeOf(i10.prototype, new s10.Message()), Object.assign(i10, { runtime: e11, typeName: a11, fields: e11.util.newFieldList(n11), fromBinary: (e12, a12) => new i10().fromBinary(e12, a12), fromJson: (e12, a12) => new i10().fromJson(e12, a12), fromJsonString: (e12, a12) => new i10().fromJsonString(e12, a12), equals: (a12, n12) => e11.util.equals(i10, a12, n12) }), i10;
    };
  }