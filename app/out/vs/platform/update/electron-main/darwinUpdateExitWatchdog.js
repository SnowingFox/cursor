/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d3f7f308-d4ad-5772-bbca-5a27d6ef4f0b");
  } catch (e2) {
  }
})();
import { execFileSync as o } from "child_process";
import { mkdirSync as u, renameSync as p, writeFileSync as f } from "fs";
import { basename as m, dirname as l } from "path";
var [d, S, i, r, g] = process.argv.slice(2), t = Number(d), a = Number(S), h = g === "1", P = Date.now(), M = 1, y = 10, E = 3e3;
function v() {
  return Number.isInteger(t) && t > 0 && Number.isFinite(a) && a >= 0 && typeof i == "string" && i.length > 0 && typeof r == "string" && r.length > 0;
}
function b() {
  try {
    process.kill(t, 0);
  } catch (e) {
    if (!A(e)) return { matches: false };
  }
  try {
    const e = o("/bin/ps", ["-ww", "-p", String(t), "-o", "command="], { encoding: "utf8" }).trim();
    return { matches: k(e), actualCommand: e };
  } catch {
    return { matches: false };
  }
}
function A(e) {
  return e instanceof Error && "code" in e && e.code === "EPERM";
}
function k(e) {
  if (e === i || e.startsWith(`${i} `)) return true;
  const n = m(i);
  return e.includes(`/Contents/MacOS/${n} `) || e.endsWith(`/Contents/MacOS/${n}`);
}
function I() {
  try {
    u(l(r), { recursive: true });
    const e = `${r}.${t}.${Date.now()}.sample.txt`;
    return o("/usr/bin/sample", [String(t), String(M), String(y), "-file", e], { stdio: "ignore", timeout: E }), e;
  } catch {
    return;
  }
}
function N(e, n, s) {
  try {
    u(l(r), { recursive: true });
    const c = `${r}.${process.pid}.tmp`;
    f(c, JSON.stringify({ schemaVersion: 1, createdAt: (/* @__PURE__ */ new Date()).toISOString(), parentPid: t, timeoutMs: a, elapsedMs: Date.now() - P, expectedCommand: m(i), actualCommand: e, samplePath: n, sigkillSent: s }) + `
`), p(c, r);
  } catch {
  }
}
function w() {
  try {
    return process.kill(t, "SIGKILL"), true;
  } catch {
    return false;
  }
}
function $() {
  if (!v()) return;
  const e = b();
  if (!e.matches) return;
  const n = I();
  let s = false;
  h && (s = w()), N(e.actualCommand, n, s);
}
setTimeout($, a);
