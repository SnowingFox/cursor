// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InlineAgentTabs.js range:32930696..32935339
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.210Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, InlineAgentTabs.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, InlineAgentTabs.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
QPw = L({ "InlineAgentTabs.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), ZPw(), I7f = wt("<div class=inline-agent-tabs__project-title>"), x7f = wt('<div class="inline-agent-tabs inline-agent-tabs--header-host part auxiliarybar auxiliary-bar-show-agent-tabs"><div class="title inline-agent-tabs__title auxiliary-bar-title--agent-mode"><div class=inline-agent-tabs__slot>'), A7f = ".monaco-workbench .part.auxiliarybar > .title .composite-bar-container", R7f = "inlineAgentTabsHostChanged", Rws = "inline-agent-tabs-scrolled", X3n = "inline-agent-tabs-toggle-right", hBl = "inline-agent-tabs-gradient-enabled", P7f = typeof ResizeObserver < "u", Q3n = (t) => {
    if (!t) return false;
    const e = t.ownerDocument;
    return !!(t.isConnected && e && e.contains(t));
  }, pBl = (t) => {
    const e = t ?? $6?.composite;
    if (!e) return;
    const n = e.querySelector(".composite-bar") ?? e;
    Q3n(n) && n.dispatchEvent(new CustomEvent(R7f, { bubbles: true }));
  }, mBl = () => {
    if (!$6) return;
    $6.composite.querySelectorAll(".composite-bar-action-tab .remove-button").forEach((n) => {
      n.style.opacity = "0", n.style.pointerEvents = "none";
    });
  }, M7f = (t) => {
    const e = t.getBoundingClientRect().width;
    if (Number.isFinite(e) && e > 0) return e;
    const n = t.parentElement;
    if (n) {
      const i = n.getBoundingClientRect().width;
      if (Number.isFinite(i) && i > 0) return i;
    }
    if ($6) {
      const i = $6.parent.getBoundingClientRect().width;
      if (Number.isFinite(i) && i > 0) return i;
    }
    return e;
  }, Xct = (t) => !!($6 && t && $6.host === t), Pws = (t) => {
    if (!$6 || t && $6.host !== t) return;
    const e = $6.composite;
    e.style.removeProperty("width"), e.style.removeProperty("maxWidth"), e.style.removeProperty("minWidth");
  }, xNi = (t) => {
    Z3n && (t && INi && t !== INi || (Z3n.disconnect(), Z3n = void 0, INi = void 0));
  }, Mws = (t) => {
    if (!Xct(t)) return;
    const e = $6.composite, n = M7f(t);
    if (!Number.isFinite(n) || n <= 0) {
      e.style.removeProperty("width"), e.style.removeProperty("maxWidth"), e.style.removeProperty("minWidth"), pBl();
      return;
    }
    e.style.width = `${n}px`, e.style.maxWidth = "100%", e.style.minWidth = "0px", pBl();
  }, gBl = (t) => {
    if (Xct(t)) {
      if (Pws(t), !P7f) {
        Mws(t);
        return;
      }
      (!Z3n || INi !== t) && (xNi(), Z3n = new ResizeObserver(() => {
        if (!Xct(t)) {
          xNi(t);
          return;
        }
        Mws(t);
      }), INi = t, Z3n.observe(t)), Mws(t);
    }
  }, D7f = () => {
    const t = document.querySelectorAll(A7f);
    for (let e = t.length - 1; e >= 0; e--) {
      const n = t[e];
      if (n.querySelector(".monaco-action-bar .action-item")) return n;
    }
    return t.length > 0 ? t[t.length - 1] : null;
  }, fBl = (t) => {
    if (!Q3n(t)) return false;
    if ($6) if (!Q3n($6.composite)) Dws(void 0);
    else return $6.host === t || (t.appendChild($6.composite), $6.host = t), true;
    const e = D7f();
    if (!e) return false;
    const n = e.parentElement;
    if (!n) return false;
    const i = document.createElement("div");
    return i.className = "inline-agent-tabs__placeholder", n.insertBefore(i, e), t.appendChild(e), $6 = { host: t, placeholder: i, parent: n, composite: e }, _Bl(true), true;
  }, vBl = () => document.querySelector(".monaco-workbench .part.auxiliarybar > .title"), N7f = "inline-agent-tabs-detached", _Bl = (t) => {
    const e = vBl();
    e && e.classList.toggle(N7f, t);
  }, L7f = () => {
    if (!$6) return false;
    const t = document.querySelector(".monaco-workbench .part.auxiliarybar > .title");
    if (!t) return false;
    const e = t.querySelectorAll(".composite-bar-container");
    for (const n of e) if (n !== $6.composite) return true;
    return false;
  }, Dws = (t, e) => {
    if (!$6 || t && $6.host !== t) return;
    const { placeholder: n, parent: i, composite: r } = $6, s = e?.restore !== false, o = L7f(), a = r.querySelector(".composite-bar"), l = a && a.children.length > 0;
    if (s && !o && l) {
      const c = n.parentElement, u = c ?? i ?? vBl();
      u ? c ? u.replaceChild(r, n) : (u.appendChild(r), n.remove()) : (i.appendChild(r), n.remove());
    } else n.remove(), Q3n(r) && r.remove(), _Bl(false);
    $6 = void 0;
  };
} });
function JPw(t) {
  const { value: e, isLoading: n } = CFl({ cacheKey: "git:isGithubRepo", fetchValue: async () => (t.hasGitContextProvider() || await t.waitForGitContextProvider(), await t.isGithubRepo()), defaultValue: false });
  return { isGithubRepo: e, isLoading: n };
}
