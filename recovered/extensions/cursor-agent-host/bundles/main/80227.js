// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80227 range:11642726..11646617
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80227: (e, t, r) => {
    "use strict";
    r.d(t, { hr: () => o, kM: () => u });
    const n = /* @__PURE__ */ new Set(["ash", "bash", "csh", "dash", "fish", "ksh", "powershell", "pwsh", "sh", "tcsh", "zsh", "cmd"]);
    function s(e2) {
      return e2.trim().split(/\s+/).filter(Boolean);
    }
    function o(e2) {
      const t2 = (function(e3) {
        const t3 = e3.trim(), r3 = t3[0];
        if ('"' === r3 || "'" === r3) {
          const e4 = t3.indexOf(r3, 1);
          if (-1 !== e4) return t3.slice(0, e4 + 1);
        }
        return s(t3)[0];
      })(e2);
      if (!t2) return false;
      const r2 = t2.replace(/^["']|["']$/g, "").replaceAll("\\", "/").split("/"), o2 = (r2[r2.length - 1] ?? "").replace(/\.exe$/i, "").toLowerCase();
      return n.has(o2);
    }
    function i(e2, t2) {
      if (e2.length > t2.length) return false;
      for (let r2 = 0; r2 < e2.length; r2++) if (e2[r2] !== t2[r2]) return false;
      return true;
    }
    function a(e2, t2) {
      return e2.commandName.localeCompare(t2.commandName);
    }
    function c(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n3 of e2) {
        const e3 = n3.trim();
        if (!e3 || t2.has(e3)) continue;
        t2.add(e3);
        const o2 = s(e3), i2 = o2[0] ?? e3;
        r2.push({ id: e3, label: e3, value: e3, commandName: i2, tokenCount: o2.length, indentLevel: 0, tokens: o2, ancestorIds: [e3] });
      }
      r2.sort(a);
      for (let e3 = 0; e3 < r2.length; e3++) {
        const t3 = r2[e3], n3 = new Set(t3.tokens);
        let s2, o2 = false;
        for (let a2 = 0; a2 < e3; a2++) {
          const e4 = r2[a2];
          if (e4.commandName !== t3.commandName) continue;
          if (e4.tokenCount >= t3.tokenCount) continue;
          let c2 = true;
          for (const t4 of e4.tokens) if (!n3.has(t4)) {
            c2 = false;
            break;
          }
          if (!c2) continue;
          const l2 = i(e4.tokens, t3.tokens);
          void 0 !== s2 ? e4.tokenCount > s2.tokenCount ? (s2 = e4, o2 = l2) : e4.tokenCount === s2.tokenCount && l2 && !o2 && (s2 = e4, o2 = true) : (s2 = e4, o2 = l2);
        }
        void 0 !== s2 && (t3.indentLevel = s2.indentLevel + 1, t3.ancestorIds = [...s2.ancestorIds, t3.id]);
      }
      const n2 = r2.filter((e3) => !r2.some((t3) => t3.id !== e3.id && t3.tokenCount < e3.tokenCount && i(t3.tokens, e3.tokens))).map((e3) => e3.id);
      return { options: r2, defaultSelectedOptionIds: n2 };
    }
    function l(e2) {
      return e2.split(" ")[0] ?? e2;
    }
    function u(e2, t2) {
      return (function(e3, t3) {
        const r2 = c(e3), n2 = [...r2.defaultSelectedOptionIds];
        if (!t3 || 0 === t3.length) return { defaultSelectedOptionIds: n2, hasClassifierSuggestions: false };
        const s2 = [], o2 = /* @__PURE__ */ new Set();
        for (const e4 of t3) {
          const t4 = r2.options.find((t5) => t5.id === e4);
          if (t4) {
            s2.push(t4.id), o2.add(l(t4.id));
            continue;
          }
          const n3 = r2.options.filter((t5) => t5.id.startsWith(`${e4} `) || t5.id === e4), i3 = r2.options.filter((t5) => e4.startsWith(`${t5.id} `) || e4 === t5.id);
          if (i3.length > 0) {
            const e5 = i3.reduce((e6, t5) => e6.id.length > t5.id.length ? e6 : t5);
            s2.push(e5.id), o2.add(l(e5.id));
          } else if (n3.length > 0) {
            const e5 = n3.reduce((e6, t5) => e6.id.length < t5.id.length ? e6 : t5);
            s2.push(e5.id), o2.add(l(e5.id));
          }
        }
        if (0 === s2.length) return { defaultSelectedOptionIds: n2, hasClassifierSuggestions: false };
        const i2 = n2.filter((e4) => !o2.has(l(e4)));
        return { defaultSelectedOptionIds: [.../* @__PURE__ */ new Set([...i2, ...s2])], hasClassifierSuggestions: true };
      })(e2, t2).defaultSelectedOptionIds;
    }
  }