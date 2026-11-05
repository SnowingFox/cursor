// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1464 range:154756..160239
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1464: (e2, A2, t2) => {
    "use strict";
    const { Readable: n2 } = t2(7075), { inherits: r2 } = t2(7975), o2 = t2(7710), s = t2(1537), a = t2(491), i = t2(6388), c = t2(5529), l = /^boundary$/i, g = /^form-data$/i, E = /^charset$/i, u = /^filename$/i, d = /^name$/i;
    function I(e3, A3) {
      let t3, n3;
      const r3 = this;
      let I2;
      const m = A3.limits, C = A3.isPartAFile || ((e4, A4, t4) => "application/octet-stream" === A4 || void 0 !== t4), B = A3.parsedConType || [], p = A3.defCharset || "utf8", f = A3.preservePath, y = { highWaterMark: A3.fileHwm };
      for (t3 = 0, n3 = B.length; t3 < n3; ++t3) if (Array.isArray(B[t3]) && l.test(B[t3][0])) {
        I2 = B[t3][1];
        break;
      }
      function T() {
        0 === U && M && !e3._done && (M = false, r3.end());
      }
      if ("string" != typeof I2) throw new Error("Multipart: Boundary not found");
      const k = c(m, "fieldSize", 1048576), w = c(m, "fileSize", 1 / 0), N = c(m, "files", 1 / 0), D = c(m, "fields", 1 / 0), R = c(m, "parts", 1 / 0), S = c(m, "headerPairs", 2e3), b = c(m, "headerSize", 81920);
      let F, _, v = 0, L = 0, U = 0, M = false;
      this._needDrain = false, this._pause = false, this._cb = void 0, this._nparts = 0, this._boy = e3;
      const O = { boundary: I2, maxHeaderPairs: S, maxHeaderSize: b, partHwm: y.highWaterMark, highWaterMark: A3.highWaterMark };
      this.parser = new o2(O), this.parser.on("drain", function() {
        if (r3._needDrain = false, r3._cb && !r3._pause) {
          const e4 = r3._cb;
          r3._cb = void 0, e4();
        }
      }).on("part", function A4(o3) {
        if (++r3._nparts > R) return r3.parser.removeListener("part", A4), r3.parser.on("part", h), e3.hitPartsLimit = true, e3.emit("partsLimit"), h(o3);
        if (_) {
          const e4 = _;
          e4.emit("end"), e4.removeAllListeners("end");
        }
        o3.on("header", function(A5) {
          let c2, l2, I3, m2, B2, R2, S2, b2, M2 = 0;
          if (A5["content-type"] && (I3 = s(A5["content-type"][0]), I3[0])) {
            for (c2 = I3[0].toLowerCase(), t3 = 0, n3 = I3.length; t3 < n3; ++t3) if (E.test(I3[t3][0])) {
              m2 = I3[t3][1].toLowerCase();
              break;
            }
          }
          if (void 0 === c2 && (c2 = "text/plain"), void 0 === m2 && (m2 = p), !A5["content-disposition"]) return h(o3);
          if (I3 = s(A5["content-disposition"][0]), !g.test(I3[0])) return h(o3);
          for (t3 = 0, n3 = I3.length; t3 < n3; ++t3) d.test(I3[t3][0]) ? l2 = I3[t3][1] : u.test(I3[t3][0]) && (R2 = I3[t3][1], f || (R2 = i(R2)));
          if (B2 = A5["content-transfer-encoding"] ? A5["content-transfer-encoding"][0].toLowerCase() : "7bit", C(l2, c2, R2)) {
            if (v === N) return e3.hitFilesLimit || (e3.hitFilesLimit = true, e3.emit("filesLimit")), h(o3);
            if (++v, 0 === e3.listenerCount("file")) return void r3.parser._ignore();
            ++U;
            const A6 = new Q(y);
            F = A6, A6.on("end", function() {
              if (--U, r3._pause = false, T(), r3._cb && !r3._needDrain) {
                const e4 = r3._cb;
                r3._cb = void 0, e4();
              }
            }), A6._read = function(e4) {
              if (r3._pause && (r3._pause = false, r3._cb && !r3._needDrain)) {
                const e5 = r3._cb;
                r3._cb = void 0, e5();
              }
            }, e3.emit("file", l2, A6, R2, B2, c2), S2 = function(e4) {
              if ((M2 += e4.length) > w) {
                const t4 = w - M2 + e4.length;
                return t4 > 0 && A6.push(e4.slice(0, t4)), A6.truncated = true, A6.bytesRead = w, o3.removeAllListeners("data"), void A6.emit("limit");
              }
              A6.push(e4) || (r3._pause = true), A6.bytesRead = M2;
            }, b2 = function() {
              F = void 0, A6.push(null);
            };
          } else {
            if (L === D) return e3.hitFieldsLimit || (e3.hitFieldsLimit = true, e3.emit("fieldsLimit")), h(o3);
            ++L, ++U;
            let A6 = "", t4 = false;
            _ = o3, S2 = function(e4) {
              if ((M2 += e4.length) > k) {
                const n4 = k - (M2 - e4.length);
                A6 += e4.toString("binary", 0, n4), t4 = true, o3.removeAllListeners("data");
              } else A6 += e4.toString("binary");
            }, b2 = function() {
              _ = void 0, A6.length && (A6 = a(A6, "binary", m2)), e3.emit("field", l2, A6, false, t4, B2, c2), --U, T();
            };
          }
          o3._readableState.sync = false, o3.on("data", S2), o3.on("end", b2);
        }).on("error", function(e4) {
          F && F.emit("error", e4);
        });
      }).on("error", function(A4) {
        e3.emit("error", A4);
      }).on("finish", function() {
        M = true, T();
      });
    }
    function h(e3) {
      e3.resume();
    }
    function Q(e3) {
      n2.call(this, e3), this.bytesRead = 0, this.truncated = false;
    }
    I.detect = /^multipart\/form-data/i, I.prototype.write = function(e3, A3) {
      const t3 = this.parser.write(e3);
      t3 && !this._pause ? A3() : (this._needDrain = !t3, this._cb = A3);
    }, I.prototype.end = function() {
      const e3 = this;
      e3.parser.writable ? e3.parser.end() : e3._boy._done || process.nextTick(function() {
        e3._boy._done = true, e3._boy.emit("finish");
      });
    }, r2(Q, n2), Q.prototype._read = function(e3) {
    }, e2.exports = I;
  }