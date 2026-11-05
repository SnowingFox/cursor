// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 14521 range:3992273..3993810
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14521: (e, t, r) => {
    "use strict";
    r.d(t, { eA: () => i, y2: () => a, yT: () => c });
    const n = "Selected Agent Host turn runtime", s = "placement-routing-mcp:call";
    function o(e2) {
      return true === e2.logger?.startsWith("@anysphere/agent-client:");
    }
    function i(e2, t2) {
      return { log: (r2, n2) => {
        o(n2) ? t2(n2) : e2.log(r2, n2);
      } };
    }
    function a(e2) {
      return { log: (t2, r2) => {
        const i2 = o(r2);
        i2 && e2.structuredTransport(r2);
        const a2 = (function(e3) {
          return "storage" === e3.metadata?.component;
        })(r2) ? e2.storageChannel : void 0, c2 = "info" === r2.level && (r2.message === n || (function(e3) {
          return e3.logger === s;
        })(r2));
        if (void 0 === a2 && "error" !== r2.level && "warn" !== r2.level && !c2) return;
        const l = a2 ?? e2.channel;
        let u = "";
        if (void 0 !== r2.metadata && Object.keys(r2.metadata).length > 0) try {
          u = ` ${JSON.stringify(r2.metadata)}`;
        } catch {
          u = " [metadata not serializable]";
        }
        const d = `${r2.message}${u}`;
        "error" === r2.level ? (l.error(d, r2.error), i2 || e2.structuredError(r2.message, r2.error instanceof Error ? r2.error : void 0, r2.metadata)) : "warn" === r2.level ? (l.warn(d), i2 || e2.structuredWarn(r2.message, r2.metadata)) : "debug" === r2.level && void 0 !== a2 ? a2.debug(d) : l.info(d);
      } };
    }
    function c(e2, t2) {
      return e2 ?? t2;
    }
  }