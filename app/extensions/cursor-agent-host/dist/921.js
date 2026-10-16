"use strict";
exports.id = 921, exports.ids = [921], exports.modules = { 77921: (s, e, r) => {
  r.d(e, { createIdeCanvasDiagnostics: () => c });
  var o = r(87305), t = r(37949), a = r(76760), n = r(22438);
  const i = (0, t.h)("cursor-agent-host-canvas-diagnostics");
  function c(s2) {
    const e2 = (0, a.join)(s2.projectDir, "canvases"), r2 = (0, a.join)(s2.execExtensionPath, "dist", "agent-sdk"), t2 = (0, o.WT)({ canvasesDir: e2, sdkSourceDir: r2, tsResolveAnchor: s2.execExtensionPath });
    return t2.bootstrapReady.then((e3) => {
      void 0 === e3 && i.error(s2.logContext, "Canvas SDK source missing from extension bundle");
    }, (o2) => {
      const t3 = (0, n.E)(o2, { canvasesDir: e2, sdkSourceDir: r2 });
      i.warn(s2.logContext, "Canvas dir bootstrap failed", { errorName: t3.errorName, errorMessage: t3.errorMessage });
    }), { resourceDefaults: { getCanvasDiagnostics: (s3) => t2.getDiagnostics(s3) } };
  }
} };
