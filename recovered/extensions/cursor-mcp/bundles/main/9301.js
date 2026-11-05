// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9301 range:884166..886250
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9301: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createFeatureResolver = void 0;
    const n2 = r2(7374), o2 = r2(9526);
    t2.createFeatureResolver = function(e3, t3, r3) {
      var s2;
      const i2 = null != t3 ? t3 : (a2 = r3, n2.FeatureSetDefaults.fromBinary(o2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a2));
      var a2;
      const c = i2.minimumEdition, u = i2.maximumEdition;
      if (void 0 === c || void 0 === u || i2.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < c) throw new Error(`Edition ${n2.Edition[e3]} is earlier than the minimum supported edition ${n2.Edition[c]}`);
      if (u < e3) throw new Error(`Edition ${n2.Edition[e3]} is later than the maximum supported edition ${n2.Edition[u]}`);
      let l;
      for (const t4 of i2.defaults) {
        const r4 = null !== (s2 = t4.edition) && void 0 !== s2 ? s2 : 0;
        if (r4 > e3) continue;
        if (void 0 !== l && l.e > r4) continue;
        let o3;
        t4.fixedFeatures && t4.overridableFeatures ? (o3 = t4.fixedFeatures, o3.fromBinary(t4.overridableFeatures.toBinary())) : o3 = t4.fixedFeatures ? t4.fixedFeatures : t4.overridableFeatures ? t4.overridableFeatures : new n2.FeatureSet(), l = { e: r4, f: o3 };
      }
      if (void 0 === l) throw new Error(`No valid default found for edition ${n2.Edition[e3]}`);
      const d = l.f.toBinary(r3);
      return (...t4) => {
        const o3 = n2.FeatureSet.fromBinary(d, r3);
        for (const e4 of t4) void 0 !== e4 && o3.fromBinary(e4.toBinary(r3), r3);
        if (!(function(e4) {
          for (const t5 of n2.FeatureSet.fields.list()) {
            const r4 = e4[t5.localName];
            if (void 0 === r4) return false;
            if ("enum" == t5.kind && 0 === r4) return false;
          }
          return true;
        })(o3)) throw new Error(`Invalid FeatureSet for edition ${n2.Edition[e3]}`);
        return o3;
      };
    };
  }