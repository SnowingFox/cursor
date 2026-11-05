// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9361 range:1041052..1051031
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9361: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(2613), { kDestroyed: s2, kBodyUsed: o2 } = n2(8832), { IncomingMessage: r2 } = n2(8611), i2 = n2(2203), l = n2(9278), { InvalidArgumentError: d } = n2(7902), { Blob: m } = n2(181), c = n2(9023), { stringify: p } = n2(3480), { headerNameLowerCasedRecord: A } = n2(6560), [u, g] = process.versions.node.split(".").map((e3) => Number(e3));
    function T(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.pipe && "function" == typeof e3.on;
    }
    function h(e3) {
      return m && e3 instanceof m || e3 && "object" == typeof e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && /^(Blob|File)$/.test(e3[Symbol.toStringTag]);
    }
    function k(e3) {
      if ("string" == typeof e3) {
        if (e3 = new URL(e3), !/^https?:/.test(e3.origin || e3.protocol)) throw new d("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e3;
      }
      if (!e3 || "object" != typeof e3) throw new d("Invalid URL: The URL argument must be a non-null object.");
      if (!/^https?:/.test(e3.origin || e3.protocol)) throw new d("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      if (!(e3 instanceof URL)) {
        if (null != e3.port && "" !== e3.port && !Number.isFinite(parseInt(e3.port))) throw new d("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e3.path && "string" != typeof e3.path) throw new d("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e3.pathname && "string" != typeof e3.pathname) throw new d("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e3.hostname && "string" != typeof e3.hostname) throw new d("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e3.origin && "string" != typeof e3.origin) throw new d("Invalid URL origin: the origin must be a string or null/undefined.");
        const a3 = null != e3.port ? e3.port : "https:" === e3.protocol ? 443 : 80;
        let n3 = null != e3.origin ? e3.origin : `${e3.protocol}//${e3.hostname}:${a3}`, t3 = null != e3.path ? e3.path : `${e3.pathname || ""}${e3.search || ""}`;
        n3.endsWith("/") && (n3 = n3.substring(0, n3.length - 1)), t3 && !t3.startsWith("/") && (t3 = `/${t3}`), e3 = new URL(n3 + t3);
      }
      return e3;
    }
    function _(e3) {
      return !e3 || !(!e3.destroyed && !e3[s2]);
    }
    function E(e3) {
      const a3 = e3 && e3._readableState;
      return _(e3) && a3 && !a3.endEmitted;
    }
    const f = /timeout=(\d+)/;
    function C(e3) {
      return e3 instanceof Uint8Array || Buffer.isBuffer(e3);
    }
    let I;
    const v = !!String.prototype.toWellFormed;
    const y = /* @__PURE__ */ Object.create(null);
    y.enumerable = true, e2.exports = { kEnumerableProperty: y, nop: function() {
    }, isDisturbed: function(e3) {
      return !(!e3 || !(i2.isDisturbed ? i2.isDisturbed(e3) || e3[o2] : e3[o2] || e3.readableDidRead || e3._readableState && e3._readableState.dataEmitted || E(e3)));
    }, isErrored: function(e3) {
      return !(!e3 || !(i2.isErrored ? i2.isErrored(e3) : /state: 'errored'/.test(c.inspect(e3))));
    }, isReadable: function(e3) {
      return !(!e3 || !(i2.isReadable ? i2.isReadable(e3) : /state: 'readable'/.test(c.inspect(e3))));
    }, toUSVString: function(e3) {
      return v ? `${e3}`.toWellFormed() : c.toUSVString ? c.toUSVString(e3) : `${e3}`;
    }, isReadableAborted: E, isBlobLike: h, parseOrigin: function(e3) {
      if ("/" !== (e3 = k(e3)).pathname || e3.search || e3.hash) throw new d("invalid url");
      return e3;
    }, parseURL: k, getServerName: function(e3) {
      if (!e3) return null;
      t2.strictEqual(typeof e3, "string");
      const a3 = (function(e4) {
        if ("[" === e4[0]) {
          const a5 = e4.indexOf("]");
          return t2(-1 !== a5), e4.substring(1, a5);
        }
        const a4 = e4.indexOf(":");
        return -1 === a4 ? e4 : e4.substring(0, a4);
      })(e3);
      return l.isIP(a3) ? "" : a3;
    }, isStream: T, isIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.iterator] && "function" != typeof e3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.asyncIterator]);
    }, isDestroyed: _, headerNameToString: function(e3) {
      return A[e3] || e3.toLowerCase();
    }, parseRawHeaders: function(e3) {
      const a3 = [];
      let n3 = false, t3 = -1;
      for (let s3 = 0; s3 < e3.length; s3 += 2) {
        const o3 = e3[s3 + 0].toString(), r3 = e3[s3 + 1].toString("utf8");
        14 !== o3.length || "content-length" !== o3 && "content-length" !== o3.toLowerCase() ? 19 !== o3.length || "content-disposition" !== o3 && "content-disposition" !== o3.toLowerCase() ? a3.push(o3, r3) : t3 = a3.push(o3, r3) - 1 : (a3.push(o3, r3), n3 = true);
      }
      return n3 && -1 !== t3 && (a3[t3] = Buffer.from(a3[t3]).toString("latin1")), a3;
    }, parseHeaders: function(e3, a3 = {}) {
      if (!Array.isArray(e3)) return e3;
      for (let n3 = 0; n3 < e3.length; n3 += 2) {
        const t3 = e3[n3].toString().toLowerCase();
        let s3 = a3[t3];
        s3 ? (Array.isArray(s3) || (s3 = [s3], a3[t3] = s3), s3.push(e3[n3 + 1].toString("utf8"))) : Array.isArray(e3[n3 + 1]) ? a3[t3] = e3[n3 + 1].map((e4) => e4.toString("utf8")) : a3[t3] = e3[n3 + 1].toString("utf8");
      }
      return "content-length" in a3 && "content-disposition" in a3 && (a3["content-disposition"] = Buffer.from(a3["content-disposition"]).toString("latin1")), a3;
    }, parseKeepAliveTimeout: function(e3) {
      const a3 = e3.toString().match(f);
      return a3 ? 1e3 * parseInt(a3[1], 10) : null;
    }, destroy: function(e3, a3) {
      null != e3 && T(e3) && !_(e3) && ("function" == typeof e3.destroy ? (Object.getPrototypeOf(e3).constructor === r2 && (e3.socket = null), e3.destroy(a3)) : a3 && process.nextTick((e4, a4) => {
        e4.emit("error", a4);
      }, e3, a3), true !== e3.destroyed && (e3[s2] = true));
    }, bodyLength: function(e3) {
      if (null == e3) return 0;
      if (T(e3)) {
        const a3 = e3._readableState;
        return a3 && false === a3.objectMode && true === a3.ended && Number.isFinite(a3.length) ? a3.length : null;
      }
      return h(e3) ? null != e3.size ? e3.size : null : C(e3) ? e3.byteLength : null;
    }, deepClone: function(e3) {
      return JSON.parse(JSON.stringify(e3));
    }, ReadableStreamFrom: function(e3) {
      if (I || (I = n2(3774).ReadableStream), I.from) return I.from((async function* (e4) {
        for await (const a4 of e4) yield Buffer.isBuffer(a4) ? a4 : Buffer.from(a4);
      })(e3));
      let a3;
      return new I({ async start() {
        a3 = e3[Symbol.asyncIterator]();
      }, async pull(e4) {
        const { done: n3, value: t3 } = await a3.next();
        if (n3) queueMicrotask(() => {
          e4.close();
        });
        else {
          const a4 = Buffer.isBuffer(t3) ? t3 : Buffer.from(t3);
          e4.enqueue(new Uint8Array(a4));
        }
        return e4.desiredSize > 0;
      }, async cancel(e4) {
        await a3.return();
      } }, 0);
    }, isBuffer: C, validateHandler: function(e3, a3, n3) {
      if (!e3 || "object" != typeof e3) throw new d("handler must be an object");
      if ("function" != typeof e3.onConnect) throw new d("invalid onConnect method");
      if ("function" != typeof e3.onError) throw new d("invalid onError method");
      if ("function" != typeof e3.onBodySent && void 0 !== e3.onBodySent) throw new d("invalid onBodySent method");
      if (n3 || "CONNECT" === a3) {
        if ("function" != typeof e3.onUpgrade) throw new d("invalid onUpgrade method");
      } else {
        if ("function" != typeof e3.onHeaders) throw new d("invalid onHeaders method");
        if ("function" != typeof e3.onData) throw new d("invalid onData method");
        if ("function" != typeof e3.onComplete) throw new d("invalid onComplete method");
      }
    }, getSocketInfo: function(e3) {
      return { localAddress: e3.localAddress, localPort: e3.localPort, remoteAddress: e3.remoteAddress, remotePort: e3.remotePort, remoteFamily: e3.remoteFamily, timeout: e3.timeout, bytesWritten: e3.bytesWritten, bytesRead: e3.bytesRead };
    }, isFormDataLike: function(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.append && "function" == typeof e3.delete && "function" == typeof e3.get && "function" == typeof e3.getAll && "function" == typeof e3.has && "function" == typeof e3.set && "FormData" === e3[Symbol.toStringTag];
    }, buildURL: function(e3, a3) {
      if (e3.includes("?") || e3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const n3 = p(a3);
      return n3 && (e3 += "?" + n3), e3;
    }, throwIfAborted: function(e3) {
      if (e3) {
        if ("function" == typeof e3.throwIfAborted) e3.throwIfAborted();
        else if (e3.aborted) {
          const e4 = new Error("The operation was aborted");
          throw e4.name = "AbortError", e4;
        }
      }
    }, addAbortListener: function(e3, a3) {
      return "addEventListener" in e3 ? (e3.addEventListener("abort", a3, { once: true }), () => e3.removeEventListener("abort", a3)) : (e3.addListener("abort", a3), () => e3.removeListener("abort", a3));
    }, parseRangeHeader: function(e3) {
      if (null == e3 || "" === e3) return { start: 0, end: null, size: null };
      const a3 = e3 ? e3.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return a3 ? { start: parseInt(a3[1]), end: a3[2] ? parseInt(a3[2]) : null, size: a3[3] ? parseInt(a3[3]) : null } : null;
    }, nodeMajor: u, nodeMinor: g, nodeHasAutoSelectFamily: u > 18 || 18 === u && g >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }