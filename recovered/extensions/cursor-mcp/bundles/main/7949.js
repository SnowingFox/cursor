// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7949 range:719772..729163
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7949: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { h: () => p });
    var n2 = r2(3002);
    function o2(e3) {
      return "object" == typeof e3 && null !== e3 && "getPath" in e3 && "function" == typeof e3.getPath;
    }
    function s2(e3) {
      return "object" == typeof e3 && null !== e3 && ("message" in e3 || "stack" in e3 || "name" in e3 || "cause" in e3);
    }
    function i2(e3, t3, r3, n3, o3, u2) {
      const l2 = (function(e4, t4, r4, n4) {
        if (!t4.inlineSerializer) return e4;
        try {
          const o4 = t4.inlineSerializer(e4, { path: r4, depth: n4 });
          return void 0 === o4 ? e4 : o4;
        } catch {
          return e4;
        }
      })(e3, t3, u2, n3);
      if ((function(e4) {
        return "object" == typeof e4 && null !== e4 && "summary" === e4.kind && "string" == typeof e4.summary;
      })(l2)) return r3.dim(`<${l2.summary}>`);
      if (null === (e3 = l2)) return r3.gray("null");
      if (void 0 === e3) return r3.gray("undefined");
      if ("string" == typeof e3) {
        const n4 = (function(e4, t4) {
          return e4.length <= t4 ? e4 : `${e4.slice(0, t4)}...`;
        })(e3, t3.maxStringLength);
        return r3.green(JSON.stringify(n4));
      }
      if ("number" == typeof e3) return r3.yellow(String(e3));
      if ("boolean" == typeof e3) return r3.magenta(String(e3));
      if ("bigint" == typeof e3) return r3.yellow(`${e3}n`);
      if ("symbol" == typeof e3) return r3.cyan(e3.toString());
      if ("function" == typeof e3) {
        const t4 = e3.name ? ` ${e3.name}` : "";
        return r3.dim(`[Function${t4}]`);
      }
      if (e3 instanceof Date) {
        const t4 = Number.isNaN(e3.getTime()) ? "Invalid Date" : e3.toISOString();
        return r3.green(t4);
      }
      if (e3 instanceof RegExp) return r3.cyan(e3.toString());
      if (s2(e3)) return a2(e3, t3, r3, n3, o3, u2);
      if (Array.isArray(e3)) return c(e3, t3, r3, n3, o3, u2);
      if ("undefined" != typeof ArrayBuffer && e3 instanceof ArrayBuffer) return r3.dim(`ArrayBuffer(${e3.byteLength})`);
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e3)) {
        const t4 = e3, n4 = t4.constructor?.name ?? "TypedArray";
        return r3.dim(`${n4}(${t4.byteLength})`);
      }
      return e3 instanceof Map ? (function(e4, t4, r4, n4, o4, s3) {
        if (n4 >= t4.maxDepth) return r4.dim(`Map(${e4.size})`);
        if (o4.has(e4)) return r4.dim("[Circular]");
        o4.add(e4);
        const a3 = Array.from(e4.entries()), c2 = Math.min(a3.length, t4.maxEntries), u3 = a3.slice(0, c2).map(([e5, a4]) => {
          const c3 = i2(e5, t4, r4, n4 + 1, o4, s3.concat("<key>")), u4 = i2(a4, t4, r4, n4 + 1, o4, s3.concat(String(e5)));
          return `${c3} ${r4.dim("=>")} ${u4}`;
        });
        a3.length > c2 && u3.push(r4.dim(`... ${a3.length - c2} more`));
        const l3 = r4.dim(", "), d2 = `${r4.dim("Map{")}${u3.join(l3)}${r4.dim("}")}`;
        return o4.delete(e4), d2;
      })(e3, t3, r3, n3, o3, u2) : e3 instanceof Set ? c(Array.from(e3.values()), t3, r3, n3, o3, u2) : (function(e4, t4, r4, n4, o4, s3) {
        if (n4 >= t4.maxDepth) {
          const t5 = e4?.constructor?.name ?? "Object";
          return r4.dim(`[${t5}]`);
        }
        if (o4.has(e4)) return r4.dim("[Circular]");
        o4.add(e4);
        const a3 = Object.entries(e4);
        if (0 === a3.length) {
          const t5 = r4.dim("{}");
          return o4.delete(e4), t5;
        }
        const c2 = Math.min(a3.length, t4.maxEntries), u3 = a3.slice(0, c2).map(([e5, a4]) => {
          const c3 = i2(a4, t4, r4, n4 + 1, o4, s3.concat(e5));
          return `${r4.cyan(e5)}: ${c3}`;
        });
        a3.length > c2 && u3.push(r4.dim(`... ${a3.length - c2} more`));
        const l3 = r4.dim(", "), d2 = `${r4.dim("{")}${u3.join(l3)}${r4.dim("}")}`;
        return o4.delete(e4), d2;
      })(e3, t3, r3, n3, o3, u2);
    }
    function a2(e3, t3, r3, n3, o3, s3) {
      const a3 = e3;
      if (o3.has(a3)) return r3.dim("[Circular]");
      o3.add(a3);
      const c2 = "string" == typeof e3.name ? e3.name : "Error", u2 = "string" == typeof e3.message ? e3.message : "", l2 = u2 ? `${c2}: ${u2}` : c2;
      let d2 = r3.red(l2);
      if ("cause" in e3 && void 0 !== e3.cause) {
        const a4 = i2(e3.cause, t3, r3, n3 + 1, o3, s3.concat("cause"));
        d2 = `${d2} ${r3.dim("cause=")}${a4}`;
      }
      return o3.delete(a3), d2;
    }
    function c(e3, t3, r3, n3, o3, s3) {
      if (n3 >= t3.maxDepth) return r3.dim(`[Array(${e3.length})]`);
      if (o3.has(e3)) return r3.dim("[Circular]");
      if (o3.add(e3), 0 === e3.length) {
        const t4 = r3.dim("[]");
        return o3.delete(e3), t4;
      }
      const a3 = Math.min(e3.length, t3.maxArrayLength), c2 = e3.slice(0, a3).map((e4, a4) => i2(e4, t3, r3, n3 + 1, o3, s3.concat(a4)));
      e3.length > a3 && c2.push(r3.dim(`... ${e3.length - a3} more`));
      const u2 = r3.dim(", "), l2 = `${r3.dim("[")}${c2.join(u2)}${r3.dim("]")}`;
      return o3.delete(e3), l2;
    }
    let u = (function(e3 = {}) {
      const t3 = (function(e4) {
        return { indent: " ".repeat(e4.indent ?? 2), maxDepth: e4.maxDepth ?? 6, maxEntries: e4.maxEntries ?? 50, maxArrayLength: e4.maxArrayLength ?? 40, maxStringLength: e4.maxStringLength ?? 200, includeTimestamp: e4.includeTimestamp ?? true, includeContextPath: e4.includeContextPath ?? true, inlineSerializer: e4.inlineSerializer };
      })(e3), r3 = (function(e4) {
        const t4 = (t5) => (r5) => e4 ? `\x1B[${t5.join(";")}m${r5}\x1B[0m` : r5, r4 = t4([2]), n4 = t4([90]), o3 = t4([31]), s3 = t4([32]), i3 = t4([33]), a3 = t4([34]), c2 = t4([35]), u2 = t4([36]), l2 = t4([1]), d2 = t4([1, 31]);
        return { dim: r4, gray: n4, red: o3, green: s3, yellow: i3, blue: a3, magenta: c2, cyan: u2, bold: l2, level: (e5, t5) => {
          switch (e5) {
            case "debug":
              return c2(t5);
            case "info":
              return a3(t5);
            case "warn":
              return i3(t5);
            case "error":
              return d2(t5);
            default:
              return e5;
          }
        } };
      })((function(e4) {
        if ("boolean" == typeof e4) return e4;
        if ("undefined" == typeof process) return false;
        const t4 = process.env ?? {};
        if ("NO_COLOR" in t4) return false;
        if ("dumb" === t4.TERM) return false;
        const r4 = t4.FORCE_COLOR;
        return "1" === r4 || "true" === r4 || "0" !== r4 && Boolean(process.stdout?.isTTY);
      })(e3.useColors)), n3 = e3.console ?? console;
      return { log: (e4, c2) => {
        const u2 = [];
        t3.includeTimestamp && u2.push(r3.dim(c2.timestamp.toISOString().slice(11, 23)));
        const l2 = c2.level.toUpperCase().padEnd(5);
        u2.push(r3.level(c2.level, l2));
        const d2 = "error" === c2.level ? r3.bold(c2.message) : c2.message;
        if (u2.push(d2), t3.includeContextPath && o2(c2.context)) {
          const e5 = c2.context.getPath();
          e5.length > 0 && u2.push(r3.dim(`ctx=${e5.join("/")}`));
        }
        const p2 = /* @__PURE__ */ new WeakSet();
        if (!o2(c2.context) && c2.context && Object.keys(c2.context).length > 0) {
          const e5 = i2(c2.context, t3, r3, 0, p2, ["context"]);
          u2.push(`${r3.dim("context=")}${e5}`);
        }
        if (c2.metadata && Object.keys(c2.metadata).length > 0) {
          const e5 = i2(c2.metadata, t3, r3, 0, p2, ["metadata"]);
          u2.push(`${r3.dim("meta=")}${e5}`);
        }
        const f = [u2.join(" ")];
        if (void 0 !== c2.error) {
          const e5 = s2(c2.error) ? a2(c2.error, t3, r3, 0, p2, ["error"]) : i2(c2.error, t3, r3, 0, p2, ["error"]);
          if (f[0] = `${f[0]} ${r3.dim("error=")}${e5}`, s2(c2.error) && "string" == typeof c2.error.stack) {
            const e6 = c2.error.stack.split("\n").slice(1);
            for (const n4 of e6) {
              const e7 = n4.trim();
              e7 && f.push(`${t3.indent}${r3.dim(e7)}`);
            }
          }
        }
        const h = f.join("\n");
        switch (c2.level) {
          case "debug":
          case "info":
            n3.log(h);
            break;
          case "warn":
            n3.warn(h);
            break;
          case "error":
            n3.error(h);
            break;
          default: {
            const e5 = c2.level;
            throw new Error(`Unhandled log level: ${e5}`);
          }
        }
      } };
    })();
    const l = { log: (e3, t3) => u.log(e3, t3) };
    const d = (0, n2.cF)(/* @__PURE__ */ Symbol("loggerBackend"), l);
    function p(e3) {
      function t3(t4, r3) {
        const n3 = /* @__PURE__ */ new Date(), o3 = (function(e4) {
          return e4.get(d);
        })(t4);
        o3.log(t4, { ...r3, timestamp: n3, logger: e3 });
      }
      return { debug: (e4, r3, n3) => {
        t3(e4, { level: "debug", message: r3, context: e4, metadata: n3 });
      }, info: (e4, r3, n3) => {
        t3(e4, { level: "info", message: r3, context: e4, metadata: n3 });
      }, warn: (e4, r3, n3) => {
        t3(e4, { level: "warn", message: r3, context: e4, metadata: n3 });
      }, error: (e4, r3, n3, o3) => {
        t3(e4, { level: "error", message: r3, context: e4, error: n3, metadata: o3 });
      } };
    }
  }