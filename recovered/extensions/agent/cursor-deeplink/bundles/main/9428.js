// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9428 range:835460..838530
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9428: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276), r2 = A2(9963).a, o2 = A2(9845).Buffer;
    function s(e3, t3) {
      r2.call(this, t3), o2.isBuffer(e3) ? (this.base = e3, this.offset = 0, this.length = e3.length) : this.error("Input not Buffer");
    }
    function i(e3, t3) {
      if (Array.isArray(e3)) this.length = 0, this.value = e3.map(function(e4) {
        return i.isEncoderBuffer(e4) || (e4 = new i(e4, t3)), this.length += e4.length, e4;
      }, this);
      else if ("number" == typeof e3) {
        if (!(0 <= e3 && e3 <= 255)) return t3.error("non-byte EncoderBuffer value");
        this.value = e3, this.length = 1;
      } else if ("string" == typeof e3) this.value = e3, this.length = o2.byteLength(e3);
      else {
        if (!o2.isBuffer(e3)) return t3.error("Unsupported type: " + typeof e3);
        this.value = e3, this.length = e3.length;
      }
    }
    n2(s, r2), t2.t = s, s.isDecoderBuffer = function(e3) {
      if (e3 instanceof s) return true;
      return "object" == typeof e3 && o2.isBuffer(e3.base) && "DecoderBuffer" === e3.constructor.name && "number" == typeof e3.offset && "number" == typeof e3.length && "function" == typeof e3.save && "function" == typeof e3.restore && "function" == typeof e3.isEmpty && "function" == typeof e3.readUInt8 && "function" == typeof e3.skip && "function" == typeof e3.raw;
    }, s.prototype.save = function() {
      return { offset: this.offset, reporter: r2.prototype.save.call(this) };
    }, s.prototype.restore = function(e3) {
      const t3 = new s(this.base);
      return t3.offset = e3.offset, t3.length = this.offset, this.offset = e3.offset, r2.prototype.restore.call(this, e3.reporter), t3;
    }, s.prototype.isEmpty = function() {
      return this.offset === this.length;
    }, s.prototype.readUInt8 = function(e3) {
      return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, true) : this.error(e3 || "DecoderBuffer overrun");
    }, s.prototype.skip = function(e3, t3) {
      if (!(this.offset + e3 <= this.length)) return this.error(t3 || "DecoderBuffer overrun");
      const A3 = new s(this.base);
      return A3._reporterState = this._reporterState, A3.offset = this.offset, A3.length = this.offset + e3, this.offset += e3, A3;
    }, s.prototype.raw = function(e3) {
      return this.base.slice(e3 ? e3.offset : this.offset, this.length);
    }, t2.d = i, i.isEncoderBuffer = function(e3) {
      if (e3 instanceof i) return true;
      return "object" == typeof e3 && "EncoderBuffer" === e3.constructor.name && "number" == typeof e3.length && "function" == typeof e3.join;
    }, i.prototype.join = function(e3, t3) {
      return e3 || (e3 = o2.alloc(this.length)), t3 || (t3 = 0), 0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function(A3) {
        A3.join(e3, t3), t3 += A3.length;
      }) : ("number" == typeof this.value ? e3[t3] = this.value : "string" == typeof this.value ? e3.write(this.value, t3) : o2.isBuffer(this.value) && this.value.copy(e3, t3), t3 += this.length)), e3;
    };
  }