"use strict";
var pc = Object.create;
var Yt = Object.defineProperty;
var hc = Object.getOwnPropertyDescriptor;
var dc = Object.getOwnPropertyNames;
var gc = Object.getPrototypeOf, mc = Object.prototype.hasOwnProperty;
var F = (e2, t) => () => (t || e2((t = { exports: {} }).exports, t), t.exports), yc = (e2, t) => {
  for (var n in t) Yt(e2, n, { get: t[n], enumerable: true });
}, Yr = (e2, t, n, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of dc(t)) !mc.call(e2, r) && r !== n && Yt(e2, r, { get: () => t[r], enumerable: !(i = hc(t, r)) || i.enumerable });
  return e2;
};
var ye = (e2, t, n) => (n = e2 != null ? pc(gc(e2)) : {}, Yr(t || !e2 || !e2.__esModule ? Yt(n, "default", { value: e2, enumerable: true }) : n, e2)), xc = (e2) => Yr(Yt({}, "__esModule", { value: true }), e2);
var Vr = F((Kr) => {
  (() => {
    var e2 = { 46: (o, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: true }), s.default = function(a, u, { signal: l } = {}) {
        return new Promise(((c, f) => {
          function p() {
            l?.removeEventListener("abort", p), a.removeListener(u, d), a.removeListener("error", h);
          }
          function d(...x) {
            p(), c(x);
          }
          function h(x) {
            p(), f(x);
          }
          l?.addEventListener("abort", p), a.on(u, d), a.on("error", h);
        }));
      };
    }, 54: function(o, s, a) {
      "use strict";
      var u = this && this.__importDefault || function(x) {
        return x && x.__esModule ? x : { default: x };
      };
      let l = a(361), c = u(a(374)), f = u(a(304)), p = c.default("agent-base");
      function d() {
        let { stack: x } = new Error();
        return typeof x == "string" && x.split(`
`).some(((A) => A.indexOf("(https.js:") !== -1 || A.indexOf("node:https:") !== -1));
      }
      function h(x, A) {
        return new h.Agent(x, A);
      }
      (function(x) {
        class A extends l.EventEmitter {
          constructor(P, b) {
            super();
            let T = b;
            typeof P == "function" ? this.callback = P : P && (T = P), this.timeout = null, T && typeof T.timeout == "number" && (this.timeout = T.timeout), this.maxFreeSockets = 1, this.maxSockets = 1, this.maxTotalSockets = 1 / 0, this.sockets = {}, this.freeSockets = {}, this.requests = {}, this.options = {};
          }
          get defaultPort() {
            return typeof this.explicitDefaultPort == "number" ? this.explicitDefaultPort : d() ? 443 : 80;
          }
          set defaultPort(P) {
            this.explicitDefaultPort = P;
          }
          get protocol() {
            return typeof this.explicitProtocol == "string" ? this.explicitProtocol : d() ? "https:" : "http:";
          }
          set protocol(P) {
            this.explicitProtocol = P;
          }
          callback(P, b, T) {
            throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
          }
          addRequest(P, b) {
            let T = Object.assign({}, b);
            typeof T.secureEndpoint != "boolean" && (T.secureEndpoint = d()), T.host == null && (T.host = "localhost"), T.port == null && (T.port = T.secureEndpoint ? 443 : 80), T.protocol == null && (T.protocol = T.secureEndpoint ? "https:" : "http:"), T.host && T.path && delete T.path, delete T.agent, delete T.hostname, delete T._defaultAgent, delete T.defaultPort, delete T.createConnection, P._last = true, P.shouldKeepAlive = false;
            let C = false, O = null, S = T.timeout || this.timeout, v = (E) => {
              P._hadError || (P.emit("error", E), P._hadError = true);
            }, g = () => {
              O = null, C = true;
              let E = new Error(`A "socket" was not created for HTTP request before ${S}ms`);
              E.code = "ETIMEOUT", v(E);
            }, k = (E) => {
              C || (O !== null && (clearTimeout(O), O = null), v(E));
            }, m = (E) => {
              if (C) return;
              if (O != null && (clearTimeout(O), O = null), _ = E, !!_ && typeof _.addRequest == "function") return p("Callback returned another Agent instance %o", E.constructor.name), void E.addRequest(P, T);
              var _;
              if (E) return E.once("free", (() => {
                this.freeSocket(E, T);
              })), void P.onSocket(E);
              let R = new Error(`no Duplex stream was returned to agent-base for \`${P.method} ${P.path}\``);
              v(R);
            };
            if (typeof this.callback == "function") {
              this.promisifiedCallback || (this.callback.length >= 3 ? (p("Converting legacy callback function to promise"), this.promisifiedCallback = f.default(this.callback)) : this.promisifiedCallback = this.callback), typeof S == "number" && S > 0 && (O = setTimeout(g, S)), "port" in T && typeof T.port != "number" && (T.port = Number(T.port));
              try {
                p("Resolving socket for %o request: %o", T.protocol, `${P.method} ${P.path}`), Promise.resolve(this.promisifiedCallback(P, T)).then(m, k);
              } catch (E) {
                Promise.reject(E).catch(k);
              }
            } else v(new Error("`callback` is not defined"));
          }
          freeSocket(P, b) {
            p("Freeing socket %o %o", P.constructor.name, b), P.destroy();
          }
          destroy() {
            p("Destroying agent %o", this.constructor.name);
          }
        }
        x.Agent = A, x.prototype = x.Agent.prototype;
      })(h || (h = {})), o.exports = h;
    }, 304: (o, s) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: true }), s.default = function(a) {
        return function(u, l) {
          return new Promise(((c, f) => {
            a.call(this, u, l, ((p, d) => {
              p ? f(p) : c(d);
            }));
          }));
        };
      };
    }, 370: function(o, s, a) {
      "use strict";
      var u = this && this.__awaiter || function(P, b, T, C) {
        return new (T || (T = Promise))((function(O, S) {
          function v(m) {
            try {
              k(C.next(m));
            } catch (E) {
              S(E);
            }
          }
          function g(m) {
            try {
              k(C.throw(m));
            } catch (E) {
              S(E);
            }
          }
          function k(m) {
            var E;
            m.done ? O(m.value) : (E = m.value, E instanceof T ? E : new T((function(_) {
              _(E);
            }))).then(v, g);
          }
          k((C = C.apply(P, b || [])).next());
        }));
      }, l = this && this.__importDefault || function(P) {
        return P && P.__esModule ? P : { default: P };
      };
      Object.defineProperty(s, "__esModule", { value: true });
      let c = l(a(808)), f = l(a(404)), p = l(a(310)), d = l(a(374)), h = l(a(46)), x = a(54), A = (0, d.default)("http-proxy-agent");
      class L extends x.Agent {
        constructor(b) {
          let T;
          if (T = typeof b == "string" ? p.default.parse(b) : b, !T) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
          A("Creating new HttpProxyAgent instance: %o", T), super(T);
          let C = Object.assign({}, T);
          var O;
          this.secureProxy = T.secureProxy || typeof (O = C.protocol) == "string" && /^https:?$/i.test(O), C.host = C.hostname || C.host, typeof C.port == "string" && (C.port = parseInt(C.port, 10)), !C.port && C.host && (C.port = this.secureProxy ? 443 : 80), C.host && C.path && (delete C.path, delete C.pathname), this.proxy = C;
        }
        callback(b, T) {
          return u(this, void 0, void 0, (function* () {
            let { proxy: C, secureProxy: O } = this, S = p.default.parse(b.path), v;
            if (S.protocol || (S.protocol = "http:"), S.hostname || (S.hostname = T.hostname || T.host || null), S.port == null && (T.port, 1) && (S.port = String(T.port)), S.port === "80" && (S.port = ""), b.path = p.default.format(S), C.auth && b.setHeader("Proxy-Authorization", `Basic ${Buffer.from(C.auth).toString("base64")}`), O ? (A("Creating `tls.Socket`: %o", C), v = f.default.connect(C)) : (A("Creating `net.Socket`: %o", C), v = c.default.connect(C)), b._header) {
              let g, k;
              A("Regenerating stored HTTP header string for request"), b._header = null, b._implicitHeader(), b.output && b.output.length > 0 ? (A("Patching connection write() output buffer with updated header"), g = b.output[0], k = g.indexOf(`\r
\r
`) + 4, b.output[0] = b._header + g.substring(k), A("Output buffer: %o", b.output)) : b.outputData && b.outputData.length > 0 && (A("Patching connection write() output buffer with updated header"), g = b.outputData[0].data, k = g.indexOf(`\r
\r
`) + 4, b.outputData[0].data = b._header + g.substring(k), A("Output buffer: %o", b.outputData[0].data));
            }
            return yield (0, h.default)(v, "connect"), v;
          }));
        }
      }
      s.default = L;
    }, 201: function(o, s, a) {
      "use strict";
      let u = (this && this.__importDefault || function(c) {
        return c && c.__esModule ? c : { default: c };
      })(a(370));
      function l(c) {
        return new u.default(c);
      }
      (function(c) {
        c.HttpProxyAgent = u.default, c.prototype = u.default.prototype;
      })(l || (l = {})), o.exports = l;
    }, 146: function(o, s, a) {
      "use strict";
      var u = this && this.__awaiter || function(T, C, O, S) {
        return new (O || (O = Promise))((function(v, g) {
          function k(_) {
            try {
              E(S.next(_));
            } catch (R) {
              g(R);
            }
          }
          function m(_) {
            try {
              E(S.throw(_));
            } catch (R) {
              g(R);
            }
          }
          function E(_) {
            var R;
            _.done ? v(_.value) : (R = _.value, R instanceof O ? R : new O((function(y) {
              y(R);
            }))).then(k, m);
          }
          E((S = S.apply(T, C || [])).next());
        }));
      }, l = this && this.__importDefault || function(T) {
        return T && T.__esModule ? T : { default: T };
      };
      Object.defineProperty(s, "__esModule", { value: true });
      let c = l(a(808)), f = l(a(404)), p = l(a(310)), d = l(a(491)), h = l(a(374)), x = a(54), A = l(a(829)), L = h.default("https-proxy-agent:agent");
      class P extends x.Agent {
        constructor(C) {
          let O;
          if (O = typeof C == "string" ? p.default.parse(C) : C, !O) throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
          L("creating new HttpsProxyAgent instance: %o", O), super(O);
          let S = Object.assign({}, O);
          var v;
          this.secureProxy = O.secureProxy || typeof (v = S.protocol) == "string" && /^https:?$/i.test(v), S.host = S.hostname || S.host, typeof S.port == "string" && (S.port = parseInt(S.port, 10)), !S.port && S.host && (S.port = this.secureProxy ? 443 : 80), this.secureProxy && !("ALPNProtocols" in S) && (S.ALPNProtocols = ["http 1.1"]), S.host && S.path && (delete S.path, delete S.pathname), this.proxy = S;
        }
        callback(C, O) {
          return u(this, void 0, void 0, (function* () {
            let { proxy: S, secureProxy: v } = this, g;
            v ? (L("Creating `tls.Socket`: %o", S), g = f.default.connect(S)) : (L("Creating `net.Socket`: %o", S), g = c.default.connect(S));
            let k = Object.assign({}, S.headers), m = `CONNECT ${O.host}:${O.port} HTTP/1.1\r
`;
            S.auth && (k["Proxy-Authorization"] = `Basic ${Buffer.from(S.auth).toString("base64")}`);
            let { host: E, port: _, secureEndpoint: R } = O;
            /* @__PURE__ */ (function(D, Y) {
              return !!(!Y && D === 80 || Y && D === 443);
            })(_, R) || (E += `:${_}`), k.Host = E, k.Connection = "close";
            for (let D of Object.keys(k)) m += `${D}: ${k[D]}\r
`;
            let y = A.default(g);
            g.write(`${m}\r
`);
            let { statusCode: w, buffered: j } = yield y;
            if (w === 200) {
              if (C.once("socket", b), O.secureEndpoint) {
                L("Upgrading socket connection to TLS");
                let D = O.servername || O.host;
                return f.default.connect(Object.assign(Object.assign({}, (function(Y, ...U) {
                  let V = {}, se;
                  for (se in Y) U.includes(se) || (V[se] = Y[se]);
                  return V;
                })(O, "host", "hostname", "path", "port")), { socket: g, servername: D }));
              }
              return g;
            }
            g.destroy();
            let M = new c.default.Socket({ writable: false });
            return M.readable = true, C.once("socket", ((D) => {
              L("replaying proxy buffer for failed request"), d.default(D.listenerCount("data") > 0), D.push(j), D.push(null);
            })), M;
          }));
        }
      }
      function b(T) {
        T.resume();
      }
      s.default = P;
    }, 18: function(o, s, a) {
      "use strict";
      let u = (this && this.__importDefault || function(c) {
        return c && c.__esModule ? c : { default: c };
      })(a(146));
      function l(c) {
        return new u.default(c);
      }
      (function(c) {
        c.HttpsProxyAgent = u.default, c.prototype = u.default.prototype;
      })(l || (l = {})), o.exports = l;
    }, 829: function(o, s, a) {
      "use strict";
      var u = this && this.__importDefault || function(c) {
        return c && c.__esModule ? c : { default: c };
      };
      Object.defineProperty(s, "__esModule", { value: true });
      let l = u(a(374)).default("https-proxy-agent:parse-proxy-response");
      s.default = function(c) {
        return new Promise(((f, p) => {
          let d = 0, h = [];
          function x() {
            let P = c.read();
            P ? (function(b) {
              h.push(b), d += b.length;
              let T = Buffer.concat(h, d);
              if (T.indexOf(`\r
\r
`) === -1) return l("have not received end of HTTP headers yet..."), void x();
              let C = T.toString("ascii", 0, T.indexOf(`\r
`)), O = +C.split(" ")[1];
              l("got proxy server response: %o", C), f({ statusCode: O, buffered: T });
            })(P) : c.once("readable", x);
          }
          function A(P) {
            l("onclose had error %o", P);
          }
          function L() {
            l("onend");
          }
          c.on("error", (function P(b) {
            c.removeListener("end", L), c.removeListener("error", P), c.removeListener("close", A), c.removeListener("readable", x), l("onerror %o", b), p(b);
          })), c.on("close", A), c.on("end", L), x();
        }));
      };
    }, 539: function(o, s, a) {
      "use strict";
      var u, l = this && this.__extends || (u = function(v, g) {
        return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, m) {
          k.__proto__ = m;
        } || function(k, m) {
          for (var E in m) Object.prototype.hasOwnProperty.call(m, E) && (k[E] = m[E]);
        }, u(v, g);
      }, function(v, g) {
        if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
        function k() {
          this.constructor = v;
        }
        u(v, g), v.prototype = g === null ? Object.create(g) : (k.prototype = g.prototype, new k());
      }), c = this && this.__assign || function() {
        return c = Object.assign || function(v) {
          for (var g, k = 1, m = arguments.length; k < m; k++) for (var E in g = arguments[k]) Object.prototype.hasOwnProperty.call(g, E) && (v[E] = g[E]);
          return v;
        }, c.apply(this, arguments);
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.getErrorStatusDescription = s.xhr = s.configure = void 0;
      var f = a(685), p = a(687), d = a(310), h = a(472), x = a(796), A = a(201), L = a(18);
      if (process.env.VSCODE_NLS_CONFIG) {
        var P = process.env.VSCODE_NLS_CONFIG;
        h.config(JSON.parse(P));
      }
      var b = h.loadMessageBundle(), T = void 0, C = true;
      function O(v) {
        var g;
        return new Promise((function(k, m) {
          var E = (0, d.parse)(v.url), _ = { hostname: E.hostname, agent: !!v.agent && v.agent, port: E.port ? parseInt(E.port) : E.protocol === "https:" ? 443 : 80, path: E.path, method: v.type || "GET", headers: v.headers, rejectUnauthorized: typeof v.strictSSL != "boolean" || v.strictSSL };
          v.user && v.password && (_.auth = v.user + ":" + v.password);
          var R = function(y) {
            if (y.statusCode >= 300 && y.statusCode < 400 && v.followRedirects && v.followRedirects > 0 && y.headers.location) {
              var w = y.headers.location;
              w.startsWith("/") && (w = (0, d.format)({ protocol: E.protocol, hostname: E.hostname, port: E.port, pathname: w })), k(O((function(j) {
                for (var M = [], D = 1; D < arguments.length; D++) M[D - 1] = arguments[D];
                return M.forEach((function(Y) {
                  return Object.keys(Y).forEach((function(U) {
                    return j[U] = Y[U];
                  }));
                })), j;
              })({}, v, { url: w, followRedirects: v.followRedirects - 1 })));
            } else k({ req: g, res: y });
          };
          (g = E.protocol === "https:" ? p.request(_, R) : f.request(_, R)).on("error", m), v.timeout && g.setTimeout(v.timeout), v.data && g.write(v.data), g.end(), v.token && (v.token.isCancellationRequested && g.destroy(new S()), v.token.onCancellationRequested((function() {
            g.destroy(new S());
          })));
        }));
      }
      s.configure = function(v, g) {
        T = v, C = g;
      }, s.xhr = function(v) {
        return typeof (v = c({}, v)).strictSSL != "boolean" && (v.strictSSL = C), v.agent || (v.agent = (function(g, k) {
          k === void 0 && (k = {});
          var m = (0, d.parse)(g), E = k.proxyUrl || (function(y) {
            return y.protocol === "http:" ? process.env.HTTP_PROXY || process.env.http_proxy || null : y.protocol === "https:" && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
          })(m);
          if (!E) return null;
          var _ = (0, d.parse)(E);
          if (!/^https?:$/.test(_.protocol)) return null;
          var R = { host: _.hostname, port: Number(_.port), auth: _.auth, rejectUnauthorized: typeof k.strictSSL != "boolean" || k.strictSSL, protocol: _.protocol };
          return m.protocol === "http:" ? A(R) : L(R);
        })(v.url, { proxyUrl: T, strictSSL: C })), typeof v.followRedirects != "number" && (v.followRedirects = 5), O(v).then((function(g) {
          return new Promise((function(k, m) {
            var E, _, R = g.res, y = R, w = false, j = R.headers && R.headers["content-encoding"];
            if (j && (E = v.type, _ = g.res.statusCode, !(E === "HEAD" || _ >= 100 && _ < 200 || _ === 204 || _ === 304))) {
              var M = { flush: x.constants.Z_SYNC_FLUSH, finishFlush: x.constants.Z_SYNC_FLUSH };
              if (j === "gzip") {
                var D = x.createGunzip(M);
                R.pipe(D), y = D;
              } else if (j === "deflate") {
                var Y = x.createInflate(M);
                R.pipe(Y), y = Y;
              }
            }
            var U = [];
            y.on("data", (function(V) {
              return U.push(V);
            })), y.on("end", (function() {
              if (!w) {
                if (w = true, v.followRedirects > 0 && (R.statusCode >= 300 && R.statusCode <= 303 || R.statusCode === 307)) {
                  var V = R.headers.location;
                  if (V.startsWith("/")) {
                    var se = (0, d.parse)(v.url);
                    V = (0, d.format)({ protocol: se.protocol, hostname: se.hostname, port: se.port, pathname: V });
                  }
                  if (V) {
                    var Ie = { type: v.type, url: V, user: v.user, password: v.password, headers: v.headers, timeout: v.timeout, followRedirects: v.followRedirects - 1, data: v.data, token: v.token };
                    return void (0, s.xhr)(Ie).then(k, m);
                  }
                }
                var de = Buffer.concat(U), G = { responseText: de.toString(), body: de, status: R.statusCode, headers: R.headers || {} };
                R.statusCode >= 200 && R.statusCode < 300 || R.statusCode === 1223 ? k(G) : m(G);
              }
            })), y.on("error", (function(V) {
              var se;
              se = S.is(V) ? V : { responseText: b("error", "Unable to access {0}. Error: {1}", v.url, V.message), body: Buffer.concat(U), status: 500, headers: {} }, w = true, m(se);
            })), v.token && (v.token.isCancellationRequested && y.destroy(new S()), v.token.onCancellationRequested((function() {
              y.destroy(new S());
            })));
          }));
        }), (function(g) {
          var k;
          return k = S.is(g) ? g : { responseText: v.agent ? b("error.cannot.connect.proxy", "Unable to connect to {0} through a proxy. Error: {1}", v.url, g.message) : b("error.cannot.connect", "Unable to connect to {0}. Error: {1}", v.url, g.message), body: Buffer.concat([]), status: 404, headers: {} }, Promise.reject(k);
        }));
      }, s.getErrorStatusDescription = function(v) {
        if (!(v < 400)) switch (v) {
          case 400:
            return b("status.400", "Bad request. The request cannot be fulfilled due to bad syntax.");
          case 401:
            return b("status.401", "Unauthorized. The server is refusing to respond.");
          case 403:
            return b("status.403", "Forbidden. The server is refusing to respond.");
          case 404:
            return b("status.404", "Not Found. The requested location could not be found.");
          case 405:
            return b("status.405", "Method not allowed. A request was made using a request method not supported by that location.");
          case 406:
            return b("status.406", "Not Acceptable. The server can only generate a response that is not accepted by the client.");
          case 407:
            return b("status.407", "Proxy Authentication Required. The client must first authenticate itself with the proxy.");
          case 408:
            return b("status.408", "Request Timeout. The server timed out waiting for the request.");
          case 409:
            return b("status.409", "Conflict. The request could not be completed because of a conflict in the request.");
          case 410:
            return b("status.410", "Gone. The requested page is no longer available.");
          case 411:
            return b("status.411", 'Length Required. The "Content-Length" is not defined.');
          case 412:
            return b("status.412", "Precondition Failed. The precondition given in the request evaluated to false by the server.");
          case 413:
            return b("status.413", "Request Entity Too Large. The server will not accept the request, because the request entity is too large.");
          case 414:
            return b("status.414", "Request-URI Too Long. The server will not accept the request, because the URL is too long.");
          case 415:
            return b("status.415", "Unsupported Media Type. The server will not accept the request, because the media type is not supported.");
          case 500:
            return b("status.500", "Internal Server Error.");
          case 501:
            return b("status.501", "Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");
          case 502:
            return b("status.502", "Bad Gateway. The upstream server did not respond.");
          case 503:
            return b("status.503", "Service Unavailable. The server is currently unavailable (overloaded or down).");
          default:
            return b("status.416", "HTTP status code {0}", v);
        }
      };
      var S = (function(v) {
        function g() {
          var k = v.call(this, "The user aborted a request") || this;
          return k.name = "AbortError", Object.setPrototypeOf(k, g.prototype), k;
        }
        return l(g, v), g.is = function(k) {
          return k instanceof g;
        }, g;
      })(Error);
    }, 800: (o, s, a) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: true }), s.config = s.loadMessageBundle = s.localize = s.format = s.setPseudo = s.isPseudo = s.isDefined = s.BundleFormat = s.MessageFormat = void 0;
      var u, l, c, f = a(926);
      function p(h) {
        return h !== void 0;
      }
      function d(h, x) {
        return s.isPseudo && (h = "［" + h.replace(/[aouei]/g, "$&$&") + "］"), x.length === 0 ? h : h.replace(/\{(\d+)\}/g, (function(A, L) {
          var P = L[0], b = x[P], T = A;
          return typeof b == "string" ? T = b : typeof b != "number" && typeof b != "boolean" && b != null || (T = String(b)), T;
        }));
      }
      (c = s.MessageFormat || (s.MessageFormat = {})).file = "file", c.bundle = "bundle", c.both = "both", (l = s.BundleFormat || (s.BundleFormat = {})).standalone = "standalone", l.languagePack = "languagePack", (function(h) {
        h.is = function(x) {
          var A = x;
          return A && p(A.key) && p(A.comment);
        };
      })(u || (u = {})), s.isDefined = p, s.isPseudo = false, s.setPseudo = function(h) {
        s.isPseudo = h;
      }, s.format = d, s.localize = function(h, x) {
        for (var A = [], L = 2; L < arguments.length; L++) A[L - 2] = arguments[L];
        return d(x, A);
      }, s.loadMessageBundle = function(h) {
        return (0, f.default)().loadMessageBundle(h);
      }, s.config = function(h) {
        return (0, f.default)().config(h);
      };
    }, 926: (o, s) => {
      "use strict";
      var a;
      function u() {
        if (a === void 0) throw new Error("No runtime abstraction layer installed");
        return a;
      }
      Object.defineProperty(s, "__esModule", { value: true }), (function(l) {
        l.install = function(c) {
          if (c === void 0) throw new Error("No runtime abstraction layer provided");
          a = c;
        };
      })(u || (u = {})), s.default = u;
    }, 472: (o, s, a) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: true }), s.config = s.loadMessageBundle = s.BundleFormat = s.MessageFormat = void 0;
      var u = a(17), l = a(147), c = a(926), f = a(800), p = a(800);
      Object.defineProperty(s, "MessageFormat", { enumerable: true, get: function() {
        return p.MessageFormat;
      } }), Object.defineProperty(s, "BundleFormat", { enumerable: true, get: function() {
        return p.BundleFormat;
      } });
      var d, h, x = Object.prototype.toString;
      function A(g) {
        return x.call(g) === "[object Number]";
      }
      function L(g) {
        return x.call(g) === "[object String]";
      }
      function P(g) {
        return JSON.parse(l.readFileSync(g, "utf8"));
      }
      function b(g) {
        return function(k, m) {
          for (var E = [], _ = 2; _ < arguments.length; _++) E[_ - 2] = arguments[_];
          return A(k) ? k >= g.length ? void console.error(`Broken localize call found. Index out of bounds. Stacktrace is
: `.concat(new Error("").stack)) : (0, f.format)(g[k], E) : L(m) ? (console.warn("Message ".concat(m, " didn't get externalized correctly.")), (0, f.format)(m, E)) : void console.error(`Broken localize call found. Stacktrace is
: `.concat(new Error("").stack));
        };
      }
      function T(g, k) {
        return d[g] = k, k;
      }
      function C(g) {
        try {
          return (function(k) {
            var m = P(u.join(k, "nls.metadata.json")), E = /* @__PURE__ */ Object.create(null);
            for (var _ in m) {
              var R = m[_];
              E[_] = R.messages;
            }
            return E;
          })(g);
        } catch (k) {
          return void console.log("Generating default bundle from meta data failed.", k);
        }
      }
      function O(g, k) {
        var m;
        if (h.languagePackSupport === true && h.cacheRoot !== void 0 && h.languagePackId !== void 0 && h.translationsConfigFile !== void 0 && h.translationsConfig !== void 0) try {
          m = (function(_, R) {
            var y, w, j, M = u.join(h.cacheRoot, "".concat(_.id, "-").concat(_.hash, ".json")), D = false, Y = false;
            try {
              return y = JSON.parse(l.readFileSync(M, { encoding: "utf8", flag: "r" })), w = M, j = /* @__PURE__ */ new Date(), l.utimes(w, j, j, (function() {
              })), y;
            } catch (U) {
              if (U.code === "ENOENT") Y = true;
              else {
                if (!(U instanceof SyntaxError)) throw U;
                console.log("Syntax error parsing message bundle: ".concat(U.message, ".")), l.unlink(M, (function(V) {
                  V && console.error("Deleting corrupted bundle ".concat(M, " failed."));
                })), D = true;
              }
            }
            if (y = (function(U, V) {
              var se = h.translationsConfig[U.id];
              if (se) {
                var Ie = P(se).contents, de = P(u.join(V, "nls.metadata.json")), G = /* @__PURE__ */ Object.create(null);
                for (var Re in de) {
                  var nt = de[Re], N = Ie["".concat(U.outDir, "/").concat(Re)];
                  if (N) {
                    for (var Q = [], I = 0; I < nt.keys.length; I++) {
                      var W = nt.keys[I], J = N[L(W) ? W : W.key];
                      J === void 0 && (J = nt.messages[I]), Q.push(J);
                    }
                    G[Re] = Q;
                  } else G[Re] = nt.messages;
                }
                return G;
              }
            })(_, R), !y || D) return y;
            if (Y) try {
              l.writeFileSync(M, JSON.stringify(y), { encoding: "utf8", flag: "wx" });
            } catch (U) {
              if (U.code === "EEXIST") return y;
              throw U;
            }
            return y;
          })(g, k);
        } catch (_) {
          console.log("Load or create bundle failed ", _);
        }
        if (!m) {
          if (h.languagePackSupport) return C(k);
          var E = (function(_) {
            for (var R = h.language; R; ) {
              var y = u.join(_, "nls.bundle.".concat(R, ".json"));
              if (l.existsSync(y)) return y;
              var w = R.lastIndexOf("-");
              R = w > 0 ? R.substring(0, w) : void 0;
            }
            if (R === void 0 && (y = u.join(_, "nls.bundle.json"), l.existsSync(y))) return y;
          })(k);
          if (E) try {
            return P(E);
          } catch (_) {
            console.log("Loading in the box message bundle failed.", _);
          }
          m = C(k);
        }
        return m;
      }
      function S(g) {
        if (!g) return f.localize;
        var k = u.extname(g);
        if (k && (g = g.substr(0, g.length - k.length)), h.messageFormat === f.MessageFormat.both || h.messageFormat === f.MessageFormat.bundle) {
          var m = (function(D) {
            for (var Y, U = u.dirname(D); Y = u.join(U, "nls.metadata.header.json"), !l.existsSync(Y); ) {
              var V = u.dirname(U);
              if (V === U) {
                Y = void 0;
                break;
              }
              U = V;
            }
            return Y;
          })(g);
          if (m) {
            var E = u.dirname(m), _ = d[E];
            if (_ === void 0) try {
              var R = JSON.parse(l.readFileSync(m, "utf8"));
              try {
                var y = O(R, E);
                _ = T(E, y ? { header: R, nlsBundle: y } : null);
              } catch (D) {
                console.error("Failed to load nls bundle", D), _ = T(E, null);
              }
            } catch (D) {
              console.error("Failed to read header file", D), _ = T(E, null);
            }
            if (_) {
              var w = g.substr(E.length + 1).replace(/\\/g, "/"), j = _.nlsBundle[w];
              return j === void 0 ? (console.error("Messages for file ".concat(g, " not found. See console for details.")), function() {
                return "Messages not found.";
              }) : b(j);
            }
          }
        }
        if (h.messageFormat === f.MessageFormat.both || h.messageFormat === f.MessageFormat.file) try {
          var M = P((function(D) {
            var Y;
            if (!(h.cacheLanguageResolution && Y)) {
              if (f.isPseudo || !h.language) Y = ".nls.json";
              else for (var U = h.language; U; ) {
                var V = ".nls." + U + ".json";
                if (l.existsSync(D + V)) {
                  Y = V;
                  break;
                }
                var se = U.lastIndexOf("-");
                se > 0 ? U = U.substring(0, se) : (Y = ".nls.json", U = null);
              }
              h.cacheLanguageResolution;
            }
            return D + Y;
          })(g));
          return Array.isArray(M) ? b(M) : (0, f.isDefined)(M.messages) && (0, f.isDefined)(M.keys) ? b(M.messages) : (console.error("String bundle '".concat(g, "' uses an unsupported format.")), function() {
            return "File bundle has unsupported format. See console for details";
          });
        } catch (D) {
          D.code !== "ENOENT" && console.error("Failed to load single file bundle", D);
        }
        return console.error("Failed to load message bundle for file ".concat(g)), function() {
          return "Failed to load message bundle. See console for details.";
        };
      }
      function v(g) {
        return g && (L(g.locale) && (h.locale = g.locale.toLowerCase(), h.language = h.locale, d = /* @__PURE__ */ Object.create(null)), g.messageFormat !== void 0 && (h.messageFormat = g.messageFormat), g.bundleFormat === f.BundleFormat.standalone && h.languagePackSupport === true && (h.languagePackSupport = false)), (0, f.setPseudo)(h.locale === "pseudo"), S;
      }
      (function() {
        if (h = { locale: void 0, language: void 0, languagePackSupport: false, cacheLanguageResolution: true, messageFormat: f.MessageFormat.bundle }, L(process.env.VSCODE_NLS_CONFIG)) try {
          var g = JSON.parse(process.env.VSCODE_NLS_CONFIG), k = void 0;
          if (g.availableLanguages) {
            var m = g.availableLanguages["*"];
            L(m) && (k = m);
          }
          if (L(g.locale) && (h.locale = g.locale.toLowerCase()), k === void 0 ? h.language = h.locale : k !== "en" && (h.language = k), /* @__PURE__ */ (function(_) {
            return _ === true || _ === false;
          })(g._languagePackSupport) && (h.languagePackSupport = g._languagePackSupport), L(g._cacheRoot) && (h.cacheRoot = g._cacheRoot), L(g._languagePackId) && (h.languagePackId = g._languagePackId), L(g._translationsConfigFile)) {
            h.translationsConfigFile = g._translationsConfigFile;
            try {
              h.translationsConfig = P(h.translationsConfigFile);
            } catch {
              if (g._corruptedFile) {
                var E = u.dirname(g._corruptedFile);
                l.exists(E, (function(R) {
                  R && l.writeFile(g._corruptedFile, "corrupted", "utf8", (function(y) {
                    console.error(y);
                  }));
                }));
              }
            }
          }
        } catch {
        }
        (0, f.setPseudo)(h.locale === "pseudo"), d = /* @__PURE__ */ Object.create(null);
      })(), s.loadMessageBundle = S, s.config = v, c.default.install(Object.freeze({ loadMessageBundle: S, config: v }));
    }, 374: (o, s) => {
      function a() {
      }
      Object.defineProperty(s, "__esModule", { value: true }), s.default = function(u) {
        return a;
      };
    }, 491: (o) => {
      "use strict";
      o.exports = require("assert");
    }, 361: (o) => {
      "use strict";
      o.exports = require("events");
    }, 147: (o) => {
      "use strict";
      o.exports = require("fs");
    }, 685: (o) => {
      "use strict";
      o.exports = require("http");
    }, 687: (o) => {
      "use strict";
      o.exports = require("https");
    }, 808: (o) => {
      "use strict";
      o.exports = require("net");
    }, 17: (o) => {
      "use strict";
      o.exports = require("path");
    }, 404: (o) => {
      "use strict";
      o.exports = require("tls");
    }, 310: (o) => {
      "use strict";
      o.exports = require("url");
    }, 796: (o) => {
      "use strict";
      o.exports = require("zlib");
    } }, t = {}, n = (function o(s) {
      var a = t[s];
      if (a !== void 0) return a.exports;
      var u = t[s] = { exports: {} };
      return e2[s].call(u.exports, u, u.exports, o), u.exports;
    })(539), i = Kr;
    for (var r in n) i[r] = n[r];
    n.__esModule && Object.defineProperty(i, "__esModule", { value: true });
  })();
});
var ui = F((Xg, ai) => {
  var Oc = typeof process == "object" && process && process.platform === "win32";
  ai.exports = Oc ? { sep: "\\" } : { sep: "/" };
});
var hi = F((Zg, pi) => {
  "use strict";
  pi.exports = li;
  function li(e2, t, n) {
    e2 instanceof RegExp && (e2 = ci(e2, n)), t instanceof RegExp && (t = ci(t, n));
    var i = fi(e2, t, n);
    return i && { start: i[0], end: i[1], pre: n.slice(0, i[0]), body: n.slice(i[0] + e2.length, i[1]), post: n.slice(i[1] + t.length) };
  }
  function ci(e2, t) {
    var n = t.match(e2);
    return n ? n[0] : null;
  }
  li.range = fi;
  function fi(e2, t, n) {
    var i, r, o, s, a, u = n.indexOf(e2), l = n.indexOf(t, u + 1), c = u;
    if (u >= 0 && l > 0) {
      if (e2 === t) return [u, l];
      for (i = [], o = n.length; c >= 0 && !a; ) c == u ? (i.push(c), u = n.indexOf(e2, c + 1)) : i.length == 1 ? a = [i.pop(), l] : (r = i.pop(), r < o && (o = r, s = l), l = n.indexOf(t, c + 1)), c = u < l && u >= 0 ? u : l;
      i.length && (a = [o, s]);
    }
    return a;
  }
});
var wi = F((em, bi) => {
  var di = hi();
  bi.exports = Ic;
  var gi = "\0SLASH" + Math.random() + "\0", mi = "\0OPEN" + Math.random() + "\0", Kn = "\0CLOSE" + Math.random() + "\0", yi = "\0COMMA" + Math.random() + "\0", xi = "\0PERIOD" + Math.random() + "\0";
  function Yn(e2) {
    return parseInt(e2, 10) == e2 ? parseInt(e2, 10) : e2.charCodeAt(0);
  }
  function Pc(e2) {
    return e2.split("\\\\").join(gi).split("\\{").join(mi).split("\\}").join(Kn).split("\\,").join(yi).split("\\.").join(xi);
  }
  function Lc(e2) {
    return e2.split(gi).join("\\").split(mi).join("{").split(Kn).join("}").split(yi).join(",").split(xi).join(".");
  }
  function vi(e2) {
    if (!e2) return [""];
    var t = [], n = di("{", "}", e2);
    if (!n) return e2.split(",");
    var i = n.pre, r = n.body, o = n.post, s = i.split(",");
    s[s.length - 1] += "{" + r + "}";
    var a = vi(o);
    return o.length && (s[s.length - 1] += a.shift(), s.push.apply(s, a)), t.push.apply(t, s), t;
  }
  function Ic(e2) {
    return e2 ? (e2.substr(0, 2) === "{}" && (e2 = "\\{\\}" + e2.substr(2)), _t(Pc(e2), true).map(Lc)) : [];
  }
  function Nc(e2) {
    return "{" + e2 + "}";
  }
  function Fc(e2) {
    return /^-?0\d/.test(e2);
  }
  function Mc(e2, t) {
    return e2 <= t;
  }
  function Dc(e2, t) {
    return e2 >= t;
  }
  function _t(e2, t) {
    var n = [], i = di("{", "}", e2);
    if (!i) return [e2];
    var r = i.pre, o = i.post.length ? _t(i.post, false) : [""];
    if (/\$$/.test(i.pre)) for (var s = 0; s < o.length; s++) {
      var a = r + "{" + i.body + "}" + o[s];
      n.push(a);
    }
    else {
      var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), l = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), c = u || l, f = i.body.indexOf(",") >= 0;
      if (!c && !f) return i.post.match(/,.*\}/) ? (e2 = i.pre + "{" + i.body + Kn + i.post, _t(e2)) : [e2];
      var p;
      if (c) p = i.body.split(/\.\./);
      else if (p = vi(i.body), p.length === 1 && (p = _t(p[0], false).map(Nc), p.length === 1)) return o.map(function(k) {
        return i.pre + p[0] + k;
      });
      var d;
      if (c) {
        var h = Yn(p[0]), x = Yn(p[1]), A = Math.max(p[0].length, p[1].length), L = p.length == 3 ? Math.abs(Yn(p[2])) : 1, P = Mc, b = x < h;
        b && (L *= -1, P = Dc);
        var T = p.some(Fc);
        d = [];
        for (var C = h; P(C, x); C += L) {
          var O;
          if (l) O = String.fromCharCode(C), O === "\\" && (O = "");
          else if (O = String(C), T) {
            var S = A - O.length;
            if (S > 0) {
              var v = new Array(S + 1).join("0");
              C < 0 ? O = "-" + v + O.slice(1) : O = v + O;
            }
          }
          d.push(O);
        }
      } else {
        d = [];
        for (var g = 0; g < p.length; g++) d.push.apply(d, _t(p[g], false));
      }
      for (var g = 0; g < d.length; g++) for (var s = 0; s < o.length; s++) {
        var a = r + d[g] + o[s];
        (!t || c || a) && n.push(a);
      }
    }
    return n;
  }
});
var _i = F((nm, Xn) => {
  var xe = Xn.exports = (e2, t, n = {}) => (zt(t), !n.nocomment && t.charAt(0) === "#" ? false : new ot(t, n).match(e2));
  Xn.exports = xe;
  var zn = ui();
  xe.sep = zn.sep;
  var Se = /* @__PURE__ */ Symbol("globstar **");
  xe.GLOBSTAR = Se;
  var jc = wi(), Si = { "!": { open: "(?:(?!(?:", close: "))[^/]*?)" }, "?": { open: "(?:", close: ")?" }, "+": { open: "(?:", close: ")+" }, "*": { open: "(?:", close: ")*" }, "@": { open: "(?:", close: ")" } }, Qn = "[^/]", Vn = Qn + "*?", Hc = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", $c = "(?:(?!(?:\\/|^)\\.).)*?", Ei = (e2) => e2.split("").reduce((t, n) => (t[n] = true, t), {}), Ai = Ei("().*{}+?[]^$\\!"), qc = Ei("[.("), ki = /\/+/;
  xe.filter = (e2, t = {}) => (n, i, r) => xe(n, e2, t);
  var Ne = (e2, t = {}) => {
    let n = {};
    return Object.keys(e2).forEach((i) => n[i] = e2[i]), Object.keys(t).forEach((i) => n[i] = t[i]), n;
  };
  xe.defaults = (e2) => {
    if (!e2 || typeof e2 != "object" || !Object.keys(e2).length) return xe;
    let t = xe, n = (i, r, o) => t(i, r, Ne(e2, o));
    return n.Minimatch = class extends t.Minimatch {
      constructor(r, o) {
        super(r, Ne(e2, o));
      }
    }, n.Minimatch.defaults = (i) => t.defaults(Ne(e2, i)).Minimatch, n.filter = (i, r) => t.filter(i, Ne(e2, r)), n.defaults = (i) => t.defaults(Ne(e2, i)), n.makeRe = (i, r) => t.makeRe(i, Ne(e2, r)), n.braceExpand = (i, r) => t.braceExpand(i, Ne(e2, r)), n.match = (i, r, o) => t.match(i, r, Ne(e2, o)), n;
  };
  xe.braceExpand = (e2, t) => Ti(e2, t);
  var Ti = (e2, t = {}) => (zt(e2), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [e2] : jc(e2)), Uc = 1024 * 64, zt = (e2) => {
    if (typeof e2 != "string") throw new TypeError("invalid pattern");
    if (e2.length > Uc) throw new TypeError("pattern is too long");
  }, Jn = /* @__PURE__ */ Symbol("subparse");
  xe.makeRe = (e2, t) => new ot(e2, t || {}).makeRe();
  xe.match = (e2, t, n = {}) => {
    let i = new ot(t, n);
    return e2 = e2.filter((r) => i.match(r)), i.options.nonull && !e2.length && e2.push(t), e2;
  };
  var Bc = (e2) => e2.replace(/\\(.)/g, "$1"), Gc = (e2) => e2.replace(/\\([^-\]])/g, "$1"), Wc = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Yc = (e2) => e2.replace(/[[\]\\]/g, "\\$&"), ot = class {
    constructor(t, n) {
      zt(t), n || (n = {}), this.options = n, this.set = [], this.pattern = t, this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.regexp = null, this.negate = false, this.comment = false, this.empty = false, this.partial = !!n.partial, this.make();
    }
    debug() {
    }
    make() {
      let t = this.pattern, n = this.options;
      if (!n.nocomment && t.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!t) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      let i = this.globSet = this.braceExpand();
      n.debug && (this.debug = (...r) => console.error(...r)), this.debug(this.pattern, i), i = this.globParts = i.map((r) => r.split(ki)), this.debug(this.pattern, i), i = i.map((r, o, s) => r.map(this.parse, this)), this.debug(this.pattern, i), i = i.filter((r) => r.indexOf(false) === -1), this.debug(this.pattern, i), this.set = i;
    }
    parseNegate() {
      if (this.options.nonegate) return;
      let t = this.pattern, n = false, i = 0;
      for (let r = 0; r < t.length && t.charAt(r) === "!"; r++) n = !n, i++;
      i && (this.pattern = t.slice(i)), this.negate = n;
    }
    matchOne(t, n, i) {
      var r = this.options;
      this.debug("matchOne", { this: this, file: t, pattern: n }), this.debug("matchOne", t.length, n.length);
      for (var o = 0, s = 0, a = t.length, u = n.length; o < a && s < u; o++, s++) {
        this.debug("matchOne loop");
        var l = n[s], c = t[o];
        if (this.debug(n, l, c), l === false) return false;
        if (l === Se) {
          this.debug("GLOBSTAR", [n, l, c]);
          var f = o, p = s + 1;
          if (p === u) {
            for (this.debug("** at the end"); o < a; o++) if (t[o] === "." || t[o] === ".." || !r.dot && t[o].charAt(0) === ".") return false;
            return true;
          }
          for (; f < a; ) {
            var d = t[f];
            if (this.debug(`
globstar while`, t, f, n, p, d), this.matchOne(t.slice(f), n.slice(p), i)) return this.debug("globstar found match!", f, a, d), true;
            if (d === "." || d === ".." || !r.dot && d.charAt(0) === ".") {
              this.debug("dot detected!", t, f, n, p);
              break;
            }
            this.debug("globstar swallow a segment, and continue"), f++;
          }
          return !!(i && (this.debug(`
>>> no match, partial?`, t, f, n, p), f === a));
        }
        var h;
        if (typeof l == "string" ? (h = c === l, this.debug("string match", l, c, h)) : (h = c.match(l), this.debug("pattern match", l, c, h)), !h) return false;
      }
      if (o === a && s === u) return true;
      if (o === a) return i;
      if (s === u) return o === a - 1 && t[o] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return Ti(this.pattern, this.options);
    }
    parse(t, n) {
      zt(t);
      let i = this.options;
      if (t === "**") if (i.noglobstar) t = "*";
      else return Se;
      if (t === "") return "";
      let r = "", o = false, s = false, a = [], u = [], l, c = false, f = -1, p = -1, d, h, x, A = t.charAt(0) === ".", L = i.dot || A, P = () => A ? "" : L ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", b = (S) => S.charAt(0) === "." ? "" : i.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", T = () => {
        if (l) {
          switch (l) {
            case "*":
              r += Vn, o = true;
              break;
            case "?":
              r += Qn, o = true;
              break;
            default:
              r += "\\" + l;
              break;
          }
          this.debug("clearStateChar %j %j", l, r), l = false;
        }
      };
      for (let S = 0, v; S < t.length && (v = t.charAt(S)); S++) {
        if (this.debug("%s	%s %s %j", t, S, r, v), s) {
          if (v === "/") return false;
          Ai[v] && (r += "\\"), r += v, s = false;
          continue;
        }
        switch (v) {
          case "/":
            return false;
          case "\\":
            if (c && t.charAt(S + 1) === "-") {
              r += v;
              continue;
            }
            T(), s = true;
            continue;
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            if (this.debug("%s	%s %s %j <-- stateChar", t, S, r, v), c) {
              this.debug("  in class"), v === "!" && S === p + 1 && (v = "^"), r += v;
              continue;
            }
            this.debug("call clearStateChar %j", l), T(), l = v, i.noext && T();
            continue;
          case "(": {
            if (c) {
              r += "(";
              continue;
            }
            if (!l) {
              r += "\\(";
              continue;
            }
            let g = { type: l, start: S - 1, reStart: r.length, open: Si[l].open, close: Si[l].close };
            this.debug(this.pattern, "	", g), a.push(g), r += g.open, g.start === 0 && g.type !== "!" && (A = true, r += b(t.slice(S + 1))), this.debug("plType %j %j", l, r), l = false;
            continue;
          }
          case ")": {
            let g = a[a.length - 1];
            if (c || !g) {
              r += "\\)";
              continue;
            }
            a.pop(), T(), o = true, h = g, r += h.close, h.type === "!" && u.push(Object.assign(h, { reEnd: r.length }));
            continue;
          }
          case "|": {
            let g = a[a.length - 1];
            if (c || !g) {
              r += "\\|";
              continue;
            }
            T(), r += "|", g.start === 0 && g.type !== "!" && (A = true, r += b(t.slice(S + 1)));
            continue;
          }
          case "[":
            if (T(), c) {
              r += "\\" + v;
              continue;
            }
            c = true, p = S, f = r.length, r += v;
            continue;
          case "]":
            if (S === p + 1 || !c) {
              r += "\\" + v;
              continue;
            }
            d = t.substring(p + 1, S);
            try {
              RegExp("[" + Yc(Gc(d)) + "]"), r += v;
            } catch {
              r = r.substring(0, f) + "(?:$.)";
            }
            o = true, c = false;
            continue;
          default:
            T(), Ai[v] && !(v === "^" && c) && (r += "\\"), r += v;
            break;
        }
      }
      for (c && (d = t.slice(p + 1), x = this.parse(d, Jn), r = r.substring(0, f) + "\\[" + x[0], o = o || x[1]), h = a.pop(); h; h = a.pop()) {
        let S;
        S = r.slice(h.reStart + h.open.length), this.debug("setting tail", r, h), S = S.replace(/((?:\\{2}){0,64})(\\?)\|/g, (g, k, m) => (m || (m = "\\"), k + k + m + "|")), this.debug(`tail=%j
   %s`, S, S, h, r);
        let v = h.type === "*" ? Vn : h.type === "?" ? Qn : "\\" + h.type;
        o = true, r = r.slice(0, h.reStart) + v + "\\(" + S;
      }
      T(), s && (r += "\\\\");
      let C = qc[r.charAt(0)];
      for (let S = u.length - 1; S > -1; S--) {
        let v = u[S], g = r.slice(0, v.reStart), k = r.slice(v.reStart, v.reEnd - 8), m = r.slice(v.reEnd), E = r.slice(v.reEnd - 8, v.reEnd) + m, _ = g.split(")").length, R = g.split("(").length - _, y = m;
        for (let j = 0; j < R; j++) y = y.replace(/\)[+*?]?/, "");
        m = y;
        let w = m === "" && n !== Jn ? "(?:$|\\/)" : "";
        r = g + k + m + w + E;
      }
      if (r !== "" && o && (r = "(?=.)" + r), C && (r = P() + r), n === Jn) return [r, o];
      if (i.nocase && !o && (o = t.toUpperCase() !== t.toLowerCase()), !o) return Bc(t);
      let O = i.nocase ? "i" : "";
      try {
        return Object.assign(new RegExp("^" + r + "$", O), { _glob: t, _src: r });
      } catch {
        return new RegExp("$.");
      }
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let t = this.set;
      if (!t.length) return this.regexp = false, this.regexp;
      let n = this.options, i = n.noglobstar ? Vn : n.dot ? Hc : $c, r = n.nocase ? "i" : "", o = t.map((s) => (s = s.map((a) => typeof a == "string" ? Wc(a) : a === Se ? Se : a._src).reduce((a, u) => (a[a.length - 1] === Se && u === Se || a.push(u), a), []), s.forEach((a, u) => {
        a !== Se || s[u - 1] === Se || (u === 0 ? s.length > 1 ? s[u + 1] = "(?:\\/|" + i + "\\/)?" + s[u + 1] : s[u] = i : u === s.length - 1 ? s[u - 1] += "(?:\\/|" + i + ")?" : (s[u - 1] += "(?:\\/|\\/" + i + "\\/)" + s[u + 1], s[u + 1] = Se));
      }), s.filter((a) => a !== Se).join("/"))).join("|");
      o = "^(?:" + o + ")$", this.negate && (o = "^(?!" + o + ").*$");
      try {
        this.regexp = new RegExp(o, r);
      } catch {
        this.regexp = false;
      }
      return this.regexp;
    }
    match(t, n = this.partial) {
      if (this.debug("match", t, this.pattern), this.comment) return false;
      if (this.empty) return t === "";
      if (t === "/" && n) return true;
      let i = this.options;
      zn.sep !== "/" && (t = t.split(zn.sep).join("/")), t = t.split(ki), this.debug(this.pattern, "split", t);
      let r = this.set;
      this.debug(this.pattern, "set", r);
      let o;
      for (let s = t.length - 1; s >= 0 && (o = t[s], !o); s--) ;
      for (let s = 0; s < r.length; s++) {
        let a = r[s], u = t;
        if (i.matchBase && a.length === 1 && (u = [o]), this.matchOne(u, a, n)) return i.flipNegate ? true : !this.negate;
      }
      return i.flipNegate ? false : this.negate;
    }
    static defaults(t) {
      return xe.defaults(t).Minimatch;
    }
  };
  xe.Minimatch = ot;
});
var Li = F((im, Pi) => {
  var Zn = class {
    constructor(t) {
      this.value = t, this.next = void 0;
    }
  }, er = class {
    constructor() {
      this.clear();
    }
    enqueue(t) {
      let n = new Zn(t);
      this._head ? (this._tail.next = n, this._tail = n) : (this._head = n, this._tail = n), this._size++;
    }
    dequeue() {
      let t = this._head;
      if (t) return this._head = this._head.next, this._size--, t.value;
    }
    clear() {
      this._head = void 0, this._tail = void 0, this._size = 0;
    }
    get size() {
      return this._size;
    }
    *[Symbol.iterator]() {
      let t = this._head;
      for (; t; ) yield t.value, t = t.next;
    }
  };
  Pi.exports = er;
});
var Ni = F((om, Ii) => {
  "use strict";
  var Vc = Li(), Jc = (e2) => {
    if (!((Number.isInteger(e2) || e2 === 1 / 0) && e2 > 0)) throw new TypeError("Expected `concurrency` to be a number from 1 and up");
    let t = new Vc(), n = 0, i = () => {
      n--, t.size > 0 && t.dequeue()();
    }, r = async (a, u, ...l) => {
      n++;
      let c = (async () => a(...l))();
      u(c);
      try {
        await c;
      } catch {
      }
      i();
    }, o = (a, u, ...l) => {
      t.enqueue(r.bind(null, a, u, ...l)), (async () => (await Promise.resolve(), n < e2 && t.size > 0 && t.dequeue()()))();
    }, s = (a, ...u) => new Promise((l) => {
      o(a, l, ...u);
    });
    return Object.defineProperties(s, { activeCount: { get: () => n }, pendingCount: { get: () => t.size }, clearQueue: { value: () => {
      t.clear();
    } } }), s;
  };
  Ii.exports = Jc;
});
var Di = F((sm, Mi) => {
  "use strict";
  var Fi = Ni(), Xt = class extends Error {
    constructor(t) {
      super(), this.value = t;
    }
  }, zc = async (e2, t) => t(await e2), Qc = async (e2) => {
    let t = await Promise.all(e2);
    if (t[1] === true) throw new Xt(t[0]);
    return false;
  }, Xc = async (e2, t, n) => {
    n = { concurrency: 1 / 0, preserveOrder: true, ...n };
    let i = Fi(n.concurrency), r = [...e2].map((s) => [s, i(zc, s, t)]), o = Fi(n.preserveOrder ? 1 : 1 / 0);
    try {
      await Promise.all(r.map((s) => o(Qc, s)));
    } catch (s) {
      if (s instanceof Xt) return s.value;
      throw s;
    }
  };
  Mi.exports = Xc;
});
var Bi = F((am, tr) => {
  "use strict";
  var ji = require("path"), Zt = require("fs"), { promisify: Hi } = require("util"), Zc = Di(), el = Hi(Zt.stat), tl = Hi(Zt.lstat), $i = { directory: "isDirectory", file: "isFile" };
  function qi({ type: e2 }) {
    if (!(e2 in $i)) throw new Error(`Invalid type specified: ${e2}`);
  }
  var Ui = (e2, t) => e2 === void 0 || t[$i[e2]]();
  tr.exports = async (e2, t) => {
    t = { cwd: process.cwd(), type: "file", allowSymlinks: true, ...t }, qi(t);
    let n = t.allowSymlinks ? el : tl;
    return Zc(e2, async (i) => {
      try {
        let r = await n(ji.resolve(t.cwd, i));
        return Ui(t.type, r);
      } catch {
        return false;
      }
    }, t);
  };
  tr.exports.sync = (e2, t) => {
    t = { cwd: process.cwd(), allowSymlinks: true, type: "file", ...t }, qi(t);
    let n = t.allowSymlinks ? Zt.statSync : Zt.lstatSync;
    for (let i of e2) try {
      let r = n(ji.resolve(t.cwd, i));
      if (Ui(t.type, r)) return i;
    } catch {
    }
  };
});
var rr = F((um, nr) => {
  "use strict";
  var Gi = require("fs"), { promisify: nl } = require("util"), rl = nl(Gi.access);
  nr.exports = async (e2) => {
    try {
      return await rl(e2), true;
    } catch {
      return false;
    }
  };
  nr.exports.sync = (e2) => {
    try {
      return Gi.accessSync(e2), true;
    } catch {
      return false;
    }
  };
});
var Yi = F((cm, at) => {
  "use strict";
  var Fe = require("path"), en = Bi(), Wi = rr(), ir = /* @__PURE__ */ Symbol("findUp.stop");
  at.exports = async (e2, t = {}) => {
    let n = Fe.resolve(t.cwd || ""), { root: i } = Fe.parse(n), r = [].concat(e2), o = async (s) => {
      if (typeof e2 != "function") return en(r, s);
      let a = await e2(s.cwd);
      return typeof a == "string" ? en([a], s) : a;
    };
    for (; ; ) {
      let s = await o({ ...t, cwd: n });
      if (s === ir) return;
      if (s) return Fe.resolve(n, s);
      if (n === i) return;
      n = Fe.dirname(n);
    }
  };
  at.exports.sync = (e2, t = {}) => {
    let n = Fe.resolve(t.cwd || ""), { root: i } = Fe.parse(n), r = [].concat(e2), o = (s) => {
      if (typeof e2 != "function") return en.sync(r, s);
      let a = e2(s.cwd);
      return typeof a == "string" ? en.sync([a], s) : a;
    };
    for (; ; ) {
      let s = o({ ...t, cwd: n });
      if (s === ir) return;
      if (s) return Fe.resolve(n, s);
      if (n === i) return;
      n = Fe.dirname(n);
    }
  };
  at.exports.exists = Wi;
  at.exports.sync.exists = Wi.sync;
  at.exports.stop = ir;
});
var Vi = F((lm, Ki) => {
  var Me = require("constants"), il = process.cwd, tn = null, ol = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    return tn || (tn = il.call(process)), tn;
  };
  try {
    process.cwd();
  } catch {
  }
  typeof process.chdir == "function" && (or = process.chdir, process.chdir = function(e2) {
    tn = null, or.call(process, e2);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, or));
  var or;
  Ki.exports = sl;
  function sl(e2) {
    Me.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e2), e2.lutimes || n(e2), e2.chown = o(e2.chown), e2.fchown = o(e2.fchown), e2.lchown = o(e2.lchown), e2.chmod = i(e2.chmod), e2.fchmod = i(e2.fchmod), e2.lchmod = i(e2.lchmod), e2.chownSync = s(e2.chownSync), e2.fchownSync = s(e2.fchownSync), e2.lchownSync = s(e2.lchownSync), e2.chmodSync = r(e2.chmodSync), e2.fchmodSync = r(e2.fchmodSync), e2.lchmodSync = r(e2.lchmodSync), e2.stat = a(e2.stat), e2.fstat = a(e2.fstat), e2.lstat = a(e2.lstat), e2.statSync = u(e2.statSync), e2.fstatSync = u(e2.fstatSync), e2.lstatSync = u(e2.lstatSync), e2.chmod && !e2.lchmod && (e2.lchmod = function(c, f, p) {
      p && process.nextTick(p);
    }, e2.lchmodSync = function() {
    }), e2.chown && !e2.lchown && (e2.lchown = function(c, f, p, d) {
      d && process.nextTick(d);
    }, e2.lchownSync = function() {
    }), ol === "win32" && (e2.rename = typeof e2.rename != "function" ? e2.rename : (function(c) {
      function f(p, d, h) {
        var x = Date.now(), A = 0;
        c(p, d, function L(P) {
          if (P && (P.code === "EACCES" || P.code === "EPERM" || P.code === "EBUSY") && Date.now() - x < 6e4) {
            setTimeout(function() {
              e2.stat(d, function(b, T) {
                b && b.code === "ENOENT" ? c(p, d, L) : h(P);
              });
            }, A), A < 100 && (A += 10);
            return;
          }
          h && h(P);
        });
      }
      return Object.setPrototypeOf && Object.setPrototypeOf(f, c), f;
    })(e2.rename)), e2.read = typeof e2.read != "function" ? e2.read : (function(c) {
      function f(p, d, h, x, A, L) {
        var P;
        if (L && typeof L == "function") {
          var b = 0;
          P = function(T, C, O) {
            if (T && T.code === "EAGAIN" && b < 10) return b++, c.call(e2, p, d, h, x, A, P);
            L.apply(this, arguments);
          };
        }
        return c.call(e2, p, d, h, x, A, P);
      }
      return Object.setPrototypeOf && Object.setPrototypeOf(f, c), f;
    })(e2.read), e2.readSync = typeof e2.readSync != "function" ? e2.readSync : /* @__PURE__ */ (function(c) {
      return function(f, p, d, h, x) {
        for (var A = 0; ; ) try {
          return c.call(e2, f, p, d, h, x);
        } catch (L) {
          if (L.code === "EAGAIN" && A < 10) {
            A++;
            continue;
          }
          throw L;
        }
      };
    })(e2.readSync);
    function t(c) {
      c.lchmod = function(f, p, d) {
        c.open(f, Me.O_WRONLY | Me.O_SYMLINK, p, function(h, x) {
          if (h) {
            d && d(h);
            return;
          }
          c.fchmod(x, p, function(A) {
            c.close(x, function(L) {
              d && d(A || L);
            });
          });
        });
      }, c.lchmodSync = function(f, p) {
        var d = c.openSync(f, Me.O_WRONLY | Me.O_SYMLINK, p), h = true, x;
        try {
          x = c.fchmodSync(d, p), h = false;
        } finally {
          if (h) try {
            c.closeSync(d);
          } catch {
          }
          else c.closeSync(d);
        }
        return x;
      };
    }
    function n(c) {
      Me.hasOwnProperty("O_SYMLINK") && c.futimes ? (c.lutimes = function(f, p, d, h) {
        c.open(f, Me.O_SYMLINK, function(x, A) {
          if (x) {
            h && h(x);
            return;
          }
          c.futimes(A, p, d, function(L) {
            c.close(A, function(P) {
              h && h(L || P);
            });
          });
        });
      }, c.lutimesSync = function(f, p, d) {
        var h = c.openSync(f, Me.O_SYMLINK), x, A = true;
        try {
          x = c.futimesSync(h, p, d), A = false;
        } finally {
          if (A) try {
            c.closeSync(h);
          } catch {
          }
          else c.closeSync(h);
        }
        return x;
      }) : c.futimes && (c.lutimes = function(f, p, d, h) {
        h && process.nextTick(h);
      }, c.lutimesSync = function() {
      });
    }
    function i(c) {
      return c && function(f, p, d) {
        return c.call(e2, f, p, function(h) {
          l(h) && (h = null), d && d.apply(this, arguments);
        });
      };
    }
    function r(c) {
      return c && function(f, p) {
        try {
          return c.call(e2, f, p);
        } catch (d) {
          if (!l(d)) throw d;
        }
      };
    }
    function o(c) {
      return c && function(f, p, d, h) {
        return c.call(e2, f, p, d, function(x) {
          l(x) && (x = null), h && h.apply(this, arguments);
        });
      };
    }
    function s(c) {
      return c && function(f, p, d) {
        try {
          return c.call(e2, f, p, d);
        } catch (h) {
          if (!l(h)) throw h;
        }
      };
    }
    function a(c) {
      return c && function(f, p, d) {
        typeof p == "function" && (d = p, p = null);
        function h(x, A) {
          A && (A.uid < 0 && (A.uid += 4294967296), A.gid < 0 && (A.gid += 4294967296)), d && d.apply(this, arguments);
        }
        return p ? c.call(e2, f, p, h) : c.call(e2, f, h);
      };
    }
    function u(c) {
      return c && function(f, p) {
        var d = p ? c.call(e2, f, p) : c.call(e2, f);
        return d && (d.uid < 0 && (d.uid += 4294967296), d.gid < 0 && (d.gid += 4294967296)), d;
      };
    }
    function l(c) {
      if (!c || c.code === "ENOSYS") return true;
      var f = !process.getuid || process.getuid() !== 0;
      return !!(f && (c.code === "EINVAL" || c.code === "EPERM"));
    }
  }
});
var Qi = F((fm, zi) => {
  var Ji = require("stream").Stream;
  zi.exports = al;
  function al(e2) {
    return { ReadStream: t, WriteStream: n };
    function t(i, r) {
      if (!(this instanceof t)) return new t(i, r);
      Ji.call(this);
      var o = this;
      this.path = i, this.fd = null, this.readable = true, this.paused = false, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, r = r || {};
      for (var s = Object.keys(r), a = 0, u = s.length; a < u; a++) {
        var l = s[a];
        this[l] = r[l];
      }
      if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
        if (typeof this.start != "number") throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0;
        else if (typeof this.end != "number") throw TypeError("end must be a Number");
        if (this.start > this.end) throw new Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function() {
          o._read();
        });
        return;
      }
      e2.open(this.path, this.flags, this.mode, function(c, f) {
        if (c) {
          o.emit("error", c), o.readable = false;
          return;
        }
        o.fd = f, o.emit("open", f), o._read();
      });
    }
    function n(i, r) {
      if (!(this instanceof n)) return new n(i, r);
      Ji.call(this), this.path = i, this.fd = null, this.writable = true, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, r = r || {};
      for (var o = Object.keys(r), s = 0, a = o.length; s < a; s++) {
        var u = o[s];
        this[u] = r[u];
      }
      if (this.start !== void 0) {
        if (typeof this.start != "number") throw TypeError("start must be a Number");
        if (this.start < 0) throw new Error("start must be >= zero");
        this.pos = this.start;
      }
      this.busy = false, this._queue = [], this.fd === null && (this._open = e2.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
    }
  }
});
var Zi = F((pm, Xi) => {
  "use strict";
  Xi.exports = cl;
  var ul = Object.getPrototypeOf || function(e2) {
    return e2.__proto__;
  };
  function cl(e2) {
    if (e2 === null || typeof e2 != "object") return e2;
    if (e2 instanceof Object) var t = { __proto__: ul(e2) };
    else var t = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e2).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e2, n));
    }), t;
  }
});
var ro = F((hm, ur) => {
  var te = require("fs"), ll = Vi(), fl = Qi(), pl = Zi(), nn = require("util"), le, on;
  typeof Symbol == "function" && typeof Symbol.for == "function" ? (le = /* @__PURE__ */ Symbol.for("graceful-fs.queue"), on = /* @__PURE__ */ Symbol.for("graceful-fs.previous")) : (le = "___graceful-fs.queue", on = "___graceful-fs.previous");
  function hl() {
  }
  function no(e2, t) {
    Object.defineProperty(e2, le, { get: function() {
      return t;
    } });
  }
  var $e = hl;
  nn.debuglog ? $e = nn.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && ($e = function() {
    var e2 = nn.format.apply(nn, arguments);
    e2 = "GFS4: " + e2.split(/\n/).join(`
GFS4: `), console.error(e2);
  });
  te[le] || (eo = global[le] || [], no(te, eo), te.close = (function(e2) {
    function t(n, i) {
      return e2.call(te, n, function(r) {
        r || to(), typeof i == "function" && i.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, on, { value: e2 }), t;
  })(te.close), te.closeSync = (function(e2) {
    function t(n) {
      e2.apply(te, arguments), to();
    }
    return Object.defineProperty(t, on, { value: e2 }), t;
  })(te.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    $e(te[le]), require("assert").equal(te[le].length, 0);
  }));
  var eo;
  global[le] || no(global, te[le]);
  ur.exports = sr(pl(te));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !te.__patched && (ur.exports = sr(te), te.__patched = true);
  function sr(e2) {
    ll(e2), e2.gracefulify = sr, e2.createReadStream = C, e2.createWriteStream = O;
    var t = e2.readFile;
    e2.readFile = n;
    function n(g, k, m) {
      return typeof k == "function" && (m = k, k = null), E(g, k, m);
      function E(_, R, y, w) {
        return t(_, R, function(j) {
          j && (j.code === "EMFILE" || j.code === "ENFILE") ? ut([E, [_, R, y], j, w || Date.now(), Date.now()]) : typeof y == "function" && y.apply(this, arguments);
        });
      }
    }
    var i = e2.writeFile;
    e2.writeFile = r;
    function r(g, k, m, E) {
      return typeof m == "function" && (E = m, m = null), _(g, k, m, E);
      function _(R, y, w, j, M) {
        return i(R, y, w, function(D) {
          D && (D.code === "EMFILE" || D.code === "ENFILE") ? ut([_, [R, y, w, j], D, M || Date.now(), Date.now()]) : typeof j == "function" && j.apply(this, arguments);
        });
      }
    }
    var o = e2.appendFile;
    o && (e2.appendFile = s);
    function s(g, k, m, E) {
      return typeof m == "function" && (E = m, m = null), _(g, k, m, E);
      function _(R, y, w, j, M) {
        return o(R, y, w, function(D) {
          D && (D.code === "EMFILE" || D.code === "ENFILE") ? ut([_, [R, y, w, j], D, M || Date.now(), Date.now()]) : typeof j == "function" && j.apply(this, arguments);
        });
      }
    }
    var a = e2.copyFile;
    a && (e2.copyFile = u);
    function u(g, k, m, E) {
      return typeof m == "function" && (E = m, m = 0), _(g, k, m, E);
      function _(R, y, w, j, M) {
        return a(R, y, w, function(D) {
          D && (D.code === "EMFILE" || D.code === "ENFILE") ? ut([_, [R, y, w, j], D, M || Date.now(), Date.now()]) : typeof j == "function" && j.apply(this, arguments);
        });
      }
    }
    var l = e2.readdir;
    e2.readdir = f;
    var c = /^v[0-5]\./;
    function f(g, k, m) {
      typeof k == "function" && (m = k, k = null);
      var E = c.test(process.version) ? function(y, w, j, M) {
        return l(y, _(y, w, j, M));
      } : function(y, w, j, M) {
        return l(y, w, _(y, w, j, M));
      };
      return E(g, k, m);
      function _(R, y, w, j) {
        return function(M, D) {
          M && (M.code === "EMFILE" || M.code === "ENFILE") ? ut([E, [R, y, w], M, j || Date.now(), Date.now()]) : (D && D.sort && D.sort(), typeof w == "function" && w.call(this, M, D));
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var p = fl(e2);
      L = p.ReadStream, b = p.WriteStream;
    }
    var d = e2.ReadStream;
    d && (L.prototype = Object.create(d.prototype), L.prototype.open = P);
    var h = e2.WriteStream;
    h && (b.prototype = Object.create(h.prototype), b.prototype.open = T), Object.defineProperty(e2, "ReadStream", { get: function() {
      return L;
    }, set: function(g) {
      L = g;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2, "WriteStream", { get: function() {
      return b;
    }, set: function(g) {
      b = g;
    }, enumerable: true, configurable: true });
    var x = L;
    Object.defineProperty(e2, "FileReadStream", { get: function() {
      return x;
    }, set: function(g) {
      x = g;
    }, enumerable: true, configurable: true });
    var A = b;
    Object.defineProperty(e2, "FileWriteStream", { get: function() {
      return A;
    }, set: function(g) {
      A = g;
    }, enumerable: true, configurable: true });
    function L(g, k) {
      return this instanceof L ? (d.apply(this, arguments), this) : L.apply(Object.create(L.prototype), arguments);
    }
    function P() {
      var g = this;
      v(g.path, g.flags, g.mode, function(k, m) {
        k ? (g.autoClose && g.destroy(), g.emit("error", k)) : (g.fd = m, g.emit("open", m), g.read());
      });
    }
    function b(g, k) {
      return this instanceof b ? (h.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments);
    }
    function T() {
      var g = this;
      v(g.path, g.flags, g.mode, function(k, m) {
        k ? (g.destroy(), g.emit("error", k)) : (g.fd = m, g.emit("open", m));
      });
    }
    function C(g, k) {
      return new e2.ReadStream(g, k);
    }
    function O(g, k) {
      return new e2.WriteStream(g, k);
    }
    var S = e2.open;
    e2.open = v;
    function v(g, k, m, E) {
      return typeof m == "function" && (E = m, m = null), _(g, k, m, E);
      function _(R, y, w, j, M) {
        return S(R, y, w, function(D, Y) {
          D && (D.code === "EMFILE" || D.code === "ENFILE") ? ut([_, [R, y, w, j], D, M || Date.now(), Date.now()]) : typeof j == "function" && j.apply(this, arguments);
        });
      }
    }
    return e2;
  }
  function ut(e2) {
    $e("ENQUEUE", e2[0].name, e2[1]), te[le].push(e2), ar();
  }
  var rn;
  function to() {
    for (var e2 = Date.now(), t = 0; t < te[le].length; ++t) te[le][t].length > 2 && (te[le][t][3] = e2, te[le][t][4] = e2);
    ar();
  }
  function ar() {
    if (clearTimeout(rn), rn = void 0, te[le].length !== 0) {
      var e2 = te[le].shift(), t = e2[0], n = e2[1], i = e2[2], r = e2[3], o = e2[4];
      if (r === void 0) $e("RETRY", t.name, n), t.apply(null, n);
      else if (Date.now() - r >= 6e4) {
        $e("TIMEOUT", t.name, n);
        var s = n.pop();
        typeof s == "function" && s.call(null, i);
      } else {
        var a = Date.now() - o, u = Math.max(o - r, 1), l = Math.min(u * 1.2, 100);
        a >= l ? ($e("RETRY", t.name, n), t.apply(null, n.concat([r]))) : te[le].push(e2);
      }
      rn === void 0 && (rn = setTimeout(ar, 0));
    }
  }
});
var so = F((dm, oo) => {
  "use strict";
  var io = (e2, t) => function(...n) {
    let i = t.promiseModule;
    return new i((r, o) => {
      t.multiArgs ? n.push((...s) => {
        t.errorFirst ? s[0] ? o(s) : (s.shift(), r(s)) : r(s);
      }) : t.errorFirst ? n.push((s, a) => {
        s ? o(s) : r(a);
      }) : n.push(r), e2.apply(this, n);
    });
  };
  oo.exports = (e2, t) => {
    t = Object.assign({ exclude: [/.+(Sync|Stream)$/], errorFirst: true, promiseModule: Promise }, t);
    let n = typeof e2;
    if (!(e2 !== null && (n === "object" || n === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e2 === null ? "null" : n}\``);
    let i = (o) => {
      let s = (a) => typeof a == "string" ? o === a : a.test(o);
      return t.include ? t.include.some(s) : !t.exclude.some(s);
    }, r;
    n === "function" ? r = function(...o) {
      return t.excludeMain ? e2(...o) : io(e2, t).apply(this, o);
    } : r = Object.create(Object.getPrototypeOf(e2));
    for (let o in e2) {
      let s = e2[o];
      r[o] = typeof s == "function" && i(o) ? io(s, t) : s;
    }
    return r;
  };
});
var uo = F((gm, ao) => {
  "use strict";
  ao.exports = (e2) => {
    if (typeof e2 != "string") throw new TypeError("Expected a string, got " + typeof e2);
    return e2.charCodeAt(0) === 65279 ? e2.slice(1) : e2;
  };
});
var Ue = F((mm, qe) => {
  "use strict";
  function co(e2) {
    return typeof e2 > "u" || e2 === null;
  }
  function dl(e2) {
    return typeof e2 == "object" && e2 !== null;
  }
  function gl(e2) {
    return Array.isArray(e2) ? e2 : co(e2) ? [] : [e2];
  }
  function ml(e2, t) {
    var n, i, r, o;
    if (t) for (o = Object.keys(t), n = 0, i = o.length; n < i; n += 1) r = o[n], e2[r] = t[r];
    return e2;
  }
  function yl(e2, t) {
    var n = "", i;
    for (i = 0; i < t; i += 1) n += e2;
    return n;
  }
  function xl(e2) {
    return e2 === 0 && Number.NEGATIVE_INFINITY === 1 / e2;
  }
  qe.exports.isNothing = co;
  qe.exports.isObject = dl;
  qe.exports.toArray = gl;
  qe.exports.repeat = yl;
  qe.exports.isNegativeZero = xl;
  qe.exports.extend = ml;
});
var ct = F((ym, lo) => {
  "use strict";
  function Ot(e2, t) {
    Error.call(this), this.name = "YAMLException", this.reason = e2, this.mark = t, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  Ot.prototype = Object.create(Error.prototype);
  Ot.prototype.constructor = Ot;
  Ot.prototype.toString = function(t) {
    var n = this.name + ": ";
    return n += this.reason || "(unknown reason)", !t && this.mark && (n += " " + this.mark.toString()), n;
  };
  lo.exports = Ot;
});
var ho = F((xm, po) => {
  "use strict";
  var fo = Ue();
  function cr(e2, t, n, i, r) {
    this.name = e2, this.buffer = t, this.position = n, this.line = i, this.column = r;
  }
  cr.prototype.getSnippet = function(t, n) {
    var i, r, o, s, a;
    if (!this.buffer) return null;
    for (t = t || 4, n = n || 75, i = "", r = this.position; r > 0 && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(r - 1)) === -1; ) if (r -= 1, this.position - r > n / 2 - 1) {
      i = " ... ", r += 5;
      break;
    }
    for (o = "", s = this.position; s < this.buffer.length && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(s)) === -1; ) if (s += 1, s - this.position > n / 2 - 1) {
      o = " ... ", s -= 5;
      break;
    }
    return a = this.buffer.slice(r, s), fo.repeat(" ", t) + i + a + o + `
` + fo.repeat(" ", t + this.position - r + i.length) + "^";
  };
  cr.prototype.toString = function(t) {
    var n, i = "";
    return this.name && (i += 'in "' + this.name + '" '), i += "at line " + (this.line + 1) + ", column " + (this.column + 1), t || (n = this.getSnippet(), n && (i += `:
` + n)), i;
  };
  po.exports = cr;
});
var ue = F((vm, mo) => {
  "use strict";
  var go = ct(), vl = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"], bl = ["scalar", "sequence", "mapping"];
  function wl(e2) {
    var t = {};
    return e2 !== null && Object.keys(e2).forEach(function(n) {
      e2[n].forEach(function(i) {
        t[String(i)] = n;
      });
    }), t;
  }
  function Sl(e2, t) {
    if (t = t || {}, Object.keys(t).forEach(function(n) {
      if (vl.indexOf(n) === -1) throw new go('Unknown option "' + n + '" is met in definition of "' + e2 + '" YAML type.');
    }), this.tag = e2, this.kind = t.kind || null, this.resolve = t.resolve || function() {
      return true;
    }, this.construct = t.construct || function(n) {
      return n;
    }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.defaultStyle = t.defaultStyle || null, this.styleAliases = wl(t.styleAliases || null), bl.indexOf(this.kind) === -1) throw new go('Unknown kind "' + this.kind + '" is specified for "' + e2 + '" YAML type.');
  }
  mo.exports = Sl;
});
var Be = F((bm, xo) => {
  "use strict";
  var yo = Ue(), sn = ct(), Al = ue();
  function lr(e2, t, n) {
    var i = [];
    return e2.include.forEach(function(r) {
      n = lr(r, t, n);
    }), e2[t].forEach(function(r) {
      n.forEach(function(o, s) {
        o.tag === r.tag && o.kind === r.kind && i.push(s);
      }), n.push(r);
    }), n.filter(function(r, o) {
      return i.indexOf(o) === -1;
    });
  }
  function kl() {
    var e2 = { scalar: {}, sequence: {}, mapping: {}, fallback: {} }, t, n;
    function i(r) {
      e2[r.kind][r.tag] = e2.fallback[r.tag] = r;
    }
    for (t = 0, n = arguments.length; t < n; t += 1) arguments[t].forEach(i);
    return e2;
  }
  function lt(e2) {
    this.include = e2.include || [], this.implicit = e2.implicit || [], this.explicit = e2.explicit || [], this.implicit.forEach(function(t) {
      if (t.loadKind && t.loadKind !== "scalar") throw new sn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }), this.compiledImplicit = lr(this, "implicit", []), this.compiledExplicit = lr(this, "explicit", []), this.compiledTypeMap = kl(this.compiledImplicit, this.compiledExplicit);
  }
  lt.DEFAULT = null;
  lt.create = function() {
    var t, n;
    switch (arguments.length) {
      case 1:
        t = lt.DEFAULT, n = arguments[0];
        break;
      case 2:
        t = arguments[0], n = arguments[1];
        break;
      default:
        throw new sn("Wrong number of arguments for Schema.create function");
    }
    if (t = yo.toArray(t), n = yo.toArray(n), !t.every(function(i) {
      return i instanceof lt;
    })) throw new sn("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    if (!n.every(function(i) {
      return i instanceof Al;
    })) throw new sn("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    return new lt({ include: t, explicit: n });
  };
  xo.exports = lt;
});
var bo = F((wm, vo) => {
  "use strict";
  var El = ue();
  vo.exports = new El("tag:yaml.org,2002:str", { kind: "scalar", construct: function(e2) {
    return e2 !== null ? e2 : "";
  } });
});
var So = F((Sm, wo) => {
  "use strict";
  var Tl = ue();
  wo.exports = new Tl("tag:yaml.org,2002:seq", { kind: "sequence", construct: function(e2) {
    return e2 !== null ? e2 : [];
  } });
});
var ko = F((Am, Ao) => {
  "use strict";
  var _l = ue();
  Ao.exports = new _l("tag:yaml.org,2002:map", { kind: "mapping", construct: function(e2) {
    return e2 !== null ? e2 : {};
  } });
});
var an = F((km, Eo) => {
  "use strict";
  var Rl = Be();
  Eo.exports = new Rl({ explicit: [bo(), So(), ko()] });
});
var _o = F((Em, To) => {
  "use strict";
  var Cl = ue();
  function Ol(e2) {
    if (e2 === null) return true;
    var t = e2.length;
    return t === 1 && e2 === "~" || t === 4 && (e2 === "null" || e2 === "Null" || e2 === "NULL");
  }
  function Pl() {
    return null;
  }
  function Ll(e2) {
    return e2 === null;
  }
  To.exports = new Cl("tag:yaml.org,2002:null", { kind: "scalar", resolve: Ol, construct: Pl, predicate: Ll, represent: { canonical: function() {
    return "~";
  }, lowercase: function() {
    return "null";
  }, uppercase: function() {
    return "NULL";
  }, camelcase: function() {
    return "Null";
  } }, defaultStyle: "lowercase" });
});
var Co = F((Tm, Ro) => {
  "use strict";
  var Il = ue();
  function Nl(e2) {
    if (e2 === null) return false;
    var t = e2.length;
    return t === 4 && (e2 === "true" || e2 === "True" || e2 === "TRUE") || t === 5 && (e2 === "false" || e2 === "False" || e2 === "FALSE");
  }
  function Fl(e2) {
    return e2 === "true" || e2 === "True" || e2 === "TRUE";
  }
  function Ml(e2) {
    return Object.prototype.toString.call(e2) === "[object Boolean]";
  }
  Ro.exports = new Il("tag:yaml.org,2002:bool", { kind: "scalar", resolve: Nl, construct: Fl, predicate: Ml, represent: { lowercase: function(e2) {
    return e2 ? "true" : "false";
  }, uppercase: function(e2) {
    return e2 ? "TRUE" : "FALSE";
  }, camelcase: function(e2) {
    return e2 ? "True" : "False";
  } }, defaultStyle: "lowercase" });
});
var Po = F((_m, Oo) => {
  "use strict";
  var Dl = Ue(), jl = ue();
  function Hl(e2) {
    return 48 <= e2 && e2 <= 57 || 65 <= e2 && e2 <= 70 || 97 <= e2 && e2 <= 102;
  }
  function $l(e2) {
    return 48 <= e2 && e2 <= 55;
  }
  function ql(e2) {
    return 48 <= e2 && e2 <= 57;
  }
  function Ul(e2) {
    if (e2 === null) return false;
    var t = e2.length, n = 0, i = false, r;
    if (!t) return false;
    if (r = e2[n], (r === "-" || r === "+") && (r = e2[++n]), r === "0") {
      if (n + 1 === t) return true;
      if (r = e2[++n], r === "b") {
        for (n++; n < t; n++) if (r = e2[n], r !== "_") {
          if (r !== "0" && r !== "1") return false;
          i = true;
        }
        return i && r !== "_";
      }
      if (r === "x") {
        for (n++; n < t; n++) if (r = e2[n], r !== "_") {
          if (!Hl(e2.charCodeAt(n))) return false;
          i = true;
        }
        return i && r !== "_";
      }
      for (; n < t; n++) if (r = e2[n], r !== "_") {
        if (!$l(e2.charCodeAt(n))) return false;
        i = true;
      }
      return i && r !== "_";
    }
    if (r === "_") return false;
    for (; n < t; n++) if (r = e2[n], r !== "_") {
      if (r === ":") break;
      if (!ql(e2.charCodeAt(n))) return false;
      i = true;
    }
    return !i || r === "_" ? false : r !== ":" ? true : /^(:[0-5]?[0-9])+$/.test(e2.slice(n));
  }
  function Bl(e2) {
    var t = e2, n = 1, i, r, o = [];
    return t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (n = -1), t = t.slice(1), i = t[0]), t === "0" ? 0 : i === "0" ? t[1] === "b" ? n * parseInt(t.slice(2), 2) : t[1] === "x" ? n * parseInt(t, 16) : n * parseInt(t, 8) : t.indexOf(":") !== -1 ? (t.split(":").forEach(function(s) {
      o.unshift(parseInt(s, 10));
    }), t = 0, r = 1, o.forEach(function(s) {
      t += s * r, r *= 60;
    }), n * t) : n * parseInt(t, 10);
  }
  function Gl(e2) {
    return Object.prototype.toString.call(e2) === "[object Number]" && e2 % 1 === 0 && !Dl.isNegativeZero(e2);
  }
  Oo.exports = new jl("tag:yaml.org,2002:int", { kind: "scalar", resolve: Ul, construct: Bl, predicate: Gl, represent: { binary: function(e2) {
    return e2 >= 0 ? "0b" + e2.toString(2) : "-0b" + e2.toString(2).slice(1);
  }, octal: function(e2) {
    return e2 >= 0 ? "0" + e2.toString(8) : "-0" + e2.toString(8).slice(1);
  }, decimal: function(e2) {
    return e2.toString(10);
  }, hexadecimal: function(e2) {
    return e2 >= 0 ? "0x" + e2.toString(16).toUpperCase() : "-0x" + e2.toString(16).toUpperCase().slice(1);
  } }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } });
});
var No = F((Rm, Io) => {
  "use strict";
  var Lo = Ue(), Wl = ue(), Yl = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function Kl(e2) {
    return !(e2 === null || !Yl.test(e2) || e2[e2.length - 1] === "_");
  }
  function Vl(e2) {
    var t, n, i, r;
    return t = e2.replace(/_/g, "").toLowerCase(), n = t[0] === "-" ? -1 : 1, r = [], "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : t.indexOf(":") >= 0 ? (t.split(":").forEach(function(o) {
      r.unshift(parseFloat(o, 10));
    }), t = 0, i = 1, r.forEach(function(o) {
      t += o * i, i *= 60;
    }), n * t) : n * parseFloat(t, 10);
  }
  var Jl = /^[-+]?[0-9]+e/;
  function zl(e2, t) {
    var n;
    if (isNaN(e2)) switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === e2) switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === e2) switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
    else if (Lo.isNegativeZero(e2)) return "-0.0";
    return n = e2.toString(10), Jl.test(n) ? n.replace("e", ".e") : n;
  }
  function Ql(e2) {
    return Object.prototype.toString.call(e2) === "[object Number]" && (e2 % 1 !== 0 || Lo.isNegativeZero(e2));
  }
  Io.exports = new Wl("tag:yaml.org,2002:float", { kind: "scalar", resolve: Kl, construct: Vl, predicate: Ql, represent: zl, defaultStyle: "lowercase" });
});
var fr = F((Cm, Fo) => {
  "use strict";
  var Xl = Be();
  Fo.exports = new Xl({ include: [an()], implicit: [_o(), Co(), Po(), No()] });
});
var pr = F((Om, Mo) => {
  "use strict";
  var Zl = Be();
  Mo.exports = new Zl({ include: [fr()] });
});
var $o = F((Pm, Ho) => {
  "use strict";
  var ef = ue(), Do = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), jo = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function tf(e2) {
    return e2 === null ? false : Do.exec(e2) !== null || jo.exec(e2) !== null;
  }
  function nf(e2) {
    var t, n, i, r, o, s, a, u = 0, l = null, c, f, p;
    if (t = Do.exec(e2), t === null && (t = jo.exec(e2)), t === null) throw new Error("Date resolve error");
    if (n = +t[1], i = +t[2] - 1, r = +t[3], !t[4]) return new Date(Date.UTC(n, i, r));
    if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
      for (u = t[7].slice(0, 3); u.length < 3; ) u += "0";
      u = +u;
    }
    return t[9] && (c = +t[10], f = +(t[11] || 0), l = (c * 60 + f) * 6e4, t[9] === "-" && (l = -l)), p = new Date(Date.UTC(n, i, r, o, s, a, u)), l && p.setTime(p.getTime() - l), p;
  }
  function rf(e2) {
    return e2.toISOString();
  }
  Ho.exports = new ef("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: tf, construct: nf, instanceOf: Date, represent: rf });
});
var Uo = F((Lm, qo) => {
  "use strict";
  var of = ue();
  function sf(e2) {
    return e2 === "<<" || e2 === null;
  }
  qo.exports = new of("tag:yaml.org,2002:merge", { kind: "scalar", resolve: sf });
});
var Wo = F((Im, Go) => {
  "use strict";
  var Ge;
  try {
    Bo = require, Ge = Bo("buffer").Buffer;
  } catch {
  }
  var Bo, af = ue(), hr = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function uf(e2) {
    if (e2 === null) return false;
    var t, n, i = 0, r = e2.length, o = hr;
    for (n = 0; n < r; n++) if (t = o.indexOf(e2.charAt(n)), !(t > 64)) {
      if (t < 0) return false;
      i += 6;
    }
    return i % 8 === 0;
  }
  function cf(e2) {
    var t, n, i = e2.replace(/[\r\n=]/g, ""), r = i.length, o = hr, s = 0, a = [];
    for (t = 0; t < r; t++) t % 4 === 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(i.charAt(t));
    return n = r % 4 * 6, n === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : n === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : n === 12 && a.push(s >> 4 & 255), Ge ? Ge.from ? Ge.from(a) : new Ge(a) : a;
  }
  function lf(e2) {
    var t = "", n = 0, i, r, o = e2.length, s = hr;
    for (i = 0; i < o; i++) i % 3 === 0 && i && (t += s[n >> 18 & 63], t += s[n >> 12 & 63], t += s[n >> 6 & 63], t += s[n & 63]), n = (n << 8) + e2[i];
    return r = o % 3, r === 0 ? (t += s[n >> 18 & 63], t += s[n >> 12 & 63], t += s[n >> 6 & 63], t += s[n & 63]) : r === 2 ? (t += s[n >> 10 & 63], t += s[n >> 4 & 63], t += s[n << 2 & 63], t += s[64]) : r === 1 && (t += s[n >> 2 & 63], t += s[n << 4 & 63], t += s[64], t += s[64]), t;
  }
  function ff(e2) {
    return Ge && Ge.isBuffer(e2);
  }
  Go.exports = new af("tag:yaml.org,2002:binary", { kind: "scalar", resolve: uf, construct: cf, predicate: ff, represent: lf });
});
var Vo = F((Nm, Ko) => {
  "use strict";
  var pf = ue(), Yo = Object.prototype.hasOwnProperty, hf = Object.prototype.toString;
  function df(e2) {
    if (e2 === null) return true;
    var t = {}, n, i, r, o, s, a = e2;
    for (n = 0, i = a.length; n < i; n += 1) {
      if (r = a[n], s = false, hf.call(r) !== "[object Object]") return false;
      for (o in r) if (Yo.call(r, o)) if (!s) s = true;
      else return false;
      if (!s || Yo.call(t, o)) return false;
      Object.defineProperty(t, o, { value: true });
    }
    return true;
  }
  function gf(e2) {
    return e2 !== null ? e2 : [];
  }
  Ko.exports = new pf("tag:yaml.org,2002:omap", { kind: "sequence", resolve: df, construct: gf });
});
var zo = F((Fm, Jo) => {
  "use strict";
  var mf = ue(), yf = Object.prototype.toString;
  function xf(e2) {
    if (e2 === null) return true;
    var t, n, i, r, o, s = e2;
    for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) {
      if (i = s[t], yf.call(i) !== "[object Object]" || (r = Object.keys(i), r.length !== 1)) return false;
      o[t] = [r[0], i[r[0]]];
    }
    return true;
  }
  function vf(e2) {
    if (e2 === null) return [];
    var t, n, i, r, o, s = e2;
    for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) i = s[t], r = Object.keys(i), o[t] = [r[0], i[r[0]]];
    return o;
  }
  Jo.exports = new mf("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: xf, construct: vf });
});
var Xo = F((Mm, Qo) => {
  "use strict";
  var bf = ue(), wf = Object.prototype.hasOwnProperty;
  function Sf(e2) {
    if (e2 === null) return true;
    var t, n = e2;
    for (t in n) if (wf.call(n, t) && n[t] !== null) return false;
    return true;
  }
  function Af(e2) {
    return e2 !== null ? e2 : {};
  }
  Qo.exports = new bf("tag:yaml.org,2002:set", { kind: "mapping", resolve: Sf, construct: Af });
});
var ft = F((Dm, Zo) => {
  "use strict";
  var kf = Be();
  Zo.exports = new kf({ include: [pr()], implicit: [$o(), Uo()], explicit: [Wo(), Vo(), zo(), Xo()] });
});
var ts = F((jm, es) => {
  "use strict";
  var Ef = ue();
  function Tf() {
    return true;
  }
  function _f() {
  }
  function Rf() {
    return "";
  }
  function Cf(e2) {
    return typeof e2 > "u";
  }
  es.exports = new Ef("tag:yaml.org,2002:js/undefined", { kind: "scalar", resolve: Tf, construct: _f, predicate: Cf, represent: Rf });
});
var rs = F((Hm, ns) => {
  "use strict";
  var Of = ue();
  function Pf(e2) {
    if (e2 === null || e2.length === 0) return false;
    var t = e2, n = /\/([gim]*)$/.exec(e2), i = "";
    return !(t[0] === "/" && (n && (i = n[1]), i.length > 3 || t[t.length - i.length - 1] !== "/"));
  }
  function Lf(e2) {
    var t = e2, n = /\/([gim]*)$/.exec(e2), i = "";
    return t[0] === "/" && (n && (i = n[1]), t = t.slice(1, t.length - i.length - 1)), new RegExp(t, i);
  }
  function If(e2) {
    var t = "/" + e2.source + "/";
    return e2.global && (t += "g"), e2.multiline && (t += "m"), e2.ignoreCase && (t += "i"), t;
  }
  function Nf(e2) {
    return Object.prototype.toString.call(e2) === "[object RegExp]";
  }
  ns.exports = new Of("tag:yaml.org,2002:js/regexp", { kind: "scalar", resolve: Pf, construct: Lf, predicate: Nf, represent: If });
});
var ss = F(($m, os) => {
  "use strict";
  var un;
  try {
    is = require, un = is("esprima");
  } catch {
    typeof window < "u" && (un = window.esprima);
  }
  var is, Ff = ue();
  function Mf(e2) {
    if (e2 === null) return false;
    try {
      var t = "(" + e2 + ")", n = un.parse(t, { range: true });
      return !(n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression");
    } catch {
      return false;
    }
  }
  function Df(e2) {
    var t = "(" + e2 + ")", n = un.parse(t, { range: true }), i = [], r;
    if (n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression") throw new Error("Failed to resolve function");
    return n.body[0].expression.params.forEach(function(o) {
      i.push(o.name);
    }), r = n.body[0].expression.body.range, n.body[0].expression.body.type === "BlockStatement" ? new Function(i, t.slice(r[0] + 1, r[1] - 1)) : new Function(i, "return " + t.slice(r[0], r[1]));
  }
  function jf(e2) {
    return e2.toString();
  }
  function Hf(e2) {
    return Object.prototype.toString.call(e2) === "[object Function]";
  }
  os.exports = new Ff("tag:yaml.org,2002:js/function", { kind: "scalar", resolve: Mf, construct: Df, predicate: Hf, represent: jf });
});
var Pt = F((qm, us) => {
  "use strict";
  var as = Be();
  us.exports = as.DEFAULT = new as({ include: [ft()], explicit: [ts(), rs(), ss()] });
});
var Rs = F((Um, Lt) => {
  "use strict";
  var Ce = Ue(), gs = ct(), $f = ho(), ms = ft(), qf = Pt(), je = Object.prototype.hasOwnProperty, cn = 1, ys = 2, xs = 3, ln = 4, dr = 1, Uf = 2, cs = 3, Bf = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Gf = /[\x85\u2028\u2029]/, Wf = /[,\[\]\{\}]/, vs = /^(?:!|!!|![a-z\-]+!)$/i, bs = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function ls(e2) {
    return Object.prototype.toString.call(e2);
  }
  function Ee(e2) {
    return e2 === 10 || e2 === 13;
  }
  function Ye(e2) {
    return e2 === 9 || e2 === 32;
  }
  function ge(e2) {
    return e2 === 9 || e2 === 32 || e2 === 10 || e2 === 13;
  }
  function pt(e2) {
    return e2 === 44 || e2 === 91 || e2 === 93 || e2 === 123 || e2 === 125;
  }
  function Yf(e2) {
    var t;
    return 48 <= e2 && e2 <= 57 ? e2 - 48 : (t = e2 | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
  }
  function Kf(e2) {
    return e2 === 120 ? 2 : e2 === 117 ? 4 : e2 === 85 ? 8 : 0;
  }
  function Vf(e2) {
    return 48 <= e2 && e2 <= 57 ? e2 - 48 : -1;
  }
  function fs(e2) {
    return e2 === 48 ? "\0" : e2 === 97 ? "\x07" : e2 === 98 ? "\b" : e2 === 116 || e2 === 9 ? "	" : e2 === 110 ? `
` : e2 === 118 ? "\v" : e2 === 102 ? "\f" : e2 === 114 ? "\r" : e2 === 101 ? "\x1B" : e2 === 32 ? " " : e2 === 34 ? '"' : e2 === 47 ? "/" : e2 === 92 ? "\\" : e2 === 78 ? "" : e2 === 95 ? " " : e2 === 76 ? "\u2028" : e2 === 80 ? "\u2029" : "";
  }
  function Jf(e2) {
    return e2 <= 65535 ? String.fromCharCode(e2) : String.fromCharCode((e2 - 65536 >> 10) + 55296, (e2 - 65536 & 1023) + 56320);
  }
  function ws(e2, t, n) {
    t === "__proto__" ? Object.defineProperty(e2, t, { configurable: true, enumerable: true, writable: true, value: n }) : e2[t] = n;
  }
  var Ss = new Array(256), As = new Array(256);
  for (We = 0; We < 256; We++) Ss[We] = fs(We) ? 1 : 0, As[We] = fs(We);
  var We;
  function zf(e2, t) {
    this.input = e2, this.filename = t.filename || null, this.schema = t.schema || qf, this.onWarning = t.onWarning || null, this.legacy = t.legacy || false, this.json = t.json || false, this.listener = t.listener || null, this.maxTotalMergeKeys = typeof t.maxTotalMergeKeys == "number" ? t.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e2.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.totalMergeKeys = 0, this.documents = [];
  }
  function ks(e2, t) {
    return new gs(t, new $f(e2.filename, e2.input, e2.position, e2.line, e2.position - e2.lineStart));
  }
  function q(e2, t) {
    throw ks(e2, t);
  }
  function fn(e2, t) {
    e2.onWarning && e2.onWarning.call(null, ks(e2, t));
  }
  var ps = { YAML: function(t, n, i) {
    var r, o, s;
    t.version !== null && q(t, "duplication of %YAML directive"), i.length !== 1 && q(t, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && q(t, "ill-formed argument of the YAML directive"), o = parseInt(r[1], 10), s = parseInt(r[2], 10), o !== 1 && q(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = s < 2, s !== 1 && s !== 2 && fn(t, "unsupported YAML version of the document");
  }, TAG: function(t, n, i) {
    var r, o;
    i.length !== 2 && q(t, "TAG directive accepts exactly two arguments"), r = i[0], o = i[1], vs.test(r) || q(t, "ill-formed tag handle (first argument) of the TAG directive"), je.call(t.tagMap, r) && q(t, 'there is a previously declared suffix for "' + r + '" tag handle'), bs.test(o) || q(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagMap[r] = o;
  } };
  function De(e2, t, n, i) {
    var r, o, s, a;
    if (t < n) {
      if (a = e2.input.slice(t, n), i) for (r = 0, o = a.length; r < o; r += 1) s = a.charCodeAt(r), s === 9 || 32 <= s && s <= 1114111 || q(e2, "expected valid JSON character");
      else Bf.test(a) && q(e2, "the stream contains non-printable characters");
      e2.result += a;
    }
  }
  function hs(e2, t, n, i) {
    var r, o, s, a;
    for (Ce.isObject(n) || q(e2, "cannot merge mappings; the provided source object is unacceptable"), r = Object.keys(n), s = 0, a = r.length; s < a; s += 1) o = r[s], e2.maxTotalMergeKeys !== -1 && ++e2.totalMergeKeys > e2.maxTotalMergeKeys && q(e2, "merge keys exceeded maxTotalMergeKeys (" + e2.maxTotalMergeKeys + ")"), je.call(t, o) || (ws(t, o, n[o]), i[o] = true);
  }
  function ht(e2, t, n, i, r, o, s, a) {
    var u, l;
    if (Array.isArray(r)) for (r = Array.prototype.slice.call(r), u = 0, l = r.length; u < l; u += 1) Array.isArray(r[u]) && q(e2, "nested arrays are not supported inside keys"), typeof r == "object" && ls(r[u]) === "[object Object]" && (r[u] = "[object Object]");
    if (typeof r == "object" && ls(r) === "[object Object]" && (r = "[object Object]"), r = String(r), t === null && (t = {}), i === "tag:yaml.org,2002:merge") if (Array.isArray(o)) for (u = 0, l = o.length; u < l; u += 1) hs(e2, t, o[u], n);
    else hs(e2, t, o, n);
    else !e2.json && !je.call(n, r) && je.call(t, r) && (e2.line = s || e2.line, e2.position = a || e2.position, q(e2, "duplicated mapping key")), ws(t, r, o), delete n[r];
    return t;
  }
  function gr(e2) {
    var t;
    t = e2.input.charCodeAt(e2.position), t === 10 ? e2.position++ : t === 13 ? (e2.position++, e2.input.charCodeAt(e2.position) === 10 && e2.position++) : q(e2, "a line break is expected"), e2.line += 1, e2.lineStart = e2.position;
  }
  function ie(e2, t, n) {
    for (var i = 0, r = e2.input.charCodeAt(e2.position); r !== 0; ) {
      for (; Ye(r); ) r = e2.input.charCodeAt(++e2.position);
      if (t && r === 35) do
        r = e2.input.charCodeAt(++e2.position);
      while (r !== 10 && r !== 13 && r !== 0);
      if (Ee(r)) for (gr(e2), r = e2.input.charCodeAt(e2.position), i++, e2.lineIndent = 0; r === 32; ) e2.lineIndent++, r = e2.input.charCodeAt(++e2.position);
      else break;
    }
    return n !== -1 && i !== 0 && e2.lineIndent < n && fn(e2, "deficient indentation"), i;
  }
  function pn(e2) {
    var t = e2.position, n;
    return n = e2.input.charCodeAt(t), !!((n === 45 || n === 46) && n === e2.input.charCodeAt(t + 1) && n === e2.input.charCodeAt(t + 2) && (t += 3, n = e2.input.charCodeAt(t), n === 0 || ge(n)));
  }
  function mr(e2, t) {
    t === 1 ? e2.result += " " : t > 1 && (e2.result += Ce.repeat(`
`, t - 1));
  }
  function Qf(e2, t, n) {
    var i, r, o, s, a, u, l, c, f = e2.kind, p = e2.result, d;
    if (d = e2.input.charCodeAt(e2.position), ge(d) || pt(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (r = e2.input.charCodeAt(e2.position + 1), ge(r) || n && pt(r))) return false;
    for (e2.kind = "scalar", e2.result = "", o = s = e2.position, a = false; d !== 0; ) {
      if (d === 58) {
        if (r = e2.input.charCodeAt(e2.position + 1), ge(r) || n && pt(r)) break;
      } else if (d === 35) {
        if (i = e2.input.charCodeAt(e2.position - 1), ge(i)) break;
      } else {
        if (e2.position === e2.lineStart && pn(e2) || n && pt(d)) break;
        if (Ee(d)) if (u = e2.line, l = e2.lineStart, c = e2.lineIndent, ie(e2, false, -1), e2.lineIndent >= t) {
          a = true, d = e2.input.charCodeAt(e2.position);
          continue;
        } else {
          e2.position = s, e2.line = u, e2.lineStart = l, e2.lineIndent = c;
          break;
        }
      }
      a && (De(e2, o, s, false), mr(e2, e2.line - u), o = s = e2.position, a = false), Ye(d) || (s = e2.position + 1), d = e2.input.charCodeAt(++e2.position);
    }
    return De(e2, o, s, false), e2.result ? true : (e2.kind = f, e2.result = p, false);
  }
  function Xf(e2, t) {
    var n, i, r;
    if (n = e2.input.charCodeAt(e2.position), n !== 39) return false;
    for (e2.kind = "scalar", e2.result = "", e2.position++, i = r = e2.position; (n = e2.input.charCodeAt(e2.position)) !== 0; ) if (n === 39) if (De(e2, i, e2.position, true), n = e2.input.charCodeAt(++e2.position), n === 39) i = e2.position, e2.position++, r = e2.position;
    else return true;
    else Ee(n) ? (De(e2, i, r, true), mr(e2, ie(e2, false, t)), i = r = e2.position) : e2.position === e2.lineStart && pn(e2) ? q(e2, "unexpected end of the document within a single quoted scalar") : (e2.position++, r = e2.position);
    q(e2, "unexpected end of the stream within a single quoted scalar");
  }
  function Zf(e2, t) {
    var n, i, r, o, s, a;
    if (a = e2.input.charCodeAt(e2.position), a !== 34) return false;
    for (e2.kind = "scalar", e2.result = "", e2.position++, n = i = e2.position; (a = e2.input.charCodeAt(e2.position)) !== 0; ) {
      if (a === 34) return De(e2, n, e2.position, true), e2.position++, true;
      if (a === 92) {
        if (De(e2, n, e2.position, true), a = e2.input.charCodeAt(++e2.position), Ee(a)) ie(e2, false, t);
        else if (a < 256 && Ss[a]) e2.result += As[a], e2.position++;
        else if ((s = Kf(a)) > 0) {
          for (r = s, o = 0; r > 0; r--) a = e2.input.charCodeAt(++e2.position), (s = Yf(a)) >= 0 ? o = (o << 4) + s : q(e2, "expected hexadecimal character");
          e2.result += Jf(o), e2.position++;
        } else q(e2, "unknown escape sequence");
        n = i = e2.position;
      } else Ee(a) ? (De(e2, n, i, true), mr(e2, ie(e2, false, t)), n = i = e2.position) : e2.position === e2.lineStart && pn(e2) ? q(e2, "unexpected end of the document within a double quoted scalar") : (e2.position++, i = e2.position);
    }
    q(e2, "unexpected end of the stream within a double quoted scalar");
  }
  function ep(e2, t) {
    var n = true, i, r = e2.tag, o, s = e2.anchor, a, u, l, c, f, p = {}, d, h, x, A;
    if (A = e2.input.charCodeAt(e2.position), A === 91) u = 93, f = false, o = [];
    else if (A === 123) u = 125, f = true, o = {};
    else return false;
    for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = o), A = e2.input.charCodeAt(++e2.position); A !== 0; ) {
      if (ie(e2, true, t), A = e2.input.charCodeAt(e2.position), A === u) return e2.position++, e2.tag = r, e2.anchor = s, e2.kind = f ? "mapping" : "sequence", e2.result = o, true;
      n || q(e2, "missed comma between flow collection entries"), h = d = x = null, l = c = false, A === 63 && (a = e2.input.charCodeAt(e2.position + 1), ge(a) && (l = c = true, e2.position++, ie(e2, true, t))), i = e2.line, dt(e2, t, cn, false, true), h = e2.tag, d = e2.result, ie(e2, true, t), A = e2.input.charCodeAt(e2.position), (c || e2.line === i) && A === 58 && (l = true, A = e2.input.charCodeAt(++e2.position), ie(e2, true, t), dt(e2, t, cn, false, true), x = e2.result), f ? ht(e2, o, p, h, d, x) : l ? o.push(ht(e2, null, p, h, d, x)) : o.push(d), ie(e2, true, t), A = e2.input.charCodeAt(e2.position), A === 44 ? (n = true, A = e2.input.charCodeAt(++e2.position)) : n = false;
    }
    q(e2, "unexpected end of the stream within a flow collection");
  }
  function tp(e2, t) {
    var n, i, r = dr, o = false, s = false, a = t, u = 0, l = false, c, f;
    if (f = e2.input.charCodeAt(e2.position), f === 124) i = false;
    else if (f === 62) i = true;
    else return false;
    for (e2.kind = "scalar", e2.result = ""; f !== 0; ) if (f = e2.input.charCodeAt(++e2.position), f === 43 || f === 45) dr === r ? r = f === 43 ? cs : Uf : q(e2, "repeat of a chomping mode identifier");
    else if ((c = Vf(f)) >= 0) c === 0 ? q(e2, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? q(e2, "repeat of an indentation width identifier") : (a = t + c - 1, s = true);
    else break;
    if (Ye(f)) {
      do
        f = e2.input.charCodeAt(++e2.position);
      while (Ye(f));
      if (f === 35) do
        f = e2.input.charCodeAt(++e2.position);
      while (!Ee(f) && f !== 0);
    }
    for (; f !== 0; ) {
      for (gr(e2), e2.lineIndent = 0, f = e2.input.charCodeAt(e2.position); (!s || e2.lineIndent < a) && f === 32; ) e2.lineIndent++, f = e2.input.charCodeAt(++e2.position);
      if (!s && e2.lineIndent > a && (a = e2.lineIndent), Ee(f)) {
        u++;
        continue;
      }
      if (e2.lineIndent < a) {
        r === cs ? e2.result += Ce.repeat(`
`, o ? 1 + u : u) : r === dr && o && (e2.result += `
`);
        break;
      }
      for (i ? Ye(f) ? (l = true, e2.result += Ce.repeat(`
`, o ? 1 + u : u)) : l ? (l = false, e2.result += Ce.repeat(`
`, u + 1)) : u === 0 ? o && (e2.result += " ") : e2.result += Ce.repeat(`
`, u) : e2.result += Ce.repeat(`
`, o ? 1 + u : u), o = true, s = true, u = 0, n = e2.position; !Ee(f) && f !== 0; ) f = e2.input.charCodeAt(++e2.position);
      De(e2, n, e2.position, false);
    }
    return true;
  }
  function ds(e2, t) {
    var n, i = e2.tag, r = e2.anchor, o = [], s, a = false, u;
    for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = o), u = e2.input.charCodeAt(e2.position); u !== 0 && !(u !== 45 || (s = e2.input.charCodeAt(e2.position + 1), !ge(s))); ) {
      if (a = true, e2.position++, ie(e2, true, -1) && e2.lineIndent <= t) {
        o.push(null), u = e2.input.charCodeAt(e2.position);
        continue;
      }
      if (n = e2.line, dt(e2, t, xs, false, true), o.push(e2.result), ie(e2, true, -1), u = e2.input.charCodeAt(e2.position), (e2.line === n || e2.lineIndent > t) && u !== 0) q(e2, "bad indentation of a sequence entry");
      else if (e2.lineIndent < t) break;
    }
    return a ? (e2.tag = i, e2.anchor = r, e2.kind = "sequence", e2.result = o, true) : false;
  }
  function np(e2, t, n) {
    var i, r, o, s, a = e2.tag, u = e2.anchor, l = {}, c = {}, f = null, p = null, d = null, h = false, x = false, A;
    for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = l), A = e2.input.charCodeAt(e2.position); A !== 0; ) {
      if (i = e2.input.charCodeAt(e2.position + 1), o = e2.line, s = e2.position, (A === 63 || A === 58) && ge(i)) A === 63 ? (h && (ht(e2, l, c, f, p, null), f = p = d = null), x = true, h = true, r = true) : h ? (h = false, r = true) : q(e2, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e2.position += 1, A = i;
      else if (dt(e2, n, ys, false, true)) if (e2.line === o) {
        for (A = e2.input.charCodeAt(e2.position); Ye(A); ) A = e2.input.charCodeAt(++e2.position);
        if (A === 58) A = e2.input.charCodeAt(++e2.position), ge(A) || q(e2, "a whitespace character is expected after the key-value separator within a block mapping"), h && (ht(e2, l, c, f, p, null), f = p = d = null), x = true, h = false, r = false, f = e2.tag, p = e2.result;
        else if (x) q(e2, "can not read an implicit mapping pair; a colon is missed");
        else return e2.tag = a, e2.anchor = u, true;
      } else if (x) q(e2, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else return e2.tag = a, e2.anchor = u, true;
      else break;
      if ((e2.line === o || e2.lineIndent > t) && (dt(e2, t, ln, true, r) && (h ? p = e2.result : d = e2.result), h || (ht(e2, l, c, f, p, d, o, s), f = p = d = null), ie(e2, true, -1), A = e2.input.charCodeAt(e2.position)), e2.lineIndent > t && A !== 0) q(e2, "bad indentation of a mapping entry");
      else if (e2.lineIndent < t) break;
    }
    return h && ht(e2, l, c, f, p, null), x && (e2.tag = a, e2.anchor = u, e2.kind = "mapping", e2.result = l), x;
  }
  function rp(e2) {
    var t, n = false, i = false, r, o, s;
    if (s = e2.input.charCodeAt(e2.position), s !== 33) return false;
    if (e2.tag !== null && q(e2, "duplication of a tag property"), s = e2.input.charCodeAt(++e2.position), s === 60 ? (n = true, s = e2.input.charCodeAt(++e2.position)) : s === 33 ? (i = true, r = "!!", s = e2.input.charCodeAt(++e2.position)) : r = "!", t = e2.position, n) {
      do
        s = e2.input.charCodeAt(++e2.position);
      while (s !== 0 && s !== 62);
      e2.position < e2.length ? (o = e2.input.slice(t, e2.position), s = e2.input.charCodeAt(++e2.position)) : q(e2, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; s !== 0 && !ge(s); ) s === 33 && (i ? q(e2, "tag suffix cannot contain exclamation marks") : (r = e2.input.slice(t - 1, e2.position + 1), vs.test(r) || q(e2, "named tag handle cannot contain such characters"), i = true, t = e2.position + 1)), s = e2.input.charCodeAt(++e2.position);
      o = e2.input.slice(t, e2.position), Wf.test(o) && q(e2, "tag suffix cannot contain flow indicator characters");
    }
    return o && !bs.test(o) && q(e2, "tag name cannot contain such characters: " + o), n ? e2.tag = o : je.call(e2.tagMap, r) ? e2.tag = e2.tagMap[r] + o : r === "!" ? e2.tag = "!" + o : r === "!!" ? e2.tag = "tag:yaml.org,2002:" + o : q(e2, 'undeclared tag handle "' + r + '"'), true;
  }
  function ip(e2) {
    var t, n;
    if (n = e2.input.charCodeAt(e2.position), n !== 38) return false;
    for (e2.anchor !== null && q(e2, "duplication of an anchor property"), n = e2.input.charCodeAt(++e2.position), t = e2.position; n !== 0 && !ge(n) && !pt(n); ) n = e2.input.charCodeAt(++e2.position);
    return e2.position === t && q(e2, "name of an anchor node must contain at least one character"), e2.anchor = e2.input.slice(t, e2.position), true;
  }
  function op(e2) {
    var t, n, i;
    if (i = e2.input.charCodeAt(e2.position), i !== 42) return false;
    for (i = e2.input.charCodeAt(++e2.position), t = e2.position; i !== 0 && !ge(i) && !pt(i); ) i = e2.input.charCodeAt(++e2.position);
    return e2.position === t && q(e2, "name of an alias node must contain at least one character"), n = e2.input.slice(t, e2.position), je.call(e2.anchorMap, n) || q(e2, 'unidentified alias "' + n + '"'), e2.result = e2.anchorMap[n], ie(e2, true, -1), true;
  }
  function dt(e2, t, n, i, r) {
    var o, s, a, u = 1, l = false, c = false, f, p, d, h, x;
    if (e2.listener !== null && e2.listener("open", e2), e2.tag = null, e2.anchor = null, e2.kind = null, e2.result = null, o = s = a = ln === n || xs === n, i && ie(e2, true, -1) && (l = true, e2.lineIndent > t ? u = 1 : e2.lineIndent === t ? u = 0 : e2.lineIndent < t && (u = -1)), u === 1) for (; rp(e2) || ip(e2); ) ie(e2, true, -1) ? (l = true, a = o, e2.lineIndent > t ? u = 1 : e2.lineIndent === t ? u = 0 : e2.lineIndent < t && (u = -1)) : a = false;
    if (a && (a = l || r), (u === 1 || ln === n) && (cn === n || ys === n ? h = t : h = t + 1, x = e2.position - e2.lineStart, u === 1 ? a && (ds(e2, x) || np(e2, x, h)) || ep(e2, h) ? c = true : (s && tp(e2, h) || Xf(e2, h) || Zf(e2, h) ? c = true : op(e2) ? (c = true, (e2.tag !== null || e2.anchor !== null) && q(e2, "alias node should not have any properties")) : Qf(e2, h, cn === n) && (c = true, e2.tag === null && (e2.tag = "?")), e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result)) : u === 0 && (c = a && ds(e2, x))), e2.tag !== null && e2.tag !== "!") if (e2.tag === "?") {
      for (e2.result !== null && e2.kind !== "scalar" && q(e2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e2.kind + '"'), f = 0, p = e2.implicitTypes.length; f < p; f += 1) if (d = e2.implicitTypes[f], d.resolve(e2.result)) {
        e2.result = d.construct(e2.result), e2.tag = d.tag, e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result);
        break;
      }
    } else je.call(e2.typeMap[e2.kind || "fallback"], e2.tag) ? (d = e2.typeMap[e2.kind || "fallback"][e2.tag], e2.result !== null && d.kind !== e2.kind && q(e2, "unacceptable node kind for !<" + e2.tag + '> tag; it should be "' + d.kind + '", not "' + e2.kind + '"'), d.resolve(e2.result) ? (e2.result = d.construct(e2.result), e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result)) : q(e2, "cannot resolve a node with !<" + e2.tag + "> explicit tag")) : q(e2, "unknown tag !<" + e2.tag + ">");
    return e2.listener !== null && e2.listener("close", e2), e2.tag !== null || e2.anchor !== null || c;
  }
  function sp(e2) {
    var t = e2.position, n, i, r, o = false, s;
    for (e2.version = null, e2.checkLineBreaks = e2.legacy, e2.tagMap = {}, e2.anchorMap = {}; (s = e2.input.charCodeAt(e2.position)) !== 0 && (ie(e2, true, -1), s = e2.input.charCodeAt(e2.position), !(e2.lineIndent > 0 || s !== 37)); ) {
      for (o = true, s = e2.input.charCodeAt(++e2.position), n = e2.position; s !== 0 && !ge(s); ) s = e2.input.charCodeAt(++e2.position);
      for (i = e2.input.slice(n, e2.position), r = [], i.length < 1 && q(e2, "directive name must not be less than one character in length"); s !== 0; ) {
        for (; Ye(s); ) s = e2.input.charCodeAt(++e2.position);
        if (s === 35) {
          do
            s = e2.input.charCodeAt(++e2.position);
          while (s !== 0 && !Ee(s));
          break;
        }
        if (Ee(s)) break;
        for (n = e2.position; s !== 0 && !ge(s); ) s = e2.input.charCodeAt(++e2.position);
        r.push(e2.input.slice(n, e2.position));
      }
      s !== 0 && gr(e2), je.call(ps, i) ? ps[i](e2, i, r) : fn(e2, 'unknown document directive "' + i + '"');
    }
    if (ie(e2, true, -1), e2.lineIndent === 0 && e2.input.charCodeAt(e2.position) === 45 && e2.input.charCodeAt(e2.position + 1) === 45 && e2.input.charCodeAt(e2.position + 2) === 45 ? (e2.position += 3, ie(e2, true, -1)) : o && q(e2, "directives end mark is expected"), dt(e2, e2.lineIndent - 1, ln, false, true), ie(e2, true, -1), e2.checkLineBreaks && Gf.test(e2.input.slice(t, e2.position)) && fn(e2, "non-ASCII line breaks are interpreted as content"), e2.documents.push(e2.result), e2.position === e2.lineStart && pn(e2)) {
      e2.input.charCodeAt(e2.position) === 46 && (e2.position += 3, ie(e2, true, -1));
      return;
    }
    if (e2.position < e2.length - 1) q(e2, "end of the stream or a document separator is expected");
    else return;
  }
  function Es(e2, t) {
    e2 = String(e2), t = t || {}, e2.length !== 0 && (e2.charCodeAt(e2.length - 1) !== 10 && e2.charCodeAt(e2.length - 1) !== 13 && (e2 += `
`), e2.charCodeAt(0) === 65279 && (e2 = e2.slice(1)));
    var n = new zf(e2, t), i = e2.indexOf("\0");
    for (i !== -1 && (n.position = i, q(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; ) n.lineIndent += 1, n.position += 1;
    for (; n.position < n.length - 1; ) sp(n);
    return n.documents;
  }
  function Ts(e2, t, n) {
    t !== null && typeof t == "object" && typeof n > "u" && (n = t, t = null);
    var i = Es(e2, n);
    if (typeof t != "function") return i;
    for (var r = 0, o = i.length; r < o; r += 1) t(i[r]);
  }
  function _s(e2, t) {
    var n = Es(e2, t);
    if (n.length !== 0) {
      if (n.length === 1) return n[0];
      throw new gs("expected a single document in the stream, but found more");
    }
  }
  function ap(e2, t, n) {
    return typeof t == "object" && t !== null && typeof n > "u" && (n = t, t = null), Ts(e2, t, Ce.extend({ schema: ms }, n));
  }
  function up(e2, t) {
    return _s(e2, Ce.extend({ schema: ms }, t));
  }
  Lt.exports.loadAll = Ts;
  Lt.exports.load = _s;
  Lt.exports.safeLoadAll = ap;
  Lt.exports.safeLoad = up;
});
var Qs = F((Bm, br) => {
  "use strict";
  var Nt = Ue(), Ft = ct(), cp = Pt(), lp = ft(), Ms = Object.prototype.toString, Ds = Object.prototype.hasOwnProperty, fp = 9, It = 10, pp = 13, hp = 32, dp = 33, gp = 34, js = 35, mp = 37, yp = 38, xp = 39, vp = 42, Hs = 44, bp = 45, $s = 58, wp = 61, Sp = 62, Ap = 63, kp = 64, qs = 91, Us = 93, Ep = 96, Bs = 123, Tp = 124, Gs = 125, fe = {};
  fe[0] = "\\0";
  fe[7] = "\\a";
  fe[8] = "\\b";
  fe[9] = "\\t";
  fe[10] = "\\n";
  fe[11] = "\\v";
  fe[12] = "\\f";
  fe[13] = "\\r";
  fe[27] = "\\e";
  fe[34] = '\\"';
  fe[92] = "\\\\";
  fe[133] = "\\N";
  fe[160] = "\\_";
  fe[8232] = "\\L";
  fe[8233] = "\\P";
  var _p = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
  function Rp(e2, t) {
    var n, i, r, o, s, a, u;
    if (t === null) return {};
    for (n = {}, i = Object.keys(t), r = 0, o = i.length; r < o; r += 1) s = i[r], a = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), u = e2.compiledTypeMap.fallback[s], u && Ds.call(u.styleAliases, a) && (a = u.styleAliases[a]), n[s] = a;
    return n;
  }
  function Cs(e2) {
    var t, n, i;
    if (t = e2.toString(16).toUpperCase(), e2 <= 255) n = "x", i = 2;
    else if (e2 <= 65535) n = "u", i = 4;
    else if (e2 <= 4294967295) n = "U", i = 8;
    else throw new Ft("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + n + Nt.repeat("0", i - t.length) + t;
  }
  function Cp(e2) {
    this.schema = e2.schema || cp, this.indent = Math.max(1, e2.indent || 2), this.noArrayIndent = e2.noArrayIndent || false, this.skipInvalid = e2.skipInvalid || false, this.flowLevel = Nt.isNothing(e2.flowLevel) ? -1 : e2.flowLevel, this.styleMap = Rp(this.schema, e2.styles || null), this.sortKeys = e2.sortKeys || false, this.lineWidth = e2.lineWidth || 80, this.noRefs = e2.noRefs || false, this.noCompatMode = e2.noCompatMode || false, this.condenseFlow = e2.condenseFlow || false, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function Os(e2, t) {
    for (var n = Nt.repeat(" ", t), i = 0, r = -1, o = "", s, a = e2.length; i < a; ) r = e2.indexOf(`
`, i), r === -1 ? (s = e2.slice(i), i = a) : (s = e2.slice(i, r + 1), i = r + 1), s.length && s !== `
` && (o += n), o += s;
    return o;
  }
  function yr(e2, t) {
    return `
` + Nt.repeat(" ", e2.indent * t);
  }
  function Op(e2, t) {
    var n, i, r;
    for (n = 0, i = e2.implicitTypes.length; n < i; n += 1) if (r = e2.implicitTypes[n], r.resolve(t)) return true;
    return false;
  }
  function vr(e2) {
    return e2 === hp || e2 === fp;
  }
  function gt(e2) {
    return 32 <= e2 && e2 <= 126 || 161 <= e2 && e2 <= 55295 && e2 !== 8232 && e2 !== 8233 || 57344 <= e2 && e2 <= 65533 && e2 !== 65279 || 65536 <= e2 && e2 <= 1114111;
  }
  function Pp(e2) {
    return gt(e2) && !vr(e2) && e2 !== 65279 && e2 !== pp && e2 !== It;
  }
  function Ps(e2, t) {
    return gt(e2) && e2 !== 65279 && e2 !== Hs && e2 !== qs && e2 !== Us && e2 !== Bs && e2 !== Gs && e2 !== $s && (e2 !== js || t && Pp(t));
  }
  function Lp(e2) {
    return gt(e2) && e2 !== 65279 && !vr(e2) && e2 !== bp && e2 !== Ap && e2 !== $s && e2 !== Hs && e2 !== qs && e2 !== Us && e2 !== Bs && e2 !== Gs && e2 !== js && e2 !== yp && e2 !== vp && e2 !== dp && e2 !== Tp && e2 !== wp && e2 !== Sp && e2 !== xp && e2 !== gp && e2 !== mp && e2 !== kp && e2 !== Ep;
  }
  function Ws(e2) {
    var t = /^\n* /;
    return t.test(e2);
  }
  var Ys = 1, Ks = 2, Vs = 3, Js = 4, hn = 5;
  function Ip(e2, t, n, i, r) {
    var o, s, a, u = false, l = false, c = i !== -1, f = -1, p = Lp(e2.charCodeAt(0)) && !vr(e2.charCodeAt(e2.length - 1));
    if (t) for (o = 0; o < e2.length; o++) {
      if (s = e2.charCodeAt(o), !gt(s)) return hn;
      a = o > 0 ? e2.charCodeAt(o - 1) : null, p = p && Ps(s, a);
    }
    else {
      for (o = 0; o < e2.length; o++) {
        if (s = e2.charCodeAt(o), s === It) u = true, c && (l = l || o - f - 1 > i && e2[f + 1] !== " ", f = o);
        else if (!gt(s)) return hn;
        a = o > 0 ? e2.charCodeAt(o - 1) : null, p = p && Ps(s, a);
      }
      l = l || c && o - f - 1 > i && e2[f + 1] !== " ";
    }
    return !u && !l ? p && !r(e2) ? Ys : Ks : n > 9 && Ws(e2) ? hn : l ? Js : Vs;
  }
  function Np(e2, t, n, i) {
    e2.dump = (function() {
      if (t.length === 0) return "''";
      if (!e2.noCompatMode && _p.indexOf(t) !== -1) return "'" + t + "'";
      var r = e2.indent * Math.max(1, n), o = e2.lineWidth === -1 ? -1 : Math.max(Math.min(e2.lineWidth, 40), e2.lineWidth - r), s = i || e2.flowLevel > -1 && n >= e2.flowLevel;
      function a(u) {
        return Op(e2, u);
      }
      switch (Ip(t, s, e2.indent, o, a)) {
        case Ys:
          return t;
        case Ks:
          return "'" + t.replace(/'/g, "''") + "'";
        case Vs:
          return "|" + Ls(t, e2.indent) + Is(Os(t, r));
        case Js:
          return ">" + Ls(t, e2.indent) + Is(Os(Fp(t, o), r));
        case hn:
          return '"' + Mp(t, o) + '"';
        default:
          throw new Ft("impossible error: invalid scalar style");
      }
    })();
  }
  function Ls(e2, t) {
    var n = Ws(e2) ? String(t) : "", i = e2[e2.length - 1] === `
`, r = i && (e2[e2.length - 2] === `
` || e2 === `
`), o = r ? "+" : i ? "" : "-";
    return n + o + `
`;
  }
  function Is(e2) {
    return e2[e2.length - 1] === `
` ? e2.slice(0, -1) : e2;
  }
  function Fp(e2, t) {
    for (var n = /(\n+)([^\n]*)/g, i = (function() {
      var l = e2.indexOf(`
`);
      return l = l !== -1 ? l : e2.length, n.lastIndex = l, Ns(e2.slice(0, l), t);
    })(), r = e2[0] === `
` || e2[0] === " ", o, s; s = n.exec(e2); ) {
      var a = s[1], u = s[2];
      o = u[0] === " ", i += a + (!r && !o && u !== "" ? `
` : "") + Ns(u, t), r = o;
    }
    return i;
  }
  function Ns(e2, t) {
    if (e2 === "" || e2[0] === " ") return e2;
    for (var n = / [^ ]/g, i, r = 0, o, s = 0, a = 0, u = ""; i = n.exec(e2); ) a = i.index, a - r > t && (o = s > r ? s : a, u += `
` + e2.slice(r, o), r = o + 1), s = a;
    return u += `
`, e2.length - r > t && s > r ? u += e2.slice(r, s) + `
` + e2.slice(s + 1) : u += e2.slice(r), u.slice(1);
  }
  function Mp(e2) {
    for (var t = "", n, i, r, o = 0; o < e2.length; o++) {
      if (n = e2.charCodeAt(o), n >= 55296 && n <= 56319 && (i = e2.charCodeAt(o + 1), i >= 56320 && i <= 57343)) {
        t += Cs((n - 55296) * 1024 + i - 56320 + 65536), o++;
        continue;
      }
      r = fe[n], t += !r && gt(n) ? e2[o] : r || Cs(n);
    }
    return t;
  }
  function Dp(e2, t, n) {
    var i = "", r = e2.tag, o, s;
    for (o = 0, s = n.length; o < s; o += 1) Ke(e2, t, n[o], false, false) && (o !== 0 && (i += "," + (e2.condenseFlow ? "" : " ")), i += e2.dump);
    e2.tag = r, e2.dump = "[" + i + "]";
  }
  function jp(e2, t, n, i) {
    var r = "", o = e2.tag, s, a;
    for (s = 0, a = n.length; s < a; s += 1) Ke(e2, t + 1, n[s], true, true) && ((!i || s !== 0) && (r += yr(e2, t)), e2.dump && It === e2.dump.charCodeAt(0) ? r += "-" : r += "- ", r += e2.dump);
    e2.tag = o, e2.dump = r || "[]";
  }
  function Hp(e2, t, n) {
    var i = "", r = e2.tag, o = Object.keys(n), s, a, u, l, c;
    for (s = 0, a = o.length; s < a; s += 1) c = "", s !== 0 && (c += ", "), e2.condenseFlow && (c += '"'), u = o[s], l = n[u], Ke(e2, t, u, false, false) && (e2.dump.length > 1024 && (c += "? "), c += e2.dump + (e2.condenseFlow ? '"' : "") + ":" + (e2.condenseFlow ? "" : " "), Ke(e2, t, l, false, false) && (c += e2.dump, i += c));
    e2.tag = r, e2.dump = "{" + i + "}";
  }
  function $p(e2, t, n, i) {
    var r = "", o = e2.tag, s = Object.keys(n), a, u, l, c, f, p;
    if (e2.sortKeys === true) s.sort();
    else if (typeof e2.sortKeys == "function") s.sort(e2.sortKeys);
    else if (e2.sortKeys) throw new Ft("sortKeys must be a boolean or a function");
    for (a = 0, u = s.length; a < u; a += 1) p = "", (!i || a !== 0) && (p += yr(e2, t)), l = s[a], c = n[l], Ke(e2, t + 1, l, true, true, true) && (f = e2.tag !== null && e2.tag !== "?" || e2.dump && e2.dump.length > 1024, f && (e2.dump && It === e2.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e2.dump, f && (p += yr(e2, t)), Ke(e2, t + 1, c, true, f) && (e2.dump && It === e2.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e2.dump, r += p));
    e2.tag = o, e2.dump = r || "{}";
  }
  function Fs(e2, t, n) {
    var i, r, o, s, a, u;
    for (r = n ? e2.explicitTypes : e2.implicitTypes, o = 0, s = r.length; o < s; o += 1) if (a = r[o], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (e2.tag = n ? a.tag : "?", a.represent) {
        if (u = e2.styleMap[a.tag] || a.defaultStyle, Ms.call(a.represent) === "[object Function]") i = a.represent(t, u);
        else if (Ds.call(a.represent, u)) i = a.represent[u](t, u);
        else throw new Ft("!<" + a.tag + '> tag resolver accepts not "' + u + '" style');
        e2.dump = i;
      }
      return true;
    }
    return false;
  }
  function Ke(e2, t, n, i, r, o) {
    e2.tag = null, e2.dump = n, Fs(e2, n, false) || Fs(e2, n, true);
    var s = Ms.call(e2.dump);
    i && (i = e2.flowLevel < 0 || e2.flowLevel > t);
    var a = s === "[object Object]" || s === "[object Array]", u, l;
    if (a && (u = e2.duplicates.indexOf(n), l = u !== -1), (e2.tag !== null && e2.tag !== "?" || l || e2.indent !== 2 && t > 0) && (r = false), l && e2.usedDuplicates[u]) e2.dump = "*ref_" + u;
    else {
      if (a && l && !e2.usedDuplicates[u] && (e2.usedDuplicates[u] = true), s === "[object Object]") i && Object.keys(e2.dump).length !== 0 ? ($p(e2, t, e2.dump, r), l && (e2.dump = "&ref_" + u + e2.dump)) : (Hp(e2, t, e2.dump), l && (e2.dump = "&ref_" + u + " " + e2.dump));
      else if (s === "[object Array]") {
        var c = e2.noArrayIndent && t > 0 ? t - 1 : t;
        i && e2.dump.length !== 0 ? (jp(e2, c, e2.dump, r), l && (e2.dump = "&ref_" + u + e2.dump)) : (Dp(e2, c, e2.dump), l && (e2.dump = "&ref_" + u + " " + e2.dump));
      } else if (s === "[object String]") e2.tag !== "?" && Np(e2, e2.dump, t, o);
      else {
        if (e2.skipInvalid) return false;
        throw new Ft("unacceptable kind of an object to dump " + s);
      }
      e2.tag !== null && e2.tag !== "?" && (e2.dump = "!<" + e2.tag + "> " + e2.dump);
    }
    return true;
  }
  function qp(e2, t) {
    var n = [], i = [], r, o;
    for (xr(e2, n, i), r = 0, o = i.length; r < o; r += 1) t.duplicates.push(n[i[r]]);
    t.usedDuplicates = new Array(o);
  }
  function xr(e2, t, n) {
    var i, r, o;
    if (e2 !== null && typeof e2 == "object") if (r = t.indexOf(e2), r !== -1) n.indexOf(r) === -1 && n.push(r);
    else if (t.push(e2), Array.isArray(e2)) for (r = 0, o = e2.length; r < o; r += 1) xr(e2[r], t, n);
    else for (i = Object.keys(e2), r = 0, o = i.length; r < o; r += 1) xr(e2[i[r]], t, n);
  }
  function zs(e2, t) {
    t = t || {};
    var n = new Cp(t);
    return n.noRefs || qp(e2, n), Ke(n, 0, e2, true, true) ? n.dump + `
` : "";
  }
  function Up(e2, t) {
    return zs(e2, Nt.extend({ schema: lp }, t));
  }
  br.exports.dump = zs;
  br.exports.safeDump = Up;
});
var Zs = F((Gm, ne) => {
  "use strict";
  var dn = Rs(), Xs = Qs();
  function gn(e2) {
    return function() {
      throw new Error("Function " + e2 + " is deprecated and cannot be used.");
    };
  }
  ne.exports.Type = ue();
  ne.exports.Schema = Be();
  ne.exports.FAILSAFE_SCHEMA = an();
  ne.exports.JSON_SCHEMA = fr();
  ne.exports.CORE_SCHEMA = pr();
  ne.exports.DEFAULT_SAFE_SCHEMA = ft();
  ne.exports.DEFAULT_FULL_SCHEMA = Pt();
  ne.exports.load = dn.load;
  ne.exports.loadAll = dn.loadAll;
  ne.exports.safeLoad = dn.safeLoad;
  ne.exports.safeLoadAll = dn.safeLoadAll;
  ne.exports.dump = Xs.dump;
  ne.exports.safeDump = Xs.safeDump;
  ne.exports.YAMLException = ct();
  ne.exports.MINIMAL_SCHEMA = an();
  ne.exports.SAFE_SCHEMA = ft();
  ne.exports.DEFAULT_SCHEMA = Pt();
  ne.exports.scan = gn("scan");
  ne.exports.parse = gn("parse");
  ne.exports.compose = gn("compose");
  ne.exports.addConstructor = gn("addConstructor");
});
var ta = F((Wm, ea) => {
  "use strict";
  var Bp = Zs();
  ea.exports = Bp;
});
var ia = F((Ym, wr) => {
  "use strict";
  var na = ro(), Gp = so(), Wp = uo(), Yp = ta(), ra = (e2) => Yp.safeLoad(Wp(e2));
  wr.exports = (e2) => Gp(na.readFile)(e2, "utf8").then((t) => ra(t));
  wr.exports.sync = (e2) => ra(na.readFileSync(e2, "utf8"));
});
var sa = F((Km, oa) => {
  "use strict";
  var mn = require("path"), Sr = rr(), Kp = ia();
  oa.exports = async function(e2) {
    let t = mn.join(e2, "node_modules");
    if (await Sr(mn.join(t, ".yarn-integrity"))) return { name: "yarn" };
    if (await Sr(mn.join(e2, "bun.lockb"))) return { name: "bun" };
    try {
      let r = await Kp(mn.join(t, ".modules.yaml"));
      return Vp(r.packageManager);
    } catch (r) {
      if (r.code !== "ENOENT") throw r;
    }
    return await Sr(t) ? { name: "npm" } : null;
  };
  function Vp(e2) {
    if (e2[0] === "@") {
      let i = e2.substr(1).split("@");
      return { name: `@${i[0]}`, version: i[1] };
    }
    let t = e2.split("@");
    return { name: t[0], version: t[1] };
  }
});
var yn = F((we) => {
  "use strict";
  we.isInteger = (e2) => typeof e2 == "number" ? Number.isInteger(e2) : typeof e2 == "string" && e2.trim() !== "" ? Number.isInteger(Number(e2)) : false;
  we.find = (e2, t) => e2.nodes.find((n) => n.type === t);
  we.exceedsLimit = (e2, t, n = 1, i) => i === false || !we.isInteger(e2) || !we.isInteger(t) ? false : (Number(t) - Number(e2)) / Number(n) >= i;
  we.escapeNode = (e2, t = 0, n) => {
    let i = e2.nodes[t];
    i && (n && i.type === n || i.type === "open" || i.type === "close") && i.escaped !== true && (i.value = "\\" + i.value, i.escaped = true);
  };
  we.encloseBrace = (e2) => e2.type !== "brace" ? false : e2.commas >> 0 + e2.ranges >> 0 === 0 ? (e2.invalid = true, true) : false;
  we.isInvalidBrace = (e2) => e2.type !== "brace" ? false : e2.invalid === true || e2.dollar ? true : e2.commas >> 0 + e2.ranges >> 0 === 0 || e2.open !== true || e2.close !== true ? (e2.invalid = true, true) : false;
  we.isOpenOrClose = (e2) => e2.type === "open" || e2.type === "close" ? true : e2.open === true || e2.close === true;
  we.reduce = (e2) => e2.reduce((t, n) => (n.type === "text" && t.push(n.value), n.type === "range" && (n.type = "text"), t), []);
  we.flatten = (...e2) => {
    let t = [], n = (i) => {
      for (let r = 0; r < i.length; r++) {
        let o = i[r];
        if (Array.isArray(o)) {
          n(o);
          continue;
        }
        o !== void 0 && t.push(o);
      }
      return t;
    };
    return n(e2), t;
  };
});
var xn = F((Jm, ua) => {
  "use strict";
  var aa = yn();
  ua.exports = (e2, t = {}) => {
    let n = (i, r = {}) => {
      let o = t.escapeInvalid && aa.isInvalidBrace(r), s = i.invalid === true && t.escapeInvalid === true, a = "";
      if (i.value) return (o || s) && aa.isOpenOrClose(i) ? "\\" + i.value : i.value;
      if (i.value) return i.value;
      if (i.nodes) for (let u of i.nodes) a += n(u);
      return a;
    };
    return n(e2);
  };
});
var la = F((zm, ca) => {
  "use strict";
  ca.exports = function(e2) {
    return typeof e2 == "number" ? e2 - e2 === 0 : typeof e2 == "string" && e2.trim() !== "" ? Number.isFinite ? Number.isFinite(+e2) : isFinite(+e2) : false;
  };
});
var va = F((Qm, xa) => {
  "use strict";
  var fa = la(), Ve = (e2, t, n) => {
    if (fa(e2) === false) throw new TypeError("toRegexRange: expected the first argument to be a number");
    if (t === void 0 || e2 === t) return String(e2);
    if (fa(t) === false) throw new TypeError("toRegexRange: expected the second argument to be a number.");
    let i = { relaxZeros: true, ...n };
    typeof i.strictZeros == "boolean" && (i.relaxZeros = i.strictZeros === false);
    let r = String(i.relaxZeros), o = String(i.shorthand), s = String(i.capture), a = String(i.wrap), u = e2 + ":" + t + "=" + r + o + s + a;
    if (Ve.cache.hasOwnProperty(u)) return Ve.cache[u].result;
    let l = Math.min(e2, t), c = Math.max(e2, t);
    if (Math.abs(l - c) === 1) {
      let x = e2 + "|" + t;
      return i.capture ? `(${x})` : i.wrap === false ? x : `(?:${x})`;
    }
    let f = ya(e2) || ya(t), p = { min: e2, max: t, a: l, b: c }, d = [], h = [];
    if (f && (p.isPadded = f, p.maxLen = String(p.max).length), l < 0) {
      let x = c < 0 ? Math.abs(c) : 1;
      h = pa(x, Math.abs(l), p, i), l = p.a = 0;
    }
    return c >= 0 && (d = pa(l, c, p, i)), p.negatives = h, p.positives = d, p.result = Jp(h, d, i), i.capture === true ? p.result = `(${p.result})` : i.wrap !== false && d.length + h.length > 1 && (p.result = `(?:${p.result})`), Ve.cache[u] = p, p.result;
  };
  function Jp(e2, t, n) {
    let i = Ar(e2, t, "-", false, n) || [], r = Ar(t, e2, "", false, n) || [], o = Ar(e2, t, "-?", true, n) || [];
    return i.concat(o).concat(r).join("|");
  }
  function zp(e2, t) {
    let n = 1, i = 1, r = da(e2, n), o = /* @__PURE__ */ new Set([t]);
    for (; e2 <= r && r <= t; ) o.add(r), n += 1, r = da(e2, n);
    for (r = ga(t + 1, i) - 1; e2 < r && r <= t; ) o.add(r), i += 1, r = ga(t + 1, i) - 1;
    return o = [...o], o.sort(Zp), o;
  }
  function Qp(e2, t, n) {
    if (e2 === t) return { pattern: e2, count: [], digits: 0 };
    let i = Xp(e2, t), r = i.length, o = "", s = 0;
    for (let a = 0; a < r; a++) {
      let [u, l] = i[a];
      u === l ? o += u : u !== "0" || l !== "9" ? o += eh(u, l, n) : s++;
    }
    return s && (o += n.shorthand === true ? "\\d" : "[0-9]"), { pattern: o, count: [s], digits: r };
  }
  function pa(e2, t, n, i) {
    let r = zp(e2, t), o = [], s = e2, a;
    for (let u = 0; u < r.length; u++) {
      let l = r[u], c = Qp(String(s), String(l), i), f = "";
      if (!n.isPadded && a && a.pattern === c.pattern) {
        a.count.length > 1 && a.count.pop(), a.count.push(c.count[0]), a.string = a.pattern + ma(a.count), s = l + 1;
        continue;
      }
      n.isPadded && (f = th(l, n, i)), c.string = f + c.pattern + ma(c.count), o.push(c), s = l + 1, a = c;
    }
    return o;
  }
  function Ar(e2, t, n, i, r) {
    let o = [];
    for (let s of e2) {
      let { string: a } = s;
      !i && !ha(t, "string", a) && o.push(n + a), i && ha(t, "string", a) && o.push(n + a);
    }
    return o;
  }
  function Xp(e2, t) {
    let n = [];
    for (let i = 0; i < e2.length; i++) n.push([e2[i], t[i]]);
    return n;
  }
  function Zp(e2, t) {
    return e2 > t ? 1 : t > e2 ? -1 : 0;
  }
  function ha(e2, t, n) {
    return e2.some((i) => i[t] === n);
  }
  function da(e2, t) {
    return Number(String(e2).slice(0, -t) + "9".repeat(t));
  }
  function ga(e2, t) {
    return e2 - e2 % Math.pow(10, t);
  }
  function ma(e2) {
    let [t = 0, n = ""] = e2;
    return n || t > 1 ? `{${t + (n ? "," + n : "")}}` : "";
  }
  function eh(e2, t, n) {
    return `[${e2}${t - e2 === 1 ? "" : "-"}${t}]`;
  }
  function ya(e2) {
    return /^-?(0+)\d/.test(e2);
  }
  function th(e2, t, n) {
    if (!t.isPadded) return e2;
    let i = Math.abs(t.maxLen - String(e2).length), r = n.relaxZeros !== false;
    switch (i) {
      case 0:
        return "";
      case 1:
        return r ? "0?" : "0";
      case 2:
        return r ? "0{0,2}" : "00";
      default:
        return r ? `0{0,${i}}` : `0{${i}}`;
    }
  }
  Ve.cache = {};
  Ve.clearCache = () => Ve.cache = {};
  xa.exports = Ve;
});
var Tr = F((Xm, Ta) => {
  "use strict";
  var nh = require("util"), wa = va(), ba = (e2) => e2 !== null && typeof e2 == "object" && !Array.isArray(e2), rh = (e2) => (t) => e2 === true ? Number(t) : String(t), kr = (e2) => typeof e2 == "number" || typeof e2 == "string" && e2 !== "", Mt = (e2) => Number.isInteger(+e2), Er = (e2) => {
    let t = `${e2}`, n = -1;
    if (t[0] === "-" && (t = t.slice(1)), t === "0") return false;
    for (; t[++n] === "0"; ) ;
    return n > 0;
  }, ih = (e2, t, n) => typeof e2 == "string" || typeof t == "string" ? true : n.stringify === true, oh = (e2, t, n) => {
    if (t > 0) {
      let i = e2[0] === "-" ? "-" : "";
      i && (e2 = e2.slice(1)), e2 = i + e2.padStart(i ? t - 1 : t, "0");
    }
    return n === false ? String(e2) : e2;
  }, bn = (e2, t) => {
    let n = e2[0] === "-" ? "-" : "";
    for (n && (e2 = e2.slice(1), t--); e2.length < t; ) e2 = "0" + e2;
    return n ? "-" + e2 : e2;
  }, sh = (e2, t, n) => {
    e2.negatives.sort((a, u) => a < u ? -1 : a > u ? 1 : 0), e2.positives.sort((a, u) => a < u ? -1 : a > u ? 1 : 0);
    let i = t.capture ? "" : "?:", r = "", o = "", s;
    return e2.positives.length && (r = e2.positives.map((a) => bn(String(a), n)).join("|")), e2.negatives.length && (o = `-(${i}${e2.negatives.map((a) => bn(String(a), n)).join("|")})`), r && o ? s = `${r}|${o}` : s = r || o, t.wrap ? `(${i}${s})` : s;
  }, Sa = (e2, t, n, i) => {
    if (n) return wa(e2, t, { wrap: false, ...i });
    let r = String.fromCharCode(e2);
    if (e2 === t) return r;
    let o = String.fromCharCode(t);
    return `[${r}-${o}]`;
  }, Aa = (e2, t, n) => {
    if (Array.isArray(e2)) {
      let i = n.wrap === true, r = n.capture ? "" : "?:";
      return i ? `(${r}${e2.join("|")})` : e2.join("|");
    }
    return wa(e2, t, n);
  }, ka = (...e2) => new RangeError("Invalid range arguments: " + nh.inspect(...e2)), Ea = (e2, t, n) => {
    if (n.strictRanges === true) throw ka([e2, t]);
    return [];
  }, ah = (e2, t) => {
    if (t.strictRanges === true) throw new TypeError(`Expected step "${e2}" to be a number`);
    return [];
  }, uh = (e2, t, n = 1, i = {}) => {
    let r = Number(e2), o = Number(t);
    if (!Number.isInteger(r) || !Number.isInteger(o)) {
      if (i.strictRanges === true) throw ka([e2, t]);
      return [];
    }
    r === 0 && (r = 0), o === 0 && (o = 0);
    let s = r > o, a = String(e2), u = String(t), l = String(n);
    n = Math.max(Math.abs(n), 1);
    let c = Er(a) || Er(u) || Er(l), f = c ? Math.max(a.length, u.length, l.length) : 0, p = c === false && ih(e2, t, i) === false, d = i.transform || rh(p);
    if (i.toRegex && n === 1) return Sa(bn(e2, f), bn(t, f), true, i);
    let h = { negatives: [], positives: [] }, x = (P) => h[P < 0 ? "negatives" : "positives"].push(Math.abs(P)), A = [], L = 0;
    for (; s ? r >= o : r <= o; ) i.toRegex === true && n > 1 ? x(r) : A.push(oh(d(r, L), f, p)), r = s ? r - n : r + n, L++;
    return i.toRegex === true ? n > 1 ? sh(h, i, f) : Aa(A, null, { wrap: false, ...i }) : A;
  }, ch = (e2, t, n = 1, i = {}) => {
    if (!Mt(e2) && e2.length > 1 || !Mt(t) && t.length > 1) return Ea(e2, t, i);
    let r = i.transform || ((p) => String.fromCharCode(p)), o = `${e2}`.charCodeAt(0), s = `${t}`.charCodeAt(0), a = o > s, u = Math.min(o, s), l = Math.max(o, s);
    if (i.toRegex && n === 1) return Sa(u, l, false, i);
    let c = [], f = 0;
    for (; a ? o >= s : o <= s; ) c.push(r(o, f)), o = a ? o - n : o + n, f++;
    return i.toRegex === true ? Aa(c, null, { wrap: false, options: i }) : c;
  }, vn = (e2, t, n, i = {}) => {
    if (t == null && kr(e2)) return [e2];
    if (!kr(e2) || !kr(t)) return Ea(e2, t, i);
    if (typeof n == "function") return vn(e2, t, 1, { transform: n });
    if (ba(n)) return vn(e2, t, 0, n);
    let r = { ...i };
    return r.capture === true && (r.wrap = true), n = n || r.step || 1, Mt(n) ? Mt(e2) && Mt(t) ? uh(e2, t, n, r) : ch(e2, t, Math.max(Math.abs(n), 1), r) : n != null && !ba(n) ? ah(n, r) : vn(e2, t, 1, n);
  };
  Ta.exports = vn;
});
var Ca = F((Zm, Ra) => {
  "use strict";
  var lh = Tr(), _a = yn(), fh = (e2, t = {}) => {
    let n = (i, r = {}) => {
      let o = _a.isInvalidBrace(r), s = i.invalid === true && t.escapeInvalid === true, a = o === true || s === true, u = t.escapeInvalid === true ? "\\" : "", l = "";
      if (i.isOpen === true) return u + i.value;
      if (i.isClose === true) return console.log("node.isClose", u, i.value), u + i.value;
      if (i.type === "open") return a ? u + i.value : "(";
      if (i.type === "close") return a ? u + i.value : ")";
      if (i.type === "comma") return i.prev.type === "comma" ? "" : a ? i.value : "|";
      if (i.value) return i.value;
      if (i.nodes && i.ranges > 0) {
        let c = _a.reduce(i.nodes), f = lh(...c, { ...t, wrap: false, toRegex: true, strictZeros: true });
        if (f.length !== 0) return c.length > 1 && f.length > 1 ? `(${f})` : f;
      }
      if (i.nodes) for (let c of i.nodes) l += n(c, i);
      return l;
    };
    return n(e2);
  };
  Ra.exports = fh;
});
var La = F((e0, Pa) => {
  "use strict";
  var ph = Tr(), Oa = xn(), mt = yn(), Je = (e2 = "", t = "", n = false) => {
    let i = [];
    if (e2 = [].concat(e2), t = [].concat(t), !t.length) return e2;
    if (!e2.length) return n ? mt.flatten(t).map((r) => `{${r}}`) : t;
    for (let r of e2) if (Array.isArray(r)) for (let o of r) i.push(Je(o, t, n));
    else for (let o of t) n === true && typeof o == "string" && (o = `{${o}}`), i.push(Array.isArray(o) ? Je(r, o, n) : r + o);
    return mt.flatten(i);
  }, hh = (e2, t = {}) => {
    let n = t.rangeLimit === void 0 ? 1e3 : t.rangeLimit, i = (r, o = {}) => {
      r.queue = [];
      let s = o, a = o.queue;
      for (; s.type !== "brace" && s.type !== "root" && s.parent; ) s = s.parent, a = s.queue;
      if (r.invalid || r.dollar) {
        a.push(Je(a.pop(), Oa(r, t)));
        return;
      }
      if (r.type === "brace" && r.invalid !== true && r.nodes.length === 2) {
        a.push(Je(a.pop(), ["{}"]));
        return;
      }
      if (r.nodes && r.ranges > 0) {
        let f = mt.reduce(r.nodes);
        if (mt.exceedsLimit(...f, t.step, n)) throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
        let p = ph(...f, t);
        p.length === 0 && (p = Oa(r, t)), a.push(Je(a.pop(), p)), r.nodes = [];
        return;
      }
      let u = mt.encloseBrace(r), l = r.queue, c = r;
      for (; c.type !== "brace" && c.type !== "root" && c.parent; ) c = c.parent, l = c.queue;
      for (let f = 0; f < r.nodes.length; f++) {
        let p = r.nodes[f];
        if (p.type === "comma" && r.type === "brace") {
          f === 1 && l.push(""), l.push("");
          continue;
        }
        if (p.type === "close") {
          a.push(Je(a.pop(), l, u));
          continue;
        }
        if (p.value && p.type !== "open") {
          l.push(Je(l.pop(), p.value));
          continue;
        }
        p.nodes && i(p, r);
      }
      return l;
    };
    return mt.flatten(i(e2));
  };
  Pa.exports = hh;
});
var Na = F((t0, Ia) => {
  "use strict";
  Ia.exports = { MAX_LENGTH: 1e4, CHAR_0: "0", CHAR_9: "9", CHAR_UPPERCASE_A: "A", CHAR_LOWERCASE_A: "a", CHAR_UPPERCASE_Z: "Z", CHAR_LOWERCASE_Z: "z", CHAR_LEFT_PARENTHESES: "(", CHAR_RIGHT_PARENTHESES: ")", CHAR_ASTERISK: "*", CHAR_AMPERSAND: "&", CHAR_AT: "@", CHAR_BACKSLASH: "\\", CHAR_BACKTICK: "`", CHAR_CARRIAGE_RETURN: "\r", CHAR_CIRCUMFLEX_ACCENT: "^", CHAR_COLON: ":", CHAR_COMMA: ",", CHAR_DOLLAR: "$", CHAR_DOT: ".", CHAR_DOUBLE_QUOTE: '"', CHAR_EQUAL: "=", CHAR_EXCLAMATION_MARK: "!", CHAR_FORM_FEED: "\f", CHAR_FORWARD_SLASH: "/", CHAR_HASH: "#", CHAR_HYPHEN_MINUS: "-", CHAR_LEFT_ANGLE_BRACKET: "<", CHAR_LEFT_CURLY_BRACE: "{", CHAR_LEFT_SQUARE_BRACKET: "[", CHAR_LINE_FEED: `
`, CHAR_NO_BREAK_SPACE: " ", CHAR_PERCENT: "%", CHAR_PLUS: "+", CHAR_QUESTION_MARK: "?", CHAR_RIGHT_ANGLE_BRACKET: ">", CHAR_RIGHT_CURLY_BRACE: "}", CHAR_RIGHT_SQUARE_BRACKET: "]", CHAR_SEMICOLON: ";", CHAR_SINGLE_QUOTE: "'", CHAR_SPACE: " ", CHAR_TAB: "	", CHAR_UNDERSCORE: "_", CHAR_VERTICAL_LINE: "|", CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" };
});
var Ha = F((n0, ja) => {
  "use strict";
  var dh = xn(), { MAX_LENGTH: Fa, CHAR_BACKSLASH: _r, CHAR_BACKTICK: gh, CHAR_COMMA: mh, CHAR_DOT: yh, CHAR_LEFT_PARENTHESES: xh, CHAR_RIGHT_PARENTHESES: vh, CHAR_LEFT_CURLY_BRACE: bh, CHAR_RIGHT_CURLY_BRACE: wh, CHAR_LEFT_SQUARE_BRACKET: Ma, CHAR_RIGHT_SQUARE_BRACKET: Da, CHAR_DOUBLE_QUOTE: Sh, CHAR_SINGLE_QUOTE: Ah, CHAR_NO_BREAK_SPACE: kh, CHAR_ZERO_WIDTH_NOBREAK_SPACE: Eh } = Na(), Th = (e2, t = {}) => {
    if (typeof e2 != "string") throw new TypeError("Expected a string");
    let n = t || {}, i = typeof n.maxLength == "number" ? Math.min(Fa, n.maxLength) : Fa;
    if (e2.length > i) throw new SyntaxError(`Input length (${e2.length}), exceeds max characters (${i})`);
    let r = { type: "root", input: e2, nodes: [] }, o = [r], s = r, a = r, u = 0, l = e2.length, c = 0, f = 0, p, d = () => e2[c++], h = (x) => {
      if (x.type === "text" && a.type === "dot" && (a.type = "text"), a && a.type === "text" && x.type === "text") {
        a.value += x.value;
        return;
      }
      return s.nodes.push(x), x.parent = s, x.prev = a, a = x, x;
    };
    for (h({ type: "bos" }); c < l; ) if (s = o[o.length - 1], p = d(), !(p === Eh || p === kh)) {
      if (p === _r) {
        h({ type: "text", value: (t.keepEscaping ? p : "") + d() });
        continue;
      }
      if (p === Da) {
        h({ type: "text", value: "\\" + p });
        continue;
      }
      if (p === Ma) {
        u++;
        let x;
        for (; c < l && (x = d()); ) {
          if (p += x, x === Ma) {
            u++;
            continue;
          }
          if (x === _r) {
            p += d();
            continue;
          }
          if (x === Da && (u--, u === 0)) break;
        }
        h({ type: "text", value: p });
        continue;
      }
      if (p === xh) {
        s = h({ type: "paren", nodes: [] }), o.push(s), h({ type: "text", value: p });
        continue;
      }
      if (p === vh) {
        if (s.type !== "paren") {
          h({ type: "text", value: p });
          continue;
        }
        s = o.pop(), h({ type: "text", value: p }), s = o[o.length - 1];
        continue;
      }
      if (p === Sh || p === Ah || p === gh) {
        let x = p, A;
        for (t.keepQuotes !== true && (p = ""); c < l && (A = d()); ) {
          if (A === _r) {
            p += A + d();
            continue;
          }
          if (A === x) {
            t.keepQuotes === true && (p += A);
            break;
          }
          p += A;
        }
        h({ type: "text", value: p });
        continue;
      }
      if (p === bh) {
        f++;
        let A = { type: "brace", open: true, close: false, dollar: a.value && a.value.slice(-1) === "$" || s.dollar === true, depth: f, commas: 0, ranges: 0, nodes: [] };
        s = h(A), o.push(s), h({ type: "open", value: p });
        continue;
      }
      if (p === wh) {
        if (s.type !== "brace") {
          h({ type: "text", value: p });
          continue;
        }
        let x = "close";
        s = o.pop(), s.close = true, h({ type: x, value: p }), f--, s = o[o.length - 1];
        continue;
      }
      if (p === mh && f > 0) {
        if (s.ranges > 0) {
          s.ranges = 0;
          let x = s.nodes.shift();
          s.nodes = [x, { type: "text", value: dh(s) }];
        }
        h({ type: "comma", value: p }), s.commas++;
        continue;
      }
      if (p === yh && f > 0 && s.commas === 0) {
        let x = s.nodes;
        if (f === 0 || x.length === 0) {
          h({ type: "text", value: p });
          continue;
        }
        if (a.type === "dot") {
          if (s.range = [], a.value += p, a.type = "range", s.nodes.length !== 3 && s.nodes.length !== 5) {
            s.invalid = true, s.ranges = 0, a.type = "text";
            continue;
          }
          s.ranges++, s.args = [];
          continue;
        }
        if (a.type === "range") {
          x.pop();
          let A = x[x.length - 1];
          A.value += a.value + p, a = A, s.ranges--;
          continue;
        }
        h({ type: "dot", value: p });
        continue;
      }
      h({ type: "text", value: p });
    }
    do
      if (s = o.pop(), s.type !== "root") {
        s.nodes.forEach((L) => {
          L.nodes || (L.type === "open" && (L.isOpen = true), L.type === "close" && (L.isClose = true), L.nodes || (L.type = "text"), L.invalid = true);
        });
        let x = o[o.length - 1], A = x.nodes.indexOf(s);
        x.nodes.splice(A, 1, ...s.nodes);
      }
    while (o.length > 0);
    return h({ type: "eos" }), r;
  };
  ja.exports = Th;
});
var Ua = F((r0, qa) => {
  "use strict";
  var $a = xn(), _h = Ca(), Rh = La(), Ch = Ha(), ve = (e2, t = {}) => {
    let n = [];
    if (Array.isArray(e2)) for (let i of e2) {
      let r = ve.create(i, t);
      Array.isArray(r) ? n.push(...r) : n.push(r);
    }
    else n = [].concat(ve.create(e2, t));
    return t && t.expand === true && t.nodupes === true && (n = [...new Set(n)]), n;
  };
  ve.parse = (e2, t = {}) => Ch(e2, t);
  ve.stringify = (e2, t = {}) => $a(typeof e2 == "string" ? ve.parse(e2, t) : e2, t);
  ve.compile = (e2, t = {}) => (typeof e2 == "string" && (e2 = ve.parse(e2, t)), _h(e2, t));
  ve.expand = (e2, t = {}) => {
    typeof e2 == "string" && (e2 = ve.parse(e2, t));
    let n = Rh(e2, t);
    return t.noempty === true && (n = n.filter(Boolean)), t.nodupes === true && (n = [...new Set(n)]), n;
  };
  ve.create = (e2, t = {}) => e2 === "" || e2.length < 3 ? [e2] : t.expand !== true ? ve.compile(e2, t) : ve.expand(e2, t);
  qa.exports = ve;
});
var Dt = F((i0, Ka) => {
  "use strict";
  var Oh = require("path"), Te = "\\\\/", Ba = `[^${Te}]`, Ph = 0, Oe = "\\.", Lh = "\\+", Ih = "\\?", wn = "\\/", Nh = "(?=.)", Ga = "[^/]", Rr = `(?:${wn}|$)`, Wa = `(?:^|${wn})`, Cr = `${Oe}{1,2}${Rr}`, Fh = `(?!${Oe})`, Mh = `(?!${Wa}${Cr})`, Dh = `(?!${Oe}{0,1}${Rr})`, jh = `(?!${Cr})`, Hh = `[^.${wn}]`, $h = `${Ga}*?`, Ya = { DOT_LITERAL: Oe, PLUS_LITERAL: Lh, QMARK_LITERAL: Ih, SLASH_LITERAL: wn, ONE_CHAR: Nh, QMARK: Ga, END_ANCHOR: Rr, DOTS_SLASH: Cr, NO_DOT: Fh, NO_DOTS: Mh, NO_DOT_SLASH: Dh, NO_DOTS_SLASH: jh, QMARK_NO_DOT: Hh, STAR: $h, START_ANCHOR: Wa }, qh = { ...Ya, SLASH_LITERAL: `[${Te}]`, QMARK: Ba, STAR: `${Ba}*?`, DOTS_SLASH: `${Oe}{1,2}(?:[${Te}]|$)`, NO_DOT: `(?!${Oe})`, NO_DOTS: `(?!(?:^|[${Te}])${Oe}{1,2}(?:[${Te}]|$))`, NO_DOT_SLASH: `(?!${Oe}{0,1}(?:[${Te}]|$))`, NO_DOTS_SLASH: `(?!${Oe}{1,2}(?:[${Te}]|$))`, QMARK_NO_DOT: `[^.${Te}]`, START_ANCHOR: `(?:^|[${Te}])`, END_ANCHOR: `(?:[${Te}]|$)` }, Uh = { __proto__: null, alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
  Ka.exports = { DEFAULT_MAX_EXTGLOB_RECURSION: Ph, MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: Uh, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { __proto__: null, "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: Oh.sep, extglobChars(e2) {
    return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${e2.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
  }, globChars(e2) {
    return e2 === true ? qh : Ya;
  } };
});
var jt = F((me) => {
  "use strict";
  var Bh = require("path"), Gh = process.platform === "win32", { REGEX_BACKSLASH: Wh, REGEX_REMOVE_BACKSLASH: Yh, REGEX_SPECIAL_CHARS: Kh, REGEX_SPECIAL_CHARS_GLOBAL: Vh } = Dt();
  me.isObject = (e2) => e2 !== null && typeof e2 == "object" && !Array.isArray(e2);
  me.hasRegexChars = (e2) => Kh.test(e2);
  me.isRegexChar = (e2) => e2.length === 1 && me.hasRegexChars(e2);
  me.escapeRegex = (e2) => e2.replace(Vh, "\\$1");
  me.toPosixSlashes = (e2) => e2.replace(Wh, "/");
  me.removeBackslashes = (e2) => e2.replace(Yh, (t) => t === "\\" ? "" : t);
  me.supportsLookbehinds = () => {
    let e2 = process.version.slice(1).split(".").map(Number);
    return e2.length === 3 && e2[0] >= 9 || e2[0] === 8 && e2[1] >= 10;
  };
  me.isWindows = (e2) => e2 && typeof e2.windows == "boolean" ? e2.windows : Gh === true || Bh.sep === "\\";
  me.escapeLast = (e2, t, n) => {
    let i = e2.lastIndexOf(t, n);
    return i === -1 ? e2 : e2[i - 1] === "\\" ? me.escapeLast(e2, t, i - 1) : `${e2.slice(0, i)}\\${e2.slice(i)}`;
  };
  me.removePrefix = (e2, t = {}) => {
    let n = e2;
    return n.startsWith("./") && (n = n.slice(2), t.prefix = "./"), n;
  };
  me.wrapOutput = (e2, t = {}, n = {}) => {
    let i = n.contains ? "" : "^", r = n.contains ? "" : "$", o = `${i}(?:${e2})${r}`;
    return t.negated === true && (o = `(?:^(?!${o}).*$)`), o;
  };
});
var tu = F((s0, eu) => {
  "use strict";
  var Va = jt(), { CHAR_ASTERISK: Or, CHAR_AT: Jh, CHAR_BACKWARD_SLASH: Ht, CHAR_COMMA: zh, CHAR_DOT: Pr, CHAR_EXCLAMATION_MARK: Lr, CHAR_FORWARD_SLASH: Za, CHAR_LEFT_CURLY_BRACE: Ir, CHAR_LEFT_PARENTHESES: Nr, CHAR_LEFT_SQUARE_BRACKET: Qh, CHAR_PLUS: Xh, CHAR_QUESTION_MARK: Ja, CHAR_RIGHT_CURLY_BRACE: Zh, CHAR_RIGHT_PARENTHESES: za, CHAR_RIGHT_SQUARE_BRACKET: ed } = Dt(), Qa = (e2) => e2 === Za || e2 === Ht, Xa = (e2) => {
    e2.isPrefix !== true && (e2.depth = e2.isGlobstar ? 1 / 0 : 1);
  }, td = (e2, t) => {
    let n = t || {}, i = e2.length - 1, r = n.parts === true || n.scanToEnd === true, o = [], s = [], a = [], u = e2, l = -1, c = 0, f = 0, p = false, d = false, h = false, x = false, A = false, L = false, P = false, b = false, T = false, C = false, O = 0, S, v, g = { value: "", depth: 0, isGlob: false }, k = () => l >= i, m = () => u.charCodeAt(l + 1), E = () => (S = v, u.charCodeAt(++l));
    for (; l < i; ) {
      v = E();
      let j;
      if (v === Ht) {
        P = g.backslashes = true, v = E(), v === Ir && (L = true);
        continue;
      }
      if (L === true || v === Ir) {
        for (O++; k() !== true && (v = E()); ) {
          if (v === Ht) {
            P = g.backslashes = true, E();
            continue;
          }
          if (v === Ir) {
            O++;
            continue;
          }
          if (L !== true && v === Pr && (v = E()) === Pr) {
            if (p = g.isBrace = true, h = g.isGlob = true, C = true, r === true) continue;
            break;
          }
          if (L !== true && v === zh) {
            if (p = g.isBrace = true, h = g.isGlob = true, C = true, r === true) continue;
            break;
          }
          if (v === Zh && (O--, O === 0)) {
            L = false, p = g.isBrace = true, C = true;
            break;
          }
        }
        if (r === true) continue;
        break;
      }
      if (v === Za) {
        if (o.push(l), s.push(g), g = { value: "", depth: 0, isGlob: false }, C === true) continue;
        if (S === Pr && l === c + 1) {
          c += 2;
          continue;
        }
        f = l + 1;
        continue;
      }
      if (n.noext !== true && (v === Xh || v === Jh || v === Or || v === Ja || v === Lr) === true && m() === Nr) {
        if (h = g.isGlob = true, x = g.isExtglob = true, C = true, v === Lr && l === c && (T = true), r === true) {
          for (; k() !== true && (v = E()); ) {
            if (v === Ht) {
              P = g.backslashes = true, v = E();
              continue;
            }
            if (v === za) {
              h = g.isGlob = true, C = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (v === Or) {
        if (S === Or && (A = g.isGlobstar = true), h = g.isGlob = true, C = true, r === true) continue;
        break;
      }
      if (v === Ja) {
        if (h = g.isGlob = true, C = true, r === true) continue;
        break;
      }
      if (v === Qh) {
        for (; k() !== true && (j = E()); ) {
          if (j === Ht) {
            P = g.backslashes = true, E();
            continue;
          }
          if (j === ed) {
            d = g.isBracket = true, h = g.isGlob = true, C = true;
            break;
          }
        }
        if (r === true) continue;
        break;
      }
      if (n.nonegate !== true && v === Lr && l === c) {
        b = g.negated = true, c++;
        continue;
      }
      if (n.noparen !== true && v === Nr) {
        if (h = g.isGlob = true, r === true) {
          for (; k() !== true && (v = E()); ) {
            if (v === Nr) {
              P = g.backslashes = true, v = E();
              continue;
            }
            if (v === za) {
              C = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (h === true) {
        if (C = true, r === true) continue;
        break;
      }
    }
    n.noext === true && (x = false, h = false);
    let _ = u, R = "", y = "";
    c > 0 && (R = u.slice(0, c), u = u.slice(c), f -= c), _ && h === true && f > 0 ? (_ = u.slice(0, f), y = u.slice(f)) : h === true ? (_ = "", y = u) : _ = u, _ && _ !== "" && _ !== "/" && _ !== u && Qa(_.charCodeAt(_.length - 1)) && (_ = _.slice(0, -1)), n.unescape === true && (y && (y = Va.removeBackslashes(y)), _ && P === true && (_ = Va.removeBackslashes(_)));
    let w = { prefix: R, input: e2, start: c, base: _, glob: y, isBrace: p, isBracket: d, isGlob: h, isExtglob: x, isGlobstar: A, negated: b, negatedExtglob: T };
    if (n.tokens === true && (w.maxDepth = 0, Qa(v) || s.push(g), w.tokens = s), n.parts === true || n.tokens === true) {
      let j;
      for (let M = 0; M < o.length; M++) {
        let D = j ? j + 1 : c, Y = o[M], U = e2.slice(D, Y);
        n.tokens && (M === 0 && c !== 0 ? (s[M].isPrefix = true, s[M].value = R) : s[M].value = U, Xa(s[M]), w.maxDepth += s[M].depth), (M !== 0 || U !== "") && a.push(U), j = Y;
      }
      if (j && j + 1 < e2.length) {
        let M = e2.slice(j + 1);
        a.push(M), n.tokens && (s[s.length - 1].value = M, Xa(s[s.length - 1]), w.maxDepth += s[s.length - 1].depth);
      }
      w.slashes = o, w.parts = a;
    }
    return w;
  };
  eu.exports = td;
});
var su = F((a0, ou) => {
  "use strict";
  var $t = Dt(), pe = jt(), { MAX_LENGTH: Sn, POSIX_REGEX_SOURCE: nd, REGEX_NON_SPECIAL_CHARS: rd, REGEX_SPECIAL_CHARS_BACKREF: id, REPLACEMENTS: nu } = $t, od = (e2, t) => {
    if (typeof t.expandRange == "function") return t.expandRange(...e2, t);
    e2.sort();
    let n = `[${e2.join("-")}]`;
    try {
      new RegExp(n);
    } catch {
      return e2.map((r) => pe.escapeRegex(r)).join("..");
    }
    return n;
  }, yt = (e2, t) => `Missing ${e2}: "${t}" - use "\\\\${t}" to match literal characters`, ru = (e2) => {
    let t = [], n = 0, i = 0, r = 0, o = "", s = false;
    for (let a of e2) {
      if (s === true) {
        o += a, s = false;
        continue;
      }
      if (a === "\\") {
        o += a, s = true;
        continue;
      }
      if (a === '"') {
        r = r === 1 ? 0 : 1, o += a;
        continue;
      }
      if (r === 0) {
        if (a === "[") n++;
        else if (a === "]" && n > 0) n--;
        else if (n === 0) {
          if (a === "(") i++;
          else if (a === ")" && i > 0) i--;
          else if (a === "|" && i === 0) {
            t.push(o), o = "";
            continue;
          }
        }
      }
      o += a;
    }
    return t.push(o), t;
  }, sd = (e2) => {
    let t = false;
    for (let n of e2) {
      if (t === true) {
        t = false;
        continue;
      }
      if (n === "\\") {
        t = true;
        continue;
      }
      if (/[?*+@!()[\]{}]/.test(n)) return false;
    }
    return true;
  }, iu = (e2) => {
    let t = e2.trim(), n = true;
    for (; n === true; ) n = false, /^@\([^\\()[\]{}|]+\)$/.test(t) && (t = t.slice(2, -1), n = true);
    if (sd(t)) return t.replace(/\\(.)/g, "$1");
  }, ad = (e2) => {
    let t = e2.map(iu).filter(Boolean);
    for (let n = 0; n < t.length; n++) for (let i = n + 1; i < t.length; i++) {
      let r = t[n], o = t[i], s = r[0];
      if (!(!s || r !== s.repeat(r.length) || o !== s.repeat(o.length)) && (r === o || r.startsWith(o) || o.startsWith(r))) return true;
    }
    return false;
  }, Fr = (e2, t = true) => {
    if (e2[0] !== "+" && e2[0] !== "*" || e2[1] !== "(") return;
    let n = 0, i = 0, r = 0, o = false;
    for (let s = 1; s < e2.length; s++) {
      let a = e2[s];
      if (o === true) {
        o = false;
        continue;
      }
      if (a === "\\") {
        o = true;
        continue;
      }
      if (a === '"') {
        r = r === 1 ? 0 : 1;
        continue;
      }
      if (r !== 1) {
        if (a === "[") {
          n++;
          continue;
        }
        if (a === "]" && n > 0) {
          n--;
          continue;
        }
        if (!(n > 0)) {
          if (a === "(") {
            i++;
            continue;
          }
          if (a === ")" && (i--, i === 0)) return t === true && s !== e2.length - 1 ? void 0 : { type: e2[0], body: e2.slice(2, s), end: s };
        }
      }
    }
  }, ud = (e2) => {
    let t = 0, n = [];
    for (; t < e2.length; ) {
      let r = Fr(e2.slice(t), false);
      if (!r || r.type !== "*") return;
      let o = ru(r.body).map((a) => a.trim());
      if (o.length !== 1) return;
      let s = iu(o[0]);
      if (!s || s.length !== 1) return;
      n.push(s), t += r.end + 1;
    }
    return n.length < 1 ? void 0 : `${n.length === 1 ? pe.escapeRegex(n[0]) : `[${n.map((r) => pe.escapeRegex(r)).join("")}]`}*`;
  }, cd = (e2) => {
    let t = 0, n = e2.trim(), i = Fr(n);
    for (; i; ) t++, n = i.body.trim(), i = Fr(n);
    return t;
  }, ld = (e2, t) => {
    if (t.maxExtglobRecursion === false) return { risky: false };
    let n = typeof t.maxExtglobRecursion == "number" ? t.maxExtglobRecursion : $t.DEFAULT_MAX_EXTGLOB_RECURSION, i = ru(e2).map((r) => r.trim());
    if (i.length > 1 && (i.some((r) => r === "") || i.some((r) => /^[*?]+$/.test(r)) || ad(i))) return { risky: true };
    for (let r of i) {
      let o = ud(r);
      if (o) return { risky: true, safeOutput: o };
      if (cd(r) > n) return { risky: true };
    }
    return { risky: false };
  }, Mr = (e2, t) => {
    if (typeof e2 != "string") throw new TypeError("Expected a string");
    e2 = nu[e2] || e2;
    let n = { ...t }, i = typeof n.maxLength == "number" ? Math.min(Sn, n.maxLength) : Sn, r = e2.length;
    if (r > i) throw new SyntaxError(`Input length: ${r}, exceeds maximum allowed length: ${i}`);
    let o = { type: "bos", value: "", output: n.prepend || "" }, s = [o], a = n.capture ? "" : "?:", u = pe.isWindows(t), l = $t.globChars(u), c = $t.extglobChars(l), { DOT_LITERAL: f, PLUS_LITERAL: p, SLASH_LITERAL: d, ONE_CHAR: h, DOTS_SLASH: x, NO_DOT: A, NO_DOT_SLASH: L, NO_DOTS_SLASH: P, QMARK: b, QMARK_NO_DOT: T, STAR: C, START_ANCHOR: O } = l, S = (N) => `(${a}(?:(?!${O}${N.dot ? x : f}).)*?)`, v = n.dot ? "" : A, g = n.dot ? b : T, k = n.bash === true ? S(n) : C;
    n.capture && (k = `(${k})`), typeof n.noext == "boolean" && (n.noextglob = n.noext);
    let m = { input: e2, index: -1, start: 0, dot: n.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: s };
    e2 = pe.removePrefix(e2, m), r = e2.length;
    let E = [], _ = [], R = [], y = o, w, j = () => m.index === r - 1, M = m.peek = (N = 1) => e2[m.index + N], D = m.advance = () => e2[++m.index] || "", Y = () => e2.slice(m.index + 1), U = (N = "", Q = 0) => {
      m.consumed += N, m.index += Q;
    }, V = (N) => {
      m.output += N.output != null ? N.output : N.value, U(N.value);
    }, se = () => {
      let N = 1;
      for (; M() === "!" && (M(2) !== "(" || M(3) === "?"); ) D(), m.start++, N++;
      return N % 2 === 0 ? false : (m.negated = true, m.start++, true);
    }, Ie = (N) => {
      m[N]++, R.push(N);
    }, de = (N) => {
      m[N]--, R.pop();
    }, G = (N) => {
      if (y.type === "globstar") {
        let Q = m.braces > 0 && (N.type === "comma" || N.type === "brace"), I = N.extglob === true || E.length && (N.type === "pipe" || N.type === "paren");
        N.type !== "slash" && N.type !== "paren" && !Q && !I && (m.output = m.output.slice(0, -y.output.length), y.type = "star", y.value = "*", y.output = k, m.output += y.output);
      }
      if (E.length && N.type !== "paren" && (E[E.length - 1].inner += N.value), (N.value || N.output) && V(N), y && y.type === "text" && N.type === "text") {
        y.value += N.value, y.output = (y.output || "") + N.value;
        return;
      }
      N.prev = y, s.push(N), y = N;
    }, Re = (N, Q) => {
      let I = { ...c[Q], conditions: 1, inner: "" };
      I.prev = y, I.parens = m.parens, I.output = m.output, I.startIndex = m.index, I.tokensIndex = s.length;
      let W = (n.capture ? "(" : "") + I.open;
      Ie("parens"), G({ type: N, value: Q, output: m.output ? "" : h }), G({ type: "paren", extglob: true, value: D(), output: W }), E.push(I);
    }, nt = (N) => {
      let Q = e2.slice(N.startIndex, m.index + 1), I = e2.slice(N.startIndex + 2, m.index), W = ld(I, n);
      if ((N.type === "plus" || N.type === "star") && W.risky) {
        let X = W.safeOutput ? (N.output ? "" : h) + (n.capture ? `(${W.safeOutput})` : W.safeOutput) : void 0, Ae = s[N.tokensIndex];
        Ae.type = "text", Ae.value = Q, Ae.output = X || pe.escapeRegex(Q);
        for (let ke = N.tokensIndex + 1; ke < s.length; ke++) s[ke].value = "", s[ke].output = "", delete s[ke].suffix;
        m.output = N.output + Ae.output, m.backtrack = true, G({ type: "paren", extglob: true, value: w, output: "" }), de("parens");
        return;
      }
      let J = N.close + (n.capture ? ")" : ""), ae;
      if (N.type === "negate") {
        let X = k;
        if (N.inner && N.inner.length > 1 && N.inner.includes("/") && (X = S(n)), (X !== k || j() || /^\)+$/.test(Y())) && (J = N.close = `)$))${X}`), N.inner.includes("*") && (ae = Y()) && /^\.[^\\/.]+$/.test(ae)) {
          let Ae = Mr(ae, { ...t, fastpaths: false }).output;
          J = N.close = `)${Ae})${X})`;
        }
        N.prev.type === "bos" && (m.negatedExtglob = true);
      }
      G({ type: "paren", extglob: true, value: w, output: J }), de("parens");
    };
    if (n.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(e2)) {
      let N = false, Q = e2.replace(id, (I, W, J, ae, X, Ae) => ae === "\\" ? (N = true, I) : ae === "?" ? W ? W + ae + (X ? b.repeat(X.length) : "") : Ae === 0 ? g + (X ? b.repeat(X.length) : "") : b.repeat(J.length) : ae === "." ? f.repeat(J.length) : ae === "*" ? W ? W + ae + (X ? k : "") : k : W ? I : `\\${I}`);
      return N === true && (n.unescape === true ? Q = Q.replace(/\\/g, "") : Q = Q.replace(/\\+/g, (I) => I.length % 2 === 0 ? "\\\\" : I ? "\\" : "")), Q === e2 && n.contains === true ? (m.output = e2, m) : (m.output = pe.wrapOutput(Q, m, t), m);
    }
    for (; !j(); ) {
      if (w = D(), w === "\0") continue;
      if (w === "\\") {
        let I = M();
        if (I === "/" && n.bash !== true || I === "." || I === ";") continue;
        if (!I) {
          w += "\\", G({ type: "text", value: w });
          continue;
        }
        let W = /^\\+/.exec(Y()), J = 0;
        if (W && W[0].length > 2 && (J = W[0].length, m.index += J, J % 2 !== 0 && (w += "\\")), n.unescape === true ? w = D() : w += D(), m.brackets === 0) {
          G({ type: "text", value: w });
          continue;
        }
      }
      if (m.brackets > 0 && (w !== "]" || y.value === "[" || y.value === "[^")) {
        if (n.posix !== false && w === ":") {
          let I = y.value.slice(1);
          if (I.includes("[") && (y.posix = true, I.includes(":"))) {
            let W = y.value.lastIndexOf("["), J = y.value.slice(0, W), ae = y.value.slice(W + 2), X = nd[ae];
            if (X) {
              y.value = J + X, m.backtrack = true, D(), !o.output && s.indexOf(y) === 1 && (o.output = h);
              continue;
            }
          }
        }
        (w === "[" && M() !== ":" || w === "-" && M() === "]") && (w = `\\${w}`), w === "]" && (y.value === "[" || y.value === "[^") && (w = `\\${w}`), n.posix === true && w === "!" && y.value === "[" && (w = "^"), y.value += w, V({ value: w });
        continue;
      }
      if (m.quotes === 1 && w !== '"') {
        w = pe.escapeRegex(w), y.value += w, V({ value: w });
        continue;
      }
      if (w === '"') {
        m.quotes = m.quotes === 1 ? 0 : 1, n.keepQuotes === true && G({ type: "text", value: w });
        continue;
      }
      if (w === "(") {
        Ie("parens"), G({ type: "paren", value: w });
        continue;
      }
      if (w === ")") {
        if (m.parens === 0 && n.strictBrackets === true) throw new SyntaxError(yt("opening", "("));
        let I = E[E.length - 1];
        if (I && m.parens === I.parens + 1) {
          nt(E.pop());
          continue;
        }
        G({ type: "paren", value: w, output: m.parens ? ")" : "\\)" }), de("parens");
        continue;
      }
      if (w === "[") {
        if (n.nobracket === true || !Y().includes("]")) {
          if (n.nobracket !== true && n.strictBrackets === true) throw new SyntaxError(yt("closing", "]"));
          w = `\\${w}`;
        } else Ie("brackets");
        G({ type: "bracket", value: w });
        continue;
      }
      if (w === "]") {
        if (n.nobracket === true || y && y.type === "bracket" && y.value.length === 1) {
          G({ type: "text", value: w, output: `\\${w}` });
          continue;
        }
        if (m.brackets === 0) {
          if (n.strictBrackets === true) throw new SyntaxError(yt("opening", "["));
          G({ type: "text", value: w, output: `\\${w}` });
          continue;
        }
        de("brackets");
        let I = y.value.slice(1);
        if (y.posix !== true && I[0] === "^" && !I.includes("/") && (w = `/${w}`), y.value += w, V({ value: w }), n.literalBrackets === false || pe.hasRegexChars(I)) continue;
        let W = pe.escapeRegex(y.value);
        if (m.output = m.output.slice(0, -y.value.length), n.literalBrackets === true) {
          m.output += W, y.value = W;
          continue;
        }
        y.value = `(${a}${W}|${y.value})`, m.output += y.value;
        continue;
      }
      if (w === "{" && n.nobrace !== true) {
        Ie("braces");
        let I = { type: "brace", value: w, output: "(", outputIndex: m.output.length, tokensIndex: m.tokens.length };
        _.push(I), G(I);
        continue;
      }
      if (w === "}") {
        let I = _[_.length - 1];
        if (n.nobrace === true || !I) {
          G({ type: "text", value: w, output: w });
          continue;
        }
        let W = ")";
        if (I.dots === true) {
          let J = s.slice(), ae = [];
          for (let X = J.length - 1; X >= 0 && (s.pop(), J[X].type !== "brace"); X--) J[X].type !== "dots" && ae.unshift(J[X].value);
          W = od(ae, n), m.backtrack = true;
        }
        if (I.comma !== true && I.dots !== true) {
          let J = m.output.slice(0, I.outputIndex), ae = m.tokens.slice(I.tokensIndex);
          I.value = I.output = "\\{", w = W = "\\}", m.output = J;
          for (let X of ae) m.output += X.output || X.value;
        }
        G({ type: "brace", value: w, output: W }), de("braces"), _.pop();
        continue;
      }
      if (w === "|") {
        E.length > 0 && E[E.length - 1].conditions++, G({ type: "text", value: w });
        continue;
      }
      if (w === ",") {
        let I = w, W = _[_.length - 1];
        W && R[R.length - 1] === "braces" && (W.comma = true, I = "|"), G({ type: "comma", value: w, output: I });
        continue;
      }
      if (w === "/") {
        if (y.type === "dot" && m.index === m.start + 1) {
          m.start = m.index + 1, m.consumed = "", m.output = "", s.pop(), y = o;
          continue;
        }
        G({ type: "slash", value: w, output: d });
        continue;
      }
      if (w === ".") {
        if (m.braces > 0 && y.type === "dot") {
          y.value === "." && (y.output = f);
          let I = _[_.length - 1];
          y.type = "dots", y.output += w, y.value += w, I.dots = true;
          continue;
        }
        if (m.braces + m.parens === 0 && y.type !== "bos" && y.type !== "slash") {
          G({ type: "text", value: w, output: f });
          continue;
        }
        G({ type: "dot", value: w, output: f });
        continue;
      }
      if (w === "?") {
        if (!(y && y.value === "(") && n.noextglob !== true && M() === "(" && M(2) !== "?") {
          Re("qmark", w);
          continue;
        }
        if (y && y.type === "paren") {
          let W = M(), J = w;
          if (W === "<" && !pe.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
          (y.value === "(" && !/[!=<:]/.test(W) || W === "<" && !/<([!=]|\w+>)/.test(Y())) && (J = `\\${w}`), G({ type: "text", value: w, output: J });
          continue;
        }
        if (n.dot !== true && (y.type === "slash" || y.type === "bos")) {
          G({ type: "qmark", value: w, output: T });
          continue;
        }
        G({ type: "qmark", value: w, output: b });
        continue;
      }
      if (w === "!") {
        if (n.noextglob !== true && M() === "(" && (M(2) !== "?" || !/[!=<:]/.test(M(3)))) {
          Re("negate", w);
          continue;
        }
        if (n.nonegate !== true && m.index === 0) {
          se();
          continue;
        }
      }
      if (w === "+") {
        if (n.noextglob !== true && M() === "(" && M(2) !== "?") {
          Re("plus", w);
          continue;
        }
        if (y && y.value === "(" || n.regex === false) {
          G({ type: "plus", value: w, output: p });
          continue;
        }
        if (y && (y.type === "bracket" || y.type === "paren" || y.type === "brace") || m.parens > 0) {
          G({ type: "plus", value: w });
          continue;
        }
        G({ type: "plus", value: p });
        continue;
      }
      if (w === "@") {
        if (n.noextglob !== true && M() === "(" && M(2) !== "?") {
          G({ type: "at", extglob: true, value: w, output: "" });
          continue;
        }
        G({ type: "text", value: w });
        continue;
      }
      if (w !== "*") {
        (w === "$" || w === "^") && (w = `\\${w}`);
        let I = rd.exec(Y());
        I && (w += I[0], m.index += I[0].length), G({ type: "text", value: w });
        continue;
      }
      if (y && (y.type === "globstar" || y.star === true)) {
        y.type = "star", y.star = true, y.value += w, y.output = k, m.backtrack = true, m.globstar = true, U(w);
        continue;
      }
      let N = Y();
      if (n.noextglob !== true && /^\([^?]/.test(N)) {
        Re("star", w);
        continue;
      }
      if (y.type === "star") {
        if (n.noglobstar === true) {
          U(w);
          continue;
        }
        let I = y.prev, W = I.prev, J = I.type === "slash" || I.type === "bos", ae = W && (W.type === "star" || W.type === "globstar");
        if (n.bash === true && (!J || N[0] && N[0] !== "/")) {
          G({ type: "star", value: w, output: "" });
          continue;
        }
        let X = m.braces > 0 && (I.type === "comma" || I.type === "brace"), Ae = E.length && (I.type === "pipe" || I.type === "paren");
        if (!J && I.type !== "paren" && !X && !Ae) {
          G({ type: "star", value: w, output: "" });
          continue;
        }
        for (; N.slice(0, 3) === "/**"; ) {
          let ke = e2[m.index + 4];
          if (ke && ke !== "/") break;
          N = N.slice(3), U("/**", 3);
        }
        if (I.type === "bos" && j()) {
          y.type = "globstar", y.value += w, y.output = S(n), m.output = y.output, m.globstar = true, U(w);
          continue;
        }
        if (I.type === "slash" && I.prev.type !== "bos" && !ae && j()) {
          m.output = m.output.slice(0, -(I.output + y.output).length), I.output = `(?:${I.output}`, y.type = "globstar", y.output = S(n) + (n.strictSlashes ? ")" : "|$)"), y.value += w, m.globstar = true, m.output += I.output + y.output, U(w);
          continue;
        }
        if (I.type === "slash" && I.prev.type !== "bos" && N[0] === "/") {
          let ke = N[1] !== void 0 ? "|$" : "";
          m.output = m.output.slice(0, -(I.output + y.output).length), I.output = `(?:${I.output}`, y.type = "globstar", y.output = `${S(n)}${d}|${d}${ke})`, y.value += w, m.output += I.output + y.output, m.globstar = true, U(w + D()), G({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (I.type === "bos" && N[0] === "/") {
          y.type = "globstar", y.value += w, y.output = `(?:^|${d}|${S(n)}${d})`, m.output = y.output, m.globstar = true, U(w + D()), G({ type: "slash", value: "/", output: "" });
          continue;
        }
        m.output = m.output.slice(0, -y.output.length), y.type = "globstar", y.output = S(n), y.value += w, m.output += y.output, m.globstar = true, U(w);
        continue;
      }
      let Q = { type: "star", value: w, output: k };
      if (n.bash === true) {
        Q.output = ".*?", (y.type === "bos" || y.type === "slash") && (Q.output = v + Q.output), G(Q);
        continue;
      }
      if (y && (y.type === "bracket" || y.type === "paren") && n.regex === true) {
        Q.output = w, G(Q);
        continue;
      }
      (m.index === m.start || y.type === "slash" || y.type === "dot") && (y.type === "dot" ? (m.output += L, y.output += L) : n.dot === true ? (m.output += P, y.output += P) : (m.output += v, y.output += v), M() !== "*" && (m.output += h, y.output += h)), G(Q);
    }
    for (; m.brackets > 0; ) {
      if (n.strictBrackets === true) throw new SyntaxError(yt("closing", "]"));
      m.output = pe.escapeLast(m.output, "["), de("brackets");
    }
    for (; m.parens > 0; ) {
      if (n.strictBrackets === true) throw new SyntaxError(yt("closing", ")"));
      m.output = pe.escapeLast(m.output, "("), de("parens");
    }
    for (; m.braces > 0; ) {
      if (n.strictBrackets === true) throw new SyntaxError(yt("closing", "}"));
      m.output = pe.escapeLast(m.output, "{"), de("braces");
    }
    if (n.strictSlashes !== true && (y.type === "star" || y.type === "bracket") && G({ type: "maybe_slash", value: "", output: `${d}?` }), m.backtrack === true) {
      m.output = "";
      for (let N of m.tokens) m.output += N.output != null ? N.output : N.value, N.suffix && (m.output += N.suffix);
    }
    return m;
  };
  Mr.fastpaths = (e2, t) => {
    let n = { ...t }, i = typeof n.maxLength == "number" ? Math.min(Sn, n.maxLength) : Sn, r = e2.length;
    if (r > i) throw new SyntaxError(`Input length: ${r}, exceeds maximum allowed length: ${i}`);
    e2 = nu[e2] || e2;
    let o = pe.isWindows(t), { DOT_LITERAL: s, SLASH_LITERAL: a, ONE_CHAR: u, DOTS_SLASH: l, NO_DOT: c, NO_DOTS: f, NO_DOTS_SLASH: p, STAR: d, START_ANCHOR: h } = $t.globChars(o), x = n.dot ? f : c, A = n.dot ? p : c, L = n.capture ? "" : "?:", P = { negated: false, prefix: "" }, b = n.bash === true ? ".*?" : d;
    n.capture && (b = `(${b})`);
    let T = (v) => v.noglobstar === true ? b : `(${L}(?:(?!${h}${v.dot ? l : s}).)*?)`, C = (v) => {
      switch (v) {
        case "*":
          return `${x}${u}${b}`;
        case ".*":
          return `${s}${u}${b}`;
        case "*.*":
          return `${x}${b}${s}${u}${b}`;
        case "*/*":
          return `${x}${b}${a}${u}${A}${b}`;
        case "**":
          return x + T(n);
        case "**/*":
          return `(?:${x}${T(n)}${a})?${A}${u}${b}`;
        case "**/*.*":
          return `(?:${x}${T(n)}${a})?${A}${b}${s}${u}${b}`;
        case "**/.*":
          return `(?:${x}${T(n)}${a})?${s}${u}${b}`;
        default: {
          let g = /^(.*?)\.(\w+)$/.exec(v);
          if (!g) return;
          let k = C(g[1]);
          return k ? k + s + g[2] : void 0;
        }
      }
    }, O = pe.removePrefix(e2, P), S = C(O);
    return S && n.strictSlashes !== true && (S += `${a}?`), S;
  };
  ou.exports = Mr;
});
var uu = F((u0, au) => {
  "use strict";
  var fd = require("path"), pd = tu(), Dr = su(), jr = jt(), hd = Dt(), dd = (e2) => e2 && typeof e2 == "object" && !Array.isArray(e2), re = (e2, t, n = false) => {
    if (Array.isArray(e2)) {
      let c = e2.map((p) => re(p, t, n));
      return (p) => {
        for (let d of c) {
          let h = d(p);
          if (h) return h;
        }
        return false;
      };
    }
    let i = dd(e2) && e2.tokens && e2.input;
    if (e2 === "" || typeof e2 != "string" && !i) throw new TypeError("Expected pattern to be a non-empty string");
    let r = t || {}, o = jr.isWindows(t), s = i ? re.compileRe(e2, t) : re.makeRe(e2, t, false, true), a = s.state;
    delete s.state;
    let u = () => false;
    if (r.ignore) {
      let c = { ...t, ignore: null, onMatch: null, onResult: null };
      u = re(r.ignore, c, n);
    }
    let l = (c, f = false) => {
      let { isMatch: p, match: d, output: h } = re.test(c, s, t, { glob: e2, posix: o }), x = { glob: e2, state: a, regex: s, posix: o, input: c, output: h, match: d, isMatch: p };
      return typeof r.onResult == "function" && r.onResult(x), p === false ? (x.isMatch = false, f ? x : false) : u(c) ? (typeof r.onIgnore == "function" && r.onIgnore(x), x.isMatch = false, f ? x : false) : (typeof r.onMatch == "function" && r.onMatch(x), f ? x : true);
    };
    return n && (l.state = a), l;
  };
  re.test = (e2, t, n, { glob: i, posix: r } = {}) => {
    if (typeof e2 != "string") throw new TypeError("Expected input to be a string");
    if (e2 === "") return { isMatch: false, output: "" };
    let o = n || {}, s = o.format || (r ? jr.toPosixSlashes : null), a = e2 === i, u = a && s ? s(e2) : e2;
    return a === false && (u = s ? s(e2) : e2, a = u === i), (a === false || o.capture === true) && (o.matchBase === true || o.basename === true ? a = re.matchBase(e2, t, n, r) : a = t.exec(u)), { isMatch: !!a, match: a, output: u };
  };
  re.matchBase = (e2, t, n, i = jr.isWindows(n)) => (t instanceof RegExp ? t : re.makeRe(t, n)).test(fd.basename(e2));
  re.isMatch = (e2, t, n) => re(t, n)(e2);
  re.parse = (e2, t) => Array.isArray(e2) ? e2.map((n) => re.parse(n, t)) : Dr(e2, { ...t, fastpaths: false });
  re.scan = (e2, t) => pd(e2, t);
  re.compileRe = (e2, t, n = false, i = false) => {
    if (n === true) return e2.output;
    let r = t || {}, o = r.contains ? "" : "^", s = r.contains ? "" : "$", a = `${o}(?:${e2.output})${s}`;
    e2 && e2.negated === true && (a = `^(?!${a}).*$`);
    let u = re.toRegex(a, t);
    return i === true && (u.state = e2), u;
  };
  re.makeRe = (e2, t = {}, n = false, i = false) => {
    if (!e2 || typeof e2 != "string") throw new TypeError("Expected a non-empty string");
    let r = { negated: false, fastpaths: true };
    return t.fastpaths !== false && (e2[0] === "." || e2[0] === "*") && (r.output = Dr.fastpaths(e2, t)), r.output || (r = Dr(e2, t)), re.compileRe(r, t, n, i);
  };
  re.toRegex = (e2, t) => {
    try {
      let n = t || {};
      return new RegExp(e2, n.flags || (n.nocase ? "i" : ""));
    } catch (n) {
      if (t && t.debug === true) throw n;
      return /$^/;
    }
  };
  re.constants = hd;
  au.exports = re;
});
var lu = F((c0, cu) => {
  "use strict";
  cu.exports = uu();
});
var mu = F((l0, gu) => {
  "use strict";
  var pu = require("util"), hu = Ua(), _e = lu(), Hr = jt(), fu = (e2) => e2 === "" || e2 === "./", du = (e2) => {
    let t = e2.indexOf("{");
    return t > -1 && e2.indexOf("}", t) > -1;
  }, ee = (e2, t, n) => {
    t = [].concat(t), e2 = [].concat(e2);
    let i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = 0, a = (c) => {
      o.add(c.output), n && n.onResult && n.onResult(c);
    };
    for (let c = 0; c < t.length; c++) {
      let f = _e(String(t[c]), { ...n, onResult: a }, true), p = f.state.negated || f.state.negatedExtglob;
      p && s++;
      for (let d of e2) {
        let h = f(d, true);
        (p ? !h.isMatch : h.isMatch) && (p ? i.add(h.output) : (i.delete(h.output), r.add(h.output)));
      }
    }
    let l = (s === t.length ? [...o] : [...r]).filter((c) => !i.has(c));
    if (n && l.length === 0) {
      if (n.failglob === true) throw new Error(`No matches found for "${t.join(", ")}"`);
      if (n.nonull === true || n.nullglob === true) return n.unescape ? t.map((c) => c.replace(/\\/g, "")) : t;
    }
    return l;
  };
  ee.match = ee;
  ee.matcher = (e2, t) => _e(e2, t);
  ee.isMatch = (e2, t, n) => _e(t, n)(e2);
  ee.any = ee.isMatch;
  ee.not = (e2, t, n = {}) => {
    t = [].concat(t).map(String);
    let i = /* @__PURE__ */ new Set(), r = [], o = (a) => {
      n.onResult && n.onResult(a), r.push(a.output);
    }, s = new Set(ee(e2, t, { ...n, onResult: o }));
    for (let a of r) s.has(a) || i.add(a);
    return [...i];
  };
  ee.contains = (e2, t, n) => {
    if (typeof e2 != "string") throw new TypeError(`Expected a string: "${pu.inspect(e2)}"`);
    if (Array.isArray(t)) return t.some((i) => ee.contains(e2, i, n));
    if (typeof t == "string") {
      if (fu(e2) || fu(t)) return false;
      if (e2.includes(t) || e2.startsWith("./") && e2.slice(2).includes(t)) return true;
    }
    return ee.isMatch(e2, t, { ...n, contains: true });
  };
  ee.matchKeys = (e2, t, n) => {
    if (!Hr.isObject(e2)) throw new TypeError("Expected the first argument to be an object");
    let i = ee(Object.keys(e2), t, n), r = {};
    for (let o of i) r[o] = e2[o];
    return r;
  };
  ee.some = (e2, t, n) => {
    let i = [].concat(e2);
    for (let r of [].concat(t)) {
      let o = _e(String(r), n);
      if (i.some((s) => o(s))) return true;
    }
    return false;
  };
  ee.every = (e2, t, n) => {
    let i = [].concat(e2);
    for (let r of [].concat(t)) {
      let o = _e(String(r), n);
      if (!i.every((s) => o(s))) return false;
    }
    return true;
  };
  ee.all = (e2, t, n) => {
    if (typeof e2 != "string") throw new TypeError(`Expected a string: "${pu.inspect(e2)}"`);
    return [].concat(t).every((i) => _e(i, n)(e2));
  };
  ee.capture = (e2, t, n) => {
    let i = Hr.isWindows(n), o = _e.makeRe(String(e2), { ...n, capture: true }).exec(i ? Hr.toPosixSlashes(t) : t);
    if (o) return o.slice(1).map((s) => s === void 0 ? "" : s);
  };
  ee.makeRe = (...e2) => _e.makeRe(...e2);
  ee.scan = (...e2) => _e.scan(...e2);
  ee.parse = (e2, t) => {
    let n = [];
    for (let i of [].concat(e2 || [])) for (let r of hu(String(i), t)) n.push(_e.parse(r, t));
    return n;
  };
  ee.braces = (e2, t) => {
    if (typeof e2 != "string") throw new TypeError("Expected a string");
    return t && t.nobrace === true || !du(e2) ? [e2] : hu(e2, t);
  };
  ee.braceExpand = (e2, t) => {
    if (typeof e2 != "string") throw new TypeError("Expected a string");
    return ee.braces(e2, { ...t, expand: true });
  };
  ee.hasBraces = du;
  gu.exports = ee;
});
var vu = F((f0, xu) => {
  "use strict";
  var yu = require("fs"), gd = mu(), An = require("path");
  xu.exports = md;
  function md(e2) {
    e2 || (e2 = process.cwd());
    let t = null, n = An.normalize(e2);
    do {
      let i = xd(n), r = yd(i);
      if (r) {
        let o = An.relative(n, e2);
        return o === "" || gd([o], r).length > 0 ? n : null;
      }
      t = n, n = An.dirname(n);
    } while (n !== t);
    return null;
  }
  function yd(e2) {
    let t = (e2 || {}).workspaces;
    return t && t.packages || (Array.isArray(t) ? t : null);
  }
  function xd(e2) {
    let t = An.join(e2, "package.json");
    return yu.existsSync(t) ? JSON.parse(yu.readFileSync(t, "utf8")) : null;
  }
});
var Bu = F((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: true });
  St.sync = St.isexe = void 0;
  var Dd = require("fs"), jd = require("fs/promises"), Hd = async (e2, t = {}) => {
    let { ignoreErrors: n = false } = t;
    try {
      return Uu(await (0, jd.stat)(e2), t);
    } catch (i) {
      let r = i;
      if (n || r.code === "EACCES") return false;
      throw r;
    }
  };
  St.isexe = Hd;
  var $d = (e2, t = {}) => {
    let { ignoreErrors: n = false } = t;
    try {
      return Uu((0, Dd.statSync)(e2), t);
    } catch (i) {
      let r = i;
      if (n || r.code === "EACCES") return false;
      throw r;
    }
  };
  St.sync = $d;
  var Uu = (e2, t) => e2.isFile() && qd(e2, t), qd = (e2, t) => {
    let n = t.uid ?? process.getuid?.(), i = t.groups ?? process.getgroups?.() ?? [], r = t.gid ?? process.getgid?.() ?? i[0];
    if (n === void 0 || r === void 0) throw new Error("cannot get uid or gid");
    let o = /* @__PURE__ */ new Set([r, ...i]), s = e2.mode, a = e2.uid, u = e2.gid, l = parseInt("100", 8), c = parseInt("010", 8), f = parseInt("001", 8), p = l | c;
    return !!(s & f || s & c && o.has(u) || s & l && a === n || s & p && n === 0);
  };
});
var Wu = F((At) => {
  "use strict";
  Object.defineProperty(At, "__esModule", { value: true });
  At.sync = At.isexe = void 0;
  var Ud = require("fs"), Bd = require("fs/promises"), Gd = async (e2, t = {}) => {
    let { ignoreErrors: n = false } = t;
    try {
      return Gu(await (0, Bd.stat)(e2), e2, t);
    } catch (i) {
      let r = i;
      if (n || r.code === "EACCES") return false;
      throw r;
    }
  };
  At.isexe = Gd;
  var Wd = (e2, t = {}) => {
    let { ignoreErrors: n = false } = t;
    try {
      return Gu((0, Ud.statSync)(e2), e2, t);
    } catch (i) {
      let r = i;
      if (n || r.code === "EACCES") return false;
      throw r;
    }
  };
  At.sync = Wd;
  var Yd = (e2, t) => {
    let { pathExt: n = process.env.PATHEXT || "" } = t, i = n.split(";");
    if (i.indexOf("") !== -1) return true;
    for (let r = 0; r < i.length; r++) {
      let o = i[r].toLowerCase(), s = e2.substring(e2.length - o.length).toLowerCase();
      if (o && s === o) return true;
    }
    return false;
  }, Gu = (e2, t, n) => e2.isFile() && Yd(t, n);
});
var Ku = F((Yu) => {
  "use strict";
  Object.defineProperty(Yu, "__esModule", { value: true });
});
var Zu = F((ce) => {
  "use strict";
  var Vu = ce && ce.__createBinding || (Object.create ? (function(e2, t, n, i) {
    i === void 0 && (i = n);
    var r = Object.getOwnPropertyDescriptor(t, n);
    (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e2, i, r);
  }) : (function(e2, t, n, i) {
    i === void 0 && (i = n), e2[i] = t[n];
  })), Kd = ce && ce.__setModuleDefault || (Object.create ? (function(e2, t) {
    Object.defineProperty(e2, "default", { enumerable: true, value: t });
  }) : function(e2, t) {
    e2.default = t;
  }), Ju = ce && ce.__importStar || function(e2) {
    if (e2 && e2.__esModule) return e2;
    var t = {};
    if (e2 != null) for (var n in e2) n !== "default" && Object.prototype.hasOwnProperty.call(e2, n) && Vu(t, e2, n);
    return Kd(t, e2), t;
  }, Vd = ce && ce.__exportStar || function(e2, t) {
    for (var n in e2) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Vu(t, e2, n);
  };
  Object.defineProperty(ce, "__esModule", { value: true });
  ce.sync = ce.isexe = ce.posix = ce.win32 = void 0;
  var zu = Ju(Bu());
  ce.posix = zu;
  var Qu = Ju(Wu());
  ce.win32 = Qu;
  Vd(Ku(), ce);
  var Jd = process.env._ISEXE_TEST_PLATFORM_ || process.platform, Xu = Jd === "win32" ? Qu : zu;
  ce.isexe = Xu.isexe;
  ce.sync = Xu.sync;
});
var cc = F((my, uc) => {
  var { isexe: zd, sync: Qd } = Zu(), { join: Xd, delimiter: Zd, sep: ec, posix: tc } = require("path"), nc = process.platform === "win32", rc = new RegExp(`[${tc.sep}${ec === tc.sep ? "" : ec}]`.replace(/(\\)/g, "\\$1")), eg = new RegExp(`^\\.${rc.source}`), ic = (e2) => Object.assign(new Error(`not found: ${e2}`), { code: "ENOENT" }), oc = (e2, { path: t = process.env.PATH, pathExt: n = process.env.PATHEXT, delimiter: i = Zd }) => {
    let r = e2.match(rc) ? [""] : [...nc ? [process.cwd()] : [], ...(t || "").split(i)];
    if (nc) {
      let o = n || [".EXE", ".CMD", ".BAT", ".COM"].join(i), s = o.split(i).flatMap((a) => [a, a.toLowerCase()]);
      return e2.includes(".") && s[0] !== "" && s.unshift(""), { pathEnv: r, pathExt: s, pathExtExe: o };
    }
    return { pathEnv: r, pathExt: [""] };
  }, sc = (e2, t) => {
    let n = /^".*"$/.test(e2) ? e2.slice(1, -1) : e2;
    return (!n && eg.test(t) ? t.slice(0, 2) : "") + Xd(n, t);
  }, ac = async (e2, t = {}) => {
    let { pathEnv: n, pathExt: i, pathExtExe: r } = oc(e2, t), o = [];
    for (let s of n) {
      let a = sc(s, e2);
      for (let u of i) {
        let l = a + u;
        if (await zd(l, { pathExt: r, ignoreErrors: true })) {
          if (!t.all) return l;
          o.push(l);
        }
      }
    }
    if (t.all && o.length) return o;
    if (t.nothrow) return null;
    throw ic(e2);
  }, tg = (e2, t = {}) => {
    let { pathEnv: n, pathExt: i, pathExtExe: r } = oc(e2, t), o = [];
    for (let s of n) {
      let a = sc(s, e2);
      for (let u of i) {
        let l = a + u;
        if (Qd(l, { pathExt: r, ignoreErrors: true })) {
          if (!t.all) return l;
          o.push(l);
        }
      }
    }
    if (t.all && o.length) return o;
    if (t.nothrow) return null;
    throw ic(e2);
  };
  uc.exports = ac;
  ac.sync = tg;
});
var cg = {};
yc(cg, { activate: () => ng, deactivate: () => ug });
module.exports = xc(cg);
var Fn = ye(Vr()), z = ye(require("vscode"));
function Et(e2, t = false) {
  let n = e2.length, i = 0, r = "", o = 0, s = 16, a = 0, u = 0, l = 0, c = 0, f = 0;
  function p(b, T) {
    let C = 0, O = 0;
    for (; C < b || !T; ) {
      let S = e2.charCodeAt(i);
      if (S >= 48 && S <= 57) O = O * 16 + S - 48;
      else if (S >= 65 && S <= 70) O = O * 16 + S - 65 + 10;
      else if (S >= 97 && S <= 102) O = O * 16 + S - 97 + 10;
      else break;
      i++, C++;
    }
    return C < b && (O = -1), O;
  }
  function d(b) {
    i = b, r = "", o = 0, s = 16, f = 0;
  }
  function h() {
    let b = i;
    if (e2.charCodeAt(i) === 48) i++;
    else for (i++; i < e2.length && rt(e2.charCodeAt(i)); ) i++;
    if (i < e2.length && e2.charCodeAt(i) === 46) if (i++, i < e2.length && rt(e2.charCodeAt(i))) for (i++; i < e2.length && rt(e2.charCodeAt(i)); ) i++;
    else return f = 3, e2.substring(b, i);
    let T = i;
    if (i < e2.length && (e2.charCodeAt(i) === 69 || e2.charCodeAt(i) === 101)) if (i++, (i < e2.length && e2.charCodeAt(i) === 43 || e2.charCodeAt(i) === 45) && i++, i < e2.length && rt(e2.charCodeAt(i))) {
      for (i++; i < e2.length && rt(e2.charCodeAt(i)); ) i++;
      T = i;
    } else f = 3;
    return e2.substring(b, T);
  }
  function x() {
    let b = "", T = i;
    for (; ; ) {
      if (i >= n) {
        b += e2.substring(T, i), f = 2;
        break;
      }
      let C = e2.charCodeAt(i);
      if (C === 34) {
        b += e2.substring(T, i), i++;
        break;
      }
      if (C === 92) {
        if (b += e2.substring(T, i), i++, i >= n) {
          f = 2;
          break;
        }
        switch (e2.charCodeAt(i++)) {
          case 34:
            b += '"';
            break;
          case 92:
            b += "\\";
            break;
          case 47:
            b += "/";
            break;
          case 98:
            b += "\b";
            break;
          case 102:
            b += "\f";
            break;
          case 110:
            b += `
`;
            break;
          case 114:
            b += "\r";
            break;
          case 116:
            b += "	";
            break;
          case 117:
            let S = p(4, true);
            S >= 0 ? b += String.fromCharCode(S) : f = 4;
            break;
          default:
            f = 5;
        }
        T = i;
        continue;
      }
      if (C >= 0 && C <= 31) if (kt(C)) {
        b += e2.substring(T, i), f = 2;
        break;
      } else f = 6;
      i++;
    }
    return b;
  }
  function A() {
    if (r = "", f = 0, o = i, u = a, c = l, i >= n) return o = n, s = 17;
    let b = e2.charCodeAt(i);
    if (Mn(b)) {
      do
        i++, r += String.fromCharCode(b), b = e2.charCodeAt(i);
      while (Mn(b));
      return s = 15;
    }
    if (kt(b)) return i++, r += String.fromCharCode(b), b === 13 && e2.charCodeAt(i) === 10 && (i++, r += `
`), a++, l = i, s = 14;
    switch (b) {
      case 123:
        return i++, s = 1;
      case 125:
        return i++, s = 2;
      case 91:
        return i++, s = 3;
      case 93:
        return i++, s = 4;
      case 58:
        return i++, s = 6;
      case 44:
        return i++, s = 5;
      case 34:
        return i++, r = x(), s = 10;
      case 47:
        let T = i - 1;
        if (e2.charCodeAt(i + 1) === 47) {
          for (i += 2; i < n && !kt(e2.charCodeAt(i)); ) i++;
          return r = e2.substring(T, i), s = 12;
        }
        if (e2.charCodeAt(i + 1) === 42) {
          i += 2;
          let C = n - 1, O = false;
          for (; i < C; ) {
            let S = e2.charCodeAt(i);
            if (S === 42 && e2.charCodeAt(i + 1) === 47) {
              i += 2, O = true;
              break;
            }
            i++, kt(S) && (S === 13 && e2.charCodeAt(i) === 10 && i++, a++, l = i);
          }
          return O || (i++, f = 1), r = e2.substring(T, i), s = 13;
        }
        return r += String.fromCharCode(b), i++, s = 16;
      case 45:
        if (r += String.fromCharCode(b), i++, i === n || !rt(e2.charCodeAt(i))) return s = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return r += h(), s = 11;
      default:
        for (; i < n && L(b); ) i++, b = e2.charCodeAt(i);
        if (o !== i) {
          switch (r = e2.substring(o, i), r) {
            case "true":
              return s = 8;
            case "false":
              return s = 9;
            case "null":
              return s = 7;
          }
          return s = 16;
        }
        return r += String.fromCharCode(b), i++, s = 16;
    }
  }
  function L(b) {
    if (Mn(b) || kt(b)) return false;
    switch (b) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function P() {
    let b;
    do
      b = A();
    while (b >= 12 && b <= 15);
    return b;
  }
  return { setPosition: d, getPosition: () => i, scan: t ? P : A, getToken: () => s, getTokenValue: () => r, getTokenOffset: () => o, getTokenLength: () => i - o, getTokenStartLine: () => u, getTokenStartCharacter: () => o - c, getTokenError: () => f };
}
function Mn(e2) {
  return e2 === 32 || e2 === 9;
}
function kt(e2) {
  return e2 === 10 || e2 === 13;
}
function rt(e2) {
  return e2 >= 48 && e2 <= 57;
}
var Jr;
(function(e2) {
  e2[e2.lineFeed = 10] = "lineFeed", e2[e2.carriageReturn = 13] = "carriageReturn", e2[e2.space = 32] = "space", e2[e2._0 = 48] = "_0", e2[e2._1 = 49] = "_1", e2[e2._2 = 50] = "_2", e2[e2._3 = 51] = "_3", e2[e2._4 = 52] = "_4", e2[e2._5 = 53] = "_5", e2[e2._6 = 54] = "_6", e2[e2._7 = 55] = "_7", e2[e2._8 = 56] = "_8", e2[e2._9 = 57] = "_9", e2[e2.a = 97] = "a", e2[e2.b = 98] = "b", e2[e2.c = 99] = "c", e2[e2.d = 100] = "d", e2[e2.e = 101] = "e", e2[e2.f = 102] = "f", e2[e2.g = 103] = "g", e2[e2.h = 104] = "h", e2[e2.i = 105] = "i", e2[e2.j = 106] = "j", e2[e2.k = 107] = "k", e2[e2.l = 108] = "l", e2[e2.m = 109] = "m", e2[e2.n = 110] = "n", e2[e2.o = 111] = "o", e2[e2.p = 112] = "p", e2[e2.q = 113] = "q", e2[e2.r = 114] = "r", e2[e2.s = 115] = "s", e2[e2.t = 116] = "t", e2[e2.u = 117] = "u", e2[e2.v = 118] = "v", e2[e2.w = 119] = "w", e2[e2.x = 120] = "x", e2[e2.y = 121] = "y", e2[e2.z = 122] = "z", e2[e2.A = 65] = "A", e2[e2.B = 66] = "B", e2[e2.C = 67] = "C", e2[e2.D = 68] = "D", e2[e2.E = 69] = "E", e2[e2.F = 70] = "F", e2[e2.G = 71] = "G", e2[e2.H = 72] = "H", e2[e2.I = 73] = "I", e2[e2.J = 74] = "J", e2[e2.K = 75] = "K", e2[e2.L = 76] = "L", e2[e2.M = 77] = "M", e2[e2.N = 78] = "N", e2[e2.O = 79] = "O", e2[e2.P = 80] = "P", e2[e2.Q = 81] = "Q", e2[e2.R = 82] = "R", e2[e2.S = 83] = "S", e2[e2.T = 84] = "T", e2[e2.U = 85] = "U", e2[e2.V = 86] = "V", e2[e2.W = 87] = "W", e2[e2.X = 88] = "X", e2[e2.Y = 89] = "Y", e2[e2.Z = 90] = "Z", e2[e2.asterisk = 42] = "asterisk", e2[e2.backslash = 92] = "backslash", e2[e2.closeBrace = 125] = "closeBrace", e2[e2.closeBracket = 93] = "closeBracket", e2[e2.colon = 58] = "colon", e2[e2.comma = 44] = "comma", e2[e2.dot = 46] = "dot", e2[e2.doubleQuote = 34] = "doubleQuote", e2[e2.minus = 45] = "minus", e2[e2.openBrace = 123] = "openBrace", e2[e2.openBracket = 91] = "openBracket", e2[e2.plus = 43] = "plus", e2[e2.slash = 47] = "slash", e2[e2.formFeed = 12] = "formFeed", e2[e2.tab = 9] = "tab";
})(Jr || (Jr = {}));
var bc = new Array(20).fill(0).map((e2, t) => " ".repeat(t)), it = 200, wc = { " ": { "\n": new Array(it).fill(0).map((e2, t) => `
` + " ".repeat(t)), "\r": new Array(it).fill(0).map((e2, t) => "\r" + " ".repeat(t)), "\r\n": new Array(it).fill(0).map((e2, t) => `\r
` + " ".repeat(t)) }, "	": { "\n": new Array(it).fill(0).map((e2, t) => `
` + "	".repeat(t)), "\r": new Array(it).fill(0).map((e2, t) => "\r" + "	".repeat(t)), "\r\n": new Array(it).fill(0).map((e2, t) => `\r
` + "	".repeat(t)) } };
var Dn;
(function(e2) {
  e2.DEFAULT = { allowTrailingComma: false };
})(Dn || (Dn = {}));
function zr(e2, t) {
  let n = [], i = new Object(), r, o = { value: {}, offset: 0, length: 0, type: "object", parent: void 0 }, s = false;
  function a(u, l, c, f) {
    o.value = u, o.offset = l, o.length = c, o.type = f, o.colonOffset = void 0, r = o;
  }
  try {
    jn(e2, { onObjectBegin: (u, l) => {
      if (t <= u) throw i;
      r = void 0, s = t > u, n.push("");
    }, onObjectProperty: (u, l, c) => {
      if (t < l || (a(u, l, c, "property"), n[n.length - 1] = u, t <= l + c)) throw i;
    }, onObjectEnd: (u, l) => {
      if (t <= u) throw i;
      r = void 0, n.pop();
    }, onArrayBegin: (u, l) => {
      if (t <= u) throw i;
      r = void 0, n.push(0);
    }, onArrayEnd: (u, l) => {
      if (t <= u) throw i;
      r = void 0, n.pop();
    }, onLiteralValue: (u, l, c) => {
      if (t < l || (a(u, l, c, Ac(u)), t <= l + c)) throw i;
    }, onSeparator: (u, l, c) => {
      if (t <= l) throw i;
      if (u === ":" && r && r.type === "property") r.colonOffset = l, s = false, r = void 0;
      else if (u === ",") {
        let f = n[n.length - 1];
        typeof f == "number" ? n[n.length - 1] = f + 1 : (s = true, n[n.length - 1] = ""), r = void 0;
      }
    } });
  } catch (u) {
    if (u !== i) throw u;
  }
  return { path: n, previousNode: r, isAtPropertyKey: s, matches: (u) => {
    let l = 0;
    for (let c = 0; l < u.length && c < n.length; c++) if (u[l] === n[c] || u[l] === "*") l++;
    else if (u[l] !== "**") return false;
    return l === u.length;
  } };
}
function jn(e2, t, n = Dn.DEFAULT) {
  let i = Et(e2, false), r = [], o = 0;
  function s(R) {
    return R ? () => o === 0 && R(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => true;
  }
  function a(R) {
    return R ? (y) => o === 0 && R(y, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => true;
  }
  function u(R) {
    return R ? (y) => o === 0 && R(y, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => r.slice()) : () => true;
  }
  function l(R) {
    return R ? () => {
      o > 0 ? o++ : R(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => r.slice()) === false && (o = 1);
    } : () => true;
  }
  function c(R) {
    return R ? () => {
      o > 0 && o--, o === 0 && R(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter());
    } : () => true;
  }
  let f = l(t.onObjectBegin), p = u(t.onObjectProperty), d = c(t.onObjectEnd), h = l(t.onArrayBegin), x = c(t.onArrayEnd), A = u(t.onLiteralValue), L = a(t.onSeparator), P = s(t.onComment), b = a(t.onError), T = n && n.disallowComments, C = n && n.allowTrailingComma;
  function O() {
    for (; ; ) {
      let R = i.scan();
      switch (i.getTokenError()) {
        case 4:
          S(14);
          break;
        case 5:
          S(15);
          break;
        case 3:
          S(13);
          break;
        case 1:
          T || S(11);
          break;
        case 2:
          S(12);
          break;
        case 6:
          S(16);
          break;
      }
      switch (R) {
        case 12:
        case 13:
          T ? S(10) : P();
          break;
        case 16:
          S(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return R;
      }
    }
  }
  function S(R, y = [], w = []) {
    if (b(R), y.length + w.length > 0) {
      let j = i.getToken();
      for (; j !== 17; ) {
        if (y.indexOf(j) !== -1) {
          O();
          break;
        } else if (w.indexOf(j) !== -1) break;
        j = O();
      }
    }
  }
  function v(R) {
    let y = i.getTokenValue();
    return R ? A(y) : (p(y), r.push(y)), O(), true;
  }
  function g() {
    switch (i.getToken()) {
      case 11:
        let R = i.getTokenValue(), y = Number(R);
        isNaN(y) && (S(2), y = 0), A(y);
        break;
      case 7:
        A(null);
        break;
      case 8:
        A(true);
        break;
      case 9:
        A(false);
        break;
      default:
        return false;
    }
    return O(), true;
  }
  function k() {
    return i.getToken() !== 10 ? (S(3, [], [2, 5]), false) : (v(false), i.getToken() === 6 ? (L(":"), O(), _() || S(4, [], [2, 5])) : S(5, [], [2, 5]), r.pop(), true);
  }
  function m() {
    f(), O();
    let R = false;
    for (; i.getToken() !== 2 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (R || S(4, [], []), L(","), O(), i.getToken() === 2 && C) break;
      } else R && S(6, [], []);
      k() || S(4, [], [2, 5]), R = true;
    }
    return d(), i.getToken() !== 2 ? S(7, [2], []) : O(), true;
  }
  function E() {
    h(), O();
    let R = true, y = false;
    for (; i.getToken() !== 4 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (y || S(4, [], []), L(","), O(), i.getToken() === 4 && C) break;
      } else y && S(6, [], []);
      R ? (r.push(0), R = false) : r[r.length - 1]++, _() || S(4, [], [4, 5]), y = true;
    }
    return x(), R || r.pop(), i.getToken() !== 4 ? S(8, [4], []) : O(), true;
  }
  function _() {
    switch (i.getToken()) {
      case 3:
        return E();
      case 1:
        return m();
      case 10:
        return v(true);
      default:
        return g();
    }
  }
  return O(), i.getToken() === 17 ? n.allowEmptyContent ? true : (S(4, [], []), false) : _() ? (i.getToken() !== 17 && S(9, [], []), true) : (S(4, [], []), false);
}
function Ac(e2) {
  switch (typeof e2) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e2) {
        if (Array.isArray(e2)) return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
var Xr = Et, Kt;
(function(e2) {
  e2[e2.None = 0] = "None", e2[e2.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e2[e2.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e2[e2.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e2[e2.InvalidUnicode = 4] = "InvalidUnicode", e2[e2.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e2[e2.InvalidCharacter = 6] = "InvalidCharacter";
})(Kt || (Kt = {}));
var He;
(function(e2) {
  e2[e2.OpenBraceToken = 1] = "OpenBraceToken", e2[e2.CloseBraceToken = 2] = "CloseBraceToken", e2[e2.OpenBracketToken = 3] = "OpenBracketToken", e2[e2.CloseBracketToken = 4] = "CloseBracketToken", e2[e2.CommaToken = 5] = "CommaToken", e2[e2.ColonToken = 6] = "ColonToken", e2[e2.NullKeyword = 7] = "NullKeyword", e2[e2.TrueKeyword = 8] = "TrueKeyword", e2[e2.FalseKeyword = 9] = "FalseKeyword", e2[e2.StringLiteral = 10] = "StringLiteral", e2[e2.NumericLiteral = 11] = "NumericLiteral", e2[e2.LineCommentTrivia = 12] = "LineCommentTrivia", e2[e2.BlockCommentTrivia = 13] = "BlockCommentTrivia", e2[e2.LineBreakTrivia = 14] = "LineBreakTrivia", e2[e2.Trivia = 15] = "Trivia", e2[e2.Unknown = 16] = "Unknown", e2[e2.EOF = 17] = "EOF";
})(He || (He = {}));
var Hn = zr;
var Zr = jn;
var Qr;
(function(e2) {
  e2[e2.InvalidSymbol = 1] = "InvalidSymbol", e2[e2.InvalidNumberFormat = 2] = "InvalidNumberFormat", e2[e2.PropertyNameExpected = 3] = "PropertyNameExpected", e2[e2.ValueExpected = 4] = "ValueExpected", e2[e2.ColonExpected = 5] = "ColonExpected", e2[e2.CommaExpected = 6] = "CommaExpected", e2[e2.CloseBraceExpected = 7] = "CloseBraceExpected", e2[e2.CloseBracketExpected = 8] = "CloseBracketExpected", e2[e2.EndOfFileExpected = 9] = "EndOfFileExpected", e2[e2.InvalidCommentToken = 10] = "InvalidCommentToken", e2[e2.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e2[e2.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e2[e2.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e2[e2.InvalidUnicode = 14] = "InvalidUnicode", e2[e2.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e2[e2.InvalidCharacter = 16] = "InvalidCharacter";
})(Qr || (Qr = {}));
var Z = require("vscode"), ei = "Visual Studio Code", Vt = class {
  constructor(t) {
    this.topRanked = ["twitter", "bootstrap", "angular-1.1.6", "angular-latest", "angulerjs", "d3", "myjquery", "jq", "abcdef1234567890", "jQuery", "jquery-1.11.1", "jquery", "sushi-vanilla-x-data", "font-awsome", "Font-Awesome", "font-awesome", "fontawesome", "html5-boilerplate", "impress.js", "homebrew", "backbone", "moment1", "momentjs", "moment", "linux", "animate.css", "animate-css", "reveal.js", "jquery-file-upload", "blueimp-file-upload", "threejs", "express", "chosen", "normalize-css", "normalize.css", "semantic", "semantic-ui", "Semantic-UI", "modernizr", "underscore", "underscore1", "material-design-icons", "ionic", "chartjs", "Chart.js", "nnnick-chartjs", "select2-ng", "select2-dist", "phantom", "skrollr", "scrollr", "less.js", "leancss", "parser-lib", "hui", "bootstrap-languages", "async", "gulp", "jquery-pjax", "coffeescript", "hammer.js", "ace", "leaflet", "jquery-mobile", "sweetalert", "typeahead.js", "soup", "typehead.js", "sails", "codeigniter2"];
    this.xhr = t;
  }
  getDocumentSelector() {
    return [{ language: "json", scheme: "*", pattern: "**/bower.json" }, { language: "json", scheme: "*", pattern: "**/.bower.json" }];
  }
  isEnabled() {
    return !!Z.workspace.getConfiguration("npm").get("fetchOnlinePackageInfo");
  }
  collectDefaultSuggestions(t, n) {
    let i = { name: "${1:name}", description: "${2:description}", authors: ["${3:author}"], version: "${4:1.0.0}", main: "${5:pathToMain}", dependencies: {} }, r = new Z.CompletionItem(Z.l10n.t("Default bower.json"));
    return r.kind = Z.CompletionItemKind.Class, r.insertText = new Z.SnippetString(JSON.stringify(i, null, "	")), n.add(r), Promise.resolve(null);
  }
  collectPropertySuggestions(t, n, i, r, o, s) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies"]) || n.matches(["devDependencies"])) if (i.length > 0) {
      let a = "https://registry.bower.io/packages/search/" + encodeURIComponent(i);
      return this.xhr({ url: a, headers: { agent: ei } }).then((u) => {
        if (u.status === 200) try {
          let l = JSON.parse(u.responseText);
          if (Array.isArray(l)) {
            let c = l;
            for (let f of c) {
              let p = f.name, d = f.description || "", h = new Z.SnippetString().appendText(JSON.stringify(p));
              r && (h.appendText(": ").appendPlaceholder("latest"), o || h.appendText(","));
              let x = new Z.CompletionItem(p);
              x.kind = Z.CompletionItemKind.Property, x.insertText = h, x.filterText = JSON.stringify(p), x.documentation = d, s.add(x);
            }
            s.setAsIncomplete();
          }
        } catch {
        }
        else return s.error(Z.l10n.t("Request to the bower repository failed: {0}", u.responseText)), 0;
      }, (u) => (s.error(Z.l10n.t("Request to the bower repository failed: {0}", u.responseText)), 0));
    } else return this.topRanked.forEach((a) => {
      let u = new Z.SnippetString().appendText(JSON.stringify(a));
      r && (u.appendText(": ").appendPlaceholder("latest"), o || u.appendText(","));
      let l = new Z.CompletionItem(a);
      l.kind = Z.CompletionItemKind.Property, l.insertText = u, l.filterText = JSON.stringify(a), l.documentation = "", s.add(l);
    }), s.setAsIncomplete(), Promise.resolve(null);
    return null;
  }
  collectValueSuggestions(t, n, i) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies", "*"]) || n.matches(["devDependencies", "*"])) {
      let r = new Z.CompletionItem(Z.l10n.t("latest"));
      r.insertText = new Z.SnippetString('"${1:latest}"'), r.filterText = '""', r.kind = Z.CompletionItemKind.Value, r.documentation = "The latest version of the package", i.add(r);
    }
    return null;
  }
  resolveSuggestion(t, n) {
    if (n.kind === Z.CompletionItemKind.Property && n.documentation === "") {
      let i = n.label;
      return typeof i != "string" && (i = i.label), this.getInfo(i).then((r) => r ? (n.documentation = r, n) : null);
    }
    return null;
  }
  getInfo(t) {
    let n = "https://registry.bower.io/packages/" + encodeURIComponent(t);
    return this.xhr({ url: n, headers: { agent: ei } }).then((i) => {
      try {
        let r = JSON.parse(i.responseText);
        if (r && r.url) {
          let o = r.url;
          return o.indexOf("git://") === 0 && (o = o.substring(6)), o.length >= 4 && o.substr(o.length - 4) === ".git" && (o = o.substring(0, o.length - 4)), o;
        }
      } catch {
      }
    }, () => {
    });
  }
  getInfoContribution(t, n) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies", "*"]) || n.matches(["devDependencies", "*"])) {
      let i = n.path[n.path.length - 1];
      if (typeof i == "string") return this.getInfo(i).then((r) => {
        if (r) {
          let o = new Z.MarkdownString();
          return o.appendText(r), [o];
        }
        return null;
      });
    }
    return null;
  }
};
var K = require("vscode"), ii = ye(require("child_process")), oi = require("path");
var $ = require("vscode"), $n = 60, qn = $n * 60, Tt = qn * 24, ti = Tt * 7, ni = Tt * 30, ri = Tt * 365;
function Un(e2, t, n, i) {
  typeof e2 != "number" && (e2 = e2.getTime());
  let r = Math.round(((/* @__PURE__ */ new Date()).getTime() - e2) / 1e3);
  if (r < -30) return $.l10n.t("in {0}", Un((/* @__PURE__ */ new Date()).getTime() + r * 1e3, false));
  if (!i && r < 30) return $.l10n.t("now");
  let o;
  return r < $n ? (o = r, t ? o === 1 ? n ? $.l10n.t("{0} second ago", o) : $.l10n.t("{0} sec ago", o) : n ? $.l10n.t("{0} seconds ago", o) : $.l10n.t("{0} secs ago", o) : o === 1 ? n ? $.l10n.t("{0} second", o) : $.l10n.t("{0} sec", o) : n ? $.l10n.t("{0} seconds", o) : $.l10n.t("{0} secs", o)) : r < qn ? (o = Math.floor(r / $n), t ? o === 1 ? n ? $.l10n.t("{0} minute ago", o) : $.l10n.t("{0} min ago", o) : n ? $.l10n.t("{0} minutes ago", o) : $.l10n.t("{0} mins ago", o) : o === 1 ? n ? $.l10n.t("{0} minute", o) : $.l10n.t("{0} min", o) : n ? $.l10n.t("{0} minutes", o) : $.l10n.t("{0} mins", o)) : r < Tt ? (o = Math.floor(r / qn), t ? o === 1 ? n ? $.l10n.t("{0} hour ago", o) : $.l10n.t("{0} hr ago", o) : n ? $.l10n.t("{0} hours ago", o) : $.l10n.t("{0} hrs ago", o) : o === 1 ? n ? $.l10n.t("{0} hour", o) : $.l10n.t("{0} hr", o) : n ? $.l10n.t("{0} hours", o) : $.l10n.t("{0} hrs", o)) : r < ti ? (o = Math.floor(r / Tt), t ? o === 1 ? $.l10n.t("{0} day ago", o) : $.l10n.t("{0} days ago", o) : o === 1 ? $.l10n.t("{0} day", o) : $.l10n.t("{0} days", o)) : r < ni ? (o = Math.floor(r / ti), t ? o === 1 ? n ? $.l10n.t("{0} week ago", o) : $.l10n.t("{0} wk ago", o) : n ? $.l10n.t("{0} weeks ago", o) : $.l10n.t("{0} wks ago", o) : o === 1 ? n ? $.l10n.t("{0} week", o) : $.l10n.t("{0} wk", o) : n ? $.l10n.t("{0} weeks", o) : $.l10n.t("{0} wks", o)) : r < ri ? (o = Math.floor(r / ni), t ? o === 1 ? n ? $.l10n.t("{0} month ago", o) : $.l10n.t("{0} mo ago", o) : n ? $.l10n.t("{0} months ago", o) : $.l10n.t("{0} mos ago", o) : o === 1 ? n ? $.l10n.t("{0} month", o) : $.l10n.t("{0} mo", o) : n ? $.l10n.t("{0} months", o) : $.l10n.t("{0} mos", o)) : (o = Math.floor(r / ri), t ? o === 1 ? n ? $.l10n.t("{0} year ago", o) : $.l10n.t("{0} yr ago", o) : n ? $.l10n.t("{0} years ago", o) : $.l10n.t("{0} yrs ago", o) : o === 1 ? n ? $.l10n.t("{0} year", o) : $.l10n.t("{0} yr", o) : n ? $.l10n.t("{0} years", o) : $.l10n.t("{0} yrs", o));
}
var Cc = 40, Bn = "Visual Studio Code", Jt = class {
  constructor(t, n) {
    this.xhr = t;
    this.npmCommandPath = n;
    this.mostDependedOn = ["lodash", "async", "underscore", "request", "commander", "express", "debug", "chalk", "colors", "q", "coffee-script", "mkdirp", "optimist", "through2", "yeoman-generator", "moment", "bluebird", "glob", "gulp-util", "minimist", "cheerio", "pug", "redis", "node-uuid", "socket", "io", "uglify-js", "winston", "through", "fs-extra", "handlebars", "body-parser", "rimraf", "mime", "semver", "mongodb", "jquery", "grunt", "connect", "yosay", "underscore", "string", "xml2js", "ejs", "mongoose", "marked", "extend", "mocha", "superagent", "js-yaml", "xtend", "shelljs", "gulp", "yargs", "browserify", "minimatch", "react", "less", "prompt", "inquirer", "ws", "event-stream", "inherits", "mysql", "esprima", "jsdom", "stylus", "when", "readable-stream", "aws-sdk", "concat-stream", "chai", "Thenable", "wrench"];
    this.knownScopes = ["@types", "@angular", "@babel", "@nuxtjs", "@vue", "@bazel"];
  }
  getDocumentSelector() {
    return [{ language: "json", scheme: "*", pattern: "**/package.json" }];
  }
  collectDefaultSuggestions(t, n) {
    let i = { name: "${1:name}", description: "${2:description}", authors: "${3:author}", version: "${4:1.0.0}", main: "${5:pathToMain}", dependencies: {} }, r = new K.CompletionItem(K.l10n.t("Default package.json"));
    return r.kind = K.CompletionItemKind.Module, r.insertText = new K.SnippetString(JSON.stringify(i, null, "	")), n.add(r), Promise.resolve(null);
  }
  isEnabled() {
    return this.npmCommandPath || this.onlineEnabled();
  }
  onlineEnabled() {
    return !!K.workspace.getConfiguration("npm").get("fetchOnlinePackageInfo");
  }
  collectPropertySuggestions(t, n, i, r, o, s) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies"]) || n.matches(["devDependencies"]) || n.matches(["optionalDependencies"]) || n.matches(["peerDependencies"])) {
      let a;
      if (i.length > 0) {
        if (i[0] === "@") {
          if (i.indexOf("/") !== -1) return this.collectScopedPackages(i, r, o, s);
          for (let u of this.knownScopes) {
            let l = new K.CompletionItem(u);
            l.kind = K.CompletionItemKind.Property, l.insertText = new K.SnippetString().appendText(`"${u}/`).appendTabstop().appendText('"'), l.filterText = JSON.stringify(u), l.documentation = "", l.command = { title: "", command: "editor.action.triggerSuggest" }, s.add(l);
          }
          s.setAsIncomplete();
        }
        return a = `https://registry.npmjs.org/-/v1/search?size=${Cc}&text=${encodeURIComponent(i)}`, this.xhr({ url: a, headers: { agent: Bn } }).then((u) => {
          if (u.status === 200) {
            try {
              let l = JSON.parse(u.responseText);
              if (l && l.objects && Array.isArray(l.objects)) {
                let c = l.objects;
                for (let f of c) this.processPackage(f.package, r, o, s);
              }
            } catch {
            }
            s.setAsIncomplete();
          } else return s.error(K.l10n.t("Request to the NPM repository failed: {0}", u.responseText)), 0;
        }, (u) => (s.error(K.l10n.t("Request to the NPM repository failed: {0}", u.responseText)), 0));
      } else return this.mostDependedOn.forEach((u) => {
        let l = new K.SnippetString().appendText(JSON.stringify(u));
        r && (l.appendText(': "').appendTabstop().appendText('"'), o || l.appendText(","));
        let c = new K.CompletionItem(u);
        c.kind = K.CompletionItemKind.Property, c.insertText = l, c.filterText = JSON.stringify(u), c.documentation = "", s.add(c);
      }), this.collectScopedPackages(i, r, o, s), s.setAsIncomplete(), Promise.resolve(null);
    }
    return null;
  }
  collectScopedPackages(t, n, i, r) {
    let o = t.split("/");
    if (o.length === 2 && o[0].length > 1) {
      let s = o[0].substr(1), a = o[1];
      a.length < 4 && (a = "");
      let u = `https://registry.npmjs.com/-/v1/search?text=scope:${s}%20${a}&size=250`;
      return this.xhr({ url: u, headers: { agent: Bn } }).then((l) => {
        if (l.status === 200) {
          try {
            let c = JSON.parse(l.responseText);
            if (c && Array.isArray(c.objects)) {
              let f = c.objects;
              for (let p of f) this.processPackage(p.package, n, i, r);
            }
          } catch {
          }
          r.setAsIncomplete();
        } else r.error(K.l10n.t("Request to the NPM repository failed: {0}", l.responseText));
        return null;
      });
    }
    return Promise.resolve(null);
  }
  async collectValueSuggestions(t, n, i) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies", "*"]) || n.matches(["devDependencies", "*"]) || n.matches(["optionalDependencies", "*"]) || n.matches(["peerDependencies", "*"])) {
      let r = n.path[n.path.length - 1];
      if (typeof r == "string") {
        let o = await this.fetchPackageInfo(r, t);
        if (o && o.version) {
          let s = JSON.stringify(o.version), a = new K.CompletionItem(s);
          a.kind = K.CompletionItemKind.Property, a.insertText = s, a.documentation = K.l10n.t("The currently latest version of the package"), i.add(a), s = JSON.stringify("^" + o.version), a = new K.CompletionItem(s), a.kind = K.CompletionItemKind.Property, a.insertText = s, a.documentation = K.l10n.t("Matches the most recent major version (1.x.x)"), i.add(a), s = JSON.stringify("~" + o.version), a = new K.CompletionItem(s), a.kind = K.CompletionItemKind.Property, a.insertText = s, a.documentation = K.l10n.t("Matches the most recent minor version (1.2.x)"), i.add(a);
        }
      }
    }
    return null;
  }
  getDocumentation(t, n, i, r) {
    let o = new K.MarkdownString();
    return t && o.appendText(t), n && (o.appendText(`

`), o.appendText(i ? K.l10n.t("Latest version: {0} published {1}", n, Un(Date.parse(i), true, true)) : K.l10n.t("Latest version: {0}", n))), r && (o.appendText(`

`), o.appendText(r)), o;
  }
  resolveSuggestion(t, n) {
    if (n.kind === K.CompletionItemKind.Property && !n.documentation) {
      let i = n.label;
      return typeof i != "string" && (i = i.label), this.fetchPackageInfo(i, t).then((r) => r ? (n.documentation = this.getDocumentation(r.description, r.version, r.time, r.homepage), n) : null);
    }
    return null;
  }
  isValidNPMName(t) {
    if (!t || t.length > 214 || t.match(/^[-_.\s]/)) return false;
    let n = t.match(/^(?:@([^/~\s)('!*]+?)[/])?([^/~)('!*\s]+?)$/);
    if (n) {
      let i = n[1];
      if (i && encodeURIComponent(i) !== i) return false;
      let r = n[2];
      return encodeURIComponent(r) === r;
    }
    return false;
  }
  async fetchPackageInfo(t, n) {
    if (!this.isValidNPMName(t)) return;
    let i;
    return this.npmCommandPath && (i = await this.npmView(this.npmCommandPath, t, n)), !i && this.onlineEnabled() && (i = await this.npmjsView(t)), i;
  }
  npmView(t, n, i) {
    return new Promise((r, o) => {
      let s = ["view", "--json", "--", n, "description", "dist-tags.latest", "homepage", "version", "time"], a = i && i.scheme === "file" ? (0, oi.dirname)(i.fsPath) : void 0, u = { ...process.env, COREPACK_ENABLE_AUTO_PIN: "0", COREPACK_ENABLE_PROJECT_SPEC: "0" }, l = { cwd: a, env: u, encoding: "utf8" }, c = t;
      process.platform === "win32" && (l = { cwd: a, env: u, encoding: "utf8", shell: true }, c = `"${t}"`), ii.execFile(c, s, l, (f, p) => {
        if (!f) try {
          let d = JSON.parse(p), h = d["dist-tags.latest"] || d.version;
          r({ description: d.description, version: h, time: d.time?.[h], homepage: d.homepage });
          return;
        } catch {
        }
        r(void 0);
      });
    });
  }
  async npmjsView(t) {
    let n = "https://registry.npmjs.org/" + encodeURIComponent(t);
    try {
      let i = await this.xhr({ url: n, headers: { agent: Bn } }), r = JSON.parse(i.responseText), o = r["dist-tags"]?.latest || Object.keys(r.versions).pop() || "";
      return { description: r.description || "", version: o, time: r.time?.[o], homepage: r.homepage || "" };
    } catch {
    }
  }
  getInfoContribution(t, n) {
    if (!this.isEnabled()) return null;
    if (n.matches(["dependencies", "*"]) || n.matches(["devDependencies", "*"]) || n.matches(["optionalDependencies", "*"]) || n.matches(["peerDependencies", "*"])) {
      let i = n.path[n.path.length - 1];
      if (typeof i == "string") return this.fetchPackageInfo(i, t).then((r) => r ? [this.getDocumentation(r.description, r.version, r.time, r.homepage)] : null);
    }
    return null;
  }
  processPackage(t, n, i, r) {
    if (t && t.name) {
      let o = t.name, s = new K.SnippetString().appendText(JSON.stringify(o));
      n && (s.appendText(': "'), t.version ? s.appendVariable("version", t.version) : s.appendTabstop(), s.appendText('"'), i || s.appendText(","));
      let a = new K.CompletionItem(o);
      a.kind = K.CompletionItemKind.Property, a.insertText = s, a.filterText = JSON.stringify(o), a.documentation = this.getDocumentation(t.description, t.version, void 0, t?.links?.homepage), r.add(a);
    }
  }
};
var be = require("vscode");
function si(e2, t) {
  let n = [new Jt(e2, t), new Vt(e2)], i = [];
  return n.forEach((r) => {
    let o = r.getDocumentSelector();
    i.push(be.languages.registerCompletionItemProvider(o, new Wn(r), '"', ":")), i.push(be.languages.registerHoverProvider(o, new Gn(r)));
  }), be.Disposable.from(...i);
}
var Gn = class {
  constructor(t) {
    this.jsonContribution = t;
  }
  provideHover(t, n, i) {
    let r = t.offsetAt(n), o = Hn(t.getText(), r);
    if (!o.previousNode) return null;
    let s = o.previousNode;
    if (s && s.offset <= r && r <= s.offset + s.length) {
      let a = this.jsonContribution.getInfoContribution(t.uri, o);
      if (a) return a.then((u) => {
        let l = new be.Range(t.positionAt(s.offset), t.positionAt(s.offset + s.length));
        return { contents: u || [], range: l };
      });
    }
    return null;
  }
}, Wn = class {
  constructor(t) {
    this.jsonContribution = t;
  }
  resolveCompletionItem(t, n) {
    if (this.jsonContribution.resolveSuggestion) {
      let i = this.jsonContribution.resolveSuggestion(this.lastResource, t);
      if (i) return i;
    }
    return Promise.resolve(t);
  }
  provideCompletionItems(t, n, i) {
    this.lastResource = t.uri;
    let r = this.getCurrentWord(t, n), o, s = [], a = false, u = t.offsetAt(n), l = Hn(t.getText(), u), c = l.previousNode;
    c && c.offset <= u && u <= c.offset + c.length && (c.type === "property" || c.type === "string" || c.type === "number" || c.type === "boolean" || c.type === "null") ? o = new be.Range(t.positionAt(c.offset), t.positionAt(c.offset + c.length)) : o = new be.Range(t.positionAt(u - r.length), n);
    let f = {}, p = { add: (h) => {
      let x = typeof h.label == "string" ? h.label : h.label.label;
      f[x] || (f[x] = true, h.range = { replacing: o, inserting: new be.Range(o.start, o.start) }, s.push(h));
    }, setAsIncomplete: () => a = true, error: (h) => console.error(h), log: (h) => console.log(h) }, d = null;
    if (l.isAtPropertyKey) {
      let h = Xr(t.getText(), true), x = !l.previousNode || !this.hasColonAfter(h, l.previousNode.offset + l.previousNode.length), A = this.isLast(h, t.offsetAt(n));
      d = this.jsonContribution.collectPropertySuggestions(t.uri, l, r, x, A, p);
    } else l.path.length === 0 ? d = this.jsonContribution.collectDefaultSuggestions(t.uri, p) : d = this.jsonContribution.collectValueSuggestions(t.uri, l, p);
    return d ? d.then(() => s.length > 0 || a ? new be.CompletionList(s, a) : null) : null;
  }
  getCurrentWord(t, n) {
    let i = n.character - 1, r = t.lineAt(n.line).text;
    for (; i >= 0 && ` 	
\r\v":{[,`.indexOf(r.charAt(i)) === -1; ) i--;
    return r.substring(i + 1, n.character);
  }
  isLast(t, n) {
    t.setPosition(n);
    let i = t.scan();
    return i === He.StringLiteral && t.getTokenError() === Kt.UnexpectedEndOfString && (i = t.scan()), i === He.CloseBraceToken || i === He.EOF;
  }
  hasColonAfter(t, n) {
    return t.setPosition(n), t.scan() === He.ColonToken;
  }
};
var Le = ye(require("vscode"));
var H = require("vscode"), bt = ye(require("path")), ku = ye(require("fs")), Eu = ye(_i());
var Kc = { 975(e2) {
  function t(r) {
    if (typeof r != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
  }
  function n(r, o) {
    for (var s, a = "", u = 0, l = -1, c = 0, f = 0; f <= r.length; ++f) {
      if (f < r.length) s = r.charCodeAt(f);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(l === f - 1 || c === 1)) if (l !== f - 1 && c === 2) {
          if (a.length < 2 || u !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
            if (a.length > 2) {
              var p = a.lastIndexOf("/");
              if (p !== a.length - 1) {
                p === -1 ? (a = "", u = 0) : u = (a = a.slice(0, p)).length - 1 - a.lastIndexOf("/"), l = f, c = 0;
                continue;
              }
            } else if (a.length === 2 || a.length === 1) {
              a = "", u = 0, l = f, c = 0;
              continue;
            }
          }
          o && (a.length > 0 ? a += "/.." : a = "..", u = 2);
        } else a.length > 0 ? a += "/" + r.slice(l + 1, f) : a = r.slice(l + 1, f), u = f - l - 1;
        l = f, c = 0;
      } else s === 46 && c !== -1 ? ++c : c = -1;
    }
    return a;
  }
  var i = { resolve: function() {
    for (var r, o = "", s = false, a = arguments.length - 1; a >= -1 && !s; a--) {
      var u;
      a >= 0 ? u = arguments[a] : (r === void 0 && (r = process.cwd()), u = r), t(u), u.length !== 0 && (o = u + "/" + o, s = u.charCodeAt(0) === 47);
    }
    return o = n(o, !s), s ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(r) {
    if (t(r), r.length === 0) return ".";
    var o = r.charCodeAt(0) === 47, s = r.charCodeAt(r.length - 1) === 47;
    return (r = n(r, !o)).length !== 0 || o || (r = "."), r.length > 0 && s && (r += "/"), o ? "/" + r : r;
  }, isAbsolute: function(r) {
    return t(r), r.length > 0 && r.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var r, o = 0; o < arguments.length; ++o) {
      var s = arguments[o];
      t(s), s.length > 0 && (r === void 0 ? r = s : r += "/" + s);
    }
    return r === void 0 ? "." : i.normalize(r);
  }, relative: function(r, o) {
    if (t(r), t(o), r === o || (r = i.resolve(r)) === (o = i.resolve(o))) return "";
    for (var s = 1; s < r.length && r.charCodeAt(s) === 47; ++s) ;
    for (var a = r.length, u = a - s, l = 1; l < o.length && o.charCodeAt(l) === 47; ++l) ;
    for (var c = o.length - l, f = u < c ? u : c, p = -1, d = 0; d <= f; ++d) {
      if (d === f) {
        if (c > f) {
          if (o.charCodeAt(l + d) === 47) return o.slice(l + d + 1);
          if (d === 0) return o.slice(l + d);
        } else u > f && (r.charCodeAt(s + d) === 47 ? p = d : d === 0 && (p = 0));
        break;
      }
      var h = r.charCodeAt(s + d);
      if (h !== o.charCodeAt(l + d)) break;
      h === 47 && (p = d);
    }
    var x = "";
    for (d = s + p + 1; d <= a; ++d) d !== a && r.charCodeAt(d) !== 47 || (x.length === 0 ? x += ".." : x += "/..");
    return x.length > 0 ? x + o.slice(l + p) : (l += p, o.charCodeAt(l) === 47 && ++l, o.slice(l));
  }, _makeLong: function(r) {
    return r;
  }, dirname: function(r) {
    if (t(r), r.length === 0) return ".";
    for (var o = r.charCodeAt(0), s = o === 47, a = -1, u = true, l = r.length - 1; l >= 1; --l) if ((o = r.charCodeAt(l)) === 47) {
      if (!u) {
        a = l;
        break;
      }
    } else u = false;
    return a === -1 ? s ? "/" : "." : s && a === 1 ? "//" : r.slice(0, a);
  }, basename: function(r, o) {
    if (o !== void 0 && typeof o != "string") throw new TypeError('"ext" argument must be a string');
    t(r);
    var s, a = 0, u = -1, l = true;
    if (o !== void 0 && o.length > 0 && o.length <= r.length) {
      if (o.length === r.length && o === r) return "";
      var c = o.length - 1, f = -1;
      for (s = r.length - 1; s >= 0; --s) {
        var p = r.charCodeAt(s);
        if (p === 47) {
          if (!l) {
            a = s + 1;
            break;
          }
        } else f === -1 && (l = false, f = s + 1), c >= 0 && (p === o.charCodeAt(c) ? --c === -1 && (u = s) : (c = -1, u = f));
      }
      return a === u ? u = f : u === -1 && (u = r.length), r.slice(a, u);
    }
    for (s = r.length - 1; s >= 0; --s) if (r.charCodeAt(s) === 47) {
      if (!l) {
        a = s + 1;
        break;
      }
    } else u === -1 && (l = false, u = s + 1);
    return u === -1 ? "" : r.slice(a, u);
  }, extname: function(r) {
    t(r);
    for (var o = -1, s = 0, a = -1, u = true, l = 0, c = r.length - 1; c >= 0; --c) {
      var f = r.charCodeAt(c);
      if (f !== 47) a === -1 && (u = false, a = c + 1), f === 46 ? o === -1 ? o = c : l !== 1 && (l = 1) : o !== -1 && (l = -1);
      else if (!u) {
        s = c + 1;
        break;
      }
    }
    return o === -1 || a === -1 || l === 0 || l === 1 && o === a - 1 && o === s + 1 ? "" : r.slice(o, a);
  }, format: function(r) {
    if (r === null || typeof r != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof r);
    return (function(o, s) {
      var a = s.dir || s.root, u = s.base || (s.name || "") + (s.ext || "");
      return a ? a === s.root ? a + u : a + "/" + u : u;
    })(0, r);
  }, parse: function(r) {
    t(r);
    var o = { root: "", dir: "", base: "", ext: "", name: "" };
    if (r.length === 0) return o;
    var s, a = r.charCodeAt(0), u = a === 47;
    u ? (o.root = "/", s = 1) : s = 0;
    for (var l = -1, c = 0, f = -1, p = true, d = r.length - 1, h = 0; d >= s; --d) if ((a = r.charCodeAt(d)) !== 47) f === -1 && (p = false, f = d + 1), a === 46 ? l === -1 ? l = d : h !== 1 && (h = 1) : l !== -1 && (h = -1);
    else if (!p) {
      c = d + 1;
      break;
    }
    return l === -1 || f === -1 || h === 0 || h === 1 && l === f - 1 && l === c + 1 ? f !== -1 && (o.base = o.name = c === 0 && u ? r.slice(1, f) : r.slice(c, f)) : (c === 0 && u ? (o.name = r.slice(1, l), o.base = r.slice(1, f)) : (o.name = r.slice(c, l), o.base = r.slice(c, f)), o.ext = r.slice(l, f)), c > 0 ? o.dir = r.slice(0, c - 1) : u && (o.dir = "/"), o;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  i.posix = i, e2.exports = i;
} }, Ri = {};
function st(e2) {
  var t = Ri[e2];
  if (t !== void 0) return t.exports;
  var n = Ri[e2] = { exports: {} };
  return Kc[e2](n, n.exports, st), n.exports;
}
var Ci;
st.d = (e2, t) => {
  for (var n in t) st.o(t, n) && !st.o(e2, n) && Object.defineProperty(e2, n, { enumerable: true, get: t[n] });
}, st.o = (e2, t) => Object.prototype.hasOwnProperty.call(e2, t), typeof process == "object" ? Ci = process.platform === "win32" : typeof navigator == "object" && (Ci = navigator.userAgent.indexOf("Windows") >= 0);
var Oi = st(975), Rt = Oi.posix || Oi, Qt = "/", Ct;
(function(e2) {
  e2.joinPath = function(t, ...n) {
    return t.with({ path: Rt.join(t.path, ...n) });
  }, e2.resolvePath = function(t, ...n) {
    let i = t.path, r = false;
    i[0] !== Qt && (i = Qt + i, r = true);
    let o = Rt.resolve(i, ...n);
    return r && o[0] === Qt && !t.authority && (o = o.substring(1)), t.with({ path: o });
  }, e2.dirname = function(t) {
    if (t.path.length === 0 || t.path === Qt) return t;
    let n = Rt.dirname(t.path);
    return n.length === 1 && n.charCodeAt(0) === 46 && (n = ""), t.with({ path: n });
  }, e2.basename = function(t) {
    return Rt.basename(t.path);
  }, e2.extname = function(t) {
    return Rt.extname(t.path);
  };
})(Ct || (Ct = {}));
var bu = ye(Yi()), ze = ye(require("path")), wu = ye(sa()), kn = require("vscode"), vd = vu();
async function xt(e2) {
  try {
    await kn.workspace.fs.stat(kn.Uri.file(e2));
  } catch {
    return false;
  }
  return true;
}
async function bd(e2) {
  return await xt(ze.join(e2, "bun.lockb")) ? { isPreferred: true, hasLockfile: true } : await xt(ze.join(e2, "bun.lock")) ? { isPreferred: true, hasLockfile: true } : { isPreferred: false, hasLockfile: false };
}
async function wd(e2) {
  return await xt(ze.join(e2, "pnpm-lock.yaml")) ? { isPreferred: true, hasLockfile: true } : await xt(ze.join(e2, "shrinkwrap.yaml")) ? { isPreferred: true, hasLockfile: true } : await (0, bu.default)("pnpm-lock.yaml", { cwd: e2 }) ? { isPreferred: true, hasLockfile: true } : { isPreferred: false, hasLockfile: false };
}
async function Sd(e2) {
  if (await xt(ze.join(e2, "yarn.lock"))) return { isPreferred: true, hasLockfile: true };
  try {
    if (typeof vd(e2) == "string") return { isPreferred: true, hasLockfile: false };
  } catch {
  }
  return { isPreferred: false, hasLockfile: false };
}
async function Ad(e2) {
  let t = await xt(ze.join(e2, "package-lock.json"));
  return { isPreferred: t, hasLockfile: t };
}
async function Su(e2) {
  let t = [], n = [], i = await Ad(e2);
  i.isPreferred && (t.push("npm"), n.push(i));
  let r = await wd(e2);
  r.isPreferred && (t.push("pnpm"), n.push(r));
  let o = await Sd(e2);
  o.isPreferred && (t.push("yarn"), n.push(o));
  let s = await bd(e2);
  s.isPreferred && (t.push("bun"), n.push(s));
  let a = await (0, wu.default)(e2);
  a && !t.includes(a.name) && (t.push(a.name), n.push({ isPreferred: true, hasLockfile: false }));
  let u = 0;
  return n.forEach((l) => u += l.hasLockfile ? 1 : 0), { name: t[0] || "npm", multipleLockFilesDetected: u > 1 };
}
var vt = require("vscode"), Pe = (e2, t = e2.getText()) => {
  let n, i, r = false, o, s = 0, a = [];
  if (Zr(t, { onError() {
  }, onObjectBegin() {
    s++;
  }, onObjectEnd(l) {
    r && (i = e2.positionAt(l), r = false), s--;
  }, onLiteralValue(l, c, f) {
    o && typeof l == "string" && (a.push({ ...o, value: l, valueRange: new vt.Range(e2.positionAt(c), e2.positionAt(c + f)) }), o = void 0);
  }, onObjectProperty(l, c, f) {
    s === 1 && l === "scripts" ? (r = true, n = e2.positionAt(c)) : r && (o = { name: l, nameRange: new vt.Range(e2.positionAt(c), e2.positionAt(c + f)) });
  } }), n !== void 0) return { location: new vt.Location(e2.uri, new vt.Range(n, i ?? n)), scripts: a };
};
var Tu = new RegExp("^(node_modules|.vscode-test)$", "i"), En, Qe = "install", Tn = class {
  constructor(t) {
    this.context = t;
  }
  get tasksWithLocation() {
    return Au(this.context, false);
  }
  async provideTasks(t) {
    return (await Au(this.context, true, t)).map((i) => i.task);
  }
  async resolveTask(t) {
    if (t.definition.script) {
      let i = t.definition, r;
      if (t.scope === void 0 || t.scope === H.TaskScope.Global || t.scope === H.TaskScope.Workspace) return;
      i.path ? r = t.scope.uri.with({ path: t.scope.uri.path + "/" + i.path + `${i.path.endsWith("/") ? "" : "/"}package.json` }) : r = t.scope.uri.with({ path: t.scope.uri.path + "/package.json" });
      let o;
      return i.script === Qe ? o = await Cn(this.context, t.scope, r) : o = await Ut(this.context, i.script, t.scope, r), o.definition = i, o;
    }
  }
};
function $r() {
  En = void 0;
}
var kd = ["build", "compile", "watch"];
function Ed(e2) {
  for (let t of kd) if (e2.indexOf(t) !== -1) return true;
  return false;
}
var Td = ["test"];
function _d(e2) {
  for (let t of Td) if (e2 === t) return true;
  return false;
}
var Rd = /* @__PURE__ */ new Set(["install", "pack", "pack", "publish", "restart", "shrinkwrap", "stop", "test", "uninstall", "version"]), Cd = /* @__PURE__ */ new Set(["install", "pack", "pack", "publish", "publishOnly", "restart", "shrinkwrap", "stop", "test", "uninstall", "version"]);
function Od(e2) {
  return Rd.has(e2) || Cd.has(e2);
}
function _u(e2) {
  return e2 && typeof e2 != "number";
}
async function qr(e2, t, n) {
  let i = H.workspace.getConfiguration("npm", e2).get("scriptRunner", "npm");
  return i === "auto" && (i = await _n(e2, t, n)), i;
}
async function Ur(e2, t, n) {
  let i = H.workspace.getConfiguration("npm", e2).get("packageManager", "npm");
  return i === "auto" && (i = await _n(e2, t, n)), i;
}
async function _n(e2, t, n = false) {
  let { name: i, multipleLockFilesDetected: r } = await Su(e2.fsPath), o = "npm.multiplePMWarning.neverShow";
  if (n && r && t && !t.globalState.get(o)) {
    let s = H.l10n.t(`Using {0} as the preferred package manager. Found multiple lockfiles for {1}.  To resolve this issue, delete the lockfiles that don't match your preferred package manager or change the setting "npm.packageManager" to a value other than "auto".`, i, e2.fsPath), a = H.l10n.t("Do not show again"), u = H.l10n.t("Learn more");
    H.window.showInformationMessage(s, u, a).then((l) => {
      switch (l) {
        case a:
          t.globalState.update(o, true);
          break;
        case u:
          H.env.openExternal(H.Uri.parse("https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json"));
      }
    });
  }
  return i;
}
async function* Pd(e2) {
  let t = /* @__PURE__ */ new Set(), n = H.workspace.workspaceFolders;
  if (n) for (let i of n) {
    if (e2?.isCancellationRequested) return;
    if (Br(i) && !Tu.test(Ct.basename(i.uri))) {
      let r = new H.RelativePattern(i, "**/package.json"), o = await H.workspace.findFiles(r, "**/{node_modules,.vscode-test}/**", void 0, e2);
      for (let s of o) {
        if (e2?.isCancellationRequested) return;
        !Ld(i, s) && !t.has(s.fsPath) && (yield s, t.add(s.fsPath));
      }
    }
  }
}
async function Ru(e2, t) {
  let n = [];
  if (Tu.test(Ct.basename(t))) return n;
  let i = new H.RelativePattern(t.fsPath, "**/package.json"), r = await H.workspace.findFiles(i, "**/node_modules/**"), o = /* @__PURE__ */ new Set();
  for (let s of r) if (!o.has(s.fsPath)) {
    let a = await Cu(e2, s, true);
    o.add(s.fsPath), n.push(...a.map((u) => ({ label: u.task.name, task: u.task })));
  }
  return n;
}
async function Au(e2, t, n) {
  if (!En) {
    let i = [];
    for await (let r of Pd(n)) {
      if (n?.isCancellationRequested) return i;
      let o = await Cu(e2, r, t, n);
      if (n?.isCancellationRequested) return i;
      i.push(...o);
    }
    if (n?.isCancellationRequested) return i;
    En = i;
  }
  return En;
}
function Br(e2) {
  return H.workspace.getConfiguration("npm", e2?.uri).get("autoDetect") === "on";
}
function Ld(e2, t) {
  function n(o, s) {
    return (0, Eu.default)(o, s, { dot: true });
  }
  let i = H.workspace.getConfiguration("npm", e2.uri).get("exclude"), r = bt.dirname(t.fsPath);
  if (i) {
    if (Array.isArray(i)) {
      for (let o of i) if (n(r, o)) return true;
    } else if (n(r, i)) return true;
  }
  return false;
}
function Id(e2) {
  return e2.match(/--(inspect|debug)(-brk)?(=((\[[0-9a-fA-F:]*\]|[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+|[a-zA-Z0-9\.]*):)?(\d+))?/) !== null;
}
async function Cu(e2, t, n, i) {
  let r = [], o = H.workspace.getWorkspaceFolder(t);
  if (!o || i?.isCancellationRequested) return r;
  let s = await Md(t, i);
  if (!s) return r;
  let a = [];
  for (let { name: u, value: l, nameRange: c } of s.scripts) {
    if (i?.isCancellationRequested) return a;
    let f = await Ut(e2, u, o, t, l, n);
    a.push({ task: f, location: new H.Location(t, c) });
  }
  return i?.isCancellationRequested || H.workspace.getConfiguration("npm", o).get("scriptExplorerExclude", []).find((u) => u.includes(Qe)) || a.push({ task: await Cn(e2, o, t, "install dependencies from package", n) }), a;
}
function qt(e2, t) {
  return t && t.length ? `${e2} - ${t.substring(0, t.length - 1)}` : e2;
}
function Ou(e2) {
  return e2.map((t) => /\s/.test(t) ? { value: t, quoting: t.includes("--") ? H.ShellQuoting.Weak : H.ShellQuoting.Strong } : t);
}
function Pu(e2, t) {
  return t.path.substring(0, t.path.length - 12).substring(e2.path.length + 1);
}
async function Rn(e2, t, n, i = true) {
  let r = await qr(t, n, i);
  if (r === "node") return ["node", "--run", e2];
  {
    let o = [r, "run"];
    return H.workspace.getConfiguration("npm", t).get("runSilent") && o.push("--silent"), o.push(e2), o;
  }
}
async function Ut(e2, t, n, i, r, o) {
  let s = { type: "npm", script: t }, a = Pu(n.uri, i);
  a.length && !s.path && (s.path = a.substring(0, a.length - 1));
  let u = qt(t, a), l = bt.dirname(i.fsPath), c = await Rn(t, n.uri, e2, o), f = c.shift(), p = new H.Task(s, n, u, "npm", new H.ShellExecution(f, Ou(c), { cwd: l }));
  p.detail = r;
  let d = t.toLowerCase();
  return Ed(d) ? p.group = H.TaskGroup.Build : _d(d) ? p.group = H.TaskGroup.Test : Od(d) ? p.group = H.TaskGroup.Clean : r && Id(r) && (p.group = H.TaskGroup.Rebuild), p;
}
async function Nd(e2, t, n = true) {
  let r = [await Ur(e2, t, n), Qe];
  return H.workspace.getConfiguration("npm", e2).get("runSilent") && r.push("--silent"), r;
}
async function Cn(e2, t, n, i, r) {
  let o = { type: "npm", script: Qe }, s = Pu(t.uri, n);
  s.length && !o.path && (o.path = s.substring(0, s.length - 1));
  let a = qt(Qe, s), u = bt.dirname(n.fsPath), l = await Nd(t.uri, e2, r), c = l.shift(), f = new H.Task(o, t, a, "npm", new H.ShellExecution(c, Ou(l), { cwd: u }));
  return f.detail = i, f.group = H.TaskGroup.Clean, f;
}
async function Lu() {
  if (await Fd()) return true;
  let e2 = new H.CancellationTokenSource(), t = setTimeout(() => e2.cancel(), 1e3), n = await H.workspace.findFiles("**/package.json", void 0, 1, e2.token);
  return clearTimeout(t), n.length > 0;
}
async function Fd() {
  let e2 = H.workspace.workspaceFolders;
  if (!e2) return false;
  for (let t of e2) if (t.uri.scheme === "file") {
    let n = bt.join(t.uri.fsPath, "package.json");
    if (await Iu(n)) return true;
  }
  return false;
}
async function Iu(e2) {
  return new Promise((t, n) => {
    ku.exists(e2, (i) => {
      t(i);
    });
  });
}
async function Nu(e2, t, n) {
  let i = n.uri, r = H.workspace.getWorkspaceFolder(i);
  if (r) {
    let o = await Ut(e2, t, r, i);
    H.tasks.executeTask(o);
  }
}
async function On(e2, t, n, i) {
  let r = await Rn(t, i.uri, e2, true);
  H.commands.executeCommand("extension.js-debug.createDebuggerTerminal", r.join(" "), i, { cwd: n });
}
function Fu(e2, t, n) {
  let i = Pe(e2, t);
  if (i) {
    for (let r of i.scripts) if (r.nameRange.start.isBeforeOrEqual(n) && r.valueRange.end.isAfterOrEqual(n)) return r.name;
  }
}
async function Md(e2, t) {
  if (e2.scheme !== "file") return;
  let n = e2.fsPath;
  if (await Iu(n) && !t?.isCancellationRequested) try {
    let i = await H.workspace.openTextDocument(e2);
    return t?.isCancellationRequested ? void 0 : Pe(i);
  } catch {
    let r = H.l10n.t("Npm task detection: failed to parse the file {0}", e2.fsPath);
    throw new Error(r);
  }
}
function Mu(e2) {
  let t = Le.window.activeTextEditor;
  if (!t) return;
  let n = t.document, i = n.getText(), r = Fu(t.document, i, t.selection.anchor);
  if (r) Nu(e2, r, n);
  else {
    let o = Le.l10n.t("Could not find a valid npm script at the selection.");
    Le.window.showErrorMessage(o);
  }
}
async function Du(e2, t) {
  if (t.length === 0) return;
  let n = t[0], i = await Ru(e2, n);
  if (i && i.length > 0) {
    let r = Le.window.createQuickPick();
    r.placeholder = "Select an npm script to run in folder", r.items = i;
    let o = [], s = new Promise((u) => {
      o.push(r.onDidAccept(() => {
        o.forEach((l) => l.dispose()), u(r.selectedItems[0]);
      })), o.push(r.onDidHide(() => {
        o.forEach((l) => l.dispose()), u(void 0);
      }));
    });
    r.show();
    let a = await s;
    r.dispose(), a && Le.tasks.executeTask(a.task);
  } else Le.window.showInformationMessage(`No npm scripts found in ${n.fsPath}`, { modal: true });
}
var et = ye(require("path")), B = require("vscode");
var Bt = class extends B.TreeItem {
  constructor(n) {
    super(n.name, B.TreeItemCollapsibleState.Expanded);
    this.packages = [];
    this.contextValue = "folder", this.resourceUri = n.uri, this.workspaceFolder = n, this.iconPath = B.ThemeIcon.Folder;
  }
  addPackage(n) {
    this.packages.push(n);
  }
}, Pn = "package.json", Xe = class e extends B.TreeItem {
  constructor(n, i) {
    super(e.getLabel(i), B.TreeItemCollapsibleState.Expanded);
    this.scripts = [];
    this.folder = n, this.path = i, this.contextValue = "packageJSON", i ? this.resourceUri = B.Uri.file(et.join(n.resourceUri.fsPath, i, Pn)) : this.resourceUri = B.Uri.file(et.join(n.resourceUri.fsPath, Pn)), this.iconPath = B.ThemeIcon.File;
  }
  static getLabel(n) {
    return n.length > 0 ? et.join(n, Pn) : Pn;
  }
  addScript(n) {
    this.scripts.push(n);
  }
}, Ze = class extends B.TreeItem {
  constructor(t, n, i) {
    let r = n.path.length > 0 ? i.task.name.substring(0, i.task.name.length - n.path.length - 2) : i.task.name;
    super(r, B.TreeItemCollapsibleState.None), this.taskLocation = i.location;
    let o = r === `${Qe} ` ? "run" : B.workspace.getConfiguration("npm").get("scriptExplorerAction") || "open", s = { open: { title: "Edit Script", command: "vscode.open", arguments: [this.taskLocation?.uri, this.taskLocation ? { selection: new B.Range(this.taskLocation.range.start, this.taskLocation.range.start) } : void 0] }, run: { title: "Run Script", command: "npm.runScript", arguments: [this] } };
    this.contextValue = "script", this.package = n, this.task = i.task, this.command = s[o], this.task.group && this.task.group === B.TaskGroup.Clean ? this.iconPath = new B.ThemeIcon("wrench-subaction") : this.iconPath = new B.ThemeIcon("wrench"), this.task.detail && (this.tooltip = this.task.detail, this.description = this.task.detail);
  }
  getFolder() {
    return this.package.folder.workspaceFolder;
  }
}, Gt = class extends B.TreeItem {
  constructor(t) {
    super(t, B.TreeItemCollapsibleState.None), this.contextValue = "noscripts";
  }
}, Ln = class {
  constructor(t, n) {
    this.context = t;
    this.taskProvider = n;
    this.taskTree = null;
    this._onDidChangeTreeData = new B.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    let i = t.subscriptions;
    this.extensionContext = t, i.push(B.commands.registerCommand("npm.runScript", this.runScript, this)), i.push(B.commands.registerCommand("npm.debugScript", this.debugScript, this)), i.push(B.commands.registerCommand("npm.openScript", this.openScript, this)), i.push(B.commands.registerCommand("npm.runInstall", this.runInstall, this));
  }
  async runScript(t) {
    await _n(t.getFolder().uri, this.context, true), B.tasks.executeTask(t.task);
  }
  async debugScript(t) {
    On(this.extensionContext, t.task.definition.script, et.dirname(t.package.resourceUri.fsPath), t.getFolder());
  }
  findScriptPosition(t, n) {
    let i = Pe(t);
    return i ? n ? i.scripts.find((o) => qt(o.name, n.task.definition.path) === n.task.name)?.nameRange.start : i.location.range.start : void 0;
  }
  async runInstall(t) {
    let n;
    if (t instanceof Xe && (n = t.resourceUri), !n) return;
    let i = await Cn(this.context, t.folder.workspaceFolder, n);
    B.tasks.executeTask(i);
  }
  async openScript(t) {
    let n;
    if (t instanceof Xe ? n = t.resourceUri : t instanceof Ze && (n = t.package.resourceUri), !n) return;
    let i = await B.workspace.openTextDocument(n), r = this.findScriptPosition(i, t instanceof Ze ? t : void 0) || new B.Position(0, 0);
    await B.window.showTextDocument(i, { preserveFocus: true, selection: new B.Selection(r, r) });
  }
  refresh() {
    this.taskTree = null, this._onDidChangeTreeData.fire(null);
  }
  getTreeItem(t) {
    return t;
  }
  getParent(t) {
    return t instanceof Bt ? null : t instanceof Xe ? t.folder : t instanceof Ze ? t.package : (t instanceof Gt, null);
  }
  async getChildren(t) {
    if (!this.taskTree) {
      let n = await this.taskProvider.tasksWithLocation;
      if (n) {
        let i = this.buildTaskTree(n);
        if (this.taskTree = this.sortTaskTree(i), this.taskTree.length === 0) {
          let r = B.l10n.t("No scripts found.");
          Br() || (r = B.l10n.t('The setting "npm.autoDetect" is "off".')), this.taskTree = [new Gt(r)];
        }
      }
    }
    return t instanceof Bt ? t.packages : t instanceof Xe ? t.scripts : t instanceof Ze ? [] : t instanceof Gt ? [] : !t && this.taskTree ? this.taskTree : [];
  }
  isInstallTask(t) {
    return qt("install", t.definition.path) === t.name;
  }
  getTaskTreeItemLabel(t) {
    return t === void 0 ? "" : typeof t == "string" ? t : t.label;
  }
  sortTaskTree(t) {
    return t.sort((n, i) => {
      let r = this.getTaskTreeItemLabel(n.label), o = this.getTaskTreeItemLabel(i.label);
      return r.localeCompare(o);
    });
  }
  buildTaskTree(t) {
    let n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = null, o = null, s = /* @__PURE__ */ new Map();
    return t.forEach((a) => {
      let u = a.location;
      if (u && !s.has(u.uri.toString())) {
        let c = B.workspace.getConfiguration("npm", u.uri).get("scriptExplorerExclude", []);
        s.set(u.uri.toString(), c?.map((f) => RegExp(f)));
      }
      let l = u && s.has(u.uri.toString()) ? s.get(u.uri.toString()) : void 0;
      if (!(l && l.some((c) => a.task.definition.script.match(c))) && _u(a.task.scope) && !this.isInstallTask(a.task)) {
        r = n.get(a.task.scope.name), r || (r = new Bt(a.task.scope), n.set(a.task.scope.name, r));
        let c = a.task.definition, f = c.path ? c.path : "", p = et.join(a.task.scope.name, f);
        o = i.get(p), o || (o = new Xe(r, f), r.addPackage(o), i.set(p, o));
        let d = new Ze(this.extensionContext, o, a);
        o.addScript(d);
      }
    }), n.size === 1 ? [...i.values()] : [...n.values()];
  }
};
var Hu = require("path"), oe = require("vscode");
var wt, ju;
function Gr(e2) {
  if (!e2) {
    wt = void 0;
    return;
  }
  e2.uri === wt && (wt = void 0);
}
var In = class {
  constructor(t) {
    this.context = t;
    t.subscriptions.push(oe.commands.registerCommand("npm.runScriptFromHover", this.runScriptFromHover, this)), t.subscriptions.push(oe.commands.registerCommand("npm.debugScriptFromHover", this.debugScriptFromHover, this)), t.subscriptions.push(oe.workspace.onDidChangeTextDocument((i) => {
      Gr(i.document);
    }));
    let n = () => oe.workspace.getConfiguration("npm").get("scriptHover", true);
    this.enabled = n(), t.subscriptions.push(oe.workspace.onDidChangeConfiguration((i) => {
      i.affectsConfiguration("npm.scriptHover") && (this.enabled = n());
    }));
  }
  provideHover(t, n, i) {
    if (!this.enabled) return;
    let r;
    return (!wt || wt.fsPath !== t.uri.fsPath) && (ju = Pe(t), wt = t.uri), ju?.scripts.forEach(({ name: o, nameRange: s }) => {
      if (s.contains(n)) {
        let a = new oe.MarkdownString();
        a.isTrusted = true, a.appendMarkdown(this.createRunScriptMarkdown(o, t.uri)), a.appendMarkdown(this.createDebugScriptMarkdown(o, t.uri)), r = new oe.Hover(a);
      }
    }), r;
  }
  createRunScriptMarkdown(t, n) {
    let i = { documentUri: n, script: t };
    return this.createMarkdownLink(oe.l10n.t("Run Script"), "npm.runScriptFromHover", i, oe.l10n.t("Run the script as a task"));
  }
  createDebugScriptMarkdown(t, n) {
    let i = { documentUri: n, script: t };
    return this.createMarkdownLink(oe.l10n.t("Debug Script"), "npm.debugScriptFromHover", i, oe.l10n.t("Runs the script under the debugger"), "|");
  }
  createMarkdownLink(t, n, i, r, o) {
    let s = encodeURIComponent(JSON.stringify(i)), a = "";
    return o && (a = ` ${o} `), `${a}[${t}](command:${n}?${s} "${r}")`;
  }
  async runScriptFromHover(t) {
    let n = t.script, i = t.documentUri, r = oe.workspace.getWorkspaceFolder(i);
    if (r) {
      let o = await Ut(this.context, n, r, i);
      await oe.tasks.executeTask(o);
    }
  }
  debugScriptFromHover(t) {
    let n = t.script, i = t.documentUri, r = oe.workspace.getWorkspaceFolder(i);
    r && On(this.context, n, (0, Hu.dirname)(i.fsPath), r);
  }
};
var qu = ye(require("path")), he = require("vscode");
var $u = () => he.workspace.getConfiguration().get("debug.javascript.codelens.npmScripts"), Nn = class {
  constructor() {
    this.lensLocation = $u();
    this.changeEmitter = new he.EventEmitter();
    this.subscriptions = [];
    this.onDidChangeCodeLenses = this.changeEmitter.event;
    this.subscriptions.push(this.changeEmitter, he.workspace.onDidChangeConfiguration((t) => {
      t.affectsConfiguration("debug.javascript.codelens.npmScripts") && (this.lensLocation = $u(), this.changeEmitter.fire());
    }), he.languages.registerCodeLensProvider({ language: "json", pattern: "**/package.json" }, this));
  }
  async provideCodeLenses(t) {
    if (this.lensLocation === "never") return [];
    let n = Pe(t);
    if (!n) return [];
    let i = "$(debug-start) " + he.l10n.t("Debug"), r = qu.dirname(t.uri.fsPath);
    if (this.lensLocation === "top") return [new he.CodeLens(n.location.range, { title: i, command: "extension.js-debug.npmScript", arguments: [r] })];
    if (this.lensLocation === "all") {
      let o = he.Uri.joinPath(t.uri, "..");
      return Promise.all(n.scripts.map(async ({ name: s, nameRange: a }) => {
        let u = await Rn(s, o);
        return new he.CodeLens(a, { title: i, command: "extension.js-debug.createDebuggerTerminal", arguments: [u.join(" "), he.workspace.getWorkspaceFolder(t.uri), { cwd: r }] });
      }));
    }
    return [];
  }
  dispose() {
    this.subscriptions.forEach((t) => t.dispose());
  }
};
var fc = ye(cc()), tt;
function Wt() {
  Gr(), $r(), tt && tt.refresh();
}
async function ng(e2) {
  lc(), e2.subscriptions.push(z.workspace.onDidChangeConfiguration((n) => {
    (n.affectsConfiguration("http.proxy") || n.affectsConfiguration("http.proxyStrictSSL")) && lc();
  }));
  let t = await rg();
  e2.subscriptions.push(si(Fn.xhr, t)), og(e2), tt = sg(e2), e2.subscriptions.push(z.workspace.onDidChangeConfiguration((n) => {
    (n.affectsConfiguration("npm.exclude") || n.affectsConfiguration("npm.autoDetect") || n.affectsConfiguration("npm.scriptExplorerExclude") || n.affectsConfiguration("npm.runSilent") || n.affectsConfiguration("npm.packageManager") || n.affectsConfiguration("npm.scriptRunner")) && ($r(), tt && tt.refresh()), n.affectsConfiguration("npm.scriptExplorerAction") && tt && tt.refresh();
  })), ag(e2), e2.subscriptions.push(z.commands.registerCommand("npm.runSelectedScript", Mu)), await Lu() && z.commands.executeCommand("setContext", "npm:showScriptExplorer", true), e2.subscriptions.push(z.commands.registerCommand("npm.runScriptFromFolder", Du)), e2.subscriptions.push(z.commands.registerCommand("npm.refresh", () => {
    Wt();
  })), e2.subscriptions.push(z.commands.registerCommand("npm.scriptRunner", (n) => n instanceof z.Uri ? qr(n, e2, true) : "")), e2.subscriptions.push(z.commands.registerCommand("npm.packageManager", (n) => n instanceof z.Uri ? Ur(n, e2, true) : "")), e2.subscriptions.push(new Nn()), e2.subscriptions.push(z.window.registerTerminalQuickFixProvider("ms-vscode.npm-command", { provideTerminalQuickFixes({ outputMatch: n }) {
    if (!n) return;
    let i = n.regexMatch[1], r = [];
    for (let o of i.split(`
`)) {
      let s = o.indexOf("npm", 1);
      if (s === -1) continue;
      let a = o.lastIndexOf("#");
      r.push({ terminalCommand: o.slice(s, a === -1 ? void 0 : a - 1) });
    }
    return r;
  } }));
}
async function rg() {
  if (z.workspace.isTrusted && ig()) try {
    return await (0, fc.default)(process.platform === "win32" ? "npm.cmd" : "npm");
  } catch {
    return;
  }
}
function ig() {
  return z.workspace.workspaceFolders ? z.workspace.workspaceFolders.some((e2) => e2.uri.scheme === "file") : false;
}
var Wr;
function og(e2) {
  if (z.workspace.workspaceFolders) {
    let t = z.workspace.createFileSystemWatcher("**/package.json");
    t.onDidChange((r) => Wt()), t.onDidDelete((r) => Wt()), t.onDidCreate((r) => Wt()), e2.subscriptions.push(t);
    let n = z.workspace.onDidChangeWorkspaceFolders((r) => Wt());
    e2.subscriptions.push(n), Wr = new Tn(e2);
    let i = z.tasks.registerTaskProvider("npm", Wr);
    return e2.subscriptions.push(i), i;
  }
}
function sg(e2) {
  if (z.workspace.workspaceFolders) {
    let t = new Ln(e2, Wr), n = z.window.createTreeView("npm", { treeDataProvider: t, showCollapseAll: true });
    return e2.subscriptions.push(n), t;
  }
}
function ag(e2) {
  if (z.workspace.workspaceFolders) {
    let t = { language: "json", scheme: "file", pattern: "**/package.json" }, n = new In(e2);
    return e2.subscriptions.push(z.languages.registerHoverProvider(t, n)), n;
  }
}
function lc() {
  let e2 = z.workspace.getConfiguration("http");
  Fn.configure(e2.get("proxy", ""), e2.get("proxyStrictSSL", true));
}
function ug() {
}
/*! Bundled license information:

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
