"use strict";
var Jf = Object.create;
var no = Object.defineProperty;
var Xf = Object.getOwnPropertyDescriptor;
var Zf = Object.getOwnPropertyNames;
var em = Object.getPrototypeOf, tm = Object.prototype.hasOwnProperty;
var E = (r38, e) => () => (e || r38((e = { exports: {} }).exports, e), e.exports), pt = (r38, e) => {
  for (var t in e) no(r38, t, { get: e[t], enumerable: true });
}, Hc = (r38, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of Zf(e)) !tm.call(r38, o) && o !== t && no(r38, o, { get: () => e[o], enumerable: !(n = Xf(e, o)) || n.enumerable });
  return r38;
};
var J = (r38, e, t) => (t = r38 != null ? Jf(em(r38)) : {}, Hc(e || !r38 || !r38.__esModule ? no(t, "default", { value: r38, enumerable: true }) : t, r38)), rm = (r38) => Hc(no({}, "__esModule", { value: true }), r38);
var Ur = E((ba, Hl) => {
  var ti = require("buffer"), je = ti.Buffer;
  function Fl(r38, e) {
    for (var t in r38) e[t] = r38[t];
  }
  je.from && je.alloc && je.allocUnsafe && je.allocUnsafeSlow ? Hl.exports = ti : (Fl(ti, ba), ba.Buffer = ar);
  function ar(r38, e, t) {
    return je(r38, e, t);
  }
  ar.prototype = Object.create(je.prototype);
  Fl(je, ar);
  ar.from = function(r38, e, t) {
    if (typeof r38 == "number") throw new TypeError("Argument must not be a number");
    return je(r38, e, t);
  };
  ar.alloc = function(r38, e, t) {
    if (typeof r38 != "number") throw new TypeError("Argument must be a number");
    var n = je(r38);
    return e !== void 0 ? typeof t == "string" ? n.fill(e, t) : n.fill(e) : n.fill(0), n;
  };
  ar.allocUnsafe = function(r38) {
    if (typeof r38 != "number") throw new TypeError("Argument must be a number");
    return je(r38);
  };
  ar.allocUnsafeSlow = function(r38) {
    if (typeof r38 != "number") throw new TypeError("Argument must be a number");
    return ti.SlowBuffer(r38);
  };
});
var Na = E((OO, Bl) => {
  var ri = Ur().Buffer, Cg = require("stream"), Sg = require("util");
  function ni(r38) {
    if (this.buffer = null, this.writable = true, this.readable = true, !r38) return this.buffer = ri.alloc(0), this;
    if (typeof r38.pipe == "function") return this.buffer = ri.alloc(0), r38.pipe(this), this;
    if (r38.length || typeof r38 == "object") return this.buffer = r38, this.writable = false, process.nextTick(function() {
      this.emit("end", r38), this.readable = false, this.emit("close");
    }.bind(this)), this;
    throw new TypeError("Unexpected data type (" + typeof r38 + ")");
  }
  Sg.inherits(ni, Cg);
  ni.prototype.write = function(e) {
    this.buffer = ri.concat([this.buffer, ri.from(e)]), this.emit("data", e);
  };
  ni.prototype.end = function(e) {
    e && this.write(e), this.emit("end", e), this.emit("close"), this.writable = false, this.readable = false;
  };
  Bl.exports = ni;
});
var Gl = E((bO, ql) => {
  "use strict";
  function Ma(r38) {
    var e = (r38 / 8 | 0) + (r38 % 8 === 0 ? 0 : 1);
    return e;
  }
  var Ig = { ES256: Ma(256), ES384: Ma(384), ES512: Ma(521) };
  function _g(r38) {
    var e = Ig[r38];
    if (e) return e;
    throw new Error('Unknown algorithm "' + r38 + '"');
  }
  ql.exports = _g;
});
var Wl = E((NO, jl) => {
  "use strict";
  var oi = Ur().Buffer, $l = Gl(), ii = 128, Kl = 0, vg = 32, Rg = 16, wg = 2, zl = Rg | vg | Kl << 6, si = wg | Kl << 6;
  function kg(r38) {
    return r38.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function Yl(r38) {
    if (oi.isBuffer(r38)) return r38;
    if (typeof r38 == "string") return oi.from(r38, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function Pg(r38, e) {
    r38 = Yl(r38);
    var t = $l(e), n = t + 1, o = r38.length, i = 0;
    if (r38[i++] !== zl) throw new Error('Could not find expected "seq"');
    var s = r38[i++];
    if (s === (ii | 1) && (s = r38[i++]), o - i < s) throw new Error('"seq" specified length of "' + s + '", only "' + (o - i) + '" remaining');
    if (r38[i++] !== si) throw new Error('Could not find expected "int" for "r"');
    var a = r38[i++];
    if (o - i - 2 < a) throw new Error('"r" specified length of "' + a + '", only "' + (o - i - 2) + '" available');
    if (n < a) throw new Error('"r" specified length of "' + a + '", max of "' + n + '" is acceptable');
    var c = i;
    if (i += a, r38[i++] !== si) throw new Error('Could not find expected "int" for "s"');
    var l = r38[i++];
    if (o - i !== l) throw new Error('"s" specified length of "' + l + '", expected "' + (o - i) + '"');
    if (n < l) throw new Error('"s" specified length of "' + l + '", max of "' + n + '" is acceptable');
    var d = i;
    if (i += l, i !== o) throw new Error('Expected to consume entire buffer, but "' + (o - i) + '" bytes remain');
    var u = t - a, g = t - l, f = oi.allocUnsafe(u + a + g + l);
    for (i = 0; i < u; ++i) f[i] = 0;
    r38.copy(f, i, c + Math.max(-u, 0), c + a), i = t;
    for (var A = i; i < A + g; ++i) f[i] = 0;
    return r38.copy(f, i, d + Math.max(-g, 0), d + l), f = f.toString("base64"), f = kg(f), f;
  }
  function Vl(r38, e, t) {
    for (var n = 0; e + n < t && r38[e + n] === 0; ) ++n;
    var o = r38[e + n] >= ii;
    return o && --n, n;
  }
  function Og(r38, e) {
    r38 = Yl(r38);
    var t = $l(e), n = r38.length;
    if (n !== t * 2) throw new TypeError('"' + e + '" signatures must be "' + t * 2 + '" bytes, saw "' + n + '"');
    var o = Vl(r38, 0, t), i = Vl(r38, t, r38.length), s = t - o, a = t - i, c = 2 + s + 1 + 1 + a, l = c < ii, d = oi.allocUnsafe((l ? 2 : 3) + c), u = 0;
    return d[u++] = zl, l ? d[u++] = c : (d[u++] = ii | 1, d[u++] = c & 255), d[u++] = si, d[u++] = s, o < 0 ? (d[u++] = 0, u += r38.copy(d, u, 0, t)) : u += r38.copy(d, u, o, t), d[u++] = si, d[u++] = a, i < 0 ? (d[u++] = 0, r38.copy(d, u, t)) : r38.copy(d, u, t + i), d;
  }
  jl.exports = { derToJose: Pg, joseToDer: Og };
});
var Jl = E((MO, Ql) => {
  "use strict";
  var Fn = require("buffer").Buffer, Da = require("buffer").SlowBuffer;
  Ql.exports = ai;
  function ai(r38, e) {
    if (!Fn.isBuffer(r38) || !Fn.isBuffer(e) || r38.length !== e.length) return false;
    for (var t = 0, n = 0; n < r38.length; n++) t |= r38[n] ^ e[n];
    return t === 0;
  }
  ai.install = function() {
    Fn.prototype.equal = Da.prototype.equal = function(e) {
      return ai(this, e);
    };
  };
  var bg = Fn.prototype.equal, Ng = Da.prototype.equal;
  ai.restore = function() {
    Fn.prototype.equal = bg, Da.prototype.equal = Ng;
  };
});
var Fa = E((DO, sd) => {
  var Fr = Ur().Buffer, De = require("crypto"), Zl = Wl(), Xl = require("util"), Mg = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`, Hn = "secret must be a string or buffer", Lr = "key must be a string or a buffer", Dg = "key must be a string, a buffer or an object", Ua = typeof De.createPublicKey == "function";
  Ua && (Lr += " or a KeyObject", Hn += "or a KeyObject");
  function ed(r38) {
    if (!Fr.isBuffer(r38) && typeof r38 != "string" && (!Ua || typeof r38 != "object" || typeof r38.type != "string" || typeof r38.asymmetricKeyType != "string" || typeof r38.export != "function")) throw qe(Lr);
  }
  function td(r38) {
    if (!Fr.isBuffer(r38) && typeof r38 != "string" && typeof r38 != "object") throw qe(Dg);
  }
  function xg(r38) {
    if (!Fr.isBuffer(r38)) {
      if (typeof r38 == "string") return r38;
      if (!Ua || typeof r38 != "object" || r38.type !== "secret" || typeof r38.export != "function") throw qe(Hn);
    }
  }
  function La(r38) {
    return r38.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function rd(r38) {
    r38 = r38.toString();
    var e = 4 - r38.length % 4;
    if (e !== 4) for (var t = 0; t < e; ++t) r38 += "=";
    return r38.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function qe(r38) {
    var e = [].slice.call(arguments, 1), t = Xl.format.bind(Xl, r38).apply(null, e);
    return new TypeError(t);
  }
  function Ug(r38) {
    return Fr.isBuffer(r38) || typeof r38 == "string";
  }
  function Bn(r38) {
    return Ug(r38) || (r38 = JSON.stringify(r38)), r38;
  }
  function nd(r38) {
    return function(t, n) {
      xg(n), t = Bn(t);
      var o = De.createHmac("sha" + r38, n), i = (o.update(t), o.digest("base64"));
      return La(i);
    };
  }
  var xa, Lg = "timingSafeEqual" in De ? function(e, t) {
    return e.byteLength !== t.byteLength ? false : De.timingSafeEqual(e, t);
  } : function(e, t) {
    return xa || (xa = Jl()), xa(e, t);
  };
  function Fg(r38) {
    return function(t, n, o) {
      var i = nd(r38)(t, o);
      return Lg(Fr.from(n), Fr.from(i));
    };
  }
  function od(r38) {
    return function(t, n) {
      td(n), t = Bn(t);
      var o = De.createSign("RSA-SHA" + r38), i = (o.update(t), o.sign(n, "base64"));
      return La(i);
    };
  }
  function id(r38) {
    return function(t, n, o) {
      ed(o), t = Bn(t), n = rd(n);
      var i = De.createVerify("RSA-SHA" + r38);
      return i.update(t), i.verify(o, n, "base64");
    };
  }
  function Hg(r38) {
    return function(t, n) {
      td(n), t = Bn(t);
      var o = De.createSign("RSA-SHA" + r38), i = (o.update(t), o.sign({ key: n, padding: De.constants.RSA_PKCS1_PSS_PADDING, saltLength: De.constants.RSA_PSS_SALTLEN_DIGEST }, "base64"));
      return La(i);
    };
  }
  function Bg(r38) {
    return function(t, n, o) {
      ed(o), t = Bn(t), n = rd(n);
      var i = De.createVerify("RSA-SHA" + r38);
      return i.update(t), i.verify({ key: o, padding: De.constants.RSA_PKCS1_PSS_PADDING, saltLength: De.constants.RSA_PSS_SALTLEN_DIGEST }, n, "base64");
    };
  }
  function qg(r38) {
    var e = od(r38);
    return function() {
      var n = e.apply(null, arguments);
      return n = Zl.derToJose(n, "ES" + r38), n;
    };
  }
  function Gg(r38) {
    var e = id(r38);
    return function(n, o, i) {
      o = Zl.joseToDer(o, "ES" + r38).toString("base64");
      var s = e(n, o, i);
      return s;
    };
  }
  function Vg() {
    return function() {
      return "";
    };
  }
  function $g() {
    return function(e, t) {
      return t === "";
    };
  }
  sd.exports = function(e) {
    var t = { hs: nd, rs: od, ps: Hg, es: qg, none: Vg }, n = { hs: Fg, rs: id, ps: Bg, es: Gg, none: $g }, o = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!o) throw qe(Mg, e);
    var i = (o[1] || o[3]).toLowerCase(), s = o[2];
    return { sign: t[i](s), verify: n[i](s) };
  };
});
var Ha = E((xO, ad) => {
  var Kg = require("buffer").Buffer;
  ad.exports = function(e) {
    return typeof e == "string" ? e : typeof e == "number" || Kg.isBuffer(e) ? e.toString() : JSON.stringify(e);
  };
});
var pd = E((UO, hd) => {
  var zg = Ur().Buffer, cd = Na(), Yg = Fa(), jg = require("stream"), ld = Ha(), Ba = require("util");
  function dd(r38, e) {
    return zg.from(r38, e).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function Wg(r38, e, t) {
    t = t || "utf8";
    var n = dd(ld(r38), "binary"), o = dd(ld(e), t);
    return Ba.format("%s.%s", n, o);
  }
  function ud(r38) {
    var e = r38.header, t = r38.payload, n = r38.secret || r38.privateKey, o = r38.encoding, i = Yg(e.alg), s = Wg(e, t, o), a = i.sign(s, n);
    return Ba.format("%s.%s", s, a);
  }
  function ci(r38) {
    var e = r38.secret;
    if (e = e ?? r38.privateKey, e = e ?? r38.key, /^hs/i.test(r38.header.alg) === true && e == null) throw new TypeError("secret must be a string or buffer or a KeyObject");
    var t = new cd(e);
    this.readable = true, this.header = r38.header, this.encoding = r38.encoding, this.secret = this.privateKey = this.key = t, this.payload = new cd(r38.payload), this.secret.once("close", function() {
      !this.payload.writable && this.readable && this.sign();
    }.bind(this)), this.payload.once("close", function() {
      !this.secret.writable && this.readable && this.sign();
    }.bind(this));
  }
  Ba.inherits(ci, jg);
  ci.prototype.sign = function() {
    try {
      var e = ud({ header: this.header, payload: this.payload.buffer, secret: this.secret.buffer, encoding: this.encoding });
      return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = false, e;
    } catch (t) {
      this.readable = false, this.emit("error", t), this.emit("close");
    }
  };
  ci.sign = ud;
  hd.exports = ci;
});
var Id = E((LO, Sd) => {
  var md = Ur().Buffer, fd = Na(), Qg = Fa(), Jg = require("stream"), gd = Ha(), Xg = require("util"), Zg = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function eE(r38) {
    return Object.prototype.toString.call(r38) === "[object Object]";
  }
  function tE(r38) {
    if (eE(r38)) return r38;
    try {
      return JSON.parse(r38);
    } catch {
      return;
    }
  }
  function Ed(r38) {
    var e = r38.split(".", 1)[0];
    return tE(md.from(e, "base64").toString("binary"));
  }
  function rE(r38) {
    return r38.split(".", 2).join(".");
  }
  function Ad(r38) {
    return r38.split(".")[2];
  }
  function nE(r38, e) {
    e = e || "utf8";
    var t = r38.split(".")[1];
    return md.from(t, "base64").toString(e);
  }
  function yd(r38) {
    return Zg.test(r38) && !!Ed(r38);
  }
  function Td(r38, e, t) {
    if (!e) {
      var n = new Error("Missing algorithm parameter for jws.verify");
      throw n.code = "MISSING_ALGORITHM", n;
    }
    r38 = gd(r38);
    var o = Ad(r38), i = rE(r38), s = Qg(e);
    return s.verify(i, o, t);
  }
  function Cd(r38, e) {
    if (e = e || {}, r38 = gd(r38), !yd(r38)) return null;
    var t = Ed(r38);
    if (!t) return null;
    var n = nE(r38);
    return (t.typ === "JWT" || e.json) && (n = JSON.parse(n, e.encoding)), { header: t, payload: n, signature: Ad(r38) };
  }
  function Hr(r38) {
    r38 = r38 || {};
    var e = r38.secret;
    if (e = e ?? r38.publicKey, e = e ?? r38.key, /^hs/i.test(r38.algorithm) === true && e == null) throw new TypeError("secret must be a string or buffer or a KeyObject");
    var t = new fd(e);
    this.readable = true, this.algorithm = r38.algorithm, this.encoding = r38.encoding, this.secret = this.publicKey = this.key = t, this.signature = new fd(r38.signature), this.secret.once("close", function() {
      !this.signature.writable && this.readable && this.verify();
    }.bind(this)), this.signature.once("close", function() {
      !this.secret.writable && this.readable && this.verify();
    }.bind(this));
  }
  Xg.inherits(Hr, Jg);
  Hr.prototype.verify = function() {
    try {
      var e = Td(this.signature.buffer, this.algorithm, this.key.buffer), t = Cd(this.signature.buffer, this.encoding);
      return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = false, e;
    } catch (n) {
      this.readable = false, this.emit("error", n), this.emit("close");
    }
  };
  Hr.decode = Cd;
  Hr.isValid = yd;
  Hr.verify = Td;
  Sd.exports = Hr;
});
var di = E((Ot) => {
  var _d = pd(), li = Id(), oE = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  Ot.ALGORITHMS = oE;
  Ot.sign = _d.sign;
  Ot.verify = li.verify;
  Ot.decode = li.decode;
  Ot.isValid = li.isValid;
  Ot.createSign = function(e) {
    return new _d(e);
  };
  Ot.createVerify = function(e) {
    return new li(e);
  };
});
var qa = E((HO, vd) => {
  var iE = di();
  vd.exports = function(r38, e) {
    e = e || {};
    var t = iE.decode(r38, e);
    if (!t) return null;
    var n = t.payload;
    if (typeof n == "string") try {
      var o = JSON.parse(n);
      o !== null && typeof o == "object" && (n = o);
    } catch {
    }
    return e.complete === true ? { header: t.header, payload: n, signature: t.signature } : n;
  };
});
var qn = E((BO, Rd) => {
  var ui = function(r38, e) {
    Error.call(this, r38), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = r38, e && (this.inner = e);
  };
  ui.prototype = Object.create(Error.prototype);
  ui.prototype.constructor = ui;
  Rd.exports = ui;
});
var Ga = E((qO, kd) => {
  var wd = qn(), hi = function(r38, e) {
    wd.call(this, r38), this.name = "NotBeforeError", this.date = e;
  };
  hi.prototype = Object.create(wd.prototype);
  hi.prototype.constructor = hi;
  kd.exports = hi;
});
var Va = E((GO, Od) => {
  var Pd = qn(), pi = function(r38, e) {
    Pd.call(this, r38), this.name = "TokenExpiredError", this.expiredAt = e;
  };
  pi.prototype = Object.create(Pd.prototype);
  pi.prototype.constructor = pi;
  Od.exports = pi;
});
var Nd = E((VO, bd) => {
  var Br = 1e3, qr = Br * 60, Gr = qr * 60, cr = Gr * 24, sE = cr * 7, aE = cr * 365.25;
  bd.exports = function(r38, e) {
    e = e || {};
    var t = typeof r38;
    if (t === "string" && r38.length > 0) return cE(r38);
    if (t === "number" && isFinite(r38)) return e.long ? dE(r38) : lE(r38);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(r38));
  };
  function cE(r38) {
    if (r38 = String(r38), !(r38.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r38);
      if (e) {
        var t = parseFloat(e[1]), n = (e[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return t * aE;
          case "weeks":
          case "week":
          case "w":
            return t * sE;
          case "days":
          case "day":
          case "d":
            return t * cr;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return t * Gr;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return t * qr;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return t * Br;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return t;
          default:
            return;
        }
      }
    }
  }
  function lE(r38) {
    var e = Math.abs(r38);
    return e >= cr ? Math.round(r38 / cr) + "d" : e >= Gr ? Math.round(r38 / Gr) + "h" : e >= qr ? Math.round(r38 / qr) + "m" : e >= Br ? Math.round(r38 / Br) + "s" : r38 + "ms";
  }
  function dE(r38) {
    var e = Math.abs(r38);
    return e >= cr ? fi(r38, e, cr, "day") : e >= Gr ? fi(r38, e, Gr, "hour") : e >= qr ? fi(r38, e, qr, "minute") : e >= Br ? fi(r38, e, Br, "second") : r38 + " ms";
  }
  function fi(r38, e, t, n) {
    var o = e >= t * 1.5;
    return Math.round(r38 / t) + " " + n + (o ? "s" : "");
  }
});
var $a = E(($O, Md) => {
  var uE = Nd();
  Md.exports = function(r38, e) {
    var t = e || Math.floor(Date.now() / 1e3);
    if (typeof r38 == "string") {
      var n = uE(r38);
      return typeof n > "u" ? void 0 : Math.floor(t + n / 1e3);
    } else return typeof r38 == "number" ? t + r38 : void 0;
  };
});
var Vr = E((KO, Dd) => {
  "use strict";
  var hE = "2.0.0", pE = Number.MAX_SAFE_INTEGER || 9007199254740991, fE = 16, mE = 250, gE = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Dd.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: fE, MAX_SAFE_BUILD_LENGTH: mE, MAX_SAFE_INTEGER: pE, RELEASE_TYPES: gE, SEMVER_SPEC_VERSION: hE, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var Gn = E((zO, xd) => {
  "use strict";
  var EE = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...r38) => console.error("SEMVER", ...r38) : () => {
  };
  xd.exports = EE;
});
var $r = E((We, Ud) => {
  "use strict";
  var { MAX_SAFE_COMPONENT_LENGTH: Ka, MAX_SAFE_BUILD_LENGTH: AE, MAX_LENGTH: yE } = Vr(), TE = Gn();
  We = Ud.exports = {};
  var CE = We.re = [], SE = We.safeRe = [], y = We.src = [], IE = We.safeSrc = [], T = We.t = {}, _E = 0, za = "[a-zA-Z0-9-]", vE = [["\\s", 1], ["\\d", yE], [za, AE]], RE = (r38) => {
    for (let [e, t] of vE) r38 = r38.split(`${e}*`).join(`${e}{0,${t}}`).split(`${e}+`).join(`${e}{1,${t}}`);
    return r38;
  }, I = (r38, e, t) => {
    let n = RE(e), o = _E++;
    TE(r38, o, e), T[r38] = o, y[o] = e, IE[o] = n, CE[o] = new RegExp(e, t ? "g" : void 0), SE[o] = new RegExp(n, t ? "g" : void 0);
  };
  I("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  I("NUMERICIDENTIFIERLOOSE", "\\d+");
  I("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${za}*`);
  I("MAINVERSION", `(${y[T.NUMERICIDENTIFIER]})\\.(${y[T.NUMERICIDENTIFIER]})\\.(${y[T.NUMERICIDENTIFIER]})`);
  I("MAINVERSIONLOOSE", `(${y[T.NUMERICIDENTIFIERLOOSE]})\\.(${y[T.NUMERICIDENTIFIERLOOSE]})\\.(${y[T.NUMERICIDENTIFIERLOOSE]})`);
  I("PRERELEASEIDENTIFIER", `(?:${y[T.NONNUMERICIDENTIFIER]}|${y[T.NUMERICIDENTIFIER]})`);
  I("PRERELEASEIDENTIFIERLOOSE", `(?:${y[T.NONNUMERICIDENTIFIER]}|${y[T.NUMERICIDENTIFIERLOOSE]})`);
  I("PRERELEASE", `(?:-(${y[T.PRERELEASEIDENTIFIER]}(?:\\.${y[T.PRERELEASEIDENTIFIER]})*))`);
  I("PRERELEASELOOSE", `(?:-?(${y[T.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${y[T.PRERELEASEIDENTIFIERLOOSE]})*))`);
  I("BUILDIDENTIFIER", `${za}+`);
  I("BUILD", `(?:\\+(${y[T.BUILDIDENTIFIER]}(?:\\.${y[T.BUILDIDENTIFIER]})*))`);
  I("FULLPLAIN", `v?${y[T.MAINVERSION]}${y[T.PRERELEASE]}?${y[T.BUILD]}?`);
  I("FULL", `^${y[T.FULLPLAIN]}$`);
  I("LOOSEPLAIN", `[v=\\s]*${y[T.MAINVERSIONLOOSE]}${y[T.PRERELEASELOOSE]}?${y[T.BUILD]}?`);
  I("LOOSE", `^${y[T.LOOSEPLAIN]}$`);
  I("GTLT", "((?:<|>)?=?)");
  I("XRANGEIDENTIFIERLOOSE", `${y[T.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  I("XRANGEIDENTIFIER", `${y[T.NUMERICIDENTIFIER]}|x|X|\\*`);
  I("XRANGEPLAIN", `[v=\\s]*(${y[T.XRANGEIDENTIFIER]})(?:\\.(${y[T.XRANGEIDENTIFIER]})(?:\\.(${y[T.XRANGEIDENTIFIER]})(?:${y[T.PRERELEASE]})?${y[T.BUILD]}?)?)?`);
  I("XRANGEPLAINLOOSE", `[v=\\s]*(${y[T.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[T.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[T.XRANGEIDENTIFIERLOOSE]})(?:${y[T.PRERELEASELOOSE]})?${y[T.BUILD]}?)?)?`);
  I("XRANGE", `^${y[T.GTLT]}\\s*${y[T.XRANGEPLAIN]}$`);
  I("XRANGELOOSE", `^${y[T.GTLT]}\\s*${y[T.XRANGEPLAINLOOSE]}$`);
  I("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Ka}})(?:\\.(\\d{1,${Ka}}))?(?:\\.(\\d{1,${Ka}}))?`);
  I("COERCE", `${y[T.COERCEPLAIN]}(?:$|[^\\d])`);
  I("COERCEFULL", y[T.COERCEPLAIN] + `(?:${y[T.PRERELEASE]})?(?:${y[T.BUILD]})?(?:$|[^\\d])`);
  I("COERCERTL", y[T.COERCE], true);
  I("COERCERTLFULL", y[T.COERCEFULL], true);
  I("LONETILDE", "(?:~>?)");
  I("TILDETRIM", `(\\s*)${y[T.LONETILDE]}\\s+`, true);
  We.tildeTrimReplace = "$1~";
  I("TILDE", `^${y[T.LONETILDE]}${y[T.XRANGEPLAIN]}$`);
  I("TILDELOOSE", `^${y[T.LONETILDE]}${y[T.XRANGEPLAINLOOSE]}$`);
  I("LONECARET", "(?:\\^)");
  I("CARETTRIM", `(\\s*)${y[T.LONECARET]}\\s+`, true);
  We.caretTrimReplace = "$1^";
  I("CARET", `^${y[T.LONECARET]}${y[T.XRANGEPLAIN]}$`);
  I("CARETLOOSE", `^${y[T.LONECARET]}${y[T.XRANGEPLAINLOOSE]}$`);
  I("COMPARATORLOOSE", `^${y[T.GTLT]}\\s*(${y[T.LOOSEPLAIN]})$|^$`);
  I("COMPARATOR", `^${y[T.GTLT]}\\s*(${y[T.FULLPLAIN]})$|^$`);
  I("COMPARATORTRIM", `(\\s*)${y[T.GTLT]}\\s*(${y[T.LOOSEPLAIN]}|${y[T.XRANGEPLAIN]})`, true);
  We.comparatorTrimReplace = "$1$2$3";
  I("HYPHENRANGE", `^\\s*(${y[T.XRANGEPLAIN]})\\s+-\\s+(${y[T.XRANGEPLAIN]})\\s*$`);
  I("HYPHENRANGELOOSE", `^\\s*(${y[T.XRANGEPLAINLOOSE]})\\s+-\\s+(${y[T.XRANGEPLAINLOOSE]})\\s*$`);
  I("STAR", "(<|>)?=?\\s*\\*");
  I("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  I("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var mi = E((YO, Ld) => {
  "use strict";
  var wE = Object.freeze({ loose: true }), kE = Object.freeze({}), PE = (r38) => r38 ? typeof r38 != "object" ? wE : r38 : kE;
  Ld.exports = PE;
});
var Ya = E((jO, Bd) => {
  "use strict";
  var Fd = /^[0-9]+$/, Hd = (r38, e) => {
    if (typeof r38 == "number" && typeof e == "number") return r38 === e ? 0 : r38 < e ? -1 : 1;
    let t = Fd.test(r38), n = Fd.test(e);
    return t && n && (r38 = +r38, e = +e), r38 === e ? 0 : t && !n ? -1 : n && !t ? 1 : r38 < e ? -1 : 1;
  }, OE = (r38, e) => Hd(e, r38);
  Bd.exports = { compareIdentifiers: Hd, rcompareIdentifiers: OE };
});
var ne = E((WO, Gd) => {
  "use strict";
  var gi = Gn(), { MAX_LENGTH: qd, MAX_SAFE_INTEGER: Ei } = Vr(), { safeRe: Ai, t: yi } = $r(), bE = mi(), { compareIdentifiers: ja } = Ya(), NE = (r38, e) => {
    let t = e.split(".");
    if (t.length > r38.length) return false;
    for (let n = 0; n < t.length; n++) if (ja(r38[n], t[n]) !== 0) return false;
    return true;
  }, Wa = class r38 {
    constructor(e, t) {
      if (t = bE(t), e instanceof r38) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if (typeof e != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > qd) throw new TypeError(`version is longer than ${qd} characters`);
      gi("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      let n = e.trim().match(t.loose ? Ai[yi.LOOSE] : Ai[yi.FULL]);
      if (!n) throw new TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ei || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > Ei || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > Ei || this.patch < 0) throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map((o) => {
        if (/^[0-9]+$/.test(o)) {
          let i = +o;
          if (i >= 0 && i < Ei) return i;
        }
        return o;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (gi("SemVer.compare", this.version, this.options, e), !(e instanceof r38)) {
        if (typeof e == "string" && e === this.version) return 0;
        e = new r38(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return e instanceof r38 || (e = new r38(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
    }
    comparePre(e) {
      if (e instanceof r38 || (e = new r38(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
      if (!this.prerelease.length && e.prerelease.length) return 1;
      if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        let n = this.prerelease[t], o = e.prerelease[t];
        if (gi("prerelease compare", t, n, o), n === void 0 && o === void 0) return 0;
        if (o === void 0) return 1;
        if (n === void 0) return -1;
        if (n === o) continue;
        return ja(n, o);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof r38 || (e = new r38(e, this.options));
      let t = 0;
      do {
        let n = this.build[t], o = e.build[t];
        if (gi("build compare", t, n, o), n === void 0 && o === void 0) return 0;
        if (o === void 0) return 1;
        if (n === void 0) return -1;
        if (n === o) continue;
        return ja(n, o);
      } while (++t);
    }
    inc(e, t, n) {
      if (e.startsWith("pre")) {
        if (!t && n === false) throw new Error("invalid increment argument: identifier is empty");
        if (t) {
          let o = `-${t}`.match(this.options.loose ? Ai[yi.PRERELEASELOOSE] : Ai[yi.PRERELEASE]);
          if (!o || o[1] !== t) throw new Error(`invalid identifier: ${t}`);
        }
      }
      switch (e) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", t, n), this.inc("pre", t, n);
          break;
        case "release":
          if (this.prerelease.length === 0) throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          let o = Number(n) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [o];
          else {
            let i = this.prerelease.length;
            for (; --i >= 0; ) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
            if (i === -1) {
              if (t === this.prerelease.join(".") && n === false) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(o);
            }
          }
          if (t) {
            let i = [t, o];
            if (n === false && (i = [t]), NE(this.prerelease, t)) {
              let s = this.prerelease[t.split(".").length];
              isNaN(s) && (this.prerelease = i);
            } else this.prerelease = i;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${e}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  };
  Gd.exports = Wa;
});
var bt = E((QO, $d) => {
  "use strict";
  var Vd = ne(), ME = (r38, e, t = false) => {
    if (r38 instanceof Vd) return r38;
    try {
      return new Vd(r38, e);
    } catch (n) {
      if (!t) return null;
      throw n;
    }
  };
  $d.exports = ME;
});
var zd = E((JO, Kd) => {
  "use strict";
  var DE = bt(), xE = (r38, e) => {
    let t = DE(r38, e);
    return t ? t.version : null;
  };
  Kd.exports = xE;
});
var jd = E((XO, Yd) => {
  "use strict";
  var UE = bt(), LE = (r38, e) => {
    let t = UE(r38.trim().replace(/^[=v]+/, ""), e);
    return t ? t.version : null;
  };
  Yd.exports = LE;
});
var Jd = E((ZO, Qd) => {
  "use strict";
  var Wd = ne(), FE = (r38, e, t, n, o) => {
    typeof t == "string" && (o = n, n = t, t = void 0);
    try {
      return new Wd(r38 instanceof Wd ? r38.version : r38, t).inc(e, n, o).version;
    } catch {
      return null;
    }
  };
  Qd.exports = FE;
});
var eu = E((eb, Zd) => {
  "use strict";
  var Xd = bt(), HE = (r38, e) => {
    let t = Xd(r38, null, true), n = Xd(e, null, true), o = t.compare(n);
    if (o === 0) return null;
    let i = o > 0, s = i ? t : n, a = i ? n : t, c = !!s.prerelease.length;
    if (!!a.prerelease.length && !c) {
      if (!a.patch && !a.minor) return "major";
      if (a.compareMain(s) === 0) return a.minor && !a.patch ? "minor" : "patch";
    }
    let d = c ? "pre" : "";
    return t.major !== n.major ? d + "major" : t.minor !== n.minor ? d + "minor" : t.patch !== n.patch ? d + "patch" : "prerelease";
  };
  Zd.exports = HE;
});
var ru = E((tb, tu) => {
  "use strict";
  var BE = ne(), qE = (r38, e) => new BE(r38, e).major;
  tu.exports = qE;
});
var ou = E((rb, nu) => {
  "use strict";
  var GE = ne(), VE = (r38, e) => new GE(r38, e).minor;
  nu.exports = VE;
});
var su = E((nb, iu) => {
  "use strict";
  var $E = ne(), KE = (r38, e) => new $E(r38, e).patch;
  iu.exports = KE;
});
var cu = E((ob, au) => {
  "use strict";
  var zE = bt(), YE = (r38, e) => {
    let t = zE(r38, e);
    return t && t.prerelease.length ? t.prerelease : null;
  };
  au.exports = YE;
});
var xe = E((ib, du) => {
  "use strict";
  var lu = ne(), jE = (r38, e, t) => new lu(r38, t).compare(new lu(e, t));
  du.exports = jE;
});
var hu = E((sb, uu) => {
  "use strict";
  var WE = xe(), QE = (r38, e, t) => WE(e, r38, t);
  uu.exports = QE;
});
var fu = E((ab, pu) => {
  "use strict";
  var JE = xe(), XE = (r38, e) => JE(r38, e, true);
  pu.exports = XE;
});
var Ti = E((cb, gu) => {
  "use strict";
  var mu = ne(), ZE = (r38, e, t) => {
    let n = new mu(r38, t), o = new mu(e, t);
    return n.compare(o) || n.compareBuild(o);
  };
  gu.exports = ZE;
});
var Au = E((lb, Eu) => {
  "use strict";
  var eA = Ti(), tA = (r38, e) => r38.sort((t, n) => eA(t, n, e));
  Eu.exports = tA;
});
var Tu = E((db, yu) => {
  "use strict";
  var rA = Ti(), nA = (r38, e) => r38.sort((t, n) => rA(n, t, e));
  yu.exports = nA;
});
var Vn = E((ub, Cu) => {
  "use strict";
  var oA = xe(), iA = (r38, e, t) => oA(r38, e, t) > 0;
  Cu.exports = iA;
});
var Ci = E((hb, Su) => {
  "use strict";
  var sA = xe(), aA = (r38, e, t) => sA(r38, e, t) < 0;
  Su.exports = aA;
});
var Qa = E((pb, Iu) => {
  "use strict";
  var cA = xe(), lA = (r38, e, t) => cA(r38, e, t) === 0;
  Iu.exports = lA;
});
var Ja = E((fb, _u) => {
  "use strict";
  var dA = xe(), uA = (r38, e, t) => dA(r38, e, t) !== 0;
  _u.exports = uA;
});
var Si = E((mb, vu) => {
  "use strict";
  var hA = xe(), pA = (r38, e, t) => hA(r38, e, t) >= 0;
  vu.exports = pA;
});
var Ii = E((gb, Ru) => {
  "use strict";
  var fA = xe(), mA = (r38, e, t) => fA(r38, e, t) <= 0;
  Ru.exports = mA;
});
var Xa = E((Eb, wu) => {
  "use strict";
  var gA = Qa(), EA = Ja(), AA = Vn(), yA = Si(), TA = Ci(), CA = Ii(), SA = (r38, e, t, n) => {
    switch (e) {
      case "===":
        return typeof r38 == "object" && (r38 = r38.version), typeof t == "object" && (t = t.version), r38 === t;
      case "!==":
        return typeof r38 == "object" && (r38 = r38.version), typeof t == "object" && (t = t.version), r38 !== t;
      case "":
      case "=":
      case "==":
        return gA(r38, t, n);
      case "!=":
        return EA(r38, t, n);
      case ">":
        return AA(r38, t, n);
      case ">=":
        return yA(r38, t, n);
      case "<":
        return TA(r38, t, n);
      case "<=":
        return CA(r38, t, n);
      default:
        throw new TypeError(`Invalid operator: ${e}`);
    }
  };
  wu.exports = SA;
});
var Pu = E((Ab, ku) => {
  "use strict";
  var IA = ne(), _A = bt(), { safeRe: _i, t: vi } = $r(), vA = (r38, e) => {
    if (r38 instanceof IA) return r38;
    if (typeof r38 == "number" && (r38 = String(r38)), typeof r38 != "string") return null;
    e = e || {};
    let t = null;
    if (!e.rtl) t = r38.match(e.includePrerelease ? _i[vi.COERCEFULL] : _i[vi.COERCE]);
    else {
      let c = e.includePrerelease ? _i[vi.COERCERTLFULL] : _i[vi.COERCERTL], l;
      for (; (l = c.exec(r38)) && (!t || t.index + t[0].length !== r38.length); ) (!t || l.index + l[0].length !== t.index + t[0].length) && (t = l), c.lastIndex = l.index + l[1].length + l[2].length;
      c.lastIndex = -1;
    }
    if (t === null) return null;
    let n = t[2], o = t[3] || "0", i = t[4] || "0", s = e.includePrerelease && t[5] ? `-${t[5]}` : "", a = e.includePrerelease && t[6] ? `+${t[6]}` : "";
    return _A(`${n}.${o}.${i}${s}${a}`, e);
  };
  ku.exports = vA;
});
var bu = E((yb, Ou) => {
  "use strict";
  var RA = bt(), wA = Vr(), kA = ne(), PA = (r38, e, t) => {
    if (!wA.RELEASE_TYPES.includes(e)) return null;
    let n = OA(r38, t);
    return n && bA(n, e);
  }, OA = (r38, e) => {
    let t = r38 instanceof kA ? r38.version : r38;
    return RA(t, e);
  }, bA = (r38, e) => {
    if (NA(e)) return r38.version;
    switch (r38.prerelease = [], e) {
      case "major":
        r38.minor = 0, r38.patch = 0;
        break;
      case "minor":
        r38.patch = 0;
        break;
    }
    return r38.format();
  }, NA = (r38) => r38.startsWith("pre");
  Ou.exports = PA;
});
var Mu = E((Tb, Nu) => {
  "use strict";
  var Za = class {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(e) {
      let t = this.map.get(e);
      if (t !== void 0) return this.map.delete(e), this.map.set(e, t), t;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && t !== void 0) {
        if (this.map.size >= this.max) {
          let o = this.map.keys().next().value;
          this.delete(o);
        }
        this.map.set(e, t);
      }
      return this;
    }
  };
  Nu.exports = Za;
});
var Ue = E((Cb, Lu) => {
  "use strict";
  var MA = /\s+/g, ec = class r38 {
    constructor(e, t) {
      if (t = xA(t), e instanceof r38) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new r38(e.raw, t);
      if (e instanceof tc) return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(MA, " "), this.set = this.raw.split("||").map((n) => this.parseRange(n.trim())).filter((n) => n.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let n = this.set[0];
        if (this.set = this.set.filter((o) => !xu(o[0])), this.set.length === 0) this.set = [n];
        else if (this.set.length > 1) {
          for (let o of this.set) if (o.length === 1 && $A(o[0])) {
            this.set = [o];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          e > 0 && (this.formatted += "||");
          let t = this.set[e];
          for (let n = 0; n < t.length; n++) n > 0 && (this.formatted += " "), this.formatted += t[n].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      e = e.replace(VA, "");
      let n = ((this.options.includePrerelease && qA) | (this.options.loose && GA)) + ":" + e, o = Du.get(n);
      if (o) return o;
      let i = this.options.loose, s = i ? Ce[oe.HYPHENRANGELOOSE] : Ce[oe.HYPHENRANGE];
      e = e.replace(s, ty(this.options.includePrerelease)), L("hyphen replace", e), e = e.replace(Ce[oe.COMPARATORTRIM], FA), L("comparator trim", e), e = e.replace(Ce[oe.TILDETRIM], HA), L("tilde trim", e), e = e.replace(Ce[oe.CARETTRIM], BA), L("caret trim", e);
      let a = e.split(" ").map((u) => KA(u, this.options)).join(" ").split(/\s+/).map((u) => ey(u, this.options));
      i && (a = a.filter((u) => (L("loose invalid filter", u, this.options), !!u.match(Ce[oe.COMPARATORLOOSE])))), L("range list", a);
      let c = /* @__PURE__ */ new Map(), l = a.map((u) => new tc(u, this.options));
      for (let u of l) {
        if (xu(u)) return [u];
        c.set(u.value, u);
      }
      c.size > 1 && c.has("") && c.delete("");
      let d = [...c.values()];
      return Du.set(n, d), d;
    }
    intersects(e, t) {
      if (!(e instanceof r38)) throw new TypeError("a Range is required");
      return this.set.some((n) => Uu(n, t) && e.set.some((o) => Uu(o, t) && n.every((i) => o.every((s) => i.intersects(s, t)))));
    }
    test(e) {
      if (!e) return false;
      if (typeof e == "string") try {
        e = new UA(e, this.options);
      } catch {
        return false;
      }
      for (let t = 0; t < this.set.length; t++) if (ry(this.set[t], e, this.options)) return true;
      return false;
    }
  };
  Lu.exports = ec;
  var DA = Mu(), Du = new DA(), xA = mi(), tc = $n(), L = Gn(), UA = ne(), { safeRe: Ce, src: LA, t: oe, comparatorTrimReplace: FA, tildeTrimReplace: HA, caretTrimReplace: BA } = $r(), { FLAG_INCLUDE_PRERELEASE: qA, FLAG_LOOSE: GA } = Vr(), VA = new RegExp(LA[oe.BUILD], "g"), xu = (r38) => r38.value === "<0.0.0-0", $A = (r38) => r38.value === "", Uu = (r38, e) => {
    let t = true, n = r38.slice(), o = n.pop();
    for (; t && n.length; ) t = n.every((i) => o.intersects(i, e)), o = n.pop();
    return t;
  }, KA = (r38, e) => (r38 = r38.replace(Ce[oe.BUILD], ""), L("comp", r38, e), r38 = WA(r38, e), L("caret", r38), r38 = YA(r38, e), L("tildes", r38), r38 = JA(r38, e), L("xrange", r38), r38 = ZA(r38, e), L("stars", r38), r38), Y = (r38) => !r38 || r38.toLowerCase() === "x" || r38 === "*", zA = (r38, e, t) => Y(r38) && !Y(e) || Y(e) && t && !Y(t), YA = (r38, e) => r38.trim().split(/\s+/).map((t) => jA(t, e)).join(" "), jA = (r38, e) => {
    let t = e.loose ? Ce[oe.TILDELOOSE] : Ce[oe.TILDE], n = e.includePrerelease ? "-0" : "";
    return r38.replace(t, (o, i, s, a, c) => {
      L("tilde", r38, o, i, s, a, c);
      let l;
      return Y(i) ? l = "" : Y(s) ? l = `>=${i}.0.0${n} <${+i + 1}.0.0-0` : Y(a) ? l = `>=${i}.${s}.0${n} <${i}.${+s + 1}.0-0` : c ? (L("replaceTilde pr", c), l = `>=${i}.${s}.${a}-${c} <${i}.${+s + 1}.0-0`) : l = `>=${i}.${s}.${a} <${i}.${+s + 1}.0-0`, L("tilde return", l), l;
    });
  }, WA = (r38, e) => r38.trim().split(/\s+/).map((t) => QA(t, e)).join(" "), QA = (r38, e) => {
    L("caret", r38, e);
    let t = e.loose ? Ce[oe.CARETLOOSE] : Ce[oe.CARET], n = e.includePrerelease ? "-0" : "";
    return r38.replace(t, (o, i, s, a, c) => {
      L("caret", r38, o, i, s, a, c);
      let l;
      return Y(i) ? l = "" : Y(s) ? l = `>=${i}.0.0${n} <${+i + 1}.0.0-0` : Y(a) ? i === "0" ? l = `>=${i}.${s}.0${n} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.0${n} <${+i + 1}.0.0-0` : c ? (L("replaceCaret pr", c), i === "0" ? s === "0" ? l = `>=${i}.${s}.${a}-${c} <${i}.${s}.${+a + 1}-0` : l = `>=${i}.${s}.${a}-${c} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.${a}-${c} <${+i + 1}.0.0-0`) : (L("no pr"), i === "0" ? s === "0" ? l = `>=${i}.${s}.${a} <${i}.${s}.${+a + 1}-0` : l = `>=${i}.${s}.${a} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.${a} <${+i + 1}.0.0-0`), L("caret return", l), l;
    });
  }, JA = (r38, e) => (L("replaceXRanges", r38, e), r38.split(/\s+/).map((t) => XA(t, e)).join(" ")), XA = (r38, e) => {
    r38 = r38.trim();
    let t = e.loose ? Ce[oe.XRANGELOOSE] : Ce[oe.XRANGE];
    return r38.replace(t, (n, o, i, s, a, c) => {
      if (L("xRange", r38, n, o, i, s, a, c), zA(i, s, a)) return r38;
      let l = Y(i), d = l || Y(s), u = d || Y(a), g = u;
      return o === "=" && g && (o = ""), c = e.includePrerelease ? "-0" : "", l ? o === ">" || o === "<" ? n = "<0.0.0-0" : n = "*" : o && g ? (d && (s = 0), a = 0, o === ">" ? (o = ">=", d ? (i = +i + 1, s = 0, a = 0) : (s = +s + 1, a = 0)) : o === "<=" && (o = "<", d ? i = +i + 1 : s = +s + 1), o === "<" && (c = "-0"), n = `${o + i}.${s}.${a}${c}`) : d ? n = `>=${i}.0.0${c} <${+i + 1}.0.0-0` : u && (n = `>=${i}.${s}.0${c} <${i}.${+s + 1}.0-0`), L("xRange return", n), n;
    });
  }, ZA = (r38, e) => (L("replaceStars", r38, e), r38.trim().replace(Ce[oe.STAR], "")), ey = (r38, e) => (L("replaceGTE0", r38, e), r38.trim().replace(Ce[e.includePrerelease ? oe.GTE0PRE : oe.GTE0], "")), ty = (r38) => (e, t, n, o, i, s, a, c, l, d, u, g) => (Y(n) ? t = "" : Y(o) ? t = `>=${n}.0.0${r38 ? "-0" : ""}` : Y(i) ? t = `>=${n}.${o}.0${r38 ? "-0" : ""}` : s ? t = `>=${t}` : t = `>=${t}${r38 ? "-0" : ""}`, Y(l) ? c = "" : Y(d) ? c = `<${+l + 1}.0.0-0` : Y(u) ? c = `<${l}.${+d + 1}.0-0` : g ? c = `<=${l}.${d}.${u}-${g}` : r38 ? c = `<${l}.${d}.${+u + 1}-0` : c = `<=${c}`, `${t} ${c}`.trim()), ry = (r38, e, t) => {
    for (let n = 0; n < r38.length; n++) if (!r38[n].test(e)) return false;
    if (e.prerelease.length && !t.includePrerelease) {
      for (let n = 0; n < r38.length; n++) if (L(r38[n].semver), r38[n].semver !== tc.ANY && r38[n].semver.prerelease.length > 0) {
        let o = r38[n].semver;
        if (o.major === e.major && o.minor === e.minor && o.patch === e.patch) return true;
      }
      return false;
    }
    return true;
  };
});
var $n = E((Sb, Vu) => {
  "use strict";
  var Kn = /* @__PURE__ */ Symbol("SemVer ANY"), oc = class r38 {
    static get ANY() {
      return Kn;
    }
    constructor(e, t) {
      if (t = Fu(t), e instanceof r38) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      e = e.trim().split(/\s+/).join(" "), nc("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Kn ? this.value = "" : this.value = this.operator + this.semver.version, nc("comp", this);
    }
    parse(e) {
      let t = this.options.loose ? Hu[Bu.COMPARATORLOOSE] : Hu[Bu.COMPARATOR], n = e.match(t);
      if (!n) throw new TypeError(`Invalid comparator: ${e}`);
      this.operator = n[1] !== void 0 ? n[1] : "", this.operator === "=" && (this.operator = ""), n[2] ? this.semver = new qu(n[2], this.options.loose) : this.semver = Kn;
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (nc("Comparator.test", e, this.options.loose), this.semver === Kn || e === Kn) return true;
      if (typeof e == "string") try {
        e = new qu(e, this.options);
      } catch {
        return false;
      }
      return rc(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof r38)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new Gu(e.value, t).test(this.value) : e.operator === "" ? e.value === "" ? true : new Gu(this.value, t).test(e.semver) : (t = Fu(t), t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0") || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || rc(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || rc(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
    }
  };
  Vu.exports = oc;
  var Fu = mi(), { safeRe: Hu, t: Bu } = $r(), rc = Xa(), nc = Gn(), qu = ne(), Gu = Ue();
});
var zn = E((Ib, $u) => {
  "use strict";
  var ny = Ue(), oy = (r38, e, t) => {
    try {
      e = new ny(e, t);
    } catch {
      return false;
    }
    return e.test(r38);
  };
  $u.exports = oy;
});
var zu = E((_b, Ku) => {
  "use strict";
  var iy = Ue(), sy = (r38, e) => new iy(r38, e).set.map((t) => t.map((n) => n.value).join(" ").trim().split(" "));
  Ku.exports = sy;
});
var ju = E((vb, Yu) => {
  "use strict";
  var ay = ne(), cy = Ue(), ly = (r38, e, t) => {
    let n = null, o = null, i = null;
    try {
      i = new cy(e, t);
    } catch {
      return null;
    }
    return r38.forEach((s) => {
      i.test(s) && (!n || o.compare(s) === -1) && (n = s, o = new ay(n, t));
    }), n;
  };
  Yu.exports = ly;
});
var Qu = E((Rb, Wu) => {
  "use strict";
  var dy = ne(), uy = Ue(), hy = (r38, e, t) => {
    let n = null, o = null, i = null;
    try {
      i = new uy(e, t);
    } catch {
      return null;
    }
    return r38.forEach((s) => {
      i.test(s) && (!n || o.compare(s) === 1) && (n = s, o = new dy(n, t));
    }), n;
  };
  Wu.exports = hy;
});
var Zu = E((wb, Xu) => {
  "use strict";
  var ic = ne(), py = Ue(), Ju = Vn(), fy = (r38, e) => {
    r38 = new py(r38, e);
    let t = new ic("0.0.0");
    if (r38.test(t) || (t = new ic("0.0.0-0"), r38.test(t))) return t;
    t = null;
    for (let n = 0; n < r38.set.length; ++n) {
      let o = r38.set[n], i = null;
      o.forEach((s) => {
        let a = new ic(s.semver.version);
        switch (s.operator) {
          case ">":
            a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
          case "":
          case ">=":
            (!i || Ju(a, i)) && (i = a);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${s.operator}`);
        }
      }), i && (!t || Ju(t, i)) && (t = i);
    }
    return t && r38.test(t) ? t : null;
  };
  Xu.exports = fy;
});
var th = E((kb, eh) => {
  "use strict";
  var my = Ue(), gy = (r38, e) => {
    try {
      return new my(r38, e).range || "*";
    } catch {
      return null;
    }
  };
  eh.exports = gy;
});
var Ri = E((Pb, ih) => {
  "use strict";
  var Ey = ne(), oh = $n(), { ANY: Ay } = oh, yy = Ue(), Ty = zn(), rh = Vn(), nh = Ci(), Cy = Ii(), Sy = Si(), Iy = (r38, e, t, n) => {
    r38 = new Ey(r38, n), e = new yy(e, n);
    let o, i, s, a, c;
    switch (t) {
      case ">":
        o = rh, i = Cy, s = nh, a = ">", c = ">=";
        break;
      case "<":
        o = nh, i = Sy, s = rh, a = "<", c = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Ty(r38, e, n)) return false;
    for (let l = 0; l < e.set.length; ++l) {
      let d = e.set[l], u = null, g = null;
      if (d.forEach((f) => {
        f.semver === Ay && (f = new oh(">=0.0.0")), u = u || f, g = g || f, o(f.semver, u.semver, n) ? u = f : s(f.semver, g.semver, n) && (g = f);
      }), u.operator === a || u.operator === c || (!g.operator || g.operator === a) && i(r38, g.semver)) return false;
      if (g.operator === c && s(r38, g.semver)) return false;
    }
    return true;
  };
  ih.exports = Iy;
});
var ah = E((Ob, sh) => {
  "use strict";
  var _y = Ri(), vy = (r38, e, t) => _y(r38, e, ">", t);
  sh.exports = vy;
});
var lh = E((bb, ch) => {
  "use strict";
  var Ry = Ri(), wy = (r38, e, t) => Ry(r38, e, "<", t);
  ch.exports = wy;
});
var hh = E((Nb, uh) => {
  "use strict";
  var dh = Ue(), ky = (r38, e, t) => (r38 = new dh(r38, t), e = new dh(e, t), r38.intersects(e, t));
  uh.exports = ky;
});
var fh = E((Mb, ph) => {
  "use strict";
  var Py = zn(), Oy = xe();
  ph.exports = (r38, e, t) => {
    let n = [], o = null, i = null, s = r38.sort((d, u) => Oy(d, u, t));
    for (let d of s) Py(d, e, t) ? (i = d, o || (o = d)) : (i && n.push([o, i]), i = null, o = null);
    o && n.push([o, null]);
    let a = [];
    for (let [d, u] of n) d === u ? a.push(d) : !u && d === s[0] ? a.push("*") : u ? d === s[0] ? a.push(`<=${u}`) : a.push(`${d} - ${u}`) : a.push(`>=${d}`);
    let c = a.join(" || "), l = typeof e.raw == "string" ? e.raw : String(e);
    return c.length < l.length ? c : e;
  };
});
var Th = E((Db, yh) => {
  "use strict";
  var mh = Ue(), cc = $n(), { ANY: sc } = cc, ac = zn(), lc = xe(), by = (r38, e, t = {}) => {
    if (r38 === e) return true;
    r38 = new mh(r38, t), e = new mh(e, t);
    let n = false;
    e: for (let o of r38.set) {
      for (let i of e.set) {
        let s = My(o, i, t);
        if (n = n || s !== null, s) continue e;
      }
      if (n) return false;
    }
    return true;
  }, Ny = [new cc(">=0.0.0-0")], gh = [new cc(">=0.0.0")], My = (r38, e, t) => {
    if (r38 === e) return true;
    if (r38.length === 1 && r38[0].semver === sc) {
      if (e.length === 1 && e[0].semver === sc) return true;
      t.includePrerelease ? r38 = Ny : r38 = gh;
    }
    if (e.length === 1 && e[0].semver === sc) {
      if (t.includePrerelease) return true;
      e = gh;
    }
    let n = /* @__PURE__ */ new Set(), o, i;
    for (let f of r38) f.operator === ">" || f.operator === ">=" ? o = Eh(o, f, t) : f.operator === "<" || f.operator === "<=" ? i = Ah(i, f, t) : n.add(f.semver);
    if (n.size > 1) return null;
    let s;
    if (o && i) {
      if (s = lc(o.semver, i.semver, t), s > 0) return null;
      if (s === 0 && (o.operator !== ">=" || i.operator !== "<=")) return null;
    }
    for (let f of n) {
      if (o && !ac(f, String(o), t) || i && !ac(f, String(i), t)) return null;
      for (let A of e) if (!ac(f, String(A), t)) return false;
      return true;
    }
    let a, c, l, d, u = i && !t.includePrerelease && i.semver.prerelease.length ? i.semver : false, g = o && !t.includePrerelease && o.semver.prerelease.length ? o.semver : false;
    u && u.prerelease.length === 1 && i.operator === "<" && u.prerelease[0] === 0 && (u = false);
    for (let f of e) {
      if (d = d || f.operator === ">" || f.operator === ">=", l = l || f.operator === "<" || f.operator === "<=", o) {
        if (g && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === g.major && f.semver.minor === g.minor && f.semver.patch === g.patch && (g = false), f.operator === ">" || f.operator === ">=") {
          if (a = Eh(o, f, t), a === f && a !== o) return false;
        } else if (o.operator === ">=" && !f.test(o.semver)) return false;
      }
      if (i) {
        if (u && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === u.major && f.semver.minor === u.minor && f.semver.patch === u.patch && (u = false), f.operator === "<" || f.operator === "<=") {
          if (c = Ah(i, f, t), c === f && c !== i) return false;
        } else if (i.operator === "<=" && !f.test(i.semver)) return false;
      }
      if (!f.operator && (i || o) && s !== 0) return false;
    }
    return !(o && l && !i && s !== 0 || i && d && !o && s !== 0 || g || u);
  }, Eh = (r38, e, t) => {
    if (!r38) return e;
    let n = lc(r38.semver, e.semver, t);
    return n > 0 ? r38 : n < 0 || e.operator === ">" && r38.operator === ">=" ? e : r38;
  }, Ah = (r38, e, t) => {
    if (!r38) return e;
    let n = lc(r38.semver, e.semver, t);
    return n < 0 ? r38 : n > 0 || e.operator === "<" && r38.operator === "<=" ? e : r38;
  };
  yh.exports = by;
});
var wi = E((xb, Ih) => {
  "use strict";
  var dc = $r(), Ch = Vr(), Dy = ne(), Sh = Ya(), xy = bt(), Uy = zd(), Ly = jd(), Fy = Jd(), Hy = eu(), By = ru(), qy = ou(), Gy = su(), Vy = cu(), $y = xe(), Ky = hu(), zy = fu(), Yy = Ti(), jy = Au(), Wy = Tu(), Qy = Vn(), Jy = Ci(), Xy = Qa(), Zy = Ja(), eT = Si(), tT = Ii(), rT = Xa(), nT = Pu(), oT = bu(), iT = $n(), sT = Ue(), aT = zn(), cT = zu(), lT = ju(), dT = Qu(), uT = Zu(), hT = th(), pT = Ri(), fT = ah(), mT = lh(), gT = hh(), ET = fh(), AT = Th();
  Ih.exports = { parse: xy, valid: Uy, clean: Ly, inc: Fy, diff: Hy, major: By, minor: qy, patch: Gy, prerelease: Vy, compare: $y, rcompare: Ky, compareLoose: zy, compareBuild: Yy, sort: jy, rsort: Wy, gt: Qy, lt: Jy, eq: Xy, neq: Zy, gte: eT, lte: tT, cmp: rT, coerce: nT, truncate: oT, Comparator: iT, Range: sT, satisfies: aT, toComparators: cT, maxSatisfying: lT, minSatisfying: dT, minVersion: uT, validRange: hT, outside: pT, gtr: fT, ltr: mT, intersects: gT, simplifyRange: ET, subset: AT, SemVer: Dy, re: dc.re, src: dc.src, tokens: dc.t, SEMVER_SPEC_VERSION: Ch.SEMVER_SPEC_VERSION, RELEASE_TYPES: Ch.RELEASE_TYPES, compareIdentifiers: Sh.compareIdentifiers, rcompareIdentifiers: Sh.rcompareIdentifiers };
});
var vh = E((Ub, _h) => {
  var yT = wi();
  _h.exports = yT.satisfies(process.version, ">=15.7.0");
});
var wh = E((Lb, Rh) => {
  var TT = wi();
  Rh.exports = TT.satisfies(process.version, ">=16.9.0");
});
var uc = E((Fb, kh) => {
  var CT = vh(), ST = wh(), IT = { ec: ["ES256", "ES384", "ES512"], rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"], "rsa-pss": ["PS256", "PS384", "PS512"] }, _T = { ES256: "prime256v1", ES384: "secp384r1", ES512: "secp521r1" };
  kh.exports = function(r38, e) {
    if (!r38 || !e) return;
    let t = e.asymmetricKeyType;
    if (!t) return;
    let n = IT[t];
    if (!n) throw new Error(`Unknown key type "${t}".`);
    if (!n.includes(r38)) throw new Error(`"alg" parameter for "${t}" key type must be one of: ${n.join(", ")}.`);
    if (CT) switch (t) {
      case "ec":
        let o = e.asymmetricKeyDetails.namedCurve, i = _T[r38];
        if (o !== i) throw new Error(`"alg" parameter "${r38}" requires curve "${i}".`);
        break;
      case "rsa-pss":
        if (ST) {
          let s = parseInt(r38.slice(-3), 10), { hashAlgorithm: a, mgf1HashAlgorithm: c, saltLength: l } = e.asymmetricKeyDetails;
          if (a !== `sha${s}` || c !== a) throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${r38}.`);
          if (l !== void 0 && l > s >> 3) throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${r38}.`);
        }
        break;
    }
  };
});
var hc = E((Hb, Ph) => {
  var vT = wi();
  Ph.exports = vT.satisfies(process.version, "^6.12.0 || >=8.0.0");
});
var Nh = E((Bb, bh) => {
  var U = qn(), RT = Ga(), Oh = Va(), wT = qa(), kT = $a(), PT = uc(), OT = hc(), bT = di(), { KeyObject: NT, createSecretKey: MT, createPublicKey: DT } = require("crypto"), pc = ["RS256", "RS384", "RS512"], xT = ["ES256", "ES384", "ES512"], fc = ["RS256", "RS384", "RS512"], UT = ["HS256", "HS384", "HS512"];
  OT && (pc.splice(pc.length, 0, "PS256", "PS384", "PS512"), fc.splice(fc.length, 0, "PS256", "PS384", "PS512"));
  bh.exports = function(r38, e, t, n) {
    typeof t == "function" && !n && (n = t, t = {}), t || (t = {}), t = Object.assign({}, t);
    let o;
    if (n ? o = n : o = function(d, u) {
      if (d) throw d;
      return u;
    }, t.clockTimestamp && typeof t.clockTimestamp != "number") return o(new U("clockTimestamp must be a number"));
    if (t.nonce !== void 0 && (typeof t.nonce != "string" || t.nonce.trim() === "")) return o(new U("nonce must be a non-empty string"));
    if (t.allowInvalidAsymmetricKeyTypes !== void 0 && typeof t.allowInvalidAsymmetricKeyTypes != "boolean") return o(new U("allowInvalidAsymmetricKeyTypes must be a boolean"));
    let i = t.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!r38) return o(new U("jwt must be provided"));
    if (typeof r38 != "string") return o(new U("jwt must be a string"));
    let s = r38.split(".");
    if (s.length !== 3) return o(new U("jwt malformed"));
    let a;
    try {
      a = wT(r38, { complete: true });
    } catch (d) {
      return o(d);
    }
    if (!a) return o(new U("invalid token"));
    let c = a.header, l;
    if (typeof e == "function") {
      if (!n) return o(new U("verify must be called asynchronous if secret or public key is provided as a callback"));
      l = e;
    } else l = function(d, u) {
      return u(null, e);
    };
    return l(c, function(d, u) {
      if (d) return o(new U("error in secret or public key callback: " + d.message));
      let g = s[2].trim() !== "";
      if (!g && u) return o(new U("jwt signature is required"));
      if (g && !u) return o(new U("secret or public key must be provided"));
      if (!g && !t.algorithms) return o(new U('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (u != null && !(u instanceof NT)) try {
        u = DT(u);
      } catch {
        try {
          u = MT(typeof u == "string" ? Buffer.from(u) : u);
        } catch {
          return o(new U("secretOrPublicKey is not valid key material"));
        }
      }
      if (t.algorithms || (u.type === "secret" ? t.algorithms = UT : ["rsa", "rsa-pss"].includes(u.asymmetricKeyType) ? t.algorithms = fc : u.asymmetricKeyType === "ec" ? t.algorithms = xT : t.algorithms = pc), t.algorithms.indexOf(a.header.alg) === -1) return o(new U("invalid algorithm"));
      if (c.alg.startsWith("HS") && u.type !== "secret") return o(new U(`secretOrPublicKey must be a symmetric key when using ${c.alg}`));
      if (/^(?:RS|PS|ES)/.test(c.alg) && u.type !== "public") return o(new U(`secretOrPublicKey must be an asymmetric key when using ${c.alg}`));
      if (!t.allowInvalidAsymmetricKeyTypes) try {
        PT(c.alg, u);
      } catch (C) {
        return o(C);
      }
      let f;
      try {
        f = bT.verify(r38, a.header.alg, u);
      } catch (C) {
        return o(C);
      }
      if (!f) return o(new U("invalid signature"));
      let A = a.payload;
      if (typeof A.nbf < "u" && !t.ignoreNotBefore) {
        if (typeof A.nbf != "number") return o(new U("invalid nbf value"));
        if (A.nbf > i + (t.clockTolerance || 0)) return o(new RT("jwt not active", new Date(A.nbf * 1e3)));
      }
      if (typeof A.exp < "u" && !t.ignoreExpiration) {
        if (typeof A.exp != "number") return o(new U("invalid exp value"));
        if (i >= A.exp + (t.clockTolerance || 0)) return o(new Oh("jwt expired", new Date(A.exp * 1e3)));
      }
      if (t.audience) {
        let C = Array.isArray(t.audience) ? t.audience : [t.audience];
        if (!(Array.isArray(A.aud) ? A.aud : [A.aud]).some(function(F) {
          return C.some(function(j) {
            return j instanceof RegExp ? j.test(F) : j === F;
          });
        })) return o(new U("jwt audience invalid. expected: " + C.join(" or ")));
      }
      if (t.issuer && (typeof t.issuer == "string" && A.iss !== t.issuer || Array.isArray(t.issuer) && t.issuer.indexOf(A.iss) === -1)) return o(new U("jwt issuer invalid. expected: " + t.issuer));
      if (t.subject && A.sub !== t.subject) return o(new U("jwt subject invalid. expected: " + t.subject));
      if (t.jwtid && A.jti !== t.jwtid) return o(new U("jwt jwtid invalid. expected: " + t.jwtid));
      if (t.nonce && A.nonce !== t.nonce) return o(new U("jwt nonce invalid. expected: " + t.nonce));
      if (t.maxAge) {
        if (typeof A.iat != "number") return o(new U("iat required when maxAge is specified"));
        let C = kT(t.maxAge, A.iat);
        if (typeof C > "u") return o(new U('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (i >= C + (t.clockTolerance || 0)) return o(new Oh("maxAge exceeded", new Date(C * 1e3)));
      }
      if (t.complete === true) {
        let C = a.signature;
        return o(null, { header: c, payload: A, signature: C });
      }
      return o(null, A);
    });
  };
});
var Fh = E((qb, Lh) => {
  var Mh = 1 / 0, xh = 9007199254740991, LT = 17976931348623157e292, Dh = NaN, FT = "[object Arguments]", HT = "[object Function]", BT = "[object GeneratorFunction]", qT = "[object String]", GT = "[object Symbol]", VT = /^\s+|\s+$/g, $T = /^[-+]0x[0-9a-f]+$/i, KT = /^0b[01]+$/i, zT = /^0o[0-7]+$/i, YT = /^(?:0|[1-9]\d*)$/, jT = parseInt;
  function WT(r38, e) {
    for (var t = -1, n = r38 ? r38.length : 0, o = Array(n); ++t < n; ) o[t] = e(r38[t], t, r38);
    return o;
  }
  function QT(r38, e, t, n) {
    for (var o = r38.length, i = t + (n ? 1 : -1); n ? i-- : ++i < o; ) if (e(r38[i], i, r38)) return i;
    return -1;
  }
  function JT(r38, e, t) {
    if (e !== e) return QT(r38, XT, t);
    for (var n = t - 1, o = r38.length; ++n < o; ) if (r38[n] === e) return n;
    return -1;
  }
  function XT(r38) {
    return r38 !== r38;
  }
  function ZT(r38, e) {
    for (var t = -1, n = Array(r38); ++t < r38; ) n[t] = e(t);
    return n;
  }
  function eC(r38, e) {
    return WT(e, function(t) {
      return r38[t];
    });
  }
  function tC(r38, e) {
    return function(t) {
      return r38(e(t));
    };
  }
  var ki = Object.prototype, gc = ki.hasOwnProperty, Pi = ki.toString, rC = ki.propertyIsEnumerable, nC = tC(Object.keys, Object), oC = Math.max;
  function iC(r38, e) {
    var t = Uh(r38) || dC(r38) ? ZT(r38.length, String) : [], n = t.length, o = !!n;
    for (var i in r38) (e || gc.call(r38, i)) && !(o && (i == "length" || aC(i, n))) && t.push(i);
    return t;
  }
  function sC(r38) {
    if (!cC(r38)) return nC(r38);
    var e = [];
    for (var t in Object(r38)) gc.call(r38, t) && t != "constructor" && e.push(t);
    return e;
  }
  function aC(r38, e) {
    return e = e ?? xh, !!e && (typeof r38 == "number" || YT.test(r38)) && r38 > -1 && r38 % 1 == 0 && r38 < e;
  }
  function cC(r38) {
    var e = r38 && r38.constructor, t = typeof e == "function" && e.prototype || ki;
    return r38 === t;
  }
  function lC(r38, e, t, n) {
    r38 = Ec(r38) ? r38 : TC(r38), t = t && !n ? EC(t) : 0;
    var o = r38.length;
    return t < 0 && (t = oC(o + t, 0)), fC(r38) ? t <= o && r38.indexOf(e, t) > -1 : !!o && JT(r38, e, t) > -1;
  }
  function dC(r38) {
    return uC(r38) && gc.call(r38, "callee") && (!rC.call(r38, "callee") || Pi.call(r38) == FT);
  }
  var Uh = Array.isArray;
  function Ec(r38) {
    return r38 != null && pC(r38.length) && !hC(r38);
  }
  function uC(r38) {
    return Ac(r38) && Ec(r38);
  }
  function hC(r38) {
    var e = mc(r38) ? Pi.call(r38) : "";
    return e == HT || e == BT;
  }
  function pC(r38) {
    return typeof r38 == "number" && r38 > -1 && r38 % 1 == 0 && r38 <= xh;
  }
  function mc(r38) {
    var e = typeof r38;
    return !!r38 && (e == "object" || e == "function");
  }
  function Ac(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function fC(r38) {
    return typeof r38 == "string" || !Uh(r38) && Ac(r38) && Pi.call(r38) == qT;
  }
  function mC(r38) {
    return typeof r38 == "symbol" || Ac(r38) && Pi.call(r38) == GT;
  }
  function gC(r38) {
    if (!r38) return r38 === 0 ? r38 : 0;
    if (r38 = AC(r38), r38 === Mh || r38 === -Mh) {
      var e = r38 < 0 ? -1 : 1;
      return e * LT;
    }
    return r38 === r38 ? r38 : 0;
  }
  function EC(r38) {
    var e = gC(r38), t = e % 1;
    return e === e ? t ? e - t : e : 0;
  }
  function AC(r38) {
    if (typeof r38 == "number") return r38;
    if (mC(r38)) return Dh;
    if (mc(r38)) {
      var e = typeof r38.valueOf == "function" ? r38.valueOf() : r38;
      r38 = mc(e) ? e + "" : e;
    }
    if (typeof r38 != "string") return r38 === 0 ? r38 : +r38;
    r38 = r38.replace(VT, "");
    var t = KT.test(r38);
    return t || zT.test(r38) ? jT(r38.slice(2), t ? 2 : 8) : $T.test(r38) ? Dh : +r38;
  }
  function yC(r38) {
    return Ec(r38) ? iC(r38) : sC(r38);
  }
  function TC(r38) {
    return r38 ? eC(r38, yC(r38)) : [];
  }
  Lh.exports = lC;
});
var Bh = E((Gb, Hh) => {
  var CC = "[object Boolean]", SC = Object.prototype, IC = SC.toString;
  function _C(r38) {
    return r38 === true || r38 === false || vC(r38) && IC.call(r38) == CC;
  }
  function vC(r38) {
    return !!r38 && typeof r38 == "object";
  }
  Hh.exports = _C;
});
var Kh = E((Vb, $h) => {
  var qh = 1 / 0, RC = 17976931348623157e292, Gh = NaN, wC = "[object Symbol]", kC = /^\s+|\s+$/g, PC = /^[-+]0x[0-9a-f]+$/i, OC = /^0b[01]+$/i, bC = /^0o[0-7]+$/i, NC = parseInt, MC = Object.prototype, DC = MC.toString;
  function xC(r38) {
    return typeof r38 == "number" && r38 == HC(r38);
  }
  function Vh(r38) {
    var e = typeof r38;
    return !!r38 && (e == "object" || e == "function");
  }
  function UC(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function LC(r38) {
    return typeof r38 == "symbol" || UC(r38) && DC.call(r38) == wC;
  }
  function FC(r38) {
    if (!r38) return r38 === 0 ? r38 : 0;
    if (r38 = BC(r38), r38 === qh || r38 === -qh) {
      var e = r38 < 0 ? -1 : 1;
      return e * RC;
    }
    return r38 === r38 ? r38 : 0;
  }
  function HC(r38) {
    var e = FC(r38), t = e % 1;
    return e === e ? t ? e - t : e : 0;
  }
  function BC(r38) {
    if (typeof r38 == "number") return r38;
    if (LC(r38)) return Gh;
    if (Vh(r38)) {
      var e = typeof r38.valueOf == "function" ? r38.valueOf() : r38;
      r38 = Vh(e) ? e + "" : e;
    }
    if (typeof r38 != "string") return r38 === 0 ? r38 : +r38;
    r38 = r38.replace(kC, "");
    var t = OC.test(r38);
    return t || bC.test(r38) ? NC(r38.slice(2), t ? 2 : 8) : PC.test(r38) ? Gh : +r38;
  }
  $h.exports = xC;
});
var Yh = E(($b, zh) => {
  var qC = "[object Number]", GC = Object.prototype, VC = GC.toString;
  function $C(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function KC(r38) {
    return typeof r38 == "number" || $C(r38) && VC.call(r38) == qC;
  }
  zh.exports = KC;
});
var Jh = E((Kb, Qh) => {
  var zC = "[object Object]";
  function YC(r38) {
    var e = false;
    if (r38 != null && typeof r38.toString != "function") try {
      e = !!(r38 + "");
    } catch {
    }
    return e;
  }
  function jC(r38, e) {
    return function(t) {
      return r38(e(t));
    };
  }
  var WC = Function.prototype, jh = Object.prototype, Wh = WC.toString, QC = jh.hasOwnProperty, JC = Wh.call(Object), XC = jh.toString, ZC = jC(Object.getPrototypeOf, Object);
  function eS(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function tS(r38) {
    if (!eS(r38) || XC.call(r38) != zC || YC(r38)) return false;
    var e = ZC(r38);
    if (e === null) return true;
    var t = QC.call(e, "constructor") && e.constructor;
    return typeof t == "function" && t instanceof t && Wh.call(t) == JC;
  }
  Qh.exports = tS;
});
var Zh = E((zb, Xh) => {
  var rS = "[object String]", nS = Object.prototype, oS = nS.toString, iS = Array.isArray;
  function sS(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function aS(r38) {
    return typeof r38 == "string" || !iS(r38) && sS(r38) && oS.call(r38) == rS;
  }
  Xh.exports = aS;
});
var op = E((Yb, np) => {
  var cS = "Expected a function", ep = 1 / 0, lS = 17976931348623157e292, tp = NaN, dS = "[object Symbol]", uS = /^\s+|\s+$/g, hS = /^[-+]0x[0-9a-f]+$/i, pS = /^0b[01]+$/i, fS = /^0o[0-7]+$/i, mS = parseInt, gS = Object.prototype, ES = gS.toString;
  function AS(r38, e) {
    var t;
    if (typeof e != "function") throw new TypeError(cS);
    return r38 = IS(r38), function() {
      return --r38 > 0 && (t = e.apply(this, arguments)), r38 <= 1 && (e = void 0), t;
    };
  }
  function yS(r38) {
    return AS(2, r38);
  }
  function rp(r38) {
    var e = typeof r38;
    return !!r38 && (e == "object" || e == "function");
  }
  function TS(r38) {
    return !!r38 && typeof r38 == "object";
  }
  function CS(r38) {
    return typeof r38 == "symbol" || TS(r38) && ES.call(r38) == dS;
  }
  function SS(r38) {
    if (!r38) return r38 === 0 ? r38 : 0;
    if (r38 = _S(r38), r38 === ep || r38 === -ep) {
      var e = r38 < 0 ? -1 : 1;
      return e * lS;
    }
    return r38 === r38 ? r38 : 0;
  }
  function IS(r38) {
    var e = SS(r38), t = e % 1;
    return e === e ? t ? e - t : e : 0;
  }
  function _S(r38) {
    if (typeof r38 == "number") return r38;
    if (CS(r38)) return tp;
    if (rp(r38)) {
      var e = typeof r38.valueOf == "function" ? r38.valueOf() : r38;
      r38 = rp(e) ? e + "" : e;
    }
    if (typeof r38 != "string") return r38 === 0 ? r38 : +r38;
    r38 = r38.replace(uS, "");
    var t = pS.test(r38);
    return t || fS.test(r38) ? mS(r38.slice(2), t ? 2 : 8) : hS.test(r38) ? tp : +r38;
  }
  np.exports = yS;
});
var pp = E((jb, hp) => {
  var ip = $a(), vS = hc(), RS = uc(), sp = di(), wS = Fh(), Oi = Bh(), ap = Kh(), yc = Yh(), lp = Jh(), Nt = Zh(), kS = op(), { KeyObject: PS, createSecretKey: OS, createPrivateKey: bS } = require("crypto"), dp = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  vS && dp.splice(3, 0, "PS256", "PS384", "PS512");
  var NS = { expiresIn: { isValid: function(r38) {
    return ap(r38) || Nt(r38) && r38;
  }, message: '"expiresIn" should be a number of seconds or string representing a timespan' }, notBefore: { isValid: function(r38) {
    return ap(r38) || Nt(r38) && r38;
  }, message: '"notBefore" should be a number of seconds or string representing a timespan' }, audience: { isValid: function(r38) {
    return Nt(r38) || Array.isArray(r38);
  }, message: '"audience" must be a string or array' }, algorithm: { isValid: wS.bind(null, dp), message: '"algorithm" must be a valid string enum value' }, header: { isValid: lp, message: '"header" must be an object' }, encoding: { isValid: Nt, message: '"encoding" must be a string' }, issuer: { isValid: Nt, message: '"issuer" must be a string' }, subject: { isValid: Nt, message: '"subject" must be a string' }, jwtid: { isValid: Nt, message: '"jwtid" must be a string' }, noTimestamp: { isValid: Oi, message: '"noTimestamp" must be a boolean' }, keyid: { isValid: Nt, message: '"keyid" must be a string' }, mutatePayload: { isValid: Oi, message: '"mutatePayload" must be a boolean' }, allowInsecureKeySizes: { isValid: Oi, message: '"allowInsecureKeySizes" must be a boolean' }, allowInvalidAsymmetricKeyTypes: { isValid: Oi, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' } }, MS = { iat: { isValid: yc, message: '"iat" should be a number of seconds' }, exp: { isValid: yc, message: '"exp" should be a number of seconds' }, nbf: { isValid: yc, message: '"nbf" should be a number of seconds' } };
  function up(r38, e, t, n) {
    if (!lp(t)) throw new Error('Expected "' + n + '" to be a plain object.');
    Object.keys(t).forEach(function(o) {
      let i = r38[o];
      if (!i) {
        if (!e) throw new Error('"' + o + '" is not allowed in "' + n + '"');
        return;
      }
      if (!i.isValid(t[o])) throw new Error(i.message);
    });
  }
  function DS(r38) {
    return up(NS, false, r38, "options");
  }
  function xS(r38) {
    return up(MS, true, r38, "payload");
  }
  var cp = { audience: "aud", issuer: "iss", subject: "sub", jwtid: "jti" }, US = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
  hp.exports = function(r38, e, t, n) {
    typeof t == "function" ? (n = t, t = {}) : t = t || {};
    let o = typeof r38 == "object" && !Buffer.isBuffer(r38), i = Object.assign({ alg: t.algorithm || "HS256", typ: o ? "JWT" : void 0, kid: t.keyid }, t.header);
    function s(l) {
      if (n) return n(l);
      throw l;
    }
    if (!e && t.algorithm !== "none") return s(new Error("secretOrPrivateKey must have a value"));
    if (e != null && !(e instanceof PS)) try {
      e = bS(e);
    } catch {
      try {
        e = OS(typeof e == "string" ? Buffer.from(e) : e);
      } catch {
        return s(new Error("secretOrPrivateKey is not valid key material"));
      }
    }
    if (i.alg.startsWith("HS") && e.type !== "secret") return s(new Error(`secretOrPrivateKey must be a symmetric key when using ${i.alg}`));
    if (/^(?:RS|PS|ES)/.test(i.alg)) {
      if (e.type !== "private") return s(new Error(`secretOrPrivateKey must be an asymmetric key when using ${i.alg}`));
      if (!t.allowInsecureKeySizes && !i.alg.startsWith("ES") && e.asymmetricKeyDetails !== void 0 && e.asymmetricKeyDetails.modulusLength < 2048) return s(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
    }
    if (typeof r38 > "u") return s(new Error("payload is required"));
    if (o) {
      try {
        xS(r38);
      } catch (l) {
        return s(l);
      }
      t.mutatePayload || (r38 = Object.assign({}, r38));
    } else {
      let l = US.filter(function(d) {
        return typeof t[d] < "u";
      });
      if (l.length > 0) return s(new Error("invalid " + l.join(",") + " option for " + typeof r38 + " payload"));
    }
    if (typeof r38.exp < "u" && typeof t.expiresIn < "u") return s(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof r38.nbf < "u" && typeof t.notBefore < "u") return s(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      DS(t);
    } catch (l) {
      return s(l);
    }
    if (!t.allowInvalidAsymmetricKeyTypes) try {
      RS(i.alg, e);
    } catch (l) {
      return s(l);
    }
    let a = r38.iat || Math.floor(Date.now() / 1e3);
    if (t.noTimestamp ? delete r38.iat : o && (r38.iat = a), typeof t.notBefore < "u") {
      try {
        r38.nbf = ip(t.notBefore, a);
      } catch (l) {
        return s(l);
      }
      if (typeof r38.nbf > "u") return s(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof t.expiresIn < "u" && typeof r38 == "object") {
      try {
        r38.exp = ip(t.expiresIn, a);
      } catch (l) {
        return s(l);
      }
      if (typeof r38.exp > "u") return s(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(cp).forEach(function(l) {
      let d = cp[l];
      if (typeof t[l] < "u") {
        if (typeof r38[d] < "u") return s(new Error('Bad "options.' + l + '" option. The payload already has an "' + d + '" property.'));
        r38[d] = t[l];
      }
    });
    let c = t.encoding || "utf8";
    if (typeof n == "function") n = n && kS(n), sp.createSign({ header: i, privateKey: e, payload: r38, encoding: c }).once("error", n).once("done", function(l) {
      if (!t.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) return n(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
      n(null, l);
    });
    else {
      let l = sp.sign({ header: i, payload: r38, secret: e, encoding: c });
      if (!t.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`);
      return l;
    }
  };
});
var mp = E((Wb, fp) => {
  fp.exports = { decode: qa(), verify: Nh(), sign: pp(), JsonWebTokenError: qn(), NotBeforeError: Ga(), TokenExpiredError: Va() };
});
var vc = E((Bi) => {
  "use strict";
  Bi.setPassword = () => Promise.resolve();
  Bi.getPassword = () => Promise.resolve();
  Bi.deletePassword = () => Promise.resolve();
});
var yI = {};
pt(yI, { activate: () => EI, deactivate: () => AI });
module.exports = rm(yI);
var ve = require("vscode");
var H = J(require("vscode"));
var Re = (function() {
  function r38(e) {
    if (this.validateAuthority = true, !e || typeof e != "object") throw new Error("'parameters' is a required parameter and must be of type 'object'.");
    var t = ["name", "portalUrl", "managementEndpointUrl", "resourceManagerEndpointUrl", "activeDirectoryEndpointUrl", "activeDirectoryResourceId"];
    t.forEach(function(n) {
      if (!e[n] || typeof e[n].valueOf() != "string") throw new Error('Please provide "' + n + '" for the environment and it must be of type "string".');
    }), this.name = e.name, this.portalUrl = e.portalUrl, this.managementEndpointUrl = e.managementEndpointUrl, this.resourceManagerEndpointUrl = e.resourceManagerEndpointUrl, this.activeDirectoryEndpointUrl = e.activeDirectoryEndpointUrl, this.activeDirectoryResourceId = e.activeDirectoryResourceId, this.activeDirectoryGraphApiVersion && (this.activeDirectoryGraphApiVersion = e.activeDirectoryGraphApiVersion), this.activeDirectoryGraphResourceId && (this.activeDirectoryGraphResourceId = e.activeDirectoryGraphResourceId), this.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix && (this.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix = e.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix), this.azureDataLakeStoreFileSystemEndpointSuffix && (this.azureDataLakeStoreFileSystemEndpointSuffix = e.azureDataLakeStoreFileSystemEndpointSuffix), this.batchResourceId && (this.batchResourceId = e.batchResourceId), this.galleryEndpointUrl && (this.galleryEndpointUrl = e.galleryEndpointUrl), this.keyVaultDnsSuffix && (this.keyVaultDnsSuffix = e.keyVaultDnsSuffix), this.publishingProfileUrl && (this.publishingProfileUrl = e.publishingProfileUrl), this.sqlManagementEndpointUrl && (this.sqlManagementEndpointUrl = e.sqlManagementEndpointUrl), this.sqlServerHostnameSuffix && (this.sqlServerHostnameSuffix = e.sqlServerHostnameSuffix), this.storageEndpointSuffix && (this.storageEndpointSuffix = e.storageEndpointSuffix);
  }
  return r38.add = function(e) {
    var t = {}, n = new r38(e);
    t[e.name] = n, Object.assign(r38, t);
  }, r38.get = function(e) {
    if (!e) throw new TypeError("name cannot be null or undefined and must be of type string.");
    return r38[e];
  }, r38.AzureCloud = { name: "AzureCloud", portalUrl: "https://portal.azure.com", publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkId=254432", managementEndpointUrl: "https://management.core.windows.net", resourceManagerEndpointUrl: "https://management.azure.com/", sqlManagementEndpointUrl: "https://management.core.windows.net:8443/", sqlServerHostnameSuffix: ".database.windows.net", galleryEndpointUrl: "https://gallery.azure.com/", activeDirectoryEndpointUrl: "https://login.microsoftonline.com/", activeDirectoryResourceId: "https://management.core.windows.net/", activeDirectoryGraphResourceId: "https://graph.windows.net/", batchResourceId: "https://batch.core.windows.net/", activeDirectoryGraphApiVersion: "2013-04-05", storageEndpointSuffix: "core.windows.net", keyVaultDnsSuffix: ".vault.azure.net", azureDataLakeStoreFileSystemEndpointSuffix: "azuredatalakestore.net", azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "azuredatalakeanalytics.net", validateAuthority: true }, r38.ChinaCloud = { name: "AzureChinaCloud", portalUrl: "https://portal.azure.cn", publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkID=301774", managementEndpointUrl: "https://management.core.chinacloudapi.cn", resourceManagerEndpointUrl: "https://management.chinacloudapi.cn", sqlManagementEndpointUrl: "https://management.core.chinacloudapi.cn:8443/", sqlServerHostnameSuffix: ".database.chinacloudapi.cn", galleryEndpointUrl: "https://gallery.chinacloudapi.cn/", activeDirectoryEndpointUrl: "https://login.chinacloudapi.cn/", activeDirectoryResourceId: "https://management.core.chinacloudapi.cn/", activeDirectoryGraphResourceId: "https://graph.chinacloudapi.cn/", activeDirectoryGraphApiVersion: "2013-04-05", batchResourceId: "https://batch.chinacloudapi.cn/", storageEndpointSuffix: "core.chinacloudapi.cn", keyVaultDnsSuffix: ".vault.azure.cn", azureDataLakeStoreFileSystemEndpointSuffix: "N/A", azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A", validateAuthority: true }, r38.USGovernment = { name: "AzureUSGovernment", portalUrl: "https://portal.azure.us", publishingProfileUrl: "https://manage.windowsazure.us/publishsettings/index", managementEndpointUrl: "https://management.core.usgovcloudapi.net", resourceManagerEndpointUrl: "https://management.usgovcloudapi.net", sqlManagementEndpointUrl: "https://management.core.usgovcloudapi.net:8443/", sqlServerHostnameSuffix: ".database.usgovcloudapi.net", galleryEndpointUrl: "https://gallery.usgovcloudapi.net/", activeDirectoryEndpointUrl: "https://login.microsoftonline.us/", activeDirectoryResourceId: "https://management.core.usgovcloudapi.net/", activeDirectoryGraphResourceId: "https://graph.windows.net/", batchResourceId: "https://batch.core.usgovcloudapi.net/", activeDirectoryGraphApiVersion: "2013-04-05", storageEndpointSuffix: "core.usgovcloudapi.net", keyVaultDnsSuffix: ".vault.usgovcloudapi.net", azureDataLakeStoreFileSystemEndpointSuffix: "N/A", azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A", validateAuthority: true }, r38.GermanCloud = { name: "AzureGermanCloud", portalUrl: "https://portal.microsoftazure.de/", publishingProfileUrl: "https://manage.microsoftazure.de/publishsettings/index", managementEndpointUrl: "https://management.core.cloudapi.de", resourceManagerEndpointUrl: "https://management.microsoftazure.de", sqlManagementEndpointUrl: "https://management.core.cloudapi.de:8443/", sqlServerHostnameSuffix: ".database.cloudapi.de", galleryEndpointUrl: "https://gallery.cloudapi.de/", activeDirectoryEndpointUrl: "https://login.microsoftonline.de/", activeDirectoryResourceId: "https://management.core.cloudapi.de/", activeDirectoryGraphResourceId: "https://graph.cloudapi.de/", batchResourceId: "https://batch.microsoftazure.de/", activeDirectoryGraphApiVersion: "2013-04-05", storageEndpointSuffix: "core.cloudapi.de", keyVaultDnsSuffix: ".vault.microsoftazure.de", azureDataLakeStoreFileSystemEndpointSuffix: "N/A", azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A", validateAuthority: true }, r38;
})();
var R = J(require("vscode")), Wc = J(require("path"));
var oo = require("vscode"), nm = ["localhost", "127.0.0.1", "0:0:0:0:0:0:0:1", "::1"];
function om(r38) {
  if (!/^https?$/i.test(r38.scheme)) return false;
  let e = r38.authority.split(":")[0];
  return nm.indexOf(e) >= 0;
}
function Bc(r38) {
  return oo.env.uiKind === oo.UIKind.Desktop || om(r38) ? true : r38.scheme !== "https" ? false : /(?:^|\.)vscode\.dev$/.test(r38.authority) || /(?:^|\.)github\.dev$/.test(r38.authority) || /(?:^|\.)github\.localhost$/.test(r38.authority);
}
var ur = require("vscode"), io = class {
  constructor() {
    this.promiseMap = /* @__PURE__ */ new Map();
  }
  queue(e, t) {
    let o = (this.promiseMap.get(e) ?? Promise.resolve()).catch(() => {
    }).then(t).finally(() => {
      this.promiseMap.get(e) === o && this.promiseMap.delete(e);
    });
    return this.promiseMap.set(e, o), o;
  }
}, so = class extends ur.Disposable {
  constructor() {
    super(() => this.cancel()), this._token = -1;
  }
  cancel() {
    this._token !== -1 && (clearInterval(this._token), this._token = -1);
  }
  cancelAndSet(e, t) {
    this.cancel(), this._token = setInterval(() => {
      e();
    }, t);
  }
};
function im(r38, e) {
  return new Promise((t, n) => {
    let o = e.onCancellationRequested(() => {
      o.dispose(), n(new ur.CancellationError());
    });
    r38.then(t, n).finally(() => o.dispose());
  });
}
function sm(r38, e) {
  return new Promise((t, n) => {
    let o = setTimeout(() => {
      n(new ur.CancellationError());
    }, e);
    r38.then(t, n).finally(() => clearTimeout(o));
  });
}
function Xr(r38, e, t) {
  return im(sm(r38, t), e);
}
function am(r38) {
  return (e, t = null, n) => {
    let o = false, i;
    return i = r38((s) => {
      if (!o) return i ? i.dispose() : o = true, e.call(t, s);
    }, null, n), o && i.dispose(), i;
  };
}
function qc(r38) {
  return new Promise((e) => am(r38)(e));
}
var ao = class {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isResolved() {
    return this.outcome?.outcome === 0;
  }
  get isSettled() {
    return !!this.outcome;
  }
  get value() {
    return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
  }
  constructor() {
    this.p = new Promise((e, t) => {
      this.completeCallback = e, this.errorCallback = t;
    });
  }
  complete(e) {
    return new Promise((t) => {
      this.completeCallback(e), this.outcome = { outcome: 0, value: e }, t();
    });
  }
  error(e) {
    return new Promise((t) => {
      this.errorCallback(e), this.outcome = { outcome: 1, value: e }, t();
    });
  }
  cancel() {
    return this.error(new ur.CancellationError());
  }
};
function Gc(r38) {
  return Buffer.from(r38, "binary").toString("base64");
}
function ls(r38) {
  return Buffer.from(r38, "base64").toString("utf8");
}
function Vc() {
  return crypto.randomUUID();
}
function cm(r38) {
  return ("0" + r38.toString(16)).slice(-2);
}
function co() {
  let r38 = new Uint32Array(28);
  return crypto.getRandomValues(r38), Array.from(r38, cm).join("");
}
function lm(r38) {
  let t = new TextEncoder().encode(r38);
  return crypto.subtle.digest("SHA-256", t);
}
function dm(r38) {
  let e = "", t = new Uint8Array(r38), n = t.byteLength;
  for (let o = 0; o < n; o++) e += String.fromCharCode(t[o]);
  return Gc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ds(r38) {
  let e = await lm(r38);
  return dm(e);
}
var Kc = J(require("http")), us = require("url"), zc = J(require("fs")), hs = J(require("path")), Yc = require("crypto");
function $c(r38, e) {
  zc.readFile(e, (t, n) => {
    t ? (console.error(t), r38.writeHead(404), r38.end()) : (r38.writeHead(200, { "content-length": n.length }), r38.end(n));
  });
}
var lo = class {
  constructor(e, t) {
    this.nonce = (0, Yc.randomBytes)(16).toString("base64");
    if (!e) throw new Error("serveRoot must be defined");
    if (!t) throw new Error("startingRedirect must be defined");
    this._startingRedirect = new us.URL(t);
    let n;
    this._resultPromise = new Promise((o, i) => n = { resolve: o, reject: i }), this._server = Kc.createServer((o, i) => {
      let s = new us.URL(o.url, `http://${o.headers.host}`);
      switch (s.pathname) {
        case "/signin": {
          (s.searchParams.get("nonce") ?? "").replace(/ /g, "+") !== this.nonce && (i.writeHead(302, { location: `/?error=${encodeURIComponent("Nonce does not match.")}` }), i.end()), i.writeHead(302, { location: this._startingRedirect.toString() }), i.end();
          break;
        }
        case "/callback": {
          let a = s.searchParams.get("code") ?? void 0, c = s.searchParams.get("state") ?? void 0, l = (s.searchParams.get("nonce") ?? "").replace(/ /g, "+"), d = s.searchParams.get("error") ?? void 0;
          if (d) {
            i.writeHead(302, { location: `/?error=${s.searchParams.get("error_description")}` }), i.end(), n.reject(new Error(d));
            break;
          }
          if (!a || !c || !l) {
            i.writeHead(400), i.end();
            break;
          }
          if (this.state !== c) {
            i.writeHead(302, { location: `/?error=${encodeURIComponent("State does not match.")}` }), i.end(), n.reject(new Error("State does not match."));
            break;
          }
          if (this.nonce !== l) {
            i.writeHead(302, { location: `/?error=${encodeURIComponent("Nonce does not match.")}` }), i.end(), n.reject(new Error("Nonce does not match."));
            break;
          }
          n.resolve({ code: a, state: c }), i.writeHead(302, { location: "/" }), i.end();
          break;
        }
        case "/":
          $c(i, hs.join(e, "index.html"));
          break;
        default:
          $c(i, hs.join(e, s.pathname.substring(1)));
          break;
      }
    });
  }
  set state(e) {
    e ? this._startingRedirect.searchParams.set("state", e) : this._startingRedirect.searchParams.delete("state");
  }
  get state() {
    return this._startingRedirect.searchParams.get("state") ?? void 0;
  }
  start() {
    return new Promise((e, t) => {
      if (this._server.listening) throw new Error("Server is already started");
      let n = setTimeout(() => {
        t(new Error("Timeout waiting for port"));
      }, 5e3);
      this._server.on("listening", () => {
        let o = this._server.address();
        if (typeof o == "string") this.port = parseInt(o);
        else if (o instanceof Object) this.port = o.port;
        else throw new Error("Unable to determine port");
        clearTimeout(n), this.state = `http://127.0.0.1:${this.port}/callback?nonce=${encodeURIComponent(this.nonce)}`, e(this.port);
      }), this._server.on("error", (o) => {
        t(new Error(`Error listening to server: ${o}`));
      }), this._server.on("close", () => {
        t(new Error("Closed"));
      }), this._server.listen(0, "127.0.0.1");
    });
  }
  stop() {
    return new Promise((e, t) => {
      if (!this._server.listening) throw new Error("Server is not started");
      this._server.close((n) => {
        n ? t(n) : e();
      });
    });
  }
  waitForOAuthResponse() {
    return this._resultPromise;
  }
};
var ps;
try {
  ps = require("electron").net.fetch;
} catch {
  ps = fetch;
}
var jc = ps;
var fs = "https://vscode.dev/redirect", ms = Re.AzureCloud.activeDirectoryEndpointUrl, gs = "aebc6443-996d-45c2-90f0-388ff96faa56", um = "organizations", hm = "9188040d-6c67-4c5b-b112-36a304b66dad", pm = "f8cdef31-a31e-4b4a-93e4-5f571e91255a";
var Zr = "Network failure", en = class r {
  constructor(e, t, n, o, i, s) {
    this._logger = e;
    this._uriHandler = n;
    this._tokenStorage = o;
    this._telemetryReporter = i;
    this._env = s;
    this._tokens = [];
    this._refreshTimeouts = /* @__PURE__ */ new Map();
    this._sessionChangeEmitter = new R.EventEmitter();
    this._pendingNonces = /* @__PURE__ */ new Map();
    this._codeExchangePromises = /* @__PURE__ */ new Map();
    this._codeVerfifiers = /* @__PURE__ */ new Map();
    this._pendingTokensToStore = /* @__PURE__ */ new Map();
    this._sequencer = new io();
    t.subscriptions.push(this._tokenStorage.onDidChangeInOtherWindow((c) => this.checkForUpdates(c))), t.subscriptions.push(R.window.onDidChangeWindowState(async (c) => c.focused && await this.storePendingTokens()));
    let a = new so();
    a.cancelAndSet(() => !R.window.state.focused && this.storePendingTokens(), 18e6 + Math.floor(Math.random() * 3e4)), t.subscriptions.push(a);
  }
  static {
    this.REFRESH_TIMEOUT_MODIFIER = 1e3 * 2 / 3;
  }
  static {
    this.POLLING_CONSTANT = 1e3 * 60 * 30;
  }
  async initialize() {
    this._logger.trace("Reading sessions from secret storage...");
    let e = await this._tokenStorage.getAll((o) => this.sessionMatchesEndpoint(o));
    this._logger.trace(`Got ${e.length} stored sessions`);
    let t = e.map(async (o) => {
      this._logger.trace(`[${o.scope}] '${o.id}' Read stored session`);
      let i = o.scope.split(" "), s = { scopes: i, scopeStr: o.scope, scopesToSend: i.filter((a) => !a.startsWith("VSCODE_")).join(" "), clientId: this.getClientId(i), tenant: this.getTenantId(i) };
      try {
        await this.refreshToken(o.refreshToken, s, o.id);
      } catch (a) {
        a.message === Zr ? this._tokens.push({ accessToken: void 0, refreshToken: o.refreshToken, account: { ...o.account, type: "unknown" }, scope: o.scope, sessionId: o.id }) : (R.window.showErrorMessage(R.l10n.t("You have been signed out because reading stored authentication information failed.")), this._logger.error(a), await this.removeSessionByIToken({ accessToken: void 0, refreshToken: o.refreshToken, account: { ...o.account, type: "unknown" }, scope: o.scope, sessionId: o.id }));
      }
    }), n = await Promise.allSettled(t);
    for (let o of n) if (o.status === "rejected") {
      this._logger.error(`Failed to initialize stored data: ${o.reason}`), this.clearSessions();
      break;
    }
    for (let o of this._tokens) this._telemetryReporter.sendTelemetryEvent("account", { scopes: JSON.stringify(o.scope.replace(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i, "{guid}").split(" ")), accountType: o.account.type });
  }
  get onDidChangeSessions() {
    return this._sessionChangeEmitter.event;
  }
  getSessions(e, t) {
    if (!e) {
      this._logger.info("Getting sessions for all scopes...");
      let a = this._tokens.filter((c) => !t?.label || c.account.label === t.label).map((c) => this.convertToSessionSync(c));
      return this._logger.info(`Got ${a.length} sessions for all scopes${t ? ` for account '${t.label}'` : ""}...`), Promise.resolve(a);
    }
    let n = [...e];
    n.includes("openid") || n.push("openid"), n.includes("email") || n.push("email"), n.includes("profile") || n.push("profile"), n.includes("offline_access") || n.push("offline_access"), n = n.sort();
    let o = n.join(" "), s = { clientId: this.getClientId(e), originalScopes: e, scopes: n, scopeStr: o, scopesToSend: n.filter((a) => !a.startsWith("VSCODE_")).join(" "), tenant: this.getTenantId(e) };
    return this._logger.trace(`[${s.scopeStr}] Queued getting sessions` + t ? ` for ${t?.label}` : ""), this._sequencer.queue(o, () => this.doGetSessions(s, t));
  }
  async doGetSessions(e, t) {
    this._logger.info(`[${e.scopeStr}] Getting sessions` + t ? ` for ${t?.label}` : "");
    let n = this._tokens.filter((i) => i.scope === e.scopeStr).filter((i) => !t?.label || i.account.label === t.label);
    if (!n.length) {
      let i;
      for (let s of this._tokens) if (s.refreshToken && !(t?.label && s.account.label !== t.label)) {
        if (e.clientId === gs && !s.scope.includes("VSCODE_CLIENT_ID")) {
          i = s;
          break;
        }
        if (e.clientId !== gs && s.scope.includes(`VSCODE_CLIENT_ID:${e.clientId}`)) {
          i = s;
          break;
        }
      }
      if (i) {
        this._logger.trace(`[${e.scopeStr}] '${i.sessionId}' Found a matching token with a different scopes '${i.scope}'. Attempting to get a new session using the existing session.`);
        try {
          let s = await this.doRefreshToken(i.refreshToken, e);
          this._sessionChangeEmitter.fire({ added: [this.convertToSessionSync(s)], removed: [], changed: [] }), n.push(s);
        } catch (s) {
          this._logger.error(`[${e.scopeStr}] Attempted to get a new session using the existing session with scopes '${i.scope}' but it failed due to: ${s.message ?? s}`);
        }
      }
    }
    return this._logger.info(`[${e.scopeStr}] Got ${n.length} sessions`), (await Promise.allSettled(n.map((i) => this.convertToSession(i, e)))).filter((i) => i.status === "fulfilled").map((i) => i.value);
  }
  createSession(e, t) {
    let n = [...e];
    n.includes("openid") || n.push("openid"), n.includes("email") || n.push("email"), n.includes("profile") || n.push("profile"), n.includes("offline_access") || n.push("offline_access"), n = n.sort();
    let o = { originalScopes: e, scopes: n, scopeStr: n.join(" "), scopesToSend: n.filter((i) => !i.startsWith("VSCODE_")).join(" "), clientId: this.getClientId(e), tenant: this.getTenantId(e) };
    return this._logger.trace(`[${o.scopeStr}] Queued creating session`), this._sequencer.queue(o.scopeStr, () => this.doCreateSession(o, t));
  }
  async doCreateSession(e, t) {
    this._logger.info(`[${e.scopeStr}] Creating session` + t ? ` for ${t?.label}` : "");
    let n = R.env.remoteName !== void 0, o = R.env.remoteName === void 0 && R.env.uiKind === R.UIKind.Web;
    if (o && this._env.activeDirectoryEndpointUrl !== ms) throw new Error("Sign in to non-public clouds is not supported on the web.");
    return await R.window.withProgress({ location: R.ProgressLocation.Notification, title: R.l10n.t("Signing in to your account..."), cancellable: true }, async (i, s) => {
      if (n || o) return await this.createSessionWithoutLocalServer(e, t?.label, s);
      try {
        return await this.createSessionWithLocalServer(e, t?.label, s);
      } catch (a) {
        if (this._logger.error(`[${e.scopeStr}] Error creating session: ${a}`), a.message === "Error listening to server" || a.message === "Closed" || a.message === "Timeout waiting for port") return this.createSessionWithoutLocalServer(e, t?.label, s);
        throw a;
      }
    });
  }
  async createSessionWithLocalServer(e, t, n) {
    this._logger.trace(`[${e.scopeStr}] Starting login flow with local server`);
    let o = co(), i = await ds(o), s = new URLSearchParams({ response_type: "code", response_mode: "query", client_id: e.clientId, redirect_uri: fs, scope: e.scopesToSend, code_challenge_method: "S256", code_challenge: i });
    t ? s.set("login_hint", t) : s.set("prompt", "select_account");
    let a = new URL(`${e.tenant}/oauth2/v2.0/authorize?${s.toString()}`, this._env.activeDirectoryEndpointUrl).toString(), c = new lo(Wc.join(__dirname, "../media"), a);
    await c.start();
    let l;
    try {
      R.env.openExternal(R.Uri.parse(`http://127.0.0.1:${c.port}/signin?nonce=${encodeURIComponent(c.nonce)}`));
      let { code: u } = await Xr(c.waitForOAuthResponse(), n, 1e3 * 60 * 5);
      l = u;
    } finally {
      setTimeout(() => {
        c.stop();
      }, 5e3);
    }
    let d = await this.exchangeCodeForSession(l, o, e);
    return this._logger.trace(`[${e.scopeStr}] '${d.id}' Sending change event for added session`), this._sessionChangeEmitter.fire({ added: [d], removed: [], changed: [] }), this._logger.info(`[${e.scopeStr}] '${d.id}' session successfully created!`), d;
  }
  async createSessionWithoutLocalServer(e, t, n) {
    this._logger.trace(`[${e.scopeStr}] Starting login flow without local server`);
    let o = await R.env.asExternalUri(R.Uri.parse(`${R.env.uriScheme}://vscode.microsoft-authentication`)), i = co(), s = new URLSearchParams(o.query);
    s.set("nonce", encodeURIComponent(i)), o = o.with({ query: s.toString() });
    let a = encodeURIComponent(o.toString(true)), c = co(), l = await ds(c), d = new URL(`${e.tenant}/oauth2/v2.0/authorize`, this._env.activeDirectoryEndpointUrl), u = new URLSearchParams({ response_type: "code", client_id: encodeURIComponent(e.clientId), response_mode: "query", redirect_uri: fs, state: a, scope: e.scopesToSend, code_challenge_method: "S256", code_challenge: l });
    t ? u.append("login_hint", t) : u.append("prompt", "select_account"), d.search = u.toString();
    let g = R.Uri.parse(d.toString());
    R.env.openExternal(g);
    let f = this._pendingNonces.get(e.scopeStr) || [];
    this._pendingNonces.set(e.scopeStr, [...f, i]);
    let A = this._codeExchangePromises.get(e.scopeStr), C;
    return A || (Bc(o) ? A = this.handleCodeResponse(e) : (C = R.window.createInputBox(), A = this.handleCodeInputBox(C, c, e)), this._codeExchangePromises.set(e.scopeStr, A)), this._codeVerfifiers.set(i, c), await Xr(A, n, 1e3 * 60 * 5).finally(() => {
      this._pendingNonces.delete(e.scopeStr), this._codeExchangePromises.delete(e.scopeStr), this._codeVerfifiers.delete(i), C?.dispose();
    });
  }
  async removeSessionById(e, t = true) {
    let n = this._tokens.findIndex((i) => i.sessionId === e);
    if (n === -1) return this._logger.warn(`'${e}' Session not found to remove`), Promise.resolve(void 0);
    let o = this._tokens.splice(n, 1)[0];
    return this._logger.trace(`[${o.scope}] '${e}' Queued removing session`), this._sequencer.queue(o.scope, () => this.removeSessionByIToken(o, t));
  }
  async clearSessions() {
    this._logger.trace("Logging out of all sessions"), this._tokens = [], await this._tokenStorage.deleteAll((e) => this.sessionMatchesEndpoint(e)), this._refreshTimeouts.forEach((e) => {
      clearTimeout(e);
    }), this._refreshTimeouts.clear(), this._logger.trace("All sessions logged out");
  }
  async removeSessionByIToken(e, t = true) {
    this._logger.info(`[${e.scope}] '${e.sessionId}' Logging out of session`), this.removeSessionTimeout(e.sessionId), t && await this._tokenStorage.delete(e.sessionId);
    let n = this._tokens.findIndex((i) => i.sessionId === e.sessionId);
    n !== -1 && this._tokens.splice(n, 1);
    let o = this.convertToSessionSync(e);
    return this._logger.trace(`[${e.scope}] '${e.sessionId}' Sending change event for session that was removed`), this._sessionChangeEmitter.fire({ added: [], removed: [o], changed: [] }), this._logger.info(`[${e.scope}] '${e.sessionId}' Logged out of session successfully!`), o;
  }
  setSessionTimeout(e, t, n, o) {
    this._logger.trace(`[${n.scopeStr}] '${e}' Setting refresh timeout for ${o} milliseconds`), this.removeSessionTimeout(e), this._refreshTimeouts.set(e, setTimeout(async () => {
      try {
        let i = await this.refreshToken(t, n, e);
        this._logger.trace(`[${n.scopeStr}] '${e}' Sending change event for session that was refreshed`), this._sessionChangeEmitter.fire({ added: [], removed: [], changed: [this.convertToSessionSync(i)] }), this._logger.trace(`[${n.scopeStr}] '${e}' refresh timeout complete`);
      } catch (i) {
        i.message !== Zr && (R.window.showErrorMessage(R.l10n.t("You have been signed out because reading stored authentication information failed.")), await this.removeSessionById(e));
      }
    }, o));
  }
  removeSessionTimeout(e) {
    let t = this._refreshTimeouts.get(e);
    t && (clearTimeout(t), this._refreshTimeouts.delete(e));
  }
  convertToTokenSync(e, t, n) {
    let o;
    this._logger.trace(`[${t.scopeStr}] '${n ?? "new"}' Attempting to parse token response.`);
    try {
      e.id_token ? o = JSON.parse(ls(e.id_token.split(".")[1])) : (this._logger.warn(`[${t.scopeStr}] '${n ?? "new"}' Attempting to parse access_token instead since no id_token was included in the response.`), o = JSON.parse(ls(e.access_token.split(".")[1])));
    } catch (a) {
      throw a;
    }
    let i = `${o.tid}/${o.oid ?? o.altsecid ?? "" + o.ipd}`, s = n || `${i}/${Vc()}`;
    return this._logger.trace(`[${t.scopeStr}] '${s}' Token response parsed successfully.`), { expiresIn: e.expires_in, expiresAt: e.expires_in ? Date.now() + e.expires_in * 1e3 : void 0, accessToken: e.access_token, idToken: e.id_token, refreshToken: e.refresh_token, scope: t.scopeStr, sessionId: s, account: { label: o.preferred_username ?? o.email ?? o.unique_name ?? "user@example.com", id: i, type: o.tid === hm || o.tid === pm ? "msa" : "aad" } };
  }
  convertToSessionSync(e) {
    return { id: e.sessionId, accessToken: e.accessToken, idToken: e.idToken, account: e.account, scopes: e.scope.split(" ") };
  }
  async convertToSession(e, t) {
    if (e.accessToken && (!e.expiresAt || e.expiresAt > Date.now())) return this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Token available from cache${e.expiresAt ? `, expires in ${e.expiresAt - Date.now()} milliseconds` : ""}.`), { id: e.sessionId, accessToken: e.accessToken, idToken: e.idToken, account: e.account, scopes: t.originalScopes ?? t.scopes };
    try {
      this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Token expired or unavailable, trying refresh`);
      let n = await this.refreshToken(e.refreshToken, t, e.sessionId);
      if (n.accessToken) return { id: e.sessionId, accessToken: n.accessToken, idToken: n.idToken, account: e.account, scopes: t.originalScopes ?? t.scopes };
      throw new Error();
    } catch {
      throw new Error("Unavailable due to network problems");
    }
  }
  refreshToken(e, t, n) {
    return this._logger.trace(`[${t.scopeStr}] '${n ?? "new"}' Queued refreshing token`), this._sequencer.queue(t.scopeStr, () => this.doRefreshToken(e, t, n));
  }
  async doRefreshToken(e, t, n) {
    this._logger.trace(`[${t.scopeStr}] '${n ?? "new"}' Refreshing token`);
    let o = new URLSearchParams({ refresh_token: e, client_id: t.clientId, grant_type: "refresh_token", scope: t.scopesToSend }).toString();
    try {
      let i = await this.fetchTokenResponse(o, t), s = this.convertToTokenSync(i, t, n);
      return s.expiresIn && this.setSessionTimeout(s.sessionId, s.refreshToken, t, s.expiresIn * r.REFRESH_TIMEOUT_MODIFIER), this.setToken(s, t), this._logger.trace(`[${t.scopeStr}] '${s.sessionId}' Token refresh success`), s;
    } catch (i) {
      throw i.message === Zr ? (n && this.setSessionTimeout(n, e, t, r.POLLING_CONSTANT), i) : (this._logger.error(`[${t.scopeStr}] '${n ?? "new"}' Refreshing token failed: ${i.message}`), i);
    }
  }
  getClientId(e) {
    return e.reduce((t, n) => n.startsWith("VSCODE_CLIENT_ID:") ? n.split("VSCODE_CLIENT_ID:")[1] : t, void 0) ?? gs;
  }
  getTenantId(e) {
    return e.reduce((t, n) => n.startsWith("VSCODE_TENANT:") ? n.split("VSCODE_TENANT:")[1] : t, void 0) ?? um;
  }
  async handleCodeResponse(e) {
    let t;
    return new Promise((n, o) => {
      t = this._uriHandler.event(async (i) => {
        try {
          let s = new URLSearchParams(i.query), a = s.get("code"), c = s.get("nonce");
          if (Array.isArray(a) && (a = a[0]), !a) throw new Error("No code included in query");
          if (Array.isArray(c) && (c = c[0]), !c) throw new Error("No nonce included in query");
          let l = this._pendingNonces.get(e.scopeStr) || [];
          if (!l.includes(c) && !l.includes(decodeURIComponent(c))) throw new Error("Nonce does not match.");
          let d = this._codeVerfifiers.get(c) ?? this._codeVerfifiers.get(decodeURIComponent(c));
          if (!d) throw new Error("No available code verifier");
          let u = await this.exchangeCodeForSession(a, d, e);
          this._sessionChangeEmitter.fire({ added: [u], removed: [], changed: [] }), this._logger.info(`[${e.scopeStr}] '${u.id}' session successfully created!`), n(u);
        } catch (s) {
          o(s);
        }
      });
    }).then((n) => (t.dispose(), n)).catch((n) => {
      throw t.dispose(), n;
    });
  }
  async handleCodeInputBox(e, t, n) {
    return this._logger.trace(`[${n.scopeStr}] Starting login flow with input box`), e.ignoreFocusOut = true, e.title = R.l10n.t("Microsoft Authentication"), e.prompt = R.l10n.t("Provide the authorization code to complete the sign in flow."), e.placeholder = R.l10n.t("Paste authorization code here..."), new Promise((o, i) => {
      e.show(), e.onDidAccept(async () => {
        let s = e.value;
        if (s) {
          e.dispose();
          let a = await this.exchangeCodeForSession(s, t, n);
          this._logger.trace(`[${n.scopeStr}] '${a.id}' sending session changed event because session was added.`), this._sessionChangeEmitter.fire({ added: [a], removed: [], changed: [] }), this._logger.trace(`[${n.scopeStr}] '${a.id}' session successfully created!`), o(a);
        }
      }), e.onDidHide(() => {
        e.value || (e.dispose(), i("Cancelled"));
      });
    });
  }
  async exchangeCodeForSession(e, t, n) {
    this._logger.trace(`[${n.scopeStr}] Exchanging login code for session`);
    let o;
    try {
      let i = new URLSearchParams({ grant_type: "authorization_code", code: e, client_id: n.clientId, scope: n.scopesToSend, code_verifier: t, redirect_uri: fs }).toString(), s = await this.fetchTokenResponse(i, n);
      this._logger.trace(`[${n.scopeStr}] Exchanging code for token succeeded!`), o = this.convertToTokenSync(s, n);
    } catch (i) {
      throw this._logger.error(`[${n.scopeStr}] Error exchanging code for token: ${i}`), i;
    }
    return o.expiresIn && this.setSessionTimeout(o.sessionId, o.refreshToken, n, o.expiresIn * r.REFRESH_TIMEOUT_MODIFIER), this.setToken(o, n), this._logger.trace(`[${n.scopeStr}] '${o.sessionId}' Exchanging login code for session succeeded!`), await this.convertToSession(o, n);
  }
  async fetchTokenResponse(e, t) {
    let n;
    this._env.activeDirectoryEndpointUrl !== ms ? n = this._env.activeDirectoryEndpointUrl : n = (await R.commands.executeCommand("workbench.getCodeExchangeProxyEndpoints"))?.microsoft || this._env.activeDirectoryEndpointUrl;
    let o = new URL(`${t.tenant}/oauth2/v2.0/token`, n), i = 0;
    for (; i <= 3; ) {
      i++;
      let s, a;
      try {
        s = await jc(o.toString(), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: e });
      } catch (c) {
        a = c.message ?? c;
      }
      if (!s || s.status > 499) {
        if (i > 3) {
          this._logger.error(`[${t.scopeStr}] Fetching token failed: ${s ? await s.text() : a}`);
          break;
        }
        await new Promise((c) => setTimeout(c, 5 * i * i * 1e3));
        continue;
      } else if (!s.ok) throw new Error(await s.text());
      return await s.json();
    }
    throw new Error(Zr);
  }
  setToken(e, t) {
    this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Setting token`);
    let n = this._tokens.findIndex((o) => o.sessionId === e.sessionId);
    n > -1 ? this._tokens.splice(n, 1, e) : this._tokens.push(e), this.storeToken(e, t);
  }
  async storeToken(e, t) {
    if (!R.window.state.focused) {
      this._pendingTokensToStore.has(e.sessionId) ? this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Window is not focused, replacing token to be stored`) : this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Window is not focused, pending storage of token`), this._pendingTokensToStore.set(e.sessionId, e);
      return;
    }
    await this._tokenStorage.store(e.sessionId, { id: e.sessionId, refreshToken: e.refreshToken, scope: e.scope, account: e.account, endpoint: this._env.activeDirectoryEndpointUrl }), this._logger.trace(`[${t.scopeStr}] '${e.sessionId}' Stored token`);
  }
  async storePendingTokens() {
    if (this._pendingTokensToStore.size === 0) {
      this._logger.trace("No pending tokens to store");
      return;
    }
    let e = [...this._pendingTokensToStore.values()];
    this._pendingTokensToStore.clear(), this._logger.trace(`Storing ${e.length} pending tokens...`), await Promise.allSettled(e.map(async (t) => {
      this._logger.trace(`[${t.scope}] '${t.sessionId}' Storing pending token`), await this._tokenStorage.store(t.sessionId, { id: t.sessionId, refreshToken: t.refreshToken, scope: t.scope, account: t.account, endpoint: this._env.activeDirectoryEndpointUrl }), this._logger.trace(`[${t.scope}] '${t.sessionId}' Stored pending token`);
    })), this._logger.trace("Done storing pending tokens");
  }
  async checkForUpdates(e) {
    for (let t of e.added) {
      let n = await this._tokenStorage.get(t);
      if (!n) {
        this._logger.error("session not found that was apparently just added");
        continue;
      }
      if (!this.sessionMatchesEndpoint(n)) continue;
      if (!this._tokens.some((i) => i.scope === n.scope && i.sessionId === n.id) && n.refreshToken) try {
        let i = n.scope.split(" "), s = { scopes: i, scopeStr: n.scope, scopesToSend: i.filter((c) => !c.startsWith("VSCODE_")).join(" "), clientId: this.getClientId(i), tenant: this.getTenantId(i) };
        this._logger.trace(`[${s.scopeStr}] '${n.id}' Session added in another window`);
        let a = await this.refreshToken(n.refreshToken, s, n.id);
        this._logger.trace(`[${s.scopeStr}] '${a.sessionId}' Sending change event for session that was added`), this._sessionChangeEmitter.fire({ added: [this.convertToSessionSync(a)], removed: [], changed: [] }), this._logger.trace(`[${s.scopeStr}] '${a.sessionId}' Session added in another window added here`);
        continue;
      } catch (i) {
        i.message !== Zr && (R.window.showErrorMessage(R.l10n.t("You have been signed out because reading stored authentication information failed.")), await this.removeSessionById(n.id));
        continue;
      }
    }
    for (let { value: t } of e.removed) {
      if (this._logger.trace(`[${t.scope}] '${t.id}' Session removed in another window`), !this.sessionMatchesEndpoint(t)) {
        this._logger.trace(`[${t.scope}] '${t.id}' Session doesn't match endpoint. Skipping...`);
        continue;
      }
      await this.removeSessionById(t.id, false), this._logger.trace(`[${t.scope}] '${t.id}' Session removed in another window removed here`);
    }
    for (let t of e.updated) this._pendingTokensToStore.delete(t) && this._logger.trace(`'${t}' Cancelled pending token storage because token was updated in another window`);
  }
  sessionMatchesEndpoint(e) {
    return e.endpoint ||= ms, e.endpoint === this._env.activeDirectoryEndpointUrl;
  }
};
var uo = J(require("vscode")), fm = uo.window.createOutputChannel(uo.l10n.t("Microsoft Authentication"), { log: true }), X = fm;
var Qc = require("vscode"), hr = class {
  constructor(e, t) {
    this.keylistKey = e;
    this._operationInProgress = false;
    this._tokensPromise = Promise.resolve(/* @__PURE__ */ new Map());
    this._didChangeInOtherWindow = new Qc.EventEmitter();
    this.onDidChangeInOtherWindow = this._didChangeInOtherWindow.event;
    this._secretStorage = t.secrets, t.subscriptions.push(t.secrets.onDidChange((n) => this.handleSecretChange(n))), this.initialize();
  }
  initialize() {
    this._operationInProgress = true, this._tokensPromise = new Promise((e, t) => {
      this._secretStorage.get(this.keylistKey).then((n) => {
        if (!n) {
          e(/* @__PURE__ */ new Map());
          return;
        }
        let i = JSON.parse(n).map((s) => new Promise((a, c) => {
          this._secretStorage.get(s).then((l) => {
            a({ key: s, value: l });
          }, c);
        }));
        Promise.allSettled(i).then(((s) => {
          let a = /* @__PURE__ */ new Map();
          s.forEach((c) => {
            if (c.status === "fulfilled" && c.value.value) {
              let l = this.parseSecret(c.value.value);
              a.set(c.value.key, l);
            } else c.status === "rejected" ? X.error(c.reason) : X.error("Key was not found in SecretStorage.");
          }), e(a);
        }));
      }, (n) => {
        X.error(n), e(/* @__PURE__ */ new Map());
      });
    }), this._operationInProgress = false;
  }
  async get(e) {
    return (await this.getTokens()).get(e);
  }
  async getAll(e) {
    let t = await this.getTokens(), n = new Array();
    for (let [o, i] of t) (!e || e(i)) && n.push(i);
    return n;
  }
  async store(e, t) {
    let n = await this.getTokens(), o = !n.has(e);
    n.set(e, t);
    let i = this.serializeSecret(t);
    this._operationInProgress = true, this._tokensPromise = new Promise((s, a) => {
      let c = [this._secretStorage.store(e, i)];
      o && c.push(this.updateKeyList(n)), Promise.allSettled(c).then((l) => {
        l.forEach((d) => {
          d.status === "rejected" && X.error(d.reason);
        }), s(n);
      });
    }), this._operationInProgress = false;
  }
  async delete(e) {
    let t = await this.getTokens();
    t.has(e) && (t.delete(e), this._operationInProgress = true, this._tokensPromise = new Promise((n, o) => {
      Promise.allSettled([this._secretStorage.delete(e), this.updateKeyList(t)]).then((i) => {
        i.forEach((s) => {
          s.status === "rejected" && X.error(s.reason);
        }), n(t);
      });
    }), this._operationInProgress = false);
  }
  async deleteAll(e) {
    let t = await this.getTokens(), n = [];
    for (let [o, i] of t) (!e || e(i)) && n.push(this.delete(o));
    await Promise.all(n);
  }
  async updateKeyList(e) {
    let t = [];
    for (let [o] of e) t.push(o);
    let n = JSON.stringify(t);
    await this._secretStorage.store(this.keylistKey, n);
  }
  parseSecret(e) {
    return JSON.parse(e);
  }
  serializeSecret(e) {
    return JSON.stringify(e);
  }
  async getTokens() {
    let e;
    do
      e = await this._tokensPromise;
    while (this._operationInProgress);
    return e;
  }
  async handleSecretChange(e) {
    let t = e.key;
    if (t === this.keylistKey) return;
    let n = await this.getTokens();
    this._operationInProgress = true, this._tokensPromise = new Promise((o, i) => {
      this._secretStorage.get(t).then((s) => {
        if (!s) {
          if (n.has(t)) {
            let d = n.get(t);
            n.delete(t), this._didChangeInOtherWindow.fire({ added: [], updated: [], removed: [{ key: t, value: d }] });
          }
          return n;
        }
        let a = this.parseSecret(s), c = n.get(t);
        if (!c) return n.set(t, a), this._didChangeInOtherWindow.fire({ added: [t], updated: [], removed: [] }), n;
        let l = this.serializeSecret(c);
        return s !== l && (n.set(t, a), this._didChangeInOtherWindow.fire({ added: [], updated: [t], removed: [] })), n;
      }, (s) => (X.error(s), n)).then(o);
    }), this._operationInProgress = false;
  }
};
var ho = J(require("vscode")), pr = class extends ho.EventEmitter {
  constructor() {
    super(...arguments);
    this._disposable = ho.window.registerUriHandler(this);
  }
  handleUri(t) {
    this.fire(t);
  }
  dispose() {
    super.dispose(), this._disposable.dispose();
  }
};
async function Jc(r38, e, t, n) {
  let o = H.workspace.getConfiguration("microsoft-sovereign-cloud").get("environment"), i;
  if (!o) return;
  if (o === "custom") {
    let l = H.workspace.getConfiguration("microsoft-sovereign-cloud").get("customEnvironment");
    if (!l) {
      await H.window.showErrorMessage(H.l10n.t("You must also specify a custom environment in order to use the custom environment auth provider."), H.l10n.t("Open settings")) && await H.commands.executeCommand("workbench.action.openSettingsJson", "microsoft-sovereign-cloud.customEnvironment");
      return;
    }
    try {
      Re.add(l);
    } catch (d) {
      await H.window.showErrorMessage(H.l10n.t("Error validating custom environment setting: {0}", d.message), H.l10n.t("Open settings")) && await H.commands.executeCommand("workbench.action.openSettings", "microsoft-sovereign-cloud.customEnvironment");
      return;
    }
    i = l.name;
  } else i = o;
  let s = Re.get(i);
  if (!s) {
    let l = await H.window.showErrorMessage(H.l10n.t("The environment `{0}` is not a valid environment.", i), H.l10n.t("Open settings"));
    return;
  }
  let a = new en(H.window.createOutputChannel(H.l10n.t("Microsoft Sovereign Cloud Authentication"), { log: true }), r38, t, n, e, s);
  await a.initialize();
  let c = H.authentication.registerAuthenticationProvider("microsoft-sovereign-cloud", i, { onDidChangeSessions: a.onDidChangeSessions, getSessions: (l) => a.getSessions(l), createSession: async (l) => {
    try {
      return e.sendTelemetryEvent("loginMicrosoftSovereignCloud", { scopes: JSON.stringify(l.map((d) => d.replace(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i, "{guid}"))) }), await a.createSession(l);
    } catch (d) {
      throw e.sendTelemetryEvent("loginMicrosoftSovereignCloudFailed"), d;
    }
  }, removeSession: async (l) => {
    try {
      e.sendTelemetryEvent("logoutMicrosoftSovereignCloud"), await a.removeSessionById(l);
    } catch {
      e.sendTelemetryEvent("logoutMicrosoftSovereignCloudFailed");
    }
  } }, { supportsMultipleAccounts: true });
  return r38.subscriptions.push(c), c;
}
async function Xc(r38, e) {
  r38.globalState.update("msalMigration", false);
  let t = new pr();
  r38.subscriptions.push(t);
  let n = new hr("microsoft.login.keylist", r38), o = new en(X, r38, t, n, e, Re.AzureCloud);
  await o.initialize(), r38.subscriptions.push(H.authentication.registerAuthenticationProvider("microsoft", "Microsoft", { onDidChangeSessions: o.onDidChangeSessions, getSessions: (s, a) => o.getSessions(s, a?.account), createSession: async (s, a) => {
    try {
      return e.sendTelemetryEvent("login", { scopes: JSON.stringify(s.map((c) => c.replace(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i, "{guid}"))) }), await o.createSession(s, a?.account);
    } catch (c) {
      throw e.sendTelemetryEvent("loginFailed"), c;
    }
  }, removeSession: async (s) => {
    try {
      e.sendTelemetryEvent("logout"), await o.removeSessionById(s);
    } catch {
      e.sendTelemetryEvent("logoutFailed");
    }
  } }, { supportsMultipleAccounts: true }));
  let i = await Jc(r38, e, t, n);
  r38.subscriptions.push(H.workspace.onDidChangeConfiguration(async (s) => {
    s.affectsConfiguration("microsoft-sovereign-cloud") && (i?.dispose(), i = await Jc(r38, e, t, n));
  }));
}
var xt = class {
  static serializeJSONBlob(e) {
    return JSON.stringify(e);
  }
  static serializeAccounts(e) {
    let t = {};
    return Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { home_account_id: o.homeAccountId, environment: o.environment, realm: o.realm, local_account_id: o.localAccountId, username: o.username, authority_type: o.authorityType, name: o.name, client_info: o.clientInfo, last_modification_time: o.lastModificationTime, last_modification_app: o.lastModificationApp, tenantProfiles: o.tenantProfiles?.map((i) => JSON.stringify(i)) };
    }), t;
  }
  static serializeIdTokens(e) {
    let t = {};
    return Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { home_account_id: o.homeAccountId, environment: o.environment, credential_type: o.credentialType, client_id: o.clientId, secret: o.secret, realm: o.realm };
    }), t;
  }
  static serializeAccessTokens(e) {
    let t = {};
    return Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { home_account_id: o.homeAccountId, environment: o.environment, credential_type: o.credentialType, client_id: o.clientId, secret: o.secret, realm: o.realm, target: o.target, cached_at: o.cachedAt, expires_on: o.expiresOn, extended_expires_on: o.extendedExpiresOn, refresh_on: o.refreshOn, key_id: o.keyId, token_type: o.tokenType, requestedClaims: o.requestedClaims, requestedClaimsHash: o.requestedClaimsHash, userAssertionHash: o.userAssertionHash };
    }), t;
  }
  static serializeRefreshTokens(e) {
    let t = {};
    return Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { home_account_id: o.homeAccountId, environment: o.environment, credential_type: o.credentialType, client_id: o.clientId, secret: o.secret, family_id: o.familyId, target: o.target, realm: o.realm };
    }), t;
  }
  static serializeAppMetadata(e) {
    let t = {};
    return Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { client_id: o.clientId, environment: o.environment, family_id: o.familyId };
    }), t;
  }
  static serializeAllCache(e) {
    return { Account: this.serializeAccounts(e.accounts), IdToken: this.serializeIdTokens(e.idTokens), AccessToken: this.serializeAccessTokens(e.accessTokens), RefreshToken: this.serializeRefreshTokens(e.refreshTokens), AppMetadata: this.serializeAppMetadata(e.appMetadata) };
  }
};
var p = { LIBRARY_NAME: "MSAL.JS", SKU: "msal.js.common", CACHE_PREFIX: "msal", DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/", DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com", DEFAULT_COMMON_TENANT: "common", ADFS: "adfs", DSTS: "dstsv2", AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=", CIAM_AUTH_URL: ".ciamlogin.com", AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com", RESOURCE_DELIM: "|", NO_ACCOUNT: "NO_ACCOUNT", CLAIMS: "claims", CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad", OPENID_SCOPE: "openid", PROFILE_SCOPE: "profile", OFFLINE_ACCESS_SCOPE: "offline_access", EMAIL_SCOPE: "email", CODE_RESPONSE_TYPE: "code", CODE_GRANT_TYPE: "authorization_code", RT_GRANT_TYPE: "refresh_token", FRAGMENT_RESPONSE_MODE: "fragment", S256_CODE_CHALLENGE_METHOD: "S256", URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8", AUTHORIZATION_PENDING: "authorization_pending", NOT_DEFINED: "not_defined", EMPTY_STRING: "", NOT_APPLICABLE: "N/A", NOT_AVAILABLE: "Not Available", FORWARD_SLASH: "/", IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location", IMDS_VERSION: "2020-06-01", IMDS_TIMEOUT: 2e3, AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect", REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com", KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"], TOKEN_RESPONSE_TYPE: "token", ID_TOKEN_RESPONSE_TYPE: "id_token", SHR_NONCE_VALIDITY: 240, INVALID_INSTANCE: "invalid_instance" }, M = { SUCCESS: 200, SUCCESS_RANGE_START: 200, SUCCESS_RANGE_END: 299, REDIRECT: 302, CLIENT_ERROR: 400, CLIENT_ERROR_RANGE_START: 400, BAD_REQUEST: 400, UNAUTHORIZED: 401, NOT_FOUND: 404, REQUEST_TIMEOUT: 408, TOO_MANY_REQUESTS: 429, CLIENT_ERROR_RANGE_END: 499, SERVER_ERROR: 500, SERVER_ERROR_RANGE_START: 500, SERVICE_UNAVAILABLE: 503, GATEWAY_TIMEOUT: 504, SERVER_ERROR_RANGE_END: 599, MULTI_SIDED_ERROR: 600 }, Oe = [p.OPENID_SCOPE, p.PROFILE_SCOPE, p.OFFLINE_ACCESS_SCOPE], Es = [...Oe, p.EMAIL_SCOPE], B = { CONTENT_TYPE: "Content-Type", CONTENT_LENGTH: "Content-Length", RETRY_AFTER: "Retry-After", CCS_HEADER: "X-AnchorMailbox", WWWAuthenticate: "WWW-Authenticate", AuthenticationInfo: "Authentication-Info", X_MS_REQUEST_ID: "x-ms-request-id", X_MS_HTTP_VERSION: "x-ms-httpver" };
var Le = { COMMON: "common", ORGANIZATIONS: "organizations", CONSUMERS: "consumers" }, fr = { ACCESS_TOKEN: "access_token", XMS_CC: "xms_cc" }, Je = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create", NO_SESSION: "no_session" }, mr = { PLAIN: "plain", S256: "S256" }, Zc = { QUERY: "query", FRAGMENT: "fragment" }, ft = { ...Zc, FORM_POST: "form_post" }, Xe = { IMPLICIT_GRANT: "implicit", AUTHORIZATION_CODE_GRANT: "authorization_code", CLIENT_CREDENTIALS_GRANT: "client_credentials", RESOURCE_OWNER_PASSWORD_GRANT: "password", REFRESH_TOKEN_GRANT: "refresh_token", DEVICE_CODE_GRANT: "device_code", JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer" }, gr = { MSSTS_ACCOUNT_TYPE: "MSSTS", ADFS_ACCOUNT_TYPE: "ADFS", MSAV1_ACCOUNT_TYPE: "MSA", GENERIC_ACCOUNT_TYPE: "Generic" }, V = { CACHE_KEY_SEPARATOR: "-", CLIENT_INFO_SEPARATOR: "." }, D = { ID_TOKEN: "IdToken", ACCESS_TOKEN: "AccessToken", ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme", REFRESH_TOKEN: "RefreshToken" };
var tn = "appmetadata", el = "client_info", mt = "1", Er = { CACHE_KEY: "authority-metadata", REFRESH_TIME_SECONDS: 3600 * 24 }, me = { CONFIG: "config", CACHE: "cache", NETWORK: "network", HARDCODED_VALUES: "hardcoded_values" }, K = { SCHEMA_VERSION: 5, MAX_CUR_HEADER_BYTES: 80, MAX_LAST_HEADER_BYTES: 330, MAX_CACHED_ERRORS: 50, CACHE_KEY: "server-telemetry", CATEGORY_SEPARATOR: "|", VALUE_SEPARATOR: ",", OVERFLOW_TRUE: "1", OVERFLOW_FALSE: "0", UNKNOWN_ERROR: "unknown_error" }, O = { BEARER: "Bearer", POP: "pop", SSH: "ssh-cert" }, Ze = { DEFAULT_THROTTLE_TIME_SECONDS: 60, DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600, THROTTLING_PREFIX: "throttling", X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429" }, po = { INVALID_GRANT_ERROR: "invalid_grant", CLIENT_MISMATCH_ERROR: "client_mismatch" }, fo = { username: "username", password: "password" }, rn = { httpSuccess: 200, httpBadRequest: 400 }, Ut = { FAILED_AUTO_DETECTION: "1", INTERNAL_CACHE: "2", ENVIRONMENT_VARIABLE: "3", IMDS: "4" }, mo = { CONFIGURED_MATCHES_DETECTED: "1", CONFIGURED_NO_AUTO_DETECTION: "2", CONFIGURED_NOT_DETECTED: "3", AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4", AUTO_DETECTION_REQUESTED_FAILED: "5" }, Fe = { NOT_APPLICABLE: "0", FORCE_REFRESH_OR_CLAIMS: "1", NO_CACHED_ACCESS_TOKEN: "2", CACHED_ACCESS_TOKEN_EXPIRED: "3", PROACTIVELY_REFRESHED: "4" };
var As = 300;
var sn = {};
pt(sn, { postRequestFailed: () => on, unexpectedError: () => nn });
var nn = "unexpected_error", on = "post_request_failed";
var go = { [nn]: "Unexpected error in authentication.", [on]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details." }, tl = { unexpectedError: { code: nn, desc: go[nn] }, postRequestFailed: { code: on, desc: go[on] } }, w = class r2 extends Error {
  constructor(e, t, n) {
    let o = t ? `${e}: ${t}` : e;
    super(o), Object.setPrototypeOf(this, r2.prototype), this.errorCode = e || p.EMPTY_STRING, this.errorMessage = t || p.EMPTY_STRING, this.subError = n || p.EMPTY_STRING, this.name = "AuthError";
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
};
function ys(r38, e) {
  return new w(r38, e ? `${go[r38]} ${e}` : go[r38]);
}
var le = {};
pt(le, { authTimeNotFound: () => et, authorizationCodeMissingFromServerResponse: () => Jt, bindingKeyNotRemoved: () => En, cannotAppendScopeSet: () => jt, cannotRemoveEmptyScope: () => Yt, clientInfoDecodingError: () => gt, clientInfoEmptyError: () => Lt, deviceCodeExpired: () => dn, deviceCodePollingCancelled: () => ln, deviceCodeUnknownError: () => un, emptyInputScopeSet: () => yt, endSessionEndpointNotSupported: () => Xt, endpointResolutionError: () => ge, hashNotDeserialized: () => qt, invalidAssertion: () => fn, invalidCacheEnvironment: () => rt, invalidCacheRecord: () => Wt, invalidClientCredential: () => mn, invalidState: () => He, keyIdMissing: () => Zt, maxAgeTranspired: () => $t, methodNotImplemented: () => _, missingTenantIdError: () => Tn, multipleMatchingAccounts: () => cn, multipleMatchingAppMetadata: () => Kt, multipleMatchingTokens: () => an, nestedAppAuthBridgeDisabled: () => Cn, networkError: () => Ht, noAccountFound: () => hn, noAccountInSilentRequest: () => tt, noCryptoObject: () => Tt, noNetworkConnectivity: () => An, nonceMismatch: () => Vt, nullOrEmptyToken: () => Ft, openIdConfigError: () => Bt, requestCannotBeMade: () => zt, stateMismatch: () => Gt, stateNotFound: () => At, tokenClaimsCnfRequiredForSignedJwt: () => Qt, tokenParsingError: () => Et, tokenRefreshRequired: () => Ve, unexpectedCredentialType: () => pn, userCanceled: () => yn, userTimeoutReached: () => gn });
var gt = "client_info_decoding_error", Lt = "client_info_empty_error", Et = "token_parsing_error", Ft = "null_or_empty_token", ge = "endpoints_resolution_error", Ht = "network_error", Bt = "openid_config_error", qt = "hash_not_deserialized", He = "invalid_state", Gt = "state_mismatch", At = "state_not_found", Vt = "nonce_mismatch", et = "auth_time_not_found", $t = "max_age_transpired", an = "multiple_matching_tokens", cn = "multiple_matching_accounts", Kt = "multiple_matching_appMetadata", zt = "request_cannot_be_made", Yt = "cannot_remove_empty_scope", jt = "cannot_append_scopeset", yt = "empty_input_scopeset", ln = "device_code_polling_cancelled", dn = "device_code_expired", un = "device_code_unknown_error", tt = "no_account_in_silent_request", Wt = "invalid_cache_record", rt = "invalid_cache_environment", hn = "no_account_found", Tt = "no_crypto_object", pn = "unexpected_credential_type", fn = "invalid_assertion", mn = "invalid_client_credential", Ve = "token_refresh_required", gn = "user_timeout_reached", Qt = "token_claims_cnf_required_for_signedjwt", Jt = "authorization_code_missing_from_server_response", En = "binding_key_not_removed", Xt = "end_session_endpoint_not_supported", Zt = "key_id_missing", An = "no_network_connectivity", yn = "user_canceled", Tn = "missing_tenant_id_error", _ = "method_not_implemented", Cn = "nested_app_auth_bridge_disabled";
var S = { [gt]: "The client info could not be parsed/decoded correctly", [Lt]: "The client info was empty", [Et]: "Token cannot be parsed", [Ft]: "The token is null or empty", [ge]: "Endpoints cannot be resolved", [Ht]: "Network request failed", [Bt]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.", [qt]: "The hash parameters could not be deserialized", [He]: "State was not the expected format", [Gt]: "State mismatch error", [At]: "State not found", [Vt]: "Nonce mismatch error", [et]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.", [$t]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.", [an]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.", [cn]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account", [Kt]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata", [zt]: "Token request cannot be made without authorization code or refresh token.", [Yt]: "Cannot remove null or empty scope from ScopeSet", [jt]: "Cannot append ScopeSet", [yt]: "Empty input ScopeSet cannot be processed", [ln]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.", [dn]: "Device code is expired.", [un]: "Device code stopped polling for unknown reasons.", [tt]: "Please pass an account object, silent flow is not supported without account information", [Wt]: "Cache record object was null or undefined.", [rt]: "Invalid environment when attempting to create cache entry", [hn]: "No account found in cache for given key.", [Tt]: "No crypto object detected.", [pn]: "Unexpected credential type.", [fn]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515", [mn]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential", [Ve]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.", [gn]: "User defined timeout for device code polling reached", [Qt]: "Cannot generate a POP jwt if the token_claims are not populated", [Jt]: "Server response does not contain an authorization code to proceed", [En]: "Could not remove the credential's binding key from storage.", [Xt]: "The provided authority does not support logout", [Zt]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.", [An]: "No network connectivity. Check your internet connection.", [yn]: "User cancelled the flow.", [Tn]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.", [_]: "This method has not been implemented", [Cn]: "The nested app auth bridge is disabled" }, rl = { clientInfoDecodingError: { code: gt, desc: S[gt] }, clientInfoEmptyError: { code: Lt, desc: S[Lt] }, tokenParsingError: { code: Et, desc: S[Et] }, nullOrEmptyToken: { code: Ft, desc: S[Ft] }, endpointResolutionError: { code: ge, desc: S[ge] }, networkError: { code: Ht, desc: S[Ht] }, unableToGetOpenidConfigError: { code: Bt, desc: S[Bt] }, hashNotDeserialized: { code: qt, desc: S[qt] }, invalidStateError: { code: He, desc: S[He] }, stateMismatchError: { code: Gt, desc: S[Gt] }, stateNotFoundError: { code: At, desc: S[At] }, nonceMismatchError: { code: Vt, desc: S[Vt] }, authTimeNotFoundError: { code: et, desc: S[et] }, maxAgeTranspired: { code: $t, desc: S[$t] }, multipleMatchingTokens: { code: an, desc: S[an] }, multipleMatchingAccounts: { code: cn, desc: S[cn] }, multipleMatchingAppMetadata: { code: Kt, desc: S[Kt] }, tokenRequestCannotBeMade: { code: zt, desc: S[zt] }, removeEmptyScopeError: { code: Yt, desc: S[Yt] }, appendScopeSetError: { code: jt, desc: S[jt] }, emptyInputScopeSetError: { code: yt, desc: S[yt] }, DeviceCodePollingCancelled: { code: ln, desc: S[ln] }, DeviceCodeExpired: { code: dn, desc: S[dn] }, DeviceCodeUnknownError: { code: un, desc: S[un] }, NoAccountInSilentRequest: { code: tt, desc: S[tt] }, invalidCacheRecord: { code: Wt, desc: S[Wt] }, invalidCacheEnvironment: { code: rt, desc: S[rt] }, noAccountFound: { code: hn, desc: S[hn] }, noCryptoObj: { code: Tt, desc: S[Tt] }, unexpectedCredentialType: { code: pn, desc: S[pn] }, invalidAssertion: { code: fn, desc: S[fn] }, invalidClientCredential: { code: mn, desc: S[mn] }, tokenRefreshRequired: { code: Ve, desc: S[Ve] }, userTimeoutReached: { code: gn, desc: S[gn] }, tokenClaimsRequired: { code: Qt, desc: S[Qt] }, noAuthorizationCodeFromServer: { code: Jt, desc: S[Jt] }, bindingKeyNotRemovedError: { code: En, desc: S[En] }, logoutNotSupported: { code: Xt, desc: S[Xt] }, keyIdMissing: { code: Zt, desc: S[Zt] }, noNetworkConnectivity: { code: An, desc: S[An] }, userCanceledError: { code: yn, desc: S[yn] }, missingTenantIdError: { code: Tn, desc: S[Tn] }, nestedAppAuthBridgeDisabled: { code: Cn, desc: S[Cn] } }, er = class r3 extends w {
  constructor(e, t) {
    super(e, t ? `${S[e]}: ${t}` : S[e]), this.name = "ClientAuthError", Object.setPrototypeOf(this, r3.prototype);
  }
};
function m(r38, e) {
  return new er(r38, e);
}
var Ts = { createNewGuid: () => {
  throw m(_);
}, base64Decode: () => {
  throw m(_);
}, base64Encode: () => {
  throw m(_);
}, base64UrlEncode: () => {
  throw m(_);
}, encodeKid: () => {
  throw m(_);
}, async getPublicKeyThumbprint() {
  throw m(_);
}, async removeTokenBindingKey() {
  throw m(_);
}, async clearKeystore() {
  throw m(_);
}, async signJwt() {
  throw m(_);
}, async hashString() {
  throw m(_);
} };
var k;
(function(r38) {
  r38[r38.Error = 0] = "Error", r38[r38.Warning = 1] = "Warning", r38[r38.Info = 2] = "Info", r38[r38.Verbose = 3] = "Verbose", r38[r38.Trace = 4] = "Trace";
})(k || (k = {}));
var $e = class r4 {
  constructor(e, t, n) {
    this.level = k.Info;
    let o = () => {
    }, i = e || r4.createDefaultLoggerOptions();
    this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || false, this.level = typeof i.logLevel == "number" ? i.logLevel : k.Info, this.correlationId = i.correlationId || p.EMPTY_STRING, this.packageName = t || p.EMPTY_STRING, this.packageVersion = n || p.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return { loggerCallback: () => {
    }, piiLoggingEnabled: false, logLevel: k.Info };
  }
  clone(e, t, n) {
    return new r4({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
  }
  logMessage(e, t) {
    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
    let i = `${`[${(/* @__PURE__ */ new Date()).toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${k[t.logLevel]} - ${e}`;
    this.executeCallback(t.logLevel, i, t.containsPii || false);
  }
  executeCallback(e, t, n) {
    this.localCallback && this.localCallback(e, t, n);
  }
  error(e, t) {
    this.logMessage(e, { logLevel: k.Error, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  errorPii(e, t) {
    this.logMessage(e, { logLevel: k.Error, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  warning(e, t) {
    this.logMessage(e, { logLevel: k.Warning, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  warningPii(e, t) {
    this.logMessage(e, { logLevel: k.Warning, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  info(e, t) {
    this.logMessage(e, { logLevel: k.Info, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  infoPii(e, t) {
    this.logMessage(e, { logLevel: k.Info, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  verbose(e, t) {
    this.logMessage(e, { logLevel: k.Verbose, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  verbosePii(e, t) {
    this.logMessage(e, { logLevel: k.Verbose, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  trace(e, t) {
    this.logMessage(e, { logLevel: k.Trace, containsPii: false, correlationId: t || p.EMPTY_STRING });
  }
  tracePii(e, t) {
    this.logMessage(e, { logLevel: k.Trace, containsPii: true, correlationId: t || p.EMPTY_STRING });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
};
var Eo = "@azure/msal-common", Ar = "14.16.1";
var Ct = { None: "none", AzurePublic: "https://login.microsoftonline.com", AzurePpe: "https://login.windows-ppe.net", AzureChina: "https://login.chinacloudapi.cn", AzureGermany: "https://login.microsoftonline.de", AzureUsGovernment: "https://login.microsoftonline.us" };
var z = {};
pt(z, { createAccessTokenEntity: () => Is, createIdTokenEntity: () => Ss, createRefreshTokenEntity: () => _s, generateAppMetadataKey: () => km, generateAuthorityMetadataExpiresAt: () => To, generateCredentialKey: () => Sn, isAccessTokenEntity: () => Am, isAppMetadataEntity: () => Pm, isAuthorityMetadataEntity: () => Om, isAuthorityMetadataExpired: () => Co, isCredentialEntity: () => yo, isIdTokenEntity: () => ym, isRefreshTokenEntity: () => Tm, isServerTelemetryEntity: () => Rm, isThrottlingEntity: () => wm, updateAuthorityEndpointMetadata: () => Tr, updateCloudDiscoveryMetadata: () => In });
function St(r38, e) {
  let t = gm(r38);
  try {
    let n = e(t);
    return JSON.parse(n);
  } catch {
    throw m(Et);
  }
}
function gm(r38) {
  if (!r38) throw m(Ft);
  let t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(r38);
  if (!t || t.length < 4) throw m(Et);
  return t[2];
}
function Ao(r38, e) {
  if (e === 0 || Date.now() - 3e5 > r38 + e) throw m($t);
}
var Z = {};
pt(Z, { delay: () => Em, isTokenExpired: () => yr, nowSeconds: () => we, wasClockTurnedBack: () => Cs });
function we() {
  return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
}
function yr(r38, e) {
  let t = Number(r38) || 0;
  return we() + e > t;
}
function Cs(r38) {
  return Number(r38) > we();
}
function Em(r38, e) {
  return new Promise((t) => setTimeout(() => t(e), r38));
}
function Sn(r38) {
  return [Cm(r38), Sm(r38), Im(r38), _m(r38), vm(r38)].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
}
function Ss(r38, e, t, n, o) {
  return { credentialType: D.ID_TOKEN, homeAccountId: r38, environment: e, clientId: n, secret: t, realm: o };
}
function Is(r38, e, t, n, o, i, s, a, c, l, d, u, g, f, A) {
  let C = { homeAccountId: r38, credentialType: D.ACCESS_TOKEN, secret: t, cachedAt: we().toString(), expiresOn: s.toString(), extendedExpiresOn: a.toString(), environment: e, clientId: n, realm: o, target: i, tokenType: d || O.BEARER };
  if (u && (C.userAssertionHash = u), l && (C.refreshOn = l.toString()), f && (C.requestedClaims = f, C.requestedClaimsHash = A), C.tokenType?.toLowerCase() !== O.BEARER.toLowerCase()) switch (C.credentialType = D.ACCESS_TOKEN_WITH_AUTH_SCHEME, C.tokenType) {
    case O.POP:
      let x = St(t, c);
      if (!x?.cnf?.kid) throw m(Qt);
      C.keyId = x.cnf.kid;
      break;
    case O.SSH:
      C.keyId = g;
  }
  return C;
}
function _s(r38, e, t, n, o, i, s) {
  let a = { credentialType: D.REFRESH_TOKEN, homeAccountId: r38, environment: e, clientId: n, secret: t };
  return i && (a.userAssertionHash = i), o && (a.familyId = o), s && (a.expiresOn = s.toString()), a;
}
function yo(r38) {
  return r38.hasOwnProperty("homeAccountId") && r38.hasOwnProperty("environment") && r38.hasOwnProperty("credentialType") && r38.hasOwnProperty("clientId") && r38.hasOwnProperty("secret");
}
function Am(r38) {
  return r38 ? yo(r38) && r38.hasOwnProperty("realm") && r38.hasOwnProperty("target") && (r38.credentialType === D.ACCESS_TOKEN || r38.credentialType === D.ACCESS_TOKEN_WITH_AUTH_SCHEME) : false;
}
function ym(r38) {
  return r38 ? yo(r38) && r38.hasOwnProperty("realm") && r38.credentialType === D.ID_TOKEN : false;
}
function Tm(r38) {
  return r38 ? yo(r38) && r38.credentialType === D.REFRESH_TOKEN : false;
}
function Cm(r38) {
  return [r38.homeAccountId, r38.environment].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
}
function Sm(r38) {
  let e = r38.credentialType === D.REFRESH_TOKEN && r38.familyId || r38.clientId;
  return [r38.credentialType, e, r38.realm || ""].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
}
function Im(r38) {
  return (r38.target || "").toLowerCase();
}
function _m(r38) {
  return (r38.requestedClaimsHash || "").toLowerCase();
}
function vm(r38) {
  return r38.tokenType && r38.tokenType.toLowerCase() !== O.BEARER.toLowerCase() ? r38.tokenType.toLowerCase() : "";
}
function Rm(r38, e) {
  let t = r38.indexOf(K.CACHE_KEY) === 0, n = true;
  return e && (n = e.hasOwnProperty("failedRequests") && e.hasOwnProperty("errors") && e.hasOwnProperty("cacheHits")), t && n;
}
function wm(r38, e) {
  let t = false;
  r38 && (t = r38.indexOf(Ze.THROTTLING_PREFIX) === 0);
  let n = true;
  return e && (n = e.hasOwnProperty("throttleTime")), t && n;
}
function km({ environment: r38, clientId: e }) {
  return [tn, r38, e].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
}
function Pm(r38, e) {
  return e ? r38.indexOf(tn) === 0 && e.hasOwnProperty("clientId") && e.hasOwnProperty("environment") : false;
}
function Om(r38, e) {
  return e ? r38.indexOf(Er.CACHE_KEY) === 0 && e.hasOwnProperty("aliases") && e.hasOwnProperty("preferred_cache") && e.hasOwnProperty("preferred_network") && e.hasOwnProperty("canonical_authority") && e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("aliasesFromNetwork") && e.hasOwnProperty("endpointsFromNetwork") && e.hasOwnProperty("expiresAt") && e.hasOwnProperty("jwks_uri") : false;
}
function To() {
  return we() + Er.REFRESH_TIME_SECONDS;
}
function Tr(r38, e, t) {
  r38.authorization_endpoint = e.authorization_endpoint, r38.token_endpoint = e.token_endpoint, r38.end_session_endpoint = e.end_session_endpoint, r38.issuer = e.issuer, r38.endpointsFromNetwork = t, r38.jwks_uri = e.jwks_uri;
}
function In(r38, e, t) {
  r38.aliases = e.aliases, r38.preferred_cache = e.preferred_cache, r38.preferred_network = e.preferred_network, r38.aliasesFromNetwork = t;
}
function Co(r38) {
  return r38.expiresAt <= we();
}
var Cr = "redirect_uri_empty", So = "claims_request_parsing_error", Sr = "authority_uri_insecure", nt = "url_parse_error", Ir = "empty_url_error", _r = "empty_input_scopes_error", vr = "invalid_prompt_value", It = "invalid_claims", Rr = "token_request_empty", wr = "logout_request_empty", kr = "invalid_code_challenge_method", _t = "pkce_params_missing", tr = "invalid_cloud_discovery_metadata", Pr = "invalid_authority_metadata", Or = "untrusted_authority", vt = "missing_ssh_jwk", Io = "missing_ssh_kid", _o = "missing_nonce_authentication_header", vo = "invalid_authentication_header", Ro = "cannot_set_OIDCOptions", wo = "cannot_allow_native_broker", ko = "authority_mismatch";
var q = { [Cr]: "A redirect URI is required for all calls, and none has been set.", [So]: "Could not parse the given claims request object.", [Sr]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options", [nt]: "URL could not be parsed into appropriate segments.", [Ir]: "URL was empty or null.", [_r]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.", [vr]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest", [It]: "Given claims parameter must be a stringified JSON object.", [Rr]: "Token request was empty and not found in cache.", [wr]: "The logout request was null or undefined.", [kr]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".', [_t]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request", [tr]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields", [Pr]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.", [Or]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.", [vt]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.", [Io]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.", [_o]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.", [vo]: "Invalid authentication header provided", [Ro]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.", [wo]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode.", [ko]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority." }, Nm = { redirectUriNotSet: { code: Cr, desc: q[Cr] }, claimsRequestParsingError: { code: So, desc: q[So] }, authorityUriInsecure: { code: Sr, desc: q[Sr] }, urlParseError: { code: nt, desc: q[nt] }, urlEmptyError: { code: Ir, desc: q[Ir] }, emptyScopesError: { code: _r, desc: q[_r] }, invalidPrompt: { code: vr, desc: q[vr] }, invalidClaimsRequest: { code: It, desc: q[It] }, tokenRequestEmptyError: { code: Rr, desc: q[Rr] }, logoutRequestEmptyError: { code: wr, desc: q[wr] }, invalidCodeChallengeMethod: { code: kr, desc: q[kr] }, invalidCodeChallengeParams: { code: _t, desc: q[_t] }, invalidCloudDiscoveryMetadata: { code: tr, desc: q[tr] }, invalidAuthorityMetadata: { code: Pr, desc: q[Pr] }, untrustedAuthority: { code: Or, desc: q[Or] }, missingSshJwk: { code: vt, desc: q[vt] }, missingSshKid: { code: Io, desc: q[Io] }, missingNonceAuthenticationHeader: { code: _o, desc: q[_o] }, invalidAuthenticationHeader: { code: vo, desc: q[vo] }, cannotSetOIDCOptions: { code: Ro, desc: q[Ro] }, cannotAllowNativeBroker: { code: wo, desc: q[wo] }, authorityMismatch: { code: ko, desc: q[ko] } }, Po = class r5 extends w {
  constructor(e) {
    super(e, q[e]), this.name = "ClientConfigurationError", Object.setPrototypeOf(this, r5.prototype);
  }
};
function N(r38) {
  return new Po(r38);
}
var $ = class {
  static isEmptyObj(e) {
    if (e) try {
      let t = JSON.parse(e);
      return Object.keys(t).length === 0;
    } catch {
    }
    return true;
  }
  static startsWith(e, t) {
    return e.indexOf(t) === 0;
  }
  static endsWith(e, t) {
    return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
  }
  static queryStringToObject(e) {
    let t = {}, n = e.split("&"), o = (i) => decodeURIComponent(i.replace(/\+/g, " "));
    return n.forEach((i) => {
      if (i.trim()) {
        let [s, a] = i.split(/=(.+)/g, 2);
        s && a && (t[o(s)] = o(a));
      }
    }), t;
  }
  static trimArrayEntries(e) {
    return e.map((t) => t.trim());
  }
  static removeEmptyStringsFromArray(e) {
    return e.filter((t) => !!t);
  }
  static jsonParseHelper(e) {
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  static matchPattern(e, t) {
    return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
  }
};
var ke = class r6 {
  constructor(e) {
    let t = e ? $.trimArrayEntries([...e]) : [], n = t ? $.removeEmptyStringsFromArray(t) : [];
    this.validateInputScopes(n), this.scopes = /* @__PURE__ */ new Set(), n.forEach((o) => this.scopes.add(o));
  }
  static fromString(e) {
    let n = (e || p.EMPTY_STRING).split(" ");
    return new r6(n);
  }
  static createSearchScopes(e) {
    let t = new r6(e);
    return t.containsOnlyOIDCScopes() ? t.removeScope(p.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
  }
  validateInputScopes(e) {
    if (!e || e.length < 1) throw N(_r);
  }
  containsScope(e) {
    let t = this.printScopesLowerCase().split(" "), n = new r6(t);
    return e ? n.scopes.has(e.toLowerCase()) : false;
  }
  containsScopeSet(e) {
    return !e || e.scopes.size <= 0 ? false : this.scopes.size >= e.scopes.size && e.asArray().every((t) => this.containsScope(t));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return Es.forEach((t) => {
      this.containsScope(t) && (e += 1);
    }), this.scopes.size === e;
  }
  appendScope(e) {
    e && this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach((t) => this.appendScope(t));
    } catch {
      throw m(jt);
    }
  }
  removeScope(e) {
    if (!e) throw m(Yt);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    Es.forEach((e) => {
      this.scopes.delete(e);
    });
  }
  unionScopeSets(e) {
    if (!e) throw m(yt);
    let t = /* @__PURE__ */ new Set();
    return e.scopes.forEach((n) => t.add(n.toLowerCase())), this.scopes.forEach((n) => t.add(n.toLowerCase())), t;
  }
  intersectingScopeSets(e) {
    if (!e) throw m(yt);
    e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
    let t = this.unionScopeSets(e), n = e.getScopeCount(), o = this.getScopeCount();
    return t.size < o + n;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let e = [];
    return this.scopes.forEach((t) => e.push(t)), e;
  }
  printScopes() {
    return this.scopes ? this.asArray().join(" ") : p.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
};
function br(r38, e) {
  if (!r38) throw m(Lt);
  try {
    let t = e(r38);
    return JSON.parse(t);
  } catch {
    throw m(gt);
  }
}
function ot(r38) {
  if (!r38) throw m(gt);
  let e = r38.split(V.CLIENT_INFO_SEPARATOR, 2);
  return { uid: e[0], utid: e.length < 2 ? p.EMPTY_STRING : e[1] };
}
function _n(r38, e) {
  return !!r38 && !!e && r38 === e.split(".")[1];
}
function vn(r38, e, t, n) {
  if (n) {
    let { oid: o, sub: i, tid: s, name: a, tfp: c, acr: l } = n, d = s || c || l || "";
    return { tenantId: d, localAccountId: o || i || "", name: a, isHomeTenant: _n(d, r38) };
  } else return { tenantId: t, localAccountId: e, isHomeTenant: _n(t, r38) };
}
function Oo(r38, e, t, n) {
  let o = r38;
  if (e) {
    let { isHomeTenant: i, ...s } = e;
    o = { ...r38, ...s };
  }
  if (t) {
    let { isHomeTenant: i, ...s } = vn(r38.homeAccountId, r38.localAccountId, r38.tenantId, t);
    return o = { ...o, ...s, idTokenClaims: t, idToken: n }, o;
  }
  return o;
}
var be = { Default: 0, Adfs: 1, Dsts: 2, Ciam: 3 };
function bo(r38) {
  return r38 && (r38.tid || r38.tfp || r38.acr) || null;
}
var Be = { AAD: "AAD", OIDC: "OIDC" };
var ee = class r7 {
  generateAccountId() {
    return [this.homeAccountId, this.environment].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
  }
  generateAccountKey() {
    return r7.generateAccountCacheKey({ homeAccountId: this.homeAccountId, environment: this.environment, tenantId: this.realm, username: this.username, localAccountId: this.localAccountId });
  }
  getAccountInfo() {
    return { homeAccountId: this.homeAccountId, environment: this.environment, tenantId: this.realm, username: this.username, localAccountId: this.localAccountId, name: this.name, nativeAccountId: this.nativeAccountId, authorityType: this.authorityType, tenantProfiles: new Map((this.tenantProfiles || []).map((e) => [e.tenantId, e])) };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static generateAccountCacheKey(e) {
    let t = e.homeAccountId.split(".")[1];
    return [e.homeAccountId, e.environment || "", t || e.tenantId || ""].join(V.CACHE_KEY_SEPARATOR).toLowerCase();
  }
  static createAccount(e, t, n) {
    let o = new r7();
    t.authorityType === be.Adfs ? o.authorityType = gr.ADFS_ACCOUNT_TYPE : t.protocolMode === Be.AAD ? o.authorityType = gr.MSSTS_ACCOUNT_TYPE : o.authorityType = gr.GENERIC_ACCOUNT_TYPE;
    let i;
    e.clientInfo && n && (i = br(e.clientInfo, n)), o.clientInfo = e.clientInfo, o.homeAccountId = e.homeAccountId, o.nativeAccountId = e.nativeAccountId;
    let s = e.environment || t && t.getPreferredCache();
    if (!s) throw m(rt);
    o.environment = s, o.realm = i?.utid || bo(e.idTokenClaims) || "", o.localAccountId = i?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
    let a = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn, c = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
    if (o.username = a || c || "", o.name = e.idTokenClaims?.name || "", o.cloudGraphHostName = e.cloudGraphHostName, o.msGraphHost = e.msGraphHost, e.tenantProfiles) o.tenantProfiles = e.tenantProfiles;
    else {
      let l = vn(e.homeAccountId, o.localAccountId, o.realm, e.idTokenClaims);
      o.tenantProfiles = [l];
    }
    return o;
  }
  static createFromAccountInfo(e, t, n) {
    let o = new r7();
    return o.authorityType = e.authorityType || gr.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.cloudGraphHostName = t, o.msGraphHost = n, o.tenantProfiles = Array.from(e.tenantProfiles?.values() || []), o;
  }
  static generateHomeAccountId(e, t, n, o, i) {
    if (!(t === be.Adfs || t === be.Dsts)) {
      if (e) try {
        let s = br(e, o.base64Decode);
        if (s.uid && s.utid) return `${s.uid}.${s.utid}`;
      } catch {
      }
      n.warning("No client info in response");
    }
    return i?.sub || "";
  }
  static isAccountEntity(e) {
    return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : false;
  }
  static accountInfoIsEqual(e, t, n) {
    if (!e || !t) return false;
    let o = true;
    if (n) {
      let i = e.idTokenClaims || {}, s = t.idTokenClaims || {};
      o = i.iat === s.iat && i.nonce === s.nonce;
    }
    return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && o;
  }
};
var No = {};
pt(No, { getDeserializedResponse: () => vs, stripLeadingHashOrQuery: () => nl });
function nl(r38) {
  return r38.startsWith("#/") ? r38.substring(2) : r38.startsWith("#") || r38.startsWith("?") ? r38.substring(1) : r38;
}
function vs(r38) {
  if (!r38 || r38.indexOf("=") < 0) return null;
  try {
    let e = nl(r38), t = Object.fromEntries(new URLSearchParams(e));
    if (t.code || t.error || t.error_description || t.state) return t;
  } catch {
    throw m(qt);
  }
  return null;
}
var b = class r8 {
  get urlString() {
    return this._urlString;
  }
  constructor(e) {
    if (this._urlString = e, !this._urlString) throw N(Ir);
    e.includes("#") || (this._urlString = r8.canonicalizeUri(e));
  }
  static canonicalizeUri(e) {
    if (e) {
      let t = e.toLowerCase();
      return $.endsWith(t, "?") ? t = t.slice(0, -1) : $.endsWith(t, "?/") && (t = t.slice(0, -2)), $.endsWith(t, "/") || (t += "/"), t;
    }
    return e;
  }
  validateAsUri() {
    let e;
    try {
      e = this.getUrlComponents();
    } catch {
      throw N(nt);
    }
    if (!e.HostNameAndPort || !e.PathSegments) throw N(nt);
    if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw N(Sr);
  }
  static appendQueryString(e, t) {
    return t ? e.indexOf("?") < 0 ? `${e}?${t}` : `${e}&${t}` : e;
  }
  static removeHashFromUrl(e) {
    return r8.canonicalizeUri(e.split("#")[0]);
  }
  replaceTenantPath(e) {
    let t = this.getUrlComponents(), n = t.PathSegments;
    return e && n.length !== 0 && (n[0] === Le.COMMON || n[0] === Le.ORGANIZATIONS) && (n[0] = e), r8.constructAuthorityUriFromObject(t);
  }
  getUrlComponents() {
    let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
    if (!t) throw N(nt);
    let n = { Protocol: t[1], HostNameAndPort: t[4], AbsolutePath: t[5], QueryString: t[7] }, o = n.AbsolutePath.split("/");
    return o = o.filter((i) => i && i.length > 0), n.PathSegments = o, n.QueryString && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
  }
  static getDomainFromUrl(e) {
    let t = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = e.match(t);
    if (!n) throw N(nt);
    return n[2];
  }
  static getAbsoluteUrl(e, t) {
    if (e[0] === p.FORWARD_SLASH) {
      let o = new r8(t).getUrlComponents();
      return o.Protocol + "//" + o.HostNameAndPort + e;
    }
    return e;
  }
  static constructAuthorityUriFromObject(e) {
    return new r8(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
  }
  static hashContainsKnownProperties(e) {
    return !!vs(e);
  }
};
var il = { endpointMetadata: { "login.microsoftonline.com": { token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout" }, "login.chinacloudapi.cn": { token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys", issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout" }, "login.microsoftonline.us": { token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token", jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys", issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize", end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout" } }, instanceDiscoveryMetadata: { tenant_discovery_endpoint: "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } }, Rs = il.endpointMetadata, ws = il.instanceDiscoveryMetadata, ks = /* @__PURE__ */ new Set();
ws.metadata.forEach((r38) => {
  r38.aliases.forEach((e) => {
    ks.add(e);
  });
});
function sl(r38, e) {
  let t, n = r38.canonicalAuthority;
  if (n) {
    let o = new b(n).getUrlComponents().HostNameAndPort;
    t = ol(o, r38.cloudDiscoveryMetadata?.metadata, me.CONFIG, e) || ol(o, ws.metadata, me.HARDCODED_VALUES, e) || r38.knownAuthorities;
  }
  return t || [];
}
function ol(r38, e, t, n) {
  if (n?.trace(`getAliasesFromMetadata called with source: ${t}`), r38 && e) {
    let o = Rn(e, r38);
    if (o) return n?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${t}, returning aliases`), o.aliases;
    n?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${t}`);
  }
  return null;
}
function al(r38) {
  return Rn(ws.metadata, r38);
}
function Rn(r38, e) {
  for (let t = 0; t < r38.length; t++) {
    let n = r38[t];
    if (n.aliases.includes(e)) return n;
  }
  return null;
}
var Ps = "cache_quota_exceeded", Mo = "cache_error_unknown";
var Os = { [Ps]: "Exceeded cache storage capacity.", [Mo]: "Unexpected error occurred when using cache storage." }, wn = class r9 extends Error {
  constructor(e, t) {
    let n = t || (Os[e] ? Os[e] : Os[Mo]);
    super(`${e}: ${n}`), Object.setPrototypeOf(this, r9.prototype), this.name = "CacheError", this.errorCode = e, this.errorMessage = n;
  }
};
function cl(r38) {
  return r38 instanceof Error ? r38.name === "QuotaExceededError" || r38.name === "NS_ERROR_DOM_QUOTA_REACHED" || r38.message.includes("exceeded the quota") ? new wn(Ps) : new wn(r38.name, r38.message) : new wn(Mo);
}
var Rt = class r10 {
  constructor(e, t, n, o) {
    this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Eo, Ar), this.staticAuthorityOptions = o;
  }
  getAllAccounts(e, t) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(t || {}, e), e, t);
  }
  getAccountInfoFilteredBy(e, t) {
    let n = this.getAllAccounts(t, e);
    return n.length > 1 ? n.sort((i) => i.idTokenClaims ? -1 : 1)[0] : n.length === 1 ? n[0] : null;
  }
  getBaseAccountInfo(e, t) {
    let n = this.getAccountsFilteredBy(e, t);
    return n.length > 0 ? n[0].getAccountInfo() : null;
  }
  buildTenantProfiles(e, t, n) {
    return e.flatMap((o) => this.getTenantProfilesFromAccountEntity(o, t, n?.tenantId, n));
  }
  getTenantedAccountInfoByFilter(e, t, n, o, i) {
    let s = null, a;
    if (i && !this.tenantProfileMatchesFilter(n, i)) return null;
    let c = this.getIdToken(e, o, t, n.tenantId);
    return c && (a = St(c.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(a, i)) ? null : (s = Oo(e, n, a, c?.secret), s);
  }
  getTenantProfilesFromAccountEntity(e, t, n, o) {
    let i = e.getAccountInfo(), s = i.tenantProfiles || /* @__PURE__ */ new Map(), a = this.getTokenKeys();
    if (n) {
      let l = s.get(n);
      if (l) s = /* @__PURE__ */ new Map([[n, l]]);
      else return [];
    }
    let c = [];
    return s.forEach((l) => {
      let d = this.getTenantedAccountInfoByFilter(i, a, l, t, o);
      d && c.push(d);
    }), c;
  }
  tenantProfileMatchesFilter(e, t) {
    return !(t.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId) || t.name && e.name !== t.name || t.isHomeTenant !== void 0 && e.isHomeTenant !== t.isHomeTenant);
  }
  idTokenClaimsMatchTenantProfileFilter(e, t) {
    return !(t && (t.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId) || t.loginHint && !this.matchLoginHintFromTokenClaims(e, t.loginHint) || t.username && !this.matchUsername(e.preferred_username, t.username) || t.name && !this.matchName(e, t.name) || t.sid && !this.matchSid(e, t.sid)));
  }
  async saveCacheRecord(e, t, n) {
    if (!e) throw m(Wt);
    try {
      e.account && this.setAccount(e.account, t), e.idToken && n?.idToken !== false && this.setIdTokenCredential(e.idToken, t), e.accessToken && n?.accessToken !== false && await this.saveAccessToken(e.accessToken, t), e.refreshToken && n?.refreshToken !== false && this.setRefreshTokenCredential(e.refreshToken, t), e.appMetadata && this.setAppMetadata(e.appMetadata, t);
    } catch (o) {
      throw this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), o instanceof w ? o : cl(o);
    }
  }
  async saveAccessToken(e, t) {
    let n = { clientId: e.clientId, credentialType: e.credentialType, environment: e.environment, homeAccountId: e.homeAccountId, realm: e.realm, tokenType: e.tokenType, requestedClaimsHash: e.requestedClaimsHash }, o = this.getTokenKeys(), i = ke.fromString(e.target);
    o.accessToken.forEach((s) => {
      if (!this.accessTokenKeyMatchesFilter(s, n, false)) return;
      let a = this.getAccessTokenCredential(s, t);
      a && this.credentialMatchesFilter(a, n) && ke.fromString(a.target).intersectingScopeSets(i) && this.removeAccessToken(s, t);
    }), this.setAccessTokenCredential(e, t);
  }
  getAccountsFilteredBy(e, t) {
    let n = this.getAccountKeys(), o = [];
    return n.forEach((i) => {
      if (!this.isAccountKey(i, e.homeAccountId)) return;
      let s = this.getAccount(i, t, this.commonLogger);
      if (!s || e.homeAccountId && !this.matchHomeAccountId(s, e.homeAccountId) || e.username && !this.matchUsername(s.username, e.username) || e.environment && !this.matchEnvironment(s, e.environment) || e.realm && !this.matchRealm(s, e.realm) || e.nativeAccountId && !this.matchNativeAccountId(s, e.nativeAccountId) || e.authorityType && !this.matchAuthorityType(s, e.authorityType)) return;
      let a = { localAccountId: e?.localAccountId, name: e?.name }, c = s.tenantProfiles?.filter((l) => this.tenantProfileMatchesFilter(l, a));
      c && c.length === 0 || o.push(s);
    }), o;
  }
  isAccountKey(e, t, n) {
    return !(e.split(V.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || n && !e.toLowerCase().includes(n.toLowerCase()));
  }
  isCredentialKey(e) {
    if (e.split(V.CACHE_KEY_SEPARATOR).length < 6) return false;
    let t = e.toLowerCase();
    if (t.indexOf(D.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(D.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(D.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(D.REFRESH_TOKEN.toLowerCase()) === -1) return false;
    if (t.indexOf(D.REFRESH_TOKEN.toLowerCase()) > -1) {
      let n = `${D.REFRESH_TOKEN}${V.CACHE_KEY_SEPARATOR}${this.clientId}${V.CACHE_KEY_SEPARATOR}`, o = `${D.REFRESH_TOKEN}${V.CACHE_KEY_SEPARATOR}${mt}${V.CACHE_KEY_SEPARATOR}`;
      if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1) return false;
    } else if (t.indexOf(this.clientId.toLowerCase()) === -1) return false;
    return true;
  }
  credentialMatchesFilter(e, t) {
    return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === D.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === O.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
  }
  getAppMetadataFilteredBy(e) {
    let t = this.getKeys(), n = {};
    return t.forEach((o) => {
      if (!this.isAppMetadata(o)) return;
      let i = this.getAppMetadata(o);
      i && (e.environment && !this.matchEnvironment(i, e.environment) || e.clientId && !this.matchClientId(i, e.clientId) || (n[o] = i));
    }), n;
  }
  getAuthorityMetadataByAlias(e) {
    let t = this.getAuthorityMetadataKeys(), n = null;
    return t.forEach((o) => {
      if (!this.isAuthorityMetadata(o) || o.indexOf(this.clientId) === -1) return;
      let i = this.getAuthorityMetadata(o);
      i && i.aliases.indexOf(e) !== -1 && (n = i);
    }), n;
  }
  async removeAllAccounts(e) {
    let t = this.getAccountKeys(), n = [];
    t.forEach((o) => {
      n.push(this.removeAccount(o, e));
    }), await Promise.all(n);
  }
  async removeAccount(e, t) {
    let n = this.getAccount(e, t, this.commonLogger);
    n && (await this.removeAccountContext(n, t), this.removeItem(e, t));
  }
  async removeAccountContext(e, t) {
    let n = this.getTokenKeys(), o = e.generateAccountId();
    n.idToken.forEach((i) => {
      i.indexOf(o) === 0 && this.removeIdToken(i, t);
    }), n.accessToken.forEach((i) => {
      i.indexOf(o) === 0 && this.removeAccessToken(i, t);
    }), n.refreshToken.forEach((i) => {
      i.indexOf(o) === 0 && this.removeRefreshToken(i, t);
    }), this.getKeys().forEach((i) => {
      i.includes(o) && this.removeItem(i, t);
    });
  }
  updateOutdatedCachedAccount(e, t, n, o) {
    if (t && t.isSingleTenant()) {
      this.commonLogger?.verbose("updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity");
      let i = this.getAccountKeys().filter((d) => d.startsWith(t.homeAccountId)), s = [];
      i.forEach((d) => {
        let u = this.getCachedAccountEntity(d, n);
        u && s.push(u);
      });
      let a = s.find((d) => _n(d.realm, d.homeAccountId)) || s[0];
      a.tenantProfiles = s.map((d) => ({ tenantId: d.realm, localAccountId: d.localAccountId, name: d.name, isHomeTenant: _n(d.realm, d.homeAccountId) }));
      let c = r10.toObject(new ee(), { ...a }), l = c.generateAccountKey();
      return i.forEach((d) => {
        d !== l && this.removeOutdatedAccount(e, n);
      }), this.setAccount(c, n), o?.verbose("Updated an outdated account entity in the cache"), c;
    }
    return t;
  }
  removeAccessToken(e, t) {
    let n = this.getAccessTokenCredential(e, t);
    if (this.removeItem(e, t), !n || n.credentialType.toLowerCase() !== D.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || n.tokenType !== O.POP) return;
    let o = n.keyId;
    o && this.cryptoImpl.removeTokenBindingKey(o).catch(() => {
      this.commonLogger.error("Binding key could not be removed");
    });
  }
  removeAppMetadata(e) {
    return this.getKeys().forEach((n) => {
      this.isAppMetadata(n) && this.removeItem(n, e);
    }), true;
  }
  readAccountFromCache(e, t) {
    let n = ee.generateAccountCacheKey(e);
    return this.getAccount(n, t, this.commonLogger);
  }
  getIdToken(e, t, n, o, i) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    let s = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: D.ID_TOKEN, clientId: this.clientId, realm: o }, a = this.getIdTokensByFilter(s, t, n), c = a.size;
    if (c < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;
    if (c > 1) {
      let l = a;
      if (!o) {
        let d = /* @__PURE__ */ new Map();
        a.forEach((g, f) => {
          g.realm === e.tenantId && d.set(f, g);
        });
        let u = d.size;
        if (u < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), a.values().next().value;
        if (u === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), d.values().next().value;
        l = d;
      }
      return this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), l.forEach((d, u) => {
        this.removeIdToken(u, t);
      }), i && t && i.addFields({ multiMatchedID: a.size }, t), null;
    }
    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), a.values().next().value;
  }
  getIdTokensByFilter(e, t, n) {
    let o = n && n.idToken || this.getTokenKeys().idToken, i = /* @__PURE__ */ new Map();
    return o.forEach((s) => {
      if (!this.idTokenKeyMatchesFilter(s, { clientId: this.clientId, ...e })) return;
      let a = this.getIdTokenCredential(s, t);
      a && this.credentialMatchesFilter(a, e) && i.set(s, a);
    }), i;
  }
  idTokenKeyMatchesFilter(e, t) {
    let n = e.toLowerCase();
    return !(t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1);
  }
  removeIdToken(e, t) {
    this.removeItem(e, t);
  }
  removeRefreshToken(e, t) {
    this.removeItem(e, t);
  }
  getAccessToken(e, t, n, o, i) {
    this.commonLogger.trace("CacheManager - getAccessToken called");
    let s = ke.createSearchScopes(t.scopes), a = t.authenticationScheme || O.BEARER, c = a && a.toLowerCase() !== O.BEARER.toLowerCase() ? D.ACCESS_TOKEN_WITH_AUTH_SCHEME : D.ACCESS_TOKEN, l = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: c, clientId: this.clientId, realm: o || e.tenantId, target: s, tokenType: a, keyId: t.sshKid, requestedClaimsHash: t.requestedClaimsHash }, d = n && n.accessToken || this.getTokenKeys().accessToken, u = [];
    d.forEach((f) => {
      if (this.accessTokenKeyMatchesFilter(f, l, true)) {
        let A = this.getAccessTokenCredential(f, t.correlationId);
        A && this.credentialMatchesFilter(A, l) && u.push(A);
      }
    });
    let g = u.length;
    return g < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : g > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), u.forEach((f) => {
      this.removeAccessToken(Sn(f), t.correlationId);
    }), i && t.correlationId && i.addFields({ multiMatchedAT: u.length }, t.correlationId), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), u[0]);
  }
  accessTokenKeyMatchesFilter(e, t, n) {
    let o = e.toLowerCase();
    if (t.clientId && o.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && o.indexOf(t.homeAccountId.toLowerCase()) === -1 || t.realm && o.indexOf(t.realm.toLowerCase()) === -1 || t.requestedClaimsHash && o.indexOf(t.requestedClaimsHash.toLowerCase()) === -1) return false;
    if (t.target) {
      let i = t.target.asArray();
      for (let s = 0; s < i.length; s++) {
        if (n && !o.includes(i[s].toLowerCase())) return false;
        if (!n && o.includes(i[s].toLowerCase())) return true;
      }
    }
    return true;
  }
  getAccessTokensByFilter(e, t) {
    let n = this.getTokenKeys(), o = [];
    return n.accessToken.forEach((i) => {
      if (!this.accessTokenKeyMatchesFilter(i, e, true)) return;
      let s = this.getAccessTokenCredential(i, t);
      s && this.credentialMatchesFilter(s, e) && o.push(s);
    }), o;
  }
  getRefreshToken(e, t, n, o, i) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    let s = t ? mt : void 0, a = { homeAccountId: e.homeAccountId, environment: e.environment, credentialType: D.REFRESH_TOKEN, clientId: this.clientId, familyId: s }, c = o && o.refreshToken || this.getTokenKeys().refreshToken, l = [];
    c.forEach((u) => {
      if (this.refreshTokenKeyMatchesFilter(u, a)) {
        let g = this.getRefreshTokenCredential(u, n);
        g && this.credentialMatchesFilter(g, a) && l.push(g);
      }
    });
    let d = l.length;
    return d < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (d > 1 && i && n && i.addFields({ multiMatchedRT: d }, n), this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), l[0]);
  }
  refreshTokenKeyMatchesFilter(e, t) {
    let n = e.toLowerCase();
    return !(t.familyId && n.indexOf(t.familyId.toLowerCase()) === -1 || !t.familyId && t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1);
  }
  readAppMetadataFromCache(e) {
    let t = { environment: e, clientId: this.clientId }, n = this.getAppMetadataFilteredBy(t), o = Object.keys(n).map((s) => n[s]), i = o.length;
    if (i < 1) return null;
    if (i > 1) throw m(Kt);
    return o[0];
  }
  isAppMetadataFOCI(e) {
    let t = this.readAppMetadataFromCache(e);
    return !!(t && t.familyId === mt);
  }
  matchHomeAccountId(e, t) {
    return typeof e.homeAccountId == "string" && t === e.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(e, t) {
    let n = e.oid || e.sub;
    return t === n;
  }
  matchLocalAccountIdFromTenantProfile(e, t) {
    return e.localAccountId === t;
  }
  matchName(e, t) {
    return t.toLowerCase() === e.name?.toLowerCase();
  }
  matchUsername(e, t) {
    return !!(e && typeof e == "string" && t?.toLowerCase() === e.toLowerCase());
  }
  matchUserAssertionHash(e, t) {
    return !!(e.userAssertionHash && t === e.userAssertionHash);
  }
  matchEnvironment(e, t) {
    if (this.staticAuthorityOptions) {
      let o = sl(this.staticAuthorityOptions, this.commonLogger);
      if (o.includes(t) && o.includes(e.environment)) return true;
    }
    let n = this.getAuthorityMetadataByAlias(t);
    return !!(n && n.aliases.indexOf(e.environment) > -1);
  }
  matchCredentialType(e, t) {
    return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
  }
  matchClientId(e, t) {
    return !!(e.clientId && t === e.clientId);
  }
  matchFamilyId(e, t) {
    return !!(e.familyId && t === e.familyId);
  }
  matchRealm(e, t) {
    return e.realm?.toLowerCase() === t.toLowerCase();
  }
  matchNativeAccountId(e, t) {
    return !!(e.nativeAccountId && t === e.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(e, t) {
    return e.login_hint === t || e.preferred_username === t || e.upn === t;
  }
  matchSid(e, t) {
    return e.sid === t;
  }
  matchAuthorityType(e, t) {
    return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase());
  }
  matchTarget(e, t) {
    return e.credentialType !== D.ACCESS_TOKEN && e.credentialType !== D.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target ? false : ke.fromString(e.target).containsScopeSet(t);
  }
  matchTokenType(e, t) {
    return !!(e.tokenType && e.tokenType === t);
  }
  matchKeyId(e, t) {
    return !!(e.keyId && e.keyId === t);
  }
  isAppMetadata(e) {
    return e.indexOf(tn) !== -1;
  }
  isAuthorityMetadata(e) {
    return e.indexOf(Er.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(e) {
    return `${Er.CACHE_KEY}-${this.clientId}-${e}`;
  }
  static toObject(e, t) {
    for (let n in t) e[n] = t[n];
    return e;
  }
}, kn = class extends Rt {
  setAccount() {
    throw m(_);
  }
  getAccount() {
    throw m(_);
  }
  getCachedAccountEntity() {
    throw m(_);
  }
  setIdTokenCredential() {
    throw m(_);
  }
  getIdTokenCredential() {
    throw m(_);
  }
  setAccessTokenCredential() {
    throw m(_);
  }
  getAccessTokenCredential() {
    throw m(_);
  }
  setRefreshTokenCredential() {
    throw m(_);
  }
  getRefreshTokenCredential() {
    throw m(_);
  }
  setAppMetadata() {
    throw m(_);
  }
  getAppMetadata() {
    throw m(_);
  }
  setServerTelemetry() {
    throw m(_);
  }
  getServerTelemetry() {
    throw m(_);
  }
  setAuthorityMetadata() {
    throw m(_);
  }
  getAuthorityMetadata() {
    throw m(_);
  }
  getAuthorityMetadataKeys() {
    throw m(_);
  }
  setThrottlingCache() {
    throw m(_);
  }
  getThrottlingCache() {
    throw m(_);
  }
  removeItem() {
    throw m(_);
  }
  getKeys() {
    throw m(_);
  }
  getAccountKeys() {
    throw m(_);
  }
  getTokenKeys() {
    throw m(_);
  }
  updateCredentialCacheKey() {
    throw m(_);
  }
  removeOutdatedAccount() {
    throw m(_);
  }
};
var Mm = { tokenRenewalOffsetSeconds: As, preventCorsPreflight: false }, Dm = { loggerCallback: () => {
}, piiLoggingEnabled: false, logLevel: k.Info, correlationId: p.EMPTY_STRING }, xm = { claimsBasedCachingEnabled: false }, Um = { async sendGetRequestAsync() {
  throw m(_);
}, async sendPostRequestAsync() {
  throw m(_);
} }, Lm = { sku: p.SKU, version: Ar, cpu: p.EMPTY_STRING, os: p.EMPTY_STRING }, Fm = { clientSecret: p.EMPTY_STRING, clientAssertion: void 0 }, Hm = { azureCloudInstance: Ct.None, tenant: `${p.DEFAULT_COMMON_TENANT}` }, Bm = { application: { appName: "", appVersion: "" } };
function ll({ authOptions: r38, systemOptions: e, loggerOptions: t, cacheOptions: n, storageInterface: o, networkInterface: i, cryptoInterface: s, clientCredentials: a, libraryInfo: c, telemetry: l, serverTelemetryManager: d, persistencePlugin: u, serializableCache: g }) {
  let f = { ...Dm, ...t };
  return { authOptions: qm(r38), systemOptions: { ...Mm, ...e }, loggerOptions: f, cacheOptions: { ...xm, ...n }, storageInterface: o || new kn(r38.clientId, Ts, new $e(f)), networkInterface: i || Um, cryptoInterface: s || Ts, clientCredentials: a || Fm, libraryInfo: { ...Lm, ...c }, telemetry: { ...Bm, ...l }, serverTelemetryManager: d || null, persistencePlugin: u || null, serializableCache: g || null };
}
function qm(r38) {
  return { clientCapabilities: [], azureCloudOptions: Hm, skipAuthorityMetadataCache: false, instanceAware: false, ...r38 };
}
function Pn(r38) {
  return r38.authOptions.authority.options.protocolMode === Be.OIDC;
}
var Ee = { HOME_ACCOUNT_ID: "home_account_id", UPN: "UPN" };
var On = {};
pt(On, { ACCESS_TOKEN: () => $m, BROKER_CLIENT_ID: () => Ho, BROKER_REDIRECT_URI: () => ha, CCS_HEADER: () => Xm, CLAIMS: () => Ms, CLIENT_ASSERTION: () => na, CLIENT_ASSERTION_TYPE: () => oa, CLIENT_ID: () => it, CLIENT_INFO: () => Wm, CLIENT_REQUEST_ID: () => Vs, CLIENT_SECRET: () => ra, CODE: () => Hs, CODE_CHALLENGE: () => Bs, CODE_CHALLENGE_METHOD: () => qs, CODE_VERIFIER: () => Gs, DEVICE_CODE: () => ta, DOMAIN_HINT: () => ua, ERROR: () => Gm, ERROR_DESCRIPTION: () => Vm, EXPIRES_IN: () => zm, FOCI: () => Jm, GRANT_TYPE: () => Ns, ID_TOKEN: () => Km, ID_TOKEN_HINT: () => ea, LOGIN_HINT: () => da, LOGOUT_HINT: () => ca, NATIVE_BROKER: () => aa, NONCE: () => Ls, OBO_ASSERTION: () => ia, ON_BEHALF_OF: () => Qm, POST_LOGOUT_URI: () => Zs, PROMPT: () => Fs, REDIRECT_URI: () => Do, REFRESH_TOKEN: () => xs, REFRESH_TOKEN_EXPIRES_IN: () => Ym, REQUESTED_TOKEN_USE: () => sa, REQ_CNF: () => Lo, RESPONSE_MODE: () => bs, RESPONSE_TYPE: () => xo, RETURN_SPA_CODE: () => Fo, SCOPE: () => Ds, SESSION_STATE: () => jm, SID: () => la, STATE: () => Us, TOKEN_TYPE: () => Uo, X_APP_NAME: () => Js, X_APP_VER: () => Xs, X_CLIENT_CPU: () => Ys, X_CLIENT_CURR_TELEM: () => js, X_CLIENT_EXTRA_SKU: () => Zm, X_CLIENT_LAST_TELEM: () => Ws, X_CLIENT_OS: () => zs, X_CLIENT_SKU: () => $s, X_CLIENT_VER: () => Ks, X_MS_LIB_CAPABILITY: () => Qs });
var it = "client_id", Do = "redirect_uri", xo = "response_type", bs = "response_mode", Ns = "grant_type", Ms = "claims", Ds = "scope", Gm = "error", Vm = "error_description", $m = "access_token", Km = "id_token", xs = "refresh_token", zm = "expires_in", Ym = "refresh_token_expires_in", Us = "state", Ls = "nonce", Fs = "prompt", jm = "session_state", Wm = "client_info", Hs = "code", Bs = "code_challenge", qs = "code_challenge_method", Gs = "code_verifier", Vs = "client-request-id", $s = "x-client-SKU", Ks = "x-client-VER", zs = "x-client-OS", Ys = "x-client-CPU", js = "x-client-current-telemetry", Ws = "x-client-last-telemetry", Qs = "x-ms-lib-capability", Js = "x-app-name", Xs = "x-app-ver", Zs = "post_logout_redirect_uri", ea = "id_token_hint", ta = "device_code", ra = "client_secret", na = "client_assertion", oa = "client_assertion_type", Uo = "token_type", Lo = "req_cnf", ia = "assertion", sa = "requested_token_use", Qm = "on_behalf_of", Jm = "foci", Xm = "X-AnchorMailbox", Fo = "return_spa_code", aa = "nativebroker", ca = "logout_hint", la = "sid", da = "login_hint", ua = "domain_hint", Zm = "x-client-xtra-sku", Ho = "brk_client_id", ha = "brk_redirect_uri";
var Ke = class {
  static validateRedirectUri(e) {
    if (!e) throw N(Cr);
  }
  static validatePrompt(e) {
    let t = [];
    for (let n in Je) t.push(Je[n]);
    if (t.indexOf(e) < 0) throw N(vr);
  }
  static validateClaims(e) {
    try {
      JSON.parse(e);
    } catch {
      throw N(It);
    }
  }
  static validateCodeChallengeParams(e, t) {
    if (!e || !t) throw N(_t);
    this.validateCodeChallengeMethod(t);
  }
  static validateCodeChallengeMethod(e) {
    if ([mr.PLAIN, mr.S256].indexOf(e) < 0) throw N(kr);
  }
};
function eg(r38, e, t) {
  if (!e) return;
  let n = r38.get(it);
  n && r38.has(Ho) && t?.addFields({ embeddedClientId: n, embeddedRedirectUri: r38.get(Do) }, e);
}
var te = class {
  constructor(e, t) {
    this.parameters = /* @__PURE__ */ new Map(), this.performanceClient = t, this.correlationId = e;
  }
  addResponseTypeCode() {
    this.parameters.set(xo, encodeURIComponent(p.CODE_RESPONSE_TYPE));
  }
  addResponseTypeForTokenAndIdToken() {
    this.parameters.set(xo, encodeURIComponent(`${p.TOKEN_RESPONSE_TYPE} ${p.ID_TOKEN_RESPONSE_TYPE}`));
  }
  addResponseMode(e) {
    this.parameters.set(bs, encodeURIComponent(e || ft.QUERY));
  }
  addNativeBroker() {
    this.parameters.set(aa, encodeURIComponent("1"));
  }
  addScopes(e, t = true, n = Oe) {
    t && !n.includes("openid") && !e.includes("openid") && n.push("openid");
    let o = t ? [...e || [], ...n] : e || [], i = new ke(o);
    this.parameters.set(Ds, encodeURIComponent(i.printScopes()));
  }
  addClientId(e) {
    this.parameters.set(it, encodeURIComponent(e));
  }
  addRedirectUri(e) {
    Ke.validateRedirectUri(e), this.parameters.set(Do, encodeURIComponent(e));
  }
  addPostLogoutRedirectUri(e) {
    Ke.validateRedirectUri(e), this.parameters.set(Zs, encodeURIComponent(e));
  }
  addIdTokenHint(e) {
    this.parameters.set(ea, encodeURIComponent(e));
  }
  addDomainHint(e) {
    this.parameters.set(ua, encodeURIComponent(e));
  }
  addLoginHint(e) {
    this.parameters.set(da, encodeURIComponent(e));
  }
  addCcsUpn(e) {
    this.parameters.set(B.CCS_HEADER, encodeURIComponent(`UPN:${e}`));
  }
  addCcsOid(e) {
    this.parameters.set(B.CCS_HEADER, encodeURIComponent(`Oid:${e.uid}@${e.utid}`));
  }
  addSid(e) {
    this.parameters.set("sid", encodeURIComponent(e));
  }
  addClaims(e, t) {
    let n = this.addClientCapabilitiesToClaims(e, t);
    Ke.validateClaims(n), this.parameters.set(Ms, encodeURIComponent(n));
  }
  addCorrelationId(e) {
    this.parameters.set(Vs, encodeURIComponent(e));
  }
  addLibraryInfo(e) {
    this.parameters.set($s, e.sku), this.parameters.set(Ks, e.version), e.os && this.parameters.set(zs, e.os), e.cpu && this.parameters.set(Ys, e.cpu);
  }
  addApplicationTelemetry(e) {
    e?.appName && this.parameters.set(Js, e.appName), e?.appVersion && this.parameters.set(Xs, e.appVersion);
  }
  addPrompt(e) {
    Ke.validatePrompt(e), this.parameters.set(`${Fs}`, encodeURIComponent(e));
  }
  addState(e) {
    e && this.parameters.set(Us, encodeURIComponent(e));
  }
  addNonce(e) {
    this.parameters.set(Ls, encodeURIComponent(e));
  }
  addCodeChallengeParams(e, t) {
    if (Ke.validateCodeChallengeParams(e, t), e && t) this.parameters.set(Bs, encodeURIComponent(e)), this.parameters.set(qs, encodeURIComponent(t));
    else throw N(_t);
  }
  addAuthorizationCode(e) {
    this.parameters.set(Hs, encodeURIComponent(e));
  }
  addDeviceCode(e) {
    this.parameters.set(ta, encodeURIComponent(e));
  }
  addRefreshToken(e) {
    this.parameters.set(xs, encodeURIComponent(e));
  }
  addCodeVerifier(e) {
    this.parameters.set(Gs, encodeURIComponent(e));
  }
  addClientSecret(e) {
    this.parameters.set(ra, encodeURIComponent(e));
  }
  addClientAssertion(e) {
    e && this.parameters.set(na, encodeURIComponent(e));
  }
  addClientAssertionType(e) {
    e && this.parameters.set(oa, encodeURIComponent(e));
  }
  addOboAssertion(e) {
    this.parameters.set(ia, encodeURIComponent(e));
  }
  addRequestTokenUse(e) {
    this.parameters.set(sa, encodeURIComponent(e));
  }
  addGrantType(e) {
    this.parameters.set(Ns, encodeURIComponent(e));
  }
  addClientInfo() {
    this.parameters.set(el, "1");
  }
  addExtraQueryParameters(e) {
    Object.entries(e).forEach(([t, n]) => {
      !this.parameters.has(t) && n && this.parameters.set(t, n);
    });
  }
  addClientCapabilitiesToClaims(e, t) {
    let n;
    if (!e) n = {};
    else try {
      n = JSON.parse(e);
    } catch {
      throw N(It);
    }
    return t && t.length > 0 && (n.hasOwnProperty(fr.ACCESS_TOKEN) || (n[fr.ACCESS_TOKEN] = {}), n[fr.ACCESS_TOKEN][fr.XMS_CC] = { values: t }), JSON.stringify(n);
  }
  addUsername(e) {
    this.parameters.set(fo.username, encodeURIComponent(e));
  }
  addPassword(e) {
    this.parameters.set(fo.password, encodeURIComponent(e));
  }
  addPopToken(e) {
    e && (this.parameters.set(Uo, O.POP), this.parameters.set(Lo, encodeURIComponent(e)));
  }
  addSshJwk(e) {
    e && (this.parameters.set(Uo, O.SSH), this.parameters.set(Lo, encodeURIComponent(e)));
  }
  addServerTelemetry(e) {
    this.parameters.set(js, e.generateCurrentRequestHeaderValue()), this.parameters.set(Ws, e.generateLastRequestHeaderValue());
  }
  addThrottling() {
    this.parameters.set(Qs, Ze.X_MS_LIB_CAPABILITY_VALUE);
  }
  addLogoutHint(e) {
    this.parameters.set(ca, encodeURIComponent(e));
  }
  addBrokerParameters(e) {
    let t = {};
    t[Ho] = e.brokerClientId, t[ha] = e.brokerRedirectUri, this.addExtraQueryParameters(t);
  }
  createQueryString() {
    let e = new Array();
    return this.parameters.forEach((t, n) => {
      e.push(`${n}=${t}`);
    }), eg(this.parameters, this.correlationId, this.performanceClient), e.join("&");
  }
};
var qo = {};
pt(qo, { createDiscoveredInstance: () => fa });
function dl(r38) {
  return r38.hasOwnProperty("authorization_endpoint") && r38.hasOwnProperty("token_endpoint") && r38.hasOwnProperty("issuer") && r38.hasOwnProperty("jwks_uri");
}
function ul(r38) {
  return r38.hasOwnProperty("tenant_discovery_endpoint") && r38.hasOwnProperty("metadata");
}
function hl(r38) {
  return r38.hasOwnProperty("error") && r38.hasOwnProperty("error_description");
}
var h = { AcquireTokenByCode: "acquireTokenByCode", AcquireTokenByRefreshToken: "acquireTokenByRefreshToken", AcquireTokenSilent: "acquireTokenSilent", AcquireTokenSilentAsync: "acquireTokenSilentAsync", AcquireTokenPopup: "acquireTokenPopup", AcquireTokenPreRedirect: "acquireTokenPreRedirect", AcquireTokenRedirect: "acquireTokenRedirect", CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint", CryptoOptsSignJwt: "cryptoOptsSignJwt", SilentCacheClientAcquireToken: "silentCacheClientAcquireToken", SilentIframeClientAcquireToken: "silentIframeClientAcquireToken", AwaitConcurrentIframe: "awaitConcurrentIframe", SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken", SsoSilent: "ssoSilent", StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority", FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker", NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken", BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders", NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync", RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint", AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint", BrokerHandhshake: "brokerHandshake", AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker", AcquireTokenByBroker: "acquireTokenByBroker", RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest", RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken", RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken", RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken", RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody", AcquireTokenFromCache: "acquireTokenFromCache", SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken", SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord", AcquireTokenBySilentIframe: "acquireTokenBySilentIframe", InitializeBaseRequest: "initializeBaseRequest", InitializeSilentRequest: "initializeSilentRequest", InitializeClientApplication: "initializeClientApplication", SilentIframeClientTokenHelper: "silentIframeClientTokenHelper", SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest", SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash", SilentHandlerLoadFrame: "silentHandlerLoadFrame", SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync", StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient", StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration", StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest", StandardInteractionClientInitializeAuthorizationCodeRequest: "standardInteractionClientInitializeAuthorizationCodeRequest", GetAuthCodeUrl: "getAuthCodeUrl", HandleCodeResponseFromServer: "handleCodeResponseFromServer", HandleCodeResponse: "handleCodeResponse", UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority", AuthClientAcquireToken: "authClientAcquireToken", AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest", AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody", AuthClientCreateQueryString: "authClientCreateQueryString", PopTokenGenerateCnf: "popTokenGenerateCnf", PopTokenGenerateKid: "popTokenGenerateKid", HandleServerTokenResponse: "handleServerTokenResponse", DeserializeResponse: "deserializeResponse", AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance", AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync", AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources", AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork", AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata", AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork", AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata", AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation", RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion", RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS", RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion", AcquireTokenByCodeAsync: "acquireTokenByCodeAsync", GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork", GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement", HandleRedirectPromiseMeasurement: "handleRedirectPromise", HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise", UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement", UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken", NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake", NativeGenerateAuthResult: "nativeGenerateAuthResult", RemoveHiddenIframe: "removeHiddenIframe", ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims", CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken", GeneratePkceCodes: "generatePkceCodes", GenerateCodeVerifier: "generateCodeVerifier", GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier", Sha256Digest: "sha256Digest", GetRandomValues: "getRandomValues" }, Jv = /* @__PURE__ */ new Map([[h.AcquireTokenByCode, "ATByCode"], [h.AcquireTokenByRefreshToken, "ATByRT"], [h.AcquireTokenSilent, "ATS"], [h.AcquireTokenSilentAsync, "ATSAsync"], [h.AcquireTokenPopup, "ATPopup"], [h.AcquireTokenRedirect, "ATRedirect"], [h.CryptoOptsGetPublicKeyThumbprint, "CryptoGetPKThumb"], [h.CryptoOptsSignJwt, "CryptoSignJwt"], [h.SilentCacheClientAcquireToken, "SltCacheClientAT"], [h.SilentIframeClientAcquireToken, "SltIframeClientAT"], [h.SilentRefreshClientAcquireToken, "SltRClientAT"], [h.SsoSilent, "SsoSlt"], [h.StandardInteractionClientGetDiscoveredAuthority, "StdIntClientGetDiscAuth"], [h.FetchAccountIdWithNativeBroker, "FetchAccIdWithNtvBroker"], [h.NativeInteractionClientAcquireToken, "NtvIntClientAT"], [h.BaseClientCreateTokenRequestHeaders, "BaseClientCreateTReqHead"], [h.NetworkClientSendPostRequestAsync, "NetClientSendPost"], [h.RefreshTokenClientExecutePostToTokenEndpoint, "RTClientExecPost"], [h.AuthorizationCodeClientExecutePostToTokenEndpoint, "AuthCodeClientExecPost"], [h.BrokerHandhshake, "BrokerHandshake"], [h.AcquireTokenByRefreshTokenInBroker, "ATByRTInBroker"], [h.AcquireTokenByBroker, "ATByBroker"], [h.RefreshTokenClientExecuteTokenRequest, "RTClientExecTReq"], [h.RefreshTokenClientAcquireToken, "RTClientAT"], [h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, "RTClientATWithCachedRT"], [h.RefreshTokenClientAcquireTokenByRefreshToken, "RTClientATByRT"], [h.RefreshTokenClientCreateTokenRequestBody, "RTClientCreateTReqBody"], [h.AcquireTokenFromCache, "ATFromCache"], [h.SilentFlowClientAcquireCachedToken, "SltFlowClientATCached"], [h.SilentFlowClientGenerateResultFromCacheRecord, "SltFlowClientGenResFromCache"], [h.AcquireTokenBySilentIframe, "ATBySltIframe"], [h.InitializeBaseRequest, "InitBaseReq"], [h.InitializeSilentRequest, "InitSltReq"], [h.InitializeClientApplication, "InitClientApplication"], [h.SilentIframeClientTokenHelper, "SIClientTHelper"], [h.SilentHandlerInitiateAuthRequest, "SHandlerInitAuthReq"], [h.SilentHandlerMonitorIframeForHash, "SltHandlerMonitorIframeForHash"], [h.SilentHandlerLoadFrame, "SHandlerLoadFrame"], [h.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"], [h.StandardInteractionClientCreateAuthCodeClient, "StdIntClientCreateAuthCodeClient"], [h.StandardInteractionClientGetClientConfiguration, "StdIntClientGetClientConf"], [h.StandardInteractionClientInitializeAuthorizationRequest, "StdIntClientInitAuthReq"], [h.StandardInteractionClientInitializeAuthorizationCodeRequest, "StdIntClientInitAuthCodeReq"], [h.GetAuthCodeUrl, "GetAuthCodeUrl"], [h.HandleCodeResponseFromServer, "HandleCodeResFromServer"], [h.HandleCodeResponse, "HandleCodeResp"], [h.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"], [h.AuthClientAcquireToken, "AuthClientAT"], [h.AuthClientExecuteTokenRequest, "AuthClientExecTReq"], [h.AuthClientCreateTokenRequestBody, "AuthClientCreateTReqBody"], [h.AuthClientCreateQueryString, "AuthClientCreateQueryStr"], [h.PopTokenGenerateCnf, "PopTGenCnf"], [h.PopTokenGenerateKid, "PopTGenKid"], [h.HandleServerTokenResponse, "HandleServerTRes"], [h.DeserializeResponse, "DeserializeRes"], [h.AuthorityFactoryCreateDiscoveredInstance, "AuthFactCreateDiscInst"], [h.AuthorityResolveEndpointsAsync, "AuthResolveEndpointsAsync"], [h.AuthorityResolveEndpointsFromLocalSources, "AuthResolveEndpointsFromLocal"], [h.AuthorityGetCloudDiscoveryMetadataFromNetwork, "AuthGetCDMetaFromNet"], [h.AuthorityUpdateCloudDiscoveryMetadata, "AuthUpdCDMeta"], [h.AuthorityGetEndpointMetadataFromNetwork, "AuthUpdCDMetaFromNet"], [h.AuthorityUpdateEndpointMetadata, "AuthUpdEndpointMeta"], [h.AuthorityUpdateMetadataWithRegionalInformation, "AuthUpdMetaWithRegInfo"], [h.RegionDiscoveryDetectRegion, "RegDiscDetectReg"], [h.RegionDiscoveryGetRegionFromIMDS, "RegDiscGetRegFromIMDS"], [h.RegionDiscoveryGetCurrentVersion, "RegDiscGetCurrentVer"], [h.AcquireTokenByCodeAsync, "ATByCodeAsync"], [h.GetEndpointMetadataFromNetwork, "GetEndpointMetaFromNet"], [h.GetCloudDiscoveryMetadataFromNetworkMeasurement, "GetCDMetaFromNet"], [h.HandleRedirectPromiseMeasurement, "HandleRedirectPromise"], [h.HandleNativeRedirectPromiseMeasurement, "HandleNtvRedirectPromise"], [h.UpdateCloudDiscoveryMetadataMeasurement, "UpdateCDMeta"], [h.UsernamePasswordClientAcquireToken, "UserPassClientAT"], [h.NativeMessageHandlerHandshake, "NtvMsgHandlerHandshake"], [h.NativeGenerateAuthResult, "NtvGenAuthRes"], [h.RemoveHiddenIframe, "RemoveHiddenIframe"], [h.ClearTokensAndKeysWithClaims, "ClearTAndKeysWithClaims"], [h.CacheManagerGetRefreshToken, "CacheManagerGetRT"], [h.GeneratePkceCodes, "GenPkceCodes"], [h.GenerateCodeVerifier, "GenCodeVerifier"], [h.GenerateCodeChallengeFromVerifier, "GenCodeChallengeFromVerifier"], [h.Sha256Digest, "Sha256Digest"], [h.GetRandomValues, "GetRandomValues"]]);
var pl = (r38, e, t, n, o) => (...i) => {
  t.trace(`Executing function ${e}`);
  let s = n?.startMeasurement(e, o);
  if (o) {
    let a = e + "CallCount";
    n?.incrementFields({ [a]: 1 }, o);
  }
  try {
    let a = r38(...i);
    return s?.end({ success: true }), t.trace(`Returning result from ${e}`), a;
  } catch (a) {
    t.trace(`Error occurred in ${e}`);
    try {
      t.trace(JSON.stringify(a));
    } catch {
      t.trace("Unable to print error message.");
    }
    throw s?.end({ success: false }, a), a;
  }
}, v = (r38, e, t, n, o) => (...i) => {
  t.trace(`Executing function ${e}`);
  let s = n?.startMeasurement(e, o);
  if (o) {
    let a = e + "CallCount";
    n?.incrementFields({ [a]: 1 }, o);
  }
  return n?.setPreQueueTime(e, o), r38(...i).then((a) => (t.trace(`Returning result from ${e}`), s?.end({ success: true }), a)).catch((a) => {
    t.trace(`Error occurred in ${e}`);
    try {
      t.trace(JSON.stringify(a));
    } catch {
      t.trace("Unable to print error message.");
    }
    throw s?.end({ success: false }, a), a;
  });
};
var bn = class r11 {
  constructor(e, t, n, o) {
    this.networkInterface = e, this.logger = t, this.performanceClient = n, this.correlationId = o;
  }
  async detectRegion(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryDetectRegion, this.correlationId);
    let n = e;
    if (n) t.region_source = Ut.ENVIRONMENT_VARIABLE;
    else {
      let o = r11.IMDS_OPTIONS;
      try {
        let i = await v(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(p.IMDS_VERSION, o);
        if (i.status === rn.httpSuccess && (n = i.body, t.region_source = Ut.IMDS), i.status === rn.httpBadRequest) {
          let s = await v(this.getCurrentVersion.bind(this), h.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(o);
          if (!s) return t.region_source = Ut.FAILED_AUTO_DETECTION, null;
          let a = await v(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(s, o);
          a.status === rn.httpSuccess && (n = a.body, t.region_source = Ut.IMDS);
        }
      } catch {
        return t.region_source = Ut.FAILED_AUTO_DETECTION, null;
      }
    }
    return n || (t.region_source = Ut.FAILED_AUTO_DETECTION), n || null;
  }
  async getRegionFromIMDS(e, t) {
    return this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${p.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, p.IMDS_TIMEOUT);
  }
  async getCurrentVersion(e) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetCurrentVersion, this.correlationId);
    try {
      let t = await this.networkInterface.sendGetRequestAsync(`${p.IMDS_ENDPOINT}?format=json`, e);
      return t.status === rn.httpBadRequest && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0 ? t.body["newest-versions"][0] : null;
    } catch {
      return null;
    }
  }
};
bn.IMDS_OPTIONS = { headers: { Metadata: "true" } };
var st = class r12 {
  constructor(e, t, n, o, i, s, a, c) {
    this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.managedIdentity = c || false, this.regionDiscovery = new bn(t, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(e) {
    if (e.HostNameAndPort.endsWith(p.CIAM_AUTH_URL)) return be.Ciam;
    let t = e.PathSegments;
    if (t.length) switch (t[0].toLowerCase()) {
      case p.ADFS:
        return be.Adfs;
      case p.DSTS:
        return be.Dsts;
    }
    return be.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(e) {
    this._canonicalAuthority = new b(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);
    throw m(ge);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);
    throw m(ge);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
    throw m(ge);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw m(Xt);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw m(ge);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
    throw m(ge);
  }
  get jwksUri() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);
    throw m(ge);
  }
  canReplaceTenant(e) {
    return e.PathSegments.length === 1 && !r12.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === be.Default && this.protocolMode === Be.AAD;
  }
  replaceTenant(e) {
    return e.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(e) {
    let t = e, o = new b(this.metadata.canonical_authority).getUrlComponents(), i = o.PathSegments;
    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((a, c) => {
      let l = i[c];
      if (c === 0 && this.canReplaceTenant(o)) {
        let d = new b(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        l !== d && (this.logger.verbose(`Replacing tenant domain name ${l} with id ${d}`), l = d);
      }
      a !== l && (t = t.replace(`/${l}/`, `/${a}/`));
    }), this.replaceTenant(t);
  }
  get defaultOpenIdConfigurationEndpoint() {
    let e = this.hostnameAndPort;
    return this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === be.Adfs || this.protocolMode !== Be.AAD && !this.isAliasOfKnownMicrosoftAuthority(e) ? `${this.canonicalAuthority}.well-known/openid-configuration` : `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityResolveEndpointsAsync, this.correlationId);
    let e = this.getCurrentMetadataEntity(), t = await v(this.updateCloudDiscoveryMetadata.bind(this), h.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
    let n = await v(this.updateEndpointMetadata.bind(this), h.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.updateCachedMetadata(e, t, { source: n }), this.performanceClient?.addFields({ cloudDiscoverySource: t, authorityEndpointSource: n }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    return e || (e = { aliases: [], preferred_cache: this.hostnameAndPort, preferred_network: this.hostnameAndPort, canonical_authority: this.canonicalAuthority, authorization_endpoint: "", token_endpoint: "", end_session_endpoint: "", issuer: "", aliasesFromNetwork: false, endpointsFromNetwork: false, expiresAt: To(), jwks_uri: "" }), e;
  }
  updateCachedMetadata(e, t, n) {
    t !== me.CACHE && n?.source !== me.CACHE && (e.expiresAt = To(), e.canonical_authority = this.canonicalAuthority);
    let o = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
    this.cacheManager.setAuthorityMetadata(o, e), this.metadata = e;
  }
  async updateEndpointMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateEndpointMetadata, this.correlationId);
    let t = this.updateEndpointMetadataFromLocalSources(e);
    if (t) {
      if (t.source === me.HARDCODED_VALUES && this.authorityOptions.azureRegionConfiguration?.azureRegion && t.metadata) {
        let o = await v(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata);
        Tr(e, o, false), e.canonical_authority = this.canonicalAuthority;
      }
      return t.source;
    }
    let n = await v(this.getEndpointMetadataFromNetwork.bind(this), h.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (n) return this.authorityOptions.azureRegionConfiguration?.azureRegion && (n = await v(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(n)), Tr(e, n, true), me.NETWORK;
    throw m(Bt, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    let t = this.getEndpointMetadataFromConfig();
    if (t) return this.logger.verbose("Found endpoint metadata in authority configuration"), Tr(e, t, false), { source: me.CONFIG };
    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
    else {
      let o = this.getEndpointMetadataFromHardcodedValues();
      if (o) return Tr(e, o, false), { source: me.HARDCODED_VALUES, metadata: o };
      this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
    }
    let n = Co(e);
    return this.isAuthoritySameType(e) && e.endpointsFromNetwork && !n ? (this.logger.verbose("Found endpoint metadata in the cache."), { source: me.CACHE }) : (n && this.logger.verbose("The metadata entity is expired."), null);
  }
  isAuthoritySameType(e) {
    return new b(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) try {
      return JSON.parse(this.authorityOptions.authorityMetadata);
    } catch {
      throw N(Pr);
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
    let e = {}, t = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${t}`);
    try {
      let n = await this.networkInterface.sendGetRequestAsync(t, e);
      return dl(n.body) ? n.body : (this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null);
    } catch (n) {
      return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${n}`), null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    return this.hostnameAndPort in Rs ? Rs[this.hostnameAndPort] : null;
  }
  async updateMetadataWithRegionalInformation(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
    let t = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (t) {
      if (t !== p.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = mo.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = t, r12.replaceWithRegionalInformation(e, t);
      let n = await v(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), h.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (n) return this.regionDiscoveryMetadata.region_outcome = mo.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = n, r12.replaceWithRegionalInformation(e, n);
      this.regionDiscoveryMetadata.region_outcome = mo.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return e;
  }
  async updateCloudDiscoveryMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
    let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
    if (t) return t;
    let n = await v(this.getCloudDiscoveryMetadataFromNetwork.bind(this), h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (n) return In(e, n, true), me.NETWORK;
    throw N(Or);
  }
  updateCloudDiscoveryMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || p.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || p.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority || p.NOT_APPLICABLE}`);
    let t = this.getCloudDiscoveryMetadataFromConfig();
    if (t) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), In(e, t, false), me.CONFIG;
    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
    else {
      let o = al(this.hostnameAndPort);
      if (o) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), In(e, o, false), me.HARDCODED_VALUES;
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    let n = Co(e);
    return this.isAuthoritySameType(e) && e.aliasesFromNetwork && !n ? (this.logger.verbose("Found cloud discovery metadata in the cache."), me.CACHE) : (n && this.logger.verbose("The metadata entity is expired."), null);
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === be.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), r12.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), t = Rn(e.metadata, this.hostnameAndPort);
        if (this.logger.verbose("Parsed the cloud discovery metadata."), t) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;
        this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
      } catch {
        throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), N(tr);
      }
    }
    return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), r12.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
    let e = `${p.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`, t = {}, n = null;
    try {
      let o = await this.networkInterface.sendGetRequestAsync(e, t), i, s;
      if (ul(o.body)) i = o.body, s = i.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${i.tenant_discovery_endpoint}`);
      else if (hl(o.body)) {
        if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${o.status}`), i = o.body, i.error === p.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${i.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${i.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = [];
      } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), n = Rn(s, this.hostnameAndPort);
    } catch (o) {
      if (o instanceof w) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${o.errorCode}
Error Description: ${o.errorMessage}`);
      else {
        let i = o;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${i.name}
Error Description: ${i.message}`);
      }
      return null;
    }
    return n || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), n = r12.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), n;
  }
  isInKnownAuthorities() {
    return this.authorityOptions.knownAuthorities.filter((t) => t && b.getDomainFromUrl(t).toLowerCase() === this.hostnameAndPort).length > 0;
  }
  static generateAuthority(e, t) {
    let n;
    if (t && t.azureCloudInstance !== Ct.None) {
      let o = t.tenant ? t.tenant : p.DEFAULT_COMMON_TENANT;
      n = `${t.azureCloudInstance}/${o}/`;
    }
    return n || e;
  }
  static createCloudDiscoveryMetadataFromHost(e) {
    return { preferred_network: e, preferred_cache: e, aliases: [e] };
  }
  getPreferredCache() {
    if (this.managedIdentity) return p.DEFAULT_AUTHORITY_HOST;
    if (this.discoveryComplete()) return this.metadata.preferred_cache;
    throw m(ge);
  }
  isAlias(e) {
    return this.metadata.aliases.indexOf(e) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(e) {
    return ks.has(e);
  }
  static isPublicCloudAuthority(e) {
    return p.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
  }
  static buildRegionalAuthorityString(e, t, n) {
    let o = new b(e);
    o.validateAsUri();
    let i = o.getUrlComponents(), s = `${t}.${i.HostNameAndPort}`;
    this.isPublicCloudAuthority(i.HostNameAndPort) && (s = `${t}.${p.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`);
    let a = b.constructAuthorityUriFromObject({ ...o.getUrlComponents(), HostNameAndPort: s }).urlString;
    return n ? `${a}?${n}` : a;
  }
  static replaceWithRegionalInformation(e, t) {
    let n = { ...e };
    return n.authorization_endpoint = r12.buildRegionalAuthorityString(n.authorization_endpoint, t), n.token_endpoint = r12.buildRegionalAuthorityString(n.token_endpoint, t), n.end_session_endpoint && (n.end_session_endpoint = r12.buildRegionalAuthorityString(n.end_session_endpoint, t)), n;
  }
  static transformCIAMAuthority(e) {
    let t = e, o = new b(e).getUrlComponents();
    if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(p.CIAM_AUTH_URL)) {
      let i = o.HostNameAndPort.split(".")[0];
      t = `${t}${i}${p.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return t;
  }
};
st.reservedTenantDomains = /* @__PURE__ */ new Set(["{tenant}", "{tenantid}", Le.COMMON, Le.CONSUMERS, Le.ORGANIZATIONS]);
function fl(r38) {
  let n = new b(r38).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
  switch (n) {
    case Le.COMMON:
    case Le.ORGANIZATIONS:
    case Le.CONSUMERS:
      return;
    default:
      return n;
  }
}
function Bo(r38) {
  return r38.endsWith(p.FORWARD_SLASH) ? r38 : `${r38}${p.FORWARD_SLASH}`;
}
function pa(r38) {
  let e = r38.cloudDiscoveryMetadata, t;
  if (e) try {
    t = JSON.parse(e);
  } catch {
    throw N(tr);
  }
  return { canonicalAuthority: r38.authority ? Bo(r38.authority) : void 0, knownAuthorities: r38.knownAuthorities, cloudDiscoveryMetadata: t };
}
async function fa(r38, e, t, n, o, i, s) {
  s?.addQueueMeasurement(h.AuthorityFactoryCreateDiscoveredInstance, i);
  let a = st.transformCIAMAuthority(Bo(r38)), c = new st(a, e, t, n, o, i, s);
  try {
    return await v(c.resolveEndpointsAsync.bind(c), h.AuthorityResolveEndpointsAsync, o, s, i)(), c;
  } catch {
    throw m(ge);
  }
}
var Ae = class r13 extends w {
  constructor(e, t, n, o, i) {
    super(e, t, n), this.name = "ServerError", this.errorNo = o, this.status = i, Object.setPrototypeOf(this, r13.prototype);
  }
};
var Nn = class r14 {
  static generateThrottlingStorageKey(e) {
    return `${Ze.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, t, n) {
    let o = r14.generateThrottlingStorageKey(t), i = e.getThrottlingCache(o);
    if (i) {
      if (i.throttleTime < Date.now()) {
        e.removeItem(o, n);
        return;
      }
      throw new Ae(i.errorCodes?.join(" ") || p.EMPTY_STRING, i.errorMessage, i.subError);
    }
  }
  static postProcess(e, t, n, o) {
    if (r14.checkResponseStatus(n) || r14.checkResponseForRetryAfter(n)) {
      let i = { throttleTime: r14.calculateThrottleTime(parseInt(n.headers[B.RETRY_AFTER])), error: n.body.error, errorCodes: n.body.error_codes, errorMessage: n.body.error_description, subError: n.body.suberror };
      e.setThrottlingCache(r14.generateThrottlingStorageKey(t), i, o);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || e.status >= 500 && e.status < 600;
  }
  static checkResponseForRetryAfter(e) {
    return e.headers ? e.headers.hasOwnProperty(B.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : false;
  }
  static calculateThrottleTime(e) {
    let t = e <= 0 ? 0 : e, n = Date.now() / 1e3;
    return Math.floor(Math.min(n + (t || Ze.DEFAULT_THROTTLE_TIME_SECONDS), n + Ze.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  }
  static removeThrottle(e, t, n, o) {
    let i = { clientId: t, authority: n.authority, scopes: n.scopes, homeAccountIdentifier: o, claims: n.claims, authenticationScheme: n.authenticationScheme, resourceRequestMethod: n.resourceRequestMethod, resourceRequestUri: n.resourceRequestUri, shrClaims: n.shrClaims, sshKid: n.sshKid }, s = this.generateThrottlingStorageKey(i);
    e.removeItem(s, n.correlationId);
  }
};
var Go = class r15 extends w {
  constructor(e, t, n) {
    super(e.errorCode, e.errorMessage, e.subError), Object.setPrototypeOf(this, r15.prototype), this.name = "NetworkError", this.error = e, this.httpStatus = t, this.responseHeaders = n;
  }
};
var Pe = class {
  constructor(e, t) {
    this.config = ll(e), this.logger = new $e(this.config.loggerOptions, Eo, Ar), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
  }
  createTokenRequestHeaders(e) {
    let t = {};
    if (t[B.CONTENT_TYPE] = p.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
      case Ee.HOME_ACCOUNT_ID:
        try {
          let n = ot(e.credential);
          t[B.CCS_HEADER] = `Oid:${n.uid}@${n.utid}`;
        } catch (n) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + n);
        }
        break;
      case Ee.UPN:
        t[B.CCS_HEADER] = `UPN: ${e.credential}`;
        break;
    }
    return t;
  }
  async executePostToTokenEndpoint(e, t, n, o, i, s) {
    s && this.performanceClient?.addQueueMeasurement(s, i);
    let a = await this.sendPostRequest(o, e, { body: t, headers: n }, i);
    return this.config.serverTelemetryManager && a.status < 500 && a.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), a;
  }
  async sendPostRequest(e, t, n, o) {
    Nn.preProcess(this.cacheManager, e, o);
    let i;
    try {
      i = await v(this.networkClient.sendPostRequestAsync.bind(this.networkClient), h.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, o)(t, n);
      let s = i.headers || {};
      this.performanceClient?.addFields({ refreshTokenSize: i.body.refresh_token?.length || 0, httpVerToken: s[B.X_MS_HTTP_VERSION] || "", requestId: s[B.X_MS_REQUEST_ID] || "" }, o);
    } catch (s) {
      if (s instanceof Go) {
        let a = s.responseHeaders;
        throw a && this.performanceClient?.addFields({ httpVerToken: a[B.X_MS_HTTP_VERSION] || "", requestId: a[B.X_MS_REQUEST_ID] || "", contentTypeHeader: a[B.CONTENT_TYPE] || void 0, contentLengthHeader: a[B.CONTENT_LENGTH] || void 0, httpStatus: s.httpStatus }, o), s.error;
      }
      throw s instanceof w ? s : m(Ht);
    }
    return Nn.postProcess(this.cacheManager, e, i, o), i;
  }
  async updateAuthority(e, t) {
    this.performanceClient?.addQueueMeasurement(h.UpdateTokenEndpointAuthority, t);
    let n = `https://${e}/${this.authority.tenant}/`, o = await fa(n, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
    this.authority = o;
  }
  createTokenQueryParameters(e) {
    let t = new te(e.correlationId, this.performanceClient);
    return e.embeddedClientId && t.addBrokerParameters({ brokerClientId: this.config.authOptions.clientId, brokerRedirectUri: this.config.authOptions.redirectUri }), e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.addCorrelationId(e.correlationId), t.createQueryString();
  }
};
var rr = "no_tokens_found", Vo = "native_account_unavailable", $o = "refresh_token_expired", ml = "interaction_required", gl = "consent_required", El = "login_required", nr = "bad_token";
var Al = [ml, gl, El, nr], rg = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"], Ko = { [rr]: "No refresh token found in the cache. Please sign-in.", [Vo]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.", [$o]: "Refresh token has expired.", [nr]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve." }, ng = { noTokensFoundError: { code: rr, desc: Ko[rr] }, native_account_unavailable: { code: Vo, desc: Ko[Vo] }, bad_token: { code: nr, desc: Ko[nr] } }, ze = class r16 extends w {
  constructor(e, t, n, o, i, s, a, c) {
    super(e, t, n), Object.setPrototypeOf(this, r16.prototype), this.timestamp = o || p.EMPTY_STRING, this.traceId = i || p.EMPTY_STRING, this.correlationId = s || p.EMPTY_STRING, this.claims = a || p.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = c;
  }
};
function ma(r38, e, t) {
  let n = !!r38 && Al.indexOf(r38) > -1, o = !!t && rg.indexOf(t) > -1, i = !!e && Al.some((s) => e.indexOf(s) > -1);
  return n || i || o;
}
function ga(r38) {
  return new ze(r38, Ko[r38]);
}
var zo = class r17 {
  static setRequestState(e, t, n) {
    let o = r17.generateLibraryState(e, n);
    return t ? `${o}${p.RESOURCE_DELIM}${t}` : o;
  }
  static generateLibraryState(e, t) {
    if (!e) throw m(Tt);
    let n = { id: e.createNewGuid() };
    t && (n.meta = t);
    let o = JSON.stringify(n);
    return e.base64Encode(o);
  }
  static parseRequestState(e, t) {
    if (!e) throw m(Tt);
    if (!t) throw m(He);
    try {
      let n = t.split(p.RESOURCE_DELIM), o = n[0], i = n.length > 1 ? n.slice(1).join(p.RESOURCE_DELIM) : p.EMPTY_STRING, s = e.base64Decode(o), a = JSON.parse(s);
      return { userRequestState: i || p.EMPTY_STRING, libraryState: a };
    } catch {
      throw m(He);
    }
  }
};
var og = { SW: "sw", UHW: "uhw" }, at = class {
  constructor(e, t) {
    this.cryptoUtils = e, this.performanceClient = t;
  }
  async generateCnf(e, t) {
    this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateCnf, e.correlationId);
    let n = await v(this.generateKid.bind(this), h.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e), o = this.cryptoUtils.base64UrlEncode(JSON.stringify(n));
    return { kid: n.kid, reqCnfString: o };
  }
  async generateKid(e) {
    return this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateKid, e.correlationId), { kid: await this.cryptoUtils.getPublicKeyThumbprint(e), xms_ksl: og.SW };
  }
  async signPopToken(e, t, n) {
    return this.signPayload(e, t, n);
  }
  async signPayload(e, t, n, o) {
    let { resourceRequestMethod: i, resourceRequestUri: s, shrClaims: a, shrNonce: c, shrOptions: l } = n, u = (s ? new b(s) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({ at: e, ts: we(), m: i?.toUpperCase(), u: u?.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u?.AbsolutePath, q: u?.QueryString ? [[], u.QueryString] : void 0, client_claims: a || void 0, ...o }, t, l, n.correlationId);
  }
};
var ct = class {
  constructor(e, t) {
    this.cache = e, this.hasChanged = t;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
};
function ig(r38) {
  let e = "code=", t = r38.error_uri?.lastIndexOf(e);
  return t && t >= 0 ? r38.error_uri?.substring(t + e.length) : void 0;
}
var de = class r18 {
  constructor(e, t, n, o, i, s, a) {
    this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = i, this.persistencePlugin = s, this.performanceClient = a;
  }
  validateServerAuthorizationCodeResponse(e, t) {
    if (!e.state || !t) throw e.state ? m(At, "Cached State") : m(At, "Server State");
    let n, o;
    try {
      n = decodeURIComponent(e.state);
    } catch {
      throw m(He, e.state);
    }
    try {
      o = decodeURIComponent(t);
    } catch {
      throw m(He, e.state);
    }
    if (n !== o) throw m(Gt);
    if (e.error || e.error_description || e.suberror) {
      let i = ig(e);
      throw ma(e.error, e.error_description, e.suberror) ? new ze(e.error || "", e.error_description, e.suberror, e.timestamp || "", e.trace_id || "", e.correlation_id || "", e.claims || "", i) : new Ae(e.error || "", e.error_description, e.suberror, i);
    }
  }
  validateTokenResponse(e, t) {
    if (e.error || e.error_description || e.suberror) {
      let n = `Error(s): ${e.error_codes || p.NOT_AVAILABLE} - Timestamp: ${e.timestamp || p.NOT_AVAILABLE} - Description: ${e.error_description || p.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id || p.NOT_AVAILABLE} - Trace ID: ${e.trace_id || p.NOT_AVAILABLE}`, o = e.error_codes?.length ? e.error_codes[0] : void 0, i = new Ae(e.error, n, e.suberror, o, e.status);
      if (t && e.status && e.status >= M.SERVER_ERROR_RANGE_START && e.status <= M.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${i}`);
        return;
      } else if (t && e.status && e.status >= M.CLIENT_ERROR_RANGE_START && e.status <= M.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${i}`);
        return;
      }
      throw ma(e.error, e.error_description, e.suberror) ? new ze(e.error, e.error_description, e.suberror, e.timestamp || p.EMPTY_STRING, e.trace_id || p.EMPTY_STRING, e.correlation_id || p.EMPTY_STRING, e.claims || p.EMPTY_STRING, o) : i;
    }
  }
  async handleServerTokenResponse(e, t, n, o, i, s, a, c, l) {
    this.performanceClient?.addQueueMeasurement(h.HandleServerTokenResponse, e.correlation_id);
    let d;
    if (e.id_token) {
      if (d = St(e.id_token || p.EMPTY_STRING, this.cryptoObj.base64Decode), i && i.nonce && d.nonce !== i.nonce) throw m(Vt);
      if (o.maxAge || o.maxAge === 0) {
        let A = d.auth_time;
        if (!A) throw m(et);
        Ao(A, o.maxAge);
      }
    }
    this.homeAccountIdentifier = ee.generateHomeAccountId(e.client_info || p.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, d);
    let u;
    i && i.state && (u = zo.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0;
    let g = this.generateCacheRecord(e, t, n, o, d, s, i), f;
    try {
      if (this.persistencePlugin && this.serializableCache && (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), f = new ct(this.serializableCache, true), await this.persistencePlugin.beforeCacheAccess(f)), a && !c && g.account) {
        let A = g.account.generateAccountKey();
        if (!this.cacheStorage.getAccount(A, o.correlationId, this.logger)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await r18.generateAuthenticationResult(this.cryptoObj, t, g, false, o, d, u, void 0, l);
      }
      await this.cacheStorage.saveCacheRecord(g, o.correlationId, o.storeInCache);
    } finally {
      this.persistencePlugin && this.serializableCache && f && (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(f));
    }
    return r18.generateAuthenticationResult(this.cryptoObj, t, g, false, o, d, u, e, l);
  }
  generateCacheRecord(e, t, n, o, i, s, a) {
    let c = t.getPreferredCache();
    if (!c) throw m(rt);
    let l = bo(i), d, u;
    e.id_token && i && (d = Ss(this.homeAccountIdentifier, c, e.id_token, this.clientId, l || ""), u = yl(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, o.correlationId, i, e.client_info, c, l, a, void 0, this.logger));
    let g = null;
    if (e.access_token) {
      let C = e.scope ? ke.fromString(e.scope) : new ke(o.scopes || []), x = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, ce = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, F = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, j = n + x, Q = j + ce, Qe = F && F > 0 ? n + F : void 0;
      g = Is(this.homeAccountIdentifier, c, e.access_token, this.clientId, l || t.tenant || "", C.printScopes(), j, Q, this.cryptoObj.base64Decode, Qe, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
    }
    let f = null;
    if (e.refresh_token) {
      let C;
      if (e.refresh_token_expires_in) {
        let x = typeof e.refresh_token_expires_in == "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
        C = n + x;
      }
      f = _s(this.homeAccountIdentifier, c, e.refresh_token, this.clientId, e.foci, s, C);
    }
    let A = null;
    return e.foci && (A = { clientId: this.clientId, environment: c, familyId: e.foci }), { account: u, idToken: d, accessToken: g, refreshToken: f, appMetadata: A };
  }
  static async generateAuthenticationResult(e, t, n, o, i, s, a, c, l) {
    let d = p.EMPTY_STRING, u = [], g = null, f, A, C = p.EMPTY_STRING;
    if (n.accessToken) {
      if (n.accessToken.tokenType === O.POP && !i.popKid) {
        let j = new at(e), { secret: Q, keyId: Qe } = n.accessToken;
        if (!Qe) throw m(Zt);
        d = await j.signPopToken(Q, Qe, i);
      } else d = n.accessToken.secret;
      u = ke.fromString(n.accessToken.target).asArray(), g = new Date(Number(n.accessToken.expiresOn) * 1e3), f = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), n.accessToken.refreshOn && (A = new Date(Number(n.accessToken.refreshOn) * 1e3));
    }
    n.appMetadata && (C = n.appMetadata.familyId === mt ? mt : "");
    let x = s?.oid || s?.sub || "", ce = s?.tid || "";
    c?.spa_accountid && n.account && (n.account.nativeAccountId = c?.spa_accountid);
    let F = n.account ? Oo(n.account.getAccountInfo(), void 0, s, n.idToken?.secret) : null;
    return { authority: t.canonicalAuthority, uniqueId: x, tenantId: ce, scopes: u, account: F, idToken: n?.idToken?.secret || "", idTokenClaims: s || {}, accessToken: d, fromCache: o, expiresOn: g, extExpiresOn: f, refreshOn: A, correlationId: i.correlationId, requestId: l || p.EMPTY_STRING, familyId: C, tokenType: n.accessToken?.tokenType || p.EMPTY_STRING, state: a ? a.userRequestState : p.EMPTY_STRING, cloudGraphHostName: n.account?.cloudGraphHostName || p.EMPTY_STRING, msGraphHost: n.account?.msGraphHost || p.EMPTY_STRING, code: c?.spa_code, fromNativeBroker: false };
  }
};
function yl(r38, e, t, n, o, i, s, a, c, l, d, u) {
  u?.verbose("setCachedAccount called");
  let f = r38.getAccountKeys().find((F) => F.startsWith(t)), A = null;
  f && (A = r38.getAccount(f, o, u));
  let C = A || ee.createAccount({ homeAccountId: t, idTokenClaims: i, clientInfo: s, environment: a, cloudGraphHostName: l?.cloud_graph_host_name, msGraphHost: l?.msgraph_host, nativeAccountId: d }, e, n), x = C.tenantProfiles || [], ce = c || C.realm;
  if (ce && !x.find((F) => F.tenantId === ce)) {
    let F = vn(t, C.localAccountId, ce, i);
    x.push(F);
  }
  return C.tenantProfiles = x, C;
}
async function lt(r38, e, t) {
  return typeof r38 == "string" ? r38 : r38({ clientId: e, tokenEndpoint: t });
}
var Nr = class extends Pe {
  constructor(e, t) {
    super(e, t), this.includeRedirectUri = true, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  async getAuthCodeUrl(e) {
    this.performanceClient?.addQueueMeasurement(h.GetAuthCodeUrl, e.correlationId);
    let t = await v(this.createAuthCodeUrlQueryString.bind(this), h.AuthClientCreateQueryString, this.logger, this.performanceClient, e.correlationId)(e);
    return b.appendQueryString(this.authority.authorizationEndpoint, t);
  }
  async acquireToken(e, t) {
    if (this.performanceClient?.addQueueMeasurement(h.AuthClientAcquireToken, e.correlationId), !e.code) throw m(zt);
    let n = we(), o = await v(this.executeTokenRequest.bind(this), h.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e), i = o.headers?.[B.X_MS_REQUEST_ID], s = new de(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
    return s.validateTokenResponse(o.body), v(s.handleServerTokenResponse.bind(s), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(o.body, this.authority, n, e, t, void 0, void 0, void 0, i);
  }
  handleFragmentResponse(e, t) {
    if (new de(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null).validateServerAuthorizationCodeResponse(e, t), !e.code) throw m(Jt);
    return e;
  }
  getLogoutUri(e) {
    if (!e) throw N(wr);
    let t = this.createLogoutUrlQueryString(e);
    return b.appendQueryString(this.authority.endSessionEndpoint, t);
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientExecuteTokenRequest, t.correlationId);
    let n = this.createTokenQueryParameters(t), o = b.appendQueryString(e.tokenEndpoint, n), i = await v(this.createTokenRequestBody.bind(this), h.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t), s;
    if (t.clientInfo) try {
      let l = br(t.clientInfo, this.cryptoUtils.base64Decode);
      s = { credential: `${l.uid}${V.CLIENT_INFO_SEPARATOR}${l.utid}`, type: Ee.HOME_ACCOUNT_ID };
    } catch (l) {
      this.logger.verbose("Could not parse client info for CCS Header: " + l);
    }
    let a = this.createTokenRequestHeaders(s || t.ccsCredential), c = { clientId: t.tokenBodyParameters?.clientId || this.config.authOptions.clientId, authority: e.canonicalAuthority, scopes: t.scopes, claims: t.claims, authenticationScheme: t.authenticationScheme, resourceRequestMethod: t.resourceRequestMethod, resourceRequestUri: t.resourceRequestUri, shrClaims: t.shrClaims, sshKid: t.sshKid };
    return v(this.executePostToTokenEndpoint.bind(this), h.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(o, i, a, c, t.correlationId, h.AuthorizationCodeClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientCreateTokenRequestBody, e.correlationId);
    let t = new te(e.correlationId, this.performanceClient);
    if (t.addClientId(e.embeddedClientId || e.tokenBodyParameters?.[it] || this.config.authOptions.clientId), this.includeRedirectUri ? t.addRedirectUri(e.redirectUri) : Ke.validateRedirectUri(e.redirectUri), t.addScopes(e.scopes, true, this.oidcDefaultScopes), t.addAuthorizationCode(e.code), t.addLibraryInfo(this.config.libraryInfo), t.addApplicationTelemetry(this.config.telemetry.application), t.addThrottling(), this.serverTelemetryManager && !Pn(this.config) && t.addServerTelemetry(this.serverTelemetryManager), e.codeVerifier && t.addCodeVerifier(e.codeVerifier), this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
      let o = this.config.clientCredentials.clientAssertion;
      t.addClientAssertion(await lt(o.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), t.addClientAssertionType(o.assertionType);
    }
    if (t.addGrantType(Xe.AUTHORIZATION_CODE_GRANT), t.addClientInfo(), e.authenticationScheme === O.POP) {
      let o = new at(this.cryptoUtils, this.performanceClient), i;
      e.popKid ? i = this.cryptoUtils.encodeKid(e.popKid) : i = (await v(o.generateCnf.bind(o), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, t.addPopToken(i);
    } else if (e.authenticationScheme === O.SSH) if (e.sshJwk) t.addSshJwk(e.sshJwk);
    else throw N(vt);
    (!$.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities);
    let n;
    if (e.clientInfo) try {
      let o = br(e.clientInfo, this.cryptoUtils.base64Decode);
      n = { credential: `${o.uid}${V.CLIENT_INFO_SEPARATOR}${o.utid}`, type: Ee.HOME_ACCOUNT_ID };
    } catch (o) {
      this.logger.verbose("Could not parse client info for CCS Header: " + o);
    }
    else n = e.ccsCredential;
    if (this.config.systemOptions.preventCorsPreflight && n) switch (n.type) {
      case Ee.HOME_ACCOUNT_ID:
        try {
          let o = ot(n.credential);
          t.addCcsOid(o);
        } catch (o) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
        }
        break;
      case Ee.UPN:
        t.addCcsUpn(n.credential);
        break;
    }
    return e.embeddedClientId && t.addBrokerParameters({ brokerClientId: this.config.authOptions.clientId, brokerRedirectUri: this.config.authOptions.redirectUri }), e.tokenBodyParameters && t.addExtraQueryParameters(e.tokenBodyParameters), e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Fo]) && t.addExtraQueryParameters({ [Fo]: "1" }), t.createQueryString();
  }
  async createAuthCodeUrlQueryString(e) {
    let t = e.correlationId || this.config.cryptoInterface.createNewGuid();
    this.performanceClient?.addQueueMeasurement(h.AuthClientCreateQueryString, t);
    let n = new te(t, this.performanceClient);
    n.addClientId(e.embeddedClientId || e.extraQueryParameters?.[it] || this.config.authOptions.clientId);
    let o = [...e.scopes || [], ...e.extraScopesToConsent || []];
    if (n.addScopes(o, true, this.oidcDefaultScopes), n.addRedirectUri(e.redirectUri), n.addCorrelationId(t), n.addResponseMode(e.responseMode), n.addResponseTypeCode(), n.addLibraryInfo(this.config.libraryInfo), Pn(this.config) || n.addApplicationTelemetry(this.config.telemetry.application), n.addClientInfo(), e.codeChallenge && e.codeChallengeMethod && n.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod), e.prompt && n.addPrompt(e.prompt), e.domainHint && n.addDomainHint(e.domainHint), e.prompt !== Je.SELECT_ACCOUNT) if (e.sid && e.prompt === Je.NONE) this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), n.addSid(e.sid);
    else if (e.account) {
      let i = this.extractAccountSid(e.account), s = this.extractLoginHint(e.account);
      if (s && e.domainHint && (this.logger.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), s = null), s) {
        this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), n.addLoginHint(s);
        try {
          let a = ot(e.account.homeAccountId);
          n.addCcsOid(a);
        } catch {
          this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (i && e.prompt === Je.NONE) {
        this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), n.addSid(i);
        try {
          let a = ot(e.account.homeAccountId);
          n.addCcsOid(a);
        } catch {
          this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (e.loginHint) this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), n.addLoginHint(e.loginHint), n.addCcsUpn(e.loginHint);
      else if (e.account.username) {
        this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), n.addLoginHint(e.account.username);
        try {
          let a = ot(e.account.homeAccountId);
          n.addCcsOid(a);
        } catch {
          this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      }
    } else e.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), n.addLoginHint(e.loginHint), n.addCcsUpn(e.loginHint));
    else this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
    if (e.nonce && n.addNonce(e.nonce), e.state && n.addState(e.state), (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && n.addClaims(e.claims, this.config.authOptions.clientCapabilities), e.embeddedClientId && n.addBrokerParameters({ brokerClientId: this.config.authOptions.clientId, brokerRedirectUri: this.config.authOptions.redirectUri }), this.addExtraQueryParams(e, n), e.nativeBroker && (n.addNativeBroker(), e.authenticationScheme === O.POP)) {
      let i = new at(this.cryptoUtils), s;
      e.popKid ? s = this.cryptoUtils.encodeKid(e.popKid) : s = (await v(i.generateCnf.bind(i), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, n.addPopToken(s);
    }
    return n.createQueryString();
  }
  createLogoutUrlQueryString(e) {
    let t = new te(e.correlationId, this.performanceClient);
    return e.postLogoutRedirectUri && t.addPostLogoutRedirectUri(e.postLogoutRedirectUri), e.correlationId && t.addCorrelationId(e.correlationId), e.idTokenHint && t.addIdTokenHint(e.idTokenHint), e.state && t.addState(e.state), e.logoutHint && t.addLogoutHint(e.logoutHint), this.addExtraQueryParams(e, t), t.createQueryString();
  }
  addExtraQueryParams(e, t) {
    !(e.extraQueryParameters && e.extraQueryParameters.hasOwnProperty("instance_aware")) && this.config.authOptions.instanceAware && (e.extraQueryParameters = e.extraQueryParameters || {}, e.extraQueryParameters.instance_aware = "true"), e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters);
  }
  extractAccountSid(e) {
    return e.idTokenClaims?.sid || null;
  }
  extractLoginHint(e) {
    return e.idTokenClaims?.login_hint || null;
  }
};
var sg = 300, wt = class extends Pe {
  constructor(e, t) {
    super(e, t);
  }
  async acquireToken(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireToken, e.correlationId);
    let t = we(), n = await v(this.executeTokenRequest.bind(this), h.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority), o = n.headers?.[B.X_MS_REQUEST_ID], i = new de(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return i.validateTokenResponse(n.body), v(i.handleServerTokenResponse.bind(i), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, t, e, void 0, void 0, true, e.forceCache, o);
  }
  async acquireTokenByRefreshToken(e) {
    if (!e) throw N(Rr);
    if (this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw m(tt);
    if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
      return await v(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, true);
    } catch (n) {
      let o = n instanceof ze && n.errorCode === rr, i = n instanceof Ae && n.errorCode === po.INVALID_GRANT_ERROR && n.subError === po.CLIENT_MISMATCH_ERROR;
      if (o || i) return v(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
      throw n;
    }
    return v(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, false);
  }
  async acquireTokenWithCachedRefreshToken(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
    let n = pl(this.cacheManager.getRefreshToken.bind(this.cacheManager), h.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
    if (!n) throw ga(rr);
    if (n.expiresOn && yr(n.expiresOn, e.refreshTokenExpirationOffsetSeconds || sg)) throw ga($o);
    let o = { ...e, refreshToken: n.secret, authenticationScheme: e.authenticationScheme || O.BEARER, ccsCredential: { credential: e.account.homeAccountId, type: Ee.HOME_ACCOUNT_ID } };
    try {
      return await v(this.acquireToken.bind(this), h.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(o);
    } catch (i) {
      if (i instanceof ze && i.subError === nr) {
        this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
        let s = Sn(n);
        this.cacheManager.removeRefreshToken(s, e.correlationId);
      }
      throw i;
    }
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientExecuteTokenRequest, e.correlationId);
    let n = this.createTokenQueryParameters(e), o = b.appendQueryString(t.tokenEndpoint, n), i = await v(this.createTokenRequestBody.bind(this), h.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e), s = this.createTokenRequestHeaders(e.ccsCredential), a = { clientId: e.tokenBodyParameters?.clientId || this.config.authOptions.clientId, authority: t.canonicalAuthority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid };
    return v(this.executePostToTokenEndpoint.bind(this), h.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(o, i, s, a, e.correlationId, h.RefreshTokenClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
    let t = e.correlationId, n = new te(t, this.performanceClient);
    if (n.addClientId(e.embeddedClientId || e.tokenBodyParameters?.[it] || this.config.authOptions.clientId), e.redirectUri && n.addRedirectUri(e.redirectUri), n.addScopes(e.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), n.addGrantType(Xe.REFRESH_TOKEN_GRANT), n.addClientInfo(), n.addLibraryInfo(this.config.libraryInfo), n.addApplicationTelemetry(this.config.telemetry.application), n.addThrottling(), this.serverTelemetryManager && !Pn(this.config) && n.addServerTelemetry(this.serverTelemetryManager), n.addRefreshToken(e.refreshToken), this.config.clientCredentials.clientSecret && n.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
      let o = this.config.clientCredentials.clientAssertion;
      n.addClientAssertion(await lt(o.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), n.addClientAssertionType(o.assertionType);
    }
    if (e.authenticationScheme === O.POP) {
      let o = new at(this.cryptoUtils, this.performanceClient), i;
      e.popKid ? i = this.cryptoUtils.encodeKid(e.popKid) : i = (await v(o.generateCnf.bind(o), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, n.addPopToken(i);
    } else if (e.authenticationScheme === O.SSH) if (e.sshJwk) n.addSshJwk(e.sshJwk);
    else throw N(vt);
    if ((!$.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && n.addClaims(e.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
      case Ee.HOME_ACCOUNT_ID:
        try {
          let o = ot(e.ccsCredential.credential);
          n.addCcsOid(o);
        } catch (o) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
        }
        break;
      case Ee.UPN:
        n.addCcsUpn(e.ccsCredential.credential);
        break;
    }
    return e.embeddedClientId && n.addBrokerParameters({ brokerClientId: this.config.authOptions.clientId, brokerRedirectUri: this.config.authOptions.redirectUri }), e.tokenBodyParameters && n.addExtraQueryParameters(e.tokenBodyParameters), n.createQueryString();
  }
};
var Mn = class extends Pe {
  constructor(e, t) {
    super(e, t);
  }
  async acquireToken(e) {
    try {
      let [t, n] = await this.acquireCachedToken({ ...e, scopes: e.scopes?.length ? e.scopes : [...Oe] });
      return n === Fe.PROACTIVELY_REFRESHED && (this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed."), new wt(this.config, this.performanceClient).acquireTokenByRefreshToken(e).catch(() => {
      })), t;
    } catch (t) {
      if (t instanceof er && t.errorCode === Ve) return new wt(this.config, this.performanceClient).acquireTokenByRefreshToken(e);
      throw t;
    }
  }
  async acquireCachedToken(e) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientAcquireCachedToken, e.correlationId);
    let t = Fe.NOT_APPLICABLE;
    if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !$.isEmptyObj(e.claims)) throw this.setCacheOutcome(Fe.FORCE_REFRESH_OR_CLAIMS, e.correlationId), m(Ve);
    if (!e.account) throw m(tt);
    let n = e.account.tenantId || fl(e.authority), o = this.cacheManager.getTokenKeys(), i = this.cacheManager.getAccessToken(e.account, e, o, n, this.performanceClient);
    if (i) {
      if (Cs(i.cachedAt) || yr(i.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(Fe.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), m(Ve);
      i.refreshOn && yr(i.refreshOn, 0) && (t = Fe.PROACTIVELY_REFRESHED);
    } else throw this.setCacheOutcome(Fe.NO_CACHED_ACCESS_TOKEN, e.correlationId), m(Ve);
    let s = e.authority || this.authority.getPreferredCache(), a = { account: this.cacheManager.readAccountFromCache(e.account, e.correlationId), accessToken: i, idToken: this.cacheManager.getIdToken(e.account, e.correlationId, o, n, this.performanceClient), refreshToken: null, appMetadata: this.cacheManager.readAppMetadataFromCache(s) };
    return this.setCacheOutcome(t, e.correlationId), this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [await v(this.generateResultFromCacheRecord.bind(this), h.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(a, e), t];
  }
  setCacheOutcome(e, t) {
    this.serverTelemetryManager?.setCacheOutcome(e), this.performanceClient?.addFields({ cacheOutcome: e }, t), e !== Fe.NOT_APPLICABLE && this.logger.info(`Token refresh is required due to cache outcome: ${e}`);
  }
  async generateResultFromCacheRecord(e, t) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId);
    let n;
    if (e.idToken && (n = St(e.idToken.secret, this.config.cryptoInterface.base64Decode)), t.maxAge || t.maxAge === 0) {
      let o = n?.auth_time;
      if (!o) throw m(et);
      Ao(o, t.maxAge);
    }
    return de.generateAuthenticationResult(this.cryptoUtils, this.authority, e, true, t, n);
  }
};
var Tl = ",", Cl = "|";
function ag(r38) {
  let { skus: e, libraryName: t, libraryVersion: n, extensionName: o, extensionVersion: i } = r38, s = /* @__PURE__ */ new Map([[0, [t, n]], [2, [o, i]]]), a = [];
  if (e?.length) {
    if (a = e.split(Tl), a.length < 4) return e;
  } else a = Array.from({ length: 4 }, () => Cl);
  return s.forEach((c, l) => {
    c.length === 2 && c[0]?.length && c[1]?.length && cg({ skuArr: a, index: l, skuName: c[0], skuVersion: c[1] });
  }), a.join(Tl);
}
function cg(r38) {
  let { skuArr: e, index: t, skuName: n, skuVersion: o } = r38;
  t >= e.length || (e[t] = [n, o].join(Cl));
}
var or = class r19 {
  constructor(e, t) {
    this.cacheOutcome = Fe.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || p.EMPTY_STRING, this.wrapperVer = e.wrapperVer || p.EMPTY_STRING, this.telemetryCacheKey = K.CACHE_KEY + V.CACHE_KEY_SEPARATOR + e.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let e = `${this.apiId}${K.VALUE_SEPARATOR}${this.cacheOutcome}`, t = [this.wrapperSKU, this.wrapperVer], n = this.getNativeBrokerErrorCode();
    n?.length && t.push(`broker_error=${n}`);
    let o = t.join(K.VALUE_SEPARATOR), i = this.getRegionDiscoveryFields(), s = [e, i].join(K.VALUE_SEPARATOR);
    return [K.SCHEMA_VERSION, s, o].join(K.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let e = this.getLastRequests(), t = r19.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(K.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(K.VALUE_SEPARATOR), i = e.errors.length, s = t < i ? K.OVERFLOW_TRUE : K.OVERFLOW_FALSE, a = [i, s].join(K.VALUE_SEPARATOR);
    return [K.SCHEMA_VERSION, e.cacheHits, n, o, a].join(K.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(e) {
    let t = this.getLastRequests();
    t.errors.length >= K.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && e && e.toString() ? e instanceof w ? e.subError ? t.errors.push(e.subError) : e.errorCode ? t.errors.push(e.errorCode) : t.errors.push(e.toString()) : t.errors.push(e.toString()) : t.errors.push(K.UNKNOWN_ERROR), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  incrementCacheHits() {
    let e = this.getLastRequests();
    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), e.cacheHits;
  }
  getLastRequests() {
    let e = { failedRequests: [], errors: [], cacheHits: 0 };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    let e = this.getLastRequests(), t = r19.maxErrorsToSend(e), n = e.errors.length;
    if (t === n) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
    else {
      let o = { failedRequests: e.failedRequests.slice(t * 2), errors: e.errors.slice(t), cacheHits: 0 };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o, this.correlationId);
    }
  }
  static maxErrorsToSend(e) {
    let t, n = 0, o = 0, i = e.errors.length;
    for (t = 0; t < i; t++) {
      let s = e.failedRequests[2 * t] || p.EMPTY_STRING, a = e.failedRequests[2 * t + 1] || p.EMPTY_STRING, c = e.errors[t] || p.EMPTY_STRING;
      if (o += s.toString().length + a.toString().length + c.length + 3, o < K.MAX_LAST_HEADER_BYTES) n += 1;
      else break;
    }
    return n;
  }
  getRegionDiscoveryFields() {
    let e = [];
    return e.push(this.regionUsed || p.EMPTY_STRING), e.push(this.regionSource || p.EMPTY_STRING), e.push(this.regionOutcome || p.EMPTY_STRING), e.join(",");
  }
  updateRegionDiscoveryMetadata(e) {
    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
  setNativeBrokerErrorCode(e) {
    let t = this.getLastRequests();
    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let e = this.getLastRequests();
    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
  }
  static makeExtraSkuString(e) {
    return ag(e);
  }
};
var kt = class {
  static deserializeJSONBlob(e) {
    return e ? JSON.parse(e) : {};
  }
  static deserializeAccounts(e) {
    let t = {};
    return e && Object.keys(e).map(function(n) {
      let o = e[n], i = { homeAccountId: o.home_account_id, environment: o.environment, realm: o.realm, localAccountId: o.local_account_id, username: o.username, authorityType: o.authority_type, name: o.name, clientInfo: o.client_info, lastModificationTime: o.last_modification_time, lastModificationApp: o.last_modification_app, tenantProfiles: o.tenantProfiles?.map((a) => JSON.parse(a)) }, s = new ee();
      Rt.toObject(s, i), t[n] = s;
    }), t;
  }
  static deserializeIdTokens(e) {
    let t = {};
    return e && Object.keys(e).map(function(n) {
      let o = e[n], i = { homeAccountId: o.home_account_id, environment: o.environment, credentialType: o.credential_type, clientId: o.client_id, secret: o.secret, realm: o.realm };
      t[n] = i;
    }), t;
  }
  static deserializeAccessTokens(e) {
    let t = {};
    return e && Object.keys(e).map(function(n) {
      let o = e[n], i = { homeAccountId: o.home_account_id, environment: o.environment, credentialType: o.credential_type, clientId: o.client_id, secret: o.secret, realm: o.realm, target: o.target, cachedAt: o.cached_at, expiresOn: o.expires_on, extendedExpiresOn: o.extended_expires_on, refreshOn: o.refresh_on, keyId: o.key_id, tokenType: o.token_type, requestedClaims: o.requestedClaims, requestedClaimsHash: o.requestedClaimsHash, userAssertionHash: o.userAssertionHash };
      t[n] = i;
    }), t;
  }
  static deserializeRefreshTokens(e) {
    let t = {};
    return e && Object.keys(e).map(function(n) {
      let o = e[n], i = { homeAccountId: o.home_account_id, environment: o.environment, credentialType: o.credential_type, clientId: o.client_id, secret: o.secret, familyId: o.family_id, target: o.target, realm: o.realm };
      t[n] = i;
    }), t;
  }
  static deserializeAppMetadata(e) {
    let t = {};
    return e && Object.keys(e).map(function(n) {
      let o = e[n];
      t[n] = { clientId: o.client_id, environment: o.environment, familyId: o.family_id };
    }), t;
  }
  static deserializeAllCache(e) {
    return { accounts: e.Account ? this.deserializeAccounts(e.Account) : {}, idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {}, accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {}, refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {}, appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {} };
  }
};
var dg = "managed_identity", ug = `https://login.microsoftonline.com/${dg}/`, ye = { AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST", IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT", IDENTITY_HEADER: "IDENTITY_HEADER", IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT", IMDS_ENDPOINT: "IMDS_ENDPOINT", MSI_ENDPOINT: "MSI_ENDPOINT" };
var Ye = { SYSTEM_ASSIGNED: "system-assigned", USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id", USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id", USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id" }, Te = { GET: "get", POST: "post" }, Yo = { SUCCESS_RANGE_START: M.SUCCESS_RANGE_START, SUCCESS_RANGE_END: M.SUCCESS_RANGE_END, SERVER_ERROR: M.SERVER_ERROR };
var Sl = 32, Il = { SHA256: "sha256" }, jo = { CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~" }, ue = { MSAL_SKU: "msal.js.node", JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", AUTHORIZATION_PENDING: "authorization_pending", HTTP_PROTOCOL: "http://", LOCALHOST: "localhost" }, Pt = { acquireTokenSilent: 62, acquireTokenByUsernamePassword: 371, acquireTokenByDeviceCode: 671, acquireTokenByClientCredential: 771, acquireTokenByCode: 871, acquireTokenByRefreshToken: 872 }, Ne = { RSA_256: "RS256", PSS_256: "PS256", X5T_256: "x5t#S256", X5T: "x5t", X5C: "x5c", AUDIENCE: "aud", EXPIRATION_TIME: "exp", ISSUER: "iss", SUBJECT: "sub", NOT_BEFORE: "nbf", JWT_ID: "jti" }, Wo = { INTERVAL_MS: 100, TIMEOUT_MS: 5e3 };
var hg = [M.NOT_FOUND, M.REQUEST_TIMEOUT, M.TOO_MANY_REQUESTS, M.SERVER_ERROR, M.SERVICE_UNAVAILABLE, M.GATEWAY_TIMEOUT];
var Mr = class {
  static getNetworkResponse(e, t, n) {
    return { headers: e, body: t, status: n };
  }
  static urlToHttpOptions(e) {
    let t = { protocol: e.protocol, hostname: e.hostname && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname, hash: e.hash, search: e.search, pathname: e.pathname, path: `${e.pathname || ""}${e.search || ""}`, href: e.href };
    return e.port !== "" && (t.port = Number(e.port)), (e.username || e.password) && (t.auth = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`), t;
  }
};
var Qo = J(require("http"), 1), Ea = J(require("https"), 1);
var Dn = class {
  constructor(e, t) {
    this.proxyUrl = e || "", this.customAgentOptions = t || {};
  }
  async sendGetRequestAsync(e, t, n) {
    return this.proxyUrl ? _l(e, this.proxyUrl, Te.GET, t, this.customAgentOptions, n) : vl(e, Te.GET, t, this.customAgentOptions, n);
  }
  async sendPostRequestAsync(e, t) {
    return this.proxyUrl ? _l(e, this.proxyUrl, Te.POST, t, this.customAgentOptions) : vl(e, Te.POST, t, this.customAgentOptions);
  }
}, _l = (r38, e, t, n, o, i) => {
  let s = new URL(r38), a = new URL(e), c = n?.headers || {}, l = { host: a.hostname, port: a.port, method: "CONNECT", path: s.hostname, headers: c };
  o && Object.keys(o).length && (l.agent = new Qo.default.Agent(o));
  let d = "";
  if (t === Te.POST) {
    let g = n?.body || "";
    d = `Content-Type: application/x-www-form-urlencoded\r
Content-Length: ${g.length}\r
\r
${g}`;
  } else i && (l.timeout = i);
  let u = `${t.toUpperCase()} ${s.href} HTTP/1.1\r
Host: ${s.host}\r
Connection: close\r
` + d + `\r
`;
  return new Promise((g, f) => {
    let A = Qo.default.request(l);
    i && A.on("timeout", () => {
      A.destroy(), f(new Error("Request time out"));
    }), A.end(), A.on("connect", (C, x) => {
      let ce = C?.statusCode || Yo.SERVER_ERROR;
      (ce < Yo.SUCCESS_RANGE_START || ce > Yo.SUCCESS_RANGE_END) && (A.destroy(), x.destroy(), f(new Error(`Error connecting to proxy. Http status code: ${C.statusCode}. Http status message: ${C?.statusMessage || "Unknown"}`))), x.write(u);
      let F = [];
      x.on("data", (j) => {
        F.push(j);
      }), x.on("end", () => {
        let Q = Buffer.concat([...F]).toString().split(`\r
`), Qe = parseInt(Q[0].split(" ")[1]), zf = Q[0].split(" ").slice(2).join(" "), Yf = Q[Q.length - 1], jf = Q.slice(1, Q.length - 2), xc = /* @__PURE__ */ new Map();
        jf.forEach((Wf) => {
          let Fc = Wf.split(new RegExp(/:\s(.*)/s)), Qf = Fc[0], cs = Fc[1];
          try {
            let ro = JSON.parse(cs);
            ro && typeof ro == "object" && (cs = ro);
          } catch {
          }
          xc.set(Qf, cs);
        });
        let Uc = Object.fromEntries(xc), Lc = Mr.getNetworkResponse(Uc, Rl(Qe, zf, Uc, Yf), Qe);
        (Qe < M.SUCCESS_RANGE_START || Qe > M.SUCCESS_RANGE_END) && Lc.body.error !== ue.AUTHORIZATION_PENDING && A.destroy(), g(Lc);
      }), x.on("error", (j) => {
        A.destroy(), x.destroy(), f(new Error(j.toString()));
      });
    }), A.on("error", (C) => {
      A.destroy(), f(new Error(C.toString()));
    });
  });
}, vl = (r38, e, t, n, o) => {
  let i = e === Te.POST, s = t?.body || "", a = new URL(r38), c = t?.headers || {}, l = { method: e, headers: c, ...Mr.urlToHttpOptions(a) };
  return n && Object.keys(n).length && (l.agent = new Ea.default.Agent(n)), i ? l.headers = { ...l.headers, "Content-Length": s.length } : o && (l.timeout = o), new Promise((d, u) => {
    let g;
    l.protocol === "http:" ? g = Qo.default.request(l) : g = Ea.default.request(l), i && g.write(s), o && g.on("timeout", () => {
      g.destroy(), u(new Error("Request time out"));
    }), g.end(), g.on("response", (f) => {
      let A = f.headers, C = f.statusCode, x = f.statusMessage, ce = [];
      f.on("data", (F) => {
        ce.push(F);
      }), f.on("end", () => {
        let F = Buffer.concat([...ce]).toString(), j = A, Q = Mr.getNetworkResponse(j, Rl(C, x, j, F), C);
        (C < M.SUCCESS_RANGE_START || C > M.SUCCESS_RANGE_END) && Q.body.error !== ue.AUTHORIZATION_PENDING && g.destroy(), d(Q);
      });
    }), g.on("error", (f) => {
      g.destroy(), u(new Error(f.toString()));
    });
  });
}, Rl = (r38, e, t, n) => {
  let o;
  try {
    o = JSON.parse(n);
  } catch {
    let s, a;
    r38 >= M.CLIENT_ERROR_RANGE_START && r38 <= M.CLIENT_ERROR_RANGE_END ? (s = "client_error", a = "A client") : r38 >= M.SERVER_ERROR_RANGE_START && r38 <= M.SERVER_ERROR_RANGE_END ? (s = "server_error", a = "A server") : (s = "unknown_error", a = "An unknown"), o = { error: s, error_description: `${a} error occured.
Http status code: ${r38}
Http status message: ${e || "Unknown"}
Headers: ${JSON.stringify(t)}` };
  }
  return o;
};
var Aa = "invalid_file_extension", ya = "invalid_file_path", xn = "invalid_managed_identity_id_type", Ta = "invalid_secret", wl = "missing_client_id", kl = "network_unavailable", Ca = "platform_not_supported", Sa = "unable_to_create_azure_arc", Ia = "unable_to_create_cloud_shell", _a = "unable_to_create_source", va = "unable_to_read_secret_file", Pl = "user_assigned_not_available_at_runtime", Ra = "www_authenticate_header_missing", wa = "www_authenticate_header_unsupported_format", ir = { [ye.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed", [ye.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed", [ye.IMDS_ENDPOINT]: "imds_endpoint_url_malformed", [ye.MSI_ENDPOINT]: "msi_endpoint_url_malformed" };
var pg = { [Aa]: "The file path in the WWW-Authenticate header does not contain a .key file.", [ya]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.", [xn]: "More than one ManagedIdentityIdType was provided.", [Ta]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.", [Ca]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.", [wl]: "A ManagedIdentityId id was not provided.", [ir.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${ye.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`, [ir.IDENTITY_ENDPOINT]: `The Managed Identity's '${ye.IDENTITY_ENDPOINT}' environment variable is malformed.`, [ir.IMDS_ENDPOINT]: `The Managed Identity's '${ye.IMDS_ENDPOINT}' environment variable is malformed.`, [ir.MSI_ENDPOINT]: `The Managed Identity's '${ye.MSI_ENDPOINT}' environment variable is malformed.`, [kl]: "Authentication unavailable. The request to the managed identity endpoint timed out.", [Sa]: "Azure Arc Managed Identities can only be system assigned.", [Ia]: "Cloud Shell Managed Identities can only be system assigned.", [_a]: "Unable to create a Managed Identity source based on environment variables.", [va]: "Unable to read the secret file.", [Pl]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.", [Ra]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.", [wa]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format." }, ka = class r20 extends w {
  constructor(e) {
    super(e, pg[e]), this.name = "ManagedIdentityError", Object.setPrototypeOf(this, r20.prototype);
  }
};
function sr(r38) {
  return new ka(r38);
}
var W = { invalidLoopbackAddressType: { code: "invalid_loopback_server_address_type", desc: "Loopback server address is not type string. This is unexpected." }, unableToLoadRedirectUri: { code: "unable_to_load_redirectUrl", desc: "Loopback server callback was invoked without a url. This is unexpected." }, noAuthCodeInResponse: { code: "no_auth_code_in_response", desc: "No auth code found in the server response. Please check your network trace to determine what happened." }, noLoopbackServerExists: { code: "no_loopback_server_exists", desc: "No loopback server exists yet." }, loopbackServerAlreadyExists: { code: "loopback_server_already_exists", desc: "Loopback server already exists. Cannot create another." }, loopbackServerTimeout: { code: "loopback_server_timeout", desc: "Timed out waiting for auth code listener to be registered." }, stateNotFoundError: { code: "state_not_found", desc: "State not found. Please verify that the request originated from msal." }, thumbprintMissing: { code: "thumbprint_missing_from_client_certificate", desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint." } }, Ie = class r21 extends w {
  constructor(e, t) {
    super(e, t), this.name = "NodeAuthError";
  }
  static createInvalidLoopbackAddressTypeError() {
    return new r21(W.invalidLoopbackAddressType.code, `${W.invalidLoopbackAddressType.desc}`);
  }
  static createUnableToLoadRedirectUrlError() {
    return new r21(W.unableToLoadRedirectUri.code, `${W.unableToLoadRedirectUri.desc}`);
  }
  static createNoAuthCodeInResponseError() {
    return new r21(W.noAuthCodeInResponse.code, `${W.noAuthCodeInResponse.desc}`);
  }
  static createNoLoopbackServerExistsError() {
    return new r21(W.noLoopbackServerExists.code, `${W.noLoopbackServerExists.desc}`);
  }
  static createLoopbackServerAlreadyExistsError() {
    return new r21(W.loopbackServerAlreadyExists.code, `${W.loopbackServerAlreadyExists.desc}`);
  }
  static createLoopbackServerTimeoutError() {
    return new r21(W.loopbackServerTimeout.code, `${W.loopbackServerTimeout.desc}`);
  }
  static createStateNotFoundError() {
    return new r21(W.stateNotFoundError.code, W.stateNotFoundError.desc);
  }
  static createThumbprintMissingError() {
    return new r21(W.thumbprintMissing.code, W.thumbprintMissing.desc);
  }
};
var fg = { clientId: p.EMPTY_STRING, authority: p.DEFAULT_AUTHORITY, clientSecret: p.EMPTY_STRING, clientAssertion: p.EMPTY_STRING, clientCertificate: { thumbprint: p.EMPTY_STRING, thumbprintSha256: p.EMPTY_STRING, privateKey: p.EMPTY_STRING, x5c: p.EMPTY_STRING }, knownAuthorities: [], cloudDiscoveryMetadata: p.EMPTY_STRING, authorityMetadata: p.EMPTY_STRING, clientCapabilities: [], protocolMode: Be.AAD, azureCloudOptions: { azureCloudInstance: Ct.None, tenant: p.EMPTY_STRING }, skipAuthorityMetadataCache: false }, mg = { claimsBasedCachingEnabled: false }, Ol = { loggerCallback: () => {
}, piiLoggingEnabled: false, logLevel: k.Info }, gg = { loggerOptions: Ol, networkClient: new Dn(), proxyUrl: p.EMPTY_STRING, customAgentOptions: {}, disableInternalRetries: false }, Eg = { application: { appName: p.EMPTY_STRING, appVersion: p.EMPTY_STRING } };
function bl({ auth: r38, broker: e, cache: t, system: n, telemetry: o }) {
  let i = { ...gg, networkClient: new Dn(n?.proxyUrl, n?.customAgentOptions), loggerOptions: n?.loggerOptions || Ol, disableInternalRetries: n?.disableInternalRetries || false };
  if (r38.clientCertificate && !r38.clientCertificate.thumbprint && !r38.clientCertificate.thumbprintSha256) throw Ie.createStateNotFoundError();
  return { auth: { ...fg, ...r38 }, broker: { ...e }, cache: { ...mg, ...t }, system: { ...i, ...n }, telemetry: { ...Eg, ...o } };
}
var Nl = J(require("crypto")), Xo = new Uint8Array(256), Jo = Xo.length;
function Pa() {
  return Jo > Xo.length - 16 && (Nl.default.randomFillSync(Xo), Jo = 0), Xo.slice(Jo, Jo += 16);
}
var Ml = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ag(r38) {
  return typeof r38 == "string" && Ml.test(r38);
}
var Dl = Ag;
var re = [];
for (let r38 = 0; r38 < 256; ++r38) re.push((r38 + 256).toString(16).substr(1));
function yg(r38, e = 0) {
  let t = (re[r38[e + 0]] + re[r38[e + 1]] + re[r38[e + 2]] + re[r38[e + 3]] + "-" + re[r38[e + 4]] + re[r38[e + 5]] + "-" + re[r38[e + 6]] + re[r38[e + 7]] + "-" + re[r38[e + 8]] + re[r38[e + 9]] + "-" + re[r38[e + 10]] + re[r38[e + 11]] + re[r38[e + 12]] + re[r38[e + 13]] + re[r38[e + 14]] + re[r38[e + 15]]).toLowerCase();
  if (!Dl(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
var xl = yg;
function Tg(r38, e, t) {
  r38 = r38 || {};
  let n = r38.random || (r38.rng || Pa)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (let o = 0; o < 16; ++o) e[t + o] = n[o];
    return e;
  }
  return xl(n);
}
var Oa = Tg;
var Zo = class {
  generateGuid() {
    return Oa();
  }
  isGuid(e) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
  }
};
var Me = class r22 {
  static base64Encode(e, t) {
    return Buffer.from(e, t).toString("base64");
  }
  static base64EncodeUrl(e, t) {
    return r22.base64Encode(e, t).replace(/=/g, p.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(e) {
    return Buffer.from(e, "base64").toString("utf8");
  }
  static base64DecodeUrl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    for (; t.length % 4; ) t += "=";
    return r22.base64Decode(t);
  }
};
var Ul = J(require("crypto"), 1);
var Dr = class {
  sha256(e) {
    return Ul.default.createHash(Il.SHA256).update(e).digest();
  }
};
var Ll = J(require("crypto"), 1);
var ei = class {
  constructor() {
    this.hashUtils = new Dr();
  }
  async generatePkceCodes() {
    let e = this.generateCodeVerifier(), t = this.generateCodeChallengeFromVerifier(e);
    return { verifier: e, challenge: t };
  }
  generateCodeVerifier() {
    let e = [], t = 256 - 256 % jo.CV_CHARSET.length;
    for (; e.length <= Sl; ) {
      let o = Ll.default.randomBytes(1)[0];
      if (o >= t) continue;
      let i = o % jo.CV_CHARSET.length;
      e.push(jo.CV_CHARSET[i]);
    }
    let n = e.join(p.EMPTY_STRING);
    return Me.base64EncodeUrl(n);
  }
  generateCodeChallengeFromVerifier(e) {
    return Me.base64EncodeUrl(this.hashUtils.sha256(e).toString("base64"), "base64");
  }
};
var dt = class {
  constructor() {
    this.pkceGenerator = new ei(), this.guidGenerator = new Zo(), this.hashUtils = new Dr();
  }
  base64UrlEncode() {
    throw new Error("Method not implemented.");
  }
  encodeKid() {
    throw new Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(e) {
    return Me.base64Encode(e);
  }
  base64Decode(e) {
    return Me.base64Decode(e);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw new Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw new Error("Method not implemented.");
  }
  clearKeystore() {
    throw new Error("Method not implemented.");
  }
  signJwt() {
    throw new Error("Method not implemented.");
  }
  async hashString(e) {
    return Me.base64EncodeUrl(this.hashUtils.sha256(e).toString("base64"), "base64");
  }
};
var xr = class extends Rt {
  constructor(e, t, n, o) {
    super(t, n, e, o), this.cache = {}, this.changeEmitters = [], this.logger = e;
  }
  registerChangeEmitter(e) {
    this.changeEmitters.push(e);
  }
  emitChange() {
    this.changeEmitters.forEach((e) => e.call(null));
  }
  cacheToInMemoryCache(e) {
    let t = { accounts: {}, idTokens: {}, accessTokens: {}, refreshTokens: {}, appMetadata: {} };
    for (let n in e) {
      let o = e[n];
      if (typeof o == "object") if (o instanceof ee) t.accounts[n] = o;
      else if (z.isIdTokenEntity(o)) t.idTokens[n] = o;
      else if (z.isAccessTokenEntity(o)) t.accessTokens[n] = o;
      else if (z.isRefreshTokenEntity(o)) t.refreshTokens[n] = o;
      else if (z.isAppMetadataEntity(n, o)) t.appMetadata[n] = o;
      else continue;
    }
    return t;
  }
  inMemoryCacheToCache(e) {
    let t = this.getCache();
    return t = { ...t, ...e.accounts, ...e.idTokens, ...e.accessTokens, ...e.refreshTokens, ...e.appMetadata }, t;
  }
  getInMemoryCache() {
    return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache());
  }
  setInMemoryCache(e) {
    this.logger.trace("Setting in-memory cache");
    let t = this.inMemoryCacheToCache(e);
    this.setCache(t), this.emitChange();
  }
  getCache() {
    return this.logger.trace("Getting cache key-value store"), this.cache;
  }
  setCache(e) {
    this.logger.trace("Setting cache key value store"), this.cache = e, this.emitChange();
  }
  getItem(e) {
    return this.logger.tracePii(`Item key: ${e}`), this.getCache()[e];
  }
  setItem(e, t) {
    this.logger.tracePii(`Item key: ${e}`);
    let n = this.getCache();
    n[e] = t, this.setCache(n);
  }
  getAccountKeys() {
    let e = this.getInMemoryCache();
    return Object.keys(e.accounts);
  }
  getTokenKeys() {
    let e = this.getInMemoryCache();
    return { idToken: Object.keys(e.idTokens), accessToken: Object.keys(e.accessTokens), refreshToken: Object.keys(e.refreshTokens) };
  }
  getAccount(e) {
    let t = this.getCachedAccountEntity(e);
    return t && ee.isAccountEntity(t) ? this.updateOutdatedCachedAccount(e, t, "") : null;
  }
  getCachedAccountEntity(e) {
    return this.getItem(e) ? Object.assign(new ee(), this.getItem(e)) : null;
  }
  setAccount(e) {
    let t = e.generateAccountKey();
    this.setItem(t, e);
  }
  getIdTokenCredential(e) {
    let t = this.getItem(e);
    return z.isIdTokenEntity(t) ? t : null;
  }
  setIdTokenCredential(e) {
    let t = z.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAccessTokenCredential(e) {
    let t = this.getItem(e);
    return z.isAccessTokenEntity(t) ? t : null;
  }
  setAccessTokenCredential(e) {
    let t = z.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getRefreshTokenCredential(e) {
    let t = this.getItem(e);
    return z.isRefreshTokenEntity(t) ? t : null;
  }
  setRefreshTokenCredential(e) {
    let t = z.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAppMetadata(e) {
    let t = this.getItem(e);
    return z.isAppMetadataEntity(e, t) ? t : null;
  }
  setAppMetadata(e) {
    let t = z.generateAppMetadataKey(e);
    this.setItem(t, e);
  }
  getServerTelemetry(e) {
    let t = this.getItem(e);
    return t && z.isServerTelemetryEntity(e, t) ? t : null;
  }
  setServerTelemetry(e, t) {
    this.setItem(e, t);
  }
  getAuthorityMetadata(e) {
    let t = this.getItem(e);
    return t && z.isAuthorityMetadataEntity(e, t) ? t : null;
  }
  getAuthorityMetadataKeys() {
    return this.getKeys().filter((e) => this.isAuthorityMetadata(e));
  }
  setAuthorityMetadata(e, t) {
    this.setItem(e, t);
  }
  getThrottlingCache(e) {
    let t = this.getItem(e);
    return t && z.isThrottlingEntity(e, t) ? t : null;
  }
  setThrottlingCache(e, t) {
    this.setItem(e, t);
  }
  removeItem(e) {
    this.logger.tracePii(`Item key: ${e}`);
    let t = false, n = this.getCache();
    return n[e] && (delete n[e], t = true), t && (this.setCache(n), this.emitChange()), t;
  }
  removeOutdatedAccount(e) {
    this.removeItem(e);
  }
  containsKey(e) {
    return this.getKeys().includes(e);
  }
  getKeys() {
    this.logger.trace("Retrieving all cache keys");
    let e = this.getCache();
    return [...Object.keys(e)];
  }
  clear() {
    this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach((t) => {
      this.removeItem(t);
    }), this.emitChange();
  }
  static generateInMemoryCache(e) {
    return kt.deserializeAllCache(kt.deserializeJSONBlob(e));
  }
  static generateJsonCache(e) {
    return xt.serializeAllCache(e);
  }
  updateCredentialCacheKey(e, t) {
    let n = z.generateCredentialKey(t);
    if (e !== n) {
      let o = this.getItem(e);
      if (o) return this.removeItem(e), this.setItem(n, o), this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`), n;
      this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
    }
    return e;
  }
};
var Un = { Account: {}, IdToken: {}, AccessToken: {}, RefreshToken: {}, AppMetadata: {} }, Ln = class {
  constructor(e, t, n) {
    this.cacheHasChanged = false, this.storage = e, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), n && (this.persistence = n), this.logger = t;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let e = xt.serializeAllCache(this.storage.getInMemoryCache());
    return this.cacheSnapshot ? (this.logger.trace("Reading cache snapshot from disk"), e = this.mergeState(JSON.parse(this.cacheSnapshot), e)) : this.logger.trace("No cache snapshot to merge"), this.cacheHasChanged = false, JSON.stringify(e);
  }
  deserialize(e) {
    if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = e, this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk");
      let t = kt.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(t);
    } else this.logger.trace("No cache snapshot to deserialize");
  }
  getKVStore() {
    return this.storage.getCache();
  }
  async getAllAccounts(e = new dt().createNewGuid()) {
    this.logger.trace("getAllAccounts called");
    let t;
    try {
      return this.persistence && (t = new ct(this, false), await this.persistence.beforeCacheAccess(t)), this.storage.getAllAccounts(e);
    } finally {
      this.persistence && t && await this.persistence.afterCacheAccess(t);
    }
  }
  async getAccountByHomeId(e) {
    let t = await this.getAllAccounts();
    return e && t && t.length && t.filter((n) => n.homeAccountId === e)[0] || null;
  }
  async getAccountByLocalId(e) {
    let t = await this.getAllAccounts();
    return e && t && t.length && t.filter((n) => n.localAccountId === e)[0] || null;
  }
  async removeAccount(e, t = new dt().createNewGuid()) {
    this.logger.trace("removeAccount called");
    let n;
    try {
      this.persistence && (n = new ct(this, true), await this.persistence.beforeCacheAccess(n)), await this.storage.removeAccount(ee.generateAccountCacheKey(e), t);
    } finally {
      this.persistence && n && await this.persistence.afterCacheAccess(n);
    }
  }
  handleChangeEvent() {
    this.cacheHasChanged = true;
  }
  mergeState(e, t) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    let n = this.mergeRemovals(e, t);
    return this.mergeUpdates(n, t);
  }
  mergeUpdates(e, t) {
    return Object.keys(t).forEach((n) => {
      let o = t[n];
      if (!e.hasOwnProperty(n)) o !== null && (e[n] = o);
      else {
        let i = o !== null, s = typeof o == "object", a = !Array.isArray(o), c = typeof e[n] < "u" && e[n] !== null;
        i && s && a && c ? this.mergeUpdates(e[n], o) : e[n] = o;
      }
    }), e;
  }
  mergeRemovals(e, t) {
    this.logger.trace("Remove updated entries in cache");
    let n = e.Account ? this.mergeRemovalsDict(e.Account, t.Account) : e.Account, o = e.AccessToken ? this.mergeRemovalsDict(e.AccessToken, t.AccessToken) : e.AccessToken, i = e.RefreshToken ? this.mergeRemovalsDict(e.RefreshToken, t.RefreshToken) : e.RefreshToken, s = e.IdToken ? this.mergeRemovalsDict(e.IdToken, t.IdToken) : e.IdToken, a = e.AppMetadata ? this.mergeRemovalsDict(e.AppMetadata, t.AppMetadata) : e.AppMetadata;
    return { ...e, Account: n, AccessToken: o, RefreshToken: i, IdToken: s, AppMetadata: a };
  }
  mergeRemovalsDict(e, t) {
    let n = { ...e };
    return Object.keys(e).forEach((o) => {
      (!t || !t.hasOwnProperty(o)) && delete n[o];
    }), n;
  }
  overlayDefaults(e) {
    return this.logger.trace("Overlaying input cache with the default cache"), { Account: { ...Un.Account, ...e.Account }, IdToken: { ...Un.IdToken, ...e.IdToken }, AccessToken: { ...Un.AccessToken, ...e.AccessToken }, RefreshToken: { ...Un.RefreshToken, ...e.RefreshToken }, AppMetadata: { ...Un.AppMetadata, ...e.AppMetadata } };
  }
};
var gp = J(mp(), 1);
var Kr = class r23 {
  static fromAssertion(e) {
    let t = new r23();
    return t.jwt = e, t;
  }
  static fromCertificate(e, t, n) {
    let o = new r23();
    return o.privateKey = t, o.thumbprint = e, o.useSha256 = false, n && (o.publicCertificate = this.parseCertificate(n)), o;
  }
  static fromCertificateWithSha256Thumbprint(e, t, n) {
    let o = new r23();
    return o.privateKey = t, o.thumbprint = e, o.useSha256 = true, n && (o.publicCertificate = this.parseCertificate(n)), o;
  }
  getJwt(e, t, n) {
    if (this.privateKey && this.thumbprint) return this.jwt && !this.isExpired() && t === this.issuer && n === this.jwtAudience ? this.jwt : this.createJwt(e, t, n);
    if (this.jwt) return this.jwt;
    throw m(le.invalidAssertion);
  }
  createJwt(e, t, n) {
    this.issuer = t, this.jwtAudience = n;
    let o = Z.nowSeconds();
    this.expirationTime = o + 600;
    let s = { alg: this.useSha256 ? Ne.PSS_256 : Ne.RSA_256 }, a = this.useSha256 ? Ne.X5T_256 : Ne.X5T;
    Object.assign(s, { [a]: Me.base64EncodeUrl(this.thumbprint, "hex") }), this.publicCertificate && Object.assign(s, { [Ne.X5C]: this.publicCertificate });
    let c = { [Ne.AUDIENCE]: this.jwtAudience, [Ne.EXPIRATION_TIME]: this.expirationTime, [Ne.ISSUER]: this.issuer, [Ne.SUBJECT]: this.issuer, [Ne.NOT_BEFORE]: o, [Ne.JWT_ID]: e.createNewGuid() };
    return this.jwt = gp.default.sign(c, this.privateKey, { header: s }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < Z.nowSeconds();
  }
  static parseCertificate(e) {
    let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs, n = [], o;
    for (; (o = t.exec(e)) !== null; ) n.push(o[1].replace(/\r*\n/g, p.EMPTY_STRING));
    return n;
  }
};
var Tc = "@azure/msal-node", lr = "2.16.3";
var Yn = class extends Pe {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    this.logger.info("in acquireToken call in username-password client");
    let t = Z.nowSeconds(), n = await this.executeTokenRequest(this.authority, e), o = new de(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(n.body), o.handleServerTokenResponse(n.body, this.authority, t, e);
  }
  async executeTokenRequest(e, t) {
    let n = this.createTokenQueryParameters(t), o = b.appendQueryString(e.tokenEndpoint, n), i = await this.createTokenRequestBody(t), s = this.createTokenRequestHeaders({ credential: t.username, type: Ee.UPN }), a = { clientId: this.config.authOptions.clientId, authority: e.canonicalAuthority, scopes: t.scopes, claims: t.claims, authenticationScheme: t.authenticationScheme, resourceRequestMethod: t.resourceRequestMethod, resourceRequestUri: t.resourceRequestUri, shrClaims: t.shrClaims, sshKid: t.sshKid };
    return this.executePostToTokenEndpoint(o, i, s, a, t.correlationId);
  }
  async createTokenRequestBody(e) {
    let t = new te();
    t.addClientId(this.config.authOptions.clientId), t.addUsername(e.username), t.addPassword(e.password), t.addScopes(e.scopes), t.addResponseTypeForTokenAndIdToken(), t.addGrantType(Xe.RESOURCE_OWNER_PASSWORD_GRANT), t.addClientInfo(), t.addLibraryInfo(this.config.libraryInfo), t.addApplicationTelemetry(this.config.telemetry.application), t.addThrottling(), this.serverTelemetryManager && t.addServerTelemetry(this.serverTelemetryManager);
    let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
    t.addCorrelationId(n), this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret);
    let o = this.config.clientCredentials.clientAssertion;
    return o && (t.addClientAssertion(await lt(o.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), t.addClientAssertionType(o.assertionType)), (!$.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && e.username && t.addCcsUpn(e.username), t.createQueryString();
  }
};
var zr = class {
  constructor(e) {
    this.config = bl(e), this.cryptoProvider = new dt(), this.logger = new $e(this.config.system.loggerOptions, Tc, lr), this.storage = new xr(this.logger, this.config.auth.clientId, this.cryptoProvider, pa(this.config.auth)), this.tokenCache = new Ln(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(e) {
    this.logger.info("getAuthCodeUrl called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e), responseMode: e.responseMode || ft.QUERY, authenticationScheme: O.BEARER }, n = await this.buildOauthClientConfiguration(t.authority, t.correlationId, t.redirectUri, void 0, void 0, e.azureCloudOptions), o = new Nr(n);
    return this.logger.verbose("Auth code client created", t.correlationId), o.getAuthCodeUrl(t);
  }
  async acquireTokenByCode(e, t) {
    this.logger.info("acquireTokenByCode called"), e.state && t && (this.logger.info("acquireTokenByCode - validating state"), this.validateState(e.state, t.state || ""), t = { ...t, state: "" });
    let n = { ...e, ...await this.initializeBaseRequest(e), authenticationScheme: O.BEARER }, o = this.initializeServerTelemetryManager(Pt.acquireTokenByCode, n.correlationId);
    try {
      let i = await this.buildOauthClientConfiguration(n.authority, n.correlationId, n.redirectUri, o, void 0, e.azureCloudOptions), s = new Nr(i);
      return this.logger.verbose("Auth code client created", n.correlationId), await s.acquireToken(n, t);
    } catch (i) {
      throw i instanceof w && i.setCorrelationId(n.correlationId), o.cacheFailedRequest(i), i;
    }
  }
  async acquireTokenByRefreshToken(e) {
    this.logger.info("acquireTokenByRefreshToken called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e), authenticationScheme: O.BEARER }, n = this.initializeServerTelemetryManager(Pt.acquireTokenByRefreshToken, t.correlationId);
    try {
      let o = await this.buildOauthClientConfiguration(t.authority, t.correlationId, t.redirectUri || "", n, void 0, e.azureCloudOptions), i = new wt(o);
      return this.logger.verbose("Refresh token client created", t.correlationId), await i.acquireToken(t);
    } catch (o) {
      throw o instanceof w && o.setCorrelationId(t.correlationId), n.cacheFailedRequest(o), o;
    }
  }
  async acquireTokenSilent(e) {
    let t = { ...e, ...await this.initializeBaseRequest(e), forceRefresh: e.forceRefresh || false }, n = this.initializeServerTelemetryManager(Pt.acquireTokenSilent, t.correlationId, t.forceRefresh);
    try {
      let o = await this.buildOauthClientConfiguration(t.authority, t.correlationId, t.redirectUri || "", n, void 0, e.azureCloudOptions), i = new Mn(o);
      return this.logger.verbose("Silent flow client created", t.correlationId), await i.acquireToken(t);
    } catch (o) {
      throw o instanceof w && o.setCorrelationId(t.correlationId), n.cacheFailedRequest(o), o;
    }
  }
  async acquireTokenByUsernamePassword(e) {
    this.logger.info("acquireTokenByUsernamePassword called", e.correlationId);
    let t = { ...e, ...await this.initializeBaseRequest(e) }, n = this.initializeServerTelemetryManager(Pt.acquireTokenByUsernamePassword, t.correlationId);
    try {
      let o = await this.buildOauthClientConfiguration(t.authority, t.correlationId, "", n, void 0, e.azureCloudOptions), i = new Yn(o);
      return this.logger.verbose("Username password client created", t.correlationId), await i.acquireToken(t);
    } catch (o) {
      throw o instanceof w && o.setCorrelationId(t.correlationId), n.cacheFailedRequest(o), o;
    }
  }
  getTokenCache() {
    return this.logger.info("getTokenCache called"), this.tokenCache;
  }
  validateState(e, t) {
    if (!e) throw Ie.createStateNotFoundError();
    if (e !== t) throw m(le.stateMismatch);
  }
  getLogger() {
    return this.logger;
  }
  setLogger(e) {
    this.logger = e;
  }
  async buildOauthClientConfiguration(e, t, n, o, i, s) {
    this.logger.verbose("buildOauthClientConfiguration called", t);
    let a = s || this.config.auth.azureCloudOptions, c = await this.createAuthority(e, t, i, a);
    return this.logger.info(`Building oauth client configuration with the following authority: ${c.tokenEndpoint}.`, t), o?.updateRegionDiscoveryMetadata(c.regionDiscoveryMetadata), { authOptions: { clientId: this.config.auth.clientId, authority: c, clientCapabilities: this.config.auth.clientCapabilities, redirectUri: n }, loggerOptions: { logLevel: this.config.system.loggerOptions.logLevel, loggerCallback: this.config.system.loggerOptions.loggerCallback, piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled, correlationId: t }, cacheOptions: { claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled }, cryptoInterface: this.cryptoProvider, networkInterface: this.config.system.networkClient, storageInterface: this.storage, serverTelemetryManager: o, clientCredentials: { clientSecret: this.clientSecret, clientAssertion: await this.getClientAssertion(c) }, libraryInfo: { sku: ue.MSAL_SKU, version: lr, cpu: process.arch || p.EMPTY_STRING, os: process.platform || p.EMPTY_STRING }, telemetry: this.config.telemetry, persistencePlugin: this.config.cache.cachePlugin, serializableCache: this.tokenCache };
  }
  async getClientAssertion(e) {
    return this.developerProvidedClientAssertion && (this.clientAssertion = Kr.fromAssertion(await lt(this.developerProvidedClientAssertion, this.config.auth.clientId, e.tokenEndpoint))), this.clientAssertion && { assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, e.tokenEndpoint), assertionType: ue.JWT_BEARER_ASSERTION_TYPE };
  }
  async initializeBaseRequest(e) {
    return this.logger.verbose("initializeRequestScopes called", e.correlationId), e.authenticationScheme && e.authenticationScheme === O.POP && this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", e.correlationId), e.authenticationScheme = O.BEARER, this.config.cache.claimsBasedCachingEnabled && e.claims && !$.isEmptyObj(e.claims) && (e.requestedClaimsHash = await this.cryptoProvider.hashString(e.claims)), { ...e, scopes: [...e && e.scopes || [], ...Oe], correlationId: e && e.correlationId || this.cryptoProvider.createNewGuid(), authority: e.authority || this.config.auth.authority };
  }
  initializeServerTelemetryManager(e, t, n) {
    let o = { clientId: this.config.auth.clientId, correlationId: t, apiId: e, forceRefresh: n || false };
    return new or(o, this.storage);
  }
  async createAuthority(e, t, n, o) {
    this.logger.verbose("createAuthority called", t);
    let i = st.generateAuthority(e, o), s = { protocolMode: this.config.auth.protocolMode, knownAuthorities: this.config.auth.knownAuthorities, cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata, authorityMetadata: this.config.auth.authorityMetadata, azureRegionConfiguration: n, skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache };
    return qo.createDiscoveredInstance(i, this.config.system.networkClient, this.storage, s, this.logger, t);
  }
  clearCache() {
    this.storage.clear();
  }
};
var Ep = J(require("http"), 1);
var bi = class {
  async listenForAuthCode(e, t) {
    if (this.server) throw Ie.createLoopbackServerAlreadyExistsError();
    return new Promise((n, o) => {
      this.server = Ep.default.createServer((i, s) => {
        let a = i.url;
        if (a) {
          if (a === p.FORWARD_SLASH) {
            s.end(e || "Auth code was successfully acquired. You can close this window now.");
            return;
          }
        } else {
          s.end(t || "Error occurred loading redirectUrl"), o(Ie.createUnableToLoadRedirectUrlError());
          return;
        }
        let c = this.getRedirectUri(), l = new URL(a, c), d = No.getDeserializedResponse(l.search) || {};
        d.code && (s.writeHead(M.REDIRECT, { location: c }), s.end()), d.error && s.end(t || `Error occurred: ${d.error}`), n(d);
      }), this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) throw Ie.createNoLoopbackServerExistsError();
    let e = this.server.address();
    if (!e || typeof e == "string" || !e.port) throw this.closeServer(), Ie.createInvalidLoopbackAddressTypeError();
    let t = e && e.port;
    return `${ue.HTTP_PROTOCOL}${ue.LOCALHOST}:${t}`;
  }
  closeServer() {
    this.server && (this.server.close(), typeof this.server.closeAllConnections == "function" && this.server.closeAllConnections(), this.server.unref(), this.server = void 0);
  }
};
var jn = class extends Pe {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    let t = await this.getDeviceCode(e);
    e.deviceCodeCallback(t);
    let n = Z.nowSeconds(), o = await this.acquireTokenWithDeviceCode(e, t), i = new de(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return i.validateTokenResponse(o), i.handleServerTokenResponse(o, this.authority, n, e);
  }
  async getDeviceCode(e) {
    let t = this.createExtraQueryParameters(e), n = b.appendQueryString(this.authority.deviceCodeEndpoint, t), o = this.createQueryString(e), i = this.createTokenRequestHeaders(), s = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid };
    return this.executePostRequestToDeviceCodeEndpoint(n, o, i, s, e.correlationId);
  }
  createExtraQueryParameters(e) {
    let t = new te();
    return e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters), t.createQueryString();
  }
  async executePostRequestToDeviceCodeEndpoint(e, t, n, o, i) {
    let { body: { user_code: s, device_code: a, verification_uri: c, expires_in: l, interval: d, message: u } } = await this.sendPostRequest(o, e, { body: t, headers: n }, i);
    return { userCode: s, deviceCode: a, verificationUri: c, expiresIn: l, interval: d, message: u };
  }
  createQueryString(e) {
    let t = new te();
    return t.addScopes(e.scopes), t.addClientId(this.config.authOptions.clientId), e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters), (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities), t.createQueryString();
  }
  continuePolling(e, t, n) {
    if (n) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), m(le.deviceCodePollingCancelled);
    if (t && t < e && Z.nowSeconds() > t) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${t}`), m(le.userTimeoutReached);
    if (Z.nowSeconds() > e) throw t && this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`), this.logger.error(`Device code expired. Expiration time of device code was ${e}`), m(le.deviceCodeExpired);
    return true;
  }
  async acquireTokenWithDeviceCode(e, t) {
    let n = this.createTokenQueryParameters(e), o = b.appendQueryString(this.authority.tokenEndpoint, n), i = this.createTokenRequestBody(e, t), s = this.createTokenRequestHeaders(), a = e.timeout ? Z.nowSeconds() + e.timeout : void 0, c = Z.nowSeconds() + t.expiresIn, l = t.interval * 1e3;
    for (; this.continuePolling(c, a, e.cancel); ) {
      let d = { clientId: this.config.authOptions.clientId, authority: e.authority, scopes: e.scopes, claims: e.claims, authenticationScheme: e.authenticationScheme, resourceRequestMethod: e.resourceRequestMethod, resourceRequestUri: e.resourceRequestUri, shrClaims: e.shrClaims, sshKid: e.sshKid }, u = await this.executePostToTokenEndpoint(o, i, s, d, e.correlationId);
      if (u.body && u.body.error) if (u.body.error === p.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), await Z.delay(l);
      else throw this.logger.info("Unexpected error in polling from the server"), ys(sn.postRequestFailed, u.body.error);
      else return this.logger.verbose("Authorization completed successfully. Polling stopped."), u.body;
    }
    throw this.logger.error("Polling stopped for unknown reasons."), m(le.deviceCodeUnknownError);
  }
  createTokenRequestBody(e, t) {
    let n = new te();
    n.addScopes(e.scopes), n.addClientId(this.config.authOptions.clientId), n.addGrantType(Xe.DEVICE_CODE_GRANT), n.addDeviceCode(t.deviceCode);
    let o = e.correlationId || this.config.cryptoInterface.createNewGuid();
    return n.addCorrelationId(o), n.addClientInfo(), n.addLibraryInfo(this.config.libraryInfo), n.addApplicationTelemetry(this.config.telemetry.application), n.addThrottling(), this.serverTelemetryManager && n.addServerTelemetry(this.serverTelemetryManager), (!$.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && n.addClaims(e.claims, this.config.authOptions.clientCapabilities), n.createQueryString();
  }
};
var Wn = class extends zr {
  constructor(e) {
    super(e), this.config.broker.nativeBrokerPlugin && (this.config.broker.nativeBrokerPlugin.isBrokerAvailable ? (this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions)) : this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.")), this.skus = or.makeExtraSkuString({ libraryName: ue.MSAL_SKU, libraryVersion: lr });
  }
  async acquireTokenByDeviceCode(e) {
    this.logger.info("acquireTokenByDeviceCode called", e.correlationId);
    let t = Object.assign(e, await this.initializeBaseRequest(e)), n = this.initializeServerTelemetryManager(Pt.acquireTokenByDeviceCode, t.correlationId);
    try {
      let o = await this.buildOauthClientConfiguration(t.authority, t.correlationId, "", n, void 0, e.azureCloudOptions), i = new jn(o);
      return this.logger.verbose("Device code client created", t.correlationId), await i.acquireToken(t);
    } catch (o) {
      throw o instanceof w && o.setCorrelationId(t.correlationId), n.cacheFailedRequest(o), o;
    }
  }
  async acquireTokenInteractive(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    this.logger.trace("acquireTokenInteractive called", t);
    let { openBrowser: n, successTemplate: o, errorTemplate: i, windowHandle: s, loopbackClient: a, ...c } = e;
    if (this.nativeBrokerPlugin) {
      let A = { ...c, clientId: this.config.auth.clientId, scopes: e.scopes || Oe, redirectUri: `${ue.HTTP_PROTOCOL}${ue.LOCALHOST}`, authority: e.authority || this.config.auth.authority, correlationId: t, extraParameters: { ...c.extraQueryParameters, ...c.tokenQueryParameters, [On.X_CLIENT_EXTRA_SKU]: this.skus }, accountId: c.account?.nativeAccountId };
      return this.nativeBrokerPlugin.acquireTokenInteractive(A, s);
    }
    let { verifier: l, challenge: d } = await this.cryptoProvider.generatePkceCodes(), u = a || new bi(), g = {}, f = null;
    try {
      let A = u.listenForAuthCode(o, i).then((Q) => {
        g = Q;
      }).catch((Q) => {
        f = Q;
      }), C = await this.waitForRedirectUri(u), x = { ...c, correlationId: t, scopes: e.scopes || Oe, redirectUri: C, responseMode: ft.QUERY, codeChallenge: d, codeChallengeMethod: mr.S256 }, ce = await this.getAuthCodeUrl(x);
      if (await n(ce), await A, f) throw f;
      if (g.error) throw new Ae(g.error, g.error_description, g.suberror);
      if (!g.code) throw Ie.createNoAuthCodeInResponseError();
      let F = g.client_info, j = { code: g.code, codeVerifier: l, clientInfo: F || p.EMPTY_STRING, ...x };
      return await this.acquireTokenByCode(j);
    } finally {
      u.closeServer();
    }
  }
  async acquireTokenSilent(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    if (this.logger.trace("acquireTokenSilent called", t), this.nativeBrokerPlugin) {
      let n = { ...e, clientId: this.config.auth.clientId, scopes: e.scopes || Oe, redirectUri: `${ue.HTTP_PROTOCOL}${ue.LOCALHOST}`, authority: e.authority || this.config.auth.authority, correlationId: t, extraParameters: { ...e.tokenQueryParameters, [On.X_CLIENT_EXTRA_SKU]: this.skus }, accountId: e.account.nativeAccountId, forceRefresh: e.forceRefresh || false };
      return this.nativeBrokerPlugin.acquireTokenSilent(n);
    }
    return super.acquireTokenSilent(e);
  }
  async signOut(e) {
    if (this.nativeBrokerPlugin && e.account.nativeAccountId) {
      let t = { clientId: this.config.auth.clientId, accountId: e.account.nativeAccountId, correlationId: e.correlationId || this.cryptoProvider.createNewGuid() };
      await this.nativeBrokerPlugin.signOut(t);
    }
    await this.getTokenCache().removeAccount(e.account, e.correlationId);
  }
  async getAllAccounts() {
    if (this.nativeBrokerPlugin) {
      let e = this.cryptoProvider.createNewGuid();
      return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, e);
    }
    return this.getTokenCache().getAllAccounts();
  }
  async waitForRedirectUri(e) {
    return new Promise((t, n) => {
      let o = 0, i = setInterval(() => {
        if (Wo.TIMEOUT_MS / Wo.INTERVAL_MS < o) {
          clearInterval(i), n(Ie.createLoopbackServerTimeoutError());
          return;
        }
        try {
          let s = e.getRedirectUri();
          clearInterval(i), t(s);
          return;
        } catch (s) {
          if (s instanceof w && s.errorCode === W.noLoopbackServerExists.code) {
            o++;
            return;
          }
          clearInterval(i), n(s);
          return;
        }
      }, Wo.INTERVAL_MS);
    });
  }
};
var Cc = { MANAGED_IDENTITY_CLIENT_ID: "client_id", MANAGED_IDENTITY_OBJECT_ID: "object_id", MANAGED_IDENTITY_RESOURCE_ID: "mi_res_id" }, Mt = class {
  constructor(e, t, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = n, this.cryptoProvider = o;
  }
  async getServerTokenResponseAsync(e, t, n, o) {
    return this.getServerTokenResponse(e);
  }
  getServerTokenResponse(e) {
    let t, n;
    return e.body.expires_on && (n = e.body.expires_on - Z.nowSeconds(), n > 2 * 3600 && (t = n / 2)), { status: e.status, access_token: e.body.access_token, expires_in: n, scope: e.body.resource, token_type: e.body.token_type, refresh_in: t, correlation_id: e.body.correlation_id || e.body.correlationId, error: typeof e.body.error == "string" ? e.body.error : e.body.error?.code, error_description: e.body.message || (typeof e.body.error == "string" ? e.body.error_description : e.body.error?.message), error_codes: e.body.error_codes, timestamp: e.body.timestamp, trace_id: e.body.trace_id };
  }
  async acquireTokenWithManagedIdentity(e, t, n, o) {
    let i = this.createRequest(e.resource, t), s = i.headers;
    s[B.CONTENT_TYPE] = p.URL_FORM_CONTENT_TYPE;
    let a = { headers: s };
    Object.keys(i.bodyParameters).length && (a.body = i.computeParametersBodyString());
    let c = Z.nowSeconds(), l;
    try {
      i.httpMethod === Te.POST ? l = await this.networkClient.sendPostRequestAsync(i.computeUri(), a) : l = await this.networkClient.sendGetRequestAsync(i.computeUri(), a);
    } catch (g) {
      throw g instanceof w ? g : m(le.networkError);
    }
    let d = new de(t.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null), u = await this.getServerTokenResponseAsync(l, this.networkClient, i, a);
    return d.validateTokenResponse(u, o), d.handleServerTokenResponse(u, n, c, e);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(e) {
    switch (e) {
      case Ye.USER_ASSIGNED_CLIENT_ID:
        return this.logger.info("[Managed Identity] Adding user assigned client id to the request."), Cc.MANAGED_IDENTITY_CLIENT_ID;
      case Ye.USER_ASSIGNED_RESOURCE_ID:
        return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), Cc.MANAGED_IDENTITY_RESOURCE_ID;
      case Ye.USER_ASSIGNED_OBJECT_ID:
        return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), Cc.MANAGED_IDENTITY_OBJECT_ID;
      default:
        throw sr(xn);
    }
  }
};
Mt.getValidatedEnvVariableUrlString = (r38, e, t, n) => {
  try {
    return new b(e).urlString;
  } catch {
    throw n.info(`[Managed Identity] ${t} managed identity is unavailable because the '${r38}' environment variable is malformed.`), sr(ir[r38]);
  }
};
var nM = { win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`, linux: "/var/opt/azcmagent/tokens/" }, oM = { win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`, linux: "/opt/azcmagent/bin/himds" };
var FS = "/metadata/identity/oauth2/token", mM = `http://169.254.169.254${FS}`;
var fe = require("vscode");
var ht = require("vscode");
var Di = { INTERATION_REQUIRED_ERROR_CODE: "interaction_required", SERVER_UNAVAILABLE: "server_unavailable", UNKNOWN: "unknown_error" };
var P = { LIBRARY_NAME: "MSAL.JS", SKU: "msal.js.common", DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/", DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com", DEFAULT_COMMON_TENANT: "common", ADFS: "adfs", DSTS: "dstsv2", AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=", CIAM_AUTH_URL: ".ciamlogin.com", AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com", RESOURCE_DELIM: "|", NO_ACCOUNT: "NO_ACCOUNT", CLAIMS: "claims", CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad", OPENID_SCOPE: "openid", PROFILE_SCOPE: "profile", OFFLINE_ACCESS_SCOPE: "offline_access", EMAIL_SCOPE: "email", CODE_GRANT_TYPE: "authorization_code", RT_GRANT_TYPE: "refresh_token", S256_CODE_CHALLENGE_METHOD: "S256", URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8", AUTHORIZATION_PENDING: "authorization_pending", NOT_DEFINED: "not_defined", EMPTY_STRING: "", NOT_APPLICABLE: "N/A", NOT_AVAILABLE: "Not Available", FORWARD_SLASH: "/", IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location", IMDS_VERSION: "2020-06-01", IMDS_TIMEOUT: 2e3, AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect", REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com", KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"], SHR_NONCE_VALIDITY: 240, INVALID_INSTANCE: "invalid_instance" }, Qn = { LOGIN: "login", SELECT_ACCOUNT: "select_account", CONSENT: "consent", NONE: "none", CREATE: "create", NO_SESSION: "no_session" }, Tp = { CACHE_KEY_SEPARATOR: "-" }, ie = { SCHEMA_VERSION: 5, MAX_LAST_HEADER_BYTES: 330, MAX_CACHED_ERRORS: 50, CACHE_KEY: "server-telemetry", CATEGORY_SEPARATOR: "|", VALUE_SEPARATOR: ",", OVERFLOW_TRUE: "1", OVERFLOW_FALSE: "0", UNKNOWN_ERROR: "unknown_error" }, Ui = { BEARER: "Bearer", POP: "pop", SSH: "ssh-cert" }, Cp = { NOT_APPLICABLE: "0" };
var se;
(function(r38) {
  r38[r38.Error = 0] = "Error", r38[r38.Warning = 1] = "Warning", r38[r38.Info = 2] = "Info", r38[r38.Verbose = 3] = "Verbose", r38[r38.Trace = 4] = "Trace";
})(se || (se = {}));
var jr = class r24 {
  constructor(e, t, n) {
    this.level = se.Info;
    let o = () => {
    }, i = e || r24.createDefaultLoggerOptions();
    this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || false, this.level = typeof i.logLevel == "number" ? i.logLevel : se.Info, this.correlationId = i.correlationId || P.EMPTY_STRING, this.packageName = t || P.EMPTY_STRING, this.packageVersion = n || P.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return { loggerCallback: () => {
    }, piiLoggingEnabled: false, logLevel: se.Info };
  }
  clone(e, t, n) {
    return new r24({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
  }
  logMessage(e, t) {
    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
    let i = `${`[${(/* @__PURE__ */ new Date()).toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${se[t.logLevel]} - ${e}`;
    this.executeCallback(t.logLevel, i, t.containsPii || false);
  }
  executeCallback(e, t, n) {
    this.localCallback && this.localCallback(e, t, n);
  }
  error(e, t) {
    this.logMessage(e, { logLevel: se.Error, containsPii: false, correlationId: t || P.EMPTY_STRING });
  }
  errorPii(e, t) {
    this.logMessage(e, { logLevel: se.Error, containsPii: true, correlationId: t || P.EMPTY_STRING });
  }
  warning(e, t) {
    this.logMessage(e, { logLevel: se.Warning, containsPii: false, correlationId: t || P.EMPTY_STRING });
  }
  warningPii(e, t) {
    this.logMessage(e, { logLevel: se.Warning, containsPii: true, correlationId: t || P.EMPTY_STRING });
  }
  info(e, t) {
    this.logMessage(e, { logLevel: se.Info, containsPii: false, correlationId: t || P.EMPTY_STRING });
  }
  infoPii(e, t) {
    this.logMessage(e, { logLevel: se.Info, containsPii: true, correlationId: t || P.EMPTY_STRING });
  }
  verbose(e, t) {
    this.logMessage(e, { logLevel: se.Verbose, containsPii: false, correlationId: t || P.EMPTY_STRING });
  }
  verbosePii(e, t) {
    this.logMessage(e, { logLevel: se.Verbose, containsPii: true, correlationId: t || P.EMPTY_STRING });
  }
  trace(e, t) {
    this.logMessage(e, { logLevel: se.Trace, containsPii: false, correlationId: t || P.EMPTY_STRING });
  }
  tracePii(e, t) {
    this.logMessage(e, { logLevel: se.Trace, containsPii: true, correlationId: t || P.EMPTY_STRING });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
};
var Sp = require("module"), HS = {};
var Fi = class {
  constructor(e) {
    this.errorMessage = e;
  }
  protectData() {
    throw new Error(this.errorMessage);
  }
  unprotectData() {
    throw new Error(this.errorMessage);
  }
}, Li;
if (process.platform !== "win32") Li = new Fi("Dpapi is not supported on this platform");
else {
  let r38 = typeof require < "u" ? require : (0, Sp.createRequire)(HS.url);
  try {
    Li = r38(`../bin/${process.arch}/dpapi`);
  } catch {
    Li = new Fi("Dpapi bindings unavailable");
  }
}
var BS = J(vc(), 1);
var qS = J(vc(), 1);
var zS = /* @__PURE__ */ new Map([["win32", /* @__PURE__ */ new Set(["x64", "ia32", "arm64"])], ["darwin", /* @__PURE__ */ new Set(["arm64", "x64"])], ["linux", /* @__PURE__ */ new Set(["x64"])]]), Se;
(function(r38) {
  r38[r38.Unexpected = 0] = "Unexpected", r38[r38.Reserved = 1] = "Reserved", r38[r38.InteractionRequired = 2] = "InteractionRequired", r38[r38.NoNetwork = 3] = "NoNetwork", r38[r38.NetworkTemporarilyUnavailable = 4] = "NetworkTemporarilyUnavailable", r38[r38.ServerTemporarilyUnavailable = 5] = "ServerTemporarilyUnavailable", r38[r38.ApiContractViolation = 6] = "ApiContractViolation", r38[r38.UserCanceled = 7] = "UserCanceled", r38[r38.ApplicationCanceled = 8] = "ApplicationCanceled", r38[r38.IncorrectConfiguration = 9] = "IncorrectConfiguration", r38[r38.InsufficientBuffer = 10] = "InsufficientBuffer", r38[r38.AuthorityUntrusted = 11] = "AuthorityUntrusted", r38[r38.UserSwitched = 12] = "UserSwitched", r38[r38.AccountUnusable = 13] = "AccountUnusable", r38[r38.UserDataRemovalRequired = 14] = "UserDataRemovalRequired", r38[r38.KeyNotFound = 15] = "KeyNotFound", r38[r38.AccountNotFound = 16] = "AccountNotFound";
})(Se || (Se = {}));
var ut;
(function(r38) {
  r38[r38.Trace = 1] = "Trace", r38[r38.Debug = 2] = "Debug", r38[r38.Info = 3] = "Info", r38[r38.Warning = 4] = "Warning", r38[r38.Error = 5] = "Error", r38[r38.Fatal = 6] = "Fatal";
})(ut || (ut = {}));
var YS = { errorCode: 0, errorStatus: Se.Unexpected, errorContext: "Platform and/or architecture combination is unsupported. Supported: Windows (x64, ia32, arm64), macOS (arm64, x64) and Linux (RHEL 8+ and Ubuntu 22/24)", errorTag: 0 }, jS = { errorCode: 0, errorStatus: Se.Unexpected, errorContext: "Binaries could not be loaded. This is unexpected.", errorTag: 0 };
function ae() {
  var r38, e = zS.get(process.platform), t = (r38 = e?.has(process.arch)) !== null && r38 !== void 0 ? r38 : false;
  return t ? jS : YS;
}
var WS = (function() {
  function r38() {
  }
  return r38.prototype.CreateAuthParameters = function() {
    throw ae();
  }, r38.prototype.SetRedirectUri = function() {
    throw ae();
  }, r38.prototype.SetRequestedScopes = function() {
    throw ae();
  }, r38.prototype.SetDecodedClaims = function() {
    throw ae();
  }, r38.prototype.SetAccessTokenToRenew = function() {
    throw ae();
  }, r38.prototype.SetPopParams = function() {
    throw ae();
  }, r38.prototype.SetAdditionalParameter = function() {
    throw ae();
  }, r38;
})(), QS = (function() {
  function r38() {
    this.AuthParameters = WS, this.StartupError = ae();
  }
  return r38.prototype.ReadAccountByIdAsync = function() {
    throw ae();
  }, r38.prototype.SignInAsync = function() {
    throw ae();
  }, r38.prototype.SignInSilentlyAsync = function() {
    throw ae();
  }, r38.prototype.SignInInteractivelyAsync = function() {
    throw ae();
  }, r38.prototype.AcquireTokenSilentlyAsync = function() {
    throw ae();
  }, r38.prototype.AcquireTokenInteractivelyAsync = function() {
    throw ae();
  }, r38.prototype.SignOutSilentlyAsync = function() {
    throw ae();
  }, r38.prototype.RegisterLogger = function() {
    throw ae();
  }, r38.prototype.DiscoverAccountsAsync = function() {
    throw ae();
  }, r38;
})();
function JS() {
  try {
    var r38 = require("fs").readFileSync("/etc/os-release", "utf8"), e = r38.match(/^VERSION_ID="?(\d+)/m), t = e ? parseInt(e[1], 10) : 0;
    if (/^ID(?:_LIKE)?=.*\brhel\b/m.test(r38)) return t >= 10 ? "rhel10" : "rhel8_9";
  } catch {
  }
  return "ubuntu";
}
function XS() {
  var r38 = require("path"), e = { win32: "windows", darwin: "macos", linux: "linux" }, t = e[process.platform], n = process.arch === "ia32" ? "x86" : process.arch, o = process.platform === "linux" ? r38.join("linux", JS(), n) : r38.join(t, n);
  return r38.join(__dirname, o, "msal-node-runtime.node");
}
var he;
try {
  he = require(XS());
} catch {
  he = new QS();
}
var Rc = "@azure/msal-node-extensions", qi = "1.5.32";
var _e = class r25 extends Error {
  constructor(e, t, n) {
    let o = t ? `${e}: ${t}` : e;
    super(o), Object.setPrototypeOf(this, r25.prototype), this.errorCode = e || P.EMPTY_STRING, this.errorMessage = t || P.EMPTY_STRING, this.subError = n || P.EMPTY_STRING, this.name = "AuthError";
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
};
var _p = "client_info_decoding_error", vp = "client_info_empty_error", Rp = "token_parsing_error", wp = "null_or_empty_token", kp = "endpoints_resolution_error", Pp = "network_error", Op = "openid_config_error", bp = "hash_not_deserialized", Np = "invalid_state", Mp = "state_mismatch", Dp = "state_not_found", xp = "nonce_mismatch", Up = "auth_time_not_found", Lp = "max_age_transpired", Fp = "multiple_matching_tokens", Hp = "multiple_matching_accounts", Bp = "multiple_matching_appMetadata", qp = "request_cannot_be_made", Gp = "cannot_remove_empty_scope", Vp = "cannot_append_scopeset", $p = "empty_input_scopeset", Kp = "device_code_polling_cancelled", zp = "device_code_expired", Yp = "device_code_unknown_error", jp = "no_account_in_silent_request", Wp = "invalid_cache_record", Qp = "invalid_cache_environment", Jn = "no_account_found", Jp = "no_crypto_object", Xp = "unexpected_credential_type", Zp = "invalid_assertion", ef = "invalid_client_credential", tf = "token_refresh_required", rf = "user_timeout_reached", nf = "token_claims_cnf_required_for_signedjwt", of = "authorization_code_missing_from_server_response", sf = "binding_key_not_removed", af = "end_session_endpoint_not_supported", cf = "key_id_missing", Gi = "no_network_connectivity", Vi = "user_canceled", lf = "missing_tenant_id_error", df = "method_not_implemented", uf = "nested_app_auth_bridge_disabled", $i = "platform_broker_error";
var hf = { [_p]: "The client info could not be parsed/decoded correctly", [vp]: "The client info was empty", [Rp]: "Token cannot be parsed", [wp]: "The token is null or empty", [kp]: "Endpoints cannot be resolved", [Pp]: "Network request failed", [Op]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.", [bp]: "The hash parameters could not be deserialized", [Np]: "State was not the expected format", [Mp]: "State mismatch error", [Dp]: "State not found", [xp]: "Nonce mismatch error", [Up]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.", [Lp]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.", [Fp]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.", [Hp]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account", [Bp]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata", [qp]: "Token request cannot be made without authorization code or refresh token.", [Gp]: "Cannot remove null or empty scope from ScopeSet", [Vp]: "Cannot append ScopeSet", [$p]: "Empty input ScopeSet cannot be processed", [Kp]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.", [zp]: "Device code is expired.", [Yp]: "Device code stopped polling for unknown reasons.", [jp]: "Please pass an account object, silent flow is not supported without account information", [Wp]: "Cache record object was null or undefined.", [Qp]: "Invalid environment when attempting to create cache entry", [Jn]: "No account found in cache for given key.", [Jp]: "No crypto object detected.", [Xp]: "Unexpected credential type.", [Zp]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515", [ef]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential", [tf]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.", [rf]: "User defined timeout for device code polling reached", [nf]: "Cannot generate a POP jwt if the token_claims are not populated", [of]: "Server response does not contain an authorization code to proceed", [sf]: "Could not remove the credential's binding key from storage.", [af]: "The provided authority does not support logout", [cf]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.", [Gi]: "No network connectivity. Check your internet connection.", [Vi]: "User cancelled the flow.", [lf]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.", [df]: "This method has not been implemented", [uf]: "The nested app auth bridge is disabled", [$i]: "An error occurred in the native broker. See the platformBrokerError property for details." }, wc = class r26 extends _e {
  constructor(e, t) {
    super(e, t ? `${hf[e]}: ${t}` : hf[e]), this.name = "ClientAuthError", Object.setPrototypeOf(this, r26.prototype);
  }
};
function Wr(r38, e) {
  return new wc(r38, e);
}
var pf = ",", ff = "|";
function ZS(r38) {
  let { skus: e, libraryName: t, libraryVersion: n, extensionName: o, extensionVersion: i } = r38, s = /* @__PURE__ */ new Map([[0, [t, n]], [2, [o, i]]]), a = [];
  if (e?.length) {
    if (a = e.split(pf), a.length < 4) return e;
  } else a = Array.from({ length: 4 }, () => ff);
  return s.forEach((c, l) => {
    c.length === 2 && c[0]?.length && c[1]?.length && eI({ skuArr: a, index: l, skuName: c[0], skuVersion: c[1] });
  }), a.join(pf);
}
function eI(r38) {
  let { skuArr: e, index: t, skuName: n, skuVersion: o } = r38;
  t >= e.length || (e[t] = [n, o].join(ff));
}
var Ki = class r27 {
  constructor(e, t) {
    this.cacheOutcome = Cp.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || P.EMPTY_STRING, this.wrapperVer = e.wrapperVer || P.EMPTY_STRING, this.telemetryCacheKey = ie.CACHE_KEY + Tp.CACHE_KEY_SEPARATOR + e.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let e = `${this.apiId}${ie.VALUE_SEPARATOR}${this.cacheOutcome}`, t = [this.wrapperSKU, this.wrapperVer], n = this.getNativeBrokerErrorCode();
    n?.length && t.push(`broker_error=${n}`);
    let o = t.join(ie.VALUE_SEPARATOR), i = this.getRegionDiscoveryFields(), s = [e, i].join(ie.VALUE_SEPARATOR);
    return [ie.SCHEMA_VERSION, s, o].join(ie.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let e = this.getLastRequests(), t = r27.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(ie.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(ie.VALUE_SEPARATOR), i = e.errors.length, s = t < i ? ie.OVERFLOW_TRUE : ie.OVERFLOW_FALSE, a = [i, s].join(ie.VALUE_SEPARATOR);
    return [ie.SCHEMA_VERSION, e.cacheHits, n, o, a].join(ie.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(e) {
    let t = this.getLastRequests();
    t.errors.length >= ie.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && e && e.toString() ? e instanceof _e ? e.subError ? t.errors.push(e.subError) : e.errorCode ? t.errors.push(e.errorCode) : t.errors.push(e.toString()) : t.errors.push(e.toString()) : t.errors.push(ie.UNKNOWN_ERROR), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  incrementCacheHits() {
    let e = this.getLastRequests();
    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), e.cacheHits;
  }
  getLastRequests() {
    let e = { failedRequests: [], errors: [], cacheHits: 0 };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    let e = this.getLastRequests(), t = r27.maxErrorsToSend(e), n = e.errors.length;
    if (t === n) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
    else {
      let o = { failedRequests: e.failedRequests.slice(t * 2), errors: e.errors.slice(t), cacheHits: 0 };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o, this.correlationId);
    }
  }
  static maxErrorsToSend(e) {
    let t, n = 0, o = 0, i = e.errors.length;
    for (t = 0; t < i; t++) {
      let s = e.failedRequests[2 * t] || P.EMPTY_STRING, a = e.failedRequests[2 * t + 1] || P.EMPTY_STRING, c = e.errors[t] || P.EMPTY_STRING;
      if (o += s.toString().length + a.toString().length + c.length + 3, o < ie.MAX_LAST_HEADER_BYTES) n += 1;
      else break;
    }
    return n;
  }
  getRegionDiscoveryFields() {
    let e = [];
    return e.push(this.regionUsed || P.EMPTY_STRING), e.push(this.regionSource || P.EMPTY_STRING), e.push(this.regionOutcome || P.EMPTY_STRING), e.join(",");
  }
  updateRegionDiscoveryMetadata(e) {
    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
  setNativeBrokerErrorCode(e) {
    let t = this.getLastRequests();
    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let e = this.getLastRequests();
    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
  }
  static makeExtraSkuString(e) {
    return ZS(e);
  }
};
function tI(r38) {
  if (r38 === 0) return "UNTAG";
  let e = "abcdefghijklmnopqrstuvwxyz0123456789****************************", t = "*****";
  return t = [e[r38 >> 24 & 63], e[r38 >> 18 & 63], e[r38 >> 12 & 63], e[r38 >> 6 & 63], e[r38 >> 0 & 63]].join(""), t;
}
var zi = class r28 extends _e {
  constructor(e, t, n, o) {
    let i = tI(o), s = t ? `${t} (Error Code: ${n}, Tag: ${i})` : `(Error Code: ${n}, Tag: ${i})`;
    super(e, s), this.name = "PlatformBrokerError", this.statusCode = n, this.tag = i, Object.setPrototypeOf(this, r28.prototype);
  }
};
var mf = "redirect_uri_empty", gf = "claims_request_parsing_error", Ef = "authority_uri_insecure", Af = "url_parse_error", yf = "empty_url_error", Tf = "empty_input_scopes_error", Cf = "invalid_claims", Sf = "token_request_empty", If = "logout_request_empty", _f = "invalid_code_challenge_method", vf = "pkce_params_missing", Rf = "invalid_cloud_discovery_metadata", wf = "invalid_authority_metadata", Yi = "untrusted_authority", kf = "missing_ssh_jwk", Pf = "missing_ssh_kid", Of = "missing_nonce_authentication_header", bf = "invalid_authentication_header", Nf = "cannot_set_OIDCOptions", Mf = "cannot_allow_platform_broker", Df = "authority_mismatch", xf = "invalid_request_method_for_EAR", Uf = "invalid_authorize_post_body_parameters", Lf = "invalid_platform_broker_configuration";
var rI = { [mf]: "A redirect URI is required for all calls, and none has been set.", [gf]: "Could not parse the given claims request object.", [Ef]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options", [Af]: "URL could not be parsed into appropriate segments.", [yf]: "URL was empty or null.", [Tf]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.", [Cf]: "Given claims parameter must be a stringified JSON object.", [Sf]: "Token request was empty and not found in cache.", [If]: "The logout request was null or undefined.", [_f]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".', [vf]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request", [Rf]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields", [wf]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.", [Yi]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.", [kf]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.", [Pf]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.", [Of]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.", [bf]: "Invalid authentication header provided", [Nf]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.", [Mf]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.", [Df]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.", [Uf]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.", [xf]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST.", [Lf]: "Invalid platform broker configuration. `allowPlatformBrokerWithDOM` can only be enabled when `allowPlatformBroker` is enabled." }, kc = class r29 extends _e {
  constructor(e) {
    super(e, rI[e]), this.name = "ClientConfigurationError", Object.setPrototypeOf(this, r29.prototype);
  }
};
function Ff(r38) {
  return new kc(r38);
}
var ji = class r30 extends _e {
  constructor(e, t, n, o, i) {
    super(e, t, n), this.name = "ServerError", this.errorNo = o, this.status = i, Object.setPrototypeOf(this, r30.prototype);
  }
};
var Wi = class r31 extends _e {
  constructor(e, t, n, o, i, s, a, c) {
    super(e, t, n), Object.setPrototypeOf(this, r31.prototype), this.timestamp = o || P.EMPTY_STRING, this.traceId = i || P.EMPTY_STRING, this.correlationId = s || P.EMPTY_STRING, this.claims = a || P.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = c;
  }
};
var Qi = "x-client-xtra-sku";
function Hf(r38) {
  return r38 ? new Date(Number(r38) * 1e3) : /* @__PURE__ */ new Date();
}
var Xn = class {
  constructor() {
    let e = { loggerCallback: () => {
    }, piiLoggingEnabled: false };
    this.logger = new jr(e, Rc, qi), this.isBrokerAvailable = !he.StartupError;
  }
  setLogger(e) {
    this.logger = new jr(e, Rc, qi);
    let t = (n, o, i) => {
      switch (o) {
        case ut.Trace:
          i ? this.logger.tracePii(n) : this.logger.trace(n);
          break;
        case ut.Debug:
          i ? this.logger.tracePii(n) : this.logger.trace(n);
          break;
        case ut.Info:
          i ? this.logger.infoPii(n) : this.logger.info(n);
          break;
        case ut.Warning:
          i ? this.logger.warningPii(n) : this.logger.warning(n);
          break;
        case ut.Error:
          i ? this.logger.errorPii(n) : this.logger.error(n);
          break;
        case ut.Fatal:
          i ? this.logger.errorPii(n) : this.logger.error(n);
          break;
        default:
          i ? this.logger.infoPii(n) : this.logger.info(n);
          break;
      }
    };
    try {
      he.RegisterLogger(t, e.piiLoggingEnabled || false);
    } catch (n) {
      let o = this.wrapError(n);
      if (o) throw o;
    }
  }
  async getAccountById(e, t) {
    this.logger.trace("NativeBrokerPlugin - getAccountById called", t);
    let n = await this.readAccountById(e, t);
    return this.generateAccountInfo(n.account);
  }
  async getAllAccounts(e, t) {
    return this.logger.trace("NativeBrokerPlugin - getAllAccounts called", t), new Promise((n, o) => {
      let i = (s) => {
        try {
          s.CheckError();
        } catch (c) {
          let l = this.wrapError(c);
          if (l) {
            o(l);
            return;
          }
        }
        let a = [];
        s.accounts.forEach((c) => {
          a.push(this.generateAccountInfo(c));
        }), n(a);
      };
      try {
        he.DiscoverAccountsAsync(e, t, i);
      } catch (s) {
        let a = this.wrapError(s);
        a && o(a);
      }
    });
  }
  async acquireTokenSilent(e) {
    this.logger.trace("NativeBrokerPlugin - acquireTokenSilent called", e.correlationId);
    let t = e;
    t.redirectUri || (t.redirectUri = this.chooseRedirectUriByPlatform(t), this.logger.info("NativeBrokerPlugin - No Redirect URI provided, using default", t.correlationId));
    let n = this.generateRequestParameters(t), o = await this.getAccount(t);
    return new Promise((i, s) => {
      let a = (c) => {
        try {
          c.CheckError();
        } catch (d) {
          let u = this.wrapError(d);
          if (u) {
            s(u);
            return;
          }
        }
        let l = this.getAuthenticationResult(t, c);
        i(l);
      };
      try {
        o ? he.AcquireTokenSilentlyAsync(n, t.correlationId, o, a) : he.SignInSilentlyAsync(n, t.correlationId, a);
      } catch (c) {
        let l = this.wrapError(c);
        l && s(l);
      }
    });
  }
  async acquireTokenInteractive(e, t) {
    this.logger.trace("NativeBrokerPlugin - acquireTokenInteractive called", e.correlationId);
    let n = e;
    n.redirectUri || (n.redirectUri = this.chooseRedirectUriByPlatform(n), this.logger.info("NativeBrokerPlugin - No Redirect URI provided, using default", n.correlationId));
    let o = this.generateRequestParameters(n), i = await this.getAccount(n), s = t || Buffer.from([0]);
    return new Promise((a, c) => {
      let l = (d) => {
        try {
          d.CheckError();
        } catch (g) {
          let f = this.wrapError(g);
          if (f) {
            c(f);
            return;
          }
        }
        let u = this.getAuthenticationResult(n, d);
        a(u);
      };
      try {
        switch (n.prompt) {
          case Qn.LOGIN:
          case Qn.SELECT_ACCOUNT:
          case Qn.CREATE:
            this.logger.info("Calling native interop SignInInteractively API", n.correlationId);
            let d = n.loginHint || P.EMPTY_STRING;
            he.SignInInteractivelyAsync(s, o, n.correlationId, d, l);
            break;
          case Qn.NONE:
            i ? (this.logger.info("Calling native interop AcquireTokenSilently API", n.correlationId), he.AcquireTokenSilentlyAsync(o, n.correlationId, i, l)) : (this.logger.info("Calling native interop SignInSilently API", n.correlationId), he.SignInSilentlyAsync(o, n.correlationId, l));
            break;
          default:
            if (i) this.logger.info("Calling native interop AcquireTokenInteractively API", n.correlationId), he.AcquireTokenInteractivelyAsync(s, o, n.correlationId, i, l);
            else {
              this.logger.info("Calling native interop SignIn API", n.correlationId);
              let u = n.loginHint || P.EMPTY_STRING;
              he.SignInAsync(s, o, n.correlationId, u, l);
            }
            break;
        }
      } catch (d) {
        let u = this.wrapError(d);
        u && c(u);
      }
    });
  }
  async signOut(e) {
    this.logger.trace("NativeBrokerPlugin - signOut called", e.correlationId);
    let t = await this.getAccount(e);
    if (!t) throw Wr(Jn);
    return new Promise((n, o) => {
      let i = (s) => {
        try {
          s.CheckError();
        } catch (a) {
          let c = this.wrapError(a);
          if (c) {
            o(c);
            return;
          }
        }
        n();
      };
      try {
        he.SignOutSilentlyAsync(e.clientId, e.correlationId, t, i);
      } catch (s) {
        let a = this.wrapError(s);
        a && o(a);
      }
    });
  }
  async getAccount(e) {
    return e.accountId ? (await this.readAccountById(e.accountId, e.correlationId)).account : null;
  }
  async readAccountById(e, t) {
    return this.logger.trace("NativeBrokerPlugin - readAccountById called", t), new Promise((n, o) => {
      let i = (s) => {
        try {
          s.CheckError();
        } catch (a) {
          let c = this.wrapError(a);
          if (c) {
            o(c);
            return;
          }
        }
        n(s);
      };
      try {
        he.ReadAccountByIdAsync(e, t, i);
      } catch (s) {
        let a = this.wrapError(s);
        a && o(a);
      }
    });
  }
  generateRequestParameters(e) {
    this.logger.trace("NativeBrokerPlugin - generateRequestParameters called", e.correlationId);
    let t = new he.AuthParameters();
    try {
      if (t.CreateAuthParameters(e.clientId, e.authority), t.SetRedirectUri(e.redirectUri), t.SetRequestedScopes(e.scopes.join(" ")), e.claims && t.SetDecodedClaims(e.claims), e.authenticationScheme === Ui.POP) {
        if (!e.resourceRequestMethod || !e.resourceRequestUri) throw new Error("Authentication Scheme set to POP but one or more of the following parameters are missing: resourceRequestMethod, resourceRequestUri");
        let o = new URL(e.resourceRequestUri);
        t.SetPopParams(e.resourceRequestMethod, o.host, o.pathname, e.shrNonce || "");
      }
      e.extraParameters && Object.entries(e.extraParameters).forEach(([o, i]) => {
        t.SetAdditionalParameter(o, i);
      });
      let n = e.extraParameters && e.extraParameters[Qi]?.length ? e.extraParameters[Qi] : "";
      t.SetAdditionalParameter(Qi, Ki.makeExtraSkuString({ skus: n, extensionName: "msal.node.ext", extensionVersion: qi }));
    } catch (n) {
      let o = this.wrapError(n);
      if (o) throw o;
    }
    return t;
  }
  chooseRedirectUriByPlatform(e) {
    this.logger.trace("NativeBrokerPlugin - chooseRedirectUriByPlatform called", e.correlationId);
    let t;
    switch (process.platform) {
      case "darwin":
        t = "msauth.com.msauth.unsignedapp://auth";
        break;
      case "win32":
        t = `ms-appx-web://Microsoft.AAD.BrokerPlugin/${e.clientId}`;
        break;
      default:
        t = "https://login.microsoftonline.com/common/oauth2/nativeclient";
    }
    return t;
  }
  getAuthenticationResult(e, t) {
    this.logger.trace("NativeBrokerPlugin - getAuthenticationResult called", e.correlationId);
    let n = false;
    try {
      n = !!JSON.parse(t.telemetryData).is_cache;
    } catch {
      this.logger.error("NativeBrokerPlugin: getAuthenticationResult - Error parsing telemetry data. Could not determine if response came from cache.", e.correlationId);
    }
    let o;
    try {
      o = JSON.parse(t.idToken);
    } catch {
      throw new Error("Unable to parse idToken claims");
    }
    let i = this.generateAccountInfo(t.account, o), s, a;
    return t.isPopAuthorization ? (s = t.authorizationHeader.split(" ")[1], a = Ui.POP) : (s = t.accessToken, a = Ui.BEARER), { authority: e.authority, uniqueId: o.oid || o.sub || "", tenantId: o.tid || "", scopes: t.grantedScopes.split(" "), account: i, idToken: t.rawIdToken, idTokenClaims: o, accessToken: s, fromCache: n, expiresOn: Hf(t.expiresOn), tokenType: a, correlationId: e.correlationId, fromNativeBroker: true };
  }
  generateAccountInfo(e, t) {
    return this.logger.trace("NativeBrokerPlugin - generateAccountInfo called"), { homeAccountId: e.homeAccountId, environment: e.environment, tenantId: e.realm, username: e.username, localAccountId: e.localAccountId, name: e.displayName, idTokenClaims: t, nativeAccountId: e.accountId };
  }
  isMsalRuntimeError(e) {
    return e.hasOwnProperty("errorCode") || e.hasOwnProperty("errorStatus") || e.hasOwnProperty("errorContext") || e.hasOwnProperty("errorTag");
  }
  wrapError(e) {
    if (e && typeof e == "object" && this.isMsalRuntimeError(e)) {
      let { errorCode: t, errorStatus: n, errorContext: o, errorTag: i } = e, s = new zi(Se[n], o, t, i), a;
      switch (n) {
        case Se.InteractionRequired:
        case Se.AccountUnusable:
          a = new Wi(Di.INTERATION_REQUIRED_ERROR_CODE, s.message);
          break;
        case Se.NoNetwork:
        case Se.NetworkTemporarilyUnavailable:
          a = Wr(Gi);
          break;
        case Se.ServerTemporarilyUnavailable:
          a = new ji(Di.SERVER_UNAVAILABLE, o);
          break;
        case Se.UserCanceled:
          a = Wr(Vi);
          break;
        case Se.AuthorityUntrusted:
          a = Ff(Yi);
          break;
        case Se.UserSwitched:
          return null;
        case Se.AccountNotFound:
          a = Wr(Jn);
          break;
        default:
          a = Wr($i);
      }
      return a.platformBrokerError = s, a;
    }
    throw e;
  }
};
var Ge = require("vscode");
var Xi = require("vscode"), Ji = class {
  constructor(e, t) {
    this._secretStorage = e;
    this._key = t;
    this._onDidChange = new Xi.EventEmitter();
    this.onDidChange = this._onDidChange.event;
    this._disposable = Xi.Disposable.from(this._onDidChange, this._registerChangeHandler());
  }
  _registerChangeHandler() {
    return this._secretStorage.onDidChange((e) => {
      e.key === this._key && this._onDidChange.fire();
    });
  }
  async beforeCacheAccess(e) {
    let t = await this._secretStorage.get(this._key);
    this._value = t, t && e.tokenCache.deserialize(t);
  }
  async afterCacheAccess(e) {
    if (e.cacheHasChanged) {
      let t = e.tokenCache.serialize();
      t !== this._value && await this._secretStorage.store(this._key, t);
    }
  }
  dispose() {
    this._disposable.dispose();
  }
};
var Dt = require("vscode"), Zi = class {
  constructor(e) {
    this._output = e;
    this.piiLoggingEnabled = false;
  }
  get logLevel() {
    return this._toMsalLogLevel(Dt.env.logLevel);
  }
  loggerCallback(e, t, n) {
    if (n) {
      this._output.debug("Skipped logging message because it may contain PII");
      return;
    }
    switch (e) {
      case k.Error:
        this._output.error(t);
        return;
      case k.Warning:
        this._output.warn(t);
        return;
      case k.Info:
        this._output.debug(t);
        return;
      case k.Verbose:
        this._output.trace(t);
        return;
      case k.Trace:
        return;
      default:
        this._output.debug(t);
        return;
    }
  }
  _toMsalLogLevel(e) {
    switch (e) {
      case Dt.LogLevel.Trace:
        return k.Trace;
      case Dt.LogLevel.Debug:
        return k.Verbose;
      case Dt.LogLevel.Info:
        return k.Info;
      case Dt.LogLevel.Warning:
        return k.Warning;
      case Dt.LogLevel.Error:
        return k.Error;
      default:
        return k.Info;
    }
  }
};
var es = class r32 {
  constructor(e, t, n, o) {
    this._clientId = e;
    this._secretStorage = t;
    this._accountAccess = n;
    this._logger = o;
    this._accounts = [];
    this._sequencer = new Pc();
    this._secretStorageCachePlugin = new Ji(this._secretStorage, `pca:${this._clientId}`);
    this._onDidAccountsChangeEmitter = new Ge.EventEmitter();
    this.onDidAccountsChange = this._onDidAccountsChangeEmitter.event;
    this._onDidRemoveLastAccountEmitter = new Ge.EventEmitter();
    this.onDidRemoveLastAccount = this._onDidRemoveLastAccountEmitter.event;
    this._lastSeen = /* @__PURE__ */ new Map();
    let i = new Zi(o), s = new Xn();
    this._isBrokerAvailable = s.isBrokerAvailable, this._pca = new Wn({ auth: { clientId: e }, system: { loggerOptions: { correlationId: e, loggerCallback: (a, c, l) => i.loggerCallback(a, c, l), logLevel: k.Trace } }, broker: { nativeBrokerPlugin: s }, cache: { cachePlugin: this._secretStorageCachePlugin } }), this._disposable = Ge.Disposable.from(this._registerOnSecretStorageChanged(), this._onDidAccountsChangeEmitter, this._onDidRemoveLastAccountEmitter, this._secretStorageCachePlugin);
  }
  get accounts() {
    return this._accounts;
  }
  get clientId() {
    return this._clientId;
  }
  static async create(e, t, n, o) {
    let i = new r32(e, t, n, o);
    return await i.initialize(), i;
  }
  async initialize() {
    await this._sequencer.queue(() => this._update());
  }
  dispose() {
    this._disposable.dispose();
  }
  async acquireTokenSilent(e) {
    this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] starting...`);
    let t = await this._sequencer.queue(() => this._pca.acquireTokenSilent(e));
    this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] got result`);
    let n = t.idTokenClaims.exp;
    if (n) {
      if (new Date((n - 300) * 1e3) < /* @__PURE__ */ new Date()) {
        this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] id token is expired or about to expire. Forcing refresh...`);
        let s = this._isBrokerAvailable ? { ...e, claims: '{ "id_token": {}}' } : { ...e, forceRefresh: true };
        t = await this._sequencer.queue(() => this._pca.acquireTokenSilent(s)), this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] got forced result`);
      }
      let i = t.idTokenClaims.exp;
      if (i && new Date((i - 300) * 1e3) < /* @__PURE__ */ new Date() && (this._logger.error(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] id token is still expired.`), this._isBrokerAvailable)) {
        this._logger.error(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] forcing refresh with different claims...`);
        let a = { ...e, claims: '{ "access_token": {}}' };
        t = await this._sequencer.queue(() => this._pca.acquireTokenSilent(a)), this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] got forced result with different claims`);
        let c = t.idTokenClaims.exp;
        c && new Date((c - 300) * 1e3) < /* @__PURE__ */ new Date() && this._logger.error(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] id token is still expired.`);
      }
    }
    return t.account ? !t.fromCache && this._verifyIfUsingBroker(t) && (this._logger.debug(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] firing event due to change`), this._onDidAccountsChangeEmitter.fire({ added: [], changed: [t.account], deleted: [] })) : this._logger.error(`[acquireTokenSilent] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}] [${e.account.username}] no account found in result`), t;
  }
  async acquireTokenInteractive(e) {
    return this._logger.debug(`[acquireTokenInteractive] [${this._clientId}] [${e.authority}] [${e.scopes?.join(" ")}] loopbackClientOverride: ${e.loopbackClient ? "true" : "false"}`), await Ge.window.withProgress({ location: Ge.ProgressLocation.Notification, cancellable: true, title: Ge.l10n.t("Signing in to Microsoft...") }, (t, n) => this._sequencer.queue(async () => {
      let o = await Xr(this._pca.acquireTokenInteractive(e), n, 3e5);
      return this._isBrokerAvailable && await this._accountAccess.setAllowedAccess(o.account, true), await this._update(), o;
    }));
  }
  async acquireTokenByRefreshToken(e) {
    this._logger.debug(`[acquireTokenByRefreshToken] [${this._clientId}] [${e.authority}] [${e.scopes.join(" ")}]`);
    let t = await this._sequencer.queue(async () => {
      let n = await this._pca.acquireTokenByRefreshToken(e);
      return await this._update(), n;
    });
    return t && this._isBrokerAvailable && t.account && await this._accountAccess.setAllowedAccess(t.account, true), t;
  }
  removeAccount(e) {
    return this._isBrokerAvailable ? this._accountAccess.setAllowedAccess(e, false) : this._sequencer.queue(() => this._pca.getTokenCache().removeAccount(e));
  }
  _registerOnSecretStorageChanged() {
    return this._isBrokerAvailable ? this._accountAccess.onDidAccountAccessChange(() => this._sequencer.queue(() => this._update())) : this._secretStorageCachePlugin.onDidChange(() => this._sequencer.queue(() => this._update()));
  }
  _verifyIfUsingBroker(e) {
    if (!e.fromNativeBroker) return true;
    let t = e.account.nativeAccountId;
    t || (this._logger.error(`[verifyIfUsingBroker] [${this._clientId}] [${e.account.username}] no nativeAccountId found. Using homeAccountId instead.`), t = e.account.homeAccountId);
    let n = this._lastSeen.get(t), o = e.account.idTokenClaims.iat;
    return n ? n === o ? false : (this._lastSeen.set(t, o), true) : (this._lastSeen.set(t, o), true);
  }
  async _update() {
    let e = this._accounts;
    this._logger.debug(`[update] [${this._clientId}] CachedPublicClientApplication update before: ${e.length}`), this._pca.clearCache();
    let t = await this._pca.getAllAccounts();
    this._isBrokerAvailable && (t = t.filter((a) => this._accountAccess.isAllowedAccess(a))), this._accounts = t, this._logger.debug(`[update] [${this._clientId}] CachedPublicClientApplication update after: ${t.length}`);
    let n = new Set(e.map((a) => a.homeAccountId)), o = new Set(t.map((a) => a.homeAccountId)), i = t.filter((a) => !n.has(a.homeAccountId)), s = e.filter((a) => !o.has(a.homeAccountId));
    (i.length > 0 || s.length > 0) && (this._onDidAccountsChangeEmitter.fire({ added: i, changed: [], deleted: s }), this._logger.debug(`[update] [${this._clientId}] CachedPublicClientApplication accounts changed. added: ${i.length}, deleted: ${s.length}`), t.length || (this._logger.debug(`[update] [${this._clientId}] CachedPublicClientApplication final account deleted. Firing event.`), this._onDidRemoveLastAccountEmitter.fire())), this._logger.debug(`[update] [${this._clientId}] CachedPublicClientApplication update complete`);
  }
}, Pc = class {
  constructor() {
    this.current = Promise.resolve(null);
  }
  queue(e) {
    return this.current = this.current.then(() => e(), () => e());
  }
};
var Qr = require("vscode"), ts = class r33 {
  constructor(e, t = []) {
    this._accountAccessSecretStorage = e;
    this._onDidAccountAccessChangeEmitter = new Qr.EventEmitter();
    this.onDidAccountAccessChange = this._onDidAccountAccessChangeEmitter.event;
    this.value = new Array();
    this._disposable = Qr.Disposable.from(...t, this._onDidAccountAccessChangeEmitter, this._accountAccessSecretStorage.onDidChange(() => this.update()));
  }
  static async create(e, t, n, o) {
    let i = await Oc.create(e, t, n, o), s = new r33(i, [i]);
    return await s.initialize(), s;
  }
  dispose() {
    this._disposable.dispose();
  }
  async initialize() {
    await this.update();
  }
  isAllowedAccess(e) {
    return this.value.includes(e.homeAccountId);
  }
  async setAllowedAccess(e, t) {
    if (t) {
      if (this.value.includes(e.homeAccountId)) return;
      await this._accountAccessSecretStorage.store([...this.value, e.homeAccountId]);
      return;
    }
    await this._accountAccessSecretStorage.store(this.value.filter((n) => n !== e.homeAccountId));
  }
  async update() {
    let e = new Set(this.value), t = await this._accountAccessSecretStorage.get();
    this.value = t ?? [], (e.size !== this.value.length || !this.value.every((n) => e.has(n))) && this._onDidAccountAccessChangeEmitter.fire();
  }
}, Oc = class r34 {
  constructor(e, t, n, o) {
    this._secretStorage = e;
    this._cloudName = t;
    this._logger = n;
    this._migrations = o;
    this._onDidChangeEmitter = new Qr.EventEmitter();
    this.onDidChange = this._onDidChangeEmitter.event;
    this._key = `accounts-${this._cloudName}`;
    this._disposable = Qr.Disposable.from(this._onDidChangeEmitter, this._secretStorage.onDidChange((i) => {
      i.key === this._key && this._onDidChangeEmitter.fire();
    }));
  }
  static async create(e, t, n, o) {
    let i = new r34(e, t, n, o);
    return await i.initialize(), i;
  }
  async initialize() {
    if (!(!this._migrations || await this.get())) try {
      let t = /* @__PURE__ */ new Set();
      for (let { clientId: n, authority: o } of this._migrations) {
        let i = `accounts-${this._cloudName}-${n}-${o}`, s = await this._secretStorage.get(i);
        s && JSON.parse(s).forEach((c) => t.add(c));
      }
      t.size > 0 && await this.store(Array.from(t));
    } catch (t) {
      this._logger.error(`Failed to migrate account access secret storage: ${t}`);
    }
  }
  async get() {
    let e = await this._secretStorage.get(this._key);
    if (e) return JSON.parse(e);
  }
  store(e) {
    return this._secretStorage.store(this._key, JSON.stringify(e));
  }
  delete() {
    return this._secretStorage.delete(this._key);
  }
  dispose() {
    this._disposable.dispose();
  }
};
var rs = class r35 {
  constructor(e, t, n, o, i) {
    this._pcasSecretStorage = e;
    this._accountAccess = t;
    this._secretStorage = n;
    this._logger = o;
    this._pcas = /* @__PURE__ */ new Map();
    this._pcaDisposables = /* @__PURE__ */ new Map();
    this._onDidAccountsChangeEmitter = new ht.EventEmitter();
    this.onDidAccountsChange = this._onDidAccountsChangeEmitter.event;
    this._disposable = ht.Disposable.from(...i, this._registerSecretStorageHandler(), this._onDidAccountsChangeEmitter);
  }
  static async create(e, t, n) {
    let o = await bc.create(e, n), i = await o.getOldValue(), s = await ts.create(e, n, t, i), a = new r35(o, s, e, t, [o, s]);
    return await a.initialize(), a;
  }
  _registerSecretStorageHandler() {
    return this._pcasSecretStorage.onDidChange(() => this._handleSecretStorageChange());
  }
  async initialize() {
    this._logger.debug("[initialize] Initializing PublicClientApplicationManager");
    let e;
    try {
      e = await this._pcasSecretStorage.get();
    } catch (i) {
      this._logger.error("[initialize] Error initializing PublicClientApplicationManager:", i), await this._pcasSecretStorage.delete();
    }
    if (!e) return;
    let t = new Array();
    for (let i of e) try {
      t.push(this._doCreatePublicClientApplication(i));
    } catch {
      this._logger.error("[initialize] Error intitializing PCA:", i);
    }
    let n = await Promise.allSettled(t), o = false;
    for (let i of n) if (i.status === "rejected") this._logger.error("[initialize] Error getting PCA:", i.reason);
    else if (!i.value.accounts.length) {
      o = true;
      let s = i.value.clientId;
      this._pcaDisposables.get(s)?.dispose(), this._pcaDisposables.delete(s), this._pcas.delete(s), this._logger.debug(`[initialize] [${s}] PCA disposed because it's empty.`);
    }
    o && await this._storePublicClientApplications(), this._logger.debug("[initialize] PublicClientApplicationManager initialized");
  }
  dispose() {
    this._disposable.dispose(), ht.Disposable.from(...this._pcaDisposables.values()).dispose();
  }
  async getOrCreate(e, t) {
    let n = this._pcas.get(e);
    if (n ? this._logger.debug(`[getOrCreate] [${e}] PublicClientApplicationManager cache hit`) : (this._logger.debug(`[getOrCreate] [${e}] PublicClientApplicationManager cache miss, creating new PCA...`), n = await this._doCreatePublicClientApplication(e), await this._storePublicClientApplications(), this._logger.debug(`[getOrCreate] [${e}] PCA created.`)), t?.length) {
      this._logger.debug(`[getOrCreate] [${e}] Migrating refresh tokens to PCA...`);
      for (let o of t) try {
        (await n.acquireTokenByRefreshToken({ refreshToken: o, forceCache: true, scopes: [] }))?.account && this._logger.debug(`[getOrCreate] [${e}] Refresh token migrated to PCA.`);
      } catch (i) {
        this._logger.error(`[getOrCreate] [${e}] Error migrating refresh token:`, i);
      }
    }
    return n;
  }
  async _doCreatePublicClientApplication(e) {
    let t = await es.create(e, this._secretStorage, this._accountAccess, this._logger);
    this._pcas.set(e, t);
    let n = ht.Disposable.from(t, t.onDidAccountsChange((o) => this._onDidAccountsChangeEmitter.fire(o)), t.onDidRemoveLastAccount(() => {
      n.dispose(), this._pcaDisposables.delete(e), this._pcas.delete(e), this._logger.debug(`[_doCreatePublicClientApplication] [${e}] PCA disposed. Firing off storing of PCAs...`), this._storePublicClientApplications();
    }));
    return this._pcaDisposables.set(e, n), t.accounts.length > 0 && this._onDidAccountsChangeEmitter.fire({ added: t.accounts, changed: [], deleted: [] }), t;
  }
  getAll() {
    return Array.from(this._pcas.values());
  }
  async _handleSecretStorageChange() {
    this._logger.debug("[_handleSecretStorageChange] Handling PCAs secret storage change...");
    let e;
    try {
      e = await this._pcasSecretStorage.get();
    } catch {
      await this._storePublicClientApplications();
      return;
    }
    if (!e) {
      this._logger.debug("[_handleSecretStorageChange] PCAs deleted in secret storage. Disposing all..."), ht.Disposable.from(...this._pcaDisposables.values()).dispose(), this._pcas.clear(), this._pcaDisposables.clear(), this._logger.debug("[_handleSecretStorageChange] Finished PCAs secret storage change.");
      return;
    }
    let t = new Set(e);
    for (let n of this._pcas.keys()) t.delete(n) || this._logger.debug(`[_handleSecretStorageChange] PCA was deleted in another window: ${n}`);
    for (let n of t) try {
      this._logger.debug(`[_handleSecretStorageChange] [${n}] Creating new PCA that was created in another window...`), await this._doCreatePublicClientApplication(n), this._logger.debug(`[_handleSecretStorageChange] [${n}] PCA created.`);
    } catch {
      this._logger.error(`Failed to create new PublicClientApplication: ${n}`);
      continue;
    }
    this._logger.debug("[_handleSecretStorageChange] Finished handling PCAs secret storage change.");
  }
  _storePublicClientApplications() {
    return this._pcasSecretStorage.store(Array.from(this._pcas.keys()));
  }
}, bc = class r36 {
  constructor(e, t) {
    this._secretStorage = e;
    this._cloudName = t;
    this._onDidChangeEmitter = new ht.EventEmitter();
    this.onDidChange = this._onDidChangeEmitter.event;
    this._oldKey = `publicClientApplications-${this._cloudName}`;
    this._key = `publicClients-${this._cloudName}`;
    this._disposable = ht.Disposable.from(this._onDidChangeEmitter, this._secretStorage.onDidChange((n) => {
      n.key === this._key && this._onDidChangeEmitter.fire();
    }));
  }
  static async create(e, t) {
    let n = new r36(e, t);
    return await n.initialize(), n;
  }
  async initialize() {
    let e = await this.getOldValue();
    if (!e) return;
    let t = await this.get() ?? [];
    for (let { clientId: n } of e) t.includes(n) || t.push(n);
    await this.store(t);
  }
  async get() {
    let e = await this._secretStorage.get(this._key);
    if (e) return JSON.parse(e);
  }
  async getOldValue() {
    let e = await this._secretStorage.get(this._oldKey);
    if (!e) return;
    let t = [];
    for (let n of JSON.parse(e)) {
      let o = JSON.parse(n);
      o.clientId && o.authority && t.push(o);
    }
    return t;
  }
  store(e) {
    return this._secretStorage.store(this._key, JSON.stringify(e));
  }
  delete() {
    return this._secretStorage.delete(this._key);
  }
  dispose() {
    this._disposable.dispose();
  }
};
var nI = { dispose: () => {
} }, oI = (r38, e, t) => nI, Zn = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = oI;
  }
  sendTelemetryEvent(e, t, n) {
  }
  sendRawTelemetryEvent(e, t, n) {
  }
  sendDangerousTelemetryEvent(e, t, n) {
  }
  sendTelemetryErrorEvent(e, t, n) {
  }
  sendDangerousTelemetryErrorEvent(e, t, n) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var eo = class {
  constructor(e) {
    this.sharedProperties = {};
    this._telemetryReporter = new Zn("");
  }
  get telemetryReporter() {
    return this._telemetryReporter;
  }
  setSharedProperty(e, t) {
    this.sharedProperties[e] = t;
  }
  postEvent(e, t) {
    let n = { ...this.sharedProperties, ...Object.fromEntries(t) };
    this._telemetryReporter.sendTelemetryEvent(e, n);
  }
  sendLoginEvent(e) {
    this._telemetryReporter.sendTelemetryEvent("login", { scopes: JSON.stringify(this._scrubGuids(e)) });
  }
  sendLoginFailedEvent() {
    this._telemetryReporter.sendTelemetryEvent("loginFailed");
  }
  sendLogoutEvent() {
    this._telemetryReporter.sendTelemetryEvent("logout");
  }
  sendLogoutFailedEvent() {
    this._telemetryReporter.sendTelemetryEvent("logoutFailed");
  }
  sendAccountEvent(e, t) {
    this._telemetryReporter.sendTelemetryEvent("account", { scopes: JSON.stringify(this._scrubGuids(e)), accountType: t });
  }
  _scrubGuids(e) {
    return e.map((t) => t.replace(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i, "{guid}"));
  }
}, ns = class extends eo {
  sendLoginEvent(e) {
    this._telemetryReporter.sendTelemetryEvent("loginMicrosoftSovereignCloud", { scopes: JSON.stringify(this._scrubGuids(e)) });
  }
  sendLoginFailedEvent() {
    this._telemetryReporter.sendTelemetryEvent("loginMicrosoftSovereignCloudFailed");
  }
  sendLogoutEvent() {
    this._telemetryReporter.sendTelemetryEvent("logoutMicrosoftSovereignCloud");
  }
  sendLogoutFailedEvent() {
    this._telemetryReporter.sendTelemetryEvent("logoutMicrosoftSovereignCloudFailed");
  }
};
var iI = "aebc6443-996d-45c2-90f0-388ff96faa56", sI = "organizations", aI = ["openid", "email", "profile", "offline_access"], cI = "User.Read", Jr = class {
  constructor(e = []) {
    this.originalScopes = e;
    let t = [...e];
    t.sort(), this.allScopes = t, this.scopeStr = t.join(" "), this.scopesToSend = this.getScopesToSend(t), this.clientId = this.getClientId(this.allScopes), this.tenant = this.getTenant(this.allScopes), this.tenantId = this.getTenantId(this.tenant);
  }
  getClientId(e) {
    return e.reduce((t, n) => n.startsWith("VSCODE_CLIENT_ID:") ? n.split("VSCODE_CLIENT_ID:")[1] : t, void 0) ?? iI;
  }
  getTenant(e) {
    return e.reduce((t, n) => n.startsWith("VSCODE_TENANT:") ? n.split("VSCODE_TENANT:")[1] : t, void 0) ?? sI;
  }
  getTenantId(e) {
    switch (e) {
      case "organizations":
      case "common":
      case "consumers":
        return;
      default:
        return this.tenant;
    }
  }
  getScopesToSend(e) {
    let t = e.filter((o) => !o.startsWith("VSCODE_")), n = new Set(t);
    for (let o of aI) n.delete(o);
    return n.size || t.push(cI), t;
  }
};
var os = class {
  constructor() {
    this.data = [];
  }
  wrapEvent(e, t, n) {
    return (o, i, s) => e((a) => {
      let c = this.data[this.data.length - 1];
      if (!t) {
        c ? c.buffers.push(() => o.call(i, a)) : o.call(i, a);
        return;
      }
      let l = c;
      if (!l) {
        o.call(i, t(n, a));
        return;
      }
      l.items ??= [], l.items.push(a), l.buffers.length === 0 && c.buffers.push(() => {
        l.reducedResult ??= n ? l.items.reduce(t, n) : l.items.reduce(t), o.call(i, l.reducedResult);
      });
    }, void 0, s);
  }
  bufferEvents(e) {
    let t = { buffers: new Array() };
    this.data.push(t);
    let n = e();
    return this.data.pop(), t.buffers.forEach((o) => o()), n;
  }
  async bufferEventsAsync(e) {
    let t = { buffers: new Array() };
    this.data.push(t);
    try {
      return await e();
    } finally {
      this.data.pop(), t.buffers.forEach((n) => n());
    }
  }
};
var ss = require("vscode");
var pe = require("vscode");
var lI = ["vscode", "vscode-insiders", "vscode-wsl", "vscode-exploration"];
function Bf(r38) {
  return lI.includes(r38.scheme) || /(?:^|\.)vscode\.dev$/.test(r38.authority) || /(?:^|\.)github\.dev$/.test(r38.authority) || /^localhost:\d+$/.test(r38.authority) || /^127\.0\.0\.1:\d+$/.test(r38.authority);
}
var is = class {
  constructor(e, t, n) {
    this._uriHandler = e;
    this._redirectUri = t;
    this._logger = n;
  }
  async listenForAuthCode() {
    await this._responseDeferred?.cancel(), this._responseDeferred = new ao();
    let e = await this._responseDeferred.p;
    if (this._responseDeferred = void 0, e) return e;
    throw new Error("No valid response received for authorization code.");
  }
  getRedirectUri() {
    return this._redirectUri;
  }
  closeServer() {
  }
  async openBrowser(e) {
    let t = await pe.env.asExternalUri(pe.Uri.parse(`${pe.env.uriScheme}://vscode.microsoft-authentication`));
    Bf(t) ? this._getCodeResponseFromUriHandler() : this._getCodeResponseFromQuickPick();
    let n = pe.Uri.parse(e + `&state=${encodeURI(t.toString(true))}`);
    await pe.env.openExternal(n);
  }
  async _getCodeResponseFromUriHandler() {
    if (!this._responseDeferred) throw new Error("No listener for auth code");
    let e = await qc(this._uriHandler.event);
    this._logger.debug(`Received URL event. Authority: ${e.authority}`);
    let t = new URL(e.toString(true));
    this._responseDeferred?.complete({ code: t.searchParams.get("code") ?? void 0, state: t.searchParams.get("state") ?? void 0, error: t.searchParams.get("error") ?? void 0, error_description: t.searchParams.get("error_description") ?? void 0, error_uri: t.searchParams.get("error_uri") ?? void 0 });
  }
  async _getCodeResponseFromQuickPick() {
    if (!this._responseDeferred) throw new Error("No listener for auth code");
    let e = pe.window.createInputBox();
    e.ignoreFocusOut = true, e.title = pe.l10n.t("Microsoft Authentication"), e.prompt = pe.l10n.t("Provide the authorization code to complete the sign in flow."), e.placeholder = pe.l10n.t("Paste authorization code here..."), e.show();
    let t = await new Promise((n) => {
      let o, i = pe.Disposable.from(e, e.onDidAccept(async () => {
        if (!e.value) {
          e.validationMessage = pe.l10n.t("Authorization code is required.");
          return;
        }
        let s = e.value;
        o = s, n(s), e.hide();
      }), e.onDidChangeValue(() => {
        e.validationMessage = void 0;
      }), e.onDidHide(() => {
        i.dispose(), o || n(void 0);
      }));
      Promise.allSettled([this._responseDeferred?.p]).then(() => i.dispose());
    });
    if (!this._responseDeferred.isSettled) {
      if (t) {
        this._logger.debug("Received auth code from quick pick"), this._responseDeferred.complete({ code: t, state: void 0, error: void 0, error_description: void 0, error_uri: void 0 });
        return;
      }
      this._responseDeferred.complete({ code: void 0, state: void 0, error: "User cancelled", error_description: "User cancelled", error_uri: void 0 });
    }
  }
};
var Nc = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Microsoft Account - Sign In</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		html {
			height: 100%;
		}

		body {
			box-sizing: border-box;
			min-height: 100%;
			margin: 0;
			padding: 15px 30px;
			display: flex;
			flex-direction: column;
			color: white;
			font-family: "Segoe UI","Helvetica Neue","Helvetica",Arial,sans-serif;
			background-color: #2C2C32;
		}

		.branding {
			background-image: url('data:image/png;base64,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');
			background-size: 24px;
			background-repeat: no-repeat;
			background-position: left center;
			padding-left: 36px;
			font-size: 20px;
			letter-spacing: -0.04rem;
			font-weight: 400;
			color: white;
			text-decoration: none;
		}

		.message-container {
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 30px;
		}

		.message {
			font-weight: 300;
			font-size: 1.4rem;
		}

		body.error .message {
			display: none;
		}

		body.error .error-message {
			display: block;
		}

		.error-message {
			display: none;
			max-width: 800px;
			font-weight: 300;
			font-size: 1.3rem;
		}

		.error-text {
			color: salmon;
			font-size: 1rem;
		}

		@font-face {
			font-family: 'Segoe UI';
			src: url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.eot"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.eot?#iefix") format("embedded-opentype");
			src: local("Segoe UI Light"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2") format("woff2"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf") format("truetype"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.svg#web") format("svg");
			font-weight: 200
		}

		@font-face {
			font-family: 'Segoe UI';
			src: url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.eot"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.eot?#iefix") format("embedded-opentype");
			src: local("Segoe UI Semilight"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2") format("woff2"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf") format("truetype"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.svg#web") format("svg");
			font-weight: 300
		}

		@font-face {
			font-family: 'Segoe UI';
			src: url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.eot"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.eot?#iefix") format("embedded-opentype");
			src: local("Segoe UI"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf") format("truetype"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.svg#web") format("svg");
			font-weight: 400
		}

		@font-face {
			font-family: 'Segoe UI';
			src: url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.eot"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.eot?#iefix") format("embedded-opentype");
			src: local("Segoe UI Semibold"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf") format("truetype"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.svg#web") format("svg");
			font-weight: 600
		}

		@font-face {
			font-family: 'Segoe UI';
			src: url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.eot"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.eot?#iefix") format("embedded-opentype");
			src: local("Segoe UI Bold"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff") format("woff"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf") format("truetype"),url("https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.svg#web") format("svg");
			font-weight: 700
		}
	</style>
</head>

<body>
	<a class="branding" href="https://code.visualstudio.com/">
		Visual Studio Code
	</a>
	<div class="message-container">
		<div class="message">
			You are signed in now and can close this page.
		</div>
		<div class="error-message">
			An error occurred while signing in:
			<div class="error-text"></div>
		</div>
	</div>
	<script>
		var search = new URLSearchParams(window.location.search);
		var error = search.get('error');
		if (error) {
			const description = search.get('error_description');
			document.querySelector('.error-text')
				.textContent = error + ' - ' + description;
			document.querySelector('body')
				.classList.add('error');
		}
	<\/script>
</body>

</html>
`;
var dI = "https://vscode.dev/redirect";
var Mc = class {
  constructor() {
    this.label = "default";
    this.options = { supportsRemoteExtensionHost: false, supportsWebWorkerExtensionHost: false };
  }
  async trigger({ cachedPca: e, authority: t, scopes: n, loginHint: o, windowHandle: i, logger: s }) {
    return s.info("Trying default msal flow..."), await e.acquireTokenInteractive({ openBrowser: async (a) => {
      await ss.env.openExternal(ss.Uri.parse(a));
    }, scopes: n, authority: t, successTemplate: Nc, errorTemplate: Nc, loginHint: o, prompt: o ? void 0 : "select_account", windowHandle: i });
  }
}, Dc = class {
  constructor() {
    this.label = "protocol handler";
    this.options = { supportsRemoteExtensionHost: true, supportsWebWorkerExtensionHost: false };
  }
  async trigger({ cachedPca: e, authority: t, scopes: n, loginHint: o, windowHandle: i, logger: s, uriHandler: a }) {
    s.info("Trying protocol handler flow...");
    let c = new is(a, dI, s);
    return await e.acquireTokenInteractive({ openBrowser: (l) => c.openBrowser(l), scopes: n, authority: t, loopbackClient: c, loginHint: o, prompt: o ? void 0 : "select_account", windowHandle: i });
  }
}, uI = [new Mc(), new Dc()];
function qf(r38) {
  return uI.filter((e) => {
    let t = true;
    switch (r38.extensionHost) {
      case 1:
        t &&= e.options.supportsRemoteExtensionHost;
        break;
      case 0:
        t &&= e.options.supportsWebWorkerExtensionHost;
        break;
    }
    return t;
  });
}
var hI = "https://vscode.dev/redirect", pI = "9188040d-6c67-4c5b-b112-36a304b66dad", fI = "f8cdef31-a31e-4b4a-93e4-5f571e91255a", to = class r37 {
  constructor(e, t, n, o, i, s = Re.AzureCloud) {
    this._context = e;
    this._telemetryReporter = t;
    this._logger = n;
    this._uriHandler = o;
    this._publicClientManager = i;
    this._env = s;
    this._eventBufferer = new os();
    this._onDidChangeSessionsEmitter = new fe.EventEmitter();
    this.onDidChangeSessions = this._onDidChangeSessionsEmitter.event;
    this._disposables = e.subscriptions;
    let a = this._eventBufferer.wrapEvent(this._publicClientManager.onDidAccountsChange, (c, l) => {
      if (!c) return l;
      let d = { added: [...c.added ?? [], ...l.added ?? []], deleted: [...c.deleted ?? [], ...l.deleted ?? []], changed: [...c.changed ?? [], ...l.changed ?? []] };
      return { added: Array.from(new Map(d.added.map((g) => [g.username, g])).values()), deleted: Array.from(new Map(d.deleted.map((g) => [g.username, g])).values()), changed: Array.from(new Map(d.changed.map((g) => [g.username, g])).values()) };
    }, { added: new Array(), deleted: new Array(), changed: new Array() })((c) => this._handleAccountChange(c));
    this._disposables.push(this._onDidChangeSessionsEmitter, a);
  }
  static async create(e, t, n, o, i = Re.AzureCloud) {
    let s = await rs.create(e.secrets, n, i.name);
    e.subscriptions.push(s);
    let a = new r37(e, t, n, o, s, i);
    return await a.initialize(), a;
  }
  async _migrateSessions() {
    let t = await new hr("microsoft.login.keylist", this._context).getAll((o) => (o.endpoint ||= Re.AzureCloud.activeDirectoryEndpointUrl, o.endpoint === this._env.activeDirectoryEndpointUrl));
    this._context.globalState.update("msalMigration", true);
    let n = /* @__PURE__ */ new Map();
    for (let o of t) {
      let i = new Jr(o.scope.split(" ")), s = `${i.clientId}:${i.tenant}`;
      n.has(s) || n.set(s, { clientId: i.clientId, tenant: i.tenant, refreshTokens: [] }), n.get(s).refreshTokens.push(o.refreshToken);
    }
    for (let { clientId: o, refreshTokens: i } of n.values()) await this._publicClientManager.getOrCreate(o, i);
  }
  async initialize() {
    this._context.globalState.get("msalMigration", false) || await this._migrateSessions();
    for (let e of this._publicClientManager.getAll()) for (let t of e.accounts) {
      if (!t.idTokenClaims?.tid) continue;
      let n = t.idTokenClaims.tid, o = n === pI || n === fI ? "msa" : "aad";
      this._telemetryReporter.sendAccountEvent([], o);
    }
  }
  _handleAccountChange({ added: e, changed: t, deleted: n }) {
    this._logger.debug(`[_handleAccountChange] added: ${e.length}, changed: ${t.length}, deleted: ${n.length}`), this._onDidChangeSessionsEmitter.fire({ added: e.map(this.sessionFromAccountInfo), changed: t.map(this.sessionFromAccountInfo), removed: n.map(this.sessionFromAccountInfo) });
  }
  async getSessions(e, t) {
    let n = e === void 0, o = new Jr(e);
    if (this._logger.info("[getSessions]", n ? "[all]" : `[${o.scopeStr}]`, "starting"), n) {
      let a = /* @__PURE__ */ new Map();
      for (let l of this._publicClientManager.getAll()) for (let d of l.accounts) a.has(d.homeAccountId) || a.set(d.homeAccountId, this.sessionFromAccountInfo(d));
      let c = Array.from(a.values());
      return this._logger.info("[getSessions] [all]", `returned ${c.length} session(s)`), c;
    }
    let i = await this._publicClientManager.getOrCreate(o.clientId), s = await this.getAllSessionsForPca(i, o, t?.account);
    return this._logger.info(`[getSessions] [${o.scopeStr}] returned ${s.length} session(s)`), s;
  }
  async createSession(e, t) {
    let n = new Jr(e);
    this._logger.info("[createSession]", `[${n.scopeStr}]`, "starting");
    let o = await this._publicClientManager.getOrCreate(n.clientId), i, s = fe.l10n.t("Yes"), a = fe.l10n.t("No"), c = async (f) => {
      if (i === void 0) return;
      let A = i ? fe.l10n.t("Having trouble logging in? Would you like to try a different way? ({0})", f) : fe.l10n.t("You have not yet finished authorizing this extension to use your Microsoft Account. Would you like to try a different way? ({0})", f);
      if (await fe.window.showWarningMessage(A, s, a) !== s) throw new fe.CancellationError();
    }, l = typeof process < "u" && typeof process?.versions?.node == "string", d = qf({ extensionHost: l ? this._context.extension.extensionKind === fe.ExtensionKind.UI ? 2 : 1 : 0 }), u = new URL(n.tenant, this._env.activeDirectoryEndpointUrl).toString(), g;
    for (let f of d) {
      if (f !== d[0]) try {
        await c(f.label);
      } finally {
        this._telemetryReporter.sendLoginFailedEvent();
      }
      try {
        let A = await f.trigger({ cachedPca: o, authority: u, scopes: n.scopesToSend, loginHint: t.account?.label, windowHandle: fe.window.nativeHandle ? Buffer.from(fe.window.nativeHandle) : void 0, logger: this._logger, uriHandler: this._uriHandler }), C = this.sessionFromAuthenticationResult(A, n.originalScopes);
        return this._telemetryReporter.sendLoginEvent(C.scopes), this._logger.info("[createSession]", `[${n.scopeStr}]`, "returned session"), C;
      } catch (A) {
        if (g = A, A instanceof Ae || A?.errorCode === le.userCanceled) throw this._telemetryReporter.sendLoginFailedEvent(), A;
        A instanceof fe.CancellationError && (i = true);
      }
    }
    throw this._telemetryReporter.sendLoginFailedEvent(), g ?? new Error("No auth flow succeeded");
  }
  async removeSession(e) {
    this._logger.info("[removeSession]", e, "starting");
    let t = new Array();
    for (let o of this._publicClientManager.getAll()) {
      let i = o.accounts;
      for (let s of i) s.homeAccountId === e && (this._telemetryReporter.sendLogoutEvent(), t.push(o.removeAccount(s)), this._logger.info(`[removeSession] [${e}] [${o.clientId}] removing session...`));
    }
    if (!t.length) {
      this._logger.info("[removeSession]", e, "session not found");
      return;
    }
    let n = await Promise.allSettled(t);
    for (let o of n) o.status === "rejected" && (this._telemetryReporter.sendLogoutFailedEvent(), this._logger.error("[removeSession]", e, "error removing session", o.reason));
    this._logger.info("[removeSession]", e, `attempted to remove ${t.length} sessions`);
  }
  async getAllSessionsForPca(e, t, n) {
    let o = n ? e.accounts.filter((c) => c.homeAccountId === n.id) : e.accounts, i = /* @__PURE__ */ new Map();
    for (let c of o) {
      let l = i.get(c.homeAccountId) || [];
      l.push(c), i.set(c.homeAccountId, l);
    }
    o = Array.from(i.values()).map((c) => {
      if (c.length === 1) return c[0];
      if (t.tenantId) {
        let l = c.find((d) => d.tenantId === t.tenantId);
        if (l) return l;
      }
      return c.find((l) => l.tenantId === l.idTokenClaims?.tid) || c[0];
    });
    let s = new URL(t.tenant, this._env.activeDirectoryEndpointUrl).toString(), a = [];
    return this._eventBufferer.bufferEventsAsync(async () => {
      for (let c of o) try {
        let l;
        t.tenantId ? c.tenantId !== t.tenantId && (l = true) : c.tenantId !== c.idTokenClaims?.tid && (l = true);
        let d = await e.acquireTokenSilent({ account: c, authority: s, scopes: t.scopesToSend, redirectUri: hI, forceRefresh: l });
        a.push(this.sessionFromAuthenticationResult(d, t.originalScopes));
      } catch {
        continue;
      }
      return a;
    });
  }
  sessionFromAuthenticationResult(e, t) {
    return { accessToken: e.accessToken, idToken: e.idToken, id: e.account?.homeAccountId ?? e.uniqueId, account: { id: e.account?.homeAccountId ?? e.uniqueId, label: e.account?.username ?? "Unknown" }, scopes: t };
  }
  sessionFromAccountInfo(e) {
    return { accessToken: "1234", id: e.homeAccountId, scopes: [], account: { id: e.homeAccountId, label: e.username }, idToken: e.idToken };
  }
};
var G = require("vscode");
async function Gf(r38, e) {
  let t = G.workspace.getConfiguration("microsoft-sovereign-cloud").get("environment"), n;
  if (!t) return;
  if (t === "custom") {
    let a = G.workspace.getConfiguration("microsoft-sovereign-cloud").get("customEnvironment");
    if (!a) {
      await G.window.showErrorMessage(G.l10n.t("You must also specify a custom environment in order to use the custom environment auth provider."), G.l10n.t("Open settings")) && await G.commands.executeCommand("workbench.action.openSettingsJson", "microsoft-sovereign-cloud.customEnvironment");
      return;
    }
    try {
      Re.add(a);
    } catch (c) {
      await G.window.showErrorMessage(G.l10n.t("Error validating custom environment setting: {0}", c.message), G.l10n.t("Open settings")) && await G.commands.executeCommand("workbench.action.openSettings", "microsoft-sovereign-cloud.customEnvironment");
      return;
    }
    n = a.name;
  } else n = t;
  let o = Re.get(n);
  if (!o) {
    await G.window.showErrorMessage(G.l10n.t("The environment `{0}` is not a valid environment.", n), G.l10n.t("Open settings"));
    return;
  }
  let i = await to.create(r38, new ns(""), G.window.createOutputChannel(G.l10n.t("Microsoft Sovereign Cloud Authentication"), { log: true }), e, o), s = G.authentication.registerAuthenticationProvider("microsoft-sovereign-cloud", n, i, { supportsMultipleAccounts: true });
  return r38.subscriptions.push(s), s;
}
async function Vf(r38, e) {
  let t = new pr();
  r38.subscriptions.push(t);
  let n = await to.create(r38, e, X, t);
  r38.subscriptions.push(G.authentication.registerAuthenticationProvider("microsoft", "Microsoft", n, { supportsMultipleAccounts: true }));
  let o = await Gf(r38, t);
  r38.subscriptions.push(G.workspace.onDidChangeConfiguration(async (i) => {
    i.affectsConfiguration("microsoft-sovereign-cloud") && (o?.dispose(), o = await Gf(r38, t));
  }));
}
var gI = { getTreatmentVariable: () => {
} };
async function $f(r38, e, t) {
  return gI;
}
function Kf(r38) {
  let e = ve.workspace.getConfiguration("microsoft-authentication").inspect("implementation");
  if (e?.workspaceFolderValue !== void 0) return X.info(`Acquired MSAL enablement value from 'workspaceFolderValue'. Value: ${e.workspaceFolderValue}`), e.workspaceFolderValue === "msal";
  if (e?.workspaceValue !== void 0) return X.info(`Acquired MSAL enablement value from 'workspaceValue'. Value: ${e.workspaceValue}`), e.workspaceValue === "msal";
  if (e?.globalValue !== void 0) return X.info(`Acquired MSAL enablement value from 'globalValue'. Value: ${e.globalValue}`), e.globalValue === "msal";
  let t = r38.getTreatmentVariable("vscode", "microsoft.useMsal");
  return t !== void 0 ? (X.info(`Acquired MSAL enablement value from 'exp'. Value: ${t}`), t) : (X.info("Acquired MSAL enablement value from default. Value: false"), true);
}
var as;
async function EI(r38) {
  let e = new eo(""), t = await $f(r38, e, ve.env.uriScheme !== "vscode");
  as = Kf(t);
  let n = ve.workspace.getConfiguration("microsoft-authentication").get("clientIdVersion", "v1");
  r38.subscriptions.push(ve.workspace.onDidChangeConfiguration(async (i) => {
    if (!i.affectsConfiguration("microsoft-authentication") || as === Kf(t) && n === ve.workspace.getConfiguration("microsoft-authentication").get("clientIdVersion", "v1")) return;
    let s = ve.l10n.t("Reload");
    await ve.window.showInformationMessage("Reload required", { modal: true, detail: ve.l10n.t("Microsoft Account configuration has been changed.") }, s) === s && ve.commands.executeCommand("workbench.action.reloadWindow");
  }));
  let o = typeof process < "u" && typeof process?.versions?.node == "string";
  as && o ? await Vf(r38, e) : await Xc(r38, e.telemetryReporter);
}
function AI() {
  as ? void 0 : void 0;
}
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@azure/msal-node/dist/cache/serializer/Serializer.mjs:
@azure/msal-node/dist/cache/serializer/Deserializer.mjs:
@azure/msal-node/dist/internals.mjs:
@azure/msal-node/dist/utils/Constants.mjs:
@azure/msal-node/dist/utils/NetworkUtils.mjs:
@azure/msal-node/dist/network/HttpClient.mjs:
@azure/msal-node/dist/error/ManagedIdentityErrorCodes.mjs:
@azure/msal-node/dist/error/ManagedIdentityError.mjs:
@azure/msal-node/dist/config/ManagedIdentityId.mjs:
@azure/msal-node/dist/retry/LinearRetryPolicy.mjs:
@azure/msal-node/dist/network/HttpClientWithRetries.mjs:
@azure/msal-node/dist/error/NodeAuthError.mjs:
@azure/msal-node/dist/config/Configuration.mjs:
@azure/msal-node/dist/crypto/GuidGenerator.mjs:
@azure/msal-node/dist/utils/EncodingUtils.mjs:
@azure/msal-node/dist/crypto/HashUtils.mjs:
@azure/msal-node/dist/crypto/PkceGenerator.mjs:
@azure/msal-node/dist/crypto/CryptoProvider.mjs:
@azure/msal-node/dist/cache/NodeStorage.mjs:
@azure/msal-node/dist/cache/TokenCache.mjs:
@azure/msal-node/dist/client/ClientAssertion.mjs:
@azure/msal-node/dist/packageMetadata.mjs:
@azure/msal-node/dist/client/UsernamePasswordClient.mjs:
@azure/msal-node/dist/client/ClientApplication.mjs:
@azure/msal-node/dist/network/LoopbackClient.mjs:
@azure/msal-node/dist/client/DeviceCodeClient.mjs:
@azure/msal-node/dist/client/PublicClientApplication.mjs:
@azure/msal-node/dist/client/ClientCredentialClient.mjs:
@azure/msal-node/dist/client/OnBehalfOfClient.mjs:
@azure/msal-node/dist/client/ConfidentialClientApplication.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/BaseManagedIdentitySource.mjs:
@azure/msal-node/dist/config/ManagedIdentityRequestParameters.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/AppService.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/AzureArc.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/CloudShell.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/Imds.mjs:
@azure/msal-node/dist/client/ManagedIdentitySources/ServiceFabric.mjs:
@azure/msal-node/dist/client/ManagedIdentityClient.mjs:
@azure/msal-node/dist/client/ManagedIdentityApplication.mjs:
@azure/msal-node/dist/cache/distributed/DistributedCachePlugin.mjs:
@azure/msal-node/dist/index.mjs:
  (*! @azure/msal-node v2.16.3 2025-08-05 *)

@azure/msal-common/dist/utils/Constants.mjs:
@azure/msal-common/dist/error/AuthErrorCodes.mjs:
@azure/msal-common/dist/error/AuthError.mjs:
@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs:
@azure/msal-common/dist/error/ClientAuthError.mjs:
@azure/msal-common/dist/crypto/ICrypto.mjs:
@azure/msal-common/dist/logger/Logger.mjs:
@azure/msal-common/dist/packageMetadata.mjs:
@azure/msal-common/dist/authority/AuthorityOptions.mjs:
@azure/msal-common/dist/account/AuthToken.mjs:
@azure/msal-common/dist/utils/TimeUtils.mjs:
@azure/msal-common/dist/cache/utils/CacheHelpers.mjs:
@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs:
@azure/msal-common/dist/error/ClientConfigurationError.mjs:
@azure/msal-common/dist/utils/StringUtils.mjs:
@azure/msal-common/dist/request/ScopeSet.mjs:
@azure/msal-common/dist/account/ClientInfo.mjs:
@azure/msal-common/dist/account/AccountInfo.mjs:
@azure/msal-common/dist/authority/AuthorityType.mjs:
@azure/msal-common/dist/account/TokenClaims.mjs:
@azure/msal-common/dist/authority/ProtocolMode.mjs:
@azure/msal-common/dist/cache/entities/AccountEntity.mjs:
@azure/msal-common/dist/utils/UrlUtils.mjs:
@azure/msal-common/dist/url/UrlString.mjs:
@azure/msal-common/dist/authority/AuthorityMetadata.mjs:
@azure/msal-common/dist/error/CacheErrorCodes.mjs:
@azure/msal-common/dist/error/CacheError.mjs:
@azure/msal-common/dist/cache/CacheManager.mjs:
@azure/msal-common/dist/config/ClientConfiguration.mjs:
@azure/msal-common/dist/account/CcsCredential.mjs:
@azure/msal-common/dist/constants/AADServerParamKeys.mjs:
@azure/msal-common/dist/request/RequestValidator.mjs:
@azure/msal-common/dist/request/RequestParameterBuilder.mjs:
@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs:
@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs:
@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs:
@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs:
@azure/msal-common/dist/utils/FunctionWrappers.mjs:
@azure/msal-common/dist/authority/RegionDiscovery.mjs:
@azure/msal-common/dist/authority/Authority.mjs:
@azure/msal-common/dist/authority/AuthorityFactory.mjs:
@azure/msal-common/dist/error/ServerError.mjs:
@azure/msal-common/dist/network/ThrottlingUtils.mjs:
@azure/msal-common/dist/error/NetworkError.mjs:
@azure/msal-common/dist/client/BaseClient.mjs:
@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs:
@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs:
@azure/msal-common/dist/utils/ProtocolUtils.mjs:
@azure/msal-common/dist/crypto/PopTokenGenerator.mjs:
@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs:
@azure/msal-common/dist/response/ResponseHandler.mjs:
@azure/msal-common/dist/utils/ClientAssertionUtils.mjs:
@azure/msal-common/dist/client/AuthorizationCodeClient.mjs:
@azure/msal-common/dist/client/RefreshTokenClient.mjs:
@azure/msal-common/dist/client/SilentFlowClient.mjs:
@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs:
@azure/msal-common/dist/index-node.mjs:
  (*! @azure/msal-common v14.16.1 2025-08-05 *)

@azure/msal-node-extensions/dist/utils/Constants.mjs:
@azure/msal-node-extensions/dist/error/PersistenceError.mjs:
@azure/msal-node-extensions/dist/utils/TypeGuards.mjs:
@azure/msal-node-extensions/dist/lock/CrossPlatformLock.mjs:
@azure/msal-node-extensions/dist/persistence/PersistenceCachePlugin.mjs:
@azure/msal-node-extensions/dist/persistence/BasePersistence.mjs:
@azure/msal-node-extensions/dist/persistence/FilePersistence.mjs:
@azure/msal-node-extensions/dist/Dpapi.mjs:
@azure/msal-node-extensions/dist/persistence/DataProtectionScope.mjs:
@azure/msal-node-extensions/dist/persistence/FilePersistenceWithDataProtection.mjs:
@azure/msal-node-extensions/dist/persistence/KeychainPersistence.mjs:
@azure/msal-node-extensions/dist/persistence/LibSecretPersistence.mjs:
@azure/msal-node-extensions/dist/utils/Environment.mjs:
@azure/msal-node-extensions/dist/persistence/PersistenceCreator.mjs:
@azure/msal-node-extensions/dist/packageMetadata.mjs:
@azure/msal-node-extensions/dist/broker/NativeBrokerPlugin.mjs:
@azure/msal-node-extensions/dist/index.mjs:
  (*! @azure/msal-node-extensions v1.5.32 2026-03-18 *)

@azure/msal-node-extensions/dist/lib/msal-common/dist/utils/Constants.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/logger/Logger.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/AuthError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/ClientAuthErrorCodes.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/ClientAuthError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/PlatformBrokerError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/ClientConfigurationErrorCodes.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/ClientConfigurationError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/ServerError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/error/InteractionRequiredAuthError.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/constants/AADServerParamKeys.mjs:
@azure/msal-node-extensions/dist/lib/msal-common/dist/utils/TimeUtils.mjs:
  (*! @azure/msal-node-extensions v1.5.32 2026-03-18 *)
  (*! @azure/msal-common v15.17.0 2026-03-18 *)
*/
