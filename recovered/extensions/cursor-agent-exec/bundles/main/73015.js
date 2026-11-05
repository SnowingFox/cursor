// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 73015 range:6372668..6375189
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73015: (e, t, r) => {
    "use strict";
    r.d(t, { D9: () => d });
    var n = r(73024);
    function s(e2) {
      if (!("linux" !== process.platform || void 0 === e2 || e2 <= 0)) try {
        (0, n.writeFileSync)(`/proc/${e2}/oom_score_adj`, "0");
      } catch {
      }
    }
    var o = r(87199);
    const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a = Object.freeze({ kind: "direct" });
    function c({ workloadCgroupDir: e2, hopCwd: t2 }) {
      const r2 = `echo $$ 2>/dev/null > '${e2}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
      return void 0 !== t2 ? r2 + o.N6 : `${r2}exec "$0" "$@"`;
    }
    function l(e2) {
      try {
        return !!(0, n.statSync)(e2).isDirectory() && ((0, n.accessSync)(`${e2}/cgroup.procs`, n.constants.W_OK), true);
      } catch {
        return false;
      }
    }
    const u = (function(e2, t2, r2 = l) {
      return "linux" === e2 && void 0 !== t2 && i.test(t2) && !t2.includes("..") && r2(t2) ? Object.freeze({ kind: "armed", workloadCgroupDir: t2, executable: "/bin/sh", argumentPrefix: Object.freeze(["-c", c({ workloadCgroupDir: t2 })]) }) : a;
    })(process.platform, process.env.CURSOR_WORKLOAD_CGROUP);
    const d = /* @__PURE__ */ (function(e2, t2 = s) {
      return function(r2, n2, s2, ...i2) {
        const a2 = i2[0], l2 = (0, o.qr)() && (null !== (u2 = a2) && "object" == typeof u2 && !Array.isArray(u2)) ? (0, o.mM)(n2, s2, a2) : void 0;
        var u2;
        let d2, p = n2, m = [...s2], h = i2;
        true === l2?.hopped && void 0 !== l2.hopCwd ? (h = (function(e3, t3) {
          return [t3, ...e3.slice(1)];
        })(i2, l2.options), "armed" === e2.kind ? (p = "/bin/sh", m = ["-c", c({ workloadCgroupDir: e2.workloadCgroupDir, hopCwd: l2.hopCwd }), o.Gw, l2.hopCwd, n2, ...s2]) : (p = l2.command, m = l2.args)) : "armed" === e2.kind && (p = e2.executable, m = [...e2.argumentPrefix, n2, ...s2]);
        try {
          d2 = r2(p, m, ...h);
        } catch (e3) {
          throw true === l2?.hopped && void 0 !== l2.hopCwd && (0, o.KX)(e3, l2.hopCwd), e3;
        }
        return (function(e3, t3) {
          "object" == typeof e3 && null !== e3 && "pid" in e3 && "number" == typeof e3.pid ? t3(e3.pid) : "object" == typeof e3 && null !== e3 && "child" in e3 && "object" == typeof e3.child && null !== e3.child && "pid" in e3.child && "number" == typeof e3.child.pid && t3(e3.child.pid);
        })(d2, t2), true === l2?.hopped && void 0 !== l2.hopCwd ? (0, o.wr)(d2, l2.hopCwd) : d2;
      };
    })(u);
  }