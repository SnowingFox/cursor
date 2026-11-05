// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 301 range:71056..73135
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
301: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createFeatureResolver = void 0;
    const r2 = n2(374), o2 = n2(526);
    t2.createFeatureResolver = function(e3, t3, n3) {
      var a2;
      const s2 = null != t3 ? t3 : (i2 = n3, r2.FeatureSetDefaults.fromBinary(o2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i2));
      var i2;
      const l2 = s2.minimumEdition, u2 = s2.maximumEdition;
      if (void 0 === l2 || void 0 === u2 || s2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < l2) throw new Error(`Edition ${r2.Edition[e3]} is earlier than the minimum supported edition ${r2.Edition[l2]}`);
      if (u2 < e3) throw new Error(`Edition ${r2.Edition[e3]} is later than the maximum supported edition ${r2.Edition[u2]}`);
      let c2;
      for (const t4 of s2.defaults) {
        const n4 = null !== (a2 = t4.edition) && void 0 !== a2 ? a2 : 0;
        if (n4 > e3) continue;
        if (void 0 !== c2 && c2.e > n4) continue;
        let o3;
        t4.fixedFeatures && t4.overridableFeatures ? (o3 = t4.fixedFeatures, o3.fromBinary(t4.overridableFeatures.toBinary())) : o3 = t4.fixedFeatures ? t4.fixedFeatures : t4.overridableFeatures ? t4.overridableFeatures : new r2.FeatureSet(), c2 = { e: n4, f: o3 };
      }
      if (void 0 === c2) throw new Error(`No valid default found for edition ${r2.Edition[e3]}`);
      const m2 = c2.f.toBinary(n3);
      return (...t4) => {
        const o3 = r2.FeatureSet.fromBinary(m2, n3);
        for (const e4 of t4) void 0 !== e4 && o3.fromBinary(e4.toBinary(n3), n3);
        if (!(function(e4) {
          for (const t5 of r2.FeatureSet.fields.list()) {
            const n4 = e4[t5.localName];
            if (void 0 === n4) return false;
            if ("enum" == t5.kind && 0 === n4) return false;
          }
          return true;
        })(o3)) throw new Error(`Invalid FeatureSet for edition ${r2.Edition[e3]}`);
        return o3;
      };
    };
  }