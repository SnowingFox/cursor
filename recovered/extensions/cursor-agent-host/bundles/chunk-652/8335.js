// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 8335 range:66244..71766
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8335: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3724), r2 = i2(4576), a2 = i2(7751), o2 = i2(9504), l2 = i2(9565), h2 = i2(4901), c2 = i2(34), d2 = i2(4376), u2 = i2(9297), p2 = i2(655), g2 = i2(6198), m2 = i2(4659), f2 = i2(9039), b2 = i2(8235), v2 = i2(4495), y2 = r2.JSON, w2 = r2.Number, x2 = r2.SyntaxError, A2 = y2 && y2.parse, _2 = a2("Object", "keys"), S2 = Object.getOwnPropertyDescriptor, E2 = o2("".charAt), C2 = o2("".slice), T2 = o2(/./.exec), M2 = o2([].push), k2 = /^\d$/, D2 = /^[1-9]$/, P2 = /^[\d-]$/, I2 = /^[\t\n\r ]$/, R2 = function(t3, e3, i3, s3) {
      var n3, r3, a3, o3, h3, p3 = t3[e3], m3 = s3 && p3 === s3.value, f3 = m3 && "string" == typeof s3.source ? { source: s3.source } : {};
      if (c2(p3)) {
        var b3 = d2(p3), v3 = m3 ? s3.nodes : b3 ? [] : {};
        if (b3) for (n3 = v3.length, a3 = g2(p3), o3 = 0; o3 < a3; o3++) L2(p3, o3, R2(p3, "" + o3, i3, o3 < n3 ? v3[o3] : void 0));
        else for (r3 = _2(p3), a3 = g2(r3), o3 = 0; o3 < a3; o3++) h3 = r3[o3], L2(p3, h3, R2(p3, h3, i3, u2(v3, h3) ? v3[h3] : void 0));
      }
      return l2(i3, t3, e3, p3, f3);
    }, L2 = function(t3, e3, i3) {
      if (n2) {
        var s3 = S2(t3, e3);
        if (s3 && !s3.configurable) return;
      }
      void 0 === i3 ? delete t3[e3] : m2(t3, e3, i3);
    }, B2 = function(t3, e3, i3, s3) {
      this.value = t3, this.end = e3, this.source = i3, this.nodes = s3;
    }, F2 = function(t3, e3) {
      this.source = t3, this.index = e3;
    };
    F2.prototype = { fork: function(t3) {
      return new F2(this.source, t3);
    }, parse: function() {
      var t3 = this.source, e3 = this.skip(I2, this.index), i3 = this.fork(e3), s3 = E2(t3, e3);
      if (T2(P2, s3)) return i3.number();
      switch (s3) {
        case "{":
          return i3.object();
        case "[":
          return i3.array();
        case '"':
          return i3.string();
        case "t":
          return i3.keyword(true);
        case "f":
          return i3.keyword(false);
        case "n":
          return i3.keyword(null);
      }
      throw new x2('Unexpected character: "' + s3 + '" at: ' + e3);
    }, node: function(t3, e3, i3, s3, n3) {
      return new B2(e3, s3, t3 ? null : C2(this.source, i3, s3), n3);
    }, object: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, s3 = {}, n3 = {}; e3 < t3.length; ) {
        if (e3 = this.until(['"', "}"], e3), "}" === E2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var r3 = this.fork(e3).string(), a3 = r3.value;
        e3 = r3.end, e3 = this.until([":"], e3) + 1, e3 = this.skip(I2, e3), r3 = this.fork(e3).parse(), m2(n3, a3, r3), m2(s3, a3, r3.value), e3 = this.until([",", "}"], r3.end);
        var o3 = E2(t3, e3);
        if ("," === o3) i3 = true, e3++;
        else if ("}" === o3) {
          e3++;
          break;
        }
      }
      return this.node(1, s3, this.index, e3, n3);
    }, array: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, s3 = [], n3 = []; e3 < t3.length; ) {
        if (e3 = this.skip(I2, e3), "]" === E2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var r3 = this.fork(e3).parse();
        if (M2(n3, r3), M2(s3, r3.value), e3 = this.until([",", "]"], r3.end), "," === E2(t3, e3)) i3 = true, e3++;
        else if ("]" === E2(t3, e3)) {
          e3++;
          break;
        }
      }
      return this.node(1, s3, this.index, e3, n3);
    }, string: function() {
      var t3 = this.index, e3 = b2(this.source, this.index + 1);
      return this.node(0, e3.value, t3, e3.end);
    }, number: function() {
      var t3 = this.source, e3 = this.index, i3 = e3;
      if ("-" === E2(t3, i3) && i3++, "0" === E2(t3, i3)) i3++;
      else {
        if (!T2(D2, E2(t3, i3))) throw new x2("Failed to parse number at: " + i3);
        i3 = this.skip(k2, i3 + 1);
      }
      if (("." === E2(t3, i3) && (i3 = this.skip(k2, i3 + 1)), "e" === E2(t3, i3) || "E" === E2(t3, i3)) && (i3++, "+" !== E2(t3, i3) && "-" !== E2(t3, i3) || i3++, i3 === (i3 = this.skip(k2, i3)))) throw new x2("Failed to parse number's exponent value at: " + i3);
      return this.node(0, w2(C2(t3, e3, i3)), e3, i3);
    }, keyword: function(t3) {
      var e3 = "" + t3, i3 = this.index, s3 = i3 + e3.length;
      if (C2(this.source, i3, s3) !== e3) throw new x2("Failed to parse value at: " + i3);
      return this.node(0, t3, i3, s3);
    }, skip: function(t3, e3) {
      for (var i3 = this.source; e3 < i3.length && T2(t3, E2(i3, e3)); e3++) ;
      return e3;
    }, until: function(t3, e3) {
      e3 = this.skip(I2, e3);
      for (var i3 = E2(this.source, e3), s3 = 0; s3 < t3.length; s3++) if (t3[s3] === i3) return e3;
      throw new x2('Unexpected character: "' + i3 + '" at: ' + e3);
    } };
    var O2 = f2(function() {
      var t3, e3 = "9007199254740993";
      return A2(e3, function(e4, i3, s3) {
        t3 = s3.source;
      }), t3 !== e3;
    }), N2 = v2 && !f2(function() {
      return 1 / A2("-0 	") != -1 / 0;
    });
    s2({ target: "JSON", stat: true, forced: O2 }, { parse: function(t3, e3) {
      return N2 && !h2(e3) ? A2(t3) : (function(t4, e4) {
        t4 = p2(t4);
        var i3 = new F2(t4, 0, ""), s3 = i3.parse(), n3 = s3.value, r3 = i3.skip(I2, s3.end);
        if (r3 < t4.length) throw new x2('Unexpected extra character: "' + E2(t4, r3) + '" after the parsed data at: ' + r3);
        return h2(e4) ? R2({ "": n3 }, "", e4, s3) : n3;
      })(t3, e3);
    } });
  }