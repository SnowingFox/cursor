// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 87199 range:11096713..11105145
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87199: (e, t, r) => {
    "use strict";
    r.d(t, { $Y: () => O, $f: () => T, A: () => I, D1: () => C, Gq: () => M, Gw: () => u, KX: () => L, N6: () => y, Vn: () => q, Zv: () => g, fK: () => N, iA: () => J, mM: () => P, qr: () => A, wr: () => $, wz: () => D, yo: () => R });
    var n = r(77598), s = r(73024), o = r(48161), i = r(76760), a = r(57075);
    const c = "/cursor/stores", l = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", d = 79, p = "cursor-fuse-cwd:cd", m = Buffer.from(p), h = 32;
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
        if (this.seen += t2.length, this.prefix.length < h) {
          const e3 = Math.min(t2.length, h - this.prefix.length);
          this.prefix = f([this.prefix, t2.subarray(0, e3)]);
        }
        if (this.released) return t2;
        const r2 = f([this.held, t2]);
        if (!(r2.length <= m.length && m.subarray(0, r2.length).equals(r2))) return this.released = true, this.held = Buffer.alloc(0), r2;
        this.held = r2;
      }
      takeHeld() {
        if (0 === this.held.length) return void (this.released = true);
        const e2 = this.held;
        return this.held = Buffer.alloc(0), this.released = true, e2;
      }
    }
    const y = `cd "$1" || { printf %s '${p}'; exit ${d}; }; shift; exec "$@"`;
    function w() {
      try {
        return (0, s.readFileSync)("/proc/self/mountinfo", "utf8");
      } catch {
        return;
      }
    }
    let v, _, b = w;
    function S(e2) {
      return e2.replace(/\\([0-7]{3})/g, (e3, t2) => String.fromCharCode(Number.parseInt(t2, 8)));
    }
    function k(e2) {
      return "/" === e2 ? "/" : e2.replace(/\/+$/, "");
    }
    function x(e2, t2) {
      return "/" === t2 || e2 === t2 || e2.startsWith(`${t2}/`);
    }
    function E(e2) {
      return v === e2 && void 0 !== _ || (v = e2, _ = (function(e3) {
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
          const s2 = e4[4], o2 = -1 === n2 ? void 0 : e4[n2 + 1];
          void 0 !== s2 && void 0 !== o2 && 0 !== o2.length && t2.push({ mountPoint: k(S(s2)), fstype: o2 });
        }
        return t2;
      })(e2)), _;
    }
    function I(e2, t2) {
      const r2 = (function(e3) {
        return e3?.readMountinfo ?? b;
      })(t2)();
      if (void 0 === r2) return false;
      const n2 = (function(e3, t3) {
        let r3;
        for (const n3 of t3) x(e3, n3.mountPoint) && (void 0 === r3 || n3.mountPoint.length >= r3.mountPoint.length) && (r3 = n3);
        return r3;
      })(i.resolve(e2), E(r2));
      return void 0 !== n2 && ("fuse" === (s2 = n2.fstype) || "fuseblk" === s2 || s2.startsWith("fuse."));
      var s2;
    }
    function T(e2) {
      const t2 = i.resolve(e2);
      return t2 === c || t2.startsWith(`${c}/`);
    }
    function C(e2) {
      const t2 = e2?.processCwd ?? process.cwd();
      return "linux" === (e2?.platform ?? process.platform) && I(t2, e2) ? e2?.tmpdir ?? (0, o.tmpdir)() : t2;
    }
    function P(e2, t2, r2, n2) {
      const s2 = n2?.platform ?? process.platform, o2 = r2?.cwd;
      if ("linux" !== s2 || void 0 === o2 || r2?.shell || !I(o2, n2)) return { command: e2, args: [...t2], options: r2, hopped: false };
      const a2 = i.resolve(o2), c2 = C({ processCwd: n2?.processCwd, tmpdir: n2?.tmpdir, platform: s2, readMountinfo: n2?.readMountinfo });
      return { command: "/bin/sh", args: ["-c", y, u, a2, e2, ...t2], options: { ...r2, cwd: c2 }, hopped: true, hopCwd: a2 };
    }
    function A(e2 = process.env) {
      return "1" === e2[l];
    }
    const R = "exec_daemon.spawn.cwd_hop", M = "exec_daemon.spawn.cwd_hop_cd_failed";
    function J(e2) {
      return { cwdKind: T(e2) ? "agent_store_fuse" : "fuse", cwdHash: (0, n.createHash)("sha256").update(e2, "utf8").digest("hex").slice(0, 12) };
    }
    function O(e2, t2 = process.env) {
      return A(t2) && void 0 !== e2 && I(e2);
    }
    function B(e2) {
      return `working directory is not accessible: ${i.resolve(e2)}`;
    }
    function D(e2) {
      return O(e2.cwd, e2.env) && e2.exitCode === d && e2.stdoutBytes === p.length && ("string" == typeof (t2 = e2.stdoutPrefix) ? t2 === p : Buffer.from(t2).equals(Buffer.from(p)));
      var t2;
    }
    function q(e2) {
      const t2 = new Error(B(e2));
      return t2.code = "ENOENT", t2;
    }
    function N(e2, t2) {
      return e2 instanceof Error && "ENOENT" === e2.code && e2.message === B(t2);
    }
    function F(e2, t2) {
      if ("object" != typeof e2 || null === e2 || !("status" in e2)) return false;
      const r2 = e2, n2 = (function(e3) {
        if (null == e3.stdout) return { bytes: 0, prefix: Buffer.alloc(0) };
        const t3 = "string" == typeof e3.stdout ? Buffer.from(e3.stdout) : f([e3.stdout]);
        return { bytes: t3.length, prefix: t3.subarray(0, h) };
      })(r2);
      return D({ exitCode: "number" == typeof r2.status ? r2.status : null, stdoutBytes: n2.bytes, stdoutPrefix: n2.prefix, cwd: t2 });
    }
    function U(e2) {
      return "object" == typeof e2 && null !== e2 && "emit" in e2 && "function" == typeof e2.emit && "on" in e2 && "function" == typeof e2.on && "stdout" in e2 && "stdin" in e2;
    }
    function L(e2, t2) {
      if (F(e2, t2)) throw q(t2);
      throw e2;
    }
    function $(e2, t2) {
      return U(e2) ? ((function(e3, t3) {
        const r3 = new g(), n2 = new a.PassThrough();
        let s2, o2 = false;
        const i2 = e3.stdout, c2 = e3.emit.bind(e3), l2 = (e4) => {
          if (e4) r3.takeHeld();
          else {
            const e5 = r3.takeHeld();
            void 0 === e5 || n2.writableEnded || n2.write(e5);
          }
          n2.writableEnded || n2.end();
        }, u2 = (e4) => {
          const t4 = e4?.[0];
          return null === t4 || "number" == typeof t4 ? t4 : null;
        }, p2 = (e4) => D({ exitCode: u2(e4), stdoutBytes: r3.bytes, stdoutPrefix: r3.stdoutPrefix, cwd: t3 }), m2 = () => (o2 = true, l2(true), c2("error", q(t3))), h2 = () => {
          void 0 !== s2 && u2(s2) === d && (c2("exit", ...s2), s2 = void 0);
        };
        i2 && (i2.on("data", (e4) => {
          if (o2) return;
          const t4 = r3.note(e4);
          if (void 0 !== t4) return n2.write(t4), void h2();
          p2(s2) && m2();
        }), i2.on("error", (e4) => {
          n2.destroy(e4);
        }), Object.defineProperty(e3, "stdout", { configurable: true, enumerable: true, get: () => n2 })), e3.emit = (e4, ...t4) => o2 ? "exit" !== e4 && "close" !== e4 && c2(e4, ...t4) : "exit" === e4 ? (s2 = t4, u2(t4) !== d ? c2(e4, ...t4) : p2(t4) ? m2() : !(!r3.diverged && null != i2) && (s2 = void 0, c2(e4, ...t4))) : "close" === e4 ? p2(t4) || p2(s2) ? m2() : (l2(false), h2(), c2(e4, ...t4)) : c2(e4, ...t4);
      })(e2, t2), e2) : "object" == typeof (r2 = e2) && null !== r2 && !U(r2) && "onData" in r2 && "function" == typeof r2.onData && "onExit" in r2 && "function" == typeof r2.onExit ? ((function(e3, t3) {
        const r3 = new g(), n2 = [], s2 = e3.onData.bind(e3), o2 = e3.onExit.bind(e3);
        e3.onData = (e4) => (n2.push(e4), s2((t4) => {
          const n3 = "string" == typeof t4 ? Buffer.from(t4) : t4, s3 = r3.note(n3);
          void 0 !== s3 && e4("string" == typeof t4 ? s3.toString("utf8") : s3);
        })), e3.onExit = (e4) => o2((s3) => {
          const o3 = r3.takeHeld();
          if (D({ exitCode: s3.exitCode, stdoutBytes: r3.bytes, stdoutPrefix: r3.stdoutPrefix, cwd: t3 })) e4(s3);
          else {
            if (void 0 !== o3) for (const e5 of n2) e5(o3);
            e4(s3);
          }
        });
      })(e2, t2), e2) : (function(e3) {
        return "object" == typeof e3 && null !== e3 && "then" in e3 && "function" == typeof e3.then;
      })(e2) ? e2.then((e3) => e3, (e3) => L(e3, t2)) : e2;
      var r2;
    }
  }