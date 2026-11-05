// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 7246 range:3199979..3206873
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7246: (e, t, r) => {
    "use strict";
    function n(e2) {
      const t2 = Object.values(e2).filter((e3) => "number" == typeof e3);
      return Object.entries(e2).filter(([e3, r2]) => -1 === t2.indexOf(+e3)).map(([e3, t3]) => t3);
    }
    function s(e2, t2) {
      return "bigint" == typeof t2 ? t2.toString() : t2;
    }
    function o(e2) {
      return { get value() {
        {
          const t2 = e2();
          return Object.defineProperty(this, "value", { value: t2 }), t2;
        }
      } };
    }
    function i(e2) {
      return null == e2;
    }
    function a(e2) {
      const t2 = e2.startsWith("^") ? 1 : 0, r2 = e2.endsWith("$") ? e2.length - 1 : e2.length;
      return e2.slice(t2, r2);
    }
    function c(e2, t2) {
      const r2 = (e2.toString().split(".")[1] || "").length, n2 = (t2.toString().split(".")[1] || "").length, s2 = r2 > n2 ? r2 : n2;
      return Number.parseInt(e2.toFixed(s2).replace(".", "")) % Number.parseInt(t2.toFixed(s2).replace(".", "")) / 10 ** s2;
    }
    function l(e2, t2, r2) {
      Object.defineProperty(e2, t2, { get() {
        {
          const n2 = r2();
          return e2[t2] = n2, n2;
        }
      }, set(r3) {
        Object.defineProperty(e2, t2, { value: r3 });
      }, configurable: true });
    }
    function u(e2, t2, r2) {
      Object.defineProperty(e2, t2, { value: r2, writable: true, enumerable: true, configurable: true });
    }
    function d(e2) {
      return JSON.stringify(e2);
    }
    r.d(t, { $f: () => y, A2: () => v, Gv: () => m, LG: () => c, NM: () => _, OH: () => C, PO: () => o, QH: () => x, Qd: () => f, Rc: () => P, UQ: () => d, Up: () => S, Vy: () => u, X$: () => E, cJ: () => b, cl: () => i, gJ: () => l, gx: () => p, h1: () => I, hI: () => h, iR: () => B, k8: () => s, lQ: () => T, mw: () => k, o8: () => w, p6: () => a, qQ: () => g, sn: () => J, w5: () => n, zH: () => A });
    const p = Error.captureStackTrace ? Error.captureStackTrace : (...e2) => {
    };
    function m(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    const h = o(() => {
      if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (e2) {
        return false;
      }
    });
    function f(e2) {
      if (false === m(e2)) return false;
      const t2 = e2.constructor;
      if (void 0 === t2) return true;
      const r2 = t2.prototype;
      return false !== m(r2) && false !== Object.prototype.hasOwnProperty.call(r2, "isPrototypeOf");
    }
    const g = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
    /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function y(e2) {
      return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function w(e2, t2, r2) {
      const n2 = new e2._zod.constr(t2 ?? e2._zod.def);
      return t2 && !r2?.parent || (n2._zod.parent = e2), n2;
    }
    function v(e2) {
      const t2 = e2;
      if (!t2) return {};
      if ("string" == typeof t2) return { error: () => t2 };
      if (void 0 !== t2?.message) {
        if (void 0 !== t2?.error) throw new Error("Cannot specify both `message` and `error` params");
        t2.error = t2.message;
      }
      return delete t2.message, "string" == typeof t2.error ? { ...t2, error: () => t2.error } : t2;
    }
    function _(e2) {
      return Object.keys(e2).filter((t2) => "optional" === e2[t2]._zod.optin && "optional" === e2[t2]._zod.optout);
    }
    const A = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
    function S(e2, t2) {
      const r2 = {}, n2 = e2._zod.def;
      for (const e3 in t2) {
        if (!(e3 in n2.shape)) throw new Error(`Unrecognized key: "${e3}"`);
        t2[e3] && (r2[e3] = n2.shape[e3]);
      }
      return w(e2, { ...e2._zod.def, shape: r2, checks: [] });
    }
    function b(e2, t2) {
      const r2 = { ...e2._zod.def.shape }, n2 = e2._zod.def;
      for (const e3 in t2) {
        if (!(e3 in n2.shape)) throw new Error(`Unrecognized key: "${e3}"`);
        t2[e3] && delete r2[e3];
      }
      return w(e2, { ...e2._zod.def, shape: r2, checks: [] });
    }
    function E(e2, t2) {
      if (!f(t2)) throw new Error("Invalid input to extend: expected a plain object");
      const r2 = { ...e2._zod.def, get shape() {
        const r3 = { ...e2._zod.def.shape, ...t2 };
        return u(this, "shape", r3), r3;
      }, checks: [] };
      return w(e2, r2);
    }
    function I(e2, t2) {
      return w(e2, { ...e2._zod.def, get shape() {
        const r2 = { ...e2._zod.def.shape, ...t2._zod.def.shape };
        return u(this, "shape", r2), r2;
      }, catchall: t2._zod.def.catchall, checks: [] });
    }
    function C(e2, t2, r2) {
      const n2 = t2._zod.def.shape, s2 = { ...n2 };
      if (r2) for (const t3 in r2) {
        if (!(t3 in n2)) throw new Error(`Unrecognized key: "${t3}"`);
        r2[t3] && (s2[t3] = e2 ? new e2({ type: "optional", innerType: n2[t3] }) : n2[t3]);
      }
      else for (const t3 in n2) s2[t3] = e2 ? new e2({ type: "optional", innerType: n2[t3] }) : n2[t3];
      return w(t2, { ...t2._zod.def, shape: s2, checks: [] });
    }
    function k(e2, t2, r2) {
      const n2 = t2._zod.def.shape, s2 = { ...n2 };
      if (r2) for (const t3 in r2) {
        if (!(t3 in s2)) throw new Error(`Unrecognized key: "${t3}"`);
        r2[t3] && (s2[t3] = new e2({ type: "nonoptional", innerType: n2[t3] }));
      }
      else for (const t3 in n2) s2[t3] = new e2({ type: "nonoptional", innerType: n2[t3] });
      return w(t2, { ...t2._zod.def, shape: s2, checks: [] });
    }
    function x(e2, t2 = 0) {
      for (let r2 = t2; r2 < e2.issues.length; r2++) if (true !== e2.issues[r2]?.continue) return true;
      return false;
    }
    function T(e2, t2) {
      return t2.map((t3) => {
        var r2;
        return (r2 = t3).path ?? (r2.path = []), t3.path.unshift(e2), t3;
      });
    }
    function R(e2) {
      return "string" == typeof e2 ? e2 : e2?.message;
    }
    function B(e2, t2, r2) {
      const n2 = { ...e2, path: e2.path ?? [] };
      if (!e2.message) {
        const s2 = R(e2.inst?._zod.def?.error?.(e2)) ?? R(t2?.error?.(e2)) ?? R(r2.customError?.(e2)) ?? R(r2.localeError?.(e2)) ?? "Invalid input";
        n2.message = s2;
      }
      return delete n2.inst, delete n2.continue, t2?.reportInput || delete n2.input, n2;
    }
    function P(e2) {
      return Array.isArray(e2) ? "array" : "string" == typeof e2 ? "string" : "unknown";
    }
    function J(...e2) {
      const [t2, r2, n2] = e2;
      return "string" == typeof t2 ? { message: t2, code: "custom", input: r2, inst: n2 } : { ...t2 };
    }
  }