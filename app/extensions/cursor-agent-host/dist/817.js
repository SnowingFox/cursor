"use strict";
exports.id = 817, exports.ids = [817], exports.modules = { 52817: (e, t, s) => {
  s.d(t, { createIdePluginsActivate: () => c });
  var o = s(63553), r = s(70857), i = s(91398), n = s(34102);
  async function c(e2) {
    const t2 = [];
    let s2;
    const c2 = new Promise((e3) => {
      s2 = e3;
    });
    let a;
    (0, n.Vo)(e2.context, c2);
    const l = new Promise((e3) => {
      a = e3;
    });
    let d;
    (0, n.zZ)(e2.context, l);
    const p = new Promise((e3) => {
      d = e3;
    });
    (0, n.zT)(e2.context, p), (0, n.Vs)(e2.context), (0, n.Pd)(e2.context), (0, n.FJ)(e2.context);
    const u = Promise.resolve(e2.gitExecutor), { pluginsService: g, refreshPluginHooks: x } = await (0, n.Dx)({ workspacePaths: [...e2.workspacePaths], getThirdPartyExtensibilityEnabled: () => i.cursor.getThirdPartyExtensibilityEnabled(), getAllowUserLocalPluginImports: () => i.cursor.getAllowUserLocalPluginImports(), deactivateTasks: t2, context: e2.context, gitExecutorPromise: u });
    x(), s2?.({ pluginsService: g, deleteDirectoryToTrash: n.WP, userHomeDirectory: r.homedir() }), a?.({ pluginsService: g, cacheManager: new o.WCg(r.homedir()), userHomeDirectory: r.homedir() }), d?.({ pluginsService: g, saveDirtyDocumentsUnder: n.e6 });
    const m = (0, n.x7)({ appendLine: e2.appendLine, extensionPath: e2.context.extensionPath });
    return t2.push(() => m.dispose()), { pluginsService: g, snapshot: { providerRegistered: true, skillCommandsRegistered: true, managedSkillsRefreshScheduled: true }, dispose: () => {
      for (const e3 of t2.splice(0).reverse()) e3();
    } };
  }
} };
