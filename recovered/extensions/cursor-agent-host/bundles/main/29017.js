// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 29017 range:4873565..4879478
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29017: (e, t, r) => {
    "use strict";
    r.d(t, { Ch: () => oe, Di: () => b, Kq: () => Q, M3: () => x, Tt: () => y, b8: () => fe, bD: () => c, eM: () => ee, hL: () => p, iM: () => de, u1: () => w, u6: () => N, xn: () => J });
    var n, s = "vercel.ai.error", o = Symbol.for(s), i = class e2 extends Error {
      constructor({ name: e3, message: t2, cause: r2 }) {
        super(t2), this[n] = true, this.name = e3, this.cause = r2;
      }
      static isInstance(t2) {
        return e2.hasMarker(t2, s);
      }
      static hasMarker(e3, t2) {
        const r2 = Symbol.for(t2);
        return null != e3 && "object" == typeof e3 && r2 in e3 && "boolean" == typeof e3[r2] && true === e3[r2];
      }
    };
    n = o;
    var a, c = i, l = "AI_APICallError", u = `vercel.ai.error.${l}`, d = Symbol.for(u), p = class extends c {
      constructor({ message: e2, url: t2, requestBodyValues: r2, statusCode: n2, responseHeaders: s2, responseBody: o2, cause: i2, isRetryable: c2 = null != n2 && (408 === n2 || 409 === n2 || 429 === n2 || n2 >= 500), data: u2 }) {
        super({ name: l, message: e2, cause: i2 }), this[a] = true, this.url = t2, this.requestBodyValues = r2, this.statusCode = n2, this.responseHeaders = s2, this.responseBody = o2, this.isRetryable = c2, this.data = u2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, u);
      }
    };
    a = d;
    var m, h = "AI_EmptyResponseBodyError", f = `vercel.ai.error.${h}`, g = Symbol.for(f), y = class extends c {
      constructor({ message: e2 = "Empty response body" } = {}) {
        super({ name: h, message: e2 }), this[m] = true;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, f);
      }
    };
    function w(e2) {
      return null == e2 ? "unknown error" : "string" == typeof e2 ? e2 : e2 instanceof Error ? e2.message : JSON.stringify(e2);
    }
    m = g;
    var v, _ = "AI_InvalidArgumentError", A = `vercel.ai.error.${_}`, S = Symbol.for(A), b = class extends c {
      constructor({ message: e2, cause: t2, argument: r2 }) {
        super({ name: _, message: e2, cause: t2 }), this[v] = true, this.argument = r2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, A);
      }
    };
    v = S;
    var E, I = "AI_InvalidPromptError", C = `vercel.ai.error.${I}`, k = Symbol.for(C), x = class extends c {
      constructor({ prompt: e2, message: t2, cause: r2 }) {
        super({ name: I, message: `Invalid prompt: ${t2}`, cause: r2 }), this[E] = true, this.prompt = e2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, C);
      }
    };
    E = k;
    var T, R = "AI_InvalidResponseDataError", B = `vercel.ai.error.${R}`, P = Symbol.for(B), J = class extends c {
      constructor({ data: e2, message: t2 = `Invalid response data: ${JSON.stringify(e2)}.` }) {
        super({ name: R, message: t2 }), this[T] = true, this.data = e2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, B);
      }
    };
    T = P;
    var M, q = "AI_JSONParseError", D = `vercel.ai.error.${q}`, O = Symbol.for(D), N = class extends c {
      constructor({ text: e2, cause: t2 }) {
        super({ name: q, message: `JSON parsing failed: Text: ${e2}.
Error message: ${w(t2)}`, cause: t2 }), this[M] = true, this.text = e2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, D);
      }
    };
    M = O;
    var F, U = "AI_LoadAPIKeyError", L = `vercel.ai.error.${U}`, $ = Symbol.for(L), Q = class extends c {
      constructor({ message: e2 }) {
        super({ name: U, message: e2 }), this[F] = true;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, L);
      }
    };
    F = $;
    var j = "AI_LoadSettingError", G = `vercel.ai.error.${j}`, H = Symbol.for(G);
    var z = "AI_NoContentGeneratedError", W = `vercel.ai.error.${z}`, V = Symbol.for(W);
    var K, Y = "AI_NoSuchModelError", Z = `vercel.ai.error.${Y}`, X = Symbol.for(Z), ee = class extends c {
      constructor({ errorName: e2 = Y, modelId: t2, modelType: r2, message: n2 = `No such ${r2}: ${t2}` }) {
        super({ name: e2, message: n2 }), this[K] = true, this.modelId = t2, this.modelType = r2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, Z);
      }
    };
    K = X;
    var te, re = "AI_TooManyEmbeddingValuesForCallError", ne = `vercel.ai.error.${re}`, se = Symbol.for(ne), oe = class extends c {
      constructor(e2) {
        super({ name: re, message: `Too many values for a single embedding call. The ${e2.provider} model "${e2.modelId}" can only embed up to ${e2.maxEmbeddingsPerCall} values per call, but ${e2.values.length} values were provided.` }), this[te] = true, this.provider = e2.provider, this.modelId = e2.modelId, this.maxEmbeddingsPerCall = e2.maxEmbeddingsPerCall, this.values = e2.values;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, ne);
      }
    };
    te = se;
    var ie, ae = "AI_TypeValidationError", ce = `vercel.ai.error.${ae}`, le = Symbol.for(ce);
    ie = le;
    var ue, de = class e2 extends c {
      constructor({ value: e3, cause: t2 }) {
        super({ name: ae, message: `Type validation failed: Value: ${JSON.stringify(e3)}.
Error message: ${w(t2)}`, cause: t2 }), this[ie] = true, this.value = e3;
      }
      static isInstance(e3) {
        return c.hasMarker(e3, ce);
      }
      static wrap({ value: t2, cause: r2 }) {
        return e2.isInstance(r2) && r2.value === t2 ? r2 : new e2({ value: t2, cause: r2 });
      }
    }, pe = "AI_UnsupportedFunctionalityError", me = `vercel.ai.error.${pe}`, he = Symbol.for(me), fe = class extends c {
      constructor({ functionality: e2, message: t2 = `'${e2}' functionality not supported.` }) {
        super({ name: pe, message: t2 }), this[ue] = true, this.functionality = e2;
      }
      static isInstance(e2) {
        return c.hasMarker(e2, me);
      }
    };
    ue = he;
  }