// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3589 range:961770..971742
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3589: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(2613), { kDestroyed: s2, kBodyUsed: i2 } = r2(5532), { IncomingMessage: o2 } = r2(8611), a = r2(2203), u = r2(9278), { InvalidArgumentError: c } = r2(8762), { Blob: l } = r2(181), m = r2(9023), { stringify: d } = r2(3480), { headerNameLowerCasedRecord: f } = r2(7676), [p, h] = process.versions.node.split(".").map((t3) => Number(t3));
    function g(t3) {
      return t3 && "object" == typeof t3 && "function" == typeof t3.pipe && "function" == typeof t3.on;
    }
    function A(t3) {
      return l && t3 instanceof l || t3 && "object" == typeof t3 && ("function" == typeof t3.stream || "function" == typeof t3.arrayBuffer) && /^(Blob|File)$/.test(t3[Symbol.toStringTag]);
    }
    function _(t3) {
      if ("string" == typeof t3) {
        if (t3 = new URL(t3), !/^https?:/.test(t3.origin || t3.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return t3;
      }
      if (!t3 || "object" != typeof t3) throw new c("Invalid URL: The URL argument must be a non-null object.");
      if (!/^https?:/.test(t3.origin || t3.protocol)) throw new c("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      if (!(t3 instanceof URL)) {
        if (null != t3.port && "" !== t3.port && !Number.isFinite(parseInt(t3.port))) throw new c("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != t3.path && "string" != typeof t3.path) throw new c("Invalid URL path: the path must be a string or null/undefined.");
        if (null != t3.pathname && "string" != typeof t3.pathname) throw new c("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != t3.hostname && "string" != typeof t3.hostname) throw new c("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != t3.origin && "string" != typeof t3.origin) throw new c("Invalid URL origin: the origin must be a string or null/undefined.");
        const e3 = null != t3.port ? t3.port : "https:" === t3.protocol ? 443 : 80;
        let r3 = null != t3.origin ? t3.origin : `${t3.protocol}//${t3.hostname}:${e3}`, n3 = null != t3.path ? t3.path : `${t3.pathname || ""}${t3.search || ""}`;
        r3.endsWith("/") && (r3 = r3.substring(0, r3.length - 1)), n3 && !n3.startsWith("/") && (n3 = `/${n3}`), t3 = new URL(r3 + n3);
      }
      return t3;
    }
    function y(t3) {
      return !t3 || !(!t3.destroyed && !t3[s2]);
    }
    function w(t3) {
      const e3 = t3 && t3._readableState;
      return y(t3) && e3 && !e3.endEmitted;
    }
    const S = /timeout=(\d+)/;
    function J(t3) {
      return t3 instanceof Uint8Array || Buffer.isBuffer(t3);
    }
    let B;
    const E = !!String.prototype.toWellFormed;
    const I = /* @__PURE__ */ Object.create(null);
    I.enumerable = true, t2.exports = { kEnumerableProperty: I, nop: function() {
    }, isDisturbed: function(t3) {
      return !(!t3 || !(a.isDisturbed ? a.isDisturbed(t3) || t3[i2] : t3[i2] || t3.readableDidRead || t3._readableState && t3._readableState.dataEmitted || w(t3)));
    }, isErrored: function(t3) {
      return !(!t3 || !(a.isErrored ? a.isErrored(t3) : /state: 'errored'/.test(m.inspect(t3))));
    }, isReadable: function(t3) {
      return !(!t3 || !(a.isReadable ? a.isReadable(t3) : /state: 'readable'/.test(m.inspect(t3))));
    }, toUSVString: function(t3) {
      return E ? `${t3}`.toWellFormed() : m.toUSVString ? m.toUSVString(t3) : `${t3}`;
    }, isReadableAborted: w, isBlobLike: A, parseOrigin: function(t3) {
      if ("/" !== (t3 = _(t3)).pathname || t3.search || t3.hash) throw new c("invalid url");
      return t3;
    }, parseURL: _, getServerName: function(t3) {
      if (!t3) return null;
      n2.strictEqual(typeof t3, "string");
      const e3 = (function(t4) {
        if ("[" === t4[0]) {
          const e5 = t4.indexOf("]");
          return n2(-1 !== e5), t4.substring(1, e5);
        }
        const e4 = t4.indexOf(":");
        return -1 === e4 ? t4 : t4.substring(0, e4);
      })(t3);
      return u.isIP(e3) ? "" : e3;
    }, isStream: g, isIterable: function(t3) {
      return !(null == t3 || "function" != typeof t3[Symbol.iterator] && "function" != typeof t3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(t3) {
      return !(null == t3 || "function" != typeof t3[Symbol.asyncIterator]);
    }, isDestroyed: y, headerNameToString: function(t3) {
      return f[t3] || t3.toLowerCase();
    }, parseRawHeaders: function(t3) {
      const e3 = [];
      let r3 = false, n3 = -1;
      for (let s3 = 0; s3 < t3.length; s3 += 2) {
        const i3 = t3[s3 + 0].toString(), o3 = t3[s3 + 1].toString("utf8");
        14 !== i3.length || "content-length" !== i3 && "content-length" !== i3.toLowerCase() ? 19 !== i3.length || "content-disposition" !== i3 && "content-disposition" !== i3.toLowerCase() ? e3.push(i3, o3) : n3 = e3.push(i3, o3) - 1 : (e3.push(i3, o3), r3 = true);
      }
      return r3 && -1 !== n3 && (e3[n3] = Buffer.from(e3[n3]).toString("latin1")), e3;
    }, parseHeaders: function(t3, e3 = {}) {
      if (!Array.isArray(t3)) return t3;
      for (let r3 = 0; r3 < t3.length; r3 += 2) {
        const n3 = t3[r3].toString().toLowerCase();
        let s3 = e3[n3];
        s3 ? (Array.isArray(s3) || (s3 = [s3], e3[n3] = s3), s3.push(t3[r3 + 1].toString("utf8"))) : Array.isArray(t3[r3 + 1]) ? e3[n3] = t3[r3 + 1].map((t4) => t4.toString("utf8")) : e3[n3] = t3[r3 + 1].toString("utf8");
      }
      return "content-length" in e3 && "content-disposition" in e3 && (e3["content-disposition"] = Buffer.from(e3["content-disposition"]).toString("latin1")), e3;
    }, parseKeepAliveTimeout: function(t3) {
      const e3 = t3.toString().match(S);
      return e3 ? 1e3 * parseInt(e3[1], 10) : null;
    }, destroy: function(t3, e3) {
      null != t3 && g(t3) && !y(t3) && ("function" == typeof t3.destroy ? (Object.getPrototypeOf(t3).constructor === o2 && (t3.socket = null), t3.destroy(e3)) : e3 && process.nextTick((t4, e4) => {
        t4.emit("error", e4);
      }, t3, e3), true !== t3.destroyed && (t3[s2] = true));
    }, bodyLength: function(t3) {
      if (null == t3) return 0;
      if (g(t3)) {
        const e3 = t3._readableState;
        return e3 && false === e3.objectMode && true === e3.ended && Number.isFinite(e3.length) ? e3.length : null;
      }
      return A(t3) ? null != t3.size ? t3.size : null : J(t3) ? t3.byteLength : null;
    }, deepClone: function(t3) {
      return JSON.parse(JSON.stringify(t3));
    }, ReadableStreamFrom: function(t3) {
      if (B || (B = r2(3774).ReadableStream), B.from) return B.from((async function* (t4) {
        for await (const e4 of t4) yield Buffer.isBuffer(e4) ? e4 : Buffer.from(e4);
      })(t3));
      let e3;
      return new B({ async start() {
        e3 = t3[Symbol.asyncIterator]();
      }, async pull(t4) {
        const { done: r3, value: n3 } = await e3.next();
        if (r3) queueMicrotask(() => {
          t4.close();
        });
        else {
          const e4 = Buffer.isBuffer(n3) ? n3 : Buffer.from(n3);
          t4.enqueue(new Uint8Array(e4));
        }
        return t4.desiredSize > 0;
      }, async cancel(t4) {
        await e3.return();
      } }, 0);
    }, isBuffer: J, validateHandler: function(t3, e3, r3) {
      if (!t3 || "object" != typeof t3) throw new c("handler must be an object");
      if ("function" != typeof t3.onConnect) throw new c("invalid onConnect method");
      if ("function" != typeof t3.onError) throw new c("invalid onError method");
      if ("function" != typeof t3.onBodySent && void 0 !== t3.onBodySent) throw new c("invalid onBodySent method");
      if (r3 || "CONNECT" === e3) {
        if ("function" != typeof t3.onUpgrade) throw new c("invalid onUpgrade method");
      } else {
        if ("function" != typeof t3.onHeaders) throw new c("invalid onHeaders method");
        if ("function" != typeof t3.onData) throw new c("invalid onData method");
        if ("function" != typeof t3.onComplete) throw new c("invalid onComplete method");
      }
    }, getSocketInfo: function(t3) {
      return { localAddress: t3.localAddress, localPort: t3.localPort, remoteAddress: t3.remoteAddress, remotePort: t3.remotePort, remoteFamily: t3.remoteFamily, timeout: t3.timeout, bytesWritten: t3.bytesWritten, bytesRead: t3.bytesRead };
    }, isFormDataLike: function(t3) {
      return t3 && "object" == typeof t3 && "function" == typeof t3.append && "function" == typeof t3.delete && "function" == typeof t3.get && "function" == typeof t3.getAll && "function" == typeof t3.has && "function" == typeof t3.set && "FormData" === t3[Symbol.toStringTag];
    }, buildURL: function(t3, e3) {
      if (t3.includes("?") || t3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const r3 = d(e3);
      return r3 && (t3 += "?" + r3), t3;
    }, throwIfAborted: function(t3) {
      if (t3) {
        if ("function" == typeof t3.throwIfAborted) t3.throwIfAborted();
        else if (t3.aborted) {
          const t4 = new Error("The operation was aborted");
          throw t4.name = "AbortError", t4;
        }
      }
    }, addAbortListener: function(t3, e3) {
      return "addEventListener" in t3 ? (t3.addEventListener("abort", e3, { once: true }), () => t3.removeEventListener("abort", e3)) : (t3.addListener("abort", e3), () => t3.removeListener("abort", e3));
    }, parseRangeHeader: function(t3) {
      if (null == t3 || "" === t3) return { start: 0, end: null, size: null };
      const e3 = t3 ? t3.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return e3 ? { start: parseInt(e3[1]), end: e3[2] ? parseInt(e3[2]) : null, size: e3[3] ? parseInt(e3[3]) : null } : null;
    }, nodeMajor: p, nodeMinor: h, nodeHasAutoSelectFamily: p > 18 || 18 === p && h >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }