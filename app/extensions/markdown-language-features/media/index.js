var Xe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Re = Xe((Rt, Ie) => {
  var He = "Expected a function", De = NaN, lt = "[object Symbol]", ct = /^\s+|\s+$/g, dt = /^[-+]0x[0-9a-f]+$/i, ut = /^0b[01]+$/i, ft = /^0o[0-7]+$/i, mt = parseInt, gt = typeof global == "object" && global && global.Object === Object && global, pt = typeof self == "object" && self && self.Object === Object && self, vt = gt || pt || Function("return this")(), ht = Object.prototype, bt = ht.toString, yt = Math.max, Tt = Math.min, ve = function() {
    return vt.Date.now();
  };
  function wt(e, t, r) {
    var n, i, a, d, o, s, m = 0, y = false, w = false, D = true;
    if (typeof e != "function") throw new TypeError(He);
    t = ke(t) || 0, re(r) && (y = !!r.leading, w = "maxWait" in r, a = w ? yt(ke(r.maxWait) || 0, t) : a, D = "trailing" in r ? !!r.trailing : D);
    function x(g) {
      var T = n, E = i;
      return n = i = void 0, m = g, d = e.apply(E, T), d;
    }
    function I(g) {
      return m = g, o = setTimeout(k, t), y ? x(g) : d;
    }
    function ie(g) {
      var T = g - s, E = g - m, F = t - T;
      return w ? Tt(F, a - E) : F;
    }
    function Y(g) {
      var T = g - s, E = g - m;
      return s === void 0 || T >= t || T < 0 || w && E >= a;
    }
    function k() {
      var g = ve();
      if (Y(g)) return R(g);
      o = setTimeout(k, ie(g));
    }
    function R(g) {
      return o = void 0, D && n ? x(g) : (n = i = void 0, d);
    }
    function M() {
      o !== void 0 && clearTimeout(o), m = 0, n = s = i = o = void 0;
    }
    function B() {
      return o === void 0 ? d : R(ve());
    }
    function C() {
      var g = ve(), T = Y(g);
      if (n = arguments, i = this, s = g, T) {
        if (o === void 0) return I(s);
        if (w) return o = setTimeout(k, t), x(s);
      }
      return o === void 0 && (o = setTimeout(k, t)), d;
    }
    return C.cancel = M, C.flush = B, C;
  }
  function Et(e, t, r) {
    var n = true, i = true;
    if (typeof e != "function") throw new TypeError(He);
    return re(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), wt(e, t, { leading: n, maxWait: t, trailing: i });
  }
  function re(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function St(e) {
    return !!e && typeof e == "object";
  }
  function At(e) {
    return typeof e == "symbol" || St(e) && bt.call(e) == lt;
  }
  function ke(e) {
    if (typeof e == "number") return e;
    if (At(e)) return De;
    if (re(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = re(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(ct, "");
    var r = ut.test(e);
    return r || ft.test(e) ? mt(e.slice(2), r ? 2 : 8) : dt.test(e) ? De : +e;
  }
  Ie.exports = Et;
});
var Ee = "code-line", W = class {
  constructor(t, r, n) {
    this.element = t;
    this.line = r;
    this.codeElement = n;
    this._detailParentElements = Array.from(Ge(t, "DETAILS"));
  }
  get isVisible() {
    return !this._detailParentElements.some((t) => !t.open);
  }
}, le = /* @__PURE__ */ (() => {
  let e, t = -1;
  return (r) => {
    if (!e || r !== t) {
      t = r, e = [new W(document.body, -1)];
      for (let n of document.getElementsByClassName(Ee)) {
        if (!(n instanceof HTMLElement)) continue;
        let i = +n.getAttribute("data-line");
        isNaN(i) || (n.tagName === "CODE" && n.parentElement && n.parentElement.tagName === "PRE" ? e.push(new W(n.parentElement, i, n)) : n.tagName === "UL" || n.tagName === "OL" || e.push(new W(n, i)));
      }
    }
    return e;
  };
})();
function ce(e, t) {
  let r = Math.floor(e), n = le(t), i = n[0] || null;
  for (let a of n) {
    if (a.line === r) return { previous: a, next: void 0 };
    if (a.line > r) return { previous: i, next: a };
    i = a;
  }
  return { previous: i };
}
function Ye(e, t) {
  let r = le(t).filter((s) => s.isVisible), n = e - window.scrollY, i = -1, a = r.length - 1;
  for (; i + 1 < a; ) {
    let s = Math.floor((i + a) / 2), m = V(r[s]);
    m.top + m.height >= n ? a = s : i = s;
  }
  let d = r[a], o = V(d);
  return a >= 1 && o.top > n ? { previous: r[i], next: d } : a > 1 && a < r.length && o.top + o.height > n ? { previous: d, next: r[a + 1] } : { previous: d };
}
function V({ element: e }) {
  let t = e.getBoundingClientRect(), r = e.querySelector(`.${Ee}`);
  if (r) {
    let n = r.getBoundingClientRect(), i = Math.max(1, n.top - t.top);
    return { top: t.top, height: i };
  }
  return t;
}
function Q(e, t, r) {
  if (!r.settings?.scrollPreviewWithEditor) return;
  if (e <= 0) {
    window.scroll(window.scrollX, 0);
    return;
  }
  let { previous: n, next: i } = ce(e, t);
  if (!n) return;
  let a = 0, d = V(n), o = d.top;
  if (i && i.line !== n.line) {
    let s = (e - n.line) / (i.line - n.line), m = o + d.height, y = i.element.getBoundingClientRect().top - m;
    a = m + s * y;
  } else {
    let s = e - Math.floor(e);
    a = o + d.height * s;
  }
  a = Math.abs(a) < 1 ? Math.sign(a) : a, window.scroll(window.scrollX, Math.max(1, window.scrollY + a));
}
function de(e, t) {
  let { previous: r, next: n } = Ye(e, t);
  if (r) {
    if (r.line < 0) return 0;
    let i = V(r), a = e - window.scrollY - i.top;
    if (n) {
      let d = a / (V(n).top - i.top);
      return r.line + d * (n.line - r.line);
    } else {
      let d = a / i.height;
      return r.line + d;
    }
  }
  return null;
}
function Se(e, t) {
  return le(t).find((r) => r.element.id === e);
}
function* Ge(e, t) {
  for (let r = e.parentElement; r; r = r.parentElement) r.tagName === t && (yield r);
}
var Z = class {
  onDidChangeTextEditorSelection(t, r) {
    let { previous: n } = ce(t, r);
    this._update(n && (n.codeElement || n.element));
  }
  _update(t) {
    this._unmarkActiveElement(this._current), this._markActiveElement(t), this._current = t;
  }
  _unmarkActiveElement(t) {
    t && t.classList.toggle("code-active-line", false);
  }
  _markActiveElement(t) {
    t && t.classList.toggle("code-active-line", true);
  }
};
function Ae(e) {
  document.readyState === "loading" || document.readyState === "uninitialized" ? document.addEventListener("DOMContentLoaded", e) : e();
}
var Le = (e, t) => ({ postMessage(r, n) {
  e.postMessage({ type: r, source: t.settings.source, ...n });
} });
function ue(e) {
  let t = document.getElementById("vscode-markdown-preview-data");
  if (t) {
    let r = t.getAttribute(e);
    if (r) return r;
  }
  throw new Error(`Could not load data for ${e}`);
}
function fe(e) {
  return JSON.parse(ue(e));
}
var ee = class {
  constructor() {
    this._settings = fe("data-settings");
  }
  get settings() {
    return this._settings;
  }
  updateSettings(t) {
    this._settings = t;
  }
};
var xe = 11;
function $e(e, t) {
  var r = t.attributes, n, i, a, d, o;
  if (!(t.nodeType === xe || e.nodeType === xe)) {
    for (var s = r.length - 1; s >= 0; s--) n = r[s], i = n.name, a = n.namespaceURI, d = n.value, a ? (i = n.localName || i, o = e.getAttributeNS(a, i), o !== d && (n.prefix === "xmlns" && (i = n.name), e.setAttributeNS(a, i, d))) : (o = e.getAttribute(i), o !== d && e.setAttribute(i, d));
    for (var m = e.attributes, y = m.length - 1; y >= 0; y--) n = m[y], i = n.name, a = n.namespaceURI, a ? (i = n.localName || i, t.hasAttributeNS(a, i) || e.removeAttributeNS(a, i)) : t.hasAttribute(i) || e.removeAttribute(i);
  }
}
var te, Ke = "http://www.w3.org/1999/xhtml", h = typeof document > "u" ? void 0 : document, Je = !!h && "content" in h.createElement("template"), Qe = !!h && h.createRange && "createContextualFragment" in h.createRange();
function Ze(e) {
  var t = h.createElement("template");
  return t.innerHTML = e, t.content.childNodes[0];
}
function et(e) {
  te || (te = h.createRange(), te.selectNode(h.body));
  var t = te.createContextualFragment(e);
  return t.childNodes[0];
}
function tt(e) {
  var t = h.createElement("body");
  return t.innerHTML = e, t.childNodes[0];
}
function nt(e) {
  return e = e.trim(), Je ? Ze(e) : Qe ? et(e) : tt(e);
}
function ne(e, t) {
  var r = e.nodeName, n = t.nodeName, i, a;
  return r === n ? true : (i = r.charCodeAt(0), a = n.charCodeAt(0), i <= 90 && a >= 97 ? r === n.toUpperCase() : a <= 90 && i >= 97 ? n === r.toUpperCase() : false);
}
function rt(e, t) {
  return !t || t === Ke ? h.createElement(e) : h.createElementNS(t, e);
}
function it(e, t) {
  for (var r = e.firstChild; r; ) {
    var n = r.nextSibling;
    t.appendChild(r), r = n;
  }
  return t;
}
function me(e, t, r) {
  e[r] !== t[r] && (e[r] = t[r], e[r] ? e.setAttribute(r, "") : e.removeAttribute(r));
}
var Me = { OPTION: function(e, t) {
  var r = e.parentNode;
  if (r) {
    var n = r.nodeName.toUpperCase();
    n === "OPTGROUP" && (r = r.parentNode, n = r && r.nodeName.toUpperCase()), n === "SELECT" && !r.hasAttribute("multiple") && (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), r.selectedIndex = -1);
  }
  me(e, t, "selected");
}, INPUT: function(e, t) {
  me(e, t, "checked"), me(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
}, TEXTAREA: function(e, t) {
  var r = t.value;
  e.value !== r && (e.value = r);
  var n = e.firstChild;
  if (n) {
    var i = n.nodeValue;
    if (i == r || !r && i == e.placeholder) return;
    n.nodeValue = r;
  }
}, SELECT: function(e, t) {
  if (!t.hasAttribute("multiple")) {
    for (var r = -1, n = 0, i = e.firstChild, a, d; i; ) if (d = i.nodeName && i.nodeName.toUpperCase(), d === "OPTGROUP") a = i, i = a.firstChild, i || (i = a.nextSibling, a = null);
    else {
      if (d === "OPTION") {
        if (i.hasAttribute("selected")) {
          r = n;
          break;
        }
        n++;
      }
      i = i.nextSibling, !i && a && (i = a.nextSibling, a = null);
    }
    e.selectedIndex = r;
  }
} }, j = 1, Ce = 11, Ne = 3, Pe = 8;
function O() {
}
function at(e) {
  if (e) return e.getAttribute && e.getAttribute("id") || e.id;
}
function ot(e) {
  return function(r, n, i) {
    if (i || (i = {}), typeof n == "string") if (r.nodeName === "#document" || r.nodeName === "HTML") {
      var a = n;
      n = h.createElement("html"), n.innerHTML = a;
    } else if (r.nodeName === "BODY") {
      var d = n;
      n = h.createElement("html"), n.innerHTML = d;
      var o = n.querySelector("body");
      o && (n = o);
    } else n = nt(n);
    else n.nodeType === Ce && (n = n.firstElementChild);
    var s = i.getNodeKey || at, m = i.onBeforeNodeAdded || O, y = i.onNodeAdded || O, w = i.onBeforeElUpdated || O, D = i.onElUpdated || O, x = i.onBeforeNodeDiscarded || O, I = i.onNodeDiscarded || O, ie = i.onBeforeElChildrenUpdated || O, Y = i.skipFromChildren || O, k = i.addChild || function(l, c) {
      return l.appendChild(c);
    }, R = i.childrenOnly === true, M = /* @__PURE__ */ Object.create(null), B = [];
    function C(l) {
      B.push(l);
    }
    function g(l, c) {
      if (l.nodeType === j) for (var p = l.firstChild; p; ) {
        var u = void 0;
        c && (u = s(p)) ? C(u) : (I(p), p.firstChild && g(p, c)), p = p.nextSibling;
      }
    }
    function T(l, c, p) {
      x(l) !== false && (c && c.removeChild(l), I(l), g(l, p));
    }
    function E(l) {
      if (l.nodeType === j || l.nodeType === Ce) for (var c = l.firstChild; c; ) {
        var p = s(c);
        p && (M[p] = c), E(c), c = c.nextSibling;
      }
    }
    E(r);
    function F(l) {
      y(l);
      for (var c = l.firstChild; c; ) {
        var p = c.nextSibling, u = s(c);
        if (u) {
          var f = M[u];
          f && ne(c, f) ? (c.parentNode.replaceChild(f, c), G(f, c)) : F(c);
        } else F(c);
        c = p;
      }
    }
    function je(l, c, p) {
      for (; c; ) {
        var u = c.nextSibling;
        (p = s(c)) ? C(p) : T(c, l, true), c = u;
      }
    }
    function G(l, c, p) {
      var u = s(c);
      if (u && delete M[u], !p) {
        var f = w(l, c);
        if (f === false || (f instanceof HTMLElement && (l = f, E(l)), e(l, c), D(l), ie(l, c) === false)) return;
      }
      l.nodeName !== "TEXTAREA" ? qe(l, c) : Me.TEXTAREA(l, c);
    }
    function qe(l, c) {
      var p = Y(l, c), u = c.firstChild, f = l.firstChild, _, S, U, K, N;
      e: for (; u; ) {
        for (K = u.nextSibling, _ = s(u); !p && f; ) {
          if (U = f.nextSibling, u.isSameNode && u.isSameNode(f)) {
            u = K, f = U;
            continue e;
          }
          S = s(f);
          var J = f.nodeType, P = void 0;
          if (J === u.nodeType && (J === j ? (_ ? _ !== S && ((N = M[_]) ? U === N ? P = false : (l.insertBefore(N, f), S ? C(S) : T(f, l, true), f = N, S = s(f)) : P = false) : S && (P = false), P = P !== false && ne(f, u), P && G(f, u)) : (J === Ne || J == Pe) && (P = true, f.nodeValue !== u.nodeValue && (f.nodeValue = u.nodeValue))), P) {
            u = K, f = U;
            continue e;
          }
          S ? C(S) : T(f, l, true), f = U;
        }
        if (_ && (N = M[_]) && ne(N, u)) p || k(l, N), G(N, u);
        else {
          var se = m(u);
          se !== false && (se && (u = se), u.actualize && (u = u.actualize(l.ownerDocument || h)), k(l, u), F(u));
        }
        u = K, f = U;
      }
      je(l, f, S);
      var we = Me[l.nodeName];
      we && we(l, c);
    }
    var v = r, $ = v.nodeType, Te = n.nodeType;
    if (!R) {
      if ($ === j) Te === j ? ne(r, n) || (I(r), v = it(r, rt(n.nodeName, n.namespaceURI))) : v = n;
      else if ($ === Ne || $ === Pe) {
        if (Te === $) return v.nodeValue !== n.nodeValue && (v.nodeValue = n.nodeValue), v;
        v = n;
      }
    }
    if (v === n) I(r);
    else {
      if (n.isSameNode && n.isSameNode(v)) return;
      if (G(v, n, R), B) for (var ae = 0, ze = B.length; ae < ze; ae++) {
        var oe = M[B[ae]];
        oe && T(oe, oe.parentNode, false);
      }
    }
    return !R && v !== r && r.parentNode && (v.actualize && (v = v.actualize(r.ownerDocument || h)), r.parentNode.replaceChild(v, r)), v;
  };
}
var st = ot($e), Oe = st;
var ge = Object.freeze({ http: "http", https: "https", file: "file", untitled: "untitled", mailto: "mailto", vscode: "vscode", "vscode-insiders": "vscode-insiders", notebookCell: "vscode-notebook-cell" });
function pe(e, t) {
  return t.toLowerCase().startsWith(e + ":");
}
var Be = Re(), H = 0, Fe = new Z(), b = new ee(), A = 0, q = b.settings.source, z = acquireVsCodeApi(), he = z.getState() ?? {}, L = { ...he, ...fe("data-state") };
typeof he.scrollProgress < "u" && he?.resource !== L.resource && (L.scrollProgress = 0);
z.setState(L);
var X = Le(z, b);
window.cspAlerter.setPoster(X);
window.styleLoadingMonitor.setPoster(X);
function be(e) {
  let t = document.getElementsByTagName("img");
  if (t.length > 0) {
    let r = Array.from(t, (n) => n.complete ? Promise.resolve() : new Promise((i) => {
      n.addEventListener("load", () => i()), n.addEventListener("error", () => i());
    }));
    Promise.all(r).then(() => setTimeout(e, 0));
  } else setTimeout(e, 0);
}
Ae(() => {
  let r = [...new DOMParser().parseFromString(ue("data-initial-md-content"), "text/html").body.children];
  document.body.append(...r);
  for (let i of r) i instanceof HTMLElement && ye(i);
  let n = L.scrollProgress;
  if (_e(), typeof n == "number" && !b.settings.fragment) {
    be(() => {
      H += 1;
      let i = Math.max(1, n * document.body.clientHeight);
      window.scrollTo(0, i);
    });
    return;
  }
  b.settings.scrollPreviewWithEditor && be(() => {
    if (b.settings.fragment) {
      let i;
      try {
        i = encodeURIComponent(b.settings.fragment);
      } catch {
        i = b.settings.fragment;
      }
      L.fragment = void 0, z.setState(L);
      let a = Se(i, A);
      a && (H += 1, Q(a.line, A, b));
    } else isNaN(b.settings.line) || (H += 1, Q(b.settings.line, A, b));
  }), typeof b.settings.selectedLine == "number" && Fe.onDidChangeTextEditorSelection(b.settings.selectedLine, A);
});
var Lt = (() => {
  let e = Be((t) => {
    H += 1, be(() => Q(t, A, b));
  }, 50);
  return (t) => {
    isNaN(t) || (L.line = t, e(t));
  };
})();
window.addEventListener("resize", () => {
  H += 1, We();
}, true);
function _e() {
  let e = document.getElementsByTagName("img"), t = 0;
  for (let r of e) {
    r.id = "image-" + t, t += 1;
    let n = r.getAttribute("data-src"), a = n && !(pe(ge.http, n) || pe(ge.https, n)) ? "localImage" : "image";
    r.setAttribute("data-vscode-context", JSON.stringify({ webviewSection: a, id: r.id, preventDefaultContextMenuItems: true, resource: q, imageSource: n }));
  }
}
async function Ue(e, t = 5) {
  if (!document.hasFocus() && t > 0) {
    setTimeout(() => {
      Ue(e, t - 1);
    }, 20);
    return;
  }
  try {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": new Promise((r) => {
      let n = document.createElement("canvas");
      n !== null && (n.width = e.naturalWidth, n.height = e.naturalHeight, n.getContext("2d")?.drawImage(e, 0, 0)), n.toBlob((i) => {
        i && r(i), n.remove();
      }, "image/png");
    }) })]);
  } catch (r) {
    console.error(r);
    let n = window.getSelection();
    if (!n) {
      await navigator.clipboard.writeText(e.getAttribute("data-src") ?? e.src);
      return;
    }
    n.removeAllRanges();
    let i = document.createRange();
    i.selectNode(e), n.addRange(i), document.execCommand("copy"), n.removeAllRanges();
  }
}
window.addEventListener("message", async (e) => {
  let t = e.data;
  switch (t.type) {
    case "copyImage": {
      let r = document.getElementById(t.id);
      r instanceof HTMLImageElement && Ue(r);
      return;
    }
    case "onDidChangeTextEditorSelection":
      t.source === q && Fe.onDidChangeTextEditorSelection(t.line, A);
      return;
    case "updateView":
      t.source === q && Lt(t.line);
      return;
    case "updateContent": {
      let r = document.querySelector(".markdown-body"), i = new DOMParser().parseFromString(t.content, "text/html");
      for (let a of Array.from(i.querySelectorAll("meta"))) a.hasAttribute("http-equiv") && a.remove();
      if (t.source !== q) {
        q = t.source;
        let a = i.querySelector(".markdown-body");
        r.replaceWith(a), ye(a);
      } else {
        let a = i.querySelector(".markdown-body"), d = a.querySelectorAll("link");
        for (let o of d) o.remove();
        a.prepend(...d), Oe(r, a, { childrenOnly: true, onBeforeElUpdated: (o, s) => {
          if (Ve(o, s)) {
            let m = o.querySelectorAll("[data-line]"), y = s.querySelectorAll("[data-line]");
            m.length !== y.length && console.log("unexpected line number change");
            for (let w = 0; w < m.length; ++w) {
              let D = m[w], x = y[w];
              x && D.setAttribute("data-line", x.getAttribute("data-line"));
            }
            return false;
          }
          return o.tagName === "DETAILS" && s.tagName === "DETAILS" && o.hasAttribute("open") && s.setAttribute("open", ""), true;
        }, addChild: (o, s) => {
          o.appendChild(s), s instanceof HTMLElement && ye(s);
        } });
      }
      ++A, window.dispatchEvent(new CustomEvent("vscode.markdown.updateContent")), _e();
      break;
    }
  }
}, false);
document.addEventListener("dblclick", (e) => {
  if (!b.settings.doubleClickToSwitchToEditor) return;
  for (let n = e.target; n; n = n.parentNode) if (n.tagName === "A") return;
  let t = e.pageY, r = de(t, A);
  typeof r == "number" && !isNaN(r) && X.postMessage("didClick", { line: Math.floor(r) });
});
var xt = ["http:", "https:", "mailto:", "vscode:", "vscode-insiders:"];
document.addEventListener("click", (e) => {
  if (!e) return;
  let t = e.target;
  for (; t; ) {
    if (t.tagName && t.tagName === "A" && t.href) {
      if (t.getAttribute("href").startsWith("#")) return;
      let r = t.getAttribute("data-href");
      if (!r && (r = t.getAttribute("href"), xt.some((n) => r.startsWith(n)))) return;
      if (!/^[a-z\-]+:/i.test(r)) {
        X.postMessage("openLink", { href: r }), e.preventDefault(), e.stopPropagation();
        return;
      }
      return;
    }
    t = t.parentNode;
  }
}, true);
window.addEventListener("scroll", Be(() => {
  if (We(), H > 0) H -= 1;
  else {
    let e = de(window.scrollY, A);
    typeof e == "number" && !isNaN(e) && X.postMessage("revealLine", { line: e });
  }
}, 50));
function We() {
  L.scrollProgress = window.scrollY / document.body.clientHeight, z.setState(L);
}
function Ve(e, t) {
  let r = ["open"];
  if (e.isEqualNode(t)) return true;
  if (e.tagName !== t.tagName || e.textContent !== t.textContent) return false;
  let n = [...e.attributes].filter((o) => !r.includes(o.name)), i = [...t.attributes].filter((o) => !r.includes(o.name));
  if (n.length !== i.length) return false;
  for (let o = 0; o < n.length; ++o) {
    let s = n[o], m = i[o];
    if (s.name !== m.name || s.value !== m.value && s.name !== "data-line") return false;
  }
  let a = Array.from(e.children), d = Array.from(t.children);
  return a.length === d.length && a.every((o, s) => Ve(o, d[s]));
}
function ye(e) {
  let t = ["type", "src", "nonce", "noModule", "async"], r = e.tagName === "SCRIPT" ? [e] : Array.from(e.getElementsByTagName("script"));
  for (let n of r) {
    if (!(n instanceof HTMLElement)) continue;
    let i = document.createElement("script"), a = n.innerText;
    i.text = a;
    for (let d of t) {
      let o = n.getAttribute && n.getAttribute(d);
      o && i.setAttribute(d, o);
    }
    n.insertAdjacentElement("afterend", i), n.remove();
  }
}
