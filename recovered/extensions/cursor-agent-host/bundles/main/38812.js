// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 38812 range:7475985..7478032
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38812: (e, t, r) => {
    "use strict";
    r.d(t, { Lm: () => u, h8: () => l, oF: () => d });
    var n = r(68892), s = r(48170), o = r(76476), i = r(23476), a = r(37735), c = r(39738);
    async function l(e2, t2) {
      await t2.flushPostTurnEndedWork?.(e2);
    }
    class u extends Error {
      constructor(e2, t2 = {}) {
        super(e2), this.name = "InteractionListenerStreamClosedError", this.cause = t2.cause, Object.setPrototypeOf(this, new.target.prototype);
      }
    }
    function d(e2, t2) {
      switch (e2.query.case) {
        case "webSearchRequestQuery":
          return c.x1.webSearchRejected(e2.id, t2);
        case "webFetchRequestQuery":
          return c.x1.webFetchRejected(e2.id, t2);
        case "askQuestionInteractionQuery":
          return c.x1.askQuestion(e2.id, new n.tz({ result: { case: "rejected", value: new n.ox({ reason: t2 }) } }));
        case "switchModeRequestQuery":
          return c.x1.switchModeRejected(e2.id, t2);
        case "createPlanRequestQuery":
          return c.x1.createPlan(e2.id, new s.bK({ result: { case: "error", value: new s.iY({ error: t2 }) } }));
        case "setupVmEnvironmentArgs":
          return c.x1.setupVmEnvironment(e2.id, new a.r$({ result: { case: "success", value: new a.JH({}) } }));
        case "replaceEnvArgs":
          return c.x1.replaceEnv(e2.id, new i.dV({ result: { case: "failure", value: new i.uq({ errorMessage: t2, setupLogs: "" }) } }));
        case "prManagementRequestQuery":
          return c.x1.prManagement(e2.id, new o.HL({ result: { case: "error", value: new o.K$({ error: t2 }) } }));
        case "mcpAuthRequestQuery":
          return c.x1.mcpAuthRejected(e2.id, t2);
        case "connectScmRequestQuery":
          return c.x1.connectScmRejected(e2.id, t2);
        case "generateImageRequestQuery":
          return c.x1.generateImageRejected(e2.id, t2);
        case void 0:
          return;
        default:
          return e2.query;
      }
    }
    u.telemetryName = "InteractionListenerStreamClosedError";
  }