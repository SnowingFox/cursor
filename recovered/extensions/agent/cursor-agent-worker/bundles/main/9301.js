// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9301 range:352476..354662
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9301: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createFeatureResolver = void 0;
    const s10 = n10(7374), o10 = n10(9526);
    a10.createFeatureResolver = function(e11, a11, n11) {
      var r10;
      const t10 = null != a11 ? a11 : (i10 = n11, s10.FeatureSetDefaults.fromBinary(o10.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), i10));
      var i10;
      const m10 = t10.minimumEdition, l10 = t10.maximumEdition;
      if (void 0 === m10 || void 0 === l10 || t10.defaults.some((e12) => void 0 === e12.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e11 < m10) throw new Error(`Edition ${s10.Edition[e11]} is earlier than the minimum supported edition ${s10.Edition[m10]}`);
      if (l10 < e11) throw new Error(`Edition ${s10.Edition[e11]} is later than the maximum supported edition ${s10.Edition[l10]}`);
      let d10;
      for (const a12 of t10.defaults) {
        const n12 = null !== (r10 = a12.edition) && void 0 !== r10 ? r10 : 0;
        if (n12 > e11) continue;
        if (void 0 !== d10 && d10.e > n12) continue;
        let o11;
        a12.fixedFeatures && a12.overridableFeatures ? (o11 = a12.fixedFeatures, o11.fromBinary(a12.overridableFeatures.toBinary())) : o11 = a12.fixedFeatures ? a12.fixedFeatures : a12.overridableFeatures ? a12.overridableFeatures : new s10.FeatureSet(), d10 = { e: n12, f: o11 };
      }
      if (void 0 === d10) throw new Error(`No valid default found for edition ${s10.Edition[e11]}`);
      const c10 = d10.f.toBinary(n11);
      return (...a12) => {
        const o11 = s10.FeatureSet.fromBinary(c10, n11);
        for (const e12 of a12) void 0 !== e12 && o11.fromBinary(e12.toBinary(n11), n11);
        if (!(function(e12) {
          for (const a13 of s10.FeatureSet.fields.list()) {
            const n12 = e12[a13.localName];
            if (void 0 === n12) return false;
            if ("enum" == a13.kind && 0 === n12) return false;
          }
          return true;
        })(o11)) throw new Error(`Invalid FeatureSet for edition ${s10.Edition[e11]}`);
        return o11;
      };
    };
  }