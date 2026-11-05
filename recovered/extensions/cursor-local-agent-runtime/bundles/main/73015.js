// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 73015 range:2321493..2324014
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73015: (e, t, r) => {
    "use strict";
    r.d(t, { D9: () => d });
    var n = r(73024);
    function o(e2) {
      if (!("linux" !== process.platform || void 0 === e2 || e2 <= 0)) try {
        (0, n.writeFileSync)(`/proc/${e2}/oom_score_adj`, "0");
      } catch {
      }
    }
    var s = r(87199);
    const i = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a = Object.freeze({ kind: "direct" });
    function l({ workloadCgroupDir: e2, hopCwd: t2 }) {
      const r2 = `echo $$ 2>/dev/null > '${e2}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
      return void 0 !== t2 ? r2 + s.N6 : `${r2}exec "$0" "$@"`;
    }
    function c(e2) {
      try {
        return !!(0, n.statSync)(e2).isDirectory() && ((0, n.accessSync)(`${e2}/cgroup.procs`, n.constants.W_OK), true);
      } catch {
        return false;
      }
    }
    const u = (function(e2, t2, r2 = c) {
      return "linux" === e2 && void 0 !== t2 && i.test(t2) && !t2.includes("..") && r2(t2) ? Object.freeze({ kind: "armed", workloadCgroupDir: t2, executable: "/bin/sh", argumentPrefix: Object.freeze(["-c", l({ workloadCgroupDir: t2 })]) }) : a;
    })(process.platform, process.env.CURSOR_WORKLOAD_CGROUP);
    const d = /* @__PURE__ */ (function(e2, t2 = o) {
      return function(r2, n2, o2, ...i2) {
        const a2 = i2[0], c2 = (0, s.qr)() && (null !== (u2 = a2) && "object" == typeof u2 && !Array.isArray(u2)) ? (0, s.mM)(n2, o2, a2) : void 0;
        var u2;
        let d2, p = n2, h = [...o2], m = i2;
        true === c2?.hopped && void 0 !== c2.hopCwd ? (m = (function(e3, t3) {
          return [t3, ...e3.slice(1)];
        })(i2, c2.options), "armed" === e2.kind ? (p = "/bin/sh", h = ["-c", l({ workloadCgroupDir: e2.workloadCgroupDir, hopCwd: c2.hopCwd }), s.Gw, c2.hopCwd, n2, ...o2]) : (p = c2.command, h = c2.args)) : "armed" === e2.kind && (p = e2.executable, h = [...e2.argumentPrefix, n2, ...o2]);
        try {
          d2 = r2(p, h, ...m);
        } catch (e3) {
          throw true === c2?.hopped && void 0 !== c2.hopCwd && (0, s.KX)(e3, c2.hopCwd), e3;
        }
        return (function(e3, t3) {
          "object" == typeof e3 && null !== e3 && "pid" in e3 && "number" == typeof e3.pid ? t3(e3.pid) : "object" == typeof e3 && null !== e3 && "child" in e3 && "object" == typeof e3.child && null !== e3.child && "pid" in e3.child && "number" == typeof e3.child.pid && t3(e3.child.pid);
        })(d2, t2), true === c2?.hopped && void 0 !== c2.hopCwd ? (0, s.wr)(d2, c2.hopCwd) : d2;
      };
    })(u);
  }