// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4193 range:384675..386394
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
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
        const a2 = this.getType().runtime.bin, t2 = a2.makeReadOptions(n3);
        return a2.readMessage(this, t2.readerFactory(e3), e3.byteLength, t2), this;
      }
      fromJson(e3, n3) {
        const a2 = this.getType(), t2 = a2.runtime.json, s2 = t2.makeReadOptions(n3);
        return t2.readMessage(a2, e3, s2, this), this;
      }
      fromJsonString(e3, n3) {
        let a2;
        try {
          a2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(a2, n3);
      }
      toBinary(e3) {
        const n3 = this.getType().runtime.bin, a2 = n3.makeWriteOptions(e3), t2 = a2.writerFactory();
        return n3.writeMessage(this, t2, a2), t2.finish();
      }
      toJson(e3) {
        const n3 = this.getType().runtime.json, a2 = n3.makeWriteOptions(e3);
        return n3.writeMessage(this, a2);
      }
      toJsonString(e3) {
        var n3;
        const a2 = this.toJson(e3);
        return JSON.stringify(a2, null, null !== (n3 = null == e3 ? void 0 : e3.prettySpaces) && void 0 !== n3 ? n3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }