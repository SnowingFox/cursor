// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 24193 range:674935..676623
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24193: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.Message = void 0;
    t.Message = class {
      equals(e2) {
        return this.getType().runtime.util.equals(this.getType(), this, e2);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e2, t2) {
        const r = this.getType().runtime.bin, n = r.makeReadOptions(t2);
        return r.readMessage(this, n.readerFactory(e2), e2.byteLength, n), this;
      }
      fromJson(e2, t2) {
        const r = this.getType(), n = r.runtime.json, o = n.makeReadOptions(t2);
        return n.readMessage(r, e2, o, this), this;
      }
      fromJsonString(e2, t2) {
        let r;
        try {
          r = JSON.parse(e2);
        } catch (e3) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
        return this.fromJson(r, t2);
      }
      toBinary(e2) {
        const t2 = this.getType().runtime.bin, r = t2.makeWriteOptions(e2), n = r.writerFactory();
        return t2.writeMessage(this, n, r), n.finish();
      }
      toJson(e2) {
        const t2 = this.getType().runtime.json, r = t2.makeWriteOptions(e2);
        return t2.writeMessage(this, r);
      }
      toJsonString(e2) {
        var t2;
        const r = this.toJson(e2);
        return JSON.stringify(r, null, null !== (t2 = null == e2 ? void 0 : e2.prettySpaces) && void 0 !== t2 ? t2 : 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
  }