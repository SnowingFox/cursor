// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/524.js sha256:5f24be32ed082ef1d800497a7d31ee80f5c0cdf9a19586461785c9612232b4ce
// module: 29524 range:73..503
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29524: (e, r, s) => {
  s.d(r, { registerWebpCodecWithStartupDiagnostics: () => c });
  var t = s(37949), o = s(91105);
  const a = (0, t.h)("cursor-agent-host");
  function c(e2) {
    const r2 = (0, o.Zu2)();
    r2.registered ? a.info(e2, "webp_codec.startup", { registered: true }) : a.error(e2, "webp_codec.startup.unavailable", { registered: false, reason: r2.reason, platform: process.platform, arch: process.arch });
  }
}