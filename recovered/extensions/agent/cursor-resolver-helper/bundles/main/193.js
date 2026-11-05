// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 193 range:57279..58979
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
193: (e2, a2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.Message = void 0;
    a2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, a3) {
        const n2 = this.getType().runtime.bin, o2 = n2.makeReadOptions(a3);
        return n2.readMessage(this, o2.readerFactory(e3), e3.byteLength, o2), this;
      }
      fromJson(e3, a3) {
        const n2 = this.getType(), o2 = n2.runtime.json, s2 = o2.makeReadOptions(a3);
        return o2.readMessage(n2, e3, s2, this), this;
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
        const a3 = this.getType().runtime.bin, n2 = a3.makeWriteOptions(e3), o2 = n2.writerFactory();
        return a3.writeMessage(this, o2, n2), o2.finish();
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