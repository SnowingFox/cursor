// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolbarSimpleButton.js range:29015374..29018366
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, IL, oye
// wrapper-init: dOk
// hoisted-owner: ComposerBarControlButtons.js (app-out-vs-workbench-workbench-glass-main-js:5023); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

dOk = L({ "ComposerToolbarSimpleButton.js"() {
  "use strict";
  E(), at(), at(), IL(), oye(), ywl = (t) => {
    const { showHover: e, hideHover: n } = pme({ delay: 300, additionalClasses: ["chat-hover-tooltip"] });
    return Ee(hp, Zy(t, { get onMouseEnter() {
      return t.hintText ? (i) => e(i, t.hintText) : void 0;
    }, get onMouseLeave() {
      return t.hintText ? n : void 0;
    }, get style() {
      return { "font-size": "12px", padding: "0px 4px", ...t.style };
    }, get tabFocusable() {
      return t.tabFocusable;
    }, get setRef() {
      return t.setRef || ((i) => {
      });
    }, smallSpinner: true }));
  };
} });
function sXg(t) {
  const e = Gr();
  return (() => {
    var n = oXg();
    return n.style.setProperty("display", "flex"), n.style.setProperty("justify-content", "center"), n.style.setProperty("align-items", "center"), n.style.setProperty("gap", "2px"), Le(n, Ee(ywl, { type: "secondary", style: { width: "18px", height: "18px", padding: "0px", background: "transparent" }, get codicon() {
      return yt.add;
    }, onMouseDown: (i) => {
      i.stopImmediatePropagation();
    }, class: "composer-bar-control-button", onClick: () => {
      e.commandService.executeCommand(dbe, { view: "pane", source: "composer_header" });
    } }), null), Le(n, Ee(ywl, { type: "secondary", style: { width: "18px", height: "18px", padding: "0px", background: "transparent" }, class: "composer-bar-control-button", get codicon() {
      return yt.ellipsis;
    }, onMouseDown: (i) => {
      i.stopImmediatePropagation();
    }, onClick: (i) => {
      i.stopImmediatePropagation(), e.contextMenuService.showContextMenu({ getAnchor: () => i.target, getActions: () => [{ id: Jne, label: "Show History", tooltip: "Show History", class: "show-composer-history", enabled: true, run: () => {
        e.commandService.executeCommand(Jne, t.composerId);
      } }, new Kh(), { id: OHr, label: "Open as Editor", tooltip: "Open as Editor", class: "open-composer-as-editor", enabled: true, run: () => {
        e.commandService.executeCommand(OHr, t.composerId);
      } }, { id: LHr, label: "Open as Pane", tooltip: "Open as Pane", enabled: true, class: "open-composer-as-pane", run: () => {
        e.commandService.executeCommand(LHr, t.composerId);
      } }, new Kh(), { id: "reset-composer-position", label: "Reset Position", tooltip: "Reset Composer Position", enabled: true, class: "reset-composer-position", run: () => {
        t.setPosition(null);
      } }, new Kh(), { id: "open-composer-settings", label: "Open Composer Settings", tooltip: "Open Composer Settings", enabled: true, class: "open-composer-settings", run: () => {
        e.commandService.executeCommand(vP, "chat", "cursor-settings-chat-composer");
      } }, { id: "collapse-composer", label: "Collapse", tooltip: "Collapse Composer", enabled: true, class: "collapse-composer", run: () => {
        t.setShouldCollapseMessages(true);
      } }] });
    } }), null), n;
  })();
}
var oXg, 