// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 71831 range:6359862..6361467
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71831: (e, t, r) => {
    "use strict";
    r.d(t, { O2: () => i, sh: () => a, sk: () => s });
    var n = r(68503);
    (() => {
      const e2 = globalThis.Intl?.Segmenter;
      e2 && new e2(void 0, { granularity: "grapheme" });
    })();
    function s(e2) {
      const t2 = (0, n.sh)(e2.conversationId);
      if ("subagent" === e2.kind && e2.parentConversationId) {
        const r2 = (0, n.sh)(e2.parentConversationId);
        return `${n.O2}/${r2}/subagents/${t2}.${e2.ext}`;
      }
      return `${n.O2}/${t2}/${t2}.${e2.ext}`;
    }
    var o;
    !(function(e2) {
      e2.INTERNAL = "INTERNAL", e2.EXTERNAL = "EXTERNAL", e2.NO_PREAMBLE = "NO_PREAMBLE";
    })(o || (o = {}));
    "function" == typeof SuppressedError && SuppressedError;
    const i = n.O2, a = n.sh;
    function c(e2, t2) {
      return t2 instanceof Uint8Array ? { __type: "Uint8Array", hex: (r2 = t2, Array.from(r2).map((e3) => e3.toString(16).padStart(2, "0")).join("")) } : "bigint" == typeof t2 ? t2.toString() : t2;
      var r2;
    }
    function l(e2, t2) {
      if (t2 && "object" == typeof t2 && "Uint8Array" === t2.__type && "string" == typeof t2.hex) {
        return `[Binary data omitted from transcript: ${t2.hex.length / 2} bytes]`;
      }
      return t2;
    }
    const u = new TextEncoder(), d = new TextDecoder();
    new class {
      serialize(e2) {
        const t2 = JSON.stringify(e2, c);
        return u.encode(t2);
      }
      deserialize(e2) {
        const t2 = d.decode(e2);
        return t2.includes('"__type":"Uint8Array"') ? JSON.parse(t2, l) : JSON.parse(t2);
      }
    }();
  }