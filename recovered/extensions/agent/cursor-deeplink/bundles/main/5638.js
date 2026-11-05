// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5638 range:551698..555835
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(e2, t2, A2) {
    "use strict";
    var n2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, A3 = e3[Symbol.asyncIterator];
      return A3 ? A3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, n3("next"), n3("throw"), n3("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function n3(A4) {
        t3[A4] = e3[A4] && function(t4) {
          return new Promise(function(n4, r3) {
            (function(e4, t5, A5, n5) {
              Promise.resolve(n5).then(function(t6) {
                e4({ value: t6, done: A5 });
              }, t5);
            })(n4, r3, (t4 = e3[A4](t4)).done, t4.value);
          });
        };
      }
    }, r2 = this && this.__await || function(e3) {
      return this instanceof r2 ? (this.v = e3, this) : new r2(e3);
    }, o2 = this && this.__asyncGenerator || function(e3, t3, A3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, o3 = A3.apply(e3, t3 || []), s2 = [];
      return n3 = {}, i("next"), i("throw"), i("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, l);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function i(e4, t4) {
        o3[e4] && (n3[e4] = function(t5) {
          return new Promise(function(A4, n4) {
            s2.push([e4, t5, A4, n4]) > 1 || a(e4, t5);
          });
        }, t4 && (n3[e4] = t4(n3[e4])));
      }
      function a(e4, t4) {
        try {
          (A4 = o3[e4](t4)).value instanceof r2 ? Promise.resolve(A4.value.v).then(c, l) : u(s2[0][2], A4);
        } catch (e5) {
          u(s2[0][3], e5);
        }
        var A4;
      }
      function c(e4) {
        a("next", e4);
      }
      function l(e4) {
        a("throw", e4);
      }
      function u(e4, t4) {
        e4(t4), s2.shift(), s2.length && a(s2[0][0], s2[0][1]);
      }
    };
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoDelimited = void 0;
    const s = A2(8831);
    t2.protoDelimited = { enc(e3, t3) {
      const A3 = e3.getType().runtime.bin.makeWriteOptions(t3);
      return A3.writerFactory().bytes(e3.toBinary(A3)).finish();
    }, dec(e3, t3, A3) {
      const n3 = e3.runtime.bin.makeReadOptions(A3);
      return e3.fromBinary(n3.readerFactory(t3).bytes(), n3);
    }, decStream(e3, A3) {
      return o2(this, arguments, function* () {
        var o3, s2, i, a;
        function c(e4, t3) {
          const A4 = new Uint8Array(e4.byteLength + t3.byteLength);
          return A4.set(e4), A4.set(t3, e4.length), A4;
        }
        let l = new Uint8Array(0);
        try {
          for (var u, g = true, E = n2(A3); !(o3 = (u = yield r2(E.next())).done); g = true) {
            a = u.value, g = false;
            for (l = c(l, a); ; ) {
              const A4 = t2.protoDelimited.peekSize(l);
              if (A4.eof) break;
              if (A4.offset + A4.size > l.byteLength) break;
              yield yield r2(t2.protoDelimited.dec(e3, l)), l = l.subarray(A4.offset + A4.size);
            }
          }
        } catch (e4) {
          s2 = { error: e4 };
        } finally {
          try {
            g || o3 || !(i = E.return) || (yield r2(i.call(E)));
          } finally {
            if (s2) throw s2.error;
          }
        }
        if (l.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const t3 = { eof: true, size: null, offset: null };
      for (let A3 = 0; A3 < 10; A3++) {
        if (A3 > e3.byteLength) return t3;
        if (!(128 & e3[A3])) {
          const A4 = new s.BinaryReader(e3);
          let n3;
          try {
            n3 = A4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return t3;
            throw e4;
          }
          return { eof: false, size: n3, offset: A4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }