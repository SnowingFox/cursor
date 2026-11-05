// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7636 range:710421..717489
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7636: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2267), { createHmac: r2, createVerify: o2, createSign: s, timingSafeEqual: i, createPublicKey: a, constants: { RSA_PKCS1_PSS_PADDING: c, RSA_PSS_SALTLEN_DIGEST: l, RSA_PKCS1_PADDING: u, RSA_PSS_SALTLEN_MAX_SIGN: g, RSA_PSS_SALTLEN_AUTO: E } } = A2(7598), { sign: h, verify: d } = A2(7598), { joseToDer: I, derToJose: B } = A2(131), Q = A2(2240), { TokenError: f } = A2(6011), C = /[=+/]/g, p = { "=": "", "+": "-", "/": "_" }, m = /^-----BEGIN(?: (RSA|EC|ENCRYPTED))? PRIVATE KEY-----/, y = /^-----BEGIN(?: (RSA))? PUBLIC KEY-----/, w = "-----BEGIN CERTIFICATE-----", k = new Q(1e3), b = new Q(1e3), N = ["HS256", "HS384", "HS512"], T = ["RS256", "RS384", "RS512", "PS256", "PS384", "PS512"], D = { "1.2.840.10045.3.1.7": { bits: "256", names: ["P-256", "prime256v1"] }, "1.3.132.0.10": { bits: "256", names: ["secp256k1"] }, "1.3.132.0.34": { bits: "384", names: ["P-384", "secp384r1"] }, "1.3.132.0.35": { bits: "512", names: ["P-521", "secp521r1"] } }, S = n2.define("PrivateKey", function() {
      this.seq().obj(this.key("version").int(), this.key("algorithm").seq().obj(this.key("algorithm").objid(), this.key("parameters").optional().objid()));
    }), R = n2.define("PublicKey", function() {
      this.seq().obj(this.key("algorithm").seq().obj(this.key("algorithm").objid(), this.key("parameters").optional().objid()));
    }), F = n2.define("ECPrivateKey", function() {
      this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").explicit(0).optional().choice({ namedCurve: this.objid() }));
    });
    function v(e3) {
      return p[e3];
    }
    function M(e3, t3, A3, n3) {
      return e3.set(t3, [A3, n3]), A3 || n3;
    }
    e2.exports = { base64UrlMatcher: C, base64UrlReplacer: v, hsAlgorithms: N, rsaAlgorithms: T, esAlgorithms: ["ES256", "ES384", "ES512"], edAlgorithms: ["EdDSA"], detectPrivateKeyAlgorithm: function(e3, t3) {
      if (e3 instanceof Buffer) e3 = e3.toString("utf-8");
      else if ("string" != typeof e3) throw new f(f.codes.invalidKey, "The private key must be a string or a buffer.");
      const [A3, n3] = k.get(e3) || [];
      if (A3) return A3;
      if (n3) throw n3;
      try {
        const A4 = (function(e4) {
          if (e4.match(y) || e4.includes(w)) throw new f(f.codes.invalidKey, "Public keys are not supported for signing.");
          const t4 = e4.trim().match(m);
          if (!t4) return "HS256";
          let A5, n4, r3;
          switch (t4[1]) {
            case "RSA":
              return "RS256";
            case "EC":
              A5 = F.decode(e4, "pem", { label: "EC PRIVATE KEY" }), r3 = A5.parameters.value.join(".");
              break;
            case "ENCRYPTED":
              return "ENCRYPTED";
            default:
              switch (A5 = S.decode(e4, "pem", { label: "PRIVATE KEY" }), n4 = A5.algorithm.algorithm.join("."), n4) {
                case "1.2.840.113549.1.1.1":
                  return "RS256";
                case "1.2.840.10045.2.1":
                  r3 = A5.algorithm.parameters.join(".");
                  break;
                case "1.3.101.112":
                case "1.3.101.113":
                  return "EdDSA";
                default:
                  throw new f(f.codes.invalidKey, `Unsupported PEM PCKS8 private key with OID ${n4}.`);
              }
          }
          const o3 = D[r3];
          if (!o3) throw new f(f.codes.invalidKey, `Unsupported EC private key with curve ${r3}.`);
          return `ES${o3.bits}`;
        })(e3);
        return M(k, e3, "ENCRYPTED" === A4 ? t3 : A4);
      } catch (t4) {
        throw M(k, e3, null, f.wrap(t4, f.codes.invalidKey, "Unsupported PEM private key."));
      }
    }, detectPublicKeyAlgorithms: function(e3) {
      if (!e3) return "none";
      const [t3, A3] = b.get(e3) || [];
      if (t3) return t3;
      if (A3) throw A3;
      try {
        if (e3 instanceof Buffer) e3 = e3.toString("utf-8");
        else if ("string" != typeof e3) throw new f(f.codes.invalidKey, "The public key must be a string or a buffer.");
        return M(b, e3, (function(e4) {
          const t4 = e4.match(y);
          if (e4.match(m)) throw new f(f.codes.invalidKey, "Private keys are not supported for verifying.");
          if (t4 && "RSA" === t4[1]) return T;
          if (!t4 && !e4.includes(w)) return N;
          e4.includes(w) && (e4 = a(e4).export({ type: "spki", format: "pem" }));
          const A4 = R.decode(e4, "pem", { label: "PUBLIC KEY" }), n3 = A4.algorithm.algorithm.join(".");
          let r3;
          switch (n3) {
            case "1.2.840.113549.1.1.1":
              return T;
            case "1.2.840.10045.2.1":
              r3 = A4.algorithm.parameters.join(".");
              break;
            case "1.3.101.112":
            case "1.3.101.113":
              return ["EdDSA"];
            default:
              throw new f(f.codes.invalidKey, `Unsupported PEM PCKS8 public key with OID ${n3}.`);
          }
          const o3 = D[r3];
          if (!o3) throw new f(f.codes.invalidKey, `Unsupported EC public key with curve ${r3}.`);
          return [`ES${o3.bits}`];
        })(e3));
      } catch (t4) {
        throw M(b, e3, null, f.wrap(t4, f.codes.invalidKey, "Unsupported PEM public key."));
      }
    }, createSignature: function(e3, t3, A3) {
      try {
        const n3 = e3.slice(0, 2), o3 = `sha${e3.slice(2)}`;
        let i2, a2;
        switch (n3) {
          case "HS":
            i2 = r2(o3, t3).update(A3).digest("base64");
            break;
          case "ES":
            i2 = B(h(o3, Buffer.from(A3, "utf-8"), t3), e3).toString("base64");
            break;
          case "RS":
          case "PS":
            a2 = { key: t3, padding: u, saltLength: g }, "PS" === n3 && (a2.padding = c, a2.saltLength = l), i2 = s(o3).update(A3).sign(a2).toString("base64");
            break;
          case "Ed":
            i2 = h(void 0, Buffer.from(A3, "utf-8"), t3).toString("base64");
        }
        return i2.replace(C, v);
      } catch (e4) {
        throw new f(f.codes.signError, "Cannot create the signature.", { originalError: e4 });
      }
    }, verifySignature: function(e3, t3, A3, n3) {
      try {
        const s2 = e3.slice(0, 2), a2 = `SHA${e3.slice(2)}`;
        if (n3 = Buffer.from(n3, "base64"), "HS" === s2) try {
          return i(r2(a2, t3).update(A3).digest(), n3);
        } catch {
          return false;
        }
        else if ("Ed" === s2) {
          if ("function" == typeof d) return d(void 0, Buffer.from(A3, "utf-8"), t3, n3);
          throw new f(f.codes.signError, "EdDSA algorithms are not supported by your Node.js version.");
        }
        const g2 = { key: t3, padding: u, saltLength: E };
        return "PS" === s2 ? (g2.padding = c, g2.saltLength = l) : "ES" === s2 && (n3 = I(n3, e3)), o2("RSA-" + a2).update(A3).verify(g2, n3);
      } catch (e4) {
        throw new f(f.codes.verifyError, "Cannot verify the signature.", { originalError: e4 });
      }
    } };
  }