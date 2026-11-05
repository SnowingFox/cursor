// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 81958 range:7366119..7440374
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81958: (e, t, r) => {
    "use strict";
    r.d(t, { kY: () => De, bv: () => ae, Ii: () => ke, ND: () => W, bz: () => $e, YO: () => Je, zM: () => Ue, Ie: () => Oe, gM: () => We, k5: () => Ze, Nl: () => Ne, RZ: () => Ve, eu: () => Ke, fc: () => Xe, Zm: () => je, ch: () => Be, ai: () => Le, Ik: () => ze, lq: () => Qe, vk: () => et, g1: () => Ye, Yj: () => Fe, PV: () => Ge, KC: () => He, L5: () => qe });
    var n = r(82590), o = r(98517);
    const s = (e2, t2) => {
      let r2;
      switch (e2.code) {
        case n.eq.invalid_type:
          r2 = e2.received === o.Zp.undefined ? "Required" : `Expected ${e2.expected}, received ${e2.received}`;
          break;
        case n.eq.invalid_literal:
          r2 = `Invalid literal value, expected ${JSON.stringify(e2.expected, o.ZS.jsonStringifyReplacer)}`;
          break;
        case n.eq.unrecognized_keys:
          r2 = `Unrecognized key(s) in object: ${o.ZS.joinValues(e2.keys, ", ")}`;
          break;
        case n.eq.invalid_union:
          r2 = "Invalid input";
          break;
        case n.eq.invalid_union_discriminator:
          r2 = `Invalid discriminator value. Expected ${o.ZS.joinValues(e2.options)}`;
          break;
        case n.eq.invalid_enum_value:
          r2 = `Invalid enum value. Expected ${o.ZS.joinValues(e2.options)}, received '${e2.received}'`;
          break;
        case n.eq.invalid_arguments:
          r2 = "Invalid function arguments";
          break;
        case n.eq.invalid_return_type:
          r2 = "Invalid function return type";
          break;
        case n.eq.invalid_date:
          r2 = "Invalid date";
          break;
        case n.eq.invalid_string:
          "object" == typeof e2.validation ? "includes" in e2.validation ? (r2 = `Invalid input: must include "${e2.validation.includes}"`, "number" == typeof e2.validation.position && (r2 = `${r2} at one or more positions greater than or equal to ${e2.validation.position}`)) : "startsWith" in e2.validation ? r2 = `Invalid input: must start with "${e2.validation.startsWith}"` : "endsWith" in e2.validation ? r2 = `Invalid input: must end with "${e2.validation.endsWith}"` : o.ZS.assertNever(e2.validation) : r2 = "regex" !== e2.validation ? `Invalid ${e2.validation}` : "Invalid";
          break;
        case n.eq.too_small:
          r2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "more than"} ${e2.minimum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "over"} ${e2.minimum} character(s)` : "number" === e2.type || "bigint" === e2.type ? `Number must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${e2.minimum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e2.minimum))}` : "Invalid input";
          break;
        case n.eq.too_big:
          r2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "less than"} ${e2.maximum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "under"} ${e2.maximum} character(s)` : "number" === e2.type ? `Number must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "bigint" === e2.type ? `BigInt must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly" : e2.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e2.maximum))}` : "Invalid input";
          break;
        case n.eq.custom:
          r2 = "Invalid input";
          break;
        case n.eq.invalid_intersection_types:
          r2 = "Intersection results could not be merged";
          break;
        case n.eq.not_multiple_of:
          r2 = `Number must be a multiple of ${e2.multipleOf}`;
          break;
        case n.eq.not_finite:
          r2 = "Number must be finite";
          break;
        default:
          r2 = t2.defaultError, o.ZS.assertNever(e2);
      }
      return { message: r2 };
    };
    let i = s;
    function a() {
      return i;
    }
    var l;
    !(function(e2) {
      e2.errToObj = (e3) => "string" == typeof e3 ? { message: e3 } : e3 || {}, e2.toString = (e3) => "string" == typeof e3 ? e3 : e3?.message;
    })(l || (l = {}));
    const c = (e2) => {
      const { data: t2, path: r2, errorMaps: n2, issueData: o2 } = e2, s2 = [...r2, ...o2.path || []], i2 = { ...o2, path: s2 };
      if (void 0 !== o2.message) return { ...o2, path: s2, message: o2.message };
      let a2 = "";
      const l2 = n2.filter((e3) => !!e3).slice().reverse();
      for (const e3 of l2) a2 = e3(i2, { data: t2, defaultError: a2 }).message;
      return { ...o2, path: s2, message: a2 };
    };
    function u(e2, t2) {
      const r2 = a(), n2 = c({ issueData: t2, data: e2.data, path: e2.path, errorMaps: [e2.common.contextualErrorMap, e2.schemaErrorMap, r2, r2 === s ? void 0 : s].filter((e3) => !!e3) });
      e2.common.issues.push(n2);
    }
    class d {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        "valid" === this.value && (this.value = "dirty");
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted");
      }
      static mergeArray(e2, t2) {
        const r2 = [];
        for (const n2 of t2) {
          if ("aborted" === n2.status) return p;
          "dirty" === n2.status && e2.dirty(), r2.push(n2.value);
        }
        return { status: e2.value, value: r2 };
      }
      static async mergeObjectAsync(e2, t2) {
        const r2 = [];
        for (const e3 of t2) {
          const t3 = await e3.key, n2 = await e3.value;
          r2.push({ key: t3, value: n2 });
        }
        return d.mergeObjectSync(e2, r2);
      }
      static mergeObjectSync(e2, t2) {
        const r2 = {};
        for (const n2 of t2) {
          const { key: t3, value: o2 } = n2;
          if ("aborted" === t3.status) return p;
          if ("aborted" === o2.status) return p;
          "dirty" === t3.status && e2.dirty(), "dirty" === o2.status && e2.dirty(), "__proto__" === t3.value || void 0 === o2.value && !n2.alwaysSet || (r2[t3.value] = o2.value);
        }
        return { status: e2.value, value: r2 };
      }
    }
    const p = Object.freeze({ status: "aborted" }), h = (e2) => ({ status: "dirty", value: e2 }), m = (e2) => ({ status: "valid", value: e2 }), f = (e2) => "aborted" === e2.status, g = (e2) => "dirty" === e2.status, y = (e2) => "valid" === e2.status, v = (e2) => "undefined" != typeof Promise && e2 instanceof Promise;
    class w {
      constructor(e2, t2, r2, n2) {
        this._cachedPath = [], this.parent = e2, this.data = t2, this._path = r2, this._key = n2;
      }
      get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    }
    const b = (e2, t2) => {
      if (y(t2)) return { success: true, data: t2.value };
      if (!e2.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error) return this._error;
        const t3 = new n.G(e2.common.issues);
        return this._error = t3, this._error;
      } };
    };
    function _(e2) {
      if (!e2) return {};
      const { errorMap: t2, invalid_type_error: r2, required_error: n2, description: o2 } = e2;
      if (t2 && (r2 || n2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      if (t2) return { errorMap: t2, description: o2 };
      return { errorMap: (t3, o3) => {
        const { message: s2 } = e2;
        return "invalid_enum_value" === t3.code ? { message: s2 ?? o3.defaultError } : void 0 === o3.data ? { message: s2 ?? n2 ?? o3.defaultError } : "invalid_type" !== t3.code ? { message: o3.defaultError } : { message: s2 ?? r2 ?? o3.defaultError };
      }, description: o2 };
    }
    class S {
      get description() {
        return this._def.description;
      }
      _getType(e2) {
        return (0, o.CR)(e2.data);
      }
      _getOrReturnCtx(e2, t2) {
        return t2 || { common: e2.parent.common, data: e2.data, parsedType: (0, o.CR)(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent };
      }
      _processInputParams(e2) {
        return { status: new d(), ctx: { common: e2.parent.common, data: e2.data, parsedType: (0, o.CR)(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent } };
      }
      _parseSync(e2) {
        const t2 = this._parse(e2);
        if (v(t2)) throw new Error("Synchronous parse encountered promise.");
        return t2;
      }
      _parseAsync(e2) {
        const t2 = this._parse(e2);
        return Promise.resolve(t2);
      }
      parse(e2, t2) {
        const r2 = this.safeParse(e2, t2);
        if (r2.success) return r2.data;
        throw r2.error;
      }
      safeParse(e2, t2) {
        const r2 = { common: { issues: [], async: t2?.async ?? false, contextualErrorMap: t2?.errorMap }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, o.CR)(e2) }, n2 = this._parseSync({ data: e2, path: r2.path, parent: r2 });
        return b(r2, n2);
      }
      "~validate"(e2) {
        const t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, o.CR)(e2) };
        if (!this["~standard"].async) try {
          const r2 = this._parseSync({ data: e2, path: [], parent: t2 });
          return y(r2) ? { value: r2.value } : { issues: t2.common.issues };
        } catch (e3) {
          e3?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
        }
        return this._parseAsync({ data: e2, path: [], parent: t2 }).then((e3) => y(e3) ? { value: e3.value } : { issues: t2.common.issues });
      }
      async parseAsync(e2, t2) {
        const r2 = await this.safeParseAsync(e2, t2);
        if (r2.success) return r2.data;
        throw r2.error;
      }
      async safeParseAsync(e2, t2) {
        const r2 = { common: { issues: [], contextualErrorMap: t2?.errorMap, async: true }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, o.CR)(e2) }, n2 = this._parse({ data: e2, path: r2.path, parent: r2 }), s2 = await (v(n2) ? n2 : Promise.resolve(n2));
        return b(r2, s2);
      }
      refine(e2, t2) {
        const r2 = (e3) => "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e3) : t2;
        return this._refinement((t3, o2) => {
          const s2 = e2(t3), i2 = () => o2.addIssue({ code: n.eq.custom, ...r2(t3) });
          return "undefined" != typeof Promise && s2 instanceof Promise ? s2.then((e3) => !!e3 || (i2(), false)) : !!s2 || (i2(), false);
        });
      }
      refinement(e2, t2) {
        return this._refinement((r2, n2) => !!e2(r2) || (n2.addIssue("function" == typeof t2 ? t2(r2, n2) : t2), false));
      }
      _refinement(e2) {
        return new xe({ schema: this, typeName: De.ZodEffects, effect: { type: "refinement", refinement: e2 } });
      }
      superRefine(e2) {
        return this._refinement(e2);
      }
      constructor(e2) {
        this.spa = this.safeParseAsync, this._def = e2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (e3) => this["~validate"](e3) };
      }
      optional() {
        return ke.create(this, this._def);
      }
      nullable() {
        return Ee.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return se.create(this);
      }
      promise() {
        return Se.create(this, this._def);
      }
      or(e2) {
        return le.create([this, e2], this._def);
      }
      and(e2) {
        return pe.create(this, e2, this._def);
      }
      transform(e2) {
        return new xe({ ..._(this._def), schema: this, typeName: De.ZodEffects, effect: { type: "transform", transform: e2 } });
      }
      default(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new Te({ ..._(this._def), innerType: this, defaultValue: t2, typeName: De.ZodDefault });
      }
      brand() {
        return new Ae({ typeName: De.ZodBranded, type: this, ..._(this._def) });
      }
      catch(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new Ce({ ..._(this._def), innerType: this, catchValue: t2, typeName: De.ZodCatch });
      }
      describe(e2) {
        return new (0, this.constructor)({ ...this._def, description: e2 });
      }
      pipe(e2) {
        return Pe.create(this, e2);
      }
      readonly() {
        return Me.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }
    const x = /^c[^\s-]{8,}$/i, k = /^[0-9a-z]+$/, E = /^[0-9A-HJKMNP-TV-Z]{26}$/i, T = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, C = /^[a-z0-9_-]{21}$/i, I = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, A = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, P = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let M;
    const R = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, O = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, D = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, N = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, F = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, L = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, U = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", B = new RegExp(`^${U}$`);
    function $(e2) {
      let t2 = "[0-5]\\d";
      e2.precision ? t2 = `${t2}\\.\\d{${e2.precision}}` : null == e2.precision && (t2 = `${t2}(\\.\\d+)?`);
      return `([01]\\d|2[0-3]):[0-5]\\d(:${t2})${e2.precision ? "+" : "?"}`;
    }
    function q(e2) {
      return new RegExp(`^${$(e2)}$`);
    }
    function j(e2) {
      let t2 = `${U}T${$(e2)}`;
      const r2 = [];
      return r2.push(e2.local ? "Z?" : "Z"), e2.offset && r2.push("([+-]\\d{2}:?\\d{2})"), t2 = `${t2}(${r2.join("|")})`, new RegExp(`^${t2}$`);
    }
    function J(e2, t2) {
      return !("v4" !== t2 && t2 || !R.test(e2)) || !("v6" !== t2 && t2 || !D.test(e2));
    }
    function z(e2, t2) {
      if (!I.test(e2)) return false;
      try {
        const [r2] = e2.split(".");
        if (!r2) return false;
        const n2 = r2.replace(/-/g, "+").replace(/_/g, "/").padEnd(r2.length + (4 - r2.length % 4) % 4, "="), o2 = JSON.parse(atob(n2));
        return "object" == typeof o2 && null !== o2 && ((!("typ" in o2) || "JWT" === o2?.typ) && (!!o2.alg && (!t2 || o2.alg === t2)));
      } catch {
        return false;
      }
    }
    function H(e2, t2) {
      return !("v4" !== t2 && t2 || !O.test(e2)) || !("v6" !== t2 && t2 || !N.test(e2));
    }
    class W extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = String(e2.data));
        if (this._getType(e2) !== o.Zp.string) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: o.Zp.string, received: t3.parsedType }), p;
        }
        const t2 = new d();
        let r2;
        for (const s2 of this._def.checks) if ("min" === s2.kind) e2.data.length < s2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_small, minimum: s2.value, type: "string", inclusive: true, exact: false, message: s2.message }), t2.dirty());
        else if ("max" === s2.kind) e2.data.length > s2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_big, maximum: s2.value, type: "string", inclusive: true, exact: false, message: s2.message }), t2.dirty());
        else if ("length" === s2.kind) {
          const o2 = e2.data.length > s2.value, i2 = e2.data.length < s2.value;
          (o2 || i2) && (r2 = this._getOrReturnCtx(e2, r2), o2 ? u(r2, { code: n.eq.too_big, maximum: s2.value, type: "string", inclusive: true, exact: true, message: s2.message }) : i2 && u(r2, { code: n.eq.too_small, minimum: s2.value, type: "string", inclusive: true, exact: true, message: s2.message }), t2.dirty());
        } else if ("email" === s2.kind) P.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "email", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("emoji" === s2.kind) M || (M = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), M.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "emoji", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("uuid" === s2.kind) T.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "uuid", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("nanoid" === s2.kind) C.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "nanoid", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("cuid" === s2.kind) x.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cuid", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("cuid2" === s2.kind) k.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cuid2", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("ulid" === s2.kind) E.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "ulid", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        else if ("url" === s2.kind) try {
          new URL(e2.data);
        } catch {
          r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "url", code: n.eq.invalid_string, message: s2.message }), t2.dirty();
        }
        else if ("regex" === s2.kind) {
          s2.regex.lastIndex = 0;
          s2.regex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "regex", code: n.eq.invalid_string, message: s2.message }), t2.dirty());
        } else if ("trim" === s2.kind) e2.data = e2.data.trim();
        else if ("includes" === s2.kind) e2.data.includes(s2.value, s2.position) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { includes: s2.value, position: s2.position }, message: s2.message }), t2.dirty());
        else if ("toLowerCase" === s2.kind) e2.data = e2.data.toLowerCase();
        else if ("toUpperCase" === s2.kind) e2.data = e2.data.toUpperCase();
        else if ("startsWith" === s2.kind) e2.data.startsWith(s2.value) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { startsWith: s2.value }, message: s2.message }), t2.dirty());
        else if ("endsWith" === s2.kind) e2.data.endsWith(s2.value) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { endsWith: s2.value }, message: s2.message }), t2.dirty());
        else if ("datetime" === s2.kind) {
          j(s2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "datetime", message: s2.message }), t2.dirty());
        } else if ("date" === s2.kind) {
          B.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "date", message: s2.message }), t2.dirty());
        } else if ("time" === s2.kind) {
          q(s2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "time", message: s2.message }), t2.dirty());
        } else "duration" === s2.kind ? A.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "duration", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : "ip" === s2.kind ? J(e2.data, s2.version) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "ip", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : "jwt" === s2.kind ? z(e2.data, s2.alg) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "jwt", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : "cidr" === s2.kind ? H(e2.data, s2.version) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cidr", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : "base64" === s2.kind ? F.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "base64", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : "base64url" === s2.kind ? L.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "base64url", code: n.eq.invalid_string, message: s2.message }), t2.dirty()) : o.ZS.assertNever(s2);
        return { status: t2.value, value: e2.data };
      }
      _regex(e2, t2, r2) {
        return this.refinement((t3) => e2.test(t3), { validation: t2, code: n.eq.invalid_string, ...l.errToObj(r2) });
      }
      _addCheck(e2) {
        return new W({ ...this._def, checks: [...this._def.checks, e2] });
      }
      email(e2) {
        return this._addCheck({ kind: "email", ...l.errToObj(e2) });
      }
      url(e2) {
        return this._addCheck({ kind: "url", ...l.errToObj(e2) });
      }
      emoji(e2) {
        return this._addCheck({ kind: "emoji", ...l.errToObj(e2) });
      }
      uuid(e2) {
        return this._addCheck({ kind: "uuid", ...l.errToObj(e2) });
      }
      nanoid(e2) {
        return this._addCheck({ kind: "nanoid", ...l.errToObj(e2) });
      }
      cuid(e2) {
        return this._addCheck({ kind: "cuid", ...l.errToObj(e2) });
      }
      cuid2(e2) {
        return this._addCheck({ kind: "cuid2", ...l.errToObj(e2) });
      }
      ulid(e2) {
        return this._addCheck({ kind: "ulid", ...l.errToObj(e2) });
      }
      base64(e2) {
        return this._addCheck({ kind: "base64", ...l.errToObj(e2) });
      }
      base64url(e2) {
        return this._addCheck({ kind: "base64url", ...l.errToObj(e2) });
      }
      jwt(e2) {
        return this._addCheck({ kind: "jwt", ...l.errToObj(e2) });
      }
      ip(e2) {
        return this._addCheck({ kind: "ip", ...l.errToObj(e2) });
      }
      cidr(e2) {
        return this._addCheck({ kind: "cidr", ...l.errToObj(e2) });
      }
      datetime(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e2 }) : this._addCheck({ kind: "datetime", precision: void 0 === e2?.precision ? null : e2?.precision, offset: e2?.offset ?? false, local: e2?.local ?? false, ...l.errToObj(e2?.message) });
      }
      date(e2) {
        return this._addCheck({ kind: "date", message: e2 });
      }
      time(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "time", precision: null, message: e2 }) : this._addCheck({ kind: "time", precision: void 0 === e2?.precision ? null : e2?.precision, ...l.errToObj(e2?.message) });
      }
      duration(e2) {
        return this._addCheck({ kind: "duration", ...l.errToObj(e2) });
      }
      regex(e2, t2) {
        return this._addCheck({ kind: "regex", regex: e2, ...l.errToObj(t2) });
      }
      includes(e2, t2) {
        return this._addCheck({ kind: "includes", value: e2, position: t2?.position, ...l.errToObj(t2?.message) });
      }
      startsWith(e2, t2) {
        return this._addCheck({ kind: "startsWith", value: e2, ...l.errToObj(t2) });
      }
      endsWith(e2, t2) {
        return this._addCheck({ kind: "endsWith", value: e2, ...l.errToObj(t2) });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2, ...l.errToObj(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2, ...l.errToObj(t2) });
      }
      length(e2, t2) {
        return this._addCheck({ kind: "length", value: e2, ...l.errToObj(t2) });
      }
      nonempty(e2) {
        return this.min(1, l.errToObj(e2));
      }
      trim() {
        return new W({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new W({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new W({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e2) => "datetime" === e2.kind);
      }
      get isDate() {
        return !!this._def.checks.find((e2) => "date" === e2.kind);
      }
      get isTime() {
        return !!this._def.checks.find((e2) => "time" === e2.kind);
      }
      get isDuration() {
        return !!this._def.checks.find((e2) => "duration" === e2.kind);
      }
      get isEmail() {
        return !!this._def.checks.find((e2) => "email" === e2.kind);
      }
      get isURL() {
        return !!this._def.checks.find((e2) => "url" === e2.kind);
      }
      get isEmoji() {
        return !!this._def.checks.find((e2) => "emoji" === e2.kind);
      }
      get isUUID() {
        return !!this._def.checks.find((e2) => "uuid" === e2.kind);
      }
      get isNANOID() {
        return !!this._def.checks.find((e2) => "nanoid" === e2.kind);
      }
      get isCUID() {
        return !!this._def.checks.find((e2) => "cuid" === e2.kind);
      }
      get isCUID2() {
        return !!this._def.checks.find((e2) => "cuid2" === e2.kind);
      }
      get isULID() {
        return !!this._def.checks.find((e2) => "ulid" === e2.kind);
      }
      get isIP() {
        return !!this._def.checks.find((e2) => "ip" === e2.kind);
      }
      get isCIDR() {
        return !!this._def.checks.find((e2) => "cidr" === e2.kind);
      }
      get isBase64() {
        return !!this._def.checks.find((e2) => "base64" === e2.kind);
      }
      get isBase64url() {
        return !!this._def.checks.find((e2) => "base64url" === e2.kind);
      }
      get minLength() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxLength() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
    }
    function G(e2, t2) {
      const r2 = (e2.toString().split(".")[1] || "").length, n2 = (t2.toString().split(".")[1] || "").length, o2 = r2 > n2 ? r2 : n2;
      return Number.parseInt(e2.toFixed(o2).replace(".", "")) % Number.parseInt(t2.toFixed(o2).replace(".", "")) / 10 ** o2;
    }
    W.create = (e2) => new W({ checks: [], typeName: De.ZodString, coerce: e2?.coerce ?? false, ..._(e2) });
    class Y extends S {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e2) {
        this._def.coerce && (e2.data = Number(e2.data));
        if (this._getType(e2) !== o.Zp.number) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: o.Zp.number, received: t3.parsedType }), p;
        }
        let t2;
        const r2 = new d();
        for (const s2 of this._def.checks) if ("int" === s2.kind) o.ZS.isInteger(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.invalid_type, expected: "integer", received: "float", message: s2.message }), r2.dirty());
        else if ("min" === s2.kind) {
          (s2.inclusive ? e2.data < s2.value : e2.data <= s2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_small, minimum: s2.value, type: "number", inclusive: s2.inclusive, exact: false, message: s2.message }), r2.dirty());
        } else if ("max" === s2.kind) {
          (s2.inclusive ? e2.data > s2.value : e2.data >= s2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_big, maximum: s2.value, type: "number", inclusive: s2.inclusive, exact: false, message: s2.message }), r2.dirty());
        } else "multipleOf" === s2.kind ? 0 !== G(e2.data, s2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_multiple_of, multipleOf: s2.value, message: s2.message }), r2.dirty()) : "finite" === s2.kind ? Number.isFinite(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_finite, message: s2.message }), r2.dirty()) : o.ZS.assertNever(s2);
        return { status: r2.value, value: e2.data };
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, l.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, l.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, l.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, l.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new Y({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: l.toString(n2) }] });
      }
      _addCheck(e2) {
        return new Y({ ...this._def, checks: [...this._def.checks, e2] });
      }
      int(e2) {
        return this._addCheck({ kind: "int", message: l.toString(e2) });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: l.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: l.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: l.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: l.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: l.toString(t2) });
      }
      finite(e2) {
        return this._addCheck({ kind: "finite", message: l.toString(e2) });
      }
      safe(e2) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: l.toString(e2) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: l.toString(e2) });
      }
      get minValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
      get isInt() {
        return !!this._def.checks.find((e2) => "int" === e2.kind || "multipleOf" === e2.kind && o.ZS.isInteger(e2.value));
      }
      get isFinite() {
        let e2 = null, t2 = null;
        for (const r2 of this._def.checks) {
          if ("finite" === r2.kind || "int" === r2.kind || "multipleOf" === r2.kind) return true;
          "min" === r2.kind ? (null === t2 || r2.value > t2) && (t2 = r2.value) : "max" === r2.kind && (null === e2 || r2.value < e2) && (e2 = r2.value);
        }
        return Number.isFinite(t2) && Number.isFinite(e2);
      }
    }
    Y.create = (e2) => new Y({ checks: [], typeName: De.ZodNumber, coerce: e2?.coerce || false, ..._(e2) });
    class V extends S {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(e2) {
        if (this._def.coerce) try {
          e2.data = BigInt(e2.data);
        } catch {
          return this._getInvalidInput(e2);
        }
        if (this._getType(e2) !== o.Zp.bigint) return this._getInvalidInput(e2);
        let t2;
        const r2 = new d();
        for (const s2 of this._def.checks) if ("min" === s2.kind) {
          (s2.inclusive ? e2.data < s2.value : e2.data <= s2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_small, type: "bigint", minimum: s2.value, inclusive: s2.inclusive, message: s2.message }), r2.dirty());
        } else if ("max" === s2.kind) {
          (s2.inclusive ? e2.data > s2.value : e2.data >= s2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_big, type: "bigint", maximum: s2.value, inclusive: s2.inclusive, message: s2.message }), r2.dirty());
        } else "multipleOf" === s2.kind ? e2.data % s2.value !== BigInt(0) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_multiple_of, multipleOf: s2.value, message: s2.message }), r2.dirty()) : o.ZS.assertNever(s2);
        return { status: r2.value, value: e2.data };
      }
      _getInvalidInput(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return u(t2, { code: n.eq.invalid_type, expected: o.Zp.bigint, received: t2.parsedType }), p;
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, l.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, l.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, l.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, l.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new V({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: l.toString(n2) }] });
      }
      _addCheck(e2) {
        return new V({ ...this._def, checks: [...this._def.checks, e2] });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: l.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: l.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: l.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: l.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: l.toString(t2) });
      }
      get minValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
    }
    V.create = (e2) => new V({ checks: [], typeName: De.ZodBigInt, coerce: e2?.coerce ?? false, ..._(e2) });
    class K extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = Boolean(e2.data));
        if (this._getType(e2) !== o.Zp.boolean) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.boolean, received: t2.parsedType }), p;
        }
        return m(e2.data);
      }
    }
    K.create = (e2) => new K({ typeName: De.ZodBoolean, coerce: e2?.coerce || false, ..._(e2) });
    class Z extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = new Date(e2.data));
        if (this._getType(e2) !== o.Zp.date) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: o.Zp.date, received: t3.parsedType }), p;
        }
        if (Number.isNaN(e2.data.getTime())) {
          return u(this._getOrReturnCtx(e2), { code: n.eq.invalid_date }), p;
        }
        const t2 = new d();
        let r2;
        for (const s2 of this._def.checks) "min" === s2.kind ? e2.data.getTime() < s2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_small, message: s2.message, inclusive: true, exact: false, minimum: s2.value, type: "date" }), t2.dirty()) : "max" === s2.kind ? e2.data.getTime() > s2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_big, message: s2.message, inclusive: true, exact: false, maximum: s2.value, type: "date" }), t2.dirty()) : o.ZS.assertNever(s2);
        return { status: t2.value, value: new Date(e2.data.getTime()) };
      }
      _addCheck(e2) {
        return new Z({ ...this._def, checks: [...this._def.checks, e2] });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2.getTime(), message: l.toString(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2.getTime(), message: l.toString(t2) });
      }
      get minDate() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return null != e2 ? new Date(e2) : null;
      }
      get maxDate() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return null != e2 ? new Date(e2) : null;
      }
    }
    Z.create = (e2) => new Z({ checks: [], coerce: e2?.coerce || false, typeName: De.ZodDate, ..._(e2) });
    class X extends S {
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.symbol) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.symbol, received: t2.parsedType }), p;
        }
        return m(e2.data);
      }
    }
    X.create = (e2) => new X({ typeName: De.ZodSymbol, ..._(e2) });
    class Q extends S {
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.undefined, received: t2.parsedType }), p;
        }
        return m(e2.data);
      }
    }
    Q.create = (e2) => new Q({ typeName: De.ZodUndefined, ..._(e2) });
    class ee extends S {
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.null) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.null, received: t2.parsedType }), p;
        }
        return m(e2.data);
      }
    }
    ee.create = (e2) => new ee({ typeName: De.ZodNull, ..._(e2) });
    class te extends S {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e2) {
        return m(e2.data);
      }
    }
    te.create = (e2) => new te({ typeName: De.ZodAny, ..._(e2) });
    class re extends S {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e2) {
        return m(e2.data);
      }
    }
    re.create = (e2) => new re({ typeName: De.ZodUnknown, ..._(e2) });
    class ne extends S {
      _parse(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return u(t2, { code: n.eq.invalid_type, expected: o.Zp.never, received: t2.parsedType }), p;
      }
    }
    ne.create = (e2) => new ne({ typeName: De.ZodNever, ..._(e2) });
    class oe extends S {
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.void, received: t2.parsedType }), p;
        }
        return m(e2.data);
      }
    }
    oe.create = (e2) => new oe({ typeName: De.ZodVoid, ..._(e2) });
    class se extends S {
      _parse(e2) {
        const { ctx: t2, status: r2 } = this._processInputParams(e2), s2 = this._def;
        if (t2.parsedType !== o.Zp.array) return u(t2, { code: n.eq.invalid_type, expected: o.Zp.array, received: t2.parsedType }), p;
        if (null !== s2.exactLength) {
          const e3 = t2.data.length > s2.exactLength.value, o2 = t2.data.length < s2.exactLength.value;
          (e3 || o2) && (u(t2, { code: e3 ? n.eq.too_big : n.eq.too_small, minimum: o2 ? s2.exactLength.value : void 0, maximum: e3 ? s2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: s2.exactLength.message }), r2.dirty());
        }
        if (null !== s2.minLength && t2.data.length < s2.minLength.value && (u(t2, { code: n.eq.too_small, minimum: s2.minLength.value, type: "array", inclusive: true, exact: false, message: s2.minLength.message }), r2.dirty()), null !== s2.maxLength && t2.data.length > s2.maxLength.value && (u(t2, { code: n.eq.too_big, maximum: s2.maxLength.value, type: "array", inclusive: true, exact: false, message: s2.maxLength.message }), r2.dirty()), t2.common.async) return Promise.all([...t2.data].map((e3, r3) => s2.type._parseAsync(new w(t2, e3, t2.path, r3)))).then((e3) => d.mergeArray(r2, e3));
        const i2 = [...t2.data].map((e3, r3) => s2.type._parseSync(new w(t2, e3, t2.path, r3)));
        return d.mergeArray(r2, i2);
      }
      get element() {
        return this._def.type;
      }
      min(e2, t2) {
        return new se({ ...this._def, minLength: { value: e2, message: l.toString(t2) } });
      }
      max(e2, t2) {
        return new se({ ...this._def, maxLength: { value: e2, message: l.toString(t2) } });
      }
      length(e2, t2) {
        return new se({ ...this._def, exactLength: { value: e2, message: l.toString(t2) } });
      }
      nonempty(e2) {
        return this.min(1, e2);
      }
    }
    function ie(e2) {
      if (e2 instanceof ae) {
        const t2 = {};
        for (const r2 in e2.shape) {
          const n2 = e2.shape[r2];
          t2[r2] = ke.create(ie(n2));
        }
        return new ae({ ...e2._def, shape: () => t2 });
      }
      return e2 instanceof se ? new se({ ...e2._def, type: ie(e2.element) }) : e2 instanceof ke ? ke.create(ie(e2.unwrap())) : e2 instanceof Ee ? Ee.create(ie(e2.unwrap())) : e2 instanceof he ? he.create(e2.items.map((e3) => ie(e3))) : e2;
    }
    se.create = (e2, t2) => new se({ type: e2, minLength: null, maxLength: null, exactLength: null, typeName: De.ZodArray, ..._(t2) });
    class ae extends S {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const e2 = this._def.shape(), t2 = o.ZS.objectKeys(e2);
        return this._cached = { shape: e2, keys: t2 }, this._cached;
      }
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.object) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: o.Zp.object, received: t3.parsedType }), p;
        }
        const { status: t2, ctx: r2 } = this._processInputParams(e2), { shape: s2, keys: i2 } = this._getCached(), a2 = [];
        if (!(this._def.catchall instanceof ne && "strip" === this._def.unknownKeys)) for (const e3 in r2.data) i2.includes(e3) || a2.push(e3);
        const l2 = [];
        for (const e3 of i2) {
          const t3 = s2[e3], n2 = r2.data[e3];
          l2.push({ key: { status: "valid", value: e3 }, value: t3._parse(new w(r2, n2, r2.path, e3)), alwaysSet: e3 in r2.data });
        }
        if (this._def.catchall instanceof ne) {
          const e3 = this._def.unknownKeys;
          if ("passthrough" === e3) for (const e4 of a2) l2.push({ key: { status: "valid", value: e4 }, value: { status: "valid", value: r2.data[e4] } });
          else if ("strict" === e3) a2.length > 0 && (u(r2, { code: n.eq.unrecognized_keys, keys: a2 }), t2.dirty());
          else if ("strip" !== e3) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e3 = this._def.catchall;
          for (const t3 of a2) {
            const n2 = r2.data[t3];
            l2.push({ key: { status: "valid", value: t3 }, value: e3._parse(new w(r2, n2, r2.path, t3)), alwaysSet: t3 in r2.data });
          }
        }
        return r2.common.async ? Promise.resolve().then(async () => {
          const e3 = [];
          for (const t3 of l2) {
            const r3 = await t3.key, n2 = await t3.value;
            e3.push({ key: r3, value: n2, alwaysSet: t3.alwaysSet });
          }
          return e3;
        }).then((e3) => d.mergeObjectSync(t2, e3)) : d.mergeObjectSync(t2, l2);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e2) {
        return l.errToObj, new ae({ ...this._def, unknownKeys: "strict", ...void 0 !== e2 ? { errorMap: (t2, r2) => {
          const n2 = this._def.errorMap?.(t2, r2).message ?? r2.defaultError;
          return "unrecognized_keys" === t2.code ? { message: l.errToObj(e2).message ?? n2 } : { message: n2 };
        } } : {} });
      }
      strip() {
        return new ae({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new ae({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e2) {
        return new ae({ ...this._def, shape: () => ({ ...this._def.shape(), ...e2 }) });
      }
      merge(e2) {
        return new ae({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: () => ({ ...this._def.shape(), ...e2._def.shape() }), typeName: De.ZodObject });
      }
      setKey(e2, t2) {
        return this.augment({ [e2]: t2 });
      }
      catchall(e2) {
        return new ae({ ...this._def, catchall: e2 });
      }
      pick(e2) {
        const t2 = {};
        for (const r2 of o.ZS.objectKeys(e2)) e2[r2] && this.shape[r2] && (t2[r2] = this.shape[r2]);
        return new ae({ ...this._def, shape: () => t2 });
      }
      omit(e2) {
        const t2 = {};
        for (const r2 of o.ZS.objectKeys(this.shape)) e2[r2] || (t2[r2] = this.shape[r2]);
        return new ae({ ...this._def, shape: () => t2 });
      }
      deepPartial() {
        return ie(this);
      }
      partial(e2) {
        const t2 = {};
        for (const r2 of o.ZS.objectKeys(this.shape)) {
          const n2 = this.shape[r2];
          e2 && !e2[r2] ? t2[r2] = n2 : t2[r2] = n2.optional();
        }
        return new ae({ ...this._def, shape: () => t2 });
      }
      required(e2) {
        const t2 = {};
        for (const r2 of o.ZS.objectKeys(this.shape)) if (e2 && !e2[r2]) t2[r2] = this.shape[r2];
        else {
          let e3 = this.shape[r2];
          for (; e3 instanceof ke; ) e3 = e3._def.innerType;
          t2[r2] = e3;
        }
        return new ae({ ...this._def, shape: () => t2 });
      }
      keyof() {
        return we(o.ZS.objectKeys(this.shape));
      }
    }
    ae.create = (e2, t2) => new ae({ shape: () => e2, unknownKeys: "strip", catchall: ne.create(), typeName: De.ZodObject, ..._(t2) }), ae.strictCreate = (e2, t2) => new ae({ shape: () => e2, unknownKeys: "strict", catchall: ne.create(), typeName: De.ZodObject, ..._(t2) }), ae.lazycreate = (e2, t2) => new ae({ shape: e2, unknownKeys: "strip", catchall: ne.create(), typeName: De.ZodObject, ..._(t2) });
    class le extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = this._def.options;
        if (t2.common.async) return Promise.all(r2.map(async (e3) => {
          const r3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null };
          return { result: await e3._parseAsync({ data: t2.data, path: t2.path, parent: r3 }), ctx: r3 };
        })).then(function(e3) {
          for (const t3 of e3) if ("valid" === t3.result.status) return t3.result;
          for (const r4 of e3) if ("dirty" === r4.result.status) return t2.common.issues.push(...r4.ctx.common.issues), r4.result;
          const r3 = e3.map((e4) => new n.G(e4.ctx.common.issues));
          return u(t2, { code: n.eq.invalid_union, unionErrors: r3 }), p;
        });
        {
          let e3;
          const o2 = [];
          for (const n2 of r2) {
            const r3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null }, s3 = n2._parseSync({ data: t2.data, path: t2.path, parent: r3 });
            if ("valid" === s3.status) return s3;
            "dirty" !== s3.status || e3 || (e3 = { result: s3, ctx: r3 }), r3.common.issues.length && o2.push(r3.common.issues);
          }
          if (e3) return t2.common.issues.push(...e3.ctx.common.issues), e3.result;
          const s2 = o2.map((e4) => new n.G(e4));
          return u(t2, { code: n.eq.invalid_union, unionErrors: s2 }), p;
        }
      }
      get options() {
        return this._def.options;
      }
    }
    le.create = (e2, t2) => new le({ options: e2, typeName: De.ZodUnion, ..._(t2) });
    const ce = (e2) => e2 instanceof ye ? ce(e2.schema) : e2 instanceof xe ? ce(e2.innerType()) : e2 instanceof ve ? [e2.value] : e2 instanceof be ? e2.options : e2 instanceof _e ? o.ZS.objectValues(e2.enum) : e2 instanceof Te ? ce(e2._def.innerType) : e2 instanceof Q ? [void 0] : e2 instanceof ee ? [null] : e2 instanceof ke ? [void 0, ...ce(e2.unwrap())] : e2 instanceof Ee ? [null, ...ce(e2.unwrap())] : e2 instanceof Ae || e2 instanceof Me ? ce(e2.unwrap()) : e2 instanceof Ce ? ce(e2._def.innerType) : [];
    class ue extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        if (t2.parsedType !== o.Zp.object) return u(t2, { code: n.eq.invalid_type, expected: o.Zp.object, received: t2.parsedType }), p;
        const r2 = this.discriminator, s2 = t2.data[r2], i2 = this.optionsMap.get(s2);
        return i2 ? t2.common.async ? i2._parseAsync({ data: t2.data, path: t2.path, parent: t2 }) : i2._parseSync({ data: t2.data, path: t2.path, parent: t2 }) : (u(t2, { code: n.eq.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r2] }), p);
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Map();
        for (const r3 of t2) {
          const t3 = ce(r3.shape[e2]);
          if (!t3.length) throw new Error(`A discriminator value for key \`${e2}\` could not be extracted from all schema options`);
          for (const o2 of t3) {
            if (n2.has(o2)) throw new Error(`Discriminator property ${String(e2)} has duplicate value ${String(o2)}`);
            n2.set(o2, r3);
          }
        }
        return new ue({ typeName: De.ZodDiscriminatedUnion, discriminator: e2, options: t2, optionsMap: n2, ..._(r2) });
      }
    }
    function de(e2, t2) {
      const r2 = (0, o.CR)(e2), n2 = (0, o.CR)(t2);
      if (e2 === t2) return { valid: true, data: e2 };
      if (r2 === o.Zp.object && n2 === o.Zp.object) {
        const r3 = o.ZS.objectKeys(t2), n3 = o.ZS.objectKeys(e2).filter((e3) => -1 !== r3.indexOf(e3)), s2 = { ...e2, ...t2 };
        for (const r4 of n3) {
          const n4 = de(e2[r4], t2[r4]);
          if (!n4.valid) return { valid: false };
          s2[r4] = n4.data;
        }
        return { valid: true, data: s2 };
      }
      if (r2 === o.Zp.array && n2 === o.Zp.array) {
        if (e2.length !== t2.length) return { valid: false };
        const r3 = [];
        for (let n3 = 0; n3 < e2.length; n3++) {
          const o2 = de(e2[n3], t2[n3]);
          if (!o2.valid) return { valid: false };
          r3.push(o2.data);
        }
        return { valid: true, data: r3 };
      }
      return r2 === o.Zp.date && n2 === o.Zp.date && +e2 === +t2 ? { valid: true, data: e2 } : { valid: false };
    }
    class pe extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), o2 = (e3, o3) => {
          if (f(e3) || f(o3)) return p;
          const s2 = de(e3.value, o3.value);
          return s2.valid ? ((g(e3) || g(o3)) && t2.dirty(), { status: t2.value, value: s2.data }) : (u(r2, { code: n.eq.invalid_intersection_types }), p);
        };
        return r2.common.async ? Promise.all([this._def.left._parseAsync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseAsync({ data: r2.data, path: r2.path, parent: r2 })]).then(([e3, t3]) => o2(e3, t3)) : o2(this._def.left._parseSync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseSync({ data: r2.data, path: r2.path, parent: r2 }));
      }
    }
    pe.create = (e2, t2, r2) => new pe({ left: e2, right: t2, typeName: De.ZodIntersection, ..._(r2) });
    class he extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== o.Zp.array) return u(r2, { code: n.eq.invalid_type, expected: o.Zp.array, received: r2.parsedType }), p;
        if (r2.data.length < this._def.items.length) return u(r2, { code: n.eq.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p;
        !this._def.rest && r2.data.length > this._def.items.length && (u(r2, { code: n.eq.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t2.dirty());
        const s2 = [...r2.data].map((e3, t3) => {
          const n2 = this._def.items[t3] || this._def.rest;
          return n2 ? n2._parse(new w(r2, e3, r2.path, t3)) : null;
        }).filter((e3) => !!e3);
        return r2.common.async ? Promise.all(s2).then((e3) => d.mergeArray(t2, e3)) : d.mergeArray(t2, s2);
      }
      get items() {
        return this._def.items;
      }
      rest(e2) {
        return new he({ ...this._def, rest: e2 });
      }
    }
    he.create = (e2, t2) => {
      if (!Array.isArray(e2)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new he({ items: e2, typeName: De.ZodTuple, rest: null, ..._(t2) });
    };
    class me extends S {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== o.Zp.object) return u(r2, { code: n.eq.invalid_type, expected: o.Zp.object, received: r2.parsedType }), p;
        const s2 = [], i2 = this._def.keyType, a2 = this._def.valueType;
        for (const e3 in r2.data) s2.push({ key: i2._parse(new w(r2, e3, r2.path, e3)), value: a2._parse(new w(r2, r2.data[e3], r2.path, e3)), alwaysSet: e3 in r2.data });
        return r2.common.async ? d.mergeObjectAsync(t2, s2) : d.mergeObjectSync(t2, s2);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e2, t2, r2) {
        return new me(t2 instanceof S ? { keyType: e2, valueType: t2, typeName: De.ZodRecord, ..._(r2) } : { keyType: W.create(), valueType: e2, typeName: De.ZodRecord, ..._(t2) });
      }
    }
    class fe extends S {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== o.Zp.map) return u(r2, { code: n.eq.invalid_type, expected: o.Zp.map, received: r2.parsedType }), p;
        const s2 = this._def.keyType, i2 = this._def.valueType, a2 = [...r2.data.entries()].map(([e3, t3], n2) => ({ key: s2._parse(new w(r2, e3, r2.path, [n2, "key"])), value: i2._parse(new w(r2, t3, r2.path, [n2, "value"])) }));
        if (r2.common.async) {
          const e3 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const r3 of a2) {
              const n2 = await r3.key, o2 = await r3.value;
              if ("aborted" === n2.status || "aborted" === o2.status) return p;
              "dirty" !== n2.status && "dirty" !== o2.status || t2.dirty(), e3.set(n2.value, o2.value);
            }
            return { status: t2.value, value: e3 };
          });
        }
        {
          const e3 = /* @__PURE__ */ new Map();
          for (const r3 of a2) {
            const n2 = r3.key, o2 = r3.value;
            if ("aborted" === n2.status || "aborted" === o2.status) return p;
            "dirty" !== n2.status && "dirty" !== o2.status || t2.dirty(), e3.set(n2.value, o2.value);
          }
          return { status: t2.value, value: e3 };
        }
      }
    }
    fe.create = (e2, t2, r2) => new fe({ valueType: t2, keyType: e2, typeName: De.ZodMap, ..._(r2) });
    class ge extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== o.Zp.set) return u(r2, { code: n.eq.invalid_type, expected: o.Zp.set, received: r2.parsedType }), p;
        const s2 = this._def;
        null !== s2.minSize && r2.data.size < s2.minSize.value && (u(r2, { code: n.eq.too_small, minimum: s2.minSize.value, type: "set", inclusive: true, exact: false, message: s2.minSize.message }), t2.dirty()), null !== s2.maxSize && r2.data.size > s2.maxSize.value && (u(r2, { code: n.eq.too_big, maximum: s2.maxSize.value, type: "set", inclusive: true, exact: false, message: s2.maxSize.message }), t2.dirty());
        const i2 = this._def.valueType;
        function a2(e3) {
          const r3 = /* @__PURE__ */ new Set();
          for (const n2 of e3) {
            if ("aborted" === n2.status) return p;
            "dirty" === n2.status && t2.dirty(), r3.add(n2.value);
          }
          return { status: t2.value, value: r3 };
        }
        const l2 = [...r2.data.values()].map((e3, t3) => i2._parse(new w(r2, e3, r2.path, t3)));
        return r2.common.async ? Promise.all(l2).then((e3) => a2(e3)) : a2(l2);
      }
      min(e2, t2) {
        return new ge({ ...this._def, minSize: { value: e2, message: l.toString(t2) } });
      }
      max(e2, t2) {
        return new ge({ ...this._def, maxSize: { value: e2, message: l.toString(t2) } });
      }
      size(e2, t2) {
        return this.min(e2, t2).max(e2, t2);
      }
      nonempty(e2) {
        return this.min(1, e2);
      }
    }
    ge.create = (e2, t2) => new ge({ valueType: e2, minSize: null, maxSize: null, typeName: De.ZodSet, ..._(t2) });
    class ye extends S {
      get schema() {
        return this._def.getter();
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
      }
    }
    ye.create = (e2, t2) => new ye({ getter: e2, typeName: De.ZodLazy, ..._(t2) });
    class ve extends S {
      _parse(e2) {
        if (e2.data !== this._def.value) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { received: t2.data, code: n.eq.invalid_literal, expected: this._def.value }), p;
        }
        return { status: "valid", value: e2.data };
      }
      get value() {
        return this._def.value;
      }
    }
    function we(e2, t2) {
      return new be({ values: e2, typeName: De.ZodEnum, ..._(t2) });
    }
    ve.create = (e2, t2) => new ve({ value: e2, typeName: De.ZodLiteral, ..._(t2) });
    class be extends S {
      _parse(e2) {
        if ("string" != typeof e2.data) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return u(t2, { expected: o.ZS.joinValues(r2), received: t2.parsedType, code: n.eq.invalid_type }), p;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e2.data)) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return u(t2, { received: t2.data, code: n.eq.invalid_enum_value, options: r2 }), p;
        }
        return m(e2.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      get Values() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      get Enum() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      extract(e2, t2 = this._def) {
        return be.create(e2, { ...this._def, ...t2 });
      }
      exclude(e2, t2 = this._def) {
        return be.create(this.options.filter((t3) => !e2.includes(t3)), { ...this._def, ...t2 });
      }
    }
    be.create = we;
    class _e extends S {
      _parse(e2) {
        const t2 = o.ZS.getValidEnumValues(this._def.values), r2 = this._getOrReturnCtx(e2);
        if (r2.parsedType !== o.Zp.string && r2.parsedType !== o.Zp.number) {
          const e3 = o.ZS.objectValues(t2);
          return u(r2, { expected: o.ZS.joinValues(e3), received: r2.parsedType, code: n.eq.invalid_type }), p;
        }
        if (this._cache || (this._cache = new Set(o.ZS.getValidEnumValues(this._def.values))), !this._cache.has(e2.data)) {
          const e3 = o.ZS.objectValues(t2);
          return u(r2, { received: r2.data, code: n.eq.invalid_enum_value, options: e3 }), p;
        }
        return m(e2.data);
      }
      get enum() {
        return this._def.values;
      }
    }
    _e.create = (e2, t2) => new _e({ values: e2, typeName: De.ZodNativeEnum, ..._(t2) });
    class Se extends S {
      unwrap() {
        return this._def.type;
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        if (t2.parsedType !== o.Zp.promise && false === t2.common.async) return u(t2, { code: n.eq.invalid_type, expected: o.Zp.promise, received: t2.parsedType }), p;
        const r2 = t2.parsedType === o.Zp.promise ? t2.data : Promise.resolve(t2.data);
        return m(r2.then((e3) => this._def.type.parseAsync(e3, { path: t2.path, errorMap: t2.common.contextualErrorMap })));
      }
    }
    Se.create = (e2, t2) => new Se({ type: e2, typeName: De.ZodPromise, ..._(t2) });
    class xe extends S {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === De.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), n2 = this._def.effect || null, s2 = { addIssue: (e3) => {
          u(r2, e3), e3.fatal ? t2.abort() : t2.dirty();
        }, get path() {
          return r2.path;
        } };
        if (s2.addIssue = s2.addIssue.bind(s2), "preprocess" === n2.type) {
          const e3 = n2.transform(r2.data, s2);
          if (r2.common.async) return Promise.resolve(e3).then(async (e4) => {
            if ("aborted" === t2.value) return p;
            const n3 = await this._def.schema._parseAsync({ data: e4, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? p : "dirty" === n3.status || "dirty" === t2.value ? h(n3.value) : n3;
          });
          {
            if ("aborted" === t2.value) return p;
            const n3 = this._def.schema._parseSync({ data: e3, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? p : "dirty" === n3.status || "dirty" === t2.value ? h(n3.value) : n3;
          }
        }
        if ("refinement" === n2.type) {
          const e3 = (e4) => {
            const t3 = n2.refinement(e4, s2);
            if (r2.common.async) return Promise.resolve(t3);
            if (t3 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return e4;
          };
          if (false === r2.common.async) {
            const n3 = this._def.schema._parseSync({ data: r2.data, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? p : ("dirty" === n3.status && t2.dirty(), e3(n3.value), { status: t2.value, value: n3.value });
          }
          return this._def.schema._parseAsync({ data: r2.data, path: r2.path, parent: r2 }).then((r3) => "aborted" === r3.status ? p : ("dirty" === r3.status && t2.dirty(), e3(r3.value).then(() => ({ status: t2.value, value: r3.value }))));
        }
        if ("transform" === n2.type) {
          if (false === r2.common.async) {
            const e3 = this._def.schema._parseSync({ data: r2.data, path: r2.path, parent: r2 });
            if (!y(e3)) return p;
            const o2 = n2.transform(e3.value, s2);
            if (o2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: t2.value, value: o2 };
          }
          return this._def.schema._parseAsync({ data: r2.data, path: r2.path, parent: r2 }).then((e3) => y(e3) ? Promise.resolve(n2.transform(e3.value, s2)).then((e4) => ({ status: t2.value, value: e4 })) : p);
        }
        o.ZS.assertNever(n2);
      }
    }
    xe.create = (e2, t2, r2) => new xe({ schema: e2, typeName: De.ZodEffects, effect: t2, ..._(r2) }), xe.createWithPreprocess = (e2, t2, r2) => new xe({ schema: t2, effect: { type: "preprocess", transform: e2 }, typeName: De.ZodEffects, ..._(r2) });
    class ke extends S {
      _parse(e2) {
        return this._getType(e2) === o.Zp.undefined ? m(void 0) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    ke.create = (e2, t2) => new ke({ innerType: e2, typeName: De.ZodOptional, ..._(t2) });
    class Ee extends S {
      _parse(e2) {
        return this._getType(e2) === o.Zp.null ? m(null) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    Ee.create = (e2, t2) => new Ee({ innerType: e2, typeName: De.ZodNullable, ..._(t2) });
    class Te extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        let r2 = t2.data;
        return t2.parsedType === o.Zp.undefined && (r2 = this._def.defaultValue()), this._def.innerType._parse({ data: r2, path: t2.path, parent: t2 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    }
    Te.create = (e2, t2) => new Te({ innerType: e2, typeName: De.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : () => t2.default, ..._(t2) });
    class Ce extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = { ...t2, common: { ...t2.common, issues: [] } }, o2 = this._def.innerType._parse({ data: r2.data, path: r2.path, parent: { ...r2 } });
        return v(o2) ? o2.then((e3) => ({ status: "valid", value: "valid" === e3.status ? e3.value : this._def.catchValue({ get error() {
          return new n.G(r2.common.issues);
        }, input: r2.data }) })) : { status: "valid", value: "valid" === o2.status ? o2.value : this._def.catchValue({ get error() {
          return new n.G(r2.common.issues);
        }, input: r2.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    }
    Ce.create = (e2, t2) => new Ce({ innerType: e2, typeName: De.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : () => t2.catch, ..._(t2) });
    class Ie extends S {
      _parse(e2) {
        if (this._getType(e2) !== o.Zp.nan) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: o.Zp.nan, received: t2.parsedType }), p;
        }
        return { status: "valid", value: e2.data };
      }
    }
    Ie.create = (e2) => new Ie({ typeName: De.ZodNaN, ..._(e2) });
    /* @__PURE__ */ Symbol("zod_brand");
    class Ae extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = t2.data;
        return this._def.type._parse({ data: r2, path: t2.path, parent: t2 });
      }
      unwrap() {
        return this._def.type;
      }
    }
    class Pe extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.common.async) {
          return (async () => {
            const e3 = await this._def.in._parseAsync({ data: r2.data, path: r2.path, parent: r2 });
            return "aborted" === e3.status ? p : "dirty" === e3.status ? (t2.dirty(), h(e3.value)) : this._def.out._parseAsync({ data: e3.value, path: r2.path, parent: r2 });
          })();
        }
        {
          const e3 = this._def.in._parseSync({ data: r2.data, path: r2.path, parent: r2 });
          return "aborted" === e3.status ? p : "dirty" === e3.status ? (t2.dirty(), { status: "dirty", value: e3.value }) : this._def.out._parseSync({ data: e3.value, path: r2.path, parent: r2 });
        }
      }
      static create(e2, t2) {
        return new Pe({ in: e2, out: t2, typeName: De.ZodPipeline });
      }
    }
    class Me extends S {
      _parse(e2) {
        const t2 = this._def.innerType._parse(e2), r2 = (e3) => (y(e3) && (e3.value = Object.freeze(e3.value)), e3);
        return v(t2) ? t2.then((e3) => r2(e3)) : r2(t2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    function Re(e2, t2) {
      const r2 = "function" == typeof e2 ? e2(t2) : "string" == typeof e2 ? { message: e2 } : e2;
      return "string" == typeof r2 ? { message: r2 } : r2;
    }
    function Oe(e2, t2 = {}, r2) {
      return e2 ? te.create().superRefine((n2, o2) => {
        const s2 = e2(n2);
        if (s2 instanceof Promise) return s2.then((e3) => {
          if (!e3) {
            const e4 = Re(t2, n2), s3 = e4.fatal ?? r2 ?? true;
            o2.addIssue({ code: "custom", ...e4, fatal: s3 });
          }
        });
        if (!s2) {
          const e3 = Re(t2, n2), s3 = e3.fatal ?? r2 ?? true;
          o2.addIssue({ code: "custom", ...e3, fatal: s3 });
        }
      }) : te.create();
    }
    Me.create = (e2, t2) => new Me({ innerType: e2, typeName: De.ZodReadonly, ..._(t2) });
    ae.lazycreate;
    var De;
    !(function(e2) {
      e2.ZodString = "ZodString", e2.ZodNumber = "ZodNumber", e2.ZodNaN = "ZodNaN", e2.ZodBigInt = "ZodBigInt", e2.ZodBoolean = "ZodBoolean", e2.ZodDate = "ZodDate", e2.ZodSymbol = "ZodSymbol", e2.ZodUndefined = "ZodUndefined", e2.ZodNull = "ZodNull", e2.ZodAny = "ZodAny", e2.ZodUnknown = "ZodUnknown", e2.ZodNever = "ZodNever", e2.ZodVoid = "ZodVoid", e2.ZodArray = "ZodArray", e2.ZodObject = "ZodObject", e2.ZodUnion = "ZodUnion", e2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e2.ZodIntersection = "ZodIntersection", e2.ZodTuple = "ZodTuple", e2.ZodRecord = "ZodRecord", e2.ZodMap = "ZodMap", e2.ZodSet = "ZodSet", e2.ZodFunction = "ZodFunction", e2.ZodLazy = "ZodLazy", e2.ZodLiteral = "ZodLiteral", e2.ZodEnum = "ZodEnum", e2.ZodEffects = "ZodEffects", e2.ZodNativeEnum = "ZodNativeEnum", e2.ZodOptional = "ZodOptional", e2.ZodNullable = "ZodNullable", e2.ZodDefault = "ZodDefault", e2.ZodCatch = "ZodCatch", e2.ZodPromise = "ZodPromise", e2.ZodBranded = "ZodBranded", e2.ZodPipeline = "ZodPipeline", e2.ZodReadonly = "ZodReadonly";
    })(De || (De = {}));
    const Ne = (e2, t2 = { message: `Input not instance of ${e2.name}` }) => Oe((t3) => t3 instanceof e2, t2), Fe = W.create, Le = Y.create, Ue = (Ie.create, V.create, K.create), Be = (Z.create, X.create, Q.create, ee.create), $e = te.create, qe = re.create, je = ne.create, Je = (oe.create, se.create), ze = ae.create, He = (ae.strictCreate, le.create), We = ue.create, Ge = (pe.create, he.create), Ye = me.create, Ve = (fe.create, ge.create, ye.create), Ke = ve.create, Ze = be.create, Xe = _e.create, Qe = (Se.create, xe.create, ke.create), et = (Ee.create, xe.createWithPreprocess);
    Pe.create;
  }