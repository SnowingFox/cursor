// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4193 range:690430..692149
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4193: (e2, a2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Message = void 0;
    a2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, a3) {
        const n2 = this.getType().runtime.bin, t2 = n2.makeReadOptions(a3);
        return n2.readMessage(this, t2.readerFactory(e3), e3.byteLength, t2), this;
      }
      fromJson(e3, a3) {
        const n2 = this.getType(), t2 = n2.runtime.json, s2 = t2.makeReadOptions(a3);
        return t2.readMessage(n2, e3, s2, this), this;
      }
      fromJsonString(e3, a3) {
        let n2;
        try {
          n2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(n2, a3);
      }
      toBinary(e3) {
        const a3 = this.getType().runtime.bin, n2 = a3.makeWriteOptions(e3), t2 = n2.writerFactory();
        return a3.writeMessage(this, t2, n2), t2.finish();
      }
      toJson(e3) {
        const a3 = this.getType().runtime.json, n2 = a3.makeWriteOptions(e3);
        return a3.writeMessage(this, n2);
      }
      toJsonString(e3) {
        var a3;
        const n2 = this.toJson(e3);
        return JSON.stringify(n2, null, null !== (a3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== a3 ? a3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }