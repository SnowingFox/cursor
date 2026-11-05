// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 61165 range:1891262..1908618
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61165: (e, t, r) => {
    "use strict";
    r.d(t, { rS: () => H, EB: () => k, bz: () => ee, YO: () => ie, zM: () => K, Ie: () => Fe, gM: () => he, k5: () => we, E$: () => fe, eu: () => _e, _H: () => ce, ch: () => X, ai: () => W, Ik: () => le, lq: () => Ee, vk: () => Le, g1: () => ye, Yj: () => x, KC: () => de, L5: () => re, OZ: () => A });
    var n = r(47381), o = r(25521), s = r(7246);
    /* @__PURE__ */ Symbol("ZodOutput"), /* @__PURE__ */ Symbol("ZodInput");
    class i {
      constructor() {
        this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(e2, ...t2) {
        const r2 = t2[0];
        if (this._map.set(e2, r2), r2 && "object" == typeof r2 && "id" in r2) {
          if (this._idmap.has(r2.id)) throw new Error(`ID ${r2.id} already exists in the registry`);
          this._idmap.set(r2.id, e2);
        }
        return this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(e2) {
        const t2 = this._map.get(e2);
        return t2 && "object" == typeof t2 && "id" in t2 && this._idmap.delete(t2.id), this._map.delete(e2), this;
      }
      get(e2) {
        const t2 = e2._zod.parent;
        if (t2) {
          const r2 = { ...this.get(t2) ?? {} };
          return delete r2.id, { ...r2, ...this._map.get(e2) };
        }
        return this._map.get(e2);
      }
      has(e2) {
        return this._map.has(e2);
      }
    }
    function a() {
      return new i();
    }
    const l = a();
    var c = r(87888), u = r(39567), d = r(78880), p = r(4287), h = r(6749);
    const m = (e2, t2) => {
      h.a$.init(e2, t2), e2.name = "ZodError", Object.defineProperties(e2, { format: { value: (t3) => h.Wk(e2, t3) }, flatten: { value: (t3) => h.JM(e2, t3) }, addIssue: { value: (t3) => e2.issues.push(t3) }, addIssues: { value: (t3) => e2.issues.push(...t3) }, isEmpty: { get: () => 0 === e2.issues.length } });
    }, f = (n.xI("ZodError", m), n.xI("ZodError", m, { Parent: Error })), g = p.Tj(f), y = p.Rb(f), v = p.Od(f), w = p.wG(f), b = n.xI("ZodType", (e2, t2) => (o.W4.init(e2, t2), e2.def = t2, Object.defineProperty(e2, "_def", { value: t2 }), e2.check = (...r2) => e2.clone({ ...t2, checks: [...t2.checks ?? [], ...r2.map((e3) => "function" == typeof e3 ? { _zod: { check: e3, def: { check: "custom" }, onattach: [] } } : e3)] }), e2.clone = (t3, r2) => s.o8(e2, t3, r2), e2.brand = () => e2, e2.register = (t3, r2) => (t3.add(e2, r2), e2), e2.parse = (t3, r2) => g(e2, t3, r2, { callee: e2.parse }), e2.safeParse = (t3, r2) => v(e2, t3, r2), e2.parseAsync = async (t3, r2) => y(e2, t3, r2, { callee: e2.parseAsync }), e2.safeParseAsync = async (t3, r2) => w(e2, t3, r2), e2.spa = e2.safeParseAsync, e2.refine = (t3, r2) => e2.check((function(e3, t4 = {}) {
      return c.fU(Ne, e3, t4);
    })(t3, r2)), e2.superRefine = (t3) => e2.check((function(e3) {
      const t4 = (function(e4) {
        const t5 = new u.QP({ check: "custom" });
        return t5._zod.check = e4, t5;
      })((r2) => (r2.addIssue = (e4) => {
        if ("string" == typeof e4) r2.issues.push(s.sn(e4, r2.value, t4._zod.def));
        else {
          const n2 = e4;
          n2.fatal && (n2.continue = false), n2.code ?? (n2.code = "custom"), n2.input ?? (n2.input = r2.value), n2.inst ?? (n2.inst = t4), n2.continue ?? (n2.continue = !t4._zod.def.abort), r2.issues.push(s.sn(n2));
        }
      }, e3(r2.value, r2)));
      return t4;
    })(t3)), e2.overwrite = (t3) => e2.check(c.bS(t3)), e2.optional = () => Ee(e2), e2.nullable = () => Ce(e2), e2.nullish = () => Ee(Ce(e2)), e2.nonoptional = (t3) => (function(e3, t4) {
      return new Pe({ type: "nonoptional", innerType: e3, ...s.A2(t4) });
    })(e2, t3), e2.array = () => ie(e2), e2.or = (t3) => de([e2, t3]), e2.and = (t3) => fe(e2, t3), e2.transform = (t3) => Oe(e2, xe(t3)), e2.default = (t3) => {
      return r2 = t3, new Ie({ type: "default", innerType: e2, get defaultValue() {
        return "function" == typeof r2 ? r2() : r2;
      } });
      var r2;
    }, e2.prefault = (t3) => {
      return r2 = t3, new Ae({ type: "prefault", innerType: e2, get defaultValue() {
        return "function" == typeof r2 ? r2() : r2;
      } });
      var r2;
    }, e2.catch = (t3) => {
      return new Me({ type: "catch", innerType: e2, catchValue: "function" == typeof (r2 = t3) ? r2 : () => r2 });
      var r2;
    }, e2.pipe = (t3) => Oe(e2, t3), e2.readonly = () => new De({ type: "readonly", innerType: e2 }), e2.describe = (t3) => {
      const r2 = e2.clone();
      return l.add(r2, { description: t3 }), r2;
    }, Object.defineProperty(e2, "description", { get: () => l.get(e2)?.description, configurable: true }), e2.meta = (...t3) => {
      if (0 === t3.length) return l.get(e2);
      const r2 = e2.clone();
      return l.add(r2, t3[0]), r2;
    }, e2.isOptional = () => e2.safeParse(void 0).success, e2.isNullable = () => e2.safeParse(null).success, e2)), _ = n.xI("_ZodString", (e2, t2) => {
      o.$v.init(e2, t2), b.init(e2, t2);
      const r2 = e2._zod.bag;
      e2.format = r2.format ?? null, e2.minLength = r2.minimum ?? null, e2.maxLength = r2.maximum ?? null, e2.regex = (...t3) => e2.check(c.Fk(...t3)), e2.includes = (...t3) => e2.check(c.dR(...t3)), e2.startsWith = (...t3) => e2.check(c.$S(...t3)), e2.endsWith = (...t3) => e2.check(c.ER(...t3)), e2.min = (...t3) => e2.check(c.m9(...t3)), e2.max = (...t3) => e2.check(c.Eb(...t3)), e2.length = (...t3) => e2.check(c.YA(...t3)), e2.nonempty = (...t3) => e2.check(c.m9(1, ...t3)), e2.lowercase = (t3) => e2.check(c.hH(t3)), e2.uppercase = (t3) => e2.check(c.qF(t3)), e2.trim = () => e2.check(c.WN()), e2.normalize = (...t3) => e2.check(c.lo(...t3)), e2.toLowerCase = () => e2.check(c.Il()), e2.toUpperCase = () => e2.check(c.xY());
    }), S = n.xI("ZodString", (e2, t2) => {
      o.$v.init(e2, t2), _.init(e2, t2), e2.email = (t3) => e2.check(c.Mu(E, t3)), e2.url = (t3) => e2.check(c.Fn(I, t3)), e2.jwt = (t3) => e2.check(c.rk(z, t3)), e2.emoji = (t3) => e2.check(c.aC(P, t3)), e2.guid = (t3) => e2.check(c.tB(T, t3)), e2.uuid = (t3) => e2.check(c.Be(C, t3)), e2.uuidv4 = (t3) => e2.check(c.nA(C, t3)), e2.uuidv6 = (t3) => e2.check(c.pY(C, t3)), e2.uuidv7 = (t3) => e2.check(c.wA(C, t3)), e2.nanoid = (t3) => e2.check(c.Dl(M, t3)), e2.guid = (t3) => e2.check(c.tB(T, t3)), e2.cuid = (t3) => e2.check(c.fs(R, t3)), e2.cuid2 = (t3) => e2.check(c.Bj(O, t3)), e2.ulid = (t3) => e2.check(c.Ct(D, t3)), e2.base64 = (t3) => e2.check(c.rt(q, t3)), e2.base64url = (t3) => e2.check(c.cU(j, t3)), e2.xid = (t3) => e2.check(c.Pw(N, t3)), e2.ksuid = (t3) => e2.check(c._z(F, t3)), e2.ipv4 = (t3) => e2.check(c.Ny(L, t3)), e2.ipv6 = (t3) => e2.check(c.$O(U, t3)), e2.cidrv4 = (t3) => e2.check(c.Uy(B, t3)), e2.cidrv6 = (t3) => e2.check(c.gP($, t3)), e2.e164 = (t3) => e2.check(c.KB(J, t3)), e2.datetime = (t3) => e2.check(d.w$(t3)), e2.date = (t3) => e2.check(d.p6(t3)), e2.time = (t3) => e2.check(d.kB(t3)), e2.duration = (t3) => e2.check(d.p0(t3));
    });
    function x(e2) {
      return c.Rl(S, e2);
    }
    const k = n.xI("ZodStringFormat", (e2, t2) => {
      o.EY.init(e2, t2), _.init(e2, t2);
    }), E = n.xI("ZodEmail", (e2, t2) => {
      o.qG.init(e2, t2), k.init(e2, t2);
    });
    const T = n.xI("ZodGUID", (e2, t2) => {
      o.Zc.init(e2, t2), k.init(e2, t2);
    });
    const C = n.xI("ZodUUID", (e2, t2) => {
      o.Zn.init(e2, t2), k.init(e2, t2);
    });
    const I = n.xI("ZodURL", (e2, t2) => {
      o.VY.init(e2, t2), k.init(e2, t2);
    });
    function A(e2) {
      return c.Fn(I, e2);
    }
    const P = n.xI("ZodEmoji", (e2, t2) => {
      o.cG.init(e2, t2), k.init(e2, t2);
    });
    const M = n.xI("ZodNanoID", (e2, t2) => {
      o.Py.init(e2, t2), k.init(e2, t2);
    });
    const R = n.xI("ZodCUID", (e2, t2) => {
      o.bl.init(e2, t2), k.init(e2, t2);
    });
    const O = n.xI("ZodCUID2", (e2, t2) => {
      o.Zu.init(e2, t2), k.init(e2, t2);
    });
    const D = n.xI("ZodULID", (e2, t2) => {
      o.g5.init(e2, t2), k.init(e2, t2);
    });
    const N = n.xI("ZodXID", (e2, t2) => {
      o.TF.init(e2, t2), k.init(e2, t2);
    });
    const F = n.xI("ZodKSUID", (e2, t2) => {
      o.GY.init(e2, t2), k.init(e2, t2);
    });
    const L = n.xI("ZodIPv4", (e2, t2) => {
      o.Lc.init(e2, t2), k.init(e2, t2);
    });
    const U = n.xI("ZodIPv6", (e2, t2) => {
      o.Zy.init(e2, t2), k.init(e2, t2);
    });
    const B = n.xI("ZodCIDRv4", (e2, t2) => {
      o.CI.init(e2, t2), k.init(e2, t2);
    });
    const $ = n.xI("ZodCIDRv6", (e2, t2) => {
      o.Cn.init(e2, t2), k.init(e2, t2);
    });
    const q = n.xI("ZodBase64", (e2, t2) => {
      o.Dq.init(e2, t2), k.init(e2, t2);
    });
    const j = n.xI("ZodBase64URL", (e2, t2) => {
      o.CQ.init(e2, t2), k.init(e2, t2);
    });
    const J = n.xI("ZodE164", (e2, t2) => {
      o.Oy.init(e2, t2), k.init(e2, t2);
    });
    const z = n.xI("ZodJWT", (e2, t2) => {
      o.h8.init(e2, t2), k.init(e2, t2);
    });
    const H = n.xI("ZodNumber", (e2, t2) => {
      o.vz.init(e2, t2), b.init(e2, t2), e2.gt = (t3, r3) => e2.check(c.Tx(t3, r3)), e2.gte = (t3, r3) => e2.check(c.qm(t3, r3)), e2.min = (t3, r3) => e2.check(c.qm(t3, r3)), e2.lt = (t3, r3) => e2.check(c.Au(t3, r3)), e2.lte = (t3, r3) => e2.check(c.Zm(t3, r3)), e2.max = (t3, r3) => e2.check(c.Zm(t3, r3)), e2.int = (t3) => e2.check(Y(t3)), e2.safe = (t3) => e2.check(Y(t3)), e2.positive = (t3) => e2.check(c.Tx(0, t3)), e2.nonnegative = (t3) => e2.check(c.qm(0, t3)), e2.negative = (t3) => e2.check(c.Au(0, t3)), e2.nonpositive = (t3) => e2.check(c.Zm(0, t3)), e2.multipleOf = (t3, r3) => e2.check(c.Hi(t3, r3)), e2.step = (t3, r3) => e2.check(c.Hi(t3, r3)), e2.finite = () => e2;
      const r2 = e2._zod.bag;
      e2.minValue = Math.max(r2.minimum ?? Number.NEGATIVE_INFINITY, r2.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e2.maxValue = Math.min(r2.maximum ?? Number.POSITIVE_INFINITY, r2.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e2.isInt = (r2.format ?? "").includes("int") || Number.isSafeInteger(r2.multipleOf ?? 0.5), e2.isFinite = true, e2.format = r2.format ?? null;
    });
    function W(e2) {
      return c.F7(H, e2);
    }
    const G = n.xI("ZodNumberFormat", (e2, t2) => {
      o.I.init(e2, t2), H.init(e2, t2);
    });
    function Y(e2) {
      return c.LK(G, e2);
    }
    const V = n.xI("ZodBoolean", (e2, t2) => {
      o.sF.init(e2, t2), b.init(e2, t2);
    });
    function K(e2) {
      return c._L(V, e2);
    }
    const Z = n.xI("ZodNull", (e2, t2) => {
      o.x8.init(e2, t2), b.init(e2, t2);
    });
    function X(e2) {
      return c.jw(Z, e2);
    }
    const Q = n.xI("ZodAny", (e2, t2) => {
      o.Gb.init(e2, t2), b.init(e2, t2);
    });
    function ee() {
      return c.KA(Q);
    }
    const te = n.xI("ZodUnknown", (e2, t2) => {
      o.GP.init(e2, t2), b.init(e2, t2);
    });
    function re() {
      return c.em(te);
    }
    const ne = n.xI("ZodNever", (e2, t2) => {
      o.Um.init(e2, t2), b.init(e2, t2);
    });
    function oe(e2) {
      return c.G8(ne, e2);
    }
    const se = n.xI("ZodArray", (e2, t2) => {
      o.$p.init(e2, t2), b.init(e2, t2), e2.element = t2.element, e2.min = (t3, r2) => e2.check(c.m9(t3, r2)), e2.nonempty = (t3) => e2.check(c.m9(1, t3)), e2.max = (t3, r2) => e2.check(c.Eb(t3, r2)), e2.length = (t3, r2) => e2.check(c.YA(t3, r2)), e2.unwrap = () => e2.element;
    });
    function ie(e2, t2) {
      return c.dZ(se, e2, t2);
    }
    const ae = n.xI("ZodObject", (e2, t2) => {
      o.L8.init(e2, t2), b.init(e2, t2), s.gJ(e2, "shape", () => t2.shape), e2.keyof = () => we(Object.keys(e2._zod.def.shape)), e2.catchall = (t3) => e2.clone({ ...e2._zod.def, catchall: t3 }), e2.passthrough = () => e2.clone({ ...e2._zod.def, catchall: re() }), e2.loose = () => e2.clone({ ...e2._zod.def, catchall: re() }), e2.strict = () => e2.clone({ ...e2._zod.def, catchall: oe() }), e2.strip = () => e2.clone({ ...e2._zod.def, catchall: void 0 }), e2.extend = (t3) => s.X$(e2, t3), e2.merge = (t3) => s.h1(e2, t3), e2.pick = (t3) => s.Up(e2, t3), e2.omit = (t3) => s.cJ(e2, t3), e2.partial = (...t3) => s.OH(ke, e2, t3[0]), e2.required = (...t3) => s.mw(Pe, e2, t3[0]);
    });
    function le(e2, t2) {
      const r2 = { type: "object", get shape() {
        return s.Vy(this, "shape", { ...e2 }), this.shape;
      }, ...s.A2(t2) };
      return new ae(r2);
    }
    function ce(e2, t2) {
      return new ae({ type: "object", get shape() {
        return s.Vy(this, "shape", { ...e2 }), this.shape;
      }, catchall: re(), ...s.A2(t2) });
    }
    const ue = n.xI("ZodUnion", (e2, t2) => {
      o.cu.init(e2, t2), b.init(e2, t2), e2.options = t2.options;
    });
    function de(e2, t2) {
      return new ue({ type: "union", options: e2, ...s.A2(t2) });
    }
    const pe = n.xI("ZodDiscriminatedUnion", (e2, t2) => {
      ue.init(e2, t2), o.P0.init(e2, t2);
    });
    function he(e2, t2, r2) {
      return new pe({ type: "union", options: t2, discriminator: e2, ...s.A2(r2) });
    }
    const me = n.xI("ZodIntersection", (e2, t2) => {
      o.LJ.init(e2, t2), b.init(e2, t2);
    });
    function fe(e2, t2) {
      return new me({ type: "intersection", left: e2, right: t2 });
    }
    const ge = n.xI("ZodRecord", (e2, t2) => {
      o.h.init(e2, t2), b.init(e2, t2), e2.keyType = t2.keyType, e2.valueType = t2.valueType;
    });
    function ye(e2, t2, r2) {
      return new ge({ type: "record", keyType: e2, valueType: t2, ...s.A2(r2) });
    }
    const ve = n.xI("ZodEnum", (e2, t2) => {
      o.VO.init(e2, t2), b.init(e2, t2), e2.enum = t2.entries, e2.options = Object.values(t2.entries);
      const r2 = new Set(Object.keys(t2.entries));
      e2.extract = (e3, n2) => {
        const o2 = {};
        for (const n3 of e3) {
          if (!r2.has(n3)) throw new Error(`Key ${n3} not found in enum`);
          o2[n3] = t2.entries[n3];
        }
        return new ve({ ...t2, checks: [], ...s.A2(n2), entries: o2 });
      }, e2.exclude = (e3, n2) => {
        const o2 = { ...t2.entries };
        for (const t3 of e3) {
          if (!r2.has(t3)) throw new Error(`Key ${t3} not found in enum`);
          delete o2[t3];
        }
        return new ve({ ...t2, checks: [], ...s.A2(n2), entries: o2 });
      };
    });
    function we(e2, t2) {
      const r2 = Array.isArray(e2) ? Object.fromEntries(e2.map((e3) => [e3, e3])) : e2;
      return new ve({ type: "enum", entries: r2, ...s.A2(t2) });
    }
    const be = n.xI("ZodLiteral", (e2, t2) => {
      o.nu.init(e2, t2), b.init(e2, t2), e2.values = new Set(t2.values), Object.defineProperty(e2, "value", { get() {
        if (t2.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t2.values[0];
      } });
    });
    function _e(e2, t2) {
      return new be({ type: "literal", values: Array.isArray(e2) ? e2 : [e2], ...s.A2(t2) });
    }
    const Se = n.xI("ZodTransform", (e2, t2) => {
      o.Wc.init(e2, t2), b.init(e2, t2), e2._zod.parse = (r2, n2) => {
        r2.addIssue = (n3) => {
          if ("string" == typeof n3) r2.issues.push(s.sn(n3, r2.value, t2));
          else {
            const t3 = n3;
            t3.fatal && (t3.continue = false), t3.code ?? (t3.code = "custom"), t3.input ?? (t3.input = r2.value), t3.inst ?? (t3.inst = e2), t3.continue ?? (t3.continue = true), r2.issues.push(s.sn(t3));
          }
        };
        const o2 = t2.transform(r2.value, r2);
        return o2 instanceof Promise ? o2.then((e3) => (r2.value = e3, r2)) : (r2.value = o2, r2);
      };
    });
    function xe(e2) {
      return new Se({ type: "transform", transform: e2 });
    }
    const ke = n.xI("ZodOptional", (e2, t2) => {
      o.ig.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Ee(e2) {
      return new ke({ type: "optional", innerType: e2 });
    }
    const Te = n.xI("ZodNullable", (e2, t2) => {
      o.qc.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Ce(e2) {
      return new Te({ type: "nullable", innerType: e2 });
    }
    const Ie = n.xI("ZodDefault", (e2, t2) => {
      o.rv.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType, e2.removeDefault = e2.unwrap;
    });
    const Ae = n.xI("ZodPrefault", (e2, t2) => {
      o.VF.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    const Pe = n.xI("ZodNonOptional", (e2, t2) => {
      o.N$.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    const Me = n.xI("ZodCatch", (e2, t2) => {
      o.t$.init(e2, t2), b.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType, e2.removeCatch = e2.unwrap;
    });
    const Re = n.xI("ZodPipe", (e2, t2) => {
      o._m.init(e2, t2), b.init(e2, t2), e2.in = t2.in, e2.out = t2.out;
    });
    function Oe(e2, t2) {
      return new Re({ type: "pipe", in: e2, out: t2 });
    }
    const De = n.xI("ZodReadonly", (e2, t2) => {
      o.Sb.init(e2, t2), b.init(e2, t2);
    });
    const Ne = n.xI("ZodCustom", (e2, t2) => {
      o.b0.init(e2, t2), b.init(e2, t2);
    });
    function Fe(e2, t2) {
      return c.FO(Ne, e2 ?? (() => true), t2);
    }
    function Le(e2, t2) {
      return Oe(xe(e2), t2);
    }
  }