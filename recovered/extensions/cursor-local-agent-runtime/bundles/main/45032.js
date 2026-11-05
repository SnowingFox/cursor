// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 45032 range:1362871..1373845
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
45032: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    t._dbcs = u;
    for (var o = -1, s = -2, i = -10, a = -1e3, l = new Array(256), c = 0; c < 256; c++) l[c] = o;
    function u(e2, t2) {
      if (this.encodingName = e2.encodingName, !e2) throw new Error("DBCS codec is called without the data.");
      if (!e2.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
      var r2 = e2.table();
      this.decodeTables = [], this.decodeTables[0] = l.slice(0), this.decodeTableSeq = [];
      for (var n2 = 0; n2 < r2.length; n2++) this._addDecodeChunk(r2[n2]);
      if ("function" == typeof e2.gb18030) {
        this.gb18030 = e2.gb18030();
        var i2 = this.decodeTables.length;
        this.decodeTables.push(l.slice(0));
        var c2 = this.decodeTables.length;
        this.decodeTables.push(l.slice(0));
        var u2 = this.decodeTables[0];
        for (n2 = 129; n2 <= 254; n2++) for (var d2 = this.decodeTables[a - u2[n2]], p2 = 48; p2 <= 57; p2++) {
          if (d2[p2] === o) d2[p2] = a - i2;
          else if (d2[p2] > a) throw new Error("gb18030 decode tables conflict at byte 2");
          for (var h2 = this.decodeTables[a - d2[p2]], m = 129; m <= 254; m++) {
            if (h2[m] === o) h2[m] = a - c2;
            else {
              if (h2[m] === a - c2) continue;
              if (h2[m] > a) throw new Error("gb18030 decode tables conflict at byte 3");
            }
            for (var f = this.decodeTables[a - h2[m]], g = 48; g <= 57; g++) f[g] === o && (f[g] = s);
          }
        }
      }
      this.defaultCharUnicode = t2.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
      var y = {};
      if (e2.encodeSkipVals) for (n2 = 0; n2 < e2.encodeSkipVals.length; n2++) {
        var v = e2.encodeSkipVals[n2];
        if ("number" == typeof v) y[v] = true;
        else for (p2 = v.from; p2 <= v.to; p2++) y[p2] = true;
      }
      if (this._fillEncodeTable(0, 0, y), e2.encodeAdd) for (var w in e2.encodeAdd) Object.prototype.hasOwnProperty.call(e2.encodeAdd, w) && this._setEncodeChar(w.charCodeAt(0), e2.encodeAdd[w]);
      this.defCharSB = this.encodeTable[0][t2.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === o && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === o && (this.defCharSB = "?".charCodeAt(0));
    }
    function d(e2, t2) {
      this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t2.encodeTable, this.encodeTableSeq = t2.encodeTableSeq, this.defaultCharSingleByte = t2.defCharSB, this.gb18030 = t2.gb18030;
    }
    function p(e2, t2) {
      this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t2.decodeTables, this.decodeTableSeq = t2.decodeTableSeq, this.defaultCharUnicode = t2.defaultCharUnicode, this.gb18030 = t2.gb18030;
    }
    function h(e2, t2) {
      if (e2[0] > t2) return -1;
      for (var r2 = 0, n2 = e2.length; r2 < n2 - 1; ) {
        var o2 = r2 + (n2 - r2 + 1 >> 1);
        e2[o2] <= t2 ? r2 = o2 : n2 = o2;
      }
      return r2;
    }
    u.prototype.encoder = d, u.prototype.decoder = p, u.prototype._getDecodeTrieNode = function(e2) {
      for (var t2 = []; e2 > 0; e2 >>>= 8) t2.push(255 & e2);
      0 == t2.length && t2.push(0);
      for (var r2 = this.decodeTables[0], n2 = t2.length - 1; n2 > 0; n2--) {
        var s2 = r2[t2[n2]];
        if (s2 == o) r2[t2[n2]] = a - this.decodeTables.length, this.decodeTables.push(r2 = l.slice(0));
        else {
          if (!(s2 <= a)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e2.toString(16));
          r2 = this.decodeTables[a - s2];
        }
      }
      return r2;
    }, u.prototype._addDecodeChunk = function(e2) {
      var t2 = parseInt(e2[0], 16), r2 = this._getDecodeTrieNode(t2);
      t2 &= 255;
      for (var n2 = 1; n2 < e2.length; n2++) {
        var o2 = e2[n2];
        if ("string" == typeof o2) for (var s2 = 0; s2 < o2.length; ) {
          var a2 = o2.charCodeAt(s2++);
          if (a2 >= 55296 && a2 < 56320) {
            var l2 = o2.charCodeAt(s2++);
            if (!(l2 >= 56320 && l2 < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e2[0]);
            r2[t2++] = 65536 + 1024 * (a2 - 55296) + (l2 - 56320);
          } else if (a2 > 4080 && a2 <= 4095) {
            for (var c2 = 4095 - a2 + 2, u2 = [], d2 = 0; d2 < c2; d2++) u2.push(o2.charCodeAt(s2++));
            r2[t2++] = i - this.decodeTableSeq.length, this.decodeTableSeq.push(u2);
          } else r2[t2++] = a2;
        }
        else {
          if ("number" != typeof o2) throw new Error("Incorrect type '" + typeof o2 + "' given in " + this.encodingName + " at chunk " + e2[0]);
          var p2 = r2[t2 - 1] + 1;
          for (s2 = 0; s2 < o2; s2++) r2[t2++] = p2++;
        }
      }
      if (t2 > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e2[0] + ": too long" + t2);
    }, u.prototype._getEncodeBucket = function(e2) {
      var t2 = e2 >> 8;
      return void 0 === this.encodeTable[t2] && (this.encodeTable[t2] = l.slice(0)), this.encodeTable[t2];
    }, u.prototype._setEncodeChar = function(e2, t2) {
      var r2 = this._getEncodeBucket(e2), n2 = 255 & e2;
      r2[n2] <= i ? this.encodeTableSeq[i - r2[n2]][-1] = t2 : r2[n2] == o && (r2[n2] = t2);
    }, u.prototype._setEncodeSequence = function(e2, t2) {
      var r2, n2 = e2[0], s2 = this._getEncodeBucket(n2), a2 = 255 & n2;
      s2[a2] <= i ? r2 = this.encodeTableSeq[i - s2[a2]] : (r2 = {}, s2[a2] !== o && (r2[-1] = s2[a2]), s2[a2] = i - this.encodeTableSeq.length, this.encodeTableSeq.push(r2));
      for (var l2 = 1; l2 < e2.length - 1; l2++) {
        var c2 = r2[n2];
        "object" == typeof c2 ? r2 = c2 : (r2 = r2[n2] = {}, void 0 !== c2 && (r2[-1] = c2));
      }
      r2[n2 = e2[e2.length - 1]] = t2;
    }, u.prototype._fillEncodeTable = function(e2, t2, r2) {
      for (var n2 = this.decodeTables[e2], o2 = false, s2 = {}, l2 = 0; l2 < 256; l2++) {
        var c2 = n2[l2], u2 = t2 + l2;
        if (!r2[u2]) if (c2 >= 0) this._setEncodeChar(c2, u2), o2 = true;
        else if (c2 <= a) {
          var d2 = a - c2;
          if (!s2[d2]) {
            var p2 = u2 << 8 >>> 0;
            this._fillEncodeTable(d2, p2, r2) ? o2 = true : s2[d2] = true;
          }
        } else c2 <= i && (this._setEncodeSequence(this.decodeTableSeq[i - c2], u2), o2 = true);
      }
      return o2;
    }, d.prototype.write = function(e2) {
      for (var t2 = n.alloc(e2.length * (this.gb18030 ? 4 : 3)), r2 = this.leadSurrogate, s2 = this.seqObj, a2 = -1, l2 = 0, c2 = 0; ; ) {
        if (-1 === a2) {
          if (l2 == e2.length) break;
          var u2 = e2.charCodeAt(l2++);
        } else {
          u2 = a2;
          a2 = -1;
        }
        if (u2 >= 55296 && u2 < 57344) if (u2 < 56320) {
          if (-1 === r2) {
            r2 = u2;
            continue;
          }
          r2 = u2, u2 = o;
        } else -1 !== r2 ? (u2 = 65536 + 1024 * (r2 - 55296) + (u2 - 56320), r2 = -1) : u2 = o;
        else -1 !== r2 && (a2 = u2, u2 = o, r2 = -1);
        var d2 = o;
        if (void 0 !== s2 && u2 != o) {
          var p2 = s2[u2];
          if ("object" == typeof p2) {
            s2 = p2;
            continue;
          }
          "number" == typeof p2 ? d2 = p2 : null == p2 && void 0 !== (p2 = s2[-1]) && (d2 = p2, a2 = u2), s2 = void 0;
        } else if (u2 >= 0) {
          var m = this.encodeTable[u2 >> 8];
          if (void 0 !== m && (d2 = m[255 & u2]), d2 <= i) {
            s2 = this.encodeTableSeq[i - d2];
            continue;
          }
          if (d2 == o && this.gb18030) {
            var f = h(this.gb18030.uChars, u2);
            if (-1 != f) {
              d2 = this.gb18030.gbChars[f] + (u2 - this.gb18030.uChars[f]);
              t2[c2++] = 129 + Math.floor(d2 / 12600), d2 %= 12600, t2[c2++] = 48 + Math.floor(d2 / 1260), d2 %= 1260, t2[c2++] = 129 + Math.floor(d2 / 10), d2 %= 10, t2[c2++] = 48 + d2;
              continue;
            }
          }
        }
        d2 === o && (d2 = this.defaultCharSingleByte), d2 < 256 ? t2[c2++] = d2 : d2 < 65536 ? (t2[c2++] = d2 >> 8, t2[c2++] = 255 & d2) : d2 < 16777216 ? (t2[c2++] = d2 >> 16, t2[c2++] = d2 >> 8 & 255, t2[c2++] = 255 & d2) : (t2[c2++] = d2 >>> 24, t2[c2++] = d2 >>> 16 & 255, t2[c2++] = d2 >>> 8 & 255, t2[c2++] = 255 & d2);
      }
      return this.seqObj = s2, this.leadSurrogate = r2, t2.slice(0, c2);
    }, d.prototype.end = function() {
      if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
        var e2 = n.alloc(10), t2 = 0;
        if (this.seqObj) {
          var r2 = this.seqObj[-1];
          void 0 !== r2 && (r2 < 256 ? e2[t2++] = r2 : (e2[t2++] = r2 >> 8, e2[t2++] = 255 & r2)), this.seqObj = void 0;
        }
        return -1 !== this.leadSurrogate && (e2[t2++] = this.defaultCharSingleByte, this.leadSurrogate = -1), e2.slice(0, t2);
      }
    }, d.prototype.findIdx = h, p.prototype.write = function(e2) {
      for (var t2 = n.alloc(2 * e2.length), r2 = this.nodeIdx, l2 = this.prevBytes, c2 = this.prevBytes.length, u2 = -this.prevBytes.length, d2 = 0, p2 = 0; d2 < e2.length; d2++) {
        var m, f = d2 >= 0 ? e2[d2] : l2[d2 + c2];
        if ((m = this.decodeTables[r2][f]) >= 0) ;
        else if (m === o) m = this.defaultCharUnicode.charCodeAt(0), d2 = u2;
        else if (m === s) {
          if (d2 >= 3) var g = 12600 * (e2[d2 - 3] - 129) + 1260 * (e2[d2 - 2] - 48) + 10 * (e2[d2 - 1] - 129) + (f - 48);
          else g = 12600 * (l2[d2 - 3 + c2] - 129) + 1260 * ((d2 - 2 >= 0 ? e2[d2 - 2] : l2[d2 - 2 + c2]) - 48) + 10 * ((d2 - 1 >= 0 ? e2[d2 - 1] : l2[d2 - 1 + c2]) - 129) + (f - 48);
          var y = h(this.gb18030.gbChars, g);
          m = this.gb18030.uChars[y] + g - this.gb18030.gbChars[y];
        } else {
          if (m <= a) {
            r2 = a - m;
            continue;
          }
          if (!(m <= i)) throw new Error("iconv-lite internal error: invalid decoding table value " + m + " at " + r2 + "/" + f);
          for (var v = this.decodeTableSeq[i - m], w = 0; w < v.length - 1; w++) m = v[w], t2[p2++] = 255 & m, t2[p2++] = m >> 8;
          m = v[v.length - 1];
        }
        if (m >= 65536) {
          var b = 55296 | (m -= 65536) >> 10;
          t2[p2++] = 255 & b, t2[p2++] = b >> 8, m = 56320 | 1023 & m;
        }
        t2[p2++] = 255 & m, t2[p2++] = m >> 8, r2 = 0, u2 = d2 + 1;
      }
      return this.nodeIdx = r2, this.prevBytes = u2 >= 0 ? Array.prototype.slice.call(e2, u2) : l2.slice(u2 + c2).concat(Array.prototype.slice.call(e2)), t2.slice(0, p2).toString("ucs2");
    }, p.prototype.end = function() {
      for (var e2 = ""; this.prevBytes.length > 0; ) {
        e2 += this.defaultCharUnicode;
        var t2 = this.prevBytes.slice(1);
        this.prevBytes = [], this.nodeIdx = 0, t2.length > 0 && (e2 += this.write(t2));
      }
      return this.prevBytes = [], this.nodeIdx = 0, e2;
    };
  }