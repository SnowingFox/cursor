// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9301 range:688617..690693
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.createFeatureResolver = void 0;
    const n2 = t2(7374), r2 = t2(9526);
    A2.createFeatureResolver = function(e3, A3, t3) {
      var o2;
      const s = null != A3 ? A3 : (a = t3, n2.FeatureSetDefaults.fromBinary(r2.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
      var a;
      const i = s.minimumEdition, c = s.maximumEdition;
      if (void 0 === i || void 0 === c || s.defaults.some((e4) => void 0 === e4.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e3 < i) throw new Error(`Edition ${n2.Edition[e3]} is earlier than the minimum supported edition ${n2.Edition[i]}`);
      if (c < e3) throw new Error(`Edition ${n2.Edition[e3]} is later than the maximum supported edition ${n2.Edition[c]}`);
      let l;
      for (const A4 of s.defaults) {
        const t4 = null !== (o2 = A4.edition) && void 0 !== o2 ? o2 : 0;
        if (t4 > e3) continue;
        if (void 0 !== l && l.e > t4) continue;
        let r3;
        A4.fixedFeatures && A4.overridableFeatures ? (r3 = A4.fixedFeatures, r3.fromBinary(A4.overridableFeatures.toBinary())) : r3 = A4.fixedFeatures ? A4.fixedFeatures : A4.overridableFeatures ? A4.overridableFeatures : new n2.FeatureSet(), l = { e: t4, f: r3 };
      }
      if (void 0 === l) throw new Error(`No valid default found for edition ${n2.Edition[e3]}`);
      const g = l.f.toBinary(t3);
      return (...A4) => {
        const r3 = n2.FeatureSet.fromBinary(g, t3);
        for (const e4 of A4) void 0 !== e4 && r3.fromBinary(e4.toBinary(t3), t3);
        if (!(function(e4) {
          for (const A5 of n2.FeatureSet.fields.list()) {
            const t4 = e4[A5.localName];
            if (void 0 === t4) return false;
            if ("enum" == A5.kind && 0 === t4) return false;
          }
          return true;
        })(r3)) throw new Error(`Invalid FeatureSet for edition ${n2.Edition[e3]}`);
        return r3;
      };
    };
  }