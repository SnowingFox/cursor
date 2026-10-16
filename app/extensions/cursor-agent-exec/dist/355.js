"use strict";
exports.id = 355, exports.ids = [355, 736], exports.modules = { 1024: (e, t, o) => {
  function r(e2) {
    const t2 = e2 && "object" == typeof e2 && "reason" in e2 ? e2.reason : void 0;
    if (t2) {
      if (t2 instanceof Error) {
        const e4 = new Error("Request aborted");
        return e4.name = "AbortError", e4.cause = t2, e4;
      }
      const e3 = new Error(String(t2));
      return e3.name = "AbortError", e3;
    }
    const o2 = new Error("Request aborted");
    return o2.name = "AbortError", o2;
  }
  o.d(t, { F: () => r });
}, 17512: (e, t, o) => {
  o.d(t, { f: () => i });
  var r = o(57075), n = o(81284);
  const s = 6e3;
  async function i(e2, t2, o2 = s, i2 = false) {
    const a = t2.headers, c = a ? a.Expect || a.expect : void 0;
    let u = -1, h = true;
    i2 || "100-continue" !== c || (h = await Promise.race([new Promise((e3) => {
      u = Number(n.N.setTimeout(() => e3(true), Math.max(s, o2)));
    }), new Promise((t3) => {
      e2.on("continue", () => {
        n.N.clearTimeout(u), t3(true);
      }), e2.on("response", () => {
        n.N.clearTimeout(u), t3(false);
      }), e2.on("error", () => {
        n.N.clearTimeout(u), t3(false);
      });
    })])), h && (function(e3, t3) {
      if (t3 instanceof r.Readable) return void t3.pipe(e3);
      if (t3) {
        const o3 = Buffer.isBuffer(t3);
        if (o3 || "string" == typeof t3) return void (o3 && 0 === t3.byteLength ? e3.end() : e3.end(t3));
        const r2 = t3;
        return "object" == typeof r2 && r2.buffer && "number" == typeof r2.byteOffset && "number" == typeof r2.byteLength ? void e3.end(Buffer.from(r2.buffer, r2.byteOffset, r2.byteLength)) : void e3.end(Buffer.from(t3));
      }
      e3.end();
    })(e2, t2.body);
  }
}, 20753: (e, t, o) => {
  o.d(t, { w: () => d, $: () => p });
  var r = o(96851), n = o(73931), s = o(1024);
  const i = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  var a = o(74459), c = o(44708), u = o.n(c), h = o(81284);
  var l = o(17512);
  const d = 0;
  let f, m;
  class p {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = false;
    metadata = { handlerProtocol: "http/1.1" };
    static create(e2) {
      return "function" == typeof e2?.handle ? e2 : new p(e2);
    }
    static checkSocketUsage(e2, t2, o2 = console) {
      const { sockets: n2, requests: s2, maxSockets: i2 } = e2;
      if ("number" != typeof i2 || i2 === 1 / 0) return t2;
      if (Date.now() - 15e3 < t2) return t2;
      if (n2 && s2) for (const e3 in n2) {
        if (!(0, r.hasOwn)(n2, e3)) continue;
        const t3 = n2[e3]?.length ?? 0, a2 = s2[e3]?.length ?? 0;
        if (t3 >= i2 && a2 >= 2 * i2) return o2?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${t3} and ${a2} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now();
      }
      return t2;
    }
    constructor(e2) {
      this.configProvider = new Promise((t2, o2) => {
        "function" == typeof e2 ? e2().then((e3) => {
          t2(this.resolveDefaultConfig(e3));
        }).catch(o2) : t2(this.resolveDefaultConfig(e2));
      });
    }
    destroy() {
      this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(e2, { abortSignal: t2, requestTimeout: o2 } = {}) {
      this.config || (this.config = await this.configProvider);
      const r2 = this.config, c2 = r2.logger, d2 = "https:" === e2.protocol;
      return d2 || this.config.httpAgent || (this.config.httpAgent = await this.config.httpAgentProvider()), new Promise((g, y) => {
        let w, T = -1, b = -1, A = -1, v = -1, E = -1;
        const k = () => {
          h.N.clearTimeout(T), h.N.clearTimeout(b), h.N.clearTimeout(A), h.N.clearTimeout(v), h.N.clearTimeout(E);
        }, C = async (e3) => {
          await w, k(), y(e3);
        };
        if (t2?.aborted) {
          const e3 = (0, s.F)(t2);
          return void C(e3);
        }
        const N = e2.headers, R = !!N && "100-continue" === (N.Expect ?? N.expect);
        let S = d2 ? r2.httpsAgent : r2.httpAgent;
        R && !this.externalAgent && (S = new (d2 ? u().Agent : f)({ keepAlive: false, maxSockets: 1 / 0 })), T = h.N.setTimeout(() => {
          this.socketWarningTimestamp = p.checkSocketUsage(S, this.socketWarningTimestamp, c2);
        }, r2.socketAcquisitionWarningTimeout ?? (r2.requestTimeout ?? 2e3) + (r2.connectionTimeout ?? 1e3));
        const q = e2.query ? (0, n.buildQueryString)(e2.query) : "";
        let O;
        if (null != e2.username || null != e2.password) {
          O = `${e2.username ?? ""}:${e2.password ?? ""}`;
        }
        let I = e2.path;
        q && (I += `?${q}`), e2.fragment && (I += `#${e2.fragment}`);
        let x = e2.hostname ?? "";
        x = "[" === x[0] && x.endsWith("]") ? e2.hostname.slice(1, -1) : e2.hostname;
        const _ = { headers: e2.headers, host: x, method: e2.method, path: I, port: e2.port, agent: S, auth: O }, P = (d2 ? u().request : m)(_, (e3) => {
          (async (e4) => {
            await w, k(), g(e4);
          })({ response: new n.HttpResponse({ statusCode: e3.statusCode || -1, reason: e3.statusMessage, headers: (0, a.u)(e3.headers), body: e3 }) });
        });
        if (P.on("error", (e3) => {
          i.includes(e3.code) ? C(Object.assign(e3, { name: "TimeoutError" })) : C(e3);
        }), t2) {
          const e3 = () => {
            P.destroy();
            const e4 = (0, s.F)(t2);
            C(e4);
          };
          if ("function" == typeof t2.addEventListener) {
            const o3 = t2;
            o3.addEventListener("abort", e3, { once: true }), P.once("close", () => o3.removeEventListener("abort", e3));
          } else t2.onabort = e3;
        }
        const L = o2 ?? r2.requestTimeout;
        b = ((e3, t3, o3 = 0) => {
          if (!o3) return -1;
          const r3 = (r4) => {
            const n2 = h.N.setTimeout(() => {
              e3.destroy(), t3(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${o3} ms.`), { name: "TimeoutError" }));
            }, o3 - r4), s2 = (e4) => {
              e4?.connecting ? e4.on("connect", () => {
                h.N.clearTimeout(n2);
              }) : h.N.clearTimeout(n2);
            };
            e3.socket ? s2(e3.socket) : e3.on("socket", s2);
          };
          return o3 < 2e3 ? (r3(0), 0) : h.N.setTimeout(r3.bind(null, 1e3), 1e3);
        })(P, C, r2.connectionTimeout), A = ((e3, t3, o3 = 0, r3, n2) => o3 ? h.N.setTimeout(() => {
          let s2 = `@smithy/node-http-handler - [${r3 ? "ERROR" : "WARN"}] a request has exceeded the configured ${o3} ms requestTimeout.`;
          if (r3) {
            const o4 = Object.assign(new Error(s2), { name: "TimeoutError", code: "ETIMEDOUT" });
            e3.destroy(o4), t3(o4);
          } else s2 += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", n2?.warn?.(s2);
        }, o3) : -1)(P, C, L, r2.throwOnRequestTimeout, c2 ?? console), v = ((e3, t3, o3 = 0) => {
          const r3 = (r4) => {
            const n2 = o3 - r4, s2 = () => {
              e3.destroy(), t3(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${o3} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
            };
            e3.socket ? (e3.socket.setTimeout(n2, s2), e3.on("close", () => e3.socket?.removeListener("timeout", s2))) : e3.setTimeout(n2, s2);
          };
          return 0 < o3 && o3 < 6e3 ? (r3(0), 0) : h.N.setTimeout(r3.bind(null, 0 === o3 ? 0 : 3e3), 3e3);
        })(P, C, r2.socketTimeout);
        const U = _.agent;
        "object" == typeof U && "keepAlive" in U && (E = ((e3, { keepAlive: t3, keepAliveMsecs: o3 }, r3 = 3e3) => {
          if (true !== t3) return -1;
          const n2 = () => {
            e3.socket ? e3.socket.setKeepAlive(t3, o3 || 0) : e3.on("socket", (e4) => {
              e4.setKeepAlive(t3, o3 || 0);
            });
          };
          return 0 === r3 ? (n2(), 0) : h.N.setTimeout(n2, r3);
        })(P, { keepAlive: U.keepAlive, keepAliveMsecs: U.keepAliveMsecs })), w = (0, l.f)(P, e2, L, this.externalAgent).catch((e3) => (k(), y(e3)));
      });
    }
    updateHttpClientConfig(e2, t2) {
      this.config = void 0, this.configProvider = this.configProvider.then((o2) => e2 === /* @__PURE__ */ Symbol.for("logger") ? { ...o2, logger: o2.logger ?? t2 } : { ...o2, [e2]: t2 });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    resolveDefaultConfig(e2) {
      const { requestTimeout: t2, connectionTimeout: r2, socketTimeout: n2, socketAcquisitionWarningTimeout: s2, httpAgent: i2, httpsAgent: a2, throwOnRequestTimeout: c2, logger: h2 } = e2 || {}, l2 = true;
      return { connectionTimeout: r2, requestTimeout: t2, socketTimeout: n2, socketAcquisitionWarningTimeout: s2, throwOnRequestTimeout: c2, httpAgentProvider: async () => {
        const e3 = await Promise.resolve().then(o.t.bind(o, 37067, 23)), { Agent: t3, request: r3 } = e3.default ?? e3;
        return m = r3, f = t3, i2 instanceof f || "function" == typeof i2?.destroy ? (this.externalAgent = true, i2) : new f({ keepAlive: l2, maxSockets: 50, ...i2 });
      }, httpsAgent: (() => a2 instanceof u().Agent || "function" == typeof a2?.destroy ? (this.externalAgent = true, a2) : new (u()).Agent({ keepAlive: l2, maxSockets: 50, ...a2 }))(), logger: h2 };
    }
  }
}, 50333: (e, t, o) => {
  o.d(t, { K: () => r });
  class r {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e2) {
      this.method = e2.method || "GET", this.hostname = e2.hostname || "localhost", this.port = e2.port, this.query = e2.query || {}, this.headers = e2.headers || {}, this.body = e2.body, this.protocol = e2.protocol ? ":" !== e2.protocol.slice(-1) ? `${e2.protocol}:` : e2.protocol : "https:", this.path = e2.path ? "/" !== e2.path.charAt(0) ? `/${e2.path}` : e2.path : "/", this.username = e2.username, this.password = e2.password, this.fragment = e2.fragment;
    }
    static clone(e2) {
      const t2 = new r({ ...e2, headers: { ...e2.headers } });
      var o2;
      return t2.query && (t2.query = (o2 = t2.query, Object.keys(o2).reduce((e3, t3) => {
        const r2 = o2[t3];
        return { ...e3, [t3]: Array.isArray(r2) ? [...r2] : r2 };
      }, {}))), t2;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "method" in t2 && "protocol" in t2 && "hostname" in t2 && "path" in t2 && "object" == typeof t2.query && "object" == typeof t2.headers;
    }
    clone() {
      return r.clone(this);
    }
  }
}, 55936: (e, t, o) => {
  o.d(t, { n: () => s });
  var r = o(90443), n = o(6846);
  const s = (e2) => {
    let t2;
    if (t2 = "string" == typeof e2 ? (0, n.a)(e2) : e2, "object" != typeof t2 || "number" != typeof t2.byteOffset || "number" != typeof t2.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return (0, r.Q)(t2.buffer, t2.byteOffset, t2.byteLength).toString("base64");
  };
}, 74459: (e, t, o) => {
  o.d(t, { u: () => n });
  var r = o(96851);
  const n = (e2) => {
    const t2 = {};
    for (const o2 in e2) {
      if (!(0, r.hasOwn)(e2, o2)) continue;
      const n2 = e2[o2];
      t2[o2] = Array.isArray(n2) ? n2.join(",") : n2;
    }
    return t2;
  };
}, 81284: (e, t, o) => {
  o.d(t, { N: () => r });
  const r = { setTimeout: (e2, t2) => setTimeout(e2, t2), clearTimeout: (e2) => clearTimeout(e2) };
}, 93355: (e, t, o) => {
  o.d(t, { fromHttp: () => A });
  var r = o(97464), n = o(20753), s = o(63725), i = o(51455), a = o.n(i);
  var c = o(50333), u = o(96851), h = o(90443), l = o(2203), d = o(55936), f = o(2909), m = o(86507);
  const p = (e2) => "function" == typeof ReadableStream && (e2?.constructor?.name === ReadableStream.name || e2 instanceof ReadableStream), g = "The stream has already been transformed.", y = (e2) => {
    if (!w(e2) && !p(e2)) {
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e2?.__proto__?.constructor?.name || e2}`);
    }
    let t2 = false;
    const o2 = async () => {
      if (t2) throw new Error(g);
      return t2 = true, await (0, u.streamCollector)(e2);
    };
    return Object.assign(e2, { transformToByteArray: o2, transformToString: async (e3) => {
      const t3 = await o2();
      if ("base64" === e3) return (0, d.n)(t3);
      if ("hex" === e3) return (0, f.n)(t3);
      if (void 0 === e3 || "utf8" === e3 || "utf-8" === e3) return (0, m.P)(t3);
      if ("function" == typeof TextDecoder) return new TextDecoder(e3).decode(t3);
      throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
    }, transformToWebStream: () => {
      if (t2) throw new Error(g);
      if (t2 = true, w(e2)) return ((e3) => {
        if ("function" != typeof e3.stream) throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        return e3.stream();
      })(e2);
      if (p(e2)) return e2;
      throw new Error(`Cannot transform payload to web stream, got ${e2}`);
    } });
  }, w = (e2) => "function" == typeof Blob && e2 instanceof Blob, T = "The stream has already been transformed.";
  async function b(e2, t2) {
    const o2 = ((e3) => {
      if (!(e3 instanceof l.Readable)) try {
        return y(e3);
      } catch (t4) {
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${e3?.__proto__?.constructor?.name || e3}`);
      }
      let t3 = false;
      const o3 = async () => {
        if (t3) throw new Error(T);
        return t3 = true, await (0, u.streamCollector)(e3);
      };
      return Object.assign(e3, { transformToByteArray: o3, transformToString: async (e4) => {
        const t4 = await o3();
        return void 0 === e4 || Buffer.isEncoding(e4) ? (0, h.Q)(t4.buffer, t4.byteOffset, t4.byteLength).toString(e4) : new TextDecoder(e4).decode(t4);
      }, transformToWebStream: () => {
        if (t3) throw new Error(T);
        if (null !== e3.readableFlowing) throw new Error("The stream has been consumed by other callbacks.");
        if ("function" != typeof l.Readable.toWeb) throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
        return t3 = true, l.Readable.toWeb(e3);
      } });
    })(e2.body), r2 = await o2.transformToString();
    if (200 === e2.statusCode) {
      const e3 = JSON.parse(r2);
      if ("string" != typeof e3.AccessKeyId || "string" != typeof e3.SecretAccessKey || "string" != typeof e3.Token || "string" != typeof e3.Expiration) throw new s.C("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: t2 });
      return { accessKeyId: e3.AccessKeyId, secretAccessKey: e3.SecretAccessKey, sessionToken: e3.Token, expiration: (0, u.parseRfc3339DateTime)(e3.Expiration) };
    }
    if (e2.statusCode >= 400 && e2.statusCode < 500) {
      let o3 = {};
      try {
        o3 = JSON.parse(r2);
      } catch (e3) {
      }
      throw Object.assign(new s.C(`Server responded with status: ${e2.statusCode}`, { logger: t2 }), { Code: o3.Code, Message: o3.Message });
    }
    throw new s.C(`Server responded with status: ${e2.statusCode}`, { logger: t2 });
  }
  const A = (e2 = {}) => {
    let t2;
    e2.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
    const o2 = e2.awsContainerCredentialsRelativeUri ?? process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI, i2 = e2.awsContainerCredentialsFullUri ?? process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI, u2 = e2.awsContainerAuthorizationToken ?? process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN, h2 = e2.awsContainerAuthorizationTokenFile ?? process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE, l2 = "NoOpLogger" !== e2.logger?.constructor?.name && e2.logger?.warn ? e2.logger.warn.bind(e2.logger) : console.warn;
    if (o2 && i2 && (l2("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), l2("awsContainerCredentialsFullUri will take precedence.")), u2 && h2 && (l2("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), l2("awsContainerAuthorizationToken will take precedence.")), i2) t2 = i2;
    else {
      if (!o2) throw new s.C("No HTTP credential provider host provided.\nSet AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.", { logger: e2.logger });
      t2 = `http://169.254.170.2${o2}`;
    }
    const d2 = new URL(t2);
    ((e3, t3) => {
      if ("https:" !== e3.protocol && "169.254.170.2" !== e3.hostname && "169.254.170.23" !== e3.hostname && "[fd00:ec2::23]" !== e3.hostname) {
        if (e3.hostname.includes("[")) {
          if ("[::1]" === e3.hostname || "[0000:0000:0000:0000:0000:0000:0000:0001]" === e3.hostname) return;
        } else {
          if ("localhost" === e3.hostname) return;
          const t4 = e3.hostname.split("."), o3 = (e4) => {
            const t5 = parseInt(e4, 10);
            return 0 <= t5 && t5 <= 255;
          };
          if ("127" === t4[0] && o3(t4[1]) && o3(t4[2]) && o3(t4[3]) && 4 === t4.length) return;
        }
        throw new s.C("URL not accepted. It must either be HTTPS or match one of the following:\n  - loopback CIDR 127.0.0.0/8 or [::1/128]\n  - ECS container host 169.254.170.2\n  - EKS container host 169.254.170.23 or [fd00:ec2::23]", { logger: t3 });
      }
    })(d2, e2.logger);
    const f2 = n.$.create({ requestTimeout: e2.timeout ?? 1e3, connectionTimeout: e2.timeout ?? 1e3 });
    return m2 = async () => {
      const t3 = (function(e3) {
        return new c.K({ protocol: e3.protocol, hostname: e3.hostname, port: Number(e3.port), path: e3.pathname, query: Array.from(e3.searchParams.entries()).reduce((e4, [t4, o3]) => (e4[t4] = o3, e4), {}), fragment: e3.hash });
      })(d2);
      u2 ? t3.headers.Authorization = u2 : h2 && (t3.headers.Authorization = (await a().readFile(h2)).toString());
      try {
        return b((await f2.handle(t3)).response).then((e3) => (0, r.setCredentialFeature)(e3, "CREDENTIALS_HTTP", "z"));
      } catch (t4) {
        throw new s.C(String(t4), { logger: e2.logger });
      }
    }, p2 = e2.maxRetries ?? 3, g2 = e2.timeout ?? 1e3, async () => {
      for (let e3 = 0; e3 < p2; ++e3) try {
        return await m2();
      } catch (e4) {
        await new Promise((e5) => setTimeout(e5, g2));
      }
      return await m2();
    };
    var m2, p2, g2;
  };
} };
