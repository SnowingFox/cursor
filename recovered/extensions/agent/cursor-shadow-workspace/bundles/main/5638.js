// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5638 range:450204..454341
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(e2, A2, t2) {
    "use strict";
    var n2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var A3, t3 = e3[Symbol.asyncIterator];
      return t3 ? t3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), A3 = {}, n3("next"), n3("throw"), n3("return"), A3[Symbol.asyncIterator] = function() {
        return this;
      }, A3);
      function n3(t4) {
        A3[t4] = e3[t4] && function(A4) {
          return new Promise(function(n4, r3) {
            (function(e4, A5, t5, n5) {
              Promise.resolve(n5).then(function(A6) {
                e4({ value: A6, done: t5 });
              }, A5);
            })(n4, r3, (A4 = e3[t4](A4)).done, A4.value);
          });
        };
      }
    }, r2 = this && this.__await || function(e3) {
      return this instanceof r2 ? (this.v = e3, this) : new r2(e3);
    }, o2 = this && this.__asyncGenerator || function(e3, A3, t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, o3 = t3.apply(e3, A3 || []), s2 = [];
      return n3 = {}, a("next"), a("throw"), a("return", function(e4) {
        return function(A4) {
          return Promise.resolve(A4).then(e4, l);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function a(e4, A4) {
        o3[e4] && (n3[e4] = function(A5) {
          return new Promise(function(t4, n4) {
            s2.push([e4, A5, t4, n4]) > 1 || i(e4, A5);
          });
        }, A4 && (n3[e4] = A4(n3[e4])));
      }
      function i(e4, A4) {
        try {
          (t4 = o3[e4](A4)).value instanceof r2 ? Promise.resolve(t4.value.v).then(c, l) : g(s2[0][2], t4);
        } catch (e5) {
          g(s2[0][3], e5);
        }
        var t4;
      }
      function c(e4) {
        i("next", e4);
      }
      function l(e4) {
        i("throw", e4);
      }
      function g(e4, A4) {
        e4(A4), s2.shift(), s2.length && i(s2[0][0], s2[0][1]);
      }
    };
    Object.defineProperty(A2, "__esModule", { value: true }), A2.protoDelimited = void 0;
    const s = t2(8831);
    A2.protoDelimited = { enc(e3, A3) {
      const t3 = e3.getType().runtime.bin.makeWriteOptions(A3);
      return t3.writerFactory().bytes(e3.toBinary(t3)).finish();
    }, dec(e3, A3, t3) {
      const n3 = e3.runtime.bin.makeReadOptions(t3);
      return e3.fromBinary(n3.readerFactory(A3).bytes(), n3);
    }, decStream(e3, t3) {
      return o2(this, arguments, function* () {
        var o3, s2, a, i;
        function c(e4, A3) {
          const t4 = new Uint8Array(e4.byteLength + A3.byteLength);
          return t4.set(e4), t4.set(A3, e4.length), t4;
        }
        let l = new Uint8Array(0);
        try {
          for (var g, E = true, u = n2(t3); !(o3 = (g = yield r2(u.next())).done); E = true) {
            i = g.value, E = false;
            for (l = c(l, i); ; ) {
              const t4 = A2.protoDelimited.peekSize(l);
              if (t4.eof) break;
              if (t4.offset + t4.size > l.byteLength) break;
              yield yield r2(A2.protoDelimited.dec(e3, l)), l = l.subarray(t4.offset + t4.size);
            }
          }
        } catch (e4) {
          s2 = { error: e4 };
        } finally {
          try {
            E || o3 || !(a = u.return) || (yield r2(a.call(u)));
          } finally {
            if (s2) throw s2.error;
          }
        }
        if (l.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const A3 = { eof: true, size: null, offset: null };
      for (let t3 = 0; t3 < 10; t3++) {
        if (t3 > e3.byteLength) return A3;
        if (!(128 & e3[t3])) {
          const t4 = new s.BinaryReader(e3);
          let n3;
          try {
            n3 = t4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return A3;
            throw e4;
          }
          return { eof: false, size: n3, offset: t4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }