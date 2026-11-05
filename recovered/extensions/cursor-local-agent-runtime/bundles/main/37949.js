// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 37949 range:1170039..1179665
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37949: (e, t, r) => {
    "use strict";
    r.d(t, { _O: () => d, h: () => p, o1: () => m });
    var n = r(33002);
    function o(e2) {
      return "object" == typeof e2 && null !== e2 && "getPath" in e2 && "function" == typeof e2.getPath;
    }
    function s(e2) {
      return "object" == typeof e2 && null !== e2 && ("message" in e2 || "stack" in e2 || "name" in e2 || "cause" in e2);
    }
    function i(e2, t2, r2, n2, o2, c2) {
      const u2 = (function(e3, t3, r3, n3) {
        if (!t3.inlineSerializer) return e3;
        try {
          const o3 = t3.inlineSerializer(e3, { path: r3, depth: n3 });
          return void 0 === o3 ? e3 : o3;
        } catch {
          return e3;
        }
      })(e2, t2, c2, n2);
      if ((function(e3) {
        return "object" == typeof e3 && null !== e3 && "summary" === e3.kind && "string" == typeof e3.summary;
      })(u2)) return r2.dim(`<${u2.summary}>`);
      if (null === (e2 = u2)) return r2.gray("null");
      if (void 0 === e2) return r2.gray("undefined");
      if ("string" == typeof e2) {
        const n3 = (function(e3, t3) {
          return e3.length <= t3 ? e3 : `${e3.slice(0, t3)}...`;
        })(e2, t2.maxStringLength);
        return r2.green(JSON.stringify(n3));
      }
      if ("number" == typeof e2) return r2.yellow(String(e2));
      if ("boolean" == typeof e2) return r2.magenta(String(e2));
      if ("bigint" == typeof e2) return r2.yellow(`${e2}n`);
      if ("symbol" == typeof e2) return r2.cyan(e2.toString());
      if ("function" == typeof e2) {
        const t3 = e2.name ? ` ${e2.name}` : "";
        return r2.dim(`[Function${t3}]`);
      }
      if (e2 instanceof Date) {
        const t3 = Number.isNaN(e2.getTime()) ? "Invalid Date" : e2.toISOString();
        return r2.green(t3);
      }
      if (e2 instanceof RegExp) return r2.cyan(e2.toString());
      if (s(e2)) return a(e2, t2, r2, n2, o2, c2);
      if (Array.isArray(e2)) return l(e2, t2, r2, n2, o2, c2);
      if ("undefined" != typeof ArrayBuffer && e2 instanceof ArrayBuffer) return r2.dim(`ArrayBuffer(${e2.byteLength})`);
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e2)) {
        const t3 = e2, n3 = t3.constructor?.name ?? "TypedArray";
        return r2.dim(`${n3}(${t3.byteLength})`);
      }
      return e2 instanceof Map ? (function(e3, t3, r3, n3, o3, s2) {
        if (n3 >= t3.maxDepth) return r3.dim(`Map(${e3.size})`);
        if (o3.has(e3)) return r3.dim("[Circular]");
        o3.add(e3);
        const a2 = Array.from(e3.entries()), l2 = Math.min(a2.length, t3.maxEntries), c3 = a2.slice(0, l2).map(([e4, a3]) => {
          const l3 = i(e4, t3, r3, n3 + 1, o3, s2.concat("<key>")), c4 = i(a3, t3, r3, n3 + 1, o3, s2.concat(String(e4)));
          return `${l3} ${r3.dim("=>")} ${c4}`;
        });
        a2.length > l2 && c3.push(r3.dim(`... ${a2.length - l2} more`));
        const u3 = r3.dim(", "), d2 = `${r3.dim("Map{")}${c3.join(u3)}${r3.dim("}")}`;
        return o3.delete(e3), d2;
      })(e2, t2, r2, n2, o2, c2) : e2 instanceof Set ? l(Array.from(e2.values()), t2, r2, n2, o2, c2) : (function(e3, t3, r3, n3, o3, s2) {
        if (n3 >= t3.maxDepth) {
          const t4 = e3?.constructor?.name ?? "Object";
          return r3.dim(`[${t4}]`);
        }
        if (o3.has(e3)) return r3.dim("[Circular]");
        o3.add(e3);
        const a2 = Object.entries(e3);
        if (0 === a2.length) {
          const t4 = r3.dim("{}");
          return o3.delete(e3), t4;
        }
        const l2 = Math.min(a2.length, t3.maxEntries), c3 = a2.slice(0, l2).map(([e4, a3]) => {
          const l3 = i(a3, t3, r3, n3 + 1, o3, s2.concat(e4));
          return `${r3.cyan(e4)}: ${l3}`;
        });
        a2.length > l2 && c3.push(r3.dim(`... ${a2.length - l2} more`));
        const u3 = r3.dim(", "), d2 = `${r3.dim("{")}${c3.join(u3)}${r3.dim("}")}`;
        return o3.delete(e3), d2;
      })(e2, t2, r2, n2, o2, c2);
    }
    function a(e2, t2, r2, n2, o2, s2) {
      const a2 = e2;
      if (o2.has(a2)) return r2.dim("[Circular]");
      o2.add(a2);
      const l2 = "string" == typeof e2.name ? e2.name : "Error", c2 = "string" == typeof e2.message ? e2.message : "", u2 = c2 ? `${l2}: ${c2}` : l2;
      let d2 = r2.red(u2);
      if ("cause" in e2 && void 0 !== e2.cause) {
        const a3 = i(e2.cause, t2, r2, n2 + 1, o2, s2.concat("cause"));
        d2 = `${d2} ${r2.dim("cause=")}${a3}`;
      }
      return o2.delete(a2), d2;
    }
    function l(e2, t2, r2, n2, o2, s2) {
      if (n2 >= t2.maxDepth) return r2.dim(`[Array(${e2.length})]`);
      if (o2.has(e2)) return r2.dim("[Circular]");
      if (o2.add(e2), 0 === e2.length) {
        const t3 = r2.dim("[]");
        return o2.delete(e2), t3;
      }
      const a2 = Math.min(e2.length, t2.maxArrayLength), l2 = e2.slice(0, a2).map((e3, a3) => i(e3, t2, r2, n2 + 1, o2, s2.concat(a3)));
      e2.length > a2 && l2.push(r2.dim(`... ${e2.length - a2} more`));
      const c2 = r2.dim(", "), u2 = `${r2.dim("[")}${l2.join(c2)}${r2.dim("]")}`;
      return o2.delete(e2), u2;
    }
    let c = (function(e2 = {}) {
      const t2 = (function(e3) {
        return { indent: " ".repeat(e3.indent ?? 2), maxDepth: e3.maxDepth ?? 6, maxEntries: e3.maxEntries ?? 50, maxArrayLength: e3.maxArrayLength ?? 40, maxStringLength: e3.maxStringLength ?? 200, includeTimestamp: e3.includeTimestamp ?? true, includeContextPath: e3.includeContextPath ?? true, inlineSerializer: e3.inlineSerializer };
      })(e2), r2 = (function(e3) {
        const t3 = (t4) => (r4) => e3 ? `\x1B[${t4.join(";")}m${r4}\x1B[0m` : r4, r3 = t3([2]), n3 = t3([90]), o2 = t3([31]), s2 = t3([32]), i2 = t3([33]), a2 = t3([34]), l2 = t3([35]), c2 = t3([36]), u2 = t3([1]), d2 = t3([1, 31]);
        return { dim: r3, gray: n3, red: o2, green: s2, yellow: i2, blue: a2, magenta: l2, cyan: c2, bold: u2, level: (e4, t4) => {
          switch (e4) {
            case "debug":
              return l2(t4);
            case "info":
              return a2(t4);
            case "warn":
              return i2(t4);
            case "error":
              return d2(t4);
            default:
              return e4;
          }
        } };
      })((function(e3) {
        if ("boolean" == typeof e3) return e3;
        if ("undefined" == typeof process) return false;
        const t3 = process.env ?? {};
        if ("NO_COLOR" in t3) return false;
        if ("dumb" === t3.TERM) return false;
        const r3 = t3.FORCE_COLOR;
        return "1" === r3 || "true" === r3 || "0" !== r3 && Boolean(process.stdout?.isTTY);
      })(e2.useColors)), n2 = e2.console ?? console;
      return { log: (e3, l2) => {
        const c2 = [];
        t2.includeTimestamp && c2.push(r2.dim(l2.timestamp.toISOString().slice(11, 23)));
        const u2 = l2.level.toUpperCase().padEnd(5);
        c2.push(r2.level(l2.level, u2));
        const d2 = "error" === l2.level ? r2.bold(l2.message) : l2.message;
        if (c2.push(d2), t2.includeContextPath && o(l2.context)) {
          const e4 = l2.context.getPath();
          e4.length > 0 && c2.push(r2.dim(`ctx=${e4.join("/")}`));
        }
        const p2 = /* @__PURE__ */ new WeakSet();
        if (!o(l2.context) && l2.context && Object.keys(l2.context).length > 0) {
          const e4 = i(l2.context, t2, r2, 0, p2, ["context"]);
          c2.push(`${r2.dim("context=")}${e4}`);
        }
        if (l2.metadata && Object.keys(l2.metadata).length > 0) {
          const e4 = i(l2.metadata, t2, r2, 0, p2, ["metadata"]);
          c2.push(`${r2.dim("meta=")}${e4}`);
        }
        const h2 = [c2.join(" ")];
        if (void 0 !== l2.error) {
          const e4 = s(l2.error) ? a(l2.error, t2, r2, 0, p2, ["error"]) : i(l2.error, t2, r2, 0, p2, ["error"]);
          if (h2[0] = `${h2[0]} ${r2.dim("error=")}${e4}`, s(l2.error) && "string" == typeof l2.error.stack) {
            const e5 = l2.error.stack.split("\n").slice(1);
            for (const n3 of e5) {
              const e6 = n3.trim();
              e6 && h2.push(`${t2.indent}${r2.dim(e6)}`);
            }
          }
        }
        const m2 = h2.join("\n");
        switch (l2.level) {
          case "debug":
          case "info":
            n2.log(m2);
            break;
          case "warn":
            n2.warn(m2);
            break;
          case "error":
            n2.error(m2);
            break;
          default: {
            const e4 = l2.level;
            throw new Error(`Unhandled log level: ${e4}`);
          }
        }
      } };
    })();
    const u = { log: (e2, t2) => c.log(e2, t2) };
    const d = (0, n.cF)(/* @__PURE__ */ Symbol("loggerBackend"), u);
    function p(e2) {
      function t2(t3, r2) {
        const n2 = /* @__PURE__ */ new Date(), o2 = (function(e3) {
          return e3.get(d);
        })(t3);
        o2.log(t3, { ...r2, timestamp: n2, logger: e2 });
      }
      return { debug: (e3, r2, n2) => {
        t2(e3, { level: "debug", message: r2, context: e3, metadata: n2 });
      }, info: (e3, r2, n2) => {
        t2(e3, { level: "info", message: r2, context: e3, metadata: n2 });
      }, warn: (e3, r2, n2) => {
        t2(e3, { level: "warn", message: r2, context: e3, metadata: n2 });
      }, error: (e3, r2, n2, o2) => {
        t2(e3, { level: "error", message: r2, context: e3, error: n2, metadata: o2 });
      } };
    }
    function h(e2, t2) {
      return { log: (r2, n2) => {
        e2.log(r2, { ...n2, metadata: { ...t2, ...n2.metadata } });
      } };
    }
    function m(e2, t2) {
      return e2.with(d, h(e2.get(d), { ...t2 }));
    }
  }