// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8473 range:141720..147442
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8473: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(6893), i2 = e2(9117), a2 = e2(5604), u2 = e2(6881), s2 = e2(9944), c = e2(4188), f = e2(831), h = e2(6719), l = e2(4418), p = e2(2618), v = e2(9389), d = e2(4417), g = e2(5234), y = e2(4561), w = e2(8944), x = i2.JSON, m = i2.Number, b = i2.SyntaxError, S = x && x.parse, O = a2("Object", "keys"), E = Object.getOwnPropertyDescriptor, R = u2("".charAt), P = u2("".slice), j = u2(/./.exec), k = u2([].push), I = /^\d$/, T = /^[1-9]$/, A = /^[\d-]$/, L = /^[\t\n\r ]$/, N = function(t3, r3, e3, n3) {
      var o3, i3, a3, u3, c2, p2 = t3[r3], d2 = n3 && p2 === n3.value, g2 = d2 && "string" == typeof n3.source ? { source: n3.source } : {};
      if (f(p2)) {
        var y2 = h(p2), w2 = d2 ? n3.nodes : y2 ? [] : {};
        if (y2) for (o3 = w2.length, a3 = v(p2), u3 = 0; u3 < a3; u3++) U(p2, u3, N(p2, "" + u3, e3, u3 < o3 ? w2[u3] : void 0));
        else for (i3 = O(p2), a3 = v(i3), u3 = 0; u3 < a3; u3++) c2 = i3[u3], U(p2, c2, N(p2, c2, e3, l(w2, c2) ? w2[c2] : void 0));
      }
      return s2(e3, t3, r3, p2, g2);
    }, U = function(t3, r3, e3) {
      if (o2) {
        var n3 = E(t3, r3);
        if (n3 && !n3.configurable) return;
      }
      void 0 === e3 ? delete t3[r3] : d(t3, r3, e3);
    }, C = function(t3, r3, e3, n3) {
      this.value = t3, this.end = r3, this.source = e3, this.nodes = n3;
    }, F = function(t3, r3) {
      this.source = t3, this.index = r3;
    };
    F.prototype = { fork: function(t3) {
      return new F(this.source, t3);
    }, parse: function() {
      var t3 = this.source, r3 = this.skip(L, this.index), e3 = this.fork(r3), n3 = R(t3, r3);
      if (j(A, n3)) return e3.number();
      switch (n3) {
        case "{":
          return e3.object();
        case "[":
          return e3.array();
        case '"':
          return e3.string();
        case "t":
          return e3.keyword(true);
        case "f":
          return e3.keyword(false);
        case "n":
          return e3.keyword(null);
      }
      throw new b('Unexpected character: "' + n3 + '" at: ' + r3);
    }, node: function(t3, r3, e3, n3, o3) {
      return new C(r3, n3, t3 ? null : P(this.source, e3, n3), o3);
    }, object: function() {
      for (var t3 = this.source, r3 = this.index + 1, e3 = false, n3 = {}, o3 = {}, i3 = false; r3 < t3.length; ) {
        if (r3 = this.until(['"', "}"], r3), "}" === R(t3, r3) && !e3) {
          r3++, i3 = true;
          break;
        }
        var a3 = this.fork(r3).string(), u3 = a3.value;
        r3 = a3.end, r3 = this.until([":"], r3) + 1, r3 = this.skip(L, r3), a3 = this.fork(r3).parse(), d(o3, u3, a3), d(n3, u3, a3.value), r3 = this.until([",", "}"], a3.end);
        var s3 = R(t3, r3);
        if ("," === s3) e3 = true, r3++;
        else if ("}" === s3) {
          r3++, i3 = true;
          break;
        }
      }
      if (!i3) throw new b("Unterminated object at: " + r3);
      return this.node(1, n3, this.index, r3, o3);
    }, array: function() {
      for (var t3 = this.source, r3 = this.index + 1, e3 = false, n3 = [], o3 = [], i3 = false; r3 < t3.length; ) {
        if (r3 = this.skip(L, r3), "]" === R(t3, r3) && !e3) {
          r3++, i3 = true;
          break;
        }
        var a3 = this.fork(r3).parse();
        if (k(o3, a3), k(n3, a3.value), r3 = this.until([",", "]"], a3.end), "," === R(t3, r3)) e3 = true, r3++;
        else if ("]" === R(t3, r3)) {
          r3++, i3 = true;
          break;
        }
      }
      if (!i3) throw new b("Unterminated array at: " + r3);
      return this.node(1, n3, this.index, r3, o3);
    }, string: function() {
      var t3 = this.index, r3 = y(this.source, this.index + 1);
      return this.node(0, r3.value, t3, r3.end);
    }, number: function() {
      var t3 = this.source, r3 = this.index, e3 = r3;
      if ("-" === R(t3, e3) && e3++, "0" === R(t3, e3)) e3++;
      else {
        if (!j(T, R(t3, e3))) throw new b("Failed to parse number at: " + e3);
        e3 = this.skip(I, e3 + 1);
      }
      if ("." === R(t3, e3)) {
        var n3 = e3 + 1;
        if (n3 === (e3 = this.skip(I, n3))) throw new b("Failed to parse number's fraction at: " + e3);
      }
      if (("e" === R(t3, e3) || "E" === R(t3, e3)) && (e3++, "+" !== R(t3, e3) && "-" !== R(t3, e3) || e3++, e3 === (e3 = this.skip(I, e3)))) throw new b("Failed to parse number's exponent value at: " + e3);
      return this.node(0, m(P(t3, r3, e3)), r3, e3);
    }, keyword: function(t3) {
      var r3 = "" + t3, e3 = this.index, n3 = e3 + r3.length;
      if (P(this.source, e3, n3) !== r3) throw new b("Failed to parse value at: " + e3);
      return this.node(0, t3, e3, n3);
    }, skip: function(t3, r3) {
      for (var e3 = this.source; r3 < e3.length && j(t3, R(e3, r3)); r3++) ;
      return r3;
    }, until: function(t3, r3) {
      r3 = this.skip(L, r3);
      for (var e3 = R(this.source, r3), n3 = 0; n3 < t3.length; n3++) if (t3[n3] === e3) return r3;
      throw new b('Unexpected character: "' + e3 + '" at: ' + r3);
    } };
    var B = g(function() {
      var t3, r3 = "9007199254740993";
      return S(r3, function(r4, e3, n3) {
        t3 = n3.source;
      }), t3 !== r3;
    }), D = w && !g(function() {
      return 1 / S("-0 	") != -1 / 0;
    });
    n2({ target: "JSON", stat: true, forced: B }, { parse: function(t3, r3) {
      return D && !c(r3) ? S(t3) : (function(t4, r4) {
        t4 = p(t4);
        var e3 = new F(t4, 0), n3 = e3.parse(), o3 = n3.value, i3 = e3.skip(L, n3.end);
        if (i3 < t4.length) throw new b('Unexpected extra character: "' + R(t4, i3) + '" after the parsed data at: ' + i3);
        return c(r4) ? N({ "": o3 }, "", r4, n3) : o3;
      })(t3, r3);
    } });
  }