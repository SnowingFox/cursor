// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9301 range:1038966..1041050
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createFeatureResolver = void 0;
    const t2 = n2(7374), s2 = n2(9526);
    a2.createFeatureResolver = function(e3, a3, n3) {
      var o2;
      const r2 = null != a3 ? a3 : (i2 = n3, t2.FeatureSetDefaults.fromBinary(s2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i2));
      var i2;
      const l = r2.minimumEdition, d = r2.maximumEdition;
      if (void 0 === l || void 0 === d || r2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < l) throw new Error(`Edition ${t2.Edition[e3]} is earlier than the minimum supported edition ${t2.Edition[l]}`);
      if (d < e3) throw new Error(`Edition ${t2.Edition[e3]} is later than the maximum supported edition ${t2.Edition[d]}`);
      let m;
      for (const a4 of r2.defaults) {
        const n4 = null !== (o2 = a4.edition) && void 0 !== o2 ? o2 : 0;
        if (n4 > e3) continue;
        if (void 0 !== m && m.e > n4) continue;
        let s3;
        a4.fixedFeatures && a4.overridableFeatures ? (s3 = a4.fixedFeatures, s3.fromBinary(a4.overridableFeatures.toBinary())) : s3 = a4.fixedFeatures ? a4.fixedFeatures : a4.overridableFeatures ? a4.overridableFeatures : new t2.FeatureSet(), m = { e: n4, f: s3 };
      }
      if (void 0 === m) throw new Error(`No valid default found for edition ${t2.Edition[e3]}`);
      const c = m.f.toBinary(n3);
      return (...a4) => {
        const s3 = t2.FeatureSet.fromBinary(c, n3);
        for (const e4 of a4) void 0 !== e4 && s3.fromBinary(e4.toBinary(n3), n3);
        if (!(function(e4) {
          for (const a5 of t2.FeatureSet.fields.list()) {
            const n4 = e4[a5.localName];
            if (void 0 === n4) return false;
            if ("enum" == a5.kind && 0 === n4) return false;
          }
          return true;
        })(s3)) throw new Error(`Invalid FeatureSet for edition ${t2.Edition[e3]}`);
        return s3;
      };
    };
  }