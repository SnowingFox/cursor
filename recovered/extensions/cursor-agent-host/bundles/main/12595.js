// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12595 range:3810955..3917554
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12595: (e, t, r) => {
    "use strict";
    r.d(t, { uo: () => qr, D5: () => Pr, NT: () => Jr, R1: () => Lr, Uv: () => Dn, YE: () => Ur, wm: () => $r, QS: () => Nr, ud: () => Wn, Qt: () => Qr, fk: () => Hr, HL: () => on, mf: () => Yr, xE: () => yn, Np: () => Fr, hU: () => Or, sk: () => Pn, Gb: () => Gr, cc: () => Gn, sf: () => $n, Af: () => xr, Be: () => Nn, vc: () => Fn, Nf: () => jr, tq: () => xn });
    var n = r(29017), s = r(23269), o = r(30753), i = r(81958), a = r(32716), c = Object.defineProperty, l = (e2, t2) => {
      for (var r2 in t2) c(e2, r2, { get: t2[r2], enumerable: true });
    };
    function u(e2, { contentType: t2, dataStreamVersion: r2 }) {
      const n2 = new Headers(null != e2 ? e2 : {});
      return n2.has("Content-Type") || n2.set("Content-Type", t2), void 0 !== r2 && n2.set("X-Vercel-AI-Data-Stream", r2), n2;
    }
    function d(e2, { contentType: t2, dataStreamVersion: r2 }) {
      const n2 = {};
      if (null != e2) for (const [t3, r3] of Object.entries(e2)) n2[t3] = r3;
      return null == n2["Content-Type"] && (n2["Content-Type"] = t2), void 0 !== r2 && (n2["X-Vercel-AI-Data-Stream"] = r2), n2;
    }
    function p({ response: e2, status: t2, statusText: r2, headers: n2, stream: s2 }) {
      e2.writeHead(null != t2 ? t2 : 200, r2, n2);
      const o2 = s2.getReader();
      (async () => {
        try {
          for (; ; ) {
            const { done: t3, value: r3 } = await o2.read();
            if (t3) break;
            e2.write(r3);
          }
        } catch (e3) {
          throw e3;
        } finally {
          e2.end();
        }
      })();
    }
    var m, h = "AI_InvalidArgumentError", f = `vercel.ai.error.${h}`, g = Symbol.for(f), y = class extends n.bD {
      constructor({ parameter: e2, value: t2, message: r2 }) {
        super({ name: h, message: `Invalid argument for parameter ${e2}: ${r2}` }), this[m] = true, this.parameter = e2, this.value = t2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, f);
      }
    };
    m = g;
    var w, v = "AI_RetryError", _ = `vercel.ai.error.${v}`, A = Symbol.for(_), S = class extends n.bD {
      constructor({ message: e2, reason: t2, errors: r2 }) {
        super({ name: v, message: e2 }), this[w] = true, this.reason = t2, this.errors = r2, this.lastError = r2[r2.length - 1];
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, _);
      }
    };
    w = A;
    var b = ({ maxRetries: e2 = 2, initialDelayInMs: t2 = 2e3, backoffFactor: r2 = 2 } = {}) => async (n2) => E(n2, { maxRetries: e2, delayInMs: t2, backoffFactor: r2 });
    async function E(e2, { maxRetries: t2, delayInMs: r2, backoffFactor: o2 }, i2 = []) {
      try {
        return await e2();
      } catch (a2) {
        if ((0, s.zf)(a2)) throw a2;
        if (0 === t2) throw a2;
        const c2 = (0, s.u1)(a2), l2 = [...i2, a2], u2 = l2.length;
        if (u2 > t2) throw new S({ message: `Failed after ${u2} attempts. Last error: ${c2}`, reason: "maxRetriesExceeded", errors: l2 });
        if (a2 instanceof Error && n.hL.isInstance(a2) && true === a2.isRetryable && u2 <= t2) return await (0, s.cb)(r2), E(e2, { maxRetries: t2, delayInMs: o2 * r2, backoffFactor: o2 }, l2);
        if (1 === u2) throw a2;
        throw new S({ message: `Failed after ${u2} attempts with non-retryable error: '${c2}'`, reason: "errorNotRetryable", errors: l2 });
      }
    }
    function I({ maxRetries: e2 }) {
      if (null != e2) {
        if (!Number.isInteger(e2)) throw new y({ parameter: "maxRetries", value: e2, message: "maxRetries must be an integer" });
        if (e2 < 0) throw new y({ parameter: "maxRetries", value: e2, message: "maxRetries must be >= 0" });
      }
      const t2 = null != e2 ? e2 : 2;
      return { maxRetries: t2, retry: b({ maxRetries: t2 }) };
    }
    function C({ operationId: e2, telemetry: t2 }) {
      return { "operation.name": `${e2}${null != (null == t2 ? void 0 : t2.functionId) ? ` ${t2.functionId}` : ""}`, "resource.name": null == t2 ? void 0 : t2.functionId, "ai.operationId": e2, "ai.telemetry.functionId": null == t2 ? void 0 : t2.functionId };
    }
    function k({ model: e2, settings: t2, telemetry: r2, headers: n2 }) {
      var s2;
      return { "ai.model.provider": e2.provider, "ai.model.id": e2.modelId, ...Object.entries(t2).reduce((e3, [t3, r3]) => (e3[`ai.settings.${t3}`] = r3, e3), {}), ...Object.entries(null != (s2 = null == r2 ? void 0 : r2.metadata) ? s2 : {}).reduce((e3, [t3, r3]) => (e3[`ai.telemetry.metadata.${t3}`] = r3, e3), {}), ...Object.entries(null != n2 ? n2 : {}).reduce((e3, [t3, r3]) => (void 0 !== r3 && (e3[`ai.request.headers.${t3}`] = r3), e3), {}) };
    }
    var x = { startSpan: () => T, startActiveSpan: (e2, t2, r2, n2) => "function" == typeof t2 ? t2(T) : "function" == typeof r2 ? r2(T) : "function" == typeof n2 ? n2(T) : void 0 }, T = { spanContext: () => R, setAttribute() {
      return this;
    }, setAttributes() {
      return this;
    }, addEvent() {
      return this;
    }, addLink() {
      return this;
    }, addLinks() {
      return this;
    }, setStatus() {
      return this;
    }, updateName() {
      return this;
    }, end() {
      return this;
    }, isRecording: () => false, recordException() {
      return this;
    } }, R = { traceId: "", spanId: "", traceFlags: 0 };
    function B({ isEnabled: e2 = false, tracer: t2 } = {}) {
      return e2 ? t2 || o.uP.getTracer("ai") : x;
    }
    function P({ name: e2, tracer: t2, attributes: r2, fn: n2, endWhenDone: s2 = true }) {
      return t2.startActiveSpan(e2, { attributes: r2 }, async (e3) => {
        try {
          const t3 = await n2(e3);
          return s2 && e3.end(), t3;
        } catch (t3) {
          try {
            t3 instanceof Error ? (e3.recordException({ name: t3.name, message: t3.message, stack: t3.stack }), e3.setStatus({ code: o.sY.ERROR, message: t3.message })) : e3.setStatus({ code: o.sY.ERROR });
          } finally {
            e3.end();
          }
          throw t3;
        }
      });
    }
    function J({ telemetry: e2, attributes: t2 }) {
      return true !== (null == e2 ? void 0 : e2.isEnabled) ? {} : Object.entries(t2).reduce((t3, [r2, n2]) => {
        if (void 0 === n2) return t3;
        if ("object" == typeof n2 && "input" in n2 && "function" == typeof n2.input) {
          if (false === (null == e2 ? void 0 : e2.recordInputs)) return t3;
          const s2 = n2.input();
          return void 0 === s2 ? t3 : { ...t3, [r2]: s2 };
        }
        if ("object" == typeof n2 && "output" in n2 && "function" == typeof n2.output) {
          if (false === (null == e2 ? void 0 : e2.recordOutputs)) return t3;
          const s2 = n2.output();
          return void 0 === s2 ? t3 : { ...t3, [r2]: s2 };
        }
        return { ...t3, [r2]: n2 };
      }, {});
    }
    var M, q = "AI_NoImageGeneratedError", D = `vercel.ai.error.${q}`, O = Symbol.for(D);
    n.bD;
    M = O;
    var N = class {
      constructor({ data: e2, mimeType: t2 }) {
        const r2 = e2 instanceof Uint8Array;
        this.base64Data = r2 ? void 0 : e2, this.uint8ArrayData = r2 ? e2 : void 0, this.mimeType = t2;
      }
      get base64() {
        return null == this.base64Data && (this.base64Data = (0, s.n_)(this.uint8ArrayData)), this.base64Data;
      }
      get uint8Array() {
        return null == this.uint8ArrayData && (this.uint8ArrayData = (0, s.Z9)(this.base64Data)), this.uint8ArrayData;
      }
    }, F = class extends N {
      constructor(e2) {
        super(e2), this.type = "file";
      }
    }, U = [{ mimeType: "image/gif", bytesPrefix: [71, 73, 70], base64Prefix: "R0lG" }, { mimeType: "image/png", bytesPrefix: [137, 80, 78, 71], base64Prefix: "iVBORw" }, { mimeType: "image/jpeg", bytesPrefix: [255, 216], base64Prefix: "/9j/" }, { mimeType: "image/webp", bytesPrefix: [82, 73, 70, 70], base64Prefix: "UklGRg" }, { mimeType: "image/bmp", bytesPrefix: [66, 77], base64Prefix: "Qk" }, { mimeType: "image/tiff", bytesPrefix: [73, 73, 42, 0], base64Prefix: "SUkqAA" }, { mimeType: "image/tiff", bytesPrefix: [77, 77, 0, 42], base64Prefix: "TU0AKg" }, { mimeType: "image/avif", bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 97, 118, 105, 102], base64Prefix: "AAAAIGZ0eXBhdmlm" }, { mimeType: "image/heic", bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 104, 101, 105, 99], base64Prefix: "AAAAIGZ0eXBoZWlj" }];
    function L(e2) {
      return "string" == typeof e2 && e2.startsWith("SUQz") || "string" != typeof e2 && e2.length > 10 && 73 === e2[0] && 68 === e2[1] && 51 === e2[2] ? ((e3) => {
        const t2 = "string" == typeof e3 ? (0, s.Z9)(e3) : e3, r2 = (127 & t2[6]) << 21 | (127 & t2[7]) << 14 | (127 & t2[8]) << 7 | 127 & t2[9];
        return t2.slice(r2 + 10);
      })(e2) : e2;
    }
    function $({ data: e2, signatures: t2 }) {
      const r2 = L(e2);
      for (const e3 of t2) if ("string" == typeof r2 ? r2.startsWith(e3.base64Prefix) : r2.length >= e3.bytesPrefix.length && e3.bytesPrefix.every((e4, t3) => r2[t3] === e4)) return e3.mimeType;
    }
    var Q, j = "AI_NoObjectGeneratedError", G = `vercel.ai.error.${j}`, H = Symbol.for(G), z = class extends n.bD {
      constructor({ message: e2 = "No object generated.", cause: t2, text: r2, response: n2, usage: s2, finishReason: o2 }) {
        super({ name: j, message: e2, cause: t2 }), this[Q] = true, this.text = r2, this.response = n2, this.usage = s2, this.finishReason = o2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, G);
      }
    };
    Q = H;
    var W, V = "AI_DownloadError", K = `vercel.ai.error.${V}`, Y = Symbol.for(K), Z = class extends n.bD {
      constructor({ url: e2, statusCode: t2, statusText: r2, cause: n2, message: s2 = null == n2 ? `Failed to download ${e2}: ${t2} ${r2}` : `Failed to download ${e2}: ${n2}` }) {
        super({ name: V, message: s2, cause: n2 }), this[W] = true, this.url = e2, this.statusCode = t2, this.statusText = r2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, K);
      }
    };
    async function X({ url: e2 }) {
      var t2;
      const r2 = e2.toString();
      try {
        const e3 = await fetch(r2);
        if (!e3.ok) throw new Z({ url: r2, statusCode: e3.status, statusText: e3.statusText });
        return { data: new Uint8Array(await e3.arrayBuffer()), mimeType: null != (t2 = e3.headers.get("content-type")) ? t2 : void 0 };
      } catch (e3) {
        if (Z.isInstance(e3)) throw e3;
        throw new Z({ url: r2, cause: e3 });
      }
    }
    W = Y;
    var ee, te = "AI_InvalidDataContentError", re = `vercel.ai.error.${te}`, ne = Symbol.for(re), se = class extends n.bD {
      constructor({ content: e2, cause: t2, message: r2 = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e2}.` }) {
        super({ name: te, message: r2, cause: t2 }), this[ee] = true, this.content = e2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, re);
      }
    };
    ee = ne;
    var oe = i.KC([i.Yj(), i.Nl(Uint8Array), i.Nl(ArrayBuffer), i.Ie((e2) => {
      var t2, r2;
      return null != (r2 = null == (t2 = globalThis.Buffer) ? void 0 : t2.isBuffer(e2)) && r2;
    }, { message: "Must be a Buffer" })]);
    function ie(e2) {
      return "string" == typeof e2 ? e2 : e2 instanceof ArrayBuffer ? (0, s.n_)(new Uint8Array(e2)) : (0, s.n_)(e2);
    }
    function ae(e2) {
      if (e2 instanceof Uint8Array) return e2;
      if ("string" == typeof e2) try {
        return (0, s.Z9)(e2);
      } catch (t2) {
        throw new se({ message: "Invalid data content. Content string is not a base64-encoded media.", content: e2, cause: t2 });
      }
      if (e2 instanceof ArrayBuffer) return new Uint8Array(e2);
      throw new se({ content: e2 });
    }
    function ce(e2) {
      try {
        return new TextDecoder().decode(e2);
      } catch (e3) {
        throw new Error("Error decoding Uint8Array to text");
      }
    }
    var le, ue = "AI_InvalidMessageRoleError", de = `vercel.ai.error.${ue}`, pe = Symbol.for(de), me = class extends n.bD {
      constructor({ role: e2, message: t2 = `Invalid message role: '${e2}'. Must be one of: "system", "user", "assistant", "tool".` }) {
        super({ name: ue, message: t2 }), this[le] = true, this.role = e2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, de);
      }
    };
    async function he({ prompt: e2, modelSupportsImageUrls: t2 = true, modelSupportsUrl: r2 = () => false, downloadImplementation: n2 = X }) {
      const s2 = await (async function(e3, t3, r3, n3) {
        const s3 = e3.filter((e4) => "user" === e4.role).map((e4) => e4.content).filter((e4) => Array.isArray(e4)).flat().filter((e4) => "image" === e4.type || "file" === e4.type).filter((e4) => !("image" === e4.type && true === r3)).map((e4) => "image" === e4.type ? e4.image : e4.data).map((e4) => "string" == typeof e4 && (e4.startsWith("http:") || e4.startsWith("https:")) ? new URL(e4) : e4).filter((e4) => e4 instanceof URL).filter((e4) => !n3(e4)), o2 = await Promise.all(s3.map(async (e4) => ({ url: e4, data: await t3({ url: e4 }) })));
        return Object.fromEntries(o2.map(({ url: e4, data: t4 }) => [e4.toString(), t4]));
      })(e2.messages, n2, t2, r2);
      return [...null != e2.system ? [{ role: "system", content: e2.system }] : [], ...e2.messages.map((e3) => (function(e4, t3) {
        var r3, n3, s3, o2, i2, a2;
        const c2 = e4.role;
        switch (c2) {
          case "system":
            return { role: "system", content: e4.content, providerMetadata: null != (r3 = e4.providerOptions) ? r3 : e4.experimental_providerMetadata };
          case "user":
            return "string" == typeof e4.content ? { role: "user", content: [{ type: "text", text: e4.content }], providerMetadata: null != (n3 = e4.providerOptions) ? n3 : e4.experimental_providerMetadata } : { role: "user", content: e4.content.map((e5) => (function(e6, t4) {
              var r4, n4, s4, o3;
              if ("text" === e6.type) return { type: "text", text: e6.text, providerMetadata: null != (r4 = e6.providerOptions) ? r4 : e6.experimental_providerMetadata };
              let i3, a3, c3, l2 = e6.mimeType;
              const u2 = e6.type;
              switch (u2) {
                case "image":
                  i3 = e6.image;
                  break;
                case "file":
                  i3 = e6.data;
                  break;
                default:
                  throw new Error(`Unsupported part type: ${u2}`);
              }
              try {
                a3 = "string" == typeof i3 ? new URL(i3) : i3;
              } catch (e7) {
                a3 = i3;
              }
              if (a3 instanceof URL) if ("data:" === a3.protocol) {
                const { mimeType: e7, base64Content: t5 } = (function(e8) {
                  try {
                    const [t6, r5] = e8.split(",");
                    return { mimeType: t6.split(";")[0].split(":")[1], base64Content: r5 };
                  } catch (e9) {
                    return { mimeType: void 0, base64Content: void 0 };
                  }
                })(a3.toString());
                if (null == e7 || null == t5) throw new Error(`Invalid data URL format in part ${u2}`);
                l2 = e7, c3 = ae(t5);
              } else {
                const e7 = t4[a3.toString()];
                e7 ? (c3 = e7.data, null != l2 || (l2 = e7.mimeType)) : c3 = a3;
              }
              else c3 = ae(a3);
              switch (u2) {
                case "image":
                  return c3 instanceof Uint8Array && (l2 = null != (n4 = $({ data: c3, signatures: U })) ? n4 : l2), { type: "image", image: c3, mimeType: l2, providerMetadata: null != (s4 = e6.providerOptions) ? s4 : e6.experimental_providerMetadata };
                case "file":
                  if (null == l2) throw new Error("Mime type is missing for file part");
                  return { type: "file", data: c3 instanceof Uint8Array ? ie(c3) : c3, filename: e6.filename, mimeType: l2, providerMetadata: null != (o3 = e6.providerOptions) ? o3 : e6.experimental_providerMetadata };
              }
            })(e5, t3)).filter((e5) => "text" !== e5.type || "" !== e5.text), providerMetadata: null != (s3 = e4.providerOptions) ? s3 : e4.experimental_providerMetadata };
          case "assistant":
            return "string" == typeof e4.content ? { role: "assistant", content: [{ type: "text", text: e4.content }], providerMetadata: null != (o2 = e4.providerOptions) ? o2 : e4.experimental_providerMetadata } : { role: "assistant", content: e4.content.filter((e5) => "text" !== e5.type || "" !== e5.text).map((e5) => {
              var t4;
              const r4 = null != (t4 = e5.providerOptions) ? t4 : e5.experimental_providerMetadata;
              switch (e5.type) {
                case "file":
                  return { type: "file", data: e5.data instanceof URL ? e5.data : ie(e5.data), filename: e5.filename, mimeType: e5.mimeType, providerMetadata: r4 };
                case "reasoning":
                  return { type: "reasoning", text: e5.text, signature: e5.signature, providerMetadata: r4 };
                case "redacted-reasoning":
                  return { type: "redacted-reasoning", data: e5.data, providerMetadata: r4 };
                case "text":
                  return { type: "text", text: e5.text, providerMetadata: r4 };
                case "tool-call":
                  return { type: "tool-call", toolCallId: e5.toolCallId, toolName: e5.toolName, args: e5.args, providerMetadata: r4 };
              }
            }), providerMetadata: null != (i2 = e4.providerOptions) ? i2 : e4.experimental_providerMetadata };
          case "tool":
            return { role: "tool", content: e4.content.map((e5) => {
              var t4;
              return { type: "tool-result", toolCallId: e5.toolCallId, toolName: e5.toolName, result: e5.result, content: e5.experimental_content, isError: e5.isError, providerMetadata: null != (t4 = e5.providerOptions) ? t4 : e5.experimental_providerMetadata };
            }), providerMetadata: null != (a2 = e4.providerOptions) ? a2 : e4.experimental_providerMetadata };
          default:
            throw new me({ role: c2 });
        }
      })(e3, s2))];
    }
    function fe({ maxTokens: e2, temperature: t2, topP: r2, topK: n2, presencePenalty: s2, frequencyPenalty: o2, stopSequences: i2, seed: a2 }) {
      if (null != e2) {
        if (!Number.isInteger(e2)) throw new y({ parameter: "maxTokens", value: e2, message: "maxTokens must be an integer" });
        if (e2 < 1) throw new y({ parameter: "maxTokens", value: e2, message: "maxTokens must be >= 1" });
      }
      if (null != t2 && "number" != typeof t2) throw new y({ parameter: "temperature", value: t2, message: "temperature must be a number" });
      if (null != r2 && "number" != typeof r2) throw new y({ parameter: "topP", value: r2, message: "topP must be a number" });
      if (null != n2 && "number" != typeof n2) throw new y({ parameter: "topK", value: n2, message: "topK must be a number" });
      if (null != s2 && "number" != typeof s2) throw new y({ parameter: "presencePenalty", value: s2, message: "presencePenalty must be a number" });
      if (null != o2 && "number" != typeof o2) throw new y({ parameter: "frequencyPenalty", value: o2, message: "frequencyPenalty must be a number" });
      if (null != a2 && !Number.isInteger(a2)) throw new y({ parameter: "seed", value: a2, message: "seed must be an integer" });
      return { maxTokens: e2, temperature: null != t2 ? t2 : 0, topP: r2, topK: n2, presencePenalty: s2, frequencyPenalty: o2, stopSequences: null != i2 && i2.length > 0 ? i2 : void 0, seed: a2 };
    }
    function ge(e2) {
      var t2, r2, n2;
      const s2 = [];
      for (const o2 of e2) {
        let e3;
        try {
          e3 = new URL(o2.url);
        } catch (e4) {
          throw new Error(`Invalid URL: ${o2.url}`);
        }
        switch (e3.protocol) {
          case "http:":
          case "https:":
            if (null == (t2 = o2.contentType) ? void 0 : t2.startsWith("image/")) s2.push({ type: "image", image: e3 });
            else {
              if (!o2.contentType) throw new Error("If the attachment is not an image, it must specify a content type");
              s2.push({ type: "file", data: e3, mimeType: o2.contentType });
            }
            break;
          case "data:": {
            let e4, t3, i2;
            try {
              [e4, t3] = o2.url.split(","), i2 = e4.split(";")[0].split(":")[1];
            } catch (e5) {
              throw new Error(`Error processing data URL: ${o2.url}`);
            }
            if (null == i2 || null == t3) throw new Error(`Invalid data URL format: ${o2.url}`);
            if (null == (r2 = o2.contentType) ? void 0 : r2.startsWith("image/")) s2.push({ type: "image", image: ae(t3) });
            else if (null == (n2 = o2.contentType) ? void 0 : n2.startsWith("text/")) s2.push({ type: "text", text: ce(ae(t3)) });
            else {
              if (!o2.contentType) throw new Error("If the attachment is not an image or text, it must specify a content type");
              s2.push({ type: "file", data: t3, mimeType: o2.contentType });
            }
            break;
          }
          default:
            throw new Error(`Unsupported URL protocol: ${e3.protocol}`);
        }
      }
      return s2;
    }
    le = pe;
    var ye, we = "AI_MessageConversionError", ve = `vercel.ai.error.${we}`, _e = Symbol.for(ve), Ae = class extends n.bD {
      constructor({ originalMessage: e2, message: t2 }) {
        super({ name: we, message: t2 }), this[ye] = true, this.originalMessage = e2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, ve);
      }
    };
    ye = _e;
    var Se = i.RZ(() => i.KC([i.ch(), i.Yj(), i.ai(), i.zM(), i.g1(i.Yj(), Se), i.YO(Se)])), be = i.g1(i.Yj(), i.g1(i.Yj(), Se)), Ee = i.YO(i.KC([i.Ik({ type: i.eu("text"), text: i.Yj() }), i.Ik({ type: i.eu("image"), data: i.Yj(), mimeType: i.Yj().optional() })])), Ie = i.Ik({ type: i.eu("text"), text: i.Yj(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Ce = i.Ik({ type: i.eu("image"), image: i.KC([oe, i.Nl(URL)]), mimeType: i.Yj().optional(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), ke = i.Ik({ type: i.eu("file"), data: i.KC([oe, i.Nl(URL)]), filename: i.Yj().optional(), mimeType: i.Yj(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), xe = i.Ik({ type: i.eu("reasoning"), text: i.Yj(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Te = i.Ik({ type: i.eu("redacted-reasoning"), data: i.Yj(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Re = i.Ik({ type: i.eu("tool-call"), toolCallId: i.Yj(), toolName: i.Yj(), args: i.L5(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Be = i.Ik({ type: i.eu("tool-result"), toolCallId: i.Yj(), toolName: i.Yj(), result: i.L5(), content: Ee.optional(), isError: i.zM().optional(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Pe = i.Ik({ role: i.eu("system"), content: i.Yj(), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Je = i.Ik({ role: i.eu("user"), content: i.KC([i.Yj(), i.YO(i.KC([Ie, Ce, ke]))]), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), Me = i.Ik({ role: i.eu("assistant"), content: i.KC([i.Yj(), i.YO(i.KC([Ie, ke, xe, Te, Re]))]), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), qe = i.Ik({ role: i.eu("tool"), content: i.YO(Be), providerOptions: be.optional(), experimental_providerMetadata: be.optional() }), De = i.KC([Pe, Je, Me, qe]);
    function Oe({ prompt: e2, tools: t2 }) {
      if (null == e2.prompt && null == e2.messages) throw new n.M3({ prompt: e2, message: "prompt or messages must be defined" });
      if (null != e2.prompt && null != e2.messages) throw new n.M3({ prompt: e2, message: "prompt and messages cannot be defined at the same time" });
      if (null != e2.system && "string" != typeof e2.system) throw new n.M3({ prompt: e2, message: "system must be a string" });
      if (null != e2.prompt) {
        if ("string" != typeof e2.prompt) throw new n.M3({ prompt: e2, message: "prompt must be a string" });
        return { type: "prompt", system: e2.system, messages: [{ role: "user", content: e2.prompt }] };
      }
      if (null != e2.messages) {
        const r2 = (function(e3) {
          if (!Array.isArray(e3)) throw new n.M3({ prompt: e3, message: ["messages must be an array of CoreMessage or UIMessage", `Received non-array value: ${JSON.stringify(e3)}`].join("\n"), cause: e3 });
          if (0 === e3.length) return "messages";
          const t3 = e3.map(Ne);
          if (t3.some((e4) => "has-ui-specific-parts" === e4)) return "ui-messages";
          const r3 = t3.findIndex((e4) => "has-core-specific-parts" !== e4 && "message" !== e4);
          if (-1 === r3) return "messages";
          throw new n.M3({ prompt: e3, message: ["messages must be an array of CoreMessage or UIMessage", `Received message of type: "${t3[r3]}" at index ${r3}`, `messages[${r3}]: ${JSON.stringify(e3[r3])}`].join("\n"), cause: e3 });
        })(e2.messages), o2 = "ui-messages" === r2 ? (function(e3, t3) {
          var r3, n2;
          const s2 = null != (r3 = null == t3 ? void 0 : t3.tools) ? r3 : {}, o3 = [];
          for (let t4 = 0; t4 < e3.length; t4++) {
            const r4 = e3[t4], i2 = t4 === e3.length - 1, { role: a3, content: c2, experimental_attachments: l2 } = r4;
            switch (a3) {
              case "system":
                o3.push({ role: "system", content: c2 });
                break;
              case "user":
                if (null == r4.parts) o3.push({ role: "user", content: l2 ? [{ type: "text", text: c2 }, ...ge(l2)] : c2 });
                else {
                  const e4 = r4.parts.filter((e5) => "text" === e5.type).map((e5) => ({ type: "text", text: e5.text }));
                  o3.push({ role: "user", content: l2 ? [...e4, ...ge(l2)] : e4 });
                }
                break;
              case "assistant": {
                if (null != r4.parts) {
                  let e5 = function() {
                    const e6 = [];
                    for (const t7 of a4) switch (t7.type) {
                      case "file":
                      case "text":
                        e6.push(t7);
                        break;
                      case "reasoning":
                        for (const r5 of t7.details) switch (r5.type) {
                          case "text":
                            e6.push({ type: "reasoning", text: r5.text, signature: r5.signature });
                            break;
                          case "redacted":
                            e6.push({ type: "redacted-reasoning", data: r5.data });
                        }
                        break;
                      case "tool-invocation":
                        e6.push({ type: "tool-call", toolCallId: t7.toolInvocation.toolCallId, toolName: t7.toolInvocation.toolName, args: t7.toolInvocation.args });
                        break;
                      default:
                        throw new Error(`Unsupported part: ${t7}`);
                    }
                    o3.push({ role: "assistant", content: e6 });
                    const n3 = a4.filter((e7) => "tool-invocation" === e7.type).map((e7) => e7.toolInvocation);
                    n3.length > 0 && o3.push({ role: "tool", content: n3.map((e7) => {
                      if (!("result" in e7)) throw new Ae({ originalMessage: r4, message: "ToolInvocation must have a result: " + JSON.stringify(e7) });
                      const { toolCallId: t7, toolName: n4, result: o4 } = e7, i4 = s2[n4];
                      return null != (null == i4 ? void 0 : i4.experimental_toToolResultContent) ? { type: "tool-result", toolCallId: t7, toolName: n4, result: i4.experimental_toToolResultContent(o4), experimental_content: i4.experimental_toToolResultContent(o4) } : { type: "tool-result", toolCallId: t7, toolName: n4, result: o4 };
                    }) }), a4 = [], i3 = false, t6++;
                  }, t6 = 0, i3 = false, a4 = [];
                  for (const s3 of r4.parts) switch (s3.type) {
                    case "text":
                      i3 && e5(), a4.push(s3);
                      break;
                    case "file":
                    case "reasoning":
                      a4.push(s3);
                      break;
                    case "tool-invocation":
                      (null != (n2 = s3.toolInvocation.step) ? n2 : 0) !== t6 && e5(), a4.push(s3), i3 = true;
                  }
                  e5();
                  break;
                }
                const e4 = r4.toolInvocations;
                if (null == e4 || 0 === e4.length) {
                  o3.push({ role: "assistant", content: c2 });
                  break;
                }
                const t5 = e4.reduce((e5, t6) => {
                  var r5;
                  return Math.max(e5, null != (r5 = t6.step) ? r5 : 0);
                }, 0);
                for (let n3 = 0; n3 <= t5; n3++) {
                  const t6 = e4.filter((e5) => {
                    var t7;
                    return (null != (t7 = e5.step) ? t7 : 0) === n3;
                  });
                  0 !== t6.length && (o3.push({ role: "assistant", content: [...i2 && c2 && 0 === n3 ? [{ type: "text", text: c2 }] : [], ...t6.map(({ toolCallId: e5, toolName: t7, args: r5 }) => ({ type: "tool-call", toolCallId: e5, toolName: t7, args: r5 }))] }), o3.push({ role: "tool", content: t6.map((e5) => {
                    if (!("result" in e5)) throw new Ae({ originalMessage: r4, message: "ToolInvocation must have a result: " + JSON.stringify(e5) });
                    const { toolCallId: t7, toolName: n4, result: o4 } = e5, i3 = s2[n4];
                    return null != (null == i3 ? void 0 : i3.experimental_toToolResultContent) ? { type: "tool-result", toolCallId: t7, toolName: n4, result: i3.experimental_toToolResultContent(o4), experimental_content: i3.experimental_toToolResultContent(o4) } : { type: "tool-result", toolCallId: t7, toolName: n4, result: o4 };
                  }) }));
                }
                c2 && !i2 && o3.push({ role: "assistant", content: c2 });
                break;
              }
              case "data":
                break;
              default:
                throw new Ae({ originalMessage: r4, message: `Unsupported role: ${a3}` });
            }
          }
          return o3;
        })(e2.messages, { tools: t2 }) : e2.messages;
        if (0 === o2.length) throw new n.M3({ prompt: e2, message: "messages must not be empty" });
        const a2 = (0, s.ZZ)({ value: o2, schema: i.YO(De) });
        if (!a2.success) throw new n.M3({ prompt: e2, message: ["message must be a CoreMessage or a UI message", `Validation error: ${a2.error.message}`].join("\n"), cause: a2.error });
        return { type: "messages", messages: o2, system: e2.system };
      }
      throw new Error("unreachable");
    }
    function Ne(e2) {
      return "object" == typeof e2 && null !== e2 && ("function" === e2.role || "data" === e2.role || "toolInvocations" in e2 || "parts" in e2 || "experimental_attachments" in e2) ? "has-ui-specific-parts" : "object" == typeof e2 && null !== e2 && "content" in e2 && (Array.isArray(e2.content) || "experimental_providerMetadata" in e2 || "providerOptions" in e2) ? "has-core-specific-parts" : "object" == typeof e2 && null !== e2 && "role" in e2 && "content" in e2 && "string" == typeof e2.content && ["system", "user", "assistant", "tool"].includes(e2.role) ? "message" : "other";
    }
    function Fe({ promptTokens: e2, completionTokens: t2 }) {
      return { promptTokens: e2, completionTokens: t2, totalTokens: e2 + t2 };
    }
    function Ue(e2, t2) {
      return { promptTokens: e2.promptTokens + t2.promptTokens, completionTokens: e2.completionTokens + t2.completionTokens, totalTokens: e2.totalTokens + t2.totalTokens };
    }
    function Le({ prompt: e2, schema: t2, schemaPrefix: r2 = null != t2 ? "JSON schema:" : void 0, schemaSuffix: n2 = null != t2 ? "You MUST answer with a JSON object that matches the JSON schema above." : "You MUST answer with JSON." }) {
      return [null != e2 && e2.length > 0 ? e2 : void 0, null != e2 && e2.length > 0 ? "" : void 0, r2, null != t2 ? JSON.stringify(t2) : void 0, n2].filter((e3) => null != e3).join("\n");
    }
    function $e(e2) {
      const t2 = e2.pipeThrough(new TransformStream());
      return t2[Symbol.asyncIterator] = () => {
        const e3 = t2.getReader();
        return { async next() {
          const { done: t3, value: r2 } = await e3.read();
          return t3 ? { done: true, value: void 0 } : { done: false, value: r2 };
        } };
      }, t2;
    }
    function Qe(e2) {
      const t2 = e2.map((e3) => ({ ...e3, content: "string" == typeof e3.content ? e3.content : e3.content.map(je) }));
      return JSON.stringify(t2);
    }
    function je(e2) {
      return "image" === e2.type ? { ...e2, image: e2.image instanceof Uint8Array ? ie(e2.image) : e2.image } : e2;
    }
    (0, s.hK)({ prefix: "aiobj", size: 24 });
    var Ge = class {
      constructor() {
        this.status = { type: "pending" }, this._resolve = void 0, this._reject = void 0;
      }
      get value() {
        return this.promise || (this.promise = new Promise((e2, t2) => {
          "resolved" === this.status.type ? e2(this.status.value) : "rejected" === this.status.type && t2(this.status.error), this._resolve = e2, this._reject = t2;
        })), this.promise;
      }
      resolve(e2) {
        var t2;
        this.status = { type: "resolved", value: e2 }, this.promise && (null == (t2 = this._resolve) || t2.call(this, e2));
      }
      reject(e2) {
        var t2;
        this.status = { type: "rejected", error: e2 }, this.promise && (null == (t2 = this._reject) || t2.call(this, e2));
      }
    };
    function He() {
      let e2, t2;
      return { promise: new Promise((r2, n2) => {
        e2 = r2, t2 = n2;
      }), resolve: e2, reject: t2 };
    }
    function ze() {
      let e2 = [], t2 = null, r2 = false, n2 = He();
      const s2 = async () => {
        if (r2 && 0 === e2.length) null == t2 || t2.close();
        else {
          if (0 === e2.length) return n2 = He(), await n2.promise, s2();
          try {
            const { value: n3, done: o2 } = await e2[0].read();
            o2 ? (e2.shift(), e2.length > 0 ? await s2() : r2 && (null == t2 || t2.close())) : null == t2 || t2.enqueue(n3);
          } catch (n3) {
            null == t2 || t2.error(n3), e2.shift(), r2 && 0 === e2.length && (null == t2 || t2.close());
          }
        }
      };
      return { stream: new ReadableStream({ start(e3) {
        t2 = e3;
      }, pull: s2, async cancel() {
        for (const t3 of e2) await t3.cancel();
        e2 = [], r2 = true;
      } }), addStream: (t3) => {
        if (r2) throw new Error("Cannot add inner stream: outer stream is closed");
        e2.push(t3.getReader()), n2.resolve();
      }, close: () => {
        r2 = true, n2.resolve(), 0 === e2.length && (null == t2 || t2.close());
      }, terminate: () => {
        r2 = true, n2.resolve(), e2.forEach((e3) => e3.cancel()), e2 = [], null == t2 || t2.close();
      } };
    }
    function We() {
      var e2, t2;
      return null != (t2 = null == (e2 = null == globalThis ? void 0 : globalThis.performance) ? void 0 : e2.now()) ? t2 : Date.now();
    }
    (0, s.hK)({ prefix: "aiobj", size: 24 });
    var Ve, Ke = "AI_NoOutputSpecifiedError", Ye = `vercel.ai.error.${Ke}`, Ze = Symbol.for(Ye), Xe = class extends n.bD {
      constructor({ message: e2 = "No output specified." } = {}) {
        super({ name: Ke, message: e2 }), this[Ve] = true;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, Ye);
      }
    };
    Ve = Ze;
    var et, tt = "AI_ToolExecutionError", rt = `vercel.ai.error.${tt}`, nt = Symbol.for(rt), st = class extends n.bD {
      constructor({ toolArgs: e2, toolName: t2, toolCallId: r2, cause: s2, message: o2 = `Error executing tool ${t2}: ${(0, n.u1)(s2)}` }) {
        super({ name: tt, message: o2, cause: s2 }), this[et] = true, this.toolArgs = e2, this.toolName = t2, this.toolCallId = r2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, rt);
      }
    };
    function ot({ tools: e2, toolChoice: t2, activeTools: r2 }) {
      if (!(null != (n2 = e2) && Object.keys(n2).length > 0)) return { tools: void 0, toolChoice: void 0 };
      var n2;
      return { tools: (null != r2 ? Object.entries(e2).filter(([e3]) => r2.includes(e3)) : Object.entries(e2)).map(([e3, t3]) => {
        const r3 = t3.type;
        switch (r3) {
          case void 0:
          case "function":
            return { type: "function", name: e3, description: t3.description, parameters: (0, a.mD)(t3.parameters).jsonSchema };
          case "provider-defined":
            return { type: "provider-defined", name: e3, id: t3.id, args: t3.args };
          default:
            throw new Error(`Unsupported tool type: ${r3}`);
        }
      }), toolChoice: null == t2 ? { type: "auto" } : "string" == typeof t2 ? { type: t2 } : { type: "tool", toolName: t2.toolName } };
    }
    et = nt;
    var it = /^([\s\S]*?)(\s+)(\S*)$/;
    function at(e2) {
      const t2 = e2.match(it);
      return t2 ? { prefix: t2[1], whitespace: t2[2], suffix: t2[3] } : void 0;
    }
    var ct, lt = "AI_InvalidToolArgumentsError", ut = `vercel.ai.error.${lt}`, dt = Symbol.for(ut), pt = class extends n.bD {
      constructor({ toolArgs: e2, toolName: t2, cause: r2, message: s2 = `Invalid arguments for tool ${t2}: ${(0, n.u1)(r2)}` }) {
        super({ name: lt, message: s2, cause: r2 }), this[ct] = true, this.toolArgs = e2, this.toolName = t2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, ut);
      }
    };
    ct = dt;
    var mt, ht = "AI_NoSuchToolError", ft = `vercel.ai.error.${ht}`, gt = Symbol.for(ft), yt = class extends n.bD {
      constructor({ toolName: e2, availableTools: t2, message: r2 = `Model tried to call unavailable tool '${e2}'. ${void 0 === t2 ? "No tools are available." : `Available tools: ${t2.join(", ")}.`}` }) {
        super({ name: ht, message: r2 }), this[mt] = true, this.toolName = e2, this.availableTools = t2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, ft);
      }
    };
    mt = gt;
    var wt, vt = "AI_ToolCallRepairError", _t = `vercel.ai.error.${vt}`, At = Symbol.for(_t), St = class extends n.bD {
      constructor({ cause: e2, originalError: t2, message: r2 = `Error repairing tool call: ${(0, n.u1)(e2)}` }) {
        super({ name: vt, message: r2, cause: e2 }), this[wt] = true, this.originalError = t2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, _t);
      }
    };
    async function bt({ toolCall: e2, tools: t2, repairToolCall: r2, system: n2, messages: s2 }) {
      if (null == t2) throw new yt({ toolName: e2.toolName });
      try {
        return await Et({ toolCall: e2, tools: t2 });
      } catch (o2) {
        if (null == r2 || !yt.isInstance(o2) && !pt.isInstance(o2)) throw o2;
        let i2 = null;
        try {
          i2 = await r2({ toolCall: e2, tools: t2, parameterSchema: ({ toolName: e3 }) => (0, a.mD)(t2[e3].parameters).jsonSchema, system: n2, messages: s2, error: o2 });
        } catch (e3) {
          throw new St({ cause: e3, originalError: o2 });
        }
        if (null == i2) throw o2;
        return await Et({ toolCall: i2, tools: t2 });
      }
    }
    async function Et({ toolCall: e2, tools: t2 }) {
      const r2 = e2.toolName, n2 = t2[r2];
      if (null == n2) throw new yt({ toolName: e2.toolName, availableTools: Object.keys(t2) });
      const o2 = (0, a.mD)(n2.parameters), i2 = "" === e2.args.trim() ? (0, s.ZZ)({ value: {}, schema: o2 }) : (0, s.N8)({ text: e2.args, schema: o2 });
      if (false === i2.success) throw new pt({ toolName: r2, toolArgs: e2.args, cause: i2.error });
      return { type: "tool-call", toolCallId: e2.toolCallId, toolName: r2, args: i2.value };
    }
    function It(e2) {
      const t2 = e2.filter((e3) => "text" === e3.type).map((e3) => e3.text).join("");
      return t2.length > 0 ? t2 : void 0;
    }
    function Ct({ text: e2 = "", files: t2, reasoning: r2, tools: n2, toolCalls: s2, toolResults: o2, messageId: i2, generateMessageId: a2 }) {
      const c2 = [], l2 = [];
      return r2.length > 0 && l2.push(...r2.map((e3) => "text" === e3.type ? { ...e3, type: "reasoning" } : { ...e3, type: "redacted-reasoning" })), t2.length > 0 && l2.push(...t2.map((e3) => ({ type: "file", data: e3.base64, mimeType: e3.mimeType }))), e2.length > 0 && l2.push({ type: "text", text: e2 }), s2.length > 0 && l2.push(...s2), l2.length > 0 && c2.push({ role: "assistant", content: l2, id: i2 }), o2.length > 0 && c2.push({ role: "tool", id: a2(), content: o2.map((e3) => {
        const t3 = n2[e3.toolName];
        return null != (null == t3 ? void 0 : t3.experimental_toToolResultContent) ? { type: "tool-result", toolCallId: e3.toolCallId, toolName: e3.toolName, result: t3.experimental_toToolResultContent(e3.result), experimental_content: t3.experimental_toToolResultContent(e3.result) } : { type: "tool-result", toolCallId: e3.toolCallId, toolName: e3.toolName, result: e3.result };
      }) }), c2;
    }
    wt = At;
    (0, s.hK)({ prefix: "aitxt", size: 24 }), (0, s.hK)({ prefix: "msg", size: 24 });
    l({}, { object: () => Dt, text: () => qt });
    var kt, xt = "AI_InvalidStreamPartError", Tt = `vercel.ai.error.${xt}`, Rt = Symbol.for(Tt), Bt = class extends n.bD {
      constructor({ chunk: e2, message: t2 }) {
        super({ name: xt, message: t2 }), this[kt] = true, this.chunk = e2;
      }
      static isInstance(e2) {
        return n.bD.hasMarker(e2, Tt);
      }
    };
    kt = Rt;
    var Pt, Jt = "vercel.ai.error.AI_MCPClientError", Mt = Symbol.for(Jt);
    n.bD;
    Pt = Mt;
    var qt = () => ({ type: "text", responseFormat: () => ({ type: "text" }), injectIntoSystemPrompt: ({ system: e2 }) => e2, parsePartial: ({ text: e2 }) => ({ partial: e2 }), parseOutput: ({ text: e2 }) => e2 }), Dt = ({ schema: e2 }) => {
      const t2 = (0, a.mD)(e2);
      return { type: "object", responseFormat: ({ model: e3 }) => ({ type: "json", schema: e3.supportsStructuredOutputs ? t2.jsonSchema : void 0 }), injectIntoSystemPrompt: ({ system: e3, model: r2 }) => r2.supportsStructuredOutputs ? e3 : Le({ prompt: e3, schema: t2.jsonSchema }), parsePartial({ text: e3 }) {
        const t3 = (0, a.d1)(e3);
        switch (t3.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse":
            return { partial: t3.value };
          default: {
            const e4 = t3.state;
            throw new Error(`Unsupported parse state: ${e4}`);
          }
        }
      }, parseOutput({ text: e3 }, r2) {
        const n2 = (0, s.N8)({ text: e3 });
        if (!n2.success) throw new z({ message: "No object generated: could not parse the response.", cause: n2.error, text: e3, response: r2.response, usage: r2.usage, finishReason: r2.finishReason });
        const o2 = (0, s.ZZ)({ value: n2.value, schema: t2 });
        if (!o2.success) throw new z({ message: "No object generated: response did not match schema.", cause: o2.error, text: e3, response: r2.response, usage: r2.usage, finishReason: r2.finishReason });
        return o2.value;
      } };
    };
    function Ot(e2) {
      return void 0 === e2 ? [] : Array.isArray(e2) ? e2 : [e2];
    }
    function Nt(e2, t2) {
      const r2 = e2.getReader(), n2 = t2.getReader();
      let s2, o2, i2 = false, a2 = false;
      async function c2(e3) {
        try {
          null == s2 && (s2 = r2.read());
          const t3 = await s2;
          s2 = void 0, t3.done ? e3.close() : e3.enqueue(t3.value);
        } catch (t3) {
          e3.error(t3);
        }
      }
      async function l2(e3) {
        try {
          null == o2 && (o2 = n2.read());
          const t3 = await o2;
          o2 = void 0, t3.done ? e3.close() : e3.enqueue(t3.value);
        } catch (t3) {
          e3.error(t3);
        }
      }
      return new ReadableStream({ async pull(e3) {
        try {
          if (i2) return void await l2(e3);
          if (a2) return void await c2(e3);
          null == s2 && (s2 = r2.read()), null == o2 && (o2 = n2.read());
          const { result: t3, reader: u2 } = await Promise.race([s2.then((e4) => ({ result: e4, reader: r2 })), o2.then((e4) => ({ result: e4, reader: n2 }))]);
          t3.done || e3.enqueue(t3.value), u2 === r2 ? (s2 = void 0, t3.done && (await l2(e3), i2 = true)) : (o2 = void 0, t3.done && (a2 = true, await c2(e3)));
        } catch (t3) {
          e3.error(t3);
        }
      }, cancel() {
        r2.cancel(), n2.cancel();
      } });
    }
    var Ft = (0, s.hK)({ prefix: "aitxt", size: 24 }), Ut = (0, s.hK)({ prefix: "msg", size: 24 });
    function Lt({ model: e2, tools: t2, toolChoice: r2, system: n2, prompt: s2, messages: o2, maxRetries: i2, abortSignal: a2, headers: c2, maxSteps: l2 = 1, experimental_generateMessageId: u2 = Ut, experimental_output: d2, experimental_continueSteps: p2 = false, experimental_telemetry: m2, experimental_providerMetadata: h2, providerOptions: f2 = h2, experimental_toolCallStreaming: g2 = false, toolCallStreaming: y2 = g2, experimental_activeTools: w2, experimental_repairToolCall: v2, experimental_transform: _2, onChunk: A2, onError: S2, onFinish: b2, onStepFinish: E2, _internal: { now: I2 = We, generateId: C2 = Ft, currentDate: k2 = () => /* @__PURE__ */ new Date() } = {}, ...x2 }) {
      return new $t({ model: e2, telemetry: m2, headers: c2, settings: x2, maxRetries: i2, abortSignal: a2, system: n2, prompt: s2, messages: o2, tools: t2, toolChoice: r2, toolCallStreaming: y2, transforms: Ot(_2), activeTools: w2, repairToolCall: v2, maxSteps: l2, output: d2, continueSteps: p2, providerOptions: f2, onChunk: A2, onError: S2, onFinish: b2, onStepFinish: E2, now: I2, currentDate: k2, generateId: C2, generateMessageId: u2 });
    }
    var $t = class {
      constructor({ model: e2, telemetry: t2, headers: r2, settings: o2, maxRetries: i2, abortSignal: a2, system: c2, prompt: l2, messages: u2, tools: d2, toolChoice: p2, toolCallStreaming: m2, transforms: h2, activeTools: f2, repairToolCall: g2, maxSteps: w2, output: v2, continueSteps: _2, providerOptions: A2, now: S2, currentDate: b2, generateId: E2, generateMessageId: x2, onChunk: T2, onError: R2, onFinish: M2, onStepFinish: q2 }) {
        var D2;
        if (this.warningsPromise = new Ge(), this.usagePromise = new Ge(), this.finishReasonPromise = new Ge(), this.providerMetadataPromise = new Ge(), this.textPromise = new Ge(), this.reasoningPromise = new Ge(), this.reasoningDetailsPromise = new Ge(), this.sourcesPromise = new Ge(), this.filesPromise = new Ge(), this.toolCallsPromise = new Ge(), this.toolResultsPromise = new Ge(), this.requestPromise = new Ge(), this.responsePromise = new Ge(), this.stepsPromise = new Ge(), w2 < 1) throw new y({ parameter: "maxSteps", value: w2, message: "maxSteps must be at least 1" });
        this.output = v2;
        let O2, N2 = "", U2 = "", L2 = "", $2 = [], Q2 = [], j2 = [];
        const G2 = [], H2 = { id: E2(), timestamp: b2(), modelId: e2.modelId, messages: [] };
        let z2, W2, V2 = [], K2 = [], Y2 = "initial";
        const Z2 = [];
        let X2;
        const ee2 = new TransformStream({ async transform(e3, t3) {
          t3.enqueue(e3);
          const { part: r3 } = e3;
          if ("text-delta" !== r3.type && "reasoning" !== r3.type && "source" !== r3.type && "tool-call" !== r3.type && "tool-result" !== r3.type && "tool-call-streaming-start" !== r3.type && "tool-call-delta" !== r3.type || await (null == T2 ? void 0 : T2({ chunk: r3 })), "error" === r3.type && await (null == R2 ? void 0 : R2({ error: r3.error })), "text-delta" === r3.type && (N2 += r3.textDelta, U2 += r3.textDelta, L2 += r3.textDelta), "reasoning" === r3.type && (null == O2 ? (O2 = { type: "text", text: r3.textDelta }, $2.push(O2)) : O2.text += r3.textDelta), "reasoning-signature" === r3.type) {
            if (null == O2) throw new n.bD({ name: "InvalidStreamPart", message: "reasoning-signature without reasoning" });
            O2.signature = r3.signature, O2 = void 0;
          }
          if ("redacted-reasoning" === r3.type && $2.push({ type: "redacted", data: r3.data }), "file" === r3.type && Q2.push(r3), "source" === r3.type && (G2.push(r3.source), j2.push(r3.source)), "tool-call" === r3.type && V2.push(r3), "tool-result" === r3.type && K2.push(r3), "step-finish" === r3.type) {
            const e4 = Ct({ text: U2, files: Q2, reasoning: $2, tools: null != d2 ? d2 : {}, toolCalls: V2, toolResults: K2, messageId: r3.messageId, generateMessageId: x2 });
            let t4 = "done";
            Z2.length + 1 < w2 && (_2 && "length" === r3.finishReason && 0 === V2.length ? t4 = "continue" : V2.length > 0 && K2.length === V2.length && (t4 = "tool-result"));
            const n2 = { stepType: Y2, text: N2, reasoning: It($2), reasoningDetails: $2, files: Q2, sources: j2, toolCalls: V2, toolResults: K2, finishReason: r3.finishReason, usage: r3.usage, warnings: r3.warnings, logprobs: r3.logprobs, request: r3.request, response: { ...r3.response, messages: [...H2.messages, ...e4] }, providerMetadata: r3.experimental_providerMetadata, experimental_providerMetadata: r3.experimental_providerMetadata, isContinued: r3.isContinued };
            await (null == q2 ? void 0 : q2(n2)), Z2.push(n2), V2 = [], K2 = [], N2 = "", j2 = [], $2 = [], Q2 = [], O2 = void 0, "done" !== t4 && (Y2 = t4), "continue" !== t4 && (H2.messages.push(...e4), U2 = "");
          }
          "finish" === r3.type && (H2.id = r3.response.id, H2.timestamp = r3.response.timestamp, H2.modelId = r3.response.modelId, H2.headers = r3.response.headers, W2 = r3.usage, z2 = r3.finishReason);
        }, async flush(e3) {
          var r3;
          try {
            if (0 === Z2.length) return;
            const e4 = Z2[Z2.length - 1];
            ce2.warningsPromise.resolve(e4.warnings), ce2.requestPromise.resolve(e4.request), ce2.responsePromise.resolve(e4.response), ce2.toolCallsPromise.resolve(e4.toolCalls), ce2.toolResultsPromise.resolve(e4.toolResults), ce2.providerMetadataPromise.resolve(e4.experimental_providerMetadata), ce2.reasoningPromise.resolve(e4.reasoning), ce2.reasoningDetailsPromise.resolve(e4.reasoningDetails);
            const n2 = null != z2 ? z2 : "unknown", s2 = null != W2 ? W2 : { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN };
            ce2.finishReasonPromise.resolve(n2), ce2.usagePromise.resolve(s2), ce2.textPromise.resolve(L2), ce2.sourcesPromise.resolve(G2), ce2.filesPromise.resolve(e4.files), ce2.stepsPromise.resolve(Z2), await (null == M2 ? void 0 : M2({ finishReason: n2, logprobs: void 0, usage: s2, text: L2, reasoning: e4.reasoning, reasoningDetails: e4.reasoningDetails, files: e4.files, sources: e4.sources, toolCalls: e4.toolCalls, toolResults: e4.toolResults, request: null != (r3 = e4.request) ? r3 : {}, response: e4.response, warnings: e4.warnings, providerMetadata: e4.providerMetadata, experimental_providerMetadata: e4.experimental_providerMetadata, steps: Z2 })), X2.setAttributes(J({ telemetry: t2, attributes: { "ai.response.finishReason": n2, "ai.response.text": { output: () => L2 }, "ai.response.toolCalls": { output: () => {
              var t3;
              return (null == (t3 = e4.toolCalls) ? void 0 : t3.length) ? JSON.stringify(e4.toolCalls) : void 0;
            } }, "ai.usage.promptTokens": s2.promptTokens, "ai.usage.completionTokens": s2.completionTokens, "ai.response.providerMetadata": JSON.stringify(e4.providerMetadata) } }));
          } catch (t3) {
            e3.error(t3);
          } finally {
            X2.end();
          }
        } }), te2 = ze();
        this.addStream = te2.addStream, this.closeStream = te2.close;
        let re2 = te2.stream;
        for (const e3 of h2) re2 = re2.pipeThrough(e3({ tools: d2, stopStream() {
          te2.terminate();
        } }));
        this.baseStream = re2.pipeThrough((function(e3) {
          if (!e3) return new TransformStream({ transform(e4, t4) {
            t4.enqueue({ part: e4, partialOutput: void 0 });
          } });
          let t3 = "", r3 = "", n2 = "";
          function s2({ controller: e4, partialOutput: t4 }) {
            e4.enqueue({ part: { type: "text-delta", textDelta: r3 }, partialOutput: t4 }), r3 = "";
          }
          return new TransformStream({ transform(o3, i3) {
            if ("step-finish" === o3.type && s2({ controller: i3 }), "text-delta" !== o3.type) return void i3.enqueue({ part: o3, partialOutput: void 0 });
            t3 += o3.textDelta, r3 += o3.textDelta;
            const a3 = e3.parsePartial({ text: t3 });
            if (null != a3) {
              const e4 = JSON.stringify(a3.partial);
              e4 !== n2 && (s2({ controller: i3, partialOutput: a3.partial }), n2 = e4);
            }
          }, flush(e4) {
            r3.length > 0 && s2({ controller: e4 });
          } });
        })(v2)).pipeThrough(ee2);
        const { maxRetries: ne2, retry: se2 } = I({ maxRetries: i2 }), oe2 = B(t2), ie2 = k({ model: e2, telemetry: t2, headers: r2, settings: { ...o2, maxRetries: ne2 } }), ae2 = Oe({ prompt: { system: null != (D2 = null == v2 ? void 0 : v2.injectIntoSystemPrompt({ system: c2, model: e2 })) ? D2 : c2, prompt: l2, messages: u2 }, tools: d2 }), ce2 = this;
        P({ name: "ai.streamText", attributes: J({ telemetry: t2, attributes: { ...C({ operationId: "ai.streamText", telemetry: t2 }), ...ie2, "ai.prompt": { input: () => JSON.stringify({ system: c2, prompt: l2, messages: u2 }) }, "ai.settings.maxSteps": w2 } }), tracer: oe2, endWhenDone: false, fn: async (n2) => {
          X2 = n2, await (async function n3({ currentStep: i3, responseMessages: l3, usage: u3, stepType: h3, previousStepText: y2, hasLeadingWhitespace: I2, messageId: k2 }) {
            var T3;
            const R3 = 0 === l3.length ? ae2.type : "messages", B2 = [...ae2.messages, ...l3], M3 = await he({ prompt: { type: R3, system: ae2.system, messages: B2 }, modelSupportsImageUrls: e2.supportsImageUrls, modelSupportsUrl: null == (T3 = e2.supportsUrl) ? void 0 : T3.bind(e2) }), q3 = { type: "regular", ...ot({ tools: d2, toolChoice: p2, activeTools: f2 }) }, { result: { stream: D3, warnings: O3, rawResponse: N3, request: U3 }, doStreamSpan: L3, startTimestampMs: $3 } = await se2(() => P({ name: "ai.streamText.doStream", attributes: J({ telemetry: t2, attributes: { ...C({ operationId: "ai.streamText.doStream", telemetry: t2 }), ...ie2, "ai.prompt.format": { input: () => R3 }, "ai.prompt.messages": { input: () => Qe(M3) }, "ai.prompt.tools": { input: () => {
              var e3;
              return null == (e3 = q3.tools) ? void 0 : e3.map((e4) => JSON.stringify(e4));
            } }, "ai.prompt.toolChoice": { input: () => null != q3.toolChoice ? JSON.stringify(q3.toolChoice) : void 0 }, "gen_ai.system": e2.provider, "gen_ai.request.model": e2.modelId, "gen_ai.request.frequency_penalty": o2.frequencyPenalty, "gen_ai.request.max_tokens": o2.maxTokens, "gen_ai.request.presence_penalty": o2.presencePenalty, "gen_ai.request.stop_sequences": o2.stopSequences, "gen_ai.request.temperature": o2.temperature, "gen_ai.request.top_k": o2.topK, "gen_ai.request.top_p": o2.topP } }), tracer: oe2, endWhenDone: false, fn: async (t3) => ({ startTimestampMs: S2(), doStreamSpan: t3, result: await e2.doStream({ mode: q3, ...fe(o2), inputFormat: R3, responseFormat: null == v2 ? void 0 : v2.responseFormat({ model: e2 }), prompt: M3, providerMetadata: A2, abortSignal: a2, headers: r2 }) }) })), Q3 = (function({ tools: e3, generatorStream: t3, toolCallStreaming: r3, tracer: n4, telemetry: o3, system: i4, messages: a3, abortSignal: c3, repairToolCall: l4 }) {
              let u4 = null;
              const d3 = new ReadableStream({ start(e4) {
                u4 = e4;
              } }), p3 = {}, m3 = /* @__PURE__ */ new Set();
              let h4, f3 = false;
              function g3() {
                f3 && 0 === m3.size && (null != h4 && u4.enqueue(h4), u4.close());
              }
              const y3 = new TransformStream({ async transform(t4, d4) {
                const f4 = t4.type;
                switch (f4) {
                  case "text-delta":
                  case "reasoning":
                  case "reasoning-signature":
                  case "redacted-reasoning":
                  case "source":
                  case "response-metadata":
                  case "error":
                    d4.enqueue(t4);
                    break;
                  case "file":
                    d4.enqueue(new F({ data: t4.data, mimeType: t4.mimeType }));
                    break;
                  case "tool-call-delta":
                    r3 && (p3[t4.toolCallId] || (d4.enqueue({ type: "tool-call-streaming-start", toolCallId: t4.toolCallId, toolName: t4.toolName }), p3[t4.toolCallId] = true), d4.enqueue({ type: "tool-call-delta", toolCallId: t4.toolCallId, toolName: t4.toolName, argsTextDelta: t4.argsTextDelta }));
                    break;
                  case "tool-call":
                    try {
                      const r4 = await bt({ toolCall: t4, tools: e3, repairToolCall: l4, system: i4, messages: a3 });
                      d4.enqueue(r4);
                      const p4 = e3[r4.toolName];
                      if (null != p4.execute) {
                        const e4 = (0, s.$C)();
                        m3.add(e4), P({ name: "ai.toolCall", attributes: J({ telemetry: o3, attributes: { ...C({ operationId: "ai.toolCall", telemetry: o3 }), "ai.toolCall.name": r4.toolName, "ai.toolCall.id": r4.toolCallId, "ai.toolCall.args": { output: () => JSON.stringify(r4.args) } } }), tracer: n4, fn: async (t5) => p4.execute(r4.args, { toolCallId: r4.toolCallId, messages: a3, abortSignal: c3 }).then((n5) => {
                          u4.enqueue({ ...r4, type: "tool-result", result: n5 }), m3.delete(e4), g3();
                          try {
                            t5.setAttributes(J({ telemetry: o3, attributes: { "ai.toolCall.result": { output: () => JSON.stringify(n5) } } }));
                          } catch (e5) {
                          }
                        }, (t6) => {
                          u4.enqueue({ type: "error", error: new st({ toolCallId: r4.toolCallId, toolName: r4.toolName, toolArgs: r4.args, cause: t6 }) }), m3.delete(e4), g3();
                        }) });
                      }
                    } catch (e4) {
                      u4.enqueue({ type: "error", error: e4 });
                    }
                    break;
                  case "finish":
                    h4 = { type: "finish", finishReason: t4.finishReason, logprobs: t4.logprobs, usage: Fe(t4.usage), experimental_providerMetadata: t4.providerMetadata };
                    break;
                  default:
                    throw new Error(`Unhandled chunk type: ${f4}`);
                }
              }, flush() {
                f3 = true, g3();
              } });
              return new ReadableStream({ start: async (e4) => Promise.all([t3.pipeThrough(y3).pipeTo(new WritableStream({ write(t4) {
                e4.enqueue(t4);
              }, close() {
              } })), d3.pipeTo(new WritableStream({ write(t4) {
                e4.enqueue(t4);
              }, close() {
                e4.close();
              } }))]) });
            })({ tools: d2, generatorStream: D3, toolCallStreaming: m2, tracer: oe2, telemetry: t2, system: c2, messages: B2, repairToolCall: g2, abortSignal: a2 }), j3 = null != U3 ? U3 : {}, G3 = [], H3 = [], z3 = [], W3 = [];
            let V3, K3, Y3, Z3 = "unknown", X3 = { promptTokens: 0, completionTokens: 0, totalTokens: 0 }, ee3 = true, te3 = "", re3 = "continue" === h3 ? y2 : "", ne3 = { id: E2(), timestamp: b2(), modelId: e2.modelId }, le2 = "", ue2 = false, de2 = true, pe2 = false;
            async function me2({ controller: e3, chunk: t3 }) {
              e3.enqueue(t3), te3 += t3.textDelta, re3 += t3.textDelta, ue2 = true, pe2 = t3.textDelta.trimEnd() !== t3.textDelta;
            }
            ce2.addStream(Q3.pipeThrough(new TransformStream({ async transform(e3, t3) {
              var r3, n4, s2;
              if (ee3) {
                const e4 = S2() - $3;
                ee3 = false, L3.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": e4 }), L3.setAttributes({ "ai.response.msToFirstChunk": e4 }), t3.enqueue({ type: "step-start", messageId: k2, request: j3, warnings: null != O3 ? O3 : [] });
              }
              if ("text-delta" === e3.type && 0 === e3.textDelta.length) return;
              const o3 = e3.type;
              switch (o3) {
                case "text-delta":
                  if (_2) {
                    const r4 = de2 && I2 ? e3.textDelta.trimStart() : e3.textDelta;
                    if (0 === r4.length) break;
                    de2 = false, le2 += r4;
                    const n5 = at(le2);
                    null != n5 && (le2 = n5.suffix, await me2({ controller: t3, chunk: { type: "text-delta", textDelta: n5.prefix + n5.whitespace } }));
                  } else await me2({ controller: t3, chunk: e3 });
                  break;
                case "reasoning":
                  t3.enqueue(e3), null == V3 ? (V3 = { type: "text", text: e3.textDelta }, z3.push(V3)) : V3.text += e3.textDelta;
                  break;
                case "reasoning-signature":
                  if (t3.enqueue(e3), null == V3) throw new Bt({ chunk: e3, message: "reasoning-signature without reasoning" });
                  V3.signature = e3.signature, V3 = void 0;
                  break;
                case "redacted-reasoning":
                  t3.enqueue(e3), z3.push({ type: "redacted", data: e3.data });
                  break;
                case "tool-call":
                  t3.enqueue(e3), G3.push(e3);
                  break;
                case "tool-result":
                  t3.enqueue(e3), H3.push(e3);
                  break;
                case "response-metadata":
                  ne3 = { id: null != (r3 = e3.id) ? r3 : ne3.id, timestamp: null != (n4 = e3.timestamp) ? n4 : ne3.timestamp, modelId: null != (s2 = e3.modelId) ? s2 : ne3.modelId };
                  break;
                case "finish": {
                  X3 = e3.usage, Z3 = e3.finishReason, K3 = e3.experimental_providerMetadata, Y3 = e3.logprobs;
                  const t4 = S2() - $3;
                  L3.addEvent("ai.stream.finish"), L3.setAttributes({ "ai.response.msToFinish": t4, "ai.response.avgCompletionTokensPerSecond": 1e3 * X3.completionTokens / t4 });
                  break;
                }
                case "file":
                  W3.push(e3), t3.enqueue(e3);
                  break;
                case "source":
                case "tool-call-streaming-start":
                case "tool-call-delta":
                  t3.enqueue(e3);
                  break;
                case "error":
                  t3.enqueue(e3), Z3 = "error";
                  break;
                default:
                  throw new Error(`Unknown chunk type: ${o3}`);
              }
            }, async flush(e3) {
              const r3 = G3.length > 0 ? JSON.stringify(G3) : void 0;
              let s2 = "done";
              i3 + 1 < w2 && (_2 && "length" === Z3 && 0 === G3.length ? s2 = "continue" : G3.length > 0 && H3.length === G3.length && (s2 = "tool-result")), _2 && le2.length > 0 && ("continue" !== s2 || "continue" === h3 && !ue2) && (await me2({ controller: e3, chunk: { type: "text-delta", textDelta: le2 } }), le2 = "");
              try {
                L3.setAttributes(J({ telemetry: t2, attributes: { "ai.response.finishReason": Z3, "ai.response.text": { output: () => te3 }, "ai.response.toolCalls": { output: () => r3 }, "ai.response.id": ne3.id, "ai.response.model": ne3.modelId, "ai.response.timestamp": ne3.timestamp.toISOString(), "ai.response.providerMetadata": JSON.stringify(K3), "ai.usage.promptTokens": X3.promptTokens, "ai.usage.completionTokens": X3.completionTokens, "gen_ai.response.finish_reasons": [Z3], "gen_ai.response.id": ne3.id, "gen_ai.response.model": ne3.modelId, "gen_ai.usage.input_tokens": X3.promptTokens, "gen_ai.usage.output_tokens": X3.completionTokens } }));
              } catch (e4) {
              } finally {
                L3.end();
              }
              e3.enqueue({ type: "step-finish", finishReason: Z3, usage: X3, providerMetadata: K3, experimental_providerMetadata: K3, logprobs: Y3, request: j3, response: { ...ne3, headers: null == N3 ? void 0 : N3.headers }, warnings: O3, isContinued: "continue" === s2, messageId: k2 });
              const o3 = Ue(u3, X3);
              if ("done" === s2) e3.enqueue({ type: "finish", finishReason: Z3, usage: o3, providerMetadata: K3, experimental_providerMetadata: K3, logprobs: Y3, response: { ...ne3, headers: null == N3 ? void 0 : N3.headers } }), ce2.closeStream();
              else {
                if ("continue" === h3) {
                  const e4 = l3[l3.length - 1];
                  "string" == typeof e4.content ? e4.content += te3 : e4.content.push({ text: te3, type: "text" });
                } else l3.push(...Ct({ text: te3, files: W3, reasoning: z3, tools: null != d2 ? d2 : {}, toolCalls: G3, toolResults: H3, messageId: k2, generateMessageId: x2 }));
                await n3({ currentStep: i3 + 1, responseMessages: l3, usage: o3, stepType: s2, previousStepText: re3, hasLeadingWhitespace: pe2, messageId: "continue" === s2 ? k2 : x2() });
              }
            } })));
          })({ currentStep: 0, responseMessages: [], usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0 }, previousStepText: "", stepType: "initial", hasLeadingWhitespace: false, messageId: x2() });
        } }).catch((e3) => {
          ce2.addStream(new ReadableStream({ start(t3) {
            t3.enqueue({ type: "error", error: e3 }), t3.close();
          } })), ce2.closeStream();
        });
      }
      get warnings() {
        return this.warningsPromise.value;
      }
      get usage() {
        return this.usagePromise.value;
      }
      get finishReason() {
        return this.finishReasonPromise.value;
      }
      get experimental_providerMetadata() {
        return this.providerMetadataPromise.value;
      }
      get providerMetadata() {
        return this.providerMetadataPromise.value;
      }
      get text() {
        return this.textPromise.value;
      }
      get reasoning() {
        return this.reasoningPromise.value;
      }
      get reasoningDetails() {
        return this.reasoningDetailsPromise.value;
      }
      get sources() {
        return this.sourcesPromise.value;
      }
      get files() {
        return this.filesPromise.value;
      }
      get toolCalls() {
        return this.toolCallsPromise.value;
      }
      get toolResults() {
        return this.toolResultsPromise.value;
      }
      get request() {
        return this.requestPromise.value;
      }
      get response() {
        return this.responsePromise.value;
      }
      get steps() {
        return this.stepsPromise.value;
      }
      teeStream() {
        const [e2, t2] = this.baseStream.tee();
        return this.baseStream = t2, e2;
      }
      get textStream() {
        return $e(this.teeStream().pipeThrough(new TransformStream({ transform({ part: e2 }, t2) {
          "text-delta" === e2.type && t2.enqueue(e2.textDelta);
        } })));
      }
      get fullStream() {
        return $e(this.teeStream().pipeThrough(new TransformStream({ transform({ part: e2 }, t2) {
          t2.enqueue(e2);
        } })));
      }
      async consumeStream(e2) {
        var t2;
        try {
          await (async function({ stream: e3, onError: t3 }) {
            const r2 = e3.getReader();
            try {
              for (; ; ) {
                const { done: e4 } = await r2.read();
                if (e4) break;
              }
            } catch (e4) {
              null == t3 || t3(e4);
            } finally {
              r2.releaseLock();
            }
          })({ stream: this.fullStream, onError: null == e2 ? void 0 : e2.onError });
        } catch (r2) {
          null == (t2 = null == e2 ? void 0 : e2.onError) || t2.call(e2, r2);
        }
      }
      get experimental_partialOutputStream() {
        if (null == this.output) throw new Xe();
        return $e(this.teeStream().pipeThrough(new TransformStream({ transform({ partialOutput: e2 }, t2) {
          null != e2 && t2.enqueue(e2);
        } })));
      }
      toDataStreamInternal({ getErrorMessage: e2 = () => "An error occurred.", sendUsage: t2 = true, sendReasoning: r2 = false, sendSources: n2 = false, experimental_sendFinish: s2 = true }) {
        return this.fullStream.pipeThrough(new TransformStream({ transform: async (o2, i2) => {
          const c2 = o2.type;
          switch (c2) {
            case "text-delta":
              i2.enqueue((0, a.H4)("text", o2.textDelta));
              break;
            case "reasoning":
              r2 && i2.enqueue((0, a.H4)("reasoning", o2.textDelta));
              break;
            case "redacted-reasoning":
              r2 && i2.enqueue((0, a.H4)("redacted_reasoning", { data: o2.data }));
              break;
            case "reasoning-signature":
              r2 && i2.enqueue((0, a.H4)("reasoning_signature", { signature: o2.signature }));
              break;
            case "file":
              i2.enqueue((0, a.H4)("file", { mimeType: o2.mimeType, data: o2.base64 }));
              break;
            case "source":
              n2 && i2.enqueue((0, a.H4)("source", o2.source));
              break;
            case "tool-call-streaming-start":
              i2.enqueue((0, a.H4)("tool_call_streaming_start", { toolCallId: o2.toolCallId, toolName: o2.toolName }));
              break;
            case "tool-call-delta":
              i2.enqueue((0, a.H4)("tool_call_delta", { toolCallId: o2.toolCallId, argsTextDelta: o2.argsTextDelta }));
              break;
            case "tool-call":
              i2.enqueue((0, a.H4)("tool_call", { toolCallId: o2.toolCallId, toolName: o2.toolName, args: o2.args }));
              break;
            case "tool-result":
              i2.enqueue((0, a.H4)("tool_result", { toolCallId: o2.toolCallId, result: o2.result }));
              break;
            case "error":
              i2.enqueue((0, a.H4)("error", e2(o2.error)));
              break;
            case "step-start":
              i2.enqueue((0, a.H4)("start_step", { messageId: o2.messageId }));
              break;
            case "step-finish":
              i2.enqueue((0, a.H4)("finish_step", { finishReason: o2.finishReason, usage: t2 ? { promptTokens: o2.usage.promptTokens, completionTokens: o2.usage.completionTokens } : void 0, isContinued: o2.isContinued }));
              break;
            case "finish":
              s2 && i2.enqueue((0, a.H4)("finish_message", { finishReason: o2.finishReason, usage: t2 ? { promptTokens: o2.usage.promptTokens, completionTokens: o2.usage.completionTokens } : void 0 }));
              break;
            default:
              throw new Error(`Unknown chunk type: ${c2}`);
          }
        } }));
      }
      pipeDataStreamToResponse(e2, { status: t2, statusText: r2, headers: n2, data: s2, getErrorMessage: o2, sendUsage: i2, sendReasoning: a2, sendSources: c2, experimental_sendFinish: l2 } = {}) {
        p({ response: e2, status: t2, statusText: r2, headers: d(n2, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }), stream: this.toDataStream({ data: s2, getErrorMessage: o2, sendUsage: i2, sendReasoning: a2, sendSources: c2, experimental_sendFinish: l2 }) });
      }
      pipeTextStreamToResponse(e2, t2) {
        p({ response: e2, status: null == t2 ? void 0 : t2.status, statusText: null == t2 ? void 0 : t2.statusText, headers: d(null == t2 ? void 0 : t2.headers, { contentType: "text/plain; charset=utf-8" }), stream: this.textStream.pipeThrough(new TextEncoderStream()) });
      }
      toDataStream(e2) {
        const t2 = this.toDataStreamInternal({ getErrorMessage: null == e2 ? void 0 : e2.getErrorMessage, sendUsage: null == e2 ? void 0 : e2.sendUsage, sendReasoning: null == e2 ? void 0 : e2.sendReasoning, sendSources: null == e2 ? void 0 : e2.sendSources, experimental_sendFinish: null == e2 ? void 0 : e2.experimental_sendFinish }).pipeThrough(new TextEncoderStream());
        return (null == e2 ? void 0 : e2.data) ? Nt(null == e2 ? void 0 : e2.data.stream, t2) : t2;
      }
      mergeIntoDataStream(e2, t2) {
        e2.merge(this.toDataStreamInternal({ getErrorMessage: e2.onError, sendUsage: null == t2 ? void 0 : t2.sendUsage, sendReasoning: null == t2 ? void 0 : t2.sendReasoning, sendSources: null == t2 ? void 0 : t2.sendSources, experimental_sendFinish: null == t2 ? void 0 : t2.experimental_sendFinish }));
      }
      toDataStreamResponse({ headers: e2, status: t2, statusText: r2, data: n2, getErrorMessage: s2, sendUsage: o2, sendReasoning: i2, sendSources: a2, experimental_sendFinish: c2 } = {}) {
        return new Response(this.toDataStream({ data: n2, getErrorMessage: s2, sendUsage: o2, sendReasoning: i2, sendSources: a2, experimental_sendFinish: c2 }), { status: t2, statusText: r2, headers: u(e2, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
      }
      toTextStreamResponse(e2) {
        var t2;
        return new Response(this.textStream.pipeThrough(new TextEncoderStream()), { status: null != (t2 = null == e2 ? void 0 : e2.status) ? t2 : 200, headers: u(null == e2 ? void 0 : e2.headers, { contentType: "text/plain; charset=utf-8" }) });
      }
    };
    n.bD;
    n.bD;
    var Qt, jt = "AI_NoSuchProviderError", Gt = `vercel.ai.error.${jt}`, Ht = Symbol.for(Gt);
    n.eM;
    Qt = Ht;
    var zt = i.Ik({ name: i.Yj(), version: i.Yj() }).passthrough(), Wt = i.Ik({ _meta: i.lq(i.Ik({}).passthrough()) }).passthrough(), Vt = Wt, Kt = i.Ik({ method: i.Yj(), params: i.lq(Wt) }), Yt = i.Ik({ experimental: i.lq(i.Ik({}).passthrough()), logging: i.lq(i.Ik({}).passthrough()), prompts: i.lq(i.Ik({ listChanged: i.lq(i.zM()) }).passthrough()), resources: i.lq(i.Ik({ subscribe: i.lq(i.zM()), listChanged: i.lq(i.zM()) }).passthrough()), tools: i.lq(i.Ik({ listChanged: i.lq(i.zM()) }).passthrough()) }).passthrough(), Zt = (Vt.extend({ protocolVersion: i.Yj(), capabilities: Yt, serverInfo: zt, instructions: i.lq(i.Yj()) }), Vt.extend({ nextCursor: i.lq(i.Yj()) })), Xt = i.Ik({ name: i.Yj(), description: i.lq(i.Yj()), inputSchema: i.Ik({ type: i.eu("object"), properties: i.lq(i.Ik({}).passthrough()) }).passthrough() }).passthrough(), er = (Zt.extend({ tools: i.YO(Xt) }), i.Ik({ type: i.eu("text"), text: i.Yj() }).passthrough()), tr = i.Ik({ type: i.eu("image"), data: i.Yj().base64(), mimeType: i.Yj() }).passthrough(), rr = i.Ik({ uri: i.Yj(), mimeType: i.lq(i.Yj()) }).passthrough(), nr = rr.extend({ text: i.Yj() }), sr = rr.extend({ blob: i.Yj().base64() }), or = i.Ik({ type: i.eu("resource"), resource: i.KC([nr, sr]) }).passthrough(), ir = (Vt.extend({ content: i.YO(i.KC([er, tr, or])), isError: i.zM().default(false).optional() }).or(Vt.extend({ toolResult: i.L5() })), "2.0"), ar = i.Ik({ jsonrpc: i.eu(ir), id: i.KC([i.Yj(), i.ai().int()]) }).merge(Kt).strict(), cr = i.Ik({ jsonrpc: i.eu(ir), id: i.KC([i.Yj(), i.ai().int()]), result: Vt }).strict(), lr = i.Ik({ jsonrpc: i.eu(ir), id: i.KC([i.Yj(), i.ai().int()]), error: i.Ik({ code: i.ai().int(), message: i.Yj(), data: i.lq(i.L5()) }) }).strict(), ur = i.Ik({ jsonrpc: i.eu(ir) }).merge(i.Ik({ method: i.Yj(), params: i.lq(Wt) })).strict();
    i.KC([ar, ur, cr, lr]);
    function dr(e2 = {}) {
      const t2 = new TextEncoder();
      let r2 = "";
      return new TransformStream({ async start() {
        e2.onStart && await e2.onStart();
      }, async transform(n2, s2) {
        s2.enqueue(t2.encode(n2)), r2 += n2, e2.onToken && await e2.onToken(n2), e2.onText && "string" == typeof n2 && await e2.onText(n2);
      }, async flush() {
        e2.onCompletion && await e2.onCompletion(r2), e2.onFinal && await e2.onFinal(r2);
      } });
    }
    function pr(e2, t2) {
      return e2.pipeThrough(new TransformStream({ transform: async (e3, t3) => {
        var r2;
        "string" != typeof e3 ? "event" in e3 ? "on_chat_model_stream" === e3.event && gr(null == (r2 = e3.data) ? void 0 : r2.chunk, t3) : gr(e3, t3) : t3.enqueue(e3);
      } })).pipeThrough(dr(t2)).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({ transform: async (e3, t3) => {
        t3.enqueue((0, a.H4)("text", e3));
      } }));
    }
    function mr(e2, t2) {
      return pr(e2, t2).pipeThrough(new TextEncoderStream());
    }
    function hr(e2, t2) {
      var r2;
      const n2 = pr(e2, null == t2 ? void 0 : t2.callbacks).pipeThrough(new TextEncoderStream()), s2 = null == t2 ? void 0 : t2.data, o2 = null == t2 ? void 0 : t2.init, i2 = s2 ? Nt(s2.stream, n2) : n2;
      return new Response(i2, { status: null != (r2 = null == o2 ? void 0 : o2.status) ? r2 : 200, statusText: null == o2 ? void 0 : o2.statusText, headers: u(null == o2 ? void 0 : o2.headers, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
    }
    function fr(e2, t2) {
      t2.dataStream.merge(pr(e2, t2.callbacks));
    }
    function gr(e2, t2) {
      if ("string" == typeof e2.content) t2.enqueue(e2.content);
      else {
        const r2 = e2.content;
        for (const e3 of r2) "text" === e3.type && t2.enqueue(e3.text);
      }
    }
    l({}, { mergeIntoDataStream: () => fr, toDataStream: () => mr, toDataStreamResponse: () => hr });
    function yr(e2, t2) {
      const r2 = /* @__PURE__ */ (function() {
        let e3 = true;
        return (t3) => (e3 && (t3 = t3.trimStart()) && (e3 = false), t3);
      })();
      return (0, s.NR)(e2[Symbol.asyncIterator]()).pipeThrough(new TransformStream({ async transform(e3, t3) {
        t3.enqueue(r2(e3.delta));
      } })).pipeThrough(dr(t2)).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({ transform: async (e3, t3) => {
        t3.enqueue((0, a.H4)("text", e3));
      } }));
    }
    function wr(e2, t2) {
      return yr(e2, t2).pipeThrough(new TextEncoderStream());
    }
    function vr(e2, t2 = {}) {
      var r2;
      const { init: n2, data: s2, callbacks: o2 } = t2, i2 = yr(e2, o2).pipeThrough(new TextEncoderStream()), a2 = s2 ? Nt(s2.stream, i2) : i2;
      return new Response(a2, { status: null != (r2 = null == n2 ? void 0 : n2.status) ? r2 : 200, statusText: null == n2 ? void 0 : n2.statusText, headers: u(null == n2 ? void 0 : n2.headers, { contentType: "text/plain; charset=utf-8", dataStreamVersion: "v1" }) });
    }
    function _r(e2, t2) {
      t2.dataStream.merge(yr(e2, t2.callbacks));
    }
    l({}, { mergeIntoDataStream: () => _r, toDataStream: () => wr, toDataStreamResponse: () => vr });
    function Ar(e2) {
      return true === e2.providerOptions?.cursor?.isSummary;
    }
    function Sr(e2, t2, r2) {
      return e2.map((e3, n2) => n2 === t2 ? r2 : e3);
    }
    function br(e2, t2, r2) {
      const n2 = e2.lastIndexOf(t2);
      return -1 === n2 ? void 0 : `${e2.slice(0, n2)}${r2}
${e2.slice(n2)}`;
    }
    function Er(e2, t2, r2) {
      if (void 0 !== r2) for (let n2 = e2.length - 1; n2 >= 0; n2--) {
        const s2 = e2[n2];
        if ("user" !== s2.role || Ar(s2)) return;
        const o2 = Ir(s2.content, r2, t2);
        if (void 0 !== o2) return Sr(e2, n2, { ...s2, content: o2 });
      }
    }
    function Ir(e2, t2, r2) {
      if ("string" == typeof e2) return br(e2, t2, r2);
      for (let n2 = e2.length - 1; n2 >= 0; n2--) {
        const s2 = e2[n2];
        if ("text" !== s2.type) continue;
        const o2 = br(s2.text, t2, r2);
        if (void 0 !== o2) return Sr(e2, n2, { ...s2, text: o2 });
      }
    }
    function Cr(e2, t2) {
      const r2 = { type: "text", text: t2 }, n2 = e2.at(-1);
      if ("user" !== n2?.role || Ar(n2)) return [...e2, { role: "user", content: [r2] }];
      const s2 = "string" == typeof n2.content ? [{ type: "text", text: n2.content }, r2] : [...n2.content, r2];
      return Sr(e2, e2.length - 1, { ...n2, content: s2 });
    }
    const kr = "next_user_message";
    function xr(e2) {
      return "system" === e2.role && e2.providerOptions?.cursor?.clearAt === kr;
    }
    function Tr(e2) {
      const t2 = e2.providerOptions?.cursor?.fallbackInsertBefore;
      return "string" == typeof t2 && t2.length > 0 ? t2 : void 0;
    }
    function Rr(e2) {
      return "user" === e2.role || "tool" === e2.role;
    }
    function Br(e2) {
      if (!e2.some(xr)) return e2;
      const t2 = e2.findLastIndex(Rr), r2 = [], n2 = [];
      return e2.forEach((e3, s2) => {
        "system" === e3.role && xr(e3) ? s2 > t2 && e3.content.length > 0 && n2.push({ text: e3.content, insertBefore: Tr(e3) }) : r2.push(e3);
      }), (function(e3, t3) {
        if (0 === t3.length) return e3;
        let r3 = e3;
        for (const { text: e4, insertBefore: n3 } of t3) r3 = Er(r3, e4, n3) ?? Cr(r3, e4);
        return r3;
      })(r2, n2);
    }
    class Pr {
      constructor(e2) {
        this.messages = [], e2 && (Array.isArray(e2) ? this.messages = [...e2] : this.messages = [e2]);
      }
      appendMessages(e2) {
        const t2 = Array.isArray(e2) ? e2 : [e2];
        return this.messages.push(...t2), this;
      }
      getState() {
        return [...this.messages];
      }
      getMessages() {
        return [...this.messages];
      }
      clearMessages() {
        this.messages = [];
      }
    }
    class Jr {
      constructor(e2) {
        this.builder = e2;
      }
      appendMessages(e2) {
        return this.builder.appendMessages(e2), this;
      }
      getState() {
        return this.builder.getState();
      }
      getMessages() {
        return this.builder.getMessages();
      }
      clearMessages() {
        this.builder.clearMessages();
      }
      requestMessages({ nativeStepScopedSystemMessages: e2 = false } = {}) {
        return (function(e3, { native: t2 }) {
          return t2 ? e3 : Br(e3);
        })(this.builder.getMessages(), { native: e2 }).map(Mr);
      }
    }
    function Mr(e2) {
      const t2 = "tool" === e2.role ? e2.providerOptions?.cursor : void 0;
      if (void 0 === t2 || !("highLevelToolCallResult" in t2)) return e2;
      const { highLevelToolCallResult: r2, ...n2 } = t2;
      return { ...e2, providerOptions: { ...e2.providerOptions, cursor: n2 } };
    }
    class qr {
      constructor(e2) {
        this.innerExecutor = e2;
      }
      appendMessages(e2) {
        return this.innerExecutor.appendMessages(e2), this;
      }
      getState() {
        return this.innerExecutor.getState();
      }
      getMessages() {
        return this.innerExecutor.getMessages();
      }
      clearMessages() {
        this.innerExecutor.clearMessages();
      }
      stream(e2, t2, r2, n2) {
        return this.innerExecutor.stream(e2, t2, r2, n2);
      }
    }
    var Dr = r(33002);
    function Or(e2, t2 = false) {
      return { content: [{ type: "text", text: e2 }], isError: t2 };
    }
    function Nr(e2, t2) {
      return { ...e2, systemReminders: [...e2.systemReminders ?? [], t2] };
    }
    function Fr(e2, t2, r2, n2 = false) {
      const s2 = [];
      return r2 && s2.push({ type: "text", text: r2 }), s2.push({ type: "image", data: e2, mimeType: t2 }), { content: s2, isError: n2 };
    }
    class Ur extends Error {
      constructor(e2 = "Provider exceeded max output tokens") {
        super(e2), this.name = "OutputTokensLimitExceededError";
      }
    }
    class Lr extends Error {
      constructor(e2 = "Input token limit exceeded") {
        super(e2), this.name = "InputTokenLimitError";
      }
    }
    class $r extends Error {
      constructor(e2 = "Configured summarization threshold reached") {
        super(e2), this.name = "ProactiveSummarizationThresholdError";
      }
    }
    const Qr = (0, Dr.cF)(/* @__PURE__ */ Symbol("compactionEpoch"), void 0), jr = (0, Dr.cF)(/* @__PURE__ */ Symbol("summarizedMessageCount"), void 0), Gr = (0, Dr.cF)(/* @__PURE__ */ Symbol("currentUserMessageSimulatedFields"), void 0), Hr = (0, Dr.cF)(/* @__PURE__ */ Symbol("constrainedDecodingRetry"), false);
    function zr(e2) {
      const t2 = {};
      for (const r2 of e2 ?? []) t2[r2.name] = r2;
      return t2;
    }
    var Wr = r(37949);
    const Vr = (0, Wr.h)("@anysphere/chat-inference/continuation-injector-middleware");
    class Kr extends qr {
      stream(e2, t2, r2, n2) {
        const s2 = this.innerExecutor.getMessages();
        return (function(e3) {
          if (0 === e3.length) return false;
          const t3 = e3[e3.length - 1];
          return "assistant" === t3.role && !("assistant" === (r3 = t3).role && (r3.content, 0 === r3.content.length));
          var r3;
        })(s2) && (Vr.info(e2, "[continuation-injector] last message is assistant; injecting continuation prompt", { messageCount: s2.length }), this.innerExecutor.appendMessages({ role: "user", content: "Your previous response was interrupted. Continue from where you left off." })), this.innerExecutor.stream(e2, t2, r2, n2);
      }
    }
    const Yr = () => (e2) => new Kr(e2), Zr = (Yr(), (0, Wr.h)("@anysphere/chat-inference/effort-level-middleware")), Xr = { low: 11, medium: 13, high: 15, xhigh: 17 };
    function en(e2) {
      return `<system_reminder>Apply effort level ${(function(e3) {
        return e3 in Xr ? Xr[e3] : /^\d+$/.test(e3) ? Number(e3) : void 0;
      })(e2) ?? e2} when carrying out the user's request.</system_reminder>`;
    }
    const tn = /\n(?:<system_reminder>)?Apply effort level \S+ when carrying out the user's request\.(?:<\/system_reminder>)?$/;
    function rn(e2) {
      return e2.replace(tn, "");
    }
    function nn(e2, t2) {
      const r2 = `
${en(t2)}`;
      return tn.test(e2) ? e2.replace(tn, r2) : e2 + r2;
    }
    class sn extends qr {
      constructor(e2, t2) {
        super(e2), this.options = t2;
      }
      stream(e2, t2, r2, n2) {
        const s2 = this.innerExecutor.getMessages();
        const o2 = (function(e3, t3) {
          let r3 = -1;
          for (let t4 = e3.length - 1; t4 >= 0; t4--) if ("user" === e3[t4].role) {
            r3 = t4;
            break;
          }
          if (-1 === r3) return e3;
          const n3 = [...e3], s3 = n3[r3];
          if (Ar(s3)) return e3;
          if ("string" == typeof s3.content) n3[r3] = { ...s3, content: nn(s3.content, t3) };
          else if (Array.isArray(s3.content)) {
            const e4 = [...s3.content];
            let o3 = -1;
            for (let t4 = e4.length - 1; t4 >= 0; t4--) if ("text" === e4[t4].type) {
              o3 = t4;
              break;
            }
            if (-1 !== o3) {
              const i2 = e4[o3];
              e4[o3] = { ...i2, text: nn(i2.text, t3) }, n3[r3] = { ...s3, content: e4 };
            }
          }
          return n3;
        })(this.options.persistEffortInstruction ? s2 : s2.map((e3) => {
          if ("user" !== e3.role) return e3;
          const t3 = e3;
          if ("string" == typeof t3.content) {
            const r3 = rn(t3.content);
            return r3 === t3.content ? e3 : { ...t3, content: r3 };
          }
          if (Array.isArray(t3.content)) {
            let r3 = false;
            const n3 = t3.content.map((e4) => {
              if ("text" !== e4.type) return e4;
              const t4 = rn(e4.text);
              return t4 !== e4.text ? (r3 = true, { ...e4, text: t4 }) : e4;
            });
            return r3 ? { ...t3, content: n3 } : e3;
          }
          return e3;
        }), this.options.effortLevel);
        Zr.info(e2, "[effort-level-middleware] applying effort level to stream", { effortLevel: this.options.effortLevel, messageCount: s2.length, persistInstruction: this.options.persistEffortInstruction }), this.innerExecutor.clearMessages(), this.innerExecutor.appendMessages(o2);
        return this.innerExecutor.stream(e2, t2, r2, n2);
      }
    }
    const on = (e2) => (t2) => new sn(t2, e2);
    var an = r(65716), cn = r(78780);
    const ln = (0, Wr.h)("@anysphere/chat-inference/image-resizing-middleware");
    function un(e2) {
      const t2 = new URL(e2);
      if ("data:" !== t2.protocol) throw new Error("Expected an image data URL");
      const r2 = t2.pathname.indexOf(",");
      if (-1 === r2) throw new Error("Image data URL is missing its data separator");
      const n2 = t2.pathname.slice(0, r2), [s2, ...o2] = n2.split(";"), i2 = s2.toLowerCase();
      if (!i2.startsWith("image/") || !o2.some((e3) => "base64" === e3.toLowerCase())) throw new Error("Image data URL must contain base64-encoded image data");
      const a2 = t2.pathname.slice(r2 + 1), c2 = Buffer.from(a2, "base64");
      if (0 === c2.length) throw new Error("Image data URL contains no image data");
      return { data: c2, mimeType: i2 };
    }
    const dn = (e2) => ({ ...e2, convertUnsupportedModelFormatsToPng: true });
    async function pn(e2) {
      const t2 = await crypto.subtle.digest("SHA-256", new Uint8Array(e2));
      return Buffer.from(t2).toString("hex");
    }
    async function mn(e2, t2) {
      const r2 = e2.providerOptions?.cursor;
      return "string" == typeof r2?.imageContentSha256 || "string" == typeof r2?.imageDescription && r2.imageDescription.length > 0 ? e2 : { ...e2, providerOptions: { ...e2.providerOptions, cursor: { ...r2, imageContentSha256: await pn(t2) } } };
    }
    const hn = ({ checkedImageParts: e2, part: t2, payload: r2 }) => e2.has(t2) && e2.get(t2) === r2;
    async function fn({ ctx: e2, messages: t2, resizeOptions: r2, checkedImageParts: n2 }) {
      return (0, an.PH)(t2, (t3) => (async function({ ctx: e3, message: t4, resizeOptions: r3, checkedImageParts: n3 }) {
        if ("user" === t4.role) {
          if ("string" == typeof t4.content || !Array.isArray(t4.content)) return t4;
          let s2 = false;
          const o2 = [];
          for (const i2 of t4.content) if ("image" === i2.type) {
            if (hn({ checkedImageParts: n3, part: i2, payload: i2.image })) {
              o2.push(i2);
              continue;
            }
            let t5, a2, c2 = i2.mimeType, l2 = "string" == typeof i2.image ? Buffer.byteLength(i2.image) : i2.image instanceof Uint8Array ? i2.image.length : 0;
            try {
              if (i2.image instanceof Uint8Array) t5 = Buffer.from(i2.image), l2 = i2.image.length, a2 = "bytes";
              else {
                if ("string" != typeof i2.image || "data:image/" !== i2.image.slice(0, 11).toLowerCase()) {
                  o2.push(i2);
                  continue;
                }
                {
                  const e4 = un(i2.image);
                  t5 = e4.data, c2 = e4.mimeType, l2 = e4.data.length, a2 = "data-url";
                }
              }
              const u2 = true === r3?.stampUserImageContentSha256 ? await mn(i2, t5) : i2, d2 = await (0, cn.O5)(t5, dn(r3));
              if (d2.data.length !== t5.length || d2.mimeType !== c2) {
                s2 = true, ln.info(e3, "Resized image in user message", { originalSize: l2, newSize: d2.data.length, newMimeType: d2.mimeType });
                const t6 = { ...u2, image: "data-url" === a2 ? `data:${d2.mimeType};base64,${Buffer.from(d2.data).toString("base64")}` : d2.data, mimeType: d2.mimeType };
                n3.set(t6, t6.image), o2.push(t6);
              } else u2 !== i2 && (s2 = true), n3.set(u2, u2.image), o2.push(u2);
            } catch (t6) {
              s2 = true, ln.error(e3, "Failed to resize image, dropping it", t6, { originalSize: l2 }), o2.push({ type: "text", text: `[image omitted: failed to process ${l2} bytes (${i2.mimeType ?? "unknown"})]` });
            }
          } else o2.push(i2);
          return s2 ? { ...t4, content: o2 } : t4;
        }
        if ("tool" === t4.role) {
          if (!Array.isArray(t4.content)) return t4;
          let s2 = false;
          const o2 = [...t4.content];
          for (let i2 = 0; i2 < t4.content.length; i2++) {
            const a2 = t4.content[i2];
            if ("tool-result" === a2.type) {
              const t5 = a2.experimental_content;
              if (!Array.isArray(t5)) continue;
              let c2 = false;
              const l2 = [...t5];
              for (let o3 = 0; o3 < t5.length; o3++) {
                const u2 = t5[o3];
                if ("image" === u2.type) {
                  if (hn({ checkedImageParts: n3, part: u2, payload: u2.data })) continue;
                  let t6;
                  if ("string" != typeof u2.data) continue;
                  try {
                    t6 = Buffer.from(u2.data, "base64");
                  } catch (t7) {
                    ln.error(e3, "Failed to decode base64 image in tool result", t7, { partIndex: i2, expContentIndex: o3 });
                    continue;
                  }
                  try {
                    const d2 = r3?.toolResultWebpOverrides?.[a2.toolName], p2 = await (0, cn.O5)(t6, dn(void 0 === d2 ? r3 : { ...r3, ...d2 }));
                    if (p2.data.length !== t6.length || p2.mimeType !== u2.mimeType) {
                      c2 = true, s2 = true, ln.info(e3, "Resized image in tool result", { partIndex: i2, expContentIndex: o3, originalSize: t6.length, newSize: p2.data.length, newMimeType: p2.mimeType });
                      const r4 = Buffer.from(p2.data).toString("base64"), a3 = { ...u2, data: r4, mimeType: p2.mimeType };
                      n3.set(a3, a3.data), l2[o3] = a3;
                    } else n3.set(u2, u2.data);
                  } catch (r4) {
                    c2 = true, s2 = true, ln.error(e3, "Failed to resize image in tool result, dropping it", r4, { partIndex: i2, expContentIndex: o3, originalSize: t6.length }), l2[o3] = { type: "text", text: `[image omitted: failed to process ${t6.length} bytes (${u2.mimeType ?? "unknown"})]` };
                  }
                }
              }
              c2 && (o2[i2] = { ...a2, experimental_content: l2 });
            }
          }
          if (s2) return { ...t4, content: o2 };
        }
        return t4;
      })({ ctx: e2, message: t3, resizeOptions: r2, checkedImageParts: n2 }), { max: 4 });
    }
    class gn extends qr {
      constructor({ innerExecutor: e2, resizeOptions: t2, checkedImageParts: r2 }) {
        super(e2), this.resizeOptions = t2, this.checkedImageParts = r2;
      }
      stream(e2, t2, r2, n2) {
        const s2 = this.innerExecutor.getMessages(), o2 = (async () => {
          const o3 = await fn({ ctx: e2, messages: s2, resizeOptions: this.resizeOptions, checkedImageParts: this.checkedImageParts });
          return this.innerExecutor.clearMessages(), this.innerExecutor.appendMessages(o3), this.innerExecutor.stream(e2, t2, r2, n2);
        })(), i2 = (e3) => {
          const t3 = o2.then(e3);
          return t3.catch(() => {
          }), t3;
        };
        return { fullStream: (async function* () {
          const e3 = await o2;
          yield* e3.fullStream;
        })(), response: i2((e3) => e3.response), usage: i2((e3) => e3.usage), providerMetadata: i2((e3) => e3.providerMetadata), extendedUsage: i2((e3) => e3.extendedUsage), invocationId: i2((e3) => e3.invocationId) };
      }
    }
    function yn(e2) {
      const t2 = /* @__PURE__ */ new WeakMap();
      return (r2) => new gn({ innerExecutor: r2, resizeOptions: e2, checkedImageParts: t2 });
    }
    yn(), yn({ stampUserImageContentSha256: true });
    var wn = r(46144);
    const vn = (0, wn.v5)("agent.ttft.middlewareChainMs", { description: "Total synchronous time inside the middleware chain from tracing middleware entry to inner stream() returning (may exclude async preprocessing done by middleware wrappers)" }), _n = (0, wn.v5)("chat_inference.ttft_ms", { description: "Time to first token in milliseconds", labelNames: ["outcome"] }), An = (0, wn.v5)("chat_inference.ttf_toolcall_ms", { description: "Time to first tool call in milliseconds", labelNames: ["outcome"] }), Sn = (0, wn.v5)("chat_inference.e2e_latency_ms", { description: "End-to-end latency in milliseconds", labelNames: ["outcome"] }), bn = (0, wn.v5)("chat_inference.input_messages", { description: "Distribution of input message counts per request", labelNames: ["message_type"] }), En = (0, wn.v5)("chat_inference.input_characters", { description: "Distribution of input character counts per request", labelNames: ["message_type"] }), In = (0, wn.Pu)("chat_inference.request_outcome", { description: "Count of request outcomes", labelNames: ["outcome"] });
    function Cn(e2) {
      if ("user" === e2.role || "assistant" === e2.role) {
        if ("string" == typeof e2.content) return e2.content;
        if (Array.isArray(e2.content)) return e2.content.map((e3) => "text" === e3.type && "text" in e3 ? e3.text : "").join("");
      }
      if ("tool" === e2.role) {
        if ("string" == typeof e2.content) return e2.content;
        if (Array.isArray(e2.content)) return e2.content.map((e3) => "tool-result" === e3.type && "result" in e3 ? "string" == typeof e3.result ? e3.result : JSON.stringify(e3.result) : "").join("");
      }
      return "";
    }
    class kn extends qr {
      stream(e2, t2, r2, n2) {
        const s2 = performance.now();
        let o2 = null, i2 = false, a2 = null, c2 = false;
        const l2 = (function(e3) {
          const t3 = { userCount: 0, assistantCount: 0, toolCount: 0, userChars: 0, assistantChars: 0, toolChars: 0 };
          for (const r3 of e3) {
            const e4 = Cn(r3).length;
            switch (r3.role) {
              case "user":
                t3.userCount++, t3.userChars += e4;
                break;
              case "assistant":
                t3.assistantCount++, t3.assistantChars += e4;
                break;
              case "tool":
                t3.toolCount++, t3.toolChars += e4;
            }
          }
          return t3;
        })(this.innerExecutor.getMessages());
        bn.histogram(e2, l2.userCount, { message_type: "user" }), bn.histogram(e2, l2.assistantCount, { message_type: "assistant" }), bn.histogram(e2, l2.toolCount, { message_type: "tool" }), En.histogram(e2, l2.userChars, { message_type: "user" }), En.histogram(e2, l2.assistantChars, { message_type: "assistant" }), En.histogram(e2, l2.toolChars, { message_type: "tool" });
        const u2 = this.innerExecutor.stream(e2, t2, r2, n2);
        vn.histogram(e2, performance.now() - s2);
        const d2 = u2.response.then((t3) => {
          const r3 = performance.now() - s2;
          return Sn.histogram(e2, r3, { outcome: "success" }), t3.error ? In.increment(e2, 1, { outcome: "failure" }) : In.increment(e2, 1, { outcome: "success" }), t3;
        }).catch((t3) => {
          const r3 = performance.now() - s2;
          throw Sn.histogram(e2, r3, { outcome: "failure" }), In.increment(e2, 1, { outcome: "failure" }), t3;
        });
        return d2.catch(() => {
        }), { fullStream: (async function* () {
          try {
            for await (const t3 of u2.fullStream) {
              if (!i2) {
                o2 = performance.now(), i2 = true;
                const t4 = o2 - s2;
                _n.histogram(e2, t4, { outcome: "success" });
              }
              if (!c2 && ("tool-call" === t3.type || "tool-call-delta" === t3.type)) {
                a2 = performance.now(), c2 = true;
                const t4 = a2 - s2;
                An.histogram(e2, t4, { outcome: "success" });
              }
              yield t3;
            }
          } catch (t3) {
            throw i2 || _n.histogram(e2, performance.now() - s2, { outcome: "failure" }), t3;
          }
        })(), response: d2, usage: u2.usage, providerMetadata: u2.providerMetadata, extendedUsage: u2.extendedUsage, invocationId: u2.invocationId };
      }
    }
    const xn = (e2) => new kn(e2), Tn = (0, Wr.h)("@anysphere/chat-inference/trailing-empty-assistant-removal-middleware");
    function Rn(e2) {
      return "assistant" === e2.role && (e2.content, 0 === e2.content.length);
    }
    class Bn extends qr {
      stream(e2, t2, r2, n2) {
        const s2 = this.innerExecutor.getMessages(), { cleanedMessages: o2, removedMessageCount: i2 } = (function(e3) {
          const t3 = [...e3];
          let r3 = 0;
          for (; t3.length > 0 && Rn(t3[t3.length - 1]); ) t3.pop(), r3++;
          return { cleanedMessages: t3, removedMessageCount: r3 };
        })(s2);
        return i2 > 0 && (Tn.info(e2, "[trailing-empty-assistant-removal] removing empty assistant message(s) before stream", { messageCount: s2.length, removedMessageCount: i2 }), this.innerExecutor.clearMessages(), o2.length > 0 && this.innerExecutor.appendMessages(o2)), this.innerExecutor.stream(e2, t2, r2, n2);
      }
    }
    const Pn = () => (e2) => new Bn(e2);
    Pn();
    class Jn extends Pr {
    }
    class Mn extends Jr {
      constructor(e2, t2, r2, n2) {
        super(e2), this.model = t2, this.thinkingDetails = r2, this.providerOptions = n2;
      }
      stream(e2, t2, r2, n2) {
        const s2 = Lt({ model: this.model, messages: this.requestMessages(), tools: zr(r2), toolChoice: n2.toolChoice, temperature: 1, providerOptions: this.providerOptions, abortSignal: e2.signal });
        return { fullStream: s2.fullStream, response: s2.response, providerMetadata: s2.providerMetadata, usage: s2.usage, extendedUsage: (async () => {
          const e3 = await s2.usage;
          return { inputTokens: e3.promptTokens, outputTokens: e3.completionTokens, cacheReadTokens: 0, cacheWriteTokens: 0, maxTokens: 0 };
        })(), invocationId: Promise.resolve(t2 ?? crypto.randomUUID()) };
      }
    }
    class qn {
      constructor(e2, t2, r2, n2) {
        this.model = e2, this.middleware = t2, this.thinkingDetails = r2, this.providerOptions = n2;
      }
      getExecutor(e2) {
        const t2 = new Jn(e2), r2 = new Mn(t2, this.model, this.thinkingDetails, this.providerOptions);
        return this.middleware ? this.middleware(r2) : r2;
      }
      getModelId() {
        return this.model.modelId;
      }
    }
    class Dn {
      constructor(e2, t2, r2) {
        this.model = e2, this.thinkingDetails = t2, this.providerOptions = r2;
      }
      getSession(e2) {
        return new qn(this.model, e2, this.thinkingDetails, this.providerOptions);
      }
      getProviderName() {
        return "openai";
      }
      getModelId() {
        return this.model.modelId;
      }
      getThinkingDetails() {
        return this.thinkingDetails;
      }
    }
    const On = 64;
    function Nn(e2) {
      if (void 0 !== e2) return e2.length <= On ? e2 : e2.slice(0, On);
    }
    function Fn(e2) {
      return Nn(e2) ?? "";
    }
    const Un = "x-cursor-inference-request-error-type", Ln = "PROVIDER_DECODE_ERROR";
    function $n(e2) {
      const t2 = /* @__PURE__ */ new Set();
      let r2 = e2;
      for (; "object" == typeof r2 && null !== r2 && !t2.has(r2); ) {
        t2.add(r2);
        const e3 = r2;
        if ("function" == typeof e3.metadata?.get && e3.metadata.get(Un) === Ln) return true;
        r2 = e3.cause;
      }
      return false;
    }
    function Qn(e2, t2) {
      return t2.every((t3) => e2.includes(t3));
    }
    function jn(e2) {
      return (function(e3) {
        return Qn(e3, ["input tokens exceed the configured limit", "your messages resulted in", "tokens"]);
      })(e2) || (function(e3) {
        return e3.includes("input token count") && e3.includes("exceeds the maximum number of tokens allowed");
      })(e2) || (function(e3) {
        return Qn(e3, ["input token count", "exceeds", "maximum context length"]);
      })(e2) || (function(e3) {
        return Qn(e3, ["maximum prompt length", "request contains", "tokens"]);
      })(e2) || (function(e3) {
        return e3.includes("prompt is too long");
      })(e2) || (function(e3) {
        return Qn(e3, ["input", "token", "longer than", "context length"]);
      })(e2) || (function(e3) {
        return Qn(e3, ["input token count", "plus", "requested output count", "exceeds", "maximum context length"]);
      })(e2) || (function(e3) {
        return Qn(e3, ["input exceeds", "context window"]);
      })(e2) || (function(e3) {
        return e3.includes("input is too long for requested model");
      })(e2) || (function(e3) {
        return Qn(e3, ["input length", "exceeds the maximum allowed input length"]);
      })(e2) || (function(e3) {
        return Qn(e3, ["request size cannot exceed", "bytes", "please shorten the request"]);
      })(e2) || (function(e3) {
        return Qn(e3, ["input length", "max_tokens", "exceed context limit"]);
      })(e2) || (function(e3) {
        return e3.includes("input is too long");
      })(e2) || (function(e3) {
        return e3.includes("request size exceeds model context window");
      })(e2) || (function(e3) {
        return Qn(e3, ["message size", "bytes", "exceeds", "mb limit"]);
      })(e2) || (function(e3) {
        return e3.includes("context_length_exceeded");
      })(e2) || (function(e3) {
        return e3.includes("payload too large");
      })(e2) || (function(e3) {
        return /max tokens of \d+ exceeded/.test(e3);
      })(e2);
    }
    function Gn(e2) {
      return jn(e2.toLowerCase());
    }
    const Hn = "exceeded max output tokens";
    const zn = "input token limit exceeded";
    function Wn(e2) {
      return (function(e3) {
        return e3.toLowerCase().includes(Hn);
      })(e2) ? new Ur(e2) : Gn(e2) || e2.toLowerCase().includes(zn) ? new Lr(e2) : void 0;
    }
  }