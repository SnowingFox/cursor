/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f90dddd6-f871-558b-abec-612758bf0edb");
  } catch (e2) {
  }
})();
function _(e) {
  const r = [];
  typeof e == "number" && r.push("code/timeOrigin", e);
  function n(o, t) {
    r.push(o, t?.startTime ?? Date.now());
  }
  function c() {
    const o = [];
    for (let t = 0; t < r.length; t += 2) o.push({ name: r[t], startTime: r[t + 1] });
    return o;
  }
  function i(o) {
    for (let t = r.length - 2; t >= 0; t -= 2) r[t] === o && r.splice(t, 2);
  }
  return { mark: n, getMarks: c, clearMarks: i };
}
function M() {
  if (typeof performance == "object" && typeof performance.mark == "function" && !performance.nodeTiming) {
    if (typeof performance.timeOrigin != "number" && !performance.timing) return _();
    {
      const e = /* @__PURE__ */ new Map();
      return { mark(r, n) {
        if (!e.has(r)) {
          const [c] = performance.getEntriesByName(r, "mark");
          c && e.set(r, c.startTime);
        }
        e.has(r) && performance.clearMarks(r), performance.mark(r, n);
      }, clearMarks(r) {
        e.delete(r), performance.clearMarks(r);
      }, getMarks() {
        let r = performance.timeOrigin;
        typeof r != "number" && (r = performance.timing.navigationStart || performance.timing.redirectStart || performance.timing.fetchStart);
        const n = [];
        for (const [i, o] of e) n.push({ name: i, startTime: o });
        for (const i of performance.getEntriesByType("mark")) n.push({ name: i.name, startTime: i.startTime });
        n.sort((i, o) => i.startTime - o.startTime);
        const c = [{ name: "code/timeOrigin", startTime: Math.round(r) }];
        for (const i of n) c.push({ name: i.name, startTime: Math.round(r + i.startTime) });
        return c;
      } };
    }
  } else if (typeof process == "object") {
    const e = performance?.timeOrigin;
    return _(e);
  } else return console.trace("perf-util loaded in UNKNOWN environment"), _();
}
function y(e) {
  return e.MonacoPerformanceMarks || (e.MonacoPerformanceMarks = M()), e.MonacoPerformanceMarks;
}
var O = y(globalThis), S = O.mark, Z = O.getMarks, ee = O.clearMarks;
import * as m from "path";
import "fs";
import { fileURLToPath as I } from "url";
import { createRequire as L } from "node:module";
var D = L(import.meta.url), k = m.dirname(I(import.meta.url)), A = process.platform === "win32";
if (Error.stackTraceLimit = 100, process.platform === "linux" && (Buffer.poolSize = 8 * 1024), !process.env.VSCODE_HANDLES_SIGPIPE) {
  let e = false;
  process.on("SIGPIPE", () => {
    e || (e = true, console.error(new Error("Unexpected SIGPIPE")));
  });
}
function V() {
  try {
    typeof process.env.VSCODE_CWD != "string" && (process.env.VSCODE_CWD = process.cwd()), process.platform === "win32" && process.chdir(m.dirname(process.execPath));
  } catch (e) {
    console.error(e);
  }
}
V();
function R(e) {
  if (!process.env.VSCODE_DEV) return;
  D("node:module").register("./bootstrap-import.js", { parentURL: import.meta.url, data: { injectPath: e, dirname: k } });
}
function U() {
  if (typeof process?.versions?.electron == "string") return;
  const e = D("module"), r = e.globalPaths, n = e._resolveLookupPaths;
  e._resolveLookupPaths = function(i, o) {
    const t = n(i, o);
    if (Array.isArray(t)) {
      let f = 0;
      for (; f < t.length && t[t.length - 1 - f] === r[r.length - 1 - f]; ) f++;
      return t.slice(0, t.length - f);
    }
    return t;
  };
  const c = e._nodeModulePaths;
  e._nodeModulePaths = function(i) {
    let o = c(i);
    if (!A) return o;
    const t = (f) => f.length >= 3 && f.endsWith(":\\");
    if (t(i) || (o = o.filter((f) => !t(m.dirname(f)))), process.env.HOMEDRIVE && process.env.HOMEPATH) {
      const f = m.dirname(m.join(process.env.HOMEDRIVE, process.env.HOMEPATH)), s = (l) => m.relative(l, f).length === 0;
      s(i) || (o = o.filter((l) => !s(m.dirname(l))));
    }
    return o;
  };
}
import * as b from "path";
import * as h from "fs";
import { fileURLToPath as G } from "url";
import { createRequire as w, register as x } from "node:module";
import { createRequire as F } from "node:module";
var N = F(import.meta.url), E = { BUILD_INSERT_PRODUCT_CONFIGURATION: "BUILD_INSERT_PRODUCT_CONFIGURATION" };
E.BUILD_INSERT_PRODUCT_CONFIGURATION && (E = N("../product.json"));
var T = { "name": "Cursor", "version": "3.24.18", "distro": "d5c0e77a0214208f36b56d42e8e787de88d02ea4", "author": { "name": "Anysphere, Inc." }, "packageManager": "pnpm@10.33.4", "pnpm": { "supportedArchitectures": { "os": ["current"], "cpu": ["current", "x64", "arm64"], "libc": ["current", "glibc", "musl"] } }, "main": "./out/main.js", "type": "module", "private": true, "repository": { "type": "git", "url": "https://github.com/microsoft/vscode.git" }, "bugs": { "url": "https://github.com/microsoft/vscode/issues" } };
T.BUILD_INSERT_PACKAGE_CONFIGURATION && (T = N("../package.json"));
var j = E, H = T;
if (!("commit" in E) || E.commit === void 0) try {
  const { execSync: e } = N("child_process"), r = process.cwd(), n = e("git rev-parse HEAD", { cwd: r, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  n && (E.devCommit = n);
} catch {
}
var B = w(import.meta.url), $ = b.dirname(G(import.meta.url));
if ((process.env.ELECTRON_RUN_AS_NODE || process.versions.electron) && x(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`, import.meta.url), globalThis._VSCODE_PRODUCT_JSON = { ...j }, process.env.VSCODE_DEV) try {
  const e = B("../product.overrides.json");
  globalThis._VSCODE_PRODUCT_JSON = Object.assign(globalThis._VSCODE_PRODUCT_JSON, e);
} catch {
}
globalThis._VSCODE_PACKAGE_JSON = { ...H }, globalThis._VSCODE_FILE_ROOT = $;
var P = void 0;
function J() {
  return P || (P = q()), P;
}
async function q() {
  S("code/willLoadNls");
  let e, r;
  if (process.env.VSCODE_NLS_CONFIG) try {
    e = JSON.parse(process.env.VSCODE_NLS_CONFIG), e?.languagePack?.messagesFile ? r = e.languagePack.messagesFile : e?.defaultMessagesFile && (r = e.defaultMessagesFile), globalThis._VSCODE_NLS_LANGUAGE = e?.resolvedLanguage;
  } catch (n) {
    console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${n}`);
  }
  if (!(process.env.VSCODE_DEV || !r)) {
    try {
      globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await h.promises.readFile(r)).toString());
    } catch (n) {
      if (console.error(`Error reading NLS messages file ${r}: ${n}`), e?.languagePack?.corruptMarkerFile) try {
        await h.promises.writeFile(e.languagePack.corruptMarkerFile, "corrupted");
      } catch (c) {
        console.error(`Error writing corrupted NLS marker file: ${c}`);
      }
      if (e?.defaultMessagesFile && e.defaultMessagesFile !== r) try {
        globalThis._VSCODE_NLS_MESSAGES = JSON.parse((await h.promises.readFile(e.defaultMessagesFile)).toString());
      } catch (c) {
        console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${c}`);
      }
    }
    return S("code/didLoadNls"), e;
  }
}
async function K() {
  await J();
}
import W from "path";
S("code/fork/start"), process.platform === "darwin" && process.env.VSCODE_PROCESS_TITLE && (process.title = `${W.basename(process.title)}: ${process.env.VSCODE_PROCESS_TITLE}`);
function X() {
  function n(s) {
    const l = [], d = [];
    if (s.length) for (let u = 0; u < s.length; u++) {
      let a = s[u];
      if (typeof a > "u") a = "undefined";
      else if (a instanceof Error) {
        const p = a;
        p.stack ? a = p.stack : a = p.toString();
      }
      d.push(a);
    }
    try {
      const u = JSON.stringify(d, function(a, p) {
        if (i(p) || Array.isArray(p)) {
          if (l.indexOf(p) !== -1) return "[Circular]";
          l.push(p);
        }
        return p;
      });
      return u.length > 1e5 ? "Output omitted for a large object that exceeds the limits" : u;
    } catch (u) {
      return `Output omitted for an object that cannot be inspected ('${u.toString()}')`;
    }
  }
  function c(s) {
    try {
      process.send && process.send(s);
    } catch {
    }
  }
  function i(s) {
    return typeof s == "object" && s !== null && !Array.isArray(s) && !(s instanceof RegExp) && !(s instanceof Date);
  }
  function o(s, l) {
    c({ type: "__$console", severity: s, arguments: l });
  }
  function t(s, l) {
    Object.defineProperty(console, s, { set: () => {
    }, get: () => function() {
      o(l, n(arguments));
    } });
  }
  function f(s, l) {
    const d = process[s], u = d.write;
    let a = "";
    Object.defineProperty(d, "write", { set: () => {
    }, get: () => (p, C, v) => {
      a += p.toString(C);
      const g = a.length > 1048576 ? a.length : a.lastIndexOf(`
`);
      g !== -1 && (console[l](a.slice(0, g)), a = a.slice(g + 1)), u.call(d, p, C, v);
    } });
  }
  process.env.VSCODE_VERBOSE_LOGGING === "true" ? (t("info", "log"), t("log", "log"), t("warn", "warn"), t("error", "error")) : (console.log = function() {
  }, console.warn = function() {
  }, console.info = function() {
  }, t("error", "error")), f("stderr", "error"), f("stdout", "log");
}
function Y() {
  process.on("uncaughtException", function(e) {
    console.error("Uncaught Exception: ", e);
  }), process.on("unhandledRejection", function(e) {
    console.error("Unhandled Promise Rejection: ", e);
  });
}
function z() {
  const e = Number(process.env.VSCODE_PARENT_PID);
  typeof e == "number" && !isNaN(e) && setInterval(function() {
    try {
      process.kill(e, 0);
    } catch {
      process.exit();
    }
  }, 5e3);
}
function Q() {
  const e = process.env.VSCODE_CRASH_REPORTER_PROCESS_TYPE;
  if (e) try {
    process.crashReporter && typeof process.crashReporter.addExtraParameter == "function" && (process.crashReporter.addExtraParameter("processType", e), process.once("beforeExit", () => {
      try {
        process.crashReporter.addExtraParameter("exiting", "true");
      } catch {
      }
    }), process.once("exit", () => {
      try {
        process.crashReporter.addExtraParameter("exiting", "true");
      } catch {
      }
    }));
  } catch (r) {
    console.error(r);
  }
}
Q(), U(), process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH ? R(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH) : process.env.VSCODE_DEV && R(), process.send && process.env.VSCODE_PIPE_LOGGING === "true" && X(), process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS || Y(), process.env.VSCODE_PARENT_PID && z(), await K(), await import([`./${process.env.VSCODE_ESM_ENTRYPOINT}.js`].join("/"));
