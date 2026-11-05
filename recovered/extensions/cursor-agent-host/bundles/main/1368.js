// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1368 range:27565..79876
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1368: (e, t, r) => {
    "use strict";
    r.d(t, { uU: () => ve, KC: () => de, rw: () => ue });
    var n = r(73024), s = r(48161), o = r(76760), i = r(75919), a = r(56215), c = r(81958);
    function l(e2, t2) {
      n.mkdirSync(o.dirname(e2), { recursive: true });
      const r2 = `${e2}.${process.pid}.${Date.now().toString(36)}`;
      try {
        n.writeFileSync(r2, t2), n.renameSync(r2, e2);
      } catch (e3) {
        throw n.rmSync(r2, { force: true }), e3;
      }
    }
    const u = c.Ik({ schema: c.eu(1), generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"), label: c.Yj(), builtAt: c.Yj().optional(), servedAt: c.Yj(), pid: c.ai().int().nonnegative() });
    function d(e2) {
      return o.join(e2, "last-served.json");
    }
    function p(e2) {
      const t2 = d(e2);
      let r2;
      try {
        r2 = n.readFileSync(t2, "utf8");
      } catch (e3) {
        if ((function(e4, t3) {
          return e4 instanceof Error && "code" in e4 && e4.code === t3;
        })(e3, "ENOENT")) return;
        throw e3;
      }
      return (function(e3, t3) {
        const r3 = u.safeParse(e3);
        if (!r3.success) {
          const e4 = r3.error.issues[0], n3 = void 0 === e4 ? "" : ` at ${e4.path.join(".") || "<root>"}`;
          throw new Error(`${t3}: invalid last-served record${n3}: ${e4?.message ?? "unknown"}`);
        }
        const { builtAt: n2, ...s2 } = r3.data;
        return { ...s2, ...void 0 === n2 ? {} : { builtAt: n2 } };
      })(JSON.parse(r2), t2);
    }
    c.Ik({ schema: c.eu(1), pid: c.ai().int().nonnegative(), writtenAt: c.Yj(), enabledBy: c.k5(["gate", "env"]), interfaceRevision: c.ai().int(), requiredCapabilities: c.YO(c.Yj()), natives: c.YO(c.Yj()), clientVersion: c.Yj().optional(), floor: c.Ik({ generation: c.Yj(), label: c.Yj(), builtAt: c.Yj().optional(), commit: c.Yj().optional(), source: c.k5(["floor", "static"]) }), timing: c.Ik({ pollIntervalMs: c.ai().nullable(), requestIdleTimeoutMs: c.ai().nullable() }).optional() });
    function m(e2, t2 = process.pid) {
      return o.join(e2, "hosts", `${t2}.json`);
    }
    function h(e2, t2) {
      return e2 instanceof Error && "code" in e2 && e2.code === t2;
    }
    var f = r(28967);
    const g = c.Ik({ schema: c.eu(1), pid: c.ai().int().positive(), attempts: c.YO(c.Ik({ generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"), install: c.Yj(), phase: c.k5(["evaluate", "turn"]), since: c.Yj() })), reportedBy: c.ai().int().positive().optional() });
    function y(e2) {
      return o.join(e2, "attempts");
    }
    function w(e2, t2) {
      return o.join(y(e2), `${t2}.json`);
    }
    function v(e2, t2) {
      n.rmSync(w(e2, t2), { force: true });
    }
    function _(e2) {
      if (e2 === process.pid) return true;
      try {
        return process.kill(e2, 0), true;
      } catch (e3) {
        return !(e3 instanceof Error && "code" in e3 && "ESRCH" === e3.code);
      }
    }
    c.Ik({ schema: c.eu(1), pid: c.ai().int().nonnegative(), writtenAt: c.Yj(), generations: c.YO(c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest")) });
    function A(e2, t2) {
      return o.join((function(e3) {
        return o.join(e3, "serving");
      })(e2), `${t2}.json`);
    }
    function S(e2) {
      n.rmSync(A(e2, process.pid), { force: true });
    }
    var b = r(84990);
    function E(e2) {
      return { mainVersion: e2.mainVersion, builtAt: e2.builtAt, rollback: "rollback" === e2.kind };
    }
    function I({ versionsDir: e2, generation: t2 }) {
      if (void 0 !== t2 && /^[A-Za-z0-9._-]+$/.test(t2)) try {
        return E((0, b.WI)(o.join(e2, t2)));
      } catch {
        return;
      }
    }
    function C(e2, t2, r2) {
      return true === e2.rollback || void 0 === t2 || (0, b.Oj)(t2, r2) >= 0;
    }
    function k(e2, t2, { lastServed: r2 } = {}) {
      const n2 = void 0 === e2.builtAt ? Number.NaN : Date.parse(e2.builtAt);
      if (Number.isNaN(n2)) return;
      const s2 = (0, b.K1)({ candidateBuiltAt: t2.builtAt, floorBuiltAt: e2.builtAt }), o2 = void 0 === e2.version ? void 0 : (0, b.VW)(e2.version);
      if (void 0 === o2) return void 0 === s2 ? void 0 : { check: "floor", message: s2 };
      const i2 = void 0 === t2.mainVersion ? void 0 : (0, b.VW)(t2.mainVersion);
      return (function(e3, t3, r3) {
        const n3 = Date.parse(t3.builtAt);
        return n3 >= e3 && (void 0 === r3 || n3 >= Date.parse(r3.builtAt));
      })(n2, t2, r2) && C(t2, i2, o2) ? void 0 : void 0 !== o2.pre ? void 0 !== s2 ? { check: "floor", message: s2 } : C(t2, i2, o2) ? void 0 : { check: "older", message: `records ${t2.mainVersion}, older than this client's ${e2.version}, and is not a rollback` } : void 0 === i2 ? { check: "floor", message: s2 ?? `packed ${t2.builtAt}, before the module this client last served (packed ${r2?.builtAt})` } : (function(e3, t3) {
        return e3.major > t3.major || e3.major === t3.major && e3.minor > t3.minor;
      })(i2, o2) ? void 0 : { check: "before_cut", message: `records ${t2.mainVersion}, from before the ${o2.major}.${o2.minor} release branch was cut; this client's built-in module already has that code` };
    }
    var x = r(75405);
    const T = 864e5, R = c.Ik({ generation: c.Yj().regex(/^[0-9a-f]{64}$/, "is not a sha256 hex digest"), label: c.Yj(), install: c.Yj(), clientVersion: c.Yj().optional(), revertedAt: c.Yj(), trigger: c.Yj(), pid: c.ai().int().nonnegative() }), B = c.Ik({ schema: c.eu(1), reverts: c.YO(R) });
    function P(e2) {
      return o.join(e2, "reverted.json");
    }
    function J(e2) {
      const t2 = P(e2);
      let r2;
      try {
        r2 = n.readFileSync(t2, "utf8");
      } catch (e3) {
        if (e3 instanceof Error && "code" in e3 && "ENOENT" === e3.code) return;
        throw e3;
      }
      const s2 = B.safeParse(JSON.parse(r2));
      if (!s2.success) {
        const e3 = s2.error.issues[0], r3 = void 0 === e3 ? "" : ` at ${e3.path.join(".") || "<root>"}`;
        throw new Error(`${t2}: invalid reverted record${r3}: ${e3?.message ?? "unknown"}`);
      }
      return { schema: 1, reverts: s2.data.reverts.map(({ clientVersion: e3, ...t3 }) => ({ ...t3, ...void 0 === e3 ? {} : { clientVersion: e3 } })) };
    }
    function M(e2, t2) {
      const r2 = Date.parse(e2.revertedAt);
      return !Number.isNaN(r2) && r2 <= t2 && t2 - r2 < T;
    }
    const q = 6e5;
    class D {
      constructor(e2) {
        this.options = e2, this.mine = /* @__PURE__ */ new Map(), this.finished = /* @__PURE__ */ new Set(), this.said = /* @__PURE__ */ new Set();
      }
      held(e2) {
        try {
          return (function(e3, { install: t2, clientVersion: r2, now: n2 }) {
            return e3?.reverts.find((e4) => e4.install === t2 && e4.clientVersion === r2 && M(e4, n2));
          })(J(this.options.rootDir), { install: e2, clientVersion: this.options.clientVersion, now: this.options.now() });
        } catch (e3) {
          return void this.sayOnce(`ignoring ${P(this.options.rootDir)}: ${O(e3)}`);
        }
      }
      hold(e2) {
        const t2 = this.options.now(), { clientVersion: r2 } = this.options, n2 = { ...e2, ...void 0 === r2 ? {} : { clientVersion: r2 }, revertedAt: new Date(t2).toISOString(), pid: process.pid };
        let s2 = [];
        try {
          s2 = J(this.options.rootDir)?.reverts ?? [];
        } catch (e3) {
          this.sayOnce(`replacing ${P(this.options.rootDir)}: ${O(e3)}`);
        }
        try {
          !(function(e3, t3, r3, n3) {
            const s3 = { schema: 1, reverts: [...t3.filter((e4) => e4.generation !== r3.generation && M(e4, n3)), r3].slice(-16) };
            l(P(e3), `${JSON.stringify(s3, null, 2)}
`);
          })(this.options.rootDir, s2, n2, t2);
        } catch (t3) {
          this.sayOnce(`revert of ${e2.generation.slice(0, 12)} not recorded: ${O(t3)}`), this.options.onWriteFailed?.("reverted", t3);
        }
        return n2;
      }
      crashLoop({ generation: e2, install: t2, label: r2 }) {
        const n2 = this.options.now(), s2 = this.deadRecords().filter((e3) => e3.attempts.some((e4) => e4.install === t2 && n2 - Date.parse(e4.since) < q));
        if (!(s2.length < 2)) return this.options.log(`${s2.length} extension hosts (pid ${s2.map((e3) => e3.pid).join(", ")}) died with ${e2.slice(0, 12)} unfinished within 10 minutes`), this.hold({ generation: e2, label: r2(), install: t2, trigger: "crash_loop" });
      }
      lostHosts() {
        const e2 = this.options.now(), t2 = [];
        for (const r2 of this.deadRecords()) if (r2.attempts.every((t3) => e2 - Date.parse(t3.since) >= q) && void 0 !== r2.reportedBy) this.remove(r2.pid);
        else if (void 0 === r2.reportedBy) {
          for (const e3 of r2.attempts) t2.push({ pid: r2.pid, generation: e3.generation, phase: e3.phase });
          this.write({ ...r2, reportedBy: process.pid });
        }
        return t2;
      }
      begin({ generation: e2, install: t2 }, r2) {
        const n2 = `${t2}:${r2}`, s2 = this.mine.get(n2);
        void 0 === s2 ? (this.mine.set(n2, { attempt: { generation: e2, install: t2, phase: r2, since: new Date(this.options.now()).toISOString() }, open: 1 }), this.writeMine()) : s2.open += 1;
      }
      end(e2, t2) {
        const r2 = `${e2}:${t2}`, n2 = this.mine.get(r2);
        void 0 !== n2 && (n2.open -= 1, n2.open <= 0 && (this.mine.delete(r2), this.writeMine()));
      }
      turnStarted(e2) {
        this.finished.has(e2.install) || this.begin(e2, "turn");
      }
      turnSettled(e2) {
        this.end(e2, "turn");
      }
      turnCompleted(e2) {
        this.finished.add(e2), this.mine.delete(`${e2}:turn`) && this.writeMine();
      }
      removeMine() {
        this.remove(process.pid);
      }
      deadRecords() {
        let e2;
        try {
          e2 = (function(e3) {
            let t2;
            try {
              t2 = n.readdirSync(y(e3));
            } catch (e4) {
              if (e4 instanceof Error && "code" in e4 && "ENOENT" === e4.code) return { records: [], unreadable: [] };
              throw e4;
            }
            const r2 = [], s2 = [];
            for (const i2 of t2) {
              if (!/^\d+\.json$/.test(i2)) continue;
              const t3 = o.join(y(e3), i2);
              try {
                const e4 = g.safeParse(JSON.parse(n.readFileSync(t3, "utf8")));
                if (!e4.success || `${e4.data.pid}.json` !== i2) {
                  s2.push(`${t3}: not an attempts record for its pid`);
                  continue;
                }
                const { reportedBy: o2, ...a2 } = e4.data;
                r2.push({ ...a2, ...void 0 === o2 ? {} : { reportedBy: o2 } });
              } catch (e4) {
                if (e4 instanceof Error && "code" in e4 && "ENOENT" === e4.code) continue;
                s2.push(`${t3}: ${e4 instanceof Error ? e4.message : String(e4)}`);
              }
            }
            return { records: r2, unreadable: s2 };
          })(this.options.rootDir);
        } catch (e3) {
          return this.sayOnce(`attempts not read: ${O(e3)}`), [];
        }
        for (const t2 of e2.unreadable) this.sayOnce(`ignoring ${t2}`);
        return e2.records.filter((e3) => e3.pid !== process.pid && !this.options.isProcessAlive(e3.pid));
      }
      writeMine() {
        this.write({ schema: 1, pid: process.pid, attempts: [...this.mine.values()].map(({ attempt: e2 }) => e2) });
      }
      write(e2) {
        try {
          !(function(e3, t2) {
            0 !== t2.attempts.length ? l(w(e3, t2.pid), `${JSON.stringify(t2, null, 2)}
`) : v(e3, t2.pid);
          })(this.options.rootDir, e2);
        } catch (t2) {
          this.sayOnce(`attempts of pid ${e2.pid} not written: ${O(t2)}`), this.options.onWriteFailed?.("attempts", t2);
        }
      }
      remove(e2) {
        try {
          v(this.options.rootDir, e2);
        } catch (t2) {
          this.sayOnce(`attempts of pid ${e2} not removed: ${O(t2)}`), this.options.onWriteFailed?.("attempts", t2);
        }
      }
      sayOnce(e2) {
        this.said.has(e2) || (this.said.add(e2), this.options.log(e2));
      }
    }
    function O(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    function N(e2, t2, r2, n2, s2) {
      const o2 = void 0 === r2 ? t2 : { ...t2, channel: r2 }, i2 = { interfaceRevision: e2.HARNESS_INTERFACE_REVISION, capabilities: n2, harness: t2 }, a2 = [];
      let c2 = false;
      return { describe: () => i2, createTransport(t3) {
        if (c2) throw new Error("agent harness: generation is disposed");
        const r3 = e2.activate((function(e3, t4) {
          const { metrics: r4 } = t4;
          return { module: e3, backendTransport: t4.backendTransport, get privacyMode() {
            return t4.getPrivacyModeEnum();
          }, telemetry: { tags: t4.spanAttributes, log: t4.log, increment: (e4) => r4.increment(e4), distribution: (e4) => r4.distribution(e4), gauge: (e4) => r4.gauge(e4) } };
        })(o2, t3));
        if (!(r3 instanceof Promise)) return r3.transport;
        const n3 = r3.then((e3) => e3.transport);
        return a2.push(n3), n3.catch((e3) => s2(`activate failed: ${F(e3)}`)), { call: (e3) => n3.then((t4) => t4.call(e3)), dispose() {
          n3.then((e3) => e3.dispose(), () => {
          }).catch((e3) => s2(`transport dispose failed: ${F(e3)}`));
        } };
      }, dispose() {
        c2 || (c2 = true, "static" !== t2.source && Promise.allSettled(a2).then(() => (function(e3, t3) {
          let r3;
          try {
            r3 = e3.deactivate();
          } catch (e4) {
            return void t3(`deactivate failed: ${F(e4)}`);
          }
          Promise.resolve(r3).catch((e4) => {
            t3(`deactivate failed: ${F(e4)}`);
          });
        })(e2, s2)));
      } };
    }
    function F(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    var U = r(98995), L = r(73136);
    const $ = o.join("..", "..", "cursor-agent-exec", "dist", "node_modules"), Q = /* @__PURE__ */ new Map([["@napi-rs/canvas", "pdf-parse"]]), j = (0, L.fileURLToPath)(require("url").pathToFileURL(__filename).href);
    function G(e2 = j) {
      const t2 = o.resolve(o.dirname(e2), $), r2 = (0, U.createRequire)(e2), s2 = (function(e3) {
        for (; ; ) {
          const t3 = o.join(e3, "node_modules", "@anysphere", "agent", "package.json");
          if (n.existsSync(t3)) return t3;
          const r3 = o.dirname(e3);
          if (r3 === e3) return;
          e3 = r3;
        }
      })(o.dirname(e2)), i2 = {};
      for (const e3 of f.Q$) {
        const n2 = z(() => r2.resolve(o.join(t2, e3))) ?? (void 0 === s2 ? void 0 : z(() => H(s2, e3)));
        void 0 !== n2 && (i2[e3] = n2);
      }
      return i2;
    }
    function H(e2, t2) {
      const r2 = (0, U.createRequire)(e2), n2 = Q.get(t2);
      return (void 0 === n2 ? r2 : (0, U.createRequire)(r2.resolve(n2))).resolve(t2);
    }
    function z(e2) {
      try {
        return e2();
      } catch (e3) {
        if (e3 instanceof Error && "code" in e3 && "MODULE_NOT_FOUND" === e3.code) return;
        throw e3;
      }
    }
    var W = r(78877);
    const V = require("node:vm");
    class K extends Error {
      constructor(e2) {
        super(e2), this.name = "HarnessRejectedError";
      }
    }
    class Y extends K {
      constructor(e2, t2 = {}) {
        super(`${e2} ${t2.why ?? `is not installed (no ${b.h1})`}`), this.state = "is not installed", this.name = "HarnessNotInstalledError";
      }
    }
    class Z extends Y {
      constructor(e2) {
        super(e2.dir, { why: `is not loaded until this host can list it in ${e2.marker} (${e2.problem})` }), this.state = "is not loaded yet", this.name = "HarnessNotClaimedError";
      }
    }
    class X extends K {
      constructor(e2) {
        super(`reverted by extension host pid ${e2.pid} at ${e2.revertedAt} (${e2.trigger}); held back until it is re-staged, the client updates or 24 hours pass`), this.name = "HarnessRevertHeldError";
      }
    }
    function ee({ dir: e2, entryFile: t2, sha256: r2, natives: s2, declaredNatives: i2 }) {
      const a2 = o.resolve(e2, t2), c2 = n.readFileSync(a2);
      if ((0, b.fg)(c2) !== r2) throw new K(`${t2}: sha256 differs from the manifest's`);
      const l2 = c2.toString("utf8"), u2 = { exports: {} };
      (function(e3) {
        W.setFlagsFromString("--no-compilation-cache");
        try {
          return e3();
        } finally {
          W.setFlagsFromString("--compilation-cache");
        }
      })(() => V.compileFunction(l2, ["exports", "require", "module", "__filename", "__dirname"], { filename: a2 }))(u2.exports, (e3) => {
        if ((0, U.isBuiltin)(e3)) return (0, U.createRequire)(a2)(e3);
        if (!(0, f.d3)(e3)) throw (0, f._r)(`${t2} requires "${e3}", which is neither a node builtin nor a host-provided native (${f.Q$.join(", ")}); the generation was packed wrong`);
        if (!(0, f.d3)(e3, i2)) throw (0, f._r)(`${t2} requires "${e3}", which its manifest does not declare (natives: ${i2.join(", ") || "none"})`);
        return (0, U.createRequire)(a2)((0, f.pg)(s2, e3));
      }, u2, a2, o.dirname(a2));
      const d2 = u2.exports;
      if (!(function(e3) {
        return "object" == typeof e3 && null !== e3 && "activate" in e3 && "function" == typeof e3.activate && "deactivate" in e3 && "function" == typeof e3.deactivate && "HARNESS_INTERFACE_REVISION" in e3 && "number" == typeof e3.HARNESS_INTERFACE_REVISION;
      })(d2)) throw new Error(`${t2} does not export activate, deactivate and HARNESS_INTERFACE_REVISION`);
      return d2;
    }
    function te(e2, t2) {
      return "client" === e2 || "floor" === e2 || "before_cut" === e2 || "older" === e2 ? { verdict: "not_applicable", reason: e2 } : "revision" === e2 || "capabilities" === e2 || "natives" === e2 || "describe" === e2 && t2 instanceof K ? { verdict: "incompatible", reason: e2 } : "evaluate" === e2 || "describe" === e2 ? { verdict: "failed", reason: e2 } : { verdict: "refused", reason: e2 };
    }
    const re = /* @__PURE__ */ new WeakMap();
    function ne(e2, t2) {
      return "object" == typeof e2 && null !== e2 && re.set(e2, t2), e2;
    }
    function se(e2) {
      return "object" == typeof e2 && null !== e2 ? re.get(e2) : void 0;
    }
    function oe(e2) {
      return e2 instanceof Z ? "not_claimed" : e2 instanceof X ? "revert" : e2 instanceof Y ? "not_installed" : "rejected";
    }
    const ie = "floor", ae = "channel", ce = "sequence";
    function le(e2) {
      return /^[A-Za-z0-9._-]+$/.test(e2);
    }
    function ue(e2) {
      return e2.length > 12 ? e2.slice(0, 12) : e2;
    }
    function de(e2) {
      return `${e2.label} (gen ${ue(e2.generation)}, commit ${void 0 === e2.commit ? "?" : e2.commit.slice(0, 12)}, ${e2.source})`;
    }
    function pe({ rootDir: e2, floorDir: t2, log: r2 }) {
      const n2 = s.homedir(), o2 = [[e2, "<root>"]];
      return void 0 !== t2 && o2.push([t2, "<floor>"]), n2.length > 1 && o2.push([n2, "~"]), (e3) => r2(o2.reduce((e4, [t3, r3]) => e4.split(t3).join(r3), e3));
    }
    function me(e2) {
      if (e2 instanceof Error && "code" in e2) return "string" == typeof e2.code ? e2.code : void 0;
    }
    function he(e2, t2) {
      const r2 = t2.describe();
      if (e2.HARNESS_INTERFACE_REVISION !== a.nl || r2.interfaceRevision !== a.nl) throw new K(`interface revision ${r2.interfaceRevision} (entry ${e2.HARNESS_INTERFACE_REVISION}); host requires ${a.nl}`);
      return r2;
    }
    function fe(e2, t2) {
      try {
        return t2();
      } catch (t3) {
        throw e2.dispose(), t3;
      }
    }
    const ge = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Set();
    let we = false;
    class ve {
      constructor(e2) {
        this.rejectedInstalls = /* @__PURE__ */ new Map(), this.claimed = /* @__PURE__ */ new Set(), this.reportedWriteFailures = /* @__PURE__ */ new Map(), this.serveListeners = /* @__PURE__ */ new Set(), this.writeFailureListeners = /* @__PURE__ */ new Set(), this.saidClientUnordered = false, this.live = /* @__PURE__ */ new Map(), this.loadListeners = /* @__PURE__ */ new Set(), this.revertListeners = /* @__PURE__ */ new Set(), this.lostHostListeners = /* @__PURE__ */ new Set(), this.pendingReverts = [], this.completedHere = /* @__PURE__ */ new Set(), this.options = { ...e2, log: pe(e2) }, this.guard = new D({ rootDir: e2.rootDir, clientVersion: e2.clientVersion, log: this.options.log, now: e2.now ?? Date.now, isProcessAlive: e2.isProcessAlive ?? _, onWriteFailed: (e3, t2) => this.reportWriteFailure(e3, t2) });
      }
      onDidRevert(e2) {
        return this.revertListeners.add(e2), () => this.revertListeners.delete(e2);
      }
      onDidLoseHost(e2) {
        return this.lostHostListeners.add(e2), () => this.lostHostListeners.delete(e2);
      }
      tell(e2, t2, r2) {
        for (const n2 of e2) try {
          n2(t2);
        } catch (e3) {
          this.options.log(`${r2} not reported: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
      reportLostHosts() {
        const e2 = this.guard.lostHosts(), t2 = 0 === e2.length ? void 0 : this.readChannel();
        for (const r2 of e2) {
          this.options.log(`extension host pid ${r2.pid} died while ${"evaluate" === r2.phase ? "evaluating" : "running a first turn on"} ${ue(r2.generation)}`);
          const e3 = this.installedSequence(o.join(this.versionsDir, r2.generation));
          this.tell(this.lostHostListeners, { ...r2, channel: t2, sequence: e3 }, `lost host ${r2.pid}`);
        }
      }
      static shared(e2) {
        const t2 = o.resolve(e2.rootDir);
        let r2 = ge.get(t2);
        return void 0 === r2 && (r2 = new ve(e2), ge.set(t2, r2)), r2;
      }
      get rootDir() {
        return this.options.rootDir;
      }
      get versionsDir() {
        return o.join(this.options.rootDir, "versions");
      }
      get currentPointerPath() {
        return o.join(this.options.rootDir, "current");
      }
      onDidLoad(e2) {
        return this.loadListeners.add(e2), () => this.loadListeners.delete(e2);
      }
      reportLoad(e2) {
        for (const t2 of this.loadListeners) try {
          t2(e2);
        } catch (t3) {
          this.options.log(`load of ${ue(e2.module.generation)} not reported: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
      }
      onDidServe(e2) {
        return this.serveListeners.add(e2), () => this.serveListeners.delete(e2);
      }
      servedNow() {
        return this.lastServe;
      }
      onDidFailToWrite(e2) {
        return this.writeFailureListeners.add(e2), () => this.writeFailureListeners.delete(e2);
      }
      reportServe(e2, t2, r2, n2) {
        this.servedFor = t2, "not_installed" !== t2 && "not_claimed" !== t2 && (this.reportedNotInstalled = void 0);
        const s2 = "current" === t2 || "kill_switch" === t2 ? this.pointerChangedAt : void 0, o2 = { module: e2.info, channel: e2.channel, sequence: e2.sequence, cause: t2, when: r2, ..."rejected" === t2 && void 0 !== n2 ? { refused: n2 } : {}, ...void 0 === s2 ? {} : { currentChangedAt: s2 } }, { when: i2, currentChangedAt: a2, ...c2 } = o2;
        this.lastServe = c2;
        for (const r3 of this.serveListeners) try {
          r3(o2);
        } catch (r4) {
          this.options.log(`serving ${ue(e2.info.generation)} (${t2}) not reported: ${r4 instanceof Error ? r4.message : String(r4)}`);
        }
        const l2 = this.pendingReverts;
        this.pendingReverts = [];
        for (const t3 of l2) this.tell(this.revertListeners, { ...t3, fallback: e2.info }, `revert of ${ue(t3.module.generation)}`);
      }
      reportWriteFailure(e2, t2) {
        const r2 = (function(e3) {
          const t3 = me(e3);
          return void 0 !== t3 && /^E[A-Z0-9_]{1,23}$/.test(t3) ? t3.toLowerCase() : "other";
        })(t2), n2 = this.reportedWriteFailures.get(e2) ?? /* @__PURE__ */ new Set();
        if (n2.has(r2)) return;
        n2.add(r2), this.reportedWriteFailures.set(e2, n2);
        const s2 = { file: e2, code: r2, channel: this.readChannel() };
        for (const t3 of this.writeFailureListeners) try {
          t3(s2);
        } catch (t4) {
          this.options.log(`failed write of ${e2} not reported: ${t4 instanceof Error ? t4.message : String(t4)}`);
        }
      }
      installedSequence(e2) {
        try {
          const t2 = n.readFileSync(o.join(e2, ce), "utf8").trim();
          return /^\d{1,16}$/.test(t2) && Number.isSafeInteger(Number(t2)) ? Number(t2) : void 0;
        } catch (t2) {
          return void ("ENOENT" !== me(t2) && this.options.log(`unreadable ${ce} file in ${e2}: ${t2 instanceof Error ? t2.message : String(t2)}`));
        }
      }
      readChannel() {
        try {
          const e2 = n.readFileSync(o.join(this.options.rootDir, ae), "utf8").trim();
          return /^[A-Za-z0-9._-]{1,64}$/.test(e2) ? e2 : void 0;
        } catch (e2) {
          return void ("ENOENT" !== me(e2) && this.options.log(`unreadable ${ae} file: ${e2 instanceof Error ? e2.message : String(e2)}`));
        }
      }
      current() {
        return this.active ?? this.start(this.readPointer()).active;
      }
      start(e2) {
        if (this.reportLostHosts(), this.off) {
          const e3 = this.serveFloor("start");
          return this.reportServe(e3, "disabled", "start"), { active: e3, swapped: false };
        }
        if (void 0 === e2 || e2 === ie) {
          const t3 = this.serveFloor("start");
          return this.reportServe(t3, void 0 === e2 ? "no_current" : "kill_switch", "start"), { active: t3, swapped: false };
        }
        const t2 = this.floorIdentity(), r2 = this.installKey(e2);
        let n2;
        try {
          const r3 = this.loadGeneration(e2, "start");
          return this.activate(r3, t2), this.options.log(`serving ${de(r3.info)} named by current; ${de(t2)} stays unloaded`), this.reportServe(r3, "current", "start"), { active: r3, swapped: false };
        } catch (e3) {
          n2 = e3;
        }
        const s2 = n2 instanceof Error ? n2.message : String(n2), o2 = n2 instanceof Y, i2 = oe(n2), a2 = se(n2);
        o2 ? this.reportedNotInstalled = e2 : this.rememberRejection(r2, a2), "revert" === i2 && (this.revertedFrom = e2);
        const c2 = o2 ? { generation: e2, reason: s2, transient: true } : { generation: e2, reason: s2 }, l2 = n2 instanceof Y ? `generation ${ue(e2)} named by current ${n2.state}: ${s2}` : `REJECTED generation ${ue(e2)}: ${s2}`, u2 = this.lastServed();
        if (void 0 !== u2 && u2.generation !== e2) try {
          const r3 = this.loadGeneration(u2.generation, "fallback");
          return this.activate(r3, t2), this.options.log(`${l2} — serving last served generation ${de(r3.info)} (served ${u2.servedAt}) instead of ${de(t2)}; current still names ${ue(e2)}`), this.reportServe(r3, i2, "start", a2), { active: r3, swapped: false, rejected: c2 };
        } catch (e3) {
          this.options.log(`last served generation ${ue(u2.generation)} cannot serve either: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
        const d2 = this.serveFloor("fallback");
        return this.options.log(`${l2} — staying on ${de(d2.info)}${o2 ? " until it is" : ""}`), this.reportServe(d2, i2, "start", a2), { active: d2, swapped: false, rejected: c2 };
      }
      serveFloor(e2) {
        const t2 = this.loadFloor({ when: e2 });
        return this.active = t2, t2;
      }
      get off() {
        return false === this.options.enabled?.();
      }
      announce(e2 = this.floorIdentity()) {
        if (this.off) return this.announcedFloor = e2, void this.retire("installed generations are off in this host");
        const t2 = this.announcedFloor;
        if (t2?.source === e2.source && t2.generation === e2.generation && n.existsSync(m(this.options.rootDir))) return;
        const r2 = { schema: 1, pid: process.pid, writtenAt: (/* @__PURE__ */ new Date()).toISOString(), enabledBy: this.options.enabledBy ?? "env", interfaceRevision: a.nl, requiredCapabilities: [...a.us], natives: [...f.Q$], ...void 0 === this.options.clientVersion ? {} : { clientVersion: this.options.clientVersion }, floor: { generation: e2.generation, label: e2.label, ...void 0 === e2.builtAt ? {} : { builtAt: e2.builtAt }, ...void 0 === e2.commit ? {} : { commit: e2.commit }, source: "static" === e2.source ? "static" : "floor" }, ...void 0 === this.options.timing ? {} : { timing: this.options.timing } };
        try {
          !(function(e3, t3) {
            l(m(e3, t3.pid), `${JSON.stringify(t3, null, 2)}
`);
          })(this.options.rootDir, r2), this.announcedFloor = e2, this.announceProblem = void 0, this.reportedWriteFailures.delete("host_descriptor"), this.options.log(`host descriptor written (${m(this.options.rootDir)}): revision ${r2.interfaceRevision}, floor gen ${ue(e2.generation)}${void 0 === e2.builtAt ? "" : ` built ${e2.builtAt}`}, enabled by ${r2.enabledBy}`);
        } catch (e3) {
          const t3 = e3 instanceof Error ? e3.message : String(e3);
          this.announceProblem !== t3 && (this.announceProblem = t3, this.options.log(`host descriptor not written: ${t3}`)), this.reportWriteFailure("host_descriptor", e3);
        }
      }
      retire(e2) {
        try {
          (function(e3) {
            try {
              return n.rmSync(m(e3)), true;
            } catch (e4) {
              if (h(e4, "ENOENT")) return false;
              throw e4;
            }
          })(this.options.rootDir) && this.options.log(`host descriptor removed: ${e2}`);
        } catch (e3) {
          this.options.log(`host descriptor not removed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }
      floorIdentity() {
        const { floorDir: e2 } = this.options;
        if (void 0 !== e2 && n.existsSync(e2)) try {
          const t2 = (0, b.WI)(e2);
          return { generation: t2.generation, label: t2.label, builtAt: t2.builtAt, commit: t2.commit, source: "floor" };
        } catch (t2) {
          this.options.log(`packed floor manifest at ${e2} unreadable: ${t2 instanceof Error ? t2.message : String(t2)}`);
        }
        return this.staticFloorBuild();
      }
      staticFloorBuild() {
        return { generation: "static", label: "static floor (host dist)", builtAt: this.options.staticFloorBuiltAt, commit: void 0, source: "static" };
      }
      floorBuiltAt() {
        if (void 0 === this.floorBuiltAtCache) {
          const e2 = this.floorIdentity().builtAt;
          this.floorBuiltAtCache = e2 ?? null, (void 0 === e2 || Number.isNaN(Date.parse(e2))) && this.options.log(`floor has no build date${void 0 === e2 ? "" : ` (${JSON.stringify(e2)})`}; the never-below-the-floor rule cannot run on this host`);
        }
        return this.floorBuiltAtCache ?? void 0;
      }
      clientVersionFor(e2) {
        const { clientVersion: t2 } = this.options;
        return void 0 === e2.engines || this.saidClientUnordered || void 0 !== t2 && void 0 !== (0, b.VW)(t2) || (this.saidClientUnordered = true, this.options.log(`client version ${void 0 === t2 ? "unknown" : JSON.stringify(t2)}; no generation's engines.cursor can be judged on this host`)), t2;
      }
      readPointer() {
        let e2;
        try {
          e2 = n.openSync(this.currentPointerPath, "r");
          const t2 = n.fstatSync(e2).mtimeMs, r2 = n.readFileSync(e2, "utf8").trim();
          return this.pointerChangedAt = t2, "" === r2 ? void 0 : r2;
        } catch (e3) {
          return void ("ENOENT" !== me(e3) && this.options.log(`unreadable pointer ${this.currentPointerPath}: ${e3 instanceof Error ? e3.message : String(e3)}`));
        } finally {
          void 0 !== e2 && n.closeSync(e2);
        }
      }
      poll() {
        void 0 !== this.servingProblem && this.writeServingMarker(), void 0 !== this.announcedFloor && this.announce(this.announcedFloor);
        const e2 = this.active;
        if (this.off) return void 0 === e2 ? this.start(void 0) : this.returnToFloor(e2, "disabled");
        const t2 = this.readPointer();
        if (void 0 === e2) return this.start(t2);
        if (void 0 === t2) {
          const t3 = this.moveOffHeld(e2);
          return void 0 !== t3 ? t3 : ("installed" !== e2.info.source && "no_current" !== this.servedFor && this.reportServe(e2, "no_current", "turn"), { active: e2, swapped: false });
        }
        if (t2 === e2.info.generation) {
          const t3 = this.moveOffHeld(e2);
          return void 0 !== t3 ? t3 : (this.caughtUp(e2), { active: e2, swapped: false });
        }
        if (t2 === ie) return this.returnToFloor(e2, "kill_switch");
        const r2 = this.installKey(t2);
        if (this.isRejectedInstall(r2)) {
          const n2 = this.moveOffHeld(e2);
          if (void 0 !== n2) return n2;
          const s2 = "revert" === this.servedFor && this.revertedFrom === t2;
          return "rejected" === this.servedFor || s2 || this.reportServe(e2, "rejected", "turn", this.rememberedRefusal(r2)), { active: e2, swapped: false };
        }
        try {
          const r3 = this.loadGeneration(t2, "turn");
          return this.activate(r3, e2.info), this.options.log(`swapped ${de(e2.info)} -> ${de(r3.info)}`), this.reportServe(r3, "current", "turn"), { active: r3, swapped: true, previous: e2.info };
        } catch (n2) {
          const s2 = n2 instanceof Error ? n2.message : String(n2);
          if (n2 instanceof Y) {
            if (this.reportedNotInstalled === t2) return this.moveOffHeld(e2) ?? { active: e2, swapped: false };
            this.reportedNotInstalled = t2;
            const r3 = this.moveOffHeld(e2), o3 = r3 ?? this.serveLastServedInsteadOfFloor(e2, t2);
            return this.options.log(`generation ${ue(t2)} named by current ${n2.state}: ${s2} — staying on ${de(o3.active.info)} until it is`), void 0 === r3 && this.reportServe(o3.active, oe(n2), "turn"), { ...o3, rejected: { generation: t2, reason: s2, transient: true } };
          }
          const o2 = se(n2);
          this.rememberRejection(r2, o2);
          const i2 = this.moveOffHeld(e2), a2 = i2 ?? this.serveLastServedInsteadOfFloor(e2, t2);
          this.options.log(`REJECTED generation ${ue(t2)}: ${s2} — staying on ${de(a2.active.info)}`);
          const c2 = oe(n2);
          return "revert" === c2 && (this.revertedFrom = t2), void 0 === i2 && this.reportServe(a2.active, c2, "turn", o2), { ...a2, rejected: { generation: t2, reason: s2 } };
        }
      }
      moveOffHeld(e2) {
        if ("installed" !== e2.info.source) return;
        const t2 = this.installKey(e2.info.generation), r2 = void 0 === t2 ? void 0 : this.guard.held(t2);
        if (void 0 === r2) return;
        this.rememberRejection(t2), this.options.log(`REJECTED generation ${ue(e2.info.generation)}: ${new X(r2).message}`);
        const n2 = this.loadFallback(e2.info);
        return this.active = n2, this.previousServed = void 0, this.writeServingMarker(), this.options.log(`falling back ${de(e2.info)} -> ${de(n2.info)}`), this.revertedFrom = e2.info.generation, this.pendingReverts.push({ module: e2.info, channel: e2.channel, sequence: e2.sequence, trigger: "persisted" }), this.reportServe(n2, "revert", "turn"), { active: n2, swapped: true, previous: e2.info };
      }
      caughtUp(e2) {
        void 0 !== this.servedFor && "current" !== this.servedFor && this.reportServe(e2, "current", "turn");
      }
      returnToFloor(e2, t2) {
        if ("installed" !== e2.info.source) return this.servedFor !== t2 && this.reportServe(e2, t2, "turn"), { active: e2, swapped: false };
        const r2 = this.loadFloor({ when: "turn" });
        return this.activate(r2, e2.info), this.options.log(`${"kill_switch" === t2 ? "kill switch: current names the floor" : "installed generations are off in this host"}; swapped ${de(e2.info)} -> ${de(r2.info)}`), this.reportServe(r2, t2, "turn"), { active: r2, swapped: true, previous: e2.info };
      }
      activate(e2, t2) {
        this.active = e2, this.previousServed = t2, this.writeServingMarker();
      }
      markServed(e2) {
        if ("installed" === e2.source && !this.completedHere.has(e2.generation)) {
          this.completedHere.add(e2.generation);
          const t3 = this.installKey(e2.generation);
          void 0 !== t3 && this.guard.turnCompleted(t3);
        }
        var t2, r2;
        if ("installed" === e2.source && this.lastServed()?.generation !== e2.generation && !this.isRejectedInstall(this.installKey(e2.generation))) try {
          t2 = this.options.rootDir, r2 = { schema: 1, generation: e2.generation, label: e2.label, ...void 0 === e2.builtAt ? {} : { builtAt: e2.builtAt }, servedAt: (/* @__PURE__ */ new Date()).toISOString(), pid: process.pid }, l(d(t2), `${JSON.stringify(r2, null, 2)}
`), this.reportedWriteFailures.delete("last_served");
        } catch (e3) {
          this.options.log(`last-served record not written: ${e3 instanceof Error ? e3.message : String(e3)}`), this.reportWriteFailure("last_served", e3);
        }
      }
      serveLastServedInsteadOfFloor(e2, t2) {
        if ("installed" === e2.info.source) return { active: e2, swapped: false };
        const r2 = this.lastServed();
        if (void 0 === r2 || r2.generation === t2) return { active: e2, swapped: false };
        try {
          const n2 = this.loadGeneration(r2.generation, "fallback");
          return this.activate(n2, e2.info), this.options.log(`falling back to last served generation ${de(n2.info)} (served ${r2.servedAt}) instead of ${de(e2.info)}; current still names ${ue(t2)}`), { active: n2, swapped: true, previous: e2.info };
        } catch (t3) {
          return this.options.log(`last served generation ${ue(r2.generation)} cannot serve either: ${t3 instanceof Error ? t3.message : String(t3)} — staying on ${de(e2.info)}`), { active: e2, swapped: false };
        }
      }
      lastServed() {
        try {
          const e2 = p(this.options.rootDir);
          return this.lastServedProblem = void 0, e2;
        } catch (e2) {
          const t2 = e2 instanceof Error ? e2.message : String(e2);
          return void (this.lastServedProblem !== t2 && (this.lastServedProblem = t2, this.options.log(`ignoring ${d(this.options.rootDir)}: ${t2}`)));
        }
      }
      floor() {
        return this.loadFloor({ counted: false, when: "fallback" });
      }
      markIncompatible({ generation: e2, reason: t2, revert: r2 }) {
        const s2 = this.installKey(e2);
        if (void 0 !== s2 && void 0 !== r2 && this.guard.hold({ generation: e2, label: r2.label, install: s2, trigger: r2.trigger }), void 0 !== s2 && !this.isRejectedInstall(s2) && (this.rememberRejection(s2), this.options.log(`REJECTED generation ${ue(e2)} at run time: ${t2}`), this.lastServed()?.generation === e2)) try {
          o2 = this.options.rootDir, n.rmSync(d(o2), { force: true });
        } catch (t3) {
          this.options.log(`last-served record naming ${ue(e2)} not removed: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
        var o2;
        const i2 = this.current();
        if (i2.info.generation !== e2) return;
        if ("installed" !== i2.info.source) return void this.options.log(`${de(i2.info)} cannot serve this host (${t2}) and nothing lies below the floor to fall back to`);
        const a2 = this.loadFallback(i2.info);
        return this.active = a2, this.previousServed = void 0, this.options.log(`falling back ${de(i2.info)} -> ${de(a2.info)}`), this.revertedFrom = e2, this.reportServe(a2, "revert", "turn"), a2;
      }
      loadFallback(e2) {
        const t2 = this.previousServed, r2 = [];
        void 0 !== t2 && "installed" === t2.source && r2.push({ generation: t2.generation, what: "previous generation" });
        const n2 = this.lastServed();
        void 0 !== n2 && r2.push({ generation: n2.generation, what: "last served generation" });
        const s2 = /* @__PURE__ */ new Set([e2.generation]);
        for (const { generation: e3, what: t3 } of r2) if (!s2.has(e3)) {
          s2.add(e3);
          try {
            return this.loadGeneration(e3, "fallback");
          } catch (r3) {
            this.options.log(`${t3} ${ue(e3)} cannot serve as the fallback: ${r3 instanceof Error ? r3.message : String(r3)}`);
          }
        }
        return this.loadFloor({ when: "fallback" });
      }
      installKey(e2) {
        if (!le(e2)) return `pointer:${e2}`;
        let t2;
        try {
          t2 = n.statSync(o.join(this.versionsDir, e2, b.h1));
        } catch (t3) {
          return void ("ENOENT" !== me(t3) && "ENOTDIR" !== me(t3) && this.options.log(`manifest of ${ue(e2)} unreadable: ${t3 instanceof Error ? t3.message : String(t3)}`));
        }
        return `${e2}@${t2.ino}:${t2.mtimeMs}`;
      }
      isRejectedInstall(e2) {
        return void 0 !== e2 && this.rejectedInstalls.has(e2);
      }
      rememberRejection(e2, t2) {
        void 0 !== e2 && this.rejectedInstalls.set(e2, t2);
      }
      rememberedRefusal(e2) {
        return void 0 === e2 ? void 0 : this.rejectedInstalls.get(e2);
      }
      loadGeneration(e2, t2) {
        if (!le(e2)) {
          const r3 = { verdict: "refused", reason: "pointer" };
          throw this.reportLoad({ module: { generation: e2, source: "installed" }, channel: this.readChannel(), sequence: void 0, when: t2, ...r3 }), ne(new K("pointer is not a plain directory name"), r3);
        }
        const r2 = o.join(this.versionsDir, e2);
        if (!n.existsSync(o.join(r2, b.h1))) throw new Y(r2);
        const s2 = this.installKey(e2);
        if (this.isRejectedInstall(s2)) throw this.reportLoad({ module: { generation: e2, source: "installed" }, channel: this.readChannel(), sequence: this.installedSequence(r2), when: t2, verdict: "refused", reason: "rejected_earlier" }), ne(new K("rejected earlier by this host and not re-staged since"), this.rememberedRefusal(s2) ?? { verdict: "refused", reason: "rejected_earlier" });
        if (this.reportLostHosts(), void 0 !== s2 && this.refuseIfHeld({ generation: e2, install: s2 }, r2, t2), this.claimed.add(e2), this.writeServingMarker(), void 0 !== this.servingProblem) throw this.claimed.delete(e2), new Z({ dir: r2, marker: A(this.options.rootDir, process.pid), problem: this.servingProblem });
        let i2;
        const a2 = s2 ?? `${e2}@unknown`;
        this.guard.begin({ generation: e2, install: a2 }, "evaluate");
        try {
          i2 = this.loadFrom({ dir: r2, source: "installed", expectedGeneration: e2, when: t2 });
        } catch (t3) {
          throw this.claimed.delete(e2), this.writeServingMarker(), t3;
        } finally {
          this.guard.end(a2, "evaluate");
        }
        return this.claimed.delete(e2), this.live.set(i2.harness, i2.info.generation), this.writeServingMarker(), i2;
      }
      refuseIfHeld({ generation: e2, install: t2 }, r2, n2) {
        let s2 = this.guard.held(t2);
        if (void 0 === s2 && (s2 = this.guard.crashLoop({ generation: e2, install: t2, label: () => this.labelOf(r2) }), void 0 !== s2 && this.pendingReverts.push({ module: { generation: e2, label: s2.label, source: "installed" }, channel: this.readChannel(), sequence: this.installedSequence(r2), trigger: "crash_loop" })), void 0 !== s2) throw this.rememberRejection(t2), this.reportLoad({ module: { generation: e2, source: "installed" }, channel: this.readChannel(), sequence: this.installedSequence(r2), when: n2, verdict: "refused", reason: "rejected_earlier" }), new X(s2);
      }
      labelOf(e2) {
        try {
          return (0, b.WI)(e2).label;
        } catch (t2) {
          return this.options.log(`manifest in ${e2} unreadable for its label: ${t2 instanceof Error ? t2.message : String(t2)}`), "unknown";
        }
      }
      turnStarted(e2) {
        const t2 = this.unfinishedInstall(e2);
        void 0 !== t2 && this.guard.turnStarted({ generation: e2.generation, install: t2 });
      }
      turnSettled(e2) {
        const t2 = this.unfinishedInstall(e2);
        void 0 !== t2 && this.guard.turnSettled(t2);
      }
      unfinishedInstall(e2) {
        return "installed" !== e2.source || this.completedHere.has(e2.generation) ? void 0 : this.installKey(e2.generation);
      }
      removeAttemptMarks() {
        this.guard.removeMine();
      }
      release(e2) {
        e2.harness.dispose(), this.live.delete(e2.harness) && this.writeServingMarker();
      }
      serving() {
        return [...new Set(this.live.values())].sort();
      }
      writeServingMarker() {
        const e2 = /* @__PURE__ */ new Set([...this.serving(), ...this.claimed]);
        e2.size > 0 && "installed" === this.previousServed?.source && e2.add(this.previousServed.generation);
        try {
          0 === e2.size ? (S(this.options.rootDir), ye.delete(this)) : (!(function(e3, t3) {
            const r2 = { schema: 1, pid: process.pid, writtenAt: (/* @__PURE__ */ new Date()).toISOString(), generations: [...t3].sort() };
            l(A(e3, process.pid), `${JSON.stringify(r2, null, 2)}
`);
          })(this.options.rootDir, [...e2].sort()), t2 = this, ye.add(t2), we || (we = true, process.once("exit", () => {
            for (const e3 of ye) e3.removeServingMarker(), e3.removeAttemptMarks();
          })), this.reportedWriteFailures.delete("serving_marker")), this.servingProblem = void 0;
        } catch (e3) {
          const t3 = e3 instanceof Error ? e3.message : String(e3);
          this.servingProblem !== t3 && (this.servingProblem = t3, this.options.log(`serving marker ${A(this.options.rootDir, process.pid)} not written: ${t3}; no other installed generation is loaded until it is`)), this.reportWriteFailure("serving_marker", e3);
        }
        var t2;
      }
      removeServingMarker() {
        try {
          S(this.options.rootDir);
        } catch (e2) {
          this.servingProblem = e2 instanceof Error ? e2.message : String(e2);
        }
      }
      servedNatives(e2) {
        const t2 = this.hostNatives(), r2 = {}, n2 = [];
        for (const s2 of e2) {
          const e3 = t2[s2];
          void 0 === e3 ? n2.push(s2) : r2[s2] = e3;
        }
        return n2.length > 0 && this.options.log(`natives ${n2.join(", ")} are declared but not shipped by this host; requiring them fails`), r2;
      }
      hostNatives() {
        if (void 0 === this.resolvedHostNatives) {
          const e2 = this.options.hostNatives ?? G();
          this.resolvedHostNatives = e2;
          const t2 = f.Q$.filter((t3) => void 0 === e2[t3]);
          this.options.log(`host natives, by path from the loader: ${(function(e3) {
            const t3 = o.dirname(j);
            return Object.entries(e3).flatMap(([e4, r2]) => void 0 === r2 ? [] : [`${e4} (${o.relative(t3, r2)})`]).join(", ") || "none";
          })(e2)}${0 === t2.length ? "" : `; not found in this host: ${t2.join(", ")}`}`);
        }
        return this.resolvedHostNatives;
      }
      loadFrom({ dir: e2, source: t2, expectedGeneration: r2, counted: s2 = true, when: a2 }) {
        const c2 = performance.now(), l2 = this.readChannel(), u2 = "installed" === t2 ? this.installedSequence(e2) : void 0;
        let d2 = r2 ?? "unknown", p2 = "manifest";
        try {
          let n2 = (0, b.WI)(e2);
          if (d2 = r2 ?? n2.generation, p2 = "generation", void 0 !== r2 && n2.generation !== r2) throw new K(`manifest names generation ${ue(n2.generation)}`);
          const { signatures: o2 } = this.options;
          "installed" === t2 && void 0 !== o2 && (p2 = "signature", n2 = this.signedManifest(e2, n2, o2)), p2 = "revision";
          try {
            (0, b.P9)(n2);
          } catch (e3) {
            throw e3 instanceof b.Sh && ("revision" === e3.check || "capabilities" === e3.check || "natives" === e3.check) && (p2 = e3.check), e3;
          }
          if ("installed" === t2) {
            p2 = "client", (0, b.sr)(n2, this.clientVersionFor(n2)), p2 = "floor";
            const e3 = k({ version: this.options.clientVersion, builtAt: this.floorBuiltAt() }, E(n2), { lastServed: I({ versionsDir: this.versionsDir, generation: this.lastServed()?.generation }) });
            if (void 0 !== e3) throw p2 = e3.check, new b.Sh(e3.message, e3.check);
          }
          p2 = "payload", (0, b.xL)(e2, n2);
          const m2 = this.servedNatives(n2.natives);
          (0, i.setEnvironmentData)((0, f.kx)(e2), m2), p2 = "evaluate";
          const h2 = ee({ dir: e2, entryFile: n2.entry, sha256: n2.files[n2.entry].sha256, natives: m2, declaredNatives: n2.natives }), g2 = { generation: n2.generation, label: n2.label, commit: n2.commit, builtAt: n2.builtAt, source: t2 }, y2 = N(h2, g2, l2, n2.capabilities, this.options.log);
          p2 = "describe";
          const w2 = fe(y2, () => {
            const e3 = he(h2, y2), t3 = e3.capabilities.filter((e4) => !n2.capabilities.includes(e4)), r3 = n2.capabilities.filter((t4) => !e3.capabilities.includes(t4));
            if (t3.length > 0 || r3.length > 0) throw new K(`describe() capabilities [${e3.capabilities.join(", ")}] differ from the manifest's [${n2.capabilities.join(", ")}]`);
            return new Set(e3.capabilities);
          });
          return this.options.log(`loaded ${de(g2)} from ${e2} in ${Math.round(performance.now() - c2)} ms; ${Object.keys(n2.files).length} files verified by hash`), s2 && this.reportLoad({ module: g2, channel: l2, sequence: u2, when: a2, verdict: "loaded", reason: "none" }), { info: g2, harness: y2, capabilities: w2, channel: l2, sequence: u2 };
        } catch (r3) {
          if ("installed" === t2 && (function(e3) {
            let t3;
            try {
              t3 = (0, b.WI)(e3);
            } catch {
              return !n.existsSync(o.join(e3, b.h1));
            }
            return Object.keys(t3.files).some((t4) => !n.existsSync(o.join(e3, t4)));
          })(e2)) throw new Y(e2, { why: "was removed while it loaded" });
          const i2 = te(p2, r3);
          throw s2 && this.reportLoad({ module: { generation: d2, source: t2 }, channel: l2, sequence: u2, when: a2, ...i2 }), ne(r3, i2);
        }
      }
      loadFloor({ counted: e2 = true, when: t2 }) {
        const r2 = this.loadPackedOrStaticFloor(e2, t2);
        return this.announce(r2.info), r2;
      }
      loadPackedOrStaticFloor(e2, t2) {
        const { floorDir: r2, staticFloor: s2 } = this.options;
        if (void 0 !== r2 && n.existsSync(r2)) try {
          return this.loadFrom({ dir: r2, source: "floor", counted: e2, when: t2 });
        } catch (e3) {
          this.options.log(`packed floor at ${r2} rejected: ${e3 instanceof Error ? e3.message : String(e3)} — falling back to the statically linked floor`);
        }
        const o2 = this.staticFloorBuild(), i2 = this.readChannel();
        let c2 = "evaluate";
        try {
          const r3 = N(s2, o2, i2, Object.values(a.eN), this.options.log);
          c2 = "describe";
          const n2 = fe(r3, () => he(s2, r3)), l2 = n2.harness;
          return this.options.log(`floor: ${de(l2)}`), e2 && this.reportLoad({ module: l2, channel: i2, sequence: void 0, when: t2, verdict: "loaded", reason: "none" }), { info: l2, harness: r3, capabilities: new Set(n2.capabilities), channel: i2, sequence: void 0 };
        } catch (r3) {
          throw e2 && this.reportLoad({ module: o2, channel: i2, sequence: void 0, when: t2, ...te(c2, r3) }), r3;
        }
      }
      signedManifest(e2, t2, r2) {
        const n2 = o.join(e2, b.h1), s2 = (0, x.Mv)(n2, b.T1.manifestBytes);
        if (void 0 === s2) throw new K(`${b.h1} is gone`);
        const i2 = (0, x.r$)({ manifest: s2, signature: (0, x.g2)(e2), keys: r2.keys }), a2 = `generation ${ue(t2.generation)} ${(0, x.LY)(i2)}`;
        if ("valid" === i2.status) {
          const e3 = (0, b.k_)(s2, n2);
          if (e3.generation !== t2.generation) throw new K(`${b.h1} changed while it was read`);
          return this.options.log(`signature: ${a2}`), e3;
        }
        if (r2.enforce) throw new K(`signature: ${a2}`);
        const c2 = `${t2.generation} ${i2.status}`;
        return this.reportedSignature !== c2 && (this.reportedSignature = c2, this.options.log(`signature not enforced in this build: ${a2}; loading it anyway`)), t2;
      }
    }
  }