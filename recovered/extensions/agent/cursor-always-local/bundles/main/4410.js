// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4410 range:1154688..1155594
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4410: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { InferenceService: () => o2 });
    var n2 = r2(8844), s2 = r2(6038), i2 = r2(2537);
    const o2 = { typeName: "aiserver.v1.InferenceService", methods: { stream: { name: "Stream", I: n2.Zc, O: n2.jK, kind: s2.MethodKind.ServerStreaming }, recordAgentFollowupClassification: { name: "RecordAgentFollowupClassification", I: n2.yJ, O: s2.Empty, kind: s2.MethodKind.Unary }, recordAgentPostTurnLabeling: { name: "RecordAgentPostTurnLabeling", I: n2.kG, O: s2.Empty, kind: s2.MethodKind.Unary }, runInference: { name: "RunInference", I: n2.jR, O: n2.fJ, kind: s2.MethodKind.BiDiStreaming }, runInferenceSSE: { name: "RunInferenceSSE", I: i2.BidiRequestId, O: n2.fJ, kind: s2.MethodKind.ServerStreaming }, runInferencePoll: { name: "RunInferencePoll", I: i2.BidiPollRequest, O: i2.BidiPollResponse, kind: s2.MethodKind.ServerStreaming } } };
  }