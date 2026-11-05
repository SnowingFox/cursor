// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: (footer) range:922994..1833689
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, n = {};
  function o(e2) {
    var t2 = n[e2];
    if (void 0 !== t2) return t2.exports;
    var s2 = n[e2] = { exports: {} };
    return r[e2].call(s2.exports, s2, s2.exports, o), s2.exports;
  }
  t = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, o.t = function(r2, n2) {
    if (1 & n2 && (r2 = this(r2)), 8 & n2) return r2;
    if ("object" == typeof r2 && r2) {
      if (4 & n2 && r2.__esModule) return r2;
      if (16 & n2 && "function" == typeof r2.then) return r2;
    }
    var s2 = /* @__PURE__ */ Object.create(null);
    o.r(s2);
    var i2 = {};
    e = e || [null, t({}), t([]), t(t)];
    for (var a2 = 2 & n2 && r2; "object" == typeof a2 && !~e.indexOf(a2); a2 = t(a2)) Object.getOwnPropertyNames(a2).forEach((e2) => i2[e2] = () => r2[e2]);
    return i2.default = () => r2, o.d(s2, i2), s2;
  }, o.d = (e2, t2) => {
    for (var r2 in t2) o.o(t2, r2) && !o.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), o.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var s = {};
  (() => {
    "use strict";
    o.r(s), o.d(s, { __testOnly: () => i$, activate: () => o$, deactivate: () => s$ });
    var e2 = {};
    o.r(e2), o.d(e2, { base64: () => Xi, base64url: () => Qi, bigint: () => ua, boolean: () => pa, browserEmail: () => Li, cidrv4: () => Yi, cidrv6: () => Gi, cuid: () => Ti, cuid2: () => Oi, date: () => oa, datetime: () => aa, domain: () => ta, duration: () => $i, e164: () => ra, email: () => Fi, emoji: () => Ki, extendedDuration: () => Ri, guid: () => Ni, hex: () => ya, hostname: () => ea, html5Email: () => qi, idnEmail: () => Bi, integer: () => la, ipv4: () => Zi, ipv6: () => Wi, ksuid: () => Ci, lowercase: () => ma, mac: () => Hi, md5_base64: () => ba, md5_base64url: () => Sa, md5_hex: () => wa, nanoid: () => Ai, null: () => fa, number: () => da, rfc5322Email: () => zi, sha1_base64: () => Ea, sha1_base64url: () => xa, sha1_hex: () => ka, sha256_base64: () => Oa, sha256_base64url: () => Pa, sha256_hex: () => Ta, sha384_base64: () => Ca, sha384_base64url: () => Aa, sha384_hex: () => Ia, sha512_base64: () => Ra, sha512_base64url: () => Na, sha512_hex: () => $a, string: () => ca, time: () => ia, ulid: () => Pi, undefined: () => ha, unicodeEmail: () => Ui, uppercase: () => ga, uuid: () => Mi, uuid4: () => Ji, uuid6: () => ji, uuid7: () => Di, xid: () => Ii });
    var t2 = {};
    o.r(t2), o.d(t2, { endsWith: () => Dl, gt: () => wl, gte: () => bl, includes: () => Jl, length: () => $l, lowercase: () => Nl, lt: () => _l, lte: () => vl, maxLength: () => Cl, maxSize: () => Ol, mime: () => ql, minLength: () => Al, minSize: () => Pl, multipleOf: () => Tl, negative: () => kl, nonnegative: () => xl, nonpositive: () => El, normalize: () => Ul, overwrite: () => zl, positive: () => Sl, property: () => Fl, regex: () => Rl, size: () => Il, slugify: () => Kl, startsWith: () => jl, toLowerCase: () => Ll, toUpperCase: () => Vl, trim: () => Bl, uppercase: () => Ml });
    var r2 = {};
    o.r(r2), o.d(r2, { ZodISODate: () => zd, ZodISODateTime: () => Fd, ZodISODuration: () => Vd, ZodISOTime: () => Bd, date: () => Ud, datetime: () => qd, duration: () => Kd, time: () => Ld });
    var n2 = {};
    o.r(n2), o.d(n2, { ZodAny: () => If, ZodArray: () => Ff, ZodBase64: () => Wp, ZodBase64URL: () => Yp, ZodBigInt: () => _f, ZodBigIntFormat: () => wf, ZodBoolean: () => gf, ZodCIDRv4: () => Lp, ZodCIDRv6: () => Kp, ZodCUID: () => Pp, ZodCUID2: () => Cp, ZodCatch: () => Nh, ZodCodec: () => qh, ZodCustom: () => Xh, ZodCustomStringFormat: () => rf, ZodDate: () => jf, ZodDefault: () => Th, ZodDiscriminatedUnion: () => Yf, ZodE164: () => Xp, ZodEmail: () => pp, ZodEmoji: () => Ep, ZodEnum: () => lh, ZodExactOptional: () => bh, ZodFile: () => mh, ZodFunction: () => Yh, ZodGUID: () => hp, ZodIPv4: () => Dp, ZodIPv6: () => Up, ZodIntersection: () => Xf, ZodJWT: () => ef, ZodKSUID: () => Jp, ZodLazy: () => Kh, ZodLiteral: () => fh, ZodMAC: () => qp, ZodMap: () => ih, ZodNaN: () => Jh, ZodNanoID: () => Tp, ZodNever: () => Rf, ZodNonOptional: () => Ch, ZodNull: () => Of, ZodNullable: () => kh, ZodNumber: () => cf, ZodNumberFormat: () => lf, ZodObject: () => Uf, ZodOptional: () => vh, ZodPipe: () => Dh, ZodPrefault: () => Ph, ZodPromise: () => Wh, ZodReadonly: () => Uh, ZodRecord: () => rh, ZodSet: () => ch, ZodString: () => up, ZodStringFormat: () => dp, ZodSuccess: () => $h, ZodSymbol: () => kf, ZodTemplateLiteral: () => Lh, ZodTransform: () => yh, ZodTuple: () => eh, ZodType: () => ap, ZodULID: () => $p, ZodURL: () => bp, ZodUUID: () => gp, ZodUndefined: () => xf, ZodUnion: () => Kf, ZodUnknown: () => Af, ZodVoid: () => Mf, ZodXID: () => Np, ZodXor: () => Wf, _ZodString: () => cp, _default: () => Oh, _function: () => Gh, any: () => Cf, array: () => qf, base64: () => Hp, base64url: () => Gp, bigint: () => vf, boolean: () => yf, catch: () => Mh, check: () => Qh, cidrv4: () => Vp, cidrv6: () => Zp, codec: () => zh, cuid: () => Ip, cuid2: () => Ap, custom: () => em, date: () => Df, describe: () => nm, discriminatedUnion: () => Gf, e164: () => Qp, email: () => fp, emoji: () => xp, enum: () => dh, exactOptional: () => Sh, file: () => gh, float32: () => pf, float64: () => ff, function: () => Gh, guid: () => mp, hash: () => af, hex: () => sf, hostname: () => of, httpUrl: () => kp, instanceof: () => sm, int: () => df, int32: () => hf, int64: () => bf, intersection: () => Qf, ipv4: () => Fp, ipv6: () => Bp, json: () => am, jwt: () => tf, keyof: () => zf, ksuid: () => jp, lazy: () => Zh, literal: () => hh, looseObject: () => Vf, looseRecord: () => sh, mac: () => zp, map: () => ah, meta: () => om, nan: () => jh, nanoid: () => Op, nativeEnum: () => ph, never: () => Nf, nonoptional: () => Ah, null: () => Pf, nullable: () => Eh, nullish: () => xh, number: () => uf, object: () => Bf, optional: () => wh, partialRecord: () => oh, pipe: () => Fh, prefault: () => Ih, preprocess: () => cm, promise: () => Hh, readonly: () => Bh, record: () => nh, refine: () => tm, set: () => uh, strictObject: () => Lf, string: () => lp, stringFormat: () => nf, stringbool: () => im, success: () => Rh, superRefine: () => rm, symbol: () => Ef, templateLiteral: () => Vh, transform: () => _h, tuple: () => th, uint32: () => mf, uint64: () => Sf, ulid: () => Rp, undefined: () => Tf, union: () => Zf, unknown: () => $f, url: () => Sp, uuid: () => yp, uuidv4: () => _p, uuidv6: () => vp, uuidv7: () => wp, void: () => Jf, xid: () => Mp, xor: () => Hf });
    var i2 = o(1771);
    const a2 = require("vscode");
    var c = o(6290);
    const u = { disableConsoleFallback: true }, l = "mcp", d = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    function p(e3) {
      return { mcpAuthMeta: { workspaceId: a2.cursor.workspaceId(), windowSessionId: a2.env.sessionId, workbenchId: d, ...e3 } };
    }
    let f = false;
    (async () => {
      try {
        f = await a2.cursor.checkFeatureGate("mcp_structured_logging");
      } catch {
        f = false;
      }
    })();
    let h = "v1";
    const m = class e3 {
      static ensureOutput() {
        return e3.output || (e3.output = a2.window.createOutputChannel("MCP Logs", { log: true })), e3.output;
      }
      static init(t3 = {}) {
        if (e3.useAggregateOutputForInstances = true === t3.useAggregateOutputForInstances, e3.ensureOutput(), e3.useAggregateOutputForInstances) for (const t4 of e3.instances.values()) t4.useAggregateOutput();
      }
      static getLogger(t3) {
        return e3.ensureOutput(), e3.instances.has(t3) || e3.instances.set(t3, new e3(t3)), e3.instances.get(t3);
      }
      constructor(t3) {
        if (this.identifier = t3, e3.useAggregateOutputForInstances) this.output = e3.output;
        else try {
          this.output = a2.window.createOutputChannel(`MCP: ${t3}`, { log: true });
        } catch {
          this.output = e3.output;
        }
      }
      useAggregateOutput() {
        this.output !== e3.output && (this.output.dispose(), this.output = e3.output);
      }
      _buildMcpMeta(e4) {
        return { mcpMeta: { subkey: "cursor_mcp", identifier: this.identifier, mcp_version: h, ...e4 } };
      }
      static _buildMcpMeta(e4) {
        return { mcpMeta: { subkey: "cursor_mcp", mcp_version: h, ...e4 } };
      }
      error(e4, t3, r3, n3) {
        this.output.error(e4, t3), f && !n3?.localOnly && a2.cursor.logStructuredError(l, e4, t3, this._buildMcpMeta(r3), u);
      }
      warn(e4, t3, r3) {
        this.output.warn(e4), f && !r3?.localOnly && a2.cursor.logStructuredWarn(l, e4, this._buildMcpMeta(t3), u);
      }
      info(e4, t3, r3) {
        this.output.info(e4), f && !r3?.localOnly && a2.cursor.logStructuredInfo(l, e4, this._buildMcpMeta(t3), u);
      }
      debug(e4, t3, r3) {
        this.output.debug(e4), f && !r3?.localOnly && a2.cursor.logStructuredDebug(l, e4, this._buildMcpMeta(t3), u);
      }
      trace(e4, t3, r3) {
        this.output.trace(e4), f && !r3?.localOnly && a2.cursor.logStructuredDebug(l, e4, this._buildMcpMeta(t3), u);
      }
      static error(t3, r3, n3, o2) {
        e3.ensureOutput().error(t3, r3), f && !o2?.localOnly && a2.cursor.logStructuredError(l, t3, r3, e3._buildMcpMeta(n3), u);
      }
      static warn(t3, r3, n3) {
        e3.ensureOutput().warn(t3), f && !n3?.localOnly && a2.cursor.logStructuredWarn(l, t3, e3._buildMcpMeta(r3), u);
      }
      static info(t3, r3, n3) {
        e3.ensureOutput().info(t3), f && !n3?.localOnly && a2.cursor.logStructuredInfo(l, t3, e3._buildMcpMeta(r3), u);
      }
      static debug(t3, r3, n3) {
        e3.ensureOutput().debug(t3), f && !n3?.localOnly && a2.cursor.logStructuredDebug(l, t3, e3._buildMcpMeta(r3), u);
      }
      static trace(t3, r3, n3) {
        e3.ensureOutput().trace(t3), f && !n3?.localOnly && a2.cursor.logStructuredDebug(l, t3, e3._buildMcpMeta(r3), u);
      }
    };
    m.instances = /* @__PURE__ */ new Map(), m.useAggregateOutputForInstances = false;
    let g = m;
    var y = o(7598), _ = o(3024), v = o(8161), w = o(6760), b = o(8891);
    class S extends Error {
      constructor(e3, t3) {
        super(e3), this.name = "ParseError", this.type = t3.type, this.field = t3.field, this.value = t3.value, this.line = t3.line;
      }
    }
    const k = 32;
    function E(e3) {
    }
    function x(e3) {
      if ("function" == typeof e3) throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
      const { onEvent: t3 = E, onError: r3 = E, onRetry: n3 = E, onComment: o2 } = e3, s2 = [];
      let i3, a3, c2 = true, u2 = "", l2 = 0;
      function d2(e4) {
        let r4 = 0;
        if (-1 === e4.indexOf("\r")) {
          let n4 = e4.indexOf("\n", r4);
          for (; -1 !== n4; ) {
            if (r4 === n4) {
              l2 > 0 && t3({ id: i3, event: a3, data: u2 }), i3 = void 0, u2 = "", l2 = 0, a3 = void 0, r4 = n4 + 1, n4 = e4.indexOf("\n", r4);
              continue;
            }
            const o3 = e4.charCodeAt(r4);
            if (T(e4, r4, o3)) {
              const o4 = e4.charCodeAt(r4 + 5) === k ? r4 + 6 : r4 + 5, s3 = e4.slice(o4, n4);
              if (0 === l2 && 10 === e4.charCodeAt(n4 + 1)) {
                t3({ id: i3, event: a3, data: s3 }), i3 = void 0, u2 = "", a3 = void 0, r4 = n4 + 2, n4 = e4.indexOf("\n", r4);
                continue;
              }
              u2 = 0 === l2 ? s3 : `${u2}
${s3}`, l2++;
            } else O(e4, r4, o3) ? a3 = e4.slice(e4.charCodeAt(r4 + 6) === k ? r4 + 7 : r4 + 6, n4) || void 0 : p2(e4, r4, n4);
            r4 = n4 + 1, n4 = e4.indexOf("\n", r4);
          }
          return e4.slice(r4);
        }
        for (; r4 < e4.length; ) {
          const t4 = e4.indexOf("\r", r4), n4 = e4.indexOf("\n", r4);
          let o3 = -1;
          if (-1 !== t4 && -1 !== n4 ? o3 = t4 < n4 ? t4 : n4 : -1 !== t4 ? o3 = t4 === e4.length - 1 ? -1 : t4 : -1 !== n4 && (o3 = n4), -1 === o3) break;
          p2(e4, r4, o3), r4 = o3 + 1, 13 === e4.charCodeAt(r4 - 1) && 10 === e4.charCodeAt(r4) && r4++;
        }
        return e4.slice(r4);
      }
      function p2(e4, r4, n4) {
        if (r4 === n4) return l2 > 0 && t3({ id: i3, event: a3, data: u2 }), i3 = void 0, u2 = "", l2 = 0, void (a3 = void 0);
        const s3 = e4.charCodeAt(r4);
        if (T(e4, r4, s3)) {
          const t4 = e4.charCodeAt(r4 + 5) === k ? r4 + 6 : r4 + 5, o3 = e4.slice(t4, n4);
          return u2 = 0 === l2 ? o3 : `${u2}
${o3}`, void l2++;
        }
        if (O(e4, r4, s3)) return void (a3 = e4.slice(e4.charCodeAt(r4 + 6) === k ? r4 + 7 : r4 + 6, n4) || void 0);
        if (105 === s3 && 100 === e4.charCodeAt(r4 + 1) && 58 === e4.charCodeAt(r4 + 2)) {
          const t4 = e4.slice(e4.charCodeAt(r4 + 3) === k ? r4 + 4 : r4 + 3, n4);
          return void (i3 = t4.includes("\0") ? void 0 : t4);
        }
        if (58 === s3) {
          if (o2) {
            const t4 = e4.slice(r4, n4);
            o2(t4.slice(e4.charCodeAt(r4 + 1) === k ? 2 : 1));
          }
          return;
        }
        const c3 = e4.slice(r4, n4), d3 = c3.indexOf(":");
        if (-1 === d3) return void f2(c3, "", c3);
        const p3 = c3.slice(0, d3), h2 = c3.charCodeAt(d3 + 1) === k ? 2 : 1;
        f2(p3, c3.slice(d3 + h2), c3);
      }
      function f2(e4, t4, o3) {
        switch (e4) {
          case "event":
            a3 = t4 || void 0;
            break;
          case "data":
            u2 = 0 === l2 ? t4 : `${u2}
${t4}`, l2++;
            break;
          case "id":
            i3 = t4.includes("\0") ? void 0 : t4;
            break;
          case "retry":
            /^\d+$/.test(t4) ? n3(parseInt(t4, 10)) : r3(new S(`Invalid \`retry\` value: "${t4}"`, { type: "invalid-retry", value: t4, line: o3 }));
            break;
          default:
            r3(new S(`Unknown field "${e4.length > 20 ? `${e4.slice(0, 20)}…` : e4}"`, { type: "unknown-field", field: e4, value: t4, line: o3 }));
        }
      }
      return { feed: function(e4) {
        if (c2 && (c2 = false, 239 === e4.charCodeAt(0) && 187 === e4.charCodeAt(1) && 191 === e4.charCodeAt(2) && (e4 = e4.slice(3))), 0 === s2.length) {
          const t5 = d2(e4);
          return void ("" !== t5 && s2.push(t5));
        }
        if (-1 === e4.indexOf("\n") && -1 === e4.indexOf("\r")) return void s2.push(e4);
        s2.push(e4);
        const t4 = s2.join("");
        s2.length = 0;
        const r4 = d2(t4);
        "" !== r4 && s2.push(r4);
      }, reset: function(e4 = {}) {
        if (e4.consume && s2.length > 0) {
          const e5 = s2.join("");
          p2(e5, 0, e5.length);
        }
        c2 = true, i3 = void 0, u2 = "", l2 = 0, a3 = void 0, s2.length = 0;
      } };
    }
    function T(e3, t3, r3) {
      return 100 === r3 && 97 === e3.charCodeAt(t3 + 1) && 116 === e3.charCodeAt(t3 + 2) && 97 === e3.charCodeAt(t3 + 3) && 58 === e3.charCodeAt(t3 + 4);
    }
    function O(e3, t3, r3) {
      return 101 === r3 && 118 === e3.charCodeAt(t3 + 1) && 101 === e3.charCodeAt(t3 + 2) && 110 === e3.charCodeAt(t3 + 3) && 116 === e3.charCodeAt(t3 + 4) && 58 === e3.charCodeAt(t3 + 5);
    }
    class P extends Event {
      constructor(e3, t3) {
        var r3, n3;
        super(e3), this.code = null != (r3 = null == t3 ? void 0 : t3.code) ? r3 : void 0, this.message = null != (n3 = null == t3 ? void 0 : t3.message) ? n3 : void 0;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")](e3, t3, r3) {
        return r3(C(this), t3);
      }
      [/* @__PURE__ */ Symbol.for("Deno.customInspect")](e3, t3) {
        return e3(C(this), t3);
      }
    }
    function I(e3) {
      return e3 instanceof Error ? "errors" in e3 && Array.isArray(e3.errors) ? e3.errors.map(I).join(", ") : "cause" in e3 && e3.cause instanceof Error ? `${e3}: ${I(e3.cause)}` : e3.message : `${e3}`;
    }
    function C(e3) {
      return { type: e3.type, message: e3.message, code: e3.code, defaultPrevented: e3.defaultPrevented, cancelable: e3.cancelable, timeStamp: e3.timeStamp };
    }
    var A, $, R, N, M, J, j, D, F, q, z, U, B, L, V, K, Z, W, H, Y, G, X, Q, ee = (e3) => {
      throw TypeError(e3);
    }, te = (e3, t3, r3) => t3.has(e3) || ee("Cannot " + r3), re = (e3, t3, r3) => (te(e3, t3, "read from private field"), r3 ? r3.call(e3) : t3.get(e3)), ne = (e3, t3, r3) => t3.has(e3) ? ee("Cannot add the same private member more than once") : t3 instanceof WeakSet ? t3.add(e3) : t3.set(e3, r3), oe = (e3, t3, r3, n3) => (te(e3, t3, "write to private field"), t3.set(e3, r3), r3), se = (e3, t3, r3) => (te(e3, t3, "access private method"), r3);
    class ie extends EventTarget {
      constructor(e3, t3) {
        var r3, n3;
        super(), ne(this, L), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ne(this, A), ne(this, $), ne(this, R), ne(this, N), ne(this, M), ne(this, J), ne(this, j), ne(this, D, null), ne(this, F), ne(this, q), ne(this, z, null), ne(this, U, null), ne(this, B, null), ne(this, K, async (e4) => {
          var t4;
          re(this, q).reset();
          const { body: r4, redirected: n4, status: o2, headers: s2 } = e4;
          if (204 === o2) return se(this, L, G).call(this, "Server sent HTTP 204, not reconnecting", 204), void this.close();
          if (oe(this, R, n4 ? new URL(e4.url) : void 0), 200 !== o2) return void se(this, L, G).call(this, `Non-200 status code (${o2})`, o2);
          if (!(s2.get("content-type") || "").startsWith("text/event-stream")) return void se(this, L, G).call(this, 'Invalid content type, expected "text/event-stream"', o2);
          if (re(this, A) === this.CLOSED) return;
          oe(this, A, this.OPEN);
          const i3 = new Event("open");
          if (null == (t4 = re(this, B)) || t4.call(this, i3), this.dispatchEvent(i3), "object" != typeof r4 || !r4 || !("getReader" in r4)) return se(this, L, G).call(this, "Invalid response body, expected a web ReadableStream", o2), void this.close();
          const a3 = new TextDecoder(), c2 = r4.getReader();
          let u2 = true;
          do {
            const { done: e5, value: t5 } = await c2.read();
            t5 && re(this, q).feed(a3.decode(t5, { stream: !e5 })), e5 && (u2 = false, re(this, q).reset(), se(this, L, X).call(this));
          } while (u2);
        }), ne(this, Z, (e4) => {
          oe(this, F, void 0), "AbortError" !== e4.name && "aborted" !== e4.type && se(this, L, X).call(this, I(e4));
        }), ne(this, H, (e4) => {
          "string" == typeof e4.id && oe(this, D, e4.id);
          const t4 = new MessageEvent(e4.event || "message", { data: e4.data, origin: re(this, R) ? re(this, R).origin : re(this, $).origin, lastEventId: e4.id || "" });
          re(this, U) && (!e4.event || "message" === e4.event) && re(this, U).call(this, t4), this.dispatchEvent(t4);
        }), ne(this, Y, (e4) => {
          oe(this, J, e4);
        }), ne(this, Q, () => {
          oe(this, j, void 0), re(this, A) === this.CONNECTING && se(this, L, V).call(this);
        });
        try {
          if (e3 instanceof URL) oe(this, $, e3);
          else {
            if ("string" != typeof e3) throw new Error("Invalid URL");
            oe(this, $, new URL(e3, (function() {
              const e4 = "document" in globalThis ? globalThis.document : void 0;
              return e4 && "object" == typeof e4 && "baseURI" in e4 && "string" == typeof e4.baseURI ? e4.baseURI : void 0;
            })()));
          }
        } catch {
          throw (function(e4) {
            const t4 = globalThis.DOMException;
            return "function" == typeof t4 ? new t4(e4, "SyntaxError") : new SyntaxError(e4);
          })("An invalid or illegal string was specified");
        }
        oe(this, q, x({ onEvent: re(this, H), onRetry: re(this, Y) })), oe(this, A, this.CONNECTING), oe(this, J, 3e3), oe(this, M, null != (r3 = null == t3 ? void 0 : t3.fetch) ? r3 : globalThis.fetch), oe(this, N, null != (n3 = null == t3 ? void 0 : t3.withCredentials) && n3), se(this, L, V).call(this);
      }
      get readyState() {
        return re(this, A);
      }
      get url() {
        return re(this, $).href;
      }
      get withCredentials() {
        return re(this, N);
      }
      get onerror() {
        return re(this, z);
      }
      set onerror(e3) {
        oe(this, z, e3);
      }
      get onmessage() {
        return re(this, U);
      }
      set onmessage(e3) {
        oe(this, U, e3);
      }
      get onopen() {
        return re(this, B);
      }
      set onopen(e3) {
        oe(this, B, e3);
      }
      addEventListener(e3, t3, r3) {
        const n3 = t3;
        super.addEventListener(e3, n3, r3);
      }
      removeEventListener(e3, t3, r3) {
        const n3 = t3;
        super.removeEventListener(e3, n3, r3);
      }
      close() {
        re(this, j) && clearTimeout(re(this, j)), re(this, A) !== this.CLOSED && (re(this, F) && re(this, F).abort(), oe(this, A, this.CLOSED), oe(this, F, void 0));
      }
    }
    function ae(e3) {
      return e3 ? e3 instanceof Headers ? Object.fromEntries(e3.entries()) : Array.isArray(e3) ? Object.fromEntries(e3) : { ...e3 } : {};
    }
    function ce(e3 = fetch, t3) {
      return t3 ? async (r3, n3) => {
        const o2 = { ...t3, ...n3, headers: n3?.headers ? { ...ae(t3.headers), ...ae(n3.headers) } : t3.headers };
        return e3(r3, o2);
      } : e3;
    }
    A = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakSet(), V = function() {
      oe(this, A, this.CONNECTING), oe(this, F, new AbortController()), re(this, M)(re(this, $), se(this, L, W).call(this)).then(re(this, K)).catch(re(this, Z));
    }, K = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), W = function() {
      var e3;
      const t3 = { mode: "cors", redirect: "follow", headers: { Accept: "text/event-stream", ...re(this, D) ? { "Last-Event-ID": re(this, D) } : void 0 }, cache: "no-store", signal: null == (e3 = re(this, F)) ? void 0 : e3.signal };
      return "window" in globalThis && (t3.credentials = this.withCredentials ? "include" : "same-origin"), t3;
    }, H = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), G = function(e3, t3) {
      var r3;
      re(this, A) !== this.CLOSED && oe(this, A, this.CLOSED);
      const n3 = new P("error", { code: t3, message: e3 });
      null == (r3 = re(this, z)) || r3.call(this, n3), this.dispatchEvent(n3);
    }, X = function(e3, t3) {
      var r3;
      if (re(this, A) === this.CLOSED) return;
      oe(this, A, this.CONNECTING);
      const n3 = new P("error", { code: t3, message: e3 });
      null == (r3 = re(this, z)) || r3.call(this, n3), this.dispatchEvent(n3), oe(this, j, setTimeout(re(this, Q), re(this, J)));
    }, Q = /* @__PURE__ */ new WeakMap(), ie.CONNECTING = 0, ie.OPEN = 1, ie.CLOSED = 2;
    var ue = o(9116);
    class le extends Error {
      constructor(e3, t3, r3) {
        super(`SSE error: ${t3}`), this.code = e3, this.event = r3;
      }
    }
    class de {
      constructor(e3, t3) {
        this._url = e3, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t3?.eventSourceInit, this._requestInit = t3?.requestInit, this._authProvider = t3?.authProvider, this._fetch = t3?.fetch, this._fetchWithInit = ce(t3?.fetch, t3?.requestInit);
      }
      async _authThenStart() {
        if (!this._authProvider) throw new b.D_("No auth provider");
        let e3;
        try {
          e3 = await (0, b.j2)(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit });
        } catch (e4) {
          throw this.onerror?.(e4), e4;
        }
        if ("AUTHORIZED" !== e3) throw new b.D_();
        return await this._startOrAuth();
      }
      async _commonHeaders() {
        const e3 = {};
        if (this._authProvider) {
          const t4 = await this._authProvider.tokens();
          t4 && (e3.Authorization = `Bearer ${t4.access_token}`);
        }
        this._protocolVersion && (e3["mcp-protocol-version"] = this._protocolVersion);
        const t3 = ae(this._requestInit?.headers);
        return new Headers({ ...e3, ...t3 });
      }
      _startOrAuth() {
        const e3 = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
        return new Promise((t3, r3) => {
          this._eventSource = new ie(this._url.href, { ...this._eventSourceInit, fetch: async (t4, r4) => {
            const n3 = await this._commonHeaders();
            n3.set("Accept", "text/event-stream");
            const o2 = await e3(t4, { ...r4, headers: n3 });
            if (401 === o2.status && o2.headers.has("www-authenticate")) {
              const { resourceMetadataUrl: e4, scope: t5 } = (0, b.extractWWWAuthenticateParams)(o2);
              this._resourceMetadataUrl = e4, this._scope = t5;
            }
            return o2;
          } }), this._abortController = new AbortController(), this._eventSource.onerror = (e4) => {
            if (401 === e4.code && this._authProvider) return void this._authThenStart().then(t3, r3);
            const n3 = new le(e4.code, e4.message, e4);
            r3(n3), this.onerror?.(n3);
          }, this._eventSource.onopen = () => {
          }, this._eventSource.addEventListener("endpoint", (e4) => {
            const n3 = e4;
            try {
              if (this._endpoint = new URL(n3.data, this._url), this._endpoint.origin !== this._url.origin) throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
            } catch (e5) {
              return r3(e5), this.onerror?.(e5), void this.close();
            }
            t3();
          }), this._eventSource.onmessage = (e4) => {
            const t4 = e4;
            let r4;
            try {
              r4 = ue.OR.parse(JSON.parse(t4.data));
            } catch (e5) {
              return void this.onerror?.(e5);
            }
            this.onmessage?.(r4);
          };
        });
      }
      async start() {
        if (this._eventSource) throw new Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        return await this._startOrAuth();
      }
      async finishAuth(e3) {
        if (!this._authProvider) throw new b.D_("No auth provider");
        if ("AUTHORIZED" !== await (0, b.j2)(this._authProvider, { serverUrl: this._url, authorizationCode: e3, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit })) throw new b.D_("Failed to authorize");
      }
      async close() {
        this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
      }
      async send(e3) {
        if (!this._endpoint) throw new Error("Not connected");
        try {
          const t3 = await this._commonHeaders();
          t3.set("content-type", "application/json");
          const r3 = { ...this._requestInit, method: "POST", headers: t3, body: JSON.stringify(e3), signal: this._abortController?.signal }, n3 = await (this._fetch ?? fetch)(this._endpoint, r3);
          if (!n3.ok) {
            const t4 = await n3.text().catch(() => null);
            if (401 === n3.status && this._authProvider) {
              const { resourceMetadataUrl: t5, scope: r4 } = (0, b.extractWWWAuthenticateParams)(n3);
              this._resourceMetadataUrl = t5, this._scope = r4;
              if ("AUTHORIZED" !== await (0, b.j2)(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit })) throw new b.D_();
              return this.send(e3);
            }
            throw new Error(`Error POSTing to endpoint (HTTP ${n3.status}): ${t4}`);
          }
          await n3.body?.cancel();
        } catch (e4) {
          throw this.onerror?.(e4), e4;
        }
      }
      setProtocolVersion(e3) {
        this._protocolVersion = e3;
      }
    }
    var pe = o(1762);
    const fe = require("node:process");
    var he = o(7075);
    class me {
      append(e3) {
        this._buffer = this._buffer ? Buffer.concat([this._buffer, e3]) : e3;
      }
      readMessage() {
        if (!this._buffer) return null;
        const e3 = this._buffer.indexOf("\n");
        if (-1 === e3) return null;
        const t3 = this._buffer.toString("utf8", 0, e3).replace(/\r$/, "");
        return this._buffer = this._buffer.subarray(e3 + 1), (function(e4) {
          return ue.OR.parse(JSON.parse(e4));
        })(t3);
      }
      clear() {
        this._buffer = void 0;
      }
    }
    const ge = "win32" === fe.platform ? ["APPDATA", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "PATH", "PROCESSOR_ARCHITECTURE", "SYSTEMDRIVE", "SYSTEMROOT", "TEMP", "USERNAME", "USERPROFILE", "PROGRAMFILES"] : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"];
    function ye() {
      const e3 = {};
      for (const t3 of ge) {
        const r3 = fe.env[t3];
        void 0 !== r3 && (r3.startsWith("()") || (e3[t3] = r3));
      }
      return e3;
    }
    class _e {
      constructor(e3) {
        this._readBuffer = new me(), this._stderrStream = null, this._serverParams = e3, "pipe" !== e3.stderr && "overlapped" !== e3.stderr || (this._stderrStream = new he.PassThrough());
      }
      async start() {
        if (this._process) throw new Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        return new Promise((e3, t3) => {
          const r3 = this._serverParams.spawn ?? pe;
          this._process = r3(this._serverParams.command, this._serverParams.args ?? [], { env: { ...ye(), ...this._serverParams.env }, stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"], shell: false, windowsHide: "win32" === fe.platform && "" in fe, cwd: this._serverParams.cwd }), this._process.on("error", (e4) => {
            t3(e4), this.onerror?.(e4);
          }), this._process.on("spawn", () => {
            e3();
          }), this._process.on("close", (e4) => {
            this._process = void 0, this.onclose?.();
          }), this._process.stdin?.on("error", (e4) => {
            this.onerror?.(e4);
          }), this._process.stdout?.on("data", (e4) => {
            this._readBuffer.append(e4), this.processReadBuffer();
          }), this._process.stdout?.on("error", (e4) => {
            this.onerror?.(e4);
          }), this._stderrStream && this._process.stderr && this._process.stderr.pipe(this._stderrStream);
        });
      }
      get stderr() {
        return this._stderrStream ? this._stderrStream : this._process?.stderr ?? null;
      }
      get pid() {
        return this._process?.pid ?? null;
      }
      processReadBuffer() {
        for (; ; ) try {
          const e3 = this._readBuffer.readMessage();
          if (null === e3) break;
          this.onmessage?.(e3);
        } catch (e3) {
          this.onerror?.(e3);
        }
      }
      async close() {
        if (this._process) {
          const e3 = this._process;
          this._process = void 0;
          const t3 = new Promise((t4) => {
            e3.once("close", () => {
              t4();
            });
          });
          try {
            e3.stdin?.end();
          } catch {
          }
          if (await Promise.race([t3, new Promise((e4) => setTimeout(e4, 2e3).unref())]), null === e3.exitCode) {
            try {
              e3.kill("SIGTERM");
            } catch {
            }
            await Promise.race([t3, new Promise((e4) => setTimeout(e4, 2e3).unref())]);
          }
          if (null === e3.exitCode) try {
            e3.kill("SIGKILL");
          } catch {
          }
        }
        this._readBuffer.clear();
      }
      send(e3) {
        return new Promise((t3) => {
          if (!this._process?.stdin) throw new Error("Not connected");
          const r3 = (function(e4) {
            return JSON.stringify(e4) + "\n";
          })(e3);
          this._process.stdin.write(r3) ? t3() : this._process.stdin.once("drain", t3);
        });
      }
    }
    class ve extends TransformStream {
      constructor({ onError: e3, onRetry: t3, onComment: r3 } = {}) {
        let n3;
        super({ start(o2) {
          n3 = x({ onEvent: (e4) => {
            o2.enqueue(e4);
          }, onError(t4) {
            "terminate" === e3 ? o2.error(t4) : "function" == typeof e3 && e3(t4);
          }, onRetry: t3, onComment: r3 });
        }, transform(e4) {
          n3.feed(e4);
        } });
      }
    }
    const we = { initialReconnectionDelay: 1e3, maxReconnectionDelay: 3e4, reconnectionDelayGrowFactor: 1.5, maxRetries: 2 };
    class be extends Error {
      constructor(e3, t3) {
        super(`Streamable HTTP error: ${t3}`), this.code = e3;
      }
    }
    class Se {
      constructor(e3, t3) {
        this._hasCompletedAuthFlow = false, this._url = e3, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t3?.requestInit, this._authProvider = t3?.authProvider, this._fetch = t3?.fetch, this._fetchWithInit = ce(t3?.fetch, t3?.requestInit), this._sessionId = t3?.sessionId, this._reconnectionOptions = t3?.reconnectionOptions ?? we;
      }
      async _authThenStart() {
        if (!this._authProvider) throw new b.D_("No auth provider");
        let e3;
        try {
          e3 = await (0, b.j2)(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit });
        } catch (e4) {
          throw this.onerror?.(e4), e4;
        }
        if ("AUTHORIZED" !== e3) throw new b.D_();
        return this._cursorSseAuthCompleted = true, await this._startOrAuthSse({ resumptionToken: void 0 });
      }
      async _commonHeaders() {
        const e3 = {};
        if (this._authProvider) {
          const t4 = await this._authProvider.tokens();
          t4 && (e3.Authorization = `Bearer ${t4.access_token}`);
        }
        this._sessionId && (e3["mcp-session-id"] = this._sessionId), this._protocolVersion && (e3["mcp-protocol-version"] = this._protocolVersion);
        const t3 = ae(this._requestInit?.headers);
        return new Headers({ ...e3, ...t3 });
      }
      async _startOrAuthSse(e3) {
        const { resumptionToken: t3 } = e3;
        try {
          const r3 = await this._commonHeaders();
          r3.set("Accept", "text/event-stream"), t3 && r3.set("last-event-id", t3);
          const n3 = await (this._fetch ?? fetch)(this._url, { method: "GET", headers: r3, signal: this._abortController?.signal });
          if (!n3.ok) {
            if (await n3.body?.cancel(), 401 === n3.status && this._authProvider) {
              if (this._cursorSseAuthCompleted) return;
              return await this._authThenStart();
            }
            if (405 === n3.status) return;
            throw new be(n3.status, `Failed to open SSE stream: ${n3.statusText}`);
          }
          this._cursorSseAuthCompleted = false, this._handleSseStream(n3.body, e3, true);
        } catch (e4) {
          throw this.onerror?.(e4), e4;
        }
      }
      _getNextReconnectionDelay(e3) {
        if (void 0 !== this._serverRetryMs) return this._serverRetryMs;
        const t3 = this._reconnectionOptions.initialReconnectionDelay, r3 = this._reconnectionOptions.reconnectionDelayGrowFactor, n3 = this._reconnectionOptions.maxReconnectionDelay;
        return Math.min(t3 * Math.pow(r3, e3), n3);
      }
      _scheduleReconnection(e3, t3 = 0) {
        const r3 = this._reconnectionOptions.maxRetries;
        if (t3 >= r3) return void this.onerror?.(new Error(`Maximum reconnection attempts (${r3}) exceeded.`));
        const n3 = this._getNextReconnectionDelay(t3);
        this._reconnectionTimeout = setTimeout(() => {
          this._startOrAuthSse(e3).catch((r4) => {
            if (r4 instanceof Error && "SiblingAlreadyRefreshedError" === r4.name) return void this.onerror?.(r4);
            const n4 = new Error(`Failed to reconnect SSE stream: ${r4 instanceof Error ? r4.message : String(r4)}`);
            r4 instanceof Error && (n4.cause = r4), this.onerror?.(n4), this._scheduleReconnection(e3, t3 + 1);
          });
        }, n3);
      }
      _handleSseStream(e3, t3, r3) {
        if (!e3) return;
        const { onresumptiontoken: n3, replayMessageId: o2 } = t3;
        let s2, i3 = false, a3 = false;
        (async () => {
          try {
            const t4 = e3.pipeThrough(new TextDecoderStream()).pipeThrough(new ve({ onRetry: (e4) => {
              this._serverRetryMs = e4;
            } })).getReader();
            for (; ; ) {
              const { value: e4, done: r4 } = await t4.read();
              if (r4) break;
              if (e4.id && (s2 = e4.id, i3 = true, n3?.(e4.id)), e4.data && (!e4.event || "message" === e4.event)) try {
                const t5 = ue.OR.parse(JSON.parse(e4.data));
                (0, ue.ig)(t5) && (a3 = true, void 0 !== o2 && (t5.id = o2)), this.onmessage?.(t5);
              } catch (e5) {
                this.onerror?.(e5);
              }
            }
            (r3 || i3) && !a3 && this._abortController && !this._abortController.signal.aborted && this._scheduleReconnection({ resumptionToken: s2, onresumptiontoken: n3, replayMessageId: o2 }, 0);
          } catch (e4) {
            this.onerror?.(new Error(`SSE stream disconnected: ${e4}`));
            if ((r3 || i3) && !a3 && this._abortController && !this._abortController.signal.aborted) try {
              this._scheduleReconnection({ resumptionToken: s2, onresumptiontoken: n3, replayMessageId: o2 }, 0);
            } catch (e5) {
              if (e5 instanceof Error && "SiblingAlreadyRefreshedError" === e5.name) return void this.onerror?.(e5);
              const t4 = new Error(`Failed to reconnect: ${e5 instanceof Error ? e5.message : String(e5)}`);
              e5 instanceof Error && (t4.cause = e5), this.onerror?.(t4);
            }
          }
        })();
      }
      async start() {
        if (this._abortController) throw new Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        this._abortController = new AbortController();
      }
      async finishAuth(e3) {
        if (!this._authProvider) throw new b.D_("No auth provider");
        if ("AUTHORIZED" !== await (0, b.j2)(this._authProvider, { serverUrl: this._url, authorizationCode: e3, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit })) throw new b.D_("Failed to authorize");
      }
      async close() {
        this._reconnectionTimeout && (clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0), this._abortController?.abort(), this.onclose?.();
      }
      async send(e3, t3) {
        try {
          const { resumptionToken: r3, onresumptiontoken: n3 } = t3 || {};
          if (r3) return void this._startOrAuthSse({ resumptionToken: r3, replayMessageId: (0, ue.vo)(e3) ? e3.id : void 0 }).catch((e4) => this.onerror?.(e4));
          const o2 = await this._commonHeaders();
          o2.set("content-type", "application/json"), o2.set("accept", "application/json, text/event-stream");
          const s2 = { ...this._requestInit, method: "POST", headers: o2, body: JSON.stringify(e3), signal: this._abortController?.signal }, i3 = await (this._fetch ?? fetch)(this._url, s2), a3 = i3.headers.get("mcp-session-id");
          if (a3 && (this._sessionId = a3), !i3.ok) {
            const t4 = await i3.text().catch(() => null);
            if (401 === i3.status && this._authProvider) {
              if (this._hasCompletedAuthFlow) throw new be(401, "Server returned 401 after successful authentication");
              const { resourceMetadataUrl: t5, scope: r4 } = (0, b.extractWWWAuthenticateParams)(i3);
              this._resourceMetadataUrl = t5, this._scope = r4;
              if ("AUTHORIZED" !== await (0, b.j2)(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit })) throw new b.D_();
              return this._hasCompletedAuthFlow = true, this.send(e3);
            }
            if (403 === i3.status && this._authProvider) {
              const { resourceMetadataUrl: t5, scope: r4, error: n4 } = (0, b.extractWWWAuthenticateParams)(i3);
              if ("insufficient_scope" === n4) {
                const n5 = i3.headers.get("WWW-Authenticate");
                if (this._lastUpscopingHeader === n5) throw new be(403, "Server returned 403 after trying upscoping");
                r4 && (this._scope = r4), t5 && (this._resourceMetadataUrl = t5), this._lastUpscopingHeader = n5 ?? void 0;
                if ("AUTHORIZED" !== await (0, b.j2)(this._authProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetch })) throw new b.D_();
                return this.send(e3);
              }
            }
            throw new be(i3.status, `Error POSTing to endpoint: ${t4}`);
          }
          if (this._hasCompletedAuthFlow = false, this._lastUpscopingHeader = void 0, 202 === i3.status) return await i3.body?.cancel(), void ((0, ue.wU)(e3) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((e4) => this.onerror?.(e4)));
          const c2 = (Array.isArray(e3) ? e3 : [e3]).filter((e4) => "method" in e4 && "id" in e4 && void 0 !== e4.id).length > 0, u2 = i3.headers.get("content-type");
          if (c2) if (u2?.includes("text/event-stream")) this._handleSseStream(i3.body, { onresumptiontoken: n3 }, false);
          else {
            if (!u2?.includes("application/json")) throw await i3.body?.cancel(), new be(-1, `Unexpected content type: ${u2}`);
            {
              const e4 = await i3.json(), t4 = Array.isArray(e4) ? e4.map((e5) => ue.OR.parse(e5)) : [ue.OR.parse(e4)];
              for (const e5 of t4) this.onmessage?.(e5);
            }
          }
          else await i3.body?.cancel();
        } catch (e4) {
          throw this.onerror?.(e4), e4;
        }
      }
      get sessionId() {
        return this._sessionId;
      }
      async terminateSession() {
        if (this._sessionId) try {
          const e3 = await this._commonHeaders(), t3 = { ...this._requestInit, method: "DELETE", headers: e3, signal: this._abortController?.signal }, r3 = await (this._fetch ?? fetch)(this._url, t3);
          if (await r3.body?.cancel(), !r3.ok && 405 !== r3.status) throw new be(r3.status, `Failed to terminate session: ${r3.statusText}`);
          this._sessionId = void 0;
        } catch (e3) {
          throw this.onerror?.(e3), e3;
        }
      }
      setProtocolVersion(e3) {
        this._protocolVersion = e3;
      }
      get protocolVersion() {
        return this._protocolVersion;
      }
      async resumeStream(e3, t3) {
        await this._startOrAuthSse({ resumptionToken: e3, onresumptiontoken: t3?.onresumptiontoken });
      }
    }
    var ke = o(496), Ee = o(8691), xe = o(9052);
    const Te = /* @__PURE__ */ new Set(["api.1inch.com"]);
    function Oe(e3) {
      let t3;
      try {
        t3 = new URL(e3).hostname.toLowerCase();
      } catch {
        return false;
      }
      return Te.has(t3) || true === (0, i2.TG)(e3)?.unauthenticatedConnect;
    }
    var Pe = o(2915), Ie = o(5553), Ce = o(8644), Ae = o(6078), $e = o(768);
    const Re = "x-request-id";
    var Ne = o(1195), Me = o(2047), Je = o(8228), je = o(3080), De = o(3168), Fe = o(1521);
    const qe = { classifyBeforeWipe: false }, ze = /* @__PURE__ */ new Set(["AbortError", "TimeoutError", "TemporarilyUnavailableError"]);
    const Ue = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, Be = Ne.qL.filter((e3) => "fetch failed" !== e3.source);
    function Le(e3) {
      if (!(e3 instanceof Error)) return false;
      if ((0, je.U)(e3, { allowInvalidGrantGeneric: true })) return false;
      if (ze.has(e3.name)) return true;
      const t3 = e3.message ?? "";
      if ((0, De.v)(t3)) return true;
      const r3 = (0, Ne.RI)(e3);
      if (void 0 !== r3 && Ne.a6.has(r3)) return true;
      if ((403 === r3 || 407 === r3) && !(function(e4) {
        if (Fe.k_.has(e4.name)) return true;
        const t4 = e4.errorCode;
        return "string" == typeof t4 && Fe.S2.has(t4.toLowerCase());
      })(e3)) return true;
      const n3 = (function(e4) {
        const t4 = e4.cause, r4 = e4.code ?? (t4 && "object" == typeof t4 && "code" in t4 ? t4.code : void 0);
        return "string" == typeof r4 ? r4 : void 0;
      })(e3);
      return !(void 0 === n3 || !Ne.R0.has(n3)) || !!(function(e4) {
        return !Ue.test(e4) && Be.some((t4) => t4.test(e4));
      })(t3);
    }
    function Ve(e3, t3, r3) {
      if ((0, Fe.zG)(e3)) return true;
      if (r3?.isRetryableOAuthRefreshError?.(e3)) return true;
      if (e3 instanceof Error) {
        const r4 = (0, Ee.FI)(e3, t3);
        if (r4.retryable && ("network" === r4.reason || "timeout" === r4.reason || "sibling_refreshed" === r4.reason)) return true;
      }
      return false;
    }
    function Ke(e3, t3, r3) {
      if (!(function(e4) {
        const t4 = e4?.getOAuthRefreshDiagnosticsForLog?.();
        return true === t4?.refreshRetryClassificationEnabled;
      })(r3)) return false;
      if ((0, Ee.qw)(e3)) return false;
      if (Ve(e3, t3, r3)) return true;
      if (e3 instanceof Error) {
        const n4 = e3.cause;
        if (!(0, Ee.qw)(n4) && Ve(n4, t3, r3)) return true;
      }
      const n3 = r3?.getOAuthRefreshDiagnosticsForLog?.();
      if (n3?.precededByRefreshError) {
        const e4 = "string" == typeof n3.errorMessage ? n3.errorMessage : void 0;
        if (e4 && Le(new Error(e4))) return true;
      }
      return false;
    }
    var Ze = o(4956), We = o(4792);
    const He = /* @__PURE__ */ new Map();
    function Ye(e3) {
      const t3 = He.get(e3);
      if (void 0 === t3) return;
      const r3 = t3 - Date.now();
      if (!(r3 <= 0)) return r3;
      He.delete(e3);
    }
    function Ge(e3) {
      He.delete(e3);
    }
    function Xe(e3, t3) {
      return async (r3, n3) => {
        if (void 0 !== e3) {
          const t4 = He.get(e3);
          if (void 0 !== t4 && Date.now() < t4) {
            const e4 = Math.max(1, Math.ceil((t4 - Date.now()) / 1e3));
            return new Response(JSON.stringify({ jsonrpc: "2.0", error: { code: -32004, message: "Too many requests. Please try again later." } }), { status: 429, headers: { "content-type": "application/json", "retry-after": String(e4) } });
          }
        }
        const o2 = await t3(r3, n3);
        if (void 0 !== e3 && 429 === o2.status) {
          const t4 = (function(e4) {
            if (!e4) return;
            const t5 = Number(e4);
            if (Number.isFinite(t5) && t5 > 0) return Math.ceil(1e3 * t5);
            const r4 = Date.parse(e4);
            return Number.isFinite(r4) ? Math.max(0, r4 - Date.now()) : void 0;
          })(o2.headers.get("retry-after"));
          void 0 !== t4 && t4 > 0 && He.set(e3, Date.now() + Math.min(t4, 3e5));
        }
        return o2;
      };
    }
    function Qe(e3) {
      const t3 = (0, xe.KR)(e3);
      return { debug: (e4, r3) => t3.debug(e4, r3), info: (e4, r3) => t3.info(e4, r3), warn: (e4, r3) => t3.warn(e4, r3), error: (e4, r3, n3) => t3.error(e4, r3 instanceof Error ? r3 : void 0, n3) };
    }
    function et(e3) {
      return { logger: Qe(e3.identifier), metadata: { identifier: e3.identifier, source: "mcp-oauth", oauthFlow: true, commandsVersion: e3.commandsVersion ?? "v2", transportType: e3.transportType ?? "oauth", ...e3.serverUrl ? { serverUrl: (0, We.q2)(e3.serverUrl, { includePath: false }) } : {}, ...void 0 !== e3.clientSurface ? { clientSurface: e3.clientSurface } : {}, ...void 0 !== e3.processRegistryKey ? { processRegistryKey: e3.processRegistryKey } : {}, ...void 0 !== e3.resolvedConfigHash ? { resolvedConfigHash: e3.resolvedConfigHash } : {}, ...e3.extraMetadata } };
    }
    function tt(e3) {
      const t3 = et(e3);
      return (0, Ze.jI)({ fetch: Xe(e3.identifier, e3.baseFetch), logger: t3.logger, metadata: t3.metadata, logSuccessfulExchanges: false });
    }
    function rt(e3) {
      return et({ identifier: e3.identifier, serverUrl: e3.serverUrl, transportType: e3.transportType, commandsVersion: e3.commandsVersion, clientSurface: e3.host ? e3.host.isGlass() ? "glass" : "ide" : void 0, extraMetadata: { source: "cursor-mcp", configuredServerType: e3.serverInfo?.type, ...e3.extraMetadata } });
    }
    function nt(e3, t3, r3, n3) {
      const o2 = n3 ?? e3?.fetch ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
      if (void 0 === o2) return;
      const s2 = "string" == typeof r3.metadata.identifier ? r3.metadata.identifier : void 0;
      if (void 0 === s2) return;
      const { identifier: i3, transportType: a3, commandsVersion: c2, clientSurface: u2, ...l2 } = r3.metadata;
      return tt({ identifier: s2, baseFetch: o2, transportType: t3, commandsVersion: c2, clientSurface: u2, extraMetadata: l2 });
    }
    var ot = o(4420);
    function st(e3) {
      return (0, xe.KR)(e3);
    }
    function it() {
      return (0, xe.KR)("mcp-core.transport-factory");
    }
    function at(e3) {
      try {
        return process.kill(e3, 0), true;
      } catch {
        return false;
      }
    }
    function ct(e3) {
      const t3 = e3.close.bind(e3);
      let r3;
      return e3.close = async () => {
        if (r3) return r3;
        const n3 = e3.pid;
        return r3 = (async () => {
          try {
            await t3();
          } finally {
            await (async function(e4, t4 = 4500) {
              if (null === e4) return;
              const r4 = Date.now() + t4;
              for (; Date.now() < r4; ) {
                if (!at(e4)) return;
                await new Promise((e5) => setTimeout(e5, 50));
              }
              if (at(e4)) {
                try {
                  process.kill(e4, "SIGKILL");
                } catch {
                  return;
                }
                for (; Date.now() < r4 + 500; ) {
                  if (!at(e4)) return;
                  await new Promise((e5) => setTimeout(e5, 50));
                }
              }
            })(n3);
          }
        })(), r3;
      }, { waitForClose: () => r3 ?? Promise.resolve() };
    }
    function ut(e3) {
      return e3?.length ?? 0;
    }
    function lt(e3) {
      if (!e3) return;
      const t3 = e3.toLowerCase();
      return t3.includes("binary") ? "binary_unavailable" : t3.includes("kernel") || t3.includes("exit code 2") ? "unsupported_kernel" : t3.includes("windows") ? "unsupported_platform" : t3.includes("preflight") ? "preflight_failed" : "unknown";
    }
    function dt(e3, t3) {
      const r3 = (function(e4) {
        return void 0 === e4 ? "no_config" : true === e4.enabled ? "sandbox_enabled" : false === e4.enabled ? "controls_disabled" : "missing_enabled";
      })(t3), n3 = void 0 !== (0, $e.$H)(t3), o2 = (function(e4) {
        if (void 0 !== e4) return (0, y.createHash)("sha256").update((0, Ce.F)(e4)).digest("hex");
      })(t3), s2 = ut(t3?.mcpNetworkAllowlist), i3 = ut(t3?.mcpNetworkDenylist), a3 = ut(t3?.localAgentNetworkAllowlist), c2 = { event: "mcp_stdio_spawn_policy_decision", commandsVersion: "v2", sandboxed: n3, sandboxReason: r3, networkControlsEnabled: true === t3?.enabled, mcpNetworkMode: t3?.mcpNetworkMode, mcpNetworkAllowlistCount: s2, mcpNetworkDenylistCount: i3, localAgentNetworkAllowlistCount: a3, sandboxPolicyHash: o2, hasMcpNetworkAllowlist: s2 > 0, hasMcpNetworkDenylist: i3 > 0, hasLocalAgentNetworkAllowlist: a3 > 0, win32UserExtensionUnsandbox: true === t3?.win32UserExtensionUnsandbox };
      st(e3).info(`MCP stdio spawn policy decision: sandboxed=${String(n3)}, sandboxReason=${r3}, networkControlsEnabled=${String(true === t3?.enabled)}, mcpNetworkMode=${t3?.mcpNetworkMode ?? "unset"}, mcpNetworkAllowlistCount=${s2}, mcpNetworkDenylistCount=${i3}, localAgentNetworkAllowlistCount=${a3}, sandboxPolicyHash=${o2 ?? "none"}`, c2), (0, Pe.FM)("mcp.ext.stdio_spawn_policy", 1, "increment", ["commands_version:v2", `mcp_version:${(0, Pe.XP)()}`, `sandboxed:${String(n3)}`, `sandbox_reason:${r3}`, `network_controls_enabled:${String(true === t3?.enabled)}`]), true === t3?.win32UserExtensionUnsandbox && (0, Pe.FM)("mcp.ext.win32_user_extension_stdio_unsandbox", 1, "increment", ["commands_version:v2", `mcp_version:${(0, Pe.XP)()}`]);
    }
    let pt;
    function ft(e3) {
      if (pt) return pt;
      let t3 = "unknown";
      try {
        const r4 = w.join(e3, "product.json");
        t3 = JSON.parse(_.readFileSync(r4, "utf8")).version || t3;
      } catch (e4) {
        it().warn(`Failed to read Cursor version from product.json, using VSCode version as fallback: ${e4 instanceof Error ? e4.message : String(e4)}`);
      }
      const r3 = `${v.platform()} ${v.arch()}`;
      return pt = `Cursor/${t3} (${r3})`, pt;
    }
    const ht = (e3) => e3.startsWith("./") || e3.startsWith(".\\") || "." === e3, mt = (e3) => e3.startsWith("~") || ht(e3);
    function gt(e3, t3) {
      const r3 = t3;
      if (!r3 || 0 === r3.length) return e3.split(" ").some(mt) ? it().warn("No workspace folders found, using current path for . expansion") : it().debug("No workspace folders found; input has no expandable path segments"), e3;
      const n3 = r3[0].uri.fsPath, o2 = (e4) => w.join(n3, e4.replace(/^\.(?:[\\/])?/, "")), s2 = e3.split(" ");
      s2[0].startsWith("~") ? s2[0] = w.join(v.homedir(), s2[0].slice(1)) : ht(s2[0]) && (s2[0] = o2(s2[0]));
      for (let e4 = 1; e4 < s2.length; e4++) s2[e4].startsWith("~") ? s2[e4] = w.join(v.homedir(), s2[e4].slice(1)) : ht(s2[e4]) && (s2[e4] = o2(s2[e4]));
      return s2.join(" ");
    }
    function yt(e3) {
      return true === (0, i2.TG)(e3.serverUrl)?.rejectsCustomSchemeRedirects || true === e3.restMcpProviderMetadata?.rejectsCustomSchemeRedirects;
    }
    function _t(e3) {
      if (yt(e3)) return true;
      if (false === e3.config?.enabled) return false;
      const t3 = e3.config?.denylist ?? [], r3 = (0, $e.Yl)(e3.serverUrl);
      return !t3.some((e4) => (0, $e.Yl)(e4) === r3);
    }
    function vt(e3) {
      return Object.entries(e3 ?? {}).some(([e4, t3]) => "authorization" === e4.toLowerCase() && t3.trim().length > 0);
    }
    function wt(e3, t3, r3) {
      if (!t3.createHttpFetch) return;
      const n3 = t3.createHttpFetch({ identifier: e3, serverUrl: r3.serverUrl });
      if (n3) return n3;
      st(e3).warn("Host returned no HTTP fetch for MCP server; falling back to default fetch", { serverUrl: r3.serverUrl });
    }
    function bt(e3, t3) {
      if (void 0 === e3.cursorAuthHeaderValue || void 0 === e3.cursorAuthOrigin) return t3;
      const r3 = e3.cursorAuthHeaderValue;
      return (0, Me.u)(() => r3, e3.cursorAuthOrigin, t3 ?? globalThis.fetch.bind(globalThis));
    }
    function St(e3, t3, r3) {
      return e3 && t3 ? async (...n3) => {
        const o2 = await e3(...n3);
        var s2;
        return 401 === o2.status && !t3.firstError && (function(e4, t4) {
          if (!e4) return false;
          try {
            const r4 = new URL(e4), n4 = new URL(t4);
            return r4.origin === n4.origin && r4.pathname === n4.pathname;
          } catch {
            return false;
          }
        })("string" == typeof (s2 = n3[0]) ? s2 : s2.href, r3) && (t3.firstError = (function(e4) {
          const t4 = e4.statusText.trim(), r4 = t4 ? ` ${t4}` : "", n4 = new Error(`HTTP ${e4.status}${r4} from MCP server while using configured Authorization header`);
          return n4.name = "StaticAuthorizationHeaderUnauthorizedError", n4;
        })(o2)), o2;
      } : e3;
    }
    function kt(e3) {
      return vt(e3) ? {} : void 0;
    }
    function Et(e3, t3, r3, n3, o2, s2 = false) {
      const i3 = t3?.firstError;
      if (i3 && !r3.hadAuthRequiredEvent) return st(e3).error("OAuth fallback failed after MCP server returned 401 for configured Authorization header; surfacing original 401", n3 instanceof Error ? n3 : void 0, { transportType: o2, fallback: s2, oauthFallbackError: n3 instanceof Error ? n3.message : String(n3) }), { connectResult: { ok: false, error: i3.message, isRetryable: false } };
    }
    async function xt(e3) {
      const { identifier: t3, authProvider: r3, staticClientInfo: n3, transportServerUrl: o2 } = e3;
      if (!r3) return false;
      if (!n3 && !Oe(o2)) return false;
      try {
        if (await r3.tokens()) return false;
      } catch (r4) {
        return st(t3).warn(`Failed to read OAuth tokens after connect; skipping connect-phase auth for static-client server: ${r4 instanceof Error ? r4.message : String(r4)}`, { transportType: e3.transportType }), false;
      }
      try {
        const n4 = r3.getOAuthHttpFetch?.();
        return "REDIRECT" === await (0, b.j2)(r3, { serverUrl: o2, ...n4 ? { fetchFn: n4 } : {} }) && (st(t3).info("Server connected without stored tokens; interactive OAuth required", { transportType: e3.transportType }), true);
      } catch (r4) {
        return st(t3).warn(`Connect-phase OAuth for static-client server failed; keeping unauthenticated connection: ${r4 instanceof Error ? r4.message : String(r4)}`, { transportType: e3.transportType }), false;
      }
    }
    async function Tt(e3, t3, r3, n3, o2) {
      let s2 = false;
      try {
        const t4 = await e3.tokens();
        s2 = Boolean(t4?.refresh_token);
      } catch (e4) {
        it().warn(`Failed to snapshot OAuth tokens while building needsAuth result: ${e4 instanceof Error ? e4.message : String(e4)}`);
      }
      const i3 = t3.authorizationUrl ?? r3, a3 = e3.getOAuthRefreshDiagnosticsForLog?.();
      return { ok: false, needsAuth: true, authorizationUrl: i3, transport: n3, refreshTokenPresent: s2, hadAuthRequiredEvent: t3.hadAuthRequiredEvent, needsAuthReason: o2, oauthRefreshDiagnostics: a3 };
    }
    async function Ot(e3, t3, r3, n3, s2, a3, c2) {
      try {
        return "streamableHttp" === t3.type ? await (async function(e4, t4, r4, n4, o2, s3, a4 = true) {
          const c3 = { identifier: n4.getMcpPolicyTargetIdentifier?.(e4) ?? e4, serverUrl: t4.serverUrl }, u2 = (0, i2.HZ)(c3), { transportServerUrl: l2, canonicalServerUrl: d2 } = (0, $e.WV)(t4.serverUrl), { authProvider: p2, staticClientInfo: f2 } = await Pt({ identifier: e4, serverInfo: t4, host: n4, authEventSink: o2, canonicalServerUrl: d2, transportServerUrl: l2, suppressOAuth: u2 }), h2 = rt({ identifier: e4, host: n4, serverUrl: d2 }), m2 = kt(t4.headers), g2 = (0, Me.m)(l2, t4.headers), y2 = g2.headers, _2 = bt(g2, wt(e4, n4, t4)), v2 = (function(e5, t5, r5) {
            return (0, i2.HZ)(e5) ? async (n5, o3) => {
              const s4 = "string" == typeof n5 ? n5 : n5.href;
              if (!(0, i2.HZ)({ identifier: e5.identifier, serverUrl: s4 })) return r5(n5, o3);
              const a5 = await t5();
              if (!a5?.trim()) throw new Error("Cursor access token is required for Origin MCP");
              const c4 = new Headers(o3?.headers);
              return c4.set("Authorization", `Bearer ${a5}`), c4.has(Re) || c4.set(Re, globalThis.crypto.randomUUID()), r5(n5, { ...o3, headers: c4, redirect: "manual" });
            } : r5;
          })(c3, () => n4.executeCommand("mcp.cursorAccessToken", { serverIdentifier: e4, serverUrl: t4.serverUrl }), _2 ?? n4.fetch ?? globalThis.fetch.bind(globalThis));
          if (p2 && f2 && p2.saveClientInformation) try {
            await p2.saveClientInformation({ ...f2, redirect_uris: p2.clientMetadata.redirect_uris, grant_types: ["authorization_code", "refresh_token"], response_types: ["code"] });
          } catch (t5) {
            st(e4).warn(`Failed to persist static OAuth client information: ${t5 instanceof Error ? t5.message : String(t5)}`);
          }
          const w2 = new Se(new URL(l2), { ...p2 ? { authProvider: p2 } : {}, ...s3 ? { sessionId: s3.sessionId } : {}, requestInit: { headers: { "User-Agent": ft(n4.getAppRoot()), ...y2 ?? {} } }, fetch: St(nt(n4, "streamableHttp", h2, v2), m2, l2) });
          s3?.protocolVersion && w2.setProtocolVersion(s3.protocolVersion);
          try {
            return await r4.connect(w2), await xt({ identifier: e4, authProvider: p2, staticClientInfo: f2, transportServerUrl: l2, transportType: "streamableHttp" }) ? { connectResult: await Tt(p2, o2.getConnectPhaseAuthRequiredEvidence(), l2, w2, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r4, transport: w2, actualType: "streamableHttp" } };
          } catch (i3) {
            if (s3 && i3 instanceof Error && i3.message.includes("Server already initialized")) return st(e4).warn('Streamable HTTP reconnect hit "Server already initialized"; lifecycle will retry with a fresh initialize (no cached session id)', { transportType: "streamableHttp", sessionReuse: true }), { connectResult: { ok: false, error: i3.message, isRetryable: true, sessionReuseRequired: true, reconnectSession: s3 } };
            if (s3) {
              if (404 === (0, Ne.RI)(i3 instanceof Error ? i3 : new Error(String(i3)))) return st(e4).warn("Streamable HTTP reconnect: HTTP 404 with Mcp-Session-Id — session invalid/expired per MCP spec; not falling back to SSE", { transportType: "streamableHttp" }), { connectResult: { ok: false, error: i3 instanceof Error ? i3.message : String(i3), isRetryable: true } };
            }
            const c4 = o2.getConnectPhaseAuthRequiredEvidence();
            if (c4.hadAuthRequiredEvent && p2) {
              if (Ke(i3, "streamableHttp", p2)) {
                const t5 = i3 instanceof Error ? i3 : new Error(String(i3));
                return st(e4).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (streamableHttp)", { transportType: "streamableHttp" }), { connectResult: { ok: false, error: t5.message, isRetryable: true } };
              }
              return st(e4).info("Connect failed after auth_required; returning needsAuth (streamableHttp)", { transportType: "streamableHttp" }), { connectResult: await Tt(p2, c4, l2, w2, "connect_auth_error") };
            }
            const d3 = Et(e4, m2, c4, i3, "streamableHttp");
            if (d3) return d3;
            if ((0, Ee.qw)(i3) && p2) return st(e4).error(`Auth-related error connecting to streamableHttp server: ${i3 instanceof Error ? i3.message : String(i3)}`, i3 instanceof Error ? i3 : void 0, { transportType: "streamableHttp" }), { connectResult: await Tt(p2, c4, l2, w2, "connect_auth_error") };
            if ((function(e5) {
              if (!(e5 instanceof Error)) return false;
              const t5 = e5.message;
              return t5.includes("Redirect URI is not valid") || t5.includes("redirect_uri_mismatch") || t5.includes("Invalid redirect URI");
            })(i3) && p2) return st(e4).error(`OAuth config error connecting to streamableHttp server: ${i3 instanceof Error ? i3.message : String(i3)}`, i3 instanceof Error ? i3 : void 0, { transportType: "streamableHttp", retryable: false }), { connectResult: await Tt(p2, c4, l2, w2, "oauth_config_error") };
            if ((0, Je.P)(i3)) {
              if (!a4 || u2) {
                const t5 = (0, Je.X)(i3), r5 = !t5;
                return st(e4).warn(t5 ? "Streamable HTTP connect failed with ECONNREFUSED; skipping deprecated SSE fallback and surfacing non-retryable failure" : "Known streamable HTTP server returned a backwards-compatibility status; skipping deprecated SSE fallback and retrying streamable HTTP", { transportType: "streamableHttp", retryable: r5 }), { connectResult: { ok: false, error: i3 instanceof Error ? i3.message : String(i3), isRetryable: r5 } };
              }
              return st(e4).warn(`Error connecting to streamableHttp server, falling back to SSE: ${i3 instanceof Error ? i3.message : String(i3)}`, { transportType: "streamableHttp", fallback: "sse" }), (async function(e5, t5, r5, n5, o3, s4, i4, a5, c5, u3, l3, d4, p3) {
                if (l3) {
                  st(e5).warn("Streamable HTTP reconnect using existing session ID failed; skipping SSE fallback", { transportType: "streamableHttp", sessionReuse: true });
                  return { connectResult: { ok: false, error: d4 instanceof Error ? d4.message : "Existing streamable HTTP session reconnect failed", isRetryable: true } };
                }
                let f3;
                const { headers: h3 } = (0, Me.m)(a5, t5.headers);
                try {
                  return f3 = new de(new URL(a5), { ...n5 ? { authProvider: n5 } : {}, requestInit: { headers: { "User-Agent": ft(s4.getAppRoot()), ...h3 ?? {} } }, fetch: St(nt(s4, "sse", c5, p3), u3, a5) }), await r5.connect(f3), await xt({ identifier: e5, authProvider: n5, staticClientInfo: o3, transportServerUrl: a5, transportType: "sse" }) ? { connectResult: await Tt(n5, i4.getConnectPhaseAuthRequiredEvidence(), a5, f3, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r5, transport: f3, actualType: "sse" } };
                } catch (t6) {
                  const o4 = i4.getConnectPhaseAuthRequiredEvidence();
                  if (o4.hadAuthRequiredEvent && n5) {
                    if (Ke(t6, "sse", n5)) {
                      const r6 = t6 instanceof Error ? t6 : new Error(String(t6));
                      return st(e5).info("SSE fallback failed after auth_required with retryable OAuth/transport error; returning retryable failure", { transportType: "sse", fallback: true }), { connectResult: { ok: false, error: r6.message, isRetryable: true } };
                    }
                    return st(e5).info("SSE fallback failed after auth_required; returning needsAuth", { transportType: "sse", fallback: true }), { connectResult: await Tt(n5, o4, a5, f3, "sse_fallback_auth_error") };
                  }
                  const s5 = Et(e5, u3, o4, t6, "sse", true);
                  if (s5) return s5;
                  if (f3 && (0, Ee.qw)(t6) && n5) return st(e5).warn("Auth-related error connecting to SSE server (fallback)"), { connectResult: await Tt(n5, o4, a5, f3, "sse_fallback_auth_error") };
                  r5.close();
                  const c6 = t6 instanceof Error ? t6 : new Error(String(t6)), l4 = !(0, Je.X)(c6) && ((0, Ee.FI)(c6, "sse").retryable || It(c6));
                  return st(e5).error(`Error connecting to SSE server after fallback: ${c6.message}`, c6, { transportType: "sse", fallback: true, retryable: l4 }), { connectResult: { ok: false, error: c6.message, isRetryable: l4 } };
                }
              })(e4, t4, r4, p2, f2, n4, o2, l2, h2, m2, s3, i3, _2);
            }
            const g3 = i3 instanceof Error ? i3 : new Error(String(i3)), y3 = (0, Ee.FI)(g3, "streamableHttp").retryable || It(i3);
            return st(e4).warn(`Transient error connecting to streamableHttp server: ${g3.message}`, { transportType: "streamableHttp", retryable: y3 }), { connectResult: { ok: false, error: g3.message, isRetryable: y3 } };
          }
        })(e3, t3, r3, n3, s2, a3, c2?.allowDeprecatedSseFallback ?? true) : "stdio" === t3.type ? await (async function(e4, t4, r4, n4) {
          const s3 = n4.getWorkspaceFolders(), i3 = { WORKSPACE_FOLDER_PATHS: s3?.map((e5) => e5.uri.fsPath).join(",") ?? "", npm_config_yes: "true", NPM_CONFIG_YES: "true" }, a4 = gt(t4.command, s3);
          let c3, u2;
          if (t4.args && t4.args.length > 0) c3 = a4, u2 = t4.args.map((e5) => gt(e5, s3));
          else {
            const e5 = a4.split(" ");
            c3 = e5[0], u2 = e5.slice(1);
          }
          const l2 = n4.getSpawnEnv();
          let d2 = v.homedir();
          if (t4.cwd) d2 = gt(t4.cwd, s3);
          else if (t4.projectPath) {
            const e5 = t4.projectPath.split("-").slice(1).join("-"), r5 = s3?.find((t5) => e5 && t5.uri.fsPath.endsWith(e5));
            r5 && (d2 = r5.uri.fsPath);
          }
          const p2 = { ...l2, ...i3, ...t4.env }, f2 = await n4.getMcpNetworkControlsConfig?.({ command: [t4.command, ...t4.args ?? []].join(" ") });
          dt(e4, f2);
          const h2 = (0, $e.$H)(f2);
          let m2;
          if (void 0 !== h2) {
            const { SandboxUnsupportedError: t5, spawnInSandbox: r5 } = await Promise.resolve().then(o.bind(o, 6702)), n5 = await (0, Ie.I)(h2, d2);
            st(e4).info(`MCP stdio sandbox spawn configured: mcpNetworkMode=${h2.mcpNetworkMode ?? "unset"}, policyType=${n5.type}`), m2 = (o2, s4, i4) => {
              try {
                return r5(o2, s4, i4, n5);
              } catch (r6) {
                if (r6 instanceof t5) throw new Ae.c(e4, r6);
                throw r6;
              }
            };
          }
          const g2 = new _e({ cwd: d2, command: c3, args: u2, env: p2, stderr: "pipe", ...m2 ? { spawn: m2 } : {} }), y2 = ct(g2);
          let _2 = "";
          g2.stderr?.on("data", (t5) => {
            const r5 = t5.toString();
            if (st(e4).error(`${r5}`, void 0, void 0, { localOnly: true }), _2.length < Ne.uO) {
              const e5 = Ne.uO - _2.length;
              _2 += r5.slice(0, e5);
            }
          });
          try {
            return await r4.connect(g2), { connectResult: { ok: true, client: r4, transport: g2, actualType: "stdio" } };
          } catch (r5) {
            try {
              await y2.waitForClose();
            } catch (t5) {
              st(e4).debug(`Error waiting for failed stdio transport to exit: ${t5 instanceof Error ? t5.message : String(t5)}`);
            }
            if (r5 instanceof Ae.c) {
              const { getLastSandboxFailureReason: t5 } = await Promise.resolve().then(o.bind(o, 6702)), n6 = lt(t5());
              return st(e4).error(`MCP stdio sandbox unavailable: ${r5.message}${n6 ? `; sandboxFailureReasonClass=${n6}` : ""}`, void 0, { event: "mcp_stdio_sandbox_unavailable", sandboxFailureReasonClass: n6, mcpNetworkMode: h2?.mcpNetworkMode }), { connectResult: { ok: false, error: r5.message, isRetryable: false } };
            }
            if (void 0 !== h2) {
              const { getLastSandboxFailureReason: t5 } = await Promise.resolve().then(o.bind(o, 6702)), n6 = lt(t5());
              st(e4).warn(`MCP stdio sandboxed connect failed: ${r5.message}${n6 ? `; sandboxFailureReasonClass=${n6}` : ""}`, { event: "mcp_stdio_sandbox_connect_failed", sandboxFailureReasonClass: n6, stderrCaptured: _2.length > 0, mcpNetworkMode: h2.mcpNetworkMode });
            }
            const n5 = (function(e5, t5) {
              return (0, ke.v)("stdioConnectFailuresAreNonRetryable", { identifier: e5, serverInfo: t5 }) ?? true;
            })(e4, t4), s4 = (0, Ne.AR)(r5, _2, n5, c3, u2);
            return { connectResult: { ok: false, error: r5.message, isRetryable: s4 } };
          }
        })(e3, t3, r3, n3) : "sse" === t3.type ? await (async function(e4, t4, r4, n4, o2) {
          const { transportServerUrl: s3, canonicalServerUrl: i3 } = (0, $e.WV)(t4.serverUrl), { authProvider: a4, staticClientInfo: c3 } = await Pt({ identifier: e4, serverInfo: t4, host: n4, authEventSink: o2, canonicalServerUrl: i3, transportServerUrl: s3 }), u2 = rt({ identifier: e4, host: n4, serverUrl: i3 }), l2 = kt(t4.headers), d2 = (0, Me.m)(s3, t4.headers), p2 = d2.headers, f2 = bt(d2, wt(e4, n4, t4)), h2 = new de(new URL(s3), { ...a4 ? { authProvider: a4 } : {}, requestInit: { headers: { "User-Agent": ft(n4.getAppRoot()), ...p2 ?? {} } }, fetch: St(nt(n4, "sse", u2, f2), l2, s3) });
          try {
            return await r4.connect(h2), await xt({ identifier: e4, authProvider: a4, staticClientInfo: c3, transportServerUrl: s3, transportType: "sse" }) ? { connectResult: await Tt(a4, o2.getConnectPhaseAuthRequiredEvidence(), s3, h2, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r4, transport: h2, actualType: "sse" } };
          } catch (t5) {
            const n5 = o2.getConnectPhaseAuthRequiredEvidence();
            if (n5.hadAuthRequiredEvent && a4) {
              if (Ke(t5, "sse", a4)) {
                const r5 = t5 instanceof Error ? t5 : new Error(String(t5));
                return st(e4).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (sse)", { transportType: "sse" }), { connectResult: { ok: false, error: r5.message, isRetryable: true } };
              }
              return { connectResult: await Tt(a4, n5, s3, h2, "connect_auth_error") };
            }
            const i4 = t5 instanceof Error ? t5 : new Error(String(t5)), c4 = Et(e4, l2, n5, i4, "sse");
            return c4 || ((0, Ee.qw)(t5) && a4 ? { connectResult: await Tt(a4, n5, s3, h2, "connect_auth_error") } : (r4.close(), { connectResult: { ok: false, error: i4.message, isRetryable: (0, Ee.FI)(i4, "sse").retryable || It(i4) } }));
          }
        })(e3, t3, r3, n3, s2) : { connectResult: { ok: false, error: `Unknown server type: ${t3.type}`, isRetryable: false } };
      } finally {
        s2.markConnectPhaseComplete();
      }
    }
    async function Pt(e3) {
      if (e3.suppressOAuth) return {};
      if (vt(e3.serverInfo.headers)) return {};
      return (0, ot.rl)()(e3);
    }
    function It(e3) {
      if (e3 instanceof Error) {
        const t3 = (0, Ne.RI)(e3);
        if (void 0 !== t3) return t3 >= 500 && t3 < 600;
      }
      return false;
    }
    async function Ct() {
      if (a2.env.remoteName) return false;
      try {
        return await a2.cursor.getMcpSharedProcessRoutingEnabled();
      } catch {
        return false;
      }
    }
    async function At(e3) {
      return !await Ct() || (t3 = e3.serverInfo, !("streamableHttp" !== t3?.type || "string" != typeof t3.serverUrl || !t3.serverUrl.startsWith("mcp-provider://")));
      var t3;
    }
    var $t = o(1455);
    "function" == typeof SuppressedError && SuppressedError;
    Error;
    Error;
    "function" == typeof SuppressedError && SuppressedError;
    var Rt = o(7381), Nt = o(5521), Mt = o(7246), Jt = o(7888), jt = o(4287);
    const Dt = Rt.xI("ZodMiniType", (e3, t3) => {
      if (!e3._zod) throw new Error("Uninitialized schema in ZodMiniType.");
      Nt.W4.init(e3, t3), e3.def = t3, e3.parse = (t4, r3) => jt.qg(e3, t4, r3, { callee: e3.parse }), e3.safeParse = (t4, r3) => jt.xL(e3, t4, r3), e3.parseAsync = async (t4, r3) => jt.EJ(e3, t4, r3, { callee: e3.parseAsync }), e3.safeParseAsync = async (t4, r3) => jt.bp(e3, t4, r3), e3.check = (...r3) => e3.clone({ ...t3, checks: [...t3.checks ?? [], ...r3.map((e4) => "function" == typeof e4 ? { _zod: { check: e4, def: { check: "custom" }, onattach: [] } } : e4)] }), e3.clone = (t4, r3) => Mt.o8(e3, t4, r3), e3.brand = () => e3, e3.register = (t4, r3) => (t4.add(e3, r3), e3);
    }), Ft = Rt.xI("ZodMiniString", (e3, t3) => {
      Nt.$v.init(e3, t3), Dt.init(e3, t3);
    });
    function qt(e3) {
      return Jt.Rl(Ft, e3);
    }
    const zt = Rt.xI("ZodMiniNever", (e3, t3) => {
      Nt.Um.init(e3, t3), Dt.init(e3, t3);
    });
    function Ut(e3) {
      return Jt.G8(zt, e3);
    }
    const Bt = Rt.xI("ZodMiniArray", (e3, t3) => {
      Nt.$p.init(e3, t3), Dt.init(e3, t3);
    });
    function Lt(e3, t3) {
      return new Bt({ type: "array", element: e3, ...Mt.A2(t3) });
    }
    const Vt = Rt.xI("ZodMiniObject", (e3, t3) => {
      Nt.L8.init(e3, t3), Dt.init(e3, t3), Mt.gJ(e3, "shape", () => t3.shape);
    });
    function Kt(e3, t3) {
      const r3 = { type: "object", get shape() {
        return Mt.Vy(this, "shape", { ...e3 }), this.shape;
      }, ...Mt.A2(t3) };
      return new Vt(r3);
    }
    const Zt = Rt.xI("ZodMiniUnion", (e3, t3) => {
      Nt.cu.init(e3, t3), Dt.init(e3, t3);
    });
    function Wt(e3, t3) {
      return new Zt({ type: "union", options: e3, ...Mt.A2(t3) });
    }
    const Ht = Rt.xI("ZodMiniRecord", (e3, t3) => {
      Nt.h.init(e3, t3), Dt.init(e3, t3);
    });
    function Yt(e3, t3, r3) {
      return new Ht({ type: "record", keyType: e3, valueType: t3, ...Mt.A2(r3) });
    }
    const Gt = Rt.xI("ZodMiniEnum", (e3, t3) => {
      Nt.VO.init(e3, t3), Dt.init(e3, t3);
    });
    function Xt(e3, t3) {
      const r3 = Array.isArray(e3) ? Object.fromEntries(e3.map((e4) => [e4, e4])) : e3;
      return new Gt({ type: "enum", entries: r3, ...Mt.A2(t3) });
    }
    const Qt = Rt.xI("ZodMiniLiteral", (e3, t3) => {
      Nt.nu.init(e3, t3), Dt.init(e3, t3);
    });
    function er(e3, t3) {
      return new Qt({ type: "literal", values: Array.isArray(e3) ? e3 : [e3], ...Mt.A2(t3) });
    }
    const tr = Rt.xI("ZodMiniOptional", (e3, t3) => {
      Nt.ig.init(e3, t3), Dt.init(e3, t3);
    });
    function rr(e3) {
      return new tr({ type: "optional", innerType: e3 });
    }
    const nr = Kt({ CLIENT_ID: qt(), CLIENT_SECRET: rr(qt()), scopes: rr(Lt(qt())) }), or = (sr = { caBundle: qt().check(Jt.WN(), Jt.m9(1), Jt.Eb(131072)) }, new Vt({ type: "object", get shape() {
      return Mt.Vy(this, "shape", { ...sr }), this.shape;
    }, catchall: Ut(), ...Mt.A2(ir) }));
    var sr, ir;
    const ar = Wt([Kt({ type: rr(er("stdio")), command: qt(), args: rr(Lt(qt())), env: rr(Yt(qt(), qt())), envFile: rr(qt()), cwd: rr(qt()), enabledTools: rr(Lt(qt())) }), Kt({ type: rr(Xt(["http", "sse"])), url: qt(), headers: rr(Yt(qt(), qt())), auth: rr(nr), tls: rr(or), placement: rr(Xt(["server", "client"])), enabledTools: rr(Lt(qt())) })]);
    Kt({ mcpServers: Yt(qt(), ar) });
    Error;
    var cr;
    !(function(e3) {
      e3[e3.lineFeed = 10] = "lineFeed", e3[e3.carriageReturn = 13] = "carriageReturn", e3[e3.space = 32] = "space", e3[e3._0 = 48] = "_0", e3[e3._1 = 49] = "_1", e3[e3._2 = 50] = "_2", e3[e3._3 = 51] = "_3", e3[e3._4 = 52] = "_4", e3[e3._5 = 53] = "_5", e3[e3._6 = 54] = "_6", e3[e3._7 = 55] = "_7", e3[e3._8 = 56] = "_8", e3[e3._9 = 57] = "_9", e3[e3.a = 97] = "a", e3[e3.b = 98] = "b", e3[e3.c = 99] = "c", e3[e3.d = 100] = "d", e3[e3.e = 101] = "e", e3[e3.f = 102] = "f", e3[e3.g = 103] = "g", e3[e3.h = 104] = "h", e3[e3.i = 105] = "i", e3[e3.j = 106] = "j", e3[e3.k = 107] = "k", e3[e3.l = 108] = "l", e3[e3.m = 109] = "m", e3[e3.n = 110] = "n", e3[e3.o = 111] = "o", e3[e3.p = 112] = "p", e3[e3.q = 113] = "q", e3[e3.r = 114] = "r", e3[e3.s = 115] = "s", e3[e3.t = 116] = "t", e3[e3.u = 117] = "u", e3[e3.v = 118] = "v", e3[e3.w = 119] = "w", e3[e3.x = 120] = "x", e3[e3.y = 121] = "y", e3[e3.z = 122] = "z", e3[e3.A = 65] = "A", e3[e3.B = 66] = "B", e3[e3.C = 67] = "C", e3[e3.D = 68] = "D", e3[e3.E = 69] = "E", e3[e3.F = 70] = "F", e3[e3.G = 71] = "G", e3[e3.H = 72] = "H", e3[e3.I = 73] = "I", e3[e3.J = 74] = "J", e3[e3.K = 75] = "K", e3[e3.L = 76] = "L", e3[e3.M = 77] = "M", e3[e3.N = 78] = "N", e3[e3.O = 79] = "O", e3[e3.P = 80] = "P", e3[e3.Q = 81] = "Q", e3[e3.R = 82] = "R", e3[e3.S = 83] = "S", e3[e3.T = 84] = "T", e3[e3.U = 85] = "U", e3[e3.V = 86] = "V", e3[e3.W = 87] = "W", e3[e3.X = 88] = "X", e3[e3.Y = 89] = "Y", e3[e3.Z = 90] = "Z", e3[e3.asterisk = 42] = "asterisk", e3[e3.backslash = 92] = "backslash", e3[e3.closeBrace = 125] = "closeBrace", e3[e3.closeBracket = 93] = "closeBracket", e3[e3.colon = 58] = "colon", e3[e3.comma = 44] = "comma", e3[e3.dot = 46] = "dot", e3[e3.doubleQuote = 34] = "doubleQuote", e3[e3.minus = 45] = "minus", e3[e3.openBrace = 123] = "openBrace", e3[e3.openBracket = 91] = "openBracket", e3[e3.plus = 43] = "plus", e3[e3.slash = 47] = "slash", e3[e3.formFeed = 12] = "formFeed", e3[e3.tab = 9] = "tab";
    })(cr || (cr = {}));
    new Array(20).fill(0).map((e3, t3) => " ".repeat(t3));
    const ur = 200;
    new Array(ur).fill(0).map((e3, t3) => "\n" + " ".repeat(t3)), new Array(ur).fill(0).map((e3, t3) => "\r" + " ".repeat(t3)), new Array(ur).fill(0).map((e3, t3) => "\r\n" + " ".repeat(t3)), new Array(ur).fill(0).map((e3, t3) => "\n" + "	".repeat(t3)), new Array(ur).fill(0).map((e3, t3) => "\r" + "	".repeat(t3)), new Array(ur).fill(0).map((e3, t3) => "\r\n" + "	".repeat(t3));
    var lr;
    !(function(e3) {
      e3.DEFAULT = { allowTrailingComma: false };
    })(lr || (lr = {}));
    var dr, pr;
    !(function(e3) {
      e3[e3.None = 0] = "None", e3[e3.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e3[e3.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e3[e3.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e3[e3.InvalidUnicode = 4] = "InvalidUnicode", e3[e3.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e3[e3.InvalidCharacter = 6] = "InvalidCharacter";
    })(dr || (dr = {})), (function(e3) {
      e3[e3.OpenBraceToken = 1] = "OpenBraceToken", e3[e3.CloseBraceToken = 2] = "CloseBraceToken", e3[e3.OpenBracketToken = 3] = "OpenBracketToken", e3[e3.CloseBracketToken = 4] = "CloseBracketToken", e3[e3.CommaToken = 5] = "CommaToken", e3[e3.ColonToken = 6] = "ColonToken", e3[e3.NullKeyword = 7] = "NullKeyword", e3[e3.TrueKeyword = 8] = "TrueKeyword", e3[e3.FalseKeyword = 9] = "FalseKeyword", e3[e3.StringLiteral = 10] = "StringLiteral", e3[e3.NumericLiteral = 11] = "NumericLiteral", e3[e3.LineCommentTrivia = 12] = "LineCommentTrivia", e3[e3.BlockCommentTrivia = 13] = "BlockCommentTrivia", e3[e3.LineBreakTrivia = 14] = "LineBreakTrivia", e3[e3.Trivia = 15] = "Trivia", e3[e3.Unknown = 16] = "Unknown", e3[e3.EOF = 17] = "EOF";
    })(pr || (pr = {}));
    var fr;
    !(function(e3) {
      e3[e3.InvalidSymbol = 1] = "InvalidSymbol", e3[e3.InvalidNumberFormat = 2] = "InvalidNumberFormat", e3[e3.PropertyNameExpected = 3] = "PropertyNameExpected", e3[e3.ValueExpected = 4] = "ValueExpected", e3[e3.ColonExpected = 5] = "ColonExpected", e3[e3.CommaExpected = 6] = "CommaExpected", e3[e3.CloseBraceExpected = 7] = "CloseBraceExpected", e3[e3.CloseBracketExpected = 8] = "CloseBracketExpected", e3[e3.EndOfFileExpected = 9] = "EndOfFileExpected", e3[e3.InvalidCommentToken = 10] = "InvalidCommentToken", e3[e3.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e3[e3.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e3[e3.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e3[e3.InvalidUnicode = 14] = "InvalidUnicode", e3[e3.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e3[e3.InvalidCharacter = 16] = "InvalidCharacter";
    })(fr || (fr = {}));
    var hr = o(7949), mr = o(753), gr = o(3002);
    const yr = (0, gr.cF)(/* @__PURE__ */ Symbol("otel.span"), void 0), _r = (0, gr.cF)(/* @__PURE__ */ Symbol("otel.root_span"), void 0), vr = (0, gr.cF)(/* @__PURE__ */ Symbol("otel.root_start_ms"), void 0), wr = (0, gr.cF)(/* @__PURE__ */ Symbol("otel.suppress_child_spans"), false), br = (0, gr.cF)(/* @__PURE__ */ Symbol("otel.inheritable_span_attributes"), {});
    let Sr;
    function kr(e3) {
      return e3.name || "anonymous-context";
    }
    function Er(e3, t3) {
      return !!t3 && (e3.get(wr) || (r3 = kr(e3), Sr?.(r3) ?? false));
      var r3;
    }
    function xr(e3 = "context-tracer") {
      return mr.uP.getTracer(e3);
    }
    function Tr(e3, t3) {
      const r3 = xr(), n3 = e3.get(yr);
      if (Er(e3, n3)) return e3;
      const o2 = kr(e3);
      let s2;
      if (n3) {
        const e4 = mr.uP.setSpan(mr._O.active(), n3);
        s2 = r3.startSpan(o2, t3, e4);
      } else s2 = r3.startSpan(o2, t3);
      const i3 = e3.get(br);
      for (const e4 in i3) s2.setAttribute(e4, i3[e4]);
      const a3 = Date.now();
      let c2 = e3.with(yr, s2);
      return n3 || (c2 = c2.with(_r, s2).with(vr, a3)), c2;
    }
    function Or(e3) {
      return e3.get(yr);
    }
    function Pr(e3) {
      try {
        const t3 = Or(e3);
        if (!t3) return;
        const r3 = t3.spanContext(), n3 = e3.get(wr);
        return { traceId: r3.traceId, spanId: r3.spanId, traceFlags: n3 ? 0 : r3.traceFlags, traceState: r3.traceState?.toString() };
      } catch {
        return;
      }
    }
    /* @__PURE__ */ Symbol.for("anysphere.context.activeOtelSpanAls");
    class Ir {
      constructor(e3, t3, r3 = true) {
        this.ctx = e3, this.span = t3, this.shouldEnd = r3;
      }
      [Symbol.dispose]() {
        this.shouldEnd && this.span.end();
      }
    }
    function Cr(e3, t3) {
      const r3 = Er(e3, Or(e3)), n3 = Tr(e3, t3), o2 = Or(n3);
      return new Ir(n3, o2, !r3);
    }
    var Ar = o(7357);
    async function $r(e3, t3, r3) {
      const { max: n3 = 4 } = r3 ?? {}, o2 = (0, Ar.from)(e3.map((e4, t4) => t4)).pipe((0, Ar.map)((r4) => (0, Ar.defer)(() => (0, Ar.from)(t3(e3[r4])).pipe((0, Ar.map)((e4) => ({ idx: r4, v: e4 }))))), (0, Ar.mergeAll)(n3), (0, Ar.reduce)((e4, t4) => (e4[t4.idx] = t4.v, e4), []));
      return (0, Ar.firstValueFrom)(o2);
    }
    Error;
    o(1421);
    var Rr = o(6038);
    function Nr(e3, t3, r3) {
      return Object.defineProperty(e3, t3, { value: r3, writable: true, enumerable: true, configurable: true }), r3;
    }
    function Mr(e3, t3, r3) {
      if ("#" !== r3.charAt(0)) return { kind: "scalar", T: Number(r3) };
      const n3 = t3[Number(r3.slice(1))];
      return "function" == typeof n3 ? { kind: "message", T: n3 } : { kind: "enum", T: e3.getEnumType(n3) };
    }
    class Jr extends Rr.Message {
      static get typeName() {
        const e3 = this;
        return Nr(e3, "typeName", e3.$p() + (function(e4) {
          const t3 = e4[0], r3 = t3.indexOf("|");
          return -1 === r3 ? t3 : t3.slice(0, r3);
        })(e3.$()));
      }
      static get fields() {
        const e3 = this, t3 = e3.$(), r3 = e3.runtime;
        return Nr(e3, "fields", r3.util.newFieldList(() => (function(e4, t4) {
          const r4 = t4[0].split("|"), n3 = t4.slice(1), o2 = [];
          for (let t5 = 1; t5 < r4.length; t5++) {
            const s2 = r4[t5].split(" "), i3 = Number(s2[0]), a3 = s2[1];
            let c2 = s2[2], u2 = s2[3];
            const l2 = c2.charAt(c2.length - 1);
            "?" !== l2 && "*" !== l2 || (u2 = l2, c2 = c2.slice(0, -1));
            const d2 = c2.indexOf(",");
            if (-1 !== d2) {
              o2.push({ no: i3, name: a3, kind: "map", K: Number(c2.slice(0, d2)), V: Mr(e4, n3, c2.slice(d2 + 1)) });
              continue;
            }
            const p2 = Object.assign({ no: i3, name: a3 }, Mr(e4, n3, c2));
            "?" === u2 ? p2.opt = true : "*" === u2 ? p2.repeated = true : void 0 !== u2 && (p2.oneof = u2), o2.push(p2);
          }
          return o2;
        })(r3, t3)));
      }
    }
    function jr(e3, t3, r3, n3, o2) {
      const s2 = r3.slice(r3.lastIndexOf(".") + 1);
      let i3, a3;
      if (1 === o2) {
        const e4 = (function(e5) {
          return (e5.charAt(0) + e5.slice(1).replace(/[A-Z]/g, (e6) => "_" + e6)).toUpperCase() + "_";
        })(s2);
        a3 = n3.map((e5) => e5[1]), i3 = a3.map((t4) => e4 + t4);
      } else i3 = n3.map((e4) => e4[1]), a3 = void 0 === o2 ? (function(e4, t4) {
        const r4 = (e4.charAt(0) + e4.slice(1).replace(/[A-Z]/g, (e5) => "_" + e5)).toLowerCase() + "_", n4 = [];
        for (const e5 of t4) {
          if (!e5.toLowerCase().startsWith(r4)) return t4.slice();
          const o3 = e5.slice(r4.length);
          if ("" === o3 || /^[0-9]/.test(o3)) return t4.slice();
          n4.push(o3);
        }
        return n4;
      })(s2, i3) : o2;
      const c2 = {}, u2 = [];
      for (let e4 = 0; e4 < n3.length; e4++) {
        const t4 = n3[e4][0];
        c2[a3[e4]] = t4, c2[t4] = a3[e4], u2.push({ no: t4, name: i3[e4] });
      }
      return e3.util.setEnumType(c2, t3 + r3, u2), c2;
    }
    class Dr extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Fr extends Dr {
      constructor(e3) {
        super(), this.name = "", this.providerIdentifier = "", this.toolName = "", this.description = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Fr().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Fr().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Fr().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Fr, e3, t3);
      }
      static $() {
        return ["McpToolDefinition|1 name 9|4 provider_identifier 9|5 tool_name 9|2 description 9|3 input_schema #0|6 input_schema_json 9?|7 output_schema_json 9?|8 annotations_json 9?|9 meta_json 9?", Rr.Value];
      }
    }
    class qr extends Dr {
      constructor(e3) {
        super(), this.serverName = "", this.instructions = "", this.serverIdentifier = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qr().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qr().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qr().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qr, e3, t3);
      }
      static $() {
        return ["McpInstructions|1 server_name 9|2 instructions 9|3 server_identifier 9"];
      }
    }
    class zr extends Dr {
      constructor(e3) {
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zr().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zr().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zr().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zr, e3, t3);
      }
      static $() {
        return ["McpDescriptor|1 server_name 9|2 server_identifier 9|3 folder_path 9?|4 server_use_instructions 9?|5 tools #0*|7 plugin 9?|8 marketplace 9?|9 plugin_db_id 9?|10 marketplace_id 9?", Ur];
      }
    }
    class Ur extends Dr {
      constructor(e3) {
        super(), this.toolName = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ur().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ur().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ur().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ur, e3, t3);
      }
      static $() {
        return ["McpToolDescriptor|1 tool_name 9|2 definition_path 9?|3 description 9?|4 input_schema #0?|5 input_schema_json 9?|6 annotations_json 9?", Rr.Value];
      }
    }
    class Br extends Dr {
      constructor(e3) {
        super(), this.enabled = false, this.workspaceProjectDir = "", this.mcpDescriptors = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Br().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Br().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Br().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Br, e3, t3);
      }
      static $() {
        return ["McpFileSystemOptions|1 enabled 8|2 workspace_project_dir 9|3 mcp_descriptors #0*", zr];
      }
    }
    class Lr extends Dr {
      constructor(e3) {
        super(), this.enabled = false, this.mcpDescriptors = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Lr().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Lr().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Lr().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Lr, e3, t3);
      }
      static $() {
        return ["McpMetaToolOptions|1 enabled 8|2 mcp_descriptors #0*", zr];
      }
    }
    o(3015);
    function Vr(e3) {
      return !!e3._zod;
    }
    function Kr(e3, t3) {
      if (Vr(e3)) {
        return jt.xL(e3, t3);
      }
      return e3.safeParse(t3);
    }
    function Zr(e3) {
      if (!e3) return;
      let t3;
      if (Vr(e3)) {
        const r3 = e3;
        t3 = r3._zod?.def?.shape;
      } else {
        t3 = e3.shape;
      }
      if (t3) {
        if ("function" == typeof t3) try {
          return t3();
        } catch {
          return;
        }
        return t3;
      }
    }
    function Wr(e3) {
      return "completed" === e3 || "failed" === e3 || "cancelled" === e3;
    }
    /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
    new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
    function Hr(e3) {
      const t3 = Zr(e3), r3 = t3?.method;
      if (!r3) throw new Error("Schema is missing a method literal");
      const n3 = (function(e4) {
        if (Vr(e4)) {
          const t5 = e4, r5 = t5._zod?.def;
          if (r5) {
            if (void 0 !== r5.value) return r5.value;
            if (Array.isArray(r5.values) && r5.values.length > 0) return r5.values[0];
          }
        }
        const t4 = e4._def;
        if (t4) {
          if (void 0 !== t4.value) return t4.value;
          if (Array.isArray(t4.values) && t4.values.length > 0) return t4.values[0];
        }
        const r4 = e4.value;
        if (void 0 !== r4) return r4;
      })(r3);
      if ("string" != typeof n3) throw new Error("Schema method literal must be a string");
      return n3;
    }
    function Yr(e3, t3) {
      const r3 = Kr(e3, t3);
      if (!r3.success) throw r3.error;
      return r3.data;
    }
    class Gr {
      constructor(e3) {
        this._options = e3, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(ue.Sq, (e4) => {
          this._oncancel(e4);
        }), this.setNotificationHandler(ue._r, (e4) => {
          this._onprogress(e4);
        }), this.setRequestHandler(ue.tC, (e4) => ({})), this._taskStore = e3?.taskStore, this._taskMessageQueue = e3?.taskMessageQueue, this._taskStore && (this.setRequestHandler(ue.Ql, async (e4, t3) => {
          const r3 = await this._taskStore.getTask(e4.params.taskId, t3.sessionId);
          if (!r3) throw new ue.Nh(ue.O4.InvalidParams, "Failed to retrieve task: Task not found");
          return { ...r3 };
        }), this.setRequestHandler(ue.oQ, async (e4, t3) => {
          const r3 = async () => {
            const n3 = e4.params.taskId;
            if (this._taskMessageQueue) {
              let e5;
              for (; e5 = await this._taskMessageQueue.dequeue(n3, t3.sessionId); ) {
                if ("response" === e5.type || "error" === e5.type) {
                  const t4 = e5.message, r4 = t4.id, n4 = this._requestResolvers.get(r4);
                  if (n4) if (this._requestResolvers.delete(r4), "response" === e5.type) n4(t4);
                  else {
                    const e6 = t4;
                    n4(new ue.Nh(e6.error.code, e6.error.message, e6.error.data));
                  }
                  else {
                    const t5 = "response" === e5.type ? "Response" : "Error";
                    this._onerror(new Error(`${t5} handler missing for request ${r4}`));
                  }
                  continue;
                }
                await this._transport?.send(e5.message, { relatedRequestId: t3.requestId });
              }
            }
            const o2 = await this._taskStore.getTask(n3, t3.sessionId);
            if (!o2) throw new ue.Nh(ue.O4.InvalidParams, `Task not found: ${n3}`);
            if (!Wr(o2.status)) return await this._waitForTaskUpdate(n3, t3.signal), await r3();
            if (Wr(o2.status)) {
              const e5 = await this._taskStore.getTaskResult(n3, t3.sessionId);
              return this._clearTaskQueue(n3), { ...e5, _meta: { ...e5._meta, [ue.EV]: { taskId: n3 } } };
            }
            return await r3();
          };
          return await r3();
        }), this.setRequestHandler(ue.zR, async (e4, t3) => {
          try {
            const { tasks: r3, nextCursor: n3 } = await this._taskStore.listTasks(e4.params?.cursor, t3.sessionId);
            return { tasks: r3, nextCursor: n3, _meta: {} };
          } catch (e5) {
            throw new ue.Nh(ue.O4.InvalidParams, `Failed to list tasks: ${e5 instanceof Error ? e5.message : String(e5)}`);
          }
        }), this.setRequestHandler(ue.gd, async (e4, t3) => {
          try {
            const r3 = await this._taskStore.getTask(e4.params.taskId, t3.sessionId);
            if (!r3) throw new ue.Nh(ue.O4.InvalidParams, `Task not found: ${e4.params.taskId}`);
            if (Wr(r3.status)) throw new ue.Nh(ue.O4.InvalidParams, `Cannot cancel task in terminal status: ${r3.status}`);
            await this._taskStore.updateTaskStatus(e4.params.taskId, "cancelled", "Client cancelled task execution.", t3.sessionId), this._clearTaskQueue(e4.params.taskId);
            const n3 = await this._taskStore.getTask(e4.params.taskId, t3.sessionId);
            if (!n3) throw new ue.Nh(ue.O4.InvalidParams, `Task not found after cancellation: ${e4.params.taskId}`);
            return { _meta: {}, ...n3 };
          } catch (e5) {
            if (e5 instanceof ue.Nh) throw e5;
            throw new ue.Nh(ue.O4.InvalidRequest, `Failed to cancel task: ${e5 instanceof Error ? e5.message : String(e5)}`);
          }
        }));
      }
      async _oncancel(e3) {
        if (!e3.params.requestId) return;
        const t3 = this._requestHandlerAbortControllers.get(e3.params.requestId);
        t3?.abort(e3.params.reason);
      }
      _setupTimeout(e3, t3, r3, n3, o2 = false) {
        this._timeoutInfo.set(e3, { timeoutId: setTimeout(n3, t3), startTime: Date.now(), timeout: t3, maxTotalTimeout: r3, resetTimeoutOnProgress: o2, onTimeout: n3 });
      }
      _resetTimeout(e3) {
        const t3 = this._timeoutInfo.get(e3);
        if (!t3) return false;
        const r3 = Date.now() - t3.startTime;
        if (t3.maxTotalTimeout && r3 >= t3.maxTotalTimeout) throw this._timeoutInfo.delete(e3), ue.Nh.fromError(ue.O4.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: t3.maxTotalTimeout, totalElapsed: r3 });
        return clearTimeout(t3.timeoutId), t3.timeoutId = setTimeout(t3.onTimeout, t3.timeout), true;
      }
      _cleanupTimeout(e3) {
        const t3 = this._timeoutInfo.get(e3);
        t3 && (clearTimeout(t3.timeoutId), this._timeoutInfo.delete(e3));
      }
      async connect(e3) {
        this._transport = e3;
        const t3 = this.transport?.onclose;
        this._transport.onclose = () => {
          t3?.(), this._onclose();
        };
        const r3 = this.transport?.onerror;
        this._transport.onerror = (e4) => {
          r3?.(e4), this._onerror(e4);
        };
        const n3 = this._transport?.onmessage;
        this._transport.onmessage = (e4, t4) => {
          n3?.(e4, t4), (0, ue.ig)(e4) || (0, ue.LW)(e4) ? this._onresponse(e4) : (0, ue.vo)(e4) ? this._onrequest(e4, t4) : (0, ue.lg)(e4) ? this._onnotification(e4) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(e4)}`));
        }, await this._transport.start();
      }
      _onclose() {
        const e3 = this._responseHandlers;
        this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
        const t3 = ue.Nh.fromError(ue.O4.ConnectionClosed, "Connection closed");
        this._transport = void 0, this.onclose?.();
        for (const r3 of e3.values()) r3(t3);
      }
      _onerror(e3) {
        this.onerror?.(e3);
      }
      _onnotification(e3) {
        const t3 = this._notificationHandlers.get(e3.method) ?? this.fallbackNotificationHandler;
        void 0 !== t3 && Promise.resolve().then(() => t3(e3)).catch((e4) => this._onerror(new Error(`Uncaught error in notification handler: ${e4}`)));
      }
      _onrequest(e3, t3) {
        const r3 = this._requestHandlers.get(e3.method) ?? this.fallbackRequestHandler, n3 = this._transport, o2 = e3.params?._meta?.[ue.EV]?.taskId;
        if (void 0 === r3) {
          const t4 = { jsonrpc: "2.0", id: e3.id, error: { code: ue.O4.MethodNotFound, message: "Method not found" } };
          return void (o2 && this._taskMessageQueue ? this._enqueueTaskMessage(o2, { type: "error", message: t4, timestamp: Date.now() }, n3?.sessionId).catch((e4) => this._onerror(new Error(`Failed to enqueue error response: ${e4}`))) : n3?.send(t4).catch((e4) => this._onerror(new Error(`Failed to send an error response: ${e4}`))));
        }
        const s2 = new AbortController();
        this._requestHandlerAbortControllers.set(e3.id, s2);
        const i3 = (0, ue.bZ)(e3.params) ? e3.params.task : void 0, a3 = this._taskStore ? this.requestTaskStore(e3, n3?.sessionId) : void 0, c2 = { signal: s2.signal, sessionId: n3?.sessionId, _meta: e3.params?._meta, sendNotification: async (t4) => {
          const r4 = { relatedRequestId: e3.id };
          o2 && (r4.relatedTask = { taskId: o2 }), await this.notification(t4, r4);
        }, sendRequest: async (t4, r4, n4) => {
          const s3 = { ...n4, relatedRequestId: e3.id };
          o2 && !s3.relatedTask && (s3.relatedTask = { taskId: o2 });
          const i4 = s3.relatedTask?.taskId ?? o2;
          return i4 && a3 && await a3.updateTaskStatus(i4, "input_required"), await this.request(t4, r4, s3);
        }, authInfo: t3?.authInfo, requestId: e3.id, requestInfo: t3?.requestInfo, taskId: o2, taskStore: a3, taskRequestedTtl: i3?.ttl, closeSSEStream: t3?.closeSSEStream, closeStandaloneSSEStream: t3?.closeStandaloneSSEStream };
        Promise.resolve().then(() => {
          i3 && this.assertTaskHandlerCapability(e3.method);
        }).then(() => r3(e3, c2)).then(async (t4) => {
          if (s2.signal.aborted) return;
          const r4 = { result: t4, jsonrpc: "2.0", id: e3.id };
          o2 && this._taskMessageQueue ? await this._enqueueTaskMessage(o2, { type: "response", message: r4, timestamp: Date.now() }, n3?.sessionId) : await n3?.send(r4);
        }, async (t4) => {
          if (s2.signal.aborted) return;
          const r4 = { jsonrpc: "2.0", id: e3.id, error: { code: Number.isSafeInteger(t4.code) ? t4.code : ue.O4.InternalError, message: t4.message ?? "Internal error", ...void 0 !== t4.data && { data: t4.data } } };
          o2 && this._taskMessageQueue ? await this._enqueueTaskMessage(o2, { type: "error", message: r4, timestamp: Date.now() }, n3?.sessionId) : await n3?.send(r4);
        }).catch((e4) => this._onerror(new Error(`Failed to send response: ${e4}`))).finally(() => {
          this._requestHandlerAbortControllers.delete(e3.id);
        });
      }
      _onprogress(e3) {
        const { progressToken: t3, ...r3 } = e3.params, n3 = Number(t3), o2 = this._progressHandlers.get(n3);
        if (!o2) return void this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(e3)}`));
        const s2 = this._responseHandlers.get(n3), i3 = this._timeoutInfo.get(n3);
        if (i3 && s2 && i3.resetTimeoutOnProgress) try {
          this._resetTimeout(n3);
        } catch (e4) {
          return this._responseHandlers.delete(n3), this._progressHandlers.delete(n3), this._cleanupTimeout(n3), void s2(e4);
        }
        o2(r3);
      }
      _onresponse(e3) {
        const t3 = Number(e3.id), r3 = this._requestResolvers.get(t3);
        if (r3) {
          if (this._requestResolvers.delete(t3), (0, ue.ig)(e3)) r3(e3);
          else {
            r3(new ue.Nh(e3.error.code, e3.error.message, e3.error.data));
          }
          return;
        }
        const n3 = this._responseHandlers.get(t3);
        if (void 0 === n3) return void this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(e3)}`));
        this._responseHandlers.delete(t3), this._cleanupTimeout(t3);
        let o2 = false;
        if ((0, ue.ig)(e3) && e3.result && "object" == typeof e3.result) {
          const r4 = e3.result;
          if (r4.task && "object" == typeof r4.task) {
            const e4 = r4.task;
            "string" == typeof e4.taskId && (o2 = true, this._taskProgressTokens.set(e4.taskId, t3));
          }
        }
        if (o2 || this._progressHandlers.delete(t3), (0, ue.ig)(e3)) n3(e3);
        else {
          n3(ue.Nh.fromError(e3.error.code, e3.error.message, e3.error.data));
        }
      }
      get transport() {
        return this._transport;
      }
      async close() {
        await this._transport?.close();
      }
      async *requestStream(e3, t3, r3) {
        const { task: n3 } = r3 ?? {};
        if (!n3) {
          try {
            const n4 = await this.request(e3, t3, r3);
            yield { type: "result", result: n4 };
          } catch (e4) {
            yield { type: "error", error: e4 instanceof ue.Nh ? e4 : new ue.Nh(ue.O4.InternalError, String(e4)) };
          }
          return;
        }
        let o2;
        try {
          const n4 = await this.request(e3, ue.Mg, r3);
          if (!n4.task) throw new ue.Nh(ue.O4.InternalError, "Task creation did not return a task");
          for (o2 = n4.task.taskId, yield { type: "taskCreated", task: n4.task }; ; ) {
            const e4 = await this.getTask({ taskId: o2 }, r3);
            if (yield { type: "taskStatus", task: e4 }, Wr(e4.status)) {
              if ("completed" === e4.status) {
                const e5 = await this.getTaskResult({ taskId: o2 }, t3, r3);
                yield { type: "result", result: e5 };
              } else "failed" === e4.status ? yield { type: "error", error: new ue.Nh(ue.O4.InternalError, `Task ${o2} failed`) } : "cancelled" === e4.status && (yield { type: "error", error: new ue.Nh(ue.O4.InternalError, `Task ${o2} was cancelled`) });
              return;
            }
            if ("input_required" === e4.status) {
              const e5 = await this.getTaskResult({ taskId: o2 }, t3, r3);
              return void (yield { type: "result", result: e5 });
            }
            const n5 = e4.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
            await new Promise((e5) => setTimeout(e5, n5)), r3?.signal?.throwIfAborted();
          }
        } catch (e4) {
          yield { type: "error", error: e4 instanceof ue.Nh ? e4 : new ue.Nh(ue.O4.InternalError, String(e4)) };
        }
      }
      request(e3, t3, r3) {
        const { relatedRequestId: n3, resumptionToken: o2, onresumptiontoken: s2, task: i3, relatedTask: a3 } = r3 ?? {};
        return new Promise((c2, u2) => {
          const l2 = (e4) => {
            u2(e4);
          };
          if (!this._transport) return void l2(new Error("Not connected"));
          if (true === this._options?.enforceStrictCapabilities) try {
            this.assertCapabilityForMethod(e3.method), i3 && this.assertTaskCapability(e3.method);
          } catch (e4) {
            return void l2(e4);
          }
          r3?.signal?.throwIfAborted();
          const d2 = this._requestMessageId++, p2 = { ...e3, jsonrpc: "2.0", id: d2 };
          r3?.onprogress && (this._progressHandlers.set(d2, r3.onprogress), p2.params = { ...e3.params, _meta: { ...e3.params?._meta || {}, progressToken: d2 } }), i3 && (p2.params = { ...p2.params, task: i3 }), a3 && (p2.params = { ...p2.params, _meta: { ...p2.params?._meta || {}, [ue.EV]: a3 } });
          const f2 = (e4) => {
            this._responseHandlers.delete(d2), this._progressHandlers.delete(d2), this._cleanupTimeout(d2), this._transport?.send({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: d2, reason: String(e4) } }, { relatedRequestId: n3, resumptionToken: o2, onresumptiontoken: s2 }).catch((e5) => this._onerror(new Error(`Failed to send cancellation: ${e5}`)));
            const t4 = e4 instanceof ue.Nh ? e4 : new ue.Nh(ue.O4.RequestTimeout, String(e4));
            u2(t4);
          };
          this._responseHandlers.set(d2, (e4) => {
            if (!r3?.signal?.aborted) {
              if (e4 instanceof Error) return u2(e4);
              try {
                const r4 = Kr(t3, e4.result);
                r4.success ? c2(r4.data) : u2(r4.error);
              } catch (e5) {
                u2(e5);
              }
            }
          }), r3?.signal?.addEventListener("abort", () => {
            f2(r3?.signal?.reason);
          });
          const h2 = r3?.timeout ?? 6e4;
          this._setupTimeout(d2, h2, r3?.maxTotalTimeout, () => f2(ue.Nh.fromError(ue.O4.RequestTimeout, "Request timed out", { timeout: h2 })), r3?.resetTimeoutOnProgress ?? false);
          const m2 = a3?.taskId;
          if (m2) {
            const e4 = (e5) => {
              const t4 = this._responseHandlers.get(d2);
              t4 ? t4(e5) : this._onerror(new Error(`Response handler missing for side-channeled request ${d2}`));
            };
            this._requestResolvers.set(d2, e4), this._enqueueTaskMessage(m2, { type: "request", message: p2, timestamp: Date.now() }).catch((e5) => {
              this._cleanupTimeout(d2), u2(e5);
            });
          } else this._transport.send(p2, { relatedRequestId: n3, resumptionToken: o2, onresumptiontoken: s2 }).catch((e4) => {
            this._cleanupTimeout(d2), u2(e4);
          });
        });
      }
      async getTask(e3, t3) {
        return this.request({ method: "tasks/get", params: e3 }, ue.Sc, t3);
      }
      async getTaskResult(e3, t3, r3) {
        return this.request({ method: "tasks/result", params: e3 }, t3, r3);
      }
      async listTasks(e3, t3) {
        return this.request({ method: "tasks/list", params: e3 }, ue.a5, t3);
      }
      async cancelTask(e3, t3) {
        return this.request({ method: "tasks/cancel", params: e3 }, ue.gH, t3);
      }
      async notification(e3, t3) {
        if (!this._transport) throw new Error("Not connected");
        this.assertNotificationCapability(e3.method);
        const r3 = t3?.relatedTask?.taskId;
        if (r3) {
          const n4 = { ...e3, jsonrpc: "2.0", params: { ...e3.params, _meta: { ...e3.params?._meta || {}, [ue.EV]: t3.relatedTask } } };
          return void await this._enqueueTaskMessage(r3, { type: "notification", message: n4, timestamp: Date.now() });
        }
        if ((this._options?.debouncedNotificationMethods ?? []).includes(e3.method) && !e3.params && !t3?.relatedRequestId && !t3?.relatedTask) {
          if (this._pendingDebouncedNotifications.has(e3.method)) return;
          return this._pendingDebouncedNotifications.add(e3.method), void Promise.resolve().then(() => {
            if (this._pendingDebouncedNotifications.delete(e3.method), !this._transport) return;
            let r4 = { ...e3, jsonrpc: "2.0" };
            t3?.relatedTask && (r4 = { ...r4, params: { ...r4.params, _meta: { ...r4.params?._meta || {}, [ue.EV]: t3.relatedTask } } }), this._transport?.send(r4, t3).catch((e4) => this._onerror(e4));
          });
        }
        let n3 = { ...e3, jsonrpc: "2.0" };
        t3?.relatedTask && (n3 = { ...n3, params: { ...n3.params, _meta: { ...n3.params?._meta || {}, [ue.EV]: t3.relatedTask } } }), await this._transport.send(n3, t3);
      }
      setRequestHandler(e3, t3) {
        const r3 = Hr(e3);
        this.assertRequestHandlerCapability(r3), this._requestHandlers.set(r3, (r4, n3) => {
          const o2 = Yr(e3, r4);
          return Promise.resolve(t3(o2, n3));
        });
      }
      removeRequestHandler(e3) {
        this._requestHandlers.delete(e3);
      }
      assertCanSetRequestHandler(e3) {
        if (this._requestHandlers.has(e3)) throw new Error(`A request handler for ${e3} already exists, which would be overridden`);
      }
      setNotificationHandler(e3, t3) {
        const r3 = Hr(e3);
        this._notificationHandlers.set(r3, (r4) => {
          const n3 = Yr(e3, r4);
          return Promise.resolve(t3(n3));
        });
      }
      removeNotificationHandler(e3) {
        this._notificationHandlers.delete(e3);
      }
      _cleanupTaskProgressHandler(e3) {
        const t3 = this._taskProgressTokens.get(e3);
        void 0 !== t3 && (this._progressHandlers.delete(t3), this._taskProgressTokens.delete(e3));
      }
      async _enqueueTaskMessage(e3, t3, r3) {
        if (!this._taskStore || !this._taskMessageQueue) throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
        const n3 = this._options?.maxTaskQueueSize;
        await this._taskMessageQueue.enqueue(e3, t3, r3, n3);
      }
      async _clearTaskQueue(e3, t3) {
        if (this._taskMessageQueue) {
          const r3 = await this._taskMessageQueue.dequeueAll(e3, t3);
          for (const t4 of r3) if ("request" === t4.type && (0, ue.vo)(t4.message)) {
            const r4 = t4.message.id, n3 = this._requestResolvers.get(r4);
            n3 ? (n3(new ue.Nh(ue.O4.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(r4)) : this._onerror(new Error(`Resolver missing for request ${r4} during task ${e3} cleanup`));
          }
        }
      }
      async _waitForTaskUpdate(e3, t3) {
        let r3 = this._options?.defaultTaskPollInterval ?? 1e3;
        try {
          const t4 = await this._taskStore?.getTask(e3);
          t4?.pollInterval && (r3 = t4.pollInterval);
        } catch {
        }
        return new Promise((e4, n3) => {
          if (t3.aborted) return void n3(new ue.Nh(ue.O4.InvalidRequest, "Request cancelled"));
          const o2 = setTimeout(e4, r3);
          t3.addEventListener("abort", () => {
            clearTimeout(o2), n3(new ue.Nh(ue.O4.InvalidRequest, "Request cancelled"));
          }, { once: true });
        });
      }
      requestTaskStore(e3, t3) {
        const r3 = this._taskStore;
        if (!r3) throw new Error("No task store configured");
        return { createTask: async (n3) => {
          if (!e3) throw new Error("No request provided");
          return await r3.createTask(n3, e3.id, { method: e3.method, params: e3.params }, t3);
        }, getTask: async (e4) => {
          const n3 = await r3.getTask(e4, t3);
          if (!n3) throw new ue.Nh(ue.O4.InvalidParams, "Failed to retrieve task: Task not found");
          return n3;
        }, storeTaskResult: async (e4, n3, o2) => {
          await r3.storeTaskResult(e4, n3, o2, t3);
          const s2 = await r3.getTask(e4, t3);
          if (s2) {
            const t4 = ue.ki.parse({ method: "notifications/tasks/status", params: s2 });
            await this.notification(t4), Wr(s2.status) && this._cleanupTaskProgressHandler(e4);
          }
        }, getTaskResult: (e4) => r3.getTaskResult(e4, t3), updateTaskStatus: async (e4, n3, o2) => {
          const s2 = await r3.getTask(e4, t3);
          if (!s2) throw new ue.Nh(ue.O4.InvalidParams, `Task "${e4}" not found - it may have been cleaned up`);
          if (Wr(s2.status)) throw new ue.Nh(ue.O4.InvalidParams, `Cannot update task "${e4}" from terminal status "${s2.status}" to "${n3}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
          await r3.updateTaskStatus(e4, n3, o2, t3);
          const i3 = await r3.getTask(e4, t3);
          if (i3) {
            const t4 = ue.ki.parse({ method: "notifications/tasks/status", params: i3 });
            await this.notification(t4), Wr(i3.status) && this._cleanupTaskProgressHandler(e4);
          }
        }, listTasks: (e4) => r3.listTasks(e4, t3) };
      }
    }
    function Xr(e3) {
      return null !== e3 && "object" == typeof e3 && !Array.isArray(e3);
    }
    var Qr = o(7712), en = o(545);
    class tn {
      constructor(e3) {
        this._ajv = e3 ?? (function() {
          const e4 = new Qr({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
          return en(e4), e4;
        })();
      }
      getValidator(e3) {
        const t3 = "$id" in e3 && "string" == typeof e3.$id ? this._ajv.getSchema(e3.$id) ?? this._ajv.compile(e3) : this._ajv.compile(e3);
        return (e4) => t3(e4) ? { valid: true, data: e4, errorMessage: void 0 } : { valid: false, data: void 0, errorMessage: this._ajv.errorsText(t3.errors) };
      }
    }
    class rn {
      constructor(e3) {
        this._client = e3;
      }
      async *callToolStream(e3, t3 = ue.TF, r3) {
        const n3 = this._client, o2 = { ...r3, task: r3?.task ?? (n3.isToolTask(e3.name) ? {} : void 0) }, s2 = n3.requestStream({ method: "tools/call", params: e3 }, t3, o2), i3 = n3.getToolOutputValidator(e3.name);
        for await (const t4 of s2) {
          if ("result" === t4.type && i3) {
            const r4 = t4.result;
            if (!r4.structuredContent && !r4.isError) return void (yield { type: "error", error: new ue.Nh(ue.O4.InvalidRequest, `Tool ${e3.name} has an output schema but did not return structured content`) });
            if (r4.structuredContent) try {
              const e4 = i3(r4.structuredContent);
              if (!e4.valid) return void (yield { type: "error", error: new ue.Nh(ue.O4.InvalidParams, `Structured content does not match the tool's output schema: ${e4.errorMessage}`) });
            } catch (e4) {
              return e4 instanceof ue.Nh ? void (yield { type: "error", error: e4 }) : void (yield { type: "error", error: new ue.Nh(ue.O4.InvalidParams, `Failed to validate structured content: ${e4 instanceof Error ? e4.message : String(e4)}`) });
            }
          }
          yield t4;
        }
      }
      async getTask(e3, t3) {
        return this._client.getTask({ taskId: e3 }, t3);
      }
      async getTaskResult(e3, t3, r3) {
        return this._client.getTaskResult({ taskId: e3 }, t3, r3);
      }
      async listTasks(e3, t3) {
        return this._client.listTasks(e3 ? { cursor: e3 } : void 0, t3);
      }
      async cancelTask(e3, t3) {
        return this._client.cancelTask({ taskId: e3 }, t3);
      }
      requestStream(e3, t3, r3) {
        return this._client.requestStream(e3, t3, r3);
      }
    }
    function nn(e3, t3) {
      if (e3 && null !== t3 && "object" == typeof t3) {
        if ("object" === e3.type && e3.properties && "object" == typeof e3.properties) {
          const r3 = t3, n3 = e3.properties;
          for (const e4 of Object.keys(n3)) {
            const t4 = n3[e4];
            void 0 === r3[e4] && Object.prototype.hasOwnProperty.call(t4, "default") && (r3[e4] = t4.default), void 0 !== r3[e4] && nn(t4, r3[e4]);
          }
        }
        if (Array.isArray(e3.anyOf)) for (const r3 of e3.anyOf) "boolean" != typeof r3 && nn(r3, t3);
        if (Array.isArray(e3.oneOf)) for (const r3 of e3.oneOf) "boolean" != typeof r3 && nn(r3, t3);
      }
    }
    class on extends Gr {
      constructor(e3, t3) {
        super(t3), this._clientInfo = e3, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._cachedKnownTaskTools = /* @__PURE__ */ new Set(), this._cachedRequiredTaskTools = /* @__PURE__ */ new Set(), this._listChangedDebounceTimers = /* @__PURE__ */ new Map(), this._capabilities = t3?.capabilities ?? {}, this._jsonSchemaValidator = t3?.jsonSchemaValidator ?? new tn(), t3?.listChanged && (this._pendingListChangedConfig = t3.listChanged);
      }
      _setupListChangedHandlers(e3) {
        e3.tools && this._serverCapabilities?.tools?.listChanged && this._setupListChangedHandler("tools", ue.fH, e3.tools, async () => (await this.listTools()).tools), e3.prompts && this._serverCapabilities?.prompts?.listChanged && this._setupListChangedHandler("prompts", ue.br, e3.prompts, async () => (await this.listPrompts()).prompts), e3.resources && this._serverCapabilities?.resources?.listChanged && this._setupListChangedHandler("resources", ue.hh, e3.resources, async () => (await this.listResources()).resources);
      }
      get experimental() {
        return this._experimental || (this._experimental = { tasks: new rn(this) }), this._experimental;
      }
      registerCapabilities(e3) {
        if (this.transport) throw new Error("Cannot register capabilities after connecting to transport");
        this._capabilities = (function(e4, t3) {
          const r3 = { ...e4 };
          for (const e5 in t3) {
            const n3 = e5, o2 = t3[n3];
            if (void 0 === o2) continue;
            const s2 = r3[n3];
            Xr(s2) && Xr(o2) ? r3[n3] = { ...s2, ...o2 } : r3[n3] = o2;
          }
          return r3;
        })(this._capabilities, e3);
      }
      setRequestHandler(e3, t3) {
        const r3 = Zr(e3), n3 = r3?.method;
        if (!n3) throw new Error("Schema is missing a method literal");
        let o2;
        if (Vr(n3)) {
          const e4 = n3, t4 = e4._zod?.def;
          o2 = t4?.value ?? e4.value;
        } else {
          const e4 = n3, t4 = e4._def;
          o2 = t4?.value ?? e4.value;
        }
        if ("string" != typeof o2) throw new Error("Schema method literal must be a string");
        const s2 = o2;
        if ("elicitation/create" === s2) {
          const r4 = async (e4, r5) => {
            const n4 = Kr(ue.$9, e4);
            if (!n4.success) {
              const e5 = n4.error instanceof Error ? n4.error.message : String(n4.error);
              throw new ue.Nh(ue.O4.InvalidParams, `Invalid elicitation request: ${e5}`);
            }
            const { params: o3 } = n4.data;
            o3.mode = o3.mode ?? "form";
            const { supportsFormMode: s3, supportsUrlMode: i3 } = (function(e5) {
              if (!e5) return { supportsFormMode: false, supportsUrlMode: false };
              const t4 = void 0 !== e5.form, r6 = void 0 !== e5.url;
              return { supportsFormMode: t4 || !t4 && !r6, supportsUrlMode: r6 };
            })(this._capabilities.elicitation);
            if ("form" === o3.mode && !s3) throw new ue.Nh(ue.O4.InvalidParams, "Client does not support form-mode elicitation requests");
            if ("url" === o3.mode && !i3) throw new ue.Nh(ue.O4.InvalidParams, "Client does not support URL-mode elicitation requests");
            const a3 = await Promise.resolve(t3(e4, r5));
            if (o3.task) {
              const e5 = Kr(ue.Mg, a3);
              if (!e5.success) {
                const t4 = e5.error instanceof Error ? e5.error.message : String(e5.error);
                throw new ue.Nh(ue.O4.InvalidParams, `Invalid task creation result: ${t4}`);
              }
              return e5.data;
            }
            const c2 = Kr(ue.n_, a3);
            if (!c2.success) {
              const e5 = c2.error instanceof Error ? c2.error.message : String(c2.error);
              throw new ue.Nh(ue.O4.InvalidParams, `Invalid elicitation result: ${e5}`);
            }
            const u2 = c2.data, l2 = "form" === o3.mode ? o3.requestedSchema : void 0;
            if ("form" === o3.mode && "accept" === u2.action && u2.content && l2 && this._capabilities.elicitation?.form?.applyDefaults) try {
              nn(l2, u2.content);
            } catch {
            }
            return u2;
          };
          return super.setRequestHandler(e3, r4);
        }
        if ("sampling/createMessage" === s2) {
          const r4 = async (e4, r5) => {
            const n4 = Kr(ue.u9, e4);
            if (!n4.success) {
              const e5 = n4.error instanceof Error ? n4.error.message : String(n4.error);
              throw new ue.Nh(ue.O4.InvalidParams, `Invalid sampling request: ${e5}`);
            }
            const { params: o3 } = n4.data, s3 = await Promise.resolve(t3(e4, r5));
            if (o3.task) {
              const e5 = Kr(ue.Mg, s3);
              if (!e5.success) {
                const t4 = e5.error instanceof Error ? e5.error.message : String(e5.error);
                throw new ue.Nh(ue.O4.InvalidParams, `Invalid task creation result: ${t4}`);
              }
              return e5.data;
            }
            const i3 = Kr(ue.K1, s3);
            if (!i3.success) {
              const e5 = i3.error instanceof Error ? i3.error.message : String(i3.error);
              throw new ue.Nh(ue.O4.InvalidParams, `Invalid sampling result: ${e5}`);
            }
            return i3.data;
          };
          return super.setRequestHandler(e3, r4);
        }
        return super.setRequestHandler(e3, t3);
      }
      assertCapability(e3, t3) {
        if (!this._serverCapabilities?.[e3]) throw new Error(`Server does not support ${e3} (required for ${t3})`);
      }
      async connect(e3, t3) {
        if (await super.connect(e3), void 0 === e3.sessionId) try {
          const r3 = await this.request({ method: "initialize", params: { protocolVersion: ue.aE, capabilities: this._capabilities, clientInfo: this._clientInfo } }, ue.Rk, t3);
          if (void 0 === r3) throw new Error(`Server sent invalid initialize result: ${r3}`);
          if (!ue.Iu.includes(r3.protocolVersion)) throw new Error(`Server's protocol version is not supported: ${r3.protocolVersion}`);
          this._serverCapabilities = r3.capabilities, this._serverVersion = r3.serverInfo, e3.setProtocolVersion && e3.setProtocolVersion(r3.protocolVersion), this._instructions = r3.instructions, await this.notification({ method: "notifications/initialized" }), this._pendingListChangedConfig && (this._setupListChangedHandlers(this._pendingListChangedConfig), this._pendingListChangedConfig = void 0);
        } catch (e4) {
          throw this.close(), e4;
        }
      }
      getServerCapabilities() {
        return this._serverCapabilities;
      }
      getServerVersion() {
        return this._serverVersion;
      }
      getInstructions() {
        return this._instructions;
      }
      assertCapabilityForMethod(e3) {
        switch (e3) {
          case "logging/setLevel":
            if (!this._serverCapabilities?.logging) throw new Error(`Server does not support logging (required for ${e3})`);
            break;
          case "prompts/get":
          case "prompts/list":
            if (!this._serverCapabilities?.prompts) throw new Error(`Server does not support prompts (required for ${e3})`);
            break;
          case "resources/list":
          case "resources/templates/list":
          case "resources/read":
          case "resources/subscribe":
          case "resources/unsubscribe":
            if (!this._serverCapabilities?.resources) throw new Error(`Server does not support resources (required for ${e3})`);
            if ("resources/subscribe" === e3 && !this._serverCapabilities.resources.subscribe) throw new Error(`Server does not support resource subscriptions (required for ${e3})`);
            break;
          case "tools/call":
          case "tools/list":
            if (!this._serverCapabilities?.tools) throw new Error(`Server does not support tools (required for ${e3})`);
            break;
          case "completion/complete":
            if (!this._serverCapabilities?.completions) throw new Error(`Server does not support completions (required for ${e3})`);
        }
      }
      assertNotificationCapability(e3) {
        if ("notifications/roots/list_changed" === e3) {
          if (!this._capabilities.roots?.listChanged) throw new Error(`Client does not support roots list changed notifications (required for ${e3})`);
        }
      }
      assertRequestHandlerCapability(e3) {
        if (this._capabilities) switch (e3) {
          case "sampling/createMessage":
            if (!this._capabilities.sampling) throw new Error(`Client does not support sampling capability (required for ${e3})`);
            break;
          case "elicitation/create":
            if (!this._capabilities.elicitation) throw new Error(`Client does not support elicitation capability (required for ${e3})`);
            break;
          case "roots/list":
            if (!this._capabilities.roots) throw new Error(`Client does not support roots capability (required for ${e3})`);
            break;
          case "tasks/get":
          case "tasks/list":
          case "tasks/result":
          case "tasks/cancel":
            if (!this._capabilities.tasks) throw new Error(`Client does not support tasks capability (required for ${e3})`);
        }
      }
      assertTaskCapability(e3) {
        !(function(e4, t3, r3) {
          if (!e4) throw new Error(`${r3} does not support task creation (required for ${t3})`);
          if ("tools/call" === t3 && !e4.tools?.call) throw new Error(`${r3} does not support task creation for tools/call (required for ${t3})`);
        })(this._serverCapabilities?.tasks?.requests, e3, "Server");
      }
      assertTaskHandlerCapability(e3) {
        this._capabilities && (function(e4, t3, r3) {
          if (!e4) throw new Error(`${r3} does not support task creation (required for ${t3})`);
          switch (t3) {
            case "sampling/createMessage":
              if (!e4.sampling?.createMessage) throw new Error(`${r3} does not support task creation for sampling/createMessage (required for ${t3})`);
              break;
            case "elicitation/create":
              if (!e4.elicitation?.create) throw new Error(`${r3} does not support task creation for elicitation/create (required for ${t3})`);
          }
        })(this._capabilities.tasks?.requests, e3, "Client");
      }
      async ping(e3) {
        return this.request({ method: "ping" }, ue.wR, e3);
      }
      async complete(e3, t3) {
        return this.request({ method: "completion/complete", params: e3 }, ue.GU, t3);
      }
      async setLoggingLevel(e3, t3) {
        return this.request({ method: "logging/setLevel", params: { level: e3 } }, ue.wR, t3);
      }
      async getPrompt(e3, t3) {
        return this.request({ method: "prompts/get", params: e3 }, ue.HM, t3);
      }
      async listPrompts(e3, t3) {
        return this.request({ method: "prompts/list", params: e3 }, ue.Yu, t3);
      }
      async listResources(e3, t3) {
        return this.request({ method: "resources/list", params: e3 }, ue.cv, t3);
      }
      async listResourceTemplates(e3, t3) {
        return this.request({ method: "resources/templates/list", params: e3 }, ue.O$, t3);
      }
      async readResource(e3, t3) {
        return this.request({ method: "resources/read", params: e3 }, ue.ve, t3);
      }
      async subscribeResource(e3, t3) {
        return this.request({ method: "resources/subscribe", params: e3 }, ue.wR, t3);
      }
      async unsubscribeResource(e3, t3) {
        return this.request({ method: "resources/unsubscribe", params: e3 }, ue.wR, t3);
      }
      async callTool(e3, t3 = ue.TF, r3) {
        if (this.isToolTaskRequired(e3.name)) throw new ue.Nh(ue.O4.InvalidRequest, `Tool "${e3.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
        const n3 = await this.request({ method: "tools/call", params: e3 }, t3, r3), o2 = this.getToolOutputValidator(e3.name);
        if (o2) {
          if (!n3.structuredContent && !n3.isError) throw new ue.Nh(ue.O4.InvalidRequest, `Tool ${e3.name} has an output schema but did not return structured content`);
          if (n3.structuredContent) try {
            const e4 = o2(n3.structuredContent);
            if (!e4.valid) throw new ue.Nh(ue.O4.InvalidParams, `Structured content does not match the tool's output schema: ${e4.errorMessage}`);
          } catch (e4) {
            if (e4 instanceof ue.Nh) throw e4;
            throw new ue.Nh(ue.O4.InvalidParams, `Failed to validate structured content: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
        }
        return n3;
      }
      isToolTask(e3) {
        return !!this._serverCapabilities?.tasks?.requests?.tools?.call && this._cachedKnownTaskTools.has(e3);
      }
      isToolTaskRequired(e3) {
        return this._cachedRequiredTaskTools.has(e3);
      }
      cacheToolMetadata(e3) {
        this._cachedToolOutputValidators.clear(), this._cachedKnownTaskTools.clear(), this._cachedRequiredTaskTools.clear();
        for (const t3 of e3) {
          if (t3.outputSchema) {
            const e5 = this._jsonSchemaValidator.getValidator(t3.outputSchema);
            this._cachedToolOutputValidators.set(t3.name, e5);
          }
          const e4 = t3.execution?.taskSupport;
          "required" !== e4 && "optional" !== e4 || this._cachedKnownTaskTools.add(t3.name), "required" === e4 && this._cachedRequiredTaskTools.add(t3.name);
        }
      }
      getToolOutputValidator(e3) {
        return this._cachedToolOutputValidators.get(e3);
      }
      async listTools(e3, t3) {
        const r3 = await this.request({ method: "tools/list", params: e3 }, ue.WT, t3);
        return this.cacheToolMetadata(r3.tools), r3;
      }
      _setupListChangedHandler(e3, t3, r3, n3) {
        const o2 = ue.xI.safeParse(r3);
        if (!o2.success) throw new Error(`Invalid ${e3} listChanged options: ${o2.error.message}`);
        if ("function" != typeof r3.onChanged) throw new Error(`Invalid ${e3} listChanged options: onChanged must be a function`);
        const { autoRefresh: s2, debounceMs: i3 } = o2.data, { onChanged: a3 } = r3, c2 = async () => {
          if (s2) try {
            const e4 = await n3();
            a3(null, e4);
          } catch (e4) {
            const t4 = e4 instanceof Error ? e4 : new Error(String(e4));
            a3(t4, null);
          }
          else a3(null, null);
        };
        this.setNotificationHandler(t3, () => {
          if (i3) {
            const t4 = this._listChangedDebounceTimers.get(e3);
            t4 && clearTimeout(t4);
            const r4 = setTimeout(c2, i3);
            this._listChangedDebounceTimers.set(e3, r4);
          } else c2();
        });
      }
      async sendRootsListChanged() {
        return this.notification({ method: "notifications/roots/list_changed" });
      }
    }
    new class {
      constructor({ maxSchemasPerCompiler: e3 = 2048, createCompiler: t3 = () => new tn() } = {}) {
        this.compiled = /* @__PURE__ */ new Map(), this.maxSchemasPerCompiler = e3, this.createCompiler = t3, this.compiler = t3();
      }
      get compiledSchemaCount() {
        return this.compiled.size;
      }
      getValidator(e3) {
        let t3;
        return (r3) => (t3 ??= this.compile(e3), t3(r3));
      }
      compile(e3) {
        const t3 = JSON.stringify(e3), r3 = (0, y.createHash)("sha256").update(t3).digest("base64url"), n3 = this.compiled.get(r3);
        if (void 0 !== n3) return n3;
        this.compiled.size >= this.maxSchemasPerCompiler && (this.compiler = this.createCompiler(), this.compiled.clear());
        const o2 = (t3.includes('"$id"') ? this.createCompiler() : this.compiler).getValidator(e3);
        return this.compiled.set(r3, o2), o2;
      }
    }();
    var sn = function(e3, t3, r3) {
      if (null != t3) {
        if ("object" != typeof t3 && "function" != typeof t3) throw new TypeError("Object expected.");
        var n3, o2;
        if (r3) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n3 = t3[Symbol.asyncDispose];
        }
        if (void 0 === n3) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n3 = t3[Symbol.dispose], r3 && (o2 = n3);
        }
        if ("function" != typeof n3) throw new TypeError("Object not disposable.");
        o2 && (n3 = function() {
          try {
            o2.call(this);
          } catch (e4) {
            return Promise.reject(e4);
          }
        }), e3.stack.push({ value: t3, dispose: n3, async: r3 });
      } else r3 && e3.stack.push({ async: true });
      return t3;
    }, an = /* @__PURE__ */ (function(e3) {
      return function(t3) {
        function r3(r4) {
          t3.error = t3.hasError ? new e3(r4, t3.error, "An error was suppressed during disposal.") : r4, t3.hasError = true;
        }
        var n3, o2 = 0;
        return (function e4() {
          for (; n3 = t3.stack.pop(); ) try {
            if (!n3.async && 1 === o2) return o2 = 0, t3.stack.push(n3), Promise.resolve().then(e4);
            if (n3.dispose) {
              var s2 = n3.dispose.call(n3.value);
              if (n3.async) return o2 |= 2, Promise.resolve(s2).then(e4, function(t4) {
                return r3(t4), e4();
              });
            } else o2 |= 1;
          } catch (e5) {
            r3(e5);
          }
          if (1 === o2) return t3.hasError ? Promise.reject(t3.error) : Promise.resolve();
          if (t3.hasError) throw t3.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3) {
      var n3 = new Error(r3);
      return n3.name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
    });
    /* @__PURE__ */ new Set();
    class cn extends Error {
      constructor(e3, t3) {
        super(`Tool ${e3} not found, available tools: ${t3.join(", ")}`), this.toolName = e3, this.availableTools = t3, this.name = "McpToolNotFoundError";
      }
    }
    Error;
    Error;
    Error;
    class un {
      constructor(e3) {
        this.tools = e3;
      }
      async execute(e3, t3, r3, n3) {
        const o2 = this.tools[e3];
        if (!o2) throw new cn(e3, Object.keys(this.tools));
        return o2.execute(t3, r3, n3);
      }
      getTools() {
        return Object.entries(this.tools).map(([e3, t3]) => ({ ...t3.definition, name: e3 }));
      }
    }
    class ln {
      constructor(e3, t3) {
        this.clients = e3, this.elicitationFactory = t3, this.changeListeners = /* @__PURE__ */ new Set();
      }
      onDidChange(e3) {
        return this.changeListeners.add(e3), () => {
          this.changeListeners.delete(e3);
        };
      }
      fireDidChange() {
        for (const e3 of this.changeListeners) try {
          e3();
        } catch (e4) {
          console.error("Error in McpManager change listener:", e4);
        }
      }
      getClients() {
        return this.clients;
      }
      getClient(e3) {
        return this.clients[e3];
      }
      setClient(e3, t3) {
        this.clients[e3] = t3, this.fireDidChange();
      }
      deleteClient(e3) {
        delete this.clients[e3], this.fireDidChange();
      }
      async closeAllClients() {
        const e3 = Object.values(this.clients);
        await Promise.all(e3.map(async (e4) => {
          try {
            await e4.close?.();
          } catch {
          }
        }));
      }
      async getToolSet(e3) {
        const t3 = { stack: [], error: void 0, hasError: false };
        try {
          const r3 = sn(t3, Cr(e3.withName("McpManager.getToolSet")), false), n3 = await $r(Object.entries(this.clients), ([e4, t4]) => t4.getTools(r3.ctx).then((r4) => r4.map((r5) => ({ ...r5, clientKey: e4, clientName: t4.serverName, client: t4 }))).catch(() => []), { max: 4 }), o2 = Array.from(n3.values()).flat(), s2 = {};
          for (const e4 of o2) s2[`${e4.clientName}-${e4.name}`] = { definition: { ...e4, clientKey: e4.clientKey, providerIdentifier: e4.clientName, toolName: e4.name }, execute: async (t4, n4, o3) => {
            const s3 = o3?.createProvider(e4.clientName, e4.name, n4);
            return await e4.client.callTool(r3.ctx, e4.name, t4, n4, s3);
          } };
          return new un(s2);
        } catch (e4) {
          t3.error = e4, t3.hasError = true;
        } finally {
          an(t3);
        }
      }
      async getInstructions(e3) {
        const t3 = { stack: [], error: void 0, hasError: false };
        try {
          const r3 = sn(t3, Cr(e3.withName("McpManager.getInstructions")), false), n3 = await $r(Object.entries(this.clients), ([e4, t4]) => t4.getInstructions(r3.ctx).then((e5) => e5 && 0 !== e5.trim().length ? new qr({ serverName: t4.serverName, instructions: e5.trim() }) : null).catch(() => null), { max: 4 });
          return Array.from(n3.values()).filter((e4) => null !== e4);
        } catch (e4) {
          t3.error = e4, t3.hasError = true;
        } finally {
          an(t3);
        }
      }
    }
    Error;
    "function" == typeof SuppressedError && SuppressedError;
    (0, hr.h)("DefinitionMcpLoader");
    Error;
    o(2233);
    class dn {
      constructor(e3) {
        this.mcpAuthPath = e3;
        const t3 = dn.mcpAuthPromises.get(e3);
        if (t3) this.mcpAuthPromise = t3;
        else {
          const t4 = this.loadMcpAuth();
          this.mcpAuthPromise = t4, dn.mcpAuthPromises.set(e3, t4), t4.catch(() => {
            dn.mcpAuthPromises.get(e3) === t4 && dn.mcpAuthPromises.delete(e3);
          });
        }
        dn.saveLocks.has(e3) || dn.saveLocks.set(e3, Promise.resolve());
      }
      async loadMcpAuth() {
        try {
          const e3 = await (0, $t.readFile)(this.mcpAuthPath, "utf8"), t3 = JSON.parse(e3);
          if (t3 && "object" == typeof t3) {
            if (Object.values(t3).some((e5) => e5 && "object" == typeof e5 && null !== e5 && ("access_token" in e5 || "refresh_token" in e5) && !("tokens" in e5) && !("clientInfo" in e5))) {
              const e5 = {};
              for (const [r3, n3] of Object.entries(t3)) e5[r3] = { tokens: n3 };
              return e5;
            }
            const e4 = {};
            for (const [r3, n3] of Object.entries(t3)) n3 && "object" == typeof n3 && null !== n3 && (e4[r3] = { tokens: "tokens" in n3 ? n3.tokens : void 0, clientInfo: "clientInfo" in n3 ? n3.clientInfo : void 0 });
            return e4;
          }
          return {};
        } catch (e3) {
          if (e3 instanceof Error && e3.message.includes("ENOENT")) return {};
          throw e3;
        }
      }
      async loadTokens(e3) {
        const t3 = await this.mcpAuthPromise;
        return t3[e3]?.tokens;
      }
      async saveTokens(e3, t3) {
        await this.withSaveLock(async () => {
          const r3 = await this.mcpAuthPromise;
          r3[e3] || (r3[e3] = {}), r3[e3].tokens = t3, await this.saveMcpAuth(r3);
        });
      }
      async loadClientInformation(e3) {
        const t3 = await this.mcpAuthPromise;
        return t3[e3]?.clientInfo;
      }
      async withSaveLock(e3) {
        const t3 = dn.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let r3;
        dn.saveLocks.set(this.mcpAuthPath, new Promise((e4) => {
          r3 = e4;
        }));
        try {
          return await t3, await e3();
        } finally {
          r3();
        }
      }
      async saveClientInformation(e3, t3) {
        await this.withSaveLock(async () => {
          const r3 = await this.mcpAuthPromise;
          r3[e3] || (r3[e3] = {}), r3[e3].clientInfo = t3, await this.saveMcpAuth(r3);
        });
      }
      async deleteCredentials(e3) {
        await this.withSaveLock(async () => {
          const t3 = await this.mcpAuthPromise;
          e3 in t3 && (delete t3[e3], await this.saveMcpAuth(t3));
        });
      }
      async saveMcpAuth(e3) {
        await (0, $t.mkdir)(w.dirname(this.mcpAuthPath), { recursive: true }), await (0, $t.writeFile)(this.mcpAuthPath, JSON.stringify(e3, null, 2));
      }
    }
    dn.mcpAuthPromises = /* @__PURE__ */ new Map(), dn.saveLocks = /* @__PURE__ */ new Map();
    var pn, fn, hn = o(6982), mn = o(9896), gn = o(6928);
    !(function(e3) {
      e3.assertEqual = (e4) => {
      }, e3.assertIs = function(e4) {
      }, e3.assertNever = function(e4) {
        throw new Error();
      }, e3.arrayToEnum = (e4) => {
        const t3 = {};
        for (const r3 of e4) t3[r3] = r3;
        return t3;
      }, e3.getValidEnumValues = (t3) => {
        const r3 = e3.objectKeys(t3).filter((e4) => "number" != typeof t3[t3[e4]]), n3 = {};
        for (const e4 of r3) n3[e4] = t3[e4];
        return e3.objectValues(n3);
      }, e3.objectValues = (t3) => e3.objectKeys(t3).map(function(e4) {
        return t3[e4];
      }), e3.objectKeys = "function" == typeof Object.keys ? (e4) => Object.keys(e4) : (e4) => {
        const t3 = [];
        for (const r3 in e4) Object.prototype.hasOwnProperty.call(e4, r3) && t3.push(r3);
        return t3;
      }, e3.find = (e4, t3) => {
        for (const r3 of e4) if (t3(r3)) return r3;
      }, e3.isInteger = "function" == typeof Number.isInteger ? (e4) => Number.isInteger(e4) : (e4) => "number" == typeof e4 && Number.isFinite(e4) && Math.floor(e4) === e4, e3.joinValues = function(e4, t3 = " | ") {
        return e4.map((e5) => "string" == typeof e5 ? `'${e5}'` : e5).join(t3);
      }, e3.jsonStringifyReplacer = (e4, t3) => "bigint" == typeof t3 ? t3.toString() : t3;
    })(pn || (pn = {})), (function(e3) {
      e3.mergeShapes = (e4, t3) => ({ ...e4, ...t3 });
    })(fn || (fn = {}));
    const yn = pn.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), _n = (e3) => {
      switch (typeof e3) {
        case "undefined":
          return yn.undefined;
        case "string":
          return yn.string;
        case "number":
          return Number.isNaN(e3) ? yn.nan : yn.number;
        case "boolean":
          return yn.boolean;
        case "function":
          return yn.function;
        case "bigint":
          return yn.bigint;
        case "symbol":
          return yn.symbol;
        case "object":
          return Array.isArray(e3) ? yn.array : null === e3 ? yn.null : e3.then && "function" == typeof e3.then && e3.catch && "function" == typeof e3.catch ? yn.promise : "undefined" != typeof Map && e3 instanceof Map ? yn.map : "undefined" != typeof Set && e3 instanceof Set ? yn.set : "undefined" != typeof Date && e3 instanceof Date ? yn.date : yn.object;
        default:
          return yn.unknown;
      }
    }, vn = pn.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class wn extends Error {
      get errors() {
        return this.issues;
      }
      constructor(e3) {
        super(), this.issues = [], this.addIssue = (e4) => {
          this.issues = [...this.issues, e4];
        }, this.addIssues = (e4 = []) => {
          this.issues = [...this.issues, ...e4];
        };
        const t3 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t3) : this.__proto__ = t3, this.name = "ZodError", this.issues = e3;
      }
      format(e3) {
        const t3 = e3 || function(e4) {
          return e4.message;
        }, r3 = { _errors: [] }, n3 = (e4) => {
          for (const o2 of e4.issues) if ("invalid_union" === o2.code) o2.unionErrors.map(n3);
          else if ("invalid_return_type" === o2.code) n3(o2.returnTypeError);
          else if ("invalid_arguments" === o2.code) n3(o2.argumentsError);
          else if (0 === o2.path.length) r3._errors.push(t3(o2));
          else {
            let e5 = r3, n4 = 0;
            for (; n4 < o2.path.length; ) {
              const r4 = o2.path[n4];
              n4 === o2.path.length - 1 ? (e5[r4] = e5[r4] || { _errors: [] }, e5[r4]._errors.push(t3(o2))) : e5[r4] = e5[r4] || { _errors: [] }, e5 = e5[r4], n4++;
            }
          }
        };
        return n3(this), r3;
      }
      static assert(e3) {
        if (!(e3 instanceof wn)) throw new Error(`Not a ZodError: ${e3}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, pn.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return 0 === this.issues.length;
      }
      flatten(e3 = (e4) => e4.message) {
        const t3 = /* @__PURE__ */ Object.create(null), r3 = [];
        for (const n3 of this.issues) if (n3.path.length > 0) {
          const r4 = n3.path[0];
          t3[r4] = t3[r4] || [], t3[r4].push(e3(n3));
        } else r3.push(e3(n3));
        return { formErrors: r3, fieldErrors: t3 };
      }
      get formErrors() {
        return this.flatten();
      }
    }
    wn.create = (e3) => new wn(e3);
    const bn = (e3, t3) => {
      let r3;
      switch (e3.code) {
        case vn.invalid_type:
          r3 = e3.received === yn.undefined ? "Required" : `Expected ${e3.expected}, received ${e3.received}`;
          break;
        case vn.invalid_literal:
          r3 = `Invalid literal value, expected ${JSON.stringify(e3.expected, pn.jsonStringifyReplacer)}`;
          break;
        case vn.unrecognized_keys:
          r3 = `Unrecognized key(s) in object: ${pn.joinValues(e3.keys, ", ")}`;
          break;
        case vn.invalid_union:
          r3 = "Invalid input";
          break;
        case vn.invalid_union_discriminator:
          r3 = `Invalid discriminator value. Expected ${pn.joinValues(e3.options)}`;
          break;
        case vn.invalid_enum_value:
          r3 = `Invalid enum value. Expected ${pn.joinValues(e3.options)}, received '${e3.received}'`;
          break;
        case vn.invalid_arguments:
          r3 = "Invalid function arguments";
          break;
        case vn.invalid_return_type:
          r3 = "Invalid function return type";
          break;
        case vn.invalid_date:
          r3 = "Invalid date";
          break;
        case vn.invalid_string:
          "object" == typeof e3.validation ? "includes" in e3.validation ? (r3 = `Invalid input: must include "${e3.validation.includes}"`, "number" == typeof e3.validation.position && (r3 = `${r3} at one or more positions greater than or equal to ${e3.validation.position}`)) : "startsWith" in e3.validation ? r3 = `Invalid input: must start with "${e3.validation.startsWith}"` : "endsWith" in e3.validation ? r3 = `Invalid input: must end with "${e3.validation.endsWith}"` : pn.assertNever(e3.validation) : r3 = "regex" !== e3.validation ? `Invalid ${e3.validation}` : "Invalid";
          break;
        case vn.too_small:
          r3 = "array" === e3.type ? `Array must contain ${e3.exact ? "exactly" : e3.inclusive ? "at least" : "more than"} ${e3.minimum} element(s)` : "string" === e3.type ? `String must contain ${e3.exact ? "exactly" : e3.inclusive ? "at least" : "over"} ${e3.minimum} character(s)` : "number" === e3.type || "bigint" === e3.type ? `Number must be ${e3.exact ? "exactly equal to " : e3.inclusive ? "greater than or equal to " : "greater than "}${e3.minimum}` : "date" === e3.type ? `Date must be ${e3.exact ? "exactly equal to " : e3.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e3.minimum))}` : "Invalid input";
          break;
        case vn.too_big:
          r3 = "array" === e3.type ? `Array must contain ${e3.exact ? "exactly" : e3.inclusive ? "at most" : "less than"} ${e3.maximum} element(s)` : "string" === e3.type ? `String must contain ${e3.exact ? "exactly" : e3.inclusive ? "at most" : "under"} ${e3.maximum} character(s)` : "number" === e3.type ? `Number must be ${e3.exact ? "exactly" : e3.inclusive ? "less than or equal to" : "less than"} ${e3.maximum}` : "bigint" === e3.type ? `BigInt must be ${e3.exact ? "exactly" : e3.inclusive ? "less than or equal to" : "less than"} ${e3.maximum}` : "date" === e3.type ? `Date must be ${e3.exact ? "exactly" : e3.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e3.maximum))}` : "Invalid input";
          break;
        case vn.custom:
          r3 = "Invalid input";
          break;
        case vn.invalid_intersection_types:
          r3 = "Intersection results could not be merged";
          break;
        case vn.not_multiple_of:
          r3 = `Number must be a multiple of ${e3.multipleOf}`;
          break;
        case vn.not_finite:
          r3 = "Number must be finite";
          break;
        default:
          r3 = t3.defaultError, pn.assertNever(e3);
      }
      return { message: r3 };
    };
    let Sn = bn;
    function kn() {
      return Sn;
    }
    const En = (e3) => {
      const { data: t3, path: r3, errorMaps: n3, issueData: o2 } = e3, s2 = [...r3, ...o2.path || []], i3 = { ...o2, path: s2 };
      if (void 0 !== o2.message) return { ...o2, path: s2, message: o2.message };
      let a3 = "";
      const c2 = n3.filter((e4) => !!e4).slice().reverse();
      for (const e4 of c2) a3 = e4(i3, { data: t3, defaultError: a3 }).message;
      return { ...o2, path: s2, message: a3 };
    };
    function xn(e3, t3) {
      const r3 = kn(), n3 = En({ issueData: t3, data: e3.data, path: e3.path, errorMaps: [e3.common.contextualErrorMap, e3.schemaErrorMap, r3, r3 === bn ? void 0 : bn].filter((e4) => !!e4) });
      e3.common.issues.push(n3);
    }
    class Tn {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        "valid" === this.value && (this.value = "dirty");
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted");
      }
      static mergeArray(e3, t3) {
        const r3 = [];
        for (const n3 of t3) {
          if ("aborted" === n3.status) return On;
          "dirty" === n3.status && e3.dirty(), r3.push(n3.value);
        }
        return { status: e3.value, value: r3 };
      }
      static async mergeObjectAsync(e3, t3) {
        const r3 = [];
        for (const e4 of t3) {
          const t4 = await e4.key, n3 = await e4.value;
          r3.push({ key: t4, value: n3 });
        }
        return Tn.mergeObjectSync(e3, r3);
      }
      static mergeObjectSync(e3, t3) {
        const r3 = {};
        for (const n3 of t3) {
          const { key: t4, value: o2 } = n3;
          if ("aborted" === t4.status) return On;
          if ("aborted" === o2.status) return On;
          "dirty" === t4.status && e3.dirty(), "dirty" === o2.status && e3.dirty(), "__proto__" === t4.value || void 0 === o2.value && !n3.alwaysSet || (r3[t4.value] = o2.value);
        }
        return { status: e3.value, value: r3 };
      }
    }
    const On = Object.freeze({ status: "aborted" }), Pn = (e3) => ({ status: "dirty", value: e3 }), In = (e3) => ({ status: "valid", value: e3 }), Cn = (e3) => "aborted" === e3.status, An = (e3) => "dirty" === e3.status, $n = (e3) => "valid" === e3.status, Rn = (e3) => "undefined" != typeof Promise && e3 instanceof Promise;
    var Nn;
    !(function(e3) {
      e3.errToObj = (e4) => "string" == typeof e4 ? { message: e4 } : e4 || {}, e3.toString = (e4) => "string" == typeof e4 ? e4 : e4?.message;
    })(Nn || (Nn = {}));
    class Mn {
      constructor(e3, t3, r3, n3) {
        this._cachedPath = [], this.parent = e3, this.data = t3, this._path = r3, this._key = n3;
      }
      get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    }
    const Jn = (e3, t3) => {
      if ($n(t3)) return { success: true, data: t3.value };
      if (!e3.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error) return this._error;
        const t4 = new wn(e3.common.issues);
        return this._error = t4, this._error;
      } };
    };
    function jn(e3) {
      if (!e3) return {};
      const { errorMap: t3, invalid_type_error: r3, required_error: n3, description: o2 } = e3;
      if (t3 && (r3 || n3)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      if (t3) return { errorMap: t3, description: o2 };
      return { errorMap: (t4, o3) => {
        const { message: s2 } = e3;
        return "invalid_enum_value" === t4.code ? { message: s2 ?? o3.defaultError } : void 0 === o3.data ? { message: s2 ?? n3 ?? o3.defaultError } : "invalid_type" !== t4.code ? { message: o3.defaultError } : { message: s2 ?? r3 ?? o3.defaultError };
      }, description: o2 };
    }
    class Dn {
      get description() {
        return this._def.description;
      }
      _getType(e3) {
        return _n(e3.data);
      }
      _getOrReturnCtx(e3, t3) {
        return t3 || { common: e3.parent.common, data: e3.data, parsedType: _n(e3.data), schemaErrorMap: this._def.errorMap, path: e3.path, parent: e3.parent };
      }
      _processInputParams(e3) {
        return { status: new Tn(), ctx: { common: e3.parent.common, data: e3.data, parsedType: _n(e3.data), schemaErrorMap: this._def.errorMap, path: e3.path, parent: e3.parent } };
      }
      _parseSync(e3) {
        const t3 = this._parse(e3);
        if (Rn(t3)) throw new Error("Synchronous parse encountered promise.");
        return t3;
      }
      _parseAsync(e3) {
        const t3 = this._parse(e3);
        return Promise.resolve(t3);
      }
      parse(e3, t3) {
        const r3 = this.safeParse(e3, t3);
        if (r3.success) return r3.data;
        throw r3.error;
      }
      safeParse(e3, t3) {
        const r3 = { common: { issues: [], async: t3?.async ?? false, contextualErrorMap: t3?.errorMap }, path: t3?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e3, parsedType: _n(e3) }, n3 = this._parseSync({ data: e3, path: r3.path, parent: r3 });
        return Jn(r3, n3);
      }
      "~validate"(e3) {
        const t3 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e3, parsedType: _n(e3) };
        if (!this["~standard"].async) try {
          const r3 = this._parseSync({ data: e3, path: [], parent: t3 });
          return $n(r3) ? { value: r3.value } : { issues: t3.common.issues };
        } catch (e4) {
          e4?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t3.common = { issues: [], async: true };
        }
        return this._parseAsync({ data: e3, path: [], parent: t3 }).then((e4) => $n(e4) ? { value: e4.value } : { issues: t3.common.issues });
      }
      async parseAsync(e3, t3) {
        const r3 = await this.safeParseAsync(e3, t3);
        if (r3.success) return r3.data;
        throw r3.error;
      }
      async safeParseAsync(e3, t3) {
        const r3 = { common: { issues: [], contextualErrorMap: t3?.errorMap, async: true }, path: t3?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e3, parsedType: _n(e3) }, n3 = this._parse({ data: e3, path: r3.path, parent: r3 }), o2 = await (Rn(n3) ? n3 : Promise.resolve(n3));
        return Jn(r3, o2);
      }
      refine(e3, t3) {
        const r3 = (e4) => "string" == typeof t3 || void 0 === t3 ? { message: t3 } : "function" == typeof t3 ? t3(e4) : t3;
        return this._refinement((t4, n3) => {
          const o2 = e3(t4), s2 = () => n3.addIssue({ code: vn.custom, ...r3(t4) });
          return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then((e4) => !!e4 || (s2(), false)) : !!o2 || (s2(), false);
        });
      }
      refinement(e3, t3) {
        return this._refinement((r3, n3) => !!e3(r3) || (n3.addIssue("function" == typeof t3 ? t3(r3, n3) : t3), false));
      }
      _refinement(e3) {
        return new Do({ schema: this, typeName: Zo.ZodEffects, effect: { type: "refinement", refinement: e3 } });
      }
      superRefine(e3) {
        return this._refinement(e3);
      }
      constructor(e3) {
        this.spa = this.safeParseAsync, this._def = e3, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (e4) => this["~validate"](e4) };
      }
      optional() {
        return Fo.create(this, this._def);
      }
      nullable() {
        return qo.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return So.create(this);
      }
      promise() {
        return jo.create(this, this._def);
      }
      or(e3) {
        return xo.create([this, e3], this._def);
      }
      and(e3) {
        return Oo.create(this, e3, this._def);
      }
      transform(e3) {
        return new Do({ ...jn(this._def), schema: this, typeName: Zo.ZodEffects, effect: { type: "transform", transform: e3 } });
      }
      default(e3) {
        const t3 = "function" == typeof e3 ? e3 : () => e3;
        return new zo({ ...jn(this._def), innerType: this, defaultValue: t3, typeName: Zo.ZodDefault });
      }
      brand() {
        return new Lo({ typeName: Zo.ZodBranded, type: this, ...jn(this._def) });
      }
      catch(e3) {
        const t3 = "function" == typeof e3 ? e3 : () => e3;
        return new Uo({ ...jn(this._def), innerType: this, catchValue: t3, typeName: Zo.ZodCatch });
      }
      describe(e3) {
        return new (0, this.constructor)({ ...this._def, description: e3 });
      }
      pipe(e3) {
        return Vo.create(this, e3);
      }
      readonly() {
        return Ko.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }
    const Fn = /^c[^\s-]{8,}$/i, qn = /^[0-9a-z]+$/, zn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Un = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Bn = /^[a-z0-9_-]{21}$/i, Ln = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Vn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Kn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Zn;
    const Wn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Yn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Xn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Qn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, eo = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", to = new RegExp(`^${eo}$`);
    function ro(e3) {
      let t3 = "[0-5]\\d";
      e3.precision ? t3 = `${t3}\\.\\d{${e3.precision}}` : null == e3.precision && (t3 = `${t3}(\\.\\d+)?`);
      return `([01]\\d|2[0-3]):[0-5]\\d(:${t3})${e3.precision ? "+" : "?"}`;
    }
    function no(e3) {
      return new RegExp(`^${ro(e3)}$`);
    }
    function oo(e3) {
      let t3 = `${eo}T${ro(e3)}`;
      const r3 = [];
      return r3.push(e3.local ? "Z?" : "Z"), e3.offset && r3.push("([+-]\\d{2}:?\\d{2})"), t3 = `${t3}(${r3.join("|")})`, new RegExp(`^${t3}$`);
    }
    function so(e3, t3) {
      return !("v4" !== t3 && t3 || !Wn.test(e3)) || !("v6" !== t3 && t3 || !Yn.test(e3));
    }
    function io(e3, t3) {
      if (!Ln.test(e3)) return false;
      try {
        const [r3] = e3.split(".");
        if (!r3) return false;
        const n3 = r3.replace(/-/g, "+").replace(/_/g, "/").padEnd(r3.length + (4 - r3.length % 4) % 4, "="), o2 = JSON.parse(atob(n3));
        return "object" == typeof o2 && null !== o2 && ((!("typ" in o2) || "JWT" === o2?.typ) && (!!o2.alg && (!t3 || o2.alg === t3)));
      } catch {
        return false;
      }
    }
    function ao(e3, t3) {
      return !("v4" !== t3 && t3 || !Hn.test(e3)) || !("v6" !== t3 && t3 || !Gn.test(e3));
    }
    class co extends Dn {
      _parse(e3) {
        this._def.coerce && (e3.data = String(e3.data));
        if (this._getType(e3) !== yn.string) {
          const t4 = this._getOrReturnCtx(e3);
          return xn(t4, { code: vn.invalid_type, expected: yn.string, received: t4.parsedType }), On;
        }
        const t3 = new Tn();
        let r3;
        for (const n3 of this._def.checks) if ("min" === n3.kind) e3.data.length < n3.value && (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.too_small, minimum: n3.value, type: "string", inclusive: true, exact: false, message: n3.message }), t3.dirty());
        else if ("max" === n3.kind) e3.data.length > n3.value && (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.too_big, maximum: n3.value, type: "string", inclusive: true, exact: false, message: n3.message }), t3.dirty());
        else if ("length" === n3.kind) {
          const o2 = e3.data.length > n3.value, s2 = e3.data.length < n3.value;
          (o2 || s2) && (r3 = this._getOrReturnCtx(e3, r3), o2 ? xn(r3, { code: vn.too_big, maximum: n3.value, type: "string", inclusive: true, exact: true, message: n3.message }) : s2 && xn(r3, { code: vn.too_small, minimum: n3.value, type: "string", inclusive: true, exact: true, message: n3.message }), t3.dirty());
        } else if ("email" === n3.kind) Kn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "email", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("emoji" === n3.kind) Zn || (Zn = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Zn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "emoji", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("uuid" === n3.kind) Un.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "uuid", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("nanoid" === n3.kind) Bn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "nanoid", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("cuid" === n3.kind) Fn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "cuid", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("cuid2" === n3.kind) qn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "cuid2", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("ulid" === n3.kind) zn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "ulid", code: vn.invalid_string, message: n3.message }), t3.dirty());
        else if ("url" === n3.kind) try {
          new URL(e3.data);
        } catch {
          r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "url", code: vn.invalid_string, message: n3.message }), t3.dirty();
        }
        else if ("regex" === n3.kind) {
          n3.regex.lastIndex = 0;
          n3.regex.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "regex", code: vn.invalid_string, message: n3.message }), t3.dirty());
        } else if ("trim" === n3.kind) e3.data = e3.data.trim();
        else if ("includes" === n3.kind) e3.data.includes(n3.value, n3.position) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: { includes: n3.value, position: n3.position }, message: n3.message }), t3.dirty());
        else if ("toLowerCase" === n3.kind) e3.data = e3.data.toLowerCase();
        else if ("toUpperCase" === n3.kind) e3.data = e3.data.toUpperCase();
        else if ("startsWith" === n3.kind) e3.data.startsWith(n3.value) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: { startsWith: n3.value }, message: n3.message }), t3.dirty());
        else if ("endsWith" === n3.kind) e3.data.endsWith(n3.value) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: { endsWith: n3.value }, message: n3.message }), t3.dirty());
        else if ("datetime" === n3.kind) {
          oo(n3).test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: "datetime", message: n3.message }), t3.dirty());
        } else if ("date" === n3.kind) {
          to.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: "date", message: n3.message }), t3.dirty());
        } else if ("time" === n3.kind) {
          no(n3).test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.invalid_string, validation: "time", message: n3.message }), t3.dirty());
        } else "duration" === n3.kind ? Vn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "duration", code: vn.invalid_string, message: n3.message }), t3.dirty()) : "ip" === n3.kind ? so(e3.data, n3.version) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "ip", code: vn.invalid_string, message: n3.message }), t3.dirty()) : "jwt" === n3.kind ? io(e3.data, n3.alg) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "jwt", code: vn.invalid_string, message: n3.message }), t3.dirty()) : "cidr" === n3.kind ? ao(e3.data, n3.version) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "cidr", code: vn.invalid_string, message: n3.message }), t3.dirty()) : "base64" === n3.kind ? Xn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "base64", code: vn.invalid_string, message: n3.message }), t3.dirty()) : "base64url" === n3.kind ? Qn.test(e3.data) || (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { validation: "base64url", code: vn.invalid_string, message: n3.message }), t3.dirty()) : pn.assertNever(n3);
        return { status: t3.value, value: e3.data };
      }
      _regex(e3, t3, r3) {
        return this.refinement((t4) => e3.test(t4), { validation: t3, code: vn.invalid_string, ...Nn.errToObj(r3) });
      }
      _addCheck(e3) {
        return new co({ ...this._def, checks: [...this._def.checks, e3] });
      }
      email(e3) {
        return this._addCheck({ kind: "email", ...Nn.errToObj(e3) });
      }
      url(e3) {
        return this._addCheck({ kind: "url", ...Nn.errToObj(e3) });
      }
      emoji(e3) {
        return this._addCheck({ kind: "emoji", ...Nn.errToObj(e3) });
      }
      uuid(e3) {
        return this._addCheck({ kind: "uuid", ...Nn.errToObj(e3) });
      }
      nanoid(e3) {
        return this._addCheck({ kind: "nanoid", ...Nn.errToObj(e3) });
      }
      cuid(e3) {
        return this._addCheck({ kind: "cuid", ...Nn.errToObj(e3) });
      }
      cuid2(e3) {
        return this._addCheck({ kind: "cuid2", ...Nn.errToObj(e3) });
      }
      ulid(e3) {
        return this._addCheck({ kind: "ulid", ...Nn.errToObj(e3) });
      }
      base64(e3) {
        return this._addCheck({ kind: "base64", ...Nn.errToObj(e3) });
      }
      base64url(e3) {
        return this._addCheck({ kind: "base64url", ...Nn.errToObj(e3) });
      }
      jwt(e3) {
        return this._addCheck({ kind: "jwt", ...Nn.errToObj(e3) });
      }
      ip(e3) {
        return this._addCheck({ kind: "ip", ...Nn.errToObj(e3) });
      }
      cidr(e3) {
        return this._addCheck({ kind: "cidr", ...Nn.errToObj(e3) });
      }
      datetime(e3) {
        return "string" == typeof e3 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e3 }) : this._addCheck({ kind: "datetime", precision: void 0 === e3?.precision ? null : e3?.precision, offset: e3?.offset ?? false, local: e3?.local ?? false, ...Nn.errToObj(e3?.message) });
      }
      date(e3) {
        return this._addCheck({ kind: "date", message: e3 });
      }
      time(e3) {
        return "string" == typeof e3 ? this._addCheck({ kind: "time", precision: null, message: e3 }) : this._addCheck({ kind: "time", precision: void 0 === e3?.precision ? null : e3?.precision, ...Nn.errToObj(e3?.message) });
      }
      duration(e3) {
        return this._addCheck({ kind: "duration", ...Nn.errToObj(e3) });
      }
      regex(e3, t3) {
        return this._addCheck({ kind: "regex", regex: e3, ...Nn.errToObj(t3) });
      }
      includes(e3, t3) {
        return this._addCheck({ kind: "includes", value: e3, position: t3?.position, ...Nn.errToObj(t3?.message) });
      }
      startsWith(e3, t3) {
        return this._addCheck({ kind: "startsWith", value: e3, ...Nn.errToObj(t3) });
      }
      endsWith(e3, t3) {
        return this._addCheck({ kind: "endsWith", value: e3, ...Nn.errToObj(t3) });
      }
      min(e3, t3) {
        return this._addCheck({ kind: "min", value: e3, ...Nn.errToObj(t3) });
      }
      max(e3, t3) {
        return this._addCheck({ kind: "max", value: e3, ...Nn.errToObj(t3) });
      }
      length(e3, t3) {
        return this._addCheck({ kind: "length", value: e3, ...Nn.errToObj(t3) });
      }
      nonempty(e3) {
        return this.min(1, Nn.errToObj(e3));
      }
      trim() {
        return new co({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new co({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new co({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e3) => "datetime" === e3.kind);
      }
      get isDate() {
        return !!this._def.checks.find((e3) => "date" === e3.kind);
      }
      get isTime() {
        return !!this._def.checks.find((e3) => "time" === e3.kind);
      }
      get isDuration() {
        return !!this._def.checks.find((e3) => "duration" === e3.kind);
      }
      get isEmail() {
        return !!this._def.checks.find((e3) => "email" === e3.kind);
      }
      get isURL() {
        return !!this._def.checks.find((e3) => "url" === e3.kind);
      }
      get isEmoji() {
        return !!this._def.checks.find((e3) => "emoji" === e3.kind);
      }
      get isUUID() {
        return !!this._def.checks.find((e3) => "uuid" === e3.kind);
      }
      get isNANOID() {
        return !!this._def.checks.find((e3) => "nanoid" === e3.kind);
      }
      get isCUID() {
        return !!this._def.checks.find((e3) => "cuid" === e3.kind);
      }
      get isCUID2() {
        return !!this._def.checks.find((e3) => "cuid2" === e3.kind);
      }
      get isULID() {
        return !!this._def.checks.find((e3) => "ulid" === e3.kind);
      }
      get isIP() {
        return !!this._def.checks.find((e3) => "ip" === e3.kind);
      }
      get isCIDR() {
        return !!this._def.checks.find((e3) => "cidr" === e3.kind);
      }
      get isBase64() {
        return !!this._def.checks.find((e3) => "base64" === e3.kind);
      }
      get isBase64url() {
        return !!this._def.checks.find((e3) => "base64url" === e3.kind);
      }
      get minLength() {
        let e3 = null;
        for (const t3 of this._def.checks) "min" === t3.kind && (null === e3 || t3.value > e3) && (e3 = t3.value);
        return e3;
      }
      get maxLength() {
        let e3 = null;
        for (const t3 of this._def.checks) "max" === t3.kind && (null === e3 || t3.value < e3) && (e3 = t3.value);
        return e3;
      }
    }
    function uo(e3, t3) {
      const r3 = (e3.toString().split(".")[1] || "").length, n3 = (t3.toString().split(".")[1] || "").length, o2 = r3 > n3 ? r3 : n3;
      return Number.parseInt(e3.toFixed(o2).replace(".", "")) % Number.parseInt(t3.toFixed(o2).replace(".", "")) / 10 ** o2;
    }
    co.create = (e3) => new co({ checks: [], typeName: Zo.ZodString, coerce: e3?.coerce ?? false, ...jn(e3) });
    class lo extends Dn {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e3) {
        this._def.coerce && (e3.data = Number(e3.data));
        if (this._getType(e3) !== yn.number) {
          const t4 = this._getOrReturnCtx(e3);
          return xn(t4, { code: vn.invalid_type, expected: yn.number, received: t4.parsedType }), On;
        }
        let t3;
        const r3 = new Tn();
        for (const n3 of this._def.checks) if ("int" === n3.kind) pn.isInteger(e3.data) || (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.invalid_type, expected: "integer", received: "float", message: n3.message }), r3.dirty());
        else if ("min" === n3.kind) {
          (n3.inclusive ? e3.data < n3.value : e3.data <= n3.value) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.too_small, minimum: n3.value, type: "number", inclusive: n3.inclusive, exact: false, message: n3.message }), r3.dirty());
        } else if ("max" === n3.kind) {
          (n3.inclusive ? e3.data > n3.value : e3.data >= n3.value) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.too_big, maximum: n3.value, type: "number", inclusive: n3.inclusive, exact: false, message: n3.message }), r3.dirty());
        } else "multipleOf" === n3.kind ? 0 !== uo(e3.data, n3.value) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.not_multiple_of, multipleOf: n3.value, message: n3.message }), r3.dirty()) : "finite" === n3.kind ? Number.isFinite(e3.data) || (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.not_finite, message: n3.message }), r3.dirty()) : pn.assertNever(n3);
        return { status: r3.value, value: e3.data };
      }
      gte(e3, t3) {
        return this.setLimit("min", e3, true, Nn.toString(t3));
      }
      gt(e3, t3) {
        return this.setLimit("min", e3, false, Nn.toString(t3));
      }
      lte(e3, t3) {
        return this.setLimit("max", e3, true, Nn.toString(t3));
      }
      lt(e3, t3) {
        return this.setLimit("max", e3, false, Nn.toString(t3));
      }
      setLimit(e3, t3, r3, n3) {
        return new lo({ ...this._def, checks: [...this._def.checks, { kind: e3, value: t3, inclusive: r3, message: Nn.toString(n3) }] });
      }
      _addCheck(e3) {
        return new lo({ ...this._def, checks: [...this._def.checks, e3] });
      }
      int(e3) {
        return this._addCheck({ kind: "int", message: Nn.toString(e3) });
      }
      positive(e3) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: Nn.toString(e3) });
      }
      negative(e3) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: Nn.toString(e3) });
      }
      nonpositive(e3) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: Nn.toString(e3) });
      }
      nonnegative(e3) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: Nn.toString(e3) });
      }
      multipleOf(e3, t3) {
        return this._addCheck({ kind: "multipleOf", value: e3, message: Nn.toString(t3) });
      }
      finite(e3) {
        return this._addCheck({ kind: "finite", message: Nn.toString(e3) });
      }
      safe(e3) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: Nn.toString(e3) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: Nn.toString(e3) });
      }
      get minValue() {
        let e3 = null;
        for (const t3 of this._def.checks) "min" === t3.kind && (null === e3 || t3.value > e3) && (e3 = t3.value);
        return e3;
      }
      get maxValue() {
        let e3 = null;
        for (const t3 of this._def.checks) "max" === t3.kind && (null === e3 || t3.value < e3) && (e3 = t3.value);
        return e3;
      }
      get isInt() {
        return !!this._def.checks.find((e3) => "int" === e3.kind || "multipleOf" === e3.kind && pn.isInteger(e3.value));
      }
      get isFinite() {
        let e3 = null, t3 = null;
        for (const r3 of this._def.checks) {
          if ("finite" === r3.kind || "int" === r3.kind || "multipleOf" === r3.kind) return true;
          "min" === r3.kind ? (null === t3 || r3.value > t3) && (t3 = r3.value) : "max" === r3.kind && (null === e3 || r3.value < e3) && (e3 = r3.value);
        }
        return Number.isFinite(t3) && Number.isFinite(e3);
      }
    }
    lo.create = (e3) => new lo({ checks: [], typeName: Zo.ZodNumber, coerce: e3?.coerce || false, ...jn(e3) });
    class po extends Dn {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(e3) {
        if (this._def.coerce) try {
          e3.data = BigInt(e3.data);
        } catch {
          return this._getInvalidInput(e3);
        }
        if (this._getType(e3) !== yn.bigint) return this._getInvalidInput(e3);
        let t3;
        const r3 = new Tn();
        for (const n3 of this._def.checks) if ("min" === n3.kind) {
          (n3.inclusive ? e3.data < n3.value : e3.data <= n3.value) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.too_small, type: "bigint", minimum: n3.value, inclusive: n3.inclusive, message: n3.message }), r3.dirty());
        } else if ("max" === n3.kind) {
          (n3.inclusive ? e3.data > n3.value : e3.data >= n3.value) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.too_big, type: "bigint", maximum: n3.value, inclusive: n3.inclusive, message: n3.message }), r3.dirty());
        } else "multipleOf" === n3.kind ? e3.data % n3.value !== BigInt(0) && (t3 = this._getOrReturnCtx(e3, t3), xn(t3, { code: vn.not_multiple_of, multipleOf: n3.value, message: n3.message }), r3.dirty()) : pn.assertNever(n3);
        return { status: r3.value, value: e3.data };
      }
      _getInvalidInput(e3) {
        const t3 = this._getOrReturnCtx(e3);
        return xn(t3, { code: vn.invalid_type, expected: yn.bigint, received: t3.parsedType }), On;
      }
      gte(e3, t3) {
        return this.setLimit("min", e3, true, Nn.toString(t3));
      }
      gt(e3, t3) {
        return this.setLimit("min", e3, false, Nn.toString(t3));
      }
      lte(e3, t3) {
        return this.setLimit("max", e3, true, Nn.toString(t3));
      }
      lt(e3, t3) {
        return this.setLimit("max", e3, false, Nn.toString(t3));
      }
      setLimit(e3, t3, r3, n3) {
        return new po({ ...this._def, checks: [...this._def.checks, { kind: e3, value: t3, inclusive: r3, message: Nn.toString(n3) }] });
      }
      _addCheck(e3) {
        return new po({ ...this._def, checks: [...this._def.checks, e3] });
      }
      positive(e3) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: Nn.toString(e3) });
      }
      negative(e3) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: Nn.toString(e3) });
      }
      nonpositive(e3) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: Nn.toString(e3) });
      }
      nonnegative(e3) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: Nn.toString(e3) });
      }
      multipleOf(e3, t3) {
        return this._addCheck({ kind: "multipleOf", value: e3, message: Nn.toString(t3) });
      }
      get minValue() {
        let e3 = null;
        for (const t3 of this._def.checks) "min" === t3.kind && (null === e3 || t3.value > e3) && (e3 = t3.value);
        return e3;
      }
      get maxValue() {
        let e3 = null;
        for (const t3 of this._def.checks) "max" === t3.kind && (null === e3 || t3.value < e3) && (e3 = t3.value);
        return e3;
      }
    }
    po.create = (e3) => new po({ checks: [], typeName: Zo.ZodBigInt, coerce: e3?.coerce ?? false, ...jn(e3) });
    class fo extends Dn {
      _parse(e3) {
        this._def.coerce && (e3.data = Boolean(e3.data));
        if (this._getType(e3) !== yn.boolean) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.boolean, received: t3.parsedType }), On;
        }
        return In(e3.data);
      }
    }
    fo.create = (e3) => new fo({ typeName: Zo.ZodBoolean, coerce: e3?.coerce || false, ...jn(e3) });
    class ho extends Dn {
      _parse(e3) {
        this._def.coerce && (e3.data = new Date(e3.data));
        if (this._getType(e3) !== yn.date) {
          const t4 = this._getOrReturnCtx(e3);
          return xn(t4, { code: vn.invalid_type, expected: yn.date, received: t4.parsedType }), On;
        }
        if (Number.isNaN(e3.data.getTime())) {
          return xn(this._getOrReturnCtx(e3), { code: vn.invalid_date }), On;
        }
        const t3 = new Tn();
        let r3;
        for (const n3 of this._def.checks) "min" === n3.kind ? e3.data.getTime() < n3.value && (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.too_small, message: n3.message, inclusive: true, exact: false, minimum: n3.value, type: "date" }), t3.dirty()) : "max" === n3.kind ? e3.data.getTime() > n3.value && (r3 = this._getOrReturnCtx(e3, r3), xn(r3, { code: vn.too_big, message: n3.message, inclusive: true, exact: false, maximum: n3.value, type: "date" }), t3.dirty()) : pn.assertNever(n3);
        return { status: t3.value, value: new Date(e3.data.getTime()) };
      }
      _addCheck(e3) {
        return new ho({ ...this._def, checks: [...this._def.checks, e3] });
      }
      min(e3, t3) {
        return this._addCheck({ kind: "min", value: e3.getTime(), message: Nn.toString(t3) });
      }
      max(e3, t3) {
        return this._addCheck({ kind: "max", value: e3.getTime(), message: Nn.toString(t3) });
      }
      get minDate() {
        let e3 = null;
        for (const t3 of this._def.checks) "min" === t3.kind && (null === e3 || t3.value > e3) && (e3 = t3.value);
        return null != e3 ? new Date(e3) : null;
      }
      get maxDate() {
        let e3 = null;
        for (const t3 of this._def.checks) "max" === t3.kind && (null === e3 || t3.value < e3) && (e3 = t3.value);
        return null != e3 ? new Date(e3) : null;
      }
    }
    ho.create = (e3) => new ho({ checks: [], coerce: e3?.coerce || false, typeName: Zo.ZodDate, ...jn(e3) });
    class mo extends Dn {
      _parse(e3) {
        if (this._getType(e3) !== yn.symbol) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.symbol, received: t3.parsedType }), On;
        }
        return In(e3.data);
      }
    }
    mo.create = (e3) => new mo({ typeName: Zo.ZodSymbol, ...jn(e3) });
    class go extends Dn {
      _parse(e3) {
        if (this._getType(e3) !== yn.undefined) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.undefined, received: t3.parsedType }), On;
        }
        return In(e3.data);
      }
    }
    go.create = (e3) => new go({ typeName: Zo.ZodUndefined, ...jn(e3) });
    class yo extends Dn {
      _parse(e3) {
        if (this._getType(e3) !== yn.null) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.null, received: t3.parsedType }), On;
        }
        return In(e3.data);
      }
    }
    yo.create = (e3) => new yo({ typeName: Zo.ZodNull, ...jn(e3) });
    class _o extends Dn {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e3) {
        return In(e3.data);
      }
    }
    _o.create = (e3) => new _o({ typeName: Zo.ZodAny, ...jn(e3) });
    class vo extends Dn {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e3) {
        return In(e3.data);
      }
    }
    vo.create = (e3) => new vo({ typeName: Zo.ZodUnknown, ...jn(e3) });
    class wo extends Dn {
      _parse(e3) {
        const t3 = this._getOrReturnCtx(e3);
        return xn(t3, { code: vn.invalid_type, expected: yn.never, received: t3.parsedType }), On;
      }
    }
    wo.create = (e3) => new wo({ typeName: Zo.ZodNever, ...jn(e3) });
    class bo extends Dn {
      _parse(e3) {
        if (this._getType(e3) !== yn.undefined) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.void, received: t3.parsedType }), On;
        }
        return In(e3.data);
      }
    }
    bo.create = (e3) => new bo({ typeName: Zo.ZodVoid, ...jn(e3) });
    class So extends Dn {
      _parse(e3) {
        const { ctx: t3, status: r3 } = this._processInputParams(e3), n3 = this._def;
        if (t3.parsedType !== yn.array) return xn(t3, { code: vn.invalid_type, expected: yn.array, received: t3.parsedType }), On;
        if (null !== n3.exactLength) {
          const e4 = t3.data.length > n3.exactLength.value, o3 = t3.data.length < n3.exactLength.value;
          (e4 || o3) && (xn(t3, { code: e4 ? vn.too_big : vn.too_small, minimum: o3 ? n3.exactLength.value : void 0, maximum: e4 ? n3.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n3.exactLength.message }), r3.dirty());
        }
        if (null !== n3.minLength && t3.data.length < n3.minLength.value && (xn(t3, { code: vn.too_small, minimum: n3.minLength.value, type: "array", inclusive: true, exact: false, message: n3.minLength.message }), r3.dirty()), null !== n3.maxLength && t3.data.length > n3.maxLength.value && (xn(t3, { code: vn.too_big, maximum: n3.maxLength.value, type: "array", inclusive: true, exact: false, message: n3.maxLength.message }), r3.dirty()), t3.common.async) return Promise.all([...t3.data].map((e4, r4) => n3.type._parseAsync(new Mn(t3, e4, t3.path, r4)))).then((e4) => Tn.mergeArray(r3, e4));
        const o2 = [...t3.data].map((e4, r4) => n3.type._parseSync(new Mn(t3, e4, t3.path, r4)));
        return Tn.mergeArray(r3, o2);
      }
      get element() {
        return this._def.type;
      }
      min(e3, t3) {
        return new So({ ...this._def, minLength: { value: e3, message: Nn.toString(t3) } });
      }
      max(e3, t3) {
        return new So({ ...this._def, maxLength: { value: e3, message: Nn.toString(t3) } });
      }
      length(e3, t3) {
        return new So({ ...this._def, exactLength: { value: e3, message: Nn.toString(t3) } });
      }
      nonempty(e3) {
        return this.min(1, e3);
      }
    }
    function ko(e3) {
      if (e3 instanceof Eo) {
        const t3 = {};
        for (const r3 in e3.shape) {
          const n3 = e3.shape[r3];
          t3[r3] = Fo.create(ko(n3));
        }
        return new Eo({ ...e3._def, shape: () => t3 });
      }
      return e3 instanceof So ? new So({ ...e3._def, type: ko(e3.element) }) : e3 instanceof Fo ? Fo.create(ko(e3.unwrap())) : e3 instanceof qo ? qo.create(ko(e3.unwrap())) : e3 instanceof Po ? Po.create(e3.items.map((e4) => ko(e4))) : e3;
    }
    So.create = (e3, t3) => new So({ type: e3, minLength: null, maxLength: null, exactLength: null, typeName: Zo.ZodArray, ...jn(t3) });
    class Eo extends Dn {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const e3 = this._def.shape(), t3 = pn.objectKeys(e3);
        return this._cached = { shape: e3, keys: t3 }, this._cached;
      }
      _parse(e3) {
        if (this._getType(e3) !== yn.object) {
          const t4 = this._getOrReturnCtx(e3);
          return xn(t4, { code: vn.invalid_type, expected: yn.object, received: t4.parsedType }), On;
        }
        const { status: t3, ctx: r3 } = this._processInputParams(e3), { shape: n3, keys: o2 } = this._getCached(), s2 = [];
        if (!(this._def.catchall instanceof wo && "strip" === this._def.unknownKeys)) for (const e4 in r3.data) o2.includes(e4) || s2.push(e4);
        const i3 = [];
        for (const e4 of o2) {
          const t4 = n3[e4], o3 = r3.data[e4];
          i3.push({ key: { status: "valid", value: e4 }, value: t4._parse(new Mn(r3, o3, r3.path, e4)), alwaysSet: e4 in r3.data });
        }
        if (this._def.catchall instanceof wo) {
          const e4 = this._def.unknownKeys;
          if ("passthrough" === e4) for (const e5 of s2) i3.push({ key: { status: "valid", value: e5 }, value: { status: "valid", value: r3.data[e5] } });
          else if ("strict" === e4) s2.length > 0 && (xn(r3, { code: vn.unrecognized_keys, keys: s2 }), t3.dirty());
          else if ("strip" !== e4) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e4 = this._def.catchall;
          for (const t4 of s2) {
            const n4 = r3.data[t4];
            i3.push({ key: { status: "valid", value: t4 }, value: e4._parse(new Mn(r3, n4, r3.path, t4)), alwaysSet: t4 in r3.data });
          }
        }
        return r3.common.async ? Promise.resolve().then(async () => {
          const e4 = [];
          for (const t4 of i3) {
            const r4 = await t4.key, n4 = await t4.value;
            e4.push({ key: r4, value: n4, alwaysSet: t4.alwaysSet });
          }
          return e4;
        }).then((e4) => Tn.mergeObjectSync(t3, e4)) : Tn.mergeObjectSync(t3, i3);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e3) {
        return Nn.errToObj, new Eo({ ...this._def, unknownKeys: "strict", ...void 0 !== e3 ? { errorMap: (t3, r3) => {
          const n3 = this._def.errorMap?.(t3, r3).message ?? r3.defaultError;
          return "unrecognized_keys" === t3.code ? { message: Nn.errToObj(e3).message ?? n3 } : { message: n3 };
        } } : {} });
      }
      strip() {
        return new Eo({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new Eo({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e3) {
        return new Eo({ ...this._def, shape: () => ({ ...this._def.shape(), ...e3 }) });
      }
      merge(e3) {
        return new Eo({ unknownKeys: e3._def.unknownKeys, catchall: e3._def.catchall, shape: () => ({ ...this._def.shape(), ...e3._def.shape() }), typeName: Zo.ZodObject });
      }
      setKey(e3, t3) {
        return this.augment({ [e3]: t3 });
      }
      catchall(e3) {
        return new Eo({ ...this._def, catchall: e3 });
      }
      pick(e3) {
        const t3 = {};
        for (const r3 of pn.objectKeys(e3)) e3[r3] && this.shape[r3] && (t3[r3] = this.shape[r3]);
        return new Eo({ ...this._def, shape: () => t3 });
      }
      omit(e3) {
        const t3 = {};
        for (const r3 of pn.objectKeys(this.shape)) e3[r3] || (t3[r3] = this.shape[r3]);
        return new Eo({ ...this._def, shape: () => t3 });
      }
      deepPartial() {
        return ko(this);
      }
      partial(e3) {
        const t3 = {};
        for (const r3 of pn.objectKeys(this.shape)) {
          const n3 = this.shape[r3];
          e3 && !e3[r3] ? t3[r3] = n3 : t3[r3] = n3.optional();
        }
        return new Eo({ ...this._def, shape: () => t3 });
      }
      required(e3) {
        const t3 = {};
        for (const r3 of pn.objectKeys(this.shape)) if (e3 && !e3[r3]) t3[r3] = this.shape[r3];
        else {
          let e4 = this.shape[r3];
          for (; e4 instanceof Fo; ) e4 = e4._def.innerType;
          t3[r3] = e4;
        }
        return new Eo({ ...this._def, shape: () => t3 });
      }
      keyof() {
        return No(pn.objectKeys(this.shape));
      }
    }
    Eo.create = (e3, t3) => new Eo({ shape: () => e3, unknownKeys: "strip", catchall: wo.create(), typeName: Zo.ZodObject, ...jn(t3) }), Eo.strictCreate = (e3, t3) => new Eo({ shape: () => e3, unknownKeys: "strict", catchall: wo.create(), typeName: Zo.ZodObject, ...jn(t3) }), Eo.lazycreate = (e3, t3) => new Eo({ shape: e3, unknownKeys: "strip", catchall: wo.create(), typeName: Zo.ZodObject, ...jn(t3) });
    class xo extends Dn {
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3), r3 = this._def.options;
        if (t3.common.async) return Promise.all(r3.map(async (e4) => {
          const r4 = { ...t3, common: { ...t3.common, issues: [] }, parent: null };
          return { result: await e4._parseAsync({ data: t3.data, path: t3.path, parent: r4 }), ctx: r4 };
        })).then(function(e4) {
          for (const t4 of e4) if ("valid" === t4.result.status) return t4.result;
          for (const r5 of e4) if ("dirty" === r5.result.status) return t3.common.issues.push(...r5.ctx.common.issues), r5.result;
          const r4 = e4.map((e5) => new wn(e5.ctx.common.issues));
          return xn(t3, { code: vn.invalid_union, unionErrors: r4 }), On;
        });
        {
          let e4;
          const n3 = [];
          for (const o3 of r3) {
            const r4 = { ...t3, common: { ...t3.common, issues: [] }, parent: null }, s2 = o3._parseSync({ data: t3.data, path: t3.path, parent: r4 });
            if ("valid" === s2.status) return s2;
            "dirty" !== s2.status || e4 || (e4 = { result: s2, ctx: r4 }), r4.common.issues.length && n3.push(r4.common.issues);
          }
          if (e4) return t3.common.issues.push(...e4.ctx.common.issues), e4.result;
          const o2 = n3.map((e5) => new wn(e5));
          return xn(t3, { code: vn.invalid_union, unionErrors: o2 }), On;
        }
      }
      get options() {
        return this._def.options;
      }
    }
    xo.create = (e3, t3) => new xo({ options: e3, typeName: Zo.ZodUnion, ...jn(t3) });
    function To(e3, t3) {
      const r3 = _n(e3), n3 = _n(t3);
      if (e3 === t3) return { valid: true, data: e3 };
      if (r3 === yn.object && n3 === yn.object) {
        const r4 = pn.objectKeys(t3), n4 = pn.objectKeys(e3).filter((e4) => -1 !== r4.indexOf(e4)), o2 = { ...e3, ...t3 };
        for (const r5 of n4) {
          const n5 = To(e3[r5], t3[r5]);
          if (!n5.valid) return { valid: false };
          o2[r5] = n5.data;
        }
        return { valid: true, data: o2 };
      }
      if (r3 === yn.array && n3 === yn.array) {
        if (e3.length !== t3.length) return { valid: false };
        const r4 = [];
        for (let n4 = 0; n4 < e3.length; n4++) {
          const o2 = To(e3[n4], t3[n4]);
          if (!o2.valid) return { valid: false };
          r4.push(o2.data);
        }
        return { valid: true, data: r4 };
      }
      return r3 === yn.date && n3 === yn.date && +e3 === +t3 ? { valid: true, data: e3 } : { valid: false };
    }
    class Oo extends Dn {
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3), n3 = (e4, n4) => {
          if (Cn(e4) || Cn(n4)) return On;
          const o2 = To(e4.value, n4.value);
          return o2.valid ? ((An(e4) || An(n4)) && t3.dirty(), { status: t3.value, value: o2.data }) : (xn(r3, { code: vn.invalid_intersection_types }), On);
        };
        return r3.common.async ? Promise.all([this._def.left._parseAsync({ data: r3.data, path: r3.path, parent: r3 }), this._def.right._parseAsync({ data: r3.data, path: r3.path, parent: r3 })]).then(([e4, t4]) => n3(e4, t4)) : n3(this._def.left._parseSync({ data: r3.data, path: r3.path, parent: r3 }), this._def.right._parseSync({ data: r3.data, path: r3.path, parent: r3 }));
      }
    }
    Oo.create = (e3, t3, r3) => new Oo({ left: e3, right: t3, typeName: Zo.ZodIntersection, ...jn(r3) });
    class Po extends Dn {
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3);
        if (r3.parsedType !== yn.array) return xn(r3, { code: vn.invalid_type, expected: yn.array, received: r3.parsedType }), On;
        if (r3.data.length < this._def.items.length) return xn(r3, { code: vn.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), On;
        !this._def.rest && r3.data.length > this._def.items.length && (xn(r3, { code: vn.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t3.dirty());
        const n3 = [...r3.data].map((e4, t4) => {
          const n4 = this._def.items[t4] || this._def.rest;
          return n4 ? n4._parse(new Mn(r3, e4, r3.path, t4)) : null;
        }).filter((e4) => !!e4);
        return r3.common.async ? Promise.all(n3).then((e4) => Tn.mergeArray(t3, e4)) : Tn.mergeArray(t3, n3);
      }
      get items() {
        return this._def.items;
      }
      rest(e3) {
        return new Po({ ...this._def, rest: e3 });
      }
    }
    Po.create = (e3, t3) => {
      if (!Array.isArray(e3)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Po({ items: e3, typeName: Zo.ZodTuple, rest: null, ...jn(t3) });
    };
    class Io extends Dn {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3);
        if (r3.parsedType !== yn.object) return xn(r3, { code: vn.invalid_type, expected: yn.object, received: r3.parsedType }), On;
        const n3 = [], o2 = this._def.keyType, s2 = this._def.valueType;
        for (const e4 in r3.data) n3.push({ key: o2._parse(new Mn(r3, e4, r3.path, e4)), value: s2._parse(new Mn(r3, r3.data[e4], r3.path, e4)), alwaysSet: e4 in r3.data });
        return r3.common.async ? Tn.mergeObjectAsync(t3, n3) : Tn.mergeObjectSync(t3, n3);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e3, t3, r3) {
        return new Io(t3 instanceof Dn ? { keyType: e3, valueType: t3, typeName: Zo.ZodRecord, ...jn(r3) } : { keyType: co.create(), valueType: e3, typeName: Zo.ZodRecord, ...jn(t3) });
      }
    }
    class Co extends Dn {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3);
        if (r3.parsedType !== yn.map) return xn(r3, { code: vn.invalid_type, expected: yn.map, received: r3.parsedType }), On;
        const n3 = this._def.keyType, o2 = this._def.valueType, s2 = [...r3.data.entries()].map(([e4, t4], s3) => ({ key: n3._parse(new Mn(r3, e4, r3.path, [s3, "key"])), value: o2._parse(new Mn(r3, t4, r3.path, [s3, "value"])) }));
        if (r3.common.async) {
          const e4 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const r4 of s2) {
              const n4 = await r4.key, o3 = await r4.value;
              if ("aborted" === n4.status || "aborted" === o3.status) return On;
              "dirty" !== n4.status && "dirty" !== o3.status || t3.dirty(), e4.set(n4.value, o3.value);
            }
            return { status: t3.value, value: e4 };
          });
        }
        {
          const e4 = /* @__PURE__ */ new Map();
          for (const r4 of s2) {
            const n4 = r4.key, o3 = r4.value;
            if ("aborted" === n4.status || "aborted" === o3.status) return On;
            "dirty" !== n4.status && "dirty" !== o3.status || t3.dirty(), e4.set(n4.value, o3.value);
          }
          return { status: t3.value, value: e4 };
        }
      }
    }
    Co.create = (e3, t3, r3) => new Co({ valueType: t3, keyType: e3, typeName: Zo.ZodMap, ...jn(r3) });
    class Ao extends Dn {
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3);
        if (r3.parsedType !== yn.set) return xn(r3, { code: vn.invalid_type, expected: yn.set, received: r3.parsedType }), On;
        const n3 = this._def;
        null !== n3.minSize && r3.data.size < n3.minSize.value && (xn(r3, { code: vn.too_small, minimum: n3.minSize.value, type: "set", inclusive: true, exact: false, message: n3.minSize.message }), t3.dirty()), null !== n3.maxSize && r3.data.size > n3.maxSize.value && (xn(r3, { code: vn.too_big, maximum: n3.maxSize.value, type: "set", inclusive: true, exact: false, message: n3.maxSize.message }), t3.dirty());
        const o2 = this._def.valueType;
        function s2(e4) {
          const r4 = /* @__PURE__ */ new Set();
          for (const n4 of e4) {
            if ("aborted" === n4.status) return On;
            "dirty" === n4.status && t3.dirty(), r4.add(n4.value);
          }
          return { status: t3.value, value: r4 };
        }
        const i3 = [...r3.data.values()].map((e4, t4) => o2._parse(new Mn(r3, e4, r3.path, t4)));
        return r3.common.async ? Promise.all(i3).then((e4) => s2(e4)) : s2(i3);
      }
      min(e3, t3) {
        return new Ao({ ...this._def, minSize: { value: e3, message: Nn.toString(t3) } });
      }
      max(e3, t3) {
        return new Ao({ ...this._def, maxSize: { value: e3, message: Nn.toString(t3) } });
      }
      size(e3, t3) {
        return this.min(e3, t3).max(e3, t3);
      }
      nonempty(e3) {
        return this.min(1, e3);
      }
    }
    Ao.create = (e3, t3) => new Ao({ valueType: e3, minSize: null, maxSize: null, typeName: Zo.ZodSet, ...jn(t3) });
    class $o extends Dn {
      get schema() {
        return this._def.getter();
      }
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3);
        return this._def.getter()._parse({ data: t3.data, path: t3.path, parent: t3 });
      }
    }
    $o.create = (e3, t3) => new $o({ getter: e3, typeName: Zo.ZodLazy, ...jn(t3) });
    class Ro extends Dn {
      _parse(e3) {
        if (e3.data !== this._def.value) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { received: t3.data, code: vn.invalid_literal, expected: this._def.value }), On;
        }
        return { status: "valid", value: e3.data };
      }
      get value() {
        return this._def.value;
      }
    }
    function No(e3, t3) {
      return new Mo({ values: e3, typeName: Zo.ZodEnum, ...jn(t3) });
    }
    Ro.create = (e3, t3) => new Ro({ value: e3, typeName: Zo.ZodLiteral, ...jn(t3) });
    class Mo extends Dn {
      _parse(e3) {
        if ("string" != typeof e3.data) {
          const t3 = this._getOrReturnCtx(e3), r3 = this._def.values;
          return xn(t3, { expected: pn.joinValues(r3), received: t3.parsedType, code: vn.invalid_type }), On;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e3.data)) {
          const t3 = this._getOrReturnCtx(e3), r3 = this._def.values;
          return xn(t3, { received: t3.data, code: vn.invalid_enum_value, options: r3 }), On;
        }
        return In(e3.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const e3 = {};
        for (const t3 of this._def.values) e3[t3] = t3;
        return e3;
      }
      get Values() {
        const e3 = {};
        for (const t3 of this._def.values) e3[t3] = t3;
        return e3;
      }
      get Enum() {
        const e3 = {};
        for (const t3 of this._def.values) e3[t3] = t3;
        return e3;
      }
      extract(e3, t3 = this._def) {
        return Mo.create(e3, { ...this._def, ...t3 });
      }
      exclude(e3, t3 = this._def) {
        return Mo.create(this.options.filter((t4) => !e3.includes(t4)), { ...this._def, ...t3 });
      }
    }
    Mo.create = No;
    class Jo extends Dn {
      _parse(e3) {
        const t3 = pn.getValidEnumValues(this._def.values), r3 = this._getOrReturnCtx(e3);
        if (r3.parsedType !== yn.string && r3.parsedType !== yn.number) {
          const e4 = pn.objectValues(t3);
          return xn(r3, { expected: pn.joinValues(e4), received: r3.parsedType, code: vn.invalid_type }), On;
        }
        if (this._cache || (this._cache = new Set(pn.getValidEnumValues(this._def.values))), !this._cache.has(e3.data)) {
          const e4 = pn.objectValues(t3);
          return xn(r3, { received: r3.data, code: vn.invalid_enum_value, options: e4 }), On;
        }
        return In(e3.data);
      }
      get enum() {
        return this._def.values;
      }
    }
    Jo.create = (e3, t3) => new Jo({ values: e3, typeName: Zo.ZodNativeEnum, ...jn(t3) });
    class jo extends Dn {
      unwrap() {
        return this._def.type;
      }
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3);
        if (t3.parsedType !== yn.promise && false === t3.common.async) return xn(t3, { code: vn.invalid_type, expected: yn.promise, received: t3.parsedType }), On;
        const r3 = t3.parsedType === yn.promise ? t3.data : Promise.resolve(t3.data);
        return In(r3.then((e4) => this._def.type.parseAsync(e4, { path: t3.path, errorMap: t3.common.contextualErrorMap })));
      }
    }
    jo.create = (e3, t3) => new jo({ type: e3, typeName: Zo.ZodPromise, ...jn(t3) });
    class Do extends Dn {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === Zo.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3), n3 = this._def.effect || null, o2 = { addIssue: (e4) => {
          xn(r3, e4), e4.fatal ? t3.abort() : t3.dirty();
        }, get path() {
          return r3.path;
        } };
        if (o2.addIssue = o2.addIssue.bind(o2), "preprocess" === n3.type) {
          const e4 = n3.transform(r3.data, o2);
          if (r3.common.async) return Promise.resolve(e4).then(async (e5) => {
            if ("aborted" === t3.value) return On;
            const n4 = await this._def.schema._parseAsync({ data: e5, path: r3.path, parent: r3 });
            return "aborted" === n4.status ? On : "dirty" === n4.status || "dirty" === t3.value ? Pn(n4.value) : n4;
          });
          {
            if ("aborted" === t3.value) return On;
            const n4 = this._def.schema._parseSync({ data: e4, path: r3.path, parent: r3 });
            return "aborted" === n4.status ? On : "dirty" === n4.status || "dirty" === t3.value ? Pn(n4.value) : n4;
          }
        }
        if ("refinement" === n3.type) {
          const e4 = (e5) => {
            const t4 = n3.refinement(e5, o2);
            if (r3.common.async) return Promise.resolve(t4);
            if (t4 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return e5;
          };
          if (false === r3.common.async) {
            const n4 = this._def.schema._parseSync({ data: r3.data, path: r3.path, parent: r3 });
            return "aborted" === n4.status ? On : ("dirty" === n4.status && t3.dirty(), e4(n4.value), { status: t3.value, value: n4.value });
          }
          return this._def.schema._parseAsync({ data: r3.data, path: r3.path, parent: r3 }).then((r4) => "aborted" === r4.status ? On : ("dirty" === r4.status && t3.dirty(), e4(r4.value).then(() => ({ status: t3.value, value: r4.value }))));
        }
        if ("transform" === n3.type) {
          if (false === r3.common.async) {
            const e4 = this._def.schema._parseSync({ data: r3.data, path: r3.path, parent: r3 });
            if (!$n(e4)) return On;
            const s2 = n3.transform(e4.value, o2);
            if (s2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: t3.value, value: s2 };
          }
          return this._def.schema._parseAsync({ data: r3.data, path: r3.path, parent: r3 }).then((e4) => $n(e4) ? Promise.resolve(n3.transform(e4.value, o2)).then((e5) => ({ status: t3.value, value: e5 })) : On);
        }
        pn.assertNever(n3);
      }
    }
    Do.create = (e3, t3, r3) => new Do({ schema: e3, typeName: Zo.ZodEffects, effect: t3, ...jn(r3) }), Do.createWithPreprocess = (e3, t3, r3) => new Do({ schema: t3, effect: { type: "preprocess", transform: e3 }, typeName: Zo.ZodEffects, ...jn(r3) });
    class Fo extends Dn {
      _parse(e3) {
        return this._getType(e3) === yn.undefined ? In(void 0) : this._def.innerType._parse(e3);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    Fo.create = (e3, t3) => new Fo({ innerType: e3, typeName: Zo.ZodOptional, ...jn(t3) });
    class qo extends Dn {
      _parse(e3) {
        return this._getType(e3) === yn.null ? In(null) : this._def.innerType._parse(e3);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    qo.create = (e3, t3) => new qo({ innerType: e3, typeName: Zo.ZodNullable, ...jn(t3) });
    class zo extends Dn {
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3);
        let r3 = t3.data;
        return t3.parsedType === yn.undefined && (r3 = this._def.defaultValue()), this._def.innerType._parse({ data: r3, path: t3.path, parent: t3 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    }
    zo.create = (e3, t3) => new zo({ innerType: e3, typeName: Zo.ZodDefault, defaultValue: "function" == typeof t3.default ? t3.default : () => t3.default, ...jn(t3) });
    class Uo extends Dn {
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3), r3 = { ...t3, common: { ...t3.common, issues: [] } }, n3 = this._def.innerType._parse({ data: r3.data, path: r3.path, parent: { ...r3 } });
        return Rn(n3) ? n3.then((e4) => ({ status: "valid", value: "valid" === e4.status ? e4.value : this._def.catchValue({ get error() {
          return new wn(r3.common.issues);
        }, input: r3.data }) })) : { status: "valid", value: "valid" === n3.status ? n3.value : this._def.catchValue({ get error() {
          return new wn(r3.common.issues);
        }, input: r3.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    }
    Uo.create = (e3, t3) => new Uo({ innerType: e3, typeName: Zo.ZodCatch, catchValue: "function" == typeof t3.catch ? t3.catch : () => t3.catch, ...jn(t3) });
    class Bo extends Dn {
      _parse(e3) {
        if (this._getType(e3) !== yn.nan) {
          const t3 = this._getOrReturnCtx(e3);
          return xn(t3, { code: vn.invalid_type, expected: yn.nan, received: t3.parsedType }), On;
        }
        return { status: "valid", value: e3.data };
      }
    }
    Bo.create = (e3) => new Bo({ typeName: Zo.ZodNaN, ...jn(e3) });
    /* @__PURE__ */ Symbol("zod_brand");
    class Lo extends Dn {
      _parse(e3) {
        const { ctx: t3 } = this._processInputParams(e3), r3 = t3.data;
        return this._def.type._parse({ data: r3, path: t3.path, parent: t3 });
      }
      unwrap() {
        return this._def.type;
      }
    }
    class Vo extends Dn {
      _parse(e3) {
        const { status: t3, ctx: r3 } = this._processInputParams(e3);
        if (r3.common.async) {
          return (async () => {
            const e4 = await this._def.in._parseAsync({ data: r3.data, path: r3.path, parent: r3 });
            return "aborted" === e4.status ? On : "dirty" === e4.status ? (t3.dirty(), Pn(e4.value)) : this._def.out._parseAsync({ data: e4.value, path: r3.path, parent: r3 });
          })();
        }
        {
          const e4 = this._def.in._parseSync({ data: r3.data, path: r3.path, parent: r3 });
          return "aborted" === e4.status ? On : "dirty" === e4.status ? (t3.dirty(), { status: "dirty", value: e4.value }) : this._def.out._parseSync({ data: e4.value, path: r3.path, parent: r3 });
        }
      }
      static create(e3, t3) {
        return new Vo({ in: e3, out: t3, typeName: Zo.ZodPipeline });
      }
    }
    class Ko extends Dn {
      _parse(e3) {
        const t3 = this._def.innerType._parse(e3), r3 = (e4) => ($n(e4) && (e4.value = Object.freeze(e4.value)), e4);
        return Rn(t3) ? t3.then((e4) => r3(e4)) : r3(t3);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    Ko.create = (e3, t3) => new Ko({ innerType: e3, typeName: Zo.ZodReadonly, ...jn(t3) });
    Eo.lazycreate;
    var Zo;
    !(function(e3) {
      e3.ZodString = "ZodString", e3.ZodNumber = "ZodNumber", e3.ZodNaN = "ZodNaN", e3.ZodBigInt = "ZodBigInt", e3.ZodBoolean = "ZodBoolean", e3.ZodDate = "ZodDate", e3.ZodSymbol = "ZodSymbol", e3.ZodUndefined = "ZodUndefined", e3.ZodNull = "ZodNull", e3.ZodAny = "ZodAny", e3.ZodUnknown = "ZodUnknown", e3.ZodNever = "ZodNever", e3.ZodVoid = "ZodVoid", e3.ZodArray = "ZodArray", e3.ZodObject = "ZodObject", e3.ZodUnion = "ZodUnion", e3.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e3.ZodIntersection = "ZodIntersection", e3.ZodTuple = "ZodTuple", e3.ZodRecord = "ZodRecord", e3.ZodMap = "ZodMap", e3.ZodSet = "ZodSet", e3.ZodFunction = "ZodFunction", e3.ZodLazy = "ZodLazy", e3.ZodLiteral = "ZodLiteral", e3.ZodEnum = "ZodEnum", e3.ZodEffects = "ZodEffects", e3.ZodNativeEnum = "ZodNativeEnum", e3.ZodOptional = "ZodOptional", e3.ZodNullable = "ZodNullable", e3.ZodDefault = "ZodDefault", e3.ZodCatch = "ZodCatch", e3.ZodPromise = "ZodPromise", e3.ZodBranded = "ZodBranded", e3.ZodPipeline = "ZodPipeline", e3.ZodReadonly = "ZodReadonly";
    })(Zo || (Zo = {}));
    const Wo = co.create, Ho = lo.create, Yo = (Bo.create, po.create, fo.create), Go = (ho.create, mo.create, go.create, yo.create, _o.create, vo.create, wo.create, bo.create, So.create), Xo = Eo.create, Qo = (Eo.strictCreate, xo.create, Oo.create, Po.create, Io.create);
    Co.create, Ao.create, $o.create, Ro.create, Mo.create, Jo.create, jo.create, Do.create, Fo.create, qo.create, Do.createWithPreprocess, Vo.create;
    o(1970), o(2557);
    var es = o(5015);
    class ts extends Error {
      constructor(e3) {
        super(`${e3} must be authorized by the Cursor backend: its token endpoint requires client credentials held server-side. Connect this server from the cloud MCP surface (Cursor Settings, or the dashboard) instead of a local mcp.json entry.`), this.name = "McpBackendOnlyTokenExchangeError";
      }
    }
    function rs(e3) {
      return true === (0, i2.TG)(e3)?.backendOnlyTokenExchange;
    }
    async function ns(e3, t3) {
      !(function(e4) {
        if (rs(e4)) throw new ts(e4);
      })(e3);
      const r3 = await (0, es.Ez)(e3, t3);
      if (true === r3?.backendOnlyTokenExchange) throw new ts(e3);
      if (void 0 === r3 && void 0 !== (0, i2.sr)(e3)) throw new Error(`Could not read ${e3}'s provider metadata to determine how its tokens must be exchanged; not spending the authorization code. Retry the connection.`);
    }
    function os(e3) {
      return e3.query.match((t3 = e3.key, new RegExp(`(?:^|&)${t3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^&]*)`)))?.[1];
      var t3;
    }
    function ss(e3) {
      if (void 0 !== e3) try {
        return decodeURIComponent(e3);
      } catch {
        return e3;
      }
    }
    function is(e3) {
      return ss(os(e3));
    }
    var as = o(9206);
    function cs(e3) {
      return "object" == typeof e3 && null !== e3 && !Array.isArray(e3);
    }
    function us(e3) {
      if (cs(e3) && "string" == typeof e3.workspaceId) return { workspaceId: e3.workspaceId };
    }
    function ls(e3) {
      try {
        return (function(e4) {
          if (!cs(e4) || "string" != typeof e4.id) return;
          const t3 = us(e4.owner);
          if (!t3) return;
          if (void 0 !== e4.attemptId && "string" != typeof e4.attemptId) return;
          const r3 = "mcp_process" === e4.surface || "exthost" === e4.surface ? e4.surface : void 0;
          return { id: e4.id, owner: t3, ...void 0 !== e4.attemptId ? { attemptId: e4.attemptId } : {}, ...void 0 !== r3 ? { surface: r3 } : {} };
        })(JSON.parse((0, as.Z)((0, i2.ix)(e3))));
      } catch {
        return;
      }
    }
    var ds = o(9465);
    const ps = /* @__PURE__ */ new Map();
    function fs(e3) {
      return "object" == typeof e3 && null !== e3 && !Array.isArray(e3);
    }
    function hs(e3) {
      return Array.isArray(e3) && e3.every((e4) => "string" == typeof e4);
    }
    function ms() {
      if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
      const e3 = new Uint8Array(16);
      if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(e3);
      else for (let t4 = 0; t4 < e3.length; t4++) e3[t4] = Math.floor(256 * Math.random());
      e3[6] = 15 & e3[6] | 64, e3[8] = 63 & e3[8] | 128;
      const t3 = Array.from(e3, (e4) => e4.toString(16).padStart(2, "0")).join("");
      return `${t3.slice(0, 8)}-${t3.slice(8, 12)}-${t3.slice(12, 16)}-${t3.slice(16, 20)}-${t3.slice(20)}`;
    }
    function gs() {
      return `${ms()}:${Date.now()}`;
    }
    function ys(e3) {
      const t3 = e3.lastIndexOf(":");
      return t3 <= 0 ? gs() : `${e3.slice(0, t3)}:${Date.now()}`;
    }
    function _s(e3) {
      const t3 = e3.lastIndexOf(":");
      if (t3 < 0) return 0;
      const r3 = parseInt(e3.slice(t3 + 1), 10);
      return Number.isFinite(r3) ? r3 : 0;
    }
    function vs(e3) {
      if (!fs(e3) || "string" != typeof e3.attemptId || "string" != typeof e3.identifier || "number" != typeof e3.createdAtMs) return;
      const t3 = us(e3.owner);
      if (!t3) return;
      const r3 = void 0 !== e3.clientInformation ? (function(e4) {
        if (!fs(e4) || "string" != typeof e4.client_id) return;
        const t4 = { ...e4, client_id: e4.client_id };
        return void 0 !== e4.client_secret && "string" != typeof e4.client_secret || void 0 !== e4.redirect_uris && !hs(e4.redirect_uris) || void 0 !== e4.grant_types && !hs(e4.grant_types) || void 0 !== e4.response_types && !hs(e4.response_types) ? void 0 : t4;
      })(e3.clientInformation) : void 0;
      return void 0 === e3.clientInformation || void 0 !== r3 ? { attemptId: e3.attemptId, identifier: e3.identifier, owner: t3, createdAtMs: e3.createdAtMs, ..."string" == typeof e3.serverUrl ? { serverUrl: e3.serverUrl } : {}, ..."string" == typeof e3.transportServerUrl ? { transportServerUrl: e3.transportServerUrl } : {}, ..."string" == typeof e3.codeVerifier ? { codeVerifier: e3.codeVerifier } : {}, ...r3 ? { clientInformation: r3 } : {}, ..."string" == typeof e3.authorizationServerUrl ? { authorizationServerUrl: e3.authorizationServerUrl } : {}, ..."string" == typeof e3.activeIdentifier ? { activeIdentifier: e3.activeIdentifier } : {} } : void 0;
    }
    async function ws(e3, t3) {
      return vs(await e3.readAttempt(t3));
    }
    async function bs(e3, t3) {
      const r3 = await ws(e3, t3);
      if (!r3) return;
      const [n3, o2] = await Promise.all([r3.clientInformation?.client_secret ? void 0 : e3.getSecret((0, ds.ds)(t3)), e3.getSecret((0, ds.L1)(t3))]);
      return n3 || o2 ? { ...r3, ...o2 ? { codeVerifier: o2 } : {}, ...n3 && r3.clientInformation ? { clientInformation: { ...r3.clientInformation, client_secret: n3 } } : {} } : r3;
    }
    async function Ss(e3) {
      const { discoverAuthorizationServerMetadata: t3, discoverOAuthProtectedResourceMetadata: r3, exchangeAuthorization: n3, selectResourceURL: s2 } = await Promise.resolve().then(o.bind(o, 8891)), i3 = e3.fetch ?? e3.provider.getOAuthHttpFetch?.() ?? globalThis.fetch;
      let a3, c2;
      await ns(e3.transportServerUrl, i3);
      const u2 = i3 ? await (async function(e4, t4) {
        try {
          const r4 = await t4(e4, { method: "POST", headers: { "Content-Type": "application/json" } });
          if (401 === r4.status) {
            const { extractWWWAuthenticateParams: e5 } = await Promise.resolve().then(o.bind(o, 8891)), { resourceMetadataUrl: t5 } = e5(r4);
            return t5;
          }
          await r4.body?.cancel();
        } catch {
        }
      })(e3.transportServerUrl, i3) : void 0;
      try {
        a3 = await r3(e3.transportServerUrl, { resourceMetadataUrl: u2 }, i3), a3.authorization_servers && a3.authorization_servers.length > 0 && (c2 = a3.authorization_servers[0]);
      } catch {
      }
      const l2 = c2 ?? e3.persistedAuthorizationServerUrl ?? e3.transportServerUrl, d2 = await s2(e3.transportServerUrl, e3.provider, a3), p2 = await t3(l2, { fetchFn: i3 }), f2 = await e3.provider.clientInformation();
      if (!f2) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
      const h2 = await e3.provider.codeVerifier(), m2 = await n3(l2, { metadata: p2, clientInformation: f2, authorizationCode: e3.authorizationCode, codeVerifier: h2, redirectUri: e3.provider.redirectUrl, resource: d2, fetchFn: i3 });
      await e3.provider.saveTokens(m2);
    }
    let ks;
    ks = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(o.t.bind(o, 7598, 19)).then((e3) => e3.webcrypto);
    const Es = Object.freeze({ status: "aborted" });
    function xs(e3, t3, r3) {
      function n3(r4, n4) {
        if (r4._zod || Object.defineProperty(r4, "_zod", { value: { def: n4, constr: i3, traits: /* @__PURE__ */ new Set() }, enumerable: false }), r4._zod.traits.has(e3)) return;
        r4._zod.traits.add(e3), t3(r4, n4);
        const o3 = i3.prototype, s3 = Object.keys(o3);
        for (let e4 = 0; e4 < s3.length; e4++) {
          const t4 = s3[e4];
          t4 in r4 || (r4[t4] = o3[t4].bind(r4));
        }
      }
      const o2 = r3?.Parent ?? Object;
      class s2 extends o2 {
      }
      function i3(e4) {
        var t4;
        const o3 = r3?.Parent ? new s2() : this;
        n3(o3, e4), (t4 = o3._zod).deferred ?? (t4.deferred = []);
        for (const e5 of o3._zod.deferred) e5();
        return o3;
      }
      return Object.defineProperty(s2, "name", { value: e3 }), Object.defineProperty(i3, "init", { value: n3 }), Object.defineProperty(i3, Symbol.hasInstance, { value: (t4) => !!(r3?.Parent && t4 instanceof r3.Parent) || t4?._zod?.traits?.has(e3) }), Object.defineProperty(i3, "name", { value: e3 }), i3;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class Ts extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    class Os extends Error {
      constructor(e3) {
        super(`Encountered unidirectional transform during encode: ${e3}`), this.name = "ZodEncodeError";
      }
    }
    const Ps = {};
    function Is(e3) {
      return e3 && Object.assign(Ps, e3), Ps;
    }
    function Cs(e3) {
      const t3 = Object.values(e3).filter((e4) => "number" == typeof e4);
      return Object.entries(e3).filter(([e4, r3]) => -1 === t3.indexOf(+e4)).map(([e4, t4]) => t4);
    }
    function As(e3, t3 = "|") {
      return e3.map((e4) => Gs(e4)).join(t3);
    }
    function $s(e3, t3) {
      return "bigint" == typeof t3 ? t3.toString() : t3;
    }
    function Rs(e3) {
      return { get value() {
        {
          const t3 = e3();
          return Object.defineProperty(this, "value", { value: t3 }), t3;
        }
      } };
    }
    function Ns(e3) {
      return null == e3;
    }
    function Ms(e3) {
      const t3 = e3.startsWith("^") ? 1 : 0, r3 = e3.endsWith("$") ? e3.length - 1 : e3.length;
      return e3.slice(t3, r3);
    }
    const Js = /* @__PURE__ */ Symbol("evaluating");
    function js(e3, t3, r3) {
      let n3;
      Object.defineProperty(e3, t3, { get() {
        if (n3 !== Js) return void 0 === n3 && (n3 = Js, n3 = r3()), n3;
      }, set(r4) {
        Object.defineProperty(e3, t3, { value: r4 });
      }, configurable: true });
    }
    function Ds(e3, t3, r3) {
      Object.defineProperty(e3, t3, { value: r3, writable: true, enumerable: true, configurable: true });
    }
    function Fs(...e3) {
      const t3 = {};
      for (const r3 of e3) {
        const e4 = Object.getOwnPropertyDescriptors(r3);
        Object.assign(t3, e4);
      }
      return Object.defineProperties({}, t3);
    }
    function qs(e3) {
      return JSON.stringify(e3);
    }
    const zs = "captureStackTrace" in Error ? Error.captureStackTrace : (...e3) => {
    };
    function Us(e3) {
      return "object" == typeof e3 && null !== e3 && !Array.isArray(e3);
    }
    const Bs = Rs(() => {
      if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (e3) {
        return false;
      }
    });
    function Ls(e3) {
      if (false === Us(e3)) return false;
      const t3 = e3.constructor;
      if (void 0 === t3) return true;
      if ("function" != typeof t3) return true;
      const r3 = t3.prototype;
      return false !== Us(r3) && false !== Object.prototype.hasOwnProperty.call(r3, "isPrototypeOf");
    }
    function Vs(e3) {
      return Ls(e3) ? { ...e3 } : Array.isArray(e3) ? [...e3] : e3;
    }
    const Ks = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Zs = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function Ws(e3) {
      return e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Hs(e3, t3, r3) {
      const n3 = new e3._zod.constr(t3 ?? e3._zod.def);
      return t3 && !r3?.parent || (n3._zod.parent = e3), n3;
    }
    function Ys(e3) {
      const t3 = e3;
      if (!t3) return {};
      if ("string" == typeof t3) return { error: () => t3 };
      if (void 0 !== t3?.message) {
        if (void 0 !== t3?.error) throw new Error("Cannot specify both `message` and `error` params");
        t3.error = t3.message;
      }
      return delete t3.message, "string" == typeof t3.error ? { ...t3, error: () => t3.error } : t3;
    }
    function Gs(e3) {
      return "bigint" == typeof e3 ? e3.toString() + "n" : "string" == typeof e3 ? `"${e3}"` : `${e3}`;
    }
    const Xs = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, Qs = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
    function ei(e3, t3 = 0) {
      if (true === e3.aborted) return true;
      for (let r3 = t3; r3 < e3.issues.length; r3++) if (true !== e3.issues[r3]?.continue) return true;
      return false;
    }
    function ti(e3, t3) {
      return t3.map((t4) => {
        var r3;
        return (r3 = t4).path ?? (r3.path = []), t4.path.unshift(e3), t4;
      });
    }
    function ri(e3) {
      return "string" == typeof e3 ? e3 : e3?.message;
    }
    function ni(e3, t3, r3) {
      const n3 = { ...e3, path: e3.path ?? [] };
      if (!e3.message) {
        const o2 = ri(e3.inst?._zod.def?.error?.(e3)) ?? ri(t3?.error?.(e3)) ?? ri(r3.customError?.(e3)) ?? ri(r3.localeError?.(e3)) ?? "Invalid input";
        n3.message = o2;
      }
      return delete n3.inst, delete n3.continue, t3?.reportInput || delete n3.input, n3;
    }
    function oi(e3) {
      return e3 instanceof Set ? "set" : e3 instanceof Map ? "map" : e3 instanceof File ? "file" : "unknown";
    }
    function si(e3) {
      return Array.isArray(e3) ? "array" : "string" == typeof e3 ? "string" : "unknown";
    }
    function ii(...e3) {
      const [t3, r3, n3] = e3;
      return "string" == typeof t3 ? { message: t3, code: "custom", input: r3, inst: n3 } : { ...t3 };
    }
    const ai = (e3, t3) => {
      e3.name = "$ZodError", Object.defineProperty(e3, "_zod", { value: e3._zod, enumerable: false }), Object.defineProperty(e3, "issues", { value: t3, enumerable: false }), e3.message = JSON.stringify(t3, $s, 2), Object.defineProperty(e3, "toString", { value: () => e3.message, enumerable: false });
    }, ci = xs("$ZodError", ai), ui = xs("$ZodError", ai, { Parent: Error });
    const li = (e3) => (t3, r3, n3, o2) => {
      const s2 = n3 ? Object.assign(n3, { async: false }) : { async: false }, i3 = t3._zod.run({ value: r3, issues: [] }, s2);
      if (i3 instanceof Promise) throw new Ts();
      if (i3.issues.length) {
        const t4 = new (o2?.Err ?? e3)(i3.issues.map((e4) => ni(e4, s2, Is())));
        throw zs(t4, o2?.callee), t4;
      }
      return i3.value;
    }, di = li(ui), pi = (e3) => async (t3, r3, n3, o2) => {
      const s2 = n3 ? Object.assign(n3, { async: true }) : { async: true };
      let i3 = t3._zod.run({ value: r3, issues: [] }, s2);
      if (i3 instanceof Promise && (i3 = await i3), i3.issues.length) {
        const t4 = new (o2?.Err ?? e3)(i3.issues.map((e4) => ni(e4, s2, Is())));
        throw zs(t4, o2?.callee), t4;
      }
      return i3.value;
    }, fi = pi(ui), hi = (e3) => (t3, r3, n3) => {
      const o2 = n3 ? { ...n3, async: false } : { async: false }, s2 = t3._zod.run({ value: r3, issues: [] }, o2);
      if (s2 instanceof Promise) throw new Ts();
      return s2.issues.length ? { success: false, error: new (e3 ?? ci)(s2.issues.map((e4) => ni(e4, o2, Is()))) } : { success: true, data: s2.value };
    }, mi = hi(ui), gi = (e3) => async (t3, r3, n3) => {
      const o2 = n3 ? Object.assign(n3, { async: true }) : { async: true };
      let s2 = t3._zod.run({ value: r3, issues: [] }, o2);
      return s2 instanceof Promise && (s2 = await s2), s2.issues.length ? { success: false, error: new e3(s2.issues.map((e4) => ni(e4, o2, Is()))) } : { success: true, data: s2.value };
    }, yi = gi(ui), _i = (e3) => (t3, r3, n3) => {
      const o2 = n3 ? Object.assign(n3, { direction: "backward" }) : { direction: "backward" };
      return li(e3)(t3, r3, o2);
    }, vi = (e3) => (t3, r3, n3) => li(e3)(t3, r3, n3), wi = (e3) => async (t3, r3, n3) => {
      const o2 = n3 ? Object.assign(n3, { direction: "backward" }) : { direction: "backward" };
      return pi(e3)(t3, r3, o2);
    }, bi = (e3) => async (t3, r3, n3) => pi(e3)(t3, r3, n3), Si = (e3) => (t3, r3, n3) => {
      const o2 = n3 ? Object.assign(n3, { direction: "backward" }) : { direction: "backward" };
      return hi(e3)(t3, r3, o2);
    }, ki = (e3) => (t3, r3, n3) => hi(e3)(t3, r3, n3), Ei = (e3) => async (t3, r3, n3) => {
      const o2 = n3 ? Object.assign(n3, { direction: "backward" }) : { direction: "backward" };
      return gi(e3)(t3, r3, o2);
    }, xi = (e3) => async (t3, r3, n3) => gi(e3)(t3, r3, n3), Ti = /^[cC][^\s-]{8,}$/, Oi = /^[0-9a-z]+$/, Pi = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ii = /^[0-9a-vA-V]{20}$/, Ci = /^[A-Za-z0-9]{27}$/, Ai = /^[a-zA-Z0-9_-]{21}$/, $i = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ri = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ni = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mi = (e3) => e3 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e3}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ji = Mi(4), ji = Mi(6), Di = Mi(7), Fi = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, zi = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Ui = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Bi = Ui, Li = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Vi = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    function Ki() {
      return new RegExp(Vi, "u");
    }
    const Zi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Wi = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Hi = (e3) => {
      const t3 = Ws(e3 ?? ":");
      return new RegExp(`^(?:[0-9A-F]{2}${t3}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t3}){5}[0-9a-f]{2}$`);
    }, Yi = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Gi = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Xi = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qi = /^[A-Za-z0-9_-]*$/, ea = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, ta = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, ra = /^\+[1-9]\d{6,14}$/, na = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", oa = new RegExp(`^${na}$`);
    function sa(e3) {
      const t3 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof e3.precision ? -1 === e3.precision ? `${t3}` : 0 === e3.precision ? `${t3}:[0-5]\\d` : `${t3}:[0-5]\\d\\.\\d{${e3.precision}}` : `${t3}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function ia(e3) {
      return new RegExp(`^${sa(e3)}$`);
    }
    function aa(e3) {
      const t3 = sa({ precision: e3.precision }), r3 = ["Z"];
      e3.local && r3.push(""), e3.offset && r3.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      const n3 = `${t3}(?:${r3.join("|")})`;
      return new RegExp(`^${na}T(?:${n3})$`);
    }
    const ca = (e3) => new RegExp(`^${e3 ? `[\\s\\S]{${e3?.minimum ?? 0},${e3?.maximum ?? ""}}` : "[\\s\\S]*"}$`), ua = /^-?\d+n?$/, la = /^-?\d+$/, da = /^-?\d+(?:\.\d+)?$/, pa = /^(?:true|false)$/i, fa = /^null$/i, ha = /^undefined$/i, ma = /^[^A-Z]*$/, ga = /^[^a-z]*$/, ya = /^[0-9a-fA-F]*$/;
    function _a(e3, t3) {
      return new RegExp(`^[A-Za-z0-9+/]{${e3}}${t3}$`);
    }
    function va(e3) {
      return new RegExp(`^[A-Za-z0-9_-]{${e3}}$`);
    }
    const wa = /^[0-9a-fA-F]{32}$/, ba = _a(22, "=="), Sa = va(22), ka = /^[0-9a-fA-F]{40}$/, Ea = _a(27, "="), xa = va(27), Ta = /^[0-9a-fA-F]{64}$/, Oa = _a(43, "="), Pa = va(43), Ia = /^[0-9a-fA-F]{96}$/, Ca = _a(64, ""), Aa = va(64), $a = /^[0-9a-fA-F]{128}$/, Ra = _a(86, "=="), Na = va(86), Ma = xs("$ZodCheck", (e3, t3) => {
      var r3;
      e3._zod ?? (e3._zod = {}), e3._zod.def = t3, (r3 = e3._zod).onattach ?? (r3.onattach = []);
    }), Ja = { number: "number", bigint: "bigint", object: "date" }, ja = xs("$ZodCheckLessThan", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = Ja[typeof t3.value];
      e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag, n3 = (t3.inclusive ? r4.maximum : r4.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t3.value < n3 && (t3.inclusive ? r4.maximum = t3.value : r4.exclusiveMaximum = t3.value);
      }), e3._zod.check = (n3) => {
        (t3.inclusive ? n3.value <= t3.value : n3.value < t3.value) || n3.issues.push({ origin: r3, code: "too_big", maximum: "object" == typeof t3.value ? t3.value.getTime() : t3.value, input: n3.value, inclusive: t3.inclusive, inst: e3, continue: !t3.abort });
      };
    }), Da = xs("$ZodCheckGreaterThan", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = Ja[typeof t3.value];
      e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag, n3 = (t3.inclusive ? r4.minimum : r4.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t3.value > n3 && (t3.inclusive ? r4.minimum = t3.value : r4.exclusiveMinimum = t3.value);
      }), e3._zod.check = (n3) => {
        (t3.inclusive ? n3.value >= t3.value : n3.value > t3.value) || n3.issues.push({ origin: r3, code: "too_small", minimum: "object" == typeof t3.value ? t3.value.getTime() : t3.value, input: n3.value, inclusive: t3.inclusive, inst: e3, continue: !t3.abort });
      };
    }), Fa = xs("$ZodCheckMultipleOf", (e3, t3) => {
      Ma.init(e3, t3), e3._zod.onattach.push((e4) => {
        var r3;
        (r3 = e4._zod.bag).multipleOf ?? (r3.multipleOf = t3.value);
      }), e3._zod.check = (r3) => {
        if (typeof r3.value != typeof t3.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r3.value ? r3.value % t3.value === BigInt(0) : 0 === (function(e4, t4) {
          const r4 = (e4.toString().split(".")[1] || "").length, n3 = t4.toString();
          let o2 = (n3.split(".")[1] || "").length;
          if (0 === o2 && /\d?e-\d?/.test(n3)) {
            const e5 = n3.match(/\d?e-(\d?)/);
            e5?.[1] && (o2 = Number.parseInt(e5[1]));
          }
          const s2 = r4 > o2 ? r4 : o2;
          return Number.parseInt(e4.toFixed(s2).replace(".", "")) % Number.parseInt(t4.toFixed(s2).replace(".", "")) / 10 ** s2;
        })(r3.value, t3.value)) || r3.issues.push({ origin: typeof r3.value, code: "not_multiple_of", divisor: t3.value, input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), qa = xs("$ZodCheckNumberFormat", (e3, t3) => {
      Ma.init(e3, t3), t3.format = t3.format || "float64";
      const r3 = t3.format?.includes("int"), n3 = r3 ? "int" : "number", [o2, s2] = Xs[t3.format];
      e3._zod.onattach.push((e4) => {
        const n4 = e4._zod.bag;
        n4.format = t3.format, n4.minimum = o2, n4.maximum = s2, r3 && (n4.pattern = la);
      }), e3._zod.check = (i3) => {
        const a3 = i3.value;
        if (r3) {
          if (!Number.isInteger(a3)) return void i3.issues.push({ expected: n3, format: t3.format, code: "invalid_type", continue: false, input: a3, inst: e3 });
          if (!Number.isSafeInteger(a3)) return void (a3 > 0 ? i3.issues.push({ input: a3, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e3, origin: n3, inclusive: true, continue: !t3.abort }) : i3.issues.push({ input: a3, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e3, origin: n3, inclusive: true, continue: !t3.abort }));
        }
        a3 < o2 && i3.issues.push({ origin: "number", input: a3, code: "too_small", minimum: o2, inclusive: true, inst: e3, continue: !t3.abort }), a3 > s2 && i3.issues.push({ origin: "number", input: a3, code: "too_big", maximum: s2, inclusive: true, inst: e3, continue: !t3.abort });
      };
    }), za = xs("$ZodCheckBigIntFormat", (e3, t3) => {
      Ma.init(e3, t3);
      const [r3, n3] = Qs[t3.format];
      e3._zod.onattach.push((e4) => {
        const o2 = e4._zod.bag;
        o2.format = t3.format, o2.minimum = r3, o2.maximum = n3;
      }), e3._zod.check = (o2) => {
        const s2 = o2.value;
        s2 < r3 && o2.issues.push({ origin: "bigint", input: s2, code: "too_small", minimum: r3, inclusive: true, inst: e3, continue: !t3.abort }), s2 > n3 && o2.issues.push({ origin: "bigint", input: s2, code: "too_big", maximum: n3, inclusive: true, inst: e3, continue: !t3.abort });
      };
    }), Ua = xs("$ZodCheckMaxSize", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.size;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t3.maximum < r4 && (e4._zod.bag.maximum = t3.maximum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        n3.size <= t3.maximum || r4.issues.push({ origin: oi(n3), code: "too_big", maximum: t3.maximum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), Ba = xs("$ZodCheckMinSize", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.size;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t3.minimum > r4 && (e4._zod.bag.minimum = t3.minimum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        n3.size >= t3.minimum || r4.issues.push({ origin: oi(n3), code: "too_small", minimum: t3.minimum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), La = xs("$ZodCheckSizeEquals", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.size;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag;
        r4.minimum = t3.size, r4.maximum = t3.size, r4.size = t3.size;
      }), e3._zod.check = (r4) => {
        const n3 = r4.value, o2 = n3.size;
        if (o2 === t3.size) return;
        const s2 = o2 > t3.size;
        r4.issues.push({ origin: oi(n3), ...s2 ? { code: "too_big", maximum: t3.size } : { code: "too_small", minimum: t3.size }, inclusive: true, exact: true, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), Va = xs("$ZodCheckMaxLength", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t3.maximum < r4 && (e4._zod.bag.maximum = t3.maximum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        if (n3.length <= t3.maximum) return;
        const o2 = si(n3);
        r4.issues.push({ origin: o2, code: "too_big", maximum: t3.maximum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), Ka = xs("$ZodCheckMinLength", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t3.minimum > r4 && (e4._zod.bag.minimum = t3.minimum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        if (n3.length >= t3.minimum) return;
        const o2 = si(n3);
        r4.issues.push({ origin: o2, code: "too_small", minimum: t3.minimum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), Za = xs("$ZodCheckLengthEquals", (e3, t3) => {
      var r3;
      Ma.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !Ns(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag;
        r4.minimum = t3.length, r4.maximum = t3.length, r4.length = t3.length;
      }), e3._zod.check = (r4) => {
        const n3 = r4.value, o2 = n3.length;
        if (o2 === t3.length) return;
        const s2 = si(n3), i3 = o2 > t3.length;
        r4.issues.push({ origin: s2, ...i3 ? { code: "too_big", maximum: t3.length } : { code: "too_small", minimum: t3.length }, inclusive: true, exact: true, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), Wa = xs("$ZodCheckStringFormat", (e3, t3) => {
      var r3, n3;
      Ma.init(e3, t3), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag;
        r4.format = t3.format, t3.pattern && (r4.patterns ?? (r4.patterns = /* @__PURE__ */ new Set()), r4.patterns.add(t3.pattern));
      }), t3.pattern ? (r3 = e3._zod).check ?? (r3.check = (r4) => {
        t3.pattern.lastIndex = 0, t3.pattern.test(r4.value) || r4.issues.push({ origin: "string", code: "invalid_format", format: t3.format, input: r4.value, ...t3.pattern ? { pattern: t3.pattern.toString() } : {}, inst: e3, continue: !t3.abort });
      }) : (n3 = e3._zod).check ?? (n3.check = () => {
      });
    }), Ha = xs("$ZodCheckRegex", (e3, t3) => {
      Wa.init(e3, t3), e3._zod.check = (r3) => {
        t3.pattern.lastIndex = 0, t3.pattern.test(r3.value) || r3.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r3.value, pattern: t3.pattern.toString(), inst: e3, continue: !t3.abort });
      };
    }), Ya = xs("$ZodCheckLowerCase", (e3, t3) => {
      t3.pattern ?? (t3.pattern = ma), Wa.init(e3, t3);
    }), Ga = xs("$ZodCheckUpperCase", (e3, t3) => {
      t3.pattern ?? (t3.pattern = ga), Wa.init(e3, t3);
    }), Xa = xs("$ZodCheckIncludes", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = Ws(t3.includes), n3 = new RegExp("number" == typeof t3.position ? `^.{${t3.position}}${r3}` : r3);
      t3.pattern = n3, e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(n3);
      }), e3._zod.check = (r4) => {
        r4.value.includes(t3.includes, t3.position) || r4.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t3.includes, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), Qa = xs("$ZodCheckStartsWith", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = new RegExp(`^${Ws(t3.prefix)}.*`);
      t3.pattern ?? (t3.pattern = r3), e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(r3);
      }), e3._zod.check = (r4) => {
        r4.value.startsWith(t3.prefix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t3.prefix, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), ec = xs("$ZodCheckEndsWith", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = new RegExp(`.*${Ws(t3.suffix)}$`);
      t3.pattern ?? (t3.pattern = r3), e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(r3);
      }), e3._zod.check = (r4) => {
        r4.value.endsWith(t3.suffix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t3.suffix, input: r4.value, inst: e3, continue: !t3.abort });
      };
    });
    function tc(e3, t3, r3) {
      e3.issues.length && t3.issues.push(...ti(r3, e3.issues));
    }
    const rc = xs("$ZodCheckProperty", (e3, t3) => {
      Ma.init(e3, t3), e3._zod.check = (e4) => {
        const r3 = t3.schema._zod.run({ value: e4.value[t3.property], issues: [] }, {});
        if (r3 instanceof Promise) return r3.then((r4) => tc(r4, e4, t3.property));
        tc(r3, e4, t3.property);
      };
    }), nc = xs("$ZodCheckMimeType", (e3, t3) => {
      Ma.init(e3, t3);
      const r3 = new Set(t3.mime);
      e3._zod.onattach.push((e4) => {
        e4._zod.bag.mime = t3.mime;
      }), e3._zod.check = (n3) => {
        r3.has(n3.value.type) || n3.issues.push({ code: "invalid_value", values: t3.mime, input: n3.value.type, inst: e3, continue: !t3.abort });
      };
    }), oc = xs("$ZodCheckOverwrite", (e3, t3) => {
      Ma.init(e3, t3), e3._zod.check = (e4) => {
        e4.value = t3.tx(e4.value);
      };
    });
    class sc {
      constructor(e3 = []) {
        this.content = [], this.indent = 0, this && (this.args = e3);
      }
      indented(e3) {
        this.indent += 1, e3(this), this.indent -= 1;
      }
      write(e3) {
        if ("function" == typeof e3) return e3(this, { execution: "sync" }), void e3(this, { execution: "async" });
        const t3 = e3.split("\n").filter((e4) => e4), r3 = Math.min(...t3.map((e4) => e4.length - e4.trimStart().length)), n3 = t3.map((e4) => e4.slice(r3)).map((e4) => " ".repeat(2 * this.indent) + e4);
        for (const e4 of n3) this.content.push(e4);
      }
      compile() {
        const e3 = Function, t3 = this?.args;
        return new e3(...t3, [...(this?.content ?? [""]).map((e4) => `  ${e4}`)].join("\n"));
      }
    }
    const ic = { major: 4, minor: 3, patch: 6 }, ac = xs("$ZodType", (e3, t3) => {
      var r3;
      e3 ?? (e3 = {}), e3._zod.def = t3, e3._zod.bag = e3._zod.bag || {}, e3._zod.version = ic;
      const n3 = [...e3._zod.def.checks ?? []];
      e3._zod.traits.has("$ZodCheck") && n3.unshift(e3);
      for (const t4 of n3) for (const r4 of t4._zod.onattach) r4(e3);
      if (0 === n3.length) (r3 = e3._zod).deferred ?? (r3.deferred = []), e3._zod.deferred?.push(() => {
        e3._zod.run = e3._zod.parse;
      });
      else {
        const t4 = (e4, t5, r5) => {
          let n4, o2 = ei(e4);
          for (const s2 of t5) {
            if (s2._zod.def.when) {
              if (!s2._zod.def.when(e4)) continue;
            } else if (o2) continue;
            const t6 = e4.issues.length, i3 = s2._zod.check(e4);
            if (i3 instanceof Promise && false === r5?.async) throw new Ts();
            if (n4 || i3 instanceof Promise) n4 = (n4 ?? Promise.resolve()).then(async () => {
              await i3;
              e4.issues.length !== t6 && (o2 || (o2 = ei(e4, t6)));
            });
            else {
              if (e4.issues.length === t6) continue;
              o2 || (o2 = ei(e4, t6));
            }
          }
          return n4 ? n4.then(() => e4) : e4;
        }, r4 = (r5, o2, s2) => {
          if (ei(r5)) return r5.aborted = true, r5;
          const i3 = t4(o2, n3, s2);
          if (i3 instanceof Promise) {
            if (false === s2.async) throw new Ts();
            return i3.then((t5) => e3._zod.parse(t5, s2));
          }
          return e3._zod.parse(i3, s2);
        };
        e3._zod.run = (o2, s2) => {
          if (s2.skipChecks) return e3._zod.parse(o2, s2);
          if ("backward" === s2.direction) {
            const t5 = e3._zod.parse({ value: o2.value, issues: [] }, { ...s2, skipChecks: true });
            return t5 instanceof Promise ? t5.then((e4) => r4(e4, o2, s2)) : r4(t5, o2, s2);
          }
          const i3 = e3._zod.parse(o2, s2);
          if (i3 instanceof Promise) {
            if (false === s2.async) throw new Ts();
            return i3.then((e4) => t4(e4, n3, s2));
          }
          return t4(i3, n3, s2);
        };
      }
      js(e3, "~standard", () => ({ validate: (t4) => {
        try {
          const r4 = mi(e3, t4);
          return r4.success ? { value: r4.data } : { issues: r4.error?.issues };
        } catch (r4) {
          return yi(e3, t4).then((e4) => e4.success ? { value: e4.data } : { issues: e4.error?.issues });
        }
      }, vendor: "zod", version: 1 }));
    }), cc = xs("$ZodString", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = [...e3?._zod.bag?.patterns ?? []].pop() ?? ca(e3._zod.bag), e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = String(r3.value);
        } catch (n4) {
        }
        return "string" == typeof r3.value || r3.issues.push({ expected: "string", code: "invalid_type", input: r3.value, inst: e3 }), r3;
      };
    }), uc = xs("$ZodStringFormat", (e3, t3) => {
      Wa.init(e3, t3), cc.init(e3, t3);
    }), lc = xs("$ZodGUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ni), uc.init(e3, t3);
    }), dc = xs("$ZodUUID", (e3, t3) => {
      if (t3.version) {
        const e4 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t3.version];
        if (void 0 === e4) throw new Error(`Invalid UUID version: "${t3.version}"`);
        t3.pattern ?? (t3.pattern = Mi(e4));
      } else t3.pattern ?? (t3.pattern = Mi());
      uc.init(e3, t3);
    }), pc = xs("$ZodEmail", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Fi), uc.init(e3, t3);
    }), fc = xs("$ZodURL", (e3, t3) => {
      uc.init(e3, t3), e3._zod.check = (r3) => {
        try {
          const n3 = r3.value.trim(), o2 = new URL(n3);
          return t3.hostname && (t3.hostname.lastIndex = 0, t3.hostname.test(o2.hostname) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t3.hostname.source, input: r3.value, inst: e3, continue: !t3.abort })), t3.protocol && (t3.protocol.lastIndex = 0, t3.protocol.test(o2.protocol.endsWith(":") ? o2.protocol.slice(0, -1) : o2.protocol) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t3.protocol.source, input: r3.value, inst: e3, continue: !t3.abort })), void (t3.normalize ? r3.value = o2.href : r3.value = n3);
        } catch (n3) {
          r3.issues.push({ code: "invalid_format", format: "url", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    }), hc = xs("$ZodEmoji", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ki()), uc.init(e3, t3);
    }), mc = xs("$ZodNanoID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ai), uc.init(e3, t3);
    }), gc = xs("$ZodCUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ti), uc.init(e3, t3);
    }), yc = xs("$ZodCUID2", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Oi), uc.init(e3, t3);
    }), _c = xs("$ZodULID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Pi), uc.init(e3, t3);
    }), vc = xs("$ZodXID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ii), uc.init(e3, t3);
    }), wc = xs("$ZodKSUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Ci), uc.init(e3, t3);
    }), bc = xs("$ZodISODateTime", (e3, t3) => {
      t3.pattern ?? (t3.pattern = aa(t3)), uc.init(e3, t3);
    }), Sc = xs("$ZodISODate", (e3, t3) => {
      t3.pattern ?? (t3.pattern = oa), uc.init(e3, t3);
    }), kc = xs("$ZodISOTime", (e3, t3) => {
      t3.pattern ?? (t3.pattern = ia(t3)), uc.init(e3, t3);
    }), Ec = xs("$ZodISODuration", (e3, t3) => {
      t3.pattern ?? (t3.pattern = $i), uc.init(e3, t3);
    }), xc = xs("$ZodIPv4", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Zi), uc.init(e3, t3), e3._zod.bag.format = "ipv4";
    }), Tc = xs("$ZodIPv6", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Wi), uc.init(e3, t3), e3._zod.bag.format = "ipv6", e3._zod.check = (r3) => {
        try {
          new URL(`http://[${r3.value}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "ipv6", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    }), Oc = xs("$ZodMAC", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Hi(t3.delimiter)), uc.init(e3, t3), e3._zod.bag.format = "mac";
    }), Pc = xs("$ZodCIDRv4", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Yi), uc.init(e3, t3);
    }), Ic = xs("$ZodCIDRv6", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Gi), uc.init(e3, t3), e3._zod.check = (r3) => {
        const n3 = r3.value.split("/");
        try {
          if (2 !== n3.length) throw new Error();
          const [e4, t4] = n3;
          if (!t4) throw new Error();
          const r4 = Number(t4);
          if (`${r4}` !== t4) throw new Error();
          if (r4 < 0 || r4 > 128) throw new Error();
          new URL(`http://[${e4}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "cidrv6", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    });
    function Cc(e3) {
      if ("" === e3) return true;
      if (e3.length % 4 != 0) return false;
      try {
        return atob(e3), true;
      } catch {
        return false;
      }
    }
    const Ac = xs("$ZodBase64", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Xi), uc.init(e3, t3), e3._zod.bag.contentEncoding = "base64", e3._zod.check = (r3) => {
        Cc(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64", input: r3.value, inst: e3, continue: !t3.abort });
      };
    });
    const $c = xs("$ZodBase64URL", (e3, t3) => {
      t3.pattern ?? (t3.pattern = Qi), uc.init(e3, t3), e3._zod.bag.contentEncoding = "base64url", e3._zod.check = (r3) => {
        (function(e4) {
          if (!Qi.test(e4)) return false;
          const t4 = e4.replace(/[-_]/g, (e5) => "-" === e5 ? "+" : "/");
          return Cc(t4.padEnd(4 * Math.ceil(t4.length / 4), "="));
        })(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64url", input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), Rc = xs("$ZodE164", (e3, t3) => {
      t3.pattern ?? (t3.pattern = ra), uc.init(e3, t3);
    });
    const Nc = xs("$ZodJWT", (e3, t3) => {
      uc.init(e3, t3), e3._zod.check = (r3) => {
        (function(e4, t4 = null) {
          try {
            const r4 = e4.split(".");
            if (3 !== r4.length) return false;
            const [n3] = r4;
            if (!n3) return false;
            const o2 = JSON.parse(atob(n3));
            return !("typ" in o2 && "JWT" !== o2?.typ || !o2.alg || t4 && (!("alg" in o2) || o2.alg !== t4));
          } catch {
            return false;
          }
        })(r3.value, t3.alg) || r3.issues.push({ code: "invalid_format", format: "jwt", input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), Mc = xs("$ZodCustomStringFormat", (e3, t3) => {
      uc.init(e3, t3), e3._zod.check = (r3) => {
        t3.fn(r3.value) || r3.issues.push({ code: "invalid_format", format: t3.format, input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), Jc = xs("$ZodNumber", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = e3._zod.bag.pattern ?? da, e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = Number(r3.value);
        } catch (e4) {
        }
        const o2 = r3.value;
        if ("number" == typeof o2 && !Number.isNaN(o2) && Number.isFinite(o2)) return r3;
        const s2 = "number" == typeof o2 ? Number.isNaN(o2) ? "NaN" : Number.isFinite(o2) ? void 0 : "Infinity" : void 0;
        return r3.issues.push({ expected: "number", code: "invalid_type", input: o2, inst: e3, ...s2 ? { received: s2 } : {} }), r3;
      };
    }), jc = xs("$ZodNumberFormat", (e3, t3) => {
      qa.init(e3, t3), Jc.init(e3, t3);
    }), Dc = xs("$ZodBoolean", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = pa, e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = Boolean(r3.value);
        } catch (e4) {
        }
        const o2 = r3.value;
        return "boolean" == typeof o2 || r3.issues.push({ expected: "boolean", code: "invalid_type", input: o2, inst: e3 }), r3;
      };
    }), Fc = xs("$ZodBigInt", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = ua, e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = BigInt(r3.value);
        } catch (e4) {
        }
        return "bigint" == typeof r3.value || r3.issues.push({ expected: "bigint", code: "invalid_type", input: r3.value, inst: e3 }), r3;
      };
    }), qc = xs("$ZodBigIntFormat", (e3, t3) => {
      za.init(e3, t3), Fc.init(e3, t3);
    }), zc = xs("$ZodSymbol", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return "symbol" == typeof n3 || t4.issues.push({ expected: "symbol", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), Uc = xs("$ZodUndefined", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = ha, e3._zod.values = /* @__PURE__ */ new Set([void 0]), e3._zod.optin = "optional", e3._zod.optout = "optional", e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return void 0 === n3 || t4.issues.push({ expected: "undefined", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), Bc = xs("$ZodNull", (e3, t3) => {
      ac.init(e3, t3), e3._zod.pattern = fa, e3._zod.values = /* @__PURE__ */ new Set([null]), e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return null === n3 || t4.issues.push({ expected: "null", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), Lc = xs("$ZodAny", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (e4) => e4;
    }), Vc = xs("$ZodUnknown", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (e4) => e4;
    }), Kc = xs("$ZodNever", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (t4, r3) => (t4.issues.push({ expected: "never", code: "invalid_type", input: t4.value, inst: e3 }), t4);
    }), Zc = xs("$ZodVoid", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return void 0 === n3 || t4.issues.push({ expected: "void", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), Wc = xs("$ZodDate", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = new Date(r3.value);
        } catch (e4) {
        }
        const o2 = r3.value, s2 = o2 instanceof Date;
        return s2 && !Number.isNaN(o2.getTime()) || r3.issues.push({ expected: "date", code: "invalid_type", input: o2, ...s2 ? { received: "Invalid Date" } : {}, inst: e3 }), r3;
      };
    });
    function Hc(e3, t3, r3) {
      e3.issues.length && t3.issues.push(...ti(r3, e3.issues)), t3.value[r3] = e3.value;
    }
    const Yc = xs("$ZodArray", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const o2 = r3.value;
        if (!Array.isArray(o2)) return r3.issues.push({ expected: "array", code: "invalid_type", input: o2, inst: e3 }), r3;
        r3.value = Array(o2.length);
        const s2 = [];
        for (let e4 = 0; e4 < o2.length; e4++) {
          const i3 = o2[e4], a3 = t3.element._zod.run({ value: i3, issues: [] }, n3);
          a3 instanceof Promise ? s2.push(a3.then((t4) => Hc(t4, r3, e4))) : Hc(a3, r3, e4);
        }
        return s2.length ? Promise.all(s2).then(() => r3) : r3;
      };
    });
    function Gc(e3, t3, r3, n3, o2) {
      if (e3.issues.length) {
        if (o2 && !(r3 in n3)) return;
        t3.issues.push(...ti(r3, e3.issues));
      }
      void 0 === e3.value ? r3 in n3 && (t3.value[r3] = void 0) : t3.value[r3] = e3.value;
    }
    function Xc(e3) {
      const t3 = Object.keys(e3.shape);
      for (const r4 of t3) if (!e3.shape?.[r4]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r4}": expected a Zod schema`);
      const r3 = (function(e4) {
        return Object.keys(e4).filter((t4) => "optional" === e4[t4]._zod.optin && "optional" === e4[t4]._zod.optout);
      })(e3.shape);
      return { ...e3, keys: t3, keySet: new Set(t3), numKeys: t3.length, optionalKeys: new Set(r3) };
    }
    function Qc(e3, t3, r3, n3, o2, s2) {
      const i3 = [], a3 = o2.keySet, c2 = o2.catchall._zod, u2 = c2.def.type, l2 = "optional" === c2.optout;
      for (const o3 in t3) {
        if (a3.has(o3)) continue;
        if ("never" === u2) {
          i3.push(o3);
          continue;
        }
        const s3 = c2.run({ value: t3[o3], issues: [] }, n3);
        s3 instanceof Promise ? e3.push(s3.then((e4) => Gc(e4, r3, o3, t3, l2))) : Gc(s3, r3, o3, t3, l2);
      }
      return i3.length && r3.issues.push({ code: "unrecognized_keys", keys: i3, input: t3, inst: s2 }), e3.length ? Promise.all(e3).then(() => r3) : r3;
    }
    const eu = xs("$ZodObject", (e3, t3) => {
      ac.init(e3, t3);
      const r3 = Object.getOwnPropertyDescriptor(t3, "shape");
      if (!r3?.get) {
        const e4 = t3.shape;
        Object.defineProperty(t3, "shape", { get: () => {
          const r4 = { ...e4 };
          return Object.defineProperty(t3, "shape", { value: r4 }), r4;
        } });
      }
      const n3 = Rs(() => Xc(t3));
      js(e3._zod, "propValues", () => {
        const e4 = t3.shape, r4 = {};
        for (const t4 in e4) {
          const n4 = e4[t4]._zod;
          if (n4.values) {
            r4[t4] ?? (r4[t4] = /* @__PURE__ */ new Set());
            for (const e5 of n4.values) r4[t4].add(e5);
          }
        }
        return r4;
      });
      const o2 = Us, s2 = t3.catchall;
      let i3;
      e3._zod.parse = (t4, r4) => {
        i3 ?? (i3 = n3.value);
        const a3 = t4.value;
        if (!o2(a3)) return t4.issues.push({ expected: "object", code: "invalid_type", input: a3, inst: e3 }), t4;
        t4.value = {};
        const c2 = [], u2 = i3.shape;
        for (const e4 of i3.keys) {
          const n4 = u2[e4], o3 = "optional" === n4._zod.optout, s3 = n4._zod.run({ value: a3[e4], issues: [] }, r4);
          s3 instanceof Promise ? c2.push(s3.then((r5) => Gc(r5, t4, e4, a3, o3))) : Gc(s3, t4, e4, a3, o3);
        }
        return s2 ? Qc(c2, a3, t4, r4, n3.value, e3) : c2.length ? Promise.all(c2).then(() => t4) : t4;
      };
    }), tu = xs("$ZodObjectJIT", (e3, t3) => {
      eu.init(e3, t3);
      const r3 = e3._zod.parse, n3 = Rs(() => Xc(t3));
      let o2;
      const s2 = Us, i3 = !Ps.jitless, a3 = i3 && Bs.value, c2 = t3.catchall;
      let u2;
      e3._zod.parse = (l2, d2) => {
        u2 ?? (u2 = n3.value);
        const p2 = l2.value;
        return s2(p2) ? i3 && a3 && false === d2?.async && true !== d2.jitless ? (o2 || (o2 = ((e4) => {
          const t4 = new sc(["shape", "payload", "ctx"]), r4 = n3.value, o3 = (e5) => {
            const t5 = qs(e5);
            return `shape[${t5}]._zod.run({ value: input[${t5}], issues: [] }, ctx)`;
          };
          t4.write("const input = payload.value;");
          const s3 = /* @__PURE__ */ Object.create(null);
          let i4 = 0;
          for (const e5 of r4.keys) s3[e5] = "key_" + i4++;
          t4.write("const newResult = {};");
          for (const n4 of r4.keys) {
            const r5 = s3[n4], i5 = qs(n4), a5 = e4[n4], c3 = "optional" === a5?._zod?.optout;
            t4.write(`const ${r5} = ${o3(n4)};`), c3 ? t4.write(`
        if (${r5}.issues.length) {
          if (${i5} in input) {
            payload.issues = payload.issues.concat(${r5}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${i5}, ...iss.path] : [${i5}]
            })));
          }
        }
        
        if (${r5}.value === undefined) {
          if (${i5} in input) {
            newResult[${i5}] = undefined;
          }
        } else {
          newResult[${i5}] = ${r5}.value;
        }
        
      `) : t4.write(`
        if (${r5}.issues.length) {
          payload.issues = payload.issues.concat(${r5}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${i5}, ...iss.path] : [${i5}]
          })));
        }
        
        if (${r5}.value === undefined) {
          if (${i5} in input) {
            newResult[${i5}] = undefined;
          }
        } else {
          newResult[${i5}] = ${r5}.value;
        }
        
      `);
          }
          t4.write("payload.value = newResult;"), t4.write("return payload;");
          const a4 = t4.compile();
          return (t5, r5) => a4(e4, t5, r5);
        })(t3.shape)), l2 = o2(l2, d2), c2 ? Qc([], p2, l2, d2, u2, e3) : l2) : r3(l2, d2) : (l2.issues.push({ expected: "object", code: "invalid_type", input: p2, inst: e3 }), l2);
      };
    });
    function ru(e3, t3, r3, n3) {
      for (const r4 of e3) if (0 === r4.issues.length) return t3.value = r4.value, t3;
      const o2 = e3.filter((e4) => !ei(e4));
      return 1 === o2.length ? (t3.value = o2[0].value, o2[0]) : (t3.issues.push({ code: "invalid_union", input: t3.value, inst: r3, errors: e3.map((e4) => e4.issues.map((e5) => ni(e5, n3, Is()))) }), t3);
    }
    const nu = xs("$ZodUnion", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "optin", () => t3.options.some((e4) => "optional" === e4._zod.optin) ? "optional" : void 0), js(e3._zod, "optout", () => t3.options.some((e4) => "optional" === e4._zod.optout) ? "optional" : void 0), js(e3._zod, "values", () => {
        if (t3.options.every((e4) => e4._zod.values)) return new Set(t3.options.flatMap((e4) => Array.from(e4._zod.values)));
      }), js(e3._zod, "pattern", () => {
        if (t3.options.every((e4) => e4._zod.pattern)) {
          const e4 = t3.options.map((e5) => e5._zod.pattern);
          return new RegExp(`^(${e4.map((e5) => Ms(e5.source)).join("|")})$`);
        }
      });
      const r3 = 1 === t3.options.length, n3 = t3.options[0]._zod.run;
      e3._zod.parse = (o2, s2) => {
        if (r3) return n3(o2, s2);
        let i3 = false;
        const a3 = [];
        for (const e4 of t3.options) {
          const t4 = e4._zod.run({ value: o2.value, issues: [] }, s2);
          if (t4 instanceof Promise) a3.push(t4), i3 = true;
          else {
            if (0 === t4.issues.length) return t4;
            a3.push(t4);
          }
        }
        return i3 ? Promise.all(a3).then((t4) => ru(t4, o2, e3, s2)) : ru(a3, o2, e3, s2);
      };
    });
    function ou(e3, t3, r3, n3) {
      const o2 = e3.filter((e4) => 0 === e4.issues.length);
      return 1 === o2.length ? (t3.value = o2[0].value, t3) : (0 === o2.length ? t3.issues.push({ code: "invalid_union", input: t3.value, inst: r3, errors: e3.map((e4) => e4.issues.map((e5) => ni(e5, n3, Is()))) }) : t3.issues.push({ code: "invalid_union", input: t3.value, inst: r3, errors: [], inclusive: false }), t3);
    }
    const su = xs("$ZodXor", (e3, t3) => {
      nu.init(e3, t3), t3.inclusive = false;
      const r3 = 1 === t3.options.length, n3 = t3.options[0]._zod.run;
      e3._zod.parse = (o2, s2) => {
        if (r3) return n3(o2, s2);
        let i3 = false;
        const a3 = [];
        for (const e4 of t3.options) {
          const t4 = e4._zod.run({ value: o2.value, issues: [] }, s2);
          t4 instanceof Promise ? (a3.push(t4), i3 = true) : a3.push(t4);
        }
        return i3 ? Promise.all(a3).then((t4) => ou(t4, o2, e3, s2)) : ou(a3, o2, e3, s2);
      };
    }), iu = xs("$ZodDiscriminatedUnion", (e3, t3) => {
      t3.inclusive = false, nu.init(e3, t3);
      const r3 = e3._zod.parse;
      js(e3._zod, "propValues", () => {
        const e4 = {};
        for (const r4 of t3.options) {
          const n4 = r4._zod.propValues;
          if (!n4 || 0 === Object.keys(n4).length) throw new Error(`Invalid discriminated union option at index "${t3.options.indexOf(r4)}"`);
          for (const [t4, r5] of Object.entries(n4)) {
            e4[t4] || (e4[t4] = /* @__PURE__ */ new Set());
            for (const n5 of r5) e4[t4].add(n5);
          }
        }
        return e4;
      });
      const n3 = Rs(() => {
        const e4 = t3.options, r4 = /* @__PURE__ */ new Map();
        for (const n4 of e4) {
          const e5 = n4._zod.propValues?.[t3.discriminator];
          if (!e5 || 0 === e5.size) throw new Error(`Invalid discriminated union option at index "${t3.options.indexOf(n4)}"`);
          for (const t4 of e5) {
            if (r4.has(t4)) throw new Error(`Duplicate discriminator value "${String(t4)}"`);
            r4.set(t4, n4);
          }
        }
        return r4;
      });
      e3._zod.parse = (o2, s2) => {
        const i3 = o2.value;
        if (!Us(i3)) return o2.issues.push({ code: "invalid_type", expected: "object", input: i3, inst: e3 }), o2;
        const a3 = n3.value.get(i3?.[t3.discriminator]);
        return a3 ? a3._zod.run(o2, s2) : t3.unionFallback ? r3(o2, s2) : (o2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t3.discriminator, input: i3, path: [t3.discriminator], inst: e3 }), o2);
      };
    }), au = xs("$ZodIntersection", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (e4, r3) => {
        const n3 = e4.value, o2 = t3.left._zod.run({ value: n3, issues: [] }, r3), s2 = t3.right._zod.run({ value: n3, issues: [] }, r3);
        return o2 instanceof Promise || s2 instanceof Promise ? Promise.all([o2, s2]).then(([t4, r4]) => uu(e4, t4, r4)) : uu(e4, o2, s2);
      };
    });
    function cu(e3, t3) {
      if (e3 === t3) return { valid: true, data: e3 };
      if (e3 instanceof Date && t3 instanceof Date && +e3 === +t3) return { valid: true, data: e3 };
      if (Ls(e3) && Ls(t3)) {
        const r3 = Object.keys(t3), n3 = Object.keys(e3).filter((e4) => -1 !== r3.indexOf(e4)), o2 = { ...e3, ...t3 };
        for (const r4 of n3) {
          const n4 = cu(e3[r4], t3[r4]);
          if (!n4.valid) return { valid: false, mergeErrorPath: [r4, ...n4.mergeErrorPath] };
          o2[r4] = n4.data;
        }
        return { valid: true, data: o2 };
      }
      if (Array.isArray(e3) && Array.isArray(t3)) {
        if (e3.length !== t3.length) return { valid: false, mergeErrorPath: [] };
        const r3 = [];
        for (let n3 = 0; n3 < e3.length; n3++) {
          const o2 = cu(e3[n3], t3[n3]);
          if (!o2.valid) return { valid: false, mergeErrorPath: [n3, ...o2.mergeErrorPath] };
          r3.push(o2.data);
        }
        return { valid: true, data: r3 };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    function uu(e3, t3, r3) {
      const n3 = /* @__PURE__ */ new Map();
      let o2;
      for (const r4 of t3.issues) if ("unrecognized_keys" === r4.code) {
        o2 ?? (o2 = r4);
        for (const e4 of r4.keys) n3.has(e4) || n3.set(e4, {}), n3.get(e4).l = true;
      } else e3.issues.push(r4);
      for (const t4 of r3.issues) if ("unrecognized_keys" === t4.code) for (const e4 of t4.keys) n3.has(e4) || n3.set(e4, {}), n3.get(e4).r = true;
      else e3.issues.push(t4);
      const s2 = [...n3].filter(([, e4]) => e4.l && e4.r).map(([e4]) => e4);
      if (s2.length && o2 && e3.issues.push({ ...o2, keys: s2 }), ei(e3)) return e3;
      const i3 = cu(t3.value, r3.value);
      if (!i3.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i3.mergeErrorPath)}`);
      return e3.value = i3.data, e3;
    }
    const lu = xs("$ZodTuple", (e3, t3) => {
      ac.init(e3, t3);
      const r3 = t3.items;
      e3._zod.parse = (n3, o2) => {
        const s2 = n3.value;
        if (!Array.isArray(s2)) return n3.issues.push({ input: s2, inst: e3, expected: "tuple", code: "invalid_type" }), n3;
        n3.value = [];
        const i3 = [], a3 = [...r3].reverse().findIndex((e4) => "optional" !== e4._zod.optin), c2 = -1 === a3 ? 0 : r3.length - a3;
        if (!t3.rest) {
          const t4 = s2.length > r3.length, o3 = s2.length < c2 - 1;
          if (t4 || o3) return n3.issues.push({ ...t4 ? { code: "too_big", maximum: r3.length, inclusive: true } : { code: "too_small", minimum: r3.length }, input: s2, inst: e3, origin: "array" }), n3;
        }
        let u2 = -1;
        for (const e4 of r3) {
          if (u2++, u2 >= s2.length && u2 >= c2) continue;
          const t4 = e4._zod.run({ value: s2[u2], issues: [] }, o2);
          t4 instanceof Promise ? i3.push(t4.then((e5) => du(e5, n3, u2))) : du(t4, n3, u2);
        }
        if (t3.rest) {
          const e4 = s2.slice(r3.length);
          for (const r4 of e4) {
            u2++;
            const e5 = t3.rest._zod.run({ value: r4, issues: [] }, o2);
            e5 instanceof Promise ? i3.push(e5.then((e6) => du(e6, n3, u2))) : du(e5, n3, u2);
          }
        }
        return i3.length ? Promise.all(i3).then(() => n3) : n3;
      };
    });
    function du(e3, t3, r3) {
      e3.issues.length && t3.issues.push(...ti(r3, e3.issues)), t3.value[r3] = e3.value;
    }
    const pu = xs("$ZodRecord", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const o2 = r3.value;
        if (!Ls(o2)) return r3.issues.push({ expected: "record", code: "invalid_type", input: o2, inst: e3 }), r3;
        const s2 = [], i3 = t3.keyType._zod.values;
        if (i3) {
          r3.value = {};
          const a3 = /* @__PURE__ */ new Set();
          for (const e4 of i3) if ("string" == typeof e4 || "number" == typeof e4 || "symbol" == typeof e4) {
            a3.add("number" == typeof e4 ? e4.toString() : e4);
            const i4 = t3.valueType._zod.run({ value: o2[e4], issues: [] }, n3);
            i4 instanceof Promise ? s2.push(i4.then((t4) => {
              t4.issues.length && r3.issues.push(...ti(e4, t4.issues)), r3.value[e4] = t4.value;
            })) : (i4.issues.length && r3.issues.push(...ti(e4, i4.issues)), r3.value[e4] = i4.value);
          }
          let c2;
          for (const e4 in o2) a3.has(e4) || (c2 = c2 ?? [], c2.push(e4));
          c2 && c2.length > 0 && r3.issues.push({ code: "unrecognized_keys", input: o2, inst: e3, keys: c2 });
        } else {
          r3.value = {};
          for (const i4 of Reflect.ownKeys(o2)) {
            if ("__proto__" === i4) continue;
            let a3 = t3.keyType._zod.run({ value: i4, issues: [] }, n3);
            if (a3 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if ("string" == typeof i4 && da.test(i4) && a3.issues.length) {
              const e4 = t3.keyType._zod.run({ value: Number(i4), issues: [] }, n3);
              if (e4 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
              0 === e4.issues.length && (a3 = e4);
            }
            if (a3.issues.length) {
              "loose" === t3.mode ? r3.value[i4] = o2[i4] : r3.issues.push({ code: "invalid_key", origin: "record", issues: a3.issues.map((e4) => ni(e4, n3, Is())), input: i4, path: [i4], inst: e3 });
              continue;
            }
            const c2 = t3.valueType._zod.run({ value: o2[i4], issues: [] }, n3);
            c2 instanceof Promise ? s2.push(c2.then((e4) => {
              e4.issues.length && r3.issues.push(...ti(i4, e4.issues)), r3.value[a3.value] = e4.value;
            })) : (c2.issues.length && r3.issues.push(...ti(i4, c2.issues)), r3.value[a3.value] = c2.value);
          }
        }
        return s2.length ? Promise.all(s2).then(() => r3) : r3;
      };
    }), fu = xs("$ZodMap", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const o2 = r3.value;
        if (!(o2 instanceof Map)) return r3.issues.push({ expected: "map", code: "invalid_type", input: o2, inst: e3 }), r3;
        const s2 = [];
        r3.value = /* @__PURE__ */ new Map();
        for (const [i3, a3] of o2) {
          const c2 = t3.keyType._zod.run({ value: i3, issues: [] }, n3), u2 = t3.valueType._zod.run({ value: a3, issues: [] }, n3);
          c2 instanceof Promise || u2 instanceof Promise ? s2.push(Promise.all([c2, u2]).then(([t4, s3]) => {
            hu(t4, s3, r3, i3, o2, e3, n3);
          })) : hu(c2, u2, r3, i3, o2, e3, n3);
        }
        return s2.length ? Promise.all(s2).then(() => r3) : r3;
      };
    });
    function hu(e3, t3, r3, n3, o2, s2, i3) {
      e3.issues.length && (Ks.has(typeof n3) ? r3.issues.push(...ti(n3, e3.issues)) : r3.issues.push({ code: "invalid_key", origin: "map", input: o2, inst: s2, issues: e3.issues.map((e4) => ni(e4, i3, Is())) })), t3.issues.length && (Ks.has(typeof n3) ? r3.issues.push(...ti(n3, t3.issues)) : r3.issues.push({ origin: "map", code: "invalid_element", input: o2, inst: s2, key: n3, issues: t3.issues.map((e4) => ni(e4, i3, Is())) })), r3.value.set(e3.value, t3.value);
    }
    const mu = xs("$ZodSet", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const o2 = r3.value;
        if (!(o2 instanceof Set)) return r3.issues.push({ input: o2, inst: e3, expected: "set", code: "invalid_type" }), r3;
        const s2 = [];
        r3.value = /* @__PURE__ */ new Set();
        for (const e4 of o2) {
          const o3 = t3.valueType._zod.run({ value: e4, issues: [] }, n3);
          o3 instanceof Promise ? s2.push(o3.then((e5) => gu(e5, r3))) : gu(o3, r3);
        }
        return s2.length ? Promise.all(s2).then(() => r3) : r3;
      };
    });
    function gu(e3, t3) {
      e3.issues.length && t3.issues.push(...e3.issues), t3.value.add(e3.value);
    }
    const yu = xs("$ZodEnum", (e3, t3) => {
      ac.init(e3, t3);
      const r3 = Cs(t3.entries), n3 = new Set(r3);
      e3._zod.values = n3, e3._zod.pattern = new RegExp(`^(${r3.filter((e4) => Ks.has(typeof e4)).map((e4) => "string" == typeof e4 ? Ws(e4) : e4.toString()).join("|")})$`), e3._zod.parse = (t4, o2) => {
        const s2 = t4.value;
        return n3.has(s2) || t4.issues.push({ code: "invalid_value", values: r3, input: s2, inst: e3 }), t4;
      };
    }), _u = xs("$ZodLiteral", (e3, t3) => {
      if (ac.init(e3, t3), 0 === t3.values.length) throw new Error("Cannot create literal schema with no valid values");
      const r3 = new Set(t3.values);
      e3._zod.values = r3, e3._zod.pattern = new RegExp(`^(${t3.values.map((e4) => "string" == typeof e4 ? Ws(e4) : e4 ? Ws(e4.toString()) : String(e4)).join("|")})$`), e3._zod.parse = (n3, o2) => {
        const s2 = n3.value;
        return r3.has(s2) || n3.issues.push({ code: "invalid_value", values: t3.values, input: s2, inst: e3 }), n3;
      };
    }), vu = xs("$ZodFile", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return n3 instanceof File || t4.issues.push({ expected: "file", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), wu = xs("$ZodTransform", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (r3, n3) => {
        if ("backward" === n3.direction) throw new Os(e3.constructor.name);
        const o2 = t3.transform(r3.value, r3);
        if (n3.async) {
          return (o2 instanceof Promise ? o2 : Promise.resolve(o2)).then((e4) => (r3.value = e4, r3));
        }
        if (o2 instanceof Promise) throw new Ts();
        return r3.value = o2, r3;
      };
    });
    function bu(e3, t3) {
      return e3.issues.length && void 0 === t3 ? { issues: [], value: void 0 } : e3;
    }
    const Su = xs("$ZodOptional", (e3, t3) => {
      ac.init(e3, t3), e3._zod.optin = "optional", e3._zod.optout = "optional", js(e3._zod, "values", () => t3.innerType._zod.values ? /* @__PURE__ */ new Set([...t3.innerType._zod.values, void 0]) : void 0), js(e3._zod, "pattern", () => {
        const e4 = t3.innerType._zod.pattern;
        return e4 ? new RegExp(`^(${Ms(e4.source)})?$`) : void 0;
      }), e3._zod.parse = (e4, r3) => {
        if ("optional" === t3.innerType._zod.optin) {
          const n3 = t3.innerType._zod.run(e4, r3);
          return n3 instanceof Promise ? n3.then((t4) => bu(t4, e4.value)) : bu(n3, e4.value);
        }
        return void 0 === e4.value ? e4 : t3.innerType._zod.run(e4, r3);
      };
    }), ku = xs("$ZodExactOptional", (e3, t3) => {
      Su.init(e3, t3), js(e3._zod, "values", () => t3.innerType._zod.values), js(e3._zod, "pattern", () => t3.innerType._zod.pattern), e3._zod.parse = (e4, r3) => t3.innerType._zod.run(e4, r3);
    }), Eu = xs("$ZodNullable", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "optin", () => t3.innerType._zod.optin), js(e3._zod, "optout", () => t3.innerType._zod.optout), js(e3._zod, "pattern", () => {
        const e4 = t3.innerType._zod.pattern;
        return e4 ? new RegExp(`^(${Ms(e4.source)}|null)$`) : void 0;
      }), js(e3._zod, "values", () => t3.innerType._zod.values ? /* @__PURE__ */ new Set([...t3.innerType._zod.values, null]) : void 0), e3._zod.parse = (e4, r3) => null === e4.value ? e4 : t3.innerType._zod.run(e4, r3);
    }), xu = xs("$ZodDefault", (e3, t3) => {
      ac.init(e3, t3), e3._zod.optin = "optional", js(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => {
        if ("backward" === r3.direction) return t3.innerType._zod.run(e4, r3);
        if (void 0 === e4.value) return e4.value = t3.defaultValue, e4;
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((e5) => Tu(e5, t3)) : Tu(n3, t3);
      };
    });
    function Tu(e3, t3) {
      return void 0 === e3.value && (e3.value = t3.defaultValue), e3;
    }
    const Ou = xs("$ZodPrefault", (e3, t3) => {
      ac.init(e3, t3), e3._zod.optin = "optional", js(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => ("backward" === r3.direction || void 0 === e4.value && (e4.value = t3.defaultValue), t3.innerType._zod.run(e4, r3));
    }), Pu = xs("$ZodNonOptional", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "values", () => {
        const e4 = t3.innerType._zod.values;
        return e4 ? new Set([...e4].filter((e5) => void 0 !== e5)) : void 0;
      }), e3._zod.parse = (r3, n3) => {
        const o2 = t3.innerType._zod.run(r3, n3);
        return o2 instanceof Promise ? o2.then((t4) => Iu(t4, e3)) : Iu(o2, e3);
      };
    });
    function Iu(e3, t3) {
      return e3.issues.length || void 0 !== e3.value || e3.issues.push({ code: "invalid_type", expected: "nonoptional", input: e3.value, inst: t3 }), e3;
    }
    const Cu = xs("$ZodSuccess", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (e4, r3) => {
        if ("backward" === r3.direction) throw new Os("ZodSuccess");
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((t4) => (e4.value = 0 === t4.issues.length, e4)) : (e4.value = 0 === n3.issues.length, e4);
      };
    }), Au = xs("$ZodCatch", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "optin", () => t3.innerType._zod.optin), js(e3._zod, "optout", () => t3.innerType._zod.optout), js(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => {
        if ("backward" === r3.direction) return t3.innerType._zod.run(e4, r3);
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((n4) => (e4.value = n4.value, n4.issues.length && (e4.value = t3.catchValue({ ...e4, error: { issues: n4.issues.map((e5) => ni(e5, r3, Is())) }, input: e4.value }), e4.issues = []), e4)) : (e4.value = n3.value, n3.issues.length && (e4.value = t3.catchValue({ ...e4, error: { issues: n3.issues.map((e5) => ni(e5, r3, Is())) }, input: e4.value }), e4.issues = []), e4);
      };
    }), $u = xs("$ZodNaN", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (t4, r3) => ("number" == typeof t4.value && Number.isNaN(t4.value) || t4.issues.push({ input: t4.value, inst: e3, expected: "nan", code: "invalid_type" }), t4);
    }), Ru = xs("$ZodPipe", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "values", () => t3.in._zod.values), js(e3._zod, "optin", () => t3.in._zod.optin), js(e3._zod, "optout", () => t3.out._zod.optout), js(e3._zod, "propValues", () => t3.in._zod.propValues), e3._zod.parse = (e4, r3) => {
        if ("backward" === r3.direction) {
          const n4 = t3.out._zod.run(e4, r3);
          return n4 instanceof Promise ? n4.then((e5) => Nu(e5, t3.in, r3)) : Nu(n4, t3.in, r3);
        }
        const n3 = t3.in._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((e5) => Nu(e5, t3.out, r3)) : Nu(n3, t3.out, r3);
      };
    });
    function Nu(e3, t3, r3) {
      return e3.issues.length ? (e3.aborted = true, e3) : t3._zod.run({ value: e3.value, issues: e3.issues }, r3);
    }
    const Mu = xs("$ZodCodec", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "values", () => t3.in._zod.values), js(e3._zod, "optin", () => t3.in._zod.optin), js(e3._zod, "optout", () => t3.out._zod.optout), js(e3._zod, "propValues", () => t3.in._zod.propValues), e3._zod.parse = (e4, r3) => {
        if ("forward" === (r3.direction || "forward")) {
          const n3 = t3.in._zod.run(e4, r3);
          return n3 instanceof Promise ? n3.then((e5) => Ju(e5, t3, r3)) : Ju(n3, t3, r3);
        }
        {
          const n3 = t3.out._zod.run(e4, r3);
          return n3 instanceof Promise ? n3.then((e5) => Ju(e5, t3, r3)) : Ju(n3, t3, r3);
        }
      };
    });
    function Ju(e3, t3, r3) {
      if (e3.issues.length) return e3.aborted = true, e3;
      if ("forward" === (r3.direction || "forward")) {
        const n3 = t3.transform(e3.value, e3);
        return n3 instanceof Promise ? n3.then((n4) => ju(e3, n4, t3.out, r3)) : ju(e3, n3, t3.out, r3);
      }
      {
        const n3 = t3.reverseTransform(e3.value, e3);
        return n3 instanceof Promise ? n3.then((n4) => ju(e3, n4, t3.in, r3)) : ju(e3, n3, t3.in, r3);
      }
    }
    function ju(e3, t3, r3, n3) {
      return e3.issues.length ? (e3.aborted = true, e3) : r3._zod.run({ value: t3, issues: e3.issues }, n3);
    }
    const Du = xs("$ZodReadonly", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "propValues", () => t3.innerType._zod.propValues), js(e3._zod, "values", () => t3.innerType._zod.values), js(e3._zod, "optin", () => t3.innerType?._zod?.optin), js(e3._zod, "optout", () => t3.innerType?._zod?.optout), e3._zod.parse = (e4, r3) => {
        if ("backward" === r3.direction) return t3.innerType._zod.run(e4, r3);
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then(Fu) : Fu(n3);
      };
    });
    function Fu(e3) {
      return e3.value = Object.freeze(e3.value), e3;
    }
    const qu = xs("$ZodTemplateLiteral", (e3, t3) => {
      ac.init(e3, t3);
      const r3 = [];
      for (const e4 of t3.parts) if ("object" == typeof e4 && null !== e4) {
        if (!e4._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...e4._zod.traits].shift()}`);
        const t4 = e4._zod.pattern instanceof RegExp ? e4._zod.pattern.source : e4._zod.pattern;
        if (!t4) throw new Error(`Invalid template literal part: ${e4._zod.traits}`);
        const n3 = t4.startsWith("^") ? 1 : 0, o2 = t4.endsWith("$") ? t4.length - 1 : t4.length;
        r3.push(t4.slice(n3, o2));
      } else {
        if (null !== e4 && !Zs.has(typeof e4)) throw new Error(`Invalid template literal part: ${e4}`);
        r3.push(Ws(`${e4}`));
      }
      e3._zod.pattern = new RegExp(`^${r3.join("")}$`), e3._zod.parse = (r4, n3) => "string" != typeof r4.value ? (r4.issues.push({ input: r4.value, inst: e3, expected: "string", code: "invalid_type" }), r4) : (e3._zod.pattern.lastIndex = 0, e3._zod.pattern.test(r4.value) || r4.issues.push({ input: r4.value, inst: e3, code: "invalid_format", format: t3.format ?? "template_literal", pattern: e3._zod.pattern.source }), r4);
    }), zu = xs("$ZodFunction", (e3, t3) => (ac.init(e3, t3), e3._def = t3, e3._zod.def = t3, e3.implement = (t4) => {
      if ("function" != typeof t4) throw new Error("implement() must be called with a function");
      return function(...r3) {
        const n3 = e3._def.input ? di(e3._def.input, r3) : r3, o2 = Reflect.apply(t4, this, n3);
        return e3._def.output ? di(e3._def.output, o2) : o2;
      };
    }, e3.implementAsync = (t4) => {
      if ("function" != typeof t4) throw new Error("implementAsync() must be called with a function");
      return async function(...r3) {
        const n3 = e3._def.input ? await fi(e3._def.input, r3) : r3, o2 = await Reflect.apply(t4, this, n3);
        return e3._def.output ? await fi(e3._def.output, o2) : o2;
      };
    }, e3._zod.parse = (t4, r3) => {
      if ("function" != typeof t4.value) return t4.issues.push({ code: "invalid_type", expected: "function", input: t4.value, inst: e3 }), t4;
      const n3 = e3._def.output && "promise" === e3._def.output._zod.def.type;
      return t4.value = n3 ? e3.implementAsync(t4.value) : e3.implement(t4.value), t4;
    }, e3.input = (...t4) => {
      const r3 = e3.constructor;
      return Array.isArray(t4[0]) ? new r3({ type: "function", input: new lu({ type: "tuple", items: t4[0], rest: t4[1] }), output: e3._def.output }) : new r3({ type: "function", input: t4[0], output: e3._def.output });
    }, e3.output = (t4) => new (0, e3.constructor)({ type: "function", input: e3._def.input, output: t4 }), e3)), Uu = xs("$ZodPromise", (e3, t3) => {
      ac.init(e3, t3), e3._zod.parse = (e4, r3) => Promise.resolve(e4.value).then((e5) => t3.innerType._zod.run({ value: e5, issues: [] }, r3));
    }), Bu = xs("$ZodLazy", (e3, t3) => {
      ac.init(e3, t3), js(e3._zod, "innerType", () => t3.getter()), js(e3._zod, "pattern", () => e3._zod.innerType?._zod?.pattern), js(e3._zod, "propValues", () => e3._zod.innerType?._zod?.propValues), js(e3._zod, "optin", () => e3._zod.innerType?._zod?.optin ?? void 0), js(e3._zod, "optout", () => e3._zod.innerType?._zod?.optout ?? void 0), e3._zod.parse = (t4, r3) => e3._zod.innerType._zod.run(t4, r3);
    }), Lu = xs("$ZodCustom", (e3, t3) => {
      Ma.init(e3, t3), ac.init(e3, t3), e3._zod.parse = (e4, t4) => e4, e3._zod.check = (r3) => {
        const n3 = r3.value, o2 = t3.fn(n3);
        if (o2 instanceof Promise) return o2.then((t4) => Vu(t4, r3, n3, e3));
        Vu(o2, r3, n3, e3);
      };
    });
    function Vu(e3, t3, r3, n3) {
      if (!e3) {
        const e4 = { code: "custom", input: r3, inst: n3, path: [...n3._zod.def.path ?? []], continue: !n3._zod.def.abort };
        n3._zod.def.params && (e4.params = n3._zod.def.params), t3.issues.push(ii(e4));
      }
    }
    const Ku = () => {
      const e3 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
      function t3(t4) {
        return e3[t4] ?? null;
      }
      const r3 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, n3 = { nan: "NaN" };
      return (e4) => {
        switch (e4.code) {
          case "invalid_type": {
            const t4 = n3[e4.expected] ?? e4.expected, r4 = (function(e5) {
              const t5 = typeof e5;
              switch (t5) {
                case "number":
                  return Number.isNaN(e5) ? "nan" : "number";
                case "object": {
                  if (null === e5) return "null";
                  if (Array.isArray(e5)) return "array";
                  const t6 = e5;
                  if (t6 && Object.getPrototypeOf(t6) !== Object.prototype && "constructor" in t6 && t6.constructor) return t6.constructor.name;
                }
              }
              return t5;
            })(e4.input);
            return `Invalid input: expected ${t4}, received ${n3[r4] ?? r4}`;
          }
          case "invalid_value":
            return 1 === e4.values.length ? `Invalid input: expected ${Gs(e4.values[0])}` : `Invalid option: expected one of ${As(e4.values, "|")}`;
          case "too_big": {
            const r4 = e4.inclusive ? "<=" : "<", n4 = t3(e4.origin);
            return n4 ? `Too big: expected ${e4.origin ?? "value"} to have ${r4}${e4.maximum.toString()} ${n4.unit ?? "elements"}` : `Too big: expected ${e4.origin ?? "value"} to be ${r4}${e4.maximum.toString()}`;
          }
          case "too_small": {
            const r4 = e4.inclusive ? ">=" : ">", n4 = t3(e4.origin);
            return n4 ? `Too small: expected ${e4.origin} to have ${r4}${e4.minimum.toString()} ${n4.unit}` : `Too small: expected ${e4.origin} to be ${r4}${e4.minimum.toString()}`;
          }
          case "invalid_format": {
            const t4 = e4;
            return "starts_with" === t4.format ? `Invalid string: must start with "${t4.prefix}"` : "ends_with" === t4.format ? `Invalid string: must end with "${t4.suffix}"` : "includes" === t4.format ? `Invalid string: must include "${t4.includes}"` : "regex" === t4.format ? `Invalid string: must match pattern ${t4.pattern}` : `Invalid ${r3[t4.format] ?? e4.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${e4.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${e4.keys.length > 1 ? "s" : ""}: ${As(e4.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${e4.origin}`;
          case "invalid_union":
          default:
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${e4.origin}`;
        }
      };
    };
    var Zu;
    /* @__PURE__ */ Symbol("ZodOutput"), /* @__PURE__ */ Symbol("ZodInput");
    class Wu {
      constructor() {
        this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(e3, ...t3) {
        const r3 = t3[0];
        return this._map.set(e3, r3), r3 && "object" == typeof r3 && "id" in r3 && this._idmap.set(r3.id, e3), this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(e3) {
        const t3 = this._map.get(e3);
        return t3 && "object" == typeof t3 && "id" in t3 && this._idmap.delete(t3.id), this._map.delete(e3), this;
      }
      get(e3) {
        const t3 = e3._zod.parent;
        if (t3) {
          const r3 = { ...this.get(t3) ?? {} };
          delete r3.id;
          const n3 = { ...r3, ...this._map.get(e3) };
          return Object.keys(n3).length ? n3 : void 0;
        }
        return this._map.get(e3);
      }
      has(e3) {
        return this._map.has(e3);
      }
    }
    (Zu = globalThis).__zod_globalRegistry ?? (Zu.__zod_globalRegistry = new Wu());
    const Hu = globalThis.__zod_globalRegistry;
    function Yu(e3, t3) {
      return new e3({ type: "string", format: "email", check: "string_format", abort: false, ...Ys(t3) });
    }
    function Gu(e3, t3) {
      return new e3({ type: "string", format: "guid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function Xu(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function Qu(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...Ys(t3) });
    }
    function el(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...Ys(t3) });
    }
    function tl(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...Ys(t3) });
    }
    function rl(e3, t3) {
      return new e3({ type: "string", format: "url", check: "string_format", abort: false, ...Ys(t3) });
    }
    function nl(e3, t3) {
      return new e3({ type: "string", format: "emoji", check: "string_format", abort: false, ...Ys(t3) });
    }
    function ol(e3, t3) {
      return new e3({ type: "string", format: "nanoid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function sl(e3, t3) {
      return new e3({ type: "string", format: "cuid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function il(e3, t3) {
      return new e3({ type: "string", format: "cuid2", check: "string_format", abort: false, ...Ys(t3) });
    }
    function al(e3, t3) {
      return new e3({ type: "string", format: "ulid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function cl(e3, t3) {
      return new e3({ type: "string", format: "xid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function ul(e3, t3) {
      return new e3({ type: "string", format: "ksuid", check: "string_format", abort: false, ...Ys(t3) });
    }
    function ll(e3, t3) {
      return new e3({ type: "string", format: "ipv4", check: "string_format", abort: false, ...Ys(t3) });
    }
    function dl(e3, t3) {
      return new e3({ type: "string", format: "ipv6", check: "string_format", abort: false, ...Ys(t3) });
    }
    function pl(e3, t3) {
      return new e3({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...Ys(t3) });
    }
    function fl(e3, t3) {
      return new e3({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...Ys(t3) });
    }
    function hl(e3, t3) {
      return new e3({ type: "string", format: "base64", check: "string_format", abort: false, ...Ys(t3) });
    }
    function ml(e3, t3) {
      return new e3({ type: "string", format: "base64url", check: "string_format", abort: false, ...Ys(t3) });
    }
    function gl(e3, t3) {
      return new e3({ type: "string", format: "e164", check: "string_format", abort: false, ...Ys(t3) });
    }
    function yl(e3, t3) {
      return new e3({ type: "string", format: "jwt", check: "string_format", abort: false, ...Ys(t3) });
    }
    function _l(e3, t3) {
      return new ja({ check: "less_than", ...Ys(t3), value: e3, inclusive: false });
    }
    function vl(e3, t3) {
      return new ja({ check: "less_than", ...Ys(t3), value: e3, inclusive: true });
    }
    function wl(e3, t3) {
      return new Da({ check: "greater_than", ...Ys(t3), value: e3, inclusive: false });
    }
    function bl(e3, t3) {
      return new Da({ check: "greater_than", ...Ys(t3), value: e3, inclusive: true });
    }
    function Sl(e3) {
      return wl(0, e3);
    }
    function kl(e3) {
      return _l(0, e3);
    }
    function El(e3) {
      return vl(0, e3);
    }
    function xl(e3) {
      return bl(0, e3);
    }
    function Tl(e3, t3) {
      return new Fa({ check: "multiple_of", ...Ys(t3), value: e3 });
    }
    function Ol(e3, t3) {
      return new Ua({ check: "max_size", ...Ys(t3), maximum: e3 });
    }
    function Pl(e3, t3) {
      return new Ba({ check: "min_size", ...Ys(t3), minimum: e3 });
    }
    function Il(e3, t3) {
      return new La({ check: "size_equals", ...Ys(t3), size: e3 });
    }
    function Cl(e3, t3) {
      return new Va({ check: "max_length", ...Ys(t3), maximum: e3 });
    }
    function Al(e3, t3) {
      return new Ka({ check: "min_length", ...Ys(t3), minimum: e3 });
    }
    function $l(e3, t3) {
      return new Za({ check: "length_equals", ...Ys(t3), length: e3 });
    }
    function Rl(e3, t3) {
      return new Ha({ check: "string_format", format: "regex", ...Ys(t3), pattern: e3 });
    }
    function Nl(e3) {
      return new Ya({ check: "string_format", format: "lowercase", ...Ys(e3) });
    }
    function Ml(e3) {
      return new Ga({ check: "string_format", format: "uppercase", ...Ys(e3) });
    }
    function Jl(e3, t3) {
      return new Xa({ check: "string_format", format: "includes", ...Ys(t3), includes: e3 });
    }
    function jl(e3, t3) {
      return new Qa({ check: "string_format", format: "starts_with", ...Ys(t3), prefix: e3 });
    }
    function Dl(e3, t3) {
      return new ec({ check: "string_format", format: "ends_with", ...Ys(t3), suffix: e3 });
    }
    function Fl(e3, t3, r3) {
      return new rc({ check: "property", property: e3, schema: t3, ...Ys(r3) });
    }
    function ql(e3, t3) {
      return new nc({ check: "mime_type", mime: e3, ...Ys(t3) });
    }
    function zl(e3) {
      return new oc({ check: "overwrite", tx: e3 });
    }
    function Ul(e3) {
      return zl((t3) => t3.normalize(e3));
    }
    function Bl() {
      return zl((e3) => e3.trim());
    }
    function Ll() {
      return zl((e3) => e3.toLowerCase());
    }
    function Vl() {
      return zl((e3) => e3.toUpperCase());
    }
    function Kl() {
      return zl((e3) => (function(e4) {
        return e4.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      })(e3));
    }
    function Zl(e3) {
      const t3 = (function(e4, t4) {
        const r3 = new Ma({ check: "custom", ...Ys(t4) });
        return r3._zod.check = e4, r3;
      })((r3) => (r3.addIssue = (e4) => {
        if ("string" == typeof e4) r3.issues.push(ii(e4, r3.value, t3._zod.def));
        else {
          const n3 = e4;
          n3.fatal && (n3.continue = false), n3.code ?? (n3.code = "custom"), n3.input ?? (n3.input = r3.value), n3.inst ?? (n3.inst = t3), n3.continue ?? (n3.continue = !t3._zod.def.abort), r3.issues.push(ii(n3));
        }
      }, e3(r3.value, r3)));
      return t3;
    }
    function Wl(e3, t3, r3, n3 = {}) {
      const o2 = Ys(n3), s2 = { ...Ys(n3), check: "string_format", type: "string", format: t3, fn: "function" == typeof r3 ? r3 : (e4) => r3.test(e4), ...o2 };
      r3 instanceof RegExp && (s2.pattern = r3);
      return new e3(s2);
    }
    function Hl(e3) {
      let t3 = e3?.target ?? "draft-2020-12";
      return "draft-4" === t3 && (t3 = "draft-04"), "draft-7" === t3 && (t3 = "draft-07"), { processors: e3.processors ?? {}, metadataRegistry: e3?.metadata ?? Hu, target: t3, unrepresentable: e3?.unrepresentable ?? "throw", override: e3?.override ?? (() => {
      }), io: e3?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: e3?.cycles ?? "ref", reused: e3?.reused ?? "inline", external: e3?.external ?? void 0 };
    }
    function Yl(e3, t3, r3 = { path: [], schemaPath: [] }) {
      var n3;
      const o2 = e3._zod.def, s2 = t3.seen.get(e3);
      if (s2) {
        s2.count++;
        return r3.schemaPath.includes(e3) && (s2.cycle = r3.path), s2.schema;
      }
      const i3 = { schema: {}, count: 1, cycle: void 0, path: r3.path };
      t3.seen.set(e3, i3);
      const a3 = e3._zod.toJSONSchema?.();
      if (a3) i3.schema = a3;
      else {
        const n4 = { ...r3, schemaPath: [...r3.schemaPath, e3], path: r3.path };
        if (e3._zod.processJSONSchema) e3._zod.processJSONSchema(t3, i3.schema, n4);
        else {
          const r4 = i3.schema, s4 = t3.processors[o2.type];
          if (!s4) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o2.type}`);
          s4(e3, t3, r4, n4);
        }
        const s3 = e3._zod.parent;
        s3 && (i3.ref || (i3.ref = s3), Yl(s3, t3, n4), t3.seen.get(s3).isParent = true);
      }
      const c2 = t3.metadataRegistry.get(e3);
      c2 && Object.assign(i3.schema, c2), "input" === t3.io && Ql(e3) && (delete i3.schema.examples, delete i3.schema.default), "input" === t3.io && i3.schema._prefault && ((n3 = i3.schema).default ?? (n3.default = i3.schema._prefault)), delete i3.schema._prefault;
      return t3.seen.get(e3).schema;
    }
    function Gl(e3, t3) {
      const r3 = e3.seen.get(t3);
      if (!r3) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n3 = /* @__PURE__ */ new Map();
      for (const t4 of e3.seen.entries()) {
        const r4 = e3.metadataRegistry.get(t4[0])?.id;
        if (r4) {
          const e4 = n3.get(r4);
          if (e4 && e4 !== t4[0]) throw new Error(`Duplicate schema id "${r4}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
          n3.set(r4, t4[0]);
        }
      }
      const o2 = (t4) => {
        if (t4[1].schema.$ref) return;
        const n4 = t4[1], { ref: o3, defId: s2 } = ((t5) => {
          const n5 = "draft-2020-12" === e3.target ? "$defs" : "definitions";
          if (e3.external) {
            const r4 = e3.external.registry.get(t5[0])?.id, o5 = e3.external.uri ?? ((e4) => e4);
            if (r4) return { ref: o5(r4) };
            const s4 = t5[1].defId ?? t5[1].schema.id ?? "schema" + e3.counter++;
            return t5[1].defId = s4, { defId: s4, ref: `${o5("__shared")}#/${n5}/${s4}` };
          }
          if (t5[1] === r3) return { ref: "#" };
          const o4 = `#/${n5}/`, s3 = t5[1].schema.id ?? "__schema" + e3.counter++;
          return { defId: s3, ref: o4 + s3 };
        })(t4);
        n4.def = { ...n4.schema }, s2 && (n4.defId = s2);
        const i3 = n4.schema;
        for (const e4 in i3) delete i3[e4];
        i3.$ref = o3;
      };
      if ("throw" === e3.cycles) for (const t4 of e3.seen.entries()) {
        const e4 = t4[1];
        if (e4.cycle) throw new Error(`Cycle detected: #/${e4.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
      for (const r4 of e3.seen.entries()) {
        const n4 = r4[1];
        if (t3 === r4[0]) {
          o2(r4);
          continue;
        }
        if (e3.external) {
          const n5 = e3.external.registry.get(r4[0])?.id;
          if (t3 !== r4[0] && n5) {
            o2(r4);
            continue;
          }
        }
        const s2 = e3.metadataRegistry.get(r4[0])?.id;
        s2 ? o2(r4) : (n4.cycle || n4.count > 1 && "ref" === e3.reused) && o2(r4);
      }
    }
    function Xl(e3, t3) {
      const r3 = e3.seen.get(t3);
      if (!r3) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n3 = (t4) => {
        const r4 = e3.seen.get(t4);
        if (null === r4.ref) return;
        const o3 = r4.def ?? r4.schema, s3 = { ...o3 }, i3 = r4.ref;
        if (r4.ref = null, i3) {
          n3(i3);
          const r5 = e3.seen.get(i3), a4 = r5.schema;
          !a4.$ref || "draft-07" !== e3.target && "draft-04" !== e3.target && "openapi-3.0" !== e3.target ? Object.assign(o3, a4) : (o3.allOf = o3.allOf ?? [], o3.allOf.push(a4)), Object.assign(o3, s3);
          if (t4._zod.parent === i3) for (const e4 in o3) "$ref" !== e4 && "allOf" !== e4 && (e4 in s3 || delete o3[e4]);
          if (a4.$ref && r5.def) for (const e4 in o3) "$ref" !== e4 && "allOf" !== e4 && e4 in r5.def && JSON.stringify(o3[e4]) === JSON.stringify(r5.def[e4]) && delete o3[e4];
        }
        const a3 = t4._zod.parent;
        if (a3 && a3 !== i3) {
          n3(a3);
          const t5 = e3.seen.get(a3);
          if (t5?.schema.$ref && (o3.$ref = t5.schema.$ref, t5.def)) for (const e4 in o3) "$ref" !== e4 && "allOf" !== e4 && e4 in t5.def && JSON.stringify(o3[e4]) === JSON.stringify(t5.def[e4]) && delete o3[e4];
        }
        e3.override({ zodSchema: t4, jsonSchema: o3, path: r4.path ?? [] });
      };
      for (const t4 of [...e3.seen.entries()].reverse()) n3(t4[0]);
      const o2 = {};
      if ("draft-2020-12" === e3.target ? o2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e3.target ? o2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e3.target ? o2.$schema = "http://json-schema.org/draft-04/schema#" : e3.target, e3.external?.uri) {
        const r4 = e3.external.registry.get(t3)?.id;
        if (!r4) throw new Error("Schema is missing an `id` property");
        o2.$id = e3.external.uri(r4);
      }
      Object.assign(o2, r3.def ?? r3.schema);
      const s2 = e3.external?.defs ?? {};
      for (const t4 of e3.seen.entries()) {
        const e4 = t4[1];
        e4.def && e4.defId && (s2[e4.defId] = e4.def);
      }
      e3.external || Object.keys(s2).length > 0 && ("draft-2020-12" === e3.target ? o2.$defs = s2 : o2.definitions = s2);
      try {
        const r4 = JSON.parse(JSON.stringify(o2));
        return Object.defineProperty(r4, "~standard", { value: { ...t3["~standard"], jsonSchema: { input: ed(t3, "input", e3.processors), output: ed(t3, "output", e3.processors) } }, enumerable: false, writable: false }), r4;
      } catch (e4) {
        throw new Error("Error converting schema to JSON.");
      }
    }
    function Ql(e3, t3) {
      const r3 = t3 ?? { seen: /* @__PURE__ */ new Set() };
      if (r3.seen.has(e3)) return false;
      r3.seen.add(e3);
      const n3 = e3._zod.def;
      if ("transform" === n3.type) return true;
      if ("array" === n3.type) return Ql(n3.element, r3);
      if ("set" === n3.type) return Ql(n3.valueType, r3);
      if ("lazy" === n3.type) return Ql(n3.getter(), r3);
      if ("promise" === n3.type || "optional" === n3.type || "nonoptional" === n3.type || "nullable" === n3.type || "readonly" === n3.type || "default" === n3.type || "prefault" === n3.type) return Ql(n3.innerType, r3);
      if ("intersection" === n3.type) return Ql(n3.left, r3) || Ql(n3.right, r3);
      if ("record" === n3.type || "map" === n3.type) return Ql(n3.keyType, r3) || Ql(n3.valueType, r3);
      if ("pipe" === n3.type) return Ql(n3.in, r3) || Ql(n3.out, r3);
      if ("object" === n3.type) {
        for (const e4 in n3.shape) if (Ql(n3.shape[e4], r3)) return true;
        return false;
      }
      if ("union" === n3.type) {
        for (const e4 of n3.options) if (Ql(e4, r3)) return true;
        return false;
      }
      if ("tuple" === n3.type) {
        for (const e4 of n3.items) if (Ql(e4, r3)) return true;
        return !(!n3.rest || !Ql(n3.rest, r3));
      }
      return false;
    }
    const ed = (e3, t3, r3 = {}) => (n3) => {
      const { libraryOptions: o2, target: s2 } = n3 ?? {}, i3 = Hl({ ...o2 ?? {}, target: s2, io: t3, processors: r3 });
      return Yl(e3, i3), Gl(i3, e3), Xl(i3, e3);
    }, td = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, rd = (e3, t3, r3, n3) => {
      const o2 = r3;
      o2.type = "string";
      const { minimum: s2, maximum: i3, format: a3, patterns: c2, contentEncoding: u2 } = e3._zod.bag;
      if ("number" == typeof s2 && (o2.minLength = s2), "number" == typeof i3 && (o2.maxLength = i3), a3 && (o2.format = td[a3] ?? a3, "" === o2.format && delete o2.format, "time" === a3 && delete o2.format), u2 && (o2.contentEncoding = u2), c2 && c2.size > 0) {
        const e4 = [...c2];
        1 === e4.length ? o2.pattern = e4[0].source : e4.length > 1 && (o2.allOf = [...e4.map((e5) => ({ ..."draft-07" === t3.target || "draft-04" === t3.target || "openapi-3.0" === t3.target ? { type: "string" } : {}, pattern: e5.source }))]);
      }
    }, nd = (e3, t3, r3, n3) => {
      const o2 = r3, { minimum: s2, maximum: i3, format: a3, multipleOf: c2, exclusiveMaximum: u2, exclusiveMinimum: l2 } = e3._zod.bag;
      "string" == typeof a3 && a3.includes("int") ? o2.type = "integer" : o2.type = "number", "number" == typeof l2 && ("draft-04" === t3.target || "openapi-3.0" === t3.target ? (o2.minimum = l2, o2.exclusiveMinimum = true) : o2.exclusiveMinimum = l2), "number" == typeof s2 && (o2.minimum = s2, "number" == typeof l2 && "draft-04" !== t3.target && (l2 >= s2 ? delete o2.minimum : delete o2.exclusiveMinimum)), "number" == typeof u2 && ("draft-04" === t3.target || "openapi-3.0" === t3.target ? (o2.maximum = u2, o2.exclusiveMaximum = true) : o2.exclusiveMaximum = u2), "number" == typeof i3 && (o2.maximum = i3, "number" == typeof u2 && "draft-04" !== t3.target && (u2 <= i3 ? delete o2.maximum : delete o2.exclusiveMaximum)), "number" == typeof c2 && (o2.multipleOf = c2);
    }, od = (e3, t3, r3, n3) => {
      r3.type = "boolean";
    }, sd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
    }, id = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
    }, ad = (e3, t3, r3, n3) => {
      "openapi-3.0" === t3.target ? (r3.type = "string", r3.nullable = true, r3.enum = [null]) : r3.type = "null";
    }, cd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
    }, ud = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
    }, ld = (e3, t3, r3, n3) => {
      r3.not = {};
    }, dd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
    }, pd = (e3, t3, r3, n3) => {
      const o2 = Cs(e3._zod.def.entries);
      o2.every((e4) => "number" == typeof e4) && (r3.type = "number"), o2.every((e4) => "string" == typeof e4) && (r3.type = "string"), r3.enum = o2;
    }, fd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def, s2 = [];
      for (const e4 of o2.values) if (void 0 === e4) {
        if ("throw" === t3.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else if ("bigint" == typeof e4) {
        if ("throw" === t3.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
        s2.push(Number(e4));
      } else s2.push(e4);
      if (0 === s2.length) ;
      else if (1 === s2.length) {
        const e4 = s2[0];
        r3.type = null === e4 ? "null" : typeof e4, "draft-04" === t3.target || "openapi-3.0" === t3.target ? r3.enum = [e4] : r3.const = e4;
      } else s2.every((e4) => "number" == typeof e4) && (r3.type = "number"), s2.every((e4) => "string" == typeof e4) && (r3.type = "string"), s2.every((e4) => "boolean" == typeof e4) && (r3.type = "boolean"), s2.every((e4) => null === e4) && (r3.type = "null"), r3.enum = s2;
    }, hd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
    }, md = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = e3._zod.pattern;
      if (!s2) throw new Error("Pattern not found in template literal");
      o2.type = "string", o2.pattern = s2.source;
    }, gd = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = { type: "string", format: "binary", contentEncoding: "binary" }, { minimum: i3, maximum: a3, mime: c2 } = e3._zod.bag;
      void 0 !== i3 && (s2.minLength = i3), void 0 !== a3 && (s2.maxLength = a3), c2 ? 1 === c2.length ? (s2.contentMediaType = c2[0], Object.assign(o2, s2)) : (Object.assign(o2, s2), o2.anyOf = c2.map((e4) => ({ contentMediaType: e4 }))) : Object.assign(o2, s2);
    }, yd = (e3, t3, r3, n3) => {
      r3.type = "boolean";
    }, _d = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
    }, vd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
    }, wd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
    }, bd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
    }, Sd = (e3, t3, r3, n3) => {
      if ("throw" === t3.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
    }, kd = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = e3._zod.def, { minimum: i3, maximum: a3 } = e3._zod.bag;
      "number" == typeof i3 && (o2.minItems = i3), "number" == typeof a3 && (o2.maxItems = a3), o2.type = "array", o2.items = Yl(s2.element, t3, { ...n3, path: [...n3.path, "items"] });
    }, Ed = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = e3._zod.def;
      o2.type = "object", o2.properties = {};
      const i3 = s2.shape;
      for (const e4 in i3) o2.properties[e4] = Yl(i3[e4], t3, { ...n3, path: [...n3.path, "properties", e4] });
      const a3 = new Set(Object.keys(i3)), c2 = new Set([...a3].filter((e4) => {
        const r4 = s2.shape[e4]._zod;
        return "input" === t3.io ? void 0 === r4.optin : void 0 === r4.optout;
      }));
      c2.size > 0 && (o2.required = Array.from(c2)), "never" === s2.catchall?._zod.def.type ? o2.additionalProperties = false : s2.catchall ? s2.catchall && (o2.additionalProperties = Yl(s2.catchall, t3, { ...n3, path: [...n3.path, "additionalProperties"] })) : "output" === t3.io && (o2.additionalProperties = false);
    }, xd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def, s2 = false === o2.inclusive, i3 = o2.options.map((e4, r4) => Yl(e4, t3, { ...n3, path: [...n3.path, s2 ? "oneOf" : "anyOf", r4] }));
      s2 ? r3.oneOf = i3 : r3.anyOf = i3;
    }, Td = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def, s2 = Yl(o2.left, t3, { ...n3, path: [...n3.path, "allOf", 0] }), i3 = Yl(o2.right, t3, { ...n3, path: [...n3.path, "allOf", 1] }), a3 = (e4) => "allOf" in e4 && 1 === Object.keys(e4).length, c2 = [...a3(s2) ? s2.allOf : [s2], ...a3(i3) ? i3.allOf : [i3]];
      r3.allOf = c2;
    }, Od = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = e3._zod.def;
      o2.type = "array";
      const i3 = "draft-2020-12" === t3.target ? "prefixItems" : "items", a3 = "draft-2020-12" === t3.target || "openapi-3.0" === t3.target ? "items" : "additionalItems", c2 = s2.items.map((e4, r4) => Yl(e4, t3, { ...n3, path: [...n3.path, i3, r4] })), u2 = s2.rest ? Yl(s2.rest, t3, { ...n3, path: [...n3.path, a3, ..."openapi-3.0" === t3.target ? [s2.items.length] : []] }) : null;
      "draft-2020-12" === t3.target ? (o2.prefixItems = c2, u2 && (o2.items = u2)) : "openapi-3.0" === t3.target ? (o2.items = { anyOf: c2 }, u2 && o2.items.anyOf.push(u2), o2.minItems = c2.length, u2 || (o2.maxItems = c2.length)) : (o2.items = c2, u2 && (o2.additionalItems = u2));
      const { minimum: l2, maximum: d2 } = e3._zod.bag;
      "number" == typeof l2 && (o2.minItems = l2), "number" == typeof d2 && (o2.maxItems = d2);
    }, Pd = (e3, t3, r3, n3) => {
      const o2 = r3, s2 = e3._zod.def;
      o2.type = "object";
      const i3 = s2.keyType, a3 = i3._zod.bag, c2 = a3?.patterns;
      if ("loose" === s2.mode && c2 && c2.size > 0) {
        const e4 = Yl(s2.valueType, t3, { ...n3, path: [...n3.path, "patternProperties", "*"] });
        o2.patternProperties = {};
        for (const t4 of c2) o2.patternProperties[t4.source] = e4;
      } else "draft-07" !== t3.target && "draft-2020-12" !== t3.target || (o2.propertyNames = Yl(s2.keyType, t3, { ...n3, path: [...n3.path, "propertyNames"] })), o2.additionalProperties = Yl(s2.valueType, t3, { ...n3, path: [...n3.path, "additionalProperties"] });
      const u2 = i3._zod.values;
      if (u2) {
        const e4 = [...u2].filter((e5) => "string" == typeof e5 || "number" == typeof e5);
        e4.length > 0 && (o2.required = e4);
      }
    }, Id = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def, s2 = Yl(o2.innerType, t3, n3), i3 = t3.seen.get(e3);
      "openapi-3.0" === t3.target ? (i3.ref = o2.innerType, r3.nullable = true) : r3.anyOf = [s2, { type: "null" }];
    }, Cd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType;
    }, Ad = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType, r3.default = JSON.parse(JSON.stringify(o2.defaultValue));
    }, $d = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType, "input" === t3.io && (r3._prefault = JSON.parse(JSON.stringify(o2.defaultValue)));
    }, Rd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      let s2;
      t3.seen.get(e3).ref = o2.innerType;
      try {
        s2 = o2.catchValue(void 0);
      } catch {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
      }
      r3.default = s2;
    }, Nd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def, s2 = "input" === t3.io ? "transform" === o2.in._zod.def.type ? o2.out : o2.in : o2.out;
      Yl(s2, t3, n3);
      t3.seen.get(e3).ref = s2;
    }, Md = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType, r3.readOnly = true;
    }, Jd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType;
    }, jd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.def;
      Yl(o2.innerType, t3, n3);
      t3.seen.get(e3).ref = o2.innerType;
    }, Dd = (e3, t3, r3, n3) => {
      const o2 = e3._zod.innerType;
      Yl(o2, t3, n3);
      t3.seen.get(e3).ref = o2;
    };
    const Fd = xs("ZodISODateTime", (e3, t3) => {
      bc.init(e3, t3), dp.init(e3, t3);
    });
    function qd(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...Ys(t3) });
      })(Fd, e3);
    }
    const zd = xs("ZodISODate", (e3, t3) => {
      Sc.init(e3, t3), dp.init(e3, t3);
    });
    function Ud(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", format: "date", check: "string_format", ...Ys(t3) });
      })(zd, e3);
    }
    const Bd = xs("ZodISOTime", (e3, t3) => {
      kc.init(e3, t3), dp.init(e3, t3);
    });
    function Ld(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", format: "time", check: "string_format", precision: null, ...Ys(t3) });
      })(Bd, e3);
    }
    const Vd = xs("ZodISODuration", (e3, t3) => {
      Ec.init(e3, t3), dp.init(e3, t3);
    });
    function Kd(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", format: "duration", check: "string_format", ...Ys(t3) });
      })(Vd, e3);
    }
    const Zd = (e3, t3) => {
      ci.init(e3, t3), e3.name = "ZodError", Object.defineProperties(e3, { format: { value: (t4) => (function(e4, t5 = (e5) => e5.message) {
        const r3 = { _errors: [] }, n3 = (e5) => {
          for (const o2 of e5.issues) if ("invalid_union" === o2.code && o2.errors.length) o2.errors.map((e6) => n3({ issues: e6 }));
          else if ("invalid_key" === o2.code) n3({ issues: o2.issues });
          else if ("invalid_element" === o2.code) n3({ issues: o2.issues });
          else if (0 === o2.path.length) r3._errors.push(t5(o2));
          else {
            let e6 = r3, n4 = 0;
            for (; n4 < o2.path.length; ) {
              const r4 = o2.path[n4];
              n4 === o2.path.length - 1 ? (e6[r4] = e6[r4] || { _errors: [] }, e6[r4]._errors.push(t5(o2))) : e6[r4] = e6[r4] || { _errors: [] }, e6 = e6[r4], n4++;
            }
          }
        };
        return n3(e4), r3;
      })(e3, t4) }, flatten: { value: (t4) => (function(e4, t5 = (e5) => e5.message) {
        const r3 = {}, n3 = [];
        for (const o2 of e4.issues) o2.path.length > 0 ? (r3[o2.path[0]] = r3[o2.path[0]] || [], r3[o2.path[0]].push(t5(o2))) : n3.push(t5(o2));
        return { formErrors: n3, fieldErrors: r3 };
      })(e3, t4) }, addIssue: { value: (t4) => {
        e3.issues.push(t4), e3.message = JSON.stringify(e3.issues, $s, 2);
      } }, addIssues: { value: (t4) => {
        e3.issues.push(...t4), e3.message = JSON.stringify(e3.issues, $s, 2);
      } }, isEmpty: { get: () => 0 === e3.issues.length } });
    }, Wd = (xs("ZodError", Zd), xs("ZodError", Zd, { Parent: Error })), Hd = li(Wd), Yd = pi(Wd), Gd = hi(Wd), Xd = gi(Wd), Qd = _i(Wd), ep = vi(Wd), tp = wi(Wd), rp = bi(Wd), np = Si(Wd), op = ki(Wd), sp = Ei(Wd), ip = xi(Wd), ap = xs("ZodType", (e3, t3) => (ac.init(e3, t3), Object.assign(e3["~standard"], { jsonSchema: { input: ed(e3, "input"), output: ed(e3, "output") } }), e3.toJSONSchema = /* @__PURE__ */ ((e4, t4 = {}) => (r3) => {
      const n3 = Hl({ ...r3, processors: t4 });
      return Yl(e4, n3), Gl(n3, e4), Xl(n3, e4);
    })(e3, {}), e3.def = t3, e3.type = t3.type, Object.defineProperty(e3, "_def", { value: t3 }), e3.check = (...r3) => e3.clone(Fs(t3, { checks: [...t3.checks ?? [], ...r3.map((e4) => "function" == typeof e4 ? { _zod: { check: e4, def: { check: "custom" }, onattach: [] } } : e4)] }), { parent: true }), e3.with = e3.check, e3.clone = (t4, r3) => Hs(e3, t4, r3), e3.brand = () => e3, e3.register = (t4, r3) => (t4.add(e3, r3), e3), e3.parse = (t4, r3) => Hd(e3, t4, r3, { callee: e3.parse }), e3.safeParse = (t4, r3) => Gd(e3, t4, r3), e3.parseAsync = async (t4, r3) => Yd(e3, t4, r3, { callee: e3.parseAsync }), e3.safeParseAsync = async (t4, r3) => Xd(e3, t4, r3), e3.spa = e3.safeParseAsync, e3.encode = (t4, r3) => Qd(e3, t4, r3), e3.decode = (t4, r3) => ep(e3, t4, r3), e3.encodeAsync = async (t4, r3) => tp(e3, t4, r3), e3.decodeAsync = async (t4, r3) => rp(e3, t4, r3), e3.safeEncode = (t4, r3) => np(e3, t4, r3), e3.safeDecode = (t4, r3) => op(e3, t4, r3), e3.safeEncodeAsync = async (t4, r3) => sp(e3, t4, r3), e3.safeDecodeAsync = async (t4, r3) => ip(e3, t4, r3), e3.refine = (t4, r3) => e3.check(tm(t4, r3)), e3.superRefine = (t4) => e3.check(rm(t4)), e3.overwrite = (t4) => e3.check(zl(t4)), e3.optional = () => wh(e3), e3.exactOptional = () => Sh(e3), e3.nullable = () => Eh(e3), e3.nullish = () => wh(Eh(e3)), e3.nonoptional = (t4) => Ah(e3, t4), e3.array = () => qf(e3), e3.or = (t4) => Zf([e3, t4]), e3.and = (t4) => Qf(e3, t4), e3.transform = (t4) => Fh(e3, _h(t4)), e3.default = (t4) => Oh(e3, t4), e3.prefault = (t4) => Ih(e3, t4), e3.catch = (t4) => Mh(e3, t4), e3.pipe = (t4) => Fh(e3, t4), e3.readonly = () => Bh(e3), e3.describe = (t4) => {
      const r3 = e3.clone();
      return Hu.add(r3, { description: t4 }), r3;
    }, Object.defineProperty(e3, "description", { get: () => Hu.get(e3)?.description, configurable: true }), e3.meta = (...t4) => {
      if (0 === t4.length) return Hu.get(e3);
      const r3 = e3.clone();
      return Hu.add(r3, t4[0]), r3;
    }, e3.isOptional = () => e3.safeParse(void 0).success, e3.isNullable = () => e3.safeParse(null).success, e3.apply = (t4) => t4(e3), e3)), cp = xs("_ZodString", (e3, t3) => {
      cc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r4, n3) => rd(e3, t4, r4);
      const r3 = e3._zod.bag;
      e3.format = r3.format ?? null, e3.minLength = r3.minimum ?? null, e3.maxLength = r3.maximum ?? null, e3.regex = (...t4) => e3.check(Rl(...t4)), e3.includes = (...t4) => e3.check(Jl(...t4)), e3.startsWith = (...t4) => e3.check(jl(...t4)), e3.endsWith = (...t4) => e3.check(Dl(...t4)), e3.min = (...t4) => e3.check(Al(...t4)), e3.max = (...t4) => e3.check(Cl(...t4)), e3.length = (...t4) => e3.check($l(...t4)), e3.nonempty = (...t4) => e3.check(Al(1, ...t4)), e3.lowercase = (t4) => e3.check(Nl(t4)), e3.uppercase = (t4) => e3.check(Ml(t4)), e3.trim = () => e3.check(Bl()), e3.normalize = (...t4) => e3.check(Ul(...t4)), e3.toLowerCase = () => e3.check(Ll()), e3.toUpperCase = () => e3.check(Vl()), e3.slugify = () => e3.check(Kl());
    }), up = xs("ZodString", (e3, t3) => {
      cc.init(e3, t3), cp.init(e3, t3), e3.email = (t4) => e3.check(Yu(pp, t4)), e3.url = (t4) => e3.check(rl(bp, t4)), e3.jwt = (t4) => e3.check(yl(ef, t4)), e3.emoji = (t4) => e3.check(nl(Ep, t4)), e3.guid = (t4) => e3.check(Gu(hp, t4)), e3.uuid = (t4) => e3.check(Xu(gp, t4)), e3.uuidv4 = (t4) => e3.check(Qu(gp, t4)), e3.uuidv6 = (t4) => e3.check(el(gp, t4)), e3.uuidv7 = (t4) => e3.check(tl(gp, t4)), e3.nanoid = (t4) => e3.check(ol(Tp, t4)), e3.guid = (t4) => e3.check(Gu(hp, t4)), e3.cuid = (t4) => e3.check(sl(Pp, t4)), e3.cuid2 = (t4) => e3.check(il(Cp, t4)), e3.ulid = (t4) => e3.check(al($p, t4)), e3.base64 = (t4) => e3.check(hl(Wp, t4)), e3.base64url = (t4) => e3.check(ml(Yp, t4)), e3.xid = (t4) => e3.check(cl(Np, t4)), e3.ksuid = (t4) => e3.check(ul(Jp, t4)), e3.ipv4 = (t4) => e3.check(ll(Dp, t4)), e3.ipv6 = (t4) => e3.check(dl(Up, t4)), e3.cidrv4 = (t4) => e3.check(pl(Lp, t4)), e3.cidrv6 = (t4) => e3.check(fl(Kp, t4)), e3.e164 = (t4) => e3.check(gl(Xp, t4)), e3.datetime = (t4) => e3.check(qd(t4)), e3.date = (t4) => e3.check(Ud(t4)), e3.time = (t4) => e3.check(Ld(t4)), e3.duration = (t4) => e3.check(Kd(t4));
    });
    function lp(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", ...Ys(t3) });
      })(up, e3);
    }
    const dp = xs("ZodStringFormat", (e3, t3) => {
      uc.init(e3, t3), cp.init(e3, t3);
    }), pp = xs("ZodEmail", (e3, t3) => {
      pc.init(e3, t3), dp.init(e3, t3);
    });
    function fp(e3) {
      return Yu(pp, e3);
    }
    const hp = xs("ZodGUID", (e3, t3) => {
      lc.init(e3, t3), dp.init(e3, t3);
    });
    function mp(e3) {
      return Gu(hp, e3);
    }
    const gp = xs("ZodUUID", (e3, t3) => {
      dc.init(e3, t3), dp.init(e3, t3);
    });
    function yp(e3) {
      return Xu(gp, e3);
    }
    function _p(e3) {
      return Qu(gp, e3);
    }
    function vp(e3) {
      return el(gp, e3);
    }
    function wp(e3) {
      return tl(gp, e3);
    }
    const bp = xs("ZodURL", (e3, t3) => {
      fc.init(e3, t3), dp.init(e3, t3);
    });
    function Sp(e3) {
      return rl(bp, e3);
    }
    function kp(e3) {
      return rl(bp, { protocol: /^https?$/, hostname: ta, ...Ys(e3) });
    }
    const Ep = xs("ZodEmoji", (e3, t3) => {
      hc.init(e3, t3), dp.init(e3, t3);
    });
    function xp(e3) {
      return nl(Ep, e3);
    }
    const Tp = xs("ZodNanoID", (e3, t3) => {
      mc.init(e3, t3), dp.init(e3, t3);
    });
    function Op(e3) {
      return ol(Tp, e3);
    }
    const Pp = xs("ZodCUID", (e3, t3) => {
      gc.init(e3, t3), dp.init(e3, t3);
    });
    function Ip(e3) {
      return sl(Pp, e3);
    }
    const Cp = xs("ZodCUID2", (e3, t3) => {
      yc.init(e3, t3), dp.init(e3, t3);
    });
    function Ap(e3) {
      return il(Cp, e3);
    }
    const $p = xs("ZodULID", (e3, t3) => {
      _c.init(e3, t3), dp.init(e3, t3);
    });
    function Rp(e3) {
      return al($p, e3);
    }
    const Np = xs("ZodXID", (e3, t3) => {
      vc.init(e3, t3), dp.init(e3, t3);
    });
    function Mp(e3) {
      return cl(Np, e3);
    }
    const Jp = xs("ZodKSUID", (e3, t3) => {
      wc.init(e3, t3), dp.init(e3, t3);
    });
    function jp(e3) {
      return ul(Jp, e3);
    }
    const Dp = xs("ZodIPv4", (e3, t3) => {
      xc.init(e3, t3), dp.init(e3, t3);
    });
    function Fp(e3) {
      return ll(Dp, e3);
    }
    const qp = xs("ZodMAC", (e3, t3) => {
      Oc.init(e3, t3), dp.init(e3, t3);
    });
    function zp(e3) {
      return (function(e4, t3) {
        return new e4({ type: "string", format: "mac", check: "string_format", abort: false, ...Ys(t3) });
      })(qp, e3);
    }
    const Up = xs("ZodIPv6", (e3, t3) => {
      Tc.init(e3, t3), dp.init(e3, t3);
    });
    function Bp(e3) {
      return dl(Up, e3);
    }
    const Lp = xs("ZodCIDRv4", (e3, t3) => {
      Pc.init(e3, t3), dp.init(e3, t3);
    });
    function Vp(e3) {
      return pl(Lp, e3);
    }
    const Kp = xs("ZodCIDRv6", (e3, t3) => {
      Ic.init(e3, t3), dp.init(e3, t3);
    });
    function Zp(e3) {
      return fl(Kp, e3);
    }
    const Wp = xs("ZodBase64", (e3, t3) => {
      Ac.init(e3, t3), dp.init(e3, t3);
    });
    function Hp(e3) {
      return hl(Wp, e3);
    }
    const Yp = xs("ZodBase64URL", (e3, t3) => {
      $c.init(e3, t3), dp.init(e3, t3);
    });
    function Gp(e3) {
      return ml(Yp, e3);
    }
    const Xp = xs("ZodE164", (e3, t3) => {
      Rc.init(e3, t3), dp.init(e3, t3);
    });
    function Qp(e3) {
      return gl(Xp, e3);
    }
    const ef = xs("ZodJWT", (e3, t3) => {
      Nc.init(e3, t3), dp.init(e3, t3);
    });
    function tf(e3) {
      return yl(ef, e3);
    }
    const rf = xs("ZodCustomStringFormat", (e3, t3) => {
      Mc.init(e3, t3), dp.init(e3, t3);
    });
    function nf(e3, t3, r3 = {}) {
      return Wl(rf, e3, t3, r3);
    }
    function of(e3) {
      return Wl(rf, "hostname", ea, e3);
    }
    function sf(e3) {
      return Wl(rf, "hex", ya, e3);
    }
    function af(t3, r3) {
      const n3 = `${t3}_${r3?.enc ?? "hex"}`, o2 = e2[n3];
      if (!o2) throw new Error(`Unrecognized hash format: ${n3}`);
      return Wl(rf, n3, o2, r3);
    }
    const cf = xs("ZodNumber", (e3, t3) => {
      Jc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r4, n3) => nd(e3, t4, r4), e3.gt = (t4, r4) => e3.check(wl(t4, r4)), e3.gte = (t4, r4) => e3.check(bl(t4, r4)), e3.min = (t4, r4) => e3.check(bl(t4, r4)), e3.lt = (t4, r4) => e3.check(_l(t4, r4)), e3.lte = (t4, r4) => e3.check(vl(t4, r4)), e3.max = (t4, r4) => e3.check(vl(t4, r4)), e3.int = (t4) => e3.check(df(t4)), e3.safe = (t4) => e3.check(df(t4)), e3.positive = (t4) => e3.check(wl(0, t4)), e3.nonnegative = (t4) => e3.check(bl(0, t4)), e3.negative = (t4) => e3.check(_l(0, t4)), e3.nonpositive = (t4) => e3.check(vl(0, t4)), e3.multipleOf = (t4, r4) => e3.check(Tl(t4, r4)), e3.step = (t4, r4) => e3.check(Tl(t4, r4)), e3.finite = () => e3;
      const r3 = e3._zod.bag;
      e3.minValue = Math.max(r3.minimum ?? Number.NEGATIVE_INFINITY, r3.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e3.maxValue = Math.min(r3.maximum ?? Number.POSITIVE_INFINITY, r3.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e3.isInt = (r3.format ?? "").includes("int") || Number.isSafeInteger(r3.multipleOf ?? 0.5), e3.isFinite = true, e3.format = r3.format ?? null;
    });
    function uf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", checks: [], ...Ys(t3) });
      })(cf, e3);
    }
    const lf = xs("ZodNumberFormat", (e3, t3) => {
      jc.init(e3, t3), cf.init(e3, t3);
    });
    function df(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", check: "number_format", abort: false, format: "safeint", ...Ys(t3) });
      })(lf, e3);
    }
    function pf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", check: "number_format", abort: false, format: "float32", ...Ys(t3) });
      })(lf, e3);
    }
    function ff(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", check: "number_format", abort: false, format: "float64", ...Ys(t3) });
      })(lf, e3);
    }
    function hf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", check: "number_format", abort: false, format: "int32", ...Ys(t3) });
      })(lf, e3);
    }
    function mf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", check: "number_format", abort: false, format: "uint32", ...Ys(t3) });
      })(lf, e3);
    }
    const gf = xs("ZodBoolean", (e3, t3) => {
      Dc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => od(0, 0, t4);
    });
    function yf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "boolean", ...Ys(t3) });
      })(gf, e3);
    }
    const _f = xs("ZodBigInt", (e3, t3) => {
      Fc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r4) => sd(0, e4), e3.gte = (t4, r4) => e3.check(bl(t4, r4)), e3.min = (t4, r4) => e3.check(bl(t4, r4)), e3.gt = (t4, r4) => e3.check(wl(t4, r4)), e3.gte = (t4, r4) => e3.check(bl(t4, r4)), e3.min = (t4, r4) => e3.check(bl(t4, r4)), e3.lt = (t4, r4) => e3.check(_l(t4, r4)), e3.lte = (t4, r4) => e3.check(vl(t4, r4)), e3.max = (t4, r4) => e3.check(vl(t4, r4)), e3.positive = (t4) => e3.check(wl(BigInt(0), t4)), e3.negative = (t4) => e3.check(_l(BigInt(0), t4)), e3.nonpositive = (t4) => e3.check(vl(BigInt(0), t4)), e3.nonnegative = (t4) => e3.check(bl(BigInt(0), t4)), e3.multipleOf = (t4, r4) => e3.check(Tl(t4, r4));
      const r3 = e3._zod.bag;
      e3.minValue = r3.minimum ?? null, e3.maxValue = r3.maximum ?? null, e3.format = r3.format ?? null;
    });
    function vf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "bigint", ...Ys(t3) });
      })(_f, e3);
    }
    const wf = xs("ZodBigIntFormat", (e3, t3) => {
      qc.init(e3, t3), _f.init(e3, t3);
    });
    function bf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "bigint", check: "bigint_format", abort: false, format: "int64", ...Ys(t3) });
      })(wf, e3);
    }
    function Sf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "bigint", check: "bigint_format", abort: false, format: "uint64", ...Ys(t3) });
      })(wf, e3);
    }
    const kf = xs("ZodSymbol", (e3, t3) => {
      zc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => id(0, e4);
    });
    function Ef(e3) {
      return (function(e4, t3) {
        return new e4({ type: "symbol", ...Ys(t3) });
      })(kf, e3);
    }
    const xf = xs("ZodUndefined", (e3, t3) => {
      Uc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => cd(0, e4);
    });
    function Tf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "undefined", ...Ys(t3) });
      })(xf, e3);
    }
    const Of = xs("ZodNull", (e3, t3) => {
      Bc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => ad(0, e4, t4);
    });
    function Pf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "null", ...Ys(t3) });
      })(Of, e3);
    }
    const If = xs("ZodAny", (e3, t3) => {
      Lc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => {
      };
    });
    function Cf() {
      return (function(e3) {
        return new e3({ type: "any" });
      })(If);
    }
    const Af = xs("ZodUnknown", (e3, t3) => {
      Vc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => {
      };
    });
    function $f() {
      return (function(e3) {
        return new e3({ type: "unknown" });
      })(Af);
    }
    const Rf = xs("ZodNever", (e3, t3) => {
      Kc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => ld(0, 0, t4);
    });
    function Nf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "never", ...Ys(t3) });
      })(Rf, e3);
    }
    const Mf = xs("ZodVoid", (e3, t3) => {
      Zc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => ud(0, e4);
    });
    function Jf(e3) {
      return (function(e4, t3) {
        return new e4({ type: "void", ...Ys(t3) });
      })(Mf, e3);
    }
    const jf = xs("ZodDate", (e3, t3) => {
      Wc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r4) => dd(0, e4), e3.min = (t4, r4) => e3.check(bl(t4, r4)), e3.max = (t4, r4) => e3.check(vl(t4, r4));
      const r3 = e3._zod.bag;
      e3.minDate = r3.minimum ? new Date(r3.minimum) : null, e3.maxDate = r3.maximum ? new Date(r3.maximum) : null;
    });
    function Df(e3) {
      return (function(e4, t3) {
        return new e4({ type: "date", ...Ys(t3) });
      })(jf, e3);
    }
    const Ff = xs("ZodArray", (e3, t3) => {
      Yc.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => kd(e3, t4, r3, n3), e3.element = t3.element, e3.min = (t4, r3) => e3.check(Al(t4, r3)), e3.nonempty = (t4) => e3.check(Al(1, t4)), e3.max = (t4, r3) => e3.check(Cl(t4, r3)), e3.length = (t4, r3) => e3.check($l(t4, r3)), e3.unwrap = () => e3.element;
    });
    function qf(e3, t3) {
      return (function(e4, t4, r3) {
        return new e4({ type: "array", element: t4, ...Ys(r3) });
      })(Ff, e3, t3);
    }
    function zf(e3) {
      const t3 = e3._zod.def.shape;
      return dh(Object.keys(t3));
    }
    const Uf = xs("ZodObject", (e3, t3) => {
      tu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Ed(e3, t4, r3, n3), js(e3, "shape", () => t3.shape), e3.keyof = () => dh(Object.keys(e3._zod.def.shape)), e3.catchall = (t4) => e3.clone({ ...e3._zod.def, catchall: t4 }), e3.passthrough = () => e3.clone({ ...e3._zod.def, catchall: $f() }), e3.loose = () => e3.clone({ ...e3._zod.def, catchall: $f() }), e3.strict = () => e3.clone({ ...e3._zod.def, catchall: Nf() }), e3.strip = () => e3.clone({ ...e3._zod.def, catchall: void 0 }), e3.extend = (t4) => (function(e4, t5) {
        if (!Ls(t5)) throw new Error("Invalid input to extend: expected a plain object");
        const r3 = e4._zod.def.checks;
        if (r3 && r3.length > 0) {
          const r4 = e4._zod.def.shape;
          for (const e5 in t5) if (void 0 !== Object.getOwnPropertyDescriptor(r4, e5)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
        }
        const n3 = Fs(e4._zod.def, { get shape() {
          const r4 = { ...e4._zod.def.shape, ...t5 };
          return Ds(this, "shape", r4), r4;
        } });
        return Hs(e4, n3);
      })(e3, t4), e3.safeExtend = (t4) => (function(e4, t5) {
        if (!Ls(t5)) throw new Error("Invalid input to safeExtend: expected a plain object");
        const r3 = Fs(e4._zod.def, { get shape() {
          const r4 = { ...e4._zod.def.shape, ...t5 };
          return Ds(this, "shape", r4), r4;
        } });
        return Hs(e4, r3);
      })(e3, t4), e3.merge = (t4) => (function(e4, t5) {
        const r3 = Fs(e4._zod.def, { get shape() {
          const r4 = { ...e4._zod.def.shape, ...t5._zod.def.shape };
          return Ds(this, "shape", r4), r4;
        }, get catchall() {
          return t5._zod.def.catchall;
        }, checks: [] });
        return Hs(e4, r3);
      })(e3, t4), e3.pick = (t4) => (function(e4, t5) {
        const r3 = e4._zod.def, n3 = r3.checks;
        if (n3 && n3.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
        return Hs(e4, Fs(e4._zod.def, { get shape() {
          const e5 = {};
          for (const n4 in t5) {
            if (!(n4 in r3.shape)) throw new Error(`Unrecognized key: "${n4}"`);
            t5[n4] && (e5[n4] = r3.shape[n4]);
          }
          return Ds(this, "shape", e5), e5;
        }, checks: [] }));
      })(e3, t4), e3.omit = (t4) => (function(e4, t5) {
        const r3 = e4._zod.def, n3 = r3.checks;
        if (n3 && n3.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
        const o2 = Fs(e4._zod.def, { get shape() {
          const n4 = { ...e4._zod.def.shape };
          for (const e5 in t5) {
            if (!(e5 in r3.shape)) throw new Error(`Unrecognized key: "${e5}"`);
            t5[e5] && delete n4[e5];
          }
          return Ds(this, "shape", n4), n4;
        }, checks: [] });
        return Hs(e4, o2);
      })(e3, t4), e3.partial = (...t4) => (function(e4, t5, r3) {
        const n3 = t5._zod.def.checks;
        if (n3 && n3.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
        const o2 = Fs(t5._zod.def, { get shape() {
          const n4 = t5._zod.def.shape, o3 = { ...n4 };
          if (r3) for (const t6 in r3) {
            if (!(t6 in n4)) throw new Error(`Unrecognized key: "${t6}"`);
            r3[t6] && (o3[t6] = e4 ? new e4({ type: "optional", innerType: n4[t6] }) : n4[t6]);
          }
          else for (const t6 in n4) o3[t6] = e4 ? new e4({ type: "optional", innerType: n4[t6] }) : n4[t6];
          return Ds(this, "shape", o3), o3;
        }, checks: [] });
        return Hs(t5, o2);
      })(vh, e3, t4[0]), e3.required = (...t4) => (function(e4, t5, r3) {
        const n3 = Fs(t5._zod.def, { get shape() {
          const n4 = t5._zod.def.shape, o2 = { ...n4 };
          if (r3) for (const t6 in r3) {
            if (!(t6 in o2)) throw new Error(`Unrecognized key: "${t6}"`);
            r3[t6] && (o2[t6] = new e4({ type: "nonoptional", innerType: n4[t6] }));
          }
          else for (const t6 in n4) o2[t6] = new e4({ type: "nonoptional", innerType: n4[t6] });
          return Ds(this, "shape", o2), o2;
        } });
        return Hs(t5, n3);
      })(Ch, e3, t4[0]);
    });
    function Bf(e3, t3) {
      const r3 = { type: "object", shape: e3 ?? {}, ...Ys(t3) };
      return new Uf(r3);
    }
    function Lf(e3, t3) {
      return new Uf({ type: "object", shape: e3, catchall: Nf(), ...Ys(t3) });
    }
    function Vf(e3, t3) {
      return new Uf({ type: "object", shape: e3, catchall: $f(), ...Ys(t3) });
    }
    const Kf = xs("ZodUnion", (e3, t3) => {
      nu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => xd(e3, t4, r3, n3), e3.options = t3.options;
    });
    function Zf(e3, t3) {
      return new Kf({ type: "union", options: e3, ...Ys(t3) });
    }
    const Wf = xs("ZodXor", (e3, t3) => {
      Kf.init(e3, t3), su.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => xd(e3, t4, r3, n3), e3.options = t3.options;
    });
    function Hf(e3, t3) {
      return new Wf({ type: "union", options: e3, inclusive: false, ...Ys(t3) });
    }
    const Yf = xs("ZodDiscriminatedUnion", (e3, t3) => {
      Kf.init(e3, t3), iu.init(e3, t3);
    });
    function Gf(e3, t3, r3) {
      return new Yf({ type: "union", options: t3, discriminator: e3, ...Ys(r3) });
    }
    const Xf = xs("ZodIntersection", (e3, t3) => {
      au.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Td(e3, t4, r3, n3);
    });
    function Qf(e3, t3) {
      return new Xf({ type: "intersection", left: e3, right: t3 });
    }
    const eh = xs("ZodTuple", (e3, t3) => {
      lu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Od(e3, t4, r3, n3), e3.rest = (t4) => e3.clone({ ...e3._zod.def, rest: t4 });
    });
    function th(e3, t3, r3) {
      const n3 = t3 instanceof ac;
      return new eh({ type: "tuple", items: e3, rest: n3 ? t3 : null, ...Ys(n3 ? r3 : t3) });
    }
    const rh = xs("ZodRecord", (e3, t3) => {
      pu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Pd(e3, t4, r3, n3), e3.keyType = t3.keyType, e3.valueType = t3.valueType;
    });
    function nh(e3, t3, r3) {
      return new rh({ type: "record", keyType: e3, valueType: t3, ...Ys(r3) });
    }
    function oh(e3, t3, r3) {
      const n3 = Hs(e3);
      return n3._zod.values = void 0, new rh({ type: "record", keyType: n3, valueType: t3, ...Ys(r3) });
    }
    function sh(e3, t3, r3) {
      return new rh({ type: "record", keyType: e3, valueType: t3, mode: "loose", ...Ys(r3) });
    }
    const ih = xs("ZodMap", (e3, t3) => {
      fu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => bd(0, e4), e3.keyType = t3.keyType, e3.valueType = t3.valueType, e3.min = (...t4) => e3.check(Pl(...t4)), e3.nonempty = (t4) => e3.check(Pl(1, t4)), e3.max = (...t4) => e3.check(Ol(...t4)), e3.size = (...t4) => e3.check(Il(...t4));
    });
    function ah(e3, t3, r3) {
      return new ih({ type: "map", keyType: e3, valueType: t3, ...Ys(r3) });
    }
    const ch = xs("ZodSet", (e3, t3) => {
      mu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => Sd(0, e4), e3.min = (...t4) => e3.check(Pl(...t4)), e3.nonempty = (t4) => e3.check(Pl(1, t4)), e3.max = (...t4) => e3.check(Ol(...t4)), e3.size = (...t4) => e3.check(Il(...t4));
    });
    function uh(e3, t3) {
      return new ch({ type: "set", valueType: e3, ...Ys(t3) });
    }
    const lh = xs("ZodEnum", (e3, t3) => {
      yu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r4, n3) => pd(e3, 0, r4), e3.enum = t3.entries, e3.options = Object.values(t3.entries);
      const r3 = new Set(Object.keys(t3.entries));
      e3.extract = (e4, n3) => {
        const o2 = {};
        for (const n4 of e4) {
          if (!r3.has(n4)) throw new Error(`Key ${n4} not found in enum`);
          o2[n4] = t3.entries[n4];
        }
        return new lh({ ...t3, checks: [], ...Ys(n3), entries: o2 });
      }, e3.exclude = (e4, n3) => {
        const o2 = { ...t3.entries };
        for (const t4 of e4) {
          if (!r3.has(t4)) throw new Error(`Key ${t4} not found in enum`);
          delete o2[t4];
        }
        return new lh({ ...t3, checks: [], ...Ys(n3), entries: o2 });
      };
    });
    function dh(e3, t3) {
      const r3 = Array.isArray(e3) ? Object.fromEntries(e3.map((e4) => [e4, e4])) : e3;
      return new lh({ type: "enum", entries: r3, ...Ys(t3) });
    }
    function ph(e3, t3) {
      return new lh({ type: "enum", entries: e3, ...Ys(t3) });
    }
    const fh = xs("ZodLiteral", (e3, t3) => {
      _u.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => fd(e3, t4, r3), e3.values = new Set(t3.values), Object.defineProperty(e3, "value", { get() {
        if (t3.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t3.values[0];
      } });
    });
    function hh(e3, t3) {
      return new fh({ type: "literal", values: Array.isArray(e3) ? e3 : [e3], ...Ys(t3) });
    }
    const mh = xs("ZodFile", (e3, t3) => {
      vu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => gd(e3, 0, r3), e3.min = (t4, r3) => e3.check(Pl(t4, r3)), e3.max = (t4, r3) => e3.check(Ol(t4, r3)), e3.mime = (t4, r3) => e3.check(ql(Array.isArray(t4) ? t4 : [t4], r3));
    });
    function gh(e3) {
      return (function(e4, t3) {
        return new e4({ type: "file", ...Ys(t3) });
      })(mh, e3);
    }
    const yh = xs("ZodTransform", (e3, t3) => {
      wu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => wd(0, e4), e3._zod.parse = (r3, n3) => {
        if ("backward" === n3.direction) throw new Os(e3.constructor.name);
        r3.addIssue = (n4) => {
          if ("string" == typeof n4) r3.issues.push(ii(n4, r3.value, t3));
          else {
            const t4 = n4;
            t4.fatal && (t4.continue = false), t4.code ?? (t4.code = "custom"), t4.input ?? (t4.input = r3.value), t4.inst ?? (t4.inst = e3), r3.issues.push(ii(t4));
          }
        };
        const o2 = t3.transform(r3.value, r3);
        return o2 instanceof Promise ? o2.then((e4) => (r3.value = e4, r3)) : (r3.value = o2, r3);
      };
    });
    function _h(e3) {
      return new yh({ type: "transform", transform: e3 });
    }
    const vh = xs("ZodOptional", (e3, t3) => {
      Su.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => jd(e3, t4, 0, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function wh(e3) {
      return new vh({ type: "optional", innerType: e3 });
    }
    const bh = xs("ZodExactOptional", (e3, t3) => {
      ku.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => jd(e3, t4, 0, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Sh(e3) {
      return new bh({ type: "optional", innerType: e3 });
    }
    const kh = xs("ZodNullable", (e3, t3) => {
      Eu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Id(e3, t4, r3, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Eh(e3) {
      return new kh({ type: "nullable", innerType: e3 });
    }
    function xh(e3) {
      return wh(Eh(e3));
    }
    const Th = xs("ZodDefault", (e3, t3) => {
      xu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Ad(e3, t4, r3, n3), e3.unwrap = () => e3._zod.def.innerType, e3.removeDefault = e3.unwrap;
    });
    function Oh(e3, t3) {
      return new Th({ type: "default", innerType: e3, get defaultValue() {
        return "function" == typeof t3 ? t3() : Vs(t3);
      } });
    }
    const Ph = xs("ZodPrefault", (e3, t3) => {
      Ou.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => $d(e3, t4, r3, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Ih(e3, t3) {
      return new Ph({ type: "prefault", innerType: e3, get defaultValue() {
        return "function" == typeof t3 ? t3() : Vs(t3);
      } });
    }
    const Ch = xs("ZodNonOptional", (e3, t3) => {
      Pu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Cd(e3, t4, 0, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Ah(e3, t3) {
      return new Ch({ type: "nonoptional", innerType: e3, ...Ys(t3) });
    }
    const $h = xs("ZodSuccess", (e3, t3) => {
      Cu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => yd(0, 0, t4), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Rh(e3) {
      return new $h({ type: "success", innerType: e3 });
    }
    const Nh = xs("ZodCatch", (e3, t3) => {
      Au.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Rd(e3, t4, r3, n3), e3.unwrap = () => e3._zod.def.innerType, e3.removeCatch = e3.unwrap;
    });
    function Mh(e3, t3) {
      return new Nh({ type: "catch", innerType: e3, catchValue: "function" == typeof t3 ? t3 : () => t3 });
    }
    const Jh = xs("ZodNaN", (e3, t3) => {
      $u.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => hd(0, e4);
    });
    function jh(e3) {
      return (function(e4, t3) {
        return new e4({ type: "nan", ...Ys(t3) });
      })(Jh, e3);
    }
    const Dh = xs("ZodPipe", (e3, t3) => {
      Ru.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Nd(e3, t4, 0, n3), e3.in = t3.in, e3.out = t3.out;
    });
    function Fh(e3, t3) {
      return new Dh({ type: "pipe", in: e3, out: t3 });
    }
    const qh = xs("ZodCodec", (e3, t3) => {
      Dh.init(e3, t3), Mu.init(e3, t3);
    });
    function zh(e3, t3, r3) {
      return new qh({ type: "pipe", in: e3, out: t3, transform: r3.decode, reverseTransform: r3.encode });
    }
    const Uh = xs("ZodReadonly", (e3, t3) => {
      Du.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Md(e3, t4, r3, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Bh(e3) {
      return new Uh({ type: "readonly", innerType: e3 });
    }
    const Lh = xs("ZodTemplateLiteral", (e3, t3) => {
      qu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => md(e3, 0, r3);
    });
    function Vh(e3, t3) {
      return new Lh({ type: "template_literal", parts: e3, ...Ys(t3) });
    }
    const Kh = xs("ZodLazy", (e3, t3) => {
      Bu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Dd(e3, t4, 0, n3), e3.unwrap = () => e3._zod.def.getter();
    });
    function Zh(e3) {
      return new Kh({ type: "lazy", getter: e3 });
    }
    const Wh = xs("ZodPromise", (e3, t3) => {
      Uu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (t4, r3, n3) => Jd(e3, t4, 0, n3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Hh(e3) {
      return new Wh({ type: "promise", innerType: e3 });
    }
    const Yh = xs("ZodFunction", (e3, t3) => {
      zu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => vd(0, e4);
    });
    function Gh(e3) {
      return new Yh({ type: "function", input: Array.isArray(e3?.input) ? th(e3?.input) : e3?.input ?? qf($f()), output: e3?.output ?? $f() });
    }
    const Xh = xs("ZodCustom", (e3, t3) => {
      Lu.init(e3, t3), ap.init(e3, t3), e3._zod.processJSONSchema = (e4, t4, r3) => _d(0, e4);
    });
    function Qh(e3) {
      const t3 = new Ma({ check: "custom" });
      return t3._zod.check = e3, t3;
    }
    function em(e3, t3) {
      return (function(e4, t4, r3) {
        const n3 = Ys(r3);
        return n3.abort ?? (n3.abort = true), new e4({ type: "custom", check: "custom", fn: t4, ...n3 });
      })(Xh, e3 ?? (() => true), t3);
    }
    function tm(e3, t3 = {}) {
      return (function(e4, t4, r3) {
        return new e4({ type: "custom", check: "custom", fn: t4, ...Ys(r3) });
      })(Xh, e3, t3);
    }
    function rm(e3) {
      return Zl(e3);
    }
    const nm = function(e3) {
      const t3 = new Ma({ check: "describe" });
      return t3._zod.onattach = [(t4) => {
        const r3 = Hu.get(t4) ?? {};
        Hu.add(t4, { ...r3, description: e3 });
      }], t3._zod.check = () => {
      }, t3;
    }, om = function(e3) {
      const t3 = new Ma({ check: "meta" });
      return t3._zod.onattach = [(t4) => {
        const r3 = Hu.get(t4) ?? {};
        Hu.add(t4, { ...r3, ...e3 });
      }], t3._zod.check = () => {
      }, t3;
    };
    function sm(e3, t3 = {}) {
      const r3 = new Xh({ type: "custom", check: "custom", fn: (t4) => t4 instanceof e3, abort: true, ...Ys(t3) });
      return r3._zod.bag.Class = e3, r3._zod.check = (t4) => {
        t4.value instanceof e3 || t4.issues.push({ code: "invalid_type", expected: e3.name, input: t4.value, inst: r3, path: [...r3._zod.def.path ?? []] });
      }, r3;
    }
    const im = (...e3) => (function(e4, t3) {
      const r3 = Ys(t3);
      let n3 = r3.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], o2 = r3.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== r3.case && (n3 = n3.map((e5) => "string" == typeof e5 ? e5.toLowerCase() : e5), o2 = o2.map((e5) => "string" == typeof e5 ? e5.toLowerCase() : e5));
      const s2 = new Set(n3), i3 = new Set(o2), a3 = e4.Codec ?? Mu, c2 = e4.Boolean ?? Dc, u2 = new a3({ type: "pipe", in: new (e4.String ?? cc)({ type: "string", error: r3.error }), out: new c2({ type: "boolean", error: r3.error }), transform: (e5, t4) => {
        let n4 = e5;
        return "sensitive" !== r3.case && (n4 = n4.toLowerCase()), !!s2.has(n4) || !i3.has(n4) && (t4.issues.push({ code: "invalid_value", expected: "stringbool", values: [...s2, ...i3], input: t4.value, inst: u2, continue: false }), {});
      }, reverseTransform: (e5, t4) => true === e5 ? n3[0] || "true" : o2[0] || "false", error: r3.error });
      return u2;
    })({ Codec: qh, Boolean: gf, String: up }, ...e3);
    function am(e3) {
      const t3 = Zh(() => Zf([lp(e3), uf(), yf(), Pf(), qf(t3), nh(lp(), t3)]));
      return t3;
    }
    function cm(e3, t3) {
      return Fh(_h(e3), t3);
    }
    const um = "custom";
    var lm;
    lm || (lm = {});
    /* @__PURE__ */ new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
    Is({ localeError: Ku() });
    const dm = "2025-11-25", pm = "io.modelcontextprotocol/related-task", fm = "2.0", hm = em((e3) => null !== e3 && ("object" == typeof e3 || "function" == typeof e3)), mm = Zf([lp(), uf().int()]), gm = lp(), ym = (Vf({ ttl: Zf([uf(), Pf()]).optional(), pollInterval: uf().optional() }), Bf({ ttl: uf().optional() })), _m = Bf({ taskId: lp() }), vm = Vf({ progressToken: mm.optional(), [pm]: _m.optional() }), wm = Bf({ _meta: vm.optional() }), bm = wm.extend({ task: ym.optional() }), Sm = Bf({ method: lp(), params: wm.loose().optional() }), km = Bf({ _meta: vm.optional() }), Em = Bf({ method: lp(), params: km.loose().optional() }), xm = Vf({ _meta: vm.optional() }), Tm = Zf([lp(), uf().int()]), Om = Bf({ jsonrpc: hh(fm), id: Tm, ...Sm.shape }).strict(), Pm = Bf({ jsonrpc: hh(fm), ...Em.shape }).strict(), Im = Bf({ jsonrpc: hh(fm), id: Tm, result: xm }).strict();
    var Cm;
    !(function(e3) {
      e3[e3.ConnectionClosed = -32e3] = "ConnectionClosed", e3[e3.RequestTimeout = -32001] = "RequestTimeout", e3[e3.ParseError = -32700] = "ParseError", e3[e3.InvalidRequest = -32600] = "InvalidRequest", e3[e3.MethodNotFound = -32601] = "MethodNotFound", e3[e3.InvalidParams = -32602] = "InvalidParams", e3[e3.InternalError = -32603] = "InternalError", e3[e3.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
    })(Cm || (Cm = {}));
    const Am = Bf({ jsonrpc: hh(fm), id: Tm.optional(), error: Bf({ code: uf().int(), message: lp(), data: $f().optional() }) }).strict(), $m = (Zf([Om, Pm, Im, Am]), Zf([Im, Am]), xm.strict()), Rm = km.extend({ requestId: Tm.optional(), reason: lp().optional() }), Nm = Em.extend({ method: hh("notifications/cancelled"), params: Rm }), Mm = Bf({ src: lp(), mimeType: lp().optional(), sizes: qf(lp()).optional(), theme: dh(["light", "dark"]).optional() }), Jm = Bf({ icons: qf(Mm).optional() }), jm = Bf({ name: lp(), title: lp().optional() }), Dm = jm.extend({ ...jm.shape, ...Jm.shape, version: lp(), websiteUrl: lp().optional(), description: lp().optional() }), Fm = Qf(Bf({ applyDefaults: yf().optional() }), nh(lp(), $f())), qm = cm((e3) => e3 && "object" == typeof e3 && !Array.isArray(e3) && 0 === Object.keys(e3).length ? { form: {} } : e3, Qf(Bf({ form: Fm.optional(), url: hm.optional() }), nh(lp(), $f()).optional())), zm = Vf({ list: hm.optional(), cancel: hm.optional(), requests: Vf({ sampling: Vf({ createMessage: hm.optional() }).optional(), elicitation: Vf({ create: hm.optional() }).optional() }).optional() }), Um = Vf({ list: hm.optional(), cancel: hm.optional(), requests: Vf({ tools: Vf({ call: hm.optional() }).optional() }).optional() }), Bm = Bf({ experimental: nh(lp(), hm).optional(), sampling: Bf({ context: hm.optional(), tools: hm.optional() }).optional(), elicitation: qm.optional(), roots: Bf({ listChanged: yf().optional() }).optional(), tasks: zm.optional() }), Lm = wm.extend({ protocolVersion: lp(), capabilities: Bm, clientInfo: Dm }), Vm = Sm.extend({ method: hh("initialize"), params: Lm }), Km = Bf({ experimental: nh(lp(), hm).optional(), logging: hm.optional(), completions: hm.optional(), prompts: Bf({ listChanged: yf().optional() }).optional(), resources: Bf({ subscribe: yf().optional(), listChanged: yf().optional() }).optional(), tools: Bf({ listChanged: yf().optional() }).optional(), tasks: Um.optional() }), Zm = xm.extend({ protocolVersion: lp(), capabilities: Km, serverInfo: Dm, instructions: lp().optional() }), Wm = Em.extend({ method: hh("notifications/initialized"), params: km.optional() }), Hm = Sm.extend({ method: hh("ping"), params: wm.optional() }), Ym = Bf({ progress: uf(), total: wh(uf()), message: wh(lp()) }), Gm = Bf({ ...km.shape, ...Ym.shape, progressToken: mm }), Xm = Em.extend({ method: hh("notifications/progress"), params: Gm }), Qm = wm.extend({ cursor: gm.optional() }), eg = Sm.extend({ params: Qm.optional() }), tg = xm.extend({ nextCursor: gm.optional() }), rg = dh(["working", "input_required", "completed", "failed", "cancelled"]), ng = Bf({ taskId: lp(), status: rg, ttl: Zf([uf(), Pf()]), createdAt: lp(), lastUpdatedAt: lp(), pollInterval: wh(uf()), statusMessage: wh(lp()) }), og = xm.extend({ task: ng }), sg = km.merge(ng), ig = Em.extend({ method: hh("notifications/tasks/status"), params: sg }), ag = Sm.extend({ method: hh("tasks/get"), params: wm.extend({ taskId: lp() }) }), cg = xm.merge(ng), ug = Sm.extend({ method: hh("tasks/result"), params: wm.extend({ taskId: lp() }) }), lg = (xm.loose(), eg.extend({ method: hh("tasks/list") })), dg = tg.extend({ tasks: qf(ng) }), pg = Sm.extend({ method: hh("tasks/cancel"), params: wm.extend({ taskId: lp() }) }), fg = (xm.merge(ng), Bf({ uri: lp(), mimeType: wh(lp()), _meta: nh(lp(), $f()).optional() })), hg = fg.extend({ text: lp() }), mg = lp().refine((e3) => {
      try {
        return atob(e3), true;
      } catch {
        return false;
      }
    }, { message: "Invalid Base64 string" }), gg = fg.extend({ blob: mg }), yg = dh(["user", "assistant"]), _g = Bf({ audience: qf(yg).optional(), priority: uf().min(0).max(1).optional(), lastModified: qd({ offset: true }).optional() }), vg = Bf({ ...jm.shape, ...Jm.shape, uri: lp(), description: wh(lp()), mimeType: wh(lp()), annotations: _g.optional(), _meta: wh(Vf({})) }), wg = Bf({ ...jm.shape, ...Jm.shape, uriTemplate: lp(), description: wh(lp()), mimeType: wh(lp()), annotations: _g.optional(), _meta: wh(Vf({})) }), bg = eg.extend({ method: hh("resources/list") }), Sg = tg.extend({ resources: qf(vg) }), kg = eg.extend({ method: hh("resources/templates/list") }), Eg = tg.extend({ resourceTemplates: qf(wg) }), xg = wm.extend({ uri: lp() }), Tg = xg, Og = Sm.extend({ method: hh("resources/read"), params: Tg }), Pg = xm.extend({ contents: qf(Zf([hg, gg])) }), Ig = Em.extend({ method: hh("notifications/resources/list_changed"), params: km.optional() }), Cg = xg, Ag = Sm.extend({ method: hh("resources/subscribe"), params: Cg }), $g = xg, Rg = Sm.extend({ method: hh("resources/unsubscribe"), params: $g }), Ng = km.extend({ uri: lp() }), Mg = Em.extend({ method: hh("notifications/resources/updated"), params: Ng }), Jg = Bf({ name: lp(), description: wh(lp()), required: wh(yf()) }), jg = Bf({ ...jm.shape, ...Jm.shape, description: wh(lp()), arguments: wh(qf(Jg)), _meta: wh(Vf({})) }), Dg = eg.extend({ method: hh("prompts/list") }), Fg = tg.extend({ prompts: qf(jg) }), qg = wm.extend({ name: lp(), arguments: nh(lp(), lp()).optional() }), zg = Sm.extend({ method: hh("prompts/get"), params: qg }), Ug = Bf({ type: hh("text"), text: lp(), annotations: _g.optional(), _meta: nh(lp(), $f()).optional() }), Bg = Bf({ type: hh("image"), data: mg, mimeType: lp(), annotations: _g.optional(), _meta: nh(lp(), $f()).optional() }), Lg = Bf({ type: hh("audio"), data: mg, mimeType: lp(), annotations: _g.optional(), _meta: nh(lp(), $f()).optional() }), Vg = Bf({ type: hh("tool_use"), name: lp(), id: lp(), input: nh(lp(), $f()), _meta: nh(lp(), $f()).optional() }), Kg = Bf({ type: hh("resource"), resource: Zf([hg, gg]), annotations: _g.optional(), _meta: nh(lp(), $f()).optional() }), Zg = Zf([Ug, Bg, Lg, vg.extend({ type: hh("resource_link") }), Kg]), Wg = Bf({ role: yg, content: Zg }), Hg = xm.extend({ description: lp().optional(), messages: qf(Wg) }), Yg = Em.extend({ method: hh("notifications/prompts/list_changed"), params: km.optional() }), Gg = Bf({ title: lp().optional(), readOnlyHint: yf().optional(), destructiveHint: yf().optional(), idempotentHint: yf().optional(), openWorldHint: yf().optional() }), Xg = Bf({ taskSupport: dh(["required", "optional", "forbidden"]).optional() }), Qg = Bf({ ...jm.shape, ...Jm.shape, description: lp().optional(), inputSchema: Bf({ type: hh("object"), properties: nh(lp(), hm).optional(), required: qf(lp()).optional() }).catchall($f()), outputSchema: Bf({ type: hh("object"), properties: nh(lp(), hm).optional(), required: qf(lp()).optional() }).catchall($f()).optional(), annotations: Gg.optional(), execution: Xg.optional(), _meta: nh(lp(), $f()).optional() }), ey = eg.extend({ method: hh("tools/list") }), ty = tg.extend({ tools: qf(Qg) }), ry = xm.extend({ content: qf(Zg).default([]), structuredContent: nh(lp(), $f()).optional(), isError: yf().optional() }), ny = (ry.or(xm.extend({ toolResult: $f() })), bm.extend({ name: lp(), arguments: nh(lp(), $f()).optional() })), oy = Sm.extend({ method: hh("tools/call"), params: ny }), sy = Em.extend({ method: hh("notifications/tools/list_changed"), params: km.optional() }), iy = (Bf({ autoRefresh: yf().default(true), debounceMs: uf().int().nonnegative().default(300) }), dh(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])), ay = wm.extend({ level: iy }), cy = Sm.extend({ method: hh("logging/setLevel"), params: ay }), uy = km.extend({ level: iy, logger: lp().optional(), data: $f() }), ly = Em.extend({ method: hh("notifications/message"), params: uy }), dy = Bf({ name: lp().optional() }), py = Bf({ hints: qf(dy).optional(), costPriority: uf().min(0).max(1).optional(), speedPriority: uf().min(0).max(1).optional(), intelligencePriority: uf().min(0).max(1).optional() }), fy = Bf({ mode: dh(["auto", "required", "none"]).optional() }), hy = Bf({ type: hh("tool_result"), toolUseId: lp().describe("The unique identifier for the corresponding tool call."), content: qf(Zg).default([]), structuredContent: Bf({}).loose().optional(), isError: yf().optional(), _meta: nh(lp(), $f()).optional() }), my = Gf("type", [Ug, Bg, Lg]), gy = Gf("type", [Ug, Bg, Lg, Vg, hy]), yy = Bf({ role: yg, content: Zf([gy, qf(gy)]), _meta: nh(lp(), $f()).optional() }), _y = bm.extend({ messages: qf(yy), modelPreferences: py.optional(), systemPrompt: lp().optional(), includeContext: dh(["none", "thisServer", "allServers"]).optional(), temperature: uf().optional(), maxTokens: uf().int(), stopSequences: qf(lp()).optional(), metadata: hm.optional(), tools: qf(Qg).optional(), toolChoice: fy.optional() }), vy = Sm.extend({ method: hh("sampling/createMessage"), params: _y }), wy = xm.extend({ model: lp(), stopReason: wh(dh(["endTurn", "stopSequence", "maxTokens"]).or(lp())), role: yg, content: my }), by = xm.extend({ model: lp(), stopReason: wh(dh(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(lp())), role: yg, content: Zf([gy, qf(gy)]) }), Sy = Bf({ type: hh("boolean"), title: lp().optional(), description: lp().optional(), default: yf().optional() }), ky = Bf({ type: hh("string"), title: lp().optional(), description: lp().optional(), minLength: uf().optional(), maxLength: uf().optional(), format: dh(["email", "uri", "date", "date-time"]).optional(), default: lp().optional() }), Ey = Bf({ type: dh(["number", "integer"]), title: lp().optional(), description: lp().optional(), minimum: uf().optional(), maximum: uf().optional(), default: uf().optional() }), xy = Bf({ type: hh("string"), title: lp().optional(), description: lp().optional(), enum: qf(lp()), default: lp().optional() }), Ty = Bf({ type: hh("string"), title: lp().optional(), description: lp().optional(), oneOf: qf(Bf({ const: lp(), title: lp() })), default: lp().optional() }), Oy = Bf({ type: hh("string"), title: lp().optional(), description: lp().optional(), enum: qf(lp()), enumNames: qf(lp()).optional(), default: lp().optional() }), Py = Zf([xy, Ty]), Iy = Zf([Bf({ type: hh("array"), title: lp().optional(), description: lp().optional(), minItems: uf().optional(), maxItems: uf().optional(), items: Bf({ type: hh("string"), enum: qf(lp()) }), default: qf(lp()).optional() }), Bf({ type: hh("array"), title: lp().optional(), description: lp().optional(), minItems: uf().optional(), maxItems: uf().optional(), items: Bf({ anyOf: qf(Bf({ const: lp(), title: lp() })) }), default: qf(lp()).optional() })]), Cy = Zf([Oy, Py, Iy]), Ay = Zf([Cy, Sy, ky, Ey]), $y = Zf([bm.extend({ mode: hh("form").optional(), message: lp(), requestedSchema: Bf({ type: hh("object"), properties: nh(lp(), Ay), required: qf(lp()).optional() }) }), bm.extend({ mode: hh("url"), message: lp(), elicitationId: lp(), url: lp().url() })]), Ry = Sm.extend({ method: hh("elicitation/create"), params: $y }), Ny = km.extend({ elicitationId: lp() }), My = Em.extend({ method: hh("notifications/elicitation/complete"), params: Ny }), Jy = xm.extend({ action: dh(["accept", "decline", "cancel"]), content: cm((e3) => null === e3 ? void 0 : e3, nh(lp(), Zf([lp(), uf(), yf(), qf(lp())])).optional()) }), jy = Bf({ type: hh("ref/resource"), uri: lp() }), Dy = Bf({ type: hh("ref/prompt"), name: lp() }), Fy = wm.extend({ ref: Zf([Dy, jy]), argument: Bf({ name: lp(), value: lp() }), context: Bf({ arguments: nh(lp(), lp()).optional() }).optional() }), qy = Sm.extend({ method: hh("completion/complete"), params: Fy });
    const zy = xm.extend({ completion: Vf({ values: qf(lp()).max(100), total: wh(uf().int()), hasMore: wh(yf()) }) }), Uy = Bf({ uri: lp().startsWith("file://"), name: lp().optional(), _meta: nh(lp(), $f()).optional() }), By = Sm.extend({ method: hh("roots/list"), params: wm.optional() }), Ly = xm.extend({ roots: qf(Uy) }), Vy = Em.extend({ method: hh("notifications/roots/list_changed"), params: km.optional() });
    Zf([Hm, Vm, qy, cy, zg, Dg, bg, kg, Og, Ag, Rg, oy, ey, ag, ug, lg, pg]), Zf([Nm, Xm, Wm, Vy, ig]), Zf([$m, wy, by, Jy, Ly, cg, dg, og]), Zf([Hm, vy, Ry, By, ag, ug, lg, pg]), Zf([Nm, Xm, ly, Mg, Ig, sy, Yg, ig, My]), Zf([$m, Zm, zy, Hg, Fg, Sg, Eg, Pg, ry, ty, cg, dg, og]);
    Error;
    const Ky = Sp().superRefine((e3, t3) => {
      if (!URL.canParse(e3)) return t3.addIssue({ code: um, message: "URL must be parseable", fatal: true }), Es;
    }).refine((e3) => {
      const t3 = new URL(e3);
      return "javascript:" !== t3.protocol && "data:" !== t3.protocol && "vbscript:" !== t3.protocol;
    }, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), Zy = Vf({ resource: lp().url(), authorization_servers: qf(Ky).optional(), jwks_uri: lp().url().optional(), scopes_supported: qf(lp()).optional(), bearer_methods_supported: qf(lp()).optional(), resource_signing_alg_values_supported: qf(lp()).optional(), resource_name: lp().optional(), resource_documentation: lp().optional(), resource_policy_uri: lp().url().optional(), resource_tos_uri: lp().url().optional(), tls_client_certificate_bound_access_tokens: yf().optional(), authorization_details_types_supported: qf(lp()).optional(), dpop_signing_alg_values_supported: qf(lp()).optional(), dpop_bound_access_tokens_required: yf().optional() }), Wy = Vf({ issuer: lp(), authorization_endpoint: Ky, token_endpoint: Ky, registration_endpoint: Ky.optional(), scopes_supported: qf(lp()).optional(), response_types_supported: qf(lp()), response_modes_supported: qf(lp()).optional(), grant_types_supported: qf(lp()).optional(), token_endpoint_auth_methods_supported: qf(lp()).optional(), token_endpoint_auth_signing_alg_values_supported: qf(lp()).optional(), service_documentation: Ky.optional(), revocation_endpoint: Ky.optional(), revocation_endpoint_auth_methods_supported: qf(lp()).optional(), revocation_endpoint_auth_signing_alg_values_supported: qf(lp()).optional(), introspection_endpoint: lp().optional(), introspection_endpoint_auth_methods_supported: qf(lp()).optional(), introspection_endpoint_auth_signing_alg_values_supported: qf(lp()).optional(), code_challenge_methods_supported: qf(lp()).optional(), client_id_metadata_document_supported: yf().optional() }), Hy = (Bf({ ...Vf({ issuer: lp(), authorization_endpoint: Ky, token_endpoint: Ky, userinfo_endpoint: Ky.optional(), jwks_uri: Ky, registration_endpoint: Ky.optional(), scopes_supported: qf(lp()).optional(), response_types_supported: qf(lp()), response_modes_supported: qf(lp()).optional(), grant_types_supported: qf(lp()).optional(), acr_values_supported: qf(lp()).optional(), subject_types_supported: qf(lp()), id_token_signing_alg_values_supported: qf(lp()), id_token_encryption_alg_values_supported: qf(lp()).optional(), id_token_encryption_enc_values_supported: qf(lp()).optional(), userinfo_signing_alg_values_supported: qf(lp()).optional(), userinfo_encryption_alg_values_supported: qf(lp()).optional(), userinfo_encryption_enc_values_supported: qf(lp()).optional(), request_object_signing_alg_values_supported: qf(lp()).optional(), request_object_encryption_alg_values_supported: qf(lp()).optional(), request_object_encryption_enc_values_supported: qf(lp()).optional(), token_endpoint_auth_methods_supported: qf(lp()).optional(), token_endpoint_auth_signing_alg_values_supported: qf(lp()).optional(), display_values_supported: qf(lp()).optional(), claim_types_supported: qf(lp()).optional(), claims_supported: qf(lp()).optional(), service_documentation: lp().optional(), claims_locales_supported: qf(lp()).optional(), ui_locales_supported: qf(lp()).optional(), claims_parameter_supported: yf().optional(), request_parameter_supported: yf().optional(), request_uri_parameter_supported: yf().optional(), require_request_uri_registration: yf().optional(), op_policy_uri: Ky.optional(), op_tos_uri: Ky.optional(), client_id_metadata_document_supported: yf().optional() }).shape, ...Wy.pick({ code_challenge_methods_supported: true }).shape }), Bf({ access_token: lp(), id_token: lp().optional(), token_type: lp(), expires_in: (function(e3) {
      return (function(e4, t3) {
        return new e4({ type: "number", coerce: true, checks: [], ...Ys(t3) });
      })(cf, e3);
    })().optional(), scope: lp().optional(), refresh_token: lp().optional() }).strip()), Yy = (Bf({ error: lp(), error_description: lp().optional(), error_uri: lp().optional() }), Ky.optional().or(hh("").transform(() => {
    }))), Gy = Bf({ redirect_uris: qf(Ky), token_endpoint_auth_method: lp().optional(), grant_types: qf(lp()).optional(), response_types: qf(lp()).optional(), client_name: lp().optional(), client_uri: Ky.optional(), logo_uri: Yy, scope: lp().optional(), contacts: qf(lp()).optional(), tos_uri: Yy, policy_uri: lp().optional(), jwks_uri: Ky.optional(), jwks: Cf().optional(), software_id: lp().optional(), software_version: lp().optional(), software_statement: lp().optional() }).strip(), Xy = Bf({ client_id: lp(), client_secret: lp().optional(), client_id_issued_at: uf().optional(), client_secret_expires_at: uf().optional() }).strip();
    Gy.merge(Xy), Bf({ error: lp(), error_description: lp().optional() }).strip(), Bf({ token: lp(), token_type_hint: lp().optional() }).strip();
    class Qy extends Error {
      constructor(e3, t3) {
        super(e3), this.errorUri = t3, this.name = this.constructor.name;
      }
      toResponseObject() {
        const e3 = { error: this.errorCode, error_description: this.message };
        return this.errorUri && (e3.error_uri = this.errorUri), e3;
      }
      get errorCode() {
        return this.constructor.errorCode;
      }
    }
    class e_ extends Qy {
    }
    e_.errorCode = "invalid_request";
    class t_ extends Qy {
    }
    t_.errorCode = "invalid_client";
    class r_ extends Qy {
    }
    r_.errorCode = "invalid_grant";
    class n_ extends Qy {
    }
    n_.errorCode = "unauthorized_client";
    class o_ extends Qy {
    }
    o_.errorCode = "unsupported_grant_type";
    class s_ extends Qy {
    }
    s_.errorCode = "invalid_scope";
    class i_ extends Qy {
    }
    i_.errorCode = "access_denied";
    class a_ extends Qy {
    }
    a_.errorCode = "server_error";
    class c_ extends Qy {
    }
    c_.errorCode = "temporarily_unavailable";
    class u_ extends Qy {
    }
    u_.errorCode = "unsupported_response_type";
    class l_ extends Qy {
    }
    l_.errorCode = "unsupported_token_type";
    class d_ extends Qy {
    }
    d_.errorCode = "invalid_token";
    class p_ extends Qy {
    }
    p_.errorCode = "method_not_allowed";
    class f_ extends Qy {
    }
    f_.errorCode = "too_many_requests";
    class h_ extends Qy {
    }
    h_.errorCode = "invalid_client_metadata";
    class m_ extends Qy {
    }
    m_.errorCode = "insufficient_scope";
    class g_ extends Qy {
    }
    g_.errorCode = "invalid_target";
    e_.errorCode, t_.errorCode, r_.errorCode, n_.errorCode, o_.errorCode, s_.errorCode, i_.errorCode, a_.errorCode, c_.errorCode, u_.errorCode, l_.errorCode, d_.errorCode, p_.errorCode, f_.errorCode, h_.errorCode, m_.errorCode, g_.errorCode;
    Error;
    async function y_(e3, t3, r3 = fetch) {
      const n3 = await w_(e3, "oauth-protected-resource", r3, { protocolVersion: t3?.protocolVersion, metadataUrl: t3?.resourceMetadataUrl });
      if (!n3 || 404 === n3.status) throw await n3?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
      if (!n3.ok) throw await n3.body?.cancel(), new Error(`HTTP ${n3.status} trying to load well-known OAuth protected resource metadata.`);
      return Zy.parse(await n3.json());
    }
    async function __(e3, t3, r3 = fetch) {
      try {
        return await r3(e3, { headers: t3 });
      } catch (n3) {
        if (n3 instanceof TypeError) return t3 ? __(e3, void 0, r3) : void 0;
        throw n3;
      }
    }
    async function v_(e3, t3, r3 = fetch) {
      const n3 = { "MCP-Protocol-Version": t3 };
      return await __(e3, n3, r3);
    }
    async function w_(e3, t3, r3, n3) {
      const o2 = new URL(e3), s2 = n3?.protocolVersion ?? dm;
      let i3;
      if (n3?.metadataUrl) i3 = new URL(n3.metadataUrl);
      else {
        const e4 = (function(e5, t4 = "", r4 = {}) {
          return t4.endsWith("/") && (t4 = t4.slice(0, -1)), r4.prependPathname ? `${t4}/.well-known/${e5}` : `/.well-known/${e5}${t4}`;
        })(t3, o2.pathname);
        i3 = new URL(e4, n3?.metadataServerUrl ?? o2), i3.search = o2.search;
      }
      let a3 = await v_(i3, s2, r3);
      if (!n3?.metadataUrl && (function(e4, t4) {
        return !e4 || e4.status >= 400 && e4.status < 500 && "/" !== t4;
      })(a3, o2.pathname)) {
        const e4 = new URL(`/.well-known/${t3}`, o2);
        a3 = await v_(e4, s2, r3);
      }
      return a3;
    }
    o(2573);
    var b_ = o(6768), S_ = (o(4152), o(7223), o(8881)), k_ = o(738), E_ = o(8088), x_ = o(9175), T_ = o(1219);
    function O_(e3) {
      return (0, xe.KR)(e3);
    }
    class P_ {
      constructor(e3) {
        this.page = e3;
      }
    }
    function I_(e3, t3, r3) {
      const n3 = `Invalid ${t3} response`;
      return O_(e3).error(`${n3}: ${JSON.stringify(r3)}`), { kind: "invalid_response", items: [], message: n3 };
    }
    function C_(e3, t3, r3 = "distribution", n3 = []) {
      (0, Pe.FM)(e3, t3, r3, ["commands_version:v2", `mcp_version:${(0, Pe.XP)()}`, ...n3]);
    }
    class A_ {
      constructor(e3, t3, r3, n3, o2) {
        this.serverName = t3, this.identifier = r3, this.deps = n3, this.lastInlineReconnectAtMs = 0, this.client = e3, this.config = o2, this.toolsCache = new S_.B(864e5), this.instructionsCache = new S_.B(864e5), this.resourcesCache = new S_.B(864e5);
      }
      classifyAndReport(e3, t3, r3 = true) {
        const n3 = this.deps.getServerInfo(this.identifier)?.type, o2 = (0, Ee.FI)(e3, n3);
        return (0, Pe.ef)({ identifier: this.identifier, phase: t3, error: e3, serverType: n3, classification: o2, captureException: r3 && !o2.retryable && "auth" !== o2.reason }), o2;
      }
      maybeLogToolCallTimeout(e3) {
        if (!(0, x_.Gv)(e3.error)) return;
        const t3 = (0, x_.WQ)(e3.durationMs, e3.idleTimeoutMs, e3.maxTotalTimeoutMs), r3 = e3.error instanceof Error ? e3.error.message : String(e3.error);
        O_(this.identifier).warn(`MCP tool call timed out (${t3}): ${e3.toolName}`, { event: "mcp_tool_call_timeout", toolName: e3.toolName, toolCallId: e3.toolCallId, durationMs: e3.durationMs, idleTimeoutMs: e3.idleTimeoutMs, maxTotalTimeoutMs: e3.maxTotalTimeoutMs, timeoutKind: t3, entryPoint: e3.entryPoint, errorMessage: r3 }), C_("mcp.ext.tool_call_timeout", 1, "increment", [`timeout_kind:${t3}`, `entry_point:${e3.entryPoint}`]);
      }
      async listAllPages(e3, t3, r3) {
        try {
          return { ok: true, items: await (0, E_.e)({ fetchPage: (t4) => e3(void 0 === t4 ? void 0 : { cursor: t4 }, { signal: r3 }), itemsOf: (e4) => {
            const r4 = t3(e4);
            if (!r4 || !Array.isArray(r4)) throw new P_(e4);
            return r4;
          }, nextCursorOf: (e4) => e4?.nextCursor }) };
        } catch (e4) {
          if (e4 instanceof P_) return { ok: false, invalidPage: e4.page };
          throw e4;
        }
      }
      async listAllTools(e3) {
        const t3 = await this.listAllPages((e4, t4) => this.client.listTools(e4, t4), (e4) => e4?.tools, e3);
        return t3.ok ? { kind: "success", tools: t3.items } : I_(this.identifier, "tools", t3.invalidPage);
      }
      async listToolsWithCapabilityProbe(e3) {
        e3?.throwIfAborted();
        const t3 = this.client.getServerCapabilities();
        if (t3?.tools) return await this.listAllTools(e3);
        try {
          return await this.listAllTools(e3);
        } catch (e4) {
          if ((function(e5) {
            if (!(e5 instanceof Error)) return false;
            const t4 = e5.message.toLowerCase();
            return t4.includes("method not found") || t4.includes("unsupported") || t4.includes("not supported") || t4.includes("-32601");
          })(e4)) return { kind: "unsupported" };
          throw e4;
        }
      }
      emitDegradedIfApplicable(e3) {
        const t3 = this.deps.getServerInfo(this.identifier);
        if ("stdio" === t3?.type) return;
        const r3 = e3.httpStatus;
        429 !== r3 && 503 !== r3 || this.deps.dispatchEvents(this.identifier, [{ target: "connection", kind: "request_degraded", reason: `HTTP ${r3}` }], t3);
      }
      async getTools(e3, t3) {
        return await this.toolsCache.get(async () => await this.withSessionTerminationRetry(async () => {
          const e4 = await this.listToolsWithCapabilityProbe(t3);
          return "success" !== e4.kind ? [] : e4.tools.map((e5) => ({ name: e5.name, description: e5.description || void 0, inputSchema: e5.inputSchema, outputSchema: e5.outputSchema, title: e5.title, annotations: (0, k_.z9)(e5.annotations, e5._meta), _meta: e5._meta }));
        }, 0, t3));
      }
      invalidateToolsCache() {
        this.toolsCache.invalidate();
      }
      invalidateToolsCacheKeepingStale() {
        this.toolsCache.invalidateKeepingStale();
      }
      invalidateResourcesCache() {
        this.resourcesCache.invalidate();
      }
      invalidateResourcesCacheKeepingStale() {
        this.resourcesCache.invalidateKeepingStale();
      }
      invalidateInstructionsCache() {
        this.instructionsCache.invalidate();
      }
      invalidateInstructionsCacheKeepingStale() {
        this.instructionsCache.invalidateKeepingStale();
      }
      async callTool(e3, t3, r3, n3, o2) {
        const s2 = this.deps.toolNameMap.get(t3) || t3;
        o2 && this.deps.currentElicitationProvider.set(this.identifier, o2);
        const i3 = Date.now(), a3 = { identifier: this.identifier, serverInfo: this.deps.getServerInfo(this.identifier) }, c2 = (0, x_.tz)((e4) => {
          O_(this.identifier).debug(`ProgressNotification received for ${n3}`, { progress: e4 }), this.deps.executeCommand("mcp.progressNotification", { serverIdentifier: this.identifier, progressToken: n3, notification: e4, toolCallId: n3 });
        }, void 0, a3);
        try {
          const e4 = await this.withToolCallRetry(async () => {
            const e5 = (0, x_.fh)(c2, i3);
            if (null === e5) throw (0, x_.yD)();
            const t4 = await this.client.callTool({ name: s2, arguments: r3, _meta: { progressToken: n3 } }, ue.TF, e5);
            return { structuredContent: t4.structuredContent, content: t4.content, isError: true === t4.isError };
          });
          return C_("mcp.ext.tool_call_duration_ms", Date.now() - i3), C_("mcp.ext.tool_call_success", 1, "increment"), e4;
        } catch (e4) {
          const t4 = Date.now() - i3;
          C_("mcp.ext.tool_call_duration_ms", t4), this.maybeLogToolCallTimeout({ error: e4, toolName: s2, toolCallId: n3, durationMs: t4, idleTimeoutMs: c2.timeout, maxTotalTimeoutMs: c2.maxTotalTimeout, entryPoint: "callTool" });
          const r4 = this.classifyAndReport(e4, "tool_call");
          throw C_("mcp.ext.tool_call_error", 1, "increment", (0, Pe.E7)(r4)), e4;
        } finally {
          o2 && this.deps.currentElicitationProvider.delete(this.identifier);
        }
      }
      async getInstructions(e3, t3) {
        return await this.instructionsCache.get(async () => await this.withSessionTerminationRetry(async () => await this.client.getInstructions(), 0, t3));
      }
      async getState(e3) {
        const t3 = this.deps.getStatus(this.identifier);
        if (!t3) return { kind: "loading" };
        switch (t3.type) {
          case "initializing":
          case "disconnected":
          default:
            return { kind: "loading" };
          case "needsAuth":
            return { kind: "requires_authentication", url: t3.authorizationUrl, callback: async (e4) => {
              O_(this.identifier).debug("OAuth callback received via getState");
            } };
          case "connected":
          case "degraded":
          case "error":
            return { kind: "ready" };
        }
      }
      async listResources(e3, t3) {
        return await this.resourcesCache.get(async () => await this.withSessionTerminationRetry(async () => {
          if (!(this.client.getServerCapabilities() ?? { resources: false }).resources) return [];
          const e4 = await this.listAllPages((e5, t4) => this.client.listResources(e5, t4), (e5) => e5?.resources, t3);
          return e4.ok ? e4.items.map((e5) => ({ uri: e5.uri, name: e5.name, description: e5.description, mimeType: e5.mimeType, annotations: e5.annotations })) : (I_(this.identifier, "resources", e4.invalidPage), []);
        }, 0, t3)).then((e4) => ({ resources: e4 }));
      }
      async readResource(e3, t3, r3) {
        return await this.withSessionTerminationRetry(async () => ({ contents: (await this.client.readResource({ uri: t3.uri }, { signal: r3 })).contents || [] }), 0, r3);
      }
      async listPrompts(e3, t3) {
        return (this.client.getServerCapabilities() ?? { prompts: false }).prompts ? await this.withSessionTerminationRetry(async () => {
          const e4 = await this.listAllPages((e5, t4) => this.client.listPrompts(e5, t4), (e5) => e5?.prompts, t3);
          return e4.ok ? e4.items.map((e5) => ({ name: e5.name, description: e5.description || void 0, arguments: e5.arguments?.map((e6) => ({ name: e6.name, description: e6.description || void 0, required: e6.required })) })) : (I_(this.identifier, "prompts", e4.invalidPage), []);
        }, 0, t3) : [];
      }
      async getPrompt(e3, t3, r3, n3) {
        return await this.withSessionTerminationRetry(async () => {
          const e4 = await this.client.getPrompt({ name: t3, arguments: r3 || {} }, { signal: n3 });
          return { messages: e4.messages?.map((e5) => {
            const t4 = Array.isArray(e5.content) ? e5.content : [];
            return { role: e5.role, content: t4.map((e6) => "text" === e6.type ? { type: "text", text: e6.text || "" } : "image" === e6.type ? { type: "image", data: e6.data || "", mimeType: e6.mimeType } : { type: "text", text: "" }) };
          }) || [] };
        }, 0, n3);
      }
      async getToolsForUI(e3) {
        return await this.withSessionTerminationRetry(async () => {
          const t3 = await this.listToolsWithCapabilityProbe(e3);
          switch (t3.kind) {
            case "unsupported":
              return { kind: "unsupported", items: [] };
            case "invalid_response":
              return { kind: "invalid_response", items: [], message: t3.message };
            case "success":
              break;
            default: {
              const e4 = t3;
              throw new Error(`Unhandled tool probe result: ${JSON.stringify(e4)}`);
            }
          }
          return O_(this.identifier).debug(`listOfferings: Found ${t3.tools.length} tools`), this.deps.toolNameMap.clear(), { kind: "success", items: t3.tools.map((e4) => {
            const t4 = e4.inputSchema, r3 = e4.name.replace(/[\s.]/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
            this.deps.toolNameMap.set(r3, e4.name);
            const n3 = !t4?.properties || 0 === Object.keys(t4.properties).length, o2 = e4.outputSchema ? JSON.stringify(e4.outputSchema) : void 0;
            return n3 ? { name: r3, originalName: e4.name, description: e4.description || "", parameters: JSON.stringify({ type: "object", properties: {} }), outputSchema: o2, title: e4.title, annotations: (0, k_.z9)(e4.annotations, e4._meta), _meta: e4._meta } : { name: r3, originalName: e4.name, description: e4.description || "", parameters: JSON.stringify(e4.inputSchema), outputSchema: o2, title: e4.title, annotations: (0, k_.z9)(e4.annotations, e4._meta), _meta: e4._meta };
          }) };
        }, 0, e3);
      }
      async getPromptsForUI(e3) {
        return await this.withSessionTerminationRetry(async () => {
          if (!(this.client.getServerCapabilities() ?? { prompts: false }).prompts) return { kind: "unsupported", items: [] };
          const t3 = await this.listAllPages((e4, t4) => this.client.listPrompts(e4, t4), (e4) => e4?.prompts, e3);
          return t3.ok ? (O_(this.identifier).debug(`listPrompts: Found ${t3.items.length} prompts`), { kind: "success", items: t3.items.map((e4) => {
            const t4 = { type: "object", properties: {}, required: [] };
            if (e4.arguments && Array.isArray(e4.arguments)) for (const r3 of e4.arguments) t4.properties[r3.name] = { type: "string", description: r3.description || "" }, r3.required && t4.required.push(r3.name);
            return { name: e4.name, description: e4.description || "", parameters: JSON.stringify(t4) };
          }) }) : I_(this.identifier, "prompts", t3.invalidPage);
        }, 0, e3);
      }
      async getResourcesForUI(e3) {
        return await this.withSessionTerminationRetry(async () => {
          if (!(this.client.getServerCapabilities() ?? { resources: false }).resources) return { kind: "unsupported", items: [] };
          const t3 = await this.listAllPages((e4, t4) => this.client.listResources(e4, t4), (e4) => e4?.resources, e3);
          return t3.ok ? (O_(this.identifier).debug(`listResources: Found ${t3.items.length} resources`), { kind: "success", items: t3.items.map((e4) => ({ uri: e4.uri, name: e4.name, description: e4.description, mimeType: e4.mimeType, annotations: e4.annotations })) }) : I_(this.identifier, "resources", t3.invalidPage);
        }, 0, e3);
      }
      async listOfferingsForUI(e3) {
        const t3 = Date.now();
        let r3, n3 = false;
        const o2 = Ye(this.identifier);
        if (void 0 !== o2) {
          const e4 = Math.max(1, Math.ceil(o2 / 1e3)), t4 = { reason: "http_4xx", retryable: true, httpStatus: 429 }, r4 = () => ({ kind: "failure", items: [], authRelated: false, failure: t4, message: `Rate limited by provider; retry after ${e4}s` });
          return { offerings: { tools: [], prompts: [], resources: [] }, outcomes: { tools: r4(), prompts: r4(), resources: r4() } };
        }
        const s2 = (t4, o3) => o3.catch((t5) => {
          if ((0, T_.zf)(t5, e3)) return { kind: "aborted", items: [] };
          const o4 = (0, Ee.qw)(t5);
          o4 && void 0 === r3 && (n3 = true, r3 = t5);
          return { kind: "failure", items: [], authRelated: o4, failure: this.classifyAndReport(t5, "list_offerings", false), message: t5 instanceof Error ? t5.message : String(t5) };
        }), i3 = await s2(0, this.getToolsForUI(e3)), a3 = await s2(0, this.getPromptsForUI(e3)), c2 = await s2(0, this.getResourcesForUI(e3)), u2 = { offerings: { tools: i3.items, prompts: a3.items, resources: c2.items }, outcomes: { tools: i3, prompts: a3, resources: c2 } }, { offerings: l2 } = u2, d2 = [["tools", i3], ["prompts", a3], ["resources", c2]].flatMap(([e4, t4]) => "aborted" === t4.kind ? [{ subCall: e4, authRelated: false, reason: "aborted", message: "metadata refresh aborted" }] : "failure" === t4.kind ? [{ subCall: e4, authRelated: t4.authRelated, reason: t4.failure.reason, message: t4.message }] : []);
        if (d2.length > 0) {
          const e4 = d2.map((e5) => `${e5.subCall}(authRelated=${e5.authRelated}, reason=${e5.reason}): ${e5.message}`).join(" | "), t4 = `listOfferingsForUI sub-call failed (count=${d2.length}): ${e4}`;
          d2.every((e5) => "aborted" === e5.reason) ? O_(this.identifier).debug(t4) : O_(this.identifier).warn(t4);
        }
        if (C_("mcp.ext.list_offerings_duration_ms", Date.now() - t3), C_("mcp.ext.list_offerings_tool_count", l2.tools.length), O_(this.identifier).debug(`Found ${l2.tools.length} tools, ${l2.prompts.length} prompts, and ${l2.resources.length} resources`), n3) {
          const e4 = r3, t4 = e4 instanceof Error ? e4.message : String(e4);
          O_(this.identifier).warn("Auth error detected in listOfferingsForUI");
          const n4 = this.deps.getStatus(this.identifier), o3 = this.deps.getAuthState(this.identifier);
          if ("needsAuth" === n4?.type || "needsUserAuth" === o3.type) return O_(this.identifier).debug("listOfferingsForUI: skipping operation_auth_failed dispatch (server already awaiting interactive auth)"), u2;
          const s3 = (0, Ee.yZ)({ hasResults: l2.tools.length > 0 || l2.prompts.length > 0 || l2.resources.length > 0, authError: t4, authState: o3 });
          if (s3.length > 0) {
            const e5 = this.deps.getServerInfo(this.identifier);
            this.deps.dispatchEvents(this.identifier, s3, e5);
          }
        }
        return u2;
      }
      async callToolForUI(e3, t3, r3, n3) {
        const o2 = this.deps.toolNameMap.get(e3) || e3;
        O_(this.identifier).debug(`Calling tool '${o2}' with toolCallId: ${r3}`), t3 && O_(this.identifier).debug(`Tool arguments: ${JSON.stringify(t3)}`, void 0, { localOnly: true }), n3 && this.deps.currentElicitationProvider.set(this.identifier, n3);
        const s2 = Date.now(), i3 = { identifier: this.identifier, serverInfo: this.deps.getServerInfo(this.identifier) }, a3 = (0, x_.tz)((e4) => {
          O_(this.identifier).debug(`ProgressNotification received for ${r3}`, { progress: e4 }), this.deps.executeCommand("mcp.progressNotification", { serverIdentifier: this.identifier, progressToken: r3, notification: e4, toolCallId: r3 });
        }, void 0, i3);
        try {
          r3 && this.deps.currentToolCallContext.set(this.identifier, r3);
          const e4 = await this.withToolCallRetry(async () => {
            const e5 = (0, x_.fh)(a3, s2);
            if (null === e5) throw (0, x_.yD)();
            return this.client.callTool({ name: o2, arguments: t3, _meta: { progressToken: r3 } }, ue.TF, e5);
          });
          return O_(this.identifier).debug(`Successfully called tool '${o2}'`), r3 && this.deps.currentToolCallContext.delete(this.identifier), C_("mcp.ext.tool_call_duration_ms", Date.now() - s2), C_("mcp.ext.tool_call_success", 1, "increment"), { result: e4 };
        } catch (e4) {
          const t4 = Date.now() - s2;
          O_(this.identifier).error(`Error calling tool '${o2}': ${e4 instanceof Error ? e4.message : String(e4)}`, e4 instanceof Error ? e4 : void 0), r3 && this.deps.currentToolCallContext.delete(this.identifier), C_("mcp.ext.tool_call_duration_ms", t4), this.maybeLogToolCallTimeout({ error: e4, toolName: o2, toolCallId: r3, durationMs: t4, idleTimeoutMs: a3.timeout, maxTotalTimeoutMs: a3.maxTotalTimeout, entryPoint: "callToolForUI" });
          const n4 = this.classifyAndReport(e4, "tool_call");
          return C_("mcp.ext.tool_call_error", 1, "increment", (0, Pe.E7)(n4)), this.emitDegradedIfApplicable(n4), { result: { error: e4 instanceof Error ? e4.message : String(e4) } };
        } finally {
          n3 && this.deps.currentElicitationProvider.delete(this.identifier);
        }
      }
      async getInstructionsForUI(e3) {
        try {
          return { instructions: await this.withSessionTerminationRetry(async () => this.client.getInstructions(), 0, e3) };
        } catch (e4) {
          return O_(this.identifier).error(`Error fetching instructions: ${e4 instanceof Error ? e4.message : String(e4)}`, e4 instanceof Error ? e4 : void 0), this.classifyAndReport(e4, "get_instructions"), { instructions: "" };
        }
      }
      async getPromptForUI(e3, t3, r3) {
        O_(this.identifier).debug(`Getting prompt '${e3}'`), t3 && O_(this.identifier).debug(`Prompt arguments: ${JSON.stringify(t3)}`, void 0, { localOnly: true });
        try {
          const n3 = {};
          if (t3) for (const [e4, r4] of Object.entries(t3)) n3[e4] = "string" == typeof r4 ? r4 : JSON.stringify(r4);
          const o2 = await this.withSessionTerminationRetry(async () => this.client.getPrompt({ name: e3, arguments: n3 }, { signal: r3 }), 0, r3);
          return O_(this.identifier).debug(`Successfully retrieved prompt '${e3}'`), { result: o2 };
        } catch (t4) {
          return O_(this.identifier).error(`Error getting prompt '${e3}': ${t4 instanceof Error ? t4.message : String(t4)}`, t4 instanceof Error ? t4 : void 0), this.classifyAndReport(t4, "get_prompt"), { result: { error: t4 instanceof Error ? t4.message : String(t4) } };
        }
      }
      async readResourceForUI(e3, t3) {
        O_(this.identifier).debug(`Reading resource: ${e3}`);
        try {
          const r3 = await this.withSessionTerminationRetry(async () => this.client.readResource({ uri: e3 }, { signal: t3 }), 0, t3);
          return O_(this.identifier).debug(`Successfully read resource: ${e3}`), { result: r3 };
        } catch (t4) {
          return O_(this.identifier).error(`Error reading resource '${e3}': ${t4 instanceof Error ? t4.message : String(t4)}`, t4 instanceof Error ? t4 : void 0), this.classifyAndReport(t4, "read_resource"), { result: { error: t4 instanceof Error ? t4.message : String(t4) } };
        }
      }
      async reinitializeTransportAndRestoreElicitation(e3) {
        const t3 = this.deps.currentElicitationProvider.get(this.identifier);
        await this.deps.reinitializeStreamableHttpConnection(this.identifier, e3, this), t3 && this.deps.currentElicitationProvider.set(this.identifier, t3);
      }
      async withSessionTerminationRetry(e3, t3 = 0, r3) {
        r3?.throwIfAborted();
        try {
          return await e3();
        } catch (n3) {
          r3?.throwIfAborted();
          const o2 = this.deps.getServerInfo(this.identifier);
          if (!o2) throw n3;
          if (t3 >= 1 || !(0, Ee.KS)(n3, o2.type)) throw n3;
          return O_(this.identifier).info("Detected session termination, re-initializing connection before retry"), await this.reinitializeTransportAndRestoreElicitation(o2), this.withSessionTerminationRetry(e3, t3 + 1, r3);
        }
      }
      async withToolCallRetry(e3, t3 = 0) {
        try {
          return await e3();
        } catch (r3) {
          const n3 = this.deps.getServerInfo(this.identifier);
          if (!n3) throw r3;
          if (t3 >= 1) throw r3;
          const o2 = (0, Ee.KS)(r3, n3.type), s2 = "sibling_refreshed" === (0, Ee.FI)(r3, n3.type).reason, i3 = r3 instanceof Error ? r3 : new Error(String(r3)), a3 = !o2 && !s2 && "stdio" !== n3.type && (0, Ne.QB)(i3), c2 = "error" === this.deps.getStatus(this.identifier)?.type;
          if (!o2 && !s2 && !(a3 && c2)) throw r3;
          if (!o2 && !s2) {
            const e4 = Date.now(), t4 = this.deps.getInlineReconnectCooldownMs();
            if (e4 - this.lastInlineReconnectAtMs < t4) throw O_(this.identifier).info("Skipping inline reconnect during cooldown", { cooldownMs: t4, msSinceLastReconnect: e4 - this.lastInlineReconnectAtMs }), r3;
            this.lastInlineReconnectAtMs = e4;
          }
          const u2 = o2 ? "Detected session termination, re-initializing connection before retry" : s2 ? "Sibling OAuth refresh completed, re-initializing connection before retrying tool call" : "FSM exhausted retries for network error, attempting inline recovery before tool call";
          return O_(this.identifier).info(u2), await this.reinitializeTransportAndRestoreElicitation(n3), this.withToolCallRetry(e3, t3 + 1);
        }
      }
    }
    function $_({ durationMs: e3, status: t3, transport: r3, commandsVersion: n3 = "v1", failureReason: o2, retryable: s2, httpStatusCode: i3 }) {
      const a3 = [`mcp_version:${(0, Pe.XP)()}`, `status:${t3}`, `transport:${r3}`, `commands_version:${n3}`];
      void 0 !== o2 && a3.push(`failure_reason:${o2}`), void 0 !== s2 && a3.push(`retryable:${String(s2)}`), void 0 !== i3 && a3.push(`status_code:${String(i3)}`), (0, Pe.FM)("mcp.ext.connection_time_ms", e3, "distribution", a3), (0, Pe.FM)("mcp.ext.connection_attempts", 1, "increment", a3);
    }
    function R_(e3, t3) {
      return 429 === t3.failure.httpStatus || 503 === t3.failure.httpStatus ? `${e3}: HTTP ${t3.failure.httpStatus}` : "session_invalidated" === t3.failure.reason ? `${e3}: session invalidated` : `${e3}: ${t3.message || t3.failure.reason}`;
    }
    var N_ = o(3309), M_ = o(7030);
    function J_(e3) {
      return (0, xe.KR)(e3);
    }
    class j_ {
      constructor(e3) {
        this.onRuntimeEvent = e3, this.connectPhaseComplete = false, this.connectPhaseEvents = [];
      }
      emit(e3) {
        this.connectPhaseComplete ? this.onRuntimeEvent(this, e3) : this.connectPhaseEvents.push(e3);
      }
      markConnectPhaseComplete() {
        this.connectPhaseComplete = true;
      }
      getConnectPhaseAuthRequiredEvidence() {
        const e3 = this.connectPhaseEvents.find((e4) => "auth_required" === e4.kind);
        return { hadAuthRequiredEvent: void 0 !== e3, authorizationUrl: e3?.authorizationUrl };
      }
      getConnectPhaseEvents() {
        return this.connectPhaseEvents;
      }
    }
    class D_ {
      constructor(e3) {
        this.identifier = e3, this.closePromises = /* @__PURE__ */ new WeakMap();
      }
      setClient(e3) {
        this.client = e3, void 0 !== this.closeRequestedReason && this.closeCurrent(this.closeRequestedReason);
      }
      requestClose(e3) {
        return this.closeRequestedReason = e3, this.closeCurrent(e3);
      }
      commit(e3) {
        this.client === e3 && (this.client = void 0);
      }
      closeCurrent(e3) {
        const t3 = this.client;
        if (!t3) return Promise.resolve();
        const r3 = this.closePromises.get(t3);
        if (r3) return r3;
        J_(this.identifier).debug("Closing in-flight MCP connection attempt", { reason: e3 });
        const n3 = Promise.resolve().then(() => t3.close()).catch((e4) => {
          J_(this.identifier).debug("Error closing in-flight MCP connection attempt:", e4);
        });
        return this.closePromises.set(t3, n3), n3;
      }
    }
    function F_(e3, t3) {
      return new Promise((r3, n3) => {
        const o2 = setTimeout(() => n3(new Error(`Health probe timed out after ${t3}ms`)), t3);
        e3.then((e4) => {
          clearTimeout(o2), r3(e4);
        }, (e4) => {
          clearTimeout(o2), n3(e4);
        });
      });
    }
    function q_(e3) {
      return "failed" === e3.type && e3.exhausted ? "conn=failed(exhausted)" : `conn=${e3.type}`;
    }
    class z_ {
      constructor(e3, t3, r3, n3, o2, s2) {
        this.config = r3, this.host = n3, this.callbacks = o2, this.connectionState = { type: "idle" }, this.authState = { type: "unknown" }, this.lastStatus = { type: "disconnected" }, this.eventLog = new Ee.Xo(), this.subscribedResources = /* @__PURE__ */ new Set(), this.pendingElicitationRequests = /* @__PURE__ */ new Map(), this.currentElicitationProvider = /* @__PURE__ */ new Map(), this.currentToolCallContext = /* @__PURE__ */ new Map(), this.toolNameMap = /* @__PURE__ */ new Map(), this.queue = [], this.draining = false, this.disposed = false, this.probeInFlightCount = 0, this.clientGeneration = 0, this.omitReconnectSessionCaptureForNextAttempt = false, this.consecutiveStreamableHttpSession404Count = 0, this.identifier = e3, this.serverInfo = t3, this.serverName = s2, this.activities = new Ee.CX((e4) => (0, Ee.k8)(e4, { getStabilityThresholdMs: () => (0, b_.dg)(this.getReconnectConfigContext()), getDegradedProbeDelayMs: () => {
          const e5 = Ye(this.identifier);
          return void 0 !== e5 ? Math.max(e5, (0, b_.sv)(this.getReconnectConfigContext())) : (0, b_.sv)(this.getReconnectConfigContext());
        }, getKeepaliveProbeDelayMs: () => (0, b_.wW)(this.getReconnectConfigContext()), getKeepaliveJitterMs: () => (0, b_.Tr)(this.getReconnectConfigContext()), getKeepaliveProbesEnabled: () => !this.shouldSuppressConnectedKeepaliveProbe(), getRetryNonRetryableAutomatically: () => true === (0, ke.v)("retryNonRetryableAutomatically", this.getReconnectConfigContext()) })), this.serviceStarter = this.createServiceStarter();
      }
      connect() {
        this.enqueue([{ target: "connection", kind: "connect_start" }]);
      }
      closeCurrentServerInstance(e3) {
        if (this.activeRuntimeAuthEventSink = void 0, this.serverInstance) {
          this.nullifyCallbacks(), e3.captureSession && this.captureReconnectSessionInfo(this.serverInstance);
          try {
            this.serverInstance.client.close();
          } catch (t3) {
            J_(this.identifier).debug(`Error closing client during ${e3.reason}: ${t3 instanceof Error ? t3.message : String(t3)}`);
          }
          this.serverInstance = void 0;
        }
      }
      cancelPendingElicitations() {
        for (const [e3, t3] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(e3), t3({ action: "cancel" });
      }
      suspendTransport() {
        this.disposed || "connected" !== this.connectionState.type || (this.reconnectSessionInfo = void 0, this.closeCurrentServerInstance({ captureSession: false, reason: "idle suspend" }), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.enqueue([{ target: "connection", kind: "idle_suspend" }]));
      }
      dispose() {
        this.disposed || (this.disposed = true, this.consecutiveStreamableHttpSession404Count = 0, this.activities.dispose(), this.activeConnectionAttempt?.requestClose("dispose"), this.closeCurrentServerInstance({ captureSession: true, reason: "dispose" }), this.subscribedResources.clear(), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.queue.length = 0);
      }
      getConnectPromise() {
        return this.activities.getServicePromise("connection_attempt");
      }
      enqueue(e3) {
        this.disposed || (this.queue.push(...e3), this.draining || this.drain());
      }
      drain() {
        let e3;
        this.draining = true;
        const t3 = this.connectionState, r3 = this.authState;
        let n3;
        for (; this.queue.length > 0; ) {
          const t4 = this.queue.shift();
          if (this.disposed) break;
          const r4 = this.connectionState, o2 = this.authState, s2 = (0, Ee.K9)(this.connectionState, this.authState, t4, this.config);
          this.connectionState = s2.connectionState, this.authState = s2.authState, e3 = s2.projectedStatus;
          const i3 = `${t4.target}:${t4.kind}`, a3 = `${q_(r4)},auth=${o2.type}`, c2 = `${q_(s2.connectionState)},auth=${s2.authState.type}`;
          this.eventLog.push({ timestamp: Date.now(), event: i3, stateBefore: a3, stateAfter: c2 });
          if (a3 !== c2) {
            const e4 = "failed" === s2.connectionState.type && true === s2.connectionState.exhausted, r5 = e4 || "connect_failure" === t4.kind || "transport_error" === t4.kind || "transport_closed" === t4.kind || "session_invalidated" === t4.kind, n4 = "connect_start" === t4.kind || "connect_success" === t4.kind || "request_degraded" === t4.kind || "server_removed" === t4.kind, o3 = { event: i3, stateBefore: a3, stateAfter: c2, transportType: this.actualTransportType ?? this.serverInfo.type, serverName: this.serverName };
            if (r5) {
              const r6 = t4;
              (0, Ee.J3)(r6, e4) ? J_(this.identifier).warn(`[V2 FSM] ${i3}: ${a3} -> ${c2}`, o3) : J_(this.identifier).debug(`[V2 FSM] ${i3}: ${a3} -> ${c2}`, o3);
            } else n4 ? J_(this.identifier).info(`[V2 FSM] ${i3}: ${a3} -> ${c2}`, o3) : J_(this.identifier).debug(`[V2 FSM] ${i3}: ${a3} -> ${c2}`, o3);
          }
          n3 = t4.kind, "connection" === t4.target && "connection_stabilized" === t4.kind && (this.consecutiveStreamableHttpSession404Count = 0);
          r4 !== s2.connectionState && (this.activities.reconcile(r4, s2.connectionState, (e4) => this.enqueue(e4)), this.activities.reconcileServices(r4, s2.connectionState, (e4) => this.enqueue(e4), this.serviceStarter));
        }
        if (void 0 !== e3 && this.hasStatusChanged(e3)) {
          this.lastStatus = e3, this.callbacks.onStatusChanged(this.identifier, e3);
          (t3.type !== this.connectionState.type || r3.type !== this.authState.type) && (0, Pe.FM)("mcp.ext.fsm_transitions", 1, "increment", [`conn_before:${t3.type}`, `conn_after:${this.connectionState.type}`, `auth_before:${r3.type}`, `auth_after:${this.authState.type}`, `event:${n3 ?? "unknown"}`, `transport:${this.actualTransportType ?? this.serverInfo.type}`]);
        }
        this.draining = false;
      }
      createServiceStarter() {
        return (e3, t3) => {
          switch (e3) {
            case "connection_attempt":
              return this.startConnectionService(t3);
            case "health_probe":
              return this.startHealthProbeService(t3);
            default:
              return e3;
          }
        };
      }
      startConnectionService(e3) {
        let t3 = false;
        const r3 = new D_(this.identifier);
        return { handle: { cancel: () => {
          t3 = true, r3.requestClose("cancel");
        } }, promise: this.runConnectionAttempt(() => t3, e3, r3).finally(() => {
          this.activeConnectionAttempt === r3 && (this.activeConnectionAttempt = void 0);
        }) };
      }
      async runConnectionAttempt(e3, t3, r3) {
        const n3 = Date.now(), o2 = this.reconnectSessionInfo, s2 = this.adapter;
        if (this.activeRuntimeAuthEventSink = void 0, e3()) return;
        if (this.omitReconnectSessionCaptureForNextAttempt && !this.serverInstance && (this.omitReconnectSessionCaptureForNextAttempt = false, this.reconnectSessionInfo = void 0), this.serverInstance) {
          this.nullifyCallbacks();
          const e4 = this.omitReconnectSessionCaptureForNextAttempt;
          e4 && (this.omitReconnectSessionCaptureForNextAttempt = false), e4 || this.captureReconnectSessionInfo(this.serverInstance);
          try {
            this.serverInstance.client.close();
          } catch (e5) {
            J_(this.identifier).debug(`Error closing client during reconnect: ${e5 instanceof Error ? e5.message : String(e5)}`);
          }
          this.serverInstance = void 0, e4 && (this.reconnectSessionInfo = void 0);
        }
        for (const [e4, t4] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(e4), t4({ action: "cancel" });
        const i3 = ++this.clientGeneration;
        let a3 = this.createConnectionAttemptAuthEventSink(), c2 = this.createSdkClient();
        r3.setClient(c2), this.activeConnectionAttempt = r3;
        const u2 = "streamableHttp" !== this.actualTransportType;
        let l2;
        try {
          l2 = await Ot(this.identifier, this.serverInfo, c2, this.host, a3, this.reconnectSessionInfo, { allowDeprecatedSseFallback: u2 });
        } catch (e4) {
          const t4 = e4 instanceof Error ? e4 : new Error(String(e4));
          l2 = { connectResult: { ok: false, error: t4.message, isRetryable: (0, Ee.FI)(t4, this.serverInfo.type).retryable } };
        }
        if (!l2.connectResult.ok && (0, Ee.I5)(l2.connectResult)) {
          this.reconnectSessionInfo = void 0, J_(this.identifier).info("Streamable HTTP reconnect: retrying connection with fresh initialize (no cached session id)");
          try {
            await r3.closeCurrent("session-reuse-retry");
          } catch {
          }
          if (e3()) return;
          c2 = this.createSdkClient(), r3.setClient(c2), a3 = this.createConnectionAttemptAuthEventSink();
          try {
            l2 = await Ot(this.identifier, this.serverInfo, c2, this.host, a3, void 0, { allowDeprecatedSseFallback: u2 });
          } catch (e4) {
            const t4 = e4 instanceof Error ? e4 : new Error(String(e4));
            l2 = { connectResult: { ok: false, error: t4.message, isRetryable: (0, Ee.FI)(t4, this.serverInfo.type).retryable } };
          }
        }
        if (e3()) return void await r3.requestClose("cancelled-after-connect");
        const d2 = l2.connectResult, p2 = [];
        for (const e4 of a3.getConnectPhaseEvents()) "auth" === e4.target && "auth_required" === e4.kind || p2.push(e4);
        if (d2.ok) J_(this.identifier).info(`Successfully connected to ${d2.actualType} server`), this.actualTransportType = d2.actualType, this.serverInstance = { transport: d2.transport, client: d2.client, type: d2.actualType, serverInfo: this.serverInfo }, r3.commit(c2), this.reconnectSessionInfo = void 0, this.wireTransportCallbacks(c2, i3), this.activateRuntimeAuthEventSinkIfEligible(a3), o2 && s2 ? (s2.client = c2, s2.invalidateToolsCacheKeepingStale(), s2.invalidateInstructionsCacheKeepingStale(), s2.invalidateResourcesCacheKeepingStale(), this.adapter = s2, this.callbacks.onAdapterCreated(this.identifier, s2)) : this.createAndRegisterAdapter(c2), this.subscribeToResourcesIfSupported(c2), $_({ durationMs: Date.now() - n3, status: "success", transport: d2.actualType, commandsVersion: "v2" }), p2.push({ target: "connection", kind: "connect_success" });
        else if (d2.needsAuth) {
          const e4 = { authUrl: (0, We.QD)(d2.authorizationUrl, { includePath: false }) };
          J_(this.identifier).info("MCP OAuth needsAuth (v2)", (0, Pe.UZ)({ event: "mcp_oauth_needs_auth_transition", commandsVersion: "v2", transportType: this.serverInfo.type, needsAuthReason: d2.needsAuthReason, refreshTokenPresent: d2.refreshTokenPresent, hadAuthRequiredEvent: d2.hadAuthRequiredEvent, authorizationUrlPresent: Boolean(d2.authorizationUrl), siblingRefreshRace: Boolean(d2.oauthRefreshDiagnostics?.siblingRefreshRace), ...d2.oauthRefreshDiagnostics ?? {}, ...e4 })), $_({ durationMs: Date.now() - n3, status: "needs_auth", transport: this.serverInfo.type, commandsVersion: "v2", failureReason: "auth", retryable: true }), d2.transport && (this.serverInstance = { transport: d2.transport, client: c2, type: "stdio" === this.serverInfo.type ? "stdio" : "sse" === this.serverInfo.type ? "sse" : "streamableHttp", serverInfo: this.serverInfo }, r3.commit(c2), this.wireTransportCallbacks(c2, i3), this.activateRuntimeAuthEventSinkIfEligible(a3)), p2.push({ target: "connection", kind: "connect_failure", error: "Authorization required", isRetryable: true }, { target: "auth", kind: "auth_required", authorizationUrl: d2.authorizationUrl });
        } else {
          await r3.closeCurrent("connect-failure");
          const e4 = new Error(d2.error), t4 = (0, Ee.FI)(e4, this.serverInfo.type);
          (0, Ee.KS)(e4, this.serverInfo.type) && (this.reconnectSessionInfo = void 0);
          let o3 = d2.isRetryable ?? t4.retryable;
          if ("streamableHttp" === this.serverInfo.type) {
            const t5 = (0, M_.Vi)(this.getReconnectConfigContext()), r4 = (0, M_.Dk)({ currentCount: this.consecutiveStreamableHttpSession404Count, sawSession404: (0, Ee.KS)(e4, "streamableHttp"), threshold: t5 });
            this.consecutiveStreamableHttpSession404Count = r4.nextCount, r4.shouldTombstone && (o3 = false, J_(this.identifier).warn(`Tombstoning streamable HTTP connection after ${t5} consecutive session HTTP 404 responses; automatic retry disabled`, { transportType: "streamableHttp" }));
          }
          const s3 = { ...t4, retryable: o3 }, i4 = Date.now() - n3, a4 = { transportType: this.serverInfo.type, reason: s3.reason, httpStatus: s3.httpStatus, retryable: s3.retryable, durationMs: i4 };
          s3.retryable ? J_(this.identifier).debug(`Connection failed: ${d2.error}`, a4) : J_(this.identifier).warn(`Connection failed: ${d2.error}`, a4), (0, Pe.ef)({ identifier: this.identifier, phase: "connection", error: e4, serverType: this.serverInfo.type, classification: s3, captureException: !s3.retryable && "auth" !== s3.reason, extraData: { transport: this.serverInfo.type } }), $_({ durationMs: Date.now() - n3, status: "error", transport: this.serverInfo.type, commandsVersion: "v2", failureReason: s3.reason, retryable: s3.retryable, httpStatusCode: s3.httpStatus }), p2.push({ target: "connection", kind: "connect_failure", error: d2.error, isRetryable: o3 });
        }
        t3(p2);
      }
      createConnectionAttemptAuthEventSink() {
        return new j_((e3, t3) => this.handleRuntimeAuthEvent(e3, t3));
      }
      isLazyAuthServer() {
        return "stdio" !== this.serverInfo.type && Oe(this.serverInfo.serverUrl);
      }
      activateRuntimeAuthEventSinkIfEligible(e3) {
        this.isLazyAuthServer() && (this.activeRuntimeAuthEventSink = e3);
      }
      handleRuntimeAuthEvent(e3, t3) {
        this.disposed || (this.activeRuntimeAuthEventSink === e3 ? (J_(this.identifier).info(`Dispatching runtime auth event '${t3.kind}' to FSM`, (0, Pe.UZ)({ event: "mcp_runtime_auth_event", commandsVersion: "v2", transportType: this.actualTransportType ?? this.serverInfo.type, kind: t3.kind, ..."auth_required" === t3.kind ? { authUrl: (0, We.QD)(t3.authorizationUrl, { includePath: false }) } : {} })), this.enqueue([t3])) : J_(this.identifier).debug(`Ignoring runtime auth event '${t3.kind}' from a superseded or ineligible connection attempt`));
      }
      wireTransportCallbacks(e3, t3) {
        e3.onerror = (e4) => {
          if (this.clientGeneration !== t3) return void J_(this.identifier).debug(`Ignoring stale onerror callback (gen=${t3}, current=${this.clientGeneration})`);
          if (this.probeInFlightCount > 0) {
            const t4 = (0, Ne.RI)(e4);
            if (429 === t4 || 503 === t4) return;
          }
          const r3 = this.actualTransportType ?? this.serverInfo.type, n3 = (0, Ee.Vz)(e4, { authState: this.authState, transportType: r3 });
          if (n3.length > 0) {
            const t4 = (0, Ee.FI)(e4, r3), o2 = "streamableHttp" === this.serverInfo.type && n3.some((e5) => "connection" === e5.target && "session_invalidated" === e5.kind) && (0, Ee.KS)(e4, "streamableHttp");
            if ("streamableHttp" === this.serverInfo.type) {
              const n4 = (0, M_.Vi)(this.getReconnectConfigContext()), s3 = (0, M_.Dk)({ currentCount: this.consecutiveStreamableHttpSession404Count, sawSession404: o2, threshold: n4 });
              if (this.consecutiveStreamableHttpSession404Count = s3.nextCount, s3.shouldTombstone) {
                this.omitReconnectSessionCaptureForNextAttempt = true;
                const o3 = { ...t4, retryable: false };
                return J_(this.identifier).warn(`Tombstoning streamable HTTP transport after ${n4} consecutive session HTTP 404 responses; automatic retry disabled`, { transportType: r3, reason: t4.reason, httpStatus: t4.httpStatus, authState: this.authState.type }), J_(this.identifier).error(`Client error: ${e4.message}`, e4, { transportType: r3, reason: o3.reason, httpStatus: o3.httpStatus, retryable: false, authState: this.authState.type }), (0, Pe.ef)({ identifier: this.identifier, phase: "transport", error: e4, serverType: r3, classification: o3, captureException: !o3.retryable && "auth" !== o3.reason }), void this.enqueue([{ target: "connection", kind: "transport_error", error: e4.message, isRetryable: false }]);
              }
            }
            const s2 = { transportType: r3, reason: t4.reason, httpStatus: t4.httpStatus, retryable: t4.retryable, authState: this.authState.type }, i3 = (0, Ee.ZR)(e4, r3, t4);
            "warn" === i3 ? J_(this.identifier).error(`Client error: ${e4.message}`, e4, s2) : "debug" === i3 && J_(this.identifier).debug(`Client error: ${e4.message}`, s2), (0, Pe.ef)({ identifier: this.identifier, phase: "transport", error: e4, serverType: r3, classification: t4, captureException: !t4.retryable && "auth" !== t4.reason }), n3.some((e5) => "connection" === e5.target && "session_invalidated" === e5.kind) && (this.omitReconnectSessionCaptureForNextAttempt = true), this.enqueue(n3);
          }
        }, e3.onclose = () => {
          if (this.clientGeneration !== t3) return void J_(this.identifier).debug(`Ignoring stale onclose callback (gen=${t3}, current=${this.clientGeneration})`);
          const e4 = this.actualTransportType ?? this.serverInfo.type, r3 = (0, Ee.fX)({ authState: this.authState, transportType: e4 });
          r3.length > 0 && (J_(this.identifier).debug("Client closed", { transportType: e4, authState: this.authState.type }), this.enqueue(r3));
        };
      }
      createSdkClient() {
        const e3 = new on({ name: "cursor-vscode", version: "1.0.0" }, { capabilities: { elicitation: { form: {} }, roots: { listChanged: false }, extensions: { "io.modelcontextprotocol/ui": { mimeTypes: ["text/html;profile=mcp-app"] } } } });
        return e3.setRequestHandler(ue.WQ, (e4) => (J_(this.identifier).debug("ListRootsRequest received"), { roots: this.host.getWorkspaceFolders().map((e5) => ({ uri: e5.uri.toString(), name: e5.name })) })), e3.setNotificationHandler(ue.fH, (e4) => {
          J_(this.identifier).debug("ToolListChangedNotification received"), this.adapter?.invalidateToolsCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), e3.setNotificationHandler(ue.hh, (e4) => {
          J_(this.identifier).debug("ResourceListChangedNotification received"), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), e3.setNotificationHandler(ue.cL, (e4) => {
          J_(this.identifier).debug(`ResourceUpdatedNotification received for URI: ${e4.params?.uri}`), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), e3.setNotificationHandler(ue.br, () => {
          J_(this.identifier).debug("PromptListChangedNotification received"), this.callbacks.onOfferingsChanged?.(this.identifier);
        }), e3.setRequestHandler(ue.$9, async (e4) => {
          J_(this.identifier).debug(`ElicitRequest received: ${e4.params.message}`);
          const t3 = e4.params, r3 = "requestedSchema" in t3, n3 = this.currentElicitationProvider.get(this.identifier);
          if (n3 && r3) try {
            const e5 = await n3.elicit({ message: t3.message, requestedSchema: t3.requestedSchema });
            return { action: e5.action, content: e5.content };
          } catch (e5) {
            return J_(this.identifier).error(`Error in elicitation provider: ${e5 instanceof Error ? e5.message : String(e5)}`, e5 instanceof Error ? e5 : void 0), { action: "decline" };
          }
          return new Promise((e5) => {
            const n4 = `${this.identifier}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, o2 = this.currentToolCallContext.get(this.identifier), s2 = { id: n4, message: t3.message, ...r3 ? { requestedSchema: t3.requestedSchema } : { url: t3.url, elicitationId: t3.elicitationId }, serverIdentifier: this.identifier, toolCallId: o2 };
            this.pendingElicitationRequests.set(n4, e5), this.host.executeCommand("mcp.elicitationRequest", { request: s2 });
          });
        }), e3;
      }
      createAndRegisterAdapter(e3) {
        const t3 = this.serverName ?? this.stripIdentifierPrefix(this.identifier);
        let r3;
        "streamableHttp" === this.serverInfo.type || "sse" === this.serverInfo.type ? r3 = { url: this.serverInfo.serverUrl, headers: this.serverInfo.headers } : "stdio" === this.serverInfo.type && (r3 = { command: this.serverInfo.command, args: this.serverInfo.args, env: this.serverInfo.env });
        const n3 = { executeCommand: (e4, ...t4) => this.host.executeCommand(e4, ...t4), getStatus: () => this.lastStatus, getAuthState: () => this.authState, getServerInfo: () => this.serverInfo, dispatchEvents: (e4, t4, r4) => this.enqueue(t4), reinitializeStreamableHttpConnection: (e4, t4, r4) => this.handleSessionReinit(r4), toolNameMap: this.toolNameMap, currentElicitationProvider: this.currentElicitationProvider, currentToolCallContext: this.currentToolCallContext, getInlineReconnectCooldownMs: () => (0, N_.C)(this.getReconnectConfigContext()) };
        this.adapter = new A_(e3, t3, this.identifier, n3, r3), this.callbacks.onAdapterCreated(this.identifier, this.adapter);
      }
      async handleSessionReinit(e3) {
        await this.withReconnectLock(async () => {
          let t3 = this.reconnectSessionInfo;
          if (this.serverInstance) {
            this.captureReconnectSessionInfo(this.serverInstance), t3 = this.reconnectSessionInfo, this.nullifyCallbacks();
            try {
              this.serverInstance.client.close();
            } catch (e4) {
              J_(this.identifier).debug(`Error closing client during session reinit: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }
            this.serverInstance = void 0;
          }
          for (const [e4, t4] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(e4), t4({ action: "cancel" });
          let r3 = "connecting" === this.connectionState.type && void 0 === this.serverInstance ? this.getConnectPromise() : void 0;
          if (r3 || (this.reconnectSessionInfo = void 0, this.omitReconnectSessionCaptureForNextAttempt = true, this.enqueue([{ target: "connection", kind: "session_invalidated" }]), r3 = this.getConnectPromise()), !r3) throw new Error("Failed to start MCP session reinitialization");
          await r3;
          const n3 = this.serverInstance;
          if (!n3) throw this.reconnectSessionInfo = t3, new Error(this.getSessionReinitFailureMessage());
          null != e3 && (e3.client = n3.client, e3.invalidateToolsCacheKeepingStale(), e3.invalidateInstructionsCacheKeepingStale(), e3.invalidateResourcesCacheKeepingStale(), this.adapter = e3, this.callbacks.onAdapterCreated(this.identifier, e3));
        });
      }
      getAdapter() {
        return this.adapter;
      }
      getServerInstance() {
        return this.serverInstance;
      }
      getConnectionState() {
        return this.connectionState;
      }
      getAuthState() {
        return this.authState;
      }
      getLastStatus() {
        return this.lastStatus;
      }
      getServerInfo() {
        return this.serverInfo;
      }
      getReconnectConfigContext() {
        return { identifier: this.identifier, serverInfo: this.serverInfo };
      }
      shouldSuppressConnectedKeepaliveProbe() {
        return "stdio" !== this.serverInfo.type && ("unknown" !== this.authState.type || void 0 !== this.serverInfo.auth);
      }
      getEventLog() {
        return this.eventLog.getEntries();
      }
      isDisposed() {
        return this.disposed;
      }
      startHealthProbeService(e3) {
        let t3 = false;
        return { handle: { cancel: () => {
          t3 = true;
        } }, promise: this.runHealthProbe(() => t3, e3) };
      }
      async runHealthProbe(e3, t3) {
        const r3 = this.adapter;
        if (!r3) return void (e3() || (this.emitFalseConnectedHealthProbeMetric("no adapter"), t3([{ target: "connection", kind: "health_probe_failed", error: "no adapter" }])));
        const n3 = r3.client;
        try {
          this.probeInFlightCount += 1;
          try {
            const r4 = (0, b_.qA)(this.getReconnectConfigContext());
            return await F_(n3.ping(), r4), void (e3() || t3([{ target: "connection", kind: "health_probe_succeeded" }]));
          } catch (r4) {
            if (e3()) return;
            if ((function(e4) {
              if (!(e4 instanceof Error)) return false;
              const t4 = (0, Ne.RI)(e4);
              return 429 === t4 || 503 === t4;
            })(r4)) return this.emitFalseConnectedHealthProbeMetric(r4), void t3([{ target: "connection", kind: "health_probe_failed", error: r4 instanceof Error ? r4.message : String(r4) }]);
          }
          try {
            const r4 = (0, b_.qA)(this.getReconnectConfigContext()), o2 = n3.getServerCapabilities() ?? {};
            if (o2.tools) await F_(n3.listTools(), r4);
            else if (o2.resources) await F_(n3.listResources(), r4);
            else {
              if (!o2.prompts) return void (e3() || (this.emitFalseConnectedHealthProbeMetric("ping timeout, no fallback capability"), t3([{ target: "connection", kind: "health_probe_failed", error: "ping timeout, no fallback capability" }])));
              await F_(n3.listPrompts(), r4);
            }
            e3() || t3([{ target: "connection", kind: "health_probe_succeeded" }]);
          } catch (r4) {
            if (e3()) return;
            this.emitFalseConnectedHealthProbeMetric(r4), t3([{ target: "connection", kind: "health_probe_failed", error: r4 instanceof Error ? r4.message : String(r4) }]);
          }
        } catch (r4) {
          J_(this.identifier).warn(`Health probe unexpected error: ${r4 instanceof Error ? r4.message : String(r4)}`), e3() || (this.emitFalseConnectedHealthProbeMetric(r4), t3([{ target: "connection", kind: "health_probe_failed", error: String(r4) }]));
        } finally {
          this.probeInFlightCount = Math.max(0, this.probeInFlightCount - 1);
        }
      }
      emitFalseConnectedHealthProbeMetric(e3) {
        if ("connected" !== this.connectionState.type) return;
        const t3 = this.actualTransportType ?? this.serverInfo.type, r3 = ["outcome:error", `source_state:${this.connectionState.type}`, `transport:${t3}`, "commands_version:v2"], n3 = (0, Ee.FI)(e3, t3);
        r3.push(`failure_reason:${n3.reason}`), r3.push(`retryable:${String(n3.retryable)}`), void 0 !== n3.httpStatus && r3.push(`status_code:${String(n3.httpStatus)}`), (0, Pe.FM)("mcp.ext.health_probe", 1, "increment", r3);
      }
      resolveElicitation(e3, t3) {
        const r3 = this.pendingElicitationRequests.get(e3);
        return !!r3 && (this.pendingElicitationRequests.delete(e3), r3(t3), true);
      }
      nullifyCallbacks() {
        this.serverInstance && (this.serverInstance.client.onclose = void 0, this.serverInstance.client.onerror = void 0);
      }
      captureReconnectSessionInfo(e3) {
        if ("streamableHttp" !== e3.type) return void (this.reconnectSessionInfo = void 0);
        const t3 = e3.transport, r3 = t3.sessionId;
        this.reconnectSessionInfo = r3 ? { sessionId: r3, protocolVersion: t3.protocolVersion } : void 0;
      }
      hasStatusChanged(e3) {
        const t3 = this.lastStatus;
        return e3.type !== t3.type || ("error" === e3.type && "error" === t3.type ? e3.error !== t3.error || e3.isRetryable !== t3.isRetryable : "needsAuth" === e3.type && "needsAuth" === t3.type ? e3.authorizationUrl !== t3.authorizationUrl : "degraded" === e3.type && "degraded" === t3.type && e3.reason !== t3.reason);
      }
      async withReconnectLock(e3) {
        const t3 = this.reconnectLock;
        if (t3) return void await t3;
        const r3 = e3().finally(() => {
          this.reconnectLock === r3 && (this.reconnectLock = void 0);
        });
        this.reconnectLock = r3, await r3;
      }
      getSessionReinitFailureMessage() {
        switch (this.lastStatus.type) {
          case "error":
            return this.lastStatus.error;
          case "needsAuth":
            return "Authorization required";
          case "disconnected":
          case "initializing":
          case "connected":
          case "degraded":
            return "Failed to reinitialize MCP session";
          default:
            return this.lastStatus;
        }
      }
      async subscribeToResourcesIfSupported(e3) {
        try {
          const t3 = e3.getServerCapabilities() ?? { resources: false };
          if (!t3.resources || "object" != typeof t3.resources || true !== t3.resources.subscribe) return;
          const r3 = await e3.listResources();
          if (!r3?.resources?.length) return;
          for (const t4 of r3.resources) try {
            await e3.subscribeResource({ uri: t4.uri }), this.subscribedResources.add(t4.uri);
          } catch (e4) {
            J_(this.identifier).debug(`Failed to subscribe to resource ${t4.uri}: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
          this.subscribedResources.size > 0 && J_(this.identifier).info(`Subscribed to ${this.subscribedResources.size} resources`);
        } catch (e4) {
          J_(this.identifier).debug(`Error subscribing to resources: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
      }
      stripIdentifierPrefix(e3) {
        if (e3.startsWith("user-")) return e3.slice(5);
        if (e3.startsWith("project-")) {
          const t3 = e3.indexOf("-"), r3 = e3.indexOf("-", t3 + 1);
          return r3 > 0 ? e3.slice(r3 + 1) : e3.slice(8);
        }
        return e3;
      }
    }
    var U_ = function(e3, t3, r3) {
      if (null != t3) {
        if ("object" != typeof t3 && "function" != typeof t3) throw new TypeError("Object expected.");
        var n3, o2;
        if (r3) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n3 = t3[Symbol.asyncDispose];
        }
        if (void 0 === n3) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n3 = t3[Symbol.dispose], r3 && (o2 = n3);
        }
        if ("function" != typeof n3) throw new TypeError("Object not disposable.");
        o2 && (n3 = function() {
          try {
            o2.call(this);
          } catch (e4) {
            return Promise.reject(e4);
          }
        }), e3.stack.push({ value: t3, dispose: n3, async: r3 });
      } else r3 && e3.stack.push({ async: true });
      return t3;
    }, B_ = /* @__PURE__ */ (function(e3) {
      return function(t3) {
        function r3(r4) {
          t3.error = t3.hasError ? new e3(r4, t3.error, "An error was suppressed during disposal.") : r4, t3.hasError = true;
        }
        var n3, o2 = 0;
        return (function e4() {
          for (; n3 = t3.stack.pop(); ) try {
            if (!n3.async && 1 === o2) return o2 = 0, t3.stack.push(n3), Promise.resolve().then(e4);
            if (n3.dispose) {
              var s2 = n3.dispose.call(n3.value);
              if (n3.async) return o2 |= 2, Promise.resolve(s2).then(e4, function(t4) {
                return r3(t4), e4();
              });
            } else o2 |= 1;
          } catch (e5) {
            r3(e5);
          }
          if (1 === o2) return t3.hasError ? Promise.reject(t3.error) : Promise.resolve();
          if (t3.hasError) throw t3.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3) {
      var n3 = new Error(r3);
      return n3.name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
    });
    const L_ = ["mcp_version:snapshots"];
    function V_(e3, t3, r3 = "distribution") {
      (0, Pe.FM)(e3, t3, r3, L_);
    }
    function K_(e3) {
      if (!e3) return { status: "initializing" };
      switch (e3.type) {
        case "connected":
          return { status: "connected" };
        case "degraded":
          return { status: "degraded", statusDetail: e3.reason };
        case "disconnected":
          return { status: "disconnected" };
        case "error":
          return { status: "error", statusDetail: e3.error, statusRetryable: e3.isRetryable };
        case "initializing":
          return { status: "initializing" };
        case "needsAuth":
          return { status: "needsAuth", statusDetail: e3.authorizationUrl };
        default: {
          const t3 = e3;
          return { status: "error", statusDetail: `Unknown status: ${JSON.stringify(t3)}` };
        }
      }
    }
    async function Z_(e3, t3, r3, n3, o2, s2) {
      const { status: i3, statusDetail: a3, statusRetryable: c2 } = K_(n3);
      if ("needsAuth" === i3 && true === s2?.preserveOfferingsOnNeedsAuth) return { serverIdentifier: t3, serverName: r3.serverName, status: i3, statusDetail: a3, statusRetryable: c2, tools: o2?.tools ?? [], resources: o2?.resources ?? [], prompts: o2?.prompts ?? [], instructions: o2?.instructions };
      const [u2, l2, d2, p2] = await (async function(e4, t4, r4, n4, o3) {
        const s3 = { stack: [], error: void 0, hasError: false };
        try {
          const i4 = U_(s3, Cr(e4.withName(t4)), false);
          i4.span.setAttribute("mcp.lease.connection", (0, Pe.OV)());
          for (const [e5, t5] of Object.entries(r4)) i4.span.setAttribute(e5, t5);
          const a4 = Date.now();
          try {
            const e5 = await n4(i4.ctx), t5 = Date.now() - a4;
            return i4.span.setAttribute("mcp.op.duration_ms", String(t5)), i4.span.setAttribute("mcp.op.outcome", "success"), o3?.(e5, i4.span, t5), e5;
          } catch (e5) {
            const t5 = Date.now() - a4;
            throw i4.span.setAttribute("mcp.op.duration_ms", String(t5)), i4.span.setAttribute("mcp.op.outcome", "error"), i4.span.setAttribute("mcp.op.error", e5 instanceof Error ? e5.message.slice(0, 200) : String(e5).slice(0, 200)), e5;
          }
        } catch (e5) {
          s3.error = e5, s3.hasError = true;
        } finally {
          B_(s3);
        }
      })(e3, `fetchServerSnapshot(${t3})`, { "mcp.fetch.identifier": t3, "mcp.fetch.status": i3 }, async (e4) => Promise.allSettled([r3.getTools(e4), r3.listResources(e4), r3.listPrompts(e4), r3.getInstructions(e4)]), (e4, t4, r4) => {
        V_("mcp.snapshot.fetch_all_duration_ms", r4), t4.setAttribute("mcp.fetch.tools_ok", String("fulfilled" === e4[0].status)), t4.setAttribute("mcp.fetch.resources_ok", String("fulfilled" === e4[1].status)), t4.setAttribute("mcp.fetch.prompts_ok", String("fulfilled" === e4[2].status)), t4.setAttribute("mcp.fetch.instructions_ok", String("fulfilled" === e4[3].status));
      });
      "rejected" === u2.status && V_("mcp.snapshot.fetch_tools_error", 1, "increment"), "rejected" === l2.status && V_("mcp.snapshot.fetch_resources_error", 1, "increment"), "rejected" === d2.status && V_("mcp.snapshot.fetch_prompts_error", 1, "increment"), "rejected" === p2.status && V_("mcp.snapshot.fetch_instructions_error", 1, "increment");
      const f2 = "fulfilled" === u2.status ? u2.value : o2?.tools ?? [], h2 = "fulfilled" === l2.status ? l2.value.resources : o2?.resources ?? [], m2 = "fulfilled" === d2.status ? d2.value : o2?.prompts ?? [], g2 = "fulfilled" === p2.status ? p2.value : o2?.instructions;
      return { serverIdentifier: t3, serverName: r3.serverName, status: i3, statusDetail: a3, statusRetryable: c2, tools: f2, resources: h2, prompts: m2, instructions: g2 };
    }
    async function W_(e3, t3) {
      const r3 = [...new Set(t3)].filter((t4) => void 0 !== e3.get(t4));
      0 !== r3.length && await Promise.all(r3.map((t4) => e3.update(t4, void 0)));
    }
    function H_(e3) {
      return g.getLogger(e3);
    }
    function Y_(e3) {
      if (e3) return (0, hn.createHash)("sha256").update(e3).digest("hex").slice(0, 12);
    }
    function G_(e3) {
      return { ...(0, c.O3I)(e3) };
    }
    async function X_(e3, t3, r3, n3) {
      try {
        await n3("mcp.oauthRefreshFailed", { identifier: e3, path: t3, errorName: r3 instanceof Error ? r3.name : null != r3 ? typeof r3 : void 0, errorMessage: r3 instanceof Error ? r3.message : r3 ? String(r3) : void 0, isOAuthError: "object" == typeof r3 && null !== r3 && "errorCode" in r3 });
      } catch (t4) {
        H_(e3).debug(`Failed to report OAuth refresh failure: ${t4 instanceof Error ? t4.message : String(t4)}`);
      }
    }
    async function Q_(e3, t3, r3) {
      try {
        await r3("mcp.oauthStorageCleared", { identifier: e3, reason: t3 });
      } catch (t4) {
        H_(e3).debug(`Failed to report OAuth storage clear: ${t4 instanceof Error ? t4.message : String(t4)}`);
      }
    }
    function ev(e3) {
      try {
        const t3 = gn.join(e3, "product.json");
        return JSON.parse(mn.readFileSync(t3, "utf8")).urlProtocol || "cursor";
      } catch (e4) {
        return g.warn(`Failed to read urlProtocol from product.json, using cursor as fallback: ${e4 instanceof Error ? e4.message : String(e4)}`), "cursor";
      }
    }
    const tv = ds.Lt;
    async function rv(e3) {
      return (async function(e4) {
        if (!e4) return qe;
        try {
          const t3 = await e4("mcp_oauth_refresh_policy");
          return t3 && "object" == typeof t3 ? { classifyBeforeWipe: "boolean" == typeof t3.classifyBeforeWipe && t3.classifyBeforeWipe } : qe;
        } catch {
          return qe;
        }
      })(e3.getDynamicConfigValue);
    }
    async function nv(e3) {
      const t3 = e3.getDynamicConfigValue;
      if (t3) try {
        return await t3("mcp_oauth_sweep_config");
      } catch {
        return;
      }
    }
    const ov = "mcp_oauth_loopback_redirect";
    async function sv(e3) {
      const t3 = e3.getDynamicConfigValue;
      if (t3) try {
        const e4 = await t3(ov);
        return e4?.ipv4Hosts;
      } catch {
        return;
      }
    }
    async function iv(e3, t3) {
      const r3 = await nv(e3), n3 = "refresh" === t3 ? r3?.refreshLockTtlMs : r3?.registrationLockTtlMs;
      return "number" == typeof n3 && Number.isFinite(n3) && n3 > 0 ? n3 : 1e4;
    }
    const av = Xo({ clearedAtMs: Ho(), expiresAtMs: Ho(), normalizedServerUrl: Wo().optional(), serverOrigin: Wo().optional(), clientId: Wo().optional(), authHash: Wo().optional(), expiredTombstone: Yo().optional() });
    function cv(e3, t3) {
      return (0, c.tBH)(e3, t3);
    }
    function uv(e3) {
      return { authUrl: (0, c.QDM)(e3) };
    }
    function lv(e3) {
      return { serverUrl: (0, c.q2e)(e3) };
    }
    function dv(e3) {
      try {
        const t3 = new URL(e3);
        return { normalizedServerUrl: (0, c.Yl9)(e3), serverOrigin: t3.origin };
      } catch {
        return;
      }
    }
    Xo({ client_id: Wo(), client_secret: Wo().optional(), redirect_uris: Go(Wo()).optional(), grant_types: Go(Wo()).optional(), response_types: Go(Wo()).optional(), token_endpoint_auth_method: Wo().optional(), client_name: Wo().optional(), logo_uri: Wo().optional() }).passthrough();
    const pv = Xo({ redirect_uris: Go(Wo()).optional() });
    function fv() {
      return { workspaceId: a2.cursor.workspaceId() };
    }
    function hv(e3, t3, r3, n3) {
      return (function(e4, t4, r4, n4) {
        const o2 = { id: e4, owner: t4, ...void 0 !== r4 ? { attemptId: r4 } : {}, ...void 0 !== n4?.surface ? { surface: n4.surface } : {} };
        return (0, as.$)(JSON.stringify(o2));
      })(e3, t3, r3, n3);
    }
    const mv = "identifier:v1:", gv = "raw-identifier:v1:";
    function yv(e3) {
      return Buffer.from(e3, "utf8").toString("base64url");
    }
    function _v(e3, t3) {
      return Buffer.from(e3.slice(t3.length), "base64url").toString("utf8");
    }
    const vv = ({ baseKey: e3, identifier: t3 }) => {
      const r3 = (function(e4) {
        return e4.startsWith(mv) || e4.startsWith(gv) || e4.startsWith("url:") || e4.startsWith("oauth-attempt:");
      })(t3) ? `${gv}${yv(t3)}` : t3;
      return (0, ds.S$)({ baseKey: e3, identifier: r3 });
    }, wv = ({ baseKey: e3, identifier: t3 }) => {
      const r3 = yv(t3);
      return (0, ds.S$)({ baseKey: e3, identifier: `${mv}${r3}` });
    }, bv = (e3) => e3.startsWith(mv) ? _v(e3, mv) : e3.startsWith(gv) ? _v(e3, gv) : e3, Sv = (e3) => e3.startsWith(mv), kv = ({ baseKey: e3, serverUrl: t3 }) => (0, ds.vL)({ baseKey: e3, serverUrl: t3 });
    function Ev(e3) {
      return (0, ds.ds)(e3);
    }
    const xv = /* @__PURE__ */ new Map();
    function Tv(e3) {
      return vs(e3);
    }
    function Ov(e3) {
      return { readAttempt: async (t3) => xv.get(t3) ?? e3.oauthAttempts.readAttempt(t3) };
    }
    function Pv(e3) {
      return { ...Ov(e3), getSecret: (t3) => e3.secrets.get(t3) };
    }
    function Iv(e3) {
      if (!e3?.client_secret) return e3;
      const { client_secret: t3, ...r3 } = e3;
      return r3;
    }
    async function Cv(e3, t3) {
      const r3 = xv.has(t3), n3 = await bs(Pv(e3), t3);
      return r3 && n3 && xv.set(t3, n3), n3;
    }
    let Av, $v;
    async function Rv(e3, t3) {
      const r3 = await e3.oauthAttempts.sweepStaleAttempts(t3);
      for (const e4 of r3) xv.delete(e4);
    }
    async function Nv(e3, t3) {
      const r3 = await (async function(e4) {
        const t4 = (await nv(e4))?.oauthAttemptTtlMs;
        return "number" == typeof t4 && Number.isFinite(t4) && t4 > 0 ? t4 : 36e5;
      })(e3), n3 = t3?.maxAgeMs ?? r3;
      if (void 0 !== t3?.maxAgeMs) return void await Rv(e3, n3);
      if ($v) return void await $v;
      const o2 = Date.now();
      if (void 0 !== Av && o2 - Av < 36e5) return;
      Av = o2;
      const s2 = Rv(e3, n3);
      $v = s2;
      try {
        await s2;
      } catch (e4) {
        throw Av = void 0, e4;
      } finally {
        $v === s2 && ($v = void 0);
      }
    }
    async function Mv(e3, t3, r3) {
      const n3 = await (async function(e4, t4, r4) {
        const n4 = t4.id;
        if (t4.owner.workspaceId !== r4.workspaceId) return { kind: "ignored", reason: "workspace_mismatch", identifier: n4, attemptId: t4.attemptId };
        if (!t4.attemptId) return { kind: "ignored", reason: "legacy_callback_unsupported", identifier: n4 };
        const o2 = await bs(e4, t4.attemptId);
        return o2 ? o2.identifier !== n4 || o2.owner.workspaceId !== t4.owner.workspaceId ? { kind: "ignored", reason: "attempt_identifier_mismatch", identifier: n4, attemptId: t4.attemptId } : o2.serverUrl ? o2.clientInformation ? { kind: "resolved", identifier: n4, serverUrl: o2.serverUrl, transportServerUrl: o2.transportServerUrl ?? o2.serverUrl, attemptState: o2 } : { kind: "error", reason: "missing_client_information", identifier: n4, attemptId: t4.attemptId, serverUrl: o2.serverUrl, transportServerUrl: o2.transportServerUrl ?? o2.serverUrl } : { kind: "error", reason: "missing_server_url", identifier: n4, attemptId: t4.attemptId } : { kind: "ignored", reason: "stale_missing_attempt", identifier: n4, attemptId: t4.attemptId };
      })(Pv(e3), t3, r3);
      return "ignored" === n3.kind && "stale_missing_attempt" === n3.reason && g.warn("OAuth callback ignored: no persisted attempt (stale or swept)", p({ event: "oauth_callback_stale_missing_attempt", identifier: n3.identifier, attemptId: t3.attemptId })), n3;
    }
    function Jv(e3) {
      const t3 = e3?.scopes;
      if (!Array.isArray(t3)) return;
      const r3 = t3.filter((e4) => "string" == typeof e4 && e4.length > 0);
      return r3.length ? r3 : void 0;
    }
    async function jv(e3) {
      return Jv(e3.authConfig) ?? await (e3.useProperWellKnown ? (async function(e4) {
        try {
          const t3 = await y_(e4, void 0, (e5, t4) => fetch(e5, { ...t4, signal: AbortSignal.timeout(5e3) }));
          if (!t3) return;
          const r3 = t3.scopes_supported;
          if (!Array.isArray(r3) || !r3.every((e5) => "string" == typeof e5)) return;
          const n3 = r3.filter((e5) => e5.length > 0);
          return n3.length ? n3 : void 0;
        } catch {
          return;
        }
      })(e3.serverUrl) : (async function(e4) {
        try {
          const t3 = new URL("/.well-known/oauth-authorization-server", e4), r3 = await fetch(t3.toString(), { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(5e3) });
          if (!r3.ok) return;
          const n3 = (await r3.json()).scopes_supported;
          if (!Array.isArray(n3) || !n3.every((e5) => "string" == typeof e5)) return;
          const o2 = n3.filter((e5) => e5.length > 0);
          return o2.length ? o2 : void 0;
        } catch {
          return;
        }
      })(e3.serverUrl));
    }
    class Dv {
      constructor(e3) {
        this.loopbackRedirectUrl = i2.tl, this._refreshInProgress = false, this._refreshLockRenewInFlight = false, this.oauthContext = e3.oauthContext, this.appRoot = e3.appRoot, this.executeCommand = e3.executeCommand, this.mcpSharedOAuth = e3.mcpSharedOAuth, this.storageScope = e3.storageScope ?? "canonicalServerUrl", this.serverUrl = e3.serverUrl, this.transportServerUrl = e3.transportServerUrl ?? e3.serverUrl, this.validateResourceURL = (0, c.SAT)(this.serverUrl), this.identifier = e3.identifier, this.callbackOwner = e3.callbackOwner ?? fv(), this.oauthAttemptId = e3.oauthAttemptId, this.needsAuthCallback = e3.needsAuthCallback, this.onTokensSaved = e3.onTokensSaved, this.staticClientInformation = e3.staticClientInformation, this.attemptClientInformation = e3.attemptClientInformation, this.scopes = e3.scopes, this.rawAuthConfig = e3.rawAuthConfig, this.defaultRedirectUrl = e3.redirectUrl ?? (function(e4) {
          const t3 = ev(e4), [r3] = (0, i2.ny)(t3);
          return r3 ?? `${t3}://anysphere.cursor-mcp/oauth/callback`;
        })(this.appRoot), this.activeRedirectUrl = this.defaultRedirectUrl, this.createRedirectHandle = e3.redirectUrl ? void 0 : e3.createRedirectHandle, this.usesLoopbackRedirect = void 0 !== this.createRedirectHandle, this.armLoopbackOnRedirect = this.usesLoopbackRedirect && true === e3.armLoopbackOnRedirect, this.hostedCallback = this.usesLoopbackRedirect && true === e3.hostedCallback && void 0 === e3.staticClientInformation, this.skipRetentionStateReconciliation = e3.skipRetentionStateReconciliation ?? false, H_(this.identifier).info("MCP OAuth provider initialized", p({ event: "mcp_oauth_provider_initialized", ...lv(this.serverUrl) }));
      }
      clearRefreshAttemptTracking() {
        this._refreshInProgress = false, this._refreshTokenForAttempt = void 0;
      }
      get retentionKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: tv.OAUTH_RETENTION, identifier: this.identifier }) : vv({ baseKey: tv.OAUTH_RETENTION, identifier: this.identifier });
      }
      get sharedTokensKey() {
        return kv({ baseKey: tv.TOKENS, serverUrl: this.serverUrl });
      }
      get sharedClientInformationKey() {
        return kv({ baseKey: tv.CLIENT_INFORMATION, serverUrl: this.serverUrl });
      }
      get sharedUpdatedAtKey() {
        return kv({ baseKey: tv.UPDATED_AT, serverUrl: this.serverUrl });
      }
      get legacyTokensKey() {
        return vv({ baseKey: tv.TOKENS, identifier: this.identifier });
      }
      get identifierTokensKey() {
        return wv({ baseKey: tv.TOKENS, identifier: this.identifier });
      }
      get legacyClientInformationKey() {
        return vv({ baseKey: tv.CLIENT_INFORMATION, identifier: this.identifier });
      }
      get identifierClientInformationKey() {
        return wv({ baseKey: tv.CLIENT_INFORMATION, identifier: this.identifier });
      }
      get tokensKey() {
        return "serverIdentifier" === this.storageScope ? this.identifierTokensKey : this.sharedTokensKey;
      }
      get tokensFallbackKey() {
        return "serverIdentifier" === this.storageScope ? this.sharedTokensKey : this.legacyTokensKey;
      }
      get clientInformationKey() {
        return "serverIdentifier" === this.storageScope ? this.identifierClientInformationKey : this.sharedClientInformationKey;
      }
      get clientInformationFallbackKey() {
        return "serverIdentifier" === this.storageScope ? this.sharedClientInformationKey : this.legacyClientInformationKey;
      }
      get updatedAtKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: tv.UPDATED_AT, identifier: this.identifier }) : this.sharedUpdatedAtKey;
      }
      get tokensCanonicalMigrationCompleteKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: this.identifier }) : vv({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: this.identifier });
      }
      get clientInformationCanonicalMigrationCompleteKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: this.identifier }) : vv({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: this.identifier });
      }
      get tokensMigrationCompleteKey() {
        return "serverIdentifier" === this.storageScope ? this.tokensCanonicalMigrationCompleteKey : void 0;
      }
      get clientInformationMigrationCompleteKey() {
        return "serverIdentifier" === this.storageScope ? this.clientInformationCanonicalMigrationCompleteKey : void 0;
      }
      get codeVerifierKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: tv.CODE_VERIFIER, identifier: this.identifier }) : vv({ baseKey: tv.CODE_VERIFIER, identifier: this.identifier });
      }
      get serverUrlKey() {
        return "serverIdentifier" === this.storageScope ? wv({ baseKey: tv.SERVER_URL, identifier: this.identifier }) : vv({ baseKey: tv.SERVER_URL, identifier: this.identifier });
      }
      getOrCreateOAuthAttemptId() {
        return this.oauthAttemptId || (this.oauthAttemptId = (0, hn.randomUUID)()), this.oauthAttemptId;
      }
      async getCurrentClientInformationForAttempt() {
        if (this.staticClientInformation) {
          try {
            const e3 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
            if (e3) {
              const t3 = await Xy.parseAsync(JSON.parse(e3));
              if (t3.client_id === this.staticClientInformation.client_id) return t3;
            }
          } catch (e3) {
            H_(this.identifier).warn(`Failed to read stored client information for OAuth attempt: ${e3 instanceof Error ? e3.message : String(e3)}`);
          }
          return { ...this.staticClientInformation, redirect_uris: this.canonicalAuthRedirectUrls };
        }
        try {
          return await this.getStoredClientInformationLocally();
        } catch (e3) {
          return void H_(this.identifier).warn(`Failed to read client information for OAuth attempt: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
      async updateOAuthAttemptState(e3) {
        try {
          await Nv(this.oauthContext);
        } catch (e4) {
          H_(this.identifier).warn(`Failed to sweep stale OAuth attempts before updating active OAuth state: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        const t3 = this.getOrCreateOAuthAttemptId(), r3 = await Cv(this.oauthContext, t3), n3 = e3.clientInformation ?? r3?.clientInformation;
        if (e3.clientInformation) {
          const r4 = Ev(t3);
          if (e3.clientInformation.client_secret) {
            await this.oauthContext.secrets.get(r4) !== e3.clientInformation.client_secret && await this.oauthContext.secrets.store(r4, e3.clientInformation.client_secret);
          } else {
            void 0 !== await this.oauthContext.secrets.get(r4) && await this.oauthContext.secrets.delete(r4);
          }
        }
        const o2 = { attemptId: t3, identifier: this.identifier, owner: this.callbackOwner, createdAtMs: r3?.createdAtMs ?? Date.now(), serverUrl: e3.serverUrl ?? r3?.serverUrl, transportServerUrl: e3.transportServerUrl ?? r3?.transportServerUrl, codeVerifier: e3.codeVerifier ?? r3?.codeVerifier, clientInformation: n3, authorizationServerUrl: e3.authorizationServerUrl ?? r3?.authorizationServerUrl }, s2 = { ...o2, clientInformation: Iv(n3) };
        if (r3) {
          const e4 = { ...r3, clientInformation: Iv(r3.clientInformation) };
          if (JSON.stringify(e4) === JSON.stringify(s2)) return xv.set(t3, o2), o2;
        }
        const i3 = await this.oauthContext.oauthAttempts.readAttempt(t3);
        if (void 0 !== i3) {
          const e4 = Tv(i3);
          if (e4) {
            const r4 = { ...e4, clientInformation: Iv(e4.clientInformation) };
            if (JSON.stringify(r4) === JSON.stringify(s2)) return xv.set(t3, o2), o2;
          }
        }
        return await this.oauthContext.oauthAttempts.writeAttempt(t3, s2), xv.set(t3, o2), o2;
      }
      async clearOAuthAttemptState(e3) {
        if (e3) return xv.delete(e3), await this.oauthContext.oauthAttempts.deleteAttempt(e3), void (this.oauthAttemptId === e3 && (this.oauthAttemptId = void 0));
        const t3 = await (async function(e4) {
          const t4 = /* @__PURE__ */ new Map();
          for (const e5 of xv.values()) t4.set(e5.attemptId, e5);
          const r3 = await e4.oauthAttempts.listAttempts();
          for (const e5 of r3) {
            const r4 = Tv(e5);
            r4 && (t4.has(r4.attemptId) || t4.set(r4.attemptId, r4));
          }
          return Array.from(t4.values());
        })(this.oauthContext);
        for (const e4 of t3) e4.identifier === this.identifier && e4.owner.workspaceId === this.callbackOwner.workspaceId && (xv.delete(e4.attemptId), await this.oauthContext.oauthAttempts.deleteAttempt(e4.attemptId));
        this.oauthAttemptId = void 0;
      }
      async canUseIdentifierScopedSecret() {
        if ("serverIdentifier" !== this.storageScope) return true;
        const e3 = this.oauthContext.globalState.get(this.serverUrlKey);
        if (!e3) return H_(this.identifier).warn("Refusing identifier-scoped OAuth reuse without a stored server URL", { ...lv(this.serverUrl) }), false;
        try {
          if ((0, c.Yl9)(e3) === (0, c.Yl9)(this.serverUrl)) return true;
        } catch (e4) {
          return H_(this.identifier).warn(`Refusing identifier-scoped OAuth reuse because URL normalization failed: ${e4 instanceof Error ? e4.message : String(e4)}`), false;
        }
        return H_(this.identifier).warn("Refusing identifier-scoped OAuth reuse for mismatched server URL", { stored: lv(e3), current: lv(this.serverUrl) }), false;
      }
      async getSecretWithFallback({ primaryKey: e3, fallbackKey: t3, migrationCompleteKey: r3 }) {
        const n3 = await this.oauthContext.secrets.get(e3);
        if (n3) {
          if (!await this.canUseIdentifierScopedSecret()) return;
          return n3;
        }
        if (r3 && this.oauthContext.globalState.get(r3)) return;
        const o2 = this.oauthContext.secrets.getFallback ? await this.oauthContext.secrets.getFallback(t3) : await this.oauthContext.secrets.get(t3);
        return o2 && ("canonicalServerUrl" !== this.storageScope || await this.canReuseLegacyIdentifierState()) ? (await this.oauthContext.secrets.store(e3, o2), await this.rememberServerUrl(), r3 && await this.oauthContext.globalState.update(r3, true), o2) : void 0;
      }
      async canReuseLegacyIdentifierState() {
        const e3 = this.oauthContext.globalState.get(this.serverUrlKey);
        if (!e3) return H_(this.identifier).info("Refusing legacy identifier-scoped OAuth reuse without a stored server URL", { ...lv(this.serverUrl) }), false;
        try {
          const t3 = (0, c.Yl9)(this.serverUrl);
          if ((0, c.Yl9)(e3) !== t3) return H_(this.identifier).warn("Refusing legacy identifier-scoped OAuth reuse for mismatched server URL", { stored: lv(e3), current: lv(this.serverUrl) }), false;
        } catch (e4) {
          return H_(this.identifier).warn(`Refusing legacy identifier-scoped OAuth reuse because URL normalization failed: ${e4 instanceof Error ? e4.message : String(e4)}`), false;
        }
        return true;
      }
      async storeSecretWithFallback({ primaryKey: e3, fallbackKey: t3, value: r3, migrationCompleteKey: n3 }) {
        if (await this.oauthContext.secrets.get(e3) !== r3 && await this.oauthContext.secrets.store(e3, r3), n3 && await this.oauthContext.globalState.update(n3, true), "canonicalServerUrl" === this.storageScope) {
          await this.oauthContext.secrets.get(t3) !== r3 && await this.oauthContext.secrets.store(t3, r3);
        }
      }
      async deleteSecretWithFallback({ primaryKey: e3, fallbackKey: t3, migrationCompleteKey: r3, clearReason: n3 = "ext_host_delete_secret", emitCredentialsClearedLog: o2 = true }) {
        await this.oauthContext.secrets.delete(e3), r3 && await this.oauthContext.globalState.update(r3, true), "canonicalServerUrl" === this.storageScope && await this.deleteFallbackSecret(t3), o2 && (0, c.$yO)({ identifier: this.identifier, reason: n3, clearScope: (0, c.qYO)(e3), storageKey: e3, commandsVersion: "v2", mcpOAuthOwner: "ext_host" });
      }
      async deleteFallbackSecret(e3) {
        this.oauthContext.secrets.deleteFallback ? await this.oauthContext.secrets.deleteFallback(e3) : await this.oauthContext.secrets.delete(e3);
      }
      async setLocalUpdatedAtMs(e3) {
        this.oauthContext.globalState.get(this.updatedAtKey) !== e3 && await this.oauthContext.globalState.update(this.updatedAtKey, e3);
      }
      async rememberServerUrl() {
        this.oauthContext.globalState.get(this.serverUrlKey) !== this.serverUrl && await this.oauthContext.globalState.update(this.serverUrlKey, this.serverUrl);
      }
      async clearIdentifierScopedOAuthState(e3) {
        await this.clearIdentifierScopedOAuthStateInternal({ clearRetentionState: true, clearReason: "ext_host_clear_identifier_scoped", emitClearLog: e3?.emitClearLog ?? true });
      }
      async clearIdentifierScopedState() {
        H_(this.identifier).info("Clearing identifier-scoped OAuth data"), "serverIdentifier" === this.storageScope && (this.clearRefreshAttemptTracking(), await this._releaseRegistrationLeaseIfHeld("clear_identifier_scoped"), await this._releaseRefreshLeaseIfHeld("clear_identifier_scoped"), await this.setLocalUpdatedAtMs(void 0)), await this.clearIdentifierScopedOAuthState();
      }
      async clearIdentifierScopedOAuthStatePreservingRetention(e3) {
        await this.clearIdentifierScopedOAuthStateInternal({ clearRetentionState: false, clearReason: e3 });
      }
      async clearIdentifierScopedOAuthStateInternal(e3) {
        await this.clearOAuthAttemptState();
        const t3 = "serverIdentifier" === this.storageScope ? [this.identifierClientInformationKey, this.identifierTokensKey] : [], r3 = [this.legacyClientInformationKey, this.legacyTokensKey];
        for (const e4 of new Set(r3)) await this.deleteFallbackSecret(e4);
        for (const e4 of new Set(t3)) await this.oauthContext.secrets.delete(e4);
        "serverIdentifier" === this.storageScope && (await this.oauthContext.globalState.update(this.clientInformationCanonicalMigrationCompleteKey, true), await this.oauthContext.globalState.update(this.tokensCanonicalMigrationCompleteKey, true)), await W_(this.oauthContext.globalState, "serverIdentifier" === this.storageScope ? [this.codeVerifierKey] : [this.codeVerifierKey, this.serverUrlKey]), e3.clearRetentionState && await this.clearRetentionState(), false !== e3.emitClearLog && (0, c.$yO)({ identifier: this.identifier, reason: e3.clearReason, clearScope: "all", commandsVersion: "v2", mcpOAuthOwner: "ext_host" });
      }
      async clearAllLocalStateForCurrentServerUrl(e3) {
        const t3 = (0, c.Yl9)(this.serverUrl), r3 = /^\[(.+?)\] mcp_server_url$/;
        for (const n3 of this.oauthContext.globalState.keys()) {
          const o2 = n3.match(r3);
          if (!o2) continue;
          const s2 = o2[1];
          if (!s2) continue;
          const i3 = bv(s2), a3 = Sv(s2) ? (e4, t4) => wv({ baseKey: e4, identifier: t4 }) : (e4, t4) => vv({ baseKey: e4, identifier: t4 }), u2 = this.oauthContext.globalState.get(n3);
          if (!u2 || (0, c.Yl9)(u2) !== t3) continue;
          const l2 = a3(tv.CLIENT_INFORMATION, i3), d2 = a3(tv.TOKENS, i3);
          await this.oauthContext.secrets.delete(l2), await this.oauthContext.secrets.delete(d2), await W_(this.oauthContext.globalState, [a3(tv.CODE_VERIFIER, i3), a3(tv.SERVER_URL, i3), a3(tv.OAUTH_RETENTION, i3)]), i3 !== e3?.skipClearLogForIdentifier && (0, c.$yO)({ identifier: i3, reason: "ext_host_clear_all_local_state", clearScope: "all", commandsVersion: "v2", mcpOAuthOwner: "ext_host" });
        }
      }
      async getStoredTokensLocally() {
        const e3 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
        if (e3) return await Hy.parseAsync(JSON.parse(e3));
      }
      async hasStoredTokensLocally() {
        const e3 = await this.getStoredTokensLocally();
        return Boolean(e3?.access_token || e3?.refresh_token);
      }
      async getStoredClientInformationLocally() {
        const e3 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
        if (e3) return await Xy.parseAsync(JSON.parse(e3));
      }
      async getRetentionState() {
        const e3 = this.oauthContext.globalState.get(this.retentionKey);
        if (!e3) return;
        const t3 = av.safeParse(e3);
        return t3.success ? t3.data : (H_(this.identifier).warn("Invalid OAuth retention state found; clearing it"), void await W_(this.oauthContext.globalState, [this.retentionKey]));
      }
      async clearRetentionState() {
        await W_(this.oauthContext.globalState, [this.retentionKey]);
      }
      getCurrentRetentionFingerprint(e3, t3) {
        const r3 = dv(this.serverUrl);
        return { clearedAtMs: Date.now(), expiresAtMs: Date.now(), normalizedServerUrl: r3?.normalizedServerUrl, serverOrigin: r3?.serverOrigin, clientId: e3, authHash: t3 };
      }
      isRetentionStateCompatible(e3, t3, r3) {
        const n3 = this.getCurrentRetentionFingerprint(t3, r3);
        return e3.normalizedServerUrl === n3.normalizedServerUrl && (e3.clientId === n3.clientId && e3.authHash === n3.authHash);
      }
      async reconcileRetentionState() {
        const e3 = await this.getRetentionState();
        if (!e3) return true;
        if (Date.now() > e3.expiresAtMs) return true === e3.expiredTombstone ? H_(this.identifier).debug("Expired OAuth retention tombstone still active; blocking shared OAuth reuse", { expiresAtMs: e3.expiresAtMs }) : (H_(this.identifier).info("OAuth retention expired; clearing stored OAuth data and preserving tombstone", { expiresAtMs: e3.expiresAtMs }), await this.oauthContext.globalState.update(this.retentionKey, { ...e3, expiredTombstone: true })), await this.clearIdentifierScopedOAuthStatePreservingRetention("retention_expired"), false;
        const t3 = this.staticClientInformation?.client_id, r3 = (function(e4) {
          if (!e4) return;
          const t4 = JSON.stringify(Object.keys(e4).sort().reduce((t5, r5) => (t5[r5] = e4[r5], t5), {}));
          let r4 = 0;
          for (let e5 = 0; e5 < t4.length; e5++) r4 = (r4 << 5) - r4 + t4.charCodeAt(e5) | 0;
          return r4.toString(36);
        })(this.rawAuthConfig);
        return this.isRetentionStateCompatible(e3, t3, r3) ? (H_(this.identifier).info("Reusing retained OAuth state after temporary MCP removal", { expiresAtMs: e3.expiresAtMs, serverOrigin: e3.serverOrigin }), await this.clearRetentionState(), true) : (H_(this.identifier).info("OAuth retention fingerprint mismatch; clearing stored OAuth data", { retainedServerUrl: e3.normalizedServerUrl, retainedClientIdPresent: Boolean(e3.clientId), currentClientIdPresent: Boolean(t3) }), await this.clearIdentifierScopedOAuthStatePreservingRetention("retention_incompatible"), false);
      }
      async ensureLoopbackRedirectUrl() {
        this.loopbackRedirectUrlPromise ??= sv(this.oauthContext).then((e3) => (0, c.Q2T)({ serverUrl: this.serverUrl, ipv4Hosts: e3 })).then((e3) => {
          this.loopbackRedirectUrl = e3;
        }), await this.loopbackRedirectUrlPromise;
      }
      get redirectUrl() {
        if (this.hostedCallback) return i2.qN;
        if (this.usesLoopbackRedirect && !this.redirectHandle) return this.loopbackRedirectUrl;
        const e3 = this.activeRedirectUrl;
        return H_(this.identifier).info("Using redirect URL", { url: e3 }), e3;
      }
      get canonicalAuthRedirectUrls() {
        return (0, i2.RJ)();
      }
      get requestedRedirectUris() {
        const e3 = this.canonicalAuthRedirectUrls, t3 = this.redirectUrl;
        return e3.includes(t3) ? e3 : [...e3, t3];
      }
      async prepareForClientRegistration() {
        this.usesLoopbackRedirect && await this.ensureLoopbackRedirectUrl();
      }
      get clientMetadata() {
        return { redirect_uris: this.canonicalAuthRedirectUrls, token_endpoint_auth_method: "none", grant_types: ["authorization_code", "refresh_token"], response_types: ["code"], client_name: "Cursor", logo_uri: i2.G$ };
      }
      async prepareRedirectUrl() {
        if (this.createRedirectHandle && !this.redirectHandle) {
          if (!this.redirectHandlePromise) {
            let e3;
            this.redirectHandlePromise = this.createRedirectHandle(() => {
              this.redirectHandle === e3 && (this.redirectHandle = void 0, this.activeRedirectUrl = this.defaultRedirectUrl);
            }).then(async (t3) => {
              if (!t3) return;
              e3 = t3, this.redirectHandle = t3, this.activeRedirectUrl = t3.redirectUrl;
              const r3 = await (0, c.Q2T)({ serverUrl: this.serverUrl, redirectUrl: t3.redirectUrl, ipv4Hosts: await sv(this.oauthContext) });
              this.redirectHandle === t3 && (this.activeRedirectUrl = r3);
            }).finally(() => {
              this.redirectHandlePromise = void 0;
            });
          }
          await this.redirectHandlePromise;
        }
      }
      cancelAuthorizationFlow() {
        H_(this.identifier).info("Cancelling MCP OAuth authorization flow", p({ event: "mcp_oauth_authorization_cancelled", ...lv(this.serverUrl) })), this.disposeRedirectHandle();
      }
      disposeRedirectHandle() {
        const e3 = this.redirectHandle;
        var t3, r3;
        e3 && (this.redirectHandle = void 0, this.activeRedirectUrl = this.defaultRedirectUrl, e3.dispose(), t3 = this.identifier, r3 = this, Fv.get(t3) === r3 && Fv.delete(t3));
      }
      state() {
        const e3 = this.getOrCreateOAuthAttemptId(), t3 = hv(this.identifier, this.callbackOwner, e3, { surface: "exthost" });
        return this.hostedCallback ? (0, i2.kG)(t3, i2.Yv) : t3;
      }
      async clientInformation() {
        if (!this.skipRetentionStateReconciliation && !await this.reconcileRetentionState()) return;
        if (this.attemptClientInformation) return H_(this.identifier).info("Using attempt-scoped OAuth client information for callback flow", { ...G_(this.attemptClientInformation) }), this.latestAuthorizationClientInformation = this.attemptClientInformation, this.attemptClientInformation;
        if (this.staticClientInformation) {
          const e4 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
          if (e4) try {
            const t4 = await Xy.parseAsync(JSON.parse(e4)), r3 = t4;
            if (t4.client_id === this.staticClientInformation.client_id) return H_(this.identifier).info("Using enriched static OAuth client information from storage", { ...G_(r3) }), this.latestAuthorizationClientInformation = r3, t4;
          } catch (e5) {
            H_(this.identifier).error("Failed to parse stored client information", e5 instanceof Error ? e5 : void 0), await this.deleteSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey, clearReason: "client_info_parse_error" }), await Q_(this.identifier, "client_info_parse_error", this.executeCommand);
          }
          const t3 = { ...this.staticClientInformation, redirect_uris: this.canonicalAuthRedirectUrls };
          return H_(this.identifier).info("Using static OAuth client information with redirect_uris", { ...G_(this.staticClientInformation) }), this.latestAuthorizationClientInformation = t3, t3;
        }
        const e3 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
        if (!e3) {
          const e4 = await this._acquireRegistrationLockOrWait();
          return e4 ? (this.latestAuthorizationClientInformation = e4, e4) : void H_(this.identifier).info("No stored client information found");
        }
        try {
          const t3 = JSON.parse(e3), r3 = await Xy.parseAsync(t3), n3 = await pv.parseAsync(t3), o2 = { ...r3, redirect_uris: n3.redirect_uris }, s2 = o2.redirect_uris;
          return s2 && this.usesLoopbackRedirect && await this.ensureLoopbackRedirectUrl(), s2 && !s2.includes(this.redirectUrl) ? (H_(this.identifier).warn("Stored OAuth client information redirect_uri mismatch – clearing and re-registering", p({ event: "mcp_oauth_client_info_redirect_mismatch", ...G_(o2), storedRedirectUris: s2.join(","), expectedRedirectUrl: this.redirectUrl, ...lv(this.serverUrl) })), await this.deleteSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey, clearReason: "client_info_redirect_mismatch" }), await Q_(this.identifier, "client_info_redirect_mismatch", this.executeCommand), void (this.latestAuthorizationClientInformation = void 0)) : (H_(this.identifier).info("Returning stored OAuth client_id", p({ event: "mcp_oauth_client_info_returned", ...G_(o2), ...lv(this.serverUrl) })), this.latestAuthorizationClientInformation = o2, o2);
        } catch (e4) {
          return H_(this.identifier).error("Failed to parse client information from secrets", e4 instanceof Error ? e4 : void 0), await this.deleteSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey, clearReason: "client_info_parse_error" }), await Q_(this.identifier, "client_info_parse_error", this.executeCommand), void (this.latestAuthorizationClientInformation = void 0);
        }
      }
      async saveClientInformation(e3) {
        const t3 = (function(e4, t4) {
          const r4 = t4.redirect_uris;
          return { ...t4, redirect_uris: (0, i2.Hj)({ echoed: r4, requested: e4 }) };
        })(this.requestedRedirectUris, e3);
        if (await this.clearRetentionState(), this.latestAuthorizationClientInformation = t3, this.staticClientInformation) {
          const e4 = this.staticClientInformation.client_id, r4 = t3.client_id;
          if (e4 && r4 && e4 === r4) {
            H_(this.identifier).info("Persisting static OAuth client information for callback flow");
            const e5 = JSON.stringify(t3);
            await this.storeSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, value: e5, migrationCompleteKey: this.clientInformationMigrationCompleteKey }), this.oauthAttemptId && await this.updateOAuthAttemptState({ clientInformation: t3 }), await this.rememberServerUrl(), await this.setLocalUpdatedAtMs(Date.now());
            if (await this.hasStoredTokensLocally()) try {
              await this.mcpSharedOAuth.notifyStateChanged({ serverUrl: this.serverUrl, identifier: this.identifier, sourceWorkspaceId: fv().workspaceId, change: "client_info_saved" });
            } catch (e6) {
              H_(this.identifier).warn(`Failed to notify shared OAuth save state change: ${e6 instanceof Error ? e6.message : String(e6)}`);
            }
          } else H_(this.identifier).info("Static OAuth client configured; ignoring mismatched client information save");
          return;
        }
        const r3 = t3;
        let n3;
        H_(this.identifier).info("saveClientInformation() entered", p({ event: "mcp_oauth_save_client_info_entered", isStaticClient: Boolean(this.staticClientInformation), ...G_(r3), ...lv(this.serverUrl) }));
        try {
          const e4 = await this.oauthContext.secrets.get(this.clientInformationKey);
          if (e4) {
            const r4 = JSON.parse(e4);
            if (n3 = "string" == typeof r4.client_id ? r4.client_id : void 0, n3 && n3 !== t3.client_id) return H_(this.identifier).info("Skipping client info save — sibling already registered a different client_id", p({ event: "mcp_oauth_client_info_save_skipped", existingClientIdHash: Y_(n3), attemptedClientIdHash: Y_(t3.client_id), ...lv(this.serverUrl) })), void await this._releaseRegistrationLeaseIfHeld("save_skipped_sibling_registered");
          }
        } catch {
        }
        H_(this.identifier).info("Persisting new OAuth client registration", p({ event: "mcp_oauth_client_info_saved", ...G_(r3), redirectUrl: this.redirectUrl, ...lv(this.serverUrl) }));
        const o2 = JSON.stringify(t3);
        await this.storeSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, value: o2, migrationCompleteKey: this.clientInformationMigrationCompleteKey }), await this._releaseRegistrationLeaseIfHeld("registration_saved"), this.oauthAttemptId && await this.updateOAuthAttemptState({ clientInformation: t3 }), await this.rememberServerUrl(), await this.setLocalUpdatedAtMs(Date.now());
        if (await this.hasStoredTokensLocally()) try {
          await this.mcpSharedOAuth.notifyStateChanged({ serverUrl: this.serverUrl, identifier: this.identifier, sourceWorkspaceId: fv().workspaceId, change: "client_info_saved" });
        } catch (e4) {
          H_(this.identifier).warn(`Failed to notify shared OAuth save state change: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
      }
      async prepareForRefresh() {
        await (function(e3, t3) {
          const r3 = (ps.get(e3) ?? Promise.resolve()).catch(() => {
          }).then(t3);
          return ps.set(e3, r3), r3.finally(() => {
            ps.get(e3) === r3 && ps.delete(e3);
          });
        })(this._refreshLockKey, async () => {
          this.lastRefreshError = void 0, await this._resolveRefreshPolicy();
          if (await this._acquireRefreshLockOrWait()) {
            const e3 = await iv(this.oauthContext, "refresh");
            return this._refreshLockMaxHoldMs = await (async function(e4, t3) {
              const r3 = (await nv(e4))?.refreshLockMaxHoldMs;
              return "number" == typeof r3 && Number.isFinite(r3) && r3 > 0 ? Math.max(r3, t3) : Math.max(12e4, t3);
            })(this.oauthContext, e3), this._refreshLockHeldSinceMs = Date.now(), this._refreshInProgress = true, this._refreshTokenForAttempt = this.lastReturnedRefreshToken, this._startRefreshLockHeartbeat(), void H_(this.identifier).info("MCP OAuth refresh prepared", p({ event: "mcp_oauth_refresh_prepare", mcpOAuthOwner: "ext_host", holdsDiskLock: Boolean(this.oauthContext.diskKVSetIfAbsent), refreshingClientId: this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id, ...lv(this.serverUrl) }));
          }
          throw new c.NjG(this.identifier);
        });
      }
      async tokens() {
        if (!this.skipRetentionStateReconciliation && !await this.reconcileRetentionState()) return;
        const e3 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
        if (e3) try {
          const t3 = await Hy.parseAsync(JSON.parse(e3));
          let r3;
          try {
            const e4 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
            if (e4) {
              const t4 = JSON.parse(e4);
              r3 = "string" == typeof t4.client_id ? t4.client_id : void 0;
            }
          } catch {
          }
          return this.lastSavedClientId && r3 && this.lastSavedClientId !== r3 && H_(this.identifier).warn("Token-client binding mismatch: tokens were saved under a different client_id", p({ event: "mcp_oauth_token_client_binding_mismatch", tokenBoundClientIdHash: Y_(this.lastSavedClientId), currentClientIdHash: Y_(r3), ...lv(this.serverUrl), refreshTokenPresent: Boolean(t3.refresh_token) })), this.lastReturnedRefreshToken = t3.refresh_token, r3 && (this.lastSavedClientId = r3), t3;
        } catch (e4) {
          return H_(this.identifier).error("Failed to parse tokens from secrets", e4 instanceof Error ? e4 : void 0), await this.deleteSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey, clearReason: "tokens_parse_error" }), await this.setLocalUpdatedAtMs(void 0), void await Q_(this.identifier, "tokens_parse_error", this.executeCommand);
        }
        else H_(this.identifier).debug("No stored tokens found");
      }
      async saveTokens(e3) {
        await this.clearRetentionState();
        let t3, r3 = false;
        try {
          const e4 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
          r3 = Boolean(e4), e4 && (t3 = await Hy.parseAsync(JSON.parse(e4)));
        } catch {
          H_(this.identifier).debug("Unable to inspect existing OAuth tokens before persisting");
        }
        let n3 = e3;
        r3 && t3?.refresh_token && !e3.refresh_token && (n3 = { ...e3, refresh_token: t3.refresh_token });
        const o2 = this._refreshInProgress, s2 = this._refreshTokenForAttempt;
        this.clearRefreshAttemptTracking();
        const i3 = cv(n3, { expiresInIsFresh: true }), a3 = this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id;
        if (o2 && await this._hasStoredRefreshTokenRotated(s2)) throw H_(this.identifier).info("Sibling refreshed before this refresh result was saved — discarding stale tokens", p({ event: "mcp_oauth_sibling_refresh_detected", outcome: "skipped_save_rotation", scope: "saveTokens", ...lv(this.serverUrl) })), await this._releaseRefreshLeaseIfHeld("save_skipped_sibling_rotated"), new c.NjG(this.identifier);
        H_(this.identifier).info("MCP OAuth tokens persisted", p({ event: "mcp_oauth_token_save", hadExistingTokens: r3, isRefresh: o2, tokenOwnerClientId: a3, mergedPriorRefreshToken: Boolean(r3 && t3?.refresh_token && !e3.refresh_token), ...i3, ...lv(this.serverUrl) })), o2 && H_(this.identifier).info("MCP OAuth refresh succeeded", p({ event: "mcp_oauth_refresh_result", outcome: "success", tokenOwnerClientId: a3, ...i3, ...lv(this.serverUrl) }));
        const u2 = JSON.stringify(n3);
        await this.storeSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, value: u2, migrationCompleteKey: this.tokensMigrationCompleteKey }), await this.rememberServerUrl(), this.lastReturnedRefreshToken = n3.refresh_token;
        try {
          const e4 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
          if (e4) {
            const t4 = JSON.parse(e4);
            "string" == typeof t4.client_id && (this.lastSavedClientId = t4.client_id);
          }
        } catch {
        }
        if (await this.setLocalUpdatedAtMs(Date.now()), n3.access_token || n3.refresh_token) try {
          await this.mcpSharedOAuth.notifyStateChanged({ serverUrl: this.serverUrl, identifier: this.identifier, sourceWorkspaceId: fv().workspaceId, change: "tokens_saved", saveKind: o2 ? "refresh" : "first" });
        } catch (e4) {
          H_(this.identifier).warn(`Failed to notify shared OAuth save state change: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        await this._releaseRefreshLeaseIfHeld("save_success");
        try {
          this.disposeRedirectHandle(), this.onTokensSaved?.();
        } catch (e4) {
          H_(this.identifier).warn(`onTokensSaved callback threw: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
      }
      async redirectToAuthorization(e3) {
        if (this.usesLoopbackRedirect && await this.ensureLoopbackRedirectUrl(), this.armLoopbackOnRedirect && await this.prepareRedirectUrl(), this.armLoopbackOnRedirect && !this.redirectHandle) throw new c.RRj(this.loopbackRedirectUrl);
        e3.searchParams.set("redirect_uri", this.redirectUrl);
        const t3 = e3.searchParams.get("state");
        null !== t3 && this.redirectHandle?.setExpectedState?.(t3);
        const r3 = Jv(this.rawAuthConfig);
        r3?.length ? e3.searchParams.set("scope", r3.join(" ")) : this.scopes?.length && !e3.searchParams.has("scope") && e3.searchParams.set("scope", this.scopes.join(" "));
        const n3 = await (0, c.Ezk)(this.serverUrl);
        for (const [t4, r4] of Object.entries(n3?.authorizationParams ?? {})) e3.searchParams.set(t4, r4);
        (true === n3?.omitConsentPrompt || (0, i2.NC)(e3)) && (0, i2.TS)(e3), H_(this.identifier).info("MCP OAuth redirect to authorization", p({ event: "mcp_oauth_redirect", ...lv(this.serverUrl), ...uv(e3.href) }));
        const o2 = this.latestAuthorizationClientInformation ?? await this.getCurrentClientInformationForAttempt();
        let s2;
        try {
          s2 = new URL(e3.origin).href;
        } catch {
          H_(this.identifier).warn("Could not extract origin from authorization URL");
        }
        await this.updateOAuthAttemptState({ serverUrl: this.serverUrl, transportServerUrl: this.transportServerUrl, clientInformation: o2, authorizationServerUrl: s2 }), this.oauthContext.globalState.get(this.serverUrlKey) !== this.serverUrl && await this.oauthContext.globalState.update(this.serverUrlKey, this.serverUrl), H_(this.identifier).info("Stored server URL for OAuth flow"), this.needsAuthCallback(e3);
      }
      async saveCodeVerifier(e3) {
        H_(this.identifier).info("Saving PKCE code verifier", { verifierLen: e3.length }), await this.updateOAuthAttemptState({ codeVerifier: e3 }), this.oauthContext.globalState.get(this.codeVerifierKey) !== e3 && await this.oauthContext.globalState.update(this.codeVerifierKey, e3);
      }
      async codeVerifier() {
        if (this.oauthAttemptId) {
          const e4 = await Cv(this.oauthContext, this.oauthAttemptId);
          if (e4?.codeVerifier) return e4.codeVerifier;
          throw H_(this.identifier).error(`No code verifier saved for OAuth attempt ${this.oauthAttemptId}`), new Error("No code verifier saved for OAuth attempt");
        }
        const e3 = await this.oauthContext.secrets.get(this.codeVerifierKey);
        if (e3) return e3;
        const t3 = this.oauthContext.globalState.get(this.codeVerifierKey);
        if (!t3) throw H_(this.identifier).error("No code verifier saved for session"), new Error("No code verifier saved for session");
        return t3;
      }
      async clear(e3) {
        const t3 = e3?.notifySharedStateChange ?? true, r3 = e3?.cause;
        if (H_(this.identifier).info("Clearing stored OAuth data"), this.clearRefreshAttemptTracking(), await this.deleteSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey, clearReason: "ext_host_provider_clear", emitCredentialsClearedLog: false }), await this.deleteSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey, clearReason: "ext_host_provider_clear", emitCredentialsClearedLog: false }), (0, c.$yO)({ identifier: this.identifier, reason: "ext_host_provider_clear", clearScope: "all", commandsVersion: "v2", mcpOAuthOwner: "ext_host" }), await this._releaseRegistrationLeaseIfHeld("clear"), await this._releaseRefreshLeaseIfHeld("clear"), await this.setLocalUpdatedAtMs(void 0), "canonicalServerUrl" === this.storageScope && await this.clearAllLocalStateForCurrentServerUrl({ skipClearLogForIdentifier: this.identifier }), await this.clearIdentifierScopedOAuthState({ emitClearLog: false }), t3) try {
          await this.mcpSharedOAuth.notifyStateChanged({ serverUrl: this.serverUrl, identifier: this.identifier, sourceWorkspaceId: fv().workspaceId, change: "cleared", cause: r3 });
        } catch (e4) {
          H_(this.identifier).warn(`Failed to notify OAuth clear state change: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
      }
      async softClear(e3) {
        const t3 = e3.serverUrl ?? this.serverUrl, r3 = t3 ? dv(t3) : void 0, n3 = { clearedAtMs: Date.now(), expiresAtMs: Date.now() + e3.expiresInMs, normalizedServerUrl: r3?.normalizedServerUrl, serverOrigin: r3?.serverOrigin, clientId: e3.clientId, authHash: e3.authHash };
        H_(this.identifier).info("Soft-clearing OAuth data for temporary MCP removal", { expiresAtMs: n3.expiresAtMs, serverOrigin: n3.serverOrigin, clientIdPresent: Boolean(e3.clientId) });
        const o2 = this.oauthContext.globalState.get(this.retentionKey);
        JSON.stringify(o2) !== JSON.stringify(n3) && await this.oauthContext.globalState.update(this.retentionKey, n3), await W_(this.oauthContext.globalState, [this.codeVerifierKey]), t3 && this.oauthContext.globalState.get(this.serverUrlKey) !== t3 && await this.oauthContext.globalState.update(this.serverUrlKey, t3);
      }
      get _oauthLockScopeKey() {
        return "serverIdentifier" === this.storageScope ? this.identifier : (0, c.Yl9)(this.serverUrl);
      }
      get _refreshLockKey() {
        return `mcp_oauth_refresh_lock::${this._oauthLockScopeKey}`;
      }
      async _readStoredRefreshToken() {
        const e3 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
        if (e3) try {
          return (await Hy.parseAsync(JSON.parse(e3))).refresh_token;
        } catch {
          return;
        }
      }
      async _hasStoredRefreshTokenRotated(e3) {
        const t3 = e3 ?? this._refreshTokenForAttempt ?? this.lastReturnedRefreshToken;
        if (!t3) return false;
        const r3 = await this._readStoredRefreshToken();
        return Boolean(r3 && r3 !== t3);
      }
      _stopRefreshLockHeartbeat() {
        void 0 !== this._refreshLockHeartbeatTimer && (clearInterval(this._refreshLockHeartbeatTimer), this._refreshLockHeartbeatTimer = void 0);
      }
      async _handleRefreshHeartbeatLost(e3) {
        this._stopRefreshLockHeartbeat();
        const t3 = this._refreshLeaseValue;
        if (this._refreshLeaseValue = void 0, this._refreshLockHeldSinceMs = void 0, this._refreshLockMaxHoldMs = void 0, H_(this.identifier).warn("Refresh lock heartbeat lost", p({ event: "mcp_oauth_refresh_lease_heartbeat_lost", ...e3, ...lv(this.serverUrl) })), t3) try {
          await this.oauthContext.diskKVDelete?.(this._refreshLockKey, t3);
        } catch {
        }
      }
      async _relinquishRefreshLockForMaxHold() {
        const e3 = void 0 !== this._refreshLockHeldSinceMs ? Date.now() - this._refreshLockHeldSinceMs : void 0, t3 = this._refreshLockMaxHoldMs;
        await this._handleRefreshHeartbeatLost({ reason: "max_hold_exceeded", ...void 0 !== e3 ? { heldMs: e3 } : {}, ...void 0 !== t3 ? { maxHoldMs: t3 } : {} });
      }
      async _renewRefreshLockLease(e3) {
        const t3 = this.oauthContext.diskKVReplaceIfEquals, r3 = this._refreshLeaseValue;
        if (!r3 || !t3) return;
        const n3 = this._refreshLockMaxHoldMs;
        if (void 0 !== n3 && void 0 !== this._refreshLockHeldSinceMs && Date.now() - this._refreshLockHeldSinceMs >= n3) return void await this._relinquishRefreshLockForMaxHold();
        if (this._refreshLockRenewInFlight) return;
        this._refreshLockRenewInFlight = true;
        const o2 = this._refreshLockKey;
        try {
          const e4 = ys(r3);
          if (!await t3(o2, r3, e4)) return void await this._handleRefreshHeartbeatLost({ reason: "renew_replace_if_equals_failed" });
          this._refreshLeaseValue = e4;
        } finally {
          this._refreshLockRenewInFlight = false;
        }
      }
      _startRefreshLockHeartbeat() {
        this._stopRefreshLockHeartbeat();
        const e3 = this._refreshLeaseValue;
        iv(this.oauthContext, "refresh").then((t3) => {
          if (!e3 || this._refreshLeaseValue !== e3) return;
          const r3 = Math.max(2e3, Math.floor(t3 / 3));
          this._refreshLockHeartbeatTimer = setInterval(() => {
            iv(this.oauthContext, "refresh").then((e4) => this._renewRefreshLockLease(e4));
          }, r3);
        });
      }
      async _finishStaleLockAcquisition(e3) {
        return await this._hasStoredRefreshTokenRotated(this.lastReturnedRefreshToken) ? (this._refreshLeaseValue = e3.lockValue, await this._releaseRefreshLeaseIfHeld("stale_evict_sibling_rotated"), H_(this.identifier).info("Sibling already refreshed after stale lock eviction", p({ event: "mcp_oauth_sibling_refresh_detected", outcome: "skipped_stale_lock_sibling_rotated", staleLockAgeMs: e3.staleLockAgeMs, ...lv(this.serverUrl) })), false) : (this._refreshLeaseValue = e3.lockValue, H_(this.identifier).info("Refresh lock acquired after stale cleanup — this provider will refresh", p({ event: "mcp_oauth_refresh_lease_acquired", refreshingClientId: this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id, ...lv(this.serverUrl), staleLockAgeMs: e3.staleLockAgeMs })), true);
      }
      async _acquireRefreshLockOrWait() {
        const e3 = this.oauthContext.diskKVSetIfAbsent;
        if (!e3) return true;
        const t3 = this._refreshLockKey, r3 = gs(), n3 = await iv(this.oauthContext, "refresh"), o2 = Date.now(), s2 = this.oauthContext.diskKVGet, i3 = this.oauthContext.diskKVDelete, a3 = await e3(t3, r3);
        if (!a3 && s2 && i3) {
          const o3 = await s2(t3);
          if (o3) {
            const s3 = _s(o3);
            if (Date.now() - s3 > n3) {
              await i3(t3, o3);
              if (await e3(t3, r3)) return this._finishStaleLockAcquisition({ lockValue: r3, staleLockAgeMs: Date.now() - s3 });
            }
          }
        }
        if (a3) return this._refreshLeaseValue = r3, H_(this.identifier).info("Refresh lock acquired — this provider will refresh", p({ event: "mcp_oauth_refresh_lease_acquired", refreshingClientId: this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id, ...lv(this.serverUrl) })), true;
        H_(this.identifier).info("Refresh lock held by sibling — waiting", p({ event: "mcp_oauth_refresh_lease_waiting", ...lv(this.serverUrl) }));
        const c2 = Date.now() + n3 + 2e3;
        let u2, l2 = false;
        for (; Date.now() < c2; ) {
          await new Promise((e5) => setTimeout(e5, 200));
          const e4 = await s2?.(t3);
          if (!e4) break;
          const r4 = _s(e4);
          if (Date.now() - r4 > n3) {
            l2 = true, u2 = Date.now() - r4, await i3?.(t3, e4);
            break;
          }
        }
        const d2 = Date.now() - o2;
        if (await this._hasStoredRefreshTokenRotated(this.lastReturnedRefreshToken)) return H_(this.identifier).info("Refresh lock released and tokens rotated — aborting to reconnect with fresh tokens", p({ event: "mcp_oauth_refresh_lease_wait_complete", siblingTokensRotated: true, waitDurationMs: d2, ...l2 ? { staleLockEvictedDuringWait: l2, staleLockAgeMs: u2 } : {}, ...lv(this.serverUrl) })), false;
        return await e3(t3, r3) ? (this._refreshLeaseValue = r3, H_(this.identifier).info("Refresh lock acquired after wait — prior holder dropped lease without rotating tokens", p({ event: "mcp_oauth_refresh_lease_acquired", acquiredAfterWaitTakeover: true, waitDurationMs: d2, refreshingClientId: this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id, ...l2 ? { staleLockEvictedDuringWait: l2, staleLockAgeMs: u2 } : {}, ...lv(this.serverUrl) })), true) : (H_(this.identifier).info("Refresh lock released by sibling — aborting to reconnect with fresh tokens", p({ event: "mcp_oauth_refresh_lease_wait_complete", waitDurationMs: d2, ...lv(this.serverUrl) })), false);
      }
      getOAuthHttpFetch() {
        if (void 0 === this._loggedOAuthFetch) {
          const e3 = globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0;
          if (void 0 === e3) throw new Error("No fetch available for MCP OAuth HTTP logging");
          const t3 = a2.cursor?.isGlass ?? true, r3 = tt({ identifier: this.identifier, baseFetch: e3, serverUrl: this.serverUrl, transportType: "oauth", clientSurface: t3 ? "glass" : "ide", extraMetadata: { source: "cursor-mcp" } });
          this._loggedOAuthFetch = r3;
        }
        return this._loggedOAuthFetch;
      }
      async releaseRefreshLeaseOnError(e3) {
        this.lastRefreshError = e3;
        try {
          this.onRefreshError(e3);
        } catch {
        }
        this.clearRefreshAttemptTracking(), await this._releaseRefreshLeaseIfHeld("refresh_error_uncaught", e3);
      }
      onRefreshError(e3) {
        const t3 = this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id;
        H_(this.identifier).warn("MCP OAuth refresh error caught by SDK", p({ event: "mcp_oauth_refresh_error", refreshingClientId: t3, ...(0, c.X5z)(e3), ...lv(this.serverUrl) }));
      }
      isRetryableOAuthRefreshError(e3) {
        return Le(e3);
      }
      getOAuthRefreshDiagnosticsForLog() {
        return { precededByRefreshError: Boolean(this.lastRefreshError), refreshRetryClassificationEnabled: true === this._refreshPolicy?.classifyBeforeWipe, ...(0, c.X5z)(this.lastRefreshError) };
      }
      logRefreshCatchBranch(e3) {
        const t3 = (0, c.X5z)(e3.underlyingError ?? (e3.errorMessage ? new Error(e3.errorMessage) : void 0)), { underlyingError: r3, ...n3 } = e3;
        H_(this.identifier).info("SDK refresh catch branch decision", p({ event: "mcp_oauth_sdk_refresh_catch_branch", ...n3, ...t3, errorMessage: t3.errorMessage ?? e3.errorMessage, ...lv(this.serverUrl) }));
      }
      async _resolveRefreshPolicy() {
        return this._refreshPolicy ? this._refreshPolicy : (this._refreshPolicyPromise || (this._refreshPolicyPromise = rv(this.oauthContext).then((e3) => (this._refreshPolicy = e3, e3))), this._refreshPolicyPromise);
      }
      async _releaseRefreshLeaseIfHeld(e3, t3) {
        this._stopRefreshLockHeartbeat();
        const r3 = this._refreshLeaseValue;
        if (r3) {
          this._refreshLeaseValue = void 0, this._refreshLockHeldSinceMs = void 0, this._refreshLockMaxHoldMs = void 0;
          try {
            await this.oauthContext.diskKVDelete?.(this._refreshLockKey, r3), H_(this.identifier).info(`Refresh lock released (${e3})`, p({ event: "mcp_oauth_refresh_lease_released", reason: e3, ...lv(this.serverUrl) })), "refresh_error_uncaught" === e3 && void 0 !== t3 && await X_(this.identifier, "silent_fallthrough", t3, this.executeCommand);
          } catch (e4) {
            H_(this.identifier).warn(`Failed to release refresh lock: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
        }
      }
      get _registrationLockKey() {
        return `mcp_oauth_registration_lock::${this._oauthLockScopeKey}`;
      }
      async _releaseRegistrationLeaseIfHeld(e3) {
        const t3 = this._registrationLeaseValue;
        if (t3) {
          this._registrationLeaseValue = void 0;
          try {
            await this.oauthContext.diskKVDelete?.(this._registrationLockKey, t3), H_(this.identifier).info(`Registration lock released (${e3})`, p({ event: "mcp_oauth_registration_lease_released", reason: e3, ...lv(this.serverUrl) }));
          } catch (e4) {
            H_(this.identifier).warn(`Failed to release registration lock: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
        }
      }
      async _acquireRegistrationLockOrWait() {
        const e3 = this.oauthContext.diskKVSetIfAbsent;
        if (!e3) return;
        const t3 = this._registrationLockKey, r3 = `${this.identifier}:${Date.now()}`, n3 = await iv(this.oauthContext, "registration"), o2 = this.oauthContext.diskKVGet, s2 = this.oauthContext.diskKVDelete, i3 = await e3(t3, r3);
        if (!i3 && o2 && s2) {
          const i4 = await o2(t3);
          if (i4) {
            const o3 = _s(i4);
            if (Date.now() - o3 > n3) {
              await s2(t3, i4);
              if (await e3(t3, r3)) return this._registrationLeaseValue = r3, void H_(this.identifier).info("Registration lock acquired after stale cleanup — this provider will register", p({ event: "mcp_oauth_registration_lease_acquired", ...lv(this.serverUrl) }));
            }
          }
        }
        if (i3) return this._registrationLeaseValue = r3, void H_(this.identifier).info("Registration lock acquired — this provider will register", p({ event: "mcp_oauth_registration_lease_acquired", ...lv(this.serverUrl) }));
        H_(this.identifier).info("Registration lock held by sibling — waiting", p({ event: "mcp_oauth_registration_lease_waiting", ...lv(this.serverUrl) }));
        const a3 = Date.now() + n3 + 2e3;
        for (; Date.now() < a3; ) {
          await new Promise((e5) => setTimeout(e5, 200));
          const e4 = await o2?.(t3);
          if (!e4) break;
          const r4 = parseInt(e4.split(":").pop() ?? "0", 10);
          if (Date.now() - r4 > n3) {
            await s2?.(t3, e4);
            break;
          }
        }
        const c2 = await this.getSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey });
        if (c2) try {
          const e4 = await Xy.parseAsync(JSON.parse(c2));
          return H_(this.identifier).info("Registration lock released — using sibling registration", p({ event: "mcp_oauth_registration_lease_sibling_completed", ...G_(e4), ...lv(this.serverUrl) })), e4;
        } catch (e4) {
          H_(this.identifier).warn("Failed to parse sibling client registration data — will re-register", p({ event: "mcp_oauth_registration_sibling_data_corrupted", error: e4 instanceof Error ? e4.message : String(e4), ...lv(this.serverUrl) }));
        }
        H_(this.identifier).info("Registration lock released — sibling did not complete, proceeding with own registration", p({ event: "mcp_oauth_registration_lease_sibling_failed", ...lv(this.serverUrl) }));
      }
      async invalidateCredentials(e3) {
        this.clearRefreshAttemptTracking(), "tokens" === e3 && await this._releaseRefreshLeaseIfHeld("refresh_failed"), "client" !== e3 && "all" !== e3 || await this._releaseRegistrationLeaseIfHeld("invalidation_" + e3);
        let t3 = false;
        if ("tokens" === e3) try {
          const e4 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
          if (e4) {
            const r4 = await Hy.parseAsync(JSON.parse(e4));
            t3 = Boolean(r4.refresh_token);
          }
        } catch {
        }
        let r3 = false;
        if ("tokens" === e3 && this.lastReturnedRefreshToken) try {
          const e4 = await this.getSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey });
          if (e4) {
            const t4 = await Hy.parseAsync(JSON.parse(e4));
            t4.refresh_token && t4.refresh_token !== this.lastReturnedRefreshToken && (r3 = true);
          }
        } catch (e4) {
          H_(this.identifier).warn(`Failed to check sibling refresh rotation: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        const n3 = this.latestAuthorizationClientInformation?.client_id ?? this.attemptClientInformation?.client_id;
        switch (H_(this.identifier).warn(`Invalidating credentials: ${e3}`, p({ event: "mcp_oauth_invalidate_credentials", scope: e3, hadRefreshToken: t3, likelyConcurrentRefreshRace: "tokens" === e3 && t3, siblingAlreadyRefreshed: r3, invalidatingClientId: n3, ...lv(this.serverUrl) })), e3) {
          case "tokens": {
            if (r3) throw H_(this.identifier).info("Sibling already refreshed; aborting SDK retry to reconnect with fresh tokens", p({ event: "mcp_oauth_sibling_refresh_detected", outcome: "skipped_sibling_rotated", scope: e3, siblingAlreadyRefreshed: true, ...lv(this.serverUrl) })), await X_(this.identifier, "sibling_already_refreshed", void 0, this.executeCommand), new c.NjG(this.identifier);
            const o2 = await this._resolveRefreshPolicy();
            if (o2.classifyBeforeWipe && (function(e4) {
              return Le(e4);
            })(this.lastRefreshError)) {
              H_(this.identifier).info("Refresh network failure — preserving tokens for retry", p({ event: "mcp_oauth_invalidate_credentials_skipped", scope: e3, hadRefreshToken: t3, ...(0, c.X5z)(this.lastRefreshError), ...lv(this.serverUrl) })), await X_(this.identifier, "classify_network_transient", this.lastRefreshError, this.executeCommand);
              const r4 = this.lastRefreshError;
              throw this.lastRefreshError = void 0, (function(e4, t4) {
                const r5 = new Error(e4 instanceof Error ? e4.message : t4);
                return r5.name = Fe.yV, void 0 !== e4 && (r5.cause = e4), e4 instanceof Error && e4.stack && (r5.stack = e4.stack), r5;
              })(r4, "Network refresh failure");
            }
            if (o2.classifyBeforeWipe) {
              const e4 = (0, c.UKO)(this.lastRefreshError, { allowInvalidGrantGeneric: true });
              H_(this.identifier).warn("MCP OAuth refresh failed — wiping tokens", p({ event: "mcp_oauth_refresh_result", outcome: "failure_tokens_wiped", hadRefreshToken: t3, invalidatingClientId: n3, permanentReason: e4?.reason ?? "not_network_timeout", ...(0, c.X5z)(this.lastRefreshError), ...lv(this.serverUrl) }));
            } else H_(this.identifier).warn("MCP OAuth refresh failed — wiping tokens", p({ event: "mcp_oauth_refresh_result", outcome: "failure_tokens_wiped", hadRefreshToken: t3, invalidatingClientId: n3, ...(0, c.X5z)(this.lastRefreshError), ...lv(this.serverUrl) }));
            await X_(this.identifier, "tokens_wiped", this.lastRefreshError, this.executeCommand), await this.deleteSecretWithFallback({ primaryKey: this.tokensKey, fallbackKey: this.tokensFallbackKey, migrationCompleteKey: this.tokensMigrationCompleteKey, emitCredentialsClearedLog: false }), await this.setLocalUpdatedAtMs(-1), this.lastRefreshError = void 0;
            break;
          }
          case "client":
            await this.deleteSecretWithFallback({ primaryKey: this.clientInformationKey, fallbackKey: this.clientInformationFallbackKey, migrationCompleteKey: this.clientInformationMigrationCompleteKey, emitCredentialsClearedLog: false }), await this._releaseRegistrationLeaseIfHeld("client_invalidated");
            break;
          case "verifier":
            await this.clearOAuthAttemptState(), await W_(this.oauthContext.globalState, [this.codeVerifierKey]);
            break;
          case "all":
            await this.clear();
        }
      }
    }
    const Fv = /* @__PURE__ */ new Map();
    const qv = require("node:http"), zv = ["html,body{margin:0;min-height:100%;}", 'body{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#0c0c0d;color:#f4f4f5;}', ".page{display:flex;min-height:100vh;flex:1;align-items:center;justify-content:center;}", ".content{text-align:center;}", ".message{font-size:1.125rem;line-height:1.75rem;margin:0;font-weight:400;}", ".hint{margin:0.5rem 0 0;font-size:1rem;line-height:1.5rem;color:#a1a1aa;}", ".return-link{display:inline-block;margin-top:1rem;font-size:1rem;line-height:1.5rem;color:#f4f4f5;text-decoration:underline;text-underline-offset:4px;}"].join("");
    function Uv(e3) {
      return e3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function Bv(e3) {
      const t3 = e3.returnUrl;
      return ["<!doctype html>", '<html lang="en">', "<head>", '<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">', `<title>${Uv(e3.title ?? "Cursor Agent - Turn your ideas into code")}</title>`, "<style>", zv, "</style>", "</head>", "<body>", '<main class="page">', '<div class="content">', `<p class="message">${Uv(e3.message)}</p>`, `<p class="hint">${Uv(e3.hint)}</p>`, void 0 !== t3 ? `<a class="return-link" href="${Uv(t3)}">${Uv(e3.returnLabel ?? "Return to Cursor")}</a>` : "", "</div>", "</main>", true === e3.autoRedirect && void 0 !== t3 ? `<script>setTimeout(function(){ window.location.href = ${r3 = t3, JSON.stringify(r3).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")}; }, 500);<\/script>` : "", "</body>", "</html>"].join("");
      var r3;
    }
    function Lv(e3) {
      return Bv({ message: "Authorization complete!", hint: "You can close this tab and return to Cursor.", returnUrl: e3, autoRedirect: void 0 !== e3 });
    }
    function Vv(e3) {
      return Bv({ message: "OAuth callback failed.", hint: "Return to Cursor and try connecting again.", returnUrl: e3 });
    }
    const Kv = 12e4, Zv = "/cancel", Wv = "cancelled", Hv = "/claim", Yv = "unclaimed", Gv = "OAuth login superseded by a newer attempt", Xv = "text/html; charset=utf-8";
    function Qv(e3, t3) {
      const r3 = (n3 = t3.search).startsWith("?") ? n3.slice(1) : n3;
      var n3;
      return { method: e3, url: t3, query: r3, param: (e4) => is({ query: r3, key: e4 }) };
    }
    const ew = { info: () => {
    }, warn: () => {
    } };
    function tw(e3) {
      return e3 instanceof Error ? e3.message : String(e3);
    }
    function rw(e3) {
      return e3 instanceof Error ? e3 : new Error(String(e3));
    }
    function nw(e3) {
      return "EADDRINUSE" === e3.code || e3.message.includes("EADDRINUSE") || e3.message.includes("already in use");
    }
    function ow(e3, t3) {
      const r3 = e3.includes(":") ? `[${e3}]` : e3;
      return new URL(`http://${r3}:${t3}${Zv}`);
    }
    async function sw(e3) {
      try {
        const t3 = await fetch(ow(e3.host, e3.port), { method: "POST", signal: AbortSignal.timeout(500) });
        return t3.ok && await t3.text() === Wv;
      } catch {
        return false;
      }
    }
    function iw(e3) {
      return void 0 === e3 ? Hv : `${Hv}?${new URLSearchParams({ state: e3 }).toString()}`;
    }
    const aw = async ({ host: e3, port: t3, state: r3 }) => {
      try {
        const n3 = await fetch(new URL(iw(r3), ow(e3, t3)), { signal: AbortSignal.timeout(500) });
        return { ok: n3.ok, body: await n3.text() };
      } catch {
        return;
      }
    };
    function cw(e3, t3) {
      const r3 = is({ query: e3, key: "state" });
      if (r3 !== t3) return;
      const n3 = is({ query: e3, key: "error" });
      if (void 0 !== n3) return { ok: false, error: n3, errorDescription: is({ query: e3, key: "error_description" }), state: r3, query: e3 };
      const o2 = is({ query: e3, key: "code" });
      return void 0 !== o2 && o2.length > 0 ? { ok: true, code: o2, state: r3, query: e3 } : void 0;
    }
    async function uw(e3) {
      await new Promise((t3) => {
        const r3 = setTimeout(t3, e3);
        r3.unref?.();
      });
    }
    async function lw(e3) {
      await new Promise((t3) => setTimeout(t3, e3));
    }
    const dw = new URL(i2.tl).hostname, pw = "127.0.0.1";
    function fw(e3) {
      return e3 === pw ? [pw] : e3.includes(":") ? [e3.replace(/^\[|\]$/g, "")] : [pw, "::1"];
    }
    function hw(e3) {
      if ("http:" !== e3.protocol || !/* @__PURE__ */ (function(e4) {
        return e4 === dw || e4 === pw || "[::1]" === e4 || "::1" === e4;
      })(e3.hostname)) throw new Error("MCP OAuth redirect_uri must be a loopback HTTP URL.");
      const t3 = Number.parseInt(e3.port, 10);
      if (!Number.isInteger(t3) || t3 <= 0) throw new Error("MCP OAuth redirect_uri must include a port.");
      return { port: t3 };
    }
    const mw = { hosts: (e3) => fw(e3.hostname), cancel: sw, claim: aw, bind: async ({ redirectUrl: e3, host: t3, onRequest: r3 }) => {
      const { port: n3 } = hw(e3), o2 = (0, qv.createServer)({ maxHeaderSize: 65536 }, (t4, n4) => {
        let o3;
        try {
          o3 = new URL(t4.url ?? "/", e3.origin);
        } catch {
          return void n4.writeHead(400, { "Content-Type": Xv }).end("Bad request.");
        }
        r3(Qv(t4.method ?? "GET", o3)).then((e4) => {
          const t5 = Buffer.from(e4.body, "utf8");
          let r4 = false;
          const o4 = () => {
            r4 || (r4 = true, setImmediate(() => e4.onFlushed?.()));
          };
          n4.destroyed ? o4() : (n4.once("finish", o4), n4.once("close", o4), n4.writeHead(e4.statusCode, { "Content-Type": Xv, "Content-Length": String(t5.byteLength), Connection: "close" }), n4.end(t5));
        });
      });
      try {
        await new Promise((e4, r4) => {
          const s2 = (e5) => r4(e5);
          o2.once("error", s2), o2.listen(n3, t3, () => {
            o2.off("error", s2), e4();
          });
        });
      } catch (e4) {
        throw o2.close(), e4;
      }
      return o2.unref(), { close: () => new Promise((e4) => {
        o2.close(() => e4()), o2.closeAllConnections?.();
      }), destroy: () => new Promise((e4) => {
        o2.close(() => e4()), o2.closeAllConnections?.();
      }) };
    } };
    class gw {
      constructor(e3) {
        this.origins = /* @__PURE__ */ new Map(), this.live = /* @__PURE__ */ new Map(), this.closing = /* @__PURE__ */ new Map(), this.bind = e3?.bind ?? mw, this.requestCancel = this.bind.cancel ?? sw, this.requestClaim = this.bind.claim ?? aw, this.log = e3?.log ?? ew;
      }
      async acquire(e3, t3, r3, n3 = true) {
        hw(e3);
        const o2 = e3.origin, s2 = { handler: t3, onPreempt: r3 };
        for (; ; ) {
          const t4 = this.closing.get(o2);
          if (null != t4) {
            await t4;
            continue;
          }
          let r4 = this.origins.get(o2);
          if (null == r4) {
            r4 = this.bindOrigin(e3, n3), this.origins.set(o2, r4);
            const t5 = r4;
            t5.catch(() => {
              this.origins.get(o2) === t5 && this.origins.delete(o2);
            });
          }
          const i3 = await r4;
          if (i3.dead) throw new Error(Gv);
          if (this.origins.get(o2) !== r4 || this.closing.has(o2)) continue;
          i3.registrations.add(s2);
          let a3 = false;
          return async () => {
            if (a3) return;
            if (a3 = true, i3.registrations.delete(s2), i3.registrations.size > 0) return;
            if (await Promise.allSettled([...i3.inFlight]), i3.registrations.size > 0) return;
            if (this.origins.get(o2) !== r4) {
              const e5 = this.closing.get(o2);
              return void (null != e5 && await e5);
            }
            this.origins.delete(o2), this.forgetLive(o2, i3);
            const e4 = this.closeServers(i3, "close");
            this.closing.set(o2, e4);
            try {
              await e4;
            } finally {
              this.closing.get(o2) === e4 && this.closing.delete(o2);
            }
          };
        }
      }
      async bindMissing(e3, t3 = true) {
        const r3 = this.live.get(e3.origin);
        if (null == r3 || r3.dead) return "incomplete";
        const n3 = await this.bindHosts(r3, t3);
        if (!r3.dead && r3.servers.size === r3.hosts.length) return "complete";
        if (!n3.some(nw)) return "incomplete";
        const o2 = fw(e3.hostname).includes("::1") ? "::1" : pw;
        return !r3.dead && r3.servers.has(o2) ? "reachable" : "occupied";
      }
      async foreignHolderSpeaksClaim(e3) {
        const { port: t3 } = hw(e3), r3 = this.unboundHosts(e3);
        return r3.length > 0 && (async function(e4) {
          const t4 = e4.claim ?? aw;
          for (const r4 of e4.hosts) {
            const n3 = await t4({ host: r4, port: e4.port });
            if (n3?.body === Yv) return true;
          }
          return false;
        })({ hosts: r3, port: t3, claim: this.requestClaim });
      }
      async pollForeignClaim(e3, t3) {
        const { port: r3 } = hw(e3), n3 = this.unboundHosts(e3);
        return 0 === n3.length ? void 0 : (async function(e4) {
          const t4 = e4.claim ?? aw;
          for (const r4 of e4.hosts) {
            const n4 = await t4({ host: r4, port: e4.port, state: e4.state }), o2 = true === n4?.ok ? cw(n4.body, e4.state) : void 0;
            if (void 0 !== o2) return o2;
          }
        })({ hosts: n3, port: r3, state: t3, claim: this.requestClaim });
      }
      takeParkedCallback(e3, t3) {
        const r3 = this.live.get(e3.origin);
        if (null == r3 || r3.dead) return;
        const n3 = this.takeForeignCallback(r3, t3);
        return void 0 === n3 ? void 0 : cw(n3, t3);
      }
      unboundHosts(e3) {
        const t3 = this.live.get(e3.origin);
        return null == t3 || t3.dead ? this.bind.hosts(e3) : t3.hosts.filter((e4) => !t3.servers.has(e4));
      }
      async dispose() {
        const e3 = [...this.live.values()];
        this.live.clear();
        const t3 = [...this.origins.values()];
        this.origins.clear();
        for (const t4 of e3) this.killRegistrations(t4), await this.closeServers(t4, "destroy");
        for (const e4 of t3) try {
          const t4 = await e4;
          this.killRegistrations(t4), await this.closeServers(t4, "destroy");
        } catch {
        }
        const r3 = [...this.closing.values()];
        this.closing.clear(), await Promise.allSettled(r3);
      }
      async closeServers(e3, t3) {
        const r3 = [...e3.servers.values()];
        e3.servers.clear(), await Promise.all(r3.map((e4) => "close" === t3 ? e4.close() : e4.destroy()));
      }
      async bindOrigin(e3, t3) {
        const r3 = e3.origin, n3 = { redirectUrl: e3, hosts: this.bind.hosts(e3), servers: /* @__PURE__ */ new Map(), registrations: /* @__PURE__ */ new Set(), inFlight: /* @__PURE__ */ new Set(), foreignCallbacks: /* @__PURE__ */ new Map(), dead: false };
        this.live.set(r3, n3);
        try {
          const e4 = await this.bindHosts(n3, t3);
          if (n3.dead) throw new Error(Gv);
          if (0 === n3.servers.size) throw this.forgetLive(r3, n3), e4[0] ?? new Error(`MCP OAuth loopback could not bind ${r3}.`);
          return this.log.info({ kind: "listening", detail: r3 }), n3;
        } catch (e4) {
          throw n3.dead || (this.forgetLive(r3, n3), await this.closeServers(n3, "destroy")), e4;
        }
      }
      async bindOneHost(e3, t3, r3) {
        if (e3.dead) return false;
        const n3 = await this.bind.bind({ redirectUrl: e3.redirectUrl, host: t3, onRequest: (e4) => this.dispatch(r3, e4) });
        return e3.servers.set(t3, n3), !e3.dead && this.live.get(r3) === e3 || (e3.servers.delete(t3), await n3.destroy(), false);
      }
      async bindHosts(e3, t3 = true) {
        const r3 = e3.redirectUrl.origin, { port: n3 } = hw(e3.redirectUrl), o2 = [];
        for (const s2 of e3.hosts) if (!e3.servers.has(s2)) try {
          if (!await this.bindOneHost(e3, s2, r3)) break;
        } catch (i3) {
          const a3 = rw(i3);
          if (t3 && nw(a3) && (await this.requestCancel({ host: s2, port: n3 }), await this.retryBindAfterCancel(e3, s2, r3))) continue;
          o2.push(a3);
        }
        return o2;
      }
      async retryBindAfterCancel(e3, t3, r3) {
        for (let n3 = 0; n3 < 10; n3++) try {
          return await this.bindOneHost(e3, t3, r3);
        } catch {
          if (9 === n3) return false;
          await lw(50);
        }
        return false;
      }
      async dispatch(e3, t3) {
        const r3 = this.live.get(e3);
        if (null == r3 || r3.dead) return { statusCode: 404, body: "Not found." };
        const n3 = this.route(r3, t3);
        r3.inFlight.add(n3);
        try {
          return await n3;
        } finally {
          r3.inFlight.delete(n3);
        }
      }
      async route(e3, t3) {
        if ("POST" === t3.method && t3.url.pathname === Zv) return { statusCode: 200, body: Wv, onFlushed: () => this.preemptOrigin(e3) };
        if ("GET" === t3.method && t3.url.pathname === Hv) {
          const r4 = this.takeForeignCallback(e3, t3.param("state"));
          return void 0 === r4 ? { statusCode: 404, body: Yv } : { statusCode: 200, body: r4 };
        }
        for (const r4 of [...e3.registrations]) try {
          const e4 = await r4.handler(t3);
          if (void 0 !== e4) return e4;
        } catch (e4) {
          this.log.warn({ kind: "handler-failed", detail: tw(e4) });
        }
        const r3 = this.parkUnclaimedCallback(e3, t3);
        return void 0 !== r3 ? r3 : { statusCode: 404, body: "Not found." };
      }
      parkUnclaimedCallback(e3, t3) {
        const r3 = (function(e4, t4) {
          if ("GET" !== t4.method || t4.url.pathname !== e4.pathname) return;
          if (t4.query.length > 16384) return;
          if (void 0 === t4.param("code") && void 0 === t4.param("error")) return;
          const r4 = t4.param("state");
          return void 0 !== r4 && r4.length > 0 && r4.length <= 4096 ? r4 : void 0;
        })(e3.redirectUrl, t3);
        if (void 0 === r3) return;
        const n3 = Date.now();
        for (const [t4, r4] of e3.foreignCallbacks) n3 - r4.at > Kv && e3.foreignCallbacks.delete(t4);
        if (!e3.foreignCallbacks.has(r3) && e3.foreignCallbacks.size >= 32) {
          const t4 = e3.foreignCallbacks.keys().next().value;
          void 0 !== t4 && e3.foreignCallbacks.delete(t4);
        }
        return e3.foreignCallbacks.set(r3, { query: t3.query, at: n3 }), { statusCode: 200, body: Bv({ message: "Authorization received.", hint: "Go back to the app that asked you to sign in. You can close this tab." }) };
      }
      takeForeignCallback(e3, t3) {
        if (void 0 === t3 || 0 === t3.length) return;
        const r3 = e3.foreignCallbacks.get(t3);
        return void 0 === r3 || (e3.foreignCallbacks.delete(t3), Date.now() - r3.at > Kv) ? void 0 : r3.query;
      }
      forgetLive(e3, t3) {
        this.live.get(e3) === t3 && this.live.delete(e3);
      }
      killRegistrations(e3) {
        if (e3.dead) return;
        e3.dead = true, e3.foreignCallbacks.clear();
        const t3 = [...e3.registrations];
        e3.registrations.clear();
        for (const e4 of t3) e4.onPreempt?.();
      }
      preemptOrigin(e3) {
        if (e3.dead) return;
        const t3 = e3.redirectUrl.origin;
        if (this.killRegistrations(e3), this.forgetLive(t3, e3), this.origins.has(t3) && this.origins.delete(t3), this.closing.has(t3)) return void this.closeServers(e3, "destroy");
        const r3 = this.closeServers(e3, "destroy");
        this.closing.set(t3, r3), r3.finally(() => {
          this.closing.get(t3) === r3 && this.closing.delete(t3);
        }), this.log.info({ kind: "callback-aborted", detail: Gv });
      }
    }
    let yw;
    async function _w(e3, t3) {
      if (void 0 === t3.release) {
        let r3;
        try {
          r3 = await e3.registry.acquire(e3.redirectUrl, e3.handler, e3.onPreempt, false);
        } catch {
          return;
        }
        if (t3.finished) return void await r3();
        t3.release = r3;
      }
      "complete" === await e3.registry.bindMissing(e3.redirectUrl, false) && (t3.handoff = false);
    }
    async function vw(e3) {
      const { log: t3, registry: r3, redirectUrl: n3, successPage: o2, errorPage: s2, timeoutMs: a3 } = (function(e4) {
        return { log: e4.log ?? ew, registry: e4.registry ?? (yw ??= new gw(), yw), redirectUrl: e4.redirectUrl ?? i2.tl, successPage: e4.pages?.success ?? (() => Lv()), errorPage: e4.pages?.error ?? (() => Vv()), timeoutMs: e4.timeoutMs ?? Kv };
      })(e3), c2 = new URL(n3);
      let u2;
      const l2 = new Promise((e4) => {
        u2 = e4;
      }), d2 = { registry: r3, redirectUrl: c2, handler: async (r4) => {
        if (r4.url.pathname !== c2.pathname || "GET" !== r4.method) return;
        const n4 = r4.param("state");
        if (!e3.claims(n4)) return;
        const i3 = r4.param("error"), a4 = r4.param("code"), l3 = void 0 !== i3 ? new Error(i3) : void 0 === a4 ? new Error("No authorization code provided") : void 0;
        return void 0 !== l3 ? (t3.warn({ kind: "callback-failed", detail: l3.message }), { statusCode: 400, body: s2(), onFlushed: () => u2({ error: l3 }) }) : { statusCode: 200, body: o2(), onFlushed: () => {
          t3.info({ kind: "callback-delivered", detail: c2.origin }), u2({ result: { code: a4, state: n4, query: r4.query } });
        } };
      }, onPreempt: () => {
        u2({ error: new Error(Gv) }), t3.info({ kind: "callback-aborted", detail: Gv });
      } }, p2 = await (async function(e4) {
        const { registry: t4, redirectUrl: r4 } = e4, n4 = { release: void 0, handoff: false, finished: false };
        try {
          n4.release = await t4.acquire(r4, e4.handler, e4.onPreempt);
        } catch (e5) {
          if (!(e5 instanceof Error && nw(e5) && await t4.foreignHolderSpeaksClaim(r4))) throw e5;
          return n4.handoff = true, n4;
        }
        const o3 = await t4.bindMissing(r4);
        return n4.handoff = "complete" !== o3 && await t4.foreignHolderSpeaksClaim(r4), n4;
      })(d2), f2 = setTimeout(() => {
        u2({ error: new Error(`Timed out waiting for the OAuth callback on ${c2.href}`) });
      }, a3);
      let h2;
      f2.unref?.();
      const m2 = (r4) => !(p2.finished || void 0 === r4 || !e3.claims(r4.state)) && (u2((function(e4, t4, r5) {
        return e4.ok ? (r5.info({ kind: "callback-delivered", detail: t4 }), { result: { code: e4.code, state: e4.state, query: e4.query } }) : (r5.warn({ kind: "callback-failed", detail: e4.error }), { error: new Error(e4.error) });
      })(r4, c2.origin, t3)), true), g2 = (e4) => {
        p2.finished || void 0 !== h2 || 0 === e4.length || (h2 = e4, m2(r3.takeParkedCallback(c2, e4)));
      };
      p2.handoff && (async function(e4, t4, r4) {
        for (; t4.handoff && !t4.finished; ) {
          if (await _w(e4, t4), t4.finished || await r4()) return;
          await uw(200);
        }
      })(d2, p2, async () => void 0 !== h2 && (!!m2(r3.takeParkedCallback(c2, h2)) || m2(await r3.pollForeignClaim(c2, h2)))), void 0 !== e3.state && g2(e3.state);
      const y2 = async () => {
        p2.finished || (p2.finished = true, clearTimeout(f2), await p2.release?.());
      }, _2 = l2.then(async (e4) => {
        if (await y2(), void 0 !== e4.error) throw e4.error;
        return e4.result;
      });
      return _2.catch(() => {
      }), { redirectUrl: n3, delivered: _2, watchForeignClaim: g2, cancel: async (e4) => {
        u2({ error: new Error(e4 ?? "OAuth login cancelled") }), void 0 !== e4 && t3.info({ kind: "callback-aborted", detail: e4 }), await y2();
      } };
    }
    let ww, bw;
    const Sw = /* @__PURE__ */ new Set();
    const kw = { info: ({ kind: e3, detail: t3 }) => g.info(`MCP OAuth loopback ${e3}: ${t3}`), warn: ({ kind: e3, detail: t3 }) => g.warn(`MCP OAuth loopback ${e3}: ${t3}`) };
    async function Ew(e3) {
      return bw ??= new gw({ bind: Cw, log: kw }), (async function(e4) {
        const t3 = e4.log ?? ew, r3 = e4.returnToCursorUrl;
        let n3, o2, s2 = false;
        try {
          o2 = await vw({ claims: (e5) => s2 && e5 === n3, redirectUrl: e4.redirectUrl, registry: e4.registry, pages: { success: () => Lv(r3), error: () => Vv(r3) }, log: t3 });
        } catch (e5) {
          return void t3.warn({ kind: "unavailable", detail: tw(e5) });
        }
        let i3 = false;
        return o2.delivered.then(async (r4) => {
          i3 = true;
          try {
            await e4.onDelivered(r4);
          } catch (e5) {
            t3.warn({ kind: "callback-failed", detail: tw(e5) });
          }
          e4.onDispose?.();
        }).catch(() => {
          i3 || (i3 = true, e4.onDispose?.());
        }), { redirectUrl: o2.redirectUrl, setExpectedState: (e5) => {
          n3 = e5, s2 = true, o2.watchForeignClaim(e5);
        }, dispose: () => {
          i3 || (i3 = true, o2.cancel().finally(() => e4.onDispose?.()));
        } };
      })({ ...e3, redirectUrl: i2.tl, registry: bw, log: kw, onDelivered: async ({ query: e4 }) => {
        await ww?.(e4);
      } });
    }
    function xw(e3) {
      switch (e3) {
        case 200:
        default:
          return "OK";
        case 400:
          return "Bad Request";
        case 404:
          return "Not Found";
        case 405:
          return "Method Not Allowed";
        case 431:
          return "Request Header Fields Too Large";
        case 500:
          return "Internal Server Error";
        case 503:
          return "Service Unavailable";
      }
    }
    function Tw(e3, t3, r3, n3) {
      const o2 = new TextEncoder().encode(r3.body), s2 = new TextEncoder().encode([`HTTP/1.1 ${r3.statusCode} ${xw(r3.statusCode)}`, "Content-Type: text/html; charset=utf-8", `Content-Length: ${o2.byteLength}`, "Connection: close", "", ""].join("\r\n")), i3 = new Uint8Array(s2.byteLength + o2.byteLength);
      i3.set(s2, 0), i3.set(o2, s2.byteLength), n3.arm(t3, r3.onFlushed), e3.write(t3, i3), e3.closeConnection(t3);
    }
    function Ow(e3, t3) {
      const r3 = e3.indexOf("\r\n\r\n");
      if (r3 < 0) return;
      const n3 = e3.slice(0, r3), o2 = e3.slice(r3 + 4), s2 = Number(n3.split(" ")[1]), i3 = /content-length:\s*(\d+)/i.exec(n3);
      if (null === i3) return t3 ? { status: s2, body: o2 } : void 0;
      const a3 = Number(i3[1]);
      return o2.length < a3 ? void 0 : { status: s2, body: o2.slice(0, a3) };
    }
    function Pw(e3) {
      return Number.isInteger(e3) && e3 >= 200 && e3 < 300;
    }
    async function Iw(e3) {
      const t3 = a2.cursor?.createTcpConnection;
      if ("function" != typeof t3) return;
      const r3 = [`${e3.method} ${e3.target} HTTP/1.1`, "Host: " + (n3 = e3.host, o2 = e3.port, `${n3.includes(":") ? `[${n3}]` : n3}:${o2}`), "Connection: close", "Content-Length: 0", "", ""].join("\r\n");
      var n3, o2;
      return await new Promise((n4) => {
        let o3, s2, i3, a3 = false, c2 = "";
        const u2 = (e4) => {
          a3 || (a3 = true, clearTimeout(l2), s2?.dispose(), i3?.dispose(), o3?.close(), n4(e4));
        }, l2 = setTimeout(() => u2(void 0), 500);
        (async () => {
          try {
            o3 = await t3({ host: e3.host, port: e3.port });
          } catch {
            return void u2(void 0);
          }
          a3 ? o3.close() : (s2 = o3.onDidReceiveData((e4) => {
            c2 += new TextDecoder().decode(e4);
            const t4 = Ow(c2, false);
            void 0 !== t4 && u2(t4);
          }), i3 = o3.onDidClose(() => {
            u2(Ow(c2, true));
          }), o3.send(new TextEncoder().encode(r3)));
        })();
      });
    }
    const Cw = { hosts: (e3) => [e3.hostname], cancel: async function(e3) {
      const t3 = await Iw({ ...e3, method: "POST", target: Zv });
      return void 0 !== t3 && Pw(t3.status) && t3.body === Wv;
    }, claim: async ({ host: e3, port: t3, state: r3 }) => {
      const n3 = await Iw({ host: e3, port: t3, method: "GET", target: iw(r3) });
      return void 0 === n3 ? void 0 : { ok: Pw(n3.status), body: n3.body };
    }, bind: async ({ redirectUrl: e3, host: t3, onRequest: r3 }) => {
      if ("function" != typeof a2.cursor?.createTcpServer) throw new Error("createTcpServer API missing");
      const n3 = Number(e3.port), o2 = await a2.cursor.createTcpServer(t3, n3);
      if (o2.localPort !== n3) throw o2.close(), Object.assign(new Error(`EADDRINUSE: requested port ${n3}, got ${o2.localPort}`), { code: "EADDRINUSE" });
      const s2 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ (function() {
        const e4 = /* @__PURE__ */ new Map(), t4 = /* @__PURE__ */ new Set(), r4 = (e5) => {
          setTimeout(e5, 0);
        };
        return { arm: (n4, o3) => {
          void 0 !== o3 && (t4.delete(n4) ? r4(o3) : e4.set(n4, o3));
        }, settle: (n4) => {
          const o3 = e4.get(n4);
          void 0 !== o3 ? (e4.delete(n4), r4(o3)) : t4.add(n4);
        }, release: () => {
          const n4 = [...e4.values()];
          e4.clear(), t4.clear();
          for (const e5 of n4) r4(e5);
        } };
      })(), c2 = o2.onDidReceiveData(({ connectionId: t4, data: n4 }) => {
        const a3 = s2.get(t4), c3 = (a3?.byteLength ?? 0) + n4.byteLength;
        if (c3 > 16384) return s2.delete(t4), void Tw(o2, t4, { statusCode: 431, body: "Request header too large." }, i3);
        const u3 = (a3?.text ?? "") + new TextDecoder().decode(n4);
        if (s2.set(t4, { text: u3, byteLength: c3 }), !u3.includes("\r\n\r\n")) return;
        s2.delete(t4);
        const l3 = ((t5) => {
          const r4 = t5.split(/\r?\n/, 1)[0] ?? "", [n5, o3] = r4.split(" ");
          if (n5 && o3) try {
            return Qv(n5, new URL(o3, e3.origin));
          } catch {
            return;
          }
        })(u3);
        void 0 !== l3 ? r3(l3).then((e4) => {
          Tw(o2, t4, e4, i3);
        }) : Tw(o2, t4, { statusCode: 400, body: "Bad request." }, i3);
      }), u2 = o2.onDidCloseConnection(({ connectionId: e4 }) => {
        s2.delete(e4), i3.settle(e4);
      }), l2 = async (e4) => {
        c2.dispose(), u2.dispose(), s2.clear(), i3.release(), o2.close(e4);
      };
      return { close: () => l2(), destroy: () => l2(0) };
    } };
    function Aw(e3) {
      return g.getLogger(e3);
    }
    const $w = async ({ identifier: e3, serverInfo: t3, host: r3, authEventSink: n3, canonicalServerUrl: o2, transportServerUrl: s2 }) => {
      const a3 = (0, c.qFm)("auth" in t3 ? t3.auth?.CLIENT_ID : void 0), u2 = a3 ? { client_id: a3, ..."auth" in t3 && t3.auth?.CLIENT_SECRET ? { client_secret: t3.auth.CLIENT_SECRET } : {} } : void 0, l2 = await r3.checkFeatureGate("proper_well_known_for_mcp_scopes"), d2 = await jv({ serverUrl: s2, authConfig: "auth" in t3 ? t3.auth : void 0, useProperWellKnown: l2 }), p2 = { config: await r3.getDynamicConfigValue("mcp_oauth_loopback_redirect"), serverUrl: o2, restMcpProviderMetadata: await (0, c.Ezk)(o2) }, f2 = _t(p2), h2 = (function(e4) {
        return Sw.delete(e4);
      })(e3), m2 = f2 ? (e4) => Ew({ returnToCursorUrl: `${ev(r3.getAppRoot())}://${i2.jQ}${i2.aG}`, onDispose: e4 }) : void 0, g2 = (y2 = { ...p2, hostedCallbackGate: await r3.checkFeatureGate("mcp_oauth_hosted_loopback_callback") }).hostedCallbackGate && !yt(y2) && _t(y2);
      var y2;
      const _2 = await Ct() ? "serverIdentifier" : "canonicalServerUrl", v2 = new Dv({ oauthContext: r3.getOAuthContext(), appRoot: r3.getAppRoot(), executeCommand: (e4, ...t4) => r3.executeCommand(e4, ...t4), mcpSharedOAuth: r3.mcpSharedOAuth, storageScope: _2, serverUrl: o2, transportServerUrl: s2, identifier: e3, callbackOwner: fv(), needsAuthCallback: (t4) => {
        Aw(e3).info("OAuth provider needs auth callback during connection"), n3.emit({ target: "auth", kind: "auth_required", authorizationUrl: t4.href });
      }, onTokensSaved: () => {
        Aw(e3).info("OAuth tokens saved"), n3.emit({ target: "auth", kind: "tokens_saved" });
      }, staticClientInformation: u2, scopes: d2, rawAuthConfig: "auth" in t3 && t3.auth ? t3.auth : void 0, createRedirectHandle: m2, armLoopbackOnRedirect: h2, hostedCallback: g2 });
      return (function(e4, t4) {
        const r4 = Fv.get(e4);
        r4 && r4 !== t4 && r4.cancelAuthorizationFlow(), Fv.set(e4, t4);
      })(e3, v2), { authProvider: v2, staticClientInfo: u2 };
    }, Rw = { emit(e3, t3, r3, n3) {
      "distribution" === r3 ? a2.cursor.metricsDistribution({ stat: e3, value: t3, tags: [...n3] }) : a2.cursor.metricsIncrement({ stat: e3, value: t3, tags: [...n3] });
    } }, Nw = { addBreadcrumb(e3) {
      a2.tracing.addBreadcrumb(e3);
    }, captureException(e3) {
      a2.tracing.captureException(e3);
    } };
    let Mw = false;
    const Jw = {};
    function jw(e3, t3) {
      if (e3 in Jw) throw new Error(`Action ${e3} already registered`);
      Jw[e3] = t3;
    }
    function Dw(e3, t3, r3, n3 = Math.random) {
      const o2 = t3 * 2 ** e3, s2 = Math.min(o2, r3);
      return n3() * s2;
    }
    var Fw = (e3, t3) => (t3 = Symbol[e3]) ? t3 : /* @__PURE__ */ Symbol.for("Symbol." + e3), qw = (e3) => {
      throw TypeError(e3);
    }, zw = (e3, t3, r3) => {
      var n3, o2;
      null != t3 ? ("object" != typeof t3 && "function" != typeof t3 && qw("Object expected"), r3 && (n3 = t3[Fw("asyncDispose")]), void 0 === n3 && (n3 = t3[Fw("dispose")], r3 && (o2 = n3)), "function" != typeof n3 && qw("Object not disposable"), o2 && (n3 = function() {
        try {
          o2.call(this);
        } catch (e4) {
          return Promise.reject(e4);
        }
      }), e3.push([r3, n3, t3])) : r3 && e3.push([r3]);
      return t3;
    };
    const Uw = a2.env.remoteName ?? "local";
    async function Bw(e3, t3, r3, n3 = []) {
      var o2 = [];
      try {
        const s3 = zw(o2, Cr((r3 ?? (0, gr.q6)()).withName(e3)));
        s3.span.setAttribute("mcp.lease.connection", Uw);
        const i4 = Date.now();
        try {
          const r4 = await t3(), o3 = Date.now() - i4;
          return s3.span.setAttribute("mcp.op.duration_ms", String(o3)), s3.span.setAttribute("mcp.op.outcome", "success"), (0, c.FMv)("mcp.ipc.duration_ms", o3, "distribution", [`name:${e3}`, "outcome:success", ...n3]), (0, c.FMv)("mcp.ipc.count", 1, "increment", [`name:${e3}`, "outcome:success", ...n3]), r4;
        } catch (t4) {
          const r4 = Date.now() - i4;
          throw s3.span.setAttribute("mcp.op.duration_ms", String(r4)), s3.span.setAttribute("mcp.op.outcome", "error"), (0, c.FMv)("mcp.ipc.duration_ms", r4, "distribution", [`name:${e3}`, "outcome:error", ...n3]), (0, c.FMv)("mcp.ipc.count", 1, "increment", [`name:${e3}`, "outcome:error", ...n3]), t4;
        }
      } catch (e4) {
        var s2 = e4, i3 = true;
      } finally {
        ((e4, t4, r4) => {
          var n4 = "function" == typeof SuppressedError ? SuppressedError : function(e5, t5, r5, n5) {
            return (n5 = Error(r5)).name = "SuppressedError", n5.error = e5, n5.suppressed = t5, n5;
          }, o3 = (e5) => t4 = r4 ? new n4(e5, t4, "An error was suppressed during disposal") : (r4 = true, e5), s3 = (n5) => {
            for (; n5 = e4.pop(); ) try {
              var i4 = n5[1] && n5[1].call(n5[2]);
              if (n5[0]) return Promise.resolve(i4).then(s3, (e5) => (o3(e5), s3()));
            } catch (e5) {
              o3(e5);
            }
            if (r4) throw t4;
          };
          s3();
        })(o2, s2, i3);
      }
    }
    var Lw = (e3, t3) => (t3 = Symbol[e3]) ? t3 : /* @__PURE__ */ Symbol.for("Symbol." + e3), Vw = (e3) => {
      throw TypeError(e3);
    }, Kw = (e3, t3, r3) => {
      var n3, o2;
      null != t3 ? ("object" != typeof t3 && "function" != typeof t3 && Vw("Object expected"), r3 && (n3 = t3[Lw("asyncDispose")]), void 0 === n3 && (n3 = t3[Lw("dispose")], r3 && (o2 = n3)), "function" != typeof n3 && Vw("Object not disposable"), o2 && (n3 = function() {
        try {
          o2.call(this);
        } catch (e4) {
          return Promise.reject(e4);
        }
      }), e3.push([r3, n3, t3])) : r3 && e3.push([r3]);
      return t3;
    };
    const Zw = g.getLogger("canonical-cache");
    const Ww = g.getLogger("snapshot-push"), Hw = new class {
      constructor(e3) {
        this._snapshots = /* @__PURE__ */ new Map(), this._pendingRefreshes = /* @__PURE__ */ new Map(), this._queuedRefreshArgs = /* @__PURE__ */ new Map(), this._removedServers = /* @__PURE__ */ new Set(), this._queuedRefreshes = [], this._activeRefreshes = 0, this._onDidChange = new c.XUi(), this.onDidChange = this._onDidChange.event, this._maxConcurrentRefreshes = Math.max(1, e3?.maxConcurrentRefreshes ?? 10);
      }
      updateServerStatus(e3, t3, r3) {
        const n3 = this._snapshots.get(e3), { status: o2, statusDetail: s2, statusRetryable: i3 } = K_(r3), a3 = { serverIdentifier: e3, serverName: n3?.serverName ?? t3.serverName, status: o2, statusDetail: s2, statusRetryable: i3, tools: n3?.tools ?? [], resources: n3?.resources ?? [], prompts: n3?.prompts ?? [], instructions: n3?.instructions };
        return this._snapshots.set(e3, a3), this._onDidChange.fire(a3), a3;
      }
      async refreshServer(e3, t3, r3) {
        this._removedServers.delete(e3), this._queuedRefreshArgs.set(e3, { client: t3, currentStatus: r3 });
        const n3 = this._pendingRefreshes.get(e3);
        if (n3) return n3;
        const o2 = this._drainRefreshes(e3);
        this._pendingRefreshes.set(e3, o2);
        try {
          return await o2;
        } finally {
          this._pendingRefreshes.delete(e3);
        }
      }
      async _drainRefreshes(e3) {
        let t3 = this._snapshots.get(e3);
        for (; ; ) {
          const r3 = this._queuedRefreshArgs.get(e3);
          if (!r3) {
            if (t3) return t3;
            throw new Error(`No snapshot available for server ${e3}`);
          }
          this._queuedRefreshArgs.delete(e3), t3 = await this._doRefresh(e3, r3.client, r3.currentStatus);
        }
      }
      async _doRefresh(e3, t3, r3) {
        var n3, o2 = [];
        try {
          const s3 = this._snapshots.get(e3), i4 = (n3 = `McpCanonicalCache.refresh(${e3})`, (0, gr.q6)().withName(n3)), a3 = Kw(o2, Cr(i4));
          a3.span.setAttribute("mcp.lease.connection", Uw), a3.span.setAttribute("mcp.refresh.identifier", e3), a3.span.setAttribute("mcp.refresh.has_previous", String(!!s3)), a3.span.setAttribute("mcp.refresh.status", r3?.type ?? "unknown");
          const { queueDelayMs: c2, queuedAhead: u2 } = await this._acquireRefreshSlot(e3), l2 = Date.now();
          try {
            a3.span.setAttribute("mcp.refresh.queue_delay_ms", String(c2)), a3.span.setAttribute("mcp.refresh.queued_ahead", String(u2)), V_("mcp.snapshot.refresh_queue_delay_ms", c2);
            const n4 = await Z_(a3.ctx, e3, t3, r3, s3, { preserveOfferingsOnNeedsAuth: true }), o3 = Date.now() - l2;
            return V_("mcp.snapshot.refresh_duration_ms", o3), V_("mcp.snapshot.refresh_success", 1, "increment"), V_("mcp.snapshot.refresh_tool_count", n4.tools.length), a3.span.setAttribute("mcp.refresh.duration_ms", String(o3)), a3.span.setAttribute("mcp.refresh.tool_count", String(n4.tools.length)), a3.span.setAttribute("mcp.refresh.outcome", "success"), this._removedServers.has(e3) ? (this._removedServers.delete(e3), n4) : (this._snapshots.set(e3, n4), this._onDidChange.fire(n4), n4);
          } catch (r4) {
            const n4 = Date.now() - l2;
            if (V_("mcp.snapshot.refresh_duration_ms", n4), V_("mcp.snapshot.refresh_error", 1, "increment"), a3.span.setAttribute("mcp.refresh.duration_ms", String(n4)), a3.span.setAttribute("mcp.refresh.outcome", "error"), a3.span.setAttribute("mcp.refresh.error", r4 instanceof Error ? r4.message.slice(0, 200) : String(r4).slice(0, 200)), Zw.error(`Failed to fetch snapshot for ${e3}`, r4), this._removedServers.has(e3)) return this._removedServers.delete(e3), s3 ?? { serverIdentifier: e3, serverName: t3.serverName, status: "error", statusDetail: r4 instanceof Error ? r4.message : String(r4), tools: [], resources: [], prompts: [], instructions: void 0 };
            if (s3) return this._onDidChange.fire(s3), s3;
            throw Zw.warn(`No previous snapshot for ${e3}; skipping empty-fallback push`), r4;
          } finally {
            this._releaseRefreshSlot();
          }
        } catch (e4) {
          var s2 = e4, i3 = true;
        } finally {
          ((e4, t4, r4) => {
            var n4 = "function" == typeof SuppressedError ? SuppressedError : function(e5, t5, r5, n5) {
              return (n5 = Error(r5)).name = "SuppressedError", n5.error = e5, n5.suppressed = t5, n5;
            }, o3 = (e5) => t4 = r4 ? new n4(e5, t4, "An error was suppressed during disposal") : (r4 = true, e5), s3 = (n5) => {
              for (; n5 = e4.pop(); ) try {
                var i4 = n5[1] && n5[1].call(n5[2]);
                if (n5[0]) return Promise.resolve(i4).then(s3, (e5) => (o3(e5), s3()));
              } catch (e5) {
                o3(e5);
              }
              if (r4) throw t4;
            };
            s3();
          })(o2, s2, i3);
        }
      }
      async _acquireRefreshSlot(e3) {
        if (this._activeRefreshes < this._maxConcurrentRefreshes) return this._activeRefreshes++, { queueDelayMs: 0, queuedAhead: 0 };
        const t3 = Date.now(), r3 = this._queuedRefreshes.length;
        return await new Promise((e4) => {
          this._queuedRefreshes.push({ resolve: e4, queueStartMs: t3, queuedAhead: r3 });
        });
      }
      _releaseRefreshSlot() {
        const e3 = this._queuedRefreshes.shift();
        if (e3) return 0 === this._activeRefreshes && (this._activeRefreshes = 1), void e3.resolve({ queueDelayMs: Date.now() - e3.queueStartMs, queuedAhead: e3.queuedAhead });
        this._activeRefreshes > 0 && this._activeRefreshes--;
      }
      removeServer(e3) {
        this._pendingRefreshes.has(e3) || this._queuedRefreshArgs.has(e3) ? this._removedServers.add(e3) : this._removedServers.delete(e3), this._snapshots.delete(e3), this._pendingRefreshes.delete(e3), this._queuedRefreshArgs.delete(e3);
      }
      getSnapshot(e3) {
        return this._snapshots.get(e3);
      }
      getAllSnapshots() {
        return Array.from(this._snapshots.values());
      }
      dispose() {
        for (this._onDidChange.dispose(), this._snapshots.clear(), this._pendingRefreshes.clear(), this._queuedRefreshArgs.clear(), this._removedServers.clear(); this._queuedRefreshes.length > 0; ) this._queuedRefreshes.shift()?.resolve({ queueDelayMs: 0, queuedAhead: 0 });
        this._activeRefreshes = 0;
      }
    }();
    let Yw, Gw, Xw = false;
    const Qw = Date.now(), eb = /* @__PURE__ */ new Map(), tb = /* @__PURE__ */ new Map(), rb = /* @__PURE__ */ new Map(), nb = /* @__PURE__ */ new Map(), ob = /* @__PURE__ */ new Map(), sb = /* @__PURE__ */ new Set();
    let ib, ab = 0;
    function cb(e3) {
      ib || "drained" !== e3 ? (ib && (clearTimeout(ib), ib = void 0), ab = 0, Ww.debug("Snapshot recovery loop stopped", { reason: e3, snapshotEpoch: Qw, exhaustedServerCount: sb.size })) : ab = 0;
    }
    function ub() {
      if (!Xw || 0 === sb.size || ib) return;
      const e3 = Dw(ab, 3e4, 12e4);
      ib = setTimeout(() => {
        ib = void 0, (function() {
          if (!Xw) return void cb("inactive");
          if (0 === sb.size) return void cb("drained");
          ab++, V_("mcp.snapshot.push_recovery_loop_attempt", 1, "increment"), Ww.warn("Running snapshot recovery loop backfill after retry exhaustion", { snapshotEpoch: Qw, attempt: ab, exhaustedServerCount: sb.size }), gb(), ub();
        })();
      }, e3), Ww.debug("Snapshot recovery loop scheduled", { snapshotEpoch: Qw, delayMs: e3, attempt: ab, exhaustedServerCount: sb.size });
    }
    function lb(e3, t3) {
      sb.delete(e3) && (Ww.debug(`Snapshot recovery state cleared for ${e3}`, { source: t3, snapshotEpoch: Qw, exhaustedServerCount: sb.size }), 0 === sb.size && cb("drained"));
    }
    function db(e3) {
      return nb.get(e3) ?? Qw;
    }
    function pb(e3, t3, r3) {
      if (!Xw || !Gw) return void fb(e3.serverIdentifier);
      const n3 = db(e3.serverIdentifier), o2 = Date.now();
      try {
        const r4 = { serverIdentifier: e3.serverIdentifier, serverName: e3.serverName, status: e3.status, statusDetail: e3.statusDetail, statusRetryable: e3.statusRetryable, tools: e3.tools.map((e4) => ({ name: e4.name, description: e4.description, inputSchema: e4.inputSchema, outputSchema: e4.outputSchema, annotations: e4.annotations, _meta: e4._meta })), resources: e3.resources, prompts: e3.prompts, instructions: e3.instructions, snapshotEpoch: n3, snapshotRevision: t3 };
        Gw.pushMcpSnapshots([r4]), V_("mcp.snapshot.push_duration_ms", Date.now() - o2), V_("mcp.snapshot.push_success", 1, "increment"), V_("mcp.snapshot.push_tool_count", e3.tools.length), lb(e3.serverIdentifier, "push_success"), fb(e3.serverIdentifier);
      } catch {
        V_("mcp.snapshot.push_duration_ms", Date.now() - o2), V_("mcp.snapshot.push_error", 1, "increment"), Ww.warn(`Snapshot push failed for ${e3.serverIdentifier}; scheduling retry`, { source: r3, snapshotEpoch: n3, snapshotRevision: t3 }), (function(e4, t4, r4) {
          const n4 = (tb.get(e4) ?? 0) + 1;
          if (n4 > 5) return V_("mcp.snapshot.push_retry_exhausted", 1, "increment"), Ww.warn(`Snapshot retry exhausted for ${e4}`, { snapshotEpoch: t4, snapshotRevision: r4, attempt: n4 }), (function(e5, t5, r5, n5) {
            const o4 = sb.has(e5);
            sb.add(e5), o4 || (V_("mcp.snapshot.push_recovery_server_exhausted", 1, "increment"), Ww.warn(`Snapshot entering degraded recovery for ${e5}`, { snapshotEpoch: t5, snapshotRevision: r5, attempt: n5, exhaustedServerCount: sb.size })), ub();
          })(e4, t4, r4, n4), void fb(e4);
          tb.set(e4, n4);
          const o3 = Dw(n4 - 1, 1e3, 3e4), s2 = eb.get(e4);
          s2 && clearTimeout(s2);
          const i3 = setTimeout(() => {
            if (eb.delete(e4), !Xw) return void fb(e4);
            const t5 = Hw.getSnapshot(e4);
            t5 && pb(t5, r4, "retry");
          }, o3);
          eb.set(e4, i3), Ww.debug(`Snapshot retry scheduled for ${e4}`, { snapshotEpoch: t4, snapshotRevision: r4, attempt: n4, delayMs: o3 });
        })(e3.serverIdentifier, n3, t3);
      }
    }
    function fb(e3) {
      const t3 = eb.get(e3);
      t3 && clearTimeout(t3), eb.delete(e3), tb.delete(e3);
    }
    function hb() {
      Hw.onDidChange((e3) => {
        if (!Xw) return;
        pb(e3, (function(e4) {
          const t3 = (rb.get(e4) ?? 0) + 1;
          return rb.set(e4, t3), t3;
        })(e3.serverIdentifier), "cache_change");
      });
    }
    function mb(e3, t3) {
      Gw = t3, Yw = e3, Xw = true, (function(e4) {
        h = e4, (0, c.H$2)(e4);
      })("snapshots"), gb();
    }
    function gb() {
      if (!Yw) return;
      const e3 = Yw.getClients(), t3 = Object.keys(e3);
      if (0 !== t3.length) for (const r3 of t3) {
        const t4 = e3[r3];
        t4 && Hw.refreshServer(r3, t4, void 0).catch((e4) => {
          Ww.debug(`Failed to backfill snapshot for ${r3}`, e4);
        });
      }
      else Gw?.pushMcpSnapshots([]);
    }
    function yb(e3, t3, r3) {
      if (!Xw) return;
      const n3 = t3.getClient(e3);
      if (!n3) return void ob.set(e3, r3);
      const o2 = ob.get(e3);
      ob.delete(e3);
      const s2 = r3 ?? o2;
      Hw.refreshServer(e3, n3, s2).catch((t4) => {
        Ww.debug(`Failed to refresh canonical snapshot for ${e3}`, t4);
      });
    }
    function _b(e3) {
      fb(e3), lb(e3, "server_removed"), ob.delete(e3), (function(e4) {
        const t3 = db(e4) + 1;
        nb.set(e4, t3);
      })(e3), rb.delete(e3), Hw.removeServer(e3);
    }
    hb();
    const vb = /^[0-9A-Za-z_-]+$/;
    function wb(e3) {
      return e3.startsWith("[oauth-attempt:") && e3.endsWith(" mcp_oauth_attempt");
    }
    function bb(e3) {
      const t3 = e3.match(/^\[oauth-attempt:(.+?)\]/);
      return t3?.[1];
    }
    function Sb(e3) {
      if (!e3 || "object" != typeof e3) return;
      const t3 = e3;
      return "string" == typeof t3.attemptId && "number" == typeof t3.createdAtMs && Number.isFinite(t3.createdAtMs) ? { attemptId: t3.attemptId, createdAtMs: t3.createdAtMs } : void 0;
    }
    async function kb(e3, t3) {
      try {
        await e3.delete((function(e4) {
          return `[oauth-attempt:${e4}] mcp_oauth_attempt_client_secret`;
        })(t3));
      } catch {
      }
    }
    async function Eb(e3, t3) {
      try {
        await e3.delete((function(e4) {
          return `[oauth-attempt:${e4}] mcp_code_verifier`;
        })(t3));
      } catch {
      }
    }
    async function xb(e3) {
      await new Promise((t3) => setTimeout(t3, e3));
    }
    function Tb(e3, t3, r3) {
      const n3 = t3?.code;
      g.warn("OAuth attempt store atomic write failed", p({ event: "oauth_attempt_store_atomic_write_failed", phase: e3, errno: n3 ?? "unknown", filePath: r3.filePath, tmpPath: r3.tmpPath, ...void 0 !== r3.attemptId ? { attemptId: r3.attemptId } : {}, message: t3 instanceof Error ? t3.message : String(t3) }));
    }
    async function Ob(e3) {
      let t3;
      for (let r3 = 0; r3 < 3; r3++) try {
        return void await e3();
      } catch (e4) {
        t3 = e4, r3 < 2 && await xb(50 * (r3 + 1));
      }
      throw t3;
    }
    function Pb(e3) {
      const { rootDirFsPath: t3, globalState: r3, secrets: n3 } = e3;
      let o2;
      const s2 = gn.resolve(t3), i3 = /* @__PURE__ */ new Map();
      function a3(e4) {
        if (!vb.test(e4)) return;
        const t4 = gn.resolve(s2, `${e4}.json`), r4 = gn.relative(s2, t4);
        return r4.startsWith("..") || gn.isAbsolute(r4) ? void 0 : t4;
      }
      async function c2(e4, t4, r4) {
        const n4 = gn.dirname(e4), o3 = `${e4}.${process.pid}.${(0, hn.randomUUID)()}.tmp`;
        try {
          await mn.promises.mkdir(n4, { recursive: true });
        } catch (t5) {
          throw Tb("mkdir", t5, { filePath: e4, tmpPath: o3, attemptId: r4?.attemptId }), t5;
        }
        try {
          await mn.promises.writeFile(o3, JSON.stringify(t4), "utf8");
        } catch (t5) {
          throw await mn.promises.unlink(o3).catch(() => {
          }), Tb("writeFile", t5, { filePath: e4, tmpPath: o3, attemptId: r4?.attemptId }), t5;
        }
        try {
          await mn.promises.rename(o3, e4);
        } catch (t5) {
          throw await mn.promises.unlink(o3).catch(() => {
          }), Tb("rename", t5, { filePath: e4, tmpPath: o3, attemptId: r4?.attemptId }), t5;
        }
      }
      async function u2() {
        const e4 = [];
        let t4 = false;
        for (const n4 of r3.keys()) {
          if (!wb(n4)) continue;
          const o3 = r3.get(n4), s3 = Sb(o3), i4 = s3?.attemptId ?? bb(n4);
          if (!i4) {
            e4.push(n4);
            continue;
          }
          const u3 = a3(i4);
          if (u3) try {
            await c2(u3, o3, { attemptId: i4 }), e4.push(n4);
          } catch (e5) {
            t4 = true, g.warn("OAuth attempt legacy migration write failed", p({ event: "oauth_attempt_store_migration_write_failed", attemptId: i4, message: e5 instanceof Error ? e5.message : String(e5) }));
          }
        }
        if (await W_(r3, e4), t4) throw new Error("Failed to migrate one or more OAuth attempts");
      }
      async function l2() {
        o2 || (o2 = Ob(u2).catch((e4) => {
          throw o2 = void 0, e4;
        })), await o2;
      }
      async function d2(e4) {
        try {
          await mn.promises.unlink(e4);
        } catch (t4) {
          const r4 = t4?.code;
          if ("ENOENT" === r4) return;
          g.debug("Failed to delete OAuth attempt file (best-effort)", { event: "oauth_attempt_store_unlink_failed", filePath: e4, errno: r4 ?? "unknown", message: t4 instanceof Error ? t4.message : String(t4) });
        }
      }
      async function f2(e4) {
        const t4 = a3(e4);
        if (t4) try {
          const e5 = await mn.promises.readFile(t4, "utf8");
          try {
            return JSON.parse(e5);
          } catch {
            return void await d2(t4);
          }
        } catch (e5) {
          const t5 = e5?.code;
          if ("ENOENT" === t5) return;
          throw e5;
        }
      }
      async function h2(e4) {
        const t4 = a3(e4);
        t4 && await d2(t4);
      }
      return { readAttempt: async (e4) => (await l2(), await f2(e4)), async writeAttempt(e4, t4) {
        await l2();
        const r4 = a3(e4);
        if (!r4) throw new Error("Invalid OAuth attempt ID");
        await (function(e5, t5) {
          const r5 = (i3.get(e5) ?? Promise.resolve()).catch(() => {
          }).then(t5);
          let n4;
          return n4 = r5.finally(() => {
            i3.get(e5) === n4 && i3.delete(e5);
          }), i3.set(e5, n4), r5;
        })(e4, async () => {
          await c2(r4, t4, { attemptId: e4 });
        });
      }, async deleteAttempt(e4) {
        await l2(), await h2(e4), await kb(n3, e4), await Eb(n3, e4);
      }, async listAttempts() {
        let e4;
        await l2();
        try {
          e4 = await mn.promises.readdir(s2);
        } catch (e5) {
          const t5 = e5?.code;
          if ("ENOENT" === t5) return [];
          throw e5;
        }
        const t4 = [];
        for (const r4 of e4) {
          if (!r4.endsWith(".json")) continue;
          const e5 = r4.slice(0, -5), n4 = await f2(e5);
          void 0 !== n4 && t4.push(n4);
        }
        return t4;
      }, async sweepStaleAttempts(e4) {
        await l2();
        const t4 = Date.now(), o3 = /* @__PURE__ */ new Set(), i4 = [];
        let a4, c3 = 0, u3 = 0, d3 = 0, m2 = 0;
        for (const n4 of r3.keys()) {
          if (!wb(n4)) continue;
          const s3 = Sb(r3.get(n4));
          if (!s3) {
            const e5 = bb(n4);
            e5 && (o3.add(e5), i4.push(n4), c3++);
            continue;
          }
          t4 - s3.createdAtMs > e4 && (o3.add(s3.attemptId), i4.push(n4), u3++);
        }
        try {
          a4 = await mn.promises.readdir(s2);
        } catch (e5) {
          const t5 = e5?.code;
          if ("ENOENT" !== t5) throw e5;
          a4 = [];
        }
        for (const r4 of a4) {
          if (!r4.endsWith(".json")) continue;
          const n4 = r4.slice(0, -5), s3 = Sb(await f2(n4));
          s3 ? t4 - s3.createdAtMs > e4 && (o3.add(s3.attemptId), await h2(n4), m2++) : (o3.add(n4), await h2(n4), d3++);
        }
        for (const e5 of o3) await kb(n3, e5), await Eb(n3, e5);
        await W_(r3, i4);
        const y2 = o3.size;
        return y2 > 0 && g.debug("OAuth attempt store sweep completed", p({ event: "oauth_attempt_store_sweep", maxAgeMs: e4, totalRemoved: y2, legacyMalformedRemoved: c3, legacyTtlExpiredRemoved: u3, fileMalformedRemoved: d3, fileTtlExpiredRemoved: m2 })), Array.from(o3);
      } };
    }
    function Ib(e3) {
      const t3 = e3;
      return "function" == typeof t3.keys ? t3.keys() : [];
    }
    const Cb = "Not on the team network allowlist";
    async function Ab(e3) {
      try {
        return { succeeded: true, value: await a2.cursor.mcpOAuthStore.call(e3) };
      } catch (t3) {
        return g.debug(`Shared MCP OAuth store request failed (${e3.kind}): ${t3 instanceof Error ? t3.message : String(t3)}`), { succeeded: false };
      }
    }
    async function $b(e3) {
      return await Ct() ? Ab(e3) : { succeeded: false };
    }
    function Rb(e3) {
      const t3 = e3.match(/^\[(.+?)\] mcp_server_url$/);
      if (!t3?.[1]) return;
      const r3 = Sv(t3[1]) ? "serverIdentifier" : void 0;
      return { identifier: bv(t3[1]), keyPart: t3[1], storageScope: r3 };
    }
    function Nb(e3) {
      const t3 = e3.match(/^\[oauth-attempt:(.+?)\] mcp_oauth_attempt$/);
      return t3?.[1];
    }
    async function Mb(e3, t3) {
      return await a2.commands.executeCommand("mcp.diskKVSetIfAbsent", e3, t3) ?? false;
    }
    async function Jb(e3, t3, r3) {
      return await a2.commands.executeCommand("mcp.diskKVReplaceIfEquals", e3, t3, r3) ?? false;
    }
    async function jb(e3, t3) {
      await a2.commands.executeCommand("mcp.diskKVDelete", e3, t3);
    }
    function Db(e3) {
      if ("object" != typeof e3 || null === e3 || !("attemptId" in e3)) return;
      const t3 = e3.attemptId;
      return "string" == typeof t3 ? t3 : void 0;
    }
    function Fb(e3) {
      return e3.startsWith("[url:") && (e3.endsWith(`] ${tv.TOKENS}`) || e3.endsWith(`] ${tv.CLIENT_INFORMATION}`));
    }
    function qb(e3, t3, r3) {
      return e3 === tv.TOKENS ? "serverIdentifier" === r3 ? wv({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: t3 }) : vv({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: t3 }) : e3 === tv.CLIENT_INFORMATION ? "serverIdentifier" === r3 ? wv({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: t3 }) : vv({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: t3 }) : void 0;
    }
    function zb(e3) {
      switch (e3) {
        case "client_info_saved":
          return a2.cursor.McpSharedOAuthStateChange.ClientInfoSaved;
        case "tokens_saved":
          return a2.cursor.McpSharedOAuthStateChange.TokensSaved;
        case "cleared":
          return a2.cursor.McpSharedOAuthStateChange.Cleared;
        default:
          throw new Error(`Unhandled shared OAuth state change: ${String(e3)}`);
      }
    }
    function Ub(e3) {
      switch (e3) {
        case void 0:
          return;
        case "authenticate":
          return a2.cursor.McpSharedOAuthStateChangeCause.Authenticate;
        case "config_server_modified":
          return a2.cursor.McpSharedOAuthStateChangeCause.ConfigServerModified;
        case "config_server_removed":
          return a2.cursor.McpSharedOAuthStateChangeCause.ConfigServerRemoved;
        case "clear_all_tokens":
          return a2.cursor.McpSharedOAuthStateChangeCause.ClearAllTokens;
        case "extension_server_unregistered":
          return a2.cursor.McpSharedOAuthStateChangeCause.ExtensionServerUnregistered;
        case "manual_or_external":
          return a2.cursor.McpSharedOAuthStateChangeCause.ManualOrExternal;
        case "oauth_storage_cleared":
          return a2.cursor.McpSharedOAuthStateChangeCause.OAuthStorageCleared;
        case "server_removed":
          return a2.cursor.McpSharedOAuthStateChangeCause.ServerRemoved;
        case "team_server_removed_or_changed":
          return a2.cursor.McpSharedOAuthStateChangeCause.TeamServerRemovedOrChanged;
        case "user_logout":
          return a2.cursor.McpSharedOAuthStateChangeCause.UserLogout;
        default:
          throw new Error(`Unhandled shared OAuth state change cause: ${String(e3)}`);
      }
    }
    function Bb(e3) {
      const t3 = e3.replace(/\[url:[^\]]+\]/g, "[url:<redacted>]");
      return e3.includes("://") ? t3.replace(/https?:\/\/[^\s\]]+/g, "<url>") : t3;
    }
    function Lb(e3) {
      const t3 = [`outcome:${e3.outcome}`, `failure_reason:${e3.failureReason ?? "none"}`, "mcp_version:snapshots"];
      (0, c.FMv)("mcp.ext.oauth_migration.run", 1, "increment", t3), "number" == typeof e3.elapsedMs && (0, c.FMv)("mcp.ext.oauth_migration.duration_ms", e3.elapsedMs, "distribution", t3);
    }
    class Vb {
      constructor(e3) {
        this.context = e3, this.sharedGlobalStateCache = /* @__PURE__ */ new Map(), this.localSecretOverrides = /* @__PURE__ */ new Map(), this.sharedGlobalStateVersion = 0, this.mcpSharedOAuth = { get: async () => [], store: async () => ({ applied: false, skippedBecauseBackendNewer: false }), delete: async () => {
        }, notifyStateChanged: async (e4) => {
          await Ct() || await a2.cursor.mcpSharedOAuth.notifyStateChanged({ ...e4, change: zb(e4.change), cause: Ub(e4.cause) });
        }, refreshLockBegin: async () => ({ outcome: "skipped", enforce: false }), refreshLockRelease: async () => {
        } };
        for (const t4 of Ib(e3.globalState)) this.sharedGlobalStateCache.set(t4, e3.globalState.get(t4));
        const t3 = { get: (e4) => this.sharedGlobalStateCache.get(e4), update: async (t4, r4) => {
          this.sharedGlobalStateVersion++, void 0 === r4 ? this.sharedGlobalStateCache.delete(t4) : this.sharedGlobalStateCache.set(t4, r4), await Promise.all([e3.globalState.update(t4, r4), $b({ kind: "globalState.update", key: t4, value: r4 })]);
        }, keys: () => Array.from(this.sharedGlobalStateCache.keys()) }, r3 = { get: async (t4) => {
          const r4 = this.localSecretOverrides.get(t4);
          if (r4) {
            const n5 = await e3.secrets.get(t4);
            if (void 0 !== n5) return n5;
            if (r4.hasExpectedSharedValue) {
              const e4 = await $b({ kind: "secrets.deleteIfEquals", key: t4, expectedValue: r4.expectedSharedValue });
              if (!e4.succeeded) return;
              if (this.localSecretOverrides.delete(t4), e4.value) return;
            } else {
              if (Date.now() - r4.createdAtMs < 3e5) return;
              this.localSecretOverrides.delete(t4);
            }
          }
          const n4 = await $b({ kind: "secrets.get", key: t4 });
          return n4.succeeded && void 0 !== n4.value ? n4.value : Fb(t4) && await Ct() ? void 0 : await e3.secrets.get(t4);
        }, getFallback: async (e4) => {
          if (!(Fb(e4) && await Ct() && await this.shouldSuppressLocalCanonicalSecretFallback(e4))) return await r3.get(e4);
        }, store: async (t4, r4) => {
          await e3.secrets.store(t4, r4);
          (await $b({ kind: "secrets.store", key: t4, value: r4 })).succeeded ? this.localSecretOverrides.delete(t4) : this.localSecretOverrides.set(t4, { expectedSharedValue: void 0, hasExpectedSharedValue: false, createdAtMs: Date.now() });
        }, delete: async (t4) => {
          const r4 = await $b({ kind: "secrets.get", key: t4 }), [, n4] = await Promise.all([e3.secrets.delete(t4), $b({ kind: "secrets.delete", key: t4 })]);
          n4.succeeded ? this.localSecretOverrides.delete(t4) : this.localSecretOverrides.set(t4, { expectedSharedValue: r4.succeeded ? r4.value : void 0, hasExpectedSharedValue: r4.succeeded, createdAtMs: Date.now() });
        }, deleteFallback: async (t4) => {
          await e3.secrets.delete(t4), this.localSecretOverrides.delete(t4);
        } }, n3 = Pb({ rootDirFsPath: gn.join(e3.globalStorageUri.fsPath, "mcp-oauth-attempts"), globalState: t3, secrets: r3 }), o2 = { readAttempt: async (e4) => {
          const t4 = await $b({ kind: "attempts.read", attemptId: e4 });
          return t4.succeeded && void 0 !== t4.value ? t4.value : await n3.readAttempt(e4);
        }, writeAttempt: async (e4, t4) => {
          await Promise.all([n3.writeAttempt(e4, t4), $b({ kind: "attempts.write", attemptId: e4, value: t4 })]);
        }, deleteAttempt: async (e4) => {
          await Promise.all([n3.deleteAttempt(e4), $b({ kind: "attempts.delete", attemptId: e4 })]);
        }, listAttempts: async () => {
          const [e4, t4] = await Promise.all([n3.listAttempts(), $b({ kind: "attempts.list" })]);
          return (function(e5) {
            const t5 = [], r4 = /* @__PURE__ */ new Map();
            for (const n4 of e5) {
              const e6 = Db(n4);
              if (void 0 === e6) {
                t5.push(n4);
                continue;
              }
              const o3 = r4.get(e6);
              void 0 === o3 ? (r4.set(e6, t5.length), t5.push(n4)) : t5[o3] = n4;
            }
            return t5;
          })([...e4, ...t4.succeeded ? t4.value : []]);
        }, sweepStaleAttempts: async (e4) => {
          const [t4, r4] = await Promise.all([n3.sweepStaleAttempts(e4), $b({ kind: "attempts.sweep", maxAgeMs: e4 })]);
          return Array.from(/* @__PURE__ */ new Set([...t4 ?? [], ...r4.succeeded ? r4.value : []]));
        } };
        this.oauthContext = { globalState: t3, secrets: r3, getDynamicConfigValue: async (e4) => {
          try {
            return await a2.cursor.getDynamicConfigValue(e4);
          } catch {
            return;
          }
        }, oauthAttempts: o2, diskKVSetIfAbsent: async (e4, t4) => {
          const r4 = await $b({ kind: "diskKV.setIfAbsent", key: e4, value: t4 });
          if (!r4.succeeded) return Mb(e4, t4);
          if (!r4.value) {
            const t5 = await $b({ kind: "diskKV.get", key: e4 });
            return t5.succeeded && void 0 !== t5.value && await Mb(e4, t5.value), false;
          }
          try {
            return await Mb(e4, t4), true;
          } catch (r5) {
            throw await $b({ kind: "diskKV.delete", key: e4, expectedValue: t4 }), r5;
          }
        }, diskKVReplaceIfEquals: async (e4, t4, r4) => {
          const n4 = await $b({ kind: "diskKV.replaceIfEquals", key: e4, expectedValue: t4, newValue: r4 });
          return n4.succeeded ? (n4.value && await Jb(e4, t4, r4), n4.value) : Jb(e4, t4, r4);
        }, diskKVDelete: async (e4, t4) => {
          await Promise.all([$b({ kind: "diskKV.delete", key: e4, expectedValue: t4 }), jb(e4, t4)]);
        }, diskKVGet: async (e4) => {
          const t4 = await $b({ kind: "diskKV.get", key: e4 });
          return t4.succeeded ? t4.value : (async function(e5) {
            return await a2.commands.executeCommand("mcp.diskKVGet", e5);
          })(e4);
        } }, this.runSharedOAuthStoreMigration = () => this.initializeSharedOAuthStore(e3, t3, n3).catch((e4) => (g.debug(`Failed to initialize shared MCP OAuth store: ${e4 instanceof Error ? e4.message : String(e4)}`), false)), Nv(this.oauthContext).catch((e4) => {
          g.debug(`Failed to sweep stale OAuth attempts: ${e4 instanceof Error ? e4.message : String(e4)}`);
        });
      }
      async shouldSuppressLocalCanonicalSecretFallback(e3) {
        if (!Fb(e3)) return false;
        const t3 = e3.endsWith(`] ${tv.TOKENS}`) ? tv.TOKENS : tv.CLIENT_INFORMATION, r3 = await Ab({ kind: "globalState.keys" });
        if (!r3.succeeded) return true;
        const n3 = /* @__PURE__ */ new Set([...this.sharedGlobalStateCache.keys(), ...r3.value]);
        for (const r4 of n3) {
          const n4 = Rb(r4);
          if (!n4) continue;
          const o2 = await Ab({ kind: "globalState.get", key: r4 }), s2 = o2.succeeded && "string" == typeof o2.value ? o2.value : this.sharedGlobalStateCache.get(r4);
          if ("string" != typeof s2) continue;
          if (this.sharedGlobalStateCache.set(r4, s2), kv({ baseKey: t3, serverUrl: s2 }) !== e3) continue;
          const i3 = qb(t3, n4.identifier, n4.storageScope);
          if (!i3) continue;
          const a3 = await Ab({ kind: "globalState.get", key: i3 });
          if (!a3.succeeded) return true;
          if (void 0 !== a3.value && this.sharedGlobalStateCache.set(i3, a3.value), true === a3.value) return true;
        }
        return false;
      }
      async hasSharedCanonicalMigrationTombstone(e3, t3, r3) {
        const n3 = qb(t3, e3, r3);
        if (!n3) return false;
        const o2 = await Ab({ kind: "globalState.get", key: n3 });
        return !!o2.succeeded && (void 0 !== o2.value && this.sharedGlobalStateCache.set(n3, o2.value), true === o2.value);
      }
      async shouldSkipGlobalStateMigrationCopy(e3) {
        const t3 = Rb(e3);
        return !!t3 && (await this.hasSharedCanonicalMigrationTombstone(t3.identifier, tv.TOKENS, t3.storageScope) || await this.hasSharedCanonicalMigrationTombstone(t3.identifier, tv.CLIENT_INFORMATION, t3.storageScope));
      }
      async shouldSkipSecretMigrationCopy(e3) {
        if (Fb(e3)) return this.shouldSuppressLocalCanonicalSecretFallback(e3);
        const t3 = (function(e4) {
          const t4 = e4.match(/^\[(.+?)\] (mcp_tokens|mcp_client_information)$/);
          if (t4?.[1] && t4[2] && Sv(t4[1])) return { identifier: bv(t4[1]), baseKey: t4[2], storageScope: "serverIdentifier" };
        })(e3);
        return !!t3 && this.hasSharedCanonicalMigrationTombstone(t3.identifier, t3.baseKey, t3.storageScope);
      }
      hydrateSharedGlobalStateCache() {
        return this.sharedGlobalStateHydrationPromise ??= (async () => {
          const e3 = await Ab({ kind: "globalState.keys" });
          if (!e3.succeeded) throw new Error("Failed to list shared MCP OAuth global state keys");
          const t3 = this.sharedGlobalStateVersion;
          await Promise.all(e3.value.map(async (e4) => {
            const r3 = await Ab({ kind: "globalState.get", key: e4 });
            r3.succeeded && void 0 !== r3.value && this.sharedGlobalStateVersion === t3 && this.sharedGlobalStateCache.set(e4, r3.value);
          }));
        })().catch((e3) => {
          throw this.sharedGlobalStateHydrationPromise = void 0, g.debug(`Failed to hydrate shared MCP OAuth global state cache: ${e3 instanceof Error ? e3.message : String(e3)}`), e3;
        }), this.sharedGlobalStateHydrationPromise;
      }
      async initializeSharedOAuthStore(e3, t3, r3) {
        const n3 = Date.now(), o2 = await Ab({ kind: "migration.isComplete" });
        if (o2.succeeded && o2.value) return this.hydrateSharedGlobalStateCache().catch(() => {
        }), true;
        try {
          await this.hydrateSharedGlobalStateCache();
        } catch {
          return Lb({ outcome: "failure", elapsedMs: Date.now() - n3, failureReason: "aborted" }), g.warn("[mcp_oauth_migration] aborted before copy phases: shared global state hydration failed", p({ subkey: "mcp_oauth_migration", event: "migration_aborted", phase: "hydrate" })), false;
        }
        g.info("[mcp_oauth_migration] starting", p({ subkey: "mcp_oauth_migration", event: "migration_started", localGlobalKeyCount: Ib(e3.globalState).length }));
        const s2 = await Promise.all(Ib(e3.globalState).map(async (t4) => {
          const r4 = e3.globalState.get(t4);
          if (void 0 === r4) return { phase: "globalState", key: t4, copied: false, succeeded: true };
          if (await this.shouldSkipGlobalStateMigrationCopy(t4)) return { phase: "globalState", key: t4, copied: false, succeeded: true };
          const n4 = await Ab({ kind: "globalState.get", key: t4 });
          if (!n4.succeeded) return { phase: "globalState", key: t4, copied: false, succeeded: false, errorMessage: "globalState.get failed" };
          if (void 0 === n4.value) {
            const e4 = await Ab({ kind: "globalState.update", key: t4, value: r4 });
            return { phase: "globalState", key: t4, copied: e4.succeeded, succeeded: e4.succeeded, errorMessage: e4.succeeded ? void 0 : "globalState.update failed" };
          }
          return { phase: "globalState", key: t4, copied: false, succeeded: true };
        }));
        this.recordMigrationPhaseResults("globalState", s2);
        const i3 = /* @__PURE__ */ new Set();
        for (const e4 of t3.keys()) {
          const r4 = Rb(e4);
          if (r4) {
            const n5 = t3.get(e4), o3 = r4.identifier, s3 = "serverIdentifier" === r4.storageScope ? (e5) => wv({ baseKey: e5, identifier: o3 }) : (e5) => vv({ baseKey: e5, identifier: o3 });
            i3.add(s3(tv.TOKENS)), i3.add(s3(tv.CLIENT_INFORMATION)), i3.add(vv({ baseKey: tv.TOKENS, identifier: o3 })), i3.add(vv({ baseKey: tv.CLIENT_INFORMATION, identifier: o3 })), "string" == typeof n5 && (i3.add(kv({ baseKey: tv.TOKENS, serverUrl: n5 })), i3.add(kv({ baseKey: tv.CLIENT_INFORMATION, serverUrl: n5 })));
          }
          const n4 = Nb(e4);
          n4 && i3.add(Ev(n4));
        }
        const a3 = await Promise.all(Array.from(i3, async (t4) => {
          const r4 = await e3.secrets.get(t4);
          if (void 0 === r4) return { phase: "secret", key: t4, copied: false, succeeded: true };
          if (await this.shouldSkipSecretMigrationCopy(t4)) return { phase: "secret", key: t4, copied: false, succeeded: true };
          const n4 = await Ab({ kind: "secrets.storeIfAbsent", key: t4, value: r4 });
          return { phase: "secret", key: t4, copied: n4.succeeded && n4.value, succeeded: n4.succeeded, errorMessage: n4.succeeded ? void 0 : "secrets.storeIfAbsent failed" };
        }));
        this.recordMigrationPhaseResults("secret", a3);
        const c2 = await r3.listAttempts(), u2 = await Promise.all(c2.map(async (e4) => {
          const t4 = Db(e4);
          if (!t4) return { phase: "attempt", key: "<unknown>", copied: false, succeeded: true };
          const r4 = await Ab({ kind: "attempts.read", attemptId: t4 });
          if (!r4.succeeded) return { phase: "attempt", key: t4, copied: false, succeeded: false, errorMessage: "attempts.read failed" };
          if (void 0 === r4.value) {
            const r5 = await Ab({ kind: "attempts.write", attemptId: t4, value: e4 });
            return { phase: "attempt", key: t4, copied: r5.succeeded, succeeded: r5.succeeded, errorMessage: r5.succeeded ? void 0 : "attempts.write failed" };
          }
          return { phase: "attempt", key: t4, copied: false, succeeded: true };
        }));
        this.recordMigrationPhaseResults("attempt", u2);
        const l2 = [...s2, ...a3, ...u2].every((e4) => e4.succeeded);
        let d2 = false;
        l2 && (d2 = (await Ab({ kind: "migration.markComplete" })).succeeded);
        const f2 = Date.now() - n3, h2 = s2.filter((e4) => !e4.succeeded).length, m2 = a3.filter((e4) => !e4.succeeded).length, y2 = u2.filter((e4) => !e4.succeeded).length;
        return Lb({ outcome: d2 ? "success" : "failure", elapsedMs: f2, failureReason: d2 ? void 0 : "copy_or_mark_complete_failed" }), g.info("[mcp_oauth_migration] completed", p({ subkey: "mcp_oauth_migration", event: "migration_completed", elapsedMs: f2, migrationSucceeded: l2, markCompleteSucceeded: d2, globalCopied: s2.filter((e4) => e4.copied).length, globalFailed: h2, secretCopied: a3.filter((e4) => e4.copied).length, secretFailed: m2, attemptCopied: u2.filter((e4) => e4.copied).length, attemptFailed: y2 })), g.debug(`Initialized shared MCP OAuth store migration: global=${s2.filter((e4) => e4.copied).length}, secrets=${a3.filter((e4) => e4.copied).length}, attempts=${u2.filter((e4) => e4.copied).length}, complete=${d2}`), d2;
      }
      recordMigrationPhaseResults(e3, t3) {
        const r3 = t3.filter((e4) => !e4.succeeded), n3 = t3.filter((e4) => e4.copied);
        for (const t4 of r3) g.warn(`[mcp_oauth_migration] ${e3} copy failed`, p({ subkey: "mcp_oauth_migration", event: "migration_key_failed", phase: e3, redactedKey: Bb(t4.key), errorMessage: t4.errorMessage }));
        g.info(`[mcp_oauth_migration] ${e3} phase completed`, p({ subkey: "mcp_oauth_migration", event: "migration_phase_completed", phase: e3, total: t3.length, copied: n3.length, succeeded: t3.length - r3.length, failed: r3.length }));
      }
      ensureSharedOAuthStoreMigrated() {
        return this.sharedOAuthStoreMigrationPromise ??= this.runSharedOAuthStoreMigration().then((e3) => (e3 || (this.sharedOAuthStoreMigrationPromise = void 0), e3)), this.sharedOAuthStoreMigrationPromise;
      }
      getWorkspaceFolders() {
        return a2.workspace.workspaceFolders ?? [];
      }
      getAppRoot() {
        return a2.env.appRoot;
      }
      isGlass() {
        return a2.cursor.isGlass ?? true;
      }
      isRemote() {
        return Boolean(a2.env.remoteName);
      }
      getSpawnEnv() {
        return (function() {
          const e3 = {};
          for (const [t3, r3] of Object.entries(process.env)) "string" == typeof r3 && (e3[t3] = r3);
          return e3;
        })();
      }
      async executeCommand(e3, ...t3) {
        return await a2.commands.executeCommand(e3, ...t3);
      }
      async checkFeatureGate(e3) {
        try {
          return await a2.cursor.checkFeatureGate(e3);
        } catch (e4) {
          return false;
        }
      }
      async getDynamicConfigValue(e3) {
        try {
          return await a2.cursor.getDynamicConfigValue(e3);
        } catch {
          return;
        }
      }
      async getMcpNetworkControlsConfig(e3) {
        if (!await this.checkFeatureGate("mcp_settings_overhaul")) return { enabled: false, blockMessage: Cb };
        const t3 = await a2.cursor.getTeamAdminSettings(), r3 = "win32" === process.platform && await this.checkFeatureGate("mcp_user_extension_stdio_unsandboxed_win32");
        return (0, c._NE)({ allowedMcpConfiguration: t3.allowedMcpConfiguration, server: e3, localAgentNetworkAllowlist: t3.networkAllowlist, blockMessage: Cb, aggregateManagedServerNetworkAllowlists: false, stdioPlatform: process.platform, unsandboxUserExtensionStdio: r3 });
      }
      createEventEmitter() {
        const e3 = new a2.EventEmitter();
        return { event: (t3) => e3.event(t3), fire: (t3) => e3.fire(t3), dispose: () => e3.dispose() };
      }
      getOAuthContext() {
        return this.oauthContext;
      }
      pushMcpSnapshots(e3) {
        a2.cursor.pushMcpSnapshots(e3);
      }
    }
    const Kb = new ln({});
    const Zb = { symbol: /* @__PURE__ */ Symbol.for("cursor.agentStreamMetadata"), defaultValue: void 0 };
    var Wb = ((e3) => (e3.CallTool = "mcp.callTool", e3.CreateClient = "mcp.createClient", e3.DeleteClient = "mcp.deleteClient", e3.ReloadClient = "mcp.reloadClient", e3.ListOfferings = "mcp.listOfferings", e3.ListToolsRaw = "mcp.listToolsRaw", e3.LogoutServer = "mcp.logoutServer", e3.CancelOAuthAuthorization = "mcp.cancelOAuthAuthorization", e3.ClearAllTokens = "mcp.clearAllTokens", e3.GetInstructions = "mcp.getInstructions", e3.GetPrompt = "mcp.getPrompt", e3.ReadResource = "mcp.readResource", e3))(Wb || {}), Hb = ((e3) => (e3.FREE = "free", e3.PRO = "pro", e3.PRO_PLUS = "pro_plus", e3.ENTERPRISE = "enterprise", e3.FREE_TRIAL = "free_trial", e3.ULTRA = "ultra", e3.PRO_STUDENT = "pro_student", e3.EXPRESS = "express", e3.PREMIUM = "premium", e3.PLUS = "plus", e3.SUPER = "super", e3.UNIFIED_ULTRA = "unified_ultra", e3))(Hb || {});
    new Set(Object.values(Hb));
    function Yb(e3) {
      const t3 = Sv(e3) ? "serverIdentifier" : void 0;
      return { identifier: bv(e3), storageScope: t3 };
    }
    function Gb(e3) {
      return `${e3.storageScope ?? "canonicalServerUrl"}:${e3.identifier}`;
    }
    const Xb = 3e5;
    function Qb(e3) {
      return g.getLogger(e3);
    }
    function eS(e3) {
      if (!e3 || void 0 === e3.getAdapter()) return false;
      const t3 = e3.getConnectionState();
      if ("connected" !== t3.type && "degraded" !== t3.type) return false;
      const r3 = e3.getAuthState();
      return "needsUserAuth" !== r3.type && "expired" !== r3.type;
    }
    function tS(e3) {
      return "function" == typeof e3.getAuthState ? e3.getAuthState() : void 0;
    }
    function rS(e3) {
      return "needsUserAuth" === e3.getAuthState().type;
    }
    function nS({ raw: e3, minDelayMs: t3, maxDelayMs: r3 }) {
      return Math.max(t3, Math.min(e3, r3));
    }
    function oS(e3) {
      const t3 = nS({ raw: (0, c.vn5)("fastRetryBaseDelayMs", e3) ?? 5e3, minDelayMs: 1e3, maxDelayMs: 36e5 }), r3 = nS({ raw: (0, c.vn5)("fastRetryMaxDelayMs", e3) ?? 6e4, minDelayMs: t3, maxDelayMs: 36e5 }), n3 = nS({ raw: (0, c.vn5)("periodicRetryBaseDelayMs", e3) ?? 3e5, minDelayMs: 3e4, maxDelayMs: 36e5 });
      return { fastRetryBaseDelayMs: t3, fastRetryMaxDelayMs: r3, periodicRetryBaseDelayMs: n3, periodicRetryMaxDelayMs: nS({ raw: (0, c.vn5)("periodicRetryMaxDelayMs", e3) ?? 18e5, minDelayMs: n3, maxDelayMs: 36e5 }), focusRetryCooldownMs: nS({ raw: (0, c.vn5)("focusRetryCooldownMs", e3) ?? Xb, minDelayMs: Xb, maxDelayMs: 36e5 }) };
    }
    function sS(e3, t3) {
      const r3 = { identifier: e3, serverInfo: t3.getServerInfo() }, n3 = t3.getConnectionState(), o2 = t3.getAuthState();
      return !!(0, c.J_m)(n3, o2, r3) && (("failed" === n3.type || "closed" === n3.type) && (Qb(e3).info("Retrying periodic lifecycle immediately during focus/wake", { focusRetryCooldownMs: (0, c.qhs)(n3, r3), retryNonRetryableOnWake: (0, c.MBX)(n3), periodicCycle: n3.periodicCycle, periodicRetryDelayMs: n3.periodicRetryDelayMs }), t3.enqueue([{ target: "connection", kind: "connect_start" }]), true));
    }
    function iS(e3, t3) {
      const r3 = { identifier: e3, serverInfo: t3 };
      return { backoff: { getBackoffDelay: (e4) => (function(e5, t4) {
        const r4 = oS(t4);
        return Dw(e5, r4.fastRetryBaseDelayMs, r4.fastRetryMaxDelayMs);
      })(e4, r3), getPeriodicRetryDelay: (e4) => (function(e5 = 0, t4) {
        const r4 = oS(t4), n3 = Math.min(r4.periodicRetryBaseDelayMs * 2 ** e5, r4.periodicRetryMaxDelayMs);
        return n3 <= r4.periodicRetryBaseDelayMs ? r4.periodicRetryBaseDelayMs : r4.periodicRetryBaseDelayMs + Math.random() * (n3 - r4.periodicRetryBaseDelayMs);
      })(e4, r3), getMaxAttempts: () => (0, c.ptw)(r3), getMaxPeriodicCycles: () => (0, c.Zo$)(r3), getStabilityThresholdMs: () => (0, c.dg)(r3), getMaxDegradedProbeFailures: () => (0, c.eZ7)(r3) } };
    }
    (async () => {
      try {
        const e3 = await a2.cursor.getDynamicConfigValue("mcp_reconnect_config");
        (0, c.lV)(e3);
      } catch (e3) {
        g.warn(`[MCP V2] Failed to fetch mcp_reconnect_config from Statsig, using default: ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
    })();
    class aS {
      constructor(e3, t3) {
        this.mcpManager = e3, this.host = t3, this.children = /* @__PURE__ */ new Map(), this.lastFocusRetryAtMsByIdentifier = /* @__PURE__ */ new Map(), this.lastNonRetryableWakeRetryAtMsByIdentifier = /* @__PURE__ */ new Map(), this.statusChangeChains = /* @__PURE__ */ new Map(), this.connectivityRecoveryQueued = false, this.connectivityRecoveryRunning = false, this.lifecycleCallbacks = { onStatusChanged: (e4, t4) => {
          this.enqueueStatusChanged(e4, t4);
        }, onAdapterCreated: (e4, t4) => {
          this.mcpManager.setClient(e4, t4), (async () => {
            await this.shouldPushExthostStatus(e4) && yb(e4, this.mcpManager, { type: "connected" });
          })();
        }, onAdapterRemoved: (e4) => {
          this.mcpManager.deleteClient(e4), (async () => {
            await this.shouldPushExthostStatus(e4) && _b(e4);
          })();
        }, onOfferingsChanged: (e4) => {
          (async () => {
            if (!await this.shouldPushExthostStatus(e4)) return;
            const t4 = this.children.get(e4);
            eS(t4) ? yb(e4, this.mcpManager, t4?.getLastStatus()) : Qb(e4).debug("Skipping snapshot refresh for offerings change while lifecycle is not ready for operations");
          })();
        } };
      }
      async shouldPushExthostStatus(e3) {
        const t3 = this.children.get(e3);
        return At({ identifier: e3, serverInfo: t3?.getServerInfo() });
      }
      enqueueStatusChanged(e3, t3) {
        const r3 = (this.statusChangeChains.get(e3) ?? Promise.resolve()).then(() => this.processStatusChanged(e3, t3)).catch((t4) => {
          Qb(e3).debug(`Failed to process status change: ${t4 instanceof Error ? t4.message : String(t4)}`);
        });
        this.statusChangeChains.set(e3, r3);
      }
      async processStatusChanged(e3, t3) {
        if (await this.shouldPushExthostStatus(e3)) {
          if ("needsAuth" === t3.type) {
            const r3 = this.mcpManager.getClient(e3);
            this.mcpManager.setClient(e3, (function(e4) {
              const t4 = { name: "mcp_auth", description: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when the server needs authentication.", inputSchema: { type: "object", properties: {}, additionalProperties: false } };
              return { serverName: e4.serverName ?? e4.identifier, getState: async (t5) => ({ kind: "requires_authentication", url: e4.authorizationUrl, callback: async (e5) => {
              } }), getTools: async (e5) => [t4], callTool: async (e5, t5, r4, n3, o2) => {
                throw new Error("Virtual mcp_auth tool should be handled by the MCP auth flow.");
              }, getInstructions: async (e5) => {
              }, listResources: async (e5) => ({ resources: [] }), readResource: async (e5, t5) => ({ contents: [] }), listPrompts: async (e5) => [], getPrompt: async (e5, t5, r4) => ({ messages: [] }) };
            })({ identifier: e3, serverName: r3?.serverName, authorizationUrl: t3.authorizationUrl }));
          }
          try {
            this.host.executeCommand("mcp.updateStatus", { identifier: e3, status: t3 });
          } catch (t4) {
            Qb(e3).debug(`Failed to send status update: ${t4 instanceof Error ? t4.message : String(t4)}`);
          }
          !(function(e4, t4, r3) {
            if (!Xw) return;
            const n3 = t4.getClient(e4);
            n3 ? (ob.set(e4, r3), Hw.updateServerStatus(e4, n3, r3)) : ob.set(e4, r3);
          })(e3, this.mcpManager, t3);
        }
      }
      create(e3, t3, r3) {
        const n3 = this.children.get(e3);
        if (n3) {
          const t4 = n3.getConnectPromise(), r4 = n3.getConnectionState(), o3 = n3.getAuthState();
          return !t4 && (0, c.koU)(r4, o3) ? (Qb(e3).info("Server already exists in retryable state, restarting create", { connectionState: r4.type, authState: o3.type }), n3.connect(), n3.getConnectPromise()) : (Qb(e3).info("Server already exists, skipping create"), t4);
        }
        yb(e3, this.mcpManager, void 0);
        const o2 = new z_(e3, t3, iS(e3, t3), this.host, this.lifecycleCallbacks, r3);
        return this.children.set(e3, o2), o2.connect(), o2.getConnectPromise();
      }
      remove(e3) {
        const t3 = this.children.get(e3);
        t3 && (t3.dispose(), this.children.delete(e3)), this.lastFocusRetryAtMsByIdentifier.delete(e3), this.lastNonRetryableWakeRetryAtMsByIdentifier.delete(e3), _b(e3);
      }
      reload(e3, t3, r3) {
        return this.remove(e3), this.create(e3, t3, r3);
      }
      get(e3) {
        return this.children.get(e3);
      }
      probeAllConnected() {
        for (const [e3, t3] of this.children) (0, c.X1r)(t3.getConnectionState()) && (Qb(e3).debug("Probing connected server"), t3.enqueue([{ target: "connection", kind: "health_probe_due" }]));
      }
      retryExhaustedServers() {
        const e3 = [], t3 = Date.now();
        for (const [r3, n3] of this.children) {
          const o2 = { identifier: r3, serverInfo: n3.getServerInfo() }, s2 = n3.getConnectionState(), i3 = (0, c.MBX)(s2), a3 = (0, c.qhs)(s2, o2), u2 = i3 ? this.lastNonRetryableWakeRetryAtMsByIdentifier.get(r3) : this.lastFocusRetryAtMsByIdentifier.get(r3);
          (0, c.NOL)(t3, u2, a3) ? Qb(r3).debug("Skipping focus/wake reconnect during cooldown", { focusRetryCooldownMs: a3, remainingCooldownMs: a3 - (t3 - (u2 ?? t3)), nonRetryable: i3 }) : sS(r3, n3) && (i3 ? this.lastNonRetryableWakeRetryAtMsByIdentifier.set(r3, t3) : this.lastFocusRetryAtMsByIdentifier.set(r3, t3), e3.push(r3));
        }
        return e3;
      }
      onBrowserConnectivityChanged(e3) {
        g.info("[MCP] Network connectivity changed", { subkey: "connectivity", online: e3.online, source: e3.source, syntheticTransition: e3.syntheticTransition ?? false }), e3.online && (0, c.VOp)(e3.source).enabled && (this.pendingConnectivityRecoveryChange = e3, this.scheduleConnectivityRecovery());
      }
      scheduleConnectivityRecovery() {
        this.connectivityRecoveryQueued = true, void 0 !== this.connectivityRecoveryDebounceHandle && clearTimeout(this.connectivityRecoveryDebounceHandle);
        const e3 = this.pendingConnectivityRecoveryChange, t3 = void 0 !== e3 ? (0, c.VOp)(e3.source).debounceMs : 0;
        this.connectivityRecoveryDebounceHandle = setTimeout(() => {
          this.connectivityRecoveryDebounceHandle = void 0, this.runConnectivityRecoveryIfIdle();
        }, t3);
      }
      runConnectivityRecoveryIfIdle() {
        if (this.connectivityRecoveryRunning) return;
        const e3 = this.pendingConnectivityRecoveryChange;
        if (void 0 !== e3) {
          this.connectivityRecoveryQueued = false, this.connectivityRecoveryRunning = true;
          try {
            this.probeAllConnected();
            const t3 = this.retryExhaustedServers();
            g.info("[MCP] Network connectivity recovery completed", { subkey: "connectivity", source: e3.source, retriedCount: t3.length });
          } finally {
            this.connectivityRecoveryRunning = false, this.connectivityRecoveryQueued && void 0 === this.connectivityRecoveryDebounceHandle && this.scheduleConnectivityRecovery();
          }
        } else this.connectivityRecoveryQueued = false;
      }
      has(e3) {
        return this.children.has(e3);
      }
      dispose() {
        void 0 !== this.connectivityRecoveryDebounceHandle && (clearTimeout(this.connectivityRecoveryDebounceHandle), this.connectivityRecoveryDebounceHandle = void 0);
        for (const [, e3] of this.children) e3.dispose();
        this.children.clear(), this.lastFocusRetryAtMsByIdentifier.clear(), this.lastNonRetryableWakeRetryAtMsByIdentifier.clear(), this.statusChangeChains.clear();
      }
    }
    let cS, uS;
    function lS(e3, t3, r3) {
      async function n3(e4, t4) {
        t4?.throwIfAborted();
        const r4 = cS.get(e4);
        if (!r4) return;
        const n4 = r4.getConnectPromise();
        return n4 && await (0, c.gOx)(n4, t4), r4;
      }
      uS = r3 ?? new Vb(t3), cS = new aS(e3, uS), t3.subscriptions.push(cS), jw(Wb.CreateClient, async (e4, t4) => {
        Qb(e4.identifier).info("[V2] Handling CreateClient action");
        const r4 = cS.create(e4.identifier, e4.serverInfo, e4.serverName);
        r4 && await (0, c.gOx)(r4, t4.abortSignal);
        const n4 = cS.get(e4.identifier), o3 = n4?.getLastStatus(), s3 = eS(n4), i4 = o3?.type ?? "disconnected", a3 = "error" === o3?.type ? o3.error : void 0;
        return Qb(e4.identifier).info(`CreateClient completed, connected: ${s3}, statusType: ${i4}${a3 ? `, error=${a3}` : ""}`), { success: true, connected: s3, statusType: i4, error: a3 };
      }), jw(Wb.DeleteClient, async (e4, t4) => (Qb(e4.identifier).info(`[V2] Handling DeleteClient action, reason: ${e4.reason ?? "unknown"}`), Ge(e4.identifier), cS.remove(e4.identifier), { success: true })), jw(Wb.CancelOAuthAuthorization, async (e4, t4) => {
        const r4 = (function(e5) {
          const t5 = Fv.get(e5);
          return !!t5 && (t5.cancelAuthorizationFlow(), true);
        })(e4.identifier);
        return Qb(e4.identifier).info("[V2] Handling CancelOAuthAuthorization action", { cancelled: r4 }), { success: r4 };
      }), jw(Wb.ReloadClient, async (e4, t4) => {
        var r4;
        Qb(e4.identifier).info("[V2] Handling ReloadClient action"), e4.armLoopback && (r4 = e4.identifier, Sw.add(r4));
        try {
          const r5 = cS.reload(e4.identifier, e4.serverInfo, e4.serverName);
          r5 && await (0, c.gOx)(r5, t4.abortSignal);
          const n4 = cS.get(e4.identifier), o3 = n4?.getLastStatus(), s3 = eS(n4), i4 = o3?.type ?? "disconnected", a3 = "error" === o3?.type ? o3.error : void 0;
          return Qb(e4.identifier).info(`ReloadClient completed, connected: ${s3}, statusType: ${i4}${a3 ? `, error=${a3}` : ""}`), { success: true, connected: s3, statusType: i4, error: a3 };
        } catch (t5) {
          return Qb(e4.identifier).error(`Failed to reload client: ${t5 instanceof Error ? t5.message : String(t5)}`, t5 instanceof Error ? t5 : void 0), { success: false, connected: false, statusType: "error", error: t5 instanceof Error ? t5.message : String(t5) };
        }
      }), jw(Wb.ListOfferings, async (e4, t4) => {
        Qb(e4.identifier).debug("[V2] Handling ListOfferings action"), t4.abortSignal?.throwIfAborted();
        const r4 = await n3(e4.identifier, t4.abortSignal);
        if (!r4) return Qb(e4.identifier).info("Server not yet created, returning empty offerings"), { tools: [], prompts: [], resources: [], refreshState: "transient_degraded" };
        const o3 = tS(r4);
        if ("needsUserAuth" === o3?.type) return Qb(e4.identifier).debug("Skipping ListOfferings while server is awaiting interactive OAuth"), { tools: [], prompts: [], resources: [], refreshState: "transient_degraded" };
        const s3 = r4.getAdapter();
        if (!s3) return Qb(e4.identifier).debug("No adapter after connection, returning empty offerings"), { tools: [], prompts: [], resources: [], refreshState: "transient_degraded" };
        let i4;
        try {
          i4 = await (0, c.gOx)(s3.listOfferingsForUI(t4.abortSignal), t4.abortSignal);
        } catch (r5) {
          throw (0, c.zfx)(r5, t4.abortSignal) && Qb(e4.identifier).debug("[V2] ListOfferings aborted; leaving lifecycle state unchanged"), r5;
        }
        const a3 = (function(e5, t5) {
          const { offerings: r5, outcomes: n4 } = e5, o4 = r5.tools.length > 0 || r5.prompts.length > 0 || r5.resources.length > 0, s4 = Object.entries(n4), i5 = s4.some(([, e6]) => "success" === e6.kind), a4 = s4.some(([, e6]) => "failure" === e6.kind), c2 = s4.some(([, e6]) => "aborted" === e6.kind);
          if (i5) return { hasResults: o4, hasSuccessfulSubCall: i5, isAuthoritative: true, wasAborted: c2 };
          const u4 = s4.flatMap(([e6, r6]) => "failure" === r6.kind && (function(e7, t6) {
            return "stdio" !== t6 && ("network" === e7.reason || "timeout" === e7.reason || "session_invalidated" === e7.reason || 429 === e7.httpStatus || 503 === e7.httpStatus);
          })(r6.failure, t5) ? [R_(e6, r6)] : []);
          return { hasResults: o4, hasSuccessfulSubCall: i5, isAuthoritative: !a4 && !c2, wasAborted: c2, degradedReason: u4.length > 0 ? u4.join(", ") : void 0 };
        })(i4, r4.getServerInfo().type), u3 = a3.wasAborted && !a3.hasSuccessfulSubCall ? "aborted" : a3.isAuthoritative ? "authoritative" : "transient_degraded", l3 = tS(r4) ?? { type: "unknown" };
        if (a3.degradedReason && r4.enqueue([{ target: "connection", kind: "request_degraded", reason: a3.degradedReason }]), a3.hasSuccessfulSubCall && "expired" !== l3.type && "needsUserAuth" !== l3.type) {
          const e5 = (0, c.yZp)({ hasResults: a3.hasResults, authError: void 0, authState: l3 });
          e5.length > 0 && r4.enqueue(e5);
        }
        return { ...i4.offerings, refreshState: u3 };
      }), jw(Wb.ListToolsRaw, async (t4, r4) => {
        const n4 = e3.getClient(t4.identifier);
        if (!n4) return { tools: [] };
        return { tools: await n4.getTools({ withName: () => ({ withName: () => ({}) }) }, r4.abortSignal) };
      }), jw(Wb.CallTool, async (e4, t4) => {
        const r4 = await n3(e4.identifier);
        if (!r4) throw new Error("No server info found");
        if (rS(r4)) return Qb(e4.identifier).debug("Skipping CallTool while server is awaiting interactive OAuth"), { result: { error: "MCP server requires authentication" } };
        const o3 = r4.getAdapter();
        if (!o3) throw new Error("No adapter found after connection");
        let s3, i4;
        e4.toolCallId && e4.useLeaseElicitation && (s3 = { async elicit(t5) {
          Qb(e4.identifier).info(`Calling mcp.leaseElicitationRequest for toolCallId: ${e4.toolCallId}`);
          try {
            const r5 = await a2.commands.executeCommand("mcp.leaseElicitationRequest", { toolCallId: e4.toolCallId, request: { message: t5.message, requestedSchema: t5.requestedSchema } });
            return Qb(e4.identifier).info(`mcp.leaseElicitationRequest returned: ${r5?.action}`), r5 ?? { action: "decline" };
          } catch (t6) {
            return Qb(e4.identifier).error(`Error in mcp.leaseElicitationRequest: ${t6 instanceof Error ? t6.message : String(t6)}`, t6 instanceof Error ? t6 : void 0), { action: "decline" };
          }
        } });
        try {
          i4 = await o3.callToolForUI(e4.name, e4.args, e4.toolCallId, s3);
        } catch (t5) {
          Qb(e4.identifier).warn(`callTool failed: ${t5 instanceof Error ? t5.message : String(t5)}`);
          const n4 = r4.getAuthState(), o4 = (0, c.nwZ)({ result: void 0, error: t5, authState: n4 });
          throw o4.length > 0 && r4.enqueue(o4), t5;
        }
        const u3 = i4?.result, l3 = null == u3 || "string" != typeof u3.error || u3.content ? void 0 : u3.error;
        if (void 0 !== l3) {
          const e5 = r4.getAuthState(), t5 = (0, c.nwZ)({ result: void 0, error: new Error(l3), authState: e5 });
          t5.length > 0 && r4.enqueue(t5);
        } else {
          const e5 = null != u3 && true === u3.isError, t5 = r4.getAuthState(), n4 = (0, c.nwZ)({ result: null != u3 ? { content: Array.isArray(u3.content) ? u3.content : void 0, isError: e5 } : void 0, error: void 0, authState: t5 });
          n4.length > 0 && r4.enqueue(n4);
        }
        return i4;
      }), jw(Wb.GetInstructions, async (e4, t4) => {
        const r4 = await n3(e4.identifier, t4.abortSignal);
        if (!r4) throw new Error("No server info found");
        if (rS(r4)) return Qb(e4.identifier).debug("Skipping GetInstructions while server is awaiting interactive OAuth"), { instructions: void 0 };
        const o3 = r4.getAdapter();
        if (!o3) throw new Error("No adapter found after connection");
        return o3.getInstructionsForUI(t4.abortSignal);
      }), jw(Wb.GetPrompt, async (e4, t4) => {
        const r4 = await n3(e4.identifier, t4.abortSignal);
        if (!r4) throw new Error("No server info found");
        if (rS(r4)) return Qb(e4.identifier).debug("Skipping GetPrompt while server is awaiting interactive OAuth"), { result: { error: "MCP server requires authentication" } };
        const o3 = r4.getAdapter();
        if (!o3) throw new Error("No adapter found after connection");
        return o3.getPromptForUI(e4.name, e4.args, t4.abortSignal);
      }), jw(Wb.ReadResource, async (e4, t4) => {
        const r4 = await n3(e4.identifier, t4.abortSignal);
        if (!r4) throw new Error("No server info found");
        if (rS(r4)) return Qb(e4.identifier).debug("Skipping ReadResource while server is awaiting interactive OAuth"), { result: { error: "MCP server requires authentication" } };
        const o3 = r4.getAdapter();
        if (!o3) throw new Error("No adapter found after connection");
        return o3.readResourceForUI(e4.uri, t4.abortSignal);
      }), jw(Wb.LogoutServer, async (e4, t4) => {
        Qb(e4.identifier).info("[V2] Handling LogoutServer action", { cause: e4.cause ?? "manual_or_external", mode: e4.mode ?? "hard", deleteSharedOAuthState: e4.deleteSharedOAuthState ?? true, notifySharedStateChange: e4.notifySharedStateChange ?? true, serverUrlPresent: Boolean(e4.serverUrl ?? e4.retention?.serverUrl), hasRetentionPayload: Boolean(e4.retention) });
        try {
          const r4 = e4.serverUrl ?? e4.retention?.serverUrl ?? t4.context.globalState.get((function(e5) {
            return "identifier" === e5.mode ? wv({ baseKey: tv.SERVER_URL, identifier: e5.identifier }) : vv({ baseKey: tv.SERVER_URL, identifier: e5.identifier });
          })({ identifier: e4.identifier, mode: e4.mode })) ?? "";
          r4 || Qb(e4.identifier).warn("No stored server URL for logout");
          const n4 = new Dv({ oauthContext: uS.getOAuthContext(), appRoot: uS.getAppRoot(), executeCommand: (e5, ...t5) => uS.executeCommand(e5, ...t5), mcpSharedOAuth: uS.mcpSharedOAuth, serverUrl: r4, identifier: e4.identifier, storageScope: "identifier" === e4.mode ? "serverIdentifier" : "canonicalServerUrl", needsAuthCallback: () => {
          } });
          return "soft" === e4.mode && e4.retention && e4.retention.expiresInMs > 0 ? (await n4.softClear({ expiresInMs: e4.retention.expiresInMs, serverUrl: e4.retention.serverUrl, clientId: e4.retention.clientId, authHash: e4.retention.authHash }), Qb(e4.identifier).info("Successfully soft-cleared OAuth tokens for temporary MCP removal")) : "identifier" === e4.mode ? (await n4.clearIdentifierScopedState(), Qb(e4.identifier).info("Successfully cleared identifier-scoped OAuth state")) : (await n4.clear({ deleteSharedOAuthState: e4.deleteSharedOAuthState, notifySharedStateChange: e4.notifySharedStateChange, cause: e4.cause }), Qb(e4.identifier).info("Successfully cleared OAuth tokens")), Qb(e4.identifier).info("[V2] Removing client, reason: logout_server"), Ge(e4.identifier), cS.remove(e4.identifier), { success: true };
        } catch (t5) {
          return Qb(e4.identifier).error(`Failed to logout server: ${t5 instanceof Error ? t5.message : String(t5)}`, t5 instanceof Error ? t5 : void 0), { success: false };
        }
      }), jw(Wb.ClearAllTokens, async (e4, t4) => {
        g.info("[V2] ClearAllTokens can destructively clear all stored MCP OAuth state");
        const r4 = /* @__PURE__ */ new Set(), n4 = /* @__PURE__ */ new Set(), o3 = t4.context.globalState.keys(), s3 = /^\[(.+?)\] mcp_server_url$/;
        for (const e5 of o3) {
          const o4 = e5.match(s3);
          if (!o4) continue;
          const { identifier: i5, storageScope: a3 } = Yb(o4[1]), c2 = t4.context.globalState.get(e5);
          if (!c2) continue;
          const u3 = Gb({ identifier: i5, storageScope: a3 });
          try {
            const e6 = new Dv({ oauthContext: uS.getOAuthContext(), appRoot: uS.getAppRoot(), executeCommand: (e7, ...t5) => uS.executeCommand(e7, ...t5), mcpSharedOAuth: uS.mcpSharedOAuth, serverUrl: c2, identifier: i5, storageScope: a3, needsAuthCallback: () => {
            } });
            await e6.clear(), Qb(i5).info("Cleared OAuth tokens"), r4.add(u3), n4.add(i5);
          } catch (e6) {
            Qb(i5).error("Failed to clear OAuth tokens", e6);
          }
          Qb(i5).info("[V2] Removing client, reason: clear_all_tokens"), Ge(i5), cS.remove(i5);
        }
        const i4 = /^\[(.+?)\] mcp_oauth_retention$/;
        for (const e5 of o3) {
          const t5 = e5.match(i4);
          if (!t5) continue;
          const { identifier: o4, storageScope: s4 } = Yb(t5[1]), a3 = Gb({ identifier: o4, storageScope: s4 });
          if (!r4.has(a3)) {
            try {
              const e6 = new Dv({ oauthContext: uS.getOAuthContext(), appRoot: uS.getAppRoot(), executeCommand: (e7, ...t6) => uS.executeCommand(e7, ...t6), mcpSharedOAuth: uS.mcpSharedOAuth, serverUrl: "", identifier: o4, storageScope: s4, needsAuthCallback: () => {
              } });
              await e6.clear(), Qb(o4).info("Cleared tombstoned OAuth state"), r4.add(a3), n4.add(o4);
            } catch (e6) {
              Qb(o4).error("Failed to clear tombstoned OAuth state", e6);
            }
            Qb(o4).info("[V2] Removing client, reason: clear_all_tokens"), Ge(o4), cS.remove(o4);
          }
        }
        return { success: true, cleared: [...n4] };
      });
      const o2 = a2.commands.registerCommand("mcp.probeAllServers", () => {
        cS.probeAllConnected();
      }), s2 = a2.commands.registerCommand("mcp.retryExhaustedServers", () => cS.retryExhaustedServers()), i3 = a2.commands.registerCommand("mcp.onBrowserConnectivityChanged", (e4) => {
        cS.onBrowserConnectivityChanged(e4);
      }), u2 = a2.commands.registerCommand("mcp.refreshSnapshot", (t4) => {
        if (!t4?.identifier) return;
        const r4 = cS.get(t4.identifier);
        yb(t4.identifier, e3, r4?.getLastStatus());
      }), l2 = a2.commands.registerCommand("mcp.elicitationResponse", (e4) => {
        g.debug(`[V2] Received elicitation response for request ${e4.requestId}`);
        for (const [, t4] of cS.children) if (t4.resolveElicitation(e4.requestId, e4.response)) return void g.debug(`Resolved elicitation request ${e4.requestId}`);
        g.debug(`No pending elicitation request found for ID: ${e4.requestId}`);
      });
      t3.subscriptions.push(l2), t3.subscriptions.push(o2), t3.subscriptions.push(s2), t3.subscriptions.push(i3), t3.subscriptions.push(u2);
    }
    let dS, pS = false;
    function fS(e3, t3 = 4096) {
      if (void 0 === e3 || e3.length <= t3) return e3;
      const r3 = `
... [truncated ${e3.length} characters]`, n3 = Math.max(0, t3 - r3.length), o2 = `
... [truncated ${e3.length - n3} characters]`;
      return e3.slice(0, Math.max(0, t3 - o2.length)) + o2;
    }
    function hS(e3) {
      const t3 = e3 instanceof Error ? e3.message : (function(e4) {
        if ("string" == typeof e4) return e4;
        try {
          const t4 = JSON.stringify(e4);
          if (void 0 !== t4) return t4;
        } catch {
        }
        return String(e4);
      })(e3), r3 = new Error(fS(t3) ?? "Unknown MCP command error");
      if (e3 instanceof Error) {
        r3.name = fS(e3.name, 256) ?? "Error", r3.stack = fS(e3.stack);
        const t4 = e3;
        if ("string" == typeof t4.code) {
          r3.code = fS(t4.code, 256);
        }
      }
      return r3;
    }
    class mS {
      constructor(e3) {
        this.disposables = [];
        const t3 = { supportedCommands: Object.keys(Jw).filter((e4) => true), runCommand: (t4, r3, n3) => {
          const o2 = (function(e4) {
            return Jw[e4];
          })(t4);
          if (void 0 !== o2) try {
            return (function(e4) {
              return e4 instanceof Promise ? e4.catch((e5) => {
                throw hS(e5);
              }) : e4;
            })(o2(r3, { context: e3, abortSignal: n3 }));
          } catch (e4) {
            throw hS(e4);
          }
          return Promise.resolve(void 0);
        } };
        e3.subscriptions.push(a2.cursor.registerEverythingProvider(t3));
      }
      dispose() {
        this.disposables.forEach((e3) => e3.dispose());
      }
    }
    /* @__PURE__ */ new Set(["EACCES", "EPERM", "ENOENT", "ENOTDIR", "EISDIR", "ELOOP", "ENAMETOOLONG"]);
    const gS = (0, gr.cF)(/* @__PURE__ */ Symbol("metricsBackend"), { record: () => {
    }, increment: () => {
    }, gauge: () => {
    }, histogram: () => {
    } });
    function yS(e3) {
      return e3.get(gS);
    }
    function _S(e3, t3) {
      const r3 = { name: e3, type: "counter", description: t3?.description, labelNames: t3?.labelNames };
      return { increment: (e4, t4, n3) => {
        yS(e4).increment(e4, r3, t4 ?? 1, n3);
      }, record: (e4, t4, n3) => {
        yS(e4).record(e4, r3, t4, n3);
      } };
    }
    function vS(e3, t3) {
      const r3 = { name: e3, type: "histogram", description: t3?.description, labelNames: t3?.labelNames };
      return { histogram: (e4, t4, n3) => {
        yS(e4).histogram(e4, r3, t4, n3);
      }, record: (e4, t4, n3) => {
        yS(e4).record(e4, r3, t4, n3);
      } };
    }
    const wS = "agent.v1.";
    class bS extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return wS;
      }
    }
    class SS extends bS {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new SS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new SS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new SS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(SS, e3, t3);
      }
      static $() {
        return ["NetworkPolicyLoggingConfig|1 decision_log_path 9?|2 log_format 9?"];
      }
    }
    class kS extends bS {
      constructor(e3) {
        super(), this.deny = [], this.allow = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kS, e3, t3);
      }
      static $() {
        return ["NetworkPolicy|1 version 13?|2 default_action #0?|3 deny 9*|4 allow 9*|5 logging #1?", ES, SS];
      }
    }
    var ES = jr(Rr.proto3, wS, "NetworkPolicy.DefaultAction", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "DENY"]], 1);
    class xS extends bS {
      constructor(e3) {
        super(), this.type = TS.UNSPECIFIED, this.additionalReadwritePaths = [], this.additionalReadonlyPaths = [], this.readBoundary = OS.UNSPECIFIED, this.additionalReadPaths = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xS, e3, t3);
      }
      static $() {
        return ["SandboxPolicy|1 type #0|2 network_access 8?|3 additional_readwrite_paths 9*|4 additional_readonly_paths 9*|5 debug_output_dir 9?|7 disable_tmp_write 8?|8 allowlist_escalated 8?|9 enable_shared_build_cache 8?|10 network_policy #1?|11 network_policy_strict 8?|12 capture_denies 8?|13 skip_statsig_defaults 8?|14 read_boundary #2|15 additional_read_paths 9*", TS, kS, OS];
      }
    }
    var TS = jr(Rr.proto3, wS, "SandboxPolicy.Type", [[0, "UNSPECIFIED"], [1, "INSECURE_NONE"], [2, "WORKSPACE_READWRITE"], [3, "WORKSPACE_READONLY"]], 1), OS = jr(Rr.proto3, wS, "SandboxPolicy.ReadBoundaryMode", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "WORKSPACE"]], 1);
    class PS extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class IS extends PS {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new IS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new IS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new IS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(IS, e3, t3);
      }
      static $() {
        return ["Range|1 start #0|2 end #0", CS];
      }
    }
    class CS extends PS {
      constructor(e3) {
        super(), this.line = 0, this.column = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CS, e3, t3);
      }
      static $() {
        return ["Position|1 line 13|2 column 13"];
      }
    }
    class AS extends PS {
      constructor(e3) {
        super(), this.filePath = "", this.sizeBytes = Rr.protoInt64.zero, this.lineCount = Rr.protoInt64.zero, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AS, e3, t3);
      }
      static $() {
        return ["OutputLocation|1 file_path 9|2 size_bytes 3|3 line_count 3"];
      }
    }
    class $S extends PS {
      constructor(e3) {
        super(), this.requestId = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $S().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $S().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $S().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($S, e3, t3);
      }
      static $() {
        return ["SmartModeApproval|1 request_id 9|2 reason 9"];
      }
    }
    class RS extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class NS extends RS {
      constructor(e3) {
        super(), this.hookEventName = "", this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new NS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new NS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new NS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(NS, e3, t3);
      }
      static $() {
        return ["HookAdditionalContext|1 hook_event_name 9|2 content 9"];
      }
    }
    const MS = "agent.v1.";
    class JS extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return MS;
      }
    }
    var jS = jr(Rr.proto3, MS, "TimeoutBehavior", [[0, "UNSPECIFIED"], [1, "CANCEL"], [2, "BACKGROUND"]], 1), DS = jr(Rr.proto3, MS, "ShellBackgroundReason", [[0, "UNSPECIFIED"], [1, "TIMEOUT"], [2, "USER_REQUEST"]], 1), FS = jr(Rr.proto3, MS, "ForceBackgroundShellStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1), qS = jr(Rr.proto3, MS, "ShellAbortReason", [[0, "UNSPECIFIED"], [1, "USER_ABORT"], [2, "TIMEOUT"]], 1);
    class zS extends JS {
      constructor(e3) {
        super(), this.parsingFailed = false, this.executableCommands = [], this.hasRedirects = false, this.hasCommandSubstitution = false, this.redirects = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zS, e3, t3);
      }
      static $() {
        return ["ShellCommandParsingResult|1 parsing_failed 8|2 executable_commands #0*|3 has_redirects 8|4 has_command_substitution 8|5 all_redirects_are_dev_null 8?|6 redirects #1*", BS, LS];
      }
    }
    class US extends JS {
      constructor(e3) {
        super(), this.type = "", this.value = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new US().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new US().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new US().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(US, e3, t3);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommandArg|1 type 9|2 value 9"];
      }
    }
    class BS extends JS {
      constructor(e3) {
        super(), this.name = "", this.args = [], this.fullText = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new BS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new BS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new BS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(BS, e3, t3);
      }
      static $() {
        return ["ShellCommandParsingResult.ExecutableCommand|1 name 9|2 args #0*|3 full_text 9", US];
      }
    }
    class LS extends JS {
      constructor(e3) {
        super(), this.operator = "", this.destinationFds = [], this.targetNodeType = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new LS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new LS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new LS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(LS, e3, t3);
      }
      static $() {
        return ["ShellCommandParsingResult.Redirect|1 operator 9|2 destination_fds 13*|3 target_node_type 9|4 target_text 9?"];
      }
    }
    class VS extends JS {
      constructor(e3) {
        super(), this.commands = [], this.suggestedSandboxMode = KS.UNSPECIFIED, this.classificationFailed = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new VS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new VS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new VS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(VS, e3, t3);
      }
      static $() {
        return ["CommandClassifierResult|1 commands #0*|2 suggested_sandbox_mode #1|3 classification_failed 8", ZS, KS];
      }
    }
    var KS = jr(Rr.proto3, MS, "CommandClassifierResult.SuggestedSandboxMode", [[0, "UNSPECIFIED"], [1, "SANDBOX"], [2, "NO_SANDBOX"], [3, "UNDETERMINED"]], 1);
    class ZS extends JS {
      constructor(e3) {
        super(), this.name = "", this.arguments = [], this.subcommandTokens = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ZS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ZS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ZS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ZS, e3, t3);
      }
      static $() {
        return ["CommandClassifierResult.ClassifiedCommand|1 name 9|2 arguments 9*|3 suggested_allowlist_entry 9?|4 subcommand_tokens 9*"];
      }
    }
    class WS extends JS {
      constructor(e3) {
        super(), this.pattern = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new WS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new WS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new WS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(WS, e3, t3);
      }
      static $() {
        return ["ShellOutputNotificationConfig|1 pattern 9|2 reason 9|3 debounce 1?|4 notification_limit 5?"];
      }
    }
    class HS extends JS {
      constructor(e3) {
        super(), this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new HS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new HS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new HS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(HS, e3, t3);
      }
      static $() {
        return ["ForceBackgroundShellArgs|1 tool_call_id 9"];
      }
    }
    class YS extends JS {
      constructor(e3) {
        super(), this.status = FS.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new YS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new YS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new YS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(YS, e3, t3);
      }
      static $() {
        return ["ForceBackgroundShellResult|1 status #0|2 shell_result #1?", FS, ek];
      }
    }
    class GS extends JS {
      constructor(e3) {
        super(), this.kind = XS.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GS, e3, t3);
      }
      static $() {
        return ["ShellHookApprovalRequirement|1 kind #0|2 reason 9?", XS];
      }
    }
    var XS = jr(Rr.proto3, MS, "ShellHookApprovalRequirement.Kind", [[0, "UNSPECIFIED"], [1, "FORCE_PROMPT"]], 1);
    class QS extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.timeout = 0, this.toolCallId = "", this.simpleCommands = [], this.hasInputRedirect = false, this.hasOutputRedirect = false, this.isBackground = false, this.skipApproval = false, this.timeoutBehavior = jS.UNSPECIFIED, this.closeStdin = false, this.adminCommandDenylist = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new QS().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new QS().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new QS().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(QS, e3, t3);
      }
      static $() {
        return ["ShellArgs|1 command 9|2 working_directory 9|3 timeout 5|4 tool_call_id 9|5 simple_commands 9*|6 has_input_redirect 8|7 has_output_redirect 8|8 parsing_result #0|9 requested_sandbox_policy #1?|10 file_output_threshold_bytes 4?|11 is_background 8|12 skip_approval 8|13 timeout_behavior #2|14 hard_timeout 5?|15 description 9?|16 classifier_result #3?|17 close_stdin 8|18 output_notification #4?|19 smart_mode_approval #5?|20 hook_approval_requirement #6?|21 conversation_id 9?|22 admin_command_denylist 9*|23 request_id 9?|24 secret_scope_id 9?", zS, xS, jS, VS, WS, $S, GS];
      }
    }
    class ek extends JS {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ek().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ek().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ek().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ek, e3, t3);
      }
      static $() {
        return ["ShellResult|1 success #0 result|2 failure #1 result|3 timeout #2 result|4 rejected #3 result|5 spawn_error #4 result|7 permission_denied #5 result|101 sandbox_policy #6?|102 is_background 8?|103 terminals_folder 9?|104 pid 13?", dk, pk, fk, hk, gk, mk, xS];
      }
    }
    class tk extends JS {
      constructor(e3) {
        super(), this.kind = rk.UNSPECIFIED, this.memoryLimitBytes = Rr.protoInt64.zero, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tk, e3, t3);
      }
      static $() {
        return ["ShellOomKill|1 kind #0|2 memory_limit_bytes 4", rk];
      }
    }
    var rk = jr(Rr.proto3, MS, "ShellOomKill.Kind", [[0, "UNSPECIFIED"], [1, "COMMAND_KILLED"], [2, "COMMAND_FAILED"], [3, "UNCONFIRMED"]], 1);
    class nk extends JS {
      constructor(e3) {
        super(), this.data = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nk, e3, t3);
      }
      static $() {
        return ["ShellStreamStdout|1 data 9"];
      }
    }
    class ok extends JS {
      constructor(e3) {
        super(), this.data = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ok().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ok().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ok().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ok, e3, t3);
      }
      static $() {
        return ["ShellStreamStderr|1 data 9"];
      }
    }
    class sk extends JS {
      constructor(e3) {
        super(), this.code = 0, this.cwd = "", this.aborted = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sk, e3, t3);
      }
      static $() {
        return ["ShellStreamExit|1 code 13|2 cwd 9|3 output_location #0?|4 aborted 8|5 abort_reason #1?|6 local_execution_time_ms 5?|7 oom_kill #2?", AS, qS, tk];
      }
    }
    class ik extends JS {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ik().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ik().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ik().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ik, e3, t3);
      }
      static $() {
        return ["ShellStreamStart|1 sandbox_policy #0?", xS];
      }
    }
    class ak extends JS {
      constructor(e3) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ak().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ak().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ak().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ak, e3, t3);
      }
      static $() {
        return ["ShellStreamBackgrounded|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?|5 ms_to_wait 5?|6 reason #0?", DS];
      }
    }
    class ck extends JS {
      constructor(e3) {
        super(), this.hookAdditionalContexts = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ck().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ck().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ck().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ck, e3, t3);
      }
      static $() {
        return ["ShellStreamHookContext|1 hook_additional_contexts #0*", NS];
      }
    }
    class uk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.sandboxPolicyType = "", this.reason = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uk, e3, t3);
      }
      static $() {
        return ["ShellSandboxUnsupported|1 command 9|2 working_directory 9|3 sandbox_policy_type 9|4 reason 9|5 is_readonly 8"];
      }
    }
    class lk extends JS {
      constructor(e3) {
        super(), this.event = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lk, e3, t3);
      }
      static $() {
        return ["ShellStream|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event|5 rejected #4 event|6 permission_denied #5 event|7 backgrounded #6 event|8 hook_context #7 event|9 sandbox_unsupported #8 event", nk, ok, sk, ik, hk, mk, ak, ck, uk];
      }
    }
    class dk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dk, e3, t3);
      }
      static $() {
        return ["ShellSuccess|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 shell_id 13?|10 interleaved_output 9?|11 pid 13?|12 ms_to_wait 5?|13 local_execution_time_ms 5?|14 background_reason #1?|15 output_head 9?|16 output_tail 9?|17 elided_chars 13?", AS, DS];
      }
    }
    class pk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.exitCode = 0, this.signal = "", this.stdout = "", this.stderr = "", this.executionTime = 0, this.aborted = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pk, e3, t3);
      }
      static $() {
        return ["ShellFailure|1 command 9|2 working_directory 9|3 exit_code 5|4 signal 9|5 stdout 9|6 stderr 9|7 execution_time 5|8 output_location #0?|9 interleaved_output 9?|10 abort_reason #1?|11 aborted 8|12 local_execution_time_ms 5?|13 output_head 9?|14 output_tail 9?|15 elided_chars 13?|16 oom_kill #2?", AS, qS, tk];
      }
    }
    class fk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.timeoutMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fk, e3, t3);
      }
      static $() {
        return ["ShellTimeout|1 command 9|2 working_directory 9|3 timeout_ms 5"];
      }
    }
    class hk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.reason = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hk, e3, t3);
      }
      static $() {
        return ["ShellRejected|1 command 9|2 working_directory 9|3 reason 9|4 is_readonly 8"];
      }
    }
    class mk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mk, e3, t3);
      }
      static $() {
        return ["ShellPermissionDenied|1 command 9|2 working_directory 9|3 error 9|4 is_readonly 8"];
      }
    }
    class gk extends JS {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gk, e3, t3);
      }
      static $() {
        return ["ShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
    class yk extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class _k extends yk {
      constructor(e3) {
        super(), this.path = "", this.fileText = "", this.toolCallId = "", this.returnFileContentAfterWrite = false, this.fileBytes = new Uint8Array(0), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _k().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _k().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _k().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(_k, e3, t3);
      }
      static $() {
        return ["WriteArgs|1 path 9|2 file_text 9|3 tool_call_id 9|4 return_file_content_after_write 8|5 file_bytes 12|6 encoding_hint 9?"];
      }
    }
    class vk extends yk {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vk, e3, t3);
      }
      static $() {
        return ["WriteResult|1 success #0 result|3 permission_denied #1 result|4 no_space #2 result|5 error #3 result|6 rejected #4 result", wk, bk, Sk, kk, Ek];
      }
    }
    class wk extends yk {
      constructor(e3) {
        super(), this.path = "", this.linesCreated = 0, this.fileSize = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wk, e3, t3);
      }
      static $() {
        return ["WriteSuccess|1 path 9|2 lines_created 5|3 file_size 5|4 file_content_after_write 9?"];
      }
    }
    class bk extends yk {
      constructor(e3) {
        super(), this.path = "", this.directory = "", this.operation = "", this.error = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bk, e3, t3);
      }
      static $() {
        return ["WritePermissionDenied|1 path 9|2 directory 9|3 operation 9|4 error 9|5 is_readonly 8"];
      }
    }
    class Sk extends yk {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Sk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Sk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Sk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Sk, e3, t3);
      }
      static $() {
        return ["WriteNoSpace|1 path 9"];
      }
    }
    class kk extends yk {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kk, e3, t3);
      }
      static $() {
        return ["WriteError|1 path 9|2 error 9"];
      }
    }
    class Ek extends yk {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ek().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ek().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ek().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ek, e3, t3);
      }
      static $() {
        return ["WriteRejected|1 path 9|2 reason 9"];
      }
    }
    class xk extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Tk extends xk {
      constructor(e3) {
        super(), this.path = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Tk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Tk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Tk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Tk, e3, t3);
      }
      static $() {
        return ["DeleteArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class Ok extends xk {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ok().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ok().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ok().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ok, e3, t3);
      }
      static $() {
        return ["DeleteResult|1 success #0 result|2 file_not_found #1 result|3 not_file #2 result|4 permission_denied #3 result|5 file_busy #4 result|6 rejected #5 result|7 error #6 result", Pk, Ik, Ck, Ak, $k, Rk, Nk];
      }
    }
    class Pk extends xk {
      constructor(e3) {
        super(), this.path = "", this.deletedFile = "", this.fileSize = Rr.protoInt64.zero, this.prevContent = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Pk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Pk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Pk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Pk, e3, t3);
      }
      static $() {
        return ["DeleteSuccess|1 path 9|2 deleted_file 9|3 file_size 3|4 prev_content 9"];
      }
    }
    class Ik extends xk {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ik().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ik().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ik().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ik, e3, t3);
      }
      static $() {
        return ["DeleteFileNotFound|1 path 9"];
      }
    }
    class Ck extends xk {
      constructor(e3) {
        super(), this.path = "", this.actualType = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ck().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ck().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ck().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ck, e3, t3);
      }
      static $() {
        return ["DeleteNotFile|1 path 9|2 actual_type 9"];
      }
    }
    class Ak extends xk {
      constructor(e3) {
        super(), this.path = "", this.clientVisibleError = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ak().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ak().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ak().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ak, e3, t3);
      }
      static $() {
        return ["DeletePermissionDenied|1 path 9|2 client_visible_error 9|3 is_readonly 8"];
      }
    }
    class $k extends xk {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $k().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $k().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $k().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($k, e3, t3);
      }
      static $() {
        return ["DeleteFileBusy|1 path 9"];
      }
    }
    class Rk extends xk {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Rk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Rk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Rk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Rk, e3, t3);
      }
      static $() {
        return ["DeleteRejected|1 path 9|2 reason 9"];
      }
    }
    class Nk extends xk {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Nk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Nk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Nk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Nk, e3, t3);
      }
      static $() {
        return ["DeleteError|1 path 9|2 error 9"];
      }
    }
    class Mk extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Jk extends Mk {
      constructor(e3) {
        super(), this.pattern = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Jk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Jk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Jk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Jk, e3, t3);
      }
      static $() {
        return ["GrepArgs|1 pattern 9|2 path 9?|3 glob 9?|4 output_mode 9?|5 context_before 5?|6 context_after 5?|7 context 5?|8 case_insensitive 8?|9 type 9?|10 head_limit 5?|11 multiline 8?|12 sort 9?|13 sort_ascending 8?|14 tool_call_id 9|15 sandbox_policy #0?|16 offset 5?", xS];
      }
    }
    class jk extends Mk {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jk, e3, t3);
      }
      static $() {
        return ["GrepResult|1 success #0 result|2 error #1 result", Fk, Dk];
      }
    }
    class Dk extends Mk {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Dk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Dk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Dk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Dk, e3, t3);
      }
      static $() {
        return ["GrepError|1 error 9"];
      }
    }
    class Fk extends Mk {
      constructor(e3) {
        super(), this.pattern = "", this.path = "", this.outputMode = "", this.workspaceResults = {}, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Fk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Fk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Fk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Fk, e3, t3);
      }
      static $() {
        return ["GrepSuccess|1 pattern 9|2 path 9|3 output_mode 9|4 workspace_results 9,#0|5 active_editor_result #0?", qk];
      }
    }
    class qk extends Mk {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qk, e3, t3);
      }
      static $() {
        return ["GrepUnionResult|1 count #0 result|2 files #1 result|3 content #2 result", zk, Bk, Lk];
      }
    }
    class zk extends Mk {
      constructor(e3) {
        super(), this.counts = [], this.totalFiles = 0, this.totalMatches = 0, this.clientTruncated = false, this.ripgrepTruncated = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zk, e3, t3);
      }
      static $() {
        return ["GrepCountResult|1 counts #0*|2 total_files 5|3 total_matches 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", Uk];
      }
    }
    class Uk extends Mk {
      constructor(e3) {
        super(), this.file = "", this.count = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Uk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Uk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Uk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Uk, e3, t3);
      }
      static $() {
        return ["GrepFileCount|1 file 9|2 count 5"];
      }
    }
    class Bk extends Mk {
      constructor(e3) {
        super(), this.files = [], this.totalFiles = 0, this.clientTruncated = false, this.ripgrepTruncated = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Bk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Bk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Bk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Bk, e3, t3);
      }
      static $() {
        return ["GrepFilesResult|1 files 9*|2 total_files 5|3 client_truncated 8|4 ripgrep_truncated 8|5 head_limit_applied 5?|6 offset_applied 5?"];
      }
    }
    class Lk extends Mk {
      constructor(e3) {
        super(), this.matches = [], this.totalLines = 0, this.totalMatchedLines = 0, this.clientTruncated = false, this.ripgrepTruncated = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Lk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Lk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Lk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Lk, e3, t3);
      }
      static $() {
        return ["GrepContentResult|1 matches #0*|2 total_lines 5|3 total_matched_lines 5|4 client_truncated 8|5 ripgrep_truncated 8|6 head_limit_applied 5?|7 offset_applied 5?", Vk];
      }
    }
    class Vk extends Mk {
      constructor(e3) {
        super(), this.file = "", this.matches = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Vk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Vk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Vk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Vk, e3, t3);
      }
      static $() {
        return ["GrepFileMatch|1 file 9|2 matches #0*", Kk];
      }
    }
    class Kk extends Mk {
      constructor(e3) {
        super(), this.lineNumber = 0, this.content = "", this.contentTruncated = false, this.isContextLine = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Kk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Kk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Kk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Kk, e3, t3);
      }
      static $() {
        return ["GrepContentMatch|1 line_number 5|2 content 9|3 content_truncated 8|4 is_context_line 8"];
      }
    }
    class Zk extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Wk extends Zk {
      constructor(e3) {
        super(), this.path = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Wk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Wk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Wk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Wk, e3, t3);
      }
      static $() {
        return ["ReadArgs|1 path 9|2 tool_call_id 9|4 offset 5?|5 limit 13?|6 encoding_hint 9?|7 digest_only 8?"];
      }
    }
    class Hk extends Zk {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Hk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Hk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Hk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Hk, e3, t3);
      }
      static $() {
        return ["ReadResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result|6 invalid_file #5 result", Yk, Gk, Xk, Qk, eE, tE];
      }
    }
    class Yk extends Zk {
      constructor(e3) {
        super(), this.path = "", this.output = { case: void 0 }, this.totalLines = 0, this.fileSize = Rr.protoInt64.zero, this.truncated = false, this.rangeApplied = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Yk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Yk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Yk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Yk, e3, t3);
      }
      static $() {
        return ["ReadSuccess|1 path 9|2 content 9 output|5 data 12 output|3 total_lines 5|4 file_size 3|6 truncated 8|7 output_blob_id 12?|8 range_applied 8|9 sha256 9?|10 size_bytes 3?"];
      }
    }
    class Gk extends Zk {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Gk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Gk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Gk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Gk, e3, t3);
      }
      static $() {
        return ["ReadError|1 path 9|2 error 9"];
      }
    }
    class Xk extends Zk {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Xk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Xk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Xk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Xk, e3, t3);
      }
      static $() {
        return ["ReadRejected|1 path 9|2 reason 9"];
      }
    }
    class Qk extends Zk {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Qk().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Qk().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Qk().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Qk, e3, t3);
      }
      static $() {
        return ["ReadFileNotFound|1 path 9"];
      }
    }
    class eE extends Zk {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new eE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new eE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new eE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(eE, e3, t3);
      }
      static $() {
        return ["ReadPermissionDenied|1 path 9"];
      }
    }
    class tE extends Zk {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tE, e3, t3);
      }
      static $() {
        return ["ReadInvalidFile|1 path 9|2 reason 9"];
      }
    }
    class rE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class nE extends rE {
      constructor(e3) {
        super(), this.path = "", this.ignore = [], this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nE, e3, t3);
      }
      static $() {
        return ["LsArgs|1 path 9|2 ignore 9*|3 tool_call_id 9|4 sandbox_policy #0?|5 timeout_ms 13?", xS];
      }
    }
    class oE extends rE {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oE, e3, t3);
      }
      static $() {
        return ["LsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 timeout #3 result", sE, cE, uE, lE];
      }
    }
    class sE extends rE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sE, e3, t3);
      }
      static $() {
        return ["LsSuccess|1 directory_tree_root #0", iE];
      }
    }
    class iE extends rE {
      constructor(e3) {
        super(), this.absPath = "", this.childrenDirs = [], this.childrenFiles = [], this.childrenWereProcessed = false, this.fullSubtreeExtensionCounts = {}, this.numFiles = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iE, e3, t3);
      }
      static $() {
        return ["LsDirectoryTreeNode|1 abs_path 9|2 children_dirs #0*|3 children_files #1*|4 children_were_processed 8|5 full_subtree_extension_counts 9,5|6 num_files 5", iE, aE];
      }
    }
    class aE extends rE {
      constructor(e3) {
        super(), this.name = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aE, e3, t3);
      }
      static $() {
        return ["LsDirectoryTreeNode.File|1 name 9|2 terminal_metadata #0?", dE];
      }
    }
    class cE extends rE {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cE, e3, t3);
      }
      static $() {
        return ["LsError|1 path 9|2 error 9"];
      }
    }
    class uE extends rE {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uE, e3, t3);
      }
      static $() {
        return ["LsRejected|1 path 9|2 reason 9"];
      }
    }
    class lE extends rE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lE, e3, t3);
      }
      static $() {
        return ["LsTimeout|1 directory_tree_root #0", iE];
      }
    }
    class dE extends rE {
      constructor(e3) {
        super(), this.lastCommands = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dE, e3, t3);
      }
      static $() {
        return ["TerminalMetadata|1 cwd 9?|2 last_commands #0*|3 last_modified_ms 3?|4 current_command #0?", pE];
      }
    }
    class pE extends rE {
      constructor(e3) {
        super(), this.command = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pE, e3, t3);
      }
      static $() {
        return ["TerminalMetadata.Command|1 command 9|2 exit_code 5?|3 timestamp_ms 3?|4 duration_ms 3?"];
      }
    }
    const fE = "agent.v1.";
    class hE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return fE;
      }
    }
    var mE = jr(Rr.proto3, fE, "DiagnosticSeverity", [[0, "UNSPECIFIED"], [1, "ERROR"], [2, "WARNING"], [3, "INFORMATION"], [4, "HINT"]], 1);
    class gE extends hE {
      constructor(e3) {
        super(), this.path = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gE, e3, t3);
      }
      static $() {
        return ["DiagnosticsArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class yE extends hE {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new yE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new yE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new yE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(yE, e3, t3);
      }
      static $() {
        return ["DiagnosticsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result", _E, wE, bE, SE, kE];
      }
    }
    class _E extends hE {
      constructor(e3) {
        super(), this.path = "", this.diagnostics = [], this.totalDiagnostics = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _E().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _E().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _E().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(_E, e3, t3);
      }
      static $() {
        return ["DiagnosticsSuccess|1 path 9|2 diagnostics #0*|3 total_diagnostics 5", vE];
      }
    }
    class vE extends hE {
      constructor(e3) {
        super(), this.severity = mE.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vE, e3, t3);
      }
      static $() {
        return ["Diagnostic|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8", mE, IS];
      }
    }
    class wE extends hE {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wE, e3, t3);
      }
      static $() {
        return ["DiagnosticsError|1 path 9|2 error 9"];
      }
    }
    class bE extends hE {
      constructor(e3) {
        super(), this.path = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bE, e3, t3);
      }
      static $() {
        return ["DiagnosticsRejected|1 path 9|2 reason 9"];
      }
    }
    class SE extends hE {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new SE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new SE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new SE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(SE, e3, t3);
      }
      static $() {
        return ["DiagnosticsFileNotFound|1 path 9"];
      }
    }
    class kE extends hE {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kE, e3, t3);
      }
      static $() {
        return ["DiagnosticsPermissionDenied|1 path 9"];
      }
    }
    const EE = "agent.v1.";
    var xE = jr(Rr.proto3, EE, "PackageType", [[0, "UNSPECIFIED"], [1, "CURSOR_PROJECT"], [2, "CURSOR_PERSONAL"], [3, "CLAUDE_SKILL"], [4, "CLAUDE_PLUGIN"]], 1);
    const TE = "agent.v1.";
    class OE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return TE;
      }
    }
    var PE = jr(Rr.proto3, TE, "CursorRuleSource", [[0, "UNSPECIFIED"], [1, "TEAM"], [2, "USER"]], 1);
    class IE extends OE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new IE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new IE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new IE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(IE, e3, t3);
      }
      static $() {
        return ["CursorRuleTypeGlobal"];
      }
    }
    class CE extends OE {
      constructor(e3) {
        super(), this.globs = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CE, e3, t3);
      }
      static $() {
        return ["CursorRuleTypeFileGlobs|1 globs 9*"];
      }
    }
    class AE extends OE {
      constructor(e3) {
        super(), this.description = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AE, e3, t3);
      }
      static $() {
        return ["CursorRuleTypeAgentFetched|1 description 9"];
      }
    }
    class $E extends OE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $E().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $E().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $E().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($E, e3, t3);
      }
      static $() {
        return ["CursorRuleTypeManuallyAttached"];
      }
    }
    class RE extends OE {
      constructor(e3) {
        super(), this.type = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new RE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new RE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new RE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(RE, e3, t3);
      }
      static $() {
        return ["CursorRuleType|1 global #0 type|2 file_globbed #1 type|3 agent_fetched #2 type|4 manually_attached #3 type", IE, CE, AE, $E];
      }
    }
    class NE extends OE {
      constructor(e3) {
        super(), this.fullPath = "", this.content = "", this.source = PE.UNSPECIFIED, this.environments = [], this.disabledEnvironments = [], this.scopedTo = [], this.frontmatter = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new NE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new NE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new NE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(NE, e3, t3);
      }
      static $() {
        return ["CursorRule|1 full_path 9|2 content 9|3 type #0|4 source #1|5 git_remote_origin 9?|6 parse_error 9?|7 environments 9*|8 disabled_environments 9*|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 scoped_to 9*|14 frontmatter 9|15 is_required 8?", RE, PE];
      }
    }
    class ME extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class JE extends ME {
      constructor(e3) {
        super(), this.relativeWorkspacePath = "", this.remoteUrls = [], this.remoteNames = [], this.repoName = "", this.repoOwner = "", this.isTracked = false, this.isLocal = false, this.workspaceUri = "", this.pathEncryptionKey = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new JE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new JE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new JE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(JE, e3, t3);
      }
      static $() {
        return ["RepositoryIndexingInfo|1 relative_workspace_path 9|2 remote_urls 9*|3 remote_names 9*|4 repo_name 9|5 repo_owner 9|6 is_tracked 8|7 is_local 8|8 orthogonal_transform_seed 1?|9 workspace_uri 9|10 path_encryption_key 9"];
      }
    }
    const jE = "agent.v1.";
    class DE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return jE;
      }
    }
    var FE = jr(Rr.proto3, jE, "CustomSubagentPermissionMode", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "READONLY"], [3, "AGENT_ONLY"]], 1), qE = jr(Rr.proto3, jE, "SubagentExecutionEnvironment", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "CLOUD"]], 1), zE = jr(Rr.proto3, jE, "SubagentBackgroundReason", [[0, "UNSPECIFIED"], [1, "AGENT_REQUEST"], [2, "USER_REQUEST"], [3, "QUEUED_FOLLOW_UP"]], 1), UE = jr(Rr.proto3, jE, "TaskMode", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "PLAN"]], 1);
    class BE extends DE {
      constructor(e3) {
        super(), this.fullPath = "", this.name = "", this.description = "", this.tools = [], this.model = "", this.prompt = "", this.permissionMode = FE.UNSPECIFIED, this.isBackground = false, this.forceDefaultModel = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new BE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new BE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new BE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(BE, e3, t3);
      }
      static $() {
        return ["CustomSubagent|1 full_path 9|2 name 9|3 description 9|4 tools 9*|5 model 9|6 prompt 9|7 permission_mode #0|8 is_background 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 force_default_model 8|14 source 9?", FE];
      }
    }
    class LE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class VE extends LE {
      constructor(e3) {
        super(), this.fullPath = "", this.content = "", this.description = "", this.environments = [], this.disabledEnvironments = [], this.disableModelInvocation = false, this.globs = [], this.scopedTo = [], this.argumentHint = "", this.disableUserInvocation = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new VE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new VE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new VE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(VE, e3, t3);
      }
      static $() {
        return ["AgentSkill|1 full_path 9|2 content 9|3 description 9|4 parse_error 9?|5 environments 9*|6 disabled_environments 9*|7 git_remote_origin 9?|8 disable_model_invocation 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 globs 9*|14 scoped_to 9*|15 argument_hint 9|16 disable_user_invocation 8"];
      }
    }
    class KE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ZE extends KE {
      constructor(e3) {
        super(), this.spec = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ZE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ZE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ZE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ZE, e3, t3);
      }
      static $() {
        return ["SystemPromptSpec|1 replace 9 spec|2 append 9 spec"];
      }
    }
    const WE = "agent.v1.";
    class HE extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return WE;
      }
    }
    var YE = jr(Rr.proto3, WE, "MountedAgentStoreKind", [[0, "UNSPECIFIED"], [1, "SELF"], [2, "PEER"], [3, "SHARE"], [4, "PRINCIPAL"]], 1);
    class GE extends HE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GE, e3, t3);
      }
      static $() {
        return ["RequestContextArgs|2 notes_session_id 9?|3 workspace_id 9?|4 read_only_pinned_tree_sha 9?|5 read_only_plugin_cache_root 9?|7 use_cached 8?|8 wait_for_workspace_cache 8?"];
      }
    }
    class XE extends HE {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new XE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new XE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new XE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(XE, e3, t3);
      }
      static $() {
        return ["RequestContextResult|1 success #0 result|2 error #1 result|3 rejected #2 result", QE, ex, tx];
      }
    }
    class QE extends HE {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new QE().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new QE().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new QE().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(QE, e3, t3);
      }
      static $() {
        return ["RequestContextSuccess|1 request_context #0|2 served_from_disk_cache 8?", fx];
      }
    }
    class ex extends HE {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ex().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ex().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ex().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ex, e3, t3);
      }
      static $() {
        return ["RequestContextError|1 error 9"];
      }
    }
    class tx extends HE {
      constructor(e3) {
        super(), this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tx, e3, t3);
      }
      static $() {
        return ["RequestContextRejected|1 reason 9"];
      }
    }
    class rx extends HE {
      constructor(e3) {
        super(), this.path = "", this.status = "", this.branchName = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new rx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new rx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new rx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(rx, e3, t3);
      }
      static $() {
        return ["GitRepoInfo|1 path 9|2 status 9|3 branch_name 9|4 remote_url 9?|5 previous_branch_is_ancestor 8?|6 is_origin_backed 8?"];
      }
    }
    class nx extends HE {
      constructor(e3) {
        super(), this.osVersion = "", this.workspacePaths = [], this.shell = "", this.sandboxEnabled = false, this.terminalsFolder = "", this.agentSharedNotesFolder = "", this.agentConversationNotesFolder = "", this.timeZone = "", this.projectFolder = "", this.agentTranscriptsFolder = "", this.sandboxNetworkExplicitAllowlist = [], this.mountedAgentStores = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nx, e3, t3);
      }
      static $() {
        return ["RequestContextEnv|1 os_version 9|2 workspace_paths 9*|3 shell 9|5 sandbox_enabled 8|7 terminals_folder 9|8 agent_shared_notes_folder 9|9 agent_conversation_notes_folder 9|10 time_zone 9|11 project_folder 9|12 agent_transcripts_folder 9|13 artifacts_folder 9?|14 sandbox_supported 8?|16 sandbox_network_has_defaults 8?|17 sandbox_network_explicit_allowlist 9*|18 secret_redaction_enabled 8?|19 computer_use_supported 8?|20 is_working_dir_home_dir 8?|21 process_working_directory 9?|22 smart_mode_classifier_auto_mode_enabled 8?|23 dev_force_next_smart_mode_classifier_block_token 9?|24 dev_delay_next_smart_mode_classifier_token 9?|25 mounted_agent_stores #0*|26 user_agent_store_web_context #1?|27 dev_mock_prompt_time #2?|28 agent_store_dynamic_mount_enabled 8?", ox, sx, Rr.Timestamp];
      }
    }
    class ox extends HE {
      constructor(e3) {
        super(), this.path = "", this.kind = YE.UNSPECIFIED, this.readOnly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ox().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ox().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ox().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ox, e3, t3);
      }
      static $() {
        return ["MountedAgentStore|1 path 9|2 kind #0|3 alias 9?|4 read_only 8|5 inherited_from_path 9?", YE];
      }
    }
    class sx extends HE {
      constructor(e3) {
        super(), this.storeId = "", this.portalBaseUrl = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sx, e3, t3);
      }
      static $() {
        return ["UserAgentStoreWebContext|1 store_id 9|2 portal_base_url 9"];
      }
    }
    class ix extends HE {
      constructor(e3) {
        super(), this.logPath = "", this.serverEndpoint = "", this.sessionId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ix().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ix().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ix().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ix, e3, t3);
      }
      static $() {
        return ["DebugModeConfig|1 log_path 9|2 server_endpoint 9|3 session_id 9"];
      }
    }
    class ax extends HE {
      constructor(e3) {
        super(), this.name = "", this.description = "", this.folderPath = "", this.enabled = false, this.readmeFilePath = "", this.packageType = xE.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ax().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ax().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ax().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ax, e3, t3);
      }
      static $() {
        return ["SkillDescriptor|1 name 9|2 description 9|3 folder_path 9|4 enabled 8|5 parse_error 9?|6 readme_file_path 9|7 package_type #0", xE];
      }
    }
    class cx extends HE {
      constructor(e3) {
        super(), this.skillDescriptors = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cx, e3, t3);
      }
      static $() {
        return ["SkillOptions|1 skill_descriptors #0*", ax];
      }
    }
    class ux extends HE {
      constructor(e3) {
        super(), this.configuredSteps = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ux().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ux().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ux().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ux, e3, t3);
      }
      static $() {
        return ["HooksConfigInfo|1 configured_steps 9*"];
      }
    }
    class lx extends HE {
      constructor(e3) {
        super(), this.allowInstructions = [], this.blockInstructions = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lx, e3, t3);
      }
      static $() {
        return ["PermissionsAutoRunInstructions|1 allow_instructions 9*|2 block_instructions 9*"];
      }
    }
    class dx extends HE {
      constructor(e3) {
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dx, e3, t3);
      }
      static $() {
        return ["PrecomputedHumanChangeRenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"];
      }
    }
    class px extends HE {
      constructor(e3) {
        super(), this.path = "", this.renderedDiffs = [], this.isNewFile = false, this.isDeletedFile = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new px().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new px().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new px().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(px, e3, t3);
      }
      static $() {
        return ["PrecomputedHumanChange|1 path 9|2 rendered_diffs #0*|3 is_new_file 8|4 is_deleted_file 8", dx];
      }
    }
    class fx extends HE {
      constructor(e3) {
        super(), this.rules = [], this.repositoryInfo = [], this.tools = [], this.gitRepos = [], this.projectLayouts = [], this.mcpInstructions = [], this.fileContents = {}, this.customSubagents = [], this.agentSkills = [], this.precomputedHumanChanges = [], this.nonFileRules = [], this.disabledTeamRules = [], this.adminCommandDenylist = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fx, e3, t3);
      }
      static $() {
        return ["RequestContext|2 rules #0*|4 env #1|6 repository_info #2*|7 tools #3*|8 conversation_notes_listing 9?|9 shared_notes_listing 9?|11 git_repos #4*|13 project_layouts #5*|14 mcp_instructions #6*|15 debug_mode_config #7?|16 cloud_rule 9?|17 web_search_enabled 8?|18 skill_options #8?|19 repository_info_should_query_prod 8?|20 file_contents 9,9|21 user_intent_summary 9?|22 custom_subagents #9*|23 mcp_file_system_options #10?|24 web_fetch_enabled 8?|25 hooks_additional_context 9?|26 commit_attribution_message 9?|27 pr_attribution_message 9?|28 hooks_config #11?|29 agent_skills #12*|30 precomputed_human_changes #13*|31 recently_added_plugin #14?|32 supports_mcp_auth 8?|33 git_repo_info_complete 8?|34 mcp_meta_tool_options #15?|35 read_lints_enabled 8?|36 mcp_info_complete 8?|37 non_file_rules #0*|38 matched_installed_plugin #16?|39 rules_info_complete 8?|40 env_info_complete 8?|41 repository_info_complete 8?|42 custom_subagents_info_complete 8?|43 agent_skills_info_complete 8?|44 mcp_file_system_info_complete 8?|45 git_status_info_complete 8?|46 user_permissions_auto_run #17?|47 project_permissions_auto_run #17?|48 admin_permissions_auto_run #17?|49 disabled_team_rules 9*|50 search_conversations_enabled 8?|51 send_message_enabled 8?|52 admin_command_denylist 9*|53 system_prompt_override #18?", NE, nx, JE, Fr, rx, iE, qr, ix, cx, BE, Br, ux, VE, px, hx, Lr, gx, lx, ZE];
      }
    }
    class hx extends HE {
      constructor(e3) {
        super(), this.displayName = "", this.description = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hx, e3, t3);
      }
      static $() {
        return ["RecentlyAddedPlugin|1 display_name 9|2 description 9|3 skills #0*|4 subagents #0*|5 hooks #0*|6 rules #0*|7 commands #0*|8 mcp_servers 9*", mx];
      }
    }
    class mx extends HE {
      constructor(e3) {
        super(), this.name = "", this.description = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mx, e3, t3);
      }
      static $() {
        return ["RecentlyAddedPlugin.CapabilityDescriptor|1 name 9|2 description 9"];
      }
    }
    class gx extends HE {
      constructor(e3) {
        super(), this.displayName = "", this.description = "", this.matchedKeyword = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gx, e3, t3);
      }
      static $() {
        return ["MatchedInstalledPlugin|1 display_name 9|2 description 9|3 matched_keyword 9|4 skills #0*|5 subagents #0*|6 hooks #0*|7 rules #0*|8 commands #0*|9 mcp_servers 9*", mx];
      }
    }
    const yx = "agent.v1.";
    class _x extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return yx;
      }
    }
    var vx = jr(Rr.proto3, yx, "McpRefreshPolicy", [[0, "UNSPECIFIED"], [1, "FORCE_IF_MISSING"], [2, "FORCE"]], 1);
    class wx extends _x {
      constructor(e3) {
        super(), this.name = "", this.args = {}, this.toolCallId = "", this.providerIdentifier = "", this.toolName = "", this.smartModeApprovalOnly = false, this.skipApproval = false, this.serverIdentifier = "", this.symbolicPathArguments = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wx, e3, t3);
      }
      static $() {
        return ["McpArgs|1 name 9|2 args 9,#0|3 tool_call_id 9|4 provider_identifier 9|5 tool_name 9|6 smart_mode_approval #1?|7 smart_mode_approval_only 8|8 skip_approval 8|9 server_identifier 9|10 symbolic_path_arguments #2*", Rr.Value, $S, bx];
      }
    }
    class bx extends _x {
      constructor(e3) {
        super(), this.path = "", this.sha256 = "", this.sizeBytes = Rr.protoInt64.zero, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bx, e3, t3);
      }
      static $() {
        return ["McpSymbolicPathArgument|1 path 9|2 sha256 9|3 size_bytes 3"];
      }
    }
    class Sx extends _x {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Sx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Sx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Sx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Sx, e3, t3);
      }
      static $() {
        return ["McpResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 tool_not_found #4 result|6 server_not_found #5 result|7 approved #6 result", Cx, Ax, Nx, Mx, Ex, xx, kx];
      }
    }
    class kx extends _x {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kx, e3, t3);
      }
      static $() {
        return ["McpApproved"];
      }
    }
    class Ex extends _x {
      constructor(e3) {
        super(), this.name = "", this.availableTools = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ex().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ex().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ex().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ex, e3, t3);
      }
      static $() {
        return ["McpToolNotFound|1 name 9|2 available_tools 9*|3 recovery #0?", $x];
      }
    }
    class xx extends _x {
      constructor(e3) {
        super(), this.name = "", this.availableServers = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xx, e3, t3);
      }
      static $() {
        return ["McpServerNotFound|1 name 9|2 available_servers 9*"];
      }
    }
    class Tx extends _x {
      constructor(e3) {
        super(), this.text = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Tx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Tx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Tx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Tx, e3, t3);
      }
      static $() {
        return ["McpTextContent|1 text 9|2 output_location #0?", AS];
      }
    }
    class Ox extends _x {
      constructor(e3) {
        super(), this.data = new Uint8Array(0), this.mimeType = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ox().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ox().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ox().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ox, e3, t3);
      }
      static $() {
        return ["McpImageContent|1 data 12|2 mime_type 9"];
      }
    }
    class Px extends _x {
      constructor(e3) {
        super(), this.content = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Px().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Px().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Px().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Px, e3, t3);
      }
      static $() {
        return ["McpToolResultContentItem|1 text #0 content|2 image #1 content", Tx, Ox];
      }
    }
    class Ix extends _x {
      constructor(e3) {
        super(), this.body = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ix().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ix().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ix().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ix, e3, t3);
      }
      static $() {
        return ["SystemReminder|1 body 9"];
      }
    }
    class Cx extends _x {
      constructor(e3) {
        super(), this.content = [], this.isError = false, this.systemReminders = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Cx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Cx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Cx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Cx, e3, t3);
      }
      static $() {
        return ["McpSuccess|1 content #0*|2 is_error 8|3 structured_content #1|4 system_reminders #2*", Px, Rr.Struct, Ix];
      }
    }
    class Ax extends _x {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ax().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ax().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ax().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ax, e3, t3);
      }
      static $() {
        return ["McpError|1 error 9|2 needs_auth 8?|3 recovery #0?|4 http_status 5?", $x];
      }
    }
    class $x extends _x {
      constructor(e3) {
        super(), this.outcome = Rx.UNSPECIFIED, this.availableTools = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $x().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $x().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $x().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($x, e3, t3);
      }
      static $() {
        return ["McpRecovery|1 outcome #0|2 fresh_input_schema_json 9?|3 available_tools 9*", Rx];
      }
    }
    var Rx = jr(Rr.proto3, yx, "McpRecovery.Outcome", [[0, "UNSPECIFIED"], [1, "CHANGED"], [2, "REMOVED"], [3, "UNCHANGED"], [4, "REFRESH_FAILED"]], 1);
    class Nx extends _x {
      constructor(e3) {
        super(), this.reason = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Nx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Nx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Nx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Nx, e3, t3);
      }
      static $() {
        return ["McpRejected|1 reason 9|2 is_readonly 8"];
      }
    }
    class Mx extends _x {
      constructor(e3) {
        super(), this.error = "", this.isReadonly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Mx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Mx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Mx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Mx, e3, t3);
      }
      static $() {
        return ["McpPermissionDenied|1 error 9|2 is_readonly 8"];
      }
    }
    class Jx extends _x {
      constructor(e3) {
        super(), this.serverIdentifiers = [], this.kickOnly = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Jx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Jx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Jx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Jx, e3, t3);
      }
      static $() {
        return ["McpStateExecArgs|1 server_identifiers 9*|2 kick_only 8|3 refresh_policy #0?", vx];
      }
    }
    class jx extends _x {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jx, e3, t3);
      }
      static $() {
        return ["McpStateExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", Fx, qx, zx];
      }
    }
    class Dx extends _x {
      constructor(e3) {
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], this.instructions = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Dx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Dx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Dx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Dx, e3, t3);
      }
      static $() {
        return ["McpStateServer|1 server_name 9|2 server_identifier 9|3 plugin 9?|4 marketplace 9?|5 tools #0*|6 instructions #1*|7 status 9?|8 error_message 9?", Fr, qr];
      }
    }
    class Fx extends _x {
      constructor(e3) {
        super(), this.servers = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Fx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Fx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Fx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Fx, e3, t3);
      }
      static $() {
        return ["McpStateSuccess|1 servers #0*", Dx];
      }
    }
    class qx extends _x {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qx, e3, t3);
      }
      static $() {
        return ["McpStateError|1 error 9"];
      }
    }
    class zx extends _x {
      constructor(e3) {
        super(), this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zx, e3, t3);
      }
      static $() {
        return ["McpStateRejected|1 reason 9"];
      }
    }
    class Ux extends _x {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Ux().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Ux().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Ux().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Ux, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesExecArgs|1 server 9?"];
      }
    }
    class Bx extends _x {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Bx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Bx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Bx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Bx, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", Vx, Kx, Zx];
      }
    }
    class Lx extends _x {
      constructor(e3) {
        super(), this.uri = "", this.server = "", this.annotations = {}, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Lx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Lx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Lx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Lx, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesExecResult.McpResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"];
      }
    }
    class Vx extends _x {
      constructor(e3) {
        super(), this.resources = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Vx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Vx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Vx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Vx, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesSuccess|1 resources #0*", Lx];
      }
    }
    class Kx extends _x {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Kx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Kx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Kx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Kx, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesError|1 error 9"];
      }
    }
    class Zx extends _x {
      constructor(e3) {
        super(), this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Zx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Zx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Zx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Zx, e3, t3);
      }
      static $() {
        return ["ListMcpResourcesRejected|1 reason 9"];
      }
    }
    class Wx extends _x {
      constructor(e3) {
        super(), this.server = "", this.uri = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Wx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Wx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Wx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Wx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceExecArgs|1 server 9|2 uri 9|3 download_path 9?|4 tool_call_id 9|5 smart_mode_approval #0?", $S];
      }
    }
    class Hx extends _x {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Hx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Hx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Hx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Hx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 not_found #3 result", Yx, Gx, Xx, Qx];
      }
    }
    class Yx extends _x {
      constructor(e3) {
        super(), this.uri = "", this.content = { case: void 0 }, this.annotations = {}, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Yx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Yx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Yx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Yx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceSuccess|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9|8 download_path 9?|9 output_location #0?|10 meta_json 9?", AS];
      }
    }
    class Gx extends _x {
      constructor(e3) {
        super(), this.uri = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Gx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Gx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Gx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Gx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceError|1 uri 9|2 error 9"];
      }
    }
    class Xx extends _x {
      constructor(e3) {
        super(), this.uri = "", this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Xx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Xx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Xx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Xx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceRejected|1 uri 9|2 reason 9"];
      }
    }
    class Qx extends _x {
      constructor(e3) {
        super(), this.uri = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new Qx().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new Qx().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new Qx().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(Qx, e3, t3);
      }
      static $() {
        return ["ReadMcpResourceNotFound|1 uri 9"];
      }
    }
    class eT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class tT extends eT {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.toolCallId = "", this.enableWriteShellStdinTool = false, this.skipApproval = false, this.adminCommandDenylist = [], this.suppressStdinLogging = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tT, e3, t3);
      }
      static $() {
        return ["BackgroundShellSpawnArgs|1 command 9|2 working_directory 9|3 tool_call_id 9|4 parsing_result #0|5 sandbox_policy #1?|6 enable_write_shell_stdin_tool 8|7 description 9?|8 classifier_result #2?|9 output_notification #3?|10 smart_mode_approval #4?|11 hook_approval_requirement #5?|12 skip_approval 8|13 conversation_id 9?|14 admin_command_denylist 9*|15 request_id 9?|16 suppress_stdin_logging 8|17 secret_scope_id 9?", zS, xS, VS, WS, $S, GS];
      }
    }
    class rT extends eT {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new rT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new rT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new rT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(rT, e3, t3);
      }
      static $() {
        return ["BackgroundShellSpawnResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 sandbox_unsupported #4 result", nT, oT, hk, mk, uk];
      }
    }
    class nT extends eT {
      constructor(e3) {
        super(), this.shellId = 0, this.command = "", this.workingDirectory = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nT, e3, t3);
      }
      static $() {
        return ["BackgroundShellSpawnSuccess|1 shell_id 13|2 command 9|3 working_directory 9|4 pid 13?"];
      }
    }
    class oT extends eT {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oT, e3, t3);
      }
      static $() {
        return ["BackgroundShellSpawnError|1 command 9|2 working_directory 9|3 error 9"];
      }
    }
    class sT extends eT {
      constructor(e3) {
        super(), this.shellId = 0, this.chars = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sT, e3, t3);
      }
      static $() {
        return ["WriteShellStdinArgs|1 shell_id 13|2 chars 9"];
      }
    }
    class iT extends eT {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iT, e3, t3);
      }
      static $() {
        return ["WriteShellStdinResult|1 success #0 result|2 error #1 result", aT, cT];
      }
    }
    class aT extends eT {
      constructor(e3) {
        super(), this.shellId = 0, this.terminalFileLengthBeforeInputWritten = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aT, e3, t3);
      }
      static $() {
        return ["WriteShellStdinSuccess|1 shell_id 13|2 terminal_file_length_before_input_written 13"];
      }
    }
    class cT extends eT {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cT, e3, t3);
      }
      static $() {
        return ["WriteShellStdinError|1 error 9"];
      }
    }
    class uT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class lT extends uT {
      constructor(e3) {
        super(), this.url = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lT, e3, t3);
      }
      static $() {
        return ["FetchArgs|1 url 9|2 tool_call_id 9"];
      }
    }
    class dT extends uT {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dT, e3, t3);
      }
      static $() {
        return ["FetchResult|1 success #0 result|2 error #1 result", pT, fT];
      }
    }
    class pT extends uT {
      constructor(e3) {
        super(), this.url = "", this.content = "", this.statusCode = 0, this.contentType = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pT, e3, t3);
      }
      static $() {
        return ["FetchSuccess|1 url 9|2 content 9|3 status_code 5|4 content_type 9"];
      }
    }
    class fT extends uT {
      constructor(e3) {
        super(), this.url = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fT, e3, t3);
      }
      static $() {
        return ["FetchError|1 url 9|2 error 9"];
      }
    }
    const hT = "agent.v1.";
    class mT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return hT;
      }
    }
    var gT = jr(Rr.proto3, hT, "RecordingMode", [[0, "UNSPECIFIED"], [1, "START_RECORDING"], [2, "SAVE_RECORDING"], [3, "DISCARD_RECORDING"]], 1), yT = jr(Rr.proto3, hT, "RequestedFilePathRejectedReason", [[0, "UNSPECIFIED"], [1, "SLASHES_NOT_ALLOWED"]], 1);
    class _T extends mT {
      constructor(e3) {
        super(), this.mode = gT.UNSPECIFIED, this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _T().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _T().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _T().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(_T, e3, t3);
      }
      static $() {
        return ["RecordScreenArgs|1 mode #0|2 tool_call_id 9|3 save_as_filename 9?", gT];
      }
    }
    class vT extends mT {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vT, e3, t3);
      }
      static $() {
        return ["RecordScreenResult|1 start_success #0 result|2 save_success #1 result|3 discard_success #2 result|4 failure #3 result", wT, bT, ST, kT];
      }
    }
    class wT extends mT {
      constructor(e3) {
        super(), this.wasPriorRecordingCancelled = false, this.wasSaveAsFilenameIgnored = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wT, e3, t3);
      }
      static $() {
        return ["RecordScreenStartSuccess|1 was_prior_recording_cancelled 8|2 was_save_as_filename_ignored 8"];
      }
    }
    class bT extends mT {
      constructor(e3) {
        super(), this.path = "", this.recordingDurationMs = Rr.protoInt64.zero, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bT, e3, t3);
      }
      static $() {
        return ["RecordScreenSaveSuccess|1 path 9|2 recording_duration_ms 3|3 requested_file_path_rejected_reason #0?", yT];
      }
    }
    class ST extends mT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ST().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ST().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ST().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ST, e3, t3);
      }
      static $() {
        return ["RecordScreenDiscardSuccess"];
      }
    }
    class kT extends mT {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kT, e3, t3);
      }
      static $() {
        return ["RecordScreenFailure|1 error 9"];
      }
    }
    const ET = "agent.v1.";
    class xT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return ET;
      }
    }
    var TT = jr(Rr.proto3, ET, "MouseButton", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"], [3, "MIDDLE"], [4, "BACK"], [5, "FORWARD"]], 1), OT = jr(Rr.proto3, ET, "ScrollDirection", [[0, "UNSPECIFIED"], [1, "UP"], [2, "DOWN"], [3, "LEFT"], [4, "RIGHT"]], 1), PT = jr(Rr.proto3, ET, "KeyStroke", [[0, "UNSPECIFIED"], [1, "TAP"], [2, "DOWN"], [3, "UP"]], 1), IT = jr(Rr.proto3, ET, "ComputerUseSettleOutcome", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "FIXED"], [3, "STABLE"], [4, "CAP"], [5, "CAPTURE_FAILED"]], 1);
    class CT extends xT {
      constructor(e3) {
        super(), this.x = 0, this.y = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CT, e3, t3);
      }
      static $() {
        return ["Coordinate|1 x 5|2 y 5"];
      }
    }
    class AT extends xT {
      constructor(e3) {
        super(), this.toolCallId = "", this.actions = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AT, e3, t3);
      }
      static $() {
        return ["ComputerUseArgs|1 tool_call_id 9|2 actions #0*|3 description 9?|4 bind_unmapped_characters 8?|5 desktop_lease_actor_id 9?|6 screenshot_settle_ms 5?|8 settle_until_stable 8?", $T];
      }
    }
    class $T extends xT {
      constructor(e3) {
        super(), this.action = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $T().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $T().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $T().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($T, e3, t3);
      }
      static $() {
        return ["ComputerUseAction|1 mouse_move #0 action|2 click #1 action|3 mouse_down #2 action|4 mouse_up #3 action|5 drag #4 action|6 scroll #5 action|7 type #6 action|8 key #7 action|9 wait #8 action|10 screenshot #9 action|11 cursor_position #10 action", RT, NT, MT, JT, jT, DT, FT, qT, zT, UT, BT];
      }
    }
    class RT extends xT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new RT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new RT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new RT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(RT, e3, t3);
      }
      static $() {
        return ["MouseMoveAction|1 coordinate #0", CT];
      }
    }
    class NT extends xT {
      constructor(e3) {
        super(), this.button = TT.UNSPECIFIED, this.count = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new NT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new NT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new NT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(NT, e3, t3);
      }
      static $() {
        return ["ClickAction|1 coordinate #0?|2 button #1|3 count 5|4 modifier_keys 9?", CT, TT];
      }
    }
    class MT extends xT {
      constructor(e3) {
        super(), this.button = TT.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new MT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new MT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new MT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(MT, e3, t3);
      }
      static $() {
        return ["MouseDownAction|1 button #0", TT];
      }
    }
    class JT extends xT {
      constructor(e3) {
        super(), this.button = TT.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new JT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new JT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new JT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(JT, e3, t3);
      }
      static $() {
        return ["MouseUpAction|1 button #0", TT];
      }
    }
    class jT extends xT {
      constructor(e3) {
        super(), this.path = [], this.button = TT.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jT, e3, t3);
      }
      static $() {
        return ["DragAction|1 path #0*|2 button #1|3 modifier_keys 9?", CT, TT];
      }
    }
    class DT extends xT {
      constructor(e3) {
        super(), this.direction = OT.UNSPECIFIED, this.amount = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new DT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new DT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new DT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(DT, e3, t3);
      }
      static $() {
        return ["ScrollAction|1 coordinate #0?|2 direction #1|3 amount 5|4 modifier_keys 9?", CT, OT];
      }
    }
    class FT extends xT {
      constructor(e3) {
        super(), this.text = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new FT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new FT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new FT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(FT, e3, t3);
      }
      static $() {
        return ["TypeAction|1 text 9"];
      }
    }
    class qT extends xT {
      constructor(e3) {
        super(), this.key = "", this.stroke = PT.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qT, e3, t3);
      }
      static $() {
        return ["KeyAction|1 key 9|2 hold_duration_ms 5?|3 stroke #0", PT];
      }
    }
    class zT extends xT {
      constructor(e3) {
        super(), this.durationMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zT, e3, t3);
      }
      static $() {
        return ["WaitAction|1 duration_ms 5"];
      }
    }
    class UT extends xT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new UT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new UT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new UT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(UT, e3, t3);
      }
      static $() {
        return ["ScreenshotAction"];
      }
    }
    class BT extends xT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new BT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new BT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new BT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(BT, e3, t3);
      }
      static $() {
        return ["CursorPositionAction"];
      }
    }
    class LT extends xT {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new LT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new LT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new LT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(LT, e3, t3);
      }
      static $() {
        return ["ComputerUseResult|1 success #0 result|2 error #1 result", VT, KT];
      }
    }
    class VT extends xT {
      constructor(e3) {
        super(), this.actionCount = 0, this.durationMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new VT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new VT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new VT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(VT, e3, t3);
      }
      static $() {
        return ["ComputerUseSuccess|1 action_count 5|2 duration_ms 5|3 screenshot 9?|4 log 9?|5 screenshot_path 9?|6 cursor_position #0?|7 settle_ms 5?|8 settle_outcome #1?", CT, IT];
      }
    }
    class KT extends xT {
      constructor(e3) {
        super(), this.error = "", this.actionCount = 0, this.durationMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new KT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new KT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new KT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(KT, e3, t3);
      }
      static $() {
        return ["ComputerUseError|1 error 9|2 action_count 5|3 duration_ms 5|4 log 9?|5 screenshot 9?|6 screenshot_path 9?"];
      }
    }
    class ZT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class WT extends ZT {
      constructor(e3) {
        super(), this.apiKey = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new WT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new WT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new WT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(WT, e3, t3);
      }
      static $() {
        return ["ApiKeyCredentials|1 api_key 9|2 base_url 9?"];
      }
    }
    class HT extends ZT {
      constructor(e3) {
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new HT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new HT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new HT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(HT, e3, t3);
      }
      static $() {
        return ["AzureCredentials|1 api_key 9|2 base_url 9|3 deployment 9"];
      }
    }
    class YT extends ZT {
      constructor(e3) {
        super(), this.accessKey = "", this.secretKey = "", this.region = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new YT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new YT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new YT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(YT, e3, t3);
      }
      static $() {
        return ["BedrockCredentials|1 access_key 9|2 secret_key 9|3 region 9|4 session_token 9?"];
      }
    }
    class GT extends ZT {
      constructor(e3) {
        super(), this.id = "", this.value = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GT().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GT().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GT().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GT, e3, t3);
      }
      static $() {
        return ["RequestedModel.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
    const XT = "agent.v1.";
    class QT extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return XT;
      }
    }
    var eO = jr(Rr.proto3, XT, "SelectedPluginCapabilityType", [[0, "UNSPECIFIED"], [1, "COMMAND"], [2, "SKILL"], [3, "SUBAGENT"]], 1);
    class tO extends QT {
      constructor(e3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.path = "", this.mimeType = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tO, e3, t3);
      }
      static $() {
        return ["SelectedImage|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|10 prompt_upload_ref #1 data_or_blob_id|2 uuid 9|3 path 9|4 dimension #2|7 mime_type 9", rO, oO, nO];
      }
    }
    class rO extends QT {
      constructor(e3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new rO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new rO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new rO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(rO, e3, t3);
      }
      static $() {
        return ["SelectedImage.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class nO extends QT {
      constructor(e3) {
        super(), this.width = 0, this.height = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nO, e3, t3);
      }
      static $() {
        return ["SelectedImage.Dimension|1 width 5|2 height 5"];
      }
    }
    class oO extends QT {
      constructor(e3) {
        super(), this.uploadId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oO, e3, t3);
      }
      static $() {
        return ["PromptUploadRef|1 upload_id 9"];
      }
    }
    class sO extends QT {
      constructor(e3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.filename = "", this.mimeType = "", this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sO, e3, t3);
      }
      static $() {
        return ["SelectedDocument|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|10 prompt_upload_ref #1 data_or_blob_id|2 uuid 9|3 filename 9|4 mime_type 9|7 path 9", iO, oO];
      }
    }
    class iO extends QT {
      constructor(e3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iO, e3, t3);
      }
      static $() {
        return ["SelectedDocument.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class aO extends QT {
      constructor(e3) {
        super(), this.dataOrBlobId = { case: void 0 }, this.uuid = "", this.path = "", this.mimeType = "", this.filename = "", this.materializeToFilesystem = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aO, e3, t3);
      }
      static $() {
        return ["SelectedVideo|1 blob_id 12 data_or_blob_id|8 data 12 data_or_blob_id|9 blob_id_with_data #0 data_or_blob_id|11 signed_url #1 data_or_blob_id|2 uuid 9|3 path 9|4 fps 2?|7 mime_type 9|10 filename 9|12 materialize_to_filesystem 8", cO, uO];
      }
    }
    class cO extends QT {
      constructor(e3) {
        super(), this.blobId = new Uint8Array(0), this.data = new Uint8Array(0), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cO, e3, t3);
      }
      static $() {
        return ["SelectedVideo.BlobIdWithData|1 blob_id 12|2 data 12"];
      }
    }
    class uO extends QT {
      constructor(e3) {
        super(), this.url = "", this.key = "", this.expiresAtUnixMs = Rr.protoInt64.zero, this.refreshAfterUnixMs = Rr.protoInt64.zero, this.conversationId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uO, e3, t3);
      }
      static $() {
        return ["SelectedVideo.SignedUrl|1 url 9|2 key 9|3 expires_at_unix_ms 3|4 refresh_after_unix_ms 3|5 conversation_id 9"];
      }
    }
    class lO extends QT {
      constructor(e3) {
        super(), this.dataOrBlobId = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lO, e3, t3);
      }
      static $() {
        return ["ExtraContextEntry|1 data 9 data_or_blob_id|2 blob_id 12 data_or_blob_id"];
      }
    }
    class dO extends QT {
      constructor(e3) {
        super(), this.content = "", this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dO, e3, t3);
      }
      static $() {
        return ["SelectedFile|1 content 9|2 path 9|3 relative_path 9?"];
      }
    }
    class pO extends QT {
      constructor(e3) {
        super(), this.content = "", this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pO, e3, t3);
      }
      static $() {
        return ["SelectedCodeSelection|1 content 9|2 path 9|3 relative_path 9?|4 range #0", IS];
      }
    }
    class fO extends QT {
      constructor(e3) {
        super(), this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fO, e3, t3);
      }
      static $() {
        return ["SelectedTerminal|1 content 9|2 title 9?|3 path 9?"];
      }
    }
    class hO extends QT {
      constructor(e3) {
        super(), this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hO, e3, t3);
      }
      static $() {
        return ["SelectedTerminalSelection|1 content 9|2 title 9?|3 path 9?|4 range #0", IS];
      }
    }
    class mO extends QT {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mO, e3, t3);
      }
      static $() {
        return ["SelectedFolder|1 path 9|2 relative_path 9?|3 directory_tree #0", iE];
      }
    }
    class gO extends QT {
      constructor(e3) {
        super(), this.url = "", this.uuid = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gO, e3, t3);
      }
      static $() {
        return ["SelectedExternalLink|1 url 9|2 uuid 9|3 pdf_content 9?|4 is_pdf 8?|5 filename 9?|6 blob_id 12?"];
      }
    }
    class yO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new yO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new yO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new yO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(yO, e3, t3);
      }
      static $() {
        return ["SelectedCursorRule|1 rule #0", NE];
      }
    }
    class _O extends QT {
      constructor(e3) {
        super(), this.content = "", this.fullContentLengthCharCount = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _O().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _O().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _O().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(_O, e3, t3);
      }
      static $() {
        return ["SelectedGitDiff|1 content 9|2 full_content_length_char_count 5"];
      }
    }
    class vO extends QT {
      constructor(e3) {
        super(), this.content = "", this.fullContentLengthCharCount = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vO, e3, t3);
      }
      static $() {
        return ["SelectedGitDiffFromBranchToMain|1 content 9|2 full_content_length_char_count 5"];
      }
    }
    class wO extends QT {
      constructor(e3) {
        super(), this.sha = "", this.message = "", this.diff = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wO, e3, t3);
      }
      static $() {
        return ["SelectedGitCommit|1 sha 9|2 message 9|3 description 9?|4 diff 9"];
      }
    }
    class bO extends QT {
      constructor(e3) {
        super(), this.number = 0, this.url = "", this.folderPath = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bO, e3, t3);
      }
      static $() {
        return ["SelectedPullRequest|1 number 5|2 url 9|3 title 9?|4 folder_path 9|5 summary_json 9?|6 description 9?|7 blob_id 12?"];
      }
    }
    class SO extends QT {
      constructor(e3) {
        super(), this.prUrl = "", this.filePath = "", this.startLine = 0, this.endLine = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new SO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new SO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new SO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(SO, e3, t3);
      }
      static $() {
        return ["SelectedGitPRDiffSelection|1 pr_url 9|2 file_path 9|3 start_line 5|4 end_line 5|5 diff_content 9?|6 blob_id 12?"];
      }
    }
    class kO extends QT {
      constructor(e3) {
        super(), this.pluginId = "", this.capabilityType = eO.UNSPECIFIED, this.sourcePath = "", this.snapshotToken = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kO, e3, t3);
      }
      static $() {
        return ["SelectedPluginCapabilityRef|1 plugin_id 9|2 capability_type #0|3 source_path 9|4 snapshot_token 9|5 resolved_commit_sha 9?", eO];
      }
    }
    class EO extends QT {
      constructor(e3) {
        super(), this.name = "", this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new EO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new EO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new EO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(EO, e3, t3);
      }
      static $() {
        return ["SelectedCursorCommand|1 name 9|2 content 9|3 plugin_capability #0?|4 full_path 9?|5 display_name 9?", kO];
      }
    }
    class xO extends QT {
      constructor(e3) {
        super(), this.docId = "", this.name = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xO, e3, t3);
      }
      static $() {
        return ["SelectedDocumentation|1 doc_id 9|2 name 9"];
      }
    }
    class TO extends QT {
      constructor(e3) {
        super(), this.agentId = "", this.name = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new TO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new TO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new TO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(TO, e3, t3);
      }
      static $() {
        return ["SelectedPastChat|1 agent_id 9|2 name 9"];
      }
    }
    class OO extends QT {
      constructor(e3) {
        super(), this.name = "", this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new OO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new OO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new OO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(OO, e3, t3);
      }
      static $() {
        return ["RecentAgent|1 name 9|2 path 9|3 overview 9?"];
      }
    }
    class PO extends QT {
      constructor(e3) {
        super(), this.recentAgents = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new PO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new PO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new PO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(PO, e3, t3);
      }
      static $() {
        return ["RecentAgentsContext|1 recent_agents #0*", OO];
      }
    }
    class IO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new IO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new IO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new IO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(IO, e3, t3);
      }
      static $() {
        return ["CallFrame|1 function_name 9?|2 url 9?|3 line_number 5?|4 column_number 5?"];
      }
    }
    class CO extends QT {
      constructor(e3) {
        super(), this.callFrames = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CO, e3, t3);
      }
      static $() {
        return ["StackTrace|1 call_frames #0*|2 raw_stack_trace 9?", IO];
      }
    }
    class AO extends QT {
      constructor(e3) {
        super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AO, e3, t3);
      }
      static $() {
        return ["SelectedConsoleLog|1 message 9|2 timestamp 1|3 level 9|4 client_name 9|5 session_id 9|6 stack_trace #0?|7 object_data_json 9?", CO];
      }
    }
    class $O extends QT {
      constructor(e3) {
        super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $O().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $O().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $O().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($O, e3, t3);
      }
      static $() {
        return ["SelectedUIElement|1 element 9|2 xpath 9|3 text_content 9|4 extra 9|5 component 9?|6 component_props_json 9?"];
      }
    }
    class RO extends QT {
      constructor(e3) {
        super(), this.name = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new RO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new RO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new RO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(RO, e3, t3);
      }
      static $() {
        return ["SelectedSubagent|1 name 9"];
      }
    }
    class NO extends QT {
      constructor(e3) {
        super(), this.browserId = "", this.url = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new NO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new NO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new NO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(NO, e3, t3);
      }
      static $() {
        return ["SelectedBrowser|1 browser_id 9|2 url 9|3 page_title 9?"];
      }
    }
    class MO extends QT {
      constructor(e3) {
        super(), this.filesToCommit = [], this.filesToExcludeFromCommit = [], this.shouldStageAllChanges = false, this.filesToCommitWithStatus = [], this.filesToExcludeFromCommitWithStatus = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new MO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new MO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new MO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(MO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionCommitParams|1 files_to_commit 9*|2 files_to_exclude_from_commit 9*|3 should_stage_all_changes 8|4 create_pr_draft 8?|5 files_to_commit_with_status #0*|6 files_to_exclude_from_commit_with_status #0*", jO];
      }
    }
    class JO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new JO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new JO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new JO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(JO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionCreateBranchParams"];
      }
    }
    class jO extends QT {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitFileWithStatus|1 path 9|2 status 9?"];
      }
    }
    class DO extends QT {
      constructor(e3) {
        super(), this.filesToPush = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new DO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new DO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new DO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(DO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionPushParams|1 files_to_push 9*|2 create_pr_draft 8?"];
      }
    }
    class FO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new FO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new FO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new FO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(FO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionFixMergeConflictsParams|1 base_branch 9?|2 pr_url 9?"];
      }
    }
    class qO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionBabysitPrInCloudParams|1 base_branch 9?"];
      }
    }
    class zO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionUpdateBranchParams|1 base_branch 9?"];
      }
    }
    class UO extends QT {
      constructor(e3) {
        super(), this.remoteBranch = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new UO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new UO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new UO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(UO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitActionPullLocallyParams|1 remote_branch 9"];
      }
    }
    class BO extends QT {
      constructor(e3) {
        super(), this.params = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new BO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new BO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new BO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(BO, e3, t3);
      }
      static $() {
        return ["SelectedAgenticGitAction|2 commit_params #0 params|6 commit_and_push_params #0 params|3 push_params #1 params|7 create_pr_params #1 params|8 create_pr_with_changes_params #0 params|4 fix_merge_conflicts_params #2 params|11 babysit_pr_in_cloud_params #3 params|14 apply_locally_params #4 params|15 checkout_branch_params #4 params|12 create_branch_and_commit_params #0 params|13 create_branch_commit_and_push_params #0 params|16 update_branch_params #5 params|17 create_branch_params #6 params|5 branch_context #7?|9 path_to_template_file 9?|10 path_to_template_dir 9?", MO, DO, FO, qO, UO, zO, JO, LO];
      }
    }
    class LO extends QT {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new LO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new LO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new LO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(LO, e3, t3);
      }
      static $() {
        return ["SelectedGitBranchContext|1 current_branch 9?|2 base_branch 9?|3 agent_branch_prefix 9?"];
      }
    }
    class VO extends QT {
      constructor(e3) {
        super(), this.selectedImages = [], this.extraContext = [], this.extraContextEntries = [], this.files = [], this.codeSelections = [], this.terminals = [], this.terminalSelections = [], this.folders = [], this.externalLinks = [], this.cursorRules = [], this.cursorCommands = [], this.documentations = [], this.uiElements = [], this.consoleLogs = [], this.gitCommits = [], this.pastChats = [], this.gitPrDiffSelections = [], this.selectedPullRequests = [], this.selectedSubagents = [], this.selectedVideos = [], this.selectedBrowsers = [], this.selectedDocuments = [], this.selectedSkills = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new VO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new VO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new VO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(VO, e3, t3);
      }
      static $() {
        return ["SelectedContext|1 selected_images #0*|2 invocation_context #1?|3 extra_context 9*|16 extra_context_entries #2*|4 files #3*|5 code_selections #4*|6 terminals #5*|7 terminal_selections #6*|8 folders #7*|9 external_links #8*|10 cursor_rules #9*|18 git_diff #10?|11 git_diff_from_branch_to_main #11?|12 cursor_commands #12*|13 documentations #13*|14 ui_elements #14*|15 console_logs #15*|17 git_commits #16*|19 past_chats #17*|20 git_pr_diff_selections #18*|21 selected_pull_requests #19*|22 selected_subagents #20*|23 selected_videos #21*|24 selected_browsers #22*|25 selected_documents #23*|26 selected_skills #24*|27 recent_agents_context #25?|34 selected_agentic_git_action #26?", tO, KO, lO, dO, pO, fO, hO, mO, gO, yO, _O, vO, EO, xO, $O, AO, wO, TO, SO, bO, RO, aO, NO, sO, VE, PO, BO];
      }
    }
    class KO extends QT {
      constructor(e3) {
        super(), this.data = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new KO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new KO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new KO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(KO, e3, t3);
      }
      static $() {
        return ["InvocationContext|1 slack_thread #0 data|2 github_pr #1 data|3 ide_state #2 data|4 microsoft_teams_thread #3 data|10 blob_id 12 data", ZO, HO, YO, WO];
      }
    }
    class ZO extends QT {
      constructor(e3) {
        super(), this.thread = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ZO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ZO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ZO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ZO, e3, t3);
      }
      static $() {
        return ["InvocationContext.SlackThread|1 thread 9|2 channel_name 9?|3 channel_purpose 9?|4 channel_topic 9?|5 sender_name 9?|6 sender_id 9?|7 sender_type 9?|8 is_directly_addressed 8?"];
      }
    }
    class WO extends QT {
      constructor(e3) {
        super(), this.thread = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new WO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new WO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new WO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(WO, e3, t3);
      }
      static $() {
        return ["InvocationContext.MicrosoftTeamsThread|1 thread 9|2 channel_name 9?|3 team_name 9?|4 channel_description 9?|5 team_description 9?"];
      }
    }
    class HO extends QT {
      constructor(e3) {
        super(), this.title = "", this.description = "", this.comments = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new HO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new HO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new HO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(HO, e3, t3);
      }
      static $() {
        return ["InvocationContext.GithubPR|1 title 9|2 description 9|3 comments 9|4 ci_failures 9?"];
      }
    }
    class YO extends QT {
      constructor(e3) {
        super(), this.visibleFiles = [], this.recentlyViewedFiles = [], this.currentlyViewedPrs = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new YO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new YO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new YO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(YO, e3, t3);
      }
      static $() {
        return ["InvocationContext.IdeState|1 visible_files #0*|2 recently_viewed_files #0*|3 currently_viewed_prs #1*", GO, QO];
      }
    }
    class GO extends QT {
      constructor(e3) {
        super(), this.path = "", this.totalLines = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GO, e3, t3);
      }
      static $() {
        return ["InvocationContext.IdeState.File|1 path 9|2 relative_path 9?|3 cursor_position #0?|4 total_lines 5|5 active_command 9?", XO];
      }
    }
    class XO extends QT {
      constructor(e3) {
        super(), this.line = 0, this.text = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new XO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new XO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new XO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(XO, e3, t3);
      }
      static $() {
        return ["InvocationContext.IdeState.File.CursorPosition|1 line 5|2 text 9"];
      }
    }
    class QO extends QT {
      constructor(e3) {
        super(), this.number = 0, this.url = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new QO().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new QO().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new QO().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(QO, e3, t3);
      }
      static $() {
        return ["InvocationContext.IdeState.ViewedPullRequest|1 number 5|2 url 9|3 title 9?|4 folder_path 9?|5 summary_json 9?|6 description 9?"];
      }
    }
    const eP = "agent.v1.";
    class tP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return eP;
      }
    }
    var rP = jr(Rr.proto3, eP, "ForceBackgroundSubagentStatus", [[0, "UNSPECIFIED"], [1, "ACCEPTED"], [2, "NOT_FOUND"]], 1);
    class nP extends tP {
      constructor(e3) {
        super(), this.toolCallId = "", this.subagentType = "", this.modelId = "", this.prompt = "", this.readonly = false, this.credentials = { case: void 0 }, this.mode = UE.UNSPECIFIED, this.environment = qE.UNSPECIFIED, this.modelParameters = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nP, e3, t3);
      }
      static $() {
        return ["SubagentArgs|1 tool_call_id 9|2 subagent_type 9|3 model_id 9|4 prompt 9|5 readonly 8|6 resume_agent_id 9?|7 run_in_background 8?|8 continuation_config #0|9 parent_conversation_id 9?|10 api_key_credentials #1 credentials|11 azure_credentials #2 credentials|12 bedrock_credentials #3 credentials|13 interrupt 8?|14 mode #4|15 fork_agent_id 9?|16 root_parent_conversation_id 9?|17 selected_context #5?|18 direct_meta_parent_child_subagent 8?|19 environment #6|20 cloud_base_branch 9?|21 model_parameters #7*", oP, WT, HT, YT, UE, VO, qE, GT];
      }
    }
    class oP extends tP {
      constructor(e3) {
        super(), this.idleThreshold = 0, this.maxLoops = 0, this.nudgeMessage = "", this.escapeMessageTemplate = "", this.collectBackgroundChildren = false, this.childrenCompletedMessageTemplate = "", this.continuationRoundDelayMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oP, e3, t3);
      }
      static $() {
        return ["ClientContinuationConfig|1 idle_threshold 5|2 max_loops 5|3 nudge_message 9|4 escape_message_template 9|5 collect_background_children 8|6 children_completed_message_template 9|7 continuation_round_delay_ms 5"];
      }
    }
    class sP extends tP {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sP, e3, t3);
      }
      static $() {
        return ["SubagentResult|1 success #0 result|2 error #1 result", pP, fP];
      }
    }
    class iP extends tP {
      constructor(e3) {
        super(), this.agentId = "", this.timeoutMs = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitArgs|1 agent_id 9|2 timeout_ms 13"];
      }
    }
    class aP extends tP {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitResult|1 complete #0 result|2 still_running #1 result|3 not_found #2 result|4 error #3 result", cP, uP, lP, dP];
      }
    }
    class cP extends tP {
      constructor(e3) {
        super(), this.agentId = "", this.toolCallCount = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitComplete|1 agent_id 9|2 transcript_path 9?|3 tool_call_count 5|4 final_message 9?"];
      }
    }
    class uP extends tP {
      constructor(e3) {
        super(), this.agentId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitStillRunning|1 agent_id 9|2 transcript_path 9?"];
      }
    }
    class lP extends tP {
      constructor(e3) {
        super(), this.agentId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitNotFound|1 agent_id 9"];
      }
    }
    class dP extends tP {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dP, e3, t3);
      }
      static $() {
        return ["SubagentAwaitError|1 agent_id 9?|2 error 9"];
      }
    }
    class pP extends tP {
      constructor(e3) {
        super(), this.agentId = "", this.toolCallCount = 0, this.backgroundReason = zE.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pP, e3, t3);
      }
      static $() {
        return ["SubagentSuccess|1 agent_id 9|2 final_message 9?|3 tool_call_count 5|4 background_reason #0|5 transcript_path 9?", zE];
      }
    }
    class fP extends tP {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fP, e3, t3);
      }
      static $() {
        return ["SubagentError|1 agent_id 9?|2 error 9"];
      }
    }
    class hP extends tP {
      constructor(e3) {
        super(), this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hP, e3, t3);
      }
      static $() {
        return ["ForceBackgroundSubagentArgs|1 tool_call_id 9"];
      }
    }
    class mP extends tP {
      constructor(e3) {
        super(), this.status = rP.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mP, e3, t3);
      }
      static $() {
        return ["ForceBackgroundSubagentResult|1 status #0", rP];
      }
    }
    const gP = "agent.v1.";
    class yP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return gP;
      }
    }
    var _P = jr(Rr.proto3, gP, "SmartModeClassifierDecision", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "BLOCK"]], 1), vP = jr(Rr.proto3, gP, "SmartModeClassifierRuleEffect", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "ASK_FIRST"]], 1), wP = jr(Rr.proto3, gP, "SmartModeClassifierRuleSource", [[0, "UNSPECIFIED"], [1, "CUSTOM_RULE"], [2, "TEAM_RULE"]], 1);
    class bP extends yP {
      constructor(e3) {
        super(), this.role = "", this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierConversationMessage|1 role 9|2 content 9"];
      }
    }
    class SP extends yP {
      constructor(e3) {
        super(), this.toolCallId = "", this.conversationContext = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new SP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new SP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new SP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(SP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*", kP, bP];
      }
    }
    class kP extends yP {
      constructor(e3) {
        super(), this.action = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kP, e3, t3);
      }
      static $() {
        return ["SmartModeRiskTarget|1 action 9|2 arguments #0", Rr.Struct];
      }
    }
    class EP extends yP {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new EP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new EP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new EP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(EP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierResult|1 success #0 result|2 error #1 result", xP, OP];
      }
    }
    class xP extends yP {
      constructor(e3) {
        super(), this.decision = _P.UNSPECIFIED, this.appliedRules = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*", _P, TP];
      }
    }
    class TP extends yP {
      constructor(e3) {
        super(), this.effect = vP.UNSPECIFIED, this.text = "", this.source = wP.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new TP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new TP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new TP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(TP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1", vP, wP];
      }
    }
    class OP extends yP {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new OP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new OP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new OP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(OP, e3, t3);
      }
      static $() {
        return ["SmartModeClassifierError|1 error 9"];
      }
    }
    class PP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class IP extends PP {
      constructor(e3) {
        super(), this.path = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new IP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new IP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new IP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(IP, e3, t3);
      }
      static $() {
        return ["CanvasDiagnosticsArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class CP extends PP {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CP, e3, t3);
      }
      static $() {
        return ["CanvasDiagnosticsResult|1 success #0 result|2 error #1 result|3 canvas_id 9?|4 title 9?|5 save_state 9?|6 save_detail 9?", AP, $P];
      }
    }
    class AP extends PP {
      constructor(e3) {
        super(), this.path = "", this.diagnostics = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AP, e3, t3);
      }
      static $() {
        return ["CanvasDiagnosticsSuccess|1 path 9|2 diagnostics #0*", vE];
      }
    }
    class $P extends PP {
      constructor(e3) {
        super(), this.path = "", this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $P().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $P().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $P().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($P, e3, t3);
      }
      static $() {
        return ["CanvasDiagnosticsError|1 path 9|2 error 9"];
      }
    }
    class RP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class NP extends RP {
      constructor(e3) {
        super(), this.command = "", this.workingDirectory = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new NP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new NP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new NP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(NP, e3, t3);
      }
      static $() {
        return ["ShellAllowlistPrecheckArgs|1 command 9|2 working_directory 9|3 parsing_result #0|4 classifier_result #1?|5 tool_call_id 9?", zS, VS];
      }
    }
    class MP extends RP {
      constructor(e3) {
        super(), this.allowlisted = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new MP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new MP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new MP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(MP, e3, t3);
      }
      static $() {
        return ["ShellAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    class JP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class jP extends JP {
      constructor(e3) {
        super(), this.providerIdentifier = "", this.toolName = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jP, e3, t3);
      }
      static $() {
        return ["McpAllowlistPrecheckArgs|1 provider_identifier 9|2 tool_name 9|3 tool_call_id 9?|4 annotations_json 9?"];
      }
    }
    class DP extends JP {
      constructor(e3) {
        super(), this.allowlisted = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new DP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new DP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new DP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(DP, e3, t3);
      }
      static $() {
        return ["McpAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    class FP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class qP extends FP {
      constructor(e3) {
        super(), this.url = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new qP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new qP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new qP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(qP, e3, t3);
      }
      static $() {
        return ["WebFetchAllowlistPrecheckArgs|1 url 9|2 tool_call_id 9?"];
      }
    }
    class zP extends FP {
      constructor(e3) {
        super(), this.allowlisted = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new zP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new zP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new zP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(zP, e3, t3);
      }
      static $() {
        return ["WebFetchAllowlistPrecheckResult|1 allowlisted 8"];
      }
    }
    const UP = "aiserver.v1.";
    class BP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return UP;
      }
    }
    Rr.proto3;
    class LP extends BP {
      constructor(e3) {
        super(), this.cwd = "", this.ref = "", this.baseRef = "", this.mergeBase = false, this.targetPaths = [], this.maxUntrackedFiles = 0, this.submoduleRecurseDepth = 0, this.includeSpaceChanges = false, this.committedOnly = false, this.computePatchId = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new LP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new LP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new LP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(LP, e3, t3);
      }
      static $() {
        return ["GetDiffRequest|1 cwd 9|2 ref 9|3 base_ref 9|4 merge_base 8|5 target_paths 9*|6 unified_context_lines 5?|7 max_untracked_files 5|9 submodule_recurse_depth 5|10 include_space_changes 8|11 committed_only 8|12 compute_patch_id 8|13 return_head_sha 8?|14 max_response_bytes 5?|15 max_files_with_contents 13?|16 max_content_bytes 13?|8 output_format #0?", VP];
      }
    }
    var VP = jr(Rr.proto3, UP, "GetDiffRequest.OutputFormat", [[0, "UNSPECIFIED"], [1, "NAME_STATUS"], [2, "NAME_STATUS_AND_NUMSTAT"], [3, "FILE_DIFFS"], [4, "DIFFS_WITH_BEFORE_AND_AFTER"]], 1);
    class KP extends BP {
      constructor(e3) {
        super(), this.submoduleDiffs = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new KP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new KP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new KP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(KP, e3, t3);
      }
      static $() {
        return ["GetDiffResponse|1 diff #0|2 submodule_diffs #1*|3 patch_id 9?|4 head_sha 9?|5 has_uncommitted_changes 8?", WP, ZP];
      }
    }
    class ZP extends BP {
      constructor(e3) {
        super(), this.relativePath = "", this.errored = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new ZP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new ZP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new ZP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(ZP, e3, t3);
      }
      static $() {
        return ["GetDiffResponse.SubmoduleDiff|1 relative_path 9|2 diff #0|3 errored 8", WP];
      }
    }
    class WP extends BP {
      constructor(e3) {
        super(), this.diffs = [], this.diffType = HP.UNSPECIFIED, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new WP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new WP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new WP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(WP, e3, t3);
      }
      static $() {
        return ["GitDiff|1 diffs #0*|2 diff_type #1|3 file_contents_omitted 8?", YP, HP];
      }
    }
    var HP = jr(Rr.proto3, UP, "GitDiff.DiffType", [[0, "UNSPECIFIED"], [1, "DIFF_TO_HEAD"], [2, "DIFF_FROM_BRANCH_TO_MAIN"]], 1);
    class YP extends BP {
      constructor(e3) {
        super(), this.added = 0, this.removed = 0, this.from = "", this.to = "", this.chunks = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new YP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new YP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new YP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(YP, e3, t3);
      }
      static $() {
        return ["FileDiff|4 added 5|5 removed 5|1 from 9|2 to 9|3 chunks #0*|6 before_file_contents 9?|7 after_file_contents 9?|8 is_generated 8?|9 old_mode 9?|10 new_mode 9?", GP];
      }
    }
    class GP extends BP {
      constructor(e3) {
        super(), this.content = "", this.lines = [], this.oldStart = 0, this.oldLines = 0, this.newStart = 0, this.newLines = 0, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GP, e3, t3);
      }
      static $() {
        return ["FileDiff.Chunk|1 content 9|2 lines 9*|3 old_start 5|4 old_lines 5|5 new_start 5|6 new_lines 5"];
      }
    }
    Rr.proto3;
    Rr.proto3;
    Rr.proto3;
    Rr.proto3;
    Rr.proto3, Rr.proto3;
    class XP extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class QP extends XP {
      constructor(e3) {
        super(), this.truncated = false, this.truncatedBy = "", this.totalLines = 0, this.outputLines = 0, this.outputBytes = 0, this.firstLineExceedsLimit = false, this.lastLinePartial = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new QP().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new QP().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new QP().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(QP, e3, t3);
      }
      static $() {
        return ["PiTruncation|1 truncated 8|2 truncated_by 9|3 total_lines 13|4 output_lines 13|5 output_bytes 13|6 max_lines 13?|7 max_bytes 13?|8 first_line_exceeds_limit 8|9 last_line_partial 8"];
      }
    }
    class eI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class tI extends eI {
      constructor(e3) {
        super(), this.path = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tI, e3, t3);
      }
      static $() {
        return ["PiReadExecArgs|1 path 9|2 offset 5?|3 limit 5?"];
      }
    }
    class rI extends eI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new rI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new rI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new rI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(rI, e3, t3);
      }
      static $() {
        return ["PiReadExecResult|1 success #0 result|2 error #1 result", nI, oI];
      }
    }
    class nI extends eI {
      constructor(e3) {
        super(), this.output = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nI, e3, t3);
      }
      static $() {
        return ["PiReadExecSuccess|1 output 9|2 truncation #0?", QP];
      }
    }
    class oI extends eI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oI, e3, t3);
      }
      static $() {
        return ["PiReadExecError|1 error 9"];
      }
    }
    class sI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class iI extends sI {
      constructor(e3) {
        super(), this.command = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iI, e3, t3);
      }
      static $() {
        return ["PiBashExecArgs|1 command 9|2 timeout 1?"];
      }
    }
    class aI extends sI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aI, e3, t3);
      }
      static $() {
        return ["PiBashExecResult|1 success #0 result|2 error #1 result", cI, uI];
      }
    }
    class cI extends sI {
      constructor(e3) {
        super(), this.output = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cI, e3, t3);
      }
      static $() {
        return ["PiBashExecSuccess|1 output 9|2 truncation #0?|3 full_output_path 9?", QP];
      }
    }
    class uI extends sI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uI, e3, t3);
      }
      static $() {
        return ["PiBashExecError|1 error 9|2 truncation #0?|3 full_output_path 9?", QP];
      }
    }
    class lI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class dI extends lI {
      constructor(e3) {
        super(), this.oldText = "", this.newText = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dI, e3, t3);
      }
      static $() {
        return ["PiEditReplacement|1 old_text 9|2 new_text 9"];
      }
    }
    class pI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class fI extends pI {
      constructor(e3) {
        super(), this.path = "", this.edits = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fI, e3, t3);
      }
      static $() {
        return ["PiEditExecArgs|1 path 9|2 edits #0*", dI];
      }
    }
    class hI extends pI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hI, e3, t3);
      }
      static $() {
        return ["PiEditExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", mI, gI, yI];
      }
    }
    class mI extends pI {
      constructor(e3) {
        super(), this.output = "", this.diff = "", this.patch = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mI, e3, t3);
      }
      static $() {
        return ["PiEditExecSuccess|1 output 9|2 diff 9|3 patch 9|4 first_changed_line 13?"];
      }
    }
    class gI extends pI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gI, e3, t3);
      }
      static $() {
        return ["PiEditExecError|1 error 9"];
      }
    }
    class yI extends pI {
      constructor(e3) {
        super(), this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new yI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new yI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new yI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(yI, e3, t3);
      }
      static $() {
        return ["PiEditExecRejected|1 reason 9"];
      }
    }
    class _I extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class vI extends _I {
      constructor(e3) {
        super(), this.path = "", this.content = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vI, e3, t3);
      }
      static $() {
        return ["PiWriteExecArgs|1 path 9|2 content 9"];
      }
    }
    class wI extends _I {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wI, e3, t3);
      }
      static $() {
        return ["PiWriteExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result", bI, SI, kI];
      }
    }
    class bI extends _I {
      constructor(e3) {
        super(), this.output = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bI, e3, t3);
      }
      static $() {
        return ["PiWriteExecSuccess|1 output 9"];
      }
    }
    class SI extends _I {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new SI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new SI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new SI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(SI, e3, t3);
      }
      static $() {
        return ["PiWriteExecError|1 error 9"];
      }
    }
    class kI extends _I {
      constructor(e3) {
        super(), this.reason = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kI, e3, t3);
      }
      static $() {
        return ["PiWriteExecRejected|1 reason 9"];
      }
    }
    class EI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class xI extends EI {
      constructor(e3) {
        super(), this.pattern = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xI, e3, t3);
      }
      static $() {
        return ["PiGrepExecArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"];
      }
    }
    class TI extends EI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new TI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new TI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new TI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(TI, e3, t3);
      }
      static $() {
        return ["PiGrepExecResult|1 success #0 result|2 error #1 result", OI, PI];
      }
    }
    class OI extends EI {
      constructor(e3) {
        super(), this.output = "", this.linesTruncated = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new OI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new OI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new OI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(OI, e3, t3);
      }
      static $() {
        return ["PiGrepExecSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8", QP];
      }
    }
    class PI extends EI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new PI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new PI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new PI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(PI, e3, t3);
      }
      static $() {
        return ["PiGrepExecError|1 error 9"];
      }
    }
    class II extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class CI extends II {
      constructor(e3) {
        super(), this.pattern = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new CI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new CI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new CI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(CI, e3, t3);
      }
      static $() {
        return ["PiFindExecArgs|1 pattern 9|2 path 9?|3 limit 5?"];
      }
    }
    class AI extends II {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new AI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new AI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new AI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(AI, e3, t3);
      }
      static $() {
        return ["PiFindExecResult|1 success #0 result|2 error #1 result", $I, RI];
      }
    }
    class $I extends II {
      constructor(e3) {
        super(), this.output = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new $I().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new $I().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new $I().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals($I, e3, t3);
      }
      static $() {
        return ["PiFindExecSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?", QP];
      }
    }
    class RI extends II {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new RI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new RI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new RI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(RI, e3, t3);
      }
      static $() {
        return ["PiFindExecError|1 error 9"];
      }
    }
    class NI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class MI extends NI {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new MI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new MI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new MI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(MI, e3, t3);
      }
      static $() {
        return ["PiLsExecArgs|1 path 9?|2 limit 5?"];
      }
    }
    class JI extends NI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new JI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new JI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new JI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(JI, e3, t3);
      }
      static $() {
        return ["PiLsExecResult|1 success #0 result|2 error #1 result", jI, DI];
      }
    }
    class jI extends NI {
      constructor(e3) {
        super(), this.output = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new jI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new jI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new jI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(jI, e3, t3);
      }
      static $() {
        return ["PiLsExecSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?", QP];
      }
    }
    class DI extends NI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new DI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new DI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new DI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(DI, e3, t3);
      }
      static $() {
        return ["PiLsExecError|1 error 9"];
      }
    }
    const FI = "agent.v1.";
    class qI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return FI;
      }
    }
    var zI = jr(Rr.proto3, FI, "ConversationSearchSource", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "CLOUD_CACHE"]], 1);
    class UI extends qI {
      constructor(e3) {
        super(), this.query = "", this.toolCallId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new UI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new UI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new UI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(UI, e3, t3);
      }
      static $() {
        return ["ConversationSearchArgs|1 query 9|2 tool_call_id 9|3 limit 5?"];
      }
    }
    class BI extends qI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new BI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new BI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new BI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(BI, e3, t3);
      }
      static $() {
        return ["ConversationSearchResult|1 success #0 result|2 error #1 result", LI, KI];
      }
    }
    class LI extends qI {
      constructor(e3) {
        super(), this.hits = [], this.truncated = false, this.partial = false, this.rebuilding = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new LI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new LI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new LI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(LI, e3, t3);
      }
      static $() {
        return ["ConversationSearchSuccess|1 hits #0*|2 truncated 8|3 partial 8|4 rebuilding 8", VI];
      }
    }
    class VI extends qI {
      constructor(e3) {
        super(), this.conversationId = "", this.title = "", this.source = zI.UNSPECIFIED, this.updatedAtMs = Rr.protoInt64.zero, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new VI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new VI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new VI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(VI, e3, t3);
      }
      static $() {
        return ["ConversationSearchHit|1 conversation_id 9|2 title 9|3 source #0|4 updated_at_ms 3|5 snippet 9?", zI];
      }
    }
    class KI extends qI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new KI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new KI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new KI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(KI, e3, t3);
      }
      static $() {
        return ["ConversationSearchError|1 error 9"];
      }
    }
    class ZI extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class WI extends ZI {
      constructor(e3) {
        super(), this.journalEpoch = "", this.seq = Rr.protoInt64.zero, this.lastEventId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new WI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new WI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new WI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(WI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictCursor|1 journal_epoch 9|2 seq 4|3 last_event_id 9"];
      }
    }
    class HI extends ZI {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new HI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new HI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new HI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(HI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictArgs|1 cursor #0?|2 advance 8?|3 include_quota_notices 8?", WI];
      }
    }
    class YI extends ZI {
      constructor(e3) {
        super(), this.v = 0, this.eventId = "", this.journalEpoch = "", this.seq = Rr.protoInt64.zero, this.tsMs = Rr.protoInt64.zero, this.kind = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new YI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new YI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new YI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(YI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?"];
      }
    }
    class GI extends ZI {
      constructor(e3) {
        super(), this.result = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new GI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new GI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new GI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(GI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictResult|1 success #0 result|2 error #1 result", XI, QI];
      }
    }
    class XI extends ZI {
      constructor(e3) {
        super(), this.events = [], this.gap = false, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new XI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new XI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new XI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(XI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictSuccess|1 events #0*|2 next_cursor #1|3 gap 8", YI, WI];
      }
    }
    class QI extends ZI {
      constructor(e3) {
        super(), this.error = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new QI().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new QI().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new QI().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(QI, e3, t3);
      }
      static $() {
        return ["AgentStoreConflictError|1 error 9"];
      }
    }
    class eC extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class tC extends eC {
      constructor(e3) {
        super(), this.trigger = "", this.contextUsagePercent = 0, this.contextTokens = Rr.protoInt64.zero, this.contextWindowSize = Rr.protoInt64.zero, this.messageCount = 0, this.messagesToCompact = 0, this.isFirstCompaction = false, this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new tC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new tC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new tC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(tC, e3, t3);
      }
      static $() {
        return ["PreCompactRequestQuery|1 trigger 9|2 context_usage_percent 1|3 context_tokens 3|4 context_window_size 3|5 message_count 5|6 messages_to_compact 5|7 is_first_compaction 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #0*", GT];
      }
    }
    class rC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new rC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new rC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new rC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(rC, e3, t3);
      }
      static $() {
        return ["PreCompactRequestResponse|1 user_message 9?"];
      }
    }
    class nC extends eC {
      constructor(e3) {
        super(), this.subagentId = "", this.subagentType = "", this.task = "", this.parentConversationId = "", this.isParallelWorker = false, this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new nC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new nC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new nC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(nC, e3, t3);
      }
      static $() {
        return ["SubagentStartRequestQuery|1 subagent_id 9|2 subagent_type 9|3 task 9|4 parent_conversation_id 9|5 tool_call_id 9?|6 subagent_model 9?|7 is_parallel_worker 8|8 git_branch 9?|9 conversation_id 9?|10 generation_id 9?|11 model 9?|12 model_id 9?|13 model_params #0*", GT];
      }
    }
    class oC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new oC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new oC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new oC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(oC, e3, t3);
      }
      static $() {
        return ["SubagentStartRequestResponse|1 permission 9?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class sC extends eC {
      constructor(e3) {
        super(), this.subagentId = "", this.subagentType = "", this.status = "", this.durationMs = Rr.protoInt64.zero, this.parentConversationId = "", this.messageCount = 0, this.toolCallCount = 0, this.modifiedFiles = [], this.loopCount = 0, this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new sC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new sC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new sC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(sC, e3, t3);
      }
      static $() {
        return ["SubagentStopRequestQuery|1 subagent_id 9|2 subagent_type 9|3 status 9|4 duration_ms 3|5 summary 9?|6 parent_conversation_id 9|7 message_count 5|8 tool_call_count 5|9 error_message 9?|10 modified_files 9*|11 git_branch 9?|12 conversation_id 9?|13 generation_id 9?|14 model 9?|15 loop_count 5|16 task 9?|17 description 9?|18 model_id 9?|19 model_params #0*|20 child_conversation_id 9?", GT];
      }
    }
    class iC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new iC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new iC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new iC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(iC, e3, t3);
      }
      static $() {
        return ["SubagentStopRequestResponse|1 followup_message 9?|2 additional_context 9?"];
      }
    }
    class aC extends eC {
      constructor(e3) {
        super(), this.type = "", this.filePath = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new aC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new aC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new aC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(aC, e3, t3);
      }
      static $() {
        return ["BeforeSubmitPromptAttachment|1 type 9|2 file_path 9"];
      }
    }
    class cC extends eC {
      constructor(e3) {
        super(), this.prompt = "", this.attachments = [], this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new cC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new cC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new cC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(cC, e3, t3);
      }
      static $() {
        return ["BeforeSubmitPromptRequestQuery|1 prompt 9|2 attachments #0*|3 composer_mode 9?|4 conversation_id 9?|5 generation_id 9?|6 model 9?|7 model_id 9?|8 model_params #1*", aC, GT];
      }
    }
    class uC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new uC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new uC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new uC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(uC, e3, t3);
      }
      static $() {
        return ["BeforeSubmitPromptRequestResponse|1 continue 8?|2 user_message 9?|3 additional_context 9?"];
      }
    }
    class lC extends eC {
      constructor(e3) {
        super(), this.text = "", this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new lC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new lC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new lC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(lC, e3, t3);
      }
      static $() {
        return ["AfterAgentResponseRequestQuery|1 text 9|2 conversation_id 9?|3 generation_id 9?|4 model 9?|5 model_id 9?|6 model_params #0*|7 input_tokens 3?|8 output_tokens 3?|9 cache_read_tokens 3?|10 cache_write_tokens 3?", GT];
      }
    }
    class dC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new dC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new dC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new dC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(dC, e3, t3);
      }
      static $() {
        return ["AfterAgentResponseRequestResponse"];
      }
    }
    class pC extends eC {
      constructor(e3) {
        super(), this.text = "", this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new pC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new pC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new pC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(pC, e3, t3);
      }
      static $() {
        return ["AfterAgentThoughtRequestQuery|1 text 9|2 duration_ms 3?|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*", GT];
      }
    }
    class fC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new fC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new fC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new fC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(fC, e3, t3);
      }
      static $() {
        return ["AfterAgentThoughtRequestResponse"];
      }
    }
    class hC extends eC {
      constructor(e3) {
        super(), this.status = "", this.loopCount = 0, this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new hC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new hC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new hC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(hC, e3, t3);
      }
      static $() {
        return ["StopRequestQuery|1 status 9|2 loop_count 5|3 conversation_id 9?|4 generation_id 9?|5 model 9?|6 model_id 9?|7 model_params #0*|8 input_tokens 3?|9 output_tokens 3?|10 cache_read_tokens 3?|11 cache_write_tokens 3?", GT];
      }
    }
    class mC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new mC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new mC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new mC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(mC, e3, t3);
      }
      static $() {
        return ["StopRequestResponse|1 followup_message 9?"];
      }
    }
    class gC extends eC {
      constructor(e3) {
        super(), this.toolName = "", this.toolUseId = "", this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new gC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new gC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new gC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(gC, e3, t3);
      }
      static $() {
        return ["PreToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_use_id 9|4 cwd 9?|5 conversation_id 9?|6 generation_id 9?|7 model 9?|8 model_id 9?|9 model_params #1*|10 parent_tool_call_id 9?", Rr.Struct, GT];
      }
    }
    class yC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new yC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new yC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new yC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(yC, e3, t3);
      }
      static $() {
        return ["PreToolUseRequestResponse|1 permission 9?|2 user_message 9?|3 agent_message 9?|4 updated_input 9?|5 additional_context 9?"];
      }
    }
    class _C extends eC {
      constructor(e3) {
        super(), this.toolName = "", this.toolOutput = "", this.durationMs = Rr.protoInt64.zero, this.toolUseId = "", this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new _C().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new _C().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new _C().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(_C, e3, t3);
      }
      static $() {
        return ["PostToolUseRequestQuery|1 tool_name 9|2 tool_input #0|3 tool_output 9|4 duration_ms 3|5 tool_use_id 9|6 cwd 9?|7 conversation_id 9?|8 generation_id 9?|9 model 9?|10 model_id 9?|11 model_params #1*|12 parent_tool_call_id 9?", Rr.Struct, GT];
      }
    }
    class vC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new vC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new vC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new vC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(vC, e3, t3);
      }
      static $() {
        return ["PostToolUseRequestResponse|1 additional_context 9?"];
      }
    }
    class wC extends eC {
      constructor(e3) {
        super(), this.toolName = "", this.errorMessage = "", this.failureType = "", this.durationMs = Rr.protoInt64.zero, this.toolUseId = "", this.isInterrupt = false, this.modelParams = [], Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new wC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new wC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new wC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(wC, e3, t3);
      }
      static $() {
        return ["PostToolUseFailureRequestQuery|1 tool_name 9|2 tool_input #0|3 error_message 9|4 failure_type 9|5 duration_ms 3|6 tool_use_id 9|7 is_interrupt 8|8 conversation_id 9?|9 generation_id 9?|10 model 9?|11 model_id 9?|12 model_params #1*|13 parent_tool_call_id 9?", Rr.Struct, GT];
      }
    }
    class bC extends eC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new bC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new bC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new bC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(bC, e3, t3);
      }
      static $() {
        return ["PostToolUseFailureRequestResponse|1 additional_context 9?"];
      }
    }
    class SC extends Jr {
      static get runtime() {
        return Nr(this, "runtime", Rr.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class kC extends SC {
      constructor(e3) {
        super(), this.traceId = "", this.spanId = "", Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new kC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new kC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new kC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(kC, e3, t3);
      }
      static $() {
        return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
      }
    }
    class EC extends SC {
      constructor(e3) {
        super(), this.id = 0, this.execId = "", this.message = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new EC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new EC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new EC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(EC, e3, t3);
      }
      static $() {
        return ["ExecServerMessage|1 id 13|15 exec_id 9|57 machine_id 9?|2 shell_args #0 message|3 write_args #1 message|4 delete_args #2 message|5 grep_args #3 message|7 read_args #4 message|29 redacted_read_args #4 message|8 ls_args #5 message|9 diagnostics_args #6 message|10 request_context_args #7 message|11 mcp_args #8 message|14 shell_stream_args #0 message|16 background_shell_spawn_args #9 message|17 list_mcp_resources_exec_args #10 message|18 read_mcp_resource_exec_args #11 message|36 mcp_state_exec_args #12 message|20 fetch_args #13 message|21 record_screen_args #14 message|22 computer_use_args #15 message|23 write_shell_stdin_args #16 message|27 execute_hook_args #17 message|28 subagent_args #18 message|30 force_background_shell_args #19 message|31 force_background_subagent_args #20 message|37 subagent_await_args #21 message|38 smart_mode_classifier_args #22 message|40 canvas_diagnostics_args #23 message|41 shell_allowlist_precheck_args #24 message|42 mcp_allowlist_precheck_args #25 message|43 web_fetch_allowlist_precheck_args #26 message|44 git_diff_request #27 message|45 pi_read_args #28 message|46 pi_bash_args #29 message|47 pi_edit_args #30 message|48 pi_write_args #31 message|49 pi_grep_args #32 message|50 pi_find_args #33 message|51 pi_ls_args #34 message|52 mini_swe_agent_bash_args #0 message|53 conversation_search_args #35 message|54 agent_store_conflict_args #36 message|19 span_context #37?|55 accept_hook_additional_contexts 8?", QS, _k, Tk, Jk, Wk, nE, gE, GE, wx, tT, Ux, Wx, Jx, lT, _T, AT, sT, TC, nP, HS, hP, iP, SP, IP, NP, jP, qP, LP, tI, iI, fI, vI, xI, CI, MI, UI, HI, kC];
      }
    }
    class xC extends SC {
      constructor(e3) {
        super(), this.id = 0, this.execId = "", this.hookAdditionalContexts = [], this.message = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new xC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new xC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new xC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(xC, e3, t3);
      }
      static $() {
        return ["ExecClientMessage|1 id 13|15 exec_id 9|39 local_execution_time_ms 5?|45 hook_additional_contexts #0*|2 shell_result #1 message|3 write_result #2 message|4 delete_result #3 message|5 grep_result #4 message|7 read_result #5 message|29 redacted_read_result #5 message|8 ls_result #6 message|9 diagnostics_result #7 message|10 request_context_result #8 message|11 mcp_result #9 message|14 shell_stream #10 message|16 background_shell_spawn_result #11 message|17 list_mcp_resources_exec_result #12 message|18 read_mcp_resource_exec_result #13 message|36 mcp_state_exec_result #14 message|20 fetch_result #15 message|21 record_screen_result #16 message|22 computer_use_result #17 message|23 write_shell_stdin_result #18 message|27 execute_hook_result #19 message|28 subagent_result #20 message|30 force_background_shell_result #21 message|31 force_background_subagent_result #22 message|37 subagent_await_result #23 message|38 smart_mode_classifier_result #24 message|40 canvas_diagnostics_result #25 message|41 shell_allowlist_precheck_result #26 message|42 mcp_allowlist_precheck_result #27 message|43 web_fetch_allowlist_precheck_result #28 message|44 git_diff_response #29 message|46 pi_read_result #30 message|47 pi_bash_result #31 message|48 pi_edit_result #32 message|49 pi_write_result #33 message|50 pi_grep_result #34 message|51 pi_find_result #35 message|52 pi_ls_result #36 message|53 conversation_search_result #37 message|54 agent_store_conflict_result #38 message|55 mini_swe_agent_bash_result #1 message", NS, ek, vk, Ok, jk, Hk, oE, yE, XE, Sx, lk, rT, Bx, Hx, jx, dT, vT, LT, iT, OC, sP, YS, mP, aP, EP, CP, MP, DP, zP, KP, rI, aI, hI, wI, TI, AI, JI, BI, GI];
      }
    }
    class TC extends SC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new TC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new TC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new TC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(TC, e3, t3);
      }
      static $() {
        return ["ExecuteHookArgs|1 request #0", PC];
      }
    }
    class OC extends SC {
      constructor(e3) {
        super(), Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new OC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new OC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new OC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(OC, e3, t3);
      }
      static $() {
        return ["ExecuteHookResult|1 response #0", IC];
      }
    }
    class PC extends SC {
      constructor(e3) {
        super(), this.request = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new PC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new PC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new PC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(PC, e3, t3);
      }
      static $() {
        return ["ExecuteHookRequest|1 pre_compact #0 request|2 subagent_start #1 request|3 subagent_stop #2 request|4 pre_tool_use #3 request|5 post_tool_use #4 request|6 post_tool_use_failure #5 request|7 before_submit_prompt #6 request|8 after_agent_response #7 request|9 after_agent_thought #8 request|11 stop #9 request", tC, nC, sC, gC, _C, wC, cC, lC, pC, hC];
      }
    }
    class IC extends SC {
      constructor(e3) {
        super(), this.response = { case: void 0 }, Rr.proto3.util.initPartial(e3, this);
      }
      static fromBinary(e3, t3) {
        return new IC().fromBinary(e3, t3);
      }
      static fromJson(e3, t3) {
        return new IC().fromJson(e3, t3);
      }
      static fromJsonString(e3, t3) {
        return new IC().fromJsonString(e3, t3);
      }
      static equals(e3, t3) {
        return Rr.proto3.util.equals(IC, e3, t3);
      }
      static $() {
        return ["ExecuteHookResponse|1 pre_compact #0 response|2 subagent_start #1 response|3 subagent_stop #2 response|4 pre_tool_use #3 response|5 post_tool_use #4 response|6 post_tool_use_failure #5 response|7 before_submit_prompt #6 response|8 after_agent_response #7 response|9 after_agent_thought #8 response|11 stop #9 response", rC, oC, iC, yC, vC, bC, uC, dC, fC, mC];
      }
    }
    (0, hr.h)("SimpleControlledExecManager"), vS("agent_exec.controlled.exec.duration_ms", { description: "Duration of controlled exec operations in milliseconds", labelNames: ["exec_case"] }), _S("agent_exec.controlled.exec.success", { description: "Count of successful controlled exec operations", labelNames: ["exec_case"] }), _S("agent_exec.controlled.exec.error", { description: "Count of failed controlled exec operations", labelNames: ["exec_case"] });
    Error;
    class CC {
      constructor(e3, t3, r3) {
        this.exec = e3, this.deserializeArgs = t3, this.serializeResult = r3;
      }
      handle(e3, t3) {
        const r3 = this.deserializeArgs(t3);
        if (void 0 === r3) return;
        const { id: n3, args: o2 } = r3;
        return (async function* (r4) {
          const s2 = performance.now(), i3 = [], a3 = await r4.exec.execute(e3, o2, { execId: t3.execId, hookContextCollector: i3, deliverAgentStoreConflictNotices: true === t3.acceptHookAdditionalContexts }), c2 = r4.serializeResult(n3, a3);
          c2.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s2)), i3.length > 0 && (c2.hookAdditionalContexts = i3), yield c2;
        })(this);
      }
    }
    class AC {
      constructor(e3, t3, r3) {
        this.exec = e3, this.deserializeArgs = t3, this.serializeStream = r3;
      }
      handle(e3, t3) {
        const r3 = this.deserializeArgs(t3);
        if (void 0 === r3) return;
        const { id: n3, args: o2 } = r3;
        return (async function* (r4) {
          const s2 = performance.now(), i3 = [], a3 = r4.exec.execute(e3, o2, { execId: t3.execId, hookContextCollector: i3, deliverAgentStoreConflictNotices: true === t3.acceptHookAdditionalContexts });
          try {
            for await (const e4 of a3) {
              const t4 = r4.serializeStream(n3, e4);
              t4.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - s2)), yield t4;
            }
          } finally {
            const e4 = i3.filter((e5) => "agentStoreConflict" === e5.hookEventName);
            e4.length > 0 && (yield new xC({ id: n3, hookAdditionalContexts: e4 }));
          }
        })(this);
      }
    }
    async function $C(e3) {
      const t3 = e3[Symbol.asyncIterator](), r3 = await t3.next();
      if (r3.done) return;
      const n3 = { async *[Symbol.asyncIterator]() {
        for (; ; ) {
          const e4 = await t3.next();
          if (e4.done) return;
          yield e4.value;
        }
      } };
      return { firstItem: r3.value, rest: n3 };
    }
    var RC = function(e3, t3, r3) {
      if (null != t3) {
        if ("object" != typeof t3 && "function" != typeof t3) throw new TypeError("Object expected.");
        var n3, o2;
        if (r3) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n3 = t3[Symbol.asyncDispose];
        }
        if (void 0 === n3) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n3 = t3[Symbol.dispose], r3 && (o2 = n3);
        }
        if ("function" != typeof n3) throw new TypeError("Object not disposable.");
        o2 && (n3 = function() {
          try {
            o2.call(this);
          } catch (e4) {
            return Promise.reject(e4);
          }
        }), e3.stack.push({ value: t3, dispose: n3, async: r3 });
      } else r3 && e3.stack.push({ async: true });
      return t3;
    }, NC = /* @__PURE__ */ (function(e3) {
      return function(t3) {
        function r3(r4) {
          t3.error = t3.hasError ? new e3(r4, t3.error, "An error was suppressed during disposal.") : r4, t3.hasError = true;
        }
        var n3, o2 = 0;
        return (function e4() {
          for (; n3 = t3.stack.pop(); ) try {
            if (!n3.async && 1 === o2) return o2 = 0, t3.stack.push(n3), Promise.resolve().then(e4);
            if (n3.dispose) {
              var s2 = n3.dispose.call(n3.value);
              if (n3.async) return o2 |= 2, Promise.resolve(s2).then(e4, function(t4) {
                return r3(t4), e4();
              });
            } else o2 |= 1;
          } catch (e5) {
            r3(e5);
          }
          if (1 === o2) return t3.hasError ? Promise.reject(t3.error) : Promise.resolve();
          if (t3.hasError) throw t3.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3) {
      var n3 = new Error(r3);
      return n3.name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
    });
    const MC = (0, hr.h)("ExecutorResource"), JC = _S("agent_exec.hook_additional_context.delivered", { description: "Hook additional_context carriers drained into the caller collector", labelNames: ["hook_event_name"] });
    class jC {
      constructor(e3, t3, r3) {
        this.execManager = e3, this.serializeArgs = t3, this.deserializeResult = r3;
      }
      async execute(e3, t3, r3) {
        const n3 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = RC(n3, Cr(e3.withName("ExecutorResource.execute")), false), s2 = o2.ctx;
          void 0 !== r3?.execId && o2.span.setAttribute("exec.id", r3.execId);
          const i3 = Pr(s2), a3 = i3 ? new kC(i3) : void 0, c2 = this.execManager.createExecInstance(s2, (e4) => {
            const n4 = this.serializeArgs(e4, t3);
            return new EC({ id: n4.id, message: n4.message, execId: r3?.execId, machineId: r3?.machineId, spanContext: a3, acceptHookAdditionalContexts: void 0 !== r3?.hookContextCollector });
          }), u2 = await $C(c2);
          if (void 0 === u2) throw new Error("No exec result");
          let { firstItem: l2, rest: d2 } = u2;
          const p2 = (e4) => {
            if (void 0 !== r3?.hookContextCollector && e4.hookAdditionalContexts.length > 0) {
              r3.hookContextCollector.push(...e4.hookAdditionalContexts);
              for (const t4 of e4.hookAdditionalContexts) JC.increment(s2, 1, { hook_event_name: t4.hookEventName });
            }
          };
          p2(l2);
          let f2 = this.deserializeResult(l2);
          for (; void 0 === f2; ) {
            const e4 = await $C(d2);
            if (void 0 === e4) throw new Error("No result value");
            l2 = e4.firstItem, d2 = e4.rest, p2(l2), f2 = this.deserializeResult(l2);
          }
          return (async () => {
            try {
              for await (const e4 of d2) p2(e4);
            } catch (e4) {
              MC.info(s2, "Ignoring exec stream shutdown during detached drain", { error: e4 });
            }
          })().catch(() => {
          }), f2;
        } catch (e4) {
          n3.error = e4, n3.hasError = true;
        } finally {
          NC(n3);
        }
      }
    }
    class DC {
      constructor(e3, t3, r3) {
        this.execManager = e3, this.serializeArgs = t3, this.deserializeStream = r3;
      }
      async *execute(e3, t3, r3) {
        const n3 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = RC(n3, Cr(e3.withName("StreamExecutorResource.execute")), false).ctx, s2 = Pr(o2), i3 = s2 ? new kC(s2) : void 0, a3 = this.execManager.createExecInstance(o2, (e4) => {
            const n4 = this.serializeArgs(e4, t3);
            return new EC({ id: n4.id, message: n4.message, execId: r3?.execId, machineId: r3?.machineId, spanContext: i3, acceptHookAdditionalContexts: void 0 !== r3?.hookContextCollector || true === r3?.deliverAgentStoreConflictNotices });
          });
          for await (const e4 of a3) {
            void 0 !== r3?.hookContextCollector && e4.hookAdditionalContexts.length > 0 && r3.hookContextCollector.push(...e4.hookAdditionalContexts);
            const t4 = this.deserializeStream(e4);
            void 0 !== t4 && (yield t4);
          }
        } catch (e4) {
          n3.error = e4, n3.hasError = true;
        } finally {
          NC(n3);
        }
      }
    }
    const FC = "agent-store-conflict-executor", qC = "agent-store-conflict-notice-executor", zC = "background-shell-executor", UC = "canvas-diagnostics-executor", BC = "computer-use-executor", LC = "conversation-search-executor", VC = "delete-executor", KC = "diagnostics-executor", ZC = "fetch-executor", WC = "force-background-shell-executor", HC = "force-background-subagent-executor", YC = "git-diff-executor", GC = "grep-executor", XC = "hook-executor", QC = "list-mcp-resources-executor", eA = "ls-executor", tA = "mcp-allowlist-precheck-executor", rA = "mcp-executor", nA = "mcp-state-executor", oA = "mini-swe-agent-bash-executor", sA = "pi-bash-executor", iA = "pi-edit-executor", aA = "pi-find-executor", cA = "pi-grep-executor", uA = "pi-ls-executor", lA = "pi-read-executor", dA = "pi-write-executor", pA = "read-executor", fA = "read-mcp-resource-executor", hA = "record-screen-executor", mA = "redacted-read-executor", gA = "request-context-executor", yA = "shell-allowlist-precheck-executor", _A = "shell-executor", vA = "shell-stream-executor", wA = "smart-mode-classifier-executor", bA = "subagent-await-executor", SA = "subagent-executor", kA = "web-fetch-allowlist-precheck-executor", EA = "write-background-shell-input-executor", xA = "write-executor";
    function TA(e3) {
      return /* @__PURE__ */ Symbol.for(`@anysphere/agent-exec/resource/${e3}`);
    }
    function OA(e3, t3, r3) {
      return { name: e3, symbol: TA(e3), remoteImplementation: t3, registerControlledImplementation: r3 };
    }
    function PA(e3) {
      return function(t3, r3) {
        return new EC({ id: t3, message: { case: e3, value: r3 } });
      };
    }
    function IA(e3) {
      return (t3) => {
        if (t3.message.case === e3) return t3.message.value;
      };
    }
    function CA(e3) {
      return function(t3, r3) {
        return new xC({ id: t3, message: { case: e3, value: r3 } });
      };
    }
    function AA(e3) {
      return function(t3) {
        if (t3.message.case === e3) return { id: t3.id, args: t3.message.value };
      };
    }
    OA(FC, (e3) => new jC(e3, PA("agentStoreConflictArgs"), IA("agentStoreConflictResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("agentStoreConflictArgs"), CA("agentStoreConflictResult")));
    });
    /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded", "gap"]);
    class $A {
      async execute(e3, t3) {
        return "ack" === t3.op ? { kind: "acked", count: 0 } : "release" === t3.op ? { kind: "released", count: 0 } : "noteDeferredEagerWrittenPaths" === t3.op ? { kind: "noted", count: 0 } : { kind: "not-applicable" };
      }
    }
    OA(qC, (e3) => new $A(), (e3, t3) => {
    });
    OA(zC, (e3) => new jC(e3, PA("backgroundShellSpawnArgs"), IA("backgroundShellSpawnResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("backgroundShellSpawnArgs"), CA("backgroundShellSpawnResult")));
    }), OA(EA, (e3) => new jC(e3, PA("writeShellStdinArgs"), IA("writeShellStdinResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("writeShellStdinArgs"), CA("writeShellStdinResult")));
    }), OA(UC, (e3) => new jC(e3, PA("canvasDiagnosticsArgs"), IA("canvasDiagnosticsResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("canvasDiagnosticsArgs"), CA("canvasDiagnosticsResult")));
    });
    Error;
    OA(BC, (e3) => new jC(e3, PA("computerUseArgs"), IA("computerUseResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("computerUseArgs"), CA("computerUseResult")));
    }), OA(LC, (e3) => new jC(e3, PA("conversationSearchArgs"), IA("conversationSearchResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("conversationSearchArgs"), CA("conversationSearchResult")));
    }), OA(VC, (e3) => new jC(e3, PA("deleteArgs"), IA("deleteResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("deleteArgs"), CA("deleteResult")));
    }), OA(KC, (e3) => new jC(e3, PA("diagnosticsArgs"), IA("diagnosticsResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("diagnosticsArgs"), CA("diagnosticsResult")));
    }), (0, gr.cF)(/* @__PURE__ */ Symbol("execConversationId"), void 0), (0, gr.cF)(/* @__PURE__ */ Symbol("execRequestId"), void 0), (0, gr.cF)(/* @__PURE__ */ Symbol("execBrowserOperationSource"), void 0), OA(ZC, (e3) => new jC(e3, PA("fetchArgs"), IA("fetchResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("fetchArgs"), CA("fetchResult")));
    }), OA(YC, (e3) => new jC(e3, PA("gitDiffRequest"), IA("gitDiffResponse")), (e3, t3) => {
      t3.register(new CC(e3, AA("gitDiffRequest"), CA("gitDiffResponse")));
    }), OA(GC, (e3) => new jC(e3, PA("grepArgs"), IA("grepResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("grepArgs"), CA("grepResult")));
    });
    const RA = "stop", NA = "beforeSubmitPrompt", MA = "sessionStart", JA = "sessionEnd", jA = "preCompact", DA = "subagentStop", FA = "preToolUse", qA = "postToolUse", zA = "postToolUseFailure", UA = { PreToolUse: FA, PermissionRequest: null, PostToolUse: qA, UserPromptSubmit: NA, Stop: RA, SubagentStop: DA, SessionStart: MA, SessionEnd: JA, PreCompact: jA, Notification: null };
    Object.fromEntries(Object.entries(UA).filter((e3) => null !== e3[1]).map(([e3, t3]) => [t3, e3]));
    /* @__PURE__ */ new Set([MA, NA, FA, qA, zA]);
    OA(XC, (e3) => new jC(e3, PA("executeHookArgs"), IA("executeHookResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("executeHookArgs"), CA("executeHookResult")));
    });
    (0, gr.cF)(/* @__PURE__ */ Symbol("execHookConversationId"), void 0), (0, gr.cF)(/* @__PURE__ */ Symbol("execHookGenerationId"), void 0), (0, gr.cF)(/* @__PURE__ */ Symbol("execHookModel"), void 0), (0, gr.cF)(/* @__PURE__ */ Symbol("execHookWorkspaceRoots"), void 0), OA(eA, (e3) => new jC(e3, PA("lsArgs"), IA("lsResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("lsArgs"), CA("lsResult")));
    });
    const BA = "cursor-ide-browser", LA = "cursor-dev-control";
    /* @__PURE__ */ new Set(["cursor-app-control", "cursor-backend-control", "cursor-browser-extension", BA, LA, "custom-user-tools", "fsd", "cursor-subscriptions", "cursor-cloud", "suggestions", "Cursor Slack Tools", "Cursor Automation Tools"]);
    /* @__PURE__ */ new Set([LA, BA]);
    var VA;
    !(function(e3) {
      e3.Snapshots = "cursor_mcp_lease_snapshot_store", e3.Status = "cursor_mcp_lease_server_status", e3.Settings = "cursor_mcp_lease_settings", e3.Providers = "cursor_mcp_lease_providers", e3.Unknown = "cursor_mcp_lease_unknown";
    })(VA || (VA = {}));
    OA(rA, (e3) => new jC(e3, PA("mcpArgs"), IA("mcpResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("mcpArgs"), CA("mcpResult")));
    }), OA(QC, (e3) => new jC(e3, PA("listMcpResourcesExecArgs"), IA("listMcpResourcesExecResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("listMcpResourcesExecArgs"), CA("listMcpResourcesExecResult")));
    }), OA(fA, (e3) => new jC(e3, PA("readMcpResourceExecArgs"), IA("readMcpResourceExecResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("readMcpResourceExecArgs"), CA("readMcpResourceExecResult")));
    }), OA(nA, (e3) => new jC(e3, PA("mcpStateExecArgs"), IA("mcpStateExecResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("mcpStateExecArgs"), CA("mcpStateExecResult")));
    }), OA(tA, (e3) => new jC(e3, PA("mcpAllowlistPrecheckArgs"), IA("mcpAllowlistPrecheckResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("mcpAllowlistPrecheckArgs"), CA("mcpAllowlistPrecheckResult")));
    }), new TextEncoder();
    OA(pA, (e3) => new jC(e3, PA("readArgs"), IA("readResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("readArgs"), CA("readResult")));
    }), OA(mA, (e3) => new jC(e3, PA("redactedReadArgs"), IA("redactedReadResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("redactedReadArgs"), CA("redactedReadResult")));
    });
    _S("mcp.symbolic_args.expansion", { description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary", labelNames: ["route", "outcome"] }), vS("mcp.symbolic_args.bytes", { description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments", labelNames: ["route"] }), _S("mcp.symbolic_args.describe", { description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)", labelNames: ["source"] }), vS("mcp.symbolic_args.paths", { description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call", labelNames: ["route"] });
    Error;
    OA(oA, (e3) => new jC(e3, PA("miniSweAgentBashArgs"), IA("miniSweAgentBashResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("miniSweAgentBashArgs"), CA("miniSweAgentBashResult")));
    }), OA(sA, (e3) => new jC(e3, PA("piBashArgs"), IA("piBashResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piBashArgs"), CA("piBashResult")));
    }), OA(iA, (e3) => new jC(e3, PA("piEditArgs"), IA("piEditResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piEditArgs"), CA("piEditResult")));
    }), OA(aA, (e3) => new jC(e3, PA("piFindArgs"), IA("piFindResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piFindArgs"), CA("piFindResult")));
    }), OA(cA, (e3) => new jC(e3, PA("piGrepArgs"), IA("piGrepResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piGrepArgs"), CA("piGrepResult")));
    }), OA(uA, (e3) => new jC(e3, PA("piLsArgs"), IA("piLsResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piLsArgs"), CA("piLsResult")));
    }), OA(lA, (e3) => new jC(e3, PA("piReadArgs"), IA("piReadResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piReadArgs"), CA("piReadResult")));
    }), OA(dA, (e3) => new jC(e3, PA("piWriteArgs"), IA("piWriteResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("piWriteArgs"), CA("piWriteResult")));
    }), OA(_A, (e3) => new jC(e3, PA("shellArgs"), IA("shellResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("shellArgs"), CA("shellResult")));
    }), OA(vA, (e3) => new DC(e3, PA("shellStreamArgs"), IA("shellStream")), (e3, t3) => {
      t3.register(new AC(e3, AA("shellStreamArgs"), CA("shellStream")));
    }), OA(xA, (e3) => new jC(e3, PA("writeArgs"), IA("writeResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("writeArgs"), CA("writeResult")));
    });
    OA(hA, (e3) => new jC(e3, PA("recordScreenArgs"), IA("recordScreenResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("recordScreenArgs"), CA("recordScreenResult")));
    }), OA(gA, (e3) => new jC(e3, PA("requestContextArgs"), IA("requestContextResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("requestContextArgs"), CA("requestContextResult")));
    }), OA(yA, (e3) => new jC(e3, PA("shellAllowlistPrecheckArgs"), IA("shellAllowlistPrecheckResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("shellAllowlistPrecheckArgs"), CA("shellAllowlistPrecheckResult")));
    }), OA(WC, (e3) => new jC(e3, PA("forceBackgroundShellArgs"), IA("forceBackgroundShellResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("forceBackgroundShellArgs"), CA("forceBackgroundShellResult")));
    }), OA(wA, (e3) => new jC(e3, PA("smartModeClassifierArgs"), IA("smartModeClassifierResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("smartModeClassifierArgs"), CA("smartModeClassifierResult")));
    }), (0, gr.cF)(/* @__PURE__ */ Symbol("pendingSubagentReplay"), void 0);
    Error;
    OA(SA, (e3) => new jC(e3, PA("subagentArgs"), IA("subagentResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("subagentArgs"), CA("subagentResult")));
    }), OA(bA, (e3) => new jC(e3, PA("subagentAwaitArgs"), IA("subagentAwaitResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("subagentAwaitArgs"), CA("subagentAwaitResult")));
    }), OA(HC, (e3) => new jC(e3, PA("forceBackgroundSubagentArgs"), IA("forceBackgroundSubagentResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("forceBackgroundSubagentArgs"), CA("forceBackgroundSubagentResult")));
    });
    OA(kA, (e3) => new jC(e3, PA("webFetchAllowlistPrecheckArgs"), IA("webFetchAllowlistPrecheckResult")), (e3, t3) => {
      t3.register(new CC(e3, AA("webFetchAllowlistPrecheckArgs"), CA("webFetchAllowlistPrecheckResult")));
    });
    var KA = o(623);
    function ZA(e3) {
      const t3 = e3.adminToolPolicyByServer;
      return { enabledServerIds: e3.enabledServerIds, toolAllowlistByServer: e3.toolAllowlistByServer, userDisabledToolKeys: e3.userDisabledToolKeys, adminToolPolicyByServer: void 0 === t3 ? void 0 : Object.fromEntries(Object.entries(t3).map(([e4, t4]) => [e4, "custom" === t4.mode ? (0, KA.ht)({ mode: "custom", tools: t4.tools }) : { mode: t4.mode }])), userToolGroupPolicyByServer: e3.userToolGroupPolicyByServer };
    }
    function WA({ policy: e3, serverIdentifier: t3, toolName: r3, annotations: n3 }) {
      if (!e3.enabledServerIds.includes(t3)) return false;
      const o2 = e3.adminToolPolicyByServer?.[t3];
      if (void 0 !== o2) {
        if (!(0, KA.rh)(o2, { name: r3, annotations: n3 })) return false;
      } else {
        const n4 = e3.toolAllowlistByServer[t3];
        if (void 0 !== n4 && !(0, KA.rh)({ mode: "custom", tools: n4 }, { name: r3 })) return false;
      }
      const s2 = e3.userToolGroupPolicyByServer?.[t3];
      if (void 0 !== s2) {
        const o3 = s2["declared_read" === (0, k_.X5)(n3) ? "reads" : "writes"];
        return "off" !== o3 && ("custom" !== o3 || !e3.userDisabledToolKeys.includes(`${t3}|${r3}`));
      }
      return !e3.userDisabledToolKeys.includes(`${t3}|${r3}`);
    }
    const HA = Xo({ description: Wo().optional() }).passthrough(), YA = Xo({ properties: Qo(Wo(), HA).optional(), required: Go(Wo()).optional() }).passthrough();
    class GA {
      constructor(e3) {
        this.context = e3, this.changeListeners = /* @__PURE__ */ new Set(), this.providerClientKeys = /* @__PURE__ */ new Set(), this.mcpManager = (function() {
          if (!dS) throw new Error("MCP commands not initialized — call initializeMcpCommands first");
          return dS;
        })(), this.previousManagerClients = new Map(Object.entries(this.mcpManager.getClients()));
        const t3 = this.mcpManager.onDidChange(() => {
          this.onManagerClientsChanged();
        });
        this.context.subscriptions.push({ dispose: t3 }), this.initializeMcpProviders(), this.context.subscriptions.push(a2.cursor.onDidChangeMcpLease((e4) => {
          const t4 = (function(e5) {
            return void 0 === e5 ? { serverIdentifiers: void 0, reason: VA.Unknown } : { serverIdentifiers: e5.serverIdentifiers ? [...e5.serverIdentifiers] : void 0, reason: e5.reason };
          })(e4);
          (function(e5) {
            return e5.reason === VA.Providers && void 0 === e5.serverIdentifiers;
          })(t4) || this.fireDidChange(t4);
        })), this.context.subscriptions.push(a2.cursor.onDidRegisterMcpProvider((e4) => {
          this.registerMcpProvider(e4).then((t4) => {
            t4 && this.fireDidChange({ serverIdentifiers: [e4.id], reason: VA.Providers });
          });
        })), this.context.subscriptions.push(a2.cursor.onDidUnregisterMcpProvider((e4) => {
          g.info(`[McpLease] Removing client ${e4}, reason: mcp_provider_unregistered`), this.mcpManager.deleteClient(e4), this.providerClientKeys.delete(e4), this.fireDidChange({ serverIdentifiers: [e4], reason: VA.Providers });
        }));
      }
      onDidChange(e3) {
        return this.changeListeners.add(e3), { dispose: async () => {
          this.changeListeners.delete(e3);
        } };
      }
      fireDidChange(e3) {
        for (const t3 of this.changeListeners) try {
          t3(e3);
        } catch (e4) {
          g.error(`Error in MCP change listener: ${e4 instanceof Error ? e4.message : String(e4)}`, e4 instanceof Error ? e4 : void 0);
        }
      }
      onManagerClientsChanged() {
        const e3 = new Map(Object.entries(this.mcpManager.getClients())), t3 = [], r3 = /* @__PURE__ */ new Set();
        for (const n3 of this.previousManagerClients.keys()) r3.add(n3), this.providerClientKeys.has(n3) || this.previousManagerClients.get(n3) !== e3.get(n3) && t3.push(n3);
        for (const n3 of e3.keys()) r3.has(n3) || this.providerClientKeys.has(n3) || this.previousManagerClients.get(n3) !== e3.get(n3) && t3.push(n3);
        this.previousManagerClients = e3, t3.length > 0 && this.fireDidChange({ serverIdentifiers: t3, reason: VA.Unknown });
      }
      async getClients(e3) {
        return this.mcpManager.getClients();
      }
      async getClient(e3, t3) {
        return this.mcpManager.getClient(t3);
      }
      async getInstructions(e3) {
        return this.mcpManager.getInstructions(e3);
      }
      async getToolsForServers(e3, t3) {
        if (0 === t3.length) return [];
        const r3 = ZA(await a2.cursor.getMcpToolEnablementPolicy()), n3 = new Set(r3.enabledServerIds), o2 = new Set(t3), s2 = await this.getClients(e3), i3 = Object.fromEntries(Object.entries(s2).filter(([e4]) => o2.has(e4) && n3.has(e4)));
        return (await Promise.all(Object.entries(i3).map(([t4, r4]) => r4.getTools(e3).then((e4) => e4.map((e5) => ({ ...e5, clientKey: t4, providerIdentifier: r4.serverName, toolName: e5.name, ...this.providerClientKeys.has(t4) ? { source: "internal" } : {} }))).catch(() => [])))).flat().filter((e4) => WA({ policy: r3, serverIdentifier: e4.clientKey, toolName: e4.name, annotations: e4.annotations }));
      }
      async initializeMcpProviders() {
        try {
          const e3 = await a2.cursor.getAllMcpProviders(), t3 = (await Promise.allSettled(e3.map(async (e4) => await this.registerMcpProvider(e4) ? e4.id : void 0))).filter((e4) => "fulfilled" === e4.status).map((e4) => e4.value).filter((e4) => void 0 !== e4);
          t3.length > 0 && this.fireDidChange({ serverIdentifiers: t3, reason: VA.Providers });
        } catch (e3) {
          g.error("Failed to initialize MCP providers:", e3 instanceof Error ? e3 : void 0);
        }
      }
      async registerMcpProvider(e3) {
        try {
          return await this.registerMcpProviderToManager(this.mcpManager, e3), true;
        } catch (t3) {
          return g.error(`Failed to register MCP provider ${e3.id}: ${t3 instanceof Error ? t3.message : String(t3)}`, t3 instanceof Error ? t3 : void 0), false;
        }
      }
      async registerMcpProviderToManager(e3, t3) {
        this.providerClientKeys.add(t3.id), e3.setClient(t3.id, (function(e4) {
          let t4;
          const r3 = async () => {
            if (void 0 !== t4) return t4;
            const r4 = e4.listOfferings();
            t4 = r4;
            try {
              return await r4;
            } finally {
              t4 === r4 && (t4 = void 0);
            }
          };
          return { getState: async (e5) => ({ kind: "ready" }), getTools: async (e5) => {
            const t5 = await r3();
            return t5?.tools ? t5.tools.map((e6) => ({ name: e6.name, description: e6.description, inputSchema: JSON.parse(e6.parameters), _meta: e6._meta })) : [];
          }, callTool: async (t5, r4, n3, o2, s2) => {
            const i3 = t5.get(Zb);
            return e4.callTool(r4, n3, { toolCallId: o2, conversationId: i3?.conversationId, composerId: i3?.composerId });
          }, getInstructions: async (t5) => e4.instructions, listResources: async (e5) => {
            const t5 = await r3();
            return t5?.resources ? { resources: t5.resources } : { resources: [] };
          }, readResource: async (e5, t5) => ({ contents: [] }), listPrompts: async (e5) => {
            const t5 = await r3();
            return t5?.prompts ? t5.prompts.map((e6) => {
              let t6 = [];
              if (e6.parameters) {
                const r4 = JSON.parse(e6.parameters), n3 = YA.safeParse(r4);
                if (n3.success && n3.data.properties) {
                  const e7 = new Set(n3.data.required ?? []);
                  t6 = Object.entries(n3.data.properties).map(([t7, r5]) => ({ name: t7, description: r5.description, required: e7.has(t7) }));
                }
              }
              return { name: e6.name, description: e6.description, arguments: t6 };
            }) : [];
          }, getPrompt: async (e5, t5, r4) => ({ messages: [] }), serverName: e4.name ?? e4.id, config: void 0 };
        })(t3));
      }
      async getToolSet(e3) {
        return Bw("ext_lease.get_tool_set", async () => {
          const t3 = ZA(await a2.cursor.getMcpToolEnablementPolicy()), r3 = new Set(t3.enabledServerIds), n3 = await this.getClients(e3), o2 = Object.fromEntries(Object.entries(n3).filter(([e4]) => r3.has(e4))), s2 = (await Promise.all(Object.entries(o2).map(([t4, r4]) => r4.getTools(e3).then((e4) => e4.map((e5) => ({ ...e5, clientKey: t4, clientName: r4.serverName, client: r4 }))).catch(() => [])))).flat().filter((e4) => WA({ policy: t3, serverIdentifier: e4.clientKey, toolName: e4.name, annotations: e4.annotations })), i3 = {};
          for (const t4 of s2) i3[`${t4.clientKey}-${t4.name}`] = { definition: { ...t4, clientKey: t4.clientKey, providerIdentifier: t4.clientName, toolName: t4.name, ...this.providerClientKeys.has(t4.clientKey) ? { source: "internal" } : {} }, execute: async (r4, n4, o3) => {
            const s3 = o3?.createProvider(t4.clientName, t4.name, n4);
            return t4.client.callTool(e3, t4.name, r4, n4, s3);
          } };
          return new un(i3);
        }, e3);
      }
      async getTools(e3) {
        return (await this.getToolSet(e3)).getTools();
      }
    }
    var XA = o(6702);
    function QA(e3) {
      const t3 = a2.cursor.rgPath;
      if (t3) try {
        (0, XA.J)(t3);
      } catch (e4) {
        g.warn(`[cursor-mcp] Failed to configure ripgrep for MCP sandboxing: ${e4 instanceof Error ? e4.message : String(e4)}`);
      }
      else g.warn("[cursor-mcp] vscode.cursor.rgPath is unset; MCP sandbox preflight may fail on Linux");
      const r3 = (function(e4) {
        if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return;
        const t4 = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", r4 = process.resourcesPath, n3 = gn.dirname(process.execPath), o2 = [gn.join(e4, "../../resources/helpers", t4), ...r4 ? [gn.join(r4, "app", "resources", "helpers", t4), gn.join(r4, "resources", "helpers", t4)] : [], gn.join(n3, "resources", "helpers", t4), gn.join(n3, "resources", "app", "resources", "helpers", t4), ..."1" === process.env.VSCODE_DEV ? [gn.join(e4, "../../node_modules/@anysphere/sandbox-helper/bin", t4)] : []];
        for (const e5 of o2) try {
          if (mn.existsSync(e5)) return e5;
        } catch {
        }
      })(e3.extensionPath);
      if (r3) try {
        (0, XA.St)({ sandboxBinaryPath: r3 });
        const e4 = (0, XA.K3)();
        g.info(`[cursor-mcp] Sandbox prerequisites configured for stdio MCP: supported=${String(e4)}`);
      } catch (e4) {
        g.warn(`[cursor-mcp] Failed to configure sandbox prerequisites: ${e4 instanceof Error ? e4.message : String(e4)}`);
      }
      else g.warn("[cursor-mcp] Sandbox helper path not found; sandboxed stdio MCP servers will fail when MCP Network Controls require sandboxing");
    }
    function e$(e3) {
      return g.getLogger(e3);
    }
    const t$ = [];
    function r$(e3, t3) {
      return (function(e4, t4) {
        const r3 = new URLSearchParams(e4).get("code") ?? void 0, n3 = os({ query: e4, key: "code" });
        return "decode-percent-encoded" === t4 ? ss(n3) ?? r3 : n3 ?? r3;
      })(e3, t3);
    }
    async function n$({ context: e3, query: t3, redirectUrl: r3, authorizationCodeEncoding: n3 = "preserve-url-encoded" }) {
      const o2 = new URLSearchParams(t3), s2 = o2.get("state");
      if (!s2) throw g.error("OAuth callback received without state parameter"), a2.window.showErrorMessage("OAuth callback is missing required state parameter. Please try again."), new Error("OAuth callback is missing required state parameter");
      const c2 = ls(s2) ?? null;
      if (!c2) throw g.error("OAuth callback received with invalid state parameter"), a2.window.showErrorMessage("OAuth callback has invalid state parameter. Please try again."), new Error("OAuth callback has invalid state parameter");
      const u2 = fv(), l2 = new Vb(e3), d2 = await Mv(l2.getOAuthContext(), c2, u2), f2 = d2.identifier;
      if ("ignored" === d2.kind) return e$(f2).warn("Ignoring OAuth callback", { reason: d2.reason, attemptId: d2.attemptId, stateOwnerWorkspaceId: c2.owner.workspaceId, currentOwnerWorkspaceId: u2.workspaceId }), false;
      if ("error" === d2.kind) {
        const e4 = d2.serverUrl, t4 = d2.transportServerUrl, r4 = void 0 !== e4 ? { type: "streamableHttp", serverUrl: t4 ?? e4 } : void 0;
        throw e$(f2).error("OAuth callback resolution failed", new Error(d2.reason)), await At({ identifier: f2, serverInfo: r4 }) && await a2.commands.executeCommand("mcp.updateStatus", { identifier: f2, status: { type: "error", error: `OAuth callback invalid: ${d2.reason}` } }), new Error(`OAuth callback invalid: ${d2.reason}`);
      }
      if (!o2.get("code")) throw e$(f2).warn("OAuth callback received without code parameter"), new Error("OAuth callback is missing authorization code");
      const h2 = r$(t3, n3);
      if (e$(f2).info("Received OAuth callback with code"), !h2) throw e$(f2).error("Authorization code not found in redirect url callback"), new Error("Authorization code not found in redirect url callback");
      const m2 = d2.serverUrl, y2 = d2.transportServerUrl, _2 = { type: "streamableHttp", serverUrl: y2 ?? m2 }, v2 = await Ct() ? "serverIdentifier" : "canonicalServerUrl", w2 = (0, i2.b0)(s2) === i2.tl ? i2.qN : void 0 === r3 ? void 0 : await (0, es.Q2)({ serverUrl: m2, redirectUrl: r3, ipv4Hosts: await sv(l2.getOAuthContext()) });
      await At({ identifier: f2, serverInfo: _2 }) && await a2.commands.executeCommand("mcp.updateStatus", { identifier: f2, status: { type: "initializing" } });
      try {
        const e4 = l2, t4 = new Dv({ oauthContext: e4.getOAuthContext(), appRoot: e4.getAppRoot(), executeCommand: (t5, ...r4) => e4.executeCommand(t5, ...r4), mcpSharedOAuth: e4.mcpSharedOAuth, storageScope: v2, serverUrl: m2, transportServerUrl: y2, identifier: f2, oauthAttemptId: d2.attemptState.attemptId, attemptClientInformation: d2.attemptState.clientInformation, skipRetentionStateReconciliation: true, needsAuthCallback: () => {
        }, redirectUrl: w2 });
        await (async function(e5, t5, r4, n4) {
          await Ss({ provider: e5, transportServerUrl: t5, authorizationCode: r4, persistedAuthorizationServerUrl: n4 });
        })(t4, y2, h2, d2.attemptState.authorizationServerUrl), await t4.clearOAuthAttemptState(d2.attemptState.attemptId);
        try {
          const e5 = await t4.tokens();
          e$(f2).info("MCP OAuth callback exchange completed", p({ event: "mcp_oauth_callback_completion", ...cv(e5), ...lv(m2) }));
        } catch (e5) {
          e$(f2).warn(`OAuth callback token snapshot failed after successful exchange: ${e5 instanceof Error ? e5.message : String(e5)}`);
        }
        return await a2.commands.executeCommand("mcp.reloadClient", { identifier: f2, serverInfo: { type: "streamableHttp", serverUrl: y2 } }), true;
      } catch (e4) {
        e$(f2).error("Failed to complete OAuth exchange", e4);
        try {
          const e5 = new Dv({ oauthContext: l2.getOAuthContext(), appRoot: l2.getAppRoot(), executeCommand: (e6, ...t5) => l2.executeCommand(e6, ...t5), mcpSharedOAuth: l2.mcpSharedOAuth, storageScope: v2, serverUrl: m2, transportServerUrl: y2, identifier: f2, oauthAttemptId: d2.attemptState.attemptId, attemptClientInformation: d2.attemptState.clientInformation, skipRetentionStateReconciliation: true, needsAuthCallback: () => {
          }, redirectUrl: w2 });
          await e5.clearOAuthAttemptState(d2.attemptState.attemptId);
        } catch (e5) {
          e$(f2).warn(`OAuth token exchange failed and attempt cleanup also failed: ${e5 instanceof Error ? e5.message : String(e5)}`);
        }
        const t4 = e4 instanceof Error ? e4.message : String(e4);
        throw await At({ identifier: f2, serverInfo: _2 }) && await a2.commands.executeCommand("mcp.updateStatus", { identifier: f2, status: { type: "error", error: `OAuth token exchange failed: ${t4}` } }), e4;
      }
    }
    async function o$(e3) {
      const t3 = await Ct();
      g.init({ useAggregateOutputForInstances: t3 }), Mw || (Mw = true, (0, c.iOk)({ getLogger: (e4) => g.getLogger(e4) }), (0, c.dQS)(Rw), (0, c.mYE)(Nw), (0, c.YMW)(a2.env.remoteName ?? "local"), (0, c.H$2)("v1"), (0, c.zBU)(p), (0, c.KXj)($w)), QA(e3), await (async function(e4) {
        if (pS) return;
        pS = true;
        const t4 = new Vb(e4);
        dS = Kb, e4.subscriptions.push(a2.commands.registerCommand("mcp.ensureSharedOAuthStoreMigrated", () => t4.ensureSharedOAuthStoreMigrated())), lS(Kb, e4, t4), mb(Kb, t4);
      })(e3);
      const r3 = new mS(e3);
      t$.push(async () => r3.dispose());
      const n3 = a2.window.registerUriHandler({ handleUri: async (t4) => {
        try {
          if (t4.path === i2.aG) return void g.info("Received MCP OAuth return-to-Cursor deeplink");
          if (t4.path !== i2.nG) return void a2.window.showWarningMessage("Unrecognized deep link. Try updating Cursor");
          await n$({ context: e3, query: t4.query });
        } catch (e4) {
          g.error("Error handling OAuth callback URI", e4);
        }
      } });
      t$.push(async () => n3.dispose());
      const o2 = (ww = s2 = (t4) => n$({ context: e3, query: t4, redirectUrl: i2.tl, authorizationCodeEncoding: "decode-percent-encoded" }), { dispose: () => {
        ww === s2 && (ww = void 0);
      } });
      var s2;
      t$.push(async () => o2.dispose()), t$.push(async () => (async function() {
        await bw?.dispose(), bw = void 0;
      })());
      const u2 = new GA(e3);
      return { getMcpLease: () => u2 };
    }
    async function s$() {
      for (const e3 of t$) await e3();
    }
    const i$ = { getAuthorizationCodeForTest: r$ };
  })();
  var i = exports;
  for (var a in s) i[a] = s[a];
  s.__esModule && Object.defineProperty(i, "__esModule", { value: true });
})();
