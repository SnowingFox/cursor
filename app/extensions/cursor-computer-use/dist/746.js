"use strict";
exports.id = 746, exports.ids = [746], exports.modules = { 9746: (e, t, s) => {
  var a, n;
  s.d(t, { Nl: () => $e, fc: () => ze, ai: () => Pe, Ik: () => Fe, KC: () => Le }), (function(e2) {
    e2.assertEqual = (e3) => {
    }, e2.assertIs = function(e3) {
    }, e2.assertNever = function(e3) {
      throw new Error();
    }, e2.arrayToEnum = (e3) => {
      const t2 = {};
      for (const s2 of e3) t2[s2] = s2;
      return t2;
    }, e2.getValidEnumValues = (t2) => {
      const s2 = e2.objectKeys(t2).filter((e3) => "number" != typeof t2[t2[e3]]), a2 = {};
      for (const e3 of s2) a2[e3] = t2[e3];
      return e2.objectValues(a2);
    }, e2.objectValues = (t2) => e2.objectKeys(t2).map(function(e3) {
      return t2[e3];
    }), e2.objectKeys = "function" == typeof Object.keys ? (e3) => Object.keys(e3) : (e3) => {
      const t2 = [];
      for (const s2 in e3) Object.prototype.hasOwnProperty.call(e3, s2) && t2.push(s2);
      return t2;
    }, e2.find = (e3, t2) => {
      for (const s2 of e3) if (t2(s2)) return s2;
    }, e2.isInteger = "function" == typeof Number.isInteger ? (e3) => Number.isInteger(e3) : (e3) => "number" == typeof e3 && Number.isFinite(e3) && Math.floor(e3) === e3, e2.joinValues = function(e3, t2 = " | ") {
      return e3.map((e4) => "string" == typeof e4 ? `'${e4}'` : e4).join(t2);
    }, e2.jsonStringifyReplacer = (e3, t2) => "bigint" == typeof t2 ? t2.toString() : t2;
  })(a || (a = {})), (function(e2) {
    e2.mergeShapes = (e3, t2) => ({ ...e3, ...t2 });
  })(n || (n = {}));
  const r = a.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), i = (e2) => {
    switch (typeof e2) {
      case "undefined":
        return r.undefined;
      case "string":
        return r.string;
      case "number":
        return Number.isNaN(e2) ? r.nan : r.number;
      case "boolean":
        return r.boolean;
      case "function":
        return r.function;
      case "bigint":
        return r.bigint;
      case "symbol":
        return r.symbol;
      case "object":
        return Array.isArray(e2) ? r.array : null === e2 ? r.null : e2.then && "function" == typeof e2.then && e2.catch && "function" == typeof e2.catch ? r.promise : "undefined" != typeof Map && e2 instanceof Map ? r.map : "undefined" != typeof Set && e2 instanceof Set ? r.set : "undefined" != typeof Date && e2 instanceof Date ? r.date : r.object;
      default:
        return r.unknown;
    }
  }, d = a.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  class o extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e2) {
      super(), this.issues = [], this.addIssue = (e3) => {
        this.issues = [...this.issues, e3];
      }, this.addIssues = (e3 = []) => {
        this.issues = [...this.issues, ...e3];
      };
      const t2 = new.target.prototype;
      Object.setPrototypeOf ? Object.setPrototypeOf(this, t2) : this.__proto__ = t2, this.name = "ZodError", this.issues = e2;
    }
    format(e2) {
      const t2 = e2 || function(e3) {
        return e3.message;
      }, s2 = { _errors: [] }, a2 = (e3) => {
        for (const n2 of e3.issues) if ("invalid_union" === n2.code) n2.unionErrors.map(a2);
        else if ("invalid_return_type" === n2.code) a2(n2.returnTypeError);
        else if ("invalid_arguments" === n2.code) a2(n2.argumentsError);
        else if (0 === n2.path.length) s2._errors.push(t2(n2));
        else {
          let e4 = s2, a3 = 0;
          for (; a3 < n2.path.length; ) {
            const s3 = n2.path[a3];
            a3 === n2.path.length - 1 ? (e4[s3] = e4[s3] || { _errors: [] }, e4[s3]._errors.push(t2(n2))) : e4[s3] = e4[s3] || { _errors: [] }, e4 = e4[s3], a3++;
          }
        }
      };
      return a2(this), s2;
    }
    static assert(e2) {
      if (!(e2 instanceof o)) throw new Error(`Not a ZodError: ${e2}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, a.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return 0 === this.issues.length;
    }
    flatten(e2 = (e3) => e3.message) {
      const t2 = {}, s2 = [];
      for (const a2 of this.issues) if (a2.path.length > 0) {
        const s3 = a2.path[0];
        t2[s3] = t2[s3] || [], t2[s3].push(e2(a2));
      } else s2.push(e2(a2));
      return { formErrors: s2, fieldErrors: t2 };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  o.create = (e2) => new o(e2);
  const u = (e2, t2) => {
    let s2;
    switch (e2.code) {
      case d.invalid_type:
        s2 = e2.received === r.undefined ? "Required" : `Expected ${e2.expected}, received ${e2.received}`;
        break;
      case d.invalid_literal:
        s2 = `Invalid literal value, expected ${JSON.stringify(e2.expected, a.jsonStringifyReplacer)}`;
        break;
      case d.unrecognized_keys:
        s2 = `Unrecognized key(s) in object: ${a.joinValues(e2.keys, ", ")}`;
        break;
      case d.invalid_union:
        s2 = "Invalid input";
        break;
      case d.invalid_union_discriminator:
        s2 = `Invalid discriminator value. Expected ${a.joinValues(e2.options)}`;
        break;
      case d.invalid_enum_value:
        s2 = `Invalid enum value. Expected ${a.joinValues(e2.options)}, received '${e2.received}'`;
        break;
      case d.invalid_arguments:
        s2 = "Invalid function arguments";
        break;
      case d.invalid_return_type:
        s2 = "Invalid function return type";
        break;
      case d.invalid_date:
        s2 = "Invalid date";
        break;
      case d.invalid_string:
        "object" == typeof e2.validation ? "includes" in e2.validation ? (s2 = `Invalid input: must include "${e2.validation.includes}"`, "number" == typeof e2.validation.position && (s2 = `${s2} at one or more positions greater than or equal to ${e2.validation.position}`)) : "startsWith" in e2.validation ? s2 = `Invalid input: must start with "${e2.validation.startsWith}"` : "endsWith" in e2.validation ? s2 = `Invalid input: must end with "${e2.validation.endsWith}"` : a.assertNever(e2.validation) : s2 = "regex" !== e2.validation ? `Invalid ${e2.validation}` : "Invalid";
        break;
      case d.too_small:
        s2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "more than"} ${e2.minimum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "over"} ${e2.minimum} character(s)` : "number" === e2.type || "bigint" === e2.type ? `Number must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${e2.minimum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e2.minimum))}` : "Invalid input";
        break;
      case d.too_big:
        s2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "less than"} ${e2.maximum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "under"} ${e2.maximum} character(s)` : "number" === e2.type ? `Number must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "bigint" === e2.type ? `BigInt must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly" : e2.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e2.maximum))}` : "Invalid input";
        break;
      case d.custom:
        s2 = "Invalid input";
        break;
      case d.invalid_intersection_types:
        s2 = "Intersection results could not be merged";
        break;
      case d.not_multiple_of:
        s2 = `Number must be a multiple of ${e2.multipleOf}`;
        break;
      case d.not_finite:
        s2 = "Number must be finite";
        break;
      default:
        s2 = t2.defaultError, a.assertNever(e2);
    }
    return { message: s2 };
  };
  let c = u;
  function l() {
    return c;
  }
  var h;
  !(function(e2) {
    e2.errToObj = (e3) => "string" == typeof e3 ? { message: e3 } : e3 || {}, e2.toString = (e3) => "string" == typeof e3 ? e3 : e3?.message;
  })(h || (h = {}));
  const p = (e2) => {
    const { data: t2, path: s2, errorMaps: a2, issueData: n2 } = e2, r2 = [...s2, ...n2.path || []], i2 = { ...n2, path: r2 };
    if (void 0 !== n2.message) return { ...n2, path: r2, message: n2.message };
    let d2 = "";
    const o2 = a2.filter((e3) => !!e3).slice().reverse();
    for (const e3 of o2) d2 = e3(i2, { data: t2, defaultError: d2 }).message;
    return { ...n2, path: r2, message: d2 };
  };
  function m(e2, t2) {
    const s2 = l(), a2 = p({ issueData: t2, data: e2.data, path: e2.path, errorMaps: [e2.common.contextualErrorMap, e2.schemaErrorMap, s2, s2 === u ? void 0 : u].filter((e3) => !!e3) });
    e2.common.issues.push(a2);
  }
  class f {
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
      const s2 = [];
      for (const a2 of t2) {
        if ("aborted" === a2.status) return _;
        "dirty" === a2.status && e2.dirty(), s2.push(a2.value);
      }
      return { status: e2.value, value: s2 };
    }
    static async mergeObjectAsync(e2, t2) {
      const s2 = [];
      for (const e3 of t2) {
        const t3 = await e3.key, a2 = await e3.value;
        s2.push({ key: t3, value: a2 });
      }
      return f.mergeObjectSync(e2, s2);
    }
    static mergeObjectSync(e2, t2) {
      const s2 = {};
      for (const a2 of t2) {
        const { key: t3, value: n2 } = a2;
        if ("aborted" === t3.status) return _;
        if ("aborted" === n2.status) return _;
        "dirty" === t3.status && e2.dirty(), "dirty" === n2.status && e2.dirty(), "__proto__" === t3.value || void 0 === n2.value && !a2.alwaysSet || (s2[t3.value] = n2.value);
      }
      return { status: e2.value, value: s2 };
    }
  }
  const _ = Object.freeze({ status: "aborted" }), y = (e2) => ({ status: "dirty", value: e2 }), g = (e2) => ({ status: "valid", value: e2 }), v = (e2) => "aborted" === e2.status, k = (e2) => "dirty" === e2.status, x = (e2) => "valid" === e2.status, b = (e2) => "undefined" != typeof Promise && e2 instanceof Promise;
  class w {
    constructor(e2, t2, s2, a2) {
      this._cachedPath = [], this.parent = e2, this.data = t2, this._path = s2, this._key = a2;
    }
    get path() {
      return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
  }
  const Z = (e2, t2) => {
    if (x(t2)) return { success: true, data: t2.value };
    if (!e2.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return { success: false, get error() {
      if (this._error) return this._error;
      const t3 = new o(e2.common.issues);
      return this._error = t3, this._error;
    } };
  };
  function O(e2) {
    if (!e2) return {};
    const { errorMap: t2, invalid_type_error: s2, required_error: a2, description: n2 } = e2;
    if (t2 && (s2 || a2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (t2) return { errorMap: t2, description: n2 };
    return { errorMap: (t3, n3) => {
      const { message: r2 } = e2;
      return "invalid_enum_value" === t3.code ? { message: r2 ?? n3.defaultError } : void 0 === n3.data ? { message: r2 ?? a2 ?? n3.defaultError } : "invalid_type" !== t3.code ? { message: n3.defaultError } : { message: r2 ?? s2 ?? n3.defaultError };
    }, description: n2 };
  }
  class T {
    get description() {
      return this._def.description;
    }
    _getType(e2) {
      return i(e2.data);
    }
    _getOrReturnCtx(e2, t2) {
      return t2 || { common: e2.parent.common, data: e2.data, parsedType: i(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent };
    }
    _processInputParams(e2) {
      return { status: new f(), ctx: { common: e2.parent.common, data: e2.data, parsedType: i(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent } };
    }
    _parseSync(e2) {
      const t2 = this._parse(e2);
      if (b(t2)) throw new Error("Synchronous parse encountered promise.");
      return t2;
    }
    _parseAsync(e2) {
      const t2 = this._parse(e2);
      return Promise.resolve(t2);
    }
    parse(e2, t2) {
      const s2 = this.safeParse(e2, t2);
      if (s2.success) return s2.data;
      throw s2.error;
    }
    safeParse(e2, t2) {
      const s2 = { common: { issues: [], async: t2?.async ?? false, contextualErrorMap: t2?.errorMap }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: i(e2) }, a2 = this._parseSync({ data: e2, path: s2.path, parent: s2 });
      return Z(s2, a2);
    }
    "~validate"(e2) {
      const t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: i(e2) };
      if (!this["~standard"].async) try {
        const s2 = this._parseSync({ data: e2, path: [], parent: t2 });
        return x(s2) ? { value: s2.value } : { issues: t2.common.issues };
      } catch (e3) {
        e3?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
      }
      return this._parseAsync({ data: e2, path: [], parent: t2 }).then((e3) => x(e3) ? { value: e3.value } : { issues: t2.common.issues });
    }
    async parseAsync(e2, t2) {
      const s2 = await this.safeParseAsync(e2, t2);
      if (s2.success) return s2.data;
      throw s2.error;
    }
    async safeParseAsync(e2, t2) {
      const s2 = { common: { issues: [], contextualErrorMap: t2?.errorMap, async: true }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: i(e2) }, a2 = this._parse({ data: e2, path: s2.path, parent: s2 }), n2 = await (b(a2) ? a2 : Promise.resolve(a2));
      return Z(s2, n2);
    }
    refine(e2, t2) {
      const s2 = (e3) => "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e3) : t2;
      return this._refinement((t3, a2) => {
        const n2 = e2(t3), r2 = () => a2.addIssue({ code: d.custom, ...s2(t3) });
        return "undefined" != typeof Promise && n2 instanceof Promise ? n2.then((e3) => !!e3 || (r2(), false)) : !!n2 || (r2(), false);
      });
    }
    refinement(e2, t2) {
      return this._refinement((s2, a2) => !!e2(s2) || (a2.addIssue("function" == typeof t2 ? t2(s2, a2) : t2), false));
    }
    _refinement(e2) {
      return new Ze({ schema: this, typeName: Re.ZodEffects, effect: { type: "refinement", refinement: e2 } });
    }
    superRefine(e2) {
      return this._refinement(e2);
    }
    constructor(e2) {
      this.spa = this.safeParseAsync, this._def = e2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (e3) => this["~validate"](e3) };
    }
    optional() {
      return Oe.create(this, this._def);
    }
    nullable() {
      return Te.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ue.create(this);
    }
    promise() {
      return we.create(this, this._def);
    }
    or(e2) {
      return he.create([this, e2], this._def);
    }
    and(e2) {
      return me.create(this, e2, this._def);
    }
    transform(e2) {
      return new Ze({ ...O(this._def), schema: this, typeName: Re.ZodEffects, effect: { type: "transform", transform: e2 } });
    }
    default(e2) {
      const t2 = "function" == typeof e2 ? e2 : () => e2;
      return new Ce({ ...O(this._def), innerType: this, defaultValue: t2, typeName: Re.ZodDefault });
    }
    brand() {
      return new Se({ typeName: Re.ZodBranded, type: this, ...O(this._def) });
    }
    catch(e2) {
      const t2 = "function" == typeof e2 ? e2 : () => e2;
      return new Ne({ ...O(this._def), innerType: this, catchValue: t2, typeName: Re.ZodCatch });
    }
    describe(e2) {
      return new (0, this.constructor)({ ...this._def, description: e2 });
    }
    pipe(e2) {
      return je.create(this, e2);
    }
    readonly() {
      return Ie.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const C = /^c[^\s-]{8,}$/i, N = /^[0-9a-z]+$/, A = /^[0-9A-HJKMNP-TV-Z]{26}$/i, S = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, j = /^[a-z0-9_-]{21}$/i, I = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, E = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, R = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  let $;
  const P = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, F = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, L = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, z = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, M = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, D = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, V = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", K = new RegExp(`^${V}$`);
  function U(e2) {
    let t2 = "[0-5]\\d";
    e2.precision ? t2 = `${t2}\\.\\d{${e2.precision}}` : null == e2.precision && (t2 = `${t2}(\\.\\d+)?`);
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t2})${e2.precision ? "+" : "?"}`;
  }
  function B(e2) {
    return new RegExp(`^${U(e2)}$`);
  }
  function W(e2) {
    let t2 = `${V}T${U(e2)}`;
    const s2 = [];
    return s2.push(e2.local ? "Z?" : "Z"), e2.offset && s2.push("([+-]\\d{2}:?\\d{2})"), t2 = `${t2}(${s2.join("|")})`, new RegExp(`^${t2}$`);
  }
  function q(e2, t2) {
    return !("v4" !== t2 && t2 || !P.test(e2)) || !("v6" !== t2 && t2 || !L.test(e2));
  }
  function J(e2, t2) {
    if (!I.test(e2)) return false;
    try {
      const [s2] = e2.split(".");
      if (!s2) return false;
      const a2 = s2.replace(/-/g, "+").replace(/_/g, "/").padEnd(s2.length + (4 - s2.length % 4) % 4, "="), n2 = JSON.parse(atob(a2));
      return "object" == typeof n2 && null !== n2 && ((!("typ" in n2) || "JWT" === n2?.typ) && (!!n2.alg && (!t2 || n2.alg === t2)));
    } catch {
      return false;
    }
  }
  function H(e2, t2) {
    return !("v4" !== t2 && t2 || !F.test(e2)) || !("v6" !== t2 && t2 || !z.test(e2));
  }
  class Y extends T {
    _parse(e2) {
      this._def.coerce && (e2.data = String(e2.data));
      if (this._getType(e2) !== r.string) {
        const t3 = this._getOrReturnCtx(e2);
        return m(t3, { code: d.invalid_type, expected: r.string, received: t3.parsedType }), _;
      }
      const t2 = new f();
      let s2;
      for (const n2 of this._def.checks) if ("min" === n2.kind) e2.data.length < n2.value && (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.too_small, minimum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t2.dirty());
      else if ("max" === n2.kind) e2.data.length > n2.value && (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.too_big, maximum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t2.dirty());
      else if ("length" === n2.kind) {
        const a2 = e2.data.length > n2.value, r2 = e2.data.length < n2.value;
        (a2 || r2) && (s2 = this._getOrReturnCtx(e2, s2), a2 ? m(s2, { code: d.too_big, maximum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }) : r2 && m(s2, { code: d.too_small, minimum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }), t2.dirty());
      } else if ("email" === n2.kind) R.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "email", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("emoji" === n2.kind) $ || ($ = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), $.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "emoji", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("uuid" === n2.kind) S.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "uuid", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("nanoid" === n2.kind) j.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "nanoid", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("cuid" === n2.kind) C.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "cuid", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("cuid2" === n2.kind) N.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "cuid2", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("ulid" === n2.kind) A.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "ulid", code: d.invalid_string, message: n2.message }), t2.dirty());
      else if ("url" === n2.kind) try {
        new URL(e2.data);
      } catch {
        s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "url", code: d.invalid_string, message: n2.message }), t2.dirty();
      }
      else if ("regex" === n2.kind) {
        n2.regex.lastIndex = 0;
        n2.regex.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "regex", code: d.invalid_string, message: n2.message }), t2.dirty());
      } else if ("trim" === n2.kind) e2.data = e2.data.trim();
      else if ("includes" === n2.kind) e2.data.includes(n2.value, n2.position) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: { includes: n2.value, position: n2.position }, message: n2.message }), t2.dirty());
      else if ("toLowerCase" === n2.kind) e2.data = e2.data.toLowerCase();
      else if ("toUpperCase" === n2.kind) e2.data = e2.data.toUpperCase();
      else if ("startsWith" === n2.kind) e2.data.startsWith(n2.value) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: { startsWith: n2.value }, message: n2.message }), t2.dirty());
      else if ("endsWith" === n2.kind) e2.data.endsWith(n2.value) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: { endsWith: n2.value }, message: n2.message }), t2.dirty());
      else if ("datetime" === n2.kind) {
        W(n2).test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: "datetime", message: n2.message }), t2.dirty());
      } else if ("date" === n2.kind) {
        K.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: "date", message: n2.message }), t2.dirty());
      } else if ("time" === n2.kind) {
        B(n2).test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.invalid_string, validation: "time", message: n2.message }), t2.dirty());
      } else "duration" === n2.kind ? E.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "duration", code: d.invalid_string, message: n2.message }), t2.dirty()) : "ip" === n2.kind ? q(e2.data, n2.version) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "ip", code: d.invalid_string, message: n2.message }), t2.dirty()) : "jwt" === n2.kind ? J(e2.data, n2.alg) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "jwt", code: d.invalid_string, message: n2.message }), t2.dirty()) : "cidr" === n2.kind ? H(e2.data, n2.version) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "cidr", code: d.invalid_string, message: n2.message }), t2.dirty()) : "base64" === n2.kind ? M.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "base64", code: d.invalid_string, message: n2.message }), t2.dirty()) : "base64url" === n2.kind ? D.test(e2.data) || (s2 = this._getOrReturnCtx(e2, s2), m(s2, { validation: "base64url", code: d.invalid_string, message: n2.message }), t2.dirty()) : a.assertNever(n2);
      return { status: t2.value, value: e2.data };
    }
    _regex(e2, t2, s2) {
      return this.refinement((t3) => e2.test(t3), { validation: t2, code: d.invalid_string, ...h.errToObj(s2) });
    }
    _addCheck(e2) {
      return new Y({ ...this._def, checks: [...this._def.checks, e2] });
    }
    email(e2) {
      return this._addCheck({ kind: "email", ...h.errToObj(e2) });
    }
    url(e2) {
      return this._addCheck({ kind: "url", ...h.errToObj(e2) });
    }
    emoji(e2) {
      return this._addCheck({ kind: "emoji", ...h.errToObj(e2) });
    }
    uuid(e2) {
      return this._addCheck({ kind: "uuid", ...h.errToObj(e2) });
    }
    nanoid(e2) {
      return this._addCheck({ kind: "nanoid", ...h.errToObj(e2) });
    }
    cuid(e2) {
      return this._addCheck({ kind: "cuid", ...h.errToObj(e2) });
    }
    cuid2(e2) {
      return this._addCheck({ kind: "cuid2", ...h.errToObj(e2) });
    }
    ulid(e2) {
      return this._addCheck({ kind: "ulid", ...h.errToObj(e2) });
    }
    base64(e2) {
      return this._addCheck({ kind: "base64", ...h.errToObj(e2) });
    }
    base64url(e2) {
      return this._addCheck({ kind: "base64url", ...h.errToObj(e2) });
    }
    jwt(e2) {
      return this._addCheck({ kind: "jwt", ...h.errToObj(e2) });
    }
    ip(e2) {
      return this._addCheck({ kind: "ip", ...h.errToObj(e2) });
    }
    cidr(e2) {
      return this._addCheck({ kind: "cidr", ...h.errToObj(e2) });
    }
    datetime(e2) {
      return "string" == typeof e2 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e2 }) : this._addCheck({ kind: "datetime", precision: void 0 === e2?.precision ? null : e2?.precision, offset: e2?.offset ?? false, local: e2?.local ?? false, ...h.errToObj(e2?.message) });
    }
    date(e2) {
      return this._addCheck({ kind: "date", message: e2 });
    }
    time(e2) {
      return "string" == typeof e2 ? this._addCheck({ kind: "time", precision: null, message: e2 }) : this._addCheck({ kind: "time", precision: void 0 === e2?.precision ? null : e2?.precision, ...h.errToObj(e2?.message) });
    }
    duration(e2) {
      return this._addCheck({ kind: "duration", ...h.errToObj(e2) });
    }
    regex(e2, t2) {
      return this._addCheck({ kind: "regex", regex: e2, ...h.errToObj(t2) });
    }
    includes(e2, t2) {
      return this._addCheck({ kind: "includes", value: e2, position: t2?.position, ...h.errToObj(t2?.message) });
    }
    startsWith(e2, t2) {
      return this._addCheck({ kind: "startsWith", value: e2, ...h.errToObj(t2) });
    }
    endsWith(e2, t2) {
      return this._addCheck({ kind: "endsWith", value: e2, ...h.errToObj(t2) });
    }
    min(e2, t2) {
      return this._addCheck({ kind: "min", value: e2, ...h.errToObj(t2) });
    }
    max(e2, t2) {
      return this._addCheck({ kind: "max", value: e2, ...h.errToObj(t2) });
    }
    length(e2, t2) {
      return this._addCheck({ kind: "length", value: e2, ...h.errToObj(t2) });
    }
    nonempty(e2) {
      return this.min(1, h.errToObj(e2));
    }
    trim() {
      return new Y({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
    }
    toLowerCase() {
      return new Y({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
    }
    toUpperCase() {
      return new Y({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
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
    const s2 = (e2.toString().split(".")[1] || "").length, a2 = (t2.toString().split(".")[1] || "").length, n2 = s2 > a2 ? s2 : a2;
    return Number.parseInt(e2.toFixed(n2).replace(".", "")) % Number.parseInt(t2.toFixed(n2).replace(".", "")) / 10 ** n2;
  }
  Y.create = (e2) => new Y({ checks: [], typeName: Re.ZodString, coerce: e2?.coerce ?? false, ...O(e2) });
  class X extends T {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e2) {
      this._def.coerce && (e2.data = Number(e2.data));
      if (this._getType(e2) !== r.number) {
        const t3 = this._getOrReturnCtx(e2);
        return m(t3, { code: d.invalid_type, expected: r.number, received: t3.parsedType }), _;
      }
      let t2;
      const s2 = new f();
      for (const n2 of this._def.checks) if ("int" === n2.kind) a.isInteger(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.invalid_type, expected: "integer", received: "float", message: n2.message }), s2.dirty());
      else if ("min" === n2.kind) {
        (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.too_small, minimum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), s2.dirty());
      } else if ("max" === n2.kind) {
        (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.too_big, maximum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), s2.dirty());
      } else "multipleOf" === n2.kind ? 0 !== G(e2.data, n2.value) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.not_multiple_of, multipleOf: n2.value, message: n2.message }), s2.dirty()) : "finite" === n2.kind ? Number.isFinite(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.not_finite, message: n2.message }), s2.dirty()) : a.assertNever(n2);
      return { status: s2.value, value: e2.data };
    }
    gte(e2, t2) {
      return this.setLimit("min", e2, true, h.toString(t2));
    }
    gt(e2, t2) {
      return this.setLimit("min", e2, false, h.toString(t2));
    }
    lte(e2, t2) {
      return this.setLimit("max", e2, true, h.toString(t2));
    }
    lt(e2, t2) {
      return this.setLimit("max", e2, false, h.toString(t2));
    }
    setLimit(e2, t2, s2, a2) {
      return new X({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: s2, message: h.toString(a2) }] });
    }
    _addCheck(e2) {
      return new X({ ...this._def, checks: [...this._def.checks, e2] });
    }
    int(e2) {
      return this._addCheck({ kind: "int", message: h.toString(e2) });
    }
    positive(e2) {
      return this._addCheck({ kind: "min", value: 0, inclusive: false, message: h.toString(e2) });
    }
    negative(e2) {
      return this._addCheck({ kind: "max", value: 0, inclusive: false, message: h.toString(e2) });
    }
    nonpositive(e2) {
      return this._addCheck({ kind: "max", value: 0, inclusive: true, message: h.toString(e2) });
    }
    nonnegative(e2) {
      return this._addCheck({ kind: "min", value: 0, inclusive: true, message: h.toString(e2) });
    }
    multipleOf(e2, t2) {
      return this._addCheck({ kind: "multipleOf", value: e2, message: h.toString(t2) });
    }
    finite(e2) {
      return this._addCheck({ kind: "finite", message: h.toString(e2) });
    }
    safe(e2) {
      return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: h.toString(e2) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: h.toString(e2) });
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
      return !!this._def.checks.find((e2) => "int" === e2.kind || "multipleOf" === e2.kind && a.isInteger(e2.value));
    }
    get isFinite() {
      let e2 = null, t2 = null;
      for (const s2 of this._def.checks) {
        if ("finite" === s2.kind || "int" === s2.kind || "multipleOf" === s2.kind) return true;
        "min" === s2.kind ? (null === t2 || s2.value > t2) && (t2 = s2.value) : "max" === s2.kind && (null === e2 || s2.value < e2) && (e2 = s2.value);
      }
      return Number.isFinite(t2) && Number.isFinite(e2);
    }
  }
  X.create = (e2) => new X({ checks: [], typeName: Re.ZodNumber, coerce: e2?.coerce || false, ...O(e2) });
  class Q extends T {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(e2) {
      if (this._def.coerce) try {
        e2.data = BigInt(e2.data);
      } catch {
        return this._getInvalidInput(e2);
      }
      if (this._getType(e2) !== r.bigint) return this._getInvalidInput(e2);
      let t2;
      const s2 = new f();
      for (const n2 of this._def.checks) if ("min" === n2.kind) {
        (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.too_small, type: "bigint", minimum: n2.value, inclusive: n2.inclusive, message: n2.message }), s2.dirty());
      } else if ("max" === n2.kind) {
        (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.too_big, type: "bigint", maximum: n2.value, inclusive: n2.inclusive, message: n2.message }), s2.dirty());
      } else "multipleOf" === n2.kind ? e2.data % n2.value !== BigInt(0) && (t2 = this._getOrReturnCtx(e2, t2), m(t2, { code: d.not_multiple_of, multipleOf: n2.value, message: n2.message }), s2.dirty()) : a.assertNever(n2);
      return { status: s2.value, value: e2.data };
    }
    _getInvalidInput(e2) {
      const t2 = this._getOrReturnCtx(e2);
      return m(t2, { code: d.invalid_type, expected: r.bigint, received: t2.parsedType }), _;
    }
    gte(e2, t2) {
      return this.setLimit("min", e2, true, h.toString(t2));
    }
    gt(e2, t2) {
      return this.setLimit("min", e2, false, h.toString(t2));
    }
    lte(e2, t2) {
      return this.setLimit("max", e2, true, h.toString(t2));
    }
    lt(e2, t2) {
      return this.setLimit("max", e2, false, h.toString(t2));
    }
    setLimit(e2, t2, s2, a2) {
      return new Q({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: s2, message: h.toString(a2) }] });
    }
    _addCheck(e2) {
      return new Q({ ...this._def, checks: [...this._def.checks, e2] });
    }
    positive(e2) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: h.toString(e2) });
    }
    negative(e2) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: h.toString(e2) });
    }
    nonpositive(e2) {
      return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: h.toString(e2) });
    }
    nonnegative(e2) {
      return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: h.toString(e2) });
    }
    multipleOf(e2, t2) {
      return this._addCheck({ kind: "multipleOf", value: e2, message: h.toString(t2) });
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
  Q.create = (e2) => new Q({ checks: [], typeName: Re.ZodBigInt, coerce: e2?.coerce ?? false, ...O(e2) });
  class ee extends T {
    _parse(e2) {
      this._def.coerce && (e2.data = Boolean(e2.data));
      if (this._getType(e2) !== r.boolean) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.boolean, received: t2.parsedType }), _;
      }
      return g(e2.data);
    }
  }
  ee.create = (e2) => new ee({ typeName: Re.ZodBoolean, coerce: e2?.coerce || false, ...O(e2) });
  class te extends T {
    _parse(e2) {
      this._def.coerce && (e2.data = new Date(e2.data));
      if (this._getType(e2) !== r.date) {
        const t3 = this._getOrReturnCtx(e2);
        return m(t3, { code: d.invalid_type, expected: r.date, received: t3.parsedType }), _;
      }
      if (Number.isNaN(e2.data.getTime())) {
        return m(this._getOrReturnCtx(e2), { code: d.invalid_date }), _;
      }
      const t2 = new f();
      let s2;
      for (const n2 of this._def.checks) "min" === n2.kind ? e2.data.getTime() < n2.value && (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.too_small, message: n2.message, inclusive: true, exact: false, minimum: n2.value, type: "date" }), t2.dirty()) : "max" === n2.kind ? e2.data.getTime() > n2.value && (s2 = this._getOrReturnCtx(e2, s2), m(s2, { code: d.too_big, message: n2.message, inclusive: true, exact: false, maximum: n2.value, type: "date" }), t2.dirty()) : a.assertNever(n2);
      return { status: t2.value, value: new Date(e2.data.getTime()) };
    }
    _addCheck(e2) {
      return new te({ ...this._def, checks: [...this._def.checks, e2] });
    }
    min(e2, t2) {
      return this._addCheck({ kind: "min", value: e2.getTime(), message: h.toString(t2) });
    }
    max(e2, t2) {
      return this._addCheck({ kind: "max", value: e2.getTime(), message: h.toString(t2) });
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
  te.create = (e2) => new te({ checks: [], coerce: e2?.coerce || false, typeName: Re.ZodDate, ...O(e2) });
  class se extends T {
    _parse(e2) {
      if (this._getType(e2) !== r.symbol) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.symbol, received: t2.parsedType }), _;
      }
      return g(e2.data);
    }
  }
  se.create = (e2) => new se({ typeName: Re.ZodSymbol, ...O(e2) });
  class ae extends T {
    _parse(e2) {
      if (this._getType(e2) !== r.undefined) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.undefined, received: t2.parsedType }), _;
      }
      return g(e2.data);
    }
  }
  ae.create = (e2) => new ae({ typeName: Re.ZodUndefined, ...O(e2) });
  class ne extends T {
    _parse(e2) {
      if (this._getType(e2) !== r.null) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.null, received: t2.parsedType }), _;
      }
      return g(e2.data);
    }
  }
  ne.create = (e2) => new ne({ typeName: Re.ZodNull, ...O(e2) });
  class re extends T {
    constructor() {
      super(...arguments), this._any = true;
    }
    _parse(e2) {
      return g(e2.data);
    }
  }
  re.create = (e2) => new re({ typeName: Re.ZodAny, ...O(e2) });
  class ie extends T {
    constructor() {
      super(...arguments), this._unknown = true;
    }
    _parse(e2) {
      return g(e2.data);
    }
  }
  ie.create = (e2) => new ie({ typeName: Re.ZodUnknown, ...O(e2) });
  class de extends T {
    _parse(e2) {
      const t2 = this._getOrReturnCtx(e2);
      return m(t2, { code: d.invalid_type, expected: r.never, received: t2.parsedType }), _;
    }
  }
  de.create = (e2) => new de({ typeName: Re.ZodNever, ...O(e2) });
  class oe extends T {
    _parse(e2) {
      if (this._getType(e2) !== r.undefined) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.void, received: t2.parsedType }), _;
      }
      return g(e2.data);
    }
  }
  oe.create = (e2) => new oe({ typeName: Re.ZodVoid, ...O(e2) });
  class ue extends T {
    _parse(e2) {
      const { ctx: t2, status: s2 } = this._processInputParams(e2), a2 = this._def;
      if (t2.parsedType !== r.array) return m(t2, { code: d.invalid_type, expected: r.array, received: t2.parsedType }), _;
      if (null !== a2.exactLength) {
        const e3 = t2.data.length > a2.exactLength.value, n3 = t2.data.length < a2.exactLength.value;
        (e3 || n3) && (m(t2, { code: e3 ? d.too_big : d.too_small, minimum: n3 ? a2.exactLength.value : void 0, maximum: e3 ? a2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: a2.exactLength.message }), s2.dirty());
      }
      if (null !== a2.minLength && t2.data.length < a2.minLength.value && (m(t2, { code: d.too_small, minimum: a2.minLength.value, type: "array", inclusive: true, exact: false, message: a2.minLength.message }), s2.dirty()), null !== a2.maxLength && t2.data.length > a2.maxLength.value && (m(t2, { code: d.too_big, maximum: a2.maxLength.value, type: "array", inclusive: true, exact: false, message: a2.maxLength.message }), s2.dirty()), t2.common.async) return Promise.all([...t2.data].map((e3, s3) => a2.type._parseAsync(new w(t2, e3, t2.path, s3)))).then((e3) => f.mergeArray(s2, e3));
      const n2 = [...t2.data].map((e3, s3) => a2.type._parseSync(new w(t2, e3, t2.path, s3)));
      return f.mergeArray(s2, n2);
    }
    get element() {
      return this._def.type;
    }
    min(e2, t2) {
      return new ue({ ...this._def, minLength: { value: e2, message: h.toString(t2) } });
    }
    max(e2, t2) {
      return new ue({ ...this._def, maxLength: { value: e2, message: h.toString(t2) } });
    }
    length(e2, t2) {
      return new ue({ ...this._def, exactLength: { value: e2, message: h.toString(t2) } });
    }
    nonempty(e2) {
      return this.min(1, e2);
    }
  }
  function ce(e2) {
    if (e2 instanceof le) {
      const t2 = {};
      for (const s2 in e2.shape) {
        const a2 = e2.shape[s2];
        t2[s2] = Oe.create(ce(a2));
      }
      return new le({ ...e2._def, shape: () => t2 });
    }
    return e2 instanceof ue ? new ue({ ...e2._def, type: ce(e2.element) }) : e2 instanceof Oe ? Oe.create(ce(e2.unwrap())) : e2 instanceof Te ? Te.create(ce(e2.unwrap())) : e2 instanceof fe ? fe.create(e2.items.map((e3) => ce(e3))) : e2;
  }
  ue.create = (e2, t2) => new ue({ type: e2, minLength: null, maxLength: null, exactLength: null, typeName: Re.ZodArray, ...O(t2) });
  class le extends T {
    constructor() {
      super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
      if (null !== this._cached) return this._cached;
      const e2 = this._def.shape(), t2 = a.objectKeys(e2);
      return this._cached = { shape: e2, keys: t2 }, this._cached;
    }
    _parse(e2) {
      if (this._getType(e2) !== r.object) {
        const t3 = this._getOrReturnCtx(e2);
        return m(t3, { code: d.invalid_type, expected: r.object, received: t3.parsedType }), _;
      }
      const { status: t2, ctx: s2 } = this._processInputParams(e2), { shape: a2, keys: n2 } = this._getCached(), i2 = [];
      if (!(this._def.catchall instanceof de && "strip" === this._def.unknownKeys)) for (const e3 in s2.data) n2.includes(e3) || i2.push(e3);
      const o2 = [];
      for (const e3 of n2) {
        const t3 = a2[e3], n3 = s2.data[e3];
        o2.push({ key: { status: "valid", value: e3 }, value: t3._parse(new w(s2, n3, s2.path, e3)), alwaysSet: e3 in s2.data });
      }
      if (this._def.catchall instanceof de) {
        const e3 = this._def.unknownKeys;
        if ("passthrough" === e3) for (const e4 of i2) o2.push({ key: { status: "valid", value: e4 }, value: { status: "valid", value: s2.data[e4] } });
        else if ("strict" === e3) i2.length > 0 && (m(s2, { code: d.unrecognized_keys, keys: i2 }), t2.dirty());
        else if ("strip" !== e3) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        const e3 = this._def.catchall;
        for (const t3 of i2) {
          const a3 = s2.data[t3];
          o2.push({ key: { status: "valid", value: t3 }, value: e3._parse(new w(s2, a3, s2.path, t3)), alwaysSet: t3 in s2.data });
        }
      }
      return s2.common.async ? Promise.resolve().then(async () => {
        const e3 = [];
        for (const t3 of o2) {
          const s3 = await t3.key, a3 = await t3.value;
          e3.push({ key: s3, value: a3, alwaysSet: t3.alwaysSet });
        }
        return e3;
      }).then((e3) => f.mergeObjectSync(t2, e3)) : f.mergeObjectSync(t2, o2);
    }
    get shape() {
      return this._def.shape();
    }
    strict(e2) {
      return h.errToObj, new le({ ...this._def, unknownKeys: "strict", ...void 0 !== e2 ? { errorMap: (t2, s2) => {
        const a2 = this._def.errorMap?.(t2, s2).message ?? s2.defaultError;
        return "unrecognized_keys" === t2.code ? { message: h.errToObj(e2).message ?? a2 } : { message: a2 };
      } } : {} });
    }
    strip() {
      return new le({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
      return new le({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(e2) {
      return new le({ ...this._def, shape: () => ({ ...this._def.shape(), ...e2 }) });
    }
    merge(e2) {
      return new le({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: () => ({ ...this._def.shape(), ...e2._def.shape() }), typeName: Re.ZodObject });
    }
    setKey(e2, t2) {
      return this.augment({ [e2]: t2 });
    }
    catchall(e2) {
      return new le({ ...this._def, catchall: e2 });
    }
    pick(e2) {
      const t2 = {};
      for (const s2 of a.objectKeys(e2)) e2[s2] && this.shape[s2] && (t2[s2] = this.shape[s2]);
      return new le({ ...this._def, shape: () => t2 });
    }
    omit(e2) {
      const t2 = {};
      for (const s2 of a.objectKeys(this.shape)) e2[s2] || (t2[s2] = this.shape[s2]);
      return new le({ ...this._def, shape: () => t2 });
    }
    deepPartial() {
      return ce(this);
    }
    partial(e2) {
      const t2 = {};
      for (const s2 of a.objectKeys(this.shape)) {
        const a2 = this.shape[s2];
        e2 && !e2[s2] ? t2[s2] = a2 : t2[s2] = a2.optional();
      }
      return new le({ ...this._def, shape: () => t2 });
    }
    required(e2) {
      const t2 = {};
      for (const s2 of a.objectKeys(this.shape)) if (e2 && !e2[s2]) t2[s2] = this.shape[s2];
      else {
        let e3 = this.shape[s2];
        for (; e3 instanceof Oe; ) e3 = e3._def.innerType;
        t2[s2] = e3;
      }
      return new le({ ...this._def, shape: () => t2 });
    }
    keyof() {
      return ke(a.objectKeys(this.shape));
    }
  }
  le.create = (e2, t2) => new le({ shape: () => e2, unknownKeys: "strip", catchall: de.create(), typeName: Re.ZodObject, ...O(t2) }), le.strictCreate = (e2, t2) => new le({ shape: () => e2, unknownKeys: "strict", catchall: de.create(), typeName: Re.ZodObject, ...O(t2) }), le.lazycreate = (e2, t2) => new le({ shape: e2, unknownKeys: "strip", catchall: de.create(), typeName: Re.ZodObject, ...O(t2) });
  class he extends T {
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2), s2 = this._def.options;
      if (t2.common.async) return Promise.all(s2.map(async (e3) => {
        const s3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null };
        return { result: await e3._parseAsync({ data: t2.data, path: t2.path, parent: s3 }), ctx: s3 };
      })).then(function(e3) {
        for (const t3 of e3) if ("valid" === t3.result.status) return t3.result;
        for (const s4 of e3) if ("dirty" === s4.result.status) return t2.common.issues.push(...s4.ctx.common.issues), s4.result;
        const s3 = e3.map((e4) => new o(e4.ctx.common.issues));
        return m(t2, { code: d.invalid_union, unionErrors: s3 }), _;
      });
      {
        let e3;
        const a2 = [];
        for (const n3 of s2) {
          const s3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null }, r2 = n3._parseSync({ data: t2.data, path: t2.path, parent: s3 });
          if ("valid" === r2.status) return r2;
          "dirty" !== r2.status || e3 || (e3 = { result: r2, ctx: s3 }), s3.common.issues.length && a2.push(s3.common.issues);
        }
        if (e3) return t2.common.issues.push(...e3.ctx.common.issues), e3.result;
        const n2 = a2.map((e4) => new o(e4));
        return m(t2, { code: d.invalid_union, unionErrors: n2 }), _;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  he.create = (e2, t2) => new he({ options: e2, typeName: Re.ZodUnion, ...O(t2) });
  function pe(e2, t2) {
    const s2 = i(e2), n2 = i(t2);
    if (e2 === t2) return { valid: true, data: e2 };
    if (s2 === r.object && n2 === r.object) {
      const s3 = a.objectKeys(t2), n3 = a.objectKeys(e2).filter((e3) => -1 !== s3.indexOf(e3)), r2 = { ...e2, ...t2 };
      for (const s4 of n3) {
        const a2 = pe(e2[s4], t2[s4]);
        if (!a2.valid) return { valid: false };
        r2[s4] = a2.data;
      }
      return { valid: true, data: r2 };
    }
    if (s2 === r.array && n2 === r.array) {
      if (e2.length !== t2.length) return { valid: false };
      const s3 = [];
      for (let a2 = 0; a2 < e2.length; a2++) {
        const n3 = pe(e2[a2], t2[a2]);
        if (!n3.valid) return { valid: false };
        s3.push(n3.data);
      }
      return { valid: true, data: s3 };
    }
    return s2 === r.date && n2 === r.date && +e2 === +t2 ? { valid: true, data: e2 } : { valid: false };
  }
  class me extends T {
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2), a2 = (e3, a3) => {
        if (v(e3) || v(a3)) return _;
        const n2 = pe(e3.value, a3.value);
        return n2.valid ? ((k(e3) || k(a3)) && t2.dirty(), { status: t2.value, value: n2.data }) : (m(s2, { code: d.invalid_intersection_types }), _);
      };
      return s2.common.async ? Promise.all([this._def.left._parseAsync({ data: s2.data, path: s2.path, parent: s2 }), this._def.right._parseAsync({ data: s2.data, path: s2.path, parent: s2 })]).then(([e3, t3]) => a2(e3, t3)) : a2(this._def.left._parseSync({ data: s2.data, path: s2.path, parent: s2 }), this._def.right._parseSync({ data: s2.data, path: s2.path, parent: s2 }));
    }
  }
  me.create = (e2, t2, s2) => new me({ left: e2, right: t2, typeName: Re.ZodIntersection, ...O(s2) });
  class fe extends T {
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2);
      if (s2.parsedType !== r.array) return m(s2, { code: d.invalid_type, expected: r.array, received: s2.parsedType }), _;
      if (s2.data.length < this._def.items.length) return m(s2, { code: d.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), _;
      !this._def.rest && s2.data.length > this._def.items.length && (m(s2, { code: d.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t2.dirty());
      const a2 = [...s2.data].map((e3, t3) => {
        const a3 = this._def.items[t3] || this._def.rest;
        return a3 ? a3._parse(new w(s2, e3, s2.path, t3)) : null;
      }).filter((e3) => !!e3);
      return s2.common.async ? Promise.all(a2).then((e3) => f.mergeArray(t2, e3)) : f.mergeArray(t2, a2);
    }
    get items() {
      return this._def.items;
    }
    rest(e2) {
      return new fe({ ...this._def, rest: e2 });
    }
  }
  fe.create = (e2, t2) => {
    if (!Array.isArray(e2)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new fe({ items: e2, typeName: Re.ZodTuple, rest: null, ...O(t2) });
  };
  class _e extends T {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2);
      if (s2.parsedType !== r.map) return m(s2, { code: d.invalid_type, expected: r.map, received: s2.parsedType }), _;
      const a2 = this._def.keyType, n2 = this._def.valueType, i2 = [...s2.data.entries()].map(([e3, t3], r2) => ({ key: a2._parse(new w(s2, e3, s2.path, [r2, "key"])), value: n2._parse(new w(s2, t3, s2.path, [r2, "value"])) }));
      if (s2.common.async) {
        const e3 = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const s3 of i2) {
            const a3 = await s3.key, n3 = await s3.value;
            if ("aborted" === a3.status || "aborted" === n3.status) return _;
            "dirty" !== a3.status && "dirty" !== n3.status || t2.dirty(), e3.set(a3.value, n3.value);
          }
          return { status: t2.value, value: e3 };
        });
      }
      {
        const e3 = /* @__PURE__ */ new Map();
        for (const s3 of i2) {
          const a3 = s3.key, n3 = s3.value;
          if ("aborted" === a3.status || "aborted" === n3.status) return _;
          "dirty" !== a3.status && "dirty" !== n3.status || t2.dirty(), e3.set(a3.value, n3.value);
        }
        return { status: t2.value, value: e3 };
      }
    }
  }
  _e.create = (e2, t2, s2) => new _e({ valueType: t2, keyType: e2, typeName: Re.ZodMap, ...O(s2) });
  class ye extends T {
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2);
      if (s2.parsedType !== r.set) return m(s2, { code: d.invalid_type, expected: r.set, received: s2.parsedType }), _;
      const a2 = this._def;
      null !== a2.minSize && s2.data.size < a2.minSize.value && (m(s2, { code: d.too_small, minimum: a2.minSize.value, type: "set", inclusive: true, exact: false, message: a2.minSize.message }), t2.dirty()), null !== a2.maxSize && s2.data.size > a2.maxSize.value && (m(s2, { code: d.too_big, maximum: a2.maxSize.value, type: "set", inclusive: true, exact: false, message: a2.maxSize.message }), t2.dirty());
      const n2 = this._def.valueType;
      function i2(e3) {
        const s3 = /* @__PURE__ */ new Set();
        for (const a3 of e3) {
          if ("aborted" === a3.status) return _;
          "dirty" === a3.status && t2.dirty(), s3.add(a3.value);
        }
        return { status: t2.value, value: s3 };
      }
      const o2 = [...s2.data.values()].map((e3, t3) => n2._parse(new w(s2, e3, s2.path, t3)));
      return s2.common.async ? Promise.all(o2).then((e3) => i2(e3)) : i2(o2);
    }
    min(e2, t2) {
      return new ye({ ...this._def, minSize: { value: e2, message: h.toString(t2) } });
    }
    max(e2, t2) {
      return new ye({ ...this._def, maxSize: { value: e2, message: h.toString(t2) } });
    }
    size(e2, t2) {
      return this.min(e2, t2).max(e2, t2);
    }
    nonempty(e2) {
      return this.min(1, e2);
    }
  }
  ye.create = (e2, t2) => new ye({ valueType: e2, minSize: null, maxSize: null, typeName: Re.ZodSet, ...O(t2) });
  class ge extends T {
    get schema() {
      return this._def.getter();
    }
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2);
      return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
    }
  }
  ge.create = (e2, t2) => new ge({ getter: e2, typeName: Re.ZodLazy, ...O(t2) });
  class ve extends T {
    _parse(e2) {
      if (e2.data !== this._def.value) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { received: t2.data, code: d.invalid_literal, expected: this._def.value }), _;
      }
      return { status: "valid", value: e2.data };
    }
    get value() {
      return this._def.value;
    }
  }
  function ke(e2, t2) {
    return new xe({ values: e2, typeName: Re.ZodEnum, ...O(t2) });
  }
  ve.create = (e2, t2) => new ve({ value: e2, typeName: Re.ZodLiteral, ...O(t2) });
  class xe extends T {
    _parse(e2) {
      if ("string" != typeof e2.data) {
        const t2 = this._getOrReturnCtx(e2), s2 = this._def.values;
        return m(t2, { expected: a.joinValues(s2), received: t2.parsedType, code: d.invalid_type }), _;
      }
      if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e2.data)) {
        const t2 = this._getOrReturnCtx(e2), s2 = this._def.values;
        return m(t2, { received: t2.data, code: d.invalid_enum_value, options: s2 }), _;
      }
      return g(e2.data);
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
      return xe.create(e2, { ...this._def, ...t2 });
    }
    exclude(e2, t2 = this._def) {
      return xe.create(this.options.filter((t3) => !e2.includes(t3)), { ...this._def, ...t2 });
    }
  }
  xe.create = ke;
  class be extends T {
    _parse(e2) {
      const t2 = a.getValidEnumValues(this._def.values), s2 = this._getOrReturnCtx(e2);
      if (s2.parsedType !== r.string && s2.parsedType !== r.number) {
        const e3 = a.objectValues(t2);
        return m(s2, { expected: a.joinValues(e3), received: s2.parsedType, code: d.invalid_type }), _;
      }
      if (this._cache || (this._cache = new Set(a.getValidEnumValues(this._def.values))), !this._cache.has(e2.data)) {
        const e3 = a.objectValues(t2);
        return m(s2, { received: s2.data, code: d.invalid_enum_value, options: e3 }), _;
      }
      return g(e2.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  be.create = (e2, t2) => new be({ values: e2, typeName: Re.ZodNativeEnum, ...O(t2) });
  class we extends T {
    unwrap() {
      return this._def.type;
    }
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2);
      if (t2.parsedType !== r.promise && false === t2.common.async) return m(t2, { code: d.invalid_type, expected: r.promise, received: t2.parsedType }), _;
      const s2 = t2.parsedType === r.promise ? t2.data : Promise.resolve(t2.data);
      return g(s2.then((e3) => this._def.type.parseAsync(e3, { path: t2.path, errorMap: t2.common.contextualErrorMap })));
    }
  }
  we.create = (e2, t2) => new we({ type: e2, typeName: Re.ZodPromise, ...O(t2) });
  class Ze extends T {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === Re.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2), n2 = this._def.effect || null, r2 = { addIssue: (e3) => {
        m(s2, e3), e3.fatal ? t2.abort() : t2.dirty();
      }, get path() {
        return s2.path;
      } };
      if (r2.addIssue = r2.addIssue.bind(r2), "preprocess" === n2.type) {
        const e3 = n2.transform(s2.data, r2);
        if (s2.common.async) return Promise.resolve(e3).then(async (e4) => {
          if ("aborted" === t2.value) return _;
          const a2 = await this._def.schema._parseAsync({ data: e4, path: s2.path, parent: s2 });
          return "aborted" === a2.status ? _ : "dirty" === a2.status || "dirty" === t2.value ? y(a2.value) : a2;
        });
        {
          if ("aborted" === t2.value) return _;
          const a2 = this._def.schema._parseSync({ data: e3, path: s2.path, parent: s2 });
          return "aborted" === a2.status ? _ : "dirty" === a2.status || "dirty" === t2.value ? y(a2.value) : a2;
        }
      }
      if ("refinement" === n2.type) {
        const e3 = (e4) => {
          const t3 = n2.refinement(e4, r2);
          if (s2.common.async) return Promise.resolve(t3);
          if (t3 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return e4;
        };
        if (false === s2.common.async) {
          const a2 = this._def.schema._parseSync({ data: s2.data, path: s2.path, parent: s2 });
          return "aborted" === a2.status ? _ : ("dirty" === a2.status && t2.dirty(), e3(a2.value), { status: t2.value, value: a2.value });
        }
        return this._def.schema._parseAsync({ data: s2.data, path: s2.path, parent: s2 }).then((s3) => "aborted" === s3.status ? _ : ("dirty" === s3.status && t2.dirty(), e3(s3.value).then(() => ({ status: t2.value, value: s3.value }))));
      }
      if ("transform" === n2.type) {
        if (false === s2.common.async) {
          const e3 = this._def.schema._parseSync({ data: s2.data, path: s2.path, parent: s2 });
          if (!x(e3)) return _;
          const a2 = n2.transform(e3.value, r2);
          if (a2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          return { status: t2.value, value: a2 };
        }
        return this._def.schema._parseAsync({ data: s2.data, path: s2.path, parent: s2 }).then((e3) => x(e3) ? Promise.resolve(n2.transform(e3.value, r2)).then((e4) => ({ status: t2.value, value: e4 })) : _);
      }
      a.assertNever(n2);
    }
  }
  Ze.create = (e2, t2, s2) => new Ze({ schema: e2, typeName: Re.ZodEffects, effect: t2, ...O(s2) }), Ze.createWithPreprocess = (e2, t2, s2) => new Ze({ schema: t2, effect: { type: "preprocess", transform: e2 }, typeName: Re.ZodEffects, ...O(s2) });
  class Oe extends T {
    _parse(e2) {
      return this._getType(e2) === r.undefined ? g(void 0) : this._def.innerType._parse(e2);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  Oe.create = (e2, t2) => new Oe({ innerType: e2, typeName: Re.ZodOptional, ...O(t2) });
  class Te extends T {
    _parse(e2) {
      return this._getType(e2) === r.null ? g(null) : this._def.innerType._parse(e2);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  Te.create = (e2, t2) => new Te({ innerType: e2, typeName: Re.ZodNullable, ...O(t2) });
  class Ce extends T {
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2);
      let s2 = t2.data;
      return t2.parsedType === r.undefined && (s2 = this._def.defaultValue()), this._def.innerType._parse({ data: s2, path: t2.path, parent: t2 });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  Ce.create = (e2, t2) => new Ce({ innerType: e2, typeName: Re.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : () => t2.default, ...O(t2) });
  class Ne extends T {
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2), s2 = { ...t2, common: { ...t2.common, issues: [] } }, a2 = this._def.innerType._parse({ data: s2.data, path: s2.path, parent: { ...s2 } });
      return b(a2) ? a2.then((e3) => ({ status: "valid", value: "valid" === e3.status ? e3.value : this._def.catchValue({ get error() {
        return new o(s2.common.issues);
      }, input: s2.data }) })) : { status: "valid", value: "valid" === a2.status ? a2.value : this._def.catchValue({ get error() {
        return new o(s2.common.issues);
      }, input: s2.data }) };
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  Ne.create = (e2, t2) => new Ne({ innerType: e2, typeName: Re.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : () => t2.catch, ...O(t2) });
  class Ae extends T {
    _parse(e2) {
      if (this._getType(e2) !== r.nan) {
        const t2 = this._getOrReturnCtx(e2);
        return m(t2, { code: d.invalid_type, expected: r.nan, received: t2.parsedType }), _;
      }
      return { status: "valid", value: e2.data };
    }
  }
  Ae.create = (e2) => new Ae({ typeName: Re.ZodNaN, ...O(e2) });
  /* @__PURE__ */ Symbol("zod_brand");
  class Se extends T {
    _parse(e2) {
      const { ctx: t2 } = this._processInputParams(e2), s2 = t2.data;
      return this._def.type._parse({ data: s2, path: t2.path, parent: t2 });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class je extends T {
    _parse(e2) {
      const { status: t2, ctx: s2 } = this._processInputParams(e2);
      if (s2.common.async) {
        return (async () => {
          const e3 = await this._def.in._parseAsync({ data: s2.data, path: s2.path, parent: s2 });
          return "aborted" === e3.status ? _ : "dirty" === e3.status ? (t2.dirty(), y(e3.value)) : this._def.out._parseAsync({ data: e3.value, path: s2.path, parent: s2 });
        })();
      }
      {
        const e3 = this._def.in._parseSync({ data: s2.data, path: s2.path, parent: s2 });
        return "aborted" === e3.status ? _ : "dirty" === e3.status ? (t2.dirty(), { status: "dirty", value: e3.value }) : this._def.out._parseSync({ data: e3.value, path: s2.path, parent: s2 });
      }
    }
    static create(e2, t2) {
      return new je({ in: e2, out: t2, typeName: Re.ZodPipeline });
    }
  }
  class Ie extends T {
    _parse(e2) {
      const t2 = this._def.innerType._parse(e2), s2 = (e3) => (x(e3) && (e3.value = Object.freeze(e3.value)), e3);
      return b(t2) ? t2.then((e3) => s2(e3)) : s2(t2);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  function Ee(e2, t2) {
    const s2 = "function" == typeof e2 ? e2(t2) : "string" == typeof e2 ? { message: e2 } : e2;
    return "string" == typeof s2 ? { message: s2 } : s2;
  }
  Ie.create = (e2, t2) => new Ie({ innerType: e2, typeName: Re.ZodReadonly, ...O(t2) });
  le.lazycreate;
  var Re;
  !(function(e2) {
    e2.ZodString = "ZodString", e2.ZodNumber = "ZodNumber", e2.ZodNaN = "ZodNaN", e2.ZodBigInt = "ZodBigInt", e2.ZodBoolean = "ZodBoolean", e2.ZodDate = "ZodDate", e2.ZodSymbol = "ZodSymbol", e2.ZodUndefined = "ZodUndefined", e2.ZodNull = "ZodNull", e2.ZodAny = "ZodAny", e2.ZodUnknown = "ZodUnknown", e2.ZodNever = "ZodNever", e2.ZodVoid = "ZodVoid", e2.ZodArray = "ZodArray", e2.ZodObject = "ZodObject", e2.ZodUnion = "ZodUnion", e2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e2.ZodIntersection = "ZodIntersection", e2.ZodTuple = "ZodTuple", e2.ZodRecord = "ZodRecord", e2.ZodMap = "ZodMap", e2.ZodSet = "ZodSet", e2.ZodFunction = "ZodFunction", e2.ZodLazy = "ZodLazy", e2.ZodLiteral = "ZodLiteral", e2.ZodEnum = "ZodEnum", e2.ZodEffects = "ZodEffects", e2.ZodNativeEnum = "ZodNativeEnum", e2.ZodOptional = "ZodOptional", e2.ZodNullable = "ZodNullable", e2.ZodDefault = "ZodDefault", e2.ZodCatch = "ZodCatch", e2.ZodPromise = "ZodPromise", e2.ZodBranded = "ZodBranded", e2.ZodPipeline = "ZodPipeline", e2.ZodReadonly = "ZodReadonly";
  })(Re || (Re = {}));
  const $e = (e2, t2 = { message: `Input not instance of ${e2.name}` }) => (function(e3, t3 = {}, s2) {
    return e3 ? re.create().superRefine((a2, n2) => {
      const r2 = e3(a2);
      if (r2 instanceof Promise) return r2.then((e4) => {
        if (!e4) {
          const e5 = Ee(t3, a2), r3 = e5.fatal ?? s2 ?? true;
          n2.addIssue({ code: "custom", ...e5, fatal: r3 });
        }
      });
      if (!r2) {
        const e4 = Ee(t3, a2), r3 = e4.fatal ?? s2 ?? true;
        n2.addIssue({ code: "custom", ...e4, fatal: r3 });
      }
    }) : re.create();
  })((t3) => t3 instanceof e2, t2), Pe = (Y.create, X.create), Fe = (Ae.create, Q.create, ee.create, te.create, se.create, ae.create, ne.create, re.create, ie.create, de.create, oe.create, ue.create, le.create), Le = (le.strictCreate, he.create), ze = (me.create, fe.create, _e.create, ye.create, ge.create, ve.create, xe.create, be.create);
  we.create, Ze.create, Oe.create, Te.create, Ze.createWithPreprocess, je.create;
} };
