// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4193 range:391799..393518
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4193: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.Message = void 0;
    n2.Message = class {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, n3) {
        const t2 = this.getType().runtime.bin, a2 = t2.makeReadOptions(n3);
        return t2.readMessage(this, a2.readerFactory(e3), e3.byteLength, a2), this;
      }
      fromJson(e3, n3) {
        const t2 = this.getType(), a2 = t2.runtime.json, s2 = a2.makeReadOptions(n3);
        return a2.readMessage(t2, e3, s2, this), this;
      }
      fromJsonString(e3, n3) {
        let t2;
        try {
          t2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(t2, n3);
      }
      toBinary(e3) {
        const n3 = this.getType().runtime.bin, t2 = n3.makeWriteOptions(e3), a2 = t2.writerFactory();
        return n3.writeMessage(this, a2, t2), a2.finish();
      }
      toJson(e3) {
        const n3 = this.getType().runtime.json, t2 = n3.makeWriteOptions(e3);
        return n3.writeMessage(this, t2);
      }
      toJsonString(e3) {
        var n3;
        const t2 = this.toJson(e3);
        return JSON.stringify(t2, null, null !== (n3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== n3 ? n3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }