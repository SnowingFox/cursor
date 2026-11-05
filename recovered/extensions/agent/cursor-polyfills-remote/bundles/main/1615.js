// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1615 range:40563..47299
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1615: (t2, r2, e2) => {
    e2(3873);
    var n2 = e2(5613), o2 = e2(9117), i2 = e2(5268), a2 = e2(9944), u2 = e2(6881), s2 = e2(6893), c = e2(6301), f = e2(421), h = e2(7509), l = e2(997), p = e2(4320), v = e2(3754), d = e2(9383), g = e2(3086), y = e2(286), w = e2(4188), x = e2(4418), m = e2(5821), b = e2(5438), S = e2(3770), O = e2(831), E = e2(2618), R = e2(7065), P = e2(9123), j = e2(9042), k = e2(4366), I = e2(6224), T = e2(9445), A = e2(4282), L = e2(9295), N = A("iterator"), U = "URLSearchParams", C = U + "Iterator", F = g.set, B = g.getterFor(U), D = g.getterFor(C), M = f.decode, z = f.encode, _ = i2("fetch"), H = i2("Request"), J = i2("Headers"), q = H && H.prototype, G = J && J.prototype, V = o2.TypeError, W = u2("".charAt), $ = u2([].join), K = u2([].push), Y = u2("".replace), Q = u2([].shift), X = u2([].splice), Z = u2("".split), tt = u2("".slice), rt = /\+/g, et = function(t3) {
      return M(Y(t3, rt, " "));
    }, nt = /[!'()~]|%20/g, ot = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, it = function(t3) {
      return ot[t3];
    }, at = function(t3) {
      return Y(z(t3), nt, it);
    }, ut = d(function(t3, r3) {
      F(this, { type: C, target: B(t3).entries, index: 0, kind: r3 });
    }, U, function() {
      var t3 = D(this), r3 = t3.target, e3 = t3.index++;
      if (!r3 || e3 >= r3.length) return t3.target = null, I(void 0, true);
      var n3 = r3[e3];
      switch (t3.kind) {
        case "keys":
          return I(n3.key, false);
        case "values":
          return I(n3.value, false);
      }
      return I([n3.key, n3.value], false);
    }, true), st = function(t3) {
      this.entries = [], this.url = null, void 0 !== t3 && (O(t3) ? this.parseObject(t3) : this.parseQuery("string" == typeof t3 ? "?" === W(t3, 0) ? tt(t3, 1) : t3 : E(t3)));
    };
    st.prototype = { type: U, bindURL: function(t3) {
      this.url = t3, this.update();
    }, parseObject: function(t3) {
      var r3, e3, n3, o3, i3, u3, s3, c2 = this.entries, f2 = k(t3);
      if (f2) for (e3 = (r3 = j(t3, f2)).next; !(n3 = a2(e3, r3)).done; ) {
        if (i3 = (o3 = j(S(n3.value))).next, (u3 = a2(i3, o3)).done || (s3 = a2(i3, o3)).done || !a2(i3, o3).done) throw new V("Expected sequence with length 2");
        K(c2, { key: E(u3.value), value: E(s3.value) });
      }
      else for (var h2 in t3) x(t3, h2) && K(c2, { key: h2, value: E(t3[h2]) });
    }, parseQuery: function(t3) {
      if (t3) for (var r3, e3, n3 = this.entries, o3 = Z(t3, "&"), i3 = 0; i3 < o3.length; ) (r3 = o3[i3++]).length && (e3 = Z(r3, "="), K(n3, { key: et(Q(e3)), value: et($(e3, "=")) }));
    }, serialize: function() {
      for (var t3, r3 = this.entries, e3 = [], n3 = 0; n3 < r3.length; ) t3 = r3[n3++], K(e3, at(t3.key) + "=" + at(t3.value));
      return $(e3, "&");
    }, update: function() {
      this.entries.length = 0, this.parseQuery(this.url.query);
    }, updateURL: function() {
      this.url && this.url.update();
    } };
    var ct = function() {
      y(this, ft);
      var t3 = F(this, new st(arguments.length > 0 ? arguments[0] : void 0));
      s2 || (this.size = t3.entries.length);
    }, ft = ct.prototype;
    if (p(ft, { append: function(t3, r3) {
      var e3 = B(this);
      T(arguments.length, 2), K(e3.entries, { key: E(t3), value: E(r3) }), s2 || this.size++, e3.updateURL();
    }, delete: function(t3) {
      for (var r3 = B(this), e3 = T(arguments.length, 1), n3 = r3.entries, o3 = E(t3), i3 = e3 < 2 ? void 0 : arguments[1], a3 = void 0 === i3 ? i3 : E(i3), u3 = 0; u3 < n3.length; ) {
        var c2 = n3[u3];
        c2.key !== o3 || void 0 !== a3 && c2.value !== a3 ? u3++ : X(n3, u3, 1);
      }
      s2 || (this.size = n3.length), r3.updateURL();
    }, get: function(t3) {
      var r3 = B(this).entries;
      T(arguments.length, 1);
      for (var e3 = E(t3), n3 = 0; n3 < r3.length; n3++) if (r3[n3].key === e3) return r3[n3].value;
      return null;
    }, getAll: function(t3) {
      var r3 = B(this).entries;
      T(arguments.length, 1);
      for (var e3 = E(t3), n3 = [], o3 = 0; o3 < r3.length; o3++) r3[o3].key === e3 && K(n3, r3[o3].value);
      return n3;
    }, has: function(t3) {
      for (var r3 = B(this).entries, e3 = T(arguments.length, 1), n3 = E(t3), o3 = e3 < 2 ? void 0 : arguments[1], i3 = void 0 === o3 ? o3 : E(o3), a3 = 0; a3 < r3.length; ) {
        var u3 = r3[a3++];
        if (u3.key === n3 && (void 0 === i3 || u3.value === i3)) return true;
      }
      return false;
    }, set: function(t3, r3) {
      var e3 = B(this);
      T(arguments.length, 2);
      for (var n3, o3 = e3.entries, i3 = false, a3 = E(t3), u3 = E(r3), c2 = 0; c2 < o3.length; c2++) (n3 = o3[c2]).key === a3 && (i3 ? X(o3, c2--, 1) : (i3 = true, n3.value = u3));
      i3 || K(o3, { key: a3, value: u3 }), s2 || (this.size = o3.length), e3.updateURL();
    }, sort: function() {
      var t3 = B(this);
      L(t3.entries, function(t4, r3) {
        return t4.key > r3.key ? 1 : -1;
      }), t3.updateURL();
    }, forEach: function(t3) {
      for (var r3, e3 = B(this).entries, n3 = m(t3, arguments.length > 1 ? arguments[1] : void 0), o3 = 0; o3 < e3.length; ) n3((r3 = e3[o3++]).value, r3.key, this);
    }, keys: function() {
      return new ut(this, "keys");
    }, values: function() {
      return new ut(this, "values");
    }, entries: function() {
      return new ut(this, "entries");
    } }, { enumerable: true }), h(ft, N, ft.entries, { name: "entries" }), h(ft, "toString", function() {
      return B(this).serialize();
    }, { enumerable: true }), s2 && l(ft, "size", { get: function() {
      return B(this).entries.length;
    }, configurable: true, enumerable: true }), v(ct, U), n2({ global: true, constructor: true, forced: !c }, { URLSearchParams: ct }), !c && w(J)) {
      var ht = u2(G.has), lt = u2(G.set), pt = function(t3) {
        if (O(t3)) {
          var r3, e3 = t3.body;
          if (b(e3) === U) return r3 = t3.headers ? new J(t3.headers) : new J(), ht(r3, "content-type") || lt(r3, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), R(t3, { body: P(0, E(e3)), headers: P(0, r3) });
        }
        return t3;
      };
      if (w(_) && n2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, { fetch: function(t3) {
        return _(t3, arguments.length > 1 ? pt(arguments[1]) : {});
      } }), w(H)) {
        var vt = function(t3) {
          return y(this, q), new H(t3, arguments.length > 1 ? pt(arguments[1]) : {});
        };
        q.constructor = vt, vt.prototype = q, n2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, { Request: vt });
      }
    }
    t2.exports = { URLSearchParams: ct, getState: B };
  }