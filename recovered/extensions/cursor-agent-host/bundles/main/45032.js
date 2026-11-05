// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 45032 range:7834315..7845289
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45032: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    t._dbcs = u;
    for (var s = -1, o = -2, i = -10, a = -1e3, c = new Array(256), l = 0; l < 256; l++) c[l] = s;
    function u(e2, t2) {
      if (this.encodingName = e2.encodingName, !e2) throw new Error("DBCS codec is called without the data.");
      if (!e2.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
      var r2 = e2.table();
      this.decodeTables = [], this.decodeTables[0] = c.slice(0), this.decodeTableSeq = [];
      for (var n2 = 0; n2 < r2.length; n2++) this._addDecodeChunk(r2[n2]);
      if ("function" == typeof e2.gb18030) {
        this.gb18030 = e2.gb18030();
        var i2 = this.decodeTables.length;
        this.decodeTables.push(c.slice(0));
        var l2 = this.decodeTables.length;
        this.decodeTables.push(c.slice(0));
        var u2 = this.decodeTables[0];
        for (n2 = 129; n2 <= 254; n2++) for (var d2 = this.decodeTables[a - u2[n2]], p2 = 48; p2 <= 57; p2++) {
          if (d2[p2] === s) d2[p2] = a - i2;
          else if (d2[p2] > a) throw new Error("gb18030 decode tables conflict at byte 2");
          for (var m2 = this.decodeTables[a - d2[p2]], h = 129; h <= 254; h++) {
            if (m2[h] === s) m2[h] = a - l2;
            else {
              if (m2[h] === a - l2) continue;
              if (m2[h] > a) throw new Error("gb18030 decode tables conflict at byte 3");
            }
            for (var f = this.decodeTables[a - m2[h]], g = 48; g <= 57; g++) f[g] === s && (f[g] = o);
          }
        }
      }
      this.defaultCharUnicode = t2.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
      var y = {};
      if (e2.encodeSkipVals) for (n2 = 0; n2 < e2.encodeSkipVals.length; n2++) {
        var w = e2.encodeSkipVals[n2];
        if ("number" == typeof w) y[w] = true;
        else for (p2 = w.from; p2 <= w.to; p2++) y[p2] = true;
      }
      if (this._fillEncodeTable(0, 0, y), e2.encodeAdd) for (var v in e2.encodeAdd) Object.prototype.hasOwnProperty.call(e2.encodeAdd, v) && this._setEncodeChar(v.charCodeAt(0), e2.encodeAdd[v]);
      this.defCharSB = this.encodeTable[0][t2.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === s && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === s && (this.defCharSB = "?".charCodeAt(0));
    }
    function d(e2, t2) {
      this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t2.encodeTable, this.encodeTableSeq = t2.encodeTableSeq, this.defaultCharSingleByte = t2.defCharSB, this.gb18030 = t2.gb18030;
    }
    function p(e2, t2) {
      this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t2.decodeTables, this.decodeTableSeq = t2.decodeTableSeq, this.defaultCharUnicode = t2.defaultCharUnicode, this.gb18030 = t2.gb18030;
    }
    function m(e2, t2) {
      if (e2[0] > t2) return -1;
      for (var r2 = 0, n2 = e2.length; r2 < n2 - 1; ) {
        var s2 = r2 + (n2 - r2 + 1 >> 1);
        e2[s2] <= t2 ? r2 = s2 : n2 = s2;
      }
      return r2;
    }
    u.prototype.encoder = d, u.prototype.decoder = p, u.prototype._getDecodeTrieNode = function(e2) {
      for (var t2 = []; e2 > 0; e2 >>>= 8) t2.push(255 & e2);
      0 == t2.length && t2.push(0);
      for (var r2 = this.decodeTables[0], n2 = t2.length - 1; n2 > 0; n2--) {
        var o2 = r2[t2[n2]];
        if (o2 == s) r2[t2[n2]] = a - this.decodeTables.length, this.decodeTables.push(r2 = c.slice(0));
        else {
          if (!(o2 <= a)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e2.toString(16));
          r2 = this.decodeTables[a - o2];
        }
      }
      return r2;
    }, u.prototype._addDecodeChunk = function(e2) {
      var t2 = parseInt(e2[0], 16), r2 = this._getDecodeTrieNode(t2);
      t2 &= 255;
      for (var n2 = 1; n2 < e2.length; n2++) {
        var s2 = e2[n2];
        if ("string" == typeof s2) for (var o2 = 0; o2 < s2.length; ) {
          var a2 = s2.charCodeAt(o2++);
          if (a2 >= 55296 && a2 < 56320) {
            var c2 = s2.charCodeAt(o2++);
            if (!(c2 >= 56320 && c2 < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e2[0]);
            r2[t2++] = 65536 + 1024 * (a2 - 55296) + (c2 - 56320);
          } else if (a2 > 4080 && a2 <= 4095) {
            for (var l2 = 4095 - a2 + 2, u2 = [], d2 = 0; d2 < l2; d2++) u2.push(s2.charCodeAt(o2++));
            r2[t2++] = i - this.decodeTableSeq.length, this.decodeTableSeq.push(u2);
          } else r2[t2++] = a2;
        }
        else {
          if ("number" != typeof s2) throw new Error("Incorrect type '" + typeof s2 + "' given in " + this.encodingName + " at chunk " + e2[0]);
          var p2 = r2[t2 - 1] + 1;
          for (o2 = 0; o2 < s2; o2++) r2[t2++] = p2++;
        }
      }
      if (t2 > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e2[0] + ": too long" + t2);
    }, u.prototype._getEncodeBucket = function(e2) {
      var t2 = e2 >> 8;
      return void 0 === this.encodeTable[t2] && (this.encodeTable[t2] = c.slice(0)), this.encodeTable[t2];
    }, u.prototype._setEncodeChar = function(e2, t2) {
      var r2 = this._getEncodeBucket(e2), n2 = 255 & e2;
      r2[n2] <= i ? this.encodeTableSeq[i - r2[n2]][-1] = t2 : r2[n2] == s && (r2[n2] = t2);
    }, u.prototype._setEncodeSequence = function(e2, t2) {
      var r2, n2 = e2[0], o2 = this._getEncodeBucket(n2), a2 = 255 & n2;
      o2[a2] <= i ? r2 = this.encodeTableSeq[i - o2[a2]] : (r2 = {}, o2[a2] !== s && (r2[-1] = o2[a2]), o2[a2] = i - this.encodeTableSeq.length, this.encodeTableSeq.push(r2));
      for (var c2 = 1; c2 < e2.length - 1; c2++) {
        var l2 = r2[n2];
        "object" == typeof l2 ? r2 = l2 : (r2 = r2[n2] = {}, void 0 !== l2 && (r2[-1] = l2));
      }
      r2[n2 = e2[e2.length - 1]] = t2;
    }, u.prototype._fillEncodeTable = function(e2, t2, r2) {
      for (var n2 = this.decodeTables[e2], s2 = false, o2 = {}, c2 = 0; c2 < 256; c2++) {
        var l2 = n2[c2], u2 = t2 + c2;
        if (!r2[u2]) if (l2 >= 0) this._setEncodeChar(l2, u2), s2 = true;
        else if (l2 <= a) {
          var d2 = a - l2;
          if (!o2[d2]) {
            var p2 = u2 << 8 >>> 0;
            this._fillEncodeTable(d2, p2, r2) ? s2 = true : o2[d2] = true;
          }
        } else l2 <= i && (this._setEncodeSequence(this.decodeTableSeq[i - l2], u2), s2 = true);
      }
      return s2;
    }, d.prototype.write = function(e2) {
      for (var t2 = n.alloc(e2.length * (this.gb18030 ? 4 : 3)), r2 = this.leadSurrogate, o2 = this.seqObj, a2 = -1, c2 = 0, l2 = 0; ; ) {
        if (-1 === a2) {
          if (c2 == e2.length) break;
          var u2 = e2.charCodeAt(c2++);
        } else {
          u2 = a2;
          a2 = -1;
        }
        if (u2 >= 55296 && u2 < 57344) if (u2 < 56320) {
          if (-1 === r2) {
            r2 = u2;
            continue;
          }
          r2 = u2, u2 = s;
        } else -1 !== r2 ? (u2 = 65536 + 1024 * (r2 - 55296) + (u2 - 56320), r2 = -1) : u2 = s;
        else -1 !== r2 && (a2 = u2, u2 = s, r2 = -1);
        var d2 = s;
        if (void 0 !== o2 && u2 != s) {
          var p2 = o2[u2];
          if ("object" == typeof p2) {
            o2 = p2;
            continue;
          }
          "number" == typeof p2 ? d2 = p2 : null == p2 && void 0 !== (p2 = o2[-1]) && (d2 = p2, a2 = u2), o2 = void 0;
        } else if (u2 >= 0) {
          var h = this.encodeTable[u2 >> 8];
          if (void 0 !== h && (d2 = h[255 & u2]), d2 <= i) {
            o2 = this.encodeTableSeq[i - d2];
            continue;
          }
          if (d2 == s && this.gb18030) {
            var f = m(this.gb18030.uChars, u2);
            if (-1 != f) {
              d2 = this.gb18030.gbChars[f] + (u2 - this.gb18030.uChars[f]);
              t2[l2++] = 129 + Math.floor(d2 / 12600), d2 %= 12600, t2[l2++] = 48 + Math.floor(d2 / 1260), d2 %= 1260, t2[l2++] = 129 + Math.floor(d2 / 10), d2 %= 10, t2[l2++] = 48 + d2;
              continue;
            }
          }
        }
        d2 === s && (d2 = this.defaultCharSingleByte), d2 < 256 ? t2[l2++] = d2 : d2 < 65536 ? (t2[l2++] = d2 >> 8, t2[l2++] = 255 & d2) : d2 < 16777216 ? (t2[l2++] = d2 >> 16, t2[l2++] = d2 >> 8 & 255, t2[l2++] = 255 & d2) : (t2[l2++] = d2 >>> 24, t2[l2++] = d2 >>> 16 & 255, t2[l2++] = d2 >>> 8 & 255, t2[l2++] = 255 & d2);
      }
      return this.seqObj = o2, this.leadSurrogate = r2, t2.slice(0, l2);
    }, d.prototype.end = function() {
      if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var e2 = n.alloc(10), t2 = 0;
        if (this.seqObj) {
          var r2 = this.seqObj[-1];
          void 0 !== r2 && (r2 < 256 ? e2[t2++] = r2 : (e2[t2++] = r2 >> 8, e2[t2++] = 255 & r2)), this.seqObj = void 0;
        }
        return -1 !== this.leadSurrogate && (e2[t2++] = this.defaultCharSingleByte, this.leadSurrogate = -1), e2.slice(0, t2);
      }
    }, d.prototype.findIdx = m, p.prototype.write = function(e2) {
      for (var t2 = n.alloc(2 * e2.length), r2 = this.nodeIdx, c2 = this.prevBytes, l2 = this.prevBytes.length, u2 = -this.prevBytes.length, d2 = 0, p2 = 0; d2 < e2.length; d2++) {
        var h, f = d2 >= 0 ? e2[d2] : c2[d2 + l2];
        if ((h = this.decodeTables[r2][f]) >= 0) ;
        else if (h === s) h = this.defaultCharUnicode.charCodeAt(0), d2 = u2;
        else if (h === o) {
          if (d2 >= 3) var g = 12600 * (e2[d2 - 3] - 129) + 1260 * (e2[d2 - 2] - 48) + 10 * (e2[d2 - 1] - 129) + (f - 48);
          else g = 12600 * (c2[d2 - 3 + l2] - 129) + 1260 * ((d2 - 2 >= 0 ? e2[d2 - 2] : c2[d2 - 2 + l2]) - 48) + 10 * ((d2 - 1 >= 0 ? e2[d2 - 1] : c2[d2 - 1 + l2]) - 129) + (f - 48);
          var y = m(this.gb18030.gbChars, g);
          h = this.gb18030.uChars[y] + g - this.gb18030.gbChars[y];
        } else {
          if (h <= a) {
            r2 = a - h;
            continue;
          }
          if (!(h <= i)) throw new Error("iconv-lite internal error: invalid decoding table value " + h + " at " + r2 + "/" + f);
          for (var w = this.decodeTableSeq[i - h], v = 0; v < w.length - 1; v++) h = w[v], t2[p2++] = 255 & h, t2[p2++] = h >> 8;
          h = w[w.length - 1];
        }
        if (h >= 65536) {
          var _ = 55296 | (h -= 65536) >> 10;
          t2[p2++] = 255 & _, t2[p2++] = _ >> 8, h = 56320 | 1023 & h;
        }
        t2[p2++] = 255 & h, t2[p2++] = h >> 8, r2 = 0, u2 = d2 + 1;
      }
      return this.nodeIdx = r2, this.prevBytes = u2 >= 0 ? Array.prototype.slice.call(e2, u2) : c2.slice(u2 + l2).concat(Array.prototype.slice.call(e2)), t2.slice(0, p2).toString("ucs2");
    }, p.prototype.end = function() {
      for (var e2 = ""; this.prevBytes.length > 0; ) {
        e2 += this.defaultCharUnicode;
        var t2 = this.prevBytes.slice(1);
        this.prevBytes = [], this.nodeIdx = 0, t2.length > 0 && (e2 += this.write(t2));
      }
      return this.prevBytes = [], this.nodeIdx = 0, e2;
    };
  }