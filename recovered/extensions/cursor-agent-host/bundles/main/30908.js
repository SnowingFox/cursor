// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30908 range:5063856..5069328
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30908: (e, t, r) => {
    "use strict";
    const { Readable: n } = r(57075), { inherits: s } = r(57975), o = r(78938), i = r(48613), a = r(93047), c = r(8e4), l = r(33013), u = /^boundary$/i, d = /^form-data$/i, p = /^charset$/i, m = /^filename$/i, h = /^name$/i;
    function f(e2, t2) {
      let r2, n2;
      const s2 = this;
      let f2;
      const w = t2.limits, v = t2.isPartAFile || ((e3, t3, r3) => "application/octet-stream" === t3 || void 0 !== r3), _ = t2.parsedConType || [], A = t2.defCharset || "utf8", S = t2.preservePath, b = { highWaterMark: t2.fileHwm };
      for (r2 = 0, n2 = _.length; r2 < n2; ++r2) if (Array.isArray(_[r2]) && u.test(_[r2][0])) {
        f2 = _[r2][1];
        break;
      }
      function E() {
        0 === D && O && !e2._done && (O = false, s2.end());
      }
      if ("string" != typeof f2) throw new Error("Multipart: Boundary not found");
      const I = l(w, "fieldSize", 1048576), C = l(w, "fileSize", 1 / 0), k = l(w, "files", 1 / 0), x = l(w, "fields", 1 / 0), T = l(w, "parts", 1 / 0), R = l(w, "headerPairs", 2e3), B = l(w, "headerSize", 81920);
      let P, J, M = 0, q = 0, D = 0, O = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e2;
      const N = { boundary: f2, maxHeaderPairs: R, maxHeaderSize: B, partHwm: b.highWaterMark, highWaterMark: t2.highWaterMark };
      this.parser = new o(N), this.parser.on("drain", function() {
        if (s2._needDrain = false, s2._cb && !s2._pause) {
          const e3 = s2._cb;
          s2._cb = void 0, e3();
        }
      }).on("part", function t3(o2) {
        if (++s2._nparts > T) return s2.parser.removeListener("part", t3), s2.parser.on("part", g), e2.hitPartsLimit = true, e2.emit("partsLimit"), g(o2);
        if (J) {
          const e3 = J;
          e3.emit("end"), e3.removeAllListeners("end");
        }
        o2.on("header", function(t4) {
          let l2, u2, f3, w2, _2, T2, R2, B2, O2 = 0;
          if (t4["content-type"] && (f3 = i(t4["content-type"][0]), f3[0])) {
            for (l2 = f3[0].toLowerCase(), r2 = 0, n2 = f3.length; r2 < n2; ++r2) if (p.test(f3[r2][0])) {
              w2 = f3[r2][1].toLowerCase();
              break;
            }
          }
          if (void 0 === l2 && (l2 = "text/plain"), void 0 === w2 && (w2 = A), !t4["content-disposition"]) return g(o2);
          if (f3 = i(t4["content-disposition"][0]), !d.test(f3[0])) return g(o2);
          for (r2 = 0, n2 = f3.length; r2 < n2; ++r2) h.test(f3[r2][0]) ? u2 = f3[r2][1] : m.test(f3[r2][0]) && (T2 = f3[r2][1], S || (T2 = c(T2)));
          if (_2 = t4["content-transfer-encoding"] ? t4["content-transfer-encoding"][0].toLowerCase() : "7bit", v(u2, l2, T2)) {
            if (M === k) return e2.hitFilesLimit || (e2.hitFilesLimit = true, e2.emit("filesLimit")), g(o2);
            if (++M, 0 === e2.listenerCount("file")) return void s2.parser._ignore();
            ++D;
            const t5 = new y(b);
            P = t5, t5.on("end", function() {
              if (--D, s2._pause = false, E(), s2._cb && !s2._needDrain) {
                const e3 = s2._cb;
                s2._cb = void 0, e3();
              }
            }), t5._read = function(e3) {
              if (s2._pause && (s2._pause = false, s2._cb && !s2._needDrain)) {
                const e4 = s2._cb;
                s2._cb = void 0, e4();
              }
            }, e2.emit("file", u2, t5, T2, _2, l2), R2 = function(e3) {
              if ((O2 += e3.length) > C) {
                const r3 = C - O2 + e3.length;
                return r3 > 0 && t5.push(e3.slice(0, r3)), t5.truncated = true, t5.bytesRead = C, o2.removeAllListeners("data"), void t5.emit("limit");
              }
              t5.push(e3) || (s2._pause = true), t5.bytesRead = O2;
            }, B2 = function() {
              P = void 0, t5.push(null);
            };
          } else {
            if (q === x) return e2.hitFieldsLimit || (e2.hitFieldsLimit = true, e2.emit("fieldsLimit")), g(o2);
            ++q, ++D;
            let t5 = "", r3 = false;
            J = o2, R2 = function(e3) {
              if ((O2 += e3.length) > I) {
                const n3 = I - (O2 - e3.length);
                t5 += e3.toString("binary", 0, n3), r3 = true, o2.removeAllListeners("data");
              } else t5 += e3.toString("binary");
            }, B2 = function() {
              J = void 0, t5.length && (t5 = a(t5, "binary", w2)), e2.emit("field", u2, t5, false, r3, _2, l2), --D, E();
            };
          }
          o2._readableState.sync = false, o2.on("data", R2), o2.on("end", B2);
        }).on("error", function(e3) {
          P && P.emit("error", e3);
        });
      }).on("error", function(t3) {
        e2.emit("error", t3);
      }).on("finish", function() {
        O = true, E();
      });
    }
    function g(e2) {
      e2.resume();
    }
    function y(e2) {
      n.call(this, e2), this.bytesRead = 0, this.truncated = false;
    }
    f.detect = /^multipart\/form-data/i, f.prototype.write = function(e2, t2) {
      const r2 = this.parser.write(e2);
      r2 && !this._pause ? t2() : (this._needDrain = !r2, this._cb = t2);
    }, f.prototype.end = function() {
      const e2 = this;
      e2.parser.writable ? e2.parser.end() : e2._boy._done || process.nextTick(function() {
        e2._boy._done = true, e2._boy.emit("finish");
      });
    }, s(y, n), y.prototype._read = function(e2) {
    }, e.exports = f;
  }