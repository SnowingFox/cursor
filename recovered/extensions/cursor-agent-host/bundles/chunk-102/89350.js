// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/102.js sha256:ba96489ea8fed187896214fadda2a1d88d6f8d3d1b4a382574170d1ba89198cd
// module: 89350 range:73836..74599
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89350: (e, t, i) => {
  i.d(t, { w: () => o });
  var r = i(11762);
  function n(e2, t2, i2) {
    e2.appendLine?.(`${t2}: ${String(i2)}`);
  }
  async function o(e2) {
    const t2 = async () => {
      if (void 0 !== e2.extensionPath && 0 !== e2.extensionPath.length) try {
        await e2.ensureCanvasSdkMirror({ extensionPath: e2.extensionPath });
      } catch (t3) {
        if ((0, r.t6)(t3)) return;
        n(e2, "Canvas SDK mirror failed", t3);
      }
    };
    try {
      if (!e2.getAuthToken()) return void await t2();
      const i2 = await e2.getManagedSkills();
      await e2.syncBuiltinSkills(e2.ctx, { managedSkills: i2.skills ?? [] }), await t2();
    } catch (i2) {
      n(e2, "Failed to sync builtin skills", i2), await t2();
    }
  }
}