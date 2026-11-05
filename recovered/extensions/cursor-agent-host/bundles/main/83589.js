// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83589 range:11966769..11976727
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83589: (e, t, r) => {
    "use strict";
    const n = r(42613), { kDestroyed: s, kBodyUsed: o } = r(15532), { IncomingMessage: i } = r(58611), a = r(2203), c = r(69278), { InvalidArgumentError: l } = r(48762), { Blob: u } = r(20181), d = r(39023), { stringify: p } = r(83480), { headerNameLowerCasedRecord: m } = r(77676), [h, f] = process.versions.node.split(".").map((e2) => Number(e2));
    function g(e2) {
      return e2 && "object" == typeof e2 && "function" == typeof e2.pipe && "function" == typeof e2.on;
    }
    function y(e2) {
      return u && e2 instanceof u || e2 && "object" == typeof e2 && ("function" == typeof e2.stream || "function" == typeof e2.arrayBuffer) && /^(Blob|File)$/.test(e2[Symbol.toStringTag]);
    }
    function w(e2) {
      if ("string" == typeof e2) {
        if (e2 = new URL(e2), !/^https?:/.test(e2.origin || e2.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return e2;
      }
      if (!e2 || "object" != typeof e2) throw new l("Invalid URL: The URL argument must be a non-null object.");
      if (!/^https?:/.test(e2.origin || e2.protocol)) throw new l("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      if (!(e2 instanceof URL)) {
        if (null != e2.port && "" !== e2.port && !Number.isFinite(parseInt(e2.port))) throw new l("Invalid URL: port must be a valid integer or a string representation of an integer.");
        if (null != e2.path && "string" != typeof e2.path) throw new l("Invalid URL path: the path must be a string or null/undefined.");
        if (null != e2.pathname && "string" != typeof e2.pathname) throw new l("Invalid URL pathname: the pathname must be a string or null/undefined.");
        if (null != e2.hostname && "string" != typeof e2.hostname) throw new l("Invalid URL hostname: the hostname must be a string or null/undefined.");
        if (null != e2.origin && "string" != typeof e2.origin) throw new l("Invalid URL origin: the origin must be a string or null/undefined.");
        const t2 = null != e2.port ? e2.port : "https:" === e2.protocol ? 443 : 80;
        let r2 = null != e2.origin ? e2.origin : `${e2.protocol}//${e2.hostname}:${t2}`, n2 = null != e2.path ? e2.path : `${e2.pathname || ""}${e2.search || ""}`;
        r2.endsWith("/") && (r2 = r2.substring(0, r2.length - 1)), n2 && !n2.startsWith("/") && (n2 = `/${n2}`), e2 = new URL(r2 + n2);
      }
      return e2;
    }
    function v(e2) {
      return !e2 || !(!e2.destroyed && !e2[s]);
    }
    function _(e2) {
      const t2 = e2 && e2._readableState;
      return v(e2) && t2 && !t2.endEmitted;
    }
    const A = /timeout=(\d+)/;
    function S(e2) {
      return e2 instanceof Uint8Array || Buffer.isBuffer(e2);
    }
    let b;
    const E = !!String.prototype.toWellFormed;
    const I = /* @__PURE__ */ Object.create(null);
    I.enumerable = true, e.exports = { kEnumerableProperty: I, nop: function() {
    }, isDisturbed: function(e2) {
      return !(!e2 || !(a.isDisturbed ? a.isDisturbed(e2) || e2[o] : e2[o] || e2.readableDidRead || e2._readableState && e2._readableState.dataEmitted || _(e2)));
    }, isErrored: function(e2) {
      return !(!e2 || !(a.isErrored ? a.isErrored(e2) : /state: 'errored'/.test(d.inspect(e2))));
    }, isReadable: function(e2) {
      return !(!e2 || !(a.isReadable ? a.isReadable(e2) : /state: 'readable'/.test(d.inspect(e2))));
    }, toUSVString: function(e2) {
      return E ? `${e2}`.toWellFormed() : d.toUSVString ? d.toUSVString(e2) : `${e2}`;
    }, isReadableAborted: _, isBlobLike: y, parseOrigin: function(e2) {
      if ("/" !== (e2 = w(e2)).pathname || e2.search || e2.hash) throw new l("invalid url");
      return e2;
    }, parseURL: w, getServerName: function(e2) {
      if (!e2) return null;
      n.strictEqual(typeof e2, "string");
      const t2 = (function(e3) {
        if ("[" === e3[0]) {
          const t4 = e3.indexOf("]");
          return n(-1 !== t4), e3.substring(1, t4);
        }
        const t3 = e3.indexOf(":");
        return -1 === t3 ? e3 : e3.substring(0, t3);
      })(e2);
      return c.isIP(t2) ? "" : t2;
    }, isStream: g, isIterable: function(e2) {
      return !(null == e2 || "function" != typeof e2[Symbol.iterator] && "function" != typeof e2[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e2) {
      return !(null == e2 || "function" != typeof e2[Symbol.asyncIterator]);
    }, isDestroyed: v, headerNameToString: function(e2) {
      return m[e2] || e2.toLowerCase();
    }, parseRawHeaders: function(e2) {
      const t2 = [];
      let r2 = false, n2 = -1;
      for (let s2 = 0; s2 < e2.length; s2 += 2) {
        const o2 = e2[s2 + 0].toString(), i2 = e2[s2 + 1].toString("utf8");
        14 !== o2.length || "content-length" !== o2 && "content-length" !== o2.toLowerCase() ? 19 !== o2.length || "content-disposition" !== o2 && "content-disposition" !== o2.toLowerCase() ? t2.push(o2, i2) : n2 = t2.push(o2, i2) - 1 : (t2.push(o2, i2), r2 = true);
      }
      return r2 && -1 !== n2 && (t2[n2] = Buffer.from(t2[n2]).toString("latin1")), t2;
    }, parseHeaders: function(e2, t2 = {}) {
      if (!Array.isArray(e2)) return e2;
      for (let r2 = 0; r2 < e2.length; r2 += 2) {
        const n2 = e2[r2].toString().toLowerCase();
        let s2 = t2[n2];
        s2 ? (Array.isArray(s2) || (s2 = [s2], t2[n2] = s2), s2.push(e2[r2 + 1].toString("utf8"))) : Array.isArray(e2[r2 + 1]) ? t2[n2] = e2[r2 + 1].map((e3) => e3.toString("utf8")) : t2[n2] = e2[r2 + 1].toString("utf8");
      }
      return "content-length" in t2 && "content-disposition" in t2 && (t2["content-disposition"] = Buffer.from(t2["content-disposition"]).toString("latin1")), t2;
    }, parseKeepAliveTimeout: function(e2) {
      const t2 = e2.toString().match(A);
      return t2 ? 1e3 * parseInt(t2[1], 10) : null;
    }, destroy: function(e2, t2) {
      null != e2 && g(e2) && !v(e2) && ("function" == typeof e2.destroy ? (Object.getPrototypeOf(e2).constructor === i && (e2.socket = null), e2.destroy(t2)) : t2 && process.nextTick((e3, t3) => {
        e3.emit("error", t3);
      }, e2, t2), true !== e2.destroyed && (e2[s] = true));
    }, bodyLength: function(e2) {
      if (null == e2) return 0;
      if (g(e2)) {
        const t2 = e2._readableState;
        return t2 && false === t2.objectMode && true === t2.ended && Number.isFinite(t2.length) ? t2.length : null;
      }
      return y(e2) ? null != e2.size ? e2.size : null : S(e2) ? e2.byteLength : null;
    }, deepClone: function(e2) {
      return JSON.parse(JSON.stringify(e2));
    }, ReadableStreamFrom: function(e2) {
      if (b || (b = r(63774).ReadableStream), b.from) return b.from((async function* (e3) {
        for await (const t3 of e3) yield Buffer.isBuffer(t3) ? t3 : Buffer.from(t3);
      })(e2));
      let t2;
      return new b({ async start() {
        t2 = e2[Symbol.asyncIterator]();
      }, async pull(e3) {
        const { done: r2, value: n2 } = await t2.next();
        if (r2) queueMicrotask(() => {
          e3.close();
        });
        else {
          const t3 = Buffer.isBuffer(n2) ? n2 : Buffer.from(n2);
          e3.enqueue(new Uint8Array(t3));
        }
        return e3.desiredSize > 0;
      }, async cancel(e3) {
        await t2.return();
      } }, 0);
    }, isBuffer: S, validateHandler: function(e2, t2, r2) {
      if (!e2 || "object" != typeof e2) throw new l("handler must be an object");
      if ("function" != typeof e2.onConnect) throw new l("invalid onConnect method");
      if ("function" != typeof e2.onError) throw new l("invalid onError method");
      if ("function" != typeof e2.onBodySent && void 0 !== e2.onBodySent) throw new l("invalid onBodySent method");
      if (r2 || "CONNECT" === t2) {
        if ("function" != typeof e2.onUpgrade) throw new l("invalid onUpgrade method");
      } else {
        if ("function" != typeof e2.onHeaders) throw new l("invalid onHeaders method");
        if ("function" != typeof e2.onData) throw new l("invalid onData method");
        if ("function" != typeof e2.onComplete) throw new l("invalid onComplete method");
      }
    }, getSocketInfo: function(e2) {
      return { localAddress: e2.localAddress, localPort: e2.localPort, remoteAddress: e2.remoteAddress, remotePort: e2.remotePort, remoteFamily: e2.remoteFamily, timeout: e2.timeout, bytesWritten: e2.bytesWritten, bytesRead: e2.bytesRead };
    }, isFormDataLike: function(e2) {
      return e2 && "object" == typeof e2 && "function" == typeof e2.append && "function" == typeof e2.delete && "function" == typeof e2.get && "function" == typeof e2.getAll && "function" == typeof e2.has && "function" == typeof e2.set && "FormData" === e2[Symbol.toStringTag];
    }, buildURL: function(e2, t2) {
      if (e2.includes("?") || e2.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const r2 = p(t2);
      return r2 && (e2 += "?" + r2), e2;
    }, throwIfAborted: function(e2) {
      if (e2) {
        if ("function" == typeof e2.throwIfAborted) e2.throwIfAborted();
        else if (e2.aborted) {
          const e3 = new Error("The operation was aborted");
          throw e3.name = "AbortError", e3;
        }
      }
    }, addAbortListener: function(e2, t2) {
      return "addEventListener" in e2 ? (e2.addEventListener("abort", t2, { once: true }), () => e2.removeEventListener("abort", t2)) : (e2.addListener("abort", t2), () => e2.removeListener("abort", t2));
    }, parseRangeHeader: function(e2) {
      if (null == e2 || "" === e2) return { start: 0, end: null, size: null };
      const t2 = e2 ? e2.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return t2 ? { start: parseInt(t2[1]), end: t2[2] ? parseInt(t2[2]) : null, size: t2[3] ? parseInt(t2[3]) : null } : null;
    }, nodeMajor: h, nodeMinor: f, nodeHasAutoSelectFamily: h > 18 || 18 === h && f >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }