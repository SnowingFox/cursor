// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23269 range:4475924..4487305
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23269: (e, t, r) => {
    "use strict";
    r.d(t, { $C: () => p, Ds: () => T, GU: () => I, HD: () => B, N8: () => A, NR: () => a, S: () => C, WL: () => g, Z9: () => M, ZZ: () => v, ae: () => D, cV: () => R, cb: () => c, eu: () => y, hK: () => d, m2: () => i, n_: () => q, sl: () => x, u1: () => m, v0: () => S, xI: () => b, zf: () => f });
    var n = r(29017), s = r(34230), o = r(42918);
    function i(...e2) {
      return e2.reduce((e3, t2) => ({ ...e3, ...null != t2 ? t2 : {} }), {});
    }
    function a(e2) {
      return new ReadableStream({ async pull(t2) {
        try {
          const { value: r2, done: n2 } = await e2.next();
          n2 ? t2.close() : t2.enqueue(r2);
        } catch (e3) {
          t2.error(e3);
        }
      }, cancel() {
      } });
    }
    async function c(e2) {
      return null == e2 ? Promise.resolve() : new Promise((t2) => setTimeout(t2, e2));
    }
    function l() {
      let e2, t2, r2, n2 = "", s2 = [];
      function o2(e3, t3) {
        if ("" === e3) return void i2(t3);
        if (e3.startsWith(":")) return;
        const r3 = e3.indexOf(":");
        if (-1 === r3) return void a2(e3, "");
        const n3 = r3 + 1;
        a2(e3.slice(0, r3), n3 < e3.length && " " === e3[n3] ? e3.slice(n3 + 1) : e3.slice(n3));
      }
      function i2(n3) {
        s2.length > 0 && (n3.enqueue({ event: e2, data: s2.join("\n"), id: t2, retry: r2 }), s2 = [], e2 = void 0, r2 = void 0);
      }
      function a2(n3, o3) {
        switch (n3) {
          case "event":
            e2 = o3;
            break;
          case "data":
            s2.push(o3);
            break;
          case "id":
            t2 = o3;
            break;
          case "retry":
            const n4 = parseInt(o3, 10);
            isNaN(n4) || (r2 = n4);
        }
      }
      return new TransformStream({ transform(e3, t3) {
        const { lines: r3, incompleteLine: s3 } = (function(e4, t4) {
          const r4 = [];
          let n3 = e4;
          for (let e5 = 0; e5 < t4.length; ) {
            const s4 = t4[e5++];
            "\n" === s4 ? (r4.push(n3), n3 = "") : "\r" === s4 ? (r4.push(n3), n3 = "", "\n" === t4[e5] && e5++) : n3 += s4;
          }
          return { lines: r4, incompleteLine: n3 };
        })(n2, e3);
        n2 = s3;
        for (let e4 = 0; e4 < r3.length; e4++) o2(r3[e4], t3);
      }, flush(e3) {
        o2(n2, e3), i2(e3);
      } });
    }
    function u(e2) {
      const t2 = {};
      return e2.headers.forEach((e3, r2) => {
        t2[r2] = e3;
      }), t2;
    }
    var d = ({ prefix: e2, size: t2 = 16, alphabet: r2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: o2 = "-" } = {}) => {
      const i2 = (0, s.customAlphabet)(r2, t2);
      if (null == e2) return i2;
      if (r2.includes(o2)) throw new n.Di({ argument: "separator", message: `The separator "${o2}" must not be part of the alphabet "${r2}".` });
      return (t3) => `${e2}${o2}${i2(t3)}`;
    }, p = d();
    function m(e2) {
      return null == e2 ? "unknown error" : "string" == typeof e2 ? e2 : e2 instanceof Error ? e2.message : JSON.stringify(e2);
    }
    function h(e2) {
      return Object.fromEntries(Object.entries(e2).filter(([e3, t2]) => null != t2));
    }
    function f(e2) {
      return e2 instanceof Error && ("AbortError" === e2.name || "TimeoutError" === e2.name);
    }
    function g({ apiKey: e2, environmentVariableName: t2, apiKeyParameterName: r2 = "apiKey", description: s2 }) {
      if ("string" == typeof e2) return e2;
      if (null != e2) throw new n.Kq({ message: `${s2} API key must be a string.` });
      if ("undefined" == typeof process) throw new n.Kq({ message: `${s2} API key is missing. Pass it using the '${r2}' parameter. Environment variables is not supported in this environment.` });
      if (null == (e2 = process.env[t2])) throw new n.Kq({ message: `${s2} API key is missing. Pass it using the '${r2}' parameter or the ${t2} environment variable.` });
      if ("string" != typeof e2) throw new n.Kq({ message: `${s2} API key must be a string. The value of the ${t2} environment variable is not a string.` });
      return e2;
    }
    var y = /* @__PURE__ */ Symbol.for("vercel.ai.validator");
    function w(e2) {
      return (function(e3) {
        return "object" == typeof e3 && null !== e3 && y in e3 && true === e3[y] && "validate" in e3;
      })(e2) ? e2 : (t2 = e2, r2 = (e3) => {
        const r3 = t2.safeParse(e3);
        return r3.success ? { success: true, value: r3.data } : { success: false, error: r3.error };
      }, { [y]: true, validate: r2 });
      var t2, r2;
    }
    function v({ value: e2, schema: t2 }) {
      const r2 = w(t2);
      try {
        if (null == r2.validate) return { success: true, value: e2 };
        const t3 = r2.validate(e2);
        return t3.success ? t3 : { success: false, error: n.iM.wrap({ value: e2, cause: t3.error }) };
      } catch (t3) {
        return { success: false, error: n.iM.wrap({ value: e2, cause: t3 }) };
      }
    }
    function _({ text: e2, schema: t2 }) {
      try {
        const r2 = o.parse(e2);
        return null == t2 ? r2 : (function({ value: e3, schema: t3 }) {
          const r3 = v({ value: e3, schema: t3 });
          if (!r3.success) throw n.iM.wrap({ value: e3, cause: r3.error });
          return r3.value;
        })({ value: r2, schema: t2 });
      } catch (t3) {
        if (n.u6.isInstance(t3) || n.iM.isInstance(t3)) throw t3;
        throw new n.u6({ text: e2, cause: t3 });
      }
    }
    function A({ text: e2, schema: t2 }) {
      try {
        const r2 = o.parse(e2);
        if (null == t2) return { success: true, value: r2, rawValue: r2 };
        const n2 = v({ value: r2, schema: t2 });
        return n2.success ? { ...n2, rawValue: r2 } : n2;
      } catch (t3) {
        return { success: false, error: n.u6.isInstance(t3) ? t3 : new n.u6({ text: e2, cause: t3 }) };
      }
    }
    function S(e2) {
      try {
        return o.parse(e2), true;
      } catch (e3) {
        return false;
      }
    }
    function b({ provider: e2, providerOptions: t2, schema: r2 }) {
      if (null == (null == t2 ? void 0 : t2[e2])) return;
      const s2 = v({ value: t2[e2], schema: r2 });
      if (!s2.success) throw new n.Di({ argument: "providerOptions", message: `invalid ${e2} provider options`, cause: s2.error });
      return s2.value;
    }
    var E = () => globalThis.fetch, I = async ({ url: e2, headers: t2, body: r2, failedResponseHandler: n2, successfulResponseHandler: s2, abortSignal: o2, fetch: i2 }) => k({ url: e2, headers: { "Content-Type": "application/json", ...t2 }, body: { content: JSON.stringify(r2), values: r2 }, failedResponseHandler: n2, successfulResponseHandler: s2, abortSignal: o2, fetch: i2 }), C = async ({ url: e2, headers: t2, formData: r2, failedResponseHandler: n2, successfulResponseHandler: s2, abortSignal: o2, fetch: i2 }) => k({ url: e2, headers: t2, body: { content: r2, values: Object.fromEntries(r2.entries()) }, failedResponseHandler: n2, successfulResponseHandler: s2, abortSignal: o2, fetch: i2 }), k = async ({ url: e2, headers: t2 = {}, body: r2, successfulResponseHandler: s2, failedResponseHandler: o2, abortSignal: i2, fetch: a2 = E() }) => {
      try {
        const c2 = await a2(e2, { method: "POST", headers: h(t2), body: r2.content, signal: i2 }), l2 = u(c2);
        if (!c2.ok) {
          let t3;
          try {
            t3 = await o2({ response: c2, url: e2, requestBodyValues: r2.values });
          } catch (t4) {
            if (f(t4) || n.hL.isInstance(t4)) throw t4;
            throw new n.hL({ message: "Failed to process error response", cause: t4, statusCode: c2.status, url: e2, responseHeaders: l2, requestBodyValues: r2.values });
          }
          throw t3.value;
        }
        try {
          return await s2({ response: c2, url: e2, requestBodyValues: r2.values });
        } catch (t3) {
          if (t3 instanceof Error && (f(t3) || n.hL.isInstance(t3))) throw t3;
          throw new n.hL({ message: "Failed to process successful response", cause: t3, statusCode: c2.status, url: e2, responseHeaders: l2, requestBodyValues: r2.values });
        }
      } catch (t3) {
        if (f(t3)) throw t3;
        if (t3 instanceof TypeError && "fetch failed" === t3.message) {
          const s3 = t3.cause;
          if (null != s3) throw new n.hL({ message: `Cannot connect to API: ${s3.message}`, cause: s3, url: e2, requestBodyValues: r2.values, isRetryable: true });
        }
        throw t3;
      }
    };
    var x = ({ errorSchema: e2, errorToMessage: t2, isRetryable: r2 }) => async ({ response: s2, url: o2, requestBodyValues: i2 }) => {
      const a2 = await s2.text(), c2 = u(s2);
      if ("" === a2.trim()) return { responseHeaders: c2, value: new n.hL({ message: s2.statusText, url: o2, requestBodyValues: i2, statusCode: s2.status, responseHeaders: c2, responseBody: a2, isRetryable: null == r2 ? void 0 : r2(s2) }) };
      try {
        const l2 = _({ text: a2, schema: e2 });
        return { responseHeaders: c2, value: new n.hL({ message: t2(l2), url: o2, requestBodyValues: i2, statusCode: s2.status, responseHeaders: c2, responseBody: a2, data: l2, isRetryable: null == r2 ? void 0 : r2(s2, l2) }) };
      } catch (e3) {
        return { responseHeaders: c2, value: new n.hL({ message: s2.statusText, url: o2, requestBodyValues: i2, statusCode: s2.status, responseHeaders: c2, responseBody: a2, isRetryable: null == r2 ? void 0 : r2(s2) }) };
      }
    }, T = (e2) => async ({ response: t2 }) => {
      const r2 = u(t2);
      if (null == t2.body) throw new n.Tt({});
      return { responseHeaders: r2, value: t2.body.pipeThrough(new TextDecoderStream()).pipeThrough(l()).pipeThrough(new TransformStream({ transform({ data: t3 }, r3) {
        "[DONE]" !== t3 && r3.enqueue(A({ text: t3, schema: e2 }));
      } })) };
    }, R = (e2) => async ({ response: t2, url: r2, requestBodyValues: s2 }) => {
      const o2 = await t2.text(), i2 = A({ text: o2, schema: e2 }), a2 = u(t2);
      if (!i2.success) throw new n.hL({ message: "Invalid JSON response", cause: i2.error, statusCode: t2.status, responseHeaders: a2, responseBody: o2, url: r2, requestBodyValues: s2 });
      return { responseHeaders: a2, value: i2.value, rawValue: i2.rawValue };
    }, B = () => async ({ response: e2, url: t2, requestBodyValues: r2 }) => {
      const s2 = u(e2);
      if (!e2.body) throw new n.hL({ message: "Response body is empty", url: t2, requestBodyValues: r2, statusCode: e2.status, responseHeaders: s2, responseBody: void 0 });
      try {
        const t3 = await e2.arrayBuffer();
        return { responseHeaders: s2, value: new Uint8Array(t3) };
      } catch (o2) {
        throw new n.hL({ message: "Failed to read response as array buffer", url: t2, requestBodyValues: r2, statusCode: e2.status, responseHeaders: s2, responseBody: void 0, cause: o2 });
      }
    }, { btoa: P, atob: J } = globalThis;
    function M(e2) {
      const t2 = e2.replace(/-/g, "+").replace(/_/g, "/"), r2 = J(t2);
      return Uint8Array.from(r2, (e3) => e3.codePointAt(0));
    }
    function q(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) t2 += String.fromCodePoint(e2[r2]);
      return P(t2);
    }
    function D(e2) {
      return null == e2 ? void 0 : e2.replace(/\/$/, "");
    }
  }