// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2271 range:217555..226512
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2271: (e2, t2, A2) => {
    "use strict";
    const { createPublicKey: n2, createSecretKey: r2 } = A2(7598), o2 = A2(2240), { hsAlgorithms: s, verifySignature: i, detectPublicKeyAlgorithms: a } = A2(7636), c = A2(8829), { TokenError: l } = A2(6011), { getAsyncKey: u, ensurePromiseCallback: g, hashToken: E } = A2(708);
    function h(e3, t3) {
      return e3 === t3;
    }
    function d(e3, t3) {
      for (const A3 of e3) if (t3.includes(A3)) return;
      throw new l(l.codes.invalidKey, `Invalid public key provided for algorithms ${e3.join(", ")}.`);
    }
    function I(e3, t3) {
      return "string" == typeof e3 && (e3 = Buffer.from(e3, "utf-8")), t3 ? r2(e3) : n2(e3);
    }
    function B(e3) {
      return Array.isArray(e3) || (e3 = [e3]), e3.filter((e4) => e4).map((e4) => e4 && "function" == typeof e4.test ? e4 : { test: h.bind(null, e4) });
    }
    function Q(e3) {
      const t3 = parseInt(true === e3 ? 1e3 : e3, 10);
      return t3 > 0 ? new o2(t3) : null;
    }
    function f({ cache: e3, token: t3, cacheTTL: A3, payload: n3, ignoreExpiration: r3, ignoreNotBefore: o3, maxAge: s2, clockTimestamp: i2 = Date.now(), clockTolerance: a2, errorCacheTTL: c2, cacheKeyBuilder: u2 }, g2) {
      if (!e3) return g2;
      const E2 = [g2, 0, 0];
      if (g2 instanceof l) {
        const A4 = "function" == typeof c2 ? c2(g2) : c2;
        return E2[2] = i2 + a2 + A4, e3.set(u2(t3), E2), g2;
      }
      n3 && "number" == typeof n3.iat && (E2[1] = o3 || "number" != typeof n3.nbf ? 0 : 1e3 * n3.nbf - a2, r3 || ("number" == typeof n3.exp ? E2[2] = 1e3 * n3.exp + a2 : s2 && (E2[2] = 1e3 * n3.iat + s2 + a2)));
      const h2 = i2 + a2 + A3;
      return E2[2] = 0 === E2[2] ? h2 : Math.min(E2[2], h2), e3.set(u2(t3), E2), g2;
    }
    function C(e3, t3, A3, n3, r3) {
      const o3 = A3 ? `The ${t3} claim must be a ${r3} or an array of ${r3}s.` : `The ${t3} claim must be a ${r3}.`;
      if (n3 && !A3) throw new l(l.codes.invalidClaimValue, o3);
      if (e3.map((e4) => typeof e4).some((e4) => e4 !== r3)) throw new l(l.codes.invalidClaimType, o3);
    }
    function p(e3, t3, A3, n3) {
      const r3 = n3 ? `None of ${t3} claim values are allowed.` : `The ${t3} claim value is not allowed.`;
      if (!e3.some((e4) => A3.some((t4) => t4.test(e4)))) throw new l(l.codes.invalidClaimValue, r3);
    }
    function m(e3, t3, A3, n3, r3, o3) {
      const s2 = 1e3 * e3 + (t3 || 0);
      if (!(n3 ? A3 >= s2 : A3 <= s2)) throw new l(l.codes[r3], `The token ${o3} at ${new Date(s2).toISOString()}.`);
    }
    function y(e3, { input: t3, header: A3, payload: n3, signature: r3 }, { validators: o3, allowedAlgorithms: s2, checkTyp: a2, clockTimestamp: c2, requiredClaims: u2 }) {
      const g2 = e3 instanceof Buffer ? e3.length : !!e3;
      if (g2 && !r3) throw new l(l.codes.missingSignature, "The token signature is missing.");
      if (!g2 && r3) throw new l(l.codes.missingKey, "The key option is missing.");
      if ((function(e4, t4, A4, n4, r4) {
        if (!r4.includes(t4.alg)) throw new l(l.codes.invalidAlgorithm, "The token algorithm is invalid.");
        if (A4 && !i(t4.alg, n4, e4, A4)) throw new l(l.codes.invalidSignature, "The token signature is invalid.");
      })(t3, A3, r3, e3, s2), a2 && ("string" != typeof A3.typ || a2 !== A3.typ.toLowerCase().replace(/^application\//, ""))) throw new l(l.codes.invalidType, "Invalid typ.");
      if (u2) {
        for (const e4 of u2) if (!(e4 in n3)) throw new l(l.codes.missingRequiredClaim, `The ${e4} claim is required.`);
      }
      const E2 = c2 || Date.now();
      for (const { type: e4, claim: t4, allowed: A4, array: r4, modifier: s3, greater: i2, errorCode: a3, errorVerb: c3 } of o3) {
        const o4 = n3[t4], l2 = Array.isArray(o4), u3 = l2 ? o4 : [o4];
        t4 in n3 && (C(u3, t4, r4, l2, "date" === e4 ? "number" : "string"), "date" === e4 ? m(o4, s3, E2, i2, a3, c3) : p(u3, t4, A4, l2));
      }
    }
    function w({ key: e3, allowedAlgorithms: t3, complete: A3, cacheTTL: n3, checkTyp: r3, clockTimestamp: o3, clockTolerance: i2, ignoreExpiration: c2, ignoreNotBefore: E2, maxAge: h2, isAsync: B2, validators: Q2, decode: C2, cache: p2, requiredClaims: m2, errorCacheTTL: w2, cacheKeyBuilder: k }, b, N) {
      const [T, D] = B2 ? g(N) : [];
      if (p2) {
        const [e4, t4, A4] = p2.get(k(b)) || [void 0, 0, 0], n4 = o3 || Date.now();
        if (void 0 !== e4 && (0 === t4 || n4 < t4 && "FAST_JWT_INACTIVE" === e4.code || n4 >= t4 && "FAST_JWT_INACTIVE" !== e4.code) && (0 === A4 || n4 <= A4)) return (function(e5, t5, A5) {
          if (e5 instanceof l) {
            if (!t5) throw e5;
            t5(e5);
          } else {
            if (!t5) return e5;
            t5(null, e5);
          }
          return A5;
        })(e4, T, D);
      }
      let S;
      try {
        S = C2(b);
      } catch (e4) {
        if (T) return T(e4), D;
        throw e4;
      }
      const { header: R, payload: F, signature: v, input: M } = S, U = { cache: p2, token: b, cacheTTL: n3, errorCacheTTL: w2, ignoreExpiration: c2, ignoreNotBefore: E2, maxAge: h2, clockTimestamp: o3, clockTolerance: i2, payload: F, cacheKeyBuilder: k }, L = { validators: Q2, allowedAlgorithms: t3, checkTyp: r3, clockTimestamp: o3, clockTolerance: i2, requiredClaims: m2 };
      if (!T) try {
        return y(e3, S, L), f(U, A3 ? { header: R, payload: F, signature: v, input: M } : F);
      } catch (e4) {
        throw f(U, e4);
      }
      return u(e3, { header: R, payload: F, signature: v }, (e4, n4) => {
        if (e4) return T(f(U, l.wrap(e4, l.codes.keyFetchingError, "Cannot fetch key.")));
        if ("string" == typeof n4) n4 = Buffer.from(n4, "utf-8");
        else if (!(n4 instanceof Buffer)) return T(f(U, new l(l.codes.keyFetchingError, "The key returned from the callback must be a string or a buffer containing a secret or a public key.")));
        try {
          const e5 = a(n4);
          L.allowedAlgorithms.length ? d(t3, e5) : L.allowedAlgorithms = e5, y(n4 = I(n4, e5[0] === s[0]), S, L);
        } catch (e5) {
          return T(f(U, e5));
        }
        T(null, f(U, A3 ? { header: R, payload: F, signature: v, input: b } : F));
      }), D;
    }
    e2.exports = function(e3) {
      let { key: t3, algorithms: A3, complete: n3, cache: r3, cacheTTL: o3, errorCacheTTL: i2, checkTyp: u2, clockTimestamp: g2, clockTolerance: h2, ignoreExpiration: f2, ignoreNotBefore: C2, maxAge: p2, allowedJti: m2, allowedAud: y2, allowedIss: k, allowedSub: b, allowedNonce: N, requiredClaims: T, cacheKeyBuilder: D } = { cacheTTL: 6e5, clockTolerance: 0, errorCacheTTL: -1, cacheKeyBuilder: E, ...e3 };
      Array.isArray(A3) || (A3 = []);
      const S = typeof t3;
      if ("string" !== S && "object" !== S && "function" !== S) throw new l(l.codes.INVALID_OPTION, "The key option must be a string, a buffer or a function returning the algorithm secret or public key.");
      if (t3 && "function" !== S) {
        const e4 = a(t3);
        A3.length ? d(A3, e4) : A3 = e4, t3 = I(t3, e4[0] === s[0]);
      }
      if (g2 && ("number" != typeof g2 || g2 < 0)) throw new l(l.codes.invalidOption, "The clockTimestamp option must be a positive number.");
      if (h2 && ("number" != typeof h2 || h2 < 0)) throw new l(l.codes.invalidOption, "The clockTolerance option must be a positive number.");
      if (o3 && ("number" != typeof o3 || o3 < 0)) throw new l(l.codes.invalidOption, "The cacheTTL option must be a positive number.");
      if (i2 && "function" != typeof i2 && "number" != typeof i2 || i2 < -1) throw new l(l.codes.invalidOption, "The errorCacheTTL option must be a number greater than -1 or a function.");
      if (T && !Array.isArray(T)) throw new l(l.codes.invalidOption, "The requiredClaims option must be an array.");
      const R = [];
      C2 || R.push({ type: "date", claim: "nbf", errorCode: "inactive", errorVerb: "will be active", greater: true, modifier: -h2 }), f2 || R.push({ type: "date", claim: "exp", errorCode: "expired", errorVerb: "has expired", modifier: +h2 }), "number" == typeof p2 && R.push({ type: "date", claim: "iat", errorCode: "expired", errorVerb: "has expired", modifier: p2 }), m2 && R.push({ type: "string", claim: "jti", allowed: B(m2) }), y2 && R.push({ type: "string", claim: "aud", allowed: B(y2), array: true }), k && R.push({ type: "string", claim: "iss", allowed: B(k) }), b && R.push({ type: "string", claim: "sub", allowed: B(b) }), N && R.push({ type: "string", claim: "nonce", allowed: B(N) });
      const F = { key: t3, allowedAlgorithms: A3, complete: n3, cacheTTL: o3, errorCacheTTL: i2, checkTyp: u2 ? u2.toLowerCase().replace(/^application\//, "") : null, clockTimestamp: g2, clockTolerance: h2, ignoreExpiration: f2, ignoreNotBefore: C2, maxAge: p2, isAsync: "function" === S, validators: R, decode: c({ complete: true }), cache: Q(r3), requiredClaims: T, cacheKeyBuilder: D }, v = w.bind(null, F);
      return v.cache = F.cache, v;
    };
  }