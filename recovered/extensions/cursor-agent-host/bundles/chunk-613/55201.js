// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 55201 range:306714..318673
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55201: (A, e, t) => {
  "use strict";
  const r = t(56970), { kDestroyed: s, kBodyUsed: o, kListeners: n, kBody: i } = t(76992), { IncomingMessage: a } = t(37067), Q = t(57075), g = t(77030), { Blob: E } = t(4573), B = t(57975), { stringify: c } = t(41792), { EventEmitter: I } = t(78474), { InvalidArgumentError: C } = t(38238), { headerNameLowerCasedRecord: h } = t(71648), { tree: l } = t(59865), [u, d] = process.versions.node.split(".").map((A2) => Number(A2));
  class f {
    constructor(A2) {
      this[i] = A2, this[o] = false;
    }
    async *[Symbol.asyncIterator]() {
      r(!this[o], "disturbed"), this[o] = true, yield* this[i];
    }
  }
  function w(A2) {
    return A2 && "object" == typeof A2 && "function" == typeof A2.pipe && "function" == typeof A2.on;
  }
  function y(A2) {
    if (null === A2) return false;
    if (A2 instanceof E) return true;
    if ("object" != typeof A2) return false;
    {
      const e2 = A2[Symbol.toStringTag];
      return ("Blob" === e2 || "File" === e2) && ("stream" in A2 && "function" == typeof A2.stream || "arrayBuffer" in A2 && "function" == typeof A2.arrayBuffer);
    }
  }
  function D(A2) {
    const e2 = parseInt(A2, 10);
    return e2 === Number(A2) && e2 >= 0 && e2 <= 65535;
  }
  function p(A2) {
    return null != A2 && "h" === A2[0] && "t" === A2[1] && "t" === A2[2] && "p" === A2[3] && (":" === A2[4] || "s" === A2[4] && ":" === A2[5]);
  }
  function k(A2) {
    if ("string" == typeof A2) {
      if (!p((A2 = new URL(A2)).origin || A2.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      return A2;
    }
    if (!A2 || "object" != typeof A2) throw new C("Invalid URL: The URL argument must be a non-null object.");
    if (!(A2 instanceof URL)) {
      if (null != A2.port && "" !== A2.port && false === D(A2.port)) throw new C("Invalid URL: port must be a valid integer or a string representation of an integer.");
      if (null != A2.path && "string" != typeof A2.path) throw new C("Invalid URL path: the path must be a string or null/undefined.");
      if (null != A2.pathname && "string" != typeof A2.pathname) throw new C("Invalid URL pathname: the pathname must be a string or null/undefined.");
      if (null != A2.hostname && "string" != typeof A2.hostname) throw new C("Invalid URL hostname: the hostname must be a string or null/undefined.");
      if (null != A2.origin && "string" != typeof A2.origin) throw new C("Invalid URL origin: the origin must be a string or null/undefined.");
      if (!p(A2.origin || A2.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      const e2 = null != A2.port ? A2.port : "https:" === A2.protocol ? 443 : 80;
      let t2 = null != A2.origin ? A2.origin : `${A2.protocol || ""}//${A2.hostname || ""}:${e2}`, r2 = null != A2.path ? A2.path : `${A2.pathname || ""}${A2.search || ""}`;
      return "/" === t2[t2.length - 1] && (t2 = t2.slice(0, t2.length - 1)), r2 && "/" !== r2[0] && (r2 = `/${r2}`), new URL(`${t2}${r2}`);
    }
    if (!p(A2.origin || A2.protocol)) throw new C("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    return A2;
  }
  function R(A2) {
    return !(null == A2 || "function" != typeof A2[Symbol.iterator] && "function" != typeof A2[Symbol.asyncIterator]);
  }
  function F(A2) {
    if (null == A2) return 0;
    if (w(A2)) {
      const e2 = A2._readableState;
      return e2 && false === e2.objectMode && true === e2.ended && Number.isFinite(e2.length) ? e2.length : null;
    }
    return y(A2) ? null != A2.size ? A2.size : null : S(A2) ? A2.byteLength : null;
  }
  function m(A2) {
    return A2 && !!(A2.destroyed || A2[s] || Q.isDestroyed?.(A2));
  }
  const b = /timeout=(\d+)/;
  function N(A2) {
    return "string" == typeof A2 ? h[A2] ?? A2.toLowerCase() : l.lookup(A2) ?? A2.toString("latin1").toLowerCase();
  }
  function S(A2) {
    return A2 instanceof Uint8Array || Buffer.isBuffer(A2);
  }
  const M = "function" == typeof String.prototype.toWellFormed, U = "function" == typeof String.prototype.isWellFormed;
  function L(A2) {
    return M ? `${A2}`.toWellFormed() : B.toUSVString(A2);
  }
  function T(A2) {
    switch (A2) {
      case 34:
      case 40:
      case 41:
      case 44:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 123:
      case 125:
        return false;
      default:
        return A2 >= 33 && A2 <= 126;
    }
  }
  const Y = /[^\t\x20-\x7e\x80-\xff]/;
  const G = /* @__PURE__ */ Object.create(null);
  G.enumerable = true;
  const J = { delete: "DELETE", DELETE: "DELETE", get: "GET", GET: "GET", head: "HEAD", HEAD: "HEAD", options: "OPTIONS", OPTIONS: "OPTIONS", post: "POST", POST: "POST", put: "PUT", PUT: "PUT" }, v = { ...J, patch: "patch", PATCH: "PATCH" };
  Object.setPrototypeOf(J, null), Object.setPrototypeOf(v, null), A.exports = { kEnumerableProperty: G, nop: function() {
  }, isDisturbed: function(A2) {
    return !(!A2 || !Q.isDisturbed(A2) && !A2[o]);
  }, isErrored: function(A2) {
    return !(!A2 || !Q.isErrored(A2));
  }, isReadable: function(A2) {
    return !(!A2 || !Q.isReadable(A2));
  }, toUSVString: L, isUSVString: function(A2) {
    return U ? `${A2}`.isWellFormed() : L(A2) === `${A2}`;
  }, isBlobLike: y, parseOrigin: function(A2) {
    if ("/" !== (A2 = k(A2)).pathname || A2.search || A2.hash) throw new C("invalid url");
    return A2;
  }, parseURL: k, getServerName: function(A2) {
    if (!A2) return null;
    r("string" == typeof A2);
    const e2 = (function(A3) {
      if ("[" === A3[0]) {
        const e4 = A3.indexOf("]");
        return r(-1 !== e4), A3.substring(1, e4);
      }
      const e3 = A3.indexOf(":");
      return -1 === e3 ? A3 : A3.substring(0, e3);
    })(A2);
    return g.isIP(e2) ? "" : e2;
  }, isStream: w, isIterable: R, isAsyncIterable: function(A2) {
    return !(null == A2 || "function" != typeof A2[Symbol.asyncIterator]);
  }, isDestroyed: m, headerNameToString: N, bufferToLowerCasedHeaderName: function(A2) {
    return l.lookup(A2) ?? A2.toString("latin1").toLowerCase();
  }, addListener: function(A2, e2, t2) {
    return (A2[n] ??= []).push([e2, t2]), A2.on(e2, t2), A2;
  }, removeAllListeners: function(A2) {
    for (const [e2, t2] of A2[n] ?? []) A2.removeListener(e2, t2);
    A2[n] = null;
  }, errorRequest: function(A2, e2, t2) {
    try {
      e2.onError(t2), r(e2.aborted);
    } catch (t3) {
      A2.emit("error", t3);
    }
  }, parseRawHeaders: function(A2) {
    const e2 = A2.length, t2 = new Array(e2);
    let r2, s2, o2 = false, n2 = -1, i2 = 0;
    for (let e3 = 0; e3 < A2.length; e3 += 2) r2 = A2[e3], s2 = A2[e3 + 1], "string" != typeof r2 && (r2 = r2.toString()), "string" != typeof s2 && (s2 = s2.toString("utf8")), i2 = r2.length, 14 !== i2 || "-" !== r2[7] || "content-length" !== r2 && "content-length" !== r2.toLowerCase() ? 19 !== i2 || "-" !== r2[7] || "content-disposition" !== r2 && "content-disposition" !== r2.toLowerCase() || (n2 = e3 + 1) : o2 = true, t2[e3] = r2, t2[e3 + 1] = s2;
    return o2 && -1 !== n2 && (t2[n2] = Buffer.from(t2[n2]).toString("latin1")), t2;
  }, parseHeaders: function(A2, e2) {
    void 0 === e2 && (e2 = {});
    for (let t2 = 0; t2 < A2.length; t2 += 2) {
      const r2 = N(A2[t2]);
      let s2 = e2[r2];
      if (s2) "string" == typeof s2 && (s2 = [s2], e2[r2] = s2), s2.push(A2[t2 + 1].toString("utf8"));
      else {
        const s3 = A2[t2 + 1];
        e2[r2] = "string" == typeof s3 ? s3 : Array.isArray(s3) ? s3.map((A3) => A3.toString("utf8")) : s3.toString("utf8");
      }
    }
    return "content-length" in e2 && "content-disposition" in e2 && (e2["content-disposition"] = Buffer.from(e2["content-disposition"]).toString("latin1")), e2;
  }, parseKeepAliveTimeout: function(A2) {
    const e2 = A2.toString().match(b);
    return e2 ? 1e3 * parseInt(e2[1], 10) : null;
  }, destroy: function(A2, e2) {
    null != A2 && w(A2) && !m(A2) && ("function" == typeof A2.destroy ? (Object.getPrototypeOf(A2).constructor === a && (A2.socket = null), A2.destroy(e2)) : e2 && queueMicrotask(() => {
      A2.emit("error", e2);
    }), true !== A2.destroyed && (A2[s] = true));
  }, bodyLength: F, deepClone: function(A2) {
    return JSON.parse(JSON.stringify(A2));
  }, ReadableStreamFrom: function(A2) {
    let e2;
    return new ReadableStream({ async start() {
      e2 = A2[Symbol.asyncIterator]();
    }, async pull(A3) {
      const { done: t2, value: r2 } = await e2.next();
      if (t2) queueMicrotask(() => {
        A3.close(), A3.byobRequest?.respond(0);
      });
      else {
        const e3 = Buffer.isBuffer(r2) ? r2 : Buffer.from(r2);
        e3.byteLength && A3.enqueue(new Uint8Array(e3));
      }
      return A3.desiredSize > 0;
    }, async cancel(A3) {
      await e2.return();
    }, type: "bytes" });
  }, isBuffer: S, validateHandler: function(A2, e2, t2) {
    if (!A2 || "object" != typeof A2) throw new C("handler must be an object");
    if ("function" != typeof A2.onConnect) throw new C("invalid onConnect method");
    if ("function" != typeof A2.onError) throw new C("invalid onError method");
    if ("function" != typeof A2.onBodySent && void 0 !== A2.onBodySent) throw new C("invalid onBodySent method");
    if (t2 || "CONNECT" === e2) {
      if ("function" != typeof A2.onUpgrade) throw new C("invalid onUpgrade method");
    } else {
      if ("function" != typeof A2.onHeaders) throw new C("invalid onHeaders method");
      if ("function" != typeof A2.onData) throw new C("invalid onData method");
      if ("function" != typeof A2.onComplete) throw new C("invalid onComplete method");
    }
  }, getSocketInfo: function(A2) {
    return { localAddress: A2.localAddress, localPort: A2.localPort, remoteAddress: A2.remoteAddress, remotePort: A2.remotePort, remoteFamily: A2.remoteFamily, timeout: A2.timeout, bytesWritten: A2.bytesWritten, bytesRead: A2.bytesRead };
  }, isFormDataLike: function(A2) {
    return A2 && "object" == typeof A2 && "function" == typeof A2.append && "function" == typeof A2.delete && "function" == typeof A2.get && "function" == typeof A2.getAll && "function" == typeof A2.has && "function" == typeof A2.set && "FormData" === A2[Symbol.toStringTag];
  }, buildURL: function(A2, e2) {
    if (A2.includes("?") || A2.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    const t2 = c(e2);
    return t2 && (A2 += "?" + t2), A2;
  }, addAbortListener: function(A2, e2) {
    return "addEventListener" in A2 ? (A2.addEventListener("abort", e2, { once: true }), () => A2.removeEventListener("abort", e2)) : (A2.addListener("abort", e2), () => A2.removeListener("abort", e2));
  }, isValidHTTPToken: function(A2) {
    if (0 === A2.length) return false;
    for (let e2 = 0; e2 < A2.length; ++e2) if (!T(A2.charCodeAt(e2))) return false;
    return true;
  }, isValidHeaderValue: function(A2) {
    return !Y.test(A2);
  }, isTokenCharCode: T, parseRangeHeader: function(A2) {
    if (null == A2 || "" === A2) return { start: 0, end: null, size: null };
    const e2 = A2 ? A2.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
    return e2 ? { start: parseInt(e2[1]), end: e2[2] ? parseInt(e2[2]) : null, size: e2[3] ? parseInt(e2[3]) : null } : null;
  }, normalizedMethodRecordsBase: J, normalizedMethodRecords: v, isValidPort: D, isHttpOrHttpsPrefixed: p, nodeMajor: u, nodeMinor: d, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"], wrapRequestBody: function(A2) {
    return w(A2) ? (0 === F(A2) && A2.on("data", function() {
      r(false);
    }), "boolean" != typeof A2.readableDidRead && (A2[o] = false, I.prototype.on.call(A2, "data", function() {
      this[o] = true;
    })), A2) : A2 && "function" == typeof A2.pipeTo || A2 && "string" != typeof A2 && !ArrayBuffer.isView(A2) && R(A2) ? new f(A2) : A2;
  } };
}