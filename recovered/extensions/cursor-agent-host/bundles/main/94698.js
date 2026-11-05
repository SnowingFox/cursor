// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 94698 range:14490692..14492891
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94698: (e, t, r) => {
    "use strict";
    r.d(t, { $: () => l });
    var n = r(17392), s = r(8844), o = r(45904), i = r(36038), a = r(1025), c = r(26814);
    function l(e2, t2, r2 = () => /* @__PURE__ */ new Date()) {
      return async (l2) => {
        l2.signal.throwIfAborted();
        const u = await e2.getIdentity();
        if (l2.signal.throwIfAborted(), void 0 === u) throw new n.SK("Private inference usage admission needs authentication", { requestId: l2.attemptRequestId, displayInfo: { title: "Private inference authentication required", detail: "Sign in to Cursor before starting a private inference turn.", isRetryable: false } });
        const d = await e2.admitRun(u, new o.u({ modelName: l2.modelId, conversationId: l2.conversationId, clientTurnId: l2.attemptRequestId, ...void 0 === l2.promptModel ? {} : { promptModelName: l2.promptModel.modelId, promptModel: new s.RK({ modelId: l2.promptModel.modelId, parameters: l2.promptModel.parameters.map((e3) => new s.nF({ id: e3.id, value: e3.value })) }) } }), l2.signal, { headers: { "x-request-id": l2.attemptRequestId, "x-original-request-id": l2.originalRequestId } });
        if ("" === d.usageUuid) throw new n.SK("Private inference admission returned no usage identifier", { requestId: l2.attemptRequestId });
        let p = 0, m = false, h = false;
        const f = () => {
          h || (h = true, t2.enqueueTurn(u, new o.YN({ usageUuid: d.usageUuid, finishedAt: i.Timestamp.fromDate(r2()), invocationCount: p, modelOutputDelivered: m })));
        };
        if (l2.signal.aborted && (f(), l2.signal.throwIfAborted()), !(0, a.B9)(await e2.getIdentity(), u)) throw f(), (0, a.H8)();
        return { onUsage: (e3) => {
          p++, (e3.usage.outputTokens ?? 0) > 0 && (m = true), t2.enqueue(u, new o.u0({ usageUuid: d.usageUuid, invocationId: e3.invocationId, modelId: e3.modelId, observedAt: i.Timestamp.fromDate(e3.observedAt), status: e3.status, usage: { case: "openaiResponses", value: e3.usage }, ...void 0 === e3.headerUsage ? {} : { headerUsage: e3.headerUsage } }));
        }, finish: f, resolvedModelMetadata: (0, c.Wt)(d.promptModelMetadata, l2.promptModel?.modelId ?? l2.modelId) };
      };
    }
  }