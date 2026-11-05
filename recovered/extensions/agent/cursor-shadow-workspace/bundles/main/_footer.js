// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: (footer) range:713565..1037696
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
}, A = {};
  function t(n2) {
    var r2 = A[n2];
    if (void 0 !== r2) return r2.exports;
    var o2 = A[n2] = { exports: {} };
    return e[n2].call(o2.exports, o2, o2.exports, t), o2.exports;
  }
  t.d = (e2, A2) => {
    for (var n2 in A2) t.o(A2, n2) && !t.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: A2[n2] });
  }, t.o = (e2, A2) => Object.prototype.hasOwnProperty.call(e2, A2), t.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var n = {};
  (() => {
    "use strict";
    t.r(n), t.d(n, { activate: () => Jg });
    const e2 = require("vscode");
    class A2 {
      static init() {
        A2.output = e2.window.createOutputChannel("Shadow Workspace", { log: true });
      }
      static error(e3, ...t2) {
        void 0 === A2.output && A2.init(), A2.output?.error(e3, ...t2);
      }
      static warn(e3, ...t2) {
        void 0 === A2.output && A2.init(), A2.output?.warn(e3, ...t2);
      }
      static info(e3, ...t2) {
        void 0 === A2.output && A2.init(), A2.output?.info(e3, ...t2);
      }
      static debug(e3, ...t2) {
        void 0 === A2.output && A2.init(), A2.output?.debug(e3, ...t2);
      }
      static trace(e3, ...t2) {
        void 0 === A2.output && A2.init(), A2.output?.trace(e3, ...t2);
      }
    }
    var r2 = t(5853);
    const [o2] = process.versions.node.split(".").map((e3) => parseInt(e3, 10));
    o2 < 18 && void 0 === globalThis.Headers && (globalThis.Headers = r2.Headers);
    var s, a = t(3106), i = t(9023);
    function c(e3) {
      const A3 = s[e3];
      return "string" != typeof A3 ? e3.toString() : A3[0].toLowerCase() + A3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4.toLowerCase());
    }
    let l;
    !(function(e3) {
      e3[e3.Canceled = 1] = "Canceled", e3[e3.Unknown = 2] = "Unknown", e3[e3.InvalidArgument = 3] = "InvalidArgument", e3[e3.DeadlineExceeded = 4] = "DeadlineExceeded", e3[e3.NotFound = 5] = "NotFound", e3[e3.AlreadyExists = 6] = "AlreadyExists", e3[e3.PermissionDenied = 7] = "PermissionDenied", e3[e3.ResourceExhausted = 8] = "ResourceExhausted", e3[e3.FailedPrecondition = 9] = "FailedPrecondition", e3[e3.Aborted = 10] = "Aborted", e3[e3.OutOfRange = 11] = "OutOfRange", e3[e3.Unimplemented = 12] = "Unimplemented", e3[e3.Internal = 13] = "Internal", e3[e3.Unavailable = 14] = "Unavailable", e3[e3.DataLoss = 15] = "DataLoss", e3[e3.Unauthenticated = 16] = "Unauthenticated";
    })(s || (s = {}));
    class g extends Error {
      constructor(e3, A3 = s.Unknown, t2, n2, r3) {
        super((function(e4, A4) {
          return e4.length ? `[${c(A4)}] ${e4}` : `[${c(A4)}]`;
        })(e3, A3)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e3, this.code = A3, this.metadata = new Headers(null != t2 ? t2 : {}), this.details = null != n2 ? n2 : [], this.cause = r3;
      }
      static from(e3, A3 = s.Unknown) {
        return e3 instanceof g ? e3 : e3 instanceof Error ? "AbortError" == e3.name ? new g(e3.message, s.Canceled) : new g(e3.message, A3, void 0, void 0, e3) : new g(String(e3), A3, void 0, void 0, e3);
      }
      static [Symbol.hasInstance](e3) {
        return e3 instanceof Error && (Object.getPrototypeOf(e3) === g.prototype || "ConnectError" === e3.name && "code" in e3 && "number" == typeof e3.code && "metadata" in e3 && "details" in e3 && Array.isArray(e3.details) && "rawMessage" in e3 && "string" == typeof e3.rawMessage && "cause" in e3);
      }
      findDetails(e3) {
        const A3 = "typeName" in e3 ? { findMessage: (A4) => A4 === e3.typeName ? e3 : void 0 } : e3, t2 = [];
        for (const e4 of this.details) {
          if ("getType" in e4) {
            A3.findMessage(e4.getType().typeName) && t2.push(e4);
            continue;
          }
          const n2 = A3.findMessage(e4.type);
          if (n2) try {
            t2.push(n2.fromBinary(e4.value));
          } catch (e5) {
          }
        }
        return t2;
      }
    }
    function E(e3) {
      let A3 = s.Internal;
      const t2 = (function(e4) {
        const A4 = [];
        for (; e4 instanceof Error && !A4.includes(e4) && (A4.push(e4), "cause" in e4); ) e4 = e4.cause;
        return A4;
      })(e3).map(u);
      t2.some((e4) => "ERR_STREAM_WRITE_AFTER_END" == e4.code) || t2.some((e4) => "ERR_STREAM_DESTROYED" == e4.code || "ERR_HTTP2_INVALID_STREAM" == e4.code || "ECONNRESET" == e4.code) ? A3 = s.Aborted : t2.some((e4) => "ETIMEDOUT" == e4.code || "ENOTFOUND" == e4.code || "EAI_AGAIN" == e4.code || "ECONNREFUSED" == e4.code) && (A3 = s.Unavailable);
      const n2 = g.from(e3, A3);
      return n2 !== e3 && (n2.cause = e3), n2;
    }
    function u(e3) {
      const A3 = {};
      return e3 instanceof Error && ("code" in e3 && "string" == typeof e3.code && (A3.code = e3.code), "syscall" in e3 && "string" == typeof e3.syscall && (A3.syscall = e3.syscall)), A3;
    }
    var d;
    !(function(e3) {
      e3[e3.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e3[e3.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e3[e3.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e3[e3.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e3[e3.STREAM_CLOSED = 5] = "STREAM_CLOSED", e3[e3.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e3[e3.REFUSED_STREAM = 7] = "REFUSED_STREAM", e3[e3.CANCEL = 8] = "CANCEL", e3[e3.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e3[e3.CONNECT_ERROR = 10] = "CONNECT_ERROR", e3[e3.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e3[e3.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e3[e3.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    })(d || (d = {}));
    const I = (0, i.promisify)(a.gzip), h = (0, i.promisify)(a.gunzip), Q = (0, i.promisify)(a.brotliCompress), m = (0, i.promisify)(a.brotliDecompress), C = { name: "gzip", compress: (e3) => I(e3, {}), decompress: (e3, A3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : p(h(e3, { maxOutputLength: A3 }), A3) }, B = { name: "br", compress: (e3) => Q(e3, {}), decompress: (e3, A3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : p(m(e3, { maxOutputLength: A3 }), A3) };
    function p(e3, A3) {
      return e3.catch((e4) => {
        const t2 = u(e4);
        let n2 = s.Internal, r3 = "decompression failed";
        switch (t2.code) {
          case "ERR_BUFFER_TOO_LARGE":
            n2 = s.ResourceExhausted, r3 = `message is larger than configured readMaxBytes ${A3} after decompression`;
            break;
          case "Z_DATA_ERROR":
          case "ERR_PADDING_2":
            n2 = s.InvalidArgument;
            break;
          default:
            void 0 !== t2.code && t2.code.startsWith("ERR__ERROR_FORMAT_") && (n2 = s.InvalidArgument);
        }
        return Promise.reject(new g(r3, n2, void 0, void 0, e4));
      });
    }
    t(5675), t(8611);
    require("https");
    var f = t(6038);
    function y(...e3) {
      const A3 = new AbortController(), t2 = e3.filter((e4) => void 0 !== e4).concat(A3.signal);
      for (const e4 of t2) {
        if (e4.aborted) {
          n2.apply(e4);
          break;
        }
        e4.addEventListener("abort", n2);
      }
      function n2() {
        A3.signal.aborted || A3.abort((function(e4) {
          if (!e4.aborted) return;
          if (void 0 !== e4.reason) return e4.reason;
          const A4 = new Error("This operation was aborted");
          return A4.name = "AbortError", A4;
        })(this));
        for (const e4 of t2) e4.removeEventListener("abort", n2);
      }
      return A3;
    }
    function T(e3) {
      var A3;
      let t2;
      if (void 0 !== e3.timeoutMs) {
        const A4 = new Date(Date.now() + e3.timeoutMs);
        t2 = () => A4.getTime() - Date.now();
      } else t2 = () => {
      };
      const n2 = (function(e4) {
        const A4 = new AbortController(), t3 = () => {
          A4.abort(new g("the operation timed out", s.DeadlineExceeded));
        };
        let n3;
        return void 0 !== e4 && (e4 <= 0 ? t3() : n3 = setTimeout(t3, e4)), { signal: A4.signal, cleanup: () => clearTimeout(n3) };
      })(e3.timeoutMs), r3 = y(n2.signal, e3.requestSignal, e3.shutdownSignal);
      return Object.assign(Object.assign({}, e3), { signal: r3.signal, timeoutMs: t2, requestHeader: new Headers(e3.requestHeader), responseHeader: new Headers(e3.responseHeader), responseTrailer: new Headers(e3.responseTrailer), abort(e4) {
        n2.cleanup(), r3.abort(e4);
      }, values: null !== (A3 = e3.contextValues) && void 0 !== A3 ? A3 : { get(e4) {
        return e4.id in this ? this[e4.id] : e4.defaultValue;
      }, set(e4, A4) {
        return this[e4.id] = A4, this;
      }, delete(e4) {
        return delete this[e4.id], this;
      } } });
    }
    function k(e3, A3, t2) {
      return { kind: A3.kind, service: e3, method: A3, impl: t2 };
    }
    const w = 128;
    function N(e3) {
      const A3 = new Headers(), t2 = new TextDecoder().decode(e3).split("\r\n");
      for (const e4 of t2) {
        if ("" === e4) continue;
        const t3 = e4.indexOf(":");
        if (t3 > 0) {
          const n2 = e4.substring(0, t3).trim(), r3 = e4.substring(t3 + 1).trim();
          A3.append(n2, r3);
        }
      }
      return A3;
    }
    function D(e3) {
      const A3 = [];
      return e3.forEach((e4, t2) => {
        A3.push(`${t2}: ${e4}\r
`);
      }), new TextEncoder().encode(A3.join(""));
    }
    const R = "Content-Type", S = "Grpc-Encoding", b = "Grpc-Accept-Encoding", F = "Grpc-Timeout", _ = "Grpc-Status", v = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, L = "application/grpc-web+proto", U = "application/grpc-web+json";
    function M(e3, A3) {
      if (null === e3) return {};
      const t2 = /^(\d{1,8})([HMSmun])$/.exec(e3);
      if (null === t2) return { error: new g(`protocol error: invalid grpc timeout value: ${e3}`, s.InvalidArgument) };
      const n2 = { H: 36e5, M: 6e4, S: 1e3, m: 1, u: 1e-3, n: 1e-6 }[t2[2]] * parseInt(t2[1]);
      return n2 > A3 ? { timeoutMs: n2, error: new g(`timeout ${n2}ms must be <= ${A3}`, s.InvalidArgument) } : { timeoutMs: n2 };
    }
    class O extends f.Message {
      constructor(e3) {
        super(), this.code = 0, this.message = "", this.details = [], f.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, A3) {
        return new O().fromBinary(e3, A3);
      }
      static fromJson(e3, A3) {
        return new O().fromJson(e3, A3);
      }
      static fromJsonString(e3, A3) {
        return new O().fromJsonString(e3, A3);
      }
      static equals(e3, A3) {
        return f.proto3.util.equals(O, e3, A3);
      }
    }
    O.runtime = f.proto3, O.typeName = "google.rpc.Status", O.fields = f.proto3.util.newFieldList(() => [{ no: 1, name: "code", kind: "scalar", T: 5 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "details", kind: "message", T: f.Any, repeated: true }]);
    const J = "0";
    function Y(e3, A3) {
      if (A3) {
        if (e3.set(_, A3.code.toString(10)), e3.set("Grpc-Message", encodeURIComponent(A3.rawMessage)), A3.details.length > 0) {
          const t2 = new O({ code: A3.code, message: A3.rawMessage, details: A3.details.map((e4) => "getType" in e4 ? f.Any.pack(e4) : new f.Any({ typeUrl: `type.googleapis.com/${e4.type}`, value: e4.value })) });
          e3.set("Grpc-Status-Details-Bin", (function(e4) {
            let A4;
            return A4 = "object" == typeof e4 && "getType" in e4 ? e4.toBinary() : "string" == typeof e4 ? new TextEncoder().encode(e4) : e4 instanceof Uint8Array ? e4 : new Uint8Array(e4), f.protoBase64.enc(A4).replace(/=+$/, "");
          })(t2));
        }
      } else e3.set(_, J.toString());
      return e3;
    }
    function P(e3, A3, t2, n2) {
      let r3, o3 = null, a2 = null;
      if (null !== A3 && "identity" !== A3) {
        const t3 = e3.find((e4) => e4.name === A3);
        if (t3) o3 = t3;
        else {
          const t4 = e3.map((e4) => e4.name).join(",");
          r3 = new g(`unknown compression "${A3}": supported encodings are ${t4}`, s.Unimplemented, { [n2]: t4 });
        }
      }
      if (null === t2 || "" === t2) a2 = o3;
      else {
        const A4 = t2.split(",").map((e4) => e4.trim());
        for (const t3 of A4) {
          const A5 = e3.find((e4) => e4.name === t3);
          if (A5) {
            a2 = A5;
            break;
          }
        }
      }
      return { request: o3, response: a2, error: r3 };
    }
    const G = 4294967295, V = G;
    function x(e3, A3, t2 = false) {
      if (A3 > e3) {
        let n2 = `message size is larger than configured readMaxBytes ${e3}`;
        throw t2 && (n2 = `message size ${A3} is larger than configured readMaxBytes ${e3}`), new g(n2, s.ResourceExhausted);
      }
    }
    function H(e3) {
      return new q(e3);
    }
    class q {
      constructor(e3) {
        this.readMaxBytes = e3, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
      }
      get byteLength() {
        return this.buf.reduce((e3, A3) => e3 + A3.byteLength, 0);
      }
      decode(e3) {
        this.buf.push(e3);
        const A3 = [];
        for (; ; ) {
          let e4 = this.pop();
          if (!e4) break;
          A3.push(e4);
        }
        return A3;
      }
      pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
          const e3 = this.env;
          return this.env = void 0, e3;
        }
      }
      head() {
        if (!this.cons(this.header)) return;
        const e3 = this.headerView.getUint8(0), A3 = this.headerView.getUint32(1);
        return x(this.readMaxBytes, A3, true), { flags: e3, data: new Uint8Array(A3) };
      }
      cons(e3) {
        const A3 = e3.byteLength;
        if (this.byteLength < A3) return false;
        let t2 = 0;
        for (; t2 < A3; ) {
          const n2 = this.buf.shift();
          n2.byteLength > A3 - t2 ? (e3.set(n2.subarray(0, A3 - t2), t2), this.buf.unshift(n2.subarray(A3 - t2)), t2 += A3 - t2) : (e3.set(n2, t2), t2 += n2.byteLength);
        }
        return true;
      }
    }
    async function W(e3, A3, t2) {
      let { flags: n2, data: r3 } = e3;
      if (!(1 & ~n2)) throw new g("invalid envelope, already compressed", s.Internal);
      return A3 && r3.byteLength >= t2 && (r3 = await A3.compress(r3), n2 |= 1), { data: r3, flags: n2 };
    }
    async function j(e3, A3, t2) {
      let { flags: n2, data: r3 } = e3;
      if (!(1 & ~n2)) {
        if (!A3) throw new g("received compressed envelope, but do not know how to decompress", s.Internal);
        r3 = await A3.decompress(r3, t2), n2 ^= 1;
      }
      return { data: r3, flags: n2 };
    }
    function X(e3, A3) {
      const t2 = new Uint8Array(A3.length + 5);
      t2.set(A3, 5);
      const n2 = new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
      return n2.setUint8(0, e3), n2.setUint32(1, A3.length), t2;
    }
    var K = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var A3, t2 = e3[Symbol.asyncIterator];
      return t2 ? t2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), A3 = {}, n2("next"), n2("throw"), n2("return"), A3[Symbol.asyncIterator] = function() {
        return this;
      }, A3);
      function n2(t3) {
        A3[t3] = e3[t3] && function(A4) {
          return new Promise(function(n3, r3) {
            (function(e4, A5, t4, n4) {
              Promise.resolve(n4).then(function(A6) {
                e4({ value: A6, done: t4 });
              }, A5);
            })(n3, r3, (A4 = e3[t3](A4)).done, A4.value);
          });
        };
      }
    }, Z = function(e3) {
      return this instanceof Z ? (this.v = e3, this) : new Z(e3);
    }, z = function(e3, A3, t2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = t2.apply(e3, A3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(A4) {
          return Promise.resolve(A4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, A4) {
        r3[e4] && (n2[e4] = function(A5) {
          return new Promise(function(t3, n3) {
            o3.push([e4, A5, t3, n3]) > 1 || a2(e4, A5);
          });
        }, A4 && (n2[e4] = A4(n2[e4])));
      }
      function a2(e4, A4) {
        try {
          (t3 = r3[e4](A4)).value instanceof Z ? Promise.resolve(t3.value.v).then(i2, c2) : l2(o3[0][2], t3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var t3;
      }
      function i2(e4) {
        a2("next", e4);
      }
      function c2(e4) {
        a2("throw", e4);
      }
      function l2(e4, A4) {
        e4(A4), o3.shift(), o3.length && a2(o3[0][0], o3[0][1]);
      }
    }, $ = function(e3) {
      var A3, t2;
      return A3 = {}, n2("next"), n2("throw", function(e4) {
        throw e4;
      }), n2("return"), A3[Symbol.iterator] = function() {
        return this;
      }, A3;
      function n2(n3, r3) {
        A3[n3] = e3[n3] ? function(A4) {
          return (t2 = !t2) ? { value: Z(e3[n3](A4)), done: false } : r3 ? r3(A4) : A4;
        } : r3;
      }
    };
    function ee(e3, ...A3) {
      return z(this, arguments, function* () {
        var t2;
        const [n2, r3] = (function(e4) {
          let A4;
          "function" != typeof e4[e4.length - 1] && (A4 = e4.pop());
          return [e4, A4];
        })(A3);
        let o3;
        const s2 = e3[Symbol.asyncIterator]();
        let a2 = { [Symbol.asyncIterator]: () => s2 };
        true === (null == r3 ? void 0 : r3.propagateDownStreamError) && (a2 = o3 = ge(a2));
        for (const e4 of n2) a2 = e4(a2);
        const i2 = a2[Symbol.asyncIterator]();
        try {
          for (; ; ) {
            const e4 = yield Z(i2.next());
            if (true === e4.done) break;
            if (o3) try {
              yield yield Z(e4.value);
            } catch (e5) {
              throw yield Z(o3.abort(e5)), e5;
            }
            else yield yield Z(e4.value);
          }
        } finally {
          true === (null == r3 ? void 0 : r3.propagateDownStreamError) && (null === (t2 = s2.return) || void 0 === t2 || t2.call(s2).catch(() => {
          }));
        }
      });
    }
    function Ae(e3) {
      return function(A3) {
        return z(this, arguments, function* () {
          let t2;
          const n2 = A3[Symbol.asyncIterator]();
          for (; ; ) {
            let e4;
            try {
              e4 = yield Z(n2.next());
            } catch (e5) {
              t2 = e5;
              break;
            }
            if (true === e4.done) break;
            yield yield Z(e4.value);
          }
          const r3 = yield Z(e3(t2));
          void 0 !== r3 && (yield yield Z(r3));
        });
      };
    }
    function te(e3) {
      return function(A3) {
        return z(this, arguments, function* () {
          var t2, n2, r3, o3;
          const s2 = yield Z(e3());
          void 0 !== s2 && (yield yield Z(s2));
          try {
            for (var a2, i2 = true, c2 = K(A3); !(t2 = (a2 = yield Z(c2.next())).done); i2 = true) {
              o3 = a2.value, i2 = false;
              const e4 = o3;
              yield yield Z(e4);
            }
          } catch (e4) {
            n2 = { error: e4 };
          } finally {
            try {
              i2 || t2 || !(r3 = c2.return) || (yield Z(r3.call(c2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
        });
      };
    }
    function ne(e3, A3, t2) {
      return void 0 === A3 || void 0 === t2 ? function(A4) {
        return z(this, arguments, function* () {
          var t3, n2, r3, o3;
          try {
            for (var s2, a2 = true, i2 = K(A4); !(t3 = (s2 = yield Z(i2.next())).done); a2 = true) {
              o3 = s2.value, a2 = false;
              const A5 = o3, t4 = e3.serialize(A5);
              yield yield Z({ flags: 0, data: t4 });
            }
          } catch (e4) {
            n2 = { error: e4 };
          } finally {
            try {
              a2 || t3 || !(r3 = i2.return) || (yield Z(r3.call(i2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
        });
      } : function(n2) {
        return z(this, arguments, function* () {
          var r3, o3, s2, a2;
          try {
            for (var i2, c2 = true, l2 = K(n2); !(r3 = (i2 = yield Z(l2.next())).done); c2 = true) {
              a2 = i2.value, c2 = false;
              const n3 = a2;
              let r4, o4 = 0;
              n3.end ? (o4 |= A3, r4 = t2.serialize(n3.value)) : r4 = e3.serialize(n3.value), yield yield Z({ flags: o4, data: r4 });
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              c2 || r3 || !(s2 = l2.return) || (yield Z(s2.call(l2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      };
    }
    function re(e3, A3, t2) {
      return t2 && void 0 !== A3 ? function(n2) {
        return z(this, arguments, function* () {
          var r3, o3, s2, a2;
          try {
            for (var i2, c2 = true, l2 = K(n2); !(r3 = (i2 = yield Z(l2.next())).done); c2 = true) {
              a2 = i2.value, c2 = false;
              const { flags: n3, data: r4 } = a2;
              (n3 & A3) === A3 ? yield yield Z({ value: t2.parse(r4), end: true }) : yield yield Z({ value: e3.parse(r4), end: false });
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              c2 || r3 || !(s2 = l2.return) || (yield Z(s2.call(l2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      } : function(n2) {
        return z(this, arguments, function* () {
          var r3, o3, a2, i2;
          try {
            for (var c2, l2 = true, E2 = K(n2); !(r3 = (c2 = yield Z(E2.next())).done); l2 = true) {
              i2 = c2.value, l2 = false;
              const { flags: n3, data: r4 } = i2;
              if (void 0 === A3 || (n3 & A3) !== A3) yield yield Z(e3.parse(r4));
              else if (null === t2) throw new g("unexpected end flag", s.InvalidArgument);
            }
          } catch (e4) {
            o3 = { error: e4 };
          } finally {
            try {
              l2 || r3 || !(a2 = E2.return) || (yield Z(a2.call(E2)));
            } finally {
              if (o3) throw o3.error;
            }
          }
        });
      };
    }
    function oe(e3, A3) {
      return function(t2) {
        return z(this, arguments, function* () {
          var n2, r3, o3, s2;
          try {
            for (var a2, i2 = true, c2 = K(t2); !(n2 = (a2 = yield Z(c2.next())).done); i2 = true) {
              s2 = a2.value, i2 = false;
              const t3 = s2;
              yield yield Z(yield Z(W(t3, e3, A3)));
            }
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              i2 || n2 || !(o3 = c2.return) || (yield Z(o3.call(c2)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      };
    }
    function se(e3, A3) {
      return function(t2) {
        return z(this, arguments, function* () {
          var n2, r3, o3, s2;
          try {
            for (var a2, i2 = true, c2 = K(t2); !(n2 = (a2 = yield Z(c2.next())).done); i2 = true) {
              s2 = a2.value, i2 = false;
              const t3 = s2;
              yield yield Z(yield Z(j(t3, e3, A3)));
            }
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              i2 || n2 || !(o3 = c2.return) || (yield Z(o3.call(c2)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      };
    }
    function ae() {
      return function(e3) {
        return z(this, arguments, function* () {
          var A3, t2, n2, r3;
          try {
            for (var o3, s2 = true, a2 = K(e3); !(A3 = (o3 = yield Z(a2.next())).done); s2 = true) {
              r3 = o3.value, s2 = false;
              const { flags: e4, data: A4 } = r3;
              yield yield Z(X(e4, A4));
            }
          } catch (e4) {
            t2 = { error: e4 };
          } finally {
            try {
              s2 || A3 || !(n2 = a2.return) || (yield Z(n2.call(a2)));
            } finally {
              if (t2) throw t2.error;
            }
          }
        });
      };
    }
    function ie(e3) {
      return function(A3) {
        return z(this, arguments, function* () {
          var t2, n2, r3, o3;
          const a2 = H(e3);
          try {
            for (var i2, c2 = true, l2 = K(A3); !(t2 = (i2 = yield Z(l2.next())).done); c2 = true) {
              o3 = i2.value, c2 = false;
              const e4 = o3;
              for (const A4 of a2.decode(e4)) yield yield Z(A4);
            }
          } catch (e4) {
            n2 = { error: e4 };
          } finally {
            try {
              c2 || t2 || !(r3 = l2.return) || (yield Z(r3.call(l2)));
            } finally {
              if (n2) throw n2.error;
            }
          }
          if (a2.byteLength > 0) throw new g("protocol error: incomplete envelope", s.InvalidArgument);
        });
      };
    }
    async function ce(e3, A3, t2) {
      var n2, r3, o3, a2, i2, c2, l2, E2;
      const [u2, d2] = (function(e4) {
        if (null == e4) return [false, 0];
        const A4 = "string" == typeof e4 ? parseInt(e4, 10) : e4;
        if (!Number.isSafeInteger(A4) || A4 < 0) return [false, A4];
        return [true, A4];
      })(t2);
      if (u2) {
        d2 > A3 && x(A3, d2, true);
        const t3 = new Uint8Array(d2);
        let i3 = 0;
        try {
          for (var I2, h2 = true, Q2 = K(e3); !(n2 = (I2 = await Q2.next()).done); h2 = true) {
            a2 = I2.value, h2 = false;
            const e4 = a2;
            if (i3 + e4.byteLength > d2) throw new g(`protocol error: promised ${d2} bytes, received ${i3 + e4.byteLength}`, s.InvalidArgument);
            t3.set(e4, i3), i3 += e4.byteLength;
          }
        } catch (e4) {
          r3 = { error: e4 };
        } finally {
          try {
            h2 || n2 || !(o3 = Q2.return) || await o3.call(Q2);
          } finally {
            if (r3) throw r3.error;
          }
        }
        if (i3 < d2) throw new g(`protocol error: promised ${d2} bytes, received ${i3}`, s.InvalidArgument);
        return t3;
      }
      const m2 = [];
      let C2 = 0;
      try {
        for (var B2, p2 = true, f2 = K(e3); !(i2 = (B2 = await f2.next()).done); p2 = true) {
          E2 = B2.value, p2 = false;
          const e4 = E2;
          C2 += e4.byteLength, x(A3, C2), m2.push(e4);
        }
      } catch (e4) {
        c2 = { error: e4 };
      } finally {
        try {
          p2 || i2 || !(l2 = f2.return) || await l2.call(f2);
        } finally {
          if (c2) throw c2.error;
        }
      }
      const y2 = new Uint8Array(C2);
      let T2 = 0;
      for (let e4 = m2.shift(); e4; e4 = m2.shift()) y2.set(e4, T2), T2 += e4.byteLength;
      return y2;
    }
    async function le(e3) {
      const A3 = e3[Symbol.asyncIterator]();
      let t2 = await A3.next();
      return { [Symbol.asyncIterator]() {
        const e4 = { async next() {
          if (null !== t2) {
            const e5 = t2;
            return t2 = null, e5;
          }
          return await A3.next();
        } };
        return void 0 !== A3.throw && (e4.throw = (e5) => A3.throw(e5)), void 0 !== A3.return && (e4.return = (e5) => A3.return(e5)), e4;
      } };
    }
    function ge(e3) {
      const A3 = e3[Symbol.asyncIterator]();
      if (void 0 === A3.throw) throw new Error("AsyncIterable does not implement throw");
      const t2 = A3;
      let n2, r3, o3 = { next: () => (r3 = t2.next().finally(() => {
        r3 = void 0;
      }), r3), throw: (e4) => t2.throw(e4) };
      void 0 !== A3.return && (o3 = Object.assign(Object.assign({}, o3), { return: (e4) => t2.return(e4) }));
      let s2 = false;
      return { abort(e4) {
        if (n2) return n2.state;
        const A4 = () => t2.throw(e4).then((e5) => true === e5.done ? "completed" : "caught", () => "rethrown");
        return r3 ? (n2 = { reason: e4, state: r3.then(A4, A4) }, n2.state) : (n2 = { reason: e4, state: A4() }, n2.state);
      }, [Symbol.asyncIterator]() {
        if (s2) throw new Error("AsyncIterable cannot be re-used");
        return s2 = true, o3;
      } };
    }
    function Ee(e3) {
      return z(this, arguments, function* () {
        yield Z(yield* $(K(e3)));
      });
    }
    function ue(...e3) {
      const A3 = /* @__PURE__ */ new Map(), t2 = e3.reduce((e4, A4) => e4.concat("supported" in A4 ? A4.supported : A4), []);
      function n2(e4) {
        if (null === e4 || 0 == e4.length) return false;
        const n3 = A3.get(e4);
        if (void 0 !== n3) return n3;
        const r3 = t2.some((A4) => A4.test(e4));
        return A3.size < 1024 && A3.set(e4, r3), r3;
      }
      return n2.supported = t2, n2;
    }
    function de(e3, A3, t2) {
      const n2 = "string" == typeof A3 ? A3 : A3.typeName, r3 = "string" == typeof t2 ? t2 : t2.name;
      return e3.toString().replace(/\/?$/, `/${n2}/${r3}`);
    }
    function Ie(e3, A3) {
      return A3 instanceof e3 ? A3 : new e3(A3);
    }
    function he(e3, A3) {
      function t2(A4) {
        return true === A4.done ? A4 : { done: A4.done, value: Ie(e3, A4.value) };
      }
      return { [Symbol.asyncIterator]() {
        const e4 = A3[Symbol.asyncIterator](), n2 = { next: () => e4.next().then(t2) };
        return void 0 !== e4.throw && (n2.throw = (A4) => e4.throw(A4).then(t2)), void 0 !== e4.return && (n2.return = (A4) => e4.return(A4).then(t2)), n2;
      } };
    }
    function Qe(e3, A3) {
      var t2;
      return null !== (t2 = null == A3 ? void 0 : A3.concat().reverse().reduce((e4, A4) => A4(e4), e3)) && void 0 !== t2 ? t2 : e3;
    }
    var me = function(e3) {
      return this instanceof me ? (this.v = e3, this) : new me(e3);
    }, Ce = function(e3, A3, t2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = t2.apply(e3, A3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(A4) {
          return Promise.resolve(A4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, A4) {
        r3[e4] && (n2[e4] = function(A5) {
          return new Promise(function(t3, n3) {
            o3.push([e4, A5, t3, n3]) > 1 || a2(e4, A5);
          });
        }, A4 && (n2[e4] = A4(n2[e4])));
      }
      function a2(e4, A4) {
        try {
          (t3 = r3[e4](A4)).value instanceof me ? Promise.resolve(t3.value.v).then(i2, c2) : l2(o3[0][2], t3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var t3;
      }
      function i2(e4) {
        a2("next", e4);
      }
      function c2(e4) {
        a2("throw", e4);
      }
      function l2(e4, A4) {
        e4(A4), o3.shift(), o3.length && a2(o3[0][0], o3[0][1]);
      }
    }, Be = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var A3, t2 = e3[Symbol.asyncIterator];
      return t2 ? t2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), A3 = {}, n2("next"), n2("throw"), n2("return"), A3[Symbol.asyncIterator] = function() {
        return this;
      }, A3);
      function n2(t3) {
        A3[t3] = e3[t3] && function(A4) {
          return new Promise(function(n3, r3) {
            (function(e4, A5, t4, n4) {
              Promise.resolve(n4).then(function(A6) {
                e4({ value: A6, done: t4 });
              }, A5);
            })(n3, r3, (A4 = e3[t3](A4)).done, A4.value);
          });
        };
      }
    }, pe = function(e3) {
      var A3, t2;
      return A3 = {}, n2("next"), n2("throw", function(e4) {
        throw e4;
      }), n2("return"), A3[Symbol.iterator] = function() {
        return this;
      }, A3;
      function n2(n3, r3) {
        A3[n3] = e3[n3] ? function(A4) {
          return (t2 = !t2) ? { value: me(e3[n3](A4)), done: false } : r3 ? r3(A4) : A4;
        } : r3;
      }
    };
    function fe(e3, A3, t2) {
      switch (e3.kind) {
        case f.MethodKind.Unary:
          return function(n2) {
            return Ce(this, arguments, function* () {
              const r3 = n2[Symbol.asyncIterator](), o3 = yield me(r3.next());
              if (true === o3.done) throw new g("protocol error: missing input message for unary method", s.Unimplemented);
              const a2 = Qe(async (t3) => ({ message: Ie(e3.method.O, await e3.impl(t3.message, Object.assign(Object.assign({}, A3), { service: t3.service, method: t3.method, requestHeader: t3.header, values: t3.contextValues, signal: t3.signal }))), stream: false, service: t3.service, method: t3.method, header: A3.responseHeader, trailer: A3.responseTrailer }), t2), { message: i2, header: c2, trailer: l2 } = yield me(a2({ init: { method: A3.requestMethod }, message: o3.value, url: A3.url, signal: A3.signal, service: e3.service, method: e3.method, header: A3.requestHeader, contextValues: A3.values, stream: false }));
              ye(c2, A3.responseHeader), ye(l2, A3.responseTrailer), yield yield me(i2);
              if (true !== (yield me(r3.next())).done) throw new g("protocol error: received extra input message for unary method", s.Unimplemented);
            });
          };
        case f.MethodKind.ServerStreaming:
          return function(n2) {
            return Ce(this, arguments, function* () {
              const r3 = n2[Symbol.asyncIterator](), o3 = yield me(r3.next());
              if (true === o3.done) throw new g("protocol error: missing input message for server-streaming method", s.Unimplemented);
              const a2 = Qe(async (t3) => ({ message: he(e3.method.O, e3.impl(t3.message, Object.assign(Object.assign({}, A3), { service: t3.service, method: t3.method, requestHeader: t3.header, values: t3.contextValues, signal: t3.signal }))), stream: true, service: t3.service, method: t3.method, header: A3.responseHeader, trailer: A3.responseTrailer }), t2), { message: i2, header: c2, trailer: l2 } = yield me(a2({ init: { method: A3.requestMethod }, message: o3.value, url: A3.url, signal: A3.signal, service: e3.service, method: e3.method, header: A3.requestHeader, contextValues: A3.values, stream: false }));
              ye(c2, A3.responseHeader), ye(l2, A3.responseTrailer), yield me(yield* pe(Be(i2)));
              if (true !== (yield me(r3.next())).done) throw new g("protocol error: received extra input message for server-streaming method", s.Unimplemented);
            });
          };
        case f.MethodKind.ClientStreaming:
          return function(n2) {
            return Ce(this, arguments, function* () {
              const r3 = Qe(async (t3) => ({ message: Ie(e3.method.O, await e3.impl(t3.message, Object.assign(Object.assign({}, A3), { service: t3.service, method: t3.method, requestHeader: t3.header, values: t3.contextValues, signal: t3.signal }))), stream: false, service: t3.service, method: t3.method, header: A3.responseHeader, trailer: A3.responseTrailer }), t2), { message: o3, header: s2, trailer: a2 } = yield me(r3({ init: { method: A3.requestMethod }, message: n2, url: A3.url, signal: A3.signal, service: e3.service, method: e3.method, header: A3.requestHeader, contextValues: A3.values, stream: true }));
              ye(s2, A3.responseHeader), ye(a2, A3.responseTrailer), yield yield me(o3);
            });
          };
        case f.MethodKind.BiDiStreaming:
          return function(n2) {
            return Ce(this, arguments, function* () {
              const r3 = Qe(async (t3) => ({ message: he(e3.method.O, e3.impl(t3.message, Object.assign(Object.assign({}, A3), { service: t3.service, method: t3.method, requestHeader: t3.header, values: t3.contextValues, signal: t3.signal }))), stream: true, service: t3.service, method: t3.method, header: A3.responseHeader, trailer: A3.responseTrailer }), t2), { message: o3, header: s2, trailer: a2 } = yield me(r3({ init: { method: A3.requestMethod }, message: n2, url: A3.url, signal: A3.signal, service: e3.service, method: e3.method, header: A3.requestHeader, contextValues: A3.values, stream: true }));
              ye(s2, A3.responseHeader), ye(a2, A3.responseTrailer), yield me(yield* pe(Be(o3)));
            });
          };
      }
    }
    function ye(e3, A3) {
      e3 !== A3 && (A3.forEach((e4, t2) => {
        A3.delete(t2);
      }), e3.forEach((e4, t2) => {
        A3.set(t2, e4);
      }));
    }
    function Te(e3, A3, t2, n2) {
      const r3 = ke(we(e3.I, A3), n2), o3 = ke(Ne(e3.I, t2), n2), s2 = ke(we(e3.O, A3), n2), a2 = ke(Ne(e3.O, t2), n2);
      return { getI: (e4) => e4 ? r3 : o3, getO: (e4) => e4 ? s2 : a2 };
    }
    function ke(e3, A3) {
      return { serialize(t2) {
        const n2 = e3.serialize(t2);
        return (function(e4, A4) {
          if (A4 > e4) throw new g(`message size ${A4} is larger than configured writeMaxBytes ${e4}`, s.ResourceExhausted);
        })(A3.writeMaxBytes, n2.byteLength), n2;
      }, parse: (t2) => (x(A3.readMaxBytes, t2.byteLength, true), e3.parse(t2)) };
    }
    function we(e3, A3) {
      return { parse(t2) {
        try {
          return e3.fromBinary(t2, A3);
        } catch (e4) {
          const A4 = e4 instanceof Error ? e4.message : String(e4);
          throw new g(`parse binary: ${A4}`, s.Internal);
        }
      }, serialize(e4) {
        try {
          return e4.toBinary(A3);
        } catch (e5) {
          const A4 = e5 instanceof Error ? e5.message : String(e5);
          throw new g(`serialize binary: ${A4}`, s.Internal);
        }
      } };
    }
    function Ne(e3, A3) {
      var t2, n2;
      const r3 = null !== (t2 = null == A3 ? void 0 : A3.textEncoder) && void 0 !== t2 ? t2 : new TextEncoder(), o3 = null !== (n2 = null == A3 ? void 0 : A3.textDecoder) && void 0 !== n2 ? n2 : new TextDecoder(), a2 = (function(e4) {
        var A4;
        const t3 = Object.assign({}, e4);
        return null !== (A4 = t3.ignoreUnknownFields) && void 0 !== A4 || (t3.ignoreUnknownFields = true), t3;
      })(A3);
      return { parse(A4) {
        try {
          const t3 = o3.decode(A4);
          return e3.fromJsonString(t3, a2);
        } catch (e4) {
          throw g.from(e4, s.InvalidArgument);
        }
      }, serialize(e4) {
        try {
          const A4 = e4.toJsonString(a2);
          return r3.encode(A4);
        } catch (e5) {
          throw g.from(e5, s.Internal);
        }
      } };
    }
    function De(e3) {
      if ("object" != typeof e3.body || null === e3.body || !(Symbol.asyncIterator in e3.body)) throw new Error("byte stream required, but received JSON");
    }
    const Re = { status: 200 }, Se = 404, be = { status: 415 }, Fe = { status: 405 }, _e = { status: 505 };
    function ve(e3) {
      var A3, t2, n2;
      null != e3 || (e3 = {});
      const r3 = e3.acceptCompression ? [...e3.acceptCompression] : [], o3 = null !== (A3 = e3.requireConnectProtocolHeader) && void 0 !== A3 && A3, a2 = null !== (t2 = e3.maxTimeoutMs) && void 0 !== t2 ? t2 : Number.MAX_SAFE_INTEGER;
      return Object.assign(Object.assign({ acceptCompression: r3 }, (function(e4, A4, t3) {
        if (null != A4 || (A4 = V), null != e4 || (e4 = G), null != t3 || (t3 = 1024), A4 < 1 || A4 > V) throw new g(`writeMaxBytes ${A4} must be >= 1 and <= 4294967295`, s.Internal);
        if (e4 < 1 || e4 > G) throw new g(`readMaxBytes ${e4} must be >= 1 and <= 4294967295`, s.Internal);
        return { readMaxBytes: e4, writeMaxBytes: A4, compressMinBytes: t3 };
      })(e3.readMaxBytes, e3.writeMaxBytes, e3.compressMinBytes)), { jsonOptions: e3.jsonOptions, binaryOptions: e3.binaryOptions, maxTimeoutMs: a2, shutdownSignal: e3.shutdownSignal, requireConnectProtocolHeader: o3, interceptors: null !== (n2 = e3.interceptors) && void 0 !== n2 ? n2 : [] });
    }
    function Le(e3, A3) {
      return (function(e4) {
        if (0 == e4.length) throw new g("at least one protocol is required", s.Internal);
        const A4 = e4[0].service, t2 = e4[0].method, n2 = e4[0].requestPath;
        if (e4.some((e5) => e5.service !== A4 || e5.method !== t2)) throw new g("cannot negotiate protocol for different RPCs", s.Internal);
        if (e4.some((e5) => e5.requestPath !== n2)) throw new g("cannot negotiate protocol for different requestPaths", s.Internal);
        async function r3(A5) {
          var n3;
          if (t2.kind == f.MethodKind.BiDiStreaming && A5.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, _e), { header: new Headers({ Connection: "close" }) });
          const r4 = null !== (n3 = A5.header.get("Content-Type")) && void 0 !== n3 ? n3 : "", o3 = e4.filter((e5) => e5.allowedMethods.includes(A5.method));
          if (0 == o3.length) return Fe;
          if (1 == o3.length && "" === r4) {
            return (0, o3[0])(A5);
          }
          const s2 = o3.filter((e5) => e5.supportedContentType(r4));
          if (0 == s2.length) return be;
          return (0, s2[0])(A5);
        }
        return Object.assign(r3, { service: A4, method: t2, requestPath: n2, supportedContentType: ue(...e4.map((e5) => e5.supportedContentType)), protocolNames: e4.flatMap((e5) => e5.protocolNames).filter((e5, A5, t3) => t3.indexOf(e5) === A5), allowedMethods: e4.flatMap((e5) => e5.allowedMethods).filter((e5, A5, t3) => t3.indexOf(e5) === A5) });
      })(A3.map((A4) => A4(e3)));
    }
    const Ue = "grpc-web", Me = "POST";
    function Oe(e3) {
      const A3 = ve(e3), t2 = { serialize: D, parse: N };
      function n2(e4) {
        const n3 = (function(e5, A4, t3) {
          const n4 = Te(t3.method, e5.binaryOptions, e5.jsonOptions, e5);
          return async function(r3) {
            De(r3);
            const o3 = (function(e6) {
              const A5 = null == e6 ? void 0 : e6.match(v);
              if (!A5) return;
              return { text: !!A5[1], binary: !A5[2] };
            })(r3.header.get(R));
            if (null == o3 || o3.text) return be;
            if (r3.method !== Me) return Fe;
            const a2 = M(r3.header.get(F), e5.maxTimeoutMs), i2 = T(Object.assign(Object.assign({}, t3), { requestMethod: r3.method, protocolName: Ue, timeoutMs: a2.timeoutMs, shutdownSignal: e5.shutdownSignal, requestSignal: r3.signal, requestHeader: r3.header, url: r3.url, responseHeader: { [R]: o3.binary ? L : U }, responseTrailer: { [_]: J }, contextValues: r3.contextValues })), c2 = P(e5.acceptCompression, r3.header.get(S), r3.header.get(b), b);
            c2.response && i2.responseHeader.set(S, c2.response.name);
            const l2 = ee(r3.body, te(() => {
              if (c2.error) throw c2.error;
              if (a2.error) throw a2.error;
            }), ie(e5.readMaxBytes), se(c2.request, e5.readMaxBytes), re(n4.getI(o3.binary), w)), E2 = fe(t3, i2, e5.interceptors)(l2)[Symbol.asyncIterator](), u2 = ee({ [Symbol.asyncIterator]: () => ({ next: () => E2.next(), throw: (e6) => {
              var A5, t4;
              return i2.abort(e6), null !== (t4 = null === (A5 = E2.throw) || void 0 === A5 ? void 0 : A5.call(E2, e6)) && void 0 !== t4 ? t4 : Promise.reject({ done: true });
            }, return: (e6) => {
              var A5, t4;
              return i2.abort(), null !== (t4 = null === (A5 = E2.return) || void 0 === A5 ? void 0 : A5.call(E2, e6)) && void 0 !== t4 ? t4 : Promise.resolve({ done: true, value: e6 });
            } }) }, ne(n4.getO(o3.binary)), Ae((e6) => (i2.abort(), e6 instanceof g ? Y(i2.responseTrailer, e6) : void 0 !== e6 && Y(i2.responseTrailer, new g("internal error", s.Internal, void 0, void 0, e6)), { flags: w, data: A4.serialize(i2.responseTrailer) })), oe(c2.response, e5.compressMinBytes), ae(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, Re), { body: await le(u2), header: i2.responseHeader });
          };
        })(A3, t2, e4);
        return Object.assign(n3, { protocolNames: [Ue], allowedMethods: [Me], supportedContentType: ue(v), requestPath: de("/", e4.service, e4.method), service: e4.service, method: e4.method });
      }
      return n2.protocolName = Ue, n2;
    }
    const Je = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, Ye = "application/grpc+proto", Pe = "application/grpc+json";
    const Ge = "grpc", Ve = "POST";
    function xe(e3) {
      const A3 = ve(e3);
      function t2(e4) {
        const t3 = (function(e5, A4) {
          const t4 = Te(A4.method, e5.binaryOptions, e5.jsonOptions, e5);
          return async function(n2) {
            De(n2);
            const r3 = (function(e6) {
              const A5 = null == e6 ? void 0 : e6.match(Je);
              if (!A5) return;
              return { binary: !A5[1] };
            })(n2.header.get(R));
            if (null == r3) return be;
            if (n2.method !== Ve) return Fe;
            const o3 = M(n2.header.get(F), e5.maxTimeoutMs), a2 = T(Object.assign(Object.assign({}, A4), { requestMethod: n2.method, protocolName: Ge, timeoutMs: o3.timeoutMs, shutdownSignal: e5.shutdownSignal, requestSignal: n2.signal, requestHeader: n2.header, url: n2.url, responseHeader: { [R]: r3.binary ? Ye : Pe }, responseTrailer: { [_]: J }, contextValues: n2.contextValues })), i2 = P(e5.acceptCompression, n2.header.get(S), n2.header.get(b), b);
            i2.response && a2.responseHeader.set(S, i2.response.name);
            const c2 = ee(n2.body, te(() => {
              if (i2.error) throw i2.error;
              if (o3.error) throw o3.error;
            }), ie(e5.readMaxBytes), se(i2.request, e5.readMaxBytes), re(t4.getI(r3.binary))), l2 = fe(A4, a2, e5.interceptors)(c2)[Symbol.asyncIterator](), E2 = ee({ [Symbol.asyncIterator]: () => ({ next: () => l2.next(), throw: (e6) => {
              var A5, t5;
              return a2.abort(e6), null !== (t5 = null === (A5 = l2.throw) || void 0 === A5 ? void 0 : A5.call(l2, e6)) && void 0 !== t5 ? t5 : Promise.reject({ done: true });
            }, return: (e6) => {
              var A5, t5;
              return a2.abort(), null !== (t5 = null === (A5 = l2.return) || void 0 === A5 ? void 0 : A5.call(l2, e6)) && void 0 !== t5 ? t5 : Promise.resolve({ done: true, value: e6 });
            } }) }, ne(t4.getO(r3.binary)), oe(i2.response, e5.compressMinBytes), ae(), Ae((e6) => {
              a2.abort(), e6 instanceof g ? Y(a2.responseTrailer, e6) : void 0 !== e6 && Y(a2.responseTrailer, new g("internal error", s.Internal, void 0, void 0, e6));
            }), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, Re), { body: await le(E2), header: a2.responseHeader, trailer: a2.responseTrailer });
          };
        })(A3, e4);
        return Object.assign(t3, { protocolNames: [Ge], allowedMethods: [Ve], supportedContentType: ue(Je), requestPath: de("/", e4.service, e4.method), service: e4.service, method: e4.method });
      }
      return t2.protocolName = Ge, t2;
    }
    const He = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i, qe = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i, We = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i, je = "application/proto", Xe = "application/json", Ke = "application/connect+proto", Ze = "application/connect+json";
    function ze(e3) {
      if ("text/event-stream" === e3) return { stream: true, binary: true };
      const A3 = null == e3 ? void 0 : e3.match(He);
      if (!A3) return;
      return { stream: !!A3[1], binary: !!A3[3] };
    }
    var $e = function(e3, A3) {
      var t2 = {};
      for (var n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && A3.indexOf(n2) < 0 && (t2[n2] = e3[n2]);
      if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
        var r3 = 0;
        for (n2 = Object.getOwnPropertySymbols(e3); r3 < n2.length; r3++) A3.indexOf(n2[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n2[r3]) && (t2[n2[r3]] = e3[n2[r3]]);
      }
      return t2;
    };
    function eA(e3, A3, t2) {
      var n2;
      if (A3 && new Headers(A3).forEach((e4, A4) => t2.metadata.append(A4, e4)), "object" != typeof e3 || null == e3 || Array.isArray(e3)) throw t2;
      let r3 = t2.code;
      "code" in e3 && "string" == typeof e3.code && (r3 = null !== (n2 = (function(e4) {
        if (!l) {
          l = {};
          for (const e5 of Object.values(s)) "string" != typeof e5 && (l[c(e5)] = e5);
        }
        return l[e4];
      })(e3.code)) && void 0 !== n2 ? n2 : r3);
      const o3 = e3.message;
      if (null != o3 && "string" != typeof o3) throw t2;
      const a2 = new g(null != o3 ? o3 : "", r3, A3);
      if ("details" in e3 && Array.isArray(e3.details)) for (const A4 of e3.details) {
        if (null === A4 || "object" != typeof A4 || Array.isArray(A4) || "string" != typeof A4.type || "string" != typeof A4.value) throw t2;
        try {
          a2.details.push({ type: A4.type, value: f.protoBase64.dec(A4.value), debug: A4.debug });
        } catch (e4) {
          throw t2;
        }
      }
      return a2;
    }
    function AA(e3, A3) {
      const t2 = { code: c(e3.code) };
      return e3.rawMessage.length > 0 && (t2.message = e3.rawMessage), e3.details.length > 0 && (t2.details = e3.details.map((e4) => {
        if ("getType" in e4) {
          const t3 = { type: e4.getType().typeName, value: e4.toBinary() };
          try {
            t3.debug = e4.toJson(A3);
          } catch (e5) {
          }
          return t3;
        }
        return e4;
      }).map((e4) => {
        var { value: A4 } = e4, t3 = $e(e4, ["value"]);
        return Object.assign(Object.assign({}, t3), { value: f.protoBase64.enc(A4).replace(/=+$/, "") });
      })), t2;
    }
    function tA(e3, A3, t2) {
      const n2 = {};
      void 0 !== A3 && (n2.error = AA(A3, t2), e3 = (function(...e4) {
        const A4 = new Headers();
        for (const t3 of e4) t3.forEach((e5, t4) => {
          A4.append(t4, e5);
        });
        return A4;
      })(e3, A3.metadata));
      let r3 = false;
      const o3 = {};
      return e3.forEach((e4, A4) => {
        r3 = true, o3[A4] = [e4];
      }), r3 && (n2.metadata = o3), n2;
    }
    function nA(e3) {
      const A3 = new TextEncoder();
      return { serialize(t2) {
        try {
          const n2 = tA(t2.metadata, t2.error, e3), r3 = JSON.stringify(n2);
          return A3.encode(r3);
        } catch (e4) {
          const A4 = e4 instanceof Error ? e4.message : String(e4);
          throw new g(`failed to serialize EndStreamResponse: ${A4}`, s.Internal);
        }
      }, parse(e4) {
        try {
          return (function(e5) {
            const A4 = new g("invalid end stream", s.Unknown);
            let t2;
            try {
              t2 = JSON.parse("string" == typeof e5 ? e5 : new TextDecoder().decode(e5));
            } catch (e6) {
              throw A4;
            }
            if ("object" != typeof t2 || null == t2 || Array.isArray(t2)) throw A4;
            const n2 = new Headers();
            if ("metadata" in t2) {
              if ("object" != typeof t2.metadata || null == t2.metadata || Array.isArray(t2.metadata)) throw A4;
              for (const [e6, r3] of Object.entries(t2.metadata)) {
                if (!Array.isArray(r3) || r3.some((e7) => "string" != typeof e7)) throw A4;
                for (const A5 of r3) n2.append(e6, A5);
              }
            }
            return { metadata: n2, error: "error" in t2 && null != t2.error ? eA(t2.error, n2, A4) : void 0 };
          })(e4);
        } catch (e5) {
          const A4 = e5 instanceof Error ? e5.message : String(e5);
          throw new g(`failed to parse EndStreamResponse: ${A4}`, s.InvalidArgument);
        }
      } };
    }
    const rA = "Content-Type", oA = "Content-Length", sA = "Content-Encoding", aA = "Connect-Content-Encoding", iA = "Accept-Encoding", cA = "Connect-Accept-Encoding", lA = "Connect-Timeout-Ms", gA = "Connect-Protocol-Version";
    function EA(e3, A3) {
      if (null === e3) return {};
      const t2 = /^\d{1,10}$/.exec(e3);
      if (null === t2) return { error: new g(`protocol error: invalid connect timeout value: ${e3}`, s.InvalidArgument) };
      const n2 = parseInt(t2[0]);
      return n2 > A3 ? { timeoutMs: n2, error: new g(`timeout ${n2}ms must be <= ${A3}`, s.InvalidArgument) } : { timeoutMs: parseInt(t2[0]) };
    }
    const uA = "connect", dA = "encoding", IA = "compression", hA = "base64", QA = "message";
    const mA = "1";
    function CA(e3) {
      const A3 = e3.get(gA);
      if (null === A3) throw new g(`missing required header: set ${gA} to "${mA}"`, s.InvalidArgument);
      if (A3 !== mA) throw new g(`${gA} must be "${mA}": got "${A3}"`, s.InvalidArgument);
    }
    const BA = "connect", pA = "POST", fA = "GET";
    function yA(e3) {
      const A3 = ve(e3), t2 = nA(A3.jsonOptions);
      function n2(e4) {
        let n3, r3;
        const o3 = Te(e4.method, A3.binaryOptions, A3.jsonOptions, A3);
        if (e4.kind === f.MethodKind.Unary) r3 = qe, n3 = /* @__PURE__ */ (function(e5, A4, t3) {
          return async function(n4) {
            const r4 = n4.method == fA;
            if (r4 && A4.method.idempotency != f.MethodIdempotency.NoSideEffects) return Fe;
            const o4 = new URL(n4.url).searchParams, a3 = r4 ? o4.get(IA) : n4.header.get(sA), i2 = r4 ? (function(e6) {
              switch (e6) {
                case "proto":
                  return { stream: false, binary: true };
                case "json":
                  return { stream: false, binary: false };
                default:
                  return;
              }
            })(o4.get(dA)) : ze(n4.header.get(rA));
            if (null == i2 || i2.stream) return be;
            const c2 = EA(n4.header.get(lA), e5.maxTimeoutMs), l2 = T(Object.assign(Object.assign({}, A4), { requestMethod: n4.method, protocolName: BA, timeoutMs: c2.timeoutMs, shutdownSignal: e5.shutdownSignal, requestSignal: n4.signal, requestHeader: n4.header, url: n4.url, responseHeader: { [rA]: i2.binary ? je : Xe }, contextValues: n4.contextValues })), E2 = P(e5.acceptCompression, a3, n4.header.get(iA), iA);
            let u2, d2 = Re.status;
            try {
              if (e5.requireConnectProtocolHeader && (r4 ? (function(e6) {
                const A5 = e6.get(uA);
                if (null === A5) throw new g(`missing required parameter: set ${uA} to "v${mA}"`, s.InvalidArgument);
                if (A5 !== `v${mA}`) throw new g(`${uA} must be "v${mA}": got "${A5}"`, s.InvalidArgument);
              })(o4) : CA(n4.header)), E2.error) throw E2.error;
              if (c2.error) throw c2.error;
              let a4;
              a4 = r4 ? await (async function(e6, A5, t4) {
                var n5;
                const r5 = t4.get(hA), o5 = null !== (n5 = t4.get(QA)) && void 0 !== n5 ? n5 : "";
                let s2;
                s2 = "1" === r5 ? f.protoBase64.dec(o5) : new TextEncoder().encode(o5);
                A5 && (s2 = await A5.decompress(s2, e6));
                return s2;
              })(e5.readMaxBytes, E2.request, o4) : await (async function(e6, A5, t4) {
                if ("object" == typeof t4.body && null !== t4.body && Symbol.asyncIterator in t4.body) {
                  let n5 = await ce(t4.body, e6, t4.header.get(oA));
                  return A5 && (n5 = await A5.decompress(n5, e6)), n5;
                }
                return t4.body;
              })(e5.readMaxBytes, E2.request, n4);
              const d3 = (function(e6, A5, t4, n5) {
                if (n5 instanceof Uint8Array) return t4.getI(A5).parse(n5);
                if (A5) throw new g("received parsed JSON request body, but content-type indicates binary format", s.Internal);
                try {
                  return e6.I.fromJson(n5);
                } catch (e7) {
                  throw g.from(e7, s.InvalidArgument);
                }
              })(A4.method, i2.binary, t3, a4), I3 = await (async function(e6, A5, t4, n5) {
                const r5 = Qe(async (t5) => ({ message: Ie(e6.method.O, await e6.impl(t5.message, Object.assign(Object.assign({}, A5), { service: t5.service, method: t5.method, requestHeader: t5.header, values: t5.contextValues, signal: t5.signal }))), stream: false, service: t5.service, method: t5.method, header: A5.responseHeader, trailer: A5.responseTrailer }), n5), { message: o5 } = await r5({ init: { method: A5.requestMethod }, message: t4, url: A5.url, signal: A5.signal, service: e6.service, method: e6.method, header: A5.requestHeader, contextValues: A5.values, stream: false });
                return o5;
              })(A4, l2, d3, e5.interceptors);
              u2 = t3.getO(i2.binary).serialize(I3);
            } catch (A5) {
              let t4;
              t4 = A5 instanceof g ? A5 : new g("internal error", s.Internal, void 0, void 0, A5), d2 = (function(e6) {
                switch (e6) {
                  case s.Canceled:
                    return 499;
                  case s.Unknown:
                    return 500;
                  case s.InvalidArgument:
                    return 400;
                  case s.DeadlineExceeded:
                    return 504;
                  case s.NotFound:
                    return 404;
                  case s.AlreadyExists:
                    return 409;
                  case s.PermissionDenied:
                    return 403;
                  case s.ResourceExhausted:
                    return 429;
                  case s.FailedPrecondition:
                    return 400;
                  case s.Aborted:
                    return 409;
                  case s.OutOfRange:
                    return 400;
                  case s.Unimplemented:
                    return 501;
                  case s.Internal:
                    return 500;
                  case s.Unavailable:
                    return 503;
                  case s.DataLoss:
                    return 500;
                  case s.Unauthenticated:
                    return 401;
                  default:
                    return 500;
                }
              })(t4.code), l2.responseHeader.set(rA, Xe), t4.metadata.forEach((e6, A6) => {
                l2.responseHeader.set(A6, e6);
              }), u2 = (function(e6, A6) {
                const t5 = new TextEncoder();
                try {
                  const n5 = AA(e6, A6), r5 = JSON.stringify(n5);
                  return t5.encode(r5);
                } catch (e7) {
                  const A7 = e7 instanceof Error ? e7.message : String(e7);
                  throw new g(`failed to serialize Connect Error: ${A7}`, s.Internal);
                }
              })(t4, e5.jsonOptions);
            } finally {
              l2.abort();
            }
            E2.response && u2.byteLength >= e5.compressMinBytes && (u2 = await E2.response.compress(u2), l2.responseHeader.set(sA, E2.response.name));
            const I2 = (function(e6, A5) {
              const t4 = new Headers(e6);
              return A5.forEach((e7, A6) => {
                t4.append(`trailer-${A6}`, e7);
              }), t4;
            })(l2.responseHeader, l2.responseTrailer);
            return I2.set(oA, u2.byteLength.toString(10)), { status: d2, body: Ee([u2]), header: I2 };
          };
        })(A3, e4, o3);
        else r3 = We, n3 = /* @__PURE__ */ (function(e5, A4, t3, n4) {
          return async function(r4) {
            De(r4);
            const o4 = ze(r4.header.get(rA));
            if (null == o4 || !o4.stream) return be;
            if (r4.method !== pA) return Fe;
            const a3 = EA(r4.header.get(lA), e5.maxTimeoutMs), i2 = T(Object.assign(Object.assign({}, A4), { requestMethod: r4.method, protocolName: BA, timeoutMs: a3.timeoutMs, shutdownSignal: e5.shutdownSignal, requestSignal: r4.signal, requestHeader: r4.header, url: r4.url, responseHeader: { [rA]: o4.binary ? Ke : Ze }, contextValues: r4.contextValues })), c2 = P(e5.acceptCompression, r4.header.get(aA), r4.header.get(cA), cA);
            c2.response && i2.responseHeader.set(aA, c2.response.name);
            const l2 = ee(r4.body, te(() => {
              if (e5.requireConnectProtocolHeader && CA(r4.header), c2.error) throw c2.error;
              if (a3.error) throw a3.error;
            }), ie(e5.readMaxBytes), se(c2.request, e5.readMaxBytes), re(t3.getI(o4.binary), 2)), E2 = fe(A4, i2, e5.interceptors)(l2)[Symbol.asyncIterator](), u2 = ee({ [Symbol.asyncIterator]: () => ({ next: () => E2.next(), throw: (e6) => {
              var A5, t4;
              return i2.abort(e6), null !== (t4 = null === (A5 = E2.throw) || void 0 === A5 ? void 0 : A5.call(E2, e6)) && void 0 !== t4 ? t4 : Promise.reject({ done: true });
            }, return: (e6) => {
              var A5, t4;
              return i2.abort(), null !== (t4 = null === (A5 = E2.return) || void 0 === A5 ? void 0 : A5.call(E2, e6)) && void 0 !== t4 ? t4 : Promise.resolve({ done: true, value: e6 });
            } }) }, ne(t3.getO(o4.binary)), Ae((e6) => {
              i2.abort();
              const A5 = { metadata: i2.responseTrailer };
              return e6 instanceof g ? A5.error = e6 : void 0 !== e6 && (A5.error = new g("internal error", s.Internal, void 0, void 0, e6)), { flags: 2, data: n4.serialize(A5) };
            }), oe(c2.response, e5.compressMinBytes), ae(), { propagateDownStreamError: true });
            return Object.assign(Object.assign({}, Re), { body: await le(u2), header: i2.responseHeader });
          };
        })(A3, e4, o3, t2);
        const a2 = [pA];
        return e4.method.idempotency === f.MethodIdempotency.NoSideEffects && a2.push(fA), Object.assign(n3, { protocolNames: [BA], supportedContentType: ue(r3), allowedMethods: a2, requestPath: de("/", e4.service, e4.method), service: e4.service, method: e4.method });
      }
      return n2.protocolName = BA, n2;
    }
    function TA(e3) {
      const A3 = kA(e3), t2 = [];
      return { handlers: t2, service(e4, n2, r3) {
        const { protocols: o3 } = kA(r3, A3);
        return t2.push(...(function(e5, A4) {
          return Object.entries(e5.methods).map(([, e6]) => Le(e6, A4));
        })((function(e5, A4) {
          const t3 = { service: e5, methods: {} };
          for (const [n3, r4] of Object.entries(e5.methods)) {
            let o4 = A4[n3];
            if ("function" == typeof o4) o4 = o4.bind(A4);
            else {
              const A5 = `${e5.typeName}.${r4.name} is not implemented`;
              o4 = function() {
                throw new g(A5, s.Unimplemented);
              };
            }
            t3.methods[n3] = k(e5, r4, o4);
          }
          return t3;
        })(e4, n2), o3)), this;
      }, rpc(e4, n2, r3, o3) {
        let s2, a2, i2, c2;
        "typeName" in e4 ? (s2 = e4, a2 = n2, i2 = r3, c2 = o3) : (s2 = Object.assign(Object.assign({}, e4.service), { methods: {} }), a2 = e4, i2 = n2, c2 = r3);
        const { protocols: l2 } = kA(c2, A3);
        return t2.push(Le(k(s2, a2, i2), l2)), this;
      } };
    }
    function kA(e3, A3) {
      if (A3 && !e3) return A3;
      const t2 = A3 ? Object.assign(Object.assign({}, ve(A3.options)), e3) : Object.assign(Object.assign({}, e3), ve(null != e3 ? e3 : {})), n2 = [];
      if (false !== (null == e3 ? void 0 : e3.grpc) && n2.push(xe(t2)), false !== (null == e3 ? void 0 : e3.grpcWeb) && n2.push(Oe(t2)), false !== (null == e3 ? void 0 : e3.connect) && n2.push(yA(t2)), 0 === n2.length) throw new g("cannot create handler, all protocols are disabled", s.InvalidArgument);
      return { options: t2, protocols: n2 };
    }
    function wA(e3) {
      const A3 = new Headers();
      for (const [t2, n2] of Object.entries(e3)) if (!t2.startsWith(":") && void 0 !== n2) if ("string" == typeof n2) A3.append(t2, n2);
      else if ("number" == typeof n2) A3.append(t2, String(n2));
      else for (const e4 of n2) A3.append(t2, e4);
      return A3;
    }
    function NA(e3, A3) {
      if (void 0 === e3 && void 0 === A3) return;
      const t2 = /* @__PURE__ */ Object.create(null);
      if (void 0 !== A3) for (const [e4, n2] of Object.entries(A3)) Array.isArray(n2) ? t2[e4] = n2.concat() : void 0 !== n2 && (t2[e4] = n2);
      if (void 0 !== e3) if (Array.isArray(e3)) for (const [A4, n2] of e3) DA(t2, A4, n2);
      else if ("forEach" in e3) "function" == typeof e3.forEach && e3.forEach((e4, A4) => {
        DA(t2, A4, e4);
      });
      else for (const [A4, n2] of Object.entries(e3)) DA(t2, A4, n2);
      return t2;
    }
    function DA(e3, A3, t2) {
      const n2 = e3[A3 = A3.toLowerCase()];
      Array.isArray(n2) ? n2.push(t2) : e3[A3] = void 0 === n2 ? t2 : [n2.toString(), t2];
    }
    var RA = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var A3, t2 = e3[Symbol.asyncIterator];
      return t2 ? t2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), A3 = {}, n2("next"), n2("throw"), n2("return"), A3[Symbol.asyncIterator] = function() {
        return this;
      }, A3);
      function n2(t3) {
        A3[t3] = e3[t3] && function(A4) {
          return new Promise(function(n3, r3) {
            (function(e4, A5, t4, n4) {
              Promise.resolve(n4).then(function(A6) {
                e4({ value: A6, done: t4 });
              }, A5);
            })(n3, r3, (A4 = e3[t3](A4)).done, A4.value);
          });
        };
      }
    }, SA = function(e3) {
      return this instanceof SA ? (this.v = e3, this) : new SA(e3);
    }, bA = function(e3, A3, t2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, r3 = t2.apply(e3, A3 || []), o3 = [];
      return n2 = {}, s2("next"), s2("throw"), s2("return", function(e4) {
        return function(A4) {
          return Promise.resolve(A4).then(e4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function s2(e4, A4) {
        r3[e4] && (n2[e4] = function(A5) {
          return new Promise(function(t3, n3) {
            o3.push([e4, A5, t3, n3]) > 1 || a2(e4, A5);
          });
        }, A4 && (n2[e4] = A4(n2[e4])));
      }
      function a2(e4, A4) {
        try {
          (t3 = r3[e4](A4)).value instanceof SA ? Promise.resolve(t3.value.v).then(i2, c2) : l2(o3[0][2], t3);
        } catch (e5) {
          l2(o3[0][3], e5);
        }
        var t3;
      }
      function i2(e4) {
        a2("next", e4);
      }
      function c2(e4) {
        a2("throw", e4);
      }
      function l2(e4, A4) {
        e4(A4), o3.shift(), o3.length && a2(o3[0][0], o3[0][1]);
      }
    };
    function FA(e3, ...A3) {
      var t2, n2;
      const r3 = 3 === A3.length ? A3[0] : void 0, o3 = 3 === A3.length ? A3[1] : A3[0], a2 = 3 === A3.length ? A3[2] : A3[1], i2 = "encrypted" in e3.socket && e3.socket.encrypted ? "https" : "http", c2 = "authority" in e3 ? e3.authority : e3.headers.host, l2 = null !== (t2 = e3.url) && void 0 !== t2 ? t2 : "";
      if (void 0 === c2) throw new g("unable to determine request authority from Node.js server request", s.Internal);
      const u2 = void 0 !== o3 ? o3 : (function(e4) {
        return bA(this, arguments, function* () {
          var A4, t3, n3, r4;
          const o4 = e4.iterator({ destroyOnReturn: false });
          try {
            for (var s2, a3 = true, i3 = RA(o4); !(A4 = (s2 = yield SA(i3.next())).done); a3 = true) {
              r4 = s2.value, a3 = false;
              const e5 = r4;
              yield yield SA(e5);
            }
          } catch (e5) {
            t3 = { error: e5 };
          } finally {
            try {
              a3 || A4 || !(n3 = i3.return) || (yield SA(n3.call(i3)));
            } finally {
              if (t3) throw t3.error;
            }
          }
        });
      })(e3), I2 = new AbortController();
      if ("stream" in e3) e3.once("close", () => {
        const A4 = (function(e4) {
          switch (e4) {
            case d.PROTOCOL_ERROR:
            case d.INTERNAL_ERROR:
            case d.FLOW_CONTROL_ERROR:
            case d.SETTINGS_TIMEOUT:
            case d.FRAME_SIZE_ERROR:
            case d.COMPRESSION_ERROR:
            case d.CONNECT_ERROR:
              return new g(`http/2 stream closed with error code ${d[e4]} (0x${e4.toString(16)})`, s.Internal);
            case d.REFUSED_STREAM:
              return new g(`http/2 stream closed with error code ${d[e4]} (0x${e4.toString(16)})`, s.Unavailable);
            case d.CANCEL:
              return new g(`http/2 stream closed with error code ${d[e4]} (0x${e4.toString(16)})`, s.Canceled);
            case d.ENHANCE_YOUR_CALM:
              return new g(`http/2 stream closed with error code ${d[e4]} (0x${e4.toString(16)})`, s.ResourceExhausted);
            case d.INADEQUATE_SECURITY:
            case d.HTTP_1_1_REQUIRED:
              return new g(`http/2 stream closed with error code ${d[e4]} (0x${e4.toString(16)})`, s.PermissionDenied);
            case d.STREAM_CLOSED:
          }
        })(e3.stream.rstCode);
        void 0 !== A4 ? I2.abort(A4) : I2.abort();
      });
      else {
        const A4 = null != r3 ? r3 : e3, t3 = (r4) => {
          e3.off("error", t3), A4.off("close", n3), I2.abort(E(r4));
        }, n3 = () => {
          e3.off("error", t3), A4.off("close", n3), I2.abort(e3.errored ? E(e3.errored) : void 0);
        };
        e3.once("error", t3), A4.once("close", n3);
      }
      return { httpVersion: e3.httpVersion, method: null !== (n2 = e3.method) && void 0 !== n2 ? n2 : "", url: new URL(l2, `${i2}://${c2}`).toString(), header: wA(e3.headers), body: u2, signal: I2.signal, contextValues: a2 };
    }
    function _A(e3, A3) {
      return new Promise((t2, n2) => {
        if (e3.errored) return o3(e3.errored);
        e3.once("error", o3), e3.once("drain", s2);
        const r3 = e3.write(A3, "binary", function(A4) {
          A4 && !r3 && (o3(A4), e3.once("error", () => {
          }));
        });
        function o3(A4) {
          e3.off("error", o3), e3.off("drain", s2), n2(A4);
        }
        function s2() {
          e3.off("error", o3), e3.off("drain", s2), t2();
        }
        r3 && s2();
      });
    }
    function vA(e3) {
      var A3;
      void 0 === e3.acceptCompression && (e3.acceptCompression = [C, B]);
      const t2 = TA(e3);
      e3.routes(t2);
      const n2 = null !== (A3 = e3.requestPathPrefix) && void 0 !== A3 ? A3 : "", r3 = /* @__PURE__ */ new Map();
      for (const e4 of t2.handlers) r3.set(n2 + e4.requestPath, e4);
      return function(A4, t3) {
        var n3, o3, a2, i2;
        const c2 = r3.get(null !== (o3 = null === (n3 = A4.url) || void 0 === n3 ? void 0 : n3.split("?", 2)[0]) && void 0 !== o3 ? o3 : "");
        if (!c2) return void (null !== (a2 = e3.fallback) && void 0 !== a2 ? a2 : LA)(A4, t3);
        const l2 = FA(A4, t3, void 0, null === (i2 = e3.contextValues) || void 0 === i2 ? void 0 : i2.call(e3, A4));
        c2(l2).then((e4) => (async function(e5, A5) {
          var t4, n4, r4;
          const o4 = null === (t4 = e5.body) || void 0 === t4 ? void 0 : t4[Symbol.asyncIterator]();
          let s2 = false;
          try {
            if (void 0 !== o4) {
              let t5 = await o4.next();
              for (s2 = true, A5.writeHead(e5.status, NA(e5.header)), s2 = false; true !== t5.done; t5 = await o4.next()) s2 = true, await _A(A5, t5.value), "flush" in A5 && "function" == typeof A5.flush && A5.flush(), s2 = false;
            }
            A5.headersSent || A5.writeHead(e5.status, NA(e5.header)), e5.trailer && A5.addTrailers(NA(e5.trailer)), await new Promise((e6) => {
              A5.once("end", e6), A5.end();
            });
          } catch (e6) {
            throw s2 && (null === (n4 = null == o4 ? void 0 : o4.throw) || void 0 === n4 || n4.call(o4, e6).catch(() => {
            })), E(e6);
          } finally {
            null === (r4 = null == o4 ? void 0 : o4.return) || void 0 === r4 || r4.call(o4).catch(() => {
            });
          }
        })(e4, t3)).catch((e4) => {
          g.from(e4).code != s.Aborted && console.error(`handler for rpc ${c2.method.name} of ${c2.service.typeName} failed`, e4);
        });
      };
    }
    const LA = (e3, A3) => {
      A3.writeHead(Se), A3.end();
    }, UA = require("node:http");
    function MA(e3, A3) {
      if (!e3) throw new Error(A3);
    }
    function OA(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }
    function JA(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }
    function YA(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    }
    const PA = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function GA(e3) {
      const A3 = e3[PA];
      return MA(A3, "missing enum type on enum object"), A3;
    }
    function VA(e3, A3, t2, n2) {
      e3[PA] = xA(A3, t2.map((A4) => ({ no: A4.no, name: A4.name, localName: e3[A4.no] })), n2);
    }
    function xA(e3, A3, t2) {
      const n2 = /* @__PURE__ */ Object.create(null), r3 = /* @__PURE__ */ Object.create(null), o3 = [];
      for (const e4 of A3) {
        const A4 = qA(e4);
        o3.push(A4), n2[e4.name] = A4, r3[e4.no] = A4;
      }
      return { typeName: e3, values: o3, findName: (e4) => n2[e4], findNumber: (e4) => r3[e4] };
    }
    function HA(e3, A3, t2) {
      const n2 = {};
      for (const e4 of A3) {
        const A4 = qA(e4);
        n2[A4.localName] = A4.no, n2[A4.no] = A4.localName;
      }
      return VA(n2, e3, A3, t2), n2;
    }
    function qA(e3) {
      return "localName" in e3 ? e3 : { ...e3, localName: e3.name };
    }
    class WA {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, A3) {
        const t2 = this.getType().runtime.bin, n2 = t2.makeReadOptions(A3);
        return t2.readMessage(this, n2.readerFactory(e3), e3.byteLength, n2), this;
      }
      fromJson(e3, A3) {
        const t2 = this.getType(), n2 = t2.runtime.json, r3 = n2.makeReadOptions(A3);
        return n2.readMessage(t2, e3, r3, this), this;
      }
      fromJsonString(e3, A3) {
        let t2;
        try {
          t2 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(t2, A3);
      }
      toBinary(e3) {
        const A3 = this.getType().runtime.bin, t2 = A3.makeWriteOptions(e3), n2 = t2.writerFactory();
        return A3.writeMessage(this, n2, t2), n2.finish();
      }
      toJson(e3) {
        const A3 = this.getType().runtime.json, t2 = A3.makeWriteOptions(e3);
        return A3.writeMessage(this, t2);
      }
      toJsonString(e3) {
        const A3 = this.toJson(e3);
        return JSON.stringify(A3, null, e3?.prettySpaces ?? 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    }
    function jA() {
      let e3 = 0, A3 = 0;
      for (let t3 = 0; t3 < 28; t3 += 7) {
        let n2 = this.buf[this.pos++];
        if (e3 |= (127 & n2) << t3, !(128 & n2)) return this.assertBounds(), [e3, A3];
      }
      let t2 = this.buf[this.pos++];
      if (e3 |= (15 & t2) << 28, A3 = (112 & t2) >> 4, !(128 & t2)) return this.assertBounds(), [e3, A3];
      for (let t3 = 3; t3 <= 31; t3 += 7) {
        let n2 = this.buf[this.pos++];
        if (A3 |= (127 & n2) << t3, !(128 & n2)) return this.assertBounds(), [e3, A3];
      }
      throw new Error("invalid varint");
    }
    function XA(e3, A3, t2) {
      for (let n3 = 0; n3 < 28; n3 += 7) {
        const r4 = e3 >>> n3, o3 = !(r4 >>> 7 == 0 && 0 == A3), s2 = 255 & (o3 ? 128 | r4 : r4);
        if (t2.push(s2), !o3) return;
      }
      const n2 = e3 >>> 28 & 15 | (7 & A3) << 4, r3 = !!(A3 >> 3);
      if (t2.push(255 & (r3 ? 128 | n2 : n2)), r3) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const n3 = A3 >>> e4, r4 = !(n3 >>> 7 == 0), o3 = 255 & (r4 ? 128 | n3 : n3);
          if (t2.push(o3), !r4) return;
        }
        t2.push(A3 >>> 31 & 1);
      }
    }
    const KA = 4294967296;
    function ZA(e3) {
      const A3 = "-" === e3[0];
      A3 && (e3 = e3.slice(1));
      const t2 = 1e6;
      let n2 = 0, r3 = 0;
      function o3(A4, o4) {
        const s2 = Number(e3.slice(A4, o4));
        r3 *= t2, n2 = n2 * t2 + s2, n2 >= KA && (r3 += n2 / KA | 0, n2 %= KA);
      }
      return o3(-24, -18), o3(-18, -12), o3(-12, -6), o3(-6), A3 ? et(n2, r3) : $A(n2, r3);
    }
    function zA(e3, A3) {
      if ({ lo: e3, hi: A3 } = (function(e4, A4) {
        return { lo: e4 >>> 0, hi: A4 >>> 0 };
      })(e3, A3), A3 <= 2097151) return String(KA * A3 + e3);
      const t2 = 16777215 & (e3 >>> 24 | A3 << 8), n2 = A3 >> 16 & 65535;
      let r3 = (16777215 & e3) + 6777216 * t2 + 6710656 * n2, o3 = t2 + 8147497 * n2, s2 = 2 * n2;
      const a2 = 1e7;
      return r3 >= a2 && (o3 += Math.floor(r3 / a2), r3 %= a2), o3 >= a2 && (s2 += Math.floor(o3 / a2), o3 %= a2), s2.toString() + At(o3) + At(r3);
    }
    function $A(e3, A3) {
      return { lo: 0 | e3, hi: 0 | A3 };
    }
    function et(e3, A3) {
      return A3 = ~A3, e3 ? e3 = 1 + ~e3 : A3 += 1, $A(e3, A3);
    }
    const At = (e3) => {
      const A3 = String(e3);
      return "0000000".slice(A3.length) + A3;
    };
    function tt(e3, A3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) A3.push(127 & e3 | 128), e3 >>>= 7;
        A3.push(e3);
      } else {
        for (let t2 = 0; t2 < 9; t2++) A3.push(127 & e3 | 128), e3 >>= 7;
        A3.push(1);
      }
    }
    function nt() {
      let e3 = this.buf[this.pos++], A3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), A3;
      if (e3 = this.buf[this.pos++], A3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), A3;
      e3 = this.buf[this.pos++], A3 |= (15 & e3) << 28;
      for (let A4 = 5; 128 & e3 && A4 < 10; A4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), A3 >>> 0;
    }
    const rt = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const A4 = BigInt("-9223372036854775808"), t3 = BigInt("9223372036854775807"), n2 = BigInt("0"), r3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const n3 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n3 > t3 || n3 < A4) throw new Error(`int64 invalid: ${e4}`);
          return n3;
        }, uParse(e4) {
          const A5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (A5 > r3 || A5 < n2) throw new Error(`uint64 invalid: ${e4}`);
          return A5;
        }, enc(A5) {
          return e3.setBigInt64(0, this.parse(A5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(A5) {
          return e3.setBigInt64(0, this.uParse(A5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (A5, t4) => (e3.setInt32(0, A5, true), e3.setInt32(4, t4, true), e3.getBigInt64(0, true)), uDec: (A5, t4) => (e3.setInt32(0, A5, true), e3.setInt32(4, t4, true), e3.getBigUint64(0, true)) };
      }
      const A3 = (e4) => MA(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), t2 = (e4) => MA(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t2(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), ZA(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t2(e4), ZA(e4)), dec: (e4, A4) => (function(e5, A5) {
        let t3 = $A(e5, A5);
        const n2 = 2147483648 & t3.hi;
        n2 && (t3 = et(t3.lo, t3.hi));
        const r3 = zA(t3.lo, t3.hi);
        return n2 ? "-" + r3 : r3;
      })(e4, A4), uDec: (e4, A4) => zA(e4, A4) };
    })();
    var ot = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(ot || {}), st = ((e3) => (e3[e3.BIGINT = 0] = "BIGINT", e3[e3.STRING = 1] = "STRING", e3))(st || {});
    function at(e3, A3, t2) {
      if (A3 === t2) return true;
      if (e3 == ot.BYTES) {
        if (!(A3 instanceof Uint8Array && t2 instanceof Uint8Array)) return false;
        if (A3.length !== t2.length) return false;
        for (let e4 = 0; e4 < A3.length; e4++) if (A3[e4] !== t2[e4]) return false;
        return true;
      }
      switch (e3) {
        case ot.UINT64:
        case ot.FIXED64:
        case ot.INT64:
        case ot.SFIXED64:
        case ot.SINT64:
          return A3 == t2;
      }
      return false;
    }
    function it(e3, A3) {
      switch (e3) {
        case ot.BOOL:
          return false;
        case ot.UINT64:
        case ot.FIXED64:
        case ot.INT64:
        case ot.SFIXED64:
        case ot.SINT64:
          return 0 == A3 ? rt.zero : "0";
        case ot.DOUBLE:
        case ot.FLOAT:
          return 0;
        case ot.BYTES:
          return new Uint8Array(0);
        case ot.STRING:
          return "";
        default:
          return 0;
      }
    }
    function ct(e3, A3) {
      switch (e3) {
        case ot.BOOL:
          return false === A3;
        case ot.STRING:
          return "" === A3;
        case ot.BYTES:
          return A3 instanceof Uint8Array && !A3.byteLength;
        default:
          return 0 == A3;
      }
    }
    function lt(e3) {
      const A3 = e3.field.localName, t2 = /* @__PURE__ */ Object.create(null);
      return t2[A3] = (function(e4) {
        const A4 = e4.field;
        if (A4.repeated) return [];
        if (void 0 !== A4.default) return A4.default;
        switch (A4.kind) {
          case "enum":
            return A4.T.values[0].no;
          case "scalar":
            return it(A4.T, A4.L);
          case "message":
            const e5 = A4.T, t3 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(t3) : t3;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [t2, () => t2[A3]];
    }
    let gt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Et = [];
    for (let e3 = 0; e3 < gt.length; e3++) Et[gt[e3].charCodeAt(0)] = e3;
    Et["-".charCodeAt(0)] = gt.indexOf("+"), Et["_".charCodeAt(0)] = gt.indexOf("/");
    const ut = { dec(e3) {
      let A3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? A3 -= 2 : "=" == e3[e3.length - 1] && (A3 -= 1);
      let t2, n2 = new Uint8Array(A3), r3 = 0, o3 = 0, s2 = 0;
      for (let A4 = 0; A4 < e3.length; A4++) {
        if (t2 = Et[e3.charCodeAt(A4)], void 0 === t2) switch (e3[A4]) {
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
            s2 = t2, o3 = 1;
            break;
          case 1:
            n2[r3++] = s2 << 2 | (48 & t2) >> 4, s2 = t2, o3 = 2;
            break;
          case 2:
            n2[r3++] = (15 & s2) << 4 | (60 & t2) >> 2, s2 = t2, o3 = 3;
            break;
          case 3:
            n2[r3++] = (3 & s2) << 6 | t2, o3 = 0;
        }
      }
      if (1 == o3) throw Error("invalid base64 string.");
      return n2.subarray(0, r3);
    }, enc(e3) {
      let A3, t2 = "", n2 = 0, r3 = 0;
      for (let o3 = 0; o3 < e3.length; o3++) switch (A3 = e3[o3], n2) {
        case 0:
          t2 += gt[A3 >> 2], r3 = (3 & A3) << 4, n2 = 1;
          break;
        case 1:
          t2 += gt[r3 | A3 >> 4], r3 = (15 & A3) << 2, n2 = 2;
          break;
        case 2:
          t2 += gt[r3 | A3 >> 6], t2 += gt[63 & A3], n2 = 0;
      }
      return n2 && (t2 += gt[r3], t2 += "=", 1 == n2 && (t2 += "=")), t2;
    } };
    function dt(e3, A3, t2) {
      Qt(A3, e3);
      const n2 = A3.runtime.bin.makeReadOptions(t2), r3 = (function(e4, A4) {
        if (!A4.repeated && ("enum" == A4.kind || "scalar" == A4.kind)) {
          for (let t3 = e4.length - 1; t3 >= 0; --t3) if (e4[t3].no == A4.no) return [e4[t3]];
          return [];
        }
        return e4.filter((e5) => e5.no === A4.no);
      })(e3.getType().runtime.bin.listUnknownFields(e3), A3.field), [o3, s2] = lt(A3);
      for (const e4 of r3) A3.runtime.bin.readField(o3, n2.readerFactory(e4.data), A3.field, e4.wireType, n2);
      return s2();
    }
    function It(e3, A3, t2, n2) {
      Qt(A3, e3);
      const r3 = A3.runtime.bin.makeReadOptions(n2), o3 = A3.runtime.bin.makeWriteOptions(n2);
      if (ht(e3, A3)) {
        const t3 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != A3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const A4 of t3) e3.getType().runtime.bin.onUnknownField(e3, A4.no, A4.wireType, A4.data);
      }
      const s2 = o3.writerFactory();
      let a2 = A3.field;
      a2.opt || a2.repeated || "enum" != a2.kind && "scalar" != a2.kind || (a2 = { ...A3.field, opt: true }), A3.runtime.bin.writeField(a2, t2, s2, o3);
      const i2 = r3.readerFactory(s2.finish());
      for (; i2.pos < i2.len; ) {
        const [A4, t3] = i2.tag(), n3 = i2.skip(t3, A4);
        e3.getType().runtime.bin.onUnknownField(e3, A4, t3, n3);
      }
    }
    function ht(e3, A3) {
      const t2 = e3.getType();
      return A3.extendee.typeName === t2.typeName && !!t2.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == A3.field.no);
    }
    function Qt(e3, A3) {
      MA(e3.extendee.typeName == A3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    function mt(e3, A3) {
      const t2 = e3.localName;
      if (e3.repeated) return A3[t2].length > 0;
      if (e3.oneof) return A3[e3.oneof.localName].case === t2;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== A3[t2] : "enum" == e3.kind ? A3[t2] !== e3.T.values[0].no : !ct(e3.T, A3[t2]);
        case "message":
          return void 0 !== A3[t2];
        case "map":
          return Object.keys(A3[t2]).length > 0;
      }
    }
    function Ct(e3, A3) {
      const t2 = e3.localName, n2 = !e3.opt && !e3.req;
      if (e3.repeated) A3[t2] = [];
      else if (e3.oneof) A3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          A3[t2] = {};
          break;
        case "enum":
          A3[t2] = n2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          A3[t2] = n2 ? it(e3.T, e3.L) : void 0;
          break;
        case "message":
          A3[t2] = void 0;
      }
    }
    function Bt(e3, A3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(WA.prototype).every((A4) => A4 in e3 && "function" == typeof e3[A4])) return false;
      const t2 = e3.getType();
      return null !== t2 && "function" == typeof t2 && "typeName" in t2 && "string" == typeof t2.typeName && (void 0 === A3 || t2.typeName == A3.typeName);
    }
    function pt(e3, A3) {
      const t2 = Bt(A3);
      return t2 || e3.fieldWrapper ? t2 || !e3.fieldWrapper ? A3 : e3.fieldWrapper.wrapField(A3) : new e3(A3);
    }
    ot.DOUBLE, ot.FLOAT, ot.INT64, ot.UINT64, ot.INT32, ot.UINT32, ot.BOOL, ot.STRING, ot.BYTES;
    const ft = { ignoreUnknownFields: false }, yt = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function Tt(e3) {
      return e3 ? { ...ft, ...e3 } : ft;
    }
    function kt(e3) {
      return e3 ? { ...yt, ...e3 } : yt;
    }
    const wt = /* @__PURE__ */ Symbol(), Nt = /* @__PURE__ */ Symbol();
    function Dt(e3) {
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
    function Rt(e3, A3, t2, n2, r3) {
      let o3 = t2.localName;
      if (t2.repeated) {
        if (MA("map" != t2.kind), null === A3) return;
        if (!Array.isArray(A3)) throw new Error(`cannot decode field ${r3.typeName}.${t2.name} from JSON: ${Dt(A3)}`);
        const s2 = e3[o3];
        for (const e4 of A3) {
          if (null === e4) throw new Error(`cannot decode field ${r3.typeName}.${t2.name} from JSON: ${Dt(e4)}`);
          switch (t2.kind) {
            case "message":
              s2.push(t2.T.fromJson(e4, n2));
              break;
            case "enum":
              const A4 = Ft(t2.T, e4, n2.ignoreUnknownFields, true);
              A4 !== Nt && s2.push(A4);
              break;
            case "scalar":
              try {
                s2.push(bt(t2.T, e4, t2.L, true));
              } catch (A5) {
                let n3 = `cannot decode field ${r3.typeName}.${t2.name} from JSON: ${Dt(e4)}`;
                throw A5 instanceof Error && A5.message.length > 0 && (n3 += `: ${A5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == t2.kind) {
        if (null === A3) return;
        if ("object" != typeof A3 || Array.isArray(A3)) throw new Error(`cannot decode field ${r3.typeName}.${t2.name} from JSON: ${Dt(A3)}`);
        const s2 = e3[o3];
        for (const [e4, o4] of Object.entries(A3)) {
          if (null === o4) throw new Error(`cannot decode field ${r3.typeName}.${t2.name} from JSON: map value null`);
          let a2;
          try {
            a2 = St(t2.K, e4);
          } catch (e5) {
            let n3 = `cannot decode map key for field ${r3.typeName}.${t2.name} from JSON: ${Dt(A3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (n3 += `: ${e5.message}`), new Error(n3);
          }
          switch (t2.V.kind) {
            case "message":
              s2[a2] = t2.V.T.fromJson(o4, n2);
              break;
            case "enum":
              const e5 = Ft(t2.V.T, o4, n2.ignoreUnknownFields, true);
              e5 !== Nt && (s2[a2] = e5);
              break;
            case "scalar":
              try {
                s2[a2] = bt(t2.V.T, o4, st.BIGINT, true);
              } catch (e6) {
                let n3 = `cannot decode map value for field ${r3.typeName}.${t2.name} from JSON: ${Dt(A3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (n3 += `: ${e6.message}`), new Error(n3);
              }
          }
        }
      } else switch (t2.oneof && (e3 = e3[t2.oneof.localName] = { case: o3 }, o3 = "value"), t2.kind) {
        case "message":
          const s2 = t2.T;
          if (null === A3 && "google.protobuf.Value" != s2.typeName) return;
          let a2 = e3[o3];
          Bt(a2) ? a2.fromJson(A3, n2) : (e3[o3] = a2 = s2.fromJson(A3, n2), s2.fieldWrapper && !t2.oneof && (e3[o3] = s2.fieldWrapper.unwrapField(a2)));
          break;
        case "enum":
          const i2 = Ft(t2.T, A3, n2.ignoreUnknownFields, false);
          switch (i2) {
            case wt:
              Ct(t2, e3);
              break;
            case Nt:
              break;
            default:
              e3[o3] = i2;
          }
          break;
        case "scalar":
          try {
            const n3 = bt(t2.T, A3, t2.L, false);
            if (n3 === wt) Ct(t2, e3);
            else e3[o3] = n3;
          } catch (e4) {
            let n3 = `cannot decode field ${r3.typeName}.${t2.name} from JSON: ${Dt(A3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (n3 += `: ${e4.message}`), new Error(n3);
          }
      }
    }
    function St(e3, A3) {
      if (e3 === ot.BOOL) switch (A3) {
        case "true":
          A3 = true;
          break;
        case "false":
          A3 = false;
      }
      return bt(e3, A3, st.BIGINT, true).toString();
    }
    function bt(e3, A3, t2, n2) {
      if (null === A3) return n2 ? it(e3, t2) : wt;
      switch (e3) {
        case ot.DOUBLE:
        case ot.FLOAT:
          if ("NaN" === A3) return Number.NaN;
          if ("Infinity" === A3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === A3) return Number.NEGATIVE_INFINITY;
          if ("" === A3) break;
          if ("string" == typeof A3 && A3.trim().length !== A3.length) break;
          if ("string" != typeof A3 && "number" != typeof A3) break;
          const n3 = Number(A3);
          if (Number.isNaN(n3)) break;
          if (!Number.isFinite(n3)) break;
          return e3 == ot.FLOAT && YA(n3), n3;
        case ot.INT32:
        case ot.FIXED32:
        case ot.SFIXED32:
        case ot.SINT32:
        case ot.UINT32:
          let r3;
          if ("number" == typeof A3 ? r3 = A3 : "string" == typeof A3 && A3.length > 0 && A3.trim().length === A3.length && (r3 = Number(A3)), void 0 === r3) break;
          return e3 == ot.UINT32 || e3 == ot.FIXED32 ? JA(r3) : OA(r3), r3;
        case ot.INT64:
        case ot.SFIXED64:
        case ot.SINT64:
          if ("number" != typeof A3 && "string" != typeof A3) break;
          const o3 = rt.parse(A3);
          return t2 ? o3.toString() : o3;
        case ot.FIXED64:
        case ot.UINT64:
          if ("number" != typeof A3 && "string" != typeof A3) break;
          const s2 = rt.uParse(A3);
          return t2 ? s2.toString() : s2;
        case ot.BOOL:
          if ("boolean" != typeof A3) break;
          return A3;
        case ot.STRING:
          if ("string" != typeof A3) break;
          try {
            encodeURIComponent(A3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return A3;
        case ot.BYTES:
          if ("" === A3) return new Uint8Array(0);
          if ("string" != typeof A3) break;
          return ut.dec(A3);
      }
      throw new Error();
    }
    function Ft(e3, A3, t2, n2) {
      if (null === A3) return "google.protobuf.NullValue" == e3.typeName ? 0 : n2 ? e3.values[0].no : wt;
      switch (typeof A3) {
        case "number":
          if (Number.isInteger(A3)) return A3;
          break;
        case "string":
          const n3 = e3.findName(A3);
          if (void 0 !== n3) return n3.no;
          if (t2) return Nt;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${Dt(A3)}`);
    }
    function _t(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function vt(e3, A3, t2) {
      if ("map" == e3.kind) {
        MA("object" == typeof A3 && null != A3);
        const n2 = {}, r3 = Object.entries(A3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [A5, t3] of r3) n2[A5.toString()] = Ut(e3.V.T, t3);
            break;
          case "message":
            for (const [e4, A5] of r3) n2[e4.toString()] = A5.toJson(t2);
            break;
          case "enum":
            const A4 = e3.V.T;
            for (const [e4, o3] of r3) n2[e4.toString()] = Lt(A4, o3, t2.enumAsInteger);
        }
        return t2.emitDefaultValues || r3.length > 0 ? n2 : void 0;
      }
      if (e3.repeated) {
        MA(Array.isArray(A3));
        const n2 = [];
        switch (e3.kind) {
          case "scalar":
            for (let t3 = 0; t3 < A3.length; t3++) n2.push(Ut(e3.T, A3[t3]));
            break;
          case "enum":
            for (let r3 = 0; r3 < A3.length; r3++) n2.push(Lt(e3.T, A3[r3], t2.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < A3.length; e4++) n2.push(A3[e4].toJson(t2));
        }
        return t2.emitDefaultValues || n2.length > 0 ? n2 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return Ut(e3.T, A3);
        case "enum":
          return Lt(e3.T, A3, t2.enumAsInteger);
        case "message":
          return pt(e3.T, A3).toJson(t2);
      }
    }
    function Lt(e3, A3, t2) {
      if (MA("number" == typeof A3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (t2) return A3;
      const n2 = e3.findNumber(A3);
      return n2?.name ?? A3;
    }
    function Ut(e3, A3) {
      switch (e3) {
        case ot.INT32:
        case ot.SFIXED32:
        case ot.SINT32:
        case ot.FIXED32:
        case ot.UINT32:
          return MA("number" == typeof A3), A3;
        case ot.FLOAT:
        case ot.DOUBLE:
          return MA("number" == typeof A3), Number.isNaN(A3) ? "NaN" : A3 === Number.POSITIVE_INFINITY ? "Infinity" : A3 === Number.NEGATIVE_INFINITY ? "-Infinity" : A3;
        case ot.STRING:
          return MA("string" == typeof A3), A3;
        case ot.BOOL:
          return MA("boolean" == typeof A3), A3;
        case ot.UINT64:
        case ot.FIXED64:
        case ot.INT64:
        case ot.SFIXED64:
        case ot.SINT64:
          return MA("bigint" == typeof A3 || "string" == typeof A3 || "number" == typeof A3), A3.toString();
        case ot.BYTES:
          return MA(A3 instanceof Uint8Array), ut.enc(A3);
      }
    }
    var Mt = ((e3) => (e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32", e3))(Mt || {});
    class Ot {
      constructor(e3) {
        this.stack = [], this.textEncoder = e3 ?? new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let e3 = 0;
        for (let A4 = 0; A4 < this.chunks.length; A4++) e3 += this.chunks[A4].length;
        let A3 = new Uint8Array(e3), t2 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) A3.set(this.chunks[e4], t2), t2 += this.chunks[e4].length;
        return this.chunks = [], A3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), A3 = this.stack.pop();
        if (!A3) throw new Error("invalid state, fork stack empty");
        return this.chunks = A3.chunks, this.buf = A3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, A3) {
        return this.uint32((e3 << 3 | A3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for (JA(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return OA(e3), tt(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let A3 = this.textEncoder.encode(e3);
        return this.uint32(A3.byteLength), this.raw(A3);
      }
      float(e3) {
        YA(e3);
        let A3 = new Uint8Array(4);
        return new DataView(A3.buffer).setFloat32(0, e3, true), this.raw(A3);
      }
      double(e3) {
        let A3 = new Uint8Array(8);
        return new DataView(A3.buffer).setFloat64(0, e3, true), this.raw(A3);
      }
      fixed32(e3) {
        JA(e3);
        let A3 = new Uint8Array(4);
        return new DataView(A3.buffer).setUint32(0, e3, true), this.raw(A3);
      }
      sfixed32(e3) {
        OA(e3);
        let A3 = new Uint8Array(4);
        return new DataView(A3.buffer).setInt32(0, e3, true), this.raw(A3);
      }
      sint32(e3) {
        return OA(e3), tt(e3 = (e3 << 1 ^ e3 >> 31) >>> 0, this.buf), this;
      }
      sfixed64(e3) {
        let A3 = new Uint8Array(8), t2 = new DataView(A3.buffer), n2 = rt.enc(e3);
        return t2.setInt32(0, n2.lo, true), t2.setInt32(4, n2.hi, true), this.raw(A3);
      }
      fixed64(e3) {
        let A3 = new Uint8Array(8), t2 = new DataView(A3.buffer), n2 = rt.uEnc(e3);
        return t2.setInt32(0, n2.lo, true), t2.setInt32(4, n2.hi, true), this.raw(A3);
      }
      int64(e3) {
        let A3 = rt.enc(e3);
        return XA(A3.lo, A3.hi, this.buf), this;
      }
      sint64(e3) {
        let A3 = rt.enc(e3), t2 = A3.hi >> 31;
        return XA(A3.lo << 1 ^ t2, (A3.hi << 1 | A3.lo >>> 31) ^ t2, this.buf), this;
      }
      uint64(e3) {
        let A3 = rt.uEnc(e3);
        return XA(A3.lo, A3.hi, this.buf), this;
      }
    }
    class Jt {
      constructor(e3, A3) {
        this.varint64 = jA, this.uint32 = nt, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = A3 ?? new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), A3 = e3 >>> 3, t2 = 7 & e3;
        if (A3 <= 0 || t2 < 0 || t2 > 5) throw new Error("illegal tag: field no " + A3 + " wire type " + t2);
        return [A3, t2];
      }
      skip(e3, A3) {
        let t2 = this.pos;
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
            let t3 = this.uint32();
            this.pos += t3;
            break;
          case 3:
            for (; ; ) {
              const [e4, t4] = this.tag();
              if (4 === t4) {
                if (void 0 !== A3 && e4 !== A3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(t4, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(t2, this.pos);
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
        return rt.dec(...this.varint64());
      }
      uint64() {
        return rt.uDec(...this.varint64());
      }
      sint64() {
        let [e3, A3] = this.varint64(), t2 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & A3) << 31) ^ t2, A3 = A3 >>> 1 ^ t2, rt.dec(e3, A3);
      }
      bool() {
        let [e3, A3] = this.varint64();
        return 0 !== e3 || 0 !== A3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return rt.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return rt.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e3 = this.uint32(), A3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(A3, A3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    }
    const Yt = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), Pt = { readUnknownFields: true, readerFactory: (e3) => new Jt(e3) }, Gt = { writeUnknownFields: true, writerFactory: () => new Ot() };
    function Vt(e3) {
      return e3 ? { ...Pt, ...e3 } : Pt;
    }
    function xt(e3) {
      return e3 ? { ...Gt, ...e3 } : Gt;
    }
    function Ht(e3, A3, t2, n2, r3) {
      let { repeated: o3, localName: s2 } = t2;
      switch (t2.oneof && ((e3 = e3[t2.oneof.localName]).case != s2 && delete e3.value, e3.case = s2, s2 = "value"), t2.kind) {
        case "scalar":
        case "enum":
          const a2 = "enum" == t2.kind ? ot.INT32 : t2.T;
          let i2 = jt;
          if ("scalar" == t2.kind && t2.L > 0 && (i2 = Wt), o3) {
            let t3 = e3[s2];
            if (n2 == Mt.LengthDelimited && a2 != ot.STRING && a2 != ot.BYTES) {
              let e4 = A3.uint32() + A3.pos;
              for (; A3.pos < e4; ) t3.push(i2(A3, a2));
            } else t3.push(i2(A3, a2));
          } else e3[s2] = i2(A3, a2);
          break;
        case "message":
          const c2 = t2.T;
          o3 ? e3[s2].push(qt(A3, new c2(), r3, t2)) : Bt(e3[s2]) ? qt(A3, e3[s2], r3, t2) : (e3[s2] = qt(A3, new c2(), r3, t2), !c2.fieldWrapper || t2.oneof || t2.repeated || (e3[s2] = c2.fieldWrapper.unwrapField(e3[s2])));
          break;
        case "map":
          let [l2, g2] = (function(e4, A4, t3) {
            const n3 = A4.uint32(), r4 = A4.pos + n3;
            let o4, s3;
            for (; A4.pos < r4; ) {
              const [n4] = A4.tag();
              switch (n4) {
                case 1:
                  o4 = jt(A4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      s3 = jt(A4, e4.V.T);
                      break;
                    case "enum":
                      s3 = A4.int32();
                      break;
                    case "message":
                      s3 = qt(A4, new e4.V.T(), t3, void 0);
                  }
              }
            }
            void 0 === o4 && (o4 = it(e4.K, st.BIGINT));
            "string" != typeof o4 && "number" != typeof o4 && (o4 = o4.toString());
            if (void 0 === s3) switch (e4.V.kind) {
              case "scalar":
                s3 = it(e4.V.T, st.BIGINT);
                break;
              case "enum":
                s3 = e4.V.T.values[0].no;
                break;
              case "message":
                s3 = new e4.V.T();
            }
            return [o4, s3];
          })(t2, A3, r3);
          e3[s2][l2] = g2;
      }
    }
    function qt(e3, A3, t2, n2) {
      const r3 = A3.getType().runtime.bin, o3 = n2?.delimited;
      return r3.readMessage(A3, e3, o3 ? n2.no : e3.uint32(), t2, o3), A3;
    }
    function Wt(e3, A3) {
      const t2 = jt(e3, A3);
      return "bigint" == typeof t2 ? t2.toString() : t2;
    }
    function jt(e3, A3) {
      switch (A3) {
        case ot.STRING:
          return e3.string();
        case ot.BOOL:
          return e3.bool();
        case ot.DOUBLE:
          return e3.double();
        case ot.FLOAT:
          return e3.float();
        case ot.INT32:
          return e3.int32();
        case ot.INT64:
          return e3.int64();
        case ot.UINT64:
          return e3.uint64();
        case ot.FIXED64:
          return e3.fixed64();
        case ot.BYTES:
          return e3.bytes();
        case ot.FIXED32:
          return e3.fixed32();
        case ot.SFIXED32:
          return e3.sfixed32();
        case ot.SFIXED64:
          return e3.sfixed64();
        case ot.SINT64:
          return e3.sint64();
        case ot.UINT32:
          return e3.uint32();
        case ot.SINT32:
          return e3.sint32();
      }
    }
    function Xt(e3, A3, t2, n2) {
      MA(void 0 !== A3);
      const r3 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let o3 = "enum" == e3.kind ? ot.INT32 : e3.T;
          if (r3) if (MA(Array.isArray(A3)), e3.packed) !(function(e4, A4, t3, n3) {
            if (!n3.length) return;
            e4.tag(t3, Mt.LengthDelimited).fork();
            let [, r4] = $t(A4);
            for (let A5 = 0; A5 < n3.length; A5++) e4[r4](n3[A5]);
            e4.join();
          })(t2, o3, e3.no, A3);
          else for (const n3 of A3) zt(t2, o3, e3.no, n3);
          else zt(t2, o3, e3.no, A3);
          break;
        case "message":
          if (r3) {
            MA(Array.isArray(A3));
            for (const r4 of A3) Zt(t2, n2, e3, r4);
          } else Zt(t2, n2, e3, A3);
          break;
        case "map":
          MA("object" == typeof A3 && null != A3);
          for (const [r4, o4] of Object.entries(A3)) Kt(t2, n2, e3, r4, o4);
      }
    }
    function Kt(e3, A3, t2, n2, r3) {
      e3.tag(t2.no, Mt.LengthDelimited), e3.fork();
      let o3 = n2;
      switch (t2.K) {
        case ot.INT32:
        case ot.FIXED32:
        case ot.UINT32:
        case ot.SFIXED32:
        case ot.SINT32:
          o3 = Number.parseInt(n2);
          break;
        case ot.BOOL:
          MA("true" == n2 || "false" == n2), o3 = "true" == n2;
      }
      switch (zt(e3, t2.K, 1, o3), t2.V.kind) {
        case "scalar":
          zt(e3, t2.V.T, 2, r3);
          break;
        case "enum":
          zt(e3, ot.INT32, 2, r3);
          break;
        case "message":
          MA(void 0 !== r3), e3.tag(2, Mt.LengthDelimited).bytes(r3.toBinary(A3));
      }
      e3.join();
    }
    function Zt(e3, A3, t2, n2) {
      const r3 = pt(t2.T, n2);
      t2.delimited ? e3.tag(t2.no, Mt.StartGroup).raw(r3.toBinary(A3)).tag(t2.no, Mt.EndGroup) : e3.tag(t2.no, Mt.LengthDelimited).bytes(r3.toBinary(A3));
    }
    function zt(e3, A3, t2, n2) {
      MA(void 0 !== n2);
      let [r3, o3] = $t(A3);
      e3.tag(t2, r3)[o3](n2);
    }
    function $t(e3) {
      let A3 = Mt.Varint;
      switch (e3) {
        case ot.BYTES:
        case ot.STRING:
          A3 = Mt.LengthDelimited;
          break;
        case ot.DOUBLE:
        case ot.FIXED64:
        case ot.SFIXED64:
          A3 = Mt.Bit64;
          break;
        case ot.FIXED32:
        case ot.SFIXED32:
        case ot.FLOAT:
          A3 = Mt.Bit32;
      }
      return [A3, ot[e3].toLowerCase()];
    }
    function en(e3) {
      if (void 0 === e3) return e3;
      if (Bt(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const A3 = new Uint8Array(e3.byteLength);
        return A3.set(e3), A3;
      }
      return e3;
    }
    function An(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    function tn(e3, A3, t2) {
      return { syntax: e3, json: { makeReadOptions: Tt, makeWriteOptions: kt, readMessage(e4, A4, t3, n2) {
        if (null == A4 || Array.isArray(A4) || "object" != typeof A4) throw new Error(`cannot decode message ${e4.typeName} from JSON: ${Dt(A4)}`);
        n2 = n2 ?? new e4();
        const r3 = /* @__PURE__ */ new Map(), o3 = t3.typeRegistry;
        for (const [s2, a2] of Object.entries(A4)) {
          const A5 = e4.fields.findJsonName(s2);
          if (A5) {
            if (A5.oneof) {
              if (null === a2 && "scalar" == A5.kind) continue;
              const t4 = r3.get(A5.oneof);
              if (void 0 !== t4) throw new Error(`cannot decode message ${e4.typeName} from JSON: multiple keys for oneof "${A5.oneof.name}" present: "${t4}", "${s2}"`);
              r3.set(A5.oneof, s2);
            }
            Rt(n2, a2, A5, t3, e4);
          } else {
            let A6 = false;
            if (o3?.findExtension && s2.startsWith("[") && s2.endsWith("]")) {
              const r4 = o3.findExtension(s2.substring(1, s2.length - 1));
              if (r4 && r4.extendee.typeName == e4.typeName) {
                A6 = true;
                const [e5, o4] = lt(r4);
                Rt(e5, a2, r4.field, t3, r4), It(n2, r4, o4(), t3);
              }
            }
            if (!A6 && !t3.ignoreUnknownFields) throw new Error(`cannot decode message ${e4.typeName} from JSON: key "${s2}" is unknown`);
          }
        }
        return n2;
      }, writeMessage(e4, A4) {
        const t3 = e4.getType(), n2 = {};
        let r3;
        try {
          for (r3 of t3.fields.byNumber()) {
            if (!mt(r3, e4)) {
              if (r3.req) throw "required field not set";
              if (!A4.emitDefaultValues) continue;
              if (!_t(r3)) continue;
            }
            const t4 = vt(r3, r3.oneof ? e4[r3.oneof.localName].value : e4[r3.localName], A4);
            void 0 !== t4 && (n2[A4.useProtoFieldName ? r3.name : r3.jsonName] = t4);
          }
          const o3 = A4.typeRegistry;
          if (o3?.findExtensionFor) for (const r4 of t3.runtime.bin.listUnknownFields(e4)) {
            const s2 = o3.findExtensionFor(t3.typeName, r4.no);
            if (s2 && ht(e4, s2)) {
              const t4 = dt(e4, s2, A4), r5 = vt(s2.field, t4, A4);
              void 0 !== r5 && (n2[s2.field.jsonName] = r5);
            }
          }
        } catch (e5) {
          const A5 = r3 ? `cannot encode field ${t3.typeName}.${r3.name} to JSON` : `cannot encode message ${t3.typeName} to JSON`, n3 = e5 instanceof Error ? e5.message : String(e5);
          throw new Error(A5 + (n3.length > 0 ? `: ${n3}` : ""));
        }
        return n2;
      }, readScalar: (e4, A4, t3) => bt(e4, A4, t3 ?? st.BIGINT, true), writeScalar(e4, A4, t3) {
        if (void 0 !== A4) return t3 || ct(e4, A4) ? Ut(e4, A4) : void 0;
      }, debug: Dt }, bin: { makeReadOptions: Vt, makeWriteOptions: xt, listUnknownFields: (e4) => e4[Yt] ?? [], discardUnknownFields(e4) {
        delete e4[Yt];
      }, writeUnknownFields(e4, A4) {
        const t3 = e4[Yt];
        if (t3) for (const e5 of t3) A4.tag(e5.no, e5.wireType).raw(e5.data);
      }, onUnknownField(e4, A4, t3, n2) {
        const r3 = e4;
        Array.isArray(r3[Yt]) || (r3[Yt] = []), r3[Yt].push({ no: A4, wireType: t3, data: new Uint8Array(n2) });
      }, readMessage(e4, A4, t3, n2, r3) {
        const o3 = e4.getType(), s2 = r3 ? A4.len : A4.pos + t3;
        let a2, i2;
        for (; A4.pos < s2 && ([a2, i2] = A4.tag(), true !== r3 || i2 != Mt.EndGroup); ) {
          const t4 = o3.fields.find(a2);
          if (!t4) {
            const t5 = A4.skip(i2, a2);
            n2.readUnknownFields && this.onUnknownField(e4, a2, i2, t5);
            continue;
          }
          Ht(e4, A4, t4, i2, n2);
        }
        if (r3 && (i2 != Mt.EndGroup || a2 !== t3)) throw new Error("invalid end group tag");
      }, readField: Ht, writeMessage(e4, A4, t3) {
        const n2 = e4.getType();
        for (const r3 of n2.fields.byNumber()) if (mt(r3, e4)) Xt(r3, r3.oneof ? e4[r3.oneof.localName].value : e4[r3.localName], A4, t3);
        else if (r3.req) throw new Error(`cannot encode field ${n2.typeName}.${r3.name} to binary: required field not set`);
        return t3.writeUnknownFields && this.writeUnknownFields(e4, A4), A4;
      }, writeField(e4, A4, t3, n2) {
        void 0 !== A4 && Xt(e4, A4, t3, n2);
      } }, util: { ...{ setEnumType: VA, initPartial(e4, A4) {
        if (void 0 === e4) return;
        const t3 = A4.getType();
        for (const n2 of t3.fields.byMember()) {
          const t4 = n2.localName, r3 = A4, o3 = e4;
          if (null != o3[t4]) switch (n2.kind) {
            case "oneof":
              const e5 = o3[t4].case;
              if (void 0 === e5) continue;
              const A5 = n2.findField(e5);
              let s2 = o3[t4].value;
              A5 && "message" == A5.kind && !Bt(s2, A5.T) ? s2 = new A5.T(s2) : A5 && "scalar" === A5.kind && A5.T === ot.BYTES && (s2 = An(s2)), r3[t4] = { case: e5, value: s2 };
              break;
            case "scalar":
            case "enum":
              let a2 = o3[t4];
              n2.T === ot.BYTES && (a2 = n2.repeated ? a2.map(An) : An(a2)), r3[t4] = a2;
              break;
            case "map":
              switch (n2.V.kind) {
                case "scalar":
                case "enum":
                  if (n2.V.T === ot.BYTES) for (const [e7, A6] of Object.entries(o3[t4])) r3[t4][e7] = An(A6);
                  else Object.assign(r3[t4], o3[t4]);
                  break;
                case "message":
                  const e6 = n2.V.T;
                  for (const A6 of Object.keys(o3[t4])) {
                    let n3 = o3[t4][A6];
                    e6.fieldWrapper || (n3 = new e6(n3)), r3[t4][A6] = n3;
                  }
              }
              break;
            case "message":
              const i2 = n2.T;
              if (n2.repeated) r3[t4] = o3[t4].map((e6) => Bt(e6, i2) ? e6 : new i2(e6));
              else {
                const e6 = o3[t4];
                i2.fieldWrapper ? "google.protobuf.BytesValue" === i2.typeName ? r3[t4] = An(e6) : r3[t4] = e6 : r3[t4] = Bt(e6, i2) ? e6 : new i2(e6);
              }
          }
        }
      }, equals: (e4, A4, t3) => A4 === t3 || !(!A4 || !t3) && e4.fields.byMember().every((e5) => {
        const n2 = A4[e5.localName], r3 = t3[e5.localName];
        if (e5.repeated) {
          if (n2.length !== r3.length) return false;
          switch (e5.kind) {
            case "message":
              return n2.every((A5, t4) => e5.T.equals(A5, r3[t4]));
            case "scalar":
              return n2.every((A5, t4) => at(e5.T, A5, r3[t4]));
            case "enum":
              return n2.every((e6, A5) => at(ot.INT32, e6, r3[A5]));
          }
          throw new Error(`repeated cannot contain ${e5.kind}`);
        }
        switch (e5.kind) {
          case "message":
            return e5.T.equals(n2, r3);
          case "enum":
            return at(ot.INT32, n2, r3);
          case "scalar":
            return at(e5.T, n2, r3);
          case "oneof":
            if (n2.case !== r3.case) return false;
            const A5 = e5.findField(n2.case);
            if (void 0 === A5) return true;
            switch (A5.kind) {
              case "message":
                return A5.T.equals(n2.value, r3.value);
              case "enum":
                return at(ot.INT32, n2.value, r3.value);
              case "scalar":
                return at(A5.T, n2.value, r3.value);
            }
            throw new Error(`oneof cannot contain ${A5.kind}`);
          case "map":
            const t4 = Object.keys(n2).concat(Object.keys(r3));
            switch (e5.V.kind) {
              case "message":
                const A6 = e5.V.T;
                return t4.every((e6) => A6.equals(n2[e6], r3[e6]));
              case "enum":
                return t4.every((e6) => at(ot.INT32, n2[e6], r3[e6]));
              case "scalar":
                const o3 = e5.V.T;
                return t4.every((e6) => at(o3, n2[e6], r3[e6]));
            }
        }
      }), clone(e4) {
        const A4 = e4.getType(), t3 = new A4(), n2 = t3;
        for (const t4 of A4.fields.byMember()) {
          const A5 = e4[t4.localName];
          let r3;
          if (t4.repeated) r3 = A5.map(en);
          else if ("map" == t4.kind) {
            r3 = n2[t4.localName];
            for (const [e5, t5] of Object.entries(A5)) r3[e5] = en(t5);
          } else r3 = "oneof" == t4.kind ? t4.findField(A5.case) ? { case: A5.case, value: en(A5.value) } : { case: void 0 } : en(A5);
          n2[t4.localName] = r3;
        }
        for (const t4 of A4.runtime.bin.listUnknownFields(e4)) A4.runtime.bin.onUnknownField(n2, t4.no, t4.wireType, t4.data);
        return t3;
      } }, newFieldList: A3, initFields: t2 }, makeMessageType(e4, A4, t3) {
        return (function(e5, A5, t4, n2) {
          const r3 = n2?.localName ?? A5.substring(A5.lastIndexOf(".") + 1), o3 = { [r3]: function(A6) {
            e5.util.initFields(this), e5.util.initPartial(A6, this);
          } }[r3];
          return Object.setPrototypeOf(o3.prototype, new WA()), Object.assign(o3, { runtime: e5, typeName: A5, fields: e5.util.newFieldList(t4), fromBinary: (e6, A6) => new o3().fromBinary(e6, A6), fromJson: (e6, A6) => new o3().fromJson(e6, A6), fromJsonString: (e6, A6) => new o3().fromJsonString(e6, A6), equals: (A6, t5) => e5.util.equals(o3, A6, t5) }), o3;
        })(this, e4, A4, t3);
      }, makeEnum: HA, makeEnumType: xA, getEnumType: GA, makeExtension(e4, A4, t3) {
        return /* @__PURE__ */ (function(e5, A5, t4, n2) {
          let r3;
          return { typeName: A5, extendee: t4, get field() {
            if (!r3) {
              const t5 = "function" == typeof n2 ? n2() : n2;
              t5.name = A5.split(".").pop(), t5.jsonName = `[${A5}]`, r3 = e5.util.newFieldList([t5]).list()[0];
            }
            return r3;
          }, runtime: e5 };
        })(this, e4, A4, t3);
      } };
    }
    class nn {
      constructor(e3, A3) {
        this._fields = e3, this._normalizer = A3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const A3 of this.list()) e4[A3.jsonName] = e4[A3.name] = A3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const A3 of this.list()) e4[A3.no] = A3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, A3) => e3.no - A3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let A3;
          for (const t2 of this.list()) t2.oneof ? t2.oneof !== A3 && (A3 = t2.oneof, e3.push(A3)) : e3.push(t2);
        }
        return this.members;
      }
    }
    function rn(e3, A3) {
      const t2 = an(e3);
      return A3 ? t2 : un(En(t2));
    }
    function on(e3) {
      return rn(e3, false);
    }
    const sn = an;
    function an(e3) {
      let A3 = false;
      const t2 = [];
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r3 = e3.charAt(n2);
        switch (r3) {
          case "_":
            A3 = true;
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
            t2.push(r3), A3 = false;
            break;
          default:
            A3 && (A3 = false, r3 = r3.toUpperCase()), t2.push(r3);
        }
      }
      return t2.join("");
    }
    const cn = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), ln = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), gn = (e3) => `${e3}$`, En = (e3) => ln.has(e3) ? gn(e3) : e3, un = (e3) => cn.has(e3) ? gn(e3) : e3;
    class dn {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = on(e3);
      }
      addField(e3) {
        MA(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
      }
      findField(e3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e4 = 0; e4 < this.fields.length; e4++) this._lookup[this.fields[e4].localName] = this.fields[e4];
        }
        return this._lookup[e3];
      }
    }
    function In(e3, A3) {
      const t2 = [];
      let n2;
      for (const r3 of "function" == typeof e3 ? e3() : e3) {
        const e4 = r3;
        if (e4.localName = rn(r3.name, void 0 !== r3.oneof), e4.jsonName = r3.jsonName ?? sn(r3.name), e4.repeated = r3.repeated ?? false, "scalar" == r3.kind && (e4.L = r3.L ?? st.BIGINT), e4.delimited = r3.delimited ?? false, e4.req = r3.req ?? false, e4.opt = r3.opt ?? false, void 0 === r3.packed && (e4.packed = !!A3 && ("enum" == r3.kind || "scalar" == r3.kind && r3.T != ot.BYTES && r3.T != ot.STRING)), void 0 !== r3.oneof) {
          const A4 = "string" == typeof r3.oneof ? r3.oneof : r3.oneof.name;
          n2 && n2.name == A4 || (n2 = new dn(A4)), e4.oneof = n2, n2.addField(e4);
        }
        t2.push(e4);
      }
      return t2;
    }
    const hn = tn("proto3", (e3) => new nn(e3, (e4) => In(e4, true)), (e3) => {
      for (const A3 of e3.getType().fields.byMember()) {
        if (A3.opt) continue;
        const t2 = A3.localName, n2 = e3;
        if (A3.repeated) n2[t2] = [];
        else switch (A3.kind) {
          case "oneof":
            n2[t2] = { case: void 0 };
            break;
          case "enum":
            n2[t2] = 0;
            break;
          case "map":
            n2[t2] = {};
            break;
          case "scalar":
            n2[t2] = it(A3.T, A3.L);
        }
      }
    }), Qn = tn("proto2", (e3) => new nn(e3, (e4) => In(e4, false)), (e3) => {
      for (const A3 of e3.getType().fields.byMember()) {
        const t2 = A3.localName, n2 = e3;
        if (A3.repeated) n2[t2] = [];
        else switch (A3.kind) {
          case "oneof":
            n2[t2] = { case: void 0 };
            break;
          case "map":
            n2[t2] = {};
        }
      }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var mn = ((e3) => (e3[e3.Unary = 0] = "Unary", e3[e3.ServerStreaming = 1] = "ServerStreaming", e3[e3.ClientStreaming = 2] = "ClientStreaming", e3[e3.BiDiStreaming = 3] = "BiDiStreaming", e3))(mn || {}), Cn = ((e3) => (e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX", e3))(Cn || {});
    Qn.util.setEnumType(Cn, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    const Bn = class e3 extends WA {
      constructor(e4) {
        super(), this.file = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Bn.runtime = Qn, Bn.typeName = "google.protobuf.FileDescriptorSet", Bn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: fn, repeated: true }]);
    const pn = class e3 extends WA {
      constructor(e4) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    pn.runtime = Qn, pn.typeName = "google.protobuf.FileDescriptorProto", pn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: Tn, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: Pn, repeated: true }, { no: 6, name: "service", kind: "message", T: Wn, repeated: true }, { no: 7, name: "extension", kind: "message", T: Ln, repeated: true }, { no: 8, name: "options", kind: "message", T: Zn, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: Or, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: Qn.getEnumType(Cn), opt: true }]);
    let fn = pn;
    const yn = class e3 extends WA {
      constructor(e4) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    yn.runtime = Qn, yn.typeName = "google.protobuf.DescriptorProto", yn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: Ln, repeated: true }, { no: 6, name: "extension", kind: "message", T: Ln, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: yn, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: Pn, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: wn, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: Jn, repeated: true }, { no: 7, name: "options", kind: "message", T: er, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: Dn, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let Tn = yn;
    const kn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    kn.runtime = Qn, kn.typeName = "google.protobuf.DescriptorProto.ExtensionRange", kn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Sn, opt: true }]);
    let wn = kn;
    const Nn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Nn.runtime = Qn, Nn.typeName = "google.protobuf.DescriptorProto.ReservedRange", Nn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let Dn = Nn;
    const Rn = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], this.declaration = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Rn.runtime = Qn, Rn.typeName = "google.protobuf.ExtensionRangeOptions", Rn.fields = Qn.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }, { no: 2, name: "declaration", kind: "message", T: _n, repeated: true }, { no: 50, name: "features", kind: "message", T: Nr, opt: true }, { no: 3, name: "verification", kind: "enum", T: Qn.getEnumType(bn), opt: true, default: 1 }]);
    let Sn = Rn;
    var bn = ((e3) => (e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED", e3))(bn || {});
    Qn.util.setEnumType(bn, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    const Fn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Fn.runtime = Qn, Fn.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Fn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    let _n = Fn;
    const vn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    vn.runtime = Qn, vn.typeName = "google.protobuf.FieldDescriptorProto", vn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: Qn.getEnumType(Mn), opt: true }, { no: 5, name: "type", kind: "enum", T: Qn.getEnumType(Un), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: tr, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
    let Ln = vn;
    var Un = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(Un || {});
    Qn.util.setEnumType(Un, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var Mn = ((e3) => (e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED", e3))(Mn || {});
    Qn.util.setEnumType(Mn, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    const On = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    On.runtime = Qn, On.typeName = "google.protobuf.OneofDescriptorProto", On.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Er, opt: true }]);
    let Jn = On;
    const Yn = class e3 extends WA {
      constructor(e4) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Yn.runtime = Qn, Yn.typeName = "google.protobuf.EnumDescriptorProto", Yn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: Hn, repeated: true }, { no: 3, name: "options", kind: "message", T: dr, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: Vn, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let Pn = Yn;
    const Gn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Gn.runtime = Qn, Gn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Gn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let Vn = Gn;
    const xn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    xn.runtime = Qn, xn.typeName = "google.protobuf.EnumValueDescriptorProto", xn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: hr, opt: true }]);
    let Hn = xn;
    const qn = class e3 extends WA {
      constructor(e4) {
        super(), this.method = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    qn.runtime = Qn, qn.typeName = "google.protobuf.ServiceDescriptorProto", qn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: Xn, repeated: true }, { no: 3, name: "options", kind: "message", T: mr, opt: true }]);
    let Wn = qn;
    const jn = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    jn.runtime = Qn, jn.typeName = "google.protobuf.MethodDescriptorProto", jn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: Br, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    let Xn = jn;
    const Kn = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Kn.runtime = Qn, Kn.typeName = "google.protobuf.FileOptions", Kn.fields = Qn.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: Qn.getEnumType(zn), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: Nr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let Zn = Kn;
    var zn = ((e3) => (e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME", e3))(zn || {});
    Qn.util.setEnumType(zn, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    const $n = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    $n.runtime = Qn, $n.typeName = "google.protobuf.MessageOptions", $n.fields = Qn.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: Nr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let er = $n;
    const Ar = class e3 extends WA {
      constructor(e4) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Ar.runtime = Qn, Ar.typeName = "google.protobuf.FieldOptions", Ar.fields = Qn.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: Qn.getEnumType(nr), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: Qn.getEnumType(rr), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: Qn.getEnumType(or), opt: true }, { no: 19, name: "targets", kind: "enum", T: Qn.getEnumType(sr), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: ir, repeated: true }, { no: 21, name: "features", kind: "message", T: Nr, opt: true }, { no: 22, name: "feature_support", kind: "message", T: lr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let tr = Ar;
    var nr = ((e3) => (e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE", e3))(nr || {});
    Qn.util.setEnumType(nr, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
    var rr = ((e3) => (e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER", e3))(rr || {});
    Qn.util.setEnumType(rr, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
    var or = ((e3) => (e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e3))(or || {});
    Qn.util.setEnumType(or, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
    var sr = ((e3) => (e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e3))(sr || {});
    Qn.util.setEnumType(sr, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    const ar = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    ar.runtime = Qn, ar.typeName = "google.protobuf.FieldOptions.EditionDefault", ar.fields = Qn.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: Qn.getEnumType(Cn), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    let ir = ar;
    const cr = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    cr.runtime = Qn, cr.typeName = "google.protobuf.FieldOptions.FeatureSupport", cr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: Qn.getEnumType(Cn), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: Qn.getEnumType(Cn), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: Qn.getEnumType(Cn), opt: true }]);
    let lr = cr;
    const gr = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    gr.runtime = Qn, gr.typeName = "google.protobuf.OneofOptions", gr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: Nr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let Er = gr;
    const ur = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    ur.runtime = Qn, ur.typeName = "google.protobuf.EnumOptions", ur.fields = Qn.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: Nr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let dr = ur;
    const Ir = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Ir.runtime = Qn, Ir.typeName = "google.protobuf.EnumValueOptions", Ir.fields = Qn.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: Nr, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: lr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let hr = Ir;
    const Qr = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Qr.runtime = Qn, Qr.typeName = "google.protobuf.ServiceOptions", Qr.fields = Qn.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: Nr, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let mr = Qr;
    const Cr = class e3 extends WA {
      constructor(e4) {
        super(), this.uninterpretedOption = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Cr.runtime = Qn, Cr.typeName = "google.protobuf.MethodOptions", Cr.fields = Qn.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: Qn.getEnumType(pr), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: Nr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: yr, repeated: true }]);
    let Br = Cr;
    var pr = ((e3) => (e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT", e3))(pr || {});
    Qn.util.setEnumType(pr, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    const fr = class e3 extends WA {
      constructor(e4) {
        super(), this.name = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    fr.runtime = Qn, fr.typeName = "google.protobuf.UninterpretedOption", fr.fields = Qn.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: kr, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    let yr = fr;
    const Tr = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Tr.runtime = Qn, Tr.typeName = "google.protobuf.UninterpretedOption.NamePart", Tr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    let kr = Tr;
    const wr = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    wr.runtime = Qn, wr.typeName = "google.protobuf.FeatureSet", wr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: Qn.getEnumType(Dr), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: Qn.getEnumType(Rr), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: Qn.getEnumType(Sr), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: Qn.getEnumType(br), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: Qn.getEnumType(Fr), opt: true }, { no: 6, name: "json_format", kind: "enum", T: Qn.getEnumType(_r), opt: true }]);
    let Nr = wr;
    var Dr = ((e3) => (e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e3))(Dr || {});
    Qn.util.setEnumType(Dr, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
    var Rr = ((e3) => (e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED", e3))(Rr || {});
    Qn.util.setEnumType(Rr, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
    var Sr = ((e3) => (e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED", e3))(Sr || {});
    Qn.util.setEnumType(Sr, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
    var br = ((e3) => (e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE", e3))(br || {});
    Qn.util.setEnumType(br, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
    var Fr = ((e3) => (e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED", e3))(Fr || {});
    Qn.util.setEnumType(Fr, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
    var _r = ((e3) => (e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e3))(_r || {});
    Qn.util.setEnumType(_r, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    const vr = class e3 extends WA {
      constructor(e4) {
        super(), this.defaults = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    vr.runtime = Qn, vr.typeName = "google.protobuf.FeatureSetDefaults", vr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: Ur, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: Qn.getEnumType(Cn), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: Qn.getEnumType(Cn), opt: true }]);
    const Lr = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Lr.runtime = Qn, Lr.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Lr.fields = Qn.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: Qn.getEnumType(Cn), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: Nr, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: Nr, opt: true }]);
    let Ur = Lr;
    const Mr = class e3 extends WA {
      constructor(e4) {
        super(), this.location = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Mr.runtime = Qn, Mr.typeName = "google.protobuf.SourceCodeInfo", Mr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: Yr, repeated: true }]);
    let Or = Mr;
    const Jr = class e3 extends WA {
      constructor(e4) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Jr.runtime = Qn, Jr.typeName = "google.protobuf.SourceCodeInfo.Location", Jr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    let Yr = Jr;
    const Pr = class e3 extends WA {
      constructor(e4) {
        super(), this.annotation = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Pr.runtime = Qn, Pr.typeName = "google.protobuf.GeneratedCodeInfo", Pr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: xr, repeated: true }]);
    let Gr = Pr;
    const Vr = class e3 extends WA {
      constructor(e4) {
        super(), this.path = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Vr.runtime = Qn, Vr.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", Vr.fields = Qn.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: Qn.getEnumType(Hr), opt: true }]);
    let xr = Vr;
    var Hr = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS", e3))(Hr || {});
    Qn.util.setEnumType(Hr, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
    Un.DOUBLE, ot.DOUBLE, Un.FLOAT, ot.FLOAT, Un.INT64, ot.INT64, Un.UINT64, ot.UINT64, Un.INT32, ot.INT32, Un.FIXED64, ot.FIXED64, Un.FIXED32, ot.FIXED32, Un.BOOL, ot.BOOL, Un.STRING, ot.STRING, Un.GROUP, Un.MESSAGE, Un.BYTES, ot.BYTES, Un.UINT32, ot.UINT32, Un.ENUM, Un.SFIXED32, ot.SFIXED32, Un.SFIXED64, ot.SFIXED64, Un.SINT32, ot.SINT32, Un.SINT64, ot.SINT64;
    const qr = class e3 extends WA {
      constructor(e4) {
        super(), this.seconds = rt.zero, this.nanos = 0, hn.util.initPartial(e4, this);
      }
      fromJson(e4, A3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${hn.json.debug(e4)}`);
        const t2 = e4.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!t2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n2 = Date.parse(t2[1] + "-" + t2[2] + "-" + t2[3] + "T" + t2[4] + ":" + t2[5] + ":" + t2[6] + (t2[8] ? t2[8] : "Z"));
        if (Number.isNaN(n2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n2 < Date.parse("0001-01-01T00:00:00Z") || n2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = rt.parse(n2 / 1e3), this.nanos = 0, t2[7] && (this.nanos = parseInt("1" + t2[7] + "0".repeat(9 - t2[7].length)) - 1e9), this;
      }
      toJson(e4) {
        const A3 = 1e3 * Number(this.seconds);
        if (A3 < Date.parse("0001-01-01T00:00:00Z") || A3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let t2 = "Z";
        if (this.nanos > 0) {
          const e5 = (this.nanos + 1e9).toString().substring(1);
          t2 = "000000" === e5.substring(3) ? "." + e5.substring(0, 3) + "Z" : "000" === e5.substring(6) ? "." + e5.substring(0, 6) + "Z" : "." + e5 + "Z";
        }
        return new Date(A3).toISOString().replace(".000Z", t2);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return e3.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(A3) {
        const t2 = A3.getTime();
        return new e3({ seconds: rt.parse(Math.floor(t2 / 1e3)), nanos: t2 % 1e3 * 1e6 });
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    qr.runtime = hn, qr.typeName = "google.protobuf.Timestamp", qr.fields = hn.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    let Wr = qr;
    const jr = class e3 extends WA {
      constructor(e4) {
        super(), this.seconds = rt.zero, this.nanos = 0, hn.util.initPartial(e4, this);
      }
      fromJson(e4, A3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e4)}`);
        const t2 = e4.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === t2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e4)}`);
        const n2 = Number(t2[1]);
        if (n2 > 315576e6 || n2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${hn.json.debug(e4)}`);
        if (this.seconds = rt.parse(n2), "string" == typeof t2[2]) {
          const e5 = t2[2] + "0".repeat(9 - t2[2].length);
          this.nanos = parseInt(e5), (n2 < 0 || Object.is(n2, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e4) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let A3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e5 = Math.abs(this.nanos).toString();
          e5 = "0".repeat(9 - e5.length) + e5, "000000" === e5.substring(3) ? e5 = e5.substring(0, 3) : "000" === e5.substring(6) && (e5 = e5.substring(0, 6)), A3 += "." + e5, this.nanos < 0 && 0 == Number(this.seconds) && (A3 = "-" + A3);
        }
        return A3 + "s";
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    jr.runtime = hn, jr.typeName = "google.protobuf.Duration", jr.fields = hn.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const Xr = class e3 extends WA {
      constructor(e4) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        if ("" === this.typeUrl) return {};
        const A3 = this.typeUrlToName(this.typeUrl), t2 = e4?.typeRegistry?.findMessage(A3);
        if (!t2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let n2 = t2.fromBinary(this.value).toJson(e4);
        return (A3.startsWith("google.protobuf.") || null === n2 || Array.isArray(n2) || "object" != typeof n2) && (n2 = { value: n2 }), n2["@type"] = this.typeUrl, n2;
      }
      fromJson(e4, A3) {
        if (null === e4 || Array.isArray(e4) || "object" != typeof e4) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e4 ? "null" : Array.isArray(e4) ? "array" : typeof e4));
        if (0 == Object.keys(e4).length) return this;
        const t2 = e4["@type"];
        if ("string" != typeof t2 || "" == t2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const n2 = this.typeUrlToName(t2), r3 = A3?.typeRegistry?.findMessage(n2);
        if (!r3) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t2} is not in the type registry`);
        let o3;
        if (n2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e4, "value")) o3 = r3.fromJson(e4.value, A3);
        else {
          const t3 = Object.assign({}, e4);
          delete t3["@type"], o3 = r3.fromJson(t3, A3);
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
        const A3 = e4.findMessage(this.typeUrlToName(this.typeUrl));
        return A3 ? A3.fromBinary(this.value) : void 0;
      }
      is(e4) {
        if ("" === this.typeUrl) return false;
        const A3 = this.typeUrlToName(this.typeUrl);
        let t2 = "";
        return t2 = "string" == typeof e4 ? e4 : e4.typeName, A3 === t2;
      }
      typeNameToUrl(e4) {
        return `type.googleapis.com/${e4}`;
      }
      typeUrlToName(e4) {
        if (!e4.length) throw new Error(`invalid type url: ${e4}`);
        const A3 = e4.lastIndexOf("/"), t2 = A3 >= 0 ? e4.substring(A3 + 1) : e4;
        if (!t2.length) throw new Error(`invalid type url: ${e4}`);
        return t2;
      }
      static pack(A3) {
        const t2 = new e3();
        return t2.packFrom(A3), t2;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Xr.runtime = hn, Xr.typeName = "google.protobuf.Any", Xr.fields = hn.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
    let Kr = Xr;
    const Zr = class e3 extends WA {
      constructor(e4) {
        super(), hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Zr.runtime = hn, Zr.typeName = "google.protobuf.Empty", Zr.fields = hn.util.newFieldList(() => []);
    const zr = class e3 extends WA {
      constructor(e4) {
        super(), this.paths = [], hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.paths.map((e5) => {
          if (e5.match(/_[0-9]?_/g) || e5.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e5 + '" is irreversible');
          return (function(e6) {
            let A3 = false;
            const t2 = [];
            for (let n2 = 0; n2 < e6.length; n2++) {
              let r3 = e6.charAt(n2);
              switch (r3) {
                case "_":
                  A3 = true;
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
                  t2.push(r3), A3 = false;
                  break;
                default:
                  A3 && (A3 = false, r3 = r3.toUpperCase()), t2.push(r3);
              }
            }
            return t2.join("");
          })(e5);
        }).join(",");
      }
      fromJson(e4, A3) {
        if ("string" != typeof e4) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + hn.json.debug(e4));
        if ("" === e4) return this;
        return this.paths = e4.split(",").map(function(e5) {
          if (e5.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const A4 = e5.replace(/[A-Z]/g, (e6) => "_" + e6.toLowerCase());
          return "_" === A4[0] ? A4.substring(1) : A4;
        }), this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    zr.runtime = hn, zr.typeName = "google.protobuf.FieldMask", zr.fields = hn.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
    var $r = ((e3) => (e3[e3.NULL_VALUE = 0] = "NULL_VALUE", e3))($r || {});
    hn.util.setEnumType($r, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    const eo = class e3 extends WA {
      constructor(e4) {
        super(), this.fields = {}, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        const A3 = {};
        for (const [t2, n2] of Object.entries(this.fields)) A3[t2] = n2.toJson(e4);
        return A3;
      }
      fromJson(e4, A3) {
        if ("object" != typeof e4 || null == e4 || Array.isArray(e4)) throw new Error("cannot decode google.protobuf.Struct from JSON " + hn.json.debug(e4));
        for (const [A4, t2] of Object.entries(e4)) this.fields[A4] = no.fromJson(t2);
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    eo.runtime = hn, eo.typeName = "google.protobuf.Struct", eo.fields = hn.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: no } }]);
    let Ao = eo;
    const to = class e3 extends WA {
      constructor(e4) {
        super(), this.kind = { case: void 0 }, hn.util.initPartial(e4, this);
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
      fromJson(e4, A3) {
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
            null === e4 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e4) ? this.kind = { case: "listValue", value: oo.fromJson(e4) } : this.kind = { case: "structValue", value: Ao.fromJson(e4) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + hn.json.debug(e4));
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    to.runtime = hn, to.typeName = "google.protobuf.Value", to.fields = hn.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: hn.getEnumType($r), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: Ao, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: oo, oneof: "kind" }]);
    let no = to;
    const ro = class e3 extends WA {
      constructor(e4) {
        super(), this.values = [], hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.values.map((e5) => e5.toJson());
      }
      fromJson(e4, A3) {
        if (!Array.isArray(e4)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + hn.json.debug(e4));
        for (let A4 of e4) this.values.push(no.fromJson(A4));
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    ro.runtime = hn, ro.typeName = "google.protobuf.ListValue", ro.fields = hn.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: no, repeated: true }]);
    let oo = ro;
    const so = class e3 extends WA {
      constructor(e4) {
        super(), this.value = 0, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.DOUBLE, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.DOUBLE, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    so.runtime = hn, so.typeName = "google.protobuf.DoubleValue", so.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), so.fieldWrapper = { wrapField: (e3) => new so({ value: e3 }), unwrapField: (e3) => e3.value };
    const ao = class e3 extends WA {
      constructor(e4) {
        super(), this.value = 0, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.FLOAT, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.FLOAT, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    ao.runtime = hn, ao.typeName = "google.protobuf.FloatValue", ao.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), ao.fieldWrapper = { wrapField: (e3) => new ao({ value: e3 }), unwrapField: (e3) => e3.value };
    const io = class e3 extends WA {
      constructor(e4) {
        super(), this.value = rt.zero, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.INT64, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.INT64, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    io.runtime = hn, io.typeName = "google.protobuf.Int64Value", io.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), io.fieldWrapper = { wrapField: (e3) => new io({ value: e3 }), unwrapField: (e3) => e3.value };
    const co = class e3 extends WA {
      constructor(e4) {
        super(), this.value = rt.zero, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.UINT64, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.UINT64, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    co.runtime = hn, co.typeName = "google.protobuf.UInt64Value", co.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), co.fieldWrapper = { wrapField: (e3) => new co({ value: e3 }), unwrapField: (e3) => e3.value };
    const lo = class e3 extends WA {
      constructor(e4) {
        super(), this.value = 0, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.INT32, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.INT32, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    lo.runtime = hn, lo.typeName = "google.protobuf.Int32Value", lo.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), lo.fieldWrapper = { wrapField: (e3) => new lo({ value: e3 }), unwrapField: (e3) => e3.value };
    const go = class e3 extends WA {
      constructor(e4) {
        super(), this.value = 0, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.UINT32, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.UINT32, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    go.runtime = hn, go.typeName = "google.protobuf.UInt32Value", go.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), go.fieldWrapper = { wrapField: (e3) => new go({ value: e3 }), unwrapField: (e3) => e3.value };
    const Eo = class e3 extends WA {
      constructor(e4) {
        super(), this.value = false, hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.BOOL, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.BOOL, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Eo.runtime = hn, Eo.typeName = "google.protobuf.BoolValue", Eo.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), Eo.fieldWrapper = { wrapField: (e3) => new Eo({ value: e3 }), unwrapField: (e3) => e3.value };
    const uo = class e3 extends WA {
      constructor(e4) {
        super(), this.value = "", hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.STRING, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.STRING, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    uo.runtime = hn, uo.typeName = "google.protobuf.StringValue", uo.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), uo.fieldWrapper = { wrapField: (e3) => new uo({ value: e3 }), unwrapField: (e3) => e3.value };
    const Io = class e3 extends WA {
      constructor(e4) {
        super(), this.value = new Uint8Array(0), hn.util.initPartial(e4, this);
      }
      toJson(e4) {
        return hn.json.writeScalar(ot.BYTES, this.value, true);
      }
      fromJson(e4, A3) {
        try {
          this.value = hn.json.readScalar(ot.BYTES, e4);
        } catch (e5) {
          let A4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (A4 += `: ${e5.message}`), new Error(A4);
        }
        return this;
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Io.runtime = hn, Io.typeName = "google.protobuf.BytesValue", Io.fields = hn.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), Io.fieldWrapper = { wrapField: (e3) => new Io({ value: e3 }), unwrapField: (e3) => e3.value };
    GA($r);
    const ho = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    ho.runtime = Qn, ho.typeName = "google.protobuf.compiler.Version", ho.fields = Qn.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    let Qo = ho;
    const mo = class e3 extends WA {
      constructor(e4) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    mo.runtime = Qn, mo.typeName = "google.protobuf.compiler.CodeGeneratorRequest", mo.fields = Qn.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: fn, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: fn, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Qo, opt: true }]);
    const Co = class e3 extends WA {
      constructor(e4) {
        super(), this.file = [], Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    Co.runtime = Qn, Co.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Co.fields = Qn.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: fo, repeated: true }]);
    var Bo = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e3))(Bo || {});
    Qn.util.setEnumType(Bo, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    const po = class e3 extends WA {
      constructor(e4) {
        super(), Qn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return Qn.util.equals(e3, A3, t2);
      }
    };
    po.runtime = Qn, po.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", po.fields = Qn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: Gr, opt: true }]);
    let fo = po;
    const yo = class e3 extends WA {
      constructor(e4) {
        super(), this.fileName = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    yo.runtime = hn, yo.typeName = "google.protobuf.SourceContext", yo.fields = hn.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
    let To = yo;
    var ko = ((e3) => (e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS", e3))(ko || {});
    hn.util.setEnumType(ko, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    const wo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    wo.runtime = hn, wo.typeName = "google.protobuf.Type", wo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Do, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: Lo, repeated: true }, { no: 5, name: "source_context", kind: "message", T: To }, { no: 6, name: "syntax", kind: "enum", T: hn.getEnumType(ko) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    const No = class e3 extends WA {
      constructor(e4) {
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    No.runtime = hn, No.typeName = "google.protobuf.Field", No.fields = hn.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: hn.getEnumType(Ro) }, { no: 2, name: "cardinality", kind: "enum", T: hn.getEnumType(So) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: Lo, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
    let Do = No;
    var Ro = ((e3) => (e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64", e3))(Ro || {});
    hn.util.setEnumType(Ro, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var So = ((e3) => (e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED", e3))(So || {});
    hn.util.setEnumType(So, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    const bo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    bo.runtime = hn, bo.typeName = "google.protobuf.Enum", bo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: _o, repeated: true }, { no: 3, name: "options", kind: "message", T: Lo, repeated: true }, { no: 4, name: "source_context", kind: "message", T: To }, { no: 5, name: "syntax", kind: "enum", T: hn.getEnumType(ko) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    const Fo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.number = 0, this.options = [], hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Fo.runtime = hn, Fo.typeName = "google.protobuf.EnumValue", Fo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: Lo, repeated: true }]);
    let _o = Fo;
    const vo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    vo.runtime = hn, vo.typeName = "google.protobuf.Option", vo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: Kr }]);
    let Lo = vo;
    const Uo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = ko.PROTO2, hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Uo.runtime = hn, Uo.typeName = "google.protobuf.Api", Uo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: Oo, repeated: true }, { no: 3, name: "options", kind: "message", T: Lo, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: To }, { no: 6, name: "mixins", kind: "message", T: Yo, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: hn.getEnumType(ko) }]);
    const Mo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = ko.PROTO2, hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Mo.runtime = hn, Mo.typeName = "google.protobuf.Method", Mo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: Lo, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: hn.getEnumType(ko) }]);
    let Oo = Mo;
    const Jo = class e3 extends WA {
      constructor(e4) {
        super(), this.name = "", this.root = "", hn.util.initPartial(e4, this);
      }
      static fromBinary(A3, t2) {
        return new e3().fromBinary(A3, t2);
      }
      static fromJson(A3, t2) {
        return new e3().fromJson(A3, t2);
      }
      static fromJsonString(A3, t2) {
        return new e3().fromJsonString(A3, t2);
      }
      static equals(A3, t2) {
        return hn.util.equals(e3, A3, t2);
      }
    };
    Jo.runtime = hn, Jo.typeName = "google.protobuf.Mixin", Jo.fields = hn.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
    let Yo = Jo;
    const Po = hn.makeMessageType("agent.v1.Range", () => [{ no: 1, name: "start", kind: "message", T: Go }, { no: 2, name: "end", kind: "message", T: Go }]), Go = hn.makeMessageType("agent.v1.Position", () => [{ no: 1, name: "line", kind: "scalar", T: 13 }, { no: 2, name: "column", kind: "scalar", T: 13 }]), Vo = hn.makeMessageType("agent.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), xo = hn.makeEnum("agent.v1.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), Ho = hn.makeMessageType("agent.v1.DiagnosticsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), qo = hn.makeMessageType("agent.v1.DiagnosticsResult", () => [{ no: 1, name: "success", kind: "message", T: Wo, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Xo, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Ko, oneof: "result" }, { no: 4, name: "file_not_found", kind: "message", T: Zo, oneof: "result" }, { no: 5, name: "permission_denied", kind: "message", T: zo, oneof: "result" }]), Wo = hn.makeMessageType("agent.v1.DiagnosticsSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: jo, repeated: true }, { no: 3, name: "total_diagnostics", kind: "scalar", T: 5 }]), jo = hn.makeMessageType("agent.v1.Diagnostic", () => [{ no: 1, name: "severity", kind: "enum", T: hn.getEnumType(xo) }, { no: 2, name: "range", kind: "message", T: Po }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }, { no: 5, name: "code", kind: "scalar", T: 9 }, { no: 6, name: "is_stale", kind: "scalar", T: 8 }]), Xo = hn.makeMessageType("agent.v1.DiagnosticsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), Ko = hn.makeMessageType("agent.v1.DiagnosticsRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Zo = hn.makeMessageType("agent.v1.DiagnosticsFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), zo = hn.makeMessageType("agent.v1.DiagnosticsPermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), $o = hn.makeEnum("aiserver.v1.EmbeddingModel", [{ no: 0, name: "EMBEDDING_MODEL_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EMBEDDING_MODEL_VOYAGE_CODE_2", localName: "VOYAGE_CODE_2" }, { no: 2, name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3", localName: "TEXT_EMBEDDINGS_LARGE_3" }, { no: 3, name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM", localName: "QWEN_1_5B_CUSTOM" }, { no: 4, name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR", localName: "MOCK_CHUNKER_ERROR" }, { no: 5, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM", localName: "QWEN_1_5B_0618_CUSTOM" }, { no: 6, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM", localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM" }]), es = hn.makeMessageType("aiserver.v1.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }]), As = hn.makeMessageType("aiserver.v1.EnvironmentInfo", () => [{ no: 1, name: "exthost_platform", kind: "scalar", T: 9, opt: true }, { no: 2, name: "exthost_arch", kind: "scalar", T: 9, opt: true }, { no: 3, name: "exthost_release", kind: "scalar", T: 9, opt: true }, { no: 4, name: "exthost_shell", kind: "scalar", T: 9, opt: true }, { no: 5, name: "local_timestamp", kind: "scalar", T: 9, opt: true }, { no: 6, name: "workspace_uris", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "cursor_version", kind: "scalar", T: 9, opt: true }, { no: 8, name: "is_remote", kind: "scalar", T: 8, opt: true }, { no: 9, name: "local_os_type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "home_directory", kind: "scalar", T: 9, opt: true }, { no: 11, name: "local_timezone", kind: "scalar", T: 9, opt: true }]), ts = hn.makeMessageType("aiserver.v1.LineRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_inclusive", kind: "scalar", T: 5 }]), ns = hn.makeMessageType("aiserver.v1.CursorRange", () => [{ no: 1, name: "start_position", kind: "message", T: es }, { no: 2, name: "end_position", kind: "message", T: es }]), rs = hn.makeMessageType("aiserver.v1.DetailedLine", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 2 }, { no: 3, name: "is_signature", kind: "scalar", T: 8 }]), os = hn.makeMessageType("aiserver.v1.CodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true }, { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true }, { no: 3, name: "range", kind: "message", T: ns }, { no: 4, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "signatures", kind: "message", T: ss }, { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "detailed_lines", kind: "message", T: rs, repeated: true }, { no: 10, name: "file_git_context", kind: "message", T: is }]), ss = hn.makeMessageType("aiserver.v1.CodeBlock.Signatures", () => [{ no: 1, name: "ranges", kind: "message", T: ns, repeated: true }], { localName: "CodeBlock_Signatures" }), as = hn.makeMessageType("aiserver.v1.GitCommit", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }]), is = hn.makeMessageType("aiserver.v1.FileGit", () => [{ no: 1, name: "commits", kind: "message", T: as, repeated: true }]), cs = hn.makeMessageType("aiserver.v1.File", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "file_git_context", kind: "message", T: is }]), ls = hn.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), gs = hn.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: ns }], { localName: "Diagnostic_RelatedInformation" }), Es = hn.makeMessageType("aiserver.v1.LinterError", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: ns }, { no: 3, name: "source", kind: "scalar", T: 9, opt: true }, { no: 4, name: "related_information", kind: "message", T: gs, repeated: true }, { no: 5, name: "severity", kind: "enum", T: hn.getEnumType(ls), opt: true }, { no: 6, name: "is_stale", kind: "scalar", T: 8, opt: true }]), us = hn.makeMessageType("aiserver.v1.LinterErrors", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "errors", kind: "message", T: Es, repeated: true }, { no: 3, name: "file_contents", kind: "scalar", T: 9 }]), ds = hn.makeMessageType("aiserver.v1.CursorRule", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_from_glob", kind: "scalar", T: 8, opt: true }, { no: 5, name: "always_apply", kind: "scalar", T: 8, opt: true }, { no: 6, name: "attach_to_background_agents", kind: "scalar", T: 8, opt: true }, { no: 7, name: "full_path", kind: "scalar", T: 9, opt: true }, { no: 8, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 11, name: "marketplace", kind: "scalar", T: 9, opt: true }]), Is = hn.makeMessageType("aiserver.v1.ExplicitContext", () => [{ no: 1, name: "context", kind: "scalar", T: 9 }, { no: 2, name: "repo_context", kind: "scalar", T: 9, opt: true }, { no: 3, name: "rules", kind: "message", T: ds, repeated: true }, { no: 4, name: "mode_specific_context", kind: "scalar", T: 9, opt: true }, { no: 5, name: "mcp_instructions", kind: "message", T: hs, repeated: true }]), hs = hn.makeMessageType("aiserver.v1.MCPInstructions", () => [{ no: 1, name: "server_name", kind: "scalar", T: 9 }, { no: 2, name: "server_identifier", kind: "scalar", T: 9 }, { no: 3, name: "instructions", kind: "scalar", T: 9 }]), Qs = hn.makeMessageType("aiserver.v1.ImageProto", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "dimension", kind: "message", T: ms }, { no: 3, name: "uuid", kind: "scalar", T: 9 }, { no: 4, name: "task_specific_description", kind: "scalar", T: 9, opt: true }]), ms = hn.makeMessageType("aiserver.v1.ImageProto.Dimension", () => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }], { localName: "ImageProto_Dimension" }), Cs = hn.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", () => [{ no: 1, name: "decision_log_path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "log_format", kind: "scalar", T: 9, opt: true }]), Bs = hn.makeMessageType("agent.v1.NetworkPolicy", () => [{ no: 1, name: "version", kind: "scalar", T: 13, opt: true }, { no: 2, name: "default_action", kind: "enum", T: hn.getEnumType(ps), opt: true }, { no: 3, name: "deny", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "allow", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "logging", kind: "message", T: Cs, opt: true }]), ps = hn.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [{ no: 0, name: "DEFAULT_ACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DEFAULT_ACTION_ALLOW", localName: "ALLOW" }, { no: 2, name: "DEFAULT_ACTION_DENY", localName: "DENY" }]), fs = hn.makeMessageType("agent.v1.SandboxPolicy", () => [{ no: 1, name: "type", kind: "enum", T: hn.getEnumType(ys) }, { no: 2, name: "network_access", kind: "scalar", T: 8, opt: true }, { no: 3, name: "additional_readwrite_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "additional_readonly_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "debug_output_dir", kind: "scalar", T: 9, opt: true }, { no: 7, name: "disable_tmp_write", kind: "scalar", T: 8, opt: true }, { no: 8, name: "allowlist_escalated", kind: "scalar", T: 8, opt: true }, { no: 9, name: "enable_shared_build_cache", kind: "scalar", T: 8, opt: true }, { no: 10, name: "network_policy", kind: "message", T: Bs, opt: true }, { no: 11, name: "network_policy_strict", kind: "scalar", T: 8, opt: true }, { no: 12, name: "capture_denies", kind: "scalar", T: 8, opt: true }, { no: 13, name: "skip_statsig_defaults", kind: "scalar", T: 8, opt: true }, { no: 14, name: "read_boundary", kind: "enum", T: hn.getEnumType(Ts) }, { no: 15, name: "additional_read_paths", kind: "scalar", T: 9, repeated: true }]), ys = hn.makeEnum("agent.v1.SandboxPolicy.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_INSECURE_NONE", localName: "INSECURE_NONE" }, { no: 2, name: "TYPE_WORKSPACE_READWRITE", localName: "WORKSPACE_READWRITE" }, { no: 3, name: "TYPE_WORKSPACE_READONLY", localName: "WORKSPACE_READONLY" }]), Ts = hn.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [{ no: 0, name: "READ_BOUNDARY_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_BOUNDARY_MODE_SYSTEM", localName: "SYSTEM" }, { no: 2, name: "READ_BOUNDARY_MODE_WORKSPACE", localName: "WORKSPACE" }]), ks = hn.makeMessageType("agent.v1.CommandClassifierResult", () => [{ no: 1, name: "commands", kind: "message", T: Ns, repeated: true }, { no: 2, name: "suggested_sandbox_mode", kind: "enum", T: hn.getEnumType(ws) }, { no: 3, name: "classification_failed", kind: "scalar", T: 8 }]), ws = hn.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [{ no: 0, name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUGGESTED_SANDBOX_MODE_SANDBOX", localName: "SANDBOX" }, { no: 2, name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX", localName: "NO_SANDBOX" }, { no: 3, name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED", localName: "UNDETERMINED" }]), Ns = hn.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "arguments", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "suggested_allowlist_entry", kind: "scalar", T: 9, opt: true }, { no: 4, name: "subcommand_tokens", kind: "scalar", T: 9, repeated: true }], { localName: "CommandClassifierResult_ClassifiedCommand" }), Ds = hn.makeMessageType("agent.v1.WriteShellStdinArgs", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "chars", kind: "scalar", T: 9 }]), Rs = hn.makeMessageType("agent.v1.WriteShellStdinResult", () => [{ no: 1, name: "success", kind: "message", T: Ss, oneof: "result" }, { no: 2, name: "error", kind: "message", T: bs, oneof: "result" }]), Ss = hn.makeMessageType("agent.v1.WriteShellStdinSuccess", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "terminal_file_length_before_input_written", kind: "scalar", T: 13 }]), bs = hn.makeMessageType("agent.v1.WriteShellStdinError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Fs = hn.makeEnum("agent.v1.RecordingMode", [{ no: 0, name: "RECORDING_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECORDING_MODE_START_RECORDING", localName: "START_RECORDING" }, { no: 2, name: "RECORDING_MODE_SAVE_RECORDING", localName: "SAVE_RECORDING" }, { no: 3, name: "RECORDING_MODE_DISCARD_RECORDING", localName: "DISCARD_RECORDING" }]), _s = hn.makeEnum("agent.v1.RequestedFilePathRejectedReason", [{ no: 0, name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED", localName: "SLASHES_NOT_ALLOWED" }]), vs = hn.makeMessageType("agent.v1.RecordScreenArgs", () => [{ no: 1, name: "mode", kind: "enum", T: hn.getEnumType(Fs) }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "save_as_filename", kind: "scalar", T: 9, opt: true }]), Ls = hn.makeMessageType("agent.v1.RecordScreenResult", () => [{ no: 1, name: "start_success", kind: "message", T: Us, oneof: "result" }, { no: 2, name: "save_success", kind: "message", T: Ms, oneof: "result" }, { no: 3, name: "discard_success", kind: "message", T: Os, oneof: "result" }, { no: 4, name: "failure", kind: "message", T: Js, oneof: "result" }]), Us = hn.makeMessageType("agent.v1.RecordScreenStartSuccess", () => [{ no: 1, name: "was_prior_recording_cancelled", kind: "scalar", T: 8 }, { no: 2, name: "was_save_as_filename_ignored", kind: "scalar", T: 8 }]), Ms = hn.makeMessageType("agent.v1.RecordScreenSaveSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "recording_duration_ms", kind: "scalar", T: 3 }, { no: 3, name: "requested_file_path_rejected_reason", kind: "enum", T: hn.getEnumType(_s), opt: true }]), Os = hn.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), Js = hn.makeMessageType("agent.v1.RecordScreenFailure", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Ys = hn.makeMessageType("agent.v1.ApplyAgentDiffResult", () => [{ no: 1, name: "success", kind: "message", T: Ps, oneof: "result" }, { no: 2, name: "error", kind: "message", T: xs, oneof: "result" }]), Ps = hn.makeMessageType("agent.v1.ApplyAgentDiffSuccess", () => [{ no: 1, name: "applied_changes", kind: "message", T: Gs, repeated: true }]), Gs = hn.makeMessageType("agent.v1.AppliedAgentChange", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "change_type", kind: "enum", T: hn.getEnumType(Vs) }, { no: 3, name: "before_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "after_content", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "message_for_model", kind: "scalar", T: 9, opt: true }]), Vs = hn.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [{ no: 0, name: "CHANGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CHANGE_TYPE_CREATED", localName: "CREATED" }, { no: 2, name: "CHANGE_TYPE_MODIFIED", localName: "MODIFIED" }, { no: 3, name: "CHANGE_TYPE_DELETED", localName: "DELETED" }]), xs = hn.makeMessageType("agent.v1.ApplyAgentDiffError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "applied_changes", kind: "message", T: Gs, repeated: true }]), Hs = hn.makeMessageType("agent.v1.GenerateImageResult", () => [{ no: 1, name: "success", kind: "message", T: qs, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Ws, oneof: "result" }]), qs = hn.makeMessageType("agent.v1.GenerateImageSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "image_data", kind: "scalar", T: 9 }]), Ws = hn.makeMessageType("agent.v1.GenerateImageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), js = hn.makeMessageType("agent.v1.AiAttributionResult", () => [{ no: 1, name: "success", kind: "message", T: Xs, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Ks, oneof: "result" }]), Xs = hn.makeMessageType("agent.v1.AiAttributionSuccess", () => [{ no: 1, name: "attribution_text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: Vo, opt: true }]), Ks = hn.makeMessageType("agent.v1.AiAttributionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Zs = hn.makeEnum("aiserver.v1.DatabaseProvider", [{ no: 0, name: "DATABASE_PROVIDER_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DATABASE_PROVIDER_AURORA", localName: "AURORA" }, { no: 2, name: "DATABASE_PROVIDER_PLANETSCALE", localName: "PLANETSCALE" }]), zs = hn.makeMessageType("aiserver.v1.CodeResult", () => [{ no: 1, name: "code_block", kind: "message", T: os }, { no: 2, name: "score", kind: "scalar", T: 2 }]), $s = hn.makeMessageType("aiserver.v1.RepositoryInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "remote_urls", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "remote_names", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "repo_name", kind: "scalar", T: 9 }, { no: 5, name: "repo_owner", kind: "scalar", T: 9 }, { no: 6, name: "is_tracked", kind: "scalar", T: 8 }, { no: 7, name: "is_local", kind: "scalar", T: 8 }, { no: 8, name: "num_files", kind: "scalar", T: 5, opt: true }, { no: 9, name: "orthogonal_transform_seed", kind: "scalar", T: 1, opt: true }, { no: 10, name: "preferred_embedding_model", kind: "enum", T: hn.getEnumType($o), opt: true }, { no: 11, name: "workspace_uri", kind: "scalar", T: 9 }, { no: 12, name: "preferred_db_provider", kind: "enum", T: hn.getEnumType(Zs), opt: true }]), ea = hn.makeEnum("agent.v1.TaskMode", [{ no: 0, name: "TASK_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "TASK_MODE_PLAN", localName: "PLAN" }]), Aa = hn.makeMessageType("agent.v1.TerminalMetadata", () => [{ no: 1, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 2, name: "last_commands", kind: "message", T: ta, repeated: true }, { no: 3, name: "last_modified_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "current_command", kind: "message", T: ta, opt: true }]), ta = hn.makeMessageType("agent.v1.TerminalMetadata.Command", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }, { no: 3, name: "timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "duration_ms", kind: "scalar", T: 3, opt: true }], { localName: "TerminalMetadata_Command" }), na = hn.makeEnum("agent.v1.MouseButton", [{ no: 0, name: "MOUSE_BUTTON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MOUSE_BUTTON_LEFT", localName: "LEFT" }, { no: 2, name: "MOUSE_BUTTON_RIGHT", localName: "RIGHT" }, { no: 3, name: "MOUSE_BUTTON_MIDDLE", localName: "MIDDLE" }, { no: 4, name: "MOUSE_BUTTON_BACK", localName: "BACK" }, { no: 5, name: "MOUSE_BUTTON_FORWARD", localName: "FORWARD" }]), ra = hn.makeEnum("agent.v1.ScrollDirection", [{ no: 0, name: "SCROLL_DIRECTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SCROLL_DIRECTION_UP", localName: "UP" }, { no: 2, name: "SCROLL_DIRECTION_DOWN", localName: "DOWN" }, { no: 3, name: "SCROLL_DIRECTION_LEFT", localName: "LEFT" }, { no: 4, name: "SCROLL_DIRECTION_RIGHT", localName: "RIGHT" }]), oa = hn.makeEnum("agent.v1.KeyStroke", [{ no: 0, name: "KEY_STROKE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KEY_STROKE_TAP", localName: "TAP" }, { no: 2, name: "KEY_STROKE_DOWN", localName: "DOWN" }, { no: 3, name: "KEY_STROKE_UP", localName: "UP" }]), sa = hn.makeEnum("agent.v1.ComputerUseSettleOutcome", [{ no: 0, name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "COMPUTER_USE_SETTLE_OUTCOME_NONE", localName: "NONE" }, { no: 2, name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED", localName: "FIXED" }, { no: 3, name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE", localName: "STABLE" }, { no: 4, name: "COMPUTER_USE_SETTLE_OUTCOME_CAP", localName: "CAP" }, { no: 5, name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED", localName: "CAPTURE_FAILED" }]), aa = hn.makeMessageType("agent.v1.Coordinate", () => [{ no: 1, name: "x", kind: "scalar", T: 5 }, { no: 2, name: "y", kind: "scalar", T: 5 }]), ia = hn.makeMessageType("agent.v1.ComputerUseAction", () => [{ no: 1, name: "mouse_move", kind: "message", T: ca, oneof: "action" }, { no: 2, name: "click", kind: "message", T: la, oneof: "action" }, { no: 3, name: "mouse_down", kind: "message", T: ga, oneof: "action" }, { no: 4, name: "mouse_up", kind: "message", T: Ea, oneof: "action" }, { no: 5, name: "drag", kind: "message", T: ua, oneof: "action" }, { no: 6, name: "scroll", kind: "message", T: da, oneof: "action" }, { no: 7, name: "type", kind: "message", T: Ia, oneof: "action" }, { no: 8, name: "key", kind: "message", T: ha, oneof: "action" }, { no: 9, name: "wait", kind: "message", T: Qa, oneof: "action" }, { no: 10, name: "screenshot", kind: "message", T: ma, oneof: "action" }, { no: 11, name: "cursor_position", kind: "message", T: Ca, oneof: "action" }]), ca = hn.makeMessageType("agent.v1.MouseMoveAction", () => [{ no: 1, name: "coordinate", kind: "message", T: aa }]), la = hn.makeMessageType("agent.v1.ClickAction", () => [{ no: 1, name: "coordinate", kind: "message", T: aa, opt: true }, { no: 2, name: "button", kind: "enum", T: hn.getEnumType(na) }, { no: 3, name: "count", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), ga = hn.makeMessageType("agent.v1.MouseDownAction", () => [{ no: 1, name: "button", kind: "enum", T: hn.getEnumType(na) }]), Ea = hn.makeMessageType("agent.v1.MouseUpAction", () => [{ no: 1, name: "button", kind: "enum", T: hn.getEnumType(na) }]), ua = hn.makeMessageType("agent.v1.DragAction", () => [{ no: 1, name: "path", kind: "message", T: aa, repeated: true }, { no: 2, name: "button", kind: "enum", T: hn.getEnumType(na) }, { no: 3, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), da = hn.makeMessageType("agent.v1.ScrollAction", () => [{ no: 1, name: "coordinate", kind: "message", T: aa, opt: true }, { no: 2, name: "direction", kind: "enum", T: hn.getEnumType(ra) }, { no: 3, name: "amount", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), Ia = hn.makeMessageType("agent.v1.TypeAction", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), ha = hn.makeMessageType("agent.v1.KeyAction", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "hold_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 3, name: "stroke", kind: "enum", T: hn.getEnumType(oa) }]), Qa = hn.makeMessageType("agent.v1.WaitAction", () => [{ no: 1, name: "duration_ms", kind: "scalar", T: 5 }]), ma = hn.makeMessageType("agent.v1.ScreenshotAction", []), Ca = hn.makeMessageType("agent.v1.CursorPositionAction", []), Ba = hn.makeMessageType("agent.v1.ComputerUseSuccess", () => [{ no: 1, name: "action_count", kind: "scalar", T: 5 }, { no: 2, name: "duration_ms", kind: "scalar", T: 5 }, { no: 3, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "cursor_position", kind: "message", T: aa, opt: true }, { no: 7, name: "settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_outcome", kind: "enum", T: hn.getEnumType(sa), opt: true }]), pa = hn.makeMessageType("agent.v1.ComputerUseError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "action_count", kind: "scalar", T: 5 }, { no: 3, name: "duration_ms", kind: "scalar", T: 5 }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_path", kind: "scalar", T: 9, opt: true }]), fa = hn.makeEnum("agent.v1.BugfixVerdict", [{ no: 0, name: "BUGFIX_VERDICT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGFIX_VERDICT_FIXED", localName: "FIXED" }, { no: 2, name: "BUGFIX_VERDICT_FALSE_POSITIVE", localName: "FALSE_POSITIVE" }, { no: 3, name: "BUGFIX_VERDICT_COULD_NOT_FIX", localName: "COULD_NOT_FIX" }, { no: 4, name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX", localName: "RESOLVED_BY_OTHER_FIX" }]), ya = hn.makeMessageType("agent.v1.BugfixResultItem", () => [{ no: 1, name: "bug_id", kind: "scalar", T: 9 }, { no: 2, name: "bug_title", kind: "scalar", T: 9 }, { no: 3, name: "verdict", kind: "enum", T: hn.getEnumType(fa) }, { no: 4, name: "explanation", kind: "scalar", T: 9 }, { no: 5, name: "severity", kind: "scalar", T: 9, opt: true }]), Ta = hn.makeMessageType("agent.v1.ReportBugfixResultsSuccess", () => [{ no: 1, name: "results", kind: "message", T: ya, repeated: true }]), ka = hn.makeMessageType("agent.v1.ReportBugfixResultsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), wa = hn.makeEnum("aiserver.v1.ClientSideToolV2", [{ no: 0, name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES", localName: "READ_SEMSEARCH_FILES" }, { no: 3, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH", localName: "RIPGREP_SEARCH" }, { no: 5, name: "CLIENT_SIDE_TOOL_V2_READ_FILE", localName: "READ_FILE" }, { no: 6, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR", localName: "LIST_DIR" }, { no: 7, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE", localName: "EDIT_FILE" }, { no: 8, name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH", localName: "FILE_SEARCH" }, { no: 9, name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL", localName: "SEMANTIC_SEARCH_FULL" }, { no: 11, name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE", localName: "DELETE_FILE" }, { no: 12, name: "CLIENT_SIDE_TOOL_V2_REAPPLY", localName: "REAPPLY" }, { no: 15, name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2", localName: "RUN_TERMINAL_COMMAND_V2" }, { no: 16, name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES", localName: "FETCH_RULES" }, { no: 18, name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH", localName: "WEB_SEARCH" }, { no: 19, name: "CLIENT_SIDE_TOOL_V2_MCP", localName: "MCP" }, { no: 23, name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS", localName: "SEARCH_SYMBOLS" }, { no: 24, name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP", localName: "BACKGROUND_COMPOSER_FOLLOWUP" }, { no: 25, name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE", localName: "KNOWLEDGE_BASE" }, { no: 26, name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST", localName: "FETCH_PULL_REQUEST" }, { no: 27, name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH", localName: "DEEP_SEARCH" }, { no: 28, name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM", localName: "CREATE_DIAGRAM" }, { no: 29, name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS", localName: "FIX_LINTS" }, { no: 30, name: "CLIENT_SIDE_TOOL_V2_READ_LINTS", localName: "READ_LINTS" }, { no: 31, name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION", localName: "GO_TO_DEFINITION" }, { no: 32, name: "CLIENT_SIDE_TOOL_V2_TASK", localName: "TASK" }, { no: 33, name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK", localName: "AWAIT_TASK" }, { no: 34, name: "CLIENT_SIDE_TOOL_V2_TODO_READ", localName: "TODO_READ" }, { no: 35, name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE", localName: "TODO_WRITE" }, { no: 38, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2", localName: "EDIT_FILE_V2" }, { no: 39, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2", localName: "LIST_DIR_V2" }, { no: 40, name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2", localName: "READ_FILE_V2" }, { no: 41, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH", localName: "RIPGREP_RAW_SEARCH" }, { no: 42, name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH", localName: "GLOB_FILE_SEARCH" }, { no: 43, name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN", localName: "CREATE_PLAN" }, { no: 44, name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES", localName: "LIST_MCP_RESOURCES" }, { no: 45, name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE", localName: "READ_MCP_RESOURCE" }, { no: 46, name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT", localName: "READ_PROJECT" }, { no: 47, name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT", localName: "UPDATE_PROJECT" }, { no: 48, name: "CLIENT_SIDE_TOOL_V2_TASK_V2", localName: "TASK_V2" }, { no: 49, name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL", localName: "CALL_MCP_TOOL" }, { no: 50, name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF", localName: "APPLY_AGENT_DIFF" }, { no: 51, name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION", localName: "ASK_QUESTION" }, { no: 52, name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE", localName: "SWITCH_MODE" }, { no: 53, name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE", localName: "GENERATE_IMAGE" }, { no: 54, name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE", localName: "COMPUTER_USE" }, { no: 55, name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN", localName: "WRITE_SHELL_STDIN" }, { no: 56, name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN", localName: "RECORD_SCREEN" }, { no: 57, name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH", localName: "WEB_FETCH" }, { no: 58, name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS", localName: "REPORT_BUGFIX_RESULTS" }, { no: 59, name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION", localName: "AI_ATTRIBUTION" }, { no: 60, name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH", localName: "MCP_AUTH" }, { no: 61, name: "CLIENT_SIDE_TOOL_V2_REFLECT", localName: "REFLECT" }, { no: 62, name: "CLIENT_SIDE_TOOL_V2_AWAIT", localName: "AWAIT" }, { no: 63, name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS", localName: "GET_MCP_TOOLS" }, { no: 65, name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER", localName: "SEND_TO_USER" }, { no: 66, name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM", localName: "CONNECT_SCM" }]), Na = hn.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [{ no: 0, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED", localName: "EXECUTION_COMPLETED" }, { no: 2, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED", localName: "EXECUTION_ABORTED" }, { no: 3, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED", localName: "EXECUTION_FAILED" }, { no: 4, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON", localName: "ERROR_OCCURRED_CHECKING_REASON" }, { no: 5, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT", localName: "IDLE_TIMEOUT" }]), Da = hn.makeMessageType("aiserver.v1.ReapplyParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), Ra = hn.makeMessageType("aiserver.v1.ApplyAgentDiffParams", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }]), Sa = hn.makeMessageType("aiserver.v1.ReapplyResult", () => [{ no: 1, name: "diff", kind: "message", T: ja }, { no: 2, name: "is_applied", kind: "scalar", T: 8 }, { no: 3, name: "apply_failed", kind: "scalar", T: 8 }, { no: 4, name: "linter_errors", kind: "message", T: Es, repeated: true }, { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true }]), ba = hn.makeMessageType("aiserver.v1.FetchRulesParams", () => [{ no: 1, name: "rule_names", kind: "scalar", T: 9, repeated: true }]), Fa = hn.makeMessageType("aiserver.v1.FetchRulesResult", () => [{ no: 1, name: "rules", kind: "message", T: ds, repeated: true }]), _a = hn.makeMessageType("aiserver.v1.ToolResultError", () => [{ no: 1, name: "client_visible_error_message", kind: "scalar", T: 9 }, { no: 2, name: "model_visible_error_message", kind: "scalar", T: 9 }, { no: 3, name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk", kind: "scalar", T: 9, opt: true }, { no: 5, name: "edit_file_error_details", kind: "message", T: va, oneof: "error_details" }, { no: 6, name: "search_replace_error_details", kind: "message", T: La, oneof: "error_details" }]), va = hn.makeMessageType("aiserver.v1.ToolResultError.EditFileError", () => [{ no: 1, name: "num_lines_in_file_before_edit", kind: "scalar", T: 5 }], { localName: "ToolResultError_EditFileError" }), La = hn.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", () => [{ no: 1, name: "num_lines_in_file_before_edit", kind: "scalar", T: 5 }], { localName: "ToolResultError_SearchReplaceError" }), Ua = hn.makeMessageType("aiserver.v1.ClientSideToolV2Call", () => [{ no: 1, name: "tool", kind: "enum", T: hn.getEnumType(wa) }, { no: 2, name: "read_semsearch_files_params", kind: "message", T: Oi, oneof: "params" }, { no: 5, name: "ripgrep_search_params", kind: "message", T: li, oneof: "params" }, { no: 8, name: "read_file_params", kind: "message", T: ii, oneof: "params" }, { no: 12, name: "list_dir_params", kind: "message", T: oi, oneof: "params" }, { no: 13, name: "edit_file_params", kind: "message", T: qa, oneof: "params" }, { no: 16, name: "file_search_params", kind: "message", T: ti, oneof: "params" }, { no: 17, name: "semantic_search_full_params", kind: "message", T: xi, oneof: "params" }, { no: 19, name: "delete_file_params", kind: "message", T: qi, oneof: "params" }, { no: 20, name: "reapply_params", kind: "message", T: Da, oneof: "params" }, { no: 23, name: "run_terminal_command_v2_params", kind: "message", T: nc, oneof: "params" }, { no: 24, name: "fetch_rules_params", kind: "message", T: ba, oneof: "params" }, { no: 26, name: "web_search_params", kind: "message", T: ac, oneof: "params" }, { no: 27, name: "mcp_params", kind: "message", T: lc, oneof: "params" }, { no: 31, name: "search_symbols_params", kind: "message", T: yc, oneof: "params" }, { no: 41, name: "gotodef_params", kind: "message", T: Ki, oneof: "params" }, { no: 32, name: "background_composer_followup_params", kind: "message", T: wc, oneof: "params" }, { no: 33, name: "knowledge_base_params", kind: "message", T: Dc, oneof: "params" }, { no: 34, name: "fetch_pull_request_params", kind: "message", T: Sc, oneof: "params" }, { no: 35, name: "deep_search_params", kind: "message", T: vc, oneof: "params" }, { no: 36, name: "create_diagram_params", kind: "message", T: Uc, oneof: "params" }, { no: 37, name: "fix_lints_params", kind: "message", T: Oc, oneof: "params" }, { no: 38, name: "read_lints_params", kind: "message", T: Pc, oneof: "params" }, { no: 42, name: "task_params", kind: "message", T: Vc, oneof: "params" }, { no: 43, name: "await_task_params", kind: "message", T: al, oneof: "params" }, { no: 44, name: "todo_read_params", kind: "message", T: ll, oneof: "params" }, { no: 45, name: "todo_write_params", kind: "message", T: ul, oneof: "params" }, { no: 50, name: "edit_file_v2_params", kind: "message", T: Ga, oneof: "params" }, { no: 52, name: "list_dir_v2_params", kind: "message", T: Il, oneof: "params" }, { no: 53, name: "read_file_v2_params", kind: "message", T: Cl, oneof: "params" }, { no: 54, name: "ripgrep_raw_search_params", kind: "message", T: Xc, oneof: "params" }, { no: 55, name: "glob_file_search_params", kind: "message", T: pl, oneof: "params" }, { no: 56, name: "create_plan_params", kind: "message", T: Nl, oneof: "params" }, { no: 57, name: "list_mcp_resources_params", kind: "message", T: dc, oneof: "params" }, { no: 58, name: "read_mcp_resource_params", kind: "message", T: Qc, oneof: "params" }, { no: 59, name: "read_project_params", kind: "message", T: Fl, oneof: "params" }, { no: 60, name: "update_project_params", kind: "message", T: Ll, oneof: "params" }, { no: 61, name: "task_v2_params", kind: "message", T: Wc, oneof: "params" }, { no: 62, name: "call_mcp_tool_params", kind: "message", T: Cc, oneof: "params" }, { no: 63, name: "apply_agent_diff_params", kind: "message", T: Ra, oneof: "params" }, { no: 64, name: "ask_question_params", kind: "message", T: Ml, oneof: "params" }, { no: 65, name: "switch_mode_params", kind: "message", T: Gl, oneof: "params" }, { no: 66, name: "computer_use_params", kind: "message", T: xl, oneof: "params" }, { no: 67, name: "write_shell_stdin_params", kind: "message", T: Ds, oneof: "params" }, { no: 68, name: "record_screen_params", kind: "message", T: vs, oneof: "params" }, { no: 69, name: "web_fetch_params", kind: "message", T: ql, oneof: "params" }, { no: 70, name: "report_bugfix_results_params", kind: "message", T: jl, oneof: "params" }, { no: 71, name: "mcp_auth_params", kind: "message", T: Kl, oneof: "params" }, { no: 72, name: "get_mcp_tools_params", kind: "message", T: pc, oneof: "params" }, { no: 73, name: "connect_scm_params", kind: "message", T: zl, oneof: "params" }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 6, name: "timeout_ms", kind: "scalar", T: 1, opt: true }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 14, name: "is_streaming", kind: "scalar", T: 8 }, { no: 15, name: "is_last_message", kind: "scalar", T: 8 }, { no: 51, name: "internal", kind: "scalar", T: 8 }, { no: 10, name: "raw_args", kind: "scalar", T: 9 }, { no: 48, name: "tool_index", kind: "scalar", T: 13, opt: true }, { no: 49, name: "model_call_id", kind: "scalar", T: 9, opt: true }]), Ma = hn.makeMessageType("aiserver.v1.ClientSideToolV2Result", () => [{ no: 1, name: "tool", kind: "enum", T: hn.getEnumType(wa) }, { no: 2, name: "read_semsearch_files_result", kind: "message", T: Vi, oneof: "result" }, { no: 4, name: "ripgrep_search_result", kind: "message", T: Bi, oneof: "result" }, { no: 6, name: "read_file_result", kind: "message", T: ci, oneof: "result" }, { no: 9, name: "list_dir_result", kind: "message", T: si, oneof: "result" }, { no: 10, name: "edit_file_result", kind: "message", T: Wa, oneof: "result" }, { no: 11, name: "file_search_result", kind: "message", T: ni, oneof: "result" }, { no: 18, name: "semantic_search_full_result", kind: "message", T: Hi, oneof: "result" }, { no: 20, name: "delete_file_result", kind: "message", T: Wi, oneof: "result" }, { no: 21, name: "reapply_result", kind: "message", T: Sa, oneof: "result" }, { no: 24, name: "run_terminal_command_v2_result", kind: "message", T: sc, oneof: "result" }, { no: 25, name: "fetch_rules_result", kind: "message", T: Fa, oneof: "result" }, { no: 27, name: "web_search_result", kind: "message", T: ic, oneof: "result" }, { no: 28, name: "mcp_result", kind: "message", T: uc, oneof: "result" }, { no: 32, name: "search_symbols_result", kind: "message", T: Tc, oneof: "result" }, { no: 33, name: "background_composer_followup_result", kind: "message", T: Nc, oneof: "result" }, { no: 34, name: "knowledge_base_result", kind: "message", T: Rc, oneof: "result" }, { no: 36, name: "fetch_pull_request_result", kind: "message", T: bc, oneof: "result" }, { no: 37, name: "deep_search_result", kind: "message", T: Lc, oneof: "result" }, { no: 38, name: "create_diagram_result", kind: "message", T: Mc, oneof: "result" }, { no: 39, name: "fix_lints_result", kind: "message", T: Jc, oneof: "result" }, { no: 40, name: "read_lints_result", kind: "message", T: Gc, oneof: "result" }, { no: 41, name: "gotodef_result", kind: "message", T: zi, oneof: "result" }, { no: 42, name: "task_result", kind: "message", T: xc, oneof: "result" }, { no: 43, name: "await_task_result", kind: "message", T: il, oneof: "result" }, { no: 44, name: "todo_read_result", kind: "message", T: El, oneof: "result" }, { no: 45, name: "todo_write_result", kind: "message", T: dl, oneof: "result" }, { no: 51, name: "edit_file_v2_result", kind: "message", T: Ha, oneof: "result" }, { no: 52, name: "list_dir_v2_result", kind: "message", T: hl, oneof: "result" }, { no: 53, name: "read_file_v2_result", kind: "message", T: Bl, oneof: "result" }, { no: 54, name: "ripgrep_raw_search_result", kind: "message", T: Kc, oneof: "result" }, { no: 55, name: "glob_file_search_result", kind: "message", T: fl, oneof: "result" }, { no: 56, name: "create_plan_result", kind: "message", T: Dl, oneof: "result" }, { no: 57, name: "list_mcp_resources_result", kind: "message", T: Ic, oneof: "result" }, { no: 58, name: "read_mcp_resource_result", kind: "message", T: mc, oneof: "result" }, { no: 59, name: "read_project_result", kind: "message", T: _l, oneof: "result" }, { no: 60, name: "update_project_result", kind: "message", T: Ul, oneof: "result" }, { no: 61, name: "task_v2_result", kind: "message", T: jc, oneof: "result" }, { no: 62, name: "call_mcp_tool_result", kind: "message", T: Bc, oneof: "result" }, { no: 63, name: "apply_agent_diff_result", kind: "message", T: Ys, oneof: "result" }, { no: 64, name: "ask_question_result", kind: "message", T: Yl, oneof: "result" }, { no: 65, name: "switch_mode_result", kind: "message", T: Vl, oneof: "result" }, { no: 66, name: "computer_use_result", kind: "message", T: Hl, oneof: "result" }, { no: 67, name: "generate_image_result", kind: "message", T: Hs, oneof: "result" }, { no: 68, name: "write_shell_stdin_result", kind: "message", T: Rs, oneof: "result" }, { no: 69, name: "record_screen_result", kind: "message", T: Ls, oneof: "result" }, { no: 70, name: "web_fetch_result", kind: "message", T: Wl, oneof: "result" }, { no: 71, name: "report_bugfix_results_result", kind: "message", T: Xl, oneof: "result" }, { no: 72, name: "ai_attribution_result", kind: "message", T: js, oneof: "result" }, { no: 73, name: "mcp_auth_result", kind: "message", T: Zl, oneof: "result" }, { no: 74, name: "get_mcp_tools_result", kind: "message", T: fc, oneof: "result" }, { no: 75, name: "connect_scm_result", kind: "message", T: Ag, oneof: "result" }, { no: 35, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 8, name: "error", kind: "message", T: _a, opt: true }, { no: 48, name: "model_call_id", kind: "scalar", T: 9, opt: true }, { no: 49, name: "tool_index", kind: "scalar", T: 13, opt: true }, { no: 50, name: "attachments", kind: "message", T: Ja, opt: true }]), Oa = hn.makeMessageType("aiserver.v1.NudgeMessage", () => [{ no: 1, name: "raw_message", kind: "scalar", T: 9 }]), Ja = hn.makeMessageType("aiserver.v1.ToolResultAttachments", () => [{ no: 1, name: "original_todos", kind: "message", T: gl, repeated: true }, { no: 2, name: "updated_todos", kind: "message", T: gl, repeated: true }, { no: 3, name: "nudge_messages", kind: "message", T: Oa, repeated: true }, { no: 4, name: "should_show_todo_write_reminder", kind: "scalar", T: 8 }, { no: 5, name: "todo_reminder_type", kind: "enum", T: hn.getEnumType(Ya) }, { no: 6, name: "discovery_budget_reminder", kind: "message", T: Pa, opt: true }]), Ya = hn.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [{ no: 0, name: "TODO_REMINDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TODO_REMINDER_TYPE_EVERY_10_TURNS", localName: "EVERY_10_TURNS" }, { no: 2, name: "TODO_REMINDER_TYPE_AFTER_EDIT", localName: "AFTER_EDIT" }]), Pa = hn.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", () => [{ no: 1, name: "discovery_rounds_remaining", kind: "scalar", T: 5 }, { no: 2, name: "discovery_effort", kind: "scalar", T: 9, opt: true }], { localName: "ToolResultAttachments_DiscoveryBudgetReminder" }), Ga = hn.makeMessageType("aiserver.v1.EditFileV2Params", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents_after_edit", kind: "scalar", T: 9, opt: true }, { no: 3, name: "waiting_for_file_contents", kind: "scalar", T: 8, opt: true }, { no: 4, name: "text", kind: "message", T: Va, oneof: "streaming_edit" }, { no: 5, name: "code", kind: "message", T: xa, oneof: "streaming_edit" }, { no: 6, name: "should_send_back_linter_errors", kind: "scalar", T: 8 }, { no: 7, name: "diff", kind: "message", T: ja, opt: true }, { no: 8, name: "result_for_model", kind: "scalar", T: 9 }, { no: 9, name: "streaming_content", kind: "scalar", T: 9, opt: true }, { no: 10, name: "no_codeblock", kind: "scalar", T: 8, opt: true }, { no: 11, name: "cloud_agent_edit", kind: "scalar", T: 8, opt: true }]), Va = hn.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "EditFileV2Params_StreamingEditText" }), xa = hn.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", () => [{ no: 1, name: "code", kind: "scalar", T: 9 }], { localName: "EditFileV2Params_StreamingEditCode" }), Ha = hn.makeMessageType("aiserver.v1.EditFileV2Result", () => [{ no: 1, name: "contents_before_edit", kind: "scalar", T: 9, opt: true }, { no: 9, name: "eol_sequence", kind: "scalar", T: 9, opt: true }, { no: 11, name: "detected_language", kind: "scalar", T: 9, opt: true }, { no: 2, name: "file_was_created", kind: "scalar", T: 8 }, { no: 3, name: "diff", kind: "message", T: ja, opt: true }, { no: 4, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 5, name: "linter_errors", kind: "message", T: Es, repeated: true }, { no: 6, name: "sent_back_linter_errors", kind: "scalar", T: 8 }, { no: 8, name: "should_auto_fix_lints", kind: "scalar", T: 8 }, { no: 7, name: "human_review_v2", kind: "message", T: Ai, opt: true }, { no: 10, name: "result_for_model", kind: "scalar", T: 9 }, { no: 12, name: "contents_after_edit", kind: "scalar", T: 9, opt: true }, { no: 13, name: "before_content_id", kind: "scalar", T: 9, opt: true }, { no: 14, name: "after_content_id", kind: "scalar", T: 9 }]), qa = hn.makeMessageType("aiserver.v1.EditFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "language", kind: "scalar", T: 9 }, { no: 4, name: "blocking", kind: "scalar", T: 8 }, { no: 3, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "instructions", kind: "scalar", T: 9, opt: true }, { no: 12, name: "should_edit_file_fail_for_large_files", kind: "scalar", T: 8, opt: true }, { no: 6, name: "old_string", kind: "scalar", T: 9, opt: true }, { no: 7, name: "new_string", kind: "scalar", T: 9, opt: true }, { no: 8, name: "allow_multiple_matches", kind: "scalar", T: 8, opt: true }, { no: 10, name: "use_whitespace_insensitive_fallback", kind: "scalar", T: 8, opt: true }, { no: 11, name: "use_did_you_mean_fuzzy_match", kind: "scalar", T: 8, opt: true }, { no: 16, name: "gracefully_handle_recoverable_errors", kind: "scalar", T: 8, opt: true }, { no: 9, name: "line_ranges", kind: "message", T: ts, repeated: true }, { no: 13, name: "notebook_cell_idx", kind: "scalar", T: 5, opt: true }, { no: 14, name: "is_new_cell", kind: "scalar", T: 8, opt: true }, { no: 15, name: "cell_language", kind: "scalar", T: 9, opt: true }, { no: 17, name: "edit_category", kind: "scalar", T: 9, opt: true }, { no: 18, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true }]), Wa = hn.makeMessageType("aiserver.v1.EditFileResult", () => [{ no: 1, name: "diff", kind: "message", T: ja }, { no: 2, name: "is_applied", kind: "scalar", T: 8 }, { no: 3, name: "apply_failed", kind: "scalar", T: 8 }, { no: 4, name: "linter_errors", kind: "message", T: Es, repeated: true }, { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 6, name: "num_matches", kind: "scalar", T: 5, opt: true }, { no: 7, name: "whitespace_insensitive_fallback_found_match", kind: "scalar", T: 8, opt: true }, { no: 8, name: "no_match_found_in_line_ranges", kind: "scalar", T: 8, opt: true }, { no: 11, name: "recoverable_error", kind: "message", T: Za, opt: true }, { no: 9, name: "num_lines_in_file", kind: "scalar", T: 5, opt: true }, { no: 10, name: "is_subagent_edit", kind: "scalar", T: 8, opt: true }, { no: 12, name: "diff_became_no_op_due_to_on_save_fixes", kind: "scalar", T: 8, opt: true }, { no: 13, name: "human_review", kind: "message", T: $a, opt: true }, { no: 14, name: "human_feedback", kind: "message", T: ei, opt: true }, { no: 15, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true }, { no: 16, name: "human_review_v2", kind: "message", T: Ai, opt: true }, { no: 17, name: "were_all_new_linter_errors_resolved_by_this_edit", kind: "scalar", T: 8, opt: true }]), ja = hn.makeMessageType("aiserver.v1.EditFileResult.FileDiff", () => [{ no: 1, name: "chunks", kind: "message", T: Ka, repeated: true }, { no: 2, name: "editor", kind: "enum", T: hn.getEnumType(Xa) }, { no: 3, name: "hit_timeout", kind: "scalar", T: 8 }], { localName: "EditFileResult_FileDiff" }), Xa = hn.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [{ no: 0, name: "EDITOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EDITOR_AI", localName: "AI" }, { no: 2, name: "EDITOR_HUMAN", localName: "HUMAN" }]), Ka = hn.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", () => [{ no: 1, name: "diff_string", kind: "scalar", T: 9 }, { no: 2, name: "old_start", kind: "scalar", T: 5 }, { no: 3, name: "new_start", kind: "scalar", T: 5 }, { no: 4, name: "old_lines", kind: "scalar", T: 5 }, { no: 5, name: "new_lines", kind: "scalar", T: 5 }, { no: 6, name: "lines_removed", kind: "scalar", T: 5 }, { no: 7, name: "lines_added", kind: "scalar", T: 5 }], { localName: "EditFileResult_FileDiff_ChunkDiff" }), Za = hn.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", () => [{ no: 1, name: "error_type", kind: "enum", T: hn.getEnumType(za) }, { no: 2, name: "model_message", kind: "scalar", T: 9 }], { localName: "EditFileResult_RecoverableError" }), za = hn.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [{ no: 0, name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND", localName: "SEARCH_STRING_NOT_FOUND" }, { no: 2, name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING", localName: "AMBIGUOUS_SEARCH_STRING" }]), $a = hn.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", () => [{ no: 1, name: "is_edit_accepted", kind: "scalar", T: 8 }, { no: 2, name: "text_result", kind: "scalar", T: 9 }, { no: 3, name: "stop_and_get_new_user_input", kind: "scalar", T: 8 }], { localName: "EditFileResult_EditFileHumanReview" }), ei = hn.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", () => [{ no: 1, name: "selected_option", kind: "scalar", T: 9 }, { no: 2, name: "feedback_text", kind: "scalar", T: 9 }, { no: 3, name: "submit_feedback_as_new_message", kind: "scalar", T: 8 }, { no: 4, name: "bubble_id", kind: "scalar", T: 9 }], { localName: "EditFileResult_HumanFeedback" }), Ai = hn.makeMessageType("aiserver.v1.HumanReview", () => [{ no: 1, name: "selected_option", kind: "scalar", T: 9 }, { no: 2, name: "feedback_text", kind: "scalar", T: 9 }, { no: 3, name: "submit_feedback_as_new_message", kind: "scalar", T: 8 }, { no: 4, name: "bubble_id", kind: "scalar", T: 9 }]), ti = hn.makeMessageType("aiserver.v1.ToolCallFileSearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), ni = hn.makeMessageType("aiserver.v1.ToolCallFileSearchResult", () => [{ no: 1, name: "files", kind: "message", T: ri, repeated: true }, { no: 2, name: "limit_hit", kind: "scalar", T: 8, opt: true }, { no: 3, name: "num_results", kind: "scalar", T: 5 }]), ri = hn.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }], { localName: "ToolCallFileSearchResult_File" }), oi = hn.makeMessageType("aiserver.v1.ListDirParams", () => [{ no: 1, name: "directory_path", kind: "scalar", T: 9 }]), si = hn.makeMessageType("aiserver.v1.ListDirResult", () => [{ no: 1, name: "files", kind: "message", T: ai, repeated: true }, { no: 2, name: "directory_relative_workspace_path", kind: "scalar", T: 9 }]), ai = hn.makeMessageType("aiserver.v1.ListDirResult.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "is_directory", kind: "scalar", T: 8 }, { no: 3, name: "size", kind: "scalar", T: 3, opt: true }, { no: 4, name: "last_modified", kind: "message", T: Wr, opt: true }, { no: 5, name: "num_children", kind: "scalar", T: 5, opt: true }, { no: 6, name: "num_lines", kind: "scalar", T: 5, opt: true }], { localName: "ListDirResult_File" }), ii = hn.makeMessageType("aiserver.v1.ReadFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "read_entire_file", kind: "scalar", T: 8 }, { no: 3, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true }, { no: 5, name: "file_is_allowed_to_be_read_entirely", kind: "scalar", T: 8 }, { no: 6, name: "max_lines", kind: "scalar", T: 5, opt: true }, { no: 7, name: "max_chars", kind: "scalar", T: 5, opt: true }, { no: 8, name: "min_lines", kind: "scalar", T: 5, opt: true }]), ci = hn.makeMessageType("aiserver.v1.ReadFileResult", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "did_downgrade_to_line_range", kind: "scalar", T: 8 }, { no: 3, name: "did_shorten_line_range", kind: "scalar", T: 8 }, { no: 4, name: "did_set_default_line_range", kind: "scalar", T: 8 }, { no: 5, name: "full_file_contents", kind: "scalar", T: 9, opt: true }, { no: 6, name: "outline", kind: "scalar", T: 9, opt: true }, { no: 7, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true }, { no: 8, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true }, { no: 9, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 10, name: "did_shorten_char_range", kind: "scalar", T: 8 }, { no: 11, name: "read_full_file", kind: "scalar", T: 8, opt: true }, { no: 12, name: "total_lines", kind: "scalar", T: 5, opt: true }, { no: 13, name: "matching_cursor_rules", kind: "message", T: ds, repeated: true }, { no: 14, name: "file_git_context", kind: "message", T: is }]), li = hn.makeMessageType("aiserver.v1.RipgrepSearchParams", () => [{ no: 1, name: "options", kind: "message", T: ui }, { no: 2, name: "pattern_info", kind: "message", T: gi }]), gi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "is_reg_exp", kind: "scalar", T: 8, opt: true }, { no: 3, name: "is_word_match", kind: "scalar", T: 8, opt: true }, { no: 4, name: "word_separators", kind: "scalar", T: 9, opt: true }, { no: 5, name: "is_multiline", kind: "scalar", T: 8, opt: true }, { no: 6, name: "is_unicode", kind: "scalar", T: 8, opt: true }, { no: 7, name: "is_case_sensitive", kind: "scalar", T: 8, opt: true }, { no: 8, name: "notebook_info", kind: "message", T: Ei }, { no: 9, name: "pattern_was_escaped", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchParams_IPatternInfoProto" }), Ei = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", () => [{ no: 1, name: "is_in_notebook_markdown_input", kind: "scalar", T: 8, opt: true }, { no: 2, name: "is_in_notebook_markdown_preview", kind: "scalar", T: 8, opt: true }, { no: 3, name: "is_in_notebook_cell_input", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_in_notebook_cell_output", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto" }), ui = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", () => [{ no: 1, name: "preview_options", kind: "message", T: mi }, { no: 2, name: "file_encoding", kind: "scalar", T: 9, opt: true }, { no: 3, name: "surrounding_context", kind: "scalar", T: 5, opt: true }, { no: 4, name: "is_smart_case", kind: "scalar", T: 8, opt: true }, { no: 5, name: "notebook_search_config", kind: "message", T: Ci }, { no: 6, name: "exclude_pattern", kind: "message", T: Ii }, { no: 7, name: "include_pattern", kind: "message", T: Qi }, { no: 8, name: "expand_patterns", kind: "scalar", T: 8, opt: true }, { no: 9, name: "max_results", kind: "scalar", T: 5, opt: true }, { no: 10, name: "max_file_size", kind: "scalar", T: 5, opt: true }, { no: 11, name: "disregard_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 12, name: "disregard_global_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 13, name: "disregard_parent_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 14, name: "disregard_exclude_settings", kind: "scalar", T: 8, opt: true }, { no: 15, name: "disregard_search_exclude_settings", kind: "scalar", T: 8, opt: true }, { no: 16, name: "ignore_symlinks", kind: "scalar", T: 8, opt: true }, { no: 17, name: "only_open_editors", kind: "scalar", T: 8, opt: true }, { no: 18, name: "only_file_scheme", kind: "scalar", T: 8, opt: true }, { no: 19, name: "reason", kind: "scalar", T: 9, opt: true }, { no: 20, name: "extra_file_resources", kind: "message", T: di }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto" }), di = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", () => [{ no: 1, name: "extra_file_resources", kind: "scalar", T: 9, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto" }), Ii = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", () => [{ no: 1, name: "exclude_pattern", kind: "message", T: hi, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto" }), hi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "pattern", kind: "message", T: Qi }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto" }), Qi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9, opt: true }, { no: 2, name: "patterns", kind: "scalar", T: 9, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto" }), mi = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", () => [{ no: 1, name: "match_lines", kind: "scalar", T: 5 }, { no: 2, name: "chars_per_line", kind: "scalar", T: 5 }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto" }), Ci = hn.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", () => [{ no: 1, name: "include_markup_input", kind: "scalar", T: 8 }, { no: 2, name: "include_markup_preview", kind: "scalar", T: 8 }, { no: 3, name: "include_code_input", kind: "scalar", T: 8 }, { no: 4, name: "include_output", kind: "scalar", T: 8 }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto" }), Bi = hn.makeMessageType("aiserver.v1.RipgrepSearchResult", () => [{ no: 1, name: "internal", kind: "message", T: pi }]), pi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", () => [{ no: 1, name: "results", kind: "message", T: Ti, repeated: true }, { no: 2, name: "exit", kind: "enum", T: hn.getEnumType(yi), opt: true }, { no: 3, name: "limit_hit", kind: "scalar", T: 8, opt: true }, { no: 4, name: "messages", kind: "message", T: Si, repeated: true }, { no: 5, name: "file_search_stats", kind: "message", T: bi, oneof: "stats" }, { no: 6, name: "text_search_stats", kind: "message", T: _i, oneof: "stats" }]), fi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [{ no: 0, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION", localName: "INFORMATION" }, { no: 2, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING", localName: "WARNING" }]), yi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [{ no: 0, name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL", localName: "NORMAL" }, { no: 2, name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED", localName: "NEW_SEARCH_STARTED" }]), Ti = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", () => [{ no: 1, name: "resource", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: ki, repeated: true }], { localName: "RipgrepSearchResultInternal_IFileMatch" }), ki = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", () => [{ no: 1, name: "match", kind: "message", T: wi, oneof: "result" }, { no: 2, name: "context", kind: "message", T: Ni, oneof: "result" }], { localName: "RipgrepSearchResultInternal_ITextSearchResult" }), wi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "range_locations", kind: "message", T: Di, repeated: true }, { no: 3, name: "preview_text", kind: "scalar", T: 9 }, { no: 4, name: "webview_index", kind: "scalar", T: 5, opt: true }, { no: 5, name: "cell_fragment", kind: "scalar", T: 9, opt: true }], { localName: "RipgrepSearchResultInternal_ITextSearchMatch" }), Ni = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "line_number", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ITextSearchContext" }), Di = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", () => [{ no: 1, name: "source", kind: "message", T: Ri }, { no: 2, name: "preview", kind: "message", T: Ri }], { localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing" }), Ri = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ISearchRange" }), Si = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: hn.getEnumType(fi) }, { no: 3, name: "trusted", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchResultInternal_ITextSearchCompleteMessage" }), bi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", () => [{ no: 1, name: "from_cache", kind: "scalar", T: 8 }, { no: 2, name: "search_engine_stats", kind: "message", T: Li, oneof: "detail_stats" }, { no: 3, name: "cached_search_stats", kind: "message", T: Ui, oneof: "detail_stats" }, { no: 4, name: "file_search_provider_stats", kind: "message", T: Mi, oneof: "detail_stats" }, { no: 5, name: "result_count", kind: "scalar", T: 5 }, { no: 6, name: "type", kind: "enum", T: hn.getEnumType(Fi) }, { no: 7, name: "sorting_time", kind: "scalar", T: 5, opt: true }], { localName: "RipgrepSearchResultInternal_IFileSearchStats" }), Fi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [{ no: 0, name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER", localName: "FILE_SEARCH_PROVIDER" }, { no: 2, name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS", localName: "SEARCH_PROCESS" }]), _i = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", () => [{ no: 1, name: "type", kind: "enum", T: hn.getEnumType(vi) }], { localName: "RipgrepSearchResultInternal_ITextSearchStats" }), vi = hn.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [{ no: 0, name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER", localName: "TEXT_SEARCH_PROVIDER" }, { no: 2, name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS", localName: "SEARCH_PROCESS" }, { no: 3, name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER", localName: "AI_TEXT_SEARCH_PROVIDER" }]), Li = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", () => [{ no: 1, name: "file_walk_time", kind: "scalar", T: 5 }, { no: 2, name: "directories_walked", kind: "scalar", T: 5 }, { no: 3, name: "files_walked", kind: "scalar", T: 5 }, { no: 4, name: "cmd_time", kind: "scalar", T: 5 }, { no: 5, name: "cmd_result_count", kind: "scalar", T: 5, opt: true }], { localName: "RipgrepSearchResultInternal_ISearchEngineStats" }), Ui = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", () => [{ no: 1, name: "cache_was_resolved", kind: "scalar", T: 8 }, { no: 2, name: "cache_lookup_time", kind: "scalar", T: 5 }, { no: 3, name: "cache_filter_time", kind: "scalar", T: 5 }, { no: 4, name: "cache_entry_count", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ICachedSearchStats" }), Mi = hn.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", () => [{ no: 1, name: "provider_time", kind: "scalar", T: 5 }, { no: 2, name: "post_process_time", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_IFileSearchProviderStats" }), Oi = hn.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", () => [{ no: 1, name: "repository_info", kind: "message", T: $s }, { no: 2, name: "code_results", kind: "message", T: zs, repeated: true }, { no: 3, name: "query", kind: "scalar", T: 9 }, { no: 4, name: "pr_references", kind: "message", T: _c, repeated: true }, { no: 5, name: "pr_search_on", kind: "scalar", T: 8, opt: true }]), Ji = hn.makeMessageType("aiserver.v1.MissingFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "missing_reason", kind: "enum", T: hn.getEnumType(Yi) }, { no: 3, name: "num_lines", kind: "scalar", T: 5, opt: true }]), Yi = hn.makeEnum("aiserver.v1.MissingFile.MissingReason", [{ no: 0, name: "MISSING_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MISSING_REASON_TOO_LARGE", localName: "TOO_LARGE" }, { no: 2, name: "MISSING_REASON_NOT_FOUND", localName: "NOT_FOUND" }]), Pi = hn.makeMessageType("aiserver.v1.Knowledge", () => [{ no: 1, name: "knowledge", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), Gi = hn.makeMessageType("aiserver.v1.ToolPullRequestResult", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "full_pr_contents", kind: "scalar", T: 9 }, { no: 3, name: "score", kind: "scalar", T: 2 }, { no: 4, name: "title", kind: "scalar", T: 9, opt: true }, { no: 5, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 6, name: "pr_number", kind: "scalar", T: 13, opt: true }, { no: 7, name: "changed_files", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "author", kind: "scalar", T: 9, opt: true }, { no: 9, name: "date", kind: "scalar", T: 9, opt: true }]), Vi = hn.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", () => [{ no: 1, name: "code_results", kind: "message", T: zs, repeated: true }, { no: 2, name: "all_files", kind: "message", T: cs, repeated: true }, { no: 3, name: "missing_files", kind: "message", T: Ji, repeated: true }, { no: 4, name: "knowledge_results", kind: "message", T: Pi, repeated: true }, { no: 5, name: "pr_results", kind: "message", T: Gi, repeated: true }, { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true }, { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }]), xi = hn.makeMessageType("aiserver.v1.SemanticSearchFullParams", () => [{ no: 1, name: "repository_info", kind: "message", T: $s }, { no: 2, name: "query", kind: "scalar", T: 9 }, { no: 3, name: "include_pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "exclude_pattern", kind: "scalar", T: 9, opt: true }, { no: 5, name: "top_k", kind: "scalar", T: 5 }, { no: 6, name: "pr_references", kind: "message", T: _c, repeated: true }, { no: 7, name: "pr_search_on", kind: "scalar", T: 8, opt: true }, { no: 8, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 9, name: "code_results", kind: "message", T: zs, repeated: true }]), Hi = hn.makeMessageType("aiserver.v1.SemanticSearchFullResult", () => [{ no: 1, name: "code_results", kind: "message", T: zs, repeated: true }, { no: 2, name: "all_files", kind: "message", T: cs, repeated: true }, { no: 3, name: "missing_files", kind: "message", T: Ji, repeated: true }, { no: 4, name: "knowledge_results", kind: "message", T: Pi, repeated: true }, { no: 5, name: "pr_results", kind: "message", T: Gi, repeated: true }, { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true }, { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }]), qi = hn.makeMessageType("aiserver.v1.DeleteFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), Wi = hn.makeMessageType("aiserver.v1.DeleteFileResult", () => [{ no: 1, name: "rejected", kind: "scalar", T: 8 }, { no: 2, name: "file_non_existent", kind: "scalar", T: 8 }, { no: 3, name: "file_deleted_successfully", kind: "scalar", T: 8 }]), ji = hn.makeMessageType("aiserver.v1.Range", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "start_character", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "end_character", kind: "scalar", T: 5 }]), Xi = hn.makeMessageType("aiserver.v1.MatchRange", () => [{ no: 1, name: "start", kind: "scalar", T: 5 }, { no: 2, name: "end", kind: "scalar", T: 5 }]), Ki = hn.makeMessageType("aiserver.v1.GotodefParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "symbol", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }]), Zi = hn.makeMessageType("aiserver.v1.GotodefDefinition", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "fully_qualified_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "symbol_kind", kind: "scalar", T: 9, opt: true }, { no: 4, name: "start_line", kind: "scalar", T: 5 }, { no: 5, name: "end_line", kind: "scalar", T: 5 }, { no: 6, name: "code_context_lines", kind: "scalar", T: 9, repeated: true }]), zi = hn.makeMessageType("aiserver.v1.GotodefResult", () => [{ no: 1, name: "definitions", kind: "message", T: Zi, repeated: true }]), $i = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult", () => [{ no: 1, name: "parsing_failed", kind: "scalar", T: 8 }, { no: 2, name: "executable_commands", kind: "message", T: Ac, repeated: true }, { no: 3, name: "has_redirects", kind: "scalar", T: 8 }, { no: 4, name: "has_command_substitution", kind: "scalar", T: 8 }, { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true }, { no: 6, name: "redirects", kind: "message", T: tc, repeated: true }]), ec = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommandArg" }), Ac = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "message", T: ec, repeated: true }, { no: 3, name: "full_text", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommand" }), tc = hn.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", () => [{ no: 1, name: "operator", kind: "scalar", T: 9 }, { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true }, { no: 3, name: "target_node_type", kind: "scalar", T: 9 }, { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }], { localName: "ShellCommandParsingResult_Redirect" }), nc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 3, name: "new_session", kind: "scalar", T: 8, opt: true }, { no: 4, name: "options", kind: "message", T: rc, opt: true }, { no: 5, name: "is_background", kind: "scalar", T: 8 }, { no: 6, name: "require_user_approval", kind: "scalar", T: 8 }, { no: 7, name: "parsing_result", kind: "message", T: $i, opt: true }, { no: 8, name: "idle_timeout_seconds", kind: "scalar", T: 5, opt: true }, { no: 9, name: "requested_sandbox_policy", kind: "message", T: fs, opt: true }, { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true }, { no: 11, name: "command_description", kind: "scalar", T: 9, opt: true }, { no: 12, name: "classifier_result", kind: "message", T: ks, opt: true }]), rc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", () => [{ no: 1, name: "timeout", kind: "scalar", T: 5, opt: true }, { no: 2, name: "skip_ai_check", kind: "scalar", T: 8, opt: true }, { no: 3, name: "command_run_timeout_ms", kind: "scalar", T: 5, opt: true }, { no: 4, name: "command_change_check_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 5, name: "ai_finish_check_max_attempts", kind: "scalar", T: 5, opt: true }, { no: 6, name: "ai_finish_check_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 7, name: "delayer_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "ai_check_for_hangs", kind: "scalar", T: 8, opt: true }], { localName: "RunTerminalCommandV2Params_ExecutionOptions" }), oc = hn.makeMessageType("aiserver.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), sc = hn.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5 }, { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 4, name: "popped_out_into_background", kind: "scalar", T: 8 }, { no: 5, name: "is_running_in_background", kind: "scalar", T: 8 }, { no: 6, name: "not_interrupted", kind: "scalar", T: 8 }, { no: 7, name: "resulting_working_directory", kind: "scalar", T: 9 }, { no: 8, name: "did_user_change", kind: "scalar", T: 8 }, { no: 9, name: "ended_reason", kind: "enum", T: hn.getEnumType(Na) }, { no: 10, name: "exit_code_v2", kind: "scalar", T: 5, opt: true }, { no: 11, name: "updated_command", kind: "scalar", T: 9, opt: true }, { no: 12, name: "output_raw", kind: "scalar", T: 9 }, { no: 13, name: "human_review_v2", kind: "message", T: Ai, opt: true }, { no: 14, name: "effective_sandbox_policy", kind: "message", T: fs, opt: true }, { no: 15, name: "terminal_instance_id", kind: "scalar", T: 5, opt: true }, { no: 16, name: "output_location", kind: "message", T: oc, opt: true }, { no: 17, name: "terminal_instance_path", kind: "scalar", T: 9, opt: true }, { no: 18, name: "background_shell_id", kind: "scalar", T: 13, opt: true }]), ac = hn.makeMessageType("aiserver.v1.WebSearchParams", () => [{ no: 1, name: "search_term", kind: "scalar", T: 9 }]), ic = hn.makeMessageType("aiserver.v1.WebSearchResult", () => [{ no: 1, name: "references", kind: "message", T: cc, repeated: true }, { no: 2, name: "is_final", kind: "scalar", T: 8, opt: true }, { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true }]), cc = hn.makeMessageType("aiserver.v1.WebSearchResult.WebReference", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }], { localName: "WebSearchResult_WebReference" }), lc = hn.makeMessageType("aiserver.v1.MCPParams", () => [{ no: 1, name: "tools", kind: "message", T: gc, repeated: true }, { no: 2, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true }]), gc = hn.makeMessageType("aiserver.v1.MCPParams.Tool", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "parameters", kind: "scalar", T: 9 }, { no: 4, name: "server_name", kind: "scalar", T: 9 }, { no: 5, name: "transcript_display", kind: "message", T: Ec, opt: true }], { localName: "MCPParams_Tool" }), Ec = hn.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", () => [{ no: 1, name: "loading", kind: "scalar", T: 9 }, { no: 2, name: "success", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }], { localName: "MCPParams_TranscriptDisplay" }), uc = hn.makeMessageType("aiserver.v1.MCPResult", () => [{ no: 1, name: "selected_tool", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "scalar", T: 9 }]), dc = hn.makeMessageType("aiserver.v1.ListMcpResourcesParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }]), Ic = hn.makeMessageType("aiserver.v1.ListMcpResourcesResult", () => [{ no: 1, name: "resources", kind: "message", T: hc, repeated: true }]), hc = hn.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "server", kind: "scalar", T: 9 }, { no: 6, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "ListMcpResourcesResult_MCPResource" }), Qc = hn.makeMessageType("aiserver.v1.ReadMcpResourceParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }]), mc = hn.makeMessageType("aiserver.v1.ReadMcpResourceResult", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" }, { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" }, { no: 7, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), Cc = hn.makeMessageType("aiserver.v1.CallMcpToolParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "tool_args", kind: "message", T: Ao }]), Bc = hn.makeMessageType("aiserver.v1.CallMcpToolResult", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "result", kind: "message", T: Ao }]), pc = hn.makeMessageType("aiserver.v1.GetMcpToolsParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true }]), fc = hn.makeMessageType("aiserver.v1.GetMcpToolsResult", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }]), yc = hn.makeMessageType("aiserver.v1.SearchSymbolsParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), Tc = hn.makeMessageType("aiserver.v1.SearchSymbolsResult", () => [{ no: 1, name: "matches", kind: "message", T: kc, repeated: true }, { no: 2, name: "rejected", kind: "scalar", T: 8, opt: true }]), kc = hn.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "range", kind: "message", T: ji }, { no: 4, name: "secondary_text", kind: "scalar", T: 9 }, { no: 5, name: "label_matches", kind: "message", T: Xi, repeated: true }, { no: 6, name: "description_matches", kind: "message", T: Xi, repeated: true }, { no: 7, name: "score", kind: "scalar", T: 1 }], { localName: "SearchSymbolsResult_SymbolMatch" }), wc = hn.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", () => [{ no: 1, name: "proposed_followup", kind: "scalar", T: 9 }, { no: 2, name: "bc_id", kind: "scalar", T: 9 }]), Nc = hn.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", () => [{ no: 1, name: "proposed_followup", kind: "scalar", T: 9 }, { no: 2, name: "is_sent", kind: "scalar", T: 8 }]), Dc = hn.makeMessageType("aiserver.v1.KnowledgeBaseParams", () => [{ no: 1, name: "knowledge_to_store", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "existing_knowledge_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "action", kind: "scalar", T: 9, opt: true }]), Rc = hn.makeMessageType("aiserver.v1.KnowledgeBaseResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "confirmation_message", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 9 }]), Sc = hn.makeMessageType("aiserver.v1.FetchPullRequestParams", () => [{ no: 1, name: "pull_number_or_commit_hash", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9, opt: true }, { no: 3, name: "is_github", kind: "scalar", T: 8, opt: true }]), bc = hn.makeMessageType("aiserver.v1.FetchPullRequestResult", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 13 }, { no: 3, name: "title", kind: "scalar", T: 9 }, { no: 4, name: "body", kind: "scalar", T: 9 }, { no: 5, name: "author", kind: "scalar", T: 9 }, { no: 6, name: "date", kind: "scalar", T: 9 }, { no: 7, name: "diff", kind: "scalar", T: 9 }, { no: 8, name: "sha", kind: "scalar", T: 9, opt: true }, { no: 9, name: "external_link", kind: "scalar", T: 9, opt: true }, { no: 10, name: "url", kind: "scalar", T: 9, opt: true }, { no: 11, name: "comments", kind: "message", T: Fc, repeated: true }, { no: 12, name: "labels", kind: "scalar", T: 9, repeated: true }, { no: 13, name: "assignees", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "is_issue", kind: "scalar", T: 8, opt: true }, { no: 15, name: "state", kind: "scalar", T: 9, opt: true }, { no: 16, name: "prompt_connect_github", kind: "scalar", T: 8, opt: true }]), Fc = hn.makeMessageType("aiserver.v1.IssueComment", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "author", kind: "scalar", T: 9, opt: true }, { no: 4, name: "created_at", kind: "scalar", T: 9 }, { no: 5, name: "updated_at", kind: "scalar", T: 9 }, { no: 6, name: "author_association", kind: "scalar", T: 9, opt: true }]), _c = hn.makeMessageType("aiserver.v1.PullRequestReference", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "score", kind: "scalar", T: 2 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 5, name: "pr_number", kind: "scalar", T: 13, opt: true }, { no: 6, name: "author", kind: "scalar", T: 9, opt: true }, { no: 7, name: "date", kind: "scalar", T: 9, opt: true }, { no: 8, name: "changed_files", kind: "scalar", T: 9, repeated: true }]), vc = hn.makeMessageType("aiserver.v1.DeepSearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), Lc = hn.makeMessageType("aiserver.v1.DeepSearchResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "result", kind: "scalar", T: 9 }]), Uc = hn.makeMessageType("aiserver.v1.CreateDiagramParams", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), Mc = hn.makeMessageType("aiserver.v1.CreateDiagramResult", () => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }]), Oc = hn.makeMessageType("aiserver.v1.FixLintsParams", []), Jc = hn.makeMessageType("aiserver.v1.FixLintsResult", () => [{ no: 1, name: "file_results", kind: "message", T: Yc, repeated: true }]), Yc = hn.makeMessageType("aiserver.v1.FixLintsResult.FileResult", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "message", T: ja }, { no: 3, name: "is_applied", kind: "scalar", T: 8 }, { no: 4, name: "apply_failed", kind: "scalar", T: 8 }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "linter_errors", kind: "message", T: Es, repeated: true }], { localName: "FixLintsResult_FileResult" }), Pc = hn.makeMessageType("aiserver.v1.ReadLintsParams", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "paths", kind: "scalar", T: 9, repeated: true }]), Gc = hn.makeMessageType("aiserver.v1.ReadLintsResult", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "linter_errors", kind: "message", T: Es, repeated: true }, { no: 3, name: "linter_errors_by_file", kind: "message", T: us, repeated: true }]), Vc = hn.makeMessageType("aiserver.v1.TaskParams", () => [{ no: 1, name: "task_description", kind: "scalar", T: 9 }, { no: 4, name: "task_title", kind: "scalar", T: 9 }, { no: 2, name: "async", kind: "scalar", T: 8, opt: true }, { no: 3, name: "allowed_write_directories", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "model_override", kind: "scalar", T: 9, opt: true }, { no: 6, name: "max_mode_override", kind: "scalar", T: 8, opt: true }, { no: 7, name: "default_expanded_while_running", kind: "scalar", T: 8, opt: true }]), xc = hn.makeMessageType("aiserver.v1.TaskResult", () => [{ no: 1, name: "completed_task_result", kind: "message", T: Hc, oneof: "result" }, { no: 2, name: "async_task_result", kind: "message", T: qc, oneof: "result" }]), Hc = hn.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "file_results", kind: "message", T: Yc, repeated: true }, { no: 3, name: "user_aborted", kind: "scalar", T: 8 }, { no: 4, name: "subagent_errored", kind: "scalar", T: 8 }], { localName: "TaskResult_CompletedTaskResult" }), qc = hn.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "user_aborted", kind: "scalar", T: 8 }, { no: 3, name: "subagent_errored", kind: "scalar", T: 8 }], { localName: "TaskResult_AsyncTaskResult" }), Wc = hn.makeMessageType("aiserver.v1.TaskV2Params", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "subagent_type", kind: "scalar", T: 9 }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "mode", kind: "enum", T: hn.getEnumType(ea) }]), jc = hn.makeMessageType("aiserver.v1.TaskV2Result", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "is_background", kind: "scalar", T: 8 }, { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }]), Xc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchParams", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true }, { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true }, { no: 7, name: "context", kind: "scalar", T: 5, opt: true }, { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true }, { no: 9, name: "type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true }, { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true }, { no: 12, name: "sort", kind: "scalar", T: 9, opt: true }, { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true }, { no: 14, name: "ignore_globs", kind: "scalar", T: 9, repeated: true }, { no: 15, name: "offset", kind: "scalar", T: 5, opt: true }]), Kc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchResult", () => [{ no: 1, name: "success", kind: "message", T: zc, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Zc, oneof: "result" }]), Zc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), zc = hn.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "output_mode", kind: "scalar", T: 9 }, { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: $c } }, { no: 5, name: "active_editor_result", kind: "message", T: $c, opt: true }]), $c = hn.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", () => [{ no: 1, name: "count", kind: "message", T: el, oneof: "result" }, { no: 2, name: "files", kind: "message", T: tl, oneof: "result" }, { no: 3, name: "content", kind: "message", T: rl, oneof: "result" }]), el = hn.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", () => [{ no: 1, name: "counts", kind: "message", T: Al, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_matches", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }]), Al = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }, { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true }, { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }]), tl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "client_truncated", kind: "scalar", T: 8 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 5, name: "files_with_meta", kind: "message", T: nl, repeated: true }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), nl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "is_dirty", kind: "scalar", T: 8 }, { no: 3, name: "is_out_of_workspace", kind: "scalar", T: 8 }, { no: 4, name: "absolute_path", kind: "scalar", T: 9, opt: true }], { localName: "RipgrepRawSearchFilesResult_FileEntry" }), rl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", () => [{ no: 1, name: "matches", kind: "message", T: ol, repeated: true }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "total_matched_lines", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), ol = hn.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "matches", kind: "message", T: sl, repeated: true }, { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true }, { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }]), sl = hn.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "content_truncated", kind: "scalar", T: 8 }, { no: 4, name: "is_context_line", kind: "scalar", T: 8 }]), al = hn.makeMessageType("aiserver.v1.AwaitTaskParams", () => [{ no: 1, name: "ids", kind: "scalar", T: 9, repeated: true }]), il = hn.makeMessageType("aiserver.v1.AwaitTaskResult", () => [{ no: 1, name: "task_results", kind: "message", T: cl, repeated: true }, { no: 2, name: "missing_task_ids", kind: "scalar", T: 9, repeated: true }]), cl = hn.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "message", T: Hc }], { localName: "AwaitTaskResult_TaskResultItem" }), ll = hn.makeMessageType("aiserver.v1.TodoReadParams", () => [{ no: 1, name: "read", kind: "scalar", T: 8 }]), gl = hn.makeMessageType("aiserver.v1.TodoItem", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 9 }, { no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: true }]), El = hn.makeMessageType("aiserver.v1.TodoReadResult", () => [{ no: 1, name: "todos", kind: "message", T: gl, repeated: true }]), ul = hn.makeMessageType("aiserver.v1.TodoWriteParams", () => [{ no: 1, name: "todos", kind: "message", T: gl, repeated: true }, { no: 2, name: "merge", kind: "scalar", T: 8 }]), dl = hn.makeMessageType("aiserver.v1.TodoWriteResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "ready_task_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "needs_in_progress_todos", kind: "scalar", T: 8 }, { no: 4, name: "final_todos", kind: "message", T: gl, repeated: true }, { no: 5, name: "initial_todos", kind: "message", T: gl, repeated: true }, { no: 6, name: "was_merge", kind: "scalar", T: 8 }]), Il = hn.makeMessageType("aiserver.v1.ListDirV2Params", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9 }, { no: 2, name: "ignore_globs", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "should_enrich_terminal_metadata", kind: "scalar", T: 8, opt: true }]), hl = hn.makeMessageType("aiserver.v1.ListDirV2Result", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: Ql }]), Ql = hn.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "children_dirs", kind: "message", T: Ql, repeated: true }, { no: 3, name: "children_files", kind: "message", T: ml, repeated: true }, { no: 4, name: "children_were_processed", kind: "scalar", T: 8 }, { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: { kind: "scalar", T: 5 } }, { no: 6, name: "num_files", kind: "scalar", T: 5 }], { localName: "ListDirV2Result_DirectoryTreeNode" }), ml = hn.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "terminal_metadata", kind: "message", T: Aa, opt: true }], { localName: "ListDirV2Result_DirectoryTreeNode_File" }), Cl = hn.makeMessageType("aiserver.v1.ReadFileV2Params", () => [{ no: 1, name: "target_file", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 4, name: "chars_limit", kind: "scalar", T: 5 }, { no: 5, name: "effective_uri", kind: "scalar", T: 9 }, { no: 6, name: "enable_line_numbers", kind: "scalar", T: 8, opt: true }]), Bl = hn.makeMessageType("aiserver.v1.ReadFileV2Result", () => [{ no: 1, name: "contents", kind: "scalar", T: 9, opt: true }, { no: 2, name: "num_characters_in_requested_range", kind: "scalar", T: 5 }, { no: 3, name: "offset_is_bigger_than_number_of_lines_in_file", kind: "scalar", T: 8, opt: true }, { no: 4, name: "total_lines_in_file", kind: "scalar", T: 5, opt: true }, { no: 5, name: "matching_cursor_rules", kind: "message", T: ds, repeated: true }, { no: 6, name: "images", kind: "message", T: Qs, repeated: true }]), pl = hn.makeMessageType("aiserver.v1.GlobFileSearchParams", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9 }, { no: 2, name: "glob_pattern", kind: "scalar", T: 9 }]), fl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult", () => [{ no: 1, name: "directories", kind: "message", T: Tl, repeated: true }]), yl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult.File", () => [{ no: 1, name: "rel_path", kind: "scalar", T: 9 }], { localName: "GlobFileSearchResult_File" }), Tl = hn.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "files", kind: "message", T: yl, repeated: true }, { no: 3, name: "total_files", kind: "scalar", T: 5 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }], { localName: "GlobFileSearchResult_Directory" }), kl = hn.makeMessageType("aiserver.v1.Step", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "instructions", kind: "scalar", T: 9 }, { no: 5, name: "prerequisites", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "sub_composer_id", kind: "scalar", T: 9 }]), wl = hn.makeMessageType("aiserver.v1.PlanPhase", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: gl, repeated: true }]), Nl = hn.makeMessageType("aiserver.v1.CreatePlanParams", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "summary", kind: "scalar", T: 9 }, { no: 4, name: "steps", kind: "message", T: kl, repeated: true }, { no: 5, name: "old_str", kind: "scalar", T: 9 }, { no: 6, name: "new_str", kind: "scalar", T: 9 }, { no: 7, name: "name", kind: "scalar", T: 9 }, { no: 8, name: "todos", kind: "message", T: gl, repeated: true }, { no: 9, name: "overview", kind: "scalar", T: 9 }, { no: 10, name: "is_spec", kind: "scalar", T: 8 }, { no: 11, name: "is_project", kind: "scalar", T: 8 }, { no: 12, name: "phases", kind: "message", T: wl, repeated: true }]), Dl = hn.makeMessageType("aiserver.v1.CreatePlanResult", () => [{ no: 1, name: "accepted", kind: "message", T: Rl, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Sl, oneof: "result" }, { no: 3, name: "modified", kind: "message", T: bl, oneof: "result" }, { no: 4, name: "plan_uri", kind: "scalar", T: 9 }]), Rl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", () => [{ no: 1, name: "final_todos", kind: "message", T: gl, repeated: true }], { localName: "CreatePlanResult_Accepted" }), Sl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], { localName: "CreatePlanResult_Rejected" }), bl = hn.makeMessageType("aiserver.v1.CreatePlanResult.Modified", () => [{ no: 1, name: "new_plan", kind: "scalar", T: 9 }, { no: 2, name: "final_todos", kind: "message", T: gl, repeated: true }], { localName: "CreatePlanResult_Modified" }), Fl = hn.makeMessageType("aiserver.v1.ReadProjectParams", []), _l = hn.makeMessageType("aiserver.v1.ReadProjectResult", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }]), vl = hn.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", () => [{ no: 1, name: "old_string", kind: "scalar", T: 9 }, { no: 2, name: "new_string", kind: "scalar", T: 9 }]), Ll = hn.makeMessageType("aiserver.v1.UpdateProjectParams", () => [{ no: 1, name: "string_replacements", kind: "message", T: vl, repeated: true }, { no: 2, name: "summary", kind: "scalar", T: 9 }]), Ul = hn.makeMessageType("aiserver.v1.UpdateProjectResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "updated_plan", kind: "scalar", T: 9 }]), Ml = hn.makeMessageType("aiserver.v1.AskQuestionParams", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "questions", kind: "message", T: Ol, repeated: true }, { no: 3, name: "run_async", kind: "scalar", T: 8 }]), Ol = hn.makeMessageType("aiserver.v1.AskQuestionParams.Question", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "options", kind: "message", T: Jl, repeated: true }, { no: 4, name: "allow_multiple", kind: "scalar", T: 8 }], { localName: "AskQuestionParams_Question" }), Jl = hn.makeMessageType("aiserver.v1.AskQuestionParams.Option", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "AskQuestionParams_Option" }), Yl = hn.makeMessageType("aiserver.v1.AskQuestionResult", () => [{ no: 1, name: "answers", kind: "message", T: Pl, repeated: true }, { no: 2, name: "is_async", kind: "scalar", T: 8 }]), Pl = hn.makeMessageType("aiserver.v1.AskQuestionResult.Answer", () => [{ no: 1, name: "question_id", kind: "scalar", T: 9 }, { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "freeform_text", kind: "scalar", T: 9, opt: true }], { localName: "AskQuestionResult_Answer" }), Gl = hn.makeMessageType("aiserver.v1.SwitchModeParams", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }, { no: 3, name: "explanation", kind: "scalar", T: 9, opt: true }]), Vl = hn.makeMessageType("aiserver.v1.SwitchModeResult", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }, { no: 3, name: "auto_approved", kind: "scalar", T: 8 }, { no: 4, name: "user_approved", kind: "scalar", T: 8 }]), xl = hn.makeMessageType("aiserver.v1.ComputerUseParams", () => [{ no: 1, name: "actions", kind: "message", T: ia, repeated: true }]), Hl = hn.makeMessageType("aiserver.v1.ComputerUseResult", () => [{ no: 1, name: "success", kind: "message", T: Ba, oneof: "result" }, { no: 2, name: "error", kind: "message", T: pa, oneof: "result" }]), ql = hn.makeMessageType("aiserver.v1.WebFetchParams", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), Wl = hn.makeMessageType("aiserver.v1.WebFetchResult", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "markdown", kind: "scalar", T: 9, opt: true }, { no: 3, name: "error", kind: "scalar", T: 9, opt: true }]), jl = hn.makeMessageType("aiserver.v1.ReportBugfixResultsParams", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: ya, repeated: true }]), Xl = hn.makeMessageType("aiserver.v1.ReportBugfixResultsResult", () => [{ no: 1, name: "success", kind: "message", T: Ta, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ka, oneof: "result" }]), Kl = hn.makeMessageType("aiserver.v1.McpAuthParams", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }]), Zl = hn.makeMessageType("aiserver.v1.McpAuthResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), zl = hn.makeMessageType("aiserver.v1.ConnectScmParams", () => [{ no: 1, name: "github", kind: "message", T: $l }]), $l = hn.makeMessageType("aiserver.v1.ConnectScmGithub", () => [{ no: 1, name: "repository", kind: "message", T: eg }, { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }]), eg = hn.makeMessageType("aiserver.v1.ConnectScmGithubRepository", () => [{ no: 1, name: "owner", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9 }]), Ag = hn.makeMessageType("aiserver.v1.ConnectScmResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), tg = hn.makeMessageType("aiserver.v1.SwTrackModelRequest", () => [{ no: 1, name: "absolute_path", kind: "scalar", T: 9 }]), ng = hn.makeMessageType("aiserver.v1.SwTrackModelResponse", []), rg = hn.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorRequest", () => [{ no: 1, name: "diagnostics_args", kind: "message", T: Ho }]), og = hn.makeMessageType("aiserver.v1.SwCallDiagnosticsExecutorResponse", () => [{ no: 1, name: "diagnostics_result", kind: "message", T: qo }]), sg = hn.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsRequest", () => [{ no: 1, name: "absolute_path", kind: "scalar", T: 9 }, { no: 2, name: "new_contents", kind: "scalar", T: 9 }]), ag = hn.makeMessageType("aiserver.v1.SwWriteTextFileWithLintsResponse", () => [{ no: 1, name: "new_linter_errors", kind: "message", T: Es, repeated: true }]), ig = hn.makeMessageType("aiserver.v1.SwGetExplicitContextRequest", []), cg = hn.makeMessageType("aiserver.v1.SwGetExplicitContextResponse", () => [{ no: 1, name: "explicit_context", kind: "message", T: Is }]), lg = hn.makeMessageType("aiserver.v1.SwGetEnvironmentInfoRequest", []), gg = hn.makeMessageType("aiserver.v1.SwGetEnvironmentInfoResponse", () => [{ no: 1, name: "environment_info", kind: "message", T: As }]), Eg = hn.makeMessageType("aiserver.v1.SwGetLinterErrorsRequest", () => [{ no: 1, name: "absolute_paths", kind: "scalar", T: 9, repeated: true }]), ug = hn.makeMessageType("aiserver.v1.SwGetLinterErrorsResponse", () => [{ no: 1, name: "linter_errors", kind: "message", T: us, repeated: true }]), dg = hn.makeMessageType("aiserver.v1.SwGetMcpToolsRequest", () => [{ no: 1, name: "browser_integration_preference", kind: "scalar", T: 9, opt: true }]), Ig = hn.makeMessageType("aiserver.v1.SwGetMcpToolsResponse", () => [{ no: 1, name: "tools", kind: "message", T: gc, repeated: true }]), hg = hn.makeMessageType("aiserver.v1.SwCallClientSideV2ToolRequest", () => [{ no: 1, name: "tool_call", kind: "message", T: Ua }, { no: 2, name: "composer_id", kind: "scalar", T: 9 }]), Qg = hn.makeMessageType("aiserver.v1.SwCallClientSideV2ToolResponse", () => [{ no: 1, name: "tool_result", kind: "message", T: Ma }]), mg = hn.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest", () => [{ no: 1, name: "include_pattern", kind: "scalar", T: 9, opt: true }, { no: 2, name: "exclude_pattern", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path_encryption_key", kind: "scalar", T: 9 }, { no: 4, name: "repository_info", kind: "message", T: $s }]), Cg = hn.makeMessageType("aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse", () => [{ no: 1, name: "glob_filter", kind: "scalar", T: 9, opt: true }, { no: 2, name: "not_glob_filter", kind: "scalar", T: 9, opt: true }]), Bg = hn.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenRequest", () => [{ no: 1, name: "access_token", kind: "scalar", T: 9 }]), pg = hn.makeMessageType("aiserver.v1.SwProvideTemporaryAccessTokenResponse", []), fg = hn.makeMessageType("aiserver.v1.ShadowHealthCheckRequest", []), yg = hn.makeMessageType("aiserver.v1.ShadowHealthCheckResponse", []), Tg = hn.makeMessageType("aiserver.v1.SwSyncIndexRequest", () => [{ no: 1, name: "repository_info", kind: "message", T: $s }, { no: 2, name: "path_encryption_key", kind: "scalar", T: 9 }, { no: 3, name: "indexing_progress_threshold", kind: "scalar", T: 1, opt: true }]), kg = hn.makeMessageType("aiserver.v1.SwSyncIndexResponse", []), wg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest", () => [{ no: 1, name: "files", kind: "message", T: Ng, repeated: true }, { no: 2, name: "include_quick_fixes", kind: "scalar", T: 8 }, { no: 3, name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy", kind: "scalar", T: 8 }]), Ng = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "initial_content", kind: "scalar", T: 9 }, { no: 3, name: "final_content", kind: "scalar", T: 9 }, { no: 4, name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model", kind: "message", T: Dg, opt: true }], { localName: "GetLintsForChangeRequest_File" }), Dg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.RangeCollection", () => [{ no: 1, name: "ranges", kind: "message", T: Rg, repeated: true }], { localName: "GetLintsForChangeRequest_File_RangeCollection" }), Rg = hn.makeMessageType("aiserver.v1.GetLintsForChangeRequest.File.IRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }], { localName: "GetLintsForChangeRequest_File_IRange" }), Sg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse", () => [{ no: 1, name: "lints", kind: "message", T: bg, repeated: true }]), bg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 }, { no: 9, name: "quick_fixes", kind: "message", T: Fg, repeated: true }], { localName: "GetLintsForChangeResponse_Lint" }), Fg = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "scalar", T: 9 }, { no: 3, name: "is_preferred", kind: "scalar", T: 8 }, { no: 4, name: "edits", kind: "message", T: _g, repeated: true }], { localName: "GetLintsForChangeResponse_Lint_QuickFix" }), _g = hn.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 }], { localName: "GetLintsForChangeResponse_Lint_QuickFix_Edit" }), vg = { typeName: "aiserver.v1.ShadowWorkspaceService", methods: { getLintsForChange: { name: "GetLintsForChange", I: wg, O: Sg, kind: mn.Unary }, shadowHealthCheck: { name: "ShadowHealthCheck", I: fg, O: yg, kind: mn.Unary }, swSyncIndex: { name: "SwSyncIndex", I: Tg, O: kg, kind: mn.Unary }, swProvideTemporaryAccessToken: { name: "SwProvideTemporaryAccessToken", I: Bg, O: pg, kind: mn.Unary }, swCompileRepoIncludeExcludePatterns: { name: "SwCompileRepoIncludeExcludePatterns", I: mg, O: Cg, kind: mn.Unary }, swCallClientSideV2Tool: { name: "SwCallClientSideV2Tool", I: hg, O: Qg, kind: mn.Unary }, swGetExplicitContext: { name: "SwGetExplicitContext", I: ig, O: cg, kind: mn.Unary }, swWriteTextFileWithLints: { name: "SwWriteTextFileWithLints", I: sg, O: ag, kind: mn.Unary }, swGetEnvironmentInfo: { name: "SwGetEnvironmentInfo", I: lg, O: gg, kind: mn.Unary }, swGetLinterErrors: { name: "SwGetLinterErrors", I: Eg, O: ug, kind: mn.Unary }, swGetMcpTools: { name: "SwGetMcpTools", I: dg, O: Ig, kind: mn.Unary }, swTrackModel: { name: "SwTrackModel", I: tg, O: ng, kind: mn.Unary }, swCallDiagnosticsExecutor: { name: "SwCallDiagnosticsExecutor", I: rg, O: og, kind: mn.Unary } } }, Lg = require("fs"), Ug = require("path");
    class Mg {
      constructor(e3, A3) {
        this.socketPath = e3, this.shadowServer = A3;
      }
      async start() {
        A2.info("Starting shadow server", { socketPath: this.socketPath });
        if (!("win32" === process.platform)) {
          const e4 = Ug.dirname(this.socketPath);
          Lg.existsSync(e4) || (Lg.mkdirSync(e4, { recursive: true }), A2.info("Created directory for socket path", { directory: e4 })), Lg.existsSync(this.socketPath) && (Lg.unlinkSync(this.socketPath), A2.info("Deleted existing socket file", { socketPath: this.socketPath }));
        }
        const e3 = vA({ routes: (e4) => e4.service(vg, this.shadowServer) });
        this.server = UA.createServer(e3), this.server.listen(this.socketPath), A2.info("Listening on socket path", { socketPath: this.socketPath });
      }
      dispose() {
        this.server?.close();
      }
    }
    class Og {
      async start(e3, t2) {
        void 0 === this.server ? (this.server = new Mg(e3, t2), await this.server.start()) : A2.warn("Shadow server already started; not starting again.");
      }
      dispose() {
        void 0 !== this.server && this.server.dispose();
      }
    }
    function Jg(A3) {
      const t2 = new Og();
      A3.subscriptions.push(t2), A3.subscriptions.push(e2.cursor.registerShadowServerProvider(t2));
    }
  })();
  var r = exports;
  for (var o in n) r[o] = n[o];
  n.__esModule && Object.defineProperty(r, "__esModule", { value: true });
})();
