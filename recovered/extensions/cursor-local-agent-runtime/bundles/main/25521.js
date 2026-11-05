// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25521 range:684325..714482
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25521: (e, t, r) => {
    "use strict";
    r.d(t, { Gb: () => q, $p: () => H, Dq: () => O, CQ: () => D, sF: () => B, CI: () => P, Cn: () => M, bl: () => w, Zu: () => b, t$: () => pe, b0: () => ye, rv: () => ae, P0: () => Z, Oy: () => N, qG: () => f, cG: () => y, VO: () => re, Zc: () => h, Lc: () => I, Zy: () => A, v1: () => E, Ko: () => k, $N: () => C, Ax: () => T, LJ: () => X, h8: () => F, GY: () => x, nu: () => ne, Py: () => v, Um: () => J, N$: () => ue, x8: () => $, qc: () => ie, vz: () => L, I: () => U, L8: () => Y, ig: () => se, _m: () => he, VF: () => ce, Sb: () => fe, h: () => te, $v: () => d, EY: () => p, Wc: () => oe, W4: () => u, g5: () => _, VY: () => g, Zn: () => m, cu: () => K, GP: () => j, TF: () => S });
    var n = r(39567), o = r(47381);
    class s {
      constructor(e2 = []) {
        this.content = [], this.indent = 0, this && (this.args = e2);
      }
      indented(e2) {
        this.indent += 1, e2(this), this.indent -= 1;
      }
      write(e2) {
        if ("function" == typeof e2) return e2(this, { execution: "sync" }), void e2(this, { execution: "async" });
        const t2 = e2.split("\n").filter((e3) => e3), r2 = Math.min(...t2.map((e3) => e3.length - e3.trimStart().length)), n2 = t2.map((e3) => e3.slice(r2)).map((e3) => " ".repeat(2 * this.indent) + e3);
        for (const e3 of n2) this.content.push(e3);
      }
      compile() {
        const e2 = Function, t2 = this?.args;
        return new e2(...t2, [...(this?.content ?? [""]).map((e3) => `  ${e3}`)].join("\n"));
      }
    }
    var i = r(4287), a = r(58927), l = r(7246);
    const c = { major: 4, minor: 0, patch: 0 }, u = o.xI("$ZodType", (e2, t2) => {
      var r2;
      e2 ?? (e2 = {}), e2._zod.def = t2, e2._zod.bag = e2._zod.bag || {}, e2._zod.version = c;
      const n2 = [...e2._zod.def.checks ?? []];
      e2._zod.traits.has("$ZodCheck") && n2.unshift(e2);
      for (const t3 of n2) for (const r3 of t3._zod.onattach) r3(e2);
      if (0 === n2.length) (r2 = e2._zod).deferred ?? (r2.deferred = []), e2._zod.deferred?.push(() => {
        e2._zod.run = e2._zod.parse;
      });
      else {
        const t3 = (e3, t4, r3) => {
          let n3, s2 = l.QH(e3);
          for (const i2 of t4) {
            if (i2._zod.def.when) {
              if (!i2._zod.def.when(e3)) continue;
            } else if (s2) continue;
            const t5 = e3.issues.length, a2 = i2._zod.check(e3);
            if (a2 instanceof Promise && false === r3?.async) throw new o.GT();
            if (n3 || a2 instanceof Promise) n3 = (n3 ?? Promise.resolve()).then(async () => {
              await a2;
              e3.issues.length !== t5 && (s2 || (s2 = l.QH(e3, t5)));
            });
            else {
              if (e3.issues.length === t5) continue;
              s2 || (s2 = l.QH(e3, t5));
            }
          }
          return n3 ? n3.then(() => e3) : e3;
        };
        e2._zod.run = (r3, s2) => {
          const i2 = e2._zod.parse(r3, s2);
          if (i2 instanceof Promise) {
            if (false === s2.async) throw new o.GT();
            return i2.then((e3) => t3(e3, n2, s2));
          }
          return t3(i2, n2, s2);
        };
      }
      e2["~standard"] = { validate: (t3) => {
        try {
          const r3 = (0, i.xL)(e2, t3);
          return r3.success ? { value: r3.data } : { issues: r3.error?.issues };
        } catch (r3) {
          return (0, i.bp)(e2, t3).then((e3) => e3.success ? { value: e3.data } : { issues: e3.error?.issues });
        }
      }, vendor: "zod", version: 1 };
    }), d = o.xI("$ZodString", (e2, t2) => {
      u.init(e2, t2), e2._zod.pattern = [...e2?._zod.bag?.patterns ?? []].pop() ?? a.Yj(e2._zod.bag), e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = String(r2.value);
        } catch (n3) {
        }
        return "string" == typeof r2.value || r2.issues.push({ expected: "string", code: "invalid_type", input: r2.value, inst: e2 }), r2;
      };
    }), p = o.xI("$ZodStringFormat", (e2, t2) => {
      n.ql.init(e2, t2), d.init(e2, t2);
    }), h = o.xI("$ZodGUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Os), p.init(e2, t2);
    }), m = o.xI("$ZodUUID", (e2, t2) => {
      if (t2.version) {
        const e3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t2.version];
        if (void 0 === e3) throw new Error(`Invalid UUID version: "${t2.version}"`);
        t2.pattern ?? (t2.pattern = a.uR(e3));
      } else t2.pattern ?? (t2.pattern = a.uR());
      p.init(e2, t2);
    }), f = o.xI("$ZodEmail", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Rp), p.init(e2, t2);
    }), g = o.xI("$ZodURL", (e2, t2) => {
      p.init(e2, t2), e2._zod.check = (r2) => {
        try {
          const n2 = r2.value, o2 = new URL(n2), s2 = o2.href;
          return t2.hostname && (t2.hostname.lastIndex = 0, t2.hostname.test(o2.hostname) || r2.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: a.OI.source, input: r2.value, inst: e2, continue: !t2.abort })), t2.protocol && (t2.protocol.lastIndex = 0, t2.protocol.test(o2.protocol.endsWith(":") ? o2.protocol.slice(0, -1) : o2.protocol) || r2.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t2.protocol.source, input: r2.value, inst: e2, continue: !t2.abort })), void (!n2.endsWith("/") && s2.endsWith("/") ? r2.value = s2.slice(0, -1) : r2.value = s2);
        } catch (n2) {
          r2.issues.push({ code: "invalid_format", format: "url", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    }), y = o.xI("$ZodEmoji", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Zg()), p.init(e2, t2);
    }), v = o.xI("$ZodNanoID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Ak), p.init(e2, t2);
    }), w = o.xI("$ZodCUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.gF), p.init(e2, t2);
    }), b = o.xI("$ZodCUID2", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Gl), p.init(e2, t2);
    }), _ = o.xI("$ZodULID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.Z0), p.init(e2, t2);
    }), S = o.xI("$ZodXID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.kM), p.init(e2, t2);
    }), x = o.xI("$ZodKSUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.fO), p.init(e2, t2);
    }), k = o.xI("$ZodISODateTime", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.w$(t2)), p.init(e2, t2);
    }), E = o.xI("$ZodISODate", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.p6), p.init(e2, t2);
    }), T = o.xI("$ZodISOTime", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.kB(t2)), p.init(e2, t2);
    }), C = o.xI("$ZodISODuration", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.p0), p.init(e2, t2);
    }), I = o.xI("$ZodIPv4", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.uX), p.init(e2, t2), e2._zod.onattach.push((e3) => {
        e3._zod.bag.format = "ipv4";
      });
    }), A = o.xI("$ZodIPv6", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.ug), p.init(e2, t2), e2._zod.onattach.push((e3) => {
        e3._zod.bag.format = "ipv6";
      }), e2._zod.check = (r2) => {
        try {
          new URL(`http://[${r2.value}]`);
        } catch {
          r2.issues.push({ code: "invalid_format", format: "ipv6", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    }), P = o.xI("$ZodCIDRv4", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.zr), p.init(e2, t2);
    }), M = o.xI("$ZodCIDRv6", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.l7), p.init(e2, t2), e2._zod.check = (r2) => {
        const [n2, o2] = r2.value.split("/");
        try {
          if (!o2) throw new Error();
          const e3 = Number(o2);
          if (`${e3}` !== o2) throw new Error();
          if (e3 < 0 || e3 > 128) throw new Error();
          new URL(`http://[${n2}]`);
        } catch {
          r2.issues.push({ code: "invalid_format", format: "cidrv6", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    });
    function R(e2) {
      if ("" === e2) return true;
      if (e2.length % 4 != 0) return false;
      try {
        return atob(e2), true;
      } catch {
        return false;
      }
    }
    const O = o.xI("$ZodBase64", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.K3), p.init(e2, t2), e2._zod.onattach.push((e3) => {
        e3._zod.bag.contentEncoding = "base64";
      }), e2._zod.check = (r2) => {
        R(r2.value) || r2.issues.push({ code: "invalid_format", format: "base64", input: r2.value, inst: e2, continue: !t2.abort });
      };
    });
    const D = o.xI("$ZodBase64URL", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.r0), p.init(e2, t2), e2._zod.onattach.push((e3) => {
        e3._zod.bag.contentEncoding = "base64url";
      }), e2._zod.check = (r2) => {
        (function(e3) {
          if (!a.r0.test(e3)) return false;
          const t3 = e3.replace(/[-_]/g, (e4) => "-" === e4 ? "+" : "/");
          return R(t3.padEnd(4 * Math.ceil(t3.length / 4), "="));
        })(r2.value) || r2.issues.push({ code: "invalid_format", format: "base64url", input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), N = o.xI("$ZodE164", (e2, t2) => {
      t2.pattern ?? (t2.pattern = a.hQ), p.init(e2, t2);
    });
    const F = o.xI("$ZodJWT", (e2, t2) => {
      p.init(e2, t2), e2._zod.check = (r2) => {
        (function(e3, t3 = null) {
          try {
            const r3 = e3.split(".");
            if (3 !== r3.length) return false;
            const [n2] = r3;
            if (!n2) return false;
            const o2 = JSON.parse(atob(n2));
            return !("typ" in o2 && "JWT" !== o2?.typ || !o2.alg || t3 && (!("alg" in o2) || o2.alg !== t3));
          } catch {
            return false;
          }
        })(r2.value, t2.alg) || r2.issues.push({ code: "invalid_format", format: "jwt", input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), L = o.xI("$ZodNumber", (e2, t2) => {
      u.init(e2, t2), e2._zod.pattern = e2._zod.bag.pattern ?? a.ai, e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = Number(r2.value);
        } catch (e3) {
        }
        const o2 = r2.value;
        if ("number" == typeof o2 && !Number.isNaN(o2) && Number.isFinite(o2)) return r2;
        const s2 = "number" == typeof o2 ? Number.isNaN(o2) ? "NaN" : Number.isFinite(o2) ? void 0 : "Infinity" : void 0;
        return r2.issues.push({ expected: "number", code: "invalid_type", input: o2, inst: e2, ...s2 ? { received: s2 } : {} }), r2;
      };
    }), U = o.xI("$ZodNumber", (e2, t2) => {
      n.KH.init(e2, t2), L.init(e2, t2);
    }), B = o.xI("$ZodBoolean", (e2, t2) => {
      u.init(e2, t2), e2._zod.pattern = a.zM, e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = Boolean(r2.value);
        } catch (e3) {
        }
        const o2 = r2.value;
        return "boolean" == typeof o2 || r2.issues.push({ expected: "boolean", code: "invalid_type", input: o2, inst: e2 }), r2;
      };
    }), $ = o.xI("$ZodNull", (e2, t2) => {
      u.init(e2, t2), e2._zod.pattern = a.ch, e2._zod.values = /* @__PURE__ */ new Set([null]), e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return null === n2 || t3.issues.push({ expected: "null", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), q = o.xI("$ZodAny", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (e3) => e3;
    }), j = o.xI("$ZodUnknown", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (e3) => e3;
    }), J = o.xI("$ZodNever", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (t3, r2) => (t3.issues.push({ expected: "never", code: "invalid_type", input: t3.value, inst: e2 }), t3);
    });
    function z(e2, t2, r2) {
      e2.issues.length && t2.issues.push(...l.lQ(r2, e2.issues)), t2.value[r2] = e2.value;
    }
    const H = o.xI("$ZodArray", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const o2 = r2.value;
        if (!Array.isArray(o2)) return r2.issues.push({ expected: "array", code: "invalid_type", input: o2, inst: e2 }), r2;
        r2.value = Array(o2.length);
        const s2 = [];
        for (let e3 = 0; e3 < o2.length; e3++) {
          const i2 = o2[e3], a2 = t2.element._zod.run({ value: i2, issues: [] }, n2);
          a2 instanceof Promise ? s2.push(a2.then((t3) => z(t3, r2, e3))) : z(a2, r2, e3);
        }
        return s2.length ? Promise.all(s2).then(() => r2) : r2;
      };
    });
    function W(e2, t2, r2) {
      e2.issues.length && t2.issues.push(...l.lQ(r2, e2.issues)), t2.value[r2] = e2.value;
    }
    function G(e2, t2, r2, n2) {
      e2.issues.length ? void 0 === n2[r2] ? t2.value[r2] = r2 in n2 ? void 0 : e2.value : t2.issues.push(...l.lQ(r2, e2.issues)) : void 0 === e2.value ? r2 in n2 && (t2.value[r2] = void 0) : t2.value[r2] = e2.value;
    }
    const Y = o.xI("$ZodObject", (e2, t2) => {
      u.init(e2, t2);
      const r2 = l.PO(() => {
        const e3 = Object.keys(t2.shape);
        for (const r4 of e3) if (!(t2.shape[r4] instanceof u)) throw new Error(`Invalid element at key "${r4}": expected a Zod schema`);
        const r3 = l.NM(t2.shape);
        return { shape: t2.shape, keys: e3, keySet: new Set(e3), numKeys: e3.length, optionalKeys: new Set(r3) };
      });
      l.gJ(e2._zod, "propValues", () => {
        const e3 = t2.shape, r3 = {};
        for (const t3 in e3) {
          const n3 = e3[t3]._zod;
          if (n3.values) {
            r3[t3] ?? (r3[t3] = /* @__PURE__ */ new Set());
            for (const e4 of n3.values) r3[t3].add(e4);
          }
        }
        return r3;
      });
      let n2;
      const i2 = l.Gv, a2 = !o.cr.jitless, c2 = l.hI, d2 = a2 && c2.value, p2 = t2.catchall;
      let h2;
      e2._zod.parse = (o2, c3) => {
        h2 ?? (h2 = r2.value);
        const u2 = o2.value;
        if (!i2(u2)) return o2.issues.push({ expected: "object", code: "invalid_type", input: u2, inst: e2 }), o2;
        const m2 = [];
        if (a2 && d2 && false === c3?.async && true !== c3.jitless) n2 || (n2 = ((e3) => {
          const t3 = new s(["shape", "payload", "ctx"]), n3 = r2.value, o3 = (e4) => {
            const t4 = l.UQ(e4);
            return `shape[${t4}]._zod.run({ value: input[${t4}], issues: [] }, ctx)`;
          };
          t3.write("const input = payload.value;");
          const i3 = /* @__PURE__ */ Object.create(null);
          let a3 = 0;
          for (const e4 of n3.keys) i3[e4] = "key_" + a3++;
          t3.write("const newResult = {}");
          for (const e4 of n3.keys) if (n3.optionalKeys.has(e4)) {
            const r3 = i3[e4];
            t3.write(`const ${r3} = ${o3(e4)};`);
            const n4 = l.UQ(e4);
            t3.write(`
        if (${r3}.issues.length) {
          if (input[${n4}] === undefined) {
            if (${n4} in input) {
              newResult[${n4}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${r3}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${n4}, ...iss.path] : [${n4}],
              }))
            );
          }
        } else if (${r3}.value === undefined) {
          if (${n4} in input) newResult[${n4}] = undefined;
        } else {
          newResult[${n4}] = ${r3}.value;
        }
        `);
          } else {
            const r3 = i3[e4];
            t3.write(`const ${r3} = ${o3(e4)};`), t3.write(`
          if (${r3}.issues.length) payload.issues = payload.issues.concat(${r3}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${l.UQ(e4)}, ...iss.path] : [${l.UQ(e4)}]
          })));`), t3.write(`newResult[${l.UQ(e4)}] = ${r3}.value`);
          }
          t3.write("payload.value = newResult;"), t3.write("return payload;");
          const c4 = t3.compile();
          return (t4, r3) => c4(e3, t4, r3);
        })(t2.shape)), o2 = n2(o2, c3);
        else {
          o2.value = {};
          const e3 = h2.shape;
          for (const t3 of h2.keys) {
            const r3 = e3[t3], n3 = r3._zod.run({ value: u2[t3], issues: [] }, c3), s2 = "optional" === r3._zod.optin && "optional" === r3._zod.optout;
            n3 instanceof Promise ? m2.push(n3.then((e4) => s2 ? G(e4, o2, t3, u2) : W(e4, o2, t3))) : s2 ? G(n3, o2, t3, u2) : W(n3, o2, t3);
          }
        }
        if (!p2) return m2.length ? Promise.all(m2).then(() => o2) : o2;
        const f2 = [], g2 = h2.keySet, y2 = p2._zod, v2 = y2.def.type;
        for (const e3 of Object.keys(u2)) {
          if (g2.has(e3)) continue;
          if ("never" === v2) {
            f2.push(e3);
            continue;
          }
          const t3 = y2.run({ value: u2[e3], issues: [] }, c3);
          t3 instanceof Promise ? m2.push(t3.then((t4) => W(t4, o2, e3))) : W(t3, o2, e3);
        }
        return f2.length && o2.issues.push({ code: "unrecognized_keys", keys: f2, input: u2, inst: e2 }), m2.length ? Promise.all(m2).then(() => o2) : o2;
      };
    });
    function V(e2, t2, r2, n2) {
      for (const r3 of e2) if (0 === r3.issues.length) return t2.value = r3.value, t2;
      return t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: e2.map((e3) => e3.issues.map((e4) => l.iR(e4, n2, o.$W()))) }), t2;
    }
    const K = o.xI("$ZodUnion", (e2, t2) => {
      u.init(e2, t2), l.gJ(e2._zod, "optin", () => t2.options.some((e3) => "optional" === e3._zod.optin) ? "optional" : void 0), l.gJ(e2._zod, "optout", () => t2.options.some((e3) => "optional" === e3._zod.optout) ? "optional" : void 0), l.gJ(e2._zod, "values", () => {
        if (t2.options.every((e3) => e3._zod.values)) return new Set(t2.options.flatMap((e3) => Array.from(e3._zod.values)));
      }), l.gJ(e2._zod, "pattern", () => {
        if (t2.options.every((e3) => e3._zod.pattern)) {
          const e3 = t2.options.map((e4) => e4._zod.pattern);
          return new RegExp(`^(${e3.map((e4) => l.p6(e4.source)).join("|")})$`);
        }
      }), e2._zod.parse = (r2, n2) => {
        let o2 = false;
        const s2 = [];
        for (const e3 of t2.options) {
          const t3 = e3._zod.run({ value: r2.value, issues: [] }, n2);
          if (t3 instanceof Promise) s2.push(t3), o2 = true;
          else {
            if (0 === t3.issues.length) return t3;
            s2.push(t3);
          }
        }
        return o2 ? Promise.all(s2).then((t3) => V(t3, r2, e2, n2)) : V(s2, r2, e2, n2);
      };
    }), Z = o.xI("$ZodDiscriminatedUnion", (e2, t2) => {
      K.init(e2, t2);
      const r2 = e2._zod.parse;
      l.gJ(e2._zod, "propValues", () => {
        const e3 = {};
        for (const r3 of t2.options) {
          const n3 = r3._zod.propValues;
          if (!n3 || 0 === Object.keys(n3).length) throw new Error(`Invalid discriminated union option at index "${t2.options.indexOf(r3)}"`);
          for (const [t3, r4] of Object.entries(n3)) {
            e3[t3] || (e3[t3] = /* @__PURE__ */ new Set());
            for (const n4 of r4) e3[t3].add(n4);
          }
        }
        return e3;
      });
      const n2 = l.PO(() => {
        const e3 = t2.options, r3 = /* @__PURE__ */ new Map();
        for (const n3 of e3) {
          const e4 = n3._zod.propValues[t2.discriminator];
          if (!e4 || 0 === e4.size) throw new Error(`Invalid discriminated union option at index "${t2.options.indexOf(n3)}"`);
          for (const t3 of e4) {
            if (r3.has(t3)) throw new Error(`Duplicate discriminator value "${String(t3)}"`);
            r3.set(t3, n3);
          }
        }
        return r3;
      });
      e2._zod.parse = (o2, s2) => {
        const i2 = o2.value;
        if (!l.Gv(i2)) return o2.issues.push({ code: "invalid_type", expected: "object", input: i2, inst: e2 }), o2;
        const a2 = n2.value.get(i2?.[t2.discriminator]);
        return a2 ? a2._zod.run(o2, s2) : t2.unionFallback ? r2(o2, s2) : (o2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", input: i2, path: [t2.discriminator], inst: e2 }), o2);
      };
    }), X = o.xI("$ZodIntersection", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (e3, r2) => {
        const n2 = e3.value, o2 = t2.left._zod.run({ value: n2, issues: [] }, r2), s2 = t2.right._zod.run({ value: n2, issues: [] }, r2);
        return o2 instanceof Promise || s2 instanceof Promise ? Promise.all([o2, s2]).then(([t3, r3]) => ee(e3, t3, r3)) : ee(e3, o2, s2);
      };
    });
    function Q(e2, t2) {
      if (e2 === t2) return { valid: true, data: e2 };
      if (e2 instanceof Date && t2 instanceof Date && +e2 === +t2) return { valid: true, data: e2 };
      if (l.Qd(e2) && l.Qd(t2)) {
        const r2 = Object.keys(t2), n2 = Object.keys(e2).filter((e3) => -1 !== r2.indexOf(e3)), o2 = { ...e2, ...t2 };
        for (const r3 of n2) {
          const n3 = Q(e2[r3], t2[r3]);
          if (!n3.valid) return { valid: false, mergeErrorPath: [r3, ...n3.mergeErrorPath] };
          o2[r3] = n3.data;
        }
        return { valid: true, data: o2 };
      }
      if (Array.isArray(e2) && Array.isArray(t2)) {
        if (e2.length !== t2.length) return { valid: false, mergeErrorPath: [] };
        const r2 = [];
        for (let n2 = 0; n2 < e2.length; n2++) {
          const o2 = Q(e2[n2], t2[n2]);
          if (!o2.valid) return { valid: false, mergeErrorPath: [n2, ...o2.mergeErrorPath] };
          r2.push(o2.data);
        }
        return { valid: true, data: r2 };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    function ee(e2, t2, r2) {
      if (t2.issues.length && e2.issues.push(...t2.issues), r2.issues.length && e2.issues.push(...r2.issues), l.QH(e2)) return e2;
      const n2 = Q(t2.value, r2.value);
      if (!n2.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n2.mergeErrorPath)}`);
      return e2.value = n2.data, e2;
    }
    const te = o.xI("$ZodRecord", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const s2 = r2.value;
        if (!l.Qd(s2)) return r2.issues.push({ expected: "record", code: "invalid_type", input: s2, inst: e2 }), r2;
        const i2 = [];
        if (t2.keyType._zod.values) {
          const o2 = t2.keyType._zod.values;
          r2.value = {};
          for (const e3 of o2) if ("string" == typeof e3 || "number" == typeof e3 || "symbol" == typeof e3) {
            const o3 = t2.valueType._zod.run({ value: s2[e3], issues: [] }, n2);
            o3 instanceof Promise ? i2.push(o3.then((t3) => {
              t3.issues.length && r2.issues.push(...l.lQ(e3, t3.issues)), r2.value[e3] = t3.value;
            })) : (o3.issues.length && r2.issues.push(...l.lQ(e3, o3.issues)), r2.value[e3] = o3.value);
          }
          let a2;
          for (const e3 in s2) o2.has(e3) || (a2 = a2 ?? [], a2.push(e3));
          a2 && a2.length > 0 && r2.issues.push({ code: "unrecognized_keys", input: s2, inst: e2, keys: a2 });
        } else {
          r2.value = {};
          for (const a2 of Reflect.ownKeys(s2)) {
            if ("__proto__" === a2) continue;
            const c2 = t2.keyType._zod.run({ value: a2, issues: [] }, n2);
            if (c2 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if (c2.issues.length) {
              r2.issues.push({ origin: "record", code: "invalid_key", issues: c2.issues.map((e3) => l.iR(e3, n2, o.$W())), input: a2, path: [a2], inst: e2 }), r2.value[c2.value] = c2.value;
              continue;
            }
            const u2 = t2.valueType._zod.run({ value: s2[a2], issues: [] }, n2);
            u2 instanceof Promise ? i2.push(u2.then((e3) => {
              e3.issues.length && r2.issues.push(...l.lQ(a2, e3.issues)), r2.value[c2.value] = e3.value;
            })) : (u2.issues.length && r2.issues.push(...l.lQ(a2, u2.issues)), r2.value[c2.value] = u2.value);
          }
        }
        return i2.length ? Promise.all(i2).then(() => r2) : r2;
      };
    });
    const re = o.xI("$ZodEnum", (e2, t2) => {
      u.init(e2, t2);
      const r2 = l.w5(t2.entries);
      e2._zod.values = new Set(r2), e2._zod.pattern = new RegExp(`^(${r2.filter((e3) => l.qQ.has(typeof e3)).map((e3) => "string" == typeof e3 ? l.$f(e3) : e3.toString()).join("|")})$`), e2._zod.parse = (t3, n2) => {
        const o2 = t3.value;
        return e2._zod.values.has(o2) || t3.issues.push({ code: "invalid_value", values: r2, input: o2, inst: e2 }), t3;
      };
    }), ne = o.xI("$ZodLiteral", (e2, t2) => {
      u.init(e2, t2), e2._zod.values = new Set(t2.values), e2._zod.pattern = new RegExp(`^(${t2.values.map((e3) => "string" == typeof e3 ? l.$f(e3) : e3 ? e3.toString() : String(e3)).join("|")})$`), e2._zod.parse = (r2, n2) => {
        const o2 = r2.value;
        return e2._zod.values.has(o2) || r2.issues.push({ code: "invalid_value", values: t2.values, input: o2, inst: e2 }), r2;
      };
    }), oe = o.xI("$ZodTransform", (e2, t2) => {
      u.init(e2, t2), e2._zod.parse = (e3, r2) => {
        const n2 = t2.transform(e3.value, e3);
        if (r2.async) {
          return (n2 instanceof Promise ? n2 : Promise.resolve(n2)).then((t3) => (e3.value = t3, e3));
        }
        if (n2 instanceof Promise) throw new o.GT();
        return e3.value = n2, e3;
      };
    }), se = o.xI("$ZodOptional", (e2, t2) => {
      u.init(e2, t2), e2._zod.optin = "optional", e2._zod.optout = "optional", l.gJ(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, void 0]) : void 0), l.gJ(e2._zod, "pattern", () => {
        const e3 = t2.innerType._zod.pattern;
        return e3 ? new RegExp(`^(${l.p6(e3.source)})?$`) : void 0;
      }), e2._zod.parse = (e3, r2) => "optional" === t2.innerType._zod.optin ? t2.innerType._zod.run(e3, r2) : void 0 === e3.value ? e3 : t2.innerType._zod.run(e3, r2);
    }), ie = o.xI("$ZodNullable", (e2, t2) => {
      u.init(e2, t2), l.gJ(e2._zod, "optin", () => t2.innerType._zod.optin), l.gJ(e2._zod, "optout", () => t2.innerType._zod.optout), l.gJ(e2._zod, "pattern", () => {
        const e3 = t2.innerType._zod.pattern;
        return e3 ? new RegExp(`^(${l.p6(e3.source)}|null)$`) : void 0;
      }), l.gJ(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, null]) : void 0), e2._zod.parse = (e3, r2) => null === e3.value ? e3 : t2.innerType._zod.run(e3, r2);
    }), ae = o.xI("$ZodDefault", (e2, t2) => {
      u.init(e2, t2), e2._zod.optin = "optional", l.gJ(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => {
        if (void 0 === e3.value) return e3.value = t2.defaultValue, e3;
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((e4) => le(e4, t2)) : le(n2, t2);
      };
    });
    function le(e2, t2) {
      return void 0 === e2.value && (e2.value = t2.defaultValue), e2;
    }
    const ce = o.xI("$ZodPrefault", (e2, t2) => {
      u.init(e2, t2), e2._zod.optin = "optional", l.gJ(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => (void 0 === e3.value && (e3.value = t2.defaultValue), t2.innerType._zod.run(e3, r2));
    }), ue = o.xI("$ZodNonOptional", (e2, t2) => {
      u.init(e2, t2), l.gJ(e2._zod, "values", () => {
        const e3 = t2.innerType._zod.values;
        return e3 ? new Set([...e3].filter((e4) => void 0 !== e4)) : void 0;
      }), e2._zod.parse = (r2, n2) => {
        const o2 = t2.innerType._zod.run(r2, n2);
        return o2 instanceof Promise ? o2.then((t3) => de(t3, e2)) : de(o2, e2);
      };
    });
    function de(e2, t2) {
      return e2.issues.length || void 0 !== e2.value || e2.issues.push({ code: "invalid_type", expected: "nonoptional", input: e2.value, inst: t2 }), e2;
    }
    const pe = o.xI("$ZodCatch", (e2, t2) => {
      u.init(e2, t2), e2._zod.optin = "optional", l.gJ(e2._zod, "optout", () => t2.innerType._zod.optout), l.gJ(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => {
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((n3) => (e3.value = n3.value, n3.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n3.issues.map((e4) => l.iR(e4, r2, o.$W())) }, input: e3.value }), e3.issues = []), e3)) : (e3.value = n2.value, n2.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n2.issues.map((e4) => l.iR(e4, r2, o.$W())) }, input: e3.value }), e3.issues = []), e3);
      };
    }), he = o.xI("$ZodPipe", (e2, t2) => {
      u.init(e2, t2), l.gJ(e2._zod, "values", () => t2.in._zod.values), l.gJ(e2._zod, "optin", () => t2.in._zod.optin), l.gJ(e2._zod, "optout", () => t2.out._zod.optout), e2._zod.parse = (e3, r2) => {
        const n2 = t2.in._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((e4) => me(e4, t2, r2)) : me(n2, t2, r2);
      };
    });
    function me(e2, t2, r2) {
      return l.QH(e2) ? e2 : t2.out._zod.run({ value: e2.value, issues: e2.issues }, r2);
    }
    const fe = o.xI("$ZodReadonly", (e2, t2) => {
      u.init(e2, t2), l.gJ(e2._zod, "propValues", () => t2.innerType._zod.propValues), l.gJ(e2._zod, "values", () => t2.innerType._zod.values), l.gJ(e2._zod, "optin", () => t2.innerType._zod.optin), l.gJ(e2._zod, "optout", () => t2.innerType._zod.optout), e2._zod.parse = (e3, r2) => {
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then(ge) : ge(n2);
      };
    });
    function ge(e2) {
      return e2.value = Object.freeze(e2.value), e2;
    }
    const ye = o.xI("$ZodCustom", (e2, t2) => {
      n.QP.init(e2, t2), u.init(e2, t2), e2._zod.parse = (e3, t3) => e3, e2._zod.check = (r2) => {
        const n2 = r2.value, o2 = t2.fn(n2);
        if (o2 instanceof Promise) return o2.then((t3) => ve(t3, r2, n2, e2));
        ve(o2, r2, n2, e2);
      };
    });
    function ve(e2, t2, r2, n2) {
      if (!e2) {
        const e3 = { code: "custom", input: r2, inst: n2, path: [...n2._zod.def.path ?? []], continue: !n2._zod.def.abort };
        n2._zod.def.params && (e3.params = n2._zod.def.params), t2.issues.push(l.sn(e3));
      }
    }
  }