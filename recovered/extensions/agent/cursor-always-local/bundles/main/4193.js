// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4193 range:1064588..1066307
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4193: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Message = void 0;
    e2.Message = class {
      equals(t3) {
        return this.getType().runtime.util.equals(this.getType(), this, t3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(t3, e3) {
        const r2 = this.getType().runtime.bin, n2 = r2.makeReadOptions(e3);
        return r2.readMessage(this, n2.readerFactory(t3), t3.byteLength, n2), this;
      }
      fromJson(t3, e3) {
        const r2 = this.getType(), n2 = r2.runtime.json, s2 = n2.makeReadOptions(e3);
        return n2.readMessage(r2, t3, s2, this), this;
      }
      fromJsonString(t3, e3) {
        let r2;
        try {
          r2 = JSON.parse(t3);
        } catch (t4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${t4 instanceof Error ? t4.message : String(t4)}`);
        }
        return this.fromJson(r2, e3);
      }
      toBinary(t3) {
        const e3 = this.getType().runtime.bin, r2 = e3.makeWriteOptions(t3), n2 = r2.writerFactory();
        return e3.writeMessage(this, n2, r2), n2.finish();
      }
      toJson(t3) {
        const e3 = this.getType().runtime.json, r2 = e3.makeWriteOptions(t3);
        return e3.writeMessage(this, r2);
      }
      toJsonString(t3) {
        var e3;
        const r2 = this.toJson(t3);
        return JSON.stringify(r2, null, null !== (e3 = null == t3 ? void 0 : t3.prettySpaces) && void 0 !== e3 ? e3 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }