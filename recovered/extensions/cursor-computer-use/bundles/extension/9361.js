// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9361 range:722219..732189
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9361: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(2613), { kDestroyed: s2, kBodyUsed: o2 } = t2(8832), { IncomingMessage: r } = t2(8611), i = t2(2203), A = t2(9278), { InvalidArgumentError: c } = t2(7902), { Blob: l } = t2(181), d = t2(9023), { stringify: m } = t2(3480), { headerNameLowerCasedRecord: u } = t2(6560), [g, p] = process.versions.node.split(".").map((e3) => Number(e3));
    function E(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.pipe && "function" == typeof e3.on;
    }
    function h(e3) {
      return l && e3 instanceof l || e3 && "object" == typeof e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && /^(Blob|File)$/.test(e3[Symbol.toStringTag]);
    }
    function T(e3) {
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
        const n3 = null != e3.port ? e3.port : "https:" === e3.protocol ? 443 : 80;
        let t3 = null != e3.origin ? e3.origin : `${e3.protocol}//${e3.hostname}:${n3}`, a3 = null != e3.path ? e3.path : `${e3.pathname || ""}${e3.search || ""}`;
        t3.endsWith("/") && (t3 = t3.substring(0, t3.length - 1)), a3 && !a3.startsWith("/") && (a3 = `/${a3}`), e3 = new URL(t3 + a3);
      }
      return e3;
    }
    function k(e3) {
      return !e3 || !(!e3.destroyed && !e3[s2]);
    }
    function f(e3) {
      const n3 = e3 && e3._readableState;
      return k(e3) && n3 && !n3.endEmitted;
    }
    const _ = /timeout=(\d+)/;
    function I(e3) {
      return e3 instanceof Uint8Array || Buffer.isBuffer(e3);
    }
    let C;
    const y = !!String.prototype.toWellFormed;
    const B = /* @__PURE__ */ Object.create(null);
    B.enumerable = true, e2.exports = { kEnumerableProperty: B, nop: function() {
    }, isDisturbed: function(e3) {
      return !(!e3 || !(i.isDisturbed ? i.isDisturbed(e3) || e3[o2] : e3[o2] || e3.readableDidRead || e3._readableState && e3._readableState.dataEmitted || f(e3)));
    }, isErrored: function(e3) {
      return !(!e3 || !(i.isErrored ? i.isErrored(e3) : /state: 'errored'/.test(d.inspect(e3))));
    }, isReadable: function(e3) {
      return !(!e3 || !(i.isReadable ? i.isReadable(e3) : /state: 'readable'/.test(d.inspect(e3))));
    }, toUSVString: function(e3) {
      return y ? `${e3}`.toWellFormed() : d.toUSVString ? d.toUSVString(e3) : `${e3}`;
    }, isReadableAborted: f, isBlobLike: h, parseOrigin: function(e3) {
      if ("/" !== (e3 = T(e3)).pathname || e3.search || e3.hash) throw new c("invalid url");
      return e3;
    }, parseURL: T, getServerName: function(e3) {
      if (!e3) return null;
      a2.strictEqual(typeof e3, "string");
      const n3 = (function(e4) {
        if ("[" === e4[0]) {
          const n5 = e4.indexOf("]");
          return a2(-1 !== n5), e4.substring(1, n5);
        }
        const n4 = e4.indexOf(":");
        return -1 === n4 ? e4 : e4.substring(0, n4);
      })(e3);
      return A.isIP(n3) ? "" : n3;
    }, isStream: E, isIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.iterator] && "function" != typeof e3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.asyncIterator]);
    }, isDestroyed: k, headerNameToString: function(e3) {
      return u[e3] || e3.toLowerCase();
    }, parseRawHeaders: function(e3) {
      const n3 = [];
      let t3 = false, a3 = -1;
      for (let s3 = 0; s3 < e3.length; s3 += 2) {
        const o3 = e3[s3 + 0].toString(), r2 = e3[s3 + 1].toString("utf8");
        14 !== o3.length || "content-length" !== o3 && "content-length" !== o3.toLowerCase() ? 19 !== o3.length || "content-disposition" !== o3 && "content-disposition" !== o3.toLowerCase() ? n3.push(o3, r2) : a3 = n3.push(o3, r2) - 1 : (n3.push(o3, r2), t3 = true);
      }
      return t3 && -1 !== a3 && (n3[a3] = Buffer.from(n3[a3]).toString("latin1")), n3;
    }, parseHeaders: function(e3, n3 = {}) {
      if (!Array.isArray(e3)) return e3;
      for (let t3 = 0; t3 < e3.length; t3 += 2) {
        const a3 = e3[t3].toString().toLowerCase();
        let s3 = n3[a3];
        s3 ? (Array.isArray(s3) || (s3 = [s3], n3[a3] = s3), s3.push(e3[t3 + 1].toString("utf8"))) : Array.isArray(e3[t3 + 1]) ? n3[a3] = e3[t3 + 1].map((e4) => e4.toString("utf8")) : n3[a3] = e3[t3 + 1].toString("utf8");
      }
      return "content-length" in n3 && "content-disposition" in n3 && (n3["content-disposition"] = Buffer.from(n3["content-disposition"]).toString("latin1")), n3;
    }, parseKeepAliveTimeout: function(e3) {
      const n3 = e3.toString().match(_);
      return n3 ? 1e3 * parseInt(n3[1], 10) : null;
    }, destroy: function(e3, n3) {
      null != e3 && E(e3) && !k(e3) && ("function" == typeof e3.destroy ? (Object.getPrototypeOf(e3).constructor === r && (e3.socket = null), e3.destroy(n3)) : n3 && process.nextTick((e4, n4) => {
        e4.emit("error", n4);
      }, e3, n3), true !== e3.destroyed && (e3[s2] = true));
    }, bodyLength: function(e3) {
      if (null == e3) return 0;
      if (E(e3)) {
        const n3 = e3._readableState;
        return n3 && false === n3.objectMode && true === n3.ended && Number.isFinite(n3.length) ? n3.length : null;
      }
      return h(e3) ? null != e3.size ? e3.size : null : I(e3) ? e3.byteLength : null;
    }, deepClone: function(e3) {
      return JSON.parse(JSON.stringify(e3));
    }, ReadableStreamFrom: function(e3) {
      if (C || (C = t2(3774).ReadableStream), C.from) return C.from((async function* (e4) {
        for await (const n4 of e4) yield Buffer.isBuffer(n4) ? n4 : Buffer.from(n4);
      })(e3));
      let n3;
      return new C({ async start() {
        n3 = e3[Symbol.asyncIterator]();
      }, async pull(e4) {
        const { done: t3, value: a3 } = await n3.next();
        if (t3) queueMicrotask(() => {
          e4.close();
        });
        else {
          const n4 = Buffer.isBuffer(a3) ? a3 : Buffer.from(a3);
          e4.enqueue(new Uint8Array(n4));
        }
        return e4.desiredSize > 0;
      }, async cancel(e4) {
        await n3.return();
      } }, 0);
    }, isBuffer: I, validateHandler: function(e3, n3, t3) {
      if (!e3 || "object" != typeof e3) throw new c("handler must be an object");
      if ("function" != typeof e3.onConnect) throw new c("invalid onConnect method");
      if ("function" != typeof e3.onError) throw new c("invalid onError method");
      if ("function" != typeof e3.onBodySent && void 0 !== e3.onBodySent) throw new c("invalid onBodySent method");
      if (t3 || "CONNECT" === n3) {
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
    }, buildURL: function(e3, n3) {
      if (e3.includes("?") || e3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const t3 = m(n3);
      return t3 && (e3 += "?" + t3), e3;
    }, throwIfAborted: function(e3) {
      if (e3) {
        if ("function" == typeof e3.throwIfAborted) e3.throwIfAborted();
        else if (e3.aborted) {
          const e4 = new Error("The operation was aborted");
          throw e4.name = "AbortError", e4;
        }
      }
    }, addAbortListener: function(e3, n3) {
      return "addEventListener" in e3 ? (e3.addEventListener("abort", n3, { once: true }), () => e3.removeEventListener("abort", n3)) : (e3.addListener("abort", n3), () => e3.removeListener("abort", n3));
    }, parseRangeHeader: function(e3) {
      if (null == e3 || "" === e3) return { start: 0, end: null, size: null };
      const n3 = e3 ? e3.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return n3 ? { start: parseInt(n3[1]), end: n3[2] ? parseInt(n3[2]) : null, size: n3[3] ? parseInt(n3[3]) : null } : null;
    }, nodeMajor: g, nodeMinor: p, nodeHasAutoSelectFamily: g > 18 || 18 === g && p >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }