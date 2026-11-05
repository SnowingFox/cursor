// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2663 range:239679..244142
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2663: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(3832), r2 = A2(491), o2 = A2(5529), s = /^charset$/i;
    function i(e3, t3) {
      const A3 = t3.limits, r3 = t3.parsedConType;
      let i2;
      this.boy = e3, this.fieldSizeLimit = o2(A3, "fieldSize", 1048576), this.fieldNameSizeLimit = o2(A3, "fieldNameSize", 100), this.fieldsLimit = o2(A3, "fields", 1 / 0);
      for (var a = 0, c = r3.length; a < c; ++a) if (Array.isArray(r3[a]) && s.test(r3[a][0])) {
        i2 = r3[a][1].toLowerCase();
        break;
      }
      void 0 === i2 && (i2 = t3.defCharset || "utf8"), this.decoder = new n2(), this.charset = i2, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    i.detect = /^application\/x-www-form-urlencoded/i, i.prototype.write = function(e3, t3) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), t3();
      let A3, n3, o3, s2 = 0;
      const i2 = e3.length;
      for (; s2 < i2; ) if ("key" === this._state) {
        for (A3 = n3 = void 0, o3 = s2; o3 < i2; ++o3) {
          if (this._checkingBytes || ++s2, 61 === e3[o3]) {
            A3 = o3;
            break;
          }
          if (38 === e3[o3]) {
            n3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== A3) A3 > s2 && (this._key += this.decoder.write(e3.toString("binary", s2, A3))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), s2 = A3 + 1;
        else if (void 0 !== n3) {
          let A4;
          ++this._fields;
          const o4 = this._keyTrunc;
          if (A4 = n3 > s2 ? this._key += this.decoder.write(e3.toString("binary", s2, n3)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), A4.length && this.boy.emit("field", r2(A4, "binary", this.charset), "", o4, false), s2 = n3 + 1, this._fields === this.fieldsLimit) return t3();
        } else this._hitLimit ? (o3 > s2 && (this._key += this.decoder.write(e3.toString("binary", s2, o3))), s2 = o3, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (s2 < i2 && (this._key += this.decoder.write(e3.toString("binary", s2))), s2 = i2);
      } else {
        for (n3 = void 0, o3 = s2; o3 < i2; ++o3) {
          if (this._checkingBytes || ++s2, 38 === e3[o3]) {
            n3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== n3) {
          if (++this._fields, n3 > s2 && (this._val += this.decoder.write(e3.toString("binary", s2, n3))), this.boy.emit("field", r2(this._key, "binary", this.charset), r2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), s2 = n3 + 1, this._fields === this.fieldsLimit) return t3();
        } else this._hitLimit ? (o3 > s2 && (this._val += this.decoder.write(e3.toString("binary", s2, o3))), s2 = o3, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (s2 < i2 && (this._val += this.decoder.write(e3.toString("binary", s2))), s2 = i2);
      }
      t3();
    }, i.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", r2(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", r2(this._key, "binary", this.charset), r2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, e2.exports = i;
  }