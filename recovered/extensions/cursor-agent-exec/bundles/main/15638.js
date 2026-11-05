// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 15638 range:927049..931168
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15638: function(e, t, r) {
    "use strict";
    var n = this && this.__asyncValues || function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, s = this && this.__await || function(e2) {
      return this instanceof s ? (this.v = e2, this) : new s(e2);
    }, o = this && this.__asyncGenerator || function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, o2 = r2.apply(e2, t2 || []), i2 = [];
      return n2 = {}, a("next"), a("throw"), a("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, u);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function a(e3, t3) {
        o2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            i2.push([e3, t4, r3, n3]) > 1 || c(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function c(e3, t3) {
        try {
          (r3 = o2[e3](t3)).value instanceof s ? Promise.resolve(r3.value.v).then(l, u) : d(i2[0][2], r3);
        } catch (e4) {
          d(i2[0][3], e4);
        }
        var r3;
      }
      function l(e3) {
        c("next", e3);
      }
      function u(e3) {
        c("throw", e3);
      }
      function d(e3, t3) {
        e3(t3), i2.shift(), i2.length && c(i2[0][0], i2[0][1]);
      }
    };
    Object.defineProperty(t, "__esModule", { value: true }), t.protoDelimited = void 0;
    const i = r(18831);
    t.protoDelimited = { enc(e2, t2) {
      const r2 = e2.getType().runtime.bin.makeWriteOptions(t2);
      return r2.writerFactory().bytes(e2.toBinary(r2)).finish();
    }, dec(e2, t2, r2) {
      const n2 = e2.runtime.bin.makeReadOptions(r2);
      return e2.fromBinary(n2.readerFactory(t2).bytes(), n2);
    }, decStream(e2, r2) {
      return o(this, arguments, function* () {
        var o2, i2, a, c;
        function l(e3, t2) {
          const r3 = new Uint8Array(e3.byteLength + t2.byteLength);
          return r3.set(e3), r3.set(t2, e3.length), r3;
        }
        let u = new Uint8Array(0);
        try {
          for (var d, p = true, m = n(r2); !(o2 = (d = yield s(m.next())).done); p = true) {
            c = d.value, p = false;
            for (u = l(u, c); ; ) {
              const r3 = t.protoDelimited.peekSize(u);
              if (r3.eof) break;
              if (r3.offset + r3.size > u.byteLength) break;
              yield yield s(t.protoDelimited.dec(e2, u)), u = u.subarray(r3.offset + r3.size);
            }
          }
        } catch (e3) {
          i2 = { error: e3 };
        } finally {
          try {
            p || o2 || !(a = m.return) || (yield s(a.call(m)));
          } finally {
            if (i2) throw i2.error;
          }
        }
        if (u.byteLength > 0) throw new Error("incomplete data");
      });
    }, peekSize(e2) {
      const t2 = { eof: true, size: null, offset: null };
      for (let r2 = 0; r2 < 10; r2++) {
        if (r2 > e2.byteLength) return t2;
        if (!(128 & e2[r2])) {
          const r3 = new i.BinaryReader(e2);
          let n2;
          try {
            n2 = r3.uint32();
          } catch (e3) {
            if (e3 instanceof RangeError) return t2;
            throw e3;
          }
          return { eof: false, size: n2, offset: r3.pos };
        }
      }
      throw new Error("invalid varint");
    } };
  }