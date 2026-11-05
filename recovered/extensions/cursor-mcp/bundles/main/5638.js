// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5638 range:432651..436797
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5638: function(e2, t2, r2) {
    "use strict";
    var n2 = this && this.__asyncValues || function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, r3 = e3[Symbol.asyncIterator];
      return r3 ? r3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, n3("next"), n3("throw"), n3("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function n3(r4) {
        t3[r4] = e3[r4] && function(t4) {
          return new Promise(function(n4, o3) {
            (function(e4, t5, r5, n5) {
              Promise.resolve(n5).then(function(t6) {
                e4({ value: t6, done: r5 });
              }, t5);
            })(n4, o3, (t4 = e3[r4](t4)).done, t4.value);
          });
        };
      }
    }, o2 = this && this.__await || function(e3) {
      return this instanceof o2 ? (this.v = e3, this) : new o2(e3);
    }, s2 = this && this.__asyncGenerator || function(e3, t3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(e3, t3 || []), i3 = [];
      return n3 = {}, a2("next"), a2("throw"), a2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, l);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function a2(e4, t4) {
        s3[e4] && (n3[e4] = function(t5) {
          return new Promise(function(r4, n4) {
            i3.push([e4, t5, r4, n4]) > 1 || c(e4, t5);
          });
        }, t4 && (n3[e4] = t4(n3[e4])));
      }
      function c(e4, t4) {
        try {
          (r4 = s3[e4](t4)).value instanceof o2 ? Promise.resolve(r4.value.v).then(u, l) : d(i3[0][2], r4);
        } catch (e5) {
          d(i3[0][3], e5);
        }
        var r4;
      }
      function u(e4) {
        c("next", e4);
      }
      function l(e4) {
        c("throw", e4);
      }
      function d(e4, t4) {
        e4(t4), i3.shift(), i3.length && c(i3[0][0], i3[0][1]);
      }
    };
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoDelimited = void 0;
    const i2 = r2(8831);
    t2.protoDelimited = { enc(e3, t3) {
      const r3 = e3.getType().runtime.bin.makeWriteOptions(t3);
      return r3.writerFactory().bytes(e3.toBinary(r3)).finish();
    }, dec(e3, t3, r3) {
      const n3 = e3.runtime.bin.makeReadOptions(r3);
      return e3.fromBinary(n3.readerFactory(t3).bytes(), n3);
    }, decStream(e3, r3) {
      return s2(this, arguments, function* () {
        var s3, i3, a2, c;
        function u(e4, t3) {
          const r4 = new Uint8Array(e4.byteLength + t3.byteLength);
          return r4.set(e4), r4.set(t3, e4.length), r4;
        }
        let l = new Uint8Array(0);
        try {
          for (var d, p = true, f = n2(r3); !(s3 = (d = yield o2(f.next())).done); p = true) {
            c = d.value, p = false;
            for (l = u(l, c); ; ) {
              const r4 = t2.protoDelimited.peekSize(l);
              if (r4.eof) break;
              if (r4.offset + r4.size > l.byteLength) break;
              yield yield o2(t2.protoDelimited.dec(e3, l)), l = l.subarray(r4.offset + r4.size);
            }
          }
        } catch (e4) {
          i3 = { error: e4 };
        } finally {
          try {
            p || s3 || !(a2 = f.return) || (yield o2(a2.call(f)));
          } finally {
            if (i3) throw i3.error;
          }
        }
        if (l.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e3) {
      const t3 = { eof: true, size: null, offset: null };
      for (let r3 = 0; r3 < 10; r3++) {
        if (r3 > e3.byteLength) return t3;
        if (!(128 & e3[r3])) {
          const r4 = new i2.BinaryReader(e3);
          let n3;
          try {
            n3 = r4.uint32();
          } catch (e4) {
            if (e4 instanceof RangeError) return t3;
            throw e4;
          }
          return { eof: false, size: n3, offset: r4.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }