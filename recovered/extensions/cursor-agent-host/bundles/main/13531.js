// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13531 range:3956249..3960697
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13531: (e, t, r) => {
    "use strict";
    const n = r(63652), s = r(93047), o = r(33013), i = /^charset$/i;
    function a(e2, t2) {
      const r2 = t2.limits, s2 = t2.parsedConType;
      let a2;
      this.boy = e2, this.fieldSizeLimit = o(r2, "fieldSize", 1048576), this.fieldNameSizeLimit = o(r2, "fieldNameSize", 100), this.fieldsLimit = o(r2, "fields", 1 / 0);
      for (var c = 0, l = s2.length; c < l; ++c) if (Array.isArray(s2[c]) && i.test(s2[c][0])) {
        a2 = s2[c][1].toLowerCase();
        break;
      }
      void 0 === a2 && (a2 = t2.defCharset || "utf8"), this.decoder = new n(), this.charset = a2, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(e2, t2) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), t2();
      let r2, n2, o2, i2 = 0;
      const a2 = e2.length;
      for (; i2 < a2; ) if ("key" === this._state) {
        for (r2 = n2 = void 0, o2 = i2; o2 < a2; ++o2) {
          if (this._checkingBytes || ++i2, 61 === e2[o2]) {
            r2 = o2;
            break;
          }
          if (38 === e2[o2]) {
            n2 = o2;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesKey;
        }
        if (void 0 !== r2) r2 > i2 && (this._key += this.decoder.write(e2.toString("binary", i2, r2))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), i2 = r2 + 1;
        else if (void 0 !== n2) {
          let r3;
          ++this._fields;
          const o3 = this._keyTrunc;
          if (r3 = n2 > i2 ? this._key += this.decoder.write(e2.toString("binary", i2, n2)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), r3.length && this.boy.emit("field", s(r3, "binary", this.charset), "", o3, false), i2 = n2 + 1, this._fields === this.fieldsLimit) return t2();
        } else this._hitLimit ? (o2 > i2 && (this._key += this.decoder.write(e2.toString("binary", i2, o2))), i2 = o2, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (i2 < a2 && (this._key += this.decoder.write(e2.toString("binary", i2))), i2 = a2);
      } else {
        for (n2 = void 0, o2 = i2; o2 < a2; ++o2) {
          if (this._checkingBytes || ++i2, 38 === e2[o2]) {
            n2 = o2;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = true;
            break;
          }
          this._checkingBytes && ++this._bytesVal;
        }
        if (void 0 !== n2) {
          if (++this._fields, n2 > i2 && (this._val += this.decoder.write(e2.toString("binary", i2, n2))), this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), i2 = n2 + 1, this._fields === this.fieldsLimit) return t2();
        } else this._hitLimit ? (o2 > i2 && (this._val += this.decoder.write(e2.toString("binary", i2, o2))), i2 = o2, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (i2 < a2 && (this._val += this.decoder.write(e2.toString("binary", i2))), i2 = a2);
      }
      t2();
    }, a.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", s(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", s(this._key, "binary", this.charset), s(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, e.exports = a;
  }