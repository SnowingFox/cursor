// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GlassHumanMessageStopButton.react.js range:31525661..31528568
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: H3f -> glassHumanMessageStopButtonModuleInit
// hoisted-owner: ComposerPlanExecutionRow.react.js (app-out-vs-workbench-workbench-glass-main-js:5901); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: H3f -> glassHumanMessageStopButtonModuleInit; G3f -> ComposerPlanExecutionRow (apply-map AST equivalent)

var glassHumanMessageStopButtonModuleInit = L({
  "GlassHumanMessageStopButton.react.js"() {
    "use strict";

    E(), Mt();
  }
});
import { useEffect as Tyw, useState as W3f } from "./react-runtime/react/esm-index-production.js";
import { jsx as SKe } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ComposerPlanExecutionRow({
  isGlass: t,
  isSubagent: e,
  isSticky: n,
  loadTitle: i,
  onRedo: r,
  onRestore: s,
  onStop: o,
  plan: a,
  showRestoreButton: l,
  showStopButton: c,
  stopKeybinding: u
}) {
  const [d, h] = W3f(),
    [p, g] = W3f(false),
    f = k => {
      g(true), k().finally(() => g(false));
    };
  Tyw(() => {
    const k = a.planUri;
    if (!VGm({
      explicitTitle: a.explicitPlanTitle
    }) || !k) return;
    let T = false;
    return i(k).then(I => {
      T || h({
        uri: k,
        title: I
      });
    }).catch(() => {
      T || h({
        uri: k,
        title: void 0
      });
    }), () => {
      T = true;
    };
  }, [i, a.explicitPlanTitle, a.planUri]);
  const _ = zGm({
      explicitTitle: a.explicitPlanTitle,
      resolvedTitle: d !== void 0 && d.uri === a.planUri ? d.title : void 0
    }),
    b = a.isCheckedOutToThisBubble && !e ? SKe(xs, {
      content: "Restore edits to the latest checkpoint",
      children: SKe("button", {
        "aria-label": "Restore edits to the latest checkpoint",
        className: "opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-100",
        disabled: p,
        onClick: () => f(r),
        style: {
          all: "unset",
          cursor: "pointer",
          marginBottom: "6px",
          padding: "0px 8px"
        },
        type: "button",
        children: SKe(LC, {
          action: "Redo checkpoint",
          loading: p
        })
      })
    }) : void 0,
    y = c || l ? p ? SKe(Yg, {
      indeterminate: true,
      size: "sm",
      variant: "ring"
    }) : c && t ? SKe($3f, {
      onClick: o,
      shortcut: u
    }) : SKe(xs, {
      content: c ? `Stop ${u ?? ""}`.trimEnd() : "Restore Checkpoint",
      children: SKe("button", {
        "aria-label": c ? `Stop ${u ?? ""}`.trimEnd() : "Restore Checkpoint",
        className: `anysphere-icon-button bg-[transparent] border-none text-[var(--cursor-text-primary)] flex w-4 items-center justify-center ${c ? "leading-[17px] px-1.5 h-[26px] box-border shrink-0 stop-button" : "box-border shrink-0 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded-[5px] !w-[20px] !h-[20px] restore-button"}`,
        "data-variant": c ? "background" : void 0,
        onClick: k => {
          k.stopPropagation(), k.nativeEvent.stopImmediatePropagation(), c ? o() : f(s);
        },
        style: {
          width: "20px",
          height: "20px"
        },
        type: "button",
        children: SKe("span", {
          "aria-hidden": true,
          className: `codicon ${c ? "codicon-debug-stop" : "codicon-restore"} !text-[16px]`
        })
      })
    }) : void 0;
  return SKe(rtk, {
    actionControl: y === void 0 ? void 0 : c && t ? SKe("span", {
      "data-glass-plan-stop-slot": true,
      style: {
        alignItems: "center",
        display: "flex",
        height: "24px",
        justifyContent: "center",
        width: "24px"
      },
      children: y
    }) : y,
    checkedOut: a.isCheckedOutToThisBubble,
    executionLabel: a.executionLabel,
    redoControl: b,
    sticky: n,
    title: _,
    todos: a.todos.map(YGm),
    variant: t ? "glass" : "classic"
  });
}
