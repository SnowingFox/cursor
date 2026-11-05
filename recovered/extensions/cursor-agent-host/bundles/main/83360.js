// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83360 range:11929602..11959853
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83360: (e, t, r) => {
    "use strict";
    r.d(t, { A6: () => c, Ac: () => B, Mm: () => ee, ku: () => a, Fn: () => g });
    var n = r(12595), s = r(98875), o = r(8844), i = r(33002);
    const a = (0, i.cF)(/* @__PURE__ */ Symbol("requestId"), void 0), c = (0, i.cF)(/* @__PURE__ */ Symbol("conversationId"), void 0), l = (0, i.cF)(/* @__PURE__ */ Symbol("conversationGroupId"), void 0), u = (0, i.cF)(/* @__PURE__ */ Symbol("automationId"), void 0), d = (0, i.cF)(/* @__PURE__ */ Symbol("originatingFlow"), void 0), p = ((0, i.cF)(/* @__PURE__ */ Symbol("requestModelName"), void 0), (0, i.cF)(/* @__PURE__ */ Symbol("parentRequestId"), void 0)), m = (0, i.cF)(/* @__PURE__ */ Symbol("rootParentRequestId"), void 0), h = (0, i.cF)(/* @__PURE__ */ Symbol("parentAgentToolCallId"), void 0), f = (0, i.cF)(/* @__PURE__ */ Symbol("subagentType"), void 0), g = (0, i.cF)(/* @__PURE__ */ Symbol("requestedModel"), void 0);
    const y = (0, i.cF)(/* @__PURE__ */ Symbol("callerRoutingReason"), void 0), w = (0, i.cF)(/* @__PURE__ */ Symbol("turnUnitId"), void 0), v = (0, i.cF)(/* @__PURE__ */ Symbol("turnUnitType"), void 0);
    var _ = r(36038);
    function A(e2) {
      const t2 = e2.providerOptions?.cursor?.modelName;
      return "string" == typeof t2 ? t2 : void 0;
    }
    function S(e2) {
      const t2 = e2.providerOptions?.cursor?.lineageTag;
      return "string" == typeof t2 && t2.length > 0 ? t2 : void 0;
    }
    function b(e2) {
      const t2 = void 0 !== e2.lineageTag && e2.lineageTag.length > 0 ? e2.lineageTag : void 0;
      return void 0 === e2.modelName && void 0 === t2 ? {} : { providerOptions: { cursor: { ...void 0 !== e2.modelName ? { modelName: e2.modelName } : {}, ...void 0 !== t2 ? { lineageTag: t2 } : {} } } };
    }
    function E(e2, t2, r2) {
      if ("object" == typeof t2 && null !== t2 && !Array.isArray(t2)) return e2.args = T(_.Struct.fromJson(t2)), void (void 0 !== r2 && (e2.rawToolCallArgs = k(r2)));
      const n2 = "string" == typeof t2 ? t2 : (function(e3) {
        const t3 = JSON.stringify(e3);
        return C.test(t3) ? JSON.stringify(JSON.parse(t3, x)) : t3;
      })(t2);
      if (void 0 === n2) throw new Error(`cannot represent tool call arguments of type ${typeof t2} as a JSON object or raw text`);
      e2.rawToolCallArgs = k(r2 ?? n2);
    }
    function I(e2) {
      return e2.args?.toJson() ?? e2.rawToolCallArgs ?? {};
    }
    const C = /\\ud[89a-f]/;
    function k(e2) {
      return "string" == typeof e2 ? e2.toWellFormed() : e2;
    }
    function x(e2, t2) {
      return "string" == typeof t2 ? k(t2) : null === t2 || "object" != typeof t2 || Array.isArray(t2) ? t2 : Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [k(e3), t3]));
    }
    function T(e2) {
      const { fields: t2 } = e2;
      let r2 = true;
      for (const e3 of Object.keys(t2)) R(t2[e3]), r2 &&= k(e3) === e3;
      return r2 || (e2.fields = Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [k(e3), t3]))), e2;
    }
    function R(e2) {
      const { kind: t2 } = e2;
      if ("stringValue" === t2.case) t2.value = k(t2.value);
      else if ("structValue" === t2.case) T(t2.value);
      else if ("listValue" === t2.case) for (const e3 of t2.value.values) R(e3);
    }
    function B(e2) {
      const t2 = new o.C7();
      t2.role = N(e2.role), (function(e3, t3) {
        const { inferenceReason: r3, featureType: n3, isSummary: s2 } = (function(e4) {
          const t4 = e4?.cursor;
          return { inferenceReason: "string" == typeof t4?.inferenceReason && t4.inferenceReason.length > 0 ? t4.inferenceReason : void 0, featureType: "string" == typeof t4?.featureType && t4.featureType.length > 0 ? t4.featureType : void 0, isSummary: true === t4?.isSummary || void 0 };
        })(t3);
        void 0 !== r3 && (e3.cursorInferenceReason = k(r3)), void 0 !== n3 && (e3.cursorFeatureType = k(n3)), s2 && (e3.cursorIsSummary = true);
      })(t2, e2.providerOptions);
      const r2 = e2.providerOptions?.cursor?.lineageTag;
      "system" !== e2.role && "string" == typeof r2 && r2.length > 0 && (t2.lineageTag = r2);
      const n2 = e2.providerOptions?.cursor?.requestId;
      if ("user" === e2.role && "string" == typeof n2 && n2.length > 0 && (t2.cursorRequestId = k(n2)), "user" === e2.role) {
        if ("string" == typeof e2.content) t2.content = { case: "text", value: k(e2.content) };
        else if (Array.isArray(e2.content)) {
          const r3 = new o.b7();
          r3.parts = e2.content.map((e3) => (function(e4) {
            const t3 = new o.WC();
            if ("text" === e4.type) {
              const r4 = new o.Mg();
              r4.text = k(e4.text), r4.providerOptions = F(e4.providerOptions), t3.part = { case: "text", value: r4 };
            } else if ("image" === e4.type) {
              const r4 = new o.KU(), n3 = e4.image;
              "string" == typeof n3 ? r4.data = k(n3) : n3 instanceof URL ? r4.data = n3.toString() : n3 instanceof Uint8Array ? r4.data = L(n3, e4.mimeType) : n3 instanceof ArrayBuffer && (r4.data = L(new Uint8Array(n3), e4.mimeType)), r4.mimeType = k(e4.mimeType), r4.providerOptions = F(e4.providerOptions), t3.part = { case: "image", value: r4 };
            } else if ("file" === e4.type) {
              const r4 = new o.Mg();
              r4.text = k(`[File: ${e4.name ?? "unnamed"}]`), t3.part = { case: "text", value: r4 };
            } else {
              const e5 = new o.Mg();
              e5.text = "", t3.part = { case: "text", value: e5 };
            }
            return t3;
          })(e3)), t2.content = { case: "parts", value: r3 };
        }
      } else if ("assistant" === e2.role) {
        if (P(t2, e2), "string" == typeof e2.content) t2.content = { case: "text", value: k(e2.content) };
        else if (Array.isArray(e2.content)) {
          const r3 = M(e2.content, t2, { keepRawToolCallArgs: true });
          void 0 !== r3 && (t2.content = { case: "text", value: r3 });
        }
      } else if ("tool" === e2.role) {
        if (Array.isArray(e2.content)) {
          const r3 = (function(e3) {
            const t3 = e3.providerOptions?.cursor?.highLevelToolCallResult?.isError;
            return "boolean" == typeof t3 ? t3 : void 0;
          })(e2), n3 = new o.eQ();
          n3.parts = e2.content.filter((e3) => "tool-result" === e3.type).map((e3) => {
            const t3 = new o.up();
            return t3.toolCallId = k(e3.toolCallId), t3.toolName = k(e3.toolName), void 0 !== e3.result && (t3.result = (function(e4) {
              if ("string" == typeof e4) return _.Value.fromJson(k(e4));
              const t4 = JSON.stringify(e4);
              return _.Value.fromJson(JSON.parse(t4, C.test(t4) ? x : void 0));
            })(e3.result)), e3.isError && (t3.isError = true), void 0 !== r3 && (t3.cursorToolCallIsError = r3), void 0 !== e3.experimental_content && e3.experimental_content.length > 0 && (t3.experimentalContent = e3.experimental_content.map((e4) => {
              const t4 = new o.WC();
              return "image" === e4.type ? t4.part = { case: "image", value: new o.KU({ data: k(e4.data), mimeType: k(e4.mimeType) }) } : t4.part = { case: "text", value: new o.Mg({ text: k(e4.text) }) }, t4;
            })), t3.providerOptions = F(e3.providerOptions), t3;
          }), t2.content = { case: "toolContent", value: n3 };
        }
      } else if ("system" === e2.role) {
        t2.content = { case: "text", value: k(e2.content) };
        const r3 = e2.providerOptions?.cursor?.clearAt;
        if ("string" == typeof r3 && r3.length > 0) {
          t2.cursorClearAt = k(r3);
          const n3 = e2.providerOptions?.cursor?.fallbackInsertBefore;
          "string" == typeof n3 && n3.length > 0 && (t2.cursorFallbackInsertBefore = k(n3));
        }
      }
      return t2;
    }
    function P(e2, t2) {
      const r2 = (function(e3) {
        const t3 = e3.providerOptions?.cursor, r3 = t3?.modelProviderMessageId, n3 = t3?.openaiPhase;
        return { modelProviderMessageId: "string" == typeof r3 ? r3 : void 0, openaiPhase: "string" == typeof n3 || null === n3 ? n3 : void 0 };
      })(t2);
      void 0 !== r2.modelProviderMessageId && (e2.modelProviderMessageId = k(r2.modelProviderMessageId)), "string" == typeof r2.openaiPhase ? e2.openaiPhase = k(r2.openaiPhase) : null === r2.openaiPhase && (e2.openaiPhaseNull = true);
      const n2 = t2.providerOptions?.cursor?.anthropicNativeContent;
      "string" == typeof n2 && n2.length > 0 && (e2.anthropicNativeContent = k(n2));
    }
    function J(e2) {
      const t2 = (function(e3, t3, r3) {
        if (void 0 !== e3 || void 0 !== t3 || r3) return { cursor: { ...void 0 !== e3 ? { modelProviderMessageId: e3 } : {}, ...void 0 !== t3 ? { openaiPhase: t3 } : r3 ? { openaiPhase: null } : {} } };
      })(e2.modelProviderMessageId, e2.openaiPhase, true === e2.openaiPhaseNull), r2 = e2.anthropicNativeContent;
      return void 0 === r2 || 0 === r2.length ? t2 : { cursor: { ...t2?.cursor, anthropicNativeContent: r2 } };
    }
    function M(e2, t2, { keepRawToolCallArgs: r2 }) {
      const n2 = [], s2 = [], i2 = [];
      for (const a2 of e2) if ("text" === a2.type) {
        const e3 = k(a2.text);
        n2.push(e3), e3.length > 0 && (s2.push(e3), i2.push(o.Hc.TEXT));
      } else if ("tool-call" === a2.type) {
        const e3 = new o.m3();
        e3.toolCallId = k(a2.toolCallId), e3.toolName = k(a2.toolName);
        const n3 = r2 ? a2.providerOptions?.cursor?.rawToolCallArgs : void 0;
        E(e3, a2.args, "string" == typeof n3 ? n3 : void 0), t2.toolCalls.push(e3), i2.push(o.Hc.TOOL_CALL);
      } else if ("reasoning" === a2.type) {
        const e3 = a2;
        t2.reasoningParts.push(new o.bn({ isRedacted: false, text: k(e3.text), signature: k(e3.signature), modelName: k(A(e3)), lineageTag: S(e3) })), i2.push(o.Hc.REASONING);
      } else if ("redacted-reasoning" === a2.type) {
        const e3 = a2;
        t2.reasoningParts.push(new o.bn({ isRedacted: true, redactedData: k(e3.data), modelName: k(A(e3)), lineageTag: S(e3) })), i2.push(o.Hc.REASONING);
      }
      return (function(e3) {
        let t3 = 0, r3 = 0;
        for (const n3 of e3) {
          const e4 = q.get(n3) ?? 0;
          if (e4 < t3) return false;
          if (n3 === o.Hc.TEXT && ++r3 > 1) return false;
          t3 = e4;
        }
        return true;
      })(i2) || (t2.assistantPartOrder = i2, s2.length > 1 && (t2.assistantTextParts = s2)), n2.length > 0 ? n2.join("") : void 0;
    }
    const q = /* @__PURE__ */ new Map([[o.Hc.REASONING, 0], [o.Hc.TEXT, 1], [o.Hc.TOOL_CALL, 2]]);
    function D(e2) {
      return e2.isRedacted ? { type: "redacted-reasoning", data: e2.redactedData ?? "", ...b(e2) } : { type: "reasoning", text: e2.text, ...void 0 !== e2.signature ? { signature: e2.signature } : {}, ...b(e2) };
    }
    function O(e2, t2, { keepRawToolCallArgs: r2 }) {
      const n2 = e2.reasoningParts.map(D), s2 = e2.toolCalls.map((e3) => (function(e4, t3) {
        return { type: "tool-call", toolCallId: e4.toolCallId, toolName: e4.toolName, args: I(e4), ...t3 && void 0 !== e4.rawToolCallArgs ? { providerOptions: { cursor: { rawToolCallArgs: e4.rawToolCallArgs } } } : {} };
      })(e3, r2)), i2 = (function(e3, t3) {
        if (0 === e3.assistantPartOrder.length) return;
        let r3 = 0, n3 = 0, s3 = 0;
        for (const t4 of e3.assistantPartOrder) switch (t4) {
          case o.Hc.REASONING:
            r3++;
            break;
          case o.Hc.TEXT:
            n3++;
            break;
          case o.Hc.TOOL_CALL:
            s3++;
            break;
          default:
            return;
        }
        if (r3 !== e3.reasoningParts.length || s3 !== e3.toolCalls.length) return;
        const i3 = t3 ?? "", a3 = e3.assistantTextParts.length > 0 ? e3.assistantTextParts : i3.length > 0 ? [i3] : [];
        return a3.length === n3 && a3.join("") === i3 ? a3 : void 0;
      })(e2, t2);
      if (void 0 === i2) return [...n2, ...void 0 !== t2 && t2.length > 0 ? [{ type: "text", text: t2 }] : [], ...s2];
      let a2 = 0, c2 = 0, l2 = 0;
      return e2.assistantPartOrder.map((e3) => {
        switch (e3) {
          case o.Hc.REASONING:
            return n2[a2++];
          case o.Hc.TEXT:
            return { type: "text", text: i2[c2++] };
          default:
            return s2[l2++];
        }
      });
    }
    function N(e2) {
      switch (e2) {
        case "user":
          return o.tB.USER;
        case "assistant":
          return o.tB.ASSISTANT;
        case "tool":
          return o.tB.TOOL;
        case "system":
          return o.tB.SYSTEM;
        default:
          return o.tB.UNSPECIFIED;
      }
    }
    function F(e2) {
      if (!e2 || "object" != typeof e2) return;
      const t2 = e2, r2 = new o.pQ();
      let n2 = false;
      if (t2.anthropic?.cacheControl) {
        const e3 = new o.AC(), s3 = new o.X0();
        s3.type = k(t2.anthropic.cacheControl.type), e3.cacheControl = s3, r2.anthropic = e3, n2 = true;
      }
      const s2 = (function(e3) {
        if (!e3 || "object" != typeof e3) return;
        const t3 = new o.iG();
        let r3 = false;
        if ("string" == typeof e3.imageDescription && e3.imageDescription.length > 0 && (t3.imageDescription = k(e3.imageDescription), r3 = true), null !== e3.imageDescriptions && "object" == typeof e3.imageDescriptions) for (const [n3, s3] of Object.entries(e3.imageDescriptions)) {
          const e4 = Number(n3);
          Number.isInteger(e4) && e4 >= 0 && "string" == typeof s3 && s3.length > 0 && (t3.imageDescriptions[e4] = k(s3), r3 = true);
        }
        return "string" == typeof e3.imageContentSha256 && e3.imageContentSha256.length > 0 && (t3.imageContentSha256 = k(e3.imageContentSha256), r3 = true), r3 ? t3 : void 0;
      })(t2.cursor);
      return void 0 !== s2 && (r2.cursor = s2, n2 = true), n2 ? r2 : void 0;
    }
    const U = "image/png";
    function L(e2, t2) {
      return `data:${"string" == typeof t2 && "" !== t2.trim() ? k(t2) : U};base64,${Buffer.from(e2).toString("base64")}`;
    }
    function $(e2) {
      const t2 = new o.nO();
      if (t2.name = e2.name, t2.description = e2.description, t2.parameters = _.Struct.fromJsonString(JSON.stringify(e2.parameters)), e2.customToolFormat) {
        const r2 = new o.Am();
        r2.type = e2.customToolFormat.type, r2.definition = e2.customToolFormat.definition, r2.syntax = e2.customToolFormat.syntax, t2.customToolFormat = r2;
      }
      return t2;
    }
    function Q(e2) {
      const t2 = new o.Vr();
      return t2.name = e2.name, t2.id = e2.id, t2.type = e2.type, e2.options && (t2.options = _.Struct.fromJson(e2.options)), t2;
    }
    function j(e2) {
      return e2.errorType === o.qL.INPUT_TOKEN_LIMIT || e2.isInputTokenLimitError ? new n.R1(e2.message) : e2.errorType === o.qL.OUTPUT_TOKEN_LIMIT || e2.isOutputTokenLimitError ? new n.YE(e2.message) : (0, n.ud)(e2.message) ?? new Error(e2.message);
    }
    function G(e2) {
      e2.catch(() => {
      });
    }
    class H extends n.D5 {
      replaceMessage(e2, t2) {
        const r2 = this.messages.indexOf(e2);
        return -1 !== r2 && (this.messages[r2] = t2, true);
      }
    }
    function z(e2, t2) {
      if (Array.isArray(e2.content)) {
        if ("user" === e2.role) {
          const r2 = [...e2.content];
          let n2 = false;
          for (const e3 of t2) {
            if (void 0 !== e3.expContentIndex) continue;
            const t3 = r2[e3.partIndex];
            void 0 !== t3 && "image" === t3.type && (r2[e3.partIndex] = { ...t3, providerOptions: { ...t3.providerOptions, cursor: { ...t3.providerOptions?.cursor, imageDescription: e3.description } } }, n2 = true);
          }
          return n2 ? { ...e2, content: r2 } : void 0;
        }
        if ("tool" === e2.role) {
          const r2 = [...e2.content];
          let n2 = false;
          for (const e3 of t2) {
            if (void 0 === e3.expContentIndex) continue;
            const t3 = r2[e3.partIndex];
            if (void 0 === t3 || "tool-result" !== t3.type || !Array.isArray(t3.experimental_content) || "image" !== t3.experimental_content[e3.expContentIndex]?.type) continue;
            const s2 = t3.providerOptions?.cursor?.imageDescriptions ?? {};
            r2[e3.partIndex] = { ...t3, providerOptions: { ...t3.providerOptions, cursor: { ...t3.providerOptions?.cursor, imageDescriptions: { ...s2, [e3.expContentIndex]: e3.description } } } }, n2 = true;
          }
          return n2 ? { ...e2, content: r2 } : void 0;
        }
      }
    }
    function W(e2, t2) {
      return void 0 === t2 || 0 === t2.length ? e2 : { ...e2, cursor: { ...e2?.cursor, lineageTag: t2 } };
    }
    function V(e2, t2) {
      if ("string" == typeof e2) return e2;
      let r2 = 0;
      return e2.map((e3) => {
        if ("reasoning" !== e3.type && "redacted-reasoning" !== e3.type) return e3;
        const n2 = t2[r2];
        return r2 += 1, void 0 === n2 || 0 === n2.length ? e3 : { ...e3, providerOptions: { ...e3.providerOptions, cursor: { ...e3.providerOptions?.cursor, lineageTag: n2 } } };
      });
    }
    class K extends n.NT {
      constructor(e2, t2, r2, n2, s2) {
        super(e2), this.client = t2, this.requestedModel = r2, this.modelConfig = n2, this.inferenceReason = s2, this.protoBuilder = e2;
      }
      applyImageDescriptions(e2, t2) {
        const r2 = /* @__PURE__ */ new Map();
        for (const e3 of t2.descriptions) {
          if (0 === e3.description.length) continue;
          const t3 = r2.get(e3.messageIndex) ?? [];
          t3.push(e3), r2.set(e3.messageIndex, t3);
        }
        for (const [t3, n2] of r2) {
          const r3 = e2[t3];
          if (void 0 === r3) continue;
          const s2 = z(r3, n2);
          void 0 !== s2 && this.replaceRequestMessage(e2, t3, s2);
        }
      }
      applyLineageTags(e2, t2) {
        for (const { messageIndex: r2, tag: n2, reasoningTags: s2 } of t2.tags) {
          const t3 = e2[r2];
          if (void 0 === t3 || "system" === t3.role || 0 === n2.length) continue;
          const o2 = W(t3.providerOptions, n2);
          this.replaceRequestMessage(e2, r2, { ...t3, ..."assistant" === t3.role && s2.length > 0 ? { content: V(t3.content, s2) } : {}, providerOptions: o2 });
        }
      }
      replaceRequestMessage(e2, t2, r2) {
        const n2 = e2[t2];
        void 0 !== n2 && this.protoBuilder.replaceMessage(n2, r2) && (e2[t2] = r2);
      }
      stream(e2, t2, r2, i2) {
        const _2 = [], A2 = [];
        for (const e3 of r2 ?? []) "type" in e3 && "provider-defined" === e3.type ? A2.push(e3) : _2.push(e3);
        const S2 = void 0 !== i2?.maxTokens ? { ...this.modelConfig, maxTokens: i2.maxTokens } : this.modelConfig, b2 = e2.get(g) ?? this.requestedModel, E2 = this.builder.getMessages(), I2 = e2.get(n.Gb)?.(), C2 = (function(e3) {
          const { messages: t3, requestedModel: r3, tools: n2, providerDefinedTools: s2, modelConfig: i3, invocationId: a2, conversationId: c2, conversationGroupId: l2, automationId: u2, originatingFlow: d2, routingReason: p2, parentRequestId: m2, rootParentRequestId: h2, parentAgentToolCallId: f2, subagentType: g2, turnUnitId: y2, turnUnitType: w2, compactionEpoch: v2, summarizedMessageCount: _3, isSimulatedMsg: A3, simulatedMsgReason: S3, inferenceReason: b3, acceptedUnadvertisedToolNames: E3 } = e3, I3 = new o.Zc();
          if (I3.messages = t3.map(B), I3.tools = (n2 ?? []).map($), I3.providerDefinedTools = (s2 ?? []).map(Q), I3.acceptedUnadvertisedToolNames = [...E3 ?? []], I3.requestedModel = new o.RK({ modelId: r3.modelId, maxMode: r3.maxMode, parameters: r3.parameters.map((e4) => new o.nF({ id: e4.id, value: e4.value })), builtInModel: r3.builtInModel }), a2 && (I3.invocationId = a2), c2 && (I3.conversationId = c2), l2 && (I3.conversationGroupId = l2), u2 && (I3.automationId = u2), d2 && (I3.originatingFlow = d2), p2 && (I3.routingReason = p2), m2 && (I3.parentRequestId = m2), h2 && (I3.rootParentRequestId = h2), f2 && (I3.parentAgentToolCallId = f2), g2 && (I3.subagentType = g2), y2 && (I3.turnUnitId = y2), w2 && (I3.turnUnitType = w2), void 0 !== v2 && (I3.compactionEpoch = v2), void 0 !== _3 && (I3.summarizedMessageCount = _3), void 0 !== A3 && (I3.isSimulatedMsg = A3), void 0 !== S3 && (I3.simulatedMsgReason = S3), b3 && (I3.inferenceReason = b3), i3) {
            const e4 = new o.DI();
            e4.maxTokens = i3.maxTokens, e4.temperature = i3.temperature, e4.topP = i3.topP, e4.stopSequences = i3.stopSequences ?? [], I3.modelConfig = e4;
          }
          return I3;
        })({ messages: E2, requestedModel: b2, tools: _2, providerDefinedTools: A2, modelConfig: S2, invocationId: t2, conversationId: e2.get(c), conversationGroupId: e2.get(l), automationId: e2.get(u), originatingFlow: e2.get(d), routingReason: e2.get(y), parentRequestId: e2.get(p), rootParentRequestId: e2.get(m), parentAgentToolCallId: e2.get(h), subagentType: e2.get(f), turnUnitId: e2.get(w), turnUnitType: e2.get(v), compactionEpoch: e2.get(n.Qt)?.(), summarizedMessageCount: e2.get(n.Nf)?.(), isSimulatedMsg: I2?.isSimulatedMsg, simulatedMsgReason: I2?.simulatedMsgReason, inferenceReason: this.inferenceReason, acceptedUnadvertisedToolNames: i2.acceptedUnadvertisedToolNames }), k2 = e2.get(a), x2 = {};
        k2 && (x2["x-request-id"] = k2);
        try {
          const t3 = (0, s.mJ)(e2);
          if (void 0 !== t3) {
            const e3 = `00-${t3.traceId}-${t3.spanId}-${t3.traceFlags.toString(16).padStart(2, "0")}`;
            x2.traceparent = e3, x2["backend-traceparent"] = e3;
          }
        } catch {
        }
        const T2 = this.client.stream(C2, { signal: e2.signal, headers: x2 });
        let R2, P2;
        const J2 = new Promise((e3, t3) => {
          R2 = e3, P2 = t3;
        });
        let M2, q2;
        G(J2);
        const D2 = new Promise((e3, t3) => {
          M2 = e3, q2 = t3;
        });
        let O2, N2;
        G(D2);
        const F2 = new Promise((e3, t3) => {
          O2 = e3, N2 = t3;
        });
        let U2, L2;
        G(F2);
        const j2 = new Promise((e3, t3) => {
          U2 = e3, L2 = t3;
        });
        let H2, z2;
        G(j2);
        const W2 = new Promise((e3, t3) => {
          H2 = e3, z2 = t3;
        });
        G(W2);
        return { fullStream: this.createFullStream(T2, { resolveUsage: R2, rejectUsage: P2, resolveExtendedUsage: M2, rejectExtendedUsage: q2, resolveProviderMetadata: O2, rejectProviderMetadata: N2, resolveInvocationId: U2, rejectInvocationId: L2, resolveResponse: H2, rejectResponse: z2 }, e2, E2), usage: J2, extendedUsage: D2, providerMetadata: F2, invocationId: j2, response: W2 };
      }
      async *createFullStream(e2, t2, r2, s2) {
        let o2, i2 = false, a2 = false, c2 = false, l2 = false, u2 = false, d2 = false;
        try {
          try {
            for await (const r3 of e2) {
              const e3 = this.protoResponseToStreamParts(r3);
              if ("usage" === r3.response.case) {
                const e4 = r3.response.value;
                t2.resolveUsage({ promptTokens: e4.promptTokens, completionTokens: e4.completionTokens, totalTokens: e4.totalTokens ?? 0 }), i2 = true;
              } else if ("extendedUsage" === r3.response.case) {
                const e4 = r3.response.value;
                t2.resolveExtendedUsage({ inputTokens: e4.inputTokens, outputTokens: e4.outputTokens, cacheReadTokens: e4.cacheReadTokens, cacheWriteTokens: e4.cacheWriteTokens, reasoningTokens: e4.reasoningTokens, maxTokens: e4.maxTokens }), a2 = true;
              } else if ("providerMetadata" === r3.response.case) {
                const e4 = r3.response.value.metadata?.toJson();
                t2.resolveProviderMetadata(e4), c2 = true;
              } else if ("invocationId" === r3.response.case) t2.resolveInvocationId(r3.response.value.invocationId), l2 = true;
              else if ("responseInfo" === r3.response.case) {
                const e4 = r3.response.value;
                t2.resolveResponse({ id: e4.id, modelId: e4.model, timestamp: new Date(Number(e4.createdAt)), messages: this.protoMessagesToResponseMessages(e4), error: e4.errorMessage ? (0, n.ud)(e4.errorMessage) ?? new Error(e4.errorMessage) : void 0, inferenceExtraData: e4.inferenceExtraData ? this.protoExtraDataToInferenceExtraData(e4.inferenceExtraData) : void 0, supportsSelfSummary: e4.supportsSelfSummary, earlyCompactionContextTokenThreshold: e4.earlyCompactionContextTokenThreshold }), u2 = true;
              } else "error" === r3.response.case ? o2 = j(r3.response.value) : "imageDescriptions" === r3.response.case ? this.applyImageDescriptions(s2, r3.response.value) : "lineageTags" === r3.response.case && this.applyLineageTags(s2, r3.response.value);
              for (const t3 of e3) yield t3;
            }
          } catch (e3) {
            o2 = e3 instanceof Error ? e3 : new Error(String(e3));
          }
          d2 = true;
        } finally {
          (d2 || void 0 !== o2) && (i2 || (o2 ? t2.rejectUsage(o2) : t2.resolveUsage({ promptTokens: 0, completionTokens: 0, totalTokens: 0 })), a2 || (o2 ? t2.rejectExtendedUsage(o2) : t2.resolveExtendedUsage({ inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, maxTokens: 0 })), c2 || (o2 ? t2.rejectProviderMetadata(o2) : t2.resolveProviderMetadata(void 0)), l2 || (o2 ? t2.rejectInvocationId(o2) : t2.resolveInvocationId(crypto.randomUUID())), u2 || (o2 ? t2.rejectResponse(o2) : t2.resolveResponse({ id: "", modelId: "", timestamp: /* @__PURE__ */ new Date(), messages: [] })));
        }
        if (o2) throw o2;
      }
      protoResponseToStreamParts(e2) {
        const t2 = [];
        switch (e2.response.case) {
          case "textPart": {
            const r2 = e2.response.value;
            r2.isFinal ? t2.push({ type: "finish", finishReason: "stop", usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0 } }) : t2.push({ type: "text-delta", textDelta: r2.text });
            break;
          }
          case "thinkingPart": {
            const r2 = e2.response.value, n2 = { ...true === r2.isAlreadySummarized ? { isAlreadySummarizedThinking: true } : {}, ...void 0 !== r2.modelName && r2.modelName.length > 0 ? { modelName: r2.modelName } : {} }, s2 = Object.keys(n2).length > 0 ? { providerOptions: { cursor: n2 } } : {};
            void 0 !== r2.redactedData ? t2.push({ type: "redacted-reasoning", data: r2.redactedData, ...s2 }) : (r2.text.length > 0 || void 0 === r2.signature) && t2.push({ type: "reasoning", textDelta: r2.text, ...s2 }), void 0 !== r2.signature && t2.push({ type: "reasoning-signature", signature: r2.signature });
            break;
          }
          case "toolCallPart": {
            const r2 = e2.response.value;
            if (r2.isComplete) {
              let e3;
              try {
                e3 = JSON.parse(r2.args);
              } catch {
                e3 = {};
              }
              t2.push({ type: "tool-call", toolCallId: r2.toolCallId, toolName: r2.toolName, args: e3 });
            } else r2.toolName ? t2.push({ type: "tool-call-streaming-start", toolCallId: r2.toolCallId, toolName: r2.toolName }) : t2.push({ type: "tool-call-delta", toolCallId: r2.toolCallId, toolName: "", argsTextDelta: r2.args });
            break;
          }
          case "error":
            t2.push({ type: "error", error: j(e2.response.value) });
        }
        return t2;
      }
      protoMessagesToResponseMessages(e2) {
        return e2.messages.map((e3) => {
          if ("assistant" === (e3.role === o.tB.ASSISTANT ? "assistant" : e3.role === o.tB.TOOL ? "tool" : "assistant")) {
            const t2 = O(e3, e3.content, { keepRawToolCallArgs: false }), r2 = W(J(e3), e3.lineageTag);
            return { id: e3.id, role: "assistant", content: t2, ...void 0 !== r2 ? { providerOptions: r2 } : {} };
          }
          {
            const t2 = W(void 0, e3.lineageTag);
            return { id: e3.id, role: "tool", ...void 0 !== t2 ? { providerOptions: t2 } : {}, content: e3.toolResult ? e3.toolResult.parts.map((e4) => ({ type: "tool-result", toolCallId: e4.toolCallId, toolName: e4.toolName, result: e4.result?.toJson(), isError: e4.isError || void 0 })) : [] };
          }
        });
      }
      protoExtraDataToInferenceExtraData(e2) {
        return { tokenLogprobs: e2.tokenLogprobs.length ? e2.tokenLogprobs.map((e3) => e3.values) : void 0, tokenIds: e2.tokenIds.length ? e2.tokenIds.map((e3) => e3.values.map(Number)) : void 0, promptTokenIds: e2.promptTokenIds.length ? e2.promptTokenIds.map((e3) => e3.values.map(Number)) : void 0, extraTokens: e2.extraTokens.length ? e2.extraTokens.map((e3) => e3.values.map(Number)) : void 0, extraLogprobs: e2.extraLogprobs.length ? e2.extraLogprobs.map((e3) => e3.values) : void 0, routingMatrix: e2.routingMatrix.length ? e2.routingMatrix.map((e3) => e3.values.map((e4) => "" === e4 ? null : e4)) : void 0 };
      }
    }
    class Y extends n.uo {
      stream(...e2) {
        const t2 = super.stream(...e2);
        for (const e3 of [t2.response, t2.usage, t2.extendedUsage, t2.providerMetadata, t2.invocationId]) G(e3);
        return t2;
      }
    }
    class Z {
      constructor(e2, t2, r2, n2, s2) {
        this.client = e2, this.requestedModel = t2, this.middleware = r2, this.modelConfig = n2, this.inferenceReason = s2;
      }
      getExecutor(e2) {
        const t2 = new H(e2), r2 = new K(t2, this.client, this.requestedModel, this.modelConfig, this.inferenceReason);
        return new Y(this.middleware ? this.middleware(r2) : r2);
      }
      getModelId() {
        return this.requestedModel.modelId;
      }
    }
    class X {
      constructor(e2, t2, r2, n2) {
        this.client = e2, this.requestedModel = t2, this.modelConfig = r2, this.inferenceReason = n2;
      }
      getSession(e2) {
        return new Z(this.client, this.requestedModel, e2, this.modelConfig, this.inferenceReason);
      }
      getProviderName() {
        return "proto";
      }
      getModelId() {
        return this.requestedModel.modelId;
      }
      getThinkingDetails() {
      }
    }
    function ee(e2, t2, r2, n2) {
      return new X(e2, t2, r2, n2);
    }
  }