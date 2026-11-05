// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7592 range:4310194..4313546
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7592: (t2, e2, r2) => {
    "use strict";
    const { tokenChars: n2 } = r2(6818);
    function s2(t3, e3, r3) {
      void 0 === t3[e3] ? t3[e3] = [r3] : t3[e3].push(r3);
    }
    t2.exports = { format: function(t3) {
      return Object.keys(t3).map((e3) => {
        let r3 = t3[e3];
        return Array.isArray(r3) || (r3 = [r3]), r3.map((t4) => [e3].concat(Object.keys(t4).map((e4) => {
          let r4 = t4[e4];
          return Array.isArray(r4) || (r4 = [r4]), r4.map((t5) => true === t5 ? e4 : `${e4}=${t5}`).join("; ");
        })).join("; ")).join(", ");
      }).join(", ");
    }, parse: function(t3) {
      const e3 = /* @__PURE__ */ Object.create(null);
      let r3, i2, o2 = /* @__PURE__ */ Object.create(null), a = false, u = false, c = false, l = -1, m = -1, d = -1, f = 0;
      for (; f < t3.length; f++) if (m = t3.charCodeAt(f), void 0 === r3) if (-1 === d && 1 === n2[m]) -1 === l && (l = f);
      else if (0 === f || 32 !== m && 9 !== m) {
        if (59 !== m && 44 !== m) throw new SyntaxError(`Unexpected character at index ${f}`);
        {
          if (-1 === l) throw new SyntaxError(`Unexpected character at index ${f}`);
          -1 === d && (d = f);
          const n3 = t3.slice(l, d);
          44 === m ? (s2(e3, n3, o2), o2 = /* @__PURE__ */ Object.create(null)) : r3 = n3, l = d = -1;
        }
      } else -1 === d && -1 !== l && (d = f);
      else if (void 0 === i2) if (-1 === d && 1 === n2[m]) -1 === l && (l = f);
      else if (32 === m || 9 === m) -1 === d && -1 !== l && (d = f);
      else if (59 === m || 44 === m) {
        if (-1 === l) throw new SyntaxError(`Unexpected character at index ${f}`);
        -1 === d && (d = f), s2(o2, t3.slice(l, d), true), 44 === m && (s2(e3, r3, o2), o2 = /* @__PURE__ */ Object.create(null), r3 = void 0), l = d = -1;
      } else {
        if (61 !== m || -1 === l || -1 !== d) throw new SyntaxError(`Unexpected character at index ${f}`);
        i2 = t3.slice(l, f), l = d = -1;
      }
      else if (u) {
        if (1 !== n2[m]) throw new SyntaxError(`Unexpected character at index ${f}`);
        -1 === l ? l = f : a || (a = true), u = false;
      } else if (c) if (1 === n2[m]) -1 === l && (l = f);
      else if (34 === m && -1 !== l) c = false, d = f;
      else {
        if (92 !== m) throw new SyntaxError(`Unexpected character at index ${f}`);
        u = true;
      }
      else if (34 === m && 61 === t3.charCodeAt(f - 1)) c = true;
      else if (-1 === d && 1 === n2[m]) -1 === l && (l = f);
      else if (-1 === l || 32 !== m && 9 !== m) {
        if (59 !== m && 44 !== m) throw new SyntaxError(`Unexpected character at index ${f}`);
        {
          if (-1 === l) throw new SyntaxError(`Unexpected character at index ${f}`);
          -1 === d && (d = f);
          let n3 = t3.slice(l, d);
          a && (n3 = n3.replace(/\\/g, ""), a = false), s2(o2, i2, n3), 44 === m && (s2(e3, r3, o2), o2 = /* @__PURE__ */ Object.create(null), r3 = void 0), i2 = void 0, l = d = -1;
        }
      } else -1 === d && (d = f);
      if (-1 === l || c || 32 === m || 9 === m) throw new SyntaxError("Unexpected end of input");
      -1 === d && (d = f);
      const p = t3.slice(l, d);
      return void 0 === r3 ? s2(e3, p, o2) : (void 0 === i2 ? s2(o2, p, true) : s2(o2, i2, a ? p.replace(/\\/g, "") : p), s2(e3, r3, o2)), e3;
    } };
  }