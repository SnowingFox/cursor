// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2587 range:233724..239602
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2587: (e2, t2, A2) => {
    "use strict";
    const { base64UrlMatcher: n2, base64UrlReplacer: r2, hsAlgorithms: o2, esAlgorithms: s, rsaAlgorithms: i, edAlgorithms: a, detectPrivateKeyAlgorithm: c, createSignature: l } = A2(7636), { TokenError: u } = A2(6011), { getAsyncKey: g, ensurePromiseCallback: E } = A2(708), { createPrivateKey: h, createSecretKey: d } = A2(7598), { parse: I } = A2(1088), B = /* @__PURE__ */ new Set([...o2, ...s, ...i, ...a, "none"]), Q = Array.from(B).join(", ");
    function f(e3, t3) {
      const A3 = e3.slice(0, 2), n3 = t3.slice(0, 2);
      let r3 = true;
      if ("RS" === A3 || "PS" === A3 ? r3 = "RS" === n3 || "RS" === A3 && "ENCRYPTED" === t3 : "ES" !== A3 && "Ed" !== A3 || (r3 = A3 === n3 || "ES" === A3 && "ENCRYPTED" === t3), !r3) throw new u(u.codes.invalidKey, `Invalid private key provided for algorithm ${e3}.`);
    }
    function C(e3, t3) {
      return "string" == typeof e3 && (e3 = Buffer.from(e3, "utf-8")), "H" === t3[0] ? d(e3) : h(e3);
    }
    function p({ key: e3, algorithm: t3, noTimestamp: A3, mutatePayload: o3, clockTimestamp: s2, expiresIn: i2, notBefore: a2, kid: h2, typ: d2, isAsync: I2, additionalHeader: B2, fixedPayload: Q2 }, p2, m) {
      const [y, w] = I2 ? E(m) : [];
      if ("object" != typeof p2) throw new u(u.codes.invalidType, "The payload must be an object.");
      if (p2.exp && (!Number.isInteger(p2.exp) || p2.exp < 0)) throw new u(u.codes.invalidClaimValue, "The exp claim must be a positive integer.");
      const k = { alg: t3, typ: d2 || "JWT", kid: h2, ...B2 };
      let b = "";
      const N = 1e3 * p2.iat || s2 || Date.now(), T = { ...p2, ...Q2, iat: A3 ? void 0 : Math.floor(N / 1e3), exp: p2.exp ? p2.exp : i2 ? Math.floor((N + i2) / 1e3) : void 0, nbf: p2.nbf ? p2.nbf : a2 ? Math.floor((N + a2) / 1e3) : void 0 };
      if (o3 && Object.assign(p2, T), b = Buffer.from(JSON.stringify(T), "utf-8").toString("base64").replace(n2, r2), !y) {
        const A4 = Buffer.from(JSON.stringify(k), "utf-8").toString("base64").replace(n2, r2) + "." + b;
        return A4 + "." + ("none" === t3 ? "" : l(t3, e3, A4));
      }
      return g(e3, { header: k, payload: p2 }, (e4, A4) => {
        if (e4) {
          const t4 = u.wrap(e4, u.codes.keyFetchingError, "Cannot fetch key.");
          return y(t4);
        }
        if ("string" == typeof A4) A4 = Buffer.from(A4, "utf-8");
        else if (!(A4 instanceof Buffer)) return y(new u(u.codes.keyFetchingError, "The key returned from the callback must be a string or a buffer containing a secret or a private key."));
        let o4;
        try {
          const e5 = c(A4, t3);
          t3 ? f(t3, e5) : k.alg = t3 = e5, A4 = C(A4, t3);
          const s3 = Buffer.from(JSON.stringify(k), "utf-8").toString("base64").replace(n2, r2) + "." + b;
          o4 = s3 + "." + l(t3, A4, s3);
        } catch (e5) {
          return y(e5);
        }
        y(null, o4);
      }), w;
    }
    e2.exports = function(e3) {
      let { key: t3, algorithm: A3, noTimestamp: n3, mutatePayload: r3, clockTimestamp: o3, expiresIn: s2, notBefore: i2, jti: a2, aud: l2, iss: g2, sub: E2, nonce: h2, kid: d2, typ: m, header: y } = { clockTimestamp: 0, ...e3 };
      if (A3 && !B.has(A3)) throw new u(u.codes.invalidOption, `The algorithm option must be one of the following values: ${Q}.`);
      const w = typeof t3, k = "object" === w && t3 && t3.key && t3.passphrase;
      if ("none" === A3) {
        if (t3) throw new u(u.codes.invalidOption, 'The key option must not be provided when the algorithm option is "none".');
      } else {
        if (!t3 || !("string" === w || t3 instanceof Buffer || "function" === w || k)) throw new u(u.codes.invalidOption, "The key option must be a string, a buffer, an object containing key/passphrase properties or a function returning the algorithm secret or private key.");
        if (k && !A3) throw new u(u.codes.invalidAlgorithm, "When using password protected key you must provide the algorithm option.");
      }
      if (t3 && "function" !== w) {
        const e4 = c(k ? t3.key : t3, A3);
        A3 ? f(A3, e4) : A3 = e4, t3 = C(t3, A3);
      }
      if (s2 && ("string" == typeof s2 && (s2 = I(s2)), "number" != typeof s2)) throw new u(u.codes.invalidOption, "The expiresIn option must be a positive number or a valid string.");
      if (i2 && ("string" == typeof i2 && (i2 = I(i2)), "number" != typeof i2 || i2 < 0)) throw new u(u.codes.invalidOption, "The notBefore option must be a positive number or a valid string.");
      if (o3 && ("number" != typeof o3 || o3 < 0)) throw new u(u.codes.invalidOption, "The clockTimestamp option must be a positive number.");
      if (a2 && "string" != typeof a2) throw new u(u.codes.invalidOption, "The jti option must be a string.");
      if (l2 && "string" != typeof l2 && !Array.isArray(l2)) throw new u(u.codes.invalidOption, "The aud option must be a string or an array of strings.");
      if (g2 && "string" != typeof g2) throw new u(u.codes.invalidOption, "The iss option must be a string.");
      if (E2 && "string" != typeof E2) throw new u(u.codes.invalidOption, "The sub option must be a string.");
      if (h2 && "string" != typeof h2) throw new u(u.codes.invalidOption, "The nonce option must be a string.");
      if (d2 && "string" != typeof d2) throw new u(u.codes.invalidOption, "The kid option must be a string.");
      if (y && "object" != typeof y) throw new u(u.codes.invalidOption, "The header option must be a object.");
      const b = { jti: a2, aud: l2, iss: g2, sub: E2, nonce: h2 }, N = Object.entries(b).reduce((e4, [t4, A4]) => (void 0 !== A4 && (e4[t4] = A4), e4), {});
      return p.bind(null, { key: t3, algorithm: A3, noTimestamp: n3, mutatePayload: r3, clockTimestamp: o3, expiresIn: s2, notBefore: i2, kid: d2, typ: m, isAsync: "function" === w, additionalHeader: y, fixedPayload: N });
    };
  }