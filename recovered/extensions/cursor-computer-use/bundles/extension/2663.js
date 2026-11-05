// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2663 range:217546..222009
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2663: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(3832), s2 = t2(491), o2 = t2(5529), r = /^charset$/i;
    function i(e3, n3) {
      const t3 = n3.limits, s3 = n3.parsedConType;
      let i2;
      this.boy = e3, this.fieldSizeLimit = o2(t3, "fieldSize", 1048576), this.fieldNameSizeLimit = o2(t3, "fieldNameSize", 100), this.fieldsLimit = o2(t3, "fields", 1 / 0);
      for (var A = 0, c = s3.length; A < c; ++A) if (Array.isArray(s3[A]) && r.test(s3[A][0])) {
        i2 = s3[A][1].toLowerCase();
        break;
      }
      void 0 === i2 && (i2 = n3.defCharset || "utf8"), this.decoder = new a2(), this.charset = i2, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    i.detect = /^application\/x-www-form-urlencoded/i, i.prototype.write = function(e3, n3) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), n3();
      let t3, a3, o3, r2 = 0;
      const i2 = e3.length;
      for (; r2 < i2; ) if ("key" === this._state) {
        for (t3 = a3 = void 0, o3 = r2; o3 < i2; ++o3) {
          if (this._checkingBytes || ++r2, 61 === e3[o3]) {
            t3 = o3;
            break;
          }
          if (38 === e3[o3]) {
            a3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== t3) t3 > r2 && (this._key += this.decoder.write(e3.toString("binary", r2, t3))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), r2 = t3 + 1;
        else if (void 0 !== a3) {
          let t4;
          ++this._fields;
          const o4 = this._keyTrunc;
          if (t4 = a3 > r2 ? this._key += this.decoder.write(e3.toString("binary", r2, a3)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), t4.length && this.boy.emit("field", s2(t4, "binary", this.charset), "", o4, false), r2 = a3 + 1, this._fields === this.fieldsLimit) return n3();
        } else this._hitLimit ? (o3 > r2 && (this._key += this.decoder.write(e3.toString("binary", r2, o3))), r2 = o3, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (r2 < i2 && (this._key += this.decoder.write(e3.toString("binary", r2))), r2 = i2);
      } else {
        for (a3 = void 0, o3 = r2; o3 < i2; ++o3) {
          if (this._checkingBytes || ++r2, 38 === e3[o3]) {
            a3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== a3) {
          if (++this._fields, a3 > r2 && (this._val += this.decoder.write(e3.toString("binary", r2, a3))), this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), r2 = a3 + 1, this._fields === this.fieldsLimit) return n3();
        } else this._hitLimit ? (o3 > r2 && (this._val += this.decoder.write(e3.toString("binary", r2, o3))), r2 = o3, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (r2 < i2 && (this._val += this.decoder.write(e3.toString("binary", r2))), r2 = i2);
      }
      n3();
    }, i.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s2(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, e2.exports = i;
  }