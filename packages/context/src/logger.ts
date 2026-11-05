// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../context/dist/logger.js" range:374085..380212
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "./core";
var n = __dep0;
function s(t) {
  return "object" == typeof t && null !== t && "getPath" in t && "function" == typeof t.getPath;
}
function i(t) {
  return "object" == typeof t && null !== t && ("message" in t || "stack" in t || "name" in t || "cause" in t);
}
function o(t, r, e, n, s, c) {
  const l = function (t, r, e, n) {
    if (!r.inlineSerializer) return t;
    try {
      const s = r.inlineSerializer(t, {
        path: e,
        depth: n
      });
      return void 0 === s ? t : s;
    } catch {
      return t;
    }
  }(t, r, c, n);
  if (function (t) {
    return "object" == typeof t && null !== t && "kind" in t && "summary" === t.kind && "summary" in t && "string" == typeof t.summary;
  }(l)) return e.dim(`<${l.summary}>`);
  if (null === (t = l)) return e.gray("null");
  if (void 0 === t) return e.gray("undefined");
  if ("string" == typeof t) {
    const n = function (t, r) {
      return t.length <= r ? t : `${t.slice(0, r)}...`;
    }(t, r.maxStringLength);
    return e.green(JSON.stringify(n));
  }
  if ("number" == typeof t) return e.yellow(String(t));
  if ("boolean" == typeof t) return e.magenta(String(t));
  if ("bigint" == typeof t) return e.yellow(`${t}n`);
  if ("symbol" == typeof t) return e.cyan(t.toString());
  if ("function" == typeof t) {
    const r = t.name ? ` ${t.name}` : "";
    return e.dim(`[Function${r}]`);
  }
  if (t instanceof Date) {
    const r = Number.isNaN(t.getTime()) ? "Invalid Date" : t.toISOString();
    return e.green(r);
  }
  if (t instanceof RegExp) return e.cyan(t.toString());
  if (i(t)) return a(t, r, e, n, s, c);
  if (Array.isArray(t)) return u(t, r, e, n, s, c);
  if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return e.dim(`ArrayBuffer(${t.byteLength})`);
  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(t)) {
    const r = t,
      n = r.constructor?.name ?? "TypedArray";
    return e.dim(`${n}(${r.byteLength})`);
  }
  return t instanceof Map ? function (t, r, e, n, s, i) {
    if (n >= r.maxDepth) return e.dim(`Map(${t.size})`);
    if (s.has(t)) return e.dim("[Circular]");
    s.add(t);
    const a = Array.from(t.entries()),
      u = Math.min(a.length, r.maxEntries),
      c = a.slice(0, u).map(([t, a]) => {
        const u = o(t, r, e, n + 1, s, i.concat("<key>")),
          c = o(a, r, e, n + 1, s, i.concat(String(t)));
        return `${u} ${e.dim("=>")} ${c}`;
      });
    a.length > u && c.push(e.dim(`... ${a.length - u} more`));
    const l = e.dim(", "),
      m = `${e.dim("Map{")}${c.join(l)}${e.dim("}")}`;
    return s.delete(t), m;
  }(t, r, e, n, s, c) : t instanceof Set ? u(Array.from(t.values()), r, e, n, s, c) : "object" == typeof t ? function (t, r, e, n, s, i) {
    if (n >= r.maxDepth) {
      const r = t?.constructor?.name ?? "Object";
      return e.dim(`[${r}]`);
    }
    if (s.has(t)) return e.dim("[Circular]");
    s.add(t);
    const a = Object.entries(t);
    if (0 === a.length) {
      const r = e.dim("{}");
      return s.delete(t), r;
    }
    const u = Math.min(a.length, r.maxEntries),
      c = a.slice(0, u).map(([t, a]) => {
        const u = o(a, r, e, n + 1, s, i.concat(t));
        return `${e.cyan(t)}: ${u}`;
      });
    a.length > u && c.push(e.dim(`... ${a.length - u} more`));
    const l = e.dim(", "),
      m = `${e.dim("{")}${c.join(l)}${e.dim("}")}`;
    return s.delete(t), m;
  }(t, r, e, n, s, c) : e.dim(`[${typeof t}]`);
}
function a(t, r, e, n, s, i) {
  if (s.has(t)) return e.dim("[Circular]");
  s.add(t);
  const a = "string" == typeof t.name ? t.name : "Error",
    u = "string" == typeof t.message ? t.message : "",
    c = u ? `${a}: ${u}` : a;
  let l = e.red(c);
  if ("cause" in t && void 0 !== t.cause) {
    const a = o(t.cause, r, e, n + 1, s, i.concat("cause"));
    l = `${l} ${e.dim("cause=")}${a}`;
  }
  return s.delete(t), l;
}
function u(t, r, e, n, s, i) {
  if (n >= r.maxDepth) return e.dim(`[Array(${t.length})]`);
  if (s.has(t)) return e.dim("[Circular]");
  if (s.add(t), 0 === t.length) {
    const r = e.dim("[]");
    return s.delete(t), r;
  }
  const a = Math.min(t.length, r.maxArrayLength),
    u = t.slice(0, a).map((t, a) => o(t, r, e, n + 1, s, i.concat(a)));
  t.length > a && u.push(e.dim(`... ${t.length - a} more`));
  const c = e.dim(", "),
    l = `${e.dim("[")}${u.join(c)}${e.dim("]")}`;
  return s.delete(t), l;
}
let c = function (t = {}) {
  const r = function (t) {
      return {
        indent: " ".repeat(t.indent ?? 2),
        maxDepth: t.maxDepth ?? 6,
        maxEntries: t.maxEntries ?? 50,
        maxArrayLength: t.maxArrayLength ?? 40,
        maxStringLength: t.maxStringLength ?? 200,
        includeTimestamp: t.includeTimestamp ?? !0,
        includeContextPath: t.includeContextPath ?? !0,
        inlineSerializer: t.inlineSerializer
      };
    }(t),
    e = function (t) {
      const r = r => e => t ? `[${r.join(";")}m${e}[0m` : e,
        e = r([2]),
        n = r([90]),
        s = r([31]),
        i = r([32]),
        o = r([33]),
        a = r([34]),
        u = r([35]),
        c = r([36]),
        l = r([1]),
        m = r([1, 31]);
      return {
        dim: e,
        gray: n,
        red: s,
        green: i,
        yellow: o,
        blue: a,
        magenta: u,
        cyan: c,
        bold: l,
        level: (t, r) => {
          switch (t) {
            case "debug":
              return u(r);
            case "info":
              return a(r);
            case "warn":
              return o(r);
            case "error":
              return m(r);
            default:
              return t;
          }
        }
      };
    }(function (t) {
      if ("boolean" == typeof t) return t;
      if ("undefined" == typeof process) return !1;
      const r = process.env ?? {};
      if ("NO_COLOR" in r) return !1;
      if ("dumb" === r.TERM) return !1;
      const e = r.FORCE_COLOR;
      return "1" === e || "true" === e || "0" !== e && (process.stdout?.isTTY ?? !1);
    }(t.useColors)),
    n = t.console ?? console;
  return {
    log: (t, u) => {
      const c = [];
      r.includeTimestamp && c.push(e.dim(u.timestamp.toISOString().slice(11, 23)));
      const l = u.level.toUpperCase().padEnd(5);
      c.push(e.level(u.level, l));
      const m = "error" === u.level ? e.bold(u.message) : u.message;
      if (c.push(m), r.includeContextPath && s(u.context)) {
        const t = u.context.getPath();
        t.length > 0 && c.push(e.dim(`ctx=${t.join("/")}`));
      }
      const d = new WeakSet();
      if (!s(u.context) && u.context && Object.keys(u.context).length > 0) {
        const t = o(u.context, r, e, 0, d, ["context"]);
        c.push(`${e.dim("context=")}${t}`);
      }
      if (u.metadata && Object.keys(u.metadata).length > 0) {
        const t = o(u.metadata, r, e, 0, d, ["metadata"]);
        c.push(`${e.dim("meta=")}${t}`);
      }
      const p = [c.join(" ")];
      if (void 0 !== u.error) {
        const t = i(u.error) ? a(u.error, r, e, 0, d, ["error"]) : o(u.error, r, e, 0, d, ["error"]);
        if (p[0] = `${p[0]} ${e.dim("error=")}${t}`, i(u.error) && "string" == typeof u.error.stack) {
          const t = u.error.stack.split("\n").slice(1);
          for (const n of t) {
            const t = n.trim();
            t && p.push(`${r.indent}${e.dim(t)}`);
          }
        }
      }
      const f = p.join("\n");
      switch (u.level) {
        case "debug":
        case "info":
          n.log(f);
          break;
        case "warn":
          n.warn(f);
          break;
        case "error":
          n.error(f);
          break;
        default:
          {
            const t = u.level;
            throw new Error(`Unhandled log level: ${String(t)}`);
          }
      }
    }
  };
}();
const l = {
    log: (t, r) => c.log(t, r)
  },
  m = (0, n.cF)(Symbol("loggerBackend"), l);
function d(t) {
  function r(r, e) {
    const n = new Date(),
      s = function (t) {
        return t.get(m);
      }(r);
    s.log(r, {
      ...e,
      timestamp: n,
      logger: t
    });
  }
  return {
    debug: (t, e, n) => {
      r(t, {
        level: "debug",
        message: e,
        context: t,
        metadata: n
      });
    },
    info: (t, e, n) => {
      r(t, {
        level: "info",
        message: e,
        context: t,
        metadata: n
      });
    },
    warn: (t, e, n) => {
      r(t, {
        level: "warn",
        message: e,
        context: t,
        metadata: n
      });
    },
    error: (t, e, n, s) => {
      r(t, {
        level: "error",
        message: e,
        context: t,
        error: n,
        metadata: s
      });
    }
  };
}
export { m as _O, d as h };
