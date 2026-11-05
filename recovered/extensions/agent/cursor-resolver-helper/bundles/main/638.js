// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 638 range:164083..168247
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
638: function(e2, a2, n2) {
    var o2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var a3, n3 = e3[Symbol.asyncIterator];
      return n3 ? n3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), a3 = {}, o3("next"), o3("throw"), o3("return"), a3[Symbol.asyncIterator] = function() {
        return this;
      }, a3);
      function o3(n4) {
        a3[n4] = e3[n4] && function(a4) {
          return new Promise(function(o4, s3) {
            (function(e4, a5, n5, o5) {
              Promise.resolve(o5).then(function(a6) {
                e4({ value: a6, done: n5 });
              }, a5);
            })(o4, s3, (a4 = e3[n4](a4)).done, a4.value);
          });
        };
      }
    }, s2 = this && this.__await || function(e3) {
      return this instanceof s2 ? (this.v = e3, this) : new s2(e3);
    }, t2 = this && this.__asyncGenerator || function(e3, a3, n3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var o3, t3 = n3.apply(e3, a3 || []), r3 = [];
      return o3 = {}, i2("next"), i2("throw"), i2("return", function(e4) {
        return function(a4) {
          return Promise.resolve(a4).then(e4, d2);
        };
      }), o3[Symbol.asyncIterator] = function() {
        return this;
      }, o3;
      function i2(e4, a4) {
        t3[e4] && (o3[e4] = function(a5) {
          return new Promise(function(n4, o4) {
            r3.push([e4, a5, n4, o4]) > 1 || m2(e4, a5);
          });
        }, a4 && (o3[e4] = a4(o3[e4])));
      }
      function m2(e4, a4) {
        try {
          (n4 = t3[e4](a4)).value instanceof s2 ? Promise.resolve(n4.value.v).then(l2, d2) : c2(r3[0][2], n4);
        } catch (e5) {
          c2(r3[0][3], e5);
        }
        var n4;
      }
      function l2(e4) {
        m2("next", e4);
      }
      function d2(e4) {
        m2("throw", e4);
      }
      function c2(e4, a4) {
        e4(a4), r3.shift(), r3.length && m2(r3[0][0], r3[0][1]);
      }
    };
    Object.defineProperty(a2, "__esModule", { value: true }), a2.protoDelimited = void 0;
    const r2 = n2(831);
    a2.protoDelimited = { enc(e3, a3) {
      const n3 = e3.getType().runtime.bin.makeWriteOptions(a3);
      return n3.writerFactory().bytes(e3.toBinary(n3)).finish();
    }, dec(e3, a3, n3) {
      const o3 = e3.runtime.bin.makeReadOptions(n3);
      return e3.fromBinary(o3.readerFactory(a3).bytes(), o3);
    }, decStream(e3, n3) {
      return t2(this, arguments, function* () {
        var t3, r3, i2, m2;
        function l2(e4, a3) {
          const n4 = new Uint8Array(e4.byteLength + a3.byteLength);
          return n4.set(e4), n4.set(a3, e4.length), n4;
        }
        let d2 = new Uint8Array(0);
        try {
          for (var c2, T2 = true, _2 = o2(n3); !(t3 = (c2 = yield s2(_2.next())).done); T2 = true) {
            m2 = c2.value, T2 = false;
            for (d2 = l2(d2, m2); ; ) {
              const n4 = a2.protoDelimited.peekSize(d2);
              if (n4.eof) break;
              if (n4.offset + n4.size > d2.byteLength) break;
              yield yield s2(a2.protoDelimited.dec(e3, d2)), d2 = d2.subarray(n4.offset + n4.size);
            }
          }
        } catch (e4) {
          r3 = { error: e4 };
        } finally {
          try {
            T2 || t3 || !(i2 = _2.return) || (yield s2(i2.call(_2)));
          } finally {
            if (r3) throw r3.error;
          }
        }
        if (d2.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const a3 = { eof: true, size: null, offset: null };
      for (let n3 = 0; n3 < 10; n3++) {
        if (n3 > e3.byteLength) return a3;
        if (!(128 & e3[n3])) {
          const n4 = new r2.BinaryReader(e3);
          let o3;
          try {
            o3 = n4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return a3;
            throw e4;
          }
          return { eof: false, size: o3, offset: n4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }