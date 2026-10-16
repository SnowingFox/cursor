import { createRequire } from "module";
const require = createRequire(import.meta.url);
var Lt = Object.create;
var J = Object.defineProperty;
var er = Object.getOwnPropertyDescriptor;
var jt = Object.getOwnPropertyNames;
var It = Object.getPrototypeOf, Ht = Object.prototype.hasOwnProperty;
var A = ((r) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : r)(function(r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
var h = (r, e) => () => (r && (e = r(r = 0)), e);
var ve = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), rr = (r, e) => {
  for (var t in e) J(r, t, { get: e[t], enumerable: true });
}, xt = (r, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of jt(e)) !Ht.call(r, o) && o !== t && J(r, o, { get: () => e[o], enumerable: !(s = er(e, o)) || s.enumerable });
  return r;
};
var tr = (r, e, t) => (t = r != null ? Lt(It(r)) : {}, xt(e || !r || !r.__esModule ? J(t, "default", { value: r, enumerable: true }) : t, r));
var sr = (r, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? er(e, t) : e, i = r.length - 1, n; i >= 0; i--) (n = r[i]) && (o = (s ? n(e, t, o) : n(o)) || o);
  return s && o && J(e, t, o), o;
};
var ar = ve((I) => {
  "use strict";
  var Uo = A("net"), $t = A("tls"), Ge = A("http"), or = A("https"), qt = A("events"), Fo = A("assert"), Nt = A("util");
  I.httpOverHttp = Bt;
  I.httpsOverHttp = Mt;
  I.httpOverHttps = Wt;
  I.httpsOverHttps = zt;
  function Bt(r) {
    var e = new P(r);
    return e.request = Ge.request, e;
  }
  function Mt(r) {
    var e = new P(r);
    return e.request = Ge.request, e.createSocket = nr, e.defaultPort = 443, e;
  }
  function Wt(r) {
    var e = new P(r);
    return e.request = or.request, e;
  }
  function zt(r) {
    var e = new P(r);
    return e.request = or.request, e.createSocket = nr, e.defaultPort = 443, e;
  }
  function P(r) {
    var e = this;
    e.options = r || {}, e.proxyOptions = e.options.proxy || {}, e.maxSockets = e.options.maxSockets || Ge.Agent.defaultMaxSockets, e.requests = [], e.sockets = [], e.on("free", function(s, o, i, n) {
      for (var a = ir(o, i, n), p = 0, c = e.requests.length; p < c; ++p) {
        var l = e.requests[p];
        if (l.host === a.host && l.port === a.port) {
          e.requests.splice(p, 1), l.request.onSocket(s);
          return;
        }
      }
      s.destroy(), e.removeSocket(s);
    });
  }
  Nt.inherits(P, qt.EventEmitter);
  P.prototype.addRequest = function(e, t, s, o) {
    var i = this, n = Pe({ request: e }, i.options, ir(t, s, o));
    if (i.sockets.length >= this.maxSockets) {
      i.requests.push(n);
      return;
    }
    i.createSocket(n, function(a) {
      a.on("free", p), a.on("close", c), a.on("agentRemove", c), e.onSocket(a);
      function p() {
        i.emit("free", a, n);
      }
      function c(l) {
        i.removeSocket(a), a.removeListener("free", p), a.removeListener("close", c), a.removeListener("agentRemove", c);
      }
    });
  };
  P.prototype.createSocket = function(e, t) {
    var s = this, o = {};
    s.sockets.push(o);
    var i = Pe({}, s.proxyOptions, { method: "CONNECT", path: e.host + ":" + e.port, agent: false, headers: { host: e.host + ":" + e.port } });
    e.localAddress && (i.localAddress = e.localAddress), i.proxyAuth && (i.headers = i.headers || {}, i.headers["Proxy-Authorization"] = "Basic " + new Buffer(i.proxyAuth).toString("base64")), k("making CONNECT request");
    var n = s.request(i);
    n.useChunkedEncodingByDefault = false, n.once("response", a), n.once("upgrade", p), n.once("connect", c), n.once("error", l), n.end();
    function a(u) {
      u.upgrade = true;
    }
    function p(u, d, E) {
      process.nextTick(function() {
        c(u, d, E);
      });
    }
    function c(u, d, E) {
      if (n.removeAllListeners(), d.removeAllListeners(), u.statusCode !== 200) {
        k("tunneling socket could not be established, statusCode=%d", u.statusCode), d.destroy();
        var g = new Error("tunneling socket could not be established, statusCode=" + u.statusCode);
        g.code = "ECONNRESET", e.request.emit("error", g), s.removeSocket(o);
        return;
      }
      if (E.length > 0) {
        k("got illegal response body from proxy"), d.destroy();
        var g = new Error("got illegal response body from proxy");
        g.code = "ECONNRESET", e.request.emit("error", g), s.removeSocket(o);
        return;
      }
      return k("tunneling connection has established"), s.sockets[s.sockets.indexOf(o)] = d, t(d);
    }
    function l(u) {
      n.removeAllListeners(), k(`tunneling socket could not be established, cause=%s
`, u.message, u.stack);
      var d = new Error("tunneling socket could not be established, cause=" + u.message);
      d.code = "ECONNRESET", e.request.emit("error", d), s.removeSocket(o);
    }
  };
  P.prototype.removeSocket = function(e) {
    var t = this.sockets.indexOf(e);
    if (t !== -1) {
      this.sockets.splice(t, 1);
      var s = this.requests.shift();
      s && this.createSocket(s, function(o) {
        s.request.onSocket(o);
      });
    }
  };
  function nr(r, e) {
    var t = this;
    P.prototype.createSocket.call(t, r, function(s) {
      var o = r.request.getHeader("host"), i = Pe({}, t.options, { socket: s, servername: o ? o.replace(/:.*$/, "") : r.host }), n = $t.connect(0, i);
      t.sockets[t.sockets.indexOf(s)] = n, e(n);
    });
  }
  function ir(r, e, t) {
    return typeof r == "string" ? { host: r, port: e, localAddress: t } : r;
  }
  function Pe(r) {
    for (var e = 1, t = arguments.length; e < t; ++e) {
      var s = arguments[e];
      if (typeof s == "object") for (var o = Object.keys(s), i = 0, n = o.length; i < n; ++i) {
        var a = o[i];
        s[a] !== void 0 && (r[a] = s[a]);
      }
    }
    return r;
  }
  var k;
  process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? k = function() {
    var r = Array.prototype.slice.call(arguments);
    typeof r[0] == "string" ? r[0] = "TUNNEL: " + r[0] : r.unshift("TUNNEL:"), console.error.apply(console, r);
  } : k = function() {
  };
  I.debug = k;
});
var pr = ve((Lo, cr) => {
  cr.exports = ar();
});
function X() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var ke = h(() => {
});
function Z(r, e, t, s) {
  if (typeof t != "function") throw new Error("method for before hook must be a function");
  return s || (s = {}), Array.isArray(e) ? e.reverse().reduce((o, i) => Z.bind(null, r, i, o, s), t)() : Promise.resolve().then(() => r.registry[e] ? r.registry[e].reduce((o, i) => i.hook.bind(null, o, s), t)() : t(s));
}
var ur = h(() => {
});
function lr(r, e, t, s) {
  let o = s;
  r.registry[t] || (r.registry[t] = []), e === "before" && (s = (i, n) => Promise.resolve().then(o.bind(null, n)).then(i.bind(null, n))), e === "after" && (s = (i, n) => {
    let a;
    return Promise.resolve().then(i.bind(null, n)).then((p) => (a = p, o(a, n))).then(() => a);
  }), e === "error" && (s = (i, n) => Promise.resolve().then(i.bind(null, n)).catch((a) => o(a, n))), r.registry[t].push({ hook: s, orig: o });
}
var dr = h(() => {
});
function gr(r, e, t) {
  if (!r.registry[e]) return;
  let s = r.registry[e].map((o) => o.orig).indexOf(t);
  s !== -1 && r.registry[e].splice(s, 1);
}
var mr = h(() => {
});
function Tr(r, e, t) {
  let s = Er(gr, null).apply(null, t ? [e, t] : [e]);
  r.api = { remove: s }, r.remove = s, ["before", "error", "after", "wrap"].forEach((o) => {
    let i = t ? [e, o, t] : [e, o];
    r[o] = r.api[o] = Er(lr, null).apply(null, i);
  });
}
function Vt() {
  let r = /* @__PURE__ */ Symbol("Singular"), e = { registry: {} }, t = Z.bind(null, e, r);
  return Tr(t, e, r), t;
}
function Kt() {
  let r = { registry: {} }, e = Z.bind(null, r);
  return Tr(e, r), e;
}
var hr, Er, fr, br = h(() => {
  ur();
  dr();
  mr();
  hr = Function.bind, Er = hr.bind(hr);
  fr = { Singular: Vt, Collection: Kt };
});
function ee() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var Re = h(() => {
});
function Xt(r) {
  return r ? Object.keys(r).reduce((e, t) => (e[t.toLowerCase()] = r[t], e), {}) : {};
}
function Zt(r) {
  if (typeof r != "object" || r === null || Object.prototype.toString.call(r) !== "[object Object]") return false;
  let e = Object.getPrototypeOf(r);
  if (e === null) return true;
  let t = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && Function.prototype.call(t) === Function.prototype.call(r);
}
function yr(r, e) {
  let t = Object.assign({}, r);
  return Object.keys(e).forEach((s) => {
    Zt(e[s]) ? s in r ? t[s] = yr(r[s], e[s]) : Object.assign(t, { [s]: e[s] }) : Object.assign(t, { [s]: e[s] });
  }), t;
}
function wr(r) {
  for (let e in r) r[e] === void 0 && delete r[e];
  return r;
}
function Se(r, e, t) {
  if (typeof e == "string") {
    let [o, i] = e.split(" ");
    t = Object.assign(i ? { method: o, url: i } : { url: o }, t);
  } else t = Object.assign({}, e);
  t.headers = Xt(t.headers), wr(t), wr(t.headers);
  let s = yr(r || {}, t);
  return t.url === "/graphql" && (r && r.mediaType.previews?.length && (s.mediaType.previews = r.mediaType.previews.filter((o) => !s.mediaType.previews.includes(o)).concat(s.mediaType.previews)), s.mediaType.previews = (s.mediaType.previews || []).map((o) => o.replace(/-preview/, ""))), s;
}
function es(r, e) {
  let t = /\?/.test(r) ? "&" : "?", s = Object.keys(e);
  return s.length === 0 ? r : r + t + s.map((o) => o === "q" ? "q=" + e.q.split("+").map(encodeURIComponent).join("+") : `${o}=${encodeURIComponent(e[o])}`).join("&");
}
function ts(r) {
  return r.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function ss(r) {
  let e = r.match(rs);
  return e ? e.map(ts).reduce((t, s) => t.concat(s), []) : [];
}
function _r(r, e) {
  let t = { __proto__: null };
  for (let s of Object.keys(r)) e.indexOf(s) === -1 && (t[s] = r[s]);
  return t;
}
function vr(r) {
  return r.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e;
  }).join("");
}
function x(r) {
  return encodeURIComponent(r).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function W(r, e, t) {
  return e = r === "+" || r === "#" ? vr(e) : x(e), t ? x(t) + "=" + e : e;
}
function H(r) {
  return r != null;
}
function Ae(r) {
  return r === ";" || r === "&" || r === "?";
}
function os(r, e, t, s) {
  var o = r[t], i = [];
  if (H(o) && o !== "") if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") o = o.toString(), s && s !== "*" && (o = o.substring(0, parseInt(s, 10))), i.push(W(e, o, Ae(e) ? t : ""));
  else if (s === "*") Array.isArray(o) ? o.filter(H).forEach(function(n) {
    i.push(W(e, n, Ae(e) ? t : ""));
  }) : Object.keys(o).forEach(function(n) {
    H(o[n]) && i.push(W(e, o[n], n));
  });
  else {
    let n = [];
    Array.isArray(o) ? o.filter(H).forEach(function(a) {
      n.push(W(e, a));
    }) : Object.keys(o).forEach(function(a) {
      H(o[a]) && (n.push(x(a)), n.push(W(e, o[a].toString())));
    }), Ae(e) ? i.push(x(t) + "=" + n.join(",")) : n.length !== 0 && i.push(n.join(","));
  }
  else e === ";" ? H(o) && i.push(x(t)) : o === "" && (e === "&" || e === "?") ? i.push(x(t) + "=") : o === "" && i.push("");
  return i;
}
function ns(r) {
  return { expand: is.bind(null, r) };
}
function is(r, e) {
  var t = ["+", "#", ".", "/", ";", "?", "&"];
  return r = r.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(s, o, i) {
    if (o) {
      let a = "", p = [];
      if (t.indexOf(o.charAt(0)) !== -1 && (a = o.charAt(0), o = o.substr(1)), o.split(/,/g).forEach(function(c) {
        var l = /([^:\*]*)(?::(\d+)|(\*))?/.exec(c);
        p.push(os(e, a, l[1], l[2] || l[3]));
      }), a && a !== "+") {
        var n = ",";
        return a === "?" ? n = "&" : a !== "#" && (n = a), (p.length !== 0 ? a : "") + p.join(n);
      } else return p.join(",");
    } else return vr(i);
  }), r === "/" ? r : r.replace(/\/$/, "");
}
function Gr(r) {
  let e = r.method.toUpperCase(), t = (r.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), s = Object.assign({}, r.headers), o, i = _r(r, ["method", "baseUrl", "url", "headers", "request", "mediaType"]), n = ss(t);
  t = ns(t).expand(i), /^http/.test(t) || (t = r.baseUrl + t);
  let a = Object.keys(r).filter((l) => n.includes(l)).concat("baseUrl"), p = _r(i, a);
  if (!/application\/octet-stream/i.test(s.accept) && (r.mediaType.format && (s.accept = s.accept.split(/,/).map((l) => l.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${r.mediaType.format}`)).join(",")), t.endsWith("/graphql") && r.mediaType.previews?.length)) {
    let l = s.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
    s.accept = l.concat(r.mediaType.previews).map((u) => {
      let d = r.mediaType.format ? `.${r.mediaType.format}` : "+json";
      return `application/vnd.github.${u}-preview${d}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(e) ? t = es(t, p) : "data" in p ? o = p.data : Object.keys(p).length && (o = p), !s["content-type"] && typeof o < "u" && (s["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(e) && typeof o > "u" && (o = ""), Object.assign({ method: e, url: t, headers: s }, typeof o < "u" ? { body: o } : null, r.request ? { request: r.request } : null);
}
function as(r, e, t) {
  return Gr(Se(r, e, t));
}
function Pr(r, e) {
  let t = Se(r, e), s = as.bind(null, t);
  return Object.assign(s, { DEFAULTS: t, defaults: Pr.bind(null, t), merge: Se.bind(null, t), parse: Gr });
}
var Qt, Yt, Jt, rs, kr, Rr = h(() => {
  Re();
  Qt = "0.0.0-development", Yt = `octokit-endpoint.js/${Qt} ${ee()}`, Jt = { method: "GET", baseUrl: "https://api.github.com", headers: { accept: "application/vnd.github.v3+json", "user-agent": Yt }, mediaType: { format: "" } };
  rs = /\{[^{}}]+\}/g;
  kr = Pr(null, Jt);
});
var Cr = ve((Vo, z) => {
  "use strict";
  var se = function() {
  };
  se.prototype = /* @__PURE__ */ Object.create(null);
  var re = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu, te = /\\([\v\u0020-\u00ff])/gu, Ar = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u, S = { type: "", parameters: new se() };
  Object.freeze(S.parameters);
  Object.freeze(S);
  function Sr(r) {
    if (typeof r != "string") throw new TypeError("argument header is required and must be a string");
    let e = r.indexOf(";"), t = e !== -1 ? r.slice(0, e).trim() : r.trim();
    if (Ar.test(t) === false) throw new TypeError("invalid media type");
    let s = { type: t.toLowerCase(), parameters: new se() };
    if (e === -1) return s;
    let o, i, n;
    for (re.lastIndex = e; i = re.exec(r); ) {
      if (i.index !== e) throw new TypeError("invalid parameter format");
      e += i[0].length, o = i[1].toLowerCase(), n = i[2], n[0] === '"' && (n = n.slice(1, n.length - 1), te.test(n) && (n = n.replace(te, "$1"))), s.parameters[o] = n;
    }
    if (e !== r.length) throw new TypeError("invalid parameter format");
    return s;
  }
  function Or(r) {
    if (typeof r != "string") return S;
    let e = r.indexOf(";"), t = e !== -1 ? r.slice(0, e).trim() : r.trim();
    if (Ar.test(t) === false) return S;
    let s = { type: t.toLowerCase(), parameters: new se() };
    if (e === -1) return s;
    let o, i, n;
    for (re.lastIndex = e; i = re.exec(r); ) {
      if (i.index !== e) return S;
      e += i[0].length, o = i[1].toLowerCase(), n = i[2], n[0] === '"' && (n = n.slice(1, n.length - 1), te.test(n) && (n = n.replace(te, "$1"))), s.parameters[o] = n;
    }
    return e !== r.length ? S : s;
  }
  z.exports.default = { parse: Sr, safeParse: Or };
  z.exports.parse = Sr;
  z.exports.safeParse = Or;
  z.exports.defaultContentType = S;
});
var O, Ur = h(() => {
  O = class extends Error {
    name;
    status;
    request;
    response;
    constructor(e, t, s) {
      super(e), this.name = "HttpError", this.status = Number.parseInt(t), Number.isNaN(this.status) && (this.status = 0), "response" in s && (this.response = s.response);
      let o = Object.assign({}, s.request);
      s.request.headers.authorization && (o.headers = Object.assign({}, s.request.headers, { authorization: s.request.headers.authorization.replace(/(?<! ) .*$/, " [REDACTED]") })), o.url = o.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = o;
    }
  };
});
function us(r) {
  if (typeof r != "object" || r === null || Object.prototype.toString.call(r) !== "[object Object]") return false;
  let e = Object.getPrototypeOf(r);
  if (e === null) return true;
  let t = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && Function.prototype.call(t) === Function.prototype.call(r);
}
async function Fr(r) {
  let e = r.request?.fetch || globalThis.fetch;
  if (!e) throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
  let t = r.request?.log || console, s = r.request?.parseSuccessResponseBody !== false, o = us(r.body) || Array.isArray(r.body) ? JSON.stringify(r.body) : r.body, i = Object.fromEntries(Object.entries(r.headers).map(([u, d]) => [u, String(d)])), n;
  try {
    n = await e(r.url, { method: r.method, body: o, redirect: r.request?.redirect, headers: i, signal: r.request?.signal, ...r.body && { duplex: "half" } });
  } catch (u) {
    let d = "Unknown Error";
    if (u instanceof Error) {
      if (u.name === "AbortError") throw u.status = 500, u;
      d = u.message, u.name === "TypeError" && "cause" in u && (u.cause instanceof Error ? d = u.cause.message : typeof u.cause == "string" && (d = u.cause));
    }
    let E = new O(d, 500, { request: r });
    throw E.cause = u, E;
  }
  let a = n.status, p = n.url, c = {};
  for (let [u, d] of n.headers) c[u] = d;
  let l = { url: p, status: a, headers: c, data: "" };
  if ("deprecation" in c) {
    let u = c.link && c.link.match(/<([^<>]+)>; rel="deprecation"/), d = u && u.pop();
    t.warn(`[@octokit/request] "${r.method} ${r.url}" is deprecated. It is scheduled to be removed on ${c.sunset}${d ? `. See ${d}` : ""}`);
  }
  if (a === 204 || a === 205) return l;
  if (r.method === "HEAD") {
    if (a < 400) return l;
    throw new O(n.statusText, a, { response: l, request: r });
  }
  if (a === 304) throw l.data = await Oe(n), new O("Not modified", a, { response: l, request: r });
  if (a >= 400) throw l.data = await Oe(n), new O(ds(l.data), a, { response: l, request: r });
  return l.data = s ? await Oe(n) : n.body, l;
}
async function Oe(r) {
  let e = r.headers.get("content-type");
  if (!e) return r.text().catch(() => "");
  let t = (0, Dr.safeParse)(e);
  if (ls(t)) {
    let s = "";
    try {
      return s = await r.text(), JSON.parse(s);
    } catch {
      return s;
    }
  } else return t.type.startsWith("text/") || t.parameters.charset?.toLowerCase() === "utf-8" ? r.text().catch(() => "") : r.arrayBuffer().catch(() => new ArrayBuffer(0));
}
function ls(r) {
  return r.type === "application/json" || r.type === "application/scim+json";
}
function ds(r) {
  if (typeof r == "string") return r;
  if (r instanceof ArrayBuffer) return "Unknown error";
  if ("message" in r) {
    let e = "documentation_url" in r ? ` - ${r.documentation_url}` : "";
    return Array.isArray(r.errors) ? `${r.message}: ${r.errors.map((t) => JSON.stringify(t)).join(", ")}${e}` : `${r.message}${e}`;
  }
  return `Unknown error: ${JSON.stringify(r)}`;
}
function Ce(r, e) {
  let t = r.defaults(e);
  return Object.assign(function(o, i) {
    let n = t.merge(o, i);
    if (!n.request || !n.request.hook) return Fr(t.parse(n));
    let a = (p, c) => Fr(t.parse(t.merge(p, c)));
    return Object.assign(a, { endpoint: t, defaults: Ce.bind(null, t) }), n.request.hook(a, n);
  }, { endpoint: t, defaults: Ce.bind(null, t) });
}
var Dr, cs, ps, C, oe = h(() => {
  Rr();
  Re();
  Dr = tr(Cr(), 1);
  Ur();
  cs = "9.2.4", ps = { headers: { "user-agent": `octokit-request.js/${cs} ${ee()}` } };
  C = Ce(kr, ps);
});
function ms(r) {
  return `Request failed due to following response errors:
` + r.errors.map((e) => ` - ${e.message}`).join(`
`);
}
function fs(r, e, t) {
  if (t) {
    if (typeof e == "string" && "query" in t) return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
    for (let n in t) if (Ts.includes(n)) return Promise.reject(new Error(`[@octokit/graphql] "${n}" cannot be used as variable name`));
  }
  let s = typeof e == "string" ? Object.assign({ query: e }, t) : e, o = Object.keys(s).reduce((n, a) => Es.includes(a) ? (n[a] = s[a], n) : (n.variables || (n.variables = {}), n.variables[a] = s[a], n), {}), i = s.baseUrl || r.endpoint.DEFAULTS.baseUrl;
  return Lr.test(i) && (o.url = i.replace(Lr, "/api/graphql")), r(o).then((n) => {
    if (n.data.errors) {
      let a = {};
      for (let p of Object.keys(n.headers)) a[p] = n.headers[p];
      throw new hs(o, a, n.data);
    }
    return n.data.data;
  });
}
function Ue(r, e) {
  let t = r.defaults(e);
  return Object.assign((o, i) => fs(t, o, i), { defaults: Ue.bind(null, t), endpoint: t.endpoint });
}
function jr(r) {
  return Ue(r, { method: "POST", url: "/graphql" });
}
var gs, hs, Es, Ts, Lr, rn, Ir = h(() => {
  oe();
  ke();
  gs = "0.0.0-development";
  hs = class extends Error {
    constructor(r, e, t) {
      super(ms(t)), this.request = r, this.headers = e, this.response = t, this.errors = t.errors, this.data = t.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
    name = "GraphqlResponseError";
    errors;
    data;
  }, Es = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType", "operationName"], Ts = ["query", "method", "url"], Lr = /\/api\/v3\/?$/;
  rn = Ue(C, { headers: { "user-agent": `octokit-graphql.js/${gs} ${X()}` }, method: "POST", url: "/graphql" });
});
async function ws(r) {
  let e = bs(r), t = r.startsWith("v1.") || r.startsWith("ghs_"), s = r.startsWith("ghu_");
  return { type: "token", token: r, tokenType: e ? "app" : t ? "installation" : s ? "user-to-server" : "oauth" };
}
function _s(r) {
  return r.split(/\./).length === 3 ? `bearer ${r}` : `token ${r}`;
}
async function ys(r, e, t, s) {
  let o = e.endpoint.merge(t, s);
  return o.headers.authorization = _s(r), e(o);
}
var Fe, Hr, xr, bs, $r, qr = h(() => {
  Fe = "(?:[a-zA-Z0-9_-]+)", Hr = "\\.", xr = new RegExp(`^${Fe}${Hr}${Fe}${Hr}${Fe}$`), bs = xr.test.bind(xr);
  $r = function(e) {
    if (!e) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    if (typeof e != "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    return e = e.replace(/^(token|bearer) +/i, ""), Object.assign(ws.bind(null, e), { hook: ys.bind(null, e) });
  };
});
var De, Nr = h(() => {
  De = "6.1.6";
});
function Ps(r = {}) {
  return typeof r.debug != "function" && (r.debug = Br), typeof r.info != "function" && (r.info = Br), typeof r.warn != "function" && (r.warn = vs), typeof r.error != "function" && (r.error = Gs), r;
}
var Br, vs, Gs, Mr, ne, Wr = h(() => {
  ke();
  br();
  oe();
  Ir();
  qr();
  Nr();
  Br = () => {
  }, vs = console.warn.bind(console), Gs = console.error.bind(console);
  Mr = `octokit-core.js/${De} ${X()}`, ne = class {
    static VERSION = De;
    static defaults(e) {
      return class extends this {
        constructor(...s) {
          let o = s[0] || {};
          if (typeof e == "function") {
            super(e(o));
            return;
          }
          super(Object.assign({}, e, o, o.userAgent && e.userAgent ? { userAgent: `${o.userAgent} ${e.userAgent}` } : null));
        }
      };
    }
    static plugins = [];
    static plugin(...e) {
      let t = this.plugins;
      return class extends this {
        static plugins = t.concat(e.filter((o) => !t.includes(o)));
      };
    }
    constructor(e = {}) {
      let t = new fr.Collection(), s = { baseUrl: C.endpoint.DEFAULTS.baseUrl, headers: {}, request: Object.assign({}, e.request, { hook: t.bind(null, "request") }), mediaType: { previews: [], format: "" } };
      if (s.headers["user-agent"] = e.userAgent ? `${e.userAgent} ${Mr}` : Mr, e.baseUrl && (s.baseUrl = e.baseUrl), e.previews && (s.mediaType.previews = e.previews), e.timeZone && (s.headers["time-zone"] = e.timeZone), this.request = C.defaults(s), this.graphql = jr(this.request).defaults(s), this.log = Ps(e.log), this.hook = t, e.authStrategy) {
        let { authStrategy: i, ...n } = e, a = i(Object.assign({ request: this.request, log: this.log, octokit: this, octokitOptions: n }, e.auth));
        t.wrap("request", a.hook), this.auth = a;
      } else if (!e.auth) this.auth = async () => ({ type: "unauthenticated" });
      else {
        let i = $r(e.auth);
        t.wrap("request", i.hook), this.auth = i;
      }
      let o = this.constructor;
      for (let i = 0; i < o.plugins.length; ++i) Object.assign(this, o.plugins[i](this, e));
    }
    request;
    graphql;
    log;
    hook;
    auth;
  };
});
var zr, Vr = h(() => {
  zr = "5.3.1";
});
function Le(r) {
  r.hook.wrap("request", (e, t) => {
    r.log.debug("request", t);
    let s = Date.now(), o = r.request.endpoint.parse(t), i = o.url.replace(t.baseUrl, "");
    return e(t).then((n) => {
      let a = n.headers["x-github-request-id"];
      return r.log.info(`${o.method} ${i} - ${n.status} with id ${a} in ${Date.now() - s}ms`), n;
    }).catch((n) => {
      let a = n.response?.headers["x-github-request-id"] || "UNKNOWN";
      throw r.log.error(`${o.method} ${i} - ${n.status} with id ${a} in ${Date.now() - s}ms`), n;
    });
  });
}
var Kr = h(() => {
  Vr();
  Le.VERSION = zr;
});
function Rs(r) {
  if (!r.data) return { ...r, data: [] };
  if (!("total_count" in r.data && !("url" in r.data))) return r;
  let t = r.data.incomplete_results, s = r.data.repository_selection, o = r.data.total_count;
  delete r.data.incomplete_results, delete r.data.repository_selection, delete r.data.total_count;
  let i = Object.keys(r.data)[0], n = r.data[i];
  return r.data = n, typeof t < "u" && (r.data.incomplete_results = t), typeof s < "u" && (r.data.repository_selection = s), r.data.total_count = o, r;
}
function je(r, e, t) {
  let s = typeof e == "function" ? e.endpoint(t) : r.request.endpoint(e, t), o = typeof e == "function" ? e : r.request, i = s.method, n = s.headers, a = s.url;
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!a) return { done: true };
    try {
      let p = await o({ method: i, url: a, headers: n }), c = Rs(p);
      return a = ((c.headers.link || "").match(/<([^<>]+)>;\s*rel="next"/) || [])[1], { value: c };
    } catch (p) {
      if (p.status !== 409) throw p;
      return a = "", { value: { status: 200, headers: {}, data: [] } };
    }
  } }) };
}
function Qr(r, e, t, s) {
  return typeof t == "function" && (s = t, t = void 0), Yr(r, [], je(r, e, t)[Symbol.asyncIterator](), s);
}
function Yr(r, e, t, s) {
  return t.next().then((o) => {
    if (o.done) return e;
    let i = false;
    function n() {
      i = true;
    }
    return e = e.concat(s ? s(o.value, n) : o.value.data), i ? e : Yr(r, e, t, s);
  });
}
function Ie(r) {
  return { paginate: Object.assign(Qr.bind(null, r), { iterator: je.bind(null, r) }) };
}
var ks, bn, Jr = h(() => {
  ks = "0.0.0-development";
  bn = Object.assign(Qr, { iterator: je });
  Ie.VERSION = ks;
});
var He, Xr = h(() => {
  He = "13.5.0";
});
var As, Zr, et = h(() => {
  As = { actions: { addCustomLabelsToSelfHostedRunnerForOrg: ["POST /orgs/{org}/actions/runners/{runner_id}/labels"], addCustomLabelsToSelfHostedRunnerForRepo: ["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], addRepoAccessToSelfHostedRunnerGroupInOrg: ["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"], cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"], createEnvironmentVariable: ["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"], createHostedRunnerForOrg: ["POST /orgs/{org}/actions/hosted-runners"], createOrUpdateEnvironmentSecret: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"], createOrgVariable: ["POST /orgs/{org}/actions/variables"], createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"], createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"], createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"], createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"], createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"], createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"], deleteActionsCacheById: ["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"], deleteActionsCacheByKey: ["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"], deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], deleteEnvironmentSecret: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], deleteEnvironmentVariable: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], deleteHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"], deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"], deleteRepoVariable: ["DELETE /repos/{owner}/{repo}/actions/variables/{name}"], deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"], deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"], deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"], deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"], disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"], downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"], downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"], downloadWorkflowRunAttemptLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"], downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"], enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"], forceCancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"], generateRunnerJitconfigForOrg: ["POST /orgs/{org}/actions/runners/generate-jitconfig"], generateRunnerJitconfigForRepo: ["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"], getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"], getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"], getActionsCacheUsageByRepoForOrg: ["GET /orgs/{org}/actions/cache/usage-by-repository"], getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"], getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"], getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"], getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], getCustomOidcSubClaimForRepo: ["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"], getEnvironmentPublicKey: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"], getEnvironmentSecret: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], getEnvironmentVariable: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], getGithubActionsDefaultWorkflowPermissionsOrganization: ["GET /orgs/{org}/actions/permissions/workflow"], getGithubActionsDefaultWorkflowPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/workflow"], getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"], getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"], getHostedRunnerForOrg: ["GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], getHostedRunnersGithubOwnedImagesForOrg: ["GET /orgs/{org}/actions/hosted-runners/images/github-owned"], getHostedRunnersLimitsForOrg: ["GET /orgs/{org}/actions/hosted-runners/limits"], getHostedRunnersMachineSpecsForOrg: ["GET /orgs/{org}/actions/hosted-runners/machine-sizes"], getHostedRunnersPartnerImagesForOrg: ["GET /orgs/{org}/actions/hosted-runners/images/partner"], getHostedRunnersPlatformsForOrg: ["GET /orgs/{org}/actions/hosted-runners/platforms"], getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"], getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"], getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"], getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, { renamed: ["actions", "getGithubActionsPermissionsRepository"] }], getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"], getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"], getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"], getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"], getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"], getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"], getWorkflowAccessToRepository: ["GET /repos/{owner}/{repo}/actions/permissions/access"], getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"], getWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"], getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"], getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"], listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"], listEnvironmentSecrets: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"], listEnvironmentVariables: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"], listGithubHostedRunnersInGroupForOrg: ["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners"], listHostedRunnersForOrg: ["GET /orgs/{org}/actions/hosted-runners"], listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"], listJobsForWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"], listLabelsForSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}/labels"], listLabelsForSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], listOrgSecrets: ["GET /orgs/{org}/actions/secrets"], listOrgVariables: ["GET /orgs/{org}/actions/variables"], listRepoOrganizationSecrets: ["GET /repos/{owner}/{repo}/actions/organization-secrets"], listRepoOrganizationVariables: ["GET /repos/{owner}/{repo}/actions/organization-variables"], listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"], listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"], listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"], listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"], listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"], listSelectedReposForOrgVariable: ["GET /orgs/{org}/actions/variables/{name}/repositories"], listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"], listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"], listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"], listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"], listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"], listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"], reRunJobForWorkflowRun: ["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"], reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"], reRunWorkflowFailedJobs: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"], removeAllCustomLabelsFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"], removeAllCustomLabelsFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], removeCustomLabelFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"], removeCustomLabelFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], reviewCustomGatesForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"], reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"], setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"], setCustomLabelsForSelfHostedRunnerForOrg: ["PUT /orgs/{org}/actions/runners/{runner_id}/labels"], setCustomLabelsForSelfHostedRunnerForRepo: ["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], setCustomOidcSubClaimForRepo: ["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"], setGithubActionsDefaultWorkflowPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions/workflow"], setGithubActionsDefaultWorkflowPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/workflow"], setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"], setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"], setSelectedReposForOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories"], setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"], setWorkflowAccessToRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/access"], updateEnvironmentVariable: ["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], updateHostedRunnerForOrg: ["PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"], updateRepoVariable: ["PATCH /repos/{owner}/{repo}/actions/variables/{name}"] }, activity: { checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"], deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"], deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"], getFeeds: ["GET /feeds"], getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"], getThread: ["GET /notifications/threads/{thread_id}"], getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"], listEventsForAuthenticatedUser: ["GET /users/{username}/events"], listNotificationsForAuthenticatedUser: ["GET /notifications"], listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"], listPublicEvents: ["GET /events"], listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"], listPublicEventsForUser: ["GET /users/{username}/events/public"], listPublicOrgEvents: ["GET /orgs/{org}/events"], listReceivedEventsForUser: ["GET /users/{username}/received_events"], listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"], listRepoEvents: ["GET /repos/{owner}/{repo}/events"], listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"], listReposStarredByAuthenticatedUser: ["GET /user/starred"], listReposStarredByUser: ["GET /users/{username}/starred"], listReposWatchedByUser: ["GET /users/{username}/subscriptions"], listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"], listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"], listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"], markNotificationsAsRead: ["PUT /notifications"], markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"], markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"], markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"], setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"], setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"], starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"], unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"] }, apps: { addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }], addRepoToInstallationForAuthenticatedUser: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"], checkToken: ["POST /applications/{client_id}/token"], createFromManifest: ["POST /app-manifests/{code}/conversions"], createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"], deleteAuthorization: ["DELETE /applications/{client_id}/grant"], deleteInstallation: ["DELETE /app/installations/{installation_id}"], deleteToken: ["DELETE /applications/{client_id}/token"], getAuthenticated: ["GET /app"], getBySlug: ["GET /apps/{app_slug}"], getInstallation: ["GET /app/installations/{installation_id}"], getOrgInstallation: ["GET /orgs/{org}/installation"], getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"], getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"], getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"], getUserInstallation: ["GET /users/{username}/installation"], getWebhookConfigForApp: ["GET /app/hook/config"], getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"], listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"], listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"], listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"], listInstallationRequestsForAuthenticatedApp: ["GET /app/installation-requests"], listInstallations: ["GET /app/installations"], listInstallationsForAuthenticatedUser: ["GET /user/installations"], listPlans: ["GET /marketplace_listing/plans"], listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"], listReposAccessibleToInstallation: ["GET /installation/repositories"], listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"], listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"], listWebhookDeliveries: ["GET /app/hook/deliveries"], redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"], removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }], removeRepoFromInstallationForAuthenticatedUser: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"], resetToken: ["PATCH /applications/{client_id}/token"], revokeInstallationAccessToken: ["DELETE /installation/token"], scopeToken: ["POST /applications/{client_id}/token/scoped"], suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"], unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"], updateWebhookConfigForApp: ["PATCH /app/hook/config"] }, billing: { getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"], getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"], getGithubBillingUsageReportOrg: ["GET /organizations/{org}/settings/billing/usage"], getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"], getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"], getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"], getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"] }, checks: { create: ["POST /repos/{owner}/{repo}/check-runs"], createSuite: ["POST /repos/{owner}/{repo}/check-suites"], get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"], getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"], listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"], listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"], listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"], listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"], rerequestRun: ["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"], rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"], setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"], update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"] }, codeScanning: { commitAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"], createAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], createVariantAnalysis: ["POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"], deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"], deleteCodeqlDatabase: ["DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, { renamedParameters: { alert_id: "alert_number" } }], getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"], getAutofix: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], getCodeqlDatabase: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"], getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"], getVariantAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"], getVariantAnalysisRepoTask: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"], listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"], listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"], listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, { renamed: ["codeScanning", "listAlertInstances"] }], listCodeqlDatabases: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"], listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"], updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"], updateDefaultSetup: ["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"], uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"] }, codeSecurity: { attachConfiguration: ["POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"], attachEnterpriseConfiguration: ["POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"], createConfiguration: ["POST /orgs/{org}/code-security/configurations"], createConfigurationForEnterprise: ["POST /enterprises/{enterprise}/code-security/configurations"], deleteConfiguration: ["DELETE /orgs/{org}/code-security/configurations/{configuration_id}"], deleteConfigurationForEnterprise: ["DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], detachConfiguration: ["DELETE /orgs/{org}/code-security/configurations/detach"], getConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}"], getConfigurationForRepository: ["GET /repos/{owner}/{repo}/code-security-configuration"], getConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations"], getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"], getDefaultConfigurations: ["GET /orgs/{org}/code-security/configurations/defaults"], getDefaultConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/defaults"], getRepositoriesForConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"], getRepositoriesForEnterpriseConfiguration: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"], getSingleConfigurationForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], setConfigurationAsDefault: ["PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"], setConfigurationAsDefaultForEnterprise: ["PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"], updateConfiguration: ["PATCH /orgs/{org}/code-security/configurations/{configuration_id}"], updateEnterpriseConfiguration: ["PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"] }, codesOfConduct: { getAllCodesOfConduct: ["GET /codes_of_conduct"], getConductCode: ["GET /codes_of_conduct/{key}"] }, codespaces: { addRepositoryForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], checkPermissionsForDevcontainer: ["GET /repos/{owner}/{repo}/codespaces/permissions_check"], codespaceMachinesForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/machines"], createForAuthenticatedUser: ["POST /user/codespaces"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], createOrUpdateSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}"], createWithPrForAuthenticatedUser: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"], createWithRepoForAuthenticatedUser: ["POST /repos/{owner}/{repo}/codespaces"], deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"], deleteFromOrganization: ["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], deleteSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}"], exportForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/exports"], getCodespacesForUserInOrg: ["GET /orgs/{org}/members/{username}/codespaces"], getExportDetailsForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/exports/{export_id}"], getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"], getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"], getPublicKeyForAuthenticatedUser: ["GET /user/codespaces/secrets/public-key"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], getSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}"], listDevcontainersInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/devcontainers"], listForAuthenticatedUser: ["GET /user/codespaces"], listInOrganization: ["GET /orgs/{org}/codespaces", {}, { renamedParameters: { org_id: "org" } }], listInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces"], listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"], listRepositoriesForSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}/repositories"], listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], preFlightWithRepoForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/new"], publishForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/publish"], removeRepositoryForSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], repoMachinesForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/machines"], setRepositoriesForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"], stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"], stopInOrganization: ["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"], updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"] }, copilot: { addCopilotSeatsForTeams: ["POST /orgs/{org}/copilot/billing/selected_teams"], addCopilotSeatsForUsers: ["POST /orgs/{org}/copilot/billing/selected_users"], cancelCopilotSeatAssignmentForTeams: ["DELETE /orgs/{org}/copilot/billing/selected_teams"], cancelCopilotSeatAssignmentForUsers: ["DELETE /orgs/{org}/copilot/billing/selected_users"], copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"], copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"], getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"], getCopilotSeatDetailsForUser: ["GET /orgs/{org}/members/{username}/copilot"], listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"], usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"], usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"] }, dependabot: { addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"], getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/dependabot/alerts"], listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"], listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], updateAlert: ["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"] }, dependencyGraph: { createRepositorySnapshot: ["POST /repos/{owner}/{repo}/dependency-graph/snapshots"], diffRange: ["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"], exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"] }, emojis: { get: ["GET /emojis"] }, gists: { checkIsStarred: ["GET /gists/{gist_id}/star"], create: ["POST /gists"], createComment: ["POST /gists/{gist_id}/comments"], delete: ["DELETE /gists/{gist_id}"], deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"], fork: ["POST /gists/{gist_id}/forks"], get: ["GET /gists/{gist_id}"], getComment: ["GET /gists/{gist_id}/comments/{comment_id}"], getRevision: ["GET /gists/{gist_id}/{sha}"], list: ["GET /gists"], listComments: ["GET /gists/{gist_id}/comments"], listCommits: ["GET /gists/{gist_id}/commits"], listForUser: ["GET /users/{username}/gists"], listForks: ["GET /gists/{gist_id}/forks"], listPublic: ["GET /gists/public"], listStarred: ["GET /gists/starred"], star: ["PUT /gists/{gist_id}/star"], unstar: ["DELETE /gists/{gist_id}/star"], update: ["PATCH /gists/{gist_id}"], updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"] }, git: { createBlob: ["POST /repos/{owner}/{repo}/git/blobs"], createCommit: ["POST /repos/{owner}/{repo}/git/commits"], createRef: ["POST /repos/{owner}/{repo}/git/refs"], createTag: ["POST /repos/{owner}/{repo}/git/tags"], createTree: ["POST /repos/{owner}/{repo}/git/trees"], deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"], getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"], getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"], getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"], getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"], getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"], listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"], updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"] }, gitignore: { getAllTemplates: ["GET /gitignore/templates"], getTemplate: ["GET /gitignore/templates/{name}"] }, hostedCompute: { createNetworkConfigurationForOrg: ["POST /orgs/{org}/settings/network-configurations"], deleteNetworkConfigurationFromOrg: ["DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}"], getNetworkConfigurationForOrg: ["GET /orgs/{org}/settings/network-configurations/{network_configuration_id}"], getNetworkSettingsForOrg: ["GET /orgs/{org}/settings/network-settings/{network_settings_id}"], listNetworkConfigurationsForOrg: ["GET /orgs/{org}/settings/network-configurations"], updateNetworkConfigurationForOrg: ["PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}"] }, interactions: { getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"], getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"], getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"], getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }], removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"], removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"], removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"], removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }], setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"], setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"], setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"], setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }] }, issues: { addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"], addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"], addSubIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"], checkUserCanBeAssignedToIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"], create: ["POST /repos/{owner}/{repo}/issues"], createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"], createLabel: ["POST /repos/{owner}/{repo}/labels"], createMilestone: ["POST /repos/{owner}/{repo}/milestones"], deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"], deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"], deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"], get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"], getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"], getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"], getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"], getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"], list: ["GET /issues"], listAssignees: ["GET /repos/{owner}/{repo}/assignees"], listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"], listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"], listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"], listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"], listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"], listForAuthenticatedUser: ["GET /user/issues"], listForOrg: ["GET /orgs/{org}/issues"], listForRepo: ["GET /repos/{owner}/{repo}/issues"], listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"], listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"], listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"], listMilestones: ["GET /repos/{owner}/{repo}/milestones"], listSubIssues: ["GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"], removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"], removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"], removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"], removeSubIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"], reprioritizeSubIssue: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"], setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"], unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"], update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"], updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"], updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"], updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"] }, licenses: { get: ["GET /licenses/{license}"], getAllCommonlyUsed: ["GET /licenses"], getForRepo: ["GET /repos/{owner}/{repo}/license"] }, markdown: { render: ["POST /markdown"], renderRaw: ["POST /markdown/raw", { headers: { "content-type": "text/plain; charset=utf-8" } }] }, meta: { get: ["GET /meta"], getAllVersions: ["GET /versions"], getOctocat: ["GET /octocat"], getZen: ["GET /zen"], root: ["GET /"] }, migrations: { deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive"], deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive"], downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive"], getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive"], getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"], getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"], listForAuthenticatedUser: ["GET /user/migrations"], listForOrg: ["GET /orgs/{org}/migrations"], listReposForAuthenticatedUser: ["GET /user/migrations/{migration_id}/repositories"], listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"], listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {}, { renamed: ["migrations", "listReposForAuthenticatedUser"] }], startForAuthenticatedUser: ["POST /user/migrations"], startForOrg: ["POST /orgs/{org}/migrations"], unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"], unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"] }, oidc: { getOidcCustomSubTemplateForOrg: ["GET /orgs/{org}/actions/oidc/customization/sub"], updateOidcCustomSubTemplateForOrg: ["PUT /orgs/{org}/actions/oidc/customization/sub"] }, orgs: { addSecurityManagerTeam: ["PUT /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team" }], assignTeamToOrgRole: ["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], assignUserToOrgRole: ["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"], blockUser: ["PUT /orgs/{org}/blocks/{username}"], cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"], checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"], checkMembershipForUser: ["GET /orgs/{org}/members/{username}"], checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"], convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"], createInvitation: ["POST /orgs/{org}/invitations"], createIssueType: ["POST /orgs/{org}/issue-types"], createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"], createOrUpdateCustomPropertiesValuesForRepos: ["PATCH /orgs/{org}/properties/values"], createOrUpdateCustomProperty: ["PUT /orgs/{org}/properties/schema/{custom_property_name}"], createWebhook: ["POST /orgs/{org}/hooks"], delete: ["DELETE /orgs/{org}"], deleteIssueType: ["DELETE /orgs/{org}/issue-types/{issue_type_id}"], deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"], enableOrDisableSecurityProductOnAllOrgRepos: ["POST /orgs/{org}/{security_product}/{enablement}", {}, { deprecated: "octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos() is deprecated, see https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization" }], get: ["GET /orgs/{org}"], getAllCustomProperties: ["GET /orgs/{org}/properties/schema"], getCustomProperty: ["GET /orgs/{org}/properties/schema/{custom_property_name}"], getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"], getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"], getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"], getOrgRulesetHistory: ["GET /orgs/{org}/rulesets/{ruleset_id}/history"], getOrgRulesetVersion: ["GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}"], getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"], getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"], list: ["GET /organizations"], listAppInstallations: ["GET /orgs/{org}/installations"], listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"], listBlockedUsers: ["GET /orgs/{org}/blocks"], listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"], listFailedInvitations: ["GET /orgs/{org}/failed_invitations"], listForAuthenticatedUser: ["GET /user/orgs"], listForUser: ["GET /users/{username}/orgs"], listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"], listIssueTypes: ["GET /orgs/{org}/issue-types"], listMembers: ["GET /orgs/{org}/members"], listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"], listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"], listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"], listOrgRoles: ["GET /orgs/{org}/organization-roles"], listOrganizationFineGrainedPermissions: ["GET /orgs/{org}/organization-fine-grained-permissions"], listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"], listPatGrantRepositories: ["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"], listPatGrantRequestRepositories: ["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"], listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"], listPatGrants: ["GET /orgs/{org}/personal-access-tokens"], listPendingInvitations: ["GET /orgs/{org}/invitations"], listPublicMembers: ["GET /orgs/{org}/public_members"], listSecurityManagerTeams: ["GET /orgs/{org}/security-managers", {}, { deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams" }], listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /orgs/{org}/hooks"], pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeCustomProperty: ["DELETE /orgs/{org}/properties/schema/{custom_property_name}"], removeMember: ["DELETE /orgs/{org}/members/{username}"], removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"], removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"], removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"], removeSecurityManagerTeam: ["DELETE /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team" }], reviewPatGrantRequest: ["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"], reviewPatGrantRequestsInBulk: ["POST /orgs/{org}/personal-access-token-requests"], revokeAllOrgRolesTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"], revokeAllOrgRolesUser: ["DELETE /orgs/{org}/organization-roles/users/{username}"], revokeOrgRoleTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], revokeOrgRoleUser: ["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"], setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"], setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"], unblockUser: ["DELETE /orgs/{org}/blocks/{username}"], update: ["PATCH /orgs/{org}"], updateIssueType: ["PUT /orgs/{org}/issue-types/{issue_type_id}"], updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"], updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"], updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"], updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"], updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"] }, packages: { deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"], deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"], deletePackageForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}"], deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }], getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"] }], getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"], getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"], getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"], getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"], getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], listDockerMigrationConflictingPackagesForAuthenticatedUser: ["GET /user/docker/conflicts"], listDockerMigrationConflictingPackagesForOrganization: ["GET /orgs/{org}/docker/conflicts"], listDockerMigrationConflictingPackagesForUser: ["GET /users/{username}/docker/conflicts"], listPackagesForAuthenticatedUser: ["GET /user/packages"], listPackagesForOrganization: ["GET /orgs/{org}/packages"], listPackagesForUser: ["GET /users/{username}/packages"], restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"] }, privateRegistries: { createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"], deleteOrgPrivateRegistry: ["DELETE /orgs/{org}/private-registries/{secret_name}"], getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"], getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"], listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"], updateOrgPrivateRegistry: ["PATCH /orgs/{org}/private-registries/{secret_name}"] }, projects: { addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {}, { deprecated: "octokit.rest.projects.addCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#add-project-collaborator" }], createCard: ["POST /projects/columns/{column_id}/cards", {}, { deprecated: "octokit.rest.projects.createCard() is deprecated, see https://docs.github.com/rest/projects/cards#create-a-project-card" }], createColumn: ["POST /projects/{project_id}/columns", {}, { deprecated: "octokit.rest.projects.createColumn() is deprecated, see https://docs.github.com/rest/projects/columns#create-a-project-column" }], createForAuthenticatedUser: ["POST /user/projects", {}, { deprecated: "octokit.rest.projects.createForAuthenticatedUser() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-user-project" }], createForOrg: ["POST /orgs/{org}/projects", {}, { deprecated: "octokit.rest.projects.createForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#create-an-organization-project" }], createForRepo: ["POST /repos/{owner}/{repo}/projects", {}, { deprecated: "octokit.rest.projects.createForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-repository-project" }], delete: ["DELETE /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.delete() is deprecated, see https://docs.github.com/rest/projects/projects#delete-a-project" }], deleteCard: ["DELETE /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.deleteCard() is deprecated, see https://docs.github.com/rest/projects/cards#delete-a-project-card" }], deleteColumn: ["DELETE /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.deleteColumn() is deprecated, see https://docs.github.com/rest/projects/columns#delete-a-project-column" }], get: ["GET /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.get() is deprecated, see https://docs.github.com/rest/projects/projects#get-a-project" }], getCard: ["GET /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.getCard() is deprecated, see https://docs.github.com/rest/projects/cards#get-a-project-card" }], getColumn: ["GET /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.getColumn() is deprecated, see https://docs.github.com/rest/projects/columns#get-a-project-column" }], getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", {}, { deprecated: "octokit.rest.projects.getPermissionForUser() is deprecated, see https://docs.github.com/rest/projects/collaborators#get-project-permission-for-a-user" }], listCards: ["GET /projects/columns/{column_id}/cards", {}, { deprecated: "octokit.rest.projects.listCards() is deprecated, see https://docs.github.com/rest/projects/cards#list-project-cards" }], listCollaborators: ["GET /projects/{project_id}/collaborators", {}, { deprecated: "octokit.rest.projects.listCollaborators() is deprecated, see https://docs.github.com/rest/projects/collaborators#list-project-collaborators" }], listColumns: ["GET /projects/{project_id}/columns", {}, { deprecated: "octokit.rest.projects.listColumns() is deprecated, see https://docs.github.com/rest/projects/columns#list-project-columns" }], listForOrg: ["GET /orgs/{org}/projects", {}, { deprecated: "octokit.rest.projects.listForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#list-organization-projects" }], listForRepo: ["GET /repos/{owner}/{repo}/projects", {}, { deprecated: "octokit.rest.projects.listForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#list-repository-projects" }], listForUser: ["GET /users/{username}/projects", {}, { deprecated: "octokit.rest.projects.listForUser() is deprecated, see https://docs.github.com/rest/projects/projects#list-user-projects" }], moveCard: ["POST /projects/columns/cards/{card_id}/moves", {}, { deprecated: "octokit.rest.projects.moveCard() is deprecated, see https://docs.github.com/rest/projects/cards#move-a-project-card" }], moveColumn: ["POST /projects/columns/{column_id}/moves", {}, { deprecated: "octokit.rest.projects.moveColumn() is deprecated, see https://docs.github.com/rest/projects/columns#move-a-project-column" }], removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {}, { deprecated: "octokit.rest.projects.removeCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#remove-user-as-a-collaborator" }], update: ["PATCH /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.update() is deprecated, see https://docs.github.com/rest/projects/projects#update-a-project" }], updateCard: ["PATCH /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.updateCard() is deprecated, see https://docs.github.com/rest/projects/cards#update-an-existing-project-card" }], updateColumn: ["PATCH /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.updateColumn() is deprecated, see https://docs.github.com/rest/projects/columns#update-an-existing-project-column" }] }, pulls: { checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"], create: ["POST /repos/{owner}/{repo}/pulls"], createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"], createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"], deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"], dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"], get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"], getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"], list: ["GET /repos/{owner}/{repo}/pulls"], listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"], listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"], listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"], listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"], listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"], listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"], removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"], update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"], updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"], updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"] }, rateLimit: { get: ["GET /rate_limit"] }, reactions: { createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"], createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"], createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"], createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"], deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"], deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"], deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"], deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"], deleteForRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"], deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"], deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"], listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"], listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"], listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], listForRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"], listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"] }, repos: { acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }], acceptInvitationForAuthenticatedUser: ["PATCH /user/repository_invitations/{invitation_id}"], addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"], addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], cancelPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"], checkAutomatedSecurityFixes: ["GET /repos/{owner}/{repo}/automated-security-fixes"], checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"], checkPrivateVulnerabilityReporting: ["GET /repos/{owner}/{repo}/private-vulnerability-reporting"], checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts"], codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"], compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"], compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"], createAttestation: ["POST /repos/{owner}/{repo}/attestations"], createAutolink: ["POST /repos/{owner}/{repo}/autolinks"], createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"], createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"], createDeployKey: ["POST /repos/{owner}/{repo}/keys"], createDeployment: ["POST /repos/{owner}/{repo}/deployments"], createDeploymentBranchPolicy: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], createDeploymentProtectionRule: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"], createForAuthenticatedUser: ["POST /user/repos"], createFork: ["POST /repos/{owner}/{repo}/forks"], createInOrg: ["POST /orgs/{org}/repos"], createOrUpdateCustomPropertiesValues: ["PATCH /repos/{owner}/{repo}/properties/values"], createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"], createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"], createOrgRuleset: ["POST /orgs/{org}/rulesets"], createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"], createPagesSite: ["POST /repos/{owner}/{repo}/pages"], createRelease: ["POST /repos/{owner}/{repo}/releases"], createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"], createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate"], createWebhook: ["POST /repos/{owner}/{repo}/hooks"], declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }], declineInvitationForAuthenticatedUser: ["DELETE /user/repository_invitations/{invitation_id}"], delete: ["DELETE /repos/{owner}/{repo}"], deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"], deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"], deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"], deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"], deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"], deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"], deleteDeploymentBranchPolicy: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"], deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"], deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"], deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"], deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"], deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"], deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"], deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"], disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes"], disableDeploymentProtectionRule: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], disablePrivateVulnerabilityReporting: ["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"], disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts"], downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, { renamed: ["repos", "downloadZipballArchive"] }], downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"], downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"], enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes"], enablePrivateVulnerabilityReporting: ["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"], enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts"], generateReleaseNotes: ["POST /repos/{owner}/{repo}/releases/generate-notes"], get: ["GET /repos/{owner}/{repo}"], getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], getAllDeploymentProtectionRules: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"], getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"], getAllTopics: ["GET /repos/{owner}/{repo}/topics"], getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"], getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"], getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"], getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"], getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"], getClones: ["GET /repos/{owner}/{repo}/traffic/clones"], getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"], getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"], getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"], getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"], getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"], getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"], getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"], getContent: ["GET /repos/{owner}/{repo}/contents/{path}"], getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"], getCustomDeploymentProtectionRule: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"], getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"], getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"], getDeploymentBranchPolicy: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"], getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"], getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"], getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"], getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"], getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"], getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"], getOrgRulesets: ["GET /orgs/{org}/rulesets"], getPages: ["GET /repos/{owner}/{repo}/pages"], getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"], getPagesDeployment: ["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"], getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"], getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"], getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"], getReadme: ["GET /repos/{owner}/{repo}/readme"], getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"], getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"], getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"], getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"], getRepoRuleSuite: ["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"], getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"], getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"], getRepoRulesetHistory: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history"], getRepoRulesetVersion: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}"], getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"], getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"], getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"], getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"], getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"], getViews: ["GET /repos/{owner}/{repo}/traffic/views"], getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"], getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"], listActivities: ["GET /repos/{owner}/{repo}/activity"], listAttestations: ["GET /repos/{owner}/{repo}/attestations/{subject_digest}"], listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"], listBranches: ["GET /repos/{owner}/{repo}/branches"], listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"], listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"], listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"], listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"], listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"], listCommits: ["GET /repos/{owner}/{repo}/commits"], listContributors: ["GET /repos/{owner}/{repo}/contributors"], listCustomDeploymentRuleIntegrations: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"], listDeployKeys: ["GET /repos/{owner}/{repo}/keys"], listDeploymentBranchPolicies: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], listDeployments: ["GET /repos/{owner}/{repo}/deployments"], listForAuthenticatedUser: ["GET /user/repos"], listForOrg: ["GET /orgs/{org}/repos"], listForUser: ["GET /users/{username}/repos"], listForks: ["GET /repos/{owner}/{repo}/forks"], listInvitations: ["GET /repos/{owner}/{repo}/invitations"], listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"], listLanguages: ["GET /repos/{owner}/{repo}/languages"], listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"], listPublic: ["GET /repositories"], listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"], listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"], listReleases: ["GET /repos/{owner}/{repo}/releases"], listTags: ["GET /repos/{owner}/{repo}/tags"], listTeams: ["GET /repos/{owner}/{repo}/teams"], listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /repos/{owner}/{repo}/hooks"], merge: ["POST /repos/{owner}/{repo}/merges"], mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"], pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"], removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"], replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"], requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"], setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"], transfer: ["POST /repos/{owner}/{repo}/transfer"], update: ["PATCH /repos/{owner}/{repo}"], updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"], updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"], updateDeploymentBranchPolicy: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"], updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"], updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"], updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"], updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"], updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"], updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, { renamed: ["repos", "updateStatusCheckProtection"] }], updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"], updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"], uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", { baseUrl: "https://uploads.github.com" }] }, search: { code: ["GET /search/code"], commits: ["GET /search/commits"], issuesAndPullRequests: ["GET /search/issues", {}, { deprecated: "octokit.rest.search.issuesAndPullRequests() is deprecated, see https://docs.github.com/rest/search/search#search-issues-and-pull-requests" }], labels: ["GET /search/labels"], repos: ["GET /search/repositories"], topics: ["GET /search/topics"], users: ["GET /search/users"] }, secretScanning: { createPushProtectionBypass: ["POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"], getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"], getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/secret-scanning/alerts"], listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"], listLocationsForAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"], updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"] }, securityAdvisories: { createFork: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"], createPrivateVulnerabilityReport: ["POST /repos/{owner}/{repo}/security-advisories/reports"], createRepositoryAdvisory: ["POST /repos/{owner}/{repo}/security-advisories"], createRepositoryAdvisoryCveRequest: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"], getGlobalAdvisory: ["GET /advisories/{ghsa_id}"], getRepositoryAdvisory: ["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"], listGlobalAdvisories: ["GET /advisories"], listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"], listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"], updateRepositoryAdvisory: ["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"] }, teams: { addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"], addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions" }], addOrUpdateProjectPermissionsLegacy: ["PUT /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions-legacy" }], addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.checkPermissionsForProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project" }], checkPermissionsForProjectLegacy: ["GET /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.checkPermissionsForProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project-legacy" }], checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], create: ["POST /orgs/{org}/teams"], createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"], deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"], getByName: ["GET /orgs/{org}/teams/{team_slug}"], getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"], list: ["GET /orgs/{org}/teams"], listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"], listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"], listForAuthenticatedUser: ["GET /user/teams"], listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"], listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"], listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {}, { deprecated: "octokit.rest.teams.listProjectsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects" }], listProjectsLegacy: ["GET /teams/{team_id}/projects", {}, { deprecated: "octokit.rest.teams.listProjectsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects-legacy" }], listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"], removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"], removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.removeProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team" }], removeProjectLegacy: ["DELETE /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.removeProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team-legacy" }], removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"] }, users: { addEmailForAuthenticated: ["POST /user/emails", {}, { renamed: ["users", "addEmailForAuthenticatedUser"] }], addEmailForAuthenticatedUser: ["POST /user/emails"], addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"], block: ["PUT /user/blocks/{username}"], checkBlocked: ["GET /user/blocks/{username}"], checkFollowingForUser: ["GET /users/{username}/following/{target_user}"], checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"], createGpgKeyForAuthenticated: ["POST /user/gpg_keys", {}, { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }], createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"], createPublicSshKeyForAuthenticated: ["POST /user/keys", {}, { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }], createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"], createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"], deleteEmailForAuthenticated: ["DELETE /user/emails", {}, { renamed: ["users", "deleteEmailForAuthenticatedUser"] }], deleteEmailForAuthenticatedUser: ["DELETE /user/emails"], deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }], deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"], deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}", {}, { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }], deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"], deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"], deleteSshSigningKeyForAuthenticatedUser: ["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"], follow: ["PUT /user/following/{username}"], getAuthenticated: ["GET /user"], getById: ["GET /user/{account_id}"], getByUsername: ["GET /users/{username}"], getContextForUser: ["GET /users/{username}/hovercard"], getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }], getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"], getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}", {}, { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }], getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"], getSshSigningKeyForAuthenticatedUser: ["GET /user/ssh_signing_keys/{ssh_signing_key_id}"], list: ["GET /users"], listAttestations: ["GET /users/{username}/attestations/{subject_digest}"], listBlockedByAuthenticated: ["GET /user/blocks", {}, { renamed: ["users", "listBlockedByAuthenticatedUser"] }], listBlockedByAuthenticatedUser: ["GET /user/blocks"], listEmailsForAuthenticated: ["GET /user/emails", {}, { renamed: ["users", "listEmailsForAuthenticatedUser"] }], listEmailsForAuthenticatedUser: ["GET /user/emails"], listFollowedByAuthenticated: ["GET /user/following", {}, { renamed: ["users", "listFollowedByAuthenticatedUser"] }], listFollowedByAuthenticatedUser: ["GET /user/following"], listFollowersForAuthenticatedUser: ["GET /user/followers"], listFollowersForUser: ["GET /users/{username}/followers"], listFollowingForUser: ["GET /users/{username}/following"], listGpgKeysForAuthenticated: ["GET /user/gpg_keys", {}, { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }], listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"], listGpgKeysForUser: ["GET /users/{username}/gpg_keys"], listPublicEmailsForAuthenticated: ["GET /user/public_emails", {}, { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }], listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"], listPublicKeysForUser: ["GET /users/{username}/keys"], listPublicSshKeysForAuthenticated: ["GET /user/keys", {}, { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }], listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"], listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"], listSocialAccountsForUser: ["GET /users/{username}/social_accounts"], listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"], listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"], setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility", {}, { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }], setPrimaryEmailVisibilityForAuthenticatedUser: ["PATCH /user/email/visibility"], unblock: ["DELETE /user/blocks/{username}"], unfollow: ["DELETE /user/following/{username}"], updateAuthenticated: ["PATCH /user"] } }, Zr = As;
});
function xe(r) {
  let e = {};
  for (let t of U.keys()) e[t] = new Proxy({ octokit: r, scope: t, cache: {} }, Ss);
  return e;
}
function Os(r, e, t, s, o) {
  let i = r.request.defaults(s);
  function n(...a) {
    let p = i.endpoint.merge(...a);
    if (o.mapToData) return p = Object.assign({}, p, { data: p[o.mapToData], [o.mapToData]: void 0 }), i(p);
    if (o.renamed) {
      let [c, l] = o.renamed;
      r.log.warn(`octokit.${e}.${t}() has been renamed to octokit.${c}.${l}()`);
    }
    if (o.deprecated && r.log.warn(o.deprecated), o.renamedParameters) {
      let c = i.endpoint.merge(...a);
      for (let [l, u] of Object.entries(o.renamedParameters)) l in c && (r.log.warn(`"${l}" parameter is deprecated for "octokit.${e}.${t}()". Use "${u}" instead`), u in c || (c[u] = c[l]), delete c[l]);
      return i(c);
    }
    return i(...a);
  }
  return Object.assign(n, i);
}
var U, Ss, rt = h(() => {
  et();
  U = /* @__PURE__ */ new Map();
  for (let [r, e] of Object.entries(Zr)) for (let [t, s] of Object.entries(e)) {
    let [o, i, n] = s, [a, p] = o.split(/ /), c = Object.assign({ method: a, url: p }, i);
    U.has(r) || U.set(r, /* @__PURE__ */ new Map()), U.get(r).set(t, { scope: r, methodName: t, endpointDefaults: c, decorations: n });
  }
  Ss = { has({ scope: r }, e) {
    return U.get(r).has(e);
  }, getOwnPropertyDescriptor(r, e) {
    return { value: this.get(r, e), configurable: true, writable: true, enumerable: true };
  }, defineProperty(r, e, t) {
    return Object.defineProperty(r.cache, e, t), true;
  }, deleteProperty(r, e) {
    return delete r.cache[e], true;
  }, ownKeys({ scope: r }) {
    return [...U.get(r).keys()];
  }, set(r, e, t) {
    return r.cache[e] = t;
  }, get({ octokit: r, scope: e, cache: t }, s) {
    if (t[s]) return t[s];
    let o = U.get(e).get(s);
    if (!o) return;
    let { endpointDefaults: i, decorations: n } = o;
    return n ? t[s] = Os(r, e, s, i, n) : t[s] = r.request.defaults(i), t[s];
  } };
});
function Cs(r) {
  return { rest: xe(r) };
}
function $e(r) {
  let e = xe(r);
  return { ...e, rest: e };
}
var tt = h(() => {
  Xr();
  rt();
  Cs.VERSION = He;
  $e.VERSION = He;
});
var st, ot = h(() => {
  st = "21.1.0";
});
var nt = {};
rr(nt, { Octokit: () => Us });
var Us, it = h(() => {
  Wr();
  Kr();
  Jr();
  tt();
  ot();
  Us = ne.plugin(Le, $e, Ie).defaults({ userAgent: `octokit-rest.js/${st}` });
});
function at() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var ct = h(() => {
});
var lt = {};
rr(lt, { GraphqlResponseError: () => ut, graphql: () => Hs, withCustomRequest: () => xs });
function Ds(r) {
  return `Request failed due to following response errors:
` + r.errors.map((e) => ` - ${e.message}`).join(`
`);
}
function Is(r, e, t) {
  if (t) {
    if (typeof e == "string" && "query" in t) return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
    for (let n in t) if (js.includes(n)) return Promise.reject(new Error(`[@octokit/graphql] "${n}" cannot be used as variable name`));
  }
  let s = typeof e == "string" ? Object.assign({ query: e }, t) : e, o = Object.keys(s).reduce((n, a) => Ls.includes(a) ? (n[a] = s[a], n) : (n.variables || (n.variables = {}), n.variables[a] = s[a], n), {}), i = s.baseUrl || r.endpoint.DEFAULTS.baseUrl;
  return pt.test(i) && (o.url = i.replace(pt, "/api/graphql")), r(o).then((n) => {
    if (n.data.errors) {
      let a = {};
      for (let p of Object.keys(n.headers)) a[p] = n.headers[p];
      throw new ut(o, a, n.data);
    }
    return n.data.data;
  });
}
function qe(r, e) {
  let t = r.defaults(e);
  return Object.assign((o, i) => Is(t, o, i), { defaults: qe.bind(null, t), endpoint: t.endpoint });
}
function xs(r) {
  return qe(r, { method: "POST", url: "/graphql" });
}
var Fs, ut, Ls, js, pt, Hs, dt = h(() => {
  oe();
  ct();
  Fs = "0.0.0-development";
  ut = class extends Error {
    constructor(r, e, t) {
      super(Ds(t)), this.request = r, this.headers = e, this.response = t, this.errors = t.errors, this.data = t.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
    name = "GraphqlResponseError";
    errors;
    data;
  }, Ls = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType", "operationName"], js = ["query", "method", "url"], pt = /\/api\/v3\/?$/;
  Hs = qe(C, { headers: { "user-agent": `octokit-graphql.js/${Fs} ${at()}` }, method: "POST", url: "/graphql" });
});
import { commands as Je, Disposable as Ut, extensions as Q, l10n as Po, LogLevel as ko, window as Ro } from "vscode";
import { Uri as Ws, env as zs, l10n as Vs, workspace as Ks } from "vscode";
var ht = tr(pr());
import { authentication as mt, window as $s } from "vscode";
import { globalAgent as gt } from "https";
import { URL as qs } from "url";
var F = class extends Error {
};
function Et(r = process.env.HTTPS_PROXY) {
  if (!r) return gt;
  try {
    let { hostname: e, port: t, username: s, password: o } = new qs(r), i = s && o && `${s}:${o}`;
    return (0, ht.httpsOverHttp)({ proxy: { host: e, port: t, proxyAuth: i } });
  } catch (e) {
    return $s.showErrorMessage(`HTTPS_PROXY environment variable ignored: ${e.message}`), gt;
  }
}
var Tt = ["repo", "workflow", "user:email", "read:user"];
async function Ne() {
  return await mt.getSession("github", Tt, { createIfNone: true });
}
var ie;
function D() {
  return ie || (ie = Ne().then(async (r) => {
    let e = r.accessToken, t = Et(), { Octokit: s } = await Promise.resolve().then(() => (it(), nt));
    return new s({ request: { agent: t }, userAgent: "GitHub VSCode", auth: `token ${e}` });
  }).then(null, async (r) => {
    throw ie = void 0, r;
  })), ie;
}
var ae;
async function $() {
  if (!ae) try {
    let r = await mt.getSession("github", Tt, { silent: true });
    if (!r) throw new F("No GitHub authentication session available.");
    let e = r.accessToken, { graphql: t } = await Promise.resolve().then(() => (dt(), lt));
    ae = Promise.resolve(t.defaults({ headers: { authorization: `token ${e}` }, request: { agent: Et() } }));
  } catch (r) {
    throw ae = void 0, r;
  }
  return ae;
}
var y = class {
  constructor() {
    this.disposables = /* @__PURE__ */ new Set();
    this.isDisposed = false;
  }
  add(e) {
    if (this.isDisposed) {
      e.dispose();
      return;
    }
    this.disposables.add(e);
  }
  dispose() {
    this.isDisposed = true;
    for (let e of this.disposables) e.dispose();
    this.disposables.clear();
  }
};
function Ns(r) {
  return (e, t, s) => {
    let o = null, i = null;
    if (typeof s.value == "function" ? (o = "value", i = s.value) : typeof s.get == "function" && (o = "get", i = s.get), !i || !o) throw new Error("not supported");
    s[o] = r(i, t);
  };
}
function Bs(r, e) {
  let t = `__$sequence$${e}`;
  return function(...s) {
    let o = this[t] || Promise.resolve(null), i = async () => await r.apply(this, s);
    return this[t] = o.then(i, i), this[t];
  };
}
var ft = Ns(Bs);
function bt(r, e) {
  let t = [], s;
  for (let o of r.slice(0).sort(e)) !s || e(s[0], o) !== 0 ? (s = [o], t.push(s)) : s.push(o);
  return t;
}
function f(r) {
  let e = /^https:\/\/github\.com\/([^/]+)\/([^/]+?)(\.git)?$/i.exec(r) || /^git@github\.com:([^/]+)\/([^/]+?)(\.git)?$/i.exec(r);
  return e ? { owner: e[1], repo: e[2] } : void 0;
}
function wt(r) {
  let e = /^([^/]+)\/([^/]+)$/i.exec(r);
  return e ? { owner: e[1], repo: e[2] } : void 0;
}
function ce(r) {
  return !!r.state.remotes.find((e) => e.fetchUrl ? f(e.fetchUrl) : void 0);
}
function Be(r) {
  let e = r.state.remotes.filter((s) => s.fetchUrl && f(s.fetchUrl));
  return e.length === 0 ? void 0 : (e.find((s) => s.name === "upstream") ?? e.find((s) => s.name === "origin") ?? e[0]).fetchUrl;
}
function Me(r) {
  let e = Be(r);
  return e ? f(e) : void 0;
}
import * as L from "vscode";
var Wn = Object.freeze({ Force: 0, ForceWithLease: 1, ForceWithLeaseIfIncludes: 2 }), We = Object.freeze({ Head: 0, RemoteHead: 1, Tag: 2 }), zn = Object.freeze({ INDEX_MODIFIED: 0, INDEX_ADDED: 1, INDEX_DELETED: 2, INDEX_RENAMED: 3, INDEX_COPIED: 4, MODIFIED: 5, DELETED: 6, UNTRACKED: 7, IGNORED: 8, INTENT_TO_ADD: 9, INTENT_TO_RENAME: 10, TYPE_CHANGED: 11, ADDED_BY_US: 12, ADDED_BY_THEM: 13, DELETED_BY_US: 14, DELETED_BY_THEM: 15, BOTH_ADDED: 16, BOTH_DELETED: 17, BOTH_MODIFIED: 18 }), pe = Object.freeze({ BadConfigFile: "BadConfigFile", BadRevision: "BadRevision", AuthenticationFailed: "AuthenticationFailed", NoUserNameConfigured: "NoUserNameConfigured", NoUserEmailConfigured: "NoUserEmailConfigured", NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified", NotAGitRepository: "NotAGitRepository", NotASafeGitRepository: "NotASafeGitRepository", NotAtRepositoryRoot: "NotAtRepositoryRoot", Conflict: "Conflict", StashConflict: "StashConflict", UnmergedChanges: "UnmergedChanges", PushRejected: "PushRejected", ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected", ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected", RemoteConnectionError: "RemoteConnectionError", DirtyWorkTree: "DirtyWorkTree", CantOpenResource: "CantOpenResource", GitNotFound: "GitNotFound", CantCreatePipe: "CantCreatePipe", PermissionDenied: "PermissionDenied", CantAccessRemote: "CantAccessRemote", RepositoryNotFound: "RepositoryNotFound", RepositoryIsLocked: "RepositoryIsLocked", BranchNotFullyMerged: "BranchNotFullyMerged", NoRemoteReference: "NoRemoteReference", InvalidBranchName: "InvalidBranchName", BranchAlreadyExists: "BranchAlreadyExists", NoLocalChanges: "NoLocalChanges", NoStashFound: "NoStashFound", LocalChangesOverwritten: "LocalChangesOverwritten", NoUpstreamBranch: "NoUpstreamBranch", IsInSubmodule: "IsInSubmodule", WrongCase: "WrongCase", CantLockRef: "CantLockRef", CantRebaseMultipleBranches: "CantRebaseMultipleBranches", PatchDoesNotApply: "PatchDoesNotApply", NoPathFound: "NoPathFound", UnknownPath: "UnknownPath", EmptyCommitMessage: "EmptyCommitMessage", BranchFastForwardRejected: "BranchFastForwardRejected", BranchNotYetBorn: "BranchNotYetBorn", TagConflict: "TagConflict", CherryPickEmpty: "CherryPickEmpty", CherryPickConflict: "CherryPickConflict", WorktreeContainsChanges: "WorktreeContainsChanges", WorktreeAlreadyExists: "WorktreeAlreadyExists", WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed" });
function Ms(r) {
  return r.split("/").map((e) => encodeURIComponent(e)).join("/");
}
function _t(r, e) {
  return `https://avatars.githubusercontent.com/u/${r}?s=${e}`;
}
function yt(r, e, t = "https://github.com") {
  let s = f(r);
  if (!s) throw new Error("Invalid repository URL provided");
  return e = Ms(e), `${t}/${s.owner}/${s.repo}/tree/${e}`;
}
function ze(r, e, t = "https://github.com") {
  let s = f(r);
  if (!s) throw new Error("Invalid repository URL provided");
  return `${t}/${s.owner}/${s.repo}/commit/${e}`;
}
function Ve(r) {
  let e = Ks.getConfiguration("github").get("gitProtocol");
  return { name: `$(github) ${r.full_name}`, description: `${r.stargazers_count > 0 ? `$(star-full) ${r.stargazers_count}` : ""}`, detail: r.description || void 0, url: e === "https" ? r.clone_url : r.ssh_url };
}
var ue = class {
  constructor() {
    this.name = "GitHub";
    this.icon = "github";
    this.supportsQuery = true;
    this.userReposCache = [];
  }
  async getRemoteSources(e) {
    let t = await D();
    if (e) {
      let i = f(e);
      if (i) {
        let n = await t.repos.get(i);
        return [Ve(n.data)];
      }
    }
    let s = await Promise.all([this.getQueryRemoteSources(t, e), this.getUserRemoteSources(t, e)]), o = /* @__PURE__ */ new Map();
    for (let i of s) for (let n of i) o.set(n.name, n);
    return [...o.values()];
  }
  async getUserRemoteSources(e, t) {
    if (!t) {
      let o = (await e.users.getAuthenticated({})).data.login, i = await e.repos.listForAuthenticatedUser({ username: o, sort: "updated", per_page: 100 });
      this.userReposCache = i.data.map(Ve);
    }
    return this.userReposCache;
  }
  async getQueryRemoteSources(e, t) {
    if (!t) return [];
    let s = wt(t);
    return s && (t = `user:${s.owner}+${s.repo}`), t += " fork:true", (await e.search.repos({ q: t, sort: "stars" })).data.items.map(Ve);
  }
  async getBranches(e) {
    let t = f(e);
    if (!t) return [];
    let s = await D(), o = [], i = 1;
    for (; ; ) {
      let p = await s.repos.listBranches({ ...t, per_page: 100, page: i });
      if (p.data.length === 0) break;
      o.push(...p.data.map((c) => c.name)), i++;
    }
    let a = (await s.repos.get(t)).data.default_branch;
    return o.sort((p, c) => p === a ? -1 : c === a ? 1 : 0);
  }
  async getRemoteSourceActions(e) {
    return f(e) ? [{ label: Vs.t("Open on GitHub"), icon: "github", run(s) {
      let o = yt(e, s);
      zs.openExternal(Ws.parse(o));
    } }] : [];
  }
};
import * as w from "vscode";
import * as m from "vscode";
import { TextEncoder as so } from "util";
import { basename as oo } from "path";
import { TextDecoder as Qs } from "util";
import { commands as le, env as Ys, ProgressLocation as vt, Uri as j, window as R, workspace as q, FileType as Gt, l10n as b } from "vscode";
import * as me from "path";
function de() {
  return Ys.remoteName === "codespaces";
}
var Js = [{ dir: ".", files: ["pull_request_template.md", "PULL_REQUEST_TEMPLATE.md"] }, { dir: "docs", files: ["pull_request_template.md", "PULL_REQUEST_TEMPLATE.md"] }, { dir: ".github", files: ["PULL_REQUEST_TEMPLATE.md", "PULL_REQUEST_TEMPLATE.md"] }], Xs = ["PULL_REQUEST_TEMPLATE", "docs/PULL_REQUEST_TEMPLATE", ".github/PULL_REQUEST_TEMPLATE"];
async function Zs(r, e) {
  return (await q.fs.readDirectory(r)).filter(([s, o]) => !!(o & Gt.File) && e.indexOf(s) !== -1).map(([s]) => j.joinPath(r, s));
}
async function eo(r) {
  return (await q.fs.readDirectory(r)).filter(([t, s]) => !!(s & Gt.File) && me.extname(t) === ".md").map(([t]) => j.joinPath(r, t));
}
async function ro(r) {
  return (await Promise.allSettled([...Js.map((t) => Zs(j.joinPath(r, t.dir), t.files)), ...Xs.map((t) => eo(j.joinPath(r, t)))])).flatMap((t) => t.status === "fulfilled" && t.value || []);
}
async function to(r, e) {
  let t = (n) => ({ label: me.relative(r.path, n.path), template: n }), s = [{ label: b.t("No template"), picked: true, template: void 0 }, ...e.map(t)], o = { placeHolder: b.t("Select the Pull Request template"), ignoreFocusOut: true };
  return (await R.showQuickPick(s, o))?.template;
}
var Ke = class {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.items.set(e.path, t);
  }
  delete(e) {
    this.items.delete(e.path);
  }
  provideTextDocumentContent(e) {
    return this.items.get(e.path);
  }
}, ge = class {
  constructor(e) {
    this.telemetryReporter = e;
    this.disposables = [];
    this.commandErrors = new Ke();
    this.disposables.push(q.registerTextDocumentContentProvider("github-output", this.commandErrors));
  }
  async handlePushError(e, t, s, o) {
    if (o.gitErrorCode !== pe.PermissionDenied && o.gitErrorCode !== pe.PushRejected) return false;
    let i = t.pushUrl || (de() ? t.fetchUrl : void 0);
    if (!i) return false;
    let n = /^(?:https:\/\/github\.com\/|git@github\.com:)([^\/]+)\/([^\/.]+)/i.exec(i);
    if (!n || /^:/.test(s)) return false;
    let [, a, p] = n;
    return o.gitErrorCode === pe.PermissionDenied ? (await this.handlePermissionDeniedError(e, t, s, a, p), this.telemetryReporter.sendTelemetryEvent("pushErrorHandler", { handler: "PermissionDenied" }), true) : /GH009: Secrets detected!/i.test(o.stderr) ? (await this.handlePushProtectionError(a, p, o.stderr), this.telemetryReporter.sendTelemetryEvent("pushErrorHandler", { handler: "PushRejected.PushProtection" }), true) : (this.telemetryReporter.sendTelemetryEvent("pushErrorHandler", { handler: "None" }), false);
  }
  async handlePermissionDeniedError(e, t, s, o, i) {
    let n = b.t("Create Fork"), a = b.t("No"), p = b.t(`You don't have permissions to push to "{0}/{1}" on GitHub. Would you like to create a fork and push to it instead?`, o, i);
    if (await R.showWarningMessage(p, { modal: true }, n, a) !== n) return;
    let l = /^([^:]*):([^:]*)$/.exec(s), u = l ? l[1] : s, d = l ? l[2] : s, [E, g] = await R.withProgress({ location: vt.Notification, cancellable: false, title: b.t("Create GitHub fork") }, async (_) => {
      _.report({ message: b.t('Forking "{0}/{1}"...', o, i), increment: 33 });
      let T = await D(), v;
      try {
        if (de()) {
          let G = await le.executeCommand("github.codespaces.forkRepository");
          if (!G) throw new Error("Unable to fork respository");
          if (v = G.repository, G.ref) {
            let B = G.ref;
            B.startsWith("refs/heads/") && (B = B.substr(11)), d = B;
          }
        } else v = (await T.repos.createFork({ owner: o, repo: i })).data;
      } catch (G) {
        throw console.error(G), G;
      }
      _.report({ message: b.t("Pushing changes..."), increment: 33 }), await e.renameRemote(t.name, "upstream");
      let Y = q.getConfiguration("github").get("gitProtocol") === "https" ? v.clone_url : v.ssh_url;
      await e.addRemote("origin", Y);
      try {
        await e.fetch("origin", d), await e.setBranchUpstream(u, `origin/${d}`);
      } catch {
      }
      return await e.push("origin", u, true), [T, v];
    });
    (async () => {
      let _ = b.t("Open on GitHub"), T = b.t("Create PR"), v = await R.showInformationMessage(b.t('The fork "{0}" was successfully created on GitHub.', g.full_name), _, T);
      if (v === _) await le.executeCommand("vscode.open", j.parse(g.html_url));
      else if (v === T) {
        let N = await R.withProgress({ location: vt.Notification, cancellable: false, title: b.t("Creating GitHub Pull Request...") }, async (B) => {
          let we = `Update ${d}`, Xe = e.state.HEAD?.name, _e;
          if (Xe) {
            let M = await e.getCommit(Xe);
            we = M.message.split(`
`)[0], _e = M.message.slice(we.length + 1).trim();
          }
          let ye = await ro(e.rootUri);
          if (ye.length > 0) {
            ye.sort((Ft, Dt) => Ft.path.localeCompare(Dt.path));
            let M = await to(e.rootUri, ye);
            M && (_e = new Qs("utf-8").decode(await q.fs.readFile(M)));
          }
          let { data: Ze } = await E.pulls.create({ owner: o, repo: i, title: we, body: _e, head: `${g.owner.login}:${d}`, base: g.default_branch });
          return await e.setConfig(`branch.${u}.remote`, "upstream"), await e.setConfig(`branch.${u}.merge`, `refs/heads/${d}`), await e.setConfig(`branch.${u}.github-pr-owner-number`, `${o}#${i}#${Ze.number}`), Ze;
        }), Y = b.t("Open PR");
        await R.showInformationMessage(b.t('The PR "{0}/{1}#{2}" was successfully created on GitHub.', o, i, N.number), Y) === Y && await le.executeCommand("vscode.open", j.parse(N.html_url));
      }
    })();
  }
  async handlePushProtectionError(e, t, s) {
    let o = (/* @__PURE__ */ new Date()).getTime(), i = j.parse(`github-output:/github-error-${o}`);
    this.commandErrors.set(i, s);
    try {
      let c = await q.openTextDocument(i);
      await R.showTextDocument(c);
    } finally {
      this.commandErrors.set(i, s);
    }
    let n = b.t("Learn More"), a = b.t('Your push to "{0}/{1}" was rejected by GitHub because push protection is enabled and one or more secrets were detected.', e, t);
    await R.showWarningMessage(a, { modal: true }, n) === n && le.executeCommand("vscode.open", "https://aka.ms/vscode-github-push-protection");
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
};
function no(r) {
  return r.trim().replace(/[^a-z0-9_.]/ig, "-");
}
function io(r) {
  return Promise.race([new Promise((e) => r.onDidAccept(() => r.selectedItems.length > 0 && e(r.selectedItems[0]))), new Promise((e) => r.onDidHide(() => e(void 0)))]);
}
async function he(r, e) {
  if (!m.workspace.workspaceFolders?.length) return;
  let t;
  if (e) t = e.rootUri;
  else if (r.repositories.length === 1) e = r.repositories[0], t = e.rootUri;
  else if (m.workspace.workspaceFolders.length === 1) t = m.workspace.workspaceFolders[0].uri;
  else {
    let u = m.workspace.workspaceFolders.map((g) => ({ label: g.name, folder: g })), d = m.l10n.t("Pick a folder to publish to GitHub"), E = await m.window.showQuickPick(u, { placeHolder: d });
    if (!E) return;
    t = E.folder.uri;
  }
  let s = m.window.createQuickPick();
  s.ignoreFocusOut = true, s.placeholder = "Repository Name", s.value = oo(t.fsPath), s.show(), s.busy = true;
  let o, i;
  try {
    i = await D(), o = (await i.users.getAuthenticated({})).data.login;
  } catch {
    s.dispose();
    return;
  }
  s.busy = false;
  let n, a, p = async () => {
    let u = no(s.value);
    u ? s.items = [{ label: "$(repo) Publish to GitHub private repository", description: `$(github) ${o}/${u}`, alwaysShow: true, repo: u, isPrivate: true }, { label: "$(repo) Publish to GitHub public repository", description: `$(github) ${o}/${u}`, alwaysShow: true, repo: u, isPrivate: false }] : s.items = [];
  };
  for (p(); ; ) {
    let u = s.onDidChangeValue(p), d = await io(s);
    if (u.dispose(), n = d?.repo, a = d?.isPrivate ?? true, n) try {
      s.busy = true, await i.repos.get({ owner: o, repo: n }), s.items = [{ label: "$(error) GitHub repository already exists", description: `$(github) ${o}/${n}`, alwaysShow: true }];
    } catch {
      break;
    } finally {
      s.busy = false;
    }
  }
  if (s.dispose(), !n) return;
  if (!e) {
    let u = m.Uri.joinPath(t, ".gitignore"), d = false;
    try {
      await m.workspace.fs.stat(u);
    } catch {
      d = true;
    }
    if (d) {
      s = m.window.createQuickPick(), s.placeholder = m.l10n.t("Select which files should be included in the repository."), s.canSelectMany = true, s.show();
      try {
        s.busy = true;
        let E = (await m.workspace.fs.readDirectory(t)).map(([T]) => T).filter((T) => T !== ".git");
        s.items = E.map((T) => ({ label: T })), s.selectedItems = s.items, s.busy = false;
        let g = await Promise.race([new Promise((T) => s.onDidAccept(() => T(s.selectedItems))), new Promise((T) => s.onDidHide(() => T(void 0)))]);
        if (!g || g.length === 0) return;
        let _ = new Set(E);
        if (g.forEach((T) => _.delete(T.label)), _.size > 0) {
          let T = [..._].map((N) => `/${N}`).join(`
`), v = new so();
          await m.workspace.fs.writeFile(u, v.encode(T));
        }
      } finally {
        s.dispose();
      }
    }
  }
  let c = await m.window.withProgress({ location: m.ProgressLocation.Notification, cancellable: false, title: "Publish to GitHub" }, async (u) => {
    u.report({ message: a ? m.l10n.t("Publishing to a private GitHub repository") : m.l10n.t("Publishing to a public GitHub repository"), increment: 25 });
    let d;
    if (de() ? d = await m.commands.executeCommand("github.codespaces.publish", { name: n, isPrivate: a }) : d = (await i.repos.createForAuthenticatedUser({ name: n, private: a })).data, d) {
      if (u.report({ message: m.l10n.t("Creating first commit"), increment: 25 }), !e) {
        if (e = await r.init(t, { defaultBranch: d.default_branch }) || void 0, !e) return;
        await e.commit("first commit", { all: true, postCommitCommand: null });
      }
      u.report({ message: m.l10n.t("Uploading files"), increment: 25 });
      let E = await e.getBranch("HEAD"), _ = m.workspace.getConfiguration("github").get("gitProtocol") === "https" ? d.clone_url : d.ssh_url;
      await e.addRemote("origin", _), await e.push("origin", E.name, true);
    }
    return d;
  });
  if (!c) return;
  let l = m.l10n.t("Open on GitHub");
  m.window.showInformationMessage(m.l10n.t('Successfully published the "{0}" repository to GitHub.', `${o}/${n}`), l).then((u) => {
    u === l && m.commands.executeCommand("vscode.open", m.Uri.parse(c.html_url));
  });
}
async function Pt(r, e) {
  let t = await r.getBranches({ contains: e, remote: true }), s = new Set(t.filter((a) => a.type === We.RemoteHead && a.remote).map((a) => a.remote)), o = r.state.remotes.filter((a) => s.has(a.name) && a.fetchUrl && f(a.fetchUrl));
  if (o.length === 0) {
    w.window.showInformationMessage(w.l10n.t("No GitHub remotes found that contain this commit."));
    return;
  }
  let i = o.find((a) => a.name === "upstream") ?? o.find((a) => a.name === "origin") ?? o[0], n = ze(i.fetchUrl, e);
  w.env.openExternal(w.Uri.parse(n));
}
function kt(r) {
  let e = new y();
  return e.add(w.commands.registerCommand("github.publish", async () => {
    try {
      he(r);
    } catch (t) {
      w.window.showErrorMessage(t.message);
    }
  })), e.add(w.commands.registerCommand("github.openOnGitHub", async (t, s) => {
    let o = ze(t, s);
    w.env.openExternal(w.Uri.parse(o));
  })), e.add(w.commands.registerCommand("github.graph.openOnGitHub", async (t, s) => {
    if (!t || !s) return;
    let o = r.repositories.find((i) => i.rootUri.fsPath === t.rootUri?.fsPath);
    o && await Pt(o, s.id);
  })), e.add(w.commands.registerCommand("github.timeline.openOnGitHub", async (t, s) => {
    if (!t.id || !s) return;
    let o = r.getRepository(s);
    o && await Pt(o, t.id);
  })), e;
}
import { workspace as Rt } from "vscode";
var ao = { dispose() {
} }, Qe = class {
  async getCredentials(e) {
    if (e.authority.replace(/:\d+$/, "").toLowerCase() !== "github.com") return;
    let s = await Ne();
    return { username: s.account.id, password: s.accessToken };
  }
}, Ee = class {
  constructor(e) {
    this.gitAPI = e;
    this.providerDisposable = ao;
    this._enabled = false;
    this.disposable = Rt.onDidChangeConfiguration((t) => {
      t.affectsConfiguration("github") && this.refresh();
    }), this.refresh();
  }
  set enabled(e) {
    this._enabled !== e && (this._enabled = e, e ? this.providerDisposable = this.gitAPI.registerCredentialsProvider(new Qe()) : this.providerDisposable.dispose());
  }
  refresh() {
    let t = Rt.getConfiguration("github", null).get("gitAuthentication", true);
    this.enabled = !!t;
  }
  dispose() {
    this.enabled = false, this.disposable.dispose();
  }
};
var Te = class {
  constructor(e) {
    this.gitAPI = e;
    this.name = "GitHub";
    this.icon = "github";
  }
  publishRepository(e) {
    return he(this.gitAPI, e);
  }
};
import { authentication as co, Disposable as po, EventEmitter as uo, workspace as At } from "vscode";
var lo = `
	query repositoryPermissions($owner: String!, $repo: String!) {
		repository(owner: $owner, name: $repo) {
			defaultBranchRef {
				name
			},
			viewerPermission
		}
	}
`, go = `
	query repositoryRulesets($owner: String!, $repo: String!, $cursor: String, $limit: Int = 100) {
		repository(owner: $owner, name: $repo) {
			rulesets(includeParents: true, first: $limit, after: $cursor) {
				nodes {
					name
					enforcement
					rules(type: PULL_REQUEST) {
						totalCount
					}
					conditions {
						refName {
							include
							exclude
						}
					}
					target
				},
				pageInfo {
					endCursor,
					hasNextPage
				}
			}
		}
	}
`, fe = class {
  constructor(e, t, s, o) {
    this.gitAPI = e;
    this.globalState = t;
    this.logger = s;
    this.telemetryReporter = o;
    this.disposables = new y();
    this.providers = /* @__PURE__ */ new Map();
    this._enabled = false;
    this.disposables.add(this.gitAPI.onDidOpenRepository((i) => {
      this._enabled && this.registerProvider(i);
    })), this.disposables.add(this.gitAPI.onDidCloseRepository((i) => {
      this.disposeProvider(i.rootUri.toString());
    })), this.disposables.add(At.onDidChangeConfiguration((i) => {
      i.affectsConfiguration("github.branchProtection") && this.updateEnablement();
    })), this.updateEnablement();
  }
  set enabled(e) {
    if (this._enabled !== e) {
      if (e) for (let t of this.gitAPI.repositories) this.registerProvider(t);
      else this.disposeProviders();
      this._enabled = e;
    }
  }
  registerProvider(e) {
    let t = e.rootUri.toString();
    this.disposeProvider(t);
    let s = new Ye(e, this.globalState, this.logger, this.telemetryReporter), o = this.gitAPI.registerBranchProtectionProvider(e.rootUri, s);
    this.providers.set(t, new po(() => {
      o.dispose(), s.dispose();
    }));
  }
  disposeProvider(e) {
    this.providers.get(e)?.dispose(), this.providers.delete(e);
  }
  disposeProviders() {
    for (let e of this.providers.values()) e.dispose();
    this.providers.clear();
  }
  updateEnablement() {
    let e = At.getConfiguration("github", null);
    this.enabled = e.get("branchProtection", true) === true;
  }
  dispose() {
    this.enabled = false, this.disposables.dispose();
  }
}, Ye = class {
  constructor(e, t, s, o) {
    this.repository = e;
    this.globalState = t;
    this.logger = s;
    this.telemetryReporter = o;
    this._onDidChangeBranchProtection = new uo();
    this.onDidChangeBranchProtection = this._onDidChangeBranchProtection.event;
    this.globalStateKey = `branchProtection:${this.repository.rootUri.toString()}`;
    this.disposables = new y();
    this.disposables.add(this._onDidChangeBranchProtection), this.branchProtection = this.globalState.get(this.globalStateKey, []), e.status().then(() => {
      this.disposables.add(co.onDidChangeSessions((i) => {
        i.provider.id === "github" && this.updateRepositoryBranchProtection();
      })), this.updateRepositoryBranchProtection();
    });
  }
  provideBranchProtection() {
    return this.branchProtection;
  }
  async getRepositoryDetails(e, t) {
    let s = await $(), { repository: o } = await s(lo, { owner: e, repo: t });
    return o;
  }
  async getRepositoryRulesets(e, t) {
    let s = [], o, i = await $();
    for (; ; ) {
      let { repository: n } = await i(go, { owner: e, repo: t, cursor: o });
      if (s.push(...(n.rulesets?.nodes ?? []).filter((a) => a && a.target === "BRANCH" && a.enforcement === "ACTIVE" && (a.rules?.totalCount ?? 0) > 0)), n.rulesets?.pageInfo.hasNextPage) o = n.rulesets.pageInfo.endCursor;
      else break;
    }
    return s;
  }
  async updateRepositoryBranchProtection() {
    let e = [];
    try {
      for (let t of this.repository.state.remotes) {
        let s = f(t.pushUrl ?? t.fetchUrl ?? "");
        if (!s) continue;
        this.logger.trace(`[GitHubBranchProtectionProvider][updateRepositoryBranchProtection] Fetching repository details for "${s.owner}/${s.repo}".`);
        let o = await this.getRepositoryDetails(s.owner, s.repo);
        if (o.viewerPermission !== "ADMIN" && o.viewerPermission !== "MAINTAIN" && o.viewerPermission !== "WRITE") {
          this.logger.trace(`[GitHubBranchProtectionProvider][updateRepositoryBranchProtection] Skipping branch protection for "${s.owner}/${s.repo}" due to missing repository write permission.`);
          continue;
        }
        let i = [], n = await this.getRepositoryRulesets(s.owner, s.repo);
        for (let a of n) i.push({ include: (a.conditions.refName?.include ?? []).map((p) => this.parseRulesetRefName(o, p)), exclude: (a.conditions.refName?.exclude ?? []).map((p) => this.parseRulesetRefName(o, p)) });
        e.push({ remote: t.name, rules: i });
      }
      this.branchProtection = e, this._onDidChangeBranchProtection.fire(this.repository.rootUri), await this.globalState.update(this.globalStateKey, e), this.logger.trace(`[GitHubBranchProtectionProvider][updateRepositoryBranchProtection] Branch protection for "${this.repository.rootUri.toString()}": ${JSON.stringify(e)}.`), this.telemetryReporter.sendTelemetryEvent("branchProtection", void 0, { rulesetCount: this.branchProtection.length });
    } catch (t) {
      this.logger.warn(`[GitHubBranchProtectionProvider][updateRepositoryBranchProtection] Failed to update repository branch protection: ${t.message}`), t instanceof F && this.branchProtection.length !== 0 && (this.branchProtection = e, this._onDidChangeBranchProtection.fire(this.repository.rootUri), await this.globalState.update(this.globalStateKey, void 0));
    }
  }
  parseRulesetRefName(e, t) {
    if (t.startsWith("refs/heads/")) return t.substring(11);
    switch (t) {
      case "~ALL":
        return "**/*";
      case "~DEFAULT_BRANCH":
        return e.defaultBranchRef.name;
      default:
        return t;
    }
  }
  dispose() {
    this.disposables.dispose();
  }
};
import { Uri as mo, workspace as ho } from "vscode";
var Eo = ["ssh", "https", "file"], be = class {
  constructor(e) {
    this.gitApi = e;
    this.disposables = [];
    this.disposables.push(...Eo.map((t) => ho.registerCanonicalUriProvider(t, this)));
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
  provideCanonicalUri(e, t, s) {
    if (t.targetScheme === "https") switch (e.scheme) {
      case "file": {
        let o = this.gitApi.getRepository(e);
        if (o?.state.remotes.find((n) => n.name === o.state.HEAD?.remote)?.pushUrl?.replace(/^(git@[^\/:]+)(:)/i, "ssh://$1/")) return St(e);
      }
      default:
        return St(e);
    }
  }
};
function St(r) {
  if (r.scheme === "ssh" && r.authority === "git@github.com") {
    let [e, t] = (r.path.endsWith(".git") ? r.path.slice(0, -4) : r.path).split("/").filter((s) => s.length > 0);
    return mo.parse(`https://github.com/${e}/${t}`);
  }
  if (r.scheme === "https" && r.authority === "github.com") return r;
}
import { authentication as To, l10n as Ot, workspace as Ct } from "vscode";
var fo = /(([A-Za-z0-9_.\-]+)\/([A-Za-z0-9_.\-]+))?(#|GH-)([1-9][0-9]*)($|\b)/g, bo = `
	query assignableUsers($owner: String!, $repo: String!) {
		repository(owner: $owner, name: $repo) {
			assignableUsers(first: 100) {
				nodes {
					id
					login
					name
					email
					avatarUrl
				}
			}
		}
	}
`, wo = `
	query commitAuthor($owner: String!, $repo: String!, $commit: String!) {
		repository(owner: $owner, name: $repo) {
			object(expression: $commit) {
				... on Commit {
					author {
						name
						email
						avatarUrl
						user {
							id
							login
						}
					}
				}
			}
		}
	}
`;
function _o(r) {
  return r?.match(/^([0-9]+)\+[^@]+@users\.noreply\.github\.com$/)?.[1];
}
function yo(r, e) {
  let t = (r.authorEmail ?? "").localeCompare(e.authorEmail ?? "");
  return t !== 0 ? t : (r.authorName ?? "").localeCompare(e.authorName ?? "");
}
var V = class {
  constructor(e, t) {
    this._gitAPI = e;
    this._logger = t;
    this._isUserAuthenticated = true;
    this._store = /* @__PURE__ */ new Map();
    this._disposables = new y();
    this._disposables.add(this._gitAPI.onDidCloseRepository((s) => this._onDidCloseRepository(s))), this._disposables.add(To.onDidChangeSessions((s) => {
      s.provider.id === "github" && (this._isUserAuthenticated = true);
    })), this._disposables.add(Ct.onDidChangeConfiguration((s) => {
      s.affectsConfiguration("github.showAvatar") && this._store.clear();
    }));
  }
  async provideAvatar(e, t) {
    this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][provideAvatar] Avatar resolution for ${t.commits.length} commit(s) in ${e.rootUri.fsPath}.`);
    let o = Ct.getConfiguration("github", e.rootUri).get("showAvatar", true) === true;
    if (!this._isUserAuthenticated || !o) {
      this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][provideAvatar] Avatar resolution is disabled. (${o === false ? "setting" : "auth"})`);
      return;
    }
    let i = Me(e);
    if (!i) {
      this._logger.trace("[GitHubSourceControlHistoryItemDetailsProvider][provideAvatar] Repository does not have a GitHub remote.");
      return;
    }
    try {
      let n = { cached: 0, email: 0, github: 0, incomplete: 0 };
      await this._loadAssignableUsers(i);
      let a = this._store.get(this._getRepositoryKey(i));
      if (!a) return;
      let p = bt(t.commits, yo), c = /* @__PURE__ */ new Map();
      return await Promise.all(p.map(async (l) => {
        if (l.length === 0) return;
        let u = a.users.find((g) => g.email === l[0].authorEmail || g.name === l[0].authorName)?.avatarUrl;
        if (u) {
          n.cached += l.length, l.forEach(({ hash: g }) => c.set(g, `${u}&s=${t.size}`));
          return;
        }
        if (l.some(({ hash: g }) => a.commits.has(g))) {
          l.forEach(({ hash: g }) => c.set(g, void 0));
          return;
        }
        let d = _o(l[0].authorEmail);
        if (d) {
          n.email += l.length;
          let g = _t(d, t.size);
          l.forEach(({ hash: _ }) => c.set(_, g));
          return;
        }
        let E = await this._getCommitAuthor(i, l[0].hash);
        if (!E) {
          n.incomplete += l.length;
          for (let { hash: g } of l) a.commits.add(g), c.set(g, void 0);
          return;
        }
        a.users.push(E), n.github += l.length, l.forEach(({ hash: g }) => c.set(g, `${E.avatarUrl}&s=${t.size}`));
      })), this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][provideAvatar] Avatar resolution for ${t.commits.length} commit(s) in ${e.rootUri.fsPath} complete: ${JSON.stringify(n)}.`), c;
    } catch (n) {
      n instanceof F && (this._isUserAuthenticated = false);
      return;
    }
  }
  async provideHoverCommands(e) {
    let t = Be(e);
    if (t) return [{ title: Ot.t("{0} Open on GitHub", "$(github)"), tooltip: Ot.t("Open on GitHub"), command: "github.openOnGitHub", arguments: [t] }];
  }
  async provideMessageLinks(e, t) {
    let s = Me(e);
    if (s) return t.replace(fo, (o, i, n, a, p, c) => {
      if (!c || Number.isNaN(parseInt(c))) return o;
      let l = n && a ? `${n}/${a}#${c}` : `#${c}`;
      return n = n ?? s.owner, a = a ?? s.repo, `[${l}](https://github.com/${n}/${a}/issues/${c})`;
    });
  }
  _onDidCloseRepository(e) {
    for (let t of e.state.remotes) {
      if (!t.fetchUrl) continue;
      let s = f(t.fetchUrl);
      s && this._store.delete(this._getRepositoryKey(s));
    }
  }
  async _loadAssignableUsers(e) {
    if (!this._store.has(this._getRepositoryKey(e))) {
      this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][_loadAssignableUsers] Querying assignable user(s) for ${e.owner}/${e.repo}.`);
      try {
        let t = await $(), { repository: s } = await t(bo, e), o = [];
        for (let i of s.assignableUsers.nodes ?? []) i && o.push({ id: i.id, login: i.login, name: i.name, email: i.email, avatarUrl: i.avatarUrl });
        this._store.set(this._getRepositoryKey(e), { users: o, commits: /* @__PURE__ */ new Set() }), this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][_loadAssignableUsers] Successfully queried assignable user(s) for ${e.owner}/${e.repo}: ${o.length} user(s).`);
      } catch (t) {
        throw this._logger.warn(`[GitHubSourceControlHistoryItemDetailsProvider][_loadAssignableUsers] Failed to load assignable user(s) for ${e.owner}/${e.repo}: ${t}`), t;
      }
    }
  }
  async _getCommitAuthor(e, t) {
    this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][_getCommitAuthor] Querying commit author for ${e.owner}/${e.repo}/${t}.`);
    try {
      let s = await $(), { repository: o } = await s(wo, { ...e, commit: t }), i = o.object.author;
      if (!i?.user?.id || !i.user?.login || !i?.name || !i?.email || !i?.avatarUrl) {
        this._logger.info(`[GitHubSourceControlHistoryItemDetailsProvider][_getCommitAuthor] Incomplete commit author for ${e.owner}/${e.repo}/${t}: ${JSON.stringify(o.object)}`);
        return;
      }
      let n = { id: i.user.id, login: i.user.login, name: i.name, email: i.email, avatarUrl: i.avatarUrl };
      return this._logger.trace(`[GitHubSourceControlHistoryItemDetailsProvider][_getCommitAuthor] Successfully queried commit author for ${e.owner}/${e.repo}/${t}: ${n.login}.`), n;
    } catch (s) {
      throw this._logger.warn(`[GitHubSourceControlHistoryItemDetailsProvider][_getCommitAuthor] Failed to get commit author for ${e.owner}/${e.repo}/${t}: ${s}`), s;
    }
  }
  _getRepositoryKey(e) {
    return `${e.owner}/${e.repo}`;
  }
  dispose() {
    this._disposables.dispose();
  }
};
sr([ft], V.prototype, "_loadAssignableUsers", 1);
var vo = { dispose: () => {
} }, Go = (r, e, t) => vo, K = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = Go;
  }
  sendTelemetryEvent(e, t, s) {
  }
  sendRawTelemetryEvent(e, t, s) {
  }
  sendDangerousTelemetryEvent(e, t, s) {
  }
  sendTelemetryErrorEvent(e, t, s) {
  }
  sendDangerousTelemetryErrorEvent(e, t, s) {
  }
  dispose() {
    return Promise.resolve();
  }
};
function pa(r) {
  let e = [];
  r.subscriptions.push(new Ut(() => Ut.from(...e).dispose()));
  let t = Ro.createOutputChannel("GitHub", { log: true });
  e.push(t);
  let s = (i) => {
    t.appendLine(Po.t("Log level: {0}", ko[i]));
  };
  e.push(t.onDidChangeLogLevel(s)), s(t.logLevel);
  let o = new K("");
  e.push(o), e.push(Ao()), e.push(Oo(r, o, t));
}
function Ao() {
  let r = new y(), e = () => {
    try {
      let o = s.getAPI(1);
      r.add(o.registerRemoteSourceProvider(new ue()));
    } catch (o) {
      console.error("Could not initialize GitHub extension"), console.warn(o);
    }
  }, t = (o) => {
    o ? e() : r.dispose();
  }, s = Q.getExtension("vscode.git-base").exports;
  return r.add(s.onDidChangeEnablement(t)), t(s.enabled), r;
}
function So(r, e) {
  if (r.repositories.find((t) => ce(t))) Je.executeCommand("setContext", "github.hasGitHubRepo", true);
  else {
    let t = r.onDidOpenRepository(async (s) => {
      await s.status(), ce(s) && (Je.executeCommand("setContext", "github.hasGitHubRepo", true), t.dispose());
    });
    e.add(t);
  }
}
function Oo(r, e, t) {
  let s = new y(), o = Q.getExtension("vscode.git"), i = () => {
    o.activate().then((n) => {
      let a = (p) => {
        if (p) {
          let c = n.getAPI(1);
          s.add(kt(c)), s.add(new Ee(c)), s.add(new fe(c, r.globalState, t, e)), s.add(c.registerPushErrorHandler(new ge(e))), s.add(c.registerRemoteSourcePublisher(new Te(c))), s.add(c.registerSourceControlHistoryItemDetailsProvider(new V(c, t))), s.add(new be(c)), So(c, s), Je.executeCommand("setContext", "git-base.gitEnabled", true);
        } else s.dispose();
      };
      s.add(n.onDidChangeEnablement(a)), a(n.enabled);
    });
  };
  if (o) i();
  else {
    let n = Q.onDidChange(() => {
      !o && Q.getExtension("vscode.git") && (o = Q.getExtension("vscode.git"), i(), n.dispose());
    });
    s.add(n);
  }
  return s;
}
export { pa as activate };
