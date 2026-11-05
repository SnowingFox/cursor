// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 69301 range:2129346..2131400
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69301: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createFeatureResolver = void 0;
    const n = r(27374), o = r(19526);
    t.createFeatureResolver = function(e2, t2, r2) {
      var s;
      const i = null != t2 ? t2 : (a = r2, n.FeatureSetDefaults.fromBinary(o.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), a));
      var a;
      const l = i.minimumEdition, c = i.maximumEdition;
      if (void 0 === l || void 0 === c || i.defaults.some((e3) => void 0 === e3.edition)) throw new Error("Invalid FeatureSetDefaults");
      if (e2 < l) throw new Error(`Edition ${n.Edition[e2]} is earlier than the minimum supported edition ${n.Edition[l]}`);
      if (c < e2) throw new Error(`Edition ${n.Edition[e2]} is later than the maximum supported edition ${n.Edition[c]}`);
      let u;
      for (const t3 of i.defaults) {
        const r3 = null !== (s = t3.edition) && void 0 !== s ? s : 0;
        if (r3 > e2) continue;
        if (void 0 !== u && u.e > r3) continue;
        let o2;
        t3.fixedFeatures && t3.overridableFeatures ? (o2 = t3.fixedFeatures, o2.fromBinary(t3.overridableFeatures.toBinary())) : o2 = t3.fixedFeatures ? t3.fixedFeatures : t3.overridableFeatures ? t3.overridableFeatures : new n.FeatureSet(), u = { e: r3, f: o2 };
      }
      if (void 0 === u) throw new Error(`No valid default found for edition ${n.Edition[e2]}`);
      const d = u.f.toBinary(r2);
      return (...t3) => {
        const o2 = n.FeatureSet.fromBinary(d, r2);
        for (const e3 of t3) void 0 !== e3 && o2.fromBinary(e3.toBinary(r2), r2);
        if (!(function(e3) {
          for (const t4 of n.FeatureSet.fields.list()) {
            const r3 = e3[t4.localName];
            if (void 0 === r3) return false;
            if ("enum" == t4.kind && 0 === r3) return false;
          }
          return true;
        })(o2)) throw new Error(`Invalid FeatureSet for edition ${n.Edition[e2]}`);
        return o2;
      };
    };
  }