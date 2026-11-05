// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4193 range:137211..138981
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4193: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Message = void 0;
    a10.Message = class {
      equals(e11) {
        return this.getType().runtime.util.equals(this.getType(), this, e11);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e11, a11) {
        const n10 = this.getType().runtime.bin, s10 = n10.makeReadOptions(a11);
        return n10.readMessage(this, s10.readerFactory(e11), e11.byteLength, s10), this;
      }
      fromJson(e11, a11) {
        const n10 = this.getType(), s10 = n10.runtime.json, o10 = s10.makeReadOptions(a11);
        return s10.readMessage(n10, e11, o10, this), this;
      }
      fromJsonString(e11, a11) {
        let n10;
        try {
          n10 = JSON.parse(e11);
        } catch (e12) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e12 instanceof Error ? e12.message : String(e12)}`);
        }
        return this.fromJson(n10, a11);
      }
      toBinary(e11) {
        const a11 = this.getType().runtime.bin, n10 = a11.makeWriteOptions(e11), s10 = n10.writerFactory();
        return a11.writeMessage(this, s10, n10), s10.finish();
      }
      toJson(e11) {
        const a11 = this.getType().runtime.json, n10 = a11.makeWriteOptions(e11);
        return a11.writeMessage(this, n10);
      }
      toJsonString(e11) {
        var a11;
        const n10 = this.toJson(e11);
        return JSON.stringify(n10, null, null !== (a11 = null == e11 ? void 0 : e11.prettySpaces) && void 0 !== a11 ? a11 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }