// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/102.js sha256:ba96489ea8fed187896214fadda2a1d88d6f8d3d1b4a382574170d1ba89198cd
// module: 11762 range:73..1509
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11762: (e, t, i) => {
  i.d(t, { I_: () => u, t6: () => l });
  var r = i(51455), n = i(91105), o = i(76760);
  const s = "canvas", a = ["EEXIST", "ENOTEMPTY", "ENOENT"];
  function l(e2) {
    const t2 = e2?.code;
    if ("string" == typeof t2 && a.includes(t2)) return true;
    const i2 = e2 instanceof Error ? e2.message : "string" == typeof e2 ? e2 : "";
    return a.some((e3) => i2.includes(e3));
  }
  const c = /* @__PURE__ */ new Map();
  async function u(e2) {
    const t2 = e2.skillsDir ?? (0, n.T2h)(), i2 = (function(e3 = (0, n.T2h)()) {
      return (0, o.join)(e3, s, "sdk");
    })(t2), a2 = c.get(i2);
    if (void 0 !== a2) return a2;
    const l2 = (async function(e3, t3, i3) {
      const n2 = (function(e4) {
        return (0, o.join)(e4, "dist", "agent-sdk", "cursor", "canvas");
      })(e3), a3 = (0, o.join)(t3, s);
      try {
        await (0, r.access)(n2);
      } catch (e4) {
        if ("ENOENT" === e4.code) return false;
        throw e4;
      }
      try {
        await (0, r.access)(a3);
      } catch (e4) {
        if ("ENOENT" === e4.code) return false;
        throw e4;
      }
      return await (0, r.mkdir)(a3, { recursive: true }), await (0, r.rm)(i3, { recursive: true, force: true }), await (0, r.cp)(n2, i3, { force: true, recursive: true }), true;
    })(e2.extensionPath, t2, i2);
    c.set(i2, l2);
    try {
      return await l2;
    } finally {
      c.delete(i2);
    }
  }
}