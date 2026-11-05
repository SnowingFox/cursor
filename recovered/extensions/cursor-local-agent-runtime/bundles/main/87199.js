// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 87199 range:7604311..7612743
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87199: (e, t, r) => {
    "use strict";
    r.d(t, { $Y: () => D, $f: () => C, A: () => T, D1: () => I, Gq: () => R, Gw: () => u, KX: () => q, N6: () => y, Vn: () => L, Zv: () => g, fK: () => U, iA: () => O, mM: () => A, qr: () => P, wr: () => j, wz: () => F, yo: () => M });
    var n = r(77598), o = r(73024), s = r(48161), i = r(76760), a = r(57075);
    const l = "/cursor/stores", c = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", d = 79, p = "cursor-fuse-cwd:cd", h = Buffer.from(p), m = 32;
    function f(e2) {
      return Buffer.from(Buffer.concat(e2));
    }
    class g {
      constructor() {
        this.held = Buffer.alloc(0), this.released = false, this.seen = 0, this.prefix = Buffer.alloc(0);
      }
      get bytes() {
        return this.seen;
      }
      get stdoutPrefix() {
        return this.prefix;
      }
      get diverged() {
        return this.released;
      }
      note(e2) {
        const t2 = Buffer.from(e2);
        if (this.seen += t2.length, this.prefix.length < m) {
          const e3 = Math.min(t2.length, m - this.prefix.length);
          this.prefix = f([this.prefix, t2.subarray(0, e3)]);
        }
        if (this.released) return t2;
        const r2 = f([this.held, t2]);
        if (!(r2.length <= h.length && h.subarray(0, r2.length).equals(r2))) return this.released = true, this.held = Buffer.alloc(0), r2;
        this.held = r2;
      }
      takeHeld() {
        if (0 === this.held.length) return void (this.released = true);
        const e2 = this.held;
        return this.held = Buffer.alloc(0), this.released = true, e2;
      }
    }
    const y = `cd "$1" || { printf %s '${p}'; exit ${d}; }; shift; exec "$@"`;
    function v() {
      try {
        return (0, o.readFileSync)("/proc/self/mountinfo", "utf8");
      } catch {
        return;
      }
    }
    let w, b, _ = v;
    function S(e2) {
      return e2.replace(/\\([0-7]{3})/g, (e3, t2) => String.fromCharCode(Number.parseInt(t2, 8)));
    }
    function x(e2) {
      return "/" === e2 ? "/" : e2.replace(/\/+$/, "");
    }
    function k(e2, t2) {
      return "/" === t2 || e2 === t2 || e2.startsWith(`${t2}/`);
    }
    function E(e2) {
      return w === e2 && void 0 !== b || (w = e2, b = (function(e3) {
        const t2 = [];
        for (const r2 of e3.split("\n")) {
          if (0 === r2.length) continue;
          const e4 = r2.split(" ");
          if (e4.length < 10) continue;
          let n2 = -1;
          for (let t3 = 6; t3 < e4.length; t3++) if ("-" === e4[t3]) {
            n2 = t3;
            break;
          }
          const o2 = e4[4], s2 = -1 === n2 ? void 0 : e4[n2 + 1];
          void 0 !== o2 && void 0 !== s2 && 0 !== s2.length && t2.push({ mountPoint: x(S(o2)), fstype: s2 });
        }
        return t2;
      })(e2)), b;
    }
    function T(e2, t2) {
      const r2 = (function(e3) {
        return e3?.readMountinfo ?? _;
      })(t2)();
      if (void 0 === r2) return false;
      const n2 = (function(e3, t3) {
        let r3;
        for (const n3 of t3) k(e3, n3.mountPoint) && (void 0 === r3 || n3.mountPoint.length >= r3.mountPoint.length) && (r3 = n3);
        return r3;
      })(i.resolve(e2), E(r2));
      return void 0 !== n2 && ("fuse" === (o2 = n2.fstype) || "fuseblk" === o2 || o2.startsWith("fuse."));
      var o2;
    }
    function C(e2) {
      const t2 = i.resolve(e2);
      return t2 === l || t2.startsWith(`${l}/`);
    }
    function I(e2) {
      const t2 = e2?.processCwd ?? process.cwd();
      return "linux" === (e2?.platform ?? process.platform) && T(t2, e2) ? e2?.tmpdir ?? (0, s.tmpdir)() : t2;
    }
    function A(e2, t2, r2, n2) {
      const o2 = n2?.platform ?? process.platform, s2 = r2?.cwd;
      if ("linux" !== o2 || void 0 === s2 || r2?.shell || !T(s2, n2)) return { command: e2, args: [...t2], options: r2, hopped: false };
      const a2 = i.resolve(s2), l2 = I({ processCwd: n2?.processCwd, tmpdir: n2?.tmpdir, platform: o2, readMountinfo: n2?.readMountinfo });
      return { command: "/bin/sh", args: ["-c", y, u, a2, e2, ...t2], options: { ...r2, cwd: l2 }, hopped: true, hopCwd: a2 };
    }
    function P(e2 = process.env) {
      return "1" === e2[c];
    }
    const M = "exec_daemon.spawn.cwd_hop", R = "exec_daemon.spawn.cwd_hop_cd_failed";
    function O(e2) {
      return { cwdKind: C(e2) ? "agent_store_fuse" : "fuse", cwdHash: (0, n.createHash)("sha256").update(e2, "utf8").digest("hex").slice(0, 12) };
    }
    function D(e2, t2 = process.env) {
      return P(t2) && void 0 !== e2 && T(e2);
    }
    function N(e2) {
      return `working directory is not accessible: ${i.resolve(e2)}`;
    }
    function F(e2) {
      return D(e2.cwd, e2.env) && e2.exitCode === d && e2.stdoutBytes === p.length && ("string" == typeof (t2 = e2.stdoutPrefix) ? t2 === p : Buffer.from(t2).equals(Buffer.from(p)));
      var t2;
    }
    function L(e2) {
      const t2 = new Error(N(e2));
      return t2.code = "ENOENT", t2;
    }
    function U(e2, t2) {
      return e2 instanceof Error && "ENOENT" === e2.code && e2.message === N(t2);
    }
    function B(e2, t2) {
      if ("object" != typeof e2 || null === e2 || !("status" in e2)) return false;
      const r2 = e2, n2 = (function(e3) {
        if (null == e3.stdout) return { bytes: 0, prefix: Buffer.alloc(0) };
        const t3 = "string" == typeof e3.stdout ? Buffer.from(e3.stdout) : f([e3.stdout]);
        return { bytes: t3.length, prefix: t3.subarray(0, m) };
      })(r2);
      return F({ exitCode: "number" == typeof r2.status ? r2.status : null, stdoutBytes: n2.bytes, stdoutPrefix: n2.prefix, cwd: t2 });
    }
    function $(e2) {
      return "object" == typeof e2 && null !== e2 && "emit" in e2 && "function" == typeof e2.emit && "on" in e2 && "function" == typeof e2.on && "stdout" in e2 && "stdin" in e2;
    }
    function q(e2, t2) {
      if (B(e2, t2)) throw L(t2);
      throw e2;
    }
    function j(e2, t2) {
      return $(e2) ? ((function(e3, t3) {
        const r3 = new g(), n2 = new a.PassThrough();
        let o2, s2 = false;
        const i2 = e3.stdout, l2 = e3.emit.bind(e3), c2 = (e4) => {
          if (e4) r3.takeHeld();
          else {
            const e5 = r3.takeHeld();
            void 0 === e5 || n2.writableEnded || n2.write(e5);
          }
          n2.writableEnded || n2.end();
        }, u2 = (e4) => {
          const t4 = e4?.[0];
          return null === t4 || "number" == typeof t4 ? t4 : null;
        }, p2 = (e4) => F({ exitCode: u2(e4), stdoutBytes: r3.bytes, stdoutPrefix: r3.stdoutPrefix, cwd: t3 }), h2 = () => (s2 = true, c2(true), l2("error", L(t3))), m2 = () => {
          void 0 !== o2 && u2(o2) === d && (l2("exit", ...o2), o2 = void 0);
        };
        i2 && (i2.on("data", (e4) => {
          if (s2) return;
          const t4 = r3.note(e4);
          if (void 0 !== t4) return n2.write(t4), void m2();
          p2(o2) && h2();
        }), i2.on("error", (e4) => {
          n2.destroy(e4);
        }), Object.defineProperty(e3, "stdout", { configurable: true, enumerable: true, get: () => n2 })), e3.emit = (e4, ...t4) => s2 ? "exit" !== e4 && "close" !== e4 && l2(e4, ...t4) : "exit" === e4 ? (o2 = t4, u2(t4) !== d ? l2(e4, ...t4) : p2(t4) ? h2() : !(!r3.diverged && null != i2) && (o2 = void 0, l2(e4, ...t4))) : "close" === e4 ? p2(t4) || p2(o2) ? h2() : (c2(false), m2(), l2(e4, ...t4)) : l2(e4, ...t4);
      })(e2, t2), e2) : "object" == typeof (r2 = e2) && null !== r2 && !$(r2) && "onData" in r2 && "function" == typeof r2.onData && "onExit" in r2 && "function" == typeof r2.onExit ? ((function(e3, t3) {
        const r3 = new g(), n2 = [], o2 = e3.onData.bind(e3), s2 = e3.onExit.bind(e3);
        e3.onData = (e4) => (n2.push(e4), o2((t4) => {
          const n3 = "string" == typeof t4 ? Buffer.from(t4) : t4, o3 = r3.note(n3);
          void 0 !== o3 && e4("string" == typeof t4 ? o3.toString("utf8") : o3);
        })), e3.onExit = (e4) => s2((o3) => {
          const s3 = r3.takeHeld();
          if (F({ exitCode: o3.exitCode, stdoutBytes: r3.bytes, stdoutPrefix: r3.stdoutPrefix, cwd: t3 })) e4(o3);
          else {
            if (void 0 !== s3) for (const e5 of n2) e5(s3);
            e4(o3);
          }
        });
      })(e2, t2), e2) : (function(e3) {
        return "object" == typeof e3 && null !== e3 && "then" in e3 && "function" == typeof e3.then;
      })(e2) ? e2.then((e3) => e3, (e3) => q(e3, t2)) : e2;
      var r2;
    }
  }