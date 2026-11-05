// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9361 range:825488..835458
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9361: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2613), { kDestroyed: r2, kBodyUsed: o2 } = A2(8832), { IncomingMessage: s } = A2(8611), i = A2(2203), a = A2(9278), { InvalidArgumentError: c } = A2(7902), { Blob: l } = A2(181), u = A2(9023), { stringify: g } = A2(3480), { headerNameLowerCasedRecord: E } = A2(6560), [h, d] = process.versions.node.split(".").map((e3) => Number(e3));
    function I(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.pipe && "function" == typeof e3.on;
    }
    function B(e3) {
      return l && e3 instanceof l || e3 && "object" == typeof e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && /^(Blob|File)$/.test(e3[Symbol.toStringTag]);
    }
    function Q(e3) {
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
        const t3 = null != e3.port ? e3.port : "https:" === e3.protocol ? 443 : 80;
        let A3 = null != e3.origin ? e3.origin : `${e3.protocol}//${e3.hostname}:${t3}`, n3 = null != e3.path ? e3.path : `${e3.pathname || ""}${e3.search || ""}`;
        A3.endsWith("/") && (A3 = A3.substring(0, A3.length - 1)), n3 && !n3.startsWith("/") && (n3 = `/${n3}`), e3 = new URL(A3 + n3);
      }
      return e3;
    }
    function f(e3) {
      return !e3 || !(!e3.destroyed && !e3[r2]);
    }
    function C(e3) {
      const t3 = e3 && e3._readableState;
      return f(e3) && t3 && !t3.endEmitted;
    }
    const p = /timeout=(\d+)/;
    function m(e3) {
      return e3 instanceof Uint8Array || Buffer.isBuffer(e3);
    }
    let y;
    const w = !!String.prototype.toWellFormed;
    const k = /* @__PURE__ */ Object.create(null);
    k.enumerable = true, e2.exports = { kEnumerableProperty: k, nop: function() {
    }, isDisturbed: function(e3) {
      return !(!e3 || !(i.isDisturbed ? i.isDisturbed(e3) || e3[o2] : e3[o2] || e3.readableDidRead || e3._readableState && e3._readableState.dataEmitted || C(e3)));
    }, isErrored: function(e3) {
      return !(!e3 || !(i.isErrored ? i.isErrored(e3) : /state: 'errored'/.test(u.inspect(e3))));
    }, isReadable: function(e3) {
      return !(!e3 || !(i.isReadable ? i.isReadable(e3) : /state: 'readable'/.test(u.inspect(e3))));
    }, toUSVString: function(e3) {
      return w ? `${e3}`.toWellFormed() : u.toUSVString ? u.toUSVString(e3) : `${e3}`;
    }, isReadableAborted: C, isBlobLike: B, parseOrigin: function(e3) {
      if ("/" !== (e3 = Q(e3)).pathname || e3.search || e3.hash) throw new c("invalid url");
      return e3;
    }, parseURL: Q, getServerName: function(e3) {
      if (!e3) return null;
      n2.strictEqual(typeof e3, "string");
      const t3 = (function(e4) {
        if ("[" === e4[0]) {
          const t5 = e4.indexOf("]");
          return n2(-1 !== t5), e4.substring(1, t5);
        }
        const t4 = e4.indexOf(":");
        return -1 === t4 ? e4 : e4.substring(0, t4);
      })(e3);
      return a.isIP(t3) ? "" : t3;
    }, isStream: I, isIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.iterator] && "function" != typeof e3[Symbol.asyncIterator]);
    }, isAsyncIterable: function(e3) {
      return !(null == e3 || "function" != typeof e3[Symbol.asyncIterator]);
    }, isDestroyed: f, headerNameToString: function(e3) {
      return E[e3] || e3.toLowerCase();
    }, parseRawHeaders: function(e3) {
      const t3 = [];
      let A3 = false, n3 = -1;
      for (let r3 = 0; r3 < e3.length; r3 += 2) {
        const o3 = e3[r3 + 0].toString(), s2 = e3[r3 + 1].toString("utf8");
        14 !== o3.length || "content-length" !== o3 && "content-length" !== o3.toLowerCase() ? 19 !== o3.length || "content-disposition" !== o3 && "content-disposition" !== o3.toLowerCase() ? t3.push(o3, s2) : n3 = t3.push(o3, s2) - 1 : (t3.push(o3, s2), A3 = true);
      }
      return A3 && -1 !== n3 && (t3[n3] = Buffer.from(t3[n3]).toString("latin1")), t3;
    }, parseHeaders: function(e3, t3 = {}) {
      if (!Array.isArray(e3)) return e3;
      for (let A3 = 0; A3 < e3.length; A3 += 2) {
        const n3 = e3[A3].toString().toLowerCase();
        let r3 = t3[n3];
        r3 ? (Array.isArray(r3) || (r3 = [r3], t3[n3] = r3), r3.push(e3[A3 + 1].toString("utf8"))) : Array.isArray(e3[A3 + 1]) ? t3[n3] = e3[A3 + 1].map((e4) => e4.toString("utf8")) : t3[n3] = e3[A3 + 1].toString("utf8");
      }
      return "content-length" in t3 && "content-disposition" in t3 && (t3["content-disposition"] = Buffer.from(t3["content-disposition"]).toString("latin1")), t3;
    }, parseKeepAliveTimeout: function(e3) {
      const t3 = e3.toString().match(p);
      return t3 ? 1e3 * parseInt(t3[1], 10) : null;
    }, destroy: function(e3, t3) {
      null != e3 && I(e3) && !f(e3) && ("function" == typeof e3.destroy ? (Object.getPrototypeOf(e3).constructor === s && (e3.socket = null), e3.destroy(t3)) : t3 && process.nextTick((e4, t4) => {
        e4.emit("error", t4);
      }, e3, t3), true !== e3.destroyed && (e3[r2] = true));
    }, bodyLength: function(e3) {
      if (null == e3) return 0;
      if (I(e3)) {
        const t3 = e3._readableState;
        return t3 && false === t3.objectMode && true === t3.ended && Number.isFinite(t3.length) ? t3.length : null;
      }
      return B(e3) ? null != e3.size ? e3.size : null : m(e3) ? e3.byteLength : null;
    }, deepClone: function(e3) {
      return JSON.parse(JSON.stringify(e3));
    }, ReadableStreamFrom: function(e3) {
      if (y || (y = A2(3774).ReadableStream), y.from) return y.from((async function* (e4) {
        for await (const t4 of e4) yield Buffer.isBuffer(t4) ? t4 : Buffer.from(t4);
      })(e3));
      let t3;
      return new y({ async start() {
        t3 = e3[Symbol.asyncIterator]();
      }, async pull(e4) {
        const { done: A3, value: n3 } = await t3.next();
        if (A3) queueMicrotask(() => {
          e4.close();
        });
        else {
          const t4 = Buffer.isBuffer(n3) ? n3 : Buffer.from(n3);
          e4.enqueue(new Uint8Array(t4));
        }
        return e4.desiredSize > 0;
      }, async cancel(e4) {
        await t3.return();
      } }, 0);
    }, isBuffer: m, validateHandler: function(e3, t3, A3) {
      if (!e3 || "object" != typeof e3) throw new c("handler must be an object");
      if ("function" != typeof e3.onConnect) throw new c("invalid onConnect method");
      if ("function" != typeof e3.onError) throw new c("invalid onError method");
      if ("function" != typeof e3.onBodySent && void 0 !== e3.onBodySent) throw new c("invalid onBodySent method");
      if (A3 || "CONNECT" === t3) {
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
    }, buildURL: function(e3, t3) {
      if (e3.includes("?") || e3.includes("#")) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      const A3 = g(t3);
      return A3 && (e3 += "?" + A3), e3;
    }, throwIfAborted: function(e3) {
      if (e3) {
        if ("function" == typeof e3.throwIfAborted) e3.throwIfAborted();
        else if (e3.aborted) {
          const e4 = new Error("The operation was aborted");
          throw e4.name = "AbortError", e4;
        }
      }
    }, addAbortListener: function(e3, t3) {
      return "addEventListener" in e3 ? (e3.addEventListener("abort", t3, { once: true }), () => e3.removeEventListener("abort", t3)) : (e3.addListener("abort", t3), () => e3.removeListener("abort", t3));
    }, parseRangeHeader: function(e3) {
      if (null == e3 || "" === e3) return { start: 0, end: null, size: null };
      const t3 = e3 ? e3.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
      return t3 ? { start: parseInt(t3[1]), end: t3[2] ? parseInt(t3[2]) : null, size: t3[3] ? parseInt(t3[3]) : null } : null;
    }, nodeMajor: h, nodeMinor: d, nodeHasAutoSelectFamily: h > 18 || 18 === h && d >= 13, safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"] };
  }