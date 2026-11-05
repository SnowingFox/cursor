// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 20859 range:4398785..4403122
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20859: (e, t, r) => {
    "use strict";
    r.d(t, { Et: () => w, SQ: () => _, SR: () => f, eU: () => p, nH: () => g, pI: () => u, sG: () => A, y8: () => h });
    var n = r(6688), s = r(37949), o = r(33002), i = r(69584), a = r(52774), c = r(51635);
    const l = (0, s.h)("@anysphere/agent-host:managed-local-mode-config");
    function u(e2) {
      if (0 === e2.agentModeConfigs.length) return;
      const t2 = /* @__PURE__ */ new Map();
      for (const r2 of e2.agentModeConfigs) {
        const e3 = (0, n.qiv)(r2.modeId);
        void 0 !== e3 && t2.set(e3, { enableAskQuestionTool: r2.enableAskQuestionTool, switchModeToolConfig: void 0 === r2.switchModeToolConfig ? void 0 : { targetModes: [...r2.switchModeToolConfig.targetModes] } });
      }
      return { modes: t2, useNewPlanModePrompts: e2.useNewPlanModePrompts ?? false };
    }
    const d = { modes: /* @__PURE__ */ new Map([[i.xyI.AGENT, { enableAskQuestionTool: true, switchModeToolConfig: void 0 }]]), useNewPlanModePrompts: false };
    function p(e2, t2, r2, n2) {
      if (void 0 !== e2) {
        if (!e2.modes.has(t2)) throw l.warn(n2, "run_ready agent_mode_configs has no row for the turn's mode; failing the turn", { mode: i.xyI[t2] }), new a.F("mode-config-unavailable", r2);
        return e2;
      }
      if (t2 !== i.xyI.AGENT) throw l.warn(n2, "run_ready carried no agent_mode_configs; failing the non-Agent turn", { mode: i.xyI[t2] }), new a.F("mode-config-unavailable", r2);
      return l.warn(n2, "run_ready carried no agent_mode_configs; Agent turn keeps the pre-field tool decisions"), d;
    }
    function m(e2, t2) {
      const r2 = t2 === i.xyI.UNSPECIFIED ? i.xyI.AGENT : t2, n2 = e2.modes.get(r2);
      if (void 0 === n2) throw new Error(`run_ready agent_mode_configs has no row for mode ${i.xyI[r2]}`);
      return n2;
    }
    function h(e2, t2) {
      return m(e2, t2).enableAskQuestionTool;
    }
    function f(e2) {
      return !m(e2, i.xyI.PLAN).enableAskQuestionTool;
    }
    function g(e2) {
      const t2 = e2.askQuestionConfig;
      if (void 0 !== t2 && "" !== t2.toolName) return { toolName: t2.toolName, autoRejectFirst: t2.autoRejectFirst, shippedOnRunReady: true };
    }
    const y = { toolName: "AskQuestion", autoRejectFirst: false, shippedOnRunReady: false };
    function w(e2, t2) {
      return void 0 !== e2 ? e2 : (l.warn(t2, "run_ready carried no ask_question_config; keeping the AskQuestion name and no first-ask rejection"), y);
    }
    const v = new Set([...c.nn].map(n.m3O));
    function _(e2, t2) {
      const r2 = m(e2, t2).switchModeToolConfig;
      if (void 0 === r2) return;
      const n2 = r2.targetModes.filter((e3) => v.has(e3));
      return 0 === n2.length ? void 0 : { enabled: true, targetModes: n2 };
    }
    function A(e2, t2, r2) {
      const { planSystemReminderGenerator: n2, askSystemReminderGenerator: s2, debugSystemReminderGenerator: a2 } = e2;
      let c2;
      const u2 = (e3, t3, r3, n3) => {
        c2 = { mode: i.xyI[e3], prevTurnMode: void 0 === t3 ? void 0 : i.xyI[t3], included: r3.length > 0, chars: r3.length, ...n3 };
      };
      return { ...e2, toolsGenerator: (n3) => {
        const s3 = e2.toolsGenerator(n3), a3 = c2;
        return c2 = void 0, l.info(n3.loggingContext ?? (0, o.q6)(), "Local loop mode tool set", { mode: i.xyI[n3.mode], modeConfigRows: t2.modes.size, askQuestionTool: h(t2, n3.mode), switchModeTargetModes: _(t2, n3.mode)?.targetModes ?? [], useNewPlanModePrompts: t2.useNewPlanModePrompts, askQuestionToolName: r2.toolName, autoRejectFirstAskQuestion: r2.autoRejectFirst, askQuestionConfigShipped: r2.shippedOnRunReady, modeReminder: a3, dynamicToolProfile: e2.featureFlags?.dynamicToolProfile, staticTools: s3.getStaticTools().map((e3) => e3.name), dynamicTools: s3.getDynamicTools().map((e3) => e3.name) }), s3;
      }, ...n2 && { planSystemReminderGenerator: (e3) => {
        const t3 = n2(e3);
        return u2(i.xyI.PLAN, e3, t3), t3;
      } }, ...s2 && { askSystemReminderGenerator: (e3) => {
        const t3 = s2(e3);
        return u2(i.xyI.ASK, e3.prevTurnMode, t3), t3;
      } }, ...a2 && { debugSystemReminderGenerator: (...e3) => {
        const [t3, r3] = e3, n3 = a2(...e3);
        return u2(i.xyI.DEBUG, void 0, n3, { firstDebugTurn: r3, debugConfigPresent: void 0 !== t3 }), n3;
      } } };
    }
  }