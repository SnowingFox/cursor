// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/agent_service_connect.js" range:619254..621313
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "./agent_service_pb";
import * as __dep1 from "@bufbuild/protobuf";
import * as __dep2 from "../../aiserver/v1/bidi_pb";
var n = __dep0,
  s = __dep1,
  i = __dep2;
const o = {
  typeName: "agent.v1.AgentService",
  methods: {
    run: {
      name: "Run",
      I: n.KS,
      O: n.Oy,
      kind: s.MethodKind.BiDiStreaming
    },
    runSSE: {
      name: "RunSSE",
      I: i.$r,
      O: n.Oy,
      kind: s.MethodKind.ServerStreaming
    },
    runPoll: {
      name: "RunPoll",
      I: i.hD,
      O: i.xy,
      kind: s.MethodKind.ServerStreaming
    },
    nameAgent: {
      name: "NameAgent",
      I: n.Il,
      O: n.mw,
      kind: s.MethodKind.Unary
    },
    updateConversationMetadata: {
      name: "UpdateConversationMetadata",
      I: n.vw,
      O: n.HJ,
      kind: s.MethodKind.Unary
    },
    createTranscriptOverview: {
      name: "CreateTranscriptOverview",
      I: n.BU,
      O: n.Hi,
      kind: s.MethodKind.Unary
    },
    getUsableModels: {
      name: "GetUsableModels",
      I: n.KD,
      O: n.sY,
      kind: s.MethodKind.Unary
    },
    getDefaultModelForCli: {
      name: "GetDefaultModelForCli",
      I: n.Tu,
      O: n.pe,
      kind: s.MethodKind.Unary
    },
    getAllowedModelIntents: {
      name: "GetAllowedModelIntents",
      I: n.Ov,
      O: n.k4,
      kind: s.MethodKind.Unary
    },
    uploadConversationBlobs: {
      name: "UploadConversationBlobs",
      I: n.yD,
      O: n.W$,
      kind: s.MethodKind.Unary
    },
    uploadLocalAgentRunToPromptQuality: {
      name: "UploadLocalAgentRunToPromptQuality",
      I: n.uK,
      O: n.eE,
      kind: s.MethodKind.Unary
    },
    getSignedUrlForAttachedMedia: {
      name: "GetSignedUrlForAttachedMedia",
      I: n.W3,
      O: n.wq,
      kind: s.MethodKind.Unary
    },
    notifyConversationClone: {
      name: "NotifyConversationClone",
      I: n.xk,
      O: n.JF,
      kind: s.MethodKind.Unary
    },
    warmUp: {
      name: "WarmUp",
      I: n.EC,
      O: n.M2,
      kind: s.MethodKind.Unary
    },
    getNewChatNudgeLegacyModelPicker: {
      name: "GetNewChatNudgeLegacyModelPicker",
      I: n.Pg,
      O: n.zP,
      kind: s.MethodKind.Unary
    },
    getNewChatNudgeParameterizedModelPicker: {
      name: "GetNewChatNudgeParameterizedModelPicker",
      I: n.hs,
      O: n.TW,
      kind: s.MethodKind.Unary
    },
    getPromptContextUsage: {
      name: "GetPromptContextUsage",
      I: n.Y3,
      O: n.KE,
      kind: s.MethodKind.Unary
    },
    listLocalSubscriptionTools: {
      name: "ListLocalSubscriptionTools",
      I: n.dw,
      O: n.JH,
      kind: s.MethodKind.Unary
    },
    callLocalSubscriptionTool: {
      name: "CallLocalSubscriptionTool",
      I: n.uw,
      O: n.uu,
      kind: s.MethodKind.Unary
    },
    streamLocalAgentMailbox: {
      name: "StreamLocalAgentMailbox",
      I: n.k5,
      O: n.ic,
      kind: s.MethodKind.ServerStreaming
    }
  }
};
export { o as N };
