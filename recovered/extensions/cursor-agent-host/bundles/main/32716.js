// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 32716 range:6569344..6584454
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32716: (e, t, r) => {
    "use strict";
    r.d(t, { H4: () => h, Og: () => g, d1: () => p, mD: () => y });
    var n = r(23269), s = r(98483), o = { code: "0", name: "text", parse: (e2) => {
      if ("string" != typeof e2) throw new Error('"text" parts expect a string value.');
      return { type: "text", value: e2 };
    } }, i = { code: "3", name: "error", parse: (e2) => {
      if ("string" != typeof e2) throw new Error('"error" parts expect a string value.');
      return { type: "error", value: e2 };
    } }, a = { code: "4", name: "assistant_message", parse: (e2) => {
      if (!(null != e2 && "object" == typeof e2 && "id" in e2 && "role" in e2 && "content" in e2 && "string" == typeof e2.id && "string" == typeof e2.role && "assistant" === e2.role && Array.isArray(e2.content) && e2.content.every((e3) => null != e3 && "object" == typeof e3 && "type" in e3 && "text" === e3.type && "text" in e3 && null != e3.text && "object" == typeof e3.text && "value" in e3.text && "string" == typeof e3.text.value))) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
      return { type: "assistant_message", value: e2 };
    } }, c = { code: "5", name: "assistant_control_data", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("threadId" in e2) || !("messageId" in e2) || "string" != typeof e2.threadId || "string" != typeof e2.messageId) throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
      return { type: "assistant_control_data", value: { threadId: e2.threadId, messageId: e2.messageId } };
    } }, l = { code: "6", name: "data_message", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("role" in e2) || !("data" in e2) || "string" != typeof e2.role || "data" !== e2.role) throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
      return { type: "data_message", value: e2 };
    } }, u = [o, i, a, c, l];
    u.map((e2) => e2.code);
    function d(e2) {
      const t2 = ["ROOT"];
      let r2 = -1, n2 = null;
      function s2(e3, s3, o3) {
        switch (e3) {
          case '"':
            r2 = s3, t2.pop(), t2.push(o3), t2.push("INSIDE_STRING");
            break;
          case "f":
          case "t":
          case "n":
            r2 = s3, n2 = s3, t2.pop(), t2.push(o3), t2.push("INSIDE_LITERAL");
            break;
          case "-":
            t2.pop(), t2.push(o3), t2.push("INSIDE_NUMBER");
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            r2 = s3, t2.pop(), t2.push(o3), t2.push("INSIDE_NUMBER");
            break;
          case "{":
            r2 = s3, t2.pop(), t2.push(o3), t2.push("INSIDE_OBJECT_START");
            break;
          case "[":
            r2 = s3, t2.pop(), t2.push(o3), t2.push("INSIDE_ARRAY_START");
        }
      }
      function o2(e3, n3) {
        switch (e3) {
          case ",":
            t2.pop(), t2.push("INSIDE_OBJECT_AFTER_COMMA");
            break;
          case "}":
            r2 = n3, t2.pop();
        }
      }
      function i2(e3, n3) {
        switch (e3) {
          case ",":
            t2.pop(), t2.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          case "]":
            r2 = n3, t2.pop();
        }
      }
      for (let a3 = 0; a3 < e2.length; a3++) {
        const c2 = e2[a3];
        switch (t2[t2.length - 1]) {
          case "ROOT":
            s2(c2, a3, "FINISH");
            break;
          case "INSIDE_OBJECT_START":
            switch (c2) {
              case '"':
                t2.pop(), t2.push("INSIDE_OBJECT_KEY");
                break;
              case "}":
                r2 = a3, t2.pop();
            }
            break;
          case "INSIDE_OBJECT_AFTER_COMMA":
            if ('"' === c2) t2.pop(), t2.push("INSIDE_OBJECT_KEY");
            break;
          case "INSIDE_OBJECT_KEY":
            if ('"' === c2) t2.pop(), t2.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          case "INSIDE_OBJECT_AFTER_KEY":
            if (":" === c2) t2.pop(), t2.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          case "INSIDE_OBJECT_BEFORE_VALUE":
            s2(c2, a3, "INSIDE_OBJECT_AFTER_VALUE");
            break;
          case "INSIDE_OBJECT_AFTER_VALUE":
            o2(c2, a3);
            break;
          case "INSIDE_STRING":
            switch (c2) {
              case '"':
                t2.pop(), r2 = a3;
                break;
              case "\\":
                t2.push("INSIDE_STRING_ESCAPE");
                break;
              default:
                r2 = a3;
            }
            break;
          case "INSIDE_ARRAY_START":
            if ("]" === c2) r2 = a3, t2.pop();
            else r2 = a3, s2(c2, a3, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          case "INSIDE_ARRAY_AFTER_VALUE":
            switch (c2) {
              case ",":
                t2.pop(), t2.push("INSIDE_ARRAY_AFTER_COMMA");
                break;
              case "]":
                r2 = a3, t2.pop();
                break;
              default:
                r2 = a3;
            }
            break;
          case "INSIDE_ARRAY_AFTER_COMMA":
            s2(c2, a3, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          case "INSIDE_STRING_ESCAPE":
            t2.pop(), r2 = a3;
            break;
          case "INSIDE_NUMBER":
            switch (c2) {
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                r2 = a3;
                break;
              case "e":
              case "E":
              case "-":
              case ".":
                break;
              case ",":
                t2.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(c2, a3), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] && o2(c2, a3);
                break;
              case "}":
                t2.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] && o2(c2, a3);
                break;
              case "]":
                t2.pop(), "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(c2, a3);
                break;
              default:
                t2.pop();
            }
            break;
          case "INSIDE_LITERAL": {
            const s3 = e2.substring(n2, a3 + 1);
            "false".startsWith(s3) || "true".startsWith(s3) || "null".startsWith(s3) ? r2 = a3 : (t2.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t2[t2.length - 1] ? o2(c2, a3) : "INSIDE_ARRAY_AFTER_VALUE" === t2[t2.length - 1] && i2(c2, a3));
            break;
          }
        }
      }
      let a2 = e2.slice(0, r2 + 1);
      for (let r3 = t2.length - 1; r3 >= 0; r3--) {
        switch (t2[r3]) {
          case "INSIDE_STRING":
            a2 += '"';
            break;
          case "INSIDE_OBJECT_KEY":
          case "INSIDE_OBJECT_AFTER_KEY":
          case "INSIDE_OBJECT_AFTER_COMMA":
          case "INSIDE_OBJECT_START":
          case "INSIDE_OBJECT_BEFORE_VALUE":
          case "INSIDE_OBJECT_AFTER_VALUE":
            a2 += "}";
            break;
          case "INSIDE_ARRAY_START":
          case "INSIDE_ARRAY_AFTER_COMMA":
          case "INSIDE_ARRAY_AFTER_VALUE":
            a2 += "]";
            break;
          case "INSIDE_LITERAL": {
            const t3 = e2.substring(n2, e2.length);
            "true".startsWith(t3) ? a2 += "true".slice(t3.length) : "false".startsWith(t3) ? a2 += "false".slice(t3.length) : "null".startsWith(t3) && (a2 += "null".slice(t3.length));
          }
        }
      }
      return a2;
    }
    function p(e2) {
      if (void 0 === e2) return { value: void 0, state: "undefined-input" };
      let t2 = (0, n.N8)({ text: e2 });
      return t2.success ? { value: t2.value, state: "successful-parse" } : (t2 = (0, n.N8)({ text: d(e2) }), t2.success ? { value: t2.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
    }
    var m = [{ code: "0", name: "text", parse: (e2) => {
      if ("string" != typeof e2) throw new Error('"text" parts expect a string value.');
      return { type: "text", value: e2 };
    } }, { code: "2", name: "data", parse: (e2) => {
      if (!Array.isArray(e2)) throw new Error('"data" parts expect an array value.');
      return { type: "data", value: e2 };
    } }, { code: "3", name: "error", parse: (e2) => {
      if ("string" != typeof e2) throw new Error('"error" parts expect a string value.');
      return { type: "error", value: e2 };
    } }, { code: "8", name: "message_annotations", parse: (e2) => {
      if (!Array.isArray(e2)) throw new Error('"message_annotations" parts expect an array value.');
      return { type: "message_annotations", value: e2 };
    } }, { code: "9", name: "tool_call", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("toolCallId" in e2) || "string" != typeof e2.toolCallId || !("toolName" in e2) || "string" != typeof e2.toolName || !("args" in e2) || "object" != typeof e2.args) throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
      return { type: "tool_call", value: e2 };
    } }, { code: "a", name: "tool_result", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("toolCallId" in e2) || "string" != typeof e2.toolCallId || !("result" in e2)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
      return { type: "tool_result", value: e2 };
    } }, { code: "b", name: "tool_call_streaming_start", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("toolCallId" in e2) || "string" != typeof e2.toolCallId || !("toolName" in e2) || "string" != typeof e2.toolName) throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
      return { type: "tool_call_streaming_start", value: e2 };
    } }, { code: "c", name: "tool_call_delta", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("toolCallId" in e2) || "string" != typeof e2.toolCallId || !("argsTextDelta" in e2) || "string" != typeof e2.argsTextDelta) throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
      return { type: "tool_call_delta", value: e2 };
    } }, { code: "d", name: "finish_message", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("finishReason" in e2) || "string" != typeof e2.finishReason) throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
      const t2 = { finishReason: e2.finishReason };
      return "usage" in e2 && null != e2.usage && "object" == typeof e2.usage && "promptTokens" in e2.usage && "completionTokens" in e2.usage && (t2.usage = { promptTokens: "number" == typeof e2.usage.promptTokens ? e2.usage.promptTokens : Number.NaN, completionTokens: "number" == typeof e2.usage.completionTokens ? e2.usage.completionTokens : Number.NaN }), { type: "finish_message", value: t2 };
    } }, { code: "e", name: "finish_step", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("finishReason" in e2) || "string" != typeof e2.finishReason) throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
      const t2 = { finishReason: e2.finishReason, isContinued: false };
      return "usage" in e2 && null != e2.usage && "object" == typeof e2.usage && "promptTokens" in e2.usage && "completionTokens" in e2.usage && (t2.usage = { promptTokens: "number" == typeof e2.usage.promptTokens ? e2.usage.promptTokens : Number.NaN, completionTokens: "number" == typeof e2.usage.completionTokens ? e2.usage.completionTokens : Number.NaN }), "isContinued" in e2 && "boolean" == typeof e2.isContinued && (t2.isContinued = e2.isContinued), { type: "finish_step", value: t2 };
    } }, { code: "f", name: "start_step", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("messageId" in e2) || "string" != typeof e2.messageId) throw new Error('"start_step" parts expect an object with an "id" property.');
      return { type: "start_step", value: { messageId: e2.messageId } };
    } }, { code: "g", name: "reasoning", parse: (e2) => {
      if ("string" != typeof e2) throw new Error('"reasoning" parts expect a string value.');
      return { type: "reasoning", value: e2 };
    } }, { code: "h", name: "source", parse: (e2) => {
      if (null == e2 || "object" != typeof e2) throw new Error('"source" parts expect a Source object.');
      return { type: "source", value: e2 };
    } }, { code: "i", name: "redacted_reasoning", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("data" in e2) || "string" != typeof e2.data) throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
      return { type: "redacted_reasoning", value: { data: e2.data } };
    } }, { code: "j", name: "reasoning_signature", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("signature" in e2) || "string" != typeof e2.signature) throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
      return { type: "reasoning_signature", value: { signature: e2.signature } };
    } }, { code: "k", name: "file", parse: (e2) => {
      if (null == e2 || "object" != typeof e2 || !("data" in e2) || "string" != typeof e2.data || !("mimeType" in e2) || "string" != typeof e2.mimeType) throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
      return { type: "file", value: e2 };
    } }];
    Object.fromEntries(m.map((e2) => [e2.code, e2])), Object.fromEntries(m.map((e2) => [e2.name, e2.code])), m.map((e2) => e2.code);
    function h(e2, t2) {
      const r2 = m.find((t3) => t3.name === e2);
      if (!r2) throw new Error(`Invalid stream part type: ${e2}`);
      return `${r2.code}:${JSON.stringify(t2)}
`;
    }
    "\n".charCodeAt(0);
    "\n".charCodeAt(0);
    var f = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
    function g(e2, { validate: t2 } = {}) {
      return { [f]: true, _type: void 0, [n.eu]: true, jsonSchema: e2, validate: t2 };
    }
    function y(e2) {
      return "object" == typeof (t2 = e2) && null !== t2 && f in t2 && true === t2[f] && "jsonSchema" in t2 && "validate" in t2 ? e2 : (function(e3, t3) {
        var r2;
        const n2 = null != (r2 = null == t3 ? void 0 : t3.useReferences) && r2;
        return g((0, s.Ay)(e3, { $refStrategy: n2 ? "root" : "none", target: "jsonSchema7" }), { validate: (t4) => {
          const r3 = e3.safeParse(t4);
          return r3.success ? { success: true, value: r3.data } : { success: false, error: r3.error };
        } });
      })(e2);
      var t2;
    }
  }