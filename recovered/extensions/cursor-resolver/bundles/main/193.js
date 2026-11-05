// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 193 range:57279..58979
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
193: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Message = void 0;
    t2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, t3) {
        const n2 = this.getType().runtime.bin, r2 = n2.makeReadOptions(t3);
        return n2.readMessage(this, r2.readerFactory(e3), e3.byteLength, r2), this;
      }
      fromJson(e3, t3) {
        const n2 = this.getType(), r2 = n2.runtime.json, o2 = r2.makeReadOptions(t3);
        return r2.readMessage(n2, e3, o2, this), this;
      }
      fromJsonString(e3, t3) {
        let n2;
        try {
          n2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(n2, t3);
      }
      toBinary(e3) {
        const t3 = this.getType().runtime.bin, n2 = t3.makeWriteOptions(e3), r2 = n2.writerFactory();
        return t3.writeMessage(this, r2, n2), r2.finish();
      }
      toJson(e3) {
        const t3 = this.getType().runtime.json, n2 = t3.makeWriteOptions(e3);
        return t3.writeMessage(this, n2);
      }
      toJsonString(e3) {
        var t3;
        const n2 = this.toJson(e3);
        return JSON.stringify(n2, null, null !== (t3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== t3 ? t3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }