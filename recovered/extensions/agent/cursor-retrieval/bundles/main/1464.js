// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1464 range:169672..175160
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1464: (e2, a2, n2) => {
    "use strict";
    const { Readable: t2 } = n2(7075), { inherits: s2 } = n2(7975), o2 = n2(7710), r2 = n2(1537), i2 = n2(491), l = n2(6388), d = n2(5529), m = /^boundary$/i, c = /^form-data$/i, p = /^charset$/i, A = /^filename$/i, u = /^name$/i;
    function g(e3, a3) {
      let n3, t3;
      const s3 = this;
      let g2;
      const k = a3.limits, _ = a3.isPartAFile || ((e4, a4, n4) => "application/octet-stream" === a4 || void 0 !== n4), E = a3.parsedConType || [], f = a3.defCharset || "utf8", C = a3.preservePath, I = { highWaterMark: a3.fileHwm };
      for (n3 = 0, t3 = E.length; n3 < t3; ++n3) if (Array.isArray(E[n3]) && m.test(E[n3][0])) {
        g2 = E[n3][1];
        break;
      }
      function v() {
        0 === U && F && !e3._done && (F = false, s3.end());
      }
      if ("string" != typeof g2) throw new Error("Multipart: Boundary not found");
      const y = d(k, "fieldSize", 1048576), S = d(k, "fileSize", 1 / 0), R = d(k, "files", 1 / 0), N = d(k, "fields", 1 / 0), B = d(k, "parts", 1 / 0), w = d(k, "headerPairs", 2e3), b = d(k, "headerSize", 81920);
      let Q, D, M = 0, O = 0, U = 0, F = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e3;
      const P = { boundary: g2, maxHeaderPairs: w, maxHeaderSize: b, partHwm: I.highWaterMark, highWaterMark: a3.highWaterMark };
      this.parser = new o2(P), this.parser.on("drain", function() {
        if (s3._needDrain = false, s3._cb && !s3._pause) {
          const e4 = s3._cb;
          s3._cb = void 0, e4();
        }
      }).on("part", function a4(o3) {
        if (++s3._nparts > B) return s3.parser.removeListener("part", a4), s3.parser.on("part", T), e3.hitPartsLimit = true, e3.emit("partsLimit"), T(o3);
        if (D) {
          const e4 = D;
          e4.emit("end"), e4.removeAllListeners("end");
        }
        o3.on("header", function(a5) {
          let d2, m2, g3, k2, E2, B2, w2, b2, F2 = 0;
          if (a5["content-type"] && (g3 = r2(a5["content-type"][0]), g3[0])) {
            for (d2 = g3[0].toLowerCase(), n3 = 0, t3 = g3.length; n3 < t3; ++n3) if (p.test(g3[n3][0])) {
              k2 = g3[n3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === d2 && (d2 = "text/plain"), void 0 === k2 && (k2 = f), !a5["content-disposition"]) return T(o3);
          if (g3 = r2(a5["content-disposition"][0]), !c.test(g3[0])) return T(o3);
          for (n3 = 0, t3 = g3.length; n3 < t3; ++n3) u.test(g3[n3][0]) ? m2 = g3[n3][1] : A.test(g3[n3][0]) && (B2 = g3[n3][1], C || (B2 = l(B2)));
          if (E2 = a5["content-transfer-encoding"] ? a5["content-transfer-encoding"][0].toLowerCase() : "7bit", _(m2, d2, B2)) {
            if (M === R) return e3.hitFilesLimit || (e3.hitFilesLimit = true, e3.emit("filesLimit")), T(o3);
            if (++M, 0 === e3.listenerCount("file")) return void s3.parser._ignore();
            ++U;
            const a6 = new h(I);
            Q = a6, a6.on("end", function() {
              if (--U, s3._pause = false, v(), s3._cb && !s3._needDrain) {
                const e4 = s3._cb;
                s3._cb = void 0, e4();
              }
            }), a6._read = function(e4) {
              if (s3._pause && (s3._pause = false, s3._cb && !s3._needDrain)) {
                const e5 = s3._cb;
                s3._cb = void 0, e5();
              }
            }, e3.emit("file", m2, a6, B2, E2, d2), w2 = function(e4) {
              if ((F2 += e4.length) > S) {
                const n4 = S - F2 + e4.length;
                return n4 > 0 && a6.push(e4.slice(0, n4)), a6.truncated = true, a6.bytesRead = S, o3.removeAllListeners("data"), void a6.emit("limit");
              }
              a6.push(e4) || (s3._pause = true), a6.bytesRead = F2;
            }, b2 = function() {
              Q = void 0, a6.push(null);
            };
          } else {
            if (O === N) return e3.hitFieldsLimit || (e3.hitFieldsLimit = true, e3.emit("fieldsLimit")), T(o3);
            ++O, ++U;
            let a6 = "", n4 = false;
            D = o3, w2 = function(e4) {
              if ((F2 += e4.length) > y) {
                const t4 = y - (F2 - e4.length);
                a6 += e4.toString("binary", 0, t4), n4 = true, o3.removeAllListeners("data");
              } else a6 += e4.toString("binary");
            }, b2 = function() {
              D = void 0, a6.length && (a6 = i2(a6, "binary", k2)), e3.emit("field", m2, a6, false, n4, E2, d2), --U, v();
            };
          }
          o3._readableState.sync = false, o3.on("data", w2), o3.on("end", b2);
        }).on("error", function(e4) {
          Q && Q.emit("error", e4);
        });
      }).on("error", function(a4) {
        e3.emit("error", a4);
      }).on("finish", function() {
        F = true, v();
      });
    }
    function T(e3) {
      e3.resume();
    }
    function h(e3) {
      t2.call(this, e3), this.bytesRead = 0, this.truncated = false;
    }
    g.detect = /^multipart\/form-data/i, g.prototype.write = function(e3, a3) {
      const n3 = this.parser.write(e3);
      n3 && !this._pause ? a3() : (this._needDrain = !n3, this._cb = a3);
    }, g.prototype.end = function() {
      const e3 = this;
      e3.parser.writable ? e3.parser.end() : e3._boy._done || process.nextTick(function() {
        e3._boy._done = true, e3._boy.emit("finish");
      });
    }, s2(h, t2), h.prototype._read = function(e3) {
    }, e2.exports = g;
  }