var An = (x, D) => () => (D || x((D = { exports: {} }).exports, D), D.exports);
var Tn = An((ze, Wt) => {
  (function(D, R) {
    typeof ze == "object" && typeof Wt == "object" ? Wt.exports = R() : typeof define == "function" && define.amd ? define([], R) : typeof ze == "object" ? ze.katex = R() : D.katex = R();
  })(typeof self < "u" ? self : ze, function() {
    return (function() {
      "use strict";
      var x = {};
      (function() {
        x.d = function(t, e) {
          for (var r in e) x.o(e, r) && !x.o(t, r) && Object.defineProperty(t, r, { enumerable: true, get: e[r] });
        };
      })(), (function() {
        x.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        };
      })();
      var D = {};
      x.d(D, { default: function() {
        return xs;
      } });
      class R extends Error {
        constructor(e, r) {
          let n = "KaTeX parse error: " + e, s, o, a = r && r.loc;
          if (a && a.start <= a.end) {
            let u = a.lexer.input;
            s = a.start, o = a.end, s === u.length ? n += " at end of input: " : n += " at position " + (s + 1) + ": ";
            let m = u.slice(s, o).replace(/[^]/g, "$&̲"), f;
            s > 15 ? f = "…" + u.slice(s - 15, s) : f = u.slice(0, s);
            let b;
            o + 15 < u.length ? b = u.slice(o, o + 15) + "…" : b = u.slice(o), n += f + m + b;
          }
          super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, R.prototype), this.position = s, s != null && o != null && (this.length = o - s), this.rawMessage = e;
        }
      }
      var v = R;
      let F = /([A-Z])/g, N = (t) => t.replace(F, "-$1").toLowerCase(), P = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, K = /[&><"']/g, $ = (t) => String(t).replace(K, (e) => P[e]), X = (t) => t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? X(t.body[0]) : t : t.type === "font" ? X(t.body) : t, J = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), t0 = (t) => J.has(X(t).type), b0 = (t) => {
        let e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
        return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
      }, j = { displayMode: { type: "boolean", description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.", cli: "-d, --display-mode" }, output: { type: { enum: ["htmlAndMathml", "html", "mathml"] }, description: "Determines the markup language of the output.", cli: "-F, --format <type>" }, leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." }, fleqn: { type: "boolean", description: "Render display math flush left." }, throwOnError: { type: "boolean", default: true, cli: "-t, --no-throw-on-error", cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error." }, errorColor: { type: "string", default: "#cc0000", cli: "-c, --error-color <color>", cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.", cliProcessor: (t) => "#" + t }, macros: { type: "object", cli: "-m, --macro <def>", cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).", cliDefault: [], cliProcessor: (t, e) => (e.push(t), e) }, minRuleThickness: { type: "number", description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (t) => Math.max(0, t), cli: "--min-rule-thickness <size>", cliProcessor: parseFloat }, colorIsTextColor: { type: "boolean", description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.", cli: "-b, --color-is-text-color" }, strict: { type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"], description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.", cli: "-S, --strict", cliDefault: false }, trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" }, maxSize: { type: "number", default: 1 / 0, description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large", processor: (t) => Math.max(0, t), cli: "-s, --max-size <n>", cliProcessor: parseInt }, maxExpand: { type: "number", default: 1e3, description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.", processor: (t) => Math.max(0, t), cli: "-e, --max-expand <n>", cliProcessor: (t) => t === "Infinity" ? 1 / 0 : parseInt(t) }, globalGroup: { type: "boolean", cli: false } };
      function s0(t) {
        if (typeof t != "string") return t.enum[0];
        switch (t) {
          case "boolean":
            return false;
          case "string":
            return "";
          case "number":
            return 0;
          case "object":
            return {};
          default:
            throw new Error("Unexpected schema type; settings must declare an explicit default.");
        }
      }
      function i0(t) {
        if (t.default !== void 0) return t.default;
        let e = Array.isArray(t.type) ? t.type[0] : t.type;
        return s0(e);
      }
      function C0(t, e, r, n) {
        let s = r[e];
        t[e] = s !== void 0 ? n.processor ? n.processor(s) : s : i0(n);
      }
      class ee {
        constructor(e) {
          e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
          for (let r of Object.keys(j)) {
            let n = j[r];
            n && C0(this, r, e, n);
          }
        }
        reportNonstrict(e, r, n) {
          let s = this.strict;
          if (typeof s == "function" && (s = s(e, r, n)), !(!s || s === "ignore")) {
            if (s === true || s === "error") throw new v("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + e + "]"), n);
            s === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + r + " [" + e + "]"));
          }
        }
        useStrictBehavior(e, r, n) {
          let s = this.strict;
          if (typeof s == "function") try {
            s = s(e, r, n);
          } catch {
            s = "error";
          }
          return !s || s === "ignore" ? false : s === true || s === "error" ? true : s === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + r + " [" + e + "]")), false);
        }
        isTrusted(e) {
          if ("url" in e && e.url && !e.protocol) {
            let n = b0(e.url);
            if (n == null) return false;
            e.protocol = n;
          }
          return !!(typeof this.trust == "function" ? this.trust(e) : this.trust);
        }
      }
      class R0 {
        constructor(e, r, n) {
          this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = n;
        }
        sup() {
          return O0[Rn[this.id]];
        }
        sub() {
          return O0[On[this.id]];
        }
        fracNum() {
          return O0[Hn[this.id]];
        }
        fracDen() {
          return O0[Fn[this.id]];
        }
        cramp() {
          return O0[Ln[this.id]];
        }
        text() {
          return O0[_n[this.id]];
        }
        isTight() {
          return this.size >= 2;
        }
      }
      let be = 0, te = 1, ie = 2, P0 = 3, ye = 4, B0 = 5, le = 6, x0 = 7, O0 = [new R0(be, 0, false), new R0(te, 0, true), new R0(ie, 1, false), new R0(P0, 1, true), new R0(ye, 2, false), new R0(B0, 2, true), new R0(le, 3, false), new R0(x0, 3, true)], Rn = [ye, B0, ye, B0, le, x0, le, x0], On = [B0, B0, B0, B0, x0, x0, x0, x0], Hn = [ie, P0, ye, B0, le, x0, le, x0], Fn = [P0, P0, B0, B0, x0, x0, x0, x0], Ln = [te, te, P0, P0, B0, B0, x0, x0], _n = [be, te, ie, P0, ie, P0, ie, P0];
      var H = { DISPLAY: O0[be], TEXT: O0[ie], SCRIPT: O0[ye], SCRIPTSCRIPT: O0[le] };
      let rt = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
      function Pn(t) {
        for (let e = 0; e < rt.length; e++) {
          let r = rt[e];
          for (let n = 0; n < r.blocks.length; n++) {
            let s = r.blocks[n];
            if (t >= s[0] && t <= s[1]) return r.name;
          }
        }
        return null;
      }
      let Te = [];
      rt.forEach((t) => t.blocks.forEach((e) => Te.push(...e)));
      function Xt(t) {
        for (let e = 0; e < Te.length; e += 2) if (t >= Te[e] && t <= Te[e + 1]) return true;
        return false;
      }
      let p0 = (t) => t + " " + t, oe = 80, Gn = function(t, e) {
        return "M95," + (622 + t + e) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t / 2.075 + " -" + t + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
      }, $n = function(t, e) {
        return "M263," + (601 + t + e) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t / 2.084 + " -" + t + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
      }, Un = function(t, e) {
        return "M983 " + (10 + t + e) + `
l` + t / 3.13 + " -" + t + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
      }, Vn = function(t, e) {
        return "M424," + (2398 + t + e) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t / 4.223 + " -" + t + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t) + " " + e + `
h400000v` + (40 + t) + "h-400000z";
      }, Wn = function(t, e) {
        return "M473," + (2713 + t + e) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t / 5.298 + " -" + t + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z";
      }, Xn = function(t) {
        let e = t / 2;
        return "M400000 " + t + " H0 L" + e + " 0 l65 45 L145 " + (t - 80) + " H400000z";
      }, jn = function(t, e, r) {
        let n = r - 54 - e - t;
        return "M702 " + (t + e) + "H400000" + (40 + t) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + e + "H400000v" + (40 + t) + "H742z";
      }, Yn = function(t, e, r) {
        e = 1e3 * e;
        let n = "";
        switch (t) {
          case "sqrtMain":
            n = Gn(e, oe);
            break;
          case "sqrtSize1":
            n = $n(e, oe);
            break;
          case "sqrtSize2":
            n = Un(e, oe);
            break;
          case "sqrtSize3":
            n = Vn(e, oe);
            break;
          case "sqrtSize4":
            n = Wn(e, oe);
            break;
          case "sqrtTall":
            n = jn(e, oe, r);
        }
        return n;
      }, Zn = function(t, e) {
        switch (t) {
          case "⎜":
            return p0("M291 0 H417 V" + e + " H291z");
          case "∣":
            return p0("M145 0 H188 V" + e + " H145z");
          case "∥":
            return p0("M145 0 H188 V" + e + " H145z") + p0("M367 0 H410 V" + e + " H367z");
          case "⎟":
            return p0("M457 0 H583 V" + e + " H457z");
          case "⎢":
            return p0("M319 0 H403 V" + e + " H319z");
          case "⎥":
            return p0("M263 0 H347 V" + e + " H263z");
          case "⎪":
            return p0("M384 0 H504 V" + e + " H384z");
          case "⏐":
            return p0("M312 0 H355 V" + e + " H312z");
          case "‖":
            return p0("M257 0 H300 V" + e + " H257z") + p0("M478 0 H521 V" + e + " H478z");
          default:
            return "";
        }
      }, jt = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: p0("M40 281 V428 H0 V94 H40 V241 H400000 v40z"), leftbracketunder: p0("M0 0 h120 V290 H399995 v120 H0z"), leftbracketover: p0("M0 440 h120 V150 H399995 v-120 H0z"), leftmapsto: p0("M40 281 V448H0V74H40V241H400000v40z"), leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: p0("M0 50 h400000 v40H0z m0 194h40000v40H0z"), midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: p0("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"), rightbracketunder: p0("M399995 0 h-120 V290 H0 v120 H400000z"), rightbracketover: p0("M399995 440 h-120 V150 H0 v-120 H399995z"), rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, Kn = function(t, e) {
        switch (t) {
          case "lbrack":
            return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + e + " v1759 v84 h84z";
          case "rbrack":
            return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + e + " v1759 h84z";
          case "vert":
            return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + " v585 h43z";
          case "doublevert":
            return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + ` v585 h43z
M367 15 v585 v` + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + e + " v585 h43z";
          case "lfloor":
            return "M319 602 V0 H403 V602 v" + e + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
          case "rfloor":
            return "M319 602 V0 H403 V602 v" + e + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
          case "lceil":
            return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v602 h84z
M403 1759 V0 H319 V1759 v` + e + " v602 h84z";
          case "rceil":
            return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + e + " v602 h84z";
          case "lparen":
            return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (e + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (e + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
          case "rparen":
            return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (e + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (e + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
          default:
            throw new Error("Unknown stretchy delimiter.");
        }
      };
      function Jn(t) {
        return "toText" in t;
      }
      class ae {
        constructor(e) {
          this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
        }
        hasClass(e) {
          return this.classes.includes(e);
        }
        toNode() {
          let e = document.createDocumentFragment();
          for (let r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
          return e;
        }
        toMarkup() {
          let e = "";
          for (let r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
          return e;
        }
        toText() {
          return this.children.map((e) => {
            if (Jn(e)) return e.toText();
            throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
          }).join("");
        }
      }
      let nt = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Qn = { ex: true, em: true, mu: true }, Yt = function(t) {
        return typeof t != "string" && (t = t.unit), t in nt || t in Qn || t === "ex";
      }, r0 = function(t, e) {
        let r;
        if (t.unit in nt) r = nt[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
        else if (t.unit === "mu") r = e.fontMetrics().cssEmPerMu;
        else {
          let n;
          if (e.style.isTight() ? n = e.havingStyle(e.style.text()) : n = e, t.unit === "ex") r = n.fontMetrics().xHeight;
          else if (t.unit === "em") r = n.fontMetrics().quad;
          else throw new v("Invalid unit: '" + t.unit + "'");
          n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier);
        }
        return Math.min(t.number * r, e.maxSize);
      }, T = function(t) {
        return +t.toFixed(4) + "em";
      }, j0 = function(t) {
        return t.filter((e) => e).join(" ");
      }, st = function(t) {
        let e = "";
        for (let r of Object.keys(t)) {
          let n = t[r];
          n !== void 0 && (e += N(r) + ":" + n + ";");
        }
        return e;
      }, Zt = function(t, e, r) {
        if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
          e.style.isTight() && this.classes.push("mtight");
          let n = e.getColor();
          n && (this.style.color = n);
        }
      }, Kt = function(t) {
        let e = document.createElement(t);
        e.className = j0(this.classes), Object.assign(e.style, this.style);
        for (let r of Object.keys(this.attributes)) e.setAttribute(r, this.attributes[r]);
        for (let r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
        return e;
      }, e1 = /[\s"'>/=\x00-\x1f]/, Jt = function(t) {
        let e = "<" + t;
        this.classes.length && (e += ' class="' + $(j0(this.classes)) + '"');
        let r = st(this.style);
        r && (e += ' style="' + $(r) + '"');
        for (let n of Object.keys(this.attributes)) {
          if (e1.test(n)) throw new v("Invalid attribute name '" + n + "'");
          e += " " + n + '="' + $(this.attributes[n]) + '"';
        }
        e += ">";
        for (let n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
        return e += "</" + t + ">", e;
      };
      class ce {
        constructor(e, r, n, s) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Zt.call(this, e, n, s), this.children = r || [];
        }
        setAttribute(e, r) {
          this.attributes[e] = r;
        }
        hasClass(e) {
          return this.classes.includes(e);
        }
        toNode() {
          return Kt.call(this, "span");
        }
        toMarkup() {
          return Jt.call(this, "span");
        }
      }
      class Ce {
        constructor(e, r, n, s) {
          this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Zt.call(this, r, s), this.children = n || [], this.setAttribute("href", e);
        }
        setAttribute(e, r) {
          this.attributes[e] = r;
        }
        hasClass(e) {
          return this.classes.includes(e);
        }
        toNode() {
          return Kt.call(this, "a");
        }
        toMarkup() {
          return Jt.call(this, "a");
        }
      }
      class t1 {
        constructor(e, r, n) {
          this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n;
        }
        hasClass(e) {
          return this.classes.includes(e);
        }
        toNode() {
          let e = document.createElement("img");
          return e.src = this.src, e.alt = this.alt, e.className = "mord", Object.assign(e.style, this.style), e;
        }
        toMarkup() {
          let e = '<img src="' + $(this.src) + '"' + (' alt="' + $(this.alt) + '"'), r = st(this.style);
          return r && (e += ' style="' + $(r) + '"'), e += "'/>", e;
        }
      }
      let r1 = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
      class M0 {
        constructor(e, r, n, s, o, a, u, m) {
          this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = n || 0, this.italic = s || 0, this.skew = o || 0, this.width = a || 0, this.classes = u || [], this.style = m || {}, this.maxFontSize = 0;
          let f = Pn(this.text.charCodeAt(0));
          f && this.classes.push(f + "_fallback"), /[îïíì]/.test(this.text) && (this.text = r1[this.text]);
        }
        hasClass(e) {
          return this.classes.includes(e);
        }
        toNode() {
          let e = document.createTextNode(this.text), r = null;
          return this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = T(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = j0(this.classes)), Object.keys(this.style).length > 0 && (r = r || document.createElement("span"), Object.assign(r.style, this.style)), r ? (r.appendChild(e), r) : e;
        }
        toMarkup() {
          let e = false, r = "<span";
          this.classes.length && (e = true, r += ' class="', r += $(j0(this.classes)), r += '"');
          let n = "";
          this.italic > 0 && (n += "margin-right:" + T(this.italic) + ";"), n += st(this.style), n && (e = true, r += ' style="' + $(n) + '"');
          let s = $(this.text);
          return e ? (r += ">", r += s, r += "</span>", r) : s;
        }
      }
      class G0 {
        constructor(e, r) {
          this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
        }
        toNode() {
          let r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          for (let n of Object.keys(this.attributes)) r.setAttribute(n, this.attributes[n]);
          for (let n = 0; n < this.children.length; n++) r.appendChild(this.children[n].toNode());
          return r;
        }
        toMarkup() {
          let e = '<svg xmlns="http://www.w3.org/2000/svg"';
          for (let r of Object.keys(this.attributes)) e += " " + r + '="' + $(this.attributes[r]) + '"';
          e += ">";
          for (let r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
          return e += "</svg>", e;
        }
      }
      class Y0 {
        constructor(e, r) {
          this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
        }
        toNode() {
          let r = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", jt[this.pathName]), r;
        }
        toMarkup() {
          return this.alternate ? '<path d="' + $(this.alternate) + '"/>' : '<path d="' + $(jt[this.pathName]) + '"/>';
        }
      }
      class it {
        constructor(e) {
          this.attributes = void 0, this.attributes = e || {};
        }
        toNode() {
          let r = document.createElementNS("http://www.w3.org/2000/svg", "line");
          for (let n of Object.keys(this.attributes)) r.setAttribute(n, this.attributes[n]);
          return r;
        }
        toMarkup() {
          let e = "<line";
          for (let r of Object.keys(this.attributes)) e += " " + r + '="' + $(this.attributes[r]) + '"';
          return e += "/>", e;
        }
      }
      function n1(t) {
        if (t instanceof M0) return t;
        throw new Error("Expected symbolNode but got " + String(t) + ".");
      }
      function s1(t) {
        if (t instanceof ce) return t;
        throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
      }
      let i1 = (t) => t instanceof ce || t instanceof Ce || t instanceof ae;
      var H0 = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } };
      let Be = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, Qt = { Å: "A", Ð: "D", Þ: "o", å: "a", ð: "d", þ: "o", А: "A", Б: "B", В: "B", Г: "F", Д: "A", Е: "E", Ж: "K", З: "3", И: "N", Й: "N", К: "K", Л: "N", М: "M", Н: "H", О: "O", П: "N", Р: "P", С: "C", Т: "T", У: "y", Ф: "O", Х: "X", Ц: "U", Ч: "h", Ш: "W", Щ: "W", Ъ: "B", Ы: "X", Ь: "B", Э: "3", Ю: "X", Я: "R", а: "a", б: "b", в: "a", г: "r", д: "y", е: "e", ж: "m", з: "e", и: "n", й: "n", к: "n", л: "n", м: "m", н: "n", о: "o", п: "n", р: "p", с: "c", т: "o", у: "y", ф: "b", х: "x", ц: "n", ч: "n", ш: "w", щ: "w", ъ: "a", ы: "m", ь: "a", э: "e", ю: "m", я: "r" };
      function l1(t, e) {
        H0[t] = e;
      }
      function lt(t, e, r) {
        if (!H0[e]) throw new Error("Font metrics not found for font: " + e + ".");
        let n = t.charCodeAt(0), s = H0[e][n];
        if (!s && t[0] in Qt && (n = Qt[t[0]].charCodeAt(0), s = H0[e][n]), !s && r === "text" && Xt(n) && (s = H0[e][77]), s) return { depth: s[0], height: s[1], italic: s[2], skew: s[3], width: s[4] };
      }
      let ot = {};
      function o1(t) {
        let e;
        if (t >= 5 ? e = 0 : t >= 3 ? e = 1 : e = 2, !ot[e]) {
          let r = ot[e] = { cssEmPerMu: Be.quad[e] / 18 };
          for (let n in Be) Be.hasOwnProperty(n) && (r[n] = Be[n][e]);
        }
        return ot[e];
      }
      let De = { math: {}, text: {} };
      var l0 = De;
      function i(t, e, r, n, s, o) {
        De[t][s] = { font: e, group: r, replace: n }, o && n && (De[t][n] = De[t][s]);
      }
      let l = "math", M = "text", c = "main", d = "ams", e0 = "accent-token", q = "bin", w0 = "close", ue = "inner", E = "mathord", a0 = "op-token", z0 = "open", xe = "punct", p = "rel", $0 = "spacing", g = "textord";
      i(l, c, p, "≡", "\\equiv", true), i(l, c, p, "≺", "\\prec", true), i(l, c, p, "≻", "\\succ", true), i(l, c, p, "∼", "\\sim", true), i(l, c, p, "⊥", "\\perp"), i(l, c, p, "⪯", "\\preceq", true), i(l, c, p, "⪰", "\\succeq", true), i(l, c, p, "≃", "\\simeq", true), i(l, c, p, "∣", "\\mid", true), i(l, c, p, "≪", "\\ll", true), i(l, c, p, "≫", "\\gg", true), i(l, c, p, "≍", "\\asymp", true), i(l, c, p, "∥", "\\parallel"), i(l, c, p, "⋈", "\\bowtie", true), i(l, c, p, "⌣", "\\smile", true), i(l, c, p, "⊑", "\\sqsubseteq", true), i(l, c, p, "⊒", "\\sqsupseteq", true), i(l, c, p, "≐", "\\doteq", true), i(l, c, p, "⌢", "\\frown", true), i(l, c, p, "∋", "\\ni", true), i(l, c, p, "∝", "\\propto", true), i(l, c, p, "⊢", "\\vdash", true), i(l, c, p, "⊣", "\\dashv", true), i(l, c, p, "∋", "\\owns"), i(l, c, xe, ".", "\\ldotp"), i(l, c, xe, "⋅", "\\cdotp"), i(l, c, xe, "⋅", "·"), i(M, c, g, "⋅", "·"), i(l, c, g, "#", "\\#"), i(M, c, g, "#", "\\#"), i(l, c, g, "&", "\\&"), i(M, c, g, "&", "\\&"), i(l, c, g, "ℵ", "\\aleph", true), i(l, c, g, "∀", "\\forall", true), i(l, c, g, "ℏ", "\\hbar", true), i(l, c, g, "∃", "\\exists", true), i(l, c, g, "∇", "\\nabla", true), i(l, c, g, "♭", "\\flat", true), i(l, c, g, "ℓ", "\\ell", true), i(l, c, g, "♮", "\\natural", true), i(l, c, g, "♣", "\\clubsuit", true), i(l, c, g, "℘", "\\wp", true), i(l, c, g, "♯", "\\sharp", true), i(l, c, g, "♢", "\\diamondsuit", true), i(l, c, g, "ℜ", "\\Re", true), i(l, c, g, "♡", "\\heartsuit", true), i(l, c, g, "ℑ", "\\Im", true), i(l, c, g, "♠", "\\spadesuit", true), i(l, c, g, "§", "\\S", true), i(M, c, g, "§", "\\S"), i(l, c, g, "¶", "\\P", true), i(M, c, g, "¶", "\\P"), i(l, c, g, "†", "\\dag"), i(M, c, g, "†", "\\dag"), i(M, c, g, "†", "\\textdagger"), i(l, c, g, "‡", "\\ddag"), i(M, c, g, "‡", "\\ddag"), i(M, c, g, "‡", "\\textdaggerdbl"), i(l, c, w0, "⎱", "\\rmoustache", true), i(l, c, z0, "⎰", "\\lmoustache", true), i(l, c, w0, "⟯", "\\rgroup", true), i(l, c, z0, "⟮", "\\lgroup", true), i(l, c, q, "∓", "\\mp", true), i(l, c, q, "⊖", "\\ominus", true), i(l, c, q, "⊎", "\\uplus", true), i(l, c, q, "⊓", "\\sqcap", true), i(l, c, q, "∗", "\\ast"), i(l, c, q, "⊔", "\\sqcup", true), i(l, c, q, "◯", "\\bigcirc", true), i(l, c, q, "∙", "\\bullet", true), i(l, c, q, "‡", "\\ddagger"), i(l, c, q, "≀", "\\wr", true), i(l, c, q, "⨿", "\\amalg"), i(l, c, q, "&", "\\And"), i(l, c, p, "⟵", "\\longleftarrow", true), i(l, c, p, "⇐", "\\Leftarrow", true), i(l, c, p, "⟸", "\\Longleftarrow", true), i(l, c, p, "⟶", "\\longrightarrow", true), i(l, c, p, "⇒", "\\Rightarrow", true), i(l, c, p, "⟹", "\\Longrightarrow", true), i(l, c, p, "↔", "\\leftrightarrow", true), i(l, c, p, "⟷", "\\longleftrightarrow", true), i(l, c, p, "⇔", "\\Leftrightarrow", true), i(l, c, p, "⟺", "\\Longleftrightarrow", true), i(l, c, p, "↦", "\\mapsto", true), i(l, c, p, "⟼", "\\longmapsto", true), i(l, c, p, "↗", "\\nearrow", true), i(l, c, p, "↩", "\\hookleftarrow", true), i(l, c, p, "↪", "\\hookrightarrow", true), i(l, c, p, "↘", "\\searrow", true), i(l, c, p, "↼", "\\leftharpoonup", true), i(l, c, p, "⇀", "\\rightharpoonup", true), i(l, c, p, "↙", "\\swarrow", true), i(l, c, p, "↽", "\\leftharpoondown", true), i(l, c, p, "⇁", "\\rightharpoondown", true), i(l, c, p, "↖", "\\nwarrow", true), i(l, c, p, "⇌", "\\rightleftharpoons", true), i(l, d, p, "≮", "\\nless", true), i(l, d, p, "", "\\@nleqslant"), i(l, d, p, "", "\\@nleqq"), i(l, d, p, "⪇", "\\lneq", true), i(l, d, p, "≨", "\\lneqq", true), i(l, d, p, "", "\\@lvertneqq"), i(l, d, p, "⋦", "\\lnsim", true), i(l, d, p, "⪉", "\\lnapprox", true), i(l, d, p, "⊀", "\\nprec", true), i(l, d, p, "⋠", "\\npreceq", true), i(l, d, p, "⋨", "\\precnsim", true), i(l, d, p, "⪹", "\\precnapprox", true), i(l, d, p, "≁", "\\nsim", true), i(l, d, p, "", "\\@nshortmid"), i(l, d, p, "∤", "\\nmid", true), i(l, d, p, "⊬", "\\nvdash", true), i(l, d, p, "⊭", "\\nvDash", true), i(l, d, p, "⋪", "\\ntriangleleft"), i(l, d, p, "⋬", "\\ntrianglelefteq", true), i(l, d, p, "⊊", "\\subsetneq", true), i(l, d, p, "", "\\@varsubsetneq"), i(l, d, p, "⫋", "\\subsetneqq", true), i(l, d, p, "", "\\@varsubsetneqq"), i(l, d, p, "≯", "\\ngtr", true), i(l, d, p, "", "\\@ngeqslant"), i(l, d, p, "", "\\@ngeqq"), i(l, d, p, "⪈", "\\gneq", true), i(l, d, p, "≩", "\\gneqq", true), i(l, d, p, "", "\\@gvertneqq"), i(l, d, p, "⋧", "\\gnsim", true), i(l, d, p, "⪊", "\\gnapprox", true), i(l, d, p, "⊁", "\\nsucc", true), i(l, d, p, "⋡", "\\nsucceq", true), i(l, d, p, "⋩", "\\succnsim", true), i(l, d, p, "⪺", "\\succnapprox", true), i(l, d, p, "≆", "\\ncong", true), i(l, d, p, "", "\\@nshortparallel"), i(l, d, p, "∦", "\\nparallel", true), i(l, d, p, "⊯", "\\nVDash", true), i(l, d, p, "⋫", "\\ntriangleright"), i(l, d, p, "⋭", "\\ntrianglerighteq", true), i(l, d, p, "", "\\@nsupseteqq"), i(l, d, p, "⊋", "\\supsetneq", true), i(l, d, p, "", "\\@varsupsetneq"), i(l, d, p, "⫌", "\\supsetneqq", true), i(l, d, p, "", "\\@varsupsetneqq"), i(l, d, p, "⊮", "\\nVdash", true), i(l, d, p, "⪵", "\\precneqq", true), i(l, d, p, "⪶", "\\succneqq", true), i(l, d, p, "", "\\@nsubseteqq"), i(l, d, q, "⊴", "\\unlhd"), i(l, d, q, "⊵", "\\unrhd"), i(l, d, p, "↚", "\\nleftarrow", true), i(l, d, p, "↛", "\\nrightarrow", true), i(l, d, p, "⇍", "\\nLeftarrow", true), i(l, d, p, "⇏", "\\nRightarrow", true), i(l, d, p, "↮", "\\nleftrightarrow", true), i(l, d, p, "⇎", "\\nLeftrightarrow", true), i(l, d, p, "△", "\\vartriangle"), i(l, d, g, "ℏ", "\\hslash"), i(l, d, g, "▽", "\\triangledown"), i(l, d, g, "◊", "\\lozenge"), i(l, d, g, "Ⓢ", "\\circledS"), i(l, d, g, "®", "\\circledR"), i(M, d, g, "®", "\\circledR"), i(l, d, g, "∡", "\\measuredangle", true), i(l, d, g, "∄", "\\nexists"), i(l, d, g, "℧", "\\mho"), i(l, d, g, "Ⅎ", "\\Finv", true), i(l, d, g, "⅁", "\\Game", true), i(l, d, g, "‵", "\\backprime"), i(l, d, g, "▲", "\\blacktriangle"), i(l, d, g, "▼", "\\blacktriangledown"), i(l, d, g, "■", "\\blacksquare"), i(l, d, g, "⧫", "\\blacklozenge"), i(l, d, g, "★", "\\bigstar"), i(l, d, g, "∢", "\\sphericalangle", true), i(l, d, g, "∁", "\\complement", true), i(l, d, g, "ð", "\\eth", true), i(M, c, g, "ð", "ð"), i(l, d, g, "╱", "\\diagup"), i(l, d, g, "╲", "\\diagdown"), i(l, d, g, "□", "\\square"), i(l, d, g, "□", "\\Box"), i(l, d, g, "◊", "\\Diamond"), i(l, d, g, "¥", "\\yen", true), i(M, d, g, "¥", "\\yen", true), i(l, d, g, "✓", "\\checkmark", true), i(M, d, g, "✓", "\\checkmark"), i(l, d, g, "ℶ", "\\beth", true), i(l, d, g, "ℸ", "\\daleth", true), i(l, d, g, "ℷ", "\\gimel", true), i(l, d, g, "ϝ", "\\digamma", true), i(l, d, g, "ϰ", "\\varkappa"), i(l, d, z0, "┌", "\\@ulcorner", true), i(l, d, w0, "┐", "\\@urcorner", true), i(l, d, z0, "└", "\\@llcorner", true), i(l, d, w0, "┘", "\\@lrcorner", true), i(l, d, p, "≦", "\\leqq", true), i(l, d, p, "⩽", "\\leqslant", true), i(l, d, p, "⪕", "\\eqslantless", true), i(l, d, p, "≲", "\\lesssim", true), i(l, d, p, "⪅", "\\lessapprox", true), i(l, d, p, "≊", "\\approxeq", true), i(l, d, q, "⋖", "\\lessdot"), i(l, d, p, "⋘", "\\lll", true), i(l, d, p, "≶", "\\lessgtr", true), i(l, d, p, "⋚", "\\lesseqgtr", true), i(l, d, p, "⪋", "\\lesseqqgtr", true), i(l, d, p, "≑", "\\doteqdot"), i(l, d, p, "≓", "\\risingdotseq", true), i(l, d, p, "≒", "\\fallingdotseq", true), i(l, d, p, "∽", "\\backsim", true), i(l, d, p, "⋍", "\\backsimeq", true), i(l, d, p, "⫅", "\\subseteqq", true), i(l, d, p, "⋐", "\\Subset", true), i(l, d, p, "⊏", "\\sqsubset", true), i(l, d, p, "≼", "\\preccurlyeq", true), i(l, d, p, "⋞", "\\curlyeqprec", true), i(l, d, p, "≾", "\\precsim", true), i(l, d, p, "⪷", "\\precapprox", true), i(l, d, p, "⊲", "\\vartriangleleft"), i(l, d, p, "⊴", "\\trianglelefteq"), i(l, d, p, "⊨", "\\vDash", true), i(l, d, p, "⊪", "\\Vvdash", true), i(l, d, p, "⌣", "\\smallsmile"), i(l, d, p, "⌢", "\\smallfrown"), i(l, d, p, "≏", "\\bumpeq", true), i(l, d, p, "≎", "\\Bumpeq", true), i(l, d, p, "≧", "\\geqq", true), i(l, d, p, "⩾", "\\geqslant", true), i(l, d, p, "⪖", "\\eqslantgtr", true), i(l, d, p, "≳", "\\gtrsim", true), i(l, d, p, "⪆", "\\gtrapprox", true), i(l, d, q, "⋗", "\\gtrdot"), i(l, d, p, "⋙", "\\ggg", true), i(l, d, p, "≷", "\\gtrless", true), i(l, d, p, "⋛", "\\gtreqless", true), i(l, d, p, "⪌", "\\gtreqqless", true), i(l, d, p, "≖", "\\eqcirc", true), i(l, d, p, "≗", "\\circeq", true), i(l, d, p, "≜", "\\triangleq", true), i(l, d, p, "∼", "\\thicksim"), i(l, d, p, "≈", "\\thickapprox"), i(l, d, p, "⫆", "\\supseteqq", true), i(l, d, p, "⋑", "\\Supset", true), i(l, d, p, "⊐", "\\sqsupset", true), i(l, d, p, "≽", "\\succcurlyeq", true), i(l, d, p, "⋟", "\\curlyeqsucc", true), i(l, d, p, "≿", "\\succsim", true), i(l, d, p, "⪸", "\\succapprox", true), i(l, d, p, "⊳", "\\vartriangleright"), i(l, d, p, "⊵", "\\trianglerighteq"), i(l, d, p, "⊩", "\\Vdash", true), i(l, d, p, "∣", "\\shortmid"), i(l, d, p, "∥", "\\shortparallel"), i(l, d, p, "≬", "\\between", true), i(l, d, p, "⋔", "\\pitchfork", true), i(l, d, p, "∝", "\\varpropto"), i(l, d, p, "◀", "\\blacktriangleleft"), i(l, d, p, "∴", "\\therefore", true), i(l, d, p, "∍", "\\backepsilon"), i(l, d, p, "▶", "\\blacktriangleright"), i(l, d, p, "∵", "\\because", true), i(l, d, p, "⋘", "\\llless"), i(l, d, p, "⋙", "\\gggtr"), i(l, d, q, "⊲", "\\lhd"), i(l, d, q, "⊳", "\\rhd"), i(l, d, p, "≂", "\\eqsim", true), i(l, c, p, "⋈", "\\Join"), i(l, d, p, "≑", "\\Doteq", true), i(l, d, q, "∔", "\\dotplus", true), i(l, d, q, "∖", "\\smallsetminus"), i(l, d, q, "⋒", "\\Cap", true), i(l, d, q, "⋓", "\\Cup", true), i(l, d, q, "⩞", "\\doublebarwedge", true), i(l, d, q, "⊟", "\\boxminus", true), i(l, d, q, "⊞", "\\boxplus", true), i(l, d, q, "⋇", "\\divideontimes", true), i(l, d, q, "⋉", "\\ltimes", true), i(l, d, q, "⋊", "\\rtimes", true), i(l, d, q, "⋋", "\\leftthreetimes", true), i(l, d, q, "⋌", "\\rightthreetimes", true), i(l, d, q, "⋏", "\\curlywedge", true), i(l, d, q, "⋎", "\\curlyvee", true), i(l, d, q, "⊝", "\\circleddash", true), i(l, d, q, "⊛", "\\circledast", true), i(l, d, q, "⋅", "\\centerdot"), i(l, d, q, "⊺", "\\intercal", true), i(l, d, q, "⋒", "\\doublecap"), i(l, d, q, "⋓", "\\doublecup"), i(l, d, q, "⊠", "\\boxtimes", true), i(l, d, p, "⇢", "\\dashrightarrow", true), i(l, d, p, "⇠", "\\dashleftarrow", true), i(l, d, p, "⇇", "\\leftleftarrows", true), i(l, d, p, "⇆", "\\leftrightarrows", true), i(l, d, p, "⇚", "\\Lleftarrow", true), i(l, d, p, "↞", "\\twoheadleftarrow", true), i(l, d, p, "↢", "\\leftarrowtail", true), i(l, d, p, "↫", "\\looparrowleft", true), i(l, d, p, "⇋", "\\leftrightharpoons", true), i(l, d, p, "↶", "\\curvearrowleft", true), i(l, d, p, "↺", "\\circlearrowleft", true), i(l, d, p, "↰", "\\Lsh", true), i(l, d, p, "⇈", "\\upuparrows", true), i(l, d, p, "↿", "\\upharpoonleft", true), i(l, d, p, "⇃", "\\downharpoonleft", true), i(l, c, p, "⊶", "\\origof", true), i(l, c, p, "⊷", "\\imageof", true), i(l, d, p, "⊸", "\\multimap", true), i(l, d, p, "↭", "\\leftrightsquigarrow", true), i(l, d, p, "⇉", "\\rightrightarrows", true), i(l, d, p, "⇄", "\\rightleftarrows", true), i(l, d, p, "↠", "\\twoheadrightarrow", true), i(l, d, p, "↣", "\\rightarrowtail", true), i(l, d, p, "↬", "\\looparrowright", true), i(l, d, p, "↷", "\\curvearrowright", true), i(l, d, p, "↻", "\\circlearrowright", true), i(l, d, p, "↱", "\\Rsh", true), i(l, d, p, "⇊", "\\downdownarrows", true), i(l, d, p, "↾", "\\upharpoonright", true), i(l, d, p, "⇂", "\\downharpoonright", true), i(l, d, p, "⇝", "\\rightsquigarrow", true), i(l, d, p, "⇝", "\\leadsto"), i(l, d, p, "⇛", "\\Rrightarrow", true), i(l, d, p, "↾", "\\restriction"), i(l, c, g, "‘", "`"), i(l, c, g, "$", "\\$"), i(M, c, g, "$", "\\$"), i(M, c, g, "$", "\\textdollar"), i(l, c, g, "%", "\\%"), i(M, c, g, "%", "\\%"), i(l, c, g, "_", "\\_"), i(M, c, g, "_", "\\_"), i(M, c, g, "_", "\\textunderscore"), i(l, c, g, "∠", "\\angle", true), i(l, c, g, "∞", "\\infty", true), i(l, c, g, "′", "\\prime"), i(l, c, g, "△", "\\triangle"), i(l, c, g, "Γ", "\\Gamma", true), i(l, c, g, "Δ", "\\Delta", true), i(l, c, g, "Θ", "\\Theta", true), i(l, c, g, "Λ", "\\Lambda", true), i(l, c, g, "Ξ", "\\Xi", true), i(l, c, g, "Π", "\\Pi", true), i(l, c, g, "Σ", "\\Sigma", true), i(l, c, g, "Υ", "\\Upsilon", true), i(l, c, g, "Φ", "\\Phi", true), i(l, c, g, "Ψ", "\\Psi", true), i(l, c, g, "Ω", "\\Omega", true), i(l, c, g, "A", "Α"), i(l, c, g, "B", "Β"), i(l, c, g, "E", "Ε"), i(l, c, g, "Z", "Ζ"), i(l, c, g, "H", "Η"), i(l, c, g, "I", "Ι"), i(l, c, g, "K", "Κ"), i(l, c, g, "M", "Μ"), i(l, c, g, "N", "Ν"), i(l, c, g, "O", "Ο"), i(l, c, g, "P", "Ρ"), i(l, c, g, "T", "Τ"), i(l, c, g, "X", "Χ"), i(l, c, g, "¬", "\\neg", true), i(l, c, g, "¬", "\\lnot"), i(l, c, g, "⊤", "\\top"), i(l, c, g, "⊥", "\\bot"), i(l, c, g, "∅", "\\emptyset"), i(l, d, g, "∅", "\\varnothing"), i(l, c, E, "α", "\\alpha", true), i(l, c, E, "β", "\\beta", true), i(l, c, E, "γ", "\\gamma", true), i(l, c, E, "δ", "\\delta", true), i(l, c, E, "ϵ", "\\epsilon", true), i(l, c, E, "ζ", "\\zeta", true), i(l, c, E, "η", "\\eta", true), i(l, c, E, "θ", "\\theta", true), i(l, c, E, "ι", "\\iota", true), i(l, c, E, "κ", "\\kappa", true), i(l, c, E, "λ", "\\lambda", true), i(l, c, E, "μ", "\\mu", true), i(l, c, E, "ν", "\\nu", true), i(l, c, E, "ξ", "\\xi", true), i(l, c, E, "ο", "\\omicron", true), i(l, c, E, "π", "\\pi", true), i(l, c, E, "ρ", "\\rho", true), i(l, c, E, "σ", "\\sigma", true), i(l, c, E, "τ", "\\tau", true), i(l, c, E, "υ", "\\upsilon", true), i(l, c, E, "ϕ", "\\phi", true), i(l, c, E, "χ", "\\chi", true), i(l, c, E, "ψ", "\\psi", true), i(l, c, E, "ω", "\\omega", true), i(l, c, E, "ε", "\\varepsilon", true), i(l, c, E, "ϑ", "\\vartheta", true), i(l, c, E, "ϖ", "\\varpi", true), i(l, c, E, "ϱ", "\\varrho", true), i(l, c, E, "ς", "\\varsigma", true), i(l, c, E, "φ", "\\varphi", true), i(l, c, q, "∗", "*", true), i(l, c, q, "+", "+"), i(l, c, q, "−", "-", true), i(l, c, q, "⋅", "\\cdot", true), i(l, c, q, "∘", "\\circ", true), i(l, c, q, "÷", "\\div", true), i(l, c, q, "±", "\\pm", true), i(l, c, q, "×", "\\times", true), i(l, c, q, "∩", "\\cap", true), i(l, c, q, "∪", "\\cup", true), i(l, c, q, "∖", "\\setminus", true), i(l, c, q, "∧", "\\land"), i(l, c, q, "∨", "\\lor"), i(l, c, q, "∧", "\\wedge", true), i(l, c, q, "∨", "\\vee", true), i(l, c, g, "√", "\\surd"), i(l, c, z0, "⟨", "\\langle", true), i(l, c, z0, "∣", "\\lvert"), i(l, c, z0, "∥", "\\lVert"), i(l, c, w0, "?", "?"), i(l, c, w0, "!", "!"), i(l, c, w0, "⟩", "\\rangle", true), i(l, c, w0, "∣", "\\rvert"), i(l, c, w0, "∥", "\\rVert"), i(l, c, p, "=", "="), i(l, c, p, ":", ":"), i(l, c, p, "≈", "\\approx", true), i(l, c, p, "≅", "\\cong", true), i(l, c, p, "≥", "\\ge"), i(l, c, p, "≥", "\\geq", true), i(l, c, p, "←", "\\gets"), i(l, c, p, ">", "\\gt", true), i(l, c, p, "∈", "\\in", true), i(l, c, p, "", "\\@not"), i(l, c, p, "⊂", "\\subset", true), i(l, c, p, "⊃", "\\supset", true), i(l, c, p, "⊆", "\\subseteq", true), i(l, c, p, "⊇", "\\supseteq", true), i(l, d, p, "⊈", "\\nsubseteq", true), i(l, d, p, "⊉", "\\nsupseteq", true), i(l, c, p, "⊨", "\\models"), i(l, c, p, "←", "\\leftarrow", true), i(l, c, p, "≤", "\\le"), i(l, c, p, "≤", "\\leq", true), i(l, c, p, "<", "\\lt", true), i(l, c, p, "→", "\\rightarrow", true), i(l, c, p, "→", "\\to"), i(l, d, p, "≱", "\\ngeq", true), i(l, d, p, "≰", "\\nleq", true), i(l, c, $0, " ", "\\ "), i(l, c, $0, " ", "\\space"), i(l, c, $0, " ", "\\nobreakspace"), i(M, c, $0, " ", "\\ "), i(M, c, $0, " ", " "), i(M, c, $0, " ", "\\space"), i(M, c, $0, " ", "\\nobreakspace"), i(l, c, $0, "", "\\nobreak"), i(l, c, $0, "", "\\allowbreak"), i(l, c, xe, ",", ","), i(l, c, xe, ";", ";"), i(l, d, q, "⊼", "\\barwedge", true), i(l, d, q, "⊻", "\\veebar", true), i(l, c, q, "⊙", "\\odot", true), i(l, c, q, "⊕", "\\oplus", true), i(l, c, q, "⊗", "\\otimes", true), i(l, c, g, "∂", "\\partial", true), i(l, c, q, "⊘", "\\oslash", true), i(l, d, q, "⊚", "\\circledcirc", true), i(l, d, q, "⊡", "\\boxdot", true), i(l, c, q, "△", "\\bigtriangleup"), i(l, c, q, "▽", "\\bigtriangledown"), i(l, c, q, "†", "\\dagger"), i(l, c, q, "⋄", "\\diamond"), i(l, c, q, "⋆", "\\star"), i(l, c, q, "◃", "\\triangleleft"), i(l, c, q, "▹", "\\triangleright"), i(l, c, z0, "{", "\\{"), i(M, c, g, "{", "\\{"), i(M, c, g, "{", "\\textbraceleft"), i(l, c, w0, "}", "\\}"), i(M, c, g, "}", "\\}"), i(M, c, g, "}", "\\textbraceright"), i(l, c, z0, "{", "\\lbrace"), i(l, c, w0, "}", "\\rbrace"), i(l, c, z0, "[", "\\lbrack", true), i(M, c, g, "[", "\\lbrack", true), i(l, c, w0, "]", "\\rbrack", true), i(M, c, g, "]", "\\rbrack", true), i(l, c, z0, "(", "\\lparen", true), i(l, c, w0, ")", "\\rparen", true), i(M, c, g, "<", "\\textless", true), i(M, c, g, ">", "\\textgreater", true), i(l, c, z0, "⌊", "\\lfloor", true), i(l, c, w0, "⌋", "\\rfloor", true), i(l, c, z0, "⌈", "\\lceil", true), i(l, c, w0, "⌉", "\\rceil", true), i(l, c, g, "\\", "\\backslash"), i(l, c, g, "∣", "|"), i(l, c, g, "∣", "\\vert"), i(M, c, g, "|", "\\textbar", true), i(l, c, g, "∥", "\\|"), i(l, c, g, "∥", "\\Vert"), i(M, c, g, "∥", "\\textbardbl"), i(M, c, g, "~", "\\textasciitilde"), i(M, c, g, "\\", "\\textbackslash"), i(M, c, g, "^", "\\textasciicircum"), i(l, c, p, "↑", "\\uparrow", true), i(l, c, p, "⇑", "\\Uparrow", true), i(l, c, p, "↓", "\\downarrow", true), i(l, c, p, "⇓", "\\Downarrow", true), i(l, c, p, "↕", "\\updownarrow", true), i(l, c, p, "⇕", "\\Updownarrow", true), i(l, c, a0, "∐", "\\coprod"), i(l, c, a0, "⋁", "\\bigvee"), i(l, c, a0, "⋀", "\\bigwedge"), i(l, c, a0, "⨄", "\\biguplus"), i(l, c, a0, "⋂", "\\bigcap"), i(l, c, a0, "⋃", "\\bigcup"), i(l, c, a0, "∫", "\\int"), i(l, c, a0, "∫", "\\intop"), i(l, c, a0, "∬", "\\iint"), i(l, c, a0, "∭", "\\iiint"), i(l, c, a0, "∏", "\\prod"), i(l, c, a0, "∑", "\\sum"), i(l, c, a0, "⨂", "\\bigotimes"), i(l, c, a0, "⨁", "\\bigoplus"), i(l, c, a0, "⨀", "\\bigodot"), i(l, c, a0, "∮", "\\oint"), i(l, c, a0, "∯", "\\oiint"), i(l, c, a0, "∰", "\\oiiint"), i(l, c, a0, "⨆", "\\bigsqcup"), i(l, c, a0, "∫", "\\smallint"), i(M, c, ue, "…", "\\textellipsis"), i(l, c, ue, "…", "\\mathellipsis"), i(M, c, ue, "…", "\\ldots", true), i(l, c, ue, "…", "\\ldots", true), i(l, c, ue, "⋯", "\\@cdots", true), i(l, c, ue, "⋱", "\\ddots", true), i(l, c, g, "⋮", "\\varvdots"), i(M, c, g, "⋮", "\\varvdots"), i(l, c, e0, "ˊ", "\\acute"), i(l, c, e0, "ˋ", "\\grave"), i(l, c, e0, "¨", "\\ddot"), i(l, c, e0, "~", "\\tilde"), i(l, c, e0, "ˉ", "\\bar"), i(l, c, e0, "˘", "\\breve"), i(l, c, e0, "ˇ", "\\check"), i(l, c, e0, "^", "\\hat"), i(l, c, e0, "⃗", "\\vec"), i(l, c, e0, "˙", "\\dot"), i(l, c, e0, "˚", "\\mathring"), i(l, c, E, "", "\\@imath"), i(l, c, E, "", "\\@jmath"), i(l, c, g, "ı", "ı"), i(l, c, g, "ȷ", "ȷ"), i(M, c, g, "ı", "\\i", true), i(M, c, g, "ȷ", "\\j", true), i(M, c, g, "ß", "\\ss", true), i(M, c, g, "æ", "\\ae", true), i(M, c, g, "œ", "\\oe", true), i(M, c, g, "ø", "\\o", true), i(M, c, g, "Æ", "\\AE", true), i(M, c, g, "Œ", "\\OE", true), i(M, c, g, "Ø", "\\O", true), i(M, c, e0, "ˊ", "\\'"), i(M, c, e0, "ˋ", "\\`"), i(M, c, e0, "ˆ", "\\^"), i(M, c, e0, "˜", "\\~"), i(M, c, e0, "ˉ", "\\="), i(M, c, e0, "˘", "\\u"), i(M, c, e0, "˙", "\\."), i(M, c, e0, "¸", "\\c"), i(M, c, e0, "˚", "\\r"), i(M, c, e0, "ˇ", "\\v"), i(M, c, e0, "¨", '\\"'), i(M, c, e0, "˝", "\\H"), i(M, c, e0, "◯", "\\textcircled");
      let er = { "--": true, "---": true, "``": true, "''": true };
      i(M, c, g, "–", "--", true), i(M, c, g, "–", "\\textendash"), i(M, c, g, "—", "---", true), i(M, c, g, "—", "\\textemdash"), i(M, c, g, "‘", "`", true), i(M, c, g, "‘", "\\textquoteleft"), i(M, c, g, "’", "'", true), i(M, c, g, "’", "\\textquoteright"), i(M, c, g, "“", "``", true), i(M, c, g, "“", "\\textquotedblleft"), i(M, c, g, "”", "''", true), i(M, c, g, "”", "\\textquotedblright"), i(l, c, g, "°", "\\degree", true), i(M, c, g, "°", "\\degree"), i(M, c, g, "°", "\\textdegree", true), i(l, c, g, "£", "\\pounds"), i(l, c, g, "£", "\\mathsterling", true), i(M, c, g, "£", "\\pounds"), i(M, c, g, "£", "\\textsterling", true), i(l, d, g, "✠", "\\maltese"), i(M, d, g, "✠", "\\maltese");
      let tr = '0123456789/@."';
      for (let t = 0; t < tr.length; t++) {
        let e = tr.charAt(t);
        i(l, c, g, e, e);
      }
      let rr = '0123456789!@*()-=+";:?/.,';
      for (let t = 0; t < rr.length; t++) {
        let e = rr.charAt(t);
        i(M, c, g, e, e);
      }
      let qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let t = 0; t < qe.length; t++) {
        let e = qe.charAt(t);
        i(l, c, E, e, e), i(M, c, g, e, e);
      }
      i(l, d, g, "C", "ℂ"), i(M, d, g, "C", "ℂ"), i(l, d, g, "H", "ℍ"), i(M, d, g, "H", "ℍ"), i(l, d, g, "N", "ℕ"), i(M, d, g, "N", "ℕ"), i(l, d, g, "P", "ℙ"), i(M, d, g, "P", "ℙ"), i(l, d, g, "Q", "ℚ"), i(M, d, g, "Q", "ℚ"), i(l, d, g, "R", "ℝ"), i(M, d, g, "R", "ℝ"), i(l, d, g, "Z", "ℤ"), i(M, d, g, "Z", "ℤ"), i(l, c, E, "h", "ℎ"), i(M, c, E, "h", "ℎ");
      let I;
      for (let t = 0; t < qe.length; t++) {
        let e = qe.charAt(t);
        I = String.fromCharCode(55349, 56320 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56372 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56424 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56580 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56684 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56736 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56788 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56840 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56944 + t), i(l, c, E, e, I), i(M, c, g, e, I), t < 26 && (I = String.fromCharCode(55349, 56632 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 56476 + t), i(l, c, E, e, I), i(M, c, g, e, I));
      }
      I = "𝕜", i(l, c, E, "k", I), i(M, c, g, "k", I);
      for (let t = 0; t < 10; t++) {
        let e = t.toString();
        I = String.fromCharCode(55349, 57294 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 57314 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 57324 + t), i(l, c, E, e, I), i(M, c, g, e, I), I = String.fromCharCode(55349, 57334 + t), i(l, c, E, e, I), i(M, c, g, e, I);
      }
      let at = "ÐÞþ";
      for (let t = 0; t < at.length; t++) {
        let e = at.charAt(t);
        i(l, c, E, e, e), i(M, c, g, e, e);
      }
      let ct = { mathClass: "mathbf", textClass: "textbf", font: "Main-Bold" }, nr = { mathClass: "mathnormal", textClass: "textit", font: "Math-Italic" }, sr = { mathClass: "boldsymbol", textClass: "boldsymbol", font: "Main-BoldItalic" }, a1 = { mathClass: "mathscr", textClass: "textscr", font: "Script-Regular" }, re = { mathClass: "", textClass: "", font: "" }, ir = { mathClass: "mathfrak", textClass: "textfrak", font: "Fraktur-Regular" }, lr = { mathClass: "mathbb", textClass: "textbb", font: "AMS-Regular" }, or = { mathClass: "mathboldfrak", textClass: "textboldfrak", font: "Fraktur-Regular" }, ut = { mathClass: "mathsf", textClass: "textsf", font: "SansSerif-Regular" }, ht = { mathClass: "mathboldsf", textClass: "textboldsf", font: "SansSerif-Bold" }, ar = { mathClass: "mathitsf", textClass: "textitsf", font: "SansSerif-Italic" }, mt = { mathClass: "mathtt", textClass: "texttt", font: "Typewriter-Regular" }, cr = [ct, ct, nr, nr, sr, sr, a1, re, re, re, ir, ir, lr, lr, or, or, ut, ut, ht, ht, ar, ar, re, re, mt, mt], c1 = [ct, re, ut, ht, mt], u1 = (t) => {
        let e = t.charCodeAt(0), r = t.charCodeAt(1), n = (e - 55296) * 1024 + (r - 56320) + 65536;
        if (119808 <= n && n < 120484) {
          let s = Math.floor((n - 119808) / 26);
          return cr[s];
        } else if (120782 <= n && n <= 120831) {
          let s = Math.floor((n - 120782) / 10);
          return c1[s];
        } else {
          if (n === 120485 || n === 120486) return cr[0];
          if (120486 < n && n < 120782) return re;
          throw new v("Unsupported character: " + t);
        }
      }, Ne = function(t, e, r) {
        if (l0[r][t]) {
          let n = l0[r][t].replace;
          n && (t = n);
        }
        return { value: t, metrics: lt(t, e, r) };
      }, v0 = function(t, e, r, n, s) {
        let o = Ne(t, e, r), a = o.metrics;
        t = o.value;
        let u;
        if (a) {
          let m = a.italic;
          (r === "text" || n && n.font === "mathit") && (m = 0), u = new M0(t, a.height, a.depth, m, a.skew, a.width, s);
        } else typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + e + "' and mode '" + r + "'")), u = new M0(t, 0, 0, 0, 0, 0, s);
        if (n) {
          u.maxFontSize = n.sizeMultiplier, n.style.isTight() && u.classes.push("mtight");
          let m = n.getColor();
          m && (u.style.color = m);
        }
        return u;
      }, dt = function(t, e, r, n) {
        return n === void 0 && (n = []), r.font === "boldsymbol" && Ne(t, "Main-Bold", e).metrics ? v0(t, "Main-Bold", e, r, n.concat(["mathbf"])) : t === "\\" || l0[e][t].font === "main" ? v0(t, "Main-Regular", e, r, n) : v0(t, "AMS-Regular", e, r, n.concat(["amsrm"]));
      }, h1 = function(t, e, r) {
        return r !== "textord" && Ne(t, "Math-BoldItalic", e).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
      }, Ee = function(t, e, r) {
        let n = t.mode, s = t.text, o = ["mord"], { font: a, fontFamily: u, fontWeight: m, fontShape: f } = e, b = n === "math" || n === "text" && !!a, y = b ? a : u, w = "", k = "";
        if (s.charCodeAt(0) === 55349) {
          let S = u1(s);
          w = S.font, k = S[n + "Class"];
        }
        if (w) return v0(s, w, n, e, o.concat(k));
        if (y) {
          let S, B;
          if (y === "boldsymbol") {
            let _ = h1(s, n, r);
            S = _.fontName, B = [_.fontClass];
          } else b ? (S = pt[a].fontName, B = [a]) : (S = Ie(u, m, f), B = [u, m, f]);
          if (Ne(s, S, n).metrics) return v0(s, S, n, e, o.concat(B));
          if (er.hasOwnProperty(s) && S.slice(0, 10) === "Typewriter") {
            let _ = [];
            for (let O = 0; O < s.length; O++) _.push(v0(s[O], S, n, e, o.concat(B)));
            return U0(_);
          }
        }
        if (r === "mathord") return v0(s, "Math-Italic", n, e, o.concat(["mathnormal"]));
        if (r === "textord") {
          let S = l0[n][s] && l0[n][s].font;
          if (S === "ams") {
            let B = Ie("amsrm", m, f);
            return v0(s, B, n, e, o.concat("amsrm", m, f));
          } else if (S === "main" || !S) {
            let B = Ie("textrm", m, f);
            return v0(s, B, n, e, o.concat(m, f));
          } else {
            let B = Ie(S, m, f);
            return v0(s, B, n, e, o.concat(B, m, f));
          }
        } else throw new Error("unexpected type: " + r + " in makeOrd");
      }, m1 = (t, e) => {
        if (j0(t.classes) !== j0(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize || t.italic !== 0 && t.hasClass("mathnormal")) return false;
        if (t.classes.length === 1) {
          let r = t.classes[0];
          if (r === "mbin" || r === "mord") return false;
        }
        for (let r of Object.keys(t.style)) if (t.style[r] !== e.style[r]) return false;
        for (let r of Object.keys(e.style)) if (t.style[r] !== e.style[r]) return false;
        return true;
      }, ur = (t) => {
        for (let e = 0; e < t.length - 1; e++) {
          let r = t[e], n = t[e + 1];
          r instanceof M0 && n instanceof M0 && m1(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, t.splice(e + 1, 1), e--);
        }
        return t;
      }, ft = function(t) {
        let e = 0, r = 0, n = 0;
        for (let s = 0; s < t.children.length; s++) {
          let o = t.children[s];
          o.height > e && (e = o.height), o.depth > r && (r = o.depth), o.maxFontSize > n && (n = o.maxFontSize);
        }
        t.height = e, t.depth = r, t.maxFontSize = n;
      }, z = function(t, e, r, n) {
        let s = new ce(t, e, r, n);
        return ft(s), s;
      }, Z0 = (t, e, r, n) => new ce(t, e, r, n), he = function(t, e, r) {
        let n = z([t], [], e);
        return n.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness), n.style.borderBottomWidth = T(n.height), n.maxFontSize = 1, n;
      }, d1 = function(t, e, r, n) {
        let s = new Ce(t, e, r, n);
        return ft(s), s;
      }, U0 = function(t) {
        let e = new ae(t);
        return ft(e), e;
      }, me = function(t, e) {
        return t instanceof ae ? z([], [t], e) : t;
      }, f1 = function(t) {
        if (t.positionType === "individualShift") {
          let r = t.children, n = [r[0]], s = -r[0].shift - r[0].elem.depth, o = s;
          for (let a = 1; a < r.length; a++) {
            let u = -r[a].shift - o - r[a].elem.depth, m = u - (r[a - 1].elem.height + r[a - 1].elem.depth);
            o = o + u, n.push({ type: "kern", size: m }), n.push(r[a]);
          }
          return { children: n, depth: s };
        }
        let e;
        if (t.positionType === "top") {
          let r = t.positionData;
          for (let n = 0; n < t.children.length; n++) {
            let s = t.children[n];
            r -= s.type === "kern" ? s.size : s.elem.height + s.elem.depth;
          }
          e = r;
        } else if (t.positionType === "bottom") e = -t.positionData;
        else {
          let r = t.children[0];
          if (r.type !== "elem") throw new Error('First child must have type "elem".');
          if (t.positionType === "shift") e = -r.elem.depth - t.positionData;
          else if (t.positionType === "firstBaseline") e = -r.elem.depth;
          else throw new Error("Invalid positionType " + t.positionType + ".");
        }
        return { children: t.children, depth: e };
      }, U = function(t, e) {
        let { children: r, depth: n } = f1(t), s = 0;
        for (let k = 0; k < r.length; k++) {
          let S = r[k];
          if (S.type === "elem") {
            let B = S.elem;
            s = Math.max(s, B.maxFontSize, B.height);
          }
        }
        s += 2;
        let o = z(["pstrut"], []);
        o.style.height = T(s);
        let a = [], u = n, m = n, f = n;
        for (let k = 0; k < r.length; k++) {
          let S = r[k];
          if (S.type === "kern") f += S.size;
          else {
            let B = S.elem, _ = S.wrapperClasses || [], O = S.wrapperStyle || {}, G = z(_, [o, B], void 0, O);
            G.style.top = T(-s - f - B.depth), S.marginLeft && (G.style.marginLeft = S.marginLeft), S.marginRight && (G.style.marginRight = S.marginRight), a.push(G), f += B.height + B.depth;
          }
          u = Math.min(u, f), m = Math.max(m, f);
        }
        let b = z(["vlist"], a);
        b.style.height = T(m);
        let y;
        if (u < 0) {
          let k = z([], []), S = z(["vlist"], [k]);
          S.style.height = T(-u);
          let B = z(["vlist-s"], [new M0("​")]);
          y = [z(["vlist-r"], [b, B]), z(["vlist-r"], [S])];
        } else y = [z(["vlist-r"], [b])];
        let w = z(["vlist-t"], y);
        return y.length === 2 && w.classes.push("vlist-t2"), w.height = m, w.depth = -u, w;
      }, hr = (t, e) => {
        let r = z(["mspace"], [], e), n = r0(t, e);
        return r.style.marginRight = T(n), r;
      }, Ie = (t, e, r) => {
        let n, s;
        switch (t) {
          case "amsrm":
            n = "AMS";
            break;
          case "textrm":
            n = "Main";
            break;
          case "textsf":
            n = "SansSerif";
            break;
          case "texttt":
            n = "Typewriter";
            break;
          default:
            n = t;
        }
        return e === "textbf" && r === "textit" ? s = "BoldItalic" : e === "textbf" ? s = "Bold" : r === "textit" ? s = "Italic" : s = "Regular", n + "-" + s;
      }, pt = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, mr = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, dr = function(t, e) {
        let [r, n, s] = mr[t], o = new Y0(r), a = new G0([o], { width: T(n), height: T(s), style: "width:" + T(n), viewBox: "0 0 " + 1e3 * n + " " + 1e3 * s, preserveAspectRatio: "xMinYMin" }), u = Z0(["overlay"], [a], e);
        return u.height = s, u.style.height = T(s), u.style.width = T(n), u;
      }, n0 = { number: 3, unit: "mu" }, ne = { number: 4, unit: "mu" }, V0 = { number: 5, unit: "mu" }, p1 = { mord: { mop: n0, mbin: ne, mrel: V0, minner: n0 }, mop: { mord: n0, mop: n0, mrel: V0, minner: n0 }, mbin: { mord: ne, mop: ne, mopen: ne, minner: ne }, mrel: { mord: V0, mop: V0, mopen: V0, minner: V0 }, mopen: {}, mclose: { mop: n0, mbin: ne, mrel: V0, minner: n0 }, mpunct: { mord: n0, mop: n0, mrel: V0, mopen: n0, mclose: n0, mpunct: n0, minner: n0 }, minner: { mord: n0, mop: n0, mbin: ne, mrel: V0, mopen: n0, mpunct: n0, minner: n0 } }, g1 = { mord: { mop: n0 }, mop: { mord: n0, mop: n0 }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: n0 }, mpunct: {}, minner: { mop: n0 } }, fr = {}, Re = {}, Oe = {};
      function C(t) {
        let { type: e, names: r, props: n, handler: s, htmlBuilder: o, mathmlBuilder: a } = t, u = { type: e, numArgs: n.numArgs, argTypes: n.argTypes, allowedInArgument: !!n.allowedInArgument, allowedInText: !!n.allowedInText, allowedInMath: n.allowedInMath === void 0 ? true : n.allowedInMath, numOptionalArgs: n.numOptionalArgs || 0, infix: !!n.infix, primitive: !!n.primitive, handler: s };
        for (let m = 0; m < r.length; ++m) fr[r[m]] = u;
        e && (o && (Re[e] = o), a && (Oe[e] = a));
      }
      function se(t) {
        let { type: e, htmlBuilder: r, mathmlBuilder: n } = t;
        C({ type: e, names: [], props: { numArgs: 0 }, handler() {
          throw new Error("Should never be called.");
        }, htmlBuilder: r, mathmlBuilder: n });
      }
      let He = function(t) {
        return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
      }, c0 = function(t) {
        return t.type === "ordgroup" ? t.body : [t];
      }, b1 = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), y1 = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), x1 = { display: H.DISPLAY, text: H.TEXT, script: H.SCRIPT, scriptscript: H.SCRIPTSCRIPT }, w1 = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, g0 = function(t, e, r, n) {
        n === void 0 && (n = [null, null]);
        let s = [];
        for (let f = 0; f < t.length; f++) {
          let b = V(t[f], e);
          if (b instanceof ae) {
            let y = b.children;
            s.push(...y);
          } else s.push(b);
        }
        if (ur(s), !r) return s;
        let o = e;
        if (t.length === 1) {
          let f = t[0];
          f.type === "sizing" ? o = e.havingSize(f.size) : f.type === "styling" && (o = e.havingStyle(x1[f.style]));
        }
        let a = z([n[0] || "leftmost"], [], e), u = z([n[1] || "rightmost"], [], e), m = r === "root";
        return gt(s, (f, b) => {
          let y = b.classes[0], w = f.classes[0];
          y === "mbin" && y1.has(w) ? b.classes[0] = "mord" : w === "mbin" && b1.has(y) && (f.classes[0] = "mord");
        }, { node: a }, u, m), gt(s, (f, b) => {
          var y, w;
          let k = yt(b), S = yt(f), B = k && S ? f.hasClass("mtight") ? (y = g1[k]) == null ? void 0 : y[S] : (w = p1[k]) == null ? void 0 : w[S] : null;
          if (B) return hr(B, o);
        }, { node: a }, u, m), s;
      }, gt = function(t, e, r, n, s) {
        n && t.push(n);
        let o = 0;
        for (; o < t.length; o++) {
          let a = t[o], u = pr(a);
          if (u) {
            gt(u.children, e, r, null, s);
            continue;
          }
          let m = !a.hasClass("mspace");
          if (m) {
            let f = e(a, r.node);
            f && (r.insertAfter ? r.insertAfter(f) : (t.unshift(f), o++));
          }
          m ? r.node = a : s && a.hasClass("newline") && (r.node = z(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((f) => (b) => {
            t.splice(f + 1, 0, b), o++;
          })(o);
        }
        n && t.pop();
      }, pr = function(t) {
        return t instanceof ae || t instanceof Ce || t instanceof ce && t.hasClass("enclosing") ? t : null;
      }, bt = function(t, e) {
        let r = pr(t);
        if (r) {
          let n = r.children;
          if (n.length) {
            if (e === "right") return bt(n[n.length - 1], "right");
            if (e === "left") return bt(n[0], "left");
          }
        }
        return t;
      }, yt = function(t, e) {
        if (!t) return null;
        e && (t = bt(t, e));
        let r = t.classes[0];
        return w1[r] || null;
      }, we = function(t, e) {
        let r = ["nulldelimiter"].concat(t.baseSizingClasses());
        return z(e.concat(r));
      }, V = function(t, e, r) {
        if (!t) return z();
        if (Re[t.type]) {
          let n = Re[t.type](t, e);
          if (r && e.size !== r.size) {
            n = z(e.sizingClasses(r), [n], e);
            let s = e.sizeMultiplier / r.sizeMultiplier;
            n.height *= s, n.depth *= s;
          }
          return n;
        } else throw new v("Got group of unknown type: '" + t.type + "'");
      };
      function Fe(t, e) {
        let r = z(["base"], t, e), n = z(["strut"]);
        return n.style.height = T(r.height + r.depth), r.depth && (n.style.verticalAlign = T(-r.depth)), r.children.unshift(n), r;
      }
      function xt(t, e) {
        let r = null;
        t.length === 1 && t[0].type === "tag" && (r = t[0].tag, t = t[0].body);
        let n = g0(t, e, "root"), s;
        n.length === 2 && n[1].hasClass("tag") && (s = n.pop());
        let o = [], a = [];
        for (let f = 0; f < n.length; f++) if (a.push(n[f]), n[f].hasClass("mbin") || n[f].hasClass("mrel") || n[f].hasClass("allowbreak")) {
          let b = false;
          for (; f < n.length - 1 && n[f + 1].hasClass("mspace") && !n[f + 1].hasClass("newline"); ) f++, a.push(n[f]), n[f].hasClass("nobreak") && (b = true);
          b || (o.push(Fe(a, e)), a = []);
        } else n[f].hasClass("newline") && (a.pop(), a.length > 0 && (o.push(Fe(a, e)), a = []), o.push(n[f]));
        a.length > 0 && o.push(Fe(a, e));
        let u;
        r ? (u = Fe(g0(r, e, true), e), u.classes = ["tag"], o.push(u)) : s && o.push(s);
        let m = z(["katex-html"], o);
        if (m.setAttribute("aria-hidden", "true"), u) {
          let f = u.children[0];
          f.style.height = T(m.height + m.depth), m.depth && (f.style.verticalAlign = T(-m.depth));
        }
        return m;
      }
      function gr(t) {
        return new ae(t);
      }
      class A {
        constructor(e, r, n) {
          this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = n || [];
        }
        setAttribute(e, r) {
          this.attributes[e] = r;
        }
        getAttribute(e) {
          return this.attributes[e];
        }
        toNode() {
          let e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (let r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
          this.classes.length > 0 && (e.className = j0(this.classes));
          for (let r = 0; r < this.children.length; r++) if (this.children[r] instanceof u0 && this.children[r + 1] instanceof u0) {
            let n = this.children[r].toText() + this.children[++r].toText();
            for (; this.children[r + 1] instanceof u0; ) n += this.children[++r].toText();
            e.appendChild(new u0(n).toNode());
          } else e.appendChild(this.children[r].toNode());
          return e;
        }
        toMarkup() {
          let e = "<" + this.type;
          for (let r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += $(this.attributes[r]), e += '"');
          this.classes.length > 0 && (e += ' class ="' + $(j0(this.classes)) + '"'), e += ">";
          for (let r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
          return e += "</" + this.type + ">", e;
        }
        toText() {
          return this.children.map((e) => e.toText()).join("");
        }
      }
      class u0 {
        constructor(e) {
          this.text = void 0, this.text = e;
        }
        toNode() {
          return document.createTextNode(this.text);
        }
        toMarkup() {
          return $(this.toText());
        }
        toText() {
          return this.text;
        }
      }
      class br {
        constructor(e) {
          this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
        }
        toNode() {
          if (this.character) return document.createTextNode(this.character);
          {
            let e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
            return e.setAttribute("width", T(this.width)), e;
          }
        }
        toMarkup() {
          return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + T(this.width) + '"/>';
        }
        toText() {
          return this.character ? this.character : " ";
        }
      }
      let v1 = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), k1 = /* @__PURE__ */ new Set(["mrow", "mtable"]), D0 = function(t, e, r) {
        return l0[e][t] && l0[e][t].replace && t.charCodeAt(0) !== 55349 && !(er.hasOwnProperty(t) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (t = l0[e][t].replace), new u0(t);
      }, wt = function(t) {
        return t.length === 1 ? t[0] : new A("mrow", t);
      }, S1 = { mathit: "italic", boldsymbol: (t) => t.type === "textord" ? "bold" : "bold-italic", mathbf: "bold", mathbb: "double-struck", mathsfit: "sans-serif-italic", mathfrak: "fraktur", mathscr: "script", mathcal: "script", mathsf: "sans-serif", mathtt: "monospace" }, vt = (t, e) => {
        if (t.mode === "text") {
          if (e.fontFamily === "texttt") return "monospace";
          if (e.fontFamily === "textsf") return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
          if (e.fontShape === "textit" && e.fontWeight === "textbf") return "bold-italic";
          if (e.fontShape === "textit") return "italic";
          if (e.fontWeight === "textbf") return "bold";
        }
        let r = e.font;
        if (!r || r === "mathnormal") return null;
        let n = t.mode, s = S1[r];
        if (s) return typeof s == "function" ? s(t) : s;
        let o = t.text;
        if (v1.has(o)) return null;
        if (l0[n][o]) {
          let u = l0[n][o].replace;
          u && (o = u);
        }
        let a = pt[r].fontName;
        return lt(o, a, n) ? pt[r].variant : null;
      };
      function kt(t) {
        if (!t) return false;
        if (t.type === "mi" && t.children.length === 1) {
          let e = t.children[0];
          return e instanceof u0 && e.text === ".";
        } else if (t.type === "mo" && t.children.length === 1 && t.getAttribute("separator") === "true" && t.getAttribute("lspace") === "0em" && t.getAttribute("rspace") === "0em") {
          let e = t.children[0];
          return e instanceof u0 && e.text === ",";
        } else return false;
      }
      let A0 = function(t, e, r) {
        if (t.length === 1) {
          let o = Z(t[0], e);
          return r && o instanceof A && o.type === "mo" && (o.setAttribute("lspace", "0em"), o.setAttribute("rspace", "0em")), [o];
        }
        let n = [], s;
        for (let o = 0; o < t.length; o++) {
          let a = Z(t[o], e);
          if (a instanceof A && s instanceof A) {
            if (a.type === "mtext" && s.type === "mtext" && a.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
              s.children.push(...a.children);
              continue;
            } else if (a.type === "mn" && s.type === "mn") {
              s.children.push(...a.children);
              continue;
            } else if (kt(a) && s.type === "mn") {
              s.children.push(...a.children);
              continue;
            } else if (a.type === "mn" && kt(s)) a.children = [...s.children, ...a.children], n.pop();
            else if ((a.type === "msup" || a.type === "msub") && a.children.length >= 1 && (s.type === "mn" || kt(s))) {
              let u = a.children[0];
              u instanceof A && u.type === "mn" && (u.children = [...s.children, ...u.children], n.pop());
            } else if (s.type === "mi" && s.children.length === 1) {
              let u = s.children[0];
              if (u instanceof u0 && u.text === "̸" && (a.type === "mo" || a.type === "mi" || a.type === "mn")) {
                let m = a.children[0];
                m instanceof u0 && m.text.length > 0 && (m.text = m.text.slice(0, 1) + "̸" + m.text.slice(1), n.pop());
              }
            }
          }
          n.push(a), s = a;
        }
        return n;
      }, K0 = function(t, e, r) {
        return wt(A0(t, e, r));
      }, Z = function(t, e) {
        if (!t) return new A("mrow");
        if (Oe[t.type]) return Oe[t.type](t, e);
        throw new v("Got group of unknown type: '" + t.type + "'");
      };
      function yr(t, e, r, n, s) {
        let o = A0(t, r), a;
        o.length === 1 && o[0] instanceof A && k1.has(o[0].type) ? a = o[0] : a = new A("mrow", o);
        let u = new A("annotation", [new u0(e)]);
        u.setAttribute("encoding", "application/x-tex");
        let m = new A("semantics", [a, u]), f = new A("math", [m]);
        return f.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && f.setAttribute("display", "block"), z([s ? "katex" : "katex-mathml"], [f]);
      }
      let M1 = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], xr = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], wr = function(t, e) {
        return e.size < 2 ? t : M1[t - 1][e.size - 1];
      };
      class W0 {
        constructor(e) {
          this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || W0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = xr[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
        }
        extend(e) {
          let r = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
          return Object.assign(r, e), new W0(r);
        }
        havingStyle(e) {
          return this.style === e ? this : this.extend({ style: e, size: wr(this.textSize, e) });
        }
        havingCrampedStyle() {
          return this.havingStyle(this.style.cramp());
        }
        havingSize(e) {
          return this.size === e && this.textSize === e ? this : this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: xr[e - 1] });
        }
        havingBaseStyle(e) {
          e = e || this.style.text();
          let r = wr(W0.BASESIZE, e);
          return this.size === r && this.textSize === W0.BASESIZE && this.style === e ? this : this.extend({ style: e, size: r });
        }
        havingBaseSizing() {
          let e;
          switch (this.style.id) {
            case 4:
            case 5:
              e = 3;
              break;
            case 6:
            case 7:
              e = 1;
              break;
            default:
              e = 6;
          }
          return this.extend({ style: this.style.text(), size: e });
        }
        withColor(e) {
          return this.extend({ color: e });
        }
        withPhantom() {
          return this.extend({ phantom: true });
        }
        withFont(e) {
          return this.extend({ font: e });
        }
        withTextFontFamily(e) {
          return this.extend({ fontFamily: e, font: "" });
        }
        withTextFontWeight(e) {
          return this.extend({ fontWeight: e, font: "" });
        }
        withTextFontShape(e) {
          return this.extend({ fontShape: e, font: "" });
        }
        sizingClasses(e) {
          return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
        }
        baseSizingClasses() {
          return this.size !== W0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + W0.BASESIZE] : [];
        }
        fontMetrics() {
          return this._fontMetrics || (this._fontMetrics = o1(this.size)), this._fontMetrics;
        }
        getColor() {
          return this.phantom ? "transparent" : this.color;
        }
      }
      W0.BASESIZE = 6;
      var z1 = W0;
      let vr = function(t) {
        return new z1({ style: t.displayMode ? H.DISPLAY : H.TEXT, maxSize: t.maxSize, minRuleThickness: t.minRuleThickness });
      }, kr = function(t, e) {
        if (e.displayMode) {
          let r = ["katex-display"];
          e.leqno && r.push("leqno"), e.fleqn && r.push("fleqn"), t = z(r, [t]);
        }
        return t;
      }, A1 = function(t, e, r) {
        let n = vr(r), s;
        if (r.output === "mathml") return yr(t, e, n, r.displayMode, true);
        if (r.output === "html") {
          let o = xt(t, n);
          s = z(["katex"], [o]);
        } else {
          let o = yr(t, e, n, r.displayMode, false), a = xt(t, n);
          s = z(["katex"], [o, a]);
        }
        return kr(s, r);
      }, T1 = function(t, e, r) {
        let n = vr(r), s = xt(t, n), o = z(["katex"], [s]);
        return kr(o, r);
      };
      var Cs = null;
      let C1 = { widehat: "^", widecheck: "ˇ", widetilde: "~", utilde: "~", overleftarrow: "←", underleftarrow: "←", xleftarrow: "←", overrightarrow: "→", underrightarrow: "→", xrightarrow: "→", underbrace: "⏟", overbrace: "⏞", underbracket: "⎵", overbracket: "⎴", overgroup: "⏠", undergroup: "⏡", overleftrightarrow: "↔", underleftrightarrow: "↔", xleftrightarrow: "↔", Overrightarrow: "⇒", xRightarrow: "⇒", overleftharpoon: "↼", xleftharpoonup: "↼", overrightharpoon: "⇀", xrightharpoonup: "⇀", xLeftarrow: "⇐", xLeftrightarrow: "⇔", xhookleftarrow: "↩", xhookrightarrow: "↪", xmapsto: "↦", xrightharpoondown: "⇁", xleftharpoondown: "↽", xrightleftharpoons: "⇌", xleftrightharpoons: "⇋", xtwoheadleftarrow: "↞", xtwoheadrightarrow: "↠", xlongequal: "=", xtofrom: "⇄", xrightleftarrows: "⇄", xrightequilibrium: "⇌", xleftequilibrium: "⇋", "\\cdrightarrow": "→", "\\cdleftarrow": "←", "\\cdlongequal": "=" }, Le = function(t) {
        let e = new A("mo", [new u0(C1[t.replace(/^\\/, "")])]);
        return e.setAttribute("stretchy", "true"), e;
      }, B1 = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440], underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, D1 = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), _e = function(t, e) {
        function r() {
          let a = 4e5, u = t.label.slice(1);
          if (D1.has(u) && "base" in t) {
            let m = t.base.type === "ordgroup" ? t.base.body.length : 1, f, b, y;
            if (m > 5) u === "widehat" || u === "widecheck" ? (f = 420, a = 2364, y = 0.42, b = u + "4") : (f = 312, a = 2340, y = 0.34, b = "tilde4");
            else {
              let S = [1, 1, 2, 2, 3, 3][m];
              u === "widehat" || u === "widecheck" ? (a = [0, 1062, 2364, 2364, 2364][S], f = [0, 239, 300, 360, 420][S], y = [0, 0.24, 0.3, 0.3, 0.36, 0.42][S], b = u + S) : (a = [0, 600, 1033, 2339, 2340][S], f = [0, 260, 286, 306, 312][S], y = [0, 0.26, 0.286, 0.3, 0.306, 0.34][S], b = "tilde" + S);
            }
            let w = new Y0(b), k = new G0([w], { width: "100%", height: T(y), viewBox: "0 0 " + a + " " + f, preserveAspectRatio: "none" });
            return { span: Z0([], [k], e), minWidth: 0, height: y };
          } else {
            let m = [], f = B1[u];
            if (!f) throw new Error('No SVG data for "' + u + '".');
            let [b, y, w] = f, k = w / 1e3, S = b.length, B, _;
            if (S === 1) {
              if (f.length !== 4) throw new Error('Expected 4-tuple for single-path SVG data "' + u + '".');
              B = ["hide-tail"], _ = [f[3]];
            } else if (S === 2) B = ["halfarrow-left", "halfarrow-right"], _ = ["xMinYMin", "xMaxYMin"];
            else if (S === 3) B = ["brace-left", "brace-center", "brace-right"], _ = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            else throw new Error(`Correct katexImagesData or update code here to support
                    ` + S + " children.");
            for (let O = 0; O < S; O++) {
              let G = new Y0(b[O]), h0 = new G0([G], { width: "400em", height: T(k), viewBox: "0 0 " + a + " " + w, preserveAspectRatio: _[O] + " slice" }), Y = Z0([B[O]], [h0], e);
              if (S === 1) return { span: Y, minWidth: y, height: k };
              Y.style.height = T(k), m.push(Y);
            }
            return { span: z(["stretchy"], m, e), minWidth: y, height: k };
          }
        }
        let { span: n, minWidth: s, height: o } = r();
        return n.height = o, n.style.height = T(o), s > 0 && (n.style.minWidth = T(s)), n;
      }, q1 = function(t, e, r, n, s) {
        let o, a = t.height + t.depth + r + n;
        if (/fbox|color|angl/.test(e)) {
          if (o = z(["stretchy", e], [], s), e === "fbox") {
            let u = s.color && s.getColor();
            u && (o.style.borderColor = u);
          }
        } else {
          let u = [];
          /^[bx]cancel$/.test(e) && u.push(new it({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(e) && u.push(new it({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
          let m = new G0(u, { width: "100%", height: T(a) });
          o = Z0([], [m], s);
        }
        return o.height = a, o.style.height = T(a), o;
      }, N1 = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, E1 = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 };
      function I1(t) {
        return t in N1;
      }
      function L(t, e) {
        if (!t || t.type !== e) throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
        return t;
      }
      function Pe(t) {
        let e = Ge(t);
        if (!e) throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
        return e;
      }
      function Ge(t) {
        return t && (t.type === "atom" || E1.hasOwnProperty(t.type)) ? t : null;
      }
      let Sr = (t) => {
        if (t instanceof M0) return t;
        if (i1(t) && t.children.length === 1) return Sr(t.children[0]);
      }, St = (t, e) => {
        let r, n, s;
        t && t.type === "supsub" ? (n = L(t.base, "accent"), r = n.base, t.base = r, s = s1(V(t, e)), t.base = n) : (n = L(t, "accent"), r = n.base);
        let o = V(r, e.havingCrampedStyle()), a = n.isShifty && t0(r), u = 0;
        if (a) {
          var m, f;
          u = (m = (f = Sr(o)) == null ? void 0 : f.skew) != null ? m : 0;
        }
        let b = n.label === "\\c", y = b ? o.height + o.depth : Math.min(o.height, e.fontMetrics().xHeight), w;
        if (n.isStretchy) w = _e(n, e), w = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "elem", elem: w, wrapperClasses: ["svg-align"], wrapperStyle: u > 0 ? { width: "calc(100% - " + T(2 * u) + ")", marginLeft: T(2 * u) } : void 0 }] }, e);
        else {
          let S, B;
          n.label === "\\vec" ? (S = dr("vec", e), B = mr.vec[1]) : (S = Ee({ type: "textord", mode: n.mode, text: n.label }, e, "textord"), S = n1(S), S.italic = 0, B = S.width, b && (y += S.depth)), w = z(["accent-body"], [S]);
          let _ = n.label === "\\textcircled";
          _ && (w.classes.push("accent-full"), y = o.height);
          let O = u;
          _ || (O -= B / 2), w.style.left = T(O), n.label === "\\textcircled" && (w.style.top = ".2em"), w = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "kern", size: -y }, { type: "elem", elem: w }] }, e);
        }
        let k = z(["mord", "accent"], [w], e);
        return s ? (s.children[0] = k, s.height = Math.max(k.height, s.height), s.classes[0] = "mord", s) : k;
      }, Mr = (t, e) => {
        let r = t.isStretchy ? Le(t.label) : new A("mo", [D0(t.label, t.mode)]), n = new A("mover", [Z(t.base, e), r]);
        return n.setAttribute("accent", "true"), n;
      }, R1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t) => "\\" + t).join("|"));
      C({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: (t, e) => {
        let r = He(e[0]), n = !R1.test(t.funcName), s = !n || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
        return { type: "accent", mode: t.parser.mode, label: t.funcName, isStretchy: n, isShifty: s, base: r };
      }, htmlBuilder: St, mathmlBuilder: Mr }), C({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: (t, e) => {
        let r = e[0], n = t.parser.mode;
        return n === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), n = "text"), { type: "accent", mode: n, label: t.funcName, isStretchy: false, isShifty: true, base: r };
      }, htmlBuilder: St, mathmlBuilder: Mr }), C({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "accentUnder", mode: r.mode, label: n, base: s };
      }, htmlBuilder: (t, e) => {
        let r = V(t.base, e), n = _e(t, e), s = t.label === "\\utilde" ? 0.12 : 0, o = U({ positionType: "top", positionData: r.height, children: [{ type: "elem", elem: n, wrapperClasses: ["svg-align"] }, { type: "kern", size: s }, { type: "elem", elem: r }] }, e);
        return z(["mord", "accentunder"], [o], e);
      }, mathmlBuilder: (t, e) => {
        let r = Le(t.label), n = new A("munder", [Z(t.base, e), r]);
        return n.setAttribute("accentunder", "true"), n;
      } });
      let $e = (t) => {
        let e = new A("mpadded", t ? [t] : []);
        return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
      };
      C({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(t, e, r) {
        let { parser: n, funcName: s } = t;
        return { type: "xArrow", mode: n.mode, label: s, body: e[0], below: r[0] };
      }, htmlBuilder(t, e) {
        let r = e.style, n = e.havingStyle(r.sup()), s = me(V(t.body, n, e), e), o = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
        s.classes.push(o + "-arrow-pad");
        let a;
        t.below && (n = e.havingStyle(r.sub()), a = me(V(t.below, n, e), e), a.classes.push(o + "-arrow-pad"));
        let u = _e(t, e), m = -e.fontMetrics().axisHeight + 0.5 * u.height, f = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
        (s.depth > 0.25 || t.label === "\\xleftequilibrium") && (f -= s.depth);
        let b;
        if (a) {
          let y = -e.fontMetrics().axisHeight + a.height + 0.5 * u.height + 0.111;
          b = U({ positionType: "individualShift", children: [{ type: "elem", elem: s, shift: f }, { type: "elem", elem: u, shift: m, wrapperClasses: ["svg-align"] }, { type: "elem", elem: a, shift: y }] }, e);
        } else b = U({ positionType: "individualShift", children: [{ type: "elem", elem: s, shift: f }, { type: "elem", elem: u, shift: m, wrapperClasses: ["svg-align"] }] }, e);
        return z(["mrel", "x-arrow"], [b], e);
      }, mathmlBuilder(t, e) {
        let r = Le(t.label);
        r.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        let n;
        if (t.body) {
          let s = $e(Z(t.body, e));
          if (t.below) {
            let o = $e(Z(t.below, e));
            n = new A("munderover", [r, o, s]);
          } else n = new A("mover", [r, s]);
        } else if (t.below) {
          let s = $e(Z(t.below, e));
          n = new A("munder", [r, s]);
        } else n = $e(), n = new A("mover", [r, n]);
        return n;
      } });
      function zr(t, e) {
        let r = g0(t.body, e, true);
        return z([t.mclass], r, e);
      }
      function Ar(t, e) {
        let r, n = A0(t.body, e);
        return t.mclass === "minner" ? r = new A("mpadded", n) : t.mclass === "mord" ? t.isCharacterBox ? (r = n[0], r.type = "mi") : r = new A("mi", n) : (t.isCharacterBox ? (r = n[0], r.type = "mo") : r = new A("mo", n), t.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : t.mclass === "mopen" || t.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : t.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
      }
      C({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "mclass", mode: r.mode, mclass: "m" + n.slice(5), body: c0(s), isCharacterBox: t0(s) };
      }, htmlBuilder: zr, mathmlBuilder: Ar });
      let Ue = (t) => {
        let e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
        return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
      };
      C({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler(t, e) {
        let { parser: r } = t;
        return { type: "mclass", mode: r.mode, mclass: Ue(e[0]), body: c0(e[1]), isCharacterBox: t0(e[1]) };
      } }), C({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = e[1], o = e[0], a;
        n !== "\\stackrel" ? a = Ue(s) : a = "mrel";
        let u = { type: "op", mode: s.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: n !== "\\stackrel", body: c0(s) }, m = { type: "supsub", mode: o.mode, base: u, sup: n === "\\underset" ? null : o, sub: n === "\\underset" ? o : null };
        return { type: "mclass", mode: r.mode, mclass: a, body: [m], isCharacterBox: t0(m) };
      }, htmlBuilder: zr, mathmlBuilder: Ar }), C({ type: "pmb", names: ["\\pmb"], props: { numArgs: 1, allowedInText: true }, handler(t, e) {
        let { parser: r } = t;
        return { type: "pmb", mode: r.mode, mclass: Ue(e[0]), body: c0(e[0]) };
      }, htmlBuilder(t, e) {
        let r = g0(t.body, e, true), n = z([t.mclass], r, e);
        return n.style.textShadow = "0.02em 0.01em 0.04px", n;
      }, mathmlBuilder(t, e) {
        let r = A0(t.body, e), n = new A("mstyle", r);
        return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
      } });
      let O1 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Tr = () => ({ type: "styling", body: [], mode: "math", style: "display", resetFont: true }), Cr = (t) => t.type === "textord" && t.text === "@", H1 = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
      function F1(t, e, r) {
        let n = O1[t];
        switch (n) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return r.callFunction(n, [e[0]], [e[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            let s = r.callFunction("\\\\cdleft", [e[0]], []), o = { type: "atom", text: n, mode: "math", family: "rel" }, a = r.callFunction("\\Big", [o], []), u = r.callFunction("\\\\cdright", [e[1]], []), m = { type: "ordgroup", mode: "math", body: [s, a, u] };
            return r.callFunction("\\\\cdparent", [m], []);
          }
          case "\\\\cdlongequal":
            return r.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            let s = { type: "textord", text: "\\Vert", mode: "math" };
            return r.callFunction("\\Big", [s], []);
          }
          default:
            return { type: "textord", text: " ", mode: "math" };
        }
      }
      function L1(t) {
        let e = [];
        for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
          e.push(t.parseExpression(false, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
          let o = t.fetch().text;
          if (o === "&" || o === "\\\\") t.consume();
          else if (o === "\\end") {
            e[e.length - 1].length === 0 && e.pop();
            break;
          } else throw new v("Expected \\\\ or \\cr or \\end", t.nextToken);
        }
        let r = [], n = [r];
        for (let o = 0; o < e.length; o++) {
          let a = e[o], u = Tr();
          for (let m = 0; m < a.length; m++) if (!Cr(a[m])) u.body.push(a[m]);
          else {
            r.push(u), m += 1;
            let f = Pe(a[m]).text, b = new Array(2);
            if (b[0] = { type: "ordgroup", mode: "math", body: [] }, b[1] = { type: "ordgroup", mode: "math", body: [] }, !"=|.".includes(f)) if ("<>AV".includes(f)) for (let k = 0; k < 2; k++) {
              let S = true;
              for (let B = m + 1; B < a.length; B++) {
                if (H1(a[B], f)) {
                  S = false, m = B;
                  break;
                }
                if (Cr(a[B])) throw new v("Missing a " + f + " character to complete a CD arrow.", a[B]);
                b[k].body.push(a[B]);
              }
              if (S) throw new v("Missing a " + f + " character to complete a CD arrow.", a[m]);
            }
            else throw new v('Expected one of "<>AV=|." after @', a[m]);
            let w = { type: "styling", body: [F1(f, b, t)], mode: "math", style: "display", resetFont: true };
            r.push(w), u = Tr();
          }
          o % 2 === 0 ? r.push(u) : r.shift(), r = [], n.push(r);
        }
        t.gullet.endGroup(), t.gullet.endGroup();
        let s = new Array(n[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
        return { type: "array", mode: "math", body: n, arraystretch: 1, addJot: true, rowGaps: [null], cols: s, colSeparationType: "CD", hLinesBeforeRow: new Array(n.length + 1).fill([]) };
      }
      C({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler(t, e) {
        let { parser: r, funcName: n } = t;
        return { type: "cdlabel", mode: r.mode, side: n.slice(4), label: e[0] };
      }, htmlBuilder(t, e) {
        let r = e.havingStyle(e.style.sup()), n = me(V(t.label, r, e), e);
        return n.classes.push("cd-label-" + t.side), n.style.bottom = T(0.8 - n.depth), n.height = 0, n.depth = 0, n;
      }, mathmlBuilder(t, e) {
        let r = new A("mrow", [Z(t.label, e)]);
        return r = new A("mpadded", [r]), r.setAttribute("width", "0"), t.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new A("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
      } }), C({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler(t, e) {
        let { parser: r } = t;
        return { type: "cdlabelparent", mode: r.mode, fragment: e[0] };
      }, htmlBuilder(t, e) {
        let r = me(V(t.fragment, e), e);
        return r.classes.push("cd-vert-arrow"), r;
      }, mathmlBuilder(t, e) {
        return new A("mrow", [Z(t.fragment, e)]);
      } }), C({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler(t, e) {
        let { parser: r } = t, s = L(e[0], "ordgroup").body, o = "";
        for (let m = 0; m < s.length; m++) {
          let f = L(s[m], "textord");
          o += f.text;
        }
        let a = parseInt(o), u;
        if (isNaN(a)) throw new v("\\@char has non-numeric argument " + o);
        if (a < 0 || a >= 1114111) throw new v("\\@char with invalid code point " + o);
        return a <= 65535 ? u = String.fromCharCode(a) : (a -= 65536, u = String.fromCharCode((a >> 10) + 55296, (a & 1023) + 56320)), { type: "textord", mode: r.mode, text: u };
      } });
      let Br = (t, e) => {
        let r = g0(t.body, e.withColor(t.color), false);
        return U0(r);
      }, Dr = (t, e) => {
        let r = A0(t.body, e.withColor(t.color)), n = new A("mstyle", r);
        return n.setAttribute("mathcolor", t.color), n;
      };
      C({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler(t, e) {
        let { parser: r } = t, n = L(e[0], "color-token").color, s = e[1];
        return { type: "color", mode: r.mode, color: n, body: c0(s) };
      }, htmlBuilder: Br, mathmlBuilder: Dr }), C({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler(t, e) {
        let { parser: r, breakOnTokenText: n } = t, s = L(e[0], "color-token").color;
        r.gullet.macros.set("\\current@color", s);
        let o = r.parseExpression(true, n);
        return { type: "color", mode: r.mode, color: s, body: o };
      }, htmlBuilder: Br, mathmlBuilder: Dr }), C({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true }, handler(t, e, r) {
        let { parser: n } = t, s = n.gullet.future().text === "[" ? n.parseSizeGroup(true) : null, o = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return { type: "cr", mode: n.mode, newLine: o, size: s && L(s, "size").value };
      }, htmlBuilder(t, e) {
        let r = z(["mspace"], [], e);
        return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = T(r0(t.size, e)))), r;
      }, mathmlBuilder(t, e) {
        let r = new A("mspace");
        return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", T(r0(t.size, e)))), r;
      } });
      let Mt = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, qr = (t) => {
        let e = t.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new v("Expected a control sequence", t);
        return e;
      }, _1 = (t) => {
        let e = t.gullet.popToken();
        return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
      }, Nr = (t, e, r, n) => {
        let s = t.gullet.macros.get(r.text);
        s == null && (r.noexpand = true, s = { tokens: [r], numArgs: 0, unexpandable: !t.gullet.isExpandable(r.text) }), t.gullet.macros.set(e, s, n);
      };
      C({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler(t) {
        let { parser: e, funcName: r } = t;
        e.consumeSpaces();
        let n = e.fetch();
        if (Mt[n.text]) return (r === "\\global" || r === "\\\\globallong") && (n.text = Mt[n.text]), L(e.parseFunction(), "internal");
        throw new v("Invalid token after macro prefix", n);
      } }), C({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t) {
        let { parser: e, funcName: r } = t, n = e.gullet.popToken(), s = n.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(s)) throw new v("Expected a control sequence", n);
        let o = 0, a, u = [[]];
        for (; e.gullet.future().text !== "{"; ) if (n = e.gullet.popToken(), n.text === "#") {
          if (e.gullet.future().text === "{") {
            a = e.gullet.future(), u[o].push("{");
            break;
          }
          if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text)) throw new v('Invalid argument number "' + n.text + '"');
          if (parseInt(n.text) !== o + 1) throw new v('Argument number "' + n.text + '" out of order');
          o++, u.push([]);
        } else {
          if (n.text === "EOF") throw new v("Expected a macro definition");
          u[o].push(n.text);
        }
        let { tokens: m } = e.gullet.consumeArg();
        return a && m.unshift(a), (r === "\\edef" || r === "\\xdef") && (m = e.gullet.expandTokens(m), m.reverse()), e.gullet.macros.set(s, { tokens: m, numArgs: o, delimiters: u }, r === Mt[r]), { type: "internal", mode: e.mode };
      } }), C({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t) {
        let { parser: e, funcName: r } = t, n = qr(e.gullet.popToken());
        e.gullet.consumeSpaces();
        let s = _1(e);
        return Nr(e, n, s, r === "\\\\globallet"), { type: "internal", mode: e.mode };
      } }), C({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t) {
        let { parser: e, funcName: r } = t, n = qr(e.gullet.popToken()), s = e.gullet.popToken(), o = e.gullet.popToken();
        return Nr(e, n, o, r === "\\\\globalfuture"), e.gullet.pushToken(o), e.gullet.pushToken(s), { type: "internal", mode: e.mode };
      } });
      let ve = function(t, e, r) {
        let n = l0.math[t] && l0.math[t].replace, s = lt(n || t, e, r);
        if (!s) throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
        return s;
      }, zt = function(t, e, r, n) {
        let s = r.havingBaseStyle(e), o = z(n.concat(s.sizingClasses(r)), [t], r), a = s.sizeMultiplier / r.sizeMultiplier;
        return o.height *= a, o.depth *= a, o.maxFontSize = s.sizeMultiplier, o;
      }, Er = function(t, e, r) {
        let n = e.havingBaseStyle(r), s = (1 - e.sizeMultiplier / n.sizeMultiplier) * e.fontMetrics().axisHeight;
        t.classes.push("delimcenter"), t.style.top = T(s), t.height -= s, t.depth += s;
      }, P1 = function(t, e, r, n, s, o) {
        let a = v0(t, "Main-Regular", s, n), u = zt(a, e, n, o);
        return r && Er(u, n, e), u;
      }, G1 = function(t, e, r, n) {
        return v0(t, "Size" + e + "-Regular", r, n);
      }, Ir = function(t, e, r, n, s, o) {
        let a = G1(t, e, s, n), u = zt(z(["delimsizing", "size" + e], [a], n), H.TEXT, n, o);
        return r && Er(u, n, H.TEXT), u;
      }, At = function(t, e, r) {
        let n;
        return e === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4", { type: "elem", elem: z(["delimsizinginner", n], [z([], [v0(t, e, r)])]) };
      }, Tt = function(t, e, r) {
        let n = H0["Size4-Regular"][t.charCodeAt(0)] ? H0["Size4-Regular"][t.charCodeAt(0)][4] : H0["Size1-Regular"][t.charCodeAt(0)][4], s = new Y0("inner", Zn(t, Math.round(1e3 * e))), o = new G0([s], { width: T(n), height: T(e), style: "width:" + T(n), viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * e), preserveAspectRatio: "xMinYMin" }), a = Z0([], [o], r);
        return a.height = e, a.style.height = T(e), a.style.width = T(n), { type: "elem", elem: a };
      }, Ct = 8e-3, Ve = { type: "kern", size: -1 * Ct }, $1 = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), U1 = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), Rr = function(t, e, r, n, s, o) {
        let a, u, m, f, b = "", y = 0;
        a = m = f = t, u = null;
        let w = "Size1-Regular";
        t === "\\uparrow" ? m = f = "⏐" : t === "\\Uparrow" ? m = f = "‖" : t === "\\downarrow" ? a = m = "⏐" : t === "\\Downarrow" ? a = m = "‖" : t === "\\updownarrow" ? (a = "\\uparrow", m = "⏐", f = "\\downarrow") : t === "\\Updownarrow" ? (a = "\\Uparrow", m = "‖", f = "\\Downarrow") : $1.has(t) ? (m = "∣", b = "vert", y = 333) : U1.has(t) ? (m = "∥", b = "doublevert", y = 556) : t === "[" || t === "\\lbrack" ? (a = "⎡", m = "⎢", f = "⎣", w = "Size4-Regular", b = "lbrack", y = 667) : t === "]" || t === "\\rbrack" ? (a = "⎤", m = "⎥", f = "⎦", w = "Size4-Regular", b = "rbrack", y = 667) : t === "\\lfloor" || t === "⌊" ? (m = a = "⎢", f = "⎣", w = "Size4-Regular", b = "lfloor", y = 667) : t === "\\lceil" || t === "⌈" ? (a = "⎡", m = f = "⎢", w = "Size4-Regular", b = "lceil", y = 667) : t === "\\rfloor" || t === "⌋" ? (m = a = "⎥", f = "⎦", w = "Size4-Regular", b = "rfloor", y = 667) : t === "\\rceil" || t === "⌉" ? (a = "⎤", m = f = "⎥", w = "Size4-Regular", b = "rceil", y = 667) : t === "(" || t === "\\lparen" ? (a = "⎛", m = "⎜", f = "⎝", w = "Size4-Regular", b = "lparen", y = 875) : t === ")" || t === "\\rparen" ? (a = "⎞", m = "⎟", f = "⎠", w = "Size4-Regular", b = "rparen", y = 875) : t === "\\{" || t === "\\lbrace" ? (a = "⎧", u = "⎨", f = "⎩", m = "⎪", w = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (a = "⎫", u = "⎬", f = "⎭", m = "⎪", w = "Size4-Regular") : t === "\\lgroup" || t === "⟮" ? (a = "⎧", f = "⎩", m = "⎪", w = "Size4-Regular") : t === "\\rgroup" || t === "⟯" ? (a = "⎫", f = "⎭", m = "⎪", w = "Size4-Regular") : t === "\\lmoustache" || t === "⎰" ? (a = "⎧", f = "⎭", m = "⎪", w = "Size4-Regular") : (t === "\\rmoustache" || t === "⎱") && (a = "⎫", f = "⎩", m = "⎪", w = "Size4-Regular");
        let k = ve(a, w, s), S = k.height + k.depth, B = ve(m, w, s), _ = B.height + B.depth, O = ve(f, w, s), G = O.height + O.depth, h0 = 0, Y = 1;
        if (u !== null) {
          let q0 = ve(u, w, s);
          h0 = q0.height + q0.depth, Y = 2;
        }
        let m0 = S + G + h0, y0 = Math.max(0, Math.ceil((e - m0) / (Y * _))), d0 = m0 + y0 * Y * _, fe = n.fontMetrics().axisHeight;
        r && (fe *= n.sizeMultiplier);
        let Je = d0 / 2 - fe, k0 = [];
        if (b.length > 0) {
          let q0 = d0 - S - G, pe = Math.round(d0 * 1e3), ge = Kn(b, Math.round(q0 * 1e3)), W = new Y0(b, ge), o0 = T(y / 1e3), Q = T(pe / 1e3), f0 = new G0([W], { width: o0, height: Q, viewBox: "0 0 " + y + " " + pe }), N0 = Z0([], [f0], n);
          N0.height = pe / 1e3, N0.style.width = o0, N0.style.height = Q, k0.push({ type: "elem", elem: N0 });
        } else {
          if (k0.push(At(f, w, s)), k0.push(Ve), u === null) {
            let q0 = d0 - S - G + 2 * Ct;
            k0.push(Tt(m, q0, n));
          } else {
            let q0 = (d0 - S - G - h0) / 2 + 2 * Ct;
            k0.push(Tt(m, q0, n)), k0.push(Ve), k0.push(At(u, w, s)), k0.push(Ve), k0.push(Tt(m, q0, n));
          }
          k0.push(Ve), k0.push(At(a, w, s));
        }
        let Me = n.havingBaseStyle(H.TEXT), Qe = U({ positionType: "bottom", positionData: Je, children: k0 }, Me);
        return zt(z(["delimsizing", "mult"], [Qe], Me), H.TEXT, n, o);
      }, Bt = 80, Dt = 0.08, qt = function(t, e, r, n, s) {
        let o = Yn(t, n, r), a = new Y0(t, o), u = new G0([a], { width: "400em", height: T(e), viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" });
        return Z0(["hide-tail"], [u], s);
      }, V1 = function(t, e) {
        let r = e.havingBaseSizing(), n = _r("\\surd", t * r.sizeMultiplier, Lr, r), s = r.sizeMultiplier, o = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness), a, u, m, f, b;
        return n.type === "small" ? (f = 1e3 + 1e3 * o + Bt, t < 1 ? s = 1 : t < 1.4 && (s = 0.7), u = (1 + o + Dt) / s, m = (1 + o) / s, a = qt("sqrtMain", u, f, o, e), a.style.minWidth = "0.853em", b = 0.833 / s) : n.type === "large" ? (f = (1e3 + Bt) * ke[n.size], m = (ke[n.size] + o) / s, u = (ke[n.size] + o + Dt) / s, a = qt("sqrtSize" + n.size, u, f, o, e), a.style.minWidth = "1.02em", b = 1 / s) : (u = t + o + Dt, m = t + o, f = Math.floor(1e3 * t + o) + Bt, a = qt("sqrtTall", u, f, o, e), a.style.minWidth = "0.742em", b = 1.056), a.height = m, a.style.height = T(u), { span: a, advanceWidth: b, ruleWidth: (e.fontMetrics().sqrtRuleThickness + o) * s };
      }, Or = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), W1 = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), Hr = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), ke = [0, 1.2, 1.8, 2.4, 3], Fr = function(t, e, r, n, s) {
        if (t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"), Or.has(t) || Hr.has(t)) return Ir(t, e, false, r, n, s);
        if (W1.has(t)) return Rr(t, ke[e], false, r, n, s);
        throw new v("Illegal delimiter: '" + t + "'");
      }, X1 = [{ type: "small", style: H.SCRIPTSCRIPT }, { type: "small", style: H.SCRIPT }, { type: "small", style: H.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], j1 = [{ type: "small", style: H.SCRIPTSCRIPT }, { type: "small", style: H.SCRIPT }, { type: "small", style: H.TEXT }, { type: "stack" }], Lr = [{ type: "small", style: H.SCRIPTSCRIPT }, { type: "small", style: H.SCRIPT }, { type: "small", style: H.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], Y1 = function(t) {
        if (t.type === "small") return "Main-Regular";
        if (t.type === "large") return "Size" + t.size + "-Regular";
        if (t.type === "stack") return "Size4-Regular";
        {
          let e = t.type;
          throw new Error("Add support for delim type '" + e + "' here.");
        }
      }, _r = function(t, e, r, n) {
        let s = Math.min(2, 3 - n.style.size);
        for (let o = s; o < r.length; o++) {
          let a = r[o];
          if (a.type === "stack") break;
          let u = ve(t, Y1(a), "math"), m = u.height + u.depth;
          if (a.type === "small") {
            let f = n.havingBaseStyle(a.style);
            m *= f.sizeMultiplier;
          }
          if (m > e) return a;
        }
        return r[r.length - 1];
      }, Nt = function(t, e, r, n, s, o) {
        t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
        let a;
        Hr.has(t) ? a = X1 : Or.has(t) ? a = Lr : a = j1;
        let u = _r(t, e, a, n);
        return u.type === "small" ? P1(t, u.style, r, n, s, o) : u.type === "large" ? Ir(t, u.size, r, n, s, o) : Rr(t, e, r, n, s, o);
      }, Et = function(t, e, r, n, s, o) {
        let a = n.fontMetrics().axisHeight * n.sizeMultiplier, u = 901, m = 5 / n.fontMetrics().ptPerEm, f = Math.max(e - a, r + a), b = Math.max(f / 500 * u, 2 * f - m);
        return Nt(t, b, true, n, s, o);
      }, Pr = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, Z1 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
      function Gr(t) {
        return "isMiddle" in t;
      }
      function We(t, e) {
        let r = Ge(t);
        if (r && Z1.has(r.text)) return r;
        throw r ? new v("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t) : new v("Invalid delimiter type '" + t.type + "'", t);
      }
      C({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: (t, e) => {
        let r = We(e[0], t);
        return { type: "delimsizing", mode: t.parser.mode, size: Pr[t.funcName].size, mclass: Pr[t.funcName].mclass, delim: r.text };
      }, htmlBuilder: (t, e) => t.delim === "." ? z([t.mclass]) : Fr(t.delim, t.size, e, t.mode, [t.mclass]), mathmlBuilder: (t) => {
        let e = [];
        t.delim !== "." && e.push(D0(t.delim, t.mode));
        let r = new A("mo", e);
        t.mclass === "mopen" || t.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
        let n = T(ke[t.size]);
        return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r;
      } });
      function $r(t) {
        if (!t.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
      }
      C({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: (t, e) => {
        let r = t.parser.gullet.macros.get("\\current@color");
        if (r && typeof r != "string") throw new v("\\current@color set to non-string in \\right");
        return { type: "leftright-right", mode: t.parser.mode, delim: We(e[0], t).text, color: r };
      } }), C({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: (t, e) => {
        let r = We(e[0], t), n = t.parser;
        ++n.leftrightDepth;
        let s = n.parseExpression(false);
        --n.leftrightDepth, n.expect("\\right", false);
        let o = L(n.parseFunction(), "leftright-right");
        return { type: "leftright", mode: n.mode, body: s, left: r.text, right: o.delim, rightColor: o.color };
      }, htmlBuilder: (t, e) => {
        $r(t);
        let r = g0(t.body, e, true, ["mopen", "mclose"]), n = 0, s = 0, o = false;
        for (let m = 0; m < r.length; m++) {
          let f = r[m];
          Gr(f) ? o = true : (n = Math.max(r[m].height, n), s = Math.max(r[m].depth, s));
        }
        n *= e.sizeMultiplier, s *= e.sizeMultiplier;
        let a;
        if (t.left === "." ? a = we(e, ["mopen"]) : a = Et(t.left, n, s, e, t.mode, ["mopen"]), r.unshift(a), o) for (let m = 1; m < r.length; m++) {
          let f = r[m];
          if (Gr(f)) {
            let b = f.isMiddle;
            r[m] = Et(b.delim, n, s, b.options, t.mode, []);
          }
        }
        let u;
        if (t.right === ".") u = we(e, ["mclose"]);
        else {
          let m = t.rightColor ? e.withColor(t.rightColor) : e;
          u = Et(t.right, n, s, m, t.mode, ["mclose"]);
        }
        return r.push(u), z(["minner"], r, e);
      }, mathmlBuilder: (t, e) => {
        $r(t);
        let r = A0(t.body, e);
        if (t.left !== ".") {
          let n = new A("mo", [D0(t.left, t.mode)]);
          n.setAttribute("fence", "true"), r.unshift(n);
        }
        if (t.right !== ".") {
          let n = new A("mo", [D0(t.right, t.mode)]);
          n.setAttribute("fence", "true"), t.rightColor && n.setAttribute("mathcolor", t.rightColor), r.push(n);
        }
        return wt(r);
      } }), C({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: (t, e) => {
        let r = We(e[0], t);
        if (!t.parser.leftrightDepth) throw new v("\\middle without preceding \\left", r);
        return { type: "middle", mode: t.parser.mode, delim: r.text };
      }, htmlBuilder: (t, e) => {
        let r;
        return t.delim === "." ? r = we(e, []) : (r = Fr(t.delim, 1, e, t.mode, []), r.isMiddle = { delim: t.delim, options: e }), r;
      }, mathmlBuilder: (t, e) => {
        let r = t.delim === "\\vert" || t.delim === "|" ? D0("|", "text") : D0(t.delim, t.mode), n = new A("mo", [r]);
        return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
      } });
      let Xe = (t, e) => {
        let r = me(V(t.body, e), e), n = t.label.slice(1), s = e.sizeMultiplier, o, a, u = t0(t.body);
        if (n === "sout") o = z(["stretchy", "sout"]), o.height = e.fontMetrics().defaultRuleThickness / s, a = -0.5 * e.fontMetrics().xHeight;
        else if (n === "phase") {
          let f = r0({ number: 0.6, unit: "pt" }, e), b = r0({ number: 0.35, unit: "ex" }, e), y = e.havingBaseSizing();
          s = s / y.sizeMultiplier;
          let w = r.height + r.depth + f + b;
          r.style.paddingLeft = T(w / 2 + f);
          let k = Math.floor(1e3 * w * s), S = Xn(k), B = new G0([new Y0("phase", S)], { width: "400em", height: T(k / 1e3), viewBox: "0 0 400000 " + k, preserveAspectRatio: "xMinYMin slice" });
          o = Z0(["hide-tail"], [B], e), o.style.height = T(w), a = r.depth + f + b;
        } else {
          /cancel/.test(n) ? u || r.classes.push("cancel-pad") : n === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
          let f, b, y = 0;
          /box/.test(n) ? (y = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), f = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : y), b = f) : n === "angl" ? (y = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), f = 4 * y, b = Math.max(0, 0.25 - r.depth)) : (f = u ? 0.2 : 0, b = f), o = q1(r, n, f, b, e), /fbox|boxed|fcolorbox/.test(n) ? (o.style.borderStyle = "solid", o.style.borderWidth = T(y)) : n === "angl" && y !== 0.049 && (o.style.borderTopWidth = T(y), o.style.borderRightWidth = T(y)), a = r.depth + b, t.backgroundColor && (o.style.backgroundColor = t.backgroundColor, t.borderColor && (o.style.borderColor = t.borderColor));
        }
        let m;
        if (t.backgroundColor) m = U({ positionType: "individualShift", children: [{ type: "elem", elem: o, shift: a }, { type: "elem", elem: r, shift: 0 }] }, e);
        else {
          let f = /cancel|phase/.test(n) ? ["svg-align"] : [];
          m = U({ positionType: "individualShift", children: [{ type: "elem", elem: r, shift: 0 }, { type: "elem", elem: o, shift: a, wrapperClasses: f }] }, e);
        }
        return /cancel/.test(n) && (m.height = r.height, m.depth = r.depth), /cancel/.test(n) && !u ? z(["mord", "cancel-lap"], [m], e) : z(["mord"], [m], e);
      }, je = (t, e) => {
        let r, n = new A(t.label.includes("colorbox") ? "mpadded" : "menclose", [Z(t.body, e)]);
        switch (t.label) {
          case "\\cancel":
            n.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            n.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\phase":
            n.setAttribute("notation", "phasorangle");
            break;
          case "\\sout":
            n.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            n.setAttribute("notation", "box");
            break;
          case "\\angl":
            n.setAttribute("notation", "actuarial");
            break;
          case "\\fcolorbox":
          case "\\colorbox":
            if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), t.label === "\\fcolorbox") {
              let s = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
              n.setAttribute("style", "border: " + T(s) + " solid " + t.borderColor);
            }
            break;
          case "\\xcancel":
            n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
        }
        return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor), n;
      };
      C({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "hbox"] }, handler(t, e, r) {
        let { parser: n, funcName: s } = t, o = L(e[0], "color-token").color, a = e[1];
        return { type: "enclose", mode: n.mode, label: s, backgroundColor: o, body: a };
      }, htmlBuilder: Xe, mathmlBuilder: je }), C({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "hbox"] }, handler(t, e, r) {
        let { parser: n, funcName: s } = t, o = L(e[0], "color-token").color, a = L(e[1], "color-token").color, u = e[2];
        return { type: "enclose", mode: n.mode, label: s, backgroundColor: a, borderColor: o, body: u };
      }, htmlBuilder: Xe, mathmlBuilder: je }), C({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler(t, e) {
        let { parser: r } = t;
        return { type: "enclose", mode: r.mode, label: "\\fbox", body: e[0] };
      } }), C({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"], props: { numArgs: 1 }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "enclose", mode: r.mode, label: n, body: s };
      }, htmlBuilder: Xe, mathmlBuilder: je }), C({ type: "enclose", names: ["\\sout"], props: { numArgs: 1, allowedInText: true }, handler(t, e) {
        let { parser: r, funcName: n } = t;
        r.mode === "math" && r.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
        let s = e[0];
        return { type: "enclose", mode: r.mode, label: n, body: s };
      }, htmlBuilder: Xe, mathmlBuilder: je }), C({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler(t, e) {
        let { parser: r } = t;
        return { type: "enclose", mode: r.mode, label: "\\angl", body: e[0] };
      } });
      let Ur = {};
      function F0(t) {
        let { type: e, names: r, props: n, handler: s, htmlBuilder: o, mathmlBuilder: a } = t, u = { type: e, numArgs: n.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: s };
        for (let m = 0; m < r.length; ++m) Ur[r[m]] = u;
        o && (Re[e] = o), a && (Oe[e] = a);
      }
      let Vr = {};
      function h(t, e) {
        Vr[t] = e;
      }
      class S0 {
        constructor(e, r, n) {
          this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = n;
        }
        static range(e, r) {
          return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new S0(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
        }
      }
      class T0 {
        constructor(e, r) {
          this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
        }
        range(e, r) {
          return new T0(r, S0.range(this, e));
        }
      }
      function Wr(t) {
        let e = [];
        t.consumeSpaces();
        let r = t.fetch().text;
        for (r === "\\relax" && (t.consume(), t.consumeSpaces(), r = t.fetch().text); r === "\\hline" || r === "\\hdashline"; ) t.consume(), e.push(r === "\\hdashline"), t.consumeSpaces(), r = t.fetch().text;
        return e;
      }
      let Ye = (t) => {
        if (!t.parser.settings.displayMode) throw new v("{" + t.envName + "} can be used only in display mode.");
      }, K1 = /* @__PURE__ */ new Set(["gather", "gather*"]);
      function It(t) {
        if (!t.includes("ed")) return !t.includes("*");
      }
      function J0(t, e, r) {
        let { hskipBeforeAndAfter: n, addJot: s, cols: o, arraystretch: a, colSeparationType: u, autoTag: m, singleRow: f, emptySingleRow: b, maxNumCols: y, leqno: w } = e;
        if (t.gullet.beginGroup(), f || t.gullet.macros.set("\\cr", "\\\\\\relax"), !a) {
          let Y = t.gullet.expandMacroAsText("\\arraystretch");
          if (Y == null) a = 1;
          else if (a = parseFloat(Y), !a || a < 0) throw new v("Invalid \\arraystretch: " + Y);
        }
        t.gullet.beginGroup();
        let k = [], S = [k], B = [], _ = [], O = m != null ? [] : void 0;
        function G() {
          m && t.gullet.macros.set("\\@eqnsw", "1", true);
        }
        function h0() {
          O && (t.gullet.macros.get("\\df@tag") ? (O.push(t.subparse([new T0("\\df@tag")])), t.gullet.macros.set("\\df@tag", void 0, true)) : O.push(!!m && t.gullet.macros.get("\\@eqnsw") === "1"));
        }
        for (G(), _.push(Wr(t)); ; ) {
          let Y = t.parseExpression(false, f ? "\\end" : "\\\\");
          t.gullet.endGroup(), t.gullet.beginGroup();
          let m0 = { type: "ordgroup", mode: t.mode, body: Y };
          r && (m0 = { type: "styling", mode: t.mode, style: r, resetFont: true, body: [m0] }), k.push(m0);
          let y0 = t.fetch().text;
          if (y0 === "&") {
            if (y && k.length === y) {
              if (f || u) throw new v("Too many tab characters: &", t.nextToken);
              t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            t.consume();
          } else if (y0 === "\\end") {
            h0(), k.length === 1 && m0.type === "styling" && m0.body.length === 1 && m0.body[0].type === "ordgroup" && m0.body[0].body.length === 0 && (S.length > 1 || !b) && S.pop(), _.length < S.length + 1 && _.push([]);
            break;
          } else if (y0 === "\\\\") {
            t.consume();
            let d0;
            t.gullet.future().text !== " " && (d0 = t.parseSizeGroup(true)), B.push(d0 ? d0.value : null), h0(), _.push(Wr(t)), k = [], S.push(k), G();
          } else throw new v("Expected & or \\\\ or \\cr or \\end", t.nextToken);
        }
        return t.gullet.endGroup(), t.gullet.endGroup(), { type: "array", mode: t.mode, addJot: s, arraystretch: a, body: S, cols: o, rowGaps: B, hskipBeforeAndAfter: n, hLinesBeforeRow: _, colSeparationType: u, tags: O, leqno: w };
      }
      function Rt(t) {
        return t.slice(0, 1) === "d" ? "display" : "text";
      }
      let L0 = function(t, e) {
        let r, n, s = t.body.length, o = t.hLinesBeforeRow, a = 0, u = new Array(s), m = [], f = Math.max(e.fontMetrics().arrayRuleWidth, e.minRuleThickness), b = 1 / e.fontMetrics().ptPerEm, y = 5 * b;
        t.colSeparationType && t.colSeparationType === "small" && (y = 0.2778 * (e.havingStyle(H.SCRIPT).sizeMultiplier / e.sizeMultiplier));
        let w = t.colSeparationType === "CD" ? r0({ number: 3, unit: "ex" }, e) : 12 * b, k = 3 * b, S = t.arraystretch * w, B = 0.7 * S, _ = 0.3 * S, O = 0;
        function G(W) {
          for (let o0 = 0; o0 < W.length; ++o0) o0 > 0 && (O += 0.25), m.push({ pos: O, isDashed: W[o0] });
        }
        for (G(o[0]), r = 0; r < t.body.length; ++r) {
          let W = t.body[r], o0 = B, Q = _;
          a < W.length && (a = W.length);
          let f0 = { cells: new Array(W.length), height: 0, depth: 0, pos: 0 };
          for (n = 0; n < W.length; ++n) {
            let E0 = V(W[n], e);
            Q < E0.depth && (Q = E0.depth), o0 < E0.height && (o0 = E0.height), f0.cells[n] = E0;
          }
          let N0 = t.rowGaps[r], X0 = 0;
          N0 && (X0 = r0(N0, e), X0 > 0 && (X0 += _, Q < X0 && (Q = X0), X0 = 0)), t.addJot && r < t.body.length - 1 && (Q += k), f0.height = o0, f0.depth = Q, O += o0, f0.pos = O, O += Q + X0, u[r] = f0, G(o[r + 1]);
        }
        let h0 = O / 2 + e.fontMetrics().axisHeight, Y = t.cols || [], m0 = [], y0, d0, fe = [];
        if (t.tags && t.tags.some((W) => W)) for (r = 0; r < s; ++r) {
          let W = u[r], o0 = W.pos - h0, Q = t.tags[r], f0;
          Q === true ? f0 = z(["eqn-num"], [], e) : Q === false ? f0 = z([], [], e) : f0 = z([], g0(Q, e, true), e), f0.depth = W.depth, f0.height = W.height, fe.push({ type: "elem", elem: f0, shift: o0 });
        }
        for (n = 0, d0 = 0; n < a || d0 < Y.length; ++n, ++d0) {
          var Je;
          let W = Y[d0], o0 = true;
          for (; ((k0 = W) == null ? void 0 : k0.type) === "separator"; ) {
            var k0;
            if (o0 || (y0 = z(["arraycolsep"], []), y0.style.width = T(e.fontMetrics().doubleRuleSep), m0.push(y0)), W.separator === "|" || W.separator === ":") {
              let E0 = W.separator === "|" ? "solid" : "dashed", I0 = z(["vertical-separator"], [], e);
              I0.style.height = T(O), I0.style.borderRightWidth = T(f), I0.style.borderRightStyle = E0, I0.style.margin = "0 " + T(-f / 2);
              let et = O - h0;
              et && (I0.style.verticalAlign = T(-et)), m0.push(I0);
            } else throw new v("Invalid separator type: " + W.separator);
            d0++, W = Y[d0], o0 = false;
          }
          if (n >= a) continue;
          let Q;
          if (n > 0 || t.hskipBeforeAndAfter) {
            var Me, Qe;
            Q = (Me = (Qe = W) == null ? void 0 : Qe.pregap) != null ? Me : y, Q !== 0 && (y0 = z(["arraycolsep"], []), y0.style.width = T(Q), m0.push(y0));
          }
          let f0 = [];
          for (r = 0; r < s; ++r) {
            let E0 = u[r], I0 = E0.cells[n];
            if (!I0) continue;
            let et = E0.pos - h0;
            I0.depth = E0.depth, I0.height = E0.height, f0.push({ type: "elem", elem: I0, shift: et });
          }
          let N0 = U({ positionType: "individualShift", children: f0 }, e), X0 = z(["col-align-" + (((Je = W) == null ? void 0 : Je.align) || "c")], [N0]);
          if (m0.push(X0), n < a - 1 || t.hskipBeforeAndAfter) {
            var q0, pe;
            Q = (q0 = (pe = W) == null ? void 0 : pe.postgap) != null ? q0 : y, Q !== 0 && (y0 = z(["arraycolsep"], []), y0.style.width = T(Q), m0.push(y0));
          }
        }
        let ge = z(["mtable"], m0);
        if (m.length > 0) {
          let W = he("hline", e, f), o0 = he("hdashline", e, f), Q = [{ type: "elem", elem: ge, shift: 0 }];
          for (; m.length > 0; ) {
            let f0 = m.pop(), N0 = f0.pos - h0;
            f0.isDashed ? Q.push({ type: "elem", elem: o0, shift: N0 }) : Q.push({ type: "elem", elem: W, shift: N0 });
          }
          ge = U({ positionType: "individualShift", children: Q }, e);
        }
        if (fe.length === 0) return z(["mord"], [ge], e);
        {
          let W = U({ positionType: "individualShift", children: fe }, e), o0 = z(["tag"], [W], e);
          return U0([ge, o0]);
        }
      }, J1 = { c: "center ", l: "left ", r: "right " }, _0 = function(t, e) {
        let r = [], n = new A("mtd", [], ["mtr-glue"]), s = new A("mtd", [], ["mml-eqn-num"]);
        for (let y = 0; y < t.body.length; y++) {
          let w = t.body[y], k = [];
          for (let S = 0; S < w.length; S++) k.push(new A("mtd", [Z(w[S], e)]));
          t.tags && t.tags[y] && (k.unshift(n), k.push(n), t.leqno ? k.unshift(s) : k.push(s)), r.push(new A("mtr", k));
        }
        let o = new A("mtable", r), a = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
        o.setAttribute("rowspacing", T(a));
        let u = "", m = "";
        if (t.cols && t.cols.length > 0) {
          let y = t.cols, w = "", k = false, S = 0, B = y.length;
          y[0].type === "separator" && (u += "top ", S = 1), y[y.length - 1].type === "separator" && (u += "bottom ", B -= 1);
          for (let _ = S; _ < B; _++) {
            let O = y[_];
            O.type === "align" ? (m += J1[O.align], k && (w += "none "), k = true) : O.type === "separator" && k && (w += O.separator === "|" ? "solid " : "dashed ", k = false);
          }
          o.setAttribute("columnalign", m.trim()), /[sd]/.test(w) && o.setAttribute("columnlines", w.trim());
        }
        if (t.colSeparationType === "align") {
          let y = t.cols || [], w = "";
          for (let k = 1; k < y.length; k++) w += k % 2 ? "0em " : "1em ";
          o.setAttribute("columnspacing", w.trim());
        } else t.colSeparationType === "alignat" || t.colSeparationType === "gather" ? o.setAttribute("columnspacing", "0em") : t.colSeparationType === "small" ? o.setAttribute("columnspacing", "0.2778em") : t.colSeparationType === "CD" ? o.setAttribute("columnspacing", "0.5em") : o.setAttribute("columnspacing", "1em");
        let f = "", b = t.hLinesBeforeRow;
        u += b[0].length > 0 ? "left " : "", u += b[b.length - 1].length > 0 ? "right " : "";
        for (let y = 1; y < b.length - 1; y++) f += b[y].length === 0 ? "none " : b[y][0] ? "dashed " : "solid ";
        return /[sd]/.test(f) && o.setAttribute("rowlines", f.trim()), u !== "" && (o = new A("menclose", [o]), o.setAttribute("notation", u.trim())), t.arraystretch && t.arraystretch < 1 && (o = new A("mstyle", [o]), o.setAttribute("scriptlevel", "1")), o;
      }, Xr = function(t, e) {
        t.envName.includes("ed") || Ye(t);
        let r = [], n = t.envName.includes("at") ? "alignat" : "align", s = t.envName === "split", o = J0(t.parser, { cols: r, addJot: true, autoTag: s ? void 0 : It(t.envName), emptySingleRow: true, colSeparationType: n, maxNumCols: s ? 2 : void 0, leqno: t.parser.settings.leqno }, "display"), a = 0, u = 0, m = { type: "ordgroup", mode: t.mode, body: [] };
        if (e[0] && e[0].type === "ordgroup") {
          let b = "";
          for (let y = 0; y < e[0].body.length; y++) {
            let w = L(e[0].body[y], "textord");
            b += w.text;
          }
          a = Number(b), u = a * 2;
        }
        let f = !u;
        o.body.forEach(function(b) {
          for (let y = 1; y < b.length; y += 2) {
            let w = L(b[y], "styling");
            L(w.body[0], "ordgroup").body.unshift(m);
          }
          if (f) u < b.length && (u = b.length);
          else {
            let y = b.length / 2;
            if (a < y) throw new v("Too many math in a row: " + ("expected " + a + ", but got " + y), b[0]);
          }
        });
        for (let b = 0; b < u; ++b) {
          let y = "r", w = 0;
          b % 2 === 1 ? y = "l" : b > 0 && f && (w = 1), r[b] = { type: "align", align: y, pregap: w, postgap: 0 };
        }
        return o.colSeparationType = f ? "align" : "alignat", o;
      };
      F0({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler(t, e) {
        let s = (Ge(e[0]) ? [e[0]] : L(e[0], "ordgroup").body).map(function(a) {
          let m = Pe(a).text;
          if ("lcr".includes(m)) return { type: "align", align: m };
          if (m === "|") return { type: "separator", separator: "|" };
          if (m === ":") return { type: "separator", separator: ":" };
          throw new v("Unknown column alignment: " + m, a);
        }), o = { cols: s, hskipBeforeAndAfter: true, maxNumCols: s.length };
        return J0(t.parser, o, Rt(t.envName));
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler(t) {
        let e = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[t.envName.replace("*", "")], r = "c", n = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r }] };
        if (t.envName.charAt(t.envName.length - 1) === "*") {
          let a = t.parser;
          if (a.consumeSpaces(), a.fetch().text === "[") {
            if (a.consume(), a.consumeSpaces(), r = a.fetch().text, !"lcr".includes(r)) throw new v("Expected l or c or r", a.nextToken);
            a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{ type: "align", align: r }];
          }
        }
        let s = J0(t.parser, n, Rt(t.envName)), o = Math.max(0, ...s.body.map((a) => a.length));
        return s.cols = new Array(o).fill({ type: "align", align: r }), e ? { type: "leftright", mode: t.mode, body: [s], left: e[0], right: e[1], rightColor: void 0 } : s;
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler(t) {
        let e = { arraystretch: 0.5 }, r = J0(t.parser, e, "script");
        return r.colSeparationType = "small", r;
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler(t, e) {
        let s = (Ge(e[0]) ? [e[0]] : L(e[0], "ordgroup").body).map(function(u) {
          let f = Pe(u).text;
          if ("lc".includes(f)) return { type: "align", align: f };
          throw new v("Unknown column alignment: " + f, u);
        });
        if (s.length > 1) throw new v("{subarray} can contain only one column");
        let o = { cols: s, hskipBeforeAndAfter: false, arraystretch: 0.5 }, a = J0(t.parser, o, "script");
        if (a.body.length > 0 && a.body[0].length > 1) throw new v("{subarray} can contain only one column");
        return a;
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler(t) {
        let e = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, r = J0(t.parser, e, Rt(t.envName));
        return { type: "leftright", mode: t.mode, body: [r], left: t.envName.includes("r") ? "." : "\\{", right: t.envName.includes("r") ? "\\}" : ".", rightColor: void 0 };
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Xr, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler(t) {
        K1.has(t.envName) && Ye(t);
        let e = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", autoTag: It(t.envName), emptySingleRow: true, leqno: t.parser.settings.leqno };
        return J0(t.parser, e, "display");
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Xr, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler(t) {
        Ye(t);
        let e = { autoTag: It(t.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: t.parser.settings.leqno };
        return J0(t.parser, e, "display");
      }, htmlBuilder: L0, mathmlBuilder: _0 }), F0({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler(t) {
        return Ye(t), L1(t.parser);
      }, htmlBuilder: L0, mathmlBuilder: _0 }), h("\\nonumber", "\\gdef\\@eqnsw{0}"), h("\\notag", "\\nonumber"), C({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler(t, e) {
        throw new v(t.funcName + " valid only within array environment");
      } });
      var jr = Ur;
      C({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = e[0];
        if (s.type !== "ordgroup") throw new v("Invalid environment name", s);
        let o = "";
        for (let a = 0; a < s.body.length; ++a) o += L(s.body[a], "textord").text;
        if (n === "\\begin") {
          if (!jr.hasOwnProperty(o)) throw new v("No such environment: " + o, s);
          let a = jr[o], { args: u, optArgs: m } = r.parseArguments("\\begin{" + o + "}", a), f = { mode: r.mode, envName: o, parser: r }, b = a.handler(f, u, m);
          r.expect("\\end", false);
          let y = r.nextToken, w = L(r.parseFunction(), "environment");
          if (w.name !== o) throw new v("Mismatch: \\begin{" + o + "} matched by \\end{" + w.name + "}", y);
          return b;
        }
        return { type: "environment", mode: r.mode, name: o, nameGroup: s };
      } });
      let Yr = (t, e) => {
        let r = t.font, n = e.withFont(r);
        return V(t.body, n);
      }, Zr = (t, e) => {
        let r = t.font, n = e.withFont(r);
        return Z(t.body, n);
      }, Kr = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak" };
      C({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = He(e[0]), o = n;
        return o in Kr && (o = Kr[o]), { type: "font", mode: r.mode, font: o.slice(1), body: s };
      }, htmlBuilder: Yr, mathmlBuilder: Zr }), C({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: (t, e) => {
        let { parser: r } = t, n = e[0];
        return { type: "mclass", mode: r.mode, mclass: Ue(n), body: [{ type: "font", mode: r.mode, font: "boldsymbol", body: n }], isCharacterBox: t0(n) };
      } }), C({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: (t, e) => {
        let { parser: r, funcName: n, breakOnTokenText: s } = t, { mode: o } = r, a = r.parseExpression(true, s);
        return { type: "font", mode: o, font: "math" + n.slice(1), body: { type: "ordgroup", mode: r.mode, body: a } };
      }, htmlBuilder: Yr, mathmlBuilder: Zr });
      let Q1 = (t, e) => {
        let r = e.style, n = r.fracNum(), s = r.fracDen(), o;
        o = e.havingStyle(n);
        let a = V(t.numer, o, e);
        if (t.continued) {
          let G = 8.5 / e.fontMetrics().ptPerEm, h0 = 3.5 / e.fontMetrics().ptPerEm;
          a.height = a.height < G ? G : a.height, a.depth = a.depth < h0 ? h0 : a.depth;
        }
        o = e.havingStyle(s);
        let u = V(t.denom, o, e), m, f, b;
        t.hasBarLine ? (t.barSize ? (f = r0(t.barSize, e), m = he("frac-line", e, f)) : m = he("frac-line", e), f = m.height, b = m.height) : (m = null, f = 0, b = e.fontMetrics().defaultRuleThickness);
        let y, w, k;
        r.size === H.DISPLAY.size ? (y = e.fontMetrics().num1, f > 0 ? w = 3 * b : w = 7 * b, k = e.fontMetrics().denom1) : (f > 0 ? (y = e.fontMetrics().num2, w = b) : (y = e.fontMetrics().num3, w = 3 * b), k = e.fontMetrics().denom2);
        let S;
        if (m) {
          let G = e.fontMetrics().axisHeight;
          y - a.depth - (G + 0.5 * f) < w && (y += w - (y - a.depth - (G + 0.5 * f))), G - 0.5 * f - (u.height - k) < w && (k += w - (G - 0.5 * f - (u.height - k)));
          let h0 = -(G - 0.5 * f);
          S = U({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: k }, { type: "elem", elem: m, shift: h0 }, { type: "elem", elem: a, shift: -y }] }, e);
        } else {
          let G = y - a.depth - (u.height - k);
          G < w && (y += 0.5 * (w - G), k += 0.5 * (w - G)), S = U({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: k }, { type: "elem", elem: a, shift: -y }] }, e);
        }
        o = e.havingStyle(r), S.height *= o.sizeMultiplier / e.sizeMultiplier, S.depth *= o.sizeMultiplier / e.sizeMultiplier;
        let B;
        r.size === H.DISPLAY.size ? B = e.fontMetrics().delim1 : r.size === H.SCRIPTSCRIPT.size ? B = e.havingStyle(H.SCRIPT).fontMetrics().delim2 : B = e.fontMetrics().delim2;
        let _, O;
        return t.leftDelim == null ? _ = we(e, ["mopen"]) : _ = Nt(t.leftDelim, B, true, e.havingStyle(r), t.mode, ["mopen"]), t.continued ? O = z([]) : t.rightDelim == null ? O = we(e, ["mclose"]) : O = Nt(t.rightDelim, B, true, e.havingStyle(r), t.mode, ["mclose"]), z(["mord"].concat(o.sizingClasses(e)), [_, z(["mfrac"], [S]), O], e);
      }, es = (t, e) => {
        let r = new A("mfrac", [Z(t.numer, e), Z(t.denom, e)]);
        if (!t.hasBarLine) r.setAttribute("linethickness", "0px");
        else if (t.barSize) {
          let n = r0(t.barSize, e);
          r.setAttribute("linethickness", T(n));
        }
        if (t.leftDelim != null || t.rightDelim != null) {
          let n = [];
          if (t.leftDelim != null) {
            let s = new A("mo", [new u0(t.leftDelim.replace("\\", ""))]);
            s.setAttribute("fence", "true"), n.push(s);
          }
          if (n.push(r), t.rightDelim != null) {
            let s = new A("mo", [new u0(t.rightDelim.replace("\\", ""))]);
            s.setAttribute("fence", "true"), n.push(s);
          }
          return wt(n);
        }
        return r;
      }, Jr = (t, e) => e ? { type: "styling", mode: t.mode, style: e, body: [t] } : t;
      C({ type: "genfrac", names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = e[0], o = e[1], a, u = null, m = null;
        switch (n) {
          case "\\cfrac":
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            a = true;
            break;
          case "\\\\atopfrac":
            a = false;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            a = false, u = "(", m = ")";
            break;
          case "\\\\bracefrac":
            a = false, u = "\\{", m = "\\}";
            break;
          case "\\\\brackfrac":
            a = false, u = "[", m = "]";
            break;
          default:
            throw new Error("Unrecognized genfrac command");
        }
        let f = n === "\\cfrac", b = null;
        return f || n.startsWith("\\d") ? b = "display" : n.startsWith("\\t") && (b = "text"), Jr({ type: "genfrac", mode: r.mode, numer: s, denom: o, continued: f, hasBarLine: a, leftDelim: u, rightDelim: m, barSize: null }, b);
      }, htmlBuilder: Q1, mathmlBuilder: es }), C({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler(t) {
        let { parser: e, funcName: r, token: n } = t, s;
        switch (r) {
          case "\\over":
            s = "\\frac";
            break;
          case "\\choose":
            s = "\\binom";
            break;
          case "\\atop":
            s = "\\\\atopfrac";
            break;
          case "\\brace":
            s = "\\\\bracefrac";
            break;
          case "\\brack":
            s = "\\\\brackfrac";
            break;
          default:
            throw new Error("Unrecognized infix genfrac command");
        }
        return { type: "infix", mode: e.mode, replaceWith: s, token: n };
      } });
      let Qr = ["display", "text", "script", "scriptscript"], en = function(t) {
        let e = null;
        return t.length > 0 && (e = t, e = e === "." ? null : e), e;
      };
      C({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler(t, e) {
        let { parser: r } = t, n = e[4], s = e[5], o = He(e[0]), a = o.type === "atom" && o.family === "open" ? en(o.text) : null, u = He(e[1]), m = u.type === "atom" && u.family === "close" ? en(u.text) : null, f = L(e[2], "size"), b, y = null;
        f.isBlank ? b = true : (y = f.value, b = y.number > 0);
        let w = null, k = e[3];
        if (k.type === "ordgroup") {
          if (k.body.length > 0) {
            let S = L(k.body[0], "textord");
            w = Qr[Number(S.text)];
          }
        } else k = L(k, "textord"), w = Qr[Number(k.text)];
        return Jr({ type: "genfrac", mode: r.mode, numer: n, denom: s, continued: false, hasBarLine: b, barSize: y, leftDelim: a, rightDelim: m }, w);
      } }), C({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler(t, e) {
        let { parser: r, funcName: n, token: s } = t;
        return { type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: L(e[0], "size").value, token: s };
      } }), C({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = e[0], o = L(e[1], "infix").size;
        if (!o) throw new Error("\\\\abovefrac expected size, but got " + String(o));
        let a = e[2], u = o.number > 0;
        return { type: "genfrac", mode: r.mode, numer: s, denom: a, continued: false, hasBarLine: u, barSize: o, leftDelim: null, rightDelim: null };
      } });
      let tn = (t, e) => {
        let r = e.style, n, s;
        t.type === "supsub" ? (n = t.sup ? V(t.sup, e.havingStyle(r.sup()), e) : V(t.sub, e.havingStyle(r.sub()), e), s = L(t.base, "horizBrace")) : s = L(t, "horizBrace");
        let o = V(s.base, e.havingBaseStyle(H.DISPLAY)), a = _e(s, e), u;
        if (s.isOver ? u = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: o }, { type: "kern", size: 0.1 }, { type: "elem", elem: a, wrapperClasses: ["svg-align"] }] }, e) : u = U({ positionType: "bottom", positionData: o.depth + 0.1 + a.height, children: [{ type: "elem", elem: a, wrapperClasses: ["svg-align"] }, { type: "kern", size: 0.1 }, { type: "elem", elem: o }] }, e), n) {
          let m = z(["minner", s.isOver ? "mover" : "munder"], [u], e);
          s.isOver ? u = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: m }, { type: "kern", size: 0.2 }, { type: "elem", elem: n }] }, e) : u = U({ positionType: "bottom", positionData: m.depth + 0.2 + n.height + n.depth, children: [{ type: "elem", elem: n }, { type: "kern", size: 0.2 }, { type: "elem", elem: m }] }, e);
        }
        return z(["minner", s.isOver ? "mover" : "munder"], [u], e);
      };
      C({ type: "horizBrace", names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"], props: { numArgs: 1 }, handler(t, e) {
        let { parser: r, funcName: n } = t;
        return { type: "horizBrace", mode: r.mode, label: n, isOver: n.includes("\\over"), base: e[0] };
      }, htmlBuilder: tn, mathmlBuilder: (t, e) => {
        let r = Le(t.label);
        return new A(t.isOver ? "mover" : "munder", [Z(t.base, e), r]);
      } }), C({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: (t, e) => {
        let { parser: r } = t, n = e[1], s = L(e[0], "url").url;
        return r.settings.isTrusted({ command: "\\href", url: s }) ? { type: "href", mode: r.mode, href: s, body: c0(n) } : r.formatUnsupportedCmd("\\href");
      }, htmlBuilder: (t, e) => {
        let r = g0(t.body, e, false);
        return d1(t.href, [], r, e);
      }, mathmlBuilder: (t, e) => {
        let r = K0(t.body, e);
        return r instanceof A || (r = new A("mrow", [r])), r.setAttribute("href", t.href), r;
      } }), C({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: (t, e) => {
        let { parser: r } = t, n = L(e[0], "url").url;
        if (!r.settings.isTrusted({ command: "\\url", url: n })) return r.formatUnsupportedCmd("\\url");
        let s = [];
        for (let a = 0; a < n.length; a++) {
          let u = n[a];
          u === "~" && (u = "\\textasciitilde"), s.push({ type: "textord", mode: "text", text: u });
        }
        let o = { type: "text", mode: r.mode, font: "\\texttt", body: s };
        return { type: "href", mode: r.mode, href: n, body: c0(o) };
      } }), C({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler(t, e) {
        let { parser: r } = t;
        return { type: "hbox", mode: r.mode, body: c0(e[0]) };
      }, htmlBuilder(t, e) {
        let r = g0(t.body, e.withFont(""), false);
        return U0(r);
      }, mathmlBuilder(t, e) {
        return new A("mrow", A0(t.body, e.withFont("")));
      } }), C({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: (t, e) => {
        let { parser: r, funcName: n, token: s } = t, o = L(e[0], "raw").string, a = e[1];
        r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        let u, m = {};
        switch (n) {
          case "\\htmlClass":
            m.class = o, u = { command: "\\htmlClass", class: o };
            break;
          case "\\htmlId":
            m.id = o, u = { command: "\\htmlId", id: o };
            break;
          case "\\htmlStyle":
            m.style = o, u = { command: "\\htmlStyle", style: o };
            break;
          case "\\htmlData": {
            let f = o.split(",");
            for (let b = 0; b < f.length; b++) {
              let y = f[b], w = y.indexOf("=");
              if (w < 0) throw new v("\\htmlData key/value '" + y + "' missing equals sign");
              let k = y.slice(0, w), S = y.slice(w + 1);
              m["data-" + k.trim()] = S;
            }
            u = { command: "\\htmlData", attributes: m };
            break;
          }
          default:
            throw new Error("Unrecognized html command");
        }
        return r.settings.isTrusted(u) ? { type: "html", mode: r.mode, attributes: m, body: c0(a) } : r.formatUnsupportedCmd(n);
      }, htmlBuilder: (t, e) => {
        let r = g0(t.body, e, false), n = ["enclosing"];
        t.attributes.class && n.push(...t.attributes.class.trim().split(/\s+/));
        let s = z(n, r, e);
        for (let o in t.attributes) o !== "class" && t.attributes.hasOwnProperty(o) && s.setAttribute(o, t.attributes[o]);
        return s;
      }, mathmlBuilder: (t, e) => K0(t.body, e) }), C({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInArgument: true, allowedInText: true }, handler: (t, e) => {
        let { parser: r } = t;
        return { type: "htmlmathml", mode: r.mode, html: c0(e[0]), mathml: c0(e[1]) };
      }, htmlBuilder: (t, e) => {
        let r = g0(t.html, e, false);
        return U0(r);
      }, mathmlBuilder: (t, e) => K0(t.mathml, e) });
      let Ot = function(t) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t)) return { number: +t, unit: "bp" };
        {
          let e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
          if (!e) throw new v("Invalid size: '" + t + "' in \\includegraphics");
          let r = { number: +(e[1] + e[2]), unit: e[3] };
          if (!Yt(r)) throw new v("Invalid unit: '" + r.unit + "' in \\includegraphics.");
          return r;
        }
      };
      C({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: (t, e, r) => {
        let { parser: n } = t, s = { number: 0, unit: "em" }, o = { number: 0.9, unit: "em" }, a = { number: 0, unit: "em" }, u = "";
        if (r[0]) {
          let b = L(r[0], "raw").string.split(",");
          for (let y = 0; y < b.length; y++) {
            let w = b[y].split("=");
            if (w.length === 2) {
              let k = w[1].trim();
              switch (w[0].trim()) {
                case "alt":
                  u = k;
                  break;
                case "width":
                  s = Ot(k);
                  break;
                case "height":
                  o = Ot(k);
                  break;
                case "totalheight":
                  a = Ot(k);
                  break;
                default:
                  throw new v("Invalid key: '" + w[0] + "' in \\includegraphics.");
              }
            }
          }
        }
        let m = L(e[0], "url").url;
        return u === "" && (u = m, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), n.settings.isTrusted({ command: "\\includegraphics", url: m }) ? { type: "includegraphics", mode: n.mode, alt: u, width: s, height: o, totalheight: a, src: m } : n.formatUnsupportedCmd("\\includegraphics");
      }, htmlBuilder: (t, e) => {
        let r = r0(t.height, e), n = 0;
        t.totalheight.number > 0 && (n = r0(t.totalheight, e) - r);
        let s = 0;
        t.width.number > 0 && (s = r0(t.width, e));
        let o = { height: T(r + n) };
        s > 0 && (o.width = T(s)), n > 0 && (o.verticalAlign = T(-n));
        let a = new t1(t.src, t.alt, o);
        return a.height = r, a.depth = n, a;
      }, mathmlBuilder: (t, e) => {
        let r = new A("mglyph", []);
        r.setAttribute("alt", t.alt);
        let n = r0(t.height, e), s = 0;
        if (t.totalheight.number > 0 && (s = r0(t.totalheight, e) - n, r.setAttribute("valign", T(-s))), r.setAttribute("height", T(n + s)), t.width.number > 0) {
          let o = r0(t.width, e);
          r.setAttribute("width", T(o));
        }
        return r.setAttribute("src", t.src), r;
      } }), C({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = L(e[0], "size");
        if (r.settings.strict) {
          let o = n[1] === "m", a = s.value.unit === "mu";
          o ? (a || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + s.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : a && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
        }
        return { type: "kern", mode: r.mode, dimension: s.value };
      }, htmlBuilder(t, e) {
        return hr(t.dimension, e);
      }, mathmlBuilder(t, e) {
        let r = r0(t.dimension, e);
        return new br(r);
      } }), C({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "lap", mode: r.mode, alignment: n.slice(5), body: s };
      }, htmlBuilder: (t, e) => {
        let r;
        t.alignment === "clap" ? (r = z([], [V(t.body, e)]), r = z(["inner"], [r], e)) : r = z(["inner"], [V(t.body, e)]);
        let n = z(["fix"], []), s = z([t.alignment], [r, n], e), o = z(["strut"]);
        return o.style.height = T(s.height + s.depth), s.depth && (o.style.verticalAlign = T(-s.depth)), s.children.unshift(o), s = z(["thinbox"], [s], e), z(["mord", "vbox"], [s], e);
      }, mathmlBuilder: (t, e) => {
        let r = new A("mpadded", [Z(t.body, e)]);
        if (t.alignment !== "rlap") {
          let n = t.alignment === "llap" ? "-1" : "-0.5";
          r.setAttribute("lspace", n + "width");
        }
        return r.setAttribute("width", "0px"), r;
      } }), C({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(t, e) {
        let { funcName: r, parser: n } = t, s = n.mode;
        n.switchMode("math");
        let o = r === "\\(" ? "\\)" : "$", a = n.parseExpression(false, o);
        return n.expect(o), n.switchMode(s), { type: "styling", mode: n.mode, style: "text", resetFont: true, body: a };
      } }), C({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(t, e) {
        throw new v("Mismatched " + t.funcName);
      } });
      let rn = (t, e) => {
        switch (e.style.size) {
          case H.DISPLAY.size:
            return t.display;
          case H.TEXT.size:
            return t.text;
          case H.SCRIPT.size:
            return t.script;
          case H.SCRIPTSCRIPT.size:
            return t.scriptscript;
          default:
            return t.text;
        }
      };
      C({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: (t, e) => {
        let { parser: r } = t;
        return { type: "mathchoice", mode: r.mode, display: c0(e[0]), text: c0(e[1]), script: c0(e[2]), scriptscript: c0(e[3]) };
      }, htmlBuilder: (t, e) => {
        let r = rn(t, e), n = g0(r, e, false);
        return U0(n);
      }, mathmlBuilder: (t, e) => {
        let r = rn(t, e);
        return K0(r, e);
      } });
      let nn = (t, e, r, n, s, o, a) => {
        t = z([], [t]);
        let u = r && t0(r), m, f;
        if (e) {
          let w = V(e, n.havingStyle(s.sup()), n);
          f = { elem: w, kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - w.depth) };
        }
        if (r) {
          let w = V(r, n.havingStyle(s.sub()), n);
          m = { elem: w, kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - w.height) };
        }
        let b;
        if (f && m) {
          let w = n.fontMetrics().bigOpSpacing5 + m.elem.height + m.elem.depth + m.kern + t.depth + a;
          b = U({ positionType: "bottom", positionData: w, children: [{ type: "kern", size: n.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: m.elem, marginLeft: T(-o) }, { type: "kern", size: m.kern }, { type: "elem", elem: t }, { type: "kern", size: f.kern }, { type: "elem", elem: f.elem, marginLeft: T(o) }, { type: "kern", size: n.fontMetrics().bigOpSpacing5 }] }, n);
        } else if (m) {
          let w = t.height - a;
          b = U({ positionType: "top", positionData: w, children: [{ type: "kern", size: n.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: m.elem, marginLeft: T(-o) }, { type: "kern", size: m.kern }, { type: "elem", elem: t }] }, n);
        } else if (f) {
          let w = t.depth + a;
          b = U({ positionType: "bottom", positionData: w, children: [{ type: "elem", elem: t }, { type: "kern", size: f.kern }, { type: "elem", elem: f.elem, marginLeft: T(o) }, { type: "kern", size: n.fontMetrics().bigOpSpacing5 }] }, n);
        } else return t;
        let y = [b];
        if (m && o !== 0 && !u) {
          let w = z(["mspace"], [], n);
          w.style.marginRight = T(o), y.unshift(w);
        }
        return z(["mop", "op-limits"], y, n);
      }, sn = /* @__PURE__ */ new Set(["\\smallint"]), de = (t, e) => {
        let r, n, s = false, o;
        t.type === "supsub" ? (r = t.sup, n = t.sub, o = L(t.base, "op"), s = true) : o = L(t, "op");
        let a = e.style, u = false;
        a.size === H.DISPLAY.size && o.symbol && !sn.has(o.name) && (u = true);
        let m, f;
        if (o.symbol) {
          let k = u ? "Size2-Regular" : "Size1-Regular", S = "";
          if ((o.name === "\\oiint" || o.name === "\\oiiint") && (S = o.name.slice(1), o.name = S === "oiint" ? "\\iint" : "\\iiint"), m = v0(o.name, k, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"]), f = m.italic, S.length > 0) {
            let B = dr(S + "Size" + (u ? "2" : "1"), e);
            m = U({ positionType: "individualShift", children: [{ type: "elem", elem: m, shift: 0 }, { type: "elem", elem: B, shift: u ? 0.08 : 0 }] }, e), o.name = "\\" + S, m.classes.unshift("mop"), m.italic = f;
          }
        } else if (o.body) {
          let k = g0(o.body, e, true);
          k.length === 1 && k[0] instanceof M0 ? (m = k[0], m.classes[0] = "mop") : m = z(["mop"], k, e);
        } else {
          let k = [];
          for (let S = 1; S < o.name.length; S++) k.push(dt(o.name[S], o.mode, e));
          m = z(["mop"], k, e);
        }
        let b = 0, y = 0;
        if ((m instanceof M0 || o.name === "\\oiint" || o.name === "\\oiiint") && !o.suppressBaseShift) {
          var w;
          b = (m.height - m.depth) / 2 - e.fontMetrics().axisHeight, y = (w = m.italic) != null ? w : 0;
        }
        return s ? nn(m, r, n, e, a, y, b) : (b && (m.style.position = "relative", m.style.top = T(b)), m);
      }, Se = (t, e) => {
        let r;
        if (t.symbol) r = new A("mo", [D0(t.name, t.mode)]), sn.has(t.name) && r.setAttribute("largeop", "false");
        else if (t.body) r = new A("mo", A0(t.body, e));
        else {
          r = new A("mi", [new u0(t.name.slice(1))]);
          let n = new A("mo", [D0("⁡", "text")]);
          t.parentIsSupSub ? r = new A("mrow", [r, n]) : r = gr([r, n]);
        }
        return r;
      }, ts = { "∏": "\\prod", "∐": "\\coprod", "∑": "\\sum", "⋀": "\\bigwedge", "⋁": "\\bigvee", "⋂": "\\bigcap", "⋃": "\\bigcup", "⨀": "\\bigodot", "⨁": "\\bigoplus", "⨂": "\\bigotimes", "⨄": "\\biguplus", "⨆": "\\bigsqcup" };
      C({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"], props: { numArgs: 0 }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = n;
        return s.length === 1 && (s = ts[s]), { type: "op", mode: r.mode, limits: true, parentIsSupSub: false, symbol: true, name: s };
      }, htmlBuilder: de, mathmlBuilder: Se }), C({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: (t, e) => {
        let { parser: r } = t, n = e[0];
        return { type: "op", mode: r.mode, limits: false, parentIsSupSub: false, symbol: false, body: c0(n) };
      }, htmlBuilder: de, mathmlBuilder: Se });
      let rs = { "∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∯": "\\oiint", "∰": "\\oiiint" };
      C({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler(t) {
        let { parser: e, funcName: r } = t;
        return { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: de, mathmlBuilder: Se }), C({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler(t) {
        let { parser: e, funcName: r } = t;
        return { type: "op", mode: e.mode, limits: true, parentIsSupSub: false, symbol: false, name: r };
      }, htmlBuilder: de, mathmlBuilder: Se }), C({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"], props: { numArgs: 0, allowedInArgument: true }, handler(t) {
        let { parser: e, funcName: r } = t, n = r;
        return n.length === 1 && (n = rs[n]), { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: true, name: n };
      }, htmlBuilder: de, mathmlBuilder: Se });
      let ln = (t, e) => {
        let r, n, s = false, o;
        t.type === "supsub" ? (r = t.sup, n = t.sub, o = L(t.base, "operatorname"), s = true) : o = L(t, "operatorname");
        let a;
        if (o.body.length > 0) {
          let u = o.body.map((f) => {
            let b = "text" in f ? f.text : void 0;
            return typeof b == "string" ? { type: "textord", mode: f.mode, text: b } : f;
          }), m = g0(u, e.withFont("mathrm"), true);
          for (let f = 0; f < m.length; f++) {
            let b = m[f];
            b instanceof M0 && (b.text = b.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
          }
          a = z(["mop"], m, e);
        } else a = z(["mop"], [], e);
        return s ? nn(a, r, n, e, e.style, 0, 0) : a;
      };
      C({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: (t, e) => {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "operatorname", mode: r.mode, body: c0(s), alwaysHandleSupSub: n === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
      }, htmlBuilder: ln, mathmlBuilder: (t, e) => {
        let r = A0(t.body, e.withFont("mathrm")), n = true;
        for (let a = 0; a < r.length; a++) {
          let u = r[a];
          if (!(u instanceof br)) if (u instanceof A) switch (u.type) {
            case "mi":
            case "mn":
            case "mspace":
            case "mtext":
              break;
            case "mo": {
              let m = u.children[0];
              u.children.length === 1 && m instanceof u0 ? m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = false;
              break;
            }
            default:
              n = false;
          }
          else n = false;
        }
        if (n) {
          let a = r.map((u) => u.toText()).join("");
          r = [new u0(a)];
        }
        let s = new A("mi", r);
        s.setAttribute("mathvariant", "normal");
        let o = new A("mo", [D0("⁡", "text")]);
        return t.parentIsSupSub ? new A("mrow", [s, o]) : gr([s, o]);
      } }), h("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), se({ type: "ordgroup", htmlBuilder(t, e) {
        return t.semisimple ? U0(g0(t.body, e, false)) : z(["mord"], g0(t.body, e, true), e);
      }, mathmlBuilder(t, e) {
        return K0(t.body, e, true);
      } }), C({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler(t, e) {
        let { parser: r } = t, n = e[0];
        return { type: "overline", mode: r.mode, body: n };
      }, htmlBuilder(t, e) {
        let r = V(t.body, e.havingCrampedStyle()), n = he("overline-line", e), s = e.fontMetrics().defaultRuleThickness, o = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }, { type: "kern", size: 3 * s }, { type: "elem", elem: n }, { type: "kern", size: s }] }, e);
        return z(["mord", "overline"], [o], e);
      }, mathmlBuilder(t, e) {
        let r = new A("mo", [new u0("‾")]);
        r.setAttribute("stretchy", "true");
        let n = new A("mover", [Z(t.body, e), r]);
        return n.setAttribute("accent", "true"), n;
      } }), C({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: (t, e) => {
        let { parser: r } = t, n = e[0];
        return { type: "phantom", mode: r.mode, body: c0(n) };
      }, htmlBuilder: (t, e) => {
        let r = g0(t.body, e.withPhantom(), false);
        return U0(r);
      }, mathmlBuilder: (t, e) => {
        let r = A0(t.body, e);
        return new A("mphantom", r);
      } }), h("\\hphantom", "\\smash{\\phantom{#1}}"), C({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: (t, e) => {
        let { parser: r } = t, n = e[0];
        return { type: "vphantom", mode: r.mode, body: n };
      }, htmlBuilder: (t, e) => {
        let r = z(["inner"], [V(t.body, e.withPhantom())]), n = z(["fix"], []);
        return z(["mord", "rlap"], [r, n], e);
      }, mathmlBuilder: (t, e) => {
        let r = A0(c0(t.body), e), n = new A("mphantom", r), s = new A("mpadded", [n]);
        return s.setAttribute("width", "0px"), s;
      } }), C({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler(t, e) {
        let { parser: r } = t, n = L(e[0], "size").value, s = e[1];
        return { type: "raisebox", mode: r.mode, dy: n, body: s };
      }, htmlBuilder(t, e) {
        let r = V(t.body, e), n = r0(t.dy, e);
        return U({ positionType: "shift", positionData: -n, children: [{ type: "elem", elem: r }] }, e);
      }, mathmlBuilder(t, e) {
        let r = new A("mpadded", [Z(t.body, e)]), n = t.dy.number + t.dy.unit;
        return r.setAttribute("voffset", n), r;
      } }), C({ type: "internal", names: ["\\relax"], props: { numArgs: 0, allowedInText: true, allowedInArgument: true }, handler(t) {
        let { parser: e } = t;
        return { type: "internal", mode: e.mode };
      } }), C({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["size", "size", "size"] }, handler(t, e, r) {
        let { parser: n } = t, s = r[0], o = L(e[0], "size"), a = L(e[1], "size");
        return { type: "rule", mode: n.mode, shift: s && L(s, "size").value, width: o.value, height: a.value };
      }, htmlBuilder(t, e) {
        let r = z(["mord", "rule"], [], e), n = r0(t.width, e), s = r0(t.height, e), o = t.shift ? r0(t.shift, e) : 0;
        return r.style.borderRightWidth = T(n), r.style.borderTopWidth = T(s), r.style.bottom = T(o), r.width = n, r.height = s + o, r.depth = -o, r.maxFontSize = s * 1.125 * e.sizeMultiplier, r;
      }, mathmlBuilder(t, e) {
        let r = r0(t.width, e), n = r0(t.height, e), s = t.shift ? r0(t.shift, e) : 0, o = e.color && e.getColor() || "black", a = new A("mspace");
        a.setAttribute("mathbackground", o), a.setAttribute("width", T(r)), a.setAttribute("height", T(n));
        let u = new A("mpadded", [a]);
        return s >= 0 ? u.setAttribute("height", T(s)) : (u.setAttribute("height", T(s)), u.setAttribute("depth", T(-s))), u.setAttribute("voffset", T(s)), u;
      } });
      function on(t, e, r) {
        let n = g0(t, e, false), s = e.sizeMultiplier / r.sizeMultiplier;
        for (let o = 0; o < n.length; o++) {
          let a = n[o].classes.indexOf("sizing");
          a < 0 ? Array.prototype.push.apply(n[o].classes, e.sizingClasses(r)) : n[o].classes[a + 1] === "reset-size" + e.size && (n[o].classes[a + 1] = "reset-size" + r.size), n[o].height *= s, n[o].depth *= s;
        }
        return U0(n);
      }
      let an = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
      C({ type: "sizing", names: an, props: { numArgs: 0, allowedInText: true }, handler: (t, e) => {
        let { breakOnTokenText: r, funcName: n, parser: s } = t, o = s.parseExpression(false, r);
        return { type: "sizing", mode: s.mode, size: an.indexOf(n) + 1, body: o };
      }, htmlBuilder: (t, e) => {
        let r = e.havingSize(t.size);
        return on(t.body, r, e);
      }, mathmlBuilder: (t, e) => {
        let r = e.havingSize(t.size), n = A0(t.body, r), s = new A("mstyle", n);
        return s.setAttribute("mathsize", T(r.sizeMultiplier)), s;
      } }), C({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: (t, e, r) => {
        let { parser: n } = t, s = false, o = false, a = r[0] && L(r[0], "ordgroup");
        if (a) {
          let m;
          for (let f = 0; f < a.body.length; ++f) {
            let b = a.body[f];
            if (m = Pe(b).text, m === "t") s = true;
            else if (m === "b") o = true;
            else {
              s = false, o = false;
              break;
            }
          }
        } else s = true, o = true;
        let u = e[0];
        return { type: "smash", mode: n.mode, body: u, smashHeight: s, smashDepth: o };
      }, htmlBuilder: (t, e) => {
        let r = z([], [V(t.body, e)]);
        if (!t.smashHeight && !t.smashDepth) return r;
        if (t.smashHeight && (r.height = 0), t.smashDepth && (r.depth = 0), t.smashHeight && t.smashDepth) return z(["mord", "smash"], [r], e);
        if (r.children) for (let s = 0; s < r.children.length; s++) t.smashHeight && (r.children[s].height = 0), t.smashDepth && (r.children[s].depth = 0);
        let n = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: r }] }, e);
        return z(["mord"], [n], e);
      }, mathmlBuilder: (t, e) => {
        let r = new A("mpadded", [Z(t.body, e)]);
        return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r;
      } }), C({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(t, e, r) {
        let { parser: n } = t, s = r[0], o = e[0];
        return { type: "sqrt", mode: n.mode, body: o, index: s };
      }, htmlBuilder(t, e) {
        let r = V(t.body, e.havingCrampedStyle());
        r.height === 0 && (r.height = e.fontMetrics().xHeight), r = me(r, e);
        let s = e.fontMetrics().defaultRuleThickness, o = s;
        e.style.id < H.TEXT.id && (o = e.fontMetrics().xHeight);
        let a = s + o / 4, u = r.height + r.depth + a + s, { span: m, ruleWidth: f, advanceWidth: b } = V1(u, e), y = m.height - f;
        y > r.height + r.depth + a && (a = (a + y - r.height - r.depth) / 2);
        let w = m.height - r.height - a - f;
        r.style.paddingLeft = T(b);
        let k = U({ positionType: "firstBaseline", children: [{ type: "elem", elem: r, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r.height + w) }, { type: "elem", elem: m }, { type: "kern", size: f }] }, e);
        if (t.index) {
          let S = e.havingStyle(H.SCRIPTSCRIPT), B = V(t.index, S, e), _ = 0.6 * (k.height - k.depth), O = U({ positionType: "shift", positionData: -_, children: [{ type: "elem", elem: B }] }, e), G = z(["root"], [O]);
          return z(["mord", "sqrt"], [G, k], e);
        } else return z(["mord", "sqrt"], [k], e);
      }, mathmlBuilder(t, e) {
        let { body: r, index: n } = t;
        return n ? new A("mroot", [Z(r, e), Z(n, e)]) : new A("msqrt", [Z(r, e)]);
      } });
      let Ht = { display: H.DISPLAY, text: H.TEXT, script: H.SCRIPT, scriptscript: H.SCRIPTSCRIPT };
      function ns(t) {
        return t in Ht;
      }
      C({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t, e) {
        let { breakOnTokenText: r, funcName: n, parser: s } = t, o = s.parseExpression(true, r), a = n.slice(1, n.length - 5);
        if (!ns(a)) throw new Error("Unknown style: " + a);
        return { type: "styling", mode: s.mode, style: a, body: o };
      }, htmlBuilder(t, e) {
        let r = Ht[t.style], n = e.havingStyle(r);
        return t.resetFont && (n = n.withFont("")), on(t.body, n, e);
      }, mathmlBuilder(t, e) {
        let r = Ht[t.style], n = e.havingStyle(r);
        t.resetFont && (n = n.withFont(""));
        let s = A0(t.body, n), o = new A("mstyle", s), u = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }[t.style];
        return o.setAttribute("scriptlevel", u[0]), o.setAttribute("displaystyle", u[1]), o;
      } });
      let ss = function(t, e) {
        let r = t.base;
        return r ? r.type === "op" ? r.limits && (e.style.size === H.DISPLAY.size || r.alwaysHandleSupSub) ? de : null : r.type === "operatorname" ? r.alwaysHandleSupSub && (e.style.size === H.DISPLAY.size || r.limits) ? ln : null : r.type === "accent" ? t0(r.base) ? St : null : r.type === "horizBrace" && !t.sub === r.isOver ? tn : null : null;
      };
      se({ type: "supsub", htmlBuilder(t, e) {
        let r = ss(t, e);
        if (r) return r(t, e);
        let { base: n, sup: s, sub: o } = t, a = V(n, e), u, m, f = e.fontMetrics(), b = 0, y = 0, w = n && t0(n);
        if (s) {
          let Y = e.havingStyle(e.style.sup());
          u = V(s, Y, e), w || (b = a.height - Y.fontMetrics().supDrop * Y.sizeMultiplier / e.sizeMultiplier);
        }
        if (o) {
          let Y = e.havingStyle(e.style.sub());
          m = V(o, Y, e), w || (y = a.depth + Y.fontMetrics().subDrop * Y.sizeMultiplier / e.sizeMultiplier);
        }
        let k;
        e.style === H.DISPLAY ? k = f.sup1 : e.style.cramped ? k = f.sup3 : k = f.sup2;
        let S = e.sizeMultiplier, B = T(0.5 / f.ptPerEm / S), _ = null;
        if (m) {
          let Y = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
          if (a instanceof M0 || Y) {
            var O;
            _ = T(-((O = a.italic) != null ? O : 0));
          }
        }
        let G;
        if (u && m) {
          b = Math.max(b, k, u.depth + 0.25 * f.xHeight), y = Math.max(y, f.sub2);
          let m0 = 4 * f.defaultRuleThickness;
          if (b - u.depth - (m.height - y) < m0) {
            y = m0 - (b - u.depth) + m.height;
            let d0 = 0.8 * f.xHeight - (b - u.depth);
            d0 > 0 && (b += d0, y -= d0);
          }
          let y0 = [{ type: "elem", elem: m, shift: y, marginRight: B, marginLeft: _ }, { type: "elem", elem: u, shift: -b, marginRight: B }];
          G = U({ positionType: "individualShift", children: y0 }, e);
        } else if (m) y = Math.max(y, f.sub1, m.height - 0.8 * f.xHeight), G = U({ positionType: "shift", positionData: y, children: [{ type: "elem", elem: m, marginLeft: _, marginRight: B }] }, e);
        else if (u) b = Math.max(b, k, u.depth + 0.25 * f.xHeight), G = U({ positionType: "shift", positionData: -b, children: [{ type: "elem", elem: u, marginRight: B }] }, e);
        else throw new Error("supsub must have either sup or sub.");
        let h0 = yt(a, "right") || "mord";
        return z([h0], [a, z(["msupsub"], [G])], e);
      }, mathmlBuilder(t, e) {
        let r = false, n, s;
        t.base && t.base.type === "horizBrace" && (s = !!t.sup, s === t.base.isOver && (r = true, n = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = true);
        let o = [Z(t.base, e)];
        t.sub && o.push(Z(t.sub, e)), t.sup && o.push(Z(t.sup, e));
        let a;
        if (r) a = n ? "mover" : "munder";
        else if (t.sub) if (t.sup) {
          let u = t.base;
          u && u.type === "op" && u.limits && e.style === H.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === H.DISPLAY || u.limits) ? a = "munderover" : a = "msubsup";
        } else {
          let u = t.base;
          u && u.type === "op" && u.limits && (e.style === H.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === H.DISPLAY) ? a = "munder" : a = "msub";
        }
        else {
          let u = t.base;
          u && u.type === "op" && u.limits && (e.style === H.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === H.DISPLAY) ? a = "mover" : a = "msup";
        }
        return new A(a, o);
      } }), se({ type: "atom", htmlBuilder(t, e) {
        return dt(t.text, t.mode, e, ["m" + t.family]);
      }, mathmlBuilder(t, e) {
        let r = new A("mo", [D0(t.text, t.mode)]);
        if (t.family === "bin") {
          let n = vt(t, e);
          n === "bold-italic" && r.setAttribute("mathvariant", n);
        } else t.family === "punct" ? r.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && r.setAttribute("stretchy", "false");
        return r;
      } });
      let cn = { mi: "italic", mn: "normal", mtext: "normal" };
      se({ type: "mathord", htmlBuilder(t, e) {
        return Ee(t, e, "mathord");
      }, mathmlBuilder(t, e) {
        let r = new A("mi", [D0(t.text, t.mode, e)]), n = vt(t, e) || "italic";
        return n !== cn[r.type] && r.setAttribute("mathvariant", n), r;
      } }), se({ type: "textord", htmlBuilder(t, e) {
        return Ee(t, e, "textord");
      }, mathmlBuilder(t, e) {
        let r = D0(t.text, t.mode, e), n = vt(t, e) || "normal", s;
        return t.mode === "text" ? s = new A("mtext", [r]) : /[0-9]/.test(t.text) ? s = new A("mn", [r]) : t.text === "\\prime" ? s = new A("mo", [r]) : s = new A("mi", [r]), n !== cn[s.type] && s.setAttribute("mathvariant", n), s;
      } });
      let Ft = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, Lt = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
      se({ type: "spacing", htmlBuilder(t, e) {
        if (Lt.hasOwnProperty(t.text)) {
          let r = Lt[t.text].className || "";
          if (t.mode === "text") {
            let n = Ee(t, e, "textord");
            return n.classes.push(r), n;
          } else return z(["mspace", r], [dt(t.text, t.mode, e)], e);
        } else {
          if (Ft.hasOwnProperty(t.text)) return z(["mspace", Ft[t.text]], [], e);
          throw new v('Unknown type of space "' + t.text + '"');
        }
      }, mathmlBuilder(t, e) {
        let r;
        if (Lt.hasOwnProperty(t.text)) r = new A("mtext", [new u0(" ")]);
        else {
          if (Ft.hasOwnProperty(t.text)) return new A("mspace");
          throw new v('Unknown type of space "' + t.text + '"');
        }
        return r;
      } });
      let un = () => {
        let t = new A("mtd", []);
        return t.setAttribute("width", "50%"), t;
      };
      se({ type: "tag", mathmlBuilder(t, e) {
        let r = new A("mtable", [new A("mtr", [un(), new A("mtd", [K0(t.body, e)]), un(), new A("mtd", [K0(t.tag, e)])])]);
        return r.setAttribute("width", "100%"), r;
      } });
      let hn = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, mn = { "\\textbf": "textbf", "\\textmd": "textmd" }, is = { "\\textit": "textit", "\\textup": "textup" }, dn = (t, e) => {
        let r = t.font;
        if (r) {
          if (hn[r]) return e.withTextFontFamily(hn[r]);
          if (mn[r]) return e.withTextFontWeight(mn[r]);
          if (r === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
        } else return e;
        return e.withTextFontShape(is[r]);
      };
      C({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler(t, e) {
        let { parser: r, funcName: n } = t, s = e[0];
        return { type: "text", mode: r.mode, body: c0(s), font: n };
      }, htmlBuilder(t, e) {
        let r = dn(t, e), n = g0(t.body, r, true);
        return z(["mord", "text"], n, r);
      }, mathmlBuilder(t, e) {
        let r = dn(t, e);
        return K0(t.body, r);
      } }), C({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler(t, e) {
        let { parser: r } = t;
        return { type: "underline", mode: r.mode, body: e[0] };
      }, htmlBuilder(t, e) {
        let r = V(t.body, e), n = he("underline-line", e), s = e.fontMetrics().defaultRuleThickness, o = U({ positionType: "top", positionData: r.height, children: [{ type: "kern", size: s }, { type: "elem", elem: n }, { type: "kern", size: 3 * s }, { type: "elem", elem: r }] }, e);
        return z(["mord", "underline"], [o], e);
      }, mathmlBuilder(t, e) {
        let r = new A("mo", [new u0("‾")]);
        r.setAttribute("stretchy", "true");
        let n = new A("munder", [Z(t.body, e), r]);
        return n.setAttribute("accentunder", "true"), n;
      } }), C({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler(t, e) {
        let { parser: r } = t;
        return { type: "vcenter", mode: r.mode, body: e[0] };
      }, htmlBuilder(t, e) {
        let r = V(t.body, e), n = e.fontMetrics().axisHeight, s = 0.5 * (r.height - n - (r.depth + n));
        return U({ positionType: "shift", positionData: s, children: [{ type: "elem", elem: r }] }, e);
      }, mathmlBuilder(t, e) {
        let r = new A("mpadded", [Z(t.body, e)], ["vcenter"]);
        return new A("mrow", [r]);
      } }), C({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler(t, e, r) {
        throw new v("\\verb ended by end of line instead of matching delimiter");
      }, htmlBuilder(t, e) {
        let r = fn(t), n = [], s = e.havingStyle(e.style.text());
        for (let o = 0; o < r.length; o++) {
          let a = r[o];
          a === "~" && (a = "\\textasciitilde"), n.push(v0(a, "Typewriter-Regular", t.mode, s, ["mord", "texttt"]));
        }
        return z(["mord", "text"].concat(s.sizingClasses(e)), ur(n), s);
      }, mathmlBuilder(t, e) {
        let r = new u0(fn(t)), n = new A("mtext", [r]);
        return n.setAttribute("mathvariant", "monospace"), n;
      } });
      let fn = (t) => t.body.replace(/ /g, t.star ? "␣" : " ");
      var Q0 = fr;
      let pn = `[ \r
	]`, ls = "\\\\[a-zA-Z@]+", os = "\\\\[^\uD800-\uDFFF]", as = "(" + ls + ")" + pn + "*", cs = `\\\\(
|[ \r	]+
?)[ \r	]*`, _t = "[̀-ͯ]", us = new RegExp(_t + "+$"), hs = "(" + pn + "+)|" + (cs + "|") + "([!-\\[\\]-‧‪-퟿豈-￿]" + (_t + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (_t + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + as) + ("|" + os + ")");
      class gn {
        constructor(e, r) {
          this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = r, this.tokenRegex = new RegExp(hs, "g"), this.catcodes = { "%": 14, "~": 13 };
        }
        setCatcode(e, r) {
          this.catcodes[e] = r;
        }
        lex() {
          let e = this.input, r = this.tokenRegex.lastIndex;
          if (r === e.length) return new T0("EOF", new S0(this, r, r));
          let n = this.tokenRegex.exec(e);
          if (n === null || n.index !== r) throw new v("Unexpected character: '" + e[r] + "'", new T0(e[r], new S0(this, r, r + 1)));
          let s = n[6] || n[3] || (n[2] ? "\\ " : " ");
          if (this.catcodes[s] === 14) {
            let o = e.indexOf(`
`, this.tokenRegex.lastIndex);
            return o === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = o + 1, this.lex();
          }
          return new T0(s, new S0(this, r, this.tokenRegex.lastIndex));
        }
      }
      class ms {
        constructor(e, r) {
          e === void 0 && (e = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = e, this.undefStack = [];
        }
        beginGroup() {
          this.undefStack.push({});
        }
        endGroup() {
          if (this.undefStack.length === 0) throw new v("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
          let e = this.undefStack.pop();
          for (let r in e) e.hasOwnProperty(r) && (e[r] == null ? delete this.current[r] : this.current[r] = e[r]);
        }
        endGroups() {
          for (; this.undefStack.length > 0; ) this.endGroup();
        }
        has(e) {
          return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
        }
        get(e) {
          return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
        }
        set(e, r, n) {
          if (n === void 0 && (n = false), n) {
            for (let s = 0; s < this.undefStack.length; s++) delete this.undefStack[s][e];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = r);
          } else {
            let s = this.undefStack[this.undefStack.length - 1];
            s && !s.hasOwnProperty(e) && (s[e] = this.current[e]);
          }
          r == null ? delete this.current[e] : this.current[e] = r;
        }
      }
      var ds = Vr;
      h("\\noexpand", function(t) {
        let e = t.popToken();
        return t.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
      }), h("\\expandafter", function(t) {
        let e = t.popToken();
        return t.expandOnce(true), { tokens: [e], numArgs: 0 };
      }), h("\\@firstoftwo", function(t) {
        return { tokens: t.consumeArgs(2)[0], numArgs: 0 };
      }), h("\\@secondoftwo", function(t) {
        return { tokens: t.consumeArgs(2)[1], numArgs: 0 };
      }), h("\\@ifnextchar", function(t) {
        let e = t.consumeArgs(3);
        t.consumeSpaces();
        let r = t.future();
        return e[0].length === 1 && e[0][0].text === r.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
      }), h("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), h("\\TextOrMath", function(t) {
        let e = t.consumeArgs(2);
        return t.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
      });
      let bn = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
      h("\\char", function(t) {
        let e = t.popToken(), r, n = 0;
        if (e.text === "'") r = 8, e = t.popToken();
        else if (e.text === '"') r = 16, e = t.popToken();
        else if (e.text === "`") if (e = t.popToken(), e.text[0] === "\\") n = e.text.charCodeAt(1);
        else {
          if (e.text === "EOF") throw new v("\\char` missing argument");
          n = e.text.charCodeAt(0);
        }
        else r = 10;
        if (r) {
          if (n = bn[e.text], n == null || n >= r) throw new v("Invalid base-" + r + " digit " + e.text);
          let s;
          for (; (s = bn[t.future().text]) != null && s < r; ) n *= r, n += s, t.popToken();
        }
        return "\\@char{" + n + "}";
      });
      let Pt = (t, e, r, n) => {
        let s = t.consumeArg().tokens;
        if (s.length !== 1) throw new v("\\newcommand's first argument must be a macro name");
        let o = s[0].text, a = t.isDefined(o);
        if (a && !e) throw new v("\\newcommand{" + o + "} attempting to redefine " + (o + "; use \\renewcommand"));
        if (!a && !r) throw new v("\\renewcommand{" + o + "} when command " + o + " does not yet exist; use \\newcommand");
        let u = 0;
        if (s = t.consumeArg().tokens, s.length === 1 && s[0].text === "[") {
          let m = "", f = t.expandNextToken();
          for (; f.text !== "]" && f.text !== "EOF"; ) m += f.text, f = t.expandNextToken();
          if (!m.match(/^\s*[0-9]+\s*$/)) throw new v("Invalid number of arguments: " + m);
          u = parseInt(m), s = t.consumeArg().tokens;
        }
        return a && n || t.macros.set(o, { tokens: s, numArgs: u }), "";
      };
      h("\\newcommand", (t) => Pt(t, false, true, false)), h("\\renewcommand", (t) => Pt(t, true, false, false)), h("\\providecommand", (t) => Pt(t, true, true, true)), h("\\message", (t) => {
        let e = t.consumeArgs(1)[0];
        return console.log(e.reverse().map((r) => r.text).join("")), "";
      }), h("\\errmessage", (t) => {
        let e = t.consumeArgs(1)[0];
        return console.error(e.reverse().map((r) => r.text).join("")), "";
      }), h("\\show", (t) => {
        let e = t.popToken(), r = e.text;
        return console.log(e, t.macros.get(r), Q0[r], l0.math[r], l0.text[r]), "";
      }), h("\\bgroup", "{"), h("\\egroup", "}"), h("~", "\\nobreakspace"), h("\\lq", "`"), h("\\rq", "'"), h("\\aa", "\\r a"), h("\\AA", "\\r A"), h("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), h("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), h("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), h("ℬ", "\\mathscr{B}"), h("ℰ", "\\mathscr{E}"), h("ℱ", "\\mathscr{F}"), h("ℋ", "\\mathscr{H}"), h("ℐ", "\\mathscr{I}"), h("ℒ", "\\mathscr{L}"), h("ℳ", "\\mathscr{M}"), h("ℛ", "\\mathscr{R}"), h("ℭ", "\\mathfrak{C}"), h("ℌ", "\\mathfrak{H}"), h("ℨ", "\\mathfrak{Z}"), h("\\Bbbk", "\\Bbb{k}"), h("\\llap", "\\mathllap{\\textrm{#1}}"), h("\\rlap", "\\mathrlap{\\textrm{#1}}"), h("\\clap", "\\mathclap{\\textrm{#1}}"), h("\\mathstrut", "\\vphantom{(}"), h("\\underbar", "\\underline{\\text{#1}}"), h("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}'), h("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), h("\\ne", "\\neq"), h("≠", "\\neq"), h("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), h("∉", "\\notin"), h("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), h("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), h("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), h("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), h("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), h("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), h("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), h("⟂", "\\perp"), h("‼", "\\mathclose{!\\mkern-0.8mu!}"), h("∌", "\\notni"), h("⌜", "\\ulcorner"), h("⌝", "\\urcorner"), h("⌞", "\\llcorner"), h("⌟", "\\lrcorner"), h("©", "\\copyright"), h("®", "\\textregistered"), h("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), h("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), h("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), h("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), h("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}"), h("⋮", "\\vdots"), h("\\varGamma", "\\mathit{\\Gamma}"), h("\\varDelta", "\\mathit{\\Delta}"), h("\\varTheta", "\\mathit{\\Theta}"), h("\\varLambda", "\\mathit{\\Lambda}"), h("\\varXi", "\\mathit{\\Xi}"), h("\\varPi", "\\mathit{\\Pi}"), h("\\varSigma", "\\mathit{\\Sigma}"), h("\\varUpsilon", "\\mathit{\\Upsilon}"), h("\\varPhi", "\\mathit{\\Phi}"), h("\\varPsi", "\\mathit{\\Psi}"), h("\\varOmega", "\\mathit{\\Omega}"), h("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), h("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), h("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), h("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), h("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), h("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"), h("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}"), h("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
      let yn = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" }, fs = /* @__PURE__ */ new Set(["bin", "rel"]);
      h("\\dots", function(t) {
        let e = "\\dotso", r = t.expandAfterFuture().text;
        return r in yn ? e = yn[r] : (r.slice(0, 4) === "\\not" || r in l0.math && fs.has(l0.math[r].group)) && (e = "\\dotsb"), e;
      });
      let Gt = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
      h("\\dotso", function(t) {
        return t.future().text in Gt ? "\\ldots\\," : "\\ldots";
      }), h("\\dotsc", function(t) {
        let e = t.future().text;
        return e in Gt && e !== "," ? "\\ldots\\," : "\\ldots";
      }), h("\\cdots", function(t) {
        return t.future().text in Gt ? "\\@cdots\\," : "\\@cdots";
      }), h("\\dotsb", "\\cdots"), h("\\dotsm", "\\cdots"), h("\\dotsi", "\\!\\cdots"), h("\\dotsx", "\\ldots\\,"), h("\\DOTSI", "\\relax"), h("\\DOTSB", "\\relax"), h("\\DOTSX", "\\relax"), h("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), h("\\,", "\\tmspace+{3mu}{.1667em}"), h("\\thinspace", "\\,"), h("\\>", "\\mskip{4mu}"), h("\\:", "\\tmspace+{4mu}{.2222em}"), h("\\medspace", "\\:"), h("\\;", "\\tmspace+{5mu}{.2777em}"), h("\\thickspace", "\\;"), h("\\!", "\\tmspace-{3mu}{.1667em}"), h("\\negthinspace", "\\!"), h("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), h("\\negthickspace", "\\tmspace-{5mu}{.277em}"), h("\\enspace", "\\kern.5em "), h("\\enskip", "\\hskip.5em\\relax"), h("\\quad", "\\hskip1em\\relax"), h("\\qquad", "\\hskip2em\\relax"), h("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), h("\\tag@paren", "\\tag@literal{({#1})}"), h("\\tag@literal", (t) => {
        if (t.macros.get("\\df@tag")) throw new v("Multiple \\tag");
        return "\\gdef\\df@tag{\\text{#1}}";
      }), h("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), h("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), h("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), h("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), h("\\newline", "\\\\\\relax"), h("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
      let xn = T(H0["Main-Regular"][84][1] - 0.7 * H0["Main-Regular"][65][1]);
      h("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + xn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), h("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + xn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), h("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), h("\\@hspace", "\\hskip #1\\relax"), h("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), h("\\ordinarycolon", ":"), h("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), h("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), h("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), h("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), h("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), h("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), h("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), h("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), h("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), h("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), h("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), h("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), h("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), h("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), h("∷", "\\dblcolon"), h("∹", "\\eqcolon"), h("≔", "\\coloneqq"), h("≕", "\\eqqcolon"), h("⩴", "\\Coloneqq"), h("\\ratio", "\\vcentcolon"), h("\\coloncolon", "\\dblcolon"), h("\\colonequals", "\\coloneqq"), h("\\coloncolonequals", "\\Coloneqq"), h("\\equalscolon", "\\eqqcolon"), h("\\equalscoloncolon", "\\Eqqcolon"), h("\\colonminus", "\\coloneq"), h("\\coloncolonminus", "\\Coloneq"), h("\\minuscolon", "\\eqcolon"), h("\\minuscoloncolon", "\\Eqcolon"), h("\\coloncolonapprox", "\\Colonapprox"), h("\\coloncolonsim", "\\Colonsim"), h("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), h("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), h("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), h("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), h("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), h("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), h("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), h("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), h("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), h("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), h("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), h("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), h("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), h("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), h("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), h("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), h("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), h("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), h("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), h("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), h("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), h("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), h("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), h("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), h("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), h("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), h("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), h("\\imath", "\\html@mathml{\\@imath}{ı}"), h("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), h("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), h("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), h("⟦", "\\llbracket"), h("⟧", "\\rrbracket"), h("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), h("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), h("⦃", "\\lBrace"), h("⦄", "\\rBrace"), h("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), h("⦵", "\\minuso"), h("\\darr", "\\downarrow"), h("\\dArr", "\\Downarrow"), h("\\Darr", "\\Downarrow"), h("\\lang", "\\langle"), h("\\rang", "\\rangle"), h("\\uarr", "\\uparrow"), h("\\uArr", "\\Uparrow"), h("\\Uarr", "\\Uparrow"), h("\\N", "\\mathbb{N}"), h("\\R", "\\mathbb{R}"), h("\\Z", "\\mathbb{Z}"), h("\\alef", "\\aleph"), h("\\alefsym", "\\aleph"), h("\\Alpha", "\\mathrm{A}"), h("\\Beta", "\\mathrm{B}"), h("\\bull", "\\bullet"), h("\\Chi", "\\mathrm{X}"), h("\\clubs", "\\clubsuit"), h("\\cnums", "\\mathbb{C}"), h("\\Complex", "\\mathbb{C}"), h("\\Dagger", "\\ddagger"), h("\\diamonds", "\\diamondsuit"), h("\\empty", "\\emptyset"), h("\\Epsilon", "\\mathrm{E}"), h("\\Eta", "\\mathrm{H}"), h("\\exist", "\\exists"), h("\\harr", "\\leftrightarrow"), h("\\hArr", "\\Leftrightarrow"), h("\\Harr", "\\Leftrightarrow"), h("\\hearts", "\\heartsuit"), h("\\image", "\\Im"), h("\\infin", "\\infty"), h("\\Iota", "\\mathrm{I}"), h("\\isin", "\\in"), h("\\Kappa", "\\mathrm{K}"), h("\\larr", "\\leftarrow"), h("\\lArr", "\\Leftarrow"), h("\\Larr", "\\Leftarrow"), h("\\lrarr", "\\leftrightarrow"), h("\\lrArr", "\\Leftrightarrow"), h("\\Lrarr", "\\Leftrightarrow"), h("\\Mu", "\\mathrm{M}"), h("\\natnums", "\\mathbb{N}"), h("\\Nu", "\\mathrm{N}"), h("\\Omicron", "\\mathrm{O}"), h("\\plusmn", "\\pm"), h("\\rarr", "\\rightarrow"), h("\\rArr", "\\Rightarrow"), h("\\Rarr", "\\Rightarrow"), h("\\real", "\\Re"), h("\\reals", "\\mathbb{R}"), h("\\Reals", "\\mathbb{R}"), h("\\Rho", "\\mathrm{P}"), h("\\sdot", "\\cdot"), h("\\sect", "\\S"), h("\\spades", "\\spadesuit"), h("\\sub", "\\subset"), h("\\sube", "\\subseteq"), h("\\supe", "\\supseteq"), h("\\Tau", "\\mathrm{T}"), h("\\thetasym", "\\vartheta"), h("\\weierp", "\\wp"), h("\\Zeta", "\\mathrm{Z}"), h("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), h("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), h("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), h("\\bra", "\\mathinner{\\langle{#1}|}"), h("\\ket", "\\mathinner{|{#1}\\rangle}"), h("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), h("\\Bra", "\\left\\langle#1\\right|"), h("\\Ket", "\\left|#1\\right\\rangle");
      let wn = (t) => (e) => {
        let r = e.consumeArg().tokens, n = e.consumeArg().tokens, s = e.consumeArg().tokens, o = e.consumeArg().tokens, a = e.macros.get("|"), u = e.macros.get("\\|");
        e.macros.beginGroup();
        let m = (y) => (w) => {
          t && (w.macros.set("|", a), s.length && w.macros.set("\\|", u));
          let k = y;
          return !y && s.length && w.future().text === "|" && (w.popToken(), k = true), { tokens: k ? s : n, numArgs: 0 };
        };
        e.macros.set("|", m(false)), s.length && e.macros.set("\\|", m(true));
        let f = e.consumeArg().tokens, b = e.expandTokens([...o, ...f, ...r]);
        return e.macros.endGroup(), { tokens: b.reverse(), numArgs: 0 };
      };
      h("\\bra@ket", wn(false)), h("\\bra@set", wn(true)), h("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), h("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), h("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), h("\\angln", "{\\angl n}"), h("\\blue", "\\textcolor{##6495ed}{#1}"), h("\\orange", "\\textcolor{##ffa500}{#1}"), h("\\pink", "\\textcolor{##ff00af}{#1}"), h("\\red", "\\textcolor{##df0030}{#1}"), h("\\green", "\\textcolor{##28ae7b}{#1}"), h("\\gray", "\\textcolor{gray}{#1}"), h("\\purple", "\\textcolor{##9d38bd}{#1}"), h("\\blueA", "\\textcolor{##ccfaff}{#1}"), h("\\blueB", "\\textcolor{##80f6ff}{#1}"), h("\\blueC", "\\textcolor{##63d9ea}{#1}"), h("\\blueD", "\\textcolor{##11accd}{#1}"), h("\\blueE", "\\textcolor{##0c7f99}{#1}"), h("\\tealA", "\\textcolor{##94fff5}{#1}"), h("\\tealB", "\\textcolor{##26edd5}{#1}"), h("\\tealC", "\\textcolor{##01d1c1}{#1}"), h("\\tealD", "\\textcolor{##01a995}{#1}"), h("\\tealE", "\\textcolor{##208170}{#1}"), h("\\greenA", "\\textcolor{##b6ffb0}{#1}"), h("\\greenB", "\\textcolor{##8af281}{#1}"), h("\\greenC", "\\textcolor{##74cf70}{#1}"), h("\\greenD", "\\textcolor{##1fab54}{#1}"), h("\\greenE", "\\textcolor{##0d923f}{#1}"), h("\\goldA", "\\textcolor{##ffd0a9}{#1}"), h("\\goldB", "\\textcolor{##ffbb71}{#1}"), h("\\goldC", "\\textcolor{##ff9c39}{#1}"), h("\\goldD", "\\textcolor{##e07d10}{#1}"), h("\\goldE", "\\textcolor{##a75a05}{#1}"), h("\\redA", "\\textcolor{##fca9a9}{#1}"), h("\\redB", "\\textcolor{##ff8482}{#1}"), h("\\redC", "\\textcolor{##f9685d}{#1}"), h("\\redD", "\\textcolor{##e84d39}{#1}"), h("\\redE", "\\textcolor{##bc2612}{#1}"), h("\\maroonA", "\\textcolor{##ffbde0}{#1}"), h("\\maroonB", "\\textcolor{##ff92c6}{#1}"), h("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), h("\\maroonD", "\\textcolor{##ca337c}{#1}"), h("\\maroonE", "\\textcolor{##9e034e}{#1}"), h("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), h("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), h("\\purpleC", "\\textcolor{##aa87ff}{#1}"), h("\\purpleD", "\\textcolor{##7854ab}{#1}"), h("\\purpleE", "\\textcolor{##543b78}{#1}"), h("\\mintA", "\\textcolor{##f5f9e8}{#1}"), h("\\mintB", "\\textcolor{##edf2df}{#1}"), h("\\mintC", "\\textcolor{##e0e5cc}{#1}"), h("\\grayA", "\\textcolor{##f6f7f7}{#1}"), h("\\grayB", "\\textcolor{##f0f1f2}{#1}"), h("\\grayC", "\\textcolor{##e3e5e6}{#1}"), h("\\grayD", "\\textcolor{##d6d8da}{#1}"), h("\\grayE", "\\textcolor{##babec2}{#1}"), h("\\grayF", "\\textcolor{##888d93}{#1}"), h("\\grayG", "\\textcolor{##626569}{#1}"), h("\\grayH", "\\textcolor{##3b3e40}{#1}"), h("\\grayI", "\\textcolor{##21242c}{#1}"), h("\\kaBlue", "\\textcolor{##314453}{#1}"), h("\\kaGreen", "\\textcolor{##71B307}{#1}");
      let vn = { "^": true, _: true, "\\limits": true, "\\nolimits": true };
      class ps {
        constructor(e, r, n) {
          this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(e), this.macros = new ms(ds, r.macros), this.mode = n, this.stack = [];
        }
        feed(e) {
          this.lexer = new gn(e, this.settings);
        }
        switchMode(e) {
          this.mode = e;
        }
        beginGroup() {
          this.macros.beginGroup();
        }
        endGroup() {
          this.macros.endGroup();
        }
        endGroups() {
          this.macros.endGroups();
        }
        future() {
          return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
        }
        popToken() {
          return this.future(), this.stack.pop();
        }
        pushToken(e) {
          this.stack.push(e);
        }
        pushTokens(e) {
          this.stack.push(...e);
        }
        scanArgument(e) {
          let r, n, s;
          if (e) {
            if (this.consumeSpaces(), this.future().text !== "[") return null;
            r = this.popToken(), { tokens: s, end: n } = this.consumeArg(["]"]);
          } else ({ tokens: s, start: r, end: n } = this.consumeArg());
          return this.pushToken(new T0("EOF", n.loc)), this.pushTokens(s), new T0("", S0.range(r, n));
        }
        consumeSpaces() {
          for (; this.future().text === " "; ) this.stack.pop();
        }
        consumeArg(e) {
          let r = [], n = e && e.length > 0;
          n || this.consumeSpaces();
          let s = this.future(), o, a = 0, u = 0;
          do {
            if (o = this.popToken(), r.push(o), o.text === "{") ++a;
            else if (o.text === "}") {
              if (--a, a === -1) throw new v("Extra }", o);
            } else if (o.text === "EOF") throw new v("Unexpected end of input in a macro argument, expected '" + (e && n ? e[u] : "}") + "'", o);
            if (e && n) if ((a === 0 || a === 1 && e[u] === "{") && o.text === e[u]) {
              if (++u, u === e.length) {
                r.splice(-u, u);
                break;
              }
            } else u = 0;
          } while (a !== 0 || n);
          return s.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), { tokens: r, start: s, end: o };
        }
        consumeArgs(e, r) {
          if (r) {
            if (r.length !== e + 1) throw new v("The length of delimiters doesn't match the number of args!");
            let s = r[0];
            for (let o = 0; o < s.length; o++) {
              let a = this.popToken();
              if (s[o] !== a.text) throw new v("Use of the macro doesn't match its definition", a);
            }
          }
          let n = [];
          for (let s = 0; s < e; s++) n.push(this.consumeArg(r && r[s + 1]).tokens);
          return n;
        }
        countExpansion(e) {
          if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new v("Too many expansions: infinite loop or need to increase maxExpand setting");
        }
        expandOnce(e) {
          let r = this.popToken(), n = r.text, s = r.noexpand ? null : this._getExpansion(n);
          if (s == null || e && s.unexpandable) {
            if (e && s == null && n[0] === "\\" && !this.isDefined(n)) throw new v("Undefined control sequence: " + n);
            return this.pushToken(r), false;
          }
          this.countExpansion(1);
          let o = s.tokens, a = this.consumeArgs(s.numArgs, s.delimiters);
          if (s.numArgs) {
            o = o.slice();
            for (let u = o.length - 1; u >= 0; --u) {
              let m = o[u];
              if (m.text === "#") {
                if (u === 0) throw new v("Incomplete placeholder at end of macro body", m);
                if (m = o[--u], m.text === "#") o.splice(u + 1, 1);
                else if (/^[1-9]$/.test(m.text)) o.splice(u, 2, ...a[+m.text - 1]);
                else throw new v("Not a valid argument number", m);
              }
            }
          }
          return this.pushTokens(o), o.length;
        }
        expandAfterFuture() {
          return this.expandOnce(), this.future();
        }
        expandNextToken() {
          for (; ; ) if (this.expandOnce() === false) {
            let e = this.stack.pop();
            return e.treatAsRelax && (e.text = "\\relax"), e;
          }
        }
        expandMacro(e) {
          return this.macros.has(e) ? this.expandTokens([new T0(e)]) : void 0;
        }
        expandTokens(e) {
          let r = [], n = this.stack.length;
          for (this.pushTokens(e); this.stack.length > n; ) if (this.expandOnce(true) === false) {
            let s = this.stack.pop();
            s.treatAsRelax && (s.noexpand = false, s.treatAsRelax = false), r.push(s);
          }
          return this.countExpansion(r.length), r;
        }
        expandMacroAsText(e) {
          let r = this.expandMacro(e);
          return r && r.map((n) => n.text).join("");
        }
        _getExpansion(e) {
          let r = this.macros.get(e);
          if (r == null) return r;
          if (e.length === 1) {
            let s = this.lexer.catcodes[e];
            if (s != null && s !== 13) return;
          }
          let n = typeof r == "function" ? r(this) : r;
          if (typeof n == "string") {
            let s = 0;
            if (n.includes("#")) {
              let f = n.replace(/##/g, "");
              for (; f.includes("#" + (s + 1)); ) ++s;
            }
            let o = new gn(n, this.settings), a = [], u = o.lex();
            for (; u.text !== "EOF"; ) a.push(u), u = o.lex();
            return a.reverse(), { tokens: a, numArgs: s };
          }
          return n;
        }
        isDefined(e) {
          return this.macros.has(e) || Q0.hasOwnProperty(e) || l0.math.hasOwnProperty(e) || l0.text.hasOwnProperty(e) || vn.hasOwnProperty(e);
        }
        isExpandable(e) {
          let r = this.macros.get(e);
          return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : Q0.hasOwnProperty(e) && !Q0[e].primitive;
        }
      }
      let kn = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ze = Object.freeze({ "₊": "+", "₋": "-", "₌": "=", "₍": "(", "₎": ")", "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9", "ₐ": "a", "ₑ": "e", "ₕ": "h", "ᵢ": "i", "ⱼ": "j", "ₖ": "k", "ₗ": "l", "ₘ": "m", "ₙ": "n", "ₒ": "o", "ₚ": "p", "ᵣ": "r", "ₛ": "s", "ₜ": "t", "ᵤ": "u", "ᵥ": "v", "ₓ": "x", "ᵦ": "β", "ᵧ": "γ", "ᵨ": "ρ", "ᵩ": "ϕ", "ᵪ": "χ", "⁺": "+", "⁻": "-", "⁼": "=", "⁽": "(", "⁾": ")", "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "ᴬ": "A", "ᴮ": "B", "ᴰ": "D", "ᴱ": "E", "ᴳ": "G", "ᴴ": "H", "ᴵ": "I", "ᴶ": "J", "ᴷ": "K", "ᴸ": "L", "ᴹ": "M", "ᴺ": "N", "ᴼ": "O", "ᴾ": "P", "ᴿ": "R", "ᵀ": "T", "ᵁ": "U", "ⱽ": "V", "ᵂ": "W", "ᵃ": "a", "ᵇ": "b", "ᶜ": "c", "ᵈ": "d", "ᵉ": "e", "ᶠ": "f", "ᵍ": "g", ʰ: "h", "ⁱ": "i", ʲ: "j", "ᵏ": "k", ˡ: "l", "ᵐ": "m", ⁿ: "n", "ᵒ": "o", "ᵖ": "p", ʳ: "r", ˢ: "s", "ᵗ": "t", "ᵘ": "u", "ᵛ": "v", ʷ: "w", ˣ: "x", ʸ: "y", "ᶻ": "z", "ᵝ": "β", "ᵞ": "γ", "ᵟ": "δ", "ᵠ": "ϕ", "ᵡ": "χ", "ᶿ": "θ" }), $t = { "́": { text: "\\'", math: "\\acute" }, "̀": { text: "\\`", math: "\\grave" }, "̈": { text: '\\"', math: "\\ddot" }, "̃": { text: "\\~", math: "\\tilde" }, "̄": { text: "\\=", math: "\\bar" }, "̆": { text: "\\u", math: "\\breve" }, "̌": { text: "\\v", math: "\\check" }, "̂": { text: "\\^", math: "\\hat" }, "̇": { text: "\\.", math: "\\dot" }, "̊": { text: "\\r", math: "\\mathring" }, "̋": { text: "\\H" }, "̧": { text: "\\c" } }, Sn = { á: "á", à: "à", ä: "ä", ǟ: "ǟ", ã: "ã", ā: "ā", ă: "ă", ắ: "ắ", ằ: "ằ", ẵ: "ẵ", ǎ: "ǎ", â: "â", ấ: "ấ", ầ: "ầ", ẫ: "ẫ", ȧ: "ȧ", ǡ: "ǡ", å: "å", ǻ: "ǻ", ḃ: "ḃ", ć: "ć", ḉ: "ḉ", č: "č", ĉ: "ĉ", ċ: "ċ", ç: "ç", ď: "ď", ḋ: "ḋ", ḑ: "ḑ", é: "é", è: "è", ë: "ë", ẽ: "ẽ", ē: "ē", ḗ: "ḗ", ḕ: "ḕ", ĕ: "ĕ", ḝ: "ḝ", ě: "ě", ê: "ê", ế: "ế", ề: "ề", ễ: "ễ", ė: "ė", ȩ: "ȩ", ḟ: "ḟ", ǵ: "ǵ", ḡ: "ḡ", ğ: "ğ", ǧ: "ǧ", ĝ: "ĝ", ġ: "ġ", ģ: "ģ", ḧ: "ḧ", ȟ: "ȟ", ĥ: "ĥ", ḣ: "ḣ", ḩ: "ḩ", í: "í", ì: "ì", ï: "ï", ḯ: "ḯ", ĩ: "ĩ", ī: "ī", ĭ: "ĭ", ǐ: "ǐ", î: "î", ǰ: "ǰ", ĵ: "ĵ", ḱ: "ḱ", ǩ: "ǩ", ķ: "ķ", ĺ: "ĺ", ľ: "ľ", ļ: "ļ", ḿ: "ḿ", ṁ: "ṁ", ń: "ń", ǹ: "ǹ", ñ: "ñ", ň: "ň", ṅ: "ṅ", ņ: "ņ", ó: "ó", ò: "ò", ö: "ö", ȫ: "ȫ", õ: "õ", ṍ: "ṍ", ṏ: "ṏ", ȭ: "ȭ", ō: "ō", ṓ: "ṓ", ṑ: "ṑ", ŏ: "ŏ", ǒ: "ǒ", ô: "ô", ố: "ố", ồ: "ồ", ỗ: "ỗ", ȯ: "ȯ", ȱ: "ȱ", ő: "ő", ṕ: "ṕ", ṗ: "ṗ", ŕ: "ŕ", ř: "ř", ṙ: "ṙ", ŗ: "ŗ", ś: "ś", ṥ: "ṥ", š: "š", ṧ: "ṧ", ŝ: "ŝ", ṡ: "ṡ", ş: "ş", ẗ: "ẗ", ť: "ť", ṫ: "ṫ", ţ: "ţ", ú: "ú", ù: "ù", ü: "ü", ǘ: "ǘ", ǜ: "ǜ", ǖ: "ǖ", ǚ: "ǚ", ũ: "ũ", ṹ: "ṹ", ū: "ū", ṻ: "ṻ", ŭ: "ŭ", ǔ: "ǔ", û: "û", ů: "ů", ű: "ű", ṽ: "ṽ", ẃ: "ẃ", ẁ: "ẁ", ẅ: "ẅ", ŵ: "ŵ", ẇ: "ẇ", ẘ: "ẘ", ẍ: "ẍ", ẋ: "ẋ", ý: "ý", ỳ: "ỳ", ÿ: "ÿ", ỹ: "ỹ", ȳ: "ȳ", ŷ: "ŷ", ẏ: "ẏ", ẙ: "ẙ", ź: "ź", ž: "ž", ẑ: "ẑ", ż: "ż", Á: "Á", À: "À", Ä: "Ä", Ǟ: "Ǟ", Ã: "Ã", Ā: "Ā", Ă: "Ă", Ắ: "Ắ", Ằ: "Ằ", Ẵ: "Ẵ", Ǎ: "Ǎ", Â: "Â", Ấ: "Ấ", Ầ: "Ầ", Ẫ: "Ẫ", Ȧ: "Ȧ", Ǡ: "Ǡ", Å: "Å", Ǻ: "Ǻ", Ḃ: "Ḃ", Ć: "Ć", Ḉ: "Ḉ", Č: "Č", Ĉ: "Ĉ", Ċ: "Ċ", Ç: "Ç", Ď: "Ď", Ḋ: "Ḋ", Ḑ: "Ḑ", É: "É", È: "È", Ë: "Ë", Ẽ: "Ẽ", Ē: "Ē", Ḗ: "Ḗ", Ḕ: "Ḕ", Ĕ: "Ĕ", Ḝ: "Ḝ", Ě: "Ě", Ê: "Ê", Ế: "Ế", Ề: "Ề", Ễ: "Ễ", Ė: "Ė", Ȩ: "Ȩ", Ḟ: "Ḟ", Ǵ: "Ǵ", Ḡ: "Ḡ", Ğ: "Ğ", Ǧ: "Ǧ", Ĝ: "Ĝ", Ġ: "Ġ", Ģ: "Ģ", Ḧ: "Ḧ", Ȟ: "Ȟ", Ĥ: "Ĥ", Ḣ: "Ḣ", Ḩ: "Ḩ", Í: "Í", Ì: "Ì", Ï: "Ï", Ḯ: "Ḯ", Ĩ: "Ĩ", Ī: "Ī", Ĭ: "Ĭ", Ǐ: "Ǐ", Î: "Î", İ: "İ", Ĵ: "Ĵ", Ḱ: "Ḱ", Ǩ: "Ǩ", Ķ: "Ķ", Ĺ: "Ĺ", Ľ: "Ľ", Ļ: "Ļ", Ḿ: "Ḿ", Ṁ: "Ṁ", Ń: "Ń", Ǹ: "Ǹ", Ñ: "Ñ", Ň: "Ň", Ṅ: "Ṅ", Ņ: "Ņ", Ó: "Ó", Ò: "Ò", Ö: "Ö", Ȫ: "Ȫ", Õ: "Õ", Ṍ: "Ṍ", Ṏ: "Ṏ", Ȭ: "Ȭ", Ō: "Ō", Ṓ: "Ṓ", Ṑ: "Ṑ", Ŏ: "Ŏ", Ǒ: "Ǒ", Ô: "Ô", Ố: "Ố", Ồ: "Ồ", Ỗ: "Ỗ", Ȯ: "Ȯ", Ȱ: "Ȱ", Ő: "Ő", Ṕ: "Ṕ", Ṗ: "Ṗ", Ŕ: "Ŕ", Ř: "Ř", Ṙ: "Ṙ", Ŗ: "Ŗ", Ś: "Ś", Ṥ: "Ṥ", Š: "Š", Ṧ: "Ṧ", Ŝ: "Ŝ", Ṡ: "Ṡ", Ş: "Ş", Ť: "Ť", Ṫ: "Ṫ", Ţ: "Ţ", Ú: "Ú", Ù: "Ù", Ü: "Ü", Ǘ: "Ǘ", Ǜ: "Ǜ", Ǖ: "Ǖ", Ǚ: "Ǚ", Ũ: "Ũ", Ṹ: "Ṹ", Ū: "Ū", Ṻ: "Ṻ", Ŭ: "Ŭ", Ǔ: "Ǔ", Û: "Û", Ů: "Ů", Ű: "Ű", Ṽ: "Ṽ", Ẃ: "Ẃ", Ẁ: "Ẁ", Ẅ: "Ẅ", Ŵ: "Ŵ", Ẇ: "Ẇ", Ẍ: "Ẍ", Ẋ: "Ẋ", Ý: "Ý", Ỳ: "Ỳ", Ÿ: "Ÿ", Ỹ: "Ỹ", Ȳ: "Ȳ", Ŷ: "Ŷ", Ẏ: "Ẏ", Ź: "Ź", Ž: "Ž", Ẑ: "Ẑ", Ż: "Ż", ά: "ά", ὰ: "ὰ", ᾱ: "ᾱ", ᾰ: "ᾰ", έ: "έ", ὲ: "ὲ", ή: "ή", ὴ: "ὴ", ί: "ί", ὶ: "ὶ", ϊ: "ϊ", ΐ: "ΐ", ῒ: "ῒ", ῑ: "ῑ", ῐ: "ῐ", ό: "ό", ὸ: "ὸ", ύ: "ύ", ὺ: "ὺ", ϋ: "ϋ", ΰ: "ΰ", ῢ: "ῢ", ῡ: "ῡ", ῠ: "ῠ", ώ: "ώ", ὼ: "ὼ", Ύ: "Ύ", Ὺ: "Ὺ", Ϋ: "Ϋ", Ῡ: "Ῡ", Ῠ: "Ῠ", Ώ: "Ώ", Ὼ: "Ὼ" };
      class Ke {
        constructor(e, r) {
          this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new ps(e, r, this.mode), this.settings = r, this.leftrightDepth = 0, this.nextToken = null;
        }
        expect(e, r) {
          if (r === void 0 && (r = true), this.fetch().text !== e) throw new v("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
          r && this.consume();
        }
        consume() {
          this.nextToken = null;
        }
        fetch() {
          return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
        }
        switchMode(e) {
          this.mode = e, this.gullet.switchMode(e);
        }
        parse() {
          this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
          try {
            let e = this.parseExpression(false);
            return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
          } finally {
            this.gullet.endGroups();
          }
        }
        subparse(e) {
          let r = this.nextToken;
          this.consume(), this.gullet.pushToken(new T0("}")), this.gullet.pushTokens(e);
          let n = this.parseExpression(false);
          return this.expect("}"), this.nextToken = r, n;
        }
        parseExpression(e, r) {
          let n = [];
          for (; ; ) {
            this.mode === "math" && this.consumeSpaces();
            let s = this.fetch();
            if (Ke.endOfExpression.has(s.text) || r && s.text === r || e && Q0[s.text] && Q0[s.text].infix) break;
            let o = this.parseAtom(r);
            if (o) {
              if (o.type === "internal") continue;
            } else break;
            n.push(o);
          }
          return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
        }
        handleInfixNodes(e) {
          let r = -1, n;
          for (let s = 0; s < e.length; s++) {
            let o = e[s];
            if (o.type === "infix") {
              if (r !== -1) throw new v("only one infix operator per group", o.token);
              r = s, n = o.replaceWith;
            }
          }
          if (r !== -1 && n) {
            let s, o, a = e.slice(0, r), u = e.slice(r + 1);
            a.length === 1 && a[0].type === "ordgroup" ? s = a[0] : s = { type: "ordgroup", mode: this.mode, body: a }, u.length === 1 && u[0].type === "ordgroup" ? o = u[0] : o = { type: "ordgroup", mode: this.mode, body: u };
            let m;
            return n === "\\\\abovefrac" ? m = this.callFunction(n, [s, e[r], o], []) : m = this.callFunction(n, [s, o], []), [m];
          } else return e;
        }
        handleSupSubscript(e) {
          let r = this.fetch(), n = r.text;
          this.consume(), this.consumeSpaces();
          let s;
          do {
            var o;
            s = this.parseGroup(e);
          } while (((o = s) == null ? void 0 : o.type) === "internal");
          if (!s) throw new v("Expected group after '" + n + "'", r);
          return s;
        }
        formatUnsupportedCmd(e) {
          let r = [];
          for (let o = 0; o < e.length; o++) r.push({ type: "textord", mode: "text", text: e[o] });
          let n = { type: "text", mode: this.mode, body: r };
          return { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n] };
        }
        parseAtom(e) {
          let r = this.parseGroup("atom", e);
          if (r?.type === "internal" || this.mode === "text") return r;
          let n, s;
          for (; ; ) {
            this.consumeSpaces();
            let o = this.fetch();
            if (o.text === "\\limits" || o.text === "\\nolimits") {
              if (r && r.type === "op") {
                let a = o.text === "\\limits";
                r.limits = a, r.alwaysHandleSupSub = true;
              } else if (r && r.type === "operatorname") r.alwaysHandleSupSub && (r.limits = o.text === "\\limits");
              else throw new v("Limit controls must follow a math operator", o);
              this.consume();
            } else if (o.text === "^") {
              if (n) throw new v("Double superscript", o);
              n = this.handleSupSubscript("superscript");
            } else if (o.text === "_") {
              if (s) throw new v("Double subscript", o);
              s = this.handleSupSubscript("subscript");
            } else if (o.text === "'") {
              if (n) throw new v("Double superscript", o);
              let a = { type: "textord", mode: this.mode, text: "\\prime" }, u = [a];
              for (this.consume(); this.fetch().text === "'"; ) u.push(a), this.consume();
              this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), n = { type: "ordgroup", mode: this.mode, body: u };
            } else if (Ze[o.text]) {
              let a = kn.test(o.text), u = [];
              for (u.push(new T0(Ze[o.text])), this.consume(); ; ) {
                let f = this.fetch().text;
                if (!Ze[f] || kn.test(f) !== a) break;
                u.unshift(new T0(Ze[f])), this.consume();
              }
              let m = this.subparse(u);
              a ? s = { type: "ordgroup", mode: "math", body: m } : n = { type: "ordgroup", mode: "math", body: m };
            } else break;
          }
          return n || s ? { type: "supsub", mode: this.mode, base: r, sup: n, sub: s } : r;
        }
        parseFunction(e, r) {
          let n = this.fetch(), s = n.text, o = Q0[s];
          if (!o) return null;
          if (this.consume(), r && r !== "atom" && !o.allowedInArgument) throw new v("Got function '" + s + "' with no arguments" + (r ? " as " + r : ""), n);
          if (this.mode === "text" && !o.allowedInText) throw new v("Can't use function '" + s + "' in text mode", n);
          if (this.mode === "math" && o.allowedInMath === false) throw new v("Can't use function '" + s + "' in math mode", n);
          let { args: a, optArgs: u } = this.parseArguments(s, o);
          return this.callFunction(s, a, u, n, e);
        }
        callFunction(e, r, n, s, o) {
          let a = { funcName: e, parser: this, token: s, breakOnTokenText: o }, u = Q0[e];
          if (u && u.handler) return u.handler(a, r, n);
          throw new v("No function handler for " + e);
        }
        parseArguments(e, r) {
          let n = r.numArgs + r.numOptionalArgs;
          if (n === 0) return { args: [], optArgs: [] };
          let s = [], o = [];
          for (let a = 0; a < n; a++) {
            let u = r.argTypes && r.argTypes[a], m = a < r.numOptionalArgs;
            ("primitive" in r && r.primitive && u == null || r.type === "sqrt" && a === 1 && o[0] == null) && (u = "primitive");
            let f = this.parseGroupOfType("argument to '" + e + "'", u, m);
            if (m) o.push(f);
            else if (f != null) s.push(f);
            else throw new v("Null argument, please report this as a bug");
          }
          return { args: s, optArgs: o };
        }
        parseGroupOfType(e, r, n) {
          switch (r) {
            case "color":
              return this.parseColorGroup(n);
            case "size":
              return this.parseSizeGroup(n);
            case "url":
              return this.parseUrlGroup(n);
            case "math":
            case "text":
              return this.parseArgumentGroup(n, r);
            case "hbox": {
              let s = this.parseArgumentGroup(n, "text");
              return s != null ? { type: "styling", mode: s.mode, body: [s], style: "text", resetFont: true } : null;
            }
            case "raw": {
              let s = this.parseStringGroup("raw", n);
              return s != null ? { type: "raw", mode: "text", string: s.text } : null;
            }
            case "primitive": {
              if (n) throw new v("A primitive argument cannot be optional");
              let s = this.parseGroup(e);
              if (s == null) throw new v("Expected group as " + e, this.fetch());
              return s;
            }
            case "original":
            case null:
            case void 0:
              return this.parseArgumentGroup(n);
            default:
              throw new v("Unknown group type as " + e, this.fetch());
          }
        }
        consumeSpaces() {
          for (; this.fetch().text === " "; ) this.consume();
        }
        parseStringGroup(e, r) {
          let n = this.gullet.scanArgument(r);
          if (n == null) return null;
          let s = "", o;
          for (; (o = this.fetch()).text !== "EOF"; ) s += o.text, this.consume();
          return this.consume(), n.text = s, n;
        }
        parseRegexGroup(e, r) {
          let n = this.fetch(), s = n, o = "", a;
          for (; (a = this.fetch()).text !== "EOF" && e.test(o + a.text); ) s = a, o += s.text, this.consume();
          if (o === "") throw new v("Invalid " + r + ": '" + n.text + "'", n);
          return n.range(s, o);
        }
        parseColorGroup(e) {
          let r = this.parseStringGroup("color", e);
          if (r == null) return null;
          let n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
          if (!n) throw new v("Invalid color: '" + r.text + "'", r);
          let s = n[0];
          return /^[0-9a-f]{6}$/i.test(s) && (s = "#" + s), { type: "color-token", mode: this.mode, color: s };
        }
        parseSizeGroup(e) {
          let r, n = false;
          if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup("size", e), !r) return null;
          !e && r.text.length === 0 && (r.text = "0pt", n = true);
          let s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
          if (!s) throw new v("Invalid size: '" + r.text + "'", r);
          let o = { number: +(s[1] + s[2]), unit: s[3] };
          if (!Yt(o)) throw new v("Invalid unit: '" + o.unit + "'", r);
          return { type: "size", mode: this.mode, value: o, isBlank: n };
        }
        parseUrlGroup(e) {
          this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
          let r = this.parseStringGroup("url", e);
          if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null) return null;
          let n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return { type: "url", mode: this.mode, url: n };
        }
        parseArgumentGroup(e, r) {
          let n = this.gullet.scanArgument(e);
          if (n == null) return null;
          let s = this.mode;
          r && this.switchMode(r), this.gullet.beginGroup();
          let o = this.parseExpression(false, "EOF");
          this.expect("EOF"), this.gullet.endGroup();
          let a = { type: "ordgroup", mode: this.mode, loc: n.loc, body: o };
          return r && this.switchMode(s), a;
        }
        parseGroup(e, r) {
          let n = this.fetch(), s = n.text, o;
          if (s === "{" || s === "\\begingroup") {
            this.consume();
            let a = s === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            let u = this.parseExpression(false, a), m = this.fetch();
            this.expect(a), this.gullet.endGroup(), o = { type: "ordgroup", mode: this.mode, loc: S0.range(n, m), body: u, semisimple: s === "\\begingroup" || void 0 };
          } else if (o = this.parseFunction(r, e) || this.parseSymbol(), o == null && s[0] === "\\" && !vn.hasOwnProperty(s)) {
            if (this.settings.throwOnError) throw new v("Undefined control sequence: " + s, n);
            o = this.formatUnsupportedCmd(s), this.consume();
          }
          return o;
        }
        formLigatures(e) {
          let r = e.length - 1;
          for (let n = 0; n < r; ++n) {
            let s = e[n];
            if (s.type !== "textord") continue;
            let o = s.text, a = e[n + 1];
            if (!(!a || a.type !== "textord")) {
              if (o === "-" && a.text === "-") {
                let u = e[n + 2];
                n + 1 < r && u && u.type === "textord" && u.text === "-" ? (e.splice(n, 3, { type: "textord", mode: "text", loc: S0.range(s, u), text: "---" }), r -= 2) : (e.splice(n, 2, { type: "textord", mode: "text", loc: S0.range(s, a), text: "--" }), r -= 1);
              }
              (o === "'" || o === "`") && a.text === o && (e.splice(n, 2, { type: "textord", mode: "text", loc: S0.range(s, a), text: o + o }), r -= 1);
            }
          }
        }
        parseSymbol() {
          let e = this.fetch(), r = e.text;
          if (/^\\verb[^a-zA-Z]/.test(r)) {
            this.consume();
            let o = r.slice(5), a = o.charAt(0) === "*";
            if (a && (o = o.slice(1)), o.length < 2 || o.charAt(0) !== o.slice(-1)) throw new v(`\\verb assertion failed --
                    please report what input caused this bug`);
            return o = o.slice(1, -1), { type: "verb", mode: "text", body: o, star: a };
          }
          Sn.hasOwnProperty(r[0]) && !l0[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', e), r = Sn[r[0]] + r.slice(1));
          let n = us.exec(r);
          n && (r = r.substring(0, n.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
          let s;
          if (l0[this.mode][r]) {
            this.settings.strict && this.mode === "math" && at.includes(r) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', e);
            let o = l0[this.mode][r].group, a = S0.range(e), u;
            I1(o) ? u = { type: "atom", mode: this.mode, family: o, loc: a, text: r } : u = { type: o, mode: this.mode, loc: a, text: r }, s = u;
          } else if (r.charCodeAt(0) >= 128) this.settings.strict && (Xt(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), e)), s = { type: "textord", mode: "text", loc: S0.range(e), text: r };
          else return null;
          if (this.consume(), n) for (let o = 0; o < n[0].length; o++) {
            let a = n[0][o];
            if (!$t[a]) throw new v("Unknown accent ' " + a + "'", e);
            let u = $t[a][this.mode] || $t[a].text;
            if (!u) throw new v("Accent " + a + " unsupported in " + this.mode + " mode", e);
            s = { type: "accent", mode: this.mode, loc: S0.range(e), label: u, isStretchy: false, isShifty: true, base: s };
          }
          return s;
        }
      }
      Ke.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
      var Ut = function(t, e) {
        if (!(typeof t == "string" || t instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
        let r = new Ke(t, e);
        delete r.gullet.macros.current["\\df@tag"];
        let n = r.parse();
        if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
          if (!e.displayMode) throw new v("\\tag works only in display equations");
          n = [{ type: "tag", mode: "text", body: n, tag: r.subparse([new T0("\\df@tag")]) }];
        }
        return n;
      };
      let Mn = function(t, e, r) {
        e.textContent = "";
        let n = Vt(t, r).toNode();
        e.appendChild(n);
      };
      typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Mn = function() {
        throw new v("KaTeX doesn't work in quirks mode.");
      });
      let gs = function(t, e) {
        return Vt(t, e).toMarkup();
      }, bs = function(t, e) {
        let r = new ee(e);
        return Ut(t, r);
      }, zn = function(t, e, r) {
        if (r.throwOnError || !(t instanceof v)) throw t;
        let n = z(["katex-error"], [new M0(e)]);
        return n.setAttribute("title", t.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
      }, Vt = function(t, e) {
        let r = new ee(e);
        try {
          let n = Ut(t, r);
          return A1(n, t, r);
        } catch (n) {
          return zn(n, t, r);
        }
      };
      var ys = { version: "0.16.47", render: Mn, renderToString: gs, ParseError: v, SETTINGS_SCHEMA: j, __parse: bs, __renderToDomTree: Vt, __renderToHTMLTree: function(t, e) {
        let r = new ee(e);
        try {
          let n = Ut(t, r);
          return T1(n, t, r);
        } catch (n) {
          return zn(n, t, r);
        }
      }, __setFontMetrics: l1, __defineSymbol: i, __defineFunction: C, __defineMacro: h, __domTree: { Span: ce, Anchor: Ce, SymbolNode: M0, SvgNode: G0, PathNode: Y0, LineNode: it } }, xs = ys;
      return D = D.default, D;
    })();
  });
});
var En = An((Ae) => {
  "use strict";
  var ws = Ae && Ae.__importDefault || function(x) {
    return x && x.__esModule ? x : { default: x };
  };
  Object.defineProperty(Ae, "__esModule", { value: true });
  var vs = ws(Tn());
  function Cn(x, D) {
    let R = x.src[D - 1], v = x.src[D], F = x.src[D + 1];
    if (v !== "$") return { can_open: false, can_close: false };
    let N = false, P = false;
    return R !== "$" && R !== "\\" && (R === void 0 || Bn(R) || !Dn(R)) && (N = true), F !== "$" && (F == null || Bn(F) || !Dn(F)) && (P = true), { can_open: N, can_close: P };
  }
  function Bn(x) {
    return /^\s$/u.test(x);
  }
  function Dn(x) {
    return /^[\w\d]$/u.test(x);
  }
  function qn(x, D) {
    let R = x.src[D - 1], v = x.src[D], F = x.src[D + 1], N = x.src[D + 2];
    return v === "$" && R !== "$" && R !== "\\" && F === "$" && N !== "$" ? { can_open: true, can_close: true } : { can_open: false, can_close: false };
  }
  function ks(x, D) {
    if (x.src[x.pos] !== "$") return false;
    let R = x.tokens.at(-1);
    if (R?.type === "html_inline" && /^<\w+.+[^/]>$/.test(R.content)) return false;
    let v = Cn(x, x.pos);
    if (!v.can_open) return D || (x.pending += "$"), x.pos += 1, true;
    let F = x.pos + 1, N = F, P;
    for (; (N = x.src.indexOf("$", N)) !== -1; ) {
      for (P = N - 1; x.src[P] === "\\"; ) P -= 1;
      if ((N - P) % 2 == 1) break;
      N += 1;
    }
    if (N === -1) return D || (x.pending += "$"), x.pos = F, true;
    if (N - F === 0) return D || (x.pending += "$$"), x.pos = F + 1, true;
    if (v = Cn(x, N), !v.can_close) return D || (x.pending += "$"), x.pos = F, true;
    if (!D) {
      let K = x.push("math_inline", "math", 0);
      K.markup = "$", K.content = x.src.slice(F, N);
    }
    return x.pos = N + 1, true;
  }
  function Ss(x, D, R, v) {
    let F = false, N = x.bMarks[D] + x.tShift[D], P = x.eMarks[D];
    if (N + 2 > P || x.src.slice(N, N + 2) !== "$$") return false;
    N += 2;
    let K = x.src.slice(N, P), $ = [...K.matchAll(/\$\$/g)];
    if ($.length === 1 && $[0].index === K.length - 2) K = K.trim().slice(0, -2), F = true;
    else if ($.length > 1) return false;
    if (v) return true;
    let X, J, t0;
    for (J = D; !F && (J++, !(J >= R || (N = x.bMarks[J] + x.tShift[J], P = x.eMarks[J], N < P && x.tShift[J] < x.blkIndent))); ) x.src.slice(N, P).trim().slice(-2) === "$$" ? (t0 = x.src.slice(0, P).lastIndexOf("$$"), X = x.src.slice(N, t0), F = true) : x.src.slice(N, P).trim().includes("$$") && (t0 = x.src.slice(0, P).trim().indexOf("$$"), X = x.src.slice(N, t0), F = true);
    x.line = J + 1;
    let b0 = x.push("math_block", "math", 0);
    return b0.block = true, b0.content = (K && K.trim() ? K + `
` : "") + x.getLines(D + 1, J, x.tShift[D], true) + (X && X.trim() ? X : ""), b0.map = [D, x.line], b0.markup = "$$", true;
  }
  function Ms(x, D, R, v) {
    let F = x.bMarks[D] + x.tShift[D], N = x.eMarks[D];
    if (!x.src.slice(F, N).match(/^\s*\\begin\s*\{([^{}]+)\}/)) return false;
    if (D > 0) {
      let j = x.bMarks[D - 1] + x.tShift[D - 1], s0 = x.eMarks[D - 1], i0 = x.src.slice(j, s0);
      if (!/^\s*$/.test(i0)) return false;
    }
    if (v) return true;
    let $ = [], X = D, J, t0 = false;
    e: for (; !t0 && !(X >= R); X++) {
      let j = x.bMarks[X] + x.tShift[X], s0 = x.eMarks[X];
      if (j < s0 && x.tShift[X] < x.blkIndent) break;
      let i0 = x.src.slice(j, s0);
      for (let C0 of i0.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) if (C0[1] === "\\begin") $.push(C0[2].trim());
      else if (C0[1] === "\\end" && ($.pop(), !$.length)) {
        J = x.src.slice(j, s0), t0 = true;
        break e;
      }
    }
    x.line = X + 1;
    let b0 = x.push("math_block", "math", 0);
    return b0.block = true, b0.content = (x.getLines(D, X, x.tShift[D], true) + (J ?? "")).trim(), b0.map = [D, x.line], b0.markup = "$$", true;
  }
  function zs(x, D) {
    var R, v, F, N, P;
    if (x.src.slice(x.pos, x.pos + 2) !== "$$") return false;
    if (N = qn(x, x.pos), !N.can_open) return D || (x.pending += "$$"), x.pos += 2, true;
    for (R = x.pos + 2, v = R; (v = x.src.indexOf("$$", v)) !== -1; ) {
      for (P = v - 1; x.src[P] === "\\"; ) P -= 1;
      if ((v - P) % 2 == 1) break;
      v += 2;
    }
    return v === -1 ? (D || (x.pending += "$$"), x.pos = R, true) : v - R === 0 ? (D || (x.pending += "$$$$"), x.pos = R + 2, true) : (N = qn(x, v), N.can_close ? (D || (F = x.push("math_block", "math", 0), F.block = true, F.markup = "$$", F.content = x.src.slice(R, v)), x.pos = v + 2, true) : (D || (x.pending += "$$"), x.pos = R, true));
  }
  function As(x, D) {
    let R = x.src.slice(x.pos);
    if (!/^\n\\begin/.test(R)) return false;
    if (x.pos += 1, D) return true;
    let v = R.split(/\n/g).slice(1), F, N = [];
    e: for (var P = 0; P < v.length; ++P) {
      let X = v[P];
      for (let J of X.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) if (J[1] === "\\begin") N.push(J[2].trim());
      else if (J[1] === "\\end" && (N.pop(), !N.length)) {
        F = P;
        break e;
      }
    }
    if (typeof F > "u") return false;
    let K = v.slice(0, F + 1).reduce((X, J) => X + J.length, 0) + F + 1, $ = x.push("math_inline_bare_block", "math", 0);
    return $.block = true, $.markup = "$$", $.content = R.slice(1, K), x.pos = x.pos + K, true;
  }
  function Nn(x, D, R, v) {
    let F = x.tokens;
    for (let N = F.length - 1; N >= 0; N--) {
      let P = F[N], K = [];
      if (P.type !== "html_block") continue;
      let $ = P.content;
      for (let X of $.matchAll(v)) {
        if (!X.groups) continue;
        let J = X.groups.html_before_math, t0 = X.groups.math, b0 = X.groups.html_after_math;
        J && K.push({ ...P, type: "html_block", map: null, content: J }), t0 && K.push({ ...P, type: D, map: null, content: t0, markup: R, block: true, tag: "math" }), b0 && K.push({ ...P, type: "html_block", map: null, content: b0 });
      }
      K.length > 0 && F.splice(N, 1, ...K);
    }
    return true;
  }
  function tt(x) {
    return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function Ts(x, D) {
    let R = D?.katex ?? vs.default, v = D?.enableBareBlocks, F = D?.enableMathBlockInHtml, N = D?.enableMathInlineInHtml, P = D?.enableFencedBlocks;
    x.inline.ruler.after("escape", "math_inline", ks), x.inline.ruler.after("escape", "math_inline_block", zs), v && x.inline.ruler.before("text", "math_inline_bare_block", As), x.block.ruler.after("blockquote", "math_block", (j, s0, i0, C0) => v && Ms(j, s0, i0, C0) ? true : Ss(j, s0, i0, C0), { alt: ["paragraph", "reference", "blockquote", "list"] });
    let K = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm, $ = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;
    F && x.core.ruler.push("math_block_in_html_block", (j) => Nn(j, "math_block", "$$", K)), N && x.core.ruler.push("math_inline_in_html_block", (j) => Nn(j, "math_inline", "$", $));
    let X = (j) => {
      let s0 = /\\begin\{(align|equation|gather|cd|alignat)\}/ig.test(j);
      try {
        return R.renderToString(j, { ...D, displayMode: s0 });
      } catch (i0) {
        return D?.throwOnError && console.log(i0), `<span class="katex-error" title="${tt(j)}">${tt(i0 + "")}</span>`;
      }
    }, J = (j, s0) => {
      let i0 = j[s0].content, ee = i0.length > 2 && i0[0] === "`" && i0[i0.length - 1] === "`" ? i0.slice(1, -1) : i0;
      return X(ee);
    }, t0 = (j) => {
      try {
        return `<p class="katex-block">${R.renderToString(j, { ...D, displayMode: true })}</p>`;
      } catch (s0) {
        return D?.throwOnError && console.log(s0), `<p class="katex-block katex-error" title="${tt(j)}">${tt(s0 + "")}</p>`;
      }
    }, b0 = (j, s0) => t0(j[s0].content) + `
`;
    if (x.renderer.rules.math_inline = J, x.renderer.rules.math_inline_block = b0, x.renderer.rules.math_inline_bare_block = b0, x.renderer.rules.math_block = b0, P) {
      let j = "math", s0 = x.renderer.rules.fence;
      x.renderer.rules.fence = function(i0, C0, ee, R0, be) {
        let te = i0[C0];
        return te.info.trim().toLowerCase() === j && P ? t0(te.content) + `
` : s0?.call(this, i0, C0, ee, R0, be) || "";
      };
    }
  }
  Ae.default = Ts;
});
var In = import.meta.url.replace(/katex.js$/, "katex.min.css");
async function Ps(x) {
  let D = await x.getRenderer("vscode.markdown-it-renderer");
  if (!D) throw new Error("Could not load 'vscode.markdown-it-renderer'");
  let R = document.createElement("link");
  R.rel = "stylesheet", R.classList.add("markdown-style"), R.href = In;
  let v = document.createElement("link");
  v.rel = "stylesheet", v.href = In, document.head.appendChild(v);
  let F = document.createElement("style");
  F.textContent = `
		.katex-error {
			color: var(--vscode-editorError-foreground);
		}
		.katex-block {
			counter-reset: katexEqnNo mmlEqnNo;
		}
	`;
  let N = document.createElement("template");
  N.classList.add("markdown-style"), N.content.appendChild(F), N.content.appendChild(R), document.head.appendChild(N);
  let P = En().default, K = {};
  D.extendMarkdownIt(($) => $.use(P, { globalGroup: true, enableBareBlocks: true, enableFencedBlocks: true, macros: K }));
}
export { Ps as activate };
