// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5521 range:393417..423678
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5521: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Gb: () => z, $p: () => V, Dq: () => R, CQ: () => N, sF: () => F, CI: () => C, Cn: () => A, bl: () => v, Zu: () => w, t$: () => pe, b0: () => ye, rv: () => ae, P0: () => G, Oy: () => M, qG: () => m, cG: () => y, VO: () => re, Zc: () => f, Lc: () => P, Zy: () => I, v1: () => x, Ko: () => E, $N: () => O, Ax: () => T, LJ: () => X, h8: () => J, GY: () => k, nu: () => ne, Py: () => _, Um: () => B, N$: () => le, x8: () => q, qc: () => ie, vz: () => j, I: () => D, L8: () => W, ig: () => se, _m: () => fe, VF: () => ue, Sb: () => me, h: () => te, $v: () => d, EY: () => p, Wc: () => oe, W4: () => l, g5: () => b, VY: () => g, Zn: () => h, cu: () => Y, GP: () => U, TF: () => S });
    var n2 = r2(9567), o2 = r2(7381);
    class s2 {
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
    var i2 = r2(4287), a2 = r2(8927), c = r2(7246);
    const u = { major: 4, minor: 0, patch: 0 }, l = o2.xI("$ZodType", (e3, t3) => {
      var r3;
      e3 ?? (e3 = {}), e3._zod.def = t3, e3._zod.bag = e3._zod.bag || {}, e3._zod.version = u;
      const n3 = [...e3._zod.def.checks ?? []];
      e3._zod.traits.has("$ZodCheck") && n3.unshift(e3);
      for (const t4 of n3) for (const r4 of t4._zod.onattach) r4(e3);
      if (0 === n3.length) (r3 = e3._zod).deferred ?? (r3.deferred = []), e3._zod.deferred?.push(() => {
        e3._zod.run = e3._zod.parse;
      });
      else {
        const t4 = (e4, t5, r4) => {
          let n4, s3 = c.QH(e4);
          for (const i3 of t5) {
            if (i3._zod.def.when) {
              if (!i3._zod.def.when(e4)) continue;
            } else if (s3) continue;
            const t6 = e4.issues.length, a3 = i3._zod.check(e4);
            if (a3 instanceof Promise && false === r4?.async) throw new o2.GT();
            if (n4 || a3 instanceof Promise) n4 = (n4 ?? Promise.resolve()).then(async () => {
              await a3;
              e4.issues.length !== t6 && (s3 || (s3 = c.QH(e4, t6)));
            });
            else {
              if (e4.issues.length === t6) continue;
              s3 || (s3 = c.QH(e4, t6));
            }
          }
          return n4 ? n4.then(() => e4) : e4;
        };
        e3._zod.run = (r4, s3) => {
          const i3 = e3._zod.parse(r4, s3);
          if (i3 instanceof Promise) {
            if (false === s3.async) throw new o2.GT();
            return i3.then((e4) => t4(e4, n3, s3));
          }
          return t4(i3, n3, s3);
        };
      }
      e3["~standard"] = { validate: (t4) => {
        try {
          const r4 = (0, i2.xL)(e3, t4);
          return r4.success ? { value: r4.data } : { issues: r4.error?.issues };
        } catch (r4) {
          return (0, i2.bp)(e3, t4).then((e4) => e4.success ? { value: e4.data } : { issues: e4.error?.issues });
        }
      }, vendor: "zod", version: 1 };
    }), d = o2.xI("$ZodString", (e3, t3) => {
      l.init(e3, t3), e3._zod.pattern = [...e3?._zod.bag?.patterns ?? []].pop() ?? a2.Yj(e3._zod.bag), e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = String(r3.value);
        } catch (n4) {
        }
        return "string" == typeof r3.value || r3.issues.push({ expected: "string", code: "invalid_type", input: r3.value, inst: e3 }), r3;
      };
    }), p = o2.xI("$ZodStringFormat", (e3, t3) => {
      n2.ql.init(e3, t3), d.init(e3, t3);
    }), f = o2.xI("$ZodGUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Os), p.init(e3, t3);
    }), h = o2.xI("$ZodUUID", (e3, t3) => {
      if (t3.version) {
        const e4 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t3.version];
        if (void 0 === e4) throw new Error(`Invalid UUID version: "${t3.version}"`);
        t3.pattern ?? (t3.pattern = a2.uR(e4));
      } else t3.pattern ?? (t3.pattern = a2.uR());
      p.init(e3, t3);
    }), m = o2.xI("$ZodEmail", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Rp), p.init(e3, t3);
    }), g = o2.xI("$ZodURL", (e3, t3) => {
      p.init(e3, t3), e3._zod.check = (r3) => {
        try {
          const n3 = r3.value, o3 = new URL(n3), s3 = o3.href;
          return t3.hostname && (t3.hostname.lastIndex = 0, t3.hostname.test(o3.hostname) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: a2.OI.source, input: r3.value, inst: e3, continue: !t3.abort })), t3.protocol && (t3.protocol.lastIndex = 0, t3.protocol.test(o3.protocol.endsWith(":") ? o3.protocol.slice(0, -1) : o3.protocol) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t3.protocol.source, input: r3.value, inst: e3, continue: !t3.abort })), void (!n3.endsWith("/") && s3.endsWith("/") ? r3.value = s3.slice(0, -1) : r3.value = s3);
        } catch (n3) {
          r3.issues.push({ code: "invalid_format", format: "url", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    }), y = o2.xI("$ZodEmoji", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Zg()), p.init(e3, t3);
    }), _ = o2.xI("$ZodNanoID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Ak), p.init(e3, t3);
    }), v = o2.xI("$ZodCUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.gF), p.init(e3, t3);
    }), w = o2.xI("$ZodCUID2", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Gl), p.init(e3, t3);
    }), b = o2.xI("$ZodULID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.Z0), p.init(e3, t3);
    }), S = o2.xI("$ZodXID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.kM), p.init(e3, t3);
    }), k = o2.xI("$ZodKSUID", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.fO), p.init(e3, t3);
    }), E = o2.xI("$ZodISODateTime", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.w$(t3)), p.init(e3, t3);
    }), x = o2.xI("$ZodISODate", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.p6), p.init(e3, t3);
    }), T = o2.xI("$ZodISOTime", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.kB(t3)), p.init(e3, t3);
    }), O = o2.xI("$ZodISODuration", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.p0), p.init(e3, t3);
    }), P = o2.xI("$ZodIPv4", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.uX), p.init(e3, t3), e3._zod.onattach.push((e4) => {
        e4._zod.bag.format = "ipv4";
      });
    }), I = o2.xI("$ZodIPv6", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.ug), p.init(e3, t3), e3._zod.onattach.push((e4) => {
        e4._zod.bag.format = "ipv6";
      }), e3._zod.check = (r3) => {
        try {
          new URL(`http://[${r3.value}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "ipv6", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    }), C = o2.xI("$ZodCIDRv4", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.zr), p.init(e3, t3);
    }), A = o2.xI("$ZodCIDRv6", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.l7), p.init(e3, t3), e3._zod.check = (r3) => {
        const [n3, o3] = r3.value.split("/");
        try {
          if (!o3) throw new Error();
          const e4 = Number(o3);
          if (`${e4}` !== o3) throw new Error();
          if (e4 < 0 || e4 > 128) throw new Error();
          new URL(`http://[${n3}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "cidrv6", input: r3.value, inst: e3, continue: !t3.abort });
        }
      };
    });
    function $(e3) {
      if ("" === e3) return true;
      if (e3.length % 4 != 0) return false;
      try {
        return atob(e3), true;
      } catch {
        return false;
      }
    }
    const R = o2.xI("$ZodBase64", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.K3), p.init(e3, t3), e3._zod.onattach.push((e4) => {
        e4._zod.bag.contentEncoding = "base64";
      }), e3._zod.check = (r3) => {
        $(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64", input: r3.value, inst: e3, continue: !t3.abort });
      };
    });
    const N = o2.xI("$ZodBase64URL", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.r0), p.init(e3, t3), e3._zod.onattach.push((e4) => {
        e4._zod.bag.contentEncoding = "base64url";
      }), e3._zod.check = (r3) => {
        (function(e4) {
          if (!a2.r0.test(e4)) return false;
          const t4 = e4.replace(/[-_]/g, (e5) => "-" === e5 ? "+" : "/");
          return $(t4.padEnd(4 * Math.ceil(t4.length / 4), "="));
        })(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64url", input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), M = o2.xI("$ZodE164", (e3, t3) => {
      t3.pattern ?? (t3.pattern = a2.hQ), p.init(e3, t3);
    });
    const J = o2.xI("$ZodJWT", (e3, t3) => {
      p.init(e3, t3), e3._zod.check = (r3) => {
        (function(e4, t4 = null) {
          try {
            const r4 = e4.split(".");
            if (3 !== r4.length) return false;
            const [n3] = r4;
            if (!n3) return false;
            const o3 = JSON.parse(atob(n3));
            return !("typ" in o3 && "JWT" !== o3?.typ || !o3.alg || t4 && (!("alg" in o3) || o3.alg !== t4));
          } catch {
            return false;
          }
        })(r3.value, t3.alg) || r3.issues.push({ code: "invalid_format", format: "jwt", input: r3.value, inst: e3, continue: !t3.abort });
      };
    }), j = o2.xI("$ZodNumber", (e3, t3) => {
      l.init(e3, t3), e3._zod.pattern = e3._zod.bag.pattern ?? a2.ai, e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = Number(r3.value);
        } catch (e4) {
        }
        const o3 = r3.value;
        if ("number" == typeof o3 && !Number.isNaN(o3) && Number.isFinite(o3)) return r3;
        const s3 = "number" == typeof o3 ? Number.isNaN(o3) ? "NaN" : Number.isFinite(o3) ? void 0 : "Infinity" : void 0;
        return r3.issues.push({ expected: "number", code: "invalid_type", input: o3, inst: e3, ...s3 ? { received: s3 } : {} }), r3;
      };
    }), D = o2.xI("$ZodNumber", (e3, t3) => {
      n2.KH.init(e3, t3), j.init(e3, t3);
    }), F = o2.xI("$ZodBoolean", (e3, t3) => {
      l.init(e3, t3), e3._zod.pattern = a2.zM, e3._zod.parse = (r3, n3) => {
        if (t3.coerce) try {
          r3.value = Boolean(r3.value);
        } catch (e4) {
        }
        const o3 = r3.value;
        return "boolean" == typeof o3 || r3.issues.push({ expected: "boolean", code: "invalid_type", input: o3, inst: e3 }), r3;
      };
    }), q = o2.xI("$ZodNull", (e3, t3) => {
      l.init(e3, t3), e3._zod.pattern = a2.ch, e3._zod.values = /* @__PURE__ */ new Set([null]), e3._zod.parse = (t4, r3) => {
        const n3 = t4.value;
        return null === n3 || t4.issues.push({ expected: "null", code: "invalid_type", input: n3, inst: e3 }), t4;
      };
    }), z = o2.xI("$ZodAny", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (e4) => e4;
    }), U = o2.xI("$ZodUnknown", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (e4) => e4;
    }), B = o2.xI("$ZodNever", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (t4, r3) => (t4.issues.push({ expected: "never", code: "invalid_type", input: t4.value, inst: e3 }), t4);
    });
    function L(e3, t3, r3) {
      e3.issues.length && t3.issues.push(...c.lQ(r3, e3.issues)), t3.value[r3] = e3.value;
    }
    const V = o2.xI("$ZodArray", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const o3 = r3.value;
        if (!Array.isArray(o3)) return r3.issues.push({ expected: "array", code: "invalid_type", input: o3, inst: e3 }), r3;
        r3.value = Array(o3.length);
        const s3 = [];
        for (let e4 = 0; e4 < o3.length; e4++) {
          const i3 = o3[e4], a3 = t3.element._zod.run({ value: i3, issues: [] }, n3);
          a3 instanceof Promise ? s3.push(a3.then((t4) => L(t4, r3, e4))) : L(a3, r3, e4);
        }
        return s3.length ? Promise.all(s3).then(() => r3) : r3;
      };
    });
    function K(e3, t3, r3) {
      e3.issues.length && t3.issues.push(...c.lQ(r3, e3.issues)), t3.value[r3] = e3.value;
    }
    function Z(e3, t3, r3, n3) {
      e3.issues.length ? void 0 === n3[r3] ? t3.value[r3] = r3 in n3 ? void 0 : e3.value : t3.issues.push(...c.lQ(r3, e3.issues)) : void 0 === e3.value ? r3 in n3 && (t3.value[r3] = void 0) : t3.value[r3] = e3.value;
    }
    const W = o2.xI("$ZodObject", (e3, t3) => {
      l.init(e3, t3);
      const r3 = c.PO(() => {
        const e4 = Object.keys(t3.shape);
        for (const r5 of e4) if (!(t3.shape[r5] instanceof l)) throw new Error(`Invalid element at key "${r5}": expected a Zod schema`);
        const r4 = c.NM(t3.shape);
        return { shape: t3.shape, keys: e4, keySet: new Set(e4), numKeys: e4.length, optionalKeys: new Set(r4) };
      });
      c.gJ(e3._zod, "propValues", () => {
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
      let n3;
      const i3 = c.Gv, a3 = !o2.cr.jitless, u2 = c.hI, d2 = a3 && u2.value, p2 = t3.catchall;
      let f2;
      e3._zod.parse = (o3, u3) => {
        f2 ?? (f2 = r3.value);
        const l2 = o3.value;
        if (!i3(l2)) return o3.issues.push({ expected: "object", code: "invalid_type", input: l2, inst: e3 }), o3;
        const h2 = [];
        if (a3 && d2 && false === u3?.async && true !== u3.jitless) n3 || (n3 = ((e4) => {
          const t4 = new s2(["shape", "payload", "ctx"]), n4 = r3.value, o4 = (e5) => {
            const t5 = c.UQ(e5);
            return `shape[${t5}]._zod.run({ value: input[${t5}], issues: [] }, ctx)`;
          };
          t4.write("const input = payload.value;");
          const i4 = /* @__PURE__ */ Object.create(null);
          let a4 = 0;
          for (const e5 of n4.keys) i4[e5] = "key_" + a4++;
          t4.write("const newResult = {}");
          for (const e5 of n4.keys) if (n4.optionalKeys.has(e5)) {
            const r4 = i4[e5];
            t4.write(`const ${r4} = ${o4(e5)};`);
            const n5 = c.UQ(e5);
            t4.write(`
        if (${r4}.issues.length) {
          if (input[${n5}] === undefined) {
            if (${n5} in input) {
              newResult[${n5}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${r4}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${n5}, ...iss.path] : [${n5}],
              }))
            );
          }
        } else if (${r4}.value === undefined) {
          if (${n5} in input) newResult[${n5}] = undefined;
        } else {
          newResult[${n5}] = ${r4}.value;
        }
        `);
          } else {
            const r4 = i4[e5];
            t4.write(`const ${r4} = ${o4(e5)};`), t4.write(`
          if (${r4}.issues.length) payload.issues = payload.issues.concat(${r4}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${c.UQ(e5)}, ...iss.path] : [${c.UQ(e5)}]
          })));`), t4.write(`newResult[${c.UQ(e5)}] = ${r4}.value`);
          }
          t4.write("payload.value = newResult;"), t4.write("return payload;");
          const u4 = t4.compile();
          return (t5, r4) => u4(e4, t5, r4);
        })(t3.shape)), o3 = n3(o3, u3);
        else {
          o3.value = {};
          const e4 = f2.shape;
          for (const t4 of f2.keys) {
            const r4 = e4[t4], n4 = r4._zod.run({ value: l2[t4], issues: [] }, u3), s3 = "optional" === r4._zod.optin && "optional" === r4._zod.optout;
            n4 instanceof Promise ? h2.push(n4.then((e5) => s3 ? Z(e5, o3, t4, l2) : K(e5, o3, t4))) : s3 ? Z(n4, o3, t4, l2) : K(n4, o3, t4);
          }
        }
        if (!p2) return h2.length ? Promise.all(h2).then(() => o3) : o3;
        const m2 = [], g2 = f2.keySet, y2 = p2._zod, _2 = y2.def.type;
        for (const e4 of Object.keys(l2)) {
          if (g2.has(e4)) continue;
          if ("never" === _2) {
            m2.push(e4);
            continue;
          }
          const t4 = y2.run({ value: l2[e4], issues: [] }, u3);
          t4 instanceof Promise ? h2.push(t4.then((t5) => K(t5, o3, e4))) : K(t4, o3, e4);
        }
        return m2.length && o3.issues.push({ code: "unrecognized_keys", keys: m2, input: l2, inst: e3 }), h2.length ? Promise.all(h2).then(() => o3) : o3;
      };
    });
    function H(e3, t3, r3, n3) {
      for (const r4 of e3) if (0 === r4.issues.length) return t3.value = r4.value, t3;
      return t3.issues.push({ code: "invalid_union", input: t3.value, inst: r3, errors: e3.map((e4) => e4.issues.map((e5) => c.iR(e5, n3, o2.$W()))) }), t3;
    }
    const Y = o2.xI("$ZodUnion", (e3, t3) => {
      l.init(e3, t3), c.gJ(e3._zod, "optin", () => t3.options.some((e4) => "optional" === e4._zod.optin) ? "optional" : void 0), c.gJ(e3._zod, "optout", () => t3.options.some((e4) => "optional" === e4._zod.optout) ? "optional" : void 0), c.gJ(e3._zod, "values", () => {
        if (t3.options.every((e4) => e4._zod.values)) return new Set(t3.options.flatMap((e4) => Array.from(e4._zod.values)));
      }), c.gJ(e3._zod, "pattern", () => {
        if (t3.options.every((e4) => e4._zod.pattern)) {
          const e4 = t3.options.map((e5) => e5._zod.pattern);
          return new RegExp(`^(${e4.map((e5) => c.p6(e5.source)).join("|")})$`);
        }
      }), e3._zod.parse = (r3, n3) => {
        let o3 = false;
        const s3 = [];
        for (const e4 of t3.options) {
          const t4 = e4._zod.run({ value: r3.value, issues: [] }, n3);
          if (t4 instanceof Promise) s3.push(t4), o3 = true;
          else {
            if (0 === t4.issues.length) return t4;
            s3.push(t4);
          }
        }
        return o3 ? Promise.all(s3).then((t4) => H(t4, r3, e3, n3)) : H(s3, r3, e3, n3);
      };
    }), G = o2.xI("$ZodDiscriminatedUnion", (e3, t3) => {
      Y.init(e3, t3);
      const r3 = e3._zod.parse;
      c.gJ(e3._zod, "propValues", () => {
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
      const n3 = c.PO(() => {
        const e4 = t3.options, r4 = /* @__PURE__ */ new Map();
        for (const n4 of e4) {
          const e5 = n4._zod.propValues[t3.discriminator];
          if (!e5 || 0 === e5.size) throw new Error(`Invalid discriminated union option at index "${t3.options.indexOf(n4)}"`);
          for (const t4 of e5) {
            if (r4.has(t4)) throw new Error(`Duplicate discriminator value "${String(t4)}"`);
            r4.set(t4, n4);
          }
        }
        return r4;
      });
      e3._zod.parse = (o3, s3) => {
        const i3 = o3.value;
        if (!c.Gv(i3)) return o3.issues.push({ code: "invalid_type", expected: "object", input: i3, inst: e3 }), o3;
        const a3 = n3.value.get(i3?.[t3.discriminator]);
        return a3 ? a3._zod.run(o3, s3) : t3.unionFallback ? r3(o3, s3) : (o3.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", input: i3, path: [t3.discriminator], inst: e3 }), o3);
      };
    }), X = o2.xI("$ZodIntersection", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (e4, r3) => {
        const n3 = e4.value, o3 = t3.left._zod.run({ value: n3, issues: [] }, r3), s3 = t3.right._zod.run({ value: n3, issues: [] }, r3);
        return o3 instanceof Promise || s3 instanceof Promise ? Promise.all([o3, s3]).then(([t4, r4]) => ee(e4, t4, r4)) : ee(e4, o3, s3);
      };
    });
    function Q(e3, t3) {
      if (e3 === t3) return { valid: true, data: e3 };
      if (e3 instanceof Date && t3 instanceof Date && +e3 === +t3) return { valid: true, data: e3 };
      if (c.Qd(e3) && c.Qd(t3)) {
        const r3 = Object.keys(t3), n3 = Object.keys(e3).filter((e4) => -1 !== r3.indexOf(e4)), o3 = { ...e3, ...t3 };
        for (const r4 of n3) {
          const n4 = Q(e3[r4], t3[r4]);
          if (!n4.valid) return { valid: false, mergeErrorPath: [r4, ...n4.mergeErrorPath] };
          o3[r4] = n4.data;
        }
        return { valid: true, data: o3 };
      }
      if (Array.isArray(e3) && Array.isArray(t3)) {
        if (e3.length !== t3.length) return { valid: false, mergeErrorPath: [] };
        const r3 = [];
        for (let n3 = 0; n3 < e3.length; n3++) {
          const o3 = Q(e3[n3], t3[n3]);
          if (!o3.valid) return { valid: false, mergeErrorPath: [n3, ...o3.mergeErrorPath] };
          r3.push(o3.data);
        }
        return { valid: true, data: r3 };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    function ee(e3, t3, r3) {
      if (t3.issues.length && e3.issues.push(...t3.issues), r3.issues.length && e3.issues.push(...r3.issues), c.QH(e3)) return e3;
      const n3 = Q(t3.value, r3.value);
      if (!n3.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n3.mergeErrorPath)}`);
      return e3.value = n3.data, e3;
    }
    const te = o2.xI("$ZodRecord", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (r3, n3) => {
        const s3 = r3.value;
        if (!c.Qd(s3)) return r3.issues.push({ expected: "record", code: "invalid_type", input: s3, inst: e3 }), r3;
        const i3 = [];
        if (t3.keyType._zod.values) {
          const o3 = t3.keyType._zod.values;
          r3.value = {};
          for (const e4 of o3) if ("string" == typeof e4 || "number" == typeof e4 || "symbol" == typeof e4) {
            const o4 = t3.valueType._zod.run({ value: s3[e4], issues: [] }, n3);
            o4 instanceof Promise ? i3.push(o4.then((t4) => {
              t4.issues.length && r3.issues.push(...c.lQ(e4, t4.issues)), r3.value[e4] = t4.value;
            })) : (o4.issues.length && r3.issues.push(...c.lQ(e4, o4.issues)), r3.value[e4] = o4.value);
          }
          let a3;
          for (const e4 in s3) o3.has(e4) || (a3 = a3 ?? [], a3.push(e4));
          a3 && a3.length > 0 && r3.issues.push({ code: "unrecognized_keys", input: s3, inst: e3, keys: a3 });
        } else {
          r3.value = {};
          for (const a3 of Reflect.ownKeys(s3)) {
            if ("__proto__" === a3) continue;
            const u2 = t3.keyType._zod.run({ value: a3, issues: [] }, n3);
            if (u2 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if (u2.issues.length) {
              r3.issues.push({ origin: "record", code: "invalid_key", issues: u2.issues.map((e4) => c.iR(e4, n3, o2.$W())), input: a3, path: [a3], inst: e3 }), r3.value[u2.value] = u2.value;
              continue;
            }
            const l2 = t3.valueType._zod.run({ value: s3[a3], issues: [] }, n3);
            l2 instanceof Promise ? i3.push(l2.then((e4) => {
              e4.issues.length && r3.issues.push(...c.lQ(a3, e4.issues)), r3.value[u2.value] = e4.value;
            })) : (l2.issues.length && r3.issues.push(...c.lQ(a3, l2.issues)), r3.value[u2.value] = l2.value);
          }
        }
        return i3.length ? Promise.all(i3).then(() => r3) : r3;
      };
    });
    const re = o2.xI("$ZodEnum", (e3, t3) => {
      l.init(e3, t3);
      const r3 = c.w5(t3.entries);
      e3._zod.values = new Set(r3), e3._zod.pattern = new RegExp(`^(${r3.filter((e4) => c.qQ.has(typeof e4)).map((e4) => "string" == typeof e4 ? c.$f(e4) : e4.toString()).join("|")})$`), e3._zod.parse = (t4, n3) => {
        const o3 = t4.value;
        return e3._zod.values.has(o3) || t4.issues.push({ code: "invalid_value", values: r3, input: o3, inst: e3 }), t4;
      };
    }), ne = o2.xI("$ZodLiteral", (e3, t3) => {
      l.init(e3, t3), e3._zod.values = new Set(t3.values), e3._zod.pattern = new RegExp(`^(${t3.values.map((e4) => "string" == typeof e4 ? c.$f(e4) : e4 ? e4.toString() : String(e4)).join("|")})$`), e3._zod.parse = (r3, n3) => {
        const o3 = r3.value;
        return e3._zod.values.has(o3) || r3.issues.push({ code: "invalid_value", values: t3.values, input: o3, inst: e3 }), r3;
      };
    }), oe = o2.xI("$ZodTransform", (e3, t3) => {
      l.init(e3, t3), e3._zod.parse = (e4, r3) => {
        const n3 = t3.transform(e4.value, e4);
        if (r3.async) {
          return (n3 instanceof Promise ? n3 : Promise.resolve(n3)).then((t4) => (e4.value = t4, e4));
        }
        if (n3 instanceof Promise) throw new o2.GT();
        return e4.value = n3, e4;
      };
    }), se = o2.xI("$ZodOptional", (e3, t3) => {
      l.init(e3, t3), e3._zod.optin = "optional", e3._zod.optout = "optional", c.gJ(e3._zod, "values", () => t3.innerType._zod.values ? /* @__PURE__ */ new Set([...t3.innerType._zod.values, void 0]) : void 0), c.gJ(e3._zod, "pattern", () => {
        const e4 = t3.innerType._zod.pattern;
        return e4 ? new RegExp(`^(${c.p6(e4.source)})?$`) : void 0;
      }), e3._zod.parse = (e4, r3) => "optional" === t3.innerType._zod.optin ? t3.innerType._zod.run(e4, r3) : void 0 === e4.value ? e4 : t3.innerType._zod.run(e4, r3);
    }), ie = o2.xI("$ZodNullable", (e3, t3) => {
      l.init(e3, t3), c.gJ(e3._zod, "optin", () => t3.innerType._zod.optin), c.gJ(e3._zod, "optout", () => t3.innerType._zod.optout), c.gJ(e3._zod, "pattern", () => {
        const e4 = t3.innerType._zod.pattern;
        return e4 ? new RegExp(`^(${c.p6(e4.source)}|null)$`) : void 0;
      }), c.gJ(e3._zod, "values", () => t3.innerType._zod.values ? /* @__PURE__ */ new Set([...t3.innerType._zod.values, null]) : void 0), e3._zod.parse = (e4, r3) => null === e4.value ? e4 : t3.innerType._zod.run(e4, r3);
    }), ae = o2.xI("$ZodDefault", (e3, t3) => {
      l.init(e3, t3), e3._zod.optin = "optional", c.gJ(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => {
        if (void 0 === e4.value) return e4.value = t3.defaultValue, e4;
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((e5) => ce(e5, t3)) : ce(n3, t3);
      };
    });
    function ce(e3, t3) {
      return void 0 === e3.value && (e3.value = t3.defaultValue), e3;
    }
    const ue = o2.xI("$ZodPrefault", (e3, t3) => {
      l.init(e3, t3), e3._zod.optin = "optional", c.gJ(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => (void 0 === e4.value && (e4.value = t3.defaultValue), t3.innerType._zod.run(e4, r3));
    }), le = o2.xI("$ZodNonOptional", (e3, t3) => {
      l.init(e3, t3), c.gJ(e3._zod, "values", () => {
        const e4 = t3.innerType._zod.values;
        return e4 ? new Set([...e4].filter((e5) => void 0 !== e5)) : void 0;
      }), e3._zod.parse = (r3, n3) => {
        const o3 = t3.innerType._zod.run(r3, n3);
        return o3 instanceof Promise ? o3.then((t4) => de(t4, e3)) : de(o3, e3);
      };
    });
    function de(e3, t3) {
      return e3.issues.length || void 0 !== e3.value || e3.issues.push({ code: "invalid_type", expected: "nonoptional", input: e3.value, inst: t3 }), e3;
    }
    const pe = o2.xI("$ZodCatch", (e3, t3) => {
      l.init(e3, t3), e3._zod.optin = "optional", c.gJ(e3._zod, "optout", () => t3.innerType._zod.optout), c.gJ(e3._zod, "values", () => t3.innerType._zod.values), e3._zod.parse = (e4, r3) => {
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((n4) => (e4.value = n4.value, n4.issues.length && (e4.value = t3.catchValue({ ...e4, error: { issues: n4.issues.map((e5) => c.iR(e5, r3, o2.$W())) }, input: e4.value }), e4.issues = []), e4)) : (e4.value = n3.value, n3.issues.length && (e4.value = t3.catchValue({ ...e4, error: { issues: n3.issues.map((e5) => c.iR(e5, r3, o2.$W())) }, input: e4.value }), e4.issues = []), e4);
      };
    }), fe = o2.xI("$ZodPipe", (e3, t3) => {
      l.init(e3, t3), c.gJ(e3._zod, "values", () => t3.in._zod.values), c.gJ(e3._zod, "optin", () => t3.in._zod.optin), c.gJ(e3._zod, "optout", () => t3.out._zod.optout), e3._zod.parse = (e4, r3) => {
        const n3 = t3.in._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then((e5) => he(e5, t3, r3)) : he(n3, t3, r3);
      };
    });
    function he(e3, t3, r3) {
      return c.QH(e3) ? e3 : t3.out._zod.run({ value: e3.value, issues: e3.issues }, r3);
    }
    const me = o2.xI("$ZodReadonly", (e3, t3) => {
      l.init(e3, t3), c.gJ(e3._zod, "propValues", () => t3.innerType._zod.propValues), c.gJ(e3._zod, "values", () => t3.innerType._zod.values), c.gJ(e3._zod, "optin", () => t3.innerType._zod.optin), c.gJ(e3._zod, "optout", () => t3.innerType._zod.optout), e3._zod.parse = (e4, r3) => {
        const n3 = t3.innerType._zod.run(e4, r3);
        return n3 instanceof Promise ? n3.then(ge) : ge(n3);
      };
    });
    function ge(e3) {
      return e3.value = Object.freeze(e3.value), e3;
    }
    const ye = o2.xI("$ZodCustom", (e3, t3) => {
      n2.QP.init(e3, t3), l.init(e3, t3), e3._zod.parse = (e4, t4) => e4, e3._zod.check = (r3) => {
        const n3 = r3.value, o3 = t3.fn(n3);
        if (o3 instanceof Promise) return o3.then((t4) => _e(t4, r3, n3, e3));
        _e(o3, r3, n3, e3);
      };
    });
    function _e(e3, t3, r3, n3) {
      if (!e3) {
        const e4 = { code: "custom", input: r3, inst: n3, path: [...n3._zod.def.path ?? []], continue: !n3._zod.def.abort };
        n3._zod.def.params && (e4.params = n3._zod.def.params), t3.issues.push(c.sn(e4));
      }
    }
  }