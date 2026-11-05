// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5638 range:163416..167826
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(e10, a10, n10) {
    var s10 = this && this.__asyncValues || function(e11) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var a11, n11 = e11[Symbol.asyncIterator];
      return n11 ? n11.call(e11) : (e11 = "function" == typeof __values ? __values(e11) : e11[Symbol.iterator](), a11 = {}, s11("next"), s11("throw"), s11("return"), a11[Symbol.asyncIterator] = function() {
        return this;
      }, a11);
      function s11(n12) {
        a11[n12] = e11[n12] && function(a12) {
          return new Promise(function(s12, o11) {
            (function(e12, a13, n13, s13) {
              Promise.resolve(s13).then(function(a14) {
                e12({ value: a14, done: n13 });
              }, a13);
            })(s12, o11, (a12 = e11[n12](a12)).done, a12.value);
          });
        };
      }
    }, o10 = this && this.__await || function(e11) {
      return this instanceof o10 ? (this.v = e11, this) : new o10(e11);
    }, r10 = this && this.__asyncGenerator || function(e11, a11, n11) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var s11, r11 = n11.apply(e11, a11 || []), t11 = [];
      return s11 = {}, i10("next"), i10("throw"), i10("return", function(e12) {
        return function(a12) {
          return Promise.resolve(a12).then(e12, d10);
        };
      }), s11[Symbol.asyncIterator] = function() {
        return this;
      }, s11;
      function i10(e12, a12) {
        r11[e12] && (s11[e12] = function(a13) {
          return new Promise(function(n12, s12) {
            t11.push([e12, a13, n12, s12]) > 1 || m10(e12, a13);
          });
        }, a12 && (s11[e12] = a12(s11[e12])));
      }
      function m10(e12, a12) {
        try {
          (n12 = r11[e12](a12)).value instanceof o10 ? Promise.resolve(n12.value.v).then(l10, d10) : c10(t11[0][2], n12);
        } catch (e13) {
          c10(t11[0][3], e13);
        }
        var n12;
      }
      function l10(e12) {
        m10("next", e12);
      }
      function d10(e12) {
        m10("throw", e12);
      }
      function c10(e12, a12) {
        e12(a12), t11.shift(), t11.length && m10(t11[0][0], t11[0][1]);
      }
    };
    Object.defineProperty(a10, "__esModule", { value: true }), a10.protoDelimited = void 0;
    const t10 = n10(8831);
    a10.protoDelimited = { enc(e11, a11) {
      const n11 = e11.getType().runtime.bin.makeWriteOptions(a11);
      return n11.writerFactory().bytes(e11.toBinary(n11)).finish();
    }, dec(e11, a11, n11) {
      const s11 = e11.runtime.bin.makeReadOptions(n11);
      return e11.fromBinary(s11.readerFactory(a11).bytes(), s11);
    }, decStream(e11, n11) {
      return r10(this, arguments, function* () {
        var r11, t11, i10, m10;
        function l10(e12, a11) {
          const n12 = new Uint8Array(e12.byteLength + a11.byteLength);
          return n12.set(e12), n12.set(a11, e12.length), n12;
        }
        let d10 = new Uint8Array(0);
        try {
          for (var c10, T10 = true, p10 = s10(n11); !(r11 = (c10 = yield o10(p10.next())).done); T10 = true) {
            m10 = c10.value, T10 = false;
            for (d10 = l10(d10, m10); ; ) {
              const n12 = a10.protoDelimited.peekSize(d10);
              if (n12.eof) break;
              if (n12.offset + n12.size > d10.byteLength) break;
              yield yield o10(a10.protoDelimited.dec(e11, d10)), d10 = d10.subarray(n12.offset + n12.size);
            }
          }
        } catch (e12) {
          t11 = { error: e12 };
        } finally {
          try {
            T10 || r11 || !(i10 = p10.return) || (yield o10(i10.call(p10)));
          } finally {
            if (t11) throw t11.error;
          }
        }
        if (d10.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e11) {
      const a11 = { eof: true, size: null, offset: null };
      for (let n11 = 0; n11 < 10; n11++) {
        if (n11 > e11.byteLength) return a11;
        if (!(128 & e11[n11])) {
          const n12 = new t10.BinaryReader(e11);
          let s11;
          try {
            s11 = n12.uint32();
          } catch (e12) {
            if (e12 instanceof RangeError) return a11;
            throw e12;
          }
          return { eof: false, size: s11, offset: n12.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }