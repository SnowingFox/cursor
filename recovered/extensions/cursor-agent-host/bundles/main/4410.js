// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4410 range:399618..400493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4410: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { InferenceService: () => i });
    var n = r(8844), s = r(36038), o = r(82537);
    const i = { typeName: "aiserver.v1.InferenceService", methods: { stream: { name: "Stream", I: n.Zc, O: n.jK, kind: s.MethodKind.ServerStreaming }, recordAgentFollowupClassification: { name: "RecordAgentFollowupClassification", I: n.yJ, O: s.Empty, kind: s.MethodKind.Unary }, recordAgentPostTurnLabeling: { name: "RecordAgentPostTurnLabeling", I: n.kG, O: s.Empty, kind: s.MethodKind.Unary }, runInference: { name: "RunInference", I: n.jR, O: n.fJ, kind: s.MethodKind.BiDiStreaming }, runInferenceSSE: { name: "RunInferenceSSE", I: o.BidiRequestId, O: n.fJ, kind: s.MethodKind.ServerStreaming }, runInferencePoll: { name: "RunInferencePoll", I: o.BidiPollRequest, O: o.BidiPollResponse, kind: s.MethodKind.ServerStreaming } } };
  }