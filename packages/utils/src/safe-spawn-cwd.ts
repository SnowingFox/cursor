// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/safe-spawn-cwd.js" range:1317416..1323176
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:crypto";
import * as __dep1 from "node:fs";
import * as __dep2 from "node:os";
import * as __dep3 from "node:path";
import * as __dep4 from "node:stream";
var n = __dep0,
  o = __dep1,
  s = __dep2,
  i = __dep3,
  a = __dep4;
const c = "/cursor/stores",
  l = "cursor-fuse-cwd",
  u = "cursor-fuse-cwd:cd",
  d = Buffer.from(u);
function h(e) {
  return Buffer.from(Buffer.concat(e));
}
class p {
  constructor() {
    this.held = Buffer.alloc(0), this.released = !1, this.seen = 0, this.prefix = Buffer.alloc(0);
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
  note(e) {
    const t = Buffer.from(e);
    if (this.seen += t.length, this.prefix.length < 32) {
      const e = Math.min(t.length, 32 - this.prefix.length);
      this.prefix = h([this.prefix, t.subarray(0, e)]);
    }
    if (this.released) return t;
    const r = h([this.held, t]);
    if (!(r.length <= d.length && d.subarray(0, r.length).equals(r))) return this.released = !0, this.held = Buffer.alloc(0), r;
    this.held = r;
  }
  takeHeld() {
    if (0 === this.held.length) return void (this.released = !0);
    const e = this.held;
    return this.held = Buffer.alloc(0), this.released = !0, e;
  }
}
const f = `cd "$1" || { printf %s '${u}'; exit 79; }; shift; exec "$@"`;
let m,
  g,
  w = function () {
    try {
      return (0, o.readFileSync)("/proc/self/mountinfo", "utf8");
    } catch {
      return;
    }
  };
function y(e, t) {
  return "/" === t || e === t || e.startsWith(`${t}/`);
}
function v(e, t) {
  const r = function (e) {
    return e?.readMountinfo ?? w;
  }(t)();
  if (void 0 === r) return !1;
  const n = function (e, t) {
    let r;
    for (const n of t) y(e, n.mountPoint) && (void 0 === r || n.mountPoint.length >= r.mountPoint.length) && (r = n);
    return r;
  }(i.default.resolve(e), function (e) {
    return m === e && void 0 !== g || (m = e, g = function (e) {
      const t = [];
      for (const o of e.split("\n")) {
        if (0 === o.length) continue;
        const e = o.split(" ");
        if (e.length < 10) continue;
        let s = -1;
        for (let t = 6; t < e.length; t++) if ("-" === e[t]) {
          s = t;
          break;
        }
        const i = e[4],
          a = -1 === s ? void 0 : e[s + 1];
        void 0 !== i && void 0 !== a && 0 !== a.length && t.push({
          mountPoint: (n = i, r = n.replace(/\\([0-7]{3})/g, (e, t) => String.fromCharCode(Number.parseInt(t, 8))), "/" === r ? "/" : r.replace(/\/+$/, "")),
          fstype: a
        });
      }
      var r, n;
      return t;
    }(e)), g;
  }(r));
  return void 0 !== n && ("fuse" === (o = n.fstype) || "fuseblk" === o || o.startsWith("fuse."));
  var o;
}
function b(e) {
  const t = i.default.resolve(e);
  return t === c || t.startsWith(`${c}/`);
}
function S(e) {
  const t = e?.processCwd ?? process.cwd();
  return "linux" === (e?.platform ?? process.platform) && v(t, e) ? e?.tmpdir ?? (0, s.tmpdir)() : t;
}
function k(e, t, r, n) {
  const o = n?.platform ?? process.platform,
    s = r?.cwd;
  if ("linux" !== o || void 0 === s || r?.shell || !v(s, n)) return {
    command: e,
    args: [...t],
    options: r,
    hopped: !1
  };
  const a = i.default.resolve(s),
    c = S({
      processCwd: n?.processCwd,
      tmpdir: n?.tmpdir,
      platform: o,
      readMountinfo: n?.readMountinfo
    });
  return {
    command: "/bin/sh",
    args: ["-c", f, l, a, e, ...t],
    options: {
      ...r,
      cwd: c
    },
    hopped: !0,
    hopCwd: a
  };
}
function _(e = process.env) {
  return "1" === e.CURSOR_SPAWN_CWD_HOP;
}
const C = "exec_daemon.spawn.cwd_hop",
  E = "exec_daemon.spawn.cwd_hop_cd_failed";
function x(e) {
  return {
    cwdKind: b(e) ? "agent_store_fuse" : "fuse",
    cwdHash: (0, n.createHash)("sha256").update(e, "utf8").digest("hex").slice(0, 12)
  };
}
function P(e, t = process.env) {
  return _(t) && void 0 !== e && v(e);
}
function I(e) {
  return `working directory is not accessible: ${i.default.resolve(e)}`;
}
function R(e) {
  return P(e.cwd, e.env) && 79 === e.exitCode && 18 === e.stdoutBytes && ("string" == typeof (t = e.stdoutPrefix) ? t === u : Buffer.from(t).equals(Buffer.from(u)));
  var t;
}
function T(e) {
  const t = new Error(I(e));
  return t.code = "ENOENT", t;
}
function A(e, t) {
  return e instanceof Error && "ENOENT" === e.code && e.message === I(t);
}
function $(e) {
  return "object" == typeof e && null !== e && "emit" in e && "function" == typeof e.emit && "on" in e && "function" == typeof e.on && "stdout" in e && "stdin" in e;
}
function M(e, t) {
  if (function (e, t) {
    if ("object" != typeof e || null === e || !("status" in e)) return !1;
    const r = e.status,
      n = "stdout" in e ? e.stdout : void 0,
      o = {
        status: "number" == typeof r || null === r ? r : void 0,
        stdout: "string" == typeof n || n instanceof Uint8Array || null === n ? n : void 0
      },
      s = function (e) {
        if (null == e.stdout) return {
          bytes: 0,
          prefix: Buffer.alloc(0)
        };
        const t = "string" == typeof e.stdout ? Buffer.from(e.stdout) : h([e.stdout]);
        return {
          bytes: t.length,
          prefix: t.subarray(0, 32)
        };
      }(o);
    return R({
      exitCode: "number" == typeof o.status ? o.status : null,
      stdoutBytes: s.bytes,
      stdoutPrefix: s.prefix,
      cwd: t
    });
  }(e, t)) throw T(t);
  throw e;
}
function D(e, t) {
  if ($(e)) return function (e, t) {
    const r = new p(),
      n = new a.PassThrough();
    let o,
      s = !1;
    const i = e.stdout,
      c = e.emit.bind(e),
      l = e => {
        if (e) r.takeHeld();else {
          const e = r.takeHeld();
          void 0 === e || n.writableEnded || n.write(e);
        }
        n.writableEnded || n.end();
      },
      u = e => {
        const t = e?.[0];
        return null === t || "number" == typeof t ? t : null;
      },
      d = e => R({
        exitCode: u(e),
        stdoutBytes: r.bytes,
        stdoutPrefix: r.stdoutPrefix,
        cwd: t
      }),
      h = () => (s = !0, l(!0), c("error", T(t))),
      f = () => {
        void 0 !== o && 79 === u(o) && (c("exit", ...o), o = void 0);
      };
    i && (i.on("data", e => {
      if (s) return;
      const t = r.note(e);
      if (void 0 !== t) return n.write(t), void f();
      d(o) && h();
    }), i.on("error", e => {
      n.destroy(e);
    }), Object.defineProperty(e, "stdout", {
      configurable: !0,
      enumerable: !0,
      get: () => n
    })), e.emit = (e, ...t) => s ? "exit" !== e && "close" !== e && c(e, ...t) : "exit" === e ? (o = t, 79 !== u(t) ? c(e, ...t) : d(t) ? h() : !(!r.diverged && null != i) && (o = void 0, c(e, ...t))) : "close" === e ? d(t) || d(o) ? h() : (l(!1), f(), c(e, ...t)) : c(e, ...t);
  }(e, t), e;
  if ("object" == typeof (r = e) && null !== r && !$(r) && "onData" in r && "function" == typeof r.onData && "onExit" in r && "function" == typeof r.onExit) return function (e, t) {
    const r = new p(),
      n = [],
      o = e.onData.bind(e),
      s = e.onExit.bind(e);
    e.onData = e => (n.push(e), o(t => {
      const n = "string" == typeof t ? Buffer.from(t) : t,
        o = r.note(n);
      void 0 !== o && e("string" == typeof t ? o.toString("utf8") : o);
    })), e.onExit = e => s(o => {
      const s = r.takeHeld();
      if (R({
        exitCode: o.exitCode,
        stdoutBytes: r.bytes,
        stdoutPrefix: r.stdoutPrefix,
        cwd: t
      })) e(o);else {
        if (void 0 !== s) for (const e of n) e(s);
        e(o);
      }
    });
  }(e, t), e;
  var r;
  if (function (e) {
    return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then;
  }(e)) {
    const r = e.then(e => e, e => M(e, t));
    return r;
  }
  return e;
}
export { P as $Y, b as $f, v as A, S as D1, E as Gq, l as Gw, M as KX, f as N6, T as Vn, p as Zv, A as fK, x as iA, k as mM, _ as qr, D as wr, R as wz, C as yo };
