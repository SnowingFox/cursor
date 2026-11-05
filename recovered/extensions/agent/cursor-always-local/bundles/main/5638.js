// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5638 range:1279387..1283526
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5638: function(t2, e2, r2) {
    "use strict";
    var n2 = this && this.__asyncValues || function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, s2 = this && this.__await || function(t3) {
      return this instanceof s2 ? (this.v = t3, this) : new s2(t3);
    }, i2 = this && this.__asyncGenerator || function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, i3 = r3.apply(t3, e3 || []), o3 = [];
      return n3 = {}, a("next"), a("throw"), a("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, l);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function a(t4, e4) {
        i3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            o3.push([t4, e5, r4, n4]) > 1 || u(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function u(t4, e4) {
        try {
          (r4 = i3[t4](e4)).value instanceof s2 ? Promise.resolve(r4.value.v).then(c, l) : m(o3[0][2], r4);
        } catch (t5) {
          m(o3[0][3], t5);
        }
        var r4;
      }
      function c(t4) {
        u("next", t4);
      }
      function l(t4) {
        u("throw", t4);
      }
      function m(t4, e4) {
        t4(e4), o3.shift(), o3.length && u(o3[0][0], o3[0][1]);
      }
    };
    Object.defineProperty(e2, "__esModule", { value: true }), e2.protoDelimited = void 0;
    const o2 = r2(8831);
    e2.protoDelimited = { enc(t3, e3) {
      const r3 = t3.getType().runtime.bin.makeWriteOptions(e3);
      return r3.writerFactory().bytes(t3.toBinary(r3)).finish();
    }, dec(t3, e3, r3) {
      const n3 = t3.runtime.bin.makeReadOptions(r3);
      return t3.fromBinary(n3.readerFactory(e3).bytes(), n3);
    }, decStream(t3, r3) {
      return i2(this, arguments, function* () {
        var i3, o3, a, u;
        function c(t4, e3) {
          const r4 = new Uint8Array(t4.byteLength + e3.byteLength);
          return r4.set(t4), r4.set(e3, t4.length), r4;
        }
        let l = new Uint8Array(0);
        try {
          for (var m, d = true, f = n2(r3); !(i3 = (m = yield s2(f.next())).done); d = true) {
            u = m.value, d = false;
            for (l = c(l, u); ; ) {
              const r4 = e2.protoDelimited.peekSize(l);
              if (r4.eof) break;
              if (r4.offset + r4.size > l.byteLength) break;
              yield yield s2(e2.protoDelimited.dec(t3, l)), l = l.subarray(r4.offset + r4.size);
            }
          }
        } catch (t4) {
          o3 = { error: t4 };
        } finally {
          try {
            d || i3 || !(a = f.return) || (yield s2(a.call(f)));
          } finally {
            if (o3) throw o3.error;
          }
        }
        if (l.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(t3) {
      const e3 = { eof: true, size: null, offset: null };
      for (let r3 = 0; r3 < 10; r3++) {
        if (r3 > t3.byteLength) return e3;
        if (!(128 & t3[r3])) {
          const r4 = new o2.BinaryReader(t3);
          let n3;
          try {
            n3 = r4.uint32();
          } catch (t4) {
            if (t4 instanceof RangeError) return e3;
            throw t4;
          }
          return { eof: false, size: n3, offset: r4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }