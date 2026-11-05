// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2663 range:213355..217818
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2663: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(3832), r2 = t2(491), o2 = t2(5529), s = /^charset$/i;
    function a(e3, A3) {
      const t3 = A3.limits, r3 = A3.parsedConType;
      let a2;
      this.boy = e3, this.fieldSizeLimit = o2(t3, "fieldSize", 1048576), this.fieldNameSizeLimit = o2(t3, "fieldNameSize", 100), this.fieldsLimit = o2(t3, "fields", 1 / 0);
      for (var i = 0, c = r3.length; i < c; ++i) if (Array.isArray(r3[i]) && s.test(r3[i][0])) {
        a2 = r3[i][1].toLowerCase();
        break;
      }
      void 0 === a2 && (a2 = A3.defCharset || "utf8"), this.decoder = new n2(), this.charset = a2, this._fields = 0, this._state = "key", this._checkingBytes = true, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = false, this._valTrunc = false, this._hitLimit = false;
    }
    a.detect = /^application\/x-www-form-urlencoded/i, a.prototype.write = function(e3, A3) {
      if (this._fields === this.fieldsLimit) return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = true, this.boy.emit("fieldsLimit")), A3();
      let t3, n3, o3, s2 = 0;
      const a2 = e3.length;
      for (; s2 < a2; ) if ("key" === this._state) {
        for (t3 = n3 = void 0, o3 = s2; o3 < a2; ++o3) {
          if (this._checkingBytes || ++s2, 61 === e3[o3]) {
            t3 = o3;
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
        if (void 0 !== t3) t3 > s2 && (this._key += this.decoder.write(e3.toString("binary", s2, t3))), this._state = "val", this._hitLimit = false, this._checkingBytes = true, this._val = "", this._bytesVal = 0, this._valTrunc = false, this.decoder.reset(), s2 = t3 + 1;
        else if (void 0 !== n3) {
          let t4;
          ++this._fields;
          const o4 = this._keyTrunc;
          if (t4 = n3 > s2 ? this._key += this.decoder.write(e3.toString("binary", s2, n3)) : this._key, this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), t4.length && this.boy.emit("field", r2(t4, "binary", this.charset), "", o4, false), s2 = n3 + 1, this._fields === this.fieldsLimit) return A3();
        } else this._hitLimit ? (o3 > s2 && (this._key += this.decoder.write(e3.toString("binary", s2, o3))), s2 = o3, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = false, this._keyTrunc = true)) : (s2 < a2 && (this._key += this.decoder.write(e3.toString("binary", s2))), s2 = a2);
      } else {
        for (n3 = void 0, o3 = s2; o3 < a2; ++o3) {
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
          if (++this._fields, n3 > s2 && (this._val += this.decoder.write(e3.toString("binary", s2, n3))), this.boy.emit("field", r2(this._key, "binary", this.charset), r2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this._state = "key", this._hitLimit = false, this._checkingBytes = true, this._key = "", this._bytesKey = 0, this._keyTrunc = false, this.decoder.reset(), s2 = n3 + 1, this._fields === this.fieldsLimit) return A3();
        } else this._hitLimit ? (o3 > s2 && (this._val += this.decoder.write(e3.toString("binary", s2, o3))), s2 = o3, ("" === this._val && 0 === this.fieldSizeLimit || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = false, this._valTrunc = true)) : (s2 < a2 && (this._val += this.decoder.write(e3.toString("binary", s2))), s2 = a2);
      }
      A3();
    }, a.prototype.end = function() {
      this.boy._done || ("key" === this._state && this._key.length > 0 ? this.boy.emit("field", r2(this._key, "binary", this.charset), "", this._keyTrunc, false) : "val" === this._state && this.boy.emit("field", r2(this._key, "binary", this.charset), r2(this._val, "binary", this.charset), this._keyTrunc, this._valTrunc), this.boy._done = true, this.boy.emit("finish"));
    }, e2.exports = a;
  }