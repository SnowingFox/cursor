// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3975 range:472864..478804
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3975: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276), r2 = A2(2823), o2 = A2(9428).t, s = A2(7410), i = A2(6457);
    function a(e3) {
      this.enc = "der", this.name = e3.name, this.entity = e3, this.tree = new c(), this.tree._init(e3.body);
    }
    function c(e3) {
      s.call(this, "der", e3);
    }
    function l(e3, t3) {
      let A3 = e3.readUInt8(t3);
      if (e3.isError(A3)) return A3;
      const n3 = i.tagClass[A3 >> 6], r3 = !(32 & A3);
      if (31 & ~A3) A3 &= 31;
      else {
        let n4 = A3;
        for (A3 = 0; !(128 & ~n4); ) {
          if (n4 = e3.readUInt8(t3), e3.isError(n4)) return n4;
          A3 <<= 7, A3 |= 127 & n4;
        }
      }
      return { cls: n3, primitive: r3, tag: A3, tagStr: i.tag[A3] };
    }
    function u(e3, t3, A3) {
      let n3 = e3.readUInt8(A3);
      if (e3.isError(n3)) return n3;
      if (!t3 && 128 === n3) return null;
      if (!(128 & n3)) return n3;
      const r3 = 127 & n3;
      if (r3 > 4) return e3.error("length octect is too long");
      n3 = 0;
      for (let t4 = 0; t4 < r3; t4++) {
        n3 <<= 8;
        const t5 = e3.readUInt8(A3);
        if (e3.isError(t5)) return t5;
        n3 |= t5;
      }
      return n3;
    }
    e2.exports = a, a.prototype.decode = function(e3, t3) {
      return o2.isDecoderBuffer(e3) || (e3 = new o2(e3, t3)), this.tree._decode(e3, t3);
    }, n2(c, s), c.prototype._peekTag = function(e3, t3, A3) {
      if (e3.isEmpty()) return false;
      const n3 = e3.save(), r3 = l(e3, 'Failed to peek tag: "' + t3 + '"');
      return e3.isError(r3) ? r3 : (e3.restore(n3), r3.tag === t3 || r3.tagStr === t3 || r3.tagStr + "of" === t3 || A3);
    }, c.prototype._decodeTag = function(e3, t3, A3) {
      const n3 = l(e3, 'Failed to decode tag of "' + t3 + '"');
      if (e3.isError(n3)) return n3;
      let r3 = u(e3, n3.primitive, 'Failed to get length of "' + t3 + '"');
      if (e3.isError(r3)) return r3;
      if (!A3 && n3.tag !== t3 && n3.tagStr !== t3 && n3.tagStr + "of" !== t3) return e3.error('Failed to match tag: "' + t3 + '"');
      if (n3.primitive || null !== r3) return e3.skip(r3, 'Failed to match body of: "' + t3 + '"');
      const o3 = e3.save(), s2 = this._skipUntilEnd(e3, 'Failed to skip indefinite length body: "' + this.tag + '"');
      return e3.isError(s2) ? s2 : (r3 = e3.offset - o3.offset, e3.restore(o3), e3.skip(r3, 'Failed to match body of: "' + t3 + '"'));
    }, c.prototype._skipUntilEnd = function(e3, t3) {
      for (; ; ) {
        const A3 = l(e3, t3);
        if (e3.isError(A3)) return A3;
        const n3 = u(e3, A3.primitive, t3);
        if (e3.isError(n3)) return n3;
        let r3;
        if (r3 = A3.primitive || null !== n3 ? e3.skip(n3) : this._skipUntilEnd(e3, t3), e3.isError(r3)) return r3;
        if ("end" === A3.tagStr) break;
      }
    }, c.prototype._decodeList = function(e3, t3, A3, n3) {
      const r3 = [];
      for (; !e3.isEmpty(); ) {
        const t4 = this._peekTag(e3, "end");
        if (e3.isError(t4)) return t4;
        const o3 = A3.decode(e3, "der", n3);
        if (e3.isError(o3) && t4) break;
        r3.push(o3);
      }
      return r3;
    }, c.prototype._decodeStr = function(e3, t3) {
      if ("bitstr" === t3) {
        const t4 = e3.readUInt8();
        return e3.isError(t4) ? t4 : { unused: t4, data: e3.raw() };
      }
      if ("bmpstr" === t3) {
        const t4 = e3.raw();
        if (t4.length % 2 == 1) return e3.error("Decoding of string type: bmpstr length mismatch");
        let A3 = "";
        for (let e4 = 0; e4 < t4.length / 2; e4++) A3 += String.fromCharCode(t4.readUInt16BE(2 * e4));
        return A3;
      }
      if ("numstr" === t3) {
        const t4 = e3.raw().toString("ascii");
        return this._isNumstr(t4) ? t4 : e3.error("Decoding of string type: numstr unsupported characters");
      }
      if ("octstr" === t3) return e3.raw();
      if ("objDesc" === t3) return e3.raw();
      if ("printstr" === t3) {
        const t4 = e3.raw().toString("ascii");
        return this._isPrintstr(t4) ? t4 : e3.error("Decoding of string type: printstr unsupported characters");
      }
      return /str$/.test(t3) ? e3.raw().toString() : e3.error("Decoding of string type: " + t3 + " unsupported");
    }, c.prototype._decodeObjid = function(e3, t3, A3) {
      let n3;
      const r3 = [];
      let o3 = 0, s2 = 0;
      for (; !e3.isEmpty(); ) s2 = e3.readUInt8(), o3 <<= 7, o3 |= 127 & s2, 128 & s2 || (r3.push(o3), o3 = 0);
      128 & s2 && r3.push(o3);
      const i2 = r3[0] / 40 | 0, a2 = r3[0] % 40;
      if (n3 = A3 ? r3 : [i2, a2].concat(r3.slice(1)), t3) {
        let e4 = t3[n3.join(" ")];
        void 0 === e4 && (e4 = t3[n3.join(".")]), void 0 !== e4 && (n3 = e4);
      }
      return n3;
    }, c.prototype._decodeTime = function(e3, t3) {
      const A3 = e3.raw().toString();
      let n3, r3, o3, s2, i2, a2;
      if ("gentime" === t3) n3 = 0 | A3.slice(0, 4), r3 = 0 | A3.slice(4, 6), o3 = 0 | A3.slice(6, 8), s2 = 0 | A3.slice(8, 10), i2 = 0 | A3.slice(10, 12), a2 = 0 | A3.slice(12, 14);
      else {
        if ("utctime" !== t3) return e3.error("Decoding " + t3 + " time is not supported yet");
        n3 = 0 | A3.slice(0, 2), r3 = 0 | A3.slice(2, 4), o3 = 0 | A3.slice(4, 6), s2 = 0 | A3.slice(6, 8), i2 = 0 | A3.slice(8, 10), a2 = 0 | A3.slice(10, 12), n3 = n3 < 70 ? 2e3 + n3 : 1900 + n3;
      }
      return Date.UTC(n3, r3 - 1, o3, s2, i2, a2, 0);
    }, c.prototype._decodeNull = function() {
      return null;
    }, c.prototype._decodeBool = function(e3) {
      const t3 = e3.readUInt8();
      return e3.isError(t3) ? t3 : 0 !== t3;
    }, c.prototype._decodeInt = function(e3, t3) {
      const A3 = e3.raw();
      let n3 = new r2(A3);
      return t3 && (n3 = t3[n3.toString(10)] || n3), n3;
    }, c.prototype._use = function(e3, t3) {
      return "function" == typeof e3 && (e3 = e3(t3)), e3._getDecoder("der").tree;
    };
  }