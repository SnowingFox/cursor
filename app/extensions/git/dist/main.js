"use strict";
var wc = Object.create;
var fi = Object.defineProperty;
var fs = Object.getOwnPropertyDescriptor;
var vc = Object.getOwnPropertyNames;
var Rc = Object.getPrototypeOf, Ec = Object.prototype.hasOwnProperty;
var ce = (n6, e) => () => (e || n6((e = { exports: {} }).exports, e), e.exports), xc = (n6, e) => {
  for (var t in e) fi(n6, t, { get: e[t], enumerable: true });
}, gs = (n6, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of vc(e)) !Ec.call(n6, r) && r !== t && fi(n6, r, { get: () => e[r], enumerable: !(i = fs(e, r)) || i.enumerable });
  return n6;
};
var ie = (n6, e, t) => (t = n6 != null ? wc(Rc(n6)) : {}, gs(e || !n6 || !n6.__esModule ? fi(t, "default", { value: n6, enumerable: true }) : t, n6)), Dc = (n6) => gs(fi({}, "__esModule", { value: true }), n6), b = (n6, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? fs(e, t) : e, o = n6.length - 1, s; o >= 0; o--) (s = n6[o]) && (r = (i ? s(e, t, r) : s(r)) || r);
  return i && r && fi(e, t, r), r;
};
var bs = ce((Wt) => {
  "use strict";
  Object.defineProperty(Wt, "__esModule", { value: true });
  Wt.sync = Wt.isexe = void 0;
  var Pc = require("fs"), Sc = require("fs/promises"), kc = async (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return ys(await (0, Sc.stat)(n6), e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Wt.isexe = kc;
  var Tc = (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return ys((0, Pc.statSync)(n6), e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Wt.sync = Tc;
  var ys = (n6, e) => n6.isFile() && Ac(n6, e), Ac = (n6, e) => {
    let t = e.uid ?? process.getuid?.(), i = e.groups ?? process.getgroups?.() ?? [], r = e.gid ?? process.getgid?.() ?? i[0];
    if (t === void 0 || r === void 0) throw new Error("cannot get uid or gid");
    let o = /* @__PURE__ */ new Set([r, ...i]), s = n6.mode, a = n6.uid, l = n6.gid, u = parseInt("100", 8), d = parseInt("010", 8), h = parseInt("001", 8), p = u | d;
    return !!(s & h || s & d && o.has(l) || s & u && a === t || s & p && t === 0);
  };
});
var ws = ce((Kt) => {
  "use strict";
  Object.defineProperty(Kt, "__esModule", { value: true });
  Kt.sync = Kt.isexe = void 0;
  var Ic = require("fs"), _c = require("fs/promises"), Bc = async (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return Cs(await (0, _c.stat)(n6), n6, e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Kt.isexe = Bc;
  var Oc = (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return Cs((0, Ic.statSync)(n6), n6, e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Kt.sync = Oc;
  var Mc = (n6, e) => {
    let { pathExt: t = process.env.PATHEXT || "" } = e, i = t.split(";");
    if (i.indexOf("") !== -1) return true;
    for (let r = 0; r < i.length; r++) {
      let o = i[r].toLowerCase(), s = n6.substring(n6.length - o.length).toLowerCase();
      if (o && s === o) return true;
    }
    return false;
  }, Cs = (n6, e, t) => n6.isFile() && Mc(e, t);
});
var Rs = ce((vs) => {
  "use strict";
  Object.defineProperty(vs, "__esModule", { value: true });
});
var ks = ce((_e) => {
  "use strict";
  var Es = _e && _e.__createBinding || (Object.create ? (function(n6, e, t, i) {
    i === void 0 && (i = t);
    var r = Object.getOwnPropertyDescriptor(e, t);
    (!r || ("get" in r ? !e.__esModule : r.writable || r.configurable)) && (r = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n6, i, r);
  }) : (function(n6, e, t, i) {
    i === void 0 && (i = t), n6[i] = e[t];
  })), Lc = _e && _e.__setModuleDefault || (Object.create ? (function(n6, e) {
    Object.defineProperty(n6, "default", { enumerable: true, value: e });
  }) : function(n6, e) {
    n6.default = e;
  }), xs = _e && _e.__importStar || function(n6) {
    if (n6 && n6.__esModule) return n6;
    var e = {};
    if (n6 != null) for (var t in n6) t !== "default" && Object.prototype.hasOwnProperty.call(n6, t) && Es(e, n6, t);
    return Lc(e, n6), e;
  }, Gc = _e && _e.__exportStar || function(n6, e) {
    for (var t in n6) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Es(e, n6, t);
  };
  Object.defineProperty(_e, "__esModule", { value: true });
  _e.sync = _e.isexe = _e.posix = _e.win32 = void 0;
  var Ds = xs(bs());
  _e.posix = Ds;
  var Ps = xs(ws());
  _e.win32 = Ps;
  Gc(Rs(), _e);
  var Hc = process.env._ISEXE_TEST_PLATFORM_ || process.platform, Ss = Hc === "win32" ? Ps : Ds;
  _e.isexe = Ss.isexe;
  _e.sync = Ss.sync;
});
var Hs = ce((pm, Gs) => {
  var { isexe: Nc, sync: Fc } = ks(), { join: Uc, delimiter: $c, sep: Ts, posix: As } = require("path"), Is = process.platform === "win32", _s = new RegExp(`[${As.sep}${Ts === As.sep ? "" : Ts}]`.replace(/(\\)/g, "\\$1")), Wc = new RegExp(`^\\.${_s.source}`), Bs = (n6) => Object.assign(new Error(`not found: ${n6}`), { code: "ENOENT" }), Os = (n6, { path: e = process.env.PATH, pathExt: t = process.env.PATHEXT, delimiter: i = $c }) => {
    let r = n6.match(_s) ? [""] : [...Is ? [process.cwd()] : [], ...(e || "").split(i)];
    if (Is) {
      let o = t || [".EXE", ".CMD", ".BAT", ".COM"].join(i), s = o.split(i).flatMap((a) => [a, a.toLowerCase()]);
      return n6.includes(".") && s[0] !== "" && s.unshift(""), { pathEnv: r, pathExt: s, pathExtExe: o };
    }
    return { pathEnv: r, pathExt: [""] };
  }, Ms = (n6, e) => {
    let t = /^".*"$/.test(n6) ? n6.slice(1, -1) : n6;
    return (!t && Wc.test(e) ? e.slice(0, 2) : "") + Uc(t, e);
  }, Ls = async (n6, e = {}) => {
    let { pathEnv: t, pathExt: i, pathExtExe: r } = Os(n6, e), o = [];
    for (let s of t) {
      let a = Ms(s, n6);
      for (let l of i) {
        let u = a + l;
        if (await Nc(u, { pathExt: r, ignoreErrors: true })) {
          if (!e.all) return u;
          o.push(u);
        }
      }
    }
    if (e.all && o.length) return o;
    if (e.nothrow) return null;
    throw Bs(n6);
  }, Kc = (n6, e = {}) => {
    let { pathEnv: t, pathExt: i, pathExtExe: r } = Os(n6, e), o = [];
    for (let s of t) {
      let a = Ms(s, n6);
      for (let l of i) {
        let u = a + l;
        if (Fc(u, { pathExt: r, ignoreErrors: true })) {
          if (!e.all) return u;
          o.push(u);
        }
      }
    }
    if (e.all && o.length) return o;
    if (e.nothrow) return null;
    throw Bs(n6);
  };
  Gs.exports = Ls;
  Ls.sync = Kc;
});
var bo = ce((Te) => {
  "use strict";
  Object.defineProperty(Te, "__esModule", { value: true });
  Te.readFile = Te.writeFileSync = Te.writeFile = Te.read = Te.open = Te.close = Te.stat = Te.createReadStream = Te.pathExists = void 0;
  var Ct = require("fs");
  Te.pathExists = Ct.existsSync;
  Te.createReadStream = Ct.createReadStream;
  async function jc(n6) {
    return new Promise((e, t) => {
      Ct.stat(n6, (i, r) => {
        i ? t(i) : e(r);
      });
    });
  }
  Te.stat = jc;
  async function Jc(n6) {
    return new Promise((e, t) => {
      Ct.close(n6, (i) => {
        i ? t(i) : e();
      });
    });
  }
  Te.close = Jc;
  async function Vc(n6, e) {
    return new Promise((t, i) => {
      Ct.open(n6, e, (r, o) => {
        r ? i(r) : t(o);
      });
    });
  }
  Te.open = Vc;
  async function zc(n6, e, t, i, r) {
    return new Promise((o, s) => {
      Ct.read(n6, e, t, i, r, (a, l, u) => {
        a ? s(a) : o({ bytesRead: l, buffer: u });
      });
    });
  }
  Te.read = zc;
  async function qc(n6, e) {
    return new Promise((t, i) => {
      Ct.writeFile(n6, e, (r) => {
        r ? i(r) : t();
      });
    });
  }
  Te.writeFile = qc;
  function Qc(n6, e) {
    Ct.writeFileSync(n6, e);
  }
  Te.writeFileSync = Qc;
  async function Yc(n6) {
    return new Promise((e, t) => {
      Ct.readFile(n6, (i, r) => {
        i ? t(i) : e(r);
      });
    });
  }
  Te.readFile = Yc;
});
var Qi = ce((Bt) => {
  "use strict";
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.EndOfStreamError = Bt.defaultMessages = void 0;
  Bt.defaultMessages = "End-Of-Stream";
  var Co = class extends Error {
    constructor() {
      super(Bt.defaultMessages);
    }
  };
  Bt.EndOfStreamError = Co;
});
var Ns = ce((Yi) => {
  "use strict";
  Object.defineProperty(Yi, "__esModule", { value: true });
  Yi.Deferred = void 0;
  var wo = class {
    constructor() {
      this.resolve = () => null, this.reject = () => null, this.promise = new Promise((e, t) => {
        this.reject = t, this.resolve = e;
      });
    }
  };
  Yi.Deferred = wo;
});
var Us = ce((jt) => {
  "use strict";
  Object.defineProperty(jt, "__esModule", { value: true });
  jt.StreamReader = jt.EndOfStreamError = void 0;
  var Fs = Qi(), Xc = Ns(), Zc = Qi();
  Object.defineProperty(jt, "EndOfStreamError", { enumerable: true, get: function() {
    return Zc.EndOfStreamError;
  } });
  var eu = 1 * 1024 * 1024, vo = class {
    constructor(e) {
      if (this.s = e, this.deferred = null, this.endOfStream = false, this.peekQueue = [], !e.read || !e.once) throw new Error("Expected an instance of stream.Readable");
      this.s.once("end", () => this.reject(new Fs.EndOfStreamError())), this.s.once("error", (t) => this.reject(t)), this.s.once("close", () => this.reject(new Error("Stream closed")));
    }
    async peek(e, t, i) {
      let r = await this.read(e, t, i);
      return this.peekQueue.push(e.subarray(t, t + r)), r;
    }
    async read(e, t, i) {
      if (i === 0) return 0;
      if (this.peekQueue.length === 0 && this.endOfStream) throw new Fs.EndOfStreamError();
      let r = i, o = 0;
      for (; this.peekQueue.length > 0 && r > 0; ) {
        let s = this.peekQueue.pop();
        if (!s) throw new Error("peekData should be defined");
        let a = Math.min(s.length, r);
        e.set(s.subarray(0, a), t + o), o += a, r -= a, a < s.length && this.peekQueue.push(s.subarray(a));
      }
      for (; r > 0 && !this.endOfStream; ) {
        let s = Math.min(r, eu), a = await this.readFromStream(e, t + o, s);
        if (o += a, a < s) break;
        r -= a;
      }
      return o;
    }
    async readFromStream(e, t, i) {
      let r = this.s.read(i);
      if (r) return e.set(r, t), r.length;
      {
        let o = { buffer: e, offset: t, length: i, deferred: new Xc.Deferred() };
        return this.deferred = o.deferred, this.s.once("readable", () => {
          this.readDeferred(o);
        }), o.deferred.promise;
      }
    }
    readDeferred(e) {
      let t = this.s.read(e.length);
      t ? (e.buffer.set(t, e.offset), e.deferred.resolve(t.length), this.deferred = null) : this.s.once("readable", () => {
        this.readDeferred(e);
      });
    }
    reject(e) {
      this.endOfStream = true, this.deferred && (this.deferred.reject(e), this.deferred = null);
    }
  };
  jt.StreamReader = vo;
});
var Vt = ce((Jt) => {
  "use strict";
  Object.defineProperty(Jt, "__esModule", { value: true });
  Jt.StreamReader = Jt.EndOfStreamError = void 0;
  var tu = Qi();
  Object.defineProperty(Jt, "EndOfStreamError", { enumerable: true, get: function() {
    return tu.EndOfStreamError;
  } });
  var iu = Us();
  Object.defineProperty(Jt, "StreamReader", { enumerable: true, get: function() {
    return iu.StreamReader;
  } });
});
var er = ce((Zi) => {
  "use strict";
  Object.defineProperty(Zi, "__esModule", { value: true });
  Zi.AbstractTokenizer = void 0;
  var Xi = Vt(), Ro = class {
    constructor(e) {
      this.position = 0, this.numBuffer = new Uint8Array(8), this.fileInfo = e || {};
    }
    async readToken(e, t = this.position) {
      let i = Buffer.alloc(e.len);
      if (await this.readBuffer(i, { position: t }) < e.len) throw new Xi.EndOfStreamError();
      return e.get(i, 0);
    }
    async peekToken(e, t = this.position) {
      let i = Buffer.alloc(e.len);
      if (await this.peekBuffer(i, { position: t }) < e.len) throw new Xi.EndOfStreamError();
      return e.get(i, 0);
    }
    async readNumber(e) {
      if (await this.readBuffer(this.numBuffer, { length: e.len }) < e.len) throw new Xi.EndOfStreamError();
      return e.get(this.numBuffer, 0);
    }
    async peekNumber(e) {
      if (await this.peekBuffer(this.numBuffer, { length: e.len }) < e.len) throw new Xi.EndOfStreamError();
      return e.get(this.numBuffer, 0);
    }
    async ignore(e) {
      if (this.fileInfo.size !== void 0) {
        let t = this.fileInfo.size - this.position;
        if (e > t) return this.position += t, t;
      }
      return this.position += e, e;
    }
    async close() {
    }
    normalizeOptions(e, t) {
      if (t && t.position !== void 0 && t.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      return t ? { mayBeLess: t.mayBeLess === true, offset: t.offset ? t.offset : 0, length: t.length ? t.length : e.length - (t.offset ? t.offset : 0), position: t.position ? t.position : this.position } : { mayBeLess: false, offset: 0, length: e.length, position: this.position };
    }
  };
  Zi.AbstractTokenizer = Ro;
});
var $s = ce((ir) => {
  "use strict";
  Object.defineProperty(ir, "__esModule", { value: true });
  ir.ReadStreamTokenizer = void 0;
  var ru = er(), tr = Vt(), ou = 256e3, Eo = class extends ru.AbstractTokenizer {
    constructor(e, t) {
      super(t), this.streamReader = new tr.StreamReader(e);
    }
    async getFileInfo() {
      return this.fileInfo;
    }
    async readBuffer(e, t) {
      let i = this.normalizeOptions(e, t), r = i.position - this.position;
      if (r > 0) return await this.ignore(r), this.readBuffer(e, t);
      if (r < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      if (i.length === 0) return 0;
      let o = await this.streamReader.read(e, i.offset, i.length);
      if (this.position += o, (!t || !t.mayBeLess) && o < i.length) throw new tr.EndOfStreamError();
      return o;
    }
    async peekBuffer(e, t) {
      let i = this.normalizeOptions(e, t), r = 0;
      if (i.position) {
        let o = i.position - this.position;
        if (o > 0) {
          let s = new Uint8Array(i.length + o);
          return r = await this.peekBuffer(s, { mayBeLess: i.mayBeLess }), e.set(s.subarray(o), i.offset), r - o;
        } else if (o < 0) throw new Error("Cannot peek from a negative offset in a stream");
      }
      if (i.length > 0) {
        try {
          r = await this.streamReader.peek(e, i.offset, i.length);
        } catch (o) {
          if (t && t.mayBeLess && o instanceof tr.EndOfStreamError) return 0;
          throw o;
        }
        if (!i.mayBeLess && r < i.length) throw new tr.EndOfStreamError();
      }
      return r;
    }
    async ignore(e) {
      let t = Math.min(ou, e), i = new Uint8Array(t), r = 0;
      for (; r < e; ) {
        let o = e - r, s = await this.readBuffer(i, { length: Math.min(t, o) });
        if (s < 0) return s;
        r += s;
      }
      return r;
    }
  };
  ir.ReadStreamTokenizer = Eo;
});
var Ws = ce((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: true });
  rr.BufferTokenizer = void 0;
  var nu = Vt(), su = er(), xo = class extends su.AbstractTokenizer {
    constructor(e, t) {
      super(t), this.uint8Array = e, this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e.length;
    }
    async readBuffer(e, t) {
      if (t && t.position) {
        if (t.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        this.position = t.position;
      }
      let i = await this.peekBuffer(e, t);
      return this.position += i, i;
    }
    async peekBuffer(e, t) {
      let i = this.normalizeOptions(e, t), r = Math.min(this.uint8Array.length - i.position, i.length);
      if (!i.mayBeLess && r < i.length) throw new nu.EndOfStreamError();
      return e.set(this.uint8Array.subarray(i.position, i.position + r), i.offset), r;
    }
    async close() {
    }
  };
  rr.BufferTokenizer = xo;
});
var or = ce((xt) => {
  "use strict";
  Object.defineProperty(xt, "__esModule", { value: true });
  xt.fromBuffer = xt.fromStream = xt.EndOfStreamError = void 0;
  var au = $s(), lu = Ws(), cu = Vt();
  Object.defineProperty(xt, "EndOfStreamError", { enumerable: true, get: function() {
    return cu.EndOfStreamError;
  } });
  function uu(n6, e) {
    return e = e || {}, new au.ReadStreamTokenizer(n6, e);
  }
  xt.fromStream = uu;
  function du(n6, e) {
    return new lu.BufferTokenizer(n6, e);
  }
  xt.fromBuffer = du;
});
var js = ce((zt) => {
  "use strict";
  Object.defineProperty(zt, "__esModule", { value: true });
  zt.fromFile = zt.FileTokenizer = void 0;
  var hu = er(), Ks = Vt(), gi = bo(), nr = class extends hu.AbstractTokenizer {
    constructor(e, t) {
      super(t), this.fd = e;
    }
    async readBuffer(e, t) {
      let i = this.normalizeOptions(e, t);
      this.position = i.position;
      let r = await gi.read(this.fd, e, i.offset, i.length, i.position);
      if (this.position += r.bytesRead, r.bytesRead < i.length && (!t || !t.mayBeLess)) throw new Ks.EndOfStreamError();
      return r.bytesRead;
    }
    async peekBuffer(e, t) {
      let i = this.normalizeOptions(e, t), r = await gi.read(this.fd, e, i.offset, i.length, i.position);
      if (!i.mayBeLess && r.bytesRead < i.length) throw new Ks.EndOfStreamError();
      return r.bytesRead;
    }
    async close() {
      return gi.close(this.fd);
    }
  };
  zt.FileTokenizer = nr;
  async function mu(n6) {
    let e = await gi.stat(n6);
    if (!e.isFile) throw new Error(`File not a file: ${n6}`);
    let t = await gi.open(n6, "r");
    return new nr(t, { path: n6, size: e.size });
  }
  zt.fromFile = mu;
});
var Vs = ce((dt) => {
  "use strict";
  Object.defineProperty(dt, "__esModule", { value: true });
  dt.fromStream = dt.fromBuffer = dt.EndOfStreamError = dt.fromFile = void 0;
  var pu = bo(), fu = or(), gu = js();
  Object.defineProperty(dt, "fromFile", { enumerable: true, get: function() {
    return gu.fromFile;
  } });
  var Js = or();
  Object.defineProperty(dt, "EndOfStreamError", { enumerable: true, get: function() {
    return Js.EndOfStreamError;
  } });
  Object.defineProperty(dt, "fromBuffer", { enumerable: true, get: function() {
    return Js.fromBuffer;
  } });
  async function yu(n6, e) {
    if (e = e || {}, n6.path) {
      let t = await pu.stat(n6.path);
      e.path = n6.path, e.size = t.size;
    }
    return fu.fromStream(n6, e);
  }
  dt.fromStream = yu;
});
var zs = ce((Do) => {
  Do.read = function(n6, e, t, i, r) {
    var o, s, a = r * 8 - i - 1, l = (1 << a) - 1, u = l >> 1, d = -7, h = t ? r - 1 : 0, p = t ? -1 : 1, g = n6[e + h];
    for (h += p, o = g & (1 << -d) - 1, g >>= -d, d += a; d > 0; o = o * 256 + n6[e + h], h += p, d -= 8) ;
    for (s = o & (1 << -d) - 1, o >>= -d, d += i; d > 0; s = s * 256 + n6[e + h], h += p, d -= 8) ;
    if (o === 0) o = 1 - u;
    else {
      if (o === l) return s ? NaN : (g ? -1 : 1) * (1 / 0);
      s = s + Math.pow(2, i), o = o - u;
    }
    return (g ? -1 : 1) * s * Math.pow(2, o - i);
  };
  Do.write = function(n6, e, t, i, r, o) {
    var s, a, l, u = o * 8 - r - 1, d = (1 << u) - 1, h = d >> 1, p = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = i ? 0 : o - 1, y = i ? 1 : -1, C = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = d) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + h >= 1 ? e += p / l : e += p * Math.pow(2, 1 - h), e * l >= 2 && (s++, l /= 2), s + h >= d ? (a = 0, s = d) : s + h >= 1 ? (a = (e * l - 1) * Math.pow(2, r), s = s + h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, r), s = 0)); r >= 8; n6[t + g] = a & 255, g += y, a /= 256, r -= 8) ;
    for (s = s << r | a, u += r; u > 0; n6[t + g] = s & 255, g += y, s /= 256, u -= 8) ;
    n6[t + g - y] |= C * 128;
  };
});
var qs = ce((F) => {
  "use strict";
  Object.defineProperty(F, "__esModule", { value: true });
  F.AnsiStringType = F.StringType = F.BufferType = F.Uint8ArrayType = F.IgnoreType = F.Float80_LE = F.Float80_BE = F.Float64_LE = F.Float64_BE = F.Float32_LE = F.Float32_BE = F.Float16_LE = F.Float16_BE = F.INT64_BE = F.UINT64_BE = F.INT64_LE = F.UINT64_LE = F.INT32_LE = F.INT32_BE = F.INT24_BE = F.INT24_LE = F.INT16_LE = F.INT16_BE = F.INT8 = F.UINT32_BE = F.UINT32_LE = F.UINT24_BE = F.UINT24_LE = F.UINT16_BE = F.UINT16_LE = F.UINT8 = void 0;
  var Dt = zs();
  function Y(n6) {
    return new DataView(n6.buffer, n6.byteOffset);
  }
  F.UINT8 = { len: 1, get(n6, e) {
    return Y(n6).getUint8(e);
  }, put(n6, e, t) {
    return Y(n6).setUint8(e, t), e + 1;
  } };
  F.UINT16_LE = { len: 2, get(n6, e) {
    return Y(n6).getUint16(e, true);
  }, put(n6, e, t) {
    return Y(n6).setUint16(e, t, true), e + 2;
  } };
  F.UINT16_BE = { len: 2, get(n6, e) {
    return Y(n6).getUint16(e);
  }, put(n6, e, t) {
    return Y(n6).setUint16(e, t), e + 2;
  } };
  F.UINT24_LE = { len: 3, get(n6, e) {
    let t = Y(n6);
    return t.getUint8(e) + (t.getUint16(e + 1, true) << 8);
  }, put(n6, e, t) {
    let i = Y(n6);
    return i.setUint8(e, t & 255), i.setUint16(e + 1, t >> 8, true), e + 3;
  } };
  F.UINT24_BE = { len: 3, get(n6, e) {
    let t = Y(n6);
    return (t.getUint16(e) << 8) + t.getUint8(e + 2);
  }, put(n6, e, t) {
    let i = Y(n6);
    return i.setUint16(e, t >> 8), i.setUint8(e + 2, t & 255), e + 3;
  } };
  F.UINT32_LE = { len: 4, get(n6, e) {
    return Y(n6).getUint32(e, true);
  }, put(n6, e, t) {
    return Y(n6).setUint32(e, t, true), e + 4;
  } };
  F.UINT32_BE = { len: 4, get(n6, e) {
    return Y(n6).getUint32(e);
  }, put(n6, e, t) {
    return Y(n6).setUint32(e, t), e + 4;
  } };
  F.INT8 = { len: 1, get(n6, e) {
    return Y(n6).getInt8(e);
  }, put(n6, e, t) {
    return Y(n6).setInt8(e, t), e + 1;
  } };
  F.INT16_BE = { len: 2, get(n6, e) {
    return Y(n6).getInt16(e);
  }, put(n6, e, t) {
    return Y(n6).setInt16(e, t), e + 2;
  } };
  F.INT16_LE = { len: 2, get(n6, e) {
    return Y(n6).getInt16(e, true);
  }, put(n6, e, t) {
    return Y(n6).setInt16(e, t, true), e + 2;
  } };
  F.INT24_LE = { len: 3, get(n6, e) {
    let t = F.UINT24_LE.get(n6, e);
    return t > 8388607 ? t - 16777216 : t;
  }, put(n6, e, t) {
    let i = Y(n6);
    return i.setUint8(e, t & 255), i.setUint16(e + 1, t >> 8, true), e + 3;
  } };
  F.INT24_BE = { len: 3, get(n6, e) {
    let t = F.UINT24_BE.get(n6, e);
    return t > 8388607 ? t - 16777216 : t;
  }, put(n6, e, t) {
    let i = Y(n6);
    return i.setUint16(e, t >> 8), i.setUint8(e + 2, t & 255), e + 3;
  } };
  F.INT32_BE = { len: 4, get(n6, e) {
    return Y(n6).getInt32(e);
  }, put(n6, e, t) {
    return Y(n6).setInt32(e, t), e + 4;
  } };
  F.INT32_LE = { len: 4, get(n6, e) {
    return Y(n6).getInt32(e, true);
  }, put(n6, e, t) {
    return Y(n6).setInt32(e, t, true), e + 4;
  } };
  F.UINT64_LE = { len: 8, get(n6, e) {
    return Y(n6).getBigUint64(e, true);
  }, put(n6, e, t) {
    return Y(n6).setBigUint64(e, t, true), e + 8;
  } };
  F.INT64_LE = { len: 8, get(n6, e) {
    return Y(n6).getBigInt64(e, true);
  }, put(n6, e, t) {
    return Y(n6).setBigInt64(e, t, true), e + 8;
  } };
  F.UINT64_BE = { len: 8, get(n6, e) {
    return Y(n6).getBigUint64(e);
  }, put(n6, e, t) {
    return Y(n6).setBigUint64(e, t), e + 8;
  } };
  F.INT64_BE = { len: 8, get(n6, e) {
    return Y(n6).getBigInt64(e);
  }, put(n6, e, t) {
    return Y(n6).setBigInt64(e, t), e + 8;
  } };
  F.Float16_BE = { len: 2, get(n6, e) {
    return Dt.read(n6, e, false, 10, this.len);
  }, put(n6, e, t) {
    return Dt.write(n6, t, e, false, 10, this.len), e + this.len;
  } };
  F.Float16_LE = { len: 2, get(n6, e) {
    return Dt.read(n6, e, true, 10, this.len);
  }, put(n6, e, t) {
    return Dt.write(n6, t, e, true, 10, this.len), e + this.len;
  } };
  F.Float32_BE = { len: 4, get(n6, e) {
    return Y(n6).getFloat32(e);
  }, put(n6, e, t) {
    return Y(n6).setFloat32(e, t), e + 4;
  } };
  F.Float32_LE = { len: 4, get(n6, e) {
    return Y(n6).getFloat32(e, true);
  }, put(n6, e, t) {
    return Y(n6).setFloat32(e, t, true), e + 4;
  } };
  F.Float64_BE = { len: 8, get(n6, e) {
    return Y(n6).getFloat64(e);
  }, put(n6, e, t) {
    return Y(n6).setFloat64(e, t), e + 8;
  } };
  F.Float64_LE = { len: 8, get(n6, e) {
    return Y(n6).getFloat64(e, true);
  }, put(n6, e, t) {
    return Y(n6).setFloat64(e, t, true), e + 8;
  } };
  F.Float80_BE = { len: 10, get(n6, e) {
    return Dt.read(n6, e, false, 63, this.len);
  }, put(n6, e, t) {
    return Dt.write(n6, t, e, false, 63, this.len), e + this.len;
  } };
  F.Float80_LE = { len: 10, get(n6, e) {
    return Dt.read(n6, e, true, 63, this.len);
  }, put(n6, e, t) {
    return Dt.write(n6, t, e, true, 63, this.len), e + this.len;
  } };
  var Po = class {
    constructor(e) {
      this.len = e;
    }
    get(e, t) {
    }
  };
  F.IgnoreType = Po;
  var So = class {
    constructor(e) {
      this.len = e;
    }
    get(e, t) {
      return e.subarray(t, t + this.len);
    }
  };
  F.Uint8ArrayType = So;
  var ko = class {
    constructor(e) {
      this.len = e;
    }
    get(e, t) {
      return Buffer.from(e.subarray(t, t + this.len));
    }
  };
  F.BufferType = ko;
  var To = class {
    constructor(e, t) {
      this.len = e, this.encoding = t;
    }
    get(e, t) {
      return Buffer.from(e).toString(this.encoding, t, t + this.len);
    }
  };
  F.StringType = To;
  var sr = class n6 {
    constructor(e) {
      this.len = e;
    }
    static decode(e, t, i) {
      let r = "";
      for (let o = t; o < i; ++o) r += n6.codePointToString(n6.singleByteDecoder(e[o]));
      return r;
    }
    static inRange(e, t, i) {
      return t <= e && e <= i;
    }
    static codePointToString(e) {
      return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
    }
    static singleByteDecoder(e) {
      if (n6.inRange(e, 0, 127)) return e;
      let t = n6.windows1252[e - 128];
      if (t === null) throw Error("invaliding encoding");
      return t;
    }
    get(e, t = 0) {
      return n6.decode(e, t, t + this.len);
    }
  };
  F.AnsiStringType = sr;
  sr.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];
});
var Qs = ce((ar) => {
  "use strict";
  ar.stringToBytes = (n6) => [...n6].map((e) => e.charCodeAt(0));
  ar.tarHeaderChecksumMatches = (n6, e = 0) => {
    let t = parseInt(n6.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(t)) return false;
    let i = 256;
    for (let r = e; r < e + 148; r++) i += n6[r];
    for (let r = e + 156; r < e + 512; r++) i += n6[r];
    return t === i;
  };
  ar.uint32SyncSafeToken = { get: (n6, e) => n6[e + 3] & 127 | n6[e + 2] << 7 | n6[e + 1] << 14 | n6[e] << 21, len: 4 };
});
var Xs = ce((Tm, Ys) => {
  "use strict";
  Ys.exports = { extensions: ["jpg", "png", "apng", "gif", "webp", "flif", "xcf", "cr2", "cr3", "orf", "arw", "dng", "nef", "rw2", "raf", "tif", "bmp", "icns", "jxr", "psd", "indd", "zip", "tar", "rar", "gz", "bz2", "7z", "dmg", "mp4", "mid", "mkv", "webm", "mov", "avi", "mpg", "mp2", "mp3", "m4a", "oga", "ogg", "ogv", "opus", "flac", "wav", "spx", "amr", "pdf", "epub", "exe", "swf", "rtf", "wasm", "woff", "woff2", "eot", "ttf", "otf", "ico", "flv", "ps", "xz", "sqlite", "nes", "crx", "xpi", "cab", "deb", "ar", "rpm", "Z", "lz", "cfb", "mxf", "mts", "blend", "bpg", "docx", "pptx", "xlsx", "3gp", "3g2", "jp2", "jpm", "jpx", "mj2", "aif", "qcp", "odt", "ods", "odp", "xml", "mobi", "heic", "cur", "ktx", "ape", "wv", "dcm", "ics", "glb", "pcap", "dsf", "lnk", "alias", "voc", "ac3", "m4v", "m4p", "m4b", "f4v", "f4p", "f4b", "f4a", "mie", "asf", "ogm", "ogx", "mpc", "arrow", "shp", "aac", "mp1", "it", "s3m", "xm", "ai", "skp", "avif", "eps", "lzh", "pgp", "asar", "stl", "chm", "3mf", "zst", "jxl", "vcf"], mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/flif", "image/x-xcf", "image/x-canon-cr2", "image/x-canon-cr3", "image/tiff", "image/bmp", "image/vnd.ms-photo", "image/vnd.adobe.photoshop", "application/x-indesign", "application/epub+zip", "application/x-xpinstall", "application/vnd.oasis.opendocument.text", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/zip", "application/x-tar", "application/x-rar-compressed", "application/gzip", "application/x-bzip2", "application/x-7z-compressed", "application/x-apple-diskimage", "application/x-apache-arrow", "video/mp4", "audio/midi", "video/x-matroska", "video/webm", "video/quicktime", "video/vnd.avi", "audio/vnd.wave", "audio/qcelp", "audio/x-ms-asf", "video/x-ms-asf", "application/vnd.ms-asf", "video/mpeg", "video/3gpp", "audio/mpeg", "audio/mp4", "audio/opus", "video/ogg", "audio/ogg", "application/ogg", "audio/x-flac", "audio/ape", "audio/wavpack", "audio/amr", "application/pdf", "application/x-msdownload", "application/x-shockwave-flash", "application/rtf", "application/wasm", "font/woff", "font/woff2", "application/vnd.ms-fontobject", "font/ttf", "font/otf", "image/x-icon", "video/x-flv", "application/postscript", "application/eps", "application/x-xz", "application/x-sqlite3", "application/x-nintendo-nes-rom", "application/x-google-chrome-extension", "application/vnd.ms-cab-compressed", "application/x-deb", "application/x-unix-archive", "application/x-rpm", "application/x-compress", "application/x-lzip", "application/x-cfb", "application/x-mie", "application/mxf", "video/mp2t", "application/x-blender", "image/bpg", "image/jp2", "image/jpx", "image/jpm", "image/mj2", "audio/aiff", "application/xml", "application/x-mobipocket-ebook", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/icns", "image/ktx", "application/dicom", "audio/x-musepack", "text/calendar", "text/vcard", "model/gltf-binary", "application/vnd.tcpdump.pcap", "audio/x-dsf", "application/x.ms.shortcut", "application/x.apple.alias", "audio/x-voc", "audio/vnd.dolby.dd-raw", "audio/x-m4a", "image/apng", "image/x-olympus-orf", "image/x-sony-arw", "image/x-adobe-dng", "image/x-nikon-nef", "image/x-panasonic-rw2", "image/x-fujifilm-raf", "video/x-m4v", "video/3gpp2", "application/x-esri-shape", "audio/aac", "audio/x-it", "audio/x-s3m", "audio/x-xm", "video/MP1S", "video/MP2P", "application/vnd.sketchup.skp", "image/avif", "application/x-lzh-compressed", "application/pgp-encrypted", "application/x-asar", "model/stl", "application/vnd.ms-htmlhelp", "model/3mf", "image/jxl", "application/zstd"] };
});
var Zs = ce((exports, module) => {
  "use strict";
  var Token = qs(), strtok3 = or(), { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } = Qs(), supported = Xs(), minimumBytes = 4100;
  async function fromStream(n6) {
    let e = await strtok3.fromStream(n6);
    try {
      return await fromTokenizer(e);
    } finally {
      await e.close();
    }
  }
  async function fromBuffer(n6) {
    if (!(n6 instanceof Uint8Array || n6 instanceof ArrayBuffer || Buffer.isBuffer(n6))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof n6}\``);
    let e = n6 instanceof Buffer ? n6 : Buffer.from(n6);
    if (!(e && e.length > 1)) return;
    let t = strtok3.fromBuffer(e);
    return fromTokenizer(t);
  }
  function _check(n6, e, t) {
    t = { offset: 0, ...t };
    for (let [i, r] of e.entries()) if (t.mask) {
      if (r !== (t.mask[i] & n6[i + t.offset])) return false;
    } else if (r !== n6[i + t.offset]) return false;
    return true;
  }
  async function fromTokenizer(n6) {
    try {
      return _fromTokenizer(n6);
    } catch (e) {
      if (!(e instanceof strtok3.EndOfStreamError)) throw e;
    }
  }
  async function _fromTokenizer(n6) {
    let e = Buffer.alloc(minimumBytes), t = 12, i = (o, s) => _check(e, o, s), r = (o, s) => i(stringToBytes(o), s);
    if (n6.fileInfo.size || (n6.fileInfo.size = Number.MAX_SAFE_INTEGER), await n6.peekBuffer(e, { length: t, mayBeLess: true }), i([66, 77])) return { ext: "bmp", mime: "image/bmp" };
    if (i([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
    if (i([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
    if (i([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
    if (i([37, 33])) return await n6.peekBuffer(e, { length: 24, mayBeLess: true }), r("PS-Adobe-", { offset: 2 }) && r(" EPSF-", { offset: 14 }) ? { ext: "eps", mime: "application/eps" } : { ext: "ps", mime: "application/postscript" };
    if (i([31, 160]) || i([31, 157])) return { ext: "Z", mime: "application/x-compress" };
    if (i([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
    if (i([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
    if (i([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
    if (i([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
    if (r("ID3")) {
      await n6.ignore(6);
      let o = await n6.readToken(uint32SyncSafeToken);
      return n6.position + o > n6.fileInfo.size ? { ext: "mp3", mime: "audio/mpeg" } : (await n6.ignore(o), fromTokenizer(n6));
    }
    if (r("MP+")) return { ext: "mpc", mime: "audio/x-musepack" };
    if ((e[0] === 67 || e[0] === 70) && i([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
    if (i([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
    if (r("FLIF")) return { ext: "flif", mime: "image/flif" };
    if (r("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
    if (r("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" };
    if (r("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" };
    if (r("FORM")) return { ext: "aif", mime: "audio/aiff" };
    if (r("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" };
    if (i([80, 75, 3, 4])) {
      try {
        for (; n6.position + 30 < n6.fileInfo.size; ) {
          await n6.readBuffer(e, { length: 30 });
          let o = { compressedSize: e.readUInt32LE(18), uncompressedSize: e.readUInt32LE(22), filenameLength: e.readUInt16LE(26), extraFieldLength: e.readUInt16LE(28) };
          if (o.filename = await n6.readToken(new Token.StringType(o.filenameLength, "utf-8")), await n6.ignore(o.extraFieldLength), o.filename === "META-INF/mozilla.rsa") return { ext: "xpi", mime: "application/x-xpinstall" };
          if (o.filename.endsWith(".rels") || o.filename.endsWith(".xml")) switch (o.filename.split("/")[0]) {
            case "_rels":
              break;
            case "word":
              return { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
            case "ppt":
              return { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" };
            case "xl":
              return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
            default:
              break;
          }
          if (o.filename.startsWith("xl/")) return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
          if (o.filename.startsWith("3D/") && o.filename.endsWith(".model")) return { ext: "3mf", mime: "model/3mf" };
          if (o.filename === "mimetype" && o.compressedSize === o.uncompressedSize) switch (await n6.readToken(new Token.StringType(o.compressedSize, "utf-8"))) {
            case "application/epub+zip":
              return { ext: "epub", mime: "application/epub+zip" };
            case "application/vnd.oasis.opendocument.text":
              return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
            case "application/vnd.oasis.opendocument.spreadsheet":
              return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
            case "application/vnd.oasis.opendocument.presentation":
              return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
            default:
          }
          if (o.compressedSize === 0) {
            let s = -1;
            for (; s < 0 && n6.position < n6.fileInfo.size; ) await n6.peekBuffer(e, { mayBeLess: true }), s = e.indexOf("504B0304", 0, "hex"), await n6.ignore(s >= 0 ? s : e.length);
          } else await n6.ignore(o.compressedSize);
        }
      } catch (o) {
        if (!(o instanceof strtok3.EndOfStreamError)) throw o;
      }
      return { ext: "zip", mime: "application/zip" };
    }
    if (r("OggS")) {
      await n6.ignore(28);
      let o = Buffer.alloc(8);
      return await n6.readBuffer(o), _check(o, [79, 112, 117, 115, 72, 101, 97, 100]) ? { ext: "opus", mime: "audio/opus" } : _check(o, [128, 116, 104, 101, 111, 114, 97]) ? { ext: "ogv", mime: "video/ogg" } : _check(o, [1, 118, 105, 100, 101, 111, 0]) ? { ext: "ogm", mime: "video/ogg" } : _check(o, [127, 70, 76, 65, 67]) ? { ext: "oga", mime: "audio/ogg" } : _check(o, [83, 112, 101, 101, 120, 32, 32]) ? { ext: "spx", mime: "audio/ogg" } : _check(o, [1, 118, 111, 114, 98, 105, 115]) ? { ext: "ogg", mime: "audio/ogg" } : { ext: "ogx", mime: "application/ogg" };
    }
    if (i([80, 75]) && (e[2] === 3 || e[2] === 5 || e[2] === 7) && (e[3] === 4 || e[3] === 6 || e[3] === 8)) return { ext: "zip", mime: "application/zip" };
    if (r("ftyp", { offset: 4 }) && (e[8] & 96) !== 0) {
      let o = e.toString("binary", 8, 12).replace("\0", " ").trim();
      switch (o) {
        case "avif":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return o.startsWith("3g") ? o.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (r("MThd")) return { ext: "mid", mime: "audio/midi" };
    if (r("wOFF") && (i([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
    if (r("wOF2") && (i([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
    if (i([212, 195, 178, 161]) || i([161, 178, 195, 212])) return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
    if (r("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
    if (r("LZIP")) return { ext: "lz", mime: "application/x-lzip" };
    if (r("fLaC")) return { ext: "flac", mime: "audio/x-flac" };
    if (i([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
    if (r("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
    if (r("%PDF")) {
      await n6.ignore(1350);
      let o = 10 * 1024 * 1024, s = Buffer.alloc(Math.min(o, n6.fileInfo.size));
      return await n6.readBuffer(s, { mayBeLess: true }), s.includes(Buffer.from("AIPrivateData")) ? { ext: "ai", mime: "application/postscript" } : { ext: "pdf", mime: "application/pdf" };
    }
    if (i([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
    if (i([73, 73, 42, 0])) return r("CR", { offset: 8 }) ? { ext: "cr2", mime: "image/x-canon-cr2" } : i([28, 0, 254, 0], { offset: 8 }) || i([31, 0, 11, 0], { offset: 8 }) ? { ext: "nef", mime: "image/x-nikon-nef" } : i([8, 0, 0, 0], { offset: 4 }) && (i([45, 0, 254, 0], { offset: 8 }) || i([39, 0, 254, 0], { offset: 8 })) ? { ext: "dng", mime: "image/x-adobe-dng" } : (e = Buffer.alloc(24), await n6.peekBuffer(e), (i([16, 251, 134, 1], { offset: 4 }) || i([8, 0, 0, 0], { offset: 4 })) && i([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 }) ? { ext: "arw", mime: "image/x-sony-arw" } : { ext: "tif", mime: "image/tiff" });
    if (i([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
    if (r("MAC ")) return { ext: "ape", mime: "audio/ape" };
    if (i([26, 69, 223, 163])) {
      async function o() {
        let d = await n6.peekNumber(Token.UINT8), h = 128, p = 0;
        for (; (d & h) === 0 && h !== 0; ) ++p, h >>= 1;
        let g = Buffer.alloc(p + 1);
        return await n6.readBuffer(g), g;
      }
      async function s() {
        let d = await o(), h = await o();
        h[0] ^= 128 >> h.length - 1;
        let p = Math.min(6, h.length);
        return { id: d.readUIntBE(0, d.length), len: h.readUIntBE(h.length - p, p) };
      }
      async function a(d, h) {
        for (; h > 0; ) {
          let p = await s();
          if (p.id === 17026) return n6.readToken(new Token.StringType(p.len, "utf-8"));
          await n6.ignore(p.len), --h;
        }
      }
      let l = await s();
      switch (await a(1, l.len)) {
        case "webm":
          return { ext: "webm", mime: "video/webm" };
        case "matroska":
          return { ext: "mkv", mime: "video/x-matroska" };
        default:
          return;
      }
    }
    if (i([82, 73, 70, 70])) {
      if (i([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
      if (i([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
      if (i([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
    }
    if (r("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" };
    if (i([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
    if (r("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" };
    if (r("MSCF") || r("ISc(")) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
    if (i([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
    if (i([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" };
    if (i([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" };
    if (i([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
    if (r("#!AMR")) return { ext: "amr", mime: "audio/amr" };
    if (r("{\\rtf")) return { ext: "rtf", mime: "application/rtf" };
    if (i([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
    if (r("IMPM")) return { ext: "it", mime: "audio/x-it" };
    if (r("-lh0-", { offset: 2 }) || r("-lh1-", { offset: 2 }) || r("-lh2-", { offset: 2 }) || r("-lh3-", { offset: 2 }) || r("-lh4-", { offset: 2 }) || r("-lh5-", { offset: 2 }) || r("-lh6-", { offset: 2 }) || r("-lh7-", { offset: 2 }) || r("-lzs-", { offset: 2 }) || r("-lz4-", { offset: 2 }) || r("-lz5-", { offset: 2 }) || r("-lhd-", { offset: 2 })) return { ext: "lzh", mime: "application/x-lzh-compressed" };
    if (i([0, 0, 1, 186])) {
      if (i([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" };
      if (i([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" };
    }
    if (r("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
    if (i([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
    if (r("<?xml ")) return { ext: "xml", mime: "application/xml" };
    if (i([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
    if (i([82, 97, 114, 33, 26, 7]) && (e[6] === 0 || e[6] === 1)) return { ext: "rar", mime: "application/x-rar-compressed" };
    if (r("solid ")) return { ext: "stl", mime: "model/stl" };
    if (r("BLENDER")) return { ext: "blend", mime: "application/x-blender" };
    if (r("!<arch>")) return await n6.ignore(8), await n6.readToken(new Token.StringType(13, "ascii")) === "debian-binary" ? { ext: "deb", mime: "application/x-deb" } : { ext: "ar", mime: "application/x-unix-archive" };
    if (i([137, 80, 78, 71, 13, 10, 26, 10])) {
      await n6.ignore(8);
      async function o() {
        return { length: await n6.readToken(Token.INT32_BE), type: await n6.readToken(new Token.StringType(4, "binary")) };
      }
      do {
        let s = await o();
        if (s.length < 0) return;
        switch (s.type) {
          case "IDAT":
            return { ext: "png", mime: "image/png" };
          case "acTL":
            return { ext: "apng", mime: "image/apng" };
          default:
            await n6.ignore(s.length + 4);
        }
      } while (n6.position + 8 < n6.fileInfo.size);
      return { ext: "png", mime: "image/png" };
    }
    if (i([65, 82, 82, 79, 87, 49, 0, 0])) return { ext: "arrow", mime: "application/x-apache-arrow" };
    if (i([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" };
    if (i([102, 114, 101, 101], { offset: 4 }) || i([109, 100, 97, 116], { offset: 4 }) || i([109, 111, 111, 118], { offset: 4 }) || i([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
    if (i([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" };
    if (r("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" };
    if (i([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) return { ext: "rw2", mime: "image/x-panasonic-rw2" };
    if (i([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      async function o() {
        let s = Buffer.alloc(16);
        return await n6.readBuffer(s), { id: s, size: Number(await n6.readToken(Token.UINT64_LE)) };
      }
      for (await n6.ignore(30); n6.position + 24 < n6.fileInfo.size; ) {
        let s = await o(), a = s.size - 24;
        if (_check(s.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
          let l = Buffer.alloc(16);
          if (a -= await n6.readBuffer(l), _check(l, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "audio/x-ms-asf" };
          if (_check(l, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "video/x-ms-asf" };
          break;
        }
        await n6.ignore(a);
      }
      return { ext: "asf", mime: "application/vnd.ms-asf" };
    }
    if (i([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" };
    if ((i([126, 16, 4]) || i([126, 24, 4])) && i([48, 77, 73, 69], { offset: 4 })) return { ext: "mie", mime: "application/x-mie" };
    if (i([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) return { ext: "shp", mime: "application/x-esri-shape" };
    if (i([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) switch (await n6.ignore(20), await n6.readToken(new Token.StringType(4, "ascii"))) {
      case "jp2 ":
        return { ext: "jp2", mime: "image/jp2" };
      case "jpx ":
        return { ext: "jpx", mime: "image/jpx" };
      case "jpm ":
        return { ext: "jpm", mime: "image/jpm" };
      case "mjp2":
        return { ext: "mj2", mime: "image/mj2" };
      default:
        return;
    }
    if (i([255, 10]) || i([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) return { ext: "jxl", mime: "image/jxl" };
    if (i([0, 0, 1, 186]) || i([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
    if (i([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
    if (i([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
    if (i([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
    if (i([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" };
    if (await n6.peekBuffer(e, { length: Math.min(256, n6.fileInfo.size), mayBeLess: true }), r("BEGIN:")) {
      if (r("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" };
      if (r("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" };
    }
    if (r("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" };
    if (r("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" };
    if (r("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" };
    if (i([4, 0, 0, 0]) && e.length >= 16) {
      let o = e.readUInt32LE(12);
      if (o > 12 && e.length >= o + 16) try {
        let s = e.slice(16, o + 16).toString();
        if (JSON.parse(s).files) return { ext: "asar", mime: "application/x-asar" };
      } catch {
      }
    }
    if (i([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
    if (r("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" };
    if (i([71], { offset: 4 }) && (i([71], { offset: 192 }) || i([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
    if (i([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
    if (i([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" };
    if (i([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) return { ext: "lnk", mime: "application/x.ms.shortcut" };
    if (i([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) return { ext: "alias", mime: "application/x.apple.alias" };
    if (i([76, 80], { offset: 34 }) && (i([0, 0, 1], { offset: 8 }) || i([1, 0, 2], { offset: 8 }) || i([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
    if (i([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) return { ext: "indd", mime: "application/x-indesign" };
    if (await n6.peekBuffer(e, { length: Math.min(512, n6.fileInfo.size), mayBeLess: true }), tarHeaderChecksumMatches(e)) return { ext: "tar", mime: "application/x-tar" };
    if (i([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0])) return { ext: "skp", mime: "application/vnd.sketchup.skp" };
    if (r("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" };
    if (e.length >= 2 && i([255, 224], { offset: 0, mask: [255, 224] })) {
      if (i([16], { offset: 1, mask: [22] })) return i([8], { offset: 1, mask: [8] }) ? { ext: "aac", mime: "audio/aac" } : { ext: "aac", mime: "audio/aac" };
      if (i([2], { offset: 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" };
      if (i([4], { offset: 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" };
      if (i([6], { offset: 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" };
    }
  }
  var stream = (readableStream) => new Promise((resolve, reject) => {
    let stream = eval("require")("stream");
    readableStream.on("error", reject), readableStream.once("readable", async () => {
      let n6 = new stream.PassThrough(), e;
      stream.pipeline ? e = stream.pipeline(readableStream, n6, () => {
      }) : e = readableStream.pipe(n6);
      let t = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
      try {
        let i = await fromBuffer(t);
        n6.fileType = i;
      } catch (i) {
        reject(i);
      }
      resolve(e);
    });
  }), fileType = { fromStream, fromTokenizer, fromBuffer, stream };
  Object.defineProperty(fileType, "extensions", { get() {
    return new Set(supported.extensions);
  } });
  Object.defineProperty(fileType, "mimeTypes", { get() {
    return new Set(supported.mimeTypes);
  } });
  module.exports = fileType;
});
var ta = ce((Am, ea) => {
  "use strict";
  var bu = Vs(), lr = Zs();
  async function Cu(n6) {
    let e = await bu.fromFile(n6);
    try {
      return await lr.fromTokenizer(e);
    } finally {
      await e.close();
    }
  }
  var cr = { fromFile: Cu };
  Object.assign(cr, lr);
  Object.defineProperty(cr, "extensions", { get() {
    return lr.extensions;
  } });
  Object.defineProperty(cr, "mimeTypes", { get() {
    return lr.mimeTypes;
  } });
  ea.exports = cr;
});
var Io = ce((Im, qt) => {
  var Ao = require("stream"), wu = require("util"), vu = require("timers");
  qt.exports = function(n6, e) {
    return qt.exports.createStream(n6, e);
  };
  qt.exports.createStream = function(n6, e) {
    return n6 ? ia(n6, e) : new Pt(e);
  };
  qt.exports.createLineStream = function(n6) {
    return console.log("WARNING: byline#createLineStream is deprecated and will be removed soon"), ia(n6);
  };
  function ia(n6, e) {
    if (!n6) throw new Error("expected readStream");
    if (!n6.readable) throw new Error("readStream must be readable");
    var t = new Pt(e);
    return n6.pipe(t), t;
  }
  qt.exports.LineStream = Pt;
  function Pt(n6) {
    Ao.Transform.call(this, n6), n6 = n6 || {}, this._readableState.objectMode = true, this._lineBuffer = [], this._keepEmptyLines = n6.keepEmptyLines || false, this._lastChunkEndedWithCR = false;
    var e = this;
    this.on("pipe", function(t) {
      e.encoding || t instanceof Ao.Readable && (e.encoding = t._readableState.encoding);
    });
  }
  wu.inherits(Pt, Ao.Transform);
  Pt.prototype._transform = function(n6, e, t) {
    e = e || "utf8", Buffer.isBuffer(n6) && (e == "buffer" ? (n6 = n6.toString(), e = "utf8") : n6 = n6.toString(e)), this._chunkEncoding = e;
    var i = n6.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/g);
    this._lastChunkEndedWithCR && n6[0] == `
` && i.shift(), this._lineBuffer.length > 0 && (this._lineBuffer[this._lineBuffer.length - 1] += i[0], i.shift()), this._lastChunkEndedWithCR = n6[n6.length - 1] == "\r", this._lineBuffer = this._lineBuffer.concat(i), this._pushBuffer(e, 1, t);
  };
  Pt.prototype._pushBuffer = function(n6, e, t) {
    for (; this._lineBuffer.length > e; ) {
      var i = this._lineBuffer.shift();
      if ((this._keepEmptyLines || i.length > 0) && !this.push(this._reencode(i, n6))) {
        var r = this;
        vu.setImmediate(function() {
          r._pushBuffer(n6, e, t);
        });
        return;
      }
    }
    t();
  };
  Pt.prototype._flush = function(n6) {
    this._pushBuffer(this._chunkEncoding, 0, n6);
  };
  Pt.prototype._reencode = function(n6, e) {
    return this.encoding && this.encoding != e ? new Buffer(n6, e).toString(this.encoding) : this.encoding ? n6 : new Buffer(n6, e);
  };
});
var ga = ce((Xt) => {
  "use strict";
  Object.defineProperty(Xt, "__esModule", { value: true });
  Xt.sync = Xt.isexe = void 0;
  var Tu = require("fs"), Au = require("fs/promises"), Iu = async (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return fa(await (0, Au.stat)(n6), e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Xt.isexe = Iu;
  var _u = (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return fa((0, Tu.statSync)(n6), e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Xt.sync = _u;
  var fa = (n6, e) => n6.isFile() && Bu(n6, e), Bu = (n6, e) => {
    let t = e.uid ?? process.getuid?.(), i = e.groups ?? process.getgroups?.() ?? [], r = e.gid ?? process.getgid?.() ?? i[0];
    if (t === void 0 || r === void 0) throw new Error("cannot get uid or gid");
    let o = /* @__PURE__ */ new Set([r, ...i]), s = n6.mode, a = n6.uid, l = n6.gid, u = parseInt("100", 8), d = parseInt("010", 8), h = parseInt("001", 8), p = u | d;
    return !!(s & h || s & d && o.has(l) || s & u && a === t || s & p && t === 0);
  };
});
var ba = ce((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.sync = Zt.isexe = void 0;
  var Ou = require("fs"), Mu = require("fs/promises"), Lu = async (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return ya(await (0, Mu.stat)(n6), n6, e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Zt.isexe = Lu;
  var Gu = (n6, e = {}) => {
    let { ignoreErrors: t = false } = e;
    try {
      return ya((0, Ou.statSync)(n6), n6, e);
    } catch (i) {
      let r = i;
      if (t || r.code === "EACCES") return false;
      throw r;
    }
  };
  Zt.sync = Gu;
  var Hu = (n6, e) => {
    let { pathExt: t = process.env.PATHEXT || "" } = e, i = t.split(";");
    if (i.indexOf("") !== -1) return true;
    for (let r = 0; r < i.length; r++) {
      let o = i[r].toLowerCase(), s = n6.substring(n6.length - o.length).toLowerCase();
      if (o && s === o) return true;
    }
    return false;
  }, ya = (n6, e, t) => n6.isFile() && Hu(e, t);
});
var wa = ce((Ca) => {
  "use strict";
  Object.defineProperty(Ca, "__esModule", { value: true });
});
var Pa = ce((Me) => {
  "use strict";
  var va = Me && Me.__createBinding || (Object.create ? (function(n6, e, t, i) {
    i === void 0 && (i = t);
    var r = Object.getOwnPropertyDescriptor(e, t);
    (!r || ("get" in r ? !e.__esModule : r.writable || r.configurable)) && (r = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n6, i, r);
  }) : (function(n6, e, t, i) {
    i === void 0 && (i = t), n6[i] = e[t];
  })), Nu = Me && Me.__setModuleDefault || (Object.create ? (function(n6, e) {
    Object.defineProperty(n6, "default", { enumerable: true, value: e });
  }) : function(n6, e) {
    n6.default = e;
  }), Ra = Me && Me.__importStar || function(n6) {
    if (n6 && n6.__esModule) return n6;
    var e = {};
    if (n6 != null) for (var t in n6) t !== "default" && Object.prototype.hasOwnProperty.call(n6, t) && va(e, n6, t);
    return Nu(e, n6), e;
  }, Fu = Me && Me.__exportStar || function(n6, e) {
    for (var t in n6) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && va(e, n6, t);
  };
  Object.defineProperty(Me, "__esModule", { value: true });
  Me.sync = Me.isexe = Me.posix = Me.win32 = void 0;
  var Ea = Ra(ga());
  Me.posix = Ea;
  var xa = Ra(ba());
  Me.win32 = xa;
  Fu(wa(), Me);
  var Uu = process.env._ISEXE_TEST_PLATFORM_ || process.platform, Da = Uu === "win32" ? xa : Ea;
  Me.isexe = Da.isexe;
  Me.sync = Da.sync;
});
var La = ce((Vm, Ma) => {
  var { isexe: $u, sync: Wu } = Pa(), { join: Ku, delimiter: ju, sep: Sa, posix: ka } = require("path"), Ta = process.platform === "win32", Aa = new RegExp(`[${ka.sep}${Sa === ka.sep ? "" : Sa}]`.replace(/(\\)/g, "\\$1")), Ju = new RegExp(`^\\.${Aa.source}`), Ia = (n6) => Object.assign(new Error(`not found: ${n6}`), { code: "ENOENT" }), _a = (n6, { path: e = process.env.PATH, pathExt: t = process.env.PATHEXT, delimiter: i = ju }) => {
    let r = n6.match(Aa) ? [""] : [...Ta ? [process.cwd()] : [], ...(e || "").split(i)];
    if (Ta) {
      let o = t || [".EXE", ".CMD", ".BAT", ".COM"].join(i), s = o.split(i).flatMap((a) => [a, a.toLowerCase()]);
      return n6.includes(".") && s[0] !== "" && s.unshift(""), { pathEnv: r, pathExt: s, pathExtExe: o };
    }
    return { pathEnv: r, pathExt: [""] };
  }, Ba = (n6, e) => {
    let t = /^".*"$/.test(n6) ? n6.slice(1, -1) : n6;
    return (!t && Ju.test(e) ? e.slice(0, 2) : "") + Ku(t, e);
  }, Oa = async (n6, e = {}) => {
    let { pathEnv: t, pathExt: i, pathExtExe: r } = _a(n6, e), o = [];
    for (let s of t) {
      let a = Ba(s, n6);
      for (let l of i) {
        let u = a + l;
        if (await $u(u, { pathExt: r, ignoreErrors: true })) {
          if (!e.all) return u;
          o.push(u);
        }
      }
    }
    if (e.all && o.length) return o;
    if (e.nothrow) return null;
    throw Ia(n6);
  }, Vu = (n6, e = {}) => {
    let { pathEnv: t, pathExt: i, pathExtExe: r } = _a(n6, e), o = [];
    for (let s of t) {
      let a = Ba(s, n6);
      for (let l of i) {
        let u = a + l;
        if (Wu(u, { pathExt: r, ignoreErrors: true })) {
          if (!e.all) return u;
          o.push(u);
        }
      }
    }
    if (e.all && o.length) return o;
    if (e.nothrow) return null;
    throw Ia(n6);
  };
  Ma.exports = Oa;
  Oa.sync = Vu;
});
var Si = ce((Pp, ml) => {
  "use strict";
  var Gd = require("path"), ft = "\\\\/", cl = `[^${ft}]`, Hd = 0, Rt = "\\.", Nd = "\\+", Fd = "\\?", Er = "\\/", Ud = "(?=.)", ul = "[^/]", nn = `(?:${Er}|$)`, dl = `(?:^|${Er})`, sn = `${Rt}{1,2}${nn}`, $d = `(?!${Rt})`, Wd = `(?!${dl}${sn})`, Kd = `(?!${Rt}{0,1}${nn})`, jd = `(?!${sn})`, Jd = `[^.${Er}]`, Vd = `${ul}*?`, hl = { DOT_LITERAL: Rt, PLUS_LITERAL: Nd, QMARK_LITERAL: Fd, SLASH_LITERAL: Er, ONE_CHAR: Ud, QMARK: ul, END_ANCHOR: nn, DOTS_SLASH: sn, NO_DOT: $d, NO_DOTS: Wd, NO_DOT_SLASH: Kd, NO_DOTS_SLASH: jd, QMARK_NO_DOT: Jd, STAR: Vd, START_ANCHOR: dl }, zd = { ...hl, SLASH_LITERAL: `[${ft}]`, QMARK: cl, STAR: `${cl}*?`, DOTS_SLASH: `${Rt}{1,2}(?:[${ft}]|$)`, NO_DOT: `(?!${Rt})`, NO_DOTS: `(?!(?:^|[${ft}])${Rt}{1,2}(?:[${ft}]|$))`, NO_DOT_SLASH: `(?!${Rt}{0,1}(?:[${ft}]|$))`, NO_DOTS_SLASH: `(?!${Rt}{1,2}(?:[${ft}]|$))`, QMARK_NO_DOT: `[^.${ft}]`, START_ANCHOR: `(?:^|[${ft}])`, END_ANCHOR: `(?:[${ft}]|$)` }, qd = { __proto__: null, alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
  ml.exports = { DEFAULT_MAX_EXTGLOB_RECURSION: Hd, MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: qd, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { __proto__: null, "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: Gd.sep, extglobChars(n6) {
    return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${n6.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
  }, globChars(n6) {
    return n6 === true ? zd : hl;
  } };
});
var xr = ce((ze) => {
  "use strict";
  var Qd = require("path"), Yd = process.platform === "win32", { REGEX_BACKSLASH: Xd, REGEX_REMOVE_BACKSLASH: Zd, REGEX_SPECIAL_CHARS: eh, REGEX_SPECIAL_CHARS_GLOBAL: th } = Si();
  ze.isObject = (n6) => n6 !== null && typeof n6 == "object" && !Array.isArray(n6);
  ze.hasRegexChars = (n6) => eh.test(n6);
  ze.isRegexChar = (n6) => n6.length === 1 && ze.hasRegexChars(n6);
  ze.escapeRegex = (n6) => n6.replace(th, "\\$1");
  ze.toPosixSlashes = (n6) => n6.replace(Xd, "/");
  ze.removeBackslashes = (n6) => n6.replace(Zd, (e) => e === "\\" ? "" : e);
  ze.supportsLookbehinds = () => {
    let n6 = process.version.slice(1).split(".").map(Number);
    return n6.length === 3 && n6[0] >= 9 || n6[0] === 8 && n6[1] >= 10;
  };
  ze.isWindows = (n6) => n6 && typeof n6.windows == "boolean" ? n6.windows : Yd === true || Qd.sep === "\\";
  ze.escapeLast = (n6, e, t) => {
    let i = n6.lastIndexOf(e, t);
    return i === -1 ? n6 : n6[i - 1] === "\\" ? ze.escapeLast(n6, e, i - 1) : `${n6.slice(0, i)}\\${n6.slice(i)}`;
  };
  ze.removePrefix = (n6, e = {}) => {
    let t = n6;
    return t.startsWith("./") && (t = t.slice(2), e.prefix = "./"), t;
  };
  ze.wrapOutput = (n6, e = {}, t = {}) => {
    let i = t.contains ? "" : "^", r = t.contains ? "" : "$", o = `${i}(?:${n6})${r}`;
    return e.negated === true && (o = `(?:^(?!${o}).*$)`), o;
  };
});
var vl = ce((kp, wl) => {
  "use strict";
  var pl = xr(), { CHAR_ASTERISK: an, CHAR_AT: ih, CHAR_BACKWARD_SLASH: ki, CHAR_COMMA: rh, CHAR_DOT: ln, CHAR_EXCLAMATION_MARK: cn, CHAR_FORWARD_SLASH: Cl, CHAR_LEFT_CURLY_BRACE: un, CHAR_LEFT_PARENTHESES: dn, CHAR_LEFT_SQUARE_BRACKET: oh, CHAR_PLUS: nh, CHAR_QUESTION_MARK: fl, CHAR_RIGHT_CURLY_BRACE: sh, CHAR_RIGHT_PARENTHESES: gl, CHAR_RIGHT_SQUARE_BRACKET: ah } = Si(), yl = (n6) => n6 === Cl || n6 === ki, bl = (n6) => {
    n6.isPrefix !== true && (n6.depth = n6.isGlobstar ? 1 / 0 : 1);
  }, lh = (n6, e) => {
    let t = e || {}, i = n6.length - 1, r = t.parts === true || t.scanToEnd === true, o = [], s = [], a = [], l = n6, u = -1, d = 0, h = 0, p = false, g = false, y = false, C = false, S = false, k = false, G = false, I = false, D = false, M = false, H = 0, W, B, $ = { value: "", depth: 0, isGlob: false }, q = () => u >= i, E = () => l.charCodeAt(u + 1), oe = () => (W = B, l.charCodeAt(++u));
    for (; u < i; ) {
      B = oe();
      let Ae;
      if (B === ki) {
        G = $.backslashes = true, B = oe(), B === un && (k = true);
        continue;
      }
      if (k === true || B === un) {
        for (H++; q() !== true && (B = oe()); ) {
          if (B === ki) {
            G = $.backslashes = true, oe();
            continue;
          }
          if (B === un) {
            H++;
            continue;
          }
          if (k !== true && B === ln && (B = oe()) === ln) {
            if (p = $.isBrace = true, y = $.isGlob = true, M = true, r === true) continue;
            break;
          }
          if (k !== true && B === rh) {
            if (p = $.isBrace = true, y = $.isGlob = true, M = true, r === true) continue;
            break;
          }
          if (B === sh && (H--, H === 0)) {
            k = false, p = $.isBrace = true, M = true;
            break;
          }
        }
        if (r === true) continue;
        break;
      }
      if (B === Cl) {
        if (o.push(u), s.push($), $ = { value: "", depth: 0, isGlob: false }, M === true) continue;
        if (W === ln && u === d + 1) {
          d += 2;
          continue;
        }
        h = u + 1;
        continue;
      }
      if (t.noext !== true && (B === nh || B === ih || B === an || B === fl || B === cn) === true && E() === dn) {
        if (y = $.isGlob = true, C = $.isExtglob = true, M = true, B === cn && u === d && (D = true), r === true) {
          for (; q() !== true && (B = oe()); ) {
            if (B === ki) {
              G = $.backslashes = true, B = oe();
              continue;
            }
            if (B === gl) {
              y = $.isGlob = true, M = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (B === an) {
        if (W === an && (S = $.isGlobstar = true), y = $.isGlob = true, M = true, r === true) continue;
        break;
      }
      if (B === fl) {
        if (y = $.isGlob = true, M = true, r === true) continue;
        break;
      }
      if (B === oh) {
        for (; q() !== true && (Ae = oe()); ) {
          if (Ae === ki) {
            G = $.backslashes = true, oe();
            continue;
          }
          if (Ae === ah) {
            g = $.isBracket = true, y = $.isGlob = true, M = true;
            break;
          }
        }
        if (r === true) continue;
        break;
      }
      if (t.nonegate !== true && B === cn && u === d) {
        I = $.negated = true, d++;
        continue;
      }
      if (t.noparen !== true && B === dn) {
        if (y = $.isGlob = true, r === true) {
          for (; q() !== true && (B = oe()); ) {
            if (B === dn) {
              G = $.backslashes = true, B = oe();
              continue;
            }
            if (B === gl) {
              M = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (y === true) {
        if (M = true, r === true) continue;
        break;
      }
    }
    t.noext === true && (C = false, y = false);
    let ne = l, et = "", x = "";
    d > 0 && (et = l.slice(0, d), l = l.slice(d), h -= d), ne && y === true && h > 0 ? (ne = l.slice(0, h), x = l.slice(h)) : y === true ? (ne = "", x = l) : ne = l, ne && ne !== "" && ne !== "/" && ne !== l && yl(ne.charCodeAt(ne.length - 1)) && (ne = ne.slice(0, -1)), t.unescape === true && (x && (x = pl.removeBackslashes(x)), ne && G === true && (ne = pl.removeBackslashes(ne)));
    let w = { prefix: et, input: n6, start: d, base: ne, glob: x, isBrace: p, isBracket: g, isGlob: y, isExtglob: C, isGlobstar: S, negated: I, negatedExtglob: D };
    if (t.tokens === true && (w.maxDepth = 0, yl(B) || s.push($), w.tokens = s), t.parts === true || t.tokens === true) {
      let Ae;
      for (let de = 0; de < o.length; de++) {
        let at = Ae ? Ae + 1 : d, lt = o[de], qe = n6.slice(at, lt);
        t.tokens && (de === 0 && d !== 0 ? (s[de].isPrefix = true, s[de].value = et) : s[de].value = qe, bl(s[de]), w.maxDepth += s[de].depth), (de !== 0 || qe !== "") && a.push(qe), Ae = lt;
      }
      if (Ae && Ae + 1 < n6.length) {
        let de = n6.slice(Ae + 1);
        a.push(de), t.tokens && (s[s.length - 1].value = de, bl(s[s.length - 1]), w.maxDepth += s[s.length - 1].depth);
      }
      w.slashes = o, w.parts = a;
    }
    return w;
  };
  wl.exports = lh;
});
var Pl = ce((Tp, Dl) => {
  "use strict";
  var Ti = Si(), je = xr(), { MAX_LENGTH: Dr, POSIX_REGEX_SOURCE: ch, REGEX_NON_SPECIAL_CHARS: uh, REGEX_SPECIAL_CHARS_BACKREF: dh, REPLACEMENTS: Rl } = Ti, hh = (n6, e) => {
    if (typeof e.expandRange == "function") return e.expandRange(...n6, e);
    n6.sort();
    let t = `[${n6.join("-")}]`;
    try {
      new RegExp(t);
    } catch {
      return n6.map((r) => je.escapeRegex(r)).join("..");
    }
    return t;
  }, ii = (n6, e) => `Missing ${n6}: "${e}" - use "\\\\${e}" to match literal characters`, El = (n6) => {
    let e = [], t = 0, i = 0, r = 0, o = "", s = false;
    for (let a of n6) {
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
        if (a === "[") t++;
        else if (a === "]" && t > 0) t--;
        else if (t === 0) {
          if (a === "(") i++;
          else if (a === ")" && i > 0) i--;
          else if (a === "|" && i === 0) {
            e.push(o), o = "";
            continue;
          }
        }
      }
      o += a;
    }
    return e.push(o), e;
  }, mh = (n6) => {
    let e = false;
    for (let t of n6) {
      if (e === true) {
        e = false;
        continue;
      }
      if (t === "\\") {
        e = true;
        continue;
      }
      if (/[?*+@!()[\]{}]/.test(t)) return false;
    }
    return true;
  }, xl = (n6) => {
    let e = n6.trim(), t = true;
    for (; t === true; ) t = false, /^@\([^\\()[\]{}|]+\)$/.test(e) && (e = e.slice(2, -1), t = true);
    if (mh(e)) return e.replace(/\\(.)/g, "$1");
  }, ph = (n6) => {
    let e = n6.map(xl).filter(Boolean);
    for (let t = 0; t < e.length; t++) for (let i = t + 1; i < e.length; i++) {
      let r = e[t], o = e[i], s = r[0];
      if (!(!s || r !== s.repeat(r.length) || o !== s.repeat(o.length)) && (r === o || r.startsWith(o) || o.startsWith(r))) return true;
    }
    return false;
  }, hn = (n6, e = true) => {
    if (n6[0] !== "+" && n6[0] !== "*" || n6[1] !== "(") return;
    let t = 0, i = 0, r = 0, o = false;
    for (let s = 1; s < n6.length; s++) {
      let a = n6[s];
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
          t++;
          continue;
        }
        if (a === "]" && t > 0) {
          t--;
          continue;
        }
        if (!(t > 0)) {
          if (a === "(") {
            i++;
            continue;
          }
          if (a === ")" && (i--, i === 0)) return e === true && s !== n6.length - 1 ? void 0 : { type: n6[0], body: n6.slice(2, s), end: s };
        }
      }
    }
  }, fh = (n6) => {
    let e = 0, t = [];
    for (; e < n6.length; ) {
      let r = hn(n6.slice(e), false);
      if (!r || r.type !== "*") return;
      let o = El(r.body).map((a) => a.trim());
      if (o.length !== 1) return;
      let s = xl(o[0]);
      if (!s || s.length !== 1) return;
      t.push(s), e += r.end + 1;
    }
    return t.length < 1 ? void 0 : `${t.length === 1 ? je.escapeRegex(t[0]) : `[${t.map((r) => je.escapeRegex(r)).join("")}]`}*`;
  }, gh = (n6) => {
    let e = 0, t = n6.trim(), i = hn(t);
    for (; i; ) e++, t = i.body.trim(), i = hn(t);
    return e;
  }, yh = (n6, e) => {
    if (e.maxExtglobRecursion === false) return { risky: false };
    let t = typeof e.maxExtglobRecursion == "number" ? e.maxExtglobRecursion : Ti.DEFAULT_MAX_EXTGLOB_RECURSION, i = El(n6).map((r) => r.trim());
    if (i.length > 1 && (i.some((r) => r === "") || i.some((r) => /^[*?]+$/.test(r)) || ph(i))) return { risky: true };
    for (let r of i) {
      let o = fh(r);
      if (o) return { risky: true, safeOutput: o };
      if (gh(r) > t) return { risky: true };
    }
    return { risky: false };
  }, mn = (n6, e) => {
    if (typeof n6 != "string") throw new TypeError("Expected a string");
    n6 = Rl[n6] || n6;
    let t = { ...e }, i = typeof t.maxLength == "number" ? Math.min(Dr, t.maxLength) : Dr, r = n6.length;
    if (r > i) throw new SyntaxError(`Input length: ${r}, exceeds maximum allowed length: ${i}`);
    let o = { type: "bos", value: "", output: t.prepend || "" }, s = [o], a = t.capture ? "" : "?:", l = je.isWindows(e), u = Ti.globChars(l), d = Ti.extglobChars(u), { DOT_LITERAL: h, PLUS_LITERAL: p, SLASH_LITERAL: g, ONE_CHAR: y, DOTS_SLASH: C, NO_DOT: S, NO_DOT_SLASH: k, NO_DOTS_SLASH: G, QMARK: I, QMARK_NO_DOT: D, STAR: M, START_ANCHOR: H } = u, W = (O) => `(${a}(?:(?!${H}${O.dot ? C : h}).)*?)`, B = t.dot ? "" : S, $ = t.dot ? I : D, q = t.bash === true ? W(t) : M;
    t.capture && (q = `(${q})`), typeof t.noext == "boolean" && (t.noextglob = t.noext);
    let E = { input: n6, index: -1, start: 0, dot: t.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: s };
    n6 = je.removePrefix(n6, E), r = n6.length;
    let oe = [], ne = [], et = [], x = o, w, Ae = () => E.index === r - 1, de = E.peek = (O = 1) => n6[E.index + O], at = E.advance = () => n6[++E.index] || "", lt = () => n6.slice(E.index + 1), qe = (O = "", we = 0) => {
      E.consumed += O, E.index += we;
    }, Vi = (O) => {
      E.output += O.output != null ? O.output : O.value, qe(O.value);
    }, bc = () => {
      let O = 1;
      for (; de() === "!" && (de(2) !== "(" || de(3) === "?"); ) at(), E.start++, O++;
      return O % 2 === 0 ? false : (E.negated = true, E.start++, true);
    }, zi = (O) => {
      E[O]++, et.push(O);
    }, Et = (O) => {
      E[O]--, et.pop();
    }, te = (O) => {
      if (x.type === "globstar") {
        let we = E.braces > 0 && (O.type === "comma" || O.type === "brace"), _ = O.extglob === true || oe.length && (O.type === "pipe" || O.type === "paren");
        O.type !== "slash" && O.type !== "paren" && !we && !_ && (E.output = E.output.slice(0, -x.output.length), x.type = "star", x.value = "*", x.output = q, E.output += x.output);
      }
      if (oe.length && O.type !== "paren" && (oe[oe.length - 1].inner += O.value), (O.value || O.output) && Vi(O), x && x.type === "text" && O.type === "text") {
        x.value += O.value, x.output = (x.output || "") + O.value;
        return;
      }
      O.prev = x, s.push(O), x = O;
    }, qi = (O, we) => {
      let _ = { ...d[we], conditions: 1, inner: "" };
      _.prev = x, _.parens = E.parens, _.output = E.output, _.startIndex = E.index, _.tokensIndex = s.length;
      let ee = (t.capture ? "(" : "") + _.open;
      zi("parens"), te({ type: O, value: we, output: E.output ? "" : y }), te({ type: "paren", extglob: true, value: at(), output: ee }), oe.push(_);
    }, Cc = (O) => {
      let we = n6.slice(O.startIndex, E.index + 1), _ = n6.slice(O.startIndex + 2, E.index), ee = yh(_, t);
      if ((O.type === "plus" || O.type === "star") && ee.risky) {
        let ge = ee.safeOutput ? (O.output ? "" : y) + (t.capture ? `(${ee.safeOutput})` : ee.safeOutput) : void 0, ct = s[O.tokensIndex];
        ct.type = "text", ct.value = we, ct.output = ge || je.escapeRegex(we);
        for (let ut = O.tokensIndex + 1; ut < s.length; ut++) s[ut].value = "", s[ut].output = "", delete s[ut].suffix;
        E.output = O.output + ct.output, E.backtrack = true, te({ type: "paren", extglob: true, value: w, output: "" }), Et("parens");
        return;
      }
      let ye = O.close + (t.capture ? ")" : ""), Ie;
      if (O.type === "negate") {
        let ge = q;
        if (O.inner && O.inner.length > 1 && O.inner.includes("/") && (ge = W(t)), (ge !== q || Ae() || /^\)+$/.test(lt())) && (ye = O.close = `)$))${ge}`), O.inner.includes("*") && (Ie = lt()) && /^\.[^\\/.]+$/.test(Ie)) {
          let ct = mn(Ie, { ...e, fastpaths: false }).output;
          ye = O.close = `)${ct})${ge})`;
        }
        O.prev.type === "bos" && (E.negatedExtglob = true);
      }
      te({ type: "paren", extglob: true, value: w, output: ye }), Et("parens");
    };
    if (t.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(n6)) {
      let O = false, we = n6.replace(dh, (_, ee, ye, Ie, ge, ct) => Ie === "\\" ? (O = true, _) : Ie === "?" ? ee ? ee + Ie + (ge ? I.repeat(ge.length) : "") : ct === 0 ? $ + (ge ? I.repeat(ge.length) : "") : I.repeat(ye.length) : Ie === "." ? h.repeat(ye.length) : Ie === "*" ? ee ? ee + Ie + (ge ? q : "") : q : ee ? _ : `\\${_}`);
      return O === true && (t.unescape === true ? we = we.replace(/\\/g, "") : we = we.replace(/\\+/g, (_) => _.length % 2 === 0 ? "\\\\" : _ ? "\\" : "")), we === n6 && t.contains === true ? (E.output = n6, E) : (E.output = je.wrapOutput(we, E, e), E);
    }
    for (; !Ae(); ) {
      if (w = at(), w === "\0") continue;
      if (w === "\\") {
        let _ = de();
        if (_ === "/" && t.bash !== true || _ === "." || _ === ";") continue;
        if (!_) {
          w += "\\", te({ type: "text", value: w });
          continue;
        }
        let ee = /^\\+/.exec(lt()), ye = 0;
        if (ee && ee[0].length > 2 && (ye = ee[0].length, E.index += ye, ye % 2 !== 0 && (w += "\\")), t.unescape === true ? w = at() : w += at(), E.brackets === 0) {
          te({ type: "text", value: w });
          continue;
        }
      }
      if (E.brackets > 0 && (w !== "]" || x.value === "[" || x.value === "[^")) {
        if (t.posix !== false && w === ":") {
          let _ = x.value.slice(1);
          if (_.includes("[") && (x.posix = true, _.includes(":"))) {
            let ee = x.value.lastIndexOf("["), ye = x.value.slice(0, ee), Ie = x.value.slice(ee + 2), ge = ch[Ie];
            if (ge) {
              x.value = ye + ge, E.backtrack = true, at(), !o.output && s.indexOf(x) === 1 && (o.output = y);
              continue;
            }
          }
        }
        (w === "[" && de() !== ":" || w === "-" && de() === "]") && (w = `\\${w}`), w === "]" && (x.value === "[" || x.value === "[^") && (w = `\\${w}`), t.posix === true && w === "!" && x.value === "[" && (w = "^"), x.value += w, Vi({ value: w });
        continue;
      }
      if (E.quotes === 1 && w !== '"') {
        w = je.escapeRegex(w), x.value += w, Vi({ value: w });
        continue;
      }
      if (w === '"') {
        E.quotes = E.quotes === 1 ? 0 : 1, t.keepQuotes === true && te({ type: "text", value: w });
        continue;
      }
      if (w === "(") {
        zi("parens"), te({ type: "paren", value: w });
        continue;
      }
      if (w === ")") {
        if (E.parens === 0 && t.strictBrackets === true) throw new SyntaxError(ii("opening", "("));
        let _ = oe[oe.length - 1];
        if (_ && E.parens === _.parens + 1) {
          Cc(oe.pop());
          continue;
        }
        te({ type: "paren", value: w, output: E.parens ? ")" : "\\)" }), Et("parens");
        continue;
      }
      if (w === "[") {
        if (t.nobracket === true || !lt().includes("]")) {
          if (t.nobracket !== true && t.strictBrackets === true) throw new SyntaxError(ii("closing", "]"));
          w = `\\${w}`;
        } else zi("brackets");
        te({ type: "bracket", value: w });
        continue;
      }
      if (w === "]") {
        if (t.nobracket === true || x && x.type === "bracket" && x.value.length === 1) {
          te({ type: "text", value: w, output: `\\${w}` });
          continue;
        }
        if (E.brackets === 0) {
          if (t.strictBrackets === true) throw new SyntaxError(ii("opening", "["));
          te({ type: "text", value: w, output: `\\${w}` });
          continue;
        }
        Et("brackets");
        let _ = x.value.slice(1);
        if (x.posix !== true && _[0] === "^" && !_.includes("/") && (w = `/${w}`), x.value += w, Vi({ value: w }), t.literalBrackets === false || je.hasRegexChars(_)) continue;
        let ee = je.escapeRegex(x.value);
        if (E.output = E.output.slice(0, -x.value.length), t.literalBrackets === true) {
          E.output += ee, x.value = ee;
          continue;
        }
        x.value = `(${a}${ee}|${x.value})`, E.output += x.value;
        continue;
      }
      if (w === "{" && t.nobrace !== true) {
        zi("braces");
        let _ = { type: "brace", value: w, output: "(", outputIndex: E.output.length, tokensIndex: E.tokens.length };
        ne.push(_), te(_);
        continue;
      }
      if (w === "}") {
        let _ = ne[ne.length - 1];
        if (t.nobrace === true || !_) {
          te({ type: "text", value: w, output: w });
          continue;
        }
        let ee = ")";
        if (_.dots === true) {
          let ye = s.slice(), Ie = [];
          for (let ge = ye.length - 1; ge >= 0 && (s.pop(), ye[ge].type !== "brace"); ge--) ye[ge].type !== "dots" && Ie.unshift(ye[ge].value);
          ee = hh(Ie, t), E.backtrack = true;
        }
        if (_.comma !== true && _.dots !== true) {
          let ye = E.output.slice(0, _.outputIndex), Ie = E.tokens.slice(_.tokensIndex);
          _.value = _.output = "\\{", w = ee = "\\}", E.output = ye;
          for (let ge of Ie) E.output += ge.output || ge.value;
        }
        te({ type: "brace", value: w, output: ee }), Et("braces"), ne.pop();
        continue;
      }
      if (w === "|") {
        oe.length > 0 && oe[oe.length - 1].conditions++, te({ type: "text", value: w });
        continue;
      }
      if (w === ",") {
        let _ = w, ee = ne[ne.length - 1];
        ee && et[et.length - 1] === "braces" && (ee.comma = true, _ = "|"), te({ type: "comma", value: w, output: _ });
        continue;
      }
      if (w === "/") {
        if (x.type === "dot" && E.index === E.start + 1) {
          E.start = E.index + 1, E.consumed = "", E.output = "", s.pop(), x = o;
          continue;
        }
        te({ type: "slash", value: w, output: g });
        continue;
      }
      if (w === ".") {
        if (E.braces > 0 && x.type === "dot") {
          x.value === "." && (x.output = h);
          let _ = ne[ne.length - 1];
          x.type = "dots", x.output += w, x.value += w, _.dots = true;
          continue;
        }
        if (E.braces + E.parens === 0 && x.type !== "bos" && x.type !== "slash") {
          te({ type: "text", value: w, output: h });
          continue;
        }
        te({ type: "dot", value: w, output: h });
        continue;
      }
      if (w === "?") {
        if (!(x && x.value === "(") && t.noextglob !== true && de() === "(" && de(2) !== "?") {
          qi("qmark", w);
          continue;
        }
        if (x && x.type === "paren") {
          let ee = de(), ye = w;
          if (ee === "<" && !je.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
          (x.value === "(" && !/[!=<:]/.test(ee) || ee === "<" && !/<([!=]|\w+>)/.test(lt())) && (ye = `\\${w}`), te({ type: "text", value: w, output: ye });
          continue;
        }
        if (t.dot !== true && (x.type === "slash" || x.type === "bos")) {
          te({ type: "qmark", value: w, output: D });
          continue;
        }
        te({ type: "qmark", value: w, output: I });
        continue;
      }
      if (w === "!") {
        if (t.noextglob !== true && de() === "(" && (de(2) !== "?" || !/[!=<:]/.test(de(3)))) {
          qi("negate", w);
          continue;
        }
        if (t.nonegate !== true && E.index === 0) {
          bc();
          continue;
        }
      }
      if (w === "+") {
        if (t.noextglob !== true && de() === "(" && de(2) !== "?") {
          qi("plus", w);
          continue;
        }
        if (x && x.value === "(" || t.regex === false) {
          te({ type: "plus", value: w, output: p });
          continue;
        }
        if (x && (x.type === "bracket" || x.type === "paren" || x.type === "brace") || E.parens > 0) {
          te({ type: "plus", value: w });
          continue;
        }
        te({ type: "plus", value: p });
        continue;
      }
      if (w === "@") {
        if (t.noextglob !== true && de() === "(" && de(2) !== "?") {
          te({ type: "at", extglob: true, value: w, output: "" });
          continue;
        }
        te({ type: "text", value: w });
        continue;
      }
      if (w !== "*") {
        (w === "$" || w === "^") && (w = `\\${w}`);
        let _ = uh.exec(lt());
        _ && (w += _[0], E.index += _[0].length), te({ type: "text", value: w });
        continue;
      }
      if (x && (x.type === "globstar" || x.star === true)) {
        x.type = "star", x.star = true, x.value += w, x.output = q, E.backtrack = true, E.globstar = true, qe(w);
        continue;
      }
      let O = lt();
      if (t.noextglob !== true && /^\([^?]/.test(O)) {
        qi("star", w);
        continue;
      }
      if (x.type === "star") {
        if (t.noglobstar === true) {
          qe(w);
          continue;
        }
        let _ = x.prev, ee = _.prev, ye = _.type === "slash" || _.type === "bos", Ie = ee && (ee.type === "star" || ee.type === "globstar");
        if (t.bash === true && (!ye || O[0] && O[0] !== "/")) {
          te({ type: "star", value: w, output: "" });
          continue;
        }
        let ge = E.braces > 0 && (_.type === "comma" || _.type === "brace"), ct = oe.length && (_.type === "pipe" || _.type === "paren");
        if (!ye && _.type !== "paren" && !ge && !ct) {
          te({ type: "star", value: w, output: "" });
          continue;
        }
        for (; O.slice(0, 3) === "/**"; ) {
          let ut = n6[E.index + 4];
          if (ut && ut !== "/") break;
          O = O.slice(3), qe("/**", 3);
        }
        if (_.type === "bos" && Ae()) {
          x.type = "globstar", x.value += w, x.output = W(t), E.output = x.output, E.globstar = true, qe(w);
          continue;
        }
        if (_.type === "slash" && _.prev.type !== "bos" && !Ie && Ae()) {
          E.output = E.output.slice(0, -(_.output + x.output).length), _.output = `(?:${_.output}`, x.type = "globstar", x.output = W(t) + (t.strictSlashes ? ")" : "|$)"), x.value += w, E.globstar = true, E.output += _.output + x.output, qe(w);
          continue;
        }
        if (_.type === "slash" && _.prev.type !== "bos" && O[0] === "/") {
          let ut = O[1] !== void 0 ? "|$" : "";
          E.output = E.output.slice(0, -(_.output + x.output).length), _.output = `(?:${_.output}`, x.type = "globstar", x.output = `${W(t)}${g}|${g}${ut})`, x.value += w, E.output += _.output + x.output, E.globstar = true, qe(w + at()), te({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (_.type === "bos" && O[0] === "/") {
          x.type = "globstar", x.value += w, x.output = `(?:^|${g}|${W(t)}${g})`, E.output = x.output, E.globstar = true, qe(w + at()), te({ type: "slash", value: "/", output: "" });
          continue;
        }
        E.output = E.output.slice(0, -x.output.length), x.type = "globstar", x.output = W(t), x.value += w, E.output += x.output, E.globstar = true, qe(w);
        continue;
      }
      let we = { type: "star", value: w, output: q };
      if (t.bash === true) {
        we.output = ".*?", (x.type === "bos" || x.type === "slash") && (we.output = B + we.output), te(we);
        continue;
      }
      if (x && (x.type === "bracket" || x.type === "paren") && t.regex === true) {
        we.output = w, te(we);
        continue;
      }
      (E.index === E.start || x.type === "slash" || x.type === "dot") && (x.type === "dot" ? (E.output += k, x.output += k) : t.dot === true ? (E.output += G, x.output += G) : (E.output += B, x.output += B), de() !== "*" && (E.output += y, x.output += y)), te(we);
    }
    for (; E.brackets > 0; ) {
      if (t.strictBrackets === true) throw new SyntaxError(ii("closing", "]"));
      E.output = je.escapeLast(E.output, "["), Et("brackets");
    }
    for (; E.parens > 0; ) {
      if (t.strictBrackets === true) throw new SyntaxError(ii("closing", ")"));
      E.output = je.escapeLast(E.output, "("), Et("parens");
    }
    for (; E.braces > 0; ) {
      if (t.strictBrackets === true) throw new SyntaxError(ii("closing", "}"));
      E.output = je.escapeLast(E.output, "{"), Et("braces");
    }
    if (t.strictSlashes !== true && (x.type === "star" || x.type === "bracket") && te({ type: "maybe_slash", value: "", output: `${g}?` }), E.backtrack === true) {
      E.output = "";
      for (let O of E.tokens) E.output += O.output != null ? O.output : O.value, O.suffix && (E.output += O.suffix);
    }
    return E;
  };
  mn.fastpaths = (n6, e) => {
    let t = { ...e }, i = typeof t.maxLength == "number" ? Math.min(Dr, t.maxLength) : Dr, r = n6.length;
    if (r > i) throw new SyntaxError(`Input length: ${r}, exceeds maximum allowed length: ${i}`);
    n6 = Rl[n6] || n6;
    let o = je.isWindows(e), { DOT_LITERAL: s, SLASH_LITERAL: a, ONE_CHAR: l, DOTS_SLASH: u, NO_DOT: d, NO_DOTS: h, NO_DOTS_SLASH: p, STAR: g, START_ANCHOR: y } = Ti.globChars(o), C = t.dot ? h : d, S = t.dot ? p : d, k = t.capture ? "" : "?:", G = { negated: false, prefix: "" }, I = t.bash === true ? ".*?" : g;
    t.capture && (I = `(${I})`);
    let D = (B) => B.noglobstar === true ? I : `(${k}(?:(?!${y}${B.dot ? u : s}).)*?)`, M = (B) => {
      switch (B) {
        case "*":
          return `${C}${l}${I}`;
        case ".*":
          return `${s}${l}${I}`;
        case "*.*":
          return `${C}${I}${s}${l}${I}`;
        case "*/*":
          return `${C}${I}${a}${l}${S}${I}`;
        case "**":
          return C + D(t);
        case "**/*":
          return `(?:${C}${D(t)}${a})?${S}${l}${I}`;
        case "**/*.*":
          return `(?:${C}${D(t)}${a})?${S}${I}${s}${l}${I}`;
        case "**/.*":
          return `(?:${C}${D(t)}${a})?${s}${l}${I}`;
        default: {
          let $ = /^(.*?)\.(\w+)$/.exec(B);
          if (!$) return;
          let q = M($[1]);
          return q ? q + s + $[2] : void 0;
        }
      }
    }, H = je.removePrefix(n6, G), W = M(H);
    return W && t.strictSlashes !== true && (W += `${a}?`), W;
  };
  Dl.exports = mn;
});
var kl = ce((Ap, Sl) => {
  "use strict";
  var bh = require("path"), Ch = vl(), pn = Pl(), fn = xr(), wh = Si(), vh = (n6) => n6 && typeof n6 == "object" && !Array.isArray(n6), Se = (n6, e, t = false) => {
    if (Array.isArray(n6)) {
      let d = n6.map((p) => Se(p, e, t));
      return (p) => {
        for (let g of d) {
          let y = g(p);
          if (y) return y;
        }
        return false;
      };
    }
    let i = vh(n6) && n6.tokens && n6.input;
    if (n6 === "" || typeof n6 != "string" && !i) throw new TypeError("Expected pattern to be a non-empty string");
    let r = e || {}, o = fn.isWindows(e), s = i ? Se.compileRe(n6, e) : Se.makeRe(n6, e, false, true), a = s.state;
    delete s.state;
    let l = () => false;
    if (r.ignore) {
      let d = { ...e, ignore: null, onMatch: null, onResult: null };
      l = Se(r.ignore, d, t);
    }
    let u = (d, h = false) => {
      let { isMatch: p, match: g, output: y } = Se.test(d, s, e, { glob: n6, posix: o }), C = { glob: n6, state: a, regex: s, posix: o, input: d, output: y, match: g, isMatch: p };
      return typeof r.onResult == "function" && r.onResult(C), p === false ? (C.isMatch = false, h ? C : false) : l(d) ? (typeof r.onIgnore == "function" && r.onIgnore(C), C.isMatch = false, h ? C : false) : (typeof r.onMatch == "function" && r.onMatch(C), h ? C : true);
    };
    return t && (u.state = a), u;
  };
  Se.test = (n6, e, t, { glob: i, posix: r } = {}) => {
    if (typeof n6 != "string") throw new TypeError("Expected input to be a string");
    if (n6 === "") return { isMatch: false, output: "" };
    let o = t || {}, s = o.format || (r ? fn.toPosixSlashes : null), a = n6 === i, l = a && s ? s(n6) : n6;
    return a === false && (l = s ? s(n6) : n6, a = l === i), (a === false || o.capture === true) && (o.matchBase === true || o.basename === true ? a = Se.matchBase(n6, e, t, r) : a = e.exec(l)), { isMatch: !!a, match: a, output: l };
  };
  Se.matchBase = (n6, e, t, i = fn.isWindows(t)) => (e instanceof RegExp ? e : Se.makeRe(e, t)).test(bh.basename(n6));
  Se.isMatch = (n6, e, t) => Se(e, t)(n6);
  Se.parse = (n6, e) => Array.isArray(n6) ? n6.map((t) => Se.parse(t, e)) : pn(n6, { ...e, fastpaths: false });
  Se.scan = (n6, e) => Ch(n6, e);
  Se.compileRe = (n6, e, t = false, i = false) => {
    if (t === true) return n6.output;
    let r = e || {}, o = r.contains ? "" : "^", s = r.contains ? "" : "$", a = `${o}(?:${n6.output})${s}`;
    n6 && n6.negated === true && (a = `^(?!${a}).*$`);
    let l = Se.toRegex(a, e);
    return i === true && (l.state = n6), l;
  };
  Se.makeRe = (n6, e = {}, t = false, i = false) => {
    if (!n6 || typeof n6 != "string") throw new TypeError("Expected a non-empty string");
    let r = { negated: false, fastpaths: true };
    return e.fastpaths !== false && (n6[0] === "." || n6[0] === "*") && (r.output = pn.fastpaths(n6, e)), r.output || (r = pn(n6, e)), Se.compileRe(r, e, t, i);
  };
  Se.toRegex = (n6, e) => {
    try {
      let t = e || {};
      return new RegExp(n6, t.flags || (t.nocase ? "i" : ""));
    } catch (t) {
      if (e && e.debug === true) throw t;
      return /$^/;
    }
  };
  Se.constants = wh;
  Sl.exports = Se;
});
var Al = ce((Ip, Tl) => {
  "use strict";
  Tl.exports = kl();
});
var lm = {};
xc(lm, { _activate: () => gc, activate: () => om, deactivate: () => tm, getExtensionContext: () => En });
module.exports = Dc(lm);
var K = require("vscode");
var He = require("fs"), J = ie(require("path")), Qa = ie(require("vscode")), Cr = ie(require("os")), ti = ie(require("child_process")), Ya = require("async_hooks"), Xa = require("url"), rn = ie(Hs()), Za = require("events"), el = ie(ta());
var U = require("vscode"), ht = require("path"), yi = require("fs"), sa = ie(Io()), Oo = process.platform === "darwin", wt = process.platform === "win32", hr = U.env.remoteName !== void 0, Ru = process.platform === "linux", mr = Ru && !!process.env.SNAP && !!process.env.SNAP_REVISION;
function j(n6) {
  return n6.forEach((e) => e.dispose()), [];
}
function Be(n6) {
  return { dispose: n6 };
}
function Ot(n6) {
  return Be(() => j(n6));
}
var rt = Be(() => null);
function kt(n6, e) {
  return (t, i, r) => n6((o) => t.call(i, e(o)), null, r);
}
function V(n6, e) {
  return (t, i, r) => n6((o) => e(o) && t.call(i, o), null, r);
}
function Mo(n6, e, t) {
  return e(t), n6((i) => e(i));
}
function Je(...n6) {
  return (e, t, i) => {
    let r = Ot(n6.map((o) => o((s) => e.call(t, s))));
    return i?.push(r), r;
  };
}
function Lo(n6) {
  return n6.then(() => {
  });
}
function vt(n6) {
  return (e, t, i) => {
    let r = n6((o) => (r.dispose(), e.call(t, o)), null, i);
    return r;
  };
}
function aa(n6, e) {
  return (t, i, r) => {
    let o;
    return n6((s) => {
      clearTimeout(o), o = setTimeout(() => t.call(i, s), e);
    }, null, r);
  };
}
function Qe(n6) {
  return new Promise((e) => vt(n6)(e));
}
function Go(n6, ...e) {
  for (let t of e) Object.keys(t).forEach((i) => n6[i] = t[i]);
  return n6;
}
function la(n6, e) {
  return n6.reduce((t, i) => {
    let r = e(i);
    return t[r] = [...t[r] || [], i], t;
  }, /* @__PURE__ */ Object.create(null));
}
async function Ho(n6, e) {
  let t = async () => {
    try {
      await yi.promises.mkdir(n6, e);
    } catch (i) {
      if (i.code === "EEXIST") {
        if ((await yi.promises.stat(n6)).isDirectory()) return;
        throw new Error(`'${n6}' exists and is not a directory.`);
      }
      throw i;
    }
  };
  if (n6 === (0, ht.dirname)(n6)) return true;
  try {
    await t();
  } catch (i) {
    if (i.code !== "ENOENT") throw i;
    await Ho((0, ht.dirname)(n6), e), await t();
  }
  return true;
}
function ca(n6, e) {
  let t;
  return n6.some((i) => e(i) ? (t = i, true) : false), t;
}
async function ua(n6, e) {
  return new Promise((t, i) => {
    let r = (0, yi.createReadStream)(n6, { encoding: "utf8" }), o = (0, sa.default)(r);
    o.on("data", (s) => {
      e.test(s) && (r.close(), t(true));
    }), o.on("error", i), o.on("end", () => t(false));
  });
}
function da(n6, e) {
  return new Promise((t, i) => {
    let r = false, o = Buffer.allocUnsafe(e), s = 0;
    n6.on("data", (a) => {
      let l = Math.min(e - s, a.length);
      a.copy(o, s, 0, l), s += l, s === e && n6.destroy();
    }), n6.on("error", (a) => {
      r || (r = true, i(a));
    }), n6.on("close", () => {
      r || (r = true, t(o.slice(0, s)));
    });
  });
}
function ha(n6) {
  if (n6.length < 2) return null;
  let e = n6.readUInt8(0), t = n6.readUInt8(1);
  if (e === 254 && t === 255) return "utf16be";
  if (e === 255 && t === 254) return "utf16le";
  if (n6.length < 3) return null;
  let i = n6.readUInt8(2);
  return e === 239 && t === 187 && i === 191 ? "utf8" : null;
}
function mt(n6, e = 20, t = true) {
  return n6.length <= e ? n6 : `${n6.substring(0, e)}${t ? "…" : ""}`;
}
function ur(n6) {
  return wt || Oo ? n6.toLowerCase() : n6;
}
function me(n6, e) {
  return n6 === e ? true : (n6.charAt(n6.length - 1) !== ht.sep && (n6 += ht.sep), ur(e).startsWith(ur(n6)));
}
function z(n6, e) {
  return ur(n6) === ur(e);
}
function Mt(n6, e) {
  return n6.charAt(n6.length - 1) !== ht.sep && (n6 += ht.sep), me(n6, e) && n6.length < e.length ? e.substring(n6.length) : (0, ht.relative)(n6, e);
}
function* Qt(n6, e) {
  let t = [], i = 0;
  for (let r of n6) {
    let o = i + r.length;
    o > e && t.length > 0 && (yield t, t = [], o = r.length), t.push(r), i = o;
  }
  t.length > 0 && (yield t);
}
function No(n6) {
  return !Eu(n6);
}
function Eu(n6) {
  return xu(n6) || n6 === null;
}
function xu(n6) {
  return typeof n6 > "u";
}
var St = class {
  constructor(e) {
    this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0;
  }
  queue(e) {
    return new Promise((t, i) => {
      this.outstandingPromises.push({ factory: e, c: t, e: i }), this.consume();
    });
  }
  consume() {
    for (; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism; ) {
      let e = this.outstandingPromises.shift();
      this.runningPromises++;
      let t = e.factory();
      t.then(e.c, e.e), t.then(() => this.consumed(), () => this.consumed());
    }
  }
  consumed() {
    this.runningPromises--, this.outstandingPromises.length > 0 && this.consume();
  }
}, dr = class {
  constructor() {
    this._onDidComplete = new U.EventEmitter();
  }
  get promise() {
    return this._promise ? this._promise : Qe(this._onDidComplete.event).then((e) => {
      if (e.success) return e.value;
      throw e.err;
    });
  }
  resolve(e) {
    this._promise || (this._promise = Promise.resolve(e), this._onDidComplete.fire({ success: true, value: e }));
  }
  reject(e) {
    this._promise || (this._promise = Promise.reject(e), this._onDidComplete.fire({ success: false, err: e }));
  }
}, Ci;
((i) => {
  function n6(r, o) {
    return typeof r == "string" && (r = t(r)), typeof o == "string" && (o = t(o)), r.major > o.major ? 1 : r.major < o.major ? -1 : r.minor > o.minor ? 1 : r.minor < o.minor ? -1 : r.patch > o.patch ? 1 : r.patch < o.patch ? -1 : r.pre === void 0 && o.pre !== void 0 ? 1 : r.pre !== void 0 && o.pre === void 0 ? -1 : r.pre !== void 0 && o.pre !== void 0 ? r.pre.localeCompare(o.pre) : 0;
  }
  i.compare = n6;
  function e(r, o, s, a) {
    return { major: typeof r == "string" ? parseInt(r, 10) : r, minor: typeof o == "string" ? parseInt(o, 10) : o, patch: s == null ? 0 : typeof s == "string" ? parseInt(s, 10) : s, pre: a };
  }
  i.from = e;
  function t(r) {
    let [o, s] = r.split("-"), [a, l, u] = o.split(".");
    return e(a, l, u, s);
  }
  i.fromString = t;
})(Ci ||= {});
function ma(n6, e) {
  if (n6.length === 0) return { added: e, modified: [], removed: [] };
  let t = [], i = [], r = [], o = 0, s = 0;
  for (; ; ) {
    if (o === n6.length) {
      t.push(...e.slice(s));
      break;
    }
    if (s === e.length) {
      r.push(...n6.slice(o));
      break;
    }
    let a = n6[o], l = e[s], u = a.id.localeCompare(l.id);
    u === 0 ? (a.revision !== l.revision && i.push(l), o += 1, s += 1) : u < 0 ? (r.push(a), o += 1) : u > 0 && (t.push(l), s += 1);
  }
  return { added: t, modified: i, removed: r };
}
var _o = 60, Bo = _o * 60, bi = Bo * 24, ra = bi * 7, oa = bi * 30, na = bi * 365;
function Lt(n6, e, t, i) {
  typeof n6 != "number" && (n6 = n6.getTime());
  let r = Math.round(((/* @__PURE__ */ new Date()).getTime() - n6) / 1e3);
  if (r < -30) return U.l10n.t("in {0}", Lt((/* @__PURE__ */ new Date()).getTime() + r * 1e3, false));
  if (!i && r < 30) return U.l10n.t("now");
  let o;
  return r < _o ? (o = r, e ? o === 1 ? t ? U.l10n.t("{0} second ago", o) : U.l10n.t("{0} sec ago", o) : t ? U.l10n.t("{0} seconds ago", o) : U.l10n.t("{0} secs ago", o) : o === 1 ? t ? U.l10n.t("{0} second", o) : U.l10n.t("{0} sec", o) : t ? U.l10n.t("{0} seconds", o) : U.l10n.t("{0} secs", o)) : r < Bo ? (o = Math.floor(r / _o), e ? o === 1 ? t ? U.l10n.t("{0} minute ago", o) : U.l10n.t("{0} min ago", o) : t ? U.l10n.t("{0} minutes ago", o) : U.l10n.t("{0} mins ago", o) : o === 1 ? t ? U.l10n.t("{0} minute", o) : U.l10n.t("{0} min", o) : t ? U.l10n.t("{0} minutes", o) : U.l10n.t("{0} mins", o)) : r < bi ? (o = Math.floor(r / Bo), e ? o === 1 ? t ? U.l10n.t("{0} hour ago", o) : U.l10n.t("{0} hr ago", o) : t ? U.l10n.t("{0} hours ago", o) : U.l10n.t("{0} hrs ago", o) : o === 1 ? t ? U.l10n.t("{0} hour", o) : U.l10n.t("{0} hr", o) : t ? U.l10n.t("{0} hours", o) : U.l10n.t("{0} hrs", o)) : r < ra ? (o = Math.floor(r / bi), e ? o === 1 ? U.l10n.t("{0} day ago", o) : U.l10n.t("{0} days ago", o) : o === 1 ? U.l10n.t("{0} day", o) : U.l10n.t("{0} days", o)) : r < oa ? (o = Math.floor(r / ra), e ? o === 1 ? t ? U.l10n.t("{0} week ago", o) : U.l10n.t("{0} wk ago", o) : t ? U.l10n.t("{0} weeks ago", o) : U.l10n.t("{0} wks ago", o) : o === 1 ? t ? U.l10n.t("{0} week", o) : U.l10n.t("{0} wk", o) : t ? U.l10n.t("{0} weeks", o) : U.l10n.t("{0} wks", o)) : r < na ? (o = Math.floor(r / oa), e ? o === 1 ? t ? U.l10n.t("{0} month ago", o) : U.l10n.t("{0} mo ago", o) : t ? U.l10n.t("{0} months ago", o) : U.l10n.t("{0} mos ago", o) : o === 1 ? t ? U.l10n.t("{0} month", o) : U.l10n.t("{0} mo", o) : t ? U.l10n.t("{0} months", o) : U.l10n.t("{0} mos", o)) : (o = Math.floor(r / na), e ? o === 1 ? t ? U.l10n.t("{0} year ago", o) : U.l10n.t("{0} yr ago", o) : t ? U.l10n.t("{0} years ago", o) : U.l10n.t("{0} yrs ago", o) : o === 1 ? t ? U.l10n.t("{0} year", o) : U.l10n.t("{0} yr", o) : t ? U.l10n.t("{0} years", o) : U.l10n.t("{0} yrs", o));
}
function Tt(n6, e) {
  let i = U.workspace.getConfiguration("git", n6).get("commitShortHashLength", 7);
  return e.substring(0, i);
}
function Fo(n6) {
  return n6 === "error" ? U.DiagnosticSeverity.Error : n6 === "warning" ? U.DiagnosticSeverity.Warning : n6 === "information" ? U.DiagnosticSeverity.Information : U.DiagnosticSeverity.Hint;
}
var Re = require("vscode");
var ot = Object.freeze({ Force: 0, ForceWithLease: 1, ForceWithLeaseIfIncludes: 2 }), L = Object.freeze({ Head: 0, RemoteHead: 1, Tag: 2 }), m = Object.freeze({ INDEX_MODIFIED: 0, INDEX_ADDED: 1, INDEX_DELETED: 2, INDEX_RENAMED: 3, INDEX_COPIED: 4, MODIFIED: 5, DELETED: 6, UNTRACKED: 7, IGNORED: 8, INTENT_TO_ADD: 9, INTENT_TO_RENAME: 10, ADDED_BY_US: 11, ADDED_BY_THEM: 12, DELETED_BY_US: 13, DELETED_BY_THEM: 14, BOTH_ADDED: 15, BOTH_DELETED: 16, BOTH_MODIFIED: 17, TYPE_CHANGED: 18 }), T = Object.freeze({ BadConfigFile: "BadConfigFile", AuthenticationFailed: "AuthenticationFailed", NoUserNameConfigured: "NoUserNameConfigured", NoUserEmailConfigured: "NoUserEmailConfigured", NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified", NotAGitRepository: "NotAGitRepository", NotAtRepositoryRoot: "NotAtRepositoryRoot", Conflict: "Conflict", StashConflict: "StashConflict", UnmergedChanges: "UnmergedChanges", PushRejected: "PushRejected", PushRejectedFileTooLarge: "PushRejectedFileTooLarge", ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected", ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected", RemoteConnectionError: "RemoteConnectionError", DirtyWorkTree: "DirtyWorkTree", CantOpenResource: "CantOpenResource", GitNotFound: "GitNotFound", CantCreatePipe: "CantCreatePipe", PermissionDenied: "PermissionDenied", CantAccessRemote: "CantAccessRemote", RepositoryNotFound: "RepositoryNotFound", RepositoryIsLocked: "RepositoryIsLocked", BranchNotFullyMerged: "BranchNotFullyMerged", NoRemoteReference: "NoRemoteReference", InvalidBranchName: "InvalidBranchName", BranchAlreadyExists: "BranchAlreadyExists", NoLocalChanges: "NoLocalChanges", NoStashFound: "NoStashFound", LocalChangesOverwritten: "LocalChangesOverwritten", NoUpstreamBranch: "NoUpstreamBranch", IsInSubmodule: "IsInSubmodule", IsBeyondSymbolicLink: "IsBeyondSymbolicLink", WrongCase: "WrongCase", CantLockRef: "CantLockRef", CantRebaseMultipleBranches: "CantRebaseMultipleBranches", PatchDoesNotApply: "PatchDoesNotApply", NoPathFound: "NoPathFound", UnknownPath: "UnknownPath", EmptyCommitMessage: "EmptyCommitMessage", BranchFastForwardRejected: "BranchFastForwardRejected", BranchNotYetBorn: "BranchNotYetBorn", TagConflict: "TagConflict", CherryPickEmpty: "CherryPickEmpty", CherryPickConflict: "CherryPickConflict", WorktreeContainsChanges: "WorktreeContainsChanges", WorktreeAlreadyExists: "WorktreeAlreadyExists", WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed" });
var tl = ie(Io()), il = require("string_decoder");
var Du = /https?:\/\/\S+/gi, Pu = /[)"'<>,.;:\]}]$/;
function Su(n6) {
  let e = n6.length;
  for (; e > 0 && Pu.test(n6.slice(e - 1, e)); ) e -= 1;
  return { url: n6.slice(0, e), wrappers: n6.slice(e) };
}
function ku(n6) {
  let { url: e, wrappers: t } = Su(n6), i = e.search(/[?#]/), r = i === -1 ? e : e.slice(0, i), o = r.indexOf("//") + 2, s = r.slice(o).search(/[/?#]/), a = s === -1 ? r.length : o + s, l = r.lastIndexOf("@", a - 1);
  return l < o ? r + t : r.slice(0, o) + r.slice(l + 1) + t;
}
function Oe(n6) {
  return n6.replace(Du, ku);
}
function pt(n6) {
  return `git ${n6.map(Oe).join(" ")}`;
}
function Uo(n6) {
  let e = "git";
  return n6.gitArgs !== void 0 ? e = pt(n6.gitArgs) : n6.gitCommand !== void 0 && (e = `git ${Oe(n6.gitCommand)}`), `> ${e}
${Oe(n6.stderr ?? "")}`;
}
var Ke = { BadConfigFile: "BadConfigFile", AuthenticationFailed: "AuthenticationFailed", NoUserNameConfigured: "NoUserNameConfigured", NoUserEmailConfigured: "NoUserEmailConfigured", NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified", NotAGitRepository: "NotAGitRepository", NotAtRepositoryRoot: "NotAtRepositoryRoot", Conflict: "Conflict", StashConflict: "StashConflict", UnmergedChanges: "UnmergedChanges", PushRejected: "PushRejected", ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected", ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected", RemoteConnectionError: "RemoteConnectionError", DirtyWorkTree: "DirtyWorkTree", CantOpenResource: "CantOpenResource", GitNotFound: "GitNotFound", CantCreatePipe: "CantCreatePipe", PermissionDenied: "PermissionDenied", CantAccessRemote: "CantAccessRemote", RepositoryNotFound: "RepositoryNotFound", RepositoryIsLocked: "RepositoryIsLocked", BranchNotFullyMerged: "BranchNotFullyMerged", NoRemoteReference: "NoRemoteReference", InvalidBranchName: "InvalidBranchName", BranchAlreadyExists: "BranchAlreadyExists", NoLocalChanges: "NoLocalChanges", NoStashFound: "NoStashFound", LocalChangesOverwritten: "LocalChangesOverwritten", NoUpstreamBranch: "NoUpstreamBranch", IsInSubmodule: "IsInSubmodule", WrongCase: "WrongCase", CantLockRef: "CantLockRef", CantRebaseMultipleBranches: "CantRebaseMultipleBranches", PatchDoesNotApply: "PatchDoesNotApply", NoPathFound: "NoPathFound", UnknownPath: "UnknownPath", EmptyCommitMessage: "EmptyCommitMessage", BranchFastForwardRejected: "BranchFastForwardRejected", BranchNotYetBorn: "BranchNotYetBorn", TagConflict: "TagConflict", CherryPickEmpty: "CherryPickEmpty", CherryPickConflict: "CherryPickConflict", WorktreeContainsChanges: "WorktreeContainsChanges", WorktreeAlreadyExists: "WorktreeAlreadyExists", WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed" };
var Yt = class extends Error {
  constructor(e) {
    super(e.error?.message || e.message || "Git error"), this.error = e.error, this.stdout = e.stdout, this.stderr = e.stderr, this.exitCode = e.exitCode, this.gitErrorCode = e.gitErrorCode, this.gitCommand = e.gitCommand, this.gitArgs = e.gitArgs;
  }
  toString() {
    let e = this.message + " " + JSON.stringify({ exitCode: this.exitCode, gitErrorCode: this.gitErrorCode, gitCommand: this.gitCommand, stdout: this.stdout, stderr: this.stderr }, null, 2);
    return this.error && (e += this.error.stack), Oe(e);
  }
};
function pa(n6) {
  if (/Another git process seems to be running in this repository|If no other git process is currently running/.test(n6)) return Ke.RepositoryIsLocked;
  if (/Authentication failed/i.test(n6)) return Ke.AuthenticationFailed;
  if (/Not a git repository/i.test(n6)) return Ke.NotAGitRepository;
  if (/bad config file/.test(n6)) return Ke.BadConfigFile;
  if (/cannot make pipe for command substitution|cannot create standard input pipe/.test(n6)) return Ke.CantCreatePipe;
  if (/Repository not found/.test(n6)) return Ke.RepositoryNotFound;
  if (/unable to access/.test(n6)) return Ke.CantAccessRemote;
  if (/branch '.+' is not fully merged/.test(n6)) return Ke.BranchNotFullyMerged;
  if (/Couldn't find remote ref/.test(n6)) return Ke.NoRemoteReference;
  if (/A branch named '.+' already exists/.test(n6)) return Ke.BranchAlreadyExists;
  if (/'.+' is not a valid branch name/.test(n6)) return Ke.InvalidBranchName;
  if (/Please,? commit your changes or stash them/.test(n6)) return Ke.DirtyWorkTree;
  if (/contains modified or untracked files|use --force to delete it/.test(n6)) return Ke.WorktreeContainsChanges;
  if (/fatal: '[^']+' already exists/.test(n6)) return Ke.WorktreeAlreadyExists;
  if (/is already used by worktree at/.test(n6)) return Ke.WorktreeBranchAlreadyUsed;
}
function pr(n6) {
  return (e) => {
    /ENOENT/.test(e.message) && (e = new Yt({ error: e, message: "Failed to execute git (ENOENT)", gitErrorCode: Ke.NotAGitRepository })), n6(e);
  };
}
var vi = ie(require("node:child_process"), 1), $o = ie(require("node:path"), 1), Wo = ie(La(), 1);
function Ga(n6) {
  return n6.replace(/^([a-z]):\\/i, (e, t) => `${t.toUpperCase()}:\\`);
}
var zm = process.platform === "win32", qm = process.platform === "darwin";
function fr(n6) {
  return { dispose: n6 };
}
function Ha(n6) {
  for (let e of n6) e.dispose();
}
function Na(n6) {
  return n6.replace(/^git version /, "");
}
var zu = -86, qu = ["/usr/bin/git", "/opt/homebrew/bin/git"];
function Qu() {
  return new Promise((n6) => {
    vi.exec("which git", (e, t) => n6({ error: e, stdout: t.toString() }));
  });
}
function Yu() {
  return new Promise((n6) => {
    vi.exec("xcode-select -p", (e, t) => n6({ error: e, stdout: t.toString() }));
  });
}
function Xu(n6, e) {
  let t = e?.errno;
  if (process.platform === "darwin" && t === zu) return `"${n6}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.`;
  let i = e instanceof Error ? e.message : String(e);
  return `Executing "${n6} --version" failed: ${i}`;
}
function Zu(n6) {
  return new Promise((e, t) => {
    let i;
    try {
      i = vi.spawn(n6, ["--version"]);
    } catch (o) {
      t(new Error(Xu(n6, o)));
      return;
    }
    let r = [];
    i.stdout.on("data", (o) => r.push(o)), i.on("error", pr(t)), i.on("close", (o, s) => o !== 0 ? t(new Error(`Executing "${n6} --version" failed with code ${o}, signal ${s}`)) : e({ path: n6, version: Na(Buffer.concat(r).toString("utf8").trim()) }));
  });
}
function wi(n6, e) {
  return e(n6) ? Zu(n6) : Promise.reject(new Error(`Path "${n6}" is invalid.`));
}
async function Fa(n6, e) {
  if (n6 === "/usr/bin/git") {
    let { error: t } = await Yu();
    if (t && t.code === 2) throw new Error('Executing "xcode-select -p" failed with error code 2.');
  }
  return wi(n6, e);
}
async function ed(n6, e) {
  let { error: t, stdout: i } = await Qu();
  if (t) throw new Error(`Executing "which git" failed: ${t.message}`);
  let r = i.trim();
  try {
    return await Fa(r, n6);
  } catch (o) {
    e?.warn(`Unable to use git from the PATH: "${r}". Error: ${o.message}. Trying well-known native git installs.`);
    for (let s of qu) if (s !== r) try {
      let a = await Fa(s, n6);
      return e?.info(`Using git from "${a.path}" instead of "${r}".`), a;
    } catch (a) {
      e?.info(`Unable to use git from "${s}". Error: ${a.message}`);
    }
    throw o;
  }
}
function gr(n6, e) {
  return n6 ? wi($o.join(n6, "Git", "cmd", "git.exe"), e) : Promise.reject("Not found");
}
async function td(n6) {
  let e = await (0, Wo.default)("git.exe");
  return wi(e, n6);
}
async function id(n6) {
  return gr(process.env.ProgramW6432, n6).then(void 0, () => gr(process.env["ProgramFiles(x86)"], n6)).then(void 0, () => gr(process.env.ProgramFiles, n6)).then(void 0, () => gr($o.join(process.env.LocalAppData, "Programs"), n6)).then(void 0, () => td(n6));
}
async function Ko(n6, e, t) {
  for (let r of n6) try {
    return await wi(r, e);
  } catch (o) {
    t?.info(`Unable to find git on the PATH: "${r}". Error: ${o.message}`);
  }
  let i;
  try {
    switch (process.platform) {
      case "darwin":
        return await ed(e, t);
      case "win32":
        return await id(e);
      default:
        return await wi(await (0, Wo.default)("git"), e);
    }
  } catch (r) {
    i = r?.message ?? String(r), t?.warn(`Unable to find git. Error: ${i}`);
  }
  throw new Error(i ? `Git installation not found. ${i}` : "Git installation not found.");
}
var yr = require("node:child_process"), $a = require("node:util");
var jo = require("node:os"), rd = [["safe.bareRepository", "explicit"]], Ua = [["core.fsmonitor", "false"], ["core.hooksPath", jo.devNull], ["core.attributesFile", jo.devNull]];
function od(n6) {
  let e = n6 === "allow-hooks" ? Ua.filter(([t]) => t !== "core.hooksPath") : Ua;
  return [...rd, ...e];
}
function nd(n6) {
  let e = n6.GIT_CONFIG_COUNT;
  if (e === void 0 || e === "") return 0;
  let t = Number.parseInt(String(e), 10);
  return !Number.isFinite(t) || t < 0 ? 0 : t;
}
function sd(n6, e) {
  let t = nd(n6), i = { ...n6 }, r = /* @__PURE__ */ new Set();
  for (let s = 0; s < t; s++) {
    let a = i[`GIT_CONFIG_KEY_${s}`];
    for (let [l, u] of e) a === l && (i[`GIT_CONFIG_VALUE_${s}`] = u, r.add(l));
  }
  let o = t;
  for (let [s, a] of e) r.has(s) || (i[`GIT_CONFIG_KEY_${o}`] = s, i[`GIT_CONFIG_VALUE_${o}`] = a, o++);
  return o !== t && (i.GIT_CONFIG_COUNT = String(o)), i;
}
function Ri(n6) {
  let e = { ...process.env, ...n6.spawnerEnv, LC_ALL: "en_US.UTF-8", LANG: "en_US.UTF-8", GIT_PAGER: "cat", ...n6.optionsEnv };
  return n6.command !== void 0 ? e.VSCODE_GIT_COMMAND = n6.command : delete e.VSCODE_GIT_COMMAND, sd(e, od(n6.repoConfigExecution ?? "block"));
}
var tp = (0, $a.promisify)(yr.execFile);
function Jo(n6) {
  let e = /* @__PURE__ */ new Set(["-c", "-C", "--git-dir", "--work-tree"]);
  for (let t = 0; t < n6.length; t++) {
    let i = n6[t];
    if (e.has(i)) {
      t++;
      continue;
    }
    if (!i.startsWith("-")) return i;
  }
}
var Wa = ie(require("node:child_process"), 1), Ka = require("node:events"), ja = require("node:url");
var At = class extends Error {
  constructor() {
    super("Operation cancelled"), this.name = "CancelledError";
  }
};
async function ad(n6, e) {
  if (!n6.stdout || !n6.stderr) throw new Yt({ message: "Failed to get stdout or stderr from git process." });
  if (e?.aborted) throw new At();
  let t = [], i = (s, a, l) => {
    s.once(a, l), t.push(fr(() => s.removeListener(a, l)));
  }, r = (s, a, l) => {
    s.on(a, l), t.push(fr(() => s.removeListener(a, l)));
  }, o = Promise.all([new Promise((s, a) => {
    i(n6, "error", pr(a)), i(n6, "exit", s);
  }), new Promise((s) => {
    let a = [];
    r(n6.stdout, "data", (l) => a.push(l)), i(n6.stdout, "close", () => s(Buffer.concat(a)));
  }), new Promise((s) => {
    let a = [];
    r(n6.stderr, "data", (l) => a.push(l)), i(n6.stderr, "close", () => s(Buffer.concat(a).toString("utf8")));
  })]);
  if (e) {
    let s = new Promise((a, l) => {
      let u = () => {
        try {
          n6.kill();
        } catch {
        }
        l(new At());
      };
      e.aborted ? u() : (e.addEventListener("abort", u, { once: true }), t.push(fr(() => e.removeEventListener("abort", u))));
    });
    o = Promise.race([o, s]);
  }
  try {
    let [s, a, l] = await o;
    return { exitCode: s, stdout: a, stderr: l };
  } finally {
    Ha(t);
  }
}
var ei = class {
  get onOutput() {
    return this._onOutput;
  }
  constructor(e) {
    this._onOutput = new Ka.EventEmitter(), this.path = e.gitPath, this.env = e.env || {}, this.repoConfigExecution = e.repoConfigExecution ?? "block", e.onLog && this._onOutput.on("log", e.onLog);
  }
  async exec(e, t, i = {}) {
    let r = { cwd: e, ...i };
    return await this._exec(t, r);
  }
  async exec2(e, t = {}) {
    return await this._exec(e, t);
  }
  stream(e, t, i = {}) {
    let r = { cwd: e, ...i }, o = this.spawn(t, r);
    if (i.log !== false) {
      let s = Date.now();
      o.on("exit", () => {
        this.log(`> ${pt(t)} [${Date.now() - s}ms]${o.killed ? " (cancelled)" : ""}${this.policyLogSuffix()}
`);
      });
    }
    return o;
  }
  policyLogSuffix() {
    return this.repoConfigExecution === "allow-hooks" ? " (hooks)" : "";
  }
  async _exec(e, t = {}) {
    let i = this.spawn(e, t);
    t.onSpawn?.(i), t.input && i.stdin.end(t.input, "utf8");
    let r = Date.now(), o;
    try {
      o = await ad(i, t.signal);
    } catch (a) {
      throw a instanceof At && this.log(`> ${pt(e)} [${Date.now() - r}ms] (cancelled)
`), a;
    }
    t.log !== false && (this.log(`> ${pt(e)} [${Date.now() - r}ms] ${t.caller ? `(${t.caller})` : ""}${this.policyLogSuffix()}
`), o.stderr.length > 0 && this.log(`${Oe(o.stderr)}
`));
    let s = { exitCode: o.exitCode, stdout: o.stdout.toString("utf8"), stderr: o.stderr };
    return o.exitCode ? Promise.reject(new Yt({ message: "Failed to execute git", stdout: s.stdout, stderr: s.stderr, exitCode: s.exitCode, gitErrorCode: pa(s.stderr), gitCommand: Jo(e) ?? e[0], gitArgs: e })) : s;
  }
  spawn(e, t = {}) {
    if (!this.path) throw new Error("git could not be found in the system.");
    let i = { ...t };
    !i.stdio && !t.input && (i.stdio = ["ignore", null, null]), i.env = Ri({ command: Jo(e), spawnerEnv: this.env, optionsEnv: t.env, repoConfigExecution: this.repoConfigExecution });
    let r = this.getCwd(t);
    return r && (i.cwd = Ga(r)), Wa.spawn(this.path, e, i);
  }
  getCwd(e) {
    let t = e.cwd;
    if (typeof t > "u" || typeof t == "string") return t;
    if (t instanceof URL && t.protocol === "file:") return (0, ja.fileURLToPath)(t);
  }
  log(e) {
    this._onOutput.emit("log", e);
  }
};
var Ei = 3e4, ld = "block", rl = new Ya.AsyncLocalStorage();
function vr(n6, e) {
  return rl.run(n6, e);
}
function xi(n6) {
  return n6 ?? rl.getStore() ?? ld;
}
function Ja(n6) {
  return n6 === "allow-hooks" ? " (hooks)" : "";
}
var Vo;
function on() {
  return Vo === void 0 && (Vo = Promise.resolve(Qa.cursor.getCursorExtensionsIsolationEnabled()).catch(() => false)), Vo;
}
function cd(n6) {
  return n6.replace(/^git version /, "");
}
var ud = -86, dd = ["/usr/bin/git", "/opt/homebrew/bin/git"];
function hd() {
  return new Promise((n6) => {
    ti.exec("which git", (e, t) => n6({ error: e, stdout: t.toString() }));
  });
}
function md() {
  return new Promise((n6) => {
    ti.exec("xcode-select -p", (e, t) => n6({ error: e, stdout: t.toString() }));
  });
}
function pd(n6, e) {
  let t = e?.errno;
  if (process.platform === "darwin" && t === ud) return `"${n6}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.`;
  let i = e instanceof Error ? e.message : String(e);
  return `Executing "${n6} --version" failed: ${i}`;
}
function fd(n6) {
  return new Promise((e, t) => {
    let i;
    try {
      i = ti.spawn(n6, ["--version"]);
    } catch (o) {
      t(new Error(pd(n6, o)));
      return;
    }
    let r = [];
    i.stdout.on("data", (o) => r.push(o)), i.on("error", Rr(t)), i.on("close", (o, s) => o !== 0 ? t(new Error(`Executing "${n6} --version" failed with code ${o}, signal ${s}`)) : e({ path: n6, version: cd(Buffer.concat(r).toString("utf8").trim()) }));
  });
}
function Di(n6, e) {
  return e(n6) ? fd(n6) : Promise.reject(new Error(`Path "${n6}" is invalid.`));
}
async function Va(n6, e) {
  if (n6 === "/usr/bin/git") {
    let { error: t } = await md();
    if (t && t.code === 2) throw new Error('Executing "xcode-select -p" failed with error code 2.');
  }
  return Di(n6, e);
}
async function gd(n6, e) {
  let { error: t, stdout: i } = await hd();
  if (t) throw new Error(`Executing "which git" failed: ${t.message}`);
  let r = i.trim();
  try {
    return await Va(r, n6);
  } catch (o) {
    e.warn(`Unable to use git from the PATH: "${r}". Error: ${o.message}. Trying well-known native git installs.`);
    for (let s of dd) if (s !== r) try {
      let a = await Va(s, n6);
      return e.info(`Using git from "${a.path}" instead of "${r}".`), a;
    } catch (a) {
      e.info(`Unable to use git from "${s}". Error: ${a.message}`);
    }
    throw o;
  }
}
function br(n6, e) {
  return n6 ? Di(J.join(n6, "Git", "cmd", "git.exe"), e) : Promise.reject("Not found");
}
async function yd(n6) {
  let e = await (0, rn.default)("git.exe");
  return Di(e, n6);
}
function bd(n6) {
  return br(process.env.ProgramW6432, n6).then(void 0, () => br(process.env["ProgramFiles(x86)"], n6)).then(void 0, () => br(process.env.ProgramFiles, n6)).then(void 0, () => br(J.join(process.env.LocalAppData, "Programs"), n6)).then(void 0, () => yd(n6));
}
async function ol(n6, e, t) {
  if (await on()) return Ko(n6, e, { info: (o) => t.info(o), warn: (o) => t.warn(o), error: (o) => t.error(o) });
  {
    for (let o of n6) try {
      return await Di(o, e);
    } catch (s) {
      t.info(`Unable to find git on the PATH: "${o}". Error: ${s.message}`);
    }
    let r;
    try {
      switch (process.platform) {
        case "darwin":
          return await gd(e, t);
        case "win32":
          return await bd(e);
        default:
          return await Di(await (0, rn.default)("git"), e);
      }
    } catch (o) {
      r = o?.message ?? String(o), t.warn(`Unable to find git. Error: ${r}`);
    }
    throw new Error(r ? `Git installation not found. ${r}` : "Git installation not found.");
  }
}
function Rr(n6) {
  return (e) => {
    /ENOENT/.test(e.message) && (e = new Le({ error: e, message: "Failed to execute git (ENOENT)", gitErrorCode: T.NotAGitRepository })), n6(e);
  };
}
async function za(n6, e) {
  return await on() ? Cd(n6) : nl(n6, e);
}
async function Cd(n6) {
  if (!n6.stdout || !n6.stderr) throw new Le({ message: "Failed to get stdout or stderr from git process." });
  let e = [], t = (o, s, a) => {
    o.once(s, a), e.push(Be(() => o.removeListener(s, a)));
  }, i = (o, s, a) => {
    o.on(s, a), e.push(Be(() => o.removeListener(s, a)));
  }, r = Promise.all([new Promise((o, s) => {
    t(n6, "error", Rr(s)), t(n6, "exit", o);
  }), new Promise((o) => {
    let s = [];
    i(n6.stdout, "data", (a) => s.push(a)), t(n6.stdout, "close", () => o(Buffer.concat(s)));
  }), new Promise((o) => {
    let s = [];
    i(n6.stderr, "data", (a) => s.push(a)), t(n6.stderr, "close", () => o(Buffer.concat(s).toString("utf8")));
  })]);
  try {
    let [o, s, a] = await r;
    return { exitCode: o, stdout: s, stderr: a };
  } finally {
    j(e);
  }
}
async function nl(n6, e) {
  if (!n6.stdout || !n6.stderr) throw new Le({ message: "Failed to get stdout or stderr from git process." });
  if (e && e.isCancellationRequested) throw new Re.CancellationError();
  let t = [], i = (s, a, l) => {
    s.once(a, l), t.push(Be(() => s.removeListener(a, l)));
  }, r = (s, a, l) => {
    s.on(a, l), t.push(Be(() => s.removeListener(a, l)));
  }, o = Promise.all([new Promise((s, a) => {
    i(n6, "error", Rr(a)), i(n6, "exit", s);
  }), new Promise((s) => {
    let a = [];
    r(n6.stdout, "data", (l) => a.push(l)), i(n6.stdout, "close", () => s(Buffer.concat(a)));
  }), new Promise((s) => {
    let a = [];
    r(n6.stderr, "data", (l) => a.push(l)), i(n6.stderr, "close", () => s(Buffer.concat(a).toString("utf8")));
  })]);
  if (e) {
    let s = new Promise((a, l) => {
      vt(e.onCancellationRequested)(() => {
        try {
          n6.kill();
        } catch {
        }
        l(new Re.CancellationError());
      });
    });
    o = Promise.race([o, s]);
  }
  try {
    let [s, a, l] = await o;
    return { exitCode: s, stdout: a, stderr: l };
  } finally {
    j(t);
  }
}
var Le = class extends Error {
  constructor(e) {
    super(e.error?.message || e.message || "Git error"), this.error = e.error, this.stdout = e.stdout, this.stderr = e.stderr, this.exitCode = e.exitCode, this.gitErrorCode = e.gitErrorCode, this.gitCommand = e.gitCommand, this.gitArgs = e.gitArgs;
  }
  toString() {
    let e = this.message + " " + JSON.stringify({ exitCode: this.exitCode, gitErrorCode: this.gitErrorCode, gitCommand: this.gitCommand, stdout: this.stdout, stderr: this.stderr }, null, 2);
    return this.error && (e += this.error.stack), Oe(e);
  }
};
function sl(n6) {
  if (/Another git process seems to be running in this repository|If no other git process is currently running/.test(n6)) return T.RepositoryIsLocked;
  if (/Authentication failed/i.test(n6)) return T.AuthenticationFailed;
  if (/Not a git repository/i.test(n6)) return T.NotAGitRepository;
  if (/bad config file/.test(n6)) return T.BadConfigFile;
  if (/cannot make pipe for command substitution|cannot create standard input pipe/.test(n6)) return T.CantCreatePipe;
  if (/Repository not found/.test(n6)) return T.RepositoryNotFound;
  if (/unable to access/.test(n6)) return T.CantAccessRemote;
  if (/branch '.+' is not fully merged/.test(n6)) return T.BranchNotFullyMerged;
  if (/Couldn\'t find remote ref/.test(n6)) return T.NoRemoteReference;
  if (/A branch named '.+' already exists/.test(n6)) return T.BranchAlreadyExists;
  if (/'.+' is not a valid branch name/.test(n6)) return T.InvalidBranchName;
  if (/Please,? commit your changes or stash them/.test(n6)) return T.DirtyWorkTree;
  if (/contains modified or untracked files|use --force to delete it/.test(n6)) return T.WorktreeContainsChanges;
  if (/fatal: '[^']+' already exists/.test(n6)) return T.WorktreeAlreadyExists;
  if (/is already used by worktree at/.test(n6)) return T.WorktreeBranchAlreadyUsed;
}
var wd = /file exceeds 100 MB limit|exceeds Origin's file size limit/, vd = /^(?:remote:\s+)?(?:error|warning): File (.+) is \d+(?:\.\d+)? MB; this exceeds Origin's file size limit/gm;
function al(n6) {
  let e = [], t = /* @__PURE__ */ new Set();
  for (let i of n6.matchAll(vd)) {
    let r = i[1];
    r.length > 0 && !t.has(r) && (t.add(r), e.push(r));
  }
  return e;
}
function Rd(n6, e) {
  if (/^error: failed to push some refs to\b/m.test(n6)) return e === ot.ForceWithLease && /! \[rejected\].*\(stale info\)/m.test(n6) ? T.ForcePushWithLeaseRejected : e === ot.ForceWithLeaseIfIncludes && /! \[rejected\].*\(remote ref updated since checkout\)/m.test(n6) ? T.ForcePushWithLeaseIfIncludesRejected : wd.test(n6) ? T.PushRejectedFileTooLarge : T.PushRejected;
}
function Xo(n6) {
  return n6.replace(/^([a-z]):\\/i, (e, t) => `${t.toUpperCase()}:\\`);
}
function Ge(n6, e) {
  return J.isAbsolute(e) ? Mt(n6, e).replace(/\\/g, "/") : e;
}
var zo = "%H%n%aN%n%aE%n%at%n%ct%n%P%n%D%n%B", Ed = "%H%n%P%n%gd%n%gs";
function xd(n6, e) {
  if (!e) return {};
  let t;
  try {
    let o = new URL(n6);
    if (o.protocol !== "https:" && o.protocol !== "http:") return {};
    t = o.origin;
  } catch {
    return {};
  }
  let i = Number.parseInt(process.env.GIT_CONFIG_COUNT ?? "", 10), r = Number.isFinite(i) && i > 0 ? i : 0;
  return { GIT_CONFIG_COUNT: String(r + 1), [`GIT_CONFIG_KEY_${r}`]: `http.${t}/.extraheader`, [`GIT_CONFIG_VALUE_${r}`]: e };
}
var wr = class {
  constructor(e) {
    this.commandsToLog = [];
    this._onOutput = new Za.EventEmitter();
    this.extensionIsolationEnabled = false;
    this.path = e.gitPath, this.version = e.version, this.userAgent = e.userAgent, this.env = e.env || {}, this._spawner = new ei({ gitPath: e.gitPath, env: e.env, onLog: (i) => this._onOutput.emit("log", i) }), this._hooksSpawner = new ei({ gitPath: e.gitPath, env: e.env, onLog: (i) => this._onOutput.emit("log", i), repoConfigExecution: "allow-hooks" });
    let t = (i) => {
      if (i !== void 0 && !i.affectsConfiguration("git.commandsToLog")) return;
      let r = Re.workspace.getConfiguration("git");
      this.commandsToLog = r.get("commandsToLog", []);
    };
    Re.workspace.onDidChangeConfiguration(t, this), t(), on().then((i) => {
      this.extensionIsolationEnabled = i;
    });
  }
  get onOutput() {
    return this._onOutput;
  }
  compareGitVersionTo(e) {
    return Ci.compare(Ci.fromString(this.version), Ci.fromString(e));
  }
  open(e, t, i, r) {
    return new tn(this, e, t, i, r);
  }
  async init(e, t = {}) {
    let i = ["init"];
    t.defaultBranch && t.defaultBranch !== "" && this.compareGitVersionTo("2.28.0") !== -1 && i.push("-b", t.defaultBranch), await this.exec(e, i);
  }
  async clone(e, t, i) {
    let r = decodeURI(e).replace(/[\/]+$/, "").replace(/^.*[\/\\]/, "").replace(/\.git$/, "") || "repository", o = r, s = J.join(t.parentPath, o), a = 1;
    for (; a < 20 && await new Promise((u) => (0, He.exists)(s, u)); ) o = `${r}-${a++}`, s = J.join(t.parentPath, o);
    await Ho(t.parentPath);
    let l = (u) => {
      let d = new il.StringDecoder("utf8"), h = new tl.LineStream({ encoding: "utf8" });
      u.stderr.on("data", (y) => h.write(d.write(y)));
      let p = 0, g = 0;
      h.on("data", (y) => {
        let C = null;
        (C = /Counting objects:\s*(\d+)%/i.exec(y)) ? p = Math.floor(parseInt(C[1]) * 0.1) : (C = /Compressing objects:\s*(\d+)%/i.exec(y)) ? p = 10 + Math.floor(parseInt(C[1]) * 0.1) : (C = /Receiving objects:\s*(\d+)%/i.exec(y)) ? p = 20 + Math.floor(parseInt(C[1]) * 0.4) : (C = /Resolving deltas:\s*(\d+)%/i.exec(y)) && (p = 60 + Math.floor(parseInt(C[1]) * 0.4)), p !== g && (t.progress.report({ increment: p - g }), g = p);
      });
    };
    try {
      let u = ["clone", e.includes(" ") ? encodeURI(e) : e, s, "--progress"];
      t.recursive && u.push("--recursive"), t.ref && u.push("--branch", t.ref), await this.exec(t.parentPath, u, { cancellationToken: i, env: { ...xd(e, t.httpExtraHeader), GIT_HTTP_USER_AGENT: this.userAgent }, onSpawn: l, repoConfigExecution: "allow-hooks" });
    } catch (u) {
      throw u.stderr && (u.stderr = u.stderr.replace(/^Cloning.+$/m, "").trim(), u.stderr = u.stderr.replace(/^ERROR:\s+/, "").trim()), u;
    }
    return s;
  }
  async getRepositoryRoot(e) {
    let t = await this.exec(e, ["rev-parse", "--show-toplevel"], { caller: "getRepositoryRoot" }), i = J.normalize(t.stdout.trimStart().replace(/[\r\n]+$/, ""));
    if (!z(e, i) && !me(i, e) && !me(e, i) && this.compareGitVersionTo("2.31.0") !== -1) {
      let r = await this.exec(e, ["rev-parse", "--path-format=relative", "--show-toplevel"]);
      return J.resolve(e, r.stdout.trimStart().replace(/[\r\n]+$/, ""));
    }
    if (wt) {
      let r = Re.Uri.file(i), o = Re.Uri.file(e);
      if (r.authority.length !== 0 && o.authority.length === 0) {
        let s = /^[\/]?([a-zA-Z])[:\/]/.exec(o.path);
        if (s !== null) {
          let [, a] = s;
          try {
            let l = await new Promise((u) => He.realpath.native(`${a}:\\`, { encoding: "utf8" }, (d, h) => u(d !== null ? void 0 : h)));
            if (l !== void 0) {
              let u = z(r.fsPath, l);
              return J.normalize(r.fsPath.replace(l, `${a.toLowerCase()}:${u || l.endsWith("\\") ? "\\" : ""}`));
            }
          } catch {
          }
        }
        return J.normalize(o.fsPath);
      }
    }
    return i;
  }
  async getRepositoryDotGit(e) {
    let t, i, r, o = ["rev-parse", "--git-dir", "--git-common-dir"];
    return this.compareGitVersionTo("2.13.0") >= 0 && o.push("--show-superproject-working-tree"), [t, i, r] = (await this.exec(e, o)).stdout.split(`
`).map((a) => a.trim()), J.isAbsolute(t) || (t = J.join(e, t)), t = J.normalize(t), i && (J.isAbsolute(i) || (i = J.join(e, i)), i = J.normalize(i)), { path: t, commonPath: i !== t ? i : void 0, superProjectPath: r ? J.normalize(r) : void 0 };
  }
  async exec(e, t, i = {}) {
    return i = Go({ cwd: e }, i || {}), await this._exec(t, i);
  }
  async exec2(e, t = {}) {
    return await this._exec(e, t);
  }
  stream(e, t, i = {}) {
    i = Go({ cwd: e }, i || {});
    let r = Ja(xi(i.repoConfigExecution)), o = this.spawn(t, i);
    if (i.log !== false) {
      let s = Date.now();
      o.on("exit", (a) => {
        this.log(`> ${pt(t)} [${Date.now() - s}ms]${o.killed ? " (cancelled)" : ""}${r}
`);
      });
    }
    return o;
  }
  async _exec(e, t = {}) {
    return this.extensionIsolationEnabled ? this._execNew(e, t) : this._execOld(e, t);
  }
  async _execNew(e, t = {}) {
    let { cancellationToken: i, repoConfigExecution: r, ...o } = t, s = this.getSpawner(xi(r)), a = Id(i), l = o.log !== false && e.some((u) => this.commandsToLog.includes(u));
    try {
      let u = { ...o, signal: a?.signal }, d = await s.exec2(e, u);
      return l && d.stdout.length > 0 && this.log(`${Oe(d.stdout)}
`), d;
    } catch (u) {
      if (u instanceof At) throw new Re.CancellationError();
      if (l) {
        let d = u.stdout;
        typeof d == "string" && d.length > 0 && this.log(`${Oe(d)}
`);
      }
      throw u;
    } finally {
      a?.dispose();
    }
  }
  getSpawner(e) {
    return e === "allow-hooks" ? this._hooksSpawner : this._spawner;
  }
  async _execOld(e, t = {}) {
    let i = Ja(xi(t.repoConfigExecution)), r = this.spawn(e, t);
    t.onSpawn?.(r), t.input && r.stdin.end(t.input, "utf8");
    let o = Date.now(), s;
    try {
      s = await nl(r, t.cancellationToken);
    } catch (l) {
      throw l instanceof Re.CancellationError && this.log(`> ${pt(e)} [${Date.now() - o}ms] (cancelled)
`), l;
    }
    t.log !== false && (this.log(`> ${pt(e)} [${Date.now() - o}ms] ${t.caller ? `(${t.caller})` : ""}${i}
`), s.stdout.length > 0 && e.find((l) => this.commandsToLog.includes(l)) && this.log(`${Oe(s.stdout.toString("utf8"))}
`), s.stderr.length > 0 && this.log(`${Oe(s.stderr)}
`));
    let a = { exitCode: s.exitCode, stdout: s.stdout.toString("utf8"), stderr: s.stderr };
    return s.exitCode ? Promise.reject(new Le({ message: "Failed to execute git", stdout: a.stdout, stderr: a.stderr, exitCode: a.exitCode, gitErrorCode: sl(a.stderr), gitCommand: e[0], gitArgs: e })) : a;
  }
  spawn(e, t = {}) {
    return this.extensionIsolationEnabled ? this._syncNew(e, t) : this._syncOld(e, t);
  }
  _syncNew(e, t = {}) {
    let { repoConfigExecution: i, ...r } = t;
    return this.getSpawner(xi(i)).spawn(e, r);
  }
  _syncOld(e, t = {}) {
    if (!this.path) throw new Error("git could not be found in the system.");
    let { repoConfigExecution: i, ...r } = t;
    !r.stdio && !r.input && (r.stdio = ["ignore", null, null]), r.env = Ri({ command: e[0], spawnerEnv: this.env, optionsEnv: r.env, repoConfigExecution: xi(i) });
    let o = this.getCwd(r);
    return o && (r.cwd = Xo(o)), ti.spawn(this.path, e, r);
  }
  getCwd(e) {
    let t = e.cwd;
    if (typeof t > "u" || typeof t == "string") return t;
    if (t.protocol === "file:") return (0, Xa.fileURLToPath)(t);
  }
  log(e) {
    this._onOutput.emit("log", e);
  }
  async mergeFile(e) {
    let t = ["merge-file", "-p", e.input1Path, e.basePath, e.input2Path];
    e.diff3 ? t.push("--diff3") : t.push("--no-diff3");
    try {
      return (await this.exec(Cr.homedir(), t)).stdout;
    } catch (i) {
      if (typeof i.stdout == "string") return i.stdout;
      throw i;
    }
  }
  async addSafeDirectory(e) {
    await this.exec(Cr.homedir(), ["config", "--global", "--add", "safe.directory", e]);
  }
}, Pi = class n {
  static {
    this._lineSeparator = /\r?\n/;
  }
  static {
    this._propertyRegex = /^\s*(\w+)\s*=\s*"?([^"]+)"?$/;
  }
  static {
    this._sectionRegex = /^\s*\[\s*([^\]]+?)\s*(\"[^"]+\")*\]\s*(?:[#;].*)?$/;
  }
  static parse(e) {
    let t = { sections: [] }, i = { name: "DEFAULT", properties: {} }, r = (o) => {
      o && t.sections.push(o);
    };
    for (let o of e.split(n._lineSeparator)) {
      let s = o.match(n._sectionRegex);
      if (s?.length === 3) {
        r(i), i = { name: s[1], subSectionName: s[2]?.replaceAll('"', ""), properties: {} };
        continue;
      }
      let a = o.match(n._propertyRegex);
      a?.length === 3 && !Object.keys(i.properties).includes(a[1]) && (i.properties[a[1]] = a[2]);
    }
    return r(i), t.sections;
  }
}, Zo = class {
  constructor() {
    this.lastRaw = "";
    this.result = [];
  }
  get status() {
    return this.result;
  }
  update(e) {
    let t = 0, i;
    for (e = this.lastRaw + e; (i = this.parseEntry(e, t)) !== void 0; ) t = i;
    this.lastRaw = e.substr(t);
  }
  parseEntry(e, t) {
    if (t + 4 >= e.length) return;
    let i, r = { x: e.charAt(t++), y: e.charAt(t++), rename: void 0, path: "" };
    if (t++, r.x === "R" || r.y === "R" || r.x === "C") {
      if (i = e.indexOf("\0", t), i === -1) return;
      r.rename = e.substring(t, i), t = i + 1;
    }
    if (i = e.indexOf("\0", t), i !== -1) return r.path = e.substring(t, i), r.path[r.path.length - 1] !== "/" && this.result.push(r), i + 1;
  }
};
function Dd(n6) {
  let e = [];
  for (let t of Pi.parse(n6).filter((i) => i.name === "submodule")) t.subSectionName && t.properties.path && t.properties.url && e.push({ name: t.subSectionName, path: t.properties.path, url: t.properties.url });
  return e;
}
function Pd(n6) {
  let e = [];
  for (let t of Pi.parse(n6).filter((i) => i.name === "remote")) t.subSectionName && e.push({ name: t.subSectionName, fetchUrl: t.properties.url, pushUrl: t.properties.pushurl ?? t.properties.url, isReadOnly: false });
  return e;
}
function Sd(n6) {
  let e = [];
  for (let t of n6.split(/\r?\n/)) {
    let i = /^([^\t]+)\t(.*?)(?: \((fetch|push)\))?$/.exec(t);
    if (!i) continue;
    let [, r, o, s] = i, a = e.find((l) => l.name === r);
    a || (a = { name: r, isReadOnly: false }, e.push(a)), s === "fetch" ? a.fetchUrl ??= o : (s === "push" || (a.fetchUrl ??= o), a.pushUrl ??= o);
  }
  return e;
}
function kd(n6) {
  return Pi.parse(n6).some((e) => {
    let t = e.name.toLowerCase();
    return t === "include" || t === "includeif";
  });
}
var Td = /([0-9a-f]{40})\n(.*)\n(.*)\n(.*)\n(.*)\n(.*)\n(.*)(?:\n([^]*?))?(?:\x00)(?:\n((?:.*)files? changed(?:.*))$)?/gm;
function qo(n6) {
  let e = [], t, i, r, o, s, a, l, u, d, h;
  do {
    if (h = Td.exec(n6), h === null) break;
    [, t, i, r, o, s, a, l, u, d] = h, u[u.length - 1] === `
` && (u = u.substr(0, u.length - 1)), e.push({ hash: ` ${t}`.substr(1), message: ` ${u}`.substr(1), parents: a ? a.split(" ") : [], authorDate: new Date(Number(o) * 1e3), authorName: ` ${i}`.substr(1), authorEmail: ` ${r}`.substr(1), commitDate: new Date(Number(s) * 1e3), refNames: l.split(",").map((p) => p.trim()), shortStat: d ? ll(d) : void 0 });
  } while (true);
  return e;
}
var Ad = /(\d+) files? changed(?:, (\d+) insertions?\(\+\))?(?:, (\d+) deletions?\(-\))?/;
function ll(n6) {
  let e = n6.trim().match(Ad);
  if (!e) return { files: 0, insertions: 0, deletions: 0 };
  let [, t, i = void 0, r = void 0] = e;
  return { files: parseInt(t), insertions: parseInt(i ?? "0"), deletions: parseInt(r ?? "0") };
}
function Id(n6) {
  if (!n6) return;
  let e = new AbortController();
  if (n6.isCancellationRequested) return e.abort(), { signal: e.signal, dispose: () => {
  } };
  let t = n6.onCancellationRequested(() => e.abort());
  return { signal: e.signal, dispose: () => t.dispose() };
}
function _d(n6) {
  return n6.split(`
`).filter((e) => !!e).map((e) => /^(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(.*)$/.exec(e)).filter((e) => !!e).map(([, e, t, i, r, o]) => ({ mode: e, type: t, object: i, size: r, file: o }));
}
function Bd(n6) {
  return n6.split(`
`).filter((e) => !!e).map((e) => /^(\S+)\s+(\S+)\s+(\S+)\s+(.*)$/.exec(e)).filter((e) => !!e).map(([, e, t, i, r]) => ({ mode: e, object: t, stage: i, file: r }));
}
var Od = /([0-9a-f]{40})\n(.*)\nstash@{(\d+)}\n(WIP\s)*on([^:]+):(.*)(?:\x00)/gmi;
function Md(n6) {
  let e = [], t, i, r, o, s, a, l;
  do {
    if (t = Od.exec(n6), t === null) break;
    [, i, r, o, s, a, l] = t, e.push({ hash: i, parents: r.split(" "), index: parseInt(o), branchName: a.trim(), description: s ? `WIP (${l.trim()})` : l.trim() });
  } while (true);
  return e;
}
function Qo(n6, e) {
  let t = 0, i = [], r = e.trim().split("\0").filter((o) => o);
  e: for (; t < r.length - 1; ) {
    let o = r[t++], s = r[t++];
    if (!o || !s) break;
    let a = Re.Uri.file(J.isAbsolute(s) ? s : J.join(n6, s)), l = a, u = a, d = m.UNTRACKED;
    switch (o[0]) {
      case "A":
        d = m.INDEX_ADDED;
        break;
      case "M":
        d = m.MODIFIED;
        break;
      case "D":
        d = m.DELETED;
        break;
      case "R": {
        if (t >= r.length) break;
        let h = r[t++];
        if (!h) break;
        d = m.INDEX_RENAMED, l = u = Re.Uri.file(J.isAbsolute(h) ? h : J.join(n6, h));
        break;
      }
      default:
        break e;
    }
    i.push({ status: d, uri: l, originalUri: a, renameUri: u });
  }
  return i;
}
function Ld(n6) {
  let e = /\r?\n/, t = /^([0-9a-f]{40})/gm, i = /* @__PURE__ */ new Map(), r, o, s, a, l, u, d;
  for (let h of n6.split(e)) {
    let p = h.match(t);
    if (!r && p) {
      let g = h.split(" ");
      r = p[0], u = Number(g[2]), d = Number(g[2]) + Number(g[3]) - 1;
    }
    if (r && h.startsWith("author ") && (o = h.substring(7)), r && h.startsWith("author-mail ") && (s = h.substring(13, h.length - 1)), r && h.startsWith("author-time ") && (a = Number(h.substring(12)) * 1e3), r && h.startsWith("summary ") && (l = h.substring(8)), r && u && d && h.startsWith("filename ")) {
      let g = i.get(r);
      g ? (g.ranges.push({ startLineNumber: u, endLineNumber: d }), i.set(r, g)) : i.set(r, { hash: r, authorName: o, authorEmail: s, authorDate: a, subject: l, ranges: [{ startLineNumber: u, endLineNumber: d }] }), r = o = s = a = l = u = d = void 0;
    }
  }
  return Array.from(i.values());
}
var en = "%(refname)%00%(objectname)%00%(*objectname)", qa = `${en}%00%(parent)%00%(*parent)%00%(authorname)%00%(*authorname)%00%(committerdate:unix)%00%(*committerdate:unix)%00%(subject)%00%(*subject)`;
function Yo(n6) {
  let e = /^(refs\/[^\0]+)\0([0-9a-f]{40})\0([0-9a-f]{40})?(?:\0(.*))?$/gm, t = /^refs\/heads\/([^ ]+)$/, i = /^refs\/remotes\/([^/]+)\/([^ ]+)$/, r = /^refs\/tags\/([^ ]+)$/, o = /\[(?:ahead ([0-9]+))?[,\s]*(?:behind ([0-9]+))?]|\[gone]/, s, a, l, u, d, h, p, g, y, C, S, k, G, I = [], D, M;
  do {
    if (D = e.exec(n6), D === null) break;
    [, s, a, l, u] = D, [d, h, y, C, S, k, p, g, G] = u?.split("\0") ?? [];
    let H = h || d, W = g || p, B = C || y, $ = k || S, q = H && W && B && $ ? { hash: a, message: W, parents: H.split(" "), authorName: B, commitDate: $ ? new Date(Number($) * 1e3) : void 0 } : void 0;
    if (M = t.exec(s)) {
      let [, E, oe] = o.exec(G) ?? [], ne = G ? E ? Number(E) : 0 : void 0, et = G ? oe ? Number(oe) : 0 : void 0;
      I.push({ name: M[1], commit: a, commitDetails: q, ahead: ne, behind: et, type: L.Head });
    } else if (M = i.exec(s)) {
      let E = `${M[1]}/${M[2]}`;
      I.push({ name: E, remote: M[1], commit: a, commitDetails: q, type: L.RemoteHead });
    } else (M = r.exec(s)) && I.push({ name: M[1], commit: l ?? a, commitDetails: q, type: L.Tag });
  } while (true);
  return I;
}
var tn = class {
  constructor(e, t, i, r, o) {
    this._git = e;
    this.repositoryRoot = t;
    this.repositoryRootRealPath = i;
    this.dotGit = r;
    this.logger = o;
    this._isUsingRefTable = false;
    this._kind = this.dotGit.commonPath ? "worktree" : this.dotGit.superProjectPath ? "submodule" : "repository";
  }
  get kind() {
    return this._kind;
  }
  get git() {
    return this._git;
  }
  get root() {
    return this.repositoryRoot;
  }
  get rootRealPath() {
    return this.repositoryRootRealPath;
  }
  async exec(e, t = {}) {
    return await this.git.exec(this.repositoryRoot, e, t);
  }
  stream(e, t = {}) {
    return this.git.stream(this.repositoryRoot, e, t);
  }
  spawn(e, t = {}) {
    return this.git.spawn(e, t);
  }
  async config(e, t, i, r = null, o = {}) {
    let s = ["config", `--${e}`];
    t && s.push(`--${t}`), s.push(i), r && s.push(r);
    try {
      return (await this.exec(s, o)).stdout.trim();
    } catch (a) {
      return this.logger.warn(`[Git][config] git config failed: ${a.message}`), "";
    }
  }
  async getConfigs(e) {
    let t = ["config"];
    return e && t.push("--" + e), t.push("-l"), (await this.exec(t)).stdout.trim().split(/\r|\r\n|\n/).map((o) => {
      let s = o.indexOf("=");
      return { key: o.substr(0, s), value: o.substr(s + 1) };
    });
  }
  async log(e) {
    let t = {}, i = ["log", `--format=${zo}`, "-z"];
    e?.shortStats && (i.push("--shortstat"), this._git.compareGitVersionTo("2.31") !== -1 && i.push("--diff-merges=first-parent")), e?.reverse && i.push("--reverse", "--ancestry-path"), e?.sortByAuthorDate && i.push("--author-date-order"), e?.range ? i.push(e.range) : i.push(`-n${e?.maxEntries ?? 32}`), e?.author && i.push(`--author="${e.author}"`), typeof e?.maxParents == "number" && i.push(`--max-parents=${e.maxParents}`), typeof e?.skip == "number" && i.push(`--skip=${e.skip}`), e?.refNames && (i.push("--topo-order"), i.push("--decorate=full"), t.input = e.refNames.join(`
`), i.push("--stdin")), e?.path && i.push("--", e.path);
    let r = await this.exec(i, t);
    return r.exitCode ? [] : qo(r.stdout);
  }
  async logFile(e, t) {
    let i = ["log", `--format=${zo}`, "-z"];
    t?.maxEntries && !t?.reverse && i.push(`-n${t.maxEntries}`), t?.hash && (t?.reverse ? i.push("--reverse", "--ancestry-path", `${t.hash}..HEAD`) : i.push(t.hash)), t?.shortStats && i.push("--shortstat"), t?.sortByAuthorDate && i.push("--author-date-order"), t?.follow && i.push("--follow"), i.push("--", e.fsPath);
    try {
      let r = await this.exec(i);
      return r.exitCode ? [] : qo(r.stdout);
    } catch (r) {
      if (/does not have any commits yet/.test(r.stderr)) return [];
      throw r;
    }
  }
  async reflog(e, t) {
    let i = ["reflog", e, `--grep-reflog=${t}`], r = await this.exec(i);
    return r.exitCode ? [] : r.stdout.split(`
`).filter((o) => !!o);
  }
  async buffer(e, t) {
    let i = Ge(this.repositoryRoot, t), r = this.stream(["show", "--textconv", `${e}:${i}`]);
    if (!r.stdout) return Promise.reject("Can't open file from git");
    let { exitCode: o, stdout: s, stderr: a } = await za(r);
    if (o) {
      let l = new Le({ message: "Could not show object.", exitCode: o });
      return /exists on disk, but not in/.test(a) && (l.gitErrorCode = T.WrongCase), Promise.reject(l);
    }
    return s;
  }
  async getObjectDetails(e, t) {
    if (!e || e === ":1" || e === ":2" || e === ":3") {
      let a = await this.lsfiles(t);
      if (a.length === 0) throw new Le({ message: "Path not known by git", gitErrorCode: T.UnknownPath });
      let { mode: l, object: u } = e !== "" ? a.find((p) => p.stage === e.substring(1)) ?? a[0] : a[0], d = await this.exec(["cat-file", "-s", u]), h = parseInt(d.stdout);
      return { mode: l, object: u, size: h };
    }
    let i = await this.lstree(e, t);
    if (i.length === 0) throw new Le({ message: "Path not known by git", gitErrorCode: T.UnknownPath });
    let { mode: r, object: o, size: s } = i[0];
    return { mode: r, object: o, size: parseInt(s) || 0 };
  }
  async lstree(e, t, i) {
    let r = ["ls-tree", "-l"];
    i?.recursive && r.push("-r"), r.push(e), t && r.push("--", Ge(this.repositoryRoot, t));
    let { stdout: o } = await this.exec(r);
    return _d(o);
  }
  async lsfiles(e) {
    let t = ["ls-files", "--stage"], i = Ge(this.repositoryRoot, e);
    i && t.push("--", i);
    let { stdout: r } = await this.exec(t);
    return Bd(r);
  }
  async getGitFilePath(e, t) {
    let i = e ? await this.lstree(e, void 0, { recursive: true }) : await this.lsfiles(this.repositoryRoot), r = Ge(this.repositoryRoot, t).toLowerCase(), o = i.find((s) => s.file.toLowerCase() === r);
    if (!o) throw new Le({ message: `Git relative path not found. Was looking for ${r} among ${JSON.stringify(i.map(({ file: s }) => s), null, 2)}` });
    return J.join(this.repositoryRoot, o.file);
  }
  async detectObjectType(e) {
    let t = await this.stream(["show", "--textconv", e]), i = await da(t.stdout, 4100);
    try {
      t.kill();
    } catch {
    }
    let r = ha(i), o = true;
    if (r !== "utf16be" && r !== "utf16le") {
      for (let s = 0; s < i.length; s++) if (i.readInt8(s) === 0) {
        o = false;
        break;
      }
    }
    if (!o) {
      let s = await el.fromBuffer(i);
      return s ? { mimetype: s.mime } : { mimetype: "application/octet-stream" };
    }
    return r ? { mimetype: "text/plain", encoding: r } : { mimetype: "text/plain" };
  }
  async apply(e, t) {
    let i = ["apply", e];
    t && i.push("-R");
    try {
      await this.exec(i);
    } catch (r) {
      throw /patch does not apply/.test(r.stderr) && (r.gitErrorCode = T.PatchDoesNotApply), r;
    }
  }
  async diff(e = false) {
    let t = ["diff"];
    return e && t.push("--cached"), (await this.exec(t)).stdout;
  }
  async diffWithHEAD(e) {
    if (!e) return await this.diffFiles(false);
    let t = ["diff", "--", Ge(this.repositoryRoot, e)];
    return (await this.exec(t)).stdout;
  }
  async diffWith(e, t) {
    if (!t) return await this.diffFiles(false, e);
    let i = ["diff", e, "--", Ge(this.repositoryRoot, t)];
    return (await this.exec(i)).stdout;
  }
  async diffIndexWithHEAD(e) {
    if (!e) return await this.diffFiles(true);
    let t = ["diff", "--cached", "--", Ge(this.repositoryRoot, e)];
    return (await this.exec(t)).stdout;
  }
  async diffIndexWith(e, t) {
    if (!t) return await this.diffFiles(true, e);
    let i = ["diff", "--cached", e, "--", Ge(this.repositoryRoot, t)];
    return (await this.exec(i)).stdout;
  }
  async diffBlobs(e, t) {
    let i = ["diff", e, t];
    return (await this.exec(i)).stdout;
  }
  async diffBetween(e, t, i) {
    let r = `${e}...${t}`;
    if (!i) return await this.diffFiles(false, r);
    let o = ["diff", r, "--", Ge(this.repositoryRoot, i)];
    return (await this.exec(o)).stdout.trim();
  }
  async getCommitFilesStats(e) {
    let t = ["show", e, "--numstat", "--format='%H'", "-z", "--ignore-all-space"], i = ["show", e, "--name-status", "--format='%H'", "-z"];
    try {
      let [r, o] = await Promise.all([this.exec(t), this.exec(i)]), s = r.stdout.split("\0").filter(Boolean), a = o.stdout.split("\0").filter(Boolean);
      s.shift(), a.shift();
      let l = /* @__PURE__ */ new Map();
      for (let u = 0; u < a.length; u++) {
        let d = a[u].trimStart(), h = a.at(++u)?.trimStart(), p = h;
        d.startsWith("R") && (p = a.at(++u)?.trimStart()), !(p === void 0 || h === void 0 || p === "" || h === "") && l.set(p, { from: h, to: p, additions: 0, deletions: 0, status: this.parseStatus(d[0]) });
      }
      for (let u = 0; u < s.length; u++) {
        let d = s[u].trimStart().split("	"), h = parseInt(d[0], 10) || 0, p = parseInt(d[1], 10) || 0;
        if (d.length === 3) {
          let g = d[2], y = g, C = g;
          if (g === "") {
            let k = s[u + 1], G = s[u + 2];
            k && G && (y = k, C = G, u += 2);
          }
          let S = l.get(C) || l.get(y);
          S && (S.additions = h, S.deletions = p);
        } else if (d.length === 4) {
          let g = d[2], y = d[3], C = l.get(y) || l.get(g);
          C && (C.additions = h, C.deletions = p);
        }
      }
      return Array.from(l.values());
    } catch (r) {
      throw r;
    }
  }
  async batchIsIgnored(e) {
    if (e.length === 0) return [];
    let t = ["check-ignore", "-v", "--"];
    t.push(...e.map(Xo));
    let i = new Re.CancellationTokenSource(), r = setTimeout(() => i.cancel(), 150);
    try {
      return (await this.exec(t, { cancellationToken: i.token })).stdout.trim().split(`
`).map((a) => {
        let l = a.split("	");
        return l.length > 1 ? l[1] : "";
      }).filter(Boolean);
    } catch {
      return [];
    } finally {
      clearTimeout(r);
    }
  }
  parseStatus(e) {
    switch (e) {
      case "A":
        return m.INDEX_ADDED;
      case "D":
        return m.INDEX_DELETED;
      case "M":
        return m.INDEX_MODIFIED;
      case "R":
        return m.INDEX_RENAMED;
      default:
        return m.INDEX_MODIFIED;
    }
  }
  async diffBetweenShortStat(e, t) {
    let i = ["diff", "--shortstat", `${e}...${t}`], r = await this.exec(i);
    return r.exitCode ? { files: 0, insertions: 0, deletions: 0 } : ll(r.stdout.trim());
  }
  async diffFiles(e, t) {
    let i = ["diff", "--name-status", "-z", "--diff-filter=ADMR"];
    e && i.push("--cached"), t && i.push(t);
    let r = await this.exec(i);
    return r.exitCode ? [] : Qo(this.repositoryRoot, r.stdout);
  }
  async diffTrees(e, t, i) {
    let r = ["diff-tree", "-r", "--name-status", "-z", "--diff-filter=ADMR"];
    i?.similarityThreshold && r.push(`--find-renames=${i.similarityThreshold}%`), r.push(e), t && r.push(t);
    let o = await this.exec(r);
    return o.exitCode ? [] : Qo(this.repositoryRoot, o.stdout);
  }
  async getMergeBase(e, t, ...i) {
    try {
      let r = ["merge-base"];
      return i.length !== 0 && (r.push("--octopus"), r.push(...i)), r.push(e, t), (await this.exec(r)).stdout.trim();
    } catch {
      return;
    }
  }
  async hashObject(e) {
    let t = ["hash-object", "-w", "--stdin"];
    return (await this.exec(t, { input: e })).stdout.trim();
  }
  async add(e, t) {
    let i = ["add"];
    if (t && t.update ? i.push("-u") : i.push("-A"), e && e.length) for (let r of Qt(e.map((o) => Ge(this.repositoryRoot, o)), Ei)) await this.exec([...i, "--", ...r]);
    else await this.exec([...i, "--", "."]);
  }
  async rm(e) {
    let t = ["rm", "--"];
    !e || !e.length || (t.push(...e.map((i) => Ge(this.repositoryRoot, i))), await this.exec(t));
  }
  async stage(e, t) {
    let i = Ge(this.repositoryRoot, e), r = this.stream(["hash-object", "--stdin", "-w", "--path", i], { stdio: [null, null, null] });
    r.stdin.end(t);
    let { exitCode: o, stdout: s } = await za(r), a = s.toString("utf8");
    if (o) throw new Le({ message: "Could not hash object.", exitCode: o });
    let l = await this.getCommit("HEAD").then(() => "HEAD", () => ""), u, d = "";
    try {
      u = (await this.getObjectDetails(l, e)).mode;
    } catch (h) {
      if (h.gitErrorCode !== T.UnknownPath) throw h;
      u = "100644", d = "--add";
    }
    await this.exec(["update-index", d, "--cacheinfo", u, a, i]);
  }
  async checkout(e, t, i = /* @__PURE__ */ Object.create(null)) {
    let r = ["checkout", "-q"];
    i.track && r.push("--track"), i.detached && r.push("--detach"), e && r.push(e);
    try {
      if (t && t.length > 0) for (let o of Qt(t.map((s) => Ge(this.repositoryRoot, s)), Ei)) await this.exec([...r, "--", ...o]);
      else await this.exec(r);
    } catch (o) {
      throw /Please,? commit your changes or stash them/.test(o.stderr || "") ? (o.gitErrorCode = T.DirtyWorkTree, o.gitTreeish = e) : /You are on a branch yet to be born/.test(o.stderr || "") && (o.gitErrorCode = T.BranchNotYetBorn), o;
    }
  }
  async commit(e, t = /* @__PURE__ */ Object.create(null)) {
    let i = ["commit", "--quiet"], r = {};
    e && (r.input = e, i.push("--allow-empty-message", "--file", "-")), t.verbose && i.push("--verbose"), t.all && i.push("--all"), t.amend && i.push("--amend"), t.useEditor || (e || (t.amend ? i.push("--no-edit") : (r.input = "", i.push("--file", "-"))), i.push("--allow-empty-message")), t.signoff && i.push("--signoff"), t.signCommit && i.push("-S"), t.empty && i.push("--allow-empty"), t.noVerify && i.push("--no-verify"), (t.requireUserConfig ?? true) && i.splice(0, 0, "-c", "user.useConfigOnly=true");
    try {
      await this.exec(i, r);
    } catch (o) {
      await this.handleCommitError(o);
    }
  }
  async rebaseAbort() {
    await this.exec(["rebase", "--abort"]);
  }
  async rebaseContinue() {
    let e = ["rebase", "--continue"];
    try {
      await this.exec(e, { env: { GIT_EDITOR: "true" } });
    } catch (t) {
      await this.handleCommitError(t);
    }
  }
  async handleCommitError(e) {
    if (/not possible because you have unmerged files/.test(e.stderr || "")) throw e.gitErrorCode = T.UnmergedChanges, e;
    if (/Aborting commit due to empty commit message/.test(e.stderr || "")) throw e.gitErrorCode = T.EmptyCommitMessage, e;
    try {
      await this.exec(["config", "--get-all", "user.name"]);
    } catch (t) {
      throw t.gitErrorCode = T.NoUserNameConfigured, t;
    }
    try {
      await this.exec(["config", "--get-all", "user.email"]);
    } catch (t) {
      throw t.gitErrorCode = T.NoUserEmailConfigured, t;
    }
    throw e;
  }
  async branch(e, t, i) {
    let r = t ? ["checkout", "-q", "-b", e, "--no-track"] : ["branch", "-q", e];
    i && r.push(i), await this.exec(r);
  }
  async deleteBranch(e, t) {
    let i = ["branch", t ? "-D" : "-d", e];
    await this.exec(i);
  }
  async renameBranch(e) {
    let t = ["branch", "-m", e];
    await this.exec(t);
  }
  async move(e, t) {
    let i = ["mv", e, t];
    await this.exec(i);
  }
  async setBranchUpstream(e, t) {
    let i = ["branch", "--set-upstream-to", t, e];
    await this.exec(i);
  }
  async deleteRef(e) {
    let t = ["update-ref", "-d", e];
    await this.exec(t);
  }
  async merge(e) {
    let t = ["merge", e];
    try {
      await this.exec(t);
    } catch (i) {
      throw /^CONFLICT /m.test(i.stdout || "") && (i.gitErrorCode = T.Conflict), i;
    }
  }
  async mergeAbort() {
    await this.exec(["merge", "--abort"]);
  }
  async tag(e) {
    let t = ["tag"];
    e.message ? t = [...t, "-a", e.name, "-m", e.message] : t = [...t, e.name], e.ref && t.push(e.ref), await this.exec(t);
  }
  async deleteTag(e) {
    let t = ["tag", "-d", e];
    await this.exec(t);
  }
  async addWorktree(e) {
    let t = ["worktree", "add"];
    e.orphan && t.push("--orphan"), e.branch && t.push("-b", e.branch), t.push(e.path), e.commitish && t.push(e.commitish), await this.exec(t);
  }
  async deleteWorktree(e, t) {
    let i = ["worktree", "remove"];
    t?.force && i.push("--force"), i.push(e), await this.exec(i);
  }
  async deleteRemoteRef(e, t, i) {
    let r = ["push", e, "--delete"];
    i?.force && r.push("--force"), r.push(t), await this.exec(r);
  }
  async clean(e) {
    let t = la(e.map(Xo), (a) => J.dirname(a)), i = Object.keys(t).map((a) => t[a]), r = new St(5), o = [], s = ["clean", "-f", "-q"];
    for (let a of i) for (let l of Qt(a.map((u) => Ge(this.repositoryRoot, u)), Ei)) o.push(r.queue(() => this.exec([...s, "--", ...l])));
    await Promise.all(o);
  }
  async undo() {
    await this.exec(["clean", "-fd"]);
    try {
      await this.exec(["checkout", "--", "."]);
    } catch (e) {
      if (/did not match any file\(s\) known to git\./.test(e.stderr || "")) return;
      throw e;
    }
  }
  async reset(e, t = false) {
    let i = ["reset", t ? "--hard" : "--soft", e];
    await this.exec(i);
  }
  async revert(e, t) {
    let i = await this.exec(["branch"]), r;
    i.stdout ? r = ["reset", "-q", e] : r = ["rm", "--cached", "-r"];
    try {
      if (t && t.length > 0) for (let o of Qt(t.map((s) => Ge(this.repositoryRoot, s)), Ei)) await this.exec([...r, "--", ...o]);
      else await this.exec([...r, "--", "."]);
    } catch (o) {
      if (/([^:]+: needs merge\n)+/m.test(o.stdout || "")) return;
      throw o;
    }
  }
  async addRemote(e, t) {
    let i = ["remote", "add", e, t];
    await this.exec(i);
  }
  async removeRemote(e) {
    let t = ["remote", "remove", e];
    await this.exec(t);
  }
  async renameRemote(e, t) {
    let i = ["remote", "rename", e, t];
    await this.exec(i);
  }
  async fetch(e = {}) {
    let t = ["fetch"], i = { cancellationToken: e.cancellationToken, env: { GIT_HTTP_USER_AGENT: this.git.userAgent } };
    e.remote ? (t.push(e.remote), e.ref && t.push(e.ref)) : e.all && t.push("--all"), e.prune && t.push("--prune"), typeof e.depth == "number" && t.push(`--depth=${e.depth}`), e.silent && (i.env.VSCODE_GIT_FETCH_SILENT = "true");
    try {
      await this.exec(t, i);
    } catch (r) {
      throw /No remote repository specified\./.test(r.stderr || "") ? r.gitErrorCode = T.NoRemoteRepositorySpecified : /Could not read from remote repository/.test(r.stderr || "") ? r.gitErrorCode = T.RemoteConnectionError : /! \[rejected\].*\(non-fast-forward\)/m.test(r.stderr || "") && (r.gitErrorCode = T.BranchFastForwardRejected), r;
    }
  }
  async fetchTags(e) {
    let t = ["fetch"], i = { env: { GIT_HTTP_USER_AGENT: this.git.userAgent } };
    t.push(e.remote);
    for (let r of e.tags) t.push(`refs/tags/${r}:refs/tags/${r}`);
    e.force && t.push("--force"), await this.exec(t, i);
  }
  async pull(e, t, i, r = {}) {
    let o = ["pull"];
    r.tags && o.push("--tags"), r.unshallow && o.push("--unshallow"), r.autoStash && this._git.compareGitVersionTo("2.27.0") !== -1 && o.push("--autostash"), e && o.push("-r"), t && i && (o.push(t), o.push(i));
    try {
      await this.exec(o, { cancellationToken: r.cancellationToken, env: { GIT_HTTP_USER_AGENT: this.git.userAgent } });
    } catch (s) {
      throw /^CONFLICT \([^)]+\): \b/m.test(s.stdout || "") ? s.gitErrorCode = T.Conflict : /Please tell me who you are\./.test(s.stderr || "") ? s.gitErrorCode = T.NoUserNameConfigured : /Could not read from remote repository/.test(s.stderr || "") ? s.gitErrorCode = T.RemoteConnectionError : /Pull(?:ing)? is not possible because you have unmerged files|Cannot pull with rebase: You have unstaged changes|Your local changes to the following files would be overwritten|Please, commit your changes before you can merge/i.test(s.stderr) ? (s.stderr = s.stderr.replace(/Cannot pull with rebase: You have unstaged changes/i, "Cannot pull with rebase, you have unstaged changes"), s.gitErrorCode = T.DirtyWorkTree) : /cannot lock ref|unable to update local ref/i.test(s.stderr || "") ? s.gitErrorCode = T.CantLockRef : /cannot rebase onto multiple branches/i.test(s.stderr || "") ? s.gitErrorCode = T.CantRebaseMultipleBranches : /! \[rejected\].*\(would clobber existing tag\)/m.test(s.stderr || "") && (s.gitErrorCode = T.TagConflict), s;
    }
  }
  async rebase(e, t = {}) {
    let i = ["rebase"];
    i.push(e);
    try {
      await this.exec(i, t);
    } catch (r) {
      throw /^CONFLICT \([^)]+\): \b/m.test(r.stdout || "") ? r.gitErrorCode = T.Conflict : /cannot rebase onto multiple branches/i.test(r.stderr || "") && (r.gitErrorCode = T.CantRebaseMultipleBranches), r;
    }
  }
  async push(e, t, i = false, r = false, o, s = false) {
    let a = ["push"];
    o === ot.ForceWithLease || o === ot.ForceWithLeaseIfIncludes ? (a.push("--force-with-lease"), o === ot.ForceWithLeaseIfIncludes && this._git.compareGitVersionTo("2.30") !== -1 && a.push("--force-if-includes")) : o === ot.Force && a.push("--force"), i && a.push("-u"), r && a.push("--follow-tags"), s && a.push("--tags"), e && a.push(e), t && a.push(t);
    try {
      await this.exec(a, { env: { GIT_HTTP_USER_AGENT: this.git.userAgent } });
    } catch (l) {
      let u = Rd(l.stderr || "", o);
      throw u ? l.gitErrorCode = u : /Permission.*denied/.test(l.stderr || "") ? l.gitErrorCode = T.PermissionDenied : /Could not read from remote repository/.test(l.stderr || "") ? l.gitErrorCode = T.RemoteConnectionError : /^fatal: The current branch .* has no upstream branch/.test(l.stderr || "") && (l.gitErrorCode = T.NoUpstreamBranch), l;
    }
  }
  async cherryPick(e) {
    try {
      await this.exec(["cherry-pick", e]);
    } catch (t) {
      throw /The previous cherry-pick is now empty, possibly due to conflict resolution./.test(t.stderr ?? "") ? (await this.cherryPickAbort(), t.gitErrorCode = T.CherryPickEmpty) : t.gitErrorCode = T.CherryPickConflict, t;
    }
  }
  async cherryPickAbort() {
    await this.exec(["cherry-pick", "--abort"]);
  }
  async blame(e) {
    try {
      let t = ["blame", "--", Ge(this.repositoryRoot, e)];
      return (await this.exec(t)).stdout.trim();
    } catch (t) {
      throw /^fatal: no such path/.test(t.stderr || "") && (t.gitErrorCode = T.NoPathFound), t;
    }
  }
  async blame2(e, t, i) {
    try {
      let r = ["blame", "--root", "--incremental"];
      i && r.push("-w"), t && r.push(t), r.push("--", Ge(this.repositoryRoot, e));
      let o = await this.exec(r);
      return Ld(o.stdout.trim());
    } catch {
      return;
    }
  }
  async createStash(e, t, i) {
    try {
      let r = ["stash", "push"];
      t && r.push("-u"), i && r.push("-S"), e && r.push("-m", e), await this.exec(r);
    } catch (r) {
      throw /No local changes to save/.test(r.stderr || "") && (r.gitErrorCode = T.NoLocalChanges), r;
    }
  }
  async popStash(e) {
    let t = ["stash", "pop"];
    await this.popOrApplyStash(t, e);
  }
  async applyStash(e) {
    let t = ["stash", "apply"];
    await this.popOrApplyStash(t, e);
  }
  async popOrApplyStash(e, t) {
    try {
      typeof t == "number" && e.push(`stash@{${t}}`), await this.exec(e);
    } catch (i) {
      throw /No stash found/.test(i.stderr || "") ? i.gitErrorCode = T.NoStashFound : /error: Your local changes to the following files would be overwritten/.test(i.stderr || "") ? i.gitErrorCode = T.LocalChangesOverwritten : /^CONFLICT/m.test(i.stdout || "") && (i.gitErrorCode = T.StashConflict), i;
    }
  }
  async dropStash(e) {
    let t = ["stash"];
    typeof e == "number" ? (t.push("drop"), t.push(`stash@{${e}}`)) : t.push("clear");
    try {
      await this.exec(t);
    } catch (i) {
      throw /No stash found/.test(i.stderr || "") && (i.gitErrorCode = T.NoStashFound), i;
    }
  }
  async showStash(e) {
    let t = ["stash", "show", `stash@{${e}}`, "--name-status", "-z", "-u"];
    try {
      let i = await this.exec(t);
      return i.exitCode ? [] : Qo(this.repositoryRoot, i.stdout.trim());
    } catch (i) {
      if (/No stash found/.test(i.stderr || "")) return;
      throw i;
    }
  }
  async getStatus(e) {
    if (e?.cancellationToken && e?.cancellationToken.isCancellationRequested) throw new Re.CancellationError();
    let t = [], i = { GIT_OPTIONAL_LOCKS: "0" }, r = ["status", "-z"];
    e?.untrackedChanges === "hidden" ? r.push("-uno") : r.push("-uall"), e?.ignoreSubmodules && r.push("--ignore-submodules"), e?.similarityThreshold && e.similarityThreshold !== 50 && this._git.compareGitVersionTo("2.18.0") !== -1 && r.push(`--find-renames=${e.similarityThreshold}%`);
    let o = this.stream(r, { env: i }), s = new Promise((a, l) => {
      let u = new Zo(), d = (y) => {
        if (y !== 0) {
          let C = g.join("");
          return l(new Le({ message: "Failed to execute git", stderr: C, exitCode: y, gitErrorCode: sl(C), gitCommand: "status", gitArgs: r }));
        }
        a({ status: u.status, statusLength: u.status.length, didHitLimit: false });
      }, h = e?.limit ?? 1e4, p = (y) => {
        u.update(y), h !== 0 && u.status.length > h && (o.removeListener("close", d), o.stdout.removeListener("data", p), o.kill(), a({ status: u.status.slice(0, h), statusLength: u.status.length, didHitLimit: true }));
      };
      o.stdout.setEncoding("utf8"), o.stdout.on("data", p);
      let g = [];
      o.stderr.setEncoding("utf8"), o.stderr.on("data", (y) => g.push(y)), o.on("error", Rr(l)), o.on("close", d);
    });
    if (e?.cancellationToken) {
      let a = new Promise((l, u) => {
        t.push(vt(e.cancellationToken.onCancellationRequested)(() => {
          try {
            o.kill();
          } catch {
          }
          u(new Re.CancellationError());
        }));
      });
      s = Promise.race([s, a]);
    }
    try {
      let { status: a, statusLength: l, didHitLimit: u } = await s;
      return { status: a, statusLength: l, didHitLimit: u };
    } finally {
      j(t);
    }
  }
  async getHEADRef() {
    let e;
    try {
      if (e = await this.getHEAD(), e.name) {
        let t = e.name, i = await this.getBranchTipsKey(t);
        if (i !== void 0 && this._headBranch?.tipsKey === i) return this._headBranch.branch;
        if (e = await this.getBranch(t), e && e.upstream) {
          let r = e.upstream.remote !== "." ? `refs/remotes/${e.upstream.remote}/${e.upstream.name}` : `refs/heads/${e.upstream.name}`, o = await this.revParse(r);
          e = { ...e, upstream: { ...e.upstream, commit: o } };
        }
        this._headBranch = i !== void 0 && e && await this.getBranchTipsKey(t) === i ? { tipsKey: i, branch: e } : void 0;
      } else if (e.commit) {
        let i = (await this.getRefs({ pattern: "refs/tags" })).find((r) => r.commit === e.commit);
        i && (e = { ...e, name: i.name, type: L.Tag });
      }
    } catch {
    }
    return e;
  }
  async getHEAD() {
    if (!this._isUsingRefTable) try {
      let t = await this.getHEADFS();
      if (t.name === ".invalid") this._isUsingRefTable = true, this.logger.warn("[Git][getHEAD] Failed to parse HEAD file: Repository is using reftable format.");
      else return t;
    } catch (t) {
      this.logger.warn(`[Git][getHEAD] Failed to parse HEAD file: ${t.message}`);
    }
    try {
      let t = await this.exec(["symbolic-ref", "--short", "HEAD"]);
      if (!t.stdout) throw new Error("Not in a branch");
      return { name: t.stdout.trim(), commit: void 0, type: L.Head };
    } catch {
    }
    let e = await this.exec(["rev-parse", "HEAD"]);
    if (!e.stdout) throw new Error("Error parsing HEAD");
    return { name: void 0, commit: e.stdout.trim(), type: L.Head };
  }
  async getHEADFS() {
    let e = await He.promises.readFile(J.join(this.dotGit.path, "HEAD"), "utf8"), t = e.match(/^ref: refs\/heads\/(?<name>.*)$/m);
    if (t?.groups?.name) return { name: t.groups.name, commit: void 0, type: L.Head };
    let i = e.match(/^(?<commit>[0-9a-f]{40})$/m);
    if (i?.groups?.commit) return { name: void 0, commit: i.groups.commit, type: L.Head };
    throw new Error(`Unable to parse HEAD file. HEAD file contents: ${e}.`);
  }
  async findTrackingBranches(e) {
    return (await this.exec(["for-each-ref", "--format", "%(refname:short)%00%(upstream:short)", "refs/heads"])).stdout.trim().split(`
`).map((i) => i.trim().split("\0")).filter(([i, r]) => r === e).map(([i]) => ({ name: i, type: L.Head }));
  }
  async getRefs(e, t) {
    if (t && t.isCancellationRequested) throw new Re.CancellationError();
    let i = ["for-each-ref"];
    if (e.count && i.push(`--count=${e.count}`), e.sort && e.sort !== "alphabetically" && i.push("--sort", `-${e.sort}`), e.includeCommitDetails) {
      let o = this._git.compareGitVersionTo("1.9.0") !== -1 ? `${qa}%00%(upstream:track)` : qa;
      i.push("--format", o);
    } else i.push("--format", en);
    if (e.pattern) {
      let o = Array.isArray(e.pattern) ? e.pattern : [e.pattern];
      for (let s of o) i.push(s.startsWith("refs/") ? s : `refs/${s}`);
    }
    e.contains && i.push("--contains", e.contains);
    let r = await this.exec(i, { cancellationToken: t });
    return Yo(r.stdout);
  }
  async getBranchAndTagRefs(e) {
    if (e && e.isCancellationRequested) throw new Re.CancellationError();
    let [t, i] = await Promise.all([this.exec(["for-each-ref", "--format", "%(refname)%00%(objectname)%00", "refs/heads", "refs/remotes"], { cancellationToken: e }), this.exec(["for-each-ref", "--format", en, "refs/tags"], { cancellationToken: e })]);
    return [...Yo(t.stdout), ...Yo(i.stdout)];
  }
  async getRemoteRefs(e, t) {
    if (t?.cancellationToken && t?.cancellationToken.isCancellationRequested) throw new Re.CancellationError();
    let i = ["ls-remote"];
    t?.heads && i.push("--heads"), t?.tags && i.push("--tags"), i.push(e);
    let r = await this.exec(i, { cancellationToken: t?.cancellationToken }), o = (s) => {
      let a;
      return (a = /^([0-9a-f]{40})\trefs\/heads\/([^ ]+)$/.exec(s)) ? { name: a[1], commit: a[2], type: L.Head } : (a = /^([0-9a-f]{40})\trefs\/tags\/([^ ]+)$/.exec(s)) ? { name: a[2], commit: a[1], type: L.Tag } : null;
    };
    return r.stdout.split(`
`).filter((s) => !!s).map(o).filter((s) => !!s);
  }
  async getStashes() {
    let e = await this.exec(["stash", "list", `--format=${Ed}`, "-z"]);
    return Md(e.stdout.trim());
  }
  async getWorktrees() {
    return await this.getWorktreesFS();
  }
  async getWorktreesFS() {
    if (!(Re.workspace.getConfiguration("git", Re.Uri.file(this.repositoryRoot)).get("detectWorktrees") === true)) return this.logger.info("[Git][getWorktreesFS] Worktree detection is disabled, skipping worktree detection"), [];
    try {
      let i = J.join(this.dotGit.commonPath ?? this.dotGit.path, "worktrees"), r = await He.promises.readdir(i, { withFileTypes: true }), o = [];
      for (let l of r) if (l.isDirectory()) try {
        let u = J.join(i, l.name), d = J.join(u, "HEAD"), h = (await He.promises.readFile(d, "utf8")).trim(), p = J.join(u, "gitdir"), y = (await He.promises.readFile(p, "utf8")).trim().replace(/[/\\]\.git(?:[/\\].*)?$/, "");
        J.isAbsolute(y) ? y = J.normalize(y) : y = J.normalize(J.join(u, y)), o.push({ name: l.name, path: y, ref: h.replace(/^ref: /, "") });
      } catch (u) {
        if (/ENOENT/.test(u.message)) continue;
        throw u;
      }
      let s = /* @__PURE__ */ new Map(), a = Array.from(new Set(o.map((l) => l.path)));
      return await Promise.all(a.map(async (l) => {
        try {
          await He.promises.access(J.join(l, ".git"), He.constants.F_OK), s.set(l, 0);
        } catch {
          s.set(l, 1);
        }
      })), o.sort((l, u) => {
        let d = s.get(l.path) ?? 1, h = s.get(u.path) ?? 1, p = d - h;
        return p !== 0 ? p : l.name.localeCompare(u.name);
      }), o;
    } catch (i) {
      if (/ENOENT/.test(i.message) || /ENOTDIR/.test(i.message)) return [];
      throw i;
    }
  }
  async getRemotes() {
    let e = [];
    try {
      e.push(...await this.getRemotesFS()), e.length === 0 && this.logger.info("[Git][getRemotes] No remotes found in the git config file");
    } catch (t) {
      this.logger.warn(`[Git][getRemotes] Error: ${t.message}`), e.push(...await this.getRemotesGit());
    }
    for (let t of e) t.isReadOnly = t.pushUrl === void 0 || t.pushUrl === "no_push";
    return e;
  }
  async getRemotesFS() {
    let e = await He.promises.readFile(J.join(this.dotGit.commonPath ?? this.dotGit.path, "config"), "utf8");
    return kd(e) ? this.getRemotesGit() : Pd(e);
  }
  async getRemotesGit() {
    let e = await this.exec(["remote", "--verbose"]);
    return Sd(e.stdout);
  }
  async getBranchTipsKey(e) {
    try {
      let t = await this.exec(["for-each-ref", "--format=%(objectname)%00%(upstream)", `refs/heads/${e}`]), [i, r = ""] = t.stdout.trim().split(`
`)[0].split("\0");
      if (!i) return;
      let o = r ? (await this.exec(["for-each-ref", "--format=%(objectname)", r])).stdout.trim() : "";
      return [e, i, r, o].join("\0");
    } catch {
      return;
    }
  }
  async getBranch(e) {
    if (e === "HEAD") return this.getHEAD();
    let t = ["for-each-ref"], i = true;
    this._git.compareGitVersionTo("1.9.0") === -1 ? (t.push("--format=%(refname)%00%(upstream:short)%00%(objectname)"), i = false) : this._git.compareGitVersionTo("2.16.0") === -1 ? t.push("--format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)") : t.push("--format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref)"), this.git.compareGitVersionTo("2.12") !== -1 && (wt || Oo) && t.push("--ignore-case"), /^refs\/(heads|remotes)\//i.test(e) ? t.push(e) : t.push(`refs/heads/${e}`, `refs/remotes/${e}`);
    let o = (await this.exec(t)).stdout.trim().split(`
`).map((s) => {
      let [a, l, u, d, h, p] = s.trim().split("\0");
      if (a.startsWith("refs/heads/")) {
        a = a.substring(11);
        let g = l.indexOf("/"), y, C, S = /\[(?:ahead ([0-9]+))?[,\s]*(?:behind ([0-9]+))?]|\[gone]/.exec(d);
        return S && ([, y, C] = S), { type: L.Head, name: a, upstream: l !== "" && d !== "[gone]" ? { name: p ? p.substring(11) : l.substring(g + 1), remote: h || l.substring(0, g) } : void 0, commit: u || void 0, ahead: Number(y) || 0, behind: Number(C) || 0 };
      } else if (a.startsWith("refs/remotes/")) {
        a = a.substring(13);
        let g = a.indexOf("/");
        return { type: L.RemoteHead, name: a.substring(g + 1), remote: a.substring(0, g), commit: u };
      } else return;
    }).filter((s) => !!s);
    if (o.length) {
      let [s] = o;
      if (!i && s.upstream) try {
        let a = await this.exec(["rev-list", "--left-right", "--count", `${s.name}...${s.upstream.remote}/${s.upstream.name}`]), [l, u] = a.stdout.trim().split("	");
        s.ahead = Number(l) || 0, s.behind = Number(u) || 0;
      } catch {
      }
      return s;
    }
    return this.logger.warn(`[Git][getBranch] No such branch: ${e}`), Promise.reject(new Error(`No such branch: ${e}.`));
  }
  async getDefaultBranch(e) {
    let t = await this.exec(["symbolic-ref", "--short", `refs/remotes/${e}/HEAD`]);
    if (!t.stdout || t.stderr) throw new Error("No default branch");
    return this.getBranch(t.stdout.trim());
  }
  stripCommitMessageComments(e) {
    return e.replace(/^\s*#.*$\n?/gm, "").trim();
  }
  async getSquashMessage() {
    let e = J.join(this.repositoryRoot, ".git", "SQUASH_MSG");
    try {
      let t = await He.promises.readFile(e, "utf8");
      return this.stripCommitMessageComments(t);
    } catch {
      return;
    }
  }
  async getMergeMessage() {
    let e = J.join(this.repositoryRoot, ".git", "MERGE_MSG");
    try {
      let t = await He.promises.readFile(e, "utf8");
      return this.stripCommitMessageComments(t);
    } catch {
      return;
    }
  }
  async getCommitTemplate() {
    try {
      let e = await this.exec(["config", "--get", "commit.template"]);
      if (!e.stdout) return "";
      let t = Cr.homedir(), i = e.stdout.trim().replace(/^~([^\/]*)\//, (o, s) => `${s ? J.join(J.dirname(t), s) : t}/`);
      J.isAbsolute(i) || (i = J.join(this.repositoryRoot, i));
      let r = await He.promises.readFile(i, "utf8");
      return this.stripCommitMessageComments(r);
    } catch {
      return "";
    }
  }
  async getInitialCommits() {
    return (await this.exec(["rev-list", "--max-parents=0", "HEAD"])).stdout.split(`
`).filter((t) => !!t);
  }
  async getCommit(e) {
    let t = await this.exec(["show", "-s", "--decorate=full", "--shortstat", `--format=${zo}`, "-z", e, "--"]), i = qo(t.stdout);
    return i.length === 0 ? Promise.reject("bad commit format") : i[0];
  }
  async revList(e, t) {
    let i = await this.exec(["rev-list", `${e}..${t}`]);
    return i.stderr ? [] : i.stdout.trim().split(`
`);
  }
  async revParse(e) {
    try {
      return (await He.promises.readFile(J.join(this.dotGit.path, e), "utf8")).trim();
    } catch (t) {
      this.logger.warn(`[Git][revParse] Unable to read file: ${t.message}`);
    }
    try {
      let t = await this.exec(["rev-parse", e]);
      return t.stderr ? void 0 : t.stdout.trim();
    } catch {
      return;
    }
  }
  async updateSubmodules(e) {
    let t = ["submodule", "update"];
    for (let i of Qt(e.map((r) => Ge(this.repositoryRoot, r)), Ei)) await this.exec([...t, "--", ...i]);
  }
  async getSubmodules() {
    let e = J.join(this.root, ".gitmodules");
    try {
      let t = await He.promises.readFile(e, "utf8");
      return Dd(t);
    } catch (t) {
      if (/ENOENT/.test(t.message)) return [];
      throw t;
    }
  }
};
var P = require("vscode");
var st = ie(require("fs")), se = ie(require("path")), Sn = ie(Al()), ci = ie(require("vscode")), f = require("vscode");
var he = require("vscode");
var Rh = /* @__PURE__ */ new Set(["Branch", "Commit", "RebaseContinue", "Merge", "Rebase", "CherryPick", "Pull", "DeleteRemoteRef", "Push", "Sync", "Checkout", "CheckoutTracking", "Clean", "SubmoduleUpdate", "Worktree"]);
function Il(n6) {
  return Rh.has(n6) ? "allow-hooks" : "block";
}
var A = { Add: (n6) => ({ kind: "Add", blocking: false, readOnly: false, remote: false, retry: false, showProgress: n6 }), Apply: { kind: "Apply", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Blame: (n6) => ({ kind: "Blame", blocking: false, readOnly: true, remote: false, retry: false, showProgress: n6 }), Branch: { kind: "Branch", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, CheckIgnore: { kind: "CheckIgnore", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, CherryPick: { kind: "CherryPick", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Checkout: (n6) => ({ kind: "Checkout", blocking: true, readOnly: false, remote: false, retry: false, showProgress: true, refLabel: n6 }), CheckoutTracking: (n6) => ({ kind: "CheckoutTracking", blocking: true, readOnly: false, remote: false, retry: false, showProgress: true, refLabel: n6 }), Clean: (n6) => ({ kind: "Clean", blocking: false, readOnly: false, remote: false, retry: false, showProgress: n6 }), Commit: { kind: "Commit", blocking: true, readOnly: false, remote: false, retry: false, showProgress: true }, Config: (n6) => ({ kind: "Config", blocking: false, readOnly: n6, remote: false, retry: false, showProgress: false }), DeleteBranch: { kind: "DeleteBranch", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, DeleteRef: { kind: "DeleteRef", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, DeleteRemoteRef: { kind: "DeleteRemoteRef", blocking: false, readOnly: false, remote: true, retry: false, showProgress: true }, DeleteTag: { kind: "DeleteTag", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, DeleteWorktree: { kind: "DeleteWorktree", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Diff: { kind: "Diff", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, Fetch: (n6) => ({ kind: "Fetch", blocking: false, readOnly: false, remote: true, retry: true, showProgress: n6 }), FindTrackingBranches: { kind: "GetTracking", blocking: false, readOnly: true, remote: false, retry: false, showProgress: true }, GetCommitFilesStats: { kind: "GetCommitFilesStats", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, BatchIsIgnored: { kind: "BatchIsIgnored", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetInitialCommits: { kind: "GetInitialCommits", blocking: false, readOnly: true, remote: false, retry: false, showProgress: true }, GetBranch: { kind: "GetBranch", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetBranches: { kind: "GetBranches", blocking: false, readOnly: true, remote: false, retry: false, showProgress: true }, GetCommitTemplate: { kind: "GetCommitTemplate", blocking: false, readOnly: true, remote: false, retry: false, showProgress: true }, GetObjectDetails: { kind: "GetObjectDetails", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetObjectFiles: { kind: "GetObjectFiles", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetRefs: { kind: "GetRefs", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetWorktrees: { kind: "GetWorktrees", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, GetRemoteRefs: { kind: "GetRemoteRefs", blocking: false, readOnly: true, remote: true, retry: false, showProgress: false }, HashObject: { kind: "HashObject", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Ignore: { kind: "Ignore", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Log: (n6) => ({ kind: "Log", blocking: false, readOnly: true, remote: false, retry: false, showProgress: n6 }), LogFile: { kind: "LogFile", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, Merge: { kind: "Merge", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, MergeAbort: { kind: "MergeAbort", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, MergeBase: { kind: "MergeBase", blocking: false, readOnly: true, remote: false, retry: false, showProgress: true }, Move: { kind: "Move", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, PostCommitCommand: { kind: "PostCommitCommand", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Pull: { kind: "Pull", blocking: true, readOnly: false, remote: true, retry: true, showProgress: true }, Push: { kind: "Push", blocking: true, readOnly: false, remote: true, retry: false, showProgress: true }, Remote: { kind: "Remote", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, RenameBranch: { kind: "RenameBranch", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Remove: { kind: "Remove", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Reset: { kind: "Reset", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Rebase: { kind: "Rebase", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, RebaseAbort: { kind: "RebaseAbort", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, RebaseContinue: { kind: "RebaseContinue", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Refresh: { kind: "Refresh", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, RevertFiles: (n6) => ({ kind: "RevertFiles", blocking: false, readOnly: false, remote: false, retry: false, showProgress: n6 }), RevList: { kind: "RevList", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, RevParse: { kind: "RevParse", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, SetBranchUpstream: { kind: "SetBranchUpstream", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Show: { kind: "Show", blocking: false, readOnly: true, remote: false, retry: false, showProgress: false }, Stage: { kind: "Stage", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Status: { kind: "Status", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Stash: { kind: "Stash", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, SubmoduleUpdate: { kind: "SubmoduleUpdate", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Sync: { kind: "Sync", blocking: true, readOnly: false, remote: true, retry: true, showProgress: true }, Tag: { kind: "Tag", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true }, Worktree: { kind: "Worktree", blocking: false, readOnly: false, remote: false, retry: false, showProgress: true } }, Pr = class {
  constructor(e) {
    this.logger = e;
    this.operations = /* @__PURE__ */ new Map();
  }
  start(e) {
    this.operations.has(e.kind) ? this.operations.get(e.kind).add(e) : this.operations.set(e.kind, /* @__PURE__ */ new Set([e])), this.logger.trace(`[OperationManager][start] ${e.kind} (blocking: ${e.blocking}, readOnly: ${e.readOnly}; retry: ${e.retry}; showProgress: ${e.showProgress})`);
  }
  end(e) {
    let t = this.operations.get(e.kind);
    t && (t.delete(e), t.size === 0 && this.operations.delete(e.kind)), this.logger.trace(`[OperationManager][end] ${e.kind} (blocking: ${e.blocking}, readOnly: ${e.readOnly}; retry: ${e.retry}; showProgress: ${e.showProgress})`);
  }
  getOperations(e) {
    let t = this.operations.get(e);
    return t ? Array.from(t) : [];
  }
  isIdle() {
    let e = this.operations.values();
    for (let t of e) for (let i of t) if (!i.readOnly) return false;
    return true;
  }
  isRunning(e) {
    return this.operations.has(e);
  }
  shouldDisableCommands() {
    let e = this.operations.values();
    for (let t of e) for (let i of t) if (i.blocking) return true;
    return false;
  }
  shouldShowProgress() {
    let e = this.operations.values();
    for (let t of e) for (let i of t) if (i.showProgress) return true;
    return false;
  }
};
function Eh(n6, e) {
  return n6.HEAD?.name === e.HEAD?.name && n6.HEAD?.commit === e.HEAD?.commit && n6.HEAD?.remote === e.HEAD?.remote && n6.HEAD?.type === e.HEAD?.type && n6.HEAD?.ahead === e.HEAD?.ahead && n6.HEAD?.behind === e.HEAD?.behind && n6.HEAD?.upstream?.name === e.HEAD?.upstream?.name && n6.HEAD?.upstream?.remote === e.HEAD?.upstream?.remote && n6.HEAD?.upstream?.commit === e.HEAD?.upstream?.commit && n6.isCheckoutInProgress === e.isCheckoutInProgress && n6.isCommitInProgress === e.isCommitInProgress && n6.isMergeInProgress === e.isMergeInProgress && n6.isRebaseInProgress === e.isRebaseInProgress && n6.isSyncInProgress === e.isSyncInProgress && n6.repositoryHasChangesToCommit === e.repositoryHasChangesToCommit && n6.repositoryHasUnresolvedConflicts === e.repositoryHasUnresolvedConflicts;
}
var Sr = class {
  constructor(e, t, i) {
    this.repository = e;
    this.postCommitCommandCenter = t;
    this.logger = i;
    this._onDidChange = new he.EventEmitter();
    this.disposables = [];
    this._state = { HEAD: void 0, isCheckoutInProgress: false, isCommitInProgress: false, isMergeInProgress: false, isRebaseInProgress: false, isSyncInProgress: false, repositoryHasChangesToCommit: false, repositoryHasUnresolvedConflicts: false }, e.onDidRunGitStatus(this.onDidRunGitStatus, this, this.disposables), e.onDidChangeOperations(this.onDidChangeOperations, this, this.disposables), this.disposables.push(e.onDidChangeBranchProtection(() => this._onDidChange.fire())), this.disposables.push(t.onDidChange(() => this._onDidChange.fire()));
    let r = he.Uri.file(e.root);
    this.disposables.push(he.workspace.onDidChangeConfiguration((o) => {
      (o.affectsConfiguration("git.enableSmartCommit", r) || o.affectsConfiguration("git.smartCommitChanges", r) || o.affectsConfiguration("git.suggestSmartCommit", r)) && this.onDidChangeSmartCommitSettings(), (o.affectsConfiguration("git.branchProtectionPrompt", r) || o.affectsConfiguration("git.postCommitCommand", r) || o.affectsConfiguration("git.rememberPostCommitCommand", r) || o.affectsConfiguration("git.showActionButton", r)) && this._onDidChange.fire();
    }));
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    Eh(this._state, e) || (this.logger.trace(`[ActionButton][setState] ${JSON.stringify(e)}`), this._state = e, this._onDidChange.fire());
  }
  get button() {
    if (!this.state.HEAD) return;
    let e;
    return this.state.repositoryHasChangesToCommit && (e = this.getCommitActionButton()), e = e ?? this.getPublishBranchActionButton() ?? this.getSyncChangesActionButton() ?? this.getCommitActionButton(), this.logger.trace(`[ActionButton][getButton] ${JSON.stringify({ command: e?.command.command, title: e?.command.title, enabled: e?.enabled })}`), e;
  }
  getCommitActionButton() {
    return he.workspace.getConfiguration("git", he.Uri.file(this.repository.root)).get("showActionButton", { commit: true }).commit ? { command: this.getCommitActionButtonPrimaryCommand(), secondaryCommands: this.getCommitActionButtonSecondaryCommands(), enabled: (this.state.repositoryHasChangesToCommit || this.state.isRebaseInProgress && !this.state.repositoryHasUnresolvedConflicts || this.state.isMergeInProgress && !this.state.repositoryHasUnresolvedConflicts) && !this.state.isCommitInProgress } : void 0;
  }
  getCommitActionButtonPrimaryCommand() {
    return this.state.isRebaseInProgress ? { command: "git.commit", title: he.l10n.t("{0} Continue", "$(check)"), tooltip: this.state.isCommitInProgress ? he.l10n.t("Continuing Rebase...") : he.l10n.t("Continue Rebase"), arguments: [this.repository.sourceControl, null] } : this.state.isMergeInProgress ? { command: "git.commit", title: he.l10n.t("{0} Continue", "$(check)"), tooltip: this.state.isCommitInProgress ? he.l10n.t("Continuing Merge...") : he.l10n.t("Continue Merge"), arguments: [this.repository.sourceControl, null] } : this.state.HEAD?.type === L.Tag || !this.state.HEAD?.name ? { command: "git.commit", title: he.l10n.t("{0} Commit", "$(check)"), tooltip: this.state.isCommitInProgress ? he.l10n.t("Committing Changes...") : he.l10n.t("Commit Changes"), arguments: [this.repository.sourceControl, null] } : this.postCommitCommandCenter.getPrimaryCommand();
  }
  getCommitActionButtonSecondaryCommands() {
    if (this.state.isRebaseInProgress) return [];
    if (this.state.isMergeInProgress) return [];
    if (this.state.HEAD?.type === L.Tag || !this.state.HEAD?.name) return [];
    let e = [];
    for (let t of this.postCommitCommandCenter.getSecondaryCommands()) e.push(t.map((i) => ({ command: i.command, title: i.title, tooltip: i.tooltip, arguments: i.arguments })));
    return e;
  }
  getPublishBranchActionButton() {
    let t = he.workspace.getConfiguration("git", he.Uri.file(this.repository.root)).get("showActionButton", { publish: true });
    if (this.state.HEAD?.type === L.Tag || !this.state.HEAD?.name || this.state.HEAD?.upstream || this.state.isCommitInProgress || this.state.isMergeInProgress || this.state.isRebaseInProgress || !t.publish) return;
    let i = this.state.isSyncInProgress ? "$(sync~spin)" : "$(cloud-upload)";
    return { command: { command: "git.publish", title: he.l10n.t({ message: "{0} Publish Branch", args: [i], comment: ['{Locked="Branch"}', 'Do not translate "Branch" as it is a git term'] }), tooltip: this.state.isSyncInProgress ? this.state.HEAD?.name ? he.l10n.t({ message: 'Publishing Branch "{0}"...', args: [this.state.HEAD.name], comment: ['{Locked="Branch"}', 'Do not translate "Branch" as it is a git term'] }) : he.l10n.t({ message: "Publishing Branch...", comment: ['{Locked="Branch"}', 'Do not translate "Branch" as it is a git term'] }) : this.repository.HEAD?.name ? he.l10n.t({ message: 'Publish Branch "{0}"', args: [this.state.HEAD?.name], comment: ['{Locked="Branch"}', 'Do not translate "Branch" as it is a git term'] }) : he.l10n.t({ message: "Publish Branch", comment: ['{Locked="Branch"}', 'Do not translate "Branch" as it is a git term'] }), arguments: [this.repository.sourceControl] }, enabled: !this.state.isCheckoutInProgress && !this.state.isSyncInProgress };
  }
  getSyncChangesActionButton() {
    let t = he.workspace.getConfiguration("git", he.Uri.file(this.repository.root)).get("showActionButton", { sync: true }), i = (this.state.HEAD?.behind ?? 0) > 0 || (this.state.HEAD?.ahead ?? 0) > 0;
    if (!this.state.HEAD?.upstream || !i || this.state.isCommitInProgress || this.state.isMergeInProgress || this.state.isRebaseInProgress || !t.sync) return;
    let r = this.state.HEAD.ahead ? ` ${this.state.HEAD.ahead}$(arrow-up)` : "", o = this.state.HEAD.behind ? ` ${this.state.HEAD.behind}$(arrow-down)` : "", s = this.state.isSyncInProgress ? "$(sync~spin)" : "$(sync)";
    return { command: { command: "git.sync", title: he.l10n.t("{0} Sync Changes{1}{2}", s, o, r), shortTitle: `${s}${o}${r}`, tooltip: this.state.isSyncInProgress ? he.l10n.t("Synchronizing Changes...") : this.repository.syncTooltip, arguments: [this.repository.sourceControl] }, enabled: !this.state.isCheckoutInProgress && !this.state.isSyncInProgress };
  }
  onDidChangeOperations() {
    let e = this.repository.operations.isRunning("Checkout") || this.repository.operations.isRunning("CheckoutTracking"), t = this.repository.operations.isRunning("Commit") || this.repository.operations.isRunning("PostCommitCommand") || this.repository.operations.isRunning("RebaseContinue"), i = this.repository.operations.isRunning("Sync") || this.repository.operations.isRunning("Push") || this.repository.operations.isRunning("Pull");
    this.state = { ...this.state, isCheckoutInProgress: e, isCommitInProgress: t, isSyncInProgress: i };
  }
  onDidChangeSmartCommitSettings() {
    this.state = { ...this.state, repositoryHasChangesToCommit: this.repositoryHasChangesToCommit() };
  }
  onDidRunGitStatus() {
    this.state = { ...this.state, HEAD: this.repository.HEAD, isMergeInProgress: this.repository.mergeInProgress, isRebaseInProgress: !!this.repository.rebaseCommit, repositoryHasChangesToCommit: this.repositoryHasChangesToCommit(), repositoryHasUnresolvedConflicts: this.repository.mergeGroup.resourceStates.length > 0 };
  }
  repositoryHasChangesToCommit() {
    let e = he.workspace.getConfiguration("git", he.Uri.file(this.repository.root)), t = e.get("enableSmartCommit") === true, i = e.get("suggestSmartCommit") === true, r = e.get("smartCommitChanges", "all"), o = [...this.repository.indexGroup.resourceStates];
    return (t && r === "all" || !t && i) && o.push(...this.repository.workingTreeGroup.resourceStates), t && r === "tracked" && o.push(...this.repository.workingTreeGroup.resourceStates.filter((s) => s.type !== m.UNTRACKED)), o.length !== 0;
  }
  dispose() {
    this.disposables = j(this.disposables);
  }
};
var Ve = require("vscode");
function tt(n6) {
  return /^git$/.test(n6.scheme);
}
function Ne(n6) {
  return JSON.parse(n6.query);
}
function Z(n6, e, t = {}) {
  let i = { path: n6.fsPath, ref: e };
  t.submoduleOf && (i.submoduleOf = t.submoduleOf);
  let r = n6.path;
  return t.replaceFileExtension ? r = `${r}.git` : t.submoduleOf && (r = `${r}.diff`), n6.with({ scheme: t.scheme ?? "git", path: r, query: JSON.stringify(i) });
}
function gn(n6) {
  return { base: Z(n6, ":1"), ours: Z(n6, ":2"), theirs: Z(n6, ":3") };
}
function oi(n6, e, t) {
  switch (n6.status) {
    case m.INDEX_ADDED:
      return { originalUri: void 0, modifiedUri: Z(n6.uri, t) };
    case m.DELETED:
      return { originalUri: Z(n6.uri, e), modifiedUri: void 0 };
    case m.INDEX_RENAMED:
      return { originalUri: Z(n6.originalUri, e), modifiedUri: Z(n6.uri, t) };
    default:
      return { originalUri: Z(n6.uri, e), modifiedUri: Z(n6.uri, t) };
  }
}
var _l = require("vscode"), Gt = class {
  static getAPI() {
    if (!this._gitBaseApi) {
      let e = _l.extensions.getExtension("vscode.git-base").exports, t = (i) => {
        this._gitBaseApi = i ? e.getAPI(1) : void 0;
      };
      if (e.onDidChangeEnablement(t), t(e.enabled), !this._gitBaseApi) throw new Error("vscode.git-base extension is not enabled.");
    }
    return this._gitBaseApi;
  }
};
var yn = class {
  #e;
  constructor(e) {
    this.#e = e;
  }
  set value(e) {
    this.#e.value = e;
  }
  get value() {
    return this.#e.value;
  }
}, ni = class {
  #e;
  constructor(e) {
    this.#e = e;
  }
  get uri() {
    return this.#e.resourceUri;
  }
  get originalUri() {
    return this.#e.original;
  }
  get renameUri() {
    return this.#e.renameResourceUri;
  }
  get status() {
    return this.#e.type;
  }
}, bn = class {
  #e;
  constructor(e) {
    this.#e = e, this.onDidChange = this.#e.onDidRunGitStatus;
  }
  get HEAD() {
    return this.#e.HEAD;
  }
  get refs() {
    return console.warn("Deprecated. Use ApiRepository.getRefs() instead."), [];
  }
  get remotes() {
    return [...this.#e.remotes];
  }
  get submodules() {
    return [...this.#e.submodules];
  }
  get rebaseCommit() {
    return this.#e.rebaseCommit;
  }
  get mergeChanges() {
    return this.#e.mergeGroup.resourceStates.map((e) => new ni(e));
  }
  get indexChanges() {
    return this.#e.indexGroup.resourceStates.map((e) => new ni(e));
  }
  get workingTreeChanges() {
    return this.#e.workingTreeGroup.resourceStates.map((e) => new ni(e));
  }
  get untrackedChanges() {
    return this.#e.untrackedGroup.resourceStates.map((e) => new ni(e));
  }
}, Cn = class {
  #e;
  constructor(e) {
    this.#e = e, this.onDidChange = kt(this.#e.onDidChangeSelection, () => null);
  }
  get selected() {
    return this.#e.selected;
  }
}, Ee = class {
  #e;
  constructor(e) {
    this.#e = e, this.rootUri = Ve.Uri.file(this.#e.root), this.inputBox = new yn(this.#e.inputBox), this.state = new bn(this.#e), this.ui = new Cn(this.#e.sourceControl), this.onDidCommit = kt(V(this.#e.onDidRunOperation, (t) => t.operation.kind === "Commit"), () => null), this.onDidCheckout = kt(V(this.#e.onDidRunOperation, (t) => t.operation.kind === "Checkout" || t.operation.kind === "CheckoutTracking"), () => null);
  }
  apply(e, t) {
    return this.#e.apply(e, t);
  }
  getConfigs() {
    return this.#e.getConfigs();
  }
  getConfig(e) {
    return this.#e.getConfig(e);
  }
  setConfig(e, t) {
    return this.#e.setConfig(e, t);
  }
  unsetConfig(e) {
    return this.#e.unsetConfig(e);
  }
  getGlobalConfig(e) {
    return this.#e.getGlobalConfig(e);
  }
  getObjectDetails(e, t) {
    return this.#e.getObjectDetails(e, t);
  }
  detectObjectType(e) {
    return this.#e.detectObjectType(e);
  }
  buffer(e, t) {
    return this.#e.buffer(e, t);
  }
  show(e, t) {
    return this.#e.show(e, t);
  }
  getCommit(e) {
    return this.#e.getCommit(e);
  }
  add(e) {
    return this.#e.add(e.map((t) => Ve.Uri.file(t)));
  }
  revert(e) {
    return this.#e.revert(e.map((t) => Ve.Uri.file(t)));
  }
  clean(e) {
    return this.#e.clean(e.map((t) => Ve.Uri.file(t)));
  }
  diff(e) {
    return this.#e.diff(e);
  }
  diffWithHEAD(e) {
    return this.#e.diffWithHEAD(e);
  }
  diffWith(e, t) {
    return this.#e.diffWith(e, t);
  }
  diffIndexWithHEAD(e) {
    return this.#e.diffIndexWithHEAD(e);
  }
  diffIndexWith(e, t) {
    return this.#e.diffIndexWith(e, t);
  }
  diffBlobs(e, t) {
    return this.#e.diffBlobs(e, t);
  }
  diffBetween(e, t, i) {
    return this.#e.diffBetween(e, t, i);
  }
  getCommitFilesStats(e) {
    return this.#e.getCommitFilesStats(e);
  }
  batchIsIgnored(e) {
    return this.#e.batchIsIgnored(e);
  }
  getInitialCommits() {
    return this.#e.getInitialCommits();
  }
  hashObject(e) {
    return this.#e.hashObject(e);
  }
  createBranch(e, t, i) {
    return this.#e.branch(e, t, i);
  }
  deleteBranch(e, t) {
    return this.#e.deleteBranch(e, t);
  }
  getBranch(e) {
    return this.#e.getBranch(e);
  }
  getBranches(e, t) {
    return this.#e.getBranches(e, t);
  }
  getBranchBase(e) {
    return this.#e.getBranchBase(e);
  }
  setBranchUpstream(e, t) {
    return this.#e.setBranchUpstream(e, t);
  }
  getRefs(e, t) {
    return this.#e.getRefs(e, t);
  }
  checkIgnore(e) {
    return this.#e.checkIgnore(e);
  }
  getMergeBase(e, t) {
    return this.#e.getMergeBase(e, t);
  }
  tag(e, t, i) {
    return this.#e.tag({ name: e, message: t, ref: i });
  }
  deleteTag(e) {
    return this.#e.deleteTag(e);
  }
  status() {
    return this.#e.status();
  }
  checkout(e) {
    return this.#e.checkout(e);
  }
  addRemote(e, t) {
    return this.#e.addRemote(e, t);
  }
  removeRemote(e) {
    return this.#e.removeRemote(e);
  }
  renameRemote(e, t) {
    return this.#e.renameRemote(e, t);
  }
  fetch(e, t, i, r) {
    return e !== void 0 && typeof e != "string" ? this.#e.fetch(e) : this.#e.fetch({ remote: e, ref: t, depth: i, prune: r });
  }
  pull(e) {
    return this.#e.pull(void 0, e);
  }
  push(e, t, i = false, r) {
    return this.#e.pushTo(e, t, i, r);
  }
  blame(e) {
    return this.#e.blame(e);
  }
  log(e) {
    return this.#e.log(e);
  }
  commit(e, t) {
    return this.#e.commit(e, { ...t, postCommitCommand: null });
  }
  get remotes() {
    return this.#e.remotes;
  }
  getUpdatedRemotes() {
    return this.#e.getRemotes();
  }
  merge(e) {
    return this.#e.merge(e);
  }
  mergeAbort() {
    return this.#e.mergeAbort();
  }
  applyStash(e) {
    return this.#e.applyStash(e);
  }
  popStash(e) {
    return this.#e.popStash(e);
  }
  dropStash(e) {
    return this.#e.dropStash(e);
  }
}, wn = class {
  #e;
  constructor(e) {
    this.#e = e;
  }
  get path() {
    return this.#e.git.path;
  }
  get env() {
    return this._env === void 0 && (this._env = Object.freeze(this.#e.git.env)), this._env;
  }
}, vn = class {
  #e;
  constructor(e) {
    this.#e = e;
  }
  exec(e, t, i) {
    return this.#e.exec(e, t, { ...i, repoConfigExecution: "block" });
  }
}, kr = class {
  #e;
  constructor(e) {
    this.#e = e, this.git = new wn(this.#e), this.rawGit = new vn(this.#e.git);
  }
  get state() {
    return this.#e.state;
  }
  get onDidChangeState() {
    return this.#e.onDidChangeState;
  }
  get onDidPublish() {
    return this.#e.onDidPublish;
  }
  get onDidOpenRepository() {
    return kt(this.#e.onDidOpenRepository, (e) => new Ee(e));
  }
  get onDidCloseRepository() {
    return kt(this.#e.onDidCloseRepository, (e) => new Ee(e));
  }
  get repositories() {
    return this.#e.repositories.map((e) => new Ee(e));
  }
  toGitUri(e, t) {
    return Z(e, t);
  }
  getRepository(e) {
    let t = this.#e.getRepository(e);
    return t ? new Ee(t) : null;
  }
  async init(e, t) {
    let i = e.fsPath;
    return await this.#e.git.init(i, t), await this.#e.openRepository(i), this.getRepository(e) || null;
  }
  async openRepository(e) {
    return e.scheme !== "file" ? null : (await this.#e.openRepository(e.fsPath), this.getRepository(e) || null);
  }
  registerRemoteSourceProvider(e) {
    let t = [];
    return e.publishRepository && t.push(this.#e.registerRemoteSourcePublisher(e)), t.push(Gt.getAPI().registerRemoteSourceProvider(e)), Ot(t);
  }
  registerRemoteSourcePublisher(e) {
    return this.#e.registerRemoteSourcePublisher(e);
  }
  registerCredentialsProvider(e) {
    return this.#e.registerCredentialsProvider(e);
  }
  registerPostCommitCommandsProvider(e) {
    return this.#e.registerPostCommitCommandsProvider(e);
  }
  registerPushErrorHandler(e) {
    return this.#e.registerPushErrorHandler(e);
  }
  registerSourceControlHistoryItemDetailsProvider(e) {
    return this.#e.registerSourceControlHistoryItemDetailsProvider(e);
  }
  registerBranchProtectionProvider(e, t) {
    return this.#e.registerBranchProtectionProvider(e, t);
  }
};
function xh(n6) {
  switch (n6) {
    case L.Head:
      return "Head";
    case L.RemoteHead:
      return "RemoteHead";
    case L.Tag:
      return "Tag";
  }
  return "unknown";
}
function Dh(n6) {
  switch (n6) {
    case m.INDEX_MODIFIED:
      return "INDEX_MODIFIED";
    case m.INDEX_ADDED:
      return "INDEX_ADDED";
    case m.INDEX_DELETED:
      return "INDEX_DELETED";
    case m.INDEX_RENAMED:
      return "INDEX_RENAMED";
    case m.INDEX_COPIED:
      return "INDEX_COPIED";
    case m.MODIFIED:
      return "MODIFIED";
    case m.DELETED:
      return "DELETED";
    case m.UNTRACKED:
      return "UNTRACKED";
    case m.IGNORED:
      return "IGNORED";
    case m.INTENT_TO_ADD:
      return "INTENT_TO_ADD";
    case m.INTENT_TO_RENAME:
      return "INTENT_TO_RENAME";
    case m.TYPE_CHANGED:
      return "TYPE_CHANGED";
    case m.ADDED_BY_US:
      return "ADDED_BY_US";
    case m.ADDED_BY_THEM:
      return "ADDED_BY_THEM";
    case m.DELETED_BY_US:
      return "DELETED_BY_US";
    case m.DELETED_BY_THEM:
      return "DELETED_BY_THEM";
    case m.BOTH_ADDED:
      return "BOTH_ADDED";
    case m.BOTH_DELETED:
      return "BOTH_DELETED";
    case m.BOTH_MODIFIED:
      return "BOTH_MODIFIED";
  }
  return "UNKNOWN";
}
function Bl(n6) {
  let e = [];
  return e.push(Ve.commands.registerCommand("git.api.checkIgnore", async (t, i) => {
    let o = n6.getAPI(1).getRepository(Ve.Uri.parse(t));
    return o ? [...await o.checkIgnore(i)] : null;
  })), e.push(Ve.commands.registerCommand("git.api.getRepositories", () => n6.getAPI(1).repositories.map((i) => i.rootUri.toString()))), e.push(Ve.commands.registerCommand("git.api.getRepositoryState", (t) => {
    let r = n6.getAPI(1).getRepository(Ve.Uri.parse(t));
    if (!r) return null;
    let o = r.state, s = (l) => l && { ...l, type: xh(l.type) }, a = (l) => ({ uri: l.uri.toString(), originalUri: l.originalUri.toString(), renameUri: l.renameUri?.toString(), status: Dh(l.status) });
    return { HEAD: s(o.HEAD), refs: o.refs.map(s), remotes: o.remotes, submodules: o.submodules, rebaseCommit: o.rebaseCommit, mergeChanges: o.mergeChanges.map(a), indexChanges: o.indexChanges.map(a), workingTreeChanges: o.workingTreeChanges.map(a) };
  })), e.push(Ve.commands.registerCommand("git.api.getRemoteSources", (t) => Ve.commands.executeCommand("git-base.api.getRemoteSources", t))), Ve.Disposable.from(...e);
}
var xe = require("vscode");
var Ai = class n2 {
  constructor(e, t) {
    this.repository = e;
    this.globalState = t;
    this._onDidChange = new xe.EventEmitter();
    this.onDidChange = this._onDidChange.event;
    this._enabled = false;
    this._fetchAll = false;
    this.disposables = [];
    xe.workspace.onDidChangeConfiguration(this.onConfiguration, this, this.disposables), this.onConfiguration();
    let i = V(e.onDidRunOperation, ({ operation: o, error: s }) => !s && o.remote);
    vt(i)(this.onFirstGoodRemoteOperation, this, this.disposables);
  }
  static {
    this.DidInformUser = "autofetch.didInformUser";
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled = e, this._onDidChange.fire(e);
  }
  async onFirstGoodRemoteOperation() {
    let e = !this.globalState.get(n2.DidInformUser);
    if (this.enabled && !e && this.globalState.update(n2.DidInformUser, true), !(!this.enabled && e)) return;
    let i = { title: xe.l10n.t("Yes") }, r = { isCloseAffordance: true, title: xe.l10n.t("No") }, o = { title: xe.l10n.t("Ask Me Later") }, s = await xe.window.showInformationMessage(xe.l10n.t('Would you like {0} to [periodically run "git fetch"]({1})?', xe.env.appName, "https://go.microsoft.com/fwlink/?linkid=865294"), i, r, o);
    s !== o && (s === i && xe.workspace.getConfiguration("git", xe.Uri.file(this.repository.root)).update("autofetch", true, xe.ConfigurationTarget.Global), this.globalState.update(n2.DidInformUser, true));
  }
  onConfiguration(e) {
    if (e !== void 0 && !e.affectsConfiguration("git.autofetch")) return;
    switch (xe.workspace.getConfiguration("git", xe.Uri.file(this.repository.root)).get("autofetch")) {
      case true:
        this._fetchAll = false, this.enable();
        break;
      case "all":
        this._fetchAll = true, this.enable();
        break;
      case false:
      default:
        this._fetchAll = false, this.disable();
        break;
    }
  }
  enable() {
    this.enabled || (this.enabled = true, this.run());
  }
  disable() {
    this.enabled = false;
  }
  async run() {
    for (; this.enabled; ) {
      if (await this.repository.whenIdleAndFocused(), !this.enabled) return;
      try {
        this._fetchAll ? await this.repository.fetchAll({ silent: true }) : await this.repository.fetchDefault({ silent: true });
      } catch (r) {
        r.gitErrorCode === T.AuthenticationFailed && this.disable();
      }
      if (!this.enabled) return;
      let e = xe.workspace.getConfiguration("git", xe.Uri.file(this.repository.root)).get("autofetchPeriod", 180) * 1e3, t = new Promise((r) => setTimeout(r, e)), i = Qe(V(this.onDidChange, (r) => !r));
      await Promise.race([t, i]);
    }
  }
  dispose() {
    this.disable(), this.disposables.forEach((e) => e.dispose());
  }
};
var Ii = require("vscode");
var Tr = class {
  constructor(e) {
    this.repositoryRoot = e;
    this._onDidChangeBranchProtection = new Ii.EventEmitter();
    this.onDidChangeBranchProtection = this._onDidChangeBranchProtection.event;
    this.disposables = [];
    V(Ii.workspace.onDidChangeConfiguration, (i) => i.affectsConfiguration("git.branchProtection", e))(this.updateBranchProtection, this, this.disposables), this.updateBranchProtection();
  }
  provideBranchProtection() {
    return [this.branchProtection];
  }
  updateBranchProtection() {
    let t = Ii.workspace.getConfiguration("git", this.repositoryRoot).get("branchProtection") ?? [], r = (Array.isArray(t) ? t : [t]).map((o) => typeof o == "string" ? o.trim() : "").filter((o) => o !== "");
    this.branchProtection = { remote: "", rules: [{ include: r }] }, this._onDidChangeBranchProtection.fire(this.repositoryRoot);
  }
  dispose() {
    this.disposables = j(this.disposables);
  }
};
function Ar(n6) {
  return (e, t, i) => {
    let r = null, o = null;
    if (typeof i.value == "function" ? (r = "value", o = i.value) : typeof i.get == "function" && (r = "get", o = i.get), !o || !r) throw new Error("not supported");
    i[r] = n6(o, t);
  };
}
function Ph(n6, e) {
  let t = `$memoize$${e}`;
  return function(...i) {
    return this.hasOwnProperty(t) || Object.defineProperty(this, t, { configurable: false, enumerable: false, writable: false, value: n6.apply(this, i) }), this[t];
  };
}
var gt = Ar(Ph);
function Sh(n6, e) {
  let t = `$throttle$current$${e}`, i = `$throttle$next$${e}`, r = function(...o) {
    if (this[i]) return this[i];
    if (this[t]) return this[i] = Lo(this[t]).then(() => (this[i] = void 0, r.apply(this, o))), this[i];
    this[t] = n6.apply(this, o);
    let s = () => this[t] = void 0;
    return Lo(this[t]).then(s, s), this[t];
  };
  return r;
}
var Fe = Ar(Sh);
function kh(n6, e) {
  let t = `__$sequence$${e}`;
  return function(...i) {
    let r = this[t] || Promise.resolve(null), o = async () => await n6.apply(this, i);
    return this[t] = r.then(o, o), this[t];
  };
}
var Ir = Ar(kh);
function nt(n6) {
  return Ar((e, t) => {
    let i = `$debounce$${t}`;
    return function(...r) {
      clearTimeout(this[i]), this[i] = setTimeout(() => e.apply(this, r), n6);
    };
  });
}
var re = require("vscode");
var Br = require("vscode");
var Ol = require("util"), Th = /:([-+_a-z0-9]+):/g, _r, Rn;
async function si() {
  _r === void 0 && (Rn === void 0 && (Rn = Ah()), await Rn);
}
async function Ah() {
  let n6 = En(), e = Br.Uri.joinPath(n6.extensionUri, "resources", "emojis.json");
  _r = JSON.parse(new Ol.TextDecoder("utf8").decode(await Br.workspace.fs.readFile(e)));
}
function Ht(n6) {
  return _r === void 0 ? n6 : n6.replace(Th, (e, t) => _r?.[t] || e);
}
async function ai(n6, e, t) {
  for (let i of n6.getSourceControlHistoryItemDetailsProviders()) {
    let r = await i.provideAvatar(new Ee(e), t);
    if (r) return r;
  }
}
async function Or(n6, e) {
  for (let t of n6.getSourceControlHistoryItemDetailsProviders()) {
    let i = await t.provideHoverCommands(new Ee(e));
    if (i) return i;
  }
}
async function li(n6, e, t) {
  for (let i of n6.getSourceControlHistoryItemDetailsProviders()) {
    let r = await i.provideMessageLinks(new Ee(e), t);
    if (r) return r;
  }
}
function Ih(n6, e) {
  let t = (o) => o.id.startsWith("refs/heads/") ? 1 : o.id.startsWith("refs/remotes/") ? 2 : o.id.startsWith("refs/tags/") ? 3 : 99, i = t(n6), r = t(e);
  return i !== r ? i - r : n6.name.localeCompare(e.name);
}
var _i = class {
  constructor(e, t, i) {
    this.historyItemDetailProviderRegistry = e;
    this.repository = t;
    this.logger = i;
    this._onDidChangeDecorations = new re.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeDecorations.event;
    this._onDidChangeCurrentHistoryItemRefs = new re.EventEmitter();
    this.onDidChangeCurrentHistoryItemRefs = this._onDidChangeCurrentHistoryItemRefs.event;
    this._onDidChangeHistoryItemRefs = new re.EventEmitter();
    this.onDidChangeHistoryItemRefs = this._onDidChangeHistoryItemRefs.event;
    this._historyItemRefs = [];
    this.commitShortHashLength = 7;
    this.historyItemDecorations = /* @__PURE__ */ new Map();
    this.disposables = [];
    this.disposables.push(re.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration)), this.onDidChangeConfiguration();
    let r = V(t.onDidRunOperation, (o) => !o.operation.readOnly);
    this.disposables.push(r(this.onDidRunWriteOperation, this)), this.disposables.push(re.window.registerFileDecorationProvider(this));
  }
  get currentHistoryItemRef() {
    return this._currentHistoryItemRef;
  }
  get currentHistoryItemRemoteRef() {
    return this._currentHistoryItemRemoteRef;
  }
  get currentHistoryItemBaseRef() {
    return this._currentHistoryItemBaseRef;
  }
  onDidChangeConfiguration(e) {
    if (e && !e.affectsConfiguration("git.commitShortHashLength")) return;
    let t = re.workspace.getConfiguration("git", re.Uri.file(this.repository.root));
    this.commitShortHashLength = t.get("commitShortHashLength", 7);
  }
  async onDidRunWriteOperation(e) {
    if (!this.repository.HEAD) {
      this.logger.trace("[GitHistoryProvider][onDidRunWriteOperation] repository.HEAD is undefined"), this._currentHistoryItemRef = this._currentHistoryItemRemoteRef = this._currentHistoryItemBaseRef = void 0, this._onDidChangeCurrentHistoryItemRefs.fire();
      return;
    }
    let t = this.repository.refs.map((l) => this.toSourceControlHistoryItemRef(l)).sort((l, u) => l.id.localeCompare(u.id)), i = ma(this._historyItemRefs, t);
    this._historyItemRefs = t;
    let r = "", o = "";
    switch (this.repository.HEAD.type) {
      case L.Head: {
        if (this.repository.HEAD.name !== void 0) if (r = `refs/heads/${this.repository.HEAD.name}`, o = this.repository.HEAD.name, this.repository.HEAD.upstream ? this.repository.HEAD.upstream.remote === "." ? this._currentHistoryItemRemoteRef = { id: `refs/heads/${this.repository.HEAD.upstream.name}`, name: this.repository.HEAD.upstream.name, revision: this.repository.HEAD.upstream.commit, icon: new re.ThemeIcon("gi-branch") } : this._currentHistoryItemRemoteRef = { id: `refs/remotes/${this.repository.HEAD.upstream.remote}/${this.repository.HEAD.upstream.name}`, name: `${this.repository.HEAD.upstream.remote}/${this.repository.HEAD.upstream.name}`, revision: this.repository.HEAD.upstream.commit, icon: new re.ThemeIcon("cloud") } : this._currentHistoryItemRemoteRef = void 0, this._HEAD?.name !== this.repository.HEAD.name) {
          let l = await this.resolveHEADMergeBase();
          this._currentHistoryItemBaseRef = l && l.name && l.remote && (l.remote !== this.repository.HEAD.upstream?.remote || l.name !== this.repository.HEAD.upstream?.name) ? { id: `refs/remotes/${l.remote}/${l.name}`, name: `${l.remote}/${l.name}`, revision: l.commit, icon: new re.ThemeIcon("cloud") } : void 0;
        } else {
          let l = i.modified.find((u) => u.id === this._currentHistoryItemBaseRef?.id);
          this._currentHistoryItemBaseRef && l && (this._currentHistoryItemBaseRef = { ...this._currentHistoryItemBaseRef, revision: l.revision });
        }
        else r = this.repository.HEAD.commit ?? "", o = this.repository.HEAD.commit ?? "", this._currentHistoryItemRemoteRef = void 0, this._currentHistoryItemBaseRef = void 0;
        break;
      }
      case L.Tag: {
        r = `refs/tags/${this.repository.HEAD.name}`, o = this.repository.HEAD.name ?? this.repository.HEAD.commit ?? "", this._currentHistoryItemRemoteRef = void 0, this._currentHistoryItemBaseRef = void 0;
        break;
      }
    }
    this._HEAD = this.repository.HEAD, this._currentHistoryItemRef = { id: r, name: o, revision: this.repository.HEAD.commit, icon: new re.ThemeIcon("target") }, this._onDidChangeCurrentHistoryItemRefs.fire(), this.logger.trace(`[GitHistoryProvider][onDidRunWriteOperation] currentHistoryItemRef: ${JSON.stringify(this._currentHistoryItemRef)}`), this.logger.trace(`[GitHistoryProvider][onDidRunWriteOperation] currentHistoryItemRemoteRef: ${JSON.stringify(this._currentHistoryItemRemoteRef)}`), this.logger.trace(`[GitHistoryProvider][onDidRunWriteOperation] currentHistoryItemBaseRef: ${JSON.stringify(this._currentHistoryItemBaseRef)}`);
    let s = e.operation.kind === "Fetch" && e.operation.showProgress === false;
    this._onDidChangeHistoryItemRefs.fire({ ...i, silent: s });
    let a = { added: i.added.map((l) => l.id), modified: i.modified.map((l) => l.id), removed: i.removed.map((l) => l.id), silent: s };
    this.logger.trace(`[GitHistoryProvider][onDidRunWriteOperation] historyItemRefs: ${JSON.stringify(a)}`);
  }
  async provideHistoryItemRefs(e) {
    let t = await this.repository.getRefs({ pattern: e }), i = [], r = [], o = [];
    for (let s of t) switch (s.type) {
      case L.RemoteHead:
        r.push(this.toSourceControlHistoryItemRef(s));
        break;
      case L.Tag:
        o.push(this.toSourceControlHistoryItemRef(s));
        break;
      default:
        i.push(this.toSourceControlHistoryItemRef(s));
        break;
    }
    return [...i, ...r, ...o];
  }
  async provideHistoryItems(e) {
    if (!this.currentHistoryItemRef || !e.historyItemRefs) return [];
    let i = { refNames: Array.from(new Set(e.historyItemRefs)), shortStats: true };
    try {
      if (e.limit === void 0 || typeof e.limit == "number") i = { ...i, maxEntries: e.limit ?? 50 };
      else if (typeof e.limit.id == "string") {
        let l = await this.repository.getCommit(e.limit.id), u = l.parents.length > 0 ? l.parents[0] : await this.repository.getEmptyTree();
        i = { ...i, range: `${u}..` };
      }
      typeof e.skip == "number" && (i = { ...i, skip: e.skip });
      let r = await this.repository.log({ ...i, silent: true }), o = { commits: r.map((l) => ({ hash: l.hash, authorName: l.authorName, authorEmail: l.authorEmail })), size: 20 }, s = await ai(this.historyItemDetailProviderRegistry, this.repository, o);
      await si();
      let a = [];
      for (let l of r) {
        let u = Ht(l.message), d = await li(this.historyItemDetailProviderRegistry, this.repository, u) ?? u, h = u.indexOf(`
`), p = h !== -1 ? `${u.substring(0, h)}…` : u, g = s?.get(l.hash), y = this._resolveHistoryItemRefs(l);
        a.push({ id: l.hash, parentIds: l.parents, subject: p, message: d, author: l.authorName, authorEmail: l.authorEmail, authorIcon: g ? re.Uri.parse(g) : new re.ThemeIcon("account"), displayId: mt(l.hash, this.commitShortHashLength, false), timestamp: l.authorDate?.getTime(), statistics: l.shortStat ?? { files: 0, insertions: 0, deletions: 0 }, references: y.length !== 0 ? y : void 0 });
      }
      return a;
    } catch (r) {
      return this.logger.error(`[GitHistoryProvider][provideHistoryItems] Failed to get history items with options '${JSON.stringify(e)}': ${r}`), [];
    }
  }
  async provideHistoryItemChanges(e, t) {
    t = t ?? await this.repository.getEmptyTree();
    let i = [], r = [], o = await this.repository.diffTrees(t, e);
    for (let s of o) {
      let a = s.uri.with({ query: `ref=${e}` });
      r.push({ uri: a, ...oi(s, t, e) });
      let l = Q.getStatusLetter(s.status), u = Q.getStatusText(s.status), d = Q.getStatusColor(s.status), h = new re.FileDecoration(l, u, d);
      this.historyItemDecorations.set(a.toString(), h), i.push(a);
    }
    return this._onDidChangeDecorations.fire(i), r;
  }
  async resolveHistoryItemRefsCommonAncestor(e) {
    try {
      if (e.length === 0) return;
      if (e.length === 1 && e[0] === this.currentHistoryItemRef?.id) {
        if (this.currentHistoryItemRemoteRef) return await this.repository.getMergeBase(e[0], this.currentHistoryItemRemoteRef.id);
        if (this.currentHistoryItemBaseRef) return await this.repository.getMergeBase(e[0], this.currentHistoryItemBaseRef.id);
        let t = await this.repository.log({ maxParents: 0, refNames: ["HEAD"] });
        if (t.length > 0) return t[0].hash;
      } else if (e.length > 1) return await this.repository.getMergeBase(e[0], e[1], ...e.slice(2));
    } catch (t) {
      this.logger.error(`[GitHistoryProvider][resolveHistoryItemRefsCommonAncestor] Failed to resolve common ancestor for ${e.join(",")}: ${t}`);
    }
  }
  provideFileDecoration(e) {
    return this.historyItemDecorations.get(e.toString());
  }
  _resolveHistoryItemRefs(e) {
    let t = [];
    for (let i of e.refNames) if (i !== "refs/remotes/origin/HEAD") switch (true) {
      case i.startsWith("HEAD -> refs/heads/"):
        t.push({ id: i.substring(8), name: i.substring(19), revision: e.hash, category: re.l10n.t("branches"), icon: new re.ThemeIcon("target") });
        break;
      case i.startsWith("refs/heads/"):
        t.push({ id: i, name: i.substring(11), revision: e.hash, category: re.l10n.t("branches"), icon: new re.ThemeIcon("git-branch") });
        break;
      case i.startsWith("refs/remotes/"):
        t.push({ id: i, name: i.substring(13), revision: e.hash, category: re.l10n.t("remote branches"), icon: new re.ThemeIcon("cloud") });
        break;
      case i.startsWith("tag: refs/tags/"):
        t.push({ id: i.substring(5), name: i.substring(15), revision: e.hash, category: re.l10n.t("tags"), icon: new re.ThemeIcon("tag") });
        break;
    }
    return t.sort(Ih);
  }
  async resolveHEADMergeBase() {
    try {
      return this.repository.HEAD?.type !== L.Head || !this.repository.HEAD?.name ? void 0 : await this.repository.getBranchBase(this.repository.HEAD.name);
    } catch (e) {
      this.logger.error(`[GitHistoryProvider][resolveHEADMergeBase] Failed to resolve merge base for ${this.repository.HEAD?.name}: ${e}`);
      return;
    }
  }
  toSourceControlHistoryItemRef(e) {
    switch (e.type) {
      case L.RemoteHead:
        return { id: `refs/remotes/${e.name}`, name: e.name ?? "", description: e.commit ? re.l10n.t("Remote branch at {0}", mt(e.commit, this.commitShortHashLength, false)) : void 0, revision: e.commit, icon: new re.ThemeIcon("cloud"), category: re.l10n.t("remote branches") };
      case L.Tag:
        return { id: `refs/tags/${e.name}`, name: e.name ?? "", description: e.commit ? re.l10n.t("Tag at {0}", mt(e.commit, this.commitShortHashLength, false)) : void 0, revision: e.commit, icon: new re.ThemeIcon("tag"), category: re.l10n.t("tags") };
      default:
        return { id: `refs/heads/${e.name}`, name: e.name ?? "", description: e.commit ? mt(e.commit, this.commitShortHashLength, false) : void 0, revision: e.commit, icon: new re.ThemeIcon("git-branch"), category: re.l10n.t("branches") };
    }
  }
  dispose() {
    j(this.disposables);
  }
};
b([Fe], _i.prototype, "onDidRunWriteOperation", 1);
var ae = require("vscode");
var Mr = class {
  constructor(e) {
    this._repositoryResolver = e;
  }
  getCommands(e) {
    let t = this._repositoryResolver.getRepository(e.rootUri);
    if (!t) return [];
    let i = ae.workspace.getConfiguration("git", ae.Uri.file(t.root)), r = t.isBranchProtected(), o = i.get("branchProtectionPrompt"), s = r && o === "alwaysPrompt", a = r && o === "alwaysCommitToNewBranch", l = t.operations.isRunning("Commit") || t.operations.isRunning("PostCommitCommand"), u = l ? "$(sync~spin)" : s ? "$(lock)" : a ? "$(git-branch)" : void 0, d = a ? ae.l10n.t("Commit to New Branch & Push Changes") : ae.l10n.t("Commit & Push Changes"), h = a ? ae.l10n.t("Commit to New Branch & Synchronize Changes") : ae.l10n.t("Commit & Sync Changes");
    return l && (d = a ? ae.l10n.t("Committing to New Branch & Pushing Changes...") : ae.l10n.t("Committing & Pushing Changes..."), h = a ? ae.l10n.t("Committing to New Branch & Synchronizing Changes...") : ae.l10n.t("Committing & Synchronizing Changes...")), [{ command: "git.push", title: ae.l10n.t("{0} Commit & Push", u ?? "$(arrow-up)"), tooltip: d }, { command: "git.sync", title: ae.l10n.t("{0} Commit & Sync", u ?? "$(sync)"), tooltip: h }];
  }
}, Lr = class {
  constructor(e, t, i) {
    this.globalState = e;
    this.repository = t;
    this.postCommitCommandsProviderRegistry = i;
    this._onDidChange = new ae.EventEmitter();
    this.disposables = [];
    let r = ae.Uri.file(t.root);
    this.migratePostCommitCommandStorage().then(() => {
      let o = async () => {
        ae.workspace.getConfiguration("git", r).get("rememberPostCommitCommand") || await this.globalState.update(this.getGlobalStateKey(), void 0);
      };
      this.disposables.push(ae.workspace.onDidChangeConfiguration((s) => {
        s.affectsConfiguration("git.rememberPostCommitCommand", r) && o();
      })), o(), this.disposables.push(i.onDidChangePostCommitCommandsProviders(() => this._onDidChange.fire()));
    });
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  set postCommitCommand(e) {
    e !== void 0 && this.globalState.update(this.getGlobalStateKey(), e).then(() => this._onDidChange.fire());
  }
  getPrimaryCommand() {
    let e = this.getSecondaryCommands().map((r) => r).flat(), t = e.find((r) => r.arguments?.length === 2 && r.arguments[1] === this.getPostCommitCommandStringFromStorage()), i = e.find((r) => r.arguments?.length === 2 && r.arguments[1] === this.getPostCommitCommandStringFromSetting());
    return t ?? i ?? this.getCommitCommands()[0];
  }
  getSecondaryCommands() {
    let e = [];
    for (let t of this.postCommitCommandsProviderRegistry.getPostCommitCommandsProviders()) {
      let i = t.getCommands(new Ee(this.repository));
      e.push((i ?? []).map((r) => ({ command: "git.commit", title: r.title, tooltip: r.tooltip, arguments: [this.repository.sourceControl, r.command] })));
    }
    return e.length > 0 && e.splice(0, 0, this.getCommitCommands()), e;
  }
  async executePostCommitCommand(e) {
    try {
      if (e === null) return;
      if (e === void 0) {
        let t = this.getPrimaryCommand();
        e = t.arguments?.length === 2 ? t.arguments[1] : null;
      }
      e !== null && await ae.commands.executeCommand(e.toString(), new Ee(this.repository));
    } catch (t) {
      throw t;
    } finally {
      this.isRememberPostCommitCommandEnabled() || (await this.globalState.update(this.getGlobalStateKey(), void 0), this._onDidChange.fire());
    }
  }
  getGlobalStateKey() {
    return `postCommitCommand:${this.repository.root}`;
  }
  getCommitCommands() {
    let e = ae.workspace.getConfiguration("git", ae.Uri.file(this.repository.root)), t = this.repository.isBranchProtected(), i = e.get("branchProtectionPrompt"), r = t && i === "alwaysPrompt", o = t && i === "alwaysCommitToNewBranch", s = r ? "$(lock)" : o ? "$(git-branch)" : void 0, a = this.repository.HEAD?.name, l = o ? ae.l10n.t("Commit Changes to New Branch") : a ? ae.l10n.t('Commit Changes on "{0}"', a) : ae.l10n.t("Commit Changes");
    return this.repository.operations.isRunning("Commit") && (l = o ? ae.l10n.t("Committing Changes to New Branch...") : ae.l10n.t("Committing Changes...")), [{ command: "git.commit", title: ae.l10n.t("{0} Commit", s ?? "$(check)"), tooltip: l, arguments: [this.repository.sourceControl, null] }, { command: "git.commitAmend", title: ae.l10n.t("{0} Commit (Amend)", s ?? "$(check)"), tooltip: l, arguments: [this.repository.sourceControl, null] }];
  }
  getPostCommitCommandStringFromSetting() {
    let t = ae.workspace.getConfiguration("git", ae.Uri.file(this.repository.root)).get("postCommitCommand");
    return t === "push" || t === "sync" ? `git.${t}` : void 0;
  }
  getPostCommitCommandStringFromStorage() {
    return this.globalState.get(this.getGlobalStateKey());
  }
  async migratePostCommitCommandStorage() {
    let e = this.globalState.get(this.repository.root);
    e !== void 0 && (await this.globalState.update(this.getGlobalStateKey(), e), await this.globalState.update(this.repository.root, void 0));
  }
  isRememberPostCommitCommandEnabled() {
    return ae.workspace.getConfiguration("git", ae.Uri.file(this.repository.root)).get("rememberPostCommitCommand") === true;
  }
  dispose() {
    this.disposables = j(this.disposables);
  }
};
var De = require("vscode");
var xn = class {
  constructor(e) {
    this.repository = e;
    this._onDidChange = new De.EventEmitter();
    this.disposables = [];
    this._state = { isCheckoutRunning: false, isCommitRunning: false, isSyncRunning: false }, e.onDidChangeOperations(this.onDidChangeOperations, this, this.disposables), e.onDidRunGitStatus(this._onDidChange.fire, this._onDidChange, this.disposables), e.onDidChangeBranchProtection(this._onDidChange.fire, this._onDidChange, this.disposables);
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this._onDidChange.fire();
  }
  get command() {
    let e = [...this.repository.operations.getOperations("Checkout"), ...this.repository.operations.getOperations("CheckoutTracking")], t = !!this.repository.rebaseCommit, i = e[0]?.refLabel ?? `${this.repository.headLabel}${t ? ` (${De.l10n.t("Rebasing")})` : ""}`;
    return { command: this.state.isCheckoutRunning || this.state.isCommitRunning || this.state.isSyncRunning ? "" : "git.checkout", tooltip: `${i}, ${this.getTooltip()}`, title: `${this.getIcon()} ${i}`, arguments: [this.repository.sourceControl] };
  }
  getIcon() {
    let e = this.repository.HEAD;
    return e ? this.state.isCheckoutRunning ? "$(loading~spin)" : e.type === L.Head && e.name ? this.repository.isBranchProtected() ? "$(lock)" : "$(git-branch)" : e.type === L.Tag ? "$(tag)" : "$(git-commit)" : "";
  }
  getTooltip() {
    return this.state.isCheckoutRunning ? De.l10n.t("Checking Out Branch/Tag...") : this.state.isCommitRunning ? De.l10n.t("Committing Changes...") : this.state.isSyncRunning ? De.l10n.t("Synchronizing Changes...") : De.l10n.t("Checkout Branch/Tag...");
  }
  onDidChangeOperations() {
    let e = this.repository.operations.isRunning("Commit"), t = this.repository.operations.isRunning("Checkout") || this.repository.operations.isRunning("CheckoutTracking"), i = this.repository.operations.isRunning("Sync") || this.repository.operations.isRunning("Push") || this.repository.operations.isRunning("Pull");
    this.state.isCheckoutRunning === t && this.state.isCommitRunning === e && this.state.isSyncRunning === i || (this.state = { ...this.state, isCheckoutRunning: t, isCommitRunning: e, isSyncRunning: i });
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
}, Dn = class {
  constructor(e, t) {
    this.repository = e;
    this.remoteSourcePublisherRegistry = t;
    this._onDidChange = new De.EventEmitter();
    this.disposables = [];
    this._state = { enabled: true, isCheckoutRunning: false, isCommitRunning: false, isSyncRunning: false, hasRemotes: false, HEAD: void 0, remoteSourcePublishers: t.getRemoteSourcePublishers() }, e.onDidRunGitStatus(this.onDidRunGitStatus, this, this.disposables), e.onDidChangeOperations(this.onDidChangeOperations, this, this.disposables), Je(t.onDidAddRemoteSourcePublisher, t.onDidRemoveRemoteSourcePublisher)(this.onDidChangeRemoteSourcePublishers, this, this.disposables), V(De.workspace.onDidChangeConfiguration, (r) => r.affectsConfiguration("git.enableStatusBarSync"))(this.updateEnablement, this, this.disposables), this.updateEnablement();
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this._onDidChange.fire();
  }
  updateEnablement() {
    let t = De.workspace.getConfiguration("git", De.Uri.file(this.repository.root)).get("enableStatusBarSync", true);
    this.state = { ...this.state, enabled: t };
  }
  onDidChangeOperations() {
    let e = this.repository.operations.isRunning("Commit"), t = this.repository.operations.isRunning("Checkout") || this.repository.operations.isRunning("CheckoutTracking"), i = this.repository.operations.isRunning("Sync") || this.repository.operations.isRunning("Push") || this.repository.operations.isRunning("Pull");
    this.state.isCheckoutRunning === t && this.state.isCommitRunning === e && this.state.isSyncRunning === i || (this.state = { ...this.state, isCheckoutRunning: t, isCommitRunning: e, isSyncRunning: i });
  }
  onDidRunGitStatus() {
    this.state = { ...this.state, hasRemotes: this.repository.remotes.length > 0, HEAD: this.repository.HEAD };
  }
  onDidChangeRemoteSourcePublishers() {
    this.state = { ...this.state, remoteSourcePublishers: this.remoteSourcePublisherRegistry.getRemoteSourcePublishers() };
  }
  get command() {
    if (!this.state.enabled) return;
    if (!this.state.hasRemotes) {
      if (this.state.remoteSourcePublishers.length === 0) return;
      let s = this.state.isCheckoutRunning || this.state.isCommitRunning ? "" : "git.publish", a = this.state.isCheckoutRunning ? De.l10n.t("Checking Out Changes...") : this.state.isCommitRunning ? De.l10n.t("Committing Changes...") : this.state.remoteSourcePublishers.length === 1 ? De.l10n.t("Publish to {0}", this.state.remoteSourcePublishers[0].name) : De.l10n.t("Publish to...");
      return { command: s, title: "$(cloud-upload)", tooltip: a, arguments: [this.repository.sourceControl] };
    }
    let e = this.state.HEAD, t = "$(sync)", i = "", r = "", o = "";
    return e && e.name && e.commit ? e.upstream ? ((e.ahead || e.behind) && (i += this.repository.syncLabel), r = "git.sync", o = this.repository.syncTooltip) : (t = "$(cloud-upload)", r = "git.publish", o = De.l10n.t("Publish Branch")) : (r = "", o = ""), this.state.isCheckoutRunning && (r = "", o = De.l10n.t("Checking Out Changes...")), this.state.isCommitRunning && (r = "", o = De.l10n.t("Committing Changes...")), this.state.isSyncRunning && (t = "$(sync~spin)", r = "", o = De.l10n.t("Synchronizing Changes...")), { command: r, title: [t, i].join(" ").trim(), tooltip: o, arguments: [this.repository.sourceControl] };
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
}, Gr = class {
  constructor(e, t) {
    this.disposables = [];
    this.syncStatusBar = new Dn(e, t), this.checkoutStatusBar = new xn(e), this.onDidChange = Je(this.syncStatusBar.onDidChange, this.checkoutStatusBar.onDidChange);
  }
  get commands() {
    return [this.checkoutStatusBar.command, this.syncStatusBar.command].filter((e) => !!e);
  }
  dispose() {
    this.syncStatusBar.dispose(), this.checkoutStatusBar.dispose(), this.disposables = j(this.disposables);
  }
};
var Hr = require("vscode");
function Pn(n6) {
  let e = Hr.workspace.createFileSystemWatcher(new Hr.RelativePattern(n6, "*"));
  return new class {
    constructor() {
      this.event = Je(e.onDidCreate, e.onDidChange, e.onDidDelete);
    }
    dispose() {
      e.dispose();
    }
  }();
}
var Ml = (n6) => new Promise((e) => setTimeout(e, n6)), _h = se.join(se.dirname(__dirname), "resources", "icons");
function Ue(n6, e) {
  return f.Uri.file(se.join(_h, e, `${n6}.svg`));
}
var pe = class pe2 {
  constructor(e, t, i, r, o, s, a) {
    this._commandResolver = e;
    this._resourceGroupType = t;
    this._resourceUri = i;
    this._type = r;
    this._useIcons = o;
    this._renameResourceUri = s;
    this._repositoryKind = a;
  }
  static getStatusLetter(e) {
    switch (e) {
      case m.INDEX_MODIFIED:
      case m.MODIFIED:
        return "M";
      case m.INDEX_ADDED:
      case m.INTENT_TO_ADD:
        return "A";
      case m.INDEX_DELETED:
      case m.DELETED:
        return "D";
      case m.INDEX_RENAMED:
      case m.INTENT_TO_RENAME:
        return "R";
      case m.TYPE_CHANGED:
        return "T";
      case m.UNTRACKED:
        return "U";
      case m.IGNORED:
        return "I";
      case m.DELETED_BY_THEM:
        return "D";
      case m.DELETED_BY_US:
        return "D";
      case m.INDEX_COPIED:
        return "C";
      case m.BOTH_DELETED:
      case m.ADDED_BY_US:
      case m.ADDED_BY_THEM:
      case m.BOTH_ADDED:
      case m.BOTH_MODIFIED:
        return "!";
      default:
        throw new Error("Unknown git status: " + e);
    }
  }
  static getStatusText(e) {
    switch (e) {
      case m.INDEX_MODIFIED:
        return f.l10n.t("Index Modified");
      case m.MODIFIED:
        return f.l10n.t("Modified");
      case m.INDEX_ADDED:
        return f.l10n.t("Index Added");
      case m.INDEX_DELETED:
        return f.l10n.t("Index Deleted");
      case m.DELETED:
        return f.l10n.t("Deleted");
      case m.INDEX_RENAMED:
        return f.l10n.t("Index Renamed");
      case m.INDEX_COPIED:
        return f.l10n.t("Index Copied");
      case m.UNTRACKED:
        return f.l10n.t("Untracked");
      case m.IGNORED:
        return f.l10n.t("Ignored");
      case m.INTENT_TO_ADD:
        return f.l10n.t("Intent to Add");
      case m.INTENT_TO_RENAME:
        return f.l10n.t("Intent to Rename");
      case m.TYPE_CHANGED:
        return f.l10n.t("Type Changed");
      case m.BOTH_DELETED:
        return f.l10n.t("Conflict: Both Deleted");
      case m.ADDED_BY_US:
        return f.l10n.t("Conflict: Added By Us");
      case m.DELETED_BY_THEM:
        return f.l10n.t("Conflict: Deleted By Them");
      case m.ADDED_BY_THEM:
        return f.l10n.t("Conflict: Added By Them");
      case m.DELETED_BY_US:
        return f.l10n.t("Conflict: Deleted By Us");
      case m.BOTH_ADDED:
        return f.l10n.t("Conflict: Both Added");
      case m.BOTH_MODIFIED:
        return f.l10n.t("Conflict: Both Modified");
      default:
        return "";
    }
  }
  static getStatusColor(e) {
    switch (e) {
      case m.INDEX_MODIFIED:
        return new f.ThemeColor("gitDecoration.stageModifiedResourceForeground");
      case m.MODIFIED:
      case m.TYPE_CHANGED:
        return new f.ThemeColor("gitDecoration.modifiedResourceForeground");
      case m.INDEX_DELETED:
        return new f.ThemeColor("gitDecoration.stageDeletedResourceForeground");
      case m.DELETED:
        return new f.ThemeColor("gitDecoration.deletedResourceForeground");
      case m.INDEX_ADDED:
      case m.INTENT_TO_ADD:
        return new f.ThemeColor("gitDecoration.addedResourceForeground");
      case m.INDEX_COPIED:
      case m.INDEX_RENAMED:
      case m.INTENT_TO_RENAME:
        return new f.ThemeColor("gitDecoration.renamedResourceForeground");
      case m.UNTRACKED:
        return new f.ThemeColor("gitDecoration.untrackedResourceForeground");
      case m.IGNORED:
        return new f.ThemeColor("gitDecoration.ignoredResourceForeground");
      case m.BOTH_DELETED:
      case m.ADDED_BY_US:
      case m.DELETED_BY_THEM:
      case m.ADDED_BY_THEM:
      case m.DELETED_BY_US:
      case m.BOTH_ADDED:
      case m.BOTH_MODIFIED:
        return new f.ThemeColor("gitDecoration.conflictingResourceForeground");
      default:
        throw new Error("Unknown git status: " + e);
    }
  }
  get resourceUri() {
    return this.renameResourceUri && (this._type === m.MODIFIED || this._type === m.DELETED || this._type === m.INDEX_RENAMED || this._type === m.INDEX_COPIED || this._type === m.INTENT_TO_RENAME) ? this.renameResourceUri : this._resourceUri;
  }
  get leftUri() {
    return this.resources.left;
  }
  get rightUri() {
    return this.resources.right;
  }
  get multiDiffEditorOriginalUri() {
    return this.resources.original;
  }
  get multiFileDiffEditorModifiedUri() {
    return this.resources.modified;
  }
  get command() {
    return this._commandResolver.resolveDefaultCommand(this);
  }
  get resources() {
    return this._commandResolver.getResources(this);
  }
  get resourceGroupType() {
    return this._resourceGroupType;
  }
  get type() {
    return this._type;
  }
  get original() {
    return this._resourceUri;
  }
  get renameResourceUri() {
    return this._renameResourceUri;
  }
  get contextValue() {
    return this._repositoryKind;
  }
  static {
    this.Icons = { light: { Modified: Ue("status-modified", "light"), Added: Ue("status-added", "light"), Deleted: Ue("status-deleted", "light"), Renamed: Ue("status-renamed", "light"), Copied: Ue("status-copied", "light"), Untracked: Ue("status-untracked", "light"), Ignored: Ue("status-ignored", "light"), Conflict: Ue("status-conflict", "light"), TypeChanged: Ue("status-type-changed", "light") }, dark: { Modified: Ue("status-modified", "dark"), Added: Ue("status-added", "dark"), Deleted: Ue("status-deleted", "dark"), Renamed: Ue("status-renamed", "dark"), Copied: Ue("status-copied", "dark"), Untracked: Ue("status-untracked", "dark"), Ignored: Ue("status-ignored", "dark"), Conflict: Ue("status-conflict", "dark"), TypeChanged: Ue("status-type-changed", "dark") } };
  }
  getIconPath(e) {
    switch (this.type) {
      case m.INDEX_MODIFIED:
        return pe2.Icons[e].Modified;
      case m.MODIFIED:
        return pe2.Icons[e].Modified;
      case m.INDEX_ADDED:
        return pe2.Icons[e].Added;
      case m.INDEX_DELETED:
        return pe2.Icons[e].Deleted;
      case m.DELETED:
        return pe2.Icons[e].Deleted;
      case m.INDEX_RENAMED:
        return pe2.Icons[e].Renamed;
      case m.INDEX_COPIED:
        return pe2.Icons[e].Copied;
      case m.UNTRACKED:
        return pe2.Icons[e].Untracked;
      case m.IGNORED:
        return pe2.Icons[e].Ignored;
      case m.INTENT_TO_ADD:
        return pe2.Icons[e].Added;
      case m.INTENT_TO_RENAME:
        return pe2.Icons[e].Renamed;
      case m.TYPE_CHANGED:
        return pe2.Icons[e].TypeChanged;
      case m.BOTH_DELETED:
        return pe2.Icons[e].Conflict;
      case m.ADDED_BY_US:
        return pe2.Icons[e].Conflict;
      case m.DELETED_BY_THEM:
        return pe2.Icons[e].Conflict;
      case m.ADDED_BY_THEM:
        return pe2.Icons[e].Conflict;
      case m.DELETED_BY_US:
        return pe2.Icons[e].Conflict;
      case m.BOTH_ADDED:
        return pe2.Icons[e].Conflict;
      case m.BOTH_MODIFIED:
        return pe2.Icons[e].Conflict;
      default:
        throw new Error("Unknown git status: " + this.type);
    }
  }
  get tooltip() {
    return pe2.getStatusText(this.type);
  }
  get strikeThrough() {
    switch (this.type) {
      case m.DELETED:
      case m.BOTH_DELETED:
      case m.DELETED_BY_THEM:
      case m.DELETED_BY_US:
      case m.INDEX_DELETED:
        return true;
      default:
        return false;
    }
  }
  get faded() {
    return false;
  }
  get decorations() {
    let e = this._useIcons ? { iconPath: this.getIconPath("light") } : void 0, t = this._useIcons ? { iconPath: this.getIconPath("dark") } : void 0, i = this.tooltip, r = this.strikeThrough, o = this.faded;
    return { strikeThrough: r, faded: o, tooltip: i, light: e, dark: t };
  }
  get letter() {
    return pe2.getStatusLetter(this.type);
  }
  get color() {
    return pe2.getStatusColor(this.type);
  }
  get priority() {
    switch (this.type) {
      case m.INDEX_MODIFIED:
      case m.MODIFIED:
      case m.INDEX_COPIED:
      case m.TYPE_CHANGED:
        return 2;
      case m.IGNORED:
        return 3;
      case m.BOTH_DELETED:
      case m.ADDED_BY_US:
      case m.DELETED_BY_THEM:
      case m.ADDED_BY_THEM:
      case m.DELETED_BY_US:
      case m.BOTH_ADDED:
      case m.BOTH_MODIFIED:
        return 4;
      default:
        return 1;
    }
  }
  get resourceDecoration() {
    let e = new f.FileDecoration(this.letter, this.tooltip, this.color);
    return e.propagate = this.type !== m.DELETED && this.type !== m.INDEX_DELETED, e;
  }
  async open() {
    let e = this.command;
    await f.commands.executeCommand(e.command, ...e.arguments || []);
  }
  async openFile() {
    let e = this._commandResolver.resolveFileCommand(this);
    await f.commands.executeCommand(e.command, ...e.arguments || []);
  }
  async openChange() {
    let e = this._commandResolver.resolveChangeCommand(this);
    await f.commands.executeCommand(e.command, ...e.arguments || []);
  }
  clone(e) {
    return new pe2(this._commandResolver, e ?? this._resourceGroupType, this._resourceUri, this._type, this._useIcons, this._renameResourceUri, this._repositoryKind);
  }
};
b([gt], pe.prototype, "resourceUri", 1), b([gt], pe.prototype, "command", 1), b([gt], pe.prototype, "resources", 1), b([gt], pe.prototype, "faded", 1);
var Q = pe;
function Nr(n6, e) {
  return n6.length !== e.length ? false : n6.every((t, i) => t.type === e[i].type && t.resourceUri.toString() === e[i].resourceUri.toString() && t.renameResourceUri?.toString() === e[i].renameResourceUri?.toString());
}
var kn = class {
  constructor(e) {
    this.repository = e;
    this.enabled = false;
    this.disposable = rt;
    this.disposables = [];
    V(f.workspace.onDidChangeConfiguration, (i) => i.affectsConfiguration("git", f.Uri.file(this.repository.root)))((i) => this.updateEnablement(), null, this.disposables), this.updateEnablement(), this.repository.onDidChangeOperations(() => {
      this.repository.sourceControl.inputBox.enabled = !this.repository.operations.isRunning("Commit");
    }, null, this.disposables);
  }
  updateEnablement() {
    f.workspace.getConfiguration("git", f.Uri.file(this.repository.root)).get("showProgress") ? this.enable() : this.disable();
  }
  enable() {
    if (this.enabled) return;
    let e = vt(V(this.repository.onDidChangeOperations, () => this.repository.operations.shouldShowProgress())), t = vt(V(aa(this.repository.onDidChangeOperations, 300), () => !this.repository.operations.shouldShowProgress())), i = () => {
      this.disposable = e(() => {
        let r = Qe(t).then(() => i());
        f.window.withProgress({ location: f.ProgressLocation.SourceControl }, () => r);
      });
    };
    i(), this.enabled = true;
  }
  disable() {
    this.enabled && (this.disposable.dispose(), this.disposable = rt, this.enabled = false);
  }
  dispose() {
    this.disable(), j(this.disposables);
  }
}, Tn = class {
  constructor(e, t, i) {
    this.onWorkspaceWorkingTreeFileChange = e;
    this.onDotGitFileChange = t;
    this.logger = i;
    this.eventDisposable = rt;
    this.logLevelDisposable = rt;
    this.logLevelDisposable = i.onDidChangeLogLevel(this.onDidChangeLogLevel, this), this.onDidChangeLogLevel(i.logLevel);
  }
  onDidChangeLogLevel(e) {
    this.eventDisposable.dispose(), !(e > f.LogLevel.Debug) && (this.eventDisposable = Ot([this.onWorkspaceWorkingTreeFileChange((t) => this.logger.debug(`[FileEventLogger][onWorkspaceWorkingTreeFileChange] ${t.fsPath}`)), this.onDotGitFileChange((t) => this.logger.debug(`[FileEventLogger][onDotGitFileChange] ${t.fsPath}`))]));
  }
  dispose() {
    this.eventDisposable.dispose(), this.logLevelDisposable.dispose();
  }
}, An = class {
  constructor(e, t) {
    this.repository = e;
    this.logger = t;
    this.emitter = new f.EventEmitter();
    this.transientDisposables = [];
    this.disposables = [];
    let i = Pn(e.dotGit.path);
    this.disposables.push(i);
    let r = V(i.event, (o) => o.scheme === "file" && !/\/\.git(\/index\.lock|\/worktrees\/[^/]+\/index\.lock)?$|\/\.watchman-cookie-/.test(o.path));
    this.event = Je(r, this.emitter.event), e.onDidRunGitStatus(this.updateTransientWatchers, this, this.disposables), this.updateTransientWatchers();
  }
  updateTransientWatchers() {
    if (this.transientDisposables = j(this.transientDisposables), !this.repository.HEAD || !this.repository.HEAD.upstream) return;
    this.transientDisposables = j(this.transientDisposables);
    let { name: e, remote: t } = this.repository.HEAD.upstream, i = se.join(this.repository.dotGit.commonPath ?? this.repository.dotGit.path, "refs", "remotes", t, e);
    try {
      let r = Pn(i);
      this.transientDisposables.push(r), r.event(this.emitter.fire, this.emitter, this.transientDisposables);
    } catch {
      this.logger.warn(`[DotGitWatcher][updateTransientWatchers] Failed to watch ref '${i}', is most likely packed.`);
    }
  }
  dispose() {
    this.emitter.dispose(), this.transientDisposables = j(this.transientDisposables), this.disposables = j(this.disposables);
  }
}, Bh = {}, Oh = { override: false }, In = class {
  constructor(e) {
    this.repository = e;
  }
  resolveDefaultCommand(e) {
    return f.workspace.getConfiguration("git", f.Uri.file(this.repository.root)).get("openDiffOnClick", true) ? this.resolveChangeCommand(e) : this.resolveFileCommand(e);
  }
  resolveFileCommand(e) {
    return { command: "vscode.open", title: f.l10n.t("Open"), arguments: [e.resourceUri] };
  }
  resolveChangeCommand(e) {
    let t = this.getTitle(e);
    if (e.leftUri) return { command: "vscode.diff", title: f.l10n.t("Open"), arguments: [e.leftUri, e.rightUri, t] };
    {
      let i = e.type === m.BOTH_MODIFIED;
      return e.rightUri && f.workspace.getConfiguration("git").get("mergeEditor", false) && (i || e.type === m.BOTH_ADDED) ? { command: this.repository.isWorktreeMigrating ? "git.openWorktreeMergeEditor" : "git.openMergeEditor", title: f.l10n.t("Open Merge"), arguments: [e.rightUri] } : { command: "vscode.open", title: f.l10n.t("Open"), arguments: [e.rightUri, i ? Oh : Bh, t] };
    }
  }
  getResources(e) {
    for (let r of this.repository.submodules) if (se.join(this.repository.root, r.path) === e.resourceUri.fsPath) {
      let s = Z(e.resourceUri, e.resourceGroupType === 1 ? "index" : "wt", { submoduleOf: this.repository.root });
      return { left: void 0, right: s, original: void 0, modified: s };
    }
    let t = this.getLeftResource(e), i = this.getRightResource(e);
    return { left: t.original ?? t.modified, right: i.original ?? i.modified, original: t.original ?? i.original, modified: t.modified ?? i.modified };
  }
  getLeftResource(e) {
    switch (e.type) {
      case m.INDEX_MODIFIED:
      case m.INDEX_RENAMED:
      case m.INTENT_TO_RENAME:
      case m.TYPE_CHANGED:
        return { original: Z(e.original, "HEAD") };
      case m.MODIFIED:
        return { original: Z(e.resourceUri, "~") };
      case m.DELETED_BY_US:
      case m.DELETED_BY_THEM:
        return { original: Z(e.resourceUri, "~1") };
    }
    return {};
  }
  getRightResource(e) {
    switch (e.type) {
      case m.INDEX_MODIFIED:
      case m.INDEX_ADDED:
      case m.INDEX_COPIED:
      case m.INDEX_RENAMED:
        return { modified: Z(e.resourceUri, "") };
      case m.INDEX_DELETED:
      case m.DELETED:
        return { original: Z(e.resourceUri, "HEAD") };
      case m.DELETED_BY_US:
        return { original: Z(e.resourceUri, "~3") };
      case m.DELETED_BY_THEM:
        return { original: Z(e.resourceUri, "~2") };
      case m.MODIFIED:
      case m.UNTRACKED:
      case m.IGNORED:
      case m.INTENT_TO_ADD:
      case m.INTENT_TO_RENAME:
      case m.TYPE_CHANGED: {
        let t = e.resourceUri.toString(), [i] = this.repository.indexGroup.resourceStates.filter((r) => r.resourceUri.toString() === t);
        return i && i.renameResourceUri ? { modified: i.renameResourceUri } : { modified: e.resourceUri };
      }
      case m.BOTH_ADDED:
      case m.BOTH_MODIFIED:
        return { modified: e.resourceUri };
    }
    return {};
  }
  getTitle(e) {
    let t = se.basename(e.resourceUri.fsPath);
    switch (e.type) {
      case m.INDEX_MODIFIED:
      case m.INDEX_RENAMED:
      case m.INDEX_ADDED:
        return f.l10n.t("{0} (Index)", t);
      case m.MODIFIED:
      case m.BOTH_ADDED:
      case m.BOTH_MODIFIED:
        return f.l10n.t("{0} (Working Tree)", t);
      case m.INDEX_DELETED:
      case m.DELETED:
        return f.l10n.t("{0} (Deleted)", t);
      case m.DELETED_BY_US:
        return f.l10n.t("{0} (Theirs)", t);
      case m.DELETED_BY_THEM:
        return f.l10n.t("{0} (Ours)", t);
      case m.UNTRACKED:
        return f.l10n.t("{0} (Untracked)", t);
      case m.INTENT_TO_ADD:
      case m.INTENT_TO_RENAME:
        return f.l10n.t("{0} (Intent to add)", t);
      case m.TYPE_CHANGED:
        return f.l10n.t("{0} (Type changed)", t);
      default:
        return "";
    }
  }
}, ke = class ke2 {
  constructor(e, t, i, r, o, s, a, l, u, d) {
    this.repository = e;
    this.repositoryResolver = t;
    this.pushErrorHandlerRegistry = i;
    this.branchProtectionProviderRegistry = s;
    this.logger = u;
    this.telemetryReporter = d;
    this._onDidChangeRepository = new f.EventEmitter();
    this.onDidChangeRepository = this._onDidChangeRepository.event;
    this._onDidChangeState = new f.EventEmitter();
    this.onDidChangeState = this._onDidChangeState.event;
    this._onDidChangeStatus = new f.EventEmitter();
    this.onDidRunGitStatus = this._onDidChangeStatus.event;
    this._onDidActuallyChangeStatus = new f.EventEmitter();
    this.onDidActuallyChangeStatus = this._onDidActuallyChangeStatus.event;
    this._onDidChangeOriginalResource = new f.EventEmitter();
    this.onDidChangeOriginalResource = this._onDidChangeOriginalResource.event;
    this._onRunOperation = new f.EventEmitter();
    this.onRunOperation = this._onRunOperation.event;
    this._onDidRunOperation = new f.EventEmitter();
    this.onDidRunOperation = this._onDidRunOperation.event;
    this._onDidChangeBranchProtection = new f.EventEmitter();
    this.onDidChangeBranchProtection = this._onDidChangeBranchProtection.event;
    this._refs = [];
    this._remotes = [];
    this._submodules = [];
    this._worktrees = [];
    this._rebaseCommit = void 0;
    this._mergeInProgress = false;
    this._cherryPickInProgress = false;
    this._isWorktreeMigrating = false;
    this._state = 0;
    this.isRepositoryHuge = false;
    this.didWarnAboutLimit = false;
    this.unpublishedCommits = void 0;
    this.unsupportedCheckIgnorePaths = /* @__PURE__ */ new Map();
    this.statusIgnorePathVerdicts = /* @__PURE__ */ new Map();
    this.ignoredStatusDirs = /* @__PURE__ */ new Set();
    this.pendingStatusIgnorePaths = /* @__PURE__ */ new Set();
    this.statusIgnoreCacheGeneration = 0;
    this.branchProtection = /* @__PURE__ */ new Map();
    this.resourceCommandResolver = new In(this);
    this.disposables = [];
    this._operations = new Pr(this.logger);
    let h = f.workspace.createFileSystemWatcher(new f.RelativePattern(f.Uri.file(e.root), "**"));
    this.disposables.push(h);
    let p = Je(h.onDidChange, h.onDidCreate, h.onDidDelete), g = V(p, (w) => !/\.git($|\\|\/)/.test(Mt(e.root, w.fsPath))), y;
    try {
      let w = new An(this, u);
      y = w.event, this.disposables.push(w);
    } catch (w) {
      u.error(`Failed to watch path:'${this.dotGit.path}' or commonPath:'${this.dotGit.commonPath}', reverting to legacy API file watched. Some events might be lost.
${w.stack || w}`), y = V(p, (Ae) => /\.git($|\\|\/)/.test(Ae.path));
    }
    Je(g, y)(this.onFileChange, this, this.disposables), y(this._onDidChangeRepository.fire, this._onDidChangeRepository, this.disposables);
    let S = se.join(e.dotGit.path, "HEAD");
    V(y, (w) => z(w.fsPath, S))(() => ci.scm.gitHeadChanged(e.root), this, this.disposables), this.disposables.push(new Tn(g, y, u));
    let G = e.kind === "submodule" ? e.dotGit.superProjectPath : e.kind === "worktree" && e.dotGit.commonPath ? se.dirname(e.dotGit.commonPath) : void 0, I = this.repositoryResolver.getRepository(G)?.sourceControl, D = f.Uri.file(e.root);
    this._sourceControl = f.scm.createSourceControl("git", "Git", D), this._sourceControl.quickDiffProvider = this, this._historyProvider = new _i(a, this, u), this._sourceControl.historyProvider = this._historyProvider, this.disposables.push(this._historyProvider), this._sourceControl.acceptInputCommand = { command: "git.commit", title: f.l10n.t("Commit"), arguments: [this._sourceControl] }, this._sourceControl.inputBox.validateInput = this.validateInput.bind(this), this.repository.getRemotes().then((w) => {
      this._sourceControl.remotes = w;
    }), this.disposables.push(this._sourceControl), this.updateInputBoxPlaceholder(), this.disposables.push(this.onDidRunGitStatus(() => this.updateInputBoxPlaceholder())), this._mergeGroup = this._sourceControl.createResourceGroup("merge", f.l10n.t("Merge Changes")), this._indexGroup = this._sourceControl.createResourceGroup("index", f.l10n.t("Staged Changes"), { multiDiffEditorEnableViewChanges: true }), this._workingTreeGroup = this._sourceControl.createResourceGroup("workingTree", f.l10n.t("Changes"), { multiDiffEditorEnableViewChanges: true }), this._untrackedGroup = this._sourceControl.createResourceGroup("untracked", f.l10n.t("Untracked Changes"), { multiDiffEditorEnableViewChanges: true });
    let M = () => {
      let w = f.workspace.getConfiguration("git", D);
      this.indexGroup.hideWhenEmpty = !w.get("alwaysShowStagedChangesResourceGroup");
    };
    V(f.workspace.onDidChangeConfiguration, (w) => w.affectsConfiguration("git.alwaysShowStagedChangesResourceGroup", D))(M, this, this.disposables), M(), f.workspace.onDidChangeConfiguration((w) => {
      w.affectsConfiguration("git.mergeEditor") && (this.mergeGroup.resourceStates = this.mergeGroup.resourceStates.map((Ae) => Ae.clone()));
    }, void 0, this.disposables), V(f.workspace.onDidChangeConfiguration, (w) => w.affectsConfiguration("git.branchSortOrder", D) || w.affectsConfiguration("git.untrackedChanges", D) || w.affectsConfiguration("git.ignoreSubmodules", D) || w.affectsConfiguration("git.openDiffOnClick", D) || w.affectsConfiguration("git.showActionButton", D) || w.affectsConfiguration("git.similarityThreshold", D))(() => this.updateModelState(), this, this.disposables);
    let W = () => {
      let w = f.workspace.getConfiguration("git", D);
      this._sourceControl.inputBox.visible = w.get("showCommitInput", true);
    };
    if (V(f.workspace.onDidChangeConfiguration, (w) => w.affectsConfiguration("git.showCommitInput", D))(W, this, this.disposables), W(), this.mergeGroup.hideWhenEmpty = true, this.untrackedGroup.hideWhenEmpty = true, this.disposables.push(this.mergeGroup), this.disposables.push(this.indexGroup), this.disposables.push(this.workingTreeGroup), this.disposables.push(this.untrackedGroup), f.workspace.isTrusted) this.disposables.push(new Ai(this, l));
    else {
      let w = f.workspace.onDidGrantWorkspaceTrust(() => {
        w.dispose(), this.disposables.push(new Ai(this, l));
      });
      this.disposables.push(w);
    }
    V(this.onDidRunOperation, (w) => w.operation.kind === "Push" && !w.error)(() => {
      f.workspace.getConfiguration("git").get("showPushSuccessNotification") && f.window.showInformationMessage(f.l10n.t("Successfully pushed."));
    }, null, this.disposables);
    let q = V(this.branchProtectionProviderRegistry.onDidChangeBranchProtectionProviders, (w) => z(w.fsPath, D.fsPath));
    this.disposables.push(q((w) => this.updateBranchProtectionMatchers(w)));
    let E = new Tr(D);
    this.disposables.push(E), this.disposables.push(this.branchProtectionProviderRegistry.registerBranchProtectionProvider(D, E));
    let oe = new Gr(this, r);
    this.disposables.push(oe), oe.onDidChange(() => this._sourceControl.statusBarCommands = oe.commands, null, this.disposables), this._sourceControl.statusBarCommands = oe.commands, this.commitCommandCenter = new Lr(l, this, o), this.disposables.push(this.commitCommandCenter);
    let ne = new Sr(this, this.commitCommandCenter, this.logger);
    this.disposables.push(ne), ne.onDidChange(() => this._sourceControl.actionButton = ne.button, this, this.disposables), this._sourceControl.actionButton = ne.button;
    let et = new kn(this);
    this.disposables.push(et), V(f.workspace.onDidChangeConfiguration, (w) => w.affectsConfiguration("git.countBadge", D))(this.setCountBadge, this, this.disposables), this.setCountBadge();
  }
  get onDidChangeOperations() {
    return Je(this.onRunOperation, this.onDidRunOperation);
  }
  get sourceControl() {
    return this._sourceControl;
  }
  get inputBox() {
    return this._sourceControl.inputBox;
  }
  get mergeGroup() {
    return this._mergeGroup;
  }
  get indexGroup() {
    return this._indexGroup;
  }
  get workingTreeGroup() {
    return this._workingTreeGroup;
  }
  get untrackedGroup() {
    return this._untrackedGroup;
  }
  get HEAD() {
    return this._HEAD;
  }
  get refs() {
    return this._refs;
  }
  get headShortName() {
    if (!this.HEAD) return;
    let e = this.HEAD;
    return e.name ? e.name : (e.commit || "").substr(0, 8);
  }
  get remotes() {
    return this._remotes;
  }
  get submodules() {
    return this._submodules;
  }
  get worktrees() {
    return this._worktrees;
  }
  set rebaseCommit(e) {
    this._rebaseCommit && !e ? this.inputBox.value = "" : e && (!this._rebaseCommit || this._rebaseCommit.hash !== e.hash) && (this.inputBox.value = e.message);
    let t = !!this._rebaseCommit != !!e;
    this._rebaseCommit = e, t && f.commands.executeCommand("setContext", "gitRebaseInProgress", !!this._rebaseCommit);
  }
  get rebaseCommit() {
    return this._rebaseCommit;
  }
  set mergeInProgress(e) {
    this._mergeInProgress !== e && (this._mergeInProgress = e, f.commands.executeCommand("setContext", "gitMergeInProgress", e));
  }
  get mergeInProgress() {
    return this._mergeInProgress;
  }
  set cherryPickInProgress(e) {
    this._cherryPickInProgress !== e && (this._cherryPickInProgress = e, f.commands.executeCommand("setContext", "gitCherryPickInProgress", e));
  }
  get cherryPickInProgress() {
    return this._cherryPickInProgress;
  }
  get isWorktreeMigrating() {
    return this._isWorktreeMigrating;
  }
  set isWorktreeMigrating(e) {
    this._isWorktreeMigrating = e;
  }
  get operations() {
    return this._operations;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this._onDidChangeState.fire(e), this._HEAD = void 0, this._remotes = [], this.mergeGroup.resourceStates = [], this.indexGroup.resourceStates = [], this.workingTreeGroup.resourceStates = [], this.untrackedGroup.resourceStates = [], this._sourceControl.count = 0;
  }
  get root() {
    return this.repository.root;
  }
  get rootRealPath() {
    return this.repository.rootRealPath;
  }
  get dotGit() {
    return this.repository.dotGit;
  }
  get kind() {
    return this.repository.kind;
  }
  get historyProvider() {
    return this._historyProvider;
  }
  static {
    this.MaxPendingStatusIgnorePaths = 5e3;
  }
  static {
    this.MaxStatusIgnorePathVerdicts = 2e4;
  }
  static {
    this.MaxIgnoredStatusDirs = 256;
  }
  validateInput(e, t) {
    if (this.isRepositoryHuge) return { message: f.l10n.t("Too many changes were detected. Only the first {0} changes will be shown below.", this.isRepositoryHuge.limit), type: f.SourceControlInputBoxValidationType.Warning };
    if (this.rebaseCommit && this.rebaseCommit.message !== e) return { message: f.l10n.t("It's not possible to change the commit message in the middle of a rebase. Please complete the rebase operation and use interactive rebase instead."), type: f.SourceControlInputBoxValidationType.Warning };
  }
  get label() {
    return f.l10n.t("Git local changes (working tree)");
  }
  provideOriginalResource(e) {
    if (e.scheme === "file") {
      if (this.repositoryResolver.getRepository(e) !== this) {
        this.logger.trace(`[Repository][provideOriginalResource] Resource is not part of the repository: ${e.toString()}`);
        return;
      }
      if (this.mergeGroup.resourceStates.some((t) => z(t.resourceUri.fsPath, e.fsPath))) {
        this.logger.trace(`[Repository][provideOriginalResource] Resource is part of a merge group: ${e.toString()}`);
        return;
      }
      if (this.untrackedGroup.resourceStates.some((t) => z(t.resourceUri.path, e.path)) || this.workingTreeGroup.resourceStates.some((t) => z(t.resourceUri.path, e.path) && t.type === m.UNTRACKED)) {
        this.logger.trace(`[Repository][provideOriginalResource] Resource is untracked: ${e.toString()}`);
        return;
      }
      if (!ci.cursor.isGlass) {
        let t = f.window.tabGroups.activeTabGroup.activeTab?.input;
        if (t instanceof f.TabInputTextDiff && z(t.modified.fsPath, e.fsPath)) {
          this.logger.trace(`[Repository][provideOriginalResource] Resource is on the right-hand side of a diff editor: ${e.toString()}`);
          return;
        }
        if (t instanceof f.TabInputTextMultiDiff && t.textDiffs.some((i) => z(i.modified.fsPath, e.fsPath))) {
          this.logger.trace(`[Repository][provideOriginalResource] Resource is on the right-hand side of a multi-file diff editor: ${e.toString()}`);
          return;
        }
      }
      return Z(e, "", { replaceFileExtension: true });
    }
  }
  async getInputTemplate() {
    let e = (await Promise.all([this.repository.getMergeMessage(), this.repository.getSquashMessage()])).find((t) => !!t);
    return e || await this.repository.getCommitTemplate();
  }
  getConfigs() {
    return this.run(A.Config(true), () => this.repository.getConfigs("local"));
  }
  getConfig(e) {
    return this.run(A.Config(true), () => this.repository.config("get", "local", e));
  }
  getGlobalConfig(e) {
    return this.run(A.Config(true), () => this.repository.config("get", "global", e));
  }
  setConfig(e, t) {
    return this.run(A.Config(false), () => this.repository.config("add", "local", e, t));
  }
  unsetConfig(e) {
    return this.run(A.Config(false), () => this.repository.config("unset", "local", e));
  }
  log(e) {
    let t = !e || e.silent !== true;
    return this.run(A.Log(t), () => this.repository.log(e));
  }
  logFile(e, t) {
    return this.run(A.LogFile, () => this.repository.logFile(e, t));
  }
  async status() {
    await this.run(A.Status);
  }
  async refresh() {
    await this.run(A.Refresh);
  }
  diff(e) {
    return this.run(A.Diff, () => this.repository.diff(e));
  }
  diffWithHEAD(e) {
    return this.run(A.Diff, () => this.repository.diffWithHEAD(e));
  }
  diffWith(e, t) {
    return this.run(A.Diff, () => this.repository.diffWith(e, t));
  }
  async fullDiff(e) {
    return { changes: [], fullDiffText: await (async () => e === void 0 ? await this.diffWithHEAD(this.repository.root) : await this.diffWith(e, this.repository.root))() };
  }
  diffIndexWithHEAD(e) {
    return this.run(A.Diff, () => this.repository.diffIndexWithHEAD(e));
  }
  diffIndexWith(e, t) {
    return this.run(A.Diff, () => this.repository.diffIndexWith(e, t));
  }
  diffBlobs(e, t) {
    return this.run(A.Diff, () => this.repository.diffBlobs(e, t));
  }
  diffBetween(e, t, i) {
    return this.run(A.Diff, () => this.repository.diffBetween(e, t, i));
  }
  getCommitFilesStats(e) {
    return this.run(A.GetCommitFilesStats, () => this.repository.getCommitFilesStats(e));
  }
  batchIsIgnored(e) {
    return this.run(A.BatchIsIgnored, () => this.repository.batchIsIgnored(e));
  }
  getInitialCommits() {
    return this.run(A.GetInitialCommits, () => this.repository.getInitialCommits());
  }
  diffBetweenShortStat(e, t) {
    return this.run(A.Diff, () => this.repository.diffBetweenShortStat(e, t));
  }
  diffTrees(e, t) {
    let r = f.workspace.getConfiguration("git", f.Uri.file(this.root)).get("similarityThreshold", 50);
    return this.run(A.Diff, () => this.repository.diffTrees(e, t, { similarityThreshold: r }));
  }
  getMergeBase(e, t, ...i) {
    return this.run(A.MergeBase, () => this.repository.getMergeBase(e, t, ...i));
  }
  async hashObject(e) {
    return this.run(A.HashObject, () => this.repository.hashObject(e));
  }
  async add(e, t) {
    await this.run(A.Add(!this.optimisticUpdateEnabled()), async () => {
      await this.repository.add(e.map((i) => i.fsPath), t), this.closeDiffEditors([], [...e.map((i) => i.fsPath)]), f.commands.executeCommand("_chat.editSessions.accept", e);
    }, () => {
      let i = e.map((d) => d.fsPath), r = this.indexGroup.resourceStates.map((d) => d.resourceUri.fsPath), o = [];
      for (let d of [...this.mergeGroup.resourceStates, ...this.untrackedGroup.resourceStates, ...this.workingTreeGroup.resourceStates]) i.includes(d.resourceUri.fsPath) && !r.includes(d.resourceUri.fsPath) && o.push(d.clone(1));
      let s = [...this.indexGroup.resourceStates, ...o], a = this.mergeGroup.resourceStates.filter((d) => !i.includes(d.resourceUri.fsPath)), l = this.workingTreeGroup.resourceStates.filter((d) => !i.includes(d.resourceUri.fsPath)), u = this.untrackedGroup.resourceStates.filter((d) => !i.includes(d.resourceUri.fsPath));
      return { indexGroup: s, mergeGroup: a, workingTreeGroup: l, untrackedGroup: u };
    });
  }
  async rm(e) {
    await this.run(A.Remove, () => this.repository.rm(e.map((t) => t.fsPath)));
  }
  async stage(e, t, i) {
    await this.run(A.Stage, async () => {
      let r = await f.workspace.encode(t, { encoding: i });
      await this.repository.stage(e.fsPath, r), this._onDidChangeOriginalResource.fire(e), this.closeDiffEditors([], [...e.fsPath]);
    });
  }
  async revert(e) {
    await this.run(A.RevertFiles(!this.optimisticUpdateEnabled()), async () => {
      await this.repository.revert("HEAD", e.map((t) => t.fsPath)), this.closeDiffEditors([...e.length !== 0 ? e.map((t) => t.fsPath) : this.indexGroup.resourceStates.map((t) => t.resourceUri.fsPath)], []);
    }, () => {
      let i = f.workspace.getConfiguration("git", f.Uri.file(this.repository.root)).get("untrackedChanges"), r = i === "mixed" ? 2 : 3, o = e.length === 0 ? this.indexGroup.resourceStates.map((h) => h.resourceUri.fsPath) : e.map((h) => h.fsPath), s = [], a = [];
      for (let h of this.indexGroup.resourceStates) o.includes(h.resourceUri.fsPath) && (h.type === m.INDEX_ADDED ? a.push(h.clone(r)) : s.push(h.clone(2)));
      let l = this.indexGroup.resourceStates.filter((h) => !o.includes(h.resourceUri.fsPath)), u = i === "mixed" ? [...this.workingTreeGroup.resourceStates, ...s, ...a] : [...this.workingTreeGroup.resourceStates, ...s], d = i === "separate" ? [...this.untrackedGroup.resourceStates, ...a] : void 0;
      return { indexGroup: l, workingTreeGroup: u, untrackedGroup: d };
    });
  }
  async commit(e, t = /* @__PURE__ */ Object.create(null)) {
    let i = [...this.indexGroup.resourceStates.map((o) => o.resourceUri.fsPath)], r = t.all && t.all !== "tracked" ? [...this.workingTreeGroup.resourceStates.map((o) => o.resourceUri.fsPath)] : [];
    this.rebaseCommit ? await this.run(A.RebaseContinue, async () => {
      if (t.all) {
        let o = t.all === "tracked" ? { update: true } : {};
        await this.repository.add([], o);
      }
      await this.repository.rebaseContinue(), await this.commitOperationCleanup(e, i, r);
    }, () => this.commitOperationGetOptimisticResourceGroups(t)) : (this.commitCommandCenter.postCommitCommand = t.postCommitCommand, await this.run(A.Commit, async () => {
      if (t.all) {
        let o = t.all === "tracked" ? { update: true } : {};
        await this.repository.add([], o);
      }
      if (delete t.all, t.requireUserConfig === void 0 || t.requireUserConfig === null) {
        let o = f.workspace.getConfiguration("git", f.Uri.file(this.root));
        t.requireUserConfig = o.get("requireGitUserConfig");
      }
      await this.repository.commit(e, t), await this.commitOperationCleanup(e, i, r);
    }, () => this.commitOperationGetOptimisticResourceGroups(t)), await this.run(A.PostCommitCommand, async () => {
      await this.commitCommandCenter.executePostCommitCommand(t.postCommitCommand);
    }));
  }
  async commitOperationCleanup(e, t, i) {
    e && (this.inputBox.value = await this.getInputTemplate()), this.closeDiffEditors(t, i);
    let r = t.length !== 0 ? t.map((o) => f.Uri.file(o)) : i.map((o) => f.Uri.file(o));
    f.commands.executeCommand("_chat.editSessions.accept", r);
  }
  commitOperationGetOptimisticResourceGroups(e) {
    let t, i;
    return e.all === "tracked" ? i = this.workingTreeGroup.resourceStates.filter((r) => r.type === m.UNTRACKED) : e.all && (t = i = []), { indexGroup: [], mergeGroup: [], untrackedGroup: t, workingTreeGroup: i };
  }
  async clean(e) {
    let i = f.workspace.getConfiguration("git").get("discardUntrackedChangesToTrash", true) && !hr && !mr;
    await this.run(A.Clean(!this.optimisticUpdateEnabled()), async () => {
      let r = [], o = [], s = [], a = [...this.workingTreeGroup.resourceStates, ...this.untrackedGroup.resourceStates];
      if (e.forEach((l) => {
        let u = l.fsPath;
        for (let p of this.submodules) if (se.join(this.root, p.path) === u) {
          s.push(u);
          return;
        }
        let d = l.toString(), h = ca(a, (p) => p.resourceUri.toString() === d);
        if (h) switch (h.type) {
          case m.UNTRACKED:
          case m.IGNORED:
            r.push(u);
            break;
          default:
            o.push(u);
            break;
        }
      }), r.length > 0) if (i) {
        let l = new St(5);
        await Promise.all(r.map((u) => l.queue(async () => await f.workspace.fs.delete(f.Uri.file(u), { useTrash: true }))));
      } else await this.repository.clean(r);
      if (o.length > 0) try {
        await this.repository.checkout("", o);
      } catch (l) {
        if (l.gitErrorCode !== T.BranchNotYetBorn) throw l;
      }
      s.length > 0 && await this.repository.updateSubmodules(s), this.closeDiffEditors([], [...r, ...o]);
    }, () => {
      let r = e.map((a) => a.fsPath), o = this.workingTreeGroup.resourceStates.filter((a) => !r.includes(a.resourceUri.fsPath)), s = this.untrackedGroup.resourceStates.filter((a) => !r.includes(a.resourceUri.fsPath));
      return { workingTreeGroup: o, untrackedGroup: s };
    });
  }
  closeDiffEditors(e, t, i = false) {
    if (!f.workspace.getConfiguration("git", f.Uri.file(this.root)).get("closeDiffOnOperation", false) && !i) return;
    function o(a) {
      return !!(a.modified.scheme === "git" && (e === void 0 || e.some((l) => z(l, a.modified.fsPath))) || a.modified.scheme === "file" && a.original.scheme === "git" && (t === void 0 || t.some((l) => z(l, a.modified.fsPath))));
    }
    let s = f.window.tabGroups.all.flatMap((a) => a.tabs).filter(({ input: a }) => a instanceof f.TabInputTextDiff || a instanceof f.TabInputNotebookDiff ? o(a) : a instanceof f.TabInputTextMultiDiff ? a.textDiffs.every(o) : false);
    f.window.tabGroups.close(s, true);
  }
  async branch(e, t, i) {
    await this.run(A.Branch, () => this.repository.branch(e, t, i));
  }
  async deleteBranch(e, t) {
    return this.run(A.DeleteBranch, async () => {
      await this.repository.deleteBranch(e, t), await this.repository.config("unset", "local", `branch.${e}.vscode-merge-base`);
    });
  }
  async renameBranch(e) {
    await this.run(A.RenameBranch, () => this.repository.renameBranch(e));
  }
  async fastForwardBranch(e) {
    let t = await this.getBranch(e);
    if (!(!t.upstream?.remote || !t.upstream?.name || !t.name)) try {
      let i = { remote: t.upstream.remote, ref: `${t.upstream.name}:${t.name}` };
      await this.run(A.Fetch(true), async () => this.repository.fetch(i));
    } catch (i) {
      if (i.gitErrorCode === T.BranchFastForwardRejected) return;
      throw i;
    }
  }
  async cherryPick(e) {
    await this.run(A.CherryPick, () => this.repository.cherryPick(e));
  }
  async cherryPickAbort() {
    await this.run(A.CherryPick, () => this.repository.cherryPickAbort());
  }
  async move(e, t) {
    await this.run(A.Move, () => this.repository.move(e, t));
  }
  async getBranch(e) {
    return await this.run(A.GetBranch, () => this.repository.getBranch(e));
  }
  async getBranches(e = {}, t) {
    return await this.run(A.GetBranches, async () => (await this.getRefs(e, t)).filter((r) => r.type === L.Head || r.type === L.RemoteHead && e.remote));
  }
  async getBranchBase(e) {
    let i = `branch.${(await this.getBranch(e)).name}.vscode-merge-base`;
    try {
      let a = await this.getConfig(i), l = a !== "" ? await this.getBranch(a) : void 0;
      if (l && l.remote) return l;
    } catch {
    }
    let r = await this.getBranchBaseFromReflog(e), o;
    if (r?.type === L.RemoteHead ? o = r : r?.type === L.Head && (o = await this.getUpstreamBranch(r)), o) return await this.setConfig(i, `${o.remote}/${o.name}`), o;
    let s = await this.getDefaultBranch();
    if (s) return await this.setConfig(i, `${s.remote}/${s.name}`), s;
  }
  async getBranchBaseFromReflog(e) {
    try {
      let t = await this.repository.reflog(e, "branch: Created from *.");
      if (t.length !== 1) return;
      let i = t[0].match(/branch: Created from (?<name>.*)$/);
      if (i && i.length === 2 && i[1] !== "HEAD") return await this.getBranch(i[1]);
      let r = await this.repository.reflog("HEAD", `checkout: moving from .* to ${e.replace("refs/heads/", "")}`);
      if (r.length === 0) return;
      let o = r[r.length - 1].match(/checkout: moving from ([^\s]+)\s/);
      if (o && o.length === 2) return await this.getBranch(o[1]);
    } catch {
    }
  }
  async getDefaultBranch() {
    let e = this.getDefaultRemote();
    if (e) try {
      return await this.repository.getDefaultBranch(e.name);
    } catch (t) {
      this.logger.warn(`[Repository][getDefaultBranch] Failed to get default branch details: ${t.message}.`);
      return;
    }
  }
  async getUpstreamBranch(e) {
    if (e.upstream) try {
      return await this.getBranch(`refs/remotes/${e.upstream.remote}/${e.upstream.name}`);
    } catch (t) {
      this.logger.warn(`[Repository][getUpstreamBranch] Failed to get branch details for 'refs/remotes/${e.upstream.remote}/${e.upstream.name}': ${t.message}.`);
      return;
    }
  }
  async getRefs(e = {}, t) {
    let r = f.workspace.getConfiguration("git").get("branchSortOrder");
    return r !== "alphabetically" && r !== "committerdate" && (r = "alphabetically"), e = { ...e, sort: e?.sort ?? r }, await this.run(A.GetRefs, () => this.repository.getRefs(e, t));
  }
  async getWorktrees() {
    return await this.run(A.GetWorktrees, () => this.repository.getWorktrees());
  }
  async getRemoteRefs(e, t) {
    return await this.run(A.GetRemoteRefs, () => this.repository.getRemoteRefs(e, t));
  }
  async setBranchUpstream(e, t) {
    await this.run(A.SetBranchUpstream, () => this.repository.setBranchUpstream(e, t));
  }
  async getRemotes() {
    return await this.repository.getRemotes();
  }
  async merge(e) {
    await this.run(A.Merge, () => this.repository.merge(e));
  }
  async mergeAbort() {
    await this.run(A.MergeAbort, async () => await this.repository.mergeAbort());
  }
  async rebase(e) {
    await this.run(A.Rebase, () => this.repository.rebase(e));
  }
  async tag(e) {
    await this.run(A.Tag, () => this.repository.tag(e));
  }
  async deleteTag(e) {
    await this.run(A.DeleteTag, () => this.repository.deleteTag(e));
  }
  async addWorktree(e) {
    await this.run(A.Worktree, () => this.repository.addWorktree(e));
  }
  async deleteWorktree(e, t) {
    await this.run(A.Worktree, () => this.repository.deleteWorktree(e, t));
  }
  async deleteRemoteRef(e, t, i) {
    await this.run(A.DeleteRemoteRef, () => this.repository.deleteRemoteRef(e, t, i));
  }
  async checkout(e, t) {
    let i = t?.detached ? Tt(f.Uri.file(this.root), e) : e;
    await this.run(A.Checkout(i), async () => {
      if (t?.pullBeforeCheckout && !t?.detached) try {
        await this.fastForwardBranch(e);
      } catch {
      }
      await this.repository.checkout(e, [], t);
    });
  }
  async checkoutTracking(e, t = {}) {
    let i = t.detached ? Tt(f.Uri.file(this.root), e) : e;
    await this.run(A.CheckoutTracking(i), () => this.repository.checkout(e, [], { ...t, track: true }));
  }
  async findTrackingBranches(e) {
    return await this.run(A.FindTrackingBranches, () => this.repository.findTrackingBranches(e));
  }
  async getCommit(e) {
    return await this.repository.getCommit(e);
  }
  async getEmptyTree() {
    if (!this._EMPTY_TREE) {
      let e = await this.repository.exec(["hash-object", "-t", "tree", "/dev/null"]);
      this._EMPTY_TREE = e.stdout.trim();
    }
    return this._EMPTY_TREE;
  }
  async reset(e, t) {
    await this.run(A.Reset, () => this.repository.reset(e, t));
  }
  async deleteRef(e) {
    await this.run(A.DeleteRef, () => this.repository.deleteRef(e));
  }
  getDefaultRemote() {
    if (this.remotes.length !== 0) return this.remotes.find((e) => e.name === "origin") ?? this.remotes[0];
  }
  async addRemote(e, t) {
    await this.run(A.Remote, () => this.repository.addRemote(e, t));
  }
  async removeRemote(e) {
    await this.run(A.Remote, () => this.repository.removeRemote(e));
  }
  async renameRemote(e, t) {
    await this.run(A.Remote, () => this.repository.renameRemote(e, t));
  }
  async fetchDefault(e = {}) {
    await this._fetch({ silent: e.silent });
  }
  async fetchPrune() {
    await this._fetch({ prune: true });
  }
  async fetchAll(e = {}, t) {
    await this._fetch({ all: true, silent: e.silent, cancellationToken: t });
  }
  async fetch(e) {
    await this._fetch(e);
  }
  async _fetch(e = {}) {
    if (!e.prune) {
      let i = f.workspace.getConfiguration("git", f.Uri.file(this.root)).get("pruneOnFetch");
      e.prune = i;
    }
    await this.run(A.Fetch(e.silent !== true), async () => this.repository.fetch(e));
  }
  async pullWithRebase(e) {
    let t, i;
    return e && e.name && e.upstream && (t = e.upstream.remote, i = `${e.upstream.name}`), this.pullFrom(true, t, i);
  }
  async pull(e, t) {
    let i, r;
    return e && e.name && e.upstream && (i = e.upstream.remote, r = `${e.upstream.name}`), this.pullFrom(false, i, r, t);
  }
  async pullFrom(e, t, i, r) {
    await this.run(A.Pull, async () => {
      await this.maybeAutoStash(async () => {
        let o = f.workspace.getConfiguration("git", f.Uri.file(this.root)), s = o.get("autoStash"), a = o.get("fetchOnPull"), l = o.get("pullTags");
        a && await this.fetchAll(), await this.checkIfMaybeRebased(this.HEAD?.name) && await this._pullAndHandleTagConflict(e, t, i, { unshallow: r, tags: l, autoStash: s });
      });
    });
  }
  async _pullAndHandleTagConflict(e, t, i, r = {}) {
    try {
      await this.repository.pull(e, t, i, r);
    } catch (o) {
      if (o.gitErrorCode !== T.TagConflict) throw o;
      await this.handleTagConflict(t, o.stderr) && await this.repository.pull(e, t, i, r);
    }
  }
  async push(e, t) {
    let i, r;
    e && e.name && e.upstream && (i = e.upstream.remote, r = `${e.name}:${e.upstream.name}`), await this.run(A.Push, () => this._push(i, r, void 0, void 0, t));
  }
  async pushTo(e, t, i = false, r) {
    await this.run(A.Push, () => this._push(e, t, i, void 0, r));
  }
  async pushFollowTags(e, t) {
    await this.run(A.Push, () => this._push(e, void 0, false, true, t));
  }
  async pushTags(e, t) {
    await this.run(A.Push, () => this._push(e, void 0, false, false, t, true));
  }
  async blame(e) {
    return await this.run(A.Blame(true), () => this.repository.blame(e));
  }
  async blame2(e, t, i) {
    return await this.run(A.Blame(false), () => this.repository.blame2(e, t, i));
  }
  sync(e, t) {
    return this._sync(e, t);
  }
  async _sync(e, t) {
    let i, r, o;
    e.name && e.upstream && (i = e.upstream.remote, r = `${e.upstream.name}`, o = `${e.name}:${e.upstream.name}`), await this.run(A.Sync, async () => {
      await this.maybeAutoStash(async () => {
        let s = f.workspace.getConfiguration("git", f.Uri.file(this.root)), a = s.get("autoStash"), l = s.get("fetchOnPull"), u = s.get("pullTags"), d = s.get("followTagsWhenSync"), h = s.get("supportCancellation"), p = async (C) => {
          l && await this.fetchAll({}, C), await this.checkIfMaybeRebased(this.HEAD?.name) && await this._pullAndHandleTagConflict(t, i, r, { tags: u, cancellationToken: C, autoStash: a });
        };
        if (h) {
          let C = { location: f.ProgressLocation.Notification, title: f.l10n.t("Syncing. Cancelling may cause serious damages to the repository"), cancellable: true };
          await f.window.withProgress(C, (S, k) => p(k));
        } else await p();
        let g = this.remotes.find((C) => C.name === i);
        if (g && g.isReadOnly) return;
        this.HEAD && (typeof this.HEAD.ahead == "number" ? this.HEAD.ahead > 0 : true) && await this._push(i, o, false, d);
      });
    });
  }
  async checkIfMaybeRebased(e) {
    let t = f.workspace.getConfiguration("git");
    if (t.get("ignoreRebaseWarning") === true || !await this.run(A.Log(true), async () => {
      try {
        let u = await this.repository.exec(["log", "--oneline", "--cherry", `${e ?? ""}...${e ?? ""}@{upstream}`, "--"]);
        return u.exitCode ? false : /^=/.test(u.stdout);
      } catch {
        return false;
      }
    })) return true;
    let o = { title: f.l10n.t("Always Pull") }, s = { title: f.l10n.t("Pull") }, a = { title: f.l10n.t("Don't Pull") }, l = await f.window.showWarningMessage(e ? f.l10n.t('It looks like the current branch "{0}" might have been rebased. Are you sure you still want to pull into it?', e) : f.l10n.t("It looks like the current branch might have been rebased. Are you sure you still want to pull into it?"), o, s, a);
    return l === s ? true : l === o ? (await t.update("ignoreRebaseWarning", true, true), true) : false;
  }
  async show(e, t) {
    return await this.run(A.Show, async () => {
      try {
        let i = await this.repository.buffer(e, t);
        return await f.workspace.decode(i, { uri: f.Uri.file(t) });
      } catch (i) {
        if (i.gitErrorCode === T.WrongCase) {
          let r = await this.repository.getGitFilePath(e, t), o = await this.repository.buffer(e, r);
          return await f.workspace.decode(o, { uri: f.Uri.file(t) });
        }
        throw i;
      }
    });
  }
  async buffer(e, t) {
    return this.run(A.Show, () => this.repository.buffer(e, t));
  }
  async execGit(e, t) {
    return await this.repository.git.exec(e, t);
  }
  getObjectFiles(e) {
    return this.run(A.GetObjectFiles, () => this.repository.lstree(e));
  }
  getObjectDetails(e, t) {
    return this.run(A.GetObjectDetails, () => this.repository.getObjectDetails(e, t));
  }
  detectObjectType(e) {
    return this.run(A.Show, () => this.repository.detectObjectType(e));
  }
  async apply(e, t) {
    return await this.run(A.Apply, () => this.repository.apply(e, t));
  }
  async getStashes() {
    return this.run(A.Stash, () => this.repository.getStashes());
  }
  async createStash(e, t, i) {
    let r = [...this.indexGroup.resourceStates.map((s) => s.resourceUri.fsPath)], o = [...i ? [] : this.workingTreeGroup.resourceStates.map((s) => s.resourceUri.fsPath), ...t ? this.untrackedGroup.resourceStates.map((s) => s.resourceUri.fsPath) : []];
    return await this.run(A.Stash, async () => {
      await this.repository.createStash(e, t, i), this.closeDiffEditors(r, o);
    });
  }
  async popStash(e) {
    return await this.run(A.Stash, () => this.repository.popStash(e));
  }
  async dropStash(e) {
    return await this.run(A.Stash, () => this.repository.dropStash(e));
  }
  async applyStash(e) {
    return await this.run(A.Stash, () => this.repository.applyStash(e));
  }
  async showStash(e) {
    return await this.run(A.Stash, () => this.repository.showStash(e));
  }
  async getCommitTemplate() {
    return await this.run(A.GetCommitTemplate, async () => this.repository.getCommitTemplate());
  }
  async ignore(e) {
    return await this.run(A.Ignore, async () => {
      let t = `${this.repository.root}${se.sep}.gitignore`, i = e.map((l) => Mt(this.repository.root, l.fsPath).replace(/\\|\[/g, (u) => u === "\\" ? "/" : `\\${u}`)).join(`
`), r = await new Promise((l) => st.exists(t, l)) ? await f.workspace.openTextDocument(t) : await f.workspace.openTextDocument(f.Uri.file(t).with({ scheme: "untitled" }));
      await f.window.showTextDocument(r);
      let o = new f.WorkspaceEdit(), s = r.lineAt(r.lineCount - 1), a = s.isEmptyOrWhitespace ? `${i}
` : `
${i}
`;
      o.insert(r.uri, s.range.end, a), await f.workspace.applyEdit(o), await r.save();
    });
  }
  async rebaseAbort() {
    await this.run(A.RebaseAbort, async () => await this.repository.rebaseAbort());
  }
  checkIgnore(e) {
    return this.run(A.CheckIgnore, () => this.doCheckIgnore(e));
  }
  async doCheckIgnore(e) {
    let t = e.filter((i) => me(this.root, i)).filter((i) => !this.isUnsupportedCheckIgnorePath(i));
    if (t.length === 0) return /* @__PURE__ */ new Set();
    try {
      return await this.executeCheckIgnore(t);
    } catch (i) {
      let r = await this.tryRecoverCheckIgnoreWithoutStderr(t, i);
      if (r !== void 0) return r;
      if (!(i instanceof Le) || i.gitErrorCode !== T.IsInSubmodule && i.gitErrorCode !== T.IsBeyondSymbolicLink) throw i;
      let o = await this.getUnsupportedCheckIgnorePath(i);
      if (!o || t.length === 1) return o && this.markUnsupportedCheckIgnorePath(o), new Set(this.parseIgnoreCheck(i.stdout ?? ""));
      this.markUnsupportedCheckIgnorePath(o);
      let s = t.filter((a) => !this.isUnsupportedCheckIgnorePath(a));
      return s.length >= t.length ? new Set(this.parseIgnoreCheck(i.stdout ?? "")) : await this.doCheckIgnore(s);
    }
  }
  async tryRecoverCheckIgnoreWithoutStderr(e, t) {
    if (!(t instanceof Le) || t.gitErrorCode || t.exitCode !== 128 || e.length <= 1 || (t.stderr ?? "").trim().length > 0) return;
    let r = new Set(this.parseIgnoreCheck(t.stdout ?? "")), o = false;
    for (let s of e) if (!this.isUnsupportedCheckIgnorePath(s)) try {
      let a = await this.executeCheckIgnore([s]);
      for (let l of a) r.add(l);
      o = true;
    } catch (a) {
      if (!(a instanceof Le)) throw a;
      if (a.gitErrorCode === T.IsInSubmodule || a.gitErrorCode === T.IsBeyondSymbolicLink) {
        let l = await this.getUnsupportedCheckIgnorePath(a) ?? { path: s, includeSelf: true };
        this.markUnsupportedCheckIgnorePath(l);
        continue;
      }
      if (a.exitCode === 128 && !a.gitErrorCode && (a.stderr ?? "").trim().length === 0) {
        this.markUnsupportedCheckIgnorePath({ path: s, includeSelf: true });
        continue;
      }
      throw a;
    }
    return o ? r : void 0;
  }
  executeCheckIgnore(e) {
    return new Promise((t, i) => {
      let r = this.repository.stream(["check-ignore", "-v", "-z", "--stdin"], { stdio: [null, null, null] });
      r.stdin.end(e.join("\0"), "utf8");
      let o = (u) => {
        u === 1 ? t(/* @__PURE__ */ new Set()) : u === 0 ? t(new Set(this.parseIgnoreCheck(s))) : / is in submodule /.test(l) ? i(new Le({ stdout: s, stderr: l, exitCode: u, gitErrorCode: T.IsInSubmodule })) : /is beyond a symbolic link/.test(l) ? i(new Le({ stdout: s, stderr: l, exitCode: u, gitErrorCode: T.IsBeyondSymbolicLink })) : i(new Le({ stdout: s, stderr: l, exitCode: u }));
      }, s = "", a = (u) => {
        s += u;
      };
      r.stdout.setEncoding("utf8"), r.stdout.on("data", a);
      let l = "";
      r.stderr.setEncoding("utf8"), r.stderr.on("data", (u) => l += u), r.on("error", i), r.on("exit", o);
    });
  }
  async getUnsupportedCheckIgnorePath(e) {
    let t = e.stderr ?? "", i = this.parseUnsupportedCheckIgnorePath(t);
    if (!i) return;
    let r = se.normalize(se.isAbsolute(i) ? i : se.join(this.root, i)), o = this.getContainingUnsupportedSubmodulePath(r);
    if (o) return { path: o, includeSelf: z(o, r) };
    let s = await this.getContainingUnsupportedSymlinkPath(r);
    return s ? { path: s, includeSelf: z(s, r) } : { path: r, includeSelf: true };
  }
  parseUnsupportedCheckIgnorePath(e) {
    let t = [/Path '(.+)' is in submodule/i, /pathspec '(.+)' is beyond a symbolic link/i, /(?:pathspec|Path) '(.+)'/i];
    for (let i of e.split(/\r?\n/)) for (let r of t) {
      let o = r.exec(i);
      if (o?.[1]) return o[1];
    }
  }
  isUnsupportedCheckIgnorePath(e) {
    for (let [t, i] of this.unsupportedCheckIgnorePaths) if (i ? me(t, e) : !z(t, e) && me(t, e)) return true;
    return false;
  }
  markUnsupportedCheckIgnorePath(e) {
    let t = this.unsupportedCheckIgnorePaths.get(e.path) ?? false;
    this.unsupportedCheckIgnorePaths.set(e.path, t || e.includeSelf);
  }
  getContainingUnsupportedSubmodulePath(e) {
    for (let t of this.submodules) {
      let i = se.join(this.root, t.path);
      if (me(i, e)) return i;
    }
  }
  async getContainingUnsupportedSymlinkPath(e) {
    let t = se.relative(this.root, e);
    if (t === "" || t.startsWith(`..${se.sep}`) || t === "..") return;
    let i = this.root;
    for (let r of t.split(se.sep).slice(0, -1)) if (i = se.join(i, r), (await new Promise((s) => {
      st.lstat(i, (a, l) => s(a ? void 0 : l));
    }))?.isSymbolicLink()) return i;
  }
  parseIgnoreCheck(e) {
    let t = [], i = e.split("\0");
    for (let r = 0; r < i.length; r += 4) {
      let o = i[r + 2], s = i[r + 3];
      o && !o.startsWith("!") && t.push(s);
    }
    return t;
  }
  async _push(e, t, i = false, r = false, o, s = false) {
    try {
      await this.repository.push(e, t, i, r, o, s), ci.scm.gitPushWasRun(this.root);
    } catch (a) {
      if (!e || !t) throw a;
      let l = new Ee(this), u = l.state.remotes.find((d) => d.name === e);
      if (!u) throw a;
      for (let d of this.pushErrorHandlerRegistry.getPushErrorHandlers()) if (await d.handlePushError(l, u, t, a)) return;
      throw a;
    }
  }
  async run(e, t = () => Promise.resolve(null), i = () => {
  }) {
    if (this.state !== 0) throw new Error("Repository not initialized");
    let r = null;
    this._operations.start(e), this._onRunOperation.fire(e.kind);
    try {
      let o = await vr(Il(e.kind), () => this.retryRun(e, t));
      return e.readOnly || await vr("block", () => this.updateModelState(this.optimisticUpdateEnabled() ? i() : void 0)), o;
    } catch (o) {
      throw r = o, o.gitErrorCode === T.NotAGitRepository && (this.state = 1), e.readOnly || await vr("block", () => this.updateModelState()), o;
    } finally {
      this._operations.end(e), this._onDidRunOperation.fire({ operation: e, error: r });
    }
  }
  async retryRun(e, t = () => Promise.resolve(null)) {
    let i = 0;
    for (; ; ) try {
      return i++, await t();
    } catch (r) {
      if (i <= 10 && (r.gitErrorCode === T.RepositoryIsLocked || e.retry && (r.gitErrorCode === T.CantLockRef || r.gitErrorCode === T.CantRebaseMultipleBranches))) await Ml(Math.pow(i, 2) * 50);
      else throw r;
    }
  }
  static {
    this.KnownHugeFolderNames = ["node_modules"];
  }
  async findKnownHugeFolderPathsToIgnore() {
    let e = [];
    for (let i of ke2.KnownHugeFolderNames) {
      let r = se.join(this.repository.root, i);
      await new Promise((o) => st.exists(r, o)) && e.push(r);
    }
    let t = await this.checkIgnore(e);
    return e.filter((i) => !t.has(i));
  }
  async updateModelState(e) {
    this.updateModelStateCancellationTokenSource?.cancel(), this.updateModelStateCancellationTokenSource = new f.CancellationTokenSource(), await this._updateModelState(e, this.updateModelStateCancellationTokenSource.token);
  }
  async _updateModelState(e, t) {
    try {
      let i = false, r = this.indexGroup.resourceStates, o = this.mergeGroup.resourceStates, s = this.untrackedGroup.resourceStates, a = this.workingTreeGroup.resourceStates;
      e && this._updateResourceGroupsState(e);
      let [l, u, d, h, p, g, y, C] = await Promise.all([this.repository.getHEADRef(), this.repository.getRemotes(), this.repository.getSubmodules(), this.repository.getWorktrees(), this.getRebaseCommit(), this.isMergeInProgress(), this.isCherryPickInProgress(), this.getInputTemplate()]);
      (this.HEAD?.name !== l?.name || this.HEAD?.commit !== l?.commit || this.HEAD?.ahead !== l?.ahead || this.HEAD?.upstream !== l?.upstream) && (this.unpublishedCommits = void 0);
      try {
        JSON.stringify(l) !== JSON.stringify(this._HEAD) && (i = true);
      } catch {
      }
      let S = this._HEAD;
      this._HEAD = l, S !== void 0 && S.name !== l?.name && ci.scm.gitHeadChanged(this.root);
      try {
        JSON.stringify(u) !== JSON.stringify(this._remotes) && (i = true);
      } catch {
      }
      this._remotes = u ?? [];
      try {
        d.length !== this._submodules.length && (i = true);
      } catch {
      }
      this._submodules = d, this._worktrees = h;
      try {
        JSON.stringify(p) !== JSON.stringify(this.rebaseCommit) && (i = true);
      } catch {
      }
      this.rebaseCommit = p;
      try {
        g !== this.mergeInProgress && (i = true);
      } catch {
      }
      this.mergeInProgress = g;
      try {
        C !== this._sourceControl.commitTemplate && (i = true);
      } catch {
      }
      this.cherryPickInProgress = y, this._sourceControl.commitTemplate = C;
      let [k, G] = await Promise.all([this.getStatus(t), this.run(A.GetRefs, () => this.repository.getBranchAndTagRefs(t))]);
      this._refs = G, this._updateResourceGroupsState(k);
      try {
        Nr(this.indexGroup.resourceStates, r) || (i = true), Nr(this.mergeGroup.resourceStates, o) || (i = true), Nr(this.untrackedGroup.resourceStates, s) || (i = true), Nr(this.workingTreeGroup.resourceStates, a) || (i = true);
      } catch {
      }
      this._onDidChangeStatus.fire(), i && this._onDidActuallyChangeStatus.fire();
    } catch (i) {
      if (i instanceof f.CancellationError) return;
      throw i;
    }
  }
  _updateResourceGroupsState(e) {
    e.indexGroup && (this.indexGroup.resourceStates = e.indexGroup), e.mergeGroup && (this.mergeGroup.resourceStates = e.mergeGroup), e.untrackedGroup && (this.untrackedGroup.resourceStates = e.untrackedGroup), e.workingTreeGroup && (this.workingTreeGroup.resourceStates = e.workingTreeGroup), this._isWorktreeMigrating && e.mergeGroup && e.mergeGroup.length === 0 && (this._isWorktreeMigrating = false), this.setCountBadge();
  }
  async getStatus(e) {
    if (e && e.isCancellationRequested) throw new f.CancellationError();
    let t = f.workspace.getConfiguration("git", f.Uri.file(this.repository.root)), i = t.get("untrackedChanges"), r = t.get("ignoreSubmodules"), o = t.get("statusLimit", 1e4), s = t.get("similarityThreshold", 50), a = (/* @__PURE__ */ new Date()).getTime(), { status: l, statusLength: u, didHitLimit: d } = await this.repository.getStatus({ limit: o, ignoreSubmodules: r, similarityThreshold: s, untrackedChanges: i, cancellationToken: e }), h = (/* @__PURE__ */ new Date()).getTime() - a;
    this.isRepositoryHuge = d ? { limit: o } : false, d && this.telemetryReporter.sendTelemetryEvent("statusLimit", { ignoreSubmodules: String(r) }, { limit: o, statusLength: u, totalTime: h }), h > 5e3 && this.telemetryReporter.sendTelemetryEvent("statusSlow", { ignoreSubmodules: String(r), didHitLimit: String(d), didWarnAboutLimit: String(this.didWarnAboutLimit) }, { statusLength: u, totalTime: h }), this._sourceControl.inputBox.validateInput = this._sourceControl.inputBox.validateInput;
    let p = f.workspace.getConfiguration("git"), g = p.get("ignoreLimitWarning") === true, y = !p.get("decorations.enabled", true);
    if (d && !g && !this.didWarnAboutLimit) {
      let I = await this.findKnownHugeFolderPathsToIgnore(), D = f.l10n.t('The git repository at "{0}" has too many active changes, only a subset of Git features will be enabled.', this.repository.root), M = { title: f.l10n.t("Don't Show Again") };
      if (I.length > 0) {
        let H = I[0], W = se.basename(H), B = f.l10n.t('Would you like to add "{0}" to .gitignore?', W), $ = { title: f.l10n.t("Yes") }, q = { title: f.l10n.t("No") };
        f.window.showWarningMessage(`${D} ${B}`, $, q, M).then((E) => {
          E === $ ? this.ignore([f.Uri.file(H)]) : (E === M && p.update("ignoreLimitWarning", true, false), this.didWarnAboutLimit = true);
        });
      } else {
        let H = { title: f.l10n.t("OK") };
        f.window.showWarningMessage(D, H, M).then((W) => {
          W === M && p.update("ignoreLimitWarning", true, false), this.didWarnAboutLimit = true;
        });
      }
    }
    let C = [], S = [], k = [], G = [];
    return l.forEach((I) => {
      let D = f.Uri.file(se.join(this.repository.root, I.path)), M = I.rename ? f.Uri.file(se.join(this.repository.root, I.rename)) : void 0;
      switch (I.x + I.y) {
        case "??":
          switch (i) {
            case "mixed":
              return G.push(new Q(this.resourceCommandResolver, 2, D, m.UNTRACKED, y, void 0, this.kind));
            case "separate":
              return k.push(new Q(this.resourceCommandResolver, 3, D, m.UNTRACKED, y));
            default:
              return;
          }
        case "!!":
          switch (i) {
            case "mixed":
              return G.push(new Q(this.resourceCommandResolver, 2, D, m.IGNORED, y, void 0, this.kind));
            case "separate":
              return k.push(new Q(this.resourceCommandResolver, 3, D, m.IGNORED, y));
            default:
              return;
          }
        case "DD":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.BOTH_DELETED, y));
        case "AU":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.ADDED_BY_US, y));
        case "UD":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.DELETED_BY_THEM, y));
        case "UA":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.ADDED_BY_THEM, y));
        case "DU":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.DELETED_BY_US, y));
        case "AA":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.BOTH_ADDED, y));
        case "UU":
          return S.push(new Q(this.resourceCommandResolver, 0, D, m.BOTH_MODIFIED, y));
      }
      switch (I.x) {
        case "M":
          C.push(new Q(this.resourceCommandResolver, 1, D, m.INDEX_MODIFIED, y, void 0, this.kind));
          break;
        case "A":
          C.push(new Q(this.resourceCommandResolver, 1, D, m.INDEX_ADDED, y, void 0, this.kind));
          break;
        case "D":
          C.push(new Q(this.resourceCommandResolver, 1, D, m.INDEX_DELETED, y, void 0, this.kind));
          break;
        case "R":
          C.push(new Q(this.resourceCommandResolver, 1, D, m.INDEX_RENAMED, y, M, this.kind));
          break;
        case "C":
          C.push(new Q(this.resourceCommandResolver, 1, D, m.INDEX_COPIED, y, M, this.kind));
          break;
      }
      switch (I.y) {
        case "M":
          G.push(new Q(this.resourceCommandResolver, 2, D, m.MODIFIED, y, M, this.kind));
          break;
        case "D":
          G.push(new Q(this.resourceCommandResolver, 2, D, m.DELETED, y, M, this.kind));
          break;
        case "A":
          G.push(new Q(this.resourceCommandResolver, 2, D, m.INTENT_TO_ADD, y, M, this.kind));
          break;
        case "R":
          G.push(new Q(this.resourceCommandResolver, 2, D, m.INTENT_TO_RENAME, y, M, this.kind));
          break;
        case "T":
          G.push(new Q(this.resourceCommandResolver, 2, D, m.TYPE_CHANGED, y, M, this.kind));
          break;
      }
    }), { indexGroup: C, mergeGroup: S, untrackedGroup: k, workingTreeGroup: G };
  }
  setCountBadge() {
    let e = f.workspace.getConfiguration("git", f.Uri.file(this.repository.root)), t = e.get("countBadge"), i = e.get("untrackedChanges"), r = this.mergeGroup.resourceStates.length + this.indexGroup.resourceStates.length + this.workingTreeGroup.resourceStates.length;
    switch (t) {
      case "off":
        r = 0;
        break;
      case "tracked":
        i === "mixed" && (r -= this.workingTreeGroup.resourceStates.filter((o) => o.type === m.UNTRACKED || o.type === m.IGNORED).length);
        break;
      case "all":
        i === "separate" && (r += this.untrackedGroup.resourceStates.length);
        break;
    }
    this._sourceControl.count = r;
  }
  async getRebaseCommit() {
    let e = se.join(this.repository.root, ".git", "REBASE_HEAD"), t = se.join(this.repository.root, ".git", "rebase-apply"), i = se.join(this.repository.root, ".git", "rebase-merge");
    try {
      let [r, o, s] = await Promise.all([new Promise((a) => st.exists(t, a)), new Promise((a) => st.exists(i, a)), new Promise((a, l) => st.readFile(e, "utf8", (u, d) => u ? l(u) : a(d)))]);
      return !r && !o ? void 0 : await this.getCommit(s.trim());
    } catch {
      return;
    }
  }
  isMergeInProgress() {
    let e = se.join(this.repository.root, ".git", "MERGE_HEAD");
    return new Promise((t) => st.exists(e, t));
  }
  isCherryPickInProgress() {
    let e = se.join(this.repository.root, ".git", "CHERRY_PICK_HEAD");
    return new Promise((t) => st.exists(e, t));
  }
  async maybeAutoStash(e) {
    if (!(f.workspace.getConfiguration("git", f.Uri.file(this.root)).get("autoStash") && this.repository.git.compareGitVersionTo("2.27.0") < 0 && (this.indexGroup.resourceStates.length > 0 || this.workingTreeGroup.resourceStates.some((r) => r.type !== m.UNTRACKED && r.type !== m.IGNORED)))) return await e();
    await this.repository.createStash(void 0, true);
    try {
      return await e();
    } finally {
      await this.repository.popStash();
    }
  }
  onFileChange(e) {
    let t = me(this.dotGit.path, e.fsPath) || this.dotGit.commonPath !== void 0 && me(this.dotGit.commonPath, e.fsPath), i = !t && se.basename(e.fsPath) === ".gitignore";
    if (t) this.unsupportedCheckIgnorePaths.clear(), this.clearStatusIgnorePathCache();
    else {
      for (let s of Array.from(this.unsupportedCheckIgnorePaths.keys())) (me(e.fsPath, s) || me(s, e.fsPath)) && this.unsupportedCheckIgnorePaths.delete(s);
      i && this.clearStatusIgnorePathCache();
    }
    if (!f.workspace.getConfiguration("git").get("autorefresh")) {
      this.logger.trace("[Repository][onFileChange] Skip running git status because autorefresh setting is disabled.");
      return;
    }
    if (this.isRepositoryHuge) {
      this.logger.trace("[Repository][onFileChange] Skip running git status because repository is huge.");
      return;
    }
    if (!this.operations.isIdle()) {
      this.logger.trace("[Repository][onFileChange] Skip running git status because an operation is running.");
      return;
    }
    if (!t && !i) {
      this.eventuallyRunStatusUnlessPathIgnored(e.fsPath);
      return;
    }
    this.eventuallyUpdateWhenIdleAndWait();
  }
  eventuallyRunStatusUnlessPathIgnored(e) {
    let t = this.statusIgnorePathVerdicts.get(e) ?? (this.isUnderKnownIgnoredDir(e) ? true : void 0);
    if (t !== true) {
      if (t === false) {
        this.eventuallyUpdateWhenIdleAndWait();
        return;
      }
      if (this.pendingStatusIgnorePaths.size >= ke2.MaxPendingStatusIgnorePaths) {
        this.pendingStatusIgnorePaths.clear(), this.eventuallyUpdateWhenIdleAndWait();
        return;
      }
      this.pendingStatusIgnorePaths.add(e), this.eventuallyClassifyPendingStatusIgnorePaths();
    }
  }
  eventuallyClassifyPendingStatusIgnorePaths() {
    this.classifyPendingStatusIgnorePaths();
  }
  async classifyPendingStatusIgnorePaths() {
    let e = Array.from(this.pendingStatusIgnorePaths);
    if (this.pendingStatusIgnorePaths = /* @__PURE__ */ new Set(), e.length === 0) return;
    let t = /* @__PURE__ */ new Set();
    for (let s of e) {
      let a = se.dirname(s);
      !z(a, this.root) && me(this.root, a) && !this.statusIgnorePathVerdicts.has(a) && !this.isUnderKnownIgnoredDir(a) && t.add(a);
    }
    let i = this.statusIgnoreCacheGeneration, r;
    try {
      r = await this.doCheckIgnore([...e, ...t]);
    } catch (s) {
      this.logger.warn(`[Repository][classifyPendingStatusIgnorePaths] git check-ignore failed, scheduling git status: ${s}`), this.eventuallyUpdateWhenIdleAndWait();
      return;
    }
    if (this.state === 1) return;
    if (i !== this.statusIgnoreCacheGeneration) {
      this.eventuallyUpdateWhenIdleAndWait();
      return;
    }
    for (let s of t) r.has(s) && this.ignoredStatusDirs.size < ke2.MaxIgnoredStatusDirs && this.ignoredStatusDirs.add(s);
    this.statusIgnorePathVerdicts.size + e.length > ke2.MaxStatusIgnorePathVerdicts && this.statusIgnorePathVerdicts.clear();
    let o = false;
    for (let s of e) {
      let a = r.has(s) || this.isUnderKnownIgnoredDir(s);
      this.statusIgnorePathVerdicts.set(s, a), a || (o = true);
    }
    o ? this.eventuallyUpdateWhenIdleAndWait() : this.logger.trace(`[Repository][onFileChange] Skip running git status because all ${e.length} changed path(s) are gitignored.`);
  }
  isUnderKnownIgnoredDir(e) {
    for (let t of this.ignoredStatusDirs) if (me(t, e)) return true;
    return false;
  }
  clearStatusIgnorePathCache() {
    this.statusIgnoreCacheGeneration++, this.statusIgnorePathVerdicts.clear(), this.ignoredStatusDirs.clear();
  }
  eventuallyUpdateWhenIdleAndWait() {
    this.updateWhenIdleAndWait();
  }
  async updateWhenIdleAndWait() {
    await this.whenIdleAndFocused(), await this.status(), await Ml(5e3);
  }
  async whenIdleAndFocused() {
    for (; ; ) {
      if (!this.operations.isIdle()) {
        await Qe(this.onDidRunOperation);
        continue;
      }
      if (!f.window.state.focused) {
        let e = V(f.window.onDidChangeWindowState, (t) => t.focused);
        await Qe(e);
        continue;
      }
      return;
    }
  }
  get headLabel() {
    let e = this.HEAD;
    return e ? (e.name || (e.commit || "").substr(0, 8)) + (this.workingTreeGroup.resourceStates.length + this.untrackedGroup.resourceStates.length > 0 ? "*" : "") + (this.indexGroup.resourceStates.length > 0 ? "+" : "") + (this.mergeInProgress || this.rebaseCommit ? "!" : "") : "";
  }
  get syncLabel() {
    if (!this.HEAD || !this.HEAD.name || !this.HEAD.commit || !this.HEAD.upstream || !(this.HEAD.ahead || this.HEAD.behind)) return "";
    let e = this.HEAD && this.HEAD.remote || this.HEAD.upstream.remote, t = this.remotes.find((i) => i.name === e);
    return t && t.isReadOnly ? `${this.HEAD.behind}↓` : `${this.HEAD.behind}↓ ${this.HEAD.ahead}↑`;
  }
  get syncTooltip() {
    if (!this.HEAD || !this.HEAD.name || !this.HEAD.commit || !this.HEAD.upstream || !(this.HEAD.ahead || this.HEAD.behind)) return f.l10n.t("Synchronize Changes");
    let e = this.HEAD && this.HEAD.remote || this.HEAD.upstream.remote, t = this.remotes.find((i) => i.name === e);
    return t && t.isReadOnly || !this.HEAD.ahead ? f.l10n.t("Pull {0} commits from {1}/{2}", this.HEAD.behind, this.HEAD.upstream.remote, this.HEAD.upstream.name) : this.HEAD.behind ? f.l10n.t("Pull {0} and push {1} commits between {2}/{3}", this.HEAD.behind, this.HEAD.ahead, this.HEAD.upstream.remote, this.HEAD.upstream.name) : f.l10n.t("Push {0} commits to {1}/{2}", this.HEAD.ahead, this.HEAD.upstream.remote, this.HEAD.upstream.name);
  }
  updateInputBoxPlaceholder() {
    let e = this.headShortName;
    e ? this._sourceControl.inputBox.placeholder = f.l10n.t('Message ({0} to commit on "{1}")', "{0}", e) : this._sourceControl.inputBox.placeholder = f.l10n.t("Message ({0} to commit)");
  }
  updateBranchProtectionMatchers(e) {
    this.branchProtection.clear();
    for (let t of this.branchProtectionProviderRegistry.getBranchProtectionProviders(e)) for (let { remote: i, rules: r } of t.provideBranchProtection()) {
      let o = [];
      for (let s of r) {
        let a = s.include && s.include.length !== 0 ? (0, Sn.default)(s.include) : void 0, l = s.exclude && s.exclude.length !== 0 ? (0, Sn.default)(s.exclude) : void 0;
        (a || l) && o.push({ include: a, exclude: l });
      }
      o.length !== 0 && this.branchProtection.set(i, o);
    }
    this._onDidChangeBranchProtection.fire();
  }
  optimisticUpdateEnabled() {
    return f.workspace.getConfiguration("git", f.Uri.file(this.root)).get("optimisticUpdate") === true;
  }
  async handleTagConflict(e, t) {
    if (e = e ?? this.HEAD?.upstream?.remote, !e) throw new Error("Unable to resolve tag conflict due to missing remote.");
    let i = [];
    for (let s of t.matchAll(/^ ! \[rejected\]\s+([^\s]+)\s+->\s+([^\s]+)\s+\(would clobber existing tag\)$/gm)) s.length === 3 && i.push(s[1]);
    if (i.length === 0) throw new Error(`Unable to extract tag names from error message: ${t}`);
    let r = f.workspace.getConfiguration("git", f.Uri.file(this.repository.root));
    if (!(r.get("replaceTagsWhenPull", false) === true)) {
      let s = f.l10n.t("Replace Local Tag(s)"), a = f.l10n.t("Always Replace Local Tag(s)"), l = f.l10n.t("Unable to pull from remote repository due to conflicting tag(s): {0}. Would you like to resolve the conflict by replacing the local tag(s)?", i.join(", ")), u = await f.window.showErrorMessage(l, { modal: true }, s, a);
      if (u !== s && u !== a) return false;
      u === a && await r.update("replaceTagsWhenPull", true, true);
    }
    return true;
  }
  isBranchProtected(e = this.HEAD) {
    if (e?.name) {
      let t = this.branchProtection.get("");
      if (t?.length === 1 && t[0].include && t[0].include(e.name)) return true;
      if (e.upstream?.remote) {
        let i = this.branchProtection.get(e.upstream.remote);
        if (i && i?.length !== 0) return i.some((r) => {
          let o = r.include ? r.include(e.name) : true, s = r.exclude ? r.exclude(e.name) : false;
          return o && !s;
        });
      }
    }
    return false;
  }
  async getUnpublishedCommits() {
    if (this.unpublishedCommits) return this.unpublishedCommits;
    if (!this.HEAD?.name) return this.unpublishedCommits = /* @__PURE__ */ new Set(), this.unpublishedCommits;
    if (this.HEAD.upstream) if (this.HEAD.ahead === 0) this.unpublishedCommits = /* @__PURE__ */ new Set();
    else {
      let e = `${this.HEAD.upstream.remote}/${this.HEAD.upstream.name}`, t = this.HEAD.name, i = await this.repository.revList(e, t);
      this.unpublishedCommits = new Set(i);
    }
    else if (this.historyProvider.currentHistoryItemBaseRef) {
      let e = this.historyProvider.currentHistoryItemBaseRef.id, t = this.HEAD.name, i = await this.repository.revList(e, t);
      this.unpublishedCommits = new Set(i);
    } else this.unpublishedCommits = /* @__PURE__ */ new Set();
    return this.unpublishedCommits;
  }
  dispose() {
    this.disposables = j(this.disposables);
  }
};
b([gt], ke.prototype, "onDidChangeOperations", 1), b([Fe], ke.prototype, "status", 1), b([Fe], ke.prototype, "refresh", 1), b([Fe], ke.prototype, "fastForwardBranch", 1), b([Ir], ke.prototype, "getBranchBase", 1), b([Fe], ke.prototype, "fetchDefault", 1), b([Fe], ke.prototype, "fetchPrune", 1), b([Fe], ke.prototype, "fetchAll", 1), b([Fe], ke.prototype, "pullWithRebase", 1), b([Fe], ke.prototype, "pull", 1), b([Fe], ke.prototype, "push", 1), b([Fe], ke.prototype, "sync", 1), b([nt(500)], ke.prototype, "eventuallyClassifyPendingStatusIgnorePaths", 1), b([nt(1e3)], ke.prototype, "eventuallyUpdateWhenIdleAndWait", 1), b([Fe], ke.prototype, "updateWhenIdleAndWait", 1);
var Bi = ke, Fr = class {
  constructor(e) {
    this._repositoryResolver = e;
    this.visible = false;
    this._disposables = [];
    this._disposables.push(f.window.registerQuickDiffProvider({ scheme: "file" }, this, f.l10n.t("Git local changes (working tree + index)")));
  }
  provideOriginalResource(e) {
    let t = this._repositoryResolver.getRepository(e);
    if (t && t.indexGroup.resourceStates.some((i) => z(i.resourceUri.fsPath, e.fsPath))) return Z(e, "HEAD", { replaceFileExtension: true });
  }
  dispose() {
    this._disposables = j(this._disposables);
  }
};
var fe = ie(require("path")), Ye = ie(require("fs")), _n = ie(require("os")), Ll = ie(require("vscode"));
var Oi = class {
  constructor(e, t) {
    this.repository = e;
    this.index = t;
  }
  get label() {
    return fe.basename(this.repository.root);
  }
  get description() {
    return [this.repository.headLabel, this.repository.syncLabel].filter((e) => !!e).join(" ");
  }
};
b([gt], Oi.prototype, "label", 1), b([gt], Oi.prototype, "description", 1);
var Bn = class {
  constructor(e) {
    this.workspaceState = e;
    this._repositories = new Set(e.get("closedRepositories", [])), this.onDidChangeRepositories();
  }
  get repositories() {
    return [...this._repositories.values()];
  }
  addRepository(e) {
    this._repositories.add(e), this.onDidChangeRepositories();
  }
  deleteRepository(e) {
    let t = this._repositories.delete(e);
    return t && this.onDidChangeRepositories(), t;
  }
  isRepositoryClosed(e) {
    return this._repositories.has(e);
  }
  onDidChangeRepositories() {
    this.workspaceState.update("closedRepositories", [...this._repositories.values()]), P.commands.executeCommand("setContext", "git.closedRepositoryCount", this._repositories.size);
  }
}, On = class {
  constructor(e) {
    this.globalState = e;
    this._repositories = /* @__PURE__ */ new Set();
    this.onDidChangeRepositories();
  }
  get repositories() {
    return [...this._repositories.values()];
  }
  addRepository(e) {
    this._repositories.add(e), this.onDidChangeRepositories();
  }
  deleteRepository(e) {
    let t = this._repositories.delete(e);
    return t && this.onDidChangeRepositories(), t;
  }
  hasRepository(e) {
    return this._repositories.has(e);
  }
  openRepository(e) {
    this.globalState.update(`parentRepository:${e}`, true), this.deleteRepository(e);
  }
  onDidChangeRepositories() {
    P.commands.executeCommand("setContext", "git.parentRepositoryCount", this._repositories.size);
  }
}, Mn = class {
  constructor() {
    this._repositories = /* @__PURE__ */ new Map();
    this.onDidChangeRepositories();
  }
  get repositories() {
    return [...this._repositories.keys()];
  }
  addRepository(e, t) {
    this._repositories.set(e, t), this.onDidChangeRepositories();
  }
  deleteRepository(e) {
    let t = this._repositories.delete(e);
    return t && this.onDidChangeRepositories(), t;
  }
  getRepositoryPath(e) {
    return this._repositories.get(e);
  }
  hasRepository(e) {
    return this._repositories.has(e);
  }
  onDidChangeRepositories() {
    P.commands.executeCommand("setContext", "git.unsafeRepositoryCount", this._repositories.size);
  }
}, Nt = class {
  constructor(e, t, i, r, o, s) {
    this.git = e;
    this.askpass = t;
    this.globalState = i;
    this.workspaceState = r;
    this.logger = o;
    this.telemetryReporter = s;
    this._onDidOpenRepository = new P.EventEmitter();
    this.onDidOpenRepository = this._onDidOpenRepository.event;
    this._onDidCloseRepository = new P.EventEmitter();
    this.onDidCloseRepository = this._onDidCloseRepository.event;
    this._onDidChangeRepository = new P.EventEmitter();
    this.onDidChangeRepository = this._onDidChangeRepository.event;
    this._onDidChangeOriginalResource = new P.EventEmitter();
    this.onDidChangeOriginalResource = this._onDidChangeOriginalResource.event;
    this.openRepositories = [];
    this.possibleGitRepositoryPaths = /* @__PURE__ */ new Set();
    this._onDidChangeState = new P.EventEmitter();
    this.onDidChangeState = this._onDidChangeState.event;
    this._onDidPublish = new P.EventEmitter();
    this.onDidPublish = this._onDidPublish.event;
    this._state = "uninitialized";
    this.remoteSourcePublishers = /* @__PURE__ */ new Set();
    this._onDidAddRemoteSourcePublisher = new P.EventEmitter();
    this.onDidAddRemoteSourcePublisher = this._onDidAddRemoteSourcePublisher.event;
    this._onDidRemoveRemoteSourcePublisher = new P.EventEmitter();
    this.onDidRemoveRemoteSourcePublisher = this._onDidRemoveRemoteSourcePublisher.event;
    this.postCommitCommandsProviders = /* @__PURE__ */ new Set();
    this._onDidChangePostCommitCommandsProviders = new P.EventEmitter();
    this.onDidChangePostCommitCommandsProviders = this._onDidChangePostCommitCommandsProviders.event;
    this.branchProtectionProviders = /* @__PURE__ */ new Map();
    this._onDidChangeBranchProtectionProviders = new P.EventEmitter();
    this.onDidChangeBranchProtectionProviders = this._onDidChangeBranchProtectionProviders.event;
    this.pushErrorHandlers = /* @__PURE__ */ new Set();
    this.historyItemDetailsProviders = /* @__PURE__ */ new Set();
    this._workspaceFolders = /* @__PURE__ */ new Map();
    this._initialStatusLimiter = new St(5);
    this.disposables = [];
    this._closedRepositoriesManager = new Bn(r), this._parentRepositoriesManager = new On(i), this._unsafeRepositoriesManager = new Mn();
    let a = _n.homedir();
    a && (this._cursorWorktreesDir = fe.normalize(fe.join(a, ".cursor", "worktrees"))), P.workspace.onDidChangeWorkspaceFolders(this.onDidChangeWorkspaceFolders, this, this.disposables), P.window.onDidChangeVisibleTextEditors(this.onDidChangeVisibleTextEditors, this, this.disposables), P.window.onDidChangeActiveTextEditor(this.onDidChangeActiveTextEditor, this, this.disposables), P.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this.disposables);
    let l = P.workspace.createFileSystemWatcher("**");
    this.disposables.push(l), this.controlProvider = new Ln(this.logger), this.disposables.push(this.controlProvider);
    let u = Je(l.onDidChange, l.onDidCreate, l.onDidDelete), d = V(u, (p) => /\/\.git/.test(p.path));
    V(d, (p) => !this.getRepository(p))(this.onPossibleGitRepositoryChange, this, this.disposables), this.setState("uninitialized"), this.doInitialScan().finally(() => this.setState("initialized"));
  }
  get repositories() {
    return this.openRepositories.filter((e) => e.openEventFired).map((e) => e.repository);
  }
  firePublishEvent(e, t) {
    this._onDidPublish.fire({ repository: new Ee(e), branch: t });
  }
  get state() {
    return this._state;
  }
  setState(e) {
    this._state = e, this._onDidChangeState.fire(e), P.commands.executeCommand("setContext", "git.state", e);
  }
  get isInitialized() {
    return this._state === "initialized" ? Promise.resolve() : Qe(V(this.onDidChangeState, (e) => e === "initialized"));
  }
  get unsafeRepositories() {
    return this._unsafeRepositoriesManager.repositories;
  }
  get parentRepositories() {
    return this._parentRepositoriesManager.repositories;
  }
  get closedRepositories() {
    return [...this._closedRepositoriesManager.repositories];
  }
  async doInitialScan() {
    this.logger.info("[Model][doInitialScan] Initial repository scan started");
    let e = P.workspace.getConfiguration("git"), t = e.get("autoRepositoryDetection"), i = e.get("openRepositoryInParentFolders", "prompt");
    this.logger.trace(`[Model][doInitialScan] Settings: autoRepositoryDetection=${t}, openRepositoryInParentFolders=${i}`);
    let r = () => Promise.all([this.onDidChangeWorkspaceFolders({ added: P.workspace.workspaceFolders || [], removed: [] }), this.onDidChangeVisibleTextEditors(P.window.visibleTextEditors), this.scanWorkspaceFolders()]);
    e.get("showProgress", true) ? await P.window.withProgress({ location: P.ProgressLocation.SourceControl }, r) : await r(), this.parentRepositories.length !== 0 && i === "prompt" ? this.showParentRepositoryNotification() : this.unsafeRepositories.length !== 0 && this.showUnsafeRepositoryNotification(), this.telemetryReporter.sendTelemetryEvent("git.repositoryInitialScan", { autoRepositoryDetection: String(t) }, { repositoryCount: this.openRepositories.length }), this.logger.info(`[Model][doInitialScan] Initial repository scan completed - repositories (${this.openRepositories.length}), closed repositories (${this.closedRepositories.length}), parent repositories (${this.parentRepositories.length}), unsafe repositories (${this.unsafeRepositories.length})`);
  }
  async rescanRepositories() {
    let e = () => Promise.all([this.onDidChangeWorkspaceFolders({ added: P.workspace.workspaceFolders || [], removed: [] }), this.onDidChangeVisibleTextEditors(P.window.visibleTextEditors), this.scanWorkspaceFolders()]);
    try {
      let i = ".cursor/worktrees", o = P.workspace.getConfiguration("git").get("showCursorWorktrees", false) === true, s = _n.homedir();
      if (s && s.length > 0) {
        let a = fe.join(s, ...i.split("/")), l = fe.normalize(a);
        if (o) {
          for (let { repository: u } of this.openRepositories) try {
            await u.status();
          } catch {
          }
          try {
            let u = await Ye.promises.readdir(l, { withFileTypes: true }), d = [];
            for (let g of u) {
              if (!g.isDirectory()) continue;
              let y = fe.join(l, g.name);
              try {
                let C = fe.join(y, ".git"), S = await Ye.promises.stat(C);
                if (S.isFile() || S.isDirectory()) {
                  d.push(y);
                  continue;
                }
              } catch {
              }
              try {
                let C = await Ye.promises.readdir(y, { withFileTypes: true });
                for (let S of C) {
                  if (!S.isDirectory()) continue;
                  let k = fe.join(y, S.name);
                  try {
                    let G = fe.join(k, ".git"), I = await Ye.promises.stat(G);
                    (I.isFile() || I.isDirectory()) && d.push(k);
                  } catch {
                  }
                }
              } catch (C) {
                this.logger.trace(`[Model][rescanRepositories] Failed to read directory ${y}: ${C}`);
              }
            }
            let h = new Set(this.openRepositories.map((g) => fe.basename(g.repository.root).toLowerCase())), p = [];
            for (let g of d) {
              let C = fe.basename(fe.dirname(g)).toLowerCase();
              h.has(C) && p.push(g);
            }
            for (let g of p) this._closedRepositoriesManager.deleteRepository(g), await this.openRepository(g, true, true);
          } catch {
          }
        } else for (let { repository: u } of [...this.openRepositories]) (z(u.root, l) || me(l, u.root)) && this.close(u);
      }
    } catch {
    }
    P.workspace.getConfiguration("git").get("showProgress", true) ? await P.window.withProgress({ location: P.ProgressLocation.SourceControl }, e) : await e();
  }
  async scanWorkspaceFolders() {
    try {
      let e = P.workspace.getConfiguration("git"), t = e.get("autoRepositoryDetection");
      if (t !== true && t !== "subFolders") return;
      await Promise.all((P.workspace.workspaceFolders || []).map(async (i) => {
        let r = i.uri.fsPath;
        this.logger.trace(`[Model][scanWorkspaceFolders] Workspace folder: ${r}`);
        let o = (P.workspace.isTrusted ? P.workspace.getConfiguration("git", i.uri) : e).get("repositoryScanMaxDepth", 1), s = (P.workspace.isTrusted ? P.workspace.getConfiguration("git", i.uri) : e).get("repositoryScanIgnoredFolders", []), a = new Set(await this.traverseWorkspaceFolder(r, o, s)), l = (P.workspace.isTrusted ? P.workspace.getConfiguration("git", i.uri) : e).get("scanRepositories") || [];
        this.logger.trace(`[Model][scanWorkspaceFolders] Workspace scan settings: repositoryScanMaxDepth=${o}; repositoryScanIgnoredFolders=[${s.join(", ")}]; scanRepositories=[${l.join(", ")}]`);
        for (let u of l) {
          if (u === ".git") {
            this.logger.trace("[Model][scanWorkspaceFolders] '.git' not supported in 'git.scanRepositories' setting.");
            continue;
          }
          if (fe.isAbsolute(u)) {
            let d = P.l10n.t('Absolute paths not supported in "git.scanRepositories" setting.');
            this.logger.warn(`[Model][scanWorkspaceFolders] ${d}`), console.warn(d);
            continue;
          }
          a.add(fe.join(r, u));
        }
        this.logger.trace(`[Model][scanWorkspaceFolders] Workspace scan sub folders: [${[...a].join(", ")}]`), await Promise.all([...a].map((u) => this.openRepository(u)));
      }));
    } catch (e) {
      this.logger.warn(`[Model][scanWorkspaceFolders] Error: ${e}`);
    }
  }
  async traverseWorkspaceFolder(e, t, i) {
    let r = [], o = [{ path: e, depth: 0 }];
    for (; o.length > 0; ) {
      let s = o.shift(), a = [];
      try {
        a.push(...await Ye.promises.readdir(s.path, { withFileTypes: true })), s.depth !== 0 && r.push(s.path);
      } catch (l) {
        this.logger.warn(`[Model][traverseWorkspaceFolder] Unable to read workspace folder '${s.path}': ${l}`);
        continue;
      }
      if (s.depth < t || t === -1) {
        let l = a.filter((u) => u.isDirectory() && u.name !== ".git" && !i.find((d) => z(u.name, d))).map((u) => fe.join(s.path, u.name));
        o.push(...l.map((u) => ({ path: u, depth: s.depth + 1 })));
      }
    }
    return r;
  }
  onPossibleGitRepositoryChange(e) {
    P.workspace.getConfiguration("git").get("autoRepositoryDetection") !== false && this.eventuallyScanPossibleGitRepository(e.fsPath.replace(/\.git.*$/, ""));
  }
  eventuallyScanPossibleGitRepository(e) {
    this.possibleGitRepositoryPaths.add(e), this.eventuallyScanPossibleGitRepositories();
  }
  eventuallyScanPossibleGitRepositories() {
    for (let e of this.possibleGitRepositoryPaths) this.openRepository(e, false, true);
    this.possibleGitRepositoryPaths.clear();
  }
  async onDidChangeWorkspaceFolders({ added: e, removed: t }) {
    try {
      let i = e.filter((a) => !this.getOpenRepository(a.uri)), r = P.window.visibleTextEditors.map((a) => this.getRepository(a.document.uri)).filter((a) => !!a), o = new Set(r);
      t.map((a) => this.getOpenRepository(a.uri)).filter((a) => !!a).filter((a) => !o.has(a.repository)).filter((a) => !(P.workspace.workspaceFolders || []).some((l) => me(l.uri.fsPath, a.repository.root))).forEach((a) => a.dispose()), this.logger.trace(`[Model][onDidChangeWorkspaceFolders] Workspace folders: [${i.map((a) => a.uri.fsPath).join(", ")}]`), await Promise.all(i.map((a) => this.openRepository(a.uri.fsPath)));
    } catch (i) {
      this.logger.warn(`[Model][onDidChangeWorkspaceFolders] Error: ${i}`);
    }
  }
  onDidChangeConfiguration() {
    let e = (P.workspace.workspaceFolders || []).filter((i) => P.workspace.getConfiguration("git", i.uri).get("enabled") === true).filter((i) => !this.getOpenRepository(i.uri)), t = this.openRepositories.map((i) => ({ repository: i, root: P.Uri.file(i.repository.root) })).filter(({ root: i }) => P.workspace.getConfiguration("git", i).get("enabled") !== true).map(({ repository: i }) => i);
    this.logger.trace(`[Model][onDidChangeConfiguration] Workspace folders: [${e.map((i) => i.uri.fsPath).join(", ")}]`), e.forEach((i) => this.openRepository(i.uri.fsPath)), t.forEach((i) => i.dispose());
  }
  async onDidChangeVisibleTextEditors(e) {
    try {
      if (!P.workspace.isTrusted) {
        this.logger.trace("[Model][onDidChangeVisibleTextEditors] Workspace is not trusted.");
        return;
      }
      let i = P.workspace.getConfiguration("git").get("autoRepositoryDetection");
      if (i !== true && i !== "openEditors") return;
      await Promise.all(e.map(async (r) => {
        let o = r.document.uri;
        if (o.scheme !== "file") return;
        let s = this.getRepository(o);
        if (s) {
          this.logger.trace(`[Model][onDidChangeVisibleTextEditors] Repository for editor resource ${o.fsPath} already exists: ${s.root}`);
          return;
        }
        this.logger.trace(`[Model][onDidChangeVisibleTextEditors] Open repository for editor resource ${o.fsPath}`), await this.openRepository(fe.dirname(o.fsPath));
      }));
    } catch (t) {
      this.logger.warn(`[Model][onDidChangeVisibleTextEditors] Error: ${t}`);
    }
  }
  onDidChangeActiveTextEditor() {
    let e = P.window.activeTextEditor;
    if (e === void 0) {
      P.commands.executeCommand("setContext", "git.activeResourceHasUnstagedChanges", false), P.commands.executeCommand("setContext", "git.activeResourceHasStagedChanges", false);
      return;
    }
    let t = this.getRepository(e.document.uri);
    if (!t) {
      P.commands.executeCommand("setContext", "git.activeResourceHasUnstagedChanges", false), P.commands.executeCommand("setContext", "git.activeResourceHasStagedChanges", false);
      return;
    }
    let i = t.indexGroup.resourceStates.find((o) => z(o.resourceUri.fsPath, e.document.uri.fsPath)), r = t.workingTreeGroup.resourceStates.find((o) => z(o.resourceUri.fsPath, e.document.uri.fsPath));
    P.commands.executeCommand("setContext", "git.activeResourceHasStagedChanges", i !== void 0), P.commands.executeCommand("setContext", "git.activeResourceHasUnstagedChanges", r !== void 0);
  }
  async openRepository(e, t = false, i = false) {
    this.logger.trace(`[Model][openRepository] Repository: ${e}`);
    let r = await this.getRepositoryExact(e);
    if (r) {
      this.logger.trace(`[Model][openRepository] Repository for path ${e} already exists: ${r.root}`);
      return;
    }
    let o = P.workspace.getConfiguration("git", P.Uri.file(e));
    if (!(o.get("enabled") === true)) {
      this.logger.trace("[Model][openRepository] Git is not enabled");
      return;
    }
    let a = o.get("showCursorWorktrees", false) === true;
    if (!this.shouldHideCursorWorktreePath(e, a)) {
      if (!P.workspace.isTrusted) try {
        Ye.accessSync(fe.join(e, "HEAD"), Ye.constants.F_OK);
        let l = await this.git.exec(e, ["-C", e, "rev-parse", "--show-cdup"]);
        if (l.stderr.trim() === "" && l.stdout.trim() === "") {
          this.logger.trace(`[Model][openRepository] Bare repository: ${e}`);
          return;
        }
      } catch {
      }
      try {
        let { repositoryRoot: l, unsafeRepositoryMatch: u } = await this.getRepositoryRoot(e);
        this.logger.trace(`[Model][openRepository] Repository root for path ${e} is: ${l}`);
        let d = await this.getRepositoryExact(l);
        if (d) {
          this.logger.trace(`[Model][openRepository] Repository for path ${l} already exists: ${d.root}`);
          return;
        }
        if (this.shouldRepositoryBeIgnored(l)) {
          this.logger.trace(`[Model][openRepository] Repository for path ${l} is ignored`);
          return;
        }
        let h = o.get("openRepositoryInParentFolders", "prompt");
        if (h !== "always" && this.globalState.get(`parentRepository:${l}`) !== true) {
          let S = await this.isRepositoryOutsideWorkspace(l), k = this.isPathUnderCursorWorktrees(l);
          if (!i && S && !k) {
            this.logger.trace(`[Model][openRepository] Repository in parent folder: ${l}`), this._parentRepositoriesManager.hasRepository(l) || (this.state === "initialized" && h === "prompt" && this.showParentRepositoryNotification(), this._parentRepositoriesManager.addRepository(l));
            return;
          }
        }
        if (u && u.length === 3) {
          this.logger.trace(`[Model][openRepository] Unsafe repository: ${l}`), this._state === "initialized" && !this._unsafeRepositoriesManager.hasRepository(l) && this.showUnsafeRepositoryNotification(), this._unsafeRepositoriesManager.addRepository(l, u[2]);
          return;
        }
        if (!t && this._closedRepositoriesManager.isRepositoryClosed(l)) {
          this.logger.trace(`[Model][openRepository] Repository for path ${l} is closed`);
          return;
        }
        let [p, g] = await Promise.all([this.git.getRepositoryDotGit(l), this.getRepositoryRootRealPath(l)]), y = this.git.open(l, g, p, this.logger), C = new Bi(y, this, this, this, this, this, this, this.globalState, this.logger, this.telemetryReporter);
        this.open(C), this.controlProvider.addRepository(l, C), this._closedRepositoriesManager.deleteRepository(C.root), this.logger.info(`[Model][openRepository] Opened repository: ${C.root}`), this.logger.info(`[Model][openRepository] Opened repository (kind): ${y.kind}`), this._initialStatusLimiter.queue(async () => {
          let S = this.getOpenRepository(C);
          if (!S) {
            this.logger.trace(`[Model][openRepository] Repository was closed before its initial status ran: ${C.root}`);
            return;
          }
          S.openEventFired = true, this._onDidOpenRepository.fire(C), await C.status();
        });
      } catch (l) {
        this.logger.trace(`[Model][openRepository] Opening repository for path='${e}' failed. Error:${l}`);
      }
    }
  }
  async openParentRepository(e) {
    this._parentRepositoriesManager.openRepository(e), await this.openRepository(e);
  }
  async getRepositoryRoot(e) {
    try {
      let t = await this.git.getRepositoryRoot(e);
      return { repositoryRoot: P.Uri.file(t).fsPath, unsafeRepositoryMatch: null };
    } catch (t) {
      let i = /^fatal: detected dubious ownership in repository at \'([^']+)\'[\s\S]*git config --global --add safe\.directory '?([^'\n]+)'?$/m.exec(t.stderr);
      if (i && i.length === 3) return { repositoryRoot: fe.normalize(i[1]), unsafeRepositoryMatch: i };
      throw t;
    }
  }
  async getRepositoryRootRealPath(e) {
    try {
      let t = await Ye.promises.realpath(e);
      return z(e, t) ? void 0 : t;
    } catch (t) {
      this.logger.warn(`[Model][getRepositoryRootRealPath] Failed to get repository realpath for "${e}": ${t}`);
      return;
    }
  }
  isPathUnderCursorWorktrees(e) {
    return this._cursorWorktreesDir ? z(e, this._cursorWorktreesDir) || me(this._cursorWorktreesDir, e) : false;
  }
  isCurrentWorkspaceRepositoryCandidate(e) {
    return (P.workspace.workspaceFolders || []).some((t) => {
      let i = t.uri.fsPath;
      return z(e, i) || me(i, e) || me(e, i);
    });
  }
  shouldHideCursorWorktreePath(e, t) {
    return t || !this.isPathUnderCursorWorktrees(e) ? false : !this.isCurrentWorkspaceRepositoryCandidate(e);
  }
  shouldRepositoryBeIgnored(e) {
    let t = P.workspace.getConfiguration("git"), i = t.get("ignoredRepositories") || [], r = t.get("showCursorWorktrees", false) === true;
    if (this.shouldHideCursorWorktreePath(e, r)) return true;
    for (let o of i) if (fe.isAbsolute(o)) {
      if (z(o, e)) return true;
    } else for (let s of P.workspace.workspaceFolders || []) if (z(fe.join(s.uri.fsPath, o), e)) return true;
    return false;
  }
  open(e) {
    this.logger.trace(`[Model][open] Repository: ${e.root}`);
    let i = V(e.onDidChangeState, (D) => D === 1)(() => G()), r = e.onDidChangeRepository((D) => this._onDidChangeRepository.fire({ repository: e, uri: D })), o = e.onDidChangeOriginalResource((D) => this._onDidChangeOriginalResource.fire({ repository: e, uri: D })), s = P.workspace.getConfiguration("git", P.Uri.file(e.root)).get("detectSubmodules"), a = P.workspace.getConfiguration("git", P.Uri.file(e.root)).get("detectSubmodulesLimit"), l = P.workspace.getConfiguration("git", P.Uri.file(e.root)).get("detectWorktrees"), u = P.workspace.getConfiguration("git", P.Uri.file(e.root)).get("detectWorktreesLimit"), d = () => {
      if (!s) {
        this.logger.trace("[Model][open] Automatic detection of git submodules is not enabled.");
        return;
      }
      e.submodules.slice(0, a).map((D) => fe.join(e.root, D.path)).forEach((D) => {
        this.logger.trace(`[Model][open] Opening submodule: '${D}'`), this.eventuallyScanPossibleGitRepository(D);
      });
    }, h = () => {
      if (!l) {
        this.logger.trace("[Model][open] Automatic detection of git worktrees is not enabled.");
        return;
      }
      if (e.kind === "worktree") {
        this.logger.trace("[Model][open] Automatic detection of git worktrees is not skipped.");
        return;
      }
      let D = P.workspace.getConfiguration("git", P.Uri.file(e.root)).get("showCursorWorktrees", false) === true;
      e.worktrees.slice(0, u).filter((M) => D || !this.isPathUnderCursorWorktrees(M.path)).forEach((M) => {
        this.logger.trace(`[Model][open] Opening worktree: '${M.path}'`), this.eventuallyScanPossibleGitRepository(M.path);
      });
    }, p = () => {
      let D = [];
      for (let { repository: M } of this.openRepositories.values()) for (let H of M.mergeGroup.resourceStates) D.push(H.resourceUri);
      P.commands.executeCommand("setContext", "git.mergeChanges", D);
    }, g = e.onDidRunGitStatus(() => {
      d(), h(), p(), this.onDidChangeActiveTextEditor();
    }), y = e.onDidActuallyChangeStatus(() => {
      Ll.scm.gitStatusWasRun(e.root);
    });
    d(), h(), this.onDidChangeActiveTextEditor();
    let C = () => {
      let D = false;
      for (let { repository: M } of this.openRepositories.values()) M.operations.shouldDisableCommands() && (D = true);
      P.commands.executeCommand("setContext", "operationInProgress", D);
    }, k = Je(e.onDidRunOperation, e.onRunOperation)(() => C());
    C();
    let G = () => {
      i.dispose(), r.dispose(), o.dispose(), g.dispose(), y.dispose(), k.dispose(), e.dispose(), this.openRepositories = this.openRepositories.filter((D) => D !== I), this._onDidCloseRepository.fire(e);
    }, I = { repository: e, openEventFired: false, dispose: G };
    this.openRepositories.push(I), p();
  }
  close(e) {
    let t = this.getOpenRepository(e);
    t && (this.logger.info(`[Model][close] Repository: ${e.root}`), this._closedRepositoriesManager.addRepository(t.repository.root), t.dispose());
  }
  async pickRepository() {
    if (this.openRepositories.length === 0) throw new Error(P.l10n.t("There are no available repositories"));
    if (this.openRepositories.length === 1) return this.openRepositories[0].repository;
    let e = this.openRepositories.map((a, l) => new Oi(a.repository, l)), t = P.window.activeTextEditor, i = t && this.getRepository(t.document.fileName), r = e.findIndex((a) => a.repository === i);
    r > -1 && e.unshift(...e.splice(r, 1));
    let o = P.l10n.t("Choose a repository"), s = await P.window.showQuickPick(e, { placeHolder: o });
    return s && s.repository;
  }
  getRepository(e) {
    let t = this.getOpenRepository(e);
    return t && t.repository;
  }
  async getRepositoryExact(e) {
    let t = this.openRepositories.find((i) => z(i.repository.root, e));
    if (t) return t.repository;
    try {
      let i = await Ye.promises.realpath(e, { encoding: "utf8" });
      return this.openRepositories.find((o) => z(o.repository.rootRealPath ?? o.repository.root, i))?.repository;
    } catch (i) {
      this.logger.warn(`[Model][getRepositoryExact] Failed to get repository realpath for: "${e}". Error:${i}`);
      return;
    }
  }
  getOpenRepository(e) {
    if (e) {
      if (e instanceof Bi) return this.openRepositories.filter((t) => t.repository === e)[0];
      if (e instanceof Ee && (e = e.rootUri), typeof e == "string" && (e = P.Uri.file(e)), e instanceof P.Uri) {
        let t;
        e.scheme === "git" ? t = Ne(e).path : t = e.fsPath;
        e: for (let i of this.openRepositories.sort((r, o) => o.repository.root.length - r.repository.root.length)) if (me(i.repository.root, t)) {
          for (let r of i.repository.submodules) {
            let o = fe.join(i.repository.root, r.path);
            if (me(o, t)) continue e;
          }
          return i;
        }
        return;
      }
      for (let t of this.openRepositories) {
        let i = t.repository;
        if (e === i.sourceControl || e === i.mergeGroup || e === i.indexGroup || e === i.workingTreeGroup || e === i.untrackedGroup) return t;
      }
    }
  }
  getRepositoryForSubmodule(e) {
    for (let t of this.repositories) for (let i of t.submodules) if (fe.join(t.root, i.path) === e.fsPath) return t;
  }
  registerRemoteSourcePublisher(e) {
    return this.remoteSourcePublishers.add(e), this._onDidAddRemoteSourcePublisher.fire(e), Be(() => {
      this.remoteSourcePublishers.delete(e), this._onDidRemoveRemoteSourcePublisher.fire(e);
    });
  }
  getRemoteSourcePublishers() {
    return [...this.remoteSourcePublishers.values()];
  }
  registerBranchProtectionProvider(e, t) {
    let i = [];
    return this.branchProtectionProviders.set(e.toString(), (this.branchProtectionProviders.get(e.toString()) ?? /* @__PURE__ */ new Set()).add(t)), i.push(t.onDidChangeBranchProtection((r) => this._onDidChangeBranchProtectionProviders.fire(r))), this._onDidChangeBranchProtectionProviders.fire(e), Be(() => {
      let r = this.branchProtectionProviders.get(e.toString());
      r && r.has(t) && (r.delete(t), this.branchProtectionProviders.set(e.toString(), r), this._onDidChangeBranchProtectionProviders.fire(e)), j(i);
    });
  }
  getBranchProtectionProviders(e) {
    return [...(this.branchProtectionProviders.get(e.toString()) ?? /* @__PURE__ */ new Set()).values()];
  }
  registerPostCommitCommandsProvider(e) {
    return this.postCommitCommandsProviders.add(e), this._onDidChangePostCommitCommandsProviders.fire(), Be(() => {
      this.postCommitCommandsProviders.delete(e), this._onDidChangePostCommitCommandsProviders.fire();
    });
  }
  getPostCommitCommandsProviders() {
    return [...this.postCommitCommandsProviders.values()];
  }
  registerCredentialsProvider(e) {
    return this.askpass.registerCredentialsProvider(e);
  }
  registerPushErrorHandler(e) {
    return this.pushErrorHandlers.add(e), Be(() => this.pushErrorHandlers.delete(e));
  }
  getPushErrorHandlers() {
    return [...this.pushErrorHandlers];
  }
  registerSourceControlHistoryItemDetailsProvider(e) {
    return this.historyItemDetailsProviders.add(e), Be(() => this.historyItemDetailsProviders.delete(e));
  }
  getSourceControlHistoryItemDetailsProviders() {
    return [...this.historyItemDetailsProviders];
  }
  getUnsafeRepositoryPath(e) {
    return this._unsafeRepositoriesManager.getRepositoryPath(e);
  }
  deleteUnsafeRepository(e) {
    return this._unsafeRepositoriesManager.deleteRepository(e);
  }
  async isRepositoryOutsideWorkspace(e) {
    let t = (P.workspace.workspaceFolders || []).filter((r) => r.uri.scheme === "file");
    if (t.length === 0) return true;
    let i = /* @__PURE__ */ new Set([...t.map((r) => r.uri.fsPath), ...await Promise.all(t.map((r) => this.getWorkspaceFolderRealPath(r)))]);
    return !Array.from(i).some((r) => r && (z(r, e) || me(r, e)));
  }
  async getWorkspaceFolderRealPath(e) {
    let t = this._workspaceFolders.get(e.uri.fsPath);
    if (!t) try {
      t = await Ye.promises.realpath(e.uri.fsPath, { encoding: "utf8" }), this._workspaceFolders.set(e.uri.fsPath, t);
    } catch (i) {
      this.logger.trace(`[Model][getWorkspaceFolderRealPath] Failed to resolve workspace folder "${e.uri.fsPath}". Error:${i}`);
    }
    return t;
  }
  async showParentRepositoryNotification() {
    let e = this.parentRepositories.length === 1 ? P.l10n.t("A git repository was found in the parent folders of the workspace or the open file(s). Would you like to open the repository?") : P.l10n.t("Git repositories were found in the parent folders of the workspace or the open file(s). Would you like to open the repositories?"), t = P.l10n.t("Yes"), i = P.l10n.t("Always"), r = P.l10n.t("Never"), o = await P.window.showInformationMessage(e, t, i, r);
    if (o === t) P.commands.executeCommand("git.openRepositoriesInParentFolders");
    else if ((o === i || o === r) && (await P.workspace.getConfiguration("git").update("openRepositoryInParentFolders", o === i ? "always" : "never", true), o === i)) for (let a of this.parentRepositories) await this.openParentRepository(a);
  }
  async showUnsafeRepositoryNotification() {
    if (this.repositories.length === 0) return;
    let e = this.unsafeRepositories.length === 1 ? P.l10n.t("The git repository in the current folder is potentially unsafe as the folder is owned by someone other than the current user.") : P.l10n.t("The git repositories in the current folder are potentially unsafe as the folders are owned by someone other than the current user."), t = P.l10n.t("Manage Unsafe Repositories"), i = P.l10n.t("Learn More"), r = await P.window.showErrorMessage(e, t, i);
    r === t ? P.commands.executeCommand("git.manageUnsafeRepositories") : r === i && P.commands.executeCommand("vscode.open", P.Uri.parse("https://aka.ms/vscode-git-unsafe-repository"));
  }
  dispose() {
    [...this.openRepositories].forEach((t) => t.dispose()), this.openRepositories = [], this.possibleGitRepositoryPaths.clear(), this.disposables = j(this.disposables);
  }
};
b([gt], Nt.prototype, "isInitialized", 1), b([nt(500)], Nt.prototype, "eventuallyScanPossibleGitRepositories", 1), b([Ir], Nt.prototype, "openRepository", 1);
var Ln = class n3 {
  constructor(e) {
    this.logger = e;
    this.repositories = /* @__PURE__ */ new Map();
    this.providerRegistration = P.workspace.registerControlProvider(n3.id, this);
  }
  static {
    this.id = "git";
  }
  dispose() {
    this.providerRegistration.dispose();
  }
  getRegistrationSource() {
    return n3.id;
  }
  addRepository(e, t) {
    this.repositories.set(e, t);
  }
  async getFullDiff(e, t) {
    this.logger.info(`Getting full diff for ${e} and ref ${t}`);
    let i = this.repositories.get(e);
    if (!i) return;
    let r = await i.fullDiff(t);
    return { changes: r.changes.map((o) => ({ diffText: o.diffText, change: { ...o.change, status: o.change.status } })), fullDiffText: r.fullDiffText };
  }
  async getDataframeSummary(e) {
  }
  appendCppTelem() {
  }
  appendCppTelemChunk() {
  }
  redact(e) {
    return e;
  }
  streamCpp() {
  }
  flushCpp() {
    return { type: "success", buffer: [], rangeToReplaceOneIndexed: void 0, cursorPredictionTarget: void 0, doneEdit: void 0 };
  }
  cancelCpp() {
  }
  async tokenizeBPE(e, t) {
  }
  async getCppReport() {
  }
};
var Gi = ie(require("os")), X = ie(require("path")), c = require("vscode");
var Gl = (n6) => {
  n6 = 1831565813 + (n6 |= 0) | 0;
  let e = Math.imul(n6 ^ n6 >>> 15, 1 | n6);
  return e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296;
}, Gn = class {
  constructor(e) {
    this.dictionaries = void 0, this.length = void 0, this.separator = void 0, this.style = void 0, this.seed = void 0;
    let { length: t, separator: i, dictionaries: r, style: o, seed: s } = e;
    this.dictionaries = r, this.separator = i, this.length = t, this.style = o, this.seed = s;
  }
  generate() {
    if (!this.dictionaries) throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');
    if (this.length <= 0) throw new Error("Invalid length provided");
    if (this.length > this.dictionaries.length) throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);
    let e = this.seed;
    return this.dictionaries.slice(0, this.length).reduce((t, i) => {
      let r;
      e ? (r = ((s) => {
        if (typeof s == "string") {
          let a = s.split("").map((u) => u.charCodeAt(0)).reduce((u, d) => u + d, 1), l = Math.floor(Number(a));
          return Gl(l);
        }
        return Gl(s);
      })(e), e = 4294967296 * r) : r = Math.random();
      let o = i[Math.floor(r * i.length)] || "";
      if (this.style === "lowerCase") o = o.toLowerCase();
      else if (this.style === "capital") {
        let [s, ...a] = o.split("");
        o = s.toUpperCase() + a.join("");
      } else this.style === "upperCase" && (o = o.toUpperCase());
      return t ? `${t}${this.separator}${o}` : `${o}`;
    }, "");
  }
}, Hl = { separator: "_", dictionaries: [] }, Nl = (n6) => {
  let e = [...n6 && n6.dictionaries || Hl.dictionaries], t = { ...Hl, ...n6, length: n6 && n6.length || e.length, dictionaries: e };
  if (!n6 || !n6.dictionaries || !n6.dictionaries.length) throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');
  return new Gn(t).generate();
}, Fl = ["able", "above", "absent", "absolute", "abstract", "abundant", "academic", "acceptable", "accepted", "accessible", "accurate", "accused", "active", "actual", "acute", "added", "additional", "adequate", "adjacent", "administrative", "adorable", "advanced", "adverse", "advisory", "aesthetic", "afraid", "aggregate", "aggressive", "agreeable", "agreed", "agricultural", "alert", "alive", "alleged", "allied", "alone", "alright", "alternative", "amateur", "amazing", "ambitious", "amused", "ancient", "angry", "annoyed", "annual", "anonymous", "anxious", "appalling", "apparent", "applicable", "appropriate", "arbitrary", "architectural", "armed", "arrogant", "artificial", "artistic", "ashamed", "asleep", "assistant", "associated", "atomic", "attractive", "automatic", "autonomous", "available", "average", "awake", "aware", "awful", "awkward", "back", "bad", "balanced", "bare", "basic", "beautiful", "beneficial", "better", "bewildered", "big", "binding", "biological", "bitter", "bizarre", "blank", "blonde", "blushing", "boiling", "bold", "bored", "boring", "bottom", "brainy", "brave", "breakable", "breezy", "brief", "bright", "brilliant", "broad", "broken", "bumpy", "burning", "busy", "calm", "capable", "careful", "casual", "causal", "cautious", "central", "certain", "changing", "characteristic", "charming", "cheap", "cheerful", "chemical", "chief", "chilly", "chosen", "chronic", "chubby", "circular", "civic", "civil", "classic", "classical", "clean", "clear", "clever", "clinical", "close", "closed", "cloudy", "clumsy", "coastal", "cognitive", "coherent", "cold", "collective", "colorful", "colossal", "coloured", "colourful", "combined", "comfortable", "commercial", "common", "compact", "comparable", "comparative", "compatible", "competent", "competitive", "complete", "complex", "complicated", "comprehensive", "compulsory", "conceptual", "concerned", "concrete", "condemned", "confident", "confidential", "confused", "conscious", "conservation", "considerable", "consistent", "constant", "constitutional", "contemporary", "content", "continental", "continued", "continuing", "continuous", "controlled", "controversial", "convenient", "conventional", "convinced", "convincing", "cooing", "cool", "cooperative", "corporate", "correct", "corresponding", "costly", "courageous", "creative", "creepy", "criminal", "critical", "crooked", "crowded", "crucial", "crude", "cruel", "cuddly", "cultural", "curious", "curly", "current", "curved", "cute", "daily", "damaged", "damp", "dangerous", "dark", "dead", "deafening", "dear", "decent", "decisive", "deep", "defeated", "defensive", "defiant", "definite", "deliberate", "delicate", "delicious", "delighted", "delightful", "democratic", "dependent", "depressed", "desirable", "desperate", "detailed", "determined", "developed", "developing", "devoted", "different", "difficult", "digital", "diplomatic", "direct", "dirty", "disappointed", "disastrous", "disciplinary", "disgusted", "distant", "distinct", "distinctive", "distinguished", "disturbed", "disturbing", "diverse", "divine", "dizzy", "domestic", "dominant", "double", "doubtful", "drab", "dramatic", "dreadful", "driving", "dry", "dual", "due", "dull", "dusty", "dutch", "dying", "dynamic", "eager", "early", "eastern", "easy", "economic", "educational", "eerie", "effective", "efficient", "elaborate", "elated", "elderly", "eldest", "electoral", "electric", "electrical", "electronic", "elegant", "eligible", "embarrassed", "embarrassing", "emotional", "empirical", "empty", "enchanting", "encouraging", "endless", "energetic", "enormous", "enthusiastic", "entire", "entitled", "envious", "environmental", "equal", "equivalent", "essential", "established", "estimated", "ethical", "eventual", "everyday", "evident", "evil", "evolutionary", "exact", "excellent", "exceptional", "excess", "excessive", "excited", "exciting", "exclusive", "existing", "exotic", "expected", "expensive", "experienced", "experimental", "explicit", "extended", "extensive", "external", "extra", "extraordinary", "extreme", "exuberant", "faint", "fair", "faithful", "familiar", "famous", "fancy", "fantastic", "far", "fascinating", "fashionable", "fast", "fatal", "favourable", "favourite", "federal", "fellow", "few", "fierce", "final", "financial", "fine", "firm", "fiscal", "fit", "fixed", "flaky", "flat", "flexible", "fluffy", "fluttering", "flying", "following", "fond", "foolish", "foreign", "formal", "formidable", "forthcoming", "fortunate", "forward", "fragile", "frail", "frantic", "free", "frequent", "fresh", "friendly", "frightened", "front", "frozen", "full", "fun", "functional", "fundamental", "funny", "furious", "future", "fuzzy", "gastric", "general", "generous", "genetic", "gentle", "genuine", "geographical", "giant", "gigantic", "given", "glad", "glamorous", "gleaming", "global", "glorious", "golden", "good", "gorgeous", "gothic", "governing", "graceful", "gradual", "grand", "grateful", "greasy", "great", "grieving", "grim", "gross", "grotesque", "growing", "grubby", "grumpy", "guilty", "handsome", "happy", "hard", "harsh", "head", "healthy", "heavy", "helpful", "helpless", "hidden", "high", "hilarious", "hissing", "historic", "historical", "hollow", "holy", "homely", "hon", "honest", "horizontal", "horrible", "hostile", "hot", "huge", "human", "hungry", "hurt", "hushed", "husky", "icy", "ideal", "identical", "ideological", "ill", "illegal", "imaginative", "immediate", "immense", "implicit", "important", "impossible", "impressed", "impressive", "improved", "inadequate", "inc", "inclined", "increased", "increasing", "incredible", "independent", "indirect", "individual", "industrial", "inevitable", "influential", "informal", "inherent", "initial", "injured", "inland", "inner", "innocent", "innovative", "inquisitive", "instant", "institutional", "insufficient", "intact", "integral", "integrated", "intellectual", "intelligent", "intense", "intensive", "interested", "interesting", "interim", "interior", "intermediate", "internal", "international", "invisible", "involved", "irrelevant", "isolated", "itchy", "jealous", "jittery", "joint", "jolly", "joyous", "judicial", "juicy", "junior", "just", "keen", "key", "kind", "known", "labour", "large", "late", "latin", "lazy", "leading", "left", "legal", "legislative", "legitimate", "lengthy", "lesser", "level", "lexical", "liable", "light", "like", "likely", "limited", "linear", "linguistic", "liquid", "literary", "little", "live", "lively", "living", "local", "logical", "lonely", "long", "loose", "lost", "loud", "lovely", "low", "loyal", "ltd", "lucky", "mad", "magic", "magnetic", "magnificent", "main", "major", "mammoth", "managerial", "managing", "manual", "many", "marginal", "marine", "marked", "married", "marvellous", "mass", "massive", "mathematical", "mature", "maximum", "mean", "meaningful", "mechanical", "medical", "medieval", "melodic", "melted", "mental", "mere", "metropolitan", "mid", "middle", "mighty", "mild", "military", "miniature", "minimal", "minimum", "ministerial", "minor", "miserable", "misleading", "missing", "misty", "mixed", "moaning", "mobile", "moderate", "modern", "modest", "molecular", "monetary", "monthly", "moral", "motionless", "muddy", "multiple", "mushy", "musical", "mutual", "mysterious", "naked", "narrow", "nasty", "national", "natural", "naughty", "naval", "near", "nearby", "neat", "necessary", "negative", "neighbouring", "nervous", "net", "neutral", "new", "nice", "noble", "noisy", "normal", "northern", "nosy", "notable", "novel", "nuclear", "numerous", "nursing", "nutritious", "nutty", "obedient", "objective", "obliged", "obnoxious", "obvious", "occasional", "occupational", "odd", "official", "ok", "okay", "old", "only", "open", "operational", "opposite", "optimistic", "ordinary", "organic", "organisational", "original", "orthodox", "other", "outdoor", "outer", "outrageous", "outside", "outstanding", "overall", "overseas", "overwhelming", "painful", "pale", "panicky", "parallel", "parental", "parliamentary", "partial", "particular", "passing", "passive", "past", "patient", "payable", "peaceful", "peculiar", "perfect", "permanent", "persistent", "personal", "petite", "philosophical", "physical", "plain", "planned", "plastic", "pleasant", "pleased", "poised", "polite", "poor", "popular", "positive", "possible", "potential", "powerful", "practical", "precious", "precise", "preferred", "pregnant", "preliminary", "premier", "prepared", "present", "presidential", "pretty", "previous", "prickly", "primary", "prime", "principal", "printed", "prior", "private", "probable", "productive", "professional", "profitable", "profound", "progressive", "prominent", "promising", "proper", "proposed", "prospective", "protective", "proud", "provincial", "psychiatric", "psychological", "public", "puny", "pure", "purring", "puzzled", "quaint", "qualified", "quarrelsome", "querulous", "quick", "quickest", "quiet", "quintessential", "quixotic", "racial", "radical", "rainy", "random", "rapid", "rare", "raspy", "rational", "ratty", "raw", "ready", "real", "realistic", "rear", "reasonable", "recent", "reduced", "redundant", "regional", "registered", "regular", "regulatory", "related", "relative", "relaxed", "relevant", "reliable", "relieved", "religious", "reluctant", "remaining", "remarkable", "remote", "renewed", "representative", "repulsive", "required", "resident", "residential", "resonant", "respectable", "respective", "responsible", "resulting", "retail", "retired", "revolutionary", "rich", "ridiculous", "right", "rigid", "ripe", "rising", "rival", "roasted", "robust", "rolling", "romantic", "rotten", "rough", "round", "royal", "rubber", "rude", "ruling", "running", "rural", "sacred", "sad", "safe", "salty", "satisfactory", "satisfied", "scared", "scary", "scattered", "scientific", "scornful", "scrawny", "screeching", "secondary", "secret", "secure", "select", "selected", "selective", "selfish", "semantic", "senior", "sensible", "sensitive", "separate", "serious", "severe", "shaggy", "shaky", "shallow", "shared", "sharp", "sheer", "shiny", "shivering", "shocked", "short", "shrill", "shy", "sick", "significant", "silent", "silky", "silly", "similar", "simple", "single", "skilled", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "small", "smart", "smiling", "smoggy", "smooth", "social", "soft", "solar", "sole", "solid", "sophisticated", "sore", "sorry", "sound", "sour", "southern", "spare", "sparkling", "spatial", "special", "specific", "specified", "spectacular", "spicy", "spiritual", "splendid", "spontaneous", "sporting", "spotless", "spotty", "square", "squealing", "stable", "stale", "standard", "static", "statistical", "statutory", "steady", "steep", "sticky", "stiff", "still", "stingy", "stormy", "straight", "straightforward", "strange", "strategic", "strict", "striking", "striped", "strong", "structural", "stuck", "subjective", "subsequent", "substantial", "subtle", "successful", "successive", "sudden", "sufficient", "suitable", "sunny", "super", "superb", "superior", "supporting", "supposed", "supreme", "sure", "surprised", "surprising", "surrounding", "surviving", "suspicious", "sweet", "swift", "symbolic", "sympathetic", "systematic", "tall", "tame", "tart", "tasteless", "tasty", "technical", "technological", "teenage", "temporary", "tender", "tense", "terrible", "territorial", "testy", "then", "theoretical", "thick", "thin", "thorough", "thoughtful", "thoughtless", "thundering", "tight", "tiny", "tired", "top", "total", "tough", "toxic", "traditional", "tragic", "tremendous", "tricky", "tropical", "troubled", "typical", "ugliest", "ugly", "ultimate", "unable", "unacceptable", "unaware", "uncertain", "unchanged", "uncomfortable", "unconscious", "underground", "underlying", "unemployed", "uneven", "unexpected", "unfair", "unfortunate", "unhappy", "uniform", "uninterested", "unique", "united", "universal", "unknown", "unlikely", "unnecessary", "unpleasant", "unsightly", "unusual", "unwilling", "upper", "upset", "uptight", "urban", "urgent", "used", "useful", "useless", "usual", "vague", "valid", "valuable", "variable", "varied", "various", "varying", "vast", "verbal", "vertical", "very", "vicarious", "vicious", "victorious", "violent", "visible", "visiting", "visual", "vital", "vitreous", "vivacious", "vivid", "vocal", "vocational", "voiceless", "voluminous", "voluntary", "vulnerable", "wandering", "warm", "wasteful", "watery", "weak", "wealthy", "weary", "wee", "weekly", "weird", "welcome", "well", "western", "wet", "whispering", "whole", "wicked", "wide", "widespread", "wild", "wilful", "willing", "willowy", "wily", "wise", "wispy", "wittering", "witty", "wonderful", "wooden", "working", "worldwide", "worried", "worrying", "worthwhile", "worthy", "written", "wrong", "xenacious", "xenial", "xenogeneic", "xeric", "xerothermic", "yabbering", "yammering", "yappiest", "yappy", "yawning", "yearling", "yearning", "yeasty", "yelling", "yelping", "yielding", "yodelling", "young", "youngest", "youthful", "ytterbic", "yucky", "yummy", "zany", "zealous", "zeroth", "zestful", "zesty", "zippy", "zonal", "zoophagous", "zygomorphic", "zygotic"], Ul = ["aardvark", "aardwolf", "albatross", "alligator", "alpaca", "amphibian", "anaconda", "angelfish", "anglerfish", "ant", "anteater", "antelope", "antlion", "ape", "aphid", "armadillo", "asp", "baboon", "badger", "bandicoot", "barnacle", "barracuda", "basilisk", "bass", "bat", "bear", "beaver", "bedbug", "bee", "beetle", "bird", "bison", "blackbird", "boa", "boar", "bobcat", "bobolink", "bonobo", "bovid", "bug", "butterfly", "buzzard", "camel", "canid", "canidae", "capybara", "cardinal", "caribou", "carp", "cat", "caterpillar", "catfish", "catshark", "cattle", "centipede", "cephalopod", "chameleon", "cheetah", "chickadee", "chicken", "chimpanzee", "chinchilla", "chipmunk", "cicada", "clam", "clownfish", "cobra", "cockroach", "cod", "condor", "constrictor", "coral", "cougar", "cow", "coyote", "crab", "crane", "crawdad", "crayfish", "cricket", "crocodile", "crow", "cuckoo", "damselfly", "deer", "dingo", "dinosaur", "dog", "dolphin", "donkey", "dormouse", "dove", "dragon", "dragonfly", "duck", "eagle", "earthworm", "earwig", "echidna", "eel", "egret", "elephant", "elk", "emu", "ermine", "falcon", "felidae", "ferret", "finch", "firefly", "fish", "flamingo", "flea", "fly", "flyingfish", "fowl", "fox", "frog", "galliform", "gamefowl", "gayal", "gazelle", "gecko", "gerbil", "gibbon", "giraffe", "goat", "goldfish", "goose", "gopher", "gorilla", "grasshopper", "grouse", "guan", "guanaco", "guineafowl", "gull", "guppy", "haddock", "halibut", "hamster", "hare", "harrier", "hawk", "hedgehog", "heron", "herring", "hippopotamus", "hookworm", "hornet", "horse", "hoverfly", "hummingbird", "hyena", "iguana", "impala", "jackal", "jaguar", "jay", "jellyfish", "junglefowl", "kangaroo", "kingfisher", "kite", "kiwi", "koala", "koi", "krill", "ladybug", "lamprey", "landfowl", "lark", "leech", "lemming", "lemur", "leopard", "leopon", "limpet", "lion", "lizard", "llama", "lobster", "locust", "loon", "louse", "lungfish", "lynx", "macaw", "mackerel", "magpie", "mammal", "manatee", "mandrill", "marlin", "marmoset", "marmot", "marsupial", "marten", "mastodon", "meadowlark", "meerkat", "mink", "minnow", "mite", "mockingbird", "mole", "mollusk", "mongoose", "monkey", "moose", "mosquito", "moth", "mouse", "mule", "muskox", "narwhal", "newt", "nightingale", "ocelot", "octopus", "opossum", "orangutan", "orca", "ostrich", "otter", "owl", "ox", "panda", "panther", "parakeet", "parrot", "parrotfish", "partridge", "peacock", "peafowl", "pelican", "penguin", "perch", "pheasant", "pig", "pigeon", "pike", "pinniped", "piranha", "planarian", "platypus", "pony", "porcupine", "porpoise", "possum", "prawn", "primate", "ptarmigan", "puffin", "puma", "python", "quail", "quelea", "quokka", "rabbit", "raccoon", "rat", "rattlesnake", "raven", "reindeer", "reptile", "rhinoceros", "roadrunner", "rodent", "rook", "rooster", "roundworm", "sailfish", "salamander", "salmon", "sawfish", "scallop", "scorpion", "seahorse", "shark", "sheep", "shrew", "shrimp", "silkworm", "silverfish", "skink", "skunk", "sloth", "slug", "smelt", "snail", "snake", "snipe", "sole", "sparrow", "spider", "spoonbill", "squid", "squirrel", "starfish", "stingray", "stoat", "stork", "sturgeon", "swallow", "swan", "swift", "swordfish", "swordtail", "tahr", "takin", "tapir", "tarantula", "tarsier", "termite", "tern", "thrush", "tick", "tiger", "tiglon", "toad", "tortoise", "toucan", "trout", "tuna", "turkey", "turtle", "tyrannosaurus", "unicorn", "urial", "vicuna", "viper", "vole", "vulture", "wallaby", "walrus", "warbler", "wasp", "weasel", "whale", "whippet", "whitefish", "wildcat", "wildebeest", "wildfowl", "wolf", "wolverine", "wombat", "woodpecker", "worm", "wren", "xerinae", "yak", "zebra"], $l = ["amaranth", "amber", "amethyst", "apricot", "aqua", "aquamarine", "azure", "beige", "black", "blue", "blush", "bronze", "brown", "chocolate", "coffee", "copper", "coral", "crimson", "cyan", "emerald", "fuchsia", "gold", "gray", "green", "harlequin", "indigo", "ivory", "jade", "lavender", "lime", "magenta", "maroon", "moccasin", "olive", "orange", "peach", "pink", "plum", "purple", "red", "rose", "salmon", "sapphire", "scarlet", "silver", "tan", "teal", "tomato", "turquoise", "violet", "white", "yellow"];
var Ur = class {
  static generate(e = {}) {
    let t = e.min || 1, i = e.max || 999;
    if (e.length) {
      let r = Math.pow(10, e.length);
      return t = r / 10, i = r - 1, [`${Math.floor(Math.random() * (i - t)) + t}`];
    }
    return [`${Math.floor(Math.random() * (i - t)) + t}`];
  }
};
var yt = require("vscode");
function $r(n6, e, t) {
  let i = [], r = 0;
  for (let o of t) {
    let s = o.originalEndLineNumber === 0, a = o.modifiedEndLineNumber === 0, l = s ? o.originalStartLineNumber : o.originalStartLineNumber - 1, u = 0;
    if (a && o.originalEndLineNumber === n6.lineCount && (l -= 1, u = n6.lineAt(l).range.end.character), i.push(n6.getText(new yt.Range(r, 0, l, u))), !a) {
      let d = o.modifiedStartLineNumber - 1, h = 0;
      s && o.originalStartLineNumber === n6.lineCount && (d -= 1, h = e.lineAt(d).range.end.character), i.push(e.getText(new yt.Range(d, h, o.modifiedEndLineNumber, 0)));
    }
    r = s ? o.originalStartLineNumber : o.originalEndLineNumber;
  }
  return i.push(n6.getText(new yt.Range(r, 0, n6.lineCount, 0))), i.join("");
}
function Nn(n6, e) {
  let t = n6.map((r) => {
    let o = e.lineAt(r.start.line), s = e.lineAt(r.end.line);
    return new yt.Range(o.range.start, s.range.end);
  });
  t.sort((r, o) => r.start.line - o.start.line);
  let i = t.reduce((r, o) => {
    if (r.length === 0) return r.push(o), r;
    let [s, ...a] = r, l = o.intersection(s);
    return l ? [l, ...a] : o.start.line === s.end.line + 1 ? [new yt.Range(s.start, o.end), ...a] : [o, ...r];
  }, []);
  return i.reverse(), i;
}
function Wr(n6, e) {
  return e.modifiedEndLineNumber === 0 ? e.modifiedStartLineNumber === 0 ? new yt.Range(n6.lineAt(e.modifiedStartLineNumber).range.end, n6.lineAt(e.modifiedStartLineNumber).range.start) : n6.lineCount === e.modifiedStartLineNumber ? new yt.Range(n6.lineAt(e.modifiedStartLineNumber - 1).range.end, n6.lineAt(e.modifiedStartLineNumber - 1).range.end) : new yt.Range(n6.lineAt(e.modifiedStartLineNumber - 1).range.end, n6.lineAt(e.modifiedStartLineNumber).range.start) : new yt.Range(n6.lineAt(e.modifiedStartLineNumber - 1).range.start, n6.lineAt(e.modifiedEndLineNumber - 1).range.end);
}
function Fn(n6, e, t) {
  let i = Wr(n6, e), r = t.intersection(i);
  if (!r) return null;
  if (e.modifiedEndLineNumber === 0) return e;
  {
    let o = r.start.line + 1, s = r.end.line + 1;
    if (e.originalEndLineNumber - e.originalStartLineNumber === e.modifiedEndLineNumber - e.modifiedStartLineNumber) {
      let a = o - e.modifiedStartLineNumber, l = s - o;
      return { originalStartLineNumber: e.originalStartLineNumber + a, originalEndLineNumber: e.originalStartLineNumber + a + l, modifiedStartLineNumber: o, modifiedEndLineNumber: s };
    } else return { originalStartLineNumber: e.originalStartLineNumber, originalEndLineNumber: e.originalEndLineNumber, modifiedStartLineNumber: o, modifiedEndLineNumber: s };
  }
}
function Wl(n6) {
  return { modifiedStartLineNumber: n6.originalStartLineNumber, modifiedEndLineNumber: n6.originalEndLineNumber, originalStartLineNumber: n6.modifiedStartLineNumber, originalEndLineNumber: n6.modifiedEndLineNumber };
}
function Mi(n6) {
  return n6.changes.map((e) => {
    let t, i, r, o;
    return e.original.startLineNumber === e.original.endLineNumberExclusive ? (t = e.original.startLineNumber - 1, i = 0) : (t = e.original.startLineNumber, i = e.original.endLineNumberExclusive - 1), e.modified.startLineNumber === e.modified.endLineNumberExclusive ? (r = e.modified.startLineNumber - 1, o = 0) : (r = e.modified.startLineNumber, o = e.modified.endLineNumberExclusive - 1), { originalStartLineNumber: t, originalEndLineNumber: i, modifiedStartLineNumber: r, modifiedEndLineNumber: o };
  });
}
function Kl(n6) {
  return n6.diffInformation?.find((e) => e.original && tt(e.original) && Ne(e.original).ref === "HEAD" && e.modified && tt(e.modified) && Ne(e.modified).ref === "");
}
function ui(n6) {
  return Hn(n6, "~") ?? Hn(n6, "");
}
function Un(n6) {
  return Hn(n6, "HEAD");
}
function Hn(n6, e) {
  return n6.diffInformation?.find((t) => t.original && tt(t.original) && Ne(t.original).ref === e);
}
var le = require("vscode");
var jl = 20, Xe = class n4 extends le.TimelineItem {
  static is(e) {
    return e instanceof n4;
  }
  constructor(e, t, i, r, o, s) {
    let a = i.indexOf(`
`), l = a !== -1 ? `${i.substring(0, a)} …` : i;
    super(l, r), this.ref = e, this.previousRef = t, this.message = i, this.id = o, this.contextValue = s;
  }
  get shortRef() {
    return this.shortenRef(this.ref);
  }
  get shortPreviousRef() {
    return this.shortenRef(this.previousRef);
  }
  setItemDetails(e, t, i, r, o, s, a, l, u, d = []) {
    this.tooltip = new le.MarkdownString("", true), this.tooltip.isTrusted = true;
    let h = r ? `![${o}](${r}|width=${jl},height=${jl})` : "$(account)";
    if (s) {
      let p = le.l10n.t("Email");
      this.tooltip.appendMarkdown(`${h} [**${o}**](mailto:${s} "${p} ${o}")`);
    } else this.tooltip.appendMarkdown(`${h} **${o}**`);
    if (this.tooltip.appendMarkdown(`, $(history) ${a}

`), this.tooltip.appendMarkdown(`${l}

`), u) {
      this.tooltip.appendMarkdown(`---

`);
      let p = [];
      u.insertions && p.push(`<span style="color:var(--vscode-scmGraph-historyItemHoverAdditionsForeground);">${u.insertions === 1 ? le.l10n.t("{0} insertion{1}", u.insertions, "(+)") : le.l10n.t("{0} insertions{1}", u.insertions, "(+)")}</span>`), u.deletions && p.push(`<span style="color:var(--vscode-scmGraph-historyItemHoverDeletionsForeground);">${u.deletions === 1 ? le.l10n.t("{0} deletion{1}", u.deletions, "(-)") : le.l10n.t("{0} deletions{1}", u.deletions, "(-)")}</span>`), this.tooltip.appendMarkdown(`${p.join(", ")}

`);
    }
    if (t && i && (this.tooltip.appendMarkdown(`---

`), this.tooltip.appendMarkdown(`[\`$(git-commit) ${i} \`](command:git.viewCommit?${encodeURIComponent(JSON.stringify([e, t]))} "${le.l10n.t("Open Commit")}")`), this.tooltip.appendMarkdown("&nbsp;"), this.tooltip.appendMarkdown(`[$(copy)](command:git.copyContentToClipboard?${encodeURIComponent(JSON.stringify(t))} "${le.l10n.t("Copy Commit Hash")}")`), d.length > 0)) {
      this.tooltip.appendMarkdown("&nbsp;&nbsp;|&nbsp;&nbsp;");
      let p = d.map((g) => `[${g.title}](command:${g.command}?${encodeURIComponent(JSON.stringify([...g.arguments ?? [], t]))} "${g.tooltip}")`);
      this.tooltip.appendMarkdown(p.join("&nbsp;"));
    }
  }
  shortenRef(e) {
    return e === "" || e === "~" || e === "HEAD" ? e : e.endsWith("^") ? `${e.substr(0, 8)}^` : e.substr(0, 8);
  }
}, Li = class {
  constructor(e, t) {
    this.model = e;
    this.commands = t;
    this._onDidChange = new le.EventEmitter();
    this.id = "git-history";
    this.label = le.l10n.t("Git History");
    this.disposable = le.Disposable.from(e.onDidOpenRepository(this.onRepositoriesChanged, this), le.workspace.onDidChangeConfiguration(this.onConfigurationChanged, this)), e.repositories.length && this.ensureProviderRegistration();
  }
  get onDidChange() {
    return this._onDidChange.event;
  }
  dispose() {
    this.providerDisposable?.dispose(), this.disposable.dispose();
  }
  async provideTimeline(e, t, i) {
    let r = this.model.getRepository(e);
    if (!r) return this.repoDisposable?.dispose(), this.repoOperationDate = void 0, this.repo = void 0, { items: [] };
    this.repo?.root !== r.root && (this.repoDisposable?.dispose(), this.repo = r, this.repoOperationDate = /* @__PURE__ */ new Date(), this.repoDisposable = le.Disposable.from(r.onDidChangeRepository((M) => this.onRepositoryChanged(r, M)), r.onDidRunGitStatus(() => this.onRepositoryStatusChanged(r)), r.onDidRunOperation((M) => this.onRepositoryOperationRun(r, M))));
    let o;
    if (t.limit !== void 0 && typeof t.limit != "number") try {
      let M = await this.model.git.exec(r.root, ["rev-list", "--count", `${t.limit.id}..`, "--", e.fsPath]);
      M.exitCode || (o = Number(M.stdout) + 2);
    } catch {
      o = void 0;
    }
    else o = t.limit === void 0 ? void 0 : t.limit + 1;
    await si();
    let s = await r.logFile(e, { maxEntries: o, hash: t.cursor, follow: true, shortStats: true }), a = s.length ? { cursor: o === void 0 ? void 0 : s.length >= o ? s[s.length - 1]?.hash : void 0 } : void 0;
    o !== void 0 && s.length >= o && s.splice(s.length - 1, 1);
    let l = new Intl.DateTimeFormat(le.env.language, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }), u = le.workspace.getConfiguration("git", le.Uri.file(r.root)), d = u.get("timeline.date"), h = u.get("timeline.showAuthor"), p = u.get("timeline.showUncommitted"), g = u.get("commitShortHashLength") ?? 7, y = le.l10n.t("Open Comparison"), C = await r.getEmptyTree(), S = await r.getUnpublishedCommits(), k = await Or(this.model, r), G = { commits: s.map((M) => ({ hash: M.hash, authorName: M.authorName, authorEmail: M.authorEmail })), size: 20 }, I = await ai(this.model, r, G), D = [];
    for (let M = 0; M < s.length; M++) {
      let H = s[M], W = d === "authored" ? H.authorDate : H.commitDate, B = Ht(H.message), $ = s[M + 1]?.hash ?? C, q = new Xe(H.hash, $, B, W?.getTime() ?? 0, H.hash, "git:file:commit");
      q.iconPath = new le.ThemeIcon("git-commit"), h && (q.description = H.authorName);
      let E = S.has(H.hash) ? [] : k, oe = await li(this.model, r, B) ?? B;
      q.setItemDetails(e, H.hash, mt(H.hash, g, false), I?.get(H.hash), H.authorName, H.authorEmail, l.format(W), oe, H.shortStat, E);
      let ne = this.commands.resolveTimelineOpenDiffCommand(q, e);
      ne && (q.command = { title: y, command: ne.command, arguments: ne.arguments }), D.push(q);
    }
    if (t.cursor === void 0) {
      let M = le.l10n.t("You"), H = r.indexGroup.resourceStates.find((W) => W.resourceUri.fsPath === e.fsPath);
      if (H) {
        let W = this.repoOperationDate ?? /* @__PURE__ */ new Date(), B = new Xe("~", "HEAD", le.l10n.t("Staged Changes"), W.getTime(), "index", "git:file:index");
        B.iconPath = new le.ThemeIcon("git-commit"), B.description = "", B.setItemDetails(e, void 0, void 0, void 0, M, void 0, l.format(W), Q.getStatusText(H.type));
        let $ = this.commands.resolveTimelineOpenDiffCommand(B, e);
        $ && (B.command = { title: y, command: $.command, arguments: $.arguments }), D.splice(0, 0, B);
      }
      if (p) {
        let W = r.workingTreeGroup.resourceStates.find((B) => B.resourceUri.fsPath === e.fsPath);
        if (W) {
          let B = /* @__PURE__ */ new Date(), $ = new Xe("", H ? "~" : "HEAD", le.l10n.t("Uncommitted Changes"), B.getTime(), "working", "git:file:working");
          $.iconPath = new le.ThemeIcon("circle-outline"), $.description = "", $.setItemDetails(e, void 0, void 0, void 0, M, void 0, l.format(B), Q.getStatusText(W.type));
          let q = this.commands.resolveTimelineOpenDiffCommand($, e);
          q && ($.command = { title: y, command: q.command, arguments: q.arguments }), D.splice(0, 0, $);
        }
      }
    }
    return { items: D, paging: a };
  }
  ensureProviderRegistration() {
    this.providerDisposable === void 0 && (this.providerDisposable = le.workspace.registerTimelineProvider(["file", "git", "vscode-remote", "vscode-local-history"], this));
  }
  onConfigurationChanged(e) {
    (e.affectsConfiguration("git.timeline.date") || e.affectsConfiguration("git.timeline.showAuthor") || e.affectsConfiguration("git.timeline.showUncommitted")) && this.fireChanged();
  }
  onRepositoriesChanged(e) {
    this.ensureProviderRegistration(), this.fireChanged();
  }
  onRepositoryChanged(e, t) {
    this.fireChanged();
  }
  onRepositoryStatusChanged(e) {
    le.workspace.getConfiguration("git.timeline").get("showUncommitted") === true && this.fireChanged();
  }
  onRepositoryOperationRun(e, t) {
    !t.error && !t.operation.readOnly && t.operation.kind !== "Status" && (this.repoOperationDate = /* @__PURE__ */ new Date(), this.fireChanged());
  }
  fireChanged() {
    this._onDidChange.fire(void 0);
  }
};
b([nt(500)], Li.prototype, "fireChanged", 1);
async function $n(n6 = {}) {
  return Gt.getAPI().pickRemoteSource(n6);
}
async function Jl(n6) {
  return Gt.getAPI().getRemoteSourceActions(n6);
}
function Mh(n6) {
  let e = c.l10n.t('Use Git LFS (git lfs track "<path>"), and remove the file from every commit in the push, not only the latest (git rm --cached <path> && git commit --amend, or git filter-repo --strip-blobs-bigger-than 100M).');
  return n6.length === 0 ? c.l10n.t("Can't push refs to remote. A file exceeds Origin's file size limit of 100 MB. {0}", e) : n6.length === 1 ? c.l10n.t("Can't push refs to remote. {0} exceeds Origin's file size limit of 100 MB. {1}", n6[0], e) : c.l10n.t("Can't push refs to remote. These files exceed Origin's file size limit of 100 MB: {0}. {1}", n6.join(", "), e);
}
var Ui = class {
  get description() {
    return "";
  }
  get alwaysShow() {
    return true;
  }
}, jr = class extends Ui {
  get label() {
    return c.l10n.t("{0} Create new branch...", "$(plus)");
  }
}, Kn = class extends Ui {
  get label() {
    return c.l10n.t("{0} Create new branch from...", "$(plus)");
  }
}, jn = class extends Ui {
  get label() {
    return c.l10n.t("{0} Checkout detached...", "$(debug-disconnect)");
  }
}, Jr = class {
  constructor(e) {
    this.refType = e;
  }
  get kind() {
    return c.QuickPickItemKind.Separator;
  }
  get label() {
    switch (this.refType) {
      case L.Head:
        return c.l10n.t("branches");
      case L.RemoteHead:
        return c.l10n.t("remote branches");
      case L.Tag:
        return c.l10n.t("tags");
      default:
        return "";
    }
  }
}, $i = class {
  constructor(e) {
    this.worktree = e;
  }
  get label() {
    return `$(list-tree) ${this.worktree.name}`;
  }
  get description() {
    return this.worktree.path;
  }
}, it = class {
  constructor(e) {
    this.ref = e;
  }
  get label() {
    switch (this.ref.type) {
      case L.Head:
        return `$(git-branch) ${this.ref.name ?? this.shortCommit}`;
      case L.RemoteHead:
        return `$(cloud) ${this.ref.name ?? this.shortCommit}`;
      case L.Tag:
        return `$(tag) ${this.ref.name ?? this.shortCommit}`;
      default:
        return "";
    }
  }
  get description() {
    if (this.ref.commitDetails?.commitDate) return Lt(this.ref.commitDetails.commitDate, true, true);
    switch (this.ref.type) {
      case L.Head:
        return this.shortCommit;
      case L.RemoteHead:
        return c.l10n.t("Remote branch at {0}", this.shortCommit);
      case L.Tag:
        return c.l10n.t("Tag at {0}", this.shortCommit);
      default:
        return "";
    }
  }
  get detail() {
    if (this.ref.commitDetails?.authorName && this.ref.commitDetails?.message) return `${this.ref.commitDetails?.authorName}$(circle-small-filled)${this.ref.commitDetails?.message}`;
  }
  get refId() {
    switch (this.ref.type) {
      case L.Head:
        return `refs/heads/${this.ref.name}`;
      case L.RemoteHead:
        return `refs/remotes/${this.ref.remote}/${this.ref.name}`;
      case L.Tag:
        return `refs/tags/${this.ref.name}`;
      default:
        return "";
    }
  }
  get refName() {
    return this.ref.name;
  }
  get refRemote() {
    return this.ref.remote;
  }
  get shortCommit() {
    return (this.ref.commit || "").substr(0, 8);
  }
  get buttons() {
    return this._buttons;
  }
  set buttons(e) {
    this._buttons = e;
  }
}, mi = class extends it {
  constructor(t) {
    super(t);
    this.ref = t;
  }
  get description() {
    let t = [];
    return typeof this.ref.behind == "number" && typeof this.ref.ahead == "number" && t.push(`${this.ref.behind}↓ ${this.ref.ahead}↑`), this.ref.commitDetails?.commitDate && t.push(Lt(this.ref.commitDetails.commitDate, true, true)), t.length > 0 ? t.join("$(circle-small-filled)") : this.shortCommit;
  }
}, Vr = class extends mi {
  async run(e, t) {
    if (!this.ref.name) return;
    let r = c.workspace.getConfiguration("git", c.Uri.file(e.root)).get("pullBeforeCheckout", false) === true, o = t?.detached ? this.ref.commit ?? this.ref.name : this.ref.name;
    await e.checkout(o, { ...t, pullBeforeCheckout: r });
  }
}, Jn = class extends Vr {
  get label() {
    return `$(lock) ${this.ref.name ?? this.shortCommit}`;
  }
}, Vn = class extends it {
  async run(e, t) {
    if (!this.ref.name) return;
    if (t?.detached) {
      await e.checkout(this.ref.commit ?? this.ref.name, t);
      return;
    }
    let i = await e.findTrackingBranches(this.ref.name);
    i.length > 0 ? await e.checkout(i[0].name, t) : await e.checkoutTracking(this.ref.name, t);
  }
}, zn = class extends it {
  async run(e, t) {
    this.ref.name && await e.checkout(this.ref.name, t);
  }
}, Hi = class extends mi {
  async run(e, t) {
    if (this.ref.type === L.Head && this.refName) await e.deleteBranch(this.refName, t);
    else if (this.ref.type === L.RemoteHead && this.refRemote && this.refName) {
      let i = this.refName.substring(this.refRemote.length + 1);
      await e.deleteRemoteRef(this.refRemote, i, { force: t });
    }
  }
}, zr = class extends it {
  async run(e) {
    this.ref.name && await e.deleteTag(this.ref.name);
  }
}, qr = class extends it {
  get description() {
    return c.l10n.t("Remote tag at {0}", this.shortCommit);
  }
  async run(e, t) {
    this.ref.name && await e.deleteRemoteRef(t, this.ref.name);
  }
}, Qr = class extends $i {
  async run(e) {
    if (this.worktree.path) try {
      await e.deleteWorktree(this.worktree.path);
    } catch (t) {
      if (t.gitErrorCode === T.WorktreeContainsChanges) {
        let i = c.l10n.t("Force Delete"), r = c.l10n.t("The worktree contains modified or untracked files. Do you want to force delete?");
        await c.window.showWarningMessage(r, { modal: true }, i) === i && await e.deleteWorktree(this.worktree.path, { force: true });
      }
    }
  }
}, di = class extends mi {
  async run(e) {
    (this.ref.name || this.ref.commit) && await e.merge(this.ref.name ?? this.ref.commit);
  }
}, hi = class extends mi {
  async run(e) {
    this.ref?.name && await e.rebase(this.ref.name);
  }
}, qn = class extends hi {
  get description() {
    return "(upstream)";
  }
}, Qn = class {
  constructor(e) {
    this.repository = e;
  }
  get label() {
    return "HEAD";
  }
  get description() {
    return (this.repository.HEAD && this.repository.HEAD.commit || "").substr(0, 8);
  }
  get alwaysShow() {
    return true;
  }
  get refName() {
    return "HEAD";
  }
}, Yr = class {
  constructor(e) {
    this.cc = e;
  }
  get label() {
    return "$(plus) " + c.l10n.t("Add a new remote...");
  }
  get description() {
    return "";
  }
  get alwaysShow() {
    return true;
  }
  async run(e) {
    await this.cc.addRemote(e);
  }
}, Ni = class {
  constructor(e, t) {
    this.repository = e;
    this.remote = t;
  }
  get label() {
    return `$(cloud) ${this.remote.name}`;
  }
  get description() {
    return this.remote.fetchUrl;
  }
  get remoteName() {
    return this.remote.name;
  }
  async run() {
    await this.repository.fetch({ remote: this.remote.name });
  }
}, Yn = class {
  constructor(e) {
    this.repository = e;
  }
  get label() {
    return c.l10n.t("{0} Fetch all remotes", "$(cloud-download)");
  }
  async run() {
    await this.repository.fetch({ all: true });
  }
}, Fi = class {
  constructor(e) {
    this.path = e;
  }
  get label() {
    return `$(repo) ${es(this.path)}`;
  }
  get description() {
    return this.path;
  }
}, Xr = class {
  constructor(e) {
    this.stash = e;
  }
  get label() {
    return `#${this.stash.index}: ${this.stash.description}`;
  }
  get description() {
    return this.stash.branchName;
  }
}, ql = [];
function R(n6, e = {}) {
  return (t, i, r) => {
    if (typeof r.value != "function") throw new Error("not supported");
    ql.push({ commandId: n6, key: i, method: r.value, options: e });
  };
}
async function Vl(n6) {
  let t = n6.filter((h) => h instanceof Q).filter((h) => h.resourceGroupType === 0), i = (h) => h.type === m.BOTH_MODIFIED || h.type === m.BOTH_ADDED, r = (h) => h.type === m.DELETED_BY_THEM || h.type === m.DELETED_BY_US, o = t.filter(i), s = o.map((h) => ua(h.resourceUri.fsPath, /^<{7}\s|^={7}$|^>{7}\s/)), a = await Promise.all(s), l = o.filter((h, p) => !a[p]), u = t.filter((h) => r(h)), d = [...t.filter((h) => !i(h) && !r(h)), ...o.filter((h, p) => a[p])];
  return { merge: t, resolved: l, unresolved: d, deletionConflicts: u };
}
async function Lh(n6, e = false) {
  let t = c.workspace.getConfiguration("git"), i = t.get("checkoutType"), r = t.get("showReferenceDetails") === true, o;
  i === "all" || !i || i.length === 0 ? o = ["local", "remote", "tags"] : typeof i == "string" ? o = [i] : o = i, e && (o = o.filter((d) => d !== "tags"));
  let s = await n6.getRefs({ includeCommitDetails: r }), a = o.map((d) => Hh(n6, d)).filter((d) => !!d), l = await Gh(n6);
  return new Zn(n6, a, l, e).processRefs(s);
}
async function Gh(n6) {
  let e = /* @__PURE__ */ new Map(), t = async (i) => (await Jl(i)).map((r) => ({ iconPath: new c.ThemeIcon(r.icon), tooltip: r.label, actual: r }));
  for (let i of n6.remotes) {
    if (i.fetchUrl) {
      let r = e.get(i.fetchUrl) ?? [];
      r.push(...await t(i.fetchUrl)), e.set(i.fetchUrl, r);
    }
    if (i.pushUrl && i.pushUrl !== i.fetchUrl) {
      let r = e.get(i.pushUrl) ?? [];
      r.push(...await t(i.pushUrl)), e.set(i.pushUrl, r);
    }
  }
  return e;
}
var $e = class {
  constructor(e, t = it) {
    this.type = e;
    this.ctor = t;
    this.refs = [];
  }
  get items() {
    let e = this.refs.map((t) => new this.ctor(t));
    return e.length === 0 ? e : [new Jr(this.type), ...e];
  }
  processRef(e) {
    return !e.name && !e.commit || e.type !== this.type ? false : (this.refs.push(e), true);
  }
}, It = class {
  constructor(e, t, i = {}) {
    this.repository = e;
    this.processors = t;
    this.options = i;
  }
  processRefs(e) {
    let t = this.getRefsToSkip();
    for (let r of e) if (!(r.name && t.includes(r.name))) {
      for (let o of this.processors) if (o.processRef(r)) break;
    }
    let i = [];
    for (let r of this.processors) i.push(...r.items);
    return i;
  }
  getRefsToSkip() {
    let e = ["origin/HEAD"];
    return this.options.skipCurrentBranch && this.repository.HEAD?.name && e.push(this.repository.HEAD.name), this.options.skipCurrentBranchRemote && this.repository.HEAD?.upstream && e.push(`${this.repository.HEAD.upstream.remote}/${this.repository.HEAD.upstream.name}`), e;
  }
}, Xn = class extends $e {
  constructor(t) {
    super(L.Head);
    this.repository = t;
  }
  get items() {
    let t = this.refs.map((i) => this.repository.isBranchProtected(i) ? new Jn(i) : new Vr(i));
    return t.length === 0 ? t : [new Jr(this.type), ...t];
  }
}, Zn = class extends It {
  constructor(t, i, r, o = false) {
    super(t, i);
    this.buttons = r;
    this.detached = o;
    let s = t.remotes.find((l) => l.pushUrl === t.HEAD?.remote || l.fetchUrl === t.HEAD?.remote) ?? t.remotes[0], a = s?.pushUrl ?? s?.fetchUrl;
    a && (this.defaultButtons = r.get(a));
  }
  processRefs(t) {
    for (let r of t) if (!(!this.detached && r.name === "origin/HEAD")) {
      for (let o of this.processors) if (o.processRef(r)) break;
    }
    let i = [];
    for (let r of this.processors) for (let o of r.items) {
      if (!(o instanceof it)) {
        i.push(o);
        continue;
      }
      if (o.refRemote) {
        let s = this.repository.remotes.find((l) => l.name === o.refRemote), a = [];
        s?.pushUrl && a.push(...this.buttons.get(s.pushUrl) ?? []), s?.fetchUrl && s.fetchUrl !== s.pushUrl && a.push(...this.buttons.get(s.fetchUrl) ?? []), a.length && (o.buttons = a);
      } else o.buttons = this.defaultButtons;
      i.push(o);
    }
    return i;
  }
};
function Hh(n6, e) {
  switch (e) {
    case "local":
      return new Xn(n6);
    case "remote":
      return new $e(L.RemoteHead, Vn);
    case "tags":
      return new $e(L.Tag, zn);
    default:
      return;
  }
}
function es(n6) {
  let e = c.workspace.getWorkspaceFolder(c.Uri.file(n6));
  return e?.uri.toString() === n6 ? e.name : X.basename(n6);
}
function Wn(n6, e) {
  return es(n6).localeCompare(es(e));
}
function Kr(n6, e) {
  return n6 && n6.trim().replace(/^-+/, "").replace(/^\.|\/\.|\.\.|~|\^|:|\/$|\.lock$|\.lock\/|\\|\*|\s|^\s*$|\.$|\[|\]$/g, e);
}
function zl(n6) {
  return n6 = n6.trim(), n6 && n6.replace(/^\.|\/\.|\.\.|~|\^|:|\/$|\.lock$|\.lock\/|\\|\*|\s|^\s*$|\.$|\[|\]$/g, "-");
}
var ts = class {
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
};
async function Nh(n6, e) {
  let t = c.workspace.getConfiguration("git", c.Uri.file(n6.root)), i = t.get("diagnosticsCommitHook.Enabled", false) === true, r = t.get("diagnosticsCommitHook.Sources", { "*": "error" });
  if (!i) return true;
  let o = [];
  n6.indexGroup.resourceStates.length > 0 ? o.push(...n6.indexGroup.resourceStates.map((p) => p.resourceUri)) : e.all === "tracked" ? o.push(...n6.workingTreeGroup.resourceStates.filter((p) => p.type !== m.UNTRACKED && p.type !== m.IGNORED).map((p) => p.resourceUri)) : (o.push(...n6.workingTreeGroup.resourceStates.map((p) => p.resourceUri)), o.push(...n6.untrackedGroup.resourceStates.map((p) => p.resourceUri)));
  let a = c.languages.getDiagnostics().filter(([p, g]) => p.scheme !== "file" || !o.find((y) => z(y.fsPath, p.fsPath)) ? false : g.find((y) => !y.source || Object.keys(r).includes(y.source) && r[y.source] === "none" ? false : !!(Object.keys(r).includes(y.source) && y.severity <= Fo(r[y.source]) || Object.keys(r).includes("*") && y.severity <= Fo(r["*"]))));
  if (a.length === 0) return true;
  let l = c.l10n.t("Commit Anyway"), u = c.l10n.t("View Problems"), d = a.length === 1 ? c.l10n.t(`The following file has unresolved diagnostics: '{0}'.

How would you like to proceed?`, X.basename(a[0][0].fsPath)) : c.l10n.t(`There are {0} files that have unresolved diagnostics.

How would you like to proceed?`, a.length), h = await c.window.showWarningMessage(d, { modal: true }, l, u);
  return h === l ? true : (h === u && c.commands.executeCommand("workbench.panel.markers.view.focus"), false);
}
var v = class v2 {
  constructor(e, t, i, r, o) {
    this.git = e;
    this.model = t;
    this.globalState = i;
    this.logger = r;
    this.telemetryReporter = o;
    this.commandErrors = new ts();
    this.disposables = ql.map(({ commandId: s, key: a, method: l, options: u }) => {
      let d = this.createCommand(s, a, l, u);
      return c.commands.registerCommand(s, d);
    }), this.disposables.push(c.workspace.registerTextDocumentContentProvider("git-output", this.commandErrors));
  }
  static {
    this.WORKTREE_ROOT_KEY = "worktreeRoot";
  }
  showOutput() {
    this.logger.show();
  }
  async refresh(e) {
    await e.refresh();
  }
  async rescan() {
    await this.model.rescanRepositories();
  }
  async openResource(e) {
    this.model.getRepository(e.resourceUri) && await e.open();
  }
  async openChanges(e) {
    for (let t of [...e.workingTreeGroup.resourceStates, ...e.untrackedGroup.resourceStates]) t.type === m.DELETED || t.type === m.DELETED_BY_THEM || t.type === m.DELETED_BY_US || t.type === m.BOTH_DELETED || c.commands.executeCommand("vscode.open", t.resourceUri, { background: true, preview: false });
  }
  getActiveFileUri(e) {
    if (e) return e;
    let t = c.window.tabGroups.activeTabGroup.activeTab;
    if (t?.input instanceof c.TabInputText) return t.input.uri;
  }
  async openMergeEditor(e) {
    if (e === void 0 && c.window.tabGroups.activeTabGroup.activeTab?.input instanceof c.TabInputText && (e = c.window.tabGroups.activeTabGroup.activeTab.input.uri), !(e instanceof c.Uri)) return;
    let t = this.model.getRepository(e);
    if (!t) return;
    let i = !!t.rebaseCommit, r = gn(e), o = false;
    try {
      let d = await c.workspace.openTextDocument(e);
      o = u(d)?.incomingChangeLabel === "Stashed changes";
    } catch (d) {
      console.error(d);
    }
    let s = { uri: r.ours, title: c.l10n.t("Current") }, a = { uri: r.theirs, title: c.l10n.t("Incoming") };
    o && (a.title = c.l10n.t("Stashed Changes"));
    try {
      let [d, h, p] = await Promise.all([t.getCommit("HEAD"), i ? t.getCommit("REBASE_HEAD") : t.getCommit("MERGE_HEAD"), await t.diffBetween(i ? "REBASE_HEAD" : "MERGE_HEAD", "HEAD")]), g = p?.find((y) => y.uri.fsPath === e.fsPath);
      s.detail = d.refNames.map((y) => y.replace(/^HEAD ->/, "")).join(", "), s.description = "$(git-commit) " + d.hash.substring(0, 7), s.uri = Z(e, d.hash), a.detail = h.refNames.join(", "), a.description = "$(git-commit) " + h.hash.substring(0, 7), g ? a.uri = Z(g.originalUri, h.hash) : a.uri = Z(e, h.hash);
    } catch (d) {
      console.error("FAILED to read HEAD, MERGE_HEAD commits"), console.error(d);
    }
    let l = { base: r.base, input1: i ? s : a, input2: i ? a : s, output: e };
    await c.commands.executeCommand("_open.mergeEditor", l);
    function u(d) {
      let h = "<<<<<<<", p = ">>>>>>>", g = false, y = "", C = "", S = false;
      for (let k = 0; k < d.lineCount; k++) {
        let G = d.lineAt(k).text;
        if (!g) G.startsWith(h) && (y = G.substring(h.length).trim(), g = true, S = true);
        else if (G.startsWith(p)) {
          C = G.substring(h.length).trim(), g = false;
          break;
        }
      }
      if (S) return { currentChangeLabel: y, incomingChangeLabel: C };
    }
  }
  async resolveAllConflictsInChat(e) {
    if (e = this.getActiveFileUri(e), !e) return;
    let t = this.model.getRepository(e);
    if (!t) return;
    let i = t.mergeGroup.resourceStates;
    if (!i || i.length === 0) return;
    let r = { repositoryUri: c.Uri.file(t.root).toString(), conflictedFiles: i.map((o) => ({ filePath: c.workspace.asRelativePath(o.resourceUri), uri: o.resourceUri.toString() })), fileCount: i.length };
    await c.commands.executeCommand("composer.resolveAllConflictsInChat", r);
  }
  async cloneRepository(e, t, i = {}) {
    if ((!e || typeof e != "string") && (e = await $n({ providerLabel: (o) => c.l10n.t("Clone from {0}", o.name), urlLabel: c.l10n.t("Clone from URL") })), !e) {
      this.telemetryReporter.sendTelemetryEvent("clone", { outcome: "no_URL" });
      return;
    }
    e = e.trim().replace(/^git\s+clone\s+/, "");
    let r = i.displayUrl ?? e;
    if (!t) {
      let s = c.workspace.getConfiguration("git").get("defaultCloneDirectory") || Gi.homedir();
      s = s.replace(/^~/, Gi.homedir());
      let a = await c.window.showOpenDialog({ canSelectFiles: false, canSelectFolders: true, canSelectMany: false, defaultUri: c.Uri.file(s), title: c.l10n.t("Choose a folder to clone {0} into", r), openLabel: c.l10n.t("Select as Repository Destination") });
      if (!a || a.length === 0) {
        this.telemetryReporter.sendTelemetryEvent("clone", { outcome: "no_directory" });
        return;
      }
      t = a[0].fsPath;
    }
    try {
      let o = { location: c.ProgressLocation.Notification, title: c.l10n.t('Cloning git repository "{0}"...', r), cancellable: true }, s = await c.window.withProgress(o, (p, g) => this.git.clone(e, { parentPath: t, progress: p, recursive: i.recursive, ref: i.ref, httpExtraHeader: i.httpExtraHeader }, g)), a = c.workspace.getConfiguration("git"), l = i.openAfterClone === false ? "never" : a.get("openAfterClone"), u;
      ((C) => (C[C.Open = 0] = "Open", C[C.OpenNewWindow = 1] = "OpenNewWindow", C[C.AddToWorkspace = 2] = "AddToWorkspace"))(u ||= {});
      let d;
      if (l === "always" ? d = 0 : l === "alwaysNewWindow" ? d = 1 : l === "whenNoFolderOpen" && !c.workspace.workspaceFolders && (d = 0), d === void 0 && l !== "never") {
        let p = c.l10n.t("Would you like to open the cloned repository?"), g = c.l10n.t("Open"), y = c.l10n.t("Open in New Window"), C = [g, y], S = c.l10n.t("Add to Workspace");
        c.workspace.workspaceFolders && (p = c.l10n.t("Would you like to open the cloned repository, or add it to the current workspace?"), C.push(S));
        let k = await c.window.showInformationMessage(p, { modal: true }, ...C);
        d = k === g ? 0 : k === y ? 1 : k === S ? 2 : void 0;
      }
      this.telemetryReporter.sendTelemetryEvent("clone", { outcome: "success" }, { openFolder: d === 0 || d === 1 ? 1 : 0 });
      let h = c.Uri.file(s);
      return d === 0 ? c.commands.executeCommand("vscode.openFolder", h, { forceReuseWindow: true }) : d === 2 ? c.workspace.updateWorkspaceFolders(c.workspace.workspaceFolders.length, 0, { uri: h }) : d === 1 && c.commands.executeCommand("vscode.openFolder", h, { forceNewWindow: true }), s;
    } catch (o) {
      if (/already exists and is not an empty directory/.test(o && o.stderr || "")) this.telemetryReporter.sendTelemetryEvent("clone", { outcome: "directory_not_empty" });
      else {
        if (/Cancelled/i.test(o && (o.message || o.stderr || ""))) return;
        this.telemetryReporter.sendTelemetryEvent("clone", { outcome: "error" });
      }
      throw o;
    }
  }
  getRepositoriesWithRemote(e) {
    return e.reduce((t, i) => {
      let r = i.remotes.find((o) => o.name === i.HEAD?.upstream?.remote);
      return r?.pushUrl && t.push({ repository: i, label: r.pushUrl }), t;
    }, []);
  }
  async continueInLocalClone() {
    if (this.model.repositories.length === 0) return;
    let e = this.getRepositoriesWithRemote(this.model.repositories);
    if (e.length === 0) {
      let o = this.model.repositories.length === 1 ? { repository: this.model.repositories[0] } : await c.window.showQuickPick(this.model.repositories.map((s) => ({ repository: s, label: s.root })), { canPickMany: false, placeHolder: c.l10n.t("Choose which repository to publish") });
      if (!o || (await this.publish(o.repository), e = this.getRepositoriesWithRemote([o.repository]), e.length === 0)) return;
    }
    let t = e[0];
    if (e.length > 1) {
      let o = await c.window.showQuickPick(e, { canPickMany: false, placeHolder: c.l10n.t("Choose which repository to clone") });
      if (o === void 0) return;
      t = o;
    }
    let i = t.label, r = t.repository.HEAD?.upstream?.name;
    if (i !== void 0) {
      let o = `${c.env.uriScheme}://vscode.git/clone?url=${encodeURIComponent(i)}`, s = c.env.uiKind === c.UIKind.Web, a = c.env.remoteName !== void 0;
      if (s || a) {
        if (r !== void 0 && (o += `&ref=${encodeURIComponent(r)}`), s) return c.Uri.parse(o);
        if (a) return o += "&windowId=_blank", c.Uri.parse(o);
      }
      this.clone(i, void 0, { ref: r });
    }
  }
  async clone(e, t, i) {
    return this.cloneRepository(e, t, i);
  }
  async cloneRecursive(e, t) {
    await this.cloneRepository(e, t, { recursive: true });
  }
  async init(e = false) {
    let t, i = true;
    if (c.workspace.workspaceFolders) if (e && c.workspace.workspaceFolders.length === 1) t = c.workspace.workspaceFolders[0].uri.fsPath, i = false;
    else {
      let y = c.l10n.t("Pick workspace folder to initialize git repo in"), C = { label: c.l10n.t("Choose Folder...") }, S = [...c.workspace.workspaceFolders.map((G) => ({ label: G.name, description: G.uri.fsPath, folder: G })), C], k = await c.window.showQuickPick(S, { placeHolder: y, ignoreFocusOut: true });
      if (k) k.folder && (t = k.folder.uri.fsPath, i = false);
      else return;
    }
    if (!t) {
      let y = c.Uri.file(Gi.homedir()), C = c.workspace.workspaceFolders && c.workspace.workspaceFolders.length > 0 ? c.Uri.file(c.workspace.workspaceFolders[0].uri.fsPath) : y, S = await c.window.showOpenDialog({ canSelectFiles: false, canSelectFolders: true, canSelectMany: false, defaultUri: C, openLabel: c.l10n.t("Initialize Repository") });
      if (!S || S.length === 0) return;
      let k = S[0];
      if (y.toString().startsWith(k.toString())) {
        let G = c.l10n.t("Initialize Repository");
        if (await c.window.showWarningMessage(c.l10n.t('This will create a Git repository in "{0}". Are you sure you want to continue?', k.fsPath), G) !== G) return;
      }
      t = k.fsPath, c.workspace.workspaceFolders && c.workspace.workspaceFolders.some((G) => G.uri.toString() === k.toString()) && (i = false);
    }
    let r = c.workspace.getConfiguration("git"), o = r.get("defaultBranchName", "main"), s = r.get("branchWhitespaceChar", "-");
    await this.git.init(t, { defaultBranch: Kr(o, s) });
    let a = c.l10n.t("Would you like to open the initialized repository?"), l = c.l10n.t("Open"), u = c.l10n.t("Open in New Window"), d = [l, u];
    if (!i) {
      await this.model.openRepository(t);
      return;
    }
    let h = c.l10n.t("Add to Workspace");
    c.workspace.workspaceFolders && (a = c.l10n.t("Would you like to open the initialized repository, or add it to the current workspace?"), d.push(h));
    let p = await c.window.showInformationMessage(a, ...d), g = c.Uri.file(t);
    p === l ? c.commands.executeCommand("vscode.openFolder", g) : p === h ? c.workspace.updateWorkspaceFolders(c.workspace.workspaceFolders.length, 0, { uri: g }) : p === u ? c.commands.executeCommand("vscode.openFolder", g, true) : await this.model.openRepository(t);
  }
  async openRepository(e) {
    if (!e) {
      let t = await c.window.showOpenDialog({ canSelectFiles: false, canSelectFolders: true, canSelectMany: false, defaultUri: c.Uri.file(Gi.homedir()), openLabel: c.l10n.t("Open Repository") });
      if (!t || t.length === 0) return;
      e = t[0].fsPath;
    }
    await this.model.openRepository(e, true);
  }
  async reopenClosedRepositories() {
    if (this.model.closedRepositories.length === 0) return;
    let e = [], t = c.l10n.t("Reopen Closed Repositories"), i = c.l10n.t("Pick a repository to reopen"), o = { label: c.l10n.t("All Repositories") }, s = this.model.closedRepositories.sort(Wn).map((u) => new Fi(u)), a = this.model.closedRepositories.length === 1 ? [...s] : [...s, { label: "", kind: c.QuickPickItemKind.Separator }, o], l = await c.window.showQuickPick(a, { title: t, placeHolder: i });
    if (l) {
      l === o ? e.push(...this.model.closedRepositories.values()) : e.push(l.path);
      for (let u of e) await this.model.openRepository(u, true);
    }
  }
  async close(e, ...t) {
    let i = t.map((r) => this.model.getRepository(r)).filter(No);
    for (let r of [e, ...i]) this.model.close(r);
  }
  async closeOtherRepositories(e, ...t) {
    let i = t.map((o) => this.model.getRepository(o)).filter(No), r = [e, ...i];
    for (let o of this.model.repositories) r.includes(o) || this.model.close(o);
  }
  async openFile(e, ...t) {
    let i = e instanceof Q, r;
    if (e instanceof c.Uri) tt(e) ? r = [c.Uri.file(Ne(e).path)] : e.scheme === "file" && (r = [e]);
    else {
      let u = e;
      u instanceof Q || (u = this.getSCMResource()), u ? r = [u, ...t].filter((d) => d.type !== m.DELETED && d.type !== m.INDEX_DELETED).map((d) => d.resourceUri) : c.window.activeTextEditor && (r = [c.window.activeTextEditor.document.uri]);
    }
    if (!r) return;
    let o = c.window.activeTextEditor, s = o?.visibleRanges, a = o?.document.uri, l = o?.selection;
    for (let u of r) {
      let d = { preserveFocus: i, preview: false, viewColumn: c.ViewColumn.Active };
      await c.commands.executeCommand("vscode.open", u, { ...d, override: e instanceof Q && e.type === m.BOTH_MODIFIED ? false : void 0 });
      let h = c.window.activeTextEditor?.document;
      if (!(h?.uri.toString() !== u.toString() || !o || !a || !l) && a.path === u.path && h) {
        d.selection = l;
        let p = await c.window.showTextDocument(h, d);
        if (s && s.length > 0) {
          let g = s[0];
          l && s.length > 1 && (g = s.find((y) => y.intersection(l)) ?? g), p.revealRange(g);
        }
      }
    }
  }
  async openFile2(e, ...t) {
    this.openFile(e, ...t);
  }
  async openHEADFile(e) {
    let t, i = !(e instanceof Q);
    if (e instanceof Q ? t = e : e instanceof c.Uri ? t = this.getSCMResource(e) : t = this.getSCMResource(), !t) return;
    let r = t.leftUri, s = `${X.basename(t.resourceUri.fsPath)} (HEAD)`;
    if (!r) {
      c.window.showWarningMessage(c.l10n.t('HEAD version of "{0}" is not available.', X.basename(t.resourceUri.fsPath)));
      return;
    }
    let a = { preview: i };
    return await c.commands.executeCommand("vscode.open", r, a, s);
  }
  async openChange(e, ...t) {
    let i;
    if (e instanceof c.Uri) {
      let r = this.getSCMResource(e);
      r !== void 0 && (i = [r]);
    } else {
      let r;
      e instanceof Q ? r = e : r = this.getSCMResource(), r && (i = [...t, r]);
    }
    if (i) for (let r of i) await r.openChange();
  }
  async compareWithWorkspace(e) {
    if (!e) return;
    let t = this.model.getRepository(e.resourceUri);
    if (!t || !t.dotGit.commonPath) return;
    let i = X.dirname(t.dotGit.commonPath), r = X.relative(t.root, e.resourceUri.fsPath), o = c.Uri.file(X.join(i, r)), s = e.resourceUri, a = Z(o, "HEAD");
    await c.commands.executeCommand("_open.mergeEditor", { base: a, input1: { uri: o, title: c.l10n.t("Workspace"), description: X.basename(i) }, input2: { uri: s, title: c.l10n.t("Worktree"), description: X.basename(t.root) }, output: o });
  }
  async rename(e, t) {
    if (t = t ?? c.window.activeTextEditor?.document.uri, !t) return;
    let i = Mt(e.root, t.fsPath), r = await c.window.showInputBox({ value: i, valueSelection: [i.length - X.basename(i).length, i.length] });
    r = r?.trim(), r && (await e.move(i, r), await c.commands.executeCommand("workbench.action.closeActiveEditor"), await c.commands.executeCommand("vscode.open", c.Uri.file(X.join(e.root, r)), { viewColumn: c.ViewColumn.Active }));
  }
  async stage(...e) {
    if (this.logger.debug(`[CommandCenter][stage] git.stage ${e.length} `), e = e.filter((d) => !!d), e.length === 0 || e[0] && !(e[0].resourceUri instanceof c.Uri)) {
      let d = this.getSCMResource();
      if (this.logger.debug(`[CommandCenter][stage] git.stage.getSCMResource ${d ? d.resourceUri.toString() : null} `), !d) return;
      e = [d];
    }
    let t = e.filter((d) => d instanceof Q), { resolved: i, unresolved: r, deletionConflicts: o } = await Vl(t);
    if (r.length > 0) {
      let d = r.length > 1 ? c.l10n.t("Are you sure you want to stage {0} files with merge conflicts?", r.length) : c.l10n.t("Are you sure you want to stage {0} with merge conflicts?", X.basename(r[0].resourceUri.fsPath)), h = c.l10n.t("Yes");
      if (await c.window.showWarningMessage(d, { modal: true }, h) !== h) return;
    }
    try {
      await this.runByRepository(o.map((d) => d.resourceUri), async (d, h) => {
        for (let p of h) await this._stageDeletionConflict(d, p);
      });
    } catch (d) {
      if (/Cancelled/.test(d.message)) return;
      throw d;
    }
    let s = t.filter((d) => d.resourceGroupType === 2), a = t.filter((d) => d.resourceGroupType === 3), l = [...s, ...a, ...i, ...r];
    if (this.logger.debug(`[CommandCenter][stage] git.stage.scmResources ${l.length} `), !l.length) return;
    let u = l.map((d) => d.resourceUri);
    await this.runByRepository(u, async (d, h) => d.add(h));
  }
  async stageAll(e) {
    let i = [...e.workingTreeGroup.resourceStates, ...e.untrackedGroup.resourceStates].map((r) => r.resourceUri);
    if (i.length > 0) {
      let o = c.workspace.getConfiguration("git", c.Uri.file(e.root)).get("untrackedChanges");
      await e.add(i, o === "mixed" ? void 0 : { update: true });
    }
  }
  async _stageDeletionConflict(e, t) {
    let i = t.toString(), r = e.mergeGroup.resourceStates.filter((o) => o.resourceUri.toString() === i)[0];
    if (r) {
      if (r.type === m.DELETED_BY_THEM) {
        let o = c.l10n.t("Keep Our Version"), s = c.l10n.t("Delete File"), a = await c.window.showInformationMessage(c.l10n.t(`File "{0}" was deleted by them and modified by us.

What would you like to do?`, X.basename(t.fsPath)), { modal: true }, o, s);
        if (a === o) await e.add([t]);
        else if (a === s) await e.rm([t]);
        else throw new Error("Cancelled");
      } else if (r.type === m.DELETED_BY_US) {
        let o = c.l10n.t("Keep Their Version"), s = c.l10n.t("Delete File"), a = await c.window.showInformationMessage(c.l10n.t(`File "{0}" was deleted by us and modified by them.

What would you like to do?`, X.basename(t.fsPath)), { modal: true }, o, s);
        if (a === o) await e.add([t]);
        else if (a === s) await e.rm([t]);
        else throw new Error("Cancelled");
      }
    }
  }
  async stageAllTracked(e) {
    let i = e.workingTreeGroup.resourceStates.filter((r) => r.type !== m.UNTRACKED && r.type !== m.IGNORED).map((r) => r.resourceUri);
    await e.add(i);
  }
  async stageAllUntracked(e) {
    let i = [...e.workingTreeGroup.resourceStates, ...e.untrackedGroup.resourceStates].filter((r) => r.type === m.UNTRACKED || r.type === m.IGNORED).map((r) => r.resourceUri);
    await e.add(i);
  }
  async stageAllMerge(e) {
    let t = e.mergeGroup.resourceStates.filter((a) => a instanceof Q), { merge: i, unresolved: r, deletionConflicts: o } = await Vl(t);
    try {
      for (let a of o) await this._stageDeletionConflict(e, a.resourceUri);
    } catch (a) {
      if (/Cancelled/.test(a.message)) return;
      throw a;
    }
    if (r.length > 0) {
      let a = r.length > 1 ? c.l10n.t("Are you sure you want to stage {0} files with merge conflicts?", i.length) : c.l10n.t("Are you sure you want to stage {0} with merge conflicts?", X.basename(i[0].resourceUri.fsPath)), l = c.l10n.t("Yes");
      if (await c.window.showWarningMessage(a, { modal: true }, l) !== l) return;
    }
    let s = t.map((a) => a.resourceUri);
    s.length > 0 && await e.add(s);
  }
  async stageChange(e, t, i) {
    if (!e) return;
    let r = c.window.visibleTextEditors.filter((s) => s.document.uri.toString() === e.toString())[0];
    if (!r) return;
    await this._stageChanges(r, [t[i]]);
    let o = t[i].modifiedStartLineNumber;
    r.selections = [new c.Selection(o, 0, o, 0)];
  }
  async diffStageHunk(e) {
    e ? this.diffStageHunkOrSelection(e) : await this.stageHunkAtCursor();
  }
  async diffStageSelection(e) {
    this.diffStageHunkOrSelection(e);
  }
  async diffStageHunkOrSelection(e) {
    if (!e) return;
    let t = e.modifiedUri, i;
    if (!t) {
      let o = c.window.activeTextEditor;
      if (!o) return;
      i = o.document, t = i.uri;
    }
    if (t.scheme !== "file") return;
    i || (i = await c.workspace.openTextDocument(t));
    let r = e.originalWithModifiedChanges;
    await this.runByRepository(t, async (o, s) => await o.stage(s, r, i.encoding));
  }
  async stageHunkAtCursor() {
    let e = c.window.activeTextEditor;
    if (!e) return;
    let t = ui(e);
    if (!t) return;
    let i = Mi(t), r = e.document, o = e.selection.active, s = i.find((a) => Wr(r, a).contains(o));
    if (!s) {
      c.window.showInformationMessage(c.l10n.t("No hunk found at cursor position."));
      return;
    }
    await this._stageChanges(e, [s]);
  }
  async stageSelectedChanges() {
    let e = c.window.activeTextEditor;
    if (!e) return;
    let t = ui(e);
    if (!t) return;
    let i = Mi(t);
    this.logger.trace(`[CommandCenter][stageSelectedChanges] diffInformation: ${JSON.stringify(t)}`), this.logger.trace(`[CommandCenter][stageSelectedChanges] diffInformation changes: ${JSON.stringify(i)}`);
    let r = e.document, o = Nn(e.selections, r), s = i.map((a) => o.reduce((l, u) => l || Fn(r, a, u), null)).filter((a) => !!a);
    if (this.logger.trace(`[CommandCenter][stageSelectedChanges] selectedChanges: ${JSON.stringify(s)}`), !s.length) {
      c.window.showInformationMessage(c.l10n.t("The selection range does not contain any changes."));
      return;
    }
    await this._stageChanges(e, s);
  }
  async stageFile(e) {
    if (e = e ?? c.window.activeTextEditor?.document.uri, !e) return;
    let t = this.model.getRepository(e);
    if (!t) return;
    let i = [...t.workingTreeGroup.resourceStates, ...t.untrackedGroup.resourceStates].filter((r) => r.multiFileDiffEditorModifiedUri?.toString() === e.toString()).map((r) => r.resourceUri);
    i.length !== 0 && await t.add(i);
  }
  async acceptMerge(e) {
    let { activeTab: t } = c.window.tabGroups.activeTabGroup;
    if (!t || !(t.input instanceof c.TabInputTextMerge)) return;
    let i = t.input.result, r = this.model.getRepository(i);
    if (!r) {
      console.log(`FAILED to complete merge because uri ${i.toString()} doesn't belong to any repository`);
      return;
    }
    (await c.commands.executeCommand("mergeEditor.acceptMerge")).successful && (await r.add([i]), await c.commands.executeCommand("workbench.view.scm"));
  }
  async runGitMergeNoDiff3() {
    await this.runGitMerge(false);
  }
  async runGitMergeDiff3() {
    await this.runGitMerge(true);
  }
  async runGitMerge(e) {
    let { activeTab: t } = c.window.tabGroups.activeTabGroup;
    if (!t) return;
    let i = t.input;
    if (!(i instanceof c.TabInputTextMerge)) return;
    let r = await this.git.mergeFile({ basePath: i.base.fsPath, input1Path: i.input1.fsPath, input2Path: i.input2.fsPath, diff3: e }), o = c.workspace.textDocuments.find((a) => a.uri.toString() === i.result.toString());
    if (!o) return;
    let s = new c.WorkspaceEdit();
    s.replace(i.result, new c.Range(new c.Position(0, 0), new c.Position(o.lineCount, 0)), r), await c.workspace.applyEdit(s);
  }
  async _stageChanges(e, t) {
    let i = e.document, r = i.uri;
    if (r.scheme !== "file") return;
    let o = Z(r, "~"), s = await c.workspace.openTextDocument(o), a = $r(s, i, t);
    await this.runByRepository(r, async (l, u) => await l.stage(u, a, i.encoding));
  }
  async revertChange(e, t, i) {
    if (!e) return;
    let r = c.window.visibleTextEditors.filter((s) => s.document.uri.toString() === e.toString())[0];
    if (!r) return;
    await this._revertChanges(r, [...t.slice(0, i), ...t.slice(i + 1)]);
    let o = t[i].modifiedStartLineNumber;
    r.selections = [new c.Selection(o, 0, o, 0)];
  }
  async revertSelectedRanges() {
    let e = c.window.activeTextEditor;
    if (!e) return;
    let t = ui(e);
    if (!t) return;
    let i = Mi(t);
    this.logger.trace(`[CommandCenter][revertSelectedRanges] diffInformation: ${JSON.stringify(t)}`), this.logger.trace(`[CommandCenter][revertSelectedRanges] diffInformation changes: ${JSON.stringify(i)}`);
    let r = e.document, o = e.selections, s = i.filter((l) => {
      let u = Wr(r, l);
      return o.every((d) => !d.intersection(u));
    });
    if (s.length === i.length) {
      c.window.showInformationMessage(c.l10n.t("The selection range does not contain any changes."));
      return;
    }
    this.logger.trace(`[CommandCenter][revertSelectedRanges] selectedChanges: ${JSON.stringify(s)}`);
    let a = e.selections;
    await this._revertChanges(e, s), e.selections = a;
  }
  async _revertChanges(e, t) {
    let i = e.document, r = i.uri;
    if (r.scheme !== "file") return;
    let o = Z(r, "~"), s = await c.workspace.openTextDocument(o), a = e.visibleRanges, l = $r(s, i, t), u = new c.WorkspaceEdit();
    u.replace(r, new c.Range(new c.Position(0, 0), i.lineAt(i.lineCount - 1).range.end), l), c.workspace.applyEdit(u), await i.save(), e.revealRange(a[0]);
  }
  async unstage(...e) {
    if (e = e.filter((r) => !!r), e.length === 0 || e[0] && !(e[0].resourceUri instanceof c.Uri)) {
      let r = this.getSCMResource();
      if (!r) return;
      e = [r];
    }
    let t = e.filter((r) => r instanceof Q && r.resourceGroupType === 1);
    if (!t.length) return;
    let i = t.map((r) => r.resourceUri);
    await this.runByRepository(i, async (r, o) => r.revert(o));
  }
  async unstageAll(e) {
    await e.revert([]);
  }
  async unstageSelectedRanges() {
    let e = c.window.activeTextEditor;
    if (!e) return;
    let t = e.document, i = t.uri;
    if (!tt(i)) return;
    let { ref: r } = Ne(i);
    if (r !== "") return;
    let o = this.model.getRepository(i);
    if (!o) return;
    let s = o.indexGroup.resourceStates.find((C) => z(C.resourceUri.fsPath, i.fsPath));
    if (!s) return;
    let a = Kl(e);
    if (!a) return;
    let l = Mi(a);
    this.logger.trace(`[CommandCenter][unstageSelectedRanges] diffInformation: ${JSON.stringify(a)}`), this.logger.trace(`[CommandCenter][unstageSelectedRanges] diffInformation changes: ${JSON.stringify(l)}`);
    let u = Z(s.original, "HEAD"), d = await c.workspace.openTextDocument(u), h = Nn(e.selections, t), p = l.map((C) => h.reduce((S, k) => S || Fn(t, C, k), null)).filter((C) => !!C);
    if (!p.length) {
      c.window.showInformationMessage(c.l10n.t("The selection range does not contain any changes."));
      return;
    }
    let g = p.map(Wl);
    this.logger.trace(`[CommandCenter][unstageSelectedRanges] selectedDiffs: ${JSON.stringify(p)}`), this.logger.trace(`[CommandCenter][unstageSelectedRanges] invertedDiffs: ${JSON.stringify(g)}`);
    let y = $r(t, d, g);
    await o.stage(i, y, t.encoding);
  }
  async unstageFile(e) {
    if (e = e ?? c.window.activeTextEditor?.document.uri, !e) return;
    let t = this.model.getRepository(e);
    if (!t) return;
    let i = t.indexGroup.resourceStates.filter((r) => r.multiFileDiffEditorModifiedUri?.toString() === e.toString()).map((r) => r.resourceUri);
    i.length !== 0 && await t.revert(i);
  }
  async clean(...e) {
    let t = /* @__PURE__ */ new Set();
    if (e = e.filter((r) => r === void 0 || t.has(r.resourceUri.toString()) ? false : (t.add(r.resourceUri.toString()), true)), e.length === 0 || e[0] && !(e[0].resourceUri instanceof c.Uri)) {
      let r = this.getSCMResource();
      if (!r) return;
      e = [r];
    }
    let i = e.filter((r) => r instanceof Q && (r.resourceGroupType === 2 || r.resourceGroupType === 3));
    i.length && await this._cleanAll(i);
  }
  async cleanAll(e) {
    await this._cleanAll(e.workingTreeGroup.resourceStates);
  }
  async cleanAllTracked(e) {
    let t = e.workingTreeGroup.resourceStates.filter((i) => i.type !== m.UNTRACKED && i.type !== m.IGNORED);
    t.length !== 0 && await this._cleanTrackedChanges(t);
  }
  async cleanAllUntracked(e) {
    let t = [...e.workingTreeGroup.resourceStates, ...e.untrackedGroup.resourceStates].filter((i) => i.type === m.UNTRACKED || i.type === m.IGNORED);
    t.length !== 0 && await this._cleanUntrackedChanges(t);
  }
  async _cleanAll(e) {
    if (e.length === 0) return;
    let t = e.filter((r) => r.type !== m.UNTRACKED && r.type !== m.IGNORED), i = e.filter((r) => r.type === m.UNTRACKED || r.type === m.IGNORED);
    if (i.length === 0) await this._cleanTrackedChanges(e);
    else if (t.length === 0) await this._cleanUntrackedChanges(e);
    else {
      let [r, o] = this.getDiscardUntrackedChangesDialogDetails(i), s = t.length === 1 ? c.l10n.t(`

Are you sure you want to discard changes in '{0}'?`, X.basename(t[0].resourceUri.fsPath)) : c.l10n.t(`

Are you sure you want to discard ALL changes in {0} files?`, t.length), a = t.length === 1 ? c.l10n.t("Discard 1 Tracked File") : c.l10n.t("Discard All {0} Tracked Files", t.length), l = c.l10n.t("Discard All {0} Files", e.length), u = await c.window.showWarningMessage(`${r} ${o}${s}

This is IRREVERSIBLE!
Your current working set will be FOREVER LOST if you proceed.`, { modal: true }, a, l);
      if (u === a) e = t;
      else if (u !== l) return;
      let d = e.map((h) => h.resourceUri);
      await this.runByRepository(d, async (h, p) => h.clean(p));
    }
  }
  async _cleanTrackedChanges(e) {
    let t = e.every((a) => a.type === m.DELETED), i = t ? e.length === 1 ? c.l10n.t("Are you sure you want to restore '{0}'?", X.basename(e[0].resourceUri.fsPath)) : c.l10n.t("Are you sure you want to restore ALL {0} files?", e.length) : e.length === 1 ? c.l10n.t("Are you sure you want to discard changes in '{0}'?", X.basename(e[0].resourceUri.fsPath)) : c.l10n.t(`Are you sure you want to discard ALL changes in {0} files?

This is IRREVERSIBLE!
Your current working set will be FOREVER LOST if you proceed.`, e.length), r = t ? e.length === 1 ? c.l10n.t("Restore File") : c.l10n.t("Restore All {0} Files", e.length) : e.length === 1 ? c.l10n.t("Discard File") : c.l10n.t("Discard All {0} Files", e.length);
    if (await c.window.showWarningMessage(i, { modal: true }, r) !== r) return;
    let s = e.map((a) => a.resourceUri);
    await this.runByRepository(s, async (a, l) => a.clean(l));
  }
  async _cleanUntrackedChanges(e) {
    let [t, i, r] = this.getDiscardUntrackedChangesDialogDetails(e);
    if (await c.window.showWarningMessage(t, { detail: i, modal: true }, r) !== r) return;
    let s = e.map((a) => a.resourceUri);
    await this.runByRepository(s, async (a, l) => a.clean(l));
  }
  getDiscardUntrackedChangesDialogDetails(e) {
    let i = c.workspace.getConfiguration("git").get("discardUntrackedChangesToTrash", true) && !hr && !mr, r = i ? "" : e.length === 1 ? `

This is IRREVERSIBLE!
This file will be FOREVER LOST if you proceed.` : `

This is IRREVERSIBLE!
These files will be FOREVER LOST if you proceed.`, o = e.length === 1 ? c.l10n.t("Are you sure you want to DELETE the following untracked file: '{0}'?{1}", X.basename(e[0].resourceUri.fsPath), r) : c.l10n.t("Are you sure you want to DELETE the {0} untracked files?{1}", e.length, r), s = i ? wt ? e.length === 1 ? "You can restore this file from the Recycle Bin." : "You can restore these files from the Recycle Bin." : e.length === 1 ? "You can restore this file from the Trash." : "You can restore these files from the Trash." : "", a = i ? wt ? c.l10n.t("Move to Recycle Bin") : c.l10n.t("Move to Trash") : e.length === 1 ? c.l10n.t("Delete File") : c.l10n.t("Delete All {0} Files", e.length);
    return [o, s, a];
  }
  async smartCommit(e, t, i) {
    let r = c.workspace.getConfiguration("git", c.Uri.file(e.root)), o = r.get("promptToSaveFilesBeforeCommit");
    o === true ? o = "always" : o === false && (o = "never");
    let s = r.get("enableSmartCommit") === true, a = r.get("enableCommitSigning") === true, l = e.indexGroup.resourceStates.length === 0, u = e.workingTreeGroup.resourceStates.length === 0;
    if (!i.empty) {
      if (o !== "never") {
        let y = c.workspace.textDocuments.filter((C) => !C.isUntitled && C.isDirty && me(e.root, C.uri.fsPath));
        if ((o === "staged" || e.indexGroup.resourceStates.length > 0) && (y = y.filter((C) => e.indexGroup.resourceStates.some((S) => z(S.resourceUri.fsPath, C.uri.fsPath)))), y.length > 0) {
          let C = y.length === 1 ? c.l10n.t(`The following file has unsaved changes which won't be included in the commit if you proceed: {0}.

Would you like to save it before committing?`, X.basename(y[0].uri.fsPath)) : c.l10n.t(`There are {0} unsaved files.

Would you like to save them before committing?`, y.length), S = c.l10n.t("Save All & Commit Changes"), k = c.l10n.t("Commit Changes"), G = await c.window.showWarningMessage(C, { modal: true }, S, k);
          if (G === S) await Promise.all(y.map((I) => I.save())), y = y.filter((I) => e.indexGroup.resourceStates.some((D) => z(D.resourceUri.fsPath, I.uri.fsPath))), await e.add(y.map((I) => I.uri)), l = e.indexGroup.resourceStates.length === 0, u = e.workingTreeGroup.resourceStates.length === 0;
          else if (G !== k) return;
        }
      }
      if (!u && l && !s && !i.all && !i.amend) {
        if (!(r.get("suggestSmartCommit") === true)) return;
        let C = c.l10n.t(`There are no staged changes to commit.

Would you like to stage all your changes and commit them directly?`), S = c.l10n.t("Yes"), k = c.l10n.t("Always"), G = c.l10n.t("Never"), I = await c.window.showWarningMessage(C, { modal: true }, S, k, G);
        if (I === k) s = true, r.update("enableSmartCommit", true, true);
        else if (I === G) {
          r.update("suggestSmartCommit", false, true);
          return;
        } else if (I === S) s = true;
        else return;
      }
      s && !i.all && (i = { ...i, all: l });
    }
    i.signCommit = a, r.get("alwaysSignOff") && (i.signoff = true), r.get("useEditorAsCommitInput") && (i.useEditor = true, r.get("verboseCommit") && (i.verbose = true));
    let d = r.get("smartCommitChanges");
    if ((l && u || !i.all && l || l && d === "tracked" && e.workingTreeGroup.resourceStates.every((y) => y.type === m.UNTRACKED)) && !i.amend && !i.empty && !e.mergeInProgress && e.rebaseCommit === void 0) {
      let y = c.l10n.t("Create Empty Commit");
      if (await c.window.showInformationMessage(c.l10n.t("There are no changes to commit."), y) !== y) return;
      i.empty = true;
    }
    if (i.noVerify) {
      if (!r.get("allowNoVerifyCommit")) {
        await c.window.showErrorMessage(c.l10n.t('Commits without verification are not allowed, please enable them with the "git.allowNoVerifyCommit" setting.'));
        return;
      }
      if (r.get("confirmNoVerifyCommit")) {
        let y = c.l10n.t(`You are about to commit your changes without verification, this skips pre-commit hooks and can be undesirable.

Are you sure to continue?`), C = c.l10n.t("OK"), S = c.l10n.t("OK, Don't Ask Again"), k = await c.window.showWarningMessage(y, { modal: true }, C, S);
        if (k === S) r.update("confirmNoVerifyCommit", false, true);
        else if (k !== C) return;
      }
    }
    let h = await t();
    if (!h && !i.amend && !i.useEditor || (i.all && d === "tracked" && (i.all = "tracked"), i.all && r.get("untrackedChanges") !== "mixed" && (i.all = "tracked"), !await Nh(e, i))) return;
    let g = r.get("branchProtectionPrompt");
    if (e.isBranchProtected() && (g === "alwaysPrompt" || g === "alwaysCommitToNewBranch")) {
      let y = c.l10n.t("Commit to a New Branch"), C = y;
      if (g === "alwaysPrompt") {
        let S = c.l10n.t(`You are trying to commit to a protected branch and you might not have permission to push your commits to the remote.

How would you like to proceed?`), k = c.l10n.t("Commit Anyway");
        C = await c.window.showWarningMessage(S, { modal: true }, y, k);
      }
      if (C) {
        if (C === y) {
          let S = await this.promptForBranchName(e);
          if (!S) return;
          await e.branch(S, true);
        }
      } else return;
    }
    await e.commit(h, i);
  }
  async commitWithAnyInput(e, t) {
    let i = e.inputBox.value, r = c.Uri.file(e.root), o = c.workspace.getConfiguration("git", r), s = async () => {
      let a = i;
      if (!a && !o.get("useEditorAsCommitInput")) {
        if (t && t.amend && e.HEAD && e.HEAD.commit) return;
        let u = e.headShortName, d;
        u ? d = c.l10n.t('Message (commit on "{0}")', u) : d = c.l10n.t("Commit message"), a = await c.window.showInputBox({ value: void 0, placeHolder: d, prompt: c.l10n.t("Please provide a commit message"), ignoreFocusOut: true });
      }
      return a;
    };
    await this.smartCommit(e, s, t);
  }
  async commit(e, t) {
    await this.commitWithAnyInput(e, { postCommitCommand: t });
  }
  async commitAmend(e) {
    await this.commitWithAnyInput(e, { amend: true });
  }
  async commitSigned(e) {
    await this.commitWithAnyInput(e, { signoff: true });
  }
  async commitStaged(e) {
    await this.commitWithAnyInput(e, { all: false });
  }
  async commitStagedSigned(e) {
    await this.commitWithAnyInput(e, { all: false, signoff: true });
  }
  async commitStagedAmend(e) {
    await this.commitWithAnyInput(e, { all: false, amend: true });
  }
  async commitAll(e) {
    await this.commitWithAnyInput(e, { all: true });
  }
  async commitAllSigned(e) {
    await this.commitWithAnyInput(e, { all: true, signoff: true });
  }
  async commitAllAmend(e) {
    await this.commitWithAnyInput(e, { all: true, amend: true });
  }
  async commitMessageAccept(e) {
    !e && !c.window.activeTextEditor || (e ??= c.window.activeTextEditor.document.uri, this._closeEditorTab(e));
  }
  async commitMessageDiscard(e) {
    if (!e && !c.window.activeTextEditor) return;
    e ??= c.window.activeTextEditor.document.uri;
    let t = c.window.visibleTextEditors.filter((a) => a.document.languageId === "git-commit" && a.document.uri.toString() === e.toString());
    if (t.length !== 1) return;
    let i = t[0], r = i.document;
    !await i.edit((a) => {
      let l = r.lineAt(0), u = r.lineAt(r.lineCount - 1);
      a.delete(new c.Range(l.range.start, u.range.end));
    }) || !await r.save() || this._closeEditorTab(e);
  }
  _closeEditorTab(e) {
    let t = c.window.tabGroups.all.map((i) => i.tabs).flat().filter((i) => i.input instanceof c.TabInputText && i.input.uri.toString() === e.toString());
    c.window.tabGroups.close(t);
  }
  async _commitEmpty(e, t) {
    let i = c.Uri.file(e.root), r = c.workspace.getConfiguration("git", i);
    if (r.get("confirmEmptyCommits") === true) {
      let s = c.l10n.t("Are you sure you want to create an empty commit?"), a = c.l10n.t("Yes"), l = c.l10n.t("Yes, Don't Show Again"), u = await c.window.showWarningMessage(s, { modal: true }, a, l);
      if (u === l) await r.update("confirmEmptyCommits", false, true);
      else if (u !== a) return;
    }
    await this.commitWithAnyInput(e, { empty: true, noVerify: t });
  }
  async commitEmpty(e) {
    await this._commitEmpty(e);
  }
  async commitNoVerify(e) {
    await this.commitWithAnyInput(e, { noVerify: true });
  }
  async commitStagedNoVerify(e) {
    await this.commitWithAnyInput(e, { all: false, noVerify: true });
  }
  async commitStagedSignedNoVerify(e) {
    await this.commitWithAnyInput(e, { all: false, signoff: true, noVerify: true });
  }
  async commitAmendNoVerify(e) {
    await this.commitWithAnyInput(e, { amend: true, noVerify: true });
  }
  async commitSignedNoVerify(e) {
    await this.commitWithAnyInput(e, { signoff: true, noVerify: true });
  }
  async commitStagedAmendNoVerify(e) {
    await this.commitWithAnyInput(e, { all: false, amend: true, noVerify: true });
  }
  async commitAllNoVerify(e) {
    await this.commitWithAnyInput(e, { all: true, noVerify: true });
  }
  async commitAllSignedNoVerify(e) {
    await this.commitWithAnyInput(e, { all: true, signoff: true, noVerify: true });
  }
  async commitAllAmendNoVerify(e) {
    await this.commitWithAnyInput(e, { all: true, amend: true, noVerify: true });
  }
  async commitEmptyNoVerify(e) {
    await this._commitEmpty(e, true);
  }
  async restoreCommitTemplate(e) {
    e.inputBox.value = await e.getCommitTemplate();
  }
  async undoCommit(e) {
    let t = e.HEAD;
    if (!t || !t.commit) {
      c.window.showWarningMessage(c.l10n.t("Can't undo because HEAD doesn't point to any commit."));
      return;
    }
    let i = await e.getCommit("HEAD");
    if (i.parents.length > 1) {
      let r = c.l10n.t("Undo merge commit");
      if (await c.window.showWarningMessage(c.l10n.t("The last commit was a merge commit. Are you sure you want to undo it?"), { modal: true }, r) !== r) return;
    }
    i.parents.length > 0 ? await e.reset("HEAD~") : (await e.deleteRef("HEAD"), await this.unstageAll(e)), e.inputBox.value = i.message;
  }
  async checkout(e, t) {
    return this._checkout(e, { treeish: t });
  }
  async checkout2(e, t, i) {
    let r = t?.references?.find((l) => l.id === i);
    if (!r) return;
    let s = c.workspace.getConfiguration("git", c.Uri.file(e.root)).get("pullBeforeCheckout", false) === true;
    if (r.id.startsWith("refs/heads/") || r.id.startsWith("refs/tags/")) {
      await e.checkout(r.name, { pullBeforeCheckout: s });
      return;
    }
    let a = await e.findTrackingBranches(r.name);
    a.length > 0 ? await e.checkout(a[0].name, { pullBeforeCheckout: s }) : await e.checkoutTracking(r.name);
  }
  async checkoutDetached(e, t) {
    return this._checkout(e, { detached: true, treeish: t });
  }
  async checkoutDetached2(e, t) {
    return t ? this._checkout(e, { detached: true, treeish: t.id }) : false;
  }
  async _checkout(e, t) {
    if (typeof t?.treeish == "string") return await e.checkout(t?.treeish, t), true;
    let i = new jr(), r = new Kn(), o = new jn(), s = [], a = [];
    t?.detached || a.push(i, r, o);
    let l = [], u = c.window.createQuickPick();
    u.busy = true, u.sortByLabel = false, u.matchOnDetail = false, u.placeholder = t?.detached ? c.l10n.t("Select a branch to checkout in detached mode") : c.l10n.t("Select a branch or tag to checkout"), u.show(), s.push(...await Lh(e, t?.detached));
    let d = () => {
      switch (true) {
        case u.value === "":
          u.items = [...a, ...s];
          break;
        case a.length === 0:
          u.items = s;
          break;
        case s.length === 0:
          u.items = a;
          break;
        default:
          u.items = [...s, { label: "", kind: c.QuickPickItemKind.Separator }, ...a];
          break;
      }
    };
    d(), u.busy = false;
    let h = await new Promise((p) => {
      l.push(u.onDidHide(() => p(void 0))), l.push(u.onDidAccept(() => p(u.activeItems[0]))), l.push(u.onDidTriggerItemButton((g) => {
        let y = g.button, C = g.item;
        y.actual && C.refName && y.actual.run(C.refRemote ? C.refName.substring(C.refRemote.length + 1) : C.refName), p(void 0);
      })), l.push(u.onDidChangeValue(() => d()));
    });
    if (j(l), u.dispose(), !h) return false;
    if (h === i) await this._branch(e, u.value);
    else if (h === r) await this._branch(e, u.value, true);
    else {
      if (h === o) return this._checkout(e, { detached: true });
      {
        let p = h;
        try {
          await p.run(e, t);
        } catch (g) {
          if (g.gitErrorCode !== T.DirtyWorkTree && g.gitErrorCode !== T.WorktreeBranchAlreadyUsed) throw g;
          if (g.gitErrorCode === T.WorktreeBranchAlreadyUsed) {
            if (!e.dotGit.commonPath) return await this.handleWorktreeBranchAlreadyUsed(g), false;
            let G = X.dirname(e.dotGit.commonPath);
            if (c.workspace.workspaceFolders && c.workspace.workspaceFolders.some((I) => z(I.uri.fsPath, G))) {
              let I = this.model.getRepository(G);
              if (I && p.refName && p.refName.replace(`${p.refRemote}/`, "") === I.HEAD?.name) {
                let D = c.l10n.t('Branch "{0}" is already checked out in the current window.', p.refName);
                return await c.window.showErrorMessage(D, { modal: true }), false;
              }
            }
            return await this.handleWorktreeBranchAlreadyUsed(g), false;
          }
          let y = c.l10n.t("Stash & Checkout"), C = c.l10n.t("Migrate Changes"), S = c.l10n.t("Force Checkout"), k = await c.window.showWarningMessage(c.l10n.t("Your local changes would be overwritten by checkout."), { modal: true }, y, C, S);
          k === S ? (await this.cleanAll(e), await p.run(e, t)) : (k === y || k === C) && await this._stash(e, true) && (await p.run(e, t), k === C && await this.stashPopLatest(e));
        }
      }
    }
    return true;
  }
  async branch(e, t) {
    await this._branch(e, void 0, false, t?.id);
  }
  async branchFrom(e) {
    await this._branch(e, void 0, true);
  }
  async generateRandomBranchName(e, t) {
    let r = c.workspace.getConfiguration("git").get("branchRandomName.dictionary"), o = [];
    for (let s of r) s.toLowerCase() === "adjectives" && o.push(Fl), s.toLowerCase() === "animals" && o.push(Ul), s.toLowerCase() === "colors" && o.push($l), s.toLowerCase() === "numbers" && o.push(Ur.generate({ length: 3 }));
    if (o.length === 0) return "";
    for (let s = 0; s < 5; s++) {
      let a = Nl({ dictionaries: o, length: o.length, separator: t });
      if ((await e.getRefs({ pattern: `refs/heads/${a}` })).length === 0) return a;
    }
    return "";
  }
  async promptForBranchName(e, t, i) {
    let r = c.workspace.getConfiguration("git"), o = r.get("branchPrefix"), s = r.get("branchWhitespaceChar"), a = r.get("branchValidationRegex"), l = r.get("branchRandomName.enable", false);
    if (t) return Kr(t, s);
    let u = async () => {
      let C = l ? await this.generateRandomBranchName(e, s) : "";
      return `${o}${C}`;
    }, d = (C) => C.startsWith(o) ? [o.length, C.length] : void 0, h = (C) => {
      let S = new RegExp(a), k = Kr(C, s);
      return S.test(k) ? C === k ? void 0 : { message: c.l10n.t('The new branch will be "{0}"', k), severity: c.InputBoxValidationSeverity.Info } : c.l10n.t("Branch name needs to match regex: {0}", a);
    }, p = [], g = c.window.createInputBox();
    g.placeholder = c.l10n.t("Branch name"), g.prompt = c.l10n.t("Please provide a new branch name"), g.buttons = l ? [{ iconPath: new c.ThemeIcon("refresh"), tooltip: c.l10n.t("Regenerate Branch Name"), location: c.QuickInputButtonLocation.Inline }] : [], g.value = i ?? await u(), g.valueSelection = d(g.value), g.validationMessage = h(g.value), g.ignoreFocusOut = true, g.show();
    let y = await new Promise((C) => {
      p.push(g.onDidHide(() => C(void 0))), p.push(g.onDidAccept(() => C(g.value))), p.push(g.onDidChangeValue((S) => {
        g.validationMessage = h(S);
      })), p.push(g.onDidTriggerButton(async () => {
        g.value = await u(), g.valueSelection = d(g.value);
      }));
    });
    return j(p), g.dispose(), Kr(y || "", s);
  }
  async _branch(e, t, i = false, r) {
    r = r ?? "HEAD";
    let s = c.workspace.getConfiguration("git").get("showReferenceDetails") === true;
    if (i) {
      let l = async () => {
        let h = await e.getRefs({ includeCommitDetails: s }), p = new It(e, [new $e(L.Head), new $e(L.RemoteHead), new $e(L.Tag)]);
        return [new Qn(e), ...p.processRefs(h)];
      }, u = c.l10n.t("Select a ref to create the branch from"), d = await c.window.showQuickPick(l(), { placeHolder: u });
      if (!d) return;
      d instanceof it && d.refName && (r = d.refName);
    }
    let a = await this.promptForBranchName(e, t);
    a && await e.branch(a, true, r);
  }
  async pickRef(e, t) {
    let i = [], r = c.window.createQuickPick();
    r.placeholder = t, r.sortByLabel = false, r.busy = true, r.show(), r.items = await e, r.busy = false;
    let o = await new Promise((s) => {
      i.push(r.onDidHide(() => s(void 0))), i.push(r.onDidAccept(() => s(r.activeItems[0])));
    });
    return j(i), r.dispose(), o;
  }
  async deleteBranch(e, t, i) {
    await this._deleteBranch(e, void 0, t, { remote: false, force: i });
  }
  async deleteBranch2(e, t, i) {
    let r = t?.references?.find((l) => l.id === i);
    if (!r) return;
    if (r.id.startsWith("refs/heads/")) {
      if (r.id === e.historyProvider.currentHistoryItemRef?.id) {
        c.window.showInformationMessage(c.l10n.t("The active branch cannot be deleted."));
        return;
      }
      await this._deleteBranch(e, void 0, r.name, { remote: false });
      return;
    }
    if (r.id === e.historyProvider.currentHistoryItemRemoteRef?.id) {
      c.window.showInformationMessage(c.l10n.t("The remote branch of the active branch cannot be deleted."));
      return;
    }
    let o = r.name.indexOf("/");
    if (o === -1) return;
    let s = r.name.substring(0, o), a = r.name.substring(o + 1);
    await this._deleteBranch(e, s, a, { remote: true });
  }
  async deleteRemoteBranch(e) {
    await this._deleteBranch(e, void 0, void 0, { remote: true });
  }
  async _deleteBranch(e, t, i, r) {
    let o, a = c.workspace.getConfiguration("git").get("showReferenceDetails") === true;
    if (!r.remote && typeof i == "string") o = (l) => e.deleteBranch(i, l);
    else if (r.remote && typeof t == "string" && typeof i == "string") o = (l) => e.deleteRemoteRef(t, i, { force: l });
    else {
      let l = async () => {
        let h = r.remote ? "refs/remotes" : "refs/heads", p = await e.getRefs({ pattern: h, includeCommitDetails: a }), g = r.remote ? [new $e(L.RemoteHead, Hi)] : [new $e(L.Head, Hi)];
        return new It(e, g, { skipCurrentBranch: true, skipCurrentBranchRemote: true }).processRefs(p);
      }, u = r.remote ? c.l10n.t("Select a remote branch to delete") : c.l10n.t("Select a branch to delete"), d = await this.pickRef(l(), u);
      if (!(d instanceof Hi) || !d.refName) return;
      i = d.refName, o = (h) => d.run(e, h);
    }
    try {
      await o(r.force);
    } catch (l) {
      if (l.gitErrorCode !== T.BranchNotFullyMerged) throw l;
      let u = c.l10n.t('The branch "{0}" is not fully merged. Delete anyway?', i), d = c.l10n.t("Delete Branch");
      await c.window.showWarningMessage(u, { modal: true }, d) === d && await o(true);
    }
  }
  async renameBranch(e) {
    let t = e.HEAD && e.HEAD.name, i = await this.promptForBranchName(e, void 0, t);
    if (i) try {
      await e.renameBranch(i);
    } catch (r) {
      switch (r.gitErrorCode) {
        case T.InvalidBranchName:
          c.window.showErrorMessage(c.l10n.t("Invalid branch name"));
          return;
        case T.BranchAlreadyExists:
          c.window.showErrorMessage(c.l10n.t('A branch named "{0}" already exists', i));
          return;
        default:
          throw r;
      }
    }
  }
  async merge(e) {
    let i = c.workspace.getConfiguration("git").get("showReferenceDetails") === true, r = async () => {
      let a = await e.getRefs({ includeCommitDetails: i });
      return new It(e, [new $e(L.Head, di), new $e(L.RemoteHead, di), new $e(L.Tag, di)], { skipCurrentBranch: true, skipCurrentBranchRemote: true }).processRefs(a);
    }, o = c.l10n.t("Select a branch or tag to merge from"), s = await this.pickRef(r(), o);
    s instanceof di && await s.run(e);
  }
  async abortMerge(e) {
    await e.mergeAbort();
  }
  async rebase(e) {
    let i = c.workspace.getConfiguration("git").get("showReferenceDetails") === true, r = async () => {
      let a = await e.getRefs({ includeCommitDetails: i }), u = new It(e, [new $e(L.Head, hi), new $e(L.RemoteHead, hi)], { skipCurrentBranch: true, skipCurrentBranchRemote: true }).processRefs(a);
      if (e.HEAD?.upstream) {
        let d = a.find((h) => h.type === L.RemoteHead && h.name === `${e.HEAD.upstream.remote}/${e.HEAD.upstream.name}`);
        d && u.splice(0, 0, new qn(d));
      }
      return u;
    }, o = c.l10n.t("Select a branch to rebase onto"), s = await this.pickRef(r(), o);
    s instanceof hi && await s.run(e);
  }
  async createTag(e, t) {
    let i = await c.window.showInputBox({ placeHolder: c.l10n.t("Tag name"), prompt: c.l10n.t("Please provide a tag name"), ignoreFocusOut: true });
    if (!i) return;
    let r = await c.window.showInputBox({ placeHolder: c.l10n.t("Message"), prompt: c.l10n.t("Please provide a message to annotate the tag"), ignoreFocusOut: true }), o = i.replace(/^\.|\/\.|\.\.|~|\^|:|\/$|\.lock$|\.lock\/|\\|\*|\s|^\s*$|\.$/g, "-");
    await e.tag({ name: o, message: r, ref: t?.id });
  }
  async deleteTag(e) {
    let i = c.workspace.getConfiguration("git").get("showReferenceDetails") === true, r = async () => {
      let a = await e.getRefs({ pattern: "refs/tags", includeCommitDetails: i });
      return a.length === 0 ? [{ label: c.l10n.t("$(info) This repository has no tags.") }] : a.map((l) => new zr(l));
    }, o = c.l10n.t("Select a tag to delete"), s = await this.pickRef(r(), o);
    s instanceof zr && await s.run(e);
  }
  async migrateWorktreeChanges(e) {
    let t = async () => {
      let d = await e.getWorktrees();
      return d.length === 0 ? [{ label: c.l10n.t("$(info) This repository has no worktrees.") }] : d.map((h) => new $i(h));
    }, i = c.l10n.t("Select a worktree to migrate changes from"), r = await this.pickRef(t(), i);
    if (!r || !(r instanceof $i)) return;
    let o = this.model.getRepository(r.worktree.path);
    if (!o) return;
    if (o.indexGroup.resourceStates.length === 0 && o.workingTreeGroup.resourceStates.length === 0 && o.untrackedGroup.resourceStates.length === 0) {
      await c.window.showInformationMessage(c.l10n.t("There are no changes in the selected worktree to migrate."));
      return;
    }
    let s = [...o.indexGroup.resourceStates, ...o.workingTreeGroup.resourceStates, ...o.untrackedGroup.resourceStates].map((d) => X.relative(o.root, d.resourceUri.fsPath)), a = [...e.workingTreeGroup.resourceStates, ...e.untrackedGroup.resourceStates].map((d) => X.relative(e.root, d.resourceUri.fsPath)), l = s.filter((d) => a.includes(d));
    if (l.length > 0) {
      let d = l.join(`
 `), h = c.l10n.t(`Your local changes to the following files would be overwritten by merge:
 {0}

Please stage, commit, or stash your changes in the repository before migrating changes.`, d);
      await c.window.showErrorMessage(h, { modal: true });
      return;
    }
    await o.createStash(void 0, true);
    let u = await o.getStashes();
    try {
      await e.applyStash(u[0].index), o.dropStash(u[0].index);
    } catch (d) {
      if (d.gitErrorCode !== T.StashConflict) throw await o.popStash(), d;
      e.isWorktreeMigrating = true;
      let h = c.l10n.t("There are merge conflicts from migrating changes. Please resolve them before committing."), p = c.l10n.t("Show Changes");
      await c.window.showWarningMessage(h, p) === p && await c.commands.executeCommand("workbench.view.scm"), o.dropStash(u[0].index);
    }
  }
  async openWorktreeMergeEditor(e) {
    let t = gn(e), i = { uri: t.ours, title: c.l10n.t("Workspace") }, r = { uri: t.theirs, title: c.l10n.t("Worktree") };
    await c.commands.executeCommand("_open.mergeEditor", { base: t.base, input1: i, input2: r, output: e });
  }
  async createWorktree(e) {
    if (e = this.model.getRepository(e), e || this.model.repositories.length === 1 && (e = this.model.repositories[0]), !e) {
      let t = this.model.repositories.filter((i) => i.kind === "repository" || i.kind === "submodule");
      t.length === 1 && (e = t[0]);
    }
    e || (e = await this.model.pickRepository()), e && await this._createWorktree(e);
  }
  async _createWorktree(e) {
    let t = c.workspace.getConfiguration("git"), i = t.get("branchPrefix"), r = t.get("showReferenceDetails") === true, o = new jr(), s = async () => {
      let H = await e.getRefs({ includeCommitDetails: r }), B = new It(e, [new $e(L.Head), new $e(L.RemoteHead), new $e(L.Tag)]).processRefs(H);
      return [o, { label: "", kind: c.QuickPickItemKind.Separator }, ...B];
    }, a = c.l10n.t("Select a branch or tag to create the new worktree from"), l = await this.pickRef(s(), a);
    if (!l) return;
    let u, d, h = false;
    if (l === o) {
      if (u = await this.promptForBranchName(e), !u) return;
      e.HEAD?.commit ? d = "HEAD" : (h = true, d = void 0);
    } else {
      if (!(l instanceof it) || !l.refName) return;
      if (l.refName === e.HEAD?.name) {
        let H = c.l10n.t('Branch "{0}" is already checked out in the current repository.', l.refName), W = c.l10n.t("Create New Branch");
        if (await c.window.showWarningMessage(H, { modal: true }, W) === W) {
          if (u = await this.promptForBranchName(e), !u) return;
          e.HEAD?.commit ? d = "HEAD" : (h = true, d = void 0);
        } else return;
      } else {
        let H = e.worktrees.find((W) => W.ref === l.refId);
        if (H) {
          let W = c.l10n.t('Branch "{0}" is already checked out in the worktree at "{1}".', l.refName, H.path);
          await this.handleWorktreeConflict(H.path, W);
          return;
        }
        d = l.refName;
      }
    }
    let p = u ?? d ?? "orphan", g = p.startsWith(i) ? p.substring(i.length).replace(/\//g, "-") : p.replace(/\//g, "-"), y = async () => {
      let H = this.globalState.get(`${v2.WORKTREE_ROOT_KEY}:${e.root}`), W = H ? c.Uri.file(H) : c.Uri.file(X.dirname(e.root)), B = await c.window.showOpenDialog({ defaultUri: W, canSelectFiles: false, canSelectFolders: true, canSelectMany: false, openLabel: c.l10n.t("Select as Worktree Destination") });
      if (!(!B || B.length === 0)) return X.join(B[0].fsPath, g);
    }, C = (H) => !H || !g ? void 0 : [H.length - g.length, H.length], S = (H) => e.worktrees.find((B) => z(X.normalize(B.path), X.normalize(H))) ? { message: c.l10n.t('A worktree already exists at "{0}".', H), severity: c.InputBoxValidationSeverity.Warning } : void 0, k = this.globalState.get(`${v2.WORKTREE_ROOT_KEY}:${e.root}`), G = k ? X.join(k, g) : X.join(X.dirname(e.root), `${X.basename(e.root)}.worktrees`, g), I = [], D = c.window.createInputBox();
    I.push(D), D.placeholder = c.l10n.t("Worktree path"), D.prompt = c.l10n.t("Please provide a worktree path"), D.value = G, D.valueSelection = C(D.value), D.validationMessage = S(D.value), D.ignoreFocusOut = true, D.buttons = [{ iconPath: new c.ThemeIcon("folder"), tooltip: c.l10n.t("Select Worktree Destination"), location: c.QuickInputButtonLocation.Inline }], D.show();
    let M = await new Promise((H) => {
      I.push(D.onDidHide(() => H(void 0))), I.push(D.onDidAccept(() => H(D.value))), I.push(D.onDidChangeValue((W) => {
        D.validationMessage = S(W);
      })), I.push(D.onDidTriggerButton(async () => {
        D.value = await y() ?? "", D.valueSelection = C(D.value);
      }));
    });
    if (j(I), !!M) try {
      await e.addWorktree({ path: M, branch: u, commitish: d, orphan: h });
      let H = X.dirname(M);
      H !== k && this.globalState.update(`${v2.WORKTREE_ROOT_KEY}:${e.root}`, H);
    } catch (H) {
      if (H.gitErrorCode === T.WorktreeAlreadyExists) await this.handleWorktreeAlreadyExists(H);
      else if (H.gitErrorCode === T.WorktreeBranchAlreadyUsed) await this.handleWorktreeBranchAlreadyUsed(H);
      else throw H;
      return;
    }
  }
  async handleWorktreeBranchAlreadyUsed(e) {
    let t = e.stderr.match(/fatal: '([^']+)' is already used by worktree at '([^']+)'/);
    if (!t) return;
    let [, i, r] = t, o = c.l10n.t('Branch "{0}" is already checked out in the worktree at "{1}".', i, r);
    await this.handleWorktreeConflict(r, o);
  }
  async handleWorktreeAlreadyExists(e) {
    let t = e.stderr.match(/fatal: '([^']+)'/);
    if (!t) return;
    let [, i] = t, r = c.l10n.t('A worktree already exists at "{0}".', i);
    await this.handleWorktreeConflict(i, r);
  }
  async handleWorktreeConflict(e, t) {
    await this.model.openRepository(e, true);
    let i = this.model.getRepository(e);
    if (!i) return;
    let r = c.l10n.t("Open Worktree in Current Window"), o = c.l10n.t("Open Worktree in New Window"), s = await c.window.showWarningMessage(t, { modal: true }, r, o);
    s === r ? await this.openWorktreeInCurrentWindow(i) : s === o && await this.openWorktreeInNewWindow(i);
  }
  async deleteWorktree(e) {
    if (!e.dotGit.commonPath) return;
    let t = this.model.getRepository(X.dirname(e.dotGit.commonPath));
    if (!t) {
      await c.window.showErrorMessage(c.l10n.t("You cannot delete the worktree you are currently in. Please switch to the main repository first."), { modal: true });
      return;
    }
    try {
      await t.deleteWorktree(e.root);
    } catch (i) {
      if (i.gitErrorCode === T.WorktreeContainsChanges) {
        let r = c.l10n.t("Force Delete"), o = c.l10n.t("The worktree contains modified or untracked files. Do you want to force delete?");
        await c.window.showWarningMessage(o, { modal: true }, r) === r ? await t.deleteWorktree(e.root, { force: true }) : await this.model.openRepository(e.root);
        return;
      }
      throw i;
    }
  }
  async deleteWorktreeFromPalette(e) {
    let t = async () => {
      let o = await e.getWorktrees();
      return o.length === 0 ? [{ label: c.l10n.t("$(info) This repository has no worktrees.") }] : o.map((s) => new Qr(s));
    }, i = c.l10n.t("Select a worktree to delete"), r = await this.pickRef(t(), i);
    r instanceof Qr && await r.run(e);
  }
  async openWorktreeInCurrentWindow(e) {
    if (!e) return;
    let t = c.Uri.file(e.root);
    await c.commands.executeCommand("vscode.openFolder", t, { forceReuseWindow: true });
  }
  async openWorktreeInNewWindow(e) {
    if (!e) return;
    let t = c.Uri.file(e.root);
    await c.commands.executeCommand("vscode.openFolder", t, { forceNewWindow: true });
  }
  async deleteTag2(e, t, i) {
    let r = t?.references?.find((o) => o.id === i);
    r && await e.deleteTag(r.name);
  }
  async deleteRemoteTag(e) {
    let t = e.remotes.filter((a) => a.pushUrl !== void 0).map((a) => new Ni(e, a));
    if (t.length === 0) {
      c.window.showErrorMessage(c.l10n.t("Your repository has no remotes configured to push to."));
      return;
    }
    let i = t[0].remoteName;
    if (t.length > 1) {
      let a = c.l10n.t("Select a remote to delete a tag from"), l = await c.window.showQuickPick(t, { placeHolder: a });
      if (!l) return;
      i = l.remoteName;
    }
    let r = async () => {
      let a = await e.getRemoteRefs(i, { tags: true }), l = /* @__PURE__ */ new Set(), u = [];
      for (let d of a) {
        let h = (d.name ?? "").replace(/\^{}$/, "");
        l.has(h) || (u.push({ ...d, name: h }), l.add(h));
      }
      return u.length === 0 ? [{ label: c.l10n.t('$(info) Remote "{0}" has no tags.', i) }] : u.map((d) => new qr(d));
    }, o = c.l10n.t("Select a remote tag to delete"), s = await c.window.showQuickPick(r(), { placeHolder: o });
    s instanceof qr && await s.run(e, i);
  }
  async fetch(e) {
    if (e.remotes.length === 0) {
      c.window.showWarningMessage(c.l10n.t("This repository has no remotes configured to fetch from."));
      return;
    }
    if (e.remotes.length === 1) {
      await e.fetchDefault();
      return;
    }
    let t = e.remotes.map((o) => new Ni(e, o));
    if (e.HEAD?.upstream?.remote) {
      let o = t.findIndex((s) => s.remoteName === e.HEAD.upstream.remote);
      o !== -1 && t.splice(0, 0, ...t.splice(o, 1));
    }
    let i = c.window.createQuickPick();
    i.placeholder = c.l10n.t("Select a remote to fetch"), i.canSelectMany = false, i.items = [...t, { label: "", kind: c.QuickPickItemKind.Separator }, new Yn(e)], i.show();
    let r = await new Promise((o) => {
      i.onDidAccept(() => o(i.activeItems[0])), i.onDidHide(() => o(void 0));
    });
    i.hide(), r && await r.run();
  }
  async fetchPrune(e) {
    if (e.remotes.length === 0) {
      c.window.showWarningMessage(c.l10n.t("This repository has no remotes configured to fetch from."));
      return;
    }
    await e.fetchPrune();
  }
  async fetchAll(e) {
    if (e.remotes.length === 0) {
      c.window.showWarningMessage(c.l10n.t("This repository has no remotes configured to fetch from."));
      return;
    }
    await e.fetchAll();
  }
  async fetchRef(e, t) {
    if (t = t ?? e?.historyProvider.currentHistoryItemRemoteRef?.id, !e || !t) return;
    let i = await e.getBranch(t);
    await e.fetch({ remote: i.remote, ref: i.name });
  }
  async pullFrom(e) {
    let t = e.remotes;
    if (t.length === 0) {
      c.window.showWarningMessage(c.l10n.t("Your repository has no remotes configured to pull from."));
      return;
    }
    let i = t[0].name;
    if (t.length > 1) {
      let l = t.filter((h) => h.fetchUrl !== void 0).map((h) => ({ label: h.name, description: h.fetchUrl })), u = c.l10n.t("Pick a remote to pull the branch from"), d = await c.window.showQuickPick(l, { placeHolder: u });
      if (!d) return;
      i = d.label;
    }
    let r = async () => (await e.getRefs({ pattern: `refs/remotes/${i}/` })).map((u) => new it(u)), o = c.l10n.t("Pick a branch to pull from"), s = await this.pickRef(r(), o);
    if (!s || !s.refName) return;
    let a = i.length;
    await e.pullFrom(false, i, s.refName.slice(a + 1));
  }
  async pull(e) {
    if (e.remotes.length === 0) {
      c.window.showWarningMessage(c.l10n.t("Your repository has no remotes configured to pull from."));
      return;
    }
    await e.pull(e.HEAD);
  }
  async pullRebase(e) {
    if (e.remotes.length === 0) {
      c.window.showWarningMessage(c.l10n.t("Your repository has no remotes configured to pull from."));
      return;
    }
    await e.pullWithRebase(e.HEAD);
  }
  async pullRef(e, t) {
    if (t = t ?? e?.historyProvider.currentHistoryItemRemoteRef?.id, !e || !t) return;
    let i = await e.getBranch(t);
    await e.pullFrom(false, i.remote, i.name);
  }
  async _push(e, t) {
    let i = e.remotes;
    if (i.length === 0) {
      if (t.silent) return;
      let s = c.l10n.t("Add Remote");
      await c.window.showWarningMessage(c.l10n.t("Your repository has no remotes configured to push to."), s) === s && await this.addRemote(e);
      return;
    }
    let r = c.workspace.getConfiguration("git", c.Uri.file(e.root)), o;
    if (t.forcePush) {
      if (!r.get("allowForcePush")) {
        await c.window.showErrorMessage(c.l10n.t('Force push is not allowed, please enable it with the "git.allowForcePush" setting.'));
        return;
      }
      let s = r.get("useForcePushWithLease") === true, a = r.get("useForcePushIfIncludes") === true;
      if (o = s ? a ? ot.ForceWithLeaseIfIncludes : ot.ForceWithLease : ot.Force, r.get("confirmForcePush")) {
        let l = c.l10n.t(`You are about to force push your changes, this can be destructive and could inadvertently overwrite changes made by others.

Are you sure to continue?`), u = c.l10n.t("OK"), d = c.l10n.t("OK, Don't Ask Again"), h = await c.window.showWarningMessage(l, { modal: true }, u, d);
        if (h === d) r.update("confirmForcePush", false, true);
        else if (h !== u) return;
      }
    }
    if (t.pushType === 2) {
      await e.pushFollowTags(void 0, o);
      return;
    }
    if (t.pushType === 3 && await e.pushTags(void 0, o), !e.HEAD || !e.HEAD.name) {
      t.silent || c.window.showWarningMessage(c.l10n.t("Please check out a branch to push to a remote."));
      return;
    }
    if (t.pushType === 0) try {
      await e.push(e.HEAD, o);
    } catch (s) {
      if (s.gitErrorCode !== T.NoUpstreamBranch) throw s;
      if (t.silent) return;
      if (this.globalState.get("confirmBranchPublish", true)) {
        let a = e.HEAD.name, l = c.l10n.t('The branch "{0}" has no remote branch. Would you like to publish this branch?', a), u = c.l10n.t("OK"), d = c.l10n.t("OK, Don't Ask Again"), h = await c.window.showWarningMessage(l, { modal: true }, u, d);
        (h === u || h === d) && (h === d && this.globalState.update("confirmBranchPublish", false), await this.publish(e));
      } else await this.publish(e);
    }
    else {
      let s = e.HEAD.name;
      if (t.pushTo?.remote) await e.pushTo(t.pushTo.remote, t.pushTo.refspec || s, t.pushTo.setUpstream, o);
      else {
        let a = new Yr(this), l = [...i.filter((h) => h.pushUrl !== void 0).map((h) => ({ label: h.name, description: h.pushUrl })), a], u = c.l10n.t('Pick a remote to publish the branch "{0}" to:', s), d = await c.window.showQuickPick(l, { placeHolder: u });
        if (!d) return;
        if (d === a) {
          let h = await this.addRemote(e);
          h && await e.pushTo(h, s, void 0, o);
        } else await e.pushTo(d.label, s, void 0, o);
      }
    }
  }
  async push(e) {
    await this._push(e, { pushType: 0 });
  }
  async pushForce(e) {
    await this._push(e, { pushType: 0, forcePush: true });
  }
  async pushFollowTags(e) {
    await this._push(e, { pushType: 2 });
  }
  async pushFollowTagsForce(e) {
    await this._push(e, { pushType: 2, forcePush: true });
  }
  async pushRef(e) {
    e && await this._push(e, { pushType: 0 });
  }
  async cherryPick(e) {
    let t = await c.window.showInputBox({ placeHolder: c.l10n.t("Commit Hash"), prompt: c.l10n.t("Please provide the commit hash"), ignoreFocusOut: true });
    t && await e.cherryPick(t);
  }
  async cherryPick2(e, t) {
    t && await e.cherryPick(t.id);
  }
  async cherryPickAbort(e) {
    await e.cherryPickAbort();
  }
  async pushTo(e, t, i, r) {
    await this._push(e, { pushType: 1, pushTo: { remote: t, refspec: i, setUpstream: r } });
  }
  async pushToForce(e, t, i, r) {
    await this._push(e, { pushType: 1, pushTo: { remote: t, refspec: i, setUpstream: r }, forcePush: true });
  }
  async pushTags(e) {
    await this._push(e, { pushType: 3 });
  }
  async addRemote(e) {
    let t = await $n({ providerLabel: (o) => c.l10n.t("Add remote from {0}", o.name), urlLabel: c.l10n.t("Add remote from URL") });
    if (!t) return;
    let i = await c.window.showInputBox({ placeHolder: c.l10n.t("Remote name"), prompt: c.l10n.t("Please provide a remote name"), ignoreFocusOut: true, validateInput: (o) => {
      if (zl(o)) {
        if (e.remotes.find((s) => s.name === o)) return c.l10n.t('Remote "{0}" already exists.', o);
      } else return c.l10n.t("Remote name format invalid");
      return null;
    } }), r = zl(i || "");
    if (r) return await e.addRemote(r, t.trim()), await e.fetch({ remote: r }), r;
  }
  async removeRemote(e) {
    if (e.remotes.length === 0) {
      c.window.showErrorMessage(c.l10n.t("Your repository has no remotes."));
      return;
    }
    let i = e.remotes.map((s) => new Ni(e, s)), r = c.l10n.t("Pick a remote to remove"), o = await c.window.showQuickPick(i, { placeHolder: r });
    o && await e.removeRemote(o.remoteName);
  }
  async _sync(e, t) {
    let i = e.HEAD;
    if (i) {
      if (!i.upstream) {
        this._push(e, { pushType: 0 });
        return;
      }
    } else return;
    let r = i.remote || i.upstream.remote, o = e.remotes.find((u) => u.name === r), s = o && o.isReadOnly, a = c.workspace.getConfiguration("git");
    if (!s && a.get("confirmSync") === true) {
      let u = c.l10n.t('This action will pull and push commits from and to "{0}/{1}".', i.upstream.remote, i.upstream.name), d = c.l10n.t("OK"), h = c.l10n.t("OK, Don't Show Again"), p = await c.window.showWarningMessage(u, { modal: true }, d, h);
      if (p === h) await a.update("confirmSync", false, true);
      else if (p !== d) return;
    }
    await e.sync(i, t);
  }
  async sync(e) {
    let i = c.workspace.getConfiguration("git", c.Uri.file(e.root)).get("rebaseWhenSync", false) === true;
    try {
      await this._sync(e, i);
    } catch (r) {
      if (/Cancelled/i.test(r && (r.message || r.stderr || ""))) return;
      throw r;
    }
  }
  async syncAll() {
    await Promise.all(this.model.repositories.map(async (e) => {
      let i = c.workspace.getConfiguration("git", c.Uri.file(e.root)).get("rebaseWhenSync", false) === true, r = e.HEAD;
      !r || !r.upstream || await e.sync(r, i);
    }));
  }
  async syncRebase(e) {
    try {
      await this._sync(e, true);
    } catch (t) {
      if (/Cancelled/i.test(t && (t.message || t.stderr || ""))) return;
      throw t;
    }
  }
  async publish(e) {
    let t = e.HEAD && e.HEAD.name || "", i = e.remotes;
    if (i.length === 0) {
      let l = this.model.getRemoteSourcePublishers();
      if (l.length === 0) {
        c.window.showWarningMessage(c.l10n.t("Your repository has no remotes configured to publish to."));
        return;
      }
      let u;
      if (l.length === 1) u = l[0];
      else {
        let d = l.map((g) => ({ label: (g.icon ? `$(${g.icon}) ` : "") + c.l10n.t("Publish to {0}", g.name), alwaysShow: true, provider: g })), h = c.l10n.t('Pick a provider to publish the branch "{0}" to:', t), p = await c.window.showQuickPick(d, { placeHolder: h });
        if (!p) return;
        u = p.provider;
      }
      await u.publishRepository(new Ee(e)), this.model.firePublishEvent(e, t);
      return;
    }
    if (i.length === 1) {
      await e.pushTo(i[0].name, t, true), this.model.firePublishEvent(e, t);
      return;
    }
    let r = new Yr(this), o = [...e.remotes.map((l) => ({ label: l.name, description: l.pushUrl })), r], s = c.l10n.t('Pick a remote to publish the branch "{0}" to:', t), a = await c.window.showQuickPick(o, { placeHolder: s });
    if (a) if (a === r) {
      let l = await this.addRemote(e);
      l && (await e.pushTo(l, t, true), this.model.firePublishEvent(e, t));
    } else await e.pushTo(a.label, t, true), this.model.firePublishEvent(e, t);
  }
  async ignore(...e) {
    if (e = e.filter((i) => !!i), e.length === 0 || e[0] && !(e[0].resourceUri instanceof c.Uri)) {
      let i = this.getSCMResource();
      if (!i) return;
      e = [i];
    }
    let t = e.filter((i) => i instanceof Q).map((i) => i.resourceUri);
    t.length && await this.runByRepository(t, async (i, r) => i.ignore(r));
  }
  async revealInExplorer(e) {
    e && e.resourceUri instanceof c.Uri && await c.commands.executeCommand("revealInExplorer", e.resourceUri);
  }
  async revealFileInOS(e) {
    e && e.resourceUri instanceof c.Uri && await c.commands.executeCommand("revealFileInOS", e.resourceUri);
  }
  async _stash(e, t = false, i = false) {
    let r = e.workingTreeGroup.resourceStates.length === 0 && (!t || e.untrackedGroup.resourceStates.length === 0), o = e.indexGroup.resourceStates.length === 0;
    if (i) {
      if (o) return c.window.showInformationMessage(c.l10n.t("There are no staged changes to stash.")), false;
    } else if (r && o) return c.window.showInformationMessage(c.l10n.t("There are no changes to stash.")), false;
    let s = c.workspace.getConfiguration("git", c.Uri.file(e.root)), a = s.get("promptToSaveFilesBeforeStash");
    if (a !== "never") {
      let u = c.workspace.textDocuments.filter((d) => !d.isUntitled && d.isDirty && me(e.root, d.uri.fsPath));
      if ((a === "staged" || e.indexGroup.resourceStates.length > 0) && (u = u.filter((d) => e.indexGroup.resourceStates.some((h) => z(h.resourceUri.fsPath, d.uri.fsPath)))), u.length > 0) {
        let d = u.length === 1 ? c.l10n.t(`The following file has unsaved changes which won't be included in the stash if you proceed: {0}.

Would you like to save it before stashing?`, X.basename(u[0].uri.fsPath)) : c.l10n.t(`There are {0} unsaved files.

Would you like to save them before stashing?`, u.length), h = c.l10n.t("Save All & Stash"), p = c.l10n.t("Stash Anyway"), g = await c.window.showWarningMessage(d, { modal: true }, h, p);
        if (g === h) await Promise.all(u.map((y) => y.save()));
        else if (g !== p) return false;
      }
    }
    let l;
    if (s.get("useCommitInputAsStashMessage") && (!e.sourceControl.commitTemplate || e.inputBox.value !== e.sourceControl.commitTemplate) && (l = e.inputBox.value), l = await c.window.showInputBox({ value: l, prompt: c.l10n.t("Optionally provide a stash message"), placeHolder: c.l10n.t("Stash message") }), typeof l > "u") return false;
    try {
      return await e.createStash(l, t, i), true;
    } catch (u) {
      if (/You do not have the initial commit yet/.test(u.stderr || "")) return c.window.showInformationMessage(c.l10n.t("The repository does not have any commits. Please make an initial commit before creating a stash.")), false;
      throw u;
    }
  }
  async stash(e) {
    return await this._stash(e);
  }
  async stashStaged(e) {
    return await this._stash(e, false, true);
  }
  async stashIncludeUntracked(e) {
    return await this._stash(e, true);
  }
  async stashPop(e) {
    let t = c.l10n.t("Pick a stash to pop"), i = await this.pickStash(e, t);
    i && await e.popStash(i.index);
  }
  async stashPopLatest(e) {
    if ((await e.getStashes()).length === 0) {
      c.window.showInformationMessage(c.l10n.t("There are no stashes in the repository."));
      return;
    }
    await e.popStash();
  }
  async stashPopEditor(e) {
    let t = await this.getStashFromUri(e);
    t && (await c.commands.executeCommand("workbench.action.closeActiveEditor"), await t.repository.popStash(t.stash.index));
  }
  async stashApply(e) {
    let t = c.l10n.t("Pick a stash to apply"), i = await this.pickStash(e, t);
    i && await e.applyStash(i.index);
  }
  async stashApplyLatest(e) {
    if ((await e.getStashes()).length === 0) {
      c.window.showInformationMessage(c.l10n.t("There are no stashes in the repository."));
      return;
    }
    await e.applyStash();
  }
  async stashApplyEditor(e) {
    let t = await this.getStashFromUri(e);
    t && (await c.commands.executeCommand("workbench.action.closeActiveEditor"), await t.repository.applyStash(t.stash.index));
  }
  async stashDrop(e) {
    let t = c.l10n.t("Pick a stash to drop"), i = await this.pickStash(e, t);
    i && await this._stashDrop(e, i);
  }
  async stashDropAll(e) {
    let t = await e.getStashes();
    if (t.length === 0) {
      c.window.showInformationMessage(c.l10n.t("There are no stashes in the repository."));
      return;
    }
    let i = c.l10n.t("Yes"), r = t.length === 1 ? c.l10n.t("Are you sure you want to drop ALL stashes? There is 1 stash that will be subject to pruning, and MAY BE IMPOSSIBLE TO RECOVER.") : c.l10n.t("Are you sure you want to drop ALL stashes? There are {0} stashes that will be subject to pruning, and MAY BE IMPOSSIBLE TO RECOVER.", t.length);
    await c.window.showWarningMessage(r, { modal: true }, i) === i && await e.dropStash();
  }
  async stashDropEditor(e) {
    let t = await this.getStashFromUri(e);
    t && await this._stashDrop(t.repository, t.stash) && await c.commands.executeCommand("workbench.action.closeActiveEditor");
  }
  async _stashDrop(e, t) {
    let i = c.l10n.t("Yes");
    return await c.window.showWarningMessage(c.l10n.t("Are you sure you want to drop the stash: {0}?", t.description), { modal: true }, i) !== i ? false : (await e.dropStash(t.index), true);
  }
  async stashView(e) {
    let t = c.l10n.t("Pick a stash to view"), i = await this.pickStash(e, t);
    if (!i) return;
    let r = await e.showStash(i.index);
    if (!r || r.length === 0) return;
    let o = i.parents.length > 0 ? i.parents[0] : `${i.hash}^`, s = i.parents.length === 3 ? i.parents[2] : void 0, a = [];
    if (s) {
      let h = await e.getObjectFiles(s);
      a.push(...h.map((p) => X.join(e.root, p.file)));
    }
    let l = `Git Stash #${i.index}: ${i.description}`, u = Z(c.Uri.file(e.root), `stash@{${i.index}}`, { scheme: "git-stash" }), d = [];
    for (let h of r) {
      let g = !!a.find((y) => z(y, h.uri.fsPath)) ? s ?? i.hash : i.hash;
      d.push(oi(h, o, g));
    }
    c.commands.executeCommand("_workbench.openMultiDiffEditor", { multiDiffSourceUri: u, title: l, resources: d });
  }
  async pickStash(e, t) {
    let i = async () => {
      let o = await e.getStashes();
      return o.length > 0 ? o.map((s) => new Xr(s)) : [{ label: c.l10n.t("$(info) This repository has no stashes.") }];
    }, r = await c.window.showQuickPick(i(), { placeHolder: t });
    return r instanceof Xr ? r.stash : void 0;
  }
  async getStashFromUri(e) {
    if (!e || e.scheme !== "git-stash") return;
    let t = Ne(e), i = this.model.getRepository(t.path);
    if (!i) return;
    let o = /^stash@{(\d+)}$/.exec(t.ref);
    if (!o) return;
    let [, s] = o, l = (await i.getStashes()).find((u) => u.index === parseInt(s));
    if (l) return { repository: i, stash: l };
  }
  async timelineOpenDiff(e, t, i) {
    let r = this.resolveTimelineOpenDiffCommand(e, t, { preserveFocus: true, preview: true, viewColumn: c.ViewColumn.Active });
    if (r !== void 0) return c.commands.executeCommand(r.command, ...r.arguments ?? []);
  }
  resolveTimelineOpenDiffCommand(e, t, i) {
    if (t == null || !Xe.is(e)) return;
    let r = X.basename(t.fsPath), o;
    return (e.previousRef === "HEAD" || e.previousRef === "~") && e.ref === "" ? o = c.l10n.t("{0} (Working Tree)", r) : e.previousRef === "HEAD" && e.ref === "~" ? o = c.l10n.t("{0} (Index)", r) : o = c.l10n.t("{0} ({1}) ↔ {0} ({2})", r, e.shortPreviousRef, e.shortRef), { command: "vscode.diff", title: c.l10n.t("Open Comparison"), arguments: [Z(t, e.previousRef), e.ref === "" ? t : Z(t, e.ref), o, i] };
  }
  async timelineViewCommit(e, t, i) {
    if (!Xe.is(e)) return;
    let r = await this._resolveTimelineOpenCommitCommand(e, t, { preserveFocus: true, preview: true, viewColumn: c.ViewColumn.Active });
    if (r !== void 0) return c.commands.executeCommand(r.command, ...r.arguments ?? []);
  }
  async _resolveTimelineOpenCommitCommand(e, t, i) {
    if (t == null || !Xe.is(e)) return;
    let r = await this.model.getRepository(t.fsPath);
    if (!r) return;
    let o = await r.getCommit(e.ref), s = o.parents.length > 0 ? o.parents[0] : await r.getEmptyTree(), l = (await r.diffTrees(s, o.hash)).map((h) => oi(h, s, o.hash)), u = `${e.shortRef} - ${mt(o.message)}`, d = c.Uri.from({ scheme: "scm-history-item", path: `${r.root}/${s}..${o.hash}` });
    return { command: "_workbench.openMultiDiffEditor", title: c.l10n.t("Open Commit"), arguments: [{ multiDiffSourceUri: d, title: u, resources: l }, i] };
  }
  async timelineCopyCommitId(e, t, i) {
    Xe.is(e) && c.env.clipboard.writeText(e.ref);
  }
  async timelineCopyCommitMessage(e, t, i) {
    Xe.is(e) && c.env.clipboard.writeText(e.message);
  }
  async timelineSelectForCompare(e, t, i) {
    !Xe.is(e) || !t || (this._selectedForCompare = { uri: t, item: e }, await c.commands.executeCommand("setContext", "git.timeline.selectedForCompare", true));
  }
  async timelineCompareWithSelected(e, t, i) {
    if (!Xe.is(e) || !t || !this._selectedForCompare || t.toString() !== this._selectedForCompare.uri.toString()) return;
    let { item: r } = this._selectedForCompare, o = X.basename(t.fsPath), s;
    (r.previousRef === "HEAD" || r.previousRef === "~") && r.ref === "" ? s = c.l10n.t("{0} (Working Tree)", o) : r.previousRef === "HEAD" && r.ref === "~" ? s = c.l10n.t("{0} (Index)", o) : s = c.l10n.t("{0} ({1})", o, r.shortRef);
    let a;
    (e.previousRef === "HEAD" || e.previousRef === "~") && e.ref === "" ? a = c.l10n.t("{0} (Working Tree)", o) : e.previousRef === "HEAD" && e.ref === "~" ? a = c.l10n.t("{0} (Index)", o) : a = c.l10n.t("{0} ({1})", o, e.shortRef);
    let l = c.l10n.t("{0} ↔ {1}", s, a);
    await c.commands.executeCommand("vscode.diff", r.ref === "" ? t : Z(t, r.ref), e.ref === "" ? t : Z(t, e.ref), l);
  }
  async rebaseAbort(e) {
    e.rebaseCommit ? await e.rebaseAbort() : await c.window.showInformationMessage(c.l10n.t("No rebase in progress."));
  }
  closeDiffEditors(e) {
    e.closeDiffEditors(void 0, void 0, true);
  }
  closeUnmodifiedEditors() {
    let e = [], t = [];
    for (let i of this.model.repositories) t.push(...i.indexGroup.resourceStates.map((r) => r.resourceUri.fsPath)), t.push(...i.workingTreeGroup.resourceStates.map((r) => r.resourceUri.fsPath)), t.push(...i.untrackedGroup.resourceStates.map((r) => r.resourceUri.fsPath)), t.push(...i.mergeGroup.resourceStates.map((r) => r.resourceUri.fsPath));
    for (let i of c.window.tabGroups.all.map((r) => r.tabs).flat()) if (!i.isDirty && (i.input instanceof c.TabInputText || i.input instanceof c.TabInputNotebook)) {
      let { uri: r } = i.input;
      t.find((o) => z(o, r.fsPath)) || e.push(i);
    }
    c.window.tabGroups.close(e, true);
  }
  async openRepositoriesInParentFolders() {
    let e = [], t = c.l10n.t("Open Repositories In Parent Folders"), i = c.l10n.t("Pick a repository to open"), o = { label: c.l10n.t("All Repositories") }, s = this.model.parentRepositories.sort(Wn).map((u) => new Fi(u)), a = this.model.parentRepositories.length === 1 ? [...s] : [...s, { label: "", kind: c.QuickPickItemKind.Separator }, o], l = await c.window.showQuickPick(a, { title: t, placeHolder: i });
    if (l) {
      l === o ? e.push(...this.model.parentRepositories) : e.push(l.path);
      for (let u of e) await this.model.openParentRepository(u);
    }
  }
  async manageUnsafeRepositories() {
    let e = [], t = c.window.createQuickPick();
    t.title = c.l10n.t("Manage Unsafe Repositories"), t.placeholder = c.l10n.t("Pick a repository to mark as safe and open");
    let i = c.l10n.t("All Repositories"), r = { label: i }, o = this.model.unsafeRepositories.sort(Wn).map((a) => new Fi(a));
    t.items = this.model.unsafeRepositories.length === 1 ? [...o] : [...o, { label: "", kind: c.QuickPickItemKind.Separator }, r], t.show();
    let s = await new Promise((a) => {
      t.onDidAccept(() => a(t.activeItems[0])), t.onDidHide(() => a(void 0));
    });
    if (t.hide(), !!s) {
      s.label === i ? e.push(...this.model.unsafeRepositories) : e.push(s.path);
      for (let a of e) await this.git.addSafeDirectory(this.model.getUnsafeRepositoryPath(a)), await this.model.openRepository(a), this.model.deleteUnsafeRepository(a);
    }
  }
  async viewChanges(e) {
    await this._viewResourceGroupChanges(e, e.workingTreeGroup);
  }
  async viewStagedChanges(e) {
    await this._viewResourceGroupChanges(e, e.indexGroup);
  }
  async viewUnstagedChanges(e) {
    await this._viewResourceGroupChanges(e, e.untrackedGroup);
  }
  async _viewResourceGroupChanges(e, t) {
    if (t.resourceStates.length === 0) {
      switch (t.id) {
        case "index":
          c.window.showInformationMessage(c.l10n.t("The repository does not have any staged changes."));
          break;
        case "workingTree":
          c.window.showInformationMessage(c.l10n.t("The repository does not have any changes."));
          break;
        case "untracked":
          c.window.showInformationMessage(c.l10n.t("The repository does not have any untracked changes."));
          break;
      }
      return;
    }
    await c.commands.executeCommand("_workbench.openScmMultiDiffEditor", { title: `${e.sourceControl.label}: ${t.label}`, repositoryUri: c.Uri.file(e.root), resourceGroupId: t.id });
  }
  async copyCommitId(e, t) {
    !e || !t || c.env.clipboard.writeText(t.id);
  }
  async copyCommitMessage(e, t) {
    !e || !t || c.env.clipboard.writeText(t.message);
  }
  async viewCommit(e, t) {
    if (!e || !t) return;
    let i = c.Uri.file(e.root), r = await e.getCommit(t), o = `${Tt(i, t)} - ${mt(r.message)}`, s = r.parents.length > 0 ? r.parents[0] : await e.getEmptyTree(), a = c.Uri.from({ scheme: "scm-history-item", path: `${e.root}/${s}..${t}` }), u = (await e.diffTrees(s, t)).map((d) => oi(d, s, t));
    await c.commands.executeCommand("_workbench.openMultiDiffEditor", { multiDiffSourceUri: a, title: o, resources: u });
  }
  async copyContentToClipboard(e) {
    typeof e == "string" && c.env.clipboard.writeText(e);
  }
  toggleBlameEditorDecoration() {
    this._toggleBlameSetting("blame.editorDecoration.enabled");
  }
  toggleBlameStatusBarItem() {
    this._toggleBlameSetting("blame.statusBarItem.enabled");
  }
  _toggleBlameSetting(e) {
    let t = c.workspace.getConfiguration("git"), i = t.get(e) === true;
    t.update(e, !i, true);
  }
  createCommand(e, t, i, r) {
    let o = (...s) => {
      let a;
      if (!r.repository) a = Promise.resolve(i.apply(this, s));
      else {
        let l = this.model.getRepository(s[0]), u;
        l ? u = Promise.resolve(l) : u = this.model.pickRepository(), a = u.then((d) => d ? Promise.resolve(i.apply(this, [d, ...s.slice(1)])) : Promise.resolve());
      }
      return this.telemetryReporter.sendTelemetryEvent("git.command", { command: e }), a.catch((l) => {
        let u = { modal: true }, d, h = "error", p = /* @__PURE__ */ new Map(), g = c.l10n.t("Open Git Log"), y = this.logger;
        p.set(g, () => y.show());
        let C = c.l10n.t("Show Command Output");
        switch (l.stderr && p.set(C, async () => {
          let S = (/* @__PURE__ */ new Date()).getTime(), k = c.Uri.parse(`git-output:/git-error-${S}`);
          this.commandErrors.set(k, Uo(l));
          try {
            let G = await c.workspace.openTextDocument(k);
            await c.window.showTextDocument(G);
          } finally {
            this.commandErrors.delete(k);
          }
        }), l.gitErrorCode) {
          case T.DirtyWorkTree:
            d = c.l10n.t("Please clean your repository working tree before checkout.");
            break;
          case T.PushRejected:
            d = c.l10n.t(`Can't push refs to remote. Try running "Pull" first to integrate your changes.`);
            break;
          case T.PushRejectedFileTooLarge:
            d = Mh(al(l.stderr || ""));
            break;
          case T.ForcePushWithLeaseRejected:
          case T.ForcePushWithLeaseIfIncludesRejected:
            d = c.l10n.t(`Can't force push refs to remote. The tip of the remote-tracking branch has been updated since the last checkout. Try running "Pull" first to pull the latest changes from the remote branch first.`);
            break;
          case T.Conflict:
            d = c.l10n.t("There are merge conflicts. Please resolve them before committing your changes."), h = "warning", p.clear(), p.set(c.l10n.t("Show Changes"), () => c.commands.executeCommand("workbench.view.scm")), u.modal = false;
            break;
          case T.StashConflict:
            d = c.l10n.t("There are merge conflicts while applying the stash. Please resolve them before committing your changes."), h = "warning", p.clear(), p.set(c.l10n.t("Show Changes"), () => c.commands.executeCommand("workbench.view.scm")), u.modal = false;
            break;
          case T.AuthenticationFailed: {
            let k = /Authentication failed for '(.*)'/i.exec(l.stderr || String(l));
            d = k ? c.l10n.t(`Failed to authenticate to git remote:

{0}`, k[1]) : c.l10n.t("Failed to authenticate to git remote.");
            break;
          }
          case T.NoUserNameConfigured:
          case T.NoUserEmailConfigured:
            d = c.l10n.t('Make sure you configure your "user.name" and "user.email" in git.'), p.set(c.l10n.t("Learn More"), () => c.commands.executeCommand("vscode.open", c.Uri.parse("https://aka.ms/vscode-setup-git")));
            break;
          case T.EmptyCommitMessage:
            d = c.l10n.t("Commit operation was cancelled due to empty commit message."), p.clear(), h = "information", u.modal = false;
            break;
          case T.CherryPickEmpty:
            d = c.l10n.t("The changes are already present in the current branch."), p.clear(), h = "information", u.modal = false;
            break;
          case T.CherryPickConflict:
            d = c.l10n.t("There were merge conflicts while cherry picking the changes. Resolve the conflicts before committing them."), h = "warning", p.set(c.l10n.t("Show Changes"), () => c.commands.executeCommand("workbench.view.scm")), u.modal = false;
            break;
          default: {
            let S = (l.stderr || l.message || String(l)).replace(/^error: /mi, "").replace(/^> husky.*$/mi, "").split(/[\r\n]/).filter((k) => !!k)[0];
            d = S ? c.l10n.t("Git: {0}", S) : c.l10n.t("Git error");
            break;
          }
        }
        if (!d) {
          this.logger.error(Oe(String(l)));
          return;
        }
        d = Oe(d), this.showErrorNotification(h, d, u, p);
      });
    };
    return this[t] = o, o;
  }
  async showErrorNotification(e, t, i, r) {
    let o, s = Array.from(r.keys());
    switch (e) {
      case "error":
        o = await c.window.showErrorMessage(t, i, ...s);
        break;
      case "warning":
        o = await c.window.showWarningMessage(t, i, ...s);
        break;
      case "information":
        o = await c.window.showInformationMessage(t, i, ...s);
        break;
    }
    o && r.get(o)?.();
  }
  getSCMResource(e) {
    e = e || c.window.activeTextEditor && c.window.activeTextEditor.document.uri, this.logger.debug(`[CommandCenter][getSCMResource] git.getSCMResource.uri: ${e && e.toString()}`);
    for (let t of this.model.repositories.map((i) => i.root)) this.logger.debug(`[CommandCenter][getSCMResource] repo root: ${t}`);
    if (e) {
      if (tt(e)) {
        let { path: t } = Ne(e);
        e = c.Uri.file(t);
      }
      if (e.scheme === "file") {
        let t = e.toString(), i = this.model.getRepository(e);
        return i ? i.workingTreeGroup.resourceStates.filter((r) => r.resourceUri.toString() === t)[0] || i.indexGroup.resourceStates.filter((r) => r.resourceUri.toString() === t)[0] || i.mergeGroup.resourceStates.filter((r) => r.resourceUri.toString() === t)[0] : void 0;
      }
    }
  }
  async runByRepository(e, t) {
    let i = e instanceof c.Uri ? [e] : e, r = e instanceof c.Uri, s = i.reduce((a, l) => {
      let u = this.model.getRepository(l);
      if (!u) return console.warn("Could not find git repository for ", l), a;
      z(l.fsPath, u.root) && (u = this.model.getRepositoryForSubmodule(l) || u);
      let d = a.filter((h) => h.repository === u)[0];
      return d ? d.resources.push(l) : a.push({ repository: u, resources: [l] }), a;
    }, []).map(({ repository: a, resources: l }) => t(a, r ? l[0] : l));
    return Promise.all(s);
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
};
b([R("git.showOutput")], v.prototype, "showOutput", 1), b([R("git.refresh", { repository: true })], v.prototype, "refresh", 1), b([R("git.rescan", { repository: false })], v.prototype, "rescan", 1), b([R("git.openResource")], v.prototype, "openResource", 1), b([R("git.openAllChanges", { repository: true })], v.prototype, "openChanges", 1), b([R("git.openMergeEditor")], v.prototype, "openMergeEditor", 1), b([R("git.resolveAllConflictsInChat")], v.prototype, "resolveAllConflictsInChat", 1), b([R("git.continueInLocalClone")], v.prototype, "continueInLocalClone", 1), b([R("git.clone")], v.prototype, "clone", 1), b([R("git.cloneRecursive")], v.prototype, "cloneRecursive", 1), b([R("git.init")], v.prototype, "init", 1), b([R("git.openRepository", { repository: false })], v.prototype, "openRepository", 1), b([R("git.reopenClosedRepositories", { repository: false })], v.prototype, "reopenClosedRepositories", 1), b([R("git.close", { repository: true })], v.prototype, "close", 1), b([R("git.closeOtherRepositories", { repository: true })], v.prototype, "closeOtherRepositories", 1), b([R("git.openFile")], v.prototype, "openFile", 1), b([R("git.openFile2")], v.prototype, "openFile2", 1), b([R("git.openHEADFile")], v.prototype, "openHEADFile", 1), b([R("git.openChange")], v.prototype, "openChange", 1), b([R("git.compareWithWorkspace")], v.prototype, "compareWithWorkspace", 1), b([R("git.rename", { repository: true })], v.prototype, "rename", 1), b([R("git.stage")], v.prototype, "stage", 1), b([R("git.stageAll", { repository: true })], v.prototype, "stageAll", 1), b([R("git.stageAllTracked", { repository: true })], v.prototype, "stageAllTracked", 1), b([R("git.stageAllUntracked", { repository: true })], v.prototype, "stageAllUntracked", 1), b([R("git.stageAllMerge", { repository: true })], v.prototype, "stageAllMerge", 1), b([R("git.stageChange")], v.prototype, "stageChange", 1), b([R("git.diff.stageHunk")], v.prototype, "diffStageHunk", 1), b([R("git.diff.stageSelection")], v.prototype, "diffStageSelection", 1), b([R("git.stageSelectedRanges")], v.prototype, "stageSelectedChanges", 1), b([R("git.stageFile")], v.prototype, "stageFile", 1), b([R("git.acceptMerge")], v.prototype, "acceptMerge", 1), b([R("git.runGitMerge")], v.prototype, "runGitMergeNoDiff3", 1), b([R("git.runGitMergeDiff3")], v.prototype, "runGitMergeDiff3", 1), b([R("git.revertChange")], v.prototype, "revertChange", 1), b([R("git.revertSelectedRanges")], v.prototype, "revertSelectedRanges", 1), b([R("git.unstage")], v.prototype, "unstage", 1), b([R("git.unstageAll", { repository: true })], v.prototype, "unstageAll", 1), b([R("git.unstageSelectedRanges")], v.prototype, "unstageSelectedRanges", 1), b([R("git.unstageFile")], v.prototype, "unstageFile", 1), b([R("git.clean")], v.prototype, "clean", 1), b([R("git.cleanAll", { repository: true })], v.prototype, "cleanAll", 1), b([R("git.cleanAllTracked", { repository: true })], v.prototype, "cleanAllTracked", 1), b([R("git.cleanAllUntracked", { repository: true })], v.prototype, "cleanAllUntracked", 1), b([R("git.commit", { repository: true })], v.prototype, "commit", 1), b([R("git.commitAmend", { repository: true })], v.prototype, "commitAmend", 1), b([R("git.commitSigned", { repository: true })], v.prototype, "commitSigned", 1), b([R("git.commitStaged", { repository: true })], v.prototype, "commitStaged", 1), b([R("git.commitStagedSigned", { repository: true })], v.prototype, "commitStagedSigned", 1), b([R("git.commitStagedAmend", { repository: true })], v.prototype, "commitStagedAmend", 1), b([R("git.commitAll", { repository: true })], v.prototype, "commitAll", 1), b([R("git.commitAllSigned", { repository: true })], v.prototype, "commitAllSigned", 1), b([R("git.commitAllAmend", { repository: true })], v.prototype, "commitAllAmend", 1), b([R("git.commitMessageAccept")], v.prototype, "commitMessageAccept", 1), b([R("git.commitMessageDiscard")], v.prototype, "commitMessageDiscard", 1), b([R("git.commitEmpty", { repository: true })], v.prototype, "commitEmpty", 1), b([R("git.commitNoVerify", { repository: true })], v.prototype, "commitNoVerify", 1), b([R("git.commitStagedNoVerify", { repository: true })], v.prototype, "commitStagedNoVerify", 1), b([R("git.commitStagedSignedNoVerify", { repository: true })], v.prototype, "commitStagedSignedNoVerify", 1), b([R("git.commitAmendNoVerify", { repository: true })], v.prototype, "commitAmendNoVerify", 1), b([R("git.commitSignedNoVerify", { repository: true })], v.prototype, "commitSignedNoVerify", 1), b([R("git.commitStagedAmendNoVerify", { repository: true })], v.prototype, "commitStagedAmendNoVerify", 1), b([R("git.commitAllNoVerify", { repository: true })], v.prototype, "commitAllNoVerify", 1), b([R("git.commitAllSignedNoVerify", { repository: true })], v.prototype, "commitAllSignedNoVerify", 1), b([R("git.commitAllAmendNoVerify", { repository: true })], v.prototype, "commitAllAmendNoVerify", 1), b([R("git.commitEmptyNoVerify", { repository: true })], v.prototype, "commitEmptyNoVerify", 1), b([R("git.restoreCommitTemplate", { repository: true })], v.prototype, "restoreCommitTemplate", 1), b([R("git.undoCommit", { repository: true })], v.prototype, "undoCommit", 1), b([R("git.checkout", { repository: true })], v.prototype, "checkout", 1), b([R("git.graph.checkout", { repository: true })], v.prototype, "checkout2", 1), b([R("git.checkoutDetached", { repository: true })], v.prototype, "checkoutDetached", 1), b([R("git.graph.checkoutDetached", { repository: true })], v.prototype, "checkoutDetached2", 1), b([R("git.branch", { repository: true })], v.prototype, "branch", 1), b([R("git.branchFrom", { repository: true })], v.prototype, "branchFrom", 1), b([R("git.deleteBranch", { repository: true })], v.prototype, "deleteBranch", 1), b([R("git.graph.deleteBranch", { repository: true })], v.prototype, "deleteBranch2", 1), b([R("git.deleteRemoteBranch", { repository: true })], v.prototype, "deleteRemoteBranch", 1), b([R("git.renameBranch", { repository: true })], v.prototype, "renameBranch", 1), b([R("git.merge", { repository: true })], v.prototype, "merge", 1), b([R("git.mergeAbort", { repository: true })], v.prototype, "abortMerge", 1), b([R("git.rebase", { repository: true })], v.prototype, "rebase", 1), b([R("git.createTag", { repository: true })], v.prototype, "createTag", 1), b([R("git.deleteTag", { repository: true })], v.prototype, "deleteTag", 1), b([R("git.migrateWorktreeChanges", { repository: true, repositoryFilter: ["repository", "submodule"] })], v.prototype, "migrateWorktreeChanges", 1), b([R("git.openWorktreeMergeEditor")], v.prototype, "openWorktreeMergeEditor", 1), b([R("git.createWorktree")], v.prototype, "createWorktree", 1), b([R("git.deleteWorktree", { repository: true, repositoryFilter: ["worktree"] })], v.prototype, "deleteWorktree", 1), b([R("git.deleteWorktreeFromPalette", { repository: true, repositoryFilter: ["repository", "submodule"] })], v.prototype, "deleteWorktreeFromPalette", 1), b([R("git.openWorktree", { repository: true })], v.prototype, "openWorktreeInCurrentWindow", 1), b([R("git.openWorktreeInNewWindow", { repository: true })], v.prototype, "openWorktreeInNewWindow", 1), b([R("git.graph.deleteTag", { repository: true })], v.prototype, "deleteTag2", 1), b([R("git.deleteRemoteTag", { repository: true })], v.prototype, "deleteRemoteTag", 1), b([R("git.fetch", { repository: true })], v.prototype, "fetch", 1), b([R("git.fetchPrune", { repository: true })], v.prototype, "fetchPrune", 1), b([R("git.fetchAll", { repository: true })], v.prototype, "fetchAll", 1), b([R("git.fetchRef", { repository: true })], v.prototype, "fetchRef", 1), b([R("git.pullFrom", { repository: true })], v.prototype, "pullFrom", 1), b([R("git.pull", { repository: true })], v.prototype, "pull", 1), b([R("git.pullRebase", { repository: true })], v.prototype, "pullRebase", 1), b([R("git.pullRef", { repository: true })], v.prototype, "pullRef", 1), b([R("git.push", { repository: true })], v.prototype, "push", 1), b([R("git.pushForce", { repository: true })], v.prototype, "pushForce", 1), b([R("git.pushWithTags", { repository: true })], v.prototype, "pushFollowTags", 1), b([R("git.pushWithTagsForce", { repository: true })], v.prototype, "pushFollowTagsForce", 1), b([R("git.pushRef", { repository: true })], v.prototype, "pushRef", 1), b([R("git.cherryPick", { repository: true })], v.prototype, "cherryPick", 1), b([R("git.graph.cherryPick", { repository: true })], v.prototype, "cherryPick2", 1), b([R("git.cherryPickAbort", { repository: true })], v.prototype, "cherryPickAbort", 1), b([R("git.pushTo", { repository: true })], v.prototype, "pushTo", 1), b([R("git.pushToForce", { repository: true })], v.prototype, "pushToForce", 1), b([R("git.pushTags", { repository: true })], v.prototype, "pushTags", 1), b([R("git.addRemote", { repository: true })], v.prototype, "addRemote", 1), b([R("git.removeRemote", { repository: true })], v.prototype, "removeRemote", 1), b([R("git.sync", { repository: true })], v.prototype, "sync", 1), b([R("git._syncAll")], v.prototype, "syncAll", 1), b([R("git.syncRebase", { repository: true })], v.prototype, "syncRebase", 1), b([R("git.publish", { repository: true })], v.prototype, "publish", 1), b([R("git.ignore")], v.prototype, "ignore", 1), b([R("git.revealInExplorer")], v.prototype, "revealInExplorer", 1), b([R("git.revealFileInOS.linux"), R("git.revealFileInOS.mac"), R("git.revealFileInOS.windows")], v.prototype, "revealFileInOS", 1), b([R("git.stash", { repository: true })], v.prototype, "stash", 1), b([R("git.stashStaged", { repository: true })], v.prototype, "stashStaged", 1), b([R("git.stashIncludeUntracked", { repository: true })], v.prototype, "stashIncludeUntracked", 1), b([R("git.stashPop", { repository: true })], v.prototype, "stashPop", 1), b([R("git.stashPopLatest", { repository: true })], v.prototype, "stashPopLatest", 1), b([R("git.stashPopEditor")], v.prototype, "stashPopEditor", 1), b([R("git.stashApply", { repository: true })], v.prototype, "stashApply", 1), b([R("git.stashApplyLatest", { repository: true })], v.prototype, "stashApplyLatest", 1), b([R("git.stashApplyEditor")], v.prototype, "stashApplyEditor", 1), b([R("git.stashDrop", { repository: true })], v.prototype, "stashDrop", 1), b([R("git.stashDropAll", { repository: true })], v.prototype, "stashDropAll", 1), b([R("git.stashDropEditor")], v.prototype, "stashDropEditor", 1), b([R("git.stashView", { repository: true })], v.prototype, "stashView", 1), b([R("git.timeline.openDiff", { repository: false })], v.prototype, "timelineOpenDiff", 1), b([R("git.timeline.viewCommit", { repository: false })], v.prototype, "timelineViewCommit", 1), b([R("git.timeline.copyCommitId", { repository: false })], v.prototype, "timelineCopyCommitId", 1), b([R("git.timeline.copyCommitMessage", { repository: false })], v.prototype, "timelineCopyCommitMessage", 1), b([R("git.timeline.selectForCompare", { repository: false })], v.prototype, "timelineSelectForCompare", 1), b([R("git.timeline.compareWithSelected", { repository: false })], v.prototype, "timelineCompareWithSelected", 1), b([R("git.rebaseAbort", { repository: true })], v.prototype, "rebaseAbort", 1), b([R("git.closeAllDiffEditors", { repository: true })], v.prototype, "closeDiffEditors", 1), b([R("git.closeAllUnmodifiedEditors")], v.prototype, "closeUnmodifiedEditors", 1), b([R("git.openRepositoriesInParentFolders")], v.prototype, "openRepositoriesInParentFolders", 1), b([R("git.manageUnsafeRepositories")], v.prototype, "manageUnsafeRepositories", 1), b([R("git.viewChanges", { repository: true })], v.prototype, "viewChanges", 1), b([R("git.viewStagedChanges", { repository: true })], v.prototype, "viewStagedChanges", 1), b([R("git.viewUntrackedChanges", { repository: true })], v.prototype, "viewUnstagedChanges", 1), b([R("git.copyCommitId", { repository: true })], v.prototype, "copyCommitId", 1), b([R("git.copyCommitMessage", { repository: true })], v.prototype, "copyCommitMessage", 1), b([R("git.viewCommit", { repository: true })], v.prototype, "viewCommit", 1), b([R("git.copyContentToClipboard")], v.prototype, "copyContentToClipboard", 1), b([R("git.blame.toggleEditorDecoration")], v.prototype, "toggleBlameEditorDecoration", 1), b([R("git.blame.toggleStatusBarItem")], v.prototype, "toggleBlameStatusBarItem", 1);
var Zr = v;
var be = require("vscode");
var Fh = 1e3 * 60 * 3, Uh = 1e3 * 60 * 5, Ql = 5e3;
async function Yl(n6, e, t, i) {
  if (n6 && n6.startsWith("merge-base-anysphere:")) try {
    let r = n6.substring(21), [o, s] = r.split("..."), a = await i.getMergeBase(o, s);
    a ? n6 = a : n6 = o;
  } catch {
  }
  if (n6 === "~") {
    let o = be.Uri.file(e).toString(), [s] = i.indexGroup.resourceStates.filter((a) => a.resourceUri.toString() === o);
    return s ? "" : "HEAD";
  }
  return /^~\d$/.test(n6) ? `:${n6[1]}` : t && (n6 === "index" || n6 === "wt") ? "HEAD" : n6;
}
var pi = class {
  constructor(e, t) {
    this.model = e;
    this.logger = t;
    this._onDidChangeFile = new be.EventEmitter();
    this.onDidChangeFile = this._onDidChangeFile.event;
    this.changedRepositoryRoots = /* @__PURE__ */ new Set();
    this.cache = /* @__PURE__ */ new Map();
    this.mtime = (/* @__PURE__ */ new Date()).getTime();
    this.disposables = [];
    let i = setInterval(() => this.cleanup(), Uh);
    this.disposables.push(e.onDidChangeRepository(this.onDidChangeRepository, this), e.onDidChangeOriginalResource(this.onDidChangeOriginalResource, this), be.workspace.registerFileSystemProvider("git", this, { isReadonly: true, isCaseSensitive: true }), new be.Disposable(() => clearInterval(i)));
  }
  onDidChangeRepository({ repository: e }) {
    this.changedRepositoryRoots.add(e.root), this.eventuallyFireChangeEvents();
  }
  onDidChangeOriginalResource({ uri: e }) {
    if (e.scheme !== "file") return;
    let t = Z(e, "~"), i = Z(e, "", { replaceFileExtension: true });
    this.mtime = (/* @__PURE__ */ new Date()).getTime(), this._onDidChangeFile.fire([{ type: be.FileChangeType.Changed, uri: t }, { type: be.FileChangeType.Changed, uri: i }]);
  }
  eventuallyFireChangeEvents() {
    this.fireChangeEvents();
  }
  async fireChangeEvents() {
    if (!be.window.state.focused) {
      let t = V(be.window.onDidChangeWindowState, (i) => i.focused);
      await Qe(t);
    }
    let e = [];
    for (let { uri: t } of this.cache.values()) {
      let i = t.fsPath;
      for (let r of this.changedRepositoryRoots) if (me(r, i)) {
        e.push({ type: be.FileChangeType.Changed, uri: t });
        break;
      }
    }
    e.length > 0 && (this.mtime = (/* @__PURE__ */ new Date()).getTime(), this._onDidChangeFile.fire(e)), this.changedRepositoryRoots.clear();
  }
  cleanup() {
    let e = (/* @__PURE__ */ new Date()).getTime(), t = /* @__PURE__ */ new Map();
    for (let i of this.cache.values()) {
      let { path: r } = Ne(i.uri);
      (be.workspace.textDocuments.filter((s) => s.uri.scheme === "file").some((s) => z(s.uri.fsPath, r)) || e - i.timestamp < Fh) && t.set(i.uri.toString(), i);
    }
    this.cache = t;
  }
  watch() {
    return rt;
  }
  async stat(e) {
    await Promise.race([this.model.isInitialized, new Promise((s) => setTimeout(s, Ql))]);
    let { submoduleOf: t, path: i, ref: r } = Ne(e), o = t ? this.model.getRepository(t) : this.model.getRepository(e);
    if (!o) throw this.logger.warn(`[GitFileSystemProvider][stat] Repository not found - ${e.toString()}`), be.FileSystemError.FileNotFound();
    try {
      let s = await o.getObjectDetails(await Yl(r, i, t, o), i);
      return { type: be.FileType.File, size: s.size, mtime: this.mtime, ctime: 0 };
    } catch {
      if (r === await o.getEmptyTree()) return this.logger.warn(`[GitFileSystemProvider][stat] Empty tree - ${e.toString()}`), { type: be.FileType.File, size: 0, mtime: this.mtime, ctime: 0 };
      throw this.logger.warn(`[GitFileSystemProvider][stat] File not found - ${e.toString()}`), be.FileSystemError.FileNotFound();
    }
  }
  readDirectory() {
    throw new Error("Method not implemented.");
  }
  createDirectory() {
    throw new Error("Method not implemented.");
  }
  async readFile(e) {
    await Promise.race([this.model.isInitialized, new Promise((l) => setTimeout(l, Ql))]);
    let { path: t, ref: i, submoduleOf: r } = Ne(e);
    if (r) {
      let l = this.model.getRepository(r);
      if (!l) throw be.FileSystemError.FileNotFound();
      let u = new TextEncoder();
      return i === "index" ? u.encode(await l.diffIndexWithHEAD(t)) : u.encode(await l.diffWithHEAD(t));
    }
    let o = this.model.getRepository(e);
    if (!o) throw this.logger.warn(`[GitFileSystemProvider][readFile] Repository not found - ${e.toString()}`), be.FileSystemError.FileNotFound();
    let s = (/* @__PURE__ */ new Date()).getTime(), a = { uri: e, timestamp: s };
    this.cache.set(e.toString(), a);
    try {
      return await o.buffer(await Yl(i, t, r, o), t);
    } catch {
      if (i === await o.getEmptyTree()) return this.logger.warn(`[GitFileSystemProvider][readFile] Empty tree - ${e.toString()}`), new Uint8Array(0);
      throw this.logger.warn(`[GitFileSystemProvider][readFile] File not found - ${e.toString()}`), be.FileSystemError.FileNotFound();
    }
  }
  writeFile() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
  rename() {
    throw new Error("Method not implemented.");
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
};
b([nt(1100)], pi.prototype, "eventuallyFireChangeEvents", 1), b([Fe], pi.prototype, "fireChangeEvents", 1);
var Ce = require("vscode"), Zl = ie(require("path"));
function Xl(n6, e) {
  return n6 === e ? true : n6?.id === e?.id && n6?.name === e?.name && n6?.revision === e?.revision;
}
var to = class to2 {
  constructor(e) {
    this.model = e;
    this._onDidChangeDecorations = new Ce.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeDecorations.event;
    this.queue = /* @__PURE__ */ new Map();
    this.disposables = [];
    let t = Je(V(Ce.workspace.onDidSaveTextDocument, (i) => /\.gitignore$|\.git\/info\/exclude$/.test(i.uri.path)), e.onDidOpenRepository, e.onDidCloseRepository);
    this.disposables.push(t(() => this._onDidChangeDecorations.fire(void 0))), this.disposables.push(Ce.window.registerFileDecorationProvider(this));
  }
  static {
    this.Decoration = { color: new Ce.ThemeColor("gitDecoration.ignoredResourceForeground") };
  }
  async provideFileDecoration(e) {
    let t = this.model.getRepository(e);
    if (!t) return;
    let i = this.queue.get(t.root);
    i || (i = { repository: t, queue: /* @__PURE__ */ new Map() }, this.queue.set(t.root, i));
    let r = i.queue.get(e.fsPath);
    return r || (r = new dr(), i.queue.set(e.fsPath, r), this.checkIgnoreSoon()), await r.promise;
  }
  checkIgnoreSoon() {
    let e = new Map(this.queue.entries());
    this.queue.clear();
    for (let [, t] of e) {
      let i = [...t.queue.keys()];
      t.repository.checkIgnore(i).then((r) => {
        for (let [o, s] of t.queue.entries()) s.resolve(r.has(o) ? to2.Decoration : void 0);
      }, (r) => {
        let o = r.gitErrorCode === T.IsInSubmodule || r.gitErrorCode === T.IsBeyondSymbolicLink;
        o || console.error(r);
        for (let [, s] of t.queue.entries()) o ? s.resolve(void 0) : s.reject(r);
      });
    }
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose()), this.queue.clear();
  }
};
b([nt(500)], to.prototype, "checkIgnoreSoon", 1);
var is = to, rs = class n5 {
  constructor(e) {
    this.repository = e;
    this._onDidChangeDecorations = new Ce.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeDecorations.event;
    this.disposables = [];
    this.decorations = /* @__PURE__ */ new Map();
    this.disposables.push(Ce.window.registerFileDecorationProvider(this), Mo(e.onDidRunGitStatus, () => this.onDidRunGitStatus()));
  }
  static {
    this.SubmoduleDecorationData = { tooltip: "Submodule", badge: "S", color: new Ce.ThemeColor("gitDecoration.submoduleResourceForeground") };
  }
  onDidRunGitStatus() {
    let e = /* @__PURE__ */ new Map();
    this.collectDecorationData(this.repository.indexGroup, e), this.collectDecorationData(this.repository.untrackedGroup, e), this.collectDecorationData(this.repository.workingTreeGroup, e), this.collectDecorationData(this.repository.mergeGroup, e), this.collectSubmoduleDecorationData(e);
    let t = new Set([...this.decorations.keys()].concat([...e.keys()]));
    this.decorations = e, this._onDidChangeDecorations.fire([...t.values()].map((i) => Ce.Uri.parse(i, true)));
  }
  collectDecorationData(e, t) {
    for (let i of e.resourceStates) {
      let r = i.resourceDecoration;
      r && (t.set(i.original.toString(), r), i.type === m.DELETED && i.rightUri && t.set(i.rightUri.toString(), r), (i.type === m.INDEX_RENAMED || i.type === m.INTENT_TO_RENAME) && t.set(i.resourceUri.toString(), r));
    }
  }
  collectSubmoduleDecorationData(e) {
    for (let t of this.repository.submodules) e.set(Ce.Uri.file(Zl.join(this.repository.root, t.path)).toString(), n5.SubmoduleDecorationData);
  }
  provideFileDecoration(e) {
    return this.decorations.get(e.toString());
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose());
  }
}, os = class {
  constructor(e) {
    this.repository = e;
    this._onDidChangeDecorations = new Ce.EventEmitter();
    this.onDidChangeFileDecorations = this._onDidChangeDecorations.event;
    this._decorations = /* @__PURE__ */ new Map();
    this.disposables = [];
    this.disposables.push(Ce.window.registerFileDecorationProvider(this), Mo(e.historyProvider.onDidChangeCurrentHistoryItemRefs, () => this.onDidChangeCurrentHistoryItemRefs()));
  }
  async onDidChangeCurrentHistoryItemRefs() {
    let e = this.repository.historyProvider, t = e.currentHistoryItemRef, i = e.currentHistoryItemRemoteRef;
    if (Xl(this._currentHistoryItemRef, t) && Xl(this._currentHistoryItemRemoteRef, i)) return;
    let r = /* @__PURE__ */ new Map();
    await this.collectIncomingChangesFileDecorations(r);
    let o = new Set([...this._decorations.keys()].concat([...r.keys()]));
    this._decorations = r, this._currentHistoryItemRef = t, this._currentHistoryItemRemoteRef = i, this._onDidChangeDecorations.fire([...o.values()].map((s) => Ce.Uri.parse(s, true)));
  }
  async collectIncomingChangesFileDecorations(e) {
    for (let t of await this.getIncomingChanges()) switch (t.status) {
      case m.INDEX_ADDED:
        e.set(t.uri.toString(), { badge: "↓A", tooltip: Ce.l10n.t("Incoming Changes (added)") });
        break;
      case m.DELETED:
        e.set(t.uri.toString(), { badge: "↓D", tooltip: Ce.l10n.t("Incoming Changes (deleted)") });
        break;
      case m.INDEX_RENAMED:
        e.set(t.originalUri.toString(), { badge: "↓R", tooltip: Ce.l10n.t("Incoming Changes (renamed)") });
        break;
      case m.MODIFIED:
        e.set(t.uri.toString(), { badge: "↓M", tooltip: Ce.l10n.t("Incoming Changes (modified)") });
        break;
      default: {
        e.set(t.uri.toString(), { badge: "↓~", tooltip: Ce.l10n.t("Incoming Changes") });
        break;
      }
    }
  }
  async getIncomingChanges() {
    try {
      let e = this.repository.historyProvider, t = e.currentHistoryItemRef, i = e.currentHistoryItemRemoteRef;
      if (!t || !i) return [];
      let r = await e.resolveHistoryItemRefsCommonAncestor([t.id, i.id]);
      return r ? await this.repository.diffBetween(r, i.id) : [];
    } catch {
      return [];
    }
  }
  provideFileDecoration(e) {
    return this._decorations.get(e.toString());
  }
  dispose() {
    j(this.disposables);
  }
}, eo = class {
  constructor(e) {
    this.model = e;
    this.enabled = false;
    this.disposables = [];
    this.modelDisposables = [];
    this.providers = /* @__PURE__ */ new Map();
    this.disposables.push(new is(e)), V(Ce.workspace.onDidChangeConfiguration, (i) => i.affectsConfiguration("git.decorations.enabled"))(this.update, this, this.disposables), this.update();
  }
  update() {
    let t = Ce.workspace.getConfiguration("git").get("decorations.enabled") === true;
    this.enabled !== t && (t ? this.enable() : this.disable(), this.enabled = t);
  }
  enable() {
    this.model.onDidOpenRepository(this.onDidOpenRepository, this, this.modelDisposables), this.model.onDidCloseRepository(this.onDidCloseRepository, this, this.modelDisposables), this.model.repositories.forEach(this.onDidOpenRepository, this);
  }
  disable() {
    this.modelDisposables = j(this.modelDisposables), this.providers.forEach((e) => e.dispose()), this.providers.clear();
  }
  onDidOpenRepository(e) {
    let t = Ot([new rs(e), new os(e)]);
    this.providers.set(e, t);
  }
  onDidCloseRepository(e) {
    let t = this.providers.get(e);
    t && (t.dispose(), this.providers.delete(e));
  }
  dispose() {
    this.disable(), this.disposables = j(this.disposables);
  }
};
var ve = require("vscode");
var io = ie(require("path")), ro = class {
  constructor(e, t) {
    this.ipc = e;
    this.userAndEmailCacher = t;
    this.disposable = rt;
    this.cache = /* @__PURE__ */ new Map();
    this.cacheEvictionTimers = /* @__PURE__ */ new Map();
    this.credentialsProviders = /* @__PURE__ */ new Set();
    this.featureDescription = "git auth provider";
    if (e && (this.disposable = e.registerHandler("askpass", this)), this.env = { GIT_ASKPASS: io.join(__dirname, this.ipc ? "askpass.sh" : "askpass-empty.sh"), VSCODE_GIT_ASKPASS_NODE: process.execPath, VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: io.join(__dirname, "askpass-main.js") }, this.userAndEmailCacher) {
      let i = this.userAndEmailCacher.provideGitAuthorInfoIfNeeded();
      i && (this.env.GIT_AUTHOR_NAME = i.GIT_AUTHOR_NAME, this.env.GIT_AUTHOR_EMAIL = i.GIT_AUTHOR_EMAIL);
    }
    this.sshEnv = { SSH_ASKPASS: io.join(__dirname, this.ipc ? "ssh-askpass.sh" : "ssh-askpass-empty.sh"), SSH_ASKPASS_REQUIRE: "force" };
  }
  async handle(e) {
    return ve.workspace.getConfiguration("git", null).get("enabled") ? e.askpassType === "https" ? await this.handleAskpass(e.request, e.host) : await this.handleSSHAskpass(e.request, e.host, e.file, e.fingerprint) : "";
  }
  async handleAskpass(e, t) {
    let i = ve.Uri.parse(t), r = i.authority.replace(/^.*@/, ""), o = /password/i.test(e), s = this.cache.get(r);
    if (s && o) return this.cache.delete(r), clearTimeout(this.cacheEvictionTimers.get(r)), this.cacheEvictionTimers.delete(r), s.password;
    if (!o) for (let u of this.credentialsProviders) try {
      let d = await u.getCredentials(i);
      if (d) return this.cache.set(r, d), clearTimeout(this.cacheEvictionTimers.get(r)), this.cacheEvictionTimers.set(r, setTimeout(() => {
        this.cache.delete(r), this.cacheEvictionTimers.delete(r);
      }, 6e4)), d.username;
    } catch {
    }
    let a = r || t, l = { password: o, title: ve.l10n.t("Sign in to {0}", a), prompt: o ? ve.l10n.t("Git needs to authenticate with {0} to continue. Enter a password or personal access token.", a) : ve.l10n.t("Git needs to authenticate with {0} to continue. Enter a username.", a), placeHolder: o ? ve.l10n.t("Password or personal access token") : ve.l10n.t("Username"), ignoreFocusOut: true };
    return await ve.window.showInputBox(l) || "";
  }
  async handleSSHAskpass(e, t, i, r) {
    if (/passphrase/i.test(e)) {
      let a = { password: true, title: ve.l10n.t("Unlock SSH key"), prompt: i ? ve.l10n.t("Enter the passphrase for SSH key {0} to continue", i) : ve.l10n.t("Enter the passphrase to unlock the SSH key"), placeHolder: ve.l10n.t("Passphrase"), ignoreFocusOut: true };
      return await ve.window.showInputBox(a) || "";
    }
    let o = { canPickMany: false, ignoreFocusOut: true, placeHolder: ve.l10n.t("Are you sure you want to continue connecting?"), title: ve.l10n.t('"{0}" has fingerprint "{1}"', t ?? "", r ?? "") }, s = [ve.l10n.t("yes"), ve.l10n.t("no")];
    return await ve.window.showQuickPick(s, o) ?? "";
  }
  getEnv() {
    return ve.workspace.getConfiguration("git").get("useIntegratedAskPass") ? { ...this.env, ...this.sshEnv } : {};
  }
  getTerminalEnv() {
    let e = ve.workspace.getConfiguration("git");
    return e.get("useIntegratedAskPass") && e.get("terminalAuthentication") ? this.env : {};
  }
  registerCredentialsProvider(e) {
    return this.credentialsProviders.add(e), Be(() => this.credentialsProviders.delete(e));
  }
  dispose() {
    for (let e of this.cacheEvictionTimers.values()) clearTimeout(e);
    this.disposable.dispose();
  }
};
var Ze = require("vscode");
var ec = ie(require("querystring")), $h = wt ? /* @__PURE__ */ new Set(["git", "http", "https", "ssh"]) : /* @__PURE__ */ new Set(["file", "git", "http", "https", "ssh"]), Wh = /^$|[~\^:\\\*\s\[\]]|^-|^\.|\/\.|\.\.|\.lock\/|\.lock$|\/$|\.$/;
function Wi(n6) {
  return `scheme=${n6.scheme}, path=${n6.path}`;
}
function Kh(n6) {
  return Oe(n6.toString(true));
}
var oo = class {
  constructor(e) {
    this.logger = e;
    this.disposables = [];
    this.disposables.push(Ze.window.registerUriHandler(this));
  }
  handleUri(e) {
    switch (this.logger.info(`[GitProtocolHandler][handleUri] URI:(${Wi(e)})`), e.path) {
      case "/clone":
        this.clone(e);
    }
  }
  async clone(e) {
    let t = ec.parse(e.query), i = t.ref;
    if (!t.url) {
      this.logger.warn(`[GitProtocolHandler][clone] Failed to open URI: ${Wi(e)}`);
      return;
    }
    if (Array.isArray(t.url) && t.url.length === 0) {
      this.logger.warn(`[GitProtocolHandler][clone] Failed to open URI: ${Wi(e)}`);
      return;
    }
    if (i !== void 0 && typeof i != "string") {
      this.logger.warn(`[GitProtocolHandler][clone] Failed to open URI due to multiple references: ${Wi(e)}`);
      return;
    }
    let r;
    try {
      let o = Array.isArray(t.url) ? t.url[0] : t.url;
      if (o = o.replace(/^(git@[^\/:]+)(:)/i, "ssh://$1/"), r = Ze.Uri.parse(o, true), !$h.has(r.scheme.toLowerCase())) throw new Error("Unsupported scheme.");
      if (typeof i == "string" && Wh.test(i)) throw new Error("Invalid reference.");
    } catch {
      this.logger.warn(`[GitProtocolHandler][clone] Invalid URI: ${Wi(e)}`);
      return;
    }
    if ((await Ze.commands.getCommands(true)).includes("git.clone")) {
      let o = r.toString(true);
      this.logger.info(`[GitProtocolHandler][clone] Executing git.clone for ${Kh(r)}`), Ze.commands.executeCommand("git.clone", o, void 0, { ref: i });
    } else {
      this.logger.error("[GitProtocolHandler][clone] Could not complete git clone operation as git installation was not found.");
      let o = Ze.l10n.t("Could not clone your repository as Git is not installed."), s = Ze.l10n.t("Download Git");
      await Ze.window.showErrorMessage(o, { modal: true }, s) === s && Ze.commands.executeCommand("vscode.open", Ze.Uri.parse("https://aka.ms/vscode-download-git"));
      return;
    }
  }
  dispose() {
    this.disposables = j(this.disposables);
  }
};
var ic = require("vscode");
function tc(n6, e, t) {
  if (typeof t.value != "function") throw new Error("not supported");
  let i = t.value;
  t.value = function() {
    return console.warn(`Git extension API method '${e}' is deprecated.`), i.apply(this, arguments);
  };
}
var _t = class {
  constructor(e) {
    this.enabled = false;
    this._onDidChangeEnablement = new ic.EventEmitter();
    this.onDidChangeEnablement = this._onDidChangeEnablement.event;
    this._model = void 0;
    e && (this.enabled = true, this._model = e);
  }
  set model(e) {
    this._model = e;
    let t = !!e;
    this.enabled !== t && (this.enabled = t, this._onDidChangeEnablement.fire(this.enabled));
  }
  get model() {
    return this._model;
  }
  async getGitPath() {
    if (!this._model) throw new Error("Git model not found");
    return this._model.git.path;
  }
  async getRepositories() {
    if (!this._model) throw new Error("Git model not found");
    return this._model.repositories.map((e) => new Ee(e));
  }
  getAPI(e) {
    if (!this._model) throw new Error("Git model not found");
    if (e !== 1) throw new Error(`No API version ${e} found.`);
    return new kr(this._model);
  }
};
b([tc], _t.prototype, "getGitPath", 1), b([tc], _t.prototype, "getRepositories", 1);
var $t = ie(require("path")), pc = ie(require("fs")), bt = ie(require("os"));
var Ft = require("vscode");
var no = class {
  constructor(e, t) {
    this.context = e;
    this.envProviders = t;
    this.disposable = V(Ft.workspace.onDidChangeConfiguration, (i) => i.affectsConfiguration("git"))(this.refresh, this), this.refresh();
  }
  refresh() {
    let e = Ft.workspace.getConfiguration("git", null);
    if (this.context.environmentVariableCollection.clear(), !e.get("enabled", true)) return;
    let t = [];
    for (let i of this.envProviders) {
      let r = i?.getTerminalEnv() ?? {};
      for (let o of Object.keys(r)) this.context.environmentVariableCollection.replace(o, r[o]);
      i?.featureDescription && Object.keys(r).length > 0 && t.push(i.featureDescription);
    }
    t.length && (this.context.environmentVariableCollection.description = Ft.l10n.t("Enables the following features: {0}", t.join(", ")));
  }
  dispose() {
    this.disposable.dispose();
  }
}, so = class {
  constructor(e, t) {
    this.model = e;
    this.logger = t;
    this.subcommands = /* @__PURE__ */ new Set(["add", "branch", "checkout", "cherry-pick", "clean", "commit", "fetch", "merge", "mv", "rebase", "reset", "restore", "revert", "rm", "pull", "push", "stash", "switch"]);
    this.disposables = [];
    Ft.window.onDidEndTerminalShellExecution(this.onDidEndTerminalShellExecution, this, this.disposables);
  }
  onDidEndTerminalShellExecution(e) {
    let { execution: t, exitCode: i, shellIntegration: r } = e, [o, s] = t.commandLine.value.split(/\s+/), a = t.cwd ?? r.cwd;
    if (o.toLowerCase() !== "git" || !this.subcommands.has(s?.toLowerCase()) || !a || i !== 0) return;
    this.logger.trace(`[TerminalShellExecutionManager][onDidEndTerminalShellExecution] Matched git subcommand: ${s}`);
    let l = this.model.getRepository(a);
    if (!l) {
      this.logger.trace(`[TerminalShellExecutionManager][onDidEndTerminalShellExecution] Unable to find repository for current working directory: ${a.toString()}`);
      return;
    }
    l.status();
  }
  dispose() {
    j(this.disposables);
  }
};
var ns = ie(require("path")), rc = ie(require("http")), oc = ie(require("os")), lo = ie(require("fs")), Ut = ie(require("crypto"));
function jh(n6) {
  return process.platform === "win32" ? `\\\\.\\pipe\\vscode-git-${n6}-sock` : process.platform !== "darwin" && process.env.XDG_RUNTIME_DIR ? ns.join(process.env.XDG_RUNTIME_DIR, `vscode-git-${n6}.sock`) : ns.join(oc.tmpdir(), `vscode-git-${n6}.sock`);
}
var Jh = "git-ipc-auth-token:", Vh = /^[a-f0-9]{64}$/, zh = 5e3, ao = class extends Error {
  constructor(e, t) {
    super(`${e} timed out after ${t}ms`), this.name = "SecretStorageTimeoutError";
  }
};
async function qh(n6, e, t) {
  let i;
  try {
    return await Promise.race([n6, new Promise((r, o) => {
      i = setTimeout(() => o(new ao(t, e)), e);
    })]);
  } finally {
    i !== void 0 && clearTimeout(i);
  }
}
async function Qh(n6, e, t = zh) {
  if (!n6 || !e) return Ut.randomBytes(32).toString("hex");
  let i = `${Jh}${n6}`, r = Date.now() + t, o = () => Math.max(0, r - Date.now()), s = (l, u) => qh(l, o(), u);
  try {
    let l = await s(e.get(i), "SecretStorage read");
    if (l && Vh.test(l)) return l;
  } catch (l) {
    if (l instanceof ao) return Ut.randomBytes(32).toString("hex");
  }
  let a = Ut.randomBytes(32).toString("hex");
  if (o() === 0) return a;
  try {
    await s(e.store(i, a), "SecretStorage write");
  } catch {
  }
  return a;
}
async function nc(n6, e) {
  let t = rc.createServer(), i = Ut.createHash("sha256");
  if (n6) i.update(n6);
  else {
    let s = await new Promise((a, l) => Ut.randomBytes(20, (u, d) => u ? l(u) : a(d)));
    i.update(s);
  }
  let r = jh(i.digest("hex").substring(0, 10)), o = await Qh(n6, e);
  if (process.platform !== "win32") try {
    await lo.promises.unlink(r);
  } catch {
  }
  return new Promise((s, a) => {
    try {
      t.on("error", (l) => a(l)), t.listen(r), s(new ss(t, r, o));
    } catch (l) {
      a(l);
    }
  });
}
var ss = class {
  constructor(e, t, i) {
    this.server = e;
    this._ipcHandlePath = t;
    this._authToken = i;
    this.handlers = /* @__PURE__ */ new Map();
    this.server.on("request", this.onRequest.bind(this));
  }
  get ipcHandlePath() {
    return this._ipcHandlePath;
  }
  registerHandler(e, t) {
    return this.handlers.set(`/${e}`, t), Be(() => this.handlers.delete(e));
  }
  onRequest(e, t) {
    if (!e.url) {
      console.warn("Request lacks url");
      return;
    }
    if (e.headers["x-cursor-git-auth-token"] !== this._authToken) {
      console.warn("IPC request rejected: invalid or missing auth token"), t.writeHead(401), t.end();
      return;
    }
    let r = this.handlers.get(e.url);
    if (!r) {
      console.warn(`IPC handler for ${e.url} not found`);
      return;
    }
    let o = [];
    e.on("data", (s) => o.push(s)), e.on("end", () => {
      let s = JSON.parse(Buffer.concat(o).toString("utf8"));
      r.handle(s).then((a) => {
        t.writeHead(200), t.end(JSON.stringify(a));
      }, () => {
        t.writeHead(500), t.end();
      });
    });
  }
  getEnv() {
    return { VSCODE_GIT_IPC_HANDLE: this.ipcHandlePath, VSCODE_GIT_IPC_AUTH_TOKEN: this._authToken };
  }
  getTerminalEnv() {
    return { VSCODE_GIT_IPC_HANDLE: this.ipcHandlePath, VSCODE_GIT_IPC_AUTH_TOKEN: this._authToken };
  }
  dispose() {
    this.handlers.clear(), this.server.close(), this._ipcHandlePath && process.platform !== "win32" && lo.unlinkSync(this._ipcHandlePath);
  }
};
var co = ie(require("path")), We = require("vscode");
var uo = class {
  constructor(e) {
    this.disposable = rt;
    this.featureDescription = "git editor";
    e && (this.disposable = e.registerHandler("git-editor", this)), this.env = { GIT_EDITOR: `"${co.join(__dirname, e ? "git-editor.sh" : "git-editor-empty.sh")}"`, VSCODE_GIT_EDITOR_NODE: process.execPath, VSCODE_GIT_EDITOR_EXTRA_ARGS: "", VSCODE_GIT_EDITOR_MAIN: co.join(__dirname, "git-editor-main.js") };
  }
  async handle({ commitMessagePath: e }) {
    if (e) {
      let t = We.Uri.file(e), i = await We.workspace.openTextDocument(t);
      return await We.window.showTextDocument(i, { preview: false }), new Promise((r) => {
        let o = We.window.tabGroups.onDidChangeTabs(async (s) => {
          if (s.closed.some((a) => a.input instanceof We.TabInputText && a.input.uri.toString() === t.toString())) return o.dispose(), r(true);
        });
      });
    }
  }
  getEnv() {
    return We.workspace.getConfiguration("git").get("useEditorAsCommitInput") ? this.env : {};
  }
  getTerminalEnv() {
    let e = We.workspace.getConfiguration("git");
    return e.get("useEditorAsCommitInput") && e.get("terminalGitEditor") ? this.env : {};
  }
  dispose() {
    this.disposable.dispose();
  }
}, ho = class {
  constructor(e) {
    this._model = e;
    this._regex = /^#\s+(modified|new file|deleted|renamed|copied|type change):\s+(?<file1>.*?)(?:\s+->\s+(?<file2>.*))*$/gm;
  }
  provideDocumentLinks(e, t) {
    if (t.isCancellationRequested) return [];
    let i = this._model.getRepository(e.uri);
    if (!i) return [];
    let r = [];
    for (let o of e.getText().matchAll(this._regex)) {
      if (!o.groups) continue;
      let { file1: s, file2: a } = o.groups;
      s && r.push(this._createDocumentLink(i, e, o, s)), a && r.push(this._createDocumentLink(i, e, o, a));
    }
    return r;
  }
  _createDocumentLink(e, t, i, r) {
    let o = i[0].indexOf(r), s = t.positionAt(i.index + o), a = t.positionAt(i.index + o + r.length), l = new We.DocumentLink(new We.Range(s, a), We.Uri.file(co.join(e.root, r)));
    return l.tooltip = We.l10n.t("Open File"), l;
  }
};
var as = ie(require("path")), Pe = ie(require("vscode"));
var mo = class {
  constructor(e) {
    this.model = e;
    this.providerRegistration = Pe.Disposable.from(Pe.workspace.registerEditSessionIdentityProvider("file", this), Pe.workspace.onWillCreateEditSessionIdentity((t) => {
      t.waitUntil(this._onWillCreateEditSessionIdentity(t.workspaceFolder));
    }));
  }
  dispose() {
    this.providerRegistration.dispose();
  }
  async provideEditSessionIdentity(e, t) {
    await this.model.openRepository(as.dirname(e.uri.fsPath));
    let i = this.model.getRepository(e.uri);
    if (await i?.status(), !i || !i?.HEAD?.upstream) return;
    let r = i.remotes.find((s) => s.name === i.HEAD?.upstream?.remote)?.pushUrl?.replace(/^(git@[^\/:]+)(:)/i, "ssh://$1/"), o = r ? await Pe.workspace.getCanonicalUri(Pe.Uri.parse(r), { targetScheme: "https" }, t) : null;
    return JSON.stringify({ remote: o?.toString() ?? r, ref: i.HEAD?.upstream?.name ?? null, sha: i.HEAD?.commit ?? null });
  }
  provideEditSessionIdentityMatch(e, t) {
    try {
      let i = sc(e), r = sc(t);
      return i.remote === r.remote && i.ref === r.ref && i.sha === r.sha ? Pe.EditSessionIdentityMatch.Complete : i.remote === r.remote && i.ref === r.ref && i.sha !== r.sha ? Pe.EditSessionIdentityMatch.Partial : Pe.EditSessionIdentityMatch.None;
    } catch {
      return Pe.EditSessionIdentityMatch.Partial;
    }
  }
  async _onWillCreateEditSessionIdentity(e) {
    await this._doPublish(e);
  }
  async _doPublish(e) {
    await this.model.openRepository(as.dirname(e.uri.fsPath));
    let t = this.model.getRepository(e.uri);
    if (t && (await t.status(), !t.HEAD?.upstream && t.HEAD?.type === L.Head)) {
      let i = Pe.l10n.t("Publish Branch");
      if (await Pe.window.showInformationMessage(Pe.l10n.t("The current branch is not published to the remote. Would you like to publish it to access your changes elsewhere?"), { modal: true }, i) !== i) throw new Pe.CancellationError();
      await Pe.commands.executeCommand("git.publish");
    }
  }
};
function sc(n6) {
  let { remote: e, ref: t, sha: i } = JSON.parse(n6);
  return typeof e == "string" && e.endsWith(".git") && (e = e.slice(0, e.length - 4)), { remote: e, ref: t, sha: i };
}
var ue = require("vscode");
var po = class {
  constructor(e) {
    this.model = e;
    this.severity = ue.DiagnosticSeverity.Warning;
    this.disposables = [];
    this.diagnostics = ue.languages.createDiagnosticCollection(), this.migrateInputValidationSettings().then(() => {
      kt(V(ue.workspace.onDidChangeTextDocument, (t) => t.document.uri.scheme === "vscode-scm"), (t) => t.document)(this.onDidChangeTextDocument, this, this.disposables), V(ue.workspace.onDidChangeConfiguration, (t) => t.affectsConfiguration("git.inputValidation") || t.affectsConfiguration("git.inputValidationLength") || t.affectsConfiguration("git.inputValidationSubjectLength"))(this.onDidChangeConfiguration, this, this.disposables);
    });
  }
  getDiagnostics(e) {
    return this.diagnostics.get(e) ?? [];
  }
  async migrateInputValidationSettings() {
    try {
      let e = ue.workspace.getConfiguration("git"), t = e.inspect("inputValidation");
      if (t === void 0) return;
      typeof t.workspaceValue == "string" && await e.update("inputValidation", t.workspaceValue !== "off", false), typeof t.globalValue == "string" && await e.update("inputValidation", t.workspaceValue !== "off", true);
    } catch {
    }
  }
  onDidChangeConfiguration() {
    for (let e of this.model.repositories) this.onDidChangeTextDocument(e.inputBox.document);
  }
  onDidChangeTextDocument(e) {
    let t = ue.workspace.getConfiguration("git");
    if (!t.get("inputValidation", false)) {
      this.diagnostics.set(e.uri, void 0);
      return;
    }
    if (/^\s+$/.test(e.getText())) {
      let a = new ue.Range(e.lineAt(0).range.start, e.lineAt(e.lineCount - 1).range.end), l = new ue.Diagnostic(a, ue.l10n.t("Current commit message only contains whitespace characters"), this.severity);
      l.code = "empty_message", this.diagnostics.set(e.uri, [l]);
      return;
    }
    let r = [], o = t.get("inputValidationLength", 50), s = t.get("inputValidationSubjectLength", void 0);
    for (let a = 0; a < e.lineCount; a++) {
      let l = e.lineAt(a), u = a === 0 ? s ?? o : o;
      if (l.text.length > u) {
        let d = new ue.Diagnostic(l.range, ue.l10n.t("{0} characters over {1} in current line", l.text.length - u, u), this.severity);
        d.code = "line_length", r.push(d);
      }
    }
    this.diagnostics.set(e.uri, r);
  }
  dispose() {
    j(this.disposables);
  }
}, fo = class {
  constructor(e) {
    this.diagnosticsManager = e;
    this.disposables = [];
    this.disposables.push(ue.languages.registerCodeActionsProvider({ scheme: "vscode-scm" }, this));
  }
  provideCodeActions(e, t) {
    let i = [], r = this.diagnosticsManager.getDiagnostics(e.uri), o = this.getWrapAllLinesCodeAction(e, r);
    for (let s of r) if (s.range.contains(t)) switch (s.code) {
      case "empty_message": {
        let a = new ue.WorkspaceEdit();
        a.delete(e.uri, s.range);
        let l = new ue.CodeAction(ue.l10n.t("Clear whitespace characters"), ue.CodeActionKind.QuickFix);
        l.diagnostics = [s], l.edit = a, i.push(l);
        break;
      }
      case "line_length": {
        let a = this.getWrapLineWorkspaceEdit(e, s.range), l = new ue.CodeAction(ue.l10n.t("Hard wrap line"), ue.CodeActionKind.QuickFix);
        l.diagnostics = [s], l.edit = a, i.push(l), o && (o.diagnostics = [s], i.push(o));
        break;
      }
    }
    return i;
  }
  getWrapLineWorkspaceEdit(e, t) {
    let i = this.wrapTextDocumentLine(e, t.start.line), r = new ue.WorkspaceEdit();
    return r.replace(e.uri, t, i.join(`
`)), r;
  }
  getWrapAllLinesCodeAction(e, t) {
    let i = t.filter((o) => o.code === "line_length");
    if (i.length < 2) return;
    let r = new ue.CodeAction(ue.l10n.t("Hard wrap all lines"), ue.CodeActionKind.QuickFix);
    return r.edit = this.getWrapAllLinesWorkspaceEdit(e, i), r;
  }
  getWrapAllLinesWorkspaceEdit(e, t) {
    let i = new ue.WorkspaceEdit();
    for (let r of t) {
      let o = this.wrapTextDocumentLine(e, r.range.start.line);
      i.replace(e.uri, r.range, o.join(`
`));
    }
    return i;
  }
  wrapTextDocumentLine(e, t) {
    let i = ue.workspace.getConfiguration("git"), r = i.get("inputValidationLength", 50), o = i.get("inputValidationSubjectLength", void 0), s = t === 0 ? o ?? r : r, a = [], l = e.lineAt(t).text.trim(), u = 0;
    for (; l.length - u > s; ) {
      let d = l.lastIndexOf(" ", u + s);
      if (d !== -1 && d > u) a.push(l.substring(u, d)), u = d + 1;
      else {
        let h = l.indexOf(" ", u + s);
        h !== -1 ? (a.push(l.substring(u, h)), u = h + 1) : (a.push(l.substring(u)), u = l.length);
      }
    }
    return u < l.length && a.push(l.substring(u)), a;
  }
  dispose() {
    j(this.disposables);
  }
};
var N = require("vscode");
var ac, ls = class {
  constructor() {
    this[ac] = "LinkedMap";
    this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
  }
  clear() {
    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(e) {
    return this._map.has(e);
  }
  get(e, t = 0) {
    let i = this._map.get(e);
    if (i) return t !== 0 && this.touch(i, t), i.value;
  }
  set(e, t, i = 0) {
    let r = this._map.get(e);
    if (r) r.value = t, i !== 0 && this.touch(r, i);
    else {
      switch (r = { key: e, value: t, next: void 0, previous: void 0 }, i) {
        case 0:
          this.addItemLast(r);
          break;
        case 1:
          this.addItemFirst(r);
          break;
        case 2:
          this.addItemLast(r);
          break;
        default:
          this.addItemLast(r);
          break;
      }
      this._map.set(e, r), this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    let t = this._map.get(e);
    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    let e = this._head;
    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
  }
  forEach(e, t) {
    let i = this._state, r = this._head;
    for (; r; ) {
      if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== i) throw new Error("LinkedMap got modified during iteration.");
      r = r.next;
    }
  }
  keys() {
    let e = this, t = this._state, i = this._head, r = { [Symbol.iterator]() {
      return r;
    }, next() {
      if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
      if (i) {
        let o = { value: i.key, done: false };
        return i = i.next, o;
      } else return { value: void 0, done: true };
    } };
    return r;
  }
  values() {
    let e = this, t = this._state, i = this._head, r = { [Symbol.iterator]() {
      return r;
    }, next() {
      if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
      if (i) {
        let o = { value: i.value, done: false };
        return i = i.next, o;
      } else return { value: void 0, done: true };
    } };
    return r;
  }
  entries() {
    let e = this, t = this._state, i = this._head, r = { [Symbol.iterator]() {
      return r;
    }, next() {
      if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
      if (i) {
        let o = { value: [i.key, i.value], done: false };
        return i = i.next, o;
      } else return { value: void 0, done: true };
    } };
    return r;
  }
  [(ac = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, i = this.size;
    for (; t && i > e; ) this._map.delete(t.key), t = t.next, i--;
    this._head = t, this._size = i, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, i = this.size;
    for (; t && i > e; ) this._map.delete(t.key), t = t.previous, i--;
    this._tail = t, this._size = i, t && (t.next = void 0), this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail) this._tail = e;
    else if (this._head) e.next = this._head, this._head.previous = e;
    else throw new Error("Invalid list");
    this._head = e, this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail) this._head = e;
    else if (this._tail) e.previous = this._tail, this._tail.next = e;
    else throw new Error("Invalid list");
    this._tail = e, this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
    else if (e === this._head) {
      if (!e.next) throw new Error("Invalid list");
      e.next.previous = void 0, this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous) throw new Error("Invalid list");
      e.previous.next = void 0, this._tail = e.previous;
    } else {
      let t = e.next, i = e.previous;
      if (!t || !i) throw new Error("Invalid list");
      t.previous = i, i.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        let i = e.next, r = e.previous;
        e === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        let i = e.next, r = e.previous;
        e === this._head ? (i.previous = void 0, this._head = i) : (i.previous = r, r.next = i), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    let e = [];
    return this.forEach((t, i) => {
      e.push([i, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (let [t, i] of e) this.set(t, i);
  }
}, cs = class extends ls {
  constructor(e, t = 1) {
    super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(e) {
    this._limit = e, this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(e) {
    this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
  }
  get(e, t = 2) {
    return super.get(e, t);
  }
  peek(e) {
    return super.get(e, 0);
  }
  set(e, t) {
    return super.set(e, t, 2), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}, Ki = class extends cs {
  constructor(e, t = 1) {
    super(e, t);
  }
  trim(e) {
    this.trimOld(e);
  }
  set(e, t) {
    return super.set(e, t), this.checkTrim(), this;
  }
};
var us = 20;
function lc(n6, e) {
  return n6.some((t) => t.modified.startLineNumber <= e && e < t.modified.endLineNumberExclusive);
}
function go(n6, e) {
  return e - n6;
}
function Yh(n6, e) {
  if (e.length === 0) return n6;
  for (let t of e) {
    if (n6 < t.modified.startLineNumber) break;
    if (t.kind === N.TextEditorChangeKind.Addition) n6 = n6 - go(t.modified.startLineNumber, t.modified.endLineNumberExclusive);
    else if (t.kind === N.TextEditorChangeKind.Deletion) n6 = n6 + go(t.original.startLineNumber, t.original.endLineNumberExclusive);
    else if (t.kind === N.TextEditorChangeKind.Modification) {
      let i = go(t.original.startLineNumber, t.original.endLineNumberExclusive), r = go(t.modified.startLineNumber, t.modified.endLineNumberExclusive);
      i !== r && (n6 = n6 - (r - i));
    } else throw new Error("Unexpected change kind");
  }
  return n6;
}
function cc(n6) {
  let e = new N.Position(n6, Number.MAX_SAFE_INTEGER);
  return new N.Range(e, e);
}
function uc(n6) {
  return n6.scheme === "file" || tt(n6);
}
function Xh(n6, e) {
  if (n6 === e) return true;
  if (!n6 || !e || n6.resource.toString() !== e.resource.toString() || n6.blameInformation.length !== e.blameInformation.length) return false;
  for (let t = 0; t < n6.blameInformation.length; t++) {
    if (n6.blameInformation[t].lineNumber !== e.blameInformation[t].lineNumber) return false;
    let i = n6.blameInformation[t].blameInformation, r = e.blameInformation[t].blameInformation;
    if (typeof i == "string" && typeof r == "string") {
      if (i !== r) return false;
    } else if (typeof i != "string" && typeof r != "string") {
      if (i.hash !== r.hash) return false;
    } else return false;
  }
  return true;
}
var ds = class {
  constructor() {
    this._cache = /* @__PURE__ */ new Map();
  }
  clear() {
    this._cache.clear();
  }
  delete(e) {
    return this._cache.delete(e);
  }
  get(e, t, i) {
    let r = this._getCacheKey(t, i);
    return this._cache.get(e)?.get(r);
  }
  set(e, t, i, r) {
    this._cache.has(e) || this._cache.set(e, new Ki(100));
    let o = this._getCacheKey(t, i);
    this._cache.get(e).set(o, r);
  }
  _getCacheKey(e, t) {
    return Z(e, t).toString();
  }
}, ji = class {
  constructor(e) {
    this._model = e;
    this._subjectMaxLength = 50;
    this._onDidChangeBlameInformation = new N.EventEmitter();
    this.onDidChangeBlameInformation = this._onDidChangeBlameInformation.event;
    this._commitInformationCache = new Ki(100);
    this._repositoryBlameCache = new ds();
    this._repositoryDisposables = /* @__PURE__ */ new Map();
    this._enablementDisposables = [];
    this._disposables = [];
    N.workspace.onDidChangeConfiguration(this._onDidChangeConfiguration, this, this._disposables), this._onDidChangeConfiguration();
  }
  get textEditorBlameInformation() {
    return this._textEditorBlameInformation;
  }
  set textEditorBlameInformation(e) {
    Xh(this._textEditorBlameInformation, e) || (this._textEditorBlameInformation = e, this._onDidChangeBlameInformation.fire());
  }
  _shouldIgnoreWhitespace() {
    return N.workspace.getConfiguration("git").get("blame.ignoreWhitespace") === true;
  }
  getRepository(e) {
    return this._model.getRepository(e);
  }
  formatBlameInformationMessage(e, t, i) {
    let r = i.subject && i.subject.length > this._subjectMaxLength ? `${i.subject.substring(0, this._subjectMaxLength)}…` : i.subject, o = { hash: i.hash, hashShort: Tt(e, i.hash), subject: Ht(r ?? ""), authorName: i.authorName ?? "", authorEmail: i.authorEmail ?? "", authorDate: new Date(i.authorDate ?? /* @__PURE__ */ new Date()).toLocaleString(), authorDateAgo: Lt(i.authorDate ?? /* @__PURE__ */ new Date(), true, true) };
    return t.replace(/\$\{(.+?)\}/g, (s, a) => a in o ? o[a] : `\${${a}}`);
  }
  async getBlameInformationHover(e, t) {
    let i = [], r, o, s, a = this._model.getRepository(e);
    if (a) {
      try {
        o = this._commitInformationCache.get(t.hash), o || (o = await a.getCommit(t.hash), this._commitInformationCache.set(t.hash, o));
        let C = { commits: [{ hash: t.hash, authorName: t.authorName, authorEmail: t.authorEmail }], size: us };
        r = (await ai(this._model, a, C))?.get(t.hash);
      } catch {
      }
      (await a.getUnpublishedCommits()).has(t.hash) || i.push(...await Or(this._model, a) ?? []), s = await li(this._model, a, o?.message ?? t.subject ?? "");
    }
    let l = new N.MarkdownString();
    l.isTrusted = true, l.supportThemeIcons = true;
    let u = o?.hash ?? t.hash, d = o?.authorName ?? t.authorName, h = o?.authorEmail ?? t.authorEmail, p = o?.authorDate ?? t.authorDate, g = r ? `![${d}](${r}|width=${us},height=${us})` : "$(account)";
    if (d) {
      if (h) {
        let y = N.l10n.t("Email");
        l.appendMarkdown(`${g} [**${d}**](mailto:${h} "${y} ${d}")`);
      } else l.appendMarkdown(`${g} **${d}**`);
      if (p) {
        let y = new Date(p).toLocaleString(void 0, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" });
        l.appendMarkdown(`, $(history) ${Lt(p, true, true)} (${y})`);
      }
      l.appendMarkdown(`

`);
    }
    if (l.appendMarkdown(`${Ht(s ?? o?.message ?? t.subject ?? "")}

`), l.appendMarkdown(`---

`), o?.shortStat && (l.appendMarkdown(`<span>${o.shortStat.files === 1 ? N.l10n.t("{0} file changed", o.shortStat.files) : N.l10n.t("{0} files changed", o.shortStat.files)}</span>`), o.shortStat.insertions && l.appendMarkdown(`,&nbsp;<span style="color:var(--vscode-scmGraph-historyItemHoverAdditionsForeground);">${o.shortStat.insertions === 1 ? N.l10n.t("{0} insertion{1}", o.shortStat.insertions, "(+)") : N.l10n.t("{0} insertions{1}", o.shortStat.insertions, "(+)")}</span>`), o.shortStat.deletions && l.appendMarkdown(`,&nbsp;<span style="color:var(--vscode-scmGraph-historyItemHoverDeletionsForeground);">${o.shortStat.deletions === 1 ? N.l10n.t("{0} deletion{1}", o.shortStat.deletions, "(-)") : N.l10n.t("{0} deletions{1}", o.shortStat.deletions, "(-)")}</span>`), l.appendMarkdown(`

---

`)), l.appendMarkdown(`[\`$(git-commit) ${Tt(e, u)} \`](command:git.viewCommit?${encodeURIComponent(JSON.stringify([e, u]))} "${N.l10n.t("Open Commit")}")`), l.appendMarkdown("&nbsp;"), l.appendMarkdown(`[$(copy)](command:git.copyContentToClipboard?${encodeURIComponent(JSON.stringify(u))} "${N.l10n.t("Copy Commit Hash")}")`), i.length > 0) {
      l.appendMarkdown("&nbsp;&nbsp;|&nbsp;&nbsp;");
      let y = i.map((C) => `[${C.title}](command:${C.command}?${encodeURIComponent(JSON.stringify([...C.arguments ?? [], u]))} "${C.tooltip}")`);
      l.appendMarkdown(y.join("&nbsp;"));
    }
    return l.appendMarkdown("&nbsp;&nbsp;|&nbsp;&nbsp;"), l.appendMarkdown(`[$(gear)](command:workbench.action.openSettings?%5B%22git.blame%22%5D "${N.l10n.t("Open Settings")}")`), l;
  }
  _onDidChangeConfiguration(e) {
    if (e && !e.affectsConfiguration("git.blame.editorDecoration.enabled") && !e.affectsConfiguration("git.blame.editorDecoration.forceDisabled") && !e.affectsConfiguration("git.blame.ignoreWhitespace") && !e.affectsConfiguration("git.blame.statusBarItem.enabled")) return;
    e?.affectsConfiguration("git.blame.ignoreWhitespace") && this._repositoryBlameCache.clear();
    let t = N.workspace.getConfiguration("git"), r = !(t.get("blame.editorDecoration.forceDisabled") === true) && t.get("blame.editorDecoration.enabled") === true, o = t.get("blame.statusBarItem.enabled") === true;
    if (r && this._disableGitLensCurrentLineBlame(), r ? this._editorDecoration || (this._editorDecoration = new hs(this)) : (this._editorDecoration?.dispose(), this._editorDecoration = void 0), o ? this._statusBarItem || (this._statusBarItem = new ms(this)) : (this._statusBarItem?.dispose(), this._statusBarItem = void 0), r || o) {
      if (this._enablementDisposables.length === 0) {
        this._model.onDidOpenRepository(this._onDidOpenRepository, this, this._enablementDisposables), this._model.onDidCloseRepository(this._onDidCloseRepository, this, this._enablementDisposables);
        for (let s of this._model.repositories) this._onDidOpenRepository(s);
        N.window.onDidChangeActiveTextEditor(this._onDidChangeActiveTextEditor, this, this._enablementDisposables), N.window.onDidChangeTextEditorSelection((s) => this._onDidChangeTextEditorState(s.textEditor, "selection"), this, this._enablementDisposables), N.window.onDidChangeTextEditorDiffInformation((s) => this._onDidChangeTextEditorState(s.textEditor), this, this._enablementDisposables);
      }
    } else this._enablementDisposables = j(this._enablementDisposables);
    this._updateActiveTextEditorBlameInformation(N.window.activeTextEditor);
  }
  _disableGitLensCurrentLineBlame() {
    if (!N.extensions.getExtension("eamodio.gitlens")) return;
    let t = N.workspace.getConfiguration("gitlens");
    t.get("currentLine.enabled") === true && t.update("currentLine.enabled", false, N.ConfigurationTarget.Global);
  }
  _onDidOpenRepository(e) {
    let t = [];
    e.onDidRunGitStatus(() => this._onDidRunGitStatus(e), this, t), this._repositoryDisposables.set(e, t);
  }
  _onDidCloseRepository(e) {
    let t = this._repositoryDisposables.get(e);
    t && j(t), this._repositoryDisposables.delete(e), this._repositoryBlameCache.delete(e);
  }
  _onDidRunGitStatus(e) {
    !e.HEAD?.commit || this._HEAD === e.HEAD.commit || (this._HEAD = e.HEAD.commit, this._updateActiveTextEditorBlameInformation(N.window.activeTextEditor));
  }
  _onDidChangeActiveTextEditor(e) {
    this.textEditorBlameInformation = void 0, this._updateActiveTextEditorBlameInformation(e);
  }
  _onDidChangeTextEditorState(e, t) {
    e === N.window.activeTextEditor && this._updateActiveTextEditorBlameInformation(e, t);
  }
  async _getBlameInformation(e, t) {
    let i = this._model.getRepository(e);
    if (!i) return;
    let r = this._repositoryBlameCache.get(i, e, t);
    if (r) return r;
    await si();
    let o = await i.blame2(e.fsPath, t, this._shouldIgnoreWhitespace()) ?? [];
    return this._repositoryBlameCache.set(i, e, t, o), o;
  }
  async _updateActiveTextEditorBlameInformation(e, t) {
    let i = N.window.activeTextEditor, r = e === i ? t : void 0;
    if (!i) {
      this.textEditorBlameInformation = void 0;
      return;
    }
    if (!i.diffInformation) return;
    let o = this._model.getRepository(i.document.uri);
    if (!o || !o.HEAD?.commit) return;
    if (!uc(i.document.uri)) {
      this.textEditorBlameInformation = void 0;
      return;
    }
    if (r !== "selection" && i.selections.length === 1 && i.selections[0].start.line === 0 && i.selections[0].start.character === 0 && i.selections[0].end.line === 0 && i.selections[0].end.character === 0) {
      this.textEditorBlameInformation = void 0;
      return;
    }
    let s, a, l;
    if (tt(i.document.uri)) {
      let { ref: p } = Ne(i.document.uri);
      if (/^[0-9a-f]{40}$/i.test(p) || p === "HEAD" || p === "~") a = s = [], l = void 0;
      else if (p === "") {
        let g = Un(i);
        if (g && g.isStale) {
          this.textEditorBlameInformation = void 0;
          return;
        }
        a = [], l = s = g?.changes ?? [];
      } else throw new Error(`Unexpected ref: ${p}`);
    } else {
      let p = ui(i);
      if (!p || p.isStale) {
        this.textEditorBlameInformation = void 0;
        return;
      }
      let g = Un(i);
      if (g && g.isStale) {
        this.textEditorBlameInformation = void 0;
        return;
      }
      a = p.changes, l = g?.changes, s = l ?? a;
    }
    let u;
    if (!tt(i.document.uri)) u = o.HEAD.commit;
    else {
      let { ref: p } = Ne(i.document.uri);
      u = /^[0-9a-f]{40}$/i.test(p) ? p : o.HEAD.commit;
    }
    let d = await this._getBlameInformation(i.document.uri, u);
    if (i !== N.window.activeTextEditor || !d) return;
    let h = [];
    for (let p of new Set(i.selections.map((g) => g.active.line))) {
      if (lc(a, p + 1)) {
        r === "selection" && h.push({ lineNumber: p, blameInformation: N.l10n.t("Not Committed Yet") });
        continue;
      }
      if (lc(l ?? [], p + 1)) {
        h.push({ lineNumber: p, blameInformation: N.l10n.t("Not Committed Yet (Staged)") });
        continue;
      }
      let g = Yh(p + 1, s), y = d.find((C) => C.ranges.find((S) => g >= S.startLineNumber && g <= S.endLineNumber));
      y && h.push({ lineNumber: p, blameInformation: y });
    }
    this.textEditorBlameInformation = { resource: i.document.uri, blameInformation: h };
  }
  dispose() {
    for (let e of this._repositoryDisposables.values()) j(e);
    this._repositoryDisposables.clear(), this._disposables = j(this._disposables);
  }
};
b([Fe], ji.prototype, "_updateActiveTextEditorBlameInformation", 1);
var hs = class {
  constructor(e) {
    this._controller = e;
    this._disposables = [];
    this._decoration = N.window.createTextEditorDecorationType({ after: { color: new N.ThemeColor("git.blame.editorDecorationForeground") } }), this._disposables.push(this._decoration), N.workspace.onDidChangeConfiguration(this._onDidChangeConfiguration, this, this._disposables), N.window.onDidChangeActiveTextEditor(this._onDidChangeActiveTextEditor, this, this._disposables), this._controller.onDidChangeBlameInformation(() => this._onDidChangeBlameInformation(), this, this._disposables), this._onDidChangeConfiguration();
  }
  async provideHover(e, t, i) {
    if (i.isCancellationRequested) return;
    let r = N.window.activeTextEditor;
    if (!r || t.character !== e.lineAt(t.line).range.end.character) return;
    let s = this._controller.textEditorBlameInformation?.blameInformation?.find((l) => l.lineNumber === t.line);
    if (!s || typeof s.blameInformation == "string") return;
    let a = await this._controller.getBlameInformationHover(r.document.uri, s.blameInformation);
    if (!(!a || i.isCancellationRequested)) return { range: cc(t.line), contents: [a] };
  }
  _onDidChangeConfiguration(e) {
    e && !e.affectsConfiguration("git.commitShortHashLength") && !e.affectsConfiguration("git.blame.editorDecoration.template") || (this._registerHoverProvider(), this._onDidChangeBlameInformation());
  }
  _onDidChangeActiveTextEditor() {
    for (let e of N.window.visibleTextEditors) e !== N.window.activeTextEditor && e.setDecorations(this._decoration, []);
    this._registerHoverProvider();
  }
  _onDidChangeBlameInformation() {
    let e = N.window.activeTextEditor;
    if (!e) return;
    let t = this._controller.textEditorBlameInformation?.blameInformation;
    if (!t || t.length === 0) {
      e.setDecorations(this._decoration, []);
      return;
    }
    let r = N.workspace.getConfiguration("git").get("blame.editorDecoration.template", "${subject}, ${authorName} (${authorDateAgo})"), o = t.map((s) => {
      let a = typeof s.blameInformation != "string" ? this._controller.formatBlameInformationMessage(e.document.uri, r, s.blameInformation) : s.blameInformation;
      return this._createDecoration(s.lineNumber, a);
    });
    e.setDecorations(this._decoration, o);
  }
  _createDecoration(e, t) {
    return { range: cc(e), renderOptions: { after: { contentText: t, margin: "0 0 0 50px" } } };
  }
  _registerHoverProvider() {
    this._hoverDisposable?.dispose(), N.window.activeTextEditor && uc(N.window.activeTextEditor.document.uri) && (this._hoverDisposable = N.languages.registerHoverProvider({ pattern: N.window.activeTextEditor.document.uri.fsPath }, this));
  }
  dispose() {
    this._hoverDisposable?.dispose(), this._hoverDisposable = void 0, this._disposables = j(this._disposables);
  }
}, ms = class {
  constructor(e) {
    this._controller = e;
    this._disposables = [];
    this._statusBarItem = N.window.createStatusBarItem("git.blame", N.StatusBarAlignment.Right, 200), this._statusBarItem.name = N.l10n.t("Git Blame Information"), this._disposables.push(this._statusBarItem), N.workspace.onDidChangeConfiguration(this._onDidChangeConfiguration, this, this._disposables), this._controller.onDidChangeBlameInformation(() => this._onDidChangeBlameInformation(), this, this._disposables);
  }
  _onDidChangeConfiguration(e) {
    !e.affectsConfiguration("git.commitShortHashLength") && !e.affectsConfiguration("git.blame.statusBarItem.template") || this._onDidChangeBlameInformation();
  }
  async _onDidChangeBlameInformation() {
    if (!N.window.activeTextEditor) {
      this._statusBarItem.hide();
      return;
    }
    let e = this._controller.textEditorBlameInformation?.blameInformation;
    if (!e || e.length === 0) {
      this._statusBarItem.hide();
      return;
    }
    if (typeof e[0].blameInformation == "string") this._statusBarItem.text = `$(git-commit) ${e[0].blameInformation}`, this._statusBarItem.tooltip = N.l10n.t("Git Blame Information"), this._statusBarItem.command = void 0;
    else {
      let i = N.workspace.getConfiguration("git").get("blame.statusBarItem.template", "${authorName} (${authorDateAgo})");
      this._statusBarItem.text = `$(git-commit) ${this._controller.formatBlameInformationMessage(N.window.activeTextEditor.document.uri, i, e[0].blameInformation)}`, this._statusBarItem.tooltip2 = (r) => this._provideTooltip(N.window.activeTextEditor.document.uri, e[0].blameInformation, r), this._statusBarItem.command = { title: N.l10n.t("Open Commit"), command: "git.viewCommit", arguments: [N.window.activeTextEditor.document.uri, e[0].blameInformation.hash] };
    }
    this._statusBarItem.show();
  }
  async _provideTooltip(e, t, i) {
    if (i.isCancellationRequested) return;
    let r = await this._controller.getBlameInformationHover(e, t);
    return i.isCancellationRequested ? void 0 : r;
  }
  dispose() {
    this._disposables = j(this._disposables);
  }
};
var ps = ie(require("os")), dc = "userAndEmailCacher.gitAuthorName", hc = "userAndEmailCacher.gitAuthorEmail", yo = class {
  constructor(e, t, i) {
    this.extensionContext = e;
    this.globalState = t;
    this.logger = i;
  }
  init(e) {
    setTimeout(() => {
      this.initAsync(e).catch((t) => {
        this.logger.error(`[main] Failed to get git author name: ${t}`);
      });
    }, 1e4);
  }
  async initAsync(e) {
    if (this.extensionContext.cursorExtensionInitValues && !this.extensionContext.cursorExtensionInitValues.bcIdForThisWindow) try {
      let { name: t, email: i } = await this.getGitAuthorInfo(e);
      t && this.globalState.update(dc, t), i && this.globalState.update(hc, i), this.logger.info(`[main] Stored git author name in global state: ${t} <${i}>`);
    } catch (t) {
      let i = t instanceof Error ? t.message : String(t);
      this.logger.error(`[main] Failed to get git author name: ${i}`);
    }
  }
  provideGitAuthorInfoIfNeeded() {
    if (this.extensionContext?.cursorExtensionInitValues?.bcIdForThisWindow && this.globalState) {
      let e = this.globalState.get(dc), t = this.globalState.get(hc);
      if (e && t) return { GIT_AUTHOR_NAME: e, GIT_AUTHOR_EMAIL: t };
    }
  }
  async getGitAuthorInfo(e) {
    let t = "", i = "";
    try {
      t = (await e.exec(ps.homedir(), ["config", "--global", "user.name"], { env: {} })).stdout.trim(), this.logger.debug(`[git] Successfully retrieved user.name from git config: ${t}`);
    } catch (r) {
      let o = r instanceof Error ? r.message : String(r);
      this.logger.debug(`[git] Failed to get git user.name: ${o}`);
    }
    try {
      i = (await e.exec(ps.homedir(), ["config", "--global", "user.email"], { env: {} })).stdout.trim(), this.logger.debug(`[git] Successfully retrieved user.email from git config: ${i}`);
    } catch (r) {
      let o = r instanceof Error ? r.message : String(r);
      this.logger.debug(`[git] Failed to get git user.email: ${o}`);
    }
    return { name: t, email: i };
  }
};
var Zh = { dispose: () => {
} }, em = (n6, e, t) => Zh, Ji = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = em;
  }
  sendTelemetryEvent(e, t, i) {
  }
  sendRawTelemetryEvent(e, t, i) {
  }
  sendDangerousTelemetryEvent(e, t, i) {
  }
  sendTelemetryErrorEvent(e, t, i) {
  }
  sendDangerousTelemetryErrorEvent(e, t, i) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var fc = [];
async function tm() {
  for (let n6 of fc) await n6();
}
async function mc(n6, e, t, i) {
  let r = K.workspace.getConfiguration("git").get("path"), o = Array.isArray(r) ? r : r ? [r] : [], { isTrusted: s, workspaceFolders: a = [] } = K.workspace, l = s ? [] : a.map(($) => $t.normalize($.uri.fsPath).replace(/[\r\n]+$/, ""));
  !s && o.length !== 0 && (o = o.filter(($) => $t.isAbsolute($)));
  let u = await ol(o, ($) => {
    if (e.info(K.l10n.t('[main] Validating found git in: "{0}"', $)), l.length === 0) return true;
    let q = $t.normalize($).replace(/[\r\n]+$/, ""), E = l.some((oe) => q.startsWith(oe));
    return E && e.info(K.l10n.t('[main] Skipped found git in: "{0}"', $)), !E;
  }, e), d;
  try {
    d = await nc(n6.storagePath, n6.secrets);
  } catch ($) {
    e.error(`[main] Failed to create git IPC: ${$}`);
  }
  let h = new yo(n6, n6.globalState, e), p = new ro(d, h);
  i.push(p);
  let g = new uo(d);
  i.push(g);
  let y = { ...p.getEnv(), ...g.getEnv(), ...d?.getEnv() }, C = new no(n6, [p, g, d]);
  i.push(C), e.info(K.l10n.t('[main] Using git "{0}" from "{1}"', u.version, u.path));
  let S = new wr({ gitPath: u.path, userAgent: `git/${u.version} (${bt.version?.() ?? bt.type()} ${bt.release()}; ${bt.platform()} ${bt.arch()}) vscode/${K.version} (${K.env.appName})`, version: u.version, env: y }), k = new Nt(S, p, n6.globalState, n6.workspaceState, e, t);
  i.push(k), h.init(S);
  let G = () => K.commands.executeCommand("setContext", "gitOpenRepositoryCount", `${k.repositories.length}`);
  k.onDidOpenRepository(G, null, i), k.onDidCloseRepository(G, null, i), G();
  let I = ($) => {
    let q = $.split(/\r?\n/mg);
    for (; /^\s*$/.test(q[q.length - 1]); ) q.pop();
    e.appendLine(q.join(`
`));
  };
  S.onOutput.addListener("log", I), i.push(Be(() => S.onOutput.removeListener("log", I)));
  let D = new Zr(S, k, n6.globalState, e, t);
  i.push(D, new pi(k, e), new eo(k), new ji(k), new Li(k, D), new mo(k), new Fr(k), new so(k, e));
  let M = new Mr(k);
  k.registerPostCommitCommandsProvider(M);
  let H = new po(k);
  i.push(H);
  let W = new fo(H);
  i.push(W);
  let B = K.languages.registerDocumentLinkProvider("git-commit", new ho(k));
  return i.push(B), am(u), K.commands.executeCommand("setContext", "gitVersion2.35", S.compareGitVersionTo("2.35") >= 0), k;
}
async function im(n6) {
  if (n6.uri.scheme !== "file") return false;
  let e = $t.join(n6.uri.fsPath, ".git");
  try {
    return (await new Promise((i, r) => pc.stat(e, (o, s) => o ? r(o) : i(s)))).isDirectory();
  } catch {
    return false;
  }
}
async function rm() {
  let n6 = K.workspace.getConfiguration("git");
  if (n6.get("ignoreMissingGitWarning") === true || !K.workspace.workspaceFolders || (await Promise.all(K.workspace.workspaceFolders.map(im))).every((s) => !s)) return;
  let i = K.l10n.t("Download Git"), r = K.l10n.t("Don't Show Again"), o = await K.window.showWarningMessage(K.l10n.t('Git not found. Install it or configure it using the "git.path" setting.'), i, r);
  o === i ? K.commands.executeCommand("vscode.open", K.Uri.parse("https://aka.ms/vscode-download-git")) : o === r && await n6.update("ignoreMissingGitWarning", true, true);
}
async function gc(n6) {
  let e = [];
  n6.subscriptions.push(new K.Disposable(() => K.Disposable.from(...e).dispose()));
  let t = K.window.createOutputChannel("Git", { log: true });
  e.push(t);
  let i = (l) => {
    t.appendLine(K.l10n.t("[main] Log level: {0}", K.LogLevel[l]));
  };
  e.push(t.onDidChangeLogLevel(i)), i(t.logLevel);
  let r = "", o = new Ji(r);
  if (fc.push(() => o.dispose()), !K.workspace.getConfiguration("git", null).get("enabled")) {
    let l = V(K.workspace.onDidChangeConfiguration, (h) => h.affectsConfiguration("git")), u = V(l, () => K.workspace.getConfiguration("git", null).get("enabled") === true), d = new _t();
    return Qe(u).then(async () => d.model = await mc(n6, t, o, e)), d;
  }
  try {
    let l = await mc(n6, t, o, e);
    return new _t(l);
  } catch (l) {
    if (console.warn(l.message), t.warn(`[main] Failed to create model: ${l}`), !/Git installation not found/.test(l.message || "")) throw l;
    return o.sendTelemetryEvent("git.missing"), K.commands.executeCommand("setContext", "git.missing", true), rm(), new _t();
  } finally {
    e.push(new oo(t));
  }
}
var yc;
function En() {
  return yc;
}
async function om(n6) {
  yc = n6;
  let e = await gc(n6);
  return n6.subscriptions.push(Bl(e)), e;
}
async function nm(n6) {
  let e = K.workspace.getConfiguration("git");
  if (e.get("ignoreLegacyWarning") === true || !/^[01]/.test(n6.version)) return;
  let i = K.l10n.t("Update Git"), r = K.l10n.t("Don't Show Again"), o = await K.window.showWarningMessage(K.l10n.t('You seem to have git "{0}" installed. Code works best with git >= 2', n6.version), i, r);
  o === i ? K.commands.executeCommand("vscode.open", K.Uri.parse("https://aka.ms/vscode-download-git")) : o === r && await e.update("ignoreLegacyWarning", true, true);
}
async function sm(n6) {
  if (!/^2\.(25|26)\./.test(n6.version)) return;
  let e = K.workspace.getConfiguration("git");
  if (e.get("ignoreWindowsGit27Warning") === true) return;
  let i = K.l10n.t("Update Git"), r = K.l10n.t("Don't Show Again"), o = await K.window.showWarningMessage(K.l10n.t('There are known issues with the installed Git "{0}". Please update to Git >= 2.27 for the git features to work correctly.', n6.version), i, r);
  o === i ? K.commands.executeCommand("vscode.open", K.Uri.parse("https://aka.ms/vscode-download-git")) : o === r && await e.update("ignoreWindowsGit27Warning", true, true);
}
async function am(n6) {
  await nm(n6), process.platform === "win32" && await sm(n6);
}
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
