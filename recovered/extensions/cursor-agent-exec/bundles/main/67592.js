// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 67592 range:6073521..6076834
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
67592: (e, t, r) => {
    "use strict";
    const { tokenChars: n } = r(16818);
    function s(e2, t2, r2) {
      void 0 === e2[t2] ? e2[t2] = [r2] : e2[t2].push(r2);
    }
    e.exports = { format: function(e2) {
      return Object.keys(e2).map((t2) => {
        let r2 = e2[t2];
        return Array.isArray(r2) || (r2 = [r2]), r2.map((e3) => [t2].concat(Object.keys(e3).map((t3) => {
          let r3 = e3[t3];
          return Array.isArray(r3) || (r3 = [r3]), r3.map((e4) => true === e4 ? t3 : `${t3}=${e4}`).join("; ");
        })).join("; ")).join(", ");
      }).join(", ");
    }, parse: function(e2) {
      const t2 = /* @__PURE__ */ Object.create(null);
      let r2, o, i = /* @__PURE__ */ Object.create(null), a = false, c = false, l = false, u = -1, d = -1, p = -1, m = 0;
      for (; m < e2.length; m++) if (d = e2.charCodeAt(m), void 0 === r2) if (-1 === p && 1 === n[d]) -1 === u && (u = m);
      else if (0 === m || 32 !== d && 9 !== d) {
        if (59 !== d && 44 !== d) throw new SyntaxError(`Unexpected character at index ${m}`);
        {
          if (-1 === u) throw new SyntaxError(`Unexpected character at index ${m}`);
          -1 === p && (p = m);
          const n2 = e2.slice(u, p);
          44 === d ? (s(t2, n2, i), i = /* @__PURE__ */ Object.create(null)) : r2 = n2, u = p = -1;
        }
      } else -1 === p && -1 !== u && (p = m);
      else if (void 0 === o) if (-1 === p && 1 === n[d]) -1 === u && (u = m);
      else if (32 === d || 9 === d) -1 === p && -1 !== u && (p = m);
      else if (59 === d || 44 === d) {
        if (-1 === u) throw new SyntaxError(`Unexpected character at index ${m}`);
        -1 === p && (p = m), s(i, e2.slice(u, p), true), 44 === d && (s(t2, r2, i), i = /* @__PURE__ */ Object.create(null), r2 = void 0), u = p = -1;
      } else {
        if (61 !== d || -1 === u || -1 !== p) throw new SyntaxError(`Unexpected character at index ${m}`);
        o = e2.slice(u, m), u = p = -1;
      }
      else if (c) {
        if (1 !== n[d]) throw new SyntaxError(`Unexpected character at index ${m}`);
        -1 === u ? u = m : a || (a = true), c = false;
      } else if (l) if (1 === n[d]) -1 === u && (u = m);
      else if (34 === d && -1 !== u) l = false, p = m;
      else {
        if (92 !== d) throw new SyntaxError(`Unexpected character at index ${m}`);
        c = true;
      }
      else if (34 === d && 61 === e2.charCodeAt(m - 1)) l = true;
      else if (-1 === p && 1 === n[d]) -1 === u && (u = m);
      else if (-1 === u || 32 !== d && 9 !== d) {
        if (59 !== d && 44 !== d) throw new SyntaxError(`Unexpected character at index ${m}`);
        {
          if (-1 === u) throw new SyntaxError(`Unexpected character at index ${m}`);
          -1 === p && (p = m);
          let n2 = e2.slice(u, p);
          a && (n2 = n2.replace(/\\/g, ""), a = false), s(i, o, n2), 44 === d && (s(t2, r2, i), i = /* @__PURE__ */ Object.create(null), r2 = void 0), o = void 0, u = p = -1;
        }
      } else -1 === p && (p = m);
      if (-1 === u || l || 32 === d || 9 === d) throw new SyntaxError("Unexpected end of input");
      -1 === p && (p = m);
      const h = e2.slice(u, p);
      return void 0 === r2 ? s(t2, h, i) : (void 0 === o ? s(i, h, true) : s(i, o, a ? h.replace(/\\/g, "") : h), s(t2, r2, i)), t2;
    } };
  }