// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/821.js sha256:7e6c546288a198f5baec24c804295e7cbf0e61824eadb288d6b669f6d8f3b30e
// module: 12746 range:78..1684
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12746: (e, t, s) => {
  s.d(t, { FD: () => l, dn: () => h, resolveSandboxHelperPath: () => u });
  var i = s(79896), o = s(16928), r = s(25925), n = s(91398), a = s(30306);
  function l() {
    let e2 = n.env.shell ?? "";
    try {
      const t2 = n.workspace.getConfiguration("terminal.integrated"), s2 = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", i2 = t2.get(`defaultProfile.${s2}`);
      if (i2) {
        const o2 = t2.get(`profiles.${s2}`), r2 = o2?.[i2]?.path;
        r2 && (e2 = r2);
      }
    } catch (e3) {
      a.gW.warn(`Failed to read terminal config: ${e3}`);
    }
    return e2;
  }
  function u(e2) {
    if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return;
    const t2 = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", s2 = process.resourcesPath, r2 = o.dirname(process.execPath), n2 = [o.join(e2, "../../resources/helpers", t2)];
    s2 && (n2.push(o.join(s2, "app", "resources", "helpers", t2)), n2.push(o.join(s2, "resources", "helpers", t2))), n2.push(o.join(r2, "resources", "helpers", t2)), n2.push(o.join(r2, "resources", "app", "resources", "helpers", t2)), "1" === process.env.VSCODE_DEV && n2.push(o.join(e2, "../../node_modules/@anysphere/sandbox-helper/bin", t2));
    for (const e3 of n2) try {
      if (i.existsSync(e3)) return e3;
    } catch {
    }
  }
  function h(e2) {
    return void 0 !== e2.helperPath && (!!(0, r.yo)() && ((0, r.St)({ sandboxBinaryPath: e2.helperPath, workspaceReadEnabled: e2.workspaceReadEnabled }), true));
  }
}