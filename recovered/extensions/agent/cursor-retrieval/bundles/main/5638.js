// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5638 range:757042..761188
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(e2, a2, n2) {
    "use strict";
    var t2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var a3, n3 = e3[Symbol.asyncIterator];
      return n3 ? n3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), a3 = {}, t3("next"), t3("throw"), t3("return"), a3[Symbol.asyncIterator] = function() {
        return this;
      }, a3);
      function t3(n4) {
        a3[n4] = e3[n4] && function(a4) {
          return new Promise(function(t4, s3) {
            (function(e4, a5, n5, t5) {
              Promise.resolve(t5).then(function(a6) {
                e4({ value: a6, done: n5 });
              }, a5);
            })(t4, s3, (a4 = e3[n4](a4)).done, a4.value);
          });
        };
      }
    }, s2 = this && this.__await || function(e3) {
      return this instanceof s2 ? (this.v = e3, this) : new s2(e3);
    }, o2 = this && this.__asyncGenerator || function(e3, a3, n3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, o3 = n3.apply(e3, a3 || []), r3 = [];
      return t3 = {}, i2("next"), i2("throw"), i2("return", function(e4) {
        return function(a4) {
          return Promise.resolve(a4).then(e4, m);
        };
      }), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3;
      function i2(e4, a4) {
        o3[e4] && (t3[e4] = function(a5) {
          return new Promise(function(n4, t4) {
            r3.push([e4, a5, n4, t4]) > 1 || l(e4, a5);
          });
        }, a4 && (t3[e4] = a4(t3[e4])));
      }
      function l(e4, a4) {
        try {
          (n4 = o3[e4](a4)).value instanceof s2 ? Promise.resolve(n4.value.v).then(d, m) : c(r3[0][2], n4);
        } catch (e5) {
          c(r3[0][3], e5);
        }
        var n4;
      }
      function d(e4) {
        l("next", e4);
      }
      function m(e4) {
        l("throw", e4);
      }
      function c(e4, a4) {
        e4(a4), r3.shift(), r3.length && l(r3[0][0], r3[0][1]);
      }
    };
    Object.defineProperty(a2, "__esModule", { value: true }), a2.protoDelimited = void 0;
    const r2 = n2(8831);
    a2.protoDelimited = { enc(e3, a3) {
      const n3 = e3.getType().runtime.bin.makeWriteOptions(a3);
      return n3.writerFactory().bytes(e3.toBinary(n3)).finish();
    }, dec(e3, a3, n3) {
      const t3 = e3.runtime.bin.makeReadOptions(n3);
      return e3.fromBinary(t3.readerFactory(a3).bytes(), t3);
    }, decStream(e3, n3) {
      return o2(this, arguments, function* () {
        var o3, r3, i2, l;
        function d(e4, a3) {
          const n4 = new Uint8Array(e4.byteLength + a3.byteLength);
          return n4.set(e4), n4.set(a3, e4.length), n4;
        }
        let m = new Uint8Array(0);
        try {
          for (var c, p = true, A = t2(n3); !(o3 = (c = yield s2(A.next())).done); p = true) {
            l = c.value, p = false;
            for (m = d(m, l); ; ) {
              const n4 = a2.protoDelimited.peekSize(m);
              if (n4.eof) break;
              if (n4.offset + n4.size > m.byteLength) break;
              yield yield s2(a2.protoDelimited.dec(e3, m)), m = m.subarray(n4.offset + n4.size);
            }
          }
        } catch (e4) {
          r3 = { error: e4 };
        } finally {
          try {
            p || o3 || !(i2 = A.return) || (yield s2(i2.call(A)));
          } finally {
            if (r3) throw r3.error;
          }
        }
        if (m.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const a3 = { eof: true, size: null, offset: null };
      for (let n3 = 0; n3 < 10; n3++) {
        if (n3 > e3.byteLength) return a3;
        if (!(128 & e3[n3])) {
          const n4 = new r2.BinaryReader(e3);
          let t3;
          try {
            t3 = n4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return a3;
            throw e4;
          }
          return { eof: false, size: t3, offset: n4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }