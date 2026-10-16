"use strict";
exports.id = 349, exports.ids = [349], exports.modules = { 9349: (s, r, e) => {
  e.d(r, { configureRipgrepWithStartupDiagnostics: () => d });
  var t = e(79896), i = e(16928), n = e(37949), a = e(25925), o = e(91398);
  const c = (0, n.h)("cursor-agent-host");
  function d(s2, r2) {
    const e2 = o.cursor.rgPath;
    if (e2) {
      const n2 = (0, t.existsSync)(e2), d2 = (0, i.dirname)(e2), p = (0, t.existsSync)(d2);
      (0, a.J)(e2);
      const g = { rgPath: e2, rgPathExists: n2, rgParentDirExists: p, platform: process.platform, arch: process.arch, nodeVersion: process.version, extensionPath: r2.extensionPath, execPath: process.execPath, remoteName: o.env.remoteName, uiKind: o.env.uiKind === o.UIKind.Desktop ? "desktop" : "web" };
      if (n2) try {
        const s3 = (0, t.statSync)(e2);
        g.rgFileSize = s3.size, g.rgFileMode = s3.mode.toString(8), g.rgIsFile = s3.isFile();
      } catch (s3) {
        g.rgStatError = s3 instanceof Error ? s3.message : String(s3);
      }
      const x = 50;
      if (p) try {
        g.parentDirContents = (0, t.readdirSync)(d2).slice(0, x);
      } catch (s3) {
        g.parentDirListError = s3 instanceof Error ? s3.message : String(s3);
      }
      const h = (0, i.dirname)(d2);
      try {
        g.grandparentDirExists = (0, t.existsSync)(h), g.grandparentDirExists && (g.grandparentDirContents = (0, t.readdirSync)(h).slice(0, x));
      } catch (s3) {
        g.grandparentDirError = s3 instanceof Error ? s3.message : String(s3);
      }
      const m = "node_modules.asar.unpacked";
      if (e2.includes(m)) {
        const s3 = e2.split(m)[0];
        if (s3) {
          try {
            g.asarExists = (0, t.existsSync)(s3.concat("node_modules.asar"));
          } catch {
            g.asarExists = "check_failed";
          }
          const r3 = s3.concat(m);
          try {
            if (g.asarUnpackedDirExists = (0, t.existsSync)(r3), g.asarUnpackedDirExists) {
              const s4 = (0, i.join)(r3, "@vscode", "ripgrep");
              g.ripgrepPkgDirExists = (0, t.existsSync)(s4);
            }
          } catch {
            g.asarUnpackedDirExists = "check_failed";
          }
        }
      }
      c.info(s2, "rg_diagnostics.startup", g), n2 || c.warn(s2, "rg_diagnostics.startup.missing_binary", g);
    } else c.error(s2, "rg_diagnostics.startup.no_path", { platform: process.platform, arch: process.arch, nodeVersion: process.version, extensionPath: r2.extensionPath, execPath: process.execPath, remoteName: o.env.remoteName, uiKind: o.env.uiKind === o.UIKind.Desktop ? "desktop" : "web" });
  }
} };
