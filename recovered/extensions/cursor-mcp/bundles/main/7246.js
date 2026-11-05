// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7246 range:610313..617223
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7246: (e2, t2, r2) => {
    "use strict";
    function n2(e3) {
      const t3 = Object.values(e3).filter((e4) => "number" == typeof e4);
      return Object.entries(e3).filter(([e4, r3]) => -1 === t3.indexOf(+e4)).map(([e4, t4]) => t4);
    }
    function o2(e3, t3) {
      return "bigint" == typeof t3 ? t3.toString() : t3;
    }
    function s2(e3) {
      return { get value() {
        {
          const t3 = e3();
          return Object.defineProperty(this, "value", { value: t3 }), t3;
        }
      } };
    }
    function i2(e3) {
      return null == e3;
    }
    function a2(e3) {
      const t3 = e3.startsWith("^") ? 1 : 0, r3 = e3.endsWith("$") ? e3.length - 1 : e3.length;
      return e3.slice(t3, r3);
    }
    function c(e3, t3) {
      const r3 = (e3.toString().split(".")[1] || "").length, n3 = (t3.toString().split(".")[1] || "").length, o3 = r3 > n3 ? r3 : n3;
      return Number.parseInt(e3.toFixed(o3).replace(".", "")) % Number.parseInt(t3.toFixed(o3).replace(".", "")) / 10 ** o3;
    }
    function u(e3, t3, r3) {
      Object.defineProperty(e3, t3, { get() {
        {
          const n3 = r3();
          return e3[t3] = n3, n3;
        }
      }, set(r4) {
        Object.defineProperty(e3, t3, { value: r4 });
      }, configurable: true });
    }
    function l(e3, t3, r3) {
      Object.defineProperty(e3, t3, { value: r3, writable: true, enumerable: true, configurable: true });
    }
    function d(e3) {
      return JSON.stringify(e3);
    }
    r2.d(t2, { $f: () => y, A2: () => v, Gv: () => f, LG: () => c, NM: () => w, OH: () => T, PO: () => s2, QH: () => P, Qd: () => m, Rc: () => $, UQ: () => d, Up: () => S, Vy: () => l, X$: () => E, cJ: () => k, cl: () => i2, gJ: () => u, gx: () => p, h1: () => x, hI: () => h, iR: () => A, k8: () => o2, lQ: () => I, mw: () => O, o8: () => _, p6: () => a2, qQ: () => g, sn: () => R, w5: () => n2, zH: () => b });
    const p = Error.captureStackTrace ? Error.captureStackTrace : (...e3) => {
    };
    function f(e3) {
      return "object" == typeof e3 && null !== e3 && !Array.isArray(e3);
    }
    const h = s2(() => {
      if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (e3) {
        return false;
      }
    });
    function m(e3) {
      if (false === f(e3)) return false;
      const t3 = e3.constructor;
      if (void 0 === t3) return true;
      const r3 = t3.prototype;
      return false !== f(r3) && false !== Object.prototype.hasOwnProperty.call(r3, "isPrototypeOf");
    }
    const g = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
    /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function y(e3) {
      return e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function _(e3, t3, r3) {
      const n3 = new e3._zod.constr(t3 ?? e3._zod.def);
      return t3 && !r3?.parent || (n3._zod.parent = e3), n3;
    }
    function v(e3) {
      const t3 = e3;
      if (!t3) return {};
      if ("string" == typeof t3) return { error: () => t3 };
      if (void 0 !== t3?.message) {
        if (void 0 !== t3?.error) throw new Error("Cannot specify both `message` and `error` params");
        t3.error = t3.message;
      }
      return delete t3.message, "string" == typeof t3.error ? { ...t3, error: () => t3.error } : t3;
    }
    function w(e3) {
      return Object.keys(e3).filter((t3) => "optional" === e3[t3]._zod.optin && "optional" === e3[t3]._zod.optout);
    }
    const b = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
    function S(e3, t3) {
      const r3 = {}, n3 = e3._zod.def;
      for (const e4 in t3) {
        if (!(e4 in n3.shape)) throw new Error(`Unrecognized key: "${e4}"`);
        t3[e4] && (r3[e4] = n3.shape[e4]);
      }
      return _(e3, { ...e3._zod.def, shape: r3, checks: [] });
    }
    function k(e3, t3) {
      const r3 = { ...e3._zod.def.shape }, n3 = e3._zod.def;
      for (const e4 in t3) {
        if (!(e4 in n3.shape)) throw new Error(`Unrecognized key: "${e4}"`);
        t3[e4] && delete r3[e4];
      }
      return _(e3, { ...e3._zod.def, shape: r3, checks: [] });
    }
    function E(e3, t3) {
      if (!m(t3)) throw new Error("Invalid input to extend: expected a plain object");
      const r3 = { ...e3._zod.def, get shape() {
        const r4 = { ...e3._zod.def.shape, ...t3 };
        return l(this, "shape", r4), r4;
      }, checks: [] };
      return _(e3, r3);
    }
    function x(e3, t3) {
      return _(e3, { ...e3._zod.def, get shape() {
        const r3 = { ...e3._zod.def.shape, ...t3._zod.def.shape };
        return l(this, "shape", r3), r3;
      }, catchall: t3._zod.def.catchall, checks: [] });
    }
    function T(e3, t3, r3) {
      const n3 = t3._zod.def.shape, o3 = { ...n3 };
      if (r3) for (const t4 in r3) {
        if (!(t4 in n3)) throw new Error(`Unrecognized key: "${t4}"`);
        r3[t4] && (o3[t4] = e3 ? new e3({ type: "optional", innerType: n3[t4] }) : n3[t4]);
      }
      else for (const t4 in n3) o3[t4] = e3 ? new e3({ type: "optional", innerType: n3[t4] }) : n3[t4];
      return _(t3, { ...t3._zod.def, shape: o3, checks: [] });
    }
    function O(e3, t3, r3) {
      const n3 = t3._zod.def.shape, o3 = { ...n3 };
      if (r3) for (const t4 in r3) {
        if (!(t4 in o3)) throw new Error(`Unrecognized key: "${t4}"`);
        r3[t4] && (o3[t4] = new e3({ type: "nonoptional", innerType: n3[t4] }));
      }
      else for (const t4 in n3) o3[t4] = new e3({ type: "nonoptional", innerType: n3[t4] });
      return _(t3, { ...t3._zod.def, shape: o3, checks: [] });
    }
    function P(e3, t3 = 0) {
      for (let r3 = t3; r3 < e3.issues.length; r3++) if (true !== e3.issues[r3]?.continue) return true;
      return false;
    }
    function I(e3, t3) {
      return t3.map((t4) => {
        var r3;
        return (r3 = t4).path ?? (r3.path = []), t4.path.unshift(e3), t4;
      });
    }
    function C(e3) {
      return "string" == typeof e3 ? e3 : e3?.message;
    }
    function A(e3, t3, r3) {
      const n3 = { ...e3, path: e3.path ?? [] };
      if (!e3.message) {
        const o3 = C(e3.inst?._zod.def?.error?.(e3)) ?? C(t3?.error?.(e3)) ?? C(r3.customError?.(e3)) ?? C(r3.localeError?.(e3)) ?? "Invalid input";
        n3.message = o3;
      }
      return delete n3.inst, delete n3.continue, t3?.reportInput || delete n3.input, n3;
    }
    function $(e3) {
      return Array.isArray(e3) ? "array" : "string" == typeof e3 ? "string" : "unknown";
    }
    function R(...e3) {
      const [t3, r3, n3] = e3;
      return "string" == typeof t3 ? { message: t3, code: "custom", input: r3, inst: n3 } : { ...t3 };
    }
  }