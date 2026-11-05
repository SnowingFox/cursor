// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9301 range:823410..825486
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createFeatureResolver = void 0;
    const n2 = A2(7374), r2 = A2(9526);
    t2.createFeatureResolver = function(e3, t3, A3) {
      var o2;
      const s = null != t3 ? t3 : (i = A3, n2.FeatureSetDefaults.fromBinary(r2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i));
      var i;
      const a = s.minimumEdition, c = s.maximumEdition;
      if (void 0 === a || void 0 === c || s.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < a) throw new Error(`Edition ${n2.Edition[e3]} is earlier than the minimum supported edition ${n2.Edition[a]}`);
      if (c < e3) throw new Error(`Edition ${n2.Edition[e3]} is later than the maximum supported edition ${n2.Edition[c]}`);
      let l;
      for (const t4 of s.defaults) {
        const A4 = null !== (o2 = t4.edition) && void 0 !== o2 ? o2 : 0;
        if (A4 > e3) continue;
        if (void 0 !== l && l.e > A4) continue;
        let r3;
        t4.fixedFeatures && t4.overridableFeatures ? (r3 = t4.fixedFeatures, r3.fromBinary(t4.overridableFeatures.toBinary())) : r3 = t4.fixedFeatures ? t4.fixedFeatures : t4.overridableFeatures ? t4.overridableFeatures : new n2.FeatureSet(), l = { e: A4, f: r3 };
      }
      if (void 0 === l) throw new Error(`No valid default found for edition ${n2.Edition[e3]}`);
      const u = l.f.toBinary(A3);
      return (...t4) => {
        const r3 = n2.FeatureSet.fromBinary(u, A3);
        for (const e4 of t4) void 0 !== e4 && r3.fromBinary(e4.toBinary(A3), A3);
        if (!(function(e4) {
          for (const t5 of n2.FeatureSet.fields.list()) {
            const A4 = e4[t5.localName];
            if (void 0 === A4) return false;
            if ("enum" == t5.kind && 0 === A4) return false;
          }
          return true;
        })(r3)) throw new Error(`Invalid FeatureSet for edition ${n2.Edition[e3]}`);
        return r3;
      };
    };
  }