// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4193 range:384378..386097
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4193: (e2, A2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.Message = void 0;
    A2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, A3) {
        const t2 = this.getType().runtime.bin, n2 = t2.makeReadOptions(A3);
        return t2.readMessage(this, n2.readerFactory(e3), e3.byteLength, n2), this;
      }
      fromJson(e3, A3) {
        const t2 = this.getType(), n2 = t2.runtime.json, r2 = n2.makeReadOptions(A3);
        return n2.readMessage(t2, e3, r2, this), this;
      }
      fromJsonString(e3, A3) {
        let t2;
        try {
          t2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(t2, A3);
      }
      toBinary(e3) {
        const A3 = this.getType().runtime.bin, t2 = A3.makeWriteOptions(e3), n2 = t2.writerFactory();
        return A3.writeMessage(this, n2, t2), n2.finish();
      }
      toJson(e3) {
        const A3 = this.getType().runtime.json, t2 = A3.makeWriteOptions(e3);
        return A3.writeMessage(this, t2);
      }
      toJsonString(e3) {
        var A3;
        const t2 = this.toJson(e3);
        return JSON.stringify(t2, null, null !== (A3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== A3 ? A3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }