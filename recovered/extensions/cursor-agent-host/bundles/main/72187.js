// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 72187 range:10987136..10994500
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72187: (e, t, r) => {
    "use strict";
    r.d(t, { zC: () => I.zC, wB: () => k, _9: () => T, qU: () => x, CG: () => b, JY: () => E, Z5: () => R, Z9: () => u.Z9, JM: () => I.JM, LQ: () => c.L, XJ: () => I.XJ, Tz: () => C.oF, AO: () => l.A, Gh: () => d });
    r(27498), r(82103);
    var n = r(4113), s = r(60431), o = r(17714), i = r(95750);
    var a = r(87339), c = (r(51635), r(11247));
    r(18951), r(77598);
    var l = r(829), u = r(60544);
    function d(e2) {
      const t2 = e2.action;
      if (void 0 === t2) throw new Error("Agent-host action request is missing an action");
      return { sessionId: e2.sessionId, modelId: e2.modelId, modelDetails: e2.modelDetails, requestedModel: e2.requestedModel, action: t2, baseHistory: e2.baseHistory, turnOptions: e2.turnOptions, requestContextDecoration: e2.requestContextDecoration, delivery: e2.delivery, replaceQueuedTurnId: e2.replaceQueuedTurnId };
    }
    var p = r(33002), m = r(91105), h = r(60525), f = r(80227), g = r(36190), y = r(98934);
    function w(e2) {
      switch (e2) {
        case "user":
          return h.Ze.USER;
        case "project":
          return h.Ze.PROJECT;
        case "enterprise":
          return h.Ze.ENTERPRISE;
        case "team":
          return h.Ze.TEAM;
        default:
          return;
      }
    }
    function v(e2) {
      const t2 = "outOfWorkspace" === (r2 = e2.details.blockReason) ? h.kr.OUT_OF_WORKSPACE : "protectedConfig" === r2 ? h.kr.PROTECTED_CONFIG : "workspaceWrite" === r2 ? h.kr.WORKSPACE_WRITE : void 0;
      var r2;
      return new h.G_({ path: e2.details.path, reason: e2.details.reason, isNewFile: e2.details.isNewFile, diffString: e2.details.diffString, ...void 0 === e2.details.before ? {} : { before: e2.details.before }, ...void 0 === e2.details.after ? {} : { after: e2.details.after }, ...void 0 === t2 ? {} : { blockReason: t2 } });
    }
    function _(e2) {
      const t2 = w(e2.details.hookSource);
      return new h.J3({ command: e2.details.command, workingDirectory: e2.details.workingDirectory, timeout: e2.details.timeout, ...void 0 === e2.details.reason ? {} : { reason: e2.details.reason }, ...void 0 === e2.details.isSandboxAvailable ? {} : { isSandboxAvailable: e2.details.isSandboxAvailable }, ...void 0 === e2.details.isSandboxEnabled ? {} : { isSandboxEnabled: e2.details.isSandboxEnabled }, ...void 0 === e2.details.canAllowlist ? {} : { canAllowlist: e2.details.canAllowlist }, notAllowedCommands: e2.details.notAllowedCommands ?? [], suggestedAllowlistEntries: e2.details.suggestedAllowlistEntries ?? [], ...void 0 === e2.details.smartModeApprovalReason ? {} : { smartModeApprovalReason: e2.details.smartModeApprovalReason }, ...void 0 === e2.details.smartModeApprovalRequestId ? {} : { smartModeApprovalRequestId: e2.details.smartModeApprovalRequestId }, ...void 0 === t2 ? {} : { hookSource: t2 } });
    }
    function A(e2) {
      const t2 = w(e2.details.hookSource);
      return new h.$b({ name: e2.details.name, toolName: e2.details.toolName, providerIdentifier: e2.details.providerIdentifier, args: e2.details.args, ...void 0 === e2.details.source ? {} : { source: e2.details.source }, ...void 0 === e2.details.reason ? {} : { reason: e2.details.reason }, ...void 0 === e2.details.canAllowlist ? {} : { canAllowlist: e2.details.canAllowlist }, ...void 0 === e2.details.smartModeApprovalReason ? {} : { smartModeApprovalReason: e2.details.smartModeApprovalReason }, ...void 0 === e2.details.smartModeApprovalRequestId ? {} : { smartModeApprovalRequestId: e2.details.smartModeApprovalRequestId }, ...void 0 === t2 ? {} : { hookSource: t2 } });
    }
    function S(e2) {
      switch (e2.type) {
        case m.S5n.Write:
          return new h.yu({ type: h.cj.WRITE, details: { case: "write", value: v(e2) } });
        case m.S5n.Shell:
          return new h.yu({ type: h.cj.SHELL, details: { case: "shell", value: _(e2) } });
        case m.S5n.Delete:
          return new h.yu({ type: h.cj.DELETE, details: { case: "delete", value: new h.s({ path: e2.details.path }) } });
        case m.S5n.Mcp:
          return new h.yu({ type: h.cj.MCP, details: { case: "mcp", value: A(e2) } });
        default:
          return e2;
      }
    }
    function b(e2) {
      return async (t2) => {
        const r2 = t2.type === m.S5n.Read ? (function(e3) {
          return new h.oX({ toolCallId: e3.toolCallId ?? "", operation: new h.yu({ type: h.cj.READ, details: { case: "read", value: new h.x5({ path: e3.details.path, ...void 0 === e3.details.reason ? {} : { reason: e3.details.reason } }) } }) });
        })(t2) : (function(e3) {
          return new h.oX({ toolCallId: e3.toolCallId ?? "", operation: S(e3) });
        })(t2);
        r2.offeredAllowlistEntries = (function(e3) {
          const t3 = e3?.details;
          switch (t3?.case) {
            case "shell":
              return true === t3.value.canAllowlist ? t3.value.notAllowedCommands.filter((e4) => !(0, f.hr)(e4)) : [];
            case "mcp": {
              if (true !== t3.value.canAllowlist) return [];
              const e4 = t3.value.providerIdentifier.trim().toLowerCase(), r3 = t3.value.toolName.trim().toLowerCase(), n3 = (e5) => e5.length > 0 && e5.length <= 256 && !/[:*]/.test(e5);
              return n3(e4) && n3(r3) ? [`${e4}:${r3}`] : [];
            }
            default:
              return [];
          }
        })(r2.operation);
        const n2 = { case: "execApproval", value: r2 }, s2 = await e2((0, p.q6)(), n2).catch((e3) => (0, g.sJ)(n2, `The approval ended without an answer: ${(0, y.E)(e3)}`));
        return "execApproval" !== s2.case ? { approved: false, reason: "The approval was answered with a different kind of answer" } : s2.value.approved ? { approved: true } : void 0 === s2.value.reason ? { approved: false } : { approved: false, reason: s2.value.reason };
      };
    }
    function E(e2) {
      return async (t2, r2, n2, s2, o2) => {
        const i2 = { case: "mcpElicitation", value: new h.Gb({ serverName: t2, toolName: r2, ...void 0 === n2 ? {} : { toolCallId: n2 }, elicitation: new h.vb({ message: s2.message, requestedSchemaJson: JSON.stringify(s2.requestedSchema) }) }) }, a2 = await e2(void 0 === o2 ? (0, p.q6)() : (function(e3) {
          const [t3, r3] = (0, p.q6)().withCancel();
          e3.aborted ? r3(e3.reason) : e3.addEventListener("abort", () => r3(e3.reason), { once: true });
          return t3;
        })(o2), i2).catch((e3) => (0, g.sJ)(i2, `The form ended without an answer: ${(0, y.E)(e3)}`));
        if ("mcpElicitation" !== a2.case) return { action: "cancel" };
        switch (a2.value.action) {
          case h.M.ACCEPT: {
            const e3 = a2.value.content?.toJson();
            return "object" != typeof e3 || null === e3 || Array.isArray(e3) ? { action: "accept" } : { action: "accept", content: e3 };
          }
          case h.M.DECLINE:
            return { action: "decline" };
          default:
            return { action: "cancel" };
        }
      };
    }
    var I = r(75405), C = r(80962);
    r(69457), r(91693), r(76183), r(16074), r(67360), r(46144);
    r(39024);
    const k = n.wB, x = n.qU, T = function(e2, t2 = {}) {
      const r2 = (t2.createContextClient ?? ((e3, t3) => (0, s.Zj)(e3, t3)))(o.AgentService, e2);
      return (0, i.u)({ run: (e3, t3, n2) => r2.run(e3, t3, n2) });
    }, R = a.Z;
  }