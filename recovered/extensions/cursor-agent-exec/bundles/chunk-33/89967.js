// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 89967 range:25175..25869
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89967: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.resolveRuntimeExtensions = void 0;
  const i = n(72212), o = n(59344), r = n(98175), s = n(16901);
  t.resolveRuntimeExtensions = (e2, t2) => {
    const n2 = Object.assign((0, i.getAwsRegionExtensionConfiguration)(e2), (0, r.getDefaultExtensionConfiguration)(e2), (0, o.getHttpHandlerExtensionConfiguration)(e2), (0, s.getHttpAuthExtensionConfiguration)(e2));
    return t2.forEach((e3) => e3.configure(n2)), Object.assign(e2, (0, i.resolveAwsRegionExtensionConfiguration)(n2), (0, r.resolveDefaultRuntimeConfig)(n2), (0, o.resolveHttpHandlerRuntimeConfig)(n2), (0, s.resolveHttpAuthRuntimeConfig)(n2));
  };
}