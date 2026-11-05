// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5775 range:573830..580006
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5775: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276), r2 = A2(9845).Buffer, o2 = A2(7410), s = A2(6457);
    function i(e3) {
      this.enc = "der", this.name = e3.name, this.entity = e3, this.tree = new a(), this.tree._init(e3.body);
    }
    function a(e3) {
      o2.call(this, "der", e3);
    }
    function c(e3) {
      return e3 < 10 ? "0" + e3 : e3;
    }
    e2.exports = i, i.prototype.encode = function(e3, t3) {
      return this.tree._encode(e3, t3).join();
    }, n2(a, o2), a.prototype._encodeComposite = function(e3, t3, A3, n3) {
      const o3 = (function(e4, t4, A4, n4) {
        let r3;
        "seqof" === e4 ? e4 = "seq" : "setof" === e4 && (e4 = "set");
        if (s.tagByName.hasOwnProperty(e4)) r3 = s.tagByName[e4];
        else {
          if ("number" != typeof e4 || (0 | e4) !== e4) return n4.error("Unknown tag: " + e4);
          r3 = e4;
        }
        if (r3 >= 31) return n4.error("Multi-octet tag encoding unsupported");
        t4 || (r3 |= 32);
        return r3 |= s.tagClassByName[A4 || "universal"] << 6, r3;
      })(e3, t3, A3, this.reporter);
      if (n3.length < 128) {
        const e4 = r2.alloc(2);
        return e4[0] = o3, e4[1] = n3.length, this._createEncoderBuffer([e4, n3]);
      }
      let i2 = 1;
      for (let e4 = n3.length; e4 >= 256; e4 >>= 8) i2++;
      const a2 = r2.alloc(2 + i2);
      a2[0] = o3, a2[1] = 128 | i2;
      for (let e4 = 1 + i2, t4 = n3.length; t4 > 0; e4--, t4 >>= 8) a2[e4] = 255 & t4;
      return this._createEncoderBuffer([a2, n3]);
    }, a.prototype._encodeStr = function(e3, t3) {
      if ("bitstr" === t3) return this._createEncoderBuffer([0 | e3.unused, e3.data]);
      if ("bmpstr" === t3) {
        const t4 = r2.alloc(2 * e3.length);
        for (let A3 = 0; A3 < e3.length; A3++) t4.writeUInt16BE(e3.charCodeAt(A3), 2 * A3);
        return this._createEncoderBuffer(t4);
      }
      return "numstr" === t3 ? this._isNumstr(e3) ? this._createEncoderBuffer(e3) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t3 ? this._isPrintstr(e3) ? this._createEncoderBuffer(e3) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t3) || "objDesc" === t3 ? this._createEncoderBuffer(e3) : this.reporter.error("Encoding of string type: " + t3 + " unsupported");
    }, a.prototype._encodeObjid = function(e3, t3, A3) {
      if ("string" == typeof e3) {
        if (!t3) return this.reporter.error("string objid given, but no values map found");
        if (!t3.hasOwnProperty(e3)) return this.reporter.error("objid not found in values map");
        e3 = t3[e3].split(/[\s.]+/g);
        for (let t4 = 0; t4 < e3.length; t4++) e3[t4] |= 0;
      } else if (Array.isArray(e3)) {
        e3 = e3.slice();
        for (let t4 = 0; t4 < e3.length; t4++) e3[t4] |= 0;
      }
      if (!Array.isArray(e3)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e3));
      if (!A3) {
        if (e3[1] >= 40) return this.reporter.error("Second objid identifier OOB");
        e3.splice(0, 2, 40 * e3[0] + e3[1]);
      }
      let n3 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        let A4 = e3[t4];
        for (n3++; A4 >= 128; A4 >>= 7) n3++;
      }
      const o3 = r2.alloc(n3);
      let s2 = o3.length - 1;
      for (let t4 = e3.length - 1; t4 >= 0; t4--) {
        let A4 = e3[t4];
        for (o3[s2--] = 127 & A4; (A4 >>= 7) > 0; ) o3[s2--] = 128 | 127 & A4;
      }
      return this._createEncoderBuffer(o3);
    }, a.prototype._encodeTime = function(e3, t3) {
      let A3;
      const n3 = new Date(e3);
      return "gentime" === t3 ? A3 = [c(n3.getUTCFullYear()), c(n3.getUTCMonth() + 1), c(n3.getUTCDate()), c(n3.getUTCHours()), c(n3.getUTCMinutes()), c(n3.getUTCSeconds()), "Z"].join("") : "utctime" === t3 ? A3 = [c(n3.getUTCFullYear() % 100), c(n3.getUTCMonth() + 1), c(n3.getUTCDate()), c(n3.getUTCHours()), c(n3.getUTCMinutes()), c(n3.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t3 + " time is not supported yet"), this._encodeStr(A3, "octstr");
    }, a.prototype._encodeNull = function() {
      return this._createEncoderBuffer("");
    }, a.prototype._encodeInt = function(e3, t3) {
      if ("string" == typeof e3) {
        if (!t3) return this.reporter.error("String int or enum given, but no values map");
        if (!t3.hasOwnProperty(e3)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e3));
        e3 = t3[e3];
      }
      if ("number" != typeof e3 && !r2.isBuffer(e3)) {
        const t4 = e3.toArray();
        !e3.sign && 128 & t4[0] && t4.unshift(0), e3 = r2.from(t4);
      }
      if (r2.isBuffer(e3)) {
        let t4 = e3.length;
        0 === e3.length && t4++;
        const A4 = r2.alloc(t4);
        return e3.copy(A4), 0 === e3.length && (A4[0] = 0), this._createEncoderBuffer(A4);
      }
      if (e3 < 128) return this._createEncoderBuffer(e3);
      if (e3 < 256) return this._createEncoderBuffer([0, e3]);
      let A3 = 1;
      for (let t4 = e3; t4 >= 256; t4 >>= 8) A3++;
      const n3 = new Array(A3);
      for (let t4 = n3.length - 1; t4 >= 0; t4--) n3[t4] = 255 & e3, e3 >>= 8;
      return 128 & n3[0] && n3.unshift(0), this._createEncoderBuffer(r2.from(n3));
    }, a.prototype._encodeBool = function(e3) {
      return this._createEncoderBuffer(e3 ? 255 : 0);
    }, a.prototype._use = function(e3, t3) {
      return "function" == typeof e3 && (e3 = e3(t3)), e3._getEncoder("der").tree;
    }, a.prototype._skipDefault = function(e3, t3, A3) {
      const n3 = this._baseState;
      let r3;
      if (null === n3.default) return false;
      const o3 = e3.join();
      if (void 0 === n3.defaultBuffer && (n3.defaultBuffer = this._encodeValue(n3.default, t3, A3).join()), o3.length !== n3.defaultBuffer.length) return false;
      for (r3 = 0; r3 < o3.length; r3++) if (o3[r3] !== n3.defaultBuffer[r3]) return false;
      return true;
    };
  }