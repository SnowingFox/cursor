// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56359 range:8715568..8716786
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56359: (e, t, r) => {
    "use strict";
    r.d(t, { Jp: () => a, Wr: () => c, ao: () => s, bi: () => l, m2: () => p, n_: () => d, s8: () => u, tq: () => f, wo: () => g });
    const n = "ask_question_auto_answer", s = "No response was received within the time limit", o = `${s}. Proceed with the recommended option(s) you offered for each question, or your best judgment based on the information already available.`;
    function i(e2 = "timeout") {
      return { marker: n, kind: e2 };
    }
    const a = (function(e2 = i()) {
      return `${e2.marker}:${e2.kind}|${o}`;
    })();
    function c(e2) {
      const t2 = (e2 ?? "").trim().match(new RegExp(`^${n}:(timeout|other)\\|`));
      if (null !== t2) return i(t2[1]);
    }
    function l(e2) {
      return void 0 !== c(e2) || (e2 ?? "").trim().startsWith(s);
    }
    const u = "decision", d = "allow", p = "deny", m = "Allow this agent to run workers on ", h = "?";
    function f(e2) {
      return `${m}${e2}${h}`;
    }
    function g(e2) {
      const t2 = (e2 ?? "").trim();
      if (!t2.startsWith(m) || !t2.endsWith(h)) return;
      const r2 = t2.slice(m.length, t2.length - h.length).trim();
      return r2.length > 0 ? r2 : void 0;
    }
  }