// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9301 range:6064023..6066104
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createFeatureResolver = void 0;
    const n2 = r2(7374), s2 = r2(9526);
    e2.createFeatureResolver = function(t3, e3, r3) {
      var i2;
      const o2 = null != e3 ? e3 : (a = r3, n2.FeatureSetDefaults.fromBinary(s2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
      var a;
      const u = o2.minimumEdition, c = o2.maximumEdition;
      if (void 0 === u || void 0 === c || o2.defaults.some((t4) => void 0 === t4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (t3 < u) throw new Error(`Edition ${n2.Edition[t3]} is earlier than the minimum supported edition ${n2.Edition[u]}`);
      if (c < t3) throw new Error(`Edition ${n2.Edition[t3]} is later than the maximum supported edition ${n2.Edition[c]}`);
      let l;
      for (const e4 of o2.defaults) {
        const r4 = null !== (i2 = e4.edition) && void 0 !== i2 ? i2 : 0;
        if (r4 > t3) continue;
        if (void 0 !== l && l.e > r4) continue;
        let s3;
        e4.fixedFeatures && e4.overridableFeatures ? (s3 = e4.fixedFeatures, s3.fromBinary(e4.overridableFeatures.toBinary())) : s3 = e4.fixedFeatures ? e4.fixedFeatures : e4.overridableFeatures ? e4.overridableFeatures : new n2.FeatureSet(), l = { e: r4, f: s3 };
      }
      if (void 0 === l) throw new Error(`No valid default found for edition ${n2.Edition[t3]}`);
      const m = l.f.toBinary(r3);
      return (...e4) => {
        const s3 = n2.FeatureSet.fromBinary(m, r3);
        for (const t4 of e4) void 0 !== t4 && s3.fromBinary(t4.toBinary(r3), r3);
        if (!(function(t4) {
          for (const e5 of n2.FeatureSet.fields.list()) {
            const r4 = t4[e5.localName];
            if (void 0 === r4) return false;
            if ("enum" == e5.kind && 0 === r4) return false;
          }
          return true;
        })(s3)) throw new Error(`Invalid FeatureSet for edition ${n2.Edition[t3]}`);
        return s3;
      };
    };
  }