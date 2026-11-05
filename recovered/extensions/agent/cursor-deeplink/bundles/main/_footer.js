// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: (footer) range:855160..1107367
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
}, t = {};
  function A(n2) {
    var r2 = t[n2];
    if (void 0 !== r2) return r2.exports;
    var o2 = t[n2] = { id: n2, loaded: false, exports: {} };
    return e[n2].call(o2.exports, o2, o2.exports, A), o2.loaded = true, o2.exports;
  }
  A.d = (e2, t2) => {
    for (var n2 in t2) A.o(t2, n2) && !A.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
  }, A.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), A.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, A.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2);
  var n = {};
  (() => {
    "use strict";
    A.r(n), A.d(n, { activate: () => gi, deactivate: () => Ei });
    const e2 = require("vscode");
    async function t2(t3) {
      const A2 = new URLSearchParams(t3.query), n2 = A2.get("name"), r3 = A2.get("config");
      if (!n2 || !r3) return void e2.window.showErrorMessage('Missing "name" or "config" parameter in deep link.');
      let o3;
      try {
        const e3 = (s2 = r3, Buffer.from(s2, "base64").toString("utf8"));
        o3 = JSON.parse(e3);
      } catch (t4) {
        return void e2.window.showErrorMessage("Invalid server configuration provided: Not valid JSON.");
      }
      var s2;
      if ("object" != typeof o3 || null === o3) return void e2.window.showErrorMessage("Invalid server configuration provided: Must be a JSON object.");
      const i2 = o3;
      await e2.commands.executeCommand("aiSettings.action.open", "mcp"), await e2.commands.executeCommand("mcp.deeplinkInstall", n2, i2);
    }
    const r2 = 3e4;
    let o2;
    function s() {
      const t3 = e2.cursor.getCursorCreds()?.backendUrl, A2 = e2.cursor.getCursorAuthToken();
      if (t3 && A2) return { backendUrl: t3, accessToken: A2 };
    }
    function i() {
      const t3 = s();
      return t3 ? Promise.resolve(t3) : (o2 ??= (Promise.resolve(e2.cursor.triggerRefreshCursorAuthToken()).catch(() => {
      }), new Promise((t4, A2) => {
        const n2 = [], o3 = setTimeout(() => {
          i2(), A2(new Error("Timed out waiting for Cursor backend credentials"));
        }, r2), i2 = () => {
          clearTimeout(o3);
          for (const e3 of n2) e3.dispose();
        }, a2 = () => {
          const e3 = s();
          e3 && (i2(), t4(e3));
        };
        n2.push(e2.cursor.onDidChangeCursorAuthToken(a2), e2.cursor.onDidChangeCursorCreds(a2)), a2();
      })).finally(() => {
        o2 = void 0;
      }), o2);
    }
    var a, c = A(1609), l = A(6038);
    function u(e3) {
      const t3 = a[e3];
      return "string" != typeof t3 ? e3.toString() : t3[0].toLowerCase() + t3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4.toLowerCase());
    }
    let g;
    !(function(e3) {
      e3[e3.Canceled = 1] = "Canceled", e3[e3.Unknown = 2] = "Unknown", e3[e3.InvalidArgument = 3] = "InvalidArgument", e3[e3.DeadlineExceeded = 4] = "DeadlineExceeded", e3[e3.NotFound = 5] = "NotFound", e3[e3.AlreadyExists = 6] = "AlreadyExists", e3[e3.PermissionDenied = 7] = "PermissionDenied", e3[e3.ResourceExhausted = 8] = "ResourceExhausted", e3[e3.FailedPrecondition = 9] = "FailedPrecondition", e3[e3.Aborted = 10] = "Aborted", e3[e3.OutOfRange = 11] = "OutOfRange", e3[e3.Unimplemented = 12] = "Unimplemented", e3[e3.Internal = 13] = "Internal", e3[e3.Unavailable = 14] = "Unavailable", e3[e3.DataLoss = 15] = "DataLoss", e3[e3.Unauthenticated = 16] = "Unauthenticated";
    })(a || (a = {}));
    class E extends Error {
      constructor(e3, t3 = a.Unknown, A2, n2, r3) {
        super((function(e4, t4) {
          return e4.length ? `[${u(t4)}] ${e4}` : `[${u(t4)}]`;
        })(e3, t3)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e3, this.code = t3, this.metadata = new Headers(null != A2 ? A2 : {}), this.details = null != n2 ? n2 : [], this.cause = r3;
      }
      static from(e3, t3 = a.Unknown) {
        return e3 instanceof E ? e3 : e3 instanceof Error ? "AbortError" == e3.name ? new E(e3.message, a.Canceled) : new E(e3.message, t3, void 0, void 0, e3) : new E(String(e3), t3, void 0, void 0, e3);
      }
      static [Symbol.hasInstance](e3) {
        return e3 instanceof Error && (Object.getPrototypeOf(e3) === E.prototype || "ConnectError" === e3.name && "code" in e3 && "number" == typeof e3.code && "metadata" in e3 && "details" in e3 && Array.isArray(e3.details) && "rawMessage" in e3 && "string" == typeof e3.rawMessage && "cause" in e3);
      }
      findDetails(e3) {
        const t3 = "typeName" in e3 ? { findMessage: (t4) => t4 === e3.typeName ? e3 : void 0 } : e3, A2 = [];
        for (const e4 of this.details) {
          if ("getType" in e4) {
            t3.findMessage(e4.getType().typeName) && A2.push(e4);
            continue;
          }
          const n2 = t3.findMessage(e4.type);
          if (n2) try {
            A2.push(n2.fromBinary(e4.value));
          } catch (e5) {
          }
        }
        return A2;
      }
    }
    const h = 1;
    const d = 4294967295, I = d, B = 1024;
    function Q(e3, t3, A2 = false) {
      if (t3 > e3) {
        let n2 = `message size is larger than configured readMaxBytes ${e3}`;
        throw A2 && (n2 = `message size ${t3} is larger than configured readMaxBytes ${e3}`), new E(n2, a.ResourceExhausted);
      }
    }
    function f(e3) {
      return new C(e3);
    }
    class C {
      constructor(e3) {
        this.readMaxBytes = e3, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
      }
      get byteLength() {
        return this.buf.reduce((e3, t3) => e3 + t3.byteLength, 0);
      }
      decode(e3) {
        this.buf.push(e3);
        const t3 = [];
        for (; ; ) {
          let e4 = this.pop();
          if (!e4) break;
          t3.push(e4);
        }
        return t3;
      }
      pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
          const e3 = this.env;
          return this.env = void 0, e3;
        }
      }
      head() {
        if (!this.cons(this.header)) return;
        const e3 = this.headerView.getUint8(0), t3 = this.headerView.getUint32(1);
        return Q(this.readMaxBytes, t3, true), { flags: e3, data: new Uint8Array(t3) };
      }
      cons(e3) {
        const t3 = e3.byteLength;
        if (this.byteLength < t3) return false;
        let A2 = 0;
        for (; A2 < t3; ) {
          const n2 = this.buf.shift();
          n2.byteLength > t3 - A2 ? (e3.set(n2.subarray(0, t3 - A2), A2), this.buf.unshift(n2.subarray(t3 - A2)), A2 += t3 - A2) : (e3.set(n2, A2), A2 += n2.byteLength);
        }
        return true;
      }
    }
    async function p(e3, t3, A2) {
      let { flags: n2, data: r3 } = e3;
      if ((n2 & h) === h) throw new E("invalid envelope, already compressed", a.Internal);
      return t3 && r3.byteLength >= A2 && (r3 = await t3.compress(r3), n2 |= h), { data: r3, flags: n2 };
    }
    async function m(e3, t3, A2) {
      let { flags: n2, data: r3 } = e3;
      if ((n2 & h) === h) {
        if (!t3) throw new E("received compressed envelope, but do not know how to decompress", a.Internal);
        r3 = await t3.decompress(r3, A2), n2 ^= h;
      }
      return { data: r3, flags: n2 };
    }
    function y(e3, t3) {
      const A2 = new Uint8Array(t3.length + 5);
      A2.set(t3, 5);
      const n2 = new DataView(A2.buffer, A2.byteOffset, A2.byteLength);
      return n2.setUint8(0, e3), n2.setUint32(1, t3.length), A2;
    }
    var w = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, A2 = e3[Symbol.asyncIterator];
      return A2 ? A2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, n2("next"), n2("throw"), n2("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function n2(A3) {
        t3[A3] = e3[A3] && function(t4) {
          return new Promise(function(n3, r3) {
            (function(e4, t5, A4, n4) {
              Promise.resolve(n4).then(function(t6) {
                e4({ value: t6, done: A4 });
              }, t5);
            })(n3, r3, (t4 = e3[A3](t4)).done, t4.value);
          });
        };
      }
    }, k = function(e3) {
      return this instanceof k ? (this.v = e3, this) : new k(e3);
    }, b = function(e3, t3, A2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = A2.apply(e3, t3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, t4) {
        r3[e4] && (n2[e4] = function(t5) {
          return new Promise(function(A3, n3) {
            o3.push([e4, t5, A3, n3]) > 1 || i2(e4, t5);
          });
        }, t4 && (n2[e4] = t4(n2[e4])));
      }
      function i2(e4, t4) {
        try {
          (A3 = r3[e4](t4)).value instanceof k ? Promise.resolve(A3.value.v).then(a2, c2) : l2(o3[0][2], A3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var A3;
      }
      function a2(e4) {
        i2("next", e4);
      }
      function c2(e4) {
        i2("throw", e4);
      }
      function l2(e4, t4) {
        e4(t4), o3.shift(), o3.length && i2(o3[0][0], o3[0][1]);
      }
    }, N = function(e3) {
      var t3, A2;
      return t3 = {}, n2("next"), n2("throw", function(e4) {
        throw e4;
      }), n2("return"), t3[Symbol.iterator] = function() {
        return this;
      }, t3;
      function n2(n3, r3) {
        t3[n3] = e3[n3] ? function(t4) {
          return (A2 = !A2) ? { value: k(e3[n3](t4)), done: false } : r3 ? r3(t4) : t4;
        } : r3;
      }
    };
    function T(e3, ...t3) {
      return b(this, arguments, function* () {
        var A2;
        const [n2, r3] = (function(e4) {
          let t4;
          "function" != typeof e4[e4.length - 1] && (t4 = e4.pop());
          return [e4, t4];
        })(t3);
        let o3;
        const s2 = e3[Symbol.asyncIterator]();
        let i2 = { [Symbol.asyncIterator]: () => s2 };
        true === (null == r3 ? void 0 : r3.propagateDownStreamError) && (i2 = o3 = M(i2));
        for (const e4 of n2) i2 = e4(i2);
        const a2 = i2[Symbol.asyncIterator]();
        try {
          for (; ; ) {
            const e4 = yield k(a2.next());
            if (true === e4.done) break;
            if (o3) try {
              yield yield k(e4.value);
            } catch (e5) {
              throw yield k(o3.abort(e5)), e5;
            }
            else yield yield k(e4.value);
          }
        } finally {
          true === (null == r3 ? void 0 : r3.propagateDownStreamError) && (null === (A2 = s2.return) || void 0 === A2 || A2.call(s2).catch(() => {
          }));
        }
      });
    }
    function D(e3, t3, A2) {
      return void 0 === t3 || void 0 === A2 ? function(t4) {
        return b(this, arguments, function* () {
          var A3, n2, r3, o3;
          try {
            for (var s2, i2 = true, a2 = w(t4); !(A3 = (s2 = yield k(a2.next())).done); i2 = true) {
              o3 = s2.value, i2 = false;
              const t5 = o3, A4 = e3.serialize(t5);
              yield yield k({ flags: 0, data: A4 });
            }
          } catch (e4) {
            n2 = { error: e4 };
          } finally {
            try {
              i2 || A3 || !(r3 = a2.return) || (yield k(r3.call(a2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
        });
      } : function(n2) {
        return b(this, arguments, function* () {
          var r3, o3, s2, i2;
          try {
            for (var a2, c2 = true, l2 = w(n2); !(r3 = (a2 = yield k(l2.next())).done); c2 = true) {
              i2 = a2.value, c2 = false;
              const n3 = i2;
              let r4, o4 = 0;
              n3.end ? (o4 |= t3, r4 = A2.serialize(n3.value)) : r4 = e3.serialize(n3.value), yield yield k({ flags: o4, data: r4 });
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              c2 || r3 || !(s2 = l2.return) || (yield k(s2.call(l2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      };
    }
    function S(e3, t3, A2) {
      return A2 && void 0 !== t3 ? function(n2) {
        return b(this, arguments, function* () {
          var r3, o3, s2, i2;
          try {
            for (var a2, c2 = true, l2 = w(n2); !(r3 = (a2 = yield k(l2.next())).done); c2 = true) {
              i2 = a2.value, c2 = false;
              const { flags: n3, data: r4 } = i2;
              (n3 & t3) === t3 ? yield yield k({ value: A2.parse(r4), end: true }) : yield yield k({ value: e3.parse(r4), end: false });
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              c2 || r3 || !(s2 = l2.return) || (yield k(s2.call(l2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      } : function(n2) {
        return b(this, arguments, function* () {
          var r3, o3, s2, i2;
          try {
            for (var c2, l2 = true, u2 = w(n2); !(r3 = (c2 = yield k(u2.next())).done); l2 = true) {
              i2 = c2.value, l2 = false;
              const { flags: n3, data: r4 } = i2;
              if (void 0 === t3 || (n3 & t3) !== t3) yield yield k(e3.parse(r4));
              else if (null === A2) throw new E("unexpected end flag", a.InvalidArgument);
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              l2 || r3 || !(s2 = u2.return) || (yield k(s2.call(u2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      };
    }
    function R(e3, t3) {
      return function(A2) {
        return b(this, arguments, function* () {
          var n2, r3, o3, s2;
          try {
            for (var i2, a2 = true, c2 = w(A2); !(n2 = (i2 = yield k(c2.next())).done); a2 = true) {
              s2 = i2.value, a2 = false;
              const A3 = s2;
              yield yield k(yield k(p(A3, e3, t3)));
            }
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              a2 || n2 || !(o3 = c2.return) || (yield k(o3.call(c2)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      };
    }
    function F(e3, t3) {
      return function(A2) {
        return b(this, arguments, function* () {
          var n2, r3, o3, s2;
          try {
            for (var i2, a2 = true, c2 = w(A2); !(n2 = (i2 = yield k(c2.next())).done); a2 = true) {
              s2 = i2.value, a2 = false;
              const A3 = s2;
              yield yield k(yield k(m(A3, e3, t3)));
            }
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              a2 || n2 || !(o3 = c2.return) || (yield k(o3.call(c2)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      };
    }
    async function v(e3, t3, A2) {
      var n2, r3, o3, s2, i2, c2, l2, u2;
      const [g2, h2] = (function(e4) {
        if (null == e4) return [false, 0];
        const t4 = "string" == typeof e4 ? parseInt(e4, 10) : e4;
        if (!Number.isSafeInteger(t4) || t4 < 0) return [false, t4];
        return [true, t4];
      })(A2);
      if (g2) {
        h2 > t3 && Q(t3, h2, true);
        const A3 = new Uint8Array(h2);
        let i3 = 0;
        try {
          for (var d2, I2 = true, B2 = w(e3); !(n2 = (d2 = await B2.next()).done); I2 = true) {
            s2 = d2.value, I2 = false;
            const e4 = s2;
            if (i3 + e4.byteLength > h2) throw new E(`protocol error: promised ${h2} bytes, received ${i3 + e4.byteLength}`, a.InvalidArgument);
            A3.set(e4, i3), i3 += e4.byteLength;
          }
        } catch (e4) {
          r3 = { error: e4 };
        } finally {
          try {
            I2 || n2 || !(o3 = B2.return) || await o3.call(B2);
          } finally {
            if (r3) throw r3.error;
          }
        }
        if (i3 < h2) throw new E(`protocol error: promised ${h2} bytes, received ${i3}`, a.InvalidArgument);
        return A3;
      }
      const f2 = [];
      let C2 = 0;
      try {
        for (var p2, m2 = true, y2 = w(e3); !(i2 = (p2 = await y2.next()).done); m2 = true) {
          u2 = p2.value, m2 = false;
          const e4 = u2;
          C2 += e4.byteLength, Q(t3, C2), f2.push(e4);
        }
      } catch (e4) {
        c2 = { error: e4 };
      } finally {
        try {
          m2 || i2 || !(l2 = y2.return) || await l2.call(y2);
        } finally {
          if (c2) throw c2.error;
        }
      }
      const k2 = new Uint8Array(C2);
      let b2 = 0;
      for (let e4 = f2.shift(); e4; e4 = f2.shift()) k2.set(e4, b2), b2 += e4.byteLength;
      return k2;
    }
    function M(e3) {
      const t3 = e3[Symbol.asyncIterator]();
      if (void 0 === t3.throw) throw new Error("AsyncIterable does not implement throw");
      const A2 = t3;
      let n2, r3, o3 = { next: () => (r3 = A2.next().finally(() => {
        r3 = void 0;
      }), r3), throw: (e4) => A2.throw(e4) };
      void 0 !== t3.return && (o3 = Object.assign(Object.assign({}, o3), { return: (e4) => A2.return(e4) }));
      let s2 = false;
      return { abort(e4) {
        if (n2) return n2.state;
        const t4 = () => A2.throw(e4).then((e5) => true === e5.done ? "completed" : "caught", () => "rethrown");
        return r3 ? (n2 = { reason: e4, state: r3.then(t4, t4) }, n2.state) : (n2 = { reason: e4, state: t4() }, n2.state);
      }, [Symbol.asyncIterator]() {
        if (s2) throw new Error("AsyncIterable cannot be re-used");
        return s2 = true, o3;
      } };
    }
    function U(e3) {
      return b(this, arguments, function* () {
        yield k(yield* N(w(e3)));
      });
    }
    var L = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, A2 = e3[Symbol.asyncIterator];
      return A2 ? A2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, n2("next"), n2("throw"), n2("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function n2(A3) {
        t3[A3] = e3[A3] && function(t4) {
          return new Promise(function(n3, r3) {
            (function(e4, t5, A4, n4) {
              Promise.resolve(n4).then(function(t6) {
                e4({ value: t6, done: A4 });
              }, t5);
            })(n3, r3, (t4 = e3[A3](t4)).done, t4.value);
          });
        };
      }
    }, _ = function(e3) {
      return this instanceof _ ? (this.v = e3, this) : new _(e3);
    }, J = function(e3) {
      var t3, A2;
      return t3 = {}, n2("next"), n2("throw", function(e4) {
        throw e4;
      }), n2("return"), t3[Symbol.iterator] = function() {
        return this;
      }, t3;
      function n2(n3, r3) {
        t3[n3] = e3[n3] ? function(t4) {
          return (A2 = !A2) ? { value: _(e3[n3](t4)), done: false } : r3 ? r3(t4) : t4;
        } : r3;
      }
    }, O = function(e3, t3, A2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = A2.apply(e3, t3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, t4) {
        r3[e4] && (n2[e4] = function(t5) {
          return new Promise(function(A3, n3) {
            o3.push([e4, t5, A3, n3]) > 1 || i2(e4, t5);
          });
        }, t4 && (n2[e4] = t4(n2[e4])));
      }
      function i2(e4, t4) {
        try {
          (A3 = r3[e4](t4)).value instanceof _ ? Promise.resolve(A3.value.v).then(a2, c2) : l2(o3[0][2], A3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var A3;
      }
      function a2(e4) {
        i2("next", e4);
      }
      function c2(e4) {
        i2("throw", e4);
      }
      function l2(e4, t4) {
        e4(t4), o3.shift(), o3.length && i2(o3[0][0], o3[0][1]);
      }
    };
    function Y(e3, t3) {
      return (function(e4, t4) {
        const A2 = {};
        for (const [n2, r3] of Object.entries(e4.methods)) {
          const o3 = t4(Object.assign(Object.assign({}, r3), { localName: n2, service: e4 }));
          null != o3 && (A2[n2] = o3);
        }
        return A2;
      })(e3, (A2) => {
        switch (A2.kind) {
          case l.MethodKind.Unary:
            return /* @__PURE__ */ (function(e4, t4, A3) {
              return async function(n2, r3) {
                var o3, s2;
                const i2 = await e4.unary(t4, A3, null == r3 ? void 0 : r3.signal, null == r3 ? void 0 : r3.timeoutMs, null == r3 ? void 0 : r3.headers, n2, null == r3 ? void 0 : r3.contextValues);
                return null === (o3 = null == r3 ? void 0 : r3.onHeader) || void 0 === o3 || o3.call(r3, i2.header), null === (s2 = null == r3 ? void 0 : r3.onTrailer) || void 0 === s2 || s2.call(r3, i2.trailer), i2.message;
              };
            })(t3, e3, A2);
          case l.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e4, t4, A3) {
              return function(n2, r3) {
                return P(e4.stream(t4, A3, null == r3 ? void 0 : r3.signal, null == r3 ? void 0 : r3.timeoutMs, null == r3 ? void 0 : r3.headers, U([n2]), null == r3 ? void 0 : r3.contextValues), r3);
              };
            })(t3, e3, A2);
          case l.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(e4, t4, A3) {
              return async function(n2, r3) {
                var o3, s2, i2, c2, l2, u2;
                const g2 = await e4.stream(t4, A3, null == r3 ? void 0 : r3.signal, null == r3 ? void 0 : r3.timeoutMs, null == r3 ? void 0 : r3.headers, n2, null == r3 ? void 0 : r3.contextValues);
                let h2;
                null === (l2 = null == r3 ? void 0 : r3.onHeader) || void 0 === l2 || l2.call(r3, g2.header);
                let d2 = 0;
                try {
                  for (var I2, B2 = true, Q2 = L(g2.message); !(o3 = (I2 = await Q2.next()).done); B2 = true) {
                    c2 = I2.value, B2 = false;
                    h2 = c2, d2++;
                  }
                } catch (e5) {
                  s2 = { error: e5 };
                } finally {
                  try {
                    B2 || o3 || !(i2 = Q2.return) || await i2.call(Q2);
                  } finally {
                    if (s2) throw s2.error;
                  }
                }
                if (!h2) throw new E("protocol error: missing response message", a.Unimplemented);
                if (d2 > 1) throw new E("protocol error: received extra messages for client streaming method", a.Unimplemented);
                return null === (u2 = null == r3 ? void 0 : r3.onTrailer) || void 0 === u2 || u2.call(r3, g2.trailer), h2;
              };
            })(t3, e3, A2);
          case l.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(e4, t4, A3) {
              return function(n2, r3) {
                return P(e4.stream(t4, A3, null == r3 ? void 0 : r3.signal, null == r3 ? void 0 : r3.timeoutMs, null == r3 ? void 0 : r3.headers, n2, null == r3 ? void 0 : r3.contextValues), r3);
              };
            })(t3, e3, A2);
          default:
            return null;
        }
      });
    }
    function G(e3, t3) {
      return Y(e3, t3);
    }
    function P(e3, t3) {
      const A2 = (function() {
        return O(this, arguments, function* () {
          var A3, n2;
          const r3 = yield _(e3);
          null === (A3 = null == t3 ? void 0 : t3.onHeader) || void 0 === A3 || A3.call(t3, r3.header), yield _(yield* J(L(r3.message))), null === (n2 = null == t3 ? void 0 : t3.onTrailer) || void 0 === n2 || n2.call(t3, r3.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => A2.next() }) };
    }
    var V = A(5853);
    const [x] = process.versions.node.split(".").map((e3) => parseInt(e3, 10));
    x < 18 && void 0 === globalThis.Headers && (globalThis.Headers = V.Headers);
    var H, q = A(3106), W = A(9023);
    function j(e3) {
      let t3 = a.Internal;
      const A2 = K(e3).map(X);
      A2.some((e4) => "ERR_STREAM_WRITE_AFTER_END" == e4.code) || A2.some((e4) => "ERR_STREAM_DESTROYED" == e4.code || "ERR_HTTP2_INVALID_STREAM" == e4.code || "ECONNRESET" == e4.code) ? t3 = a.Aborted : A2.some((e4) => "ETIMEDOUT" == e4.code || "ENOTFOUND" == e4.code || "EAI_AGAIN" == e4.code || "ECONNREFUSED" == e4.code) && (t3 = a.Unavailable);
      const n2 = E.from(e3, t3);
      return n2 !== e3 && (n2.cause = e3), n2;
    }
    function K(e3) {
      const t3 = [];
      for (; e3 instanceof Error && !t3.includes(e3) && (t3.push(e3), "cause" in e3); ) e3 = e3.cause;
      return t3;
    }
    function X(e3) {
      const t3 = {};
      return e3 instanceof Error && ("code" in e3 && "string" == typeof e3.code && (t3.code = e3.code), "syscall" in e3 && "string" == typeof e3.syscall && (t3.syscall = e3.syscall)), t3;
    }
    !(function(e3) {
      e3[e3.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e3[e3.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e3[e3.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e3[e3.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e3[e3.STREAM_CLOSED = 5] = "STREAM_CLOSED", e3[e3.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e3[e3.REFUSED_STREAM = 7] = "REFUSED_STREAM", e3[e3.CANCEL = 8] = "CANCEL", e3[e3.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e3[e3.CONNECT_ERROR = 10] = "CONNECT_ERROR", e3[e3.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e3[e3.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e3[e3.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    })(H || (H = {}));
    const Z = (0, W.promisify)(q.gzip), z = (0, W.promisify)(q.gunzip), $ = (0, W.promisify)(q.brotliCompress), ee = (0, W.promisify)(q.brotliDecompress), te = { name: "gzip", compress: (e3) => Z(e3, {}), decompress: (e3, t3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : ne(z(e3, { maxOutputLength: t3 }), t3) }, Ae = { name: "br", compress: (e3) => $(e3, {}), decompress: (e3, t3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : ne(ee(e3, { maxOutputLength: t3 }), t3) };
    function ne(e3, t3) {
      return e3.catch((e4) => {
        const A2 = X(e4);
        let n2 = a.Internal, r3 = "decompression failed";
        switch (A2.code) {
          case "ERR_BUFFER_TOO_LARGE":
            n2 = a.ResourceExhausted, r3 = `message is larger than configured readMaxBytes ${t3} after decompression`;
            break;
          case "Z_DATA_ERROR":
          case "ERR_PADDING_2":
            n2 = a.InvalidArgument;
            break;
          default:
            void 0 !== A2.code && A2.code.startsWith("ERR__ERROR_FORMAT_") && (n2 = a.InvalidArgument);
        }
        return Promise.reject(new E(r3, n2, void 0, void 0, e4));
      });
    }
    var re = A(5675), oe = A(8611);
    const se = require("https");
    function ie(e3) {
      const t3 = new Headers();
      for (const [A2, n2] of Object.entries(e3)) if (!A2.startsWith(":") && void 0 !== n2) if ("string" == typeof n2) t3.append(A2, n2);
      else if ("number" == typeof n2) t3.append(A2, String(n2));
      else for (const e4 of n2) t3.append(A2, e4);
      return t3;
    }
    function ae(e3, t3) {
      if (void 0 === e3 && void 0 === t3) return;
      const A2 = /* @__PURE__ */ Object.create(null);
      if (void 0 !== t3) for (const [e4, n2] of Object.entries(t3)) Array.isArray(n2) ? A2[e4] = n2.concat() : void 0 !== n2 && (A2[e4] = n2);
      if (void 0 !== e3) if (Array.isArray(e3)) for (const [t4, n2] of e3) ce(A2, t4, n2);
      else if ("forEach" in e3) "function" == typeof e3.forEach && e3.forEach((e4, t4) => {
        ce(A2, t4, e4);
      });
      else for (const [t4, n2] of Object.entries(e3)) ce(A2, t4, n2);
      return A2;
    }
    function ce(e3, t3, A2) {
      const n2 = e3[t3 = t3.toLowerCase()];
      Array.isArray(n2) ? n2.push(A2) : e3[t3] = void 0 === n2 ? A2 : [n2.toString(), A2];
    }
    function le(e3) {
      if (!e3.aborted) return;
      if (void 0 !== e3.reason) return e3.reason;
      const t3 = new Error("This operation was aborted");
      return t3.name = "AbortError", t3;
    }
    class ue {
      state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
      }
      error() {
        if ("error" == this.s.t) return this.s.reason;
      }
      constructor(e3, t3, A2) {
        var n2, r3, o3, s2;
        this.s = { t: "closed" }, this.shuttingDown = [], this.authority = new URL(e3).origin, this.http2SessionOptions = A2, this.options = { pingIntervalMs: null !== (n2 = null == t3 ? void 0 : t3.pingIntervalMs) && void 0 !== n2 ? n2 : Number.POSITIVE_INFINITY, pingTimeoutMs: null !== (r3 = null == t3 ? void 0 : t3.pingTimeoutMs) && void 0 !== r3 ? r3 : 15e3, pingIdleConnection: null !== (o3 = null == t3 ? void 0 : t3.pingIdleConnection) && void 0 !== o3 && o3, idleConnectionTimeoutMs: null !== (s2 = null == t3 ? void 0 : t3.idleConnectionTimeoutMs) && void 0 !== s2 ? s2 : 9e5 };
      }
      async connect() {
        try {
          return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (e3) {
          return "error";
        }
      }
      async request(e3, t3, A2, n2) {
        for (; ; ) {
          const r3 = await this.gotoReady();
          try {
            const o3 = r3.conn.request(Object.assign(Object.assign({}, A2), { ":method": e3, ":path": t3 }), n2);
            return r3.registerRequest(o3), o3;
          } catch (e4) {
            if (r3.conn.closed || r3.conn.destroyed) continue;
            throw e4;
          }
        }
      }
      notifyResponseByteRead(e3) {
        "ready" == this.s.t && this.s.responseByteRead(e3);
        for (const t3 of this.shuttingDown) t3.responseByteRead(e3);
      }
      abort(e3) {
        var t3, A2, n2;
        const r3 = null != e3 ? e3 : new E("connection aborted", a.Canceled);
        null === (A2 = (t3 = this.s).abort) || void 0 === A2 || A2.call(t3, r3);
        for (const e4 of this.shuttingDown) null === (n2 = e4.abort) || void 0 === n2 || n2.call(e4, r3);
        this.setState(ge(r3));
      }
      abortCurrent(e3) {
        var t3, A2;
        const n2 = this.s;
        if ("ready" === n2.t && n2.isShuttingDown()) return;
        const r3 = null != e3 ? e3 : new E("connection aborted", a.Canceled);
        null === (A2 = (t3 = n2).abort) || void 0 === A2 || A2.call(t3, r3);
      }
      captureSessions() {
        const e3 = [];
        "function" == typeof this.s.abort && e3.push(this.s);
        for (const t3 of this.shuttingDown) -1 === e3.indexOf(t3) && e3.push(t3);
        return e3;
      }
      async gotoReady() {
        var e3;
        for ("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(Ee(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(Ee(this.authority, this.http2SessionOptions)); "ready" !== this.s.t; ) {
          if ("error" === this.s.t) throw this.s.reason;
          if ("unavailable" === this.s.t) throw new E("expected h2 session, but ALPN protocol failed to negotiate", a.Unavailable, { authority: this.authority, issuer: null !== (e3 = this.s.issuer) && void 0 !== e3 ? e3 : "unknown" });
          "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
      }
      setState(e3) {
        var t3, A2;
        if (null === (A2 = (t3 = this.s).onExitState) || void 0 === A2 || A2.call(t3), "ready" == this.s.t && this.s.isShuttingDown()) {
          const e4 = this.s;
          this.shuttingDown.push(e4), e4.onClose = e4.onError = () => {
            const t4 = this.shuttingDown.indexOf(e4);
            -1 !== t4 && this.shuttingDown.splice(t4, 1);
          };
        }
        switch (e3.t) {
          case "connecting":
            e3.conn.then((e4) => {
              this.setState((function(e5, t4) {
                var A3, n2;
                if ((function(e6) {
                  if (e6.connecting) throw new E("expected open session, but it is connecting", a.Internal);
                  if (e6.destroyed) throw new E("expected open session, but it is destroyed", a.Internal);
                  if (e6.closed) throw new E("expected open session, but it is closed", a.Internal);
                })(e5), true === e5.encrypted && "h2" !== e5.alpnProtocol) {
                  var r3 = e5.socket, o3 = null == r3 ? void 0 : r3.getPeerCertificate, s2 = "function" == typeof o3 ? null === (n2 = null === (A3 = o3.call(r3)) || void 0 === A3 ? void 0 : A3.issuer) || void 0 === n2 ? void 0 : n2.CN : void 0;
                  return e5.destroyed || e5.destroy(), { t: "unavailable", issuer: s2 };
                }
                e5.unref();
                let i2, c2, l2, u2 = Date.now(), g2 = 0, h2 = false, d2 = false;
                m2();
                const I2 = { t: "ready", conn: e5, streamCount: () => g2, requiresVerify: () => Date.now() - u2 > t4.pingIntervalMs, isShuttingDown: () => h2, onClose: void 0, onError: void 0, registerRequest(t5) {
                  g2++, 1 == g2 && (e5.ref(), B2(), p2()), t5.once("response", () => {
                    u2 = Date.now(), B2();
                  }), t5.once("close", () => {
                    g2--, 0 == g2 && (e5.unref(), B2(), m2());
                  });
                }, responseByteRead(t5) {
                  t5.session === e5 && (e5.closed || e5.destroyed || g2 <= 0 || (u2 = Date.now(), B2()));
                }, verify: () => (e5.ref(), new Promise((t5) => {
                  C2(() => {
                    0 == g2 && e5.unref(), t5(true);
                  }), e5.once("error", () => t5(false));
                })), abort(t5) {
                  e5.destroyed || (e5.once("error", () => {
                  }), e5.destroy(t5, re.constants.NGHTTP2_CANCEL));
                }, onExitState() {
                  I2.isShuttingDown() || (N2(), this.onError = void 0, this.onClose = void 0);
                } };
                function B2() {
                  Q2(), (g2 > 0 || t4.pingIdleConnection) && (i2 = he(f2, t4.pingIntervalMs));
                }
                function Q2() {
                  clearTimeout(i2), clearTimeout(c2);
                }
                function f2() {
                  C2(B2);
                }
                function C2(A4) {
                  clearTimeout(c2), c2 = he(() => {
                    e5.destroy(new E("PING timed out", a.Unavailable), re.constants.NGHTTP2_CANCEL);
                  }, t4.pingTimeoutMs), e5.ping((n3, r4) => {
                    clearTimeout(c2), null === n3 && (r4 > t4.pingTimeoutMs ? e5.destroy(new E("PING timed out", a.Unavailable), re.constants.NGHTTP2_CANCEL) : (u2 = Date.now(), A4()));
                  });
                }
                function p2() {
                  clearTimeout(l2);
                }
                function m2() {
                  l2 = he(y2, t4.idleConnectionTimeoutMs);
                }
                function y2() {
                  e5.close(), k2();
                }
                function w2(A4, n3, r4) {
                  h2 = true;
                  const o4 = Buffer.from("too_many_pings", "ascii");
                  if (A4 === re.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != r4 && r4.equals(o4) && (t4.pingIntervalMs = 2 * t4.pingIntervalMs, d2 = true), A4 === re.constants.NGHTTP2_NO_ERROR) {
                    const t5 = parseInt(process.versions.node.split(".")[0], 10);
                    0 == g2 && t5 >= 18 && e5.destroy(new E("received GOAWAY without any open streams", a.Canceled), re.constants.NGHTTP2_NO_ERROR);
                  }
                }
                function k2() {
                  var e6;
                  N2(), null === (e6 = I2.onClose) || void 0 === e6 || e6.call(I2);
                }
                function b2(e6) {
                  var t5, A4;
                  if (N2(), d2) {
                    const e7 = new E(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${re.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, a.ResourceExhausted);
                    null === (t5 = I2.onError) || void 0 === t5 || t5.call(I2, e7);
                  } else null === (A4 = I2.onError) || void 0 === A4 || A4.call(I2, j(e6));
                }
                function N2() {
                  Q2(), p2(), e5.off("error", b2), e5.off("close", k2), e5.off("goaway", w2);
                }
                return e5.on("error", b2), e5.on("close", k2), e5.on("goaway", w2), I2;
              })(e4, this.options));
            }, (e4) => {
              this.setState(ge(e4));
            });
            break;
          case "ready":
            e3.onClose = () => this.setState({ t: "closed" }), e3.onError = (e4) => this.setState(ge(e4));
        }
        this.s = e3;
      }
      verify(e3) {
        return void 0 !== this.verifying || (this.verifying = e3.verify().then((e4) => {
          e4 || this.setState(Ee(this.authority, this.http2SessionOptions));
        }, (e4) => {
          this.setState(ge(e4));
        }).finally(() => {
          this.verifying = void 0;
        })), this.verifying;
      }
    }
    function ge(e3) {
      return e3 instanceof E && E.from(e3).code == a.Canceled ? { t: "closed" } : /* @__PURE__ */ (function(e4) {
        return { t: "error", reason: e4 };
      })(e3);
    }
    function Ee(e3, t3) {
      let A2, n2;
      const r3 = new Promise((e4, t4) => {
        A2 = e4, n2 = t4;
      }), o3 = re.connect(e3, t3);
      function s2() {
        null == A2 || A2(o3), a2();
      }
      function i2(e4) {
        null == n2 || n2(j(e4)), a2();
      }
      function a2() {
        o3.off("connect", s2), o3.off("error", i2);
      }
      return o3.on("connect", s2), o3.on("error", i2), { t: "connecting", conn: r3, abort(e4) {
        o3.destroyed || o3.destroy(void 0, re.constants.NGHTTP2_CANCEL), null == n2 || n2(e4);
      }, onExitState() {
        a2();
      } };
    }
    function he(e3, t3) {
      if (!(t3 > 2147483647)) return setTimeout(e3, t3).unref();
    }
    function de(e3) {
      var t3, A2;
      if ("1.1" == e3.httpVersion) return A2 = e3.nodeOptions, async function(e4) {
        const t4 = Ce(e4.signal);
        return new Promise((n2, r3) => {
          t4.catch((e5) => {
            r3(e5);
          }), (function(e5, t5, A3, n3) {
            let r4;
            r4 = new URL(t5).protocol.startsWith("https") ? se.request(t5, A3) : oe.request(t5, A3), e5.catch((e6) => r4.destroy(j(e6))), r4.flushHeaders(), r4.on("error", e5.reject), r4.on("socket", function(e6) {
              function t6() {
                e6.off("connect", t6), n3(r4);
              }
              "open" === e6.readyState ? n3(r4) : e6.on("connect", t6);
            });
          })(t4, e4.url, Object.assign(Object.assign({}, A2), { headers: ae(e4.header, null == A2 ? void 0 : A2.headers), method: e4.method }), (A3) => {
            fe(e4, A3, t4), A3.on("response", (e5) => {
              var A4;
              e5.on("error", t4.reject), t4.catch((t5) => e5.destroy(j(t5)));
              const r4 = new Headers();
              n2({ status: null !== (A4 = e5.statusCode) && void 0 !== A4 ? A4 : 0, header: ie(e5.headers), body: Ie(t4, e5, r4), trailer: r4 });
            });
          });
        });
      };
      return /* @__PURE__ */ (function(e4) {
        return function(t4) {
          const A3 = Ce(t4.signal), n2 = e4(t4.url);
          return new Promise((e5, r3) => {
            A3.catch((e6) => {
              r3(e6);
            }), (function(e6, t5, A4, n3, r4, o3, s2) {
              const i2 = new URL(A4);
              if (i2.origin !== t5.authority) {
                const A5 = `cannot make a request to ${i2.origin}: the http2 session is connected to ${t5.authority}`;
                return void e6.reject(new E(A5, a.Internal));
              }
              t5.request(n3, i2.pathname + i2.search, r4, {}).then((t6) => {
                e6.catch((e7) => {
                  if (t6.closed) return;
                  const A5 = e7 instanceof E && e7.code == a.Canceled ? H.CANCEL : H.INTERNAL_ERROR;
                  return new Promise((e8) => t6.close(A5, e8));
                }), t6.on("error", function(A5) {
                  t6.writableEnded && K(A5).map(X).some((e7) => "ERR_STREAM_WRITE_AFTER_END" == e7.code) || e6.reject(A5);
                }), t6.on("close", function() {
                  const A5 = (function(e7) {
                    switch (e7) {
                      case H.PROTOCOL_ERROR:
                      case H.INTERNAL_ERROR:
                      case H.FLOW_CONTROL_ERROR:
                      case H.SETTINGS_TIMEOUT:
                      case H.FRAME_SIZE_ERROR:
                      case H.COMPRESSION_ERROR:
                      case H.CONNECT_ERROR:
                        return new E(`http/2 stream closed with error code ${H[e7]} (0x${e7.toString(16)})`, a.Internal);
                      case H.REFUSED_STREAM:
                        return new E(`http/2 stream closed with error code ${H[e7]} (0x${e7.toString(16)})`, a.Unavailable);
                      case H.CANCEL:
                        return new E(`http/2 stream closed with error code ${H[e7]} (0x${e7.toString(16)})`, a.Canceled);
                      case H.ENHANCE_YOUR_CALM:
                        return new E(`http/2 stream closed with error code ${H[e7]} (0x${e7.toString(16)})`, a.ResourceExhausted);
                      case H.INADEQUATE_SECURITY:
                      case H.HTTP_1_1_REQUIRED:
                        return new E(`http/2 stream closed with error code ${H[e7]} (0x${e7.toString(16)})`, a.PermissionDenied);
                      case H.STREAM_CLOSED:
                    }
                  })(t6.rstCode);
                  A5 && e6.reject(A5);
                }), s2(t6);
              }, (t6) => {
                e6.reject(t6);
              });
            })(A3, n2, t4.url, t4.method, ae(t4.header), 0, (r4) => {
              fe(t4, r4, A3), r4.on("response", (t5) => {
                var o3;
                const s2 = { status: null !== (o3 = t5[":status"]) && void 0 !== o3 ? o3 : 0, header: ie(t5), body: Qe(A3, r4, n2), trailer: Be(r4) };
                e5(s2);
              });
            });
          });
        };
      })(null !== (t3 = e3.sessionProvider) && void 0 !== t3 ? t3 : (e4) => new ue(e4));
    }
    function Ie(e3, t3, A2) {
      const n2 = t3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const r3 = await e3.race(n2.next());
        return true === r3.done && (ie(t3.trailers).forEach((e4, t4) => {
          A2.set(t4, e4);
        }), e3.resolve(), await e3), r3;
      }, throw(t4) {
        throw e3.reject(t4), t4;
      } }) };
    }
    function Be(e3) {
      const t3 = new Headers();
      return e3.on("trailers", (e4) => {
        ie(e4).forEach((e5, A2) => {
          t3.set(A2, e5);
        });
      }), t3;
    }
    function Qe(e3, t3, A2) {
      const n2 = t3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const r3 = await e3.race(n2.next());
        return true === r3.done && (e3.resolve(), await e3), null == A2 || A2.notifyResponseByteRead(t3), r3;
      }, throw(t4) {
        throw e3.reject(t4), t4;
      } }) };
    }
    async function fe(e3, t3, A2) {
      if (void 0 === e3.body) return void await new Promise((e4) => t3.end(e4));
      const n2 = e3.body[Symbol.asyncIterator]();
      return new Promise((e4) => {
        !(function r3() {
          if (A2.isRejected()) return;
          n2.next().then((o3) => {
            true !== o3.done ? t3.write(o3.value, "binary", function(e5) {
              null != e5 ? (void 0 !== n2.throw && n2.throw(j(e5)).catch(() => {
              }), t3.writableEnded && K(e5).map(X).some((e6) => "ERR_STREAM_WRITE_AFTER_END" == e6.code) || A2.reject(e5)) : r3();
            }) : t3.end(e4);
          }, (e5) => {
            A2.reject(e5);
          });
        })();
      });
    }
    function Ce(e3) {
      let t3, A2, n2 = false, r3 = false;
      const o3 = new Promise((e4, n3) => {
        t3 = e4, A2 = n3;
      }), s2 = { resolve() {
        n2 || r3 || (n2 = true, null == t3 || t3());
      }, isResolved: () => n2, reject(e4) {
        n2 || r3 || (r3 = true, null == A2 || A2(j(e4)));
      }, isRejected: () => r3, async race(e4) {
        const t4 = await Promise.race([e4, o3]);
        if (void 0 === t4 && n2) throw new E("sentinel completed early", a.Internal);
        return t4;
      } }, i2 = Object.assign(o3, s2);
      function c2() {
        s2.reject(le(this));
      }
      return e3 && (e3.aborted ? s2.reject(le(e3)) : e3.addEventListener("abort", c2), o3.finally(() => e3.removeEventListener("abort", c2)).catch(() => {
      })), i2;
    }
    function pe(e3) {
      var t3, A2, n2, r3;
      let o3;
      if ("2" == e3.httpVersion) {
        let t4;
        t4 = e3.sessionManager ? e3.sessionManager : new ue(e3.baseUrl, { pingIntervalMs: e3.pingIntervalMs, pingIdleConnection: e3.pingIdleConnection, pingTimeoutMs: e3.pingTimeoutMs, idleConnectionTimeoutMs: e3.idleConnectionTimeoutMs }, e3.nodeOptions), o3 = de({ httpVersion: "2", sessionProvider: () => t4 });
      } else o3 = de({ httpVersion: "1.1", nodeOptions: e3.nodeOptions });
      return Object.assign(Object.assign(Object.assign({}, e3), { httpClient: o3, useBinaryFormat: null === (t3 = e3.useBinaryFormat) || void 0 === t3 || t3, interceptors: null !== (A2 = e3.interceptors) && void 0 !== A2 ? A2 : [], sendCompression: null !== (n2 = e3.sendCompression) && void 0 !== n2 ? n2 : null, acceptCompression: null !== (r3 = e3.acceptCompression) && void 0 !== r3 ? r3 : [te, Ae] }), (function(e4, t4, A3) {
        if (null != t4 || (t4 = I), null != e4 || (e4 = d), null != A3 || (A3 = B), t4 < 1 || t4 > I) throw new E(`writeMaxBytes ${t4} must be >= 1 and <= ${I}`, a.Internal);
        if (e4 < 1 || e4 > d) throw new E(`readMaxBytes ${e4} must be >= 1 and <= ${d}`, a.Internal);
        return { readMaxBytes: e4, writeMaxBytes: t4, compressMinBytes: A3 };
      })(e3.readMaxBytes, e3.writeMaxBytes, e3.compressMinBytes));
    }
    const me = "Content-Type", ye = "Content-Length", we = "Content-Encoding", ke = "Connect-Content-Encoding", be = "Accept-Encoding", Ne = "Connect-Accept-Encoding", Te = "Connect-Timeout-Ms", De = "Connect-Protocol-Version", Se = "User-Agent", Re = "1";
    const Fe = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, ve = "application/proto", Me = "application/json", Ue = "application/connect+proto", Le = "application/connect+json";
    function _e(e3, t3, A2, n2, r3, o3, s2) {
      const i2 = (function(e4, t4, A3, n3, r4) {
        const o4 = new Headers(null != n3 ? n3 : {});
        return void 0 !== A3 && o4.set(Te, `${A3}`), o4.set(me, e4 == l.MethodKind.Unary ? t4 ? ve : Me : t4 ? Ue : Le), o4.set(De, Re), r4 && o4.set(Se, "connect-es/1.6.1"), o4;
      })(e3, t3, A2, n2, s2);
      if (null != o3) {
        const t4 = e3 == l.MethodKind.Unary ? we : ke;
        i2.set(t4, o3.name);
      }
      if (r3.length > 0) {
        const t4 = e3 == l.MethodKind.Unary ? be : Ne;
        i2.set(t4, r3.map((e4) => e4.name).join(","));
      }
      return i2;
    }
    function Je(e3, t3, A2, n2) {
      const r3 = n2.get(me), o3 = (function(e4) {
        if ("text/event-stream" === e4) return { stream: true, binary: true };
        const t4 = null == e4 ? void 0 : e4.match(Fe);
        if (!t4) return;
        return { stream: !!t4[1], binary: !!t4[3] };
      })(r3);
      if (200 !== A2) {
        const t4 = new E(`HTTP ${A2}`, (function(e4) {
          switch (e4) {
            case 400:
              return a.Internal;
            case 401:
              return a.Unauthenticated;
            case 403:
              return a.PermissionDenied;
            case 404:
              return a.Unimplemented;
            case 429:
            case 502:
            case 503:
            case 504:
              return a.Unavailable;
            default:
              return a.Unknown;
          }
        })(A2), n2);
        if (e3 == l.MethodKind.Unary && o3 && !o3.binary) return { isUnaryError: true, unaryError: t4 };
        throw t4;
      }
      const s2 = t3, i2 = e3 !== l.MethodKind.Unary;
      if ((null == o3 ? void 0 : o3.binary) !== s2 || o3.stream !== i2) throw new E(`unsupported content type ${r3}`, void 0 === o3 ? a.Unknown : a.Internal, n2);
      return { isUnaryError: false };
    }
    function Oe(e3, t3, A2, n2, r3) {
      let o3;
      const s2 = r3.get(e3 == l.MethodKind.Unary ? we : ke);
      if (null != s2 && "identity" !== s2.toLowerCase() && (o3 = t3.find((e4) => e4.name === s2), !o3)) throw new E(`unsupported response encoding "${s2}"`, a.Internal, r3);
      return Object.assign({ compression: o3 }, Je(e3, A2, n2, r3));
    }
    var Ye = function(e3, t3) {
      var A2 = {};
      for (var n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && t3.indexOf(n2) < 0 && (A2[n2] = e3[n2]);
      if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
        var r3 = 0;
        for (n2 = Object.getOwnPropertySymbols(e3); r3 < n2.length; r3++) t3.indexOf(n2[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n2[r3]) && (A2[n2[r3]] = e3[n2[r3]]);
      }
      return A2;
    };
    function Ge(e3, t3, A2) {
      var n2;
      if (t3 && new Headers(t3).forEach((e4, t4) => A2.metadata.append(t4, e4)), "object" != typeof e3 || null == e3 || Array.isArray(e3)) throw A2;
      let r3 = A2.code;
      "code" in e3 && "string" == typeof e3.code && (r3 = null !== (n2 = (function(e4) {
        if (!g) {
          g = {};
          for (const e5 of Object.values(a)) "string" != typeof e5 && (g[u(e5)] = e5);
        }
        return g[e4];
      })(e3.code)) && void 0 !== n2 ? n2 : r3);
      const o3 = e3.message;
      if (null != o3 && "string" != typeof o3) throw A2;
      const s2 = new E(null != o3 ? o3 : "", r3, t3);
      if ("details" in e3 && Array.isArray(e3.details)) for (const t4 of e3.details) {
        if (null === t4 || "object" != typeof t4 || Array.isArray(t4) || "string" != typeof t4.type || "string" != typeof t4.value) throw A2;
        try {
          s2.details.push({ type: t4.type, value: l.protoBase64.dec(t4.value), debug: t4.debug });
        } catch (e4) {
          throw A2;
        }
      }
      return s2;
    }
    function Pe(e3, t3) {
      const A2 = { code: u(e3.code) };
      return e3.rawMessage.length > 0 && (A2.message = e3.rawMessage), e3.details.length > 0 && (A2.details = e3.details.map((e4) => {
        if ("getType" in e4) {
          const A3 = { type: e4.getType().typeName, value: e4.toBinary() };
          try {
            A3.debug = e4.toJson(t3);
          } catch (e5) {
          }
          return A3;
        }
        return e4;
      }).map((e4) => {
        var { value: t4 } = e4, A3 = Ye(e4, ["value"]);
        return Object.assign(Object.assign({}, A3), { value: l.protoBase64.enc(t4).replace(/=+$/, "") });
      })), A2;
    }
    function Ve(...e3) {
      const t3 = new Headers();
      for (const A2 of e3) A2.forEach((e4, A3) => {
        t3.append(A3, e4);
      });
      return t3;
    }
    const xe = 2;
    function He(e3) {
      const t3 = new TextEncoder();
      return { serialize(A2) {
        try {
          const n2 = (function(e4, t4, A3) {
            const n3 = {};
            void 0 !== t4 && (n3.error = Pe(t4, A3), e4 = Ve(e4, t4.metadata));
            let r4 = false;
            const o3 = {};
            return e4.forEach((e5, t5) => {
              r4 = true, o3[t5] = [e5];
            }), r4 && (n3.metadata = o3), n3;
          })(A2.metadata, A2.error, e3), r3 = JSON.stringify(n2);
          return t3.encode(r3);
        } catch (e4) {
          const t4 = e4 instanceof Error ? e4.message : String(e4);
          throw new E(`failed to serialize EndStreamResponse: ${t4}`, a.Internal);
        }
      }, parse(e4) {
        try {
          return (function(e5) {
            const t4 = new E("invalid end stream", a.Unknown);
            let A2;
            try {
              A2 = JSON.parse("string" == typeof e5 ? e5 : new TextDecoder().decode(e5));
            } catch (e6) {
              throw t4;
            }
            if ("object" != typeof A2 || null == A2 || Array.isArray(A2)) throw t4;
            const n2 = new Headers();
            if ("metadata" in A2) {
              if ("object" != typeof A2.metadata || null == A2.metadata || Array.isArray(A2.metadata)) throw t4;
              for (const [e6, r3] of Object.entries(A2.metadata)) {
                if (!Array.isArray(r3) || r3.some((e7) => "string" != typeof e7)) throw t4;
                for (const t5 of r3) n2.append(e6, t5);
              }
            }
            return { metadata: n2, error: "error" in A2 && null != A2.error ? Ge(A2.error, n2, t4) : void 0 };
          })(e4);
        } catch (e5) {
          const t4 = e5 instanceof Error ? e5.message : String(e5);
          throw new E(`failed to parse EndStreamResponse: ${t4}`, a.InvalidArgument);
        }
      } };
    }
    const qe = "application/";
    function We(e3, t3, A2) {
      let n2 = `?connect=v${Re}`;
      const r3 = e3.header.get(me);
      0 === (null == r3 ? void 0 : r3.indexOf(qe)) && (n2 += "&encoding=" + encodeURIComponent(r3.slice(qe.length)));
      const o3 = e3.header.get(we);
      null !== o3 && "identity" !== o3 && (n2 += "&compression=" + encodeURIComponent(o3), A2 = true), A2 && (n2 += "&base64=1"), n2 += "&message=" + (function(e4, t4) {
        return t4 ? l.protoBase64.enc(e4).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent(new TextDecoder().decode(e4));
      })(t3, A2);
      const s2 = e3.url + n2, i2 = new Headers(e3.header);
      return [De, me, ye, we, be].forEach((e4) => i2.delete(e4)), Object.assign(Object.assign({}, e3), { init: Object.assign(Object.assign({}, e3.init), { method: "GET" }), url: s2, header: i2 });
    }
    function je(e3, t3, A2) {
      const n2 = "string" == typeof t3 ? t3 : t3.typeName, r3 = "string" == typeof A2 ? A2 : A2.name;
      return e3.toString().replace(/\/?$/, `/${n2}/${r3}`);
    }
    function Ke(e3, t3) {
      var A2;
      return null !== (A2 = null == t3 ? void 0 : t3.concat().reverse().reduce((e4, t4) => t4(e4), e3)) && void 0 !== A2 ? A2 : e3;
    }
    function Xe(e3, t3) {
      return t3 instanceof e3 ? t3 : new e3(t3);
    }
    function Ze(e3, t3) {
      function A2(t4) {
        return true === t4.done ? t4 : { done: t4.done, value: Xe(e3, t4.value) };
      }
      return { [Symbol.asyncIterator]() {
        const e4 = t3[Symbol.asyncIterator](), n2 = { next: () => e4.next().then(A2) };
        return void 0 !== e4.throw && (n2.throw = (t4) => e4.throw(t4).then(A2)), void 0 !== e4.return && (n2.return = (t4) => e4.return(t4).then(A2)), n2;
      } };
    }
    function ze(e3) {
      const { signal: t3, cleanup: A2 } = (function(e4) {
        const t4 = new AbortController(), A3 = () => {
          t4.abort(new E("the operation timed out", a.DeadlineExceeded));
        };
        let n3;
        return void 0 !== e4 && (e4 <= 0 ? A3() : n3 = setTimeout(A3, e4)), { signal: t4.signal, cleanup: () => clearTimeout(n3) };
      })(e3.timeoutMs), n2 = (function(...e4) {
        const t4 = new AbortController(), A3 = e4.filter((e5) => void 0 !== e5).concat(t4.signal);
        for (const e5 of A3) {
          if (e5.aborted) {
            n3.apply(e5);
            break;
          }
          e5.addEventListener("abort", n3);
        }
        function n3() {
          t4.signal.aborted || t4.abort(le(this));
          for (const e5 of A3) e5.removeEventListener("abort", n3);
        }
        return t4;
      })(e3.signal, t3);
      return [n2.signal, function(e4) {
        const r3 = E.from(t3.aborted ? le(t3) : e4);
        return n2.abort(r3), A2(), Promise.reject(r3);
      }, function() {
        A2(), n2.abort();
      }];
    }
    function $e(e3, t3, A2, n2) {
      const r3 = et(tt(e3.I, t3), n2), o3 = et(At(e3.I, A2), n2), s2 = et(tt(e3.O, t3), n2), i2 = et(At(e3.O, A2), n2);
      return { getI: (e4) => e4 ? r3 : o3, getO: (e4) => e4 ? s2 : i2 };
    }
    function et(e3, t3) {
      return { serialize(A2) {
        const n2 = e3.serialize(A2);
        return (function(e4, t4) {
          if (t4 > e4) throw new E(`message size ${t4} is larger than configured writeMaxBytes ${e4}`, a.ResourceExhausted);
        })(t3.writeMaxBytes, n2.byteLength), n2;
      }, parse: (A2) => (Q(t3.readMaxBytes, A2.byteLength, true), e3.parse(A2)) };
    }
    function tt(e3, t3) {
      return { parse(A2) {
        try {
          return e3.fromBinary(A2, t3);
        } catch (e4) {
          const t4 = e4 instanceof Error ? e4.message : String(e4);
          throw new E(`parse binary: ${t4}`, a.Internal);
        }
      }, serialize(e4) {
        try {
          return e4.toBinary(t3);
        } catch (e5) {
          const t4 = e5 instanceof Error ? e5.message : String(e5);
          throw new E(`serialize binary: ${t4}`, a.Internal);
        }
      } };
    }
    function At(e3, t3) {
      var A2, n2;
      const r3 = null !== (A2 = null == t3 ? void 0 : t3.textEncoder) && void 0 !== A2 ? A2 : new TextEncoder(), o3 = null !== (n2 = null == t3 ? void 0 : t3.textDecoder) && void 0 !== n2 ? n2 : new TextDecoder(), s2 = (function(e4) {
        var t4;
        const A3 = Object.assign({}, e4);
        return null !== (t4 = A3.ignoreUnknownFields) && void 0 !== t4 || (A3.ignoreUnknownFields = true), A3;
      })(t3);
      return { parse(t4) {
        try {
          const A3 = o3.decode(t4);
          return e3.fromJsonString(A3, s2);
        } catch (e4) {
          throw E.from(e4, a.InvalidArgument);
        }
      }, serialize(e4) {
        try {
          const t4 = e4.toJsonString(s2);
          return r3.encode(t4);
        } catch (e5) {
          throw E.from(e5, a.Internal);
        }
      } };
    }
    function nt() {
      return { get(e3) {
        return e3.id in this ? this[e3.id] : e3.defaultValue;
      }, set(e3, t3) {
        return this[e3.id] = t3, this;
      }, delete(e3) {
        return delete this[e3.id], this;
      } };
    }
    var rt = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, A2 = e3[Symbol.asyncIterator];
      return A2 ? A2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, n2("next"), n2("throw"), n2("return"), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3);
      function n2(A3) {
        t3[A3] = e3[A3] && function(t4) {
          return new Promise(function(n3, r3) {
            (function(e4, t5, A4, n4) {
              Promise.resolve(n4).then(function(t6) {
                e4({ value: t6, done: A4 });
              }, t5);
            })(n3, r3, (t4 = e3[A3](t4)).done, t4.value);
          });
        };
      }
    }, ot = function(e3) {
      return this instanceof ot ? (this.v = e3, this) : new ot(e3);
    }, st = function(e3, t3, A2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = A2.apply(e3, t3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(t4) {
          return Promise.resolve(t4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, t4) {
        r3[e4] && (n2[e4] = function(t5) {
          return new Promise(function(A3, n3) {
            o3.push([e4, t5, A3, n3]) > 1 || i2(e4, t5);
          });
        }, t4 && (n2[e4] = t4(n2[e4])));
      }
      function i2(e4, t4) {
        try {
          (A3 = r3[e4](t4)).value instanceof ot ? Promise.resolve(A3.value.v).then(a2, c2) : l2(o3[0][2], A3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var A3;
      }
      function a2(e4) {
        i2("next", e4);
      }
      function c2(e4) {
        i2("throw", e4);
      }
      function l2(e4, t4) {
        e4(t4), o3.shift(), o3.length && i2(o3[0][0], o3[0][1]);
      }
    };
    function it(e3) {
      return { async unary(t3, A2, n2, r3, o3, s2, i2) {
        const a2 = $e(A2, e3.binaryOptions, e3.jsonOptions, e3);
        return r3 = void 0 === r3 ? e3.defaultTimeoutMs : r3 <= 0 ? void 0 : r3, await (function(e4) {
          const t4 = Ke(e4.next, e4.interceptors), [A3, n3, r4] = ze(e4);
          return t4(Object.assign(Object.assign({}, e4.req), { message: Xe(e4.req.method.I, e4.req.message), signal: A3 })).then((e5) => (r4(), e5), n3);
        })({ interceptors: e3.interceptors, signal: n2, timeoutMs: r3, req: { stream: false, service: t3, method: A2, url: je(e3.baseUrl, t3, A2), init: {}, header: _e(A2.kind, e3.useBinaryFormat, r3, o3, e3.acceptCompression, e3.sendCompression, true), contextValues: null != i2 ? i2 : nt(), message: s2 }, next: async (n3) => {
          var r4;
          let o4 = a2.getI(e3.useBinaryFormat).serialize(n3.message);
          e3.sendCompression && o4.byteLength > e3.compressMinBytes ? (o4 = await e3.sendCompression.compress(o4), n3.header.set(we, e3.sendCompression.name)) : n3.header.delete(we);
          let s3;
          true === e3.useHttpGet && A2.idempotency === l.MethodIdempotency.NoSideEffects ? n3 = We(n3, o4, e3.useBinaryFormat) : (s3 = U([o4]), 0 === o4.length && n3.header.set("Content-Length", "0"));
          const i3 = await e3.httpClient({ url: n3.url, method: null !== (r4 = n3.init.method) && void 0 !== r4 ? r4 : "POST", header: n3.header, signal: n3.signal, body: s3 }), { compression: c2, isUnaryError: u2, unaryError: g2 } = Oe(A2.kind, e3.acceptCompression, e3.useBinaryFormat, i3.status, i3.header), [E2, h2] = (function(e4) {
            const t4 = new Headers(), A3 = new Headers();
            return e4.forEach((e5, n4) => {
              n4.toLowerCase().startsWith("trailer-") ? A3.append(n4.substring(8), e5) : t4.append(n4, e5);
            }), [t4, A3];
          })(i3.header);
          let d2 = await (function(e4, ...t4) {
            const [A3, n4, r5] = (function(e5) {
              let t5;
              "function" != typeof e5[e5.length - 1] && (t5 = e5.pop());
              const A4 = e5.pop();
              return [e5, A4, t5];
            })(t4);
            let o5, s4 = e4;
            return true === (null == r5 ? void 0 : r5.propagateDownStreamError) && (s4 = o5 = M(s4)), s4 = T(s4, ...A3, { propagateDownStreamError: false }), n4(s4).catch((e5) => o5 ? o5.abort(e5).then(() => Promise.reject(e5)) : Promise.reject(e5));
          })(i3.body, (I2 = e3.readMaxBytes, B2 = i3.header.get(ye), async function(e4) {
            return await v(e4, I2, B2);
          }), { propagateDownStreamError: false });
          var I2, B2;
          if (c2 && (d2 = await c2.decompress(d2, e3.readMaxBytes)), u2) throw (function(e4, t4, A3) {
            let n4;
            try {
              n4 = JSON.parse(new TextDecoder().decode(e4));
            } catch (e5) {
              throw A3;
            }
            return Ge(n4, t4, A3);
          })(d2, Ve(E2, h2), g2);
          return { stream: false, service: t3, method: A2, header: E2, message: a2.getO(e3.useBinaryFormat).parse(d2), trailer: h2 };
        } });
      }, async stream(t3, A2, n2, r3, o3, s2, i2) {
        const c2 = $e(A2, e3.binaryOptions, e3.jsonOptions, e3), l2 = He(e3.jsonOptions);
        return r3 = void 0 === r3 ? e3.defaultTimeoutMs : r3 <= 0 ? void 0 : r3, (function(e4) {
          const t4 = Ke(e4.next, e4.interceptors), [A3, n3, r4] = ze(e4), o4 = Object.assign(Object.assign({}, e4.req), { message: Ze(e4.req.method.I, e4.req.message), signal: A3 });
          let s3 = false;
          return A3.addEventListener("abort", function() {
            var t5, A4;
            const n4 = e4.req.message[Symbol.asyncIterator]();
            s3 || null === (t5 = n4.throw) || void 0 === t5 || t5.call(n4, this.reason).catch(() => {
            }), null === (A4 = n4.return) || void 0 === A4 || A4.call(n4).catch(() => {
            });
          }), t4(o4).then((e5) => Object.assign(Object.assign({}, e5), { message: { [Symbol.asyncIterator]() {
            const t5 = e5.message[Symbol.asyncIterator]();
            return { next: () => t5.next().then((e6) => (1 == e6.done && (s3 = true, r4()), e6), n3) };
          } } }), n3);
        })({ interceptors: e3.interceptors, signal: n2, timeoutMs: r3, req: { stream: true, service: t3, method: A2, url: je(e3.baseUrl, t3, A2), init: { method: "POST", redirect: "error", mode: "cors" }, header: _e(A2.kind, e3.useBinaryFormat, r3, o3, e3.acceptCompression, e3.sendCompression, true), contextValues: null != i2 ? i2 : nt(), message: s2 }, next: async (t4) => {
          const n3 = await e3.httpClient({ url: t4.url, method: "POST", header: t4.header, signal: t4.signal, body: T(t4.message, D(c2.getI(e3.useBinaryFormat)), R(e3.sendCompression, e3.compressMinBytes), function(e4) {
            return b(this, arguments, function* () {
              var t5, A3, n4, r5;
              try {
                for (var o5, s4 = true, i3 = w(e4); !(t5 = (o5 = yield k(i3.next())).done); s4 = true) {
                  r5 = o5.value, s4 = false;
                  const { flags: e5, data: t6 } = r5;
                  yield yield k(y(e5, t6));
                }
              } catch (e5) {
                A3 = { error: e5 };
              } finally {
                try {
                  s4 || t5 || !(n4 = i3.return) || (yield k(n4.call(i3)));
                } finally {
                  if (A3) throw A3.error;
                }
              }
            });
          }, { propagateDownStreamError: true }) }), { compression: r4 } = Oe(A2.kind, e3.acceptCompression, e3.useBinaryFormat, n3.status, n3.header), o4 = Object.assign(Object.assign({}, t4), { header: n3.header, trailer: new Headers(), message: T(n3.body, (s3 = e3.readMaxBytes, function(e4) {
            return b(this, arguments, function* () {
              var t5, A3, n4, r5;
              const o5 = f(s3);
              try {
                for (var i3, c3 = true, l3 = w(e4); !(t5 = (i3 = yield k(l3.next())).done); c3 = true) {
                  r5 = i3.value, c3 = false;
                  const e5 = r5;
                  for (const t6 of o5.decode(e5)) yield yield k(t6);
                }
              } catch (e5) {
                A3 = { error: e5 };
              } finally {
                try {
                  c3 || t5 || !(n4 = l3.return) || (yield k(n4.call(l3)));
                } finally {
                  if (A3) throw A3.error;
                }
              }
              if (o5.byteLength > 0) throw new E("protocol error: incomplete envelope", a.InvalidArgument);
            });
          }), F(null != r4 ? r4 : null, e3.readMaxBytes), S(c2.getO(e3.useBinaryFormat), xe, l2), function(e4) {
            return st(this, arguments, function* () {
              var t5, A3, r5, s4;
              let i3 = false;
              try {
                for (var c3, l3 = true, u2 = rt(e4); !(t5 = (c3 = yield ot(u2.next())).done); l3 = true) {
                  s4 = c3.value, l3 = false;
                  const e5 = s4;
                  if (e5.end) {
                    if (i3) throw new E("protocol error: received extra EndStreamResponse", a.InvalidArgument);
                    if (i3 = true, e5.value.error) {
                      const t6 = e5.value.error;
                      throw n3.header.forEach((e6, A4) => {
                        t6.metadata.append(A4, e6);
                      }), t6;
                    }
                    e5.value.metadata.forEach((e6, t6) => o4.trailer.set(t6, e6));
                  } else {
                    if (i3) throw new E("protocol error: received extra message after EndStreamResponse", a.InvalidArgument);
                    yield yield ot(e5.value);
                  }
                }
              } catch (e5) {
                A3 = { error: e5 };
              } finally {
                try {
                  l3 || t5 || !(r5 = u2.return) || (yield ot(r5.call(u2)));
                } finally {
                  if (A3) throw A3.error;
                }
              }
              if (!i3) throw new E("protocol error: missing EndStreamResponse", a.InvalidArgument);
            });
          }, { propagateDownStreamError: true }) });
          var s3;
          return o4;
        } });
      } };
    }
    function at(e3) {
      return it(pe(e3));
    }
    function ct(e3, t3) {
      if (!e3) throw new Error(t3);
    }
    function lt(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }
    function ut(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }
    function gt(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    }
    const Et = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function ht(e3) {
      const t3 = e3[Et];
      return ct(t3, "missing enum type on enum object"), t3;
    }
    function dt(e3, t3, A2, n2) {
      e3[Et] = It(t3, A2.map((t4) => ({ no: t4.no, name: t4.name, localName: e3[t4.no] })), n2);
    }
    function It(e3, t3, A2) {
      const n2 = /* @__PURE__ */ Object.create(null), r3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of t3) {
        const t4 = Qt(e4);
        o3.push(t4), n2[e4.name] = t4, r3[e4.no] = t4;
      }
      return { typeName: e3, values: o3, findName: (e4) => n2[e4], findNumber: (e4) => r3[e4] };
    }
    function Bt(e3, t3, A2) {
      const n2 = {};
      for (const e4 of t3) {
        const t4 = Qt(e4);
        n2[t4.localName] = t4.no, n2[t4.no] = t4.localName;
      }
      return dt(n2, e3, t3, A2), n2;
    }
    function Qt(e3) {
      return "localName" in e3 ? e3 : { ...e3, localName: e3.name };
    }
    class ft {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, t3) {
        const A2 = this.getType().runtime.bin, n2 = A2.makeReadOptions(t3);
        return A2.readMessage(this, n2.readerFactory(e3), e3.byteLength, n2), this;
      }
      fromJson(e3, t3) {
        const A2 = this.getType(), n2 = A2.runtime.json, r3 = n2.makeReadOptions(t3);
        return n2.readMessage(A2, e3, r3, this), this;
      }
      fromJsonString(e3, t3) {
        let A2;
        try {
          A2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(A2, t3);
      }
      toBinary(e3) {
        const t3 = this.getType().runtime.bin, A2 = t3.makeWriteOptions(e3), n2 = A2.writerFactory();
        return t3.writeMessage(this, n2, A2), n2.finish();
      }
      toJson(e3) {
        const t3 = this.getType().runtime.json, A2 = t3.makeWriteOptions(e3);
        return t3.writeMessage(this, A2);
      }
      toJsonString(e3) {
        const t3 = this.toJson(e3);
        return JSON.stringify(t3, null, e3?.prettySpaces ?? 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    }
    function Ct() {
      let e3 = 0, t3 = 0;
      for (let A3 = 0; A3 < 28; A3 += 7) {
        let n2 = this.buf[this.pos++];
        if (e3 |= (127 & n2) << A3, !(128 & n2)) return this.assertBounds(), [e3, t3];
      }
      let A2 = this.buf[this.pos++];
      if (e3 |= (15 & A2) << 28, t3 = (112 & A2) >> 4, !(128 & A2)) return this.assertBounds(), [e3, t3];
      for (let A3 = 3; A3 <= 31; A3 += 7) {
        let n2 = this.buf[this.pos++];
        if (t3 |= (127 & n2) << A3, !(128 & n2)) return this.assertBounds(), [e3, t3];
      }
      throw new Error("invalid varint");
    }
    function pt(e3, t3, A2) {
      for (let n3 = 0; n3 < 28; n3 += 7) {
        const r4 = e3 >>> n3, o3 = !(r4 >>> 7 == 0 && 0 == t3), s2 = 255 & (o3 ? 128 | r4 : r4);
        if (A2.push(s2), !o3) return;
      }
      const n2 = e3 >>> 28 & 15 | (7 & t3) << 4, r3 = !!(t3 >> 3);
      if (A2.push(255 & (r3 ? 128 | n2 : n2)), r3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const n3 = t3 >>> e4, r4 = !(n3 >>> 7 == 0), o3 = 255 & (r4 ? 128 | n3 : n3);
          if (A2.push(o3), !r4) return;
        }
        A2.push(t3 >>> 31 & 1);
      }
    }
    const mt = 4294967296;
    function yt(e3) {
      const t3 = "-" === e3[0];
      t3 && (e3 = e3.slice(1));
      const A2 = 1e6;
      let n2 = 0, r3 = 0;
      function o3(t4, o4) {
        const s2 = Number(e3.slice(t4, o4));
        r3 *= A2, n2 = n2 * A2 + s2, n2 >= mt && (r3 += n2 / mt | 0, n2 %= mt);
      }
      return o3(-24, -18), o3(-18, -12), o3(-12, -6), o3(-6), t3 ? bt(n2, r3) : kt(n2, r3);
    }
    function wt(e3, t3) {
      if ({ lo: e3, hi: t3 } = (function(e4, t4) {
        return { lo: e4 >>> 0, hi: t4 >>> 0 };
      })(e3, t3), t3 <= 2097151) return String(mt * t3 + e3);
      const A2 = 16777215 & (e3 >>> 24 | t3 << 8), n2 = t3 >> 16 & 65535;
      let r3 = (16777215 & e3) + 6777216 * A2 + 6710656 * n2, o3 = A2 + 8147497 * n2, s2 = 2 * n2;
      const i2 = 1e7;
      return r3 >= i2 && (o3 += Math.floor(r3 / i2), r3 %= i2), o3 >= i2 && (s2 += Math.floor(o3 / i2), o3 %= i2), s2.toString() + Nt(o3) + Nt(r3);
    }
    function kt(e3, t3) {
      return { lo: 0 | e3, hi: 0 | t3 };
    }
    function bt(e3, t3) {
      return t3 = ~t3, e3 ? e3 = 1 + ~e3 : t3 += 1, kt(e3, t3);
    }
    const Nt = (e3) => {
      const t3 = String(e3);
      return "0000000".slice(t3.length) + t3;
    };
    function Tt(e3, t3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) t3.push(127 & e3 | 128), e3 >>>= 7;
        t3.push(e3);
      } else {
        for (let A2 = 0; A2 < 9; A2++) t3.push(127 & e3 | 128), e3 >>= 7;
        t3.push(1);
      }
    }
    function Dt() {
      let e3 = this.buf[this.pos++], t3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), t3;
      if (e3 = this.buf[this.pos++], t3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), t3;
      e3 = this.buf[this.pos++], t3 |= (15 & e3) << 28;
      for (let t4 = 5; 128 & e3 && t4 < 10; t4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), t3 >>> 0;
    }
    const St = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t4 = BigInt("-9223372036854775808"), A3 = BigInt("9223372036854775807"), n2 = BigInt("0"), r3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const n3 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n3 > A3 || n3 < t4) throw new Error(`int64 invalid: ${e4}`);
          return n3;
        }, uParse(e4) {
          const t5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t5 > r3 || t5 < n2) throw new Error(`uint64 invalid: ${e4}`);
          return t5;
        }, enc(t5) {
          return e3.setBigInt64(0, this.parse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(t5) {
          return e3.setBigInt64(0, this.uParse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (t5, A4) => (e3.setInt32(0, t5, true), e3.setInt32(4, A4, true), e3.getBigInt64(0, true)), uDec: (t5, A4) => (e3.setInt32(0, t5, true), e3.setInt32(4, A4, true), e3.getBigUint64(0, true)) };
      }
      const t3 = (e4) => ct(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), A2 = (e4) => ct(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A2(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), yt(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A2(e4), yt(e4)), dec: (e4, t4) => (function(e5, t5) {
        let A3 = kt(e5, t5);
        const n2 = 2147483648 & A3.hi;
        n2 && (A3 = bt(A3.lo, A3.hi));
        const r3 = wt(A3.lo, A3.hi);
        return n2 ? "-" + r3 : r3;
      })(e4, t4), uDec: (e4, t4) => wt(e4, t4) };
    })();
    var Rt = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(Rt || {}), Ft = ((e3) => (e3[e3.BIGINT = 0] = "BIGINT", e3[e3.STRING = 1] = "STRING", e3))(Ft || {});
    function vt(e3, t3, A2) {
      if (t3 === A2) return true;
      if (e3 == Rt.BYTES) {
        if (!(t3 instanceof Uint8Array && A2 instanceof Uint8Array)) return false;
        if (t3.length !== A2.length) return false;
        for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] !== A2[e4]) return false;
        return true;
      }
      switch (e3) {
        case Rt.UINT64:
        case Rt.FIXED64:
        case Rt.INT64:
        case Rt.SFIXED64:
        case Rt.SINT64:
          return t3 == A2;
      }
      return false;
    }
    function Mt(e3, t3) {
      switch (e3) {
        case Rt.BOOL:
          return false;
        case Rt.UINT64:
        case Rt.FIXED64:
        case Rt.INT64:
        case Rt.SFIXED64:
        case Rt.SINT64:
          return 0 == t3 ? St.zero : "0";
        case Rt.DOUBLE:
        case Rt.FLOAT:
          return 0;
        case Rt.BYTES:
          return new Uint8Array(0);
        case Rt.STRING:
          return "";
        default:
          return 0;
      }
    }
    function Ut(e3, t3) {
      switch (e3) {
        case Rt.BOOL:
          return false === t3;
        case Rt.STRING:
          return "" === t3;
        case Rt.BYTES:
          return t3 instanceof Uint8Array && !t3.byteLength;
        default:
          return 0 == t3;
      }
    }
    function Lt(e3) {
      const t3 = e3.field.localName, A2 = /* @__PURE__ */ Object.create(null);
      return A2[t3] = (function(e4) {
        const t4 = e4.field;
        if (t4.repeated) return [];
        if (void 0 !== t4.default) return t4.default;
        switch (t4.kind) {
          case "enum":
            return t4.T.values[0].no;
          case "scalar":
            return Mt(t4.T, t4.L);
          case "message":
            const e5 = t4.T, A3 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(A3) : A3;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [A2, () => A2[t3]];
    }
    let _t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Jt = [];
    for (let e3 = 0; e3 < _t.length; e3++) Jt[_t[e3].charCodeAt(0)] = e3;
    Jt["-".charCodeAt(0)] = _t.indexOf("+"), Jt["_".charCodeAt(0)] = _t.indexOf("/");
    const Ot = { dec(e3) {
      let t3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? t3 -= 2 : "=" == e3[e3.length - 1] && (t3 -= 1);
      let A2, n2 = new Uint8Array(t3), r3 = 0, o3 = 0, s2 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        if (A2 = Jt[e3.charCodeAt(t4)], void 0 === A2) switch (e3[t4]) {
          case "=":
            o3 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (o3) {
          case 0:
            s2 = A2, o3 = 1;
            break;
          case 1:
            n2[r3++] = s2 << 2 | (48 & A2) >> 4, s2 = A2, o3 = 2;
            break;
          case 2:
            n2[r3++] = (15 & s2) << 4 | (60 & A2) >> 2, s2 = A2, o3 = 3;
            break;
          case 3:
            n2[r3++] = (3 & s2) << 6 | A2, o3 = 0;
        }
      }
      if (1 == o3) throw Error("invalid base64 string.");
      return n2.subarray(0, r3);
    }, enc(e3) {
      let t3, A2 = "", n2 = 0, r3 = 0;
      for (let o3 = 0; o3 < e3.length; o3++) switch (t3 = e3[o3], n2) {
        case 0:
          A2 += _t[t3 >> 2], r3 = (3 & t3) << 4, n2 = 1;
          break;
        case 1:
          A2 += _t[r3 | t3 >> 4], r3 = (15 & t3) << 2, n2 = 2;
          break;
        case 2:
          A2 += _t[r3 | t3 >> 6], A2 += _t[63 & t3], n2 = 0;
      }
      return n2 && (A2 += _t[r3], A2 += "=", 1 == n2 && (A2 += "=")), A2;
    } };
    function Yt(e3, t3, A2) {
      Vt(t3, e3);
      const n2 = t3.runtime.bin.makeReadOptions(A2), r3 = (function(e4, t4) {
        if (!t4.repeated && ("enum" == t4.kind || "scalar" == t4.kind)) {
          for (let A3 = e4.length - 1; A3 >= 0; --A3) if (e4[A3].no == t4.no) return [e4[A3]];
          return [];
        }
        return e4.filter((e5) => e5.no === t4.no);
      })(e3.getType().runtime.bin.listUnknownFields(e3), t3.field), [o3, s2] = Lt(t3);
      for (const e4 of r3) t3.runtime.bin.readField(o3, n2.readerFactory(e4.data), t3.field, e4.wireType, n2);
      return s2();
    }
    function Gt(e3, t3, A2, n2) {
      Vt(t3, e3);
      const r3 = t3.runtime.bin.makeReadOptions(n2), o3 = t3.runtime.bin.makeWriteOptions(n2);
      if (Pt(e3, t3)) {
        const A3 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const t4 of A3) e3.getType().runtime.bin.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
      const s2 = o3.writerFactory();
      let i2 = t3.field;
      i2.opt || i2.repeated || "enum" != i2.kind && "scalar" != i2.kind || (i2 = { ...t3.field, opt: true }), t3.runtime.bin.writeField(i2, A2, s2, o3);
      const a2 = r3.readerFactory(s2.finish());
      for (; a2.pos < a2.len; ) {
        const [t4, A3] = a2.tag(), n3 = a2.skip(A3, t4);
        e3.getType().runtime.bin.onUnknownField(e3, t4, A3, n3);
      }
    }
    function Pt(e3, t3) {
      const A2 = e3.getType();
      return t3.extendee.typeName === A2.typeName && !!A2.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == t3.field.no);
    }
    function Vt(e3, t3) {
      ct(e3.extendee.typeName == t3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    function xt(e3, t3) {
      const A2 = e3.localName;
      if (e3.repeated) return t3[A2].length > 0;
      if (e3.oneof) return t3[e3.oneof.localName].case === A2;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== t3[A2] : "enum" == e3.kind ? t3[A2] !== e3.T.values[0].no : !Ut(e3.T, t3[A2]);
        case "message":
          return void 0 !== t3[A2];
        case "map":
          return Object.keys(t3[A2]).length > 0;
      }
    }
    function Ht(e3, t3) {
      const A2 = e3.localName, n2 = !e3.opt && !e3.req;
      if (e3.repeated) t3[A2] = [];
      else if (e3.oneof) t3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          t3[A2] = {};
          break;
        case "enum":
          t3[A2] = n2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          t3[A2] = n2 ? Mt(e3.T, e3.L) : void 0;
          break;
        case "message":
          t3[A2] = void 0;
      }
    }
    function qt(e3, t3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(ft.prototype).every((t4) => t4 in e3 && "function" == typeof e3[t4])) return false;
      const A2 = e3.getType();
      return null !== A2 && "function" == typeof A2 && "typeName" in A2 && "string" == typeof A2.typeName && (void 0 === t3 || A2.typeName == t3.typeName);
    }
    function Wt(e3, t3) {
      const A2 = qt(t3);
      return A2 || e3.fieldWrapper ? A2 || !e3.fieldWrapper ? t3 : e3.fieldWrapper.wrapField(t3) : new e3(t3);
    }
    Rt.DOUBLE, Rt.FLOAT, Rt.INT64, Rt.UINT64, Rt.INT32, Rt.UINT32, Rt.BOOL, Rt.STRING, Rt.BYTES;
    const jt = { ignoreUnknownFields: false }, Kt = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function Xt(e3) {
      return e3 ? { ...jt, ...e3 } : jt;
    }
    function Zt(e3) {
      return e3 ? { ...Kt, ...e3 } : Kt;
    }
    const zt = /* @__PURE__ */ Symbol(), $t = /* @__PURE__ */ Symbol();
    function eA(e3) {
      if (null === e3) return "null";
      switch (typeof e3) {
        case "object":
          return Array.isArray(e3) ? "array" : "object";
        case "string":
          return e3.length > 100 ? "string" : `"${e3.split('"').join('\\"')}"`;
        default:
          return String(e3);
      }
    }
    function tA(e3, t3, A2, n2, r3) {
      let o3 = A2.localName;
      if (A2.repeated) {
        if (ct("map" != A2.kind), null === t3) return;
        if (!Array.isArray(t3)) throw new Error(`cannot decode field ${r3.typeName}.${A2.name} from JSON: ${eA(t3)}`);
        const s2 = e3[o3];
        for (const e4 of t3) {
          if (null === e4) throw new Error(`cannot decode field ${r3.typeName}.${A2.name} from JSON: ${eA(e4)}`);
          switch (A2.kind) {
            case "message":
              s2.push(A2.T.fromJson(e4, n2));
              break;
            case "enum":
              const t4 = rA(A2.T, e4, n2.ignoreUnknownFields, true);
              t4 !== $t && s2.push(t4);
              break;
            case "scalar":
              try {
                s2.push(nA(A2.T, e4, A2.L, true));
              } catch (t5) {
                let n3 = `cannot decode field ${r3.typeName}.${A2.name} from JSON: ${eA(e4)}`;
                throw t5 instanceof Error && t5.message.length > 0 && (n3 += `: ${t5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == A2.kind) {
        if (null === t3) return;
        if ("object" != typeof t3 || Array.isArray(t3)) throw new Error(`cannot decode field ${r3.typeName}.${A2.name} from JSON: ${eA(t3)}`);
        const s2 = e3[o3];
        for (const [e4, o4] of Object.entries(t3)) {
          if (null === o4) throw new Error(`cannot decode field ${r3.typeName}.${A2.name} from JSON: map value null`);
          let i2;
          try {
            i2 = AA(A2.K, e4);
          } catch (e5) {
            let n3 = `cannot decode map key for field ${r3.typeName}.${A2.name} from JSON: ${eA(t3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (n3 += `: ${e5.message}`), new Error(n3);
          }
          switch (A2.V.kind) {
            case "message":
              s2[i2] = A2.V.T.fromJson(o4, n2);
              break;
            case "enum":
              const e5 = rA(A2.V.T, o4, n2.ignoreUnknownFields, true);
              e5 !== $t && (s2[i2] = e5);
              break;
            case "scalar":
              try {
                s2[i2] = nA(A2.V.T, o4, Ft.BIGINT, true);
              } catch (e6) {
                let n3 = `cannot decode map value for field ${r3.typeName}.${A2.name} from JSON: ${eA(t3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (n3 += `: ${e6.message}`), new Error(n3);
              }
          }
        }
      } else switch (A2.oneof && (e3 = e3[A2.oneof.localName] = { case: o3 }, o3 = "value"), A2.kind) {
        case "message":
          const s2 = A2.T;
          if (null === t3 && "google.protobuf.Value" != s2.typeName) return;
          let i2 = e3[o3];
          qt(i2) ? i2.fromJson(t3, n2) : (e3[o3] = i2 = s2.fromJson(t3, n2), s2.fieldWrapper && !A2.oneof && (e3[o3] = s2.fieldWrapper.unwrapField(i2)));
          break;
        case "enum":
          const a2 = rA(A2.T, t3, n2.ignoreUnknownFields, false);
          switch (a2) {
            case zt:
              Ht(A2, e3);
              break;
            case $t:
              break;
            default:
              e3[o3] = a2;
          }
          break;
        case "scalar":
          try {
            const n3 = nA(A2.T, t3, A2.L, false);
            if (n3 === zt) Ht(A2, e3);
            else e3[o3] = n3;
          } catch (e4) {
            let n3 = `cannot decode field ${r3.typeName}.${A2.name} from JSON: ${eA(t3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n3 += `: ${e4.message}`), new Error(n3);
          }
      }
    }
    function AA(e3, t3) {
      if (e3 === Rt.BOOL) switch (t3) {
        case "true":
          t3 = true;
          break;
        case "false":
          t3 = false;
      }
      return nA(e3, t3, Ft.BIGINT, true).toString();
    }
    function nA(e3, t3, A2, n2) {
      if (null === t3) return n2 ? Mt(e3, A2) : zt;
      switch (e3) {
        case Rt.DOUBLE:
        case Rt.FLOAT:
          if ("NaN" === t3) return Number.NaN;
          if ("Infinity" === t3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === t3) return Number.NEGATIVE_INFINITY;
          if ("" === t3) break;
          if ("string" == typeof t3 && t3.trim().length !== t3.length) break;
          if ("string" != typeof t3 && "number" != typeof t3) break;
          const n3 = Number(t3);
          if (Number.isNaN(n3)) break;
          if (!Number.isFinite(n3)) break;
          return e3 == Rt.FLOAT && gt(n3), n3;
        case Rt.INT32:
        case Rt.FIXED32:
        case Rt.SFIXED32:
        case Rt.SINT32:
        case Rt.UINT32:
          let r3;
          if ("number" == typeof t3 ? r3 = t3 : "string" == typeof t3 && t3.length > 0 && t3.trim().length === t3.length && (r3 = Number(t3)), void 0 === r3) break;
          return e3 == Rt.UINT32 || e3 == Rt.FIXED32 ? ut(r3) : lt(r3), r3;
        case Rt.INT64:
        case Rt.SFIXED64:
        case Rt.SINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const o3 = St.parse(t3);
          return A2 ? o3.toString() : o3;
        case Rt.FIXED64:
        case Rt.UINT64:
          if ("number" != typeof t3 && "string" != typeof t3) break;
          const s2 = St.uParse(t3);
          return A2 ? s2.toString() : s2;
        case Rt.BOOL:
          if ("boolean" != typeof t3) break;
          return t3;
        case Rt.STRING:
          if ("string" != typeof t3) break;
          try {
            encodeURIComponent(t3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return t3;
        case Rt.BYTES:
          if ("" === t3) return new Uint8Array(0);
          if ("string" != typeof t3) break;
          return Ot.dec(t3);
      }
      throw new Error();
    }
    function rA(e3, t3, A2, n2) {
      if (null === t3) return "google.protobuf.NullValue" == e3.typeName ? 0 : n2 ? e3.values[0].no : zt;
      switch (typeof t3) {
        case "number":
          if (Number.isInteger(t3)) return t3;
          break;
        case "string":
          const n3 = e3.findName(t3);
          if (void 0 !== n3) return n3.no;
          if (A2) return $t;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${eA(t3)}`);
    }
    function oA(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function sA(e3, t3, A2) {
      if ("map" == e3.kind) {
        ct("object" == typeof t3 && null != t3);
        const n2 = {}, r3 = Object.entries(t3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [t5, A3] of r3) n2[t5.toString()] = aA(e3.V.T, A3);
            break;
          case "message":
            for (const [e4, t5] of r3) n2[e4.toString()] = t5.toJson(A2);
            break;
          case "enum":
            const t4 = e3.V.T;
            for (const [e4, o3] of r3) n2[e4.toString()] = iA(t4, o3, A2.enumAsInteger);
        }
        return A2.emitDefaultValues || r3.length > 0 ? n2 : void 0;
      }
      if (e3.repeated) {
        ct(Array.isArray(t3));
        const n2 = [];
        switch (e3.kind) {
          case "scalar":
            for (let A3 = 0; A3 < t3.length; A3++) n2.push(aA(e3.T, t3[A3]));
            break;
          case "enum":
            for (let r3 = 0; r3 < t3.length; r3++) n2.push(iA(e3.T, t3[r3], A2.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < t3.length; e4++) n2.push(t3[e4].toJson(A2));
        }
        return A2.emitDefaultValues || n2.length > 0 ? n2 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return aA(e3.T, t3);
        case "enum":
          return iA(e3.T, t3, A2.enumAsInteger);
        case "message":
          return Wt(e3.T, t3).toJson(A2);
      }
    }
    function iA(e3, t3, A2) {
      if (ct("number" == typeof t3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (A2) return t3;
      const n2 = e3.findNumber(t3);
      return n2?.name ?? t3;
    }
    function aA(e3, t3) {
      switch (e3) {
        case Rt.INT32:
        case Rt.SFIXED32:
        case Rt.SINT32:
        case Rt.FIXED32:
        case Rt.UINT32:
          return ct("number" == typeof t3), t3;
        case Rt.FLOAT:
        case Rt.DOUBLE:
          return ct("number" == typeof t3), Number.isNaN(t3) ? "NaN" : t3 === Number.POSITIVE_INFINITY ? "Infinity" : t3 === Number.NEGATIVE_INFINITY ? "-Infinity" : t3;
        case Rt.STRING:
          return ct("string" == typeof t3), t3;
        case Rt.BOOL:
          return ct("boolean" == typeof t3), t3;
        case Rt.UINT64:
        case Rt.FIXED64:
        case Rt.INT64:
        case Rt.SFIXED64:
        case Rt.SINT64:
          return ct("bigint" == typeof t3 || "string" == typeof t3 || "number" == typeof t3), t3.toString();
        case Rt.BYTES:
          return ct(t3 instanceof Uint8Array), Ot.enc(t3);
      }
    }
    var cA = ((e3) => (e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32", e3))(cA || {});
    class lA {
      constructor(e3) {
        this.stack = [], this.textEncoder = e3 ?? new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let e3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3 += this.chunks[t4].length;
        let t3 = new Uint8Array(e3), A2 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3.set(this.chunks[e4], A2), A2 += this.chunks[e4].length;
        return this.chunks = [], t3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), t3 = this.stack.pop();
        if (!t3) throw new Error("invalid state, fork stack empty");
        return this.chunks = t3.chunks, this.buf = t3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, t3) {
        return this.uint32((e3 << 3 | t3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for (ut(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return lt(e3), Tt(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let t3 = this.textEncoder.encode(e3);
        return this.uint32(t3.byteLength), this.raw(t3);
      }
      float(e3) {
        gt(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setFloat32(0, e3, true), this.raw(t3);
      }
      double(e3) {
        let t3 = new Uint8Array(8);
        return new DataView(t3.buffer).setFloat64(0, e3, true), this.raw(t3);
      }
      fixed32(e3) {
        ut(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setUint32(0, e3, true), this.raw(t3);
      }
      sfixed32(e3) {
        lt(e3);
        let t3 = new Uint8Array(4);
        return new DataView(t3.buffer).setInt32(0, e3, true), this.raw(t3);
      }
      sint32(e3) {
        return lt(e3), Tt(e3 = (e3 << 1 ^ e3 >> 31) >>> 0, this.buf), this;
      }
      sfixed64(e3) {
        let t3 = new Uint8Array(8), A2 = new DataView(t3.buffer), n2 = St.enc(e3);
        return A2.setInt32(0, n2.lo, true), A2.setInt32(4, n2.hi, true), this.raw(t3);
      }
      fixed64(e3) {
        let t3 = new Uint8Array(8), A2 = new DataView(t3.buffer), n2 = St.uEnc(e3);
        return A2.setInt32(0, n2.lo, true), A2.setInt32(4, n2.hi, true), this.raw(t3);
      }
      int64(e3) {
        let t3 = St.enc(e3);
        return pt(t3.lo, t3.hi, this.buf), this;
      }
      sint64(e3) {
        let t3 = St.enc(e3), A2 = t3.hi >> 31;
        return pt(t3.lo << 1 ^ A2, (t3.hi << 1 | t3.lo >>> 31) ^ A2, this.buf), this;
      }
      uint64(e3) {
        let t3 = St.uEnc(e3);
        return pt(t3.lo, t3.hi, this.buf), this;
      }
    }
    class uA {
      constructor(e3, t3) {
        this.varint64 = Ct, this.uint32 = Dt, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = t3 ?? new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), t3 = e3 >>> 3, A2 = 7 & e3;
        if (t3 <= 0 || A2 < 0 || A2 > 5) throw new Error("illegal tag: field no " + t3 + " wire type " + A2);
        return [t3, A2];
      }
      skip(e3, t3) {
        let A2 = this.pos;
        switch (e3) {
          case 0:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case 1:
            this.pos += 4;
          case 5:
            this.pos += 4;
            break;
          case 2:
            let A3 = this.uint32();
            this.pos += A3;
            break;
          case 3:
            for (; ; ) {
              const [e4, A4] = this.tag();
              if (4 === A4) {
                if (void 0 !== t3 && e4 !== t3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(A4, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(A2, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e3 = this.uint32();
        return e3 >>> 1 ^ -(1 & e3);
      }
      int64() {
        return St.dec(...this.varint64());
      }
      uint64() {
        return St.uDec(...this.varint64());
      }
      sint64() {
        let [e3, t3] = this.varint64(), A2 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & t3) << 31) ^ A2, t3 = t3 >>> 1 ^ A2, St.dec(e3, t3);
      }
      bool() {
        let [e3, t3] = this.varint64();
        return 0 !== e3 || 0 !== t3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return St.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return St.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e3 = this.uint32(), t3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(t3, t3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    }
    const gA = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), EA = { readUnknownFields: true, readerFactory: (e3) => new uA(e3) }, hA = { writeUnknownFields: true, writerFactory: () => new lA() };
    function dA(e3) {
      return e3 ? { ...EA, ...e3 } : EA;
    }
    function IA(e3) {
      return e3 ? { ...hA, ...e3 } : hA;
    }
    function BA(e3, t3, A2, n2, r3) {
      let { repeated: o3, localName: s2 } = A2;
      switch (A2.oneof && ((e3 = e3[A2.oneof.localName]).case != s2 && delete e3.value, e3.case = s2, s2 = "value"), A2.kind) {
        case "scalar":
        case "enum":
          const i2 = "enum" == A2.kind ? Rt.INT32 : A2.T;
          let a2 = CA;
          if ("scalar" == A2.kind && A2.L > 0 && (a2 = fA), o3) {
            let A3 = e3[s2];
            if (n2 == cA.LengthDelimited && i2 != Rt.STRING && i2 != Rt.BYTES) {
              let e4 = t3.uint32() + t3.pos;
              for (; t3.pos < e4; ) A3.push(a2(t3, i2));
            } else A3.push(a2(t3, i2));
          } else e3[s2] = a2(t3, i2);
          break;
        case "message":
          const c2 = A2.T;
          o3 ? e3[s2].push(QA(t3, new c2(), r3, A2)) : qt(e3[s2]) ? QA(t3, e3[s2], r3, A2) : (e3[s2] = QA(t3, new c2(), r3, A2), !c2.fieldWrapper || A2.oneof || A2.repeated || (e3[s2] = c2.fieldWrapper.unwrapField(e3[s2])));
          break;
        case "map":
          let [l2, u2] = (function(e4, t4, A3) {
            const n3 = t4.uint32(), r4 = t4.pos + n3;
            let o4, s3;
            for (; t4.pos < r4; ) {
              const [n4] = t4.tag();
              switch (n4) {
                case 1:
                  o4 = CA(t4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      s3 = CA(t4, e4.V.T);
                      break;
                    case "enum":
                      s3 = t4.int32();
                      break;
                    case "message":
                      s3 = QA(t4, new e4.V.T(), A3, void 0);
                  }
              }
            }
            void 0 === o4 && (o4 = Mt(e4.K, Ft.BIGINT));
            "string" != typeof o4 && "number" != typeof o4 && (o4 = o4.toString());
            if (void 0 === s3) switch (e4.V.kind) {
              case "scalar":
                s3 = Mt(e4.V.T, Ft.BIGINT);
                break;
              case "enum":
                s3 = e4.V.T.values[0].no;
                break;
              case "message":
                s3 = new e4.V.T();
            }
            return [o4, s3];
          })(A2, t3, r3);
          e3[s2][l2] = u2;
      }
    }
    function QA(e3, t3, A2, n2) {
      const r3 = t3.getType().runtime.bin, o3 = n2?.delimited;
      return r3.readMessage(t3, e3, o3 ? n2.no : e3.uint32(), A2, o3), t3;
    }
    function fA(e3, t3) {
      const A2 = CA(e3, t3);
      return "bigint" == typeof A2 ? A2.toString() : A2;
    }
    function CA(e3, t3) {
      switch (t3) {
        case Rt.STRING:
          return e3.string();
        case Rt.BOOL:
          return e3.bool();
        case Rt.DOUBLE:
          return e3.double();
        case Rt.FLOAT:
          return e3.float();
        case Rt.INT32:
          return e3.int32();
        case Rt.INT64:
          return e3.int64();
        case Rt.UINT64:
          return e3.uint64();
        case Rt.FIXED64:
          return e3.fixed64();
        case Rt.BYTES:
          return e3.bytes();
        case Rt.FIXED32:
          return e3.fixed32();
        case Rt.SFIXED32:
          return e3.sfixed32();
        case Rt.SFIXED64:
          return e3.sfixed64();
        case Rt.SINT64:
          return e3.sint64();
        case Rt.UINT32:
          return e3.uint32();
        case Rt.SINT32:
          return e3.sint32();
      }
    }
    function pA(e3, t3, A2, n2) {
      ct(void 0 !== t3);
      const r3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let o3 = "enum" == e3.kind ? Rt.INT32 : e3.T;
          if (r3) if (ct(Array.isArray(t3)), e3.packed) !(function(e4, t4, A3, n3) {
            if (!n3.length) return;
            e4.tag(A3, cA.LengthDelimited).fork();
            let [, r4] = kA(t4);
            for (let t5 = 0; t5 < n3.length; t5++) e4[r4](n3[t5]);
            e4.join();
          })(A2, o3, e3.no, t3);
          else for (const n3 of t3) wA(A2, o3, e3.no, n3);
          else wA(A2, o3, e3.no, t3);
          break;
        case "message":
          if (r3) {
            ct(Array.isArray(t3));
            for (const r4 of t3) yA(A2, n2, e3, r4);
          } else yA(A2, n2, e3, t3);
          break;
        case "map":
          ct("object" == typeof t3 && null != t3);
          for (const [r4, o4] of Object.entries(t3)) mA(A2, n2, e3, r4, o4);
      }
    }
    function mA(e3, t3, A2, n2, r3) {
      e3.tag(A2.no, cA.LengthDelimited), e3.fork();
      let o3 = n2;
      switch (A2.K) {
        case Rt.INT32:
        case Rt.FIXED32:
        case Rt.UINT32:
        case Rt.SFIXED32:
        case Rt.SINT32:
          o3 = Number.parseInt(n2);
          break;
        case Rt.BOOL:
          ct("true" == n2 || "false" == n2), o3 = "true" == n2;
      }
      switch (wA(e3, A2.K, 1, o3), A2.V.kind) {
        case "scalar":
          wA(e3, A2.V.T, 2, r3);
          break;
        case "enum":
          wA(e3, Rt.INT32, 2, r3);
          break;
        case "message":
          ct(void 0 !== r3), e3.tag(2, cA.LengthDelimited).bytes(r3.toBinary(t3));
      }
      e3.join();
    }
    function yA(e3, t3, A2, n2) {
      const r3 = Wt(A2.T, n2);
      A2.delimited ? e3.tag(A2.no, cA.StartGroup).raw(r3.toBinary(t3)).tag(A2.no, cA.EndGroup) : e3.tag(A2.no, cA.LengthDelimited).bytes(r3.toBinary(t3));
    }
    function wA(e3, t3, A2, n2) {
      ct(void 0 !== n2);
      let [r3, o3] = kA(t3);
      e3.tag(A2, r3)[o3](n2);
    }
    function kA(e3) {
      let t3 = cA.Varint;
      switch (e3) {
        case Rt.BYTES:
        case Rt.STRING:
          t3 = cA.LengthDelimited;
          break;
        case Rt.DOUBLE:
        case Rt.FIXED64:
        case Rt.SFIXED64:
          t3 = cA.Bit64;
          break;
        case Rt.FIXED32:
        case Rt.SFIXED32:
        case Rt.FLOAT:
          t3 = cA.Bit32;
      }
      return [t3, Rt[e3].toLowerCase()];
    }
    function bA(e3) {
      if (void 0 === e3) return e3;
      if (qt(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    function NA(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    function TA(e3, t3, A2) {
      return { syntax: e3, json: { makeReadOptions: Xt, makeWriteOptions: Zt, readMessage(e4, t4, A3, n2) {
        if (null == t4 || Array.isArray(t4) || "object" != typeof t4) throw new Error(`cannot decode message ${e4.typeName} from JSON: ${eA(t4)}`);
        n2 = n2 ?? new e4();
        const r3 = /* @__PURE__ */ new Map(), o3 = A3.typeRegistry;
        for (const [s2, i2] of Object.entries(t4)) {
          const t5 = e4.fields.findJsonName(s2);
          if (t5) {
            if (t5.oneof) {
              if (null === i2 && "scalar" == t5.kind) continue;
              const A4 = r3.get(t5.oneof);
              if (void 0 !== A4) throw new Error(`cannot decode message ${e4.typeName} from JSON: multiple keys for oneof "${t5.oneof.name}" present: "${A4}", "${s2}"`);
              r3.set(t5.oneof, s2);
            }
            tA(n2, i2, t5, A3, e4);
          } else {
            let t6 = false;
            if (o3?.findExtension && s2.startsWith("[") && s2.endsWith("]")) {
              const r4 = o3.findExtension(s2.substring(1, s2.length - 1));
              if (r4 && r4.extendee.typeName == e4.typeName) {
                t6 = true;
                const [e5, o4] = Lt(r4);
                tA(e5, i2, r4.field, A3, r4), Gt(n2, r4, o4(), A3);
              }
            }
            if (!t6 && !A3.ignoreUnknownFields) throw new Error(`cannot decode message ${e4.typeName} from JSON: key "${s2}" is unknown`);
          }
        }
        return n2;
      }, writeMessage(e4, t4) {
        const A3 = e4.getType(), n2 = {};
        let r3;
        try {
          for (r3 of A3.fields.byNumber()) {
            if (!xt(r3, e4)) {
              if (r3.req) throw "required field not set";
              if (!t4.emitDefaultValues) continue;
              if (!oA(r3)) continue;
            }
            const A4 = sA(r3, r3.oneof ? e4[r3.oneof.localName].value : e4[r3.localName], t4);
            void 0 !== A4 && (n2[t4.useProtoFieldName ? r3.name : r3.jsonName] = A4);
          }
          const o3 = t4.typeRegistry;
          if (o3?.findExtensionFor) for (const r4 of A3.runtime.bin.listUnknownFields(e4)) {
            const s2 = o3.findExtensionFor(A3.typeName, r4.no);
            if (s2 && Pt(e4, s2)) {
              const A4 = Yt(e4, s2, t4), r5 = sA(s2.field, A4, t4);
              void 0 !== r5 && (n2[s2.field.jsonName] = r5);
            }
          }
        } catch (e5) {
          const t5 = r3 ? `cannot encode field ${A3.typeName}.${r3.name} to JSON` : `cannot encode message ${A3.typeName} to JSON`, n3 = e5 instanceof Error ? e5.message : String(e5);
          throw new Error(t5 + (n3.length > 0 ? `: ${n3}` : ""));
        }
        return n2;
      }, readScalar: (e4, t4, A3) => nA(e4, t4, A3 ?? Ft.BIGINT, true), writeScalar(e4, t4, A3) {
        if (void 0 !== t4) return A3 || Ut(e4, t4) ? aA(e4, t4) : void 0;
      }, debug: eA }, bin: { makeReadOptions: dA, makeWriteOptions: IA, listUnknownFields: (e4) => e4[gA] ?? [], discardUnknownFields(e4) {
        delete e4[gA];
      }, writeUnknownFields(e4, t4) {
        const A3 = e4[gA];
        if (A3) for (const e5 of A3) t4.tag(e5.no, e5.wireType).raw(e5.data);
      }, onUnknownField(e4, t4, A3, n2) {
        const r3 = e4;
        Array.isArray(r3[gA]) || (r3[gA] = []), r3[gA].push({ no: t4, wireType: A3, data: new Uint8Array(n2) });
      }, readMessage(e4, t4, A3, n2, r3) {
        const o3 = e4.getType(), s2 = r3 ? t4.len : t4.pos + A3;
        let i2, a2;
        for (; t4.pos < s2 && ([i2, a2] = t4.tag(), true !== r3 || a2 != cA.EndGroup); ) {
          const A4 = o3.fields.find(i2);
          if (!A4) {
            const A5 = t4.skip(a2, i2);
            n2.readUnknownFields && this.onUnknownField(e4, i2, a2, A5);
            continue;
          }
          BA(e4, t4, A4, a2, n2);
        }
        if (r3 && (a2 != cA.EndGroup || i2 !== A3)) throw new Error("invalid end group tag");
      }, readField: BA, writeMessage(e4, t4, A3) {
        const n2 = e4.getType();
        for (const r3 of n2.fields.byNumber()) if (xt(r3, e4)) pA(r3, r3.oneof ? e4[r3.oneof.localName].value : e4[r3.localName], t4, A3);
        else if (r3.req) throw new Error(`cannot encode field ${n2.typeName}.${r3.name} to binary: required field not set`);
        return A3.writeUnknownFields && this.writeUnknownFields(e4, t4), t4;
      }, writeField(e4, t4, A3, n2) {
        void 0 !== t4 && pA(e4, t4, A3, n2);
      } }, util: { ...{ setEnumType: dt, initPartial(e4, t4) {
        if (void 0 === e4) return;
        const A3 = t4.getType();
        for (const n2 of A3.fields.byMember()) {
          const A4 = n2.localName, r3 = t4, o3 = e4;
          if (null != o3[A4]) switch (n2.kind) {
            case "oneof":
              const e5 = o3[A4].case;
              if (void 0 === e5) continue;
              const t5 = n2.findField(e5);
              let s2 = o3[A4].value;
              t5 && "message" == t5.kind && !qt(s2, t5.T) ? s2 = new t5.T(s2) : t5 && "scalar" === t5.kind && t5.T === Rt.BYTES && (s2 = NA(s2)), r3[A4] = { case: e5, value: s2 };
              break;
            case "scalar":
            case "enum":
              let i2 = o3[A4];
              n2.T === Rt.BYTES && (i2 = n2.repeated ? i2.map(NA) : NA(i2)), r3[A4] = i2;
              break;
            case "map":
              switch (n2.V.kind) {
                case "scalar":
                case "enum":
                  if (n2.V.T === Rt.BYTES) for (const [e7, t6] of Object.entries(o3[A4])) r3[A4][e7] = NA(t6);
                  else Object.assign(r3[A4], o3[A4]);
                  break;
                case "message":
                  const e6 = n2.V.T;
                  for (const t6 of Object.keys(o3[A4])) {
                    let n3 = o3[A4][t6];
                    e6.fieldWrapper || (n3 = new e6(n3)), r3[A4][t6] = n3;
                  }
              }
              break;
            case "message":
              const a2 = n2.T;
              if (n2.repeated) r3[A4] = o3[A4].map((e6) => qt(e6, a2) ? e6 : new a2(e6));
              else {
                const e6 = o3[A4];
                a2.fieldWrapper ? "google.protobuf.BytesValue" === a2.typeName ? r3[A4] = NA(e6) : r3[A4] = e6 : r3[A4] = qt(e6, a2) ? e6 : new a2(e6);
              }
          }
        }
      }, equals: (e4, t4, A3) => t4 === A3 || !(!t4 || !A3) && e4.fields.byMember().every((e5) => {
        const n2 = t4[e5.localName], r3 = A3[e5.localName];
        if (e5.repeated) {
          if (n2.length !== r3.length) return false;
          switch (e5.kind) {
            case "message":
              return n2.every((t5, A4) => e5.T.equals(t5, r3[A4]));
            case "scalar":
              return n2.every((t5, A4) => vt(e5.T, t5, r3[A4]));
            case "enum":
              return n2.every((e6, t5) => vt(Rt.INT32, e6, r3[t5]));
          }
          throw new Error(`repeated cannot contain ${e5.kind}`);
        }
        switch (e5.kind) {
          case "message":
            return e5.T.equals(n2, r3);
          case "enum":
            return vt(Rt.INT32, n2, r3);
          case "scalar":
            return vt(e5.T, n2, r3);
          case "oneof":
            if (n2.case !== r3.case) return false;
            const t5 = e5.findField(n2.case);
            if (void 0 === t5) return true;
            switch (t5.kind) {
              case "message":
                return t5.T.equals(n2.value, r3.value);
              case "enum":
                return vt(Rt.INT32, n2.value, r3.value);
              case "scalar":
                return vt(t5.T, n2.value, r3.value);
            }
            throw new Error(`oneof cannot contain ${t5.kind}`);
          case "map":
            const A4 = Object.keys(n2).concat(Object.keys(r3));
            switch (e5.V.kind) {
              case "message":
                const t6 = e5.V.T;
                return A4.every((e6) => t6.equals(n2[e6], r3[e6]));
              case "enum":
                return A4.every((e6) => vt(Rt.INT32, n2[e6], r3[e6]));
              case "scalar":
                const o3 = e5.V.T;
                return A4.every((e6) => vt(o3, n2[e6], r3[e6]));
            }
        }
      }), clone(e4) {
        const t4 = e4.getType(), A3 = new t4(), n2 = A3;
        for (const A4 of t4.fields.byMember()) {
          const t5 = e4[A4.localName];
          let r3;
          if (A4.repeated) r3 = t5.map(bA);
          else if ("map" == A4.kind) {
            r3 = n2[A4.localName];
            for (const [e5, A5] of Object.entries(t5)) r3[e5] = bA(A5);
          } else r3 = "oneof" == A4.kind ? A4.findField(t5.case) ? { case: t5.case, value: bA(t5.value) } : { case: void 0 } : bA(t5);
          n2[A4.localName] = r3;
        }
        for (const A4 of t4.runtime.bin.listUnknownFields(e4)) t4.runtime.bin.onUnknownField(n2, A4.no, A4.wireType, A4.data);
        return A3;
      } }, newFieldList: t3, initFields: A2 }, makeMessageType(e4, t4, A3) {
        return (function(e5, t5, A4, n2) {
          const r3 = n2?.localName ?? t5.substring(t5.lastIndexOf(".") + 1), o3 = { [r3]: function(t6) {
            e5.util.initFields(this), e5.util.initPartial(t6, this);
          } }[r3];
          return Object.setPrototypeOf(o3.prototype, new ft()), Object.assign(o3, { runtime: e5, typeName: t5, fields: e5.util.newFieldList(A4), fromBinary: (e6, t6) => new o3().fromBinary(e6, t6), fromJson: (e6, t6) => new o3().fromJson(e6, t6), fromJsonString: (e6, t6) => new o3().fromJsonString(e6, t6), equals: (t6, A5) => e5.util.equals(o3, t6, A5) }), o3;
        })(this, e4, t4, A3);
      }, makeEnum: Bt, makeEnumType: It, getEnumType: ht, makeExtension(e4, t4, A3) {
        return /* @__PURE__ */ (function(e5, t5, A4, n2) {
          let r3;
          return { typeName: t5, extendee: A4, get field() {
            if (!r3) {
              const A5 = "function" == typeof n2 ? n2() : n2;
              A5.name = t5.split(".").pop(), A5.jsonName = `[${t5}]`, r3 = e5.util.newFieldList([A5]).list()[0];
            }
            return r3;
          }, runtime: e5 };
        })(this, e4, t4, A3);
      } };
    }
    class DA {
      constructor(e3, t3) {
        this._fields = e3, this._normalizer = t3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.jsonName] = e4[t3.name] = t3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const t3 of this.list()) e4[t3.no] = t3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, t3) => e3.no - t3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let t3;
          for (const A2 of this.list()) A2.oneof ? A2.oneof !== t3 && (t3 = A2.oneof, e3.push(t3)) : e3.push(A2);
        }
        return this.members;
      }
    }
    function SA(e3, t3) {
      const A2 = vA(e3);
      return t3 ? A2 : JA(_A(A2));
    }
    function RA(e3) {
      return SA(e3, false);
    }
    const FA = vA;
    function vA(e3) {
      let t3 = false;
      const A2 = [];
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r3 = e3.charAt(n2);
        switch (r3) {
          case "_":
            t3 = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            A2.push(r3), t3 = false;
            break;
          default:
            t3 && (t3 = false, r3 = r3.toUpperCase()), A2.push(r3);
        }
      }
      return A2.join("");
    }
    const MA = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), UA = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), LA = (e3) => `${e3}$`, _A = (e3) => UA.has(e3) ? LA(e3) : e3, JA = (e3) => MA.has(e3) ? LA(e3) : e3;
    class OA {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = RA(e3);
      }
      addField(e3) {
        ct(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
      }
      findField(e3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e4 = 0; e4 < this.fields.length; e4++) this._lookup[this.fields[e4].localName] = this.fields[e4];
        }
        return this._lookup[e3];
      }
    }
    function YA(e3, t3) {
      const A2 = [];
      let n2;
      for (const r3 of "function" == typeof e3 ? e3() : e3) {
        const e4 = r3;
        if (e4.localName = SA(r3.name, void 0 !== r3.oneof), e4.jsonName = r3.jsonName ?? FA(r3.name), e4.repeated = r3.repeated ?? false, "scalar" == r3.kind && (e4.L = r3.L ?? Ft.BIGINT), e4.delimited = r3.delimited ?? false, e4.req = r3.req ?? false, e4.opt = r3.opt ?? false, void 0 === r3.packed && (e4.packed = !!t3 && ("enum" == r3.kind || "scalar" == r3.kind && r3.T != Rt.BYTES && r3.T != Rt.STRING)), void 0 !== r3.oneof) {
          const t4 = "string" == typeof r3.oneof ? r3.oneof : r3.oneof.name;
          n2 && n2.name == t4 || (n2 = new OA(t4)), e4.oneof = n2, n2.addField(e4);
        }
        A2.push(e4);
      }
      return A2;
    }
    const GA = TA("proto3", (e3) => new DA(e3, (e4) => YA(e4, true)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        if (t3.opt) continue;
        const A2 = t3.localName, n2 = e3;
        if (t3.repeated) n2[A2] = [];
        else switch (t3.kind) {
          case "oneof":
            n2[A2] = { case: void 0 };
            break;
          case "enum":
            n2[A2] = 0;
            break;
          case "map":
            n2[A2] = {};
            break;
          case "scalar":
            n2[A2] = Mt(t3.T, t3.L);
        }
      }
    }), PA = TA("proto2", (e3) => new DA(e3, (e4) => YA(e4, false)), (e3) => {
      for (const t3 of e3.getType().fields.byMember()) {
        const A2 = t3.localName, n2 = e3;
        if (t3.repeated) n2[A2] = [];
        else switch (t3.kind) {
          case "oneof":
            n2[A2] = { case: void 0 };
            break;
          case "map":
            n2[A2] = {};
        }
      }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var VA = ((e3) => (e3[e3.Unary = 0] = "Unary", e3[e3.ServerStreaming = 1] = "ServerStreaming", e3[e3.ClientStreaming = 2] = "ClientStreaming", e3[e3.BiDiStreaming = 3] = "BiDiStreaming", e3))(VA || {}), xA = ((e3) => (e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX", e3))(xA || {});
    PA.util.setEnumType(xA, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    const HA = class e3 extends ft {
      constructor(e4) {
        super(), this.file = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    HA.runtime = PA, HA.typeName = "google.protobuf.FileDescriptorSet", HA.fields = PA.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: WA, repeated: true }]);
    const qA = class e3 extends ft {
      constructor(e4) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    qA.runtime = PA, qA.typeName = "google.protobuf.FileDescriptorProto", qA.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: KA, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: En, repeated: true }, { no: 6, name: "service", kind: "message", T: fn, repeated: true }, { no: 7, name: "extension", kind: "message", T: sn, repeated: true }, { no: 8, name: "options", kind: "message", T: yn, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: lr, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: PA.getEnumType(xA), opt: true }]);
    let WA = qA;
    const jA = class e3 extends ft {
      constructor(e4) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    jA.runtime = PA, jA.typeName = "google.protobuf.DescriptorProto", jA.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: sn, repeated: true }, { no: 6, name: "extension", kind: "message", T: sn, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: jA, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: En, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: ZA, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: un, repeated: true }, { no: 7, name: "options", kind: "message", T: bn, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: $A, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let KA = jA;
    const XA = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    XA.runtime = PA, XA.typeName = "google.protobuf.DescriptorProto.ExtensionRange", XA.fields = PA.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: tn, opt: true }]);
    let ZA = XA;
    const zA = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    zA.runtime = PA, zA.typeName = "google.protobuf.DescriptorProto.ReservedRange", zA.fields = PA.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let $A = zA;
    const en = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], this.declaration = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    en.runtime = PA, en.typeName = "google.protobuf.ExtensionRangeOptions", en.fields = PA.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }, { no: 2, name: "declaration", kind: "message", T: rn, repeated: true }, { no: 50, name: "features", kind: "message", T: $n, opt: true }, { no: 3, name: "verification", kind: "enum", T: PA.getEnumType(An), opt: true, default: 1 }]);
    let tn = en;
    var An = ((e3) => (e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED", e3))(An || {});
    PA.util.setEnumType(An, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    const nn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    nn.runtime = PA, nn.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", nn.fields = PA.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    let rn = nn;
    const on = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    on.runtime = PA, on.typeName = "google.protobuf.FieldDescriptorProto", on.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: PA.getEnumType(cn), opt: true }, { no: 5, name: "type", kind: "enum", T: PA.getEnumType(an), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: Tn, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
    let sn = on;
    var an = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(an || {});
    PA.util.setEnumType(an, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var cn = ((e3) => (e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED", e3))(cn || {});
    PA.util.setEnumType(cn, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    const ln = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    ln.runtime = PA, ln.typeName = "google.protobuf.OneofDescriptorProto", ln.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Jn, opt: true }]);
    let un = ln;
    const gn = class e3 extends ft {
      constructor(e4) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    gn.runtime = PA, gn.typeName = "google.protobuf.EnumDescriptorProto", gn.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: Bn, repeated: true }, { no: 3, name: "options", kind: "message", T: Yn, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: dn, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let En = gn;
    const hn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    hn.runtime = PA, hn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", hn.fields = PA.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let dn = hn;
    const In = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    In.runtime = PA, In.typeName = "google.protobuf.EnumValueDescriptorProto", In.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Pn, opt: true }]);
    let Bn = In;
    const Qn = class e3 extends ft {
      constructor(e4) {
        super(), this.method = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Qn.runtime = PA, Qn.typeName = "google.protobuf.ServiceDescriptorProto", Qn.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: pn, repeated: true }, { no: 3, name: "options", kind: "message", T: xn, opt: true }]);
    let fn = Qn;
    const Cn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Cn.runtime = PA, Cn.typeName = "google.protobuf.MethodDescriptorProto", Cn.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: qn, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    let pn = Cn;
    const mn = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    mn.runtime = PA, mn.typeName = "google.protobuf.FileOptions", mn.fields = PA.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: PA.getEnumType(wn), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: $n, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let yn = mn;
    var wn = ((e3) => (e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME", e3))(wn || {});
    PA.util.setEnumType(wn, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    const kn = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    kn.runtime = PA, kn.typeName = "google.protobuf.MessageOptions", kn.fields = PA.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: $n, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let bn = kn;
    const Nn = class e3 extends ft {
      constructor(e4) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Nn.runtime = PA, Nn.typeName = "google.protobuf.FieldOptions", Nn.fields = PA.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: PA.getEnumType(Dn), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: PA.getEnumType(Sn), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: PA.getEnumType(Rn), opt: true }, { no: 19, name: "targets", kind: "enum", T: PA.getEnumType(Fn), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: Mn, repeated: true }, { no: 21, name: "features", kind: "message", T: $n, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Ln, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let Tn = Nn;
    var Dn = ((e3) => (e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE", e3))(Dn || {});
    PA.util.setEnumType(Dn, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
    var Sn = ((e3) => (e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER", e3))(Sn || {});
    PA.util.setEnumType(Sn, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
    var Rn = ((e3) => (e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e3))(Rn || {});
    PA.util.setEnumType(Rn, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
    var Fn = ((e3) => (e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e3))(Fn || {});
    PA.util.setEnumType(Fn, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    const vn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    vn.runtime = PA, vn.typeName = "google.protobuf.FieldOptions.EditionDefault", vn.fields = PA.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: PA.getEnumType(xA), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    let Mn = vn;
    const Un = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Un.runtime = PA, Un.typeName = "google.protobuf.FieldOptions.FeatureSupport", Un.fields = PA.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: PA.getEnumType(xA), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: PA.getEnumType(xA), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: PA.getEnumType(xA), opt: true }]);
    let Ln = Un;
    const _n = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    _n.runtime = PA, _n.typeName = "google.protobuf.OneofOptions", _n.fields = PA.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: $n, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let Jn = _n;
    const On = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    On.runtime = PA, On.typeName = "google.protobuf.EnumOptions", On.fields = PA.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: $n, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let Yn = On;
    const Gn = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Gn.runtime = PA, Gn.typeName = "google.protobuf.EnumValueOptions", Gn.fields = PA.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: $n, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Ln, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let Pn = Gn;
    const Vn = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Vn.runtime = PA, Vn.typeName = "google.protobuf.ServiceOptions", Vn.fields = PA.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: $n, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let xn = Vn;
    const Hn = class e3 extends ft {
      constructor(e4) {
        super(), this.uninterpretedOption = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Hn.runtime = PA, Hn.typeName = "google.protobuf.MethodOptions", Hn.fields = PA.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: PA.getEnumType(Wn), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: $n, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Kn, repeated: true }]);
    let qn = Hn;
    var Wn = ((e3) => (e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT", e3))(Wn || {});
    PA.util.setEnumType(Wn, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    const jn = class e3 extends ft {
      constructor(e4) {
        super(), this.name = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    jn.runtime = PA, jn.typeName = "google.protobuf.UninterpretedOption", jn.fields = PA.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: Zn, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    let Kn = jn;
    const Xn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Xn.runtime = PA, Xn.typeName = "google.protobuf.UninterpretedOption.NamePart", Xn.fields = PA.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    let Zn = Xn;
    const zn = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    zn.runtime = PA, zn.typeName = "google.protobuf.FeatureSet", zn.fields = PA.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: PA.getEnumType(er), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: PA.getEnumType(tr), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: PA.getEnumType(Ar), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: PA.getEnumType(nr), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: PA.getEnumType(rr), opt: true }, { no: 6, name: "json_format", kind: "enum", T: PA.getEnumType(or), opt: true }]);
    let $n = zn;
    var er = ((e3) => (e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e3))(er || {});
    PA.util.setEnumType(er, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
    var tr = ((e3) => (e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED", e3))(tr || {});
    PA.util.setEnumType(tr, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
    var Ar = ((e3) => (e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED", e3))(Ar || {});
    PA.util.setEnumType(Ar, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
    var nr = ((e3) => (e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE", e3))(nr || {});
    PA.util.setEnumType(nr, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
    var rr = ((e3) => (e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED", e3))(rr || {});
    PA.util.setEnumType(rr, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
    var or = ((e3) => (e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e3))(or || {});
    PA.util.setEnumType(or, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    const sr = class e3 extends ft {
      constructor(e4) {
        super(), this.defaults = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    sr.runtime = PA, sr.typeName = "google.protobuf.FeatureSetDefaults", sr.fields = PA.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: ar, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: PA.getEnumType(xA), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: PA.getEnumType(xA), opt: true }]);
    const ir = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    ir.runtime = PA, ir.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", ir.fields = PA.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: PA.getEnumType(xA), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: $n, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: $n, opt: true }]);
    let ar = ir;
    const cr = class e3 extends ft {
      constructor(e4) {
        super(), this.location = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    cr.runtime = PA, cr.typeName = "google.protobuf.SourceCodeInfo", cr.fields = PA.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: gr, repeated: true }]);
    let lr = cr;
    const ur = class e3 extends ft {
      constructor(e4) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    ur.runtime = PA, ur.typeName = "google.protobuf.SourceCodeInfo.Location", ur.fields = PA.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    let gr = ur;
    const Er = class e3 extends ft {
      constructor(e4) {
        super(), this.annotation = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Er.runtime = PA, Er.typeName = "google.protobuf.GeneratedCodeInfo", Er.fields = PA.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: Ir, repeated: true }]);
    let hr = Er;
    const dr = class e3 extends ft {
      constructor(e4) {
        super(), this.path = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    dr.runtime = PA, dr.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", dr.fields = PA.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: PA.getEnumType(Br), opt: true }]);
    let Ir = dr;
    var Br = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS", e3))(Br || {});
    PA.util.setEnumType(Br, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
    an.DOUBLE, Rt.DOUBLE, an.FLOAT, Rt.FLOAT, an.INT64, Rt.INT64, an.UINT64, Rt.UINT64, an.INT32, Rt.INT32, an.FIXED64, Rt.FIXED64, an.FIXED32, Rt.FIXED32, an.BOOL, Rt.BOOL, an.STRING, Rt.STRING, an.GROUP, an.MESSAGE, an.BYTES, Rt.BYTES, an.UINT32, Rt.UINT32, an.ENUM, an.SFIXED32, Rt.SFIXED32, an.SFIXED64, Rt.SFIXED64, an.SINT32, Rt.SINT32, an.SINT64, Rt.SINT64;
    const Qr = class e3 extends ft {
      constructor(e4) {
        super(), this.seconds = St.zero, this.nanos = 0, GA.util.initPartial(e4, this);
      }
      fromJson(e4, t3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${GA.json.debug(e4)}`);
        const A2 = e4.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!A2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n2 = Date.parse(A2[1] + "-" + A2[2] + "-" + A2[3] + "T" + A2[4] + ":" + A2[5] + ":" + A2[6] + (A2[8] ? A2[8] : "Z"));
        if (Number.isNaN(n2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n2 < Date.parse("0001-01-01T00:00:00Z") || n2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = St.parse(n2 / 1e3), this.nanos = 0, A2[7] && (this.nanos = parseInt("1" + A2[7] + "0".repeat(9 - A2[7].length)) - 1e9), this;
      }
      toJson(e4) {
        const t3 = 1e3 * Number(this.seconds);
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let A2 = "Z";
        if (this.nanos > 0) {
          const e5 = (this.nanos + 1e9).toString().substring(1);
          A2 = "000000" === e5.substring(3) ? "." + e5.substring(0, 3) + "Z" : "000" === e5.substring(6) ? "." + e5.substring(0, 6) + "Z" : "." + e5 + "Z";
        }
        return new Date(t3).toISOString().replace(".000Z", A2);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return e3.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(t3) {
        const A2 = t3.getTime();
        return new e3({ seconds: St.parse(Math.floor(A2 / 1e3)), nanos: A2 % 1e3 * 1e6 });
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Qr.runtime = GA, Qr.typeName = "google.protobuf.Timestamp", Qr.fields = GA.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const fr = class e3 extends ft {
      constructor(e4) {
        super(), this.seconds = St.zero, this.nanos = 0, GA.util.initPartial(e4, this);
      }
      fromJson(e4, t3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e4)}`);
        const A2 = e4.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === A2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e4)}`);
        const n2 = Number(A2[1]);
        if (n2 > 315576e6 || n2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${GA.json.debug(e4)}`);
        if (this.seconds = St.parse(n2), "string" == typeof A2[2]) {
          const e5 = A2[2] + "0".repeat(9 - A2[2].length);
          this.nanos = parseInt(e5), (n2 < 0 || Object.is(n2, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e4) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let t3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e5 = Math.abs(this.nanos).toString();
          e5 = "0".repeat(9 - e5.length) + e5, "000000" === e5.substring(3) ? e5 = e5.substring(0, 3) : "000" === e5.substring(6) && (e5 = e5.substring(0, 6)), t3 += "." + e5, this.nanos < 0 && 0 == Number(this.seconds) && (t3 = "-" + t3);
        }
        return t3 + "s";
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    fr.runtime = GA, fr.typeName = "google.protobuf.Duration", fr.fields = GA.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const Cr = class e3 extends ft {
      constructor(e4) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        if ("" === this.typeUrl) return {};
        const t3 = this.typeUrlToName(this.typeUrl), A2 = e4?.typeRegistry?.findMessage(t3);
        if (!A2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let n2 = A2.fromBinary(this.value).toJson(e4);
        return (t3.startsWith("google.protobuf.") || null === n2 || Array.isArray(n2) || "object" != typeof n2) && (n2 = { value: n2 }), n2["@type"] = this.typeUrl, n2;
      }
      fromJson(e4, t3) {
        if (null === e4 || Array.isArray(e4) || "object" != typeof e4) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e4 ? "null" : Array.isArray(e4) ? "array" : typeof e4));
        if (0 == Object.keys(e4).length) return this;
        const A2 = e4["@type"];
        if ("string" != typeof A2 || "" == A2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const n2 = this.typeUrlToName(A2), r3 = t3?.typeRegistry?.findMessage(n2);
        if (!r3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${A2} is not in the type registry`);
        let o3;
        if (n2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e4, "value")) o3 = r3.fromJson(e4.value, t3);
        else {
          const A3 = Object.assign({}, e4);
          delete A3["@type"], o3 = r3.fromJson(A3, t3);
        }
        return this.packFrom(o3), this;
      }
      packFrom(e4) {
        this.value = e4.toBinary(), this.typeUrl = this.typeNameToUrl(e4.getType().typeName);
      }
      unpackTo(e4) {
        return !!this.is(e4.getType()) && (e4.fromBinary(this.value), true);
      }
      unpack(e4) {
        if ("" === this.typeUrl) return;
        const t3 = e4.findMessage(this.typeUrlToName(this.typeUrl));
        return t3 ? t3.fromBinary(this.value) : void 0;
      }
      is(e4) {
        if ("" === this.typeUrl) return false;
        const t3 = this.typeUrlToName(this.typeUrl);
        let A2 = "";
        return A2 = "string" == typeof e4 ? e4 : e4.typeName, t3 === A2;
      }
      typeNameToUrl(e4) {
        return `type.googleapis.com/${e4}`;
      }
      typeUrlToName(e4) {
        if (!e4.length) throw new Error(`invalid type url: ${e4}`);
        const t3 = e4.lastIndexOf("/"), A2 = t3 >= 0 ? e4.substring(t3 + 1) : e4;
        if (!A2.length) throw new Error(`invalid type url: ${e4}`);
        return A2;
      }
      static pack(t3) {
        const A2 = new e3();
        return A2.packFrom(t3), A2;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Cr.runtime = GA, Cr.typeName = "google.protobuf.Any", Cr.fields = GA.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
    let pr = Cr;
    const mr = class e3 extends ft {
      constructor(e4) {
        super(), GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    mr.runtime = GA, mr.typeName = "google.protobuf.Empty", mr.fields = GA.util.newFieldList(() => []);
    const yr = class e3 extends ft {
      constructor(e4) {
        super(), this.paths = [], GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.paths.map((e5) => {
          if (e5.match(/_[0-9]?_/g) || e5.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e5 + '" is irreversible');
          return (function(e6) {
            let t3 = false;
            const A2 = [];
            for (let n2 = 0; n2 < e6.length; n2++) {
              let r3 = e6.charAt(n2);
              switch (r3) {
                case "_":
                  t3 = true;
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  A2.push(r3), t3 = false;
                  break;
                default:
                  t3 && (t3 = false, r3 = r3.toUpperCase()), A2.push(r3);
              }
            }
            return A2.join("");
          })(e5);
        }).join(",");
      }
      fromJson(e4, t3) {
        if ("string" != typeof e4) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + GA.json.debug(e4));
        if ("" === e4) return this;
        return this.paths = e4.split(",").map(function(e5) {
          if (e5.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const t4 = e5.replace(/[A-Z]/g, (e6) => "_" + e6.toLowerCase());
          return "_" === t4[0] ? t4.substring(1) : t4;
        }), this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    yr.runtime = GA, yr.typeName = "google.protobuf.FieldMask", yr.fields = GA.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
    var wr = ((e3) => (e3[e3.NULL_VALUE = 0] = "NULL_VALUE", e3))(wr || {});
    GA.util.setEnumType(wr, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    const kr = class e3 extends ft {
      constructor(e4) {
        super(), this.fields = {}, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        const t3 = {};
        for (const [A2, n2] of Object.entries(this.fields)) t3[A2] = n2.toJson(e4);
        return t3;
      }
      fromJson(e4, t3) {
        if ("object" != typeof e4 || null == e4 || Array.isArray(e4)) throw new Error("cannot decode google.protobuf.Struct from JSON " + GA.json.debug(e4));
        for (const [t4, A2] of Object.entries(e4)) this.fields[t4] = Tr.fromJson(A2);
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    kr.runtime = GA, kr.typeName = "google.protobuf.Struct", kr.fields = GA.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: Tr } }]);
    let br = kr;
    const Nr = class e3 extends ft {
      constructor(e4) {
        super(), this.kind = { case: void 0 }, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        switch (this.kind.case) {
          case "nullValue":
            return null;
          case "numberValue":
            if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
            return this.kind.value;
          case "boolValue":
          case "stringValue":
            return this.kind.value;
          case "structValue":
          case "listValue":
            return this.kind.value.toJson({ ...e4, emitDefaultValues: true });
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e4, t3) {
        switch (typeof e4) {
          case "number":
            this.kind = { case: "numberValue", value: e4 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e4 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e4 };
            break;
          case "object":
            null === e4 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e4) ? this.kind = { case: "listValue", value: Sr.fromJson(e4) } : this.kind = { case: "structValue", value: br.fromJson(e4) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + GA.json.debug(e4));
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Nr.runtime = GA, Nr.typeName = "google.protobuf.Value", Nr.fields = GA.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: GA.getEnumType(wr), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: br, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: Sr, oneof: "kind" }]);
    let Tr = Nr;
    const Dr = class e3 extends ft {
      constructor(e4) {
        super(), this.values = [], GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.values.map((e5) => e5.toJson());
      }
      fromJson(e4, t3) {
        if (!Array.isArray(e4)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + GA.json.debug(e4));
        for (let t4 of e4) this.values.push(Tr.fromJson(t4));
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Dr.runtime = GA, Dr.typeName = "google.protobuf.ListValue", Dr.fields = GA.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: Tr, repeated: true }]);
    let Sr = Dr;
    const Rr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = 0, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.DOUBLE, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.DOUBLE, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Rr.runtime = GA, Rr.typeName = "google.protobuf.DoubleValue", Rr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), Rr.fieldWrapper = { wrapField: (e3) => new Rr({ value: e3 }), unwrapField: (e3) => e3.value };
    const Fr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = 0, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.FLOAT, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.FLOAT, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Fr.runtime = GA, Fr.typeName = "google.protobuf.FloatValue", Fr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), Fr.fieldWrapper = { wrapField: (e3) => new Fr({ value: e3 }), unwrapField: (e3) => e3.value };
    const vr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = St.zero, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.INT64, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.INT64, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    vr.runtime = GA, vr.typeName = "google.protobuf.Int64Value", vr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), vr.fieldWrapper = { wrapField: (e3) => new vr({ value: e3 }), unwrapField: (e3) => e3.value };
    const Mr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = St.zero, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.UINT64, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.UINT64, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Mr.runtime = GA, Mr.typeName = "google.protobuf.UInt64Value", Mr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), Mr.fieldWrapper = { wrapField: (e3) => new Mr({ value: e3 }), unwrapField: (e3) => e3.value };
    const Ur = class e3 extends ft {
      constructor(e4) {
        super(), this.value = 0, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.INT32, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.INT32, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Ur.runtime = GA, Ur.typeName = "google.protobuf.Int32Value", Ur.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Ur.fieldWrapper = { wrapField: (e3) => new Ur({ value: e3 }), unwrapField: (e3) => e3.value };
    const Lr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = 0, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.UINT32, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.UINT32, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Lr.runtime = GA, Lr.typeName = "google.protobuf.UInt32Value", Lr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), Lr.fieldWrapper = { wrapField: (e3) => new Lr({ value: e3 }), unwrapField: (e3) => e3.value };
    const _r = class e3 extends ft {
      constructor(e4) {
        super(), this.value = false, GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.BOOL, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.BOOL, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    _r.runtime = GA, _r.typeName = "google.protobuf.BoolValue", _r.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), _r.fieldWrapper = { wrapField: (e3) => new _r({ value: e3 }), unwrapField: (e3) => e3.value };
    const Jr = class e3 extends ft {
      constructor(e4) {
        super(), this.value = "", GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.STRING, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.STRING, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Jr.runtime = GA, Jr.typeName = "google.protobuf.StringValue", Jr.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Jr.fieldWrapper = { wrapField: (e3) => new Jr({ value: e3 }), unwrapField: (e3) => e3.value };
    const Or = class e3 extends ft {
      constructor(e4) {
        super(), this.value = new Uint8Array(0), GA.util.initPartial(e4, this);
      }
      toJson(e4) {
        return GA.json.writeScalar(Rt.BYTES, this.value, true);
      }
      fromJson(e4, t3) {
        try {
          this.value = GA.json.readScalar(Rt.BYTES, e4);
        } catch (e5) {
          let t4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
        }
        return this;
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Or.runtime = GA, Or.typeName = "google.protobuf.BytesValue", Or.fields = GA.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), Or.fieldWrapper = { wrapField: (e3) => new Or({ value: e3 }), unwrapField: (e3) => e3.value };
    ht(wr);
    const Yr = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Yr.runtime = PA, Yr.typeName = "google.protobuf.compiler.Version", Yr.fields = PA.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    let Gr = Yr;
    const Pr = class e3 extends ft {
      constructor(e4) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Pr.runtime = PA, Pr.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Pr.fields = PA.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: WA, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: WA, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Gr, opt: true }]);
    const Vr = class e3 extends ft {
      constructor(e4) {
        super(), this.file = [], PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Vr.runtime = PA, Vr.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Vr.fields = PA.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: qr, repeated: true }]);
    var xr = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e3))(xr || {});
    PA.util.setEnumType(xr, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    const Hr = class e3 extends ft {
      constructor(e4) {
        super(), PA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return PA.util.equals(e3, t3, A2);
      }
    };
    Hr.runtime = PA, Hr.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Hr.fields = PA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: hr, opt: true }]);
    let qr = Hr;
    const Wr = class e3 extends ft {
      constructor(e4) {
        super(), this.fileName = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Wr.runtime = GA, Wr.typeName = "google.protobuf.SourceContext", Wr.fields = GA.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
    let jr = Wr;
    var Kr = ((e3) => (e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS", e3))(Kr || {});
    GA.util.setEnumType(Kr, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    const Xr = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Xr.runtime = GA, Xr.typeName = "google.protobuf.Type", Xr.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: zr, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: oo, repeated: true }, { no: 5, name: "source_context", kind: "message", T: jr }, { no: 6, name: "syntax", kind: "enum", T: GA.getEnumType(Kr) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    const Zr = class e3 extends ft {
      constructor(e4) {
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Zr.runtime = GA, Zr.typeName = "google.protobuf.Field", Zr.fields = GA.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: GA.getEnumType($r) }, { no: 2, name: "cardinality", kind: "enum", T: GA.getEnumType(eo) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: oo, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
    let zr = Zr;
    var $r = ((e3) => (e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64", e3))($r || {});
    GA.util.setEnumType($r, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var eo = ((e3) => (e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED", e3))(eo || {});
    GA.util.setEnumType(eo, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    const to = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    to.runtime = GA, to.typeName = "google.protobuf.Enum", to.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: no, repeated: true }, { no: 3, name: "options", kind: "message", T: oo, repeated: true }, { no: 4, name: "source_context", kind: "message", T: jr }, { no: 5, name: "syntax", kind: "enum", T: GA.getEnumType(Kr) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    const Ao = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.number = 0, this.options = [], GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    Ao.runtime = GA, Ao.typeName = "google.protobuf.EnumValue", Ao.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: oo, repeated: true }]);
    let no = Ao;
    const ro = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    ro.runtime = GA, ro.typeName = "google.protobuf.Option", ro.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: pr }]);
    let oo = ro;
    const so = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Kr.PROTO2, GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    so.runtime = GA, so.typeName = "google.protobuf.Api", so.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: ao, repeated: true }, { no: 3, name: "options", kind: "message", T: oo, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: jr }, { no: 6, name: "mixins", kind: "message", T: lo, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: GA.getEnumType(Kr) }]);
    const io = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Kr.PROTO2, GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    io.runtime = GA, io.typeName = "google.protobuf.Method", io.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: oo, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: GA.getEnumType(Kr) }]);
    let ao = io;
    const co = class e3 extends ft {
      constructor(e4) {
        super(), this.name = "", this.root = "", GA.util.initPartial(e4, this);
      }
      static fromBinary(t3, A2) {
        return new e3().fromBinary(t3, A2);
      }
      static fromJson(t3, A2) {
        return new e3().fromJson(t3, A2);
      }
      static fromJsonString(t3, A2) {
        return new e3().fromJsonString(t3, A2);
      }
      static equals(t3, A2) {
        return GA.util.equals(e3, t3, A2);
      }
    };
    co.runtime = GA, co.typeName = "google.protobuf.Mixin", co.fields = GA.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
    let lo = co;
    const uo = GA.makeMessageType("aiserver.v1.User", () => [{ no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "email", kind: "scalar", T: 9, opt: true }, { no: 4, name: "email_verified", kind: "scalar", T: 8, opt: true }, { no: 5, name: "first_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "last_name", kind: "scalar", T: 9, opt: true }, { no: 7, name: "created_at", kind: "scalar", T: 9, opt: true }, { no: 8, name: "updated_at", kind: "scalar", T: 9, opt: true }]), go = GA.makeMessageType("aiserver.v1.Session", () => [{ no: 1, name: "session_id", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: GA.getEnumType(Eo) }, { no: 3, name: "created_at", kind: "scalar", T: 9 }, { no: 4, name: "expires_at", kind: "scalar", T: 9 }]), Eo = GA.makeEnum("aiserver.v1.Session.SessionType", [{ no: 0, name: "SESSION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SESSION_TYPE_WEB", localName: "WEB" }, { no: 2, name: "SESSION_TYPE_CLIENT", localName: "CLIENT" }, { no: 3, name: "SESSION_TYPE_BUGBOT", localName: "BUGBOT" }, { no: 4, name: "SESSION_TYPE_BACKGROUND_AGENT", localName: "BACKGROUND_AGENT" }, { no: 5, name: "SESSION_TYPE_SUPPORT_IMPERSONATION", localName: "SUPPORT_IMPERSONATION" }, { no: 6, name: "SESSION_TYPE_API_KEY_TOKEN", localName: "API_KEY_TOKEN" }, { no: 7, name: "SESSION_TYPE_TRAINING", localName: "TRAINING" }, { no: 8, name: "SESSION_TYPE_EXEC_DAEMON", localName: "EXEC_DAEMON" }, { no: 9, name: "SESSION_TYPE_GRAPHITE", localName: "GRAPHITE" }, { no: 10, name: "SESSION_TYPE_MOBILE", localName: "MOBILE" }, { no: 11, name: "SESSION_TYPE_SAND_MOBILE", localName: "SAND_MOBILE" }]), ho = GA.makeMessageType("aiserver.v1.ListActiveSessionsRequest", []), Io = GA.makeMessageType("aiserver.v1.ListActiveSessionsResponse", () => [{ no: 1, name: "sessions", kind: "message", T: go, repeated: true }]), Bo = GA.makeMessageType("aiserver.v1.RevokeSessionRequest", () => [{ no: 1, name: "session_id", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: GA.getEnumType(Eo) }]), Qo = GA.makeMessageType("aiserver.v1.RevokeSessionResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), fo = GA.makeMessageType("aiserver.v1.RevokeCurrentSessionRequest", []), Co = GA.makeMessageType("aiserver.v1.RevokeCurrentSessionResponse", []), po = GA.makeMessageType("aiserver.v1.GetSessionTokenRequest", () => [{ no: 1, name: "user", kind: "message", T: uo }, { no: 2, name: "destination", kind: "enum", T: GA.getEnumType(mo) }, { no: 3, name: "stub", kind: "scalar", T: 9, opt: true }, { no: 4, name: "code", kind: "scalar", T: 9, opt: true }, { no: 5, name: "code_verifier", kind: "scalar", T: 9, opt: true }, { no: 6, name: "redirect_uri", kind: "scalar", T: 9, opt: true }, { no: 7, name: "issue_refresh_token", kind: "scalar", T: 8, opt: true }]), mo = GA.makeEnum("aiserver.v1.GetSessionTokenRequest.Destination", [{ no: 0, name: "DESTINATION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DESTINATION_PORTAL", localName: "PORTAL" }, { no: 2, name: "DESTINATION_AISERVER", localName: "AISERVER" }, { no: 3, name: "DESTINATION_AUTH_PROXY", localName: "AUTH_PROXY" }]), yo = GA.makeMessageType("aiserver.v1.GetSessionTokenResponse", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "should_show_trial", kind: "scalar", T: 8 }, { no: 4, name: "enable_trial_for_deep_control", kind: "scalar", T: 8 }, { no: 5, name: "was_auto_enrolled", kind: "scalar", T: 8 }, { no: 6, name: "refresh_token", kind: "scalar", T: 9, opt: true }, { no: 7, name: "workos_sso_required", kind: "message", T: wo, opt: true }, { no: 8, name: "workos_authkit_required", kind: "message", T: ko, opt: true }, { no: 9, name: "xai_sso_cookie_value", kind: "scalar", T: 9, opt: true }, { no: 10, name: "xai_sso_rw_cookie_value", kind: "scalar", T: 9, opt: true }]), wo = GA.makeMessageType("aiserver.v1.WorkosSsoRequiredContinuation", () => [{ no: 1, name: "connection_ids", kind: "scalar", T: 9, repeated: true }]), ko = GA.makeMessageType("aiserver.v1.WorkosAuthkitRequiredContinuation", []), bo = GA.makeMessageType("aiserver.v1.RefreshMobileSessionRequest", () => [{ no: 1, name: "refresh_token", kind: "scalar", T: 9 }]), No = GA.makeMessageType("aiserver.v1.RefreshMobileSessionResponse", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "refresh_token", kind: "scalar", T: 9 }]), To = GA.makeMessageType("aiserver.v1.RevokeMobileSessionFamilyRequest", () => [{ no: 1, name: "refresh_token", kind: "scalar", T: 9 }]), Do = GA.makeMessageType("aiserver.v1.RevokeMobileSessionFamilyResponse", []), So = GA.makeMessageType("aiserver.v1.ConvertMobileSessionToRefreshPairRequest", []), Ro = GA.makeMessageType("aiserver.v1.ConvertMobileSessionToRefreshPairResponse", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "refresh_token", kind: "scalar", T: 9 }]), Fo = GA.makeMessageType("aiserver.v1.CheckSessionTokenRequest", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "user", kind: "message", T: uo }]), vo = GA.makeMessageType("aiserver.v1.CheckSessionTokenResponse", () => [{ no: 1, name: "valid", kind: "scalar", T: 8 }, { no: 2, name: "validity", kind: "enum", T: GA.getEnumType(Mo) }]), Mo = GA.makeEnum("aiserver.v1.CheckSessionTokenResponse.Validity", [{ no: 0, name: "VALIDITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "VALIDITY_VALID", localName: "VALID" }, { no: 2, name: "VALIDITY_INVALID", localName: "INVALID" }]), Uo = GA.makeMessageType("aiserver.v1.CreateMobileSessionRequest", []), Lo = GA.makeMessageType("aiserver.v1.CreateMobileSessionResponse", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "auth_id", kind: "scalar", T: 9 }]), _o = GA.makeMessageType("aiserver.v1.UpgradeMobileSessionRequest", []), Jo = GA.makeMessageType("aiserver.v1.UpgradeMobileSessionResponse", () => [{ no: 1, name: "session_token", kind: "scalar", T: 9 }, { no: 2, name: "workos_id", kind: "scalar", T: 9 }]), Oo = GA.makeMessageType("aiserver.v1.CustomerIdRequest", () => [{ no: 1, name: "email", kind: "scalar", T: 9 }]), Yo = GA.makeMessageType("aiserver.v1.CustomerIdResponse", () => [{ no: 1, name: "customer_id", kind: "scalar", T: 9, opt: true }]), Go = GA.makeMessageType("aiserver.v1.MarkPrivacyRequest", () => [{ no: 2, name: "current_privacy_mode", kind: "scalar", T: 8, opt: true }, { no: 3, name: "onboarding_privacy_mode", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_using_current_and_onboarding_format", kind: "scalar", T: 8 }, { no: 5, name: "onboarding_data_privacy_version", kind: "scalar", T: 9, opt: true }, { no: 6, name: "time_elapsed_since_onboarding", kind: "scalar", T: 1, opt: true }, { no: 7, name: "first_after_waiting_period", kind: "scalar", T: 8, opt: true }, { no: 8, name: "configured_privacy_mode_for_settings", kind: "scalar", T: 8, opt: true }, { no: 1, name: "privacy", kind: "scalar", T: 8 }]), Po = GA.makeMessageType("aiserver.v1.MarkPrivacyResponse", []), Vo = GA.makeMessageType("aiserver.v1.GetEmailRequest", []), xo = GA.makeMessageType("aiserver.v1.GetEmailResponse", () => [{ no: 1, name: "email", kind: "scalar", T: 9 }, { no: 2, name: "sign_up_type", kind: "enum", T: GA.getEnumType(Ho) }, { no: 3, name: "job_role", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_recently_created_user", kind: "scalar", T: 8, opt: true }, { no: 5, name: "use_case", kind: "scalar", T: 9, opt: true }]), Ho = GA.makeEnum("aiserver.v1.GetEmailResponse.SignUpType", [{ no: 0, name: "SIGN_UP_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SIGN_UP_TYPE_AUTH_0", localName: "AUTH_0" }, { no: 2, name: "SIGN_UP_TYPE_GITHUB", localName: "GITHUB" }, { no: 3, name: "SIGN_UP_TYPE_GOOGLE", localName: "GOOGLE" }, { no: 4, name: "SIGN_UP_TYPE_WORKOS", localName: "WORKOS" }, { no: 5, name: "SIGN_UP_TYPE_GROK", localName: "GROK" }, { no: 6, name: "SIGN_UP_TYPE_X", localName: "X" }]), qo = GA.makeMessageType("aiserver.v1.GetUserMetaRequest", []), Wo = GA.makeMessageType("aiserver.v1.GetUserMetaResponse", () => [{ no: 1, name: "email", kind: "scalar", T: 9 }, { no: 2, name: "sign_up_type", kind: "enum", T: GA.getEnumType(Ho) }, { no: 3, name: "user_id", kind: "scalar", T: 3 }, { no: 4, name: "workos_id", kind: "scalar", T: 9, opt: true }, { no: 5, name: "profile_picture_url", kind: "scalar", T: 9, opt: true }]), jo = GA.makeMessageType("aiserver.v1.EmailValidRequest", () => [{ no: 1, name: "email", kind: "scalar", T: 9 }]), Ko = GA.makeMessageType("aiserver.v1.EmailValidResponse", () => [{ no: 1, name: "valid", kind: "scalar", T: 8 }]), Xo = GA.makeMessageType("aiserver.v1.SwitchCmdKFractionRequest", () => [{ no: 1, name: "use_turbo", kind: "scalar", T: 8 }]), Zo = GA.makeMessageType("aiserver.v1.SwitchCmdKFractionResponse", []), zo = GA.makeMessageType("aiserver.v1.SetPrivacyModeRequest", () => [{ no: 1, name: "privacy_mode_enabled", kind: "scalar", T: 8 }, { no: 2, name: "machine_identifier", kind: "scalar", T: 9 }, { no: 3, name: "new_onboarding_done", kind: "scalar", T: 8 }, { no: 4, name: "new_change_management_done", kind: "scalar", T: 8 }, { no: 5, name: "eligible_for_snippet_learning", kind: "scalar", T: 8 }, { no: 6, name: "timestamp_of_onboarding", kind: "scalar", T: 3, opt: true }, { no: 7, name: "timestamp_of_change_management", kind: "scalar", T: 3, opt: true }]), $o = GA.makeMessageType("aiserver.v1.SetPrivacyModeResponse", []), es = GA.makeMessageType("aiserver.v1.ListJwtPublicKeysRequest", []), ts = GA.makeMessageType("aiserver.v1.JwtPublicKey", () => [{ no: 1, name: "kid", kind: "scalar", T: 9 }, { no: 2, name: "public_key", kind: "scalar", T: 9 }]), As = GA.makeMessageType("aiserver.v1.ListJwtPublicKeysResponse", () => [{ no: 1, name: "keys", kind: "message", T: ts, repeated: true }]), ns = GA.makeMessageType("aiserver.v1.IsDomainForcedToSsoRequest", () => [{ no: 1, name: "domain", kind: "scalar", T: 9 }]), rs = GA.makeMessageType("aiserver.v1.IsDomainForcedToSsoResponse", () => [{ no: 1, name: "forced_to_sso", kind: "scalar", T: 8 }]), os = { typeName: "aiserver.v1.AuthService", methods: { getEmail: { name: "GetEmail", I: Vo, O: xo, kind: VA.Unary }, getUserMeta: { name: "GetUserMeta", I: qo, O: Wo, kind: VA.Unary }, emailValid: { name: "EmailValid", I: jo, O: Ko, kind: VA.Unary }, markPrivacy: { name: "MarkPrivacy", I: Go, O: Po, kind: VA.Unary }, switchCmdKFraction: { name: "SwitchCmdKFraction", I: Xo, O: Zo, kind: VA.Unary }, getCustomerId: { name: "GetCustomerId", I: Oo, O: Yo, kind: VA.Unary }, setPrivacyMode: { name: "SetPrivacyMode", I: zo, O: $o, kind: VA.Unary }, getSessionToken: { name: "GetSessionToken", I: po, O: yo, kind: VA.Unary }, checkSessionToken: { name: "CheckSessionToken", I: Fo, O: vo, kind: VA.Unary }, createMobileSession: { name: "CreateMobileSession", I: Uo, O: Lo, kind: VA.Unary }, upgradeMobileSession: { name: "UpgradeMobileSession", I: _o, O: Jo, kind: VA.Unary }, refreshMobileSession: { name: "RefreshMobileSession", I: bo, O: No, kind: VA.Unary }, revokeMobileSessionFamily: { name: "RevokeMobileSessionFamily", I: To, O: Do, kind: VA.Unary }, convertMobileSessionToRefreshPair: { name: "ConvertMobileSessionToRefreshPair", I: So, O: Ro, kind: VA.Unary }, listActiveSessions: { name: "ListActiveSessions", I: ho, O: Io, kind: VA.Unary }, revokeSession: { name: "RevokeSession", I: Bo, O: Qo, kind: VA.Unary }, revokeCurrentSession: { name: "RevokeCurrentSession", I: fo, O: Co, kind: VA.Unary }, listJwtPublicKeys: { name: "ListJwtPublicKeys", I: es, O: As, kind: VA.Unary }, isDomainForcedToSso: { name: "IsDomainForcedToSso", I: ns, O: rs, kind: VA.Unary } } }, ss = GA.makeEnum("aiserver.v1.BugbotDeeplinkEventKind", [{ no: 0, name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED", localName: "CLICKED" }, { no: 2, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN", localName: "HANDLED_DIALOG_SHOWN" }, { no: 3, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED", localName: "HANDLED_CHAT_CREATED" }, { no: 4, name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR", localName: "ERROR" }, { no: 5, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB", localName: "HANDLED_FIX_IN_WEB" }]), is = GA.makeEnum("aiserver.v1.BugbotFeedbackReaction", [{ no: 0, name: "BUGBOT_FEEDBACK_REACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGBOT_FEEDBACK_REACTION_THUMBS_UP", localName: "THUMBS_UP" }, { no: 2, name: "BUGBOT_FEEDBACK_REACTION_THUMBS_DOWN", localName: "THUMBS_DOWN" }]), as = GA.makeEnum("aiserver.v1.BugBotRunStatus", [{ no: 0, name: "BUG_BOT_RUN_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUG_BOT_RUN_STATUS_NO_RUN", localName: "NO_RUN" }, { no: 2, name: "BUG_BOT_RUN_STATUS_IN_PROGRESS", localName: "IN_PROGRESS" }, { no: 3, name: "BUG_BOT_RUN_STATUS_COMPLETED", localName: "COMPLETED" }]), cs = GA.makeMessageType("aiserver.v1.BugLocation", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: true }]), ls = GA.makeMessageType("aiserver.v1.BugReport", () => [{ no: 1, name: "locations", kind: "message", T: cs, repeated: true }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "confidence", kind: "scalar", T: 2, opt: true }, { no: 5, name: "category", kind: "scalar", T: 9, opt: true }, { no: 6, name: "severity", kind: "scalar", T: 9, opt: true }, { no: 7, name: "title", kind: "scalar", T: 9, opt: true }, { no: 9, name: "rationale", kind: "scalar", T: 9, opt: true }, { no: 10, name: "triggered_by_rule_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_confidence", kind: "scalar", T: 2, opt: true }]), us = GA.makeMessageType("aiserver.v1.LogDeeplinkEventRequest", () => [{ no: 1, name: "user_id", kind: "scalar", T: 5 }, { no: 2, name: "bug_id", kind: "scalar", T: 9 }, { no: 3, name: "comment_id", kind: "scalar", T: 3, opt: true }, { no: 4, name: "event", kind: "enum", T: GA.getEnumType(ss) }]), gs = GA.makeMessageType("aiserver.v1.LogDeeplinkEventResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), Es = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataRequest", () => [{ no: 1, name: "redis_key", kind: "scalar", T: 9 }, { no: 2, name: "encryption_key", kind: "scalar", T: 9 }]), hs = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataResponse", () => [{ no: 1, name: "bug_report", kind: "message", T: ls }]), ds = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleRequest", () => [{ no: 1, name: "redis_key", kind: "scalar", T: 9 }, { no: 2, name: "encryption_key", kind: "scalar", T: 9 }]), Is = GA.makeMessageType("aiserver.v1.GetEncryptedBugDataMultipleResponse", () => [{ no: 1, name: "bug_reports", kind: "message", T: ls, repeated: true }]), Bs = GA.makeMessageType("aiserver.v1.AddBugbotFeedbackRequest", () => [{ no: 1, name: "comment_id", kind: "scalar", T: 3 }, { no: 2, name: "reaction", kind: "enum", T: GA.getEnumType(is) }, { no: 3, name: "feedback", kind: "scalar", T: 9, opt: true }]), Qs = GA.makeMessageType("aiserver.v1.AddBugbotFeedbackResponse", () => [{ no: 1, name: "id", kind: "scalar", T: 3 }]), fs = GA.makeMessageType("aiserver.v1.GetBugBotRunEtaRequest", () => [{ no: 1, name: "repository_owner", kind: "scalar", T: 9 }, { no: 2, name: "repository_name", kind: "scalar", T: 9 }, { no: 3, name: "pr_number", kind: "scalar", T: 5 }]), Cs = GA.makeMessageType("aiserver.v1.GetBugBotRunEtaResponse", () => [{ no: 1, name: "status", kind: "enum", T: GA.getEnumType(as) }, { no: 2, name: "estimated_completion_time_ms", kind: "scalar", T: 3, opt: true }]), ps = { typeName: "aiserver.v1.BugbotService", methods: { logDeeplinkEvent: { name: "LogDeeplinkEvent", I: us, O: gs, kind: VA.Unary }, getEncryptedBugData: { name: "GetEncryptedBugData", I: Es, O: hs, kind: VA.Unary }, getEncryptedBugDataMultiple: { name: "GetEncryptedBugDataMultiple", I: ds, O: Is, kind: VA.Unary }, addBugbotFeedback: { name: "AddBugbotFeedback", I: Bs, O: Qs, kind: VA.Unary }, getBugBotRunEta: { name: "GetBugBotRunEta", I: fs, O: Cs, kind: VA.Unary } } };
    var ms = ((e3) => (e3.BUGBOT_FIX_IN_CURSOR = "BUGBOT_FIX_IN_CURSOR", e3.BUGBOT_FIX_ALL_IN_CURSOR = "BUGBOT_FIX_ALL_IN_CURSOR", e3))(ms || {});
    const ys = [0, 1];
    function ws(e3) {
      if (!e3 || "object" != typeof e3) return { success: false, error: "invalid_structure", details: "Payload is not an object" };
      const t3 = e3.version ?? 0;
      if (!ys.includes(t3)) return { success: false, error: "unsupported_version", version: t3 };
      if ("BUGBOT_FIX_ALL_IN_CURSOR" === e3.type) return 1 !== t3 ? { success: false, error: "unsupported_version", version: t3 } : (function(e4) {
        const t4 = [];
        e4.data ? (e4.data.redisKey || t4.push("data.redisKey"), e4.data.encryptionKey || t4.push("data.encryptionKey")) : t4.push("data");
        if (t4.length > 0) return { success: false, error: "missing_fields", fields: t4 };
        return { success: true, payload: e4 };
      })(e3);
      if ("BUGBOT_FIX_IN_CURSOR" !== e3.type) return { success: false, error: "invalid_structure", details: `Unsupported deeplink type: ${e3.type}` };
      switch (t3) {
        case 0:
          return (function(e4) {
            const t4 = [];
            e4.data ? e4.data.bug || t4.push("data.bug") : t4.push("data");
            if (t4.length > 0) return { success: false, error: "missing_fields", fields: t4 };
            return { success: true, payload: e4 };
          })(e3);
        case 1:
          return (function(e4) {
            const t4 = [];
            e4.data ? (e4.data.redisKey || t4.push("data.redisKey"), e4.data.encryptionKey || t4.push("data.encryptionKey")) : t4.push("data");
            if (t4.length > 0) return { success: false, error: "missing_fields", fields: t4 };
            return { success: true, payload: e4 };
          })(e3);
        default:
          return { success: false, error: "unsupported_version", version: t3 };
      }
    }
    function ks(e3) {
      if (e3.success) return "";
      switch (e3.error) {
        case "unsupported_version":
          return void 0 === e3.version || e3.version > Math.max(...ys) ? "This deeplink requires a newer version of Cursor. Please update Cursor to the latest version to use this deeplink." : "This deeplink format is no longer supported.";
        case "invalid_structure":
          return `Invalid deeplink format: ${e3.details}.`;
        case "missing_fields":
          return `Incomplete deeplink data (missing: ${e3.fields.join(", ")}).`;
        default:
          return "Invalid deeplink format. Please ask the sender to create a new deeplink.";
      }
    }
    function bs(e3) {
      return Buffer.from(e3, "base64url").toString("utf8");
    }
    function Ns(e3, t3) {
      const A2 = [];
      if (t3) {
        const e4 = (e5) => async (A3) => (A3.header.set("Authorization", `Bearer ${t3}`), await e5(A3));
        A2.push(e4);
      }
      const n2 = at({ baseUrl: e3, useBinaryFormat: true, httpVersion: e3.includes("api3.cursor") ? "2" : "1.1", interceptors: A2 });
      return G(ps, n2);
    }
    async function Ts() {
      const e3 = await i();
      if (!e3) throw new Error("Missing backend URL or access token");
      const t3 = (function(e4, t4) {
        const A2 = [];
        if (t4) {
          const e5 = (e6) => async (A3) => (A3.header.set("Authorization", `Bearer ${t4}`), await e6(A3));
          A2.push(e5);
        }
        const n2 = at({ baseUrl: e4, useBinaryFormat: true, httpVersion: e4.includes("api3.cursor") ? "2" : "1.1", interceptors: A2 });
        return G(os, n2);
      })(e3.backendUrl, e3.accessToken);
      return (await t3.listJwtPublicKeys(new es())).keys.map((e4) => ({ kid: e4.kid, publicKey: e4.publicKey }));
    }
    async function Ds(t3) {
      const A2 = new URLSearchParams(t3.query), n2 = A2.get("link"), r3 = A2.get("data");
      if (!n2 && !r3) return;
      let o3, s2, a2, l2, u2;
      if (n2) try {
        const t4 = bs(n2), A3 = ws(JSON.parse(t4));
        if (!A3.success) {
          const t5 = ks(A3);
          return console.error("[cursor deeplink] Payload validation failed:", A3), void e2.window.showErrorMessage(t5);
        }
        if (o3 = A3.payload, !("version" in o3) || 1 !== o3.version) return console.error("[cursor deeplink] Unsigned deeplink must use v1 payload"), void e2.window.showErrorMessage("This deeplink format is no longer supported.");
      } catch (t4) {
        return console.error("[cursor deeplink] Invalid deeplink", t4), void e2.window.showErrorMessage("Invalid or expired deeplink.");
      }
      else try {
        const t4 = await Ts(), { kid: A3, alg: n3 } = (function(e3) {
          const [t5] = e3.split("."), A4 = bs(t5);
          return JSON.parse(A4);
        })(r3);
        if ("RS256" !== n3) return void console.error(`[cursor deeplink] Unsupported JWT algorithm: ${n3} for kid: ${A3}`);
        const s3 = t4.find((e3) => e3.kid === A3);
        if (!s3) throw new Error("No matching public key for JWT");
        const i2 = (0, c.createVerifier)({ key: s3.publicKey, algorithms: ["RS256"], complete: true, checkTyp: "JWT" }), { payload: a3 } = i2(r3), l3 = ws(a3);
        if (!l3.success) {
          const t5 = ks(l3);
          return console.error("[cursor deeplink] Payload validation failed:", l3), void e2.window.showErrorMessage(t5);
        }
        o3 = l3.payload;
      } catch (t4) {
        return console.error("[cursor deeplink] Invalid JWT", t4), void e2.window.showErrorMessage("Invalid or expired deeplink.");
      }
      if (o3.type !== ms.BUGBOT_FIX_IN_CURSOR) {
        if (o3.type === ms.BUGBOT_FIX_ALL_IN_CURSOR) {
          const { redisKey: t4, encryptionKey: A3, branch: n3, repoOwner: r4, repoName: s3 } = o3.data;
          if (void 0 === t4 || "" === t4 || void 0 === A3 || "" === A3) return console.error("[cursor deeplink] Missing redisKey or encryptionKey in Fix All payload"), void e2.window.showErrorMessage("Invalid deeplink format.");
          try {
            const o4 = await (async function(e3, t5) {
              const A4 = await i();
              if (!A4) throw new Error("Missing backend URL or access token");
              const n4 = Ns(A4.backendUrl, A4.accessToken), r5 = new ds({ redisKey: e3, encryptionKey: t5 }), o5 = await n4.getEncryptedBugDataMultiple(r5);
              if (!o5.bugReports || 0 === o5.bugReports.length) throw new Error("No bug report data received");
              return o5.bugReports;
            })(t4, A3);
            await e2.commands.executeCommand("composer.handleBugBotMultipleDeeplinks", o4, n3, { repoOwner: r4, repoName: s3 });
          } catch (t5) {
            console.error("[cursor deeplink] Failed to fetch multiple bug data:", t5), e2.window.showErrorMessage("Failed to load bug report data.");
          }
          return;
        }
        return void console.error("[cursor deeplink] Unsupported deeplink type");
      }
      if ("version" in o3 && 1 === o3.version) {
        const t4 = o3, { redisKey: A3, encryptionKey: n3, branch: r4 } = t4.data;
        if (!A3 || !n3) return console.error("[cursor deeplink] Missing redisKey or encryptionKey in V1 JWT payload"), void e2.window.showErrorMessage("Invalid deeplink format.");
        try {
          s2 = await (async function(e3, t5) {
            const A4 = await i();
            if (!A4) throw new Error("Missing backend URL or access token");
            const n4 = Ns(A4.backendUrl, A4.accessToken), r5 = new Es({ redisKey: e3, encryptionKey: t5 }), o4 = await n4.getEncryptedBugData(r5);
            if (!o4.bugReport) throw new Error("No bug report data received");
            return o4.bugReport;
          })(A3, n3), a2 = r4, l2 = t4.data.repoOwner, u2 = t4.data.repoName;
        } catch (t5) {
          return console.error("[cursor deeplink] Failed to fetch bug data:", t5), void e2.window.showErrorMessage("Failed to load bug report data.");
        }
      } else {
        const t4 = o3, { bug: A3, branch: n3 } = t4.data;
        if (!A3) return console.error("[cursor deeplink] Missing bug data in V0 JWT payload"), void e2.window.showErrorMessage("Invalid deeplink format.");
        try {
          s2 = JSON.parse(bs(A3)), a2 = n3;
        } catch (t5) {
          return console.error("[cursor deeplink] Failed to parse bug data from V0 payload:", t5), void e2.window.showErrorMessage("Failed to parse bug report data.");
        }
      }
      await e2.commands.executeCommand("composer.handleBugBotDeeplink", s2, a2, { repoOwner: l2, repoName: u2 });
    }
    const Ss = require("path"), Rs = 1e4, Fs = "Invalid text for prompt", vs = /^(?!.*(?:\p{Cf}|\u007F))[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Z}\r\n\t !-~]+$/u;
    function Ms(e3) {
      let t3 = e3.toLowerCase();
      for (let e4 = 0; e4 < 2; e4++) try {
        const e5 = decodeURIComponent(t3);
        if (e5 === t3) break;
        t3 = e5;
      } catch {
        break;
      }
      return t3;
    }
    function Us(e3) {
      let t3 = e3;
      for (let e4 = 0; e4 < 2; e4++) try {
        const e5 = decodeURIComponent(t3);
        if (e5 === t3) break;
        t3 = e5;
      } catch {
        break;
      }
      return t3;
    }
    function Ls(e3) {
      const t3 = e3.split(/\s+/), A2 = [];
      for (const e4 of t3) if (/^[A-Za-z0-9+/=]+$/.test(e4) && e4.length % 4 == 0) try {
        let t4 = "";
        const n2 = globalThis.Buffer;
        if (n2) t4 = n2.from(e4, "base64").toString("utf8");
        else if ("undefined" != typeof atob) {
          const A3 = atob(e4), n3 = new Uint8Array(A3.length);
          for (let e5 = 0; e5 < A3.length; e5++) n3[e5] = A3.charCodeAt(e5);
          if ("undefined" != typeof TextDecoder) {
            t4 = new TextDecoder("utf-8").decode(n3);
          }
        }
        t4 && A2.push(t4.toLowerCase());
      } catch {
      }
      return A2.join(" ");
    }
    function _s(e3) {
      if (!e3 || "" === e3.trim()) return Fs;
      if (!(function(e4) {
        return vs.test(e4);
      })(e3)) return Fs;
      const t3 = (function(e4) {
        return 21 + encodeURIComponent(e4).length;
      })(e3);
      return t3 > Rs || (function(e4) {
        const t4 = e4.toLowerCase(), A2 = Ms(t4), n2 = Ms(A2), r3 = Ls(e4), o3 = Us(e4), s2 = Ls(Us(o3)), i2 = [t4, A2, n2];
        r3 && i2.push(r3), s2 && i2.push(s2);
        for (const e5 of i2) if (/\.env(\b|\W)/.test(e5)) return true;
        const a2 = [/read.*\.env.*print/i, /cat.*\.ssh\/id_rsa/i, /upload.*passwords\.txt/i, /dump.*token/i, /dump.*password/i, /exfiltrate.*credential/i, /leak.*secret/i, /how.*extract.*credential/i];
        for (const e5 of i2) for (const t5 of a2) if (t5.test(e5)) return true;
        return false;
      })(e3) ? Fs : null;
    }
    const Js = 100;
    const Os = ".code-workspace", Ys = /&[a-zA-Z][a-zA-Z0-9_-]*=/;
    function Gs(e3) {
      const t3 = e3.replace(/\+/g, " ");
      try {
        return decodeURIComponent(t3);
      } catch {
        return t3;
      }
    }
    function Ps(e3, t3) {
      if (!e3) return null;
      const A2 = `${t3}=`;
      let n2 = 0;
      for (; n2 <= e3.length; ) {
        const t4 = e3.indexOf(A2, n2);
        if (-1 === t4) return null;
        if (!(0 === t4 || "&" === e3[t4 - 1])) {
          n2 = t4 + A2.length;
          continue;
        }
        const r3 = t4 + A2.length;
        let o3 = e3.length;
        const s2 = e3.substring(r3).match(Ys);
        s2 && "number" == typeof s2.index && (o3 = r3 + s2.index);
        const i2 = e3.substring(r3, o3);
        return i2 ? Gs(i2) : null;
      }
      return null;
    }
    async function Vs(t3) {
      const A2 = (function(e3) {
        return Ps(e3.query, "text");
      })(t3);
      if (!A2) throw new Error("Missing text parameter for prompt deeplink");
      const n2 = _s(A2);
      if (n2) throw new Error(n2);
      const r3 = Ps(t3.query, "workspace"), o3 = r3?.trim();
      if (o3) try {
        const A3 = (function() {
          if (e2.workspace.workspaceFile) return (0, Ss.basename)(e2.workspace.workspaceFile.fsPath, Os);
          const t4 = e2.workspace.workspaceFolders?.[0];
          return t4 ? (0, Ss.basename)(t4.uri.fsPath) : void 0;
        })(), n3 = o3.toLowerCase(), r4 = A3?.toLowerCase();
        if (!(void 0 !== A3 && (A3 === o3 || r4 === n3))) {
          if (await e2.commands.executeCommand("deeplink.routeToWorkspaceName", o3, t3.toString())) return;
          console.warn(`[cursor deeplink] No window found with workspace name "${o3}", continuing in current window`);
        }
      } catch (e3) {
        console.error("[cursor deeplink] Error handling workspace parameter for prompt deeplink", e3);
      }
      await e2.commands.executeCommand("deeplink.prompt.prefill", { text: A2, mode: Ps(t3.query, "mode") ?? void 0 });
    }
    function xs(e3) {
      const t3 = e3.replace(/\+/g, " ");
      try {
        return decodeURIComponent(t3);
      } catch {
        return t3;
      }
    }
    async function Hs(t3) {
      const A2 = (function(e3) {
        const t4 = e3.query;
        if (!t4) return null;
        const A3 = /&[a-zA-Z][a-zA-Z0-9_-]*=/, n3 = (e4) => {
          const n4 = `${e4}=`;
          let r5 = 0;
          for (; r5 <= t4.length; ) {
            const e5 = t4.indexOf(n4, r5);
            if (-1 === e5) return null;
            if (0 !== e5 && "&" !== t4[e5 - 1]) {
              r5 = e5 + n4.length;
              continue;
            }
            const o5 = e5 + n4.length;
            let s3 = t4.length;
            const i3 = t4.substring(o5).match(A3);
            i3 && "number" == typeof i3.index && (s3 = o5 + i3.index);
            const a2 = t4.substring(o5, s3);
            return a2 ? xs(a2) : null;
          }
          return null;
        }, r4 = n3("name"), o4 = n3("text");
        return r4 && o4 ? { name: r4, content: o4 } : null;
      })(t3);
      if (!A2) throw new Error("Missing name or text parameter for command deeplink");
      const { name: n2, content: r3 } = A2, o3 = (function(e3) {
        if (!e3 || 0 === e3.trim().length) return "Command name is required";
        if (e3.length > Js) return `Command name must be ${Js} characters or less`;
        const t4 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
        if (t4.test(e3)) return "Command name cannot contain control characters";
        let A3 = e3;
        for (let e4 = 0; e4 < 3; e4++) try {
          const e5 = decodeURIComponent(A3);
          if (e5 === A3) break;
          A3 = e5;
        } catch {
          break;
        }
        if (t4.test(A3)) return "Command name cannot contain control characters";
        const n3 = Ss.normalize(A3);
        if (1 !== n3.split(Ss.sep).length) return "Command name cannot contain path separators or directory traversal";
        if (n3.includes("..")) return "Command name cannot contain path separators or directory traversal";
        if (A3.includes("/") || A3.includes("\\")) return "Command name cannot contain path separators or directory traversal";
        if ("." === A3 || ".." === A3) return "Command name cannot contain path separators or directory traversal";
        const r4 = A3.normalize("NFC");
        if (r4 !== A3) {
          const e4 = Ss.normalize(r4);
          if (1 !== e4.split(Ss.sep).length || e4.includes("..")) return "Command name cannot contain path separators or directory traversal";
        }
        return /^[a-zA-Z0-9._-]+$/.test(A3) ? ["con", "prn", "aux", "nul", "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"].includes(A3.toLowerCase()) ? "Command name is reserved and cannot be used" : null : "Command name can only contain letters, numbers, dots, hyphens, and underscores";
      })(n2);
      if (o3) throw new Error(`Invalid command name: ${o3}`);
      const s2 = _s(r3);
      if (s2) throw new Error(s2);
      const i2 = crypto.randomUUID();
      await e2.commands.executeCommand("deeplink.command.create", { name: n2, content: r3, correlationId: i2 });
    }
    async function qs(t3) {
      const A2 = (function(e3) {
        const t4 = e3.query;
        if (!t4) return null;
        let A3 = null, n3 = null;
        const r4 = t4.indexOf("name=");
        if (-1 !== r4) {
          const e4 = r4 + 5;
          let n4 = t4.length;
          const o5 = t4.substring(e4).match(/&[a-zA-Z][a-zA-Z0-9_-]*=/);
          o5 && (n4 = e4 + o5.index), A3 = t4.substring(e4, n4), A3 = decodeURIComponent(A3.replace(/\+/g, " "));
        }
        const o4 = t4.indexOf("text=");
        if (-1 !== o4) {
          const e4 = o4 + 5;
          let A4 = t4.length;
          const r5 = t4.substring(e4).match(/&[a-zA-Z][a-zA-Z0-9_-]*=/);
          r5 && (A4 = e4 + r5.index), n3 = t4.substring(e4, A4), n3 = decodeURIComponent(n3.replace(/\+/g, " "));
        }
        return A3 && n3 ? { name: A3, content: n3 } : null;
      })(t3);
      if (!A2) throw new Error("Missing name or text parameter for rule deeplink");
      const { name: n2, content: r3 } = A2, o3 = (function(e3) {
        if (!e3 || 0 === e3.trim().length) return "Rule name is required";
        if (e3.length > Js) return `Rule name must be ${Js} characters or less`;
        const t4 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
        if (t4.test(e3)) return "Rule name cannot contain control characters";
        let A3 = e3;
        for (let e4 = 0; e4 < 3; e4++) try {
          const e5 = decodeURIComponent(A3);
          if (e5 === A3) break;
          A3 = e5;
        } catch {
          break;
        }
        if (t4.test(A3)) return "Rule name cannot contain control characters";
        const n3 = Ss.normalize(A3);
        if (1 !== n3.split(Ss.sep).length) return "Rule name cannot contain path separators or directory traversal";
        if (n3.includes("..")) return "Rule name cannot contain path separators or directory traversal";
        if (A3.includes("/") || A3.includes("\\")) return "Rule name cannot contain path separators or directory traversal";
        if ("." === A3 || ".." === A3) return "Rule name cannot contain path separators or directory traversal";
        const r4 = A3.normalize("NFC");
        if (r4 !== A3) {
          const e4 = Ss.normalize(r4);
          if (1 !== e4.split(Ss.sep).length || e4.includes("..")) return "Rule name cannot contain path separators or directory traversal";
        }
        return /^[a-zA-Z0-9._-]+$/.test(A3) ? ["con", "prn", "aux", "nul", "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"].includes(A3.toLowerCase()) ? "Rule name is reserved and cannot be used" : null : "Rule name can only contain letters, numbers, dots, hyphens, and underscores";
      })(n2);
      if (o3) throw new Error(`Invalid rule name: ${o3}`);
      const s2 = _s(r3);
      if (s2) throw new Error(s2);
      const i2 = crypto.randomUUID();
      await e2.commands.executeCommand("deeplink.rule.create", { name: n2, content: r3, correlationId: i2 });
    }
    const Ws = "workbench.action.openCustomizeEditor", js = "aiSettings.action.open", Ks = "/customize", Xs = "/customize/marketplace", Zs = /* @__PURE__ */ new Set(["plugins", "mcps", "rules", "hooks"]);
    async function zs(e3, t3) {
      void 0 !== e3 ? await t3(js, /* @__PURE__ */ (function(e4) {
        return "mcps" === e4 ? "mcp" : e4;
      })(e3)) : await t3(js);
    }
    async function $s(t3, A2 = {}) {
      const n2 = A2.executeCommand ?? ((t4, ...A3) => e2.commands.executeCommand(t4, ...A3)), r3 = t3.path === Xs, o3 = r3 ? (function(e3) {
        const t4 = new URLSearchParams(e3), A3 = t4.get("pluginId")?.trim();
        return A3 || void 0;
      })(t3.query) : void 0, s2 = r3 ? void 0 : (function(e3) {
        const t4 = new URLSearchParams(e3).get("tab");
        if (null === t4 || "" === t4) return;
        const A3 = "mcp" === t4 ? "mcps" : t4;
        return Zs.has(A3) ? A3 : void 0;
      })(t3.query);
      try {
        return void (r3 ? await (async function(e3, t4) {
          void 0 === e3 ? await t4(Ws, { initialView: { kind: "browse" } }) : await t4(Ws, { initialView: { kind: "detail", pluginId: e3 } });
        })(o3, n2) : await (async function(e3, t4) {
          void 0 !== e3 ? await t4(Ws, { initialView: { kind: "manage", tab: e3, scope: "user" } }) : await t4(Ws);
        })(s2, n2));
      } catch (e3) {
        if (!(function(e4, t4) {
          return e4 instanceof Error && e4.message.includes(t4) && e4.message.toLowerCase().includes("command");
        })(e3, Ws)) throw e3;
      }
      r3 ? await zs("plugins", n2) : await zs(s2, n2);
    }
    const ei = "cursor.githubConnect.completeCallback", ti = [250, 500, 1e3, 2e3, 3500];
    function Ai(e3, t3) {
      const A2 = e3.get(t3);
      return null === A2 || "" === A2 ? void 0 : A2;
    }
    function ni(e3) {
      return new Promise((t3) => setTimeout(t3, e3));
    }
    function ri(e3) {
      return e3 instanceof Error && e3.message.includes(ei) && e3.message.toLowerCase().includes("command");
    }
    async function oi(t3, A2 = {}) {
      const n2 = A2.executeCommand ?? ((t4, ...A3) => e2.commands.executeCommand(t4, ...A3)), r3 = A2.showErrorMessage ?? ((t4) => e2.window.showErrorMessage(t4)), o3 = A2.sleep ?? ni, s2 = new URLSearchParams(t3.query), i2 = s2.get("state");
      if (null === i2 || "" === i2) return void r3("Missing GitHub connection state.");
      const a2 = { state: i2, code: Ai(s2, "code"), installationId: Ai(s2, "installation_id"), setupAction: Ai(s2, "setup_action"), gheApplication: Ai(s2, "ghe_app"), error: Ai(s2, "error"), errorDescription: Ai(s2, "error_description") };
      await n2("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "github-connect-deeplink" }), await (async function(e3, t4) {
        for (let A3 = 0; A3 <= ti.length; A3++) try {
          return void await t4.executeCommand(ei, e3);
        } catch (e4) {
          const n3 = ti[A3];
          if (void 0 === n3 || !ri(e4)) throw e4;
          await t4.sleep(n3);
        }
      })(a2, { executeCommand: n2, showErrorMessage: r3, sleep: o3 });
    }
    const si = "glass_automations_ui", ii = "custom_agents_enabled", ai = /* @__PURE__ */ new Set(["prefill", "prefilljson", "prefillyaml", "prefillworkflowdata", "prefillworkflowdatajson"]);
    async function ci(t3) {
      const [A2, n2] = await Promise.all([li(si), li(ii)]);
      if (!(A2 || n2)) return void e2.window.showWarningMessage("Automation deep links are not enabled.");
      !(function(e3) {
        for (const t4 of e3.keys()) if (ai.has(t4.toLowerCase())) return true;
        return false;
      })(new URLSearchParams(t3.query)) ? await e2.commands.executeCommand("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink", startupHandoff: false, deeplinkUrl: t3.toString(true) }) : e2.window.showWarningMessage("Automation deep links do not support raw prefill payloads. Use cursor-app-control.open_automation instead.");
    }
    async function li(t3) {
      return await Promise.resolve(e2.cursor.checkFeatureGate(t3, { disableExposureLog: true })).catch(() => false);
    }
    const ui = "glass_projects_enabled";
    function gi(A2) {
      const n2 = { async handleUri(A3) {
        try {
          "/createchat" === A3.path ? await Ds(A3) : "/mcp/install" === A3.path ? await t2(A3) : "/background-agent/setup" === A3.path ? await e2.commands.executeCommand("workbench.action.backgroundComposer.startSetup") : "/background-agent" === A3.path || "/agent" === A3.path ? await (async function(t3, A4 = {}) {
            const n4 = A4.executeCommand ?? ((t4, ...A5) => e2.commands.executeCommand(t4, ...A5));
            await n4("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink", startupHandoff: false, deeplinkUrl: t3.toString(true) });
          })(A3) : "/create-project" === A3.path ? await (async function(t3) {
            await Promise.resolve(e2.cursor.checkFeatureGate(ui, { disableExposureLog: true })).catch(() => false) ? await e2.commands.executeCommand("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink", startupHandoff: false, deeplinkUrl: t3.toString(true) }) : e2.window.showWarningMessage("You do not have access to Projects. If you are on an Enterprise account, please contact an admin.");
          })(A3) : "/automations" === A3.path || A3.path.startsWith("/automations/") ? await ci(A3) : (n3 = A3.path) === Ks || n3 === Xs ? await $s(A3) : A3.path.startsWith("/settings") ? await (async function(t3) {
            t3.path.startsWith("/settings/background-composer") ? await e2.commands.executeCommand("aiSettings.action.open", "background-composer") : t3.path.startsWith("/settings/plugins") ? await e2.commands.executeCommand("aiSettings.action.open", "plugins") : t3.path.startsWith("/settings/plan-usage") ? await e2.commands.executeCommand("aiSettings.action.open", "plan-usage") : await e2.commands.executeCommand("aiSettings.action.open");
          })(A3) : "/prompt" === A3.path ? await Vs(A3) : "/command" === A3.path ? await Hs(A3) : "/rule" === A3.path ? await qs(A3) : "/pr-review" === A3.path ? await (async function(t3) {
            const A4 = new URLSearchParams(t3.query).get("url");
            if (!A4) return console.error("[cursor deeplink] Missing url parameter in PR review deep link"), void e2.window.showErrorMessage("Missing PR URL in link.");
            await e2.window.withProgress({ location: e2.ProgressLocation.Window, title: "Opening PR Review", cancellable: false }, async () => {
              try {
                await e2.commands.executeCommand("deeplink.prReview.open", A4);
              } catch (t4) {
                console.error("[cursor deeplink] Failed to open PR review:", t4), e2.window.showErrorMessage(`Failed to open PR review: ${t4 instanceof Error ? t4.message : String(t4)}`);
              }
            });
          })(A3) : "/plugin/add" === A3.path ? await (async function(t3) {
            const A4 = new URLSearchParams(t3.query), n4 = A4.get("id")?.trim();
            n4 ? await e2.commands.executeCommand(Ws, { initialView: { kind: "detail", pluginId: n4 } }) : e2.window.showErrorMessage('Missing "id" parameter in deep link.');
          })(A3) : "/plugin/install-and-prompt" === A3.path ? await (async function(t3) {
            await e2.commands.executeCommand("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink", startupHandoff: false, deeplinkUrl: t3.toString(true) });
          })(A3) : "/github-connect-callback" === A3.path ? await oi(A3) : "/glass" === A3.path ? await (async function(t3, A4 = {}) {
            const n4 = A4.executeCommand ?? ((t4, ...A5) => e2.commands.executeCommand(t4, ...A5)), r4 = new URLSearchParams(t3.query).get("target")?.trim().toLowerCase();
            "cloud" !== r4 ? await n4("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink" }) : await n4("cursor.openOrFocusGlassWindow", { agentsWindowOpenSource: "deeplink", startupHandoff: false, deeplinkUrl: t3.toString(true) });
          })(A3) : "/" === A3.path || "" === A3.path || (console.warn("Unrecognized deeplink", A3), e2.window.showWarningMessage("Unrecognized deep link. Try updating Cursor"));
        } catch (t3) {
          console.error("[cursor deeplink] Error handling deep link", t3), e2.window.showErrorMessage(`Error handling deep link: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
        var n3;
      } }, r3 = e2.commands.registerCommand("cursor-deeplink.debug.triggerDeeplink", async () => {
        const t3 = await e2.window.showInputBox({ prompt: "Enter a deeplink URL to test (e.g., cursor://anysphere.cursor-deeplink/command/create?name=test&content=...)", placeHolder: "cursor://anysphere.cursor-deeplink/...", validateInput: (t4) => {
          if (!t4) return "Please enter a deeplink URL";
          try {
            const A3 = e2.Uri.parse(t4);
            return "cursor" !== A3.scheme || "anysphere.cursor-deeplink" !== A3.authority ? "URL must start with cursor://anysphere.cursor-deeplink/" : null;
          } catch {
            return "Invalid URL format";
          }
        } });
        if (t3) try {
          const A3 = e2.Uri.parse(t3);
          await n2.handleUri(A3);
        } catch (t4) {
          e2.window.showErrorMessage(`Error processing deeplink: ${t4 instanceof Error ? t4.message : String(t4)}`);
        }
      });
      A2.subscriptions.push(e2.window.registerUriHandler(n2)), A2.subscriptions.push(r3);
    }
    async function Ei() {
    }
  })();
  var r = exports;
  for (var o in n) r[o] = n[o];
  n.__esModule && Object.defineProperty(r, "__esModule", { value: true });
})();
