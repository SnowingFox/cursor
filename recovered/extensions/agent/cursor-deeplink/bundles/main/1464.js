// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1464 range:160842..166325
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1464: (e2, t2, A2) => {
    "use strict";
    const { Readable: n2 } = A2(7075), { inherits: r2 } = A2(7975), o2 = A2(7710), s = A2(1537), i = A2(491), a = A2(6388), c = A2(5529), l = /^boundary$/i, u = /^form-data$/i, g = /^charset$/i, E = /^filename$/i, h = /^name$/i;
    function d(e3, t3) {
      let A3, n3;
      const r3 = this;
      let d2;
      const Q = t3.limits, f = t3.isPartAFile || ((e4, t4, A4) => "application/octet-stream" === t4 || void 0 !== A4), C = t3.parsedConType || [], p = t3.defCharset || "utf8", m = t3.preservePath, y = { highWaterMark: t3.fileHwm };
      for (A3 = 0, n3 = C.length; A3 < n3; ++A3) if (Array.isArray(C[A3]) && l.test(C[A3][0])) {
        d2 = C[A3][1];
        break;
      }
      function w() {
        0 === L && _ && !e3._done && (_ = false, r3.end());
      }
      if ("string" != typeof d2) throw new Error("Multipart: Boundary not found");
      const k = c(Q, "fieldSize", 1048576), b = c(Q, "fileSize", 1 / 0), N = c(Q, "files", 1 / 0), T = c(Q, "fields", 1 / 0), D = c(Q, "parts", 1 / 0), S = c(Q, "headerPairs", 2e3), R = c(Q, "headerSize", 81920);
      let F, v, M = 0, U = 0, L = 0, _ = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e3;
      const J = { boundary: d2, maxHeaderPairs: S, maxHeaderSize: R, partHwm: y.highWaterMark, highWaterMark: t3.highWaterMark };
      this.parser = new o2(J), this.parser.on("drain", function() {
        if (r3._needDrain = false, r3._cb && !r3._pause) {
          const e4 = r3._cb;
          r3._cb = void 0, e4();
        }
      }).on("part", function t4(o3) {
        if (++r3._nparts > D) return r3.parser.removeListener("part", t4), r3.parser.on("part", I), e3.hitPartsLimit = true, e3.emit("partsLimit"), I(o3);
        if (v) {
          const e4 = v;
          e4.emit("end"), e4.removeAllListeners("end");
        }
        o3.on("header", function(t5) {
          let c2, l2, d3, Q2, C2, D2, S2, R2, _2 = 0;
          if (t5["content-type"] && (d3 = s(t5["content-type"][0]), d3[0])) {
            for (c2 = d3[0].toLowerCase(), A3 = 0, n3 = d3.length; A3 < n3; ++A3) if (g.test(d3[A3][0])) {
              Q2 = d3[A3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === c2 && (c2 = "text/plain"), void 0 === Q2 && (Q2 = p), !t5["content-disposition"]) return I(o3);
          if (d3 = s(t5["content-disposition"][0]), !u.test(d3[0])) return I(o3);
          for (A3 = 0, n3 = d3.length; A3 < n3; ++A3) h.test(d3[A3][0]) ? l2 = d3[A3][1] : E.test(d3[A3][0]) && (D2 = d3[A3][1], m || (D2 = a(D2)));
          if (C2 = t5["content-transfer-encoding"] ? t5["content-transfer-encoding"][0].toLowerCase() : "7bit", f(l2, c2, D2)) {
            if (M === N) return e3.hitFilesLimit || (e3.hitFilesLimit = true, e3.emit("filesLimit")), I(o3);
            if (++M, 0 === e3.listenerCount("file")) return void r3.parser._ignore();
            ++L;
            const t6 = new B(y);
            F = t6, t6.on("end", function() {
              if (--L, r3._pause = false, w(), r3._cb && !r3._needDrain) {
                const e4 = r3._cb;
                r3._cb = void 0, e4();
              }
            }), t6._read = function(e4) {
              if (r3._pause && (r3._pause = false, r3._cb && !r3._needDrain)) {
                const e5 = r3._cb;
                r3._cb = void 0, e5();
              }
            }, e3.emit("file", l2, t6, D2, C2, c2), S2 = function(e4) {
              if ((_2 += e4.length) > b) {
                const A4 = b - _2 + e4.length;
                return A4 > 0 && t6.push(e4.slice(0, A4)), t6.truncated = true, t6.bytesRead = b, o3.removeAllListeners("data"), void t6.emit("limit");
              }
              t6.push(e4) || (r3._pause = true), t6.bytesRead = _2;
            }, R2 = function() {
              F = void 0, t6.push(null);
            };
          } else {
            if (U === T) return e3.hitFieldsLimit || (e3.hitFieldsLimit = true, e3.emit("fieldsLimit")), I(o3);
            ++U, ++L;
            let t6 = "", A4 = false;
            v = o3, S2 = function(e4) {
              if ((_2 += e4.length) > k) {
                const n4 = k - (_2 - e4.length);
                t6 += e4.toString("binary", 0, n4), A4 = true, o3.removeAllListeners("data");
              } else t6 += e4.toString("binary");
            }, R2 = function() {
              v = void 0, t6.length && (t6 = i(t6, "binary", Q2)), e3.emit("field", l2, t6, false, A4, C2, c2), --L, w();
            };
          }
          o3._readableState.sync = false, o3.on("data", S2), o3.on("end", R2);
        }).on("error", function(e4) {
          F && F.emit("error", e4);
        });
      }).on("error", function(t4) {
        e3.emit("error", t4);
      }).on("finish", function() {
        _ = true, w();
      });
    }
    function I(e3) {
      e3.resume();
    }
    function B(e3) {
      n2.call(this, e3), this.bytesRead = 0, this.truncated = false;
    }
    d.detect = /^multipart\/form-data/i, d.prototype.write = function(e3, t3) {
      const A3 = this.parser.write(e3);
      A3 && !this._pause ? t3() : (this._needDrain = !A3, this._cb = t3);
    }, d.prototype.end = function() {
      const e3 = this;
      e3.parser.writable ? e3.parser.end() : e3._boy._done || process.nextTick(function() {
        e3._boy._done = true, e3._boy.emit("finish");
      });
    }, r2(B, n2), B.prototype._read = function(e3) {
    }, e2.exports = d;
  }