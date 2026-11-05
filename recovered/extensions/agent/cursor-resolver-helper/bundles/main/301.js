// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 301 range:71056..73135
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
301: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createFeatureResolver = void 0;
    const o2 = n2(374), s2 = n2(526);
    a2.createFeatureResolver = function(e3, a3, n3) {
      var t2;
      const r2 = null != a3 ? a3 : (i2 = n3, o2.FeatureSetDefaults.fromBinary(s2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i2));
      var i2;
      const m2 = r2.minimumEdition, l2 = r2.maximumEdition;
      if (void 0 === m2 || void 0 === l2 || r2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < m2) throw new Error(`Edition ${o2.Edition[e3]} is earlier than the minimum supported edition ${o2.Edition[m2]}`);
      if (l2 < e3) throw new Error(`Edition ${o2.Edition[e3]} is later than the maximum supported edition ${o2.Edition[l2]}`);
      let d2;
      for (const a4 of r2.defaults) {
        const n4 = null !== (t2 = a4.edition) && void 0 !== t2 ? t2 : 0;
        if (n4 > e3) continue;
        if (void 0 !== d2 && d2.e > n4) continue;
        let s3;
        a4.fixedFeatures && a4.overridableFeatures ? (s3 = a4.fixedFeatures, s3.fromBinary(a4.overridableFeatures.toBinary())) : s3 = a4.fixedFeatures ? a4.fixedFeatures : a4.overridableFeatures ? a4.overridableFeatures : new o2.FeatureSet(), d2 = { e: n4, f: s3 };
      }
      if (void 0 === d2) throw new Error(`No valid default found for edition ${o2.Edition[e3]}`);
      const c2 = d2.f.toBinary(n3);
      return (...a4) => {
        const s3 = o2.FeatureSet.fromBinary(c2, n3);
        for (const e4 of a4) void 0 !== e4 && s3.fromBinary(e4.toBinary(n3), n3);
        if (!(function(e4) {
          for (const a5 of o2.FeatureSet.fields.list()) {
            const n4 = e4[a5.localName];
            if (void 0 === n4) return false;
            if ("enum" == a5.kind && 0 === n4) return false;
          }
          return true;
        })(s3)) throw new Error(`Invalid FeatureSet for edition ${o2.Edition[e3]}`);
        return s3;
      };
    };
  }