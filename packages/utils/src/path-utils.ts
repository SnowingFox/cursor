// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/path-utils.js" range:1315303..1317375
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:fs/promises";
import * as __dep1 from "node:os";
import * as __dep2 from "node:path";
import * as __dep3 from "node:url";
var n = __dep0,
  o = __dep1,
  s = __dep2,
  i = __dep3;
function a(e) {
  return e.replace(/^~(?=$|\/|\\)/, (0, o.homedir)());
}
function c(e, t) {
  return void 0 !== e && ("win32" === process.platform ? (0, s.normalize)(e).toLowerCase() === (0, s.normalize)(t).toLowerCase() : e === t);
}
function l(e, t) {
  const r = a(function (e) {
    if (!e.startsWith("file://")) return e;
    try {
      return (0, i.fileURLToPath)(e);
    } catch {
      return e;
    }
  }(e));
  return t && !(0, s.isAbsolute)(r) ? (0, s.resolve)(t, r) : (0, s.resolve)(r);
}
async function u(e, t) {
  const r = l(e, t);
  let o = r;
  for (;;) try {
    const e = await (0, n.realpath)(o);
    return (0, s.resolve)(e, (0, s.relative)(o, r));
  } catch (e) {
    if ("ENOENT" !== (e instanceof Error && "code" in e ? e.code : void 0)) return null;
    const t = (0, s.dirname)(o);
    if (t === o) return r;
    o = t;
  }
}
function d({
  basePath: e,
  targetPath: t
}) {
  const r = (0, s.resolve)(e),
    n = (0, s.resolve)(e, t);
  return r === (0, s.parse)(r).root ? (0, s.parse)(n).root === r && (n === r || n.length > r.length) : n === r || n.startsWith(r + s.sep);
}
function h(e, t) {
  for (const r of t) if (d({
    basePath: r,
    targetPath: e
  })) return !0;
  return !1;
}
function p(e, t) {
  const r = "win32" === process.platform || "darwin" === process.platform,
    n = r ? e.toLowerCase() : e,
    o = r ? t.toLowerCase() : t;
  if (n === o) return !0;
  const i = o.endsWith(s.sep) ? o : o + s.sep;
  return n.startsWith(i);
}
function f(e) {
  return e.replace(/\\/g, "/");
}
const m = "You cannot search other worktrees for this repository, stay within your workspace paths.";
function g(e) {
  const {
    targetPath: t,
    workspacePaths: r,
    mainWorktreePath: n
  } = e;
  if (void 0 === t) return !1;
  if (0 === r.length) return !1;
  if (!r.every(e => function (e) {
    return f(e).includes(".cursor/worktrees");
  }(e))) return !1;
  if (h(t, r)) return !1;
  const o = (0, s.isAbsolute)(t) ? [(0, s.resolve)(t)] : r.map(e => (0, s.resolve)(e, t)),
    i = r.map(e => function (e) {
      const t = f(e),
        r = t.indexOf("/.cursor/worktrees/");
      if (-1 === r) return;
      const n = t.slice(r + 19).split("/");
      if (n.length < 2) return;
      const o = n[0] ?? "";
      return 0 !== o.length ? t.slice(0, r + 19 + o.length) : void 0;
    }(e)).filter(e => void 0 !== e);
  return !!(i.length > 0 && o.some(e => h(e, i))) || !(void 0 === n || !o.some(e => h(e, [n])));
}
export { p as BJ, u as DN, m as PS, d as ZU, g as fl, a as jl, l as o1, f as oL, c as yn };
