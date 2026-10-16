"use strict";
var nd = Object.create;
var rn = Object.defineProperty;
var rd = Object.getOwnPropertyDescriptor;
var id = Object.getOwnPropertyNames;
var od = Object.getPrototypeOf, sd = Object.prototype.hasOwnProperty;
var W = (e2, t) => () => (e2 && (t = e2(e2 = 0)), t);
var M = (e2, t) => () => (t || e2((t = { exports: {} }).exports, t), t.exports), Mr = (e2, t) => {
  for (var n in t) rn(e2, n, { get: t[n], enumerable: true });
}, is = (e2, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of id(t)) !sd.call(e2, i) && i !== n && rn(e2, i, { get: () => t[i], enumerable: !(r = rd(t, i)) || r.enumerable });
  return e2;
};
var q = (e2, t, n) => (n = e2 != null ? nd(od(e2)) : {}, is(t || !e2 || !e2.__esModule ? rn(n, "default", { value: e2, enumerable: true }) : n, e2)), os = (e2) => is(rn({}, "__esModule", { value: true }), e2);
var qr, Ye, Vr = W(() => {
  qr = class {
    constructor(t, n, r) {
      r == null && typeof t == "string" && (r = t.length), this.string = t, this.pos = this.start = n || 0, this.end = r;
    }
    eof() {
      return this.pos >= this.end;
    }
    limit(t, n) {
      return new this.constructor(this.string, t, n);
    }
    peek() {
      return this.string.charCodeAt(this.pos);
    }
    next() {
      if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
    }
    eat(t) {
      let n = this.peek(), r = typeof t == "function" ? t(n) : n === t;
      return r && this.next(), r;
    }
    eatWhile(t) {
      let n = this.pos;
      for (; !this.eof() && this.eat(t); ) ;
      return this.pos !== n;
    }
    backUp(t) {
      this.pos -= t || 1;
    }
    current() {
      return this.substring(this.start, this.pos);
    }
    substring(t, n) {
      return this.string.slice(t, n);
    }
    error(t) {
      let n = new Error(`${t} at char ${this.pos + 1}`);
      return n.originalMessage = t, n.pos = this.pos, n.string = this.string, n;
    }
  }, Ye = qr;
});
function Ze(e2) {
  return e2 === 39 || e2 === 34;
}
function Fe(e2) {
  return e2 > 47 && e2 < 58;
}
function on(e2, t, n) {
  return t = t || 65, n = n || 90, e2 &= -33, e2 >= t && e2 <= n;
}
function ls(e2) {
  return Fe(e2) || on(e2);
}
function ad(e2) {
  return e2 === 32 || e2 === 9 || e2 === 160;
}
function Oe(e2) {
  return ad(e2) || e2 === 10 || e2 === 13;
}
function $e(e2, t, n, r) {
  r = r ? Object.assign({}, as, r) : as;
  let i = e2.pos;
  if (e2.eat(t)) {
    let o = 1, s;
    for (; !e2.eof(); ) if (!Hr(e2, r)) if (s = e2.next(), s === t) o++;
    else if (s === n) {
      if (o--, !o) return e2.start = i, true;
    } else s === r.escape && e2.next();
    if (e2.pos = i, r.throws) throw e2.error(`Unable to find matching pair for ${String.fromCharCode(t)}`);
  }
  return false;
}
var ss, Hr, as, Wr = W(() => {
  ss = { escape: 92, throws: false }, Hr = function(e2, t) {
    t = t ? Object.assign({}, ss, t) : ss;
    let n = e2.pos, r = e2.peek();
    if (e2.eat(Ze)) {
      for (; !e2.eof(); ) switch (e2.next()) {
        case r:
          return e2.start = n, true;
        case t.escape:
          e2.next();
          break;
      }
      if (e2.pos = n, t.throws) throw e2.error("Unable to consume quoted string");
    }
    return false;
  };
  as = { escape: 92, throws: false };
});
function ld(e2, t) {
  let n = e2.pos;
  if (e2.eatWhile(t)) return new an(e2, n, e2.pos);
  e2.pos = n;
}
function yd(e2) {
  return fs(e2) || Re(e2, kd);
}
function wd(e2) {
  let t = e2.pos;
  if (Hr(e2)) {
    let n = e2.pos, r, i;
    e2.pos = t, e2.next(), r = e2.start = e2.pos, e2.pos = n, e2.backUp(1), i = e2.pos;
    let o = Re(e2, r, i);
    return e2.pos = n, o;
  }
  return fs(e2) || Sd(e2);
}
function kd(e2) {
  return e2 !== ds && !Qr(e2) && !Oe(e2);
}
function Qr(e2) {
  return e2 === vd || e2 === bd;
}
function Sd(e2) {
  return Re(e2, Td);
}
function Td(e2) {
  return !isNaN(e2) && !Ze(e2) && !Oe(e2) && !Qr(e2);
}
function Od(e2) {
  return Re(e2, $d);
}
function $d(e2) {
  return ls(e2) || e2 === Cd || e2 === Ad || e2 === Ed || e2 === Id;
}
function Gr(e2, t) {
  let n = e2.pos;
  for (let r = 0; r < t.length; r++) if (!e2.eat(t[r])) return e2.pos = n, false;
  return e2.start = n, true;
}
function hs(e2, t, n, r) {
  let i = e2.pos;
  if (Gr(e2, t)) {
    for (; !e2.eof(); ) {
      if (Gr(e2, n)) return true;
      e2.next();
    }
    return r ? true : (e2.pos = i, false);
  }
  return e2.pos = i, null;
}
function St(e2) {
  return e2.split("").map((t) => t.charCodeAt(0));
}
function Ud(e2, t) {
  t = Object.assign({}, Dd, t);
  let n = typeof e2 == "string" ? new Ye(e2) : e2, r = new kt(n, "root"), i = new Set(t.empty), o = t.special.reduce((f, h) => f.set(h, St(`</${h}>`)), /* @__PURE__ */ new Map()), s = (f, h) => f.selfClosing || !t.xml && i.has(h), a, l, u, c = [r];
  for (; !n.eof(); ) if (a = Bd(n)) if (u = qd(a), a.type === "open") l = new kt(n, "tag", a), cs(c).addChild(l), o.has(u) ? l.close = Md(n, o.get(u)) : s(a, u) || c.push(l);
  else if (a.type === "close") {
    for (let f = c.length - 1; f > 0; f--) if (c[f].name.toLowerCase() === u) {
      c[f].close = a, c = c.slice(0, f);
      break;
    }
  } else cs(c).addChild(new kt(n, a.type, a));
  else n.next();
  return r;
}
function Bd(e2) {
  if (e2.peek() === 60) return Ld(e2) || zd(e2) || ps(e2);
}
function Md(e2, t) {
  let n = e2.pos, r;
  for (; !e2.eof(); ) {
    if (Gr(e2, t)) return e2.pos = e2.start, ps(e2);
    e2.next();
  }
  return e2.pos = n, null;
}
function qd(e2) {
  return e2.name ? e2.name.value.toLowerCase() : `#${e2.type}`;
}
function cs(e2) {
  return e2[e2.length - 1];
}
var kt, Re, an, ud, cd, fd, dd, pd, hd, md, gd, sn, fs, bd, ds, vd, xd, Ed, Ad, us, Cd, Nd, Pd, Id, ps, Rd, _d, Ld, jd, Fd, zd, Dd, Tt, Jr = W(() => {
  Vr();
  Wr();
  kt = class {
    constructor(t, n, r, i) {
      this.stream = t, this.type = n, this.open = r, this.close = i, this.children = [], this.parent = null;
    }
    get name() {
      return this.type === "tag" && this.open ? this.open && this.open.name && this.open.name.value : "#" + this.type;
    }
    get attributes() {
      return this.open && this.open.attributes;
    }
    get start() {
      return this.open && this.open.start;
    }
    get end() {
      return this.close ? this.close.end : this.open && this.open.end;
    }
    get firstChild() {
      return this.children[0];
    }
    get nextSibling() {
      let t = this.getIndex();
      return t !== -1 ? this.parent.children[t + 1] : null;
    }
    get previousSibling() {
      let t = this.getIndex();
      return t !== -1 ? this.parent.children[t - 1] : null;
    }
    getIndex() {
      return this.parent ? this.parent.children.indexOf(this) : -1;
    }
    addChild(t) {
      return this.removeChild(t), this.children.push(t), t.parent = this, this;
    }
    removeChild(t) {
      let n = this.children.indexOf(t);
      return n !== -1 && (this.children.splice(n, 1), t.parent = null), this;
    }
  }, Re = function(e2, t, n) {
    return typeof t == "function" ? ld(e2, t) : new an(e2, t, n);
  };
  an = class {
    constructor(t, n, r) {
      this.stream = t, this.start = n ?? t.start, this.end = r ?? t.pos, this._value = null;
    }
    get value() {
      if (this._value === null) {
        let t = this.stream.start, n = this.stream.pos;
        this.stream.start = this.start, this.stream.pos = this.end, this._value = this.stream.current(), this.stream.start = t, this.stream.pos = n;
      }
      return this._value;
    }
    toString() {
      return this.value;
    }
    valueOf() {
      return `${this.value} [${this.start}; ${this.end}]`;
    }
  }, ud = 60, cd = 62, fd = 91, dd = 93, pd = 40, hd = 41, md = 123, gd = 125, sn = { throws: true }, fs = function(e2) {
    let t = e2.pos;
    if ($e(e2, ud, cd, sn) || $e(e2, fd, dd, sn) || $e(e2, pd, hd, sn) || $e(e2, md, gd, sn)) return Re(e2, t);
  }, bd = 47, ds = 61, vd = 62, xd = function(e2) {
    let t = [], n, r, i;
    for (; !e2.eof(); ) if (e2.eatWhile(Oe), i = { start: e2.pos }, i.name = yd(e2)) e2.eat(ds) ? i.value = wd(e2) : i.boolean = true, i.end = e2.pos, t.push(i);
    else {
      if (Qr(e2.peek())) break;
      e2.next();
    }
    return t;
  };
  Ed = 45, Ad = 46, us = 47, Cd = 58, Nd = 60, Pd = 62, Id = 95, ps = function(e2) {
    let t = e2.pos;
    if (e2.eat(Nd)) {
      let n = { type: e2.eat(us) ? "close" : "open" };
      if ((n.name = Od(e2)) && (n.type !== "close" && (n.attributes = xd(e2), e2.eatWhile(Oe), n.selfClosing = e2.eat(us)), e2.eat(Pd))) return Object.assign(Re(e2, t), n);
    }
    return e2.pos = t, null;
  };
  Rd = St("<!--"), _d = St("-->"), Ld = function(e2) {
    let t = e2.pos;
    if (hs(e2, Rd, _d, true)) {
      let n = Re(e2, t);
      return n.type = "comment", n;
    }
    return null;
  }, jd = St("<![CDATA["), Fd = St("]]>"), zd = function(e2) {
    let t = e2.pos;
    if (hs(e2, jd, Fd, true)) {
      let n = Re(e2, t);
      return n.type = "cdata", n;
    }
    return null;
  }, Dd = { xml: false, special: ["script", "style"], empty: ["img", "meta", "link", "br", "base", "hr", "area", "wbr", "col", "embed", "input", "param", "source", "track"] };
  Tt = Ud;
});
function Vd(e2) {
  e2 = e2.slice();
  let t;
  for (; t !== e2.length; ) t = e2.length, Zr(e2[0]) && e2.shift(), Zr(tt(e2)) && e2.pop();
  return e2;
}
function ks(e2) {
  return Vd(e2, Zr);
}
function Zr(e2) {
  let t = e2 && e2.type;
  return t === "whitespace" || t === "comment";
}
function Ss(e2, t) {
  let n = e2.pos;
  for (let r = 0, i = t.length; r < i; r++) if (!e2.eat(t.charCodeAt(r))) return e2.pos = n, false;
  return true;
}
function Kr(e2, t) {
  let n = e2.pos;
  return e2.eat(t) ? (e2.start = n, true) : false;
}
function Et(e2, t) {
  let n = e2.pos;
  return e2.eatWhile(t) ? (e2.start = n, true) : false;
}
function tt(e2) {
  return e2[e2.length - 1];
}
function ze(e2) {
  return e2 && e2.valueOf();
}
function Wd(e2) {
  if (Gd(e2.peek())) {
    let t = e2.pos, n = Hd.get(e2.next()), r = new C(e2, "separator", t);
    return r.property("type", n), r;
  }
}
function Gd(e2) {
  return e2 === Ts || e2 === Es || e2 === As || e2 === et || e2 === nt;
}
function Xd(e2) {
  return e2 === et || e2 === nt;
}
function Yd(e2, t, n) {
  let r = new C(e2, "arguments"), i = n ? Cs : Kd, o = [];
  for (let s = 0, a = t.length, l; s < a; s++) l = t[s], i(l) ? (r.add(gs(e2, o) || Zd(e2, l.start)), o.length = 0) : o.push(l);
  return o.length && r.add(gs(e2, o)), r;
}
function gs(e2, t) {
  if (t = ks(t), t.length) {
    let n = new C(e2, "argument", t[0].start, tt(t).end);
    for (let r = 0; r < t.length; r++) n.add(t[r]);
    return n;
  }
}
function Zd(e2, t) {
  let n = new C(e2, "argument", t, t);
  return n.property("empty", true), n;
}
function Kd(e2) {
  return e2.property("type") === "comma";
}
function Cs(e2) {
  return e2.property("type") === "propertyTerminator";
}
function Se(e2) {
  return Ps(e2) && new C(e2, "ident");
}
function Ps(e2) {
  let t = e2.pos;
  return e2.eat(Ns), e2.eat(Is) ? (e2.eatWhile(Os), e2.start = t, true) : (e2.pos = t, false);
}
function Is(e2) {
  return e2 === ep || e2 === Ns || on(e2) || e2 >= 128;
}
function Os(e2) {
  return Fe(e2) || Is(e2);
}
function rt(e2, t, n, r, i) {
  let o = e2.pos;
  if (e2.eat(n)) {
    let s = r(e2, o);
    if (s || i) return e2.start = o, new C(e2, t, o).add(s);
  }
  e2.pos = o;
}
function ri(e2) {
  return rt(e2, "at-keyword", tp, Se);
}
function ii(e2, t) {
  let n = e2.pos;
  if (t = t || rp, (e2.eat($s) || e2.eat(Rs)) && e2.eat(et)) {
    let r = new C(e2, "interpolation", n), i = 1, o;
    for (; !e2.eof(); ) if (e2.eat(et)) i++;
    else if (e2.eat(nt)) {
      if (i--, !i) return r.end = e2.pos, r;
    } else if (o = t(e2)) r.add(o);
    else break;
  }
  e2.pos = n;
}
function np(e2) {
  let t = e2.pos;
  return (e2.eat($s) || e2.eat(Rs)) && $e(e2, et, nt) ? (e2.start = t, true) : (e2.pos = t, false);
}
function rp(e2) {
  let t = e2.pos;
  for (; !e2.eof() && e2.peek() !== nt; ) At(e2) || e2.next();
  if (t !== e2.pos) return new C(e2, "expression", t);
}
function oi(e2) {
  return At(e2, true);
}
function At(e2, t) {
  let n = e2.peek(), r, i, o;
  if (Ze(n)) {
    e2.start = e2.pos, e2.next();
    let s = n, a = e2.pos;
    for (; !e2.eof() && (r = e2.pos, !(e2.eat(s) || e2.eat(bs))); ) e2.eat(92) ? e2.eat(bs) : t && (o = ii(e2)) && (i ? i.push(o) : i = [o]), e2.next();
    if (t) {
      let l = new C(e2, "string"), u = new C(e2, "unquoted", a, r);
      return u.add(i), l.add(u), l.property("quote", s), l;
    }
    return true;
  }
  return false;
}
function bs(e2) {
  return e2 === 10 || e2 === 13;
}
function ip(e2) {
  if (_s(e2)) {
    let t = new C(e2, "comment");
    return t.property("type", "single-line"), t;
  }
}
function op(e2) {
  if (Ls(e2)) {
    let t = new C(e2, "comment");
    return t.property("type", "multiline"), t;
  }
}
function sp(e2) {
  return _s(e2) || Ls(e2);
}
function _s(e2) {
  let t = e2.pos;
  if (e2.eat(un) && e2.eat(un)) {
    for (e2.start = t; !e2.eof() && !ap(e2.next()); ) ;
    return true;
  }
  return e2.pos = t, false;
}
function Ls(e2) {
  let t = e2.pos;
  if (e2.eat(un) && e2.eat(vs)) {
    for (; !e2.eof() && !(e2.next() === vs && e2.eat(un)); ) ;
    return e2.start = t, true;
  }
  return e2.pos = t, false;
}
function ap(e2) {
  return e2 === 10 || e2 === 13;
}
function lp(e2) {
  return De(e2) && new C(e2, "whitespace");
}
function De(e2) {
  return Et(e2, Oe);
}
function fp(e2) {
  let t = e2.pos;
  if (e2.eat(up)) {
    ln(e2);
    let n = Se(e2);
    ln(e2);
    let r = dp(e2);
    ln(e2);
    let i = oi(e2) || Se(e2);
    return ln(e2), e2.eat(cp), new C(e2, "attribute", t).add(n).add(r).add(i);
  }
}
function ln(e2) {
  for (; !e2.eof(); ) if (!De(e2) && !sp(e2)) return true;
}
function dp(e2) {
  return Et(e2, pp) && new C(e2, "operator");
}
function pp(e2) {
  return e2 === 126 || e2 === 124 || e2 === 94 || e2 === 36 || e2 === 42 || e2 === 61;
}
function ai(e2) {
  if (js(e2)) return new C(e2, "backtick");
}
function js(e2) {
  let t = e2.pos;
  return $e(e2, xs, xs) ? (e2.start = t, true) : false;
}
function mp(e2) {
  return rt(e2, "class", hp, Se);
}
function vp(e2) {
  return e2 === Fs || e2 === zs || e2 === Us || e2 === Ds;
}
function yp(e2) {
  return rt(e2, "hash", xp, wp, true);
}
function wp(e2) {
  if (kp(e2)) return new C(e2, "hash-value");
}
function kp(e2) {
  return Et(e2, Sp);
}
function Sp(e2) {
  return Fe(e2) || on(e2, 65, 70) || e2 === 95 || e2 === 45 || e2 > 128;
}
function Ep(e2) {
  return rt(e2, "id", Tp, Se);
}
function Cp(e2) {
  return rt(e2, "important", Ap, Se);
}
function Np(e2) {
  if (Pp(e2)) {
    let t = e2.start, n = new C(e2, "value"), r = Ip(e2) ? new C(e2, "unit") : null;
    return new C(e2, "number", t).add(n).add(r);
  }
}
function Pp(e2) {
  let t = e2.pos;
  if (e2.eat($p), e2.eatWhile(Fe)) {
    e2.start = t;
    let n = e2.pos;
    return e2.eat(ys) && e2.eatWhile(Fe) || (e2.pos = n), true;
  } else if (e2.eat(ys) && e2.eatWhile(Fe)) return e2.start = t, true;
  return e2.pos = t, false;
}
function Ip(e2) {
  return Ps(e2) || Op(e2);
}
function Op(e2) {
  return Kr(e2, 37);
}
function $p(e2) {
  return e2 === 45 || e2 === 43;
}
function Up(e2) {
  return Bp(e2) && new C(e2, "operator");
}
function Bp(e2) {
  return Kr(e2, Ms) ? (e2.eatWhile(Bs), true) : !!Kr(e2, Mp);
}
function Ms(e2) {
  return e2 === Rp || e2 === zp || e2 === Bs || e2 === Dp;
}
function Mp(e2) {
  return e2 === _p || e2 === Lp || e2 === jp || e2 === Fp || Ms(e2);
}
function qs(e2) {
  return Et(e2, Wp);
}
function Wp(e2) {
  return !isNaN(e2) && !Ze(e2) && !Oe(e2) && e2 !== 40 && e2 !== 41 && e2 !== 92 && !Gp(e2);
}
function Gp(e2) {
  return e2 >= 0 && e2 <= 8 || e2 === 11 || e2 >= 14 && e2 <= 31 || e2 === 127;
}
function Vs(e2) {
  let t = e2.pos;
  if (Ss(e2, "url(")) {
    De(e2);
    let n = oi(e2) || Hp(e2);
    return De(e2), e2.eat(41), new C(e2, "url", t).add(n);
  }
  e2.pos = t;
}
function Hs(e2) {
  let t = e2.pos;
  return Ss(e2, "url(") ? (De(e2), At(e2) || qs(e2), De(e2), e2.eat(41), e2.start = t, true) : (e2.pos = t, false);
}
function Qp(e2) {
  return rt(e2, "variable", Ws, Jp);
}
function Jp(e2) {
  if (Xp(e2)) return new C(e2, "name");
}
function Xp(e2) {
  return Et(e2, Yp);
}
function Yp(e2) {
  return e2 === Ws || Os(e2);
}
function cn(e2) {
  let t = Zp(e2) || ms(e2, cn);
  if (t && t.type === "ident") {
    let n = ms(e2, cn);
    if (n) return new C(e2, "function", t.start, n.end).add(t).add(n);
  }
  return t || rh(e2);
}
function Zp(e2) {
  return nh(e2) || Vs(e2) || Kp(e2) || eh(e2) || Wd(e2);
}
function Kp(e2) {
  return ii(e2) || ai(e2) || Se(e2) || ri(e2) || mp(e2) || Ep(e2) || Vp(e2) || fp(e2) || bp(e2);
}
function eh(e2) {
  return Vs(e2) || oi(e2) || ii(e2) || ai(e2) || Np(e2) || yp(e2) || th(e2) || Cp(e2) || Up(e2);
}
function th(e2) {
  return ai(e2) || Qp(e2) || ri(e2) || Se(e2);
}
function nh(e2) {
  return si(e2) || lp(e2);
}
function rh(e2) {
  if (e2.start = e2.pos, e2.next() != null) return new C(e2, "unknown");
}
function ih(e2) {
  return li(e2, "selector");
}
function oh(e2) {
  let t = typeof e2 == "string" ? new Ye(e2) : e2, n = [];
  for (; !t.eof(); ) n.push(cn(t));
  let r;
  if (n.length === 1) r = n[0];
  else {
    r = new C(t, "property-name", t.start, t.end);
    for (let i = 0, o = n.length; i < o; i++) r.add(n[i]);
  }
  return r;
}
function sh(e2) {
  return li(e2);
}
function ah(e2) {
  return li(e2);
}
function li(e2, t) {
  t = t || "item";
  let n = typeof e2 == "string" ? new Ye(e2) : e2, r = [], i = [], o = () => {
    let a = ks(i);
    if (a.length) {
      let l = new C(n, t, a[0].start, tt(a).end);
      for (let u = 0; u < a.length; u++) l.add(a[u]);
      r.push(l);
    }
    i.length = 0;
  }, s;
  for (; !n.eof(); ) if (n.eat(44)) o();
  else if (s = cn(n)) s.type !== "comment" && i.push(s);
  else throw n.error("Unexpected character");
  return o(), r;
}
function lh(e2, t, n, r) {
  if (!t.length) return null;
  let i = t[0];
  return i.end = tt(t).end, new ei(e2, i, n, r);
}
function uh(e2, t, n, r) {
  if (!t.length) return null;
  let i = 0, o, s = t[i++];
  return i < t.length ? (o = t[i++], o.type = "expression", o.end = tt(t).end) : o = new C(e2, "expression", s.end, s.end), new ti(e2, s, o, n, r);
}
function Xr(e2, t, n) {
  if (!t.length) return null;
  let r, i, o = 0, s = t[o++];
  return o < t.length && (i = t[o++], i.type = "value", i.end = tt(t).end), s && i && (r = new C(e2, "separator", s.end, i.start)), new ni(e2, s, i, r, n);
}
function mh(e2) {
  let t = typeof e2 == "string" ? new Ye(e2) : e2, n = new Yr(), r = n, i, o, s, a = [], l = () => {
    o && (a.push(o), o = null);
  };
  for (; !t.eof(); ) if (!De(t)) {
    if (s = si(t)) {
      n.addComment(s);
      continue;
    }
    if (t.start = t.pos, t.eatWhile(fh)) a.length || (o ? l() : o = new C(t, "preparse"));
    else if (t.eat(dh)) l(), r.add(Xr(t, a, new C(t, "termintator"))), a.length = 0;
    else if (t.eat(ph)) l(), a.length > 0 && (i = a[0].type === "at-keyword" ? uh(t, a, new C(t, "body-start")) : lh(t, a, new C(t, "body-start")), r.add(i), r = i, a.length = 0);
    else if (t.eat(hh)) l(), r.add(Xr(t, a)), r.type !== "stylesheet" && (r.contentEndToken = new C(t, "body-end"), r = r.parent), a.length = 0;
    else if (s = ri(t)) l(), a.push(s);
    else if (Hs(t) || np(t) || js(t) || gh(t, n) || At(t) || t.next()) o = o || new C(t, "preparse"), o.end = t.pos;
    else throw new Error(`Unexpected end-of-stream at ${t.pos}`);
  }
  for (o && a.push(o), r.add(Xr(t, a)), t.start = t.pos; r && r !== n; ) r.contentEndToken = new C(t, "body-end"), r = r.parent;
  return n;
}
function gh(e2, t) {
  if (e2.eat(ws)) {
    let n = 1, r;
    for (; !e2.eof(); ) if (e2.eat(ch)) {
      if (n--, !n) break;
    } else if (e2.eat(ws)) n++;
    else {
      if (Hs(e2) || At(e2)) continue;
      if (r = si(e2)) {
        t.addComment(r);
        continue;
      } else e2.next();
    }
    return true;
  }
  return false;
}
var Ke, Yr, C, Ts, Es, As, et, nt, Hd, Qd, Jd, ms, Ns, ep, tp, $s, Rs, vs, un, si, up, cp, xs, hp, Fs, zs, Ds, Us, gp, bp, xp, Tp, Ap, ys, Rp, _p, Lp, jp, Fp, zp, Bs, Dp, qp, Vp, Hp, Ws, ei, ti, ni, ws, ch, fh, dh, ph, hh, ve, Ct = W(() => {
  Vr();
  Wr();
  Ke = class {
    constructor(t) {
      this.type = t, this.children = [], this.parent = null;
    }
    get firstChild() {
      return this.children[0];
    }
    get nextSibling() {
      let t = this.index();
      return t !== -1 ? this.parent.children[t + 1] : null;
    }
    get previousSibling() {
      let t = this.index();
      return t !== -1 ? this.parent.children[t - 1] : null;
    }
    index() {
      return this.parent ? this.parent.children.indexOf(this) : -1;
    }
    add(t) {
      return t && (t.remove(), this.children.push(t), t.parent = this), this;
    }
    remove() {
      if (this.parent) {
        let t = this.index();
        t !== -1 && (this.parent.children.splice(t, 1), this.parent = null);
      }
      return this;
    }
  }, Yr = class extends Ke {
    constructor() {
      super("stylesheet"), this.comments = [];
    }
    get start() {
      let t = this.firstChild;
      return t && t.start;
    }
    get end() {
      let t = this.children[this.children.length - 1];
      return t && t.end;
    }
    addComment(t) {
      this.comments.push(t);
    }
  };
  C = class {
    constructor(t, n, r, i) {
      this.stream = t, this.start = r ?? t.start, this.end = i ?? t.pos, this.type = n, this._props = null, this._value = null, this._items = null;
    }
    get size() {
      return this._items ? this._items.length : 0;
    }
    get items() {
      return this._items;
    }
    clone(t, n) {
      return new this.constructor(this.stream, this.type, t ?? this.start, n ?? this.end);
    }
    add(t) {
      if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) this.add(t[n]);
      else t && (this._items ? this._items.push(t) : this._items = [t]);
      return this;
    }
    remove(t) {
      if (this._items) {
        let n = this._items.indexOf(t);
        n !== -1 && this._items.splice(n, 1);
      }
      return this;
    }
    item(t) {
      let n = this.size;
      return this._items && this._items[(n + t) % n];
    }
    limit() {
      return this.stream.limit(this.start, this.end);
    }
    slice(t, n) {
      let r = this.clone(), i = this._items && this._items.slice(t, n);
      return i && i.length ? (r.start = i[0].start, r.end = i[i.length - 1].end, r.add(i)) : i && (r.start = r.end), r;
    }
    property(t, n) {
      return typeof n < "u" && (this._props || (this._props = {}), this._props[t] = n), this._props && this._props[t];
    }
    toString() {
      return `${this.valueOf()} [${this.start}, ${this.end}] (${this.type})`;
    }
    valueOf() {
      return this._value === null && (this._value = this.stream.substring(this.start, this.end)), this._value;
    }
  }, Ts = 44, Es = 58, As = 59, et = 123, nt = 125, Hd = (/* @__PURE__ */ new Map()).set(Ts, "comma").set(Es, "propertyDelimiter").set(As, "propertyTerminator").set(et, "ruleStart").set(nt, "ruleEnd");
  Qd = 40, Jd = 41, ms = function(e2, t) {
    if (e2.peek() === Qd) {
      let n = e2.pos;
      e2.next();
      let r = [], i, o = false;
      for (; !e2.eof() && !(Xd(e2.peek()) || e2.eat(Jd) || (i = t(e2), !i)); ) Cs(i) && (o = true), r.push(i);
      return e2.start = n, Yd(e2, r, o);
    }
  };
  Ns = 45, ep = 95;
  tp = 64;
  $s = 35, Rs = 64;
  vs = 42, un = 47, si = function(e2) {
    return ip(e2) || op(e2);
  };
  up = 91, cp = 93;
  xs = 96;
  hp = 46;
  Fs = 43, zs = 126, Ds = 62, Us = 38, gp = { [Fs]: "adjacentSibling", [zs]: "generalSibling", [Ds]: "child", [Us]: "nesting" }, bp = function(e2) {
    if (vp(e2.peek())) {
      let t = e2.pos, n = gp[e2.next()], r = new C(e2, "combinator", t);
      return r.property("type", n), r;
    }
  };
  xp = 35;
  Tp = 35;
  Ap = 33;
  ys = 46;
  Rp = 33, _p = 42, Lp = 43, jp = 45, Fp = 47, zp = 60, Bs = 61, Dp = 62;
  qp = 58, Vp = function(e2) {
    let t = e2.pos;
    if (e2.eatWhile(qp)) {
      let n = Se(e2);
      if (n) return new C(e2, "pseudo", t).add(n);
    }
    e2.pos = t;
  }, Hp = function(e2) {
    return qs(e2) && new C(e2, "unquoted");
  };
  Ws = 36;
  ei = class extends Ke {
    constructor(t, n, r, i) {
      super("rule"), this.stream = t, this.selectorToken = n, this.contentStartToken = r, this.contentEndToken = i || r, this._parsedSelector = null;
    }
    get selector() {
      return ze(this.selectorToken);
    }
    get parsedSelector() {
      return this._parsedSelector || (this._parsedSelector = ih(this.selectorToken.limit())), this._parsedSelector;
    }
    get start() {
      return this.selectorToken && this.selectorToken.start;
    }
    get end() {
      let t = this.contentEndToken || this.contentStartToken || this.nameToken;
      return t && t.end;
    }
  };
  ti = class extends Ke {
    constructor(t, n, r, i, o) {
      super("at-rule"), this.stream = t, this.nameToken = n, this.expressionToken = r, this.contentStartToken = i, this.contentEndToken = o || i, this._parsedExpression = null;
    }
    get name() {
      return ze(this.nameToken && this.nameToken.item(0));
    }
    get expression() {
      return ze(this.expressionToken);
    }
    get parsedExpression() {
      return this._parsedExpression || (this._parsedExpression = ah(this.expressionToken.limit())), this._parsedExpression;
    }
    get start() {
      return this.nameToken && this.nameToken.start;
    }
    get end() {
      let t = this.contentEndToken || this.contentStartToken || this.nameToken;
      return t && t.end;
    }
  };
  ni = class extends Ke {
    constructor(t, n, r, i, o) {
      super("property"), this.stream = t, this.nameToken = n, this.valueToken = r, this._parsedName = null, this._parsedValue = null, this.separatorToken = i, this.terminatorToken = o;
    }
    get name() {
      return ze(this.nameToken);
    }
    get parsedName() {
      return this._parsedName || (this._parsedName = oh(this.nameToken.limit())), this._parsedName;
    }
    get value() {
      return ze(this.valueToken);
    }
    get parsedValue() {
      return this._parsedValue || (this._parsedValue = sh(this.valueToken.limit())), this._parsedValue;
    }
    get separator() {
      return ze(this.separatorToken);
    }
    get terminator() {
      return ze(this.terminatorToken);
    }
    get start() {
      let t = this.nameToken || this.separatorToken || this.valueToken || this.terminatorToken;
      return t && t.start;
    }
    get end() {
      let t = this.terminatorToken || this.valueToken || this.separatorToken || this.nameToken;
      return t && t.end;
    }
  }, ws = 40, ch = 41, fh = 58, dh = 59, ph = 123, hh = 125;
  ve = mh;
});
var fn, Gs = W(() => {
  "use strict";
  fn = class e2 {
    constructor(t, n, r) {
      this.document = t, this.start = this.pos = n || 0, this._sof = r ? r[0] : 0, this._eof = r ? r[1] : t.getText().length;
    }
    sof() {
      return this.pos <= this._sof;
    }
    eof() {
      return this.pos >= this._eof;
    }
    limit(t, n) {
      return new e2(this.document, t, [t, n]);
    }
    peek() {
      return this.eof() ? NaN : this.document.getText().charCodeAt(this.pos);
    }
    next() {
      if (this.eof()) return NaN;
      let t = this.document.getText().charCodeAt(this.pos);
      return this.pos++, this.eof() && (this.pos = this._eof), t;
    }
    backUp(t) {
      return this.pos -= t, this.pos < 0 && (this.pos = 0), this.peek();
    }
    current() {
      return this.substring(this.start, this.pos);
    }
    substring(t, n) {
      return this.document.getText().substring(t, n);
    }
    error(t) {
      return new Error(`${t} at offset ${this.pos}`);
    }
    eat(t) {
      let n = this.peek(), r = typeof t == "function" ? t(n) : n === t;
      return r && this.next(), r;
    }
    eatWhile(t) {
      let n = this.pos;
      for (; !this.eof() && this.eat(t); ) ;
      return this.pos !== n;
    }
  };
});
function ui(e2, t) {
  if (e2.length <= 1) return e2;
  let n = e2.length / 2 | 0, r = e2.slice(0, n), i = e2.slice(n);
  ui(r, t), ui(i, t);
  let o = 0, s = 0, a = 0;
  for (; o < r.length && s < i.length; ) t(r[o], i[s]) <= 0 ? e2[a++] = r[o++] : e2[a++] = i[s++];
  for (; o < r.length; ) e2[a++] = r[o++];
  for (; s < i.length; ) e2[a++] = i[s++];
  return e2;
}
function Qs(e2, t, n = 0) {
  let r = t ? [n] : [];
  for (let i = 0; i < e2.length; i++) {
    let o = e2.charCodeAt(i);
    Js(o) && (o === 13 && i + 1 < e2.length && e2.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function Js(e2) {
  return e2 === 13 || e2 === 10;
}
function Xs(e2) {
  let t = e2.start, n = e2.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e2;
}
function bh(e2) {
  let t = Xs(e2.range);
  return t !== e2.range ? { newText: e2.newText, range: t } : e2;
}
var dn, pn, Ys = W(() => {
  "use strict";
  dn = class e2 {
    constructor(t, n, r, i) {
      this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(t) {
      if (t) {
        let n = this.offsetAt(t.start), r = this.offsetAt(t.end);
        return this._content.substring(n, r);
      }
      return this._content;
    }
    update(t, n) {
      for (let r of t) if (e2.isIncremental(r)) {
        let i = Xs(r.range), o = this.offsetAt(i.start), s = this.offsetAt(i.end);
        this._content = this._content.substring(0, o) + r.text + this._content.substring(s, this._content.length);
        let a = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0), u = this._lineOffsets, c = Qs(r.text, false, o);
        if (l - a === c.length) for (let h = 0, p = c.length; h < p; h++) u[h + a + 1] = c[h];
        else c.length < 1e4 ? u.splice(a + 1, l - a, ...c) : this._lineOffsets = u = u.slice(0, a + 1).concat(c, u.slice(l + 1));
        let f = r.text.length - (s - o);
        if (f !== 0) for (let h = a + 1 + c.length, p = u.length; h < p; h++) u[h] = u[h] + f;
      } else if (e2.isFull(r)) this._content = r.text, this._lineOffsets = void 0;
      else throw new Error("Unknown change event received");
      this._version = n;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = Qs(this._content, true)), this._lineOffsets;
    }
    positionAt(t) {
      t = Math.max(Math.min(t, this._content.length), 0);
      let n = this.getLineOffsets(), r = 0, i = n.length;
      if (i === 0) return { line: 0, character: t };
      for (; r < i; ) {
        let s = Math.floor((r + i) / 2);
        n[s] > t ? i = s : r = s + 1;
      }
      let o = r - 1;
      return t = this.ensureBeforeEOL(t, n[o]), { line: o, character: t - n[o] };
    }
    offsetAt(t) {
      let n = this.getLineOffsets();
      if (t.line >= n.length) return this._content.length;
      if (t.line < 0) return 0;
      let r = n[t.line];
      if (t.character <= 0) return r;
      let i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length, o = Math.min(r + t.character, i);
      return this.ensureBeforeEOL(o, r);
    }
    getLineRange(t) {
      let n = this.getLineOffsets();
      if (t >= n.length) {
        let s = n.length - 1;
        return { start: { line: s, character: 0 }, end: { line: s, character: this._content.length - n[s] } };
      } else if (t < 0) return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
      let r = n[t], i = t + 1 < n.length ? n[t + 1] : this._content.length, o = this.ensureBeforeEOL(i, r);
      return { start: { line: t, character: 0 }, end: { line: t, character: o - r } };
    }
    getEOLCharacters(t) {
      let n = this.getLineOffsets();
      if (t >= n.length) return "";
      if (t < 0) return "";
      let r = t + 1 < n.length ? n[t + 1] : this._content.length, i = this.ensureBeforeEOL(r, n[t]);
      return this._content.substring(i, r);
    }
    ensureBeforeEOL(t, n) {
      for (; t > n && Js(this._content.charCodeAt(t - 1)); ) t--;
      return t;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(t) {
      let n = t;
      return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number");
    }
    static isFull(t) {
      let n = t;
      return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0;
    }
  };
  (function(e2) {
    function t(i, o, s, a) {
      return new dn(i, o, s, a);
    }
    e2.create = t;
    function n(i, o, s) {
      if (i instanceof dn) return i.update(o, s), i;
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    e2.update = n;
    function r(i, o) {
      let s = i.getText(), a = ui(o.map(bh), (c, f) => {
        let h = c.range.start.line - f.range.start.line;
        return h === 0 ? c.range.start.character - f.range.start.character : h;
      }), l = 0, u = [];
      for (let c of a) {
        let f = i.offsetAt(c.range.start);
        if (f < l) throw new Error("Overlapping edit");
        f > l && u.push(s.substring(l, f)), c.newText.length && u.push(c.newText), l = i.offsetAt(c.range.end);
      }
      return u.push(s.substr(l)), u.join("");
    }
    e2.applyEdits = r;
  })(pn || (pn = {}));
});
function R(e2, t) {
  let n = e2.uri.toString(), r = hn.get(n), i = e2.version;
  if (t && r && i === r.key) return r.value;
  let s = (X(e2.languageId) ? ve : Tt)(e2.getText());
  return t && hn.set(n, { key: i, value: s }), s;
}
function Zs(e2) {
  let t = e2.uri.toString();
  hn.set(t, void 0);
}
function Ks(e2) {
  let t = e2.uri.toString();
  hn.delete(t);
}
var hn, ie = W(() => {
  "use strict";
  Jr();
  Ct();
  Z();
  hn = /* @__PURE__ */ new Map();
});
function mn(e2, t) {
  t === void 0 && (t = false);
  var n = e2.length, r = 0, i = "", o = 0, s = 16, a = 0, l = 0, u = 0, c = 0, f = 0;
  function h(m, v) {
    for (var g = 0, b = 0; g < m || !v; ) {
      var T = e2.charCodeAt(r);
      if (T >= 48 && T <= 57) b = b * 16 + T - 48;
      else if (T >= 65 && T <= 70) b = b * 16 + T - 65 + 10;
      else if (T >= 97 && T <= 102) b = b * 16 + T - 97 + 10;
      else break;
      r++, g++;
    }
    return g < m && (b = -1), b;
  }
  function p(m) {
    r = m, i = "", o = 0, s = 16, f = 0;
  }
  function k() {
    var m = r;
    if (e2.charCodeAt(r) === 48) r++;
    else for (r++; r < e2.length && it(e2.charCodeAt(r)); ) r++;
    if (r < e2.length && e2.charCodeAt(r) === 46) if (r++, r < e2.length && it(e2.charCodeAt(r))) for (r++; r < e2.length && it(e2.charCodeAt(r)); ) r++;
    else return f = 3, e2.substring(m, r);
    var v = r;
    if (r < e2.length && (e2.charCodeAt(r) === 69 || e2.charCodeAt(r) === 101)) if (r++, (r < e2.length && e2.charCodeAt(r) === 43 || e2.charCodeAt(r) === 45) && r++, r < e2.length && it(e2.charCodeAt(r))) {
      for (r++; r < e2.length && it(e2.charCodeAt(r)); ) r++;
      v = r;
    } else f = 3;
    return e2.substring(m, v);
  }
  function x() {
    for (var m = "", v = r; ; ) {
      if (r >= n) {
        m += e2.substring(v, r), f = 2;
        break;
      }
      var g = e2.charCodeAt(r);
      if (g === 34) {
        m += e2.substring(v, r), r++;
        break;
      }
      if (g === 92) {
        if (m += e2.substring(v, r), r++, r >= n) {
          f = 2;
          break;
        }
        var b = e2.charCodeAt(r++);
        switch (b) {
          case 34:
            m += '"';
            break;
          case 92:
            m += "\\";
            break;
          case 47:
            m += "/";
            break;
          case 98:
            m += "\b";
            break;
          case 102:
            m += "\f";
            break;
          case 110:
            m += `
`;
            break;
          case 114:
            m += "\r";
            break;
          case 116:
            m += "	";
            break;
          case 117:
            var T = h(4, true);
            T >= 0 ? m += String.fromCharCode(T) : f = 4;
            break;
          default:
            f = 5;
        }
        v = r;
        continue;
      }
      if (g >= 0 && g <= 31) if (Nt(g)) {
        m += e2.substring(v, r), f = 2;
        break;
      } else f = 6;
      r++;
    }
    return m;
  }
  function w() {
    if (i = "", f = 0, o = r, l = a, c = u, r >= n) return o = n, s = 17;
    var m = e2.charCodeAt(r);
    if (ci(m)) {
      do
        r++, i += String.fromCharCode(m), m = e2.charCodeAt(r);
      while (ci(m));
      return s = 15;
    }
    if (Nt(m)) return r++, i += String.fromCharCode(m), m === 13 && e2.charCodeAt(r) === 10 && (r++, i += `
`), a++, u = r, s = 14;
    switch (m) {
      case 123:
        return r++, s = 1;
      case 125:
        return r++, s = 2;
      case 91:
        return r++, s = 3;
      case 93:
        return r++, s = 4;
      case 58:
        return r++, s = 6;
      case 44:
        return r++, s = 5;
      case 34:
        return r++, i = x(), s = 10;
      case 47:
        var v = r - 1;
        if (e2.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Nt(e2.charCodeAt(r)); ) r++;
          return i = e2.substring(v, r), s = 12;
        }
        if (e2.charCodeAt(r + 1) === 42) {
          r += 2;
          for (var g = n - 1, b = false; r < g; ) {
            var T = e2.charCodeAt(r);
            if (T === 42 && e2.charCodeAt(r + 1) === 47) {
              r += 2, b = true;
              break;
            }
            r++, Nt(T) && (T === 13 && e2.charCodeAt(r) === 10 && r++, a++, u = r);
          }
          return b || (r++, f = 1), i = e2.substring(v, r), s = 13;
        }
        return i += String.fromCharCode(m), r++, s = 16;
      case 45:
        if (i += String.fromCharCode(m), r++, r === n || !it(e2.charCodeAt(r))) return s = 16;
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
        return i += k(), s = 11;
      default:
        for (; r < n && S(m); ) r++, m = e2.charCodeAt(r);
        if (o !== r) {
          switch (i = e2.substring(o, r), i) {
            case "true":
              return s = 8;
            case "false":
              return s = 9;
            case "null":
              return s = 7;
          }
          return s = 16;
        }
        return i += String.fromCharCode(m), r++, s = 16;
    }
  }
  function S(m) {
    if (ci(m) || Nt(m)) return false;
    switch (m) {
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
  function y() {
    var m;
    do
      m = w();
    while (m >= 12 && m <= 15);
    return m;
  }
  return { setPosition: p, getPosition: function() {
    return r;
  }, scan: t ? y : w, getToken: function() {
    return s;
  }, getTokenValue: function() {
    return i;
  }, getTokenOffset: function() {
    return o;
  }, getTokenLength: function() {
    return r - o;
  }, getTokenStartLine: function() {
    return l;
  }, getTokenStartCharacter: function() {
    return o - c;
  }, getTokenError: function() {
    return f;
  } };
}
function ci(e2) {
  return e2 === 32 || e2 === 9 || e2 === 11 || e2 === 12 || e2 === 160 || e2 === 5760 || e2 >= 8192 && e2 <= 8203 || e2 === 8239 || e2 === 8287 || e2 === 12288 || e2 === 65279;
}
function Nt(e2) {
  return e2 === 10 || e2 === 13 || e2 === 8232 || e2 === 8233;
}
function it(e2) {
  return e2 >= 48 && e2 <= 57;
}
var gn = W(() => {
  "use strict";
});
var fi = W(() => {
  "use strict";
  gn();
});
function ea(e2, t, n) {
  t === void 0 && (t = []), n === void 0 && (n = bn.DEFAULT);
  var r = null, i = [], o = [];
  function s(l) {
    Array.isArray(i) ? i.push(l) : r !== null && (i[r] = l);
  }
  var a = { onObjectBegin: function() {
    var l = {};
    s(l), o.push(i), i = l, r = null;
  }, onObjectProperty: function(l) {
    r = l;
  }, onObjectEnd: function() {
    i = o.pop();
  }, onArrayBegin: function() {
    var l = [];
    s(l), o.push(i), i = l, r = null;
  }, onArrayEnd: function() {
    i = o.pop();
  }, onLiteralValue: s, onError: function(l, u, c) {
    t.push({ error: l, offset: u, length: c });
  } };
  return ta(e2, a, n), i[0];
}
function ta(e2, t, n) {
  n === void 0 && (n = bn.DEFAULT);
  var r = mn(e2, false);
  function i(E) {
    return E ? function() {
      return E(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
    } : function() {
      return true;
    };
  }
  function o(E) {
    return E ? function(I) {
      return E(I, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
    } : function() {
      return true;
    };
  }
  var s = i(t.onObjectBegin), a = o(t.onObjectProperty), l = i(t.onObjectEnd), u = i(t.onArrayBegin), c = i(t.onArrayEnd), f = o(t.onLiteralValue), h = o(t.onSeparator), p = i(t.onComment), k = o(t.onError), x = n && n.disallowComments, w = n && n.allowTrailingComma;
  function S() {
    for (; ; ) {
      var E = r.scan();
      switch (r.getTokenError()) {
        case 4:
          y(14);
          break;
        case 5:
          y(15);
          break;
        case 3:
          y(13);
          break;
        case 1:
          x || y(11);
          break;
        case 2:
          y(12);
          break;
        case 6:
          y(16);
          break;
      }
      switch (E) {
        case 12:
        case 13:
          x ? y(10) : p();
          break;
        case 16:
          y(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return E;
      }
    }
  }
  function y(E, I, ee) {
    if (I === void 0 && (I = []), ee === void 0 && (ee = []), k(E), I.length + ee.length > 0) for (var F = r.getToken(); F !== 17; ) {
      if (I.indexOf(F) !== -1) {
        S();
        break;
      } else if (ee.indexOf(F) !== -1) break;
      F = S();
    }
  }
  function m(E) {
    var I = r.getTokenValue();
    return E ? f(I) : a(I), S(), true;
  }
  function v() {
    switch (r.getToken()) {
      case 11:
        var E = r.getTokenValue(), I = Number(E);
        isNaN(I) && (y(2), I = 0), f(I);
        break;
      case 7:
        f(null);
        break;
      case 8:
        f(true);
        break;
      case 9:
        f(false);
        break;
      default:
        return false;
    }
    return S(), true;
  }
  function g() {
    return r.getToken() !== 10 ? (y(3, [], [2, 5]), false) : (m(false), r.getToken() === 6 ? (h(":"), S(), P() || y(4, [], [2, 5])) : y(5, [], [2, 5]), true);
  }
  function b() {
    s(), S();
    for (var E = false; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (E || y(4, [], []), h(","), S(), r.getToken() === 2 && w) break;
      } else E && y(6, [], []);
      g() || y(4, [], [2, 5]), E = true;
    }
    return l(), r.getToken() !== 2 ? y(7, [2], []) : S(), true;
  }
  function T() {
    u(), S();
    for (var E = false; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (E || y(4, [], []), h(","), S(), r.getToken() === 4 && w) break;
      } else E && y(6, [], []);
      P() || y(4, [], [4, 5]), E = true;
    }
    return c(), r.getToken() !== 4 ? y(8, [4], []) : S(), true;
  }
  function P() {
    switch (r.getToken()) {
      case 3:
        return T();
      case 1:
        return b();
      case 10:
        return m(true);
      default:
        return v();
    }
  }
  return S(), r.getToken() === 17 ? n.allowEmptyContent ? true : (y(4, [], []), false) : P() ? (r.getToken() !== 17 && y(9, [], []), true) : (y(4, [], []), false);
}
var bn, di = W(() => {
  "use strict";
  gn();
  (function(e2) {
    e2.DEFAULT = { allowTrailingComma: false };
  })(bn || (bn = {}));
});
var na = W(() => {
  "use strict";
  fi();
  di();
});
function ia(e2) {
  switch (e2) {
    case 1:
      return "InvalidSymbol";
    case 2:
      return "InvalidNumberFormat";
    case 3:
      return "PropertyNameExpected";
    case 4:
      return "ValueExpected";
    case 5:
      return "ColonExpected";
    case 6:
      return "CommaExpected";
    case 7:
      return "CloseBraceExpected";
    case 8:
      return "CloseBracketExpected";
    case 9:
      return "EndOfFileExpected";
    case 10:
      return "InvalidCommentToken";
    case 11:
      return "UnexpectedEndOfComment";
    case 12:
      return "UnexpectedEndOfString";
    case 13:
      return "UnexpectedEndOfNumber";
    case 14:
      return "InvalidUnicode";
    case 15:
      return "InvalidEscapeCharacter";
    case 16:
      return "InvalidCharacter";
  }
  return "<unknown ParseErrorCode>";
}
var ra, oa = W(() => {
  "use strict";
  fi();
  na();
  gn();
  di();
  ra = ea;
});
var sa, pi, aa, vn, pe, V, xn, la, hi, ua, ca, fa, da, mi, pa, ha, ma, yn, ot, xe, wn, Ue, ga, gi, bi, vi, xi, yi, ba, va, xa, wi, ya, wa, ki, Be, kn, Pt, ka, Sa, Ta, Ea, Aa, It, Ot, Sn, Ca, Na, Pa, Ia, Oa, $a, Ra, _a, La, ja, Fa, Tn, za, Si, Da, Ua, Ba, Ma, qa, Va, Ha, Wa, Ga, Qa, Ja, Xa, Ti, Ei, Ya, Ai, Za, Ka, el, tl, nl, rl, il, Ci, d, ol = W(() => {
  "use strict";
  (function(e2) {
    function t(n) {
      return typeof n == "string";
    }
    e2.is = t;
  })(sa || (sa = {}));
  (function(e2) {
    function t(n) {
      return typeof n == "string";
    }
    e2.is = t;
  })(pi || (pi = {}));
  (function(e2) {
    e2.MIN_VALUE = -2147483648, e2.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e2.MIN_VALUE <= n && n <= e2.MAX_VALUE;
    }
    e2.is = t;
  })(aa || (aa = {}));
  (function(e2) {
    e2.MIN_VALUE = 0, e2.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e2.MIN_VALUE <= n && n <= e2.MAX_VALUE;
    }
    e2.is = t;
  })(vn || (vn = {}));
  (function(e2) {
    function t(r, i) {
      return r === Number.MAX_VALUE && (r = vn.MAX_VALUE), i === Number.MAX_VALUE && (i = vn.MAX_VALUE), { line: r, character: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && d.uinteger(i.line) && d.uinteger(i.character);
    }
    e2.is = n;
  })(pe || (pe = {}));
  (function(e2) {
    function t(r, i, o, s) {
      if (d.uinteger(r) && d.uinteger(i) && d.uinteger(o) && d.uinteger(s)) return { start: pe.create(r, i), end: pe.create(o, s) };
      if (pe.is(r) && pe.is(i)) return { start: r, end: i };
      throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${o}, ${s}]`);
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && pe.is(i.start) && pe.is(i.end);
    }
    e2.is = n;
  })(V || (V = {}));
  (function(e2) {
    function t(r, i) {
      return { uri: r, range: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && V.is(i.range) && (d.string(i.uri) || d.undefined(i.uri));
    }
    e2.is = n;
  })(xn || (xn = {}));
  (function(e2) {
    function t(r, i, o, s) {
      return { targetUri: r, targetRange: i, targetSelectionRange: o, originSelectionRange: s };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && V.is(i.targetRange) && d.string(i.targetUri) && V.is(i.targetSelectionRange) && (V.is(i.originSelectionRange) || d.undefined(i.originSelectionRange));
    }
    e2.is = n;
  })(la || (la = {}));
  (function(e2) {
    function t(r, i, o, s) {
      return { red: r, green: i, blue: o, alpha: s };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && d.numberRange(i.red, 0, 1) && d.numberRange(i.green, 0, 1) && d.numberRange(i.blue, 0, 1) && d.numberRange(i.alpha, 0, 1);
    }
    e2.is = n;
  })(hi || (hi = {}));
  (function(e2) {
    function t(r, i) {
      return { range: r, color: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && V.is(i.range) && hi.is(i.color);
    }
    e2.is = n;
  })(ua || (ua = {}));
  (function(e2) {
    function t(r, i, o) {
      return { label: r, textEdit: i, additionalTextEdits: o };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && d.string(i.label) && (d.undefined(i.textEdit) || xe.is(i)) && (d.undefined(i.additionalTextEdits) || d.typedArray(i.additionalTextEdits, xe.is));
    }
    e2.is = n;
  })(ca || (ca = {}));
  (function(e2) {
    e2.Comment = "comment", e2.Imports = "imports", e2.Region = "region";
  })(fa || (fa = {}));
  (function(e2) {
    function t(r, i, o, s, a, l) {
      let u = { startLine: r, endLine: i };
      return d.defined(o) && (u.startCharacter = o), d.defined(s) && (u.endCharacter = s), d.defined(a) && (u.kind = a), d.defined(l) && (u.collapsedText = l), u;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && d.uinteger(i.startLine) && d.uinteger(i.startLine) && (d.undefined(i.startCharacter) || d.uinteger(i.startCharacter)) && (d.undefined(i.endCharacter) || d.uinteger(i.endCharacter)) && (d.undefined(i.kind) || d.string(i.kind));
    }
    e2.is = n;
  })(da || (da = {}));
  (function(e2) {
    function t(r, i) {
      return { location: r, message: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && xn.is(i.location) && d.string(i.message);
    }
    e2.is = n;
  })(mi || (mi = {}));
  (function(e2) {
    e2.Error = 1, e2.Warning = 2, e2.Information = 3, e2.Hint = 4;
  })(pa || (pa = {}));
  (function(e2) {
    e2.Unnecessary = 1, e2.Deprecated = 2;
  })(ha || (ha = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.objectLiteral(r) && d.string(r.href);
    }
    e2.is = t;
  })(ma || (ma = {}));
  (function(e2) {
    function t(o, s, a, l, u, c) {
      let f = { range: o, message: s };
      return d.defined(a) && (f.severity = a), d.defined(l) && (f.code = l), d.defined(u) && (f.source = u), d.defined(c) && (f.relatedInformation = c), f;
    }
    e2.create = t;
    function n(o) {
      var s;
      let a = o;
      return d.defined(a) && V.is(a.range) && (d.string(a.message) || Be.is(a.message)) && (d.number(a.severity) || d.undefined(a.severity)) && (d.integer(a.code) || d.string(a.code) || d.undefined(a.code)) && (d.undefined(a.codeDescription) || d.string((s = a.codeDescription) === null || s === void 0 ? void 0 : s.href)) && (d.string(a.source) || d.undefined(a.source)) && (d.undefined(a.relatedInformation) || d.typedArray(a.relatedInformation, mi.is));
    }
    e2.is = n;
    function r(o) {
      return d.string(o.message);
    }
    e2.is3_17 = r;
    function i(o) {
      if (d.string(o.message)) return o.message;
      if (Be.is(o.message)) return o.message.value;
      throw new Error(`Unknown message type ${typeof o.message}`);
    }
    e2.getMessageString = i;
  })(yn || (yn = {}));
  (function(e2) {
    function t(r, i, ...o) {
      let s = { title: r, command: i };
      return d.defined(o) && o.length > 0 && (s.arguments = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.string(i.title) && (i.tooltip === void 0 || d.string(i.tooltip)) && d.string(i.command);
    }
    e2.is = n;
  })(ot || (ot = {}));
  (function(e2) {
    function t(o, s) {
      return { range: o, newText: s };
    }
    e2.replace = t;
    function n(o, s) {
      return { range: { start: o, end: o }, newText: s };
    }
    e2.insert = n;
    function r(o) {
      return { range: o, newText: "" };
    }
    e2.del = r;
    function i(o) {
      let s = o;
      return d.objectLiteral(s) && d.string(s.newText) && V.is(s.range);
    }
    e2.is = i;
  })(xe || (xe = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { label: r };
      return i !== void 0 && (s.needsConfirmation = i), o !== void 0 && (s.description = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && d.string(i.label) && (d.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (d.string(i.description) || i.description === void 0);
    }
    e2.is = n;
  })(wn || (wn = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.string(r);
    }
    e2.is = t;
  })(Ue || (Ue = {}));
  (function(e2) {
    function t(o, s, a) {
      return { range: o, newText: s, annotationId: a };
    }
    e2.replace = t;
    function n(o, s, a) {
      return { range: { start: o, end: o }, newText: s, annotationId: a };
    }
    e2.insert = n;
    function r(o, s) {
      return { range: o, newText: "", annotationId: s };
    }
    e2.del = r;
    function i(o) {
      let s = o;
      return xe.is(s) && (wn.is(s.annotationId) || Ue.is(s.annotationId));
    }
    e2.is = i;
  })(ga || (ga = {}));
  (function(e2) {
    function t(r, i) {
      return { textDocument: r, edits: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && wi.is(i.textDocument) && Array.isArray(i.edits);
    }
    e2.is = n;
  })(gi || (gi = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), o !== void 0 && (s.annotationId = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "create" && d.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || d.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || d.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ue.is(i.annotationId));
    }
    e2.is = n;
  })(bi || (bi = {}));
  (function(e2) {
    function t(r, i, o, s) {
      let a = { kind: "rename", oldUri: r, newUri: i };
      return o !== void 0 && (o.overwrite !== void 0 || o.ignoreIfExists !== void 0) && (a.options = o), s !== void 0 && (a.annotationId = s), a;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "rename" && d.string(i.oldUri) && d.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || d.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || d.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ue.is(i.annotationId));
    }
    e2.is = n;
  })(vi || (vi = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), o !== void 0 && (s.annotationId = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "delete" && d.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || d.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || d.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Ue.is(i.annotationId));
    }
    e2.is = n;
  })(xi || (xi = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => d.string(i.kind) ? bi.is(i) || vi.is(i) || xi.is(i) : gi.is(i)));
    }
    e2.is = t;
  })(yi || (yi = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.objectLiteral(r) && V.is(r.range) && Ai.isSnippet(r.snippet) && (r.annotationId === void 0 || wn.is(r.annotationId) || Ue.is(r.annotationId));
    }
    e2.is = t;
  })(ba || (ba = {}));
  (function(e2) {
    function t(r) {
      return { uri: r };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.string(i.uri);
    }
    e2.is = n;
  })(va || (va = {}));
  (function(e2) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.string(i.uri) && d.integer(i.version);
    }
    e2.is = n;
  })(xa || (xa = {}));
  (function(e2) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.string(i.uri) && (i.version === null || d.integer(i.version));
    }
    e2.is = n;
  })(wi || (wi = {}));
  (function(e2) {
    e2.ABAP = "abap", e2.WindowsBat = "bat", e2.BibTeX = "bibtex", e2.Clojure = "clojure", e2.Coffeescript = "coffeescript", e2.C = "c", e2.CPP = "cpp", e2.CSharp = "csharp", e2.CSS = "css", e2.D = "d", e2.Delphi = "pascal", e2.Diff = "diff", e2.Dart = "dart", e2.Dockerfile = "dockerfile", e2.Elixir = "elixir", e2.Erlang = "erlang", e2.FSharp = "fsharp", e2.GitCommit = "git-commit", e2.GitRebase = "git-rebase", e2.Go = "go", e2.Groovy = "groovy", e2.Handlebars = "handlebars", e2.Haskell = "haskell", e2.HTML = "html", e2.Ini = "ini", e2.Java = "java", e2.JavaScript = "javascript", e2.JavaScriptReact = "javascriptreact", e2.JSON = "json", e2.LaTeX = "latex", e2.Less = "less", e2.Lua = "lua", e2.Makefile = "makefile", e2.Markdown = "markdown", e2.ObjectiveC = "objective-c", e2.ObjectiveCPP = "objective-cpp", e2.Pascal = "pascal", e2.Perl = "perl", e2.Perl6 = "perl6", e2.PHP = "php", e2.Plaintext = "plaintext", e2.Powershell = "powershell", e2.Pug = "jade", e2.Python = "python", e2.R = "r", e2.Razor = "razor", e2.Ruby = "ruby", e2.Rust = "rust", e2.SCSS = "scss", e2.SASS = "sass", e2.Scala = "scala", e2.ShaderLab = "shaderlab", e2.ShellScript = "shellscript", e2.SQL = "sql", e2.Swift = "swift", e2.TypeScript = "typescript", e2.TypeScriptReact = "typescriptreact", e2.TeX = "tex", e2.VisualBasic = "vb", e2.XML = "xml", e2.XSL = "xsl", e2.YAML = "yaml";
  })(ya || (ya = {}));
  (function(e2) {
    function t(r, i, o, s) {
      return { uri: r, languageId: i, version: o, text: s };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.string(i.uri) && d.string(i.languageId) && d.integer(i.version) && d.string(i.text);
    }
    e2.is = n;
  })(wa || (wa = {}));
  (function(e2) {
    e2.PlainText = "plaintext", e2.Markdown = "markdown";
    function t(n) {
      let r = n;
      return r === e2.PlainText || r === e2.Markdown;
    }
    e2.is = t;
  })(ki || (ki = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.objectLiteral(n) && ki.is(r.kind) && d.string(r.value);
    }
    e2.is = t;
  })(Be || (Be = {}));
  (function(e2) {
    e2.Text = 1, e2.Method = 2, e2.Function = 3, e2.Constructor = 4, e2.Field = 5, e2.Variable = 6, e2.Class = 7, e2.Interface = 8, e2.Module = 9, e2.Property = 10, e2.Unit = 11, e2.Value = 12, e2.Enum = 13, e2.Keyword = 14, e2.Snippet = 15, e2.Color = 16, e2.File = 17, e2.Reference = 18, e2.Folder = 19, e2.EnumMember = 20, e2.Constant = 21, e2.Struct = 22, e2.Event = 23, e2.Operator = 24, e2.TypeParameter = 25;
  })(kn || (kn = {}));
  (function(e2) {
    e2.PlainText = 1, e2.Snippet = 2;
  })(Pt || (Pt = {}));
  (function(e2) {
    e2.Deprecated = 1;
  })(ka || (ka = {}));
  (function(e2) {
    function t(r, i, o) {
      return { newText: r, insert: i, replace: o };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && d.string(i.newText) && V.is(i.insert) && V.is(i.replace);
    }
    e2.is = n;
  })(Sa || (Sa = {}));
  (function(e2) {
    e2.asIs = 1, e2.adjustIndentation = 2;
  })(Ta || (Ta = {}));
  (function(e2) {
    e2.Replace = 1, e2.Merge = 2;
  })(Ea || (Ea = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return r && (d.string(r.detail) || r.detail === void 0) && (d.string(r.description) || r.description === void 0);
    }
    e2.is = t;
  })(Aa || (Aa = {}));
  (function(e2) {
    function t(n) {
      return { label: n };
    }
    e2.create = t;
  })(It || (It = {}));
  (function(e2) {
    function t(n, r) {
      return { items: n || [], isIncomplete: !!r };
    }
    e2.create = t;
  })(Ot || (Ot = {}));
  (function(e2) {
    function t(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    e2.fromPlainText = t;
    function n(r) {
      let i = r;
      return d.string(i) || d.objectLiteral(i) && d.string(i.language) && d.string(i.value);
    }
    e2.is = n;
  })(Sn || (Sn = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return !!r && d.objectLiteral(r) && (Be.is(r.contents) || Sn.is(r.contents) || d.typedArray(r.contents, Sn.is)) && (n.range === void 0 || V.is(n.range));
    }
    e2.is = t;
  })(Ca || (Ca = {}));
  (function(e2) {
    function t(n, r) {
      return r ? { label: n, documentation: r } : { label: n };
    }
    e2.create = t;
  })(Na || (Na = {}));
  (function(e2) {
    function t(n, r, ...i) {
      let o = { label: n };
      return d.defined(r) && (o.documentation = r), d.defined(i) ? o.parameters = i : o.parameters = [], o;
    }
    e2.create = t;
  })(Pa || (Pa = {}));
  (function(e2) {
    e2.Text = 1, e2.Read = 2, e2.Write = 3;
  })(Ia || (Ia = {}));
  (function(e2) {
    function t(n, r) {
      let i = { range: n };
      return d.number(r) && (i.kind = r), i;
    }
    e2.create = t;
  })(Oa || (Oa = {}));
  (function(e2) {
    e2.File = 1, e2.Module = 2, e2.Namespace = 3, e2.Package = 4, e2.Class = 5, e2.Method = 6, e2.Property = 7, e2.Field = 8, e2.Constructor = 9, e2.Enum = 10, e2.Interface = 11, e2.Function = 12, e2.Variable = 13, e2.Constant = 14, e2.String = 15, e2.Number = 16, e2.Boolean = 17, e2.Array = 18, e2.Object = 19, e2.Key = 20, e2.Null = 21, e2.EnumMember = 22, e2.Struct = 23, e2.Event = 24, e2.Operator = 25, e2.TypeParameter = 26;
  })($a || ($a = {}));
  (function(e2) {
    e2.Deprecated = 1;
  })(Ra || (Ra = {}));
  (function(e2) {
    function t(n, r, i, o, s) {
      let a = { name: n, kind: r, location: { uri: o, range: i } };
      return s && (a.containerName = s), a;
    }
    e2.create = t;
  })(_a || (_a = {}));
  (function(e2) {
    function t(n, r, i, o) {
      return o !== void 0 ? { name: n, kind: r, location: { uri: i, range: o } } : { name: n, kind: r, location: { uri: i } };
    }
    e2.create = t;
  })(La || (La = {}));
  (function(e2) {
    function t(r, i, o, s, a, l) {
      let u = { name: r, detail: i, kind: o, range: s, selectionRange: a };
      return l !== void 0 && (u.children = l), u;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && d.string(i.name) && d.number(i.kind) && V.is(i.range) && V.is(i.selectionRange) && (i.detail === void 0 || d.string(i.detail)) && (i.deprecated === void 0 || d.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    e2.is = n;
  })(ja || (ja = {}));
  (function(e2) {
    e2.Empty = "", e2.QuickFix = "quickfix", e2.Refactor = "refactor", e2.RefactorExtract = "refactor.extract", e2.RefactorInline = "refactor.inline", e2.RefactorMove = "refactor.move", e2.RefactorRewrite = "refactor.rewrite", e2.Source = "source", e2.SourceOrganizeImports = "source.organizeImports", e2.SourceFixAll = "source.fixAll", e2.Notebook = "notebook";
  })(Fa || (Fa = {}));
  (function(e2) {
    e2.Invoked = 1, e2.Automatic = 2;
  })(Tn || (Tn = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { diagnostics: r };
      return i != null && (s.only = i), o != null && (s.triggerKind = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.typedArray(i.diagnostics, yn.is) && (i.only === void 0 || d.typedArray(i.only, d.string)) && (i.triggerKind === void 0 || i.triggerKind === Tn.Invoked || i.triggerKind === Tn.Automatic);
    }
    e2.is = n;
  })(za || (za = {}));
  (function(e2) {
    e2.LLMGenerated = 1;
    function t(n) {
      return d.defined(n) && n === e2.LLMGenerated;
    }
    e2.is = t;
  })(Si || (Si = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { title: r }, a = true;
      return typeof i == "string" ? (a = false, s.kind = i) : ot.is(i) ? s.command = i : s.edit = i, a && o !== void 0 && (s.kind = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i && d.string(i.title) && (i.diagnostics === void 0 || d.typedArray(i.diagnostics, yn.is)) && (i.kind === void 0 || d.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || ot.is(i.command)) && (i.isPreferred === void 0 || d.boolean(i.isPreferred)) && (i.edit === void 0 || yi.is(i.edit)) && (i.tags === void 0 || d.typedArray(i.tags, Si.is));
    }
    e2.is = n;
  })(Da || (Da = {}));
  (function(e2) {
    function t(r, i) {
      let o = { range: r };
      return d.defined(i) && (o.data = i), o;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && V.is(i.range) && (d.undefined(i.command) || ot.is(i.command));
    }
    e2.is = n;
  })(Ua || (Ua = {}));
  (function(e2) {
    function t(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && d.uinteger(i.tabSize) && d.boolean(i.insertSpaces);
    }
    e2.is = n;
  })(Ba || (Ba = {}));
  (function(e2) {
    function t(r, i, o) {
      return { range: r, target: i, data: o };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && V.is(i.range) && (d.undefined(i.target) || d.string(i.target));
    }
    e2.is = n;
  })(Ma || (Ma = {}));
  (function(e2) {
    function t(r, i) {
      return { range: r, parent: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && V.is(i.range) && (i.parent === void 0 || e2.is(i.parent));
    }
    e2.is = n;
  })(qa || (qa = {}));
  (function(e2) {
    e2.namespace = "namespace", e2.type = "type", e2.class = "class", e2.enum = "enum", e2.interface = "interface", e2.struct = "struct", e2.typeParameter = "typeParameter", e2.parameter = "parameter", e2.variable = "variable", e2.property = "property", e2.enumMember = "enumMember", e2.event = "event", e2.function = "function", e2.method = "method", e2.macro = "macro", e2.keyword = "keyword", e2.modifier = "modifier", e2.comment = "comment", e2.string = "string", e2.number = "number", e2.regexp = "regexp", e2.operator = "operator", e2.decorator = "decorator", e2.label = "label";
  })(Va || (Va = {}));
  (function(e2) {
    e2.declaration = "declaration", e2.definition = "definition", e2.readonly = "readonly", e2.static = "static", e2.deprecated = "deprecated", e2.abstract = "abstract", e2.async = "async", e2.modification = "modification", e2.documentation = "documentation", e2.defaultLibrary = "defaultLibrary";
  })(Ha || (Ha = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    e2.is = t;
  })(Wa || (Wa = {}));
  (function(e2) {
    function t(r, i) {
      return { range: r, text: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i != null && V.is(i.range) && d.string(i.text);
    }
    e2.is = n;
  })(Ga || (Ga = {}));
  (function(e2) {
    function t(r, i, o) {
      return { range: r, variableName: i, caseSensitiveLookup: o };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i != null && V.is(i.range) && d.boolean(i.caseSensitiveLookup) && (d.string(i.variableName) || i.variableName === void 0);
    }
    e2.is = n;
  })(Qa || (Qa = {}));
  (function(e2) {
    function t(r, i) {
      return { range: r, expression: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return i != null && V.is(i.range) && (d.string(i.expression) || i.expression === void 0);
    }
    e2.is = n;
  })(Ja || (Ja = {}));
  (function(e2) {
    function t(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.defined(i) && V.is(r.stoppedLocation);
    }
    e2.is = n;
  })(Xa || (Xa = {}));
  (function(e2) {
    e2.Type = 1, e2.Parameter = 2;
    function t(n) {
      return n === 1 || n === 2;
    }
    e2.is = t;
  })(Ti || (Ti = {}));
  (function(e2) {
    function t(r) {
      return { value: r };
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && (i.tooltip === void 0 || d.string(i.tooltip) || Be.is(i.tooltip)) && (i.location === void 0 || xn.is(i.location)) && (i.command === void 0 || ot.is(i.command));
    }
    e2.is = n;
  })(Ei || (Ei = {}));
  (function(e2) {
    function t(r, i, o) {
      let s = { position: r, label: i };
      return o !== void 0 && (s.kind = o), s;
    }
    e2.create = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && pe.is(i.position) && (d.string(i.label) || d.typedArray(i.label, Ei.is)) && (i.kind === void 0 || Ti.is(i.kind)) && i.textEdits === void 0 || d.typedArray(i.textEdits, xe.is) && (i.tooltip === void 0 || d.string(i.tooltip) || Be.is(i.tooltip)) && (i.paddingLeft === void 0 || d.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || d.boolean(i.paddingRight));
    }
    e2.is = n;
  })(Ya || (Ya = {}));
  (function(e2) {
    function t(r) {
      return { kind: "snippet", value: r };
    }
    e2.createSnippet = t;
    function n(r) {
      let i = r;
      return d.objectLiteral(i) && i.kind === "snippet" && d.string(i.value);
    }
    e2.isSnippet = n;
  })(Ai || (Ai = {}));
  (function(e2) {
    function t(n, r, i, o) {
      return { insertText: n, filterText: r, range: i, command: o };
    }
    e2.create = t;
  })(Za || (Za = {}));
  (function(e2) {
    function t(n) {
      return { items: n };
    }
    e2.create = t;
  })(Ka || (Ka = {}));
  (function(e2) {
    e2.Invoked = 1, e2.Automatic = 2;
  })(el || (el = {}));
  (function(e2) {
    function t(n, r) {
      return { range: n, text: r };
    }
    e2.create = t;
  })(tl || (tl = {}));
  (function(e2) {
    function t(n, r) {
      return { triggerKind: n, selectedCompletionInfo: r };
    }
    e2.create = t;
  })(nl || (nl = {}));
  (function(e2) {
    function t(n) {
      let r = n;
      return d.objectLiteral(r) && pi.is(r.uri) && d.string(r.name);
    }
    e2.is = t;
  })(rl || (rl = {}));
  (function(e2) {
    function t(o, s, a, l) {
      return new Ci(o, s, a, l);
    }
    e2.create = t;
    function n(o) {
      let s = o;
      return !!(d.defined(s) && d.string(s.uri) && (d.undefined(s.languageId) || d.string(s.languageId)) && d.uinteger(s.lineCount) && d.func(s.getText) && d.func(s.positionAt) && d.func(s.offsetAt));
    }
    e2.is = n;
    function r(o, s) {
      let a = o.getText(), l = i(s, (c, f) => {
        let h = c.range.start.line - f.range.start.line;
        return h === 0 ? c.range.start.character - f.range.start.character : h;
      }), u = a.length;
      for (let c = l.length - 1; c >= 0; c--) {
        let f = l[c], h = o.offsetAt(f.range.start), p = o.offsetAt(f.range.end);
        if (p <= u) a = a.substring(0, h) + f.newText + a.substring(p, a.length);
        else throw new Error("Overlapping edit");
        u = h;
      }
      return a;
    }
    e2.applyEdits = r;
    function i(o, s) {
      if (o.length <= 1) return o;
      let a = o.length / 2 | 0, l = o.slice(0, a), u = o.slice(a);
      i(l, s), i(u, s);
      let c = 0, f = 0, h = 0;
      for (; c < l.length && f < u.length; ) s(l[c], u[f]) <= 0 ? o[h++] = l[c++] : o[h++] = u[f++];
      for (; c < l.length; ) o[h++] = l[c++];
      for (; f < u.length; ) o[h++] = u[f++];
      return o;
    }
  })(il || (il = {}));
  Ci = class {
    constructor(t, n, r, i) {
      this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(t) {
      if (t) {
        let n = this.offsetAt(t.start), r = this.offsetAt(t.end);
        return this._content.substring(n, r);
      }
      return this._content;
    }
    update(t, n) {
      this._content = t.text, this._version = n, this._lineOffsets = void 0;
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        let t = [], n = this._content, r = true;
        for (let i = 0; i < n.length; i++) {
          r && (t.push(i), r = false);
          let o = n.charAt(i);
          r = o === "\r" || o === `
`, o === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
        }
        r && n.length > 0 && t.push(n.length), this._lineOffsets = t;
      }
      return this._lineOffsets;
    }
    positionAt(t) {
      t = Math.max(Math.min(t, this._content.length), 0);
      let n = this.getLineOffsets(), r = 0, i = n.length;
      if (i === 0) return pe.create(0, t);
      for (; r < i; ) {
        let s = Math.floor((r + i) / 2);
        n[s] > t ? i = s : r = s + 1;
      }
      let o = r - 1;
      return pe.create(o, t - n[o]);
    }
    offsetAt(t) {
      let n = this.getLineOffsets();
      if (t.line >= n.length) return this._content.length;
      if (t.line < 0) return 0;
      let r = n[t.line], i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
      return Math.max(Math.min(r + t.character, i), r);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  };
  (function(e2) {
    let t = Object.prototype.toString;
    function n(p) {
      return typeof p < "u";
    }
    e2.defined = n;
    function r(p) {
      return typeof p > "u";
    }
    e2.undefined = r;
    function i(p) {
      return p === true || p === false;
    }
    e2.boolean = i;
    function o(p) {
      return t.call(p) === "[object String]";
    }
    e2.string = o;
    function s(p) {
      return t.call(p) === "[object Number]";
    }
    e2.number = s;
    function a(p, k, x) {
      return t.call(p) === "[object Number]" && k <= p && p <= x;
    }
    e2.numberRange = a;
    function l(p) {
      return t.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647;
    }
    e2.integer = l;
    function u(p) {
      return t.call(p) === "[object Number]" && 0 <= p && p <= 2147483647;
    }
    e2.uinteger = u;
    function c(p) {
      return t.call(p) === "[object Function]";
    }
    e2.func = c;
    function f(p) {
      return p !== null && typeof p == "object";
    }
    e2.objectLiteral = f;
    function h(p, k) {
      return Array.isArray(p) && p.every(k);
    }
    e2.typedArray = h;
  })(d || (d = {}));
});
function st(e2) {
  var t = sl[e2];
  if (t !== void 0) return t.exports;
  var n = sl[e2] = { exports: {} };
  return Ah[e2](n, n.exports, st), n.exports;
}
function al(e2, t) {
  if (!e2.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e2.authority}", path: "${e2.path}", query: "${e2.query}", fragment: "${e2.fragment}"}`);
  if (e2.scheme && !Ch.test(e2.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e2.path) {
    if (e2.authority) {
      if (!Nh.test(e2.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Ph.test(e2.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function ll(e2, t, n) {
  let r, i = -1;
  for (let o = 0; o < e2.length; o++) {
    let s = e2.charCodeAt(o);
    if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || s === 45 || s === 46 || s === 95 || s === 126 || t && s === 47 || n && s === 91 || n && s === 93 || n && s === 58) i !== -1 && (r += encodeURIComponent(e2.substring(i, o)), i = -1), r !== void 0 && (r += e2.charAt(o));
    else {
      r === void 0 && (r = e2.substr(0, o));
      let a = pl[s];
      a !== void 0 ? (i !== -1 && (r += encodeURIComponent(e2.substring(i, o)), i = -1), r += a) : i === -1 && (i = o);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e2.substring(i))), r !== void 0 ? r : e2;
}
function Oh(e2) {
  let t;
  for (let n = 0; n < e2.length; n++) {
    let r = e2.charCodeAt(n);
    r === 35 || r === 63 ? (t === void 0 && (t = e2.substr(0, n)), t += pl[r]) : t !== void 0 && (t += e2[n]);
  }
  return t !== void 0 ? t : e2;
}
function hl(e2, t) {
  let n;
  return n = e2.authority && e2.path.length > 1 && e2.scheme === "file" ? `//${e2.authority}${e2.path}` : e2.path.charCodeAt(0) === 47 && (e2.path.charCodeAt(1) >= 65 && e2.path.charCodeAt(1) <= 90 || e2.path.charCodeAt(1) >= 97 && e2.path.charCodeAt(1) <= 122) && e2.path.charCodeAt(2) === 58 ? t ? e2.path.substr(1) : e2.path[1].toLowerCase() + e2.path.substr(2) : e2.path, Rt && (n = n.replace(/\//g, "\\")), n;
}
function Ni(e2, t) {
  let n = t ? Oh : ll, r = "", { scheme: i, authority: o, path: s, query: a, fragment: l } = e2;
  if (i && (r += i, r += ":"), (o || i === "file") && (r += he, r += he), o) {
    let u = o.indexOf("@");
    if (u !== -1) {
      let c = o.substr(0, u);
      o = o.substr(u + 1), u = c.lastIndexOf(":"), u === -1 ? r += n(c, false, false) : (r += n(c.substr(0, u), false, false), r += ":", r += n(c.substr(u + 1), false, true)), r += "@";
    }
    o = o.toLowerCase(), u = o.lastIndexOf(":"), u === -1 ? r += n(o, false, true) : (r += n(o.substr(0, u), false, true), r += o.substr(u));
  }
  if (s) {
    if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
      let u = s.charCodeAt(1);
      u >= 65 && u <= 90 && (s = `/${String.fromCharCode(u + 32)}:${s.substr(3)}`);
    } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
      let u = s.charCodeAt(0);
      u >= 65 && u <= 90 && (s = `${String.fromCharCode(u + 32)}:${s.substr(2)}`);
    }
    r += n(s, true, false);
  }
  return a && (r += "?", r += n(a, false, false)), l && (r += "#", r += t ? l : ll(l, false, false)), r;
}
function ml(e2) {
  try {
    return decodeURIComponent(e2);
  } catch {
    return e2.length > 3 ? e2.substr(0, 3) + ml(e2.substr(3)) : e2;
  }
}
function En(e2) {
  return e2.match(ul) ? e2.replace(ul, (t) => ml(t)) : e2;
}
var Ah, sl, Rt, Ch, Nh, Ph, j, he, Ih, _t, dl, _e, pl, ul, cl, $t, An, fl, gl = W(() => {
  Ah = { 975(e2) {
    function t(i) {
      if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
    }
    function n(i, o) {
      for (var s, a = "", l = 0, u = -1, c = 0, f = 0; f <= i.length; ++f) {
        if (f < i.length) s = i.charCodeAt(f);
        else {
          if (s === 47) break;
          s = 47;
        }
        if (s === 47) {
          if (!(u === f - 1 || c === 1)) if (u !== f - 1 && c === 2) {
            if (a.length < 2 || l !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
              if (a.length > 2) {
                var h = a.lastIndexOf("/");
                if (h !== a.length - 1) {
                  h === -1 ? (a = "", l = 0) : l = (a = a.slice(0, h)).length - 1 - a.lastIndexOf("/"), u = f, c = 0;
                  continue;
                }
              } else if (a.length === 2 || a.length === 1) {
                a = "", l = 0, u = f, c = 0;
                continue;
              }
            }
            o && (a.length > 0 ? a += "/.." : a = "..", l = 2);
          } else a.length > 0 ? a += "/" + i.slice(u + 1, f) : a = i.slice(u + 1, f), l = f - u - 1;
          u = f, c = 0;
        } else s === 46 && c !== -1 ? ++c : c = -1;
      }
      return a;
    }
    var r = { resolve: function() {
      for (var i, o = "", s = false, a = arguments.length - 1; a >= -1 && !s; a--) {
        var l;
        a >= 0 ? l = arguments[a] : (i === void 0 && (i = process.cwd()), l = i), t(l), l.length !== 0 && (o = l + "/" + o, s = l.charCodeAt(0) === 47);
      }
      return o = n(o, !s), s ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
    }, normalize: function(i) {
      if (t(i), i.length === 0) return ".";
      var o = i.charCodeAt(0) === 47, s = i.charCodeAt(i.length - 1) === 47;
      return (i = n(i, !o)).length !== 0 || o || (i = "."), i.length > 0 && s && (i += "/"), o ? "/" + i : i;
    }, isAbsolute: function(i) {
      return t(i), i.length > 0 && i.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var i, o = 0; o < arguments.length; ++o) {
        var s = arguments[o];
        t(s), s.length > 0 && (i === void 0 ? i = s : i += "/" + s);
      }
      return i === void 0 ? "." : r.normalize(i);
    }, relative: function(i, o) {
      if (t(i), t(o), i === o || (i = r.resolve(i)) === (o = r.resolve(o))) return "";
      for (var s = 1; s < i.length && i.charCodeAt(s) === 47; ++s) ;
      for (var a = i.length, l = a - s, u = 1; u < o.length && o.charCodeAt(u) === 47; ++u) ;
      for (var c = o.length - u, f = l < c ? l : c, h = -1, p = 0; p <= f; ++p) {
        if (p === f) {
          if (c > f) {
            if (o.charCodeAt(u + p) === 47) return o.slice(u + p + 1);
            if (p === 0) return o.slice(u + p);
          } else l > f && (i.charCodeAt(s + p) === 47 ? h = p : p === 0 && (h = 0));
          break;
        }
        var k = i.charCodeAt(s + p);
        if (k !== o.charCodeAt(u + p)) break;
        k === 47 && (h = p);
      }
      var x = "";
      for (p = s + h + 1; p <= a; ++p) p !== a && i.charCodeAt(p) !== 47 || (x.length === 0 ? x += ".." : x += "/..");
      return x.length > 0 ? x + o.slice(u + h) : (u += h, o.charCodeAt(u) === 47 && ++u, o.slice(u));
    }, _makeLong: function(i) {
      return i;
    }, dirname: function(i) {
      if (t(i), i.length === 0) return ".";
      for (var o = i.charCodeAt(0), s = o === 47, a = -1, l = true, u = i.length - 1; u >= 1; --u) if ((o = i.charCodeAt(u)) === 47) {
        if (!l) {
          a = u;
          break;
        }
      } else l = false;
      return a === -1 ? s ? "/" : "." : s && a === 1 ? "//" : i.slice(0, a);
    }, basename: function(i, o) {
      if (o !== void 0 && typeof o != "string") throw new TypeError('"ext" argument must be a string');
      t(i);
      var s, a = 0, l = -1, u = true;
      if (o !== void 0 && o.length > 0 && o.length <= i.length) {
        if (o.length === i.length && o === i) return "";
        var c = o.length - 1, f = -1;
        for (s = i.length - 1; s >= 0; --s) {
          var h = i.charCodeAt(s);
          if (h === 47) {
            if (!u) {
              a = s + 1;
              break;
            }
          } else f === -1 && (u = false, f = s + 1), c >= 0 && (h === o.charCodeAt(c) ? --c === -1 && (l = s) : (c = -1, l = f));
        }
        return a === l ? l = f : l === -1 && (l = i.length), i.slice(a, l);
      }
      for (s = i.length - 1; s >= 0; --s) if (i.charCodeAt(s) === 47) {
        if (!u) {
          a = s + 1;
          break;
        }
      } else l === -1 && (u = false, l = s + 1);
      return l === -1 ? "" : i.slice(a, l);
    }, extname: function(i) {
      t(i);
      for (var o = -1, s = 0, a = -1, l = true, u = 0, c = i.length - 1; c >= 0; --c) {
        var f = i.charCodeAt(c);
        if (f !== 47) a === -1 && (l = false, a = c + 1), f === 46 ? o === -1 ? o = c : u !== 1 && (u = 1) : o !== -1 && (u = -1);
        else if (!l) {
          s = c + 1;
          break;
        }
      }
      return o === -1 || a === -1 || u === 0 || u === 1 && o === a - 1 && o === s + 1 ? "" : i.slice(o, a);
    }, format: function(i) {
      if (i === null || typeof i != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof i);
      return (function(o, s) {
        var a = s.dir || s.root, l = s.base || (s.name || "") + (s.ext || "");
        return a ? a === s.root ? a + l : a + "/" + l : l;
      })(0, i);
    }, parse: function(i) {
      t(i);
      var o = { root: "", dir: "", base: "", ext: "", name: "" };
      if (i.length === 0) return o;
      var s, a = i.charCodeAt(0), l = a === 47;
      l ? (o.root = "/", s = 1) : s = 0;
      for (var u = -1, c = 0, f = -1, h = true, p = i.length - 1, k = 0; p >= s; --p) if ((a = i.charCodeAt(p)) !== 47) f === -1 && (h = false, f = p + 1), a === 46 ? u === -1 ? u = p : k !== 1 && (k = 1) : u !== -1 && (k = -1);
      else if (!h) {
        c = p + 1;
        break;
      }
      return u === -1 || f === -1 || k === 0 || k === 1 && u === f - 1 && u === c + 1 ? f !== -1 && (o.base = o.name = c === 0 && l ? i.slice(1, f) : i.slice(c, f)) : (c === 0 && l ? (o.name = i.slice(1, u), o.base = i.slice(1, f)) : (o.name = i.slice(c, u), o.base = i.slice(c, f)), o.ext = i.slice(u, f)), c > 0 ? o.dir = i.slice(0, c - 1) : l && (o.dir = "/"), o;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    r.posix = r, e2.exports = r;
  } }, sl = {};
  st.d = (e2, t) => {
    for (var n in t) st.o(t, n) && !st.o(e2, n) && Object.defineProperty(e2, n, { enumerable: true, get: t[n] });
  }, st.o = (e2, t) => Object.prototype.hasOwnProperty.call(e2, t), typeof process == "object" ? Rt = process.platform === "win32" : typeof navigator == "object" && (Rt = navigator.userAgent.indexOf("Windows") >= 0);
  Ch = /^\w[\w\d+.-]*$/, Nh = /^\//, Ph = /^\/\//;
  j = "", he = "/", Ih = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, _t = class e2 {
    static isUri(t) {
      return t instanceof e2 || !!t && typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
    }
    scheme;
    authority;
    path;
    query;
    fragment;
    constructor(t, n, r, i, o, s = false) {
      typeof t == "object" ? (this.scheme = t.scheme || j, this.authority = t.authority || j, this.path = t.path || j, this.query = t.query || j, this.fragment = t.fragment || j) : (this.scheme = /* @__PURE__ */ (function(a, l) {
        return a || l ? a : "file";
      })(t, s), this.authority = n || j, this.path = (function(a, l) {
        switch (a) {
          case "https":
          case "http":
          case "file":
            l ? l[0] !== he && (l = he + l) : l = he;
        }
        return l;
      })(this.scheme, r || j), this.query = i || j, this.fragment = o || j, al(this, s));
    }
    get fsPath() {
      return hl(this, false);
    }
    with(t) {
      if (!t) return this;
      let { scheme: n, authority: r, path: i, query: o, fragment: s } = t;
      return n === void 0 ? n = this.scheme : n === null && (n = j), r === void 0 ? r = this.authority : r === null && (r = j), i === void 0 ? i = this.path : i === null && (i = j), o === void 0 ? o = this.query : o === null && (o = j), s === void 0 ? s = this.fragment : s === null && (s = j), n === this.scheme && r === this.authority && i === this.path && o === this.query && s === this.fragment ? this : new _e(n, r, i, o, s);
    }
    static parse(t, n = false) {
      let r = Ih.exec(t);
      return r ? new _e(r[2] || j, En(r[4] || j), En(r[5] || j), En(r[7] || j), En(r[9] || j), n) : new _e(j, j, j, j, j);
    }
    static file(t) {
      let n = j;
      if (Rt && (t = t.replace(/\\/g, he)), t[0] === he && t[1] === he) {
        let r = t.indexOf(he, 2);
        r === -1 ? (n = t.substring(2), t = he) : (n = t.substring(2, r), t = t.substring(r) || he);
      }
      return new _e("file", n, t, j, j);
    }
    static from(t) {
      let n = new _e(t.scheme, t.authority, t.path, t.query, t.fragment);
      return al(n, true), n;
    }
    toString(t = false) {
      return Ni(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof e2) return t;
        {
          let n = new _e(t);
          return n._formatted = t.external, n._fsPath = t._sep === dl ? t.fsPath : null, n;
        }
      }
      return t;
    }
  }, dl = Rt ? 1 : void 0, _e = class extends _t {
    _formatted = null;
    _fsPath = null;
    get fsPath() {
      return this._fsPath || (this._fsPath = hl(this, false)), this._fsPath;
    }
    toString(t = false) {
      return t ? Ni(this, true) : (this._formatted || (this._formatted = Ni(this, false)), this._formatted);
    }
    toJSON() {
      let t = { $mid: 1 };
      return this._fsPath && (t.fsPath = this._fsPath, t._sep = dl), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
    }
  }, pl = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
  ul = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  cl = st(975), $t = cl.posix || cl, An = "/";
  (function(e2) {
    e2.joinPath = function(t, ...n) {
      return t.with({ path: $t.join(t.path, ...n) });
    }, e2.resolvePath = function(t, ...n) {
      let r = t.path, i = false;
      r[0] !== An && (r = An + r, i = true);
      let o = $t.resolve(r, ...n);
      return i && o[0] === An && !t.authority && (o = o.substring(1)), t.with({ path: o });
    }, e2.dirname = function(t) {
      if (t.path.length === 0 || t.path === An) return t;
      let n = $t.dirname(t.path);
      return n.length === 1 && n.charCodeAt(0) === 46 && (n = ""), t.with({ path: n });
    }, e2.basename = function(t) {
      return $t.basename(t.path);
    }, e2.extname = function(t) {
      return $t.extname(t.path);
    };
  })(fl || (fl = {}));
});
var bl, Pi, vl = W(() => {
  bl = { properties: ["additive-symbols", "align-content", "align-items", "justify-items", "justify-self", "justify-items", "align-self", "all", "alt", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "behavior", "block-size", "border", "border-block-end", "border-block-start", "border-block-end-color", "border-block-start-color", "border-block-end-style", "border-block-start-style", "border-block-end-width", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline-end", "border-inline-start", "border-inline-end-color", "border-inline-start-color", "border-inline-end-style", "border-inline-start-style", "border-inline-end-width", "border-inline-start-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-interpolation-filters", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "columns", "column-span", "column-width", "contain", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "enable-background", "fallback", "fill", "fill-opacity", "fill-rule", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "height", "hyphens", "image-orientation", "image-rendering", "ime-mode", "inline-size", "isolation", "justify-content", "kerning", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marker", "marker-end", "marker-mid", "marker-start", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "motion", "motion-offset", "motion-path", "motion-rotation", "-moz-animation", "-moz-animation-delay", "-moz-animation-direction", "-moz-animation-duration", "-moz-animation-iteration-count", "-moz-animation-name", "-moz-animation-play-state", "-moz-animation-timing-function", "-moz-appearance", "-moz-backface-visibility", "-moz-background-clip", "-moz-background-inline-policy", "-moz-background-origin", "-moz-border-bottom-colors", "-moz-border-image", "-moz-border-left-colors", "-moz-border-right-colors", "-moz-border-top-colors", "-moz-box-align", "-moz-box-direction", "-moz-box-flex", "-moz-box-flexgroup", "-moz-box-ordinal-group", "-moz-box-orient", "-moz-box-pack", "-moz-box-sizing", "-moz-column-count", "-moz-column-gap", "-moz-column-rule", "-moz-column-rule-color", "-moz-column-rule-style", "-moz-column-rule-width", "-moz-columns", "-moz-column-width", "-moz-font-feature-settings", "-moz-hyphens", "-moz-perspective", "-moz-perspective-origin", "-moz-text-align-last", "-moz-text-decoration-color", "-moz-text-decoration-line", "-moz-text-decoration-style", "-moz-text-size-adjust", "-moz-transform", "-moz-transform-origin", "-moz-transition", "-moz-transition-delay", "-moz-transition-duration", "-moz-transition-property", "-moz-transition-timing-function", "-moz-user-focus", "-moz-user-select", "-ms-accelerator", "-ms-behavior", "-ms-block-progression", "-ms-content-zoom-chaining", "-ms-content-zooming", "-ms-content-zoom-limit", "-ms-content-zoom-limit-max", "-ms-content-zoom-limit-min", "-ms-content-zoom-snap", "-ms-content-zoom-snap-points", "-ms-content-zoom-snap-type", "-ms-filter", "-ms-flex", "-ms-flex-align", "-ms-flex-direction", "-ms-flex-flow", "-ms-flex-item-align", "-ms-flex-line-pack", "-ms-flex-order", "-ms-flex-pack", "-ms-flex-wrap", "-ms-flow-from", "-ms-flow-into", "-ms-grid-column", "-ms-grid-column-align", "-ms-grid-columns", "-ms-grid-column-span", "-ms-grid-layer", "-ms-grid-row", "-ms-grid-row-align", "-ms-grid-rows", "-ms-grid-row-span", "-ms-high-contrast-adjust", "-ms-hyphenate-limit-chars", "-ms-hyphenate-limit-lines", "-ms-hyphenate-limit-zone", "-ms-hyphens", "-ms-ime-mode", "-ms-interpolation-mode", "-ms-layout-grid", "-ms-layout-grid-char", "-ms-layout-grid-line", "-ms-layout-grid-mode", "-ms-layout-grid-type", "-ms-line-break", "-ms-overflow-style", "-ms-perspective", "-ms-perspective-origin", "-ms-perspective-origin-x", "-ms-perspective-origin-y", "-ms-progress-appearance", "-ms-scrollbar-3dlight-color", "-ms-scrollbar-arrow-color", "-ms-scrollbar-base-color", "-ms-scrollbar-darkshadow-color", "-ms-scrollbar-face-color", "-ms-scrollbar-highlight-color", "-ms-scrollbar-shadow-color", "-ms-scrollbar-track-color", "-ms-scroll-chaining", "-ms-scroll-limit", "-ms-scroll-limit-x-max", "-ms-scroll-limit-x-min", "-ms-scroll-limit-y-max", "-ms-scroll-limit-y-min", "-ms-scroll-rails", "-ms-scroll-snap-points-x", "-ms-scroll-snap-points-y", "-ms-scroll-snap-type", "-ms-scroll-snap-x", "-ms-scroll-snap-y", "-ms-scroll-translation", "-ms-text-align-last", "-ms-text-autospace", "-ms-text-combine-horizontal", "-ms-text-justify", "-ms-text-kashida-space", "-ms-text-overflow", "-ms-text-size-adjust", "-ms-text-underline-position", "-ms-touch-action", "-ms-touch-select", "-ms-transform", "-ms-transform-origin", "-ms-transform-origin-x", "-ms-transform-origin-y", "-ms-transform-origin-z", "-ms-user-select", "-ms-word-break", "-ms-word-wrap", "-ms-wrap-flow", "-ms-wrap-margin", "-ms-wrap-through", "-ms-writing-mode", "-ms-zoom", "-ms-zoom-animation", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "negative", "-o-animation", "-o-animation-delay", "-o-animation-direction", "-o-animation-duration", "-o-animation-fill-mode", "-o-animation-iteration-count", "-o-animation-name", "-o-animation-play-state", "-o-animation-timing-function", "object-fit", "object-position", "-o-border-image", "-o-object-fit", "-o-object-position", "opacity", "order", "orphans", "-o-table-baseline", "-o-tab-size", "-o-text-overflow", "-o-transform", "-o-transform-origin", "-o-transition", "-o-transition-delay", "-o-transition-duration", "-o-transition-property", "-o-transition-timing-function", "offset-block-end", "offset-block-start", "offset-inline-end", "offset-inline-start", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "pad", "padding", "padding-bottom", "padding-block-end", "padding-block-start", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "paint-order", "perspective", "perspective-origin", "pointer-events", "position", "prefix", "quotes", "range", "resize", "right", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scrollbar-3dlight-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-darkshadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "scroll-behavior", "scroll-snap-coordinate", "scroll-snap-destination", "scroll-snap-points-x", "scroll-snap-points-y", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "size", "src", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "suffix", "system", "symbols", "table-layout", "tab-size", "text-align", "text-align-last", "text-anchor", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "unicode-range", "user-select", "vertical-align", "visibility", "-webkit-animation", "-webkit-animation-delay", "-webkit-animation-direction", "-webkit-animation-duration", "-webkit-animation-fill-mode", "-webkit-animation-iteration-count", "-webkit-animation-name", "-webkit-animation-play-state", "-webkit-animation-timing-function", "-webkit-appearance", "-webkit-backdrop-filter", "-webkit-backface-visibility", "-webkit-background-clip", "-webkit-background-composite", "-webkit-background-origin", "-webkit-border-image", "-webkit-box-align", "-webkit-box-direction", "-webkit-box-flex", "-webkit-box-flex-group", "-webkit-box-ordinal-group", "-webkit-box-orient", "-webkit-box-pack", "-webkit-box-reflect", "-webkit-box-sizing", "-webkit-break-after", "-webkit-break-before", "-webkit-break-inside", "-webkit-column-break-after", "-webkit-column-break-before", "-webkit-column-break-inside", "-webkit-column-count", "-webkit-column-gap", "-webkit-column-rule", "-webkit-column-rule-color", "-webkit-column-rule-style", "-webkit-column-rule-width", "-webkit-columns", "-webkit-column-span", "-webkit-column-width", "-webkit-filter", "-webkit-flow-from", "-webkit-flow-into", "-webkit-font-feature-settings", "-webkit-hyphens", "-webkit-line-break", "-webkit-margin-bottom-collapse", "-webkit-margin-collapse", "-webkit-margin-start", "-webkit-margin-top-collapse", "-webkit-mask-clip", "-webkit-mask-image", "-webkit-mask-origin", "-webkit-mask-repeat", "-webkit-mask-size", "-webkit-nbsp-mode", "-webkit-overflow-scrolling", "-webkit-padding-start", "-webkit-perspective", "-webkit-perspective-origin", "-webkit-region-fragment", "-webkit-tap-highlight-color", "-webkit-text-fill-color", "-webkit-text-size-adjust", "-webkit-text-stroke", "-webkit-text-stroke-color", "-webkit-text-stroke-width", "-webkit-touch-callout", "-webkit-transform", "-webkit-transform-origin", "-webkit-transform-origin-x", "-webkit-transform-origin-y", "-webkit-transform-origin-z", "-webkit-transform-style", "-webkit-transition", "-webkit-transition-delay", "-webkit-transition-duration", "-webkit-transition-property", "-webkit-transition-timing-function", "-webkit-user-drag", "-webkit-user-modify", "-webkit-user-select", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "zoom"] }, Pi = { tags: ["body", "head", "html", "address", "blockquote", "dd", "div", "section", "article", "aside", "header", "footer", "nav", "menu", "dl", "dt", "fieldset", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "iframe", "noframes", "object", "ol", "p", "ul", "applet", "center", "dir", "hr", "pre", "a", "abbr", "acronym", "area", "b", "base", "basefont", "bdo", "big", "br", "button", "caption", "cite", "code", "col", "colgroup", "del", "dfn", "em", "font", "i", "img", "input", "ins", "isindex", "kbd", "label", "legend", "li", "link", "map", "meta", "noscript", "optgroup", "option", "param", "q", "s", "samp", "script", "select", "small", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "title", "tr", "tt", "u", "var", "canvas", "main", "figure", "plaintext", "figcaption", "hgroup", "details", "summary", "audio", "bdi", "data", "datalist", "dialog", "embed", "mark", "math", "meter", "output", "picture", "portal", "progress", "rp", "rt", "ruby", "search", "slot", "source", "template", "time", "track", "video", "wbr"] };
});
function xl(e2) {
  return $h.test(e2);
}
function Rh(e2) {
  let t = [];
  for (let r of e2) r.length === 0 || r.length === 1 && r.charCodeAt(0) === Ii || (r.length === 2 && r.charCodeAt(0) === Ii && r.charCodeAt(1) === Ii ? t.pop() : t.push(r));
  e2.length > 1 && e2[e2.length - 1].length === 0 && t.push("");
  let n = t.join("/");
  return e2[0].length === 0 && (n = "/" + n), n;
}
function jt(e2, ...t) {
  let n = e2.path.split("/");
  for (let r of t) n.push(...r.split("/"));
  return e2.with({ path: Rh(n) });
}
var Lt, $h, Ii, yl = W(() => {
  (function(e2) {
    e2[e2.Unknown = 0] = "Unknown", e2[e2.File = 1] = "File", e2[e2.Directory = 2] = "Directory", e2[e2.SymbolicLink = 64] = "SymbolicLink";
  })(Lt || (Lt = {}));
  $h = new RegExp("^(/|//|\\\\\\\\|[A-Za-z]:(/|\\\\))"), Ii = 46;
});
function me(e2) {
  return e2 > 47 && e2 < 58;
}
function Fn(e2, t, n) {
  return t = t || 65, n = n || 90, e2 &= -33, e2 >= t && e2 <= n;
}
function Gl(e2) {
  return me(e2) || zn(e2);
}
function zn(e2) {
  return e2 === 95 || Fn(e2);
}
function _h(e2) {
  return e2 === 196 || e2 == 214 || e2 === 220 || e2 === 228 || e2 === 246 || e2 === 252;
}
function Lh(e2) {
  return e2 === 32 || e2 === 9 || e2 === 160;
}
function Vi(e2) {
  return Lh(e2) || e2 === 10 || e2 === 13;
}
function Hi(e2) {
  return e2 === 39 || e2 === 34;
}
function jh(e2) {
  return { tokens: e2, start: 0, pos: 0, size: e2.length };
}
function je(e2) {
  return e2.tokens[e2.pos];
}
function Wi(e2) {
  return e2.tokens[e2.pos++];
}
function at(e2, t = e2.start, n = e2.pos) {
  return e2.tokens.slice(t, n);
}
function Ee(e2) {
  return e2.pos < e2.size;
}
function te(e2, t) {
  let n = je(e2);
  return n && t(n) ? (e2.pos++, true) : false;
}
function Gi(e2, t, n = je(e2)) {
  n && n.start != null && (t += ` at ${n.start}`);
  let r = new Error(t);
  return r.pos = n && n.start, r;
}
function Fh(e2, t = {}) {
  let n = jh(e2), r = Ql(n, t);
  if (Ee(n)) throw Gi(n, "Unexpected character");
  return r;
}
function Ql(e2, t) {
  let n = { type: "TokenGroup", elements: [] }, r = n, i, o = [];
  for (; Ee(e2) && (i = Dh(e2, t) || zh(e2, t)); ) if (r.elements.push(i), te(e2, Kh)) o.push(r), r = i;
  else {
    if (te(e2, em)) continue;
    if (te(e2, Tl)) do
      o.length && (r = o.pop());
    while (te(e2, Tl));
  }
  return n;
}
function zh(e2, t) {
  if (te(e2, Yh)) {
    let n = Ql(e2, t), r = Wi(e2);
    return fe(r, "group", false) && (n.repeat = Mh(e2)), n;
  }
}
function Dh(e2, t) {
  let n, r = { type: "TokenElement", name: void 0, attributes: void 0, value: void 0, repeat: void 0, selfClose: false, elements: [] };
  for (qh(e2, t) && (r.name = at(e2)); Ee(e2); ) if (e2.start = e2.pos, !r.repeat && !Oi(r) && te(e2, On)) r.repeat = e2.tokens[e2.pos - 1];
  else if (!r.value && Jl(e2)) r.value = Xl(e2);
  else if (n = wl(e2, "id", t) || wl(e2, "class", t) || Uh(e2)) r.attributes ? r.attributes = r.attributes.concat(n) : r.attributes = Array.isArray(n) ? n.slice() : [n];
  else {
    !Oi(r) && te(e2, tm) && (r.selfClose = true, !r.repeat && te(e2, On) && (r.repeat = e2.tokens[e2.pos - 1]));
    break;
  }
  return Oi(r) ? void 0 : r;
}
function Uh(e2) {
  if (te(e2, Qh)) {
    let t = [], n;
    for (; Ee(e2); ) if (n = Bh(e2)) t.push(n);
    else {
      if (te(e2, Jh)) break;
      if (!te(e2, Yl)) throw Gi(e2, `Unexpected "${je(e2).type}" token`);
    }
    return t;
  }
}
function wl(e2, t, n) {
  if (Ae(je(e2), t)) {
    e2.pos++;
    let r = 1;
    for (; Ae(je(e2), t); ) e2.pos++, r++;
    let i = { name: [Zh(t)] };
    return r > 1 && (i.multiple = true), n.jsx && Jl(e2) ? (i.value = Xl(e2), i.expression = true) : i.value = Fi(e2) ? at(e2) : void 0, i;
  }
}
function Bh(e2) {
  if (kl(e2)) return { value: at(e2) };
  if (Fi(e2, true)) {
    let t = at(e2), n;
    return te(e2, Vh) && (kl(e2) || Fi(e2, true)) && (n = at(e2)), { name: t, value: n };
  }
}
function Mh(e2) {
  return On(je(e2)) ? e2.tokens[e2.pos++] : void 0;
}
function kl(e2) {
  let t = e2.pos, n = je(e2);
  if (In(n)) {
    for (e2.pos++; Ee(e2); ) if (In(Wi(e2), n.single)) return e2.start = t, true;
    throw Gi(e2, "Unclosed quote", n);
  }
  return false;
}
function Fi(e2, t) {
  let n = e2.pos, r = { attribute: 0, expression: 0, group: 0 };
  for (; Ee(e2); ) {
    let i = je(e2);
    if (r.expression) fe(i, "expression") && (r[i.context] += i.open ? 1 : -1);
    else {
      if (In(i) || Ae(i) || Yl(i) || On(i)) break;
      if (fe(i)) {
        if (!t) break;
        if (i.open) r[i.context]++;
        else if (r[i.context]) r[i.context]--;
        else break;
      }
    }
    e2.pos++;
  }
  return n !== e2.pos ? (e2.start = n, true) : false;
}
function qh(e2, t) {
  let n = e2.pos;
  if (t.jsx && te(e2, Sl)) for (; Ee(e2); ) {
    let { pos: r } = e2;
    if (!te(e2, Gh) || !te(e2, Sl)) {
      e2.pos = r;
      break;
    }
  }
  for (; Ee(e2) && te(e2, Wh); ) ;
  return e2.pos !== n ? (e2.start = n, true) : false;
}
function Jl(e2) {
  let t = e2.pos;
  if (te(e2, Xh)) {
    let n = 0;
    for (; Ee(e2); ) {
      let r = Wi(e2);
      if (fe(r, "expression")) if (r.open) n++;
      else if (n) n--;
      else break;
    }
    return e2.start = t, true;
  }
  return false;
}
function Xl(e2) {
  let t = e2.start, n = e2.pos;
  return fe(e2.tokens[t], "expression", true) && t++, fe(e2.tokens[n - 1], "expression", false) && n--, at(e2, t, n);
}
function fe(e2, t, n) {
  return !!(e2 && e2.type === "Bracket" && (!t || e2.context === t) && (n == null || e2.open === n));
}
function Ae(e2, t) {
  return !!(e2 && e2.type === "Operator" && (!t || e2.operator === t));
}
function In(e2, t) {
  return !!(e2 && e2.type === "Quote" && (t == null || e2.single === t));
}
function Yl(e2) {
  return !!(e2 && e2.type === "WhiteSpace");
}
function Vh(e2) {
  return Ae(e2, "equal");
}
function On(e2) {
  return !!(e2 && e2.type === "Repeater");
}
function Hh(e2) {
  return e2.type === "Literal";
}
function Sl(e2) {
  if (Hh(e2)) {
    let t = e2.value.charCodeAt(0);
    return t >= 65 && t <= 90;
  }
  return false;
}
function Wh(e2) {
  return e2.type === "Literal" || e2.type === "RepeaterNumber" || e2.type === "RepeaterPlaceholder";
}
function Gh(e2) {
  return Ae(e2, "class");
}
function Qh(e2) {
  return fe(e2, "attribute", true);
}
function Jh(e2) {
  return fe(e2, "attribute", false);
}
function Xh(e2) {
  return fe(e2, "expression", true);
}
function Yh(e2) {
  return fe(e2, "group", true);
}
function Zh(e2) {
  return { type: "Literal", value: e2 };
}
function Oi(e2) {
  return !e2.name && !e2.value && !e2.attributes;
}
function Kh(e2) {
  return Ae(e2, "child");
}
function em(e2) {
  return Ae(e2, "sibling");
}
function Tl(e2) {
  return Ae(e2, "climb");
}
function tm(e2) {
  return Ae(e2, "close");
}
function nm(e2) {
  return e2.eat(N.Escape) ? (e2.start = e2.pos, e2.eof() || e2.pos++, true) : false;
}
function rm(e2) {
  let t = new Pn(e2), n = [], r = { group: 0, attribute: 0, expression: 0, quote: 0 }, i = 0, o;
  for (; !t.eof(); ) if (i = t.peek(), o = im(t, r), o) n.push(o), o.type === "Quote" ? r.quote = i === r.quote ? 0 : i : o.type === "Bracket" && (r[o.context] += o.open ? 1 : -1);
  else throw t.error("Unexpected character");
  return n;
}
function im(e2, t) {
  return pm(e2, t) || fm(e2) || dm(e2) || cm(e2) || sm(e2) || om(e2, t) || um(e2) || am(e2) || lm(e2);
}
function om(e2, t) {
  let n = e2.pos, r = t.expression, i = "";
  for (; !e2.eof(); ) {
    if (nm(e2)) {
      i += e2.current();
      continue;
    }
    let o = e2.peek();
    if (o === N.Slash && !t.quote && !t.expression && !t.attribute) {
      let s = e2.string.charCodeAt(e2.pos - 1), a = e2.string.charCodeAt(e2.pos + 1);
      if (me(s) && me(a)) {
        i += e2.string[e2.pos++];
        continue;
      }
    }
    if (o === t.quote || o === N.Dollar || hm(o, t)) break;
    if (r) {
      if (o === N.CurlyBracketOpen) t.expression++;
      else if (o === N.CurlyBracketClose) if (t.expression > r) t.expression--;
      else break;
    } else if (!t.quote && (!t.attribute && !vm(o) || mm(o, t) || gm(o, t) || Hi(o) || Zl(o))) break;
    i += e2.string[e2.pos++];
  }
  if (n !== e2.pos) return e2.start = n, { type: "Literal", value: i, start: n, end: e2.pos };
}
function sm(e2) {
  let t = e2.pos;
  if (e2.eatWhile(Vi)) return { type: "WhiteSpace", start: t, end: e2.pos, value: e2.substring(t, e2.pos) };
}
function am(e2) {
  let t = e2.peek();
  if (Hi(t)) return { type: "Quote", single: t === N.SingleQuote, start: e2.pos++, end: e2.pos };
}
function lm(e2) {
  let t = e2.peek(), n = Zl(t);
  if (n) return { type: "Bracket", open: bm(t), context: n, start: e2.pos++, end: e2.pos };
}
function um(e2) {
  let t = Kl(e2.peek());
  if (t) return { type: "Operator", operator: t, start: e2.pos++, end: e2.pos };
}
function cm(e2) {
  let t = e2.pos;
  if (e2.eat(N.Asterisk)) {
    e2.start = e2.pos;
    let n = 1, r = false;
    return e2.eatWhile(me) ? n = Number(e2.current()) : r = true, { type: "Repeater", count: n, value: 0, implicit: r, start: t, end: e2.pos };
  }
}
function fm(e2) {
  let t = e2.pos;
  if (e2.eat(N.Dollar) && e2.eat(N.Hash)) return { type: "RepeaterPlaceholder", value: void 0, start: t, end: e2.pos };
  e2.pos = t;
}
function dm(e2) {
  let t = e2.pos;
  if (e2.eatWhile(N.Dollar)) {
    let n = e2.pos - t, r = false, i = 1, o = 0;
    if (e2.eat(N.At)) {
      for (; e2.eat(N.Climb); ) o++;
      r = e2.eat(N.Dash), e2.start = e2.pos, e2.eatWhile(me) && (i = Number(e2.current()));
    }
    return e2.start = t, { type: "RepeaterNumber", size: n, reverse: r, base: i, parent: o, start: t, end: e2.pos };
  }
}
function pm(e2, t) {
  let n = e2.pos;
  if ((t.expression || t.attribute) && e2.eat(N.Dollar) && e2.eat(N.CurlyBracketOpen)) {
    e2.start = e2.pos;
    let r, i = "";
    if (e2.eatWhile(me) ? (r = Number(e2.current()), i = e2.eat(N.Colon) ? El(e2) : "") : Fn(e2.peek()) && (i = El(e2)), e2.eat(N.CurlyBracketClose)) return { type: "Field", index: r, name: i, start: n, end: e2.pos };
    throw e2.error("Expecting }");
  }
  e2.pos = n;
}
function El(e2) {
  let t = [];
  for (e2.start = e2.pos; !e2.eof(); ) if (e2.eat(N.CurlyBracketOpen)) t.push(e2.pos);
  else if (e2.eat(N.CurlyBracketClose)) {
    if (!t.length) {
      e2.pos--;
      break;
    }
    t.pop();
  } else e2.pos++;
  if (t.length) throw e2.pos = t.pop(), e2.error("Expecting }");
  return e2.current();
}
function hm(e2, t) {
  let n = Kl(e2);
  return !n || t.quote || t.expression ? false : !t.attribute || n === "equal";
}
function mm(e2, t) {
  return Vi(e2) && !t.expression;
}
function gm(e2, t) {
  return e2 === N.Asterisk && !t.attribute && !t.expression;
}
function Zl(e2) {
  if (e2 === N.RoundBracketOpen || e2 === N.RoundBracketClose) return "group";
  if (e2 === N.SquareBracketOpen || e2 === N.SquareBracketClose) return "attribute";
  if (e2 === N.CurlyBracketOpen || e2 === N.CurlyBracketClose) return "expression";
}
function Kl(e2) {
  return e2 === N.Child && "child" || e2 === N.Sibling && "sibling" || e2 === N.Climb && "climb" || e2 === N.Dot && "class" || e2 === N.Hash && "id" || e2 === N.Slash && "close" || e2 === N.Equals && "equal" || void 0;
}
function bm(e2) {
  return e2 === N.CurlyBracketOpen || e2 === N.SquareBracketOpen || e2 === N.RoundBracketOpen;
}
function vm(e2) {
  return Gl(e2) || _h(e2) || e2 === N.Dash || e2 === N.Colon || e2 === N.Excl;
}
function eu(e2, t) {
  if (!Al[e2.type]) throw new Error(`Unknown token ${e2.type}`);
  return Al[e2.type](e2, t);
}
function km(e2, t = {}) {
  let n = false, r;
  t.text && (Array.isArray(t.text) ? r = t.text.filter((o) => o.trim()) : r = t.text);
  let i = { type: "Abbreviation", children: zi(e2, { inserted: false, repeaters: [], text: t.text, cleanText: r, repeatGuard: t.maxRepeat || Number.POSITIVE_INFINITY, getText(o) {
    var s;
    n = true;
    let a;
    if (Array.isArray(t.text)) {
      if (o !== void 0 && o >= 0 && o < r.length) return r[o];
      a = o !== void 0 ? t.text[o] : t.text.join(`
`);
    } else a = (s = t.text) !== null && s !== void 0 ? s : "";
    return a;
  }, getVariable(o) {
    let s = t.variables && t.variables[o];
    return s ?? o;
  } }) };
  if (t.text != null && !n) {
    let o = Qi(ct(i.children));
    if (o) {
      let s = Array.isArray(t.text) ? t.text.join(`
`) : t.text;
      ou(o, s), o.name === "a" && t.href && Tm(o, s);
    }
  }
  return i;
}
function tu(e2, t) {
  let n = [];
  if (e2.repeat) {
    let r = e2.repeat, i = Object.assign({}, r);
    i.count = i.implicit && Array.isArray(t.text) ? t.cleanText.length : i.count || 1;
    let o;
    t.repeaters.push(i);
    for (let s = 0; s < i.count; s++) {
      if (i.value = s, e2.repeat = i, o = Nl(e2) ? zi(e2, t) : Cl(e2, t), i.implicit && !t.inserted) {
        let a = ct(o), l = a && Qi(a);
        l && ou(l, t.getText(i.value));
      }
      if (n = n.concat(o), --t.repeatGuard <= 0) break;
    }
    t.repeaters.pop(), e2.repeat = r, i.implicit && (t.inserted = true);
  } else n = n.concat(Nl(e2) ? zi(e2, t) : Cl(e2, t));
  return n;
}
function Cl(e2, t) {
  let n = [], r = { type: "AbbreviationNode", name: e2.name && nu(e2.name, t), value: e2.value && ru(e2.value, t), attributes: void 0, children: n, repeat: e2.repeat && Object.assign({}, e2.repeat), selfClosing: e2.selfClose }, i = [r];
  for (let o of e2.elements) n = n.concat(tu(o, t));
  if (e2.attributes) {
    r.attributes = [];
    for (let o of e2.attributes) r.attributes.push(Sm(o, t));
  }
  return !r.name && !r.attributes && r.value && !r.value.some(iu) ? i = i.concat(n) : r.children = n, i;
}
function zi(e2, t) {
  let n = [];
  for (let r of e2.elements) n = n.concat(tu(r, t));
  return e2.repeat && (n = Em(n, e2.repeat)), n;
}
function Sm(e2, t) {
  let n = false, r = false, i = e2.expression ? "expression" : "raw", o, s = e2.name && nu(e2.name, t);
  if (s && s[0] === "!" && (n = true), s && s[s.length - 1] === "." && (r = true), e2.value) {
    let a = e2.value.slice();
    if (In(a[0])) {
      let l = a.shift();
      a.length && ct(a).type === l.type && a.pop(), i = l.single ? "singleQuote" : "doubleQuote";
    } else fe(a[0], "expression", true) && (i = "expression", a.shift(), fe(ct(a), "expression", false) && a.pop());
    o = ru(a, t);
  }
  return { name: r || n ? s.slice(n ? 1 : 0, r ? -1 : void 0) : s, value: o, boolean: r, implied: n, valueType: i, multiple: e2.multiple };
}
function nu(e2, t) {
  let n = "";
  for (let r = 0; r < e2.length; r++) n += eu(e2[r], t);
  return n;
}
function ru(e2, t) {
  let n = [], r = "";
  for (let i = 0, o; i < e2.length; i++) o = e2[i], iu(o) ? (r && (n.push(r), r = ""), n.push(o)) : r += eu(o, t);
  return r && n.push(r), n;
}
function Nl(e2) {
  return e2.type === "TokenGroup";
}
function iu(e2) {
  return typeof e2 == "object" && e2.type === "Field" && e2.index != null;
}
function ct(e2) {
  return e2[e2.length - 1];
}
function Qi(e2) {
  return e2.children.length ? Qi(ct(e2.children)) : e2;
}
function ou(e2, t) {
  e2.value ? typeof ct(e2.value) == "string" ? e2.value[e2.value.length - 1] += t : e2.value.push(t) : e2.value = [t];
}
function Tm(e2, t) {
  var n;
  let r = "";
  ym.test(t) ? (r = t, !/\w+:/.test(r) && !r.startsWith("//") && (r = `http://${r}`)) : wm.test(t) && (r = `mailto:${t}`);
  let i = (n = e2.attributes) === null || n === void 0 ? void 0 : n.find((o) => o.name === "href");
  i ? i.value || (i.value = [r]) : (e2.attributes || (e2.attributes = []), e2.attributes.push({ name: "href", value: [r], valueType: "doubleQuote" }));
}
function Em(e2, t) {
  for (let n of e2) n.repeat || (n.repeat = Object.assign({}, t));
  return e2;
}
function su(e2, t) {
  try {
    let n = typeof e2 == "string" ? rm(e2) : e2;
    return km(Fh(n, t), t);
  } catch (n) {
    throw n instanceof Ft && typeof e2 == "string" && (n.message += `
${e2}
${"-".repeat(n.pos)}^`), n;
  }
}
function Am(e2, t) {
  let n = 0, r, i = new Pn(e2), o = [];
  for (; !i.eof(); ) {
    if (r = Cm(i, n === 0 && !t), !r) throw i.error("Unexpected character");
    if (r.type === "Bracket" && (!n && r.open && qm(i, o), n += r.open ? 1 : -1, n < 0)) throw i.error("Unexpected bracket", r.start);
    o.push(r), Mm(r) && (r = au(i)) && o.push(r);
  }
  return o;
}
function Cm(e2, t) {
  return Nm(e2) || _m(e2) || Im(e2) || $m(e2) || Om(e2) || Lm(e2) || au(e2) || Rm(e2) || Pm(e2, t);
}
function Nm(e2) {
  let t = e2.pos;
  if (e2.eat($.Dollar) && e2.eat($.CurlyBracketOpen)) {
    e2.start = e2.pos;
    let n, r = "";
    if (e2.eatWhile(me) ? (n = Number(e2.current()), r = e2.eat($.Colon) ? Pl(e2) : "") : Fn(e2.peek()) && (r = Pl(e2)), e2.eat($.CurlyBracketClose)) return { type: "Field", index: n, name: r, start: t, end: e2.pos };
    throw e2.error("Expecting }");
  }
  e2.pos = t;
}
function Pl(e2) {
  let t = [];
  for (e2.start = e2.pos; !e2.eof(); ) if (e2.eat($.CurlyBracketOpen)) t.push(e2.pos);
  else if (e2.eat($.CurlyBracketClose)) {
    if (!t.length) {
      e2.pos--;
      break;
    }
    t.pop();
  } else e2.pos++;
  if (t.length) throw e2.pos = t.pop(), e2.error("Expecting }");
  return e2.current();
}
function Pm(e2, t) {
  let n = e2.pos;
  if (e2.eat(Fm) ? e2.eatWhile(n ? Di : Ri) : e2.eat(zn) ? e2.eatWhile(t ? Ri : Di) : (e2.eat($.Dot), e2.eatWhile(Ri)), n !== e2.pos) return e2.start = n, Ji(e2, e2.start = n);
}
function Ji(e2, t = e2.start, n = e2.pos) {
  return { type: "Literal", value: e2.substring(t, n), start: t, end: n };
}
function Im(e2) {
  let t = e2.pos;
  if (jm(e2)) {
    e2.start = t;
    let n = e2.current();
    return e2.start = e2.pos, e2.eat($.Percent) || e2.eatWhile(zn), { type: "NumberValue", value: Number(n), rawValue: n, unit: e2.current(), start: t, end: e2.pos };
  }
}
function Om(e2) {
  let t = e2.peek(), n = e2.pos, r = false;
  if (Hi(t)) {
    for (e2.pos++; !e2.eof(); ) if (e2.eat(t)) {
      r = true;
      break;
    } else e2.pos++;
    return e2.start = n, { type: "StringValue", value: e2.substring(n + 1, e2.pos - (r ? 1 : 0)), quote: t === $.SingleQuote ? "single" : "double", start: n, end: e2.pos };
  }
}
function $m(e2) {
  let t = e2.pos;
  if (e2.eat($.Hash)) {
    let n = e2.pos, r = "", i = "";
    if (e2.eatWhile(Dm) ? (r = e2.substring(n, e2.pos), i = $i(e2)) : e2.eat($.Transparent) ? (r = "0", i = $i(e2) || "0") : i = $i(e2), r || i || e2.eof()) {
      let { r: o, g: s, b: a, a: l } = Bm(r, i);
      return { type: "ColorValue", r: o, g: s, b: a, a: l, raw: e2.substring(t + 1, e2.pos), start: t, end: e2.pos };
    } else return Ji(e2, t);
  }
  e2.pos = t;
}
function $i(e2) {
  let t = e2.pos;
  return e2.eat($.Dot) ? (e2.start = t, e2.eatWhile(me) ? e2.current() : "1") : "";
}
function Rm(e2) {
  let t = e2.pos;
  if (e2.eatWhile(Vi)) return { type: "WhiteSpace", start: t, end: e2.pos };
}
function _m(e2) {
  let t = e2.pos;
  if (e2.eat($.Dash) && e2.eat($.Dash)) return e2.start = t, e2.eatWhile(Di), { type: "CustomProperty", value: e2.current(), start: t, end: e2.pos };
  e2.pos = t;
}
function Lm(e2) {
  let t = e2.peek();
  if (Um(t)) return { type: "Bracket", open: t === $.RoundBracketOpen, start: e2.pos++, end: e2.pos };
}
function au(e2) {
  let t = zm(e2.peek());
  if (t) return { type: "Operator", operator: t, start: e2.pos++, end: e2.pos };
}
function jm(e2) {
  let t = e2.pos;
  e2.eat($.Dash);
  let n = e2.pos, r = e2.eatWhile(me), i = e2.pos;
  if (e2.eat($.Dot)) {
    let o = e2.eatWhile(me);
    !r && !o && (e2.pos = i);
  }
  return e2.pos === n && (e2.pos = t), e2.pos !== t;
}
function Fm(e2) {
  return e2 === $.At || e2 === $.Dollar;
}
function zm(e2) {
  return e2 === $.Sibling && ue.Sibling || e2 === $.Excl && ue.Important || e2 === $.Comma && ue.ArgumentDelimiter || e2 === $.Colon && ue.PropertyDelimiter || e2 === $.Dash && ue.ValueDelimiter || void 0;
}
function Dm(e2) {
  return me(e2) || Fn(e2, 65, 70);
}
function Di(e2) {
  return Gl(e2) || e2 === $.Dash;
}
function Um(e2) {
  return e2 === $.RoundBracketOpen || e2 === $.RoundBracketClose;
}
function Ri(e2) {
  return zn(e2) || e2 === $.Percent || e2 === $.Slash;
}
function Bm(e2, t) {
  let n = "0", r = "0", i = "0", o = Number(t != null && t !== "" ? t : 1);
  if (e2 === "t") o = 0;
  else switch (e2.length) {
    case 0:
      break;
    case 1:
      n = r = i = e2 + e2;
      break;
    case 2:
      n = r = i = e2;
      break;
    case 3:
      n = e2[0] + e2[0], r = e2[1] + e2[1], i = e2[2] + e2[2];
      break;
    default:
      e2 += e2, n = e2.slice(0, 2), r = e2.slice(2, 4), i = e2.slice(4, 6);
  }
  return { r: parseInt(n, 16), g: parseInt(r, 16), b: parseInt(i, 16), a: o };
}
function Mm(e2) {
  return e2.type === "ColorValue" || e2.type === "NumberValue" && !e2.unit;
}
function qm(e2, t) {
  let n = 0, r = 0;
  for (; t.length; ) {
    let i = Vm(t);
    if (i.type === "Literal" || i.type === "NumberValue") n = i.start, r || (r = i.end), t.pop();
    else break;
  }
  n !== r && t.push(Ji(e2, n, r));
}
function Vm(e2) {
  return e2[e2.length - 1];
}
function Hm(e2) {
  return { tokens: e2, start: 0, pos: 0, size: e2.length };
}
function Dn(e2) {
  return e2.tokens[e2.pos];
}
function Un(e2) {
  return e2.pos < e2.size;
}
function Te(e2, t) {
  return t(Dn(e2)) ? (e2.pos++, true) : false;
}
function lu(e2, t, n = Dn(e2)) {
  n && n.start != null && (t += ` at ${n.start}`);
  let r = new Error(t);
  return r.pos = n && n.start, r;
}
function Wm(e2, t = {}) {
  let n = Hm(e2), r = [], i;
  for (; Un(n); ) if (i = Gm(n, t)) r.push(i);
  else if (!Te(n, Ym)) throw lu(n, "Unexpected token");
  return r;
}
function Gm(e2, t) {
  let n, r = false, i, o = [], s = Dn(e2), a = !!t.value;
  for (!a && Xi(s) && !tg(e2) && (e2.pos++, n = s.value, Te(e2, du)), a && Te(e2, Yi); Un(e2); ) if (Te(e2, Km)) r = true;
  else if (i = uu(e2, a)) o.push(i);
  else if (!Te(e2, Zm)) break;
  if (n || o.length || r) return { name: n, value: o, important: r };
}
function uu(e2, t) {
  let n = [], r, i;
  for (; Un(e2); ) if (r = Dn(e2), eg(r)) e2.pos++, Xi(r) && (i = Qm(e2)) ? n.push({ type: "FunctionCall", name: r.value, arguments: i }) : n.push(r);
  else if (du(r) || t && Yi(r)) e2.pos++;
  else break;
  return n.length ? { type: "CSSValue", value: n } : void 0;
}
function Qm(e2) {
  let t = e2.pos;
  if (Te(e2, Jm)) {
    let n = [], r;
    for (; Un(e2) && !Te(e2, Xm); ) if (r = uu(e2, true)) n.push(r);
    else if (!Te(e2, Yi) && !Te(e2, fu)) throw lu(e2, "Unexpected token");
    return e2.start = t, n;
  }
}
function Xi(e2) {
  return e2 && e2.type === "Literal";
}
function cu(e2, t) {
  return e2 && e2.type === "Bracket" && (t == null || e2.open === t);
}
function Jm(e2) {
  return cu(e2, true);
}
function Xm(e2) {
  return cu(e2, false);
}
function Yi(e2) {
  return e2 && e2.type === "WhiteSpace";
}
function zt(e2, t) {
  return e2 && e2.type === "Operator" && (!t || e2.operator === t);
}
function Ym(e2) {
  return zt(e2, ue.Sibling);
}
function fu(e2) {
  return zt(e2, ue.ArgumentDelimiter);
}
function Zm(e2) {
  return fu(e2);
}
function Km(e2) {
  return zt(e2, ue.Important);
}
function eg(e2) {
  return e2.type === "StringValue" || e2.type === "ColorValue" || e2.type === "NumberValue" || e2.type === "Literal" || e2.type === "Field" || e2.type === "CustomProperty";
}
function du(e2) {
  return zt(e2, ue.PropertyDelimiter) || zt(e2, ue.ValueDelimiter);
}
function tg(e2) {
  let t = e2.tokens[e2.pos], n = e2.tokens[e2.pos + 1];
  return t && n && Xi(t) && n.type === "Bracket";
}
function pu(e2, t) {
  try {
    let n = typeof e2 == "string" ? Am(e2, t && t.value) : e2;
    return Wm(n, t);
  } catch (n) {
    throw n instanceof Ft && typeof e2 == "string" && (n.message += `
${e2}
${"-".repeat(n.pos)}^`), n;
  }
}
function ng(e2, t) {
  if (!e2.attributes) return;
  let n = [], r = {};
  for (let i of e2.attributes) if (i.name) {
    let o = i.name;
    if (o in r) {
      let s = r[o];
      o === "class" ? s.value = rg(s.value, i.value, " ") : ig(s, i, t);
    } else n.push(r[o] = Object.assign({}, i));
  } else n.push(i);
  e2.attributes = n;
}
function rg(e2, t, n) {
  if (e2 && t) {
    e2.length && n && Il(e2, n);
    for (let i of t) Il(e2, i);
    return e2;
  }
  let r = e2 || t;
  return r && r.slice();
}
function ig(e2, t, n) {
  return e2.name = t.name, n.options["output.reverseAttributes"] || (e2.value = t.value), e2.implied || (e2.implied = t.implied), e2.boolean || (e2.boolean = t.boolean), e2.valueType !== "expression" && (e2.valueType = t.valueType), e2;
}
function Il(e2, t) {
  let n = e2.length - 1;
  typeof e2[n] == "string" && typeof t == "string" ? e2[n] += t : e2.push(t);
}
function og(e2, t, n) {
  let r = [e2], i = (o) => {
    t(o, r, n), r.push(o), o.children.forEach(i), r.pop();
  };
  e2.children.forEach(i);
}
function hu(e2, t) {
  for (let n = 0; n < e2.children.length; n++) {
    let r = e2.children[n];
    if (t(r)) return r;
    let i = hu(r, t);
    if (i) return i;
  }
}
function sg(e2) {
  let t;
  for (; e2.children.length; ) t = e2, e2 = e2.children[e2.children.length - 1];
  return { parent: t, node: e2 };
}
function mu(e2) {
  return e2.type === "AbbreviationNode";
}
function ag(e2, t) {
  let n = [], r = t.options["output.reverseAttributes"], { warn: i } = t, o = (s) => {
    let a = s.name && t.snippets[s.name];
    if (!a || n.includes(a)) return null;
    let l;
    try {
      l = su(a, t);
    } catch (u) {
      return i?.(`Unable to parse "${a}" snippet`, u), null;
    }
    n.push(a), $n(l, o), n.pop();
    for (let u of l.children) {
      if (s.attributes) {
        let c = u.attributes || [], f = s.attributes || [];
        u.attributes = r ? f.concat(c) : c.concat(f);
      }
      lg(s, u);
    }
    return l;
  };
  return $n(e2, o), e2;
}
function $n(e2, t, n) {
  let r = [];
  for (let i of e2.children) {
    let o = t(i);
    if (o) {
      r = r.concat(o.children);
      let s = sg(o);
      mu(s.node) && (s.node.children = s.node.children.concat($n(i, t)));
    } else r.push(i), i.children = $n(i, t);
  }
  return e2.children = r;
}
function lg(e2, t) {
  e2.selfClosing && (t.selfClosing = true), e2.value != null && (t.value = e2.value), e2.repeat && (t.repeat = e2.repeat);
}
function gu(e2, t = 0) {
  return { options: e2, value: "", level: t, offset: 0, line: 0, column: 0 };
}
function Y(e2, t) {
  let n = e2.options["output.text"];
  xu(e2, n(t, e2.offset, e2.line, e2.column));
}
function L(e2, t) {
  let n = dg(t);
  for (let r = 0, i = n.length - 1; r <= i; r++) Y(e2, n[r]), r !== i && ye(e2, true);
}
function ye(e2, t) {
  let n = e2.options["output.baseIndent"], r = e2.options["output.newline"];
  Y(e2, r + n), e2.line++, e2.column = n.length, t && ug(e2, t === true ? e2.level : t);
}
function ug(e2, t = e2.level) {
  let n = e2.options["output.indent"];
  Y(e2, n.repeat(Math.max(t, 0)));
}
function Zi(e2, t, n) {
  let r = e2.options["output.field"];
  xu(e2, r(t, n, e2.offset, e2.line, e2.column));
}
function cg(e2, t) {
  return yu(e2, t.options["output.tagCase"]);
}
function bu(e2, t) {
  return yu(e2, t.options["output.attributeCase"]);
}
function Rn(e2, t, n) {
  return e2.valueType === "expression" ? n ? Ui : Bi : t.options["output.attributeQuotes"] === "single" ? "'" : '"';
}
function vu(e2, t) {
  return e2.boolean || t.options["output.booleanAttributes"].includes((e2.name || "").toLowerCase());
}
function fg(e2) {
  switch (e2.options["output.selfClosingStyle"]) {
    case "xhtml":
      return " /";
    case "xml":
      return "/";
    default:
      return "";
  }
}
function lt(e2, t) {
  return typeof e2 == "string" ? t.options.inlineElements.includes(e2.toLowerCase()) : e2.name ? lt(e2.name, t) : !!(e2.value && !e2.attributes);
}
function dg(e2) {
  return e2.split(/\r\n|\r|\n/g);
}
function xu(e2, t) {
  e2.value += t, e2.offset += t.length, e2.column += t.length;
}
function yu(e2, t) {
  return t ? t === "upper" ? e2.toUpperCase() : e2.toLowerCase() : e2;
}
function hg(e2, t, n) {
  !e2.name && e2.attributes && wu(e2, t, n);
}
function wu(e2, t, n) {
  let r = gg(t), i = n.context ? n.context.name : "", o = mg(r ? r.name : i);
  e2.name = pg[o] || (lt(o, n) ? "span" : "div");
}
function mg(e2) {
  return (e2 || "").toLowerCase();
}
function gg(e2) {
  for (let t = e2.length - 1; t >= 0; t--) {
    let n = e2[t];
    if (mu(n)) return n;
  }
}
function wg(e2, t, n) {
  let r;
  if (e2.name && (r = e2.name.match(yg))) {
    let i = Ol[r[1]] || Ol.latin, o = r[2] ? Math.max(1, Number(r[2])) : 30, s = r[3] ? Math.max(o, Number(r[3].slice(1))) : o, a = Le(o, s), l = e2.repeat || Ag(t);
    e2.name = e2.attributes = void 0, e2.value = [Eg(i, a, !l || l.value === 0)], e2.repeat && t.length > 1 && wu(e2, t, n);
  }
}
function Le(e2, t) {
  return Math.floor(Math.random() * (t - e2) + e2);
}
function kg(e2, t) {
  let n = e2.length, r = Math.min(n, t), i = [];
  for (; i.length < r; ) {
    let o = e2[Le(0, n)];
    i.includes(o) || i.push(o);
  }
  return i;
}
function Sg(e2) {
  return e2[Le(0, e2.length - 1)];
}
function $l(e2, t) {
  return e2.length && (e2 = [Tg(e2[0])].concat(e2.slice(1))), e2.join(" ") + (t || Sg("?!..."));
}
function Tg(e2) {
  return e2[0].toUpperCase() + e2.slice(1);
}
function Rl(e2) {
  if (e2.length < 2) return e2;
  e2 = e2.slice();
  let t = e2.length, n = /,$/, r = 0;
  t > 3 && t <= 6 ? r = Le(0, 1) : t > 6 && t <= 12 ? r = Le(0, 2) : r = Le(1, 4);
  for (let i = 0, o; i < r; i++) o = Le(0, t - 2), n.test(e2[o]) || (e2[o] += ",");
  return e2;
}
function Eg(e2, t, n) {
  let r = [], i = 0, o;
  for (n && e2.common && (o = e2.common.slice(0, t), i += o.length, r.push($l(Rl(o), "."))); i < t; ) o = kg(e2.words, Math.min(Le(2, 30), t - i)), i += o.length, r.push($l(Rl(o)));
  return r.join(" ");
}
function Ag(e2) {
  for (let t = e2.length - 1; t >= 0; t--) {
    let n = e2[t];
    if (n.type === "AbbreviationNode" && n.repeat) return n.repeat;
  }
}
function Cg(e2) {
  Pg(e2.name) && e2.attributes && (e2.children.length || e2.value) && (e2.attributes = e2.attributes.filter(Ng));
}
function Ng(e2) {
  return e2.name !== "select";
}
function Pg(e2) {
  return e2 === "xsl:variable" || e2 === "xsl:with-param";
}
function $g(e2, t, n) {
  Rg(e2), _g(e2, t, n);
}
function Rg(e2) {
  let t = Ki(e2), n = [];
  for (let r of t.classNames) {
    let i = r.indexOf("_");
    i > 0 && !r.startsWith("-") ? (n.push(r.slice(0, i)), n.push(r.slice(i))) : n.push(r);
  }
  n.length && (t.classNames = n.filter(Cu), t.block = Eu(t.classNames), Au(e2, t.classNames.join(" ")));
}
function _g(e2, t, n) {
  let r = Ki(e2), i = [], { options: o } = n, s = t.slice(1).concat(e2);
  for (let l of r.classNames) {
    let u = "", c, f = l;
    (c = l.match(ku)) && (u = _l(s, c[1].length, n.context) + o["bem.element"] + c[2], i.push(u), l = l.slice(c[0].length)), (c = l.match(Su)) && (u || (u = _l(s, c[1].length), i.push(u)), i.push(`${u}${o["bem.modifier"]}${c[2]}`), l = l.slice(c[0].length)), l === f && i.push(f);
  }
  let a = i.filter(Cu);
  a.length && Au(e2, a.join(" "));
}
function Ki(e2) {
  if (!e2._bem) {
    let t = "";
    if (e2.attributes) {
      for (let n of e2.attributes) if (n.name === "class" && n.value) {
        t = jg(n.value);
        break;
      }
    }
    e2._bem = Tu(t);
  }
  return e2._bem;
}
function Lg(e2) {
  return e2._bem || (e2._bem = Tu(e2.attributes && e2.attributes.class || "")), e2._bem;
}
function Tu(e2) {
  let t = e2 ? e2.split(/\s+/) : [];
  return { classNames: t, block: Eu(t) };
}
function _l(e2, t = 0, n) {
  let i = Math.max(e2.length - t, 0);
  do {
    let o = e2[i];
    if (o) {
      let s = Ki(o);
      if (s.block) return s.block;
    }
  } while (0 < i--);
  if (n) {
    let o = Lg(n);
    if (o.block) return o.block;
  }
  return "";
}
function Eu(e2) {
  return Ll(e2, Ig) || Ll(e2, Og) || void 0;
}
function Ll(e2, t) {
  for (let n of e2) {
    if (ku.test(n) || Su.test(n)) break;
    if (t(n)) return n;
  }
}
function Au(e2, t) {
  for (let n of e2.attributes) if (n.name === "class") {
    n.value = [t];
    break;
  }
}
function jg(e2) {
  let t = "";
  for (let n of e2) t += typeof n == "string" ? n : n.name;
  return t;
}
function Cu(e2, t, n) {
  return !!e2 && n.indexOf(e2) === t;
}
function Fg(e2) {
  if (e2.name === "label") {
    let t = hu(e2, (n) => n.name === "input" || n.name === "textarea");
    t && (e2.attributes && (e2.attributes = e2.attributes.filter((n) => !(n.name === "for" && jl(n)))), t.attributes && (t.attributes = t.attributes.filter((n) => !(n.name === "id" && jl(n)))));
  }
}
function jl(e2) {
  if (!e2.value) return true;
  if (e2.value.length === 1) {
    let t = e2.value[0];
    if (t && typeof t != "string" && !t.name) return true;
  }
  return false;
}
function Nu(e2, t, n) {
  let r = (o, s, a) => {
    let { parent: l, current: u } = n;
    n.parent = u, n.current = o, t(o, s, a, n, i), n.current = u, n.parent = l;
  }, i = (o, s, a) => {
    n.ancestors.push(n.current), r(o, s, a), n.ancestors.pop();
  };
  e2.children.forEach(r);
}
function Pu(e2) {
  return { current: null, parent: void 0, ancestors: [], config: e2, field: 1, out: gu(e2.options) };
}
function qe(e2) {
  return e2 ? !e2.name && !e2.attributes : false;
}
function Fl(e2, t) {
  return e2 ? lt(e2, t) : false;
}
function Iu(e2) {
  return typeof e2 == "object" && e2.type === "Field";
}
function ce(e2, t) {
  let { out: n } = t, r = -1;
  for (let i of e2) typeof i == "string" ? L(n, i) : (Zi(n, t.field + i.index, i.name), i.index > r && (r = i.index));
  r !== -1 && (t.field += r + 1);
}
function zg(e2) {
  let t = [], n = [];
  for (let r of e2) if (typeof r == "string") {
    let i = r.split(/\r\n?|\n/g);
    for (n.push(i.shift() || ""); i.length; ) t.push(n), n = [i.shift() || ""];
  } else n.push(r);
  return n.length && t.push(n), t;
}
function Ou(e2) {
  return !e2.implied || e2.valueType !== "raw" || !!e2.value && e2.value.length > 0;
}
function zl(e2) {
  let t = [], n = { pos: 0, text: e2 }, r, i = n.pos, o = n.pos;
  for (; n.pos < n.text.length; ) o = n.pos, (r = Dg(n)) ? (i !== n.pos && t.push(e2.slice(i, o)), t.push(r), i = n.pos) : n.pos++;
  return i !== n.pos && t.push(e2.slice(i)), t;
}
function Dg(e2) {
  if (_i(e2) === Ve.Start) {
    let t = ++e2.pos, n = t, r = t, i = 1;
    for (; e2.pos < e2.text.length; ) {
      let o = _i(e2);
      if ($u(o)) {
        for (n = e2.pos; Ug(_i(e2)); ) e2.pos++;
        r = e2.pos;
      } else {
        if (o === Ve.Start) i++;
        else if (o === Ve.End && --i === 0) return { before: e2.text.slice(t, n), after: e2.text.slice(r, e2.pos++), name: e2.text.slice(n, r) };
        e2.pos++;
      }
    }
  }
}
function _i(e2, t = e2.pos) {
  return e2.text.charCodeAt(t);
}
function $u(e2) {
  return e2 >= 65 && e2 <= 90;
}
function Ug(e2) {
  return $u(e2) || e2 > 47 && e2 < 58 || e2 === Ve.Underscore || e2 === Ve.Dash;
}
function Bg(e2) {
  let { options: t } = e2;
  return { enabled: t["comment.enabled"], trigger: t["comment.trigger"], before: t["comment.before"] ? zl(t["comment.before"]) : void 0, after: t["comment.after"] ? zl(t["comment.after"]) : void 0 };
}
function Mg(e2, t) {
  Ru(e2, t) && t.comment.before && _u(e2, t.comment.before, t);
}
function qg(e2, t) {
  Ru(e2, t) && t.comment.after && _u(e2, t.comment.after, t);
}
function Ru(e2, t) {
  let { comment: n } = t;
  if (!n.enabled || !n.trigger || !e2.name || !e2.attributes) return false;
  for (let r of e2.attributes) if (r.name && n.trigger.includes(r.name)) return true;
  return false;
}
function _u(e2, t, n) {
  let r = {}, { out: i } = n;
  for (let o of e2.attributes) o.name && o.value && (r[o.name.toUpperCase()] = o.value);
  for (let o of t) typeof o == "string" ? L(i, o) : r[o.name] && (L(i, o.before), ce(r[o.name], n), L(i, o.after));
}
function Lu(e2, t) {
  let n = Pu(t);
  return n.comment = Bg(t), Nu(e2, Wg, n), n.out.value;
}
function Wg(e2, t, n, r, i) {
  let { out: o, config: s } = r, a = ju(e2, t, n, r), l = Qg(r);
  if (o.level += l, a && ye(o, true), e2.name) {
    let u = cg(e2.name, s);
    if (Mg(e2, r), L(o, `<${u}`), e2.attributes) for (let c of e2.attributes) Ou(c) && Gg(c, r);
    if (e2.selfClosing && !e2.children.length && !e2.value) L(o, `${fg(s)}>`);
    else {
      if (L(o, ">"), !Dl(e2, r, i)) {
        if (e2.value) {
          let c = e2.value.some(Fu) || Jg(e2.value, s);
          c && ye(r.out, ++o.level), ce(e2.value, r), c && ye(r.out, --o.level);
        }
        if (e2.children.forEach(i), !e2.value && !e2.children.length) {
          let c = s.options["output.formatLeafNode"] || s.options["output.formatForce"].includes(e2.name);
          c && ye(r.out, ++o.level), ce(Bn, r), c && ye(r.out, --o.level);
        }
      }
      L(o, `</${u}>`), qg(e2, r);
    }
  } else !Dl(e2, r, i) && e2.value && (ce(e2.value, r), e2.children.forEach(i));
  if (a && t === n.length - 1 && r.parent) {
    let u = qe(r.parent) ? 0 : 1;
    ye(o, o.level - u);
  }
  o.level -= l;
}
function Gg(e2, t) {
  let { out: n, config: r } = t;
  if (e2.name) {
    let i = r.options["markup.attributes"], o = r.options["markup.valuePrefix"], { name: s, value: a } = e2, l = Rn(e2, r, true), u = Rn(e2, r);
    i && (s = Ul(s, i, e2.multiple) || s), s = bu(s, r), r.options["jsx.enabled"] && e2.multiple && (l = Ui, u = Bi);
    let c = o ? Ul(e2.name, o, e2.multiple) : null;
    if (c && a?.length === 1 && typeof a[0] == "string") {
      let f = a[0];
      a = [Xg(f) ? `${c}.${f}` : `${c}['${f}']`], r.options["jsx.enabled"] && (l = Ui, u = Bi);
    }
    vu(e2, r) && !a ? r.options["output.compactBoolean"] || (a = [s]) : a || (a = Bn), L(n, " " + s), a ? (L(n, "=" + l), ce(a, t), L(n, u)) : r.options["output.selfClosingStyle"] !== "html" && L(n, "=" + l + u);
  }
}
function Dl(e2, t, n) {
  if (e2.value && e2.children.length) {
    let r = e2.value.findIndex(Iu);
    if (r !== -1) {
      ce(e2.value.slice(0, r), t);
      let i = t.out.line, o = r + 1;
      return e2.children.forEach(n), t.out.line !== i && typeof e2.value[o] == "string" && L(t.out, e2.value[o++].trimLeft()), ce(e2.value.slice(o), t), true;
    }
  }
  return false;
}
function ju(e2, t, n, r) {
  let { config: i, parent: o } = r;
  if (!i.options["output.format"] || t === 0 && !o || o && qe(o) && n.length === 1) return false;
  if (qe(e2) && (qe(n[t - 1]) || qe(n[t + 1]) || e2.value.some(Fu) || e2.value.some(Iu) && e2.children.length)) return true;
  if (lt(e2, i)) {
    if (t === 0) {
      for (let s = 0; s < n.length; s++) if (!lt(n[s], i)) return true;
    } else if (!lt(n[t - 1], i)) return true;
    if (i.options["output.inlineBreak"]) {
      let s = 1, a = t, l = t;
      for (; Fl(n[--a], i); ) s++;
      for (; Fl(n[++l], i); ) s++;
      if (s >= i.options["output.inlineBreak"]) return true;
    }
    for (let s = 0, a = e2.children.length; s < a; s++) if (ju(e2.children[s], s, e2.children, r)) return true;
    return false;
  }
  return true;
}
function Qg(e2) {
  let { config: t, parent: n } = e2;
  return !n || qe(n) || n.name && t.options["output.formatSkip"].includes(n.name) ? 0 : 1;
}
function Fu(e2) {
  return typeof e2 == "string" && /\r|\n/.test(e2);
}
function Jg(e2, t) {
  if (e2.length && typeof e2[0] == "string") {
    let n = Vg.exec(e2[0]);
    if (n?.length && !t.options.inlineElements.includes(n[1].toLowerCase())) return true;
  }
  return false;
}
function Ul(e2, t, n) {
  return n && t[`${e2}*`] || t[e2];
}
function Xg(e2) {
  return !Hg.has(e2) && /^[a-zA-Z_$][\w_$]*$/.test(e2);
}
function eo(e2, t, n) {
  let r = Pu(t);
  return r.options = n || {}, Nu(e2, Yg, r), r.out.value;
}
function Yg(e2, t, n, r, i) {
  let { out: o, options: s } = r, { primary: a, secondary: l } = Zg(e2), u = r.parent ? 1 : 0;
  o.level += u, ib(e2, t, n, r) && ye(o, true), e2.name && (e2.name !== "div" || !a.length) && L(o, (s.beforeName || "") + e2.name + (s.afterName || "")), Kg(a, r), eb(l.filter(Ou), r), e2.selfClosing && !e2.value && !e2.children.length ? r.options.selfClose && L(o, r.options.selfClose) : (tb(e2, r), e2.children.forEach(i)), o.level -= u;
}
function Zg(e2) {
  let t = [], n = [];
  if (e2.attributes) for (let r of e2.attributes) nb(r) ? t.push(r) : n.push(r);
  return { primary: t, secondary: n };
}
function Kg(e2, t) {
  for (let n of e2) if (n.value) if (n.name === "class") {
    L(t.out, ".");
    let r = n.value.map((i) => typeof i == "string" ? i.replace(/\s+/g, ".") : i);
    ce(r, t);
  } else L(t.out, "#"), ce(n.value, t);
}
function eb(e2, t) {
  if (e2.length) {
    let { out: n, config: r, options: i } = t;
    i.beforeAttribute && L(n, i.beforeAttribute);
    for (let o = 0; o < e2.length; o++) {
      let s = e2[o];
      L(n, bu(s.name || "", r)), vu(s, r) && !s.value ? !r.options["output.compactBoolean"] && i.booleanValue && L(n, "=" + i.booleanValue) : (L(n, "=" + Rn(s, r, true)), ce(s.value || Bn, t), L(n, Rn(s, r))), o !== e2.length - 1 && i.glueAttribute && L(n, i.glueAttribute);
    }
    i.afterAttribute && L(n, i.afterAttribute);
  }
}
function tb(e2, t) {
  if (!e2.value && e2.children.length) return;
  let n = e2.value || Bn, r = zg(n), { out: i, options: o } = t;
  if (r.length === 1) (e2.name || e2.attributes) && Y(i, " "), ce(n, t);
  else {
    let s = [], a = 0;
    for (let l of r) {
      let u = rb(l);
      s.push(u), u > a && (a = u);
    }
    i.level++;
    for (let l = 0; l < r.length; l++) ye(i, true), o.beforeTextLine && Y(i, o.beforeTextLine), ce(r[l], t), o.afterTextLine && (Y(i, " ".repeat(a - s[l])), Y(i, o.afterTextLine));
    i.level--;
  }
}
function nb(e2) {
  return e2.name === "class" || e2.name === "id";
}
function rb(e2) {
  let t = 0;
  for (let n of e2) t += typeof n == "string" ? n.length : n.name.length;
  return t;
}
function ib(e2, t, n, r) {
  return !r.parent && t === 0 ? false : !qe(e2);
}
function ob(e2, t) {
  return eo(e2, t, { beforeName: "%", beforeAttribute: "(", afterAttribute: ")", glueAttribute: " ", afterTextLine: " |", booleanValue: "true", selfClose: "/" });
}
function sb(e2, t) {
  return eo(e2, t, { beforeAttribute: " ", glueAttribute: " ", beforeTextLine: "| ", selfClose: "/" });
}
function ab(e2, t) {
  return eo(e2, t, { beforeAttribute: "(", afterAttribute: ")", glueAttribute: ", ", beforeTextLine: "| ", selfClose: t.options["output.selfClosingStyle"] === "xml" ? "/" : "" });
}
function to(e2, t) {
  let n;
  if (typeof e2 == "string") {
    let r = Object.assign({}, t);
    t.options["jsx.enabled"] && (r.jsx = true), t.options["markup.href"] && (r.href = true), e2 = su(e2, r), n = t.text, t.text = void 0;
  }
  return e2 = ag(e2, t), og(e2, ub, t), t.text = n ?? t.text, e2;
}
function no(e2, t) {
  return (lb[t.syntax] || Lu)(e2, t);
}
function ub(e2, t, n) {
  hg(e2, t, n), ng(e2, n), wg(e2, t, n), n.syntax === "xsl" && Cg(e2), n.type === "markup" && Fg(e2), n.options["bem.enabled"] && $g(e2, t, n);
}
function db(e2, t) {
  let n = t.match(cb);
  if (n) {
    let r = {}, i = n[2] ? n[2].split("|").map(mb) : [];
    for (let o of i) for (let s of o) bb(s, r);
    return { type: Ce.Property, key: e2, property: n[1], value: i, keywords: r, dependencies: [] };
  }
  return { type: Ce.Raw, key: e2, value: t };
}
function pb(e2) {
  e2 = e2.slice().sort(hb);
  let t = [], n;
  for (let r of e2.filter(gb)) {
    for (; t.length; ) {
      if (n = t[t.length - 1], r.property.startsWith(n.property) && r.property.charCodeAt(n.property.length) === 45) {
        n.dependencies.push(r), t.push(r);
        break;
      }
      t.pop();
    }
    t.length || t.push(r);
  }
  return e2;
}
function hb(e2, t) {
  return e2.key === t.key ? 0 : e2.key < t.key ? -1 : 1;
}
function mb(e2) {
  return pu(e2.trim(), fb)[0].value;
}
function gb(e2) {
  return e2.type === Ce.Property;
}
function bb(e2, t) {
  for (let n of e2.value) if (n.type === "Literal") t[n.value] = n;
  else if (n.type === "FunctionCall") t[n.name] = n;
  else if (n.type === "Field") {
    let r = n.name.trim();
    r && (t[r] = { type: "Literal", value: r });
  }
}
function vb(e2, t, n = false) {
  if (e2 = e2.toLowerCase(), t = t.toLowerCase(), e2 === t) return 1;
  if (!e2 || !t || e2.charCodeAt(0) !== t.charCodeAt(0)) return 0;
  let r = e2.length, i = t.length;
  if (!n && r > i) return 0;
  let o = Math.min(r, i), s = Math.max(r, i), a = 1, l = 1, u = s, c = 0, f = 0, h = false, p = false;
  for (; a < r; ) {
    for (c = e2.charCodeAt(a), h = false, p = false; l < i; ) {
      if (f = t.charCodeAt(l), c === f) {
        h = true, u += s - (p ? a : l);
        break;
      }
      p = f === 45, l++;
    }
    if (!h) {
      if (!n) return 0;
      break;
    }
    a++;
  }
  let k = a / s, x = s - o, w = Bl(s) - Bl(x);
  return u * k / w;
}
function Bl(e2) {
  return e2 * (e2 + 1) / 2;
}
function zu(e2, t) {
  return !e2.r && !e2.g && !e2.b && !e2.a ? "transparent" : e2.a === 1 ? xb(e2, t) : yb(e2);
}
function xb(e2, t) {
  let n = t && Li(e2.r) && Li(e2.g) && Li(e2.b) ? wb : kb;
  return "#" + n(e2.r) + n(e2.g) + n(e2.b);
}
function yb(e2) {
  let t = [e2.r, e2.g, e2.b];
  return e2.a !== 1 && t.push(Du(e2.a, 8)), `${t.length === 3 ? "rgb" : "rgba"}(${t.join(", ")})`;
}
function Du(e2, t = 4) {
  return e2.toFixed(t).replace(/\.?0+$/, "");
}
function Li(e2) {
  return !(e2 % 17);
}
function wb(e2) {
  return (e2 >> 4).toString(16);
}
function kb(e2) {
  return Sb(e2.toString(16), 2);
}
function Sb(e2, t) {
  for (; e2.length < t; ) e2 = "0" + e2;
  return e2;
}
function ro(e2, t) {
  var n;
  let r = gu(t.options), i = t.options["output.format"];
  ((n = t.context) === null || n === void 0 ? void 0 : n.name) === _n.Section && (e2 = e2.filter((o) => o.snippet));
  for (let o = 0; o < e2.length; o++) i && o !== 0 && ye(r, true), Tb(e2[o], r, t);
  return r.value;
}
function Tb(e2, t, n) {
  let r = n.options["stylesheet.json"];
  if (e2.name) {
    let i = r ? Cb(e2.name) : e2.name;
    L(t, i + n.options["stylesheet.between"]), e2.value.length ? Eb(e2, t, n) : Zi(t, 0, ""), r ? Y(t, ",") : (Ml(e2, t, true), Y(t, n.options["stylesheet.after"]));
  } else {
    for (let i of e2.value) for (let o of i.value) Bu(o, t, n);
    Ml(e2, t, e2.value.length > 0);
  }
}
function Eb(e2, t, n) {
  let r = n.options["stylesheet.json"], i = r ? Ab(e2) : null;
  if (i && (!i.unit || i.unit === "px")) Y(t, String(i.value));
  else {
    let o = Nb(n);
    r && Y(t, o);
    for (let s = 0; s < e2.value.length; s++) s !== 0 && Y(t, ", "), Uu(e2.value[s], t, n);
    r && Y(t, o);
  }
}
function Ml(e2, t, n) {
  e2.important && (n && Y(t, " "), Y(t, "!important"));
}
function Uu(e2, t, n) {
  for (let r = 0, i = -1; r < e2.value.length; r++) {
    let o = e2.value[r];
    r !== 0 && (o.type !== "Field" || o.start !== i) && Y(t, " "), Bu(o, t, n), i = o.end;
  }
}
function Bu(e2, t, n) {
  if (e2.type === "ColorValue") Y(t, zu(e2, n.options["stylesheet.shortHex"]));
  else if (e2.type === "Literal" || e2.type === "CustomProperty") L(t, e2.value);
  else if (e2.type === "NumberValue") L(t, Du(e2.value, 4) + e2.unit);
  else if (e2.type === "StringValue") {
    let r = e2.quote === "double" ? '"' : "'";
    L(t, r + e2.value + r);
  } else if (e2.type === "Field") Zi(t, e2.index, e2.name);
  else if (e2.type === "FunctionCall") {
    Y(t, e2.name + "(");
    for (let r = 0; r < e2.arguments.length; r++) r && Y(t, ", "), Uu(e2.arguments[r], t, n);
    Y(t, ")");
  }
}
function Ab(e2) {
  if (e2.value.length === 1) {
    let t = e2.value[0];
    if (t.value.length === 1 && t.value[0].type === "NumberValue") return t.value[0];
  }
}
function Cb(e2) {
  return e2.replace(/\-(\w)/g, (t, n) => n.toUpperCase());
}
function Nb(e2) {
  return e2.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
function io(e2, t) {
  var n;
  let r = ((n = t.cache) === null || n === void 0 ? void 0 : n.stylesheetSnippets) || Pb(t.snippets), i = [];
  t.cache && (t.cache.stylesheetSnippets = r), typeof e2 == "string" && (e2 = pu(e2, { value: Hu(t) }));
  let o = Fb(r, t);
  for (let s of e2) {
    let a = Ib(s, o, t);
    a && i.push(a);
  }
  return i;
}
function Pb(e2) {
  let t = [];
  for (let n of Object.keys(e2)) t.push(db(n, e2[n]));
  return pb(t);
}
function Ib(e2, t, n) {
  if (!Ob(e2, n)) {
    let r = n.options["stylesheet.fuzzySearchMinScore"];
    if (Hu(n)) {
      let i = n.context.name, o = t.find((s) => s.type === Ce.Property && s.property === i);
      Mu(e2, n, o, r), e2.snippet = o;
    } else if (e2.name) {
      let i = Nn(e2.name, t, r, true);
      if (e2.snippet = i, i) {
        let o = i.type === Ce.Property ? $b(e2, i, n) : Rb(e2, i);
        if (o) e2 = o;
        else if (n.options["stylesheet.strictMatch"]) return null;
      }
    }
  }
  return (e2.name || n.context) && jb(e2, n), e2;
}
function Ob(e2, t) {
  let n = null, r = e2.value.length === 1 ? e2.value[0] : null;
  if (r && r.value.length === 1) {
    let i = r.value[0];
    i.type === "FunctionCall" && i.name === ql && (n = i);
  }
  return n || e2.name === ql ? (n ? n = Object.assign(Object.assign({}, n), { name: "linear-gradient" }) : n = { type: "FunctionCall", name: "linear-gradient", arguments: [Ln(Me(0, ""))] }, t.context || (e2.name = "background-image"), e2.value = [Ln(n)], true) : false;
}
function $b(e2, t, n) {
  let r = e2.name, i = Lb(r, t.key);
  if (i) {
    if (e2.value.length) return null;
    let o = Mi(i, n, t);
    if (!o) return null;
    e2.value.push(Ln(o));
  }
  if (e2.name = t.property, e2.value.length) Mu(e2, n, t);
  else if (t.value.length) {
    let o = t.value[0];
    e2.value = t.value.length === 1 || o.some(qu) ? o : o.map((s) => Vu(s, n));
  }
  return e2;
}
function Mu(e2, t, n, r) {
  for (let i of e2.value) {
    let o = [];
    for (let s of i.value) if (s.type === "Literal") o.push(Mi(s.value, t, n, r) || s);
    else if (s.type === "FunctionCall") {
      let a = Mi(s.name, t, n, r);
      a && a.type === "FunctionCall" ? o.push(Object.assign(Object.assign({}, a), { arguments: s.arguments.concat(a.arguments.slice(s.arguments.length)) })) : o.push(s);
    } else o.push(s);
    i.value = o;
  }
}
function Rb(e2, t) {
  let n = 0, r, i = /\$\{(\d+)(:[^}]+)?\}/g, o = e2.value[0], s = [];
  for (; r = i.exec(t.value); ) n !== r.index && s.push(ut(t.value.slice(n, r.index))), n = r.index + r[0].length, o && o.value.length ? s.push(o.value.shift()) : s.push(Me(Number(r[1]), r[2] ? r[2].slice(1) : ""));
  let a = t.value.slice(n);
  return a && s.push(ut(a)), e2.name = void 0, e2.value = [Ln(...s)], e2;
}
function Nn(e2, t, n = 0, r = false) {
  let i = null, o = 0;
  for (let s of t) {
    let a = vb(e2, _b(s), r);
    if (a === 1) return s;
    a && a >= o && (o = a, i = s);
  }
  return o >= n ? i : null;
}
function _b(e2) {
  return typeof e2 == "string" ? e2 : e2.key;
}
function Lb(e2, t) {
  for (let n = 0, r = 0; n < e2.length; n++) {
    if (r = t.indexOf(e2[n], r), r === -1) return e2.slice(n);
    r++;
  }
  return "";
}
function Mi(e2, t, n, r) {
  let i;
  if (n) {
    if (i = Nn(e2, Object.keys(n.keywords), r)) return n.keywords[i];
    for (let o of n.dependencies) if (i = Nn(e2, Object.keys(o.keywords), r)) return o.keywords[i];
  }
  return (i = Nn(e2, t.options["stylesheet.keywords"], r)) ? ut(i) : null;
}
function jb(e2, t) {
  let n = t.options["stylesheet.unitAliases"], r = t.options["stylesheet.unitless"];
  for (let i of e2.value) for (let o of i.value) o.type === "NumberValue" && (o.unit ? o.unit = n[o.unit] || o.unit : o.value !== 0 && !r.includes(e2.name) && (o.unit = o.rawValue.includes(".") ? t.options["stylesheet.floatUnit"] : t.options["stylesheet.intUnit"]));
}
function Ln(...e2) {
  return { type: "CSSValue", value: e2 };
}
function ut(e2) {
  return { type: "Literal", value: e2 };
}
function Me(e2, t) {
  return { type: "Field", index: e2, name: t };
}
function qu(e2) {
  for (let t of e2.value) if (t.type === "Field" || t.type === "FunctionCall" && t.arguments.some(qu)) return true;
  return false;
}
function Vu(e2, t, n = { index: 1 }) {
  let r = [];
  for (let i of e2.value) switch (i.type) {
    case "ColorValue":
      r.push(Me(n.index++, zu(i, t.options["stylesheet.shortHex"])));
      break;
    case "Literal":
      r.push(Me(n.index++, i.value));
      break;
    case "NumberValue":
      r.push(Me(n.index++, `${i.value}${i.unit}`));
      break;
    case "StringValue":
      let o = i.quote === "single" ? "'" : '"';
      r.push(Me(n.index++, o + i.value + o));
      break;
    case "FunctionCall":
      r.push(Me(n.index++, i.name), ut("("));
      for (let s = 0, a = i.arguments.length; s < a; s++) r = r.concat(Vu(i.arguments[s], t, n).value), s !== a - 1 && r.push(ut(", "));
      r.push(ut(")"));
      break;
    default:
      r.push(i);
  }
  return Object.assign(Object.assign({}, e2), { value: r });
}
function Hu(e2) {
  return e2.context ? e2.context.name === _n.Value || !e2.context.name.startsWith("@@") : false;
}
function Fb(e2, t) {
  if (t.context) {
    if (t.context.name === _n.Section) return e2.filter((n) => n.type === Ce.Raw);
    if (t.context.name === _n.Property) return e2.filter((n) => n.type === Ce.Property);
  }
  return e2;
}
function Cn(e2) {
  let t = {};
  return Object.keys(e2).forEach((n) => {
    for (let r of n.split("|")) t[r] = e2[n];
  }), t;
}
function Bt(e2 = {}, t = {}) {
  let n = e2.type || "markup", r = e2.syntax || qb[n];
  return Object.assign(Object.assign(Object.assign({}, Wu), e2), { type: n, syntax: r, variables: ji(n, r, "variables", e2, t), snippets: ji(n, r, "snippets", e2, t), options: ji(n, r, "options", e2, t) });
}
function ji(e2, t, n, r, i = {}) {
  let o = Vl[e2], s = i[e2], a = Vl[t], l = i[t];
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wu[n]), o && o[n]), a && a[n]), s && s[n]), l && l[n]), r[n]);
}
function Gu(e2, t = 0) {
  return { text: e2, start: t, pos: e2.length };
}
function Ne(e2) {
  return e2.pos === e2.start;
}
function Dt(e2, t = 0) {
  return e2.text.charCodeAt(e2.pos - 1 + t);
}
function Hl(e2) {
  if (!Ne(e2)) return e2.text.charCodeAt(--e2.pos);
}
function ae(e2, t) {
  if (Ne(e2)) return false;
  let n = typeof t == "function" ? t(Dt(e2)) : t === Dt(e2);
  return n && e2.pos--, !!n;
}
function Qu(e2, t) {
  let n = e2.pos;
  for (; ae(e2, t); ) ;
  return e2.pos < n;
}
function oo(e2) {
  return e2 === Ut.SingleQuote || e2 === Ut.DoubleQuote;
}
function Hb(e2) {
  let t = e2.pos, n = Hl(e2);
  if (oo(n)) {
    for (; !Ne(e2); ) if (Hl(e2) === n && Dt(e2) !== Ut.Escape) return true;
  }
  return e2.pos = t, false;
}
function Wb(e2) {
  let t = e2.pos;
  if (!ae(e2, re.AngleRight)) return false;
  let n = false;
  for (ae(e2, re.Slash); !Ne(e2); ) {
    if (Qu(e2, qi), jn(e2)) {
      if (ae(e2, re.Slash)) {
        n = ae(e2, re.AngleLeft);
        break;
      } else if (ae(e2, re.AngleLeft)) {
        n = true;
        break;
      } else {
        if (ae(e2, qi)) continue;
        if (ae(e2, re.Equals)) {
          if (jn(e2)) continue;
          break;
        } else if (Xu(e2)) {
          n = true;
          break;
        }
      }
      break;
    }
    if (!Gb(e2)) break;
  }
  return e2.pos = t, n;
}
function Gb(e2) {
  return Qb(e2) || Xu(e2);
}
function Qb(e2) {
  let t = e2.pos;
  return Hb(e2) && ae(e2, re.Equals) && jn(e2) ? true : (e2.pos = t, false);
}
function Xu(e2) {
  let t = e2.pos, n = [];
  for (; !Ne(e2); ) {
    let r = Dt(e2);
    if (ev(r)) n.push(r);
    else if (Kb(r)) {
      if (n.pop() !== Ju[r]) break;
    } else if (!Zb(r)) break;
    e2.pos--;
  }
  return t !== e2.pos && ae(e2, re.Equals) && jn(e2) ? true : (e2.pos = t, false);
}
function jn(e2) {
  return Qu(e2, Jb);
}
function Jb(e2) {
  return e2 === re.Colon || e2 === re.Dash || Xb(e2) || Yb(e2);
}
function Xb(e2) {
  return e2 &= -33, e2 >= 65 && e2 <= 90;
}
function Yb(e2) {
  return e2 > 47 && e2 < 58;
}
function qi(e2) {
  return e2 === re.Space || e2 === re.Tab;
}
function Zb(e2) {
  return !isNaN(e2) && e2 !== re.Equals && !qi(e2) && !oo(e2);
}
function Kb(e2) {
  return e2 === _.CurlyL || e2 === _.RoundL || e2 === _.SquareL;
}
function ev(e2) {
  return e2 === _.CurlyR || e2 === _.RoundR || e2 === _.SquareR;
}
function so(e2, t = e2.length, n = {}) {
  let r = Object.assign(Object.assign({}, nv), n);
  t = Math.min(e2.length, Math.max(0, t ?? e2.length)), r.lookAhead && (t = rv(e2, t, r));
  let i, o = iv(e2, t, r.prefix || "");
  if (o === -1) return;
  let s = Gu(e2, o);
  s.pos = t;
  let a = [];
  for (; !Ne(s); ) {
    if (i = Dt(s), a.includes(_.CurlyR)) {
      if (i === _.CurlyR) {
        a.push(i), s.pos--;
        continue;
      }
      if (i !== _.CurlyL) {
        s.pos--;
        continue;
      }
    }
    if (Zu(i, r.type)) a.push(i);
    else if (av(i, r.type)) {
      if (a.pop() !== Ju[i]) break;
    } else if (a.includes(_.SquareR) || a.includes(_.CurlyR)) {
      s.pos--;
      continue;
    } else if (Wb(s) || !sv(i)) break;
    s.pos--;
  }
  if (!a.length && s.pos !== t) {
    let l = e2.slice(s.pos, t).replace(/^[*+>^]+/, "");
    return { abbreviation: l, location: t - l.length, start: n.prefix ? o - n.prefix.length : t - l.length, end: t };
  }
}
function rv(e2, t, n) {
  for (oo(e2.charCodeAt(t)) && t++; Zu(e2.charCodeAt(t), n.type); ) t++;
  return t;
}
function iv(e2, t, n) {
  if (!n) return 0;
  let r = Gu(e2), i = n.split("").map(Yu);
  r.pos = t;
  let o;
  for (; !Ne(r); ) if (!(Wl(r, _.SquareR, _.SquareL) || Wl(r, _.CurlyR, _.CurlyL))) {
    if (o = r.pos, ov(r, i)) return o;
    r.pos--;
  }
  return -1;
}
function Wl(e2, t, n) {
  let r = e2.pos;
  if (ae(e2, t)) for (; !Ne(e2); ) {
    if (ae(e2, n)) return true;
    e2.pos--;
  }
  return e2.pos = r, false;
}
function ov(e2, t) {
  let n = e2.pos, r = false;
  for (let i = t.length - 1; i >= 0 && !Ne(e2) && ae(e2, t[i]); i--) r = i === 0;
  return r || (e2.pos = n), r;
}
function sv(e2) {
  return e2 > 64 && e2 < 91 || e2 > 96 && e2 < 123 || e2 > 47 && e2 < 58 || tv.includes(e2);
}
function av(e2, t) {
  return e2 === _.RoundL || t === "markup" && (e2 === _.SquareL || e2 === _.CurlyL);
}
function Zu(e2, t) {
  return e2 === _.RoundR || t === "markup" && (e2 === _.SquareR || e2 === _.CurlyR);
}
function Mt(e2, t) {
  let n = Bt(t);
  return n.type === "stylesheet" ? uv(e2, n) : lv(e2, n);
}
function lv(e2, t) {
  return no(to(e2, t), t);
}
function uv(e2, t) {
  return ro(io(e2, t), t);
}
var Pn, Ft, N, xm, Al, ym, wm, ue, $, Ui, Bi, pg, bg, vg, xg, Ol, yg, ku, Su, Ig, Og, Bn, Ve, Vg, Hg, lb, Ce, cb, fb, _n, ql, zb, Db, Ub, Bb, Mb, qb, Vb, Wu, Vl, Ut, _, Ju, re, Yu, tv, nv, Ku = W(() => {
  Pn = class e2 {
    constructor(t, n, r) {
      r == null && typeof t == "string" && (r = t.length), this.string = t, this.pos = this.start = n || 0, this.end = r || 0;
    }
    eof() {
      return this.pos >= this.end;
    }
    limit(t, n) {
      return new e2(this.string, t, n);
    }
    peek() {
      return this.string.charCodeAt(this.pos);
    }
    next() {
      if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
    }
    eat(t) {
      let n = this.peek(), r = typeof t == "function" ? t(n) : n === t;
      return r && this.next(), r;
    }
    eatWhile(t) {
      let n = this.pos;
      for (; !this.eof() && this.eat(t); ) ;
      return this.pos !== n;
    }
    backUp(t) {
      this.pos -= t || 1;
    }
    current() {
      return this.substring(this.start, this.pos);
    }
    substring(t, n) {
      return this.string.slice(t, n);
    }
    error(t, n = this.pos) {
      return new Ft(`${t} at ${n + 1}`, n, this.string);
    }
  }, Ft = class extends Error {
    constructor(t, n, r) {
      super(t), this.pos = n, this.string = r;
    }
  };
  (function(e2) {
    e2[e2.CurlyBracketOpen = 123] = "CurlyBracketOpen", e2[e2.CurlyBracketClose = 125] = "CurlyBracketClose", e2[e2.Escape = 92] = "Escape", e2[e2.Equals = 61] = "Equals", e2[e2.SquareBracketOpen = 91] = "SquareBracketOpen", e2[e2.SquareBracketClose = 93] = "SquareBracketClose", e2[e2.Asterisk = 42] = "Asterisk", e2[e2.Hash = 35] = "Hash", e2[e2.Dollar = 36] = "Dollar", e2[e2.Dash = 45] = "Dash", e2[e2.Dot = 46] = "Dot", e2[e2.Slash = 47] = "Slash", e2[e2.Colon = 58] = "Colon", e2[e2.Excl = 33] = "Excl", e2[e2.At = 64] = "At", e2[e2.Underscore = 95] = "Underscore", e2[e2.RoundBracketOpen = 40] = "RoundBracketOpen", e2[e2.RoundBracketClose = 41] = "RoundBracketClose", e2[e2.Sibling = 43] = "Sibling", e2[e2.Child = 62] = "Child", e2[e2.Climb = 94] = "Climb", e2[e2.SingleQuote = 39] = "SingleQuote", e2[e2.DoubleQuote = 34] = "DoubleQuote";
  })(N || (N = {}));
  xm = { child: ">", class: ".", climb: "^", id: "#", equal: "=", close: "/", sibling: "+" }, Al = { Literal(e2) {
    return e2.value;
  }, Quote(e2) {
    return e2.single ? "'" : '"';
  }, Bracket(e2) {
    return e2.context === "attribute" ? e2.open ? "[" : "]" : e2.context === "expression" ? e2.open ? "{" : "}" : e2.open ? "(" : "}";
  }, Operator(e2) {
    return xm[e2.operator];
  }, Field(e2, t) {
    return e2.index != null ? e2.name ? `\${${e2.index}:${e2.name}}` : `\${${e2.index}` : e2.name ? t.getVariable(e2.name) : "";
  }, RepeaterPlaceholder(e2, t) {
    let n;
    for (let r = t.repeaters.length - 1; r >= 0; r--) if (t.repeaters[r].implicit) {
      n = t.repeaters[r];
      break;
    }
    return t.inserted = true, t.getText(n && n.value);
  }, RepeaterNumber(e2, t) {
    let n = 1, r = t.repeaters.length - 1, i = t.repeaters[r];
    if (i && (n = e2.reverse ? e2.base + i.count - i.value - 1 : e2.base + i.value, e2.parent)) {
      let s = Math.max(0, r - e2.parent);
      if (s !== r) {
        let a = t.repeaters[s];
        n += i.count * a.value;
      }
    }
    let o = String(n);
    for (; o.length < e2.size; ) o = "0" + o;
    return o;
  }, WhiteSpace(e2) {
    return e2.value;
  } };
  ym = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/, wm = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
  (function(e2) {
    e2.Sibling = "+", e2.Important = "!", e2.ArgumentDelimiter = ",", e2.ValueDelimiter = "-", e2.PropertyDelimiter = ":";
  })(ue || (ue = {}));
  (function(e2) {
    e2[e2.Hash = 35] = "Hash", e2[e2.Dollar = 36] = "Dollar", e2[e2.Dash = 45] = "Dash", e2[e2.Dot = 46] = "Dot", e2[e2.Colon = 58] = "Colon", e2[e2.Comma = 44] = "Comma", e2[e2.Excl = 33] = "Excl", e2[e2.At = 64] = "At", e2[e2.Percent = 37] = "Percent", e2[e2.Underscore = 95] = "Underscore", e2[e2.RoundBracketOpen = 40] = "RoundBracketOpen", e2[e2.RoundBracketClose = 41] = "RoundBracketClose", e2[e2.CurlyBracketOpen = 123] = "CurlyBracketOpen", e2[e2.CurlyBracketClose = 125] = "CurlyBracketClose", e2[e2.Sibling = 43] = "Sibling", e2[e2.SingleQuote = 39] = "SingleQuote", e2[e2.DoubleQuote = 34] = "DoubleQuote", e2[e2.Transparent = 116] = "Transparent", e2[e2.Slash = 47] = "Slash";
  })($ || ($ = {}));
  Ui = "{", Bi = "}";
  pg = { p: "span", ul: "li", ol: "li", table: "tr", tr: "td", tbody: "tr", thead: "tr", tfoot: "tr", colgroup: "col", select: "option", optgroup: "option", audio: "source", video: "source", object: "param", map: "area" };
  bg = { common: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"], words: ["exercitationem", "perferendis", "perspiciatis", "laborum", "eveniet", "sunt", "iure", "nam", "nobis", "eum", "cum", "officiis", "excepturi", "odio", "consectetur", "quasi", "aut", "quisquam", "vel", "eligendi", "itaque", "non", "odit", "tempore", "quaerat", "dignissimos", "facilis", "neque", "nihil", "expedita", "vitae", "vero", "ipsum", "nisi", "animi", "cumque", "pariatur", "velit", "modi", "natus", "iusto", "eaque", "sequi", "illo", "sed", "ex", "et", "voluptatibus", "tempora", "veritatis", "ratione", "assumenda", "incidunt", "nostrum", "placeat", "aliquid", "fuga", "provident", "praesentium", "rem", "necessitatibus", "suscipit", "adipisci", "quidem", "possimus", "voluptas", "debitis", "sint", "accusantium", "unde", "sapiente", "voluptate", "qui", "aspernatur", "laudantium", "soluta", "amet", "quo", "aliquam", "saepe", "culpa", "libero", "ipsa", "dicta", "reiciendis", "nesciunt", "doloribus", "autem", "impedit", "minima", "maiores", "repudiandae", "ipsam", "obcaecati", "ullam", "enim", "totam", "delectus", "ducimus", "quis", "voluptates", "dolores", "molestiae", "harum", "dolorem", "quia", "voluptatem", "molestias", "magni", "distinctio", "omnis", "illum", "dolorum", "voluptatum", "ea", "quas", "quam", "corporis", "quae", "blanditiis", "atque", "deserunt", "laboriosam", "earum", "consequuntur", "hic", "cupiditate", "quibusdam", "accusamus", "ut", "rerum", "error", "minus", "eius", "ab", "ad", "nemo", "fugit", "officia", "at", "in", "id", "quos", "reprehenderit", "numquam", "iste", "fugiat", "sit", "inventore", "beatae", "repellendus", "magnam", "recusandae", "quod", "explicabo", "doloremque", "aperiam", "consequatur", "asperiores", "commodi", "optio", "dolor", "labore", "temporibus", "repellat", "veniam", "architecto", "est", "esse", "mollitia", "nulla", "a", "similique", "eos", "alias", "dolore", "tenetur", "deleniti", "porro", "facere", "maxime", "corrupti"] }, vg = { common: ["далеко-далеко", "за", "словесными", "горами", "в стране", "гласных", "и согласных", "живут", "рыбные", "тексты"], words: ["вдали", "от всех", "они", "буквенных", "домах", "на берегу", "семантика", "большого", "языкового", "океана", "маленький", "ручеек", "даль", "журчит", "по всей", "обеспечивает", "ее", "всеми", "необходимыми", "правилами", "эта", "парадигматическая", "страна", "которой", "жаренные", "предложения", "залетают", "прямо", "рот", "даже", "всемогущая", "пунктуация", "не", "имеет", "власти", "над", "рыбными", "текстами", "ведущими", "безорфографичный", "образ", "жизни", "однажды", "одна", "маленькая", "строчка", "рыбного", "текста", "имени", "lorem", "ipsum", "решила", "выйти", "большой", "мир", "грамматики", "великий", "оксмокс", "предупреждал", "о", "злых", "запятых", "диких", "знаках", "вопроса", "коварных", "точках", "запятой", "но", "текст", "дал", "сбить", "себя", "толку", "он", "собрал", "семь", "своих", "заглавных", "букв", "подпоясал", "инициал", "за", "пояс", "пустился", "дорогу", "взобравшись", "первую", "вершину", "курсивных", "гор", "бросил", "последний", "взгляд", "назад", "силуэт", "своего", "родного", "города", "буквоград", "заголовок", "деревни", "алфавит", "подзаголовок", "своего", "переулка", "грустный", "реторический", "вопрос", "скатился", "его", "щеке", "продолжил", "свой", "путь", "дороге", "встретил", "рукопись", "она", "предупредила", "моей", "все", "переписывается", "несколько", "раз", "единственное", "что", "меня", "осталось", "это", "приставка", "возвращайся", "ты", "лучше", "свою", "безопасную", "страну", "послушавшись", "рукописи", "наш", "продолжил", "свой", "путь", "вскоре", "ему", "повстречался", "коварный", "составитель", "рекламных", "текстов", "напоивший", "языком", "речью", "заманивший", "свое", "агентство", "которое", "использовало", "снова", "снова", "своих", "проектах", "если", "переписали", "то", "живет", "там", "до", "сих", "пор"] }, xg = { common: ["mujer", "uno", "dolor", "más", "de", "poder", "mismo", "si"], words: ["ejercicio", "preferencia", "perspicacia", "laboral", "paño", "suntuoso", "molde", "namibia", "planeador", "mirar", "demás", "oficinista", "excepción", "odio", "consecuencia", "casi", "auto", "chicharra", "velo", "elixir", "ataque", "no", "odio", "temporal", "cuórum", "dignísimo", "facilismo", "letra", "nihilista", "expedición", "alma", "alveolar", "aparte", "león", "animal", "como", "paria", "belleza", "modo", "natividad", "justo", "ataque", "séquito", "pillo", "sed", "ex", "y", "voluminoso", "temporalidad", "verdades", "racional", "asunción", "incidente", "marejada", "placenta", "amanecer", "fuga", "previsor", "presentación", "lejos", "necesariamente", "sospechoso", "adiposidad", "quindío", "pócima", "voluble", "débito", "sintió", "accesorio", "falda", "sapiencia", "volutas", "queso", "permacultura", "laudo", "soluciones", "entero", "pan", "litro", "tonelada", "culpa", "libertario", "mosca", "dictado", "reincidente", "nascimiento", "dolor", "escolar", "impedimento", "mínima", "mayores", "repugnante", "dulce", "obcecado", "montaña", "enigma", "total", "deletéreo", "décima", "cábala", "fotografía", "dolores", "molesto", "olvido", "paciencia", "resiliencia", "voluntad", "molestias", "magnífico", "distinción", "ovni", "marejada", "cerro", "torre", "y", "abogada", "manantial", "corporal", "agua", "crepúsculo", "ataque", "desierto", "laboriosamente", "angustia", "afortunado", "alma", "encefalograma", "materialidad", "cosas", "o", "renuncia", "error", "menos", "conejo", "abadía", "analfabeto", "remo", "fugacidad", "oficio", "en", "almácigo", "vos", "pan", "represión", "números", "triste", "refugiado", "trote", "inventor", "corchea", "repelente", "magma", "recusado", "patrón", "explícito", "paloma", "síndrome", "inmune", "autoinmune", "comodidad", "ley", "vietnamita", "demonio", "tasmania", "repeler", "apéndice", "arquitecto", "columna", "yugo", "computador", "mula", "a", "propósito", "fantasía", "alias", "rayo", "tenedor", "deleznable", "ventana", "cara", "anemia", "corrupto"] }, Ol = { ru: vg, sp: xg, latin: bg }, yg = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
  ku = /^(-+)([a-z0-9]+[a-z0-9-]*)/i, Su = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i, Ig = (e2) => /^[a-z]\-/i.test(e2), Og = (e2) => /^[a-z]/i.test(e2);
  Bn = [{ type: "Field", index: 0, name: "" }];
  (function(e2) {
    e2[e2.Start = 91] = "Start", e2[e2.End = 93] = "End", e2[e2.Underscore = 95] = "Underscore", e2[e2.Dash = 45] = "Dash";
  })(Ve || (Ve = {}));
  Vg = /^<([\w\-:]+)[\s>]/, Hg = /* @__PURE__ */ new Set(["for", "while", "of", "async", "await", "const", "let", "var", "continue", "break", "debugger", "do", "export", "import", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "catch", "typeof", "void", "with", "yield"]);
  lb = { html: Lu, haml: ob, slim: sb, pug: ab };
  (function(e2) {
    e2.Raw = "Raw", e2.Property = "Property";
  })(Ce || (Ce = {}));
  cb = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/, fb = { value: true };
  _n = { Global: "@@global", Section: "@@section", Property: "@@property", Value: "@@value" };
  ql = "lg";
  zb = { a: "a[href]", "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']", "a:link": "a[href='http://${0}']", "a:mail": "a[href='mailto:${0}']", "a:tel": "a[href='tel:+${0}']", abbr: "abbr[title]", "acr|acronym": "acronym[title]", base: "base[href]/", basefont: "basefont/", br: "br/", frame: "frame/", hr: "hr/", bdo: "bdo[dir]", "bdo:r": "bdo[dir=rtl]", "bdo:l": "bdo[dir=ltr]", col: "col/", link: "link[rel=stylesheet href]/", "link:css": "link[href='${1:style}.css']", "link:print": "link[href='${1:print}.css' media=print]", "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']", "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']", "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']", "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']", "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']", "link:im|link:import": "link[rel=import href='${1:component}.html']", meta: "meta/", "meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']", "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']", "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']", "meta:edge": "meta:compat[content='${1:ie=edge}']", "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']", "meta:refresh": "meta[http-equiv=refresh content='${1:5}']", "meta:kw": "meta[name=keywords content]", "meta:desc": "meta[name=description content]", style: "style", script: "script", "script:src": "script[src]", "script:module": "script[type=module src]", img: "img[src alt]/", "img:s|img:srcset": "img[srcset src alt]", "img:z|img:sizes": "img[sizes srcset src alt]", picture: "picture", "src|source": "source/", "src:sc|source:src": "source[src type]", "src:s|source:srcset": "source[srcset]", "src:t|source:type": "source[srcset type='${1:image/}']", "src:z|source:sizes": "source[sizes srcset]", "src:m|source:media": "source[media='(${1:min-width: })' srcset]", "src:mt|source:media:type": "source:media[type='${2:image/}']", "src:mz|source:media:sizes": "source:media[sizes srcset]", "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']", iframe: "iframe[src frameborder=0]", embed: "embed[src type]/", object: "object[data type]", param: "param[name value]/", map: "map[name]", area: "area[shape coords href alt]/", "area:d": "area[shape=default]", "area:c": "area[shape=circle]", "area:r": "area[shape=rect]", "area:p": "area[shape=poly]", form: "form[action]", "form:get": "form[method=get]", "form:post": "form[method=post]", label: "label[for]", input: "input[type=${1:text}]/", inp: "input[name=${1} id=${1}]", "input:h|input:hidden": "input[type=hidden name]", "input:t|input:text": "inp[type=text]", "input:search": "inp[type=search]", "input:email": "inp[type=email]", "input:url": "inp[type=url]", "input:p|input:password": "inp[type=password]", "input:datetime": "inp[type=datetime]", "input:date": "inp[type=date]", "input:datetime-local": "inp[type=datetime-local]", "input:month": "inp[type=month]", "input:week": "inp[type=week]", "input:time": "inp[type=time]", "input:tel": "inp[type=tel]", "input:number": "inp[type=number]", "input:color": "inp[type=color]", "input:c|input:checkbox": "inp[type=checkbox]", "input:r|input:radio": "inp[type=radio]", "input:range": "inp[type=range]", "input:f|input:file": "inp[type=file]", "input:s|input:submit": "input[type=submit value]", "input:i|input:image": "input[type=image src alt]", "input:b|input:btn|input:button": "input[type=button value]", "input:reset": "input:button[type=reset]", isindex: "isindex/", select: "select[name=${1} id=${1}]", "select:d|select:disabled": "select[disabled.]", "opt|option": "option[value]", textarea: "textarea[name=${1} id=${1}]", "tarea:c|textarea:cols": "textarea[name=${1} id=${1} cols=${2:30}]", "tarea:r|textarea:rows": "textarea[name=${1} id=${1} rows=${3:10}]", "tarea:cr|textarea:cols:rows": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]", marquee: "marquee[behavior direction]", "menu:c|menu:context": "menu[type=context]", "menu:t|menu:toolbar": "menu[type=toolbar]", video: "video[src]", audio: "audio[src]", "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]", keygen: "keygen/", command: "command/", "btn:s|button:s|button:submit": "button[type=submit]", "btn:r|button:r|button:reset": "button[type=reset]", "btn:b|button:b|button:button": "button[type=button]", "btn:d|button:d|button:disabled": "button[disabled.]", "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]", bq: "blockquote", fig: "figure", figc: "figcaption", pic: "picture", ifr: "iframe", emb: "embed", obj: "object", cap: "caption", colg: "colgroup", fst: "fieldset", btn: "button", optg: "optgroup", tarea: "textarea", leg: "legend", sect: "section", art: "article", hdr: "header", ftr: "footer", adr: "address", dlg: "dialog", str: "strong", prog: "progress", mn: "main", tem: "template", fset: "fieldset", datal: "datalist", kg: "keygen", out: "output", det: "details", sum: "summary", cmd: "command", data: "data[value]", meter: "meter[value]", time: "time[datetime]", "ri:d|ri:dpr": "img:s", "ri:v|ri:viewport": "img:z", "ri:a|ri:art": "pic>src:m+img", "ri:t|ri:type": "pic>src:t+img", "!!!": "{<!DOCTYPE html>}", doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body", "!|html:5": "!!!+doc", c: "{<!-- ${0} -->}", "cc:ie": "{<!--[if IE]>${0}<![endif]-->}", "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}" }, Db = { "@f": `@font-face {
	font-family: \${1};
	src: url(\${2});
}`, "@ff": "@font-face {\n	font-family: '${1:FontName}';\n	src: url('${2:FileName}.eot');\n	src: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n		 url('${2:FileName}.woff') format('woff'),\n		 url('${2:FileName}.ttf') format('truetype'),\n		 url('${2:FileName}.svg#${1:FontName}') format('svg');\n	font-style: ${3:normal};\n	font-weight: ${4:normal};\n}", "@i|@import": "@import url(${0});", "@kf": "@keyframes ${1:identifier} {\n	${2}\n}", "@m|@media": "@media ${1:screen} {\n	${0}\n}", ac: "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly", ai: "align-items:start|end|flex-start|flex-end|center|baseline|stretch", anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}", animdel: "animation-delay:time", animdir: "animation-direction:normal|reverse|alternate|alternate-reverse", animdur: "animation-duration:${1:0}s", animfm: "animation-fill-mode:both|forwards|backwards", animic: "animation-iteration-count:1|infinite", animn: "animation-name", animps: "animation-play-state:running|paused", animtf: "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})", ap: "appearance:none", as: "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch", b: "bottom", bd: "border:${1:1px} ${2:solid} ${3:#000}", bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}", bdbc: "border-bottom-color:${1:#000}", bdbi: "border-bottom-image:url(${0})", bdbk: "border-break:close", bdbli: "border-bottom-left-image:url(${0})|continue", bdblrs: "border-bottom-left-radius", bdbri: "border-bottom-right-image:url(${0})|continue", bdbrrs: "border-bottom-right-radius", bdbs: "border-bottom-style", bdbw: "border-bottom-width", bdc: "border-color:${1:#000}", bdci: "border-corner-image:url(${0})|continue", bdcl: "border-collapse:collapse|separate", bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space", bdi: "border-image:url(${0})", bdl: "border-left:${1:1px} ${2:solid} ${3:#000}", bdlc: "border-left-color:${1:#000}", bdlen: "border-length", bdli: "border-left-image:url(${0})", bdls: "border-left-style", bdlw: "border-left-width", bdr: "border-right:${1:1px} ${2:solid} ${3:#000}", bdrc: "border-right-color:${1:#000}", bdri: "border-right-image:url(${0})", bdrs: "border-radius", bdrst: "border-right-style", bdrw: "border-right-width", bds: "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset", bdsp: "border-spacing", bdt: "border-top:${1:1px} ${2:solid} ${3:#000}", bdtc: "border-top-color:${1:#000}", bdti: "border-top-image:url(${0})", bdtli: "border-top-left-image:url(${0})|continue", bdtlrs: "border-top-left-radius", bdtri: "border-top-right-image:url(${0})|continue", bdtrrs: "border-top-right-radius", bdts: "border-top-style", bdtw: "border-top-width", bdw: "border-width", bbs: "border-block-start", bbe: "border-block-end", bis: "border-inline-start", bie: "border-inline-end", bfv: "backface-visibility:hidden|visible", bg: "background:${1:#000}", "bg:n": "background: none", bga: "background-attachment:fixed|scroll", bgbk: "background-break:bounding-box|each-box|continuous", bgc: "background-color:${1:#fff}", bgcp: "background-clip:padding-box|border-box|content-box|no-clip", bgi: "background-image:url(${0})", bgo: "background-origin:padding-box|border-box|content-box", bgp: "background-position:${1:0} ${2:0}", bgpx: "background-position-x", bgpy: "background-position-y", bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round", bgsz: "background-size:contain|cover", bs: "block-size", bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none", bxsz: "box-sizing:border-box|content-box|border-box", c: "color:${1:#000}", cg: "column-gap", cr: "color:rgb(${1:0}, ${2:0}, ${3:0})", cra: "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})", cl: "clear:both|left|right|none", cm: "/* ${0} */", cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})", coi: "counter-increment", colm: "columns", colmc: "column-count", colmf: "column-fill", colmg: "column-gap", colmr: "column-rule", colmrc: "column-rule-color", colmrs: "column-rule-style", colmrw: "column-rule-width", colms: "column-span", colmw: "column-width", cor: "counter-reset", cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})", cps: "caption-side:top|bottom", cur: "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text", d: "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|contents|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group", ec: "empty-cells:show|hide", f: "font:${1:1em} ${2:sans-serif}", fd: "font-display:auto|block|swap|fallback|optional", fef: "font-effect:none|engrave|emboss|outline", fem: "font-emphasize", femp: "font-emphasize-position:before|after", fems: "font-emphasize-style:none|accent|dot|circle|disc", ff: "font-family:serif|sans-serif|cursive|fantasy|monospace", fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif', ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif', ffv: "font-family:Verdana, Geneva, sans-serif", fl: "float:left|right|none", fs: "font-style:italic|normal|oblique", fsm: "font-smoothing:antialiased|subpixel-antialiased|none", fst: "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded", fv: "font-variant:normal|small-caps", fvs: "font-variation-settings:normal|inherit|initial|unset", fw: "font-weight:normal|bold|bolder|lighter", fx: "flex", fxb: "flex-basis:fill|max-content|min-content|fit-content|content", fxd: "flex-direction:row|row-reverse|column|column-reverse", fxf: "flex-flow", fxg: "flex-grow", fxsh: "flex-shrink", fxw: "flex-wrap:nowrap|wrap|wrap-reverse", fsz: "font-size", fsza: "font-size-adjust", g: "gap", gtc: "grid-template-columns:repeat(${0})|minmax()", gtr: "grid-template-rows:repeat(${0})|minmax()", gta: "grid-template-areas", gt: "grid-template", gg: "grid-gap", gcg: "grid-column-gap", grg: "grid-row-gap", gac: "grid-auto-columns:auto|minmax()", gar: "grid-auto-rows:auto|minmax()", gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset", gd: "grid", gc: "grid-column", gcs: "grid-column-start", gce: "grid-column-end", gr: "grid-row", grs: "grid-row-start", gre: "grid-row-end", ga: "grid-area", h: "height", is: "inline-size", jc: "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly", ji: "justify-items:start|end|center|stretch", js: "justify-self:start|end|center|stretch", l: "left", lg: "background-image:linear-gradient(${1})", lh: "line-height", lis: "list-style", lisi: "list-style-image", lisp: "list-style-position:inside|outside", list: "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman", lts: "letter-spacing:normal", m: "margin", mah: "max-height", mar: "max-resolution", maw: "max-width", mb: "margin-bottom", mih: "min-height", mir: "min-resolution", miw: "min-width", ml: "margin-left", mr: "margin-right", mt: "margin-top", mbs: "margin-block-start", mbe: "margin-block-end", mis: "margin-inline-start", mie: "margin-inline-end", ol: "outline", olc: "outline-color:${1:#000}|invert", olo: "outline-offset", ols: "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset", olw: "outline-width:thin|medium|thick", "op|opa": "opacity", ord: "order", ori: "orientation:landscape|portrait", orp: "orphans", ov: "overflow:hidden|visible|hidden|scroll|auto", ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee", ovx: "overflow-x:hidden|visible|hidden|scroll|auto", ovy: "overflow-y:hidden|visible|hidden|scroll|auto", p: "padding", pb: "padding-bottom", pgba: "page-break-after:auto|always|left|right", pgbb: "page-break-before:auto|always|left|right", pgbi: "page-break-inside:auto|avoid", pl: "padding-left", pos: "position:relative|absolute|relative|fixed|static", pr: "padding-right", pt: "padding-top", pbs: "padding-block-start", pbe: "padding-block-end", pis: "padding-inline-start", pie: "padding-inline-end", spbs: "scroll-padding-block-start", spbe: "scroll-padding-block-end", spis: "scroll-padding-inline-start", spie: "scroll-padding-inline-end", q: "quotes", qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'", qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'", r: "right", rg: "row-gap", rsz: "resize:none|both|horizontal|vertical", t: "top", ta: "text-align:left|center|right|justify", tal: "text-align-last:left|center|right", tbl: "table-layout:fixed", td: "text-decoration:none|underline|overline|line-through", te: "text-emphasis:none|accent|dot|circle|disc|before|after", th: "text-height:auto|font-size|text-size|max-size", ti: "text-indent", tj: "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan", to: "text-outline:${1:0} ${2:0} ${3:#000}", tov: "text-overflow:ellipsis|clip", tr: "text-replace", trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})", trfo: "transform-origin", trfs: "transform-style:preserve-3d", trs: "transition:${1:prop} ${2:time}", trsde: "transition-delay:${1:time}", trsdu: "transition-duration:${1:time}", trsp: "transition-property:${1:prop}", trstf: "transition-timing-function:${1:fn}", tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}", tt: "text-transform:uppercase|lowercase|capitalize|none", tw: "text-wrap:none|normal|unrestricted|suppress", us: "user-select:none", v: "visibility:hidden|visible|collapse", va: "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub", "w|wid": "width", whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal", whsc: "white-space-collapse:normal|keep-all|loose|break-strict|break-all", wido: "widows", wm: "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl", wob: "word-break:normal|keep-all|break-all", wos: "word-spacing", wow: "word-wrap:none|unrestricted|suppress|break-word|normal", z: "z-index", zom: "zoom:1" }, Ub = { "tm|tmatch": "xsl:template[match mode]", "tn|tname": "xsl:template[name]", call: "xsl:call-template[name]", ap: "xsl:apply-templates[select mode]", api: "xsl:apply-imports", imp: "xsl:import[href]", inc: "xsl:include[href]", ch: "xsl:choose", "wh|xsl:when": "xsl:when[test]", ot: "xsl:otherwise", if: "xsl:if[test]", par: "xsl:param[name]", pare: "xsl:param[name select]", var: "xsl:variable[name]", vare: "xsl:variable[name select]", wp: "xsl:with-param[name select]", key: "xsl:key[name match use]", elem: "xsl:element[name]", attr: "xsl:attribute[name]", attrs: "xsl:attribute-set[name]", cp: "xsl:copy[select]", co: "xsl:copy-of[select]", val: "xsl:value-of[select]", "for|each": "xsl:for-each[select]", tex: "xsl:text", com: "xsl:comment", msg: "xsl:message[terminate=no]", fall: "xsl:fallback", num: "xsl:number[value]", nam: "namespace-alias[stylesheet-prefix result-prefix]", pres: "xsl:preserve-space[elements]", strip: "xsl:strip-space[elements]", proc: "xsl:processing-instruction[name]", sort: "xsl:sort[select order]", choose: "xsl:choose>xsl:when+xsl:otherwise", xsl: `!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{
|}`, "!!!": '{<?xml version="1.0" encoding="UTF-8"?>}' }, Bb = { "!!!": "{doctype html}" }, Mb = { lang: "en", locale: "en-US", charset: "UTF-8", indentation: "	", newline: `
` }, qb = { markup: "html", stylesheet: "css" }, Vb = { inlineElements: ["a", "abbr", "acronym", "applet", "b", "basefont", "bdo", "big", "br", "button", "cite", "code", "del", "dfn", "em", "font", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "object", "q", "s", "samp", "select", "small", "span", "strike", "strong", "sub", "sup", "textarea", "tt", "u", "var"], "output.indent": "	", "output.baseIndent": "", "output.newline": `
`, "output.tagCase": "", "output.attributeCase": "", "output.attributeQuotes": "double", "output.format": true, "output.formatLeafNode": false, "output.formatSkip": ["html"], "output.formatForce": ["body"], "output.inlineBreak": 3, "output.compactBoolean": false, "output.booleanAttributes": ["contenteditable", "seamless", "async", "autofocus", "autoplay", "checked", "controls", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "novalidate", "readonly", "required", "reversed", "selected", "typemustmatch"], "output.reverseAttributes": false, "output.selfClosingStyle": "html", "output.field": (e2, t) => t, "output.text": (e2) => e2, "markup.href": true, "comment.enabled": false, "comment.trigger": ["id", "class"], "comment.before": "", "comment.after": `
<!-- /[#ID][.CLASS] -->`, "bem.enabled": false, "bem.element": "__", "bem.modifier": "_", "jsx.enabled": false, "stylesheet.keywords": ["auto", "inherit", "unset", "none"], "stylesheet.unitless": ["z-index", "line-height", "opacity", "font-weight", "zoom", "flex", "flex-grow", "flex-shrink"], "stylesheet.shortHex": true, "stylesheet.between": ": ", "stylesheet.after": ";", "stylesheet.intUnit": "px", "stylesheet.floatUnit": "em", "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" }, "stylesheet.json": false, "stylesheet.jsonDoubleQuotes": false, "stylesheet.fuzzySearchMinScore": 0, "stylesheet.strictMatch": false }, Wu = { type: "markup", syntax: "html", variables: Mb, snippets: {}, options: Vb }, Vl = { markup: { snippets: Cn(zb) }, xhtml: { options: { "output.selfClosingStyle": "xhtml" } }, xml: { options: { "output.selfClosingStyle": "xml" } }, xsl: { snippets: Cn(Ub), options: { "output.selfClosingStyle": "xml" } }, jsx: { options: { "jsx.enabled": true, "markup.attributes": { class: "className", "class*": "styleName", for: "htmlFor" }, "markup.valuePrefix": { "class*": "styles" } } }, vue: { options: { "markup.attributes": { "class*": ":class" } } }, svelte: { options: { "jsx.enabled": true } }, pug: { snippets: Cn(Bb) }, stylesheet: { snippets: Cn(Db) }, sass: { options: { "stylesheet.after": "" } }, stylus: { options: { "stylesheet.between": " ", "stylesheet.after": "" } } };
  (function(e2) {
    e2[e2.SingleQuote = 39] = "SingleQuote", e2[e2.DoubleQuote = 34] = "DoubleQuote", e2[e2.Escape = 92] = "Escape";
  })(Ut || (Ut = {}));
  (function(e2) {
    e2[e2.SquareL = 91] = "SquareL", e2[e2.SquareR = 93] = "SquareR", e2[e2.RoundL = 40] = "RoundL", e2[e2.RoundR = 41] = "RoundR", e2[e2.CurlyL = 123] = "CurlyL", e2[e2.CurlyR = 125] = "CurlyR";
  })(_ || (_ = {}));
  Ju = { [_.SquareL]: _.SquareR, [_.RoundL]: _.RoundR, [_.CurlyL]: _.CurlyR };
  (function(e2) {
    e2[e2.Tab = 9] = "Tab", e2[e2.Space = 32] = "Space", e2[e2.Dash = 45] = "Dash", e2[e2.Slash = 47] = "Slash", e2[e2.Colon = 58] = "Colon", e2[e2.Equals = 61] = "Equals", e2[e2.AngleLeft = 60] = "AngleLeft", e2[e2.AngleRight = 62] = "AngleRight";
  })(re || (re = {}));
  Yu = (e2) => e2.charCodeAt(0), tv = "#.*:$-_!@%^+>/".split("").map(Yu), nv = { type: "markup", lookAhead: true, prefix: "" };
});
function ec(e2) {
  let t = {};
  return Object.keys(e2).forEach((n) => {
    for (let r of n.split("|")) t[r] = e2[n];
  }), t;
}
var qt, tc = W(() => {
  qt = { markup: ["html", "xml", "xsl", "jsx", "js", "pug", "slim", "haml", "vue"], stylesheet: ["css", "sass", "scss", "less", "sss", "stylus"] };
});
var dc = {};
Mr(dc, { FileType: () => Lt, doComplete: () => mv, emmetSnippetField: () => po, expandAbbreviation: () => kv, extractAbbreviation: () => lc, extractAbbreviationFromText: () => vv, getDefaultSnippets: () => sc, getDefaultSyntax: () => mo, getEmmetMode: () => fc, getExpandOptions: () => cc, getSyntaxType: () => ho, isAbbreviationValid: () => uc, isStyleSheet: () => ge, parseAbbreviation: () => wv, updateExtensionsPath: () => Av });
function mv(e2, t, n, r) {
  var i, o;
  if (r.showExpandedAbbreviation === "never" || !fc(n, r.excludeLanguages)) return;
  let s = ge(n);
  if (!s) {
    if (!Hn.has(n)) {
      let m = Object.assign(Object.assign({}, sc(n)), He[n]);
      Hn.set(n, Object.keys(m));
    }
    co = (i = Hn.get(n)) !== null && i !== void 0 ? i : [];
  }
  let l = lc(e2, t, { lookAhead: !s, type: s ? "stylesheet" : "markup" });
  if (!l) return;
  let { abbreviationRange: u, abbreviation: c, filter: f } = l, h = oc(e2, t).substr(0, t.character);
  if (gv(h) === c && h.endsWith(`<${c}`) && qt.markup.includes(n)) return;
  let k = cc(n, r, f), x = "", w, S = [], y = (m, v) => {
    if (uc(m, c)) {
      try {
        x = Mt(v, k), s && "!important".startsWith(v) && (x = "!important");
      } catch {
      }
      !x || xv(m, v, x, k.options) || (w = It.create(v), w.textEdit = xe.replace(u, Wn(Gn(x))), w.documentation = fo(x), w.insertTextFormat = Pt.Snippet, w.detail = dt.t("Emmet Abbreviation"), w.label = c, w.label += f ? "|" + f.replace(",", "|") : "", S = [w]);
    }
  };
  if (ge(n)) {
    if (y(n, c), c.length > 4 && bl.properties.find((m) => m.startsWith(c))) return Ot.create([], true);
    if (w && x.length) {
      w.textEdit = xe.replace(u, Wn(Gn(x))), w.documentation = fo(x), w.label = bv(x), w.filterText = c;
      let m = ft.has(n) ? ft.get(n) : ft.get("css");
      if (S = lo(m ?? [], c, c, u, k, "Emmet Custom Snippet", false), !S.find((v) => {
        var g, b, T;
        return ((g = v.textEdit) === null || g === void 0 ? void 0 : g.newText) && ((b = v.textEdit) === null || b === void 0 ? void 0 : b.newText) === ((T = w?.textEdit) === null || T === void 0 ? void 0 : T.newText);
      })) {
        let v = new RegExp(".*" + c.split("").map((g) => g === "$" || g === "+" ? "\\" + g : g).join(".*") + ".*", "i");
        (/\d/.test(c) || v.test(w.label)) && S.push(w);
      }
    }
  } else {
    y(n, c);
    let m = c, v = c.match(/(>|\+)([\w:-]+)$/);
    if (v && v.length === 3 && (m = v[2]), n !== "xml") {
      let g = lo(Vt, m, c, u, k, "Emmet Abbreviation");
      S = S.concat(g);
    }
    if (r.showAbbreviationSuggestions === true) {
      let g = lo(co.filter((b) => !Vt.includes(b)), m, c, u, k, "Emmet Abbreviation");
      w && g.length > 0 && m !== c && (w.sortText = "0" + w.label, g.forEach((b) => {
        b.filterText = c, b.sortText = "9" + c;
      })), S = S.concat(g);
    }
    n === "html" && S.length >= 2 && c.includes(":") && ((o = w?.textEdit) === null || o === void 0 ? void 0 : o.newText) === `<${c}>\${0}</${c}>` && (S = S.filter((g) => g.label !== c));
  }
  return r.showSuggestionsAsSnippets === true && S.forEach((m) => m.kind = kn.Snippet), S.length ? Ot.create(S, true) : void 0;
}
function lo(e2, t, n, r, i, o, s = true) {
  if (!t || !e2) return [];
  let a = [];
  return e2.forEach((l) => {
    if (!l.startsWith(t.toLowerCase()) || s && l === t.toLowerCase()) return;
    let u = n + l.substr(t.length), c;
    try {
      c = Mt(u, i);
    } catch {
    }
    if (!c) return;
    let f = It.create(t + l.substr(t.length));
    f.documentation = fo(c), f.detail = o, f.textEdit = xe.replace(r, Wn(Gn(c))), f.insertTextFormat = Pt.Snippet, a.push(f);
  }), a;
}
function gv(e2) {
  if (e2) {
    let t = e2.match(/[\w,:,-,\.]*$/);
    if (t) return t[0];
  }
}
function fo(e2) {
  return e2.replace(/([^\\])\$\{\d+\}/g, "$1|").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function bv(e2) {
  return e2.replace(/([^\\])\$\{\d+\}/g, "$1").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function Wn(e2) {
  return e2 && e2.replace(/([^\\])(\$)([^\{])/g, "$1\\$2$3");
}
function Gn(e2) {
  if (!e2 || !e2.trim()) return e2;
  let t = -1, n = [], r = false, i = false, o = 0, s = e2.length;
  try {
    for (; o < s && !r; ) {
      if (e2[o++] != "$" || e2[o++] != "{") continue;
      let a = -1, l = -1;
      for (; o < s && /\d/.test(e2[o]); ) a = a < 0 ? o : a, l = o + 1, o++;
      if (a === -1 || l === -1 || o >= s || e2[o] != "}" && e2[o] != ":") continue;
      let u = e2.substring(a, l);
      if (r = u === "0", r) break;
      let c = false;
      if (e2[o++] == ":") for (; o < s; ) {
        if (e2[o] == "}") {
          c = true;
          break;
        }
        o++;
      }
      Number(u) > Number(t) ? (t = Number(u), n = [{ numberStart: a, numberEnd: l }], i = !c) : Number(u) === t && n.push({ numberStart: a, numberEnd: l });
    }
  } catch {
  }
  if (i && !r) for (let a = 0; a < n.length; a++) {
    let l = n[a].numberStart, u = n[a].numberEnd;
    e2 = e2.substr(0, l) + "0" + e2.substr(u);
  }
  return e2;
}
function oc(e2, t) {
  let n = e2.offsetAt(t), r = e2.getText(), i = 0, o = r.length;
  for (let s = n - 1; s >= 0; s--) if (r[s] === `
`) {
    i = s + 1;
    break;
  }
  for (let s = n; s < r.length; s++) if (r[s] === `
`) {
    o = s;
    break;
  }
  return r.substring(i, o);
}
function ge(e2) {
  return qt.stylesheet.includes(e2);
}
function ho(e2) {
  return ge(e2) ? "stylesheet" : "markup";
}
function mo(e2) {
  return ge(e2) ? "css" : "html";
}
function sc(e2) {
  let n = { type: ho(e2), syntax: e2 }, r = Bt(n);
  return e2 === "xml" ? {} : r.snippets;
}
function ac(e2, t) {
  let n;
  for (let r = 0; r < hv; r++) if (e2.endsWith(`${ao}${Mn}`, t)) t -= Mn.length + 1, n = n ? Mn + "," + n : Mn;
  else if (e2.endsWith(`${ao}${Vn}`, t)) t -= Vn.length + 1, n = n ? Vn + "," + n : Vn;
  else if (e2.endsWith(`${ao}${qn}`, t)) t -= qn.length + 1, n = n ? qn + "," + n : qn;
  else break;
  return { pos: t, filter: n };
}
function lc(e2, t, n) {
  let r = oc(e2, t), i = r.substr(0, t.character), { pos: o, filter: s } = ac(i, t.character), a = s ? s.length + 1 : 0, l = so(r, o, n);
  return l ? { abbreviationRange: V.create(t.line, l.location, t.line, l.location + l.abbreviation.length + a), abbreviation: l.abbreviation, filter: s } : void 0;
}
function vv(e2, t) {
  if (!e2) return;
  let { pos: n, filter: r } = ac(e2, e2.length), i = ge(t) || t === "stylesheet" ? { syntax: "stylesheet", lookAhead: false } : { lookAhead: true }, o = so(e2, n, i);
  if (o) return { abbreviation: o.abbreviation, filter: r };
}
function uc(e2, t) {
  if (!t) return false;
  if (ge(e2)) {
    if (t.includes("#")) {
      if (t.startsWith("#")) return /^#[\d,a-f,A-F]{1,6}$/.test(t);
      if (Vt.includes(t.substring(0, t.indexOf("#")))) return false;
    }
    return pv.test(t);
  }
  return t.startsWith("!") ? !/[^!]/.test(t) : (/\(/.test(t) || /\)/.test(t)) && !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(t) && !/\(.*\)[>\+\*\^]/.test(t) && !/\[[^\[\]\(\)]+=".*"\]/.test(t) && !/[>\+\*\^]\(.*\)/.test(t) ? false : e2 === "jsx" ? dv.test(t) && nc.test(t) : /^{%|{#|{{/.test(t) ? false : fv.test(t) && nc.test(t);
}
function xv(e2, t, n, r) {
  var i, o;
  if (ge(e2) && r) {
    let a = (i = r["stylesheet.between"]) !== null && i !== void 0 ? i : ": ", l = (o = r["stylesheet.after"]) !== null && o !== void 0 ? o : ";", u = t.indexOf(a[0], Math.max(t.length - a.length, 0));
    u = u >= 0 ? u : t.length;
    let c = t.substring(0, u);
    return n === `${c}${a}\${0}${l}` || n.replace(/\s/g, "") === t.replace(/\s/g, "") + l;
  }
  if (e2 === "xml" && Vt.some((a) => a.startsWith(t.toLowerCase()))) return true;
  if (Vt.includes(t.toLowerCase()) || co.includes(t) || /[-,:]/.test(t) && !/--|::/.test(t) && !t.endsWith(":")) return false;
  if (/^\.{2,}$/.test(t)) return true;
  if (t === ".") return false;
  let s = t.match(/^([a-z,A-Z,\d]*)\.$/);
  return s ? !(s[1] && Pi.tags.includes(s[1])) : e2 === "jsx" && /^([A-Z][A-Za-z0-9]*)+$/.test(t) ? false : n.toLowerCase() === `<${t.toLowerCase()}>\${1}</${t.toLowerCase()}>`;
}
function cc(e2, t, n) {
  var r, i, o, s, a, l, u, c, f, h;
  t = t ?? {}, t.preferences = (r = t.preferences) !== null && r !== void 0 ? r : {};
  let p = t.preferences, k = ge(e2) ? e2 : "css", x = Sv(e2, (i = t.syntaxProfiles) !== null && i !== void 0 ? i : {}), S = (x && x.filters ? x.filters.split(",") : []).map((Q) => Q.trim()), y = n && n.split(",").some((Q) => Q.trim() === "bem") || S.includes("bem"), m = n && n.split(",").some((Q) => Q.trim() === "c") || S.includes("c"), v = Ev(e2, t.preferences), g = v?.stylesheet && v.stylesheet.unitAliases || {}, b = { "output.formatSkip": ["html"], "output.formatForce": ["body"], "output.inlineBreak": 0, "output.compactBoolean": false, "output.reverseAttributes": false, "output.field": po, "markup.href": true, "comment.enabled": false, "comment.trigger": ["id", "class"], "comment.before": "", "comment.after": `
<!-- /[#ID][.CLASS] -->`, "bem.enabled": false, "bem.element": "__", "bem.modifier": "_", "jsx.enabled": e2 === "jsx", "stylesheet.shortHex": true, "stylesheet.between": e2 === "stylus" ? " " : ": ", "stylesheet.after": e2 === "sass" || e2 === "stylus" ? "" : ";", "stylesheet.intUnit": "px", "stylesheet.floatUnit": "em", "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" }, "stylesheet.fuzzySearchMinScore": 0.3 }, T = { "output.tagCase": x.tagCase, "output.attributeCase": x.attributeCase, "output.attributeQuotes": x.attributeQuotes, "output.format": (o = x.format) !== null && o !== void 0 ? o : true, "output.formatSkip": p["format.noIndentTags"], "output.formatForce": p["format.forceIndentationForTags"], "output.inlineBreak": (s = x.inlineBreak) !== null && s !== void 0 ? s : p["output.inlineBreak"], "output.compactBoolean": (a = x.compactBooleanAttributes) !== null && a !== void 0 ? a : p["profile.allowCompactBoolean"], "output.reverseAttributes": p["output.reverseAttributes"], "output.selfClosingStyle": (u = (l = x.selfClosingStyle) !== null && l !== void 0 ? l : p["output.selfClosingStyle"]) !== null && u !== void 0 ? u : yv(e2), "output.field": po, "comment.enabled": m, "comment.trigger": p["filter.commentTrigger"], "comment.before": p["filter.commentBefore"], "comment.after": p["filter.commentAfter"], "bem.enabled": y, "bem.element": (c = p["bem.elementSeparator"]) !== null && c !== void 0 ? c : "__", "bem.modifier": (f = p["bem.modifierSeparator"]) !== null && f !== void 0 ? f : "_", "jsx.enabled": e2 === "jsx", "stylesheet.shortHex": p["css.color.short"], "stylesheet.between": p[`${k}.valueSeparator`], "stylesheet.after": p[`${k}.propertyEnd`], "stylesheet.intUnit": p["css.intUnit"], "stylesheet.floatUnit": p["css.floatUnit"], "stylesheet.unitAliases": g, "stylesheet.fuzzySearchMinScore": p["css.fuzzySearchMinScore"] };
  if (e2 === "jsx") {
    let Q = { class: "className", "class*": "styleName", for: "htmlFor" }, ne = { "class*": "styles" };
    x["markup.attributes"] && (T["markup.attributes"] = Object.assign(Object.assign({}, Q), x["markup.attributes"])), x["markup.valuePrefix"] && (T["markup.valuePrefix"] = Object.assign(Object.assign({}, ne), x["markup.valuePrefix"]));
  }
  if (e2 === "vue") {
    let Q = { "class*": ":class" }, ne = { "class*": "$style" };
    x["markup.attributes"] && (T["markup.attributes"] = Object.assign(Object.assign({}, Q), x["markup.attributes"])), x["markup.valuePrefix"] && (T["markup.valuePrefix"] = Object.assign(Object.assign({}, ne), x["markup.valuePrefix"]));
  }
  let P = {};
  [...Object.keys(b), ...Object.keys(T)].forEach((Q) => {
    var ne;
    let ke = Q;
    P[ke] = (ne = T[ke]) !== null && ne !== void 0 ? ne : b[ke];
  });
  let E = Object.assign(Object.assign({}, b["stylesheet.unitAliases"]), T["stylesheet.unitAliases"]);
  P["stylesheet.unitAliases"] = E;
  let I = ho(e2), ee = Tv(t.variables), F = mo(e2), de = I === "stylesheet" ? (h = He[e2]) !== null && h !== void 0 ? h : He[F] : He[e2];
  return { type: I, options: P, variables: ee, snippets: de, syntax: e2, text: void 0, maxRepeat: 1e3 };
}
function yv(e2) {
  switch (e2) {
    case "xhtml":
      return "xhtml";
    case "xml":
      return "xml";
    case "xsl":
      return "xml";
    case "jsx":
      return "xhtml";
    default:
      return "html";
  }
}
function wv(e2, t) {
  let n = Bt(t);
  return t.type === "stylesheet" ? io(e2, n) : to(e2, n);
}
function kv(e2, t) {
  let n, r = Bt(t);
  return t.type === "stylesheet" ? typeof e2 == "string" ? n = Mt(e2, r) : n = ro(e2, r) : typeof e2 == "string" ? n = Mt(e2, r) : n = no(e2, r), Wn(Gn(n));
}
function Sv(e2, t) {
  t || (t = {});
  let r = Object.assign({}, Qn, t)[e2];
  if (!r || typeof r == "string") return r === "xhtml" ? { selfClosingStyle: "xhtml" } : {};
  let i = {};
  for (let o in r) switch (o) {
    case "tag_case":
      i.tagCase = r[o] === "lower" || r[o] === "upper" ? r[o] : "";
      break;
    case "attr_case":
      i.attributeCase = r[o] === "lower" || r[o] === "upper" ? r[o] : "";
      break;
    case "attr_quotes":
      i.attributeQuotes = r[o];
      break;
    case "tag_nl":
      i.format = r[o] === true || r[o] === false ? r[o] : true;
      break;
    case "inline_break":
      i.inlineBreak = r[o];
      break;
    case "self_closing_tag":
      if (r[o] === true) {
        i.selfClosingStyle = "xml";
        break;
      }
      if (r[o] === false) {
        i.selfClosingStyle = "html";
        break;
      }
      i.selfClosingStyle = r[o];
      break;
    case "compact_bool":
      i.compactBooleanAttributes = r[o];
      break;
    default:
      i[o] = r[o];
      break;
  }
  return i;
}
function Tv(e2) {
  return e2 ? Object.assign({}, Ht, e2) : Ht;
}
function Ev(e2, t) {
  if (!t || typeof t != "object") return {};
  if (!ge(e2)) {
    let i = {};
    for (let o in t) switch (o) {
      case "filter.commentAfter":
        i.after = t[o];
        break;
      case "filter.commentBefore":
        i.before = t[o];
        break;
      case "filter.commentTrigger":
        i.trigger = t[o];
        break;
      default:
        break;
    }
    return { comment: i };
  }
  let n = typeof t?.["css.fuzzySearchMinScore"] == "number" ? t["css.fuzzySearchMinScore"] : 0.3;
  n > 1 ? n = 1 : n < 0 && (n = 0);
  let r = { fuzzySearchMinScore: n };
  for (let i in t) switch (i) {
    case "css.floatUnit":
      r.floatUnit = t[i];
      break;
    case "css.intUnit":
      r.intUnit = t[i];
      break;
    case "css.unitAliases":
      let o = {};
      t[i].split(",").forEach((s) => {
        if (!s || !s.trim() || !s.includes(":")) return;
        let a = s.substr(0, s.indexOf(":")), l = s.substr(a.length + 1);
        !a.trim() || !l || (o[a.trim()] = l);
      }), r.unitAliases = o;
      break;
    case `${e2}.valueSeparator`:
      r.between = t[i];
      break;
    case `${e2}.propertyEnd`:
      r.after = t[i];
      break;
    default:
      break;
  }
  return { stylesheet: r };
}
function Av(e2, t, n, r) {
  return cv(this, void 0, void 0, function* () {
    if (uo(), !e2.length) return;
    let i = [];
    for (let o of e2) {
      if (typeof o != "string") {
        console.warn("The following emmetExtensionsPath isn't a string: " + JSON.stringify(o));
        continue;
      }
      if (o = o.trim(), o.length && o[0] === "~") r && i.push(jt(r, o.substring(1)));
      else if (xl(o)) i.push(_t.file(o));
      else if (n) for (let s of n) i.push(jt(s, o));
    }
    for (let o of i) {
      try {
        if ((yield t.stat(o)).type !== Lt.Directory) continue;
      } catch {
        continue;
      }
      let s = jt(o, "snippets.json"), a = jt(o, "syntaxProfiles.json"), l;
      typeof globalThis.TextDecoder == "function" ? l = new globalThis.TextDecoder() : l = new ic.TextDecoder();
      let u = "";
      try {
        let f = yield t.readFile(s);
        u = l.decode(f);
      } catch {
      }
      if (u.length) try {
        let f = rc(s, u);
        f.variables && Cv(f.variables), Pv(f);
      } catch (f) {
        throw uo(), f;
      }
      let c = "";
      try {
        let f = yield t.readFile(a);
        c = l.decode(f);
      } catch {
      }
      if (c.length) try {
        let f = rc(a, c);
        Nv(f);
      } catch (f) {
        throw uo(), f;
      }
    }
  });
}
function rc(e2, t) {
  let n = [], r = ra(t, n);
  if (n.length) throw new Error(`Found error ${ia(n[0].error)} while parsing the file ${e2} at offset ${n[0].offset}`);
  return r;
}
function Cv(e2) {
  if (typeof e2 == "object" && e2) Ht = Object.assign({}, Ht, e2);
  else throw new Error(dt.t("Invalid emmet.variables field. See https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration for a valid example."));
}
function Nv(e2) {
  if (typeof e2 == "object" && e2) Qn = Object.assign({}, Qn, e2);
  else throw new Error(dt.t("Invalid syntax profile. See https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration for a valid example."));
}
function Pv(e2) {
  if (typeof e2 == "object" && e2) Object.keys(e2).forEach((t) => {
    if (!e2[t].snippets) return;
    let n = mo(t), r = e2[t].snippets;
    if (e2[n] && e2[n].snippets && n !== t && (r = Object.assign({}, e2[n].snippets, e2[t].snippets)), ge(t)) {
      let a = ft.get(t), l = Object.assign([], a, Object.keys(r));
      ft.set(t, l);
    } else for (let a in r) r.hasOwnProperty(a) && r[a].startsWith("<") && r[a].endsWith(">") && (r[a] = `{${r[a]}}`);
    let i = He[t], o = ec(r), s = Object.assign({}, i, o);
    He[t] = s;
  });
  else throw new Error(dt.t("Invalid snippets file. See https://code.visualstudio.com/docs/editor/emmet#_using-custom-emmet-snippets for a valid example."));
}
function uo() {
  He = {}, Hn.clear(), ft.clear(), Qn = {}, Ht = {};
}
function fc(e2, t = []) {
  if (!(!e2 || t.includes(e2))) {
    if (/\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(e2)) return "jsx";
    if (e2 === "sass-indented") return "sass";
    if (e2 === "jade") return "pug";
    if (qt.markup.includes(e2) || qt.stylesheet.includes(e2)) return e2;
  }
}
var ic, cv, dt, Hn, co, ft, fv, dv, pv, nc, Vt, Mn, ao, qn, Vn, hv, He, Ht, Qn, po, pc = W(() => {
  oa();
  ic = require("util");
  ol();
  gl();
  vl();
  yl();
  Ku();
  tc();
  cv = function(e2, t, n, r) {
    function i(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (f) {
          s(f);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (f) {
          s(f);
        }
      }
      function u(c) {
        c.done ? o(c.value) : i(c.value).then(a, l);
      }
      u((r = r.apply(e2, t || [])).next());
    });
  };
  try {
    dt = require("vscode").l10n;
  } catch {
    dt = { t: (t) => t };
  }
  Hn = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), fv = /^[a-z,A-Z,!,(,[,#,\.\{]/, dv = /^[a-z,A-Z,!,(,[,#,\.]/, pv = /^-?[a-z,A-Z,!,@,#]/, nc = /[a-z,A-Z\.]/, Vt = [...Pi.tags, "lorem"], Mn = "bem", ao = "|", qn = "t", Vn = "c", hv = 3;
  He = {}, Ht = {}, Qn = {}, po = (e2, t) => `\${${e2}${t ? ":" + t : ""}}`;
});
function vc(e2) {
  bc = e2;
}
function We() {
  return go || (go = (pc(), os(dc))), go;
}
function Xn(e2 = false) {
  let t = We(), n = U.workspace.getConfiguration("emmet").get("extensionsPath");
  if (n || (n = []), e2 || hc !== n) {
    hc = n;
    let r = U.workspace.workspaceFolders?.length ? U.workspace.workspaceFolders.map((o) => o.uri) : void 0, i = U.workspace.fs;
    t.updateExtensionsPath(n, i, r, bc).catch((o) => {
      Array.isArray(n) && n.length && U.window.showErrorMessage(o.message);
    });
  }
}
function xc() {
  let e2 = U.workspace.getConfiguration().inspect("emmet.extensionsPath");
  typeof e2?.globalValue == "string" ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e2.globalValue], true) : e2?.globalValue === null && U.workspace.getConfiguration().update("emmet.extensionsPath", [], true), typeof e2?.workspaceValue == "string" ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e2.workspaceValue], false) : e2?.workspaceValue === null && U.workspace.getConfiguration().update("emmet.extensionsPath", [], false), typeof e2?.workspaceFolderValue == "string" ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e2.workspaceFolderValue]) : e2?.workspaceFolderValue === null && U.workspace.getConfiguration().update("emmet.extensionsPath", []);
}
function X(e2) {
  return ["css", "scss", "sass", "less", "stylus"].includes(e2);
}
function G(e2 = true) {
  let t = U.window.activeTextEditor;
  return t ? !(!e2 && X(t.document.languageId)) : (U.window.showInformationMessage("No editor is active"), false);
}
function ht() {
  let e2 = { handlebars: "html", php: "html" }, t = {}, n = U.workspace.getConfiguration("emmet").get("includeLanguages"), r = Object.assign({}, e2, n ?? {});
  return Object.keys(r).forEach((i) => {
    typeof r[i] == "string" && Wt[r[i]] && (t[i] = r[i]);
  }), t;
}
function we(e2, t, n) {
  if (!e2 || n.includes(e2)) return;
  e2 === "jsx-tags" && (e2 = "javascriptreact"), t[e2] && (e2 = t[e2]), /\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(e2) ? e2 = "jsx" : e2 === "sass-indented" ? e2 = "sass" : (e2 === "jade" || e2 === "pug") && (e2 = "pug");
  let r = tr();
  if (r.markup.includes(e2) || r.stylesheet.includes(e2)) return e2;
}
function Yn(e2, t) {
  let n = e2.languageId === "css", r = e2.offsetAt(t), i = 0, o = e2.getText().length, s = r - 5e3, a = s > 0 ? s : i, l = new fn(e2, r);
  function u(y) {
    let v = e2.getText().substring(0, y).lastIndexOf("/*");
    if (v !== -1) return v;
  }
  function c(y) {
    let v = e2.getText().substring(y).indexOf("*/");
    if (v !== -1) return v += 2 + y, v;
  }
  function f() {
    let y = e2.positionAt(l.pos).line;
    if (!n && x !== y) {
      x = y;
      let m = e2.lineAt(x).text.indexOf("//");
      m > -1 && (l.pos = e2.offsetAt(new U.Position(x, m)));
    }
  }
  function h() {
    !l.sof() && l.peek() === pt && (l.backUp(1) === gc ? l.pos = u(l.pos) ?? i : l.next());
  }
  function p() {
    if (l.eat(pt)) if (l.eat(pt) && !n) {
      let y = e2.positionAt(l.pos).line;
      l.pos = e2.offsetAt(new U.Position(y + 1, 0));
    } else l.eat(gc) && (l.pos = c(l.pos) ?? o);
  }
  for (; !l.eof() && !l.eat(bo); ) l.peek() === pt ? p() : l.next();
  l.eof() || (o = l.pos), l.pos = r;
  let k = 1, x = t.line, w = false;
  for (; !w && k > 0 && !l.sof(); ) {
    switch (f(), l.backUp(1)) {
      case mc:
        k--;
        break;
      case bo:
        n ? (l.next(), i = l.pos, w = true) : k++;
        break;
      case pt:
        h();
        break;
      default:
        break;
    }
    (t.line - e2.positionAt(l.pos).line > 100 || l.pos <= a) && (w = true);
  }
  x = e2.positionAt(l.pos).line, k = 0;
  let S = false;
  for (; !w && !l.sof() && !S && k >= 0; ) {
    f();
    let y = l.backUp(1);
    if (!/\s/.test(String.fromCharCode(y))) {
      switch (y) {
        case pt:
          h();
          break;
        case bo:
          k++;
          break;
        case mc:
          k--;
          break;
        default:
          k || (S = true);
          break;
      }
      !l.sof() && S && (i = l.pos);
    }
  }
  try {
    let y = " ".repeat(i) + e2.getText().substring(i, o);
    return ve(y);
  } catch {
    return;
  }
}
function B(e2, t, n) {
  if (!e2) return;
  function r(o) {
    if (!o) return;
    let s = o.start, a = o.end;
    if (s < t && a > t || n && s <= t && a >= t) return i(o.children) ?? o;
    if ("close" in o) {
      let l = o;
      if (l.open && !l.close) return i(l.children);
    }
  }
  function i(o) {
    for (let s = 0; s < o.length; s++) {
      let a = r(o[s]);
      if (a) return a;
    }
  }
  return i(e2.children);
}
function H(e2, t, n, r) {
  let i = B(t, n, r);
  if (i) {
    if (i.name === "script" && i.children.length === 0) {
      let o = Iv(e2, i);
      o && (i = H(o, i, n, r) ?? i);
    } else if (i.type === "cdata") {
      let o = Ov(e2, i);
      i = H(o, i, n, r) ?? i;
    }
    return i;
  }
}
function Iv(e2, t) {
  if (t.name === "script" && t.attributes && t.attributes.some((r) => r.name.toString() === "type" && Gt.includes(r.value.toString())) && t.open) {
    let r = " ".repeat(t.open.end), i = t.close ? t.close.start : t.end, o = r + e2.substring(t.open.end, i);
    return Tt(o).children.forEach((a) => {
      t.children.push(a), a.parent = t;
    }), o;
  }
  return "";
}
function Ov(e2, t) {
  let i = t.start + "<![CDATA[".length, o = t.end - 3, a = " ".repeat(i) + e2.substring(i, o);
  return Tt(a).children.forEach((u) => {
    t.children.push(u), u.parent = t;
  }), a;
}
function vo(e2, t) {
  let n = e2;
  return !!(n.open && t > n.open.start && t < n.open.end || n.close && t > n.close.start && t < n.close.end);
}
function z(e2, t, n) {
  let r = e2.positionAt(t), i = e2.positionAt(n);
  return new U.Selection(r, i);
}
function D(e2, t, n) {
  let r = e2.positionAt(t), i = e2.positionAt(n);
  return new U.Range(r, i);
}
function mt(e2) {
  if (!e2 || !e2.children || e2.children.length === 0 || !e2.children.find((t) => t.type !== "comment")) return e2;
  for (let t = e2.children.length - 1; t >= 0; t--) if (e2.children[t].type !== "comment") return mt(e2.children[t]);
}
function Zn(e2, t) {
  let n = t === -1, r = false, i = false, o, s;
  for (; t < e2.length - 1; ) {
    if (t++, !n) {
      e2[t] === " " && (n = true);
      continue;
    }
    if (!(n && !r && e2[t] === " ")) {
      if (!r) {
        o = t, r = true;
        continue;
      }
      if (e2[t] === " ") {
        s = t, i = true;
        break;
      }
    }
  }
  return r && !i && (s = e2.length), [o, s];
}
function Kn(e2, t) {
  let n = t === e2.length, r = false, i = false, o, s;
  for (; t > -1; ) {
    if (t--, !n) {
      e2[t] === " " && (n = true);
      continue;
    }
    if (!(n && !i && e2[t] === " ")) {
      if (!i) {
        s = t + 1, i = true;
        continue;
      }
      if (e2[t] === " ") {
        o = t + 1, r = true;
        break;
      }
    }
  }
  return i && !r && (o = 0), [o, s];
}
function yc(e2, t) {
  if (Jn(e2, t)) return [e2];
  if (!Jn(e2.parent, t.parent)) {
    if (t.start < e2.start) return [t];
    if (t.start < e2.end) return [e2];
    for (; e2.parent && e2.parent.end < t.start; ) e2 = e2.parent;
    for (; t.parent && t.parent.start > e2.start; ) t = t.parent;
  }
  let n = [], r = e2, i = t.end;
  for (; r && i > r.start; ) n.push(r), r = r.nextSibling;
  return n;
}
function Jn(e2, t) {
  return !e2 && !t ? true : !e2 || !t ? false : e2.start === t.start && e2.end === t.end;
}
function gt(e2) {
  let t = U.workspace.getConfiguration("emmet"), n = Object.assign({}, t.syntaxProfiles || {}), r = Object.assign({}, t.preferences || {});
  return (e2 === "jsx" || e2 === "xml" || e2 === "xsl") && (n[e2] = n[e2] || {}, typeof n[e2] == "object" && !n[e2].hasOwnProperty("self_closing_tag") && !n[e2].hasOwnProperty("selfClosingStyle") && (n[e2] = { ...n[e2], selfClosingStyle: e2 === "jsx" ? "xhtml" : "xml" })), { preferences: r, showExpandedAbbreviation: t.showExpandedAbbreviation, showAbbreviationSuggestions: t.showAbbreviationSuggestions, syntaxProfiles: n, variables: t.variables, excludeLanguages: t.excludeLanguages, showSuggestionsAsSnippets: t.showSuggestionsAsSnippets };
}
function xo(e2, t) {
  for (let n = 0, r = e2.size; n < r; n++) if (t(e2.item(n)) === false || xo(e2.item(n), t) === false) return false;
  return true;
}
function Qt(e2, t) {
  return e2.children.find((n) => n.type === "property" && n.name === t);
}
function wc(e2, t) {
  let n = e2.document, r = R(n, true), i = n.offsetAt(t), o = B(r, i, true);
  if (X(e2.document.languageId)) return o && o.type === "property" ? o : null;
  let s = o;
  if (s && s.name === "style" && s.open && s.close && s.open.end < i && s.close.start > i) {
    let a = " ".repeat(s.start) + n.getText().substring(s.start, s.end), l = ve(a), u = B(l, i, true);
    return u && u.type === "property" ? u : null;
  }
  return null;
}
function er(e2, t, n) {
  if (!t) return;
  let r = t;
  if (r && r.open && r.close) {
    let i = e2.offsetAt(n);
    if (r.open.end < i && i <= r.close.start && r.name === "style") {
      let o = " ".repeat(r.open.end) + e2.getText().substring(r.open.end, r.close.start);
      return ve(o);
    }
  }
}
function kc(e2, t) {
  if (!e2) return false;
  let n = e2, r = (n.attributes || []).findIndex((o) => o.name.toString() === "style");
  if (r === -1) return false;
  let i = n.attributes[r];
  return t >= i.value.start && t <= i.value.end;
}
function Jt(e2) {
  return pn.create(e2.uri.toString(), e2.languageId, e2.version, e2.getText());
}
function Sc(e2) {
  let t = e2.split("/").pop();
  return (t ? t.split("\\").pop() : "") ?? "";
}
function tr() {
  return { markup: ["html", "xml", "xsl", "jsx", "js", "pug", "slim", "haml"], stylesheet: ["css", "sass", "scss", "less", "sss", "stylus"] };
}
var U, go, hc, bc, Wt, bo, mc, pt, gc, Gt, Z = W(() => {
  "use strict";
  U = q(require("vscode"));
  Jr();
  Ct();
  Gs();
  Ys();
  ie();
  Wt = { html: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], jade: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], slim: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], haml: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], xml: [".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], xsl: ["!", ".", "}", "*", "$", "/", "]", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], css: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], scss: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], sass: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], less: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], stylus: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], javascriptreact: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], typescriptreact: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] };
  bo = 125, mc = 123, pt = 47, gc = 42;
  Gt = ["text/html", "text/plain", "text/x-template", "text/template", "text/ng-template"];
});
var nf = M((r1, Fo) => {
  typeof Object.create == "function" ? Fo.exports = function(t, n) {
    n && (t.super_ = n, t.prototype = Object.create(n.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
  } : Fo.exports = function(t, n) {
    if (n) {
      t.super_ = n;
      var r = function() {
      };
      r.prototype = n.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }
  };
});
var rf = M((i1, Do) => {
  try {
    if (zo = require("util"), typeof zo.inherits != "function") throw "";
    Do.exports = zo.inherits;
  } catch {
    Do.exports = nf();
  }
  var zo;
});
var sf = M((o1, Bo) => {
  var hx = rf(), of = require("events").EventEmitter;
  Bo.exports = le;
  Bo.exports.default = le;
  function le(e2) {
    if (!(this instanceof le)) return new le(e2);
    of.call(this), e2 = e2 || {}, this.concurrency = e2.concurrency || 1 / 0, this.timeout = e2.timeout || 0, this.autostart = e2.autostart || false, this.results = e2.results || null, this.pending = 0, this.session = 0, this.running = false, this.jobs = [], this.timers = {};
  }
  hx(le, of);
  var mx = ["pop", "shift", "indexOf", "lastIndexOf"];
  mx.forEach(function(e2) {
    le.prototype[e2] = function() {
      return Array.prototype[e2].apply(this.jobs, arguments);
    };
  });
  le.prototype.slice = function(e2, t) {
    return this.jobs = this.jobs.slice(e2, t), this;
  };
  le.prototype.reverse = function() {
    return this.jobs.reverse(), this;
  };
  var gx = ["push", "unshift", "splice"];
  gx.forEach(function(e2) {
    le.prototype[e2] = function() {
      var t = Array.prototype[e2].apply(this.jobs, arguments);
      return this.autostart && this.start(), t;
    };
  });
  Object.defineProperty(le.prototype, "length", { get: function() {
    return this.pending + this.jobs.length;
  } });
  le.prototype.start = function(e2) {
    if (e2 && vx.call(this, e2), this.running = true, this.pending >= this.concurrency) return;
    if (this.jobs.length === 0) {
      this.pending === 0 && Uo.call(this);
      return;
    }
    var t = this, n = this.jobs.shift(), r = true, i = this.session, o = null, s = false, a = null, l = n.hasOwnProperty("timeout") ? n.timeout : this.timeout;
    function u(f, h) {
      r && t.session === i && (r = false, t.pending--, o !== null && (delete t.timers[o], clearTimeout(o)), f ? t.emit("error", f, n) : s === false && (a !== null && (t.results[a] = Array.prototype.slice.call(arguments, 1)), t.emit("success", h, n)), t.session === i && (t.pending === 0 && t.jobs.length === 0 ? Uo.call(t) : t.running && t.start()));
    }
    l && (o = setTimeout(function() {
      s = true, t.listeners("timeout").length > 0 ? t.emit("timeout", u, n) : u();
    }, l), this.timers[o] = o), this.results && (a = this.results.length, this.results[a] = null), this.pending++, t.emit("start", n);
    var c = n(u);
    c && c.then && typeof c.then == "function" && c.then(function(f) {
      return u(null, f);
    }).catch(function(f) {
      return u(f || true);
    }), this.running && this.jobs.length > 0 && this.start();
  };
  le.prototype.stop = function() {
    this.running = false;
  };
  le.prototype.end = function(e2) {
    bx.call(this), this.jobs.length = 0, this.pending = 0, Uo.call(this, e2);
  };
  function bx() {
    for (var e2 in this.timers) {
      var t = this.timers[e2];
      delete this.timers[e2], clearTimeout(t);
    }
  }
  function vx(e2) {
    var t = this;
    this.on("error", n), this.on("end", r);
    function n(i) {
      t.end(i);
    }
    function r(i) {
      t.removeListener("error", n), t.removeListener("end", r), e2(i, this.results);
    }
  }
  function Uo(e2) {
    this.session++, this.running = false, this.emit("end", e2);
  }
});
var af = M((pr) => {
  "use strict";
  Object.defineProperty(pr, "__esModule", { value: true });
  pr.BMP = void 0;
  pr.BMP = { validate(e2) {
    return e2.toString("ascii", 0, 2) === "BM";
  }, calculate(e2) {
    return { height: Math.abs(e2.readInt32LE(22)), width: e2.readUInt32LE(18) };
  } };
});
var Mo = M((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: true });
  hr.ICO = void 0;
  var xx = 1, yx = 6, wx = 16;
  function lf(e2, t) {
    let n = e2.readUInt8(t);
    return n === 0 ? 256 : n;
  }
  function uf(e2, t) {
    let n = yx + t * wx;
    return { height: lf(e2, n + 1), width: lf(e2, n) };
  }
  hr.ICO = { validate(e2) {
    let t = e2.readUInt16LE(0), n = e2.readUInt16LE(4);
    return t !== 0 || n === 0 ? false : e2.readUInt16LE(2) === xx;
  }, calculate(e2) {
    let t = e2.readUInt16LE(4), n = uf(e2, 0);
    if (t === 1) return n;
    let r = [n];
    for (let o = 1; o < t; o += 1) r.push(uf(e2, o));
    return { height: n.height, images: r, width: n.width };
  } };
});
var cf = M((mr) => {
  "use strict";
  Object.defineProperty(mr, "__esModule", { value: true });
  mr.CUR = void 0;
  var kx = Mo(), Sx = 2;
  mr.CUR = { validate(e2) {
    let t = e2.readUInt16LE(0), n = e2.readUInt16LE(4);
    return t !== 0 || n === 0 ? false : e2.readUInt16LE(2) === Sx;
  }, calculate(e2) {
    return kx.ICO.calculate(e2);
  } };
});
var ff = M((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: true });
  gr.DDS = void 0;
  gr.DDS = { validate(e2) {
    return e2.readUInt32LE(0) === 542327876;
  }, calculate(e2) {
    return { height: e2.readUInt32LE(12), width: e2.readUInt32LE(16) };
  } };
});
var df = M((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: true });
  br.GIF = void 0;
  var Tx = /^GIF8[79]a/;
  br.GIF = { validate(e2) {
    let t = e2.toString("ascii", 0, 6);
    return Tx.test(t);
  }, calculate(e2) {
    return { height: e2.readUInt16LE(8), width: e2.readUInt16LE(6) };
  } };
});
var mf = M((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: true });
  vr.ICNS = void 0;
  var Ex = 8, Ax = 4, Cx = 4, Nx = { ICON: 32, "ICN#": 32, "icm#": 16, icm4: 16, icm8: 16, "ics#": 16, ics4: 16, ics8: 16, is32: 16, s8mk: 16, icp4: 16, icl4: 32, icl8: 32, il32: 32, l8mk: 32, icp5: 32, ic11: 32, ich4: 48, ich8: 48, ih32: 48, h8mk: 48, icp6: 64, ic12: 32, it32: 128, t8mk: 128, ic07: 128, ic08: 256, ic13: 256, ic09: 512, ic14: 512, ic10: 1024 };
  function pf(e2, t) {
    let n = t + Cx;
    return [e2.toString("ascii", t, n), e2.readUInt32BE(n)];
  }
  function hf(e2) {
    let t = Nx[e2];
    return { width: t, height: t, type: e2 };
  }
  vr.ICNS = { validate(e2) {
    return e2.toString("ascii", 0, 4) === "icns";
  }, calculate(e2) {
    let t = e2.length, n = e2.readUInt32BE(Ax), r = Ex, i = pf(e2, r), o = hf(i[0]);
    if (r += i[1], r === n) return o;
    let s = { height: o.height, images: [o], width: o.width };
    for (; r < n && r < t; ) i = pf(e2, r), o = hf(i[0]), r += i[1], s.images.push(o);
    return s;
  } };
});
var gf = M((xr) => {
  "use strict";
  Object.defineProperty(xr, "__esModule", { value: true });
  xr.J2C = void 0;
  xr.J2C = { validate(e2) {
    return e2.toString("hex", 0, 4) === "ff4fff51";
  }, calculate(e2) {
    return { height: e2.readUInt32BE(12), width: e2.readUInt32BE(8) };
  } };
});
var vf = M((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: true });
  wr.JP2 = void 0;
  var yr = { ftyp: "66747970", ihdr: "69686472", jp2h: "6a703268", jp__: "6a502020", rreq: "72726571", xml_: "786d6c20" }, Px = (e2) => {
    let t = e2.readUInt8(0), n = 1 + 2 * t, i = e2.readUInt16BE(n) * (2 + t);
    n = n + 2 + i;
    let s = e2.readUInt16BE(n) * (16 + t);
    return n + 2 + s;
  }, bf = (e2) => ({ height: e2.readUInt32BE(4), width: e2.readUInt32BE(8) });
  wr.JP2 = { validate(e2) {
    let t = e2.toString("hex", 4, 8), n = e2.readUInt32BE(0);
    if (t !== yr.jp__ || n < 1) return false;
    let r = n + 4, i = e2.readUInt32BE(n);
    return e2.slice(r, r + i).toString("hex", 0, 4) === yr.ftyp;
  }, calculate(e2) {
    let t = e2.readUInt32BE(0), n = e2.readUInt16BE(t + 2), r = t + 4 + n;
    switch (e2.toString("hex", r, r + 4)) {
      case yr.rreq:
        return r = r + 4 + 4 + Px(e2.slice(r + 4)), bf(e2.slice(r + 8, r + 24));
      case yr.jp2h:
        return bf(e2.slice(r + 8, r + 24));
      default:
        throw new TypeError("Unsupported header found: " + e2.toString("ascii", r, r + 4));
    }
  } };
});
var qo = M((kr) => {
  "use strict";
  Object.defineProperty(kr, "__esModule", { value: true });
  kr.readUInt = void 0;
  function Ix(e2, t, n, r) {
    n = n || 0;
    let i = r ? "BE" : "LE", o = "readUInt" + t + i;
    return e2[o].call(e2, n);
  }
  kr.readUInt = Ix;
});
var yf = M((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: true });
  Sr.JPG = void 0;
  var en = qo(), Ox = "45786966", $x = 2, Vo = 6, Rx = 2, _x = "4d4d", Lx = "4949", xf = 12, jx = 2;
  function Fx(e2) {
    return e2.toString("hex", 2, 6) === Ox;
  }
  function zx(e2, t) {
    return { height: e2.readUInt16BE(t), width: e2.readUInt16BE(t + 2) };
  }
  function Dx(e2, t) {
    let r = Vo + 8, i = (0, en.readUInt)(e2, 16, r, t);
    for (let o = 0; o < i; o++) {
      let s = r + jx + o * xf, a = s + xf;
      if (s > e2.length) return;
      let l = e2.slice(s, a);
      if ((0, en.readUInt)(l, 16, 0, t) === 274) return (0, en.readUInt)(l, 16, 2, t) !== 3 || (0, en.readUInt)(l, 32, 4, t) !== 1 ? void 0 : (0, en.readUInt)(l, 16, 8, t);
    }
  }
  function Ux(e2, t) {
    let n = e2.slice($x, t), r = n.toString("hex", Vo, Vo + Rx), i = r === _x;
    if (i || r === Lx) return Dx(n, i);
  }
  function Bx(e2, t) {
    if (t > e2.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
    if (e2[t] !== 255) throw new TypeError("Invalid JPG, marker table corrupted");
  }
  Sr.JPG = { validate(e2) {
    return e2.toString("hex", 0, 2) === "ffd8";
  }, calculate(e2) {
    e2 = e2.slice(4);
    let t, n;
    for (; e2.length; ) {
      let r = e2.readUInt16BE(0);
      if (Fx(e2) && (t = Ux(e2, r)), Bx(e2, r), n = e2[r + 1], n === 192 || n === 193 || n === 194) {
        let i = zx(e2, r + 5);
        return t ? { height: i.height, orientation: t, width: i.width } : i;
      }
      e2 = e2.slice(r + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  } };
});
var wf = M((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: true });
  Tr.KTX = void 0;
  var Mx = "KTX 11";
  Tr.KTX = { validate(e2) {
    return Mx === e2.toString("ascii", 1, 7);
  }, calculate(e2) {
    return { height: e2.readUInt32LE(40), width: e2.readUInt32LE(36) };
  } };
});
var Sf = M((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: true });
  Er.PNG = void 0;
  var qx = `PNG\r

`, Vx = "IHDR", kf = "CgBI";
  Er.PNG = { validate(e2) {
    if (qx === e2.toString("ascii", 1, 8)) {
      let t = e2.toString("ascii", 12, 16);
      if (t === kf && (t = e2.toString("ascii", 28, 32)), t !== Vx) throw new TypeError("Invalid PNG");
      return true;
    }
    return false;
  }, calculate(e2) {
    return e2.toString("ascii", 12, 16) === kf ? { height: e2.readUInt32BE(36), width: e2.readUInt32BE(32) } : { height: e2.readUInt32BE(20), width: e2.readUInt32BE(16) };
  } };
});
var Af = M((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: true });
  Ar.PNM = void 0;
  var Ef = { P1: "pbm/ascii", P2: "pgm/ascii", P3: "ppm/ascii", P4: "pbm", P5: "pgm", P6: "ppm", P7: "pam", PF: "pfm" }, Hx = Object.keys(Ef), Tf = { default: (e2) => {
    let t = [];
    for (; e2.length > 0; ) {
      let n = e2.shift();
      if (n[0] !== "#") {
        t = n.split(" ");
        break;
      }
    }
    if (t.length === 2) return { height: parseInt(t[1], 10), width: parseInt(t[0], 10) };
    throw new TypeError("Invalid PNM");
  }, pam: (e2) => {
    let t = {};
    for (; e2.length > 0; ) {
      let n = e2.shift();
      if (n.length > 16 || n.charCodeAt(0) > 128) continue;
      let [r, i] = n.split(" ");
      if (r && i && (t[r.toLowerCase()] = parseInt(i, 10)), t.height && t.width) break;
    }
    if (t.height && t.width) return { height: t.height, width: t.width };
    throw new TypeError("Invalid PAM");
  } };
  Ar.PNM = { validate(e2) {
    let t = e2.toString("ascii", 0, 2);
    return Hx.includes(t);
  }, calculate(e2) {
    let t = e2.toString("ascii", 0, 2), n = Ef[t], r = e2.toString("ascii", 3).split(/[\r\n]+/);
    return (Tf[n] || Tf.default)(r);
  } };
});
var Cf = M((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: true });
  Cr.PSD = void 0;
  Cr.PSD = { validate(e2) {
    return e2.toString("ascii", 0, 4) === "8BPS";
  }, calculate(e2) {
    return { height: e2.readUInt32BE(14), width: e2.readUInt32BE(18) };
  } };
});
var If = M((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: true });
  Ir.SVG = void 0;
  var Nf = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/, Nr = { height: /\sheight=(['"])([^%]+?)\1/, root: Nf, viewbox: /\sviewBox=(['"])(.+?)\1/i, width: /\swidth=(['"])([^%]+?)\1/ }, Ho = 2.54, Pf = { in: 96, cm: 96 / Ho, em: 16, ex: 8, m: 96 / Ho * 100, mm: 96 / Ho / 10, pc: 96 / 72 / 12, pt: 96 / 72, px: 1 }, Wx = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(Pf).join("|")})?$`);
  function Pr(e2) {
    let t = Wx.exec(e2);
    if (t) return Math.round(Number(t[1]) * (Pf[t[2]] || 1));
  }
  function Gx(e2) {
    let t = e2.split(" ");
    return { height: Pr(t[3]), width: Pr(t[2]) };
  }
  function Qx(e2) {
    let t = e2.match(Nr.width), n = e2.match(Nr.height), r = e2.match(Nr.viewbox);
    return { height: n && Pr(n[2]), viewbox: r && Gx(r[2]), width: t && Pr(t[2]) };
  }
  function Jx(e2) {
    return { height: e2.height, width: e2.width };
  }
  function Xx(e2, t) {
    let n = t.width / t.height;
    return e2.width ? { height: Math.floor(e2.width / n), width: e2.width } : e2.height ? { height: e2.height, width: Math.floor(e2.height * n) } : { height: t.height, width: t.width };
  }
  Ir.SVG = { validate(e2) {
    let t = String(e2);
    return Nf.test(t);
  }, calculate(e2) {
    let t = e2.toString("utf8").match(Nr.root);
    if (t) {
      let n = Qx(t[0]);
      if (n.width && n.height) return Jx(n);
      if (n.viewbox) return Xx(n, n.viewbox);
    }
    throw new TypeError("Invalid SVG");
  } };
});
var Of = M((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: true });
  Or.TGA = void 0;
  Or.TGA = { validate(e2) {
    return e2.readUInt16LE(0) === 0 && e2.readUInt16LE(4) === 0;
  }, calculate(e2) {
    return { height: e2.readUInt16LE(14), width: e2.readUInt16LE(12) };
  } };
});
var $f = M((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: true });
  Rr.TIFF = void 0;
  var $r = require("fs"), wt = qo();
  function Yx(e2, t, n) {
    let r = (0, wt.readUInt)(e2, 32, 4, n), i = 1024, o = $r.statSync(t).size;
    r + i > o && (i = o - r - 10);
    let s = Buffer.alloc(i), a = $r.openSync(t, "r");
    return $r.readSync(a, s, 0, i, r), $r.closeSync(a), s.slice(2);
  }
  function Zx(e2, t) {
    let n = (0, wt.readUInt)(e2, 16, 8, t);
    return ((0, wt.readUInt)(e2, 16, 10, t) << 16) + n;
  }
  function Kx(e2) {
    if (e2.length > 24) return e2.slice(12);
  }
  function ey(e2, t) {
    let n = {}, r = e2;
    for (; r && r.length; ) {
      let i = (0, wt.readUInt)(r, 16, 0, t), o = (0, wt.readUInt)(r, 16, 2, t), s = (0, wt.readUInt)(r, 32, 4, t);
      if (i === 0) break;
      s === 1 && (o === 3 || o === 4) && (n[i] = Zx(r, t)), r = Kx(r);
    }
    return n;
  }
  function ty(e2) {
    let t = e2.toString("ascii", 0, 2);
    if (t === "II") return "LE";
    if (t === "MM") return "BE";
  }
  var ny = ["49492a00", "4d4d002a"];
  Rr.TIFF = { validate(e2) {
    return ny.includes(e2.toString("hex", 0, 4));
  }, calculate(e2, t) {
    if (!t) throw new TypeError("Tiff doesn't support buffer");
    let n = ty(e2) === "BE", r = Yx(e2, t, n), i = ey(r, n), o = i[256], s = i[257];
    if (!o || !s) throw new TypeError("Invalid Tiff. Missing tags");
    return { height: s, width: o };
  } };
});
var Rf = M((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: true });
  _r.WEBP = void 0;
  function ry(e2) {
    return { height: 1 + e2.readUIntLE(7, 3), width: 1 + e2.readUIntLE(4, 3) };
  }
  function iy(e2) {
    return { height: 1 + ((e2[4] & 15) << 10 | e2[3] << 2 | (e2[2] & 192) >> 6), width: 1 + ((e2[2] & 63) << 8 | e2[1]) };
  }
  function oy(e2) {
    return { height: e2.readInt16LE(8) & 16383, width: e2.readInt16LE(6) & 16383 };
  }
  _r.WEBP = { validate(e2) {
    let t = e2.toString("ascii", 0, 4) === "RIFF", n = e2.toString("ascii", 8, 12) === "WEBP", r = e2.toString("ascii", 12, 15) === "VP8";
    return t && n && r;
  }, calculate(e2) {
    let t = e2.toString("ascii", 12, 16);
    if (e2 = e2.slice(20, 30), t === "VP8X") {
      let r = e2[0], i = (r & 192) === 0, o = (r & 1) === 0;
      if (i && o) return ry(e2);
      throw new TypeError("Invalid WebP");
    }
    if (t === "VP8 " && e2[0] !== 47) return oy(e2);
    let n = e2.toString("hex", 3, 6);
    if (t === "VP8L" && n !== "9d012a") return iy(e2);
    throw new TypeError("Invalid WebP");
  } };
});
var Wo = M((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: true });
  Lr.typeHandlers = void 0;
  var sy = af(), ay = cf(), ly = ff(), uy = df(), cy = mf(), fy = Mo(), dy = gf(), py = vf(), hy = yf(), my = wf(), gy = Sf(), by = Af(), vy = Cf(), xy = If(), yy = Of(), wy = $f(), ky = Rf();
  Lr.typeHandlers = { bmp: sy.BMP, cur: ay.CUR, dds: ly.DDS, gif: uy.GIF, icns: cy.ICNS, ico: fy.ICO, j2c: dy.J2C, jp2: py.JP2, jpg: hy.JPG, ktx: my.KTX, png: gy.PNG, pnm: by.PNM, psd: vy.PSD, svg: xy.SVG, tga: yy.TGA, tiff: wy.TIFF, webp: ky.WEBP };
});
var Lf = M((jr) => {
  "use strict";
  Object.defineProperty(jr, "__esModule", { value: true });
  jr.detector = void 0;
  var Go = Wo(), Sy = Object.keys(Go.typeHandlers), _f = { 56: "psd", 66: "bmp", 68: "dds", 71: "gif", 73: "tiff", 77: "tiff", 82: "webp", 105: "icns", 137: "png", 255: "jpg" };
  function Ty(e2) {
    let t = e2[0];
    if (t in _f) {
      let r = _f[t];
      if (r && Go.typeHandlers[r].validate(e2)) return r;
    }
    let n = (r) => Go.typeHandlers[r].validate(e2);
    return Sy.find(n);
  }
  jr.detector = Ty;
});
var Df = M((se, zf) => {
  "use strict";
  Object.defineProperty(se, "__esModule", { value: true });
  se.types = se.setConcurrency = se.disableTypes = se.disableFS = se.imageSize = void 0;
  var tn = require("fs"), Ey = require("path"), Ay = sf(), Jo = Wo(), Cy = Lf(), jf = 512 * 1024, Ff = new Ay.default({ concurrency: 100, autostart: true }), Fr = { disabledFS: false, disabledTypes: [] };
  function Qo(e2, t) {
    let n = (0, Cy.detector)(e2);
    if (typeof n < "u") {
      if (Fr.disabledTypes.indexOf(n) > -1) throw new TypeError("disabled file type: " + n);
      if (n in Jo.typeHandlers) {
        let r = Jo.typeHandlers[n].calculate(e2, t);
        if (r !== void 0) return r.type = n, r;
      }
    }
    throw new TypeError("unsupported file type: " + n + " (file: " + t + ")");
  }
  async function Ny(e2) {
    let t = await tn.promises.open(e2, "r");
    try {
      let { size: n } = await t.stat();
      if (n <= 0) throw new Error("Empty file");
      let r = Math.min(n, jf), i = Buffer.alloc(r);
      return await t.read(i, 0, r, 0), i;
    } finally {
      await t.close();
    }
  }
  function Py(e2) {
    let t = tn.openSync(e2, "r");
    try {
      let { size: n } = tn.fstatSync(t);
      if (n <= 0) throw new Error("Empty file");
      let r = Math.min(n, jf), i = Buffer.alloc(r);
      return tn.readSync(t, i, 0, r, 0), i;
    } finally {
      tn.closeSync(t);
    }
  }
  zf.exports = se = Xo;
  se.default = Xo;
  function Xo(e2, t) {
    if (Buffer.isBuffer(e2)) return Qo(e2);
    if (typeof e2 != "string" || Fr.disabledFS) throw new TypeError("invalid invocation. input should be a Buffer");
    let n = Ey.resolve(e2);
    if (typeof t == "function") Ff.push(() => Ny(n).then((r) => process.nextTick(t, null, Qo(r, n))).catch(t));
    else {
      let r = Py(n);
      return Qo(r, n);
    }
  }
  se.imageSize = Xo;
  var Iy = (e2) => {
    Fr.disabledFS = e2;
  };
  se.disableFS = Iy;
  var Oy = (e2) => {
    Fr.disabledTypes = e2;
  };
  se.disableTypes = Oy;
  var $y = (e2) => {
    Ff.concurrency = e2;
  };
  se.setConcurrency = $y;
  se.types = Object.keys(Jo.typeHandlers);
});
function Ko(e2) {
  return e2 = e2.replace(/^file:\/\//, ""), Ry.test(e2) ? Ly(e2) : _y(e2);
}
function _y(e2) {
  return new Promise((t, n) => {
    let r = e2.match(/^data:.+?;base64,/);
    if (r) try {
      let i = Buffer.from(e2.slice(r[0].length), "base64");
      return t(Yo("", (0, zr.imageSize)(i)));
    } catch (i) {
      return n(i);
    }
    (0, zr.imageSize)(e2, (i, o) => {
      i ? n(i) : t(Yo(Zo.basename(e2), o));
    });
  });
}
function Ly(e2) {
  return new Promise((t, n) => {
    let r = new Mf.URL(e2), i = r.protocol === "https:" ? Bf.get : Uf.get;
    if (!r.pathname) return n("Given url doesnt have pathname property");
    let o = r.pathname;
    i(r, (s) => {
      let a = [], l = 0, u = (f) => {
        try {
          let h = (0, zr.imageSize)(Buffer.concat(f, l));
          s.removeListener("data", c), s.destroy(), t(Yo(Zo.basename(o), h));
        } catch {
        }
      }, c = (f) => {
        l += f.length, a.push(f), u(a);
      };
      s.on("data", c).on("end", () => u(a)).once("error", (f) => {
        s.removeListener("data", c), n(f);
      });
    }).once("error", n);
  });
}
function Yo(e2, t) {
  let n = e2.match(/@(\d+)x\./), r = n ? +n[1] : 1;
  if (!(!t || !t.width || !t.height)) return { realWidth: t.width, realHeight: t.height, width: Math.floor(t.width / r), height: Math.floor(t.height / r) };
}
var Zo, Uf, Bf, Mf, zr, Ry, qf = W(() => {
  "use strict";
  Zo = q(require("path")), Uf = q(require("http")), Bf = q(require("https")), Mf = require("url"), zr = q(Df()), Ry = /^https?:/;
});
function es(e2, t) {
  return /^\w+:/.test(t) ? Promise.resolve(t) : (t = Ie.normalize(t), Hf.test(t) ? Dy(e2, t) : zy(e2, t));
}
function zy(e2, t) {
  return Wf(Ie.resolve(e2, t));
}
function Dy(e2, t) {
  return new Promise((n, r) => {
    t = t.replace(Hf, "");
    let i = (o) => {
      Wf(Ie.resolve(o, t)).then(n, () => {
        let s = Ie.dirname(o);
        if (!s || s === o) return r(`Unable to locate absolute file ${t}`);
        i(s);
      });
    };
    i(e2);
  });
}
function Wf(e2) {
  return new Promise((t, n) => {
    Vf.stat(e2, (r, i) => {
      if (r) return n(r);
      if (!i.isFile()) return n(new Error(`${e2} is not a file`));
      t(e2);
    });
  });
}
var Ie, Vf, jy, Fy, Hf, Gf = W(() => {
  "use strict";
  Ie = q(require("path")), Vf = q(require("fs")), jy = /^\/+/, Fy = /^\\+/, Hf = Ie.sep === "/" ? jy : Fy;
});
var Zf = {};
Mr(Zf, { updateImageSize: () => Uy });
function Uy() {
  if (!G() || !be.window.activeTextEditor) return;
  let e2 = be.window.activeTextEditor, t = Array.from(e2.selections).reverse().map((n) => {
    let r = n.isReversed ? n.active : n.anchor;
    return X(e2.document.languageId) ? qy(e2, r) : By(e2, r);
  });
  return Promise.all(t).then((n) => e2.edit((r) => {
    n.forEach((i) => {
      i.forEach((o) => {
        r.replace(o.range, o.newText);
      });
    });
  }));
}
function By(e2, t) {
  let n = Qf(e2, t), r = n && Jf(n);
  return r ? es(ts.dirname(e2.document.fileName), r).then(Ko).then((i) => {
    let o = Qf(e2, t);
    return o && Jf(o) === r ? Hy(e2, o, i.width, i.height) : [];
  }).catch((i) => (console.warn("Error while updating image size:", i), [])) : My(e2, t);
}
function My(e2, t) {
  return Yf(e2, t, (r) => {
    let i = r.document, o = R(i, true), s = i.offsetAt(t), a = B(o, s, true);
    if (a && a.name === "style" && a.open && a.close && a.open.end < s && a.close.start > s) {
      let l = " ".repeat(a.open.end) + i.getText().substring(a.open.end, a.close.start), u = ve(l), c = B(u, s, true);
      return c && c.type === "property" ? c : null;
    }
    return null;
  });
}
function qy(e2, t) {
  return Yf(e2, t, Vy);
}
function Yf(e2, t, n) {
  let r = n(e2, t), i = r && Xf(e2, r, t);
  return i ? es(ts.dirname(e2.document.fileName), i).then(Ko).then((o) => {
    let s = n(e2, t);
    return o && s && Xf(e2, s, t) === i ? Wy(e2, s, o.width, o.height) : [];
  }).catch((o) => (console.warn("Error while updating image size:", o), [])) : Promise.reject(new Error("No valid image source"));
}
function Qf(e2, t) {
  let n = e2.document, r = R(n, true), i = n.offsetAt(t), o = B(r, i, true);
  return o && o.name.toLowerCase() === "img" ? o : null;
}
function Vy(e2, t) {
  let n = e2.document, r = R(n, true), i = n.offsetAt(t), o = B(r, i, true);
  return o && o.type === "property" ? o : null;
}
function Jf(e2) {
  let t = Dr(e2, "src");
  if (t) return t.value.value;
}
function Xf(e2, t, n) {
  if (!t) return;
  let r = Qy(e2, t, n);
  if (!r) return;
  let i = r.item(0);
  return i && i.type === "string" && (i = i.item(0)), i && i.valueOf();
}
function Hy(e2, t, n, r) {
  let i = e2.document, o = Dr(t, "src");
  if (!o) return [];
  let s = Dr(t, "width"), a = Dr(t, "height"), l = Gy(e2, o), u = t.attributes[t.attributes.length - 1].end, c = [], f = "";
  return s ? c.push(new be.TextEdit(D(i, s.value.start, s.value.end), String(n))) : f += ` width=${l}${n}${l}`, a ? c.push(new be.TextEdit(D(i, a.value.start, a.value.end), String(r))) : f += ` height=${l}${r}${l}`, f && c.push(new be.TextEdit(D(i, u, u), f)), c;
}
function Wy(e2, t, n, r) {
  let i = e2.document, o = t.parent, s = Qt(o, "width"), a = Qt(o, "height"), l = t.separator || ": ", u = Jy(e2, t), c = [];
  t.terminatorToken || c.push(new be.TextEdit(D(i, t.end, t.end), ";"));
  let f = "";
  return s ? c.push(new be.TextEdit(D(i, s.valueToken.start, s.valueToken.end), `${n}px`)) : f += `${u}width${l}${n}px;`, a ? c.push(new be.TextEdit(D(i, a.valueToken.start, a.valueToken.end), `${r}px`)) : f += `${u}height${l}${r}px;`, f && c.push(new be.TextEdit(D(i, t.end, t.end), f)), c;
}
function Dr(e2, t) {
  return t = t.toLowerCase(), e2 && e2.attributes.find((n) => n.name.toString().toLowerCase() === t);
}
function Gy(e2, t) {
  let n = t.value ? t.value.end : t.end, r = t.end;
  return n === r ? "" : e2.document.getText().substring(n, r);
}
function Qy(e2, t, n) {
  let r = e2.document.offsetAt(n);
  for (let i = 0, o = t.parsedValue.length, s; i < o; i++) if (xo(t.parsedValue[i], (a) => a.type === "url" && a.start <= r && a.end >= r ? (s = a, false) : true), s) return s;
}
function Jy(e2, t) {
  let n;
  return (n = t.previousSibling || t.parent.contentStartToken) ? e2.document.getText().substring(n.end, t.start) : (n = t.nextSibling || t.parent.contentEndToken) ? e2.document.getText().substring(t.end, n.start) : "";
}
var be, ts, Kf = W(() => {
  "use strict";
  be = require("vscode"), ts = q(require("path"));
  qf();
  Z();
  Gf();
  Ct();
  ie();
});
var Yy = {};
Mr(Yy, { activate: () => Xy });
module.exports = os(Yy);
var Ur = q(require("vscode")), ed = require("os");
var O = q(require("vscode"));
var J = q(require("vscode"));
var A = q(require("vscode"));
Z();
ie();
var $v = /[\u00a0]*[\d#\-\*\u2022]+\.?/, yo = /^#[\da-fA-F]{0,6}$/;
async function Tc(e2) {
  if (!G(false)) return false;
  let t = A.window.activeTextEditor, n = t.document;
  e2 = e2 || {}, e2.language || (e2.language = n.languageId);
  let r = Xt(e2) || "html", i = R(n, true), o = We(), s = Array.from(t.selections).sort((g, b) => g.start.compareTo(b.start)).map((g) => {
    let b = g;
    {
      let { start: P, end: E } = b, I = n.offsetAt(P), ee = n.getText(), F = H(ee, i, I, true);
      if (F && vo(F, I)) {
        P = n.positionAt(F.start);
        let ne = n.positionAt(F.end);
        E = ne.isAfter(E) ? ne : E;
      }
      let de = n.offsetAt(E), Q = H(ee, i, de, true);
      if (Q && vo(Q, de)) {
        let ne = n.positionAt(Q.start);
        P = ne.isBefore(P) ? ne : P;
        let ke = n.positionAt(Q.end);
        E = ke.isAfter(E) ? ke : E;
      }
      b = new A.Range(P, E);
    }
    if (!b.isSingleLine && b.end.character === 0) {
      let P = b.end.line - 1;
      b = new A.Range(b.start, n.lineAt(P).range.end);
    }
    b.isEmpty && (b = n.lineAt(b.start).range);
    let T = n.lineAt(b.start);
    return !T.isEmptyOrWhitespace && T.firstNonWhitespaceCharacterIndex > b.start.character && (b = b.with(new A.Position(b.start.line, T.firstNonWhitespaceCharacterIndex))), b;
  }).reduce((g, b) => (g.length > 0 && b.intersection(g[g.length - 1]) ? g.push(b.union(g.pop())) : g.push(b), g), []), a = t.selections;
  t.selections = s.map((g) => new A.Selection(g.start, g.end));
  let l = s.map((g) => {
    let b, T = n.getText(g), E = n.lineAt(g.start).text.match(/^(\s*)/), I = E ? E[1] : "";
    return b = g.isSingleLine ? [T] : T.split(`
` + I).map((ee) => ee.trimEnd()), b = b.map((ee) => ee.replace(/(\$\d)/g, "\\$1")), { previewRange: g, originalRange: g, originalContent: T, textToWrapInPreview: b, baseIndent: I };
  }), { tabSize: u, insertSpaces: c } = t.options, f = c ? " ".repeat(u) : "	";
  function h() {
    return t.edit((g) => {
      for (let b of l) g.replace(b.previewRange, b.originalContent), b.previewRange = b.originalRange;
    }, { undoStopBefore: false, undoStopAfter: false });
  }
  function p(g) {
    let b = new A.Range(0, 0, 0, 0), T = new A.Range(0, 0, 0, 0), P = 0;
    return t.edit((E) => {
      for (let I = 0; I < l.length; I++) {
        let ee = wo(g[I]) || "";
        if (!ee) break;
        let F = l[I].previewRange, de = ee.replace(/\$\{[\d]*\}/g, "|").replace(/\$\{[\d]*:([^}]*)\}/g, (Zy, td) => td).replace(/\\\$/g, "$");
        E.replace(F, de);
        let Q = de.split(`
`), ne = F.end.line - F.start.line + 1, ke = Q.length - ne, ns = F.start.line + P, nn = F.start.character, rs = F.end.line + P + ke, Br = Q[Q.length - 1].length;
        I > 0 && rs === T.end.line ? (nn = T.end.character + (F.start.character - b.end.character), Br += nn) : I > 0 && ns === T.end.line ? nn = T.end.character + (F.start.character - b.end.character) : Q.length === 1 && (Br += F.start.character), b = l[I].previewRange, T = new A.Range(ns, nn, rs, Br), l[I].previewRange = T, P += ke;
      }
    }, { undoStopBefore: false, undoStopAfter: false });
  }
  let k = false;
  async function x(g, b) {
    let P = !!g && !!g.trim() && o.isAbbreviationValid(r, g) ? o.extractAbbreviationFromText(g, r) : void 0;
    if (!P) return k && (k = false, await h()), false;
    let { abbreviation: E, filter: I } = P;
    if (b) {
      let F = l.map((de) => ({ syntax: r, abbreviation: E, rangeToReplace: de.originalRange, textToWrap: de.textToWrapInPreview, filter: I, indent: f, baseIndent: de.baseIndent }));
      return k = true, p(F);
    }
    let ee = l.map((F) => ({ syntax: r, abbreviation: E, rangeToReplace: F.originalRange, textToWrap: F.textToWrapInPreview, filter: I, indent: f }));
    return k && (k = false, await h()), Ac(t, ee, false);
  }
  let w = "";
  async function S(g) {
    return g !== w && (w = g, await x(g, true)), "";
  }
  let y = A.l10n.t("Enter Abbreviation"), m = e2 && e2.abbreviation ? e2.abbreviation : await A.window.showInputBox({ prompt: y, validateInput: S }), v = await x(m, false);
  return v || (t.selections = a), v;
}
function Ec(e2) {
  if (!G() || !A.window.activeTextEditor) return Ge();
  if (A.window.activeTextEditor.selections.length === 1 && A.window.activeTextEditor.selection.isEmpty) {
    let f = A.window.activeTextEditor.selection.anchor;
    if (f.character === 0) return Ge();
    let h = f.translate(0, -1), p = A.window.activeTextEditor.document.getText(new A.Range(h, f));
    if (p === " " || p === "	") return Ge();
  }
  if (e2 = e2 || {}, !e2.language) e2.language = A.window.activeTextEditor.document.languageId;
  else if ((A.workspace.getConfiguration("emmet").excludeLanguages ? A.workspace.getConfiguration("emmet").excludeLanguages : []).includes(A.window.activeTextEditor.document.languageId)) return Ge();
  let t = Xt(e2);
  if (!t) return Ge();
  let n = A.window.activeTextEditor;
  if (A.workspace.getConfiguration("emmet").triggerExpansionOnTab === true && n.selections.find((f) => !f.isEmpty)) return Ge();
  let r = [], i, o = true, s = We(), a = (f, h, p, k) => {
    p = f.validatePosition(p);
    let x = h, w = f.getText(x);
    if (!x.isEmpty) {
      let T = s.extractAbbreviationFromText(w, k);
      return T ? [x, T.abbreviation, T.filter] : [null, "", ""];
    }
    let y = n.document.lineAt(p.line).text.substr(0, p.character);
    if (k === "html") {
      let T = y.match(/<(\w+)$/);
      if (T) return w = T[1], x = new A.Range(p.translate(0, -(w.length + 1)), p), [x, w, ""];
    }
    let m = s.extractAbbreviation(Jt(n.document), p, { lookAhead: false });
    if (!m) return [null, "", ""];
    let { abbreviationRange: v, abbreviation: g, filter: b } = m;
    return [new A.Range(v.start.line, v.start.character, v.end.line, v.end.character), g, b];
  }, l = n.selections.slice(0);
  l.sort((f, h) => {
    let p = f.isReversed ? f.anchor : f.active, k = h.isReversed ? h.anchor : h.active;
    return p.compareTo(k) * -1;
  });
  let u;
  function c() {
    if (u) return u;
    let f = A.workspace.getConfiguration("emmet").optimizeStylesheetParsing === true;
    return n.selections.length === 1 && X(n.document.languageId) && f && n.document.lineCount > 1e3 ? u = Yn(n.document, n.selection.isReversed ? n.selection.anchor : n.selection.active) : u = R(n.document, true), u;
  }
  return l.forEach((f) => {
    let h = f.isReversed ? f.anchor : f.active, [p, k, x] = a(n.document, f, h, t);
    if (!p || !s.isAbbreviationValid(t, k) || X(t) && k.endsWith(":")) return;
    let w = n.document.offsetAt(h), S = B(c(), w, true), y = true, m = t;
    if (n.document.languageId === "html") if (kc(S, w)) m = "css", y = false;
    else {
      let v = er(n.document, S, h);
      v && (S = B(v, w, true), m = "css");
    }
    y && !ko(n.document, c(), S, m, w, p) || (i ? o && i !== k && (o = false) : i = k, r.push({ syntax: m, abbreviation: k, rangeToReplace: p, filter: x }));
  }), Ac(n, r, o).then((f) => f ? Promise.resolve(void 0) : Ge());
}
function Ge() {
  return A.workspace.getConfiguration("emmet").triggerExpansionOnTab === true ? A.commands.executeCommand("tab") : Promise.resolve(true);
}
function ko(e2, t, n, r, i, o) {
  if (X(r)) {
    let S = t;
    if (S && (S.comments || []).some((v) => i >= v.start && i <= v.end)) return false;
    if (!n) return true;
    let y = e2.getText(new A.Range(o.start.line, o.start.character, o.end.line, o.end.character));
    if (y.startsWith("@")) return true;
    if (r !== "sass" && r !== "stylus" && n.type === "property") {
      if (n.parent && n.parent.type !== "rule" && n.parent.type !== "at-rule") return false;
      let v = n;
      if (v.terminatorToken && v.separator && i >= v.separatorToken.end && i <= v.terminatorToken.start && !y.includes(":") || !v.terminatorToken && v.separator && i >= v.separatorToken.end && !y.includes(":")) return yo.test(y) || y === "!";
      if (yo.test(y) || y === "!") return false;
    }
    if (n.type !== "rule" && n.type !== "at-rule") return true;
    let m = n;
    if (i > m.contentStartToken.end) return true;
    if (m.parent && (m.parent.type === "rule" || m.parent.type === "at-rule") && m.selectorToken) {
      let v = e2.positionAt(i), g = e2.positionAt(m.selectorToken.start), b = e2.positionAt(m.selectorToken.end);
      if (v.line !== b.line && g.character === o.start.character && g.line === o.start.line) return true;
    }
    return false;
  }
  let s = "<", a = ">", l = "\\", u = "?", c = n, f = 0;
  if (c) {
    if (c.name === "script") {
      let y = (c.attributes || []).filter((g) => g.name.toString() === "type")[0], m = y ? y.value.toString() : "";
      return Gt.includes(m) ? true : !m || m === "application/javascript" || m === "text/javascript" ? !!Xt({ language: "javascript" }) : false;
    }
    if (!c.open || !c.close || !(c.open.end <= i && i <= c.close.start)) return false;
    f = c.open.end;
    let S = c.firstChild;
    for (; S && !(S.end > i); ) f = S.end, S = S.nextSibling;
  }
  let h = e2.positionAt(f), p = e2.getText(new A.Range(h.line, h.character, o.start.line, o.start.character));
  if (p.length > 500 && (p = p.substr(p.length - 500)), !p.trim()) return true;
  let k = true, x = false, w = p.length - 1;
  if (p[w] === s) return false;
  for (; w >= 0; ) {
    let S = p[w];
    if (w--, !x && /\s/.test(S)) {
      x = true;
      continue;
    }
    if (S === u && p[w] === s) {
      w--;
      continue;
    }
    if (/\s/.test(S) && p[w] === s) {
      w--;
      continue;
    }
    if (!(S !== s && S !== a)) {
      if (w >= 0 && p[w] === l) {
        w--;
        continue;
      }
      if (S === a) {
        if (w >= 0 && p[w] === "=") continue;
        break;
      }
      if (S === s) {
        k = !x;
        break;
      }
    }
  }
  return k;
}
async function Ac(e2, t, n) {
  if (!t || t.length === 0) return false;
  let r = 0;
  if (!n) {
    t.sort((a, l) => l.rangeToReplace.start.compareTo(a.rangeToReplace.start));
    for (let a of t) {
      let l = wo(a);
      l && (await e2.insertSnippet(new A.SnippetString(l), a.rangeToReplace, { undoStopBefore: false, undoStopAfter: false }), r++);
    }
    return r > 0;
  }
  let i = t[0], o = wo(i), s = t.map((a) => a.rangeToReplace);
  return o ? e2.insertSnippet(new A.SnippetString(o), s) : false;
}
function wo(e2) {
  let t = We(), n = t.getExpandOptions(e2.syntax, gt(e2.syntax), e2.filter);
  e2.textToWrap && (e2.textToWrap = e2.textToWrap.map((i) => i.replace(/\$\{/g, "\\${")), e2.filter && e2.filter.includes("t") && (e2.textToWrap = e2.textToWrap.map((i) => i.replace($v, "").trim())), n.text = e2.textToWrap, n.options && (e2.rangeToReplace.isSingleLine || (n.options["output.inlineBreak"] = 1), e2.indent && (n.options["output.indent"] = e2.indent), e2.baseIndent && (n.options["output.baseIndent"] = e2.baseIndent)));
  let r;
  try {
    r = t.expandAbbreviation(e2.abbreviation, n);
  } catch {
    A.window.showErrorMessage("Failed to expand abbreviation");
  }
  return r;
}
function Xt(e2) {
  let t = ht(), n = e2.language, r = e2.parentMode, i = A.workspace.getConfiguration("emmet").excludeLanguages ? A.workspace.getConfiguration("emmet").excludeLanguages : [];
  if (i.includes(n)) return;
  let o = we(t[n] ?? n, t, i);
  return o || (o = we(t[r] ?? r, t, i)), o;
}
Z();
ie();
var nr = class {
  provideCompletionItems(t, n, r, i) {
    let o = this.provideCompletionItemsInternal(t, n, i);
    if (!o) {
      this.lastCompletionType = void 0;
      return;
    }
    return o.then((s) => {
      if (!s || !s.items.length) return this.lastCompletionType = void 0, s;
      let a = s.items[0], l = a.documentation ? a.documentation.toString() : "";
      return l.startsWith("<") ? this.lastCompletionType = "html" : l.indexOf(":") > 0 && l.endsWith(";") ? this.lastCompletionType = "css" : this.lastCompletionType = void 0, s;
    });
  }
  provideCompletionItemsInternal(t, n, r) {
    let i = J.workspace.getConfiguration("emmet"), o = i.excludeLanguages ? i.excludeLanguages : [];
    if (o.includes(t.languageId)) return;
    let s = ht(), a = !!s[t.languageId], l = we(a ? s[t.languageId] : t.languageId, s, o);
    if (!l || i.showExpandedAbbreviation === "never" || (a || l === "jsx") && i.showExpandedAbbreviation !== "always") return;
    let u = l, c = u === "html" || u === "jsx" || u === "xml", f, h, p = Jt(t);
    n = t.validatePosition(n);
    let k = new J.Range(n.line, 0, n.line, n.character);
    if (t.getText(k).trimStart().startsWith("//")) return;
    let x = We();
    if (u === "html") {
      if (r.triggerKind === J.CompletionTriggerKind.TriggerForIncompleteCompletions) switch (this.lastCompletionType) {
        case "html":
          c = false;
          break;
        case "css":
          c = false, u = "css";
          break;
        default:
          break;
      }
      if (c) {
        let v = t.offsetAt(n), g = R(t, true), b = H(t.getText(), g, v, false);
        if (b) if (b.name === "script") {
          let T = b.attributes.find((P) => P.name.toString() === "type");
          if (T) {
            let P = T.value.toString();
            if (P === "application/javascript" || P === "text/javascript") if (Xt({ language: "javascript" })) c = false;
            else return;
            else Gt.includes(P) && (c = false);
          } else return;
        } else if (b.name === "style") u = "css", c = false;
        else {
          let T = b.attributes.find((P) => P.name.toString() === "style");
          T && T.value.start <= v && v <= T.value.end && (u = "css", c = false);
        }
      }
    }
    let w = X(u) ? { lookAhead: false, syntax: "stylesheet" } : { lookAhead: true, syntax: "markup" }, S = x.extractAbbreviation(p, n, w);
    if (!S || !x.isAbbreviationValid(u, S.abbreviation)) return;
    let y = t.offsetAt(n);
    if (X(t.languageId) && r.triggerKind !== J.CompletionTriggerKind.TriggerForIncompleteCompletions) {
      if (c = true, f = J.workspace.getConfiguration("emmet").optimizeStylesheetParsing === true && t.lineCount > 1e3 ? Yn(t, n) : R(t, true), !f) return;
      h = B(f, y, true);
    }
    if (!X(t.languageId) && X(u) && r.triggerKind !== J.CompletionTriggerKind.TriggerForIncompleteCompletions) {
      if (c = true, f = R(t, true), !f) return;
      let v = B(f, y, true), g = er(t, v, n);
      h = B(g, y, true);
    }
    if (c && !ko(t, f, h, u, y, Rv(S.abbreviationRange))) return;
    let m = Promise.resolve(false);
    if (!X(u) && (t.languageId === "javascript" || t.languageId === "javascriptreact" || t.languageId === "typescript" || t.languageId === "typescriptreact")) {
      let v = S.abbreviation;
      v.startsWith("this.") || /\[[^\]=]*\]/.test(v) ? m = Promise.resolve(true) : m = J.commands.executeCommand("_executeDocumentSymbolNames", t.uri).then((g) => !!g && g.some((b) => v === b || v.startsWith(b + ".") && !/>|\*|\+/.test(v)));
    }
    return m.then((v) => {
      if (v) return;
      let g = gt(u), b = x.doComplete(Jt(t), n, u, g), T = [];
      return b && b.items && b.items.forEach((P) => {
        let E = new J.CompletionItem(P.label);
        E.documentation = P.documentation, E.detail = P.detail, E.insertText = new J.SnippetString(P.textEdit.newText);
        let I = P.textEdit.range;
        E.range = new J.Range(I.start.line, I.start.character, I.end.line, I.end.character), E.filterText = P.filterText, E.sortText = P.sortText, i.showSuggestionsAsSnippets === true && (E.kind = J.CompletionItemKind.Snippet), T.push(E);
      }), new J.CompletionList(T, true);
    });
  }
};
function Rv(e2) {
  return new J.Range(e2.start.line, e2.start.character, e2.end.line, e2.end.character);
}
var Pe = q(require("vscode"));
ie();
Z();
function Nc() {
  if (!G(false) || !Pe.window.activeTextEditor) return;
  let e2 = Pe.window.activeTextEditor, t = e2.document, n = R(t, true);
  if (!n) return;
  let r = Array.from(e2.selections).reverse().reduce((i, o) => i.concat(_v(e2.document, n, o)), []);
  return e2.edit((i) => {
    r.forEach((o) => {
      i.delete(o);
    });
  });
}
function _v(e2, t, n) {
  let r = e2.offsetAt(n.start), i = H(e2.getText(), t, r, true);
  if (!i) return [];
  let o;
  i.open && (o = D(e2, i.open.start, i.open.end));
  let s;
  if (i.close && (s = D(e2, i.close.start, i.close.end)), o && s) {
    let l = new Pe.Range(o.end.line, o.end.character, s.start.line, s.start.character), u = new Pe.Range(o.start.line, o.start.character, s.end.line, s.end.character);
    if (e2.getText(l).trim() === "" && i.name !== "pre") return [u];
  }
  let a = [];
  if (o && (a.push(o), s)) {
    let l = Lv(e2, o, s), u, c;
    for (let f = o.start.line + 1; f < s.start.line; f++) e2.lineAt(f).isEmptyOrWhitespace || (a.push(new Pe.Range(f, 0, f, l)), u === void 0 && (u = f), c = f);
    Cc(e2, s) && c ? a.push(new Pe.Range(c, e2.lineAt(c).range.end.character, s.end.line, s.end.character)) : a.push(s), Cc(e2, o) && u && (a[1] = new Pe.Range(o.start.line, o.start.character, u, e2.lineAt(u).firstNonWhitespaceCharacterIndex), a.shift());
  }
  return a;
}
function Cc(e2, t) {
  if (t.start.line === t.end.line) {
    let n = e2.lineAt(t.start).text, r = e2.getText(t);
    if (n.trim() === r) return true;
  }
  return false;
}
function Lv(e2, t, n) {
  let r = t.start.line, i = n.start.line, o = e2.lineAt(r).firstNonWhitespaceCharacterIndex, s = e2.lineAt(i).firstNonWhitespaceCharacterIndex, a;
  for (let u = r + 1; u < i; u++) {
    let c = e2.lineAt(u);
    if (!c.isEmptyOrWhitespace) {
      let f = c.firstNonWhitespaceCharacterIndex;
      a = a ? Math.min(a, f) : f;
    }
  }
  let l = 0;
  return a && (a < o || a < s ? l = 0 : l = Math.min(a - o, a - s)), l;
}
var Qe = q(require("vscode"));
Z();
ie();
async function So(e2) {
  if (!G(false) || !Qe.window.activeTextEditor) return;
  let t = Qe.window.activeTextEditor, n = t.document, r = R(n, true);
  if (!r) return;
  let i = t.selections.reduceRight((a, l) => a.concat(Fv(n, l, r)), []);
  if (!i.length) return;
  let o = i[0].name, s = i.every((a) => a.name === o);
  return e2 === void 0 && (e2 = await Qe.window.showInputBox({ prompt: "Enter Tag", value: s ? o : void 0 }), !e2) ? false : t.edit((a) => {
    i.forEach((l) => {
      a.replace(l.range, e2);
    });
  });
}
function jv(e2, t) {
  let n = [];
  if (e2.open) {
    let r = t.positionAt(e2.open.start);
    n.push({ name: e2.name, range: new Qe.Range(r.translate(0, 1), r.translate(0, 1).translate(0, e2.name.length)) });
  }
  if (e2.close) {
    let r = t.positionAt(e2.close.start), i = t.positionAt(e2.close.end);
    n.push({ name: e2.name, range: new Qe.Range(r.translate(0, 2), i.translate(0, -1)) });
  }
  return n;
}
function Fv(e2, t, n) {
  let r = e2.getText(), i = e2.offsetAt(t.start), o = H(r, n, i, true);
  return o ? jv(o, e2) : [];
}
var To = q(require("vscode"));
Z();
ie();
function Pc() {
  if (!G(false) || !To.window.activeTextEditor) return;
  let e2 = To.window.activeTextEditor, t = e2.document, n = R(t, true);
  if (!n) return;
  let r = [];
  e2.selections.forEach((i) => {
    let o = zv(t, n, i.start);
    o && r.push(o);
  }), r.length && (e2.selections = r, e2.revealRange(e2.selections[r.length - 1]));
}
function zv(e2, t, n) {
  let r = e2.offsetAt(n), i = H(e2.getText(), t, r, true);
  if (!i || !i.open || !i.close || r > i.open.end && r < i.close.start) return;
  let o = r <= i.open.end ? i.close.start + 2 : i.start + 1;
  return z(e2, o, o);
}
var Eo = q(require("vscode"));
Z();
ie();
var rr = [], Ic = [];
function $c() {
  _c(true);
}
function Rc() {
  _c(false);
}
function _c(e2) {
  if (!G(false) || !Eo.window.activeTextEditor) return;
  let t = Eo.window.activeTextEditor, n = t.document, r = R(n, true);
  if (!r) return;
  let i = e2 ? Dv : Uv, o = t.selections.map((s) => i(n, r, s));
  Oc(Ic, t.selections) ? e2 ? Oc(t.selections, o) || rr.push(t.selections) : rr.length && (o = rr.pop()) : rr = e2 ? [t.selections] : [], t.selections = o, Ic = t.selections;
}
function Dv(e2, t, n) {
  let r = e2.offsetAt(n.start), i = H(e2.getText(), t, r, false);
  if (!i) return n;
  if (!i.open || !i.close) return z(e2, i.start, i.end);
  let o, s;
  return i.close.start <= r && i.close.end > r ? (o = z(e2, i.close.start, i.open.end), s = z(e2, i.close.end, i.open.start)) : (o = z(e2, i.open.end, i.close.start), s = z(e2, i.open.start, i.close.end)), o.contains(n) && !o.isEqual(n) ? o : s.contains(n) && !s.isEqual(n) ? s : n;
}
function Uv(e2, t, n) {
  let r = e2.offsetAt(n.start), i = H(e2.getText(), t, r, true);
  if (!i) return n;
  let o = e2.offsetAt(n.start), s = e2.offsetAt(n.end);
  if (i.open && i.close) {
    let l = o === i.start && s === i.end, u = o > i.open.start && o < i.open.end, c = o > i.close.start && o < i.close.end;
    if (l || u || c) return z(e2, i.open.end, i.close.start);
  }
  if (!i.firstChild) return n;
  let a = i.firstChild;
  return o === a.start && s === a.end && a.open && a.close ? z(e2, a.open.end, a.close.start) : z(e2, a.start, a.end);
}
function Oc(e2, t) {
  if (e2.length !== t.length) return false;
  for (let n = 0; n < e2.length; n++) if (!e2[n].isEqual(t[n])) return false;
  return true;
}
var Yt = q(require("vscode"));
Z();
ie();
function Lc() {
  if (!G(false) || !Yt.window.activeTextEditor) return;
  let e2 = Yt.window.activeTextEditor, t = e2.document, n = R(e2.document, true);
  if (n) return e2.edit((r) => {
    Array.from(e2.selections).reverse().forEach((i) => {
      let o = t.getText(), s = t.offsetAt(i.start), a = H(o, n, s, true);
      if (a) {
        let l = Bv(t, a);
        r.replace(l.range, l.newText);
      }
    });
  });
}
function Bv(e2, t) {
  let n, r;
  if (!t.open || !t.close) {
    let o = e2.getText().substring(t.start, t.end).match(/(\s*\/)?>$/), s = t.end, a = o ? s - o[0].length : s;
    n = D(e2, a, s), r = `></${t.name}>`;
  } else {
    let i = t.open.end - 1, o = t.end;
    n = D(e2, i, o), r = "/>";
    let s = we(e2.languageId, {}, []) ?? "", a = gt(s);
    s && a.syntaxProfiles[s] && (a.syntaxProfiles[s].selfClosingStyle === "xhtml" || a.syntaxProfiles[s].self_closing_tag === "xhtml") && (r = " " + r);
  }
  return new Yt.TextEdit(n, r);
}
var Zt = q(require("vscode"));
Z();
ie();
function jc() {
  if (!G(false) || !Zt.window.activeTextEditor) return;
  let e2 = Zt.window.activeTextEditor, t = R(e2.document, true);
  if (t) return e2.edit((n) => {
    Array.from(e2.selections).reverse().forEach((r) => {
      let i = Mv(e2.document, r, t);
      i && n.replace(i.range, i.newText);
    });
  });
}
function Mv(e2, t, n) {
  let r, i, o = e2.offsetAt(t.start), s = e2.offsetAt(t.end);
  if (t.isEmpty ? r = i = B(n, o, true) : (r = B(n, o, true), i = B(n, s, true)), !r || !i) return;
  let a = e2.positionAt(r.start), l = a.line, u = a.character, f = e2.positionAt(i.end).line;
  if (l === f) return;
  let h = D(e2, r.start, i.end), p = e2.lineAt(l).text.substr(u);
  for (let k = l + 1; k <= f; k++) p += e2.lineAt(k).text.trim();
  return new Zt.TextEdit(h, p);
}
var K = q(require("vscode"));
Z();
Ct();
ie();
var ir, or, sr, ar;
function Fc() {
  if (!G() || !K.window.activeTextEditor) return;
  Vv();
  let e2 = K.window.activeTextEditor, t = R(e2.document, true);
  if (t) return e2.edit((n) => {
    let r = [];
    Array.from(e2.selections).reverse().forEach((o) => {
      let s = X(e2.document.languageId) ? Dc(e2.document, o, t) : qv(e2.document, o, t);
      s.length > 0 && r.push(s);
    }), r.sort((o, s) => {
      let a = o[0].range.start.line - s[0].range.start.line;
      return a === 0 ? o[0].range.start.character - s[0].range.start.character : a;
    });
    let i = new K.Position(0, 0);
    for (let o of r) o[0].range.end.isAfterOrEqual(i) && o.forEach((s) => {
      n.replace(s.range, s.newText), i = s.range.end;
    });
  });
}
function qv(e2, t, n) {
  let r = t.isReversed ? t.active : t.anchor, i = t.isReversed ? t.anchor : t.active, o = e2.offsetAt(r), s = e2.offsetAt(i), a = e2.getText(), l = H(a, n, o, true), u = H(a, n, s, true);
  if (!l || !u) return [];
  if (Jn(l, u) && l.name === "style" && l.open && l.close && l.open.end < o && l.close.start > s) {
    let h = " ".repeat(l.open.end) + a.substring(l.open.end, l.close.start), p = ve(h);
    return Dc(e2, t, p);
  }
  let c = yc(l, u), f = [];
  return c.forEach((h) => {
    f = f.concat(zc(h, e2));
  }), l.type === "comment" || (f.push(new K.TextEdit(D(e2, c[0].start, c[0].start), sr)), f.push(new K.TextEdit(D(e2, c[c.length - 1].end, c[c.length - 1].end), ar))), f;
}
function zc(e2, t) {
  let n = [];
  return e2.type === "comment" ? (n.push(new K.TextEdit(D(t, e2.start, e2.start + sr.length), "")), n.push(new K.TextEdit(D(t, e2.end - ar.length, e2.end), "")), n) : (e2.children.forEach((r) => {
    n = n.concat(zc(r, t));
  }), n);
}
function Dc(e2, t, n) {
  let r = t.isReversed ? t.active : t.anchor, i = t.isReversed ? t.anchor : t.active, o = e2.offsetAt(r), s = e2.offsetAt(i), a = B(n, o, true), l = B(n, s, true);
  t.isEmpty ? a && (o = a.start, s = a.end, t = z(e2, o, s)) : (o = Hv(a, o, n), s = Wv(l, s, n), t = z(e2, o, s));
  let u = [], c = [];
  return n.comments.forEach((f) => {
    let h = D(e2, f.start, f.end);
    t.intersection(h) && (u.push(h), c.push(new K.TextEdit(D(e2, f.start, f.start + ir.length), "")), c.push(new K.TextEdit(D(e2, f.end - or.length, f.end), "")));
  }), c.length > 0 ? c : [new K.TextEdit(new K.Range(t.start, t.start), ir), new K.TextEdit(new K.Range(t.end, t.end), or)];
}
function Vv() {
  K.workspace.getConfiguration("editor.comments").get("insertSpace") ? (ir = "/* ", or = " */", sr = "<!-- ", ar = " -->") : (ir = "/*", or = "*/", sr = "<!--", ar = "-->");
}
function Hv(e2, t, n) {
  for (let o of n.comments) if (o.start <= t && t <= o.end) return t;
  if (!e2) return t;
  if (e2.type === "property") return e2.start;
  let r = e2;
  if (t < r.contentStartToken.end || !r.firstChild) return r.start;
  if (t < r.firstChild.start) return t;
  let i = r.firstChild;
  for (; i.nextSibling && t > i.end; ) i = i.nextSibling;
  return i.start;
}
function Wv(e2, t, n) {
  for (let o of n.comments) if (o.start <= t && t <= o.end) return t;
  if (!e2) return t;
  if (e2.type === "property") return e2.end;
  let r = e2;
  if (t === r.contentEndToken.end || !r.firstChild) return r.end;
  if (t > r.children[r.children.length - 1].end) return t;
  let i = r.children[r.children.length - 1];
  for (; i.previousSibling && t < i.start; ) i = i.previousSibling;
  return i.end;
}
var bt = q(require("vscode"));
Z();
function Ao(e2) {
  if (!G() || !bt.window.activeTextEditor) return;
  let t = bt.window.activeTextEditor, n = [];
  t.selections.forEach((r) => {
    let i = e2 === "next" ? Gv(r, t) : Qv(r, t);
    n.push(i);
  }), t.selections = n, t.revealRange(t.selections[t.selections.length - 1]);
}
function Gv(e2, t) {
  for (let n = e2.anchor.line; n < t.document.lineCount; n++) {
    let r = Uc(n, t, e2.anchor, "next");
    if (r) return r;
  }
  return e2;
}
function Qv(e2, t) {
  for (let n = e2.anchor.line; n >= 0; n--) {
    let r = Uc(n, t, e2.anchor, "prev");
    if (r) return r;
  }
  return e2;
}
function Uc(e2, t, n, r) {
  let i = t.document.lineAt(e2), o = i.text;
  if (e2 !== n.line && i.isEmptyOrWhitespace && o.length) return new bt.Selection(e2, o.length, e2, o.length);
  e2 === n.line && r === "prev" && (o = o.substr(0, n.character));
  let s = r === "next" ? o.indexOf('""', e2 === n.line ? n.character : 0) : o.lastIndexOf('""'), a = r === "next" ? o.indexOf("><", e2 === n.line ? n.character : 0) : o.lastIndexOf("><"), l = -1;
  if (s > -1 && a > -1 ? l = r === "next" ? Math.min(s, a) : Math.max(s, a) : s > -1 ? l = s : l = a, l > -1) return new bt.Selection(e2, l + 1, e2, l + 1);
}
var No = q(require("vscode"));
Z();
Z();
function Bc(e2, t, n, r) {
  let i = e2.offsetAt(n), o = H(e2.getText(), r, i, false), s;
  if (o) {
    if (o.type !== "comment") {
      if (o.open && i <= o.open.start + o.name.length) return Co(e2, o);
      if (o.open && i < o.open.end) {
        let a = e2.offsetAt(t), l = Jv(e2, a, i, o);
        if (l) return l;
      }
      for (s = o.firstChild; s && (i >= s.end || s.type === "comment"); ) s = s.nextSibling;
    }
    for (; !s && o; ) o.nextSibling ? o.nextSibling.type !== "comment" ? s = o.nextSibling : o = o.nextSibling : o = o.parent;
    return s && Co(e2, s);
  }
}
function Mc(e2, t, n, r) {
  let i = e2.offsetAt(t), o = H(e2.getText(), r, i, false), s;
  if (!o) return;
  let a = e2.offsetAt(n);
  if (o.open && o.type !== "comment" && i - 1 > o.open.start) if (i < o.open.end || !o.firstChild || a <= o.firstChild.start) s = o;
  else {
    s = o.firstChild;
    let u;
    for (; s.nextSibling && i >= s.nextSibling.end; ) s && s.type !== "comment" && (u = s), s = s.nextSibling;
    s = mt(s && s.type !== "comment" ? s : u);
  }
  for (; !s && o; ) o.previousSibling ? o.previousSibling.type !== "comment" ? s = mt(o.previousSibling) : o = o.previousSibling : s = o.parent;
  if (!s) return;
  let l = Xv(e2, i, a, s);
  return l || Co(e2, s);
}
function Co(e2, t) {
  if (t && t.open) {
    let n = t.open.start + 1, r = n + t.name.length;
    return z(e2, n, r);
  }
}
function Jv(e2, t, n, r) {
  if (!(!r.attributes || r.attributes.length === 0 || r.type === "comment")) for (let i of r.attributes) {
    if (n < i.start) return z(e2, i.start, i.end);
    if (!i.value || i.value.start === i.value.end) continue;
    if (t === i.start && n === i.end || n < i.value.start) return z(e2, i.value.start, i.value.end);
    if (!i.value.toString().includes(" ")) continue;
    let o;
    if (t === i.value.start && n === i.value.end && (o = -1), o === void 0 && n < i.end) {
      let s = e2.positionAt(n).character, a = e2.positionAt(i.value.start).character;
      o = s - a - 1;
    }
    if (o !== void 0) {
      let [s, a] = Zn(i.value.toString(), o);
      if (s === void 0 || a === void 0) return;
      if (s >= 0 && a >= 0) {
        let l = i.value.start + s, u = i.value.start + a;
        return z(e2, l, u);
      }
    }
  }
}
function Xv(e2, t, n, r) {
  if (!(!r.attributes || r.attributes.length === 0 || r.type === "comment")) for (let i = r.attributes.length - 1; i >= 0; i--) {
    let o = r.attributes[i];
    if (t <= o.start) continue;
    if (!o.value || o.value.start === o.value.end || t < o.value.start) return z(e2, o.start, o.end);
    if (t === o.value.start) return n >= o.value.end ? z(e2, o.start, o.end) : z(e2, o.value.start, o.value.end);
    let s = e2.positionAt(t).character, a = e2.positionAt(o.value.start).character, l = t > o.value.end ? o.value.toString().length : s - a, [u, c] = Kn(o.value.toString(), l);
    if (u === void 0 || c === void 0) return;
    if (u >= 0 && c >= 0) {
      let f = o.value.start + u, h = o.value.start + c;
      return z(e2, f, h);
    }
  }
}
var qc = q(require("vscode"));
Z();
function Vc(e2, t, n, r) {
  let i = e2.offsetAt(t), o = e2.offsetAt(n), s = B(r, o, true);
  if (s || (s = r), !s) return;
  if (s.type === "property" && i === s.start && o === s.end) return ur(e2, s, i, o, true, "next");
  if (s.type === "property" && i >= s.valueToken.start && o <= s.valueToken.end) {
    let l = ur(e2, s, i, o, false, "next");
    if (l) return l;
  }
  if (s.type === "rule" && o < s.selectorToken.end || s.type === "property" && o < s.valueToken.end) return lr(e2, s);
  let a = s.firstChild;
  for (; a && o >= a.end; ) a = a.nextSibling;
  for (; !a && s; ) a = s.nextSibling, s = s.parent;
  return a ? lr(e2, a) : void 0;
}
function Hc(e2, t, n, r) {
  let i = e2.offsetAt(t), o = e2.offsetAt(n), s = B(r, i, false);
  if (s || (s = r), !s) return;
  if (s.type === "property" && i === s.valueToken.start && o === s.valueToken.end) return lr(e2, s);
  if (s.type === "property" && i >= s.valueToken.start && o <= s.valueToken.end) {
    let l = ur(e2, s, i, o, false, "prev");
    if (l) return l;
  }
  if (s.type === "property" || !s.firstChild || s.type === "rule" && i <= s.firstChild.start) return lr(e2, s);
  let a = s.firstChild;
  for (; a.nextSibling && i >= a.nextSibling.end; ) a = a.nextSibling;
  return a = mt(a), ur(e2, a, i, o, false, "prev");
}
function lr(e2, t) {
  if (!t) return;
  let n = t.type === "rule" ? t.selectorToken : t;
  return z(e2, n.start, n.end);
}
function ur(e2, t, n, r, i, o) {
  if (!t || t.type !== "property") return;
  let s = t, a = s.valueToken.stream.substring(s.valueToken.start, s.valueToken.end);
  if (i = i || o === "prev" && n === s.valueToken.start && r < s.valueToken.end, i) return z(e2, s.valueToken.start, s.valueToken.end);
  let l = -1;
  if (o === "prev") {
    if (n === s.valueToken.start) return;
    let k = e2.positionAt(n).character, x = e2.positionAt(s.valueToken.start).character;
    l = n > s.valueToken.end ? a.length : k - x;
  } else if (o === "next") {
    if (r === s.valueToken.end && (n > s.valueToken.start || !a.includes(" "))) return;
    let k = e2.positionAt(r).character, x = e2.positionAt(s.valueToken.start).character;
    l = r === s.valueToken.end ? -1 : k - x - 1;
  }
  let [u, c] = o === "prev" ? Kn(a, l) : Zn(a, l);
  if (!u && !c) return;
  let f = e2.positionAt(s.valueToken.start), h = f.translate(0, u), p = f.translate(0, c);
  return new qc.Selection(h, p);
}
ie();
function Po(e2) {
  if (!G() || !No.window.activeTextEditor) return;
  let t = No.window.activeTextEditor, n = t.document, r = R(n, true);
  if (!r) return;
  let i = [];
  t.selections.forEach((o) => {
    let s = o.isReversed ? o.active : o.anchor, a = o.isReversed ? o.anchor : o.active, l;
    X(t.document.languageId) ? l = e2 === "next" ? Vc(n, s, a, r) : Hc(n, s, a, r) : l = e2 === "next" ? Bc(n, s, a, r) : Mc(n, s, a, r), i.push(l || o);
  }), t.selections = i, t.revealRange(t.selections[t.selections.length - 1]);
}
var oe = q(require("vscode"));
function vt(e2) {
  return e2 > 47 && e2 < 58;
}
function Oo(e2) {
  return e2 === 32 || e2 === 9 || e2 === 160;
}
function fr(e2) {
  return Oo(e2) || e2 === 10 || e2 === 13;
}
var cr = class e {
  constructor(t, n, r) {
    r == null && typeof t == "string" && (r = t.length), this.string = t, this.pos = this.start = n || 0, this.end = r || 0;
  }
  eof() {
    return this.pos >= this.end;
  }
  limit(t, n) {
    return new e(this.string, t, n);
  }
  peek() {
    return this.string.charCodeAt(this.pos);
  }
  next() {
    if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
  }
  eat(t) {
    let n = this.peek(), r = typeof t == "function" ? t(n) : n === t;
    return r && this.next(), r;
  }
  eatWhile(t) {
    let n = this.pos;
    for (; !this.eof() && this.eat(t); ) ;
    return this.pos !== n;
  }
  backUp(t) {
    this.pos -= t || 1;
  }
  current() {
    return this.substring(this.start, this.pos);
  }
  substring(t, n) {
    return this.string.slice(t, n);
  }
  error(t, n = this.pos) {
    return new Io(`${t} at ${n + 1}`, n, this.string);
  }
}, Io = class extends Error {
  constructor(t, n, r) {
    super(t), this.pos = n, this.string = r;
  }
};
var Yv = dr("null", 0);
function Zv(e2) {
  let t = typeof e2 == "string" ? new cr(e2) : e2, n, r = 0, i = 21, o = [];
  for (; !t.eof(); ) t.eatWhile(Oo), t.start = t.pos, Kv(t) ? ((i & 1) === 0 && Je("Unexpected number", t), o.push(tx(t.current())), i = 10) : Qc(t.peek()) ? (n = t.next(), Wc(n) && i & 16 ? (Gc(n) && o.push(nx(n, r)), i = 21) : ((i & 2) === 0 && Je("Unexpected operator", t), o.push(rx(n, r)), i = 21)) : t.eat(40) ? ((i & 4) === 0 && Je('Unexpected "("', t), r += 10, i = 53) : t.eat(41) ? (r -= 10, i & 32 ? o.push(Yv) : (i & 8) === 0 && Je('Unexpected ")"', t), i = 14) : Je("Unknown character", t);
  (r < 0 || r >= 10) && Je('Unmatched "()"', t);
  let s = ex(o);
  return s === null && Je("Parity", t), s;
}
function Kv(e2) {
  let t = e2.pos;
  return e2.eat(46) && e2.eatWhile(vt) || e2.eatWhile(vt) && (!e2.eat(46) || e2.eatWhile(vt)) ? true : (e2.pos = t, false);
}
function ex(e2) {
  let t = [], n = [], r = 0;
  for (let i = 0; i < e2.length; i++) {
    let o = e2[i];
    if (o.type === "num") n.push(o);
    else {
      for (r += o.type === "op1" ? 1 : 2; t.length && o.priority <= t[t.length - 1].priority; ) n.push(t.pop());
      t.push(o);
    }
  }
  return r + 1 === n.length + t.length ? n.concat(t.reverse()) : null;
}
function tx(e2, t) {
  return dr("num", parseFloat(e2), t);
}
function nx(e2, t = 0) {
  return e2 === 45 && (t += 2), dr("op1", e2, t);
}
function rx(e2, t = 0) {
  return e2 === 42 ? t += 1 : (e2 === 47 || e2 === 92) && (t += 2), dr("op2", e2, t);
}
function Je(e2, t) {
  throw t && (e2 += ` at column ${t.pos} of expression`), new Error(e2);
}
function Wc(e2) {
  return ix(e2) || Gc(e2);
}
function ix(e2) {
  return e2 === 43;
}
function Gc(e2) {
  return e2 === 45;
}
function Qc(e2) {
  return e2 === 43 || e2 === 45 || e2 === 42 || e2 === 47 || e2 === 92;
}
function dr(e2, t, n = 0) {
  return { type: e2, value: t, priority: n };
}
var ox = { lookAhead: true, whitespace: true };
function Jc(e2, t = e2.length, n) {
  let r = Object.assign(Object.assign({}, ox), n), i = { text: e2, pos: t }, o;
  if (r.lookAhead && $o(i) === 41) {
    i.pos++;
    let l = e2.length;
    for (; i.pos < l && (o = $o(i), !(o !== 41 && !(r.whitespace && fr(o)))); ) i.pos++;
  }
  let s = i.pos, a = 0;
  for (; i.pos >= 0; ) if (!sx(i)) {
    if (o = Ro(i), o === 41) a++;
    else if (o === 40) {
      if (!a) break;
      a--;
    } else if (!(r.whitespace && fr(o) || Wc(o) || Qc(o))) break;
    i.pos--;
  }
  if (i.pos !== s && !a) {
    for (; fr($o(i)); ) i.pos++;
    return [i.pos, s];
  }
  return null;
}
function sx(e2) {
  if (vt(Ro(e2))) {
    e2.pos--;
    let t = false, n;
    for (; e2.pos >= 0; ) {
      if (n = Ro(e2), n === 46) {
        if (t) break;
        t = true;
      } else if (!vt(n)) break;
      e2.pos--;
    }
    return true;
  }
  return false;
}
function Ro(e2) {
  return e2.text.charCodeAt(e2.pos - 1);
}
function $o(e2) {
  return e2.text.charCodeAt(e2.pos);
}
var ax = { 45: (e2) => -e2 }, lx = { 43: (e2, t) => e2 + t, 45: (e2, t) => e2 - t, 42: (e2, t) => e2 * t, 47: (e2, t) => e2 / t, 92: (e2, t) => Math.floor(e2 / t) };
function ux(e2) {
  if (Array.isArray(e2) || (e2 = Zv(e2)), !e2 || !e2.length) return null;
  let t = [], n, r, i;
  for (let o = 0, s = e2.length; o < s; o++) {
    let a = e2[o];
    if (a.type === "num") t.push(a.value);
    else if (a.type === "op2") r = t.pop(), n = t.pop(), i = lx[a.value], t.push(i(n, r));
    else if (a.type === "op1") n = t.pop(), i = ax[a.value], t.push(i(n));
    else throw new Error("Invalid expression");
  }
  if (t.length > 1) throw new Error("Invalid Expression (parity)");
  return t[0];
}
var _o = ux;
function Xc() {
  if (!oe.window.activeTextEditor) return oe.window.showInformationMessage("No editor is active"), Promise.resolve(false);
  let e2 = oe.window.activeTextEditor;
  return e2.edit((t) => {
    e2.selections.forEach((n) => {
      let r = n.isReversed ? n.active : n.anchor, i = n.isReversed ? n.anchor : n.active, o = e2.document.getText(new oe.Range(r, i));
      try {
        if (o) {
          let s = String(_o(o));
          t.replace(new oe.Range(r, i), s);
        } else {
          let s = e2.document.getText(new oe.Range(new oe.Position(n.end.line, 0), i)), a = Jc(s);
          if (!a) throw new Error("Invalid extracted indices");
          let l = String(_o(s.substr(a[0], a[1]))), u = new oe.Range(new oe.Position(n.end.line, a[0]), new oe.Position(n.end.line, a[1]));
          t.replace(u, l);
        }
      } catch (s) {
        oe.window.showErrorMessage("Could not evaluate expression"), console.warn("Math evaluation error", s);
      }
    });
  });
}
var xt = q(require("vscode")), Lo = /[0-9]/;
function Xe(e2) {
  if (!xt.window.activeTextEditor) {
    xt.window.showInformationMessage("No editor is active");
    return;
  }
  let t = xt.window.activeTextEditor;
  return t.edit((n) => {
    t.selections.forEach((r) => {
      let i = fx(t.document, r.isReversed ? r.anchor : r.active);
      if (!i) return;
      let o = t.document.getText(i);
      Yc(o) && n.replace(i, cx(o, e2));
    });
  });
}
function cx(e2, t) {
  let n, r = (n = e2.match(/\.(\d+)$/)) ? n[1].length : 1, i = String((parseFloat(e2) + t).toFixed(r)).replace(/\.0+$/, "");
  return (n = e2.match(/^\-?(0\d+)/)) && (i = i.replace(/^(\-?)(\d+)/, (o, s, a) => s + "0".repeat(Math.max(0, (n ? n[1].length : 0) - a.length)) + a)), /^\-?\./.test(e2) && (i = i.replace(/^(\-?)0+/, "$1")), i;
}
function fx(e2, t) {
  let n = e2.lineAt(t.line).text, r = t.character, i = t.character, o = false, s = false, a;
  for (; r > 0; ) if (a = n[--r], a === "-") {
    s = true;
    break;
  } else if (a === "." && !o) o = true;
  else if (!Lo.test(a)) {
    r++;
    break;
  }
  for (n[i] === "-" && !s && i++; i < n.length; ) if (a = n[i++], a === "." && !o && Lo.test(n[i])) o = true;
  else if (!Lo.test(a)) {
    i--;
    break;
  }
  if (r !== i && Yc(n.slice(r, i))) return new xt.Range(t.line, r, t.line, i);
}
function Yc(e2) {
  return e2 ? !isNaN(parseFloat(e2)) : false;
}
Z();
var jo = require("vscode");
Z();
var Zc = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
function Kc() {
  let e2 = jo.window.activeTextEditor;
  if (!e2) {
    jo.window.showInformationMessage("No editor is active.");
    return;
  }
  let t = wc(e2, e2.selection.active);
  if (t) return dx(e2, t);
}
function dx(e2, t) {
  let n = t.parent, r = "";
  for (let s of Zc) if (t.name.startsWith(s)) {
    r = s;
    break;
  }
  let i = t.name.substr(r.length), o = t.value;
  return e2.edit((s) => {
    Zc.forEach((a) => {
      if (a === r) return;
      let l = Qt(n, a + i);
      if (l) {
        let u = D(e2.document, l.valueToken.start, l.valueToken.end);
        s.replace(u, o);
      }
    });
  });
}
ie();
function tf(e2) {
  xc(), ef(e2), Xn(), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.wrapWithAbbreviation", (t) => {
    Tc(t);
  })), e2.subscriptions.push(O.commands.registerCommand("emmet.expandAbbreviation", (t) => {
    Ec(t);
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.removeTag", () => Nc())), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.updateTag", (t) => t && typeof t == "string" ? So(t) : So(void 0))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.matchTag", () => {
    Pc();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.balanceOut", () => {
    $c();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.balanceIn", () => {
    Rc();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.splitJoinTag", () => Lc())), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.mergeLines", () => {
    jc();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.toggleComment", () => {
    Fc();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.nextEditPoint", () => {
    Ao("next");
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.prevEditPoint", () => {
    Ao("prev");
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.selectNextItem", () => {
    Po("next");
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.selectPrevItem", () => {
    Po("prev");
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.evaluateMathExpression", () => {
    Xc();
  })), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.incrementNumberByOneTenth", () => Xe(0.1))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.incrementNumberByOne", () => Xe(1))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.incrementNumberByTen", () => Xe(10))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.decrementNumberByOneTenth", () => Xe(-0.1))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.decrementNumberByOne", () => Xe(-1))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.decrementNumberByTen", () => Xe(-10))), e2.subscriptions.push(O.commands.registerCommand("editor.emmet.action.reflectCSSValue", () => Kc())), e2.subscriptions.push(O.commands.registerCommand("workbench.action.showEmmetCommands", () => {
    O.commands.executeCommand("workbench.action.quickOpen", ">Emmet: ");
  })), e2.subscriptions.push(O.workspace.onDidChangeConfiguration((t) => {
    (t.affectsConfiguration("emmet.includeLanguages") || t.affectsConfiguration("emmet.useInlineCompletions")) && ef(e2), t.affectsConfiguration("emmet.extensionsPath") && Xn();
  })), e2.subscriptions.push(O.workspace.onDidSaveTextDocument((t) => {
    let n = Sc(t.fileName);
    n.startsWith("snippets") && n.endsWith(".json") && Xn(true);
  })), e2.subscriptions.push(O.workspace.onDidOpenTextDocument((t) => {
    let n = we(t.languageId, {}, []) ?? "", r = tr();
    (r.markup.includes(n) || r.stylesheet.includes(n)) && Zs(t);
  })), e2.subscriptions.push(O.workspace.onDidCloseTextDocument((t) => {
    let n = we(t.languageId, {}, []) ?? "", r = tr();
    (r.markup.includes(n) || r.stylesheet.includes(n)) && Ks(t);
  }));
}
var yt = /* @__PURE__ */ new Map(), Kt = [];
function ef(e2) {
  px();
  let t = new nr(), n = { async provideInlineCompletionItems(o, s, a, l) {
    let u = await t.provideCompletionItems(o, s, l, { triggerCharacter: void 0, triggerKind: O.CompletionTriggerKind.Invoke });
    if (!u) return;
    let c = u.items[0];
    if (!c) return;
    let f = c.range;
    if (o.getText(f) === c.label) return [{ insertText: c.insertText, filterText: c.label, range: f }];
  } }, r = O.workspace.getConfiguration("emmet").get("useInlineCompletions"), i = ht();
  Object.keys(i).forEach((o) => {
    if (yt.has(o) && yt.get(o) === i[o]) return;
    if (r) {
      let a = O.languages.registerInlineCompletionItemProvider({ language: o, scheme: "*" }, n);
      Kt.push(a);
    }
    let s = O.languages.registerCompletionItemProvider({ language: o, scheme: "*" }, t, ...Wt[i[o]]);
    Kt.push(s), yt.set(o, i[o]);
  }), Object.keys(Wt).forEach((o) => {
    if (!yt.has(o)) {
      if (r) {
        let a = O.languages.registerInlineCompletionItemProvider({ language: o, scheme: "*" }, n);
        Kt.push(a);
      }
      let s = O.languages.registerCompletionItemProvider({ language: o, scheme: "*" }, t, ...Wt[o]);
      Kt.push(s), yt.set(o, o);
    }
  });
}
function px() {
  yt.clear();
  let e2;
  for (; e2 = Kt.pop(); ) e2.dispose();
}
Z();
function Xy(e2) {
  e2.subscriptions.push(Ur.commands.registerCommand("editor.emmet.action.updateImageSize", () => Promise.resolve().then(() => (Kf(), Zf)).then((t) => t.updateImageSize()))), vc(Ur.Uri.file((0, ed.homedir)())), tf(e2);
}
