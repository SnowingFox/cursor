// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9567 range:894852..903823
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9567: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { DG: () => g, E6: () => b, J: () => w, J_: () => u, Jk: () => l, KH: () => d, Kk: () => f, NI: () => y, QP: () => i2, RM: () => h, Tt: () => v, Yk: () => p, kH: () => _, ql: () => m, sm: () => c, v$: () => S });
    var n2 = r2(7381), o2 = r2(8927), s2 = r2(7246);
    const i2 = n2.xI("$ZodCheck", (e3, t3) => {
      var r3;
      e3._zod ?? (e3._zod = {}), e3._zod.def = t3, (r3 = e3._zod).onattach ?? (r3.onattach = []);
    }), a2 = { number: "number", bigint: "bigint", object: "date" }, c = n2.xI("$ZodCheckLessThan", (e3, t3) => {
      i2.init(e3, t3);
      const r3 = a2[typeof t3.value];
      e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag, n3 = (t3.inclusive ? r4.maximum : r4.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t3.value < n3 && (t3.inclusive ? r4.maximum = t3.value : r4.exclusiveMaximum = t3.value);
      }), e3._zod.check = (n3) => {
        (t3.inclusive ? n3.value <= t3.value : n3.value < t3.value) || n3.issues.push({ origin: r3, code: "too_big", maximum: t3.value, input: n3.value, inclusive: t3.inclusive, inst: e3, continue: !t3.abort });
      };
    }), u = n2.xI("$ZodCheckGreaterThan", (e3, t3) => {
      i2.init(e3, t3);
      const r3 = a2[typeof t3.value];
      e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag, n3 = (t3.inclusive ? r4.minimum : r4.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t3.value > n3 && (t3.inclusive ? r4.minimum = t3.value : r4.exclusiveMinimum = t3.value);
      }), e3._zod.check = (n3) => {
        (t3.inclusive ? n3.value >= t3.value : n3.value > t3.value) || n3.issues.push({ origin: r3, code: "too_small", minimum: t3.value, input: n3.value, inclusive: t3.inclusive, inst: e3, continue: !t3.abort });
      };
    }), l = n2.xI("$ZodCheckMultipleOf", (e3, t3) => {
      i2.init(e3, t3), e3._zod.onattach.push((e4) => {
        var r3;
        (r3 = e4._zod.bag).multipleOf ?? (r3.multipleOf = t3.value);
      }), e3._zod.check = (r3) => {
        if (typeof r3.value != typeof t3.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r3.value ? r3.value % t3.value === BigInt(0) : 0 === s2.LG(r3.value, t3.value)) || r3.issues.push({ origin: typeof r3.value, code: "not_multiple_of", divisor: t3.value, input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), d = n2.xI("$ZodCheckNumberFormat", (e3, t3) => {
      i2.init(e3, t3), t3.format = t3.format || "float64";
      const r3 = t3.format?.includes("int"), n3 = r3 ? "int" : "number", [a3, c2] = s2.zH[t3.format];
      e3._zod.onattach.push((e4) => {
        const n4 = e4._zod.bag;
        n4.format = t3.format, n4.minimum = a3, n4.maximum = c2, r3 && (n4.pattern = o2.nd);
      }), e3._zod.check = (o3) => {
        const s3 = o3.value;
        if (r3) {
          if (!Number.isInteger(s3)) return void o3.issues.push({ expected: n3, format: t3.format, code: "invalid_type", input: s3, inst: e3 });
          if (!Number.isSafeInteger(s3)) return void (s3 > 0 ? o3.issues.push({ input: s3, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e3, origin: n3, continue: !t3.abort }) : o3.issues.push({ input: s3, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e3, origin: n3, continue: !t3.abort }));
        }
        s3 < a3 && o3.issues.push({ origin: "number", input: s3, code: "too_small", minimum: a3, inclusive: true, inst: e3, continue: !t3.abort }), s3 > c2 && o3.issues.push({ origin: "number", input: s3, code: "too_big", maximum: c2, inst: e3 });
      };
    }), p = n2.xI("$ZodCheckMaxLength", (e3, t3) => {
      var r3;
      i2.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !s2.cl(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t3.maximum < r4 && (e4._zod.bag.maximum = t3.maximum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        if (n3.length <= t3.maximum) return;
        const o3 = s2.Rc(n3);
        r4.issues.push({ origin: o3, code: "too_big", maximum: t3.maximum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), f = n2.xI("$ZodCheckMinLength", (e3, t3) => {
      var r3;
      i2.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !s2.cl(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t3.minimum > r4 && (e4._zod.bag.minimum = t3.minimum);
      }), e3._zod.check = (r4) => {
        const n3 = r4.value;
        if (n3.length >= t3.minimum) return;
        const o3 = s2.Rc(n3);
        r4.issues.push({ origin: o3, code: "too_small", minimum: t3.minimum, inclusive: true, input: n3, inst: e3, continue: !t3.abort });
      };
    }), h = n2.xI("$ZodCheckLengthEquals", (e3, t3) => {
      var r3;
      i2.init(e3, t3), (r3 = e3._zod.def).when ?? (r3.when = (e4) => {
        const t4 = e4.value;
        return !s2.cl(t4) && void 0 !== t4.length;
      }), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag;
        r4.minimum = t3.length, r4.maximum = t3.length, r4.length = t3.length;
      }), e3._zod.check = (r4) => {
        const n3 = r4.value, o3 = n3.length;
        if (o3 === t3.length) return;
        const i3 = s2.Rc(n3), a3 = o3 > t3.length;
        r4.issues.push({ origin: i3, ...a3 ? { code: "too_big", maximum: t3.length } : { code: "too_small", minimum: t3.length }, inclusive: true, exact: true, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), m = n2.xI("$ZodCheckStringFormat", (e3, t3) => {
      var r3, n3;
      i2.init(e3, t3), e3._zod.onattach.push((e4) => {
        const r4 = e4._zod.bag;
        r4.format = t3.format, t3.pattern && (r4.patterns ?? (r4.patterns = /* @__PURE__ */ new Set()), r4.patterns.add(t3.pattern));
      }), t3.pattern ? (r3 = e3._zod).check ?? (r3.check = (r4) => {
        t3.pattern.lastIndex = 0, t3.pattern.test(r4.value) || r4.issues.push({ origin: "string", code: "invalid_format", format: t3.format, input: r4.value, ...t3.pattern ? { pattern: t3.pattern.toString() } : {}, inst: e3, continue: !t3.abort });
      }) : (n3 = e3._zod).check ?? (n3.check = () => {
      });
    }), g = n2.xI("$ZodCheckRegex", (e3, t3) => {
      m.init(e3, t3), e3._zod.check = (r3) => {
        t3.pattern.lastIndex = 0, t3.pattern.test(r3.value) || r3.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r3.value, pattern: t3.pattern.toString(), inst: e3, continue: !t3.abort });
      };
    }), y = n2.xI("$ZodCheckLowerCase", (e3, t3) => {
      t3.pattern ?? (t3.pattern = o2.AC), m.init(e3, t3);
    }), _ = n2.xI("$ZodCheckUpperCase", (e3, t3) => {
      t3.pattern ?? (t3.pattern = o2.Zv), m.init(e3, t3);
    }), v = n2.xI("$ZodCheckIncludes", (e3, t3) => {
      i2.init(e3, t3);
      const r3 = s2.$f(t3.includes), n3 = new RegExp("number" == typeof t3.position ? `^.{${t3.position}}${r3}` : r3);
      t3.pattern = n3, e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(n3);
      }), e3._zod.check = (r4) => {
        r4.value.includes(t3.includes, t3.position) || r4.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t3.includes, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), w = n2.xI("$ZodCheckStartsWith", (e3, t3) => {
      i2.init(e3, t3);
      const r3 = new RegExp(`^${s2.$f(t3.prefix)}.*`);
      t3.pattern ?? (t3.pattern = r3), e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(r3);
      }), e3._zod.check = (r4) => {
        r4.value.startsWith(t3.prefix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t3.prefix, input: r4.value, inst: e3, continue: !t3.abort });
      };
    }), b = n2.xI("$ZodCheckEndsWith", (e3, t3) => {
      i2.init(e3, t3);
      const r3 = new RegExp(`.*${s2.$f(t3.suffix)}$`);
      t3.pattern ?? (t3.pattern = r3), e3._zod.onattach.push((e4) => {
        const t4 = e4._zod.bag;
        t4.patterns ?? (t4.patterns = /* @__PURE__ */ new Set()), t4.patterns.add(r3);
      }), e3._zod.check = (r4) => {
        r4.value.endsWith(t3.suffix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t3.suffix, input: r4.value, inst: e3, continue: !t3.abort });
      };
    });
    const S = n2.xI("$ZodCheckOverwrite", (e3, t3) => {
      i2.init(e3, t3), e3._zod.check = (e4) => {
        e4.value = t3.tx(e4.value);
      };
    });
  }