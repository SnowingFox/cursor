"use strict";
exports.id = 746, exports.ids = [746], exports.modules = { 12746: (e, r, s) => {
  s.d(r, { FD: () => i, dn: () => l, resolveSandboxHelperPath: () => c });
  var o = s(79896), n = s(16928), t = s(25925), a = s(91398), p = s(30306);
  function i() {
    let e2 = a.env.shell ?? "";
    try {
      const r2 = a.workspace.getConfiguration("terminal.integrated"), s2 = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", o2 = r2.get(`defaultProfile.${s2}`);
      if (o2) {
        const n2 = r2.get(`profiles.${s2}`), t2 = n2?.[o2]?.path;
        t2 && (e2 = t2);
      }
    } catch (e3) {
      p.gW.warn(`Failed to read terminal config: ${e3}`);
    }
    return e2;
  }
  function c(e2) {
    if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return;
    const r2 = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", s2 = process.resourcesPath, t2 = n.dirname(process.execPath), a2 = [n.join(e2, "../../resources/helpers", r2)];
    s2 && (a2.push(n.join(s2, "app", "resources", "helpers", r2)), a2.push(n.join(s2, "resources", "helpers", r2))), a2.push(n.join(t2, "resources", "helpers", r2)), a2.push(n.join(t2, "resources", "app", "resources", "helpers", r2)), "1" === process.env.VSCODE_DEV && a2.push(n.join(e2, "../../node_modules/@anysphere/sandbox-helper/bin", r2));
    for (const e3 of a2) try {
      if (o.existsSync(e3)) return e3;
    } catch {
    }
  }
  function l(e2) {
    return void 0 !== e2.helperPath && (!!(0, t.yo)() && ((0, t.St)({ sandboxBinaryPath: e2.helperPath, workspaceReadEnabled: e2.workspaceReadEnabled }), true));
  }
} };
