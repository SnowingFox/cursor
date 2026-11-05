// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30306 range:4905530..4908557
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30306: (e, t, r) => {
    "use strict";
    r.d(t, { EW: () => _, H1: () => A, M$: () => l, QE: () => a, Wo: () => g, XX: () => s, bn: () => i, gW: () => m, km: () => p, nx: () => v, so: () => c });
    var n = r(91398);
    const s = "agent_exec", o = "agent_host", i = { disableConsoleFallback: true };
    function a(e2) {
      return { ...e2, subkey: o };
    }
    function c(e2) {
      l("transport", e2.level, e2.message, e2.metadata, e2.error);
    }
    function l(e2, t2, r2, s2, a2) {
      const c2 = { ...s2, runtime: o };
      try {
        switch (t2) {
          case "debug":
            n.cursor.logStructuredDebug(e2, r2, c2, i);
            break;
          case "info":
            n.cursor.logStructuredInfo(e2, r2, c2, i);
            break;
          case "warn":
            n.cursor.logStructuredWarn(e2, r2, c2, i);
            break;
          case "error":
            n.cursor.logStructuredError(e2, r2, a2 instanceof Error ? a2 : void 0, c2, i);
        }
      } catch {
      }
    }
    let u;
    function d() {
      return void 0 === u && (u = n.window.createOutputChannel("Cursor Agent Host", { log: true })), u;
    }
    function p() {
      return d();
    }
    const m = { trace(e2) {
      d().trace(e2);
    }, isTraceEnabled() {
      const e2 = d().logLevel;
      return e2 !== n.LogLevel.Off && e2 <= n.LogLevel.Trace;
    }, info(e2) {
      d().info(e2);
    }, warn(e2) {
      d().warn(e2);
    }, error(e2, t2) {
      const r2 = d();
      t2 instanceof Error ? r2.error(t2, e2) : void 0 !== t2 ? r2.error(`${e2}: ${String(t2)}`) : r2.error(e2);
    }, dispose() {
      u?.dispose(), u = void 0;
    } };
    let h;
    function f() {
      return h ??= n.window.createOutputChannel("Cursor Agent Host Network", { log: true }), h;
    }
    const g = { trace(e2, ...t2) {
      f().trace(e2, ...t2);
    }, debug(e2, ...t2) {
      f().debug(e2, ...t2);
    }, info(e2, ...t2) {
      f().info(e2, ...t2);
    }, warn(e2, ...t2) {
      f().warn(e2, ...t2);
    }, error(e2, ...t2) {
      f().error(e2, ...t2);
    }, dispose() {
      h?.dispose(), h = void 0;
    } };
    let y;
    function w() {
      return void 0 === y && (y = n.window.createOutputChannel("Cursor Agent Host Storage", { log: true })), y;
    }
    const v = { debug(e2) {
      w().debug(e2);
    }, info(e2) {
      w().info(e2);
    }, warn(e2) {
      w().warn(e2);
    }, error(e2, t2) {
      const r2 = w();
      t2 instanceof Error ? r2.error(t2, e2) : void 0 !== t2 ? r2.error(`${e2}: ${String(t2)}`) : r2.error(e2);
    }, dispose() {
      y?.dispose(), y = void 0;
    } };
    function _(e2, t2) {
      if (m.error(e2, t2), (function(e3, t3) {
        try {
          n.cursor.logStructuredError(s, e3, t3 instanceof Error ? t3 : void 0, a(), i);
        } catch {
        }
      })(e2, t2), void 0 !== t2) throw t2;
      throw new Error(e2);
    }
    async function A(e2, t2) {
      try {
        return await t2();
      } catch (t3) {
        _(e2, t3);
      }
    }
  }