// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1464 range:158947..164430
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1464: (e2, n2, t2) => {
    "use strict";
    const { Readable: a2 } = t2(7075), { inherits: s2 } = t2(7975), o2 = t2(7710), r = t2(1537), i = t2(491), A = t2(6388), c = t2(5529), l = /^boundary$/i, d = /^form-data$/i, m = /^charset$/i, u = /^filename$/i, g = /^name$/i;
    function p(e3, n3) {
      let t3, a3;
      const s3 = this;
      let p2;
      const T = n3.limits, k = n3.isPartAFile || ((e4, n4, t4) => "application/octet-stream" === n4 || void 0 !== t4), f = n3.parsedConType || [], _ = n3.defCharset || "utf8", I = n3.preservePath, C = { highWaterMark: n3.fileHwm };
      for (t3 = 0, a3 = f.length; t3 < a3; ++t3) if (Array.isArray(f[t3]) && l.test(f[t3][0])) {
        p2 = f[t3][1];
        break;
      }
      function y() {
        0 === O && U && !e3._done && (U = false, s3.end());
      }
      if ("string" != typeof p2) throw new Error("Multipart: Boundary not found");
      const B = c(T, "fieldSize", 1048576), Q = c(T, "fileSize", 1 / 0), v = c(T, "files", 1 / 0), R = c(T, "fields", 1 / 0), N = c(T, "parts", 1 / 0), S = c(T, "headerPairs", 2e3), w = c(T, "headerSize", 81920);
      let b, D, M = 0, F = 0, O = 0, U = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e3;
      const L = { boundary: p2, maxHeaderPairs: S, maxHeaderSize: w, partHwm: C.highWaterMark, highWaterMark: n3.highWaterMark };
      this.parser = new o2(L), this.parser.on("drain", function() {
        if (s3._needDrain = false, s3._cb && !s3._pause) {
          const e4 = s3._cb;
          s3._cb = void 0, e4();
        }
      }).on("part", function n4(o3) {
        if (++s3._nparts > N) return s3.parser.removeListener("part", n4), s3.parser.on("part", E), e3.hitPartsLimit = true, e3.emit("partsLimit"), E(o3);
        if (D) {
          const e4 = D;
          e4.emit("end"), e4.removeAllListeners("end");
        }
        o3.on("header", function(n5) {
          let c2, l2, p3, T2, f2, N2, S2, w2, U2 = 0;
          if (n5["content-type"] && (p3 = r(n5["content-type"][0]), p3[0])) {
            for (c2 = p3[0].toLowerCase(), t3 = 0, a3 = p3.length; t3 < a3; ++t3) if (m.test(p3[t3][0])) {
              T2 = p3[t3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === c2 && (c2 = "text/plain"), void 0 === T2 && (T2 = _), !n5["content-disposition"]) return E(o3);
          if (p3 = r(n5["content-disposition"][0]), !d.test(p3[0])) return E(o3);
          for (t3 = 0, a3 = p3.length; t3 < a3; ++t3) g.test(p3[t3][0]) ? l2 = p3[t3][1] : u.test(p3[t3][0]) && (N2 = p3[t3][1], I || (N2 = A(N2)));
          if (f2 = n5["content-transfer-encoding"] ? n5["content-transfer-encoding"][0].toLowerCase() : "7bit", k(l2, c2, N2)) {
            if (M === v) return e3.hitFilesLimit || (e3.hitFilesLimit = true, e3.emit("filesLimit")), E(o3);
            if (++M, 0 === e3.listenerCount("file")) return void s3.parser._ignore();
            ++O;
            const n6 = new h(C);
            b = n6, n6.on("end", function() {
              if (--O, s3._pause = false, y(), s3._cb && !s3._needDrain) {
                const e4 = s3._cb;
                s3._cb = void 0, e4();
              }
            }), n6._read = function(e4) {
              if (s3._pause && (s3._pause = false, s3._cb && !s3._needDrain)) {
                const e5 = s3._cb;
                s3._cb = void 0, e5();
              }
            }, e3.emit("file", l2, n6, N2, f2, c2), S2 = function(e4) {
              if ((U2 += e4.length) > Q) {
                const t4 = Q - U2 + e4.length;
                return t4 > 0 && n6.push(e4.slice(0, t4)), n6.truncated = true, n6.bytesRead = Q, o3.removeAllListeners("data"), void n6.emit("limit");
              }
              n6.push(e4) || (s3._pause = true), n6.bytesRead = U2;
            }, w2 = function() {
              b = void 0, n6.push(null);
            };
          } else {
            if (F === R) return e3.hitFieldsLimit || (e3.hitFieldsLimit = true, e3.emit("fieldsLimit")), E(o3);
            ++F, ++O;
            let n6 = "", t4 = false;
            D = o3, S2 = function(e4) {
              if ((U2 += e4.length) > B) {
                const a4 = B - (U2 - e4.length);
                n6 += e4.toString("binary", 0, a4), t4 = true, o3.removeAllListeners("data");
              } else n6 += e4.toString("binary");
            }, w2 = function() {
              D = void 0, n6.length && (n6 = i(n6, "binary", T2)), e3.emit("field", l2, n6, false, t4, f2, c2), --O, y();
            };
          }
          o3._readableState.sync = false, o3.on("data", S2), o3.on("end", w2);
        }).on("error", function(e4) {
          b && b.emit("error", e4);
        });
      }).on("error", function(n4) {
        e3.emit("error", n4);
      }).on("finish", function() {
        U = true, y();
      });
    }
    function E(e3) {
      e3.resume();
    }
    function h(e3) {
      a2.call(this, e3), this.bytesRead = 0, this.truncated = false;
    }
    p.detect = /^multipart\/form-data/i, p.prototype.write = function(e3, n3) {
      const t3 = this.parser.write(e3);
      t3 && !this._pause ? n3() : (this._needDrain = !t3, this._cb = n3);
    }, p.prototype.end = function() {
      const e3 = this;
      e3.parser.writable ? e3.parser.end() : e3._boy._done || process.nextTick(function() {
        e3._boy._done = true, e3._boy.emit("finish");
      });
    }, s2(h, a2), h.prototype._read = function(e3) {
    }, e2.exports = p;
  }