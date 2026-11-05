// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 908 range:364624..370107
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
908: (t2, e2, r2) => {
    "use strict";
    const { Readable: n2 } = r2(7075), { inherits: s2 } = r2(7975), i2 = r2(8938), o2 = r2(8613), a = r2(3047), u = r2(0), c = r2(3013), l = /^boundary$/i, m = /^form-data$/i, d = /^charset$/i, f = /^filename$/i, p = /^name$/i;
    function h(t3, e3) {
      let r3, n3;
      const s3 = this;
      let h2;
      const _ = e3.limits, y = e3.isPartAFile || ((t4, e4, r4) => "application/octet-stream" === e4 || void 0 !== r4), w = e3.parsedConType || [], S = e3.defCharset || "utf8", J = e3.preservePath, B = { highWaterMark: e3.fileHwm };
      for (r3 = 0, n3 = w.length; r3 < n3; ++r3) if (Array.isArray(w[r3]) && l.test(w[r3][0])) {
        h2 = w[r3][1];
        break;
      }
      function E() {
        0 === D && U && !t3._done && (U = false, s3.end());
      }
      if ("string" != typeof h2) throw new Error("Multipart: Boundary not found");
      const I = c(_, "fieldSize", 1048576), C = c(_, "fileSize", 1 / 0), b = c(_, "files", 1 / 0), k = c(_, "fields", 1 / 0), v = c(_, "parts", 1 / 0), q = c(_, "headerPairs", 2e3), R = c(_, "headerSize", 81920);
      let P, T, x = 0, N = 0, D = 0, U = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = t3;
      const Q = { boundary: h2, maxHeaderPairs: q, maxHeaderSize: R, partHwm: B.highWaterMark, highWaterMark: e3.highWaterMark };
      this.parser = new i2(Q), this.parser.on("drain", function() {
        if (s3._needDrain = false, s3._cb && !s3._pause) {
          const t4 = s3._cb;
          s3._cb = void 0, t4();
        }
      }).on("part", function e4(i3) {
        if (++s3._nparts > v) return s3.parser.removeListener("part", e4), s3.parser.on("part", g), t3.hitPartsLimit = true, t3.emit("partsLimit"), g(i3);
        if (T) {
          const t4 = T;
          t4.emit("end"), t4.removeAllListeners("end");
        }
        i3.on("header", function(e5) {
          let c2, l2, h3, _2, w2, v2, q2, R2, U2 = 0;
          if (e5["content-type"] && (h3 = o2(e5["content-type"][0]), h3[0])) {
            for (c2 = h3[0].toLowerCase(), r3 = 0, n3 = h3.length; r3 < n3; ++r3) if (d.test(h3[r3][0])) {
              _2 = h3[r3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === c2 && (c2 = "text/plain"), void 0 === _2 && (_2 = S), !e5["content-disposition"]) return g(i3);
          if (h3 = o2(e5["content-disposition"][0]), !m.test(h3[0])) return g(i3);
          for (r3 = 0, n3 = h3.length; r3 < n3; ++r3) p.test(h3[r3][0]) ? l2 = h3[r3][1] : f.test(h3[r3][0]) && (v2 = h3[r3][1], J || (v2 = u(v2)));
          if (w2 = e5["content-transfer-encoding"] ? e5["content-transfer-encoding"][0].toLowerCase() : "7bit", y(l2, c2, v2)) {
            if (x === b) return t3.hitFilesLimit || (t3.hitFilesLimit = true, t3.emit("filesLimit")), g(i3);
            if (++x, 0 === t3.listenerCount("file")) return void s3.parser._ignore();
            ++D;
            const e6 = new A(B);
            P = e6, e6.on("end", function() {
              if (--D, s3._pause = false, E(), s3._cb && !s3._needDrain) {
                const t4 = s3._cb;
                s3._cb = void 0, t4();
              }
            }), e6._read = function(t4) {
              if (s3._pause && (s3._pause = false, s3._cb && !s3._needDrain)) {
                const t5 = s3._cb;
                s3._cb = void 0, t5();
              }
            }, t3.emit("file", l2, e6, v2, w2, c2), q2 = function(t4) {
              if ((U2 += t4.length) > C) {
                const r4 = C - U2 + t4.length;
                return r4 > 0 && e6.push(t4.slice(0, r4)), e6.truncated = true, e6.bytesRead = C, i3.removeAllListeners("data"), void e6.emit("limit");
              }
              e6.push(t4) || (s3._pause = true), e6.bytesRead = U2;
            }, R2 = function() {
              P = void 0, e6.push(null);
            };
          } else {
            if (N === k) return t3.hitFieldsLimit || (t3.hitFieldsLimit = true, t3.emit("fieldsLimit")), g(i3);
            ++N, ++D;
            let e6 = "", r4 = false;
            T = i3, q2 = function(t4) {
              if ((U2 += t4.length) > I) {
                const n4 = I - (U2 - t4.length);
                e6 += t4.toString("binary", 0, n4), r4 = true, i3.removeAllListeners("data");
              } else e6 += t4.toString("binary");
            }, R2 = function() {
              T = void 0, e6.length && (e6 = a(e6, "binary", _2)), t3.emit("field", l2, e6, false, r4, w2, c2), --D, E();
            };
          }
          i3._readableState.sync = false, i3.on("data", q2), i3.on("end", R2);
        }).on("error", function(t4) {
          P && P.emit("error", t4);
        });
      }).on("error", function(e4) {
        t3.emit("error", e4);
      }).on("finish", function() {
        U = true, E();
      });
    }
    function g(t3) {
      t3.resume();
    }
    function A(t3) {
      n2.call(this, t3), this.bytesRead = 0, this.truncated = false;
    }
    h.detect = /^multipart\/form-data/i, h.prototype.write = function(t3, e3) {
      const r3 = this.parser.write(t3);
      r3 && !this._pause ? e3() : (this._needDrain = !r3, this._cb = e3);
    }, h.prototype.end = function() {
      const t3 = this;
      t3.parser.writable ? t3.parser.end() : t3._boy._done || process.nextTick(function() {
        t3._boy._done = true, t3._boy.emit("finish");
      });
    }, s2(A, n2), A.prototype._read = function(t3) {
    }, t2.exports = h;
  }