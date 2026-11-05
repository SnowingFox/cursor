// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9301 range:720130..722217
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9301: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createFeatureResolver = void 0;
    const a2 = t2(7374), s2 = t2(9526);
    n2.createFeatureResolver = function(e3, n3, t3) {
      var o2;
      const r = null != n3 ? n3 : (function(e4) {
        return a2.FeatureSetDefaults.fromBinary(s2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), e4);
      })(t3), i = r.minimumEdition, A = r.maximumEdition;
      if (void 0 === i || void 0 === A || r.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < i) throw new Error(`Edition ${a2.Edition[e3]} is earlier than the minimum supported edition ${a2.Edition[i]}`);
      if (A < e3) throw new Error(`Edition ${a2.Edition[e3]} is later than the maximum supported edition ${a2.Edition[A]}`);
      let c;
      for (const n4 of r.defaults) {
        const t4 = null !== (o2 = n4.edition) && void 0 !== o2 ? o2 : 0;
        if (t4 > e3) continue;
        if (void 0 !== c && c.e > t4) continue;
        let s3;
        n4.fixedFeatures && n4.overridableFeatures ? (s3 = n4.fixedFeatures, s3.fromBinary(n4.overridableFeatures.toBinary())) : s3 = n4.fixedFeatures ? n4.fixedFeatures : n4.overridableFeatures ? n4.overridableFeatures : new a2.FeatureSet(), c = { e: t4, f: s3 };
      }
      if (void 0 === c) throw new Error(`No valid default found for edition ${a2.Edition[e3]}`);
      const l = c.f.toBinary(t3);
      return (...n4) => {
        const s3 = a2.FeatureSet.fromBinary(l, t3);
        for (const e4 of n4) void 0 !== e4 && s3.fromBinary(e4.toBinary(t3), t3);
        if (!(function(e4) {
          for (const n5 of a2.FeatureSet.fields.list()) {
            const t4 = e4[n5.localName];
            if (void 0 === t4) return false;
            if ("enum" == n5.kind && 0 === t4) return false;
          }
          return true;
        })(s3)) throw new Error(`Invalid FeatureSet for edition ${a2.Edition[e3]}`);
        return s3;
      };
    };
  }