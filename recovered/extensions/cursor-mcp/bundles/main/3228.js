// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3228 range:247833..255779
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3228: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $f: () => T, Gw: () => u, KX: () => N, N6: () => g, mM: () => O, qr: () => P, wr: () => M });
    r2(7598);
    var n2 = r2(3024), o2 = r2(8161), s2 = r2(6760), i2 = r2(7075);
    const a2 = "/cursor/stores", c = "CURSOR_SPAWN_CWD_HOP", u = "cursor-fuse-cwd", l = 79, d = "cursor-fuse-cwd:cd", p = Buffer.from(d), f = 32;
    function h(e3) {
      return Buffer.from(Buffer.concat(e3));
    }
    class m {
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
      note(e3) {
        const t3 = Buffer.from(e3);
        if (this.seen += t3.length, this.prefix.length < f) {
          const e4 = Math.min(t3.length, f - this.prefix.length);
          this.prefix = h([this.prefix, t3.subarray(0, e4)]);
        }
        if (this.released) return t3;
        const r3 = h([this.held, t3]);
        if (!(r3.length <= p.length && p.subarray(0, r3.length).equals(r3))) return this.released = true, this.held = Buffer.alloc(0), r3;
        this.held = r3;
      }
      takeHeld() {
        if (0 === this.held.length) return void (this.released = true);
        const e3 = this.held;
        return this.held = Buffer.alloc(0), this.released = true, e3;
      }
    }
    const g = `cd "$1" || { printf %s '${d}'; exit ${l}; }; shift; exec "$@"`;
    function y() {
      try {
        return (0, n2.readFileSync)("/proc/self/mountinfo", "utf8");
      } catch {
        return;
      }
    }
    let _, v, w = y;
    function b(e3) {
      return e3.replace(/\\([0-7]{3})/g, (e4, t3) => String.fromCharCode(Number.parseInt(t3, 8)));
    }
    function S(e3) {
      return "/" === e3 ? "/" : e3.replace(/\/+$/, "");
    }
    function k(e3, t3) {
      return "/" === t3 || e3 === t3 || e3.startsWith(`${t3}/`);
    }
    function E(e3) {
      return _ === e3 && void 0 !== v || (_ = e3, v = (function(e4) {
        const t3 = [];
        for (const r3 of e4.split("\n")) {
          if (0 === r3.length) continue;
          const e5 = r3.split(" ");
          if (e5.length < 10) continue;
          let n3 = -1;
          for (let t4 = 6; t4 < e5.length; t4++) if ("-" === e5[t4]) {
            n3 = t4;
            break;
          }
          const o3 = e5[4], s3 = -1 === n3 ? void 0 : e5[n3 + 1];
          void 0 !== o3 && void 0 !== s3 && 0 !== s3.length && t3.push({ mountPoint: S(b(o3)), fstype: s3 });
        }
        return t3;
      })(e3)), v;
    }
    function x(e3, t3) {
      const r3 = (function(e4) {
        return e4?.readMountinfo ?? w;
      })(t3)();
      if (void 0 === r3) return false;
      const n3 = (function(e4, t4) {
        let r4;
        for (const n4 of t4) k(e4, n4.mountPoint) && (void 0 === r4 || n4.mountPoint.length >= r4.mountPoint.length) && (r4 = n4);
        return r4;
      })(s2.resolve(e3), E(r3));
      return void 0 !== n3 && ("fuse" === (o3 = n3.fstype) || "fuseblk" === o3 || o3.startsWith("fuse."));
      var o3;
    }
    function T(e3) {
      const t3 = s2.resolve(e3);
      return t3 === a2 || t3.startsWith(`${a2}/`);
    }
    function O(e3, t3, r3, n3) {
      const i3 = n3?.platform ?? process.platform, a3 = r3?.cwd;
      if ("linux" !== i3 || void 0 === a3 || r3?.shell || !x(a3, n3)) return { command: e3, args: [...t3], options: r3, hopped: false };
      const c2 = s2.resolve(a3), l2 = (function(e4) {
        const t4 = e4?.processCwd ?? process.cwd();
        return "linux" === (e4?.platform ?? process.platform) && x(t4, e4) ? e4?.tmpdir ?? (0, o2.tmpdir)() : t4;
      })({ processCwd: n3?.processCwd, tmpdir: n3?.tmpdir, platform: i3, readMountinfo: n3?.readMountinfo });
      return { command: "/bin/sh", args: ["-c", g, u, c2, e3, ...t3], options: { ...r3, cwd: l2 }, hopped: true, hopCwd: c2 };
    }
    function P(e3 = process.env) {
      return "1" === e3[c];
    }
    function I(e3) {
      return `working directory is not accessible: ${s2.resolve(e3)}`;
    }
    function C(e3) {
      return (function(e4, t4 = process.env) {
        return P(t4) && void 0 !== e4 && x(e4);
      })(e3.cwd, e3.env) && e3.exitCode === l && e3.stdoutBytes === d.length && ("string" == typeof (t3 = e3.stdoutPrefix) ? t3 === d : Buffer.from(t3).equals(Buffer.from(d)));
      var t3;
    }
    function A(e3) {
      const t3 = new Error(I(e3));
      return t3.code = "ENOENT", t3;
    }
    function $(e3, t3) {
      if ("object" != typeof e3 || null === e3 || !("status" in e3)) return false;
      const r3 = e3, n3 = (function(e4) {
        if (null == e4.stdout) return { bytes: 0, prefix: Buffer.alloc(0) };
        const t4 = "string" == typeof e4.stdout ? Buffer.from(e4.stdout) : h([e4.stdout]);
        return { bytes: t4.length, prefix: t4.subarray(0, f) };
      })(r3);
      return C({ exitCode: "number" == typeof r3.status ? r3.status : null, stdoutBytes: n3.bytes, stdoutPrefix: n3.prefix, cwd: t3 });
    }
    function R(e3) {
      return "object" == typeof e3 && null !== e3 && "emit" in e3 && "function" == typeof e3.emit && "on" in e3 && "function" == typeof e3.on && "stdout" in e3 && "stdin" in e3;
    }
    function N(e3, t3) {
      if ($(e3, t3)) throw A(t3);
      throw e3;
    }
    function M(e3, t3) {
      return R(e3) ? ((function(e4, t4) {
        const r4 = new m(), n3 = new i2.PassThrough();
        let o3, s3 = false;
        const a3 = e4.stdout, c2 = e4.emit.bind(e4), u2 = (e5) => {
          if (e5) r4.takeHeld();
          else {
            const e6 = r4.takeHeld();
            void 0 === e6 || n3.writableEnded || n3.write(e6);
          }
          n3.writableEnded || n3.end();
        }, d2 = (e5) => {
          const t5 = e5?.[0];
          return null === t5 || "number" == typeof t5 ? t5 : null;
        }, p2 = (e5) => C({ exitCode: d2(e5), stdoutBytes: r4.bytes, stdoutPrefix: r4.stdoutPrefix, cwd: t4 }), f2 = () => (s3 = true, u2(true), c2("error", A(t4))), h2 = () => {
          void 0 !== o3 && d2(o3) === l && (c2("exit", ...o3), o3 = void 0);
        };
        a3 && (a3.on("data", (e5) => {
          if (s3) return;
          const t5 = r4.note(e5);
          if (void 0 !== t5) return n3.write(t5), void h2();
          p2(o3) && f2();
        }), a3.on("error", (e5) => {
          n3.destroy(e5);
        }), Object.defineProperty(e4, "stdout", { configurable: true, enumerable: true, get: () => n3 })), e4.emit = (e5, ...t5) => s3 ? "exit" !== e5 && "close" !== e5 && c2(e5, ...t5) : "exit" === e5 ? (o3 = t5, d2(t5) !== l ? c2(e5, ...t5) : p2(t5) ? f2() : !(!r4.diverged && null != a3) && (o3 = void 0, c2(e5, ...t5))) : "close" === e5 ? p2(t5) || p2(o3) ? f2() : (u2(false), h2(), c2(e5, ...t5)) : c2(e5, ...t5);
      })(e3, t3), e3) : "object" == typeof (r3 = e3) && null !== r3 && !R(r3) && "onData" in r3 && "function" == typeof r3.onData && "onExit" in r3 && "function" == typeof r3.onExit ? ((function(e4, t4) {
        const r4 = new m(), n3 = [], o3 = e4.onData.bind(e4), s3 = e4.onExit.bind(e4);
        e4.onData = (e5) => (n3.push(e5), o3((t5) => {
          const n4 = "string" == typeof t5 ? Buffer.from(t5) : t5, o4 = r4.note(n4);
          void 0 !== o4 && e5("string" == typeof t5 ? o4.toString("utf8") : o4);
        })), e4.onExit = (e5) => s3((o4) => {
          const s4 = r4.takeHeld();
          if (C({ exitCode: o4.exitCode, stdoutBytes: r4.bytes, stdoutPrefix: r4.stdoutPrefix, cwd: t4 })) e5(o4);
          else {
            if (void 0 !== s4) for (const e6 of n3) e6(s4);
            e5(o4);
          }
        });
      })(e3, t3), e3) : (function(e4) {
        return "object" == typeof e4 && null !== e4 && "then" in e4 && "function" == typeof e4.then;
      })(e3) ? e3.then((e4) => e4, (e4) => N(e4, t3)) : e3;
      var r3;
    }
  }