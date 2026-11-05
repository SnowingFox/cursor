// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4193 range:487724..489443
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4193: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Message = void 0;
    t2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, t3) {
        const A2 = this.getType().runtime.bin, n2 = A2.makeReadOptions(t3);
        return A2.readMessage(this, n2.readerFactory(e3), e3.byteLength, n2), this;
      }
      fromJson(e3, t3) {
        const A2 = this.getType(), n2 = A2.runtime.json, r2 = n2.makeReadOptions(t3);
        return n2.readMessage(A2, e3, r2, this), this;
      }
      fromJsonString(e3, t3) {
        let A2;
        try {
          A2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(A2, t3);
      }
      toBinary(e3) {
        const t3 = this.getType().runtime.bin, A2 = t3.makeWriteOptions(e3), n2 = A2.writerFactory();
        return t3.writeMessage(this, n2, A2), n2.finish();
      }
      toJson(e3) {
        const t3 = this.getType().runtime.json, A2 = t3.makeWriteOptions(e3);
        return t3.writeMessage(this, A2);
      }
      toJsonString(e3) {
        var t3;
        const A2 = this.toJson(e3);
        return JSON.stringify(A2, null, null !== (t3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== t3 ? t3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }