// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39567 range:3114203..3123119
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39567: (e, t, r) => {
    "use strict";
    r.d(t, { DG: () => g, E6: () => b, J: () => _, J_: () => l, Jk: () => u, KH: () => d, Kk: () => m, NI: () => y, QP: () => i, RM: () => h, Tt: () => v, Yk: () => p, kH: () => w, ql: () => f, sm: () => c, v$: () => S });
    var n = r(47381), s = r(58927), o = r(7246);
    const i = n.xI("$ZodCheck", (e2, t2) => {
      var r2;
      e2._zod ?? (e2._zod = {}), e2._zod.def = t2, (r2 = e2._zod).onattach ?? (r2.onattach = []);
    }), a = { number: "number", bigint: "bigint", object: "date" }, c = n.xI("$ZodCheckLessThan", (e2, t2) => {
      i.init(e2, t2);
      const r2 = a[typeof t2.value];
      e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag, n2 = (t2.inclusive ? r3.maximum : r3.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t2.value < n2 && (t2.inclusive ? r3.maximum = t2.value : r3.exclusiveMaximum = t2.value);
      }), e2._zod.check = (n2) => {
        (t2.inclusive ? n2.value <= t2.value : n2.value < t2.value) || n2.issues.push({ origin: r2, code: "too_big", maximum: t2.value, input: n2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
      };
    }), l = n.xI("$ZodCheckGreaterThan", (e2, t2) => {
      i.init(e2, t2);
      const r2 = a[typeof t2.value];
      e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag, n2 = (t2.inclusive ? r3.minimum : r3.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t2.value > n2 && (t2.inclusive ? r3.minimum = t2.value : r3.exclusiveMinimum = t2.value);
      }), e2._zod.check = (n2) => {
        (t2.inclusive ? n2.value >= t2.value : n2.value > t2.value) || n2.issues.push({ origin: r2, code: "too_small", minimum: t2.value, input: n2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
      };
    }), u = n.xI("$ZodCheckMultipleOf", (e2, t2) => {
      i.init(e2, t2), e2._zod.onattach.push((e3) => {
        var r2;
        (r2 = e3._zod.bag).multipleOf ?? (r2.multipleOf = t2.value);
      }), e2._zod.check = (r2) => {
        if (typeof r2.value != typeof t2.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r2.value ? r2.value % t2.value === BigInt(0) : 0 === o.LG(r2.value, t2.value)) || r2.issues.push({ origin: typeof r2.value, code: "not_multiple_of", divisor: t2.value, input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), d = n.xI("$ZodCheckNumberFormat", (e2, t2) => {
      i.init(e2, t2), t2.format = t2.format || "float64";
      const r2 = t2.format?.includes("int"), n2 = r2 ? "int" : "number", [a2, c2] = o.zH[t2.format];
      e2._zod.onattach.push((e3) => {
        const n3 = e3._zod.bag;
        n3.format = t2.format, n3.minimum = a2, n3.maximum = c2, r2 && (n3.pattern = s.nd);
      }), e2._zod.check = (s2) => {
        const o2 = s2.value;
        if (r2) {
          if (!Number.isInteger(o2)) return void s2.issues.push({ expected: n2, format: t2.format, code: "invalid_type", input: o2, inst: e2 });
          if (!Number.isSafeInteger(o2)) return void (o2 > 0 ? s2.issues.push({ input: o2, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, continue: !t2.abort }) : s2.issues.push({ input: o2, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, continue: !t2.abort }));
        }
        o2 < a2 && s2.issues.push({ origin: "number", input: o2, code: "too_small", minimum: a2, inclusive: true, inst: e2, continue: !t2.abort }), o2 > c2 && s2.issues.push({ origin: "number", input: o2, code: "too_big", maximum: c2, inst: e2 });
      };
    }), p = n.xI("$ZodCheckMaxLength", (e2, t2) => {
      var r2;
      i.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !o.cl(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t2.maximum < r3 && (e3._zod.bag.maximum = t2.maximum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        if (n2.length <= t2.maximum) return;
        const s2 = o.Rc(n2);
        r3.issues.push({ origin: s2, code: "too_big", maximum: t2.maximum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), m = n.xI("$ZodCheckMinLength", (e2, t2) => {
      var r2;
      i.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !o.cl(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t2.minimum > r3 && (e3._zod.bag.minimum = t2.minimum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        if (n2.length >= t2.minimum) return;
        const s2 = o.Rc(n2);
        r3.issues.push({ origin: s2, code: "too_small", minimum: t2.minimum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), h = n.xI("$ZodCheckLengthEquals", (e2, t2) => {
      var r2;
      i.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !o.cl(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag;
        r3.minimum = t2.length, r3.maximum = t2.length, r3.length = t2.length;
      }), e2._zod.check = (r3) => {
        const n2 = r3.value, s2 = n2.length;
        if (s2 === t2.length) return;
        const i2 = o.Rc(n2), a2 = s2 > t2.length;
        r3.issues.push({ origin: i2, ...a2 ? { code: "too_big", maximum: t2.length } : { code: "too_small", minimum: t2.length }, inclusive: true, exact: true, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), f = n.xI("$ZodCheckStringFormat", (e2, t2) => {
      var r2, n2;
      i.init(e2, t2), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag;
        r3.format = t2.format, t2.pattern && (r3.patterns ?? (r3.patterns = /* @__PURE__ */ new Set()), r3.patterns.add(t2.pattern));
      }), t2.pattern ? (r2 = e2._zod).check ?? (r2.check = (r3) => {
        t2.pattern.lastIndex = 0, t2.pattern.test(r3.value) || r3.issues.push({ origin: "string", code: "invalid_format", format: t2.format, input: r3.value, ...t2.pattern ? { pattern: t2.pattern.toString() } : {}, inst: e2, continue: !t2.abort });
      }) : (n2 = e2._zod).check ?? (n2.check = () => {
      });
    }), g = n.xI("$ZodCheckRegex", (e2, t2) => {
      f.init(e2, t2), e2._zod.check = (r2) => {
        t2.pattern.lastIndex = 0, t2.pattern.test(r2.value) || r2.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r2.value, pattern: t2.pattern.toString(), inst: e2, continue: !t2.abort });
      };
    }), y = n.xI("$ZodCheckLowerCase", (e2, t2) => {
      t2.pattern ?? (t2.pattern = s.AC), f.init(e2, t2);
    }), w = n.xI("$ZodCheckUpperCase", (e2, t2) => {
      t2.pattern ?? (t2.pattern = s.Zv), f.init(e2, t2);
    }), v = n.xI("$ZodCheckIncludes", (e2, t2) => {
      i.init(e2, t2);
      const r2 = o.$f(t2.includes), n2 = new RegExp("number" == typeof t2.position ? `^.{${t2.position}}${r2}` : r2);
      t2.pattern = n2, e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(n2);
      }), e2._zod.check = (r3) => {
        r3.value.includes(t2.includes, t2.position) || r3.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t2.includes, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), _ = n.xI("$ZodCheckStartsWith", (e2, t2) => {
      i.init(e2, t2);
      const r2 = new RegExp(`^${o.$f(t2.prefix)}.*`);
      t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
      }), e2._zod.check = (r3) => {
        r3.value.startsWith(t2.prefix) || r3.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t2.prefix, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), b = n.xI("$ZodCheckEndsWith", (e2, t2) => {
      i.init(e2, t2);
      const r2 = new RegExp(`.*${o.$f(t2.suffix)}$`);
      t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
      }), e2._zod.check = (r3) => {
        r3.value.endsWith(t2.suffix) || r3.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t2.suffix, input: r3.value, inst: e2, continue: !t2.abort });
      };
    });
    const S = n.xI("$ZodCheckOverwrite", (e2, t2) => {
      i.init(e2, t2), e2._zod.check = (e3) => {
        e3.value = t2.tx(e3.value);
      };
    });
  }