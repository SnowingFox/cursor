!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n2 = new e2.Error().stack;
    n2 && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n2] = "51e65781-714a-55b6-9023-7f829a0ee6b5");
  } catch (e3) {
  }
})();
var t = Uint8Array, n = Uint16Array, r = Int32Array, e = new t([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), i = new t([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), s = new t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), a = function(X, V) {
  for (var Y = new n(31), Z = 0; Z < 31; ++Z) Y[Z] = V += 1 << X[Z - 1];
  var R = new r(Y[30]);
  for (Z = 1; Z < 30; ++Z) for (var Q = Y[Z]; Q < Y[Z + 1]; ++Q) R[Q] = Q - Y[Z] << 5 | Z;
  return { b: Y, r: R };
}, o = a(e, 2), h = o.b, f = o.r;
h[28] = 258, f[258] = 28;
for (var l = a(i, 0).r, u = new n(32768), c = 0; c < 32768; ++c) {
  var v = (43690 & c) >> 1 | (21845 & c) << 1;
  v = (61680 & (v = (52428 & v) >> 2 | (13107 & v) << 2)) >> 4 | (3855 & v) << 4, u[c] = ((65280 & v) >> 8 | (255 & v) << 8) >> 1;
}
var d = function(X, V, Y) {
  for (var Z = X.length, R = 0, Q = new n(V); R < Z; ++R) X[R] && ++Q[X[R] - 1];
  var nt, W = new n(V);
  for (R = 1; R < V; ++R) W[R] = W[R - 1] + Q[R - 1] << 1;
  if (Y) {
    nt = new n(1 << V);
    var tt = 15 - V;
    for (R = 0; R < Z; ++R) if (X[R]) for (var ot = R << 4 | X[R], $ = V - X[R], lt = W[X[R] - 1]++ << $, rt = lt | (1 << $) - 1; lt <= rt; ++lt) nt[u[lt] >> tt] = ot;
  } else for (nt = new n(Z), R = 0; R < Z; ++R) X[R] && (nt[R] = u[W[X[R] - 1]++] >> 15 - X[R]);
  return nt;
}, p = new t(288);
for (c = 0; c < 144; ++c) p[c] = 8;
for (c = 144; c < 256; ++c) p[c] = 9;
for (c = 256; c < 280; ++c) p[c] = 7;
for (c = 280; c < 288; ++c) p[c] = 8;
var g = new t(32);
for (c = 0; c < 32; ++c) g[c] = 5;
var w = d(p, 9, 0), y = d(g, 5, 0), m = function(X) {
  return (X + 7) / 8 | 0;
}, b = function(X, V, Y) {
  return (Y == null || Y > X.length) && (Y = X.length), new t(X.subarray(V, Y));
}, M = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], E = function(X, V, Y) {
  var Z = new Error(V || M[X]);
  if (Z.code = X, Error.captureStackTrace && Error.captureStackTrace(Z, E), !Y) throw Z;
  return Z;
}, z = function(X, V, Y) {
  Y <<= 7 & V;
  var Z = V / 8 | 0;
  X[Z] |= Y, X[Z + 1] |= Y >> 8;
}, _ = function(X, V, Y) {
  Y <<= 7 & V;
  var Z = V / 8 | 0;
  X[Z] |= Y, X[Z + 1] |= Y >> 8, X[Z + 2] |= Y >> 16;
}, x = function(X, V) {
  for (var Y = [], Z = 0; Z < X.length; ++Z) X[Z] && Y.push({ s: Z, f: X[Z] });
  var R = Y.length, Q = Y.slice();
  if (!R) return { t: F, l: 0 };
  if (R == 1) {
    var nt = new t(Y[0].s + 1);
    return nt[Y[0].s] = 1, { t: nt, l: 1 };
  }
  Y.sort(function(ct, pt) {
    return ct.f - pt.f;
  }), Y.push({ s: -1, f: 25001 });
  var W = Y[0], tt = Y[1], ot = 0, $ = 1, lt = 2;
  for (Y[0] = { s: -1, f: W.f + tt.f, l: W, r: tt }; $ != R - 1; ) W = Y[Y[ot].f < Y[lt].f ? ot++ : lt++], tt = Y[ot != $ && Y[ot].f < Y[lt].f ? ot++ : lt++], Y[$++] = { s: -1, f: W.f + tt.f, l: W, r: tt };
  var rt = Q[0].s;
  for (Z = 1; Z < R; ++Z) Q[Z].s > rt && (rt = Q[Z].s);
  var at = new n(rt + 1), dt = A(Y[$ - 1], at, 0);
  if (dt > V) {
    Z = 0;
    var ft = 0, wt = dt - V, st = 1 << wt;
    for (Q.sort(function(ct, pt) {
      return at[pt.s] - at[ct.s] || ct.f - pt.f;
    }); Z < R; ++Z) {
      var yt = Q[Z].s;
      if (!(at[yt] > V)) break;
      ft += st - (1 << dt - at[yt]), at[yt] = V;
    }
    for (ft >>= wt; ft > 0; ) {
      var St = Q[Z].s;
      at[St] < V ? ft -= 1 << V - at[St]++ - 1 : ++Z;
    }
    for (; Z >= 0 && ft; --Z) {
      var Vt = Q[Z].s;
      at[Vt] == V && (--at[Vt], ++ft);
    }
    dt = V;
  }
  return { t: new t(at), l: dt };
}, A = function(X, V, Y) {
  return X.s == -1 ? Math.max(A(X.l, V, Y + 1), A(X.r, V, Y + 1)) : V[X.s] = Y;
}, D = function(X) {
  for (var V = X.length; V && !X[--V]; ) ;
  for (var Y = new n(++V), Z = 0, R = X[0], Q = 1, nt = function(tt) {
    Y[Z++] = tt;
  }, W = 1; W <= V; ++W) if (X[W] == R && W != V) ++Q;
  else {
    if (!R && Q > 2) {
      for (; Q > 138; Q -= 138) nt(32754);
      Q > 2 && (nt(Q > 10 ? Q - 11 << 5 | 28690 : Q - 3 << 5 | 12305), Q = 0);
    } else if (Q > 3) {
      for (nt(R), --Q; Q > 6; Q -= 6) nt(8304);
      Q > 2 && (nt(Q - 3 << 5 | 8208), Q = 0);
    }
    for (; Q--; ) nt(R);
    Q = 1, R = X[W];
  }
  return { c: Y.subarray(0, Z), n: V };
}, T = function(X, V) {
  for (var Y = 0, Z = 0; Z < V.length; ++Z) Y += X[Z] * V[Z];
  return Y;
}, k = function(X, V, Y) {
  var Z = Y.length, R = m(V + 2);
  X[R] = 255 & Z, X[R + 1] = Z >> 8, X[R + 2] = 255 ^ X[R], X[R + 3] = 255 ^ X[R + 1];
  for (var Q = 0; Q < Z; ++Q) X[R + Q + 4] = Y[Q];
  return 8 * (R + 4 + Z);
}, U = function(X, V, Y, Z, R, Q, nt, W, tt, ot, $) {
  z(V, $++, Y), ++R[256];
  for (var lt = x(R, 15), rt = lt.t, at = lt.l, dt = x(Q, 15), ft = dt.t, wt = dt.l, st = D(rt), yt = st.c, St = st.n, Vt = D(ft), ct = Vt.c, pt = Vt.n, gt = new n(19), it = 0; it < yt.length; ++it) ++gt[31 & yt[it]];
  for (it = 0; it < ct.length; ++it) ++gt[31 & ct[it]];
  for (var Zt = x(gt, 7), Dt = Zt.t, Xt = Zt.l, vt = 19; vt > 4 && !Dt[s[vt - 1]]; --vt) ;
  var bt, mt, _t, et, Et = ot + 5 << 3, kt = T(R, p) + T(Q, g) + nt, zt = T(R, rt) + T(Q, ft) + nt + 14 + 3 * vt + T(gt, Dt) + 2 * gt[16] + 3 * gt[17] + 7 * gt[18];
  if (tt >= 0 && Et <= kt && Et <= zt) return k(V, $, X.subarray(tt, tt + ot));
  if (z(V, $, 1 + (zt < kt)), $ += 2, zt < kt) {
    bt = d(rt, at, 0), mt = rt, _t = d(ft, wt, 0), et = ft;
    var Yt = d(Dt, Xt, 0);
    for (z(V, $, St - 257), z(V, $ + 5, pt - 1), z(V, $ + 10, vt - 4), $ += 14, it = 0; it < vt; ++it) z(V, $ + 3 * it, Dt[s[it]]);
    $ += 3 * vt;
    for (var Tt = [yt, ct], Mt = 0; Mt < 2; ++Mt) {
      var xt = Tt[Mt];
      for (it = 0; it < xt.length; ++it) {
        var ht = 31 & xt[it];
        z(V, $, Yt[ht]), $ += Dt[ht], ht > 15 && (z(V, $, xt[it] >> 5 & 127), $ += xt[it] >> 12);
      }
    }
  } else bt = w, mt = p, _t = y, et = g;
  for (it = 0; it < W; ++it) {
    var ut = Z[it];
    if (ut > 255) {
      _(V, $, bt[(ht = ut >> 18 & 31) + 257]), $ += mt[ht + 257], ht > 7 && (z(V, $, ut >> 23 & 31), $ += e[ht]);
      var At = 31 & ut;
      _(V, $, _t[At]), $ += et[At], At > 3 && (_(V, $, ut >> 5 & 8191), $ += i[At]);
    } else _(V, $, bt[ut]), $ += mt[ut];
  }
  return _(V, $, bt[256]), $ + mt[256];
}, C = new r([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), F = new t(0), I = (function() {
  for (var X = new Int32Array(256), V = 0; V < 256; ++V) {
    for (var Y = V, Z = 9; --Z; ) Y = (1 & Y && -306674912) ^ Y >>> 1;
    X[V] = Y;
  }
  return X;
})(), S = function() {
  var X = 1, V = 0;
  return { p: function(Y) {
    for (var Z = X, R = V, Q = 0 | Y.length, nt = 0; nt != Q; ) {
      for (var W = Math.min(nt + 2655, Q); nt < W; ++nt) R += Z += Y[nt];
      Z = (65535 & Z) + 15 * (Z >> 16), R = (65535 & R) + 15 * (R >> 16);
    }
    X = Z, V = R;
  }, d: function() {
    return (255 & (X %= 65521)) << 24 | (65280 & X) << 8 | (255 & (V %= 65521)) << 8 | V >> 8;
  } };
}, L = function(X, V, Y, Z, R) {
  if (!R && (R = { l: 1 }, V.dictionary)) {
    var Q = V.dictionary.subarray(-32768), nt = new t(Q.length + X.length);
    nt.set(Q), nt.set(X, Q.length), X = nt, R.w = Q.length;
  }
  return (function(W, tt, ot, $, lt, rt) {
    var at = rt.z || W.length, dt = new t($ + at + 5 * (1 + Math.ceil(at / 7e3)) + lt), ft = dt.subarray($, dt.length - lt), wt = rt.l, st = 7 & (rt.r || 0);
    if (tt) {
      st && (ft[0] = rt.r >> 3);
      for (var yt = C[tt - 1], St = yt >> 13, Vt = 8191 & yt, ct = (1 << ot) - 1, pt = rt.p || new n(32768), gt = rt.h || new n(ct + 1), it = Math.ceil(ot / 3), Zt = 2 * it, Dt = function(Ft) {
        return (W[Ft] ^ W[Ft + 1] << it ^ W[Ft + 2] << Zt) & ct;
      }, Xt = new r(25e3), vt = new n(288), bt = new n(32), mt = 0, _t = 0, et = rt.i || 0, Et = 0, kt = rt.w || 0, zt = 0; et + 2 < at; ++et) {
        var Yt = Dt(et), Tt = 32767 & et, Mt = gt[Yt];
        if (pt[Tt] = Mt, gt[Yt] = Tt, kt <= et) {
          var xt = at - et;
          if ((mt > 7e3 || Et > 24576) && (xt > 423 || !wt)) {
            st = U(W, ft, 0, Xt, vt, bt, _t, Et, zt, et - zt, st), Et = mt = _t = 0, zt = et;
            for (var ht = 0; ht < 286; ++ht) vt[ht] = 0;
            for (ht = 0; ht < 30; ++ht) bt[ht] = 0;
          }
          var ut = 2, At = 0, Jt = Vt, Ct = Tt - Mt & 32767;
          if (xt > 2 && Yt == Dt(et - Ct)) for (var Ht = Math.min(St, xt) - 1, Qt = Math.min(32767, et), Wt = Math.min(258, xt); Ct <= Qt && --Jt && Tt != Mt; ) {
            if (W[et + ut] == W[et + ut - Ct]) {
              for (var Ut = 0; Ut < Wt && W[et + Ut] == W[et + Ut - Ct]; ++Ut) ;
              if (Ut > ut) {
                if (ut = Ut, At = Ct, Ut > Ht) break;
                var Pt = Math.min(Ct, Ut - 2), Rt = 0;
                for (ht = 0; ht < Pt; ++ht) {
                  var Lt = et - Ct + ht & 32767, Ot = Lt - pt[Lt] & 32767;
                  Ot > Rt && (Rt = Ot, Mt = Lt);
                }
              }
            }
            Ct += (Tt = Mt) - (Mt = pt[Tt]) & 32767;
          }
          if (At) {
            Xt[Et++] = 268435456 | f[ut] << 18 | l[At];
            var Gt = 31 & f[ut], It = 31 & l[At];
            _t += e[Gt] + i[It], ++vt[257 + Gt], ++bt[It], kt = et + ut, ++mt;
          } else Xt[Et++] = W[et], ++vt[W[et]];
        }
      }
      for (et = Math.max(et, kt); et < at; ++et) Xt[Et++] = W[et], ++vt[W[et]];
      st = U(W, ft, wt, Xt, vt, bt, _t, Et, zt, et - zt, st), wt || (rt.r = 7 & st | ft[st / 8 | 0] << 3, st -= 7, rt.h = gt, rt.p = pt, rt.i = et, rt.w = kt);
    } else {
      for (et = rt.w || 0; et < at + wt; et += 65535) {
        var Nt = et + 65535;
        Nt >= at && (ft[st / 8 | 0] = wt, Nt = at), st = k(ft, st + 1, W.subarray(et, Nt));
      }
      rt.i = at;
    }
    return b(dt, 0, $ + m(st) + lt);
  })(X, V.level == null ? 6 : V.level, V.mem == null ? R.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(X.length)))) : 20 : 12 + V.mem, Y, Z, R);
}, O = function(X, V, Y) {
  for (; Y; ++V) X[V] = Y, Y >>>= 8;
}, j = (function() {
  function X(V, Y) {
    if (typeof V == "function" && (Y = V, V = {}), this.ondata = Y, this.o = V || {}, this.s = { l: 0, i: 32768, w: 32768, z: 32768 }, this.b = new t(98304), this.o.dictionary) {
      var Z = this.o.dictionary.subarray(-32768);
      this.b.set(Z, 32768 - Z.length), this.s.i = 32768 - Z.length;
    }
  }
  return X.prototype.p = function(V, Y) {
    this.ondata(L(V, this.o, 0, 0, this.s), Y);
  }, X.prototype.push = function(V, Y) {
    this.ondata || E(5), this.s.l && E(4);
    var Z = V.length + this.s.z;
    if (Z > this.b.length) {
      if (Z > 2 * this.b.length - 32768) {
        var R = new t(-32768 & Z);
        R.set(this.b.subarray(0, this.s.z)), this.b = R;
      }
      var Q = this.b.length - this.s.z;
      this.b.set(V.subarray(0, Q), this.s.z), this.s.z = this.b.length, this.p(this.b, false), this.b.set(this.b.subarray(-32768)), this.b.set(V.subarray(Q), 32768), this.s.z = V.length - Q + 32768, this.s.i = 32766, this.s.w = 32768;
    } else this.b.set(V, this.s.z), this.s.z += V.length;
    this.s.l = 1 & Y, (this.s.z > this.s.w + 8191 || Y) && (this.p(this.b, Y || false), this.s.w = this.s.i, this.s.i -= 2);
  }, X.prototype.flush = function() {
    this.ondata || E(5), this.s.l && E(4), this.p(this.b, false), this.s.w = this.s.i, this.s.i -= 2;
  }, X;
})();
function q(X, V) {
  V || (V = {});
  var Y = /* @__PURE__ */ (function() {
    var W = -1;
    return { p: function(tt) {
      for (var ot = W, $ = 0; $ < tt.length; ++$) ot = I[255 & ot ^ tt[$]] ^ ot >>> 8;
      W = ot;
    }, d: function() {
      return ~W;
    } };
  })(), Z = X.length;
  Y.p(X);
  var R, Q = L(X, V, 10 + ((R = V).filename ? R.filename.length + 1 : 0), 8), nt = Q.length;
  return (function(W, tt) {
    var ot = tt.filename;
    if (W[0] = 31, W[1] = 139, W[2] = 8, W[8] = tt.level < 2 ? 4 : tt.level == 9 ? 2 : 0, W[9] = 3, tt.mtime != 0 && O(W, 4, Math.floor(new Date(tt.mtime || Date.now()) / 1e3)), ot) {
      W[3] = 8;
      for (var $ = 0; $ <= ot.length; ++$) W[$ + 10] = ot.charCodeAt($);
    }
  })(Q, V), O(Q, nt - 8, Y.d()), O(Q, nt - 4, Z), Q;
}
var B = (function() {
  function X(V, Y) {
    this.c = S(), this.v = 1, j.call(this, V, Y);
  }
  return X.prototype.push = function(V, Y) {
    this.c.p(V), j.prototype.push.call(this, V, Y);
  }, X.prototype.p = function(V, Y) {
    var Z = L(V, this.o, this.v && (this.o.dictionary ? 6 : 2), Y && 4, this.s);
    this.v && ((function(R, Q) {
      var nt = Q.level, W = nt == 0 ? 0 : nt < 6 ? 1 : nt == 9 ? 3 : 2;
      if (R[0] = 120, R[1] = W << 6 | (Q.dictionary && 32), R[1] |= 31 - (R[0] << 8 | R[1]) % 31, Q.dictionary) {
        var tt = S();
        tt.p(Q.dictionary), O(R, 2, tt.d());
      }
    })(Z, this.o), this.v = 0), Y && O(Z, Z.length - 4, this.c.d()), this.ondata(Z, Y);
  }, X.prototype.flush = function() {
    j.prototype.flush.call(this);
  }, X;
})(), G = typeof TextEncoder < "u" && new TextEncoder(), H = typeof TextDecoder < "u" && new TextDecoder();
try {
  H.decode(F, { stream: true });
} catch {
}
var J = (function() {
  function X(V) {
    this.ondata = V;
  }
  return X.prototype.push = function(V, Y) {
    this.ondata || E(5), this.d && E(4), this.ondata(K(V), this.d = Y || false);
  }, X;
})();
function K(X, V) {
  if (G) return G.encode(X);
  for (var Y = X.length, Z = new t(X.length + (X.length >> 1)), R = 0, Q = function(ot) {
    Z[R++] = ot;
  }, nt = 0; nt < Y; ++nt) {
    if (R + 5 > Z.length) {
      var W = new t(R + 8 + (Y - nt << 1));
      W.set(Z), Z = W;
    }
    var tt = X.charCodeAt(nt);
    tt < 128 || V ? Q(tt) : tt < 2048 ? (Q(192 | tt >> 6), Q(128 | 63 & tt)) : tt > 55295 && tt < 57344 ? (Q(240 | (tt = 65536 + (1047552 & tt) | 1023 & X.charCodeAt(++nt)) >> 18), Q(128 | tt >> 12 & 63), Q(128 | tt >> 6 & 63), Q(128 | 63 & tt)) : (Q(224 | tt >> 12), Q(128 | tt >> 6 & 63), Q(128 | 63 & tt));
  }
  return b(Z, 0, R);
}
const N = new class {
  constructor() {
    this._init();
  }
  clear() {
    this._init();
  }
  addEvent(X) {
    if (!X) throw new Error("Adding invalid event");
    const V = this._hasEvents ? "," : "";
    this.stream.push(V + X), this._hasEvents = true;
  }
  finish() {
    this.stream.push("]", true);
    const X = (function(V) {
      let Y = 0;
      for (const R of V) Y += R.length;
      const Z = new Uint8Array(Y);
      for (let R = 0, Q = 0, nt = V.length; R < nt; R++) {
        const W = V[R];
        Z.set(W, Q), Q += W.length;
      }
      return Z;
    })(this._deflatedData);
    return this._init(), X;
  }
  _init() {
    this._hasEvents = false, this._deflatedData = [], this.deflate = new B(), this.deflate.ondata = (X, V) => {
      this._deflatedData.push(X);
    }, this.stream = new J((X, V) => {
      this.deflate.push(X, V);
    }), this.stream.push("[");
  }
}(), P = { clear: () => {
  N.clear();
}, addEvent: (X) => N.addEvent(X), finish: () => N.finish(), compress: (X) => (function(V) {
  return q(K(V));
})(X) };
addEventListener("message", function(X) {
  const V = X.data.method, Y = X.data.id, Z = X.data.arg;
  if (V in P && typeof P[V] == "function") try {
    const R = P[V](Z);
    postMessage({ id: Y, method: V, success: true, response: R });
  } catch (R) {
    postMessage({ id: Y, method: V, success: false, response: R.message }), console.error(R);
  }
}), postMessage({ id: void 0, method: "init", success: true, response: void 0 });
