// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9361 range:690695..700665
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9361: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(2613), { kDestroyed: r2, kBodyUsed: o2 } = t2(8832), { IncomingMessage: s } = t2(8611), a = t2(2203), i = t2(9278), { InvalidArgumentError: c } = t2(7902), { Blob: l } = t2(181), g = t2(9023), { stringify: E } = t2(3480), { headerNameLowerCasedRecord: u } = t2(6560), [d, I] = process.versions.node.split(".").map((e3) => Number(e3));
    function h(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.pipe && "function" == typeof e3.on;
    }
    function Q(e3) {
      return l && e3 instanceof l || e3 && "object" == typeof e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && /^(Blob|File)$/.test(e3[Symbol.toStringTag]);
    }
    function m(e3) {
      if ("string" == typeof e3) {
        if (e3 = new URL(e3), !/^https?:/.test(e3.origin || e3.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e3;
      }
      if (!e3 || "object" != typeof e3) throw new c("Invalid URL: The URL argument must be a non-null object.");
      if (!/^https?:/.test(e3.origin || e3.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      if (!(e3 instanceof URL)) {
        if (null != e3.port && "" !== e3.port && !Number.isFinite(parseInt(e3.port))) throw new c("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e3.path && "string" != typeof e3.path) throw new c("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e3.pathname && "string" != typeof e3.pathname) throw new c("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e3.hostname && "string" != typeof e3.hostname) throw new c("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e3.origin && "string" != typeof e3.origin) throw new c("Invalid URL origin: the origin must be a string or null/undefined.");
        const A3 = null != e3.port ? e3.port : "https:" === e3.protocol ? 443 : 80;
        let t3 = null != e3.origin ? e3.origin : `${e3.protocol}//${e3.hostname}:${A3}`, n3 = null != e3.path ? e3.path : `${e3.pathname || ""}${e3.search || ""}`;
        t3.endsWith("/") && (t3 = t3.substring(0, t3.length - 1)), n3 && !n3.startsWith("/") && (n3 = `/${n3}`), e3 = new URL(t3 + n3);
      }
      return e3;
    }
    function C(e3) {
      return !e3 || !(!e3.destroyed && !e3[r2]);
    }
    function B(e3) {
      const A3 = e3 && e3._readableState;
      return C(e3) && A3 && !A3.endEmitted;
    }
    const p = /timeout=(\d+)/;
    function f(e3) {
      return e3 instanceof Uint8Array || Buffer.isBuffer(e3);
    }
    let y;
    const T = !!String.prototype.toWellFormed;
    const k = /* @__PURE__ */ Object.create(null);
    k.enumerable = true, e2.exports = { kEnumerableProperty: k, nop: function() {
    }, isDisturbed: function(e3) {
      return !(!e3 || !(a.isDisturbed ? a.isDisturbed(e3) || e3[o2] : e3[o2] || e3.readableDidRead || e3._readableState && e3._readableState.dataEmitted || B(e3)));
    }, isErrored: function(e3) {
      return !(!e3 || !(a.isErrored ? a.isErrored(e3) : /state: 'errored'/.test(g.inspect(e3))));
    }, isReadable: function(e3) {
      return !(!e3 || !(a.isReadable ? a.isReadable(e3) : /state: 'readable'/.test(g.inspect(e3))));
    }, toUSVString: function(e3) {
      return T ? `${e3}`.toWellFormed() : g.toUSVString ? g.toUSVString(e3) : `${e3}`;
    }, isReadableAborted: B, isBlobLike: Q, parseOrigin: function(e3) {
      if ("/" !== (e3 = m(e3)).pathname || e3.search || e3.hash) throw new c("invalid url");
      return e3;
    }, parseURL: m, getServerName: function(e3) {
      if (!e3) return null;
      n2.strictEqual(typeof e3, "string");
      const A3 = (function(e4) {
        if ("[" === e4[0]) {
          const A5 = e4.indexOf("]");
          return n2(-1 !== A5), e4.substring(1, A5);
        }
        const A4 = e4.indexOf(":");
        return -1 === A4 ? e4 : e4.substring(0, A4);
      })(e3);
      return i.isIP(A3) ? "" : A3;
    }, isStream: h, isIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.iterator] && "function" != typeof e3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.asyncIterator]);
    }, isDestroyed: C, headerNameToString: function(e3) {
      return u[e3] || e3.toLowerCase();
    }, parseRawHeaders: function(e3) {
      const A3 = [];
      let t3 = false, n3 = -1;
      for (let r3 = 0; r3 < e3.length; r3 += 2) {
        const o3 = e3[r3 + 0].toString(), s2 = e3[r3 + 1].toString("utf8");
        14 !== o3.length || "content-length" !== o3 && "content-length" !== o3.toLowerCase() ? 19 !== o3.length || "content-disposition" !== o3 && "content-disposition" !== o3.toLowerCase() ? A3.push(o3, s2) : n3 = A3.push(o3, s2) - 1 : (A3.push(o3, s2), t3 = true);
      }
      return t3 && -1 !== n3 && (A3[n3] = Buffer.from(A3[n3]).toString("latin1")), A3;
    }, parseHeaders: function(e3, A3 = {}) {
      if (!Array.isArray(e3)) return e3;
      for (let t3 = 0; t3 < e3.length; t3 += 2) {
        const n3 = e3[t3].toString().toLowerCase();
        let r3 = A3[n3];
        r3 ? (Array.isArray(r3) || (r3 = [r3], A3[n3] = r3), r3.push(e3[t3 + 1].toString("utf8"))) : Array.isArray(e3[t3 + 1]) ? A3[n3] = e3[t3 + 1].map((e4) => e4.toString("utf8")) : A3[n3] = e3[t3 + 1].toString("utf8");
      }
      return "content-length" in A3 && "content-disposition" in A3 && (A3["content-disposition"] = Buffer.from(A3["content-disposition"]).toString("latin1")), A3;
    }, parseKeepAliveTimeout: function(e3) {
      const A3 = e3.toString().match(p);
      return A3 ? 1e3 * parseInt(A3[1], 10) : null;
    }, destroy: function(e3, A3) {
      null != e3 && h(e3) && !C(e3) && ("function" == typeof e3.destroy ? (Object.getPrototypeOf(e3).constructor === s && (e3.socket = null), e3.destroy(A3)) : A3 && process.nextTick((e4, A4) => {
        e4.emit("error", A4);
      }, e3, A3), true !== e3.destroyed && (e3[r2] = true));
    }, bodyLength: function(e3) {
      if (null == e3) return 0;
      if (h(e3)) {
        const A3 = e3._readableState;
        return A3 && false === A3.objectMode && true === A3.ended && Number.isFinite(A3.length) ? A3.length : null;
      }
      return Q(e3) ? null != e3.size ? e3.size : null : f(e3) ? e3.byteLength : null;
    }, deepClone: function(e3) {
      return JSON.parse(JSON.stringify(e3));
    }, ReadableStreamFrom: function(e3) {
      if (y || (y = t2(3774).ReadableStream), y.from) return y.from((async function* (e4) {
        for await (const A4 of e4) yield Buffer.isBuffer(A4) ? A4 : Buffer.from(A4);
      })(e3));
      let A3;
      return new y({ async start() {
        A3 = e3[Symbol.asyncIterator]();
      }, async pull(e4) {
        const { done: t3, value: n3 } = await A3.next();
        if (t3) queueMicrotask(() => {
          e4.close();
        });
        else {
          const A4 = Buffer.isBuffer(n3) ? n3 : Buffer.from(n3);
          e4.enqueue(new Uint8Array(A4));
        }
        return e4.desiredSize > 0;
      }, async cancel(e4) {
        await A3.return();
      } }, 0);
    }, isBuffer: f, validateHandler: function(e3, A3, t3) {
      if (!e3 || "object" != typeof e3) throw new c("handler must be an object");
      if ("function" != typeof e3.onConnect) throw new c("invalid onConnect method");
      if ("function" != typeof e3.onError) throw new c("invalid onError method");
      if ("function" != typeof e3.onBodySent && void 0 !== e3.onBodySent) throw new c("invalid onBodySent method");
      if (t3 || "CONNECT" === A3) {
        if ("function" != typeof e3.onUpgrade) throw new c("invalid onUpgrade method");
      } else {
        if ("function" != typeof e3.onHeaders) throw new c("invalid onHeaders method");
        if ("function" != typeof e3.onData) throw new c("invalid onData method");
        if ("function" != typeof e3.onComplete) throw new c("invalid onComplete method");
      }
    }, getSocketInfo: function(e3) {
      return { localAddress: e3.localAddress, localPort: e3.localPort, remoteAddress: e3.remoteAddress, remotePort: e3.remotePort, remoteFamily: e3.remoteFamily, timeout: e3.timeout, bytesWritten: e3.bytesWritten, bytesRead: e3.bytesRead };
    }, isFormDataLike: function(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.append && "function" == typeof e3.delete && "function" == typeof e3.get && "function" == typeof e3.getAll && "function" == typeof e3.has && "function" == typeof e3.set && "FormData" === e3[Symbol.toStringTag];
    }, buildURL: function(e3, A3) {
      if (e3.includes("?") || e3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const t3 = E(A3);
      return t3 && (e3 += "?" + t3), e3;
    }, throwIfAborted: function(e3) {
      if (e3) {
        if ("function" == typeof e3.throwIfAborted) e3.throwIfAborted();
        else if (e3.aborted) {
          const e4 = new Error("The operation was aborted");
          throw e4.name = "AbortError", e4;
        }
      }
    }, addAbortListener: function(e3, A3) {
      return "addEventListener" in e3 ? (e3.addEventListener("abort", A3, { once: true }), () => e3.removeEventListener("abort", A3)) : (e3.addListener("abort", A3), () => e3.removeListener("abort", A3));
    }, parseRangeHeader: function(e3) {
      if (null == e3 || "" === e3) return { start: 0, end: null, size: null };
      const A3 = e3 ? e3.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return A3 ? { start: parseInt(A3[1]), end: A3[2] ? parseInt(A3[2]) : null, size: A3[3] ? parseInt(A3[3]) : null } : null;
    }, nodeMajor: d, nodeMinor: I, nodeHasAutoSelectFamily: d > 18 || 18 === d && I >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }