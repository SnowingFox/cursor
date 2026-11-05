// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/821.js sha256:7e6c546288a198f5baec24c804295e7cbf0e61824eadb288d6b669f6d8f3b30e
// module: 29534 range:1686..2260
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29534: (e, t, s) => {
  s.d(t, { Qf: () => o, ic: () => i });
  const i = "sandbox_read_control_portal";
  function o(e2) {
    let t2 = false, s2 = 0;
    const o2 = () => {
      const i2 = ++s2;
      Promise.resolve(e2.checkFeatureGate()).then((e3) => {
        i2 === s2 && (t2 = e3);
      }, () => {
        i2 === s2 && (t2 = false);
      });
    };
    o2();
    const r = e2.onDidChangeGates((e3) => {
      var t3;
      (void 0 === (t3 = e3.changedGates) || t3.includes(i)) && o2();
    });
    return { getEnabled: () => t2, dispose: () => r.dispose() };
  }
}