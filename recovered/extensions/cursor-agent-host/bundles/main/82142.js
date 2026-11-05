// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82142 range:11855029..11857518
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82142: (e, t, r) => {
    "use strict";
    r.d(t, { YW: () => c, Je: () => p, Ol: () => l, g4: () => u, cW: () => h, _y: () => d, vv: () => g, bI: () => m });
    var n = r(77598), s = r(76760), o = r(11197), i = r(64500), a = r(19950);
    const c = "agent-tools", l = 51380224, u = 4e4;
    async function d({ contentItems: e2, thresholdBytes: t2, write: r2 }) {
      const n2 = e2.filter((e3) => "text" === e3.content.case && void 0 === e3.content.value.outputLocation).map((e3) => "text" === e3.content.case ? e3.content.value.text : "").join("\n\n");
      if (t2 <= 0 || Buffer.byteLength(n2, "utf8") <= t2) return e2;
      const s2 = await r2(n2);
      if (void 0 === s2) return;
      const i2 = [];
      let a2 = false;
      for (const t3 of e2) {
        "text" === t3.content.case && void 0 === t3.content.value.outputLocation ? a2 || (i2.push(new o._Z({ content: { case: "text", value: new o.zN({ text: "", outputLocation: s2 }) } })), a2 = true) : i2.push(t3);
      }
      return i2;
    }
    const p = 2e4;
    async function m(e2, t2, { content: r2, projectDir: o2, osPlatform: u2, toolCallId: d2, maxSize: p2 }) {
      const m2 = (function(e3, t3) {
        const r3 = Buffer.from(e3, "utf8");
        if (r3.byteLength <= t3) return e3;
        const n2 = r3.subarray(0, t3).toString("utf8");
        return n2.endsWith("�") ? n2.slice(0, -1) : n2;
      })(r2, Math.min(p2 ?? l, l)), h2 = ("win32" === u2 ? s.win32.join : s.posix.join)(o2, c, `${(0, n.randomUUID)()}.txt`), f2 = m2.split("\n").length, g2 = Buffer.byteLength(m2, "utf8"), y = await t2.execute(e2, new a.hY({ path: h2, fileText: m2, toolCallId: d2 }));
      switch (y.result.case) {
        case "success":
          return new i.pV({ filePath: y.result.value.path, sizeBytes: BigInt(g2), lineCount: BigInt(f2) });
        case "permissionDenied":
        case "noSpace":
        case "error":
        case "rejected":
        case void 0:
          return;
        default: {
          const e3 = y.result;
          throw new Error(`Unhandled write result case: ${e3}`);
        }
      }
    }
    function h(e2, t2) {
      return `${t2?.leadText ?? "Content"} written to file: ${e2.filePath}
Size: ${(function(e3) {
        const t3 = Number(e3);
        return t3 >= 1024 ? `${(t3 / 1024).toFixed(1)} KB` : `${t3} bytes`;
      })(e2.sizeBytes)}, ${e2.lineCount} lines`;
    }
    const f = new (r(16698)).AsyncLocalStorage();
    function g(e2, t2) {
      return f.run(e2, t2);
    }
  }