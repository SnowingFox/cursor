// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9301 range:689602..691686
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createFeatureResolver = void 0;
    const t2 = a2(7374), s2 = a2(9526);
    n2.createFeatureResolver = function(e3, n3, a3) {
      var o2;
      const r2 = null != n3 ? n3 : (i2 = a3, t2.FeatureSetDefaults.fromBinary(s2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i2));
      var i2;
      const A = r2.minimumEdition, l = r2.maximumEdition;
      if (void 0 === A || void 0 === l || r2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < A) throw new Error(`Edition ${t2.Edition[e3]} is earlier than the minimum supported edition ${t2.Edition[A]}`);
      if (l < e3) throw new Error(`Edition ${t2.Edition[e3]} is later than the maximum supported edition ${t2.Edition[l]}`);
      let c;
      for (const n4 of r2.defaults) {
        const a4 = null !== (o2 = n4.edition) && void 0 !== o2 ? o2 : 0;
        if (a4 > e3) continue;
        if (void 0 !== c && c.e > a4) continue;
        let s3;
        n4.fixedFeatures && n4.overridableFeatures ? (s3 = n4.fixedFeatures, s3.fromBinary(n4.overridableFeatures.toBinary())) : s3 = n4.fixedFeatures ? n4.fixedFeatures : n4.overridableFeatures ? n4.overridableFeatures : new t2.FeatureSet(), c = { e: a4, f: s3 };
      }
      if (void 0 === c) throw new Error(`No valid default found for edition ${t2.Edition[e3]}`);
      const m = c.f.toBinary(a3);
      return (...n4) => {
        const s3 = t2.FeatureSet.fromBinary(m, a3);
        for (const e4 of n4) void 0 !== e4 && s3.fromBinary(e4.toBinary(a3), a3);
        if (!(function(e4) {
          for (const n5 of t2.FeatureSet.fields.list()) {
            const a4 = e4[n5.localName];
            if (void 0 === a4) return false;
            if ("enum" == n5.kind && 0 === a4) return false;
          }
          return true;
        })(s3)) throw new Error(`Invalid FeatureSet for edition ${t2.Edition[e3]}`);
        return s3;
      };
    };
  }