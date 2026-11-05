// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KeybindingRecorder.js range:29264484..29269117
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.095Z
// wrapper: kJg deps:8 [E, at, pi, ABt, Di, vo, bJg, y6k]
// declarations: S6k, wJg (segment truncated)
// anchors: (none)
// group: settings
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
kJg = L({ "KeybindingRecorder.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), ABt(), Di(), vo(), bJg(), y6k(), SJg = wt("<div>");
} });
function S6k(t) {
  const e = Gr(), n = N6(t.actionId), [i, r] = Wt(false), [s, o] = Wt(false), [a, l] = Wt(null), [c, u] = Wt(false), d = vt(() => t.showAsButton ? "cursor-pointer text-[12px] leading-[16px] text-[var(--vscode-terminal-ansiCyan)] px-1 py-0.5 rounded border border-solid border-b-2 active:border-b hover:border-b-[3px] transition-[border-bottom-width] duration-100 ease-in-out" : "text-[12px] leading-[150%] px-1 py-0.5 rounded bg-editor-range-highlight-background text-[var(--vscode-terminal-ansiCyan)] transition-opacity duration-100"), h = vt(() => i() ? "border-[var(--vscode-terminal-ansiCyan)]" : "border-[color-mix(in_srgb,var(--vscode-terminal-ansiCyan)_20%,var(--vscode-keybindingLabel-border)_80%)]"), p = vt(() => n() || i() ? "opacity-80 hover:opacity-100" : "opacity-20 hover:opacity-60"), g = () => {
    r((y) => !y), i() ? u(false) : u(true);
  }, f = vt(() => t.showAsButton ? g : void 0), _ = async (y) => {
    o(true);
    const S = y.finalKeybinding?.toLowerCase().replace("backspace", "⌫").replace("enter", "↵");
    l(S === "tab" ? "Tab" : S?.toUpperCase() ?? null);
    try {
      if (!e) return;
      const k = y.finalKeybindingUserSetting || y.currentKeysUserSetting;
      if (!k) {
        o(false), l(null), r(false);
        return;
      }
      const C = t.actionId, T = e.keybindingService, I = e.keybindingEditingService;
      if (!T || !I) {
        e.notificationService?.error("Keybinding services not available");
        return;
      }
      try {
        if (T.lookupKeybinding(C)) {
          const P = T.getKeybindings().filter((M) => M.command === C);
          if (P.length > 0) {
            const M = P[0];
            await I.editKeybinding(M, k, M.when?.serialize());
          } else {
            const M = T.getKeybindings().find((O) => O.command === C)?.when?.serialize();
            await I.addKeybindingRule(C, k, M);
          }
        } else await I.addKeybindingRule(C, k);
        n();
      } catch (A) {
        console.error("Error saving keybinding:", A), e.commandService && e.notificationService?.info(`Please add the keybinding manually for action: ${C} = ${k}. Error: ${A instanceof Error ? A.message : String(A)}`);
      }
    } catch (k) {
      console.error("Failed to save keybinding:", k), e.notificationService?.error(`Failed to save keybinding: ${k instanceof Error ? k.message : String(k)}`);
    } finally {
      r(false), setTimeout(() => {
        o(false), l(null);
      }, 300);
    }
  }, b = async () => {
    if (!(!n() || !e)) try {
      const y = t.actionId, S = e.keybindingService, k = e.keybindingEditingService;
      if (!S || !k) {
        e.notificationService?.error("Keybinding services not available");
        return;
      }
      const C = S.getKeybindings().filter((T) => T.command === y);
      C.length > 0 && (await k.removeKeybinding(C[0]), n());
    } catch (y) {
      console.error("Failed to remove keybinding:", y);
    }
  };
  return (() => {
    var y = CJg();
    return BM(y, "click", f()), y.style.setProperty("font-feature-settings", "'cv05' on"), Le(y, Ee(Ut, { get when() {
      return zr(() => !i())() && !s();
    }, get children() {
      return n() ?? (t.showAsButton ? "Keybind" : "Add");
    } }), null), Le(y, Ee(Ut, { get when() {
      return s();
    }, get children() {
      return a();
    } }), null), Le(y, Ee(Ut, { get when() {
      return i();
    }, get children() {
      var S = wJg(), k = S.firstChild, C = k.firstChild;
      return Le(S, Ee(yJg, { get confirmOnBlur() {
        return t.confirmOnBlur ?? true;
      }, onKeybindingRecorded: (T) => {
        r(false), u(false), _(T);
      }, onCancel: () => {
        r(false), u(false);
      }, children: (T) => (T.currentKeys && c() ? u(false) : !T.currentKeys && !c() && i() && u(true), (() => {
        var I = TJg();
        return Le(I, Ee(e2, { get children() {
          return [Ee(Bp, { get when() {
            return !n() && !T.currentKeys;
          }, children: "Press" }), Ee(Bp, { when: true, get children() {
            return T.currentKeys ?? n();
          } })];
        } })), xn(() => Er(I, c() ? "hard-pulse" : "")), I;
      })()) }), k), k.addEventListener("mousedown", (T) => {
        T.stopImmediatePropagation(), i() && n() && b(), r(false), u(false);
      }), xn(() => Er(C, `${Gn.asClassName(yt.xTwo)} !text-[10px]`)), S;
    } }), null), xn(() => Er(y, `${d()} ${h()} ${p()} ${t.class || ""} relative`)), y;
  })();
}
var wJg, CJg, TJg,
