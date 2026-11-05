// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5638 range:450647..454793
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(e2, n2, a2) {
    "use strict";
    var t2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, a3 = e3[Symbol.asyncIterator];
      return a3 ? a3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), n3 = {}, t3("next"), t3("throw"), t3("return"), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3);
      function t3(a4) {
        n3[a4] = e3[a4] && function(n4) {
          return new Promise(function(t4, s3) {
            (function(e4, n5, a5, t5) {
              Promise.resolve(t5).then(function(n6) {
                e4({ value: n6, done: a5 });
              }, n5);
            })(t4, s3, (n4 = e3[a4](n4)).done, n4.value);
          });
        };
      }
    }, s2 = this && this.__await || function(e3) {
      return this instanceof s2 ? (this.v = e3, this) : new s2(e3);
    }, o2 = this && this.__asyncGenerator || function(e3, n3, a3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, o3 = a3.apply(e3, n3 || []), r3 = [];
      return t3 = {}, i2("next"), i2("throw"), i2("return", function(e4) {
        return function(n4) {
          return Promise.resolve(n4).then(e4, c);
        };
      }), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3;
      function i2(e4, n4) {
        o3[e4] && (t3[e4] = function(n5) {
          return new Promise(function(a4, t4) {
            r3.push([e4, n5, a4, t4]) > 1 || A(e4, n5);
          });
        }, n4 && (t3[e4] = n4(t3[e4])));
      }
      function A(e4, n4) {
        try {
          (a4 = o3[e4](n4)).value instanceof s2 ? Promise.resolve(a4.value.v).then(l, c) : m(r3[0][2], a4);
        } catch (e5) {
          m(r3[0][3], e5);
        }
        var a4;
      }
      function l(e4) {
        A("next", e4);
      }
      function c(e4) {
        A("throw", e4);
      }
      function m(e4, n4) {
        e4(n4), r3.shift(), r3.length && A(r3[0][0], r3[0][1]);
      }
    };
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoDelimited = void 0;
    const r2 = a2(8831);
    n2.protoDelimited = { enc(e3, n3) {
      const a3 = e3.getType().runtime.bin.makeWriteOptions(n3);
      return a3.writerFactory().bytes(e3.toBinary(a3)).finish();
    }, dec(e3, n3, a3) {
      const t3 = e3.runtime.bin.makeReadOptions(a3);
      return e3.fromBinary(t3.readerFactory(n3).bytes(), t3);
    }, decStream(e3, a3) {
      return o2(this, arguments, function* () {
        var o3, r3, i2, A;
        function l(e4, n3) {
          const a4 = new Uint8Array(e4.byteLength + n3.byteLength);
          return a4.set(e4), a4.set(n3, e4.length), a4;
        }
        let c = new Uint8Array(0);
        try {
          for (var m, d = true, g = t2(a3); !(o3 = (m = yield s2(g.next())).done); d = true) {
            A = m.value, d = false;
            for (c = l(c, A); ; ) {
              const a4 = n2.protoDelimited.peekSize(c);
              if (a4.eof) break;
              if (a4.offset + a4.size > c.byteLength) break;
              yield yield s2(n2.protoDelimited.dec(e3, c)), c = c.subarray(a4.offset + a4.size);
            }
          }
        } catch (e4) {
          r3 = { error: e4 };
        } finally {
          try {
            d || o3 || !(i2 = g.return) || (yield s2(i2.call(g)));
          } finally {
            if (r3) throw r3.error;
          }
        }
        if (c.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const n3 = { eof: true, size: null, offset: null };
      for (let a3 = 0; a3 < 10; a3++) {
        if (a3 > e3.byteLength) return n3;
        if (!(128 & e3[a3])) {
          const a4 = new r2.BinaryReader(e3);
          let t3;
          try {
            t3 = a4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return n3;
            throw e4;
          }
          return { eof: false, size: t3, offset: a4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }