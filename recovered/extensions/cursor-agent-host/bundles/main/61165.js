// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61165 range:9341702..9359058
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61165: (e, t, r) => {
    "use strict";
    r.d(t, { rS: () => G, EB: () => E, bz: () => ee, YO: () => ie, zM: () => K, Ie: () => De, gM: () => me, k5: () => ve, E$: () => fe, eu: () => Ae, _H: () => le, ch: () => Z, ai: () => H, Ik: () => ce, lq: () => Ie, vk: () => Oe, g1: () => ye, Yj: () => b, KC: () => de, L5: () => re, OZ: () => T });
    var n = r(47381), s = r(25521), o = r(7246);
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
    const c = a();
    var l = r(87888), u = r(39567), d = r(78880), p = r(4287), m = r(6749);
    const h = (e2, t2) => {
      m.a$.init(e2, t2), e2.name = "ZodError", Object.defineProperties(e2, { format: { value: (t3) => m.Wk(e2, t3) }, flatten: { value: (t3) => m.JM(e2, t3) }, addIssue: { value: (t3) => e2.issues.push(t3) }, addIssues: { value: (t3) => e2.issues.push(...t3) }, isEmpty: { get: () => 0 === e2.issues.length } });
    }, f = (n.xI("ZodError", h), n.xI("ZodError", h, { Parent: Error })), g = p.Tj(f), y = p.Rb(f), w = p.Od(f), v = p.wG(f), _ = n.xI("ZodType", (e2, t2) => (s.W4.init(e2, t2), e2.def = t2, Object.defineProperty(e2, "_def", { value: t2 }), e2.check = (...r2) => e2.clone({ ...t2, checks: [...t2.checks ?? [], ...r2.map((e3) => "function" == typeof e3 ? { _zod: { check: e3, def: { check: "custom" }, onattach: [] } } : e3)] }), e2.clone = (t3, r2) => o.o8(e2, t3, r2), e2.brand = () => e2, e2.register = (t3, r2) => (t3.add(e2, r2), e2), e2.parse = (t3, r2) => g(e2, t3, r2, { callee: e2.parse }), e2.safeParse = (t3, r2) => w(e2, t3, r2), e2.parseAsync = async (t3, r2) => y(e2, t3, r2, { callee: e2.parseAsync }), e2.safeParseAsync = async (t3, r2) => v(e2, t3, r2), e2.spa = e2.safeParseAsync, e2.refine = (t3, r2) => e2.check((function(e3, t4 = {}) {
      return l.fU(qe, e3, t4);
    })(t3, r2)), e2.superRefine = (t3) => e2.check((function(e3) {
      const t4 = (function(e4) {
        const t5 = new u.QP({ check: "custom" });
        return t5._zod.check = e4, t5;
      })((r2) => (r2.addIssue = (e4) => {
        if ("string" == typeof e4) r2.issues.push(o.sn(e4, r2.value, t4._zod.def));
        else {
          const n2 = e4;
          n2.fatal && (n2.continue = false), n2.code ?? (n2.code = "custom"), n2.input ?? (n2.input = r2.value), n2.inst ?? (n2.inst = t4), n2.continue ?? (n2.continue = !t4._zod.def.abort), r2.issues.push(o.sn(n2));
        }
      }, e3(r2.value, r2)));
      return t4;
    })(t3)), e2.overwrite = (t3) => e2.check(l.bS(t3)), e2.optional = () => Ie(e2), e2.nullable = () => ke(e2), e2.nullish = () => Ie(ke(e2)), e2.nonoptional = (t3) => (function(e3, t4) {
      return new Re({ type: "nonoptional", innerType: e3, ...o.A2(t4) });
    })(e2, t3), e2.array = () => ie(e2), e2.or = (t3) => de([e2, t3]), e2.and = (t3) => fe(e2, t3), e2.transform = (t3) => Je(e2, be(t3)), e2.default = (t3) => {
      return r2 = t3, new xe({ type: "default", innerType: e2, get defaultValue() {
        return "function" == typeof r2 ? r2() : r2;
      } });
      var r2;
    }, e2.prefault = (t3) => {
      return r2 = t3, new Te({ type: "prefault", innerType: e2, get defaultValue() {
        return "function" == typeof r2 ? r2() : r2;
      } });
      var r2;
    }, e2.catch = (t3) => {
      return new Be({ type: "catch", innerType: e2, catchValue: "function" == typeof (r2 = t3) ? r2 : () => r2 });
      var r2;
    }, e2.pipe = (t3) => Je(e2, t3), e2.readonly = () => new Me({ type: "readonly", innerType: e2 }), e2.describe = (t3) => {
      const r2 = e2.clone();
      return c.add(r2, { description: t3 }), r2;
    }, Object.defineProperty(e2, "description", { get: () => c.get(e2)?.description, configurable: true }), e2.meta = (...t3) => {
      if (0 === t3.length) return c.get(e2);
      const r2 = e2.clone();
      return c.add(r2, t3[0]), r2;
    }, e2.isOptional = () => e2.safeParse(void 0).success, e2.isNullable = () => e2.safeParse(null).success, e2)), A = n.xI("_ZodString", (e2, t2) => {
      s.$v.init(e2, t2), _.init(e2, t2);
      const r2 = e2._zod.bag;
      e2.format = r2.format ?? null, e2.minLength = r2.minimum ?? null, e2.maxLength = r2.maximum ?? null, e2.regex = (...t3) => e2.check(l.Fk(...t3)), e2.includes = (...t3) => e2.check(l.dR(...t3)), e2.startsWith = (...t3) => e2.check(l.$S(...t3)), e2.endsWith = (...t3) => e2.check(l.ER(...t3)), e2.min = (...t3) => e2.check(l.m9(...t3)), e2.max = (...t3) => e2.check(l.Eb(...t3)), e2.length = (...t3) => e2.check(l.YA(...t3)), e2.nonempty = (...t3) => e2.check(l.m9(1, ...t3)), e2.lowercase = (t3) => e2.check(l.hH(t3)), e2.uppercase = (t3) => e2.check(l.qF(t3)), e2.trim = () => e2.check(l.WN()), e2.normalize = (...t3) => e2.check(l.lo(...t3)), e2.toLowerCase = () => e2.check(l.Il()), e2.toUpperCase = () => e2.check(l.xY());
    }), S = n.xI("ZodString", (e2, t2) => {
      s.$v.init(e2, t2), A.init(e2, t2), e2.email = (t3) => e2.check(l.Mu(I, t3)), e2.url = (t3) => e2.check(l.Fn(x, t3)), e2.jwt = (t3) => e2.check(l.rk(j, t3)), e2.emoji = (t3) => e2.check(l.aC(R, t3)), e2.guid = (t3) => e2.check(l.tB(C, t3)), e2.uuid = (t3) => e2.check(l.Be(k, t3)), e2.uuidv4 = (t3) => e2.check(l.nA(k, t3)), e2.uuidv6 = (t3) => e2.check(l.pY(k, t3)), e2.uuidv7 = (t3) => e2.check(l.wA(k, t3)), e2.nanoid = (t3) => e2.check(l.Dl(B, t3)), e2.guid = (t3) => e2.check(l.tB(C, t3)), e2.cuid = (t3) => e2.check(l.fs(P, t3)), e2.cuid2 = (t3) => e2.check(l.Bj(J, t3)), e2.ulid = (t3) => e2.check(l.Ct(M, t3)), e2.base64 = (t3) => e2.check(l.rt(L, t3)), e2.base64url = (t3) => e2.check(l.cU($, t3)), e2.xid = (t3) => e2.check(l.Pw(q, t3)), e2.ksuid = (t3) => e2.check(l._z(D, t3)), e2.ipv4 = (t3) => e2.check(l.Ny(O, t3)), e2.ipv6 = (t3) => e2.check(l.$O(N, t3)), e2.cidrv4 = (t3) => e2.check(l.Uy(F, t3)), e2.cidrv6 = (t3) => e2.check(l.gP(U, t3)), e2.e164 = (t3) => e2.check(l.KB(Q, t3)), e2.datetime = (t3) => e2.check(d.w$(t3)), e2.date = (t3) => e2.check(d.p6(t3)), e2.time = (t3) => e2.check(d.kB(t3)), e2.duration = (t3) => e2.check(d.p0(t3));
    });
    function b(e2) {
      return l.Rl(S, e2);
    }
    const E = n.xI("ZodStringFormat", (e2, t2) => {
      s.EY.init(e2, t2), A.init(e2, t2);
    }), I = n.xI("ZodEmail", (e2, t2) => {
      s.qG.init(e2, t2), E.init(e2, t2);
    });
    const C = n.xI("ZodGUID", (e2, t2) => {
      s.Zc.init(e2, t2), E.init(e2, t2);
    });
    const k = n.xI("ZodUUID", (e2, t2) => {
      s.Zn.init(e2, t2), E.init(e2, t2);
    });
    const x = n.xI("ZodURL", (e2, t2) => {
      s.VY.init(e2, t2), E.init(e2, t2);
    });
    function T(e2) {
      return l.Fn(x, e2);
    }
    const R = n.xI("ZodEmoji", (e2, t2) => {
      s.cG.init(e2, t2), E.init(e2, t2);
    });
    const B = n.xI("ZodNanoID", (e2, t2) => {
      s.Py.init(e2, t2), E.init(e2, t2);
    });
    const P = n.xI("ZodCUID", (e2, t2) => {
      s.bl.init(e2, t2), E.init(e2, t2);
    });
    const J = n.xI("ZodCUID2", (e2, t2) => {
      s.Zu.init(e2, t2), E.init(e2, t2);
    });
    const M = n.xI("ZodULID", (e2, t2) => {
      s.g5.init(e2, t2), E.init(e2, t2);
    });
    const q = n.xI("ZodXID", (e2, t2) => {
      s.TF.init(e2, t2), E.init(e2, t2);
    });
    const D = n.xI("ZodKSUID", (e2, t2) => {
      s.GY.init(e2, t2), E.init(e2, t2);
    });
    const O = n.xI("ZodIPv4", (e2, t2) => {
      s.Lc.init(e2, t2), E.init(e2, t2);
    });
    const N = n.xI("ZodIPv6", (e2, t2) => {
      s.Zy.init(e2, t2), E.init(e2, t2);
    });
    const F = n.xI("ZodCIDRv4", (e2, t2) => {
      s.CI.init(e2, t2), E.init(e2, t2);
    });
    const U = n.xI("ZodCIDRv6", (e2, t2) => {
      s.Cn.init(e2, t2), E.init(e2, t2);
    });
    const L = n.xI("ZodBase64", (e2, t2) => {
      s.Dq.init(e2, t2), E.init(e2, t2);
    });
    const $ = n.xI("ZodBase64URL", (e2, t2) => {
      s.CQ.init(e2, t2), E.init(e2, t2);
    });
    const Q = n.xI("ZodE164", (e2, t2) => {
      s.Oy.init(e2, t2), E.init(e2, t2);
    });
    const j = n.xI("ZodJWT", (e2, t2) => {
      s.h8.init(e2, t2), E.init(e2, t2);
    });
    const G = n.xI("ZodNumber", (e2, t2) => {
      s.vz.init(e2, t2), _.init(e2, t2), e2.gt = (t3, r3) => e2.check(l.Tx(t3, r3)), e2.gte = (t3, r3) => e2.check(l.qm(t3, r3)), e2.min = (t3, r3) => e2.check(l.qm(t3, r3)), e2.lt = (t3, r3) => e2.check(l.Au(t3, r3)), e2.lte = (t3, r3) => e2.check(l.Zm(t3, r3)), e2.max = (t3, r3) => e2.check(l.Zm(t3, r3)), e2.int = (t3) => e2.check(W(t3)), e2.safe = (t3) => e2.check(W(t3)), e2.positive = (t3) => e2.check(l.Tx(0, t3)), e2.nonnegative = (t3) => e2.check(l.qm(0, t3)), e2.negative = (t3) => e2.check(l.Au(0, t3)), e2.nonpositive = (t3) => e2.check(l.Zm(0, t3)), e2.multipleOf = (t3, r3) => e2.check(l.Hi(t3, r3)), e2.step = (t3, r3) => e2.check(l.Hi(t3, r3)), e2.finite = () => e2;
      const r2 = e2._zod.bag;
      e2.minValue = Math.max(r2.minimum ?? Number.NEGATIVE_INFINITY, r2.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e2.maxValue = Math.min(r2.maximum ?? Number.POSITIVE_INFINITY, r2.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e2.isInt = (r2.format ?? "").includes("int") || Number.isSafeInteger(r2.multipleOf ?? 0.5), e2.isFinite = true, e2.format = r2.format ?? null;
    });
    function H(e2) {
      return l.F7(G, e2);
    }
    const z = n.xI("ZodNumberFormat", (e2, t2) => {
      s.I.init(e2, t2), G.init(e2, t2);
    });
    function W(e2) {
      return l.LK(z, e2);
    }
    const V = n.xI("ZodBoolean", (e2, t2) => {
      s.sF.init(e2, t2), _.init(e2, t2);
    });
    function K(e2) {
      return l._L(V, e2);
    }
    const Y = n.xI("ZodNull", (e2, t2) => {
      s.x8.init(e2, t2), _.init(e2, t2);
    });
    function Z(e2) {
      return l.jw(Y, e2);
    }
    const X = n.xI("ZodAny", (e2, t2) => {
      s.Gb.init(e2, t2), _.init(e2, t2);
    });
    function ee() {
      return l.KA(X);
    }
    const te = n.xI("ZodUnknown", (e2, t2) => {
      s.GP.init(e2, t2), _.init(e2, t2);
    });
    function re() {
      return l.em(te);
    }
    const ne = n.xI("ZodNever", (e2, t2) => {
      s.Um.init(e2, t2), _.init(e2, t2);
    });
    function se(e2) {
      return l.G8(ne, e2);
    }
    const oe = n.xI("ZodArray", (e2, t2) => {
      s.$p.init(e2, t2), _.init(e2, t2), e2.element = t2.element, e2.min = (t3, r2) => e2.check(l.m9(t3, r2)), e2.nonempty = (t3) => e2.check(l.m9(1, t3)), e2.max = (t3, r2) => e2.check(l.Eb(t3, r2)), e2.length = (t3, r2) => e2.check(l.YA(t3, r2)), e2.unwrap = () => e2.element;
    });
    function ie(e2, t2) {
      return l.dZ(oe, e2, t2);
    }
    const ae = n.xI("ZodObject", (e2, t2) => {
      s.L8.init(e2, t2), _.init(e2, t2), o.gJ(e2, "shape", () => t2.shape), e2.keyof = () => ve(Object.keys(e2._zod.def.shape)), e2.catchall = (t3) => e2.clone({ ...e2._zod.def, catchall: t3 }), e2.passthrough = () => e2.clone({ ...e2._zod.def, catchall: re() }), e2.loose = () => e2.clone({ ...e2._zod.def, catchall: re() }), e2.strict = () => e2.clone({ ...e2._zod.def, catchall: se() }), e2.strip = () => e2.clone({ ...e2._zod.def, catchall: void 0 }), e2.extend = (t3) => o.X$(e2, t3), e2.merge = (t3) => o.h1(e2, t3), e2.pick = (t3) => o.Up(e2, t3), e2.omit = (t3) => o.cJ(e2, t3), e2.partial = (...t3) => o.OH(Ee, e2, t3[0]), e2.required = (...t3) => o.mw(Re, e2, t3[0]);
    });
    function ce(e2, t2) {
      const r2 = { type: "object", get shape() {
        return o.Vy(this, "shape", { ...e2 }), this.shape;
      }, ...o.A2(t2) };
      return new ae(r2);
    }
    function le(e2, t2) {
      return new ae({ type: "object", get shape() {
        return o.Vy(this, "shape", { ...e2 }), this.shape;
      }, catchall: re(), ...o.A2(t2) });
    }
    const ue = n.xI("ZodUnion", (e2, t2) => {
      s.cu.init(e2, t2), _.init(e2, t2), e2.options = t2.options;
    });
    function de(e2, t2) {
      return new ue({ type: "union", options: e2, ...o.A2(t2) });
    }
    const pe = n.xI("ZodDiscriminatedUnion", (e2, t2) => {
      ue.init(e2, t2), s.P0.init(e2, t2);
    });
    function me(e2, t2, r2) {
      return new pe({ type: "union", options: t2, discriminator: e2, ...o.A2(r2) });
    }
    const he = n.xI("ZodIntersection", (e2, t2) => {
      s.LJ.init(e2, t2), _.init(e2, t2);
    });
    function fe(e2, t2) {
      return new he({ type: "intersection", left: e2, right: t2 });
    }
    const ge = n.xI("ZodRecord", (e2, t2) => {
      s.h.init(e2, t2), _.init(e2, t2), e2.keyType = t2.keyType, e2.valueType = t2.valueType;
    });
    function ye(e2, t2, r2) {
      return new ge({ type: "record", keyType: e2, valueType: t2, ...o.A2(r2) });
    }
    const we = n.xI("ZodEnum", (e2, t2) => {
      s.VO.init(e2, t2), _.init(e2, t2), e2.enum = t2.entries, e2.options = Object.values(t2.entries);
      const r2 = new Set(Object.keys(t2.entries));
      e2.extract = (e3, n2) => {
        const s2 = {};
        for (const n3 of e3) {
          if (!r2.has(n3)) throw new Error(`Key ${n3} not found in enum`);
          s2[n3] = t2.entries[n3];
        }
        return new we({ ...t2, checks: [], ...o.A2(n2), entries: s2 });
      }, e2.exclude = (e3, n2) => {
        const s2 = { ...t2.entries };
        for (const t3 of e3) {
          if (!r2.has(t3)) throw new Error(`Key ${t3} not found in enum`);
          delete s2[t3];
        }
        return new we({ ...t2, checks: [], ...o.A2(n2), entries: s2 });
      };
    });
    function ve(e2, t2) {
      const r2 = Array.isArray(e2) ? Object.fromEntries(e2.map((e3) => [e3, e3])) : e2;
      return new we({ type: "enum", entries: r2, ...o.A2(t2) });
    }
    const _e = n.xI("ZodLiteral", (e2, t2) => {
      s.nu.init(e2, t2), _.init(e2, t2), e2.values = new Set(t2.values), Object.defineProperty(e2, "value", { get() {
        if (t2.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t2.values[0];
      } });
    });
    function Ae(e2, t2) {
      return new _e({ type: "literal", values: Array.isArray(e2) ? e2 : [e2], ...o.A2(t2) });
    }
    const Se = n.xI("ZodTransform", (e2, t2) => {
      s.Wc.init(e2, t2), _.init(e2, t2), e2._zod.parse = (r2, n2) => {
        r2.addIssue = (n3) => {
          if ("string" == typeof n3) r2.issues.push(o.sn(n3, r2.value, t2));
          else {
            const t3 = n3;
            t3.fatal && (t3.continue = false), t3.code ?? (t3.code = "custom"), t3.input ?? (t3.input = r2.value), t3.inst ?? (t3.inst = e2), t3.continue ?? (t3.continue = true), r2.issues.push(o.sn(t3));
          }
        };
        const s2 = t2.transform(r2.value, r2);
        return s2 instanceof Promise ? s2.then((e3) => (r2.value = e3, r2)) : (r2.value = s2, r2);
      };
    });
    function be(e2) {
      return new Se({ type: "transform", transform: e2 });
    }
    const Ee = n.xI("ZodOptional", (e2, t2) => {
      s.ig.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Ie(e2) {
      return new Ee({ type: "optional", innerType: e2 });
    }
    const Ce = n.xI("ZodNullable", (e2, t2) => {
      s.qc.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function ke(e2) {
      return new Ce({ type: "nullable", innerType: e2 });
    }
    const xe = n.xI("ZodDefault", (e2, t2) => {
      s.rv.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType, e2.removeDefault = e2.unwrap;
    });
    const Te = n.xI("ZodPrefault", (e2, t2) => {
      s.VF.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    const Re = n.xI("ZodNonOptional", (e2, t2) => {
      s.N$.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType;
    });
    const Be = n.xI("ZodCatch", (e2, t2) => {
      s.t$.init(e2, t2), _.init(e2, t2), e2.unwrap = () => e2._zod.def.innerType, e2.removeCatch = e2.unwrap;
    });
    const Pe = n.xI("ZodPipe", (e2, t2) => {
      s._m.init(e2, t2), _.init(e2, t2), e2.in = t2.in, e2.out = t2.out;
    });
    function Je(e2, t2) {
      return new Pe({ type: "pipe", in: e2, out: t2 });
    }
    const Me = n.xI("ZodReadonly", (e2, t2) => {
      s.Sb.init(e2, t2), _.init(e2, t2);
    });
    const qe = n.xI("ZodCustom", (e2, t2) => {
      s.b0.init(e2, t2), _.init(e2, t2);
    });
    function De(e2, t2) {
      return l.FO(qe, e2 ?? (() => true), t2);
    }
    function Oe(e2, t2) {
      return Je(be(e2), t2);
    }
  }