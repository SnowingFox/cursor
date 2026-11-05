// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5638 range:481530..485667
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5638: function(e2, n2, t2) {
    "use strict";
    var a2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, t3 = e3[Symbol.asyncIterator];
      return t3 ? t3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), n3 = {}, a3("next"), a3("throw"), a3("return"), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3);
      function a3(t4) {
        n3[t4] = e3[t4] && function(n4) {
          return new Promise(function(a4, s3) {
            (function(e4, n5, t5, a5) {
              Promise.resolve(a5).then(function(n6) {
                e4({ value: n6, done: t5 });
              }, n5);
            })(a4, s3, (n4 = e3[t4](n4)).done, n4.value);
          });
        };
      }
    }, s2 = this && this.__await || function(e3) {
      return this instanceof s2 ? (this.v = e3, this) : new s2(e3);
    }, o2 = this && this.__asyncGenerator || function(e3, n3, t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var a3, o3 = t3.apply(e3, n3 || []), r2 = [];
      return a3 = {}, i("next"), i("throw"), i("return", function(e4) {
        return function(n4) {
          return Promise.resolve(n4).then(e4, l);
        };
      }), a3[Symbol.asyncIterator] = function() {
        return this;
      }, a3;
      function i(e4, n4) {
        o3[e4] && (a3[e4] = function(n5) {
          return new Promise(function(t4, a4) {
            r2.push([e4, n5, t4, a4]) > 1 || A(e4, n5);
          });
        }, n4 && (a3[e4] = n4(a3[e4])));
      }
      function A(e4, n4) {
        try {
          (t4 = o3[e4](n4)).value instanceof s2 ? Promise.resolve(t4.value.v).then(c, l) : d(r2[0][2], t4);
        } catch (e5) {
          d(r2[0][3], e5);
        }
        var t4;
      }
      function c(e4) {
        A("next", e4);
      }
      function l(e4) {
        A("throw", e4);
      }
      function d(e4, n4) {
        e4(n4), r2.shift(), r2.length && A(r2[0][0], r2[0][1]);
      }
    };
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoDelimited = void 0;
    const r = t2(8831);
    n2.protoDelimited = { enc(e3, n3) {
      const t3 = e3.getType().runtime.bin.makeWriteOptions(n3);
      return t3.writerFactory().bytes(e3.toBinary(t3)).finish();
    }, dec(e3, n3, t3) {
      const a3 = e3.runtime.bin.makeReadOptions(t3);
      return e3.fromBinary(a3.readerFactory(n3).bytes(), a3);
    }, decStream(e3, t3) {
      return o2(this, arguments, function* () {
        var o3, r2, i, A;
        function c(e4, n3) {
          const t4 = new Uint8Array(e4.byteLength + n3.byteLength);
          return t4.set(e4), t4.set(n3, e4.length), t4;
        }
        let l = new Uint8Array(0);
        try {
          for (var d, m = true, u = a2(t3); !(o3 = (d = yield s2(u.next())).done); m = true) {
            A = d.value, m = false;
            for (l = c(l, A); ; ) {
              const t4 = n2.protoDelimited.peekSize(l);
              if (t4.eof) break;
              if (t4.offset + t4.size > l.byteLength) break;
              yield yield s2(n2.protoDelimited.dec(e3, l)), l = l.subarray(t4.offset + t4.size);
            }
          }
        } catch (e4) {
          r2 = { error: e4 };
        } finally {
          try {
            m || o3 || !(i = u.return) || (yield s2(i.call(u)));
          } finally {
            if (r2) throw r2.error;
          }
        }
        if (l.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const n3 = { eof: true, size: null, offset: null };
      for (let t3 = 0; t3 < 10; t3++) {
        if (t3 > e3.byteLength) return n3;
        if (!(128 & e3[t3])) {
          const t4 = new r.BinaryReader(e3);
          let a3;
          try {
            a3 = t4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return n3;
            throw e4;
          }
          return { eof: false, size: a3, offset: t4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }