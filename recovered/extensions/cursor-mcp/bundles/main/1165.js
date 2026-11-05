// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1165 range:112166..129658
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1165: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { rS: () => V, EB: () => E, bz: () => ee, YO: () => ie, zM: () => Y, Ie: () => Je, gM: () => fe, k5: () => ve, E$: () => me, eu: () => be, _H: () => ue, ch: () => X, ai: () => K, Ik: () => ce, lq: () => xe, vk: () => je, g1: () => ye, Yj: () => k, KC: () => de, L5: () => re, OZ: () => I });
    var n2 = r2(7381), o2 = r2(5521), s2 = r2(7246);
    /* @__PURE__ */ Symbol("ZodOutput"), /* @__PURE__ */ Symbol("ZodInput");
    class i2 {
      constructor() {
        this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(e3, ...t3) {
        const r3 = t3[0];
        if (this._map.set(e3, r3), r3 && "object" == typeof r3 && "id" in r3) {
          if (this._idmap.has(r3.id)) throw new Error(`ID ${r3.id} already exists in the registry`);
          this._idmap.set(r3.id, e3);
        }
        return this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(e3) {
        const t3 = this._map.get(e3);
        return t3 && "object" == typeof t3 && "id" in t3 && this._idmap.delete(t3.id), this._map.delete(e3), this;
      }
      get(e3) {
        const t3 = e3._zod.parent;
        if (t3) {
          const r3 = { ...this.get(t3) ?? {} };
          return delete r3.id, { ...r3, ...this._map.get(e3) };
        }
        return this._map.get(e3);
      }
      has(e3) {
        return this._map.has(e3);
      }
    }
    function a2() {
      return new i2();
    }
    const c = a2();
    var u = r2(7888), l = r2(9567), d = r2(8880), p = r2(4287), f = r2(6749);
    const h = (e3, t3) => {
      f.a$.init(e3, t3), e3.name = "ZodError", Object.defineProperties(e3, { format: { value: (t4) => f.Wk(e3, t4) }, flatten: { value: (t4) => f.JM(e3, t4) }, addIssue: { value: (t4) => e3.issues.push(t4) }, addIssues: { value: (t4) => e3.issues.push(...t4) }, isEmpty: { get: () => 0 === e3.issues.length } });
    }, m = (n2.xI("ZodError", h), n2.xI("ZodError", h, { Parent: Error })), g = p.Tj(m), y = p.Rb(m), _ = p.Od(m), v = p.wG(m), w = n2.xI("ZodType", (e3, t3) => (o2.W4.init(e3, t3), e3.def = t3, Object.defineProperty(e3, "_def", { value: t3 }), e3.check = (...r3) => e3.clone({ ...t3, checks: [...t3.checks ?? [], ...r3.map((e4) => "function" == typeof e4 ? { _zod: { check: e4, def: { check: "custom" }, onattach: [] } } : e4)] }), e3.clone = (t4, r3) => s2.o8(e3, t4, r3), e3.brand = () => e3, e3.register = (t4, r3) => (t4.add(e3, r3), e3), e3.parse = (t4, r3) => g(e3, t4, r3, { callee: e3.parse }), e3.safeParse = (t4, r3) => _(e3, t4, r3), e3.parseAsync = async (t4, r3) => y(e3, t4, r3, { callee: e3.parseAsync }), e3.safeParseAsync = async (t4, r3) => v(e3, t4, r3), e3.spa = e3.safeParseAsync, e3.refine = (t4, r3) => e3.check((function(e4, t5 = {}) {
      return u.fU(Me, e4, t5);
    })(t4, r3)), e3.superRefine = (t4) => e3.check((function(e4) {
      const t5 = (function(e5) {
        const t6 = new l.QP({ check: "custom" });
        return t6._zod.check = e5, t6;
      })((r3) => (r3.addIssue = (e5) => {
        if ("string" == typeof e5) r3.issues.push(s2.sn(e5, r3.value, t5._zod.def));
        else {
          const n3 = e5;
          n3.fatal && (n3.continue = false), n3.code ?? (n3.code = "custom"), n3.input ?? (n3.input = r3.value), n3.inst ?? (n3.inst = t5), n3.continue ?? (n3.continue = !t5._zod.def.abort), r3.issues.push(s2.sn(n3));
        }
      }, e4(r3.value, r3)));
      return t5;
    })(t4)), e3.overwrite = (t4) => e3.check(u.bS(t4)), e3.optional = () => xe(e3), e3.nullable = () => Oe(e3), e3.nullish = () => xe(Oe(e3)), e3.nonoptional = (t4) => (function(e4, t5) {
      return new Ce({ type: "nonoptional", innerType: e4, ...s2.A2(t5) });
    })(e3, t4), e3.array = () => ie(e3), e3.or = (t4) => de([e3, t4]), e3.and = (t4) => me(e3, t4), e3.transform = (t4) => Re(e3, ke(t4)), e3.default = (t4) => {
      return r3 = t4, new Pe({ type: "default", innerType: e3, get defaultValue() {
        return "function" == typeof r3 ? r3() : r3;
      } });
      var r3;
    }, e3.prefault = (t4) => {
      return r3 = t4, new Ie({ type: "prefault", innerType: e3, get defaultValue() {
        return "function" == typeof r3 ? r3() : r3;
      } });
      var r3;
    }, e3.catch = (t4) => {
      return new Ae({ type: "catch", innerType: e3, catchValue: "function" == typeof (r3 = t4) ? r3 : () => r3 });
      var r3;
    }, e3.pipe = (t4) => Re(e3, t4), e3.readonly = () => new Ne({ type: "readonly", innerType: e3 }), e3.describe = (t4) => {
      const r3 = e3.clone();
      return c.add(r3, { description: t4 }), r3;
    }, Object.defineProperty(e3, "description", { get: () => c.get(e3)?.description, configurable: true }), e3.meta = (...t4) => {
      if (0 === t4.length) return c.get(e3);
      const r3 = e3.clone();
      return c.add(r3, t4[0]), r3;
    }, e3.isOptional = () => e3.safeParse(void 0).success, e3.isNullable = () => e3.safeParse(null).success, e3)), b = n2.xI("_ZodString", (e3, t3) => {
      o2.$v.init(e3, t3), w.init(e3, t3);
      const r3 = e3._zod.bag;
      e3.format = r3.format ?? null, e3.minLength = r3.minimum ?? null, e3.maxLength = r3.maximum ?? null, e3.regex = (...t4) => e3.check(u.Fk(...t4)), e3.includes = (...t4) => e3.check(u.dR(...t4)), e3.startsWith = (...t4) => e3.check(u.$S(...t4)), e3.endsWith = (...t4) => e3.check(u.ER(...t4)), e3.min = (...t4) => e3.check(u.m9(...t4)), e3.max = (...t4) => e3.check(u.Eb(...t4)), e3.length = (...t4) => e3.check(u.YA(...t4)), e3.nonempty = (...t4) => e3.check(u.m9(1, ...t4)), e3.lowercase = (t4) => e3.check(u.hH(t4)), e3.uppercase = (t4) => e3.check(u.qF(t4)), e3.trim = () => e3.check(u.WN()), e3.normalize = (...t4) => e3.check(u.lo(...t4)), e3.toLowerCase = () => e3.check(u.Il()), e3.toUpperCase = () => e3.check(u.xY());
    }), S = n2.xI("ZodString", (e3, t3) => {
      o2.$v.init(e3, t3), b.init(e3, t3), e3.email = (t4) => e3.check(u.Mu(x, t4)), e3.url = (t4) => e3.check(u.Fn(P, t4)), e3.jwt = (t4) => e3.check(u.rk(L, t4)), e3.emoji = (t4) => e3.check(u.aC(C, t4)), e3.guid = (t4) => e3.check(u.tB(T, t4)), e3.uuid = (t4) => e3.check(u.Be(O, t4)), e3.uuidv4 = (t4) => e3.check(u.nA(O, t4)), e3.uuidv6 = (t4) => e3.check(u.pY(O, t4)), e3.uuidv7 = (t4) => e3.check(u.wA(O, t4)), e3.nanoid = (t4) => e3.check(u.Dl(A, t4)), e3.guid = (t4) => e3.check(u.tB(T, t4)), e3.cuid = (t4) => e3.check(u.fs($, t4)), e3.cuid2 = (t4) => e3.check(u.Bj(R, t4)), e3.ulid = (t4) => e3.check(u.Ct(N, t4)), e3.base64 = (t4) => e3.check(u.rt(z, t4)), e3.base64url = (t4) => e3.check(u.cU(U, t4)), e3.xid = (t4) => e3.check(u.Pw(M, t4)), e3.ksuid = (t4) => e3.check(u._z(J, t4)), e3.ipv4 = (t4) => e3.check(u.Ny(j, t4)), e3.ipv6 = (t4) => e3.check(u.$O(D, t4)), e3.cidrv4 = (t4) => e3.check(u.Uy(F, t4)), e3.cidrv6 = (t4) => e3.check(u.gP(q, t4)), e3.e164 = (t4) => e3.check(u.KB(B, t4)), e3.datetime = (t4) => e3.check(d.w$(t4)), e3.date = (t4) => e3.check(d.p6(t4)), e3.time = (t4) => e3.check(d.kB(t4)), e3.duration = (t4) => e3.check(d.p0(t4));
    });
    function k(e3) {
      return u.Rl(S, e3);
    }
    const E = n2.xI("ZodStringFormat", (e3, t3) => {
      o2.EY.init(e3, t3), b.init(e3, t3);
    }), x = n2.xI("ZodEmail", (e3, t3) => {
      o2.qG.init(e3, t3), E.init(e3, t3);
    });
    const T = n2.xI("ZodGUID", (e3, t3) => {
      o2.Zc.init(e3, t3), E.init(e3, t3);
    });
    const O = n2.xI("ZodUUID", (e3, t3) => {
      o2.Zn.init(e3, t3), E.init(e3, t3);
    });
    const P = n2.xI("ZodURL", (e3, t3) => {
      o2.VY.init(e3, t3), E.init(e3, t3);
    });
    function I(e3) {
      return u.Fn(P, e3);
    }
    const C = n2.xI("ZodEmoji", (e3, t3) => {
      o2.cG.init(e3, t3), E.init(e3, t3);
    });
    const A = n2.xI("ZodNanoID", (e3, t3) => {
      o2.Py.init(e3, t3), E.init(e3, t3);
    });
    const $ = n2.xI("ZodCUID", (e3, t3) => {
      o2.bl.init(e3, t3), E.init(e3, t3);
    });
    const R = n2.xI("ZodCUID2", (e3, t3) => {
      o2.Zu.init(e3, t3), E.init(e3, t3);
    });
    const N = n2.xI("ZodULID", (e3, t3) => {
      o2.g5.init(e3, t3), E.init(e3, t3);
    });
    const M = n2.xI("ZodXID", (e3, t3) => {
      o2.TF.init(e3, t3), E.init(e3, t3);
    });
    const J = n2.xI("ZodKSUID", (e3, t3) => {
      o2.GY.init(e3, t3), E.init(e3, t3);
    });
    const j = n2.xI("ZodIPv4", (e3, t3) => {
      o2.Lc.init(e3, t3), E.init(e3, t3);
    });
    const D = n2.xI("ZodIPv6", (e3, t3) => {
      o2.Zy.init(e3, t3), E.init(e3, t3);
    });
    const F = n2.xI("ZodCIDRv4", (e3, t3) => {
      o2.CI.init(e3, t3), E.init(e3, t3);
    });
    const q = n2.xI("ZodCIDRv6", (e3, t3) => {
      o2.Cn.init(e3, t3), E.init(e3, t3);
    });
    const z = n2.xI("ZodBase64", (e3, t3) => {
      o2.Dq.init(e3, t3), E.init(e3, t3);
    });
    const U = n2.xI("ZodBase64URL", (e3, t3) => {
      o2.CQ.init(e3, t3), E.init(e3, t3);
    });
    const B = n2.xI("ZodE164", (e3, t3) => {
      o2.Oy.init(e3, t3), E.init(e3, t3);
    });
    const L = n2.xI("ZodJWT", (e3, t3) => {
      o2.h8.init(e3, t3), E.init(e3, t3);
    });
    const V = n2.xI("ZodNumber", (e3, t3) => {
      o2.vz.init(e3, t3), w.init(e3, t3), e3.gt = (t4, r4) => e3.check(u.Tx(t4, r4)), e3.gte = (t4, r4) => e3.check(u.qm(t4, r4)), e3.min = (t4, r4) => e3.check(u.qm(t4, r4)), e3.lt = (t4, r4) => e3.check(u.Au(t4, r4)), e3.lte = (t4, r4) => e3.check(u.Zm(t4, r4)), e3.max = (t4, r4) => e3.check(u.Zm(t4, r4)), e3.int = (t4) => e3.check(W(t4)), e3.safe = (t4) => e3.check(W(t4)), e3.positive = (t4) => e3.check(u.Tx(0, t4)), e3.nonnegative = (t4) => e3.check(u.qm(0, t4)), e3.negative = (t4) => e3.check(u.Au(0, t4)), e3.nonpositive = (t4) => e3.check(u.Zm(0, t4)), e3.multipleOf = (t4, r4) => e3.check(u.Hi(t4, r4)), e3.step = (t4, r4) => e3.check(u.Hi(t4, r4)), e3.finite = () => e3;
      const r3 = e3._zod.bag;
      e3.minValue = Math.max(r3.minimum ?? Number.NEGATIVE_INFINITY, r3.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e3.maxValue = Math.min(r3.maximum ?? Number.POSITIVE_INFINITY, r3.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e3.isInt = (r3.format ?? "").includes("int") || Number.isSafeInteger(r3.multipleOf ?? 0.5), e3.isFinite = true, e3.format = r3.format ?? null;
    });
    function K(e3) {
      return u.F7(V, e3);
    }
    const Z = n2.xI("ZodNumberFormat", (e3, t3) => {
      o2.I.init(e3, t3), V.init(e3, t3);
    });
    function W(e3) {
      return u.LK(Z, e3);
    }
    const H = n2.xI("ZodBoolean", (e3, t3) => {
      o2.sF.init(e3, t3), w.init(e3, t3);
    });
    function Y(e3) {
      return u._L(H, e3);
    }
    const G = n2.xI("ZodNull", (e3, t3) => {
      o2.x8.init(e3, t3), w.init(e3, t3);
    });
    function X(e3) {
      return u.jw(G, e3);
    }
    const Q = n2.xI("ZodAny", (e3, t3) => {
      o2.Gb.init(e3, t3), w.init(e3, t3);
    });
    function ee() {
      return u.KA(Q);
    }
    const te = n2.xI("ZodUnknown", (e3, t3) => {
      o2.GP.init(e3, t3), w.init(e3, t3);
    });
    function re() {
      return u.em(te);
    }
    const ne = n2.xI("ZodNever", (e3, t3) => {
      o2.Um.init(e3, t3), w.init(e3, t3);
    });
    function oe(e3) {
      return u.G8(ne, e3);
    }
    const se = n2.xI("ZodArray", (e3, t3) => {
      o2.$p.init(e3, t3), w.init(e3, t3), e3.element = t3.element, e3.min = (t4, r3) => e3.check(u.m9(t4, r3)), e3.nonempty = (t4) => e3.check(u.m9(1, t4)), e3.max = (t4, r3) => e3.check(u.Eb(t4, r3)), e3.length = (t4, r3) => e3.check(u.YA(t4, r3)), e3.unwrap = () => e3.element;
    });
    function ie(e3, t3) {
      return u.dZ(se, e3, t3);
    }
    const ae = n2.xI("ZodObject", (e3, t3) => {
      o2.L8.init(e3, t3), w.init(e3, t3), s2.gJ(e3, "shape", () => t3.shape), e3.keyof = () => ve(Object.keys(e3._zod.def.shape)), e3.catchall = (t4) => e3.clone({ ...e3._zod.def, catchall: t4 }), e3.passthrough = () => e3.clone({ ...e3._zod.def, catchall: re() }), e3.loose = () => e3.clone({ ...e3._zod.def, catchall: re() }), e3.strict = () => e3.clone({ ...e3._zod.def, catchall: oe() }), e3.strip = () => e3.clone({ ...e3._zod.def, catchall: void 0 }), e3.extend = (t4) => s2.X$(e3, t4), e3.merge = (t4) => s2.h1(e3, t4), e3.pick = (t4) => s2.Up(e3, t4), e3.omit = (t4) => s2.cJ(e3, t4), e3.partial = (...t4) => s2.OH(Ee, e3, t4[0]), e3.required = (...t4) => s2.mw(Ce, e3, t4[0]);
    });
    function ce(e3, t3) {
      const r3 = { type: "object", get shape() {
        return s2.Vy(this, "shape", { ...e3 }), this.shape;
      }, ...s2.A2(t3) };
      return new ae(r3);
    }
    function ue(e3, t3) {
      return new ae({ type: "object", get shape() {
        return s2.Vy(this, "shape", { ...e3 }), this.shape;
      }, catchall: re(), ...s2.A2(t3) });
    }
    const le = n2.xI("ZodUnion", (e3, t3) => {
      o2.cu.init(e3, t3), w.init(e3, t3), e3.options = t3.options;
    });
    function de(e3, t3) {
      return new le({ type: "union", options: e3, ...s2.A2(t3) });
    }
    const pe = n2.xI("ZodDiscriminatedUnion", (e3, t3) => {
      le.init(e3, t3), o2.P0.init(e3, t3);
    });
    function fe(e3, t3, r3) {
      return new pe({ type: "union", options: t3, discriminator: e3, ...s2.A2(r3) });
    }
    const he = n2.xI("ZodIntersection", (e3, t3) => {
      o2.LJ.init(e3, t3), w.init(e3, t3);
    });
    function me(e3, t3) {
      return new he({ type: "intersection", left: e3, right: t3 });
    }
    const ge = n2.xI("ZodRecord", (e3, t3) => {
      o2.h.init(e3, t3), w.init(e3, t3), e3.keyType = t3.keyType, e3.valueType = t3.valueType;
    });
    function ye(e3, t3, r3) {
      return new ge({ type: "record", keyType: e3, valueType: t3, ...s2.A2(r3) });
    }
    const _e = n2.xI("ZodEnum", (e3, t3) => {
      o2.VO.init(e3, t3), w.init(e3, t3), e3.enum = t3.entries, e3.options = Object.values(t3.entries);
      const r3 = new Set(Object.keys(t3.entries));
      e3.extract = (e4, n3) => {
        const o3 = {};
        for (const n4 of e4) {
          if (!r3.has(n4)) throw new Error(`Key ${n4} not found in enum`);
          o3[n4] = t3.entries[n4];
        }
        return new _e({ ...t3, checks: [], ...s2.A2(n3), entries: o3 });
      }, e3.exclude = (e4, n3) => {
        const o3 = { ...t3.entries };
        for (const t4 of e4) {
          if (!r3.has(t4)) throw new Error(`Key ${t4} not found in enum`);
          delete o3[t4];
        }
        return new _e({ ...t3, checks: [], ...s2.A2(n3), entries: o3 });
      };
    });
    function ve(e3, t3) {
      const r3 = Array.isArray(e3) ? Object.fromEntries(e3.map((e4) => [e4, e4])) : e3;
      return new _e({ type: "enum", entries: r3, ...s2.A2(t3) });
    }
    const we = n2.xI("ZodLiteral", (e3, t3) => {
      o2.nu.init(e3, t3), w.init(e3, t3), e3.values = new Set(t3.values), Object.defineProperty(e3, "value", { get() {
        if (t3.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t3.values[0];
      } });
    });
    function be(e3, t3) {
      return new we({ type: "literal", values: Array.isArray(e3) ? e3 : [e3], ...s2.A2(t3) });
    }
    const Se = n2.xI("ZodTransform", (e3, t3) => {
      o2.Wc.init(e3, t3), w.init(e3, t3), e3._zod.parse = (r3, n3) => {
        r3.addIssue = (n4) => {
          if ("string" == typeof n4) r3.issues.push(s2.sn(n4, r3.value, t3));
          else {
            const t4 = n4;
            t4.fatal && (t4.continue = false), t4.code ?? (t4.code = "custom"), t4.input ?? (t4.input = r3.value), t4.inst ?? (t4.inst = e3), t4.continue ?? (t4.continue = true), r3.issues.push(s2.sn(t4));
          }
        };
        const o3 = t3.transform(r3.value, r3);
        return o3 instanceof Promise ? o3.then((e4) => (r3.value = e4, r3)) : (r3.value = o3, r3);
      };
    });
    function ke(e3) {
      return new Se({ type: "transform", transform: e3 });
    }
    const Ee = n2.xI("ZodOptional", (e3, t3) => {
      o2.ig.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function xe(e3) {
      return new Ee({ type: "optional", innerType: e3 });
    }
    const Te = n2.xI("ZodNullable", (e3, t3) => {
      o2.qc.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType;
    });
    function Oe(e3) {
      return new Te({ type: "nullable", innerType: e3 });
    }
    const Pe = n2.xI("ZodDefault", (e3, t3) => {
      o2.rv.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType, e3.removeDefault = e3.unwrap;
    });
    const Ie = n2.xI("ZodPrefault", (e3, t3) => {
      o2.VF.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType;
    });
    const Ce = n2.xI("ZodNonOptional", (e3, t3) => {
      o2.N$.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType;
    });
    const Ae = n2.xI("ZodCatch", (e3, t3) => {
      o2.t$.init(e3, t3), w.init(e3, t3), e3.unwrap = () => e3._zod.def.innerType, e3.removeCatch = e3.unwrap;
    });
    const $e = n2.xI("ZodPipe", (e3, t3) => {
      o2._m.init(e3, t3), w.init(e3, t3), e3.in = t3.in, e3.out = t3.out;
    });
    function Re(e3, t3) {
      return new $e({ type: "pipe", in: e3, out: t3 });
    }
    const Ne = n2.xI("ZodReadonly", (e3, t3) => {
      o2.Sb.init(e3, t3), w.init(e3, t3);
    });
    const Me = n2.xI("ZodCustom", (e3, t3) => {
      o2.b0.init(e3, t3), w.init(e3, t3);
    });
    function Je(e3, t3) {
      return u.FO(Me, e3 ?? (() => true), t3);
    }
    function je(e3, t3) {
      return Re(ke(e3), t3);
    }
  }