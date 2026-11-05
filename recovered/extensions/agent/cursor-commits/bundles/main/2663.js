// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2663 range:213496..217966
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2663: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(3832), s2 = a2(491), o2 = a2(5529), r2 = /^charset$/i;
    function i2(e3, n3) {
      const a3 = n3.limits, s3 = n3.parsedConType;
      let i3;
      this.boy = e3, this.fieldSizeLimit = o2(a3, "fieldSize", 1048576), this.fieldNameSizeLimit = o2(a3, "fieldNameSize", 100), this.fieldsLimit = o2(a3, "fields", 1 / 0);
      for (var A = 0, l = s3.length; A < l; ++A) if (Array.isArray(s3[A]) && r2.test(s3[A][0])) {
        i3 = s3[A][1].toLowerCase();
        break;
      }
      void 0 === i3 && (i3 = n3.defCharset || "utf8"), this.decoder = new t2(), this.charset = i3, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    i2.detect = /^application\/x-www-form-urlencoded/i, i2.prototype.write = function(e3, n3) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), n3();
      let a3, t3, o3, r3 = 0;
      const i3 = e3.length;
      for (; r3 < i3; ) if ("key" === this._state) {
        for (a3 = t3 = void 0, o3 = r3; o3 < i3; ++o3) {
          if (this._checkingBytes || ++r3, 61 === e3[o3]) {
            a3 = o3;
            break;
          }
          if (38 === e3[o3]) {
            t3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== a3) a3 > r3 && (this._key += this.decoder.write(e3.toString("binary", r3, a3))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), r3 = a3 + 1;
        else if (void 0 !== t3) {
          let a4;
          ++this._fields;
          const o4 = this._keyTrunc;
          if (a4 = t3 > r3 ? this._key += this.decoder.write(e3.toString("binary", r3, t3)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), a4.length && this.boy.emit("field", s2(a4, "binary", this.charset), "", o4, false), r3 = t3 + 1, this._fields === this.fieldsLimit) return n3();
        } else this._hitLimit ? (o3 > r3 && (this._key += this.decoder.write(e3.toString("binary", r3, o3))), r3 = o3, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (r3 < i3 && (this._key += this.decoder.write(e3.toString("binary", r3))), r3 = i3);
      } else {
        for (t3 = void 0, o3 = r3; o3 < i3; ++o3) {
          if (this._checkingBytes || ++r3, 38 === e3[o3]) {
            t3 = o3;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== t3) {
          if (++this._fields, t3 > r3 && (this._val += this.decoder.write(e3.toString("binary", r3, t3))), this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), r3 = t3 + 1, this._fields === this.fieldsLimit) return n3();
        } else this._hitLimit ? (o3 > r3 && (this._val += this.decoder.write(e3.toString("binary", r3, o3))), r3 = o3, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (r3 < i3 && (this._val += this.decoder.write(e3.toString("binary", r3))), r3 = i3);
      }
      n3();
    }, i2.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s2(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", s2(this._key, "binary", this.charset), s2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, e2.exports = i2;
  }