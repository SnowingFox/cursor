// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69301 range:10745284..10747338
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69301: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFeatureResolver = void 0;
    const n = r(27374), s = r(19526);
    t.createFeatureResolver = function(e2, t2, r2) {
      var o;
      const i = null != t2 ? t2 : (a = r2, n.FeatureSetDefaults.fromBinary(s.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
      var a;
      const c = i.minimumEdition, l = i.maximumEdition;
      if (void 0 === c || void 0 === l || i.defaults.some((e3) => void 0 === e3.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e2 < c) throw new Error(`Edition ${n.Edition[e2]} is earlier than the minimum supported edition ${n.Edition[c]}`);
      if (l < e2) throw new Error(`Edition ${n.Edition[e2]} is later than the maximum supported edition ${n.Edition[l]}`);
      let u;
      for (const t3 of i.defaults) {
        const r3 = null !== (o = t3.edition) && void 0 !== o ? o : 0;
        if (r3 > e2) continue;
        if (void 0 !== u && u.e > r3) continue;
        let s2;
        t3.fixedFeatures && t3.overridableFeatures ? (s2 = t3.fixedFeatures, s2.fromBinary(t3.overridableFeatures.toBinary())) : s2 = t3.fixedFeatures ? t3.fixedFeatures : t3.overridableFeatures ? t3.overridableFeatures : new n.FeatureSet(), u = { e: r3, f: s2 };
      }
      if (void 0 === u) throw new Error(`No valid default found for edition ${n.Edition[e2]}`);
      const d = u.f.toBinary(r2);
      return (...t3) => {
        const s2 = n.FeatureSet.fromBinary(d, r2);
        for (const e3 of t3) void 0 !== e3 && s2.fromBinary(e3.toBinary(r2), r2);
        if (!(function(e3) {
          for (const t4 of n.FeatureSet.fields.list()) {
            const r3 = e3[t4.localName];
            if (void 0 === r3) return false;
            if ("enum" == t4.kind && 0 === r3) return false;
          }
          return true;
        })(s2)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e2]}`);
        return s2;
      };
    };
  }