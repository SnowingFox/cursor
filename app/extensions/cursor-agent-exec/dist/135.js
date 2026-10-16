exports.id = 135, exports.ids = [135], exports.modules = { 181: (e) => {
  "use strict";
  e.exports = JSON.parse(`{"name":"@aws-sdk/nested-clients","version":"3.997.6","description":"Nested clients for AWS SDK packages.","main":"./dist-cjs/index.js","module":"./dist-es/index.js","types":"./dist-types/index.d.ts","scripts":{"build":"yarn lint && concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs","build:cjs":"node ../../scripts/compilation/inline nested-clients","build:es":"tsc -p tsconfig.es.json","build:include:deps":"yarn g:turbo run build -F=\\"$npm_package_name\\"","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo","lint":"node ../../scripts/validation/submodules-linter.js --pkg nested-clients","test":"yarn g:vitest run","test:watch":"yarn g:vitest watch"},"engines":{"node":">=20.0.0"},"sideEffects":false,"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"^3.974.8","@aws-sdk/middleware-host-header":"^3.972.10","@aws-sdk/middleware-logger":"^3.972.10","@aws-sdk/middleware-recursion-detection":"^3.972.11","@aws-sdk/middleware-user-agent":"^3.972.38","@aws-sdk/region-config-resolver":"^3.972.13","@aws-sdk/signature-v4-multi-region":"^3.996.25","@aws-sdk/types":"^3.973.8","@aws-sdk/util-endpoints":"^3.996.8","@aws-sdk/util-user-agent-browser":"^3.972.10","@aws-sdk/util-user-agent-node":"^3.973.24","@smithy/config-resolver":"^4.4.17","@smithy/core":"^3.23.17","@smithy/fetch-http-handler":"^5.3.17","@smithy/hash-node":"^4.2.14","@smithy/invalid-dependency":"^4.2.14","@smithy/middleware-content-length":"^4.2.14","@smithy/middleware-endpoint":"^4.4.32","@smithy/middleware-retry":"^4.5.7","@smithy/middleware-serde":"^4.2.20","@smithy/middleware-stack":"^4.2.14","@smithy/node-config-provider":"^4.3.14","@smithy/node-http-handler":"^4.6.1","@smithy/protocol-http":"^5.3.14","@smithy/smithy-client":"^4.12.13","@smithy/types":"^4.14.1","@smithy/url-parser":"^4.2.14","@smithy/util-base64":"^4.3.2","@smithy/util-body-length-browser":"^4.2.2","@smithy/util-body-length-node":"^4.2.3","@smithy/util-defaults-mode-browser":"^4.3.49","@smithy/util-defaults-mode-node":"^4.2.54","@smithy/util-endpoints":"^3.4.2","@smithy/util-middleware":"^4.2.14","@smithy/util-retry":"^4.3.6","@smithy/util-utf8":"^4.2.2","tslib":"^2.6.2"},"devDependencies":{"concurrently":"7.0.0","downlevel-dts":"0.10.1","premove":"4.0.0","typescript":"~5.8.3"},"typesVersions":{"<4.5":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["./cognito-identity.d.ts","./cognito-identity.js","./signin.d.ts","./signin.js","./sso-oidc.d.ts","./sso-oidc.js","./sso.d.ts","./sso.js","./sts.d.ts","./sts.js","dist-*/**"],"browser":{"./dist-es/submodules/cognito-identity/runtimeConfig":"./dist-es/submodules/cognito-identity/runtimeConfig.browser","./dist-es/submodules/signin/runtimeConfig":"./dist-es/submodules/signin/runtimeConfig.browser","./dist-es/submodules/sso-oidc/runtimeConfig":"./dist-es/submodules/sso-oidc/runtimeConfig.browser","./dist-es/submodules/sso/runtimeConfig":"./dist-es/submodules/sso/runtimeConfig.browser","./dist-es/submodules/sts/runtimeConfig":"./dist-es/submodules/sts/runtimeConfig.browser"},"react-native":{},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"packages/nested-clients"},"exports":{"./package.json":"./package.json","./sso-oidc":{"types":"./dist-types/submodules/sso-oidc/index.d.ts","module":"./dist-es/submodules/sso-oidc/index.js","node":"./dist-cjs/submodules/sso-oidc/index.js","import":"./dist-es/submodules/sso-oidc/index.js","require":"./dist-cjs/submodules/sso-oidc/index.js"},"./sts":{"types":"./dist-types/submodules/sts/index.d.ts","module":"./dist-es/submodules/sts/index.js","node":"./dist-cjs/submodules/sts/index.js","import":"./dist-es/submodules/sts/index.js","require":"./dist-cjs/submodules/sts/index.js"},"./signin":{"types":"./dist-types/submodules/signin/index.d.ts","module":"./dist-es/submodules/signin/index.js","node":"./dist-cjs/submodules/signin/index.js","import":"./dist-es/submodules/signin/index.js","require":"./dist-cjs/submodules/signin/index.js"},"./cognito-identity":{"types":"./dist-types/submodules/cognito-identity/index.d.ts","module":"./dist-es/submodules/cognito-identity/index.js","node":"./dist-cjs/submodules/cognito-identity/index.js","import":"./dist-es/submodules/cognito-identity/index.js","require":"./dist-cjs/submodules/cognito-identity/index.js"},"./sso":{"types":"./dist-types/submodules/sso/index.d.ts","module":"./dist-es/submodules/sso/index.js","node":"./dist-cjs/submodules/sso/index.js","import":"./dist-es/submodules/sso/index.js","require":"./dist-cjs/submodules/sso/index.js"}}}`);
}, 547: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { getLoggerPlugin: () => i, loggerMiddleware: () => n, loggerMiddlewareOptions: () => s });
  const n = () => (e2, t2) => async (r2) => {
    try {
      const n2 = await e2(r2), { clientName: s2, commandName: i2, logger: o, dynamoDbDocumentClientOptions: a = {} } = t2, { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: l } = a, u = c ?? t2.inputFilterSensitiveLog, d = l ?? t2.outputFilterSensitiveLog, { $metadata: h, ...f } = n2.output;
      return o?.info?.({ clientName: s2, commandName: i2, input: u(r2.input), output: d(f), metadata: h }), n2;
    } catch (e3) {
      const { clientName: n2, commandName: s2, logger: i2, dynamoDbDocumentClientOptions: o = {} } = t2, { overrideInputFilterSensitiveLog: a } = o, c = a ?? t2.inputFilterSensitiveLog;
      throw i2?.error?.({ clientName: n2, commandName: s2, input: c(r2.input), error: e3, metadata: e3.$metadata }), e3;
    }
  }, s = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: true }, i = (e2) => ({ applyToStack: (e3) => {
    e3.add(n(), s);
  } });
}, 1024: (e, t, r) => {
  "use strict";
  function n(e2) {
    const t2 = e2 && "object" == typeof e2 && "reason" in e2 ? e2.reason : void 0;
    if (t2) {
      if (t2 instanceof Error) {
        const e4 = new Error("Request aborted");
        return e4.name = "AbortError", e4.cause = t2, e4;
      }
      const e3 = new Error(String(t2));
      return e3.name = "AbortError", e3;
    }
    const r2 = new Error("Request aborted");
    return r2.name = "AbortError", r2;
  }
  r.d(t, { F: () => n });
}, 2682: (e, t, r) => {
  const { nv: n, NumericValue: s, calculateBodyLength: i, generateIdempotencyToken: o, fromBase64: a, _parseEpochTimestamp: c } = r(96851), { hasOwn: l, getSmithyContext: u } = r(11255), { HttpRequest: d, collectBody: h, SerdeContext: f, RpcProtocol: p } = r(73931), { NormalizedSchema: g, deref: m, TypeRegistry: y } = r(93353), w = 20, S = 21, b = 22, E = 25, v = 26, x = 27, T = 31;
  function A(e2) {
    return "undefined" != typeof Buffer ? Buffer.alloc(e2) : new Uint8Array(e2);
  }
  const N = /* @__PURE__ */ Symbol("@smithy/core/cbor::tagSymbol");
  function C(e2) {
    return e2[N] = true, e2;
  }
  const _ = "undefined" != typeof Buffer, R = new TextDecoder();
  let I = A(0), D = false, k = new DataView(I.buffer, I.byteOffset, I.byteLength), O = 0;
  function M(e2, t2) {
    if (e2 >= t2) throw new Error("unexpected end of (decode) payload.");
    const r2 = (224 & I[e2]) >> 5, s2 = 31 & I[e2];
    if (31 === s2 && 2 <= r2 && r2 <= 5) return (function(e3, t3) {
      const r3 = (224 & I[e3]) >> 5, n2 = 31 & I[e3];
      if (n2 === T) switch (r3) {
        case 3:
          return (function(e4, t4) {
            const r4 = [];
            for (const n3 = e4 += 1; e4 < t4; ) {
              if (255 === I[e4]) {
                const t5 = A(r4.length);
                return t5.set(r4, 0), O = e4 - n3 + 2, _ ? t5.toString("utf-8", 0, t5.length) : R.decode(t5);
              }
              const s3 = (224 & I[e4]) >> 5, i2 = 31 & I[e4];
              if (3 !== s3 && H(s3), i2 === T) throw new Error("nested indefinite string.");
              const o2 = U(e4, t4);
              e4 += O;
              for (let e5 = 0; e5 < o2.length; ++e5) r4.push(o2[e5]);
            }
            throw new Error("expected break marker.");
          })(e3, t3);
        case 5:
          return (function(e4, t4) {
            e4 += 1;
            const r4 = e4, n3 = {};
            for (; e4 < t4; ) {
              if (255 === I[e4]) return O = e4 - r4 + 2, n3;
              const s3 = P(e4, t4);
              e4 += O, n3[s3] = M(e4, t4), e4 += O;
            }
            throw new Error("expected break marker.");
          })(e3, t3);
        case 4:
          return (function(e4, t4) {
            const r4 = [];
            for (const n3 = e4 += 1; e4 < t4; ) {
              if (255 === I[e4]) return O = e4 - n3 + 2, r4;
              r4.push(M(e4, t4)), e4 += O;
            }
            throw new Error("expected break marker.");
          })(e3, t3);
        case 2:
          return (function(e4, t4) {
            const r4 = [];
            for (const n3 = e4 += 1; e4 < t4; ) {
              if (255 === I[e4]) {
                const t5 = A(r4.length);
                return t5.set(r4, 0), O = e4 - n3 + 2, t5;
              }
              const s3 = (224 & I[e4]) >> 5, i2 = 31 & I[e4];
              if (2 !== s3 && H(s3), i2 === T) throw new Error("nested indefinite string.");
              const o2 = U(e4, t4);
              e4 += O;
              for (let e5 = 0; e5 < o2.length; ++e5) r4.push(o2[e5]);
            }
            throw new Error("expected break marker.");
          })(e3, t3);
      }
    })(e2, t2);
    switch (r2) {
      case 0:
      case 1:
      case 6: {
        let i2, o2;
        if (s2 < 24) i2 = s2, o2 = 1;
        else switch (s2) {
          case 24:
            t2 - e2 < 2 && z(1), i2 = I[e2 + 1], o2 = 2;
            break;
          case E:
            t2 - e2 < 3 && z(2), i2 = k.getUint16(e2 + 1), o2 = 3;
            break;
          case v:
            t2 - e2 < 5 && z(4), i2 = k.getUint32(e2 + 1), o2 = 5;
            break;
          case x:
            t2 - e2 < 9 && z(8);
            {
              const t3 = k.getUint32(e2 + 1);
              i2 = t3 < 2097152 ? 4294967296 * t3 + k.getUint32(e2 + 5) : k.getBigUint64(e2 + 1);
            }
            o2 = 9;
            break;
          default:
            V(s2);
        }
        if (0 === r2) return O = o2, F(i2);
        if (1 === r2) {
          let e3;
          return e3 = "bigint" == typeof i2 ? BigInt(-1) - i2 : -1 - i2, O = o2, F(e3);
        }
        return (function(e3, t3, r3, s3, i3) {
          if (2 === r3 || 3 === r3) {
            const n2 = B(e3 + i3, t3);
            let s4 = BigInt(0);
            const o3 = e3 + i3 + O;
            for (let e4 = o3; e4 < o3 + n2; ++e4) s4 = s4 << BigInt(8) | BigInt(I[e4]);
            return O = i3 + O + n2, 3 === r3 ? -s4 - BigInt(1) : s4;
          }
          if (4 === r3) {
            const r4 = M(e3 + i3, t3), [s4, o3] = r4, a2 = BigInt(o3 < 0 ? -1 : 1) * BigInt(o3), c2 = String(a2), l2 = o3 < 0 ? "-" : "";
            let u2;
            if ("number" == typeof s4 && Math.abs(s4) <= 2 ** 28) {
              const e4 = s4, t4 = "0".repeat(Math.abs(e4) + 1) + c2;
              u2 = 0 === e4 ? t4 : t4.slice(0, t4.length + e4) + "." + t4.slice(e4), u2 = u2.replace(/^0+/g, ""), "" === u2 && (u2 = "0"), "." === u2[0] && (u2 = "0" + u2), u2 = l2 + u2;
            } else {
              const e4 = BigInt(s4);
              if (1 === c2.length) u2 = l2 + c2 + "e" + String(e4);
              else {
                const t4 = e4 + BigInt(c2.length - 1);
                u2 = l2 + c2[0] + "." + c2.slice(1) + "e" + String(t4);
              }
            }
            return O = i3 + O, n(u2);
          }
          {
            const r4 = M(e3 + i3, t3);
            return O = i3 + O, C({ tag: F(s3), value: r4 });
          }
        })(e2, t2, s2, i2, o2);
      }
      case 3:
        return P(e2, t2);
      case 5:
        return (function(e3, t3) {
          const r3 = B(e3, t3);
          if (r3 < 25) return (function(e4, t4, r4) {
            const n2 = O;
            e4 += n2;
            const s3 = e4, i2 = {};
            for (let n3 = 0; n3 < r4; ++n3) {
              const r5 = P(e4, t4);
              e4 += O, i2[r5] = M(e4, t4), e4 += O;
            }
            return O = n2 + (e4 - s3), i2;
          })(e3, t3, r3);
          return (function(e4, t4, r4) {
            const n2 = O;
            e4 += n2;
            const s3 = e4, i2 = /* @__PURE__ */ Object.create(null);
            for (let n3 = 0; n3 < r4; ++n3) {
              const r5 = P(e4, t4), n4 = (224 & I[e4 += O]) >> 5;
              i2[r5] = 3 === n4 ? P(e4, t4) : M(e4, t4), e4 += O;
            }
            return O = n2 + (e4 - s3), Object.setPrototypeOf(i2, Object.prototype), i2;
          })(e3, t3, r3);
        })(e2, t2);
      case 4:
        return (function(e3, t3) {
          const r3 = B(e3, t3), n2 = O;
          e3 += n2;
          const s3 = e3, i2 = Array(r3);
          for (let n3 = 0; n3 < r3; ++n3) i2[n3] = M(e3, t3), e3 += O;
          return O = n2 + (e3 - s3), i2;
        })(e2, t2);
      case 2:
        return U(e2, t2);
      default:
        return (function(e3, t3) {
          const r3 = 31 & I[e3];
          switch (r3) {
            case S:
            case w:
              return O = 1, r3 === S;
            case b:
            case 23:
              return O = 1, null;
            case E:
              if (t3 - e3 < 3) throw new Error("incomplete float16 at end of buf.");
              return O = 3, (function(e4, t4) {
                const r4 = (124 & e4) >> 2, n2 = (3 & e4) << 8 | t4, s3 = e4 >> 7 ? -1 : 1;
                if (0 === r4) return 0 === n2 ? 0 : s3 * (Math.pow(2, -14) * (n2 / 1024));
                if (31 === r4) return 0 === n2 ? s3 * (1 / 0) : NaN;
                return s3 * (Math.pow(2, r4 - 15) * (1 + n2 / 1024));
              })(I[e3 + 1], I[e3 + 2]);
            case v:
              if (t3 - e3 < 5) throw new Error("incomplete float32 at end of buf.");
              return O = 5, k.getFloat32(e3 + 1);
            case x:
              if (t3 - e3 < 9) throw new Error("incomplete float64 at end of buf.");
              return O = 9, k.getFloat64(e3 + 1);
            default:
              V(r3);
          }
        })(e2, t2);
    }
  }
  function P(e2, t2) {
    const r2 = B(e2, t2), n2 = O;
    return t2 - (e2 += n2) < r2 && z(r2), O = n2 + r2, r2 < 24 ? (function(e3, t3) {
      let r3 = t3;
      for (let n4 = 0; n4 < t3; ++n4) r3 = 31 * r3 + I[e3 + n4] | 0;
      const n3 = r3 >>> 0 & 2047, s2 = $[n3];
      if (void 0 !== s2 && s2.length === t3) {
        let r4 = true;
        for (let n4 = 0; n4 < t3; ++n4) if (s2.charCodeAt(n4) !== I[e3 + n4]) {
          r4 = false;
          break;
        }
        if (r4) return j[n3] = L, s2;
      }
      const i2 = D ? I.toString("utf-8", e3, e3 + t3) : R.decode(I.subarray(e3, e3 + t3));
      j[n3] !== L && ($[n3] = i2, j[n3] = L);
      return i2;
    })(e2, r2) : D ? I.toString("utf-8", e2, e2 + r2) : R.decode(I.subarray(e2, e2 + r2));
  }
  const $ = new Array(2048), j = new Uint16Array(2048);
  let L = 0;
  function U(e2, t2) {
    const r2 = B(e2, t2), n2 = O;
    t2 - (e2 += n2) < r2 && z(r2);
    const s2 = I.subarray(e2, e2 + r2);
    return O = n2 + r2, s2;
  }
  function B(e2, t2) {
    const r2 = 31 & I[e2];
    if (r2 < 24) return O = 1, r2;
    switch (r2) {
      case 24:
        return t2 - e2 < 2 && z(1), O = 2, I[e2 + 1];
      case E:
        return t2 - e2 < 3 && z(2), O = 3, k.getUint16(e2 + 1);
      case v:
        return t2 - e2 < 5 && z(4), O = 5, k.getUint32(e2 + 1);
      case x:
        return t2 - e2 < 9 && z(8), O = 9, (function(e3) {
          const t3 = Number(e3);
          (t3 < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t3) && console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${e3}) to ${t3} with loss of precision.`));
          return t3;
        })(k.getBigUint64(e2 + 1));
      default:
        V(r2);
    }
  }
  function F(e2) {
    if ("number" == typeof e2) return e2;
    const t2 = Number(e2);
    return Number.MIN_SAFE_INTEGER <= t2 && t2 <= Number.MAX_SAFE_INTEGER ? t2 : e2;
  }
  function z(e2) {
    throw new Error(`length ${e2} greater than remaining buf len.`);
  }
  function V(e2) {
    throw new Error(`unexpected minor value ${e2}.`);
  }
  function H(e2) {
    throw new Error(`unexpected major type ${e2} in indefinite string.`);
  }
  const q = "undefined" != typeof Buffer, W = /* @__PURE__ */ new Map();
  let G = 0, Q = false;
  let X = A(2048), K = new DataView(X.buffer, X.byteOffset, X.byteLength), J = 0;
  function Y() {
    const e2 = A(J);
    return e2.set(X.subarray(0, J), 0), J = 0, e2;
  }
  function Z(e2) {
    const t2 = X;
    X = A(e2), t2 && (t2.copy ? t2.copy(X, 0, 0, t2.byteLength) : X.set(t2, 0)), K = new DataView(X.buffer, X.byteOffset, X.byteLength);
  }
  function ee(e2) {
    const t2 = W.get(e2);
    if (void 0 !== t2) return X.set(t2.bytes, J), J += t2.bytes.length, void (t2.epoch = G);
    const r2 = J;
    ne(3, Buffer.byteLength(e2)), J += X.write(e2, J);
    const n2 = Uint8Array.prototype.slice.call(X, r2, J);
    if (W.size >= 2048) {
      if (Q) return;
      let e3 = 0;
      for (const [t3, r3] of W) {
        if (e3 >= 1024) break;
        r3.epoch !== G && (W.delete(t3), e3++);
      }
      if (0 === e3) return void (Q = true);
    }
    W.size < 2048 && W.set(e2, { epoch: G, bytes: n2 });
  }
  function te(e2) {
    X.byteLength - J < e2 && Z(J < 16e6 ? Math.max(4 * X.byteLength, X.byteLength + e2) : X.byteLength + e2 + 16e6);
  }
  function re(e2, t2) {
    t2 < 24 ? X[J++] = e2 << 5 | t2 : t2 < 256 ? (X[J++] = e2 << 5 | 24, X[J++] = t2) : t2 < 65536 ? (X[J++] = e2 << 5 | E, K.setUint16(J, t2), J += 2) : t2 < 4294967296 ? (X[J++] = e2 << 5 | v, K.setUint32(J, t2), J += 4) : (X[J++] = e2 << 5 | x, K.setBigUint64(J, "bigint" == typeof t2 ? t2 : BigInt(t2)), J += 8);
  }
  function ne(e2, t2) {
    if (t2 < 24) X[J++] = e2 << 5 | t2;
    else if (t2 < 256) X[J++] = e2 << 5 | 24, X[J++] = t2;
    else if (t2 < 65536) X[J++] = e2 << 5 | E, X[J++] = t2 >> 8, X[J++] = 255 & t2;
    else if (t2 < 4294967296) X[J++] = e2 << 5 | v, K.setUint32(J, t2), J += 4;
    else {
      X[J++] = e2 << 5 | x;
      const r2 = t2 / 4294967296 | 0, n2 = t2 - 4294967296 * r2 | 0;
      K.setUint32(J, r2), K.setUint32(J + 4, n2), J += 8;
    }
  }
  const se = { deserialize: (e2) => (L = L + 1 & 65535, I = e2, D = _ && I instanceof Buffer, k = new DataView(I.buffer, I.byteOffset, I.byteLength), M(0, e2.length)), serialize(e2) {
    G = G + 1 & 65535, Q = false;
    try {
      return (function(e3) {
        const t2 = [e3];
        for (; t2.length; ) {
          const e4 = t2.pop();
          if ("string" == typeof e4) {
            const t3 = e4.length;
            if (q) te(3 * t3 + 9), t3 > 23 ? (re(3, Buffer.byteLength(e4)), J += X.write(e4, J)) : ee(e4);
            else {
              te(3 * t3 + 9);
              const r2 = J, n2 = new TextEncoder().encodeInto(e4, X.subarray(J + 9)).written;
              let s2;
              s2 = n2 < 24 ? 1 : n2 < 256 ? 2 : n2 < 65536 ? 3 : n2 < 4294967296 ? 5 : 9, s2 < 9 && X.copyWithin(r2 + s2, r2 + 9, r2 + 9 + n2), J = r2, ne(3, n2), J += n2;
            }
            continue;
          }
          if (X.byteLength - J < 9 && te(64), "number" != typeof e4) {
            if ("bigint" == typeof e4) {
              const t3 = e4 >= 0, r2 = t3 ? 0 : 1, n2 = t3 ? e4 : -e4 - BigInt(1);
              if (n2 < BigInt("18446744073709551616")) {
                const e5 = Number(n2);
                e5 < 4294967296 ? ne(r2, e5) : (X[J++] = r2 << 5 | x, K.setBigUint64(J, n2), J += 8);
              } else {
                const e5 = n2.toString(2), r3 = new Uint8Array(Math.ceil(e5.length / 8));
                let s2 = n2, i2 = 0;
                for (; r3.byteLength - ++i2 >= 0; ) r3[r3.byteLength - i2] = Number(s2 & BigInt(255)), s2 >>= BigInt(8);
                te(2 * r3.byteLength + 16), X[J++] = t3 ? 194 : 195, re(2, r3.byteLength), X.set(r3, J), J += r3.byteLength;
              }
              continue;
            }
            if (null !== e4) if ("boolean" != typeof e4) {
              if (void 0 === e4) throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
              if (Array.isArray(e4)) {
                ne(4, e4.length), te(9 * e4.length + 64);
                for (let r2 = e4.length - 1; r2 >= 0; --r2) t2.push(e4[r2]);
              } else {
                if ("number" != typeof e4.byteLength) {
                  if ("object" == typeof e4) {
                    if (e4 instanceof s) {
                      let r3 = e4.string, n3 = BigInt(0);
                      const s2 = r3.search(/[eE]/);
                      -1 !== s2 && (n3 = BigInt(r3.slice(s2 + 1)), r3 = r3.slice(0, s2));
                      const i2 = r3.indexOf("."), o2 = -1 === i2 ? 0 : r3.length - i2 - 1, a2 = n3 - BigInt(o2), c2 = BigInt(r3.replace(".", ""));
                      X[J++] = 196, ne(4, 2), t2.push(c2), t2.push(a2 >= -0x20000000000000n && a2 <= 0x1fffffffffffffn ? Number(a2) : a2);
                      continue;
                    }
                    if (e4[N]) {
                      if ("tag" in e4 && "value" in e4) {
                        t2.push(e4.value), re(6, e4.tag);
                        continue;
                      }
                      throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(e4));
                    }
                    const r2 = Object.keys(e4), n2 = r2.length;
                    ne(5, n2);
                    for (let s2 = n2 - 1; s2 >= 0; --s2) t2.push(e4[r2[s2]]), t2.push(r2[s2]);
                    continue;
                  }
                  throw new Error(`data type ${e4?.constructor?.name ?? typeof e4} not compatible for encoding.`);
                }
                te(2 * e4.length + 9), ne(2, e4.length), X.set(e4, J), J += e4.byteLength;
              }
            } else X[J++] = 224 | (e4 ? S : w);
            else X[J++] = 246;
          } else {
            if (Number.isInteger(e4) && e4 >= -9007199254740992 && e4 <= 9007199254740991) {
              const t3 = e4 >= 0, r2 = t3 ? 0 : 1, n2 = t3 ? e4 : -e4 - 1;
              if (n2 < 24) X[J++] = r2 << 5 | n2;
              else if (n2 < 256) X[J++] = r2 << 5 | 24, X[J++] = n2;
              else if (n2 < 65536) X[J++] = r2 << 5 | E, X[J++] = n2 >> 8, X[J++] = 255 & n2;
              else if (n2 < 4294967296) X[J++] = r2 << 5 | v, K.setUint32(J, n2), J += 4;
              else {
                X[J++] = r2 << 5 | x;
                const e5 = n2 / 4294967296 | 0, t4 = n2 - 4294967296 * e5 | 0;
                K.setUint32(J, e5), K.setUint32(J + 4, t4), J += 8;
              }
              continue;
            }
            X[J++] = 251, K.setFloat64(J, e4), J += 8;
          }
        }
      })(e2), Y();
    } catch (e3) {
      throw Y(), e3;
    }
  }, resizeEncodingBuffer(e2) {
    Z(e2);
  } }, ie = (e2, t2) => h(e2, t2).then(async (e3) => {
    if (e3.length) try {
      return se.deserialize(e3);
    } catch (r2) {
      throw Object.defineProperty(r2, "$responseBodyText", { value: t2.utf8Encoder(e3) }), r2;
    }
    return {};
  }), oe = (e2) => C({ tag: 1, value: e2.getTime() / 1e3 }), ae = (e2, t2) => {
    const r2 = (e3) => {
      let t3 = e3;
      return "number" == typeof t3 && (t3 = t3.toString()), t3.indexOf(",") >= 0 && (t3 = t3.split(",")[0]), t3.indexOf(":") >= 0 && (t3 = t3.split(":")[0]), t3.indexOf("#") >= 0 && (t3 = t3.split("#")[1]), t3;
    };
    if (void 0 !== t2.__type) return r2(t2.__type);
    let n2;
    for (const e3 in t2) if (l(t2, e3) && "code" === e3.toLowerCase()) {
      n2 = e3;
      break;
    }
    return n2 && void 0 !== t2[n2] ? r2(t2[n2]) : void 0;
  };
  class ce extends f {
    write(e2, t2) {
      ye = 0;
      xe(g.of(e2), t2, void 0, this.serdeContext);
    }
    flush() {
      const e2 = ge.subarray(0, ye);
      return ye = 0, ge = ve(pe), me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength), e2;
    }
  }
  const le = /* @__PURE__ */ Symbol.for("@smithy/cbor-struct-cache");
  function ue(e2) {
    const t2 = e2.getSchema(), r2 = t2[le];
    if (r2) return r2;
    const n2 = [], s2 = [];
    for (const [t3, r3] of e2.structIterator()) n2.push(t3), s2.push(r3);
    const i2 = new Array(n2.length);
    for (let e3 = 0; e3 < n2.length; ++e3) i2[e3] = de(n2[e3]);
    const o2 = { memberNames: n2, memberSchemas: s2, encodedKeys: i2 };
    return t2[le] = o2, o2;
  }
  function de(e2) {
    let t2;
    t2 = he ? Buffer.from(e2, "utf-8") : new TextEncoder().encode(e2);
    const r2 = t2.length;
    let n2;
    n2 = r2 < 24 ? 1 : r2 < 256 ? 2 : 3;
    const s2 = new Uint8Array(n2 + r2);
    return 1 === n2 ? s2[0] = 96 | r2 : 2 === n2 ? (s2[0] = 120, s2[1] = r2) : (s2[0] = 121, s2[1] = r2 >> 8, s2[2] = 255 & r2), s2.set(t2, n2), s2;
  }
  const he = "undefined" != typeof Buffer, fe = new TextEncoder(), pe = 2048;
  let ge = he ? Buffer.allocUnsafe(pe) : new Uint8Array(pe), me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength), ye = 0;
  const we = 2048, Se = /* @__PURE__ */ new Map();
  let be = 0, Ee = false;
  function ve(e2) {
    return he ? Buffer.allocUnsafe(e2) : new Uint8Array(e2);
  }
  function xe(e2, t2, r2, n2) {
    if (null == t2) return void 0 === t2 && e2.isIdempotencyToken() ? void Ie(o()) : (Ce(1), void (ge[ye++] = 246));
    if (e2.isUnitSchema()) return Ce(1), void _e(5, 0);
    if ("object" == typeof t2) {
      if (e2.isBlobSchema() && t2 instanceof Uint8Array) return void Pe(t2);
      if (e2.isTimestampSchema() && t2 instanceof Date) return void Le(t2);
      if (e2.isStructSchema()) return void (function(e3, t3, r3) {
        if (e3.isUnionSchema()) {
          let n4 = false;
          for (const [s3, i3] of e3.structIterator()) {
            const o3 = t3[s3];
            if (null != o3) {
              Ce(9), _e(5, 1), Ie(s3), xe(i3, o3, e3, r3), n4 = true;
              break;
            }
          }
          if (!n4) {
            const { $unknown: e4 } = t3;
            Array.isArray(e4) ? (Ce(9), _e(5, 1), Ie(e4[0]), Ne(e4[1])) : (Ce(9), _e(5, 0));
          }
          return;
        }
        const n3 = ue(e3), { memberNames: s2, memberSchemas: i2, encodedKeys: o2 } = n3, a2 = s2.length;
        let c2;
        c2 = a2 < 24 ? 1 : a2 < 256 ? 2 : 3;
        Ce(c2);
        const u2 = ye;
        ye += c2;
        let d2 = 0;
        for (let n4 = 0; n4 < a2; ++n4) {
          const a3 = t3[s2[n4]];
          if (null == a3 && !i2[n4].isIdempotencyToken()) continue;
          const c3 = o2[n4];
          Ce(c3.length), ge.set(c3, ye), ye += c3.length, xe(i2[n4], a3, e3, r3), ++d2;
        }
        if ("string" == typeof t3.__type) for (const e4 in t3) l(t3, e4) && (s2.includes(e4) || (Ie(e4), Ne(t3[e4]), ++d2));
        1 === c2 ? ge[u2] = 160 | d2 : 2 === c2 ? (ge[u2] = 184, ge[u2 + 1] = d2) : (ge[u2] = 185, ge[u2 + 1] = d2 >> 8, ge[u2 + 2] = 255 & d2);
      })(e2, t2, n2);
      if (Array.isArray(t2) && (e2.isListSchema() || e2.isDocumentSchema())) return void Te(e2, t2, e2.isDocumentSchema(), n2);
      if (e2.isMapSchema()) return void Ae(e2, t2, false, n2);
      if (t2 instanceof Date) return void Le(t2);
      if (t2 instanceof Uint8Array) return void Pe(t2);
      if (t2 instanceof s) return void je(t2);
      if (t2[N]) {
        const e3 = t2;
        return void $e(e3.tag, e3.value);
      }
      return e2.isDocumentSchema() ? void (Array.isArray(t2) ? Te(e2, t2, true, n2) : Ae(e2, t2, true, n2)) : e2.isBigDecimalSchema() ? void Ne(t2) : void Ae(e2, t2, true, n2);
    }
    if ("string" != typeof t2) return "number" == typeof t2 ? (Ce(9), void (Number.isInteger(t2) && t2 >= -9007199254740992 && t2 <= 9007199254740991 ? Oe(t2) : ke(t2))) : "boolean" == typeof t2 ? (Ce(1), void (ge[ye++] = 224 | (t2 ? S : w))) : void ("bigint" != typeof t2 ? Ie(String(t2)) : Me(t2));
    if (e2.isBlobSchema()) {
      return void Pe((n2?.base64Decoder ?? a)(t2));
    }
    Ie(t2);
  }
  function Te(e2, t2, r2, n2) {
    const s2 = !!e2.getMergedTraits().sparse, i2 = e2.getValueSchema();
    if (r2 || s2) {
      const e3 = [];
      for (let n3 = 0; n3 < t2.length; ++n3) {
        const i3 = t2[n3];
        r2 ? void 0 !== i3 && e3.push(i3) : (null != i3 || s2) && e3.push(i3);
      }
      Ce(9), _e(4, e3.length);
      for (let t3 = 0; t3 < e3.length; ++t3) xe(i2, e3[t3], 0, n2);
    } else {
      let e3 = 0;
      for (let r3 = 0; r3 < t2.length; ++r3) null != t2[r3] && ++e3;
      Ce(9), _e(4, e3);
      for (let e4 = 0; e4 < t2.length; ++e4) null != t2[e4] && xe(i2, t2[e4], 0, n2);
    }
  }
  function Ae(e2, t2, r2, n2) {
    const s2 = !!e2.getMergedTraits().sparse, i2 = e2.getValueSchema(), o2 = [];
    for (const e3 in t2) {
      if (!l(t2, e3)) continue;
      const n3 = t2[e3];
      (r2 ? void 0 !== n3 : null != n3 || s2) && o2.push(e3);
    }
    Ce(9), _e(5, o2.length);
    for (let e3 = 0; e3 < o2.length; ++e3) {
      const r3 = o2[e3];
      Ie(r3), xe(i2, t2[r3], 0, n2);
    }
  }
  function Ne(e2) {
    if (null == e2) return Ce(1), void (ge[ye++] = 246);
    if ("string" != typeof e2) {
      if ("number" == typeof e2) return Ce(9), void (Number.isInteger(e2) && e2 >= -9007199254740992 && e2 <= 9007199254740991 ? Oe(e2) : ke(e2));
      if ("boolean" == typeof e2) return Ce(1), void (ge[ye++] = 224 | (e2 ? S : w));
      if ("bigint" != typeof e2) if (e2 instanceof Uint8Array) Pe(e2);
      else if (e2 instanceof Date) Le(e2);
      else if (e2 instanceof s) je(e2);
      else {
        if (e2[N]) {
          const t2 = e2;
          return void $e(t2.tag, t2.value);
        }
        if (Array.isArray(e2)) {
          Ce(9), _e(4, e2.length);
          for (let t2 = 0; t2 < e2.length; ++t2) Ne(e2[t2]);
        } else {
          if ("object" == typeof e2) {
            const t2 = Object.keys(e2);
            Ce(9), _e(5, t2.length);
            for (let r2 = 0; r2 < t2.length; ++r2) Ie(t2[r2]), Ne(e2[t2[r2]]);
            return;
          }
          Ie(String(e2));
        }
      }
      else Me(e2);
    } else Ie(e2);
  }
  function Ce(e2) {
    if (ye + e2 > ge.length) {
      let t2 = 2 * ge.length;
      for (; t2 < ye + e2; ) t2 *= 2;
      const r2 = ve(t2);
      r2.set(ge.subarray(0, ye)), ge = r2, me = new DataView(r2.buffer, r2.byteOffset, r2.byteLength);
    }
  }
  function _e(e2, t2) {
    if (t2 < 24) ge[ye++] = e2 << 5 | t2;
    else if (t2 < 256) ge[ye++] = e2 << 5 | 24, ge[ye++] = t2;
    else if (t2 < 65536) ge[ye++] = e2 << 5 | E, ge[ye++] = t2 >> 8, ge[ye++] = 255 & t2;
    else if (t2 < 4294967296) ge[ye++] = e2 << 5 | v, me.setUint32(ye, t2), ye += 4;
    else {
      ge[ye++] = e2 << 5 | x;
      const r2 = t2 / 4294967296 | 0, n2 = t2 - 4294967296 * r2 | 0;
      me.setUint32(ye, r2), me.setUint32(ye + 4, n2), ye += 8;
    }
  }
  function Re(e2, t2) {
    const r2 = Number(t2);
    r2 < 4294967296 ? _e(e2, r2) : (ge[ye++] = e2 << 5 | x, me.setBigUint64(ye, t2), ye += 8);
  }
  function Ie(e2) {
    const t2 = e2.length;
    if (t2 <= 23) {
      const r2 = Se.get(e2);
      if (r2) return Ce(r2.bytes.length), ge.set(r2.bytes, ye), ye += r2.bytes.length, void (r2.epoch = be);
      const n2 = ye;
      De(e2, t2);
      const s2 = ye, i2 = Uint8Array.prototype.slice.call(ge, n2, s2);
      if (Se.size >= we) {
        if (Ee) return;
        let e3 = 0;
        for (const [t3, r3] of Se) {
          if (e3 >= 1024) break;
          r3.epoch !== be && (Se.delete(t3), ++e3);
        }
        if (0 === e3) return void (Ee = true);
      }
      return void (Se.size < we && Se.set(e2, { epoch: be, bytes: i2 }));
    }
    De(e2, t2);
  }
  function De(e2, t2) {
    if (he) {
      Ce(3 * t2 + 9);
      _e(3, Buffer.byteLength(e2)), ye += ge.write(e2, ye);
    } else {
      Ce(3 * t2 + 9);
      const r2 = ye, n2 = fe.encodeInto(e2, ge.subarray(r2 + 9)).written;
      let s2;
      s2 = n2 < 24 ? 1 : n2 < 256 ? 2 : n2 < 65536 ? 3 : n2 < 4294967296 ? 5 : 9, s2 < 9 && ge.copyWithin(r2 + s2, r2 + 9, r2 + 9 + n2), ye = r2, _e(3, n2), ye += n2;
    }
  }
  function ke(e2) {
    Ce(9), ge[ye++] = 251, me.setFloat64(ye, e2), ye += 8;
  }
  function Oe(e2) {
    Ce(9);
    const t2 = e2 >= 0;
    _e(t2 ? 0 : 1, t2 ? e2 : -e2 - 1);
  }
  function Me(e2) {
    const t2 = e2 >= 0, r2 = t2 ? 0 : 1, n2 = t2 ? e2 : -e2 - BigInt(1);
    if (n2 < BigInt("18446744073709551616")) Ce(9), Re(r2, n2);
    else {
      const e3 = n2.toString(2), r3 = Math.ceil(e3.length / 8), s2 = new Uint8Array(r3);
      let i2 = n2;
      for (let e4 = r3 - 1; e4 >= 0; --e4) s2[e4] = Number(i2 & BigInt(255)), i2 >>= BigInt(8);
      Ce(r3 + 16), ge[ye++] = t2 ? 194 : 195, _e(2, r3), ge.set(s2, ye), ye += r3;
    }
  }
  function Pe(e2) {
    Ce(e2.length + 9), _e(2, e2.length), ge.set(e2, ye), ye += e2.length;
  }
  function $e(e2, t2) {
    Ce(9), "bigint" == typeof e2 ? Re(6, e2) : _e(6, e2), Ne(t2);
  }
  function je(e2) {
    let t2 = e2.string, r2 = BigInt(0);
    const n2 = t2.search(/[eE]/);
    -1 !== n2 && (r2 = BigInt(t2.slice(n2 + 1)), t2 = t2.slice(0, n2));
    const s2 = t2.indexOf("."), i2 = -1 === s2 ? 0 : t2.length - s2 - 1, o2 = r2 - BigInt(i2), a2 = BigInt(t2.replace(".", ""));
    Ce(9), ge[ye++] = 196, _e(4, 2), Ce(9), o2 >= -0x20000000000000n && o2 <= 0x1fffffffffffffn ? Oe(Number(o2)) : Me(o2), Me(a2);
  }
  function Le(e2) {
    Ce(18), _e(6, 1);
    const t2 = e2.getTime() / 1e3;
    Number.isInteger(t2) ? Oe(t2) : ke(t2);
  }
  class Ue extends f {
    read(e2, t2) {
      return ze = t2, Ve = Be && t2 instanceof Buffer, He = new DataView(t2.buffer, t2.byteOffset, t2.byteLength), qe = 0, We = t2.length, Ke = Ke + 1 & 65535, Je(g.of(e2));
    }
    readValue(e2, t2) {
      return ot(g.of(e2), t2);
    }
  }
  const Be = "undefined" != typeof Buffer, Fe = new TextDecoder();
  let ze = new Uint8Array(0), Ve = false, He = new DataView(new ArrayBuffer(0)), qe = 0, We = 0;
  const Ge = 2048, Qe = new Array(Ge), Xe = new Uint16Array(Ge);
  let Ke = 0;
  function Je(e2) {
    if (qe >= We) throw new Error("unexpected end of CBOR payload.");
    const t2 = (224 & ze[qe]) >> 5;
    if ((31 & ze[qe]) === T && t2 >= 2 && t2 <= 5) return (function(e3, t3) {
      switch (t3) {
        case 3:
          return (function() {
            qe += 1;
            const e4 = [];
            let t4 = 0;
            for (; qe < We; ) {
              if (255 === ze[qe]) {
                qe += 1;
                const r3 = new Uint8Array(t4);
                let n2 = 0;
                for (let t5 = 0; t5 < e4.length; ++t5) r3.set(e4[t5], n2), n2 += e4[t5].length;
                return Be ? Buffer.from(r3.buffer, r3.byteOffset, r3.byteLength).toString("utf-8") : Fe.decode(r3);
              }
              const r2 = rt();
              e4.push(r2), t4 += r2.length;
            }
            throw new Error("expected break marker.");
          })();
        case 2:
          return (function() {
            qe += 1;
            const e4 = [];
            let t4 = 0;
            for (; qe < We; ) {
              if (255 === ze[qe]) {
                qe += 1;
                const r3 = new Uint8Array(t4);
                let n2 = 0;
                for (let t5 = 0; t5 < e4.length; ++t5) r3.set(e4[t5], n2), n2 += e4[t5].length;
                return r3;
              }
              const r2 = rt();
              e4.push(r2), t4 += r2.length;
            }
            throw new Error("expected break marker.");
          })();
        case 4:
          return (function(e4) {
            qe += 1;
            const t4 = e4.isListSchema() ? e4.getValueSchema() : e4, r2 = [];
            for (; qe < We; ) {
              if (255 === ze[qe]) return qe += 1, r2;
              r2.push(Je(t4));
            }
            throw new Error("expected break marker.");
          })(e3);
        case 5:
          return (function(e4) {
            if (qe += 1, e4.isStructSchema()) {
              const t5 = ue(e4), { memberSchemas: r3, encodedKeys: n2, memberNames: s2 } = t5, i2 = n2.length, o2 = e4.isUnionSchema(), a2 = {};
              let c2, u2, d2 = 0, h2 = 0;
              for (; qe < We; ) {
                if (255 === ze[qe]) {
                  if (qe += 1, o2) {
                    let e6 = true;
                    for (const t6 in a2) if (l(a2, t6)) {
                      e6 = false;
                      break;
                    }
                    e6 && 1 === d2 && (a2.$unknown = [c2, u2]);
                  }
                  return a2;
                }
                const e5 = Ye(n2, i2, h2);
                if (e5 >= 0) {
                  h2 = e5 + 1, h2 >= i2 && (h2 = 0);
                  const t6 = Je(r3[e5]);
                  null != t6 && (a2[s2[e5]] = t6);
                } else {
                  const e6 = nt(), t6 = Je(g.of(15));
                  "__type" !== e6 && (c2 = e6, u2 = t6, ++d2);
                }
              }
              throw new Error("expected break marker.");
            }
            const t4 = e4.isMapSchema() ? e4.getValueSchema() : e4, r2 = {};
            for (; qe < We; ) {
              if (255 === ze[qe]) return qe += 1, r2;
              r2[nt()] = Je(t4);
            }
            throw new Error("expected break marker.");
          })(e3);
        default:
          throw new Error(`unexpected indefinite length for major ${t3}.`);
      }
    })(e2, t2);
    switch (t2) {
      case 0:
        return st(et());
      case 1:
        return (function() {
          const e3 = et();
          if ("bigint" == typeof e3) return BigInt(-1) - e3;
          return -1 - e3;
        })();
      case 2:
        return rt();
      case 3:
        return nt();
      case 4:
        return (function(e3) {
          const t3 = tt(), r2 = e3.isListSchema() ? e3.getValueSchema() : e3, n2 = Array(t3);
          for (let e4 = 0; e4 < t3; ++e4) n2[e4] = Je(r2);
          return n2;
        })(e2);
      case 5:
        return (function(e3) {
          const t3 = tt();
          if (e3.isStructSchema()) {
            return (function(e4, t4, r3) {
              const n3 = e4.isUnionSchema(), s2 = ue(e4), { memberSchemas: i2, encodedKeys: o2, memberNames: a2 } = s2, c2 = o2.length, u2 = {};
              let d2, h2, f2 = 0, p2 = false, m2 = 0;
              for (let e5 = 0; e5 < t4; ++e5) {
                const e6 = Ye(o2, c2, m2);
                if (e6 >= 0) {
                  m2 = e6 + 1, m2 >= c2 && (m2 = 0);
                  const t5 = Je(i2[e6]);
                  null != t5 && (u2[a2[e6]] = t5);
                } else {
                  const e7 = nt(), t5 = Je(g.of(15));
                  "__type" === e7 && "string" == typeof t5 ? p2 = true : (d2 = e7, h2 = t5, ++f2);
                }
              }
              if (n3) {
                let e5 = true;
                for (const t5 in u2) if (l(u2, t5)) {
                  e5 = false;
                  break;
                }
                e5 && 1 === f2 && (u2.$unknown = [d2, h2]);
              } else if (p2) {
                qe = r3;
                const e5 = g.of(15);
                for (let r4 = 0; r4 < t4; ++r4) {
                  const t5 = nt(), r5 = Je(e5);
                  t5 in u2 || (u2[t5] = r5);
                }
              }
              return u2;
            })(e3, t3, qe);
          }
          const r2 = e3.isMapSchema() ? e3.getValueSchema() : e3, n2 = {};
          for (let e4 = 0; e4 < t3; ++e4) {
            n2[nt()] = Je(r2);
          }
          return n2;
        })(e2);
      case 6:
        return (function() {
          const e3 = et(), t3 = "bigint" == typeof e3 ? Number(e3) : e3;
          if (1 === t3) {
            const e4 = Je(g.of(15));
            return c(e4);
          }
          if (2 === t3 || 3 === t3) {
            const e4 = rt();
            let r3 = BigInt(0);
            for (let t4 = 0; t4 < e4.length; ++t4) r3 = r3 << BigInt(8) | BigInt(e4[t4]);
            return 3 === t3 ? -r3 - BigInt(1) : r3;
          }
          if (4 === t3) {
            const e4 = Je(g.of(15)), [t4, r3] = e4, s2 = BigInt(r3 < 0 ? -1 : 1) * BigInt(r3), i2 = String(s2), o2 = r3 < 0 ? "-" : "";
            let a2;
            if ("number" == typeof t4 && Math.abs(t4) <= 2 ** 28) {
              const e5 = t4, r4 = "0".repeat(Math.abs(e5) + 1) + i2;
              a2 = 0 === e5 ? r4 : r4.slice(0, r4.length + e5) + "." + r4.slice(e5), a2 = a2.replace(/^0+/g, ""), "" === a2 && (a2 = "0"), "." === a2[0] && (a2 = "0" + a2), a2 = o2 + a2;
            } else {
              const e5 = BigInt(t4);
              if (1 === i2.length) a2 = o2 + i2 + "e" + String(e5);
              else {
                const t5 = e5 + BigInt(i2.length - 1);
                a2 = o2 + i2[0] + "." + i2.slice(1) + "e" + String(t5);
              }
            }
            return n(a2);
          }
          const r2 = Je(g.of(15));
          return { tag: st(e3), value: r2 };
        })();
      case 7:
        return (function() {
          const e3 = qe, t3 = 31 & ze[e3];
          switch (t3) {
            case S:
              return qe = e3 + 1, true;
            case w:
              return qe = e3 + 1, false;
            case b:
            case 23:
              return qe = e3 + 1, null;
            case E:
              return We - e3 < 3 && it(2), qe = e3 + 3, (function(e4, t4) {
                const r2 = (124 & e4) >> 2, n2 = (3 & e4) << 8 | t4, s2 = e4 >> 7 ? -1 : 1;
                if (0 === r2) return 0 === n2 ? 0 : s2 * (Math.pow(2, -14) * (n2 / 1024));
                if (31 === r2) return 0 === n2 ? s2 * (1 / 0) : NaN;
                return s2 * (Math.pow(2, r2 - 15) * (1 + n2 / 1024));
              })(ze[e3 + 1], ze[e3 + 2]);
            case v:
              return We - e3 < 5 && it(4), qe = e3 + 5, He.getFloat32(e3 + 1);
            case x:
              return We - e3 < 9 && it(8), qe = e3 + 9, He.getFloat64(e3 + 1);
            default:
              throw new Error(`unexpected minor value ${t3} for major 7.`);
          }
        })();
      default:
        throw new Error(`unexpected CBOR major type ${t2}.`);
    }
  }
  function Ye(e2, t2, r2) {
    const n2 = e2[r2];
    if (qe + n2.length <= We && Ze(qe, n2)) return qe += n2.length, r2;
    for (let n3 = 0; n3 < t2; ++n3) {
      if (n3 === r2) continue;
      const t3 = e2[n3];
      if (qe + t3.length <= We && Ze(qe, t3)) return qe += t3.length, n3;
    }
    return -1;
  }
  function Ze(e2, t2) {
    const r2 = t2.length;
    if (ze[e2] !== t2[0]) return false;
    for (let n2 = 1; n2 < r2; ++n2) if (ze[e2 + n2] !== t2[n2]) return false;
    return true;
  }
  function et() {
    const e2 = 31 & ze[qe];
    if (e2 < 24) return qe += 1, e2;
    switch (e2) {
      case 24:
        return We - qe < 2 && it(1), qe += 2, ze[qe - 1];
      case E:
        return We - qe < 3 && it(2), qe += 3, He.getUint16(qe - 2);
      case v:
        return We - qe < 5 && it(4), qe += 5, He.getUint32(qe - 4);
      case x: {
        We - qe < 9 && it(8), qe += 9;
        const e3 = He.getUint32(qe - 8);
        return e3 < 2097152 ? 4294967296 * e3 + He.getUint32(qe - 4) : He.getBigUint64(qe - 8);
      }
      default:
        throw new Error(`unexpected minor value ${e2}.`);
    }
  }
  function tt() {
    const e2 = et();
    return "bigint" == typeof e2 ? Number(e2) : e2;
  }
  function rt() {
    const e2 = tt();
    We - qe < e2 && it(e2);
    const t2 = qe;
    return qe += e2, ze.subarray(t2, t2 + e2);
  }
  function nt() {
    const e2 = tt();
    We - qe < e2 && it(e2);
    const t2 = qe;
    return qe += e2, e2 < 24 ? (function(e3, t3) {
      let r2 = t3;
      for (let n3 = 0; n3 < t3; ++n3) r2 = 31 * r2 + ze[e3 + n3] | 0;
      const n2 = r2 >>> 0 & Ge - 1, s2 = Qe[n2];
      if (void 0 !== s2 && s2.length === t3) {
        let r3 = true;
        for (let n3 = 0; n3 < t3; ++n3) if (s2.charCodeAt(n3) !== ze[e3 + n3]) {
          r3 = false;
          break;
        }
        if (r3) return Xe[n2] = Ke, s2;
      }
      const i2 = Ve ? ze.toString("utf-8", e3, e3 + t3) : Fe.decode(ze.subarray(e3, e3 + t3));
      Xe[n2] !== Ke && (Qe[n2] = i2, Xe[n2] = Ke);
      return i2;
    })(t2, e2) : Ve ? ze.toString("utf-8", t2, t2 + e2) : Fe.decode(ze.subarray(t2, t2 + e2));
  }
  function st(e2) {
    if ("number" == typeof e2) return e2;
    const t2 = Number(e2);
    return Number.MIN_SAFE_INTEGER <= t2 && t2 <= Number.MAX_SAFE_INTEGER ? t2 : e2;
  }
  function it(e2) {
    throw new Error(`CBOR: length ${e2} greater than remaining buffer length.`);
  }
  function ot(e2, t2) {
    if (e2.isTimestampSchema()) {
      if ("number" == typeof t2) return c(t2);
      if ("object" == typeof t2 && null !== t2 && 1 === t2.tag && "value" in t2) return c(t2.value);
    }
    if (e2.isBlobSchema()) return t2;
    if (void 0 === t2 || "boolean" == typeof t2 || "number" == typeof t2 || "string" == typeof t2 || "bigint" == typeof t2 || "symbol" == typeof t2) return t2;
    if ("object" != typeof t2 || null === t2) return t2;
    if ("byteLength" in t2) return t2;
    if (t2 instanceof Date) return t2;
    if (t2 instanceof s) return t2;
    if (e2.isDocumentSchema()) return t2;
    if (e2.isListSchema()) {
      const r3 = e2.getValueSchema(), n2 = [];
      for (const e3 of t2) n2.push(ot(r3, e3));
      return n2;
    }
    const r2 = {};
    if (e2.isMapSchema()) {
      const n2 = e2.getValueSchema();
      for (const e3 in t2) l(t2, e3) && (r2[e3] = ot(n2, t2[e3]));
    } else if (e2.isStructSchema()) {
      const n2 = e2.isUnionSchema();
      let s2;
      if (n2) {
        s2 = /* @__PURE__ */ new Set();
        for (const e3 in t2) l(t2, e3) && "__type" !== e3 && s2.add(e3);
      }
      for (const [i2, o2] of e2.structIterator()) n2 && s2.delete(i2), null != t2[i2] && (r2[i2] = ot(o2, t2[i2]));
      if (n2 && 1 === s2?.size) {
        let e3 = true;
        for (const t3 in r2) if (l(r2, t3)) {
          e3 = false;
          break;
        }
        if (e3) {
          const e4 = s2.values().next().value;
          r2.$unknown = [e4, t2[e4]];
        }
      } else if ("string" == typeof t2.__type) for (const e3 in t2) l(t2, e3) && (e3 in r2 || (r2[e3] = t2[e3]));
    }
    return r2;
  }
  class at extends f {
    createSerializer() {
      const e2 = new ce();
      return e2.setSerdeContext(this.serdeContext), e2;
    }
    createDeserializer() {
      const e2 = new Ue();
      return e2.setSerdeContext(this.serdeContext), e2;
    }
  }
  t.CborCodec = at, t.CborShapeDeserializer = class extends f {
    read(e2, t2) {
      const r2 = se.deserialize(t2);
      return this.readValue(e2, r2);
    }
    readValue(e2, t2) {
      const r2 = g.of(e2);
      if (r2.isTimestampSchema()) {
        if ("number" == typeof t2) return c(t2);
        if ("object" == typeof t2 && 1 === t2.tag && "value" in t2) return c(t2.value);
      }
      if (r2.isBlobSchema()) return "string" == typeof t2 ? (this.serdeContext?.base64Decoder ?? a)(t2) : t2;
      if (void 0 === t2 || "boolean" == typeof t2 || "number" == typeof t2 || "string" == typeof t2 || "bigint" == typeof t2 || "symbol" == typeof t2) return t2;
      if ("object" == typeof t2) {
        if (null === t2) return null;
        if ("byteLength" in t2) return t2;
        if (t2 instanceof Date) return t2;
        if (r2.isDocumentSchema()) return t2;
        if (r2.isListSchema()) {
          const e4 = [], n2 = r2.getValueSchema();
          for (const r3 of t2) {
            const t3 = this.readValue(n2, r3);
            e4.push(t3);
          }
          return e4;
        }
        const e3 = {};
        if (r2.isMapSchema()) {
          const n2 = r2.getValueSchema();
          for (const r3 in t2) {
            if (!l(t2, r3)) continue;
            const s2 = this.readValue(n2, t2[r3]);
            e3[r3] = s2;
          }
        } else if (r2.isStructSchema()) {
          const n2 = r2.isUnionSchema();
          let s2;
          if (n2) {
            s2 = /* @__PURE__ */ new Set();
            for (const e4 in t2) l(t2, e4) && "__type" !== e4 && s2.add(e4);
          }
          for (const [i2, o2] of r2.structIterator()) n2 && s2.delete(i2), null != t2[i2] && (e3[i2] = this.readValue(o2, t2[i2]));
          if (n2 && 1 === s2?.size) {
            let r3 = true;
            for (const t3 in e3) if (l(e3, t3)) {
              r3 = false;
              break;
            }
            if (r3) {
              const r4 = s2.values().next().value;
              e3.$unknown = [r4, t2[r4]];
            }
          } else if ("string" == typeof t2.__type) for (const r3 in t2) l(t2, r3) && (r3 in e3 || (e3[r3] = t2[r3]));
        } else if (t2 instanceof s) return t2;
        return e3;
      }
      return t2;
    }
  }, t.CborShapeDeserializer2 = Ue, t.CborShapeSerializer = class extends f {
    value;
    write(e2, t2) {
      this.value = this.serialize(e2, t2);
    }
    serialize(e2, t2) {
      const r2 = g.of(e2);
      if (null == t2) return r2.isIdempotencyToken() ? o() : t2;
      if (r2.isBlobSchema()) return "string" == typeof t2 ? (this.serdeContext?.base64Decoder ?? a)(t2) : t2;
      if (r2.isTimestampSchema()) return oe("number" == typeof t2 || "bigint" == typeof t2 ? new Date(Number(t2) / 1e3 | 0) : t2);
      if ("function" == typeof t2 || "object" == typeof t2) {
        const e3 = t2;
        if (r2.isListSchema() && Array.isArray(e3)) {
          const t3 = !!r2.getMergedTraits().sparse, n3 = [];
          let s2 = 0;
          for (const i2 of e3) {
            const e4 = this.serialize(r2.getValueSchema(), i2);
            (null != e4 || t3) && (n3[s2++] = e4);
          }
          return n3;
        }
        if (e3 instanceof Date) return oe(e3);
        const n2 = {};
        if (r2.isMapSchema()) {
          const t3 = !!r2.getMergedTraits().sparse;
          for (const s2 in e3) {
            if (!l(e3, s2)) continue;
            const i2 = this.serialize(r2.getValueSchema(), e3[s2]);
            (null != i2 || t3) && (n2[s2] = i2);
          }
        } else if (r2.isStructSchema()) {
          for (const [t3, s2] of r2.structIterator()) {
            const r3 = this.serialize(s2, e3[t3]);
            null != r3 && (n2[t3] = r3);
          }
          if (r2.isUnionSchema() && Array.isArray(e3.$unknown)) {
            const [t3, r3] = e3.$unknown;
            n2[t3] = r3;
          } else if ("string" == typeof e3.__type) for (const t3 in e3) l(e3, t3) && (t3 in n2 || (n2[t3] = this.serialize(15, e3[t3])));
        } else if (r2.isDocumentSchema()) {
          if (Array.isArray(e3)) {
            const t3 = [];
            let n3 = 0;
            for (const s2 of e3) t3[n3++] = this.serialize(r2.getValueSchema(), s2);
            return t3;
          }
          for (const t3 in e3) l(e3, t3) && (n2[t3] = this.serialize(r2.getValueSchema(), e3[t3]));
        } else if (r2.isBigDecimalSchema()) return e3;
        return n2;
      }
      return t2;
    }
    flush() {
      const e2 = se.serialize(this.value);
      return this.value = void 0, e2;
    }
  }, t.CborShapeSerializer2 = ce, t.SmithyRpcV2CborProtocol = class extends p {
    codec = new at();
    serializer = this.codec.createSerializer();
    deserializer = this.codec.createDeserializer();
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2 });
    }
    getShapeId() {
      return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
      return this.codec;
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2);
      Object.assign(n2.headers, { "content-type": this.getDefaultContentType(), "smithy-protocol": "rpc-v2-cbor", accept: this.getDefaultContentType() }), "unit" === m(e2.input) ? (delete n2.body, delete n2.headers["content-type"]) : (n2.body || (this.serializer.write(15, {}), n2.body = this.serializer.flush()), n2.body instanceof Uint8Array && (n2.headers["content-length"] = String(n2.body.byteLength)));
      const { service: s2, operation: i2 } = u(r2), o2 = `/service/${s2}/operation/${i2}`;
      return n2.path.endsWith("/") ? n2.path += o2.slice(1) : n2.path += o2, n2;
    }
    async deserializeResponse(e2, t2, r2) {
      return super.deserializeResponse(e2, t2, r2);
    }
    async handleError(e2, t2, r2, n2, s2) {
      const i2 = ae(0, n2) ?? "Unknown", o2 = { $metadata: s2, $fault: r2.statusCode <= 500 ? "client" : "server" };
      let a2 = this.options.defaultNamespace;
      i2.includes("#") && ([a2] = i2.split("#"));
      const c2 = this.compositeErrorRegistry, l2 = y.for(a2);
      let u2;
      c2.copyFrom(l2);
      try {
        u2 = c2.getSchema(i2);
      } catch (e3) {
        n2.Message && (n2.message = n2.Message);
        const t3 = y.for("smithy.ts.sdk.synthetic." + a2);
        c2.copyFrom(t3);
        const r3 = c2.getBaseException();
        if (r3) {
          const e4 = c2.getErrorCtor(r3);
          throw Object.assign(new e4({ name: i2 }), o2, n2);
        }
        throw Object.assign(new Error(i2), o2, n2);
      }
      const d2 = g.of(u2), h2 = c2.getErrorCtor(u2), f2 = n2.message ?? n2.Message ?? "Unknown", p2 = new h2({}), m2 = {};
      for (const [e3, t3] of d2.structIterator()) m2[e3] = this.deserializer.readValue(t3, n2[e3]);
      throw Object.assign(p2, o2, { $fault: d2.getMergedTraits().error, message: f2 }, m2);
    }
    getDefaultContentType() {
      return "application/cbor";
    }
  }, t.buildHttpRpcRequest = async (e2, t2, r2, n2, s2) => {
    const o2 = await e2.endpoint(), { hostname: a2, protocol: c2 = "https", port: u2, path: h2 } = o2, f2 = { protocol: c2, hostname: a2, port: u2, method: "POST", path: h2.endsWith("/") ? h2.slice(0, -1) + r2 : h2 + r2, headers: { ...t2 } };
    if (void 0 !== n2 && (f2.hostname = n2), o2.headers) for (const e3 in o2.headers) l(o2.headers, e3) && (f2.headers[e3] = o2.headers[e3]);
    if (void 0 !== s2) {
      f2.body = s2;
      try {
        f2.headers["content-length"] = String(i(s2));
      } catch (e3) {
      }
    }
    return new d(f2);
  }, t.cbor = se, t.checkCborResponse = (e2) => {
    if ("rpc-v2-cbor" !== String(e2.headers["smithy-protocol"]).toLowerCase()) throw new Error("Malformed RPCv2 CBOR response, status: " + e2.statusCode);
  }, t.dateToTag = oe, t.loadSmithyRpcV2CborErrorCode = ae, t.parseCborBody = ie, t.parseCborErrorBody = async (e2, t2) => {
    const r2 = await ie(e2, t2);
    return r2.message = r2.message ?? r2.Message, r2;
  }, t.tag = C, t.tagSymbol = N;
}, 2798: (e, t, r) => {
  "use strict";
  r.d(t, { n: () => i });
  var n = r(73931), s = r(88141);
  const i = (e2) => {
    e2 = n.HttpRequest.clone(e2);
    for (const t2 of Object.keys(e2.headers)) s.pj.indexOf(t2.toLowerCase()) > -1 && delete e2.headers[t2];
    return e2;
  };
}, 2979: (e, t, r) => {
  "use strict";
  r.d(t, { i: () => s });
  var n = r(93451);
  const s = (e2, t2) => ((e3) => {
    const t3 = e3.split("."), r2 = [];
    for (const s2 of t3) {
      const t4 = s2.indexOf("[");
      if (-1 !== t4) {
        if (s2.indexOf("]") !== s2.length - 1) throw new n.c(`Path: '${e3}' does not end with ']'`);
        const i = s2.slice(t4 + 1, -1);
        if (Number.isNaN(parseInt(i))) throw new n.c(`Invalid array index: '${i}' in path: '${e3}'`);
        0 !== t4 && r2.push(s2.slice(0, t4)), r2.push(i);
      } else r2.push(s2);
    }
    return r2;
  })(t2).reduce((r2, s2) => {
    if ("object" != typeof r2) throw new n.c(`Index '${s2}' in '${t2}' not found in '${JSON.stringify(e2)}'`);
    if (Array.isArray(r2)) {
      const e3 = parseInt(s2);
      return r2[e3 < 0 ? r2.length + e3 : e3];
    }
    return r2[s2];
  }, e2);
}, 3745: (e, t, r) => {
  "use strict";
  r.d(t, { Y: () => o });
  var n = r(64972), s = r(36419), i = r(23694);
  class o {
    mode = n.cm.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(e2, t2) {
      const { rateLimiter: r2 } = t2 ?? {};
      this.rateLimiter = r2 ?? new s.Q(), this.standardRetryStrategy = t2 ? new i.r({ maxAttempts: "number" == typeof e2 ? e2 : 3, ...t2 }) : new i.r(e2);
    }
    async acquireInitialRetryToken(e2) {
      const t2 = this.standardRetryStrategy.acquireInitialRetryToken(e2);
      return await this.rateLimiter.getSendToken(), t2;
    }
    async refreshRetryTokenForRetry(e2, t2) {
      this.rateLimiter.updateClientSendingRate(t2);
      const r2 = this.standardRetryStrategy.refreshRetryTokenForRetry(e2, t2);
      return await this.rateLimiter.getSendToken(), r2;
    }
    recordSuccess(e2) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e2);
    }
    async maxAttemptsProvider() {
      return this.standardRetryStrategy.maxAttempts();
    }
  }
}, 3865: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { fromBase64: () => i, toBase64: () => o.n });
  var n = r(90443);
  const s = /^[A-Za-z0-9+/]*={0,2}$/, i = (e2) => {
    if (3 * e2.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
    if (!s.exec(e2)) throw new TypeError("Invalid base64 string.");
    const t2 = (0, n.s)(e2, "base64");
    return new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength);
  };
  var o = r(55936);
}, 3871: (e, t, r) => {
  "use strict";
  r.d(t, { o: () => s });
  const n = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), s = (e2) => n.test(e2) || e2.startsWith("[") && e2.endsWith("]");
}, 4374: (e, t, r) => {
  "use strict";
  r.d(t, { t: () => i });
  var n = r(93451), s = r(15235);
  const i = (e2, t2) => {
    const r2 = (0, s.O4)(e2, "Endpoint URL", t2);
    if ("string" == typeof r2) try {
      return new URL(r2);
    } catch (e3) {
      throw console.error(`Failed to construct URL with ${r2}`, e3), e3;
    }
    throw new n.c("Endpoint URL must be a string, got " + typeof r2);
  };
}, 4644: (e, t, r) => {
  "use strict";
  r.d(t, { B: () => n });
  const n = (e2, t2, r2) => {
    let n2, s, i, o = false;
    const a = async () => {
      s || (s = e2());
      try {
        n2 = await s, i = true, o = false;
      } finally {
        s = void 0;
      }
      return n2;
    };
    return void 0 === t2 ? async (e3) => (i && !e3?.forceRefresh || (n2 = await a()), n2) : async (e3) => (i && !e3?.forceRefresh || (n2 = await a()), o ? n2 : r2 && !r2(n2) ? (o = true, n2) : t2(n2) ? (await a(), n2) : n2);
  };
}, 5090: (e, t, r) => {
  "use strict";
  r.d(t, { F: () => a });
  var n = r(12046), s = r(19497), i = r(93451), o = r(15235);
  const a = (e2, t2) => {
    const { assign: r2 } = e2;
    if (r2 && r2 in t2.referenceRecord) throw new i.c(`'${r2}' is already defined in Reference Record.`);
    const a2 = (0, o.Tx)(e2, t2);
    t2.logger?.debug?.(`${n.z} evaluateCondition: ${(0, s.m)(e2)} = ${(0, s.m)(a2)}`);
    const c = "" === a2 || !!a2;
    return null != r2 ? { result: c, toAssign: { name: r2, value: a2 } } : { result: c };
  };
}, 5944: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { getSmithyContext: () => n.u, normalizeProvider: () => s.t });
  var n = r(85919), s = r(90570);
}, 6328: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { ALGORITHM_IDENTIFIER: () => s.SG, ALGORITHM_IDENTIFIER_V4A: () => s.ku, ALGORITHM_QUERY_PARAM: () => s.XI, ALWAYS_UNSIGNABLE_HEADERS: () => s.SN, AMZ_DATE_HEADER: () => s.ot, AMZ_DATE_QUERY_PARAM: () => s.Zs, AUTH_HEADER: () => s.H1, CREDENTIAL_QUERY_PARAM: () => s.tI, DATE_HEADER: () => s.J9, EVENT_ALGORITHM_IDENTIFIER: () => s.r1, EXPIRES_QUERY_PARAM: () => s.MS, GENERATED_HEADERS: () => s.pj, HOST_HEADER: () => s.zX, KEY_TYPE_IDENTIFIER: () => s.VQ, MAX_CACHE_SIZE: () => s.g5, MAX_PRESIGNED_TTL: () => s.Uv, PROXY_HEADER_PATTERN: () => s.Ir, REGION_SET_PARAM: () => s.oB, SEC_HEADER_PATTERN: () => s.lP, SHA256_HEADER: () => s.Wd, SIGNATURE_HEADER: () => s.D8, SIGNATURE_QUERY_PARAM: () => s.cR, SIGNED_HEADERS_QUERY_PARAM: () => s.FY, SignatureV4: () => n.B, SignatureV4Base: () => d.y, TOKEN_HEADER: () => s.wE, TOKEN_QUERY_PARAM: () => s.r2, UNSIGNABLE_PATTERNS: () => s.Jp, UNSIGNED_PAYLOAD: () => s.z8, clearCredentialCache: () => u.HK, createScope: () => u.Ds, getCanonicalHeaders: () => i.H, getCanonicalQuery: () => o.$, getPayloadHash: () => a.p, getSigningKey: () => u.Xf, hasHeader: () => h.ou, moveHeadersToQuery: () => c.b, prepareRequest: () => l.n, signatureV4aContainer: () => f.d });
  var n = r(84329), s = r(88141), i = r(37060), o = r(99430), a = r(66220), c = r(8770), l = r(2798), u = r(29134), d = r(43801), h = r(58699), f = r(16936);
}, 6685: (e, t, r) => {
  "use strict";
  r.d(t, { m: () => n });
  const n = {};
}, 6921: (e, t, r) => {
  "use strict";
  const n = { REQUEST_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_REQUEST_ID"), X_RAY_TRACE_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"), TENANT_ID: /* @__PURE__ */ Symbol.for("_AWS_LAMBDA_TENANT_ID") }, s = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
  s || (globalThis.awslambda = globalThis.awslambda || {});
  class i {
    static PROTECTED_KEYS = n;
    isProtectedKey(e2) {
      return Object.values(n).includes(e2);
    }
    getRequestId() {
      return this.get(n.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
      return this.get(n.X_RAY_TRACE_ID);
    }
    getTenantId() {
      return this.get(n.TENANT_ID);
    }
  }
  class o extends i {
    currentContext;
    getContext() {
      return this.currentContext;
    }
    hasContext() {
      return void 0 !== this.currentContext;
    }
    get(e2) {
      return this.currentContext?.[e2];
    }
    set(e2, t2) {
      if (this.isProtectedKey(e2)) throw new Error(`Cannot modify protected Lambda context field: ${String(e2)}`);
      this.currentContext = this.currentContext || {}, this.currentContext[e2] = t2;
    }
    run(e2, t2) {
      return this.currentContext = e2, t2();
    }
  }
  class a extends i {
    als;
    static async create() {
      const e2 = new a(), t2 = await Promise.resolve().then(r.t.bind(r, 16698, 23));
      return e2.als = new t2.AsyncLocalStorage(), e2;
    }
    getContext() {
      return this.als.getStore();
    }
    hasContext() {
      return void 0 !== this.als.getStore();
    }
    get(e2) {
      return this.als.getStore()?.[e2];
    }
    set(e2, t2) {
      if (this.isProtectedKey(e2)) throw new Error(`Cannot modify protected Lambda context field: ${String(e2)}`);
      const r2 = this.als.getStore();
      if (!r2) throw new Error("No context available");
      r2[e2] = t2;
    }
    run(e2, t2) {
      return this.als.run(e2, t2);
    }
  }
  t.A = void 0, (function(e2) {
    let t2 = null;
    e2.getInstanceAsync = async function(e3) {
      return t2 || (t2 = (async () => {
        const t3 = true === e3 || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await a.create() : new o();
        return !s && globalThis.awslambda?.InvokeStore ? globalThis.awslambda.InvokeStore : !s && globalThis.awslambda ? (globalThis.awslambda.InvokeStore = t3, t3) : t3;
      })()), t2;
    }, e2._testing = "1" === process.env.AWS_LAMBDA_BENCHMARK_MODE ? { reset: () => {
      t2 = null, globalThis.awslambda?.InvokeStore && delete globalThis.awslambda.InvokeStore, globalThis.awslambda = { InvokeStore: void 0 };
    } } : void 0;
  })(t.A || (t.A = {}));
}, 7369: (e, t, r) => {
  "use strict";
  r.d(t, { c: () => n });
  class n {
    statusCode;
    reason;
    headers;
    body;
    constructor(e2) {
      this.statusCode = e2.statusCode, this.reason = e2.reason, this.headers = e2.headers || {}, this.body = e2.body;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return "number" == typeof t2.statusCode && "object" == typeof t2.headers;
    }
  }
}, 8770: (e, t, r) => {
  "use strict";
  r.d(t, { b: () => s });
  var n = r(73931);
  const s = (e2, t2 = {}) => {
    const { headers: r2, query: s2 = {} } = n.HttpRequest.clone(e2);
    for (const e3 of Object.keys(r2)) {
      const n2 = e3.toLowerCase();
      ("x-amz-" === n2.slice(0, 6) && !t2.unhoistableHeaders?.has(n2) || t2.hoistableHeaders?.has(n2)) && (s2[e3] = r2[e3], delete r2[e3]);
    }
    return { ...e2, headers: r2, query: s2 };
  };
}, 12046: (e, t, r) => {
  "use strict";
  r.d(t, { z: () => n });
  const n = "endpoints";
}, 14074: (e, t, r) => {
  "use strict";
  r.d(t, { s: () => m });
  var n = r(12046), s = r(19497), i = r(93451), o = r(5090);
  const a = (e2 = [], t2) => {
    const r2 = {}, i2 = { ...t2, referenceRecord: { ...t2.referenceRecord } };
    let a2 = false;
    for (const c2 of e2) {
      const { result: e3, toAssign: l2 } = (0, o.F)(c2, i2);
      if (!e3) return { result: e3 };
      l2 && (a2 = true, r2[l2.name] = l2.value, i2.referenceRecord[l2.name] = l2.value, t2.logger?.debug?.(`${n.z} assign: ${l2.name} := ${(0, s.m)(l2.value)}`));
    }
    return a2 ? { result: true, referenceRecord: r2 } : { result: true };
  };
  var c = r(20961), l = r(77330), u = r(4374);
  const d = (e2, t2) => {
    const { conditions: r2, endpoint: i2 } = e2, { result: o2, referenceRecord: d2 } = a(r2, t2);
    if (!o2) return;
    const h2 = d2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...d2 } } : t2, { url: f2, properties: p2, headers: g2 } = i2;
    t2.logger?.debug?.(`${n.z} Resolving endpoint from template: ${(0, s.m)(i2)}`);
    const m2 = { url: (0, u.t)(f2, h2) };
    return null != g2 && (m2.headers = (0, c.w)(g2, h2)), null != p2 && (m2.properties = (0, l.Fb)(p2, h2)), m2;
  };
  var h = r(15235);
  const f = (e2, t2) => {
    const { conditions: r2, error: n2 } = e2, { result: s2, referenceRecord: o2 } = a(r2, t2);
    if (!s2) return;
    const c2 = o2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...o2 } } : t2;
    throw new i.c((0, h.O4)(n2, "Error", c2));
  }, p = (e2, t2) => {
    for (const r2 of e2) if ("endpoint" === r2.type) {
      const e3 = d(r2, t2);
      if (e3) return e3;
    } else if ("error" === r2.type) f(r2, t2);
    else {
      if ("tree" !== r2.type) throw new i.c(`Unknown endpoint rule: ${r2}`);
      {
        const e3 = g.evaluateTreeRule(r2, t2);
        if (e3) return e3;
      }
    }
    throw new i.c("Rules evaluation failed");
  }, g = { evaluateRules: p, evaluateTreeRule: (e2, t2) => {
    const { conditions: r2, rules: n2 } = e2, { result: s2, referenceRecord: i2 } = a(r2, t2);
    if (!s2) return;
    const o2 = i2 ? { ...t2, referenceRecord: { ...t2.referenceRecord, ...i2 } } : t2;
    return g.evaluateRules(n2, o2);
  } }, m = (e2, t2) => {
    const { endpointParams: r2, logger: o2 } = t2, { parameters: a2, rules: c2 } = e2;
    t2.logger?.debug?.(`${n.z} Initial EndpointParams: ${(0, s.m)(r2)}`);
    for (const e3 in a2) {
      const t3 = a2[e3], n2 = r2[e3];
      if (null != n2 || null == t3.default) {
        if (t3.required && null == n2) throw new i.c(`Missing required parameter: '${e3}'`);
      } else r2[e3] = t3.default;
    }
    const l2 = p(c2, { endpointParams: r2, logger: o2, referenceRecord: {} });
    return t2.logger?.debug?.(`${n.z} Resolved endpoint: ${(0, s.m)(l2)}`), l2;
  };
}, 15235: (e, t, r) => {
  "use strict";
  r.d(t, { Tx: () => f, O4: () => h });
  var n = r(93451), s = r(6685);
  var i = r(2979);
  var o = r(62340);
  var a = r(67857), c = r(3871);
  const l = { [a.U.HTTP]: 80, [a.U.HTTPS]: 443 };
  const u = { booleanEquals: (e2, t2) => e2 === t2, coalesce: function(...e2) {
    for (const t2 of e2) if (null != t2) return t2;
  }, getAttr: i.i, isSet: (e2) => null != e2, isValidHostLabel: o.X, ite: function(e2, t2, r2) {
    return e2 ? t2 : r2;
  }, not: (e2) => !e2, parseURL: (e2) => {
    const t2 = (() => {
      try {
        if (e2 instanceof URL) return e2;
        if ("object" == typeof e2 && "hostname" in e2) {
          const { hostname: t3, port: r3, protocol: n3 = "", path: s3 = "", query: i3 = {} } = e2, o3 = new URL(`${n3}//${t3}${r3 ? `:${r3}` : ""}${s3}`);
          return o3.search = Object.entries(i3).map(([e3, t4]) => `${e3}=${t4}`).join("&"), o3;
        }
        return new URL(e2);
      } catch (e3) {
        return null;
      }
    })();
    if (!t2) return console.error(`Unable to parse ${JSON.stringify(e2)} as a whatwg URL.`), null;
    const r2 = t2.href, { host: n2, hostname: s2, pathname: i2, protocol: o2, search: u2 } = t2;
    if (u2) return null;
    const d2 = o2.slice(0, -1);
    if (!Object.values(a.U).includes(d2)) return null;
    const h2 = (0, c.o)(s2);
    return { scheme: d2, authority: `${n2}${r2.includes(`${n2}:${l[d2]}`) || "string" == typeof e2 && e2.includes(`${n2}:${l[d2]}`) ? `:${l[d2]}` : ""}`, path: i2, normalizedPath: i2.endsWith("/") ? i2 : `${i2}/`, isIp: h2 };
  }, split: function(e2, t2, r2) {
    if (1 === r2) return [e2];
    if ("" === e2) return [""];
    const n2 = e2.split(t2);
    return 0 === r2 ? n2 : n2.slice(0, r2 - 1).concat(n2.slice(1).join(t2));
  }, stringEquals: (e2, t2) => e2 === t2, substring: (e2, t2, r2, n2) => null == e2 || t2 >= r2 || e2.length < r2 || /[^\u0000-\u007f]/.test(e2) ? null : n2 ? e2.substring(e2.length - r2, e2.length - t2) : e2.substring(t2, r2), uriEncode: (e2) => encodeURIComponent(e2).replace(/[!*'()]/g, (e3) => `%${e3.charCodeAt(0).toString(16).toUpperCase()}`) };
  var d = r(26713);
  const h = (e2, t2, r2) => {
    if ("string" == typeof e2) return (0, d.M)(e2, r2);
    if (e2.fn) return p.callFunction(e2, r2);
    if (e2.ref) return (({ ref: e3 }, t3) => t3.referenceRecord[e3] ?? t3.endpointParams[e3])(e2, r2);
    throw new n.c(`'${t2}': ${String(e2)} is not a string, function or reference.`);
  }, f = ({ fn: e2, argv: t2 }, r2) => {
    const n2 = Array(t2.length);
    for (let e3 = 0; e3 < n2.length; ++e3) {
      const s2 = t2[e3];
      n2[e3] = "boolean" == typeof s2 || "number" == typeof s2 ? s2 : p.evaluateExpression(s2, "arg", r2);
    }
    const i2 = e2.indexOf(".");
    if (-1 !== i2) {
      const t3 = s.m[e2.slice(0, i2)], r3 = t3?.[e2.slice(i2 + 1)];
      if ("function" == typeof r3) return r3(...n2);
    }
    const o2 = u[e2];
    if ("function" == typeof o2) return o2(...n2);
    throw new Error(`function ${e2} not loaded in endpointFunctions.`);
  }, p = { evaluateExpression: h, callFunction: f };
}, 15725: (e, t, r) => {
  "use strict";
  r.d(t, { F: () => s });
  var n = r(6846);
  const s = (e2) => "string" == typeof e2 ? (0, n.a)(e2) : ArrayBuffer.isView(e2) ? new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e2);
}, 16936: (e, t, r) => {
  "use strict";
  r.d(t, { d: () => n });
  const n = { SignatureV4a: null };
}, 17512: (e, t, r) => {
  "use strict";
  r.d(t, { f: () => o });
  var n = r(57075), s = r(81284);
  const i = 6e3;
  async function o(e2, t2, r2 = i, o2 = false) {
    const a = t2.headers, c = a ? a.Expect || a.expect : void 0;
    let l = -1, u = true;
    o2 || "100-continue" !== c || (u = await Promise.race([new Promise((e3) => {
      l = Number(s.N.setTimeout(() => e3(true), Math.max(i, r2)));
    }), new Promise((t3) => {
      e2.on("continue", () => {
        s.N.clearTimeout(l), t3(true);
      }), e2.on("response", () => {
        s.N.clearTimeout(l), t3(false);
      }), e2.on("error", () => {
        s.N.clearTimeout(l), t3(false);
      });
    })])), u && (function(e3, t3) {
      if (t3 instanceof n.Readable) return void t3.pipe(e3);
      if (t3) {
        const r3 = Buffer.isBuffer(t3);
        if (r3 || "string" == typeof t3) return void (r3 && 0 === t3.byteLength ? e3.end() : e3.end(t3));
        const n2 = t3;
        return "object" == typeof n2 && n2.buffer && "number" == typeof n2.byteOffset && "number" == typeof n2.byteLength ? void e3.end(Buffer.from(n2.buffer, n2.byteOffset, n2.byteLength)) : void e3.end(Buffer.from(t3));
      }
      e3.end();
    })(e2, t2.body);
  }
}, 18020: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { AdaptiveRetryStrategy: () => n.Y, ConfiguredRetryStrategy: () => o, DEFAULT_MAX_ATTEMPTS: () => c.Gz, DEFAULT_RETRY_DELAY_BASE: () => l.bp, DEFAULT_RETRY_MODE: () => c.L0, DefaultRateLimiter: () => a.Q, INITIAL_RETRY_TOKENS: () => l.Df, INVOCATION_ID_HEADER: () => l.l5, MAXIMUM_RETRY_DELAY: () => l.G8, NO_RETRY_INCREMENT: () => l.XP, REQUEST_HEADER: () => l.ok, RETRY_COST: () => l.XS, RETRY_MODES: () => c.cm, Retry: () => s.f, StandardRetryStrategy: () => i.r, THROTTLING_RETRY_DELAY_BASE: () => l.jh, TIMEOUT_RETRY_COST: () => l.Rn });
  var n = r(3745), s = r(79892), i = r(23694);
  class o extends i.r {
    computeNextBackoffDelay;
    constructor(e2, t2 = s.f.delay()) {
      super("function" == typeof e2 ? e2 : async () => e2), this.computeNextBackoffDelay = "number" == typeof t2 ? () => t2 : t2;
    }
    async refreshRetryTokenForRetry(e2, t2) {
      const r2 = await super.refreshRetryTokenForRetry(e2, t2);
      return r2.getRetryDelay = () => this.computeNextBackoffDelay(r2.getRetryCount()), r2;
    }
  }
  var a = r(36419), c = r(64972), l = r(51181);
}, 19497: (e, t, r) => {
  "use strict";
  function n(e2) {
    return "object" != typeof e2 || null == e2 ? e2 : "ref" in e2 ? `$${n(e2.ref)}` : "fn" in e2 ? `${e2.fn}(${(e2.argv || []).map(n).join(", ")})` : JSON.stringify(e2, null, 2);
  }
  r.d(t, { m: () => n });
}, 20753: (e, t, r) => {
  "use strict";
  r.d(t, { w: () => h, $: () => g });
  var n = r(96851), s = r(73931), i = r(1024);
  const o = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  var a = r(74459), c = r(44708), l = r.n(c), u = r(81284);
  var d = r(17512);
  const h = 0;
  let f, p;
  class g {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = false;
    metadata = { handlerProtocol: "http/1.1" };
    static create(e2) {
      return "function" == typeof e2?.handle ? e2 : new g(e2);
    }
    static checkSocketUsage(e2, t2, r2 = console) {
      const { sockets: s2, requests: i2, maxSockets: o2 } = e2;
      if ("number" != typeof o2 || o2 === 1 / 0) return t2;
      if (Date.now() - 15e3 < t2) return t2;
      if (s2 && i2) for (const e3 in s2) {
        if (!(0, n.hasOwn)(s2, e3)) continue;
        const t3 = s2[e3]?.length ?? 0, a2 = i2[e3]?.length ?? 0;
        if (t3 >= o2 && a2 >= 2 * o2) return r2?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${t3} and ${a2} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now();
      }
      return t2;
    }
    constructor(e2) {
      this.configProvider = new Promise((t2, r2) => {
        "function" == typeof e2 ? e2().then((e3) => {
          t2(this.resolveDefaultConfig(e3));
        }).catch(r2) : t2(this.resolveDefaultConfig(e2));
      });
    }
    destroy() {
      this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(e2, { abortSignal: t2, requestTimeout: r2 } = {}) {
      this.config || (this.config = await this.configProvider);
      const n2 = this.config, c2 = n2.logger, h2 = "https:" === e2.protocol;
      return h2 || this.config.httpAgent || (this.config.httpAgent = await this.config.httpAgentProvider()), new Promise((m, y) => {
        let w, S = -1, b = -1, E = -1, v = -1, x = -1;
        const T = () => {
          u.N.clearTimeout(S), u.N.clearTimeout(b), u.N.clearTimeout(E), u.N.clearTimeout(v), u.N.clearTimeout(x);
        }, A = async (e3) => {
          await w, T(), y(e3);
        };
        if (t2?.aborted) {
          const e3 = (0, i.F)(t2);
          return void A(e3);
        }
        const N = e2.headers, C = !!N && "100-continue" === (N.Expect ?? N.expect);
        let _ = h2 ? n2.httpsAgent : n2.httpAgent;
        C && !this.externalAgent && (_ = new (h2 ? l().Agent : f)({ keepAlive: false, maxSockets: 1 / 0 })), S = u.N.setTimeout(() => {
          this.socketWarningTimestamp = g.checkSocketUsage(_, this.socketWarningTimestamp, c2);
        }, n2.socketAcquisitionWarningTimeout ?? (n2.requestTimeout ?? 2e3) + (n2.connectionTimeout ?? 1e3));
        const R = e2.query ? (0, s.buildQueryString)(e2.query) : "";
        let I;
        if (null != e2.username || null != e2.password) {
          I = `${e2.username ?? ""}:${e2.password ?? ""}`;
        }
        let D = e2.path;
        R && (D += `?${R}`), e2.fragment && (D += `#${e2.fragment}`);
        let k = e2.hostname ?? "";
        k = "[" === k[0] && k.endsWith("]") ? e2.hostname.slice(1, -1) : e2.hostname;
        const O = { headers: e2.headers, host: k, method: e2.method, path: D, port: e2.port, agent: _, auth: I }, M = (h2 ? l().request : p)(O, (e3) => {
          (async (e4) => {
            await w, T(), m(e4);
          })({ response: new s.HttpResponse({ statusCode: e3.statusCode || -1, reason: e3.statusMessage, headers: (0, a.u)(e3.headers), body: e3 }) });
        });
        if (M.on("error", (e3) => {
          o.includes(e3.code) ? A(Object.assign(e3, { name: "TimeoutError" })) : A(e3);
        }), t2) {
          const e3 = () => {
            M.destroy();
            const e4 = (0, i.F)(t2);
            A(e4);
          };
          if ("function" == typeof t2.addEventListener) {
            const r3 = t2;
            r3.addEventListener("abort", e3, { once: true }), M.once("close", () => r3.removeEventListener("abort", e3));
          } else t2.onabort = e3;
        }
        const P = r2 ?? n2.requestTimeout;
        b = ((e3, t3, r3 = 0) => {
          if (!r3) return -1;
          const n3 = (n4) => {
            const s2 = u.N.setTimeout(() => {
              e3.destroy(), t3(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r3} ms.`), { name: "TimeoutError" }));
            }, r3 - n4), i2 = (e4) => {
              e4?.connecting ? e4.on("connect", () => {
                u.N.clearTimeout(s2);
              }) : u.N.clearTimeout(s2);
            };
            e3.socket ? i2(e3.socket) : e3.on("socket", i2);
          };
          return r3 < 2e3 ? (n3(0), 0) : u.N.setTimeout(n3.bind(null, 1e3), 1e3);
        })(M, A, n2.connectionTimeout), E = ((e3, t3, r3 = 0, n3, s2) => r3 ? u.N.setTimeout(() => {
          let i2 = `@smithy/node-http-handler - [${n3 ? "ERROR" : "WARN"}] a request has exceeded the configured ${r3} ms requestTimeout.`;
          if (n3) {
            const r4 = Object.assign(new Error(i2), { name: "TimeoutError", code: "ETIMEDOUT" });
            e3.destroy(r4), t3(r4);
          } else i2 += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", s2?.warn?.(i2);
        }, r3) : -1)(M, A, P, n2.throwOnRequestTimeout, c2 ?? console), v = ((e3, t3, r3 = 0) => {
          const n3 = (n4) => {
            const s2 = r3 - n4, i2 = () => {
              e3.destroy(), t3(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${r3} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
            };
            e3.socket ? (e3.socket.setTimeout(s2, i2), e3.on("close", () => e3.socket?.removeListener("timeout", i2))) : e3.setTimeout(s2, i2);
          };
          return 0 < r3 && r3 < 6e3 ? (n3(0), 0) : u.N.setTimeout(n3.bind(null, 0 === r3 ? 0 : 3e3), 3e3);
        })(M, A, n2.socketTimeout);
        const $ = O.agent;
        "object" == typeof $ && "keepAlive" in $ && (x = ((e3, { keepAlive: t3, keepAliveMsecs: r3 }, n3 = 3e3) => {
          if (true !== t3) return -1;
          const s2 = () => {
            e3.socket ? e3.socket.setKeepAlive(t3, r3 || 0) : e3.on("socket", (e4) => {
              e4.setKeepAlive(t3, r3 || 0);
            });
          };
          return 0 === n3 ? (s2(), 0) : u.N.setTimeout(s2, n3);
        })(M, { keepAlive: $.keepAlive, keepAliveMsecs: $.keepAliveMsecs })), w = (0, d.f)(M, e2, P, this.externalAgent).catch((e3) => (T(), y(e3)));
      });
    }
    updateHttpClientConfig(e2, t2) {
      this.config = void 0, this.configProvider = this.configProvider.then((r2) => e2 === /* @__PURE__ */ Symbol.for("logger") ? { ...r2, logger: r2.logger ?? t2 } : { ...r2, [e2]: t2 });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    resolveDefaultConfig(e2) {
      const { requestTimeout: t2, connectionTimeout: n2, socketTimeout: s2, socketAcquisitionWarningTimeout: i2, httpAgent: o2, httpsAgent: a2, throwOnRequestTimeout: c2, logger: u2 } = e2 || {}, d2 = true;
      return { connectionTimeout: n2, requestTimeout: t2, socketTimeout: s2, socketAcquisitionWarningTimeout: i2, throwOnRequestTimeout: c2, httpAgentProvider: async () => {
        const e3 = await Promise.resolve().then(r.t.bind(r, 37067, 23)), { Agent: t3, request: n3 } = e3.default ?? e3;
        return p = n3, f = t3, o2 instanceof f || "function" == typeof o2?.destroy ? (this.externalAgent = true, o2) : new f({ keepAlive: d2, maxSockets: 50, ...o2 });
      }, httpsAgent: (() => a2 instanceof l().Agent || "function" == typeof a2?.destroy ? (this.externalAgent = true, a2) : new (l()).Agent({ keepAlive: d2, maxSockets: 50, ...a2 }))(), logger: u2 };
    }
  }
}, 20961: (e, t, r) => {
  "use strict";
  r.d(t, { w: () => i });
  var n = r(93451), s = r(15235);
  const i = (e2, t2) => Object.entries(e2 ?? {}).reduce((e3, [r2, i2]) => (e3[r2] = i2.map((e4) => {
    const i3 = (0, s.O4)(e4, "Header value entry", t2);
    if ("string" != typeof i3) throw new n.c(`Header '${r2}' value '${i3}' is not a string`);
    return i3;
  }), e3), {});
}, 23170: (e, t, r) => {
  "use strict";
  r.d(t, { D: () => i, b: () => s });
  var n = r(55909);
  const s = void 0;
  function i(e2) {
    const t2 = (0, n.normalizeProvider)(e2.userAgentAppId ?? s), { customUserAgent: r2 } = e2;
    return Object.assign(e2, { customUserAgent: "string" == typeof r2 ? [[r2]] : r2, userAgentAppId: async () => {
      const r3 = await t2();
      if (!(function(e3) {
        return void 0 === e3 || "string" == typeof e3 && e3.length <= 50;
      })(r3)) {
        const t3 = "NoOpLogger" !== e2.logger?.constructor?.name && e2.logger ? e2.logger : console;
        "string" != typeof r3 ? t3?.warn("userAgentAppId must be a string or undefined.") : r3.length > 50 && t3?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
      }
      return r3;
    } });
  }
}, 23296: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { Hash: () => a });
  var n = r(90443), s = r(15725), i = r(20181), o = r(76982);
  class a {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e2, t2) {
      this.algorithmIdentifier = e2, this.secret = t2, this.reset();
    }
    update(e2, t2) {
      this.hash.update((0, s.F)(c(e2, t2)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret ? (0, o.createHmac)(this.algorithmIdentifier, c(this.secret)) : (0, o.createHash)(this.algorithmIdentifier);
    }
  }
  function c(e2, t2) {
    return i.Buffer.isBuffer(e2) ? e2 : "string" == typeof e2 ? (0, n.s)(e2, t2) : ArrayBuffer.isView(e2) ? (0, n.Q)(e2.buffer, e2.byteOffset, e2.byteLength) : (0, n.Q)(e2);
  }
}, 23694: (e, t, r) => {
  "use strict";
  r.d(t, { r: () => d });
  var n = r(64972), s = r(51181), i = r(79892);
  class o {
    x = i.f.delay();
    computeNextBackoffDelay(e2) {
      const t2 = Math.random() * Math.min(this.x * 2 ** e2, s.G8);
      return Math.floor(t2);
    }
    setDelayBase(e2) {
      this.x = e2;
    }
  }
  class a {
    delay;
    count;
    cost;
    longPoll;
    constructor(e2, t2, r2, n2) {
      this.delay = e2, this.count = t2, this.cost = r2, this.longPoll = n2;
    }
    getRetryCount() {
      return this.count;
    }
    getRetryDelay() {
      return Math.min(s.G8, this.delay);
    }
    getRetryCost() {
      return this.cost;
    }
    isLongPoll() {
      return this.longPoll;
    }
  }
  const c = 1, l = 2, u = 3;
  class d {
    mode = n.cm.STANDARD;
    capacity = s.Df;
    retryBackoffStrategy;
    maxAttemptsProvider;
    baseDelay;
    constructor(e2) {
      "number" == typeof e2 ? this.maxAttemptsProvider = async () => e2 : "function" == typeof e2 ? this.maxAttemptsProvider = e2 : e2 && "object" == typeof e2 && (this.maxAttemptsProvider = async () => e2.maxAttempts, this.baseDelay = e2.baseDelay, this.retryBackoffStrategy = e2.backoff), this.maxAttemptsProvider ??= async () => n.Gz, this.baseDelay ??= i.f.delay(), this.retryBackoffStrategy ??= new o();
    }
    async acquireInitialRetryToken(e2) {
      return new a(i.f.delay(), 0, void 0, i.f.v2026 && e2.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(e2, t2) {
      const r2 = await this.getMaxAttempts(), n2 = this.retryCode(e2, t2, r2), s2 = 0 === n2, o2 = e2.isLongPoll?.();
      if (s2 || o2) {
        const r3 = t2.errorType;
        this.retryBackoffStrategy.setDelayBase("THROTTLING" === r3 ? i.f.throttlingDelay() : this.baseDelay);
        const c2 = this.retryBackoffStrategy.computeNextBackoffDelay(e2.getRetryCount());
        let l2 = c2;
        if (t2.retryAfterHint instanceof Date && (l2 = Math.max(c2, Math.min(t2.retryAfterHint.getTime() - Date.now(), c2 + 5e3))), s2) {
          const t3 = this.getCapacityCost(r3);
          return this.capacity -= t3, new a(l2, e2.getRetryCount() + 1, t3, e2.isLongPoll?.() ?? false);
        }
        throw Object.assign(new Error("No retry token available"), { $backoff: i.f.v2026 && n2 === u && o2 ? l2 : 0 });
      }
      throw new Error("No retry token available");
    }
    recordSuccess(e2) {
      this.capacity = Math.min(s.Df, this.capacity + (e2.getRetryCost() ?? s.XP));
    }
    getCapacity() {
      return this.capacity;
    }
    async maxAttempts() {
      return this.maxAttemptsProvider();
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (e2) {
        return console.warn(`Max attempts provider could not resolve. Using default of ${n.Gz}`), n.Gz;
      }
    }
    retryCode(e2, t2, r2) {
      const n2 = e2.getRetryCount() + 1, s2 = this.isRetryableError(t2.errorType) ? 0 : c, i2 = n2 < r2 ? 0 : l, o2 = this.capacity >= this.getCapacityCost(t2.errorType) ? 0 : u;
      return s2 || i2 || o2;
    }
    getCapacityCost(e2) {
      return e2 === i.f.modifiedCostType() ? i.f.throttlingCost() : i.f.cost();
    }
    isRetryableError(e2) {
      return "THROTTLING" === e2 || "TRANSIENT" === e2;
    }
  }
}, 24060: (e, t, r) => {
  "use strict";
  r.d(t, { Fc: () => n, GG: () => i, OR: () => s, zH: () => o });
  const n = "AWS_REGION", s = "region", i = { environmentVariableSelector: (e2) => e2[n], configFileSelector: (e2) => e2[s], default: () => {
    throw new Error("Region is missing");
  } }, o = { preferredFile: "credentials" };
}, 26713: (e, t, r) => {
  "use strict";
  r.d(t, { M: () => s });
  var n = r(2979);
  const s = (e2, t2) => {
    const r2 = [], { referenceRecord: s2, endpointParams: i } = t2;
    let o = 0;
    for (; o < e2.length; ) {
      const t3 = e2.indexOf("{", o);
      if (-1 === t3) {
        r2.push(e2.slice(o));
        break;
      }
      r2.push(e2.slice(o, t3));
      const a = e2.indexOf("}", t3);
      if (-1 === a) {
        r2.push(e2.slice(t3));
        break;
      }
      "{" === e2[t3 + 1] && "}" === e2[a + 1] && (r2.push(e2.slice(t3 + 1, a)), o = a + 2);
      const c = e2.substring(t3 + 1, a);
      if (c.includes("#")) {
        const [e3, t4] = c.split("#");
        r2.push((0, n.i)(s2[e3] ?? i[e3], t4));
      } else r2.push(s2[c] ?? i[c]);
      o = a + 1;
    }
    return r2.join("");
  };
}, 28311: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { loadConfig: () => n.Z });
  var n = r(56508);
}, 29134: (e, t, r) => {
  "use strict";
  r.d(t, { Ds: () => a, HK: () => l, Xf: () => c });
  var n = r(96851), s = r(88141);
  const i = {}, o = [], a = (e2, t2, r2) => `${e2}/${t2}/${r2}/${s.VQ}`, c = async (e2, t2, r2, a2, c2) => {
    const l2 = await u(e2, t2.secretAccessKey, t2.accessKeyId), d = `${r2}:${a2}:${c2}:${(0, n.toHex)(l2)}:${t2.sessionToken}`;
    if (d in i) return i[d];
    for (o.push(d); o.length > s.g5; ) delete i[o.shift()];
    let h = `AWS4${t2.secretAccessKey}`;
    for (const t3 of [r2, a2, c2, s.VQ]) h = await u(e2, h, t3);
    return i[d] = h;
  }, l = () => {
    o.length = 0, Object.keys(i).forEach((e2) => {
      delete i[e2];
    });
  }, u = (e2, t2, r2) => {
    const s2 = new e2(t2);
    return s2.update((0, n.toUint8Array)(r2)), s2.digest();
  };
}, 32022: (e, t, r) => {
  "use strict";
  r.d(t, { Q: () => n });
  const n = (e2, t2, r2) => {
    if (t2 in e2) {
      if ("true" === e2[t2]) return true;
      if ("false" === e2[t2]) return false;
      throw new Error(`Cannot load ${r2} "${t2}". Expected "true" or "false", got ${e2[t2]}.`);
    }
  };
}, 36419: (e, t, r) => {
  "use strict";
  r.d(t, { Q: () => s });
  var n = r(58574);
  class s {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    enabled = false;
    availableTokens = 0;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(e2) {
      this.beta = e2?.beta ?? 0.7, this.minCapacity = e2?.minCapacity ?? 1, this.minFillRate = e2?.minFillRate ?? 0.5, this.scaleConstant = e2?.scaleConstant ?? 0.4, this.smooth = e2?.smooth ?? 0.8, this.lastThrottleTime = this.getCurrentTimeInSeconds(), this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(e2) {
      let t2;
      this.updateMeasuredRate();
      const r2 = e2;
      if ("THROTTLING" === r2?.errorType || (0, n.Qb)(r2?.error ?? e2)) {
        const e3 = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
        this.lastMaxRate = e3, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t2 = this.cubicThrottle(e3), this.enableTokenBucket();
      } else this.calculateTimeWindow(), t2 = this.cubicSuccess(this.getCurrentTimeInSeconds());
      const s2 = Math.min(t2, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(s2);
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async acquireTokenBucket(e2) {
      if (this.enabled) {
        for (this.refillTokenBucket(); e2 > this.availableTokens; ) {
          const t2 = (e2 - this.availableTokens) / this.fillRate * 1e3;
          await new Promise((e3) => s.setTimeoutFn(e3, t2)), this.refillTokenBucket();
        }
        this.availableTokens = this.availableTokens - e2;
      }
    }
    refillTokenBucket() {
      const e2 = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) return void (this.lastTimestamp = e2);
      const t2 = (e2 - this.lastTimestamp) * this.fillRate;
      this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + t2), this.lastTimestamp = e2;
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(e2) {
      return this.getPrecise(e2 * this.beta);
    }
    cubicSuccess(e2) {
      return this.getPrecise(this.scaleConstant * Math.pow(e2 - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(e2) {
      this.refillTokenBucket(), this.fillRate = Math.max(e2, this.minFillRate), this.maxCapacity = Math.max(e2, this.minCapacity), this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
      const e2 = this.getCurrentTimeInSeconds(), t2 = Math.floor(2 * e2) / 2;
      if (this.requestCount++, t2 > this.lastTxRateBucket) {
        const e3 = this.requestCount / (t2 - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(e3 * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t2;
      }
    }
    getPrecise(e2) {
      return parseFloat(e2.toFixed(8));
    }
  }
}, 37060: (e, t, r) => {
  "use strict";
  r.d(t, { H: () => s });
  var n = r(88141);
  const s = ({ headers: e2 }, t2, r2) => {
    const s2 = {};
    for (const i of Object.keys(e2).sort()) {
      if (null == e2[i]) continue;
      const o = i.toLowerCase();
      (o in n.SN || t2?.has(o) || n.Ir.test(o) || n.lP.test(o)) && (!r2 || r2 && !r2.has(o)) || (s2[o] = e2[i].trim().replace(/\s+/g, " "));
    }
    return s2;
  };
}, 39022: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { AdaptiveRetryStrategy: () => S, CONFIG_MAX_ATTEMPTS: () => T, CONFIG_RETRY_MODE: () => _, ENV_MAX_ATTEMPTS: () => x, ENV_RETRY_MODE: () => C, NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => A, NODE_RETRY_MODE_CONFIG_OPTIONS: () => R, StandardRetryStrategy: () => y, defaultDelayDecider: () => g, defaultRetryDecider: () => m, getOmitRetryHeadersPlugin: () => k, getRetryAfterHint: () => L, getRetryPlugin: () => q, omitRetryHeadersMiddleware: () => I, omitRetryHeadersMiddlewareOptions: () => D, resolveRetryConfig: () => N, retryMiddleware: () => U, retryMiddlewareOptions: () => H });
  var n = r(36419), s = r(64972), i = r(50333), o = r(7369), a = r(58574), c = r(51181), l = r(76982), u = r.n(l);
  const d = u().randomUUID.bind(u()), h = Array.from({ length: 256 }, (e2, t2) => t2.toString(16).padStart(2, "0")), f = () => {
    if (d) return d();
    const e2 = new Uint8Array(16);
    return crypto.getRandomValues(e2), e2[6] = 15 & e2[6] | 64, e2[8] = 63 & e2[8] | 128, h[e2[0]] + h[e2[1]] + h[e2[2]] + h[e2[3]] + "-" + h[e2[4]] + h[e2[5]] + "-" + h[e2[6]] + h[e2[7]] + "-" + h[e2[8]] + h[e2[9]] + "-" + h[e2[10]] + h[e2[11]] + h[e2[12]] + h[e2[13]] + h[e2[14]] + h[e2[15]];
  }, p = (e2) => e2 instanceof Error ? e2 : e2 instanceof Object ? Object.assign(new Error(), e2) : "string" == typeof e2 ? new Error(e2) : new Error(`AWS SDK error wrapper for ${e2}`), g = (e2, t2) => Math.floor(Math.min(c.G8, Math.random() * 2 ** t2 * e2)), m = (e2) => !!e2 && ((0, a.S0)(e2) || (0, a.h5)(e2) || (0, a.Qb)(e2) || (0, a.bV)(e2));
  class y {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = s.cm.STANDARD;
    constructor(e2, t2) {
      this.maxAttemptsProvider = e2, this.retryDecider = t2?.retryDecider ?? m, this.delayDecider = t2?.delayDecider ?? g, this.retryQuota = t2?.retryQuota ?? ((e3, t3) => {
        const r2 = e3, n2 = t3?.noRetryIncrement ?? c.XP, s2 = t3?.retryCost ?? c.XS, i2 = t3?.timeoutRetryCost ?? c.Rn;
        let o2 = e3;
        const a2 = (e4) => "TimeoutError" === e4.name ? i2 : s2, l2 = (e4) => a2(e4) <= o2;
        return Object.freeze({ hasRetryTokens: l2, retrieveRetryTokens: (e4) => {
          if (!l2(e4)) throw new Error("No retry token available");
          const t4 = a2(e4);
          return o2 -= t4, t4;
        }, releaseRetryTokens: (e4) => {
          o2 += e4 ?? n2, o2 = Math.min(o2, r2);
        } });
      })(c.Df);
    }
    shouldRetry(e2, t2, r2) {
      return t2 < r2 && this.retryDecider(e2) && this.retryQuota.hasRetryTokens(e2);
    }
    async getMaxAttempts() {
      let e2;
      try {
        e2 = await this.maxAttemptsProvider();
      } catch (t2) {
        e2 = s.Gz;
      }
      return e2;
    }
    async retry(e2, t2, r2) {
      let n2, s2 = 0, o2 = 0;
      const l2 = await this.getMaxAttempts(), { request: u2 } = t2;
      for (i.K.isInstance(u2) && (u2.headers[c.l5] = f()); ; ) try {
        i.K.isInstance(u2) && (u2.headers[c.ok] = `attempt=${s2 + 1}; max=${l2}`), r2?.beforeRequest && await r2.beforeRequest();
        const { response: a2, output: d2 } = await e2(t2);
        return r2?.afterRequest && r2.afterRequest(a2), this.retryQuota.releaseRetryTokens(n2), d2.$metadata.attempts = s2 + 1, d2.$metadata.totalRetryDelay = o2, { response: a2, output: d2 };
      } catch (e3) {
        const t3 = p(e3);
        if (s2++, this.shouldRetry(t3, s2, l2)) {
          n2 = this.retryQuota.retrieveRetryTokens(t3);
          const e4 = this.delayDecider((0, a.Qb)(t3) ? c.jh : c.bp, s2), r3 = w(t3.$response), i2 = Math.max(r3 || 0, e4);
          o2 += i2, await new Promise((e5) => setTimeout(e5, i2));
          continue;
        }
        throw t3.$metadata || (t3.$metadata = {}), t3.$metadata.attempts = s2, t3.$metadata.totalRetryDelay = o2, t3;
      }
    }
  }
  const w = (e2) => {
    if (!o.c.isInstance(e2)) return;
    const t2 = Object.keys(e2.headers).find((e3) => "retry-after" === e3.toLowerCase());
    if (!t2) return;
    const r2 = e2.headers[t2], n2 = Number(r2);
    if (!Number.isNaN(n2)) return 1e3 * n2;
    return new Date(r2).getTime() - Date.now();
  };
  class S extends y {
    rateLimiter;
    constructor(e2, t2) {
      const { rateLimiter: r2, ...i2 } = t2 ?? {};
      super(e2, i2), this.rateLimiter = r2 ?? new n.Q(), this.mode = s.cm.ADAPTIVE;
    }
    async retry(e2, t2) {
      return super.retry(e2, t2, { beforeRequest: async () => this.rateLimiter.getSendToken(), afterRequest: (e3) => {
        this.rateLimiter.updateClientSendingRate(e3);
      } });
    }
  }
  var b = r(90570), E = r(3745), v = r(23694);
  const x = "AWS_MAX_ATTEMPTS", T = "max_attempts", A = { environmentVariableSelector: (e2) => {
    const t2 = e2[x];
    if (!t2) return;
    const r2 = parseInt(t2);
    if (Number.isNaN(r2)) throw new Error(`Environment variable ${x} mast be a number, got "${t2}"`);
    return r2;
  }, configFileSelector: (e2) => {
    const t2 = e2[T];
    if (!t2) return;
    const r2 = parseInt(t2);
    if (Number.isNaN(r2)) throw new Error(`Shared config file entry ${T} mast be a number, got "${t2}"`);
    return r2;
  }, default: s.Gz }, N = (e2) => {
    const { retryStrategy: t2, retryMode: r2 } = e2, n2 = (0, b.t)(e2.maxAttempts ?? s.Gz);
    let i2 = t2 ? Promise.resolve(t2) : void 0;
    return Object.assign(e2, { maxAttempts: n2, retryStrategy: () => i2 ??= (async () => await (0, b.t)(r2)() === s.cm.ADAPTIVE ? new E.Y(n2) : new v.r(n2))() });
  }, C = "AWS_RETRY_MODE", _ = "retry_mode", R = { environmentVariableSelector: (e2) => e2[C], configFileSelector: (e2) => e2[_], default: s.L0 }, I = () => (e2) => async (t2) => {
    const { request: r2 } = t2;
    return i.K.isInstance(r2) && (delete r2.headers[c.l5], delete r2.headers[c.ok]), e2(t2);
  }, D = { name: "omitRetryHeadersMiddleware", tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"], relation: "before", toMiddleware: "awsAuthMiddleware", override: true }, k = (e2) => ({ applyToStack: (e3) => {
    e3.addRelativeTo(I(), D);
  } });
  var O = r(65844), M = r(2203);
  const P = (e2) => e2?.body instanceof M.Readable || "undefined" != typeof ReadableStream && e2?.body instanceof ReadableStream;
  var $ = r(96851);
  function j(e2, t2) {
    if (o.c.isInstance(e2)) for (const r2 of Object.keys(e2.headers)) {
      const n2 = r2.toLowerCase();
      if ("retry-after" === n2) {
        const n3 = e2.headers[r2];
        let s2 = NaN;
        if (n3.endsWith("GMT")) try {
          s2 = ((0, $.parseRfc7231DateTime)(n3).getTime() - Date.now()) / 1e3;
        } catch (e3) {
          t2?.trace?.("Failed to parse retry-after header"), t2?.trace?.(e3);
        }
        else n3.match(/ GMT, ((\d+)|(\d+\.\d+))$/) ? s2 = Number(n3.match(/ GMT, ([\d.]+)$/)?.[1]) : n3.match(/^((\d+)|(\d+\.\d+))$/) ? s2 = Number(n3) : Date.parse(n3) >= Date.now() && (s2 = (Date.parse(n3) - Date.now()) / 1e3);
        if (isNaN(s2)) return;
        return new Date(Date.now() + 1e3 * s2);
      }
      if ("x-amz-retry-after" === n2) {
        const n3 = e2.headers[r2], s2 = Number(n3);
        return isNaN(s2) ? void t2?.trace?.(`Failed to parse x-amz-retry-after=${n3}`) : new Date(Date.now() + s2);
      }
    }
  }
  function L(e2, t2) {
    return j(e2, t2);
  }
  const U = (e2) => (t2, r2) => async (n2) => {
    let s2 = await e2.retryStrategy();
    const o2 = await e2.maxAttempts();
    if (!F(s2)) return s2?.mode && (r2.userAgent = [...r2.userAgent || [], ["cfg/retry-mode", s2.mode]]), s2.retry(t2, n2);
    {
      let a2 = await s2.acquireInitialRetryToken((r2.partition_id ?? "") + (r2.__retryLongPoll ? ":longpoll" : "")), l2 = new Error(), u2 = 0, d2 = 0;
      const { request: h2 } = n2, g2 = i.K.isInstance(h2);
      for (g2 && (h2.headers[c.l5] = f()); ; ) try {
        g2 && (h2.headers[c.ok] = `attempt=${u2 + 1}; max=${o2}`);
        const { response: e3, output: r3 } = await t2(n2);
        return s2.recordSuccess(a2), r3.$metadata.attempts = u2 + 1, r3.$metadata.totalRetryDelay = d2, { response: e3, output: r3 };
      } catch (t3) {
        const n3 = z(t3, e2.logger);
        if (l2 = p(t3), g2 && P(h2)) throw (r2.logger instanceof O.N ? console : r2.logger)?.warn("An error was encountered in a non-retryable streaming request."), l2;
        try {
          a2 = await s2.refreshRetryTokenForRetry(a2, n3);
        } catch (e3) {
          throw "number" == typeof e3.$backoff && await B(e3.$backoff), l2.$metadata || (l2.$metadata = {}), l2.$metadata.attempts = u2 + 1, l2.$metadata.totalRetryDelay = d2, l2;
        }
        u2 = a2.getRetryCount();
        const i2 = a2.getRetryDelay();
        d2 += i2, await B(i2);
      }
    }
  }, B = (e2) => new Promise((t2) => setTimeout(t2, e2)), F = (e2) => void 0 !== e2.acquireInitialRetryToken && void 0 !== e2.refreshRetryTokenForRetry && void 0 !== e2.recordSuccess, z = (e2, t2) => {
    const r2 = { error: e2, errorType: V(e2) }, n2 = j(e2.$response, t2);
    return n2 && (r2.retryAfterHint = n2), r2;
  }, V = (e2) => (0, a.Qb)(e2) ? "THROTTLING" : (0, a.bV)(e2) ? "TRANSIENT" : (0, a.GQ)(e2) ? "SERVER_ERROR" : "CLIENT_ERROR", H = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: true }, q = (e2) => ({ applyToStack: (t2) => {
    t2.add(U(e2), H);
  } });
}, 40619: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { getRecursionDetectionPlugin: () => c, recursionDetectionMiddleware: () => a });
  const n = { step: "build", tags: ["RECURSION_DETECTION"], name: "recursionDetectionMiddleware", override: true, priority: "low" };
  var s = r(6921), i = r(50333);
  const o = "X-Amzn-Trace-Id", a = () => (e2) => async (t2) => {
    const { request: r2 } = t2;
    if (!i.K.isInstance(r2)) return e2(t2);
    const n2 = Object.keys(r2.headers ?? {}).find((e3) => e3.toLowerCase() === o.toLowerCase()) ?? o;
    if (r2.headers.hasOwnProperty(n2)) return e2(t2);
    const a2 = process.env.AWS_LAMBDA_FUNCTION_NAME, c2 = process.env._X_AMZN_TRACE_ID, l = await s.A.getInstanceAsync(), u = l?.getXRayTraceId(), d = u ?? c2, h = (e3) => "string" == typeof e3 && e3.length > 0;
    return h(a2) && h(d) && (r2.headers[o] = d), e2({ ...t2, request: r2 });
  }, c = (e2) => ({ applyToStack: (e3) => {
    e3.add(a(), n);
  } });
}, 43409: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { XmlNode: () => l, XmlText: () => c, parseXML: () => We });
  const n = /[&<>"]/g, s = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function i(e2) {
    return e2.replace(n, (e3) => s[e3]);
  }
  const o = /[&"'<>\r\n\u0085\u2028]/g, a = { "&": "&amp;", '"': "&quot;", "'": "&apos;", "<": "&lt;", ">": "&gt;", "\r": "&#x0D;", "\n": "&#x0A;", "": "&#x85;", "\u2028": "&#x2028;" };
  class c {
    value;
    constructor(e2) {
      this.value = e2;
    }
    toString() {
      return ("" + this.value).replace(o, (e2) => a[e2]);
    }
  }
  class l {
    name;
    children;
    attributes = {};
    static of(e2, t2, r2) {
      const n2 = new l(e2);
      return void 0 !== t2 && n2.addChildNode(new c(t2)), void 0 !== r2 && n2.withName(r2), n2;
    }
    constructor(e2, t2 = []) {
      this.name = e2, this.children = t2;
    }
    withName(e2) {
      return this.name = e2, this;
    }
    addAttribute(e2, t2) {
      return this.attributes[e2] = t2, this;
    }
    addChildNode(e2) {
      return this.children.push(e2), this;
    }
    removeAttribute(e2) {
      return delete this.attributes[e2], this;
    }
    n(e2) {
      return this.name = e2, this;
    }
    c(e2) {
      return this.children.push(e2), this;
    }
    a(e2, t2) {
      return null != t2 && (this.attributes[e2] = t2), this;
    }
    cc(e2, t2, r2 = t2) {
      if (null != e2[t2]) {
        const n2 = l.of(t2, e2[t2]).withName(r2);
        this.c(n2);
      }
    }
    l(e2, t2, r2, n2) {
      if (null != e2[t2]) {
        n2().map((e3) => {
          e3.withName(r2), this.c(e3);
        });
      }
    }
    lc(e2, t2, r2, n2) {
      if (null != e2[t2]) {
        const e3 = n2(), t3 = new l(r2);
        e3.map((e4) => {
          t3.c(e4);
        }), this.c(t3);
      }
    }
    toString() {
      const e2 = Boolean(this.children.length);
      let t2 = `<${this.name}`;
      const r2 = this.attributes;
      for (const e3 of Object.keys(r2)) {
        const n2 = r2[e3];
        null != n2 && (t2 += ` ${e3}="${i("" + n2)}"`);
      }
      return t2 + (e2 ? `>${this.children.map((e3) => e3.toString()).join("")}</${this.name}>` : "/>");
    }
  }
  const u = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", d = new RegExp("^" + ("[" + u + "][" + (u + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*") + "$");
  function h(e2, t2) {
    const r2 = [];
    let n2 = t2.exec(e2);
    for (; n2; ) {
      const s2 = [];
      s2.startIndex = t2.lastIndex - n2[0].length;
      const i2 = n2.length;
      for (let e3 = 0; e3 < i2; e3++) s2.push(n2[e3]);
      r2.push(s2), n2 = t2.exec(e2);
    }
    return r2;
  }
  const f = function(e2) {
    const t2 = d.exec(e2);
    return !(null == t2);
  };
  const p = ["hasOwnProperty", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__"], g = ["__proto__", "constructor", "prototype"], m = (e2) => p.includes(e2) ? "__" + e2 : e2, y = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true }, tagValueProcessor: function(e2, t2) {
    return t2;
  }, attributeValueProcessor: function(e2, t2) {
    return t2;
  }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, entityDecoder: null, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(e2, t2, r2) {
    return e2;
  }, captureMetaData: false, maxNestedTags: 100, strictReservedNames: true, jPath: true, onDangerousProperty: m };
  function w(e2, t2) {
    if ("string" != typeof e2) return;
    const r2 = e2.toLowerCase();
    if (p.some((e3) => r2 === e3.toLowerCase())) throw new Error(`[SECURITY] Invalid ${t2}: "${e2}" is a reserved JavaScript keyword that could cause prototype pollution`);
    if (g.some((e3) => r2 === e3.toLowerCase())) throw new Error(`[SECURITY] Invalid ${t2}: "${e2}" is a reserved JavaScript keyword that could cause prototype pollution`);
  }
  function S(e2, t2) {
    return "boolean" == typeof e2 ? { enabled: e2, maxEntitySize: 1e4, maxExpansionDepth: 1e4, maxTotalExpansions: 1 / 0, maxExpandedLength: 1e5, maxEntityCount: 1e3, allowedTags: null, tagFilter: null, appliesTo: "all" } : "object" == typeof e2 && null !== e2 ? { enabled: false !== e2.enabled, maxEntitySize: Math.max(1, e2.maxEntitySize ?? 1e4), maxExpansionDepth: Math.max(1, e2.maxExpansionDepth ?? 1e4), maxTotalExpansions: Math.max(1, e2.maxTotalExpansions ?? 1 / 0), maxExpandedLength: Math.max(1, e2.maxExpandedLength ?? 1e5), maxEntityCount: Math.max(1, e2.maxEntityCount ?? 1e3), allowedTags: e2.allowedTags ?? null, tagFilter: e2.tagFilter ?? null, appliesTo: e2.appliesTo ?? "all" } : S(true);
  }
  const b = function(e2) {
    const t2 = Object.assign({}, y, e2), r2 = [{ value: t2.attributeNamePrefix, name: "attributeNamePrefix" }, { value: t2.attributesGroupName, name: "attributesGroupName" }, { value: t2.textNodeName, name: "textNodeName" }, { value: t2.cdataPropName, name: "cdataPropName" }, { value: t2.commentPropName, name: "commentPropName" }];
    for (const { value: e3, name: t3 } of r2) e3 && w(e3, t3);
    return null === t2.onDangerousProperty && (t2.onDangerousProperty = m), t2.processEntities = S(t2.processEntities, t2.htmlEntities), t2.unpairedTagsSet = new Set(t2.unpairedTags), t2.stopNodes && Array.isArray(t2.stopNodes) && (t2.stopNodes = t2.stopNodes.map((e3) => "string" == typeof e3 && e3.startsWith("*.") ? ".." + e3.substring(2) : e3)), t2;
  };
  let E;
  E = "function" != typeof Symbol ? "@@xmlMetadata" : /* @__PURE__ */ Symbol("XML Node Metadata");
  class v {
    constructor(e2) {
      this.tagname = e2, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
    }
    add(e2, t2) {
      "__proto__" === e2 && (e2 = "#__proto__"), this.child.push({ [e2]: t2 });
    }
    addChild(e2, t2) {
      "__proto__" === e2.tagname && (e2.tagname = "#__proto__"), e2[":@"] && Object.keys(e2[":@"]).length > 0 ? this.child.push({ [e2.tagname]: e2.child, ":@": e2[":@"] }) : this.child.push({ [e2.tagname]: e2.child }), void 0 !== t2 && (this.child[this.child.length - 1][E] = { startIndex: t2 });
    }
    static getMetaDataSymbol() {
      return E;
    }
  }
  class x {
    constructor(e2) {
      this.suppressValidationErr = !e2, this.options = e2;
    }
    readDocType(e2, t2) {
      const r2 = /* @__PURE__ */ Object.create(null);
      let n2 = 0;
      if ("O" !== e2[t2 + 3] || "C" !== e2[t2 + 4] || "T" !== e2[t2 + 5] || "Y" !== e2[t2 + 6] || "P" !== e2[t2 + 7] || "E" !== e2[t2 + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
      {
        t2 += 9;
        let s2 = 1, i2 = false, o2 = false, a2 = "";
        for (; t2 < e2.length; t2++) if ("<" !== e2[t2] || o2) if (">" === e2[t2]) {
          if (o2 ? "-" === e2[t2 - 1] && "-" === e2[t2 - 2] && (o2 = false, s2--) : s2--, 0 === s2) break;
        } else "[" === e2[t2] ? i2 = true : a2 += e2[t2];
        else {
          if (i2 && A(e2, "!ENTITY", t2)) {
            let s3, i3;
            if (t2 += 7, [s3, i3, t2] = this.readEntityExp(e2, t2 + 1, this.suppressValidationErr), -1 === i3.indexOf("&")) {
              if (false !== this.options.enabled && null != this.options.maxEntityCount && n2 >= this.options.maxEntityCount) throw new Error(`Entity count (${n2 + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
              r2[s3] = i3, n2++;
            }
          } else if (i2 && A(e2, "!ELEMENT", t2)) {
            t2 += 8;
            const { index: r3 } = this.readElementExp(e2, t2 + 1);
            t2 = r3;
          } else if (i2 && A(e2, "!ATTLIST", t2)) t2 += 8;
          else if (i2 && A(e2, "!NOTATION", t2)) {
            t2 += 9;
            const { index: r3 } = this.readNotationExp(e2, t2 + 1, this.suppressValidationErr);
            t2 = r3;
          } else {
            if (!A(e2, "!--", t2)) throw new Error("Invalid DOCTYPE");
            o2 = true;
          }
          s2++, a2 = "";
        }
        if (0 !== s2) throw new Error("Unclosed DOCTYPE");
      }
      return { entities: r2, i: t2 };
    }
    readEntityExp(e2, t2) {
      const r2 = t2 = T(e2, t2);
      for (; t2 < e2.length && !/\s/.test(e2[t2]) && '"' !== e2[t2] && "'" !== e2[t2]; ) t2++;
      let n2 = e2.substring(r2, t2);
      if (N(n2), t2 = T(e2, t2), !this.suppressValidationErr) {
        if ("SYSTEM" === e2.substring(t2, t2 + 6).toUpperCase()) throw new Error("External entities are not supported");
        if ("%" === e2[t2]) throw new Error("Parameter entities are not supported");
      }
      let s2 = "";
      if ([t2, s2] = this.readIdentifierVal(e2, t2, "entity"), false !== this.options.enabled && null != this.options.maxEntitySize && s2.length > this.options.maxEntitySize) throw new Error(`Entity "${n2}" size (${s2.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
      return [n2, s2, --t2];
    }
    readNotationExp(e2, t2) {
      const r2 = t2 = T(e2, t2);
      for (; t2 < e2.length && !/\s/.test(e2[t2]); ) t2++;
      let n2 = e2.substring(r2, t2);
      !this.suppressValidationErr && N(n2), t2 = T(e2, t2);
      const s2 = e2.substring(t2, t2 + 6).toUpperCase();
      if (!this.suppressValidationErr && "SYSTEM" !== s2 && "PUBLIC" !== s2) throw new Error(`Expected SYSTEM or PUBLIC, found "${s2}"`);
      t2 += s2.length, t2 = T(e2, t2);
      let i2 = null, o2 = null;
      if ("PUBLIC" === s2) [t2, i2] = this.readIdentifierVal(e2, t2, "publicIdentifier"), '"' !== e2[t2 = T(e2, t2)] && "'" !== e2[t2] || ([t2, o2] = this.readIdentifierVal(e2, t2, "systemIdentifier"));
      else if ("SYSTEM" === s2 && ([t2, o2] = this.readIdentifierVal(e2, t2, "systemIdentifier"), !this.suppressValidationErr && !o2)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
      return { notationName: n2, publicIdentifier: i2, systemIdentifier: o2, index: --t2 };
    }
    readIdentifierVal(e2, t2, r2) {
      let n2 = "";
      const s2 = e2[t2];
      if ('"' !== s2 && "'" !== s2) throw new Error(`Expected quoted string, found "${s2}"`);
      const i2 = ++t2;
      for (; t2 < e2.length && e2[t2] !== s2; ) t2++;
      if (n2 = e2.substring(i2, t2), e2[t2] !== s2) throw new Error(`Unterminated ${r2} value`);
      return [++t2, n2];
    }
    readElementExp(e2, t2) {
      const r2 = t2 = T(e2, t2);
      for (; t2 < e2.length && !/\s/.test(e2[t2]); ) t2++;
      let n2 = e2.substring(r2, t2);
      if (!this.suppressValidationErr && !f(n2)) throw new Error(`Invalid element name: "${n2}"`);
      let s2 = "";
      if ("E" === e2[t2 = T(e2, t2)] && A(e2, "MPTY", t2)) t2 += 4;
      else if ("A" === e2[t2] && A(e2, "NY", t2)) t2 += 2;
      else if ("(" === e2[t2]) {
        const r3 = ++t2;
        for (; t2 < e2.length && ")" !== e2[t2]; ) t2++;
        if (s2 = e2.substring(r3, t2), ")" !== e2[t2]) throw new Error("Unterminated content model");
      } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${e2[t2]}"`);
      return { elementName: n2, contentModel: s2.trim(), index: t2 };
    }
    readAttlistExp(e2, t2) {
      let r2 = t2 = T(e2, t2);
      for (; t2 < e2.length && !/\s/.test(e2[t2]); ) t2++;
      let n2 = e2.substring(r2, t2);
      for (N(n2), r2 = t2 = T(e2, t2); t2 < e2.length && !/\s/.test(e2[t2]); ) t2++;
      let s2 = e2.substring(r2, t2);
      if (!N(s2)) throw new Error(`Invalid attribute name: "${s2}"`);
      t2 = T(e2, t2);
      let i2 = "";
      if ("NOTATION" === e2.substring(t2, t2 + 8).toUpperCase()) {
        if (i2 = "NOTATION", "(" !== e2[t2 = T(e2, t2 += 8)]) throw new Error(`Expected '(', found "${e2[t2]}"`);
        t2++;
        let r3 = [];
        for (; t2 < e2.length && ")" !== e2[t2]; ) {
          const n3 = t2;
          for (; t2 < e2.length && "|" !== e2[t2] && ")" !== e2[t2]; ) t2++;
          let s3 = e2.substring(n3, t2);
          if (s3 = s3.trim(), !N(s3)) throw new Error(`Invalid notation name: "${s3}"`);
          r3.push(s3), "|" === e2[t2] && (t2++, t2 = T(e2, t2));
        }
        if (")" !== e2[t2]) throw new Error("Unterminated list of notations");
        t2++, i2 += " (" + r3.join("|") + ")";
      } else {
        const r3 = t2;
        for (; t2 < e2.length && !/\s/.test(e2[t2]); ) t2++;
        i2 += e2.substring(r3, t2);
        const n3 = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
        if (!this.suppressValidationErr && !n3.includes(i2.toUpperCase())) throw new Error(`Invalid attribute type: "${i2}"`);
      }
      t2 = T(e2, t2);
      let o2 = "";
      return "#REQUIRED" === e2.substring(t2, t2 + 8).toUpperCase() ? (o2 = "#REQUIRED", t2 += 8) : "#IMPLIED" === e2.substring(t2, t2 + 7).toUpperCase() ? (o2 = "#IMPLIED", t2 += 7) : [t2, o2] = this.readIdentifierVal(e2, t2, "ATTLIST"), { elementName: n2, attributeName: s2, attributeType: i2, defaultValue: o2, index: t2 };
    }
  }
  const T = (e2, t2) => {
    for (; t2 < e2.length && /\s/.test(e2[t2]); ) t2++;
    return t2;
  };
  function A(e2, t2, r2) {
    for (let n2 = 0; n2 < t2.length; n2++) if (t2[n2] !== e2[r2 + n2 + 1]) return false;
    return true;
  }
  function N(e2) {
    if (f(e2)) return e2;
    throw new Error(`Invalid entity name ${e2}`);
  }
  const C = /^[-+]?0x[a-fA-F0-9]+$/, _ = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, R = { hex: true, leadingZeros: true, decimalPoint: ".", eNotation: true, infinity: "original" };
  function I(e2, t2 = {}) {
    if (t2 = Object.assign({}, R, t2), !e2 || "string" != typeof e2) return e2;
    let r2 = e2.trim();
    if (0 === r2.length) return e2;
    if (void 0 !== t2.skipLike && t2.skipLike.test(r2)) return e2;
    if ("0" === r2) return 0;
    if (t2.hex && C.test(r2)) return (function(e3, t3) {
      if (parseInt) return parseInt(e3, t3);
      if (Number.parseInt) return Number.parseInt(e3, t3);
      if (window && window.parseInt) return window.parseInt(e3, t3);
      throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    })(r2, 16);
    if (isFinite(r2)) {
      if (r2.includes("e") || r2.includes("E")) return (function(e3, t3, r3) {
        if (!r3.eNotation) return e3;
        const n2 = t3.match(D);
        if (n2) {
          let s2 = n2[1] || "";
          const i2 = -1 === n2[3].indexOf("e") ? "E" : "e", o2 = n2[2], a2 = s2 ? e3[o2.length + 1] === i2 : e3[o2.length] === i2;
          return o2.length > 1 && a2 ? e3 : (1 !== o2.length || !n2[3].startsWith(`.${i2}`) && n2[3][0] !== i2) && o2.length > 0 ? r3.leadingZeros && !a2 ? (t3 = (n2[1] || "") + n2[3], Number(t3)) : e3 : Number(t3);
        }
        return e3;
      })(e2, r2, t2);
      {
        const n2 = _.exec(r2);
        if (n2) {
          const s2 = n2[1] || "", i2 = n2[2];
          let o2 = (function(e3) {
            if (e3 && -1 !== e3.indexOf(".")) return "." === (e3 = e3.replace(/0+$/, "")) ? e3 = "0" : "." === e3[0] ? e3 = "0" + e3 : "." === e3[e3.length - 1] && (e3 = e3.substring(0, e3.length - 1)), e3;
            return e3;
          })(n2[3]);
          const a2 = s2 ? "." === e2[i2.length + 1] : "." === e2[i2.length];
          if (!t2.leadingZeros && (i2.length > 1 || 1 === i2.length && !a2)) return e2;
          {
            const n3 = Number(r2), a3 = String(n3);
            if (0 === n3) return n3;
            if (-1 !== a3.search(/[eE]/)) return t2.eNotation ? n3 : e2;
            if (-1 !== r2.indexOf(".")) return "0" === a3 || a3 === o2 || a3 === `${s2}${o2}` ? n3 : e2;
            let c2 = i2 ? o2 : r2;
            return i2 ? c2 === a3 || s2 + c2 === a3 ? n3 : e2 : c2 === a3 || c2 === s2 + a3 ? n3 : e2;
          }
        }
        return e2;
      }
    }
    return (function(e3, t3, r3) {
      const n2 = t3 === 1 / 0;
      switch (r3.infinity.toLowerCase()) {
        case "null":
          return null;
        case "infinity":
          return t3;
        case "string":
          return n2 ? "Infinity" : "-Infinity";
        default:
          return e3;
      }
    })(e2, Number(r2), t2);
  }
  const D = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
  class k {
    constructor(e2) {
      this._matcher = e2;
    }
    get separator() {
      return this._matcher.separator;
    }
    getCurrentTag() {
      const e2 = this._matcher.path;
      return e2.length > 0 ? e2[e2.length - 1].tag : void 0;
    }
    getCurrentNamespace() {
      const e2 = this._matcher.path;
      return e2.length > 0 ? e2[e2.length - 1].namespace : void 0;
    }
    getAttrValue(e2) {
      const t2 = this._matcher.path;
      if (0 !== t2.length) return t2[t2.length - 1].values?.[e2];
    }
    hasAttr(e2) {
      const t2 = this._matcher.path;
      if (0 === t2.length) return false;
      const r2 = t2[t2.length - 1];
      return void 0 !== r2.values && e2 in r2.values;
    }
    getPosition() {
      const e2 = this._matcher.path;
      return 0 === e2.length ? -1 : e2[e2.length - 1].position ?? 0;
    }
    getCounter() {
      const e2 = this._matcher.path;
      return 0 === e2.length ? -1 : e2[e2.length - 1].counter ?? 0;
    }
    getIndex() {
      return this.getPosition();
    }
    getDepth() {
      return this._matcher.path.length;
    }
    toString(e2, t2 = true) {
      return this._matcher.toString(e2, t2);
    }
    toArray() {
      return this._matcher.path.map((e2) => e2.tag);
    }
    matches(e2) {
      return this._matcher.matches(e2);
    }
    matchesAny(e2) {
      return e2.matchesAny(this._matcher);
    }
  }
  class O {
    constructor(e2 = {}) {
      this.separator = e2.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new k(this);
    }
    push(e2, t2 = null, r2 = null) {
      this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
      const n2 = this.path.length;
      this.siblingStacks[n2] || (this.siblingStacks[n2] = /* @__PURE__ */ new Map());
      const s2 = this.siblingStacks[n2], i2 = r2 ? `${r2}:${e2}` : e2, o2 = s2.get(i2) || 0;
      let a2 = 0;
      for (const e3 of s2.values()) a2 += e3;
      s2.set(i2, o2 + 1);
      const c2 = { tag: e2, position: a2, counter: o2 };
      null != r2 && (c2.namespace = r2), null != t2 && (c2.values = t2), this.path.push(c2);
    }
    pop() {
      if (0 === this.path.length) return;
      this._pathStringCache = null;
      const e2 = this.path.pop();
      return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), e2;
    }
    updateCurrent(e2) {
      if (this.path.length > 0) {
        const t2 = this.path[this.path.length - 1];
        null != e2 && (t2.values = e2);
      }
    }
    getCurrentTag() {
      return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
    }
    getCurrentNamespace() {
      return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
    }
    getAttrValue(e2) {
      if (0 !== this.path.length) return this.path[this.path.length - 1].values?.[e2];
    }
    hasAttr(e2) {
      if (0 === this.path.length) return false;
      const t2 = this.path[this.path.length - 1];
      return void 0 !== t2.values && e2 in t2.values;
    }
    getPosition() {
      return 0 === this.path.length ? -1 : this.path[this.path.length - 1].position ?? 0;
    }
    getCounter() {
      return 0 === this.path.length ? -1 : this.path[this.path.length - 1].counter ?? 0;
    }
    getIndex() {
      return this.getPosition();
    }
    getDepth() {
      return this.path.length;
    }
    toString(e2, t2 = true) {
      const r2 = e2 || this.separator;
      if (r2 === this.separator && true === t2) {
        if (null !== this._pathStringCache) return this._pathStringCache;
        const e3 = this.path.map((e4) => e4.namespace ? `${e4.namespace}:${e4.tag}` : e4.tag).join(r2);
        return this._pathStringCache = e3, e3;
      }
      return this.path.map((e3) => t2 && e3.namespace ? `${e3.namespace}:${e3.tag}` : e3.tag).join(r2);
    }
    toArray() {
      return this.path.map((e2) => e2.tag);
    }
    reset() {
      this._pathStringCache = null, this.path = [], this.siblingStacks = [];
    }
    matches(e2) {
      const t2 = e2.segments;
      return 0 !== t2.length && (e2.hasDeepWildcard() ? this._matchWithDeepWildcard(t2) : this._matchSimple(t2));
    }
    _matchSimple(e2) {
      if (this.path.length !== e2.length) return false;
      for (let t2 = 0; t2 < e2.length; t2++) if (!this._matchSegment(e2[t2], this.path[t2], t2 === this.path.length - 1)) return false;
      return true;
    }
    _matchWithDeepWildcard(e2) {
      let t2 = this.path.length - 1, r2 = e2.length - 1;
      for (; r2 >= 0 && t2 >= 0; ) {
        const n2 = e2[r2];
        if ("deep-wildcard" === n2.type) {
          if (r2--, r2 < 0) return true;
          const n3 = e2[r2];
          let s2 = false;
          for (let e3 = t2; e3 >= 0; e3--) if (this._matchSegment(n3, this.path[e3], e3 === this.path.length - 1)) {
            t2 = e3 - 1, r2--, s2 = true;
            break;
          }
          if (!s2) return false;
        } else {
          if (!this._matchSegment(n2, this.path[t2], t2 === this.path.length - 1)) return false;
          t2--, r2--;
        }
      }
      return r2 < 0;
    }
    _matchSegment(e2, t2, r2) {
      if ("*" !== e2.tag && e2.tag !== t2.tag) return false;
      if (void 0 !== e2.namespace && "*" !== e2.namespace && e2.namespace !== t2.namespace) return false;
      if (void 0 !== e2.attrName) {
        if (!r2) return false;
        if (!t2.values || !(e2.attrName in t2.values)) return false;
        if (void 0 !== e2.attrValue && String(t2.values[e2.attrName]) !== String(e2.attrValue)) return false;
      }
      if (void 0 !== e2.position) {
        if (!r2) return false;
        const n2 = t2.counter ?? 0;
        if ("first" === e2.position && 0 !== n2) return false;
        if ("odd" === e2.position && n2 % 2 != 1) return false;
        if ("even" === e2.position && n2 % 2 != 0) return false;
        if ("nth" === e2.position && n2 !== e2.positionValue) return false;
      }
      return true;
    }
    matchesAny(e2) {
      return e2.matchesAny(this);
    }
    snapshot() {
      return { path: this.path.map((e2) => ({ ...e2 })), siblingStacks: this.siblingStacks.map((e2) => new Map(e2)) };
    }
    restore(e2) {
      this._pathStringCache = null, this.path = e2.path.map((e3) => ({ ...e3 })), this.siblingStacks = e2.siblingStacks.map((e3) => new Map(e3));
    }
    readOnly() {
      return this._view;
    }
  }
  class M {
    constructor(e2, t2 = {}, r2) {
      this.pattern = e2, this.separator = t2.separator || ".", this.segments = this._parse(e2), this.data = r2, this._hasDeepWildcard = this.segments.some((e3) => "deep-wildcard" === e3.type), this._hasAttributeCondition = this.segments.some((e3) => void 0 !== e3.attrName), this._hasPositionSelector = this.segments.some((e3) => void 0 !== e3.position);
    }
    _parse(e2) {
      const t2 = [];
      let r2 = 0, n2 = "";
      for (; r2 < e2.length; ) e2[r2] === this.separator ? r2 + 1 < e2.length && e2[r2 + 1] === this.separator ? (n2.trim() && (t2.push(this._parseSegment(n2.trim())), n2 = ""), t2.push({ type: "deep-wildcard" }), r2 += 2) : (n2.trim() && t2.push(this._parseSegment(n2.trim())), n2 = "", r2++) : (n2 += e2[r2], r2++);
      return n2.trim() && t2.push(this._parseSegment(n2.trim())), t2;
    }
    _parseSegment(e2) {
      const t2 = { type: "tag" };
      let r2 = null, n2 = e2;
      const s2 = e2.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
      if (s2 && (n2 = s2[1] + s2[3], s2[2])) {
        const e3 = s2[2].slice(1, -1);
        e3 && (r2 = e3);
      }
      let i2, o2, a2 = n2;
      if (n2.includes("::")) {
        const t3 = n2.indexOf("::");
        if (i2 = n2.substring(0, t3).trim(), a2 = n2.substring(t3 + 2).trim(), !i2) throw new Error(`Invalid namespace in pattern: ${e2}`);
      }
      let c2 = null;
      if (a2.includes(":")) {
        const e3 = a2.lastIndexOf(":"), t3 = a2.substring(0, e3).trim(), r3 = a2.substring(e3 + 1).trim();
        ["first", "last", "odd", "even"].includes(r3) || /^nth\(\d+\)$/.test(r3) ? (o2 = t3, c2 = r3) : o2 = a2;
      } else o2 = a2;
      if (!o2) throw new Error(`Invalid segment pattern: ${e2}`);
      if (t2.tag = o2, i2 && (t2.namespace = i2), r2) if (r2.includes("=")) {
        const e3 = r2.indexOf("=");
        t2.attrName = r2.substring(0, e3).trim(), t2.attrValue = r2.substring(e3 + 1).trim();
      } else t2.attrName = r2.trim();
      if (c2) {
        const e3 = c2.match(/^nth\((\d+)\)$/);
        e3 ? (t2.position = "nth", t2.positionValue = parseInt(e3[1], 10)) : t2.position = c2;
      }
      return t2;
    }
    get length() {
      return this.segments.length;
    }
    hasDeepWildcard() {
      return this._hasDeepWildcard;
    }
    hasAttributeCondition() {
      return this._hasAttributeCondition;
    }
    hasPositionSelector() {
      return this._hasPositionSelector;
    }
    toString() {
      return this.pattern;
    }
  }
  class P {
    constructor() {
      this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._patterns = /* @__PURE__ */ new Set(), this._sealed = false;
    }
    add(e2) {
      if (this._sealed) throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
      if (this._patterns.has(e2.pattern)) return this;
      if (this._patterns.add(e2.pattern), e2.hasDeepWildcard()) return this._deepWildcards.push(e2), this;
      const t2 = e2.length, r2 = e2.segments[e2.segments.length - 1], n2 = r2?.tag;
      if (n2 && "*" !== n2) {
        const r3 = `${t2}:${n2}`;
        this._byDepthAndTag.has(r3) || this._byDepthAndTag.set(r3, []), this._byDepthAndTag.get(r3).push(e2);
      } else this._wildcardByDepth.has(t2) || this._wildcardByDepth.set(t2, []), this._wildcardByDepth.get(t2).push(e2);
      return this;
    }
    addAll(e2) {
      for (const t2 of e2) this.add(t2);
      return this;
    }
    has(e2) {
      return this._patterns.has(e2.pattern);
    }
    get size() {
      return this._patterns.size;
    }
    seal() {
      return this._sealed = true, this;
    }
    get isSealed() {
      return this._sealed;
    }
    matchesAny(e2) {
      return null !== this.findMatch(e2);
    }
    findMatch(e2) {
      const t2 = e2.getDepth(), r2 = `${t2}:${e2.getCurrentTag()}`, n2 = this._byDepthAndTag.get(r2);
      if (n2) {
        for (let t3 = 0; t3 < n2.length; t3++) if (e2.matches(n2[t3])) return n2[t3];
      }
      const s2 = this._wildcardByDepth.get(t2);
      if (s2) {
        for (let t3 = 0; t3 < s2.length; t3++) if (e2.matches(s2[t3])) return s2[t3];
      }
      for (let t3 = 0; t3 < this._deepWildcards.length; t3++) if (e2.matches(this._deepWildcards[t3])) return this._deepWildcards[t3];
      return null;
    }
  }
  const $ = { cent: "¢", pound: "£", curren: "¤", yen: "¥", euro: "€", dollar: "$", euro: "€", fnof: "ƒ", inr: "₹", af: "؋", birr: "ብር", peso: "₱", rub: "₽", won: "₩", yuan: "¥", cedil: "¸" }, j = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }, L = { nbsp: " ", copy: "©", reg: "®", trade: "™", mdash: "—", ndash: "–", hellip: "…", laquo: "«", raquo: "»", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", bull: "•", para: "¶", sect: "§", deg: "°", frac12: "½", frac14: "¼", frac34: "¾" }, U = new Set("!?\\\\/[]$%{}^&*()<>|+");
  function B(e2) {
    if ("#" === e2[0]) throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e2}"`);
    for (const t2 of e2) if (U.has(t2)) throw new Error(`[EntityReplacer] Invalid character '${t2}' in entity name: "${e2}"`);
    return e2;
  }
  function F(...e2) {
    const t2 = /* @__PURE__ */ Object.create(null);
    for (const r2 of e2) if (r2) for (const e3 of Object.keys(r2)) {
      const n2 = r2[e3];
      if ("string" == typeof n2) t2[e3] = n2;
      else if (n2 && "object" == typeof n2 && void 0 !== n2.val) {
        const r3 = n2.val;
        "string" == typeof r3 && (t2[e3] = r3);
      }
    }
    return t2;
  }
  const z = "external", V = "base", H = "all";
  const q = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }), W = /* @__PURE__ */ new Set([9, 10, 13]);
  class G {
    constructor(e2 = {}) {
      var t2;
      this._limit = e2.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = "function" == typeof e2.postCheck ? e2.postCheck : (e3) => e3, this._limitTiers = (t2 = this._limit.applyLimitsTo ?? z) && t2 !== z ? t2 === H ? /* @__PURE__ */ new Set([H]) : t2 === V ? /* @__PURE__ */ new Set([V]) : Array.isArray(t2) ? new Set(t2) : /* @__PURE__ */ new Set([z]) : /* @__PURE__ */ new Set([z]), this._numericAllowed = e2.numericAllowed ?? true, this._baseMap = F(j, e2.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e2.remove && Array.isArray(e2.remove) ? e2.remove : []), this._leaveSet = new Set(e2.leave && Array.isArray(e2.leave) ? e2.leave : []);
      const r2 = (function(e3) {
        if (!e3) return { xmlVersion: 1, onLevel: q.allow, nullLevel: q.remove };
        const t3 = 1.1 === e3.xmlVersion ? 1.1 : 1, r3 = q[e3.onNCR] ?? q.allow, n2 = q[e3.nullNCR] ?? q.remove;
        return { xmlVersion: t3, onLevel: r3, nullLevel: Math.max(n2, q.remove) };
      })(e2.ncr);
      this._ncrXmlVersion = r2.xmlVersion, this._ncrOnLevel = r2.onLevel, this._ncrNullLevel = r2.nullLevel;
    }
    setExternalEntities(e2) {
      if (e2) for (const t2 of Object.keys(e2)) B(t2);
      this._externalMap = F(e2);
    }
    addExternalEntity(e2, t2) {
      B(e2), "string" == typeof t2 && -1 === t2.indexOf("&") && (this._externalMap[e2] = t2);
    }
    addInputEntities(e2) {
      this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = F(e2);
    }
    reset() {
      return this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
    }
    setXmlVersion(e2) {
      this._ncrXmlVersion = 1.1 === e2 ? 1.1 : 1;
    }
    decode(e2) {
      if ("string" != typeof e2 || 0 === e2.length) return e2;
      const t2 = e2, r2 = [], n2 = e2.length;
      let s2 = 0, i2 = 0;
      const o2 = this._maxTotalExpansions > 0, a2 = this._maxExpandedLength > 0, c2 = o2 || a2;
      for (; i2 < n2; ) {
        if (38 !== e2.charCodeAt(i2)) {
          i2++;
          continue;
        }
        let t3 = i2 + 1;
        for (; t3 < n2 && 59 !== e2.charCodeAt(t3) && t3 - i2 <= 32; ) t3++;
        if (t3 >= n2 || 59 !== e2.charCodeAt(t3)) {
          i2++;
          continue;
        }
        const l3 = e2.slice(i2 + 1, t3);
        if (0 === l3.length) {
          i2++;
          continue;
        }
        let u2, d2;
        if (this._removeSet.has(l3)) u2 = "", void 0 === d2 && (d2 = z);
        else {
          if (this._leaveSet.has(l3)) {
            i2++;
            continue;
          }
          if (35 === l3.charCodeAt(0)) {
            const e3 = this._resolveNCR(l3);
            if (void 0 === e3) {
              i2++;
              continue;
            }
            u2 = e3, d2 = V;
          } else {
            const e3 = this._resolveName(l3);
            u2 = e3?.value, d2 = e3?.tier;
          }
        }
        if (void 0 !== u2) {
          if (i2 > s2 && r2.push(e2.slice(s2, i2)), r2.push(u2), s2 = t3 + 1, i2 = s2, c2 && this._tierCounts(d2)) {
            if (o2 && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
            if (a2) {
              const e3 = u2.length - (l3.length + 2);
              if (e3 > 0 && (this._expandedLength += e3, this._expandedLength > this._maxExpandedLength)) throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
            }
          }
        } else i2++;
      }
      s2 < n2 && r2.push(e2.slice(s2));
      const l2 = 0 === r2.length ? e2 : r2.join("");
      return this._postCheck(l2, t2);
    }
    _tierCounts(e2) {
      return !!this._limitTiers.has(H) || this._limitTiers.has(e2);
    }
    _resolveName(e2) {
      return e2 in this._inputMap ? { value: this._inputMap[e2], tier: z } : e2 in this._externalMap ? { value: this._externalMap[e2], tier: z } : e2 in this._baseMap ? { value: this._baseMap[e2], tier: V } : void 0;
    }
    _classifyNCR(e2) {
      return 0 === e2 ? this._ncrNullLevel : e2 >= 55296 && e2 <= 57343 || 1 === this._ncrXmlVersion && e2 >= 1 && e2 <= 31 && !W.has(e2) ? q.remove : -1;
    }
    _applyNCRAction(e2, t2, r2) {
      switch (e2) {
        case q.allow:
          return String.fromCodePoint(r2);
        case q.remove:
          return "";
        case q.leave:
          return;
        case q.throw:
          throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t2}; (U+${r2.toString(16).toUpperCase().padStart(4, "0")})`);
        default:
          return String.fromCodePoint(r2);
      }
    }
    _resolveNCR(e2) {
      const t2 = e2.charCodeAt(1);
      let r2;
      if (r2 = 120 === t2 || 88 === t2 ? parseInt(e2.slice(2), 16) : parseInt(e2.slice(1), 10), Number.isNaN(r2) || r2 < 0 || r2 > 1114111) return;
      const n2 = this._classifyNCR(r2);
      if (!this._numericAllowed && n2 < q.remove) return;
      const s2 = -1 === n2 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n2);
      return this._applyNCRAction(s2, e2, r2);
    }
  }
  function Q(e2, t2) {
    if (!e2) return {};
    const r2 = t2.attributesGroupName ? e2[t2.attributesGroupName] : e2;
    if (!r2) return {};
    const n2 = {};
    for (const e3 in r2) if (e3.startsWith(t2.attributeNamePrefix)) {
      n2[e3.substring(t2.attributeNamePrefix.length)] = r2[e3];
    } else n2[e3] = r2[e3];
    return n2;
  }
  function X(e2) {
    if (!e2 || "string" != typeof e2) return;
    const t2 = e2.indexOf(":");
    if (-1 !== t2 && t2 > 0) {
      const r2 = e2.substring(0, t2);
      if ("xmlns" !== r2) return r2;
    }
  }
  class K {
    constructor(e2, t2) {
      var r2;
      this.options = e2, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = te, this.parseTextData = J, this.resolveNameSpace = Y, this.buildAttributesMap = ee, this.isItStopNode = ie, this.replaceEntitiesValue = ne, this.readStopNodeData = le, this.saveTextToParentTag = se, this.addChild = re, this.ignoreAttributesFn = "function" == typeof (r2 = this.options.ignoreAttributes) ? r2 : Array.isArray(r2) ? (e3) => {
        for (const t3 of r2) {
          if ("string" == typeof t3 && e3 === t3) return true;
          if (t3 instanceof RegExp && t3.test(e3)) return true;
        }
      } : () => false, this.entityExpansionCount = 0, this.currentExpandedLength = 0;
      let n2 = { ...j };
      this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : ("object" == typeof this.options.htmlEntities ? n2 = this.options.htmlEntities : true === this.options.htmlEntities && (n2 = { ...L, ...$ }), this.entityDecoder = new G({ namedEntities: { ...n2, ...t2 }, numericAllowed: this.options.htmlEntities, limit: { maxTotalExpansions: this.options.processEntities.maxTotalExpansions, maxExpandedLength: this.options.processEntities.maxExpandedLength, applyLimitsTo: this.options.processEntities.appliesTo } })), this.matcher = new O(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = false, this.stopNodeExpressionsSet = new P();
      const s2 = this.options.stopNodes;
      if (s2 && s2.length > 0) {
        for (let e3 = 0; e3 < s2.length; e3++) {
          const t3 = s2[e3];
          "string" == typeof t3 ? this.stopNodeExpressionsSet.add(new M(t3)) : t3 instanceof M && this.stopNodeExpressionsSet.add(t3);
        }
        this.stopNodeExpressionsSet.seal();
      }
    }
  }
  function J(e2, t2, r2, n2, s2, i2, o2) {
    const a2 = this.options;
    if (void 0 !== e2 && (a2.trimValues && !n2 && (e2 = e2.trim()), e2.length > 0)) {
      o2 || (e2 = this.replaceEntitiesValue(e2, t2, r2));
      const n3 = a2.jPath ? r2.toString() : r2, c2 = a2.tagValueProcessor(t2, e2, n3, s2, i2);
      if (null == c2) return e2;
      if (typeof c2 != typeof e2 || c2 !== e2) return c2;
      if (a2.trimValues) return ue(e2, a2.parseTagValue, a2.numberParseOptions);
      return e2.trim() === e2 ? ue(e2, a2.parseTagValue, a2.numberParseOptions) : e2;
    }
  }
  function Y(e2) {
    if (this.options.removeNSPrefix) {
      const t2 = e2.split(":"), r2 = "/" === e2.charAt(0) ? "/" : "";
      if ("xmlns" === t2[0]) return "";
      2 === t2.length && (e2 = r2 + t2[1]);
    }
    return e2;
  }
  const Z = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function ee(e2, t2, r2, n2 = false) {
    const s2 = this.options;
    if (true === n2 || true !== s2.ignoreAttributes && "string" == typeof e2) {
      const n3 = h(e2, Z), i2 = n3.length, o2 = {}, a2 = new Array(i2);
      let c2 = false;
      const l2 = {};
      for (let e3 = 0; e3 < i2; e3++) {
        const t3 = this.resolveNameSpace(n3[e3][1]), i3 = n3[e3][4];
        if (t3.length && void 0 !== i3) {
          let n4 = i3;
          s2.trimValues && (n4 = n4.trim()), n4 = this.replaceEntitiesValue(n4, r2, this.readonlyMatcher), a2[e3] = n4, l2[t3] = n4, c2 = true;
        }
      }
      c2 && "object" == typeof t2 && t2.updateCurrent && t2.updateCurrent(l2);
      const u2 = s2.jPath ? t2.toString() : this.readonlyMatcher;
      let d2 = false;
      for (let e3 = 0; e3 < i2; e3++) {
        const t3 = this.resolveNameSpace(n3[e3][1]);
        if (this.ignoreAttributesFn(t3, u2)) continue;
        let r3 = s2.attributeNamePrefix + t3;
        if (t3.length) if (s2.transformAttributeName && (r3 = s2.transformAttributeName(r3)), r3 = he(r3, s2), void 0 !== n3[e3][4]) {
          const n4 = a2[e3], i3 = s2.attributeValueProcessor(t3, n4, u2);
          o2[r3] = null == i3 ? n4 : typeof i3 != typeof n4 || i3 !== n4 ? i3 : ue(n4, s2.parseAttributeValue, s2.numberParseOptions), d2 = true;
        } else s2.allowBooleanAttributes && (o2[r3] = true, d2 = true);
      }
      if (!d2) return;
      if (s2.attributesGroupName && !s2.preserveOrder) {
        const e3 = {};
        return e3[s2.attributesGroupName] = o2, e3;
      }
      return o2;
    }
  }
  const te = function(e2) {
    e2 = e2.replace(/\r\n?/g, "\n");
    const t2 = new v("!xml");
    let r2 = t2, n2 = "";
    this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
    const s2 = this.options, i2 = new x(s2.processEntities), o2 = e2.length;
    for (let a2 = 0; a2 < o2; a2++) {
      if ("<" === e2[a2]) {
        const c2 = e2.charCodeAt(a2 + 1);
        if (47 === c2) {
          const t3 = oe(e2, ">", a2, "Closing Tag is not closed.");
          let i3 = e2.substring(a2 + 2, t3).trim();
          if (s2.removeNSPrefix) {
            const e3 = i3.indexOf(":");
            -1 !== e3 && (i3 = i3.substr(e3 + 1));
          }
          i3 = de(s2.transformTagName, i3, "", s2).tagName, r2 && (n2 = this.saveTextToParentTag(n2, r2, this.readonlyMatcher));
          const o3 = this.matcher.getCurrentTag();
          if (i3 && s2.unpairedTagsSet.has(i3)) throw new Error(`Unpaired tag can not be used as closing tag: </${i3}>`);
          o3 && s2.unpairedTagsSet.has(o3) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = false, r2 = this.tagsNodeStack.pop(), n2 = "", a2 = t3;
        } else if (63 === c2) {
          let t3 = ce(e2, a2, false, "?>");
          if (!t3) throw new Error("Pi Tag is not closed.");
          n2 = this.saveTextToParentTag(n2, r2, this.readonlyMatcher);
          const i3 = this.buildAttributesMap(t3.tagExp, this.matcher, t3.tagName, true);
          if (i3) {
            const e3 = i3[this.options.attributeNamePrefix + "version"];
            this.entityDecoder.setXmlVersion(Number(e3) || 1);
          }
          if (s2.ignoreDeclaration && "?xml" === t3.tagName || s2.ignorePiTags) ;
          else {
            const e3 = new v(t3.tagName);
            e3.add(s2.textNodeName, ""), t3.tagName !== t3.tagExp && t3.attrExpPresent && true !== s2.ignoreAttributes && (e3[":@"] = i3), this.addChild(r2, e3, this.readonlyMatcher, a2);
          }
          a2 = t3.closeIndex + 1;
        } else if (33 === c2 && 45 === e2.charCodeAt(a2 + 2) && 45 === e2.charCodeAt(a2 + 3)) {
          const t3 = oe(e2, "-->", a2 + 4, "Comment is not closed.");
          if (s2.commentPropName) {
            const i3 = e2.substring(a2 + 4, t3 - 2);
            n2 = this.saveTextToParentTag(n2, r2, this.readonlyMatcher), r2.add(s2.commentPropName, [{ [s2.textNodeName]: i3 }]);
          }
          a2 = t3;
        } else if (33 === c2 && 68 === e2.charCodeAt(a2 + 2)) {
          const t3 = i2.readDocType(e2, a2);
          this.entityDecoder.addInputEntities(t3.entities), a2 = t3.i;
        } else if (33 === c2 && 91 === e2.charCodeAt(a2 + 2)) {
          const t3 = oe(e2, "]]>", a2, "CDATA is not closed.") - 2, i3 = e2.substring(a2 + 9, t3);
          n2 = this.saveTextToParentTag(n2, r2, this.readonlyMatcher);
          let o3 = this.parseTextData(i3, r2.tagname, this.readonlyMatcher, true, false, true, true);
          null == o3 && (o3 = ""), s2.cdataPropName ? r2.add(s2.cdataPropName, [{ [s2.textNodeName]: i3 }]) : r2.add(s2.textNodeName, o3), a2 = t3 + 2;
        } else {
          let i3 = ce(e2, a2, s2.removeNSPrefix);
          if (!i3) {
            const t3 = e2.substring(Math.max(0, a2 - 50), Math.min(o2, a2 + 50));
            throw new Error(`readTagExp returned undefined at position ${a2}. Context: "${t3}"`);
          }
          let c3 = i3.tagName;
          const l2 = i3.rawTagName;
          let u2 = i3.tagExp, d2 = i3.attrExpPresent, h2 = i3.closeIndex;
          if ({ tagName: c3, tagExp: u2 } = de(s2.transformTagName, c3, u2, s2), s2.strictReservedNames && (c3 === s2.commentPropName || c3 === s2.cdataPropName || c3 === s2.textNodeName || c3 === s2.attributesGroupName)) throw new Error(`Invalid tag name: ${c3}`);
          r2 && n2 && "!xml" !== r2.tagname && (n2 = this.saveTextToParentTag(n2, r2, this.readonlyMatcher, false));
          const f2 = r2;
          f2 && s2.unpairedTagsSet.has(f2.tagname) && (r2 = this.tagsNodeStack.pop(), this.matcher.pop());
          let p2 = false;
          u2.length > 0 && u2.lastIndexOf("/") === u2.length - 1 && (p2 = true, "/" === c3[c3.length - 1] ? (c3 = c3.substr(0, c3.length - 1), u2 = c3) : u2 = u2.substr(0, u2.length - 1), d2 = c3 !== u2);
          let g2, m2 = null, y2 = {};
          g2 = X(l2), c3 !== t2.tagname && this.matcher.push(c3, {}, g2), c3 !== u2 && d2 && (m2 = this.buildAttributesMap(u2, this.matcher, c3), m2 && (y2 = Q(m2, s2))), c3 !== t2.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
          const w2 = a2;
          if (this.isCurrentNodeStopNode) {
            let t3 = "";
            if (p2) a2 = i3.closeIndex;
            else if (s2.unpairedTagsSet.has(c3)) a2 = i3.closeIndex;
            else {
              const r3 = this.readStopNodeData(e2, l2, h2 + 1);
              if (!r3) throw new Error(`Unexpected end of ${l2}`);
              a2 = r3.i, t3 = r3.tagContent;
            }
            const n3 = new v(c3);
            m2 && (n3[":@"] = m2), n3.add(s2.textNodeName, t3), this.matcher.pop(), this.isCurrentNodeStopNode = false, this.addChild(r2, n3, this.readonlyMatcher, w2);
          } else {
            if (p2) {
              ({ tagName: c3, tagExp: u2 } = de(s2.transformTagName, c3, u2, s2));
              const e3 = new v(c3);
              m2 && (e3[":@"] = m2), this.addChild(r2, e3, this.readonlyMatcher, w2), this.matcher.pop(), this.isCurrentNodeStopNode = false;
            } else {
              if (s2.unpairedTagsSet.has(c3)) {
                const e3 = new v(c3);
                m2 && (e3[":@"] = m2), this.addChild(r2, e3, this.readonlyMatcher, w2), this.matcher.pop(), this.isCurrentNodeStopNode = false, a2 = i3.closeIndex;
                continue;
              }
              {
                const e3 = new v(c3);
                if (this.tagsNodeStack.length > s2.maxNestedTags) throw new Error("Maximum nested tags exceeded");
                this.tagsNodeStack.push(r2), m2 && (e3[":@"] = m2), this.addChild(r2, e3, this.readonlyMatcher, w2), r2 = e3;
              }
            }
            n2 = "", a2 = h2;
          }
        }
      } else n2 += e2[a2];
    }
    return t2.child;
  };
  function re(e2, t2, r2, n2) {
    this.options.captureMetaData || (n2 = void 0);
    const s2 = this.options.jPath ? r2.toString() : r2, i2 = this.options.updateTag(t2.tagname, s2, t2[":@"]);
    false === i2 || ("string" == typeof i2 ? (t2.tagname = i2, e2.addChild(t2, n2)) : e2.addChild(t2, n2));
  }
  function ne(e2, t2, r2) {
    const n2 = this.options.processEntities;
    if (!n2 || !n2.enabled) return e2;
    if (n2.allowedTags) {
      const s2 = this.options.jPath ? r2.toString() : r2;
      if (!(Array.isArray(n2.allowedTags) ? n2.allowedTags.includes(t2) : n2.allowedTags(t2, s2))) return e2;
    }
    if (n2.tagFilter) {
      const s2 = this.options.jPath ? r2.toString() : r2;
      if (!n2.tagFilter(t2, s2)) return e2;
    }
    return this.entityDecoder.decode(e2);
  }
  function se(e2, t2, r2, n2) {
    return e2 && (void 0 === n2 && (n2 = 0 === t2.child.length), void 0 !== (e2 = this.parseTextData(e2, t2.tagname, r2, false, !!t2[":@"] && 0 !== Object.keys(t2[":@"]).length, n2)) && "" !== e2 && t2.add(this.options.textNodeName, e2), e2 = ""), e2;
  }
  function ie() {
    return 0 !== this.stopNodeExpressionsSet.size && this.matcher.matchesAny(this.stopNodeExpressionsSet);
  }
  function oe(e2, t2, r2, n2) {
    const s2 = e2.indexOf(t2, r2);
    if (-1 === s2) throw new Error(n2);
    return s2 + t2.length - 1;
  }
  function ae(e2, t2, r2, n2) {
    const s2 = e2.indexOf(t2, r2);
    if (-1 === s2) throw new Error(n2);
    return s2;
  }
  function ce(e2, t2, r2, n2 = ">") {
    const s2 = (function(e3, t3, r3 = ">") {
      let n3 = 0;
      const s3 = e3.length, i3 = r3.charCodeAt(0), o3 = r3.length > 1 ? r3.charCodeAt(1) : -1;
      let a3 = "", c3 = t3;
      for (let r4 = t3; r4 < s3; r4++) {
        const t4 = e3.charCodeAt(r4);
        if (n3) t4 === n3 && (n3 = 0);
        else if (34 === t4 || 39 === t4) n3 = t4;
        else if (t4 === i3) {
          if (-1 === o3) return a3 += e3.substring(c3, r4), { data: a3, index: r4 };
          if (e3.charCodeAt(r4 + 1) === o3) return a3 += e3.substring(c3, r4), { data: a3, index: r4 };
        } else 9 !== t4 || n3 || (a3 += e3.substring(c3, r4) + " ", c3 = r4 + 1);
      }
    })(e2, t2 + 1, n2);
    if (!s2) return;
    let i2 = s2.data;
    const o2 = s2.index, a2 = i2.search(/\s/);
    let c2 = i2, l2 = true;
    -1 !== a2 && (c2 = i2.substring(0, a2), i2 = i2.substring(a2 + 1).trimStart());
    const u2 = c2;
    if (r2) {
      const e3 = c2.indexOf(":");
      -1 !== e3 && (c2 = c2.substr(e3 + 1), l2 = c2 !== s2.data.substr(e3 + 1));
    }
    return { tagName: c2, tagExp: i2, closeIndex: o2, attrExpPresent: l2, rawTagName: u2 };
  }
  function le(e2, t2, r2) {
    const n2 = r2;
    let s2 = 1;
    const i2 = e2.length;
    for (; r2 < i2; r2++) if ("<" === e2[r2]) {
      const i3 = e2.charCodeAt(r2 + 1);
      if (47 === i3) {
        const i4 = ae(e2, ">", r2, `${t2} is not closed`);
        if (e2.substring(r2 + 2, i4).trim() === t2 && (s2--, 0 === s2)) return { tagContent: e2.substring(n2, r2), i: i4 };
        r2 = i4;
      } else if (63 === i3) {
        r2 = oe(e2, "?>", r2 + 1, "StopNode is not closed.");
      } else if (33 === i3 && 45 === e2.charCodeAt(r2 + 2) && 45 === e2.charCodeAt(r2 + 3)) {
        r2 = oe(e2, "-->", r2 + 3, "StopNode is not closed.");
      } else if (33 === i3 && 91 === e2.charCodeAt(r2 + 2)) {
        r2 = oe(e2, "]]>", r2, "StopNode is not closed.") - 2;
      } else {
        const n3 = ce(e2, r2, ">");
        if (n3) {
          (n3 && n3.tagName) === t2 && "/" !== n3.tagExp[n3.tagExp.length - 1] && s2++, r2 = n3.closeIndex;
        }
      }
    }
  }
  function ue(e2, t2, r2) {
    if (t2 && "string" == typeof e2) {
      const t3 = e2.trim();
      return "true" === t3 || "false" !== t3 && I(e2, r2);
    }
    return void 0 !== e2 ? e2 : "";
  }
  function de(e2, t2, r2, n2) {
    if (e2) {
      const n3 = e2(t2);
      r2 === t2 && (r2 = n3), t2 = n3;
    }
    return { tagName: t2 = he(t2, n2), tagExp: r2 };
  }
  function he(e2, t2) {
    if (g.includes(e2)) throw new Error(`[SECURITY] Invalid name: "${e2}" is a reserved JavaScript keyword that could cause prototype pollution`);
    return p.includes(e2) ? t2.onDangerousProperty(e2) : e2;
  }
  const fe = v.getMetaDataSymbol();
  function pe(e2, t2) {
    if (!e2 || "object" != typeof e2) return {};
    if (!t2) return e2;
    const r2 = {};
    for (const n2 in e2) if (n2.startsWith(t2)) {
      r2[n2.substring(t2.length)] = e2[n2];
    } else r2[n2] = e2[n2];
    return r2;
  }
  function ge(e2, t2, r2, n2) {
    return me(e2, t2, r2, n2);
  }
  function me(e2, t2, r2, n2) {
    let s2;
    const i2 = {};
    for (let o2 = 0; o2 < e2.length; o2++) {
      const a2 = e2[o2], c2 = ye(a2);
      if (void 0 !== c2 && c2 !== t2.textNodeName) {
        const e3 = pe(a2[":@"] || {}, t2.attributeNamePrefix);
        r2.push(c2, e3);
      }
      if (c2 === t2.textNodeName) void 0 === s2 ? s2 = a2[c2] : s2 += "" + a2[c2];
      else {
        if (void 0 === c2) continue;
        if (a2[c2]) {
          let e3 = me(a2[c2], t2, r2, n2);
          const s3 = Se(e3, t2);
          if (a2[":@"] ? we(e3, a2[":@"], n2, t2) : 1 !== Object.keys(e3).length || void 0 === e3[t2.textNodeName] || t2.alwaysCreateTextNode ? 0 === Object.keys(e3).length && (t2.alwaysCreateTextNode ? e3[t2.textNodeName] = "" : e3 = "") : e3 = e3[t2.textNodeName], void 0 !== a2[fe] && "object" == typeof e3 && null !== e3 && (e3[fe] = a2[fe]), void 0 !== i2[c2] && Object.prototype.hasOwnProperty.call(i2, c2)) Array.isArray(i2[c2]) || (i2[c2] = [i2[c2]]), i2[c2].push(e3);
          else {
            const r3 = t2.jPath ? n2.toString() : n2;
            t2.isArray(c2, r3, s3) ? i2[c2] = [e3] : i2[c2] = e3;
          }
          void 0 !== c2 && c2 !== t2.textNodeName && r2.pop();
        }
      }
    }
    return "string" == typeof s2 ? s2.length > 0 && (i2[t2.textNodeName] = s2) : void 0 !== s2 && (i2[t2.textNodeName] = s2), i2;
  }
  function ye(e2) {
    const t2 = Object.keys(e2);
    for (let e3 = 0; e3 < t2.length; e3++) {
      const r2 = t2[e3];
      if (":@" !== r2) return r2;
    }
  }
  function we(e2, t2, r2, n2) {
    if (t2) {
      const s2 = Object.keys(t2), i2 = s2.length;
      for (let o2 = 0; o2 < i2; o2++) {
        const i3 = s2[o2], a2 = i3.startsWith(n2.attributeNamePrefix) ? i3.substring(n2.attributeNamePrefix.length) : i3, c2 = n2.jPath ? r2.toString() + "." + a2 : r2;
        n2.isArray(i3, c2, true, true) ? e2[i3] = [t2[i3]] : e2[i3] = t2[i3];
      }
    }
  }
  function Se(e2, t2) {
    const { textNodeName: r2 } = t2, n2 = Object.keys(e2).length;
    return 0 === n2 || !(1 !== n2 || !e2[r2] && "boolean" != typeof e2[r2] && 0 !== e2[r2]);
  }
  const be = { allowBooleanAttributes: false, unpairedTags: [] };
  function Ee(e2) {
    return " " === e2 || "	" === e2 || "\n" === e2 || "\r" === e2;
  }
  function ve(e2, t2) {
    const r2 = t2;
    for (; t2 < e2.length; t2++) if ("?" == e2[t2] || " " == e2[t2]) {
      const n2 = e2.substr(r2, t2 - r2);
      if (t2 > 5 && "xml" === n2) return Ie("InvalidXml", "XML declaration allowed only at the start of the document.", Oe(e2, t2));
      if ("?" == e2[t2] && ">" == e2[t2 + 1]) {
        t2++;
        break;
      }
      continue;
    }
    return t2;
  }
  function xe(e2, t2) {
    if (e2.length > t2 + 5 && "-" === e2[t2 + 1] && "-" === e2[t2 + 2]) {
      for (t2 += 3; t2 < e2.length; t2++) if ("-" === e2[t2] && "-" === e2[t2 + 1] && ">" === e2[t2 + 2]) {
        t2 += 2;
        break;
      }
    } else if (e2.length > t2 + 8 && "D" === e2[t2 + 1] && "O" === e2[t2 + 2] && "C" === e2[t2 + 3] && "T" === e2[t2 + 4] && "Y" === e2[t2 + 5] && "P" === e2[t2 + 6] && "E" === e2[t2 + 7]) {
      let r2 = 1;
      for (t2 += 8; t2 < e2.length; t2++) if ("<" === e2[t2]) r2++;
      else if (">" === e2[t2] && (r2--, 0 === r2)) break;
    } else if (e2.length > t2 + 9 && "[" === e2[t2 + 1] && "C" === e2[t2 + 2] && "D" === e2[t2 + 3] && "A" === e2[t2 + 4] && "T" === e2[t2 + 5] && "A" === e2[t2 + 6] && "[" === e2[t2 + 7]) {
      for (t2 += 8; t2 < e2.length; t2++) if ("]" === e2[t2] && "]" === e2[t2 + 1] && ">" === e2[t2 + 2]) {
        t2 += 2;
        break;
      }
    }
    return t2;
  }
  const Te = '"', Ae = "'";
  function Ne(e2, t2) {
    let r2 = "", n2 = "", s2 = false;
    for (; t2 < e2.length; t2++) {
      if (e2[t2] === Te || e2[t2] === Ae) "" === n2 ? n2 = e2[t2] : n2 !== e2[t2] || (n2 = "");
      else if (">" === e2[t2] && "" === n2) {
        s2 = true;
        break;
      }
      r2 += e2[t2];
    }
    return "" === n2 && { value: r2, index: t2, tagClosed: s2 };
  }
  const Ce = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function _e(e2, t2) {
    const r2 = h(e2, Ce), n2 = {};
    for (let e3 = 0; e3 < r2.length; e3++) {
      if (0 === r2[e3][1].length) return Ie("InvalidAttr", "Attribute '" + r2[e3][2] + "' has no space in starting.", Me(r2[e3]));
      if (void 0 !== r2[e3][3] && void 0 === r2[e3][4]) return Ie("InvalidAttr", "Attribute '" + r2[e3][2] + "' is without value.", Me(r2[e3]));
      if (void 0 === r2[e3][3] && !t2.allowBooleanAttributes) return Ie("InvalidAttr", "boolean attribute '" + r2[e3][2] + "' is not allowed.", Me(r2[e3]));
      const s2 = r2[e3][2];
      if (!De(s2)) return Ie("InvalidAttr", "Attribute '" + s2 + "' is an invalid name.", Me(r2[e3]));
      if (Object.prototype.hasOwnProperty.call(n2, s2)) return Ie("InvalidAttr", "Attribute '" + s2 + "' is repeated.", Me(r2[e3]));
      n2[s2] = 1;
    }
    return true;
  }
  function Re(e2, t2) {
    if (";" === e2[++t2]) return -1;
    if ("#" === e2[t2]) return (function(e3, t3) {
      let r3 = /\d/;
      for ("x" === e3[t3] && (t3++, r3 = /[\da-fA-F]/); t3 < e3.length; t3++) {
        if (";" === e3[t3]) return t3;
        if (!e3[t3].match(r3)) break;
      }
      return -1;
    })(e2, ++t2);
    let r2 = 0;
    for (; t2 < e2.length; t2++, r2++) if (!(e2[t2].match(/\w/) && r2 < 20)) {
      if (";" === e2[t2]) break;
      return -1;
    }
    return t2;
  }
  function Ie(e2, t2, r2) {
    return { err: { code: e2, msg: t2, line: r2.line || r2, col: r2.col } };
  }
  function De(e2) {
    return f(e2);
  }
  function ke(e2) {
    return f(e2);
  }
  function Oe(e2, t2) {
    const r2 = e2.substring(0, t2).split(/\r?\n/);
    return { line: r2.length, col: r2[r2.length - 1].length + 1 };
  }
  function Me(e2) {
    return e2.startIndex + e2[1].length;
  }
  const Pe = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }, $e = new Set("!?\\/[]$%{}^&*()<>|+");
  function je(e2) {
    if ("#" === e2[0]) throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e2}"`);
    for (const t2 of e2) if ($e.has(t2)) throw new Error(`[EntityReplacer] Invalid character '${t2}' in entity name: "${e2}"`);
    return e2;
  }
  function Le(...e2) {
    const t2 = /* @__PURE__ */ Object.create(null);
    for (const r2 of e2) if (r2) for (const e3 of Object.keys(r2)) {
      const n2 = r2[e3];
      if ("string" == typeof n2) t2[e3] = n2;
      else if (n2 && "object" == typeof n2 && void 0 !== n2.val) {
        const r3 = n2.val;
        "string" == typeof r3 && (t2[e3] = r3);
      }
    }
    return t2;
  }
  const Ue = "external", Be = "base", Fe = "all";
  const ze = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }), Ve = /* @__PURE__ */ new Set([9, 10, 13]);
  const He = new class {
    _limit;
    _maxTotalExpansions;
    _maxExpandedLength;
    _postCheck;
    _limitTiers;
    _numericAllowed;
    _baseMap;
    _externalMap;
    _inputMap;
    _totalExpansions;
    _expandedLength;
    _removeSet;
    _leaveSet;
    _ncrXmlVersion;
    _ncrOnLevel;
    _ncrNullLevel;
    constructor(e2 = {}) {
      var t2;
      this._limit = e2.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = "function" == typeof e2.postCheck ? e2.postCheck : (e3) => e3, this._limitTiers = (t2 = this._limit.applyLimitsTo ?? Ue) && t2 !== Ue ? t2 === Fe ? /* @__PURE__ */ new Set([Fe]) : t2 === Be ? /* @__PURE__ */ new Set([Be]) : Array.isArray(t2) ? new Set(t2) : /* @__PURE__ */ new Set([Ue]) : /* @__PURE__ */ new Set([Ue]), this._numericAllowed = e2.numericAllowed ?? true, this._baseMap = Le(Pe, e2.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e2.remove && Array.isArray(e2.remove) ? e2.remove : []), this._leaveSet = new Set(e2.leave && Array.isArray(e2.leave) ? e2.leave : []);
      const r2 = (function(e3) {
        if (!e3) return { xmlVersion: 1, onLevel: ze.allow, nullLevel: ze.remove };
        const t3 = 1.1 === e3.xmlVersion ? 1.1 : 1, r3 = ze[e3.onNCR ?? "allow"] ?? ze.allow, n2 = ze[e3.nullNCR ?? "remove"] ?? ze.remove;
        return { xmlVersion: t3, onLevel: r3, nullLevel: Math.max(n2, ze.remove) };
      })(e2.ncr);
      this._ncrXmlVersion = r2.xmlVersion, this._ncrOnLevel = r2.onLevel, this._ncrNullLevel = r2.nullLevel;
    }
    setExternalEntities(e2) {
      if (e2) for (const t2 of Object.keys(e2)) je(t2);
      this._externalMap = Le(e2);
    }
    addExternalEntity(e2, t2) {
      je(e2), "string" == typeof t2 && -1 === t2.indexOf("&") && (this._externalMap[e2] = t2);
    }
    addInputEntities(e2) {
      this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = Le(e2);
    }
    reset() {
      return this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
    }
    setXmlVersion(e2) {
      this._ncrXmlVersion = "1.1" === e2 || 1.1 === e2 ? 1.1 : 1;
    }
    decode(e2) {
      if ("string" != typeof e2 || 0 === e2.length) return e2;
      const t2 = e2, r2 = [], n2 = e2.length;
      let s2 = 0, i2 = 0;
      const o2 = this._maxTotalExpansions > 0, a2 = this._maxExpandedLength > 0, c2 = o2 || a2;
      for (; i2 < n2; ) {
        if (38 !== e2.charCodeAt(i2)) {
          i2++;
          continue;
        }
        let t3 = i2 + 1;
        for (; t3 < n2 && 59 !== e2.charCodeAt(t3) && t3 - i2 <= 32; ) t3++;
        if (t3 >= n2 || 59 !== e2.charCodeAt(t3)) {
          i2++;
          continue;
        }
        const l3 = e2.slice(i2 + 1, t3);
        if (0 === l3.length) {
          i2++;
          continue;
        }
        let u2, d2;
        if (this._removeSet.has(l3)) u2 = "", void 0 === d2 && (d2 = Ue);
        else {
          if (this._leaveSet.has(l3)) {
            i2++;
            continue;
          }
          if (35 === l3.charCodeAt(0)) {
            const e3 = this._resolveNCR(l3);
            if (void 0 === e3) {
              i2++;
              continue;
            }
            u2 = e3, d2 = Be;
          } else {
            const e3 = this._resolveName(l3);
            u2 = e3?.value, d2 = e3?.tier;
          }
        }
        if (void 0 !== u2) {
          if (i2 > s2 && r2.push(e2.slice(s2, i2)), r2.push(u2), s2 = t3 + 1, i2 = s2, c2 && this._tierCounts(d2)) {
            if (o2 && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
            if (a2) {
              const e3 = u2.length - (l3.length + 2);
              if (e3 > 0 && (this._expandedLength += e3, this._expandedLength > this._maxExpandedLength)) throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
            }
          }
        } else i2++;
      }
      s2 < n2 && r2.push(e2.slice(s2));
      const l2 = 0 === r2.length ? e2 : r2.join("");
      return this._postCheck(l2, t2);
    }
    _tierCounts(e2) {
      return !!this._limitTiers.has(Fe) || this._limitTiers.has(e2);
    }
    _resolveName(e2) {
      return e2 in this._inputMap ? { value: this._inputMap[e2], tier: Ue } : e2 in this._externalMap ? { value: this._externalMap[e2], tier: Ue } : e2 in this._baseMap ? { value: this._baseMap[e2], tier: Be } : void 0;
    }
    _classifyNCR(e2) {
      return 0 === e2 ? this._ncrNullLevel : e2 >= 55296 && e2 <= 57343 || 1 === this._ncrXmlVersion && e2 >= 1 && e2 <= 31 && !Ve.has(e2) ? ze.remove : -1;
    }
    _applyNCRAction(e2, t2, r2) {
      switch (e2) {
        case ze.allow:
          return String.fromCodePoint(r2);
        case ze.remove:
          return "";
        case ze.leave:
          return;
        case ze.throw:
          throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t2}; (U+${r2.toString(16).toUpperCase().padStart(4, "0")})`);
        default:
          return String.fromCodePoint(r2);
      }
    }
    _resolveNCR(e2) {
      const t2 = e2.charCodeAt(1);
      let r2;
      if (r2 = 120 === t2 || 88 === t2 ? parseInt(e2.slice(2), 16) : parseInt(e2.slice(1), 10), Number.isNaN(r2) || r2 < 0 || r2 > 1114111) return;
      const n2 = this._classifyNCR(r2);
      if (!this._numericAllowed && n2 < ze.remove) return;
      const s2 = -1 === n2 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n2);
      return this._applyNCRAction(s2, e2, r2);
    }
  }({ namedEntities: { ...Pe, nbsp: " ", copy: "©", reg: "®", trade: "™", mdash: "—", ndash: "–", hellip: "…", laquo: "«", raquo: "»", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", bull: "•", para: "¶", sect: "§", deg: "°", frac12: "½", frac14: "¼", frac34: "¾", cent: "¢", pound: "£", curren: "¤", yen: "¥", euro: "€", dollar: "$", fnof: "ƒ", inr: "₹", af: "؋", birr: "ብር", peso: "₱", rub: "₽", won: "₩", yuan: "¥", cedil: "¸" }, numericAllowed: true, limit: { maxTotalExpansions: 1 / 0 }, ncr: { xmlVersion: 1.1 } }), qe = new class {
    constructor(e2) {
      this.externalEntities = {}, this.options = b(e2);
    }
    parse(e2, t2) {
      if ("string" != typeof e2 && e2.toString) e2 = e2.toString();
      else if ("string" != typeof e2) throw new Error("XML data is accepted in String or Bytes[] form.");
      if (t2) {
        true === t2 && (t2 = {});
        const r3 = (function(e3, t3) {
          t3 = Object.assign({}, be, t3);
          const r4 = [];
          let n3 = false, s2 = false;
          "\uFEFF" === e3[0] && (e3 = e3.substr(1));
          for (let i2 = 0; i2 < e3.length; i2++) if ("<" === e3[i2] && "?" === e3[i2 + 1]) {
            if (i2 += 2, i2 = ve(e3, i2), i2.err) return i2;
          } else {
            if ("<" !== e3[i2]) {
              if (Ee(e3[i2])) continue;
              return Ie("InvalidChar", "char '" + e3[i2] + "' is not expected.", Oe(e3, i2));
            }
            {
              let o2 = i2;
              if (i2++, "!" === e3[i2]) {
                i2 = xe(e3, i2);
                continue;
              }
              {
                let a2 = false;
                "/" === e3[i2] && (a2 = true, i2++);
                let c2 = "";
                for (; i2 < e3.length && ">" !== e3[i2] && " " !== e3[i2] && "	" !== e3[i2] && "\n" !== e3[i2] && "\r" !== e3[i2]; i2++) c2 += e3[i2];
                if (c2 = c2.trim(), "/" === c2[c2.length - 1] && (c2 = c2.substring(0, c2.length - 1), i2--), !ke(c2)) {
                  let t4;
                  return t4 = 0 === c2.trim().length ? "Invalid space after '<'." : "Tag '" + c2 + "' is an invalid name.", Ie("InvalidTag", t4, Oe(e3, i2));
                }
                const l2 = Ne(e3, i2);
                if (false === l2) return Ie("InvalidAttr", "Attributes for '" + c2 + "' have open quote.", Oe(e3, i2));
                let u2 = l2.value;
                if (i2 = l2.index, "/" === u2[u2.length - 1]) {
                  const r5 = i2 - u2.length;
                  u2 = u2.substring(0, u2.length - 1);
                  const s3 = _e(u2, t3);
                  if (true !== s3) return Ie(s3.err.code, s3.err.msg, Oe(e3, r5 + s3.err.line));
                  n3 = true;
                } else if (a2) {
                  if (!l2.tagClosed) return Ie("InvalidTag", "Closing tag '" + c2 + "' doesn't have proper closing.", Oe(e3, i2));
                  if (u2.trim().length > 0) return Ie("InvalidTag", "Closing tag '" + c2 + "' can't have attributes or invalid starting.", Oe(e3, o2));
                  if (0 === r4.length) return Ie("InvalidTag", "Closing tag '" + c2 + "' has not been opened.", Oe(e3, o2));
                  {
                    const t4 = r4.pop();
                    if (c2 !== t4.tagName) {
                      let r5 = Oe(e3, t4.tagStartPos);
                      return Ie("InvalidTag", "Expected closing tag '" + t4.tagName + "' (opened in line " + r5.line + ", col " + r5.col + ") instead of closing tag '" + c2 + "'.", Oe(e3, o2));
                    }
                    0 == r4.length && (s2 = true);
                  }
                } else {
                  const a3 = _e(u2, t3);
                  if (true !== a3) return Ie(a3.err.code, a3.err.msg, Oe(e3, i2 - u2.length + a3.err.line));
                  if (true === s2) return Ie("InvalidXml", "Multiple possible root nodes found.", Oe(e3, i2));
                  -1 !== t3.unpairedTags.indexOf(c2) || r4.push({ tagName: c2, tagStartPos: o2 }), n3 = true;
                }
                for (i2++; i2 < e3.length; i2++) if ("<" === e3[i2]) {
                  if ("!" === e3[i2 + 1]) {
                    i2++, i2 = xe(e3, i2);
                    continue;
                  }
                  if ("?" !== e3[i2 + 1]) break;
                  if (i2 = ve(e3, ++i2), i2.err) return i2;
                } else if ("&" === e3[i2]) {
                  const t4 = Re(e3, i2);
                  if (-1 == t4) return Ie("InvalidChar", "char '&' is not expected.", Oe(e3, i2));
                  i2 = t4;
                } else if (true === s2 && !Ee(e3[i2])) return Ie("InvalidXml", "Extra text at the end", Oe(e3, i2));
                "<" === e3[i2] && i2--;
              }
            }
          }
          return n3 ? 1 == r4.length ? Ie("InvalidTag", "Unclosed tag '" + r4[0].tagName + "'.", Oe(e3, r4[0].tagStartPos)) : !(r4.length > 0) || Ie("InvalidXml", "Invalid '" + JSON.stringify(r4.map((e4) => e4.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : Ie("InvalidXml", "Start tag expected.", 1);
        })(e2, t2);
        if (true !== r3) throw Error(`${r3.err.msg}:${r3.err.line}:${r3.err.col}`);
      }
      const r2 = new K(this.options, this.externalEntities), n2 = r2.parseXml(e2);
      return this.options.preserveOrder || void 0 === n2 ? n2 : ge(n2, this.options, r2.matcher, r2.readonlyMatcher);
    }
    addEntity(e2, t2) {
      if (-1 !== t2.indexOf("&")) throw new Error("Entity value can't have '&'");
      if (-1 !== e2.indexOf("&") || -1 !== e2.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if ("&" === t2) throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[e2] = t2;
    }
    static getMetaDataSymbol() {
      return v.getMetaDataSymbol();
    }
  }({ attributeNamePrefix: "", processEntities: { enabled: true, maxTotalExpansions: 1 / 0 }, htmlEntities: true, entityDecoder: { setExternalEntities: (e2) => {
    He.setExternalEntities(e2);
  }, addInputEntities: (e2) => {
    He.addInputEntities(e2);
  }, reset: () => {
    He.reset();
  }, decode: (e2) => He.decode(e2), setXmlVersion: (e2) => {
  } }, ignoreAttributes: false, ignoreDeclaration: true, parseTagValue: false, trimValues: false, tagValueProcessor: (e2, t2) => "" === t2.trim() && t2.includes("\n") ? "" : void 0, maxNestedTags: 1 / 0 });
  function We(e2) {
    return qe.parse(e2, true);
  }
}, 43801: (e, t, r) => {
  "use strict";
  r.d(t, { y: () => c });
  var n = r(42997), s = r(73931), i = r(96851), o = r(99430);
  const a = (e2) => "number" == typeof e2 ? new Date(1e3 * e2) : "string" == typeof e2 ? Number(e2) ? new Date(1e3 * Number(e2)) : new Date(e2) : e2;
  class c {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum: e2, credentials: t2, region: r2, service: s2, sha256: i2, uriEscapePath: o2 = true }) {
      this.service = s2, this.sha256 = i2, this.uriEscapePath = o2, this.applyChecksum = "boolean" != typeof e2 || e2, this.regionProvider = (0, n.normalizeProvider)(r2), this.credentialProvider = (0, n.normalizeProvider)(t2);
    }
    createCanonicalRequest(e2, t2, r2) {
      const n2 = Object.keys(t2).sort();
      return `${e2.method}
${this.getCanonicalPath(e2)}
${(0, o.$)(e2)}
${n2.map((e3) => `${e3}:${t2[e3]}`).join("\n")}

${n2.join(";")}
${r2}`;
    }
    async createStringToSign(e2, t2, r2, n2) {
      const s2 = new this.sha256();
      s2.update((0, i.toUint8Array)(r2));
      const o2 = await s2.digest();
      return `${n2}
${e2}
${t2}
${(0, i.toHex)(o2)}`;
    }
    getCanonicalPath({ path: e2 }) {
      if (this.uriEscapePath) {
        const t2 = [];
        for (const r3 of e2.split("/")) 0 !== r3?.length && "." !== r3 && (".." === r3 ? t2.pop() : t2.push(r3));
        const r2 = `${e2?.startsWith("/") ? "/" : ""}${t2.join("/")}${t2.length > 0 && e2?.endsWith("/") ? "/" : ""}`;
        return (0, s.escapeUri)(r2).replace(/%2F/g, "/");
      }
      return e2;
    }
    validateResolvedCredentials(e2) {
      if ("object" != typeof e2 || "string" != typeof e2.accessKeyId || "string" != typeof e2.secretAccessKey) throw new Error("Resolved credential object is not valid");
    }
    formatDate(e2) {
      const t2 = (r2 = e2, a(r2).toISOString().replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
      var r2;
      return { longDate: t2, shortDate: t2.slice(0, 8) };
    }
    getCanonicalHeaderList(e2) {
      return Object.keys(e2).sort().join(";");
    }
  }
}, 49125: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { fromUtf8: () => n.a, toUint8Array: () => s.F, toUtf8: () => i.P });
  var n = r(6846), s = r(15725), i = r(86507);
}, 50941: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { resolveDefaultsModeConfig: () => u });
  var n = r(24060), s = r(56508), i = r(4644);
  const o = "AWS_REGION", a = "AWS_DEFAULT_REGION", c = ["in-region", "cross-region", "mobile", "standard", "legacy"], l = { environmentVariableSelector: (e2) => e2.AWS_DEFAULTS_MODE, configFileSelector: (e2) => e2.defaults_mode, default: "legacy" }, u = ({ region: e2 = (0, s.Z)(n.GG), defaultsMode: t2 = (0, s.Z)(l) } = {}) => (0, i.B)(async () => {
    const r2 = "function" == typeof t2 ? await t2() : t2;
    switch (r2?.toLowerCase()) {
      case "auto":
        return d(e2);
      case "in-region":
      case "cross-region":
      case "mobile":
      case "standard":
      case "legacy":
        return Promise.resolve(r2?.toLocaleLowerCase());
      case void 0:
        return Promise.resolve("legacy");
      default:
        throw new Error(`Invalid parameter for "defaultsMode", expect ${c.join(", ")}, got ${r2}`);
    }
  }), d = async (e2) => {
    if (e2) {
      const t2 = "function" == typeof e2 ? await e2() : e2, r2 = await h();
      return r2 ? t2 === r2 ? "in-region" : "cross-region" : "standard";
    }
    return "standard";
  }, h = async () => {
    if (process.env.AWS_EXECUTION_ENV && (process.env[o] || process.env[a])) return process.env[o] ?? process.env[a];
    if (!process.env.AWS_EC2_METADATA_DISABLED) try {
      const { getInstanceMetadataEndpoint: e2, httpRequest: t2 } = await r.e(373).then(r.bind(r, 41516)), n2 = await e2();
      return (await t2({ ...n2, path: "/latest/meta-data/placement/region" })).toString();
    } catch (e2) {
    }
  };
}, 50949: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { getHostHeaderPlugin: () => a, hostHeaderMiddleware: () => i, hostHeaderMiddlewareOptions: () => o, resolveHostHeaderConfig: () => s });
  var n = r(50333);
  function s(e2) {
    return e2;
  }
  const i = (e2) => (t2) => async (r2) => {
    if (!n.K.isInstance(r2.request)) return t2(r2);
    const { request: s2 } = r2, { handlerProtocol: i2 = "" } = e2.requestHandler.metadata || {};
    if (i2.indexOf("h2") >= 0 && !s2.headers[":authority"]) delete s2.headers.host, s2.headers[":authority"] = s2.hostname + (s2.port ? ":" + s2.port : "");
    else if (!s2.headers.host) {
      let e3 = s2.hostname;
      null != s2.port && (e3 += `:${s2.port}`), s2.headers.host = e3;
    }
    return t2(r2);
  }, o = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: true }, a = (e2) => ({ applyToStack: (t2) => {
    t2.add(i(e2), o);
  } });
}, 51181: (e, t, r) => {
  "use strict";
  r.d(t, { Df: () => o, G8: () => s, Rn: () => c, XP: () => l, XS: () => a, bp: () => n, jh: () => i, l5: () => u, ok: () => d });
  const n = 100, s = 2e4, i = 500, o = 500, a = 5, c = 10, l = 1, u = "amz-sdk-invocation-id", d = "amz-sdk-request";
}, 53804: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { endpointMiddleware: () => b, endpointMiddlewareOptions: () => v, getEndpointFromInstructions: () => m, getEndpointPlugin: () => x, resolveEndpointConfig: () => A, resolveEndpointRequiredConfig: () => N, resolveParams: () => y, toEndpointV1: () => g });
  const n = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, s = /(\d+\.){3}\d+/, i = /\.\./, o = (e2) => n.test(e2) && !s.test(e2) && !i.test(e2), a = (e2) => {
    const [t2, r2, n2, , , s2] = e2.split(":"), i2 = "arn" === t2 && e2.split(":").length >= 6, o2 = Boolean(i2 && r2 && n2 && s2);
    if (i2 && !o2) throw new Error(`Invalid ARN: ${e2} was an invalid ARN.`);
    return o2;
  }, c = (e2, t2, r2, n2 = false) => {
    const s2 = async () => {
      let s3;
      if (n2) {
        const n3 = r2.clientContextParams, i2 = n3?.[e2];
        s3 = i2 ?? r2[e2] ?? r2[t2];
      } else s3 = r2[e2] ?? r2[t2];
      return "function" == typeof s3 ? s3() : s3;
    };
    return "credentialScope" === e2 || "CredentialScope" === t2 ? async () => {
      const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
      return e3?.credentialScope ?? e3?.CredentialScope;
    } : "accountId" === e2 || "AccountId" === t2 ? async () => {
      const e3 = "function" == typeof r2.credentials ? await r2.credentials() : r2.credentials;
      return e3?.accountId ?? e3?.AccountId;
    } : "endpoint" === e2 || "endpoint" === t2 ? async () => {
      if (false === r2.isCustomEndpoint) return;
      const e3 = await s2();
      if (e3 && "object" == typeof e3) {
        if ("url" in e3) return e3.url.href;
        if ("hostname" in e3) {
          const { protocol: t3, hostname: r3, port: n3, path: s3 } = e3;
          return `${t3}//${r3}${n3 ? ":" + n3 : ""}${s3}`;
        }
      }
      return e3;
    } : s2;
  };
  var l = r(56508), u = r(21945);
  const d = "AWS_ENDPOINT_URL", h = "endpoint_url", f = async (e2) => (0, l.Z)(/* @__PURE__ */ ((e3) => ({ environmentVariableSelector: (t2) => {
    const r2 = e3.split(" ").map((e4) => e4.toUpperCase()), n2 = t2[[d, ...r2].join("_")];
    if (n2) return n2;
    return t2[d] || void 0;
  }, configFileSelector: (t2, r2) => {
    if (r2 && t2.services) {
      const n3 = r2[["services", t2.services].join(u.Q)];
      if (n3) {
        const t3 = n3[[e3.split(" ").map((e4) => e4.toLowerCase()).join("_"), h].join(u.Q)];
        if (t3) return t3;
      }
    }
    const n2 = t2[h];
    if (n2) return n2;
  }, default: void 0 }))(e2 ?? ""))();
  var p = r(55264);
  const g = (e2) => {
    if ("object" == typeof e2) {
      if ("url" in e2) {
        const t2 = (0, p.parseUrl)(e2.url);
        if (e2.headers) {
          t2.headers = {};
          for (const [r2, n2] of Object.entries(e2.headers)) t2.headers[r2.toLowerCase()] = n2.join(", ");
        }
        return t2;
      }
      return e2;
    }
    return (0, p.parseUrl)(e2);
  }, m = async (e2, t2, r2, n2) => {
    if (!r2.isCustomEndpoint) {
      let e3;
      e3 = r2.serviceConfiguredEndpoint ? await r2.serviceConfiguredEndpoint() : await f(r2.serviceId), e3 && (r2.endpoint = () => Promise.resolve(g(e3)), r2.isCustomEndpoint = true);
    }
    const s2 = await y(e2, t2, r2);
    if ("function" != typeof r2.endpointProvider) throw new Error("config.endpointProvider is not set.");
    const i2 = r2.endpointProvider(s2, n2);
    if (r2.isCustomEndpoint && r2.endpoint) {
      const e3 = await r2.endpoint();
      if (e3?.headers) {
        i2.headers ??= {};
        for (const [t3, r3] of Object.entries(e3.headers)) i2.headers[t3] = Array.isArray(r3) ? r3 : [r3];
      }
    }
    return i2;
  }, y = async (e2, t2, r2) => {
    const n2 = {}, s2 = t2?.getEndpointParameterInstructions?.() || {};
    for (const [t3, i2] of Object.entries(s2)) switch (i2.type) {
      case "staticContextParams":
        n2[t3] = i2.value;
        break;
      case "contextParams":
        n2[t3] = e2[i2.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        n2[t3] = await c(i2.name, t3, r2, "builtInParams" !== i2.type)();
        break;
      case "operationContextParams":
        n2[t3] = i2.get(e2);
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(i2));
    }
    return 0 === Object.keys(s2).length && Object.assign(n2, r2), "s3" === String(r2.serviceId).toLowerCase() && await (async (e3) => {
      const t3 = e3?.Bucket || "";
      if ("string" == typeof e3.Bucket && (e3.Bucket = t3.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), a(t3)) {
        if (true === e3.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
      } else (!o(t3) || -1 !== t3.indexOf(".") && !String(e3.Endpoint).startsWith("http:") || t3.toLowerCase() !== t3 || t3.length < 3) && (e3.ForcePathStyle = true);
      return e3.DisableMultiRegionAccessPoints && (e3.disableMultiRegionAccessPoints = true, e3.DisableMRAP = true), e3;
    })(n2), n2;
  };
  var w = r(55909), S = r(85919);
  const b = ({ config: e2, instructions: t2 }) => (r2, n2) => async (s2) => {
    e2.isCustomEndpoint && (0, w.setFeature)(n2, "ENDPOINT_OVERRIDE", "N");
    const i2 = await m(s2.input, { getEndpointParameterInstructions: () => t2 }, { ...e2 }, n2);
    n2.endpointV2 = i2, n2.authSchemes = i2.properties?.authSchemes;
    const o2 = n2.authSchemes?.[0];
    if (o2) {
      n2.signing_region = o2.signingRegion, n2.signing_service = o2.signingName;
      const e3 = (0, S.u)(n2), t3 = e3?.selectedHttpAuthScheme?.httpAuthOption;
      t3 && (t3.signingProperties = Object.assign(t3.signingProperties || {}, { signing_region: o2.signingRegion, signingRegion: o2.signingRegion, signing_service: o2.signingName, signingName: o2.signingName, signingRegionSet: o2.signingRegionSet }, o2.properties));
    }
    return r2({ ...s2 });
  }, E = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: true };
  const v = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: true, relation: "before", toMiddleware: E.name }, x = (e2, t2) => ({ applyToStack: (r2) => {
    r2.addRelativeTo(b({ config: e2, instructions: t2 }), v);
  } });
  var T = r(90570);
  const A = (e2) => {
    const t2 = e2.tls ?? true, { endpoint: r2, useDualstackEndpoint: n2, useFipsEndpoint: s2 } = e2, i2 = null != r2 ? async () => g(await (0, T.t)(r2)()) : void 0, o2 = !!r2, a2 = Object.assign(e2, { endpoint: i2, tls: t2, isCustomEndpoint: o2, useDualstackEndpoint: (0, T.t)(n2 ?? false), useFipsEndpoint: (0, T.t)(s2 ?? false) });
    let c2;
    return a2.serviceConfiguredEndpoint = async () => (e2.serviceId && !c2 && (c2 = f(e2.serviceId)), c2), a2;
  }, N = (e2) => {
    const { endpoint: t2 } = e2;
    return void 0 === t2 && (e2.endpoint = async () => {
      throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    }), e2;
  };
}, 54940: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { DEFAULT_UA_APP_ID: () => n.b, getUserAgentMiddlewareOptions: () => g, getUserAgentPlugin: () => m, resolveUserAgentConfig: () => n.D, userAgentMiddleware: () => f });
  var n = r(23170), s = r(85644), i = r(50333), o = r(97464), a = r(64972);
  const c = /\d{12}\.ddb/;
  const l = "user-agent", u = "x-amz-user-agent", d = /[^!$%&'*+\-.^_`|~\w]/g, h = /[^!$%&'*+\-.^_`|~\w#]/g;
  const f = (e2) => (t2, r2) => async (n2) => {
    const { request: d2 } = n2;
    if (!i.K.isInstance(d2)) return t2(n2);
    const { headers: h2 } = d2, f2 = r2?.userAgent?.map(p) || [], g2 = (await e2.defaultUserAgentProvider()).map(p);
    await (async function(e3, t3, r3) {
      const n3 = r3.request;
      if ("rpc-v2-cbor" === n3?.headers?.["smithy-protocol"] && (0, o.setFeature)(e3, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t3.retryStrategy) {
        const r4 = await t3.retryStrategy();
        if ("string" == typeof r4.mode) switch (r4.mode) {
          case a.cm.ADAPTIVE:
            (0, o.setFeature)(e3, "RETRY_MODE_ADAPTIVE", "F");
            break;
          case a.cm.STANDARD:
            (0, o.setFeature)(e3, "RETRY_MODE_STANDARD", "E");
        }
      }
      if ("function" == typeof t3.accountIdEndpointMode) {
        const r4 = e3.endpointV2;
        switch (String(r4?.url?.hostname).match(c) && (0, o.setFeature)(e3, "ACCOUNT_ID_ENDPOINT", "O"), await t3.accountIdEndpointMode?.()) {
          case "disabled":
            (0, o.setFeature)(e3, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            (0, o.setFeature)(e3, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            (0, o.setFeature)(e3, "ACCOUNT_ID_MODE_REQUIRED", "R");
        }
      }
      const s2 = e3.__smithy_context?.selectedHttpAuthScheme?.identity;
      if (s2?.$source) {
        const t4 = s2;
        t4.accountId && (0, o.setFeature)(e3, "RESOLVED_ACCOUNT_ID", "T");
        for (const [r4, n4] of Object.entries(t4.$source ?? {})) (0, o.setFeature)(e3, r4, n4);
      }
    })(r2, e2, n2);
    const m2 = r2;
    g2.push(`m/${(function(e3) {
      let t3 = "";
      for (const r3 in e3) {
        const n3 = e3[r3];
        if (!(t3.length + n3.length + 1 <= 1024)) break;
        t3.length ? t3 += "," + n3 : t3 += n3;
      }
      return t3;
    })(Object.assign({}, r2.__smithy_context?.features, m2.__aws_sdk_context?.features))}`);
    const y = e2?.customUserAgent?.map(p) || [], w = await e2.userAgentAppId();
    w && g2.push(p(["app", `${w}`]));
    const S = (0, s.getUserAgentPrefix)(), b = (S ? [S] : []).concat([...g2, ...f2, ...y]).join(" "), E = [...g2.filter((e3) => e3.startsWith("aws-sdk-")), ...y].join(" ");
    return "browser" !== e2.runtime ? (E && (h2[u] = h2[u] ? `${h2[l]} ${E}` : E), h2[l] = b) : h2[u] = b, t2({ ...n2, request: d2 });
  }, p = (e2) => {
    const t2 = e2[0].split("/").map((e3) => e3.replace(d, "-")).join("/"), r2 = e2[1]?.replace(h, "-"), n2 = t2.indexOf("/"), s2 = t2.substring(0, n2);
    let i2 = t2.substring(n2 + 1);
    return "api" === s2 && (i2 = i2.toLowerCase()), [s2, i2, r2].filter((e3) => e3 && e3.length > 0).reduce((e3, t3, r3) => {
      switch (r3) {
        case 0:
          return t3;
        case 1:
          return `${e3}/${t3}`;
        default:
          return `${e3}#${t3}`;
      }
    }, "");
  }, g = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: true }, m = (e2) => ({ applyToStack: (t2) => {
    t2.add(f(e2), g);
  } });
}, 55264: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { parseUrl: () => n });
  const n = (e2) => {
    if ("string" == typeof e2) return n(new URL(e2));
    const { hostname: t2, pathname: r2, port: s, protocol: i, search: o } = e2;
    let a;
    return o && (a = (function(e3) {
      const t3 = {};
      if (e3 = e3.replace(/^\?/, "")) for (const r3 of e3.split("&")) {
        let [e4, n2 = null] = r3.split("=");
        e4 = decodeURIComponent(e4), n2 && (n2 = decodeURIComponent(n2)), e4 in t3 ? Array.isArray(t3[e4]) ? t3[e4].push(n2) : t3[e4] = [t3[e4], n2] : t3[e4] = n2;
      }
      return t3;
    })(o)), { hostname: t2, port: s ? parseInt(s) : void 0, protocol: i, path: r2, query: a };
  };
}, 55936: (e, t, r) => {
  "use strict";
  r.d(t, { n: () => i });
  var n = r(90443), s = r(6846);
  const i = (e2) => {
    let t2;
    if (t2 = "string" == typeof e2 ? (0, s.a)(e2) : e2, "object" != typeof t2 || "number" != typeof t2.byteOffset || "number" != typeof t2.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return (0, n.Q)(t2.buffer, t2.byteOffset, t2.byteLength).toString("base64");
  };
}, 56508: (e, t, r) => {
  "use strict";
  r.d(t, { Z: () => u });
  var n = r(4644), s = r(34661), i = r(63725);
  function o(e2) {
    try {
      const t2 = new Set(Array.from(e2.match(/([A-Z_]){3,}/g) ?? []));
      return t2.delete("CONFIG"), t2.delete("CONFIG_PREFIX_SEPARATOR"), t2.delete("ENV"), [...t2].join(", ");
    } catch (t2) {
      return e2;
    }
  }
  var a = r(76964), c = r(61247);
  const l = (e2) => {
    return "function" == typeof e2 ? async () => await e2() : (t2 = e2, () => Promise.resolve(t2));
    var t2;
  }, u = ({ environmentVariableSelector: e2, configFileSelector: t2, default: r2 }, u2 = {}) => {
    const { signingName: d, logger: h } = u2, f = { signingName: d, logger: h };
    return (0, n.B)((0, s.c)((p = e2, g = f, async () => {
      try {
        const e3 = p(process.env, g);
        if (void 0 === e3) throw new Error();
        return e3;
      } catch (e3) {
        throw new i.C(e3.message || `Not found in ENV: ${o(p.toString())}`, { logger: g?.logger });
      }
    }), ((e3, { preferredFile: t3 = "config", ...r3 } = {}) => async () => {
      const n2 = (0, a.Bz)(r3), { configFile: s2, credentialsFile: l2 } = await (0, c.p)(r3), u3 = l2[n2] || {}, d2 = s2[n2] || {}, h2 = "config" === t3 ? { ...u3, ...d2 } : { ...d2, ...u3 };
      try {
        const r4 = e3(h2, "config" === t3 ? s2 : l2);
        if (void 0 === r4) throw new Error();
        return r4;
      } catch (t4) {
        throw new i.C(t4.message || `Not found in config files w/ profile [${n2}]: ${o(e3.toString())}`, { logger: r3.logger });
      }
    })(t2, u2), l(r2)));
    var p, g;
  };
}, 58004: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { contentLengthMiddleware: () => i, contentLengthMiddlewareOptions: () => o, getContentLengthPlugin: () => a });
  var n = r(50333);
  const s = "content-length";
  function i(e2) {
    return (t2) => async (r2) => {
      const i2 = r2.request;
      if (n.K.isInstance(i2)) {
        const { body: t3, headers: r3 } = i2;
        if (t3 && -1 === Object.keys(r3).map((e3) => e3.toLowerCase()).indexOf(s)) try {
          const r4 = e2(t3);
          i2.headers = { ...i2.headers, [s]: String(r4) };
        } catch (e3) {
        }
      }
      return t2({ ...r2, request: i2 });
    };
  }
  const o = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: true }, a = (e2) => ({ applyToStack: (t2) => {
    t2.add(i(e2.bodyLengthChecker), o);
  } });
}, 58571: (e, t, r) => {
  const { ProviderError: n, booleanSelector: s, SelectorType: i, loadConfig: o } = r(86344), { setCredentialFeature: a } = r(97464), { normalizeProvider: c, memoizeIdentityProvider: l, isIdentityExpired: u, doesIdentityRequireRefresh: d } = r(55909), { SignatureV4: h } = r(6328), { HttpResponse: f, HttpRequest: p } = r(73931), g = (e2) => f.isInstance(e2) ? e2.headers?.date ?? e2.headers?.Date : void 0, m = (e2) => f.isInstance(e2) ? e2.headers?.age ?? e2.headers?.Age : void 0, y = (e2) => new Date(Date.now() + e2), w = (e2, t2, r2, n2) => {
    if (void 0 !== n2) return t2;
    const s2 = Date.parse(e2), i2 = Date.now();
    if (void 0 !== r2 && i2 - r2 > 9e5) return t2;
    return void 0 !== r2 ? s2 - (r2 + i2) / 2 : s2 - i2;
  }, S = (e2, t2) => {
    if (!t2) throw new Error(`Property \`${e2}\` is not resolved for AWS SDK SigV4Auth`);
    return t2;
  }, b = async (e2) => {
    const t2 = S("context", e2.context), r2 = S("config", e2.config), n2 = t2.endpointV2?.properties?.authSchemes?.[0], s2 = S("signer", r2.signer), i2 = await s2(n2), o2 = e2?.signingRegion, a2 = e2?.signingRegionSet, c2 = e2?.signingName;
    return { config: r2, signer: i2, signingRegion: o2, signingRegionSet: a2, signingName: c2 };
  };
  class E {
    async sign(e2, t2, r2) {
      if (!p.isInstance(e2)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      const n2 = await b(r2), { config: s2, signer: i2 } = n2;
      let { signingRegion: o2, signingName: a2 } = n2;
      const c2 = r2.context;
      if (c2?.authSchemes?.length) {
        const [e3, t3] = c2.authSchemes;
        "sigv4a" === e3?.name && "sigv4" === t3?.name && (o2 = t3?.signingRegion ?? o2, a2 = t3?.signingName ?? a2);
      }
      const l2 = true === await s2.disableClockSkewCorrection?.();
      r2._disableClockSkewCorrection = l2, l2 || (r2._preRequestSystemClockOffset = s2.systemClockOffset, r2._requestSentAt = Date.now());
      return await i2.sign(e2, { signingDate: l2 ? /* @__PURE__ */ new Date() : y(s2.systemClockOffset), signingRegion: o2, signingService: a2 });
    }
    errorHandler(e2) {
      return (t2) => {
        const r2 = t2;
        if (!e2._disableClockSkewCorrection) {
          const t3 = r2.ServerTime ?? g(r2.$response);
          if (t3) {
            const n2 = S("config", e2.config), s2 = e2._preRequestSystemClockOffset, i2 = e2._requestSentAt, o2 = m(r2.$response), a2 = w(t3, n2.systemClockOffset, i2, o2);
            n2.systemClockOffset = a2;
            Math.abs(a2) >= 24e4 && (a2 !== s2 || void 0 !== s2 && s2 !== a2) && r2.$metadata && (r2.$metadata.clockSkewCorrected = true);
          }
        }
        throw t2;
      };
    }
    successHandler(e2, t2) {
      if (t2._disableClockSkewCorrection) return;
      const r2 = g(e2);
      if (r2) {
        const n2 = S("config", t2.config), s2 = t2._requestSentAt, i2 = m(e2);
        n2.systemClockOffset = w(r2, n2.systemClockOffset, s2, i2);
      }
    }
  }
  const v = E;
  const x = (e2) => "string" == typeof e2 && e2.length > 0 ? e2.split(",").map((e3) => e3.trim()) : [], T = (e2) => `AWS_BEARER_TOKEN_${e2.replace(/[\s-]/g, "_").toUpperCase()}`, A = "AWS_AUTH_SCHEME_PREFERENCE", N = "auth_scheme_preference", C = { environmentVariableSelector: (e2, t2) => {
    if (t2?.signingName) {
      if (T(t2.signingName) in e2) return ["httpBearerAuth"];
    }
    if (A in e2) return x(e2[A]);
  }, configFileSelector: (e2) => {
    if (N in e2) return x(e2[N]);
  }, default: [] }, _ = { environmentVariableSelector(e2) {
    if (e2.AWS_SIGV4A_SIGNING_REGION_SET) return e2.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((e3) => e3.trim());
    throw new n("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", { tryNextLink: true });
  }, configFileSelector(e2) {
    if (e2.sigv4a_signing_region_set) return (e2.sigv4a_signing_region_set ?? "").split(",").map((e3) => e3.trim());
    throw new n("sigv4a_signing_region_set not set in profile.", { tryNextLink: true });
  }, default: void 0 };
  const R = o({ environmentVariableSelector: (e2) => s(e2, "AWS_DISABLE_CLOCK_SKEW_CORRECTION", i.ENV), configFileSelector: (e2) => s(e2, "disable_clock_skew_correction", i.CONFIG), default: false }), I = (D = R, (e2) => {
    let t2, r2 = e2.credentials, n2 = !!e2.credentials;
    Object.defineProperty(e2, "credentials", { set(s3) {
      s3 && s3 !== r2 && s3 !== t2 && (n2 = true), r2 = s3;
      const i3 = (function(e3, { credentials: t3, credentialDefaultProvider: r3 }) {
        let n3;
        return n3 = t3 ? t3?.memoized ? t3 : l(t3, u, d) : r3 ? c(r3(Object.assign({}, e3, { parentClientConfig: e3 }))) : async () => {
          throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
        }, n3.memoized = true, n3;
      })(e2, { credentials: r2, credentialDefaultProvider: e2.credentialDefaultProvider }), o3 = (function(e3, t3) {
        if (t3.configBound) return t3;
        const r3 = async (r4) => t3({ ...r4, callerClientConfig: e3 });
        return r3.memoized = t3.memoized, r3.configBound = true, r3;
      })(e2, i3);
      if (n2 && !o3.attributed) {
        const e3 = "object" == typeof r2 && null !== r2;
        t2 = async (t3) => {
          const r3 = await o3(t3);
          return !e3 || r3.$source && 0 !== Object.keys(r3.$source).length ? r3 : a(r3, "CREDENTIALS_CODE", "e");
        }, t2.memoized = o3.memoized, t2.configBound = o3.configBound, t2.attributed = true;
      } else t2 = o3;
    }, get: () => t2, enumerable: true, configurable: true }), e2.credentials = r2;
    const { signingEscapePath: s2 = true, systemClockOffset: i2 = e2.systemClockOffset || 0, sha256: o2 } = e2;
    let f2;
    return f2 = e2.signer ? c(e2.signer) : e2.regionInfoProvider ? () => c(e2.region)().then(async (t3) => [await e2.regionInfoProvider(t3, { useFipsEndpoint: await e2.useFipsEndpoint(), useDualstackEndpoint: await e2.useDualstackEndpoint() }) || {}, t3]).then(([t3, r3]) => {
      const { signingRegion: n3, signingService: i3 } = t3;
      e2.signingRegion = e2.signingRegion || n3 || r3, e2.signingName = e2.signingName || i3 || e2.serviceId;
      const a2 = { ...e2, credentials: e2.credentials, region: e2.signingRegion, service: e2.signingName, sha256: o2, uriEscapePath: s2 };
      return new (e2.signerConstructor || h)(a2);
    }) : async (t3) => {
      const r3 = (t3 = Object.assign({}, { name: "sigv4", signingName: e2.signingName || e2.defaultSigningName, signingRegion: await c(e2.region)(), properties: {} }, t3)).signingRegion, n3 = t3.signingName;
      e2.signingRegion = e2.signingRegion || r3, e2.signingName = e2.signingName || n3 || e2.serviceId;
      const i3 = { ...e2, credentials: e2.credentials, region: e2.signingRegion, service: e2.signingName, sha256: o2, uriEscapePath: s2 };
      return new (e2.signerConstructor || h)(i3);
    }, Object.assign(e2, { systemClockOffset: i2, signingEscapePath: s2, signer: f2, disableClockSkewCorrection: c(e2.disableClockSkewCorrection ?? D) });
  });
  var D;
  const k = I;
  t.AWSSDKSigV4Signer = v, t.AwsSdkSigV4ASigner = class extends E {
    async sign(e2, t2, r2) {
      if (!p.isInstance(e2)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      const { config: n2, signer: s2, signingRegion: i2, signingRegionSet: o2, signingName: a2 } = await b(r2), c2 = (await n2.sigv4aSigningRegionSet?.() ?? o2 ?? [i2]).join(","), l2 = true === await n2.disableClockSkewCorrection?.();
      r2._disableClockSkewCorrection = l2, l2 || (r2._preRequestSystemClockOffset = n2.systemClockOffset, r2._requestSentAt = Date.now());
      return await s2.sign(e2, { signingDate: l2 ? /* @__PURE__ */ new Date() : y(n2.systemClockOffset), signingRegion: c2, signingService: a2 });
    }
  }, t.AwsSdkSigV4Signer = E, t.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = C, t.NODE_SIGV4A_CONFIG_OPTIONS = _, t.getBearerTokenEnvKey = T, t.resolveAWSSDKSigV4Config = k, t.resolveAwsSdkSigV4AConfig = (e2) => (e2.sigv4aSigningRegionSet = c(e2.sigv4aSigningRegionSet), e2), t.resolveAwsSdkSigV4Config = I, t.validateSigningProperties = b;
}, 58574: (e, t, r) => {
  "use strict";
  r.d(t, { h5: () => u, S0: () => l, GQ: () => f, Qb: () => d, bV: () => h });
  const n = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"], s = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"], i = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], o = [500, 502, 503, 504], a = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], c = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"], l = (e2) => void 0 !== e2?.$retryable, u = (e2) => n.includes(e2.name), d = (e2) => 429 === e2.$metadata?.httpStatusCode || s.includes(e2.name) || 1 == e2.$retryable?.throttling, h = (e2, t2 = 0) => l(e2) || ((e3) => e3.$metadata?.clockSkewCorrected)(e2) || "InvalidSignatureException" === e2.name && e2.message?.includes("Signature expired") || i.includes(e2.name) || a.includes(e2?.code || "") || c.includes(e2?.code || "") || o.includes(e2.$metadata?.httpStatusCode || 0) || ((e3) => {
    const t3 = /* @__PURE__ */ new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
    return !!(e3 && e3 instanceof TypeError) && t3.has(e3.message);
  })(e2) || (function(e3) {
    return "ERR_HTTP2_STREAM_ERROR" === e3.code && e3.message.includes("NGHTTP2_REFUSED_STREAM");
  })(e2) || void 0 !== e2.cause && t2 <= 10 && h(e2.cause, t2 + 1), f = (e2) => {
    if (void 0 !== e2.$metadata?.httpStatusCode) {
      const t2 = e2.$metadata.httpStatusCode;
      return 500 <= t2 && t2 <= 599 && !h(e2);
    }
    return false;
  };
}, 58699: (e, t, r) => {
  "use strict";
  r.d(t, { ou: () => n });
  const n = (e2, t2) => {
    e2 = e2.toLowerCase();
    for (const r2 of Object.keys(t2)) if (e2 === r2.toLowerCase()) return true;
    return false;
  };
}, 59344: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { Field: () => o, Fields: () => a, HttpRequest: () => c.K, HttpResponse: () => l.c, getHttpHandlerExtensionConfiguration: () => n, isValidHostname: () => u, resolveHttpHandlerRuntimeConfig: () => s });
  const n = (e2) => ({ setHttpHandler(t2) {
    e2.httpHandler = t2;
  }, httpHandler: () => e2.httpHandler, updateHttpClientConfig(t2, r2) {
    e2.httpHandler?.updateHttpClientConfig(t2, r2);
  }, httpHandlerConfigs: () => e2.httpHandler.httpHandlerConfigs() }), s = (e2) => ({ httpHandler: e2.httpHandler() });
  var i;
  !(function(e2) {
    e2[e2.HEADER = 0] = "HEADER", e2[e2.TRAILER = 1] = "TRAILER";
  })(i || (i = {}));
  class o {
    name;
    kind;
    values;
    constructor({ name: e2, kind: t2 = i.HEADER, values: r2 = [] }) {
      this.name = e2, this.kind = t2, this.values = r2;
    }
    add(e2) {
      this.values.push(e2);
    }
    set(e2) {
      this.values = e2;
    }
    remove(e2) {
      this.values = this.values.filter((t2) => t2 !== e2);
    }
    toString() {
      return this.values.map((e2) => e2.includes(",") || e2.includes(" ") ? `"${e2}"` : e2).join(", ");
    }
    get() {
      return this.values;
    }
  }
  class a {
    entries = {};
    encoding;
    constructor({ fields: e2 = [], encoding: t2 = "utf-8" }) {
      e2.forEach(this.setField.bind(this)), this.encoding = t2;
    }
    setField(e2) {
      this.entries[e2.name.toLowerCase()] = e2;
    }
    getField(e2) {
      return this.entries[e2.toLowerCase()];
    }
    removeField(e2) {
      delete this.entries[e2.toLowerCase()];
    }
    getByType(e2) {
      return Object.values(this.entries).filter((t2) => t2.kind === e2);
    }
  }
  var c = r(50333), l = r(7369);
  function u(e2) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e2);
  }
}, 62340: (e, t, r) => {
  "use strict";
  r.d(t, { X: () => s });
  const n = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), s = (e2, t2 = false) => {
    if (!t2) return n.test(e2);
    const r2 = e2.split(".");
    for (const e3 of r2) if (!s(e3)) return false;
    return true;
  };
}, 64702: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { DEFAULT_REQUEST_TIMEOUT: () => n.w, NodeHttp2Handler: () => g, NodeHttpHandler: () => n.$, streamCollector: () => m.streamCollector });
  var n = r(20753), s = r(73931), i = r(1024), o = r(74459), a = r(32467), c = r.n(a);
  const l = new Uint16Array(1);
  class u {
    id = l[0]++;
    total = 0;
    max = 0;
    session;
    refs = 0;
    constructor(e2) {
      e2.unref(), this.session = e2;
    }
    retain() {
      if (this.session.destroyed) throw new Error("@smithy/node-http-handler - cannot acquire reference to destroyed session.");
      this.refs += 1, this.total += 1, this.max = Math.max(this.refs, this.max), this.session.ref();
    }
    free() {
      if (!this.session.destroyed && (this.refs -= 1, 0 === this.refs && this.session.unref(), this.refs < 0)) throw new Error("@smithy/node-http-handler - ClientHttp2Session refcount at zero, cannot decrement.");
    }
    deref() {
      return this.session;
    }
    close() {
      this.session.closed || this.session.close();
    }
    destroy() {
      this.refs = 0, this.session.destroyed || this.session.destroy();
    }
    useCount() {
      return this.refs;
    }
  }
  class d {
    sessions = [];
    maxConcurrency = 0;
    constructor(e2) {
      this.sessions = (e2 ?? []).map((e3) => new u(e3));
    }
    poll() {
      let e2 = false;
      for (const t2 of this.sessions) if (t2.deref().destroyed) e2 = true;
      else if (!this.maxConcurrency || t2.useCount() < this.maxConcurrency) return t2;
      if (e2) for (const e3 of this.sessions) e3.deref().destroyed && this.remove(e3);
    }
    offerLast(e2) {
      this.sessions.push(e2);
    }
    remove(e2) {
      const t2 = this.sessions.indexOf(e2);
      t2 > -1 && this.sessions.splice(t2, 1);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    setMaxConcurrency(e2) {
      this.maxConcurrency = e2;
    }
    destroy(e2) {
      this.remove(e2), e2.destroy();
    }
  }
  class h {
    config;
    connectOptions;
    connectionPools = /* @__PURE__ */ new Map();
    constructor(e2) {
      if (this.config = e2, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrency must be greater than zero.");
    }
    lease(e2, t2) {
      const r2 = this.getUrlString(e2), n2 = this.getPool(r2);
      if (!this.config.disableConcurrency && !t2.isEventStream) {
        const e3 = n2.poll();
        if (e3) return e3.retain(), e3;
      }
      const s2 = new u(this.connect(r2)), i2 = s2.deref();
      this.config.maxConcurrency && i2.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (t3) => {
        if (t3) throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + e2.destination.toString());
      });
      const o2 = () => {
        this.removeFromPoolAndCheckedDestroy(r2, s2);
      };
      return i2.on("goaway", () => {
        this.removeFromPoolAndClose(r2, s2);
      }), i2.on("error", o2), i2.on("frameError", o2), i2.on("close", o2), t2.requestTimeout && i2.setTimeout(t2.requestTimeout, o2), n2.offerLast(s2), s2.retain(), s2;
    }
    release(e2, t2) {
      t2.free();
    }
    createIsolatedSession(e2, t2) {
      const r2 = this.getUrlString(e2), n2 = new u(this.connect(r2)), s2 = n2.deref();
      s2.settings({ maxConcurrentStreams: 1 });
      const i2 = () => {
        n2.destroy();
      };
      return s2.on("error", i2), s2.on("frameError", i2), s2.on("close", i2), t2.requestTimeout && s2.setTimeout(t2.requestTimeout, i2), n2.retain(), n2;
    }
    destroy() {
      for (const [e2, t2] of this.connectionPools) {
        for (const e3 of [...t2]) e3.destroy();
        this.connectionPools.delete(e2);
      }
    }
    setMaxConcurrentStreams(e2) {
      if (e2 && e2 <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = e2;
      for (const t2 of this.connectionPools.values()) t2.setMaxConcurrency(e2);
    }
    setDisableConcurrentStreams(e2) {
      this.config.disableConcurrency = e2;
    }
    setNodeHttp2ConnectOptions(e2) {
      this.connectOptions = e2;
    }
    debug() {
      const e2 = {};
      for (const [t2, r2] of this.connectionPools) {
        const n2 = [];
        for (const e3 of r2) n2.push({ id: e3.id, active: e3.useCount(), maxConcurrent: e3.max, totalRequests: e3.total });
        e2[t2] = { sessions: n2 };
      }
      return e2;
    }
    removeFromPoolAndClose(e2, t2) {
      this.connectionPools.get(e2)?.remove(t2), t2.close();
    }
    removeFromPoolAndCheckedDestroy(e2, t2) {
      this.connectionPools.get(e2)?.remove(t2), t2.destroy();
    }
    getPool(e2) {
      if (!this.connectionPools.has(e2)) {
        const t2 = new d();
        this.config.maxConcurrency && t2.setMaxConcurrency(this.config.maxConcurrency), this.connectionPools.set(e2, t2);
      }
      return this.connectionPools.get(e2);
    }
    getUrlString(e2) {
      return e2.destination.toString();
    }
    connect(e2) {
      return void 0 === this.connectOptions ? c().connect(e2) : c().connect(e2, this.connectOptions);
    }
  }
  var f = r(17512);
  const { constants: p } = c();
  class g {
    config;
    configProvider;
    metadata = { handlerProtocol: "h2" };
    connectionManager = new h({});
    static create(e2) {
      return "function" == typeof e2?.handle ? e2 : new g(e2);
    }
    constructor(e2) {
      this.configProvider = new Promise((t2, r2) => {
        "function" == typeof e2 ? e2().then((e3) => {
          t2(e3 || {});
        }).catch(r2) : t2(e2 || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(e2, { abortSignal: t2, requestTimeout: r2, isEventStream: n2 } = {}) {
      if (!this.config) {
        this.config = await this.configProvider;
        const { disableConcurrentStreams: e3, maxConcurrentStreams: t3, nodeHttp2ConnectOptions: r3 } = this.config;
        this.connectionManager.setDisableConcurrentStreams(e3 ?? false), t3 && this.connectionManager.setMaxConcurrentStreams(t3), r3 && this.connectionManager.setNodeHttp2ConnectOptions(r3);
      }
      const { requestTimeout: a2, disableConcurrentStreams: c2 } = this.config, l2 = c2 || n2, u2 = r2 ?? a2;
      return new Promise((r3, a3) => {
        let c3, d2 = false;
        const h2 = async (e3) => {
          await c3, a3(e3);
        };
        if (t2?.aborted) {
          d2 = true;
          const e3 = (0, i.F)(t2);
          return void h2(e3);
        }
        const { hostname: g2, method: m2, port: y, protocol: w, query: S } = e2;
        let b = "";
        if (null != e2.username || null != e2.password) {
          b = `${e2.username ?? ""}:${e2.password ?? ""}@`;
        }
        const E = { destination: new URL(`${w}//${b}${g2}${y ? `:${y}` : ""}`) }, v = { requestTimeout: this.config?.sessionTimeout, isEventStream: n2 }, x = l2 ? this.connectionManager.createIsolatedSession(E, v) : this.connectionManager.lease(E, v), T = x.deref(), A = (e3) => {
          l2 && x.destroy(), d2 = true, h2(e3);
        }, N = S ? (0, s.buildQueryString)(S) : "";
        let C = e2.path;
        N && (C += `?${N}`), e2.fragment && (C += `#${e2.fragment}`);
        const _ = T.request({ ...e2.headers, [p.HTTP2_HEADER_PATH]: C, [p.HTTP2_HEADER_METHOD]: m2 });
        if (u2 && _.setTimeout(u2, () => {
          _.close();
          const e3 = new Error(`Stream timed out because of no activity for ${u2} ms`);
          e3.name = "TimeoutError", A(e3);
        }), t2) {
          const e3 = () => {
            _.close();
            const e4 = (0, i.F)(t2);
            A(e4);
          };
          if ("function" == typeof t2.addEventListener) {
            const r4 = t2;
            r4.addEventListener("abort", e3, { once: true }), _.once("close", () => r4.removeEventListener("abort", e3));
          } else t2.onabort = e3;
        }
        _.on("frameError", (e3, t3, r4) => {
          A(new Error(`Frame type id ${e3} in stream id ${r4} has failed with code ${t3}.`));
        }), _.on("error", A), _.on("aborted", () => {
          A(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${_.rstCode}.`));
        }), _.on("response", (e3) => {
          const t3 = new s.HttpResponse({ statusCode: e3[":status"] ?? -1, headers: (0, o.u)(e3), body: _ });
          d2 = true, (async (e4) => {
            await c3, r3(e4);
          })({ response: t3 }), l2 && T.close();
        }), _.on("close", () => {
          l2 ? x.destroy() : this.connectionManager.release(E, x), d2 || A(new Error("Unexpected error: http2 request did not get a response"));
        }), c3 = (0, f.f)(_, e2, u2);
      });
    }
    updateHttpClientConfig(e2, t2) {
      this.config = void 0, this.configProvider = this.configProvider.then((r2) => ({ ...r2, [e2]: t2 }));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  var m = r(96851);
}, 64972: (e, t, r) => {
  "use strict";
  var n;
  r.d(t, { Gz: () => s, L0: () => i, cm: () => n }), (function(e2) {
    e2.STANDARD = "standard", e2.ADAPTIVE = "adaptive";
  })(n || (n = {}));
  const s = 3, i = n.STANDARD;
}, 65844: (e, t, r) => {
  "use strict";
  r.d(t, { N: () => n });
  class n {
    trace() {
    }
    debug() {
    }
    info() {
    }
    warn() {
    }
    error() {
    }
  }
}, 66220: (e, t, r) => {
  "use strict";
  r.d(t, { p: () => i });
  var n = r(96851), s = r(88141);
  const i = async ({ headers: e2, body: t2 }, r2) => {
    for (const t3 of Object.keys(e2)) if (t3.toLowerCase() === s.Wd) return e2[t3];
    if (null == t2) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    if ("string" == typeof t2 || ArrayBuffer.isView(t2) || (0, n.isArrayBuffer)(t2)) {
      const e3 = new r2();
      return e3.update((0, n.toUint8Array)(t2)), (0, n.toHex)(await e3.digest());
    }
    return s.z8;
  };
}, 67114: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { NODE_APP_ID_CONFIG_OPTIONS: () => v, UA_APP_ID_ENV_NAME: () => b, UA_APP_ID_INI_NAME: () => E, createDefaultUserAgentProvider: () => y, crtAvailability: () => m, defaultUserAgent: () => w });
  var n = r(48161), s = r(1708);
  var i = r(32022), o = r(70542), a = r(51455), c = r(76760);
  const l = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/, u = (e2 = "") => {
    const t2 = e2.match(l);
    if (!t2) return;
    const [r2, n2, s2, i2] = [t2[1], t2[2], t2[3], t2[4]];
    return i2 ? `${r2}.${n2}.${s2}-${i2}` : `${r2}.${n2}.${s2}`;
  }, d = ["^", "~", ">=", "<=", ">", "<"], h = ["latest", "beta", "dev", "rc", "insiders", "next"];
  let f;
  const p = (0, c.join)("node_modules", "typescript", "package.json"), g = async () => {
    if (null === f) return;
    if ("string" == typeof f) return ["md/tsc", f];
    let e2 = false;
    try {
      e2 = (0, i.Q)(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", o.c.ENV) || false;
    } catch {
    }
    if (e2) return void (f = null);
    const t2 = ((e3) => {
      const t3 = process.cwd();
      if (!e3) return [t3];
      const r3 = (0, c.normalize)(e3), n3 = r3.split(c.sep), s3 = n3.indexOf("node_modules"), i2 = -1 !== s3 ? n3.slice(0, s3).join(c.sep) : r3;
      return t3 === i2 ? [t3] : [i2, t3];
    })("undefined" != typeof __dirname ? __dirname : void 0);
    let r2, n2;
    for (const e3 of t2) try {
      const t3 = (0, c.join)(e3, "package.json"), n3 = await (0, a.readFile)(t3, "utf-8"), { dependencies: s3, devDependencies: i2 } = JSON.parse(n3), o2 = i2?.typescript ?? s3?.typescript;
      if ("string" != typeof o2) continue;
      r2 = o2;
      break;
    } catch {
    }
    if (!r2) return void (f = null);
    for (const e3 of t2) try {
      const t3 = (0, c.join)(e3, p), r3 = await (0, a.readFile)(t3, "utf-8"), { version: s3 } = JSON.parse(r3), i2 = u(s3);
      if ("string" != typeof i2) continue;
      n2 = i2;
      break;
    } catch {
    }
    if (n2) return f = n2, ["md/tsc", f];
    const s2 = ((e3 = "") => {
      if (h.includes(e3)) return e3;
      const t3 = d.find((t4) => e3.startsWith(t4)) ?? "", r3 = u(e3.slice(t3.length));
      return r3 ? `${t3}${r3}` : void 0;
    })(r2);
    if ("string" == typeof s2) return f = `dev_${s2}`, ["md/tsc", f];
    f = null;
  }, m = { isCrtAvailable: false }, y = ({ serviceId: e2, clientVersion: t2 }) => {
    const r2 = (() => {
      const e3 = ["deno", "bun", "llrt"];
      for (const t3 of e3) if (s.versions[t3]) return [`md/${t3}`, s.versions[t3]];
      return ["md/nodejs", s.versions.node];
    })();
    return async (i2) => {
      const o2 = [["aws-sdk-js", t2], ["ua", "2.1"], [`os/${(0, n.platform)()}`, (0, n.release)()], ["lang/js"], r2], a2 = await g();
      a2 && o2.push(a2);
      const c2 = m.isCrtAvailable ? ["md/crt-avail"] : null;
      c2 && o2.push(c2), e2 && o2.push([`api/${e2}`, t2]), s.env.AWS_EXECUTION_ENV && o2.push([`exec-env/${s.env.AWS_EXECUTION_ENV}`]);
      const l2 = await i2?.userAgentAppId?.();
      return l2 ? [...o2, [`app/${l2}`]] : [...o2];
    };
  }, w = y;
  var S = r(23170);
  const b = "AWS_SDK_UA_APP_ID", E = "sdk_ua_app_id", v = { environmentVariableSelector: (e2) => e2[b], configFileSelector: (e2) => e2[E] ?? e2["sdk-ua-app-id"], default: S.b };
}, 70542: (e, t, r) => {
  "use strict";
  var n;
  r.d(t, { c: () => n }), (function(e2) {
    e2.ENV = "env", e2.CONFIG = "shared config entry";
  })(n || (n = {}));
}, 72212: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { NODE_REGION_CONFIG_FILE_OPTIONS: () => i.zH, NODE_REGION_CONFIG_OPTIONS: () => i.GG, REGION_ENV_NAME: () => i.Fc, REGION_INI_NAME: () => i.OR, getAwsRegionExtensionConfiguration: () => n, resolveAwsRegionExtensionConfiguration: () => s, resolveRegionConfig: () => o.T, stsRegionDefaultResolver: () => c, warning: () => l });
  const n = (e2) => ({ setRegion(t2) {
    e2.region = t2;
  }, region: () => e2.region }), s = (e2) => ({ region: e2.region() });
  var i = r(24060), o = r(77654), a = r(56508);
  function c(e2 = {}) {
    return (0, a.Z)({ ...i.GG, default: async () => (l.silence || console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly."), "us-east-1") }, { ...i.zH, ...e2 });
  }
  const l = { silence: false };
}, 74459: (e, t, r) => {
  "use strict";
  r.d(t, { u: () => s });
  var n = r(96851);
  const s = (e2) => {
    const t2 = {};
    for (const r2 in e2) {
      if (!(0, n.hasOwn)(e2, r2)) continue;
      const s2 = e2[r2];
      t2[r2] = Array.isArray(s2) ? s2.join(",") : s2;
    }
    return t2;
  };
}, 77330: (e, t, r) => {
  "use strict";
  r.d(t, { Fb: () => i });
  var n = r(93451), s = r(26713);
  const i = (e2, t2) => Object.entries(e2).reduce((e3, [r2, n2]) => (e3[r2] = a.getEndpointProperty(n2, t2), e3), {}), o = (e2, t2) => {
    if (Array.isArray(e2)) return e2.map((e3) => o(e3, t2));
    switch (typeof e2) {
      case "string":
        return (0, s.M)(e2, t2);
      case "object":
        if (null === e2) throw new n.c(`Unexpected endpoint property: ${e2}`);
        return a.getEndpointProperties(e2, t2);
      case "boolean":
        return e2;
      default:
        throw new n.c("Unexpected endpoint property type: " + typeof e2);
    }
  }, a = { getEndpointProperty: o, getEndpointProperties: i };
}, 77654: (e, t, r) => {
  "use strict";
  r.d(t, { T: () => o });
  var n = r(62340);
  const s = /* @__PURE__ */ new Set(), i = (e2) => "string" == typeof e2 && (e2.startsWith("fips-") || e2.endsWith("-fips")), o = (e2) => {
    const { region: t2, useFipsEndpoint: r2 } = e2;
    if (!t2) throw new Error("Region is missing");
    return Object.assign(e2, { region: async () => {
      const e3 = ((e4) => i(e4) ? ["fips-aws-global", "aws-fips"].includes(e4) ? "us-east-1" : e4.replace(/fips-(dkr-|prod-)?|-fips/, "") : e4)("function" == typeof t2 ? await t2() : t2);
      return ((e4, t3 = n.X) => {
        if (s.has(e4) || t3(e4)) s.add(e4);
        else {
          if ("*" !== e4) throw new Error(`Region not accepted: region="${e4}" is not a valid hostname component.`);
          console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
        }
      })(e3), e3;
    }, useFipsEndpoint: async () => {
      const e3 = "string" == typeof t2 ? t2 : await t2();
      return !!i(e3) || ("function" != typeof r2 ? Promise.resolve(!!r2) : r2());
    } });
  };
}, 78520: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { CONFIG_USE_DUALSTACK_ENDPOINT: () => o, CONFIG_USE_FIPS_ENDPOINT: () => d, DEFAULT_USE_DUALSTACK_ENDPOINT: () => a, DEFAULT_USE_FIPS_ENDPOINT: () => h, ENV_USE_DUALSTACK_ENDPOINT: () => i, ENV_USE_FIPS_ENDPOINT: () => u, NODE_REGION_CONFIG_FILE_OPTIONS: () => w.zH, NODE_REGION_CONFIG_OPTIONS: () => w.GG, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => c, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => f, REGION_ENV_NAME: () => w.Fc, REGION_INI_NAME: () => w.OR, getRegionInfo: () => E, nodeDualstackConfigSelectors: () => l, nodeFipsConfigSelectors: () => p, resolveCustomEndpointsConfig: () => m, resolveEndpointsConfig: () => y, resolveRegionConfig: () => S.T });
  var n = r(32022), s = r(70542);
  const i = "AWS_USE_DUALSTACK_ENDPOINT", o = "use_dualstack_endpoint", a = false, c = { environmentVariableSelector: (e2) => (0, n.Q)(e2, i, s.c.ENV), configFileSelector: (e2) => (0, n.Q)(e2, o, s.c.CONFIG), default: false }, l = { environmentVariableSelector: (e2) => (0, n.Q)(e2, i, s.c.ENV), configFileSelector: (e2) => (0, n.Q)(e2, o, s.c.CONFIG), default: void 0 }, u = "AWS_USE_FIPS_ENDPOINT", d = "use_fips_endpoint", h = false, f = { environmentVariableSelector: (e2) => (0, n.Q)(e2, u, s.c.ENV), configFileSelector: (e2) => (0, n.Q)(e2, d, s.c.CONFIG), default: false }, p = { environmentVariableSelector: (e2) => (0, n.Q)(e2, u, s.c.ENV), configFileSelector: (e2) => (0, n.Q)(e2, d, s.c.CONFIG), default: void 0 };
  var g = r(90570);
  const m = (e2) => {
    const { tls: t2, endpoint: r2, urlParser: n2, useDualstackEndpoint: s2 } = e2;
    return Object.assign(e2, { tls: t2 ?? true, endpoint: (0, g.t)("string" == typeof r2 ? n2(r2) : r2), isCustomEndpoint: true, useDualstackEndpoint: (0, g.t)(s2 ?? false) });
  }, y = (e2) => {
    const t2 = (0, g.t)(e2.useDualstackEndpoint ?? false), { endpoint: r2, useFipsEndpoint: n2, urlParser: s2, tls: i2 } = e2;
    return Object.assign(e2, { tls: i2 ?? true, endpoint: r2 ? (0, g.t)("string" == typeof r2 ? s2(r2) : r2) : () => (async (e3) => {
      const { tls: t3 = true } = e3, r3 = await e3.region();
      if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r3)) throw new Error("Invalid region in client config");
      const n3 = await e3.useDualstackEndpoint(), s3 = await e3.useFipsEndpoint(), { hostname: i3 } = await e3.regionInfoProvider(r3, { useDualstackEndpoint: n3, useFipsEndpoint: s3 }) ?? {};
      if (!i3) throw new Error("Cannot resolve hostname from client config");
      return e3.urlParser(`${t3 ? "https:" : "http:"}//${i3}`);
    })({ ...e2, useDualstackEndpoint: t2, useFipsEndpoint: n2 }), isCustomEndpoint: !!r2, useDualstackEndpoint: t2 });
  };
  var w = r(24060), S = r(77654);
  const b = (e2 = [], { useFipsEndpoint: t2, useDualstackEndpoint: r2 }) => e2.find(({ tags: e3 }) => t2 === e3.includes("fips") && r2 === e3.includes("dualstack"))?.hostname, E = (e2, { useFipsEndpoint: t2 = false, useDualstackEndpoint: r2 = false, signingService: n2, regionHash: s2, partitionHash: i2 }) => {
    const o2 = ((e3, { partitionHash: t3 }) => Object.keys(t3 || {}).find((r3) => t3[r3].regions.includes(e3)) ?? "aws")(e2, { partitionHash: i2 }), a2 = e2 in s2 ? e2 : i2[o2]?.endpoint ?? e2, c2 = { useFipsEndpoint: t2, useDualstackEndpoint: r2 }, l2 = ((e3, { regionHostname: t3, partitionHostname: r3 }) => t3 || (r3 ? r3.replace("{region}", e3) : void 0))(a2, { regionHostname: b(s2[a2]?.variants, c2), partitionHostname: b(i2[o2]?.variants, c2) });
    if (void 0 === l2) throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion: a2, useFipsEndpoint: t2, useDualstackEndpoint: r2 }}`);
    const u2 = ((e3, { signingRegion: t3, regionRegex: r3, useFipsEndpoint: n3 }) => {
      if (t3) return t3;
      if (n3) {
        const t4 = r3.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."), n4 = e3.match(t4);
        if (n4) return n4[0].slice(1, -1);
      }
    })(l2, { signingRegion: s2[a2]?.signingRegion, regionRegex: i2[o2].regionRegex, useFipsEndpoint: t2 });
    return { partition: o2, signingService: n2, hostname: l2, ...u2 && { signingRegion: u2 }, ...s2[a2]?.signingService && { signingService: s2[a2].signingService } };
  };
}, 79892: (e, t, r) => {
  "use strict";
  r.d(t, { f: () => n });
  class n {
    static v2026 = "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
    static delay() {
      return n.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
      return n.v2026 ? 1e3 : 500;
    }
    static cost() {
      return n.v2026 ? 14 : 5;
    }
    static throttlingCost() {
      return n.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
      return n.v2026 ? "THROTTLING" : "TRANSIENT";
    }
  }
}, 81284: (e, t, r) => {
  "use strict";
  r.d(t, { N: () => n });
  const n = { setTimeout: (e2, t2) => setTimeout(e2, t2), clearTimeout: (e2) => clearTimeout(e2) };
}, 82713: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { BinaryDecisionDiagram: () => n, EndpointCache: () => s, EndpointError: () => i.c, customEndpointFunctions: () => g.m, decideEndpoint: () => h, isIpAddress: () => f.o, isValidHostLabel: () => p.X, resolveEndpoint: () => m.s });
  class n {
    nodes;
    root;
    conditions;
    results;
    constructor(e2, t2, r2, n2) {
      this.nodes = e2, this.root = t2, this.conditions = r2, this.results = n2;
    }
    static from(e2, t2, r2, s2) {
      return new n(e2, t2, r2, s2);
    }
  }
  class s {
    capacity;
    data = /* @__PURE__ */ new Map();
    parameters = [];
    constructor({ size: e2, params: t2 }) {
      this.capacity = e2 ?? 50, t2 && (this.parameters = t2);
    }
    get(e2, t2) {
      const r2 = this.hash(e2);
      if (false === r2) return t2();
      if (!this.data.has(r2)) {
        if (this.data.size > this.capacity + 10) {
          const e3 = this.data.keys();
          let t3 = 0;
          for (; ; ) {
            const { value: r3, done: n2 } = e3.next();
            if (this.data.delete(r3), n2 || ++t3 > 10) break;
          }
        }
        this.data.set(r2, t2());
      }
      return this.data.get(r2);
    }
    size() {
      return this.data.size;
    }
    hash(e2) {
      let t2 = "";
      const { parameters: r2 } = this;
      if (0 === r2.length) return false;
      for (const n2 of r2) {
        const r3 = String(e2[n2] ?? "");
        if (r3.includes("|;")) return false;
        t2 += r3 + "|;";
      }
      return t2;
    }
  }
  var i = r(93451), o = r(5090), a = r(15235), c = r(20961), l = r(77330), u = r(4374);
  const d = 1e8, h = (e2, t2) => {
    const { nodes: r2, root: n2, results: s2, conditions: h2 } = e2;
    let f2 = n2;
    const p2 = {}, g2 = { referenceRecord: p2, endpointParams: t2.endpointParams, logger: t2.logger };
    for (; 1 !== f2 && -1 !== f2 && f2 < d; ) {
      const e3 = 3 * (Math.abs(f2) - 1), [t3, n3, s3] = [r2[e3], r2[e3 + 1], r2[e3 + 2]], [i2, a2, c2] = h2[t3], l2 = (0, o.F)({ fn: i2, assign: c2, argv: a2 }, g2);
      if (l2.toAssign) {
        const { name: e4, value: t4 } = l2.toAssign;
        p2[e4] = t4;
      }
      f2 = f2 >= 0 === l2.result ? n3 : s3;
    }
    if (f2 >= d) {
      const e3 = s2[f2 - d];
      if (-1 === e3[0]) {
        const [, t4] = e3;
        throw new i.c((0, a.O4)(t4, "Error", g2));
      }
      const [t3, r3, n3] = e3;
      return { url: (0, u.t)(t3, g2), properties: (0, l.Fb)(r3, g2), headers: (0, c.w)(n3 ?? {}, g2) };
    }
    throw new i.c("No matching endpoint.");
  };
  var f = r(3871), p = r(62340), g = r(6685), m = r(14074);
}, 84329: (e, t, r) => {
  "use strict";
  r.d(t, { B: () => y });
  var n, s = r(96851);
  class i {
    format(e2) {
      const t2 = [];
      for (const r3 of Object.keys(e2)) {
        const n3 = (0, s.fromUtf8)(r3);
        t2.push(Uint8Array.from([n3.byteLength]), n3, this.formatHeaderValue(e2[r3]));
      }
      const r2 = new Uint8Array(t2.reduce((e3, t3) => e3 + t3.byteLength, 0));
      let n2 = 0;
      for (const e3 of t2) r2.set(e3, n2), n2 += e3.byteLength;
      return r2;
    }
    formatHeaderValue(e2) {
      switch (e2.type) {
        case "boolean":
          return Uint8Array.from([e2.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, e2.value]);
        case "short":
          const t2 = new DataView(new ArrayBuffer(3));
          return t2.setUint8(0, 3), t2.setInt16(1, e2.value, false), new Uint8Array(t2.buffer);
        case "integer":
          const r2 = new DataView(new ArrayBuffer(5));
          return r2.setUint8(0, 4), r2.setInt32(1, e2.value, false), new Uint8Array(r2.buffer);
        case "long":
          const n2 = new Uint8Array(9);
          return n2[0] = 5, n2.set(e2.value.bytes, 1), n2;
        case "binary":
          const i2 = new DataView(new ArrayBuffer(3 + e2.value.byteLength));
          i2.setUint8(0, 6), i2.setUint16(1, e2.value.byteLength, false);
          const c2 = new Uint8Array(i2.buffer);
          return c2.set(e2.value, 3), c2;
        case "string":
          const l2 = (0, s.fromUtf8)(e2.value), u2 = new DataView(new ArrayBuffer(3 + l2.byteLength));
          u2.setUint8(0, 7), u2.setUint16(1, l2.byteLength, false);
          const d2 = new Uint8Array(u2.buffer);
          return d2.set(l2, 3), d2;
        case "timestamp":
          const h2 = new Uint8Array(9);
          return h2[0] = 8, h2.set(a.fromNumber(e2.value.valueOf()).bytes, 1), h2;
        case "uuid":
          if (!o.test(e2.value)) throw new Error(`Invalid UUID received: ${e2.value}`);
          const f2 = new Uint8Array(17);
          return f2[0] = 9, f2.set((0, s.fromHex)(e2.value.replace(/\-/g, "")), 1), f2;
      }
    }
  }
  !(function(e2) {
    e2[e2.boolTrue = 0] = "boolTrue", e2[e2.boolFalse = 1] = "boolFalse", e2[e2.byte = 2] = "byte", e2[e2.short = 3] = "short", e2[e2.integer = 4] = "integer", e2[e2.long = 5] = "long", e2[e2.byteArray = 6] = "byteArray", e2[e2.string = 7] = "string", e2[e2.timestamp = 8] = "timestamp", e2[e2.uuid = 9] = "uuid";
  })(n || (n = {}));
  const o = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  class a {
    bytes;
    constructor(e2) {
      if (this.bytes = e2, 8 !== e2.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(e2) {
      if (e2 > 9223372036854776e3 || e2 < -9223372036854776e3) throw new Error(`${e2} is too large (or, if negative, too small) to represent as an Int64`);
      const t2 = new Uint8Array(8);
      for (let r2 = 7, n2 = Math.abs(Math.round(e2)); r2 > -1 && n2 > 0; r2--, n2 /= 256) t2[r2] = n2;
      return e2 < 0 && c(t2), new a(t2);
    }
    valueOf() {
      const e2 = this.bytes.slice(0), t2 = 128 & e2[0];
      return t2 && c(e2), parseInt((0, s.toHex)(e2), 16) * (t2 ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function c(e2) {
    for (let t2 = 0; t2 < 8; t2++) e2[t2] ^= 255;
    for (let t2 = 7; t2 > -1 && (e2[t2]++, 0 === e2[t2]); t2--) ;
  }
  var l = r(43801), u = r(88141), d = r(29134), h = r(37060), f = r(66220), p = r(58699), g = r(8770), m = r(2798);
  class y extends l.y {
    headerFormatter = new i();
    constructor({ applyChecksum: e2, credentials: t2, region: r2, service: n2, sha256: s2, uriEscapePath: i2 = true }) {
      super({ applyChecksum: e2, credentials: t2, region: r2, service: n2, sha256: s2, uriEscapePath: i2 });
    }
    async presign(e2, t2 = {}) {
      const { signingDate: r2 = /* @__PURE__ */ new Date(), expiresIn: n2 = 3600, unsignableHeaders: s2, unhoistableHeaders: i2, signableHeaders: o2, hoistableHeaders: a2, signingRegion: c2, signingService: l2 } = t2, p2 = await this.credentialProvider();
      this.validateResolvedCredentials(p2);
      const y2 = c2 ?? await this.regionProvider(), { longDate: w, shortDate: S } = this.formatDate(r2);
      if (n2 > u.Uv) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      const b = (0, d.Ds)(S, y2, l2 ?? this.service), E = (0, g.b)((0, m.n)(e2), { unhoistableHeaders: i2, hoistableHeaders: a2 });
      p2.sessionToken && (E.query[u.r2] = p2.sessionToken), E.query[u.XI] = u.SG, E.query[u.tI] = `${p2.accessKeyId}/${b}`, E.query[u.Zs] = w, E.query[u.MS] = n2.toString(10);
      const v = (0, h.H)(E, s2, o2);
      return E.query[u.FY] = this.getCanonicalHeaderList(v), E.query[u.cR] = await this.getSignature(w, b, this.getSigningKey(p2, y2, S, l2), this.createCanonicalRequest(E, v, await (0, f.p)(e2, this.sha256))), E;
    }
    async sign(e2, t2) {
      return "string" == typeof e2 ? this.signString(e2, t2) : e2.headers && e2.payload ? this.signEvent(e2, t2) : e2.message ? this.signMessage(e2, t2) : this.signRequest(e2, t2);
    }
    async signEvent({ headers: e2, payload: t2 }, { signingDate: r2 = /* @__PURE__ */ new Date(), priorSignature: n2, signingRegion: i2, signingService: o2, eventStreamCredentials: a2 }) {
      const c2 = i2 ?? await this.regionProvider(), { shortDate: l2, longDate: h2 } = this.formatDate(r2), p2 = (0, d.Ds)(l2, c2, o2 ?? this.service), g2 = await (0, f.p)({ headers: {}, body: t2 }, this.sha256), m2 = new this.sha256();
      m2.update(e2);
      const y2 = (0, s.toHex)(await m2.digest()), w = [u.r1, h2, p2, n2, y2, g2].join("\n");
      return this.signString(w, { signingDate: r2, signingRegion: c2, signingService: o2, eventStreamCredentials: a2 });
    }
    async signMessage(e2, { signingDate: t2 = /* @__PURE__ */ new Date(), signingRegion: r2, signingService: n2, eventStreamCredentials: s2 }) {
      return this.signEvent({ headers: this.headerFormatter.format(e2.message.headers), payload: e2.message.body }, { signingDate: t2, signingRegion: r2, signingService: n2, priorSignature: e2.priorSignature, eventStreamCredentials: s2 }).then((t3) => ({ message: e2.message, signature: t3 }));
    }
    async signString(e2, { signingDate: t2 = /* @__PURE__ */ new Date(), signingRegion: r2, signingService: n2, eventStreamCredentials: i2 } = {}) {
      const o2 = i2 ?? await this.credentialProvider();
      this.validateResolvedCredentials(o2);
      const a2 = r2 ?? await this.regionProvider(), { shortDate: c2 } = this.formatDate(t2), l2 = new this.sha256(await this.getSigningKey(o2, a2, c2, n2));
      return l2.update((0, s.toUint8Array)(e2)), (0, s.toHex)(await l2.digest());
    }
    async signRequest(e2, { signingDate: t2 = /* @__PURE__ */ new Date(), signableHeaders: r2, unsignableHeaders: n2, signingRegion: s2, signingService: i2 } = {}) {
      const o2 = await this.credentialProvider();
      this.validateResolvedCredentials(o2);
      const a2 = s2 ?? await this.regionProvider(), c2 = (0, m.n)(e2), { longDate: l2, shortDate: g2 } = this.formatDate(t2), y2 = (0, d.Ds)(g2, a2, i2 ?? this.service);
      c2.headers[u.ot] = l2, o2.sessionToken && (c2.headers[u.wE] = o2.sessionToken);
      const w = await (0, f.p)(c2, this.sha256);
      !(0, p.ou)(u.Wd, c2.headers) && this.applyChecksum && (c2.headers[u.Wd] = w);
      const S = (0, h.H)(c2, n2, r2), b = await this.getSignature(l2, y2, this.getSigningKey(o2, a2, g2, i2), this.createCanonicalRequest(c2, S, w));
      return c2.headers[u.H1] = `${u.SG} Credential=${o2.accessKeyId}/${y2}, SignedHeaders=${this.getCanonicalHeaderList(S)}, Signature=${b}`, c2;
    }
    async getSignature(e2, t2, r2, n2) {
      const i2 = await this.createStringToSign(e2, t2, n2, u.SG), o2 = new this.sha256(await r2);
      return o2.update((0, s.toUint8Array)(i2)), (0, s.toHex)(await o2.digest());
    }
    getSigningKey(e2, t2, r2, n2) {
      return (0, d.Xf)(this.sha256, e2, r2, t2, n2 || this.service);
    }
  }
}, 85644: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { EndpointError: () => S.c, awsEndpointFunctions: () => p, getUserAgentPrefix: () => f, isIpAddress: () => i.o, partition: () => u, resolveDefaultAwsRegionalEndpointsConfig: () => m, resolveEndpoint: () => w.s, setPartitionInfo: () => d, toEndpointV1: () => y, useDefaultPartitionInfo: () => h });
  var n = r(6685), s = r(62340), i = r(3871);
  const o = (e2, t2 = false) => {
    if (t2) {
      for (const t3 of e2.split(".")) if (!o(t3)) return false;
      return true;
    }
    return !!(0, s.X)(e2) && (!(e2.length < 3 || e2.length > 63) && (e2 === e2.toLowerCase() && !(0, i.o)(e2)));
  }, a = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-east-2":{"description":"Asia Pacific (Taipei)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"ap-southeast-6":{"description":"Asia Pacific (New Zealand)"},"ap-southeast-7":{"description":"Asia Pacific (Thailand)"},"aws-global":{"description":"aws global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"mx-central-1":{"description":"Mexico (Central)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"aws-cn global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-eusc","outputs":{"dnsSuffix":"amazonaws.eu","dualStackDnsSuffix":"api.amazonwebservices.eu","implicitGlobalRegion":"eusc-de-east-1","name":"aws-eusc","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eusc\\\\-(de)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eusc-de-east-1":{"description":"AWS European Sovereign Cloud (Germany)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"api.aws.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"aws-iso global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"api.aws.scloud","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"aws-iso-b global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"},"us-isob-west-1":{"description":"US ISOB West"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"api.cloud-aws.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-e-global":{"description":"aws-iso-e global region"},"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"api.aws.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-f-global":{"description":"aws-iso-f global region"},"us-isof-east-1":{"description":"US ISOF EAST"},"us-isof-south-1":{"description":"US ISOF SOUTH"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"aws-us-gov global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}}],"version":"1.1"}');
  let c = a, l = "";
  const u = (e2) => {
    const { partitions: t2 } = c;
    for (const r3 of t2) {
      const { regions: t3, outputs: n2 } = r3;
      for (const [r4, s2] of Object.entries(t3)) if (r4 === e2) return { ...n2, ...s2 };
    }
    for (const r3 of t2) {
      const { regionRegex: t3, outputs: n2 } = r3;
      if (new RegExp(t3).test(e2)) return { ...n2 };
    }
    const r2 = t2.find((e3) => "aws" === e3.id);
    if (!r2) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return { ...r2.outputs };
  }, d = (e2, t2 = "") => {
    c = e2, l = t2;
  }, h = () => {
    d(a, "");
  }, f = () => l, p = { isVirtualHostableS3Bucket: o, parseArn: (e2) => {
    const t2 = e2.split(":");
    if (t2.length < 6) return null;
    const [r2, n2, s2, i2, o2, ...a2] = t2;
    if ("arn" !== r2 || "" === n2 || "" === s2 || "" === a2.join(":")) return null;
    return { partition: n2, service: s2, region: i2, accountId: o2, resourceId: a2.map((e3) => e3.split("/")).flat() };
  }, partition: u };
  n.m.aws = p;
  var g = r(55264);
  const m = (e2) => {
    if ("function" != typeof e2.endpointProvider) throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    const { endpoint: t2 } = e2;
    return void 0 === t2 && (e2.endpoint = async () => y(e2.endpointProvider({ Region: "function" == typeof e2.region ? await e2.region() : e2.region, UseDualStack: "function" == typeof e2.useDualstackEndpoint ? await e2.useDualstackEndpoint() : e2.useDualstackEndpoint, UseFIPS: "function" == typeof e2.useFipsEndpoint ? await e2.useFipsEndpoint() : e2.useFipsEndpoint, Endpoint: void 0 }, { logger: e2.logger }))), e2;
  }, y = (e2) => (0, g.parseUrl)(e2.url);
  var w = r(14074), S = r(93451);
}, 85919: (e, t, r) => {
  "use strict";
  r.d(t, { u: () => s });
  var n = r(85264);
  const s = (e2) => e2[n.V] || (e2[n.V] = {});
}, 87738: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { calculateBodyLength: () => s });
  var n = r(73024);
  const s = (e2) => {
    if (!e2) return 0;
    if ("string" == typeof e2) return Buffer.byteLength(e2);
    if ("number" == typeof e2.byteLength) return e2.byteLength;
    if ("number" == typeof e2.size) return e2.size;
    if ("number" == typeof e2.start && "number" == typeof e2.end) return e2.end + 1 - e2.start;
    if (e2 instanceof n.ReadStream) {
      if (null != e2.path) return (0, n.lstatSync)(e2.path).size;
      if ("number" == typeof e2.fd) return (0, n.fstatSync)(e2.fd).size;
    }
    throw new Error(`Body Length computation failed for ${e2}`);
  };
}, 88141: (e, t, r) => {
  "use strict";
  r.d(t, { D8: () => g, FY: () => o, H1: () => d, Ir: () => b, J9: () => f, Jp: () => v, MS: () => a, SG: () => x, SN: () => S, Uv: () => R, VQ: () => _, Wd: () => m, XI: () => n, Zs: () => i, cR: () => c, g5: () => C, ku: () => T, lP: () => E, oB: () => u, ot: () => h, pj: () => p, r1: () => A, r2: () => l, tI: () => s, wE: () => y, z8: () => N, zX: () => w });
  const n = "X-Amz-Algorithm", s = "X-Amz-Credential", i = "X-Amz-Date", o = "X-Amz-SignedHeaders", a = "X-Amz-Expires", c = "X-Amz-Signature", l = "X-Amz-Security-Token", u = "X-Amz-Region-Set", d = "authorization", h = i.toLowerCase(), f = "date", p = [d, h, f], g = c.toLowerCase(), m = "x-amz-content-sha256", y = l.toLowerCase(), w = "host", S = { authorization: true, "cache-control": true, connection: true, expect: true, from: true, "keep-alive": true, "max-forwards": true, pragma: true, referer: true, te: true, trailer: true, "transfer-encoding": true, upgrade: true, "user-agent": true, "x-amzn-trace-id": true }, b = /^proxy-/, E = /^sec-/, v = [/^proxy-/i, /^sec-/i], x = "AWS4-HMAC-SHA256", T = "AWS4-ECDSA-P256-SHA256", A = "AWS4-HMAC-SHA256-PAYLOAD", N = "UNSIGNED-PAYLOAD", C = 50, _ = "aws4_request", R = 604800;
}, 90570: (e, t, r) => {
  "use strict";
  r.d(t, { t: () => n });
  const n = (e2) => {
    if ("function" == typeof e2) return e2;
    const t2 = Promise.resolve(e2);
    return () => t2;
  };
}, 93451: (e, t, r) => {
  "use strict";
  r.d(t, { c: () => n });
  class n extends Error {
    constructor(e2) {
      super(e2), this.name = "EndpointError";
    }
  }
}, 93664: (e, t, r) => {
  const { SmithyRpcV2CborProtocol: n, loadSmithyRpcV2CborErrorCode: s } = r(2682), { TypeRegistry: i, NormalizedSchema: o, deref: a } = r(93353), { decorateServiceException: c, getValueFromTextNode: l } = r(42997), { collectBody: u, determineTimestampFormat: d, RpcProtocol: h, HttpBindingProtocol: f, HttpInterceptingShapeSerializer: p, HttpInterceptingShapeDeserializer: g, FromStringShapeDeserializer: m, extendedEncodeURIComponent: y } = r(73931), { NumericValue: w, toUtf8: S, fromBase64: b, LazyJsonString: E, parseEpochTimestamp: v, parseRfc7231DateTime: x, parseRfc3339DateTimeWithOffset: T, generateIdempotencyToken: A, toBase64: N, dateToUtcString: C, expectUnion: _ } = r(96851), { parseXML: R, XmlNode: I, XmlText: D } = r(43409);
  class k {
    queryCompat;
    errorRegistry;
    constructor(e2 = false) {
      this.queryCompat = e2;
    }
    resolveRestContentType(e2, t2) {
      const r2 = t2.getMemberSchemas(), n2 = Object.values(r2).find((e3) => !!e3.getMergedTraits().httpPayload);
      if (n2) {
        const t3 = n2.getMergedTraits().mediaType;
        return t3 || (n2.isStringSchema() ? "text/plain" : n2.isBlobSchema() ? "application/octet-stream" : e2);
      }
      if (!t2.isUnitSchema()) {
        if (Object.values(r2).find((e3) => {
          const { httpQuery: t3, httpQueryParams: r3, httpHeader: n3, httpLabel: s2, httpPrefixHeaders: i2 } = e3.getMergedTraits();
          return !t3 && !r3 && !n3 && !s2 && void 0 === i2;
        })) return e2;
      }
    }
    async getErrorSchemaOrThrowBaseException(e2, t2, r2, n2, s2, i2) {
      let o2 = e2;
      e2.includes("#") && ([, o2] = e2.split("#"));
      const a2 = { $metadata: s2, $fault: r2.statusCode < 500 ? "client" : "server" };
      if (!this.errorRegistry) throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
      try {
        return { errorSchema: i2?.(this.errorRegistry, o2) ?? this.errorRegistry.getSchema(e2), errorMetadata: a2 };
      } catch (e3) {
        n2.message = n2.message ?? n2.Message ?? "UnknownError";
        const t3 = this.errorRegistry, r3 = t3.getBaseException();
        if (r3) {
          const e4 = t3.getErrorCtor(r3) ?? Error;
          throw this.decorateServiceException(Object.assign(new e4({ name: o2 }), a2), n2);
        }
        const s3 = n2, i3 = s3?.message ?? s3?.Message ?? s3?.Error?.Message ?? s3?.Error?.message;
        throw this.decorateServiceException(Object.assign(new Error(i3), { name: o2 }, a2), n2);
      }
    }
    compose(e2, t2, r2) {
      let n2 = r2;
      t2.includes("#") && ([n2] = t2.split("#"));
      const s2 = i.for(n2), o2 = i.for("smithy.ts.sdk.synthetic." + r2);
      e2.copyFrom(s2), e2.copyFrom(o2), this.errorRegistry = e2;
    }
    decorateServiceException(e2, t2 = {}) {
      if (this.queryCompat) {
        const r2 = e2.Message ?? t2.Message, n2 = c(e2, t2);
        r2 && (n2.message = r2);
        const s2 = n2.Error ?? {};
        s2.Type = n2.Error?.Type, s2.Code = n2.Error?.Code, s2.Message = n2.Error?.message ?? n2.Error?.Message ?? r2, n2.Error = s2;
        const i2 = n2.$metadata.requestId;
        return i2 && (n2.RequestId = i2), n2;
      }
      return c(e2, t2);
    }
    setQueryCompatError(e2, t2) {
      const r2 = t2.headers?.["x-amzn-query-error"];
      if (void 0 !== e2 && null != r2) {
        const [t3, n2] = r2.split(";"), s2 = Object.keys(e2), i2 = { Code: t3, Type: n2 };
        e2.Code = t3, e2.Type = n2;
        for (let t4 = 0; t4 < s2.length; t4++) {
          const r3 = s2[t4];
          i2["message" === r3 ? "Message" : r3] = e2[r3];
        }
        delete i2.__type, e2.Error = i2;
      }
    }
    queryCompatOutput(e2, t2) {
      e2.Error && (t2.Error = e2.Error), e2.Type && (t2.Type = e2.Type), e2.Code && (t2.Code = e2.Code);
    }
    findQueryCompatibleError(e2, t2) {
      try {
        return e2.getSchema(t2);
      } catch (r2) {
        return e2.find((e3) => o.of(e3).getMergedTraits().awsQueryError?.[0] === t2);
      }
    }
  }
  class O {
    serdeContext;
    setSerdeContext(e2) {
      this.serdeContext = e2;
    }
  }
  class M {
    from;
    to;
    keys;
    constructor(e2, t2) {
      this.from = e2, this.to = t2;
      const r2 = Object.keys(this.from), n2 = new Set(r2);
      n2.delete("__type"), this.keys = n2;
    }
    mark(e2) {
      this.keys.delete(e2);
    }
    hasUnknown() {
      return 1 === this.keys.size && 0 === Object.keys(this.to).length;
    }
    writeUnknown() {
      if (this.hasUnknown()) {
        const e2 = this.keys.values().next().value, t2 = this.from[e2];
        this.to.$unknown = [e2, t2];
      }
    }
  }
  let P;
  function $() {
    if (void 0 === P) try {
      if ("function" != typeof Buffer) P = false;
      else {
        const e2 = JSON.parse(Buffer.from([123, 125]));
        P = null !== e2 && "object" == typeof e2;
      }
    } catch {
      P = false;
    }
    return P;
  }
  function j(e2, t2, r2) {
    if (r2?.source) {
      const e3 = r2.source;
      if ("number" == typeof t2) {
        return t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER ? (function(e4, t3) {
          if (e4 === String(t3)) return true;
          if (Object.is(t3, -0)) return true;
          if (/[eE]/.test(e4)) return L(e4) === L(String(t3));
          const r3 = e4.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""), n2 = String(t3);
          if (r3 === n2) return true;
          if (/[eE]/.test(n2)) return r3 === L(n2);
          return false;
        })(e3, t2) ? t2 : new w(e3, "bigDecimal") : (function(e4) {
          const t3 = e4.indexOf(".");
          if (-1 === t3) return false;
          const r3 = e4.search(/[eE]/);
          if (-1 === r3) return true;
          const n2 = r3 - t3 - 1;
          return parseInt(e4.slice(r3 + 1), 10) < n2;
        })(e3) ? new w(e3, "bigDecimal") : /[eE]/.test(e3) ? (function(e4) {
          const t3 = e4.search(/[eE]/), r3 = parseInt(e4.slice(t3 + 1), 10), n2 = e4.startsWith("-"), s2 = e4.slice(n2 ? 1 : 0, t3), i2 = s2.indexOf(".");
          let o2, a2;
          if (-1 === i2) o2 = s2, a2 = r3;
          else {
            o2 = s2.slice(0, i2) + s2.slice(i2 + 1);
            a2 = r3 - (s2.length - i2 - 1);
          }
          o2 = o2.replace(/0+$/, "") || "0";
          const c2 = BigInt(o2) * 10n ** BigInt(a2 + (s2.replace(".", "").length - o2.length));
          return n2 ? -c2 : c2;
        })(e3) : BigInt(e3);
      }
    }
    return t2;
  }
  function L(e2) {
    const t2 = e2.startsWith("-"), r2 = t2 ? e2.slice(1) : e2, n2 = r2.search(/[eE]/);
    let s2;
    if (-1 === n2) s2 = r2;
    else {
      const e3 = parseInt(r2.slice(n2 + 1), 10), t3 = r2.slice(0, n2), i2 = t3.indexOf(".");
      let o2, a2;
      -1 === i2 ? (o2 = t3, a2 = t3.length) : (o2 = t3.slice(0, i2) + t3.slice(i2 + 1), a2 = i2), o2 = o2.replace(/0+$/, "") || "0";
      const c2 = a2 + e3;
      s2 = "0" === o2 ? "0" : c2 <= 0 ? "0." + "0".repeat(-c2) + o2 : c2 >= o2.length ? o2 + "0".repeat(c2 - o2.length) : o2.slice(0, c2) + "." + o2.slice(c2);
    }
    return s2.includes(".") && (s2 = s2.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")), (t2 ? "-" : "") + s2;
  }
  const U = /* @__PURE__ */ Symbol.for("@aws-sdk/reviver");
  function B(e2) {
    const t2 = o.of(e2), r2 = t2.getSchema();
    if (Array.isArray(r2) && t2.isStructSchema()) {
      if (U in r2) return r2[U];
      const e3 = F(t2, /* @__PURE__ */ new Set());
      return r2[U] = e3, e3;
    }
    return F(t2, /* @__PURE__ */ new Set());
  }
  function F(e2, t2) {
    const r2 = e2.getSchema();
    if (t2.has(r2)) return false;
    if (t2.add(r2), e2.isBigIntegerSchema() || e2.isBigDecimalSchema()) return true;
    if (e2.isStructSchema()) {
      for (const [, r3] of e2.structIterator()) if (F(r3, t2)) return true;
    } else if (e2.isListSchema() || e2.isMapSchema()) {
      if (F(e2.getValueSchema(), t2)) return true;
    } else if (e2.isDocumentSchema()) return true;
    return false;
  }
  const z = (e2, t2) => u(e2, t2).then((e3) => (t2?.utf8Encoder ?? S)(e3));
  async function V(e2, t2, r2) {
    let n2;
    if ($() && "function" == typeof e2?.[Symbol.asyncIterator]) {
      const r3 = await u(e2, t2);
      "function" == typeof Buffer && (n2 = Buffer.isBuffer(r3) ? r3 : Buffer.from(r3.buffer, r3.byteOffset, r3.byteLength));
    }
    if (n2 || (n2 = await z(e2, t2)), 0 === n2.length) return {};
    const s2 = r2 && B(r2) ? j : void 0;
    try {
      return JSON.parse(n2, s2);
    } catch (e3) {
      throw "SyntaxError" === e3?.name && Object.defineProperty(e3, "$responseBodyText", { value: "string" == typeof n2 ? n2 : n2.toString("utf8") }), e3;
    }
  }
  const H = (e2, t2) => Object.keys(e2).find((e3) => e3.toLowerCase() === t2.toLowerCase()), q = (e2) => {
    let t2 = e2;
    return "number" == typeof t2 && (t2 = t2.toString()), t2.indexOf(",") >= 0 && (t2 = t2.split(",")[0]), t2.indexOf(":") >= 0 && (t2 = t2.split(":")[0]), t2.indexOf("#") >= 0 && (t2 = t2.split("#")[1]), t2;
  }, W = (e2, t2) => Q(e2, t2, ["header", "code", "type"]), G = (e2, t2, r2 = false) => Q(e2, t2, r2 ? ["code", "header", "type"] : ["type", "code", "header"]), Q = ({ headers: e2 }, t2, r2) => {
    for (; r2.length > 0; ) {
      switch (r2.shift()) {
        case "header":
          const r3 = H(e2 ?? {}, "x-amzn-errortype");
          if (void 0 !== r3) return q(e2[r3]);
          break;
        case "code":
          const n2 = H(t2 ?? {}, "code");
          if (n2 && void 0 !== t2[n2]) return q(t2[n2]);
          break;
        case "type":
          if (void 0 !== t2?.__type) return q(t2.__type);
      }
    }
  };
  function X(e2) {
    Object.defineProperty(e2, "__proto__", { value: void 0, writable: true, enumerable: true, configurable: true });
  }
  class K extends O {
    settings;
    constructor(e2) {
      super(), this.settings = e2;
    }
    async read(e2, t2) {
      const r2 = B(e2) ? j : void 0;
      let n2;
      if ("string" == typeof t2) {
        if (0 === t2.length) return {};
        n2 = JSON.parse(t2, r2);
      } else if (t2 instanceof Uint8Array && $()) {
        if (0 === t2.byteLength) return {};
        const e3 = Buffer.isBuffer(t2) ? t2 : Buffer.from(t2.buffer, t2.byteOffset, t2.byteLength);
        n2 = JSON.parse(e3, r2);
      } else n2 = await V(t2, this.serdeContext, e2);
      return this._read(e2, n2);
    }
    readObject(e2, t2) {
      return this._read(e2, t2);
    }
    _read(e2, t2) {
      const r2 = null !== t2 && "object" == typeof t2, n2 = o.of(e2);
      if (r2) {
        if (n2.isStructSchema()) return this._readStruct(n2, t2);
        if (Array.isArray(t2) && n2.isListSchema()) {
          const e3 = n2.getValueSchema();
          if (this.needsTransform(e3)) for (let r3 = 0; r3 < t2.length; ++r3) t2[r3] = this._read(e3, t2[r3]);
          return t2;
        }
        if (n2.isMapSchema()) {
          const e3 = n2.getValueSchema(), r3 = t2;
          if (this.needsTransform(e3)) for (const t3 in r3) "__proto__" === t3 && X(r3), r3[t3] = this._read(e3, r3[t3]);
          return r3;
        }
      }
      if (n2.isBlobSchema() && "string" == typeof t2) return b(t2);
      const s2 = n2.getMergedTraits().mediaType;
      if (n2.isStringSchema() && "string" == typeof t2 && s2) {
        return "application/json" === s2 || s2.endsWith("+json") ? E.from(t2) : t2;
      }
      if (n2.isTimestampSchema() && null != t2) {
        switch (d(n2, this.settings)) {
          case 5:
            return T(t2);
          case 6:
            return x(t2);
          case 7:
            return v(t2);
          default:
            return console.warn("Missing timestamp format, parsing value with Date constructor:", t2), new Date(t2);
        }
      }
      if (n2.isBigIntegerSchema() && ("number" == typeof t2 || "string" == typeof t2)) return BigInt(t2);
      if (n2.isBigDecimalSchema() && null != t2) {
        if (t2 instanceof w) return t2;
        const e3 = t2;
        return "bigDecimal" === e3.type && "string" in e3 ? new w(e3.string, e3.type) : new w(String(t2), "bigDecimal");
      }
      if (n2.isNumericSchema() && "string" == typeof t2) {
        switch (t2) {
          case "Infinity":
            return 1 / 0;
          case "-Infinity":
            return -1 / 0;
          case "NaN":
            return NaN;
        }
        return t2;
      }
      if (n2.isDocumentSchema() && r2) if (Array.isArray(t2)) for (let e3 = 0; e3 < t2.length; ++e3) {
        const r3 = t2[e3];
        r3 instanceof w || (t2[e3] = this._read(n2, r3));
      }
      else {
        const e3 = t2;
        for (const t3 in e3) {
          "__proto__" === t3 && X(e3);
          const r3 = e3[t3];
          r3 instanceof w || (e3[t3] = this._read(n2, r3));
        }
      }
      return t2;
    }
    _readStruct(e2, t2) {
      const r2 = e2.isUnionSchema(), n2 = {};
      let s2;
      const i2 = "string" == typeof t2.__type, { jsonName: o2 } = this.settings;
      let a2;
      o2 && i2 && (s2 = {}), r2 && (a2 = new M(t2, n2));
      for (const [c2, l2] of e2.structIterator()) {
        let e3 = c2;
        o2 && (e3 = l2.getMergedTraits().jsonName ?? e3, i2 && (s2[e3] = c2)), r2 && a2.mark(e3), null != t2[e3] && (n2[c2] = this._read(l2, t2[e3]));
      }
      if (r2) a2.writeUnknown();
      else if (i2) for (const e3 in t2) {
        const r3 = t2[e3], i3 = o2 ? s2[e3] ?? e3 : e3;
        i3 in n2 || (n2[i3] = r3);
      }
      return n2;
    }
    needsTransform(e2) {
      return !!(e2.isBlobSchema() || e2.isTimestampSchema() || e2.isBigIntegerSchema() || e2.isBigDecimalSchema()) || (!!(e2.isDocumentSchema() || e2.isStructSchema() || e2.isListSchema() || e2.isMapSchema()) || !(!e2.isStringSchema() || !e2.getMergedTraits().mediaType));
    }
  }
  class J extends Uint8Array {
    string = null;
    static allocUnsafe(e2) {
      if ("function" == typeof Buffer) {
        const t2 = Buffer.allocUnsafe(e2);
        return new J(t2.buffer, t2.byteOffset, t2.byteLength);
      }
      return new J(e2);
    }
    toString() {
      return this.s();
    }
    valueOf() {
      return this.s();
    }
    includes(e2, t2) {
      return "string" == typeof e2 ? this.s().includes(e2, t2) : Uint8Array.prototype.includes.call(this, e2, t2);
    }
    indexOf(e2, t2) {
      return "string" == typeof e2 ? this.s().indexOf(e2, t2) : Uint8Array.prototype.indexOf.call(this, e2, t2);
    }
    lastIndexOf(e2, t2) {
      if ("string" == typeof e2) return this.s().lastIndexOf(e2, t2);
      const r2 = Uint8Array.prototype.lastIndexOf;
      return void 0 !== t2 ? r2.call(this, e2, t2) : r2.call(this, e2);
    }
    startsWith(e2, t2) {
      return this.s().startsWith(e2, t2);
    }
    endsWith(e2, t2) {
      return this.s().endsWith(e2, t2);
    }
    match(e2) {
      return this.s().match(e2);
    }
    replace(e2, t2) {
      return this.s().replace(e2, t2);
    }
    search(e2) {
      return this.s().search(e2);
    }
    split(e2, t2) {
      return this.s().split(e2, t2);
    }
    substring(e2, t2) {
      return this.s().substring(e2, t2);
    }
    trim() {
      return this.s().trim();
    }
    trimStart() {
      return this.s().trimStart();
    }
    trimEnd() {
      return this.s().trimEnd();
    }
    charAt(e2) {
      return this.s().charAt(e2);
    }
    charCodeAt(e2) {
      return this.s().charCodeAt(e2);
    }
    padStart(e2, t2) {
      return this.s().padStart(e2, t2);
    }
    padEnd(e2, t2) {
      return this.s().padEnd(e2, t2);
    }
    repeat(e2) {
      return this.s().repeat(e2);
    }
    toUpperCase() {
      return this.s().toUpperCase();
    }
    toLowerCase() {
      return this.s().toLowerCase();
    }
    s() {
      if (null == this.string) {
        const e2 = Date.now();
        e2 > Y + 6e4 && (console.warn("@aws-sdk/core/protocols - WARN - JsonCodec2: you have called a string method on a Uint8Array request body. It has been automatically converted to string. In a future version this will throw an error."), Y = e2), this.string = S(this);
      }
      return this.string;
    }
  }
  var Y = 0;
  const Z = new TextEncoder(), ee = 34, te = new Uint8Array([116, 114, 117, 101]), re = new Uint8Array([102, 97, 108, 115, 101]), ne = new Uint8Array([110, 117, 108, 108]), se = new Array(128).fill(null);
  se[8] = "b", se[9] = "t", se[10] = "n", se[12] = "f", se[13] = "r", se[34] = '"', se[92] = "\\";
  for (let e2 = 0; e2 < 32; e2++) null === se[e2] && (se[e2] = "u00" + e2.toString(16).padStart(2, "0"));
  function ie(e2) {
    return J.allocUnsafe(e2);
  }
  class oe extends O {
    settings;
    json;
    i = 0;
    rootSchema;
    rawValue;
    passthrough = false;
    constructor(e2) {
      super(), this.settings = e2, this.json = ie(2048);
    }
    write(e2, t2) {
      this.i = 0, this.rawValue = t2, this.rootSchema = o.of(e2), this.passthrough = this.rootSchema.isBlobSchema() || this.rootSchema.isStringSchema(), this.passthrough || this.writeValue(this.rootSchema, t2, void 0);
    }
    writeDiscriminatedDocument(e2, t2) {
      this.i = 0, this.rootSchema = o.of(e2);
      const r2 = this.rootSchema;
      if (r2.isStructSchema() && null != t2 && "object" == typeof t2) {
        this.writeValue(r2, t2, void 0);
        const e3 = `"__type":"${r2.getName(true) ?? "Unknown"}",`, n2 = e3.length;
        this.ensure(n2), this.json.copyWithin(1 + n2, 1, this.i), Z.encodeInto(e3, this.json.subarray(1)), this.i += n2;
      } else this.writeValue(r2, t2, void 0);
    }
    flush() {
      this.rootSchema = void 0;
      const e2 = this.i;
      this.i = 0;
      const t2 = this.rawValue;
      if (this.rawValue = void 0, 0 === e2) return t2;
      const r2 = this.json.subarray(0, e2);
      return this.json = ie(2048), r2;
    }
    ensure(e2) {
      const { i: t2, json: r2 } = this;
      if (t2 + e2 > r2.length) {
        let n2 = 2 * r2.length;
        for (; n2 < t2 + e2; ) n2 *= 2;
        const s2 = ie(n2);
        s2.set(this.json), this.json = s2;
      }
    }
    writeAscii(e2) {
      const t2 = e2.length;
      this.ensure(t2);
      let { i: r2, json: n2 } = this;
      for (let s2 = 0; s2 < t2; ++s2) n2[r2] = e2.charCodeAt(s2), r2 += 1;
      this.i = r2;
    }
    writeAsciiQuoted(e2) {
      const t2 = e2.length;
      this.ensure(t2 + 4);
      let { json: r2, i: n2 } = this;
      r2[n2++] = ee;
      for (let s2 = 0; s2 < t2; ++s2) r2[n2++] = e2.charCodeAt(s2);
      r2[n2++] = ee, this.i = n2;
    }
    writeJsonString(e2) {
      this.ensure(3 * e2.length + 2), this.json[this.i++] = ee;
      const t2 = e2.length;
      for (let r2 = 0; r2 < t2; ++r2) {
        const n2 = e2.charCodeAt(r2);
        if (n2 > 34 && n2 < 92) this.json[this.i++] = n2;
        else if (n2 < 128) {
          const e3 = se[n2];
          if (null !== e3) {
            this.ensure(e3.length + 1), this.json[this.i++] = 92;
            for (let t3 = 0; t3 < e3.length; t3++) this.json[this.i++] = e3.charCodeAt(t3);
          } else this.json[this.i++] = n2;
        } else if (n2 >= 55296 && n2 <= 56319) {
          const s2 = r2 + 1 < t2 ? e2.charCodeAt(r2 + 1) : 0;
          if (s2 >= 56320 && s2 <= 57343) {
            this.ensure(4);
            const { written: t3 } = Z.encodeInto(e2.substring(r2, r2 + 2), this.json.subarray(this.i));
            this.i += t3, ++r2;
          } else this.ensure(6), this.writeUnicodeEscape(n2);
        } else if (n2 >= 56320 && n2 <= 57343) this.ensure(6), this.writeUnicodeEscape(n2);
        else {
          let { i: e3, json: t3 } = this;
          n2 < 2048 ? (t3[e3++] = 192 | n2 >> 6, t3[e3++] = 128 | 63 & n2) : (t3[e3++] = 224 | n2 >> 12, t3[e3++] = 128 | n2 >> 6 & 63, t3[e3++] = 128 | 63 & n2), this.i = e3;
        }
      }
      this.json[this.i++] = ee;
    }
    writeUnicodeEscape(e2) {
      let { json: t2, i: r2 } = this;
      t2[r2++] = 92, t2[r2++] = 117;
      const n2 = e2.toString(16).padStart(4, "0");
      for (let e3 = 0; e3 < 4; ++e3) t2[r2++] = n2.charCodeAt(e3);
      this.i = r2;
    }
    static B64 = (() => {
      const e2 = new Uint8Array(64);
      for (let t2 = 0; t2 < 64; ++t2) e2[t2] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(t2);
      return e2;
    })();
    writeBase64(e2) {
      const t2 = 4 * Math.ceil(e2.length / 3);
      this.ensure(t2 + 2);
      const r2 = this.json, n2 = oe.B64;
      let s2 = this.i;
      r2[s2++] = ee;
      const i2 = e2.length, o2 = i2 % 3, a2 = i2 - o2;
      for (let t3 = 0; t3 < a2; t3 += 3) {
        const i3 = e2[t3], o3 = e2[t3 + 1], a3 = e2[t3 + 2];
        r2[s2++] = n2[i3 >> 2], r2[s2++] = n2[(3 & i3) << 4 | o3 >> 4], r2[s2++] = n2[(15 & o3) << 2 | a3 >> 6], r2[s2++] = n2[63 & a3];
      }
      if (2 === o2) {
        const t3 = e2[a2], i3 = e2[a2 + 1];
        r2[s2++] = n2[t3 >> 2], r2[s2++] = n2[(3 & t3) << 4 | i3 >> 4], r2[s2++] = n2[(15 & i3) << 2], r2[s2++] = 61;
      } else if (1 === o2) {
        const t3 = e2[a2];
        r2[s2++] = n2[t3 >> 2], r2[s2++] = n2[(3 & t3) << 4], r2[s2++] = 61, r2[s2++] = 61;
      }
      r2[s2++] = ee, this.i = s2;
    }
    writeValue(e2, t2, r2) {
      if (null == t2) {
        if (r2?.isStructSchema()) {
          if (void 0 === t2) {
            if (o.of(e2).isIdempotencyToken()) return void this.writeAsciiQuoted(A());
          }
          return;
        }
        return this.ensure(4), this.json.set(ne, this.i), void (this.i += 4);
      }
      const n2 = o.of(e2), s2 = "object" == typeof t2;
      if (n2.isStringSchema()) {
        const e3 = n2.getMergedTraits().mediaType;
        if (e3) {
          if ("application/json" === e3 || e3.endsWith("+json")) return void this.writeJsonString(E.from(t2).toString());
        }
      }
      if (s2) {
        if (n2.isStructSchema()) return void this.writeStruct(n2, t2);
        if (Array.isArray(t2) && (n2.isListSchema() || n2.isDocumentSchema())) return void this.writeList(n2, t2, n2.isDocumentSchema());
        if (n2.isMapSchema()) return void this.writeMap(n2, t2, false);
        if (t2 instanceof Uint8Array && (n2.isBlobSchema() || n2.isDocumentSchema())) return void this.writeBase64(t2);
        if (t2 instanceof Date && (n2.isTimestampSchema() || n2.isDocumentSchema())) return void this.writeTimestamp(n2, t2);
        if (t2 instanceof w) return void this.writeAscii(t2.string);
        if (n2.isDocumentSchema()) return void (Array.isArray(t2) ? this.writeList(n2, t2, true) : this.writeMap(n2, t2, true));
        const e3 = JSON.stringify(t2);
        return void this.writeAscii(e3);
      }
      if ("string" != typeof t2) {
        if ("number" == typeof t2) {
          if (Math.abs(t2) === 1 / 0 || Number.isNaN(t2)) return void this.writeAsciiQuoted(String(t2));
          const e3 = String(t2);
          return void this.writeAscii(e3);
        }
        if ("boolean" == typeof t2) {
          this.ensure(5);
          let { i: e3, json: r3 } = this;
          return t2 ? (r3.set(te, e3), e3 += 4) : (r3.set(re, e3), e3 += 5), void (this.i = e3);
        }
        "bigint" != typeof t2 ? this.writeAscii(String(t2)) : this.writeAscii(t2.toString());
      } else {
        if (n2.isBlobSchema()) {
          const e3 = (this.serdeContext?.base64Encoder ?? N)(t2);
          return void this.writeAsciiQuoted(e3);
        }
        this.writeJsonString(t2);
      }
    }
    writeStruct(e2, t2) {
      this.ensure(2), this.json[this.i++] = 123;
      let r2 = false;
      const n2 = "string" == typeof t2.__type;
      let s2;
      n2 && (s2 = /* @__PURE__ */ new Set());
      for (const [n3, i2] of e2.structIterator()) {
        const o2 = t2[n3];
        if (null == o2 && !i2.isIdempotencyToken()) continue;
        r2 && (this.ensure(1), this.json[this.i++] = 44), r2 = true;
        const a2 = this.settings.jsonName ? i2.getMergedTraits().jsonName ?? n3 : n3;
        s2 && (s2.add(n3), s2.add(a2)), this.writeAsciiQuoted(a2), this.json[this.i++] = 58, this.writeValue(i2, o2, e2);
      }
      if (!r2 && e2.isUnionSchema()) {
        const { $unknown: r3 } = t2;
        if (Array.isArray(r3)) {
          const [t3, n3] = r3;
          this.writeAsciiQuoted(t3), this.ensure(1), this.json[this.i++] = 58, this.writeValue(15, n3, e2);
        }
      } else if (n2) for (const e3 in t2) {
        if (s2.has(e3)) continue;
        s2.add(e3);
        const n3 = t2[e3];
        r2 && (this.ensure(1), this.json[this.i++] = 44), r2 = true, this.writeAsciiQuoted(e3), this.ensure(1), this.json[this.i++] = 58, this.writeValue(15, n3, void 0);
      }
      this.ensure(1), this.json[this.i++] = 125;
    }
    writeList(e2, t2, r2) {
      const n2 = !!e2.getMergedTraits().sparse, s2 = e2.getValueSchema();
      if (!r2 && (s2.isStringSchema() || s2.isNumericSchema() || s2.isBooleanSchema())) {
        let e3, r3 = false;
        for (let e4 = 0; e4 < t2.length; ++e4) {
          const s3 = t2[e4];
          if (Number.isNaN(s3) || s3 === 1 / 0 || s3 === -1 / 0 || null == s3 && !n2) {
            r3 = true;
            break;
          }
        }
        if (r3) {
          const r4 = [];
          for (let e4 = 0; e4 < t2.length; ++e4) {
            const s3 = t2[e4];
            (null != s3 || n2) && (Number.isNaN(s3) || s3 === 1 / 0 || s3 === -1 / 0 ? r4.push(String(s3)) : r4.push(s3));
          }
          e3 = JSON.stringify(r4);
        } else e3 = JSON.stringify(t2);
        return this.ensure(3 * e3.length), void (this.i += Z.encodeInto(e3, this.json.subarray(this.i)).written);
      }
      this.ensure(2), this.json[this.i++] = 91;
      let i2 = false;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const o2 = t2[e3];
        (r2 ? void 0 !== o2 : null != o2 || n2) && (i2 && (this.ensure(1), this.json[this.i++] = 44), this.writeValue(s2, o2, void 0), i2 = true);
      }
      this.ensure(1), this.json[this.i++] = 93;
    }
    writeMap(e2, t2, r2) {
      const n2 = !!e2.getMergedTraits().sparse, s2 = e2.getValueSchema();
      if (!r2 && (s2.isStringSchema() || s2.isNumericSchema() || s2.isBooleanSchema())) {
        let e3;
        for (const r4 in t2) {
          const s3 = t2[r4];
          Number.isNaN(s3) || s3 === 1 / 0 || s3 === -1 / 0 ? ((e3 ??= {})[r4] = s3, t2[r4] = String(s3)) : null !== s3 || n2 || ((e3 ??= {})[r4] = null, t2[r4] = void 0);
        }
        const r3 = JSON.stringify(t2);
        return e3 && Object.assign(t2, e3), this.ensure(3 * r3.length), void (this.i += Z.encodeInto(r3, this.json.subarray(this.i)).written);
      }
      this.ensure(2), this.json[this.i++] = 123;
      let i2 = true;
      for (const e3 in t2) {
        const o2 = t2[e3];
        (r2 ? void 0 !== o2 : null != o2 || n2) && (i2 || (this.ensure(1), this.json[this.i++] = 44), i2 = false, this.writeJsonString(e3), this.ensure(1), this.json[this.i++] = 58, this.writeValue(s2, o2, void 0));
      }
      this.ensure(1), this.json[this.i++] = 125;
    }
    writeTimestamp(e2, t2) {
      switch (d(e2, this.settings)) {
        case 5: {
          const e3 = t2.toISOString().replace(".000Z", "Z");
          return void this.writeAsciiQuoted(e3);
        }
        case 6:
          return void this.writeAsciiQuoted(C(t2));
        case 7: {
          const e3 = String(t2.getTime() / 1e3);
          return void this.writeAscii(e3);
        }
        default: {
          const e3 = String(t2.getTime() / 1e3);
          return void this.writeAscii(e3);
        }
      }
    }
  }
  class ae extends O {
    settings;
    constructor(e2) {
      super(), this.settings = e2;
    }
    createSerializer() {
      const e2 = new oe(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
    createDeserializer() {
      const e2 = new K(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
  }
  class ce extends h {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2, serviceTarget: r2, awsQueryCompatible: n2, jsonCodec: s2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2 }), this.serviceTarget = r2, this.codec = s2 ?? new ae({ timestampFormat: { useTrait: true, default: 7 }, jsonName: false }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!n2, this.mixin = new k(this.awsQueryCompatible);
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2);
      return n2.path.endsWith("/") || (n2.path += "/"), n2.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`, n2.headers["x-amz-target"] = `${this.serviceTarget}.${e2.name}`, this.awsQueryCompatible && (n2.headers["x-amzn-query-mode"] = "true"), "unit" !== a(e2.input) && n2.body || (n2.body = "{}"), n2;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(e2, t2, r2, n2, s2) {
      const { awsQueryCompatible: i2 } = this;
      i2 && this.mixin.setQueryCompatError(n2, r2);
      const a2 = G(r2, n2, i2) ?? "Unknown";
      this.mixin.compose(this.compositeErrorRegistry, a2, this.options.defaultNamespace);
      const { errorSchema: c2, errorMetadata: l2 } = await this.mixin.getErrorSchemaOrThrowBaseException(a2, this.options.defaultNamespace, r2, n2, s2, i2 ? this.mixin.findQueryCompatibleError : void 0), u2 = o.of(c2), d2 = n2.message ?? n2.Message ?? "UnknownError", h2 = new (this.compositeErrorRegistry.getErrorCtor(c2) ?? Error)({}), f2 = {}, p2 = this.codec.createDeserializer();
      for (const [e3, t3] of u2.structIterator()) null != n2[e3] && (f2[e3] = p2.readObject(t3, n2[e3]));
      throw i2 && this.mixin.queryCompatOutput(n2, f2), this.mixin.decorateServiceException(Object.assign(h2, l2, { $fault: u2.getMergedTraits().error, message: d2 }, f2), n2);
    }
  }
  class le extends O {
    settings;
    constructor(e2) {
      super(), this.settings = e2;
    }
    async read(e2, t2) {
      const r2 = B(e2) ? j : void 0;
      return this._read(e2, "string" == typeof t2 ? JSON.parse(t2, r2) : await V(t2, this.serdeContext, e2));
    }
    readObject(e2, t2) {
      return this._read(e2, t2);
    }
    _read(e2, t2) {
      const r2 = null !== t2 && "object" == typeof t2, n2 = o.of(e2);
      if (r2) {
        if (n2.isStructSchema()) {
          const e3 = t2, r3 = n2.isUnionSchema(), s3 = {};
          let i2;
          const { jsonName: o2 } = this.settings;
          let a2;
          o2 && (i2 = {}), r3 && (a2 = new M(e3, s3));
          for (const [t3, c2] of n2.structIterator()) {
            let n3 = t3;
            o2 && (n3 = c2.getMergedTraits().jsonName ?? n3, i2[n3] = t3), r3 && a2.mark(n3), null != e3[n3] && (s3[t3] = this._read(c2, e3[n3]));
          }
          if (r3) a2.writeUnknown();
          else if ("string" == typeof e3.__type) for (const t3 in e3) {
            const r4 = e3[t3], n3 = o2 ? i2[t3] ?? t3 : t3;
            n3 in s3 || (s3[n3] = r4);
          }
          return s3;
        }
        if (Array.isArray(t2) && n2.isListSchema()) {
          const e3 = n2.getValueSchema(), r3 = [];
          for (const n3 of t2) r3.push(this._read(e3, n3));
          return r3;
        }
        if (n2.isMapSchema()) {
          const e3 = n2.getValueSchema(), r3 = {};
          for (const n3 in t2) "__proto__" === n3 && X(r3), r3[n3] = this._read(e3, t2[n3]);
          return r3;
        }
      }
      if (n2.isBlobSchema() && "string" == typeof t2) return b(t2);
      const s2 = n2.getMergedTraits().mediaType;
      if (n2.isStringSchema() && "string" == typeof t2 && s2) {
        return "application/json" === s2 || s2.endsWith("+json") ? E.from(t2) : t2;
      }
      if (n2.isTimestampSchema() && null != t2) {
        switch (d(n2, this.settings)) {
          case 5:
            return T(t2);
          case 6:
            return x(t2);
          case 7:
            return v(t2);
          default:
            return console.warn("Missing timestamp format, parsing value with Date constructor:", t2), new Date(t2);
        }
      }
      if (n2.isBigIntegerSchema() && ("number" == typeof t2 || "string" == typeof t2)) return BigInt(t2);
      if (n2.isBigDecimalSchema() && null != t2) {
        if (t2 instanceof w) return t2;
        const e3 = t2;
        return "bigDecimal" === e3.type && "string" in e3 ? new w(e3.string, e3.type) : new w(String(t2), "bigDecimal");
      }
      if (n2.isNumericSchema() && "string" == typeof t2) {
        switch (t2) {
          case "Infinity":
            return 1 / 0;
          case "-Infinity":
            return -1 / 0;
          case "NaN":
            return NaN;
        }
        return t2;
      }
      if (n2.isDocumentSchema()) {
        if (r2) {
          const e3 = Array.isArray(t2) ? [] : {};
          for (const r3 in t2) {
            "__proto__" === r3 && X(e3);
            const s3 = t2[r3];
            e3[r3] = s3 instanceof w ? s3 : this._read(n2, s3);
          }
          return e3;
        }
        return structuredClone(t2);
      }
      return t2;
    }
  }
  const ue = String.fromCharCode(925);
  class de {
    values = /* @__PURE__ */ new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
      if (1 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (2 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (e2, t2) => {
        if (t2 instanceof w) {
          const e3 = ue + "nv" + this.counter++ + "_" + t2.string;
          return this.values.set(`"${e3}"`, t2.string), e3;
        }
        if ("bigint" == typeof t2) {
          const e3 = t2.toString(), r2 = ue + "b" + this.counter++ + "_" + e3;
          return this.values.set(`"${r2}"`, e3), r2;
        }
        return t2;
      };
    }
    replaceInJson(e2) {
      if (0 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (2 === this.stage) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, 0 === this.counter) return e2;
      for (const [t2, r2] of this.values) e2 = e2.replace(t2, r2);
      return e2;
    }
  }
  class he extends O {
    settings;
    buffer;
    useReplacer = false;
    rootSchema;
    constructor(e2) {
      super(), this.settings = e2;
    }
    write(e2, t2) {
      this.rootSchema = o.of(e2), this.buffer = this._write(this.rootSchema, t2);
    }
    flush() {
      const { rootSchema: e2, useReplacer: t2 } = this;
      if (this.rootSchema = void 0, this.useReplacer = false, e2?.isStructSchema() || e2?.isDocumentSchema()) {
        if (!t2) return JSON.stringify(this.buffer);
        const e3 = new de();
        return e3.replaceInJson(JSON.stringify(this.buffer, e3.createReplacer(), 0));
      }
      return this.buffer;
    }
    writeDiscriminatedDocument(e2, t2) {
      this.write(e2, t2), "object" == typeof this.buffer && (this.buffer.__type = o.of(e2).getName(true));
    }
    _write(e2, t2, r2) {
      const n2 = null !== t2 && "object" == typeof t2, s2 = o.of(e2);
      if (n2) {
        if (s2.isStructSchema()) {
          const e3 = t2, r3 = {}, { jsonName: n3 } = this.settings;
          let i2;
          n3 && (i2 = {});
          let o2 = 0;
          for (const [t3, a2] of s2.structIterator()) {
            const c2 = this._write(a2, e3[t3], s2);
            if (void 0 !== c2) {
              let e4 = t3;
              n3 && (e4 = a2.getMergedTraits().jsonName ?? t3, i2[t3] = e4), r3[e4] = c2, o2++;
            }
          }
          if (s2.isUnionSchema() && 0 === o2) {
            const { $unknown: t3 } = e3;
            if (Array.isArray(t3)) {
              const [e4, n4] = t3;
              "__proto__" === e4 && X(r3), r3[e4] = this._write(15, n4);
            }
          } else if ("string" == typeof e3.__type) for (const t3 in e3) {
            const s3 = e3[t3], o3 = n3 ? i2[t3] ?? t3 : t3;
            o3 in r3 || (r3[o3] = this._write(15, s3));
          }
          return r3;
        }
        if (Array.isArray(t2) && s2.isListSchema()) {
          const e3 = s2.getValueSchema(), r3 = [], n3 = !!s2.getMergedTraits().sparse;
          for (const s3 of t2) (n3 || null != s3) && r3.push(this._write(e3, s3));
          return r3;
        }
        if (s2.isMapSchema()) {
          const e3 = s2.getValueSchema(), r3 = {}, n3 = !!s2.getMergedTraits().sparse;
          for (const s3 in t2) {
            const i2 = t2[s3];
            (n3 || null != i2) && ("__proto__" === s3 && X(r3), r3[s3] = this._write(e3, i2));
          }
          return r3;
        }
        if (t2 instanceof Uint8Array && s2.isBlobSchema()) return s2 === this.rootSchema ? t2 : (this.serdeContext?.base64Encoder ?? N)(t2);
        if (t2 instanceof Date && (s2.isTimestampSchema() || s2.isDocumentSchema())) {
          switch (d(s2, this.settings)) {
            case 5:
              return t2.toISOString().replace(".000Z", "Z");
            case 6:
              return C(t2);
            case 7:
              return t2.getTime() / 1e3;
            default:
              return console.warn("Missing timestamp format, using epoch seconds", t2), t2.getTime() / 1e3;
          }
        }
        t2 instanceof w && (this.useReplacer = true);
      }
      if (null !== t2 || !r2?.isStructSchema()) {
        if (s2.isStringSchema()) {
          if (void 0 === t2 && s2.isIdempotencyToken()) return A();
          const e3 = s2.getMergedTraits().mediaType;
          if (null != t2 && e3) {
            if ("application/json" === e3 || e3.endsWith("+json")) return E.from(t2);
          }
          return t2;
        }
        if ("number" == typeof t2) return Math.abs(t2) === 1 / 0 || isNaN(t2) ? String(t2) : t2;
        if ("string" == typeof t2 && s2.isBlobSchema()) return s2 === this.rootSchema ? t2 : (this.serdeContext?.base64Encoder ?? N)(t2);
        if ("bigint" == typeof t2 && (this.useReplacer = true), s2.isDocumentSchema()) {
          if (n2) {
            if (t2 instanceof Uint8Array) return (this.serdeContext?.base64Encoder ?? N)(t2);
            const e3 = Array.isArray(t2) ? [] : {};
            for (const r3 in t2) {
              const n3 = t2[r3];
              "__proto__" === r3 && X(e3), n3 instanceof w ? (this.useReplacer = true, e3[r3] = n3) : e3[r3] = this._write(s2, n3);
            }
            return e3;
          }
          return structuredClone(t2);
        }
        return t2;
      }
    }
  }
  class fe extends O {
    settings;
    stringDeserializer;
    constructor(e2) {
      super(), this.settings = e2, this.stringDeserializer = new m(e2);
    }
    setSerdeContext(e2) {
      this.serdeContext = e2, this.stringDeserializer.setSerdeContext(e2);
    }
    read(e2, t2, r2) {
      const n2 = o.of(e2), s2 = n2.getMemberSchemas();
      if (n2.isStructSchema() && n2.isMemberSchema() && !!Object.values(s2).find((e3) => !!e3.getMemberTraits().eventPayload)) {
        const e3 = {}, r3 = Object.keys(s2)[0];
        return s2[r3].isBlobSchema() ? e3[r3] = t2 : e3[r3] = this.read(s2[r3], t2), e3;
      }
      const i2 = (this.serdeContext?.utf8Encoder ?? S)(t2), a2 = this.parseXml(i2);
      return this.readSchema(e2, r2 ? a2[r2] : a2);
    }
    readSchema(e2, t2) {
      const r2 = o.of(e2);
      if (r2.isUnitSchema()) return;
      const n2 = r2.getMergedTraits();
      if (r2.isListSchema() && !Array.isArray(t2)) return this.readSchema(r2, [t2]);
      if (null == t2) return t2;
      if ("object" == typeof t2) {
        const e3 = !!n2.xmlFlattened;
        if (r2.isListSchema()) {
          const n3 = r2.getValueSchema(), s3 = [], i2 = n3.getMergedTraits().xmlName ?? "member", o2 = e3 ? t2 : (t2[0] ?? t2)[i2];
          if (null == o2) return s3;
          const a2 = Array.isArray(o2) ? o2 : [o2];
          for (const e4 of a2) s3.push(this.readSchema(n3, e4));
          return s3;
        }
        const s2 = {};
        if (r2.isMapSchema()) {
          const n3 = r2.getKeySchema(), i2 = r2.getValueSchema();
          let o2;
          o2 = e3 ? Array.isArray(t2) ? t2 : [t2] : Array.isArray(t2.entry) ? t2.entry : [t2.entry];
          const a2 = n3.getMergedTraits().xmlName ?? "key", c2 = i2.getMergedTraits().xmlName ?? "value";
          for (const e4 of o2) {
            const t3 = e4[a2], r3 = e4[c2];
            "__proto__" === t3 && X(s2), s2[t3] = this.readSchema(i2, r3);
          }
          return s2;
        }
        if (r2.isStructSchema()) {
          const e4 = r2.isUnionSchema();
          let n3;
          e4 && (n3 = new M(t2, s2));
          for (const [i2, o2] of r2.structIterator()) {
            const r3 = o2.getMergedTraits(), a2 = r3.httpPayload ? r3.xmlName ?? o2.getName() : o2.getMemberTraits().xmlName ?? i2;
            e4 && n3.mark(a2), null != t2[a2] && (s2[i2] = this.readSchema(o2, t2[a2]));
          }
          return e4 && n3.writeUnknown(), s2;
        }
        if (r2.isDocumentSchema()) return t2;
        throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r2.getName(true)}`);
      }
      return r2.isListSchema() ? [] : r2.isMapSchema() || r2.isStructSchema() ? {} : this.stringDeserializer.read(r2, t2);
    }
    parseXml(e2) {
      if (e2.length) {
        let t2;
        try {
          t2 = R(e2);
        } catch (t3) {
          throw t3 && "object" == typeof t3 && Object.defineProperty(t3, "$responseBodyText", { value: e2 }), t3;
        }
        const r2 = "#text", n2 = Object.keys(t2)[0], s2 = t2[n2];
        return s2[r2] && (s2[n2] = s2[r2], delete s2[r2]), l(s2);
      }
      return {};
    }
  }
  class pe extends O {
    settings;
    buffer;
    constructor(e2) {
      super(), this.settings = e2;
    }
    write(e2, t2, r2 = "") {
      void 0 === this.buffer && (this.buffer = "");
      const n2 = o.of(e2);
      if (r2 && !r2.endsWith(".") && (r2 += "."), n2.isBlobSchema()) ("string" == typeof t2 || t2 instanceof Uint8Array) && (this.writeKey(r2), this.writeValue((this.serdeContext?.base64Encoder ?? N)(t2)));
      else if (n2.isBooleanSchema() || n2.isNumericSchema() || n2.isStringSchema()) null != t2 ? (this.writeKey(r2), this.writeValue(String(t2))) : n2.isIdempotencyToken() && (this.writeKey(r2), this.writeValue(A()));
      else if (n2.isBigIntegerSchema()) null != t2 && (this.writeKey(r2), this.writeValue(String(t2)));
      else if (n2.isBigDecimalSchema()) null != t2 && (this.writeKey(r2), this.writeValue(t2 instanceof w ? t2.string : String(t2)));
      else if (n2.isTimestampSchema()) {
        if (t2 instanceof Date) {
          this.writeKey(r2);
          switch (d(n2, this.settings)) {
            case 5:
              this.writeValue(t2.toISOString().replace(".000Z", "Z"));
              break;
            case 6:
              this.writeValue(C(t2));
              break;
            case 7:
              this.writeValue(String(t2.getTime() / 1e3));
          }
        }
      } else if (n2.isDocumentSchema()) Array.isArray(t2) ? this.write(79, t2, r2) : t2 instanceof Date ? this.write(4, t2, r2) : t2 instanceof Uint8Array ? this.write(21, t2, r2) : t2 && "object" == typeof t2 ? this.write(143, t2, r2) : (this.writeKey(r2), this.writeValue(String(t2)));
      else if (n2.isListSchema()) {
        if (Array.isArray(t2)) if (0 === t2.length) this.settings.serializeEmptyLists && (this.writeKey(r2), this.writeValue(""));
        else {
          const e3 = n2.getValueSchema(), s2 = this.settings.flattenLists || n2.getMergedTraits().xmlFlattened;
          let i2 = 1;
          for (const n3 of t2) {
            if (null == n3) continue;
            const t3 = e3.getMergedTraits(), o2 = this.getKey("member", t3.xmlName, t3.ec2QueryName), a2 = s2 ? `${r2}${i2}` : `${r2}${o2}.${i2}`;
            this.write(e3, n3, a2), ++i2;
          }
        }
      } else if (n2.isMapSchema()) {
        if (t2 && "object" == typeof t2) {
          const e3 = n2.getKeySchema(), s2 = n2.getValueSchema(), i2 = n2.getMergedTraits().xmlFlattened;
          let o2 = 1;
          for (const n3 in t2) {
            const a2 = t2[n3];
            if (null == a2) continue;
            const c2 = e3.getMergedTraits(), l2 = this.getKey("key", c2.xmlName, c2.ec2QueryName), u2 = i2 ? `${r2}${o2}.${l2}` : `${r2}entry.${o2}.${l2}`, d2 = s2.getMergedTraits(), h2 = this.getKey("value", d2.xmlName, d2.ec2QueryName), f2 = i2 ? `${r2}${o2}.${h2}` : `${r2}entry.${o2}.${h2}`;
            this.write(e3, n3, u2), this.write(s2, a2, f2), ++o2;
          }
        }
      } else if (n2.isStructSchema()) {
        if (t2 && "object" == typeof t2) {
          let e3 = false;
          for (const [s2, i2] of n2.structIterator()) {
            if (null == t2[s2] && !i2.isIdempotencyToken()) continue;
            const n3 = i2.getMergedTraits(), o2 = `${r2}${this.getKey(s2, n3.xmlName, n3.ec2QueryName, "struct")}`;
            this.write(i2, t2[s2], o2), e3 = true;
          }
          if (!e3 && n2.isUnionSchema()) {
            const { $unknown: e4 } = t2;
            if (Array.isArray(e4)) {
              const [t3, n3] = e4, s2 = `${r2}${t3}`;
              this.write(15, n3, s2);
            }
          }
        }
      } else if (!n2.isUnitSchema()) throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${n2.getName(true)}`);
    }
    flush() {
      if (void 0 === this.buffer) throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      const e2 = this.buffer;
      return delete this.buffer, e2;
    }
    getKey(e2, t2, r2, n2) {
      const { ec2: s2, capitalizeKeys: i2 } = this.settings;
      if (s2 && r2) return r2;
      const o2 = t2 ?? e2;
      return i2 && "struct" === n2 ? o2[0].toUpperCase() + o2.slice(1) : o2;
    }
    writeKey(e2) {
      e2.endsWith(".") && (e2 = e2.slice(0, e2.length - 1)), this.buffer += `&${y(e2)}=`;
    }
    writeValue(e2) {
      this.buffer += y(e2);
    }
  }
  class ge extends h {
    options;
    serializer;
    deserializer;
    mixin = new k();
    constructor(e2) {
      super({ defaultNamespace: e2.defaultNamespace, errorTypeRegistries: e2.errorTypeRegistries }), this.options = e2;
      const t2 = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: false, xmlNamespace: e2.xmlNamespace, serviceNamespace: e2.defaultNamespace, serializeEmptyLists: true };
      this.serializer = new pe(t2), this.deserializer = new fe(t2);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(e2) {
      this.serializer.setSerdeContext(e2), this.deserializer.setSerdeContext(e2);
    }
    getPayloadCodec() {
      throw new Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2);
      n2.path.endsWith("/") || (n2.path += "/"), n2.headers["content-type"] = "application/x-www-form-urlencoded", "unit" !== a(e2.input) && n2.body || (n2.body = "");
      const s2 = e2.name.split("#")[1] ?? e2.name;
      return n2.body = `Action=${s2}&Version=${this.options.version}` + n2.body, n2.body.endsWith("&") && (n2.body = n2.body.slice(-1)), n2;
    }
    async deserializeResponse(e2, t2, r2) {
      const n2 = this.deserializer, s2 = o.of(e2.output), i2 = {};
      if (r2.statusCode >= 300) {
        const s3 = await u(r2.body, t2);
        s3.byteLength > 0 && Object.assign(i2, await n2.read(15, s3)), await this.handleError(e2, t2, r2, i2, this.deserializeMetadata(r2));
      }
      for (const e3 in r2.headers) {
        const t3 = r2.headers[e3];
        delete r2.headers[e3], r2.headers[e3.toLowerCase()] = t3;
      }
      const a2 = e2.name.split("#")[1] ?? e2.name, c2 = s2.isStructSchema() && this.useNestedResult() ? a2 + "Result" : void 0, l2 = await u(r2.body, t2);
      return l2.byteLength > 0 && Object.assign(i2, await n2.read(s2, l2, c2)), i2.$metadata = this.deserializeMetadata(r2), i2;
    }
    useNestedResult() {
      return true;
    }
    async handleError(e2, t2, r2, n2, s2) {
      const i2 = this.loadQueryErrorCode(r2, n2) ?? "Unknown";
      this.mixin.compose(this.compositeErrorRegistry, i2, this.options.defaultNamespace);
      const a2 = this.loadQueryError(n2) ?? {}, c2 = this.loadQueryErrorMessage(n2);
      a2.message = c2, a2.Error = { Type: a2.Type, Code: a2.Code, Message: c2 };
      const { errorSchema: l2, errorMetadata: u2 } = await this.mixin.getErrorSchemaOrThrowBaseException(i2, this.options.defaultNamespace, r2, a2, s2, this.mixin.findQueryCompatibleError), d2 = o.of(l2), h2 = new (this.compositeErrorRegistry.getErrorCtor(l2) ?? Error)({}), f2 = { Type: a2.Error.Type, Code: a2.Error.Code, Error: a2.Error };
      for (const [e3, t3] of d2.structIterator()) {
        const r3 = t3.getMergedTraits().xmlName ?? e3, s3 = a2[r3] ?? n2[r3];
        f2[e3] = this.deserializer.readSchema(t3, s3);
      }
      throw this.mixin.decorateServiceException(Object.assign(h2, u2, { $fault: d2.getMergedTraits().error, message: c2 }, f2), n2);
    }
    loadQueryErrorCode(e2, t2) {
      const r2 = (t2.Errors?.[0]?.Error ?? t2.Errors?.Error ?? t2.Error)?.Code;
      return void 0 !== r2 ? r2 : 404 == e2.statusCode ? "NotFound" : void 0;
    }
    loadQueryError(e2) {
      return e2.Errors?.[0]?.Error ?? e2.Errors?.Error ?? e2.Error;
    }
    loadQueryErrorMessage(e2) {
      const t2 = this.loadQueryError(e2);
      return t2?.message ?? t2?.Message ?? e2.message ?? e2.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  const me = (e2, t2) => z(e2, t2).then((e3) => {
    if (e3.length) {
      let t3;
      try {
        t3 = R(e3);
      } catch (t4) {
        throw t4 && "object" == typeof t4 && Object.defineProperty(t4, "$responseBodyText", { value: e3 }), t4;
      }
      const r2 = "#text", n2 = Object.keys(t3)[0], s2 = t3[n2];
      return s2[r2] && (s2[n2] = s2[r2], delete s2[r2]), l(s2);
    }
    return {};
  }), ye = (e2, t2) => void 0 !== t2?.Error?.Code ? t2.Error.Code : void 0 !== t2?.Code ? t2.Code : 404 == e2.statusCode ? "NotFound" : void 0;
  class we extends O {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e2) {
      super(), this.settings = e2;
    }
    write(e2, t2) {
      const r2 = o.of(e2);
      if (r2.isStringSchema() && "string" == typeof t2) this.stringBuffer = t2;
      else if (r2.isBlobSchema()) this.byteBuffer = "byteLength" in t2 ? t2 : (this.serdeContext?.base64Decoder ?? b)(t2);
      else {
        this.buffer = this.writeStruct(r2, t2, void 0);
        const e3 = r2.getMergedTraits();
        e3.httpPayload && !e3.xmlName && this.buffer.withName(r2.getName());
      }
    }
    flush() {
      if (void 0 !== this.byteBuffer) {
        const e3 = this.byteBuffer;
        return delete this.byteBuffer, e3;
      }
      if (void 0 !== this.stringBuffer) {
        const e3 = this.stringBuffer;
        return delete this.stringBuffer, e3;
      }
      const e2 = this.buffer;
      return this.settings.xmlNamespace && (e2?.attributes?.xmlns || e2.addAttribute("xmlns", this.settings.xmlNamespace)), delete this.buffer, e2.toString();
    }
    writeStruct(e2, t2, r2) {
      const n2 = e2.getMergedTraits(), s2 = e2.isMemberSchema() && !n2.httpPayload ? e2.getMemberTraits().xmlName ?? e2.getMemberName() : n2.xmlName ?? e2.getName();
      if (!s2 || !e2.isStructSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e2.getName(true)}.`);
      const i2 = I.of(s2), [o2, a2] = this.getXmlnsAttribute(e2, r2);
      for (const [r3, n3] of e2.structIterator()) {
        const e3 = t2[r3];
        if (null != e3 || n3.isIdempotencyToken()) {
          if (n3.getMergedTraits().xmlAttribute) {
            i2.addAttribute(n3.getMergedTraits().xmlName ?? r3, this.writeSimple(n3, e3));
            continue;
          }
          if (n3.isListSchema()) this.writeList(n3, e3, i2, a2);
          else if (n3.isMapSchema()) this.writeMap(n3, e3, i2, a2);
          else if (n3.isStructSchema()) i2.addChildNode(this.writeStruct(n3, e3, a2));
          else {
            const t3 = I.of(n3.getMergedTraits().xmlName ?? n3.getMemberName());
            this.writeSimpleInto(n3, e3, t3, a2), i2.addChildNode(t3);
          }
        }
      }
      const { $unknown: c2 } = t2;
      if (c2 && e2.isUnionSchema() && Array.isArray(c2) && 1 === Object.keys(t2).length) {
        const [e3, r3] = c2, n3 = I.of(e3);
        if ("string" != typeof r3) {
          if (!(t2 instanceof I || t2 instanceof D)) throw new Error("@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.");
          i2.addChildNode(t2);
        }
        this.writeSimpleInto(0, r3, n3, a2), i2.addChildNode(n3);
      }
      return a2 && i2.addAttribute(o2, a2), i2;
    }
    writeList(e2, t2, r2, n2) {
      if (!e2.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e2.getName(true)}`);
      const s2 = e2.getMergedTraits(), i2 = e2.getValueSchema(), o2 = i2.getMergedTraits(), a2 = !!o2.sparse, c2 = !!s2.xmlFlattened, [l2, u2] = this.getXmlnsAttribute(e2, n2), d2 = (t3, r3) => {
        if (i2.isListSchema()) this.writeList(i2, Array.isArray(r3) ? r3 : [r3], t3, u2);
        else if (i2.isMapSchema()) this.writeMap(i2, r3, t3, u2);
        else if (i2.isStructSchema()) {
          const n3 = this.writeStruct(i2, r3, u2);
          t3.addChildNode(n3.withName(c2 ? s2.xmlName ?? e2.getMemberName() : o2.xmlName ?? "member"));
        } else {
          const n3 = I.of(c2 ? s2.xmlName ?? e2.getMemberName() : o2.xmlName ?? "member");
          this.writeSimpleInto(i2, r3, n3, u2), t3.addChildNode(n3);
        }
      };
      if (c2) for (const e3 of t2) (a2 || null != e3) && d2(r2, e3);
      else {
        const n3 = I.of(s2.xmlName ?? e2.getMemberName());
        u2 && n3.addAttribute(l2, u2);
        for (const e3 of t2) (a2 || null != e3) && d2(n3, e3);
        r2.addChildNode(n3);
      }
    }
    writeMap(e2, t2, r2, n2, s2 = false) {
      if (!e2.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e2.getName(true)}`);
      const i2 = e2.getMergedTraits(), o2 = e2.getKeySchema(), a2 = o2.getMergedTraits().xmlName ?? "key", c2 = e2.getValueSchema(), l2 = c2.getMergedTraits(), u2 = l2.xmlName ?? "value", d2 = !!l2.sparse, h2 = !!i2.xmlFlattened, [f2, p2] = this.getXmlnsAttribute(e2, n2), g2 = (e3, t3, r3) => {
        const n3 = I.of(a2, t3), [s3, i3] = this.getXmlnsAttribute(o2, p2);
        i3 && n3.addAttribute(s3, i3), e3.addChildNode(n3);
        let l3 = I.of(u2);
        c2.isListSchema() ? this.writeList(c2, r3, l3, p2) : c2.isMapSchema() ? this.writeMap(c2, r3, l3, p2, true) : c2.isStructSchema() ? l3 = this.writeStruct(c2, r3, p2) : this.writeSimpleInto(c2, r3, l3, p2), e3.addChildNode(l3);
      };
      if (h2) for (const n3 in t2) {
        const s3 = t2[n3];
        if (d2 || null != s3) {
          const t3 = I.of(i2.xmlName ?? e2.getMemberName());
          g2(t3, n3, s3), r2.addChildNode(t3);
        }
      }
      else {
        let n3;
        s2 || (n3 = I.of(i2.xmlName ?? e2.getMemberName()), p2 && n3.addAttribute(f2, p2), r2.addChildNode(n3));
        for (const e3 in t2) {
          const i3 = t2[e3];
          if (d2 || null != i3) {
            const t3 = I.of("entry");
            g2(t3, e3, i3), (s2 ? r2 : n3).addChildNode(t3);
          }
        }
      }
    }
    writeSimple(e2, t2) {
      if (null === t2) throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      const r2 = o.of(e2);
      let n2 = null;
      if (t2 && "object" == typeof t2) if (r2.isBlobSchema()) n2 = (this.serdeContext?.base64Encoder ?? N)(t2);
      else {
        if (!(r2.isTimestampSchema() && t2 instanceof Date)) {
          if (r2.isBigDecimalSchema() && t2) return t2 instanceof w ? t2.string : String(t2);
          throw r2.isMapSchema() || r2.isListSchema() ? new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.") : new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r2.getName(true)}`);
        }
        switch (d(r2, this.settings)) {
          case 5:
            n2 = t2.toISOString().replace(".000Z", "Z");
            break;
          case 6:
            n2 = C(t2);
            break;
          case 7:
            n2 = String(t2.getTime() / 1e3);
            break;
          default:
            console.warn("Missing timestamp format, using http date", t2), n2 = C(t2);
        }
      }
      if ((r2.isBooleanSchema() || r2.isNumericSchema() || r2.isBigIntegerSchema() || r2.isBigDecimalSchema()) && (n2 = String(t2)), r2.isStringSchema() && (n2 = void 0 === t2 && r2.isIdempotencyToken() ? A() : String(t2)), null === n2) throw new Error(`Unhandled schema-value pair ${r2.getName(true)}=${t2}`);
      return n2;
    }
    writeSimpleInto(e2, t2, r2, n2) {
      const s2 = this.writeSimple(e2, t2), i2 = o.of(e2), a2 = new D(s2), [c2, l2] = this.getXmlnsAttribute(i2, n2);
      l2 && r2.addAttribute(c2, l2), r2.addChildNode(a2);
    }
    getXmlnsAttribute(e2, t2) {
      const r2 = e2.getMergedTraits(), [n2, s2] = r2.xmlNamespace ?? [];
      return s2 && s2 !== t2 ? [n2 ? `xmlns:${n2}` : "xmlns", s2] : [void 0, void 0];
    }
  }
  class Se extends O {
    settings;
    constructor(e2) {
      super(), this.settings = e2;
    }
    createSerializer() {
      const e2 = new we(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
    createDeserializer() {
      const e2 = new fe(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
  }
  t.AwsEc2QueryProtocol = class extends ge {
    options;
    constructor(e2) {
      super(e2), this.options = e2;
      Object.assign(this.serializer.settings, { capitalizeKeys: true, flattenLists: true, serializeEmptyLists: false, ec2: true });
    }
    getShapeId() {
      return "aws.protocols#ec2Query";
    }
    useNestedResult() {
      return false;
    }
  }, t.AwsJson1_0Protocol = class extends ce {
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2, serviceTarget: r2, awsQueryCompatible: n2, jsonCodec: s2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2, serviceTarget: r2, awsQueryCompatible: n2, jsonCodec: s2 });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }, t.AwsJson1_1Protocol = class extends ce {
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2, serviceTarget: r2, awsQueryCompatible: n2, jsonCodec: s2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2, serviceTarget: r2, awsQueryCompatible: n2, jsonCodec: s2 });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }, t.AwsJsonRpcProtocol = ce, t.AwsQueryProtocol = ge, t.AwsRestJsonProtocol = class extends f {
    serializer;
    deserializer;
    codec;
    mixin = new k();
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2, jsonCodec: r2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2 });
      const n2 = { timestampFormat: { useTrait: true, default: 7 }, httpBindings: true, jsonName: true };
      this.codec = r2 ?? new ae(n2), this.serializer = new p(this.codec.createSerializer(), n2), this.deserializer = new g(this.codec.createDeserializer(), n2);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(e2) {
      this.codec.setSerdeContext(e2), super.setSerdeContext(e2);
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2), s2 = o.of(e2.input);
      if (!n2.headers["content-type"]) {
        const e3 = this.mixin.resolveRestContentType(this.getDefaultContentType(), s2);
        e3 && (n2.headers["content-type"] = e3);
      }
      return null == n2.body && n2.headers["content-type"] === this.getDefaultContentType() && (n2.body = "{}"), n2;
    }
    async deserializeResponse(e2, t2, r2) {
      const n2 = await super.deserializeResponse(e2, t2, r2), s2 = o.of(e2.output);
      for (const [e3, t3] of s2.structIterator()) t3.getMemberTraits().httpPayload && !(e3 in n2) && (n2[e3] = null);
      return n2;
    }
    async handleError(e2, t2, r2, n2, s2) {
      const i2 = W(r2, n2) ?? "Unknown";
      this.mixin.compose(this.compositeErrorRegistry, i2, this.options.defaultNamespace);
      const { errorSchema: a2, errorMetadata: c2 } = await this.mixin.getErrorSchemaOrThrowBaseException(i2, this.options.defaultNamespace, r2, n2, s2), l2 = o.of(a2), u2 = n2.message ?? n2.Message ?? "UnknownError", d2 = new (this.compositeErrorRegistry.getErrorCtor(a2) ?? Error)({});
      await this.deserializeHttpMessage(a2, t2, r2, n2);
      const h2 = {}, f2 = this.codec.createDeserializer();
      for (const [e3, t3] of l2.structIterator()) {
        const r3 = t3.getMergedTraits().jsonName ?? e3;
        h2[e3] = f2.readObject(t3, n2[r3]);
      }
      throw this.mixin.decorateServiceException(Object.assign(d2, c2, { $fault: l2.getMergedTraits().error, message: u2 }, h2), n2);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }, t.AwsRestXmlProtocol = class extends f {
    codec;
    serializer;
    deserializer;
    mixin = new k();
    constructor(e2) {
      super(e2);
      const t2 = { timestampFormat: { useTrait: true, default: 5 }, httpBindings: true, xmlNamespace: e2.xmlNamespace, serviceNamespace: e2.defaultNamespace };
      this.codec = new Se(t2), this.serializer = new p(this.codec.createSerializer(), t2), this.deserializer = new g(this.codec.createDeserializer(), t2);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2), s2 = o.of(e2.input);
      if (!n2.headers["content-type"]) {
        const e3 = this.mixin.resolveRestContentType(this.getDefaultContentType(), s2);
        e3 && (n2.headers["content-type"] = e3);
      }
      return "string" != typeof n2.body || n2.headers["content-type"] !== this.getDefaultContentType() || n2.body.startsWith("<?xml ") || this.hasUnstructuredPayloadBinding(s2) || (n2.body = '<?xml version="1.0" encoding="UTF-8"?>' + n2.body), n2;
    }
    async deserializeResponse(e2, t2, r2) {
      return super.deserializeResponse(e2, t2, r2);
    }
    async handleError(e2, t2, r2, n2, s2) {
      const i2 = ye(r2, n2) ?? "Unknown";
      if (this.mixin.compose(this.compositeErrorRegistry, i2, this.options.defaultNamespace), n2.Error && "object" == typeof n2.Error) for (const e3 of Object.keys(n2.Error)) n2[e3] = n2.Error[e3], "message" === e3.toLowerCase() && (n2.message = n2.Error[e3]);
      n2.RequestId && !s2.requestId && (s2.requestId = n2.RequestId);
      const { errorSchema: a2, errorMetadata: c2 } = await this.mixin.getErrorSchemaOrThrowBaseException(i2, this.options.defaultNamespace, r2, n2, s2), l2 = o.of(a2), u2 = n2.Error?.message ?? n2.Error?.Message ?? n2.message ?? n2.Message ?? "UnknownError", d2 = new (this.compositeErrorRegistry.getErrorCtor(a2) ?? Error)({});
      await this.deserializeHttpMessage(a2, t2, r2, n2);
      const h2 = {}, f2 = this.codec.createDeserializer();
      for (const [e3, t3] of l2.structIterator()) {
        const r3 = t3.getMergedTraits().xmlName ?? e3, s3 = n2.Error?.[r3] ?? n2[r3];
        h2[e3] = f2.readSchema(t3, s3);
      }
      throw this.mixin.decorateServiceException(Object.assign(d2, c2, { $fault: l2.getMergedTraits().error, message: u2 }, h2), n2);
    }
    getDefaultContentType() {
      return "application/xml";
    }
    hasUnstructuredPayloadBinding(e2) {
      for (const [, t2] of e2.structIterator()) if (t2.getMergedTraits().httpPayload) return !(t2.isStructSchema() || t2.isMapSchema() || t2.isListSchema());
      return false;
    }
  }, t.AwsSmithyRpcV2CborProtocol = class extends n {
    awsQueryCompatible;
    mixin;
    constructor({ defaultNamespace: e2, errorTypeRegistries: t2, awsQueryCompatible: r2 }) {
      super({ defaultNamespace: e2, errorTypeRegistries: t2 }), this.awsQueryCompatible = !!r2, this.mixin = new k(this.awsQueryCompatible);
    }
    async serializeRequest(e2, t2, r2) {
      const n2 = await super.serializeRequest(e2, t2, r2);
      return this.awsQueryCompatible && (n2.headers["x-amzn-query-mode"] = "true"), n2;
    }
    async handleError(e2, t2, r2, n2, i2) {
      this.awsQueryCompatible && this.mixin.setQueryCompatError(n2, r2);
      const a2 = (() => {
        const e3 = r2.headers["x-amzn-query-error"];
        return e3 && this.awsQueryCompatible ? e3.split(";")[0] : s(r2, n2) ?? "Unknown";
      })();
      this.mixin.compose(this.compositeErrorRegistry, a2, this.options.defaultNamespace);
      const { errorSchema: c2, errorMetadata: l2 } = await this.mixin.getErrorSchemaOrThrowBaseException(a2, this.options.defaultNamespace, r2, n2, i2, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0), u2 = o.of(c2), d2 = n2.message ?? n2.Message ?? "UnknownError", h2 = new (this.compositeErrorRegistry.getErrorCtor(c2) ?? Error)({}), f2 = {};
      for (const [e3, t3] of u2.structIterator()) null != n2[e3] && (f2[e3] = this.deserializer.readValue(t3, n2[e3]));
      throw this.awsQueryCompatible && this.mixin.queryCompatOutput(n2, f2), this.mixin.decorateServiceException(Object.assign(h2, l2, { $fault: u2.getMergedTraits().error, message: d2 }, f2), n2);
    }
  }, t.JsonCodec = class extends O {
    settings;
    constructor(e2) {
      super(), this.settings = e2;
    }
    createSerializer() {
      const e2 = new he(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
    createDeserializer() {
      const e2 = new le(this.settings);
      return e2.setSerdeContext(this.serdeContext), e2;
    }
  }, t.JsonCodec2 = ae, t.JsonShapeDeserializer = le, t.JsonShapeDeserializer2 = K, t.JsonShapeSerializer = he, t.JsonShapeSerializer2 = oe, t.QueryShapeSerializer = pe, t.XmlCodec = Se, t.XmlShapeDeserializer = fe, t.XmlShapeSerializer = we, t._toBool = (e2) => {
    if (null == e2) return e2;
    if ("string" == typeof e2) {
      const t2 = e2.toLowerCase();
      if ("" !== e2 && "false" !== t2 && "true" !== t2) {
        const t3 = new Error(`Received string "${e2}" where a boolean was expected.`);
        t3.name = "Warning", console.warn(t3);
      }
      return "" !== e2 && "false" !== t2;
    }
    return e2;
  }, t._toNum = (e2) => {
    if (null == e2) return e2;
    if ("string" == typeof e2) {
      const t2 = Number(e2);
      if (t2.toString() !== e2) {
        const t3 = new Error(`Received string "${e2}" where a number was expected.`);
        return t3.name = "Warning", console.warn(t3), e2;
      }
      return t2;
    }
    return e2;
  }, t._toStr = (e2) => {
    if (null == e2) return e2;
    if ("number" == typeof e2 || "bigint" == typeof e2) {
      const t2 = new Error(`Received number ${e2} where a string was expected.`);
      return t2.name = "Warning", console.warn(t2), String(e2);
    }
    if ("boolean" == typeof e2) {
      const t2 = new Error(`Received boolean ${e2} where a string was expected.`);
      return t2.name = "Warning", console.warn(t2), String(e2);
    }
    return e2;
  }, t.awsExpectUnion = (e2) => {
    if (null != e2) return "object" == typeof e2 && "__type" in e2 && delete e2.__type, _(e2);
  }, t.loadJsonRpcErrorCode = G, t.loadRestJsonErrorCode = W, t.loadRestXmlErrorCode = ye, t.parseJsonBody = V, t.parseJsonErrorBody = async (e2, t2) => {
    const r2 = await V(e2, t2);
    return r2.message = r2.message ?? r2.Message, r2;
  }, t.parseXmlBody = me, t.parseXmlErrorBody = async (e2, t2) => {
    const r2 = await me(e2, t2);
    return r2.Error && (r2.Error.message = r2.Error.message ?? r2.Error.Message), r2;
  };
}, 98175: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { ChecksumStream: () => q.ChecksumStream, Client: () => c, Command: () => p, Hash: () => q.Hash, LazyJsonString: () => q.LazyJsonString, NoOpLogger: () => M.N, NumericValue: () => q.NumericValue, SENSITIVE_STRING: () => m, ServiceException: () => w, Uint8ArrayBlobAdapter: () => q.Uint8ArrayBlobAdapter, _json: () => H, _parseEpochTimestamp: () => q._parseEpochTimestamp, _parseRfc3339DateTimeWithOffset: () => q._parseRfc3339DateTimeWithOffset, _parseRfc7231DateTime: () => q._parseRfc7231DateTime, calculateBodyLength: () => q.calculateBodyLength, collectBody: () => l.collectBody, concatBytes: () => q.concatBytes, convertMap: () => $, copyDocumentWithTransform: () => q.copyDocumentWithTransform, createAggregatedClient: () => y, createBufferedReadable: () => q.createBufferedReadable, createChecksumStream: () => q.createChecksumStream, dateToUtcString: () => q.dateToUtcString, decorateServiceException: () => S, deserializerMiddleware: () => q.deserializerMiddleware, deserializerMiddlewareOption: () => q.deserializerMiddlewareOption, emitWarningIfUnsupportedVersion: () => A, expectBoolean: () => q.expectBoolean, expectByte: () => q.expectByte, expectFloat32: () => q.expectFloat32, expectInt: () => q.expectInt, expectInt32: () => q.expectInt32, expectLong: () => q.expectLong, expectNonNull: () => q.expectNonNull, expectNumber: () => q.expectNumber, expectObject: () => q.expectObject, expectShort: () => q.expectShort, expectString: () => q.expectString, expectUnion: () => q.expectUnion, extendedEncodeURIComponent: () => l.extendedEncodeURIComponent, fromArrayBuffer: () => q.fromArrayBuffer, fromBase64: () => q.fromBase64, fromHex: () => q.fromHex, fromString: () => q.fromString, fromUtf8: () => q.fromUtf8, generateIdempotencyToken: () => q.generateIdempotencyToken, getArrayIfSingleItem: () => D, getAwsChunkedEncodingStream: () => q.getAwsChunkedEncodingStream, getDefaultClientConfiguration: () => R, getDefaultExtensionConfiguration: () => _, getSerdePlugin: () => q.getSerdePlugin, getValueFromTextNode: () => k, handleFloat: () => q.handleFloat, hasOwn: () => q.hasOwn, headStream: () => q.headStream, isArrayBuffer: () => q.isArrayBuffer, isBlob: () => q.isBlob, isReadableStream: () => q.isReadableStream, isSerializableHeaderValue: () => O, limitedParseDouble: () => q.limitedParseDouble, limitedParseFloat: () => q.limitedParseFloat, limitedParseFloat32: () => q.limitedParseFloat32, loadConfigsForDefaultMode: () => x, logger: () => q.logger, map: () => P, nv: () => q.nv, parseBoolean: () => q.parseBoolean, parseEpochTimestamp: () => q.parseEpochTimestamp, parseRfc3339DateTime: () => q.parseRfc3339DateTime, parseRfc3339DateTimeWithOffset: () => q.parseRfc3339DateTimeWithOffset, parseRfc7231DateTime: () => q.parseRfc7231DateTime, quoteHeader: () => q.quoteHeader, resolveDefaultRuntimeConfig: () => I, resolvedPath: () => l.resolvedPath, sdkStreamMixin: () => q.sdkStreamMixin, serializeDateTime: () => V, serializeFloat: () => z, serializerMiddleware: () => q.serializerMiddleware, serializerMiddlewareOption: () => q.serializerMiddlewareOption, splitEvery: () => q.splitEvery, splitHeader: () => q.splitHeader, splitStream: () => q.splitStream, streamCollector: () => q.streamCollector, strictParseByte: () => q.strictParseByte, strictParseDouble: () => q.strictParseDouble, strictParseFloat: () => q.strictParseFloat, strictParseFloat32: () => q.strictParseFloat32, strictParseInt: () => q.strictParseInt, strictParseInt32: () => q.strictParseInt32, strictParseLong: () => q.strictParseLong, strictParseShort: () => q.strictParseShort, take: () => j, throwDefaultError: () => b, toBase64: () => q.toBase64, toHex: () => q.toHex, toUint8Array: () => q.toUint8Array, toUtf8: () => q.toUtf8, v4: () => q.v4, withBaseException: () => E });
  const n = (e2, t2) => {
    const r2 = [];
    if (e2 && r2.push(e2), t2) for (const e3 of t2) r2.push(e3);
    return r2;
  }, s = (e2, t2) => `${e2 || "anonymous"}${t2 && t2.length > 0 ? ` (a.k.a. ${t2.join(",")})` : ""}`, i = () => {
    let e2 = [], t2 = [], r2 = false;
    const c2 = /* @__PURE__ */ new Set(), l2 = (r3) => (e2.forEach((e3) => {
      r3.add(e3.middleware, { ...e3 });
    }), t2.forEach((e3) => {
      r3.addRelativeTo(e3.middleware, { ...e3 });
    }), r3.identifyOnResolve?.(h2.identifyOnResolve()), r3), u2 = (e3) => {
      const t3 = [];
      return e3.before.forEach((e4) => {
        0 === e4.before.length && 0 === e4.after.length ? t3.push(e4) : t3.push(...u2(e4));
      }), t3.push(e3), e3.after.reverse().forEach((e4) => {
        0 === e4.before.length && 0 === e4.after.length ? t3.push(e4) : t3.push(...u2(e4));
      }), t3;
    }, d2 = (r3 = false) => {
      const i2 = [], c3 = [], l3 = {};
      e2.forEach((e3) => {
        const t3 = { ...e3, before: [], after: [] };
        for (const e4 of n(t3.name, t3.aliases)) l3[e4] = t3;
        i2.push(t3);
      }), t2.forEach((e3) => {
        const t3 = { ...e3, before: [], after: [] };
        for (const e4 of n(t3.name, t3.aliases)) l3[e4] = t3;
        c3.push(t3);
      }), c3.forEach((e3) => {
        if (e3.toMiddleware) {
          const t3 = l3[e3.toMiddleware];
          if (void 0 === t3) {
            if (r3) return;
            throw new Error(`${e3.toMiddleware} is not found when adding ${s(e3.name, e3.aliases)} middleware ${e3.relation} ${e3.toMiddleware}`);
          }
          "after" === e3.relation && t3.after.push(e3), "before" === e3.relation && t3.before.push(e3);
        }
      });
      var d3;
      return (d3 = i2, d3.sort((e3, t3) => o[t3.step] - o[e3.step] || a[t3.priority || "normal"] - a[e3.priority || "normal"])).map(u2).reduce((e3, t3) => (e3.push(...t3), e3), []);
    }, h2 = { add: (t3, r3 = {}) => {
      const { name: i2, override: o2, aliases: a2 } = r3, l3 = { step: "initialize", priority: "normal", middleware: t3, ...r3 }, u3 = n(i2, a2);
      if (u3.length > 0) {
        if (u3.some((e3) => c2.has(e3))) {
          if (!o2) throw new Error(`Duplicate middleware name '${s(i2, a2)}'`);
          for (const t4 of u3) {
            const r4 = e2.findIndex((e3) => e3.name === t4 || e3.aliases?.some((e4) => e4 === t4));
            if (-1 === r4) continue;
            const n2 = e2[r4];
            if (n2.step !== l3.step || l3.priority !== n2.priority) throw new Error(`"${s(n2.name, n2.aliases)}" middleware with ${n2.priority} priority in ${n2.step} step cannot be overridden by "${s(i2, a2)}" middleware with ${l3.priority} priority in ${l3.step} step.`);
            e2.splice(r4, 1);
          }
        }
        for (const e3 of u3) c2.add(e3);
      }
      e2.push(l3);
    }, addRelativeTo: (e3, r3) => {
      const { name: i2, override: o2, aliases: a2 } = r3, l3 = { middleware: e3, ...r3 }, u3 = n(i2, a2);
      if (u3.length > 0) {
        if (u3.some((e4) => c2.has(e4))) {
          if (!o2) throw new Error(`Duplicate middleware name '${s(i2, a2)}'`);
          for (const e4 of u3) {
            const r4 = t2.findIndex((t3) => t3.name === e4 || t3.aliases?.some((t4) => t4 === e4));
            if (-1 === r4) continue;
            const n2 = t2[r4];
            if (n2.toMiddleware !== l3.toMiddleware || n2.relation !== l3.relation) throw new Error(`"${s(n2.name, n2.aliases)}" middleware ${n2.relation} "${n2.toMiddleware}" middleware cannot be overridden by "${s(i2, a2)}" middleware ${l3.relation} "${l3.toMiddleware}" middleware.`);
            t2.splice(r4, 1);
          }
        }
        for (const e4 of u3) c2.add(e4);
      }
      t2.push(l3);
    }, clone: () => l2(i()), use: (e3) => {
      e3.applyToStack(h2);
    }, remove: (r3) => "string" == typeof r3 ? ((r4) => {
      let s2 = false;
      const i2 = (e3) => {
        const t3 = n(e3.name, e3.aliases);
        if (t3.includes(r4)) {
          s2 = true;
          for (const e4 of t3) c2.delete(e4);
          return false;
        }
        return true;
      };
      return e2 = e2.filter(i2), t2 = t2.filter(i2), s2;
    })(r3) : ((r4) => {
      let s2 = false;
      const i2 = (e3) => {
        if (e3.middleware === r4) {
          s2 = true;
          for (const t3 of n(e3.name, e3.aliases)) c2.delete(t3);
          return false;
        }
        return true;
      };
      return e2 = e2.filter(i2), t2 = t2.filter(i2), s2;
    })(r3), removeByTag: (r3) => {
      let s2 = false;
      const i2 = (e3) => {
        const { tags: t3, name: i3, aliases: o2 } = e3;
        if (t3 && t3.includes(r3)) {
          const e4 = n(i3, o2);
          for (const t4 of e4) c2.delete(t4);
          return s2 = true, false;
        }
        return true;
      };
      return e2 = e2.filter(i2), t2 = t2.filter(i2), s2;
    }, concat: (e3) => {
      const t3 = l2(i());
      return t3.use(e3), t3.identifyOnResolve(r2 || t3.identifyOnResolve() || (e3.identifyOnResolve?.() ?? false)), t3;
    }, applyToStack: l2, identify: () => d2(true).map((e3) => {
      const t3 = e3.step ?? e3.relation + " " + e3.toMiddleware;
      return s(e3.name, e3.aliases) + " - " + t3;
    }), identifyOnResolve: (e3) => ("boolean" == typeof e3 && (r2 = e3), r2), resolve: (e3, t3) => {
      for (const r3 of d2().map((e4) => e4.middleware).reverse()) e3 = r3(e3, t3);
      return r2 && console.log(h2.identify()), e3;
    } };
    return h2;
  }, o = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, a = { high: 3, normal: 2, low: 1 };
  class c {
    config;
    middlewareStack = i();
    initConfig;
    handlers;
    constructor(e2) {
      this.config = e2;
      const { protocol: t2, protocolSettings: r2 } = e2;
      r2 && "function" == typeof t2 && (e2.protocol = new t2(r2));
    }
    send(e2, t2, r2) {
      const n2 = "function" != typeof t2 ? t2 : void 0, s2 = "function" == typeof t2 ? t2 : r2;
      let i2;
      if (void 0 === n2 && true === this.config.cacheMiddleware) {
        this.handlers || (this.handlers = /* @__PURE__ */ new WeakMap());
        const t3 = this.handlers;
        t3.has(e2.constructor) ? i2 = t3.get(e2.constructor) : (i2 = e2.resolveMiddleware(this.middlewareStack, this.config, n2), t3.set(e2.constructor, i2));
      } else delete this.handlers, i2 = e2.resolveMiddleware(this.middlewareStack, this.config, n2);
      if (!s2) return i2(e2).then((e3) => e3.output);
      i2(e2).then((e3) => s2(null, e3.output), (e3) => s2(e3)).catch(() => {
      });
    }
    destroy() {
      this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
  }
  var l = r(73931), u = r(85264), d = r(93353);
  const h = "***SensitiveInformation***";
  function f(e2, t2) {
    if (null == t2) return t2;
    const r2 = d.NormalizedSchema.of(e2);
    if (r2.getMergedTraits().sensitive) return h;
    if (r2.isListSchema()) {
      if (!!r2.getValueSchema().getMergedTraits().sensitive) return h;
    } else if (r2.isMapSchema()) {
      if (!!r2.getKeySchema().getMergedTraits().sensitive || !!r2.getValueSchema().getMergedTraits().sensitive) return h;
    } else if (r2.isStructSchema() && "object" == typeof t2) {
      const e3 = t2, n2 = {};
      for (const [t3, s2] of r2.structIterator()) null != e3[t3] && (n2[t3] = f(s2, e3[t3]));
      return n2;
    }
    return t2;
  }
  class p {
    middlewareStack = i();
    schema;
    static classBuilder() {
      return new g();
    }
    resolveMiddlewareWithContext(e2, t2, r2, { middlewareFn: n2, clientName: s2, commandName: i2, inputFilterSensitiveLog: o2, outputFilterSensitiveLog: a2, smithyContext: c2, additionalContext: l2, CommandCtor: d2 }) {
      for (const s3 of n2.bind(this)(d2, e2, t2, r2)) this.middlewareStack.use(s3);
      const h2 = e2.concat(this.middlewareStack), { logger: f2 } = t2, p2 = { logger: f2, clientName: s2, commandName: i2, inputFilterSensitiveLog: o2, outputFilterSensitiveLog: a2, [u.V]: { commandInstance: this, ...c2 }, ...l2 }, { requestHandler: g2 } = t2;
      let m2 = r2 ?? {};
      return c2.eventStream && (m2 = { isEventStream: true, ...m2 }), h2.resolve((e3) => g2.handle(e3.request, m2), p2);
    }
  }
  class g {
    _init = () => {
    };
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(e2) {
      this._init = e2;
    }
    ep(e2) {
      return this._ep = e2, this;
    }
    m(e2) {
      return this._middlewareFn = e2, this;
    }
    s(e2, t2, r2 = {}) {
      return this._smithyContext = { service: e2, operation: t2, ...r2 }, this;
    }
    c(e2 = {}) {
      return this._additionalContext = e2, this;
    }
    n(e2, t2) {
      return this._clientName = e2, this._commandName = t2, this;
    }
    f(e2 = (e3) => e3, t2 = (e3) => e3) {
      return this._inputFilterSensitiveLog = e2, this._outputFilterSensitiveLog = t2, this;
    }
    ser(e2) {
      return this._serializer = e2, this;
    }
    de(e2) {
      return this._deserializer = e2, this;
    }
    sc(e2) {
      return this._operationSchema = e2, this._smithyContext.operationSchema = e2, this;
    }
    build() {
      const e2 = this;
      let t2;
      return t2 = class extends p {
        input;
        static getEndpointParameterInstructions() {
          return e2._ep;
        }
        constructor(...[t3]) {
          super(), this.input = t3 ?? {}, e2._init(this), this.schema = e2._operationSchema;
        }
        resolveMiddleware(r2, n2, s2) {
          const i2 = e2._operationSchema, o2 = i2?.[4] ?? i2?.input, a2 = i2?.[5] ?? i2?.output;
          return this.resolveMiddlewareWithContext(r2, n2, s2, { CommandCtor: t2, middlewareFn: e2._middlewareFn, clientName: e2._clientName, commandName: e2._commandName, inputFilterSensitiveLog: e2._inputFilterSensitiveLog ?? (i2 ? f.bind(null, o2) : (e3) => e3), outputFilterSensitiveLog: e2._outputFilterSensitiveLog ?? (i2 ? f.bind(null, a2) : (e3) => e3), smithyContext: e2._smithyContext, additionalContext: e2._additionalContext });
        }
        serialize = e2._serializer;
        deserialize = e2._deserializer;
      };
    }
  }
  const m = "***SensitiveInformation***", y = (e2, t2, r2) => {
    for (const [r3, n3] of Object.entries(e2)) {
      const e3 = async function(e4, t3, r4) {
        const s4 = new n3(e4);
        if ("function" == typeof t3) this.send(s4, t3);
        else {
          if ("function" != typeof r4) return this.send(s4, t3);
          if ("object" != typeof t3) throw new Error("Expected http options but got " + typeof t3);
          this.send(s4, t3 || {}, r4);
        }
      }, s3 = (r3[0].toLowerCase() + r3.slice(1)).replace(/Command$/, "");
      t2.prototype[s3] = e3;
    }
    const { paginators: n2 = {}, waiters: s2 = {} } = r2 ?? {};
    for (const [e3, r3] of Object.entries(n2)) void 0 === t2.prototype[e3] && (t2.prototype[e3] = function(e4 = {}, t3, ...n3) {
      return r3({ ...t3, client: this }, e4, ...n3);
    });
    for (const [e3, r3] of Object.entries(s2)) void 0 === t2.prototype[e3] && (t2.prototype[e3] = async function(e4 = {}, t3, ...n3) {
      let s3 = t3;
      return "number" == typeof t3 && (s3 = { maxWaitTime: t3 }), r3({ ...s3, client: this }, e4, ...n3);
    });
  };
  class w extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(e2) {
      super(e2.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e2.name, this.$fault = e2.$fault, this.$metadata = e2.$metadata;
    }
    static isInstance(e2) {
      if (!e2) return false;
      const t2 = e2;
      return w.prototype.isPrototypeOf(t2) || Boolean(t2.$fault) && Boolean(t2.$metadata) && ("client" === t2.$fault || "server" === t2.$fault);
    }
    static [Symbol.hasInstance](e2) {
      if (!e2) return false;
      const t2 = e2;
      return this === w ? w.isInstance(e2) : !!w.isInstance(e2) && (t2.name && this.name ? this.prototype.isPrototypeOf(e2) || t2.name === this.name : this.prototype.isPrototypeOf(e2));
    }
  }
  const S = (e2, t2 = {}) => {
    Object.entries(t2).filter(([, e3]) => void 0 !== e3).forEach(([t3, r3]) => {
      null != e2[t3] && "" !== e2[t3] || (e2[t3] = r3);
    });
    const r2 = e2.message || e2.Message || "UnknownError";
    return e2.message = r2, delete e2.Message, e2;
  }, b = ({ output: e2, parsedBody: t2, exceptionCtor: r2, errorCode: n2 }) => {
    const s2 = v(e2), i2 = s2.httpStatusCode ? s2.httpStatusCode + "" : void 0, o2 = new r2({ name: t2?.code || t2?.Code || n2 || i2 || "UnknownError", $fault: "client", $metadata: s2 });
    throw S(o2, t2);
  }, E = (e2) => ({ output: t2, parsedBody: r2, errorCode: n2 }) => {
    b({ output: t2, parsedBody: r2, exceptionCtor: e2, errorCode: n2 });
  }, v = (e2) => ({ httpStatusCode: e2.statusCode, requestId: e2.headers["x-amzn-requestid"] ?? e2.headers["x-amzn-request-id"] ?? e2.headers["x-amz-request-id"], extendedRequestId: e2.headers["x-amz-id-2"], cfId: e2.headers["x-amz-cf-id"] }), x = (e2) => {
    switch (e2) {
      case "standard":
      case "cross-region":
        return { retryMode: "standard", connectionTimeout: 3100 };
      case "in-region":
        return { retryMode: "standard", connectionTimeout: 1100 };
      case "mobile":
        return { retryMode: "standard", connectionTimeout: 3e4 };
      default:
        return {};
    }
  };
  let T = false;
  const A = (e2) => {
    e2 && !T && parseInt(e2.substring(1, e2.indexOf("."))) < 16 && (T = true);
  };
  var N = r(30338);
  const C = Object.values(N.dB), _ = (e2) => Object.assign(((e3) => {
    const t2 = [];
    for (const r2 in N.dB) {
      const n2 = N.dB[r2];
      void 0 !== e3[n2] && t2.push({ algorithmId: () => n2, checksumConstructor: () => e3[n2] });
    }
    for (const [r2, n2] of Object.entries(e3.checksumAlgorithms ?? {})) t2.push({ algorithmId: () => r2, checksumConstructor: () => n2 });
    return { addChecksumAlgorithm(r2) {
      e3.checksumAlgorithms = e3.checksumAlgorithms ?? {};
      const n2 = r2.algorithmId(), s2 = r2.checksumConstructor();
      C.includes(n2) ? e3.checksumAlgorithms[n2.toUpperCase()] = s2 : e3.checksumAlgorithms[n2] = s2, t2.push(r2);
    }, checksumAlgorithms: () => t2 };
  })(e2), /* @__PURE__ */ ((e3) => ({ setRetryStrategy(t2) {
    e3.retryStrategy = t2;
  }, retryStrategy: () => e3.retryStrategy }))(e2)), R = _, I = (e2) => Object.assign(((e3) => {
    const t2 = {};
    return e3.checksumAlgorithms().forEach((e4) => {
      const r2 = e4.algorithmId();
      C.includes(r2) && (t2[r2] = e4.checksumConstructor());
    }), t2;
  })(e2), ((e3) => {
    const t2 = {};
    return t2.retryStrategy = e3.retryStrategy(), t2;
  })(e2)), D = (e2) => Array.isArray(e2) ? e2 : [e2], k = (e2) => {
    const t2 = "#text";
    for (const r2 in e2) e2.hasOwnProperty(r2) && void 0 !== e2[r2][t2] ? e2[r2] = e2[r2][t2] : "object" == typeof e2[r2] && null !== e2[r2] && (e2[r2] = k(e2[r2]));
    return e2;
  }, O = (e2) => null != e2;
  var M = r(65844);
  function P(e2, t2, r2) {
    let n2, s2, i2;
    if (void 0 === t2 && void 0 === r2) n2 = {}, i2 = e2;
    else {
      if (n2 = e2, "function" == typeof t2) return s2 = t2, i2 = r2, L(n2, s2, i2);
      i2 = t2;
    }
    for (const e3 of Object.keys(i2)) Array.isArray(i2[e3]) ? U(n2, null, i2, e3) : n2[e3] = i2[e3];
    return n2;
  }
  const $ = (e2) => {
    const t2 = {};
    for (const [r2, n2] of Object.entries(e2 || {})) t2[r2] = [, n2];
    return t2;
  }, j = (e2, t2) => {
    const r2 = {};
    for (const n2 in t2) U(r2, e2, t2, n2);
    return r2;
  }, L = (e2, t2, r2) => P(e2, Object.entries(r2).reduce((e3, [r3, n2]) => (Array.isArray(n2) ? e3[r3] = n2 : e3[r3] = "function" == typeof n2 ? [t2, n2()] : [t2, n2], e3), {})), U = (e2, t2, r2, n2) => {
    if (null !== t2) {
      let s3 = r2[n2];
      "function" == typeof s3 && (s3 = [, s3]);
      const [i3 = B, o2 = F, a2 = n2] = s3;
      return void (("function" == typeof i3 && i3(t2[a2]) || "function" != typeof i3 && i3) && (e2[n2] = o2(t2[a2])));
    }
    let [s2, i2] = r2[n2];
    if ("function" == typeof i2) {
      let t3;
      const r3 = void 0 === s2 && null != (t3 = i2()), o2 = "function" == typeof s2 && !!s2(void 0) || "function" != typeof s2 && !!s2;
      r3 ? e2[n2] = t3 : o2 && (e2[n2] = i2());
    } else {
      const t3 = void 0 === s2 && null != i2, r3 = "function" == typeof s2 && !!s2(i2) || "function" != typeof s2 && !!s2;
      (t3 || r3) && (e2[n2] = i2);
    }
  }, B = (e2) => null != e2, F = (e2) => e2, z = (e2) => {
    if (e2 != e2) return "NaN";
    switch (e2) {
      case 1 / 0:
        return "Infinity";
      case -1 / 0:
        return "-Infinity";
      default:
        return e2;
    }
  }, V = (e2) => e2.toISOString().replace(".000Z", "Z"), H = (e2) => {
    if (null == e2) return {};
    if (Array.isArray(e2)) return e2.filter((e3) => null != e3).map(H);
    if ("object" == typeof e2) {
      const t2 = {};
      for (const r2 of Object.keys(e2)) null != e2[r2] && (t2[r2] = H(e2[r2]));
      return t2;
    }
    return e2;
  };
  var q = r(96851);
}, 99430: (e, t, r) => {
  "use strict";
  r.d(t, { $: () => i });
  var n = r(73931), s = r(88141);
  const i = ({ query: e2 = {} }) => {
    const t2 = [], r2 = {};
    for (const i2 of Object.keys(e2)) {
      if (i2.toLowerCase() === s.D8) continue;
      const o = (0, n.escapeUri)(i2);
      t2.push(o);
      const a = e2[i2];
      "string" == typeof a ? r2[o] = `${o}=${(0, n.escapeUri)(a)}` : Array.isArray(a) && (r2[o] = a.slice(0).reduce((e3, t3) => e3.concat([`${o}=${(0, n.escapeUri)(t3)}`]), []).sort().join("&"));
    }
    return t2.sort().map((e3) => r2[e3]).filter((e3) => e3).join("&");
  };
} };
