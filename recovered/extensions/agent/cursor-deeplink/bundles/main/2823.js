// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2823 range:329287..393933
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2823: function(e2, t2, A2) {
    !(function(e3, t3) {
      "use strict";
      function n2(e4, t4) {
        if (!e4) throw new Error(t4 || "Assertion failed");
      }
      function r2(e4, t4) {
        e4.super_ = t4;
        var A3 = function() {
        };
        A3.prototype = t4.prototype, e4.prototype = new A3(), e4.prototype.constructor = e4;
      }
      function o2(e4, t4, A3) {
        if (o2.isBN(e4)) return e4;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e4 && ("le" !== t4 && "be" !== t4 || (A3 = t4, t4 = 10), this._init(e4 || 0, t4 || 10, A3 || "be"));
      }
      var s;
      "object" == typeof e3 ? e3.exports = o2 : t3.BN = o2, o2.BN = o2, o2.wordSize = 26;
      try {
        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : A2(181).Buffer;
      } catch (e4) {
      }
      function i(e4, t4) {
        var A3 = e4.charCodeAt(t4);
        return A3 >= 65 && A3 <= 70 ? A3 - 55 : A3 >= 97 && A3 <= 102 ? A3 - 87 : A3 - 48 & 15;
      }
      function a(e4, t4, A3) {
        var n3 = i(e4, A3);
        return A3 - 1 >= t4 && (n3 |= i(e4, A3 - 1) << 4), n3;
      }
      function c(e4, t4, A3, n3) {
        for (var r3 = 0, o3 = Math.min(e4.length, A3), s2 = t4; s2 < o3; s2++) {
          var i2 = e4.charCodeAt(s2) - 48;
          r3 *= n3, r3 += i2 >= 49 ? i2 - 49 + 10 : i2 >= 17 ? i2 - 17 + 10 : i2;
        }
        return r3;
      }
      o2.isBN = function(e4) {
        return e4 instanceof o2 || null !== e4 && "object" == typeof e4 && e4.constructor.wordSize === o2.wordSize && Array.isArray(e4.words);
      }, o2.max = function(e4, t4) {
        return e4.cmp(t4) > 0 ? e4 : t4;
      }, o2.min = function(e4, t4) {
        return e4.cmp(t4) < 0 ? e4 : t4;
      }, o2.prototype._init = function(e4, t4, A3) {
        if ("number" == typeof e4) return this._initNumber(e4, t4, A3);
        if ("object" == typeof e4) return this._initArray(e4, t4, A3);
        "hex" === t4 && (t4 = 16), n2(t4 === (0 | t4) && t4 >= 2 && t4 <= 36);
        var r3 = 0;
        "-" === (e4 = e4.toString().replace(/\s+/g, ""))[0] && (r3++, this.negative = 1), r3 < e4.length && (16 === t4 ? this._parseHex(e4, r3, A3) : (this._parseBase(e4, t4, r3), "le" === A3 && this._initArray(this.toArray(), t4, A3)));
      }, o2.prototype._initNumber = function(e4, t4, A3) {
        e4 < 0 && (this.negative = 1, e4 = -e4), e4 < 67108864 ? (this.words = [67108863 & e4], this.length = 1) : e4 < 4503599627370496 ? (this.words = [67108863 & e4, e4 / 67108864 & 67108863], this.length = 2) : (n2(e4 < 9007199254740992), this.words = [67108863 & e4, e4 / 67108864 & 67108863, 1], this.length = 3), "le" === A3 && this._initArray(this.toArray(), t4, A3);
      }, o2.prototype._initArray = function(e4, t4, A3) {
        if (n2("number" == typeof e4.length), e4.length <= 0) return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(e4.length / 3), this.words = new Array(this.length);
        for (var r3 = 0; r3 < this.length; r3++) this.words[r3] = 0;
        var o3, s2, i2 = 0;
        if ("be" === A3) for (r3 = e4.length - 1, o3 = 0; r3 >= 0; r3 -= 3) s2 = e4[r3] | e4[r3 - 1] << 8 | e4[r3 - 2] << 16, this.words[o3] |= s2 << i2 & 67108863, this.words[o3 + 1] = s2 >>> 26 - i2 & 67108863, (i2 += 24) >= 26 && (i2 -= 26, o3++);
        else if ("le" === A3) for (r3 = 0, o3 = 0; r3 < e4.length; r3 += 3) s2 = e4[r3] | e4[r3 + 1] << 8 | e4[r3 + 2] << 16, this.words[o3] |= s2 << i2 & 67108863, this.words[o3 + 1] = s2 >>> 26 - i2 & 67108863, (i2 += 24) >= 26 && (i2 -= 26, o3++);
        return this.strip();
      }, o2.prototype._parseHex = function(e4, t4, A3) {
        this.length = Math.ceil((e4.length - t4) / 6), this.words = new Array(this.length);
        for (var n3 = 0; n3 < this.length; n3++) this.words[n3] = 0;
        var r3, o3 = 0, s2 = 0;
        if ("be" === A3) for (n3 = e4.length - 1; n3 >= t4; n3 -= 2) r3 = a(e4, t4, n3) << o3, this.words[s2] |= 67108863 & r3, o3 >= 18 ? (o3 -= 18, s2 += 1, this.words[s2] |= r3 >>> 26) : o3 += 8;
        else for (n3 = (e4.length - t4) % 2 == 0 ? t4 + 1 : t4; n3 < e4.length; n3 += 2) r3 = a(e4, t4, n3) << o3, this.words[s2] |= 67108863 & r3, o3 >= 18 ? (o3 -= 18, s2 += 1, this.words[s2] |= r3 >>> 26) : o3 += 8;
        this.strip();
      }, o2.prototype._parseBase = function(e4, t4, A3) {
        this.words = [0], this.length = 1;
        for (var n3 = 0, r3 = 1; r3 <= 67108863; r3 *= t4) n3++;
        n3--, r3 = r3 / t4 | 0;
        for (var o3 = e4.length - A3, s2 = o3 % n3, i2 = Math.min(o3, o3 - s2) + A3, a2 = 0, l2 = A3; l2 < i2; l2 += n3) a2 = c(e4, l2, l2 + n3, t4), this.imuln(r3), this.words[0] + a2 < 67108864 ? this.words[0] += a2 : this._iaddn(a2);
        if (0 !== s2) {
          var u2 = 1;
          for (a2 = c(e4, l2, e4.length, t4), l2 = 0; l2 < s2; l2++) u2 *= t4;
          this.imuln(u2), this.words[0] + a2 < 67108864 ? this.words[0] += a2 : this._iaddn(a2);
        }
        this.strip();
      }, o2.prototype.copy = function(e4) {
        e4.words = new Array(this.length);
        for (var t4 = 0; t4 < this.length; t4++) e4.words[t4] = this.words[t4];
        e4.length = this.length, e4.negative = this.negative, e4.red = this.red;
      }, o2.prototype.clone = function() {
        var e4 = new o2(null);
        return this.copy(e4), e4;
      }, o2.prototype._expand = function(e4) {
        for (; this.length < e4; ) this.words[this.length++] = 0;
        return this;
      }, o2.prototype.strip = function() {
        for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o2.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o2.prototype.inspect = function() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], g = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      function E(e4, t4, A3) {
        A3.negative = t4.negative ^ e4.negative;
        var n3 = e4.length + t4.length | 0;
        A3.length = n3, n3 = n3 - 1 | 0;
        var r3 = 0 | e4.words[0], o3 = 0 | t4.words[0], s2 = r3 * o3, i2 = 67108863 & s2, a2 = s2 / 67108864 | 0;
        A3.words[0] = i2;
        for (var c2 = 1; c2 < n3; c2++) {
          for (var l2 = a2 >>> 26, u2 = 67108863 & a2, g2 = Math.min(c2, t4.length - 1), E2 = Math.max(0, c2 - e4.length + 1); E2 <= g2; E2++) {
            var h2 = c2 - E2 | 0;
            l2 += (s2 = (r3 = 0 | e4.words[h2]) * (o3 = 0 | t4.words[E2]) + u2) / 67108864 | 0, u2 = 67108863 & s2;
          }
          A3.words[c2] = 0 | u2, a2 = 0 | l2;
        }
        return 0 !== a2 ? A3.words[c2] = 0 | a2 : A3.length--, A3.strip();
      }
      o2.prototype.toString = function(e4, t4) {
        var A3;
        if (t4 = 0 | t4 || 1, 16 === (e4 = e4 || 10) || "hex" === e4) {
          A3 = "";
          for (var r3 = 0, o3 = 0, s2 = 0; s2 < this.length; s2++) {
            var i2 = this.words[s2], a2 = (16777215 & (i2 << r3 | o3)).toString(16);
            o3 = i2 >>> 24 - r3 & 16777215, (r3 += 2) >= 26 && (r3 -= 26, s2--), A3 = 0 !== o3 || s2 !== this.length - 1 ? l[6 - a2.length] + a2 + A3 : a2 + A3;
          }
          for (0 !== o3 && (A3 = o3.toString(16) + A3); A3.length % t4 !== 0; ) A3 = "0" + A3;
          return 0 !== this.negative && (A3 = "-" + A3), A3;
        }
        if (e4 === (0 | e4) && e4 >= 2 && e4 <= 36) {
          var c2 = u[e4], E2 = g[e4];
          A3 = "";
          var h2 = this.clone();
          for (h2.negative = 0; !h2.isZero(); ) {
            var d2 = h2.modn(E2).toString(e4);
            A3 = (h2 = h2.idivn(E2)).isZero() ? d2 + A3 : l[c2 - d2.length] + d2 + A3;
          }
          for (this.isZero() && (A3 = "0" + A3); A3.length % t4 !== 0; ) A3 = "0" + A3;
          return 0 !== this.negative && (A3 = "-" + A3), A3;
        }
        n2(false, "Base should be between 2 and 36");
      }, o2.prototype.toNumber = function() {
        var e4 = this.words[0];
        return 2 === this.length ? e4 += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e4 += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n2(false, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e4 : e4;
      }, o2.prototype.toJSON = function() {
        return this.toString(16);
      }, o2.prototype.toBuffer = function(e4, t4) {
        return n2(void 0 !== s), this.toArrayLike(s, e4, t4);
      }, o2.prototype.toArray = function(e4, t4) {
        return this.toArrayLike(Array, e4, t4);
      }, o2.prototype.toArrayLike = function(e4, t4, A3) {
        var r3 = this.byteLength(), o3 = A3 || Math.max(1, r3);
        n2(r3 <= o3, "byte array longer than desired length"), n2(o3 > 0, "Requested array length <= 0"), this.strip();
        var s2, i2, a2 = "le" === t4, c2 = new e4(o3), l2 = this.clone();
        if (a2) {
          for (i2 = 0; !l2.isZero(); i2++) s2 = l2.andln(255), l2.iushrn(8), c2[i2] = s2;
          for (; i2 < o3; i2++) c2[i2] = 0;
        } else {
          for (i2 = 0; i2 < o3 - r3; i2++) c2[i2] = 0;
          for (i2 = 0; !l2.isZero(); i2++) s2 = l2.andln(255), l2.iushrn(8), c2[o3 - i2 - 1] = s2;
        }
        return c2;
      }, Math.clz32 ? o2.prototype._countBits = function(e4) {
        return 32 - Math.clz32(e4);
      } : o2.prototype._countBits = function(e4) {
        var t4 = e4, A3 = 0;
        return t4 >= 4096 && (A3 += 13, t4 >>>= 13), t4 >= 64 && (A3 += 7, t4 >>>= 7), t4 >= 8 && (A3 += 4, t4 >>>= 4), t4 >= 2 && (A3 += 2, t4 >>>= 2), A3 + t4;
      }, o2.prototype._zeroBits = function(e4) {
        if (0 === e4) return 26;
        var t4 = e4, A3 = 0;
        return 8191 & t4 || (A3 += 13, t4 >>>= 13), 127 & t4 || (A3 += 7, t4 >>>= 7), 15 & t4 || (A3 += 4, t4 >>>= 4), 3 & t4 || (A3 += 2, t4 >>>= 2), 1 & t4 || A3++, A3;
      }, o2.prototype.bitLength = function() {
        var e4 = this.words[this.length - 1], t4 = this._countBits(e4);
        return 26 * (this.length - 1) + t4;
      }, o2.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var e4 = 0, t4 = 0; t4 < this.length; t4++) {
          var A3 = this._zeroBits(this.words[t4]);
          if (e4 += A3, 26 !== A3) break;
        }
        return e4;
      }, o2.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o2.prototype.toTwos = function(e4) {
        return 0 !== this.negative ? this.abs().inotn(e4).iaddn(1) : this.clone();
      }, o2.prototype.fromTwos = function(e4) {
        return this.testn(e4 - 1) ? this.notn(e4).iaddn(1).ineg() : this.clone();
      }, o2.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o2.prototype.neg = function() {
        return this.clone().ineg();
      }, o2.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o2.prototype.iuor = function(e4) {
        for (; this.length < e4.length; ) this.words[this.length++] = 0;
        for (var t4 = 0; t4 < e4.length; t4++) this.words[t4] = this.words[t4] | e4.words[t4];
        return this.strip();
      }, o2.prototype.ior = function(e4) {
        return n2(0 === (this.negative | e4.negative)), this.iuor(e4);
      }, o2.prototype.or = function(e4) {
        return this.length > e4.length ? this.clone().ior(e4) : e4.clone().ior(this);
      }, o2.prototype.uor = function(e4) {
        return this.length > e4.length ? this.clone().iuor(e4) : e4.clone().iuor(this);
      }, o2.prototype.iuand = function(e4) {
        var t4;
        t4 = this.length > e4.length ? e4 : this;
        for (var A3 = 0; A3 < t4.length; A3++) this.words[A3] = this.words[A3] & e4.words[A3];
        return this.length = t4.length, this.strip();
      }, o2.prototype.iand = function(e4) {
        return n2(0 === (this.negative | e4.negative)), this.iuand(e4);
      }, o2.prototype.and = function(e4) {
        return this.length > e4.length ? this.clone().iand(e4) : e4.clone().iand(this);
      }, o2.prototype.uand = function(e4) {
        return this.length > e4.length ? this.clone().iuand(e4) : e4.clone().iuand(this);
      }, o2.prototype.iuxor = function(e4) {
        var t4, A3;
        this.length > e4.length ? (t4 = this, A3 = e4) : (t4 = e4, A3 = this);
        for (var n3 = 0; n3 < A3.length; n3++) this.words[n3] = t4.words[n3] ^ A3.words[n3];
        if (this !== t4) for (; n3 < t4.length; n3++) this.words[n3] = t4.words[n3];
        return this.length = t4.length, this.strip();
      }, o2.prototype.ixor = function(e4) {
        return n2(0 === (this.negative | e4.negative)), this.iuxor(e4);
      }, o2.prototype.xor = function(e4) {
        return this.length > e4.length ? this.clone().ixor(e4) : e4.clone().ixor(this);
      }, o2.prototype.uxor = function(e4) {
        return this.length > e4.length ? this.clone().iuxor(e4) : e4.clone().iuxor(this);
      }, o2.prototype.inotn = function(e4) {
        n2("number" == typeof e4 && e4 >= 0);
        var t4 = 0 | Math.ceil(e4 / 26), A3 = e4 % 26;
        this._expand(t4), A3 > 0 && t4--;
        for (var r3 = 0; r3 < t4; r3++) this.words[r3] = 67108863 & ~this.words[r3];
        return A3 > 0 && (this.words[r3] = ~this.words[r3] & 67108863 >> 26 - A3), this.strip();
      }, o2.prototype.notn = function(e4) {
        return this.clone().inotn(e4);
      }, o2.prototype.setn = function(e4, t4) {
        n2("number" == typeof e4 && e4 >= 0);
        var A3 = e4 / 26 | 0, r3 = e4 % 26;
        return this._expand(A3 + 1), this.words[A3] = t4 ? this.words[A3] | 1 << r3 : this.words[A3] & ~(1 << r3), this.strip();
      }, o2.prototype.iadd = function(e4) {
        var t4, A3, n3;
        if (0 !== this.negative && 0 === e4.negative) return this.negative = 0, t4 = this.isub(e4), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== e4.negative) return e4.negative = 0, t4 = this.isub(e4), e4.negative = 1, t4._normSign();
        this.length > e4.length ? (A3 = this, n3 = e4) : (A3 = e4, n3 = this);
        for (var r3 = 0, o3 = 0; o3 < n3.length; o3++) t4 = (0 | A3.words[o3]) + (0 | n3.words[o3]) + r3, this.words[o3] = 67108863 & t4, r3 = t4 >>> 26;
        for (; 0 !== r3 && o3 < A3.length; o3++) t4 = (0 | A3.words[o3]) + r3, this.words[o3] = 67108863 & t4, r3 = t4 >>> 26;
        if (this.length = A3.length, 0 !== r3) this.words[this.length] = r3, this.length++;
        else if (A3 !== this) for (; o3 < A3.length; o3++) this.words[o3] = A3.words[o3];
        return this;
      }, o2.prototype.add = function(e4) {
        var t4;
        return 0 !== e4.negative && 0 === this.negative ? (e4.negative = 0, t4 = this.sub(e4), e4.negative ^= 1, t4) : 0 === e4.negative && 0 !== this.negative ? (this.negative = 0, t4 = e4.sub(this), this.negative = 1, t4) : this.length > e4.length ? this.clone().iadd(e4) : e4.clone().iadd(this);
      }, o2.prototype.isub = function(e4) {
        if (0 !== e4.negative) {
          e4.negative = 0;
          var t4 = this.iadd(e4);
          return e4.negative = 1, t4._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(e4), this.negative = 1, this._normSign();
        var A3, n3, r3 = this.cmp(e4);
        if (0 === r3) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        r3 > 0 ? (A3 = this, n3 = e4) : (A3 = e4, n3 = this);
        for (var o3 = 0, s2 = 0; s2 < n3.length; s2++) o3 = (t4 = (0 | A3.words[s2]) - (0 | n3.words[s2]) + o3) >> 26, this.words[s2] = 67108863 & t4;
        for (; 0 !== o3 && s2 < A3.length; s2++) o3 = (t4 = (0 | A3.words[s2]) + o3) >> 26, this.words[s2] = 67108863 & t4;
        if (0 === o3 && s2 < A3.length && A3 !== this) for (; s2 < A3.length; s2++) this.words[s2] = A3.words[s2];
        return this.length = Math.max(this.length, s2), A3 !== this && (this.negative = 1), this.strip();
      }, o2.prototype.sub = function(e4) {
        return this.clone().isub(e4);
      };
      var h = function(e4, t4, A3) {
        var n3, r3, o3, s2 = e4.words, i2 = t4.words, a2 = A3.words, c2 = 0, l2 = 0 | s2[0], u2 = 8191 & l2, g2 = l2 >>> 13, E2 = 0 | s2[1], h2 = 8191 & E2, d2 = E2 >>> 13, I2 = 0 | s2[2], B2 = 8191 & I2, Q2 = I2 >>> 13, f2 = 0 | s2[3], C2 = 8191 & f2, p2 = f2 >>> 13, m2 = 0 | s2[4], y2 = 8191 & m2, w2 = m2 >>> 13, k = 0 | s2[5], b = 8191 & k, N = k >>> 13, T = 0 | s2[6], D = 8191 & T, S = T >>> 13, R = 0 | s2[7], F = 8191 & R, v = R >>> 13, M = 0 | s2[8], U = 8191 & M, L = M >>> 13, _ = 0 | s2[9], J = 8191 & _, O = _ >>> 13, Y = 0 | i2[0], G = 8191 & Y, P = Y >>> 13, V = 0 | i2[1], x = 8191 & V, H = V >>> 13, q = 0 | i2[2], W = 8191 & q, j = q >>> 13, K = 0 | i2[3], X = 8191 & K, Z = K >>> 13, z = 0 | i2[4], $ = 8191 & z, ee = z >>> 13, te = 0 | i2[5], Ae = 8191 & te, ne = te >>> 13, re = 0 | i2[6], oe = 8191 & re, se = re >>> 13, ie = 0 | i2[7], ae = 8191 & ie, ce = ie >>> 13, le = 0 | i2[8], ue = 8191 & le, ge = le >>> 13, Ee = 0 | i2[9], he = 8191 & Ee, de = Ee >>> 13;
        A3.negative = e4.negative ^ t4.negative, A3.length = 19;
        var Ie = (c2 + (n3 = Math.imul(u2, G)) | 0) + ((8191 & (r3 = (r3 = Math.imul(u2, P)) + Math.imul(g2, G) | 0)) << 13) | 0;
        c2 = ((o3 = Math.imul(g2, P)) + (r3 >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n3 = Math.imul(h2, G), r3 = (r3 = Math.imul(h2, P)) + Math.imul(d2, G) | 0, o3 = Math.imul(d2, P);
        var Be = (c2 + (n3 = n3 + Math.imul(u2, x) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, H) | 0) + Math.imul(g2, x) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, H) | 0) + (r3 >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n3 = Math.imul(B2, G), r3 = (r3 = Math.imul(B2, P)) + Math.imul(Q2, G) | 0, o3 = Math.imul(Q2, P), n3 = n3 + Math.imul(h2, x) | 0, r3 = (r3 = r3 + Math.imul(h2, H) | 0) + Math.imul(d2, x) | 0, o3 = o3 + Math.imul(d2, H) | 0;
        var Qe = (c2 + (n3 = n3 + Math.imul(u2, W) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, j) | 0) + Math.imul(g2, W) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, j) | 0) + (r3 >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, n3 = Math.imul(C2, G), r3 = (r3 = Math.imul(C2, P)) + Math.imul(p2, G) | 0, o3 = Math.imul(p2, P), n3 = n3 + Math.imul(B2, x) | 0, r3 = (r3 = r3 + Math.imul(B2, H) | 0) + Math.imul(Q2, x) | 0, o3 = o3 + Math.imul(Q2, H) | 0, n3 = n3 + Math.imul(h2, W) | 0, r3 = (r3 = r3 + Math.imul(h2, j) | 0) + Math.imul(d2, W) | 0, o3 = o3 + Math.imul(d2, j) | 0;
        var fe = (c2 + (n3 = n3 + Math.imul(u2, X) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, Z) | 0) + Math.imul(g2, X) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, Z) | 0) + (r3 >>> 13) | 0) + (fe >>> 26) | 0, fe &= 67108863, n3 = Math.imul(y2, G), r3 = (r3 = Math.imul(y2, P)) + Math.imul(w2, G) | 0, o3 = Math.imul(w2, P), n3 = n3 + Math.imul(C2, x) | 0, r3 = (r3 = r3 + Math.imul(C2, H) | 0) + Math.imul(p2, x) | 0, o3 = o3 + Math.imul(p2, H) | 0, n3 = n3 + Math.imul(B2, W) | 0, r3 = (r3 = r3 + Math.imul(B2, j) | 0) + Math.imul(Q2, W) | 0, o3 = o3 + Math.imul(Q2, j) | 0, n3 = n3 + Math.imul(h2, X) | 0, r3 = (r3 = r3 + Math.imul(h2, Z) | 0) + Math.imul(d2, X) | 0, o3 = o3 + Math.imul(d2, Z) | 0;
        var Ce = (c2 + (n3 = n3 + Math.imul(u2, $) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, ee) | 0) + Math.imul(g2, $) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, ee) | 0) + (r3 >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n3 = Math.imul(b, G), r3 = (r3 = Math.imul(b, P)) + Math.imul(N, G) | 0, o3 = Math.imul(N, P), n3 = n3 + Math.imul(y2, x) | 0, r3 = (r3 = r3 + Math.imul(y2, H) | 0) + Math.imul(w2, x) | 0, o3 = o3 + Math.imul(w2, H) | 0, n3 = n3 + Math.imul(C2, W) | 0, r3 = (r3 = r3 + Math.imul(C2, j) | 0) + Math.imul(p2, W) | 0, o3 = o3 + Math.imul(p2, j) | 0, n3 = n3 + Math.imul(B2, X) | 0, r3 = (r3 = r3 + Math.imul(B2, Z) | 0) + Math.imul(Q2, X) | 0, o3 = o3 + Math.imul(Q2, Z) | 0, n3 = n3 + Math.imul(h2, $) | 0, r3 = (r3 = r3 + Math.imul(h2, ee) | 0) + Math.imul(d2, $) | 0, o3 = o3 + Math.imul(d2, ee) | 0;
        var pe = (c2 + (n3 = n3 + Math.imul(u2, Ae) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, ne) | 0) + Math.imul(g2, Ae) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, ne) | 0) + (r3 >>> 13) | 0) + (pe >>> 26) | 0, pe &= 67108863, n3 = Math.imul(D, G), r3 = (r3 = Math.imul(D, P)) + Math.imul(S, G) | 0, o3 = Math.imul(S, P), n3 = n3 + Math.imul(b, x) | 0, r3 = (r3 = r3 + Math.imul(b, H) | 0) + Math.imul(N, x) | 0, o3 = o3 + Math.imul(N, H) | 0, n3 = n3 + Math.imul(y2, W) | 0, r3 = (r3 = r3 + Math.imul(y2, j) | 0) + Math.imul(w2, W) | 0, o3 = o3 + Math.imul(w2, j) | 0, n3 = n3 + Math.imul(C2, X) | 0, r3 = (r3 = r3 + Math.imul(C2, Z) | 0) + Math.imul(p2, X) | 0, o3 = o3 + Math.imul(p2, Z) | 0, n3 = n3 + Math.imul(B2, $) | 0, r3 = (r3 = r3 + Math.imul(B2, ee) | 0) + Math.imul(Q2, $) | 0, o3 = o3 + Math.imul(Q2, ee) | 0, n3 = n3 + Math.imul(h2, Ae) | 0, r3 = (r3 = r3 + Math.imul(h2, ne) | 0) + Math.imul(d2, Ae) | 0, o3 = o3 + Math.imul(d2, ne) | 0;
        var me = (c2 + (n3 = n3 + Math.imul(u2, oe) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, se) | 0) + Math.imul(g2, oe) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, se) | 0) + (r3 >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n3 = Math.imul(F, G), r3 = (r3 = Math.imul(F, P)) + Math.imul(v, G) | 0, o3 = Math.imul(v, P), n3 = n3 + Math.imul(D, x) | 0, r3 = (r3 = r3 + Math.imul(D, H) | 0) + Math.imul(S, x) | 0, o3 = o3 + Math.imul(S, H) | 0, n3 = n3 + Math.imul(b, W) | 0, r3 = (r3 = r3 + Math.imul(b, j) | 0) + Math.imul(N, W) | 0, o3 = o3 + Math.imul(N, j) | 0, n3 = n3 + Math.imul(y2, X) | 0, r3 = (r3 = r3 + Math.imul(y2, Z) | 0) + Math.imul(w2, X) | 0, o3 = o3 + Math.imul(w2, Z) | 0, n3 = n3 + Math.imul(C2, $) | 0, r3 = (r3 = r3 + Math.imul(C2, ee) | 0) + Math.imul(p2, $) | 0, o3 = o3 + Math.imul(p2, ee) | 0, n3 = n3 + Math.imul(B2, Ae) | 0, r3 = (r3 = r3 + Math.imul(B2, ne) | 0) + Math.imul(Q2, Ae) | 0, o3 = o3 + Math.imul(Q2, ne) | 0, n3 = n3 + Math.imul(h2, oe) | 0, r3 = (r3 = r3 + Math.imul(h2, se) | 0) + Math.imul(d2, oe) | 0, o3 = o3 + Math.imul(d2, se) | 0;
        var ye = (c2 + (n3 = n3 + Math.imul(u2, ae) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, ce) | 0) + Math.imul(g2, ae) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, ce) | 0) + (r3 >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n3 = Math.imul(U, G), r3 = (r3 = Math.imul(U, P)) + Math.imul(L, G) | 0, o3 = Math.imul(L, P), n3 = n3 + Math.imul(F, x) | 0, r3 = (r3 = r3 + Math.imul(F, H) | 0) + Math.imul(v, x) | 0, o3 = o3 + Math.imul(v, H) | 0, n3 = n3 + Math.imul(D, W) | 0, r3 = (r3 = r3 + Math.imul(D, j) | 0) + Math.imul(S, W) | 0, o3 = o3 + Math.imul(S, j) | 0, n3 = n3 + Math.imul(b, X) | 0, r3 = (r3 = r3 + Math.imul(b, Z) | 0) + Math.imul(N, X) | 0, o3 = o3 + Math.imul(N, Z) | 0, n3 = n3 + Math.imul(y2, $) | 0, r3 = (r3 = r3 + Math.imul(y2, ee) | 0) + Math.imul(w2, $) | 0, o3 = o3 + Math.imul(w2, ee) | 0, n3 = n3 + Math.imul(C2, Ae) | 0, r3 = (r3 = r3 + Math.imul(C2, ne) | 0) + Math.imul(p2, Ae) | 0, o3 = o3 + Math.imul(p2, ne) | 0, n3 = n3 + Math.imul(B2, oe) | 0, r3 = (r3 = r3 + Math.imul(B2, se) | 0) + Math.imul(Q2, oe) | 0, o3 = o3 + Math.imul(Q2, se) | 0, n3 = n3 + Math.imul(h2, ae) | 0, r3 = (r3 = r3 + Math.imul(h2, ce) | 0) + Math.imul(d2, ae) | 0, o3 = o3 + Math.imul(d2, ce) | 0;
        var we = (c2 + (n3 = n3 + Math.imul(u2, ue) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, ge) | 0) + Math.imul(g2, ue) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, ge) | 0) + (r3 >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n3 = Math.imul(J, G), r3 = (r3 = Math.imul(J, P)) + Math.imul(O, G) | 0, o3 = Math.imul(O, P), n3 = n3 + Math.imul(U, x) | 0, r3 = (r3 = r3 + Math.imul(U, H) | 0) + Math.imul(L, x) | 0, o3 = o3 + Math.imul(L, H) | 0, n3 = n3 + Math.imul(F, W) | 0, r3 = (r3 = r3 + Math.imul(F, j) | 0) + Math.imul(v, W) | 0, o3 = o3 + Math.imul(v, j) | 0, n3 = n3 + Math.imul(D, X) | 0, r3 = (r3 = r3 + Math.imul(D, Z) | 0) + Math.imul(S, X) | 0, o3 = o3 + Math.imul(S, Z) | 0, n3 = n3 + Math.imul(b, $) | 0, r3 = (r3 = r3 + Math.imul(b, ee) | 0) + Math.imul(N, $) | 0, o3 = o3 + Math.imul(N, ee) | 0, n3 = n3 + Math.imul(y2, Ae) | 0, r3 = (r3 = r3 + Math.imul(y2, ne) | 0) + Math.imul(w2, Ae) | 0, o3 = o3 + Math.imul(w2, ne) | 0, n3 = n3 + Math.imul(C2, oe) | 0, r3 = (r3 = r3 + Math.imul(C2, se) | 0) + Math.imul(p2, oe) | 0, o3 = o3 + Math.imul(p2, se) | 0, n3 = n3 + Math.imul(B2, ae) | 0, r3 = (r3 = r3 + Math.imul(B2, ce) | 0) + Math.imul(Q2, ae) | 0, o3 = o3 + Math.imul(Q2, ce) | 0, n3 = n3 + Math.imul(h2, ue) | 0, r3 = (r3 = r3 + Math.imul(h2, ge) | 0) + Math.imul(d2, ue) | 0, o3 = o3 + Math.imul(d2, ge) | 0;
        var ke = (c2 + (n3 = n3 + Math.imul(u2, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(u2, de) | 0) + Math.imul(g2, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(g2, de) | 0) + (r3 >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n3 = Math.imul(J, x), r3 = (r3 = Math.imul(J, H)) + Math.imul(O, x) | 0, o3 = Math.imul(O, H), n3 = n3 + Math.imul(U, W) | 0, r3 = (r3 = r3 + Math.imul(U, j) | 0) + Math.imul(L, W) | 0, o3 = o3 + Math.imul(L, j) | 0, n3 = n3 + Math.imul(F, X) | 0, r3 = (r3 = r3 + Math.imul(F, Z) | 0) + Math.imul(v, X) | 0, o3 = o3 + Math.imul(v, Z) | 0, n3 = n3 + Math.imul(D, $) | 0, r3 = (r3 = r3 + Math.imul(D, ee) | 0) + Math.imul(S, $) | 0, o3 = o3 + Math.imul(S, ee) | 0, n3 = n3 + Math.imul(b, Ae) | 0, r3 = (r3 = r3 + Math.imul(b, ne) | 0) + Math.imul(N, Ae) | 0, o3 = o3 + Math.imul(N, ne) | 0, n3 = n3 + Math.imul(y2, oe) | 0, r3 = (r3 = r3 + Math.imul(y2, se) | 0) + Math.imul(w2, oe) | 0, o3 = o3 + Math.imul(w2, se) | 0, n3 = n3 + Math.imul(C2, ae) | 0, r3 = (r3 = r3 + Math.imul(C2, ce) | 0) + Math.imul(p2, ae) | 0, o3 = o3 + Math.imul(p2, ce) | 0, n3 = n3 + Math.imul(B2, ue) | 0, r3 = (r3 = r3 + Math.imul(B2, ge) | 0) + Math.imul(Q2, ue) | 0, o3 = o3 + Math.imul(Q2, ge) | 0;
        var be = (c2 + (n3 = n3 + Math.imul(h2, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(h2, de) | 0) + Math.imul(d2, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(d2, de) | 0) + (r3 >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n3 = Math.imul(J, W), r3 = (r3 = Math.imul(J, j)) + Math.imul(O, W) | 0, o3 = Math.imul(O, j), n3 = n3 + Math.imul(U, X) | 0, r3 = (r3 = r3 + Math.imul(U, Z) | 0) + Math.imul(L, X) | 0, o3 = o3 + Math.imul(L, Z) | 0, n3 = n3 + Math.imul(F, $) | 0, r3 = (r3 = r3 + Math.imul(F, ee) | 0) + Math.imul(v, $) | 0, o3 = o3 + Math.imul(v, ee) | 0, n3 = n3 + Math.imul(D, Ae) | 0, r3 = (r3 = r3 + Math.imul(D, ne) | 0) + Math.imul(S, Ae) | 0, o3 = o3 + Math.imul(S, ne) | 0, n3 = n3 + Math.imul(b, oe) | 0, r3 = (r3 = r3 + Math.imul(b, se) | 0) + Math.imul(N, oe) | 0, o3 = o3 + Math.imul(N, se) | 0, n3 = n3 + Math.imul(y2, ae) | 0, r3 = (r3 = r3 + Math.imul(y2, ce) | 0) + Math.imul(w2, ae) | 0, o3 = o3 + Math.imul(w2, ce) | 0, n3 = n3 + Math.imul(C2, ue) | 0, r3 = (r3 = r3 + Math.imul(C2, ge) | 0) + Math.imul(p2, ue) | 0, o3 = o3 + Math.imul(p2, ge) | 0;
        var Ne = (c2 + (n3 = n3 + Math.imul(B2, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(B2, de) | 0) + Math.imul(Q2, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(Q2, de) | 0) + (r3 >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n3 = Math.imul(J, X), r3 = (r3 = Math.imul(J, Z)) + Math.imul(O, X) | 0, o3 = Math.imul(O, Z), n3 = n3 + Math.imul(U, $) | 0, r3 = (r3 = r3 + Math.imul(U, ee) | 0) + Math.imul(L, $) | 0, o3 = o3 + Math.imul(L, ee) | 0, n3 = n3 + Math.imul(F, Ae) | 0, r3 = (r3 = r3 + Math.imul(F, ne) | 0) + Math.imul(v, Ae) | 0, o3 = o3 + Math.imul(v, ne) | 0, n3 = n3 + Math.imul(D, oe) | 0, r3 = (r3 = r3 + Math.imul(D, se) | 0) + Math.imul(S, oe) | 0, o3 = o3 + Math.imul(S, se) | 0, n3 = n3 + Math.imul(b, ae) | 0, r3 = (r3 = r3 + Math.imul(b, ce) | 0) + Math.imul(N, ae) | 0, o3 = o3 + Math.imul(N, ce) | 0, n3 = n3 + Math.imul(y2, ue) | 0, r3 = (r3 = r3 + Math.imul(y2, ge) | 0) + Math.imul(w2, ue) | 0, o3 = o3 + Math.imul(w2, ge) | 0;
        var Te = (c2 + (n3 = n3 + Math.imul(C2, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(C2, de) | 0) + Math.imul(p2, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(p2, de) | 0) + (r3 >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n3 = Math.imul(J, $), r3 = (r3 = Math.imul(J, ee)) + Math.imul(O, $) | 0, o3 = Math.imul(O, ee), n3 = n3 + Math.imul(U, Ae) | 0, r3 = (r3 = r3 + Math.imul(U, ne) | 0) + Math.imul(L, Ae) | 0, o3 = o3 + Math.imul(L, ne) | 0, n3 = n3 + Math.imul(F, oe) | 0, r3 = (r3 = r3 + Math.imul(F, se) | 0) + Math.imul(v, oe) | 0, o3 = o3 + Math.imul(v, se) | 0, n3 = n3 + Math.imul(D, ae) | 0, r3 = (r3 = r3 + Math.imul(D, ce) | 0) + Math.imul(S, ae) | 0, o3 = o3 + Math.imul(S, ce) | 0, n3 = n3 + Math.imul(b, ue) | 0, r3 = (r3 = r3 + Math.imul(b, ge) | 0) + Math.imul(N, ue) | 0, o3 = o3 + Math.imul(N, ge) | 0;
        var De = (c2 + (n3 = n3 + Math.imul(y2, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(y2, de) | 0) + Math.imul(w2, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(w2, de) | 0) + (r3 >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, n3 = Math.imul(J, Ae), r3 = (r3 = Math.imul(J, ne)) + Math.imul(O, Ae) | 0, o3 = Math.imul(O, ne), n3 = n3 + Math.imul(U, oe) | 0, r3 = (r3 = r3 + Math.imul(U, se) | 0) + Math.imul(L, oe) | 0, o3 = o3 + Math.imul(L, se) | 0, n3 = n3 + Math.imul(F, ae) | 0, r3 = (r3 = r3 + Math.imul(F, ce) | 0) + Math.imul(v, ae) | 0, o3 = o3 + Math.imul(v, ce) | 0, n3 = n3 + Math.imul(D, ue) | 0, r3 = (r3 = r3 + Math.imul(D, ge) | 0) + Math.imul(S, ue) | 0, o3 = o3 + Math.imul(S, ge) | 0;
        var Se = (c2 + (n3 = n3 + Math.imul(b, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(b, de) | 0) + Math.imul(N, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(N, de) | 0) + (r3 >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n3 = Math.imul(J, oe), r3 = (r3 = Math.imul(J, se)) + Math.imul(O, oe) | 0, o3 = Math.imul(O, se), n3 = n3 + Math.imul(U, ae) | 0, r3 = (r3 = r3 + Math.imul(U, ce) | 0) + Math.imul(L, ae) | 0, o3 = o3 + Math.imul(L, ce) | 0, n3 = n3 + Math.imul(F, ue) | 0, r3 = (r3 = r3 + Math.imul(F, ge) | 0) + Math.imul(v, ue) | 0, o3 = o3 + Math.imul(v, ge) | 0;
        var Re = (c2 + (n3 = n3 + Math.imul(D, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(D, de) | 0) + Math.imul(S, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(S, de) | 0) + (r3 >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n3 = Math.imul(J, ae), r3 = (r3 = Math.imul(J, ce)) + Math.imul(O, ae) | 0, o3 = Math.imul(O, ce), n3 = n3 + Math.imul(U, ue) | 0, r3 = (r3 = r3 + Math.imul(U, ge) | 0) + Math.imul(L, ue) | 0, o3 = o3 + Math.imul(L, ge) | 0;
        var Fe = (c2 + (n3 = n3 + Math.imul(F, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(F, de) | 0) + Math.imul(v, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(v, de) | 0) + (r3 >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, n3 = Math.imul(J, ue), r3 = (r3 = Math.imul(J, ge)) + Math.imul(O, ue) | 0, o3 = Math.imul(O, ge);
        var ve = (c2 + (n3 = n3 + Math.imul(U, he) | 0) | 0) + ((8191 & (r3 = (r3 = r3 + Math.imul(U, de) | 0) + Math.imul(L, he) | 0)) << 13) | 0;
        c2 = ((o3 = o3 + Math.imul(L, de) | 0) + (r3 >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863;
        var Me = (c2 + (n3 = Math.imul(J, he)) | 0) + ((8191 & (r3 = (r3 = Math.imul(J, de)) + Math.imul(O, he) | 0)) << 13) | 0;
        return c2 = ((o3 = Math.imul(O, de)) + (r3 >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, a2[0] = Ie, a2[1] = Be, a2[2] = Qe, a2[3] = fe, a2[4] = Ce, a2[5] = pe, a2[6] = me, a2[7] = ye, a2[8] = we, a2[9] = ke, a2[10] = be, a2[11] = Ne, a2[12] = Te, a2[13] = De, a2[14] = Se, a2[15] = Re, a2[16] = Fe, a2[17] = ve, a2[18] = Me, 0 !== c2 && (a2[19] = c2, A3.length++), A3;
      };
      function d(e4, t4, A3) {
        return new I().mulp(e4, t4, A3);
      }
      function I(e4, t4) {
        this.x = e4, this.y = t4;
      }
      Math.imul || (h = E), o2.prototype.mulTo = function(e4, t4) {
        var A3, n3 = this.length + e4.length;
        return A3 = 10 === this.length && 10 === e4.length ? h(this, e4, t4) : n3 < 63 ? E(this, e4, t4) : n3 < 1024 ? (function(e5, t5, A4) {
          A4.negative = t5.negative ^ e5.negative, A4.length = e5.length + t5.length;
          for (var n4 = 0, r3 = 0, o3 = 0; o3 < A4.length - 1; o3++) {
            var s2 = r3;
            r3 = 0;
            for (var i2 = 67108863 & n4, a2 = Math.min(o3, t5.length - 1), c2 = Math.max(0, o3 - e5.length + 1); c2 <= a2; c2++) {
              var l2 = o3 - c2, u2 = (0 | e5.words[l2]) * (0 | t5.words[c2]), g2 = 67108863 & u2;
              i2 = 67108863 & (g2 = g2 + i2 | 0), r3 += (s2 = (s2 = s2 + (u2 / 67108864 | 0) | 0) + (g2 >>> 26) | 0) >>> 26, s2 &= 67108863;
            }
            A4.words[o3] = i2, n4 = s2, s2 = r3;
          }
          return 0 !== n4 ? A4.words[o3] = n4 : A4.length--, A4.strip();
        })(this, e4, t4) : d(this, e4, t4), A3;
      }, I.prototype.makeRBT = function(e4) {
        for (var t4 = new Array(e4), A3 = o2.prototype._countBits(e4) - 1, n3 = 0; n3 < e4; n3++) t4[n3] = this.revBin(n3, A3, e4);
        return t4;
      }, I.prototype.revBin = function(e4, t4, A3) {
        if (0 === e4 || e4 === A3 - 1) return e4;
        for (var n3 = 0, r3 = 0; r3 < t4; r3++) n3 |= (1 & e4) << t4 - r3 - 1, e4 >>= 1;
        return n3;
      }, I.prototype.permute = function(e4, t4, A3, n3, r3, o3) {
        for (var s2 = 0; s2 < o3; s2++) n3[s2] = t4[e4[s2]], r3[s2] = A3[e4[s2]];
      }, I.prototype.transform = function(e4, t4, A3, n3, r3, o3) {
        this.permute(o3, e4, t4, A3, n3, r3);
        for (var s2 = 1; s2 < r3; s2 <<= 1) for (var i2 = s2 << 1, a2 = Math.cos(2 * Math.PI / i2), c2 = Math.sin(2 * Math.PI / i2), l2 = 0; l2 < r3; l2 += i2) for (var u2 = a2, g2 = c2, E2 = 0; E2 < s2; E2++) {
          var h2 = A3[l2 + E2], d2 = n3[l2 + E2], I2 = A3[l2 + E2 + s2], B2 = n3[l2 + E2 + s2], Q2 = u2 * I2 - g2 * B2;
          B2 = u2 * B2 + g2 * I2, I2 = Q2, A3[l2 + E2] = h2 + I2, n3[l2 + E2] = d2 + B2, A3[l2 + E2 + s2] = h2 - I2, n3[l2 + E2 + s2] = d2 - B2, E2 !== i2 && (Q2 = a2 * u2 - c2 * g2, g2 = a2 * g2 + c2 * u2, u2 = Q2);
        }
      }, I.prototype.guessLen13b = function(e4, t4) {
        var A3 = 1 | Math.max(t4, e4), n3 = 1 & A3, r3 = 0;
        for (A3 = A3 / 2 | 0; A3; A3 >>>= 1) r3++;
        return 1 << r3 + 1 + n3;
      }, I.prototype.conjugate = function(e4, t4, A3) {
        if (!(A3 <= 1)) for (var n3 = 0; n3 < A3 / 2; n3++) {
          var r3 = e4[n3];
          e4[n3] = e4[A3 - n3 - 1], e4[A3 - n3 - 1] = r3, r3 = t4[n3], t4[n3] = -t4[A3 - n3 - 1], t4[A3 - n3 - 1] = -r3;
        }
      }, I.prototype.normalize13b = function(e4, t4) {
        for (var A3 = 0, n3 = 0; n3 < t4 / 2; n3++) {
          var r3 = 8192 * Math.round(e4[2 * n3 + 1] / t4) + Math.round(e4[2 * n3] / t4) + A3;
          e4[n3] = 67108863 & r3, A3 = r3 < 67108864 ? 0 : r3 / 67108864 | 0;
        }
        return e4;
      }, I.prototype.convert13b = function(e4, t4, A3, r3) {
        for (var o3 = 0, s2 = 0; s2 < t4; s2++) o3 += 0 | e4[s2], A3[2 * s2] = 8191 & o3, o3 >>>= 13, A3[2 * s2 + 1] = 8191 & o3, o3 >>>= 13;
        for (s2 = 2 * t4; s2 < r3; ++s2) A3[s2] = 0;
        n2(0 === o3), n2(!(-8192 & o3));
      }, I.prototype.stub = function(e4) {
        for (var t4 = new Array(e4), A3 = 0; A3 < e4; A3++) t4[A3] = 0;
        return t4;
      }, I.prototype.mulp = function(e4, t4, A3) {
        var n3 = 2 * this.guessLen13b(e4.length, t4.length), r3 = this.makeRBT(n3), o3 = this.stub(n3), s2 = new Array(n3), i2 = new Array(n3), a2 = new Array(n3), c2 = new Array(n3), l2 = new Array(n3), u2 = new Array(n3), g2 = A3.words;
        g2.length = n3, this.convert13b(e4.words, e4.length, s2, n3), this.convert13b(t4.words, t4.length, c2, n3), this.transform(s2, o3, i2, a2, n3, r3), this.transform(c2, o3, l2, u2, n3, r3);
        for (var E2 = 0; E2 < n3; E2++) {
          var h2 = i2[E2] * l2[E2] - a2[E2] * u2[E2];
          a2[E2] = i2[E2] * u2[E2] + a2[E2] * l2[E2], i2[E2] = h2;
        }
        return this.conjugate(i2, a2, n3), this.transform(i2, a2, g2, o3, n3, r3), this.conjugate(g2, o3, n3), this.normalize13b(g2, n3), A3.negative = e4.negative ^ t4.negative, A3.length = e4.length + t4.length, A3.strip();
      }, o2.prototype.mul = function(e4) {
        var t4 = new o2(null);
        return t4.words = new Array(this.length + e4.length), this.mulTo(e4, t4);
      }, o2.prototype.mulf = function(e4) {
        var t4 = new o2(null);
        return t4.words = new Array(this.length + e4.length), d(this, e4, t4);
      }, o2.prototype.imul = function(e4) {
        return this.clone().mulTo(e4, this);
      }, o2.prototype.imuln = function(e4) {
        n2("number" == typeof e4), n2(e4 < 67108864);
        for (var t4 = 0, A3 = 0; A3 < this.length; A3++) {
          var r3 = (0 | this.words[A3]) * e4, o3 = (67108863 & r3) + (67108863 & t4);
          t4 >>= 26, t4 += r3 / 67108864 | 0, t4 += o3 >>> 26, this.words[A3] = 67108863 & o3;
        }
        return 0 !== t4 && (this.words[A3] = t4, this.length++), this.length = 0 === e4 ? 1 : this.length, this;
      }, o2.prototype.muln = function(e4) {
        return this.clone().imuln(e4);
      }, o2.prototype.sqr = function() {
        return this.mul(this);
      }, o2.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o2.prototype.pow = function(e4) {
        var t4 = (function(e5) {
          for (var t5 = new Array(e5.bitLength()), A4 = 0; A4 < t5.length; A4++) {
            var n4 = A4 / 26 | 0, r4 = A4 % 26;
            t5[A4] = (e5.words[n4] & 1 << r4) >>> r4;
          }
          return t5;
        })(e4);
        if (0 === t4.length) return new o2(1);
        for (var A3 = this, n3 = 0; n3 < t4.length && 0 === t4[n3]; n3++, A3 = A3.sqr()) ;
        if (++n3 < t4.length) for (var r3 = A3.sqr(); n3 < t4.length; n3++, r3 = r3.sqr()) 0 !== t4[n3] && (A3 = A3.mul(r3));
        return A3;
      }, o2.prototype.iushln = function(e4) {
        n2("number" == typeof e4 && e4 >= 0);
        var t4, A3 = e4 % 26, r3 = (e4 - A3) / 26, o3 = 67108863 >>> 26 - A3 << 26 - A3;
        if (0 !== A3) {
          var s2 = 0;
          for (t4 = 0; t4 < this.length; t4++) {
            var i2 = this.words[t4] & o3, a2 = (0 | this.words[t4]) - i2 << A3;
            this.words[t4] = a2 | s2, s2 = i2 >>> 26 - A3;
          }
          s2 && (this.words[t4] = s2, this.length++);
        }
        if (0 !== r3) {
          for (t4 = this.length - 1; t4 >= 0; t4--) this.words[t4 + r3] = this.words[t4];
          for (t4 = 0; t4 < r3; t4++) this.words[t4] = 0;
          this.length += r3;
        }
        return this.strip();
      }, o2.prototype.ishln = function(e4) {
        return n2(0 === this.negative), this.iushln(e4);
      }, o2.prototype.iushrn = function(e4, t4, A3) {
        var r3;
        n2("number" == typeof e4 && e4 >= 0), r3 = t4 ? (t4 - t4 % 26) / 26 : 0;
        var o3 = e4 % 26, s2 = Math.min((e4 - o3) / 26, this.length), i2 = 67108863 ^ 67108863 >>> o3 << o3, a2 = A3;
        if (r3 -= s2, r3 = Math.max(0, r3), a2) {
          for (var c2 = 0; c2 < s2; c2++) a2.words[c2] = this.words[c2];
          a2.length = s2;
        }
        if (0 === s2) ;
        else if (this.length > s2) for (this.length -= s2, c2 = 0; c2 < this.length; c2++) this.words[c2] = this.words[c2 + s2];
        else this.words[0] = 0, this.length = 1;
        var l2 = 0;
        for (c2 = this.length - 1; c2 >= 0 && (0 !== l2 || c2 >= r3); c2--) {
          var u2 = 0 | this.words[c2];
          this.words[c2] = l2 << 26 - o3 | u2 >>> o3, l2 = u2 & i2;
        }
        return a2 && 0 !== l2 && (a2.words[a2.length++] = l2), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o2.prototype.ishrn = function(e4, t4, A3) {
        return n2(0 === this.negative), this.iushrn(e4, t4, A3);
      }, o2.prototype.shln = function(e4) {
        return this.clone().ishln(e4);
      }, o2.prototype.ushln = function(e4) {
        return this.clone().iushln(e4);
      }, o2.prototype.shrn = function(e4) {
        return this.clone().ishrn(e4);
      }, o2.prototype.ushrn = function(e4) {
        return this.clone().iushrn(e4);
      }, o2.prototype.testn = function(e4) {
        n2("number" == typeof e4 && e4 >= 0);
        var t4 = e4 % 26, A3 = (e4 - t4) / 26, r3 = 1 << t4;
        return !(this.length <= A3) && !!(this.words[A3] & r3);
      }, o2.prototype.imaskn = function(e4) {
        n2("number" == typeof e4 && e4 >= 0);
        var t4 = e4 % 26, A3 = (e4 - t4) / 26;
        if (n2(0 === this.negative, "imaskn works only with positive numbers"), this.length <= A3) return this;
        if (0 !== t4 && A3++, this.length = Math.min(A3, this.length), 0 !== t4) {
          var r3 = 67108863 ^ 67108863 >>> t4 << t4;
          this.words[this.length - 1] &= r3;
        }
        return this.strip();
      }, o2.prototype.maskn = function(e4) {
        return this.clone().imaskn(e4);
      }, o2.prototype.iaddn = function(e4) {
        return n2("number" == typeof e4), n2(e4 < 67108864), e4 < 0 ? this.isubn(-e4) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e4 ? (this.words[0] = e4 - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e4), this.negative = 1, this) : this._iaddn(e4);
      }, o2.prototype._iaddn = function(e4) {
        this.words[0] += e4;
        for (var t4 = 0; t4 < this.length && this.words[t4] >= 67108864; t4++) this.words[t4] -= 67108864, t4 === this.length - 1 ? this.words[t4 + 1] = 1 : this.words[t4 + 1]++;
        return this.length = Math.max(this.length, t4 + 1), this;
      }, o2.prototype.isubn = function(e4) {
        if (n2("number" == typeof e4), n2(e4 < 67108864), e4 < 0) return this.iaddn(-e4);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(e4), this.negative = 1, this;
        if (this.words[0] -= e4, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else for (var t4 = 0; t4 < this.length && this.words[t4] < 0; t4++) this.words[t4] += 67108864, this.words[t4 + 1] -= 1;
        return this.strip();
      }, o2.prototype.addn = function(e4) {
        return this.clone().iaddn(e4);
      }, o2.prototype.subn = function(e4) {
        return this.clone().isubn(e4);
      }, o2.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o2.prototype.abs = function() {
        return this.clone().iabs();
      }, o2.prototype._ishlnsubmul = function(e4, t4, A3) {
        var r3, o3, s2 = e4.length + A3;
        this._expand(s2);
        var i2 = 0;
        for (r3 = 0; r3 < e4.length; r3++) {
          o3 = (0 | this.words[r3 + A3]) + i2;
          var a2 = (0 | e4.words[r3]) * t4;
          i2 = ((o3 -= 67108863 & a2) >> 26) - (a2 / 67108864 | 0), this.words[r3 + A3] = 67108863 & o3;
        }
        for (; r3 < this.length - A3; r3++) i2 = (o3 = (0 | this.words[r3 + A3]) + i2) >> 26, this.words[r3 + A3] = 67108863 & o3;
        if (0 === i2) return this.strip();
        for (n2(-1 === i2), i2 = 0, r3 = 0; r3 < this.length; r3++) i2 = (o3 = -(0 | this.words[r3]) + i2) >> 26, this.words[r3] = 67108863 & o3;
        return this.negative = 1, this.strip();
      }, o2.prototype._wordDiv = function(e4, t4) {
        var A3 = (this.length, e4.length), n3 = this.clone(), r3 = e4, s2 = 0 | r3.words[r3.length - 1];
        0 !== (A3 = 26 - this._countBits(s2)) && (r3 = r3.ushln(A3), n3.iushln(A3), s2 = 0 | r3.words[r3.length - 1]);
        var i2, a2 = n3.length - r3.length;
        if ("mod" !== t4) {
          (i2 = new o2(null)).length = a2 + 1, i2.words = new Array(i2.length);
          for (var c2 = 0; c2 < i2.length; c2++) i2.words[c2] = 0;
        }
        var l2 = n3.clone()._ishlnsubmul(r3, 1, a2);
        0 === l2.negative && (n3 = l2, i2 && (i2.words[a2] = 1));
        for (var u2 = a2 - 1; u2 >= 0; u2--) {
          var g2 = 67108864 * (0 | n3.words[r3.length + u2]) + (0 | n3.words[r3.length + u2 - 1]);
          for (g2 = Math.min(g2 / s2 | 0, 67108863), n3._ishlnsubmul(r3, g2, u2); 0 !== n3.negative; ) g2--, n3.negative = 0, n3._ishlnsubmul(r3, 1, u2), n3.isZero() || (n3.negative ^= 1);
          i2 && (i2.words[u2] = g2);
        }
        return i2 && i2.strip(), n3.strip(), "div" !== t4 && 0 !== A3 && n3.iushrn(A3), { div: i2 || null, mod: n3 };
      }, o2.prototype.divmod = function(e4, t4, A3) {
        return n2(!e4.isZero()), this.isZero() ? { div: new o2(0), mod: new o2(0) } : 0 !== this.negative && 0 === e4.negative ? (i2 = this.neg().divmod(e4, t4), "mod" !== t4 && (r3 = i2.div.neg()), "div" !== t4 && (s2 = i2.mod.neg(), A3 && 0 !== s2.negative && s2.iadd(e4)), { div: r3, mod: s2 }) : 0 === this.negative && 0 !== e4.negative ? (i2 = this.divmod(e4.neg(), t4), "mod" !== t4 && (r3 = i2.div.neg()), { div: r3, mod: i2.mod }) : 0 !== (this.negative & e4.negative) ? (i2 = this.neg().divmod(e4.neg(), t4), "div" !== t4 && (s2 = i2.mod.neg(), A3 && 0 !== s2.negative && s2.isub(e4)), { div: i2.div, mod: s2 }) : e4.length > this.length || this.cmp(e4) < 0 ? { div: new o2(0), mod: this } : 1 === e4.length ? "div" === t4 ? { div: this.divn(e4.words[0]), mod: null } : "mod" === t4 ? { div: null, mod: new o2(this.modn(e4.words[0])) } : { div: this.divn(e4.words[0]), mod: new o2(this.modn(e4.words[0])) } : this._wordDiv(e4, t4);
        var r3, s2, i2;
      }, o2.prototype.div = function(e4) {
        return this.divmod(e4, "div", false).div;
      }, o2.prototype.mod = function(e4) {
        return this.divmod(e4, "mod", false).mod;
      }, o2.prototype.umod = function(e4) {
        return this.divmod(e4, "mod", true).mod;
      }, o2.prototype.divRound = function(e4) {
        var t4 = this.divmod(e4);
        if (t4.mod.isZero()) return t4.div;
        var A3 = 0 !== t4.div.negative ? t4.mod.isub(e4) : t4.mod, n3 = e4.ushrn(1), r3 = e4.andln(1), o3 = A3.cmp(n3);
        return o3 < 0 || 1 === r3 && 0 === o3 ? t4.div : 0 !== t4.div.negative ? t4.div.isubn(1) : t4.div.iaddn(1);
      }, o2.prototype.modn = function(e4) {
        n2(e4 <= 67108863);
        for (var t4 = (1 << 26) % e4, A3 = 0, r3 = this.length - 1; r3 >= 0; r3--) A3 = (t4 * A3 + (0 | this.words[r3])) % e4;
        return A3;
      }, o2.prototype.idivn = function(e4) {
        n2(e4 <= 67108863);
        for (var t4 = 0, A3 = this.length - 1; A3 >= 0; A3--) {
          var r3 = (0 | this.words[A3]) + 67108864 * t4;
          this.words[A3] = r3 / e4 | 0, t4 = r3 % e4;
        }
        return this.strip();
      }, o2.prototype.divn = function(e4) {
        return this.clone().idivn(e4);
      }, o2.prototype.egcd = function(e4) {
        n2(0 === e4.negative), n2(!e4.isZero());
        var t4 = this, A3 = e4.clone();
        t4 = 0 !== t4.negative ? t4.umod(e4) : t4.clone();
        for (var r3 = new o2(1), s2 = new o2(0), i2 = new o2(0), a2 = new o2(1), c2 = 0; t4.isEven() && A3.isEven(); ) t4.iushrn(1), A3.iushrn(1), ++c2;
        for (var l2 = A3.clone(), u2 = t4.clone(); !t4.isZero(); ) {
          for (var g2 = 0, E2 = 1; 0 === (t4.words[0] & E2) && g2 < 26; ++g2, E2 <<= 1) ;
          if (g2 > 0) for (t4.iushrn(g2); g2-- > 0; ) (r3.isOdd() || s2.isOdd()) && (r3.iadd(l2), s2.isub(u2)), r3.iushrn(1), s2.iushrn(1);
          for (var h2 = 0, d2 = 1; 0 === (A3.words[0] & d2) && h2 < 26; ++h2, d2 <<= 1) ;
          if (h2 > 0) for (A3.iushrn(h2); h2-- > 0; ) (i2.isOdd() || a2.isOdd()) && (i2.iadd(l2), a2.isub(u2)), i2.iushrn(1), a2.iushrn(1);
          t4.cmp(A3) >= 0 ? (t4.isub(A3), r3.isub(i2), s2.isub(a2)) : (A3.isub(t4), i2.isub(r3), a2.isub(s2));
        }
        return { a: i2, b: a2, gcd: A3.iushln(c2) };
      }, o2.prototype._invmp = function(e4) {
        n2(0 === e4.negative), n2(!e4.isZero());
        var t4 = this, A3 = e4.clone();
        t4 = 0 !== t4.negative ? t4.umod(e4) : t4.clone();
        for (var r3, s2 = new o2(1), i2 = new o2(0), a2 = A3.clone(); t4.cmpn(1) > 0 && A3.cmpn(1) > 0; ) {
          for (var c2 = 0, l2 = 1; 0 === (t4.words[0] & l2) && c2 < 26; ++c2, l2 <<= 1) ;
          if (c2 > 0) for (t4.iushrn(c2); c2-- > 0; ) s2.isOdd() && s2.iadd(a2), s2.iushrn(1);
          for (var u2 = 0, g2 = 1; 0 === (A3.words[0] & g2) && u2 < 26; ++u2, g2 <<= 1) ;
          if (u2 > 0) for (A3.iushrn(u2); u2-- > 0; ) i2.isOdd() && i2.iadd(a2), i2.iushrn(1);
          t4.cmp(A3) >= 0 ? (t4.isub(A3), s2.isub(i2)) : (A3.isub(t4), i2.isub(s2));
        }
        return (r3 = 0 === t4.cmpn(1) ? s2 : i2).cmpn(0) < 0 && r3.iadd(e4), r3;
      }, o2.prototype.gcd = function(e4) {
        if (this.isZero()) return e4.abs();
        if (e4.isZero()) return this.abs();
        var t4 = this.clone(), A3 = e4.clone();
        t4.negative = 0, A3.negative = 0;
        for (var n3 = 0; t4.isEven() && A3.isEven(); n3++) t4.iushrn(1), A3.iushrn(1);
        for (; ; ) {
          for (; t4.isEven(); ) t4.iushrn(1);
          for (; A3.isEven(); ) A3.iushrn(1);
          var r3 = t4.cmp(A3);
          if (r3 < 0) {
            var o3 = t4;
            t4 = A3, A3 = o3;
          } else if (0 === r3 || 0 === A3.cmpn(1)) break;
          t4.isub(A3);
        }
        return A3.iushln(n3);
      }, o2.prototype.invm = function(e4) {
        return this.egcd(e4).a.umod(e4);
      }, o2.prototype.isEven = function() {
        return !(1 & this.words[0]);
      }, o2.prototype.isOdd = function() {
        return !(1 & ~this.words[0]);
      }, o2.prototype.andln = function(e4) {
        return this.words[0] & e4;
      }, o2.prototype.bincn = function(e4) {
        n2("number" == typeof e4);
        var t4 = e4 % 26, A3 = (e4 - t4) / 26, r3 = 1 << t4;
        if (this.length <= A3) return this._expand(A3 + 1), this.words[A3] |= r3, this;
        for (var o3 = r3, s2 = A3; 0 !== o3 && s2 < this.length; s2++) {
          var i2 = 0 | this.words[s2];
          o3 = (i2 += o3) >>> 26, i2 &= 67108863, this.words[s2] = i2;
        }
        return 0 !== o3 && (this.words[s2] = o3, this.length++), this;
      }, o2.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o2.prototype.cmpn = function(e4) {
        var t4, A3 = e4 < 0;
        if (0 !== this.negative && !A3) return -1;
        if (0 === this.negative && A3) return 1;
        if (this.strip(), this.length > 1) t4 = 1;
        else {
          A3 && (e4 = -e4), n2(e4 <= 67108863, "Number is too big");
          var r3 = 0 | this.words[0];
          t4 = r3 === e4 ? 0 : r3 < e4 ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -t4 : t4;
      }, o2.prototype.cmp = function(e4) {
        if (0 !== this.negative && 0 === e4.negative) return -1;
        if (0 === this.negative && 0 !== e4.negative) return 1;
        var t4 = this.ucmp(e4);
        return 0 !== this.negative ? 0 | -t4 : t4;
      }, o2.prototype.ucmp = function(e4) {
        if (this.length > e4.length) return 1;
        if (this.length < e4.length) return -1;
        for (var t4 = 0, A3 = this.length - 1; A3 >= 0; A3--) {
          var n3 = 0 | this.words[A3], r3 = 0 | e4.words[A3];
          if (n3 !== r3) {
            n3 < r3 ? t4 = -1 : n3 > r3 && (t4 = 1);
            break;
          }
        }
        return t4;
      }, o2.prototype.gtn = function(e4) {
        return 1 === this.cmpn(e4);
      }, o2.prototype.gt = function(e4) {
        return 1 === this.cmp(e4);
      }, o2.prototype.gten = function(e4) {
        return this.cmpn(e4) >= 0;
      }, o2.prototype.gte = function(e4) {
        return this.cmp(e4) >= 0;
      }, o2.prototype.ltn = function(e4) {
        return -1 === this.cmpn(e4);
      }, o2.prototype.lt = function(e4) {
        return -1 === this.cmp(e4);
      }, o2.prototype.lten = function(e4) {
        return this.cmpn(e4) <= 0;
      }, o2.prototype.lte = function(e4) {
        return this.cmp(e4) <= 0;
      }, o2.prototype.eqn = function(e4) {
        return 0 === this.cmpn(e4);
      }, o2.prototype.eq = function(e4) {
        return 0 === this.cmp(e4);
      }, o2.red = function(e4) {
        return new y(e4);
      }, o2.prototype.toRed = function(e4) {
        return n2(!this.red, "Already a number in reduction context"), n2(0 === this.negative, "red works only with positives"), e4.convertTo(this)._forceRed(e4);
      }, o2.prototype.fromRed = function() {
        return n2(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, o2.prototype._forceRed = function(e4) {
        return this.red = e4, this;
      }, o2.prototype.forceRed = function(e4) {
        return n2(!this.red, "Already a number in reduction context"), this._forceRed(e4);
      }, o2.prototype.redAdd = function(e4) {
        return n2(this.red, "redAdd works only with red numbers"), this.red.add(this, e4);
      }, o2.prototype.redIAdd = function(e4) {
        return n2(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e4);
      }, o2.prototype.redSub = function(e4) {
        return n2(this.red, "redSub works only with red numbers"), this.red.sub(this, e4);
      }, o2.prototype.redISub = function(e4) {
        return n2(this.red, "redISub works only with red numbers"), this.red.isub(this, e4);
      }, o2.prototype.redShl = function(e4) {
        return n2(this.red, "redShl works only with red numbers"), this.red.shl(this, e4);
      }, o2.prototype.redMul = function(e4) {
        return n2(this.red, "redMul works only with red numbers"), this.red._verify2(this, e4), this.red.mul(this, e4);
      }, o2.prototype.redIMul = function(e4) {
        return n2(this.red, "redMul works only with red numbers"), this.red._verify2(this, e4), this.red.imul(this, e4);
      }, o2.prototype.redSqr = function() {
        return n2(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, o2.prototype.redISqr = function() {
        return n2(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, o2.prototype.redSqrt = function() {
        return n2(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, o2.prototype.redInvm = function() {
        return n2(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, o2.prototype.redNeg = function() {
        return n2(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, o2.prototype.redPow = function(e4) {
        return n2(this.red && !e4.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e4);
      };
      var B = { k256: null, p224: null, p192: null, p25519: null };
      function Q(e4, t4) {
        this.name = e4, this.p = new o2(t4, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function f() {
        Q.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      function C() {
        Q.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      function p() {
        Q.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      function m() {
        Q.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      function y(e4) {
        if ("string" == typeof e4) {
          var t4 = o2._prime(e4);
          this.m = t4.p, this.prime = t4;
        } else n2(e4.gtn(1), "modulus must be greater than 1"), this.m = e4, this.prime = null;
      }
      function w(e4) {
        y.call(this, e4), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      Q.prototype._tmp = function() {
        var e4 = new o2(null);
        return e4.words = new Array(Math.ceil(this.n / 13)), e4;
      }, Q.prototype.ireduce = function(e4) {
        var t4, A3 = e4;
        do {
          this.split(A3, this.tmp), t4 = (A3 = (A3 = this.imulK(A3)).iadd(this.tmp)).bitLength();
        } while (t4 > this.n);
        var n3 = t4 < this.n ? -1 : A3.ucmp(this.p);
        return 0 === n3 ? (A3.words[0] = 0, A3.length = 1) : n3 > 0 ? A3.isub(this.p) : void 0 !== A3.strip ? A3.strip() : A3._strip(), A3;
      }, Q.prototype.split = function(e4, t4) {
        e4.iushrn(this.n, 0, t4);
      }, Q.prototype.imulK = function(e4) {
        return e4.imul(this.k);
      }, r2(f, Q), f.prototype.split = function(e4, t4) {
        for (var A3 = 4194303, n3 = Math.min(e4.length, 9), r3 = 0; r3 < n3; r3++) t4.words[r3] = e4.words[r3];
        if (t4.length = n3, e4.length <= 9) return e4.words[0] = 0, void (e4.length = 1);
        var o3 = e4.words[9];
        for (t4.words[t4.length++] = o3 & A3, r3 = 10; r3 < e4.length; r3++) {
          var s2 = 0 | e4.words[r3];
          e4.words[r3 - 10] = (s2 & A3) << 4 | o3 >>> 22, o3 = s2;
        }
        o3 >>>= 22, e4.words[r3 - 10] = o3, 0 === o3 && e4.length > 10 ? e4.length -= 10 : e4.length -= 9;
      }, f.prototype.imulK = function(e4) {
        e4.words[e4.length] = 0, e4.words[e4.length + 1] = 0, e4.length += 2;
        for (var t4 = 0, A3 = 0; A3 < e4.length; A3++) {
          var n3 = 0 | e4.words[A3];
          t4 += 977 * n3, e4.words[A3] = 67108863 & t4, t4 = 64 * n3 + (t4 / 67108864 | 0);
        }
        return 0 === e4.words[e4.length - 1] && (e4.length--, 0 === e4.words[e4.length - 1] && e4.length--), e4;
      }, r2(C, Q), r2(p, Q), r2(m, Q), m.prototype.imulK = function(e4) {
        for (var t4 = 0, A3 = 0; A3 < e4.length; A3++) {
          var n3 = 19 * (0 | e4.words[A3]) + t4, r3 = 67108863 & n3;
          n3 >>>= 26, e4.words[A3] = r3, t4 = n3;
        }
        return 0 !== t4 && (e4.words[e4.length++] = t4), e4;
      }, o2._prime = function(e4) {
        if (B[e4]) return B[e4];
        var t4;
        if ("k256" === e4) t4 = new f();
        else if ("p224" === e4) t4 = new C();
        else if ("p192" === e4) t4 = new p();
        else {
          if ("p25519" !== e4) throw new Error("Unknown prime " + e4);
          t4 = new m();
        }
        return B[e4] = t4, t4;
      }, y.prototype._verify1 = function(e4) {
        n2(0 === e4.negative, "red works only with positives"), n2(e4.red, "red works only with red numbers");
      }, y.prototype._verify2 = function(e4, t4) {
        n2(0 === (e4.negative | t4.negative), "red works only with positives"), n2(e4.red && e4.red === t4.red, "red works only with red numbers");
      }, y.prototype.imod = function(e4) {
        return this.prime ? this.prime.ireduce(e4)._forceRed(this) : e4.umod(this.m)._forceRed(this);
      }, y.prototype.neg = function(e4) {
        return e4.isZero() ? e4.clone() : this.m.sub(e4)._forceRed(this);
      }, y.prototype.add = function(e4, t4) {
        this._verify2(e4, t4);
        var A3 = e4.add(t4);
        return A3.cmp(this.m) >= 0 && A3.isub(this.m), A3._forceRed(this);
      }, y.prototype.iadd = function(e4, t4) {
        this._verify2(e4, t4);
        var A3 = e4.iadd(t4);
        return A3.cmp(this.m) >= 0 && A3.isub(this.m), A3;
      }, y.prototype.sub = function(e4, t4) {
        this._verify2(e4, t4);
        var A3 = e4.sub(t4);
        return A3.cmpn(0) < 0 && A3.iadd(this.m), A3._forceRed(this);
      }, y.prototype.isub = function(e4, t4) {
        this._verify2(e4, t4);
        var A3 = e4.isub(t4);
        return A3.cmpn(0) < 0 && A3.iadd(this.m), A3;
      }, y.prototype.shl = function(e4, t4) {
        return this._verify1(e4), this.imod(e4.ushln(t4));
      }, y.prototype.imul = function(e4, t4) {
        return this._verify2(e4, t4), this.imod(e4.imul(t4));
      }, y.prototype.mul = function(e4, t4) {
        return this._verify2(e4, t4), this.imod(e4.mul(t4));
      }, y.prototype.isqr = function(e4) {
        return this.imul(e4, e4.clone());
      }, y.prototype.sqr = function(e4) {
        return this.mul(e4, e4);
      }, y.prototype.sqrt = function(e4) {
        if (e4.isZero()) return e4.clone();
        var t4 = this.m.andln(3);
        if (n2(t4 % 2 == 1), 3 === t4) {
          var A3 = this.m.add(new o2(1)).iushrn(2);
          return this.pow(e4, A3);
        }
        for (var r3 = this.m.subn(1), s2 = 0; !r3.isZero() && 0 === r3.andln(1); ) s2++, r3.iushrn(1);
        n2(!r3.isZero());
        var i2 = new o2(1).toRed(this), a2 = i2.redNeg(), c2 = this.m.subn(1).iushrn(1), l2 = this.m.bitLength();
        for (l2 = new o2(2 * l2 * l2).toRed(this); 0 !== this.pow(l2, c2).cmp(a2); ) l2.redIAdd(a2);
        for (var u2 = this.pow(l2, r3), g2 = this.pow(e4, r3.addn(1).iushrn(1)), E2 = this.pow(e4, r3), h2 = s2; 0 !== E2.cmp(i2); ) {
          for (var d2 = E2, I2 = 0; 0 !== d2.cmp(i2); I2++) d2 = d2.redSqr();
          n2(I2 < h2);
          var B2 = this.pow(u2, new o2(1).iushln(h2 - I2 - 1));
          g2 = g2.redMul(B2), u2 = B2.redSqr(), E2 = E2.redMul(u2), h2 = I2;
        }
        return g2;
      }, y.prototype.invm = function(e4) {
        var t4 = e4._invmp(this.m);
        return 0 !== t4.negative ? (t4.negative = 0, this.imod(t4).redNeg()) : this.imod(t4);
      }, y.prototype.pow = function(e4, t4) {
        if (t4.isZero()) return new o2(1).toRed(this);
        if (0 === t4.cmpn(1)) return e4.clone();
        var A3 = new Array(16);
        A3[0] = new o2(1).toRed(this), A3[1] = e4;
        for (var n3 = 2; n3 < A3.length; n3++) A3[n3] = this.mul(A3[n3 - 1], e4);
        var r3 = A3[0], s2 = 0, i2 = 0, a2 = t4.bitLength() % 26;
        for (0 === a2 && (a2 = 26), n3 = t4.length - 1; n3 >= 0; n3--) {
          for (var c2 = t4.words[n3], l2 = a2 - 1; l2 >= 0; l2--) {
            var u2 = c2 >> l2 & 1;
            r3 !== A3[0] && (r3 = this.sqr(r3)), 0 !== u2 || 0 !== s2 ? (s2 <<= 1, s2 |= u2, (4 === ++i2 || 0 === n3 && 0 === l2) && (r3 = this.mul(r3, A3[s2]), i2 = 0, s2 = 0)) : i2 = 0;
          }
          a2 = 26;
        }
        return r3;
      }, y.prototype.convertTo = function(e4) {
        var t4 = e4.umod(this.m);
        return t4 === e4 ? t4.clone() : t4;
      }, y.prototype.convertFrom = function(e4) {
        var t4 = e4.clone();
        return t4.red = null, t4;
      }, o2.mont = function(e4) {
        return new w(e4);
      }, r2(w, y), w.prototype.convertTo = function(e4) {
        return this.imod(e4.ushln(this.shift));
      }, w.prototype.convertFrom = function(e4) {
        var t4 = this.imod(e4.mul(this.rinv));
        return t4.red = null, t4;
      }, w.prototype.imul = function(e4, t4) {
        if (e4.isZero() || t4.isZero()) return e4.words[0] = 0, e4.length = 1, e4;
        var A3 = e4.imul(t4), n3 = A3.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), r3 = A3.isub(n3).iushrn(this.shift), o3 = r3;
        return r3.cmp(this.m) >= 0 ? o3 = r3.isub(this.m) : r3.cmpn(0) < 0 && (o3 = r3.iadd(this.m)), o3._forceRed(this);
      }, w.prototype.mul = function(e4, t4) {
        if (e4.isZero() || t4.isZero()) return new o2(0)._forceRed(this);
        var A3 = e4.mul(t4), n3 = A3.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), r3 = A3.isub(n3).iushrn(this.shift), s2 = r3;
        return r3.cmp(this.m) >= 0 ? s2 = r3.isub(this.m) : r3.cmpn(0) < 0 && (s2 = r3.iadd(this.m)), s2._forceRed(this);
      }, w.prototype.invm = function(e4) {
        return this.imod(e4._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    })(e2 = A2.nmd(e2), this);
  }