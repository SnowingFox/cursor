"use strict";
var ot = Object.create;
var K = Object.defineProperty;
var nt = Object.getOwnPropertyDescriptor;
var it = Object.getOwnPropertyNames;
var at = Object.getPrototypeOf, ct = Object.prototype.hasOwnProperty;
var b = (e, r) => () => (e && (r = e(e = 0)), r);
var pe = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), xe = (e, r) => {
  for (var s in r) K(e, s, { get: r[s], enumerable: true });
}, Ce = (e, r, s, t) => {
  if (r && typeof r == "object" || typeof r == "function") for (let o of it(r)) !ct.call(e, o) && o !== s && K(e, o, { get: () => r[o], enumerable: !(t = nt(r, o)) || t.enumerable });
  return e;
};
var j = (e, r, s) => (s = e != null ? ot(at(e)) : {}, Ce(r || !e || !e.__esModule ? K(s, "default", { value: e, enumerable: true }) : s, e)), pt = (e) => Ce(K({}, "__esModule", { value: true }), e);
var Ze = pe((q) => {
  "use strict";
  var Vs = require("net"), wt = require("tls"), ue = require("http"), ze = require("https"), _t = require("events"), Hs = require("assert"), vt = require("util");
  q.httpOverHttp = kt;
  q.httpsOverHttp = yt;
  q.httpOverHttps = Gt;
  q.httpsOverHttps = Pt;
  function kt(e) {
    var r = new P(e);
    return r.request = ue.request, r;
  }
  function yt(e) {
    var r = new P(e);
    return r.request = ue.request, r.createSocket = Ke, r.defaultPort = 443, r;
  }
  function Gt(e) {
    var r = new P(e);
    return r.request = ze.request, r;
  }
  function Pt(e) {
    var r = new P(e);
    return r.request = ze.request, r.createSocket = Ke, r.defaultPort = 443, r;
  }
  function P(e) {
    var r = this;
    r.options = e || {}, r.proxyOptions = r.options.proxy || {}, r.maxSockets = r.options.maxSockets || ue.Agent.defaultMaxSockets, r.requests = [], r.sockets = [], r.on("free", function(t, o, n, i) {
      for (var a = Je(o, n, i), c = 0, p = r.requests.length; c < p; ++c) {
        var u = r.requests[c];
        if (u.host === a.host && u.port === a.port) {
          r.requests.splice(c, 1), u.request.onSocket(t);
          return;
        }
      }
      t.destroy(), r.removeSocket(t);
    });
  }
  vt.inherits(P, _t.EventEmitter);
  P.prototype.addRequest = function(r, s, t, o) {
    var n = this, i = ge({ request: r }, n.options, Je(s, t, o));
    if (n.sockets.length >= this.maxSockets) {
      n.requests.push(i);
      return;
    }
    n.createSocket(i, function(a) {
      a.on("free", c), a.on("close", p), a.on("agentRemove", p), r.onSocket(a);
      function c() {
        n.emit("free", a, i);
      }
      function p(u) {
        n.removeSocket(a), a.removeListener("free", c), a.removeListener("close", p), a.removeListener("agentRemove", p);
      }
    });
  };
  P.prototype.createSocket = function(r, s) {
    var t = this, o = {};
    t.sockets.push(o);
    var n = ge({}, t.proxyOptions, { method: "CONNECT", path: r.host + ":" + r.port, agent: false, headers: { host: r.host + ":" + r.port } });
    r.localAddress && (n.localAddress = r.localAddress), n.proxyAuth && (n.headers = n.headers || {}, n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64")), S("making CONNECT request");
    var i = t.request(n);
    i.useChunkedEncodingByDefault = false, i.once("response", a), i.once("upgrade", c), i.once("connect", p), i.once("error", u), i.end();
    function a(l) {
      l.upgrade = true;
    }
    function c(l, h, k) {
      process.nextTick(function() {
        p(l, h, k);
      });
    }
    function p(l, h, k) {
      if (i.removeAllListeners(), h.removeAllListeners(), l.statusCode !== 200) {
        S("tunneling socket could not be established, statusCode=%d", l.statusCode), h.destroy();
        var y = new Error("tunneling socket could not be established, statusCode=" + l.statusCode);
        y.code = "ECONNRESET", r.request.emit("error", y), t.removeSocket(o);
        return;
      }
      if (k.length > 0) {
        S("got illegal response body from proxy"), h.destroy();
        var y = new Error("got illegal response body from proxy");
        y.code = "ECONNRESET", r.request.emit("error", y), t.removeSocket(o);
        return;
      }
      return S("tunneling connection has established"), t.sockets[t.sockets.indexOf(o)] = h, s(h);
    }
    function u(l) {
      i.removeAllListeners(), S(`tunneling socket could not be established, cause=%s
`, l.message, l.stack);
      var h = new Error("tunneling socket could not be established, cause=" + l.message);
      h.code = "ECONNRESET", r.request.emit("error", h), t.removeSocket(o);
    }
  };
  P.prototype.removeSocket = function(r) {
    var s = this.sockets.indexOf(r);
    if (s !== -1) {
      this.sockets.splice(s, 1);
      var t = this.requests.shift();
      t && this.createSocket(t, function(o) {
        t.request.onSocket(o);
      });
    }
  };
  function Ke(e, r) {
    var s = this;
    P.prototype.createSocket.call(s, e, function(t) {
      var o = e.request.getHeader("host"), n = ge({}, s.options, { socket: t, servername: o ? o.replace(/:.*$/, "") : e.host }), i = wt.connect(0, n);
      s.sockets[s.sockets.indexOf(t)] = i, r(i);
    });
  }
  function Je(e, r, s) {
    return typeof e == "string" ? { host: e, port: r, localAddress: s } : e;
  }
  function ge(e) {
    for (var r = 1, s = arguments.length; r < s; ++r) {
      var t = arguments[r];
      if (typeof t == "object") for (var o = Object.keys(t), n = 0, i = o.length; n < i; ++n) {
        var a = o[n];
        t[a] !== void 0 && (e[a] = t[a]);
      }
    }
    return e;
  }
  var S;
  process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? S = function() {
    var e = Array.prototype.slice.call(arguments);
    typeof e[0] == "string" ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e);
  } : S = function() {
  };
  q.debug = S;
});
var Ye = pe((Ms, Xe) => {
  Xe.exports = Ze();
});
function Q() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var fe = b(() => {
});
function ee(e, r, s, t) {
  if (typeof s != "function") throw new Error("method for before hook must be a function");
  return t || (t = {}), Array.isArray(r) ? r.reverse().reduce((o, n) => ee.bind(null, e, n, o, t), s)() : Promise.resolve().then(() => e.registry[r] ? e.registry[r].reduce((o, n) => n.hook.bind(null, o, t), s)() : s(t));
}
var tr = b(() => {
});
function sr(e, r, s, t) {
  let o = t;
  e.registry[s] || (e.registry[s] = []), r === "before" && (t = (n, i) => Promise.resolve().then(o.bind(null, i)).then(n.bind(null, i))), r === "after" && (t = (n, i) => {
    let a;
    return Promise.resolve().then(n.bind(null, i)).then((c) => (a = c, o(a, i))).then(() => a);
  }), r === "error" && (t = (n, i) => Promise.resolve().then(n.bind(null, i)).catch((a) => o(a, i))), e.registry[s].push({ hook: t, orig: o });
}
var or = b(() => {
});
function nr(e, r, s) {
  if (!e.registry[r]) return;
  let t = e.registry[r].map((o) => o.orig).indexOf(s);
  t !== -1 && e.registry[r].splice(t, 1);
}
var ir = b(() => {
});
function pr(e, r, s) {
  let t = cr(nr, null).apply(null, s ? [r, s] : [r]);
  e.api = { remove: t }, e.remove = t, ["before", "error", "after", "wrap"].forEach((o) => {
    let n = s ? [r, o, s] : [r, o];
    e[o] = e.api[o] = cr(sr, null).apply(null, n);
  });
}
function At() {
  let e = /* @__PURE__ */ Symbol("Singular"), r = { registry: {} }, s = ee.bind(null, r, e);
  return pr(s, r, e), s;
}
function St() {
  let e = { registry: {} }, r = ee.bind(null, e);
  return pr(r, e), r;
}
var ar, cr, lr, ur = b(() => {
  tr();
  or();
  ir();
  ar = Function.bind, cr = ar.bind(ar);
  lr = { Singular: At, Collection: St };
});
function re() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var he = b(() => {
});
function Lt(e) {
  return e ? Object.keys(e).reduce((r, s) => (r[s.toLowerCase()] = e[s], r), {}) : {};
}
function jt(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  let r = Object.getPrototypeOf(e);
  if (r === null) return true;
  let s = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
function mr(e, r) {
  let s = Object.assign({}, e);
  return Object.keys(r).forEach((t) => {
    jt(r[t]) ? t in e ? s[t] = mr(e[t], r[t]) : Object.assign(s, { [t]: r[t] }) : Object.assign(s, { [t]: r[t] });
  }), s;
}
function gr(e) {
  for (let r in e) e[r] === void 0 && delete e[r];
  return e;
}
function Ee(e, r, s) {
  if (typeof r == "string") {
    let [o, n] = r.split(" ");
    s = Object.assign(n ? { method: o, url: n } : { url: o }, s);
  } else s = Object.assign({}, r);
  s.headers = Lt(s.headers), gr(s), gr(s.headers);
  let t = mr(e || {}, s);
  return s.url === "/graphql" && (e && e.mediaType.previews?.length && (t.mediaType.previews = e.mediaType.previews.filter((o) => !t.mediaType.previews.includes(o)).concat(t.mediaType.previews)), t.mediaType.previews = (t.mediaType.previews || []).map((o) => o.replace(/-preview/, ""))), t;
}
function Dt(e, r) {
  let s = /\?/.test(e) ? "&" : "?", t = Object.keys(r);
  return t.length === 0 ? e : e + s + t.map((o) => o === "q" ? "q=" + r.q.split("+").map(encodeURIComponent).join("+") : `${o}=${encodeURIComponent(r[o])}`).join("&");
}
function xt(e) {
  return e.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function Ct(e) {
  let r = e.match(It);
  return r ? r.map(xt).reduce((s, t) => s.concat(t), []) : [];
}
function dr(e, r) {
  let s = { __proto__: null };
  for (let t of Object.keys(e)) r.indexOf(t) === -1 && (s[t] = e[t]);
  return s;
}
function fr(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(r) {
    return /%[0-9A-Fa-f]/.test(r) || (r = encodeURI(r).replace(/%5B/g, "[").replace(/%5D/g, "]")), r;
  }).join("");
}
function $(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(r) {
    return "%" + r.charCodeAt(0).toString(16).toUpperCase();
  });
}
function H(e, r, s) {
  return r = e === "+" || e === "#" ? fr(r) : $(r), s ? $(s) + "=" + r : r;
}
function N(e) {
  return e != null;
}
function Te(e) {
  return e === ";" || e === "&" || e === "?";
}
function qt(e, r, s, t) {
  var o = e[s], n = [];
  if (N(o) && o !== "") if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") o = o.toString(), t && t !== "*" && (o = o.substring(0, parseInt(t, 10))), n.push(H(r, o, Te(r) ? s : ""));
  else if (t === "*") Array.isArray(o) ? o.filter(N).forEach(function(i) {
    n.push(H(r, i, Te(r) ? s : ""));
  }) : Object.keys(o).forEach(function(i) {
    N(o[i]) && n.push(H(r, o[i], i));
  });
  else {
    let i = [];
    Array.isArray(o) ? o.filter(N).forEach(function(a) {
      i.push(H(r, a));
    }) : Object.keys(o).forEach(function(a) {
      N(o[a]) && (i.push($(a)), i.push(H(r, o[a].toString())));
    }), Te(r) ? n.push($(s) + "=" + i.join(",")) : i.length !== 0 && n.push(i.join(","));
  }
  else r === ";" ? N(o) && n.push($(s)) : o === "" && (r === "&" || r === "?") ? n.push($(s) + "=") : o === "" && n.push("");
  return n;
}
function Nt(e) {
  return { expand: $t.bind(null, e) };
}
function $t(e, r) {
  var s = ["+", "#", ".", "/", ";", "?", "&"];
  return e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(t, o, n) {
    if (o) {
      let a = "", c = [];
      if (s.indexOf(o.charAt(0)) !== -1 && (a = o.charAt(0), o = o.substr(1)), o.split(/,/g).forEach(function(p) {
        var u = /([^:\*]*)(?::(\d+)|(\*))?/.exec(p);
        c.push(qt(r, a, u[1], u[2] || u[3]));
      }), a && a !== "+") {
        var i = ",";
        return a === "?" ? i = "&" : a !== "#" && (i = a), (c.length !== 0 ? a : "") + c.join(i);
      } else return c.join(",");
    } else return fr(n);
  }), e === "/" ? e : e.replace(/\/$/, "");
}
function hr(e) {
  let r = e.method.toUpperCase(), s = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), t = Object.assign({}, e.headers), o, n = dr(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]), i = Ct(s);
  s = Nt(s).expand(n), /^http/.test(s) || (s = e.baseUrl + s);
  let a = Object.keys(e).filter((u) => i.includes(u)).concat("baseUrl"), c = dr(n, a);
  if (!/application\/octet-stream/i.test(t.accept) && (e.mediaType.format && (t.accept = t.accept.split(/,/).map((u) => u.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")), s.endsWith("/graphql") && e.mediaType.previews?.length)) {
    let u = t.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
    t.accept = u.concat(e.mediaType.previews).map((l) => {
      let h = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${l}-preview${h}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(r) ? s = Dt(s, c) : "data" in c ? o = c.data : Object.keys(c).length && (o = c), !t["content-type"] && typeof o < "u" && (t["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(r) && typeof o > "u" && (o = ""), Object.assign({ method: r, url: s, headers: t }, typeof o < "u" ? { body: o } : null, e.request ? { request: e.request } : null);
}
function Bt(e, r, s) {
  return hr(Ee(e, r, s));
}
function Tr(e, r) {
  let s = Ee(e, r), t = Bt.bind(null, s);
  return Object.assign(t, { DEFAULTS: s, defaults: Tr.bind(null, s), merge: Ee.bind(null, s), parse: hr });
}
var Rt, Ft, Ut, It, Er, br = b(() => {
  he();
  Rt = "0.0.0-development", Ft = `octokit-endpoint.js/${Rt} ${re()}`, Ut = { method: "GET", baseUrl: "https://api.github.com", headers: { accept: "application/vnd.github.v3+json", "user-agent": Ft }, mediaType: { format: "" } };
  It = /\{[^{}}]+\}/g;
  Er = Tr(null, Ut);
});
var kr = pe((io, W) => {
  "use strict";
  var oe = function() {
  };
  oe.prototype = /* @__PURE__ */ Object.create(null);
  var te = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu, se = /\\([\v\u0020-\u00ff])/gu, wr = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u, F = { type: "", parameters: new oe() };
  Object.freeze(F.parameters);
  Object.freeze(F);
  function _r(e) {
    if (typeof e != "string") throw new TypeError("argument header is required and must be a string");
    let r = e.indexOf(";"), s = r !== -1 ? e.slice(0, r).trim() : e.trim();
    if (wr.test(s) === false) throw new TypeError("invalid media type");
    let t = { type: s.toLowerCase(), parameters: new oe() };
    if (r === -1) return t;
    let o, n, i;
    for (te.lastIndex = r; n = te.exec(e); ) {
      if (n.index !== r) throw new TypeError("invalid parameter format");
      r += n[0].length, o = n[1].toLowerCase(), i = n[2], i[0] === '"' && (i = i.slice(1, i.length - 1), se.test(i) && (i = i.replace(se, "$1"))), t.parameters[o] = i;
    }
    if (r !== e.length) throw new TypeError("invalid parameter format");
    return t;
  }
  function vr(e) {
    if (typeof e != "string") return F;
    let r = e.indexOf(";"), s = r !== -1 ? e.slice(0, r).trim() : e.trim();
    if (wr.test(s) === false) return F;
    let t = { type: s.toLowerCase(), parameters: new oe() };
    if (r === -1) return t;
    let o, n, i;
    for (te.lastIndex = r; n = te.exec(e); ) {
      if (n.index !== r) return F;
      r += n[0].length, o = n[1].toLowerCase(), i = n[2], i[0] === '"' && (i = i.slice(1, i.length - 1), se.test(i) && (i = i.replace(se, "$1"))), t.parameters[o] = i;
    }
    return r !== e.length ? F : t;
  }
  W.exports.default = { parse: _r, safeParse: vr };
  W.exports.parse = _r;
  W.exports.safeParse = vr;
  W.exports.defaultContentType = F;
});
var U, yr = b(() => {
  U = class extends Error {
    name;
    status;
    request;
    response;
    constructor(r, s, t) {
      super(r), this.name = "HttpError", this.status = Number.parseInt(s), Number.isNaN(this.status) && (this.status = 0), "response" in t && (this.response = t.response);
      let o = Object.assign({}, t.request);
      t.request.headers.authorization && (o.headers = Object.assign({}, t.request.headers, { authorization: t.request.headers.authorization.replace(/(?<! ) .*$/, " [REDACTED]") })), o.url = o.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = o;
    }
  };
});
function Wt(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return false;
  let r = Object.getPrototypeOf(e);
  if (r === null) return true;
  let s = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof s == "function" && s instanceof s && Function.prototype.call(s) === Function.prototype.call(e);
}
async function Gr(e) {
  let r = e.request?.fetch || globalThis.fetch;
  if (!r) throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
  let s = e.request?.log || console, t = e.request?.parseSuccessResponseBody !== false, o = Wt(e.body) || Array.isArray(e.body) ? JSON.stringify(e.body) : e.body, n = Object.fromEntries(Object.entries(e.headers).map(([l, h]) => [l, String(h)])), i;
  try {
    i = await r(e.url, { method: e.method, body: o, redirect: e.request?.redirect, headers: n, signal: e.request?.signal, ...e.body && { duplex: "half" } });
  } catch (l) {
    let h = "Unknown Error";
    if (l instanceof Error) {
      if (l.name === "AbortError") throw l.status = 500, l;
      h = l.message, l.name === "TypeError" && "cause" in l && (l.cause instanceof Error ? h = l.cause.message : typeof l.cause == "string" && (h = l.cause));
    }
    let k = new U(h, 500, { request: e });
    throw k.cause = l, k;
  }
  let a = i.status, c = i.url, p = {};
  for (let [l, h] of i.headers) p[l] = h;
  let u = { url: c, status: a, headers: p, data: "" };
  if ("deprecation" in p) {
    let l = p.link && p.link.match(/<([^<>]+)>; rel="deprecation"/), h = l && l.pop();
    s.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${p.sunset}${h ? `. See ${h}` : ""}`);
  }
  if (a === 204 || a === 205) return u;
  if (e.method === "HEAD") {
    if (a < 400) return u;
    throw new U(i.statusText, a, { response: u, request: e });
  }
  if (a === 304) throw u.data = await be(i), new U("Not modified", a, { response: u, request: e });
  if (a >= 400) throw u.data = await be(i), new U(zt(u.data), a, { response: u, request: e });
  return u.data = t ? await be(i) : i.body, u;
}
async function be(e) {
  let r = e.headers.get("content-type");
  if (!r) return e.text().catch(() => "");
  let s = (0, Pr.safeParse)(r);
  if (Mt(s)) {
    let t = "";
    try {
      return t = await e.text(), JSON.parse(t);
    } catch {
      return t;
    }
  } else return s.type.startsWith("text/") || s.parameters.charset?.toLowerCase() === "utf-8" ? e.text().catch(() => "") : e.arrayBuffer().catch(() => new ArrayBuffer(0));
}
function Mt(e) {
  return e.type === "application/json" || e.type === "application/scim+json";
}
function zt(e) {
  if (typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return "Unknown error";
  if ("message" in e) {
    let r = "documentation_url" in e ? ` - ${e.documentation_url}` : "";
    return Array.isArray(e.errors) ? `${e.message}: ${e.errors.map((s) => JSON.stringify(s)).join(", ")}${r}` : `${e.message}${r}`;
  }
  return `Unknown error: ${JSON.stringify(e)}`;
}
function we(e, r) {
  let s = e.defaults(r);
  return Object.assign(function(o, n) {
    let i = s.merge(o, n);
    if (!i.request || !i.request.hook) return Gr(s.parse(i));
    let a = (c, p) => Gr(s.parse(s.merge(c, p)));
    return Object.assign(a, { endpoint: s, defaults: we.bind(null, s) }), i.request.hook(a, i);
  }, { endpoint: s, defaults: we.bind(null, s) });
}
var Pr, Vt, Ht, M, _e = b(() => {
  br();
  he();
  Pr = j(kr(), 1);
  yr();
  Vt = "9.2.4", Ht = { headers: { "user-agent": `octokit-request.js/${Vt} ${re()}` } };
  M = we(Er, Ht);
});
function Jt(e) {
  return `Request failed due to following response errors:
` + e.errors.map((r) => ` - ${r.message}`).join(`
`);
}
function Qt(e, r, s) {
  if (s) {
    if (typeof r == "string" && "query" in s) return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
    for (let i in s) if (Yt.includes(i)) return Promise.reject(new Error(`[@octokit/graphql] "${i}" cannot be used as variable name`));
  }
  let t = typeof r == "string" ? Object.assign({ query: r }, s) : r, o = Object.keys(t).reduce((i, a) => Xt.includes(a) ? (i[a] = t[a], i) : (i.variables || (i.variables = {}), i.variables[a] = t[a], i), {}), n = t.baseUrl || e.endpoint.DEFAULTS.baseUrl;
  return Or.test(n) && (o.url = n.replace(Or, "/api/graphql")), e(o).then((i) => {
    if (i.data.errors) {
      let a = {};
      for (let c of Object.keys(i.headers)) a[c] = i.headers[c];
      throw new Zt(o, a, i.data);
    }
    return i.data.data;
  });
}
function ve(e, r) {
  let s = e.defaults(r);
  return Object.assign((o, n) => Qt(s, o, n), { defaults: ve.bind(null, s), endpoint: s.endpoint });
}
function Ar(e) {
  return ve(e, { method: "POST", url: "/graphql" });
}
var Kt, Zt, Xt, Yt, Or, fo, Sr = b(() => {
  _e();
  fe();
  Kt = "0.0.0-development";
  Zt = class extends Error {
    constructor(e, r, s) {
      super(Jt(s)), this.request = e, this.headers = r, this.response = s, this.errors = s.errors, this.data = s.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
    name = "GraphqlResponseError";
    errors;
    data;
  }, Xt = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType", "operationName"], Yt = ["query", "method", "url"], Or = /\/api\/v3\/?$/;
  fo = ve(M, { headers: { "user-agent": `octokit-graphql.js/${Kt} ${Q()}` }, method: "POST", url: "/graphql" });
});
async function rs(e) {
  let r = es(e), s = e.startsWith("v1.") || e.startsWith("ghs_"), t = e.startsWith("ghu_");
  return { type: "token", token: e, tokenType: r ? "app" : s ? "installation" : t ? "user-to-server" : "oauth" };
}
function ts(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function ss(e, r, s, t) {
  let o = r.endpoint.merge(s, t);
  return o.headers.authorization = ts(e), r(o);
}
var ke, Rr, Fr, es, Ur, Lr = b(() => {
  ke = "(?:[a-zA-Z0-9_-]+)", Rr = "\\.", Fr = new RegExp(`^${ke}${Rr}${ke}${Rr}${ke}$`), es = Fr.test.bind(Fr);
  Ur = function(r) {
    if (!r) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    if (typeof r != "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    return r = r.replace(/^(token|bearer) +/i, ""), Object.assign(rs.bind(null, r), { hook: ss.bind(null, r) });
  };
});
var ye, jr = b(() => {
  ye = "6.1.6";
});
function is(e = {}) {
  return typeof e.debug != "function" && (e.debug = Dr), typeof e.info != "function" && (e.info = Dr), typeof e.warn != "function" && (e.warn = os), typeof e.error != "function" && (e.error = ns), e;
}
var Dr, os, ns, Ir, ne, xr = b(() => {
  fe();
  ur();
  _e();
  Sr();
  Lr();
  jr();
  Dr = () => {
  }, os = console.warn.bind(console), ns = console.error.bind(console);
  Ir = `octokit-core.js/${ye} ${Q()}`, ne = class {
    static VERSION = ye;
    static defaults(r) {
      return class extends this {
        constructor(...t) {
          let o = t[0] || {};
          if (typeof r == "function") {
            super(r(o));
            return;
          }
          super(Object.assign({}, r, o, o.userAgent && r.userAgent ? { userAgent: `${o.userAgent} ${r.userAgent}` } : null));
        }
      };
    }
    static plugins = [];
    static plugin(...r) {
      let s = this.plugins;
      return class extends this {
        static plugins = s.concat(r.filter((o) => !s.includes(o)));
      };
    }
    constructor(r = {}) {
      let s = new lr.Collection(), t = { baseUrl: M.endpoint.DEFAULTS.baseUrl, headers: {}, request: Object.assign({}, r.request, { hook: s.bind(null, "request") }), mediaType: { previews: [], format: "" } };
      if (t.headers["user-agent"] = r.userAgent ? `${r.userAgent} ${Ir}` : Ir, r.baseUrl && (t.baseUrl = r.baseUrl), r.previews && (t.mediaType.previews = r.previews), r.timeZone && (t.headers["time-zone"] = r.timeZone), this.request = M.defaults(t), this.graphql = Ar(this.request).defaults(t), this.log = is(r.log), this.hook = s, r.authStrategy) {
        let { authStrategy: n, ...i } = r, a = n(Object.assign({ request: this.request, log: this.log, octokit: this, octokitOptions: i }, r.auth));
        s.wrap("request", a.hook), this.auth = a;
      } else if (!r.auth) this.auth = async () => ({ type: "unauthenticated" });
      else {
        let n = Ur(r.auth);
        s.wrap("request", n.hook), this.auth = n;
      }
      let o = this.constructor;
      for (let n = 0; n < o.plugins.length; ++n) Object.assign(this, o.plugins[n](this, r));
    }
    request;
    graphql;
    log;
    hook;
    auth;
  };
});
var Cr, qr = b(() => {
  Cr = "5.3.1";
});
function Ge(e) {
  e.hook.wrap("request", (r, s) => {
    e.log.debug("request", s);
    let t = Date.now(), o = e.request.endpoint.parse(s), n = o.url.replace(s.baseUrl, "");
    return r(s).then((i) => {
      let a = i.headers["x-github-request-id"];
      return e.log.info(`${o.method} ${n} - ${i.status} with id ${a} in ${Date.now() - t}ms`), i;
    }).catch((i) => {
      let a = i.response?.headers["x-github-request-id"] || "UNKNOWN";
      throw e.log.error(`${o.method} ${n} - ${i.status} with id ${a} in ${Date.now() - t}ms`), i;
    });
  });
}
var Nr = b(() => {
  qr();
  Ge.VERSION = Cr;
});
function cs(e) {
  if (!e.data) return { ...e, data: [] };
  if (!("total_count" in e.data && !("url" in e.data))) return e;
  let s = e.data.incomplete_results, t = e.data.repository_selection, o = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  let n = Object.keys(e.data)[0], i = e.data[n];
  return e.data = i, typeof s < "u" && (e.data.incomplete_results = s), typeof t < "u" && (e.data.repository_selection = t), e.data.total_count = o, e;
}
function Pe(e, r, s) {
  let t = typeof r == "function" ? r.endpoint(s) : e.request.endpoint(r, s), o = typeof r == "function" ? r : e.request, n = t.method, i = t.headers, a = t.url;
  return { [Symbol.asyncIterator]: () => ({ async next() {
    if (!a) return { done: true };
    try {
      let c = await o({ method: n, url: a, headers: i }), p = cs(c);
      return a = ((p.headers.link || "").match(/<([^<>]+)>;\s*rel="next"/) || [])[1], { value: p };
    } catch (c) {
      if (c.status !== 409) throw c;
      return a = "", { value: { status: 200, headers: {}, data: [] } };
    }
  } }) };
}
function $r(e, r, s, t) {
  return typeof s == "function" && (t = s, s = void 0), Br(e, [], Pe(e, r, s)[Symbol.asyncIterator](), t);
}
function Br(e, r, s, t) {
  return s.next().then((o) => {
    if (o.done) return r;
    let n = false;
    function i() {
      n = true;
    }
    return r = r.concat(t ? t(o.value, i) : o.value.data), n ? r : Br(e, r, s, t);
  });
}
function Oe(e) {
  return { paginate: Object.assign($r.bind(null, e), { iterator: Pe.bind(null, e) }) };
}
var as, Uo, Vr = b(() => {
  as = "0.0.0-development";
  Uo = Object.assign($r, { iterator: Pe });
  Oe.VERSION = as;
});
var Ae, Hr = b(() => {
  Ae = "13.5.0";
});
var ps, Wr, Mr = b(() => {
  ps = { actions: { addCustomLabelsToSelfHostedRunnerForOrg: ["POST /orgs/{org}/actions/runners/{runner_id}/labels"], addCustomLabelsToSelfHostedRunnerForRepo: ["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], addRepoAccessToSelfHostedRunnerGroupInOrg: ["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"], cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"], createEnvironmentVariable: ["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"], createHostedRunnerForOrg: ["POST /orgs/{org}/actions/hosted-runners"], createOrUpdateEnvironmentSecret: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"], createOrgVariable: ["POST /orgs/{org}/actions/variables"], createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"], createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"], createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"], createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"], createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"], createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"], deleteActionsCacheById: ["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"], deleteActionsCacheByKey: ["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"], deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], deleteEnvironmentSecret: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], deleteEnvironmentVariable: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], deleteHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"], deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"], deleteRepoVariable: ["DELETE /repos/{owner}/{repo}/actions/variables/{name}"], deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"], deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"], deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"], deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"], disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"], downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"], downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"], downloadWorkflowRunAttemptLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"], downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"], enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"], enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"], forceCancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"], generateRunnerJitconfigForOrg: ["POST /orgs/{org}/actions/runners/generate-jitconfig"], generateRunnerJitconfigForRepo: ["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"], getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"], getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"], getActionsCacheUsageByRepoForOrg: ["GET /orgs/{org}/actions/cache/usage-by-repository"], getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"], getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"], getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"], getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"], getCustomOidcSubClaimForRepo: ["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"], getEnvironmentPublicKey: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"], getEnvironmentSecret: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"], getEnvironmentVariable: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], getGithubActionsDefaultWorkflowPermissionsOrganization: ["GET /orgs/{org}/actions/permissions/workflow"], getGithubActionsDefaultWorkflowPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/workflow"], getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"], getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"], getHostedRunnerForOrg: ["GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], getHostedRunnersGithubOwnedImagesForOrg: ["GET /orgs/{org}/actions/hosted-runners/images/github-owned"], getHostedRunnersLimitsForOrg: ["GET /orgs/{org}/actions/hosted-runners/limits"], getHostedRunnersMachineSpecsForOrg: ["GET /orgs/{org}/actions/hosted-runners/machine-sizes"], getHostedRunnersPartnerImagesForOrg: ["GET /orgs/{org}/actions/hosted-runners/images/partner"], getHostedRunnersPlatformsForOrg: ["GET /orgs/{org}/actions/hosted-runners/platforms"], getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"], getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"], getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"], getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, { renamed: ["actions", "getGithubActionsPermissionsRepository"] }], getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"], getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"], getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"], getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"], getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"], getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"], getWorkflowAccessToRepository: ["GET /repos/{owner}/{repo}/actions/permissions/access"], getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"], getWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"], getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"], getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"], listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"], listEnvironmentSecrets: ["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"], listEnvironmentVariables: ["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"], listGithubHostedRunnersInGroupForOrg: ["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners"], listHostedRunnersForOrg: ["GET /orgs/{org}/actions/hosted-runners"], listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"], listJobsForWorkflowRunAttempt: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"], listLabelsForSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}/labels"], listLabelsForSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], listOrgSecrets: ["GET /orgs/{org}/actions/secrets"], listOrgVariables: ["GET /orgs/{org}/actions/variables"], listRepoOrganizationSecrets: ["GET /repos/{owner}/{repo}/actions/organization-secrets"], listRepoOrganizationVariables: ["GET /repos/{owner}/{repo}/actions/organization-variables"], listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"], listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"], listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"], listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"], listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"], listSelectedReposForOrgVariable: ["GET /orgs/{org}/actions/variables/{name}/repositories"], listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"], listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"], listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"], listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"], listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"], listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"], reRunJobForWorkflowRun: ["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"], reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"], reRunWorkflowFailedJobs: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"], removeAllCustomLabelsFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"], removeAllCustomLabelsFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], removeCustomLabelFromSelfHostedRunnerForOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"], removeCustomLabelFromSelfHostedRunnerForRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"], reviewCustomGatesForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"], reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"], setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"], setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"], setCustomLabelsForSelfHostedRunnerForOrg: ["PUT /orgs/{org}/actions/runners/{runner_id}/labels"], setCustomLabelsForSelfHostedRunnerForRepo: ["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"], setCustomOidcSubClaimForRepo: ["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"], setGithubActionsDefaultWorkflowPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions/workflow"], setGithubActionsDefaultWorkflowPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/workflow"], setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"], setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"], setSelectedReposForOrgVariable: ["PUT /orgs/{org}/actions/variables/{name}/repositories"], setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"], setWorkflowAccessToRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/access"], updateEnvironmentVariable: ["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"], updateHostedRunnerForOrg: ["PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"], updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"], updateRepoVariable: ["PATCH /repos/{owner}/{repo}/actions/variables/{name}"] }, activity: { checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"], deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"], deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"], getFeeds: ["GET /feeds"], getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"], getThread: ["GET /notifications/threads/{thread_id}"], getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"], listEventsForAuthenticatedUser: ["GET /users/{username}/events"], listNotificationsForAuthenticatedUser: ["GET /notifications"], listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"], listPublicEvents: ["GET /events"], listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"], listPublicEventsForUser: ["GET /users/{username}/events/public"], listPublicOrgEvents: ["GET /orgs/{org}/events"], listReceivedEventsForUser: ["GET /users/{username}/received_events"], listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"], listRepoEvents: ["GET /repos/{owner}/{repo}/events"], listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"], listReposStarredByAuthenticatedUser: ["GET /user/starred"], listReposStarredByUser: ["GET /users/{username}/starred"], listReposWatchedByUser: ["GET /users/{username}/subscriptions"], listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"], listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"], listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"], markNotificationsAsRead: ["PUT /notifications"], markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"], markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"], markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"], setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"], setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"], starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"], unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"] }, apps: { addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }], addRepoToInstallationForAuthenticatedUser: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"], checkToken: ["POST /applications/{client_id}/token"], createFromManifest: ["POST /app-manifests/{code}/conversions"], createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"], deleteAuthorization: ["DELETE /applications/{client_id}/grant"], deleteInstallation: ["DELETE /app/installations/{installation_id}"], deleteToken: ["DELETE /applications/{client_id}/token"], getAuthenticated: ["GET /app"], getBySlug: ["GET /apps/{app_slug}"], getInstallation: ["GET /app/installations/{installation_id}"], getOrgInstallation: ["GET /orgs/{org}/installation"], getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"], getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"], getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"], getUserInstallation: ["GET /users/{username}/installation"], getWebhookConfigForApp: ["GET /app/hook/config"], getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"], listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"], listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"], listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"], listInstallationRequestsForAuthenticatedApp: ["GET /app/installation-requests"], listInstallations: ["GET /app/installations"], listInstallationsForAuthenticatedUser: ["GET /user/installations"], listPlans: ["GET /marketplace_listing/plans"], listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"], listReposAccessibleToInstallation: ["GET /installation/repositories"], listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"], listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"], listWebhookDeliveries: ["GET /app/hook/deliveries"], redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"], removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}", {}, { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }], removeRepoFromInstallationForAuthenticatedUser: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"], resetToken: ["PATCH /applications/{client_id}/token"], revokeInstallationAccessToken: ["DELETE /installation/token"], scopeToken: ["POST /applications/{client_id}/token/scoped"], suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"], unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"], updateWebhookConfigForApp: ["PATCH /app/hook/config"] }, billing: { getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"], getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"], getGithubBillingUsageReportOrg: ["GET /organizations/{org}/settings/billing/usage"], getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"], getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"], getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"], getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"] }, checks: { create: ["POST /repos/{owner}/{repo}/check-runs"], createSuite: ["POST /repos/{owner}/{repo}/check-suites"], get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"], getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"], listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"], listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"], listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"], listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"], rerequestRun: ["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"], rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"], setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"], update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"] }, codeScanning: { commitAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"], createAutofix: ["POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], createVariantAnalysis: ["POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"], deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"], deleteCodeqlDatabase: ["DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, { renamedParameters: { alert_id: "alert_number" } }], getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"], getAutofix: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"], getCodeqlDatabase: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"], getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"], getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"], getVariantAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"], getVariantAnalysisRepoTask: ["GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"], listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"], listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"], listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, { renamed: ["codeScanning", "listAlertInstances"] }], listCodeqlDatabases: ["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"], listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"], updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"], updateDefaultSetup: ["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"], uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"] }, codeSecurity: { attachConfiguration: ["POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"], attachEnterpriseConfiguration: ["POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"], createConfiguration: ["POST /orgs/{org}/code-security/configurations"], createConfigurationForEnterprise: ["POST /enterprises/{enterprise}/code-security/configurations"], deleteConfiguration: ["DELETE /orgs/{org}/code-security/configurations/{configuration_id}"], deleteConfigurationForEnterprise: ["DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], detachConfiguration: ["DELETE /orgs/{org}/code-security/configurations/detach"], getConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}"], getConfigurationForRepository: ["GET /repos/{owner}/{repo}/code-security-configuration"], getConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations"], getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"], getDefaultConfigurations: ["GET /orgs/{org}/code-security/configurations/defaults"], getDefaultConfigurationsForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/defaults"], getRepositoriesForConfiguration: ["GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"], getRepositoriesForEnterpriseConfiguration: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"], getSingleConfigurationForEnterprise: ["GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"], setConfigurationAsDefault: ["PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"], setConfigurationAsDefaultForEnterprise: ["PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"], updateConfiguration: ["PATCH /orgs/{org}/code-security/configurations/{configuration_id}"], updateEnterpriseConfiguration: ["PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"] }, codesOfConduct: { getAllCodesOfConduct: ["GET /codes_of_conduct"], getConductCode: ["GET /codes_of_conduct/{key}"] }, codespaces: { addRepositoryForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], checkPermissionsForDevcontainer: ["GET /repos/{owner}/{repo}/codespaces/permissions_check"], codespaceMachinesForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/machines"], createForAuthenticatedUser: ["POST /user/codespaces"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], createOrUpdateSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}"], createWithPrForAuthenticatedUser: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"], createWithRepoForAuthenticatedUser: ["POST /repos/{owner}/{repo}/codespaces"], deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"], deleteFromOrganization: ["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], deleteSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}"], exportForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/exports"], getCodespacesForUserInOrg: ["GET /orgs/{org}/members/{username}/codespaces"], getExportDetailsForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}/exports/{export_id}"], getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"], getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"], getPublicKeyForAuthenticatedUser: ["GET /user/codespaces/secrets/public-key"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"], getSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}"], listDevcontainersInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/devcontainers"], listForAuthenticatedUser: ["GET /user/codespaces"], listInOrganization: ["GET /orgs/{org}/codespaces", {}, { renamedParameters: { org_id: "org" } }], listInRepositoryForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces"], listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"], listRepositoriesForSecretForAuthenticatedUser: ["GET /user/codespaces/secrets/{secret_name}/repositories"], listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], preFlightWithRepoForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/new"], publishForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/publish"], removeRepositoryForSecretForAuthenticatedUser: ["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"], repoMachinesForAuthenticatedUser: ["GET /repos/{owner}/{repo}/codespaces/machines"], setRepositoriesForSecretForAuthenticatedUser: ["PUT /user/codespaces/secrets/{secret_name}/repositories"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"], startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"], stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"], stopInOrganization: ["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"], updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"] }, copilot: { addCopilotSeatsForTeams: ["POST /orgs/{org}/copilot/billing/selected_teams"], addCopilotSeatsForUsers: ["POST /orgs/{org}/copilot/billing/selected_users"], cancelCopilotSeatAssignmentForTeams: ["DELETE /orgs/{org}/copilot/billing/selected_teams"], cancelCopilotSeatAssignmentForUsers: ["DELETE /orgs/{org}/copilot/billing/selected_users"], copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"], copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"], getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"], getCopilotSeatDetailsForUser: ["GET /orgs/{org}/members/{username}/copilot"], listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"], usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"], usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"] }, dependabot: { addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], createOrUpdateOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}"], createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"], deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"], getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"], getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"], getRepoPublicKey: ["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"], getRepoSecret: ["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/dependabot/alerts"], listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"], listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"], listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"], listSelectedReposForOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"], setSelectedReposForOrgSecret: ["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"], updateAlert: ["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"] }, dependencyGraph: { createRepositorySnapshot: ["POST /repos/{owner}/{repo}/dependency-graph/snapshots"], diffRange: ["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"], exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"] }, emojis: { get: ["GET /emojis"] }, gists: { checkIsStarred: ["GET /gists/{gist_id}/star"], create: ["POST /gists"], createComment: ["POST /gists/{gist_id}/comments"], delete: ["DELETE /gists/{gist_id}"], deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"], fork: ["POST /gists/{gist_id}/forks"], get: ["GET /gists/{gist_id}"], getComment: ["GET /gists/{gist_id}/comments/{comment_id}"], getRevision: ["GET /gists/{gist_id}/{sha}"], list: ["GET /gists"], listComments: ["GET /gists/{gist_id}/comments"], listCommits: ["GET /gists/{gist_id}/commits"], listForUser: ["GET /users/{username}/gists"], listForks: ["GET /gists/{gist_id}/forks"], listPublic: ["GET /gists/public"], listStarred: ["GET /gists/starred"], star: ["PUT /gists/{gist_id}/star"], unstar: ["DELETE /gists/{gist_id}/star"], update: ["PATCH /gists/{gist_id}"], updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"] }, git: { createBlob: ["POST /repos/{owner}/{repo}/git/blobs"], createCommit: ["POST /repos/{owner}/{repo}/git/commits"], createRef: ["POST /repos/{owner}/{repo}/git/refs"], createTag: ["POST /repos/{owner}/{repo}/git/tags"], createTree: ["POST /repos/{owner}/{repo}/git/trees"], deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"], getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"], getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"], getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"], getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"], getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"], listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"], updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"] }, gitignore: { getAllTemplates: ["GET /gitignore/templates"], getTemplate: ["GET /gitignore/templates/{name}"] }, hostedCompute: { createNetworkConfigurationForOrg: ["POST /orgs/{org}/settings/network-configurations"], deleteNetworkConfigurationFromOrg: ["DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}"], getNetworkConfigurationForOrg: ["GET /orgs/{org}/settings/network-configurations/{network_configuration_id}"], getNetworkSettingsForOrg: ["GET /orgs/{org}/settings/network-settings/{network_settings_id}"], listNetworkConfigurationsForOrg: ["GET /orgs/{org}/settings/network-configurations"], updateNetworkConfigurationForOrg: ["PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}"] }, interactions: { getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"], getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"], getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"], getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }], removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"], removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"], removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"], removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }], setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"], setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"], setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"], setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }] }, issues: { addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"], addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"], addSubIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"], checkUserCanBeAssignedToIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"], create: ["POST /repos/{owner}/{repo}/issues"], createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"], createLabel: ["POST /repos/{owner}/{repo}/labels"], createMilestone: ["POST /repos/{owner}/{repo}/milestones"], deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"], deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"], deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"], get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"], getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"], getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"], getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"], getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"], list: ["GET /issues"], listAssignees: ["GET /repos/{owner}/{repo}/assignees"], listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"], listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"], listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"], listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"], listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"], listForAuthenticatedUser: ["GET /user/issues"], listForOrg: ["GET /orgs/{org}/issues"], listForRepo: ["GET /repos/{owner}/{repo}/issues"], listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"], listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"], listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"], listMilestones: ["GET /repos/{owner}/{repo}/milestones"], listSubIssues: ["GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"], lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"], removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"], removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"], removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"], removeSubIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"], reprioritizeSubIssue: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"], setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"], unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"], update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"], updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"], updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"], updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"] }, licenses: { get: ["GET /licenses/{license}"], getAllCommonlyUsed: ["GET /licenses"], getForRepo: ["GET /repos/{owner}/{repo}/license"] }, markdown: { render: ["POST /markdown"], renderRaw: ["POST /markdown/raw", { headers: { "content-type": "text/plain; charset=utf-8" } }] }, meta: { get: ["GET /meta"], getAllVersions: ["GET /versions"], getOctocat: ["GET /octocat"], getZen: ["GET /zen"], root: ["GET /"] }, migrations: { deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive"], deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive"], downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive"], getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive"], getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"], getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"], listForAuthenticatedUser: ["GET /user/migrations"], listForOrg: ["GET /orgs/{org}/migrations"], listReposForAuthenticatedUser: ["GET /user/migrations/{migration_id}/repositories"], listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"], listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {}, { renamed: ["migrations", "listReposForAuthenticatedUser"] }], startForAuthenticatedUser: ["POST /user/migrations"], startForOrg: ["POST /orgs/{org}/migrations"], unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"], unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"] }, oidc: { getOidcCustomSubTemplateForOrg: ["GET /orgs/{org}/actions/oidc/customization/sub"], updateOidcCustomSubTemplateForOrg: ["PUT /orgs/{org}/actions/oidc/customization/sub"] }, orgs: { addSecurityManagerTeam: ["PUT /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team" }], assignTeamToOrgRole: ["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], assignUserToOrgRole: ["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"], blockUser: ["PUT /orgs/{org}/blocks/{username}"], cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"], checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"], checkMembershipForUser: ["GET /orgs/{org}/members/{username}"], checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"], convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"], createInvitation: ["POST /orgs/{org}/invitations"], createIssueType: ["POST /orgs/{org}/issue-types"], createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"], createOrUpdateCustomPropertiesValuesForRepos: ["PATCH /orgs/{org}/properties/values"], createOrUpdateCustomProperty: ["PUT /orgs/{org}/properties/schema/{custom_property_name}"], createWebhook: ["POST /orgs/{org}/hooks"], delete: ["DELETE /orgs/{org}"], deleteIssueType: ["DELETE /orgs/{org}/issue-types/{issue_type_id}"], deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"], enableOrDisableSecurityProductOnAllOrgRepos: ["POST /orgs/{org}/{security_product}/{enablement}", {}, { deprecated: "octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos() is deprecated, see https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization" }], get: ["GET /orgs/{org}"], getAllCustomProperties: ["GET /orgs/{org}/properties/schema"], getCustomProperty: ["GET /orgs/{org}/properties/schema/{custom_property_name}"], getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"], getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"], getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"], getOrgRulesetHistory: ["GET /orgs/{org}/rulesets/{ruleset_id}/history"], getOrgRulesetVersion: ["GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}"], getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"], getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"], list: ["GET /organizations"], listAppInstallations: ["GET /orgs/{org}/installations"], listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"], listBlockedUsers: ["GET /orgs/{org}/blocks"], listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"], listFailedInvitations: ["GET /orgs/{org}/failed_invitations"], listForAuthenticatedUser: ["GET /user/orgs"], listForUser: ["GET /users/{username}/orgs"], listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"], listIssueTypes: ["GET /orgs/{org}/issue-types"], listMembers: ["GET /orgs/{org}/members"], listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"], listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"], listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"], listOrgRoles: ["GET /orgs/{org}/organization-roles"], listOrganizationFineGrainedPermissions: ["GET /orgs/{org}/organization-fine-grained-permissions"], listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"], listPatGrantRepositories: ["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"], listPatGrantRequestRepositories: ["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"], listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"], listPatGrants: ["GET /orgs/{org}/personal-access-tokens"], listPendingInvitations: ["GET /orgs/{org}/invitations"], listPublicMembers: ["GET /orgs/{org}/public_members"], listSecurityManagerTeams: ["GET /orgs/{org}/security-managers", {}, { deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams" }], listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /orgs/{org}/hooks"], pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeCustomProperty: ["DELETE /orgs/{org}/properties/schema/{custom_property_name}"], removeMember: ["DELETE /orgs/{org}/members/{username}"], removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"], removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"], removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"], removeSecurityManagerTeam: ["DELETE /orgs/{org}/security-managers/teams/{team_slug}", {}, { deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team" }], reviewPatGrantRequest: ["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"], reviewPatGrantRequestsInBulk: ["POST /orgs/{org}/personal-access-token-requests"], revokeAllOrgRolesTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"], revokeAllOrgRolesUser: ["DELETE /orgs/{org}/organization-roles/users/{username}"], revokeOrgRoleTeam: ["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"], revokeOrgRoleUser: ["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"], setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"], setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"], unblockUser: ["DELETE /orgs/{org}/blocks/{username}"], update: ["PATCH /orgs/{org}"], updateIssueType: ["PUT /orgs/{org}/issue-types/{issue_type_id}"], updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"], updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"], updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"], updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"], updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"] }, packages: { deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"], deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"], deletePackageForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}"], deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], deletePackageVersionForUser: ["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }], getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"] }], getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"], getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"], getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"], getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"], getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"], getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"], getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"], listDockerMigrationConflictingPackagesForAuthenticatedUser: ["GET /user/docker/conflicts"], listDockerMigrationConflictingPackagesForOrganization: ["GET /orgs/{org}/docker/conflicts"], listDockerMigrationConflictingPackagesForUser: ["GET /users/{username}/docker/conflicts"], listPackagesForAuthenticatedUser: ["GET /user/packages"], listPackagesForOrganization: ["GET /orgs/{org}/packages"], listPackagesForUser: ["GET /users/{username}/packages"], restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"], restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"], restorePackageVersionForUser: ["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"] }, privateRegistries: { createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"], deleteOrgPrivateRegistry: ["DELETE /orgs/{org}/private-registries/{secret_name}"], getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"], getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"], listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"], updateOrgPrivateRegistry: ["PATCH /orgs/{org}/private-registries/{secret_name}"] }, projects: { addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {}, { deprecated: "octokit.rest.projects.addCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#add-project-collaborator" }], createCard: ["POST /projects/columns/{column_id}/cards", {}, { deprecated: "octokit.rest.projects.createCard() is deprecated, see https://docs.github.com/rest/projects/cards#create-a-project-card" }], createColumn: ["POST /projects/{project_id}/columns", {}, { deprecated: "octokit.rest.projects.createColumn() is deprecated, see https://docs.github.com/rest/projects/columns#create-a-project-column" }], createForAuthenticatedUser: ["POST /user/projects", {}, { deprecated: "octokit.rest.projects.createForAuthenticatedUser() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-user-project" }], createForOrg: ["POST /orgs/{org}/projects", {}, { deprecated: "octokit.rest.projects.createForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#create-an-organization-project" }], createForRepo: ["POST /repos/{owner}/{repo}/projects", {}, { deprecated: "octokit.rest.projects.createForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-repository-project" }], delete: ["DELETE /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.delete() is deprecated, see https://docs.github.com/rest/projects/projects#delete-a-project" }], deleteCard: ["DELETE /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.deleteCard() is deprecated, see https://docs.github.com/rest/projects/cards#delete-a-project-card" }], deleteColumn: ["DELETE /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.deleteColumn() is deprecated, see https://docs.github.com/rest/projects/columns#delete-a-project-column" }], get: ["GET /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.get() is deprecated, see https://docs.github.com/rest/projects/projects#get-a-project" }], getCard: ["GET /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.getCard() is deprecated, see https://docs.github.com/rest/projects/cards#get-a-project-card" }], getColumn: ["GET /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.getColumn() is deprecated, see https://docs.github.com/rest/projects/columns#get-a-project-column" }], getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", {}, { deprecated: "octokit.rest.projects.getPermissionForUser() is deprecated, see https://docs.github.com/rest/projects/collaborators#get-project-permission-for-a-user" }], listCards: ["GET /projects/columns/{column_id}/cards", {}, { deprecated: "octokit.rest.projects.listCards() is deprecated, see https://docs.github.com/rest/projects/cards#list-project-cards" }], listCollaborators: ["GET /projects/{project_id}/collaborators", {}, { deprecated: "octokit.rest.projects.listCollaborators() is deprecated, see https://docs.github.com/rest/projects/collaborators#list-project-collaborators" }], listColumns: ["GET /projects/{project_id}/columns", {}, { deprecated: "octokit.rest.projects.listColumns() is deprecated, see https://docs.github.com/rest/projects/columns#list-project-columns" }], listForOrg: ["GET /orgs/{org}/projects", {}, { deprecated: "octokit.rest.projects.listForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#list-organization-projects" }], listForRepo: ["GET /repos/{owner}/{repo}/projects", {}, { deprecated: "octokit.rest.projects.listForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#list-repository-projects" }], listForUser: ["GET /users/{username}/projects", {}, { deprecated: "octokit.rest.projects.listForUser() is deprecated, see https://docs.github.com/rest/projects/projects#list-user-projects" }], moveCard: ["POST /projects/columns/cards/{card_id}/moves", {}, { deprecated: "octokit.rest.projects.moveCard() is deprecated, see https://docs.github.com/rest/projects/cards#move-a-project-card" }], moveColumn: ["POST /projects/columns/{column_id}/moves", {}, { deprecated: "octokit.rest.projects.moveColumn() is deprecated, see https://docs.github.com/rest/projects/columns#move-a-project-column" }], removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {}, { deprecated: "octokit.rest.projects.removeCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#remove-user-as-a-collaborator" }], update: ["PATCH /projects/{project_id}", {}, { deprecated: "octokit.rest.projects.update() is deprecated, see https://docs.github.com/rest/projects/projects#update-a-project" }], updateCard: ["PATCH /projects/columns/cards/{card_id}", {}, { deprecated: "octokit.rest.projects.updateCard() is deprecated, see https://docs.github.com/rest/projects/cards#update-an-existing-project-card" }], updateColumn: ["PATCH /projects/columns/{column_id}", {}, { deprecated: "octokit.rest.projects.updateColumn() is deprecated, see https://docs.github.com/rest/projects/columns#update-an-existing-project-column" }] }, pulls: { checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"], create: ["POST /repos/{owner}/{repo}/pulls"], createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"], createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"], deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"], dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"], get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"], getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"], list: ["GET /repos/{owner}/{repo}/pulls"], listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"], listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"], listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"], listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"], listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"], listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"], merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"], removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"], submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"], update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"], updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"], updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"], updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"] }, rateLimit: { get: ["GET /rate_limit"] }, reactions: { createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"], createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"], createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"], createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"], deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"], deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"], deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"], deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"], deleteForRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"], deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"], deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"], listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"], listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"], listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"], listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"], listForRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"], listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"], listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"] }, repos: { acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }], acceptInvitationForAuthenticatedUser: ["PATCH /user/repository_invitations/{invitation_id}"], addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"], addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], cancelPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"], checkAutomatedSecurityFixes: ["GET /repos/{owner}/{repo}/automated-security-fixes"], checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"], checkPrivateVulnerabilityReporting: ["GET /repos/{owner}/{repo}/private-vulnerability-reporting"], checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts"], codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"], compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"], compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"], createAttestation: ["POST /repos/{owner}/{repo}/attestations"], createAutolink: ["POST /repos/{owner}/{repo}/autolinks"], createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"], createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"], createDeployKey: ["POST /repos/{owner}/{repo}/keys"], createDeployment: ["POST /repos/{owner}/{repo}/deployments"], createDeploymentBranchPolicy: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], createDeploymentProtectionRule: ["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"], createForAuthenticatedUser: ["POST /user/repos"], createFork: ["POST /repos/{owner}/{repo}/forks"], createInOrg: ["POST /orgs/{org}/repos"], createOrUpdateCustomPropertiesValues: ["PATCH /repos/{owner}/{repo}/properties/values"], createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"], createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"], createOrgRuleset: ["POST /orgs/{org}/rulesets"], createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"], createPagesSite: ["POST /repos/{owner}/{repo}/pages"], createRelease: ["POST /repos/{owner}/{repo}/releases"], createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"], createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate"], createWebhook: ["POST /repos/{owner}/{repo}/hooks"], declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}", {}, { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }], declineInvitationForAuthenticatedUser: ["DELETE /user/repository_invitations/{invitation_id}"], delete: ["DELETE /repos/{owner}/{repo}"], deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"], deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"], deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"], deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"], deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"], deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"], deleteDeploymentBranchPolicy: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"], deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"], deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"], deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"], deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"], deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"], deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"], deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"], disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes"], disableDeploymentProtectionRule: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], disablePrivateVulnerabilityReporting: ["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"], disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts"], downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, { renamed: ["repos", "downloadZipballArchive"] }], downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"], downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"], enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes"], enablePrivateVulnerabilityReporting: ["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"], enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts"], generateReleaseNotes: ["POST /repos/{owner}/{repo}/releases/generate-notes"], get: ["GET /repos/{owner}/{repo}"], getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"], getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], getAllDeploymentProtectionRules: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"], getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"], getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"], getAllTopics: ["GET /repos/{owner}/{repo}/topics"], getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"], getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"], getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"], getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"], getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"], getClones: ["GET /repos/{owner}/{repo}/traffic/clones"], getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"], getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"], getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"], getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"], getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"], getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"], getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"], getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"], getContent: ["GET /repos/{owner}/{repo}/contents/{path}"], getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"], getCustomDeploymentProtectionRule: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"], getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"], getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"], getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"], getDeploymentBranchPolicy: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"], getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"], getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"], getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"], getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"], getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"], getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"], getOrgRulesets: ["GET /orgs/{org}/rulesets"], getPages: ["GET /repos/{owner}/{repo}/pages"], getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"], getPagesDeployment: ["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"], getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"], getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"], getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"], getReadme: ["GET /repos/{owner}/{repo}/readme"], getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"], getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"], getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"], getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"], getRepoRuleSuite: ["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"], getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"], getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"], getRepoRulesetHistory: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history"], getRepoRulesetVersion: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}"], getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"], getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"], getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"], getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"], getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"], getViews: ["GET /repos/{owner}/{repo}/traffic/views"], getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"], getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"], getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"], listActivities: ["GET /repos/{owner}/{repo}/activity"], listAttestations: ["GET /repos/{owner}/{repo}/attestations/{subject_digest}"], listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"], listBranches: ["GET /repos/{owner}/{repo}/branches"], listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"], listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"], listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"], listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"], listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"], listCommits: ["GET /repos/{owner}/{repo}/commits"], listContributors: ["GET /repos/{owner}/{repo}/contributors"], listCustomDeploymentRuleIntegrations: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"], listDeployKeys: ["GET /repos/{owner}/{repo}/keys"], listDeploymentBranchPolicies: ["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"], listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"], listDeployments: ["GET /repos/{owner}/{repo}/deployments"], listForAuthenticatedUser: ["GET /user/repos"], listForOrg: ["GET /orgs/{org}/repos"], listForUser: ["GET /users/{username}/repos"], listForks: ["GET /repos/{owner}/{repo}/forks"], listInvitations: ["GET /repos/{owner}/{repo}/invitations"], listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"], listLanguages: ["GET /repos/{owner}/{repo}/languages"], listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"], listPublic: ["GET /repositories"], listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"], listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"], listReleases: ["GET /repos/{owner}/{repo}/releases"], listTags: ["GET /repos/{owner}/{repo}/tags"], listTeams: ["GET /repos/{owner}/{repo}/teams"], listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"], listWebhooks: ["GET /repos/{owner}/{repo}/hooks"], merge: ["POST /repos/{owner}/{repo}/merges"], mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"], pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"], redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"], removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"], removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"], replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"], requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"], setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"], setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, { mapToData: "apps" }], setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, { mapToData: "contexts" }], setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, { mapToData: "teams" }], setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, { mapToData: "users" }], testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"], transfer: ["POST /repos/{owner}/{repo}/transfer"], update: ["PATCH /repos/{owner}/{repo}"], updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"], updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"], updateDeploymentBranchPolicy: ["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"], updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"], updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"], updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"], updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"], updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"], updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"], updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"], updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, { renamed: ["repos", "updateStatusCheckProtection"] }], updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"], updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"], updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"], uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", { baseUrl: "https://uploads.github.com" }] }, search: { code: ["GET /search/code"], commits: ["GET /search/commits"], issuesAndPullRequests: ["GET /search/issues", {}, { deprecated: "octokit.rest.search.issuesAndPullRequests() is deprecated, see https://docs.github.com/rest/search/search#search-issues-and-pull-requests" }], labels: ["GET /search/labels"], repos: ["GET /search/repositories"], topics: ["GET /search/topics"], users: ["GET /search/users"] }, secretScanning: { createPushProtectionBypass: ["POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"], getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"], getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"], listAlertsForEnterprise: ["GET /enterprises/{enterprise}/secret-scanning/alerts"], listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"], listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"], listLocationsForAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"], updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"] }, securityAdvisories: { createFork: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"], createPrivateVulnerabilityReport: ["POST /repos/{owner}/{repo}/security-advisories/reports"], createRepositoryAdvisory: ["POST /repos/{owner}/{repo}/security-advisories"], createRepositoryAdvisoryCveRequest: ["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"], getGlobalAdvisory: ["GET /advisories/{ghsa_id}"], getRepositoryAdvisory: ["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"], listGlobalAdvisories: ["GET /advisories"], listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"], listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"], updateRepositoryAdvisory: ["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"] }, teams: { addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"], addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions" }], addOrUpdateProjectPermissionsLegacy: ["PUT /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions-legacy" }], addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.checkPermissionsForProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project" }], checkPermissionsForProjectLegacy: ["GET /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.checkPermissionsForProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project-legacy" }], checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], create: ["POST /orgs/{org}/teams"], createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"], deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"], getByName: ["GET /orgs/{org}/teams/{team_slug}"], getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"], list: ["GET /orgs/{org}/teams"], listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"], listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"], listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"], listForAuthenticatedUser: ["GET /user/teams"], listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"], listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"], listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {}, { deprecated: "octokit.rest.teams.listProjectsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects" }], listProjectsLegacy: ["GET /teams/{team_id}/projects", {}, { deprecated: "octokit.rest.teams.listProjectsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects-legacy" }], listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"], removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"], removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.removeProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team" }], removeProjectLegacy: ["DELETE /teams/{team_id}/projects/{project_id}", {}, { deprecated: "octokit.rest.teams.removeProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team-legacy" }], removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"], updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"], updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"], updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"] }, users: { addEmailForAuthenticated: ["POST /user/emails", {}, { renamed: ["users", "addEmailForAuthenticatedUser"] }], addEmailForAuthenticatedUser: ["POST /user/emails"], addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"], block: ["PUT /user/blocks/{username}"], checkBlocked: ["GET /user/blocks/{username}"], checkFollowingForUser: ["GET /users/{username}/following/{target_user}"], checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"], createGpgKeyForAuthenticated: ["POST /user/gpg_keys", {}, { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }], createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"], createPublicSshKeyForAuthenticated: ["POST /user/keys", {}, { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }], createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"], createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"], deleteEmailForAuthenticated: ["DELETE /user/emails", {}, { renamed: ["users", "deleteEmailForAuthenticatedUser"] }], deleteEmailForAuthenticatedUser: ["DELETE /user/emails"], deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }], deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"], deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}", {}, { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }], deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"], deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"], deleteSshSigningKeyForAuthenticatedUser: ["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"], follow: ["PUT /user/following/{username}"], getAuthenticated: ["GET /user"], getById: ["GET /user/{account_id}"], getByUsername: ["GET /users/{username}"], getContextForUser: ["GET /users/{username}/hovercard"], getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}", {}, { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }], getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"], getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}", {}, { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }], getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"], getSshSigningKeyForAuthenticatedUser: ["GET /user/ssh_signing_keys/{ssh_signing_key_id}"], list: ["GET /users"], listAttestations: ["GET /users/{username}/attestations/{subject_digest}"], listBlockedByAuthenticated: ["GET /user/blocks", {}, { renamed: ["users", "listBlockedByAuthenticatedUser"] }], listBlockedByAuthenticatedUser: ["GET /user/blocks"], listEmailsForAuthenticated: ["GET /user/emails", {}, { renamed: ["users", "listEmailsForAuthenticatedUser"] }], listEmailsForAuthenticatedUser: ["GET /user/emails"], listFollowedByAuthenticated: ["GET /user/following", {}, { renamed: ["users", "listFollowedByAuthenticatedUser"] }], listFollowedByAuthenticatedUser: ["GET /user/following"], listFollowersForAuthenticatedUser: ["GET /user/followers"], listFollowersForUser: ["GET /users/{username}/followers"], listFollowingForUser: ["GET /users/{username}/following"], listGpgKeysForAuthenticated: ["GET /user/gpg_keys", {}, { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }], listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"], listGpgKeysForUser: ["GET /users/{username}/gpg_keys"], listPublicEmailsForAuthenticated: ["GET /user/public_emails", {}, { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }], listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"], listPublicKeysForUser: ["GET /users/{username}/keys"], listPublicSshKeysForAuthenticated: ["GET /user/keys", {}, { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }], listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"], listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"], listSocialAccountsForUser: ["GET /users/{username}/social_accounts"], listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"], listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"], setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility", {}, { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }], setPrimaryEmailVisibilityForAuthenticatedUser: ["PATCH /user/email/visibility"], unblock: ["DELETE /user/blocks/{username}"], unfollow: ["DELETE /user/following/{username}"], updateAuthenticated: ["PATCH /user"] } }, Wr = ps;
});
function Se(e) {
  let r = {};
  for (let s of L.keys()) r[s] = new Proxy({ octokit: e, scope: s, cache: {} }, ls);
  return r;
}
function us(e, r, s, t, o) {
  let n = e.request.defaults(t);
  function i(...a) {
    let c = n.endpoint.merge(...a);
    if (o.mapToData) return c = Object.assign({}, c, { data: c[o.mapToData], [o.mapToData]: void 0 }), n(c);
    if (o.renamed) {
      let [p, u] = o.renamed;
      e.log.warn(`octokit.${r}.${s}() has been renamed to octokit.${p}.${u}()`);
    }
    if (o.deprecated && e.log.warn(o.deprecated), o.renamedParameters) {
      let p = n.endpoint.merge(...a);
      for (let [u, l] of Object.entries(o.renamedParameters)) u in p && (e.log.warn(`"${u}" parameter is deprecated for "octokit.${r}.${s}()". Use "${l}" instead`), l in p || (p[l] = p[u]), delete p[u]);
      return n(p);
    }
    return n(...a);
  }
  return Object.assign(i, n);
}
var L, ls, zr = b(() => {
  Mr();
  L = /* @__PURE__ */ new Map();
  for (let [e, r] of Object.entries(Wr)) for (let [s, t] of Object.entries(r)) {
    let [o, n, i] = t, [a, c] = o.split(/ /), p = Object.assign({ method: a, url: c }, n);
    L.has(e) || L.set(e, /* @__PURE__ */ new Map()), L.get(e).set(s, { scope: e, methodName: s, endpointDefaults: p, decorations: i });
  }
  ls = { has({ scope: e }, r) {
    return L.get(e).has(r);
  }, getOwnPropertyDescriptor(e, r) {
    return { value: this.get(e, r), configurable: true, writable: true, enumerable: true };
  }, defineProperty(e, r, s) {
    return Object.defineProperty(e.cache, r, s), true;
  }, deleteProperty(e, r) {
    return delete e.cache[r], true;
  }, ownKeys({ scope: e }) {
    return [...L.get(e).keys()];
  }, set(e, r, s) {
    return e.cache[r] = s;
  }, get({ octokit: e, scope: r, cache: s }, t) {
    if (s[t]) return s[t];
    let o = L.get(r).get(t);
    if (!o) return;
    let { endpointDefaults: n, decorations: i } = o;
    return i ? s[t] = us(e, r, t, n, i) : s[t] = e.request.defaults(n), s[t];
  } };
});
function gs(e) {
  return { rest: Se(e) };
}
function Re(e) {
  let r = Se(e);
  return { ...r, rest: r };
}
var Kr = b(() => {
  Hr();
  zr();
  gs.VERSION = Ae;
  Re.VERSION = Ae;
});
var Jr, Zr = b(() => {
  Jr = "21.1.1";
});
var Fe = {};
xe(Fe, { Octokit: () => ds });
var ds, Ue = b(() => {
  xr();
  Nr();
  Vr();
  Kr();
  Zr();
  ds = ne.plugin(Ge, Re, Oe).defaults({ userAgent: `octokit-rest.js/${Jr}` });
});
var _s = {};
xe(_s, { activate: () => ms });
module.exports = pt(_s);
function J(e, r = false) {
  let s = e.length, t = 0, o = "", n = 0, i = 16, a = 0, c = 0, p = 0, u = 0, l = 0;
  function h(d, _) {
    let v = 0, E = 0;
    for (; v < d || !_; ) {
      let f = e.charCodeAt(t);
      if (f >= 48 && f <= 57) E = E * 16 + f - 48;
      else if (f >= 65 && f <= 70) E = E * 16 + f - 65 + 10;
      else if (f >= 97 && f <= 102) E = E * 16 + f - 97 + 10;
      else break;
      t++, v++;
    }
    return v < d && (E = -1), E;
  }
  function k(d) {
    t = d, o = "", n = 0, i = 16, l = 0;
  }
  function y() {
    let d = t;
    if (e.charCodeAt(t) === 48) t++;
    else for (t++; t < e.length && D(e.charCodeAt(t)); ) t++;
    if (t < e.length && e.charCodeAt(t) === 46) if (t++, t < e.length && D(e.charCodeAt(t))) for (t++; t < e.length && D(e.charCodeAt(t)); ) t++;
    else return l = 3, e.substring(d, t);
    let _ = t;
    if (t < e.length && (e.charCodeAt(t) === 69 || e.charCodeAt(t) === 101)) if (t++, (t < e.length && e.charCodeAt(t) === 43 || e.charCodeAt(t) === 45) && t++, t < e.length && D(e.charCodeAt(t))) {
      for (t++; t < e.length && D(e.charCodeAt(t)); ) t++;
      _ = t;
    } else l = 3;
    return e.substring(d, _);
  }
  function ie() {
    let d = "", _ = t;
    for (; ; ) {
      if (t >= s) {
        d += e.substring(_, t), l = 2;
        break;
      }
      let v = e.charCodeAt(t);
      if (v === 34) {
        d += e.substring(_, t), t++;
        break;
      }
      if (v === 92) {
        if (d += e.substring(_, t), t++, t >= s) {
          l = 2;
          break;
        }
        switch (e.charCodeAt(t++)) {
          case 34:
            d += '"';
            break;
          case 92:
            d += "\\";
            break;
          case 47:
            d += "/";
            break;
          case 98:
            d += "\b";
            break;
          case 102:
            d += "\f";
            break;
          case 110:
            d += `
`;
            break;
          case 114:
            d += "\r";
            break;
          case 116:
            d += "	";
            break;
          case 117:
            let f = h(4, true);
            f >= 0 ? d += String.fromCharCode(f) : l = 4;
            break;
          default:
            l = 5;
        }
        _ = t;
        continue;
      }
      if (v >= 0 && v <= 31) if (V(v)) {
        d += e.substring(_, t), l = 2;
        break;
      } else l = 6;
      t++;
    }
    return d;
  }
  function A() {
    if (o = "", l = 0, n = t, c = a, u = p, t >= s) return n = s, i = 17;
    let d = e.charCodeAt(t);
    if (le(d)) {
      do
        t++, o += String.fromCharCode(d), d = e.charCodeAt(t);
      while (le(d));
      return i = 15;
    }
    if (V(d)) return t++, o += String.fromCharCode(d), d === 13 && e.charCodeAt(t) === 10 && (t++, o += `
`), a++, p = t, i = 14;
    switch (d) {
      case 123:
        return t++, i = 1;
      case 125:
        return t++, i = 2;
      case 91:
        return t++, i = 3;
      case 93:
        return t++, i = 4;
      case 58:
        return t++, i = 6;
      case 44:
        return t++, i = 5;
      case 34:
        return t++, o = ie(), i = 10;
      case 47:
        let _ = t - 1;
        if (e.charCodeAt(t + 1) === 47) {
          for (t += 2; t < s && !V(e.charCodeAt(t)); ) t++;
          return o = e.substring(_, t), i = 12;
        }
        if (e.charCodeAt(t + 1) === 42) {
          t += 2;
          let v = s - 1, E = false;
          for (; t < v; ) {
            let f = e.charCodeAt(t);
            if (f === 42 && e.charCodeAt(t + 1) === 47) {
              t += 2, E = true;
              break;
            }
            t++, V(f) && (f === 13 && e.charCodeAt(t) === 10 && t++, a++, p = t);
          }
          return E || (t++, l = 1), o = e.substring(_, t), i = 13;
        }
        return o += String.fromCharCode(d), t++, i = 16;
      case 45:
        if (o += String.fromCharCode(d), t++, t === s || !D(e.charCodeAt(t))) return i = 16;
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
        return o += y(), i = 11;
      default:
        for (; t < s && B(d); ) t++, d = e.charCodeAt(t);
        if (n !== t) {
          switch (o = e.substring(n, t), o) {
            case "true":
              return i = 8;
            case "false":
              return i = 9;
            case "null":
              return i = 7;
          }
          return i = 16;
        }
        return o += String.fromCharCode(d), t++, i = 16;
    }
  }
  function B(d) {
    if (le(d) || V(d)) return false;
    switch (d) {
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
  function ae() {
    let d;
    do
      d = A();
    while (d >= 12 && d <= 15);
    return d;
  }
  return { setPosition: k, getPosition: () => t, scan: r ? ae : A, getToken: () => i, getTokenValue: () => o, getTokenOffset: () => n, getTokenLength: () => t - n, getTokenStartLine: () => c, getTokenStartCharacter: () => n - u, getTokenError: () => l };
}
function le(e) {
  return e === 32 || e === 9;
}
function V(e) {
  return e === 10 || e === 13;
}
function D(e) {
  return e >= 48 && e <= 57;
}
var qe;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(qe || (qe = {}));
var ut = new Array(20).fill(0).map((e, r) => " ".repeat(r)), I = 200, gt = { " ": { "\n": new Array(I).fill(0).map((e, r) => `
` + " ".repeat(r)), "\r": new Array(I).fill(0).map((e, r) => "\r" + " ".repeat(r)), "\r\n": new Array(I).fill(0).map((e, r) => `\r
` + " ".repeat(r)) }, "	": { "\n": new Array(I).fill(0).map((e, r) => `
` + "	".repeat(r)), "\r": new Array(I).fill(0).map((e, r) => "\r" + "	".repeat(r)), "\r\n": new Array(I).fill(0).map((e, r) => `\r
` + "	".repeat(r)) } };
var Z;
(function(e) {
  e.DEFAULT = { allowTrailingComma: false };
})(Z || (Z = {}));
function Ne(e, r) {
  let s = [], t = new Object(), o, n = { value: {}, offset: 0, length: 0, type: "object", parent: void 0 }, i = false;
  function a(c, p, u, l) {
    n.value = c, n.offset = p, n.length = u, n.type = l, n.colonOffset = void 0, o = n;
  }
  try {
    X(e, { onObjectBegin: (c, p) => {
      if (r <= c) throw t;
      o = void 0, i = r > c, s.push("");
    }, onObjectProperty: (c, p, u) => {
      if (r < p || (a(c, p, u, "property"), s[s.length - 1] = c, r <= p + u)) throw t;
    }, onObjectEnd: (c, p) => {
      if (r <= c) throw t;
      o = void 0, s.pop();
    }, onArrayBegin: (c, p) => {
      if (r <= c) throw t;
      o = void 0, s.push(0);
    }, onArrayEnd: (c, p) => {
      if (r <= c) throw t;
      o = void 0, s.pop();
    }, onLiteralValue: (c, p, u) => {
      if (r < p || (a(c, p, u, mt(c)), r <= p + u)) throw t;
    }, onSeparator: (c, p, u) => {
      if (r <= p) throw t;
      if (c === ":" && o && o.type === "property") o.colonOffset = p, i = false, o = void 0;
      else if (c === ",") {
        let l = s[s.length - 1];
        typeof l == "number" ? s[s.length - 1] = l + 1 : (i = true, s[s.length - 1] = ""), o = void 0;
      }
    } });
  } catch (c) {
    if (c !== t) throw c;
  }
  return { path: s, previousNode: o, isAtPropertyKey: i, matches: (c) => {
    let p = 0;
    for (let u = 0; p < c.length && u < s.length; u++) if (c[p] === s[u] || c[p] === "*") p++;
    else if (c[p] !== "**") return false;
    return p === c.length;
  } };
}
function $e(e, r = [], s = Z.DEFAULT) {
  let t = null, o = [], n = [];
  function i(c) {
    Array.isArray(o) ? o.push(c) : t !== null && (o[t] = c);
  }
  return X(e, { onObjectBegin: () => {
    let c = {};
    i(c), n.push(o), o = c, t = null;
  }, onObjectProperty: (c) => {
    t = c;
  }, onObjectEnd: () => {
    o = n.pop();
  }, onArrayBegin: () => {
    let c = [];
    i(c), n.push(o), o = c, t = null;
  }, onArrayEnd: () => {
    o = n.pop();
  }, onLiteralValue: i, onError: (c, p, u) => {
    r.push({ error: c, offset: p, length: u });
  } }, s), o[0];
}
function X(e, r, s = Z.DEFAULT) {
  let t = J(e, false), o = [], n = 0;
  function i(T) {
    return T ? () => n === 0 && T(t.getTokenOffset(), t.getTokenLength(), t.getTokenStartLine(), t.getTokenStartCharacter()) : () => true;
  }
  function a(T) {
    return T ? (w) => n === 0 && T(w, t.getTokenOffset(), t.getTokenLength(), t.getTokenStartLine(), t.getTokenStartCharacter()) : () => true;
  }
  function c(T) {
    return T ? (w) => n === 0 && T(w, t.getTokenOffset(), t.getTokenLength(), t.getTokenStartLine(), t.getTokenStartCharacter(), () => o.slice()) : () => true;
  }
  function p(T) {
    return T ? () => {
      n > 0 ? n++ : T(t.getTokenOffset(), t.getTokenLength(), t.getTokenStartLine(), t.getTokenStartCharacter(), () => o.slice()) === false && (n = 1);
    } : () => true;
  }
  function u(T) {
    return T ? () => {
      n > 0 && n--, n === 0 && T(t.getTokenOffset(), t.getTokenLength(), t.getTokenStartLine(), t.getTokenStartCharacter());
    } : () => true;
  }
  let l = p(r.onObjectBegin), h = c(r.onObjectProperty), k = u(r.onObjectEnd), y = p(r.onArrayBegin), ie = u(r.onArrayEnd), A = c(r.onLiteralValue), B = a(r.onSeparator), ae = i(r.onComment), d = a(r.onError), _ = s && s.disallowComments, v = s && s.allowTrailingComma;
  function E() {
    for (; ; ) {
      let T = t.scan();
      switch (t.getTokenError()) {
        case 4:
          f(14);
          break;
        case 5:
          f(15);
          break;
        case 3:
          f(13);
          break;
        case 1:
          _ || f(11);
          break;
        case 2:
          f(12);
          break;
        case 6:
          f(16);
          break;
      }
      switch (T) {
        case 12:
        case 13:
          _ ? f(10) : ae();
          break;
        case 16:
          f(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return T;
      }
    }
  }
  function f(T, w = [], Ie = []) {
    if (d(T), w.length + Ie.length > 0) {
      let z = t.getToken();
      for (; z !== 17; ) {
        if (w.indexOf(z) !== -1) {
          E();
          break;
        } else if (Ie.indexOf(z) !== -1) break;
        z = E();
      }
    }
  }
  function De(T) {
    let w = t.getTokenValue();
    return T ? A(w) : (h(w), o.push(w)), E(), true;
  }
  function et() {
    switch (t.getToken()) {
      case 11:
        let T = t.getTokenValue(), w = Number(T);
        isNaN(w) && (f(2), w = 0), A(w);
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
    return E(), true;
  }
  function rt() {
    return t.getToken() !== 10 ? (f(3, [], [2, 5]), false) : (De(false), t.getToken() === 6 ? (B(":"), E(), ce() || f(4, [], [2, 5])) : f(5, [], [2, 5]), o.pop(), true);
  }
  function tt() {
    l(), E();
    let T = false;
    for (; t.getToken() !== 2 && t.getToken() !== 17; ) {
      if (t.getToken() === 5) {
        if (T || f(4, [], []), B(","), E(), t.getToken() === 2 && v) break;
      } else T && f(6, [], []);
      rt() || f(4, [], [2, 5]), T = true;
    }
    return k(), t.getToken() !== 2 ? f(7, [2], []) : E(), true;
  }
  function st() {
    y(), E();
    let T = true, w = false;
    for (; t.getToken() !== 4 && t.getToken() !== 17; ) {
      if (t.getToken() === 5) {
        if (w || f(4, [], []), B(","), E(), t.getToken() === 4 && v) break;
      } else w && f(6, [], []);
      T ? (o.push(0), T = false) : o[o.length - 1]++, ce() || f(4, [], [4, 5]), w = true;
    }
    return ie(), T || o.pop(), t.getToken() !== 4 ? f(8, [4], []) : E(), true;
  }
  function ce() {
    switch (t.getToken()) {
      case 3:
        return st();
      case 1:
        return tt();
      case 10:
        return De(true);
      default:
        return et();
    }
  }
  return E(), t.getToken() === 17 ? s.allowEmptyContent ? true : (f(4, [], []), false) : ce() ? (t.getToken() !== 17 && f(9, [], []), true) : (f(4, [], []), false);
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (e) {
        if (Array.isArray(e)) return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
var Be;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Be || (Be = {}));
var Ve;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Ve || (Ve = {}));
var R = Ne, x = $e;
var We = X;
var He;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(He || (He = {}));
var m = j(require("vscode"));
var g = j(require("vscode"));
var G = j(require("vscode"));
async function C(e, r, s, t) {
  if (Array.isArray(e)) {
    let n = (t ? G.extensions.all : G.extensions.all.filter((i) => !(i.id.startsWith("vscode.") || i.id === "Microsoft.vscode-markdown"))).filter((i) => e.indexOf(i.id) === -1);
    if (n.length) return n.map((i) => {
      let a = new G.CompletionItem(i.id), c = `"${i.id}"${r}`;
      return a.kind = G.CompletionItemKind.Value, a.insertText = c, a.range = s, a.filterText = c, a;
    });
    {
      let i = new G.CompletionItem(G.l10n.t("Example"));
      return i.insertText = '"vscode.csharp"', i.kind = G.CompletionItemKind.Value, i.range = s, [i];
    }
  }
  return [];
}
var Me = /\[([^\[\]]*)\]/g, Y = class {
  constructor(r) {
    this.document = r;
  }
  async provideCompletionItems(r, s) {
    let t = R(this.document.getText(), this.document.offsetAt(r));
    if (t.path[0] === "window.title") return this.provideWindowTitleCompletionItems(t, r);
    if (t.path[0] === "files.associations") return this.provideFilesAssociationsCompletionItems(t, r);
    if (t.path[0] === "files.exclude" || t.path[0] === "search.exclude" || t.path[0] === "explorer.autoRevealExclude") return this.provideExcludeCompletionItems(t, r);
    if (t.path[0] === "files.defaultLanguage") return this.provideLanguageCompletionItems(t, r);
    if (t.path[0] === "workbench.editor.label.patterns") return this.provideEditorLabelCompletionItems(t, r);
    if (t.path[0] === "settingsSync.ignoredExtensions") {
      let o = [];
      try {
        o = x(this.document.getText())["settingsSync.ignoredExtensions"];
      } catch {
      }
      let n = this.getReplaceRange(t, r);
      return C(o, "", n, true);
    }
    if (t.path[0] === "remote.extensionKind" && t.path.length === 2 && t.isAtPropertyKey) {
      let o = [];
      try {
        o = Object.keys(x(this.document.getText())["remote.extensionKind"]);
      } catch {
      }
      let n = this.getReplaceRange(t, r);
      return C(o, t.previousNode ? "" : `: [
	"ui"
]`, n, true);
    }
    return t.path[0] === "remote.portsAttributes" && t.path.length === 2 && t.isAtPropertyKey ? this.providePortsAttributesCompletionItem(this.getReplaceRange(t, r)) : this.provideLanguageOverridesCompletionItems(t, r);
  }
  getReplaceRange(r, s) {
    let t = r.previousNode;
    if (t) {
      let o = this.document.positionAt(t.offset), n = this.document.positionAt(t.offset + t.length);
      if (o.isBeforeOrEqual(s) && n.isAfterOrEqual(s)) return new g.Range(o, n);
    }
    return new g.Range(s, s);
  }
  isCompletingPropertyValue(r, s) {
    if (r.isAtPropertyKey) return false;
    let t = r.previousNode;
    if (t) {
      let o = this.document.offsetAt(s);
      return o >= t.offset && o <= t.offset + t.length;
    }
    return true;
  }
  async provideWindowTitleCompletionItems(r, s) {
    let t = [];
    if (!this.isCompletingPropertyValue(r, s)) return t;
    let o = this.document.getWordRangeAtPosition(s, /\$\{[^"\}]*\}?/);
    (!o || o.start.isEqual(s) || o.end.isEqual(s) && this.document.getText(o).endsWith("}")) && (o = new g.Range(s, s));
    let n = (i) => {
      let a = "${" + i + "}";
      return r.previousNode ? a : JSON.stringify(a);
    };
    return t.push(this.newSimpleCompletionItem(n("activeEditorShort"), o, g.l10n.t("the file name (e.g. myFile.txt)"))), t.push(this.newSimpleCompletionItem(n("activeEditorMedium"), o, g.l10n.t("the path of the file relative to the workspace folder (e.g. myFolder/myFileFolder/myFile.txt)"))), t.push(this.newSimpleCompletionItem(n("activeEditorLong"), o, g.l10n.t("the full path of the file (e.g. /Users/Development/myFolder/myFileFolder/myFile.txt)"))), t.push(this.newSimpleCompletionItem(n("activeFolderShort"), o, g.l10n.t("the name of the folder the file is contained in (e.g. myFileFolder)"))), t.push(this.newSimpleCompletionItem(n("activeFolderMedium"), o, g.l10n.t("the path of the folder the file is contained in, relative to the workspace folder (e.g. myFolder/myFileFolder)"))), t.push(this.newSimpleCompletionItem(n("activeFolderLong"), o, g.l10n.t("the full path of the folder the file is contained in (e.g. /Users/Development/myFolder/myFileFolder)"))), t.push(this.newSimpleCompletionItem(n("rootName"), o, g.l10n.t("name of the workspace with optional remote name and workspace indicator if applicable (e.g. myFolder, myRemoteFolder [SSH] or myWorkspace (Workspace))"))), t.push(this.newSimpleCompletionItem(n("rootNameShort"), o, g.l10n.t("shortened name of the workspace without suffixes (e.g. myFolder or myWorkspace)"))), t.push(this.newSimpleCompletionItem(n("rootPath"), o, g.l10n.t("file path of the workspace (e.g. /Users/Development/myWorkspace)"))), t.push(this.newSimpleCompletionItem(n("folderName"), o, g.l10n.t("name of the workspace folder the file is contained in (e.g. myFolder)"))), t.push(this.newSimpleCompletionItem(n("folderPath"), o, g.l10n.t("file path of the workspace folder the file is contained in (e.g. /Users/Development/myFolder)"))), t.push(this.newSimpleCompletionItem(n("appName"), o, g.l10n.t("e.g. VS Code"))), t.push(this.newSimpleCompletionItem(n("remoteName"), o, g.l10n.t("e.g. SSH"))), t.push(this.newSimpleCompletionItem(n("dirty"), o, g.l10n.t("an indicator for when the active editor has unsaved changes"))), t.push(this.newSimpleCompletionItem(n("separator"), o, g.l10n.t("a conditional separator (' - ') that only shows when surrounded by variables with values"))), t.push(this.newSimpleCompletionItem(n("activeRepositoryName"), o, g.l10n.t("the name of the active repository (e.g. vscode)"))), t.push(this.newSimpleCompletionItem(n("activeRepositoryBranchName"), o, g.l10n.t("the name of the active branch in the active repository (e.g. main)"))), t.push(this.newSimpleCompletionItem(n("activeEditorState"), o, g.l10n.t("the state of the active editor (e.g. modified)."))), t;
  }
  async provideEditorLabelCompletionItems(r, s) {
    let t = [];
    if (!this.isCompletingPropertyValue(r, s)) return t;
    let o = this.document.getWordRangeAtPosition(s, /\$\{[^"\}]*\}?/);
    (!o || o.start.isEqual(s) || o.end.isEqual(s) && this.document.getText(o).endsWith("}")) && (o = new g.Range(s, s));
    let n = (i) => {
      let a = "${" + i + "}";
      return r.previousNode ? a : JSON.stringify(a);
    };
    return t.push(this.newSimpleCompletionItem(n("dirname"), o, g.l10n.t("The parent folder name of the editor (e.g. myFileFolder)"))), t.push(this.newSimpleCompletionItem(n("dirname(1)"), o, g.l10n.t("The nth parent folder name of the editor"))), t.push(this.newSimpleCompletionItem(n("filename"), o, g.l10n.t("The file name of the editor without its directory or extension (e.g. myFile)"))), t.push(this.newSimpleCompletionItem(n("extname"), o, g.l10n.t("The file extension of the editor (e.g. txt)"))), t;
  }
  async provideFilesAssociationsCompletionItems(r, s) {
    let t = [];
    if (r.path.length === 2) {
      if (r.path[1] === "") {
        let o = this.getReplaceRange(r, s);
        t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files with Extension"), documentation: g.l10n.t("Map all files matching the glob pattern in their filename to the language with the given identifier."), snippet: r.isAtPropertyKey ? '"*.${1:extension}": "${2:language}"' : '{ "*.${1:extension}": "${2:language}" }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files with Path"), documentation: g.l10n.t("Map all files matching the absolute path glob pattern in their path to the language with the given identifier."), snippet: r.isAtPropertyKey ? '"/${1:path to file}/*.${2:extension}": "${3:language}"' : '{ "/${1:path to file}/*.${2:extension}": "${3:language}" }', range: o }));
      } else if (this.isCompletingPropertyValue(r, s)) return this.provideLanguageCompletionItemsForLanguageOverrides(this.getReplaceRange(r, s));
    }
    return t;
  }
  async provideExcludeCompletionItems(r, s) {
    let t = [];
    if (r.path.length === 1 || r.path.length === 2 && r.path[1] === "") {
      let o = this.getReplaceRange(r, s);
      t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files by Extension"), documentation: g.l10n.t("Match all files of a specific file extension."), snippet: r.path.length === 2 ? '"**/*.${1:extension}": true' : '{ "**/*.${1:extension}": true }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files with Multiple Extensions"), documentation: g.l10n.t("Match all files with any of the file extensions."), snippet: r.path.length === 2 ? '"**/*.{ext1,ext2,ext3}": true' : '{ "**/*.{ext1,ext2,ext3}": true }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files with Siblings by Name"), documentation: g.l10n.t("Match files that have siblings with the same name but a different extension."), snippet: r.path.length === 2 ? '"**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" }' : '{ "**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" } }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Folder by Name (Top Level)"), documentation: g.l10n.t("Match a top level folder with a specific name."), snippet: r.path.length === 2 ? '"${1:name}": true' : '{ "${1:name}": true }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Folders with Multiple Names (Top Level)"), documentation: g.l10n.t("Match multiple top level folders."), snippet: r.path.length === 2 ? '"{folder1,folder2,folder3}": true' : '{ "{folder1,folder2,folder3}": true }', range: o })), t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Folder by Name (Any Location)"), documentation: g.l10n.t("Match a folder with a specific name in any location."), snippet: r.path.length === 2 ? '"**/${1:name}": true' : '{ "**/${1:name}": true }', range: o }));
    } else if (r.path.length === 2 && this.isCompletingPropertyValue(r, s)) {
      let o = this.getReplaceRange(r, s);
      t.push(this.newSnippetCompletionItem({ label: g.l10n.t("Files with Siblings by Name"), documentation: g.l10n.t("Match files that have siblings with the same name but a different extension."), snippet: '{ "when": "$(basename).${1:extension}" }', range: o }));
    }
    return t;
  }
  async provideLanguageCompletionItems(r, s) {
    if (r.path.length === 1 && this.isCompletingPropertyValue(r, s)) {
      let t = this.getReplaceRange(r, s), o = await g.languages.getLanguages();
      return [this.newSimpleCompletionItem(JSON.stringify("${activeEditorLanguage}"), t, g.l10n.t("Use the language of the currently active text editor if any")), ...o.map((n) => this.newSimpleCompletionItem(JSON.stringify(n), t))];
    }
    return [];
  }
  async provideLanguageCompletionItemsForLanguageOverrides(r) {
    let s = await g.languages.getLanguages(), t = [];
    for (let o of s) {
      let n = new g.CompletionItem(JSON.stringify(o));
      n.kind = g.CompletionItemKind.Property, n.range = r, t.push(n);
    }
    return t;
  }
  async provideLanguageOverridesCompletionItems(r, s) {
    if (r.path.length === 1 && r.isAtPropertyKey && r.previousNode && typeof r.previousNode.value == "string" && r.previousNode.value.startsWith("[")) {
      let t = this.document.positionAt(r.previousNode.offset + 1), o = t.translate(void 0, r.previousNode.value.length), n = [], i = [], a = Me.exec(r.previousNode.value), c;
      for (; a?.length; ) c = new g.Range(this.document.positionAt(r.previousNode.offset + 1 + a.index), this.document.positionAt(r.previousNode.offset + 1 + a.index + a[0].length)), i.push(c), c.contains(s) || n.push(a[1].trim()), a = Me.exec(r.previousNode.value);
      let p = c ? c.end : t;
      p.isBefore(o) && i.push(new g.Range(p, o));
      let u = i.find((l) => l.contains(s));
      if (u && !u.isEqual(i[0])) {
        let l = await g.languages.getLanguages(), h = [];
        for (let k of l) if (!n.includes(k)) {
          let y = new g.CompletionItem(`[${k}]`);
          y.kind = g.CompletionItemKind.Property, y.range = u, h.push(y);
        }
        return h;
      }
    }
    return [];
  }
  providePortsAttributesCompletionItem(r) {
    return [this.newSnippetCompletionItem({ label: '"3000"', documentation: "Single Port Attribute", range: r, snippet: `
  "\${1:3000}": {
    "label": "\${2:Application}",
    "onAutoForward": "\${3:openPreview}"
  }
` }), this.newSnippetCompletionItem({ label: '"5000-6000"', documentation: "Ranged Port Attribute", range: r, snippet: `
  "\${1:40000-55000}": {
    "onAutoForward": "\${2:ignore}"
  }
` }), this.newSnippetCompletionItem({ label: '".+\\\\/server.js"', documentation: "Command Match Port Attribute", range: r, snippet: `
  "\${1:.+\\\\/server.js}": {
    "label": "\${2:Application}",
    "onAutoForward": "\${3:openPreview}"
  }
` })];
  }
  newSimpleCompletionItem(r, s, t, o) {
    let n = new g.CompletionItem(r);
    return n.kind = g.CompletionItemKind.Value, n.detail = t, n.insertText = o || r, n.range = s, n;
  }
  newSnippetCompletionItem(r) {
    let s = new g.CompletionItem(r.label);
    return s.kind = g.CompletionItemKind.Value, s.documentation = r.documentation, s.insertText = new g.SnippetString(r.snippet), s.range = r.range, s;
  }
};
var O = j(require("vscode")), Xr = require("path");
var de = require("https"), Qe = require("url"), er = j(Ye()), rr = require("vscode"), me = Ot();
function Ot(e = process.env.HTTPS_PROXY) {
  if (!e) return de.globalAgent;
  try {
    let { hostname: r, port: s, username: t, password: o } = new Qe.URL(e), n = t && o && `${t}:${o}`;
    return (0, er.httpsOverHttp)({ proxy: { host: r, port: s, proxyAuth: n } });
  } catch (r) {
    return rr.window.showErrorMessage(`HTTPS_PROXY environment variable ignored: ${r.message}`), de.globalAgent;
  }
}
var Le = class {
  constructor() {
    this.name = O.l10n.t("GitHub");
    this.description = O.l10n.t("gist");
  }
  getOctokit() {
    return this._octokit || (this._octokit = (async () => {
      let s = (await O.authentication.getSession("github", ["gist", "user:email"], { createIfNone: true })).accessToken, { Octokit: t } = await Promise.resolve().then(() => (Ue(), Fe));
      return new t({ request: { agent: me }, userAgent: "GitHub VSCode", auth: `token ${s}` });
    })()), this._octokit;
  }
  async saveProfile(r, s) {
    let o = await (await this.getOctokit()).gists.create({ public: false, files: { [r]: { content: s } } });
    if (o.data.id && o.data.html_url) {
      let n = O.Uri.parse(o.data.html_url);
      return { id: o.data.id, link: n };
    }
    return null;
  }
  getPublicOctokit() {
    return this._public_octokit || (this._public_octokit = (async () => {
      let { Octokit: r } = await Promise.resolve().then(() => (Ue(), Fe));
      return new r({ request: { agent: me }, userAgent: "GitHub VSCode" });
    })()), this._public_octokit;
  }
  async readProfile(r) {
    let s = typeof r == "string" ? r : (0, Xr.basename)(r.path), t = await this.getPublicOctokit();
    try {
      let o = await t.gists.get({ gist_id: s });
      if (o.data.files) return o.data.files[Object.keys(o.data.files)[0]]?.content ?? null;
    } catch {
    }
    return null;
  }
};
O.window.registerProfileContentHandler("github", new Le());
function ms(e) {
  e.subscriptions.push(fs()), e.subscriptions.push(...Ts()), e.subscriptions.push(je("**/launch.json")), e.subscriptions.push(je("**/tasks.json")), e.subscriptions.push(je("**/*.code-workspace")), e.subscriptions.push(ws());
}
function fs() {
  return m.languages.registerCompletionItemProvider({ language: "jsonc", pattern: "**/settings.json" }, { provideCompletionItems(e, r, s) {
    return new Y(e).provideCompletionItems(r, s);
  } });
}
function je(e) {
  return m.languages.registerCompletionItemProvider({ language: "jsonc", pattern: e }, { provideCompletionItems(r, s, t) {
    let o = R(r.getText(), r.offsetAt(s));
    if (Yr(r, o, s)) {
      if (r.fileName.endsWith(".code-workspace") && !hs(o, ["launch", "tasks"])) return [];
      let n = r.getWordRangeAtPosition(s, /\$\{[^"\}]*\}?/);
      return (!n || n.start.isEqual(s) || n.end.isEqual(s) && r.getText(n).endsWith("}")) && (n = new m.Range(s, s)), [{ label: "workspaceFolder", detail: m.l10n.t("The path of the folder opened in VS Code") }, { label: "workspaceFolderBasename", detail: m.l10n.t("The name of the folder opened in VS Code without any slashes (/)") }, { label: "fileWorkspaceFolderBasename", detail: m.l10n.t("The current opened file workspace folder name without any slashes (/)") }, { label: "relativeFile", detail: m.l10n.t("The current opened file relative to ${workspaceFolder}") }, { label: "relativeFileDirname", detail: m.l10n.t("The current opened file's dirname relative to ${workspaceFolder}") }, { label: "file", detail: m.l10n.t("The current opened file") }, { label: "cwd", detail: m.l10n.t("The task runner's current working directory on startup") }, { label: "lineNumber", detail: m.l10n.t("The current selected line number in the active file") }, { label: "selectedText", detail: m.l10n.t("The current selected text in the active file") }, { label: "fileDirname", detail: m.l10n.t("The current opened file's dirname") }, { label: "fileExtname", detail: m.l10n.t("The current opened file's extension") }, { label: "fileBasename", detail: m.l10n.t("The current opened file's basename") }, { label: "fileBasenameNoExtension", detail: m.l10n.t("The current opened file's basename with no file extension") }, { label: "defaultBuildTask", detail: m.l10n.t("The name of the default build task. If there is not a single default build task then a quick pick is shown to choose the build task.") }, { label: "pathSeparator", detail: m.l10n.t("The character used by the operating system to separate components in file paths. Is also aliased to '/'.") }, { label: "extensionInstallFolder", detail: m.l10n.t("The path where an extension is installed."), param: "publisher.extension" }].map((i) => ({ label: `\${${i.label}}`, range: n, insertText: i.param ? new m.SnippetString(`\${${i.label}:`).appendPlaceholder(i.param).appendText("}") : `\${${i.label}}`, detail: i.detail }));
    }
    return [];
  } });
}
function Yr(e, r, s) {
  if (r.isAtPropertyKey) return false;
  let t = r.previousNode;
  if (t && t.type === "string") {
    let o = e.offsetAt(s);
    return o > t.offset && o < t.offset + t.length;
  }
  return false;
}
function hs(e, r) {
  return r.includes(e.path[0]);
}
function Ts() {
  return [Es(), bs()];
}
function Es() {
  return m.languages.registerCompletionItemProvider({ pattern: "**/extensions.json" }, { provideCompletionItems(e, r, s) {
    let t = R(e.getText(), e.offsetAt(r));
    if (t.path[0] === "recommendations") {
      let o = Qr(e, t, r), n = x(e.getText());
      return C(n && n.recommendations || [], "", o, false);
    }
    return [];
  } });
}
function bs() {
  return m.languages.registerCompletionItemProvider({ pattern: "**/*.code-workspace" }, { provideCompletionItems(e, r, s) {
    let t = R(e.getText(), e.offsetAt(r));
    if (t.path[0] === "extensions" && t.path[1] === "recommendations") {
      let o = Qr(e, t, r), n = x(e.getText()).extensions;
      return C(n && n.recommendations || [], "", o, false);
    }
    return [];
  } });
}
function Qr(e, r, s) {
  let t = r.previousNode;
  if (t) {
    let o = e.positionAt(t.offset), n = e.positionAt(t.offset + t.length);
    if (o.isBeforeOrEqual(s) && n.isAfterOrEqual(s)) return new m.Range(o, n);
  }
  return new m.Range(s, s);
}
m.languages.registerDocumentSymbolProvider({ pattern: "**/launch.json", language: "jsonc" }, { provideDocumentSymbols(e, r) {
  let s = [], t = "", o = "", n = 0, i = 0;
  return We(e.getText(), { onObjectProperty: (a, c, p) => {
    o = a;
  }, onLiteralValue: (a, c, p) => {
    o === "name" && (t = a);
  }, onObjectBegin: (a, c) => {
    i++, i === 2 && (n = a);
  }, onObjectEnd: (a, c) => {
    t && i === 2 && s.push(new m.SymbolInformation(t, m.SymbolKind.Object, new m.Range(e.positionAt(n), e.positionAt(a)))), i--;
  } }), s;
} }, { label: "Launch Targets" });
function ws() {
  let e = /* @__PURE__ */ new Map([[{ language: "jsonc", pattern: "**/keybindings.json" }, [["*", "when"]]], [{ language: "json", pattern: "**/package.json" }, [["contributes", "menus", "*", "*", "when"], ["contributes", "views", "*", "*", "when"], ["contributes", "viewsWelcome", "*", "when"], ["contributes", "keybindings", "*", "when"], ["contributes", "keybindings", "when"]]]]);
  return m.languages.registerCompletionItemProvider([...e.keys()], { async provideCompletionItems(r, s, t) {
    let o = R(r.getText(), r.offsetAt(s));
    if (o.isAtPropertyKey) return;
    let n = false;
    for (let [u, l] of e) if (m.languages.match(u, r) && l.some(o.matches.bind(o))) {
      n = true;
      break;
    }
    if (!n || !Yr(r, o, s)) return;
    let i = r.getWordRangeAtPosition(s, /[a-zA-Z.]+/) || new m.Range(s, s), a = i.with(void 0, s), c = await m.commands.executeCommand("getContextKeyInfo");
    if (t.isCancellationRequested || !c) return;
    let p = new m.CompletionList();
    for (let u of c) {
      let l = new m.CompletionItem(u.key, m.CompletionItemKind.Constant);
      l.detail = u.type, l.range = { replacing: i, inserting: a }, l.documentation = u.description, p.items.push(l);
    }
    return p;
  } });
}
