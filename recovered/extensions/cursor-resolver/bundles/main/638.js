// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 638 range:164083..168247
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
638: function(e2, t2, n2) {
    var r2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, n3 = e3[Symbol.asyncIterator];
      return n3 ? n3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, r3("next"), r3("throw"), r3("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function r3(n4) {
        t3[n4] = e3[n4] && function(t4) {
          return new Promise(function(r4, o3) {
            (function(e4, t5, n5, r5) {
              Promise.resolve(r5).then(function(t6) {
                e4({ value: t6, done: n5 });
              }, t5);
            })(r4, o3, (t4 = e3[n4](t4)).done, t4.value);
          });
        };
      }
    }, o2 = this && this.__await || function(e3) {
      return this instanceof o2 ? (this.v = e3, this) : new o2(e3);
    }, a2 = this && this.__asyncGenerator || function(e3, t3, n3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r3, a3 = n3.apply(e3, t3 || []), s3 = [];
      return r3 = {}, i2("next"), i2("throw"), i2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, c2);
        };
      }), r3[Symbol.asyncIterator] = function() {
        return this;
      }, r3;
      function i2(e4, t4) {
        a3[e4] && (r3[e4] = function(t5) {
          return new Promise(function(n4, r4) {
            s3.push([e4, t5, n4, r4]) > 1 || l2(e4, t5);
          });
        }, t4 && (r3[e4] = t4(r3[e4])));
      }
      function l2(e4, t4) {
        try {
          (n4 = a3[e4](t4)).value instanceof o2 ? Promise.resolve(n4.value.v).then(u2, c2) : m2(s3[0][2], n4);
        } catch (e5) {
          m2(s3[0][3], e5);
        }
        var n4;
      }
      function u2(e4) {
        l2("next", e4);
      }
      function c2(e4) {
        l2("throw", e4);
      }
      function m2(e4, t4) {
        e4(t4), s3.shift(), s3.length && l2(s3[0][0], s3[0][1]);
      }
    };
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoDelimited = void 0;
    const s2 = n2(831);
    t2.protoDelimited = { enc(e3, t3) {
      const n3 = e3.getType().runtime.bin.makeWriteOptions(t3);
      return n3.writerFactory().bytes(e3.toBinary(n3)).finish();
    }, dec(e3, t3, n3) {
      const r3 = e3.runtime.bin.makeReadOptions(n3);
      return e3.fromBinary(r3.readerFactory(t3).bytes(), r3);
    }, decStream(e3, n3) {
      return a2(this, arguments, function* () {
        var a3, s3, i2, l2;
        function u2(e4, t3) {
          const n4 = new Uint8Array(e4.byteLength + t3.byteLength);
          return n4.set(e4), n4.set(t3, e4.length), n4;
        }
        let c2 = new Uint8Array(0);
        try {
          for (var m2, p2 = true, d2 = r2(n3); !(a3 = (m2 = yield o2(d2.next())).done); p2 = true) {
            l2 = m2.value, p2 = false;
            for (c2 = u2(c2, l2); ; ) {
              const n4 = t2.protoDelimited.peekSize(c2);
              if (n4.eof) break;
              if (n4.offset + n4.size > c2.byteLength) break;
              yield yield o2(t2.protoDelimited.dec(e3, c2)), c2 = c2.subarray(n4.offset + n4.size);
            }
          }
        } catch (e4) {
          s3 = { error: e4 };
        } finally {
          try {
            p2 || a3 || !(i2 = d2.return) || (yield o2(i2.call(d2)));
          } finally {
            if (s3) throw s3.error;
          }
        }
        if (c2.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const t3 = { eof: true, size: null, offset: null };
      for (let n3 = 0; n3 < 10; n3++) {
        if (n3 > e3.byteLength) return t3;
        if (!(128 & e3[n3])) {
          const n4 = new s2.BinaryReader(e3);
          let r3;
          try {
            r3 = n4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return t3;
            throw e4;
          }
          return { eof: false, size: r3, offset: n4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }