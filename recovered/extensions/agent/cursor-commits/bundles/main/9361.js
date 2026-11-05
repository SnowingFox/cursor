// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9361 range:691688..701667
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9361: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(2613), { kDestroyed: s2, kBodyUsed: o2 } = a2(8832), { IncomingMessage: r2 } = a2(8611), i2 = a2(2203), A = a2(9278), { InvalidArgumentError: l } = a2(7902), { Blob: c } = a2(181), m = a2(9023), { stringify: d } = a2(3480), { headerNameLowerCasedRecord: g } = a2(6560), [u, E] = process.versions.node.split(".").map((e3) => Number(e3));
    function p(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.pipe && "function" == typeof e3.on;
    }
    function T(e3) {
      return c && e3 instanceof c || e3 && "object" == typeof e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && /^(Blob|File)$/.test(e3[Symbol.toStringTag]);
    }
    function k(e3) {
      if ("string" == typeof e3) {
        if (e3 = new URL(e3), !/^https?:/.test(e3.origin || e3.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e3;
      }
      if (!e3 || "object" != typeof e3) throw new l("Invalid URL: The URL argument must be a non-null object.");
      if (!/^https?:/.test(e3.origin || e3.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      if (!(e3 instanceof URL)) {
        if (null != e3.port && "" !== e3.port && !Number.isFinite(parseInt(e3.port))) throw new l("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e3.path && "string" != typeof e3.path) throw new l("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e3.pathname && "string" != typeof e3.pathname) throw new l("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e3.hostname && "string" != typeof e3.hostname) throw new l("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e3.origin && "string" != typeof e3.origin) throw new l("Invalid URL origin: the origin must be a string or null/undefined.");
        const n3 = null != e3.port ? e3.port : "https:" === e3.protocol ? 443 : 80;
        let a3 = null != e3.origin ? e3.origin : `${e3.protocol}//${e3.hostname}:${n3}`, t3 = null != e3.path ? e3.path : `${e3.pathname || ""}${e3.search || ""}`;
        a3.endsWith("/") && (a3 = a3.substring(0, a3.length - 1)), t3 && !t3.startsWith("/") && (t3 = `/${t3}`), e3 = new URL(a3 + t3);
      }
      return e3;
    }
    function I(e3) {
      return !e3 || !(!e3.destroyed && !e3[s2]);
    }
    function h(e3) {
      const n3 = e3 && e3._readableState;
      return I(e3) && n3 && !n3.endEmitted;
    }
    const _ = /timeout=(\d+)/;
    function C(e3) {
      return e3 instanceof Uint8Array || Buffer.isBuffer(e3);
    }
    let f;
    const B = !!String.prototype.toWellFormed;
    const Q = /* @__PURE__ */ Object.create(null);
    Q.enumerable = true, e2.exports = { kEnumerableProperty: Q, nop: function() {
    }, isDisturbed: function(e3) {
      return !(!e3 || !(i2.isDisturbed ? i2.isDisturbed(e3) || e3[o2] : e3[o2] || e3.readableDidRead || e3._readableState && e3._readableState.dataEmitted || h(e3)));
    }, isErrored: function(e3) {
      return !(!e3 || !(i2.isErrored ? i2.isErrored(e3) : /state: 'errored'/.test(m.inspect(e3))));
    }, isReadable: function(e3) {
      return !(!e3 || !(i2.isReadable ? i2.isReadable(e3) : /state: 'readable'/.test(m.inspect(e3))));
    }, toUSVString: function(e3) {
      return B ? `${e3}`.toWellFormed() : m.toUSVString ? m.toUSVString(e3) : `${e3}`;
    }, isReadableAborted: h, isBlobLike: T, parseOrigin: function(e3) {
      if ("/" !== (e3 = k(e3)).pathname || e3.search || e3.hash) throw new l("invalid url");
      return e3;
    }, parseURL: k, getServerName: function(e3) {
      if (!e3) return null;
      t2.strictEqual(typeof e3, "string");
      const n3 = (function(e4) {
        if ("[" === e4[0]) {
          const n5 = e4.indexOf("]");
          return t2(-1 !== n5), e4.substring(1, n5);
        }
        const n4 = e4.indexOf(":");
        return -1 === n4 ? e4 : e4.substring(0, n4);
      })(e3);
      return A.isIP(n3) ? "" : n3;
    }, isStream: p, isIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.iterator] && "function" != typeof e3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.asyncIterator]);
    }, isDestroyed: I, headerNameToString: function(e3) {
      return g[e3] || e3.toLowerCase();
    }, parseRawHeaders: function(e3) {
      const n3 = [];
      let a3 = false, t3 = -1;
      for (let s3 = 0; s3 < e3.length; s3 += 2) {
        const o3 = e3[s3 + 0].toString(), r3 = e3[s3 + 1].toString("utf8");
        14 !== o3.length || "content-length" !== o3 && "content-length" !== o3.toLowerCase() ? 19 !== o3.length || "content-disposition" !== o3 && "content-disposition" !== o3.toLowerCase() ? n3.push(o3, r3) : t3 = n3.push(o3, r3) - 1 : (n3.push(o3, r3), a3 = true);
      }
      return a3 && -1 !== t3 && (n3[t3] = Buffer.from(n3[t3]).toString("latin1")), n3;
    }, parseHeaders: function(e3, n3 = {}) {
      if (!Array.isArray(e3)) return e3;
      for (let a3 = 0; a3 < e3.length; a3 += 2) {
        const t3 = e3[a3].toString().toLowerCase();
        let s3 = n3[t3];
        s3 ? (Array.isArray(s3) || (s3 = [s3], n3[t3] = s3), s3.push(e3[a3 + 1].toString("utf8"))) : Array.isArray(e3[a3 + 1]) ? n3[t3] = e3[a3 + 1].map((e4) => e4.toString("utf8")) : n3[t3] = e3[a3 + 1].toString("utf8");
      }
      return "content-length" in n3 && "content-disposition" in n3 && (n3["content-disposition"] = Buffer.from(n3["content-disposition"]).toString("latin1")), n3;
    }, parseKeepAliveTimeout: function(e3) {
      const n3 = e3.toString().match(_);
      return n3 ? 1e3 * parseInt(n3[1], 10) : null;
    }, destroy: function(e3, n3) {
      null != e3 && p(e3) && !I(e3) && ("function" == typeof e3.destroy ? (Object.getPrototypeOf(e3).constructor === r2 && (e3.socket = null), e3.destroy(n3)) : n3 && process.nextTick((e4, n4) => {
        e4.emit("error", n4);
      }, e3, n3), true !== e3.destroyed && (e3[s2] = true));
    }, bodyLength: function(e3) {
      if (null == e3) return 0;
      if (p(e3)) {
        const n3 = e3._readableState;
        return n3 && false === n3.objectMode && true === n3.ended && Number.isFinite(n3.length) ? n3.length : null;
      }
      return T(e3) ? null != e3.size ? e3.size : null : C(e3) ? e3.byteLength : null;
    }, deepClone: function(e3) {
      return JSON.parse(JSON.stringify(e3));
    }, ReadableStreamFrom: function(e3) {
      if (f || (f = a2(3774).ReadableStream), f.from) return f.from((async function* (e4) {
        for await (const n4 of e4) yield Buffer.isBuffer(n4) ? n4 : Buffer.from(n4);
      })(e3));
      let n3;
      return new f({ async start() {
        n3 = e3[Symbol.asyncIterator]();
      }, async pull(e4) {
        const { done: a3, value: t3 } = await n3.next();
        if (a3) queueMicrotask(() => {
          e4.close();
        });
        else {
          const n4 = Buffer.isBuffer(t3) ? t3 : Buffer.from(t3);
          e4.enqueue(new Uint8Array(n4));
        }
        return e4.desiredSize > 0;
      }, async cancel(e4) {
        await n3.return();
      } }, 0);
    }, isBuffer: C, validateHandler: function(e3, n3, a3) {
      if (!e3 || "object" != typeof e3) throw new l("handler must be an object");
      if ("function" != typeof e3.onConnect) throw new l("invalid onConnect method");
      if ("function" != typeof e3.onError) throw new l("invalid onError method");
      if ("function" != typeof e3.onBodySent && void 0 !== e3.onBodySent) throw new l("invalid onBodySent method");
      if (a3 || "CONNECT" === n3) {
        if ("function" != typeof e3.onUpgrade) throw new l("invalid onUpgrade method");
      } else {
        if ("function" != typeof e3.onHeaders) throw new l("invalid onHeaders method");
        if ("function" != typeof e3.onData) throw new l("invalid onData method");
        if ("function" != typeof e3.onComplete) throw new l("invalid onComplete method");
      }
    }, getSocketInfo: function(e3) {
      return { localAddress: e3.localAddress, localPort: e3.localPort, remoteAddress: e3.remoteAddress, remotePort: e3.remotePort, remoteFamily: e3.remoteFamily, timeout: e3.timeout, bytesWritten: e3.bytesWritten, bytesRead: e3.bytesRead };
    }, isFormDataLike: function(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.append && "function" == typeof e3.delete && "function" == typeof e3.get && "function" == typeof e3.getAll && "function" == typeof e3.has && "function" == typeof e3.set && "FormData" === e3[Symbol.toStringTag];
    }, buildURL: function(e3, n3) {
      if (e3.includes("?") || e3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const a3 = d(n3);
      return a3 && (e3 += "?" + a3), e3;
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
    }, nodeMajor: u, nodeMinor: E, nodeHasAutoSelectFamily: u > 18 || 18 === u && E >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }