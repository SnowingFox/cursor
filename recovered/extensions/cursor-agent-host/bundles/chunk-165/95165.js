// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/165.js sha256:da19b8a02fbe0ca726fcf281f66aa0c4f3f331c66c7fd5424dc02ddd10dd6121
// module: 95165 range:73..374
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95165: (e, t, a) => {
  a.d(t, { VscodeFileChangeTracker: () => s });
  class s {
    constructor(e2) {
      this.onChange = e2;
    }
    async trackChange(e2, t2, a2, s2) {
      const o = { path: e2, before: t2, after: a2, metadata: s2 };
      this.onChange && await this.onChange(o);
    }
  }
}