// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 43195 range:7754335..7756132
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43195: (e, t, r) => {
    "use strict";
    r.d(t, { k: () => c });
    var n = r(37949), s = r(56215), o = r(36781), i = r(3702);
    const a = new Set(s.g3);
    function c(e2, t2) {
      const r2 = (0, i.y)(e2.info, e2.channel, e2.sequence), { metrics: s2, loopLogContext: o2 } = t2, c2 = (e3) => (n2) => {
        try {
          e3({ ...n2, tags: { ...r2, ...n2.tags } });
        } catch (e4) {
          t2.log(`${n2.stat} not emitted: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
      };
      return { backendTransport: t2.backendTransport, getPrivacyModeEnum: t2.getPrivacyModeEnum, spanAttributes: r2, log: (e3) => {
        const { logger: s3 } = e3;
        if (void 0 === s3 || !a.has(e3.level)) return void t2.log((function(e4) {
          const t3 = "info" === e4.level ? "" : `${e4.level} `, r3 = void 0 === e4.logger ? "" : `${e4.logger}: `, n2 = void 0 === e4.metadata ? "" : ` ${e4.metadata}`, s4 = void 0 === e4.error ? "" : ` error=${e4.error}`;
          return `${t3}${r3}${e4.message}${n2}${s4}`;
        })(e3));
        const i2 = o2();
        i2.get(n._O).log(i2, { level: e3.level, message: e3.message, timestamp: /* @__PURE__ */ new Date(), context: i2, logger: s3, metadata: { ...r2, ...l(e3.metadata) }, ...void 0 === e3.error ? {} : { error: u(e3.error, e3) } });
      }, metrics: { increment: c2((e3) => s2?.increment?.(e3)), distribution: c2((e3) => s2?.distribution(e3)), gauge: c2((e3) => s2?.gauge?.(e3)) } };
    }
    function l(e2) {
      return void 0 === e2 ? {} : (0, o.d)(e2) ?? { metadata: e2 };
    }
    function u(e2, t2) {
      const r2 = e2.indexOf("\n"), n2 = new Error(t2.errorMessage ?? e2.slice(0, -1 === r2 ? void 0 : r2));
      return void 0 !== t2.errorName && (n2.name = t2.errorName), n2.stack = e2, n2;
    }
  }