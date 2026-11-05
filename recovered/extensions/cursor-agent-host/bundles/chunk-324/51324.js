// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/324.js sha256:deebd3d213b2dd7063cfec97d1a2adadd44d35981e823f23f5be343557dc5853
// module: 51324 range:73..947
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51324: (r, t, e) => {
  e.d(t, { pushExecActivationRequestContext: () => n });
  var o = e(70857), s = e(25925), i = e(68388), c = e(91398);
  function n(r2) {
    const t2 = (0, i.yn)(r2.workspacePath, o.homedir()), e2 = (function() {
      let r3 = c.env.shell ?? "";
      try {
        const t3 = c.workspace.getConfiguration("terminal.integrated"), e3 = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", o2 = t3.get(`defaultProfile.${e3}`);
        if (o2) {
          const s2 = t3.get(`profiles.${e3}`), i2 = s2?.[o2]?.path;
          i2 && (r3 = i2);
        }
      } catch {
      }
      return r3;
    })();
    c.cursor.pushMcpWorkspaceProjectDir(r2.projectDir), c.cursor.pushEnvStaticData({ osVersion: `${o.platform()} ${o.release()}`, shell: (0, s.G6)(e2), projectDir: r2.projectDir, isWorkingDirHomeDir: t2 });
  }
}