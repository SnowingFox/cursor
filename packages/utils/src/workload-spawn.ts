// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/workload-spawn.js" range:1323410..1325176
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:fs";
import * as __dep1 from "./safe-spawn-cwd";
var n = __dep0;
function o(e) {
  if (!("linux" !== process.platform || void 0 === e || e <= 0)) try {
    (0, n.writeFileSync)(`/proc/${e}/oom_score_adj`, "0");
  } catch {}
}
var s = __dep1;
const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/,
  a = Object.freeze({
    kind: "direct"
  });
function c({
  workloadCgroupDir: e,
  hopCwd: t
}) {
  const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
  return void 0 !== t ? r + s.N6 : `${r}exec "$0" "$@"`;
}
function l(e) {
  try {
    return !!(0, n.statSync)(e).isDirectory() && ((0, n.accessSync)(`${e}/cgroup.procs`, n.constants.W_OK), !0);
  } catch {
    return !1;
  }
}
const u = function (e, t = o) {
  return function (r, n, o, ...i) {
    const a = i[0],
      l = (0, s.qr)() && null !== (u = a) && "object" == typeof u && !Array.isArray(u) ? (0, s.mM)(n, o, a) : void 0;
    var u;
    let d,
      h = n,
      p = [...o],
      f = i;
    !0 === l?.hopped && void 0 !== l.hopCwd ? (f = function (e, t) {
      return [t, ...e.slice(1)];
    }(i, l.options), "armed" === e.kind ? (h = "/bin/sh", p = ["-c", c({
      workloadCgroupDir: e.workloadCgroupDir,
      hopCwd: l.hopCwd
    }), s.Gw, l.hopCwd, n, ...o]) : (h = l.command, p = l.args)) : "armed" === e.kind && (h = e.executable, p = [...e.argumentPrefix, n, ...o]);
    try {
      d = r(h, p, ...f);
    } catch (e) {
      throw !0 === l?.hopped && void 0 !== l.hopCwd && (0, s.KX)(e, l.hopCwd), e;
    }
    return function (e, t) {
      "object" == typeof e && null !== e && "pid" in e && "number" == typeof e.pid ? t(e.pid) : "object" == typeof e && null !== e && "child" in e && "object" == typeof e.child && null !== e.child && "pid" in e.child && "number" == typeof e.child.pid && t(e.child.pid);
    }(d, t), !0 === l?.hopped && void 0 !== l.hopCwd ? (0, s.wr)(d, l.hopCwd) : d;
  };
}(function (e, t, r = l) {
  return "linux" === e && void 0 !== t && i.test(t) && !t.includes("..") && r(t) ? Object.freeze({
    kind: "armed",
    workloadCgroupDir: t,
    executable: "/bin/sh",
    argumentPrefix: Object.freeze(["-c", c({
      workloadCgroupDir: t
    })])
  }) : a;
}(process.platform, process.env.CURSOR_WORKLOAD_CGROUP));
export { u as D9 };
