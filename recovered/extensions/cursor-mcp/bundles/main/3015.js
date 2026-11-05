// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3015 range:233468..236011
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3015: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { D9: () => d });
    var n2 = r2(3024);
    function o2(e3) {
      if (!("linux" !== process.platform || void 0 === e3 || e3 <= 0)) try {
        (0, n2.writeFileSync)(`/proc/${e3}/oom_score_adj`, "0");
      } catch {
      }
    }
    var s2 = r2(3228);
    const i2 = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, a2 = Object.freeze({ kind: "direct" });
    function c({ workloadCgroupDir: e3, hopCwd: t3 }) {
      const r3 = `echo $$ 2>/dev/null > '${e3}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
      return void 0 !== t3 ? r3 + s2.N6 : `${r3}exec "$0" "$@"`;
    }
    function u(e3) {
      try {
        return !!(0, n2.statSync)(e3).isDirectory() && ((0, n2.accessSync)(`${e3}/cgroup.procs`, n2.constants.W_OK), true);
      } catch {
        return false;
      }
    }
    const l = (function(e3, t3, r3 = u) {
      return "linux" === e3 && void 0 !== t3 && i2.test(t3) && !t3.includes("..") && r3(t3) ? Object.freeze({ kind: "armed", workloadCgroupDir: t3, executable: "/bin/sh", argumentPrefix: Object.freeze(["-c", c({ workloadCgroupDir: t3 })]) }) : a2;
    })(process.platform, process.env.CURSOR_WORKLOAD_CGROUP);
    const d = /* @__PURE__ */ (function(e3, t3 = o2) {
      return function(r3, n3, o3, ...i3) {
        const a3 = i3[0], u2 = (0, s2.qr)() && (null !== (l2 = a3) && "object" == typeof l2 && !Array.isArray(l2)) ? (0, s2.mM)(n3, o3, a3) : void 0;
        var l2;
        let d2, p = n3, f = [...o3], h = i3;
        true === u2?.hopped && void 0 !== u2.hopCwd ? (h = (function(e4, t4) {
          return [t4, ...e4.slice(1)];
        })(i3, u2.options), "armed" === e3.kind ? (p = "/bin/sh", f = ["-c", c({ workloadCgroupDir: e3.workloadCgroupDir, hopCwd: u2.hopCwd }), s2.Gw, u2.hopCwd, n3, ...o3]) : (p = u2.command, f = u2.args)) : "armed" === e3.kind && (p = e3.executable, f = [...e3.argumentPrefix, n3, ...o3]);
        try {
          d2 = r3(p, f, ...h);
        } catch (e4) {
          throw true === u2?.hopped && void 0 !== u2.hopCwd && (0, s2.KX)(e4, u2.hopCwd), e4;
        }
        return (function(e4, t4) {
          "object" == typeof e4 && null !== e4 && "pid" in e4 && "number" == typeof e4.pid ? t4(e4.pid) : "object" == typeof e4 && null !== e4 && "child" in e4 && "object" == typeof e4.child && null !== e4.child && "pid" in e4.child && "number" == typeof e4.child.pid && t4(e4.child.pid);
        })(d2, t3), true === u2?.hopped && void 0 !== u2.hopCwd ? (0, s2.wr)(d2, u2.hopCwd) : d2;
      };
    })(l);
  }