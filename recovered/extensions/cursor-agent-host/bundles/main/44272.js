// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 44272 range:7805238..7807439
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44272: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      void 0 !== e2 && t2.length > 0 && e2.push(...t2);
    }
    r.d(t, { B1: () => s, Bv: () => n, nB: () => d, JJ: () => c, vV: () => l, Rp: () => u });
    class s extends Error {
      constructor(e2) {
        super(`Hook additional_context for ${e2.hookEventName} is ${e2.actualLength} chars (max ${e2.maxLength}).`), this.name = "HookAdditionalContextTooLargeError", this.hookEventName = e2.hookEventName, this.actualLength = e2.actualLength, this.maxLength = e2.maxLength;
      }
    }
    var o = r(21180);
    const i = 1e4;
    var a = r(91022);
    Object.fromEntries(Array.from(a.Qu).map((e2) => {
      if (!(function(e3) {
        return e3 === a._E.sessionStart || e3 === a._E.beforeSubmitPrompt || e3 === a._E.preToolUse || e3 === a._E.postToolUse || e3 === a._E.postToolUseFailure;
      })(e2)) throw new Error(`HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT lists ${e2} but HookStepAdditionalContextEventName does not include it. Extend the Extract<> union in spec.ts.`);
      return [e2, { hookEventName: e2 }];
    }));
    function c({ hookEventName: e2, additionalContext: t2 }) {
      const r2 = (function(e3) {
        const t3 = e3?.trim();
        return void 0 !== t3 && t3.length > 0 ? t3 : void 0;
      })(t2);
      if (void 0 === r2) return [];
      if (r2.length > i) throw new s({ hookEventName: e2, actualLength: r2.length, maxLength: i });
      return [new o.C({ hookEventName: e2, content: r2 })];
    }
    function l(e2, t2) {
      const r2 = e2?.trim();
      if (!r2) return;
      if (r2.length > i) return void t2?.(r2.length, i);
      return `<system_reminder>
${(0, a.Mw)(r2)}
</system_reminder>`;
    }
    function u(e2) {
      const t2 = e2.trim();
      if (0 !== t2.length) return `<system_reminder>
${(0, a.Mw)(t2)}
</system_reminder>`;
    }
    function d(e2, t2, r2) {
      const n2 = (function(e3) {
        return e3.map((e4) => e4.content.trim()).filter((e4) => e4.length > 0);
      })(r2).flatMap((e3) => {
        const t3 = u(e3);
        return void 0 === t3 ? [] : [t3];
      });
      for (const r3 of n2) e2.push(r3), t2.push({ type: "text", text: r3 });
    }
  }