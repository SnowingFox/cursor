// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/807.js sha256:9844155afabaa0cc4e9054d6f6c4c8a8e24473af4de9bd317056acbc77a4d29e
// module: 29534 range:73..647
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29534: (e, s, t) => {
  t.d(s, { Qf: () => o, ic: () => i });
  const i = "sandbox_read_control_portal";
  function o(e2) {
    let s2 = false, t2 = 0;
    const o2 = () => {
      const i2 = ++t2;
      Promise.resolve(e2.checkFeatureGate()).then((e3) => {
        i2 === t2 && (s2 = e3);
      }, () => {
        i2 === t2 && (s2 = false);
      });
    };
    o2();
    const n = e2.onDidChangeGates((e3) => {
      var s3;
      (void 0 === (s3 = e3.changedGates) || s3.includes(i)) && o2();
    });
    return { getEnabled: () => s2, dispose: () => n.dispose() };
  }
}