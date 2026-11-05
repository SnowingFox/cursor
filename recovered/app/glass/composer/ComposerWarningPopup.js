// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerWarningPopup.js range:29849603..29852143
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, pi, gs, Di, aS, vo, S9e, FS, F6, iye, Jlt, lzt, y9e, XUk
// wrapper-init: zEl
// hoisted-owner: grpcPluginsProvider.js (app-out-vs-workbench-workbench-glass-main-js:5302); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

zEl = L({ "ComposerWarningPopup.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), Di(), aS(), vo(), S9e(), FS(), F6(), iye(), Jlt(), lzt(), y9e(), XUk(), Gaf = wt('<div class="flex gap-1.5 items-start flex-wrap">'), qaf = wt('<div class="text-[12px] select-text [color:var(--vscode-foreground)] min-w-0">'), zaf = wt("<div class=composer-warning-popup-children>"), Vaf = wt("<div><div>"), Bfs = wt("<div>"), Kaf = wt("<div class=composer-error-title>"), Yaf = wt('<div class="flex gap-1 items-center flex-1">'), Ufs = wt("<span class=composer-warning-button-text>"), Xaf = wt('<div class="flex flex-col gap-4 composer-warning-modal-content"tabindex=-1>'), Zaf = wt("<div tabindex=-1>"), Qaf = wt('<div class="absolute inset-0 z-10 pointer-events-none">'), Jaf = Ok(_Me);
} });
function hMn(t) {
  if (vl.localMode) return __lcpMarketplaceProvider;
  return { async listMarketplacePlugins(e) {
    return await (await t.dashboardClient()).listMarketplacePlugins(new X0t(e), { headers: vh(Ai()) });
  }, async listMarketplaces(e) {
    return await (await t.dashboardClient()).listMarketplaces(new tki(e), { headers: vh(Ai()) });
  }, async listUserPluginInstalls(e) {
    return await (await t.dashboardClient()).listUserPluginInstalls(new bKr(e), { headers: vh(Ai()) });
  }, async getPlugin(e) {
    return await (await t.dashboardClient()).getPlugin(new e8a(e), { headers: vh(Ai()) });
  }, async installUserPlugin(e) {
    return await (await t.dashboardClient()).installUserPlugin(new lot(e), { headers: vh(Ai()) });
  }, async installTeamPlugin(e) {
    return await (await t.dashboardClient()).installTeamPlugin(new fTn(e), { headers: vh(Ai()) });
  }, async updateUserPluginInstall(e) {
    return await (await t.dashboardClient()).updateUserPluginInstall(new o8a(e), { headers: vh(Ai()) });
  }, async uninstallUserPlugin(e) {
    return await (await t.dashboardClient()).uninstallUserPlugin(new yKr(e), { headers: vh(Ai()) });
  }, async uninstallTeamPlugin(e) {
    return await (await t.dashboardClient()).uninstallTeamPlugin(new SKr(e), { headers: vh(Ai()) });
  }, async addMarketplace(e) {
    return await (await t.dashboardClient()).addMarketplace(new f8a(e), { headers: vh(Ai()) });
  }, async removeMarketplace(e) {
    return await (await t.dashboardClient()).removeMarketplace(new wKr(e), { headers: vh(Ai()) });
  }, async registerMarketplaceAndPlugins(e) {
    return await (await t.dashboardClient()).registerMarketplaceAndPlugins(new rGt(e), { headers: vh(Ai()) });
  } };
}
