"use strict";
exports.id = 524, exports.ids = [524], exports.modules = { 29524: (e, r, s) => {
  s.d(r, { registerWebpCodecWithStartupDiagnostics: () => c });
  var t = s(37949), o = s(91105);
  const a = (0, t.h)("cursor-agent-host");
  function c(e2) {
    const r2 = (0, o.Zu2)();
    r2.registered ? a.info(e2, "webp_codec.startup", { registered: true }) : a.error(e2, "webp_codec.startup.unavailable", { registered: false, reason: r2.reason, platform: process.platform, arch: process.arch });
  }
} };
