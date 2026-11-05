// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1464 range:154810..160298
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1464: (e2, n2, a2) => {
    "use strict";
    const { Readable: t2 } = a2(7075), { inherits: s2 } = a2(7975), o2 = a2(7710), r2 = a2(1537), i2 = a2(491), A = a2(6388), l = a2(5529), c = /^boundary$/i, m = /^form-data$/i, d = /^charset$/i, g = /^filename$/i, u = /^name$/i;
    function E(e3, n3) {
      let a3, t3;
      const s3 = this;
      let E2;
      const k = n3.limits, I = n3.isPartAFile || ((e4, n4, a4) => "application/octet-stream" === n4 || void 0 !== a4), h = n3.parsedConType || [], _ = n3.defCharset || "utf8", C = n3.preservePath, f = { highWaterMark: n3.fileHwm };
      for (a3 = 0, t3 = h.length; a3 < t3; ++a3) if (Array.isArray(h[a3]) && c.test(h[a3][0])) {
        E2 = h[a3][1];
        break;
      }
      function B() {
        0 === O && U && !e3._done && (U = false, s3.end());
      }
      if ("string" != typeof E2) throw new Error("Multipart: Boundary not found");
      const Q = l(k, "fieldSize", 1048576), y = l(k, "fileSize", 1 / 0), R = l(k, "files", 1 / 0), N = l(k, "fields", 1 / 0), v = l(k, "parts", 1 / 0), S = l(k, "headerPairs", 2e3), D = l(k, "headerSize", 81920);
      let w, b, M = 0, F = 0, O = 0, U = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e3;
      const L = { boundary: E2, maxHeaderPairs: S, maxHeaderSize: D, partHwm: f.highWaterMark, highWaterMark: n3.highWaterMark };
      this.parser = new o2(L), this.parser.on("drain", function() {
        if (s3._needDrain = false, s3._cb && !s3._pause) {
          const e4 = s3._cb;
          s3._cb = void 0, e4();
        }
      }).on("part", function n4(o3) {
        if (++s3._nparts > v) return s3.parser.removeListener("part", n4), s3.parser.on("part", p), e3.hitPartsLimit = true, e3.emit("partsLimit"), p(o3);
        if (b) {
          const e4 = b;
          e4.emit("end"), e4.removeAllListeners("end");
        }
        o3.on("header", function(n5) {
          let l2, c2, E3, k2, h2, v2, S2, D2, U2 = 0;
          if (n5["content-type"] && (E3 = r2(n5["content-type"][0]), E3[0])) {
            for (l2 = E3[0].toLowerCase(), a3 = 0, t3 = E3.length; a3 < t3; ++a3) if (d.test(E3[a3][0])) {
              k2 = E3[a3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === l2 && (l2 = "text/plain"), void 0 === k2 && (k2 = _), !n5["content-disposition"]) return p(o3);
          if (E3 = r2(n5["content-disposition"][0]), !m.test(E3[0])) return p(o3);
          for (a3 = 0, t3 = E3.length; a3 < t3; ++a3) u.test(E3[a3][0]) ? c2 = E3[a3][1] : g.test(E3[a3][0]) && (v2 = E3[a3][1], C || (v2 = A(v2)));
          if (h2 = n5["content-transfer-encoding"] ? n5["content-transfer-encoding"][0].toLowerCase() : "7bit", I(c2, l2, v2)) {
            if (M === R) return e3.hitFilesLimit || (e3.hitFilesLimit = true, e3.emit("filesLimit")), p(o3);
            if (++M, 0 === e3.listenerCount("file")) return void s3.parser._ignore();
            ++O;
            const n6 = new T(f);
            w = n6, n6.on("end", function() {
              if (--O, s3._pause = false, B(), s3._cb && !s3._needDrain) {
                const e4 = s3._cb;
                s3._cb = void 0, e4();
              }
            }), n6._read = function(e4) {
              if (s3._pause && (s3._pause = false, s3._cb && !s3._needDrain)) {
                const e5 = s3._cb;
                s3._cb = void 0, e5();
              }
            }, e3.emit("file", c2, n6, v2, h2, l2), S2 = function(e4) {
              if ((U2 += e4.length) > y) {
                const a4 = y - U2 + e4.length;
                return a4 > 0 && n6.push(e4.slice(0, a4)), n6.truncated = true, n6.bytesRead = y, o3.removeAllListeners("data"), void n6.emit("limit");
              }
              n6.push(e4) || (s3._pause = true), n6.bytesRead = U2;
            }, D2 = function() {
              w = void 0, n6.push(null);
            };
          } else {
            if (F === N) return e3.hitFieldsLimit || (e3.hitFieldsLimit = true, e3.emit("fieldsLimit")), p(o3);
            ++F, ++O;
            let n6 = "", a4 = false;
            b = o3, S2 = function(e4) {
              if ((U2 += e4.length) > Q) {
                const t4 = Q - (U2 - e4.length);
                n6 += e4.toString("binary", 0, t4), a4 = true, o3.removeAllListeners("data");
              } else n6 += e4.toString("binary");
            }, D2 = function() {
              b = void 0, n6.length && (n6 = i2(n6, "binary", k2)), e3.emit("field", c2, n6, false, a4, h2, l2), --O, B();
            };
          }
          o3._readableState.sync = false, o3.on("data", S2), o3.on("end", D2);
        }).on("error", function(e4) {
          w && w.emit("error", e4);
        });
      }).on("error", function(n4) {
        e3.emit("error", n4);
      }).on("finish", function() {
        U = true, B();
      });
    }
    function p(e3) {
      e3.resume();
    }
    function T(e3) {
      t2.call(this, e3), this.bytesRead = 0, this.truncated = false;
    }
    E.detect = /^multipart\/form-data/i, E.prototype.write = function(e3, n3) {
      const a3 = this.parser.write(e3);
      a3 && !this._pause ? n3() : (this._needDrain = !a3, this._cb = n3);
    }, E.prototype.end = function() {
      const e3 = this;
      e3.parser.writable ? e3.parser.end() : e3._boy._done || process.nextTick(function() {
        e3._boy._done = true, e3._boy.emit("finish");
      });
    }, s2(T, t2), T.prototype._read = function(e3) {
    }, e2.exports = E;
  }