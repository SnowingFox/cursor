// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3531 range:948739..953205
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3531: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(3652), s2 = r2(3047), i2 = r2(3013), o2 = /^charset$/i;
    function a(t3, e3) {
      const r3 = e3.limits, s3 = e3.parsedConType;
      let a2;
      this.boy = t3, this.fieldSizeLimit = i2(r3, "fieldSize", 1048576), this.fieldNameSizeLimit = i2(r3, "fieldNameSize", 100), this.fieldsLimit = i2(r3, "fields", 1 / 0);
      for (var u = 0, c = s3.length; u < c; ++u) if (Array.isArray(s3[u]) && o2.test(s3[u][0])) {
        a2 = s3[u][1].toLowerCase();
        break;
      }
      void 0 === a2 && (a2 = e3.defCharset || "utf8"), this.decoder = new n2(), this.charset = a2, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(t3, e3) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), e3();
      let r3, n3, i3, o3 = 0;
      const a2 = t3.length;
      for (; o3 < a2; ) if ("key" === this._state) {
        for (r3 = n3 = void 0, i3 = o3; i3 < a2; ++i3) {
          if (this._checkingBytes || ++o3, 61 === t3[i3]) {
            r3 = i3;
            break;
          }
          if (38 === t3[i3]) {
            n3 = i3;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== r3) r3 > o3 && (this._key += this.decoder.write(t3.toString("binary", o3, r3))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), o3 = r3 + 1;
        else if (void 0 !== n3) {
          let r4;
          ++this._fields;
          const i4 = this._keyTrunc;
          if (r4 = n3 > o3 ? this._key += this.decoder.write(t3.toString("binary", o3, n3)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), r4.length && this.boy.emit("field", s2(r4, "binary", this.charset), "", i4, false), o3 = n3 + 1, this._fields === this.fieldsLimit) return e3();
        } else this._hitLimit ? (i3 > o3 && (this._key += this.decoder.write(t3.toString("binary", o3, i3))), o3 = i3, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (o3 < a2 && (this._key += this.decoder.write(t3.toString("binary", o3))), o3 = a2);
      } else {
        for (n3 = void 0, i3 = o3; i3 < a2; ++i3) {
          if (this._checkingBytes || ++o3, 38 === t3[i3]) {
            n3 = i3;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== n3) {
          if (++this._fields, n3 > o3 && (this._val += this.decoder.write(t3.toString("binary", o3, n3))), this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), o3 = n3 + 1, this._fields === this.fieldsLimit) return e3();
        } else this._hitLimit ? (i3 > o3 && (this._val += this.decoder.write(t3.toString("binary", o3, i3))), o3 = i3, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (o3 < a2 && (this._val += this.decoder.write(t3.toString("binary", o3))), o3 = a2);
      }
      e3();
    }, a.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s2(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, t2.exports = a;
  }