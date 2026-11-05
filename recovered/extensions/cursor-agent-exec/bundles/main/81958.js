// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 81958 range:10772766..10847021
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81958: (e, t, r) => {
    "use strict";
    r.d(t, { kY: () => Oe, bv: () => ae, Ii: () => xe, ND: () => W, bz: () => Ue, YO: () => je, zM: () => Ne, Ie: () => Je, gM: () => We, k5: () => Qe, Nl: () => Be, RZ: () => Ve, eu: () => Ye, fc: () => Xe, Zm: () => $e, ch: () => Fe, ai: () => qe, Ik: () => Ge, lq: () => Ze, vk: () => et, g1: () => Ke, Yj: () => De, PV: () => He, KC: () => ze, L5: () => Le });
    var n = r(82590), s = r(98517);
    const o = (e2, t2) => {
      let r2;
      switch (e2.code) {
        case n.eq.invalid_type:
          r2 = e2.received === s.Zp.undefined ? "Required" : `Expected ${e2.expected}, received ${e2.received}`;
          break;
        case n.eq.invalid_literal:
          r2 = `Invalid literal value, expected ${JSON.stringify(e2.expected, s.ZS.jsonStringifyReplacer)}`;
          break;
        case n.eq.unrecognized_keys:
          r2 = `Unrecognized key(s) in object: ${s.ZS.joinValues(e2.keys, ", ")}`;
          break;
        case n.eq.invalid_union:
          r2 = "Invalid input";
          break;
        case n.eq.invalid_union_discriminator:
          r2 = `Invalid discriminator value. Expected ${s.ZS.joinValues(e2.options)}`;
          break;
        case n.eq.invalid_enum_value:
          r2 = `Invalid enum value. Expected ${s.ZS.joinValues(e2.options)}, received '${e2.received}'`;
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
          "object" == typeof e2.validation ? "includes" in e2.validation ? (r2 = `Invalid input: must include "${e2.validation.includes}"`, "number" == typeof e2.validation.position && (r2 = `${r2} at one or more positions greater than or equal to ${e2.validation.position}`)) : "startsWith" in e2.validation ? r2 = `Invalid input: must start with "${e2.validation.startsWith}"` : "endsWith" in e2.validation ? r2 = `Invalid input: must end with "${e2.validation.endsWith}"` : s.ZS.assertNever(e2.validation) : r2 = "regex" !== e2.validation ? `Invalid ${e2.validation}` : "Invalid";
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
          r2 = t2.defaultError, s.ZS.assertNever(e2);
      }
      return { message: r2 };
    };
    let i = o;
    function a() {
      return i;
    }
    var c;
    !(function(e2) {
      e2.errToObj = (e3) => "string" == typeof e3 ? { message: e3 } : e3 || {}, e2.toString = (e3) => "string" == typeof e3 ? e3 : e3?.message;
    })(c || (c = {}));
    const l = (e2) => {
      const { data: t2, path: r2, errorMaps: n2, issueData: s2 } = e2, o2 = [...r2, ...s2.path || []], i2 = { ...s2, path: o2 };
      if (void 0 !== s2.message) return { ...s2, path: o2, message: s2.message };
      let a2 = "";
      const c2 = n2.filter((e3) => !!e3).slice().reverse();
      for (const e3 of c2) a2 = e3(i2, { data: t2, defaultError: a2 }).message;
      return { ...s2, path: o2, message: a2 };
    };
    function u(e2, t2) {
      const r2 = a(), n2 = l({ issueData: t2, data: e2.data, path: e2.path, errorMaps: [e2.common.contextualErrorMap, e2.schemaErrorMap, r2, r2 === o ? void 0 : o].filter((e3) => !!e3) });
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
          const { key: t3, value: s2 } = n2;
          if ("aborted" === t3.status) return p;
          if ("aborted" === s2.status) return p;
          "dirty" === t3.status && e2.dirty(), "dirty" === s2.status && e2.dirty(), "__proto__" === t3.value || void 0 === s2.value && !n2.alwaysSet || (r2[t3.value] = s2.value);
        }
        return { status: e2.value, value: r2 };
      }
    }
    const p = Object.freeze({ status: "aborted" }), m = (e2) => ({ status: "dirty", value: e2 }), h = (e2) => ({ status: "valid", value: e2 }), f = (e2) => "aborted" === e2.status, g = (e2) => "dirty" === e2.status, y = (e2) => "valid" === e2.status, w = (e2) => "undefined" != typeof Promise && e2 instanceof Promise;
    class v {
      constructor(e2, t2, r2, n2) {
        this._cachedPath = [], this.parent = e2, this.data = t2, this._path = r2, this._key = n2;
      }
      get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    }
    const _ = (e2, t2) => {
      if (y(t2)) return { success: true, data: t2.value };
      if (!e2.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error) return this._error;
        const t3 = new n.G(e2.common.issues);
        return this._error = t3, this._error;
      } };
    };
    function b(e2) {
      if (!e2) return {};
      const { errorMap: t2, invalid_type_error: r2, required_error: n2, description: s2 } = e2;
      if (t2 && (r2 || n2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      if (t2) return { errorMap: t2, description: s2 };
      return { errorMap: (t3, s3) => {
        const { message: o2 } = e2;
        return "invalid_enum_value" === t3.code ? { message: o2 ?? s3.defaultError } : void 0 === s3.data ? { message: o2 ?? n2 ?? s3.defaultError } : "invalid_type" !== t3.code ? { message: s3.defaultError } : { message: o2 ?? r2 ?? s3.defaultError };
      }, description: s2 };
    }
    class S {
      get description() {
        return this._def.description;
      }
      _getType(e2) {
        return (0, s.CR)(e2.data);
      }
      _getOrReturnCtx(e2, t2) {
        return t2 || { common: e2.parent.common, data: e2.data, parsedType: (0, s.CR)(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent };
      }
      _processInputParams(e2) {
        return { status: new d(), ctx: { common: e2.parent.common, data: e2.data, parsedType: (0, s.CR)(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent } };
      }
      _parseSync(e2) {
        const t2 = this._parse(e2);
        if (w(t2)) throw new Error("Synchronous parse encountered promise.");
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
        const r2 = { common: { issues: [], async: t2?.async ?? false, contextualErrorMap: t2?.errorMap }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, s.CR)(e2) }, n2 = this._parseSync({ data: e2, path: r2.path, parent: r2 });
        return _(r2, n2);
      }
      "~validate"(e2) {
        const t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, s.CR)(e2) };
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
        const r2 = { common: { issues: [], contextualErrorMap: t2?.errorMap, async: true }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: (0, s.CR)(e2) }, n2 = this._parse({ data: e2, path: r2.path, parent: r2 }), o2 = await (w(n2) ? n2 : Promise.resolve(n2));
        return _(r2, o2);
      }
      refine(e2, t2) {
        const r2 = (e3) => "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e3) : t2;
        return this._refinement((t3, s2) => {
          const o2 = e2(t3), i2 = () => s2.addIssue({ code: n.eq.custom, ...r2(t3) });
          return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then((e3) => !!e3 || (i2(), false)) : !!o2 || (i2(), false);
        });
      }
      refinement(e2, t2) {
        return this._refinement((r2, n2) => !!e2(r2) || (n2.addIssue("function" == typeof t2 ? t2(r2, n2) : t2), false));
      }
      _refinement(e2) {
        return new ke({ schema: this, typeName: Oe.ZodEffects, effect: { type: "refinement", refinement: e2 } });
      }
      superRefine(e2) {
        return this._refinement(e2);
      }
      constructor(e2) {
        this.spa = this.safeParseAsync, this._def = e2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (e3) => this["~validate"](e3) };
      }
      optional() {
        return xe.create(this, this._def);
      }
      nullable() {
        return Ee.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return oe.create(this);
      }
      promise() {
        return Se.create(this, this._def);
      }
      or(e2) {
        return ce.create([this, e2], this._def);
      }
      and(e2) {
        return pe.create(this, e2, this._def);
      }
      transform(e2) {
        return new ke({ ...b(this._def), schema: this, typeName: Oe.ZodEffects, effect: { type: "transform", transform: e2 } });
      }
      default(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new Ie({ ...b(this._def), innerType: this, defaultValue: t2, typeName: Oe.ZodDefault });
      }
      brand() {
        return new Pe({ typeName: Oe.ZodBranded, type: this, ...b(this._def) });
      }
      catch(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new Te({ ...b(this._def), innerType: this, catchValue: t2, typeName: Oe.ZodCatch });
      }
      describe(e2) {
        return new (0, this.constructor)({ ...this._def, description: e2 });
      }
      pipe(e2) {
        return Ae.create(this, e2);
      }
      readonly() {
        return Re.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }
    const k = /^c[^\s-]{8,}$/i, x = /^[0-9a-z]+$/, E = /^[0-9A-HJKMNP-TV-Z]{26}$/i, I = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, T = /^[a-z0-9_-]{21}$/i, C = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, P = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, A = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let R;
    const M = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, J = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, O = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, B = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, D = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, q = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, N = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", F = new RegExp(`^${N}$`);
    function U(e2) {
      let t2 = "[0-5]\\d";
      e2.precision ? t2 = `${t2}\\.\\d{${e2.precision}}` : null == e2.precision && (t2 = `${t2}(\\.\\d+)?`);
      return `([01]\\d|2[0-3]):[0-5]\\d(:${t2})${e2.precision ? "+" : "?"}`;
    }
    function L(e2) {
      return new RegExp(`^${U(e2)}$`);
    }
    function $(e2) {
      let t2 = `${N}T${U(e2)}`;
      const r2 = [];
      return r2.push(e2.local ? "Z?" : "Z"), e2.offset && r2.push("([+-]\\d{2}:?\\d{2})"), t2 = `${t2}(${r2.join("|")})`, new RegExp(`^${t2}$`);
    }
    function j(e2, t2) {
      return !("v4" !== t2 && t2 || !M.test(e2)) || !("v6" !== t2 && t2 || !O.test(e2));
    }
    function G(e2, t2) {
      if (!C.test(e2)) return false;
      try {
        const [r2] = e2.split(".");
        if (!r2) return false;
        const n2 = r2.replace(/-/g, "+").replace(/_/g, "/").padEnd(r2.length + (4 - r2.length % 4) % 4, "="), s2 = JSON.parse(atob(n2));
        return "object" == typeof s2 && null !== s2 && ((!("typ" in s2) || "JWT" === s2?.typ) && (!!s2.alg && (!t2 || s2.alg === t2)));
      } catch {
        return false;
      }
    }
    function z(e2, t2) {
      return !("v4" !== t2 && t2 || !J.test(e2)) || !("v6" !== t2 && t2 || !B.test(e2));
    }
    class W extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = String(e2.data));
        if (this._getType(e2) !== s.Zp.string) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: s.Zp.string, received: t3.parsedType }), p;
        }
        const t2 = new d();
        let r2;
        for (const o2 of this._def.checks) if ("min" === o2.kind) e2.data.length < o2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_small, minimum: o2.value, type: "string", inclusive: true, exact: false, message: o2.message }), t2.dirty());
        else if ("max" === o2.kind) e2.data.length > o2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_big, maximum: o2.value, type: "string", inclusive: true, exact: false, message: o2.message }), t2.dirty());
        else if ("length" === o2.kind) {
          const s2 = e2.data.length > o2.value, i2 = e2.data.length < o2.value;
          (s2 || i2) && (r2 = this._getOrReturnCtx(e2, r2), s2 ? u(r2, { code: n.eq.too_big, maximum: o2.value, type: "string", inclusive: true, exact: true, message: o2.message }) : i2 && u(r2, { code: n.eq.too_small, minimum: o2.value, type: "string", inclusive: true, exact: true, message: o2.message }), t2.dirty());
        } else if ("email" === o2.kind) A.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "email", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("emoji" === o2.kind) R || (R = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), R.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "emoji", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("uuid" === o2.kind) I.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "uuid", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("nanoid" === o2.kind) T.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "nanoid", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("cuid" === o2.kind) k.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cuid", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("cuid2" === o2.kind) x.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cuid2", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("ulid" === o2.kind) E.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "ulid", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        else if ("url" === o2.kind) try {
          new URL(e2.data);
        } catch {
          r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "url", code: n.eq.invalid_string, message: o2.message }), t2.dirty();
        }
        else if ("regex" === o2.kind) {
          o2.regex.lastIndex = 0;
          o2.regex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "regex", code: n.eq.invalid_string, message: o2.message }), t2.dirty());
        } else if ("trim" === o2.kind) e2.data = e2.data.trim();
        else if ("includes" === o2.kind) e2.data.includes(o2.value, o2.position) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { includes: o2.value, position: o2.position }, message: o2.message }), t2.dirty());
        else if ("toLowerCase" === o2.kind) e2.data = e2.data.toLowerCase();
        else if ("toUpperCase" === o2.kind) e2.data = e2.data.toUpperCase();
        else if ("startsWith" === o2.kind) e2.data.startsWith(o2.value) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { startsWith: o2.value }, message: o2.message }), t2.dirty());
        else if ("endsWith" === o2.kind) e2.data.endsWith(o2.value) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: { endsWith: o2.value }, message: o2.message }), t2.dirty());
        else if ("datetime" === o2.kind) {
          $(o2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "datetime", message: o2.message }), t2.dirty());
        } else if ("date" === o2.kind) {
          F.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "date", message: o2.message }), t2.dirty());
        } else if ("time" === o2.kind) {
          L(o2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.invalid_string, validation: "time", message: o2.message }), t2.dirty());
        } else "duration" === o2.kind ? P.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "duration", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : "ip" === o2.kind ? j(e2.data, o2.version) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "ip", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : "jwt" === o2.kind ? G(e2.data, o2.alg) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "jwt", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : "cidr" === o2.kind ? z(e2.data, o2.version) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "cidr", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : "base64" === o2.kind ? D.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "base64", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : "base64url" === o2.kind ? q.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), u(r2, { validation: "base64url", code: n.eq.invalid_string, message: o2.message }), t2.dirty()) : s.ZS.assertNever(o2);
        return { status: t2.value, value: e2.data };
      }
      _regex(e2, t2, r2) {
        return this.refinement((t3) => e2.test(t3), { validation: t2, code: n.eq.invalid_string, ...c.errToObj(r2) });
      }
      _addCheck(e2) {
        return new W({ ...this._def, checks: [...this._def.checks, e2] });
      }
      email(e2) {
        return this._addCheck({ kind: "email", ...c.errToObj(e2) });
      }
      url(e2) {
        return this._addCheck({ kind: "url", ...c.errToObj(e2) });
      }
      emoji(e2) {
        return this._addCheck({ kind: "emoji", ...c.errToObj(e2) });
      }
      uuid(e2) {
        return this._addCheck({ kind: "uuid", ...c.errToObj(e2) });
      }
      nanoid(e2) {
        return this._addCheck({ kind: "nanoid", ...c.errToObj(e2) });
      }
      cuid(e2) {
        return this._addCheck({ kind: "cuid", ...c.errToObj(e2) });
      }
      cuid2(e2) {
        return this._addCheck({ kind: "cuid2", ...c.errToObj(e2) });
      }
      ulid(e2) {
        return this._addCheck({ kind: "ulid", ...c.errToObj(e2) });
      }
      base64(e2) {
        return this._addCheck({ kind: "base64", ...c.errToObj(e2) });
      }
      base64url(e2) {
        return this._addCheck({ kind: "base64url", ...c.errToObj(e2) });
      }
      jwt(e2) {
        return this._addCheck({ kind: "jwt", ...c.errToObj(e2) });
      }
      ip(e2) {
        return this._addCheck({ kind: "ip", ...c.errToObj(e2) });
      }
      cidr(e2) {
        return this._addCheck({ kind: "cidr", ...c.errToObj(e2) });
      }
      datetime(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e2 }) : this._addCheck({ kind: "datetime", precision: void 0 === e2?.precision ? null : e2?.precision, offset: e2?.offset ?? false, local: e2?.local ?? false, ...c.errToObj(e2?.message) });
      }
      date(e2) {
        return this._addCheck({ kind: "date", message: e2 });
      }
      time(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "time", precision: null, message: e2 }) : this._addCheck({ kind: "time", precision: void 0 === e2?.precision ? null : e2?.precision, ...c.errToObj(e2?.message) });
      }
      duration(e2) {
        return this._addCheck({ kind: "duration", ...c.errToObj(e2) });
      }
      regex(e2, t2) {
        return this._addCheck({ kind: "regex", regex: e2, ...c.errToObj(t2) });
      }
      includes(e2, t2) {
        return this._addCheck({ kind: "includes", value: e2, position: t2?.position, ...c.errToObj(t2?.message) });
      }
      startsWith(e2, t2) {
        return this._addCheck({ kind: "startsWith", value: e2, ...c.errToObj(t2) });
      }
      endsWith(e2, t2) {
        return this._addCheck({ kind: "endsWith", value: e2, ...c.errToObj(t2) });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2, ...c.errToObj(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2, ...c.errToObj(t2) });
      }
      length(e2, t2) {
        return this._addCheck({ kind: "length", value: e2, ...c.errToObj(t2) });
      }
      nonempty(e2) {
        return this.min(1, c.errToObj(e2));
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
    function H(e2, t2) {
      const r2 = (e2.toString().split(".")[1] || "").length, n2 = (t2.toString().split(".")[1] || "").length, s2 = r2 > n2 ? r2 : n2;
      return Number.parseInt(e2.toFixed(s2).replace(".", "")) % Number.parseInt(t2.toFixed(s2).replace(".", "")) / 10 ** s2;
    }
    W.create = (e2) => new W({ checks: [], typeName: Oe.ZodString, coerce: e2?.coerce ?? false, ...b(e2) });
    class K extends S {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e2) {
        this._def.coerce && (e2.data = Number(e2.data));
        if (this._getType(e2) !== s.Zp.number) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: s.Zp.number, received: t3.parsedType }), p;
        }
        let t2;
        const r2 = new d();
        for (const o2 of this._def.checks) if ("int" === o2.kind) s.ZS.isInteger(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.invalid_type, expected: "integer", received: "float", message: o2.message }), r2.dirty());
        else if ("min" === o2.kind) {
          (o2.inclusive ? e2.data < o2.value : e2.data <= o2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_small, minimum: o2.value, type: "number", inclusive: o2.inclusive, exact: false, message: o2.message }), r2.dirty());
        } else if ("max" === o2.kind) {
          (o2.inclusive ? e2.data > o2.value : e2.data >= o2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_big, maximum: o2.value, type: "number", inclusive: o2.inclusive, exact: false, message: o2.message }), r2.dirty());
        } else "multipleOf" === o2.kind ? 0 !== H(e2.data, o2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_multiple_of, multipleOf: o2.value, message: o2.message }), r2.dirty()) : "finite" === o2.kind ? Number.isFinite(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_finite, message: o2.message }), r2.dirty()) : s.ZS.assertNever(o2);
        return { status: r2.value, value: e2.data };
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, c.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, c.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, c.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, c.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new K({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: c.toString(n2) }] });
      }
      _addCheck(e2) {
        return new K({ ...this._def, checks: [...this._def.checks, e2] });
      }
      int(e2) {
        return this._addCheck({ kind: "int", message: c.toString(e2) });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: c.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: c.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: c.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: c.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: c.toString(t2) });
      }
      finite(e2) {
        return this._addCheck({ kind: "finite", message: c.toString(e2) });
      }
      safe(e2) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: c.toString(e2) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: c.toString(e2) });
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
        return !!this._def.checks.find((e2) => "int" === e2.kind || "multipleOf" === e2.kind && s.ZS.isInteger(e2.value));
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
    K.create = (e2) => new K({ checks: [], typeName: Oe.ZodNumber, coerce: e2?.coerce || false, ...b(e2) });
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
        if (this._getType(e2) !== s.Zp.bigint) return this._getInvalidInput(e2);
        let t2;
        const r2 = new d();
        for (const o2 of this._def.checks) if ("min" === o2.kind) {
          (o2.inclusive ? e2.data < o2.value : e2.data <= o2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_small, type: "bigint", minimum: o2.value, inclusive: o2.inclusive, message: o2.message }), r2.dirty());
        } else if ("max" === o2.kind) {
          (o2.inclusive ? e2.data > o2.value : e2.data >= o2.value) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.too_big, type: "bigint", maximum: o2.value, inclusive: o2.inclusive, message: o2.message }), r2.dirty());
        } else "multipleOf" === o2.kind ? e2.data % o2.value !== BigInt(0) && (t2 = this._getOrReturnCtx(e2, t2), u(t2, { code: n.eq.not_multiple_of, multipleOf: o2.value, message: o2.message }), r2.dirty()) : s.ZS.assertNever(o2);
        return { status: r2.value, value: e2.data };
      }
      _getInvalidInput(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return u(t2, { code: n.eq.invalid_type, expected: s.Zp.bigint, received: t2.parsedType }), p;
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, c.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, c.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, c.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, c.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new V({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: c.toString(n2) }] });
      }
      _addCheck(e2) {
        return new V({ ...this._def, checks: [...this._def.checks, e2] });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: c.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: c.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: c.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: c.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: c.toString(t2) });
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
    V.create = (e2) => new V({ checks: [], typeName: Oe.ZodBigInt, coerce: e2?.coerce ?? false, ...b(e2) });
    class Y extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = Boolean(e2.data));
        if (this._getType(e2) !== s.Zp.boolean) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.boolean, received: t2.parsedType }), p;
        }
        return h(e2.data);
      }
    }
    Y.create = (e2) => new Y({ typeName: Oe.ZodBoolean, coerce: e2?.coerce || false, ...b(e2) });
    class Q extends S {
      _parse(e2) {
        this._def.coerce && (e2.data = new Date(e2.data));
        if (this._getType(e2) !== s.Zp.date) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: s.Zp.date, received: t3.parsedType }), p;
        }
        if (Number.isNaN(e2.data.getTime())) {
          return u(this._getOrReturnCtx(e2), { code: n.eq.invalid_date }), p;
        }
        const t2 = new d();
        let r2;
        for (const o2 of this._def.checks) "min" === o2.kind ? e2.data.getTime() < o2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_small, message: o2.message, inclusive: true, exact: false, minimum: o2.value, type: "date" }), t2.dirty()) : "max" === o2.kind ? e2.data.getTime() > o2.value && (r2 = this._getOrReturnCtx(e2, r2), u(r2, { code: n.eq.too_big, message: o2.message, inclusive: true, exact: false, maximum: o2.value, type: "date" }), t2.dirty()) : s.ZS.assertNever(o2);
        return { status: t2.value, value: new Date(e2.data.getTime()) };
      }
      _addCheck(e2) {
        return new Q({ ...this._def, checks: [...this._def.checks, e2] });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2.getTime(), message: c.toString(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2.getTime(), message: c.toString(t2) });
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
    Q.create = (e2) => new Q({ checks: [], coerce: e2?.coerce || false, typeName: Oe.ZodDate, ...b(e2) });
    class X extends S {
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.symbol) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.symbol, received: t2.parsedType }), p;
        }
        return h(e2.data);
      }
    }
    X.create = (e2) => new X({ typeName: Oe.ZodSymbol, ...b(e2) });
    class Z extends S {
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.undefined, received: t2.parsedType }), p;
        }
        return h(e2.data);
      }
    }
    Z.create = (e2) => new Z({ typeName: Oe.ZodUndefined, ...b(e2) });
    class ee extends S {
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.null) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.null, received: t2.parsedType }), p;
        }
        return h(e2.data);
      }
    }
    ee.create = (e2) => new ee({ typeName: Oe.ZodNull, ...b(e2) });
    class te extends S {
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e2) {
        return h(e2.data);
      }
    }
    te.create = (e2) => new te({ typeName: Oe.ZodAny, ...b(e2) });
    class re extends S {
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e2) {
        return h(e2.data);
      }
    }
    re.create = (e2) => new re({ typeName: Oe.ZodUnknown, ...b(e2) });
    class ne extends S {
      _parse(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return u(t2, { code: n.eq.invalid_type, expected: s.Zp.never, received: t2.parsedType }), p;
      }
    }
    ne.create = (e2) => new ne({ typeName: Oe.ZodNever, ...b(e2) });
    class se extends S {
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.void, received: t2.parsedType }), p;
        }
        return h(e2.data);
      }
    }
    se.create = (e2) => new se({ typeName: Oe.ZodVoid, ...b(e2) });
    class oe extends S {
      _parse(e2) {
        const { ctx: t2, status: r2 } = this._processInputParams(e2), o2 = this._def;
        if (t2.parsedType !== s.Zp.array) return u(t2, { code: n.eq.invalid_type, expected: s.Zp.array, received: t2.parsedType }), p;
        if (null !== o2.exactLength) {
          const e3 = t2.data.length > o2.exactLength.value, s2 = t2.data.length < o2.exactLength.value;
          (e3 || s2) && (u(t2, { code: e3 ? n.eq.too_big : n.eq.too_small, minimum: s2 ? o2.exactLength.value : void 0, maximum: e3 ? o2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: o2.exactLength.message }), r2.dirty());
        }
        if (null !== o2.minLength && t2.data.length < o2.minLength.value && (u(t2, { code: n.eq.too_small, minimum: o2.minLength.value, type: "array", inclusive: true, exact: false, message: o2.minLength.message }), r2.dirty()), null !== o2.maxLength && t2.data.length > o2.maxLength.value && (u(t2, { code: n.eq.too_big, maximum: o2.maxLength.value, type: "array", inclusive: true, exact: false, message: o2.maxLength.message }), r2.dirty()), t2.common.async) return Promise.all([...t2.data].map((e3, r3) => o2.type._parseAsync(new v(t2, e3, t2.path, r3)))).then((e3) => d.mergeArray(r2, e3));
        const i2 = [...t2.data].map((e3, r3) => o2.type._parseSync(new v(t2, e3, t2.path, r3)));
        return d.mergeArray(r2, i2);
      }
      get element() {
        return this._def.type;
      }
      min(e2, t2) {
        return new oe({ ...this._def, minLength: { value: e2, message: c.toString(t2) } });
      }
      max(e2, t2) {
        return new oe({ ...this._def, maxLength: { value: e2, message: c.toString(t2) } });
      }
      length(e2, t2) {
        return new oe({ ...this._def, exactLength: { value: e2, message: c.toString(t2) } });
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
          t2[r2] = xe.create(ie(n2));
        }
        return new ae({ ...e2._def, shape: () => t2 });
      }
      return e2 instanceof oe ? new oe({ ...e2._def, type: ie(e2.element) }) : e2 instanceof xe ? xe.create(ie(e2.unwrap())) : e2 instanceof Ee ? Ee.create(ie(e2.unwrap())) : e2 instanceof me ? me.create(e2.items.map((e3) => ie(e3))) : e2;
    }
    oe.create = (e2, t2) => new oe({ type: e2, minLength: null, maxLength: null, exactLength: null, typeName: Oe.ZodArray, ...b(t2) });
    class ae extends S {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const e2 = this._def.shape(), t2 = s.ZS.objectKeys(e2);
        return this._cached = { shape: e2, keys: t2 }, this._cached;
      }
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.object) {
          const t3 = this._getOrReturnCtx(e2);
          return u(t3, { code: n.eq.invalid_type, expected: s.Zp.object, received: t3.parsedType }), p;
        }
        const { status: t2, ctx: r2 } = this._processInputParams(e2), { shape: o2, keys: i2 } = this._getCached(), a2 = [];
        if (!(this._def.catchall instanceof ne && "strip" === this._def.unknownKeys)) for (const e3 in r2.data) i2.includes(e3) || a2.push(e3);
        const c2 = [];
        for (const e3 of i2) {
          const t3 = o2[e3], n2 = r2.data[e3];
          c2.push({ key: { status: "valid", value: e3 }, value: t3._parse(new v(r2, n2, r2.path, e3)), alwaysSet: e3 in r2.data });
        }
        if (this._def.catchall instanceof ne) {
          const e3 = this._def.unknownKeys;
          if ("passthrough" === e3) for (const e4 of a2) c2.push({ key: { status: "valid", value: e4 }, value: { status: "valid", value: r2.data[e4] } });
          else if ("strict" === e3) a2.length > 0 && (u(r2, { code: n.eq.unrecognized_keys, keys: a2 }), t2.dirty());
          else if ("strip" !== e3) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e3 = this._def.catchall;
          for (const t3 of a2) {
            const n2 = r2.data[t3];
            c2.push({ key: { status: "valid", value: t3 }, value: e3._parse(new v(r2, n2, r2.path, t3)), alwaysSet: t3 in r2.data });
          }
        }
        return r2.common.async ? Promise.resolve().then(async () => {
          const e3 = [];
          for (const t3 of c2) {
            const r3 = await t3.key, n2 = await t3.value;
            e3.push({ key: r3, value: n2, alwaysSet: t3.alwaysSet });
          }
          return e3;
        }).then((e3) => d.mergeObjectSync(t2, e3)) : d.mergeObjectSync(t2, c2);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e2) {
        return c.errToObj, new ae({ ...this._def, unknownKeys: "strict", ...void 0 !== e2 ? { errorMap: (t2, r2) => {
          const n2 = this._def.errorMap?.(t2, r2).message ?? r2.defaultError;
          return "unrecognized_keys" === t2.code ? { message: c.errToObj(e2).message ?? n2 } : { message: n2 };
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
        return new ae({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: () => ({ ...this._def.shape(), ...e2._def.shape() }), typeName: Oe.ZodObject });
      }
      setKey(e2, t2) {
        return this.augment({ [e2]: t2 });
      }
      catchall(e2) {
        return new ae({ ...this._def, catchall: e2 });
      }
      pick(e2) {
        const t2 = {};
        for (const r2 of s.ZS.objectKeys(e2)) e2[r2] && this.shape[r2] && (t2[r2] = this.shape[r2]);
        return new ae({ ...this._def, shape: () => t2 });
      }
      omit(e2) {
        const t2 = {};
        for (const r2 of s.ZS.objectKeys(this.shape)) e2[r2] || (t2[r2] = this.shape[r2]);
        return new ae({ ...this._def, shape: () => t2 });
      }
      deepPartial() {
        return ie(this);
      }
      partial(e2) {
        const t2 = {};
        for (const r2 of s.ZS.objectKeys(this.shape)) {
          const n2 = this.shape[r2];
          e2 && !e2[r2] ? t2[r2] = n2 : t2[r2] = n2.optional();
        }
        return new ae({ ...this._def, shape: () => t2 });
      }
      required(e2) {
        const t2 = {};
        for (const r2 of s.ZS.objectKeys(this.shape)) if (e2 && !e2[r2]) t2[r2] = this.shape[r2];
        else {
          let e3 = this.shape[r2];
          for (; e3 instanceof xe; ) e3 = e3._def.innerType;
          t2[r2] = e3;
        }
        return new ae({ ...this._def, shape: () => t2 });
      }
      keyof() {
        return ve(s.ZS.objectKeys(this.shape));
      }
    }
    ae.create = (e2, t2) => new ae({ shape: () => e2, unknownKeys: "strip", catchall: ne.create(), typeName: Oe.ZodObject, ...b(t2) }), ae.strictCreate = (e2, t2) => new ae({ shape: () => e2, unknownKeys: "strict", catchall: ne.create(), typeName: Oe.ZodObject, ...b(t2) }), ae.lazycreate = (e2, t2) => new ae({ shape: e2, unknownKeys: "strip", catchall: ne.create(), typeName: Oe.ZodObject, ...b(t2) });
    class ce extends S {
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
          const s2 = [];
          for (const n2 of r2) {
            const r3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null }, o3 = n2._parseSync({ data: t2.data, path: t2.path, parent: r3 });
            if ("valid" === o3.status) return o3;
            "dirty" !== o3.status || e3 || (e3 = { result: o3, ctx: r3 }), r3.common.issues.length && s2.push(r3.common.issues);
          }
          if (e3) return t2.common.issues.push(...e3.ctx.common.issues), e3.result;
          const o2 = s2.map((e4) => new n.G(e4));
          return u(t2, { code: n.eq.invalid_union, unionErrors: o2 }), p;
        }
      }
      get options() {
        return this._def.options;
      }
    }
    ce.create = (e2, t2) => new ce({ options: e2, typeName: Oe.ZodUnion, ...b(t2) });
    const le = (e2) => e2 instanceof ye ? le(e2.schema) : e2 instanceof ke ? le(e2.innerType()) : e2 instanceof we ? [e2.value] : e2 instanceof _e ? e2.options : e2 instanceof be ? s.ZS.objectValues(e2.enum) : e2 instanceof Ie ? le(e2._def.innerType) : e2 instanceof Z ? [void 0] : e2 instanceof ee ? [null] : e2 instanceof xe ? [void 0, ...le(e2.unwrap())] : e2 instanceof Ee ? [null, ...le(e2.unwrap())] : e2 instanceof Pe || e2 instanceof Re ? le(e2.unwrap()) : e2 instanceof Te ? le(e2._def.innerType) : [];
    class ue extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        if (t2.parsedType !== s.Zp.object) return u(t2, { code: n.eq.invalid_type, expected: s.Zp.object, received: t2.parsedType }), p;
        const r2 = this.discriminator, o2 = t2.data[r2], i2 = this.optionsMap.get(o2);
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
          const t3 = le(r3.shape[e2]);
          if (!t3.length) throw new Error(`A discriminator value for key \`${e2}\` could not be extracted from all schema options`);
          for (const s2 of t3) {
            if (n2.has(s2)) throw new Error(`Discriminator property ${String(e2)} has duplicate value ${String(s2)}`);
            n2.set(s2, r3);
          }
        }
        return new ue({ typeName: Oe.ZodDiscriminatedUnion, discriminator: e2, options: t2, optionsMap: n2, ...b(r2) });
      }
    }
    function de(e2, t2) {
      const r2 = (0, s.CR)(e2), n2 = (0, s.CR)(t2);
      if (e2 === t2) return { valid: true, data: e2 };
      if (r2 === s.Zp.object && n2 === s.Zp.object) {
        const r3 = s.ZS.objectKeys(t2), n3 = s.ZS.objectKeys(e2).filter((e3) => -1 !== r3.indexOf(e3)), o2 = { ...e2, ...t2 };
        for (const r4 of n3) {
          const n4 = de(e2[r4], t2[r4]);
          if (!n4.valid) return { valid: false };
          o2[r4] = n4.data;
        }
        return { valid: true, data: o2 };
      }
      if (r2 === s.Zp.array && n2 === s.Zp.array) {
        if (e2.length !== t2.length) return { valid: false };
        const r3 = [];
        for (let n3 = 0; n3 < e2.length; n3++) {
          const s2 = de(e2[n3], t2[n3]);
          if (!s2.valid) return { valid: false };
          r3.push(s2.data);
        }
        return { valid: true, data: r3 };
      }
      return r2 === s.Zp.date && n2 === s.Zp.date && +e2 === +t2 ? { valid: true, data: e2 } : { valid: false };
    }
    class pe extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), s2 = (e3, s3) => {
          if (f(e3) || f(s3)) return p;
          const o2 = de(e3.value, s3.value);
          return o2.valid ? ((g(e3) || g(s3)) && t2.dirty(), { status: t2.value, value: o2.data }) : (u(r2, { code: n.eq.invalid_intersection_types }), p);
        };
        return r2.common.async ? Promise.all([this._def.left._parseAsync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseAsync({ data: r2.data, path: r2.path, parent: r2 })]).then(([e3, t3]) => s2(e3, t3)) : s2(this._def.left._parseSync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseSync({ data: r2.data, path: r2.path, parent: r2 }));
      }
    }
    pe.create = (e2, t2, r2) => new pe({ left: e2, right: t2, typeName: Oe.ZodIntersection, ...b(r2) });
    class me extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== s.Zp.array) return u(r2, { code: n.eq.invalid_type, expected: s.Zp.array, received: r2.parsedType }), p;
        if (r2.data.length < this._def.items.length) return u(r2, { code: n.eq.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), p;
        !this._def.rest && r2.data.length > this._def.items.length && (u(r2, { code: n.eq.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t2.dirty());
        const o2 = [...r2.data].map((e3, t3) => {
          const n2 = this._def.items[t3] || this._def.rest;
          return n2 ? n2._parse(new v(r2, e3, r2.path, t3)) : null;
        }).filter((e3) => !!e3);
        return r2.common.async ? Promise.all(o2).then((e3) => d.mergeArray(t2, e3)) : d.mergeArray(t2, o2);
      }
      get items() {
        return this._def.items;
      }
      rest(e2) {
        return new me({ ...this._def, rest: e2 });
      }
    }
    me.create = (e2, t2) => {
      if (!Array.isArray(e2)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new me({ items: e2, typeName: Oe.ZodTuple, rest: null, ...b(t2) });
    };
    class he extends S {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== s.Zp.object) return u(r2, { code: n.eq.invalid_type, expected: s.Zp.object, received: r2.parsedType }), p;
        const o2 = [], i2 = this._def.keyType, a2 = this._def.valueType;
        for (const e3 in r2.data) o2.push({ key: i2._parse(new v(r2, e3, r2.path, e3)), value: a2._parse(new v(r2, r2.data[e3], r2.path, e3)), alwaysSet: e3 in r2.data });
        return r2.common.async ? d.mergeObjectAsync(t2, o2) : d.mergeObjectSync(t2, o2);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e2, t2, r2) {
        return new he(t2 instanceof S ? { keyType: e2, valueType: t2, typeName: Oe.ZodRecord, ...b(r2) } : { keyType: W.create(), valueType: e2, typeName: Oe.ZodRecord, ...b(t2) });
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
        if (r2.parsedType !== s.Zp.map) return u(r2, { code: n.eq.invalid_type, expected: s.Zp.map, received: r2.parsedType }), p;
        const o2 = this._def.keyType, i2 = this._def.valueType, a2 = [...r2.data.entries()].map(([e3, t3], n2) => ({ key: o2._parse(new v(r2, e3, r2.path, [n2, "key"])), value: i2._parse(new v(r2, t3, r2.path, [n2, "value"])) }));
        if (r2.common.async) {
          const e3 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const r3 of a2) {
              const n2 = await r3.key, s2 = await r3.value;
              if ("aborted" === n2.status || "aborted" === s2.status) return p;
              "dirty" !== n2.status && "dirty" !== s2.status || t2.dirty(), e3.set(n2.value, s2.value);
            }
            return { status: t2.value, value: e3 };
          });
        }
        {
          const e3 = /* @__PURE__ */ new Map();
          for (const r3 of a2) {
            const n2 = r3.key, s2 = r3.value;
            if ("aborted" === n2.status || "aborted" === s2.status) return p;
            "dirty" !== n2.status && "dirty" !== s2.status || t2.dirty(), e3.set(n2.value, s2.value);
          }
          return { status: t2.value, value: e3 };
        }
      }
    }
    fe.create = (e2, t2, r2) => new fe({ valueType: t2, keyType: e2, typeName: Oe.ZodMap, ...b(r2) });
    class ge extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== s.Zp.set) return u(r2, { code: n.eq.invalid_type, expected: s.Zp.set, received: r2.parsedType }), p;
        const o2 = this._def;
        null !== o2.minSize && r2.data.size < o2.minSize.value && (u(r2, { code: n.eq.too_small, minimum: o2.minSize.value, type: "set", inclusive: true, exact: false, message: o2.minSize.message }), t2.dirty()), null !== o2.maxSize && r2.data.size > o2.maxSize.value && (u(r2, { code: n.eq.too_big, maximum: o2.maxSize.value, type: "set", inclusive: true, exact: false, message: o2.maxSize.message }), t2.dirty());
        const i2 = this._def.valueType;
        function a2(e3) {
          const r3 = /* @__PURE__ */ new Set();
          for (const n2 of e3) {
            if ("aborted" === n2.status) return p;
            "dirty" === n2.status && t2.dirty(), r3.add(n2.value);
          }
          return { status: t2.value, value: r3 };
        }
        const c2 = [...r2.data.values()].map((e3, t3) => i2._parse(new v(r2, e3, r2.path, t3)));
        return r2.common.async ? Promise.all(c2).then((e3) => a2(e3)) : a2(c2);
      }
      min(e2, t2) {
        return new ge({ ...this._def, minSize: { value: e2, message: c.toString(t2) } });
      }
      max(e2, t2) {
        return new ge({ ...this._def, maxSize: { value: e2, message: c.toString(t2) } });
      }
      size(e2, t2) {
        return this.min(e2, t2).max(e2, t2);
      }
      nonempty(e2) {
        return this.min(1, e2);
      }
    }
    ge.create = (e2, t2) => new ge({ valueType: e2, minSize: null, maxSize: null, typeName: Oe.ZodSet, ...b(t2) });
    class ye extends S {
      get schema() {
        return this._def.getter();
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
      }
    }
    ye.create = (e2, t2) => new ye({ getter: e2, typeName: Oe.ZodLazy, ...b(t2) });
    class we extends S {
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
    function ve(e2, t2) {
      return new _e({ values: e2, typeName: Oe.ZodEnum, ...b(t2) });
    }
    we.create = (e2, t2) => new we({ value: e2, typeName: Oe.ZodLiteral, ...b(t2) });
    class _e extends S {
      _parse(e2) {
        if ("string" != typeof e2.data) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return u(t2, { expected: s.ZS.joinValues(r2), received: t2.parsedType, code: n.eq.invalid_type }), p;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e2.data)) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return u(t2, { received: t2.data, code: n.eq.invalid_enum_value, options: r2 }), p;
        }
        return h(e2.data);
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
        return _e.create(e2, { ...this._def, ...t2 });
      }
      exclude(e2, t2 = this._def) {
        return _e.create(this.options.filter((t3) => !e2.includes(t3)), { ...this._def, ...t2 });
      }
    }
    _e.create = ve;
    class be extends S {
      _parse(e2) {
        const t2 = s.ZS.getValidEnumValues(this._def.values), r2 = this._getOrReturnCtx(e2);
        if (r2.parsedType !== s.Zp.string && r2.parsedType !== s.Zp.number) {
          const e3 = s.ZS.objectValues(t2);
          return u(r2, { expected: s.ZS.joinValues(e3), received: r2.parsedType, code: n.eq.invalid_type }), p;
        }
        if (this._cache || (this._cache = new Set(s.ZS.getValidEnumValues(this._def.values))), !this._cache.has(e2.data)) {
          const e3 = s.ZS.objectValues(t2);
          return u(r2, { received: r2.data, code: n.eq.invalid_enum_value, options: e3 }), p;
        }
        return h(e2.data);
      }
      get enum() {
        return this._def.values;
      }
    }
    be.create = (e2, t2) => new be({ values: e2, typeName: Oe.ZodNativeEnum, ...b(t2) });
    class Se extends S {
      unwrap() {
        return this._def.type;
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        if (t2.parsedType !== s.Zp.promise && false === t2.common.async) return u(t2, { code: n.eq.invalid_type, expected: s.Zp.promise, received: t2.parsedType }), p;
        const r2 = t2.parsedType === s.Zp.promise ? t2.data : Promise.resolve(t2.data);
        return h(r2.then((e3) => this._def.type.parseAsync(e3, { path: t2.path, errorMap: t2.common.contextualErrorMap })));
      }
    }
    Se.create = (e2, t2) => new Se({ type: e2, typeName: Oe.ZodPromise, ...b(t2) });
    class ke extends S {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === Oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), n2 = this._def.effect || null, o2 = { addIssue: (e3) => {
          u(r2, e3), e3.fatal ? t2.abort() : t2.dirty();
        }, get path() {
          return r2.path;
        } };
        if (o2.addIssue = o2.addIssue.bind(o2), "preprocess" === n2.type) {
          const e3 = n2.transform(r2.data, o2);
          if (r2.common.async) return Promise.resolve(e3).then(async (e4) => {
            if ("aborted" === t2.value) return p;
            const n3 = await this._def.schema._parseAsync({ data: e4, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? p : "dirty" === n3.status || "dirty" === t2.value ? m(n3.value) : n3;
          });
          {
            if ("aborted" === t2.value) return p;
            const n3 = this._def.schema._parseSync({ data: e3, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? p : "dirty" === n3.status || "dirty" === t2.value ? m(n3.value) : n3;
          }
        }
        if ("refinement" === n2.type) {
          const e3 = (e4) => {
            const t3 = n2.refinement(e4, o2);
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
            const s2 = n2.transform(e3.value, o2);
            if (s2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: t2.value, value: s2 };
          }
          return this._def.schema._parseAsync({ data: r2.data, path: r2.path, parent: r2 }).then((e3) => y(e3) ? Promise.resolve(n2.transform(e3.value, o2)).then((e4) => ({ status: t2.value, value: e4 })) : p);
        }
        s.ZS.assertNever(n2);
      }
    }
    ke.create = (e2, t2, r2) => new ke({ schema: e2, typeName: Oe.ZodEffects, effect: t2, ...b(r2) }), ke.createWithPreprocess = (e2, t2, r2) => new ke({ schema: t2, effect: { type: "preprocess", transform: e2 }, typeName: Oe.ZodEffects, ...b(r2) });
    class xe extends S {
      _parse(e2) {
        return this._getType(e2) === s.Zp.undefined ? h(void 0) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    xe.create = (e2, t2) => new xe({ innerType: e2, typeName: Oe.ZodOptional, ...b(t2) });
    class Ee extends S {
      _parse(e2) {
        return this._getType(e2) === s.Zp.null ? h(null) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    Ee.create = (e2, t2) => new Ee({ innerType: e2, typeName: Oe.ZodNullable, ...b(t2) });
    class Ie extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        let r2 = t2.data;
        return t2.parsedType === s.Zp.undefined && (r2 = this._def.defaultValue()), this._def.innerType._parse({ data: r2, path: t2.path, parent: t2 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    }
    Ie.create = (e2, t2) => new Ie({ innerType: e2, typeName: Oe.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : () => t2.default, ...b(t2) });
    class Te extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = { ...t2, common: { ...t2.common, issues: [] } }, s2 = this._def.innerType._parse({ data: r2.data, path: r2.path, parent: { ...r2 } });
        return w(s2) ? s2.then((e3) => ({ status: "valid", value: "valid" === e3.status ? e3.value : this._def.catchValue({ get error() {
          return new n.G(r2.common.issues);
        }, input: r2.data }) })) : { status: "valid", value: "valid" === s2.status ? s2.value : this._def.catchValue({ get error() {
          return new n.G(r2.common.issues);
        }, input: r2.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    }
    Te.create = (e2, t2) => new Te({ innerType: e2, typeName: Oe.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : () => t2.catch, ...b(t2) });
    class Ce extends S {
      _parse(e2) {
        if (this._getType(e2) !== s.Zp.nan) {
          const t2 = this._getOrReturnCtx(e2);
          return u(t2, { code: n.eq.invalid_type, expected: s.Zp.nan, received: t2.parsedType }), p;
        }
        return { status: "valid", value: e2.data };
      }
    }
    Ce.create = (e2) => new Ce({ typeName: Oe.ZodNaN, ...b(e2) });
    /* @__PURE__ */ Symbol("zod_brand");
    class Pe extends S {
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = t2.data;
        return this._def.type._parse({ data: r2, path: t2.path, parent: t2 });
      }
      unwrap() {
        return this._def.type;
      }
    }
    class Ae extends S {
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.common.async) {
          return (async () => {
            const e3 = await this._def.in._parseAsync({ data: r2.data, path: r2.path, parent: r2 });
            return "aborted" === e3.status ? p : "dirty" === e3.status ? (t2.dirty(), m(e3.value)) : this._def.out._parseAsync({ data: e3.value, path: r2.path, parent: r2 });
          })();
        }
        {
          const e3 = this._def.in._parseSync({ data: r2.data, path: r2.path, parent: r2 });
          return "aborted" === e3.status ? p : "dirty" === e3.status ? (t2.dirty(), { status: "dirty", value: e3.value }) : this._def.out._parseSync({ data: e3.value, path: r2.path, parent: r2 });
        }
      }
      static create(e2, t2) {
        return new Ae({ in: e2, out: t2, typeName: Oe.ZodPipeline });
      }
    }
    class Re extends S {
      _parse(e2) {
        const t2 = this._def.innerType._parse(e2), r2 = (e3) => (y(e3) && (e3.value = Object.freeze(e3.value)), e3);
        return w(t2) ? t2.then((e3) => r2(e3)) : r2(t2);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    function Me(e2, t2) {
      const r2 = "function" == typeof e2 ? e2(t2) : "string" == typeof e2 ? { message: e2 } : e2;
      return "string" == typeof r2 ? { message: r2 } : r2;
    }
    function Je(e2, t2 = {}, r2) {
      return e2 ? te.create().superRefine((n2, s2) => {
        const o2 = e2(n2);
        if (o2 instanceof Promise) return o2.then((e3) => {
          if (!e3) {
            const e4 = Me(t2, n2), o3 = e4.fatal ?? r2 ?? true;
            s2.addIssue({ code: "custom", ...e4, fatal: o3 });
          }
        });
        if (!o2) {
          const e3 = Me(t2, n2), o3 = e3.fatal ?? r2 ?? true;
          s2.addIssue({ code: "custom", ...e3, fatal: o3 });
        }
      }) : te.create();
    }
    Re.create = (e2, t2) => new Re({ innerType: e2, typeName: Oe.ZodReadonly, ...b(t2) });
    ae.lazycreate;
    var Oe;
    !(function(e2) {
      e2.ZodString = "ZodString", e2.ZodNumber = "ZodNumber", e2.ZodNaN = "ZodNaN", e2.ZodBigInt = "ZodBigInt", e2.ZodBoolean = "ZodBoolean", e2.ZodDate = "ZodDate", e2.ZodSymbol = "ZodSymbol", e2.ZodUndefined = "ZodUndefined", e2.ZodNull = "ZodNull", e2.ZodAny = "ZodAny", e2.ZodUnknown = "ZodUnknown", e2.ZodNever = "ZodNever", e2.ZodVoid = "ZodVoid", e2.ZodArray = "ZodArray", e2.ZodObject = "ZodObject", e2.ZodUnion = "ZodUnion", e2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e2.ZodIntersection = "ZodIntersection", e2.ZodTuple = "ZodTuple", e2.ZodRecord = "ZodRecord", e2.ZodMap = "ZodMap", e2.ZodSet = "ZodSet", e2.ZodFunction = "ZodFunction", e2.ZodLazy = "ZodLazy", e2.ZodLiteral = "ZodLiteral", e2.ZodEnum = "ZodEnum", e2.ZodEffects = "ZodEffects", e2.ZodNativeEnum = "ZodNativeEnum", e2.ZodOptional = "ZodOptional", e2.ZodNullable = "ZodNullable", e2.ZodDefault = "ZodDefault", e2.ZodCatch = "ZodCatch", e2.ZodPromise = "ZodPromise", e2.ZodBranded = "ZodBranded", e2.ZodPipeline = "ZodPipeline", e2.ZodReadonly = "ZodReadonly";
    })(Oe || (Oe = {}));
    const Be = (e2, t2 = { message: `Input not instance of ${e2.name}` }) => Je((t3) => t3 instanceof e2, t2), De = W.create, qe = K.create, Ne = (Ce.create, V.create, Y.create), Fe = (Q.create, X.create, Z.create, ee.create), Ue = te.create, Le = re.create, $e = ne.create, je = (se.create, oe.create), Ge = ae.create, ze = (ae.strictCreate, ce.create), We = ue.create, He = (pe.create, me.create), Ke = he.create, Ve = (fe.create, ge.create, ye.create), Ye = we.create, Qe = _e.create, Xe = be.create, Ze = (Se.create, ke.create, xe.create), et = (Ee.create, ke.createWithPreprocess);
    Ae.create;
  }