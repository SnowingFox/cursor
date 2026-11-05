// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SystemNotificationsSection.js range:39331032..39334365
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.039Z
XcC = L({ "SystemNotificationsSection.js"() {
  "use strict";
  E(), at(), at(), at(), FS(), mk(), aZv = wt('<div class="flex flex-col gap-4 p-4"><div class="flex gap-2 flex-wrap items-center">');
} });
function ZcC() {
  const t = Gr(), [e, n] = Wt(""), i = jp();
  i.set(PLs, false), i.set(g6n, null);
  const r = Ca(i, PLs), s = (y) => i.set(PLs, y), [o, a] = Wt("");
  let l = null, c = null, u = false, d = null;
  const h = (y) => new Promise((S) => {
    d = () => S();
    const k = setTimeout(() => {
      d = null, i.set(g6n, null), S();
    }, y);
    i.set(g6n, k);
  }), p = () => {
    const y = i.get(g6n);
    y !== null && (clearTimeout(y), u || i.set(g6n, null));
    const S = d;
    d = null, S?.();
  }, g = async () => {
    if (r()) return;
    const y = await t.aiService.aiClient();
    if (u) return;
    s(true), n(`Connection started...
`);
    const S = 600 * 1e3;
    c = new nPe(S), l = new AbortController();
    const k = l.signal;
    try {
      n((I) => I + `Pushing 1
`), c.push(new Zmn({ message: "Hello 1" }));
      const C = y.testBidi(c, { signal: k });
      n((I) => I + `Pushing 2
`), c.push(new Zmn({ message: "Hello 2" }));
      let T = 0;
      for await (const I of C) {
        if (u || (n((A) => A + `Received: ${I.message}
`), T++, await h(2e3), u)) break;
        T < 5 && (n((A) => A + `Pushing ${T + 3}
`), c.push(new Zmn({ message: `Hello ${T + 3}` })));
      }
    } catch (C) {
      C.name !== "AbortError" && !u && n((T) => T + `Error: ${C.message}
`);
    } finally {
      p(), c?.end(), c = null, l = null, u || s(false);
    }
  }, f = () => {
    r() && (p(), l?.abort(), l = null, s(false), n((y) => y + `Connection cancelled.
`));
  }, _ = () => {
    if (!r() || !l || !c) return;
    const y = o();
    c.push(new Zmn({ message: y })), n((S) => S + `Sent: ${y}
`);
  };
  On(() => {
    u = true, p(), l && l.abort();
  });
  const b = () => ({ ...tIt(), namespace: "test", onError: (y) => {
    console.error(y);
  } });
  return (() => {
    var y = cZv(), S = y.firstChild, k = S.nextSibling, C = k.firstChild, T = C.nextSibling;
    return k.style.setProperty("display", "flex"), k.style.setProperty("flex-direction", "column"), k.style.setProperty("gap", "10px"), Le(C, Ee(hp, { title: "Start Request", get disabled() {
      return r();
    }, onClick: g }), null), Le(C, Ee(hp, { title: "Cancel Request", get disabled() {
      return !r();
    }, onClick: f }), null), T.style.setProperty("display", "flex"), T.style.setProperty("gap", "10px"), Le(T, Ee(tYt, Zy(Cnt, { maxHeight: 150, scrollableStyle: { border: "1px solid var(--vscode-input-border)", "border-radius": "6px", padding: "0px" }, innerContainerStyle: { padding: "0px 0.5rem" }, placeholder: "Type a long message here...", onSubmit: () => _(), supportsGit: false, setText: (I) => a(I), supportsLink: false, useArrowsForHistory: false, source: "simple_input_box", editorConfig: b })), null), Le(T, Ee(hp, { title: "Send", get disabled() {
      return !r() || !o();
    }, onClick: _ }), null), Le(k, Ee(ME, { style: { height: "200px", border: "1px solid var(--vscode-input-border)" }, get children() {
      var I = lZv();
      return I.style.setProperty("margin", "10px"), I.style.setProperty("white-space", "pre-wrap"), Le(I, e), I;
    } }), null), y;
  })();
}
var lZv, cZv, PLs, g6n, 