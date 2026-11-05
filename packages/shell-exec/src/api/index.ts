// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../shell-exec/dist/api/index.js" range:1139413..1292928
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:perf_hooks";
import * as __dep1 from "node:path";
import * as __dep2 from "node:fs";
import * as __dep3 from "@anysphere/utils/lru-cache";
import * as __dep4 from "node:crypto";
import * as __dep5 from "node:os";
import * as __dep6 from "@anysphere/utils/workspace-paths";
import * as __dep7 from "@anysphere/utils/test-resets";
import * as __dep8 from "node:fs/promises";
import * as __dep9 from "node:child_process";
import * as __dep10 from "node:string_decoder";
import * as __dep11 from "rxjs";
import * as __dep12 from "ignore";
import * as __dep13 from "@anysphere/utils/path-utils";
import * as __dep14 from "@anysphere/utils/safe-spawn-cwd";
import * as __dep15 from "@anysphere/utils/workload-spawn";
import * as __dep16 from "@anysphere/context/logger";
import * as __dep17 from "@anysphere/context/core";
import * as __dep18 from "node:stream";
import * as __dep19 from "@anysphere/context/otel";
import * as __dep20 from "@anysphere/utils/writable-iterable";
const n = ["SSH_CLIENT", "SSH2_CLIENT"];
function o(e) {
  const t = e || process.env,
    {
      ELECTRON_RUN_AS_NODE: r,
      ...o
    } = t;
  for (const e of Object.keys(o)) e.startsWith("AGENT_HOST_DAEMON_") && delete o[e];
  for (const e of n) delete o[e];
  return o;
}
const s = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];
function i(e) {
  const t = {
    ...e
  };
  for (const e of s) delete t[e];
  return t;
}
const a = [["core.quotePath", "false"]];
function c(e) {
  const t = function (e) {
      const t = e.GIT_CONFIG_COUNT;
      if (void 0 === t || "" === t) return 0;
      const r = Number.parseInt(t, 10);
      return Number.isFinite(r) && r >= 0 ? r : 0;
    }(e),
    r = new Set();
  for (let n = 0; n < t; n++) {
    const t = e[`GIT_CONFIG_KEY_${n}`];
    void 0 !== t && r.add(t.toLowerCase());
  }
  let n = t;
  for (const [t, o] of a) r.has(t.toLowerCase()) || (e[`GIT_CONFIG_KEY_${n}`] = t, e[`GIT_CONFIG_VALUE_${n}`] = o, n++);
  n !== t && (e.GIT_CONFIG_COUNT = String(n));
}
var l,
  u = __dep0;
!function (e) {
  e[e.SampleIntervalMs = 250] = "SampleIntervalMs", e[e.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
}(l || (l = {})), u.monitorEventLoopDelay;
const d = "\n[This shell is producing too much output to stream. The command will still run.]\n";
var h = __dep1,
  p = __dep2,
  f = __dep3;
const m = "undefined" != typeof process && "win32" === process.platform,
  g = new f.q({
    max: 512
  });
function w(e) {
  try {
    return p.statSync(e);
  } catch {
    return null;
  }
}
function y(e, t) {
  if (e.match(/[\\/]/)) return e;
  const r = t ? `${e}\0${t.source}\0${t.flags}` : e,
    n = g.get(r);
  if (void 0 !== n) return n;
  const o = h.join(".", e);
  if (w(o)) return g.set(r, o), o;
  const s = process.env.PATH.split(m ? ";" : ":");
  for (const n of s) {
    const o = h.join(n, e);
    if (w(o) && (!t || t.test(o))) return g.set(r, o), o;
  }
  return g.set(r, e), e;
}
function v(e, t, r) {
  if ("win32" !== process.platform) return {
    cmd: y(e),
    args: t
  };
  if (!p.existsSync(e)) {
    const n = [".exe", ".bat", ".cmd", ".ps1"],
      o = e.toLowerCase();
    if (n.some(e => o.endsWith(e))) {
      const n = y(e, r);
      if (p.existsSync(n)) return v(n, t, r);
    }
    for (const o of n) {
      const n = y(`${e}${o}`, r);
      if (p.existsSync(n)) return v(n, t, r);
    }
  }
  return e.match(/\.ps1$/i) ? {
    cmd: h.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
    args: ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", e].concat(t)
  } : e.match(/\.(bat|cmd)$/i) ? {
    cmd: h.join(process.env.SYSTEMROOT, "System32", "cmd.exe"),
    args: ["/C", e, ...t]
  } : e.match(/\.(js)$/i) ? {
    cmd: process.execPath,
    args: [e].concat(t)
  } : {
    cmd: e,
    args: t
  };
}
let b;
const S = ["/usr/local/bin", "/usr/bin", "/bin"];
function k() {
  const e = v("rg", []).cmd;
  return "rg" !== e ? e : void 0;
}
function _(e) {
  if (!e) throw new Error("configureRipgrepPath: path must not be empty");
  b = e;
}
function C(e) {
  const t = Object.keys(e).filter(e => "path" === e.toLowerCase());
  if (0 !== t.length) return "win32" === process.platform ? t.find(e => "Path" === e) ?? t[0] : t.find(e => "PATH" === e) ?? t[0];
}
function E(e, t) {
  const r = (0, h.dirname)(t);
  if (!r || "." === r) return e;
  let n = function (e) {
    const t = C(e);
    return void 0 !== t ? e[t] ?? "" : "";
  }(e).split(h.delimiter).filter(Boolean);
  return 0 === n.length && "win32" !== process.platform && (n = S), function (e, t) {
    const r = C(e) ?? ("win32" === process.platform ? "Path" : "PATH"),
      n = {
        ...e
      };
    for (const e of Object.keys(n)) e !== r && "path" === e.toLowerCase() && delete n[e];
    return n[r] = t, n;
  }(e, [r, ...n.filter(e => e !== r)].join(h.delimiter));
}
function x(e) {
  return b && (0, h.isAbsolute)(b) ? {
    ...E(e, b),
    CURSOR_RIPGREP_PATH: b
  } : e;
}
function P() {
  if (!b) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
  return b;
}
const I = "win32" === process.platform;
function R(e) {
  return !I && !!e?.SUDO_ASKPASS;
}
function T(e) {
  return R(e) ? "alias sudo='sudo -A'; " : "";
}
function A(e) {
  const t = [];
  let r = 0;
  for (; r < e.length;) {
    const n = 0 === r || "&&" === e.slice(Math.max(0, r - 2), r) || "||" === e.slice(Math.max(0, r - 2), r) || "|" === e[r - 1] || ";" === e[r - 1],
      o = Math.max(0, r - 10),
      s = e.slice(o, r),
      i = /(?:&&|\|\||[|;])\s*$/.test(s) || 0 === r && /^\s*$/.test(s);
    if ((n || i) && "sudo" === e.slice(r, r + 4)) {
      const n = r + 4;
      if (n >= e.length || /\s/.test(e[n])) {
        let o = n;
        for (; o < e.length && /\s/.test(e[o]);) o++;
        let s = !1;
        if (o < e.length && "-" === e[o]) {
          let t = o + 1;
          for (; t < e.length && /[^\s]/.test(e[t]);) t++;
          const r = e.slice(o, t);
          s = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(r);
        }
        s ? (t.push("sudo"), r = n) : (t.push("sudo -A"), r = n);
        continue;
      }
    }
    t.push(e[r]), r++;
  }
  return t.join("");
}
function $(e, t) {
  const r = t.toUpperCase();
  return Object.entries(e).some(([e, t]) => void 0 !== t && e.toUpperCase() === r);
}
const M = ["PYTHONIOENCODING", "PYTHONUTF8", "PYTHONLEGACYWINDOWSSTDIO"];
function D(e) {
  M.some(t => $(e, t)) || (e.PYTHONIOENCODING = "utf-8:surrogateescape");
}
function O(e) {
  $(e, "WSL_UTF8") || (e.WSL_UTF8 = "1");
}
const F = "-Dsun.stdout.encoding=UTF-8 -Dsun.stderr.encoding=UTF-8 -Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8",
  N = ["sun.stdout.encoding", "sun.stderr.encoding", "stdout.encoding", "stderr.encoding"],
  j = `case " \${MAVEN_OPTS-} \${JAVA_TOOL_OPTIONS-} \${JDK_JAVA_OPTIONS-} \${_JAVA_OPTIONS-} " in ${N.map(e => `*[[:space:]]-D${e}=*`).join("|")}) ;; *) builtin export MAVEN_OPTS="\${MAVEN_OPTS:+$MAVEN_OPTS }${F}";; esac; `,
  L = `if ("$env:MAVEN_OPTS $env:JAVA_TOOL_OPTIONS $env:JDK_JAVA_OPTIONS \${env:_JAVA_OPTIONS}" -cnotmatch '(^|\\s)-D(${N.map(e => e.replace(/\./g, "\\.")).join("|")})=') {\n    if ($env:MAVEN_OPTS) { $env:MAVEN_OPTS = "$env:MAVEN_OPTS ${F}" } else { $env:MAVEN_OPTS = '${F}' }\n}`;
var U = __dep4,
  B = __dep5,
  W = __dep6,
  H = __dep7;
let q;
function z(e, t) {
  const r = (0, p.lstatSync)(e);
  return r.isDirectory() && r.uid === t && !(18 & r.mode);
}
function G(e) {
  try {
    (0, p.mkdirSync)(e, {
      mode: 448
    });
  } catch (e) {
    if (!(e instanceof Error && "code" in e && "EEXIST" === e.code)) throw e;
  }
}
function V(e) {
  return K(e, {
    create: !1
  });
}
function K(e, {
  create: t
}) {
  const r = process.getuid?.();
  if (void 0 === r) return;
  const n = (0, h.join)((0, B.tmpdir)(), `cursor-sandbox-${(0, W.r_)((0, h.resolve)(e))}`);
  try {
    for (const e of [n, (0, h.join)(n, "tmp")]) if (t && G(e), !z(e, r)) return;
    return n;
  } catch {
    return;
  }
}
(0, H.J)(function () {
  q = void 0;
});
const J = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
function Z(e = (0, h.join)((0, B.tmpdir)(), "cursor-sandbox-cache", function () {
  return q || (q = (0, U.randomBytes)(16).toString("hex")), q;
}())) {
  return {
    NPM_CONFIG_CACHE: (0, h.join)(e, "npm"),
    PNPM_STORE_PATH: (0, h.join)(e, "pnpm-store"),
    GOCACHE: (0, h.join)(e, "go-build"),
    GOMODCACHE: (0, h.join)(e, "go-mod"),
    CARGO_TARGET_DIR: (0, h.join)(e, "cargo-target"),
    PIP_CACHE_DIR: (0, h.join)(e, "pip"),
    UV_CACHE_DIR: (0, h.join)(e, "uv"),
    BUN_INSTALL_CACHE_DIR: (0, h.join)(e, "bun"),
    YARN_CACHE_FOLDER: (0, h.join)(e, "yarn"),
    npm_config_devdir: (0, h.join)(e, "node-gyp"),
    PLAYWRIGHT_BROWSERS_PATH: (0, h.join)(e, "playwright"),
    PUPPETEER_CACHE_DIR: (0, h.join)(e, "puppeteer"),
    TURBO_CACHE_DIR: (0, h.join)(e, "turbo"),
    GRADLE_USER_HOME: (0, h.join)(e, "gradle"),
    CONDA_PKGS_DIRS: (0, h.join)(e, "conda"),
    POETRY_CACHE_DIR: (0, h.join)(e, "poetry"),
    GEM_SPEC_CACHE: (0, h.join)(e, "gem-specs"),
    BUNDLE_PATH: (0, h.join)(e, "bundle"),
    COMPOSER_HOME: (0, h.join)(e, "composer"),
    HOMEBREW_CACHE: (0, h.join)(e, "homebrew"),
    CYPRESS_CACHE_FOLDER: (0, h.join)(e, "cypress"),
    NX_CACHE_DIRECTORY: (0, h.join)(e, "nx"),
    NUGET_PACKAGES: (0, h.join)(e, "nuget"),
    CCACHE_DIR: (0, h.join)(e, "ccache"),
    CP_HOME_DIR: (0, h.join)(e, "cocoapods")
  };
}
var X = __dep8,
  Q = __dep9,
  Y = __dep10,
  ee = __dep11,
  te = __dep11;
class re extends Error {
  constructor(e, t, r, n, o, s) {
    super(e), this.name = "SpawnError", this.exitCode = t, this.code = t, this.stdout = o, this.stderr = s, this.command = r, this.args = n, "captureStackTrace" in Error && "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, re);
  }
}
function ne(e, t, r) {
  r = r ?? {};
  let n = new ee.Observable(n => {
    const {
        encoding: o,
        timeout: s,
        ...i
      } = r,
      {
        cmd: a,
        args: c
      } = v(e, t),
      l = i.stdin;
    l && (delete i.stdin, i.stdio ??= ["pipe", "pipe", "pipe"]), i.stdio ??= ["ignore", "pipe", "pipe"];
    const u = (0, Q.spawn)(a, c, i);
    r.processInfo && void 0 !== u.pid && (r.processInfo.pid = u.pid);
    let d = null;
    s && s > 0 && (d = setTimeout(() => {
      u.killed || u.kill();
      const e = new re(`Process timed out after ${s}ms`, -1, a, c);
      n.error(e);
    }, s));
    const h = {
        stdout: new Y.StringDecoder(o || "utf8"),
        stderr: new Y.StringDecoder(o || "utf8")
      },
      p = t => o => {
        if (o.length < 1) return;
        let s;
        r.echoOutput && ("stdout" === t ? process.stdout : process.stderr).write(o);
        try {
          s = "string" == typeof o ? o : h[t].write(o);
        } catch {
          s = `<< Lost chunk of process output for ${e} - length was ${o.length}>>`;
        }
        s.length > 0 && n.next({
          source: t,
          text: s
        });
      },
      f = e => {
        const t = h[e].end();
        t.length > 0 && n.next({
          source: e,
          text: t
        });
      },
      m = new ee.Subscription();
    if (l) if (u.stdin) {
      const e = u.stdin;
      m.add(l.subscribe({
        next: t => e.write(t),
        error: n.error.bind(n),
        complete: () => e.end()
      }));
    } else n.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
    let g = null,
      w = null,
      y = !1;
    if (u.stdout) {
      const e = new ee.AsyncSubject();
      w = e, u.stdout.on("data", p("stdout")), u.stdout.on("close", () => {
        f("stdout"), e.next(!0), e.complete();
      });
    } else w = (0, ee.of)(!0);
    if (u.stderr) {
      const e = new ee.AsyncSubject();
      g = e, u.stderr.on("data", p("stderr")), u.stderr.on("close", () => {
        f("stderr"), e.next(!0), e.complete();
      });
    } else g = (0, ee.of)(!0);
    return u.on("error", e => {
      y = !0, d && clearTimeout(d), n.error(e);
    }), u.on("close", e => {
      y = !0, d && clearTimeout(d);
      const t = (0, ee.merge)(w, g).pipe((0, te.TS)(e => !0, !0));
      0 === e ? t.subscribe(() => n.complete()) : t.subscribe(() => {
        const t = new re(`Process failed with exit code: ${e}`, e, a, c);
        n.error(t);
      });
    }), m.add(new ee.Subscription(() => {
      y || (d && clearTimeout(d), u.kill());
    })), m;
  });
  if (r.retries && r.retries > 0) {
    const e = r.retries,
      t = r.retryDelay ?? 1e3;
    n = n.pipe((0, te.L5)({
      count: e,
      delay: (e, r) => {
        if (e instanceof re && 0 !== e.exitCode) return (0, ee.timer)(t);
        throw e;
      }
    }));
  }
  return r.split ? n : n.pipe((0, te.Tj)(e => e?.text));
}
function oe(e, t, r) {
  return r?.split ? (n = ne(e, t, {
    ...(r ?? {}),
    split: !0
  }), new Promise((e, t) => {
    let r = "",
      o = "";
    n.subscribe({
      next: e => {
        "stdout" === e.source ? r += e.text : o += e.text;
      },
      error: e => {
        if (e instanceof re) {
          const n = new re(`${r}\n${e.message}`, e.exitCode, e.command, e.args, r, o);
          t(n);
        } else {
          const n = new Error(`${r}\n${e instanceof Error ? e.message : String(e)}`);
          t(n);
        }
      },
      complete: () => e([r, o])
    });
  })) : function (e) {
    return new Promise((t, r) => {
      let n = "";
      e.subscribe({
        next: e => {
          n += e;
        },
        error: e => {
          if (e instanceof re) {
            const t = new re(`${n}\n${e.message}`, e.exitCode, e.command, e.args, n, e.stderr);
            r(t);
          } else {
            const t = new Error(`${n}\n${e instanceof Error ? e.message : String(e)}`);
            r(t);
          }
        },
        complete: () => t(n)
      });
    });
  }(ne(e, t, {
    ...(r ?? {}),
    split: !1
  }));
  var n;
}
var se = __dep12;
const ie = [".local/bin", ".local/share/mise", ".local/share/pnpm", ".nvm", ".volta", ".asdf", ".pyenv", ".rbenv", ".rustup", ".cargo/bin", ".cargo/registry", ".cargo/git"],
  ae = ["bin", "sbin", "lib", "opt", "Cellar", "share", "Frameworks", "etc/gitconfig", "etc/openssl@3/cert.pem", "etc/openssl@3/openssl.cnf", "etc/ca-certificates"],
  ce = (e, t) => t.flatMap(t => ae.map(r => ({
    platform: e,
    scope: "global",
    path: `${t}/${r}`
  }))),
  le = {
    linux: [".cache/node", ".cache/yarn"],
    darwin: [".cache/node", "Library/Caches/Yarn"]
  },
  ue = e => [...ie, ...le[e]].map(t => ({
    platform: e,
    scope: "home-dir",
    path: t
  })),
  de = [{
    platform: "linux",
    scope: "global",
    path: "/bin"
  }, {
    platform: "linux",
    scope: "global",
    path: "/sbin"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/bin"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/sbin"
  }, {
    platform: "linux",
    scope: "global",
    path: "/lib"
  }, {
    platform: "linux",
    scope: "global",
    path: "/lib64"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/lib"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/lib64"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/libexec"
  }, {
    platform: "linux",
    scope: "global",
    path: "/usr/share"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ld.so.cache"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ld.so.conf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ld.so.conf.d"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ssl/certs"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ssl/openssl.cnf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ssl/cert.pem"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ssl/ca-bundle.pem"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/ssl/certs/ca-certificates.crt"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/pki/tls/certs"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/pki/tls/openssl.cnf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/pki/ca-trust/extracted"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/resolv.conf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/hosts"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/nsswitch.conf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/gai.conf"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/alternatives"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/mime.types"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/profile"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/bash.bashrc"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/zsh/zshenv"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/zsh/zprofile"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/zsh/zshrc"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/zsh/zlogin"
  }, {
    platform: "linux",
    scope: "global",
    path: "/etc/gitconfig"
  }, {
    platform: "linux",
    scope: "home",
    path: ".bashrc"
  }, {
    platform: "linux",
    scope: "home",
    path: ".bash_profile"
  }, {
    platform: "linux",
    scope: "home",
    path: ".profile"
  }, {
    platform: "linux",
    scope: "home",
    path: ".zshenv"
  }, {
    platform: "linux",
    scope: "home",
    path: ".zprofile"
  }, {
    platform: "linux",
    scope: "home",
    path: ".zshrc"
  }, {
    platform: "linux",
    scope: "home",
    path: ".zlogin"
  }, {
    platform: "linux",
    scope: "home",
    path: ".gitconfig"
  }, {
    platform: "linux",
    scope: "home",
    path: ".ssh/known_hosts"
  }, {
    platform: "linux",
    scope: "home",
    path: ".config/mise/config.toml"
  }, {
    platform: "linux",
    scope: "home-dir",
    path: ".cache/dotslash"
  }, ...ue("linux"), ...ce("linux", ["/usr/local", "/home/linuxbrew/.linuxbrew"]), {
    platform: "linux",
    scope: "global",
    path: "/usr/local/go"
  }, {
    platform: "linux",
    scope: "global",
    path: "/nix/store"
  }, {
    platform: "linux",
    scope: "global",
    path: "/nix/var/nix/profiles"
  }, {
    platform: "linux",
    scope: "bundled",
    path: "ripgrep"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/bin"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/usr/bin"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/usr/lib"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/usr/libexec"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/usr/share"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/System/Library"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/System/Cryptexes"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/Library/Apple"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/Library/Developer/CommandLineTools"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/Applications/Xcode.app"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/Library/Preferences/com.apple.dt.Xcode.plist"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/ssl/cert.pem"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/ssl/certs"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/ssl/openssl.cnf"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/hosts"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/resolv.conf"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/private/etc/apache2/mime.types"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/profile"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/bashrc"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/zshenv"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/zprofile"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/zshrc"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/zlogin"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/etc/gitconfig"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".bashrc"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".bash_profile"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".profile"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".zshenv"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".zprofile"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".zshrc"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".zlogin"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".gitconfig"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".ssh/known_hosts"
  }, {
    platform: "darwin",
    scope: "home",
    path: "Library/Preferences/.GlobalPreferences.plist"
  }, {
    platform: "darwin",
    scope: "home",
    path: ".config/mise/config.toml"
  }, {
    platform: "darwin",
    scope: "home-dir",
    path: "Library/Python"
  }, {
    platform: "darwin",
    scope: "home-dir",
    path: "Library/Caches/dotslash"
  }, ...ue("darwin"), ...ce("darwin", ["/opt/homebrew", "/usr/local"]), {
    platform: "darwin",
    scope: "global",
    path: "/nix/store"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/nix/var/nix/profiles"
  }, {
    platform: "darwin",
    scope: "bundled",
    path: "ripgrep"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/dev/null"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/dev/zero"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/dev/random"
  }, {
    platform: "darwin",
    scope: "global",
    path: "/dev/urandom"
  }];
function he(e = process.platform, t = B.default.homedir(), r = {}) {
  const n = [];
  for (const o of de) {
    if (o.platform !== e) continue;
    if ("global" === o.scope) {
      n.push(o.path);
      continue;
    }
    const s = "bundled" === o.scope ? r[o.path] : (0, h.join)(t, o.path);
    if (s) try {
      let e;
      switch (o.scope) {
        case "home":
          e = (0, p.lstatSync)(s).isFile();
          break;
        case "home-dir":
          e = (0, p.lstatSync)(s).isDirectory();
          break;
        case "bundled":
          e = (0, p.statSync)(s).isFile();
      }
      e && n.push(s);
    } catch {}
  }
  return n;
}
const pe = [{
  type: "workspace",
  pattern: "**/.cursor/*.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/*.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/.workspace-trusted"
}, {
  type: "workspace",
  pattern: "!**/.cursor/rules"
}, {
  type: "workspace",
  pattern: "!**/.cursor/rules/**"
}, {
  type: "workspace",
  pattern: "!**/.cursor/commands"
}, {
  type: "workspace",
  pattern: "!**/.cursor/commands/**"
}, {
  type: "workspace",
  pattern: "!**/.cursor/worktrees"
}, {
  type: "workspace",
  pattern: "!**/.cursor/worktrees/**"
}, {
  type: "workspace",
  pattern: "!**/.cursor/skills"
}, {
  type: "workspace",
  pattern: "!**/.cursor/skills/**"
}, {
  type: "workspace",
  pattern: "!**/.cursor/agents"
}, {
  type: "workspace",
  pattern: "!**/.cursor/agents/**"
}, {
  type: "workspace",
  pattern: "**/.claude/*.json"
}, {
  type: "workspace",
  pattern: "**/.claude/**/*.json"
}, {
  type: "workspace",
  pattern: "**/.vscode/**"
}, {
  type: "workspace",
  pattern: "**/.idea/**"
}, {
  type: "workspace",
  pattern: "**/.venv/"
}, {
  type: "workspace",
  pattern: "**/venv/"
}, {
  type: "workspace",
  pattern: "**/*.code-workspace"
}, {
  type: "workspace",
  pattern: "**/.cursorignore"
}, {
  type: "workspace",
  pattern: "**/.workspace-trusted"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/cli.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/cli-config.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/mcp.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/mcp-approvals.json"
}, {
  type: "workspace",
  pattern: "**/.cursor/**/permissions.json"
}, {
  type: "git",
  pattern: "**/.git/hooks/**"
}, {
  type: "git",
  pattern: "**/.git/config"
}, {
  type: "git",
  pattern: "**/.git/config.worktree"
}, {
  type: "git",
  pattern: "**/.git/info/attributes"
}, {
  type: "git",
  pattern: "**/.git/commondir"
}, {
  type: "git",
  pattern: "**/.git/worktrees/*/commondir"
}, {
  type: "worktree",
  pattern: ".git"
}, {
  type: "absolute",
  pattern: "/etc/ssl/cert.pem"
}, {
  type: "absolute",
  pattern: "/etc/ssl/ca-bundle.pem"
}, {
  type: "absolute",
  pattern: "/private/etc/ssl/cert.pem"
}, {
  type: "absolute",
  pattern: "/etc/ssl/certs/ca-certificates.crt"
}, {
  type: "absolute",
  pattern: "/etc/pki/tls/certs/ca-bundle.crt"
}, {
  type: "absolute",
  pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
}, {
  type: "home",
  pattern: ".cursor/sandbox-policies"
}];
function fe(e) {
  const t = pe.filter(e => "workspace" === e.type).map(e => e.pattern);
  return {
    [e]: t
  };
}
function me(e) {
  const t = pe.filter(e => "worktree" === e.type).map(e => e.pattern);
  return {
    [e]: t
  };
}
pe.filter(e => "git" === e.type).map(e => e.pattern), pe.filter(e => "workspace" === e.type && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map(e => e.pattern.replace(/^!(\*\*\/)?/, ""));
const ge = [];
let we = null,
  ye = null;
let ve = null;
const be = new Map();
const Se = "win32" === process.platform || "darwin" === process.platform;
function ke(e) {
  if (!e.endsWith(h.sep)) return e;
  const t = e.slice(0, -1);
  return "" === t || "win32" === process.platform && /^[a-zA-Z]:$/.test(t) ? e : t;
}
function _e(e) {
  return e.endsWith(h.sep) ? e : e + h.sep;
}
function Ce(e, t) {
  const r = ke(t);
  if (Se) {
    const t = e.toLowerCase(),
      n = r.toLowerCase();
    return t === n || t.startsWith(_e(n));
  }
  return e === r || e.startsWith(_e(r));
}
function Ee(e, t) {
  const r = ke(e);
  return Se ? (0, h.relative)(r.toLowerCase(), t.toLowerCase()).replace(/\\/g, "/") : (0, h.relative)(r, t).replace(/\\/g, "/");
}
async function xe(e, t) {
  if (Ce(e, t)) {
    const r = Ee(t, e);
    if ((null === we && (we = se({
      ignoreCase: !0
    }), we.add(pe.filter(e => "workspace" === e.type).map(e => e.pattern))), we).ignores(r)) return !0;
  }
  const {
    isWorktree: r,
    gitDirParent: n
  } = await async function (e) {
    const t = be.get(e);
    if (t) return t;
    const r = await (0, X.stat)((0, h.join)(e, ".git")).catch(() => null);
    if (!r?.isFile()) {
      const t = {
        isWorktree: !1,
        gitDirParent: e
      };
      return be.set(e, t), t;
    }
    const n = await async function (e) {
        try {
          const t = await oe("git", ["rev-parse", "--git-common-dir"], {
            cwd: e
          });
          return (0, h.dirname)((0, h.resolve)(e, t.trim()));
        } catch {
          return null;
        }
      }(e),
      o = {
        isWorktree: !0,
        gitDirParent: n ?? e
      };
    return be.set(e, o), o;
  }(t);
  if (Ce(e, n)) {
    const t = Ee(n, e);
    if ((null === ye && (ye = se({
      ignoreCase: !0
    }), ye.add(pe.filter(e => "git" === e.type).map(e => e.pattern))), ye).ignores(t)) return !0;
  }
  if (r && Ce(e, t) && ".git" === Ee(t, e)) return !0;
  for (const t of function () {
    if (null !== ve) return ve;
    const e = B.default.homedir(),
      t = [];
    for (const r of pe) switch (r.type) {
      case "absolute":
        t.push(r.pattern);
        break;
      case "home":
        e.length > 0 && t.push((0, h.join)(e, r.pattern));
    }
    return ve = t, t;
  }()) if (Ce(e, t)) return !0;
  return !1;
}
function Pe(e) {
  return void 0 !== e && ("allow" === e.default || void 0 !== e.allow && e.allow.length > 0);
}
function Ie(e) {
  return void 0 !== e && "allow" === e.default;
}
function Re() {
  return {
    version: 1,
    default: "deny"
  };
}
function Te() {
  return {
    version: 1,
    default: "allow"
  };
}
var Ae = __dep13;
function $e(e) {
  if (!e) return;
  const t = {
    version: 1
  };
  if ("allow" !== e.default && "deny" !== e.default || (t.default = e.default), Array.isArray(e.allow) && e.allow.length > 0 && (t.allow = e.allow.filter(e => "string" == typeof e)), Array.isArray(e.deny) && e.deny.length > 0 && (t.deny = e.deny.filter(e => "string" == typeof e)), e.logging) {
    const r = {};
    "string" == typeof e.logging.decisionLogPath && (r.decisionLogPath = e.logging.decisionLogPath), "jsonl" === e.logging.logFormat && (r.logFormat = "jsonl"), Object.keys(r).length > 0 && (t.logging = r);
  }
  return t;
}
function Me(e) {
  const t = e.type ?? "workspace_readwrite",
    r = {
      debugOutputDir: e.debugOutputDir,
      captureDenies: e.captureDenies,
      enableSharedBuildCache: e.enableSharedBuildCache
    };
  if ("insecure_none" === t) return {
    type: "insecure_none",
    ...r
  };
  let n;
  if (Array.isArray(e.additionalReadonlyPaths)) {
    const t = e.additionalReadonlyPaths;
    n = t.length > 0 ? t : void 0;
  }
  const o = {
    ...r,
    networkAccess: e.networkAccess,
    networkPolicy: $e(e.networkPolicy),
    networkPolicyStrict: e.networkPolicyStrict,
    additionalReadonlyPaths: n,
    readBoundary: e.readBoundary,
    additionalReadPaths: Array.isArray(e.additionalReadPaths) ? e.additionalReadPaths : void 0,
    disableTmpWrite: e.disableTmpWrite
  };
  return "workspace_readonly" === t ? {
    type: "workspace_readonly",
    ...o
  } : {
    type: "workspace_readwrite",
    ...o,
    additionalReadwritePaths: e.additionalReadwritePaths
  };
}
function De(e) {
  if ("object" != typeof e || null === e) return "Expected an object";
  const t = Object.fromEntries(Object.entries(e));
  if (void 0 !== t.type) {
    const e = ["insecure_none", "workspace_readwrite", "workspace_readonly"];
    if ("string" != typeof t.type || !e.includes(t.type)) return `Invalid type: expected one of ${e.join(", ")}`;
  }
  const r = ["networkAccess", "networkPolicyStrict", "disableTmpWrite", "enableSharedBuildCache", "captureDenies"];
  for (const e of r) if (void 0 !== t[e] && "boolean" != typeof t[e]) return `Invalid ${e}: expected boolean`;
  const n = ["debugOutputDir"];
  for (const e of n) if (void 0 !== t[e] && "string" != typeof t[e]) return `Invalid ${e}: expected string`;
  const o = ["additionalReadwritePaths", "additionalReadonlyPaths", "additionalReadPaths"];
  for (const e of o) if (void 0 !== t[e]) {
    if (!Array.isArray(t[e])) return `Invalid ${e}: expected array`;
    if (!t[e].every(e => "string" == typeof e)) return `Invalid ${e}: expected array of strings`;
  }
  if (void 0 !== t.readBoundary && "system" !== t.readBoundary && "workspace" !== t.readBoundary) return 'Invalid readBoundary: expected "system" or "workspace"';
  if (void 0 !== t.networkPolicy) {
    if ("object" != typeof t.networkPolicy || null === t.networkPolicy) return "Invalid networkPolicy: expected object";
    const e = Object.fromEntries(Object.entries(t.networkPolicy));
    if (void 0 !== e.default && "allow" !== e.default && "deny" !== e.default) return 'Invalid networkPolicy.default: expected "allow" or "deny"';
    if (void 0 !== e.allow && !Array.isArray(e.allow)) return "Invalid networkPolicy.allow: expected array";
    if (void 0 !== e.deny && !Array.isArray(e.deny)) return "Invalid networkPolicy.deny: expected array";
  }
}
async function Oe(e, t) {
  const r = await async function (e, t) {
    try {
      const r = await (0, X.readFile)(e, "utf-8"),
        n = JSON.parse(r);
      if (void 0 !== De(n)) return {
        success: !1,
        error: `Invalid sandbox policy: ${De(n) ?? ""}`
      };
      let o = Me(n);
      return t && (o = Fe(o, t)), {
        success: !0,
        policy: o
      };
    } catch (e) {
      return e instanceof Error ? "code" in e && "ENOENT" === e.code ? {
        success: !1,
        error: "File not found"
      } : e instanceof SyntaxError ? {
        success: !1,
        error: `Invalid JSON: ${e.message}`
      } : {
        success: !1,
        error: e.message
      } : {
        success: !1,
        error: "Unknown error"
      };
    }
  }(e, t);
  if (r.success) return r.policy;
}
function Fe(e, t) {
  if ("insecure_none" === e.type) return e;
  const r = e.additionalReadonlyPaths?.map(e => (0, Ae.o1)(e, t)),
    n = e.additionalReadPaths?.map(e => (0, Ae.o1)(e, t));
  if ("workspace_readonly" === e.type) return {
    ...e,
    additionalReadonlyPaths: r,
    additionalReadPaths: n
  };
  const o = e.additionalReadwritePaths?.map(e => (0, Ae.o1)(e, t));
  return {
    ...e,
    additionalReadonlyPaths: r,
    additionalReadPaths: n,
    additionalReadwritePaths: o
  };
}
var Ne = __dep14;
function je(e) {
  return e.teamAdmin?.type ?? e.perRepo?.type ?? e.perUser?.type ?? "insecure_none";
}
function Le(...e) {
  return e.some(e => !0 === e);
}
function Ue(...e) {
  const t = new Set();
  for (const r of e) if (r) for (const e of r) t.add(ze(e));
  return [...t];
}
const Be = function ({
    defaultValue: e,
    rank: t
  }) {
    return {
      defaultValue: e,
      merge: (...r) => {
        const n = r.filter(e => void 0 !== e);
        return 0 === n.length ? e : n.reduce((e, r) => t[r] < t[e] ? r : e);
      }
    };
  }({
    defaultValue: "system",
    rank: {
      workspace: 0,
      system: 1
    }
  }),
  We = (...e) => function (...e) {
    const t = e.filter(e => void 0 !== e);
    if (0 === t.length) return [];
    if (t.some(e => 0 === e.length)) return [];
    if (1 === t.length) return function (e) {
      const t = new Set(),
        r = [];
      for (const n of e) {
        const e = ze(n);
        t.has(e) || (t.add(e), r.push(n));
      }
      return r;
    }(t[0]).map(ze);
    let r = new Set(t[0].map(ze));
    for (let e = 1; e < t.length; e++) {
      const n = new Set(t[e].map(ze));
      r = new Set([...r].filter(e => n.has(e)));
    }
    return [...r];
  }(...e);
function He(...e) {
  return Be.merge(...e);
}
function qe(...e) {
  return We(...e);
}
function ze(e) {
  const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
  return "" === t ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function Ge(...e) {
  const t = e.filter(e => void 0 !== e);
  if (0 === t.length) return;
  let r;
  for (const e of t) {
    if ("deny" === e.default) {
      r = "deny";
      break;
    }
    "allow" === e.default && void 0 === r && (r = "allow");
  }
  const n = new Set();
  for (const e of t) if (e.deny) for (const t of e.deny) n.add(t);
  const o = new Set();
  for (const e of t) if (e.allow) for (const t of e.allow) o.add(t);
  const s = o.size > 0 ? [...o] : void 0;
  let i;
  for (let e = t.length - 1; e >= 0; e--) if (void 0 !== t[e].logging) {
    i = t[e].logging;
    break;
  }
  const a = {
    version: 1
  };
  return void 0 !== r && (a.default = r), void 0 !== s && (a.allow = s), n.size > 0 && (a.deny = [...n]), void 0 !== i && (a.logging = i), void 0 !== a.default || void 0 !== a.allow && 0 !== a.allow.length || void 0 !== a.deny && 0 !== a.deny.length || void 0 !== a.logging ? a : void 0;
}
function Ve(...e) {
  const t = e.filter(e => void 0 !== e);
  if (0 === t.length) return;
  const r = {};
  for (const e of t) for (const [t, n] of Object.entries(e)) {
    const e = r[t];
    if (e) {
      const o = new Set(e);
      for (const e of n) o.has(e) && o.delete(e), o.add(e);
      r[t] = [...o];
    } else r[t] = [...n];
  }
  return 0 !== Object.keys(r).length ? r : void 0;
}
function Ke(...e) {
  for (let t = e.length - 1; t >= 0; t--) if (void 0 !== e[t]) return e[t];
}
async function Je(e, t, r = {}) {
  if (!t) return {
    policy: {
      type: "insecure_none"
    }
  };
  if ((0, Ne.$f)(e)) return Ze(t, {
    workspaceDir: e
  });
  const n = r.stat ?? X.stat,
    o = r.spawnPromise ?? oe,
    s = await n((0, h.join)(e, ".git")).then(e => e, () => null),
    i = s?.isFile() ?? !1,
    a = null !== s;
  if ("workspace_readwrite" === je(t)) {
    let r = e;
    if (i) {
      const n = await o("git", ["rev-parse", "--git-common-dir"], {
        cwd: e
      }).then(t => (0, h.resolve)(e, t.trim()), () => null);
      if (n) {
        r = (0, h.dirname)(n);
        const o = t.perRepo,
          s = o?.ignoreMapping;
        t = {
          ...t,
          perRepo: {
            ...o,
            type: "workspace_readwrite",
            additionalReadwritePaths: [...(o?.additionalReadwritePaths ?? []), n],
            ignoreMapping: s,
            writeProtectionMapping: Ve(o?.writeProtectionMapping, me(e))
          }
        };
      }
    }
    if (a) return Ze(t, {
      workspaceDir: e,
      gitDirParent: r
    });
  }
  return Ze(t, {
    workspaceDir: e
  });
}
function Ze(e, t) {
  return function (e, t) {
    const r = function (e) {
      const {
          perUser: t,
          perRepo: r,
          teamAdmin: n
        } = e,
        o = [t, r, n].filter(e => void 0 !== e);
      if (0 === o.length) return;
      const s = o[0].type;
      for (const e of o) if (e.type !== s) throw new Error(`Cannot merge policies of different types: found "${s}" and "${e.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
      return s;
    }(e);
    if (void 0 === r) return tt({}, t);
    switch (r) {
      case "workspace_readwrite":
        return tt(Qe(e, r), t);
      case "workspace_readonly":
        return function (e, t) {
          const r = t?.debug,
            n = Ye(e, t),
            o = {
              policy: et({
                type: "workspace_readonly",
                disableTmpWrite: n.disableTmpWrite,
                networkPolicyStrict: n.networkPolicyStrict,
                readBoundary: n.readBoundary,
                additionalReadPaths: n.additionalReadPaths,
                additionalReadonlyPaths: n.additionalReadonlyPaths,
                networkPolicy: n.networkPolicy,
                debugOutputDir: n.debugOutputDir,
                captureDenies: n.captureDenies,
                enableSharedBuildCache: n.enableSharedBuildCache,
                ignoreMapping: n.ignoreMapping,
                writeProtectionMapping: n.writeProtectionMapping
              }, "workspace_readonly")
            };
          return r && (o.debug = {
            fieldSources: n.fieldSources
          }), o;
        }(Qe(e, r), t);
      case "insecure_none":
        return function (e, t) {
          const {
              perUser: r,
              perRepo: n,
              teamAdmin: o
            } = e,
            s = t?.debug,
            i = {
              policy: et({
                type: "insecure_none",
                allowlistEscalated: Le(r?.allowlistEscalated, n?.allowlistEscalated, o?.allowlistEscalated) || void 0,
                debugOutputDir: Ke(r?.debugOutputDir, n?.debugOutputDir, o?.debugOutputDir),
                captureDenies: Le(r?.captureDenies, n?.captureDenies, o?.captureDenies) || void 0,
                enableSharedBuildCache: Ke(r?.enableSharedBuildCache, n?.enableSharedBuildCache, o?.enableSharedBuildCache)
              }, "insecure_none")
            };
          return s && (i.debug = {
            fieldSources: {}
          }), i;
        }(Qe(e, r), t);
      default:
        throw new Error(`Unknown policy type: ${String(r)}`);
    }
  }(e, t);
}
function Xe(e, t) {
  return e?.type === t;
}
function Qe(e, t) {
  const {
    perUser: r,
    perRepo: n,
    teamAdmin: o
  } = e;
  return {
    perUser: Xe(r, t) ? r : void 0,
    perRepo: Xe(n, t) ? n : void 0,
    teamAdmin: Xe(o, t) ? o : void 0
  };
}
function Ye(e, t) {
  const r = t?.debug,
    {
      perUser: n,
      perRepo: o,
      teamAdmin: s
    } = e,
    i = t?.workspaceDir ?? process.cwd(),
    a = function (e) {
      const t = function () {
          if (0 !== ge.length) return {
            version: 1,
            deny: [...ge]
          };
        }(),
        r = B.default.homedir(),
        n = [];
      for (const e of pe) switch (e.type) {
        case "workspace":
        case "git":
        case "worktree":
          break;
        case "absolute":
          n.push(e.pattern);
          break;
        case "home":
          r.length > 0 && n.push((0, h.join)(r, e.pattern));
          break;
        default:
          {
            const t = e.type;
            throw new Error(`Unknown entry type: ${String(t)}`);
          }
      }
      return {
        type: "workspace_readwrite",
        additionalReadonlyPaths: n,
        writeProtectionMapping: fe(e),
        ...(t && {
          networkPolicy: t
        }),
        networkPolicyStrict: !0
      };
    }(i),
    c = {},
    l = [n, o, s],
    u = ["perUser", "perRepo", "teamAdmin", "hardcoded"],
    d = (e, t) => {
      r && (c[e] = u[t] ?? "unknown");
    },
    p = Le(n?.disableTmpWrite, o?.disableTmpWrite, s?.disableTmpWrite);
  for (let e = l.length - 1; e >= 0; e--) if (!0 === l[e]?.disableTmpWrite) {
    d("disableTmpWrite", e);
    break;
  }
  const f = Le(n?.networkPolicyStrict, o?.networkPolicyStrict, s?.networkPolicyStrict, a.networkPolicyStrict);
  a.networkPolicyStrict && d("networkPolicyStrict", 3);
  const m = Ke(n?.readBoundary, o?.readBoundary, s?.readBoundary) ?? "system",
    g = Ke(n?.additionalReadPaths, o?.additionalReadPaths),
    w = !1 === s?.allowUserOverrideReadPaths ? Ue(s.additionalReadPaths) : Ue(g, s?.additionalReadPaths),
    y = "workspace" === m ? w : void 0,
    v = Ue(n?.additionalReadonlyPaths, o?.additionalReadonlyPaths, s?.additionalReadonlyPaths, a.additionalReadonlyPaths),
    b = v.length > 0 ? v : void 0;
  let S = Ge(n?.networkPolicy, o?.networkPolicy, s?.networkPolicy, a.networkPolicy);
  const k = s?.networkPolicy?.allow;
  void 0 !== k && k.length > 0 && void 0 !== S && (S = {
    ...S,
    allow: [...k]
  }, r && (c["networkPolicy.allow"] = "teamAdmin (replace)"));
  const _ = void 0 !== (C = S) ? C : {
    version: 1,
    default: "deny"
  };
  var C;
  const E = Ke(n?.debugOutputDir, o?.debugOutputDir, s?.debugOutputDir),
    x = Le(n?.captureDenies, o?.captureDenies, s?.captureDenies),
    P = Ke(n?.enableSharedBuildCache, o?.enableSharedBuildCache, s?.enableSharedBuildCache),
    I = Ve(n?.ignoreMapping, o?.ignoreMapping, s?.ignoreMapping, a.ignoreMapping),
    R = function (e) {
      const t = pe.filter(e => "git" === e.type).map(e => e.pattern);
      return {
        [e]: t
      };
    }(t?.gitDirParent ?? i);
  return {
    disableTmpWrite: p || void 0,
    networkPolicyStrict: f,
    readBoundary: m,
    additionalReadPaths: y,
    additionalReadonlyPaths: b,
    networkPolicy: _,
    debugOutputDir: E,
    captureDenies: x || void 0,
    enableSharedBuildCache: P,
    ignoreMapping: I,
    writeProtectionMapping: Ve(n?.writeProtectionMapping, o?.writeProtectionMapping, s?.writeProtectionMapping, a.writeProtectionMapping, R),
    fieldSources: c
  };
}
function et(e, t) {
  const r = {
    ...e,
    type: t
  };
  for (const [e, t] of Object.entries(r)) void 0 === t && Reflect.deleteProperty(r, e);
  return r;
}
function tt(e, t) {
  const {
      perUser: r,
      perRepo: n,
      teamAdmin: o
    } = e,
    s = t?.debug,
    i = Ye(e, t),
    a = Ue(r?.additionalReadwritePaths, n?.additionalReadwritePaths, o?.additionalReadwritePaths),
    c = {
      policy: et({
        type: "workspace_readwrite",
        disableTmpWrite: i.disableTmpWrite,
        networkPolicyStrict: i.networkPolicyStrict,
        readBoundary: i.readBoundary,
        additionalReadPaths: i.additionalReadPaths,
        additionalReadwritePaths: a.length > 0 ? a : void 0,
        additionalReadonlyPaths: i.additionalReadonlyPaths,
        networkPolicy: i.networkPolicy,
        debugOutputDir: i.debugOutputDir,
        captureDenies: i.captureDenies,
        enableSharedBuildCache: i.enableSharedBuildCache,
        ignoreMapping: i.ignoreMapping,
        writeProtectionMapping: i.writeProtectionMapping
      }, "workspace_readwrite")
    };
  return s && (c.debug = {
    fieldSources: i.fieldSources
  }), c;
}
var rt = __dep15,
  nt = __dep16,
  ot = __dep17;
const st = Q.execFile,
  it = new WeakMap();
function at(e, t, r) {
  return e === t ? "related" : r?.has(e) ? "probably_unrelated" : "maybe_related";
}
let ct = 0;
function lt() {
  const e = function () {
    const e = process.env.CURSOR_SANDBOX_POLICY_DIR?.trim();
    return e ? h.resolve(e) : h.resolve(h.join(B.homedir(), ".cursor", "sandbox-policies"));
  }();
  p.mkdirSync(e, {
    recursive: !0,
    mode: 448
  });
  try {
    p.chmodSync(e, 448);
  } catch {}
  const t = Date.now();
  return t - ct >= 9e5 && (ct = t, function (e) {
    let t;
    try {
      t = p.readdirSync(e);
    } catch {
      return;
    }
    const r = Date.now();
    for (const n of t) {
      if (!n.startsWith("sandbox-policy-")) continue;
      const t = h.join(e, n);
      try {
        const e = p.statSync(t);
        if (!e.isFile()) continue;
        r - e.mtimeMs > 36e5 && p.unlinkSync(t);
      } catch {}
    }
  }(e)), e;
}
function ut(e) {
  const t = lt(),
    r = U.randomBytes(8).toString("hex"),
    n = h.join(t, `sandbox-policy-${r}`);
  return p.writeFileSync(n, e, {
    encoding: "utf-8",
    mode: 384
  }), n;
}
const dt = "darwin" === process.platform,
  ht = "linux" === process.platform,
  pt = (0, nt.h)("shell-exec:sandbox");
function ft(e) {
  const t = lt();
  return e && 0 !== e.length ? e.includes(t) ? e : [...e, t] : [t];
}
let mt,
  gt = !0,
  wt = !1;
function yt() {
  return mt;
}
function vt(e) {
  "linux" === process.platform && Object.assign(e, x(e));
}
let bt = null,
  St = null,
  kt = null,
  _t = null,
  Ct = !1,
  Et = null;
function xt(e) {
  return {
    ...e,
    additionalReadonlyPaths: ft(e.additionalReadonlyPaths)
  };
}
function Pt(e, t, r) {
  let n;
  e.ignoreMapping && (n = function (e) {
    return Mt(e);
  }(e.ignoreMapping));
  const o = function (e, t, r) {
      const n = e && e.length > 0 ? function (...e) {
          const t = {};
          for (const r of e) {
            let e = !1;
            try {
              e = (0, p.existsSync)(r) && (0, p.statSync)(r).isDirectory();
            } catch {}
            if (e) t[r] || (t[r] = []), t[r].push("**");else {
              const e = r.lastIndexOf("/"),
                n = e > 0 ? r.slice(0, e) : "/",
                o = e >= 0 ? r.slice(e + 1) : r;
              t[n] || (t[n] = []), o ? t[n].push(o, `${o}/**`) : t[n].push("**");
            }
          }
          return t;
        }(...e) : {},
        o = function (e, t = e => p.existsSync(e)) {
          if ((0, Ne.$f)(e)) return !0;
          let r = h.resolve(e);
          for (;;) {
            try {
              if (t(h.join(r, ".git"))) return !0;
            } catch {}
            const e = h.dirname(r);
            if (e === r) return !1;
            r = e;
          }
        }(r),
        s = !ht || o ? t ?? {} : {},
        i = {
          ...n
        };
      for (const [e, t] of Object.entries(s)) i[e] ? i[e] = [...i[e], ...t] : i[e] = t;
      if (0 !== Object.keys(i).length) return Mt(i);
    }(e.additionalReadonlyPaths, e.writeProtectionMapping, t),
    s = (i = e.readBoundary, r?.workspaceReadEnabled ?? function () {
      const e = gt;
      return "function" == typeof e ? e() : e;
    }() ? i ?? "system" : "system");
  var i;
  const a = function (e = process.platform) {
      const t = [],
        r = new Set(),
        n = {};
      try {
        n.ripgrep = P();
      } catch {}
      for (const o of he(e, B.homedir(), n)) r.has(o) || (r.add(o), t.push(o));
      return t;
    }(),
    c = "workspace" === s ? function (e) {
      const t = [],
        r = new Set();
      for (const n of e) {
        let e = n.trim();
        if (!e) continue;
        "~" === e ? e = B.homedir() : (e.startsWith("~/") || e.startsWith("~\\")) && (e = h.join(B.homedir(), e.slice(2))), e = e.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e = e.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
        const o = h.basename(e);
        if ((o.includes("*") || o.includes("?")) && (e = h.dirname(e)), !e || "." === e) continue;
        const s = h.normalize(e);
        r.has(s) || (r.add(s), t.push(s));
      }
      return t;
    }(e.additionalReadPaths ?? []) : [],
    l = [...a],
    u = new Set(a);
  for (const e of c) u.has(e) || (u.add(e), l.push(e));
  const d = {
    cwd: t,
    readBoundary: s,
    hardcodedReadPaths: l,
    additionalReadonlyPaths: o,
    networkAccess: Pe(e.networkPolicy),
    ignoreMapping: n
  };
  return "workspace_readonly" === e.type ? {
    type: e.type,
    ...d
  } : {
    type: e.type,
    ...d,
    additionalReadwritePaths: e.additionalReadwritePaths || [],
    disableTmpWrite: e.disableTmpWrite || !1
  };
}
function It(e) {
  const t = {
    sandbox: e
  };
  return ht && function () {
    const e = wt;
    return "function" == typeof e ? e() : e;
  }() && (t.kernelMountBudget = !0), t;
}
function Rt(e) {
  if (null !== bt) return bt;
  try {
    const t = yt();
    return pt.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (bt = p.existsSync(t), bt ? pt.info(e, `[checkBinaryAvailable] Binary path exists: ${String(bt)}`) : (St = new Error(`Sandbox binary not found at ${t}`), pt.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), bt) : (St = new Error("Sandbox binary path was not configured"), bt = !1, pt.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), !1);
  } catch (t) {
    return St = t instanceof Error ? t : new Error(String(t)), bt = !1, pt.info(e, `[checkBinaryAvailable] Exception checking binary: ${String(t)}`), !1;
  }
}
function Tt(e) {
  if (null !== _t) return _t;
  const t = e ?? (0, ot.q6)();
  if (pt.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !Rt(t)) {
    const e = St?.message || "Binary check failed";
    return kt = e, pt.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e}`), _t = !1, _t;
  }
  if ("win32" === process.platform) return kt = "Windows sandbox helper only provides network proxy, not filesystem isolation", pt.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), _t = !1, _t;
  if ("darwin" === process.platform) return kt = null, pt.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), _t = !0, _t;
  const {
    binaryPath: r,
    args: n,
    env: o
  } = function (e, t) {
    const r = It(Pt(xt({
        type: "workspace_readwrite"
      }), t)),
      n = String(yt());
    pt.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), pt.info(e, `[sandboxPreflight] CWD: ${t}`);
    const o = {
      ...process.env
    };
    return vt(o), {
      binaryPath: n,
      args: ["--policy", ut(JSON.stringify(r)), "--preflight-only", "--", "/bin/true"],
      env: o
    };
  }(t, process.cwd());
  try {
    const e = Date.now();
    (0, rt.D9)(Q.execFileSync, r, n, {
      stdio: ["ignore", "ignore", "pipe"],
      timeout: At,
      env: o,
      shell: !1
    });
    const s = Date.now() - e;
    return kt = null, pt.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${s}ms, sandbox supported!`), _t = !0, _t;
  } catch (e) {
    return function (e, t) {
      const {
        message: r,
        status: n,
        stderrText: o
      } = t;
      return pt.error(e, `[sandboxPreflight] Preflight failed: ${r}`), pt.error(e, `[sandboxPreflight] Exit status: ${n}`), o && pt.error(e, `[sandboxPreflight] Stderr: ${o}`), kt = 2 === n ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${o || "none"}` : `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${o || "none"}`, _t = !1, !1;
    }(t, function (e) {
      if ("object" != typeof e || null === e) return {
        stderrText: ""
      };
      const t = "message" in e && "string" == typeof e.message ? e.message : void 0,
        r = !("status" in e) || "number" != typeof e.status && null !== e.status ? void 0 : e.status,
        n = "stderr" in e ? e.stderr : void 0;
      return {
        message: t,
        status: r,
        stderrText: Buffer.isBuffer(n) || "string" == typeof n ? n.toString() : ""
      };
    }(e));
  }
}
(0, H.J)(function () {
  _t = null, Ct = !1, Et = null, kt = null, bt = null, St = null;
});
const At = 15e3;
function $t(e, t = [], r = {}, n) {
  const s = (0, ot.q6)();
  if (r.env = o(r.env), !Rt(s)) throw new Error(`Sandbox binary not available: ${St?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
  if ("insecure_none" === n.type) return (0, rt.D9)(Q.spawn, e, t, {
    ...r,
    windowsHide: !0
  });
  if ("workspace_readwrite" === n.type || "workspace_readonly" === n.type) return function (e, t, r, n) {
    if ("workspace_readwrite" !== n.type && "workspace_readonly" !== n.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
    const s = String(r.cwd ?? process.cwd()),
      a = n.sandboxWorkspaceRoot ?? s;
    let c = e,
      l = t;
    r.shell && ("win32" === process.platform ? (c = "string" == typeof r.shell ? r.shell : "cmd.exe", l = ["/c", `${e} ${t.join(" ")}`]) : (c = "string" == typeof r.shell ? r.shell : "/bin/sh", l = ["-c", `${e} ${t.join(" ")}`]));
    const u = Pt(xt(n), a),
      d = function (e) {
        if (!("workspace" !== e.readBoundary || "workspace_readwrite" === e.type && e.disableTmpWrite || "win32" === process.platform)) return K(e.cwd, {
          create: !0
        });
      }(u);
    d && (u.additionalReadwritePaths = [...(u.additionalReadwritePaths ?? []), d]);
    const p = function (e) {
        if ("insecure_none" === e.type) return;
        const t = e.networkPolicy;
        if (void 0 === t) return;
        if (!Pe(t)) return;
        const r = void 0 !== t.deny && t.deny.length > 0;
        return "allow" !== t.default || r ? {
          version: 1,
          ...t
        } : void 0;
      }(n),
      f = It(u);
    void 0 !== p && (f.networkPolicy = p), !1 === n.networkPolicyStrict && (f.networkPolicyStrict = !1);
    const m = ["--policy", ut(JSON.stringify(f)), "--", c, ...l],
      g = o(process.env),
      w = {
        ...("linux" === process.platform ? i(g) : g),
        ...("linux" === process.platform && r.env ? i(r.env) : r.env),
        CURSOR_SANDBOX: "native"
      };
    if (vt(w), d) {
      const e = function (e, t, r) {
        const n = function (e) {
          const t = (0, h.join)(e, "tmp");
          return {
            TMPDIR: t,
            TMP: t,
            TEMP: t,
            TMPPREFIX: (0, h.join)(t, "sh-")
          };
        }(e);
        if (r) {
          const r = Z();
          for (const [o, s] of Object.entries(Z(e))) t[o] === r[o] && (n[o] = s);
        }
        return n;
      }(d, w, n.enableSharedBuildCache);
      Object.assign(w, e), w.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e).join(" "), w.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e).map(([e, t]) => `builtin export ${e}='${t.replace(/'/g, "'\\''")}'`).join("; ");
    }
    const y = {
      cwd: r.cwd || s,
      env: w,
      stdio: r.stdio || ["pipe", "pipe", "pipe"],
      detached: r.detached,
      windowsHide: !0
    };
    try {
      const e = new Date(),
        t = (0, rt.D9)(Q.spawn, String(yt()), m, y);
      return dt && t.pid && function (e, t) {
        it.set(e, t);
      }(t, {
        startTime: e,
        pid: t.pid
      }), t;
    } catch (e) {
      throw new Error(`Failed to spawn sandboxed process: ${String(e)}`);
    }
  }(e, t, r, n);
  throw new Error(`Unsupported sandbox policy: ${String(n)}`);
}
function Mt(e, t, r, n) {
  const o = {};
  for (const [t, r] of Object.entries(e)) {
    const e = t.startsWith("file://") ? Dt(t) : t;
    o[e] = r;
    const n = Ot(e);
    n !== e && (o[n] = r);
  }
  return o;
}
function Dt(e) {
  let t = e.replace(/^file:\/\//, "");
  return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function Ot(e, t) {
  if ((0, Ne.$f)(e)) return e;
  try {
    return (t ?? p.realpathSync)(e);
  } catch {
    return e;
  }
}
class Ft extends Error {
  reason;
  constructor(e, t) {
    super(e), this.reason = t, this.name = "SandboxUnsupportedError";
  }
}
const Nt = "darwin" === process.platform;
function jt(e) {
  !function (e) {
    P();
    const {
      sandboxBinaryPath: t,
      workspaceReadEnabled: r,
      kernelMountBudget: n
    } = e;
    mt || (mt = t), void 0 !== r && (gt = r), void 0 !== n && (wt = n);
  }(e);
}
function Lt(e, t = [], r = {}, n) {
  if (r.env = o(r.env), n.enableSharedBuildCache && (r = {
    ...r,
    env: {
      ...o(process.env),
      ...Z(),
      ...r.env
    }
  }), "insecure_none" !== n.type) {
    if (Tt()) return $t(e, t, r, n);
    const o = kt;
    throw new Ft(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o || "unknown"}`, o ?? void 0);
  }
  return function (e, t, r, n = {
    spawn: Q.spawn,
    spawnWorkload: rt.D9
  }) {
    return n.spawnWorkload(n.spawn, e, t, {
      ...r,
      windowsHide: !0
    });
  }(e, t, r);
}
function Ut(e) {
  return Nt ? async function (e) {
    const t = it.get(e);
    return t ? (r = t.pid, n = t.startTime, o = t.unrelatedPids, new Promise(e => {
      try {
        const t = new Date(),
          s = ["show", "--style", "ndjson", "--predicate", 'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"', "--last", Math.ceil((t.getTime() - n.getTime()) / 1e3).toString()];
        (0, rt.D9)(st, "/usr/bin/log", s, (t, n) => {
          if (t) return void e([{
            raw: t.message
          }]);
          const s = n.split(/\r?\n/).filter(e => e.trim().length > 0),
            i = [];
          for (const e of s) try {
            const t = JSON.parse(e),
              n = t?.eventMessage ?? "";
            if (!n || "string" != typeof n) continue;
            const s = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(n);
            if (s) {
              const [, e, a, c, l, u, d] = s,
                h = Number(a);
              i.push({
                timestamp: t.timestamp,
                processName: e.trim(),
                pid: h,
                decision: c.toLowerCase(),
                decisionCode: Number(l),
                operation: u,
                target: d,
                duplicateCount: 1,
                raw: n,
                relationship: at(h, r, o)
              });
              continue;
            }
            const a = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(n);
            if (a) {
              const e = Number(a[1]),
                s = a[2],
                c = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(s);
              if (c) {
                const [, s, a, l, u, d, h] = c,
                  p = Number(a);
                i.push({
                  timestamp: t.timestamp,
                  processName: s.trim(),
                  pid: p,
                  decision: l.toLowerCase(),
                  decisionCode: Number(u),
                  operation: d,
                  target: h,
                  duplicateCount: e,
                  raw: n,
                  relationship: at(p, r, o)
                });
              } else i.push({
                timestamp: t.timestamp,
                duplicateCount: e,
                raw: n
              });
              continue;
            }
            i.push({
              timestamp: t.timestamp,
              raw: n
            });
          } catch {}
          e(i);
        });
      } catch (t) {
        e([{
          raw: String(t)
        }]);
      }
    })) : (console.log("No sandbox metadata found on child process"), []);
    var r, n, o;
  }(e) : Promise.resolve([]);
}
function Bt(e, t) {
  if (Nt) try {
    (0, p.accessSync)("/usr/bin/sandbox-exec", p.constants.X_OK);
  } catch {
    return !1;
  }
  return Tt(t?.ctx);
}
var Wt = __dep18,
  Ht = __dep19,
  qt = __dep20;
const zt = "--",
  Gt = 'builtin eval "$1" 3<&- 4>&-',
  Vt = 50,
  Kt = 262144;
class Jt {
  writable;
  pending = [];
  pendingBytes = 0;
  flushTimeout;
  flushPromise;
  flushIntervalMs;
  maxBufferedBytes;
  constructor(e, t) {
    this.writable = e, this.flushIntervalMs = t?.flushIntervalMs ?? Vt, this.maxBufferedBytes = t?.maxBufferedBytes ?? Kt;
  }
  async push(e, t) {
    0 !== t.length && (this.pending.push({
      type: e,
      data: t
    }), this.pendingBytes += t.length, this.pendingBytes >= this.maxBufferedBytes ? await this.flush() : this.scheduleFlush());
  }
  async flush() {
    if (this.clearFlushTimeout(), this.flushPromise) return await this.flushPromise, void (this.pendingBytes > 0 && (await this.flush()));
    if (0 === this.pendingBytes) return;
    const e = this.pending;
    this.pending = [], this.pendingBytes = 0, this.flushPromise = this.writeBufferedOutput(e);
    try {
      await this.flushPromise;
    } finally {
      this.flushPromise = void 0;
    }
  }
  async close() {
    await this.flush();
  }
  scheduleFlush() {
    void 0 === this.flushTimeout && (this.flushTimeout = setTimeout(() => {
      this.flushTimeout = void 0, this.flush();
    }, this.flushIntervalMs));
  }
  clearFlushTimeout() {
    void 0 !== this.flushTimeout && (clearTimeout(this.flushTimeout), this.flushTimeout = void 0);
  }
  async writeBufferedOutput(e) {
    for (const t of function (e) {
      if (0 === e.length) return [];
      const t = [];
      let r = e[0].type,
        n = [e[0].data];
      for (let o = 1; o < e.length; o++) {
        const s = e[o];
        s.type !== r ? (t.push({
          type: r,
          data: Buffer.concat(n)
        }), r = s.type, n = [s.data]) : n.push(s.data);
      }
      return t.push({
        type: r,
        data: Buffer.concat(n)
      }), t;
    }(e)) try {
      await this.writable.write(t);
    } catch {}
  }
}
function Zt(e) {
  const t = new Ne.Zv();
  if (!e.bufferOutputEvents) {
    const r = (t, r) => {
      e.writable.write({
        type: t,
        data: r
      }).catch(() => {});
    };
    return e.stdout?.on("data", e => {
      const n = t.note(e);
      void 0 !== n && n.length > 0 && r("stdout", n);
    }), e.stderr?.on("data", e => {
      r("stderr", e);
    }), {
      get stdoutBytes() {
        return t.bytes;
      },
      get stdoutPrefix() {
        return t.stdoutPrefix;
      },
      async waitForOutput() {},
      async releaseHeldStdout() {
        const e = t.takeHeld();
        void 0 !== e && e.length > 0 && r("stdout", e);
      },
      dropHeldStdout() {
        t.takeHeld();
      },
      async flush() {
        await this.releaseHeldStdout();
      }
    };
  }
  const r = new Jt(e.writable, e.outputLimiterOptions);
  let n;
  const o = Promise.all([Xt(e.stdout, r, t), Qt(e.stderr, "stderr", r)]).then(() => {}).catch(e => {
    n = e;
  });
  return {
    get stdoutBytes() {
      return t.bytes;
    },
    get stdoutPrefix() {
      return t.stdoutPrefix;
    },
    async waitForOutput() {
      if (await o, void 0 !== n) throw (e = n) instanceof Error ? e : new Error(String(e));
      var e;
    },
    async releaseHeldStdout() {
      const e = t.takeHeld();
      void 0 !== e && e.length > 0 && (await r.push("stdout", e));
    },
    dropHeldStdout() {
      t.takeHeld();
    },
    async flush() {
      await this.releaseHeldStdout(), await r.flush();
    }
  };
}
async function Xt(e, t, r) {
  if (e) for await (const n of e) {
    const e = r.note(n);
    void 0 !== e && e.length > 0 && (await t.push("stdout", e));
  }
}
async function Qt(e, t, r, n) {
  if (e) for await (const o of e) n?.(o), await r.push(t, o);
}
var Yt;
!function (e) {
  e.Zsh = "zsh", e.ZshLight = "zsh-light", e.Bash = "bash", e.PowerShell = "powershell", e.Naive = "naive";
}(Yt || (Yt = {}));
const er = {
  TERM: "dumb",
  NO_COLOR: "1",
  FORCE_COLOR: "0",
  _ZO_DOCTOR: "0"
};
function tr(e, t, r, n = {
  spawn: Q.spawn,
  killPid: process.kill.bind(process)
}) {
  const o = e.pid;
  if (void 0 === o) return;
  const s = () => {
    try {
      e.kill(r);
    } catch {}
  };
  switch (t) {
    case "process_group":
      try {
        n.killPid(-o, r);
      } catch {
        s();
      }
      return;
    case "windows_tree":
      try {
        n.spawn("taskkill", ["/pid", String(o), "/t", "/f"], {
          stdio: "ignore",
          windowsHide: !0
        }).on("error", s);
      } catch {
        s();
      }
      return;
    case "single_process":
      return void s();
    default:
      throw new Error(`Unknown process tree kill mode: ${String(t)}`);
  }
}
function rr(e, t = [], r = {}, n, o) {
  const s = Lt(e, t, {
    ...r,
    env: x(r.env ?? process.env)
  }, n);
  if (o) {
    const e = function (e) {
        return "win32" === e.platform ? "windows_tree" : e.detached ? "process_group" : "single_process";
      }({
        platform: process.platform,
        detached: !0 === r.detached
      }),
      t = () => {
        if (!s.pid) return;
        tr(s, e, "SIGTERM");
        const t = setTimeout(() => {
          !s.killed && s.pid && tr(s, e, "SIGKILL");
        }, 1e3);
        "process_group" !== e && s.once("exit", () => {
          clearTimeout(t);
        });
      };
    o.aborted ? t() : (o.addEventListener("abort", t, {
      once: !0
    }), s.once("exit", () => {
      o.removeEventListener("abort", t);
    }));
  }
  return s;
}
function nr(e) {
  const t = [];
  return e?.on("data", e => {
    t.push(e);
  }), () => Buffer.concat(t).toString("utf8");
}
function or(e) {
  e?.on("error", () => {});
}
const sr = "IFS= builtin read -r -d '' __cursor_command <&5 2>/dev/null || { builtin printf '%s\\n' 'The command did not run: a shell startup file ($BASH_ENV or .zshenv) closed or replaced file descriptor 5, which carries the command. Run it again; this shell now passes commands as arguments.' >&2; builtin exit 126; }; exec 5<&-; builtin set -- \"$__cursor_command\"; builtin unset __cursor_command; ";
function ir(e, t) {
  return 126 === e && "" === t;
}
function ar() {
  return "win32" !== process.platform;
}
function cr(e, t) {
  const r = e.stdio.at(5);
  r instanceof Wt.default.Writable && (or(r), r.end(`${t}\0`));
}
function lr(e, t) {
  e && (or(e), e.write(t), e.end());
}
function ur(e, t) {
  if (!e) return;
  or(e);
  const r = new Y.StringDecoder("utf8");
  e.on("data", e => {
    const n = r.write(e);
    "" !== n && t(n);
  }), e.on("end", () => {
    const e = r.end();
    "" !== e && t(e);
  });
}
function dr(e) {
  const t = e.indexOf("\n");
  return {
    cwd: Buffer.from(e.substring(0, t), "utf16le").toString("utf16le"),
    rest: e.substring(t)
  };
}
function hr(e, t) {
  const r = `${t}\n`,
    n = e.indexOf(r);
  return n >= 0 ? e.slice(n + r.length) : e;
}
function pr(e, t, r) {
  const n = `${t}\n`;
  if (!e.startsWith(n)) return;
  const o = e.indexOf(`\n${r}\n`, n.length - 1);
  return o < 0 ? void 0 : e.slice(n.length, o + 1);
}
const fr = "__CURSOR_BASH_STATE_START__",
  mr = "__CURSOR_BASH_STATE_END__";
var gr = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function wr(e) {
  if ("win32" === process.platform) {
    const t = /git.*bash/i;
    if (e && t.test(e)) return e;
    const r = v("bash", [], t).cmd;
    return t.test(r) ? r : null;
  }
  const t = process.env.SHELL;
  return t?.includes("bash") ? t : v("bash", []).cmd;
}
function yr(e) {
  if ("win32" !== process.platform) return e;
  const t = h.default.normalize(e),
    r = t[0]?.toLowerCase();
  return r && ":" === t[1] && t[2] === h.default.sep ? `/${r}${t.slice(2).replace(/\\/g, "/")}` : t.replace(/\\/g, "/");
}
function vr(e) {
  const t = e.pipeStdin ? Gt : `${Gt} < /dev/null`,
    r = e.useFileTransport ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)",
    n = e.useFileTransport ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4";
  return (e.pipeCommand ? sr : "") + `${r} && builtin shopt -s extglob && builtin eval -- "$snap"; { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + J + (e.envInjection ?? "") + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${e.sudoAliasInjection}${t}; }; ` + `COMMAND_EXIT_CODE=$?; ${n}; builtin exit $COMMAND_EXIT_CODE`;
}
class br {
  cwd;
  state;
  userTerminalHint;
  useFileStateTransport;
  commandPipeUnreadable;
  constructor(e, t, r, n = !1, o = !1) {
    this.cwd = e, this.state = t, this.userTerminalHint = r, this.useFileStateTransport = n, this.commandPipeUnreadable = o;
  }
  async getCwd() {
    return this.cwd;
  }
  clone(e) {
    return new br(e ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport, this.commandPipeUnreadable);
  }
  resetSessionCwdAfterHopCdFailure(e) {
    const {
      cwd: t,
      sandboxWorkspaceRoot: r
    } = e;
    h.default.resolve(t) === h.default.resolve(this.cwd) && (this.cwd = void 0 === r || h.default.resolve(r) === h.default.resolve(t) || (0, Ne.A)(r) ? (0, Ne.D1)() : r);
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const o = function (e, t, r) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, o;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = t[Symbol.dispose], r && (o = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            o && (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }), e.stack.push({
              value: t,
              dispose: n,
              async: r
            });
          } else r && e.stack.push({
            async: !0
          });
          return t;
        }(n, (0, Ht.VI)(e.withName("BashState.execute")), !1),
        s = r?.pipeStdin ?? !1,
        i = (0, qt.Jt)(),
        a = r?.workingDirectory ?? this.cwd,
        l = function (e, t = process.platform, r = process.env) {
          const n = {
            ...r,
            ...er,
            ...e?.env
          };
          return c(n), "win32" === t && (D(n), O(n)), n;
        }(r),
        u = T(l),
        d = this.useFileStateTransport,
        p = !d && !this.commandPipeUnreadable;
      let f, m, g;
      if (d) {
        f = await (0, X.mkdtemp)(h.default.join(B.default.tmpdir(), "cursor-bash-state-")), m = h.default.join(f, "state-in"), g = h.default.join(f, "state-out"), await (0, X.writeFile)(m, this.state, "utf8"), await (0, X.writeFile)(g, "", "utf8").catch(() => {});
        const e = yr(m),
          t = yr(g);
        l.CURSOR_STATE_INPUT_FILE = e, l.CURSOR_STATE_OUTPUT_FILE = t;
      }
      const w = function (e) {
          return ["-O", "extglob", "-c", e.script, zt, ...(void 0 === e.command ? [] : [e.command])];
        }({
          script: vr({
            pipeCommand: p,
            useFileTransport: d,
            sudoAliasInjection: u,
            pipeStdin: s,
            envInjection: "win32" === process.platform && !0 === r?.powershellUtf8ChildEnv ? j : ""
          }),
          command: p ? void 0 : t
        }),
        y = wr(this.userTerminalHint);
      if (!y) throw new Error("Can't find Bash");
      const v = r?.sandboxWorkspaceRoot ?? a,
        b = (await Je(v, r?.sandboxPolicy)).policy,
        S = "insecure_none" !== b.type ? {
          ...b,
          sandboxWorkspaceRoot: v
        } : b;
      let k = "";
      const _ = async () => {
          if (d) {
            if (!g) return void (k = this.state);
            try {
              k = await (0, X.readFile)(g, "utf8");
            } catch (e) {
              console.warn("[shell-exec] Failed to read bash state file", e), k = this.state;
            }
          }
        },
        C = async () => {
          if (f) try {
            await (0, X.rm)(f, {
              recursive: !0,
              force: !0
            });
          } catch {}
        };
      let E;
      (0, Ne.$Y)(a) && (0, Ht.HF)(o.ctx, Ne.yo);
      try {
        E = rr(y, w, {
          env: l,
          stdio: [s ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", p ? "pipe" : "ignore"],
          cwd: a,
          detached: !0
        }, S, r?.signal);
      } catch (e) {
        throw await C(), e;
      }
      E.on("spawn", async () => {
        try {
          await i.write({
            type: "stdin_ready",
            stdin: E.stdin ?? void 0,
            pid: E.pid
          });
        } catch (e) {}
      });
      const x = Zt({
        stdout: E.stdout,
        stderr: E.stderr,
        writable: i,
        bufferOutputEvents: r?.bufferOutputEvents,
        outputLimiterOptions: r?.outputLimiterOptions
      });
      E.on("error", async e => {
        if ((0, Ne.fK)(e, a)) {
          this.resetSessionCwdAfterHopCdFailure({
            cwd: a,
            sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
          }), (0, Ht.HF)(o.ctx, Ne.Gq);
          const e = (0, Ne.iA)(a);
          console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`);
        }
        await C(), i.throw(e);
      });
      let P = null,
        I = null,
        R = null,
        A = !1;
      const $ = async e => {
        if (A) return;
        if (A = !0, R && (clearTimeout(R), R = null), (0, Ht.HF)(o.ctx, "exit"), e) try {
          await x.waitForOutput();
        } catch (e) {
          return await C(), void i.throw(e instanceof Error ? e : new Error(String(e)));
        }
        const t = (0, Ne.wz)({
          exitCode: P,
          stdoutBytes: x.stdoutBytes,
          stdoutPrefix: x.stdoutPrefix,
          cwd: a
        }) && "" === k;
        if (t && x.dropHeldStdout(), await x.flush(), p && ir(P, k) && (this.commandPipeUnreadable = !0), t) {
          this.resetSessionCwdAfterHopCdFailure({
            cwd: a,
            sandboxWorkspaceRoot: r?.sandboxWorkspaceRoot
          }), await C(), (0, Ht.HF)(o.ctx, Ne.Gq);
          const e = (0, Ne.iA)(a);
          return console.warn(`[shell-exec] working directory is not accessible (${e.cwdKind}:${e.cwdHash})`), void i.throw((0, Ne.Vn)(a));
        }
        if (!r?.signal?.aborted) {
          await _();
          const e = `${fr}\n`,
            t = `${mr}\n`;
          if (k.startsWith(e) && k.endsWith(t)) {
            let t = k.slice(e.length);
            t = t.slice(0, -26);
            const {
              cwd: r,
              rest: n
            } = dr(t);
            this.state = n, "win32" !== process.platform && r?.startsWith("/") && (this.cwd = r);
          }
        }
        if (S.captureDenies) try {
          const e = await Ut(E);
          e && e.length > 0 && (await i.write({
            type: "sandbox_denies",
            events: e
          }));
        } catch {}
        try {
          await i.write({
            type: "exit",
            code: P,
            signal: I ?? void 0,
            data: "",
            aborted: r?.signal?.aborted ?? !1
          }), i.close();
        } catch {
          i.close();
        }
        await C();
      };
      E.on("exit", (e, t) => {
        P = e, I = t;
        const n = r?.closeTimeout ?? 5e3;
        n > 0 && (R = setTimeout(() => {
          console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), $(!1);
        }, n));
      }), E.on("close", async () => {
        await $(!0);
      });
      const M = E.stdio[3],
        F = E.stdio[4],
        N = M instanceof Wt.default.Writable ? M : null,
        L = F instanceof Wt.default.Readable ? F : null;
      p && cr(E, t), d || (lr(N, this.state), ur(L, e => {
        k += e;
      })), yield* i;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      gr(n);
    }
  }
}
async function Sr(e) {
  const t = {
      ...process.env,
      ...er,
      ...e?.env
    },
    r = "__CURSOR_STATE_MARKER__",
    n = ["-O", "extglob", "-ilc", `#!/usr/bin/env bash\n\n# Usage:\n#   source dump_bash_state.bash\n#   dump_bash_state OUTPUT_FILE\n# Or execute directly (captures a subshell's state):\n#   ./dump_bash_state.bash OUTPUT_FILE\n\ndump_bash_state() {\n  set -euo pipefail\n\n  # Helper to log timing, only if DUMP_BASH_STATE_TIMING is set\n  if [[ -n "\${DUMP_BASH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    if [[ "\${BASH_VERSION%%.*}" -ge 5 ]]; then\n      # Use EPOCHREALTIME if available (bash 5+)\n      local start_time=\${EPOCHREALTIME}\n      local step_start=\${EPOCHREALTIME}\n      _log_timing() {\n        local step_name="$1"\n        local now=\${EPOCHREALTIME}\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    else\n      # Fallback for older bash versions\n      local start_time=$(command date +%s.%N)\n      local step_start=$(command date +%s.%N)\n      _log_timing() {\n        local step_name="$1"\n        local now=$(command date +%s.%N)\n        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")\n        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")\n        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n        step_start=$now\n      }\n    fi\n  else\n    _log_timing() { :; }\n  fi\n\n  # Helper to append a line to output file\n  _emit() {\n    builtin printf '%s\n' "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values. printf %q quotes the value for eval\n  # without starting a process, and every command pays this dump and its restore.\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      local quoted\n      builtin printf -v quoted '%q' "$content"\n      builtin printf 'cursor_snap_%s=%s\n' "$var_name" "$quoted"\n      builtin printf 'builtin eval "$cursor_snap_%s"\n' "$var_name"\n    fi\n  }\n\n  # Aliases replay after the functions, so a user function named alias would run in place of\n  # each alias line. Only a line that starts an alias gets builtin: a quoted value can span\n  # lines, and a continuation line can start with "alias ". awk reads bytes under LC_ALL=C, so a\n  # value that is not valid UTF-8 does not make it warn. Without awk the lines stay as they are.\n  _builtin_alias_lines() {\n    [[ -n "$1" ]] || return 0\n    builtin printf '%s\n' "$1" | LC_ALL=C command awk -v sq="'" '\n      !q && /^alias / { $0 = "builtin " $0 }\n      {\n        print\n        for (i = 1; i <= length($0); i++) {\n          c = substr($0, i, 1)\n          if (q == 1) { if (c == sq) q = 0 }\n          else if (q == 2) { if (c == "\\\\") i++; else if (c == sq) q = 0 }\n          else if (c == "\\\\") i++\n          else if (c == "$" && substr($0, i + 1, 1) == sq) { q = 2; i++ }\n          else if (c == sq) q = 1\n        }\n      }' 2>/dev/null ||\n      builtin printf '%s\n' "$1"\n  }\n\n  # Start fresh\n  _log_timing "file_init"\n\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_BASH_STATE_START__"\n\n  # Working directory\n  _emit "$PWD"\n  _log_timing "working_dir"\n\n  # The shell starts in POSIX mode when it inherits POSIXLY_CORRECT. POSIX_MODE\n  # turns it back on after the functions if the session had it on.\n  _emit "builtin set +o posix; builtin unset POSIXLY_CORRECT"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (export statements)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  local env_vars\n  env_vars=$(builtin export -p 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command grep -vE '^(declare|export)( -[a-zA-Z]+)* POSIXLY_CORRECT(=|$)' || true)\n  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf '%s\n' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS"\n  _log_timing "environment"\n\n  # POSIX shell options (replayable as set +/-o lines). Exclude the errexit/nounset/\n  # pipefail this function force-enables above, so they are not baked into the restored\n  # snapshot and leaked onto every subsequent command (a stray pipefail makes a\n  # successful 'cmd | head' report exit 141).\n  local posix_opts\n  posix_opts=$(builtin shopt -po 2>/dev/null | command grep -vE '^set [-+]o (errexit|nounset|pipefail|posix)$' || true)\n  _emit_encoded "$posix_opts" "POSIX_OPTS"\n  _log_timing "posix_options"\n\n  # Bash shopt options (replayable as shopt -s/-u lines)\n  local bash_opts\n  bash_opts=$(builtin shopt -p 2>/dev/null || true)\n  _emit_encoded "$bash_opts" "BASH_OPTS"\n  _log_timing "bash_options"\n\n  # Functions: capture all functions\n  local all_functions\n  all_functions=$(builtin declare -f 2>/dev/null || true)\n  _emit_encoded "$all_functions" "FUNCTIONS"\n  _log_timing "functions"\n\n  # Aliases\n  local aliases\n  aliases=$(_builtin_alias_lines "$(builtin alias -p 2>/dev/null || true)" || true)\n  _emit_encoded "$aliases" "ALIASES"\n  _log_timing "aliases"\n\n  # POSIX mode makes a function name that is not a POSIX identifier, such as my-fn, a\n  # fatal error, so it is replayed after the functions. Turning it on resets shopt\n  # options such as inherit_errexit, so the shopt state is replayed again after it.\n  local posix_mode=""\n  if builtin shopt -qo posix; then\n    posix_mode=$(builtin printf 'builtin set -o posix\n'; builtin export -p | command grep -E '^(declare|export)( -[a-zA-Z]+)* POSIXLY_CORRECT=' || true; command sed 's/^shopt /builtin shopt /' <<<"$bash_opts")\n  fi\n  _emit_encoded "$posix_mode" "POSIX_MODE"\n  _log_timing "posix_mode"\n\n  # Done\n  _emit "# end of bash state dump"\n  _emit "__CURSOR_BASH_STATE_END__"\n  _log_timing "finalize"\n}\n builtin printf '${r}\\n'; dump_bash_state`],
    o = wr(e?.userTerminalHint);
  if (!o) throw new Error("Can't find Bash");
  const s = rr(o, n, {
      env: t,
      detached: !0,
      stdio: ["ignore", "pipe", "pipe"]
    }, {
      type: "insecure_none"
    }, e?.signal),
    i = nr(s.stdout);
  s.on("error", e => {
    console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
  }), await new Promise(e => {
    s.on("close", () => {
      e(void 0);
    });
  });
  const a = pr(hr(i(), r), fr, mr) ?? `${process.cwd()}\n`,
    {
      cwd: c,
      rest: l
    } = dr(a),
    u = "win32" === process.platform,
    d = "win32" === process.platform ? process.cwd() : c;
  return new br(d, l, e?.userTerminalHint, u);
}
var kr = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class _r {
  initializer;
  promise;
  constructor(e) {
    this.initializer = e;
  }
  getExecutor() {
    return void 0 === this.promise && (this.promise = this.initializer()), this.promise;
  }
  async getCwd() {
    return (await this.getExecutor()).getCwd();
  }
  clone(e) {
    return new _r(async () => (await this.getExecutor()).clone(e));
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      !function (e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, o;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n);
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function () {
            try {
              o.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          });
        } else r && e.stack.push({
          async: !0
        });
      }(n, (0, Ht.VI)(e.withName("LazyTerminalExecutor.execute")), !1);
      const o = await this.getExecutor();
      for await (const n of o.execute(e, t, r)) yield n;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      kr(n);
    }
  }
}
const Cr = "\ntry { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\n",
  Er = e => e.map(e => `'${e}'`).join(", "),
  xr = `\ntry {\n    if ($PSVersionTable.PSVersion.Major -lt 6 -and [Console]::OutputEncoding.CodePage -eq 65001) {\n        # Windows PowerShell calls UTF-8 with a BOM 'UTF8'; PowerShell 7 calls it 'utf8BOM' and\n        # reaches this block only when a test fakes the version.\n        $__cursorUtf8 = if ($PSVersionTable.PSEdition -eq 'Core') { 'utf8BOM' } else { 'UTF8' }\n        $__cursorGetContentNames = @('Get-Content') + @(Get-Alias -Definition Get-Content -ErrorAction Ignore | ForEach-Object { $_.Name })\n        $__cursorHasEncodingDefault = $false\n        foreach ($__cursorKey in @($PSDefaultParameterValues.Keys)) {\n            $__cursorKeyParts = "$__cursorKey" -split ':', 2\n            if ($__cursorKeyParts.Count -ne 2 -or 'Encoding' -notlike $__cursorKeyParts[1].Trim()) { continue }\n            foreach ($__cursorName in $__cursorGetContentNames) {\n                if ($__cursorName -like $__cursorKeyParts[0].Trim()) { $__cursorHasEncodingDefault = $true }\n            }\n        }\n        # The body of the proxy for Get-Content. Its param block comes from the cmdlet itself.\n        # Every step of its own is guarded, so a failure in the proxy reads the file as the\n        # default did.\n        $__cursorReaderBody = @'\nbegin {\n    $__cursorStopped = $false\n    $__cursorLeave = $false\n    # A 64 KiB window of the file and the file's length: the first 64 KiB, the window an\n    # editor's encoding guess reads, or the last 64 KiB, the end that -Tail reads; $null for a\n    # path that is not a file.\n    $__cursorWindowOf = {\n        param([string]$__cursorFile, [bool]$__cursorFromEnd)\n        if (-not [System.IO.File]::Exists($__cursorFile)) { return $null }\n        $__cursorHead = New-Object byte[] 65536\n        $__cursorCount = 0\n        $__cursorStream = [System.IO.File]::Open($__cursorFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite -bor [System.IO.FileShare]::Delete)\n        try {\n            $__cursorLength = $__cursorStream.Length\n            if ($__cursorFromEnd -and $__cursorLength -gt $__cursorHead.Length) { $__cursorStream.Position = $__cursorLength - $__cursorHead.Length }\n            while ($__cursorCount -lt $__cursorHead.Length) {\n                $__cursorRead = $__cursorStream.Read($__cursorHead, $__cursorCount, $__cursorHead.Length - $__cursorCount)\n                if ($__cursorRead -le 0) { break }\n                $__cursorCount += $__cursorRead\n            }\n        } finally { $__cursorStream.Dispose() }\n        return @{ Length = $__cursorLength; Head = $__cursorHead; Count = $__cursorCount; FromEnd = $__cursorFromEnd }\n    }\n    # How a file reads: 'ansi' for text in the code page the cmdlet reads by default, 'either'\n    # for a file that reads the same under UTF-8 and under that default, 'utf8' for everything\n    # else, which the default for the cmdlet read as UTF-8 before this proxy.\n    $__cursorReadingOf = {\n        param($__cursorWas, $__cursorAnsi)\n        $__cursorHead = $__cursorWas.Head\n        $__cursorStart = 0\n        $__cursorEnd = $__cursorWas.Count\n        # Nothing, or a byte order mark, which the cmdlet reads by whatever encoding it was given.\n        if ($__cursorEnd -eq 0) { return 'either' }\n        $__cursorFull = $__cursorEnd -eq $__cursorHead.Length\n        if ($__cursorWas.FromEnd) {\n            # A window from the end may start inside a character; the rest of that character\n            # is left out. It ends where the file does.\n            while ($__cursorStart -lt 3 -and $__cursorStart -lt $__cursorEnd -and ($__cursorHead[$__cursorStart] -band 0xC0) -eq 0x80) { $__cursorStart++ }\n        } else {\n            if ($__cursorEnd -ge 3 -and $__cursorHead[0] -eq 0xEF -and $__cursorHead[1] -eq 0xBB -and $__cursorHead[2] -eq 0xBF) { return 'either' }\n            if ($__cursorEnd -ge 2 -and (($__cursorHead[0] -eq 0xFF -and $__cursorHead[1] -eq 0xFE) -or ($__cursorHead[0] -eq 0xFE -and $__cursorHead[1] -eq 0xFF))) { return 'either' }\n            if ($__cursorFull) {\n                # A full window may end inside a character; that character is left out.\n                $__cursorAt = $__cursorEnd - 1\n                while ($__cursorAt -gt $__cursorEnd - 4 -and ($__cursorHead[$__cursorAt] -band 0xC0) -eq 0x80) { $__cursorAt-- }\n                if ($__cursorHead[$__cursorAt] -ge 0xC0) {\n                    $__cursorNeed = if ($__cursorHead[$__cursorAt] -ge 0xF0) { 4 } elseif ($__cursorHead[$__cursorAt] -ge 0xE0) { 3 } else { 2 }\n                    if ($__cursorEnd - $__cursorAt -lt $__cursorNeed) { $__cursorEnd = $__cursorAt }\n                }\n            }\n        }\n        # Bytes that are not UTF-8 decode to U+FFFD; a decoder that threw instead would leave a\n        # record in $Error for every such file. A character beyond ASCII takes more bytes than\n        # code units, so all-ASCII content is the one that decodes to as many; it reads the\n        # same either way when the window is the whole file, or the end of one.\n        $__cursorText = [System.Text.UTF8Encoding]::new($false, $false).GetString($__cursorHead, $__cursorStart, $__cursorEnd - $__cursorStart)\n        if ($__cursorText.IndexOf([char]0xFFFD) -lt 0) {\n            if ($__cursorStart -eq 0 -and $__cursorText.Length -eq $__cursorEnd -and ($__cursorWas.FromEnd -or $__cursorEnd -eq $__cursorWas.Length)) { return 'either' }\n            return 'utf8'\n        }\n        # A NUL byte is binary content or UTF-16 without a BOM.\n        if ($__cursorText.IndexOf([char]0) -ge 0) { return 'utf8' }\n        # Of the bytes beyond ASCII, those in a UTF-8 sequence against the rest: text in a legacy\n        # code page forms a sequence here and there by chance, UTF-8 text with a stray byte loses\n        # that byte, and the file reads as the encoding that keeps more. Counted over a view\n        # with one character per byte, where U+FFFD written in UTF-8 is a sequence like any other.\n        $__cursorView = [System.Text.Encoding]::GetEncoding(28591).GetString($__cursorHead, $__cursorStart, $__cursorEnd - $__cursorStart)\n        $__cursorBeyondAscii = $__cursorView.Length - [regex]::Replace($__cursorView, '[^\\x00-\\x7F]', '').Length\n        $__cursorKept = $__cursorView.Length - [regex]::Replace($__cursorView, '[\\xC2-\\xDF][\\x80-\\xBF]|\\xE0[\\xA0-\\xBF][\\x80-\\xBF]|[\\xE1-\\xEC\\xEE\\xEF][\\x80-\\xBF]{2}|\\xED[\\x80-\\x9F][\\x80-\\xBF]|\\xF0[\\x90-\\xBF][\\x80-\\xBF]{2}|[\\xF1-\\xF3][\\x80-\\xBF]{3}|\\xF4[\\x80-\\x8F][\\x80-\\xBF]{2}', '').Length\n        if ($__cursorKept * 2 -ge $__cursorBeyondAscii) { return 'utf8' }\n        # Text in the code page decodes and encodes back to the same bytes, to no control\n        # character but whitespace or an escape (as in a color code), and to no private-use or\n        # replacement character, which stand for bytes the code page leaves undefined. A full\n        # window may end, or one from the end may start, inside a two-byte character; that\n        # byte is left out on a second try.\n        foreach ($__cursorCut in @(0, 1)) {\n            if ($__cursorCut -gt 0 -and -not $__cursorFull) { break }\n            $__cursorFrom = 0\n            $__cursorTo = $__cursorEnd - $__cursorCut\n            if ($__cursorWas.FromEnd) { $__cursorFrom = $__cursorCut; $__cursorTo = $__cursorEnd }\n            $__cursorAnsiText = $__cursorAnsi.GetString($__cursorHead, $__cursorFrom, $__cursorTo - $__cursorFrom)\n            $__cursorBack = $__cursorAnsi.GetBytes($__cursorAnsiText)\n            if ($__cursorBack.Length -ne $__cursorTo - $__cursorFrom -or [System.Convert]::ToBase64String($__cursorBack) -ne [System.Convert]::ToBase64String($__cursorHead, $__cursorFrom, $__cursorTo - $__cursorFrom)) { continue }\n            if ([regex]::IsMatch($__cursorAnsiText, '[\\x00-\\x08\\x0E-\\x1A\\x1C-\\x1F\\x7F-\\x9F\\uE000-\\uF8FF\\uFFFD]')) { return 'utf8' }\n            return 'ansi'\n        }\n        return 'utf8'\n    }\n    try {\n        $__cursorBound = $null\n        if ($PSBoundParameters.ContainsKey('Path')) { $__cursorBound = @{ Path = $PSBoundParameters['Path'] } }\n        elseif ($PSBoundParameters.ContainsKey('LiteralPath')) { $__cursorBound = @{ LiteralPath = $PSBoundParameters['LiteralPath'] } }\n        # The cmdlet takes its -Encoding parameter from the provider of its first path, or of\n        # the current location when the path comes from the pipeline; another provider has\n        # none, and reads as it did.\n        if ($null -eq $__cursorBound) {\n            if ($ExecutionContext.SessionState.Path.CurrentLocation.Provider.Name -ne 'FileSystem') { $__cursorLeave = $true }\n        } else {\n            $__cursorLiteral = $__cursorBound.ContainsKey('LiteralPath')\n            $__cursorFiles = New-Object System.Collections.Generic.List[string]\n            $__cursorFirst = $true\n            foreach ($__cursorPath in @(@($__cursorBound.Values)[0])) {\n                $__cursorProvider = $null\n                $__cursorDrive = $null\n                if ($__cursorLiteral -or -not [System.Management.Automation.WildcardPattern]::ContainsWildcardCharacters("$__cursorPath")) {\n                    $__cursorResolved = @($ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("$__cursorPath", [ref]$__cursorProvider, [ref]$__cursorDrive))\n                } else {\n                    $__cursorResolved = @($ExecutionContext.SessionState.Path.GetResolvedProviderPathFromPSPath("$__cursorPath", [ref]$__cursorProvider))\n                }\n                if ($null -eq $__cursorProvider -or $__cursorProvider.Name -ne 'FileSystem') {\n                    if ($__cursorFirst) { $__cursorLeave = $true }\n                    $__cursorFiles = $null\n                    break\n                }\n                $__cursorFirst = $false\n                $__cursorFiles.AddRange([string[]]$__cursorResolved)\n            }\n            # -Filter, -Include and -Exclude change which files the cmdlet reads, and -Stream reads\n            # another stream than the one the window comes from. The call is left to the cmdlet\n            # when a file it names is text in the code page and none reads as UTF-8.\n            if ($null -ne $__cursorFiles -and -not $PSBoundParameters.ContainsKey('Stream') -and\n                -not $PSBoundParameters.ContainsKey('Filter') -and -not $PSBoundParameters.ContainsKey('Include') -and\n                -not $PSBoundParameters.ContainsKey('Exclude')) {\n                # The encoding the cmdlet reads a file in when the call names none: the system's\n                # ANSI code page on Windows PowerShell. PowerShell 7 reaches this block only when\n                # a test fakes the version, and its Default is UTF-8 on every system, so the\n                # culture's code page stands in there. A system whose code page is UTF-8 reads\n                # every file the same either way.\n                $__cursorAnsi = if ($PSVersionTable.PSEdition -eq 'Core') { [System.Text.Encoding]::GetEncoding([System.Globalization.CultureInfo]::CurrentCulture.TextInfo.ANSICodePage) } else { [System.Text.Encoding]::Default }\n                $__cursorAnsiFile = $false\n                $__cursorUtf8File = $false\n                if ($__cursorAnsi.CodePage -ne 65001) {\n                    foreach ($__cursorFile in $__cursorFiles) {\n                        $__cursorWas = & $__cursorWindowOf $__cursorFile $false\n                        if ($null -eq $__cursorWas) { continue }\n                        $__cursorReading = & $__cursorReadingOf $__cursorWas $__cursorAnsi\n                        # -Tail reads the end of the file, which a log appended to by more than\n                        # one program need not write in the code page of its start.\n                        if ($__cursorReading -eq 'ansi' -and $PSBoundParameters.ContainsKey('Tail') -and $__cursorWas.Length -gt $__cursorWas.Head.Length) {\n                            if ((& $__cursorReadingOf (& $__cursorWindowOf $__cursorFile $true) $__cursorAnsi) -eq 'utf8') { $__cursorReading = 'utf8' }\n                        }\n                        if ($__cursorReading -eq 'ansi') { $__cursorAnsiFile = $true }\n                        elseif ($__cursorReading -eq 'utf8') { $__cursorUtf8File = $true; break }\n                    }\n                }\n                $__cursorLeave = $__cursorAnsiFile -and -not $__cursorUtf8File\n            }\n        }\n    } catch { $__cursorLeave = $false }\n    # An -Encoding on the command line or from a default is the caller's, and -AsByteStream\n    # (PowerShell 7's -Encoding Byte) reads no text.\n    if (-not $__cursorLeave -and -not $PSBoundParameters.ContainsKey('Encoding') -and -not $PSBoundParameters.ContainsKey('AsByteStream')) {\n        $PSBoundParameters['Encoding'] = 'UTF8'\n    }\n    # An error the caller asked to stop on ends the caller too, as it does from the cmdlet.\n    # Any other terminating error of the cmdlet ends the statement and the caller goes on, as\n    # with the writers' proxy; the pipeline it ended is not stepped again.\n    try {\n        $outBuffer = $null\n        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) { $PSBoundParameters['OutBuffer'] = 1 }\n        $wrappedCmd = $ExecutionContext.InvokeCommand.GetCommand('__CURSORTARGET__', [System.Management.Automation.CommandTypes]::Cmdlet)\n        $scriptCmd = { & $wrappedCmd @PSBoundParameters }\n        $steppablePipeline = $scriptCmd.GetSteppablePipeline($myInvocation.CommandOrigin)\n        # The cmdlet binds here in a scope under this call's, where the variable the\n        # dynamicparam block set keeps the default for the module-qualified call off, so the\n        # reading above stands.\n        $steppablePipeline.Begin($PSCmdlet)\n    } catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n}\nprocess {\n    if ($__cursorStopped) { return }\n    try { $steppablePipeline.Process($_) }\n    catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n}\nend {\n    if ($__cursorStopped) { return }\n    try { $steppablePipeline.End() }\n    catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n}\n'@\n        if (-not $__cursorHasEncodingDefault) {\n            try {\n                # A function of this name that a profile defined stays in charge; the proxy is built on the cmdlet alone.\n                $__cursorCmdlet = @(Microsoft.PowerShell.Core\\Get-Command -Name Get-Content -ErrorAction Stop)[0]\n                if ($__cursorCmdlet.CommandType -eq 'Cmdlet') {\n                    $__cursorTarget = "$($__cursorCmdlet.ModuleName)\\$($__cursorCmdlet.Name)"\n                    $__cursorMetadata = New-Object System.Management.Automation.CommandMetadata $__cursorCmdlet\n                    $__cursorProxyText = @(\n                        '<#', ".ForwardHelpTargetName $__cursorTarget", '.ForwardHelpCategory Cmdlet', '#>',\n                        [System.Management.Automation.ProxyCommand]::GetCmdletBindingAttribute($__cursorMetadata),\n                        'param(', [System.Management.Automation.ProxyCommand]::GetParamBlock($__cursorMetadata), ')',\n                        # The proxy's own -Encoding is bound after this block runs, and must stay unbound\n                        # unless the caller gave one: the default below is off while this variable is in\n                        # scope, which it is from here, through the binding of the cmdlet the proxy steps,\n                        # to the end of the call. It is a variable of the call's own scope, so a call whose\n                        # body never runs, as when a completer or Get-Command binds the parameters or a\n                        # bind fails, leaves nothing behind.\n                        'dynamicparam {', '$__cursorGetContentBinding = $true',\n                        [System.Management.Automation.ProxyCommand]::GetDynamicParam($__cursorMetadata), '}',\n                        $__cursorReaderBody.Replace('__CURSORTARGET__', $__cursorTarget)\n                    ) -join [Environment]::NewLine\n                    # Global, as a profile would define it, so that a module's code reaches it too.\n                    Microsoft.PowerShell.Management\\Set-Item -LiteralPath 'function:global:Get-Content' -Value ([scriptblock]::Create($__cursorProxyText)) -ErrorAction Stop\n                }\n            } catch { }\n            # A call that names the cmdlet by its module, Microsoft.PowerShell.Management\\Get-Content,\n            # bypasses a function of the cmdlet's name; this default keeps it reading UTF-8, as the\n            # default this proxy replaced did. A default from a script block is not applied when the\n            # block returns nothing, which it does while the proxy binds: the block runs in the scope\n            # of the call being bound, where the proxy's variable is in scope. The global, never set\n            # to anything else, is what the block reads outside such a call, and under strict mode a\n            # variable it could not read would be an error. The string is the name of the encoding\n            # on Windows PowerShell; PowerShell 7 takes an encoding object from a block.\n            try {\n                $global:__cursorGetContentBinding = $false\n                $PSDefaultParameterValues['Get-Content:Encoding'] = {\n                    if (-not $__cursorGetContentBinding) {\n                        if ($PSVersionTable.PSEdition -eq 'Core') { [System.Text.UTF8Encoding]::new($true) } else { 'UTF8' }\n                    }\n                }\n            } catch { }\n        }\n        # The body of the proxy for Set-Content and Export-Csv. Its param block comes from the\n        # cmdlet itself. Every step of its own is guarded, so a failure in the proxy leaves the\n        # file as the cmdlet writes it.\n        $__cursorProxyBody = @'\nbegin {\n    # The file system paths the call writes, each with its own 'bom' or 'nobom', and what each\n    # held before the call; the call gets -Encoding only when every path has a decision.\n    $__cursorFiles = $null\n    $__cursorDecisions = @{}\n    $__cursorBefore = @{}\n    $__cursorDecided = $false\n    # The command line asked for UTF8 by name, for files whose readers take it without a BOM.\n    $__cursorAsked = $false\n    $__cursorStrip = $false\n    $__cursorStopped = $false\n    $__cursorScopeBound = $null\n    $__cursorInvoked = "$($MyInvocation.InvocationName)"\n    # The first 8 KiB of the file and its length; $null for a file that does not exist.\n    $__cursorHeadOf = {\n        param([string]$__cursorFile)\n        if (-not [System.IO.File]::Exists($__cursorFile)) { return $null }\n        $__cursorHead = New-Object byte[] 8192\n        $__cursorCount = 0\n        $__cursorStream = [System.IO.File]::Open($__cursorFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite -bor [System.IO.FileShare]::Delete)\n        try {\n            $__cursorLength = $__cursorStream.Length\n            while ($__cursorCount -lt $__cursorHead.Length) {\n                $__cursorRead = $__cursorStream.Read($__cursorHead, $__cursorCount, $__cursorHead.Length - $__cursorCount)\n                if ($__cursorRead -le 0) { break }\n                $__cursorCount += $__cursorRead\n            }\n        } finally { $__cursorStream.Dispose() }\n        return @{ Length = $__cursorLength; Head = $__cursorHead; Count = $__cursorCount }\n    }\n    # 'bom' or 'nobom' for a file the proxy writes in UTF-8, $null for one it leaves to the\n    # cmdlet: the file's own bytes decide when it has content, its extension otherwise.\n    $__cursorEncodingOf = {\n        param([string]$__cursorFile, $__cursorWas)\n        $__cursorExtension = [System.IO.Path]::GetExtension($__cursorFile).ToLowerInvariant()\n        if ($__cursorExtension -in @(${Er([".bat", ".cmd", ".reg", ".ini", ".inf", ".vbs", ".vbe", ".wsf"])})) { return $null }\n        if ([System.IO.Directory]::Exists($__cursorFile)) { return $null }\n        if ($null -ne $__cursorWas -and $__cursorWas.Count -gt 0) {\n            $__cursorHead = $__cursorWas.Head\n            $__cursorEnd = $__cursorWas.Count\n            if ($__cursorEnd -ge 3 -and $__cursorHead[0] -eq 0xEF -and $__cursorHead[1] -eq 0xBB -and $__cursorHead[2] -eq 0xBF) { return 'bom' }\n            if ($__cursorEnd -ge 2 -and (($__cursorHead[0] -eq 0xFF -and $__cursorHead[1] -eq 0xFE) -or ($__cursorHead[0] -eq 0xFE -and $__cursorHead[1] -eq 0xFF))) { return $null }\n            if ($__cursorEnd -eq $__cursorHead.Length) {\n                # A full header may end inside a character; that character is left out.\n                $__cursorAt = $__cursorEnd - 1\n                while ($__cursorAt -gt $__cursorEnd - 4 -and ($__cursorHead[$__cursorAt] -band 0xC0) -eq 0x80) { $__cursorAt-- }\n                if ($__cursorHead[$__cursorAt] -ge 0xC0) {\n                    $__cursorNeed = if ($__cursorHead[$__cursorAt] -ge 0xF0) { 4 } elseif ($__cursorHead[$__cursorAt] -ge 0xE0) { 3 } else { 2 }\n                    if ($__cursorEnd - $__cursorAt -lt $__cursorNeed) { $__cursorEnd = $__cursorAt }\n                }\n            }\n            # A strict decode throws on bytes that are not UTF-8; a character beyond ASCII takes\n            # more bytes than code units, so all-ASCII content is the one that decodes to as many.\n            try { $__cursorText = [System.Text.UTF8Encoding]::new($false, $true).GetString($__cursorHead, 0, $__cursorEnd) } catch { return $null }\n            if ($__cursorText.Length -lt $__cursorEnd) { return 'nobom' }\n        }\n        if ($__cursorExtension -in @(${Er([".ps1", ".psm1", ".psd1"])})) { return 'bom' }\n        if ($__cursorExtension -in @(${Er([".py", ".pyw", ".pyi", ".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".mts", ".cts", ".go", ".rs", ".kt", ".kts", ".scala", ".swift", ".dart", ".rb", ".cs", ".fs", ".fsx", ".vb", ".razor", ".cshtml", ".sh", ".bash", ".zsh", ".html", ".htm", ".css", ".scss", ".sass", ".less", ".vue", ".svelte", ".json", ".jsonc", ".json5", ".yaml", ".yml", ".toml", ".xml", ".xsd", ".xsl", ".xslt", ".svg", ".csproj", ".props", ".targets", ".graphql", ".gql", ".proto", ".tf", ".hcl", ".md", ".markdown", ".mdx", ".rst", ".adoc", ".gitignore", ".gitattributes", ".gitmodules", ".editorconfig", ".cursorignore", ".cursorindexingignore", ".mdc"])})) { return 'nobom' }\n        return $null\n    }\n    # Whether the -Encoding the call bound is the UTF-8 with a BOM that Windows PowerShell names\n    # UTF8. PowerShell 7 binds the encoding object of that name, and reaches this only when a\n    # test fakes the version.\n    $__cursorIsUtf8Bom = {\n        param($__cursorEncoding)\n        if ($__cursorEncoding -is [System.Text.Encoding]) { return ($__cursorEncoding -is [System.Text.UTF8Encoding] -and $__cursorEncoding.GetPreamble().Length -gt 0) }\n        return ("$__cursorEncoding" -eq 'UTF8')\n    }\n    # Whether a default under $PSDefaultParameterValues can reach this call's -Encoding: under\n    # the cmdlet's name, an alias it had when the proxy was built, or the name the call used. A\n    # value such a default put in $PSBoundParameters is not one the command line asked for.\n    $__cursorHasEncodingDefault = {\n        param([string]$__cursorInvoked)\n        foreach ($__cursorKey in @($PSDefaultParameterValues.Keys)) {\n            $__cursorKeyParts = "$__cursorKey" -split ':', 2\n            if ($__cursorKeyParts.Count -ne 2 -or 'Encoding' -notlike $__cursorKeyParts[1].Trim()) { continue }\n            foreach ($__cursorName in @(__CURSORNAMES__, $__cursorInvoked)) {\n                if ($__cursorName -like $__cursorKeyParts[0].Trim()) { return $true }\n            }\n        }\n        return $false\n    }\n    # Whether a UTF8 asked for by name is UTF-8 without a BOM for this file: one whose reader\n    # rejects a BOM, and that is new, empty or starts with no BOM of any encoding.\n    $__cursorTakesNoBom = {\n        param([string]$__cursorFile, $__cursorWas)\n        if ([System.IO.Directory]::Exists($__cursorFile)) { return $false }\n        if ([System.IO.Path]::GetExtension($__cursorFile).ToLowerInvariant() -notin @(${Er([".json", ".py", ".js", ".ts", ".sh", ".yaml", ".toml", ".mdc"])}) -and\n            [System.IO.Path]::GetFileName($__cursorFile).ToLowerInvariant() -notin @(${Er([".gitignore", ".editorconfig"])})) { return $false }\n        if ($null -eq $__cursorWas -or $__cursorWas.Count -lt 2) { return $true }\n        $__cursorHead = $__cursorWas.Head\n        if ($__cursorWas.Count -ge 3 -and $__cursorHead[0] -eq 0xEF -and $__cursorHead[1] -eq 0xBB -and $__cursorHead[2] -eq 0xBF) { return $false }\n        if (($__cursorHead[0] -eq 0xFF -and $__cursorHead[1] -eq 0xFE) -or ($__cursorHead[0] -eq 0xFE -and $__cursorHead[1] -eq 0xFF)) { return $false }\n        if ($__cursorWas.Count -ge 4 -and $__cursorHead[0] -eq 0 -and $__cursorHead[1] -eq 0 -and $__cursorHead[2] -eq 0xFE -and $__cursorHead[3] -eq 0xFF) { return $false }\n        return $true\n    }\n    # Takes a UTF-8 BOM off the front of the file in place, unless it is to stay and the\n    # content has a character beyond ASCII. A file the cmdlet left as it was is not touched.\n    $__cursorStripBom = {\n        param([string]$__cursorFile, [bool]$__cursorKeepUnlessAscii, $__cursorWas)\n        if (-not [System.IO.File]::Exists($__cursorFile)) { return }\n        $__cursorStream = $null\n        # The cmdlet may still hold the file for a moment after it returns.\n        for ($__cursorAttempt = 0; $__cursorAttempt -lt 5 -and $null -eq $__cursorStream; $__cursorAttempt++) {\n            try { $__cursorStream = [System.IO.File]::Open($__cursorFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None) }\n            catch [System.IO.FileNotFoundException] { return }\n            catch [System.IO.DirectoryNotFoundException] { return }\n            catch [System.IO.IOException] { Start-Sleep -Milliseconds 20 }\n            catch { return }\n        }\n        if ($null -eq $__cursorStream) { return }\n        try {\n            $__cursorBuffer = New-Object byte[] 65536\n            if ($null -ne $__cursorWas -and $__cursorWas.Length -eq $__cursorStream.Length) {\n                $__cursorCount = 0\n                while ($__cursorCount -lt $__cursorWas.Count) {\n                    $__cursorRead = $__cursorStream.Read($__cursorBuffer, $__cursorCount, $__cursorWas.Count - $__cursorCount)\n                    if ($__cursorRead -le 0) { break }\n                    $__cursorCount += $__cursorRead\n                }\n                if ($__cursorCount -eq $__cursorWas.Count -and [System.Convert]::ToBase64String($__cursorBuffer, 0, $__cursorCount) -eq [System.Convert]::ToBase64String($__cursorWas.Head, 0, $__cursorCount)) { return }\n                $__cursorStream.Position = 0\n            }\n            if ($__cursorStream.Read($__cursorBuffer, 0, 3) -ne 3 -or $__cursorBuffer[0] -ne 0xEF -or $__cursorBuffer[1] -ne 0xBB -or $__cursorBuffer[2] -ne 0xBF) { return }\n            if ($__cursorKeepUnlessAscii) {\n                while (($__cursorRead = $__cursorStream.Read($__cursorBuffer, 0, $__cursorBuffer.Length)) -gt 0) {\n                    if ([regex]::IsMatch([System.Text.Encoding]::UTF8.GetString($__cursorBuffer, 0, $__cursorRead), '[^\\x00-\\x7F]')) { return }\n                }\n            }\n            $__cursorReadAt = 3L\n            $__cursorWriteAt = 0L\n            while ($__cursorReadAt -lt $__cursorStream.Length) {\n                $__cursorStream.Position = $__cursorReadAt\n                $__cursorRead = $__cursorStream.Read($__cursorBuffer, 0, $__cursorBuffer.Length)\n                if ($__cursorRead -le 0) { break }\n                $__cursorStream.Position = $__cursorWriteAt\n                $__cursorStream.Write($__cursorBuffer, 0, $__cursorRead)\n                $__cursorReadAt += $__cursorRead\n                $__cursorWriteAt += $__cursorRead\n            }\n            $__cursorStream.SetLength($__cursorWriteAt)\n        } catch { } finally { $__cursorStream.Dispose() }\n    }\n    try {\n        $__cursorBound = $null\n        if ($PSBoundParameters.ContainsKey('Path')) { $__cursorBound = @{ Path = $PSBoundParameters['Path'] } }\n        elseif ($PSBoundParameters.ContainsKey('LiteralPath')) { $__cursorBound = @{ LiteralPath = $PSBoundParameters['LiteralPath'] } }\n        if ($null -ne $__cursorBound) {\n            # The file system paths that -Path or -LiteralPath names; none when one is on another\n            # provider or a wildcard matches nothing.\n            $__cursorLiteral = $__cursorBound.ContainsKey('LiteralPath')\n            $__cursorFiles = New-Object System.Collections.Generic.List[string]\n            foreach ($__cursorPath in @(@($__cursorBound.Values)[0])) {\n                $__cursorProvider = $null\n                $__cursorDrive = $null\n                if ($__cursorLiteral -or -not [System.Management.Automation.WildcardPattern]::ContainsWildcardCharacters("$__cursorPath")) {\n                    $__cursorResolved = @($ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("$__cursorPath", [ref]$__cursorProvider, [ref]$__cursorDrive))\n                } else {\n                    $__cursorResolved = @($ExecutionContext.SessionState.Path.GetResolvedProviderPathFromPSPath("$__cursorPath", [ref]$__cursorProvider))\n                }\n                if ($null -ne $__cursorProvider -and $__cursorProvider.Name -in @('Variable', 'Function', 'Alias')) { $__cursorScopeBound = $__cursorProvider.Name }\n                if ($null -eq $__cursorProvider -or $__cursorProvider.Name -ne 'FileSystem' -or $__cursorResolved.Count -eq 0) { $__cursorFiles = $null; break }\n                $__cursorFiles.AddRange([string[]]$__cursorResolved)\n            }\n        }\n        # -WhatIf sets $WhatIfPreference and -Confirm sets $ConfirmPreference in this scope.\n        if ($null -ne $__cursorFiles -and $__cursorFiles.Count -gt 0 -and -not $PSBoundParameters.ContainsKey('Encoding') -and\n            -not $WhatIfPreference -and $ConfirmPreference -notin @('Low', 'Medium') -and -not $PSBoundParameters.ContainsKey('Stream') -and\n            -not $PSBoundParameters.ContainsKey('Filter') -and -not $PSBoundParameters.ContainsKey('Include') -and\n            -not $PSBoundParameters.ContainsKey('Exclude')) {\n            $__cursorAppend = ($PSBoundParameters.ContainsKey('Append') -and $PSBoundParameters['Append']) -or ($PSBoundParameters.ContainsKey('NoClobber') -and $PSBoundParameters['NoClobber'])\n            $__cursorDecided = $true\n            $__cursorStrip = $true\n            foreach ($__cursorFile in $__cursorFiles) {\n                $__cursorBefore[$__cursorFile] = & $__cursorHeadOf $__cursorFile\n                $__cursorDecisions[$__cursorFile] = & $__cursorEncodingOf $__cursorFile $__cursorBefore[$__cursorFile]\n                if ($null -eq $__cursorDecisions[$__cursorFile]) { $__cursorDecided = $false; break }\n                # An append onto a file with content writes no BOM, so there is none to take off.\n                if ($__cursorAppend -and $null -ne $__cursorBefore[$__cursorFile] -and $__cursorBefore[$__cursorFile].Length -gt 0) { $__cursorStrip = $false }\n            }\n        }\n        elseif ($null -ne $__cursorFiles -and $__cursorFiles.Count -gt 0 -and $PSBoundParameters.ContainsKey('Encoding') -and\n            (& $__cursorIsUtf8Bom $PSBoundParameters['Encoding']) -and -not (& $__cursorHasEncodingDefault $__cursorInvoked) -and\n            -not $WhatIfPreference -and $ConfirmPreference -notin @('Low', 'Medium') -and -not $PSBoundParameters.ContainsKey('Stream') -and\n            -not $PSBoundParameters.ContainsKey('Filter') -and -not $PSBoundParameters.ContainsKey('Include') -and\n            -not $PSBoundParameters.ContainsKey('Exclude')) {\n            # The UTF8 the command line asked for is UTF-8 with a BOM on this shell and without\n            # one on PowerShell 7. For a file whose reader rejects a BOM, and that has none, it\n            # means what it means there: the cmdlet writes its BOM, and the proxy takes it off.\n            $__cursorAsked = $true\n            foreach ($__cursorFile in $__cursorFiles) {\n                $__cursorBefore[$__cursorFile] = & $__cursorHeadOf $__cursorFile\n                if (-not (& $__cursorTakesNoBom $__cursorFile $__cursorBefore[$__cursorFile])) { $__cursorAsked = $false; break }\n                $__cursorDecisions[$__cursorFile] = 'nobom'\n            }\n            $__cursorStrip = $__cursorAsked\n        }\n    } catch { $__cursorDecided = $false; $__cursorAsked = $false }\n    if ($__cursorDecided) { $PSBoundParameters['Encoding'] = '__CURSORUTF8__' }\n    if ($null -ne $__cursorScopeBound) {\n        Write-Warning "__CURSORNAME__ runs through a function in this shell, so an item it writes to the $__cursorScopeBound provider lives in a scope that ends with the call. Use an assignment, a function definition or Set-Alias instead."\n    }\n    # An error the caller asked to stop on ends the caller too, as it does from the cmdlet: it\n    # goes on as it is, as from the proxy PowerShell itself generates, which rethrows everything\n    # with 'throw'. Any other terminating error of the cmdlet ends the statement and the caller\n    # goes on; ThrowTerminatingError keeps that rule, where 'throw' would end the caller's whole\n    # script, and the pipeline it ended is not stepped again. Of the two, only the cmdlet's own\n    # terminating error names this function rather than the cmdlet's type in the suffix of its\n    # FullyQualifiedErrorId; the record of an error the caller asked to stop on is the cmdlet's.\n    try {\n        $outBuffer = $null\n        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) { $PSBoundParameters['OutBuffer'] = 1 }\n        $wrappedCmd = $ExecutionContext.InvokeCommand.GetCommand('__CURSORTARGET__', [System.Management.Automation.CommandTypes]::Cmdlet)\n        $scriptCmd = { & $wrappedCmd @PSBoundParameters }\n        $steppablePipeline = $scriptCmd.GetSteppablePipeline($myInvocation.CommandOrigin)\n        $steppablePipeline.Begin($PSCmdlet)\n    } catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n}\nprocess {\n    if ($__cursorStopped) { return }\n    try { $steppablePipeline.Process($_) }\n    catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n}\nend {\n    if ($__cursorStopped) { return }\n    try { $steppablePipeline.End() }\n    catch [System.Management.Automation.ActionPreferenceStopException] { throw }\n    catch { $__cursorStopped = $true; $PSCmdlet.ThrowTerminatingError($_) }\n    if (-not $__cursorStrip -or -not ($__cursorDecided -or $__cursorAsked)) { return }\n    try {\n        foreach ($__cursorFile in $__cursorFiles) { & $__cursorStripBom $__cursorFile ($__cursorDecisions[$__cursorFile] -eq 'bom') $__cursorBefore[$__cursorFile] }\n    } catch { }\n}\n'@\n        foreach ($__cursorWriter in @('Set-Content', 'Export-Csv')) {\n            $__cursorWriterNames = @($__cursorWriter) + @(Get-Alias -Definition $__cursorWriter -ErrorAction Ignore | ForEach-Object { $_.Name })\n            $__cursorHasWriterDefault = $false\n            foreach ($__cursorKey in @($PSDefaultParameterValues.Keys)) {\n                $__cursorKeyParts = "$__cursorKey" -split ':', 2\n                if ($__cursorKeyParts.Count -ne 2 -or 'Encoding' -notlike $__cursorKeyParts[1].Trim()) { continue }\n                foreach ($__cursorName in $__cursorWriterNames) {\n                    if ($__cursorName -like $__cursorKeyParts[0].Trim()) { $__cursorHasWriterDefault = $true }\n                }\n            }\n            if ($__cursorHasWriterDefault) { continue }\n            try {\n                # A function of this name that a profile defined stays in charge; the proxy is built on the cmdlet alone.\n                $__cursorCmdlet = @(Microsoft.PowerShell.Core\\Get-Command -Name $__cursorWriter -ErrorAction Stop)[0]\n                if ($__cursorCmdlet.CommandType -eq 'Cmdlet') {\n                    $__cursorTarget = "$($__cursorCmdlet.ModuleName)\\$($__cursorCmdlet.Name)"\n                    $__cursorMetadata = New-Object System.Management.Automation.CommandMetadata $__cursorCmdlet\n                    $__cursorNamesList = @($__cursorWriterNames | ForEach-Object { "'" + $_.Replace("'", "''") + "'" }) -join ', '\n                    $__cursorProxyText = @(\n                        '<#', ".ForwardHelpTargetName $__cursorTarget", '.ForwardHelpCategory Cmdlet', '#>',\n                        [System.Management.Automation.ProxyCommand]::GetCmdletBindingAttribute($__cursorMetadata),\n                        'param(', [System.Management.Automation.ProxyCommand]::GetParamBlock($__cursorMetadata), ')',\n                        'dynamicparam {', [System.Management.Automation.ProxyCommand]::GetDynamicParam($__cursorMetadata), '}',\n                        $__cursorProxyBody.Replace('__CURSORTARGET__', $__cursorTarget).Replace('__CURSORNAMES__', $__cursorNamesList).Replace('__CURSORNAME__', $__cursorCmdlet.Name).Replace('__CURSORUTF8__', $__cursorUtf8)\n                    ) -join [Environment]::NewLine\n                    # Global, as a profile would define it, so that a module's code reaches it too.\n                    Microsoft.PowerShell.Management\\Set-Item -LiteralPath "function:global:$__cursorWriter" -Value ([scriptblock]::Create($__cursorProxyText)) -ErrorAction Stop\n                }\n            } catch { }\n        }\n    }\n} catch { }\n`,
  Pr = String.raw`
try {
    if ($PSVersionTable.PSVersion.Major -lt 6 -and [Console]::OutputEncoding.CodePage -eq 65001) {
        function global:__cursorUtf8FromLatin1 {
            param([string]$Text)
            Set-StrictMode -Off
            if ($Text.Length -eq 0 -or $Text -cnotmatch '[\u0080-\u00FF]' -or $Text -cmatch '[\u0100-\uFFFF]') { return $null }
            try {
                $bytes = [System.Text.Encoding]::GetEncoding(28591).GetBytes($Text)
                $decoded = (New-Object System.Text.UTF8Encoding($false, $true)).GetString($bytes)
            } catch { return $null }
            if ($decoded.Length -gt 0 -and $decoded[0] -eq [char]0xFEFF) { $decoded = $decoded.Substring(1) }
            return $decoded
        }
        function global:__cursorDeclaresOtherCharset {
            param([string]$Text)
            Set-StrictMode -Off
            if ($Text.Length -eq 0) { return $false }
            $head = $Text.Substring(0, [Math]::Min($Text.Length, 1024))
            $options = [System.Text.RegularExpressions.RegexOptions]'IgnoreCase, Singleline, CultureInvariant'
            $declared = [regex]::Match($head, '<meta\s.*[^.><]*charset\s*=\s*["''\n]?(?<charset>[A-Za-z].[^\s"''\n<>]*)[\s"''\n>]', $options)
            if (-not $declared.Success) { $declared = [regex]::Match($head, '<\?xml\s.*[^.><]*encoding\s*=\s*["''\n]?(?<charset>[A-Za-z].[^\s"''\n<>]*)[\s"''\n>]', $options) }
            if (-not $declared.Success) { return $false }
            try { return [System.Text.Encoding]::GetEncoding($declared.Groups['charset'].Value).CodePage -ne 65001 } catch { return $false }
        }
        function global:__cursorFixWebResponse {
            param([Parameter(ValueFromPipeline = $true)]$Response)
            process {
                Set-StrictMode -Off
                try {
                    if ($null -ne $Response -and $Response.Content -is [string]) {
                        $contentType = $null
                        try { $contentType = [string]$Response.BaseResponse.ContentType } catch { }
                        if (-not $contentType -and $Response.Headers) {
                            foreach ($name in @($Response.Headers.Keys)) {
                                if ($name -ieq 'Content-Type') { $contentType = [string]$Response.Headers[$name] }
                            }
                        }
                        if ($contentType -notmatch '(?i);\s*charset\s*=' -and -not (__cursorDeclaresOtherCharset $Response.Content)) {
                            $content = $Response.Content
                            $fixed = __cursorUtf8FromLatin1 $content
                            if ($null -ne $fixed) {
                                $raw = $Response.RawContent
                                $fixedRaw = $null
                                if ($raw -is [string] -and $raw.EndsWith($content)) { $fixedRaw = $raw.Substring(0, $raw.Length - $content.Length) + $fixed }
                                $Response | Add-Member -NotePropertyName Content -NotePropertyValue $fixed -Force -ErrorAction Stop
                                if ($null -ne $fixedRaw) {
                                    # Content and RawContent change together or not at all.
                                    try { $Response | Add-Member -NotePropertyName RawContent -NotePropertyValue $fixedRaw -Force -ErrorAction Stop }
                                    catch { $Response | Add-Member -NotePropertyName Content -NotePropertyValue $content -Force -ErrorAction Stop }
                                }
                            }
                        }
                    }
                } catch { }
                ,$Response
            }
        }
        function global:__cursorIsRestContainer {
            param($Value)
            Set-StrictMode -Off
            return $Value -is [System.Management.Automation.PSCustomObject] -or $Value -is [System.Collections.IList] -or $Value -is [System.Xml.XmlNode]
        }
        function global:__cursorRestOutputText {
            param($Value)
            Set-StrictMode -Off
            if ($Value -is [string]) { return $Value }
            if ($Value -is [System.Xml.XmlNode]) { return [string]$Value.OuterXml }
            # Windows PowerShell's serializer writes every character above U+007F as a \uXXXX
            # escape, so the text alone would never show one; the escapes are read back, in
            # .NET, before the string test sees the text.
            return [regex]::Unescape([string](ConvertTo-Json -InputObject $Value -Depth 100 -Compress -WarningAction SilentlyContinue))
        }
        function global:__cursorFixRestValue {
            param($Value)
            Set-StrictMode -Off
            if ($Value -is [string]) {
                $fixed = __cursorUtf8FromLatin1 $Value
                if ($null -eq $fixed) { return ,$Value }
                return ,$fixed
            }
            if (-not (__cursorIsRestContainer $Value)) { return ,$Value }
            # A slot is a list and an index, a property or an XML node and no index, or neither
            # for the value itself. Every rewrite is noted against its slot and made at the end,
            # once every string with a character of U+0080-U+00FF has passed the strict round
            # trip: one that does not, or one character above U+00FF, which no Latin-1 read
            # produces, leaves the whole value as the cmdlet returned it.
            $root = $Value
            $edits = New-Object System.Collections.Generic.List[object]
            $pending = New-Object System.Collections.Stack
            $pending.Push(@{ Target = $null; Key = $null; Value = $Value; Depth = 0 })
            while ($pending.Count -gt 0) {
                $entry = $pending.Pop()
                $current = $entry.Value
                if ($entry.Depth -gt 100) { continue }
                if ($current -is [System.Management.Automation.PSCustomObject]) {
                    $renamed = $false
                    foreach ($property in $current.PSObject.Properties) {
                        if ($property.Name -cmatch '[\u0080-\uFFFF]') {
                            if ($null -eq (__cursorUtf8FromLatin1 $property.Name)) { return ,$Value }
                            $renamed = $true
                        }
                    }
                    if ($renamed) {
                        $rebuilt = New-Object System.Management.Automation.PSObject
                        foreach ($property in $current.PSObject.Properties) {
                            $name = $property.Name
                            if ($name -cmatch '[\u0080-\uFFFF]') { $name = __cursorUtf8FromLatin1 $name }
                            $rebuilt | Add-Member -NotePropertyName $name -NotePropertyValue $property.Value -ErrorAction Stop
                        }
                        $edits.Add(@{ Target = $entry.Target; Key = $entry.Key; Value = $rebuilt })
                        $current = $rebuilt
                    }
                    foreach ($property in $current.PSObject.Properties) {
                        $item = $property.Value
                        if ($item -is [string]) {
                            if ($item -cmatch '[\u0080-\uFFFF]') {
                                $fixed = __cursorUtf8FromLatin1 $item
                                if ($null -eq $fixed) { return ,$Value }
                                $edits.Add(@{ Target = $property; Key = $null; Value = $fixed })
                            }
                        } elseif (__cursorIsRestContainer $item) {
                            $pending.Push(@{ Target = $property; Key = $null; Value = $item; Depth = $entry.Depth + 1 })
                        }
                    }
                } elseif ($current -is [System.Collections.IList]) {
                    for ($i = 0; $i -lt $current.Count; $i++) {
                        $item = $current[$i]
                        if ($item -is [string]) {
                            if ($item -cmatch '[\u0080-\uFFFF]') {
                                $fixed = __cursorUtf8FromLatin1 $item
                                if ($null -eq $fixed) { return ,$Value }
                                $edits.Add(@{ Target = $current; Key = $i; Value = $fixed })
                            }
                        } elseif (__cursorIsRestContainer $item) {
                            $pending.Push(@{ Target = $current; Key = $i; Value = $item; Depth = $entry.Depth + 1 })
                        }
                    }
                } elseif ($current -is [System.Xml.XmlNode]) {
                    foreach ($node in $current.SelectNodes('.//text() | .//@* | .//comment()')) {
                        if ($node.Value -cmatch '[\u0080-\uFFFF]') {
                            $fixed = __cursorUtf8FromLatin1 $node.Value
                            if ($null -eq $fixed) { return ,$Value }
                            $edits.Add(@{ Target = $node; Key = $null; Value = $fixed })
                        }
                    }
                }
            }
            foreach ($edit in $edits) {
                if ($null -eq $edit.Target) { $root = $edit.Value }
                elseif ($null -eq $edit.Key) { $edit.Target.Value = $edit.Value }
                else { $edit.Target[$edit.Key] = $edit.Value }
            }
            return ,$root
        }
        function global:__cursorFixRestResponse {
            param([Parameter(ValueFromPipeline = $true)]$Response)
            process {
                Set-StrictMode -Off
                $fixed = $Response
                try {
                    if ($Response -is [string] -or (__cursorIsRestContainer $Response)) {
                        $text = __cursorRestOutputText $Response
                        $declared = ($Response -is [string] -or $Response -is [System.Xml.XmlNode]) -and (__cursorDeclaresOtherCharset $text)
                        if (-not $declared -and $null -ne (__cursorUtf8FromLatin1 $text)) { $fixed = __cursorFixRestValue $Response }
                    }
                } catch { $fixed = $Response }
                ,$fixed
            }
        }
        $__cursorWebProxyTemplate = @'
__BINDING__
param(
__PARAMS__
)
begin {
    try {
        $outBuffer = $null
        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) { $PSBoundParameters['OutBuffer'] = 1 }
        if ($PSBoundParameters.ContainsKey('SessionVariable') -and -not $PSBoundParameters.ContainsKey('WebSession')) {
            $sessionName = [string]$PSBoundParameters['SessionVariable']
            $webSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession
            if ($sessionName.Contains(':')) { $ExecutionContext.SessionState.PSVariable.Set($sessionName, $webSession) } else { Set-Variable -Name $sessionName -Value $webSession -Scope 1 }
            [void]$PSBoundParameters.Remove('SessionVariable')
            $PSBoundParameters['WebSession'] = $webSession
        }
        $wrappedCmd = $ExecutionContext.InvokeCommand.GetCommand('Microsoft.PowerShell.Utility\__CMDLET__', [System.Management.Automation.CommandTypes]::Cmdlet)
        $scriptCmd = { & $wrappedCmd @PSBoundParameters | __FILTER__ }
        $steppablePipeline = $scriptCmd.GetSteppablePipeline($myInvocation.CommandOrigin)
        $steppablePipeline.Begin($PSCmdlet)
    } catch { $PSCmdlet.ThrowTerminatingError($_) }
}
process { try { $steppablePipeline.Process($_) } catch { $PSCmdlet.ThrowTerminatingError($_) } }
end { try { $steppablePipeline.End() } catch { $PSCmdlet.ThrowTerminatingError($_) } }
<#
.ForwardHelpTargetName Microsoft.PowerShell.Utility\__CMDLET__
.ForwardHelpCategory Cmdlet
#>
'@
        foreach ($__cursorWebCmdletName in @('Invoke-WebRequest', 'Invoke-RestMethod')) {
            $__cursorWebCmdlet = $ExecutionContext.InvokeCommand.GetCommand("Microsoft.PowerShell.Utility\$__cursorWebCmdletName", [System.Management.Automation.CommandTypes]::Cmdlet)
            if (-not $__cursorWebCmdlet) { continue }
            if (Test-Path -LiteralPath "Function:\$__cursorWebCmdletName") { continue }
            $__cursorWebMetadata = New-Object System.Management.Automation.CommandMetadata $__cursorWebCmdlet
            $__cursorWebFilter = if ($__cursorWebCmdletName -eq 'Invoke-WebRequest') { '__cursorFixWebResponse' } else { '__cursorFixRestResponse' }
            $__cursorWebProxy = $__cursorWebProxyTemplate.Replace('__BINDING__', [System.Management.Automation.ProxyCommand]::GetCmdletBindingAttribute($__cursorWebMetadata)).Replace('__PARAMS__', [System.Management.Automation.ProxyCommand]::GetParamBlock($__cursorWebMetadata)).Replace('__CMDLET__', $__cursorWebCmdletName).Replace('__FILTER__', $__cursorWebFilter)
            Set-Item -Path "Function:\global:$__cursorWebCmdletName" -Value ([scriptblock]::Create($__cursorWebProxy))
        }
    }
} catch { }
`;
var Ir = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Rr() {
  if ("win32" !== process.platform) {
    const e = process.env.SHELL;
    if (e?.includes("pwsh") || e?.includes("powershell")) return e;
  }
  let e = v("pwsh", []).cmd;
  if ("pwsh" !== e) return e;
  if (e = v("powershell", []).cmd, "powershell" !== e) return e;
  if ("win32" === process.platform && (e = h.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), (0, p.existsSync)(e))) return e;
  throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
class Tr {
  cwd;
  state;
  constructor(e, t) {
    this.cwd = e, this.state = t;
  }
  async getCwd() {
    return this.cwd;
  }
  clone(e) {
    return new Tr(e ?? this.cwd, this.state);
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const o = function (e, t, r) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, o;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = t[Symbol.dispose], r && (o = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            o && (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }), e.stack.push({
              value: t,
              dispose: n,
              async: r
            });
          } else r && e.stack.push({
            async: !0
          });
          return t;
        }(n, (0, Ht.VI)(e.withName("PowerShellState.execute")), !1),
        s = r?.pipeStdin ?? !1,
        i = r?.workingDirectory ?? this.cwd,
        a = (0, qt.Jt)(),
        l = function (e, t = process.platform, r = process.env) {
          const n = {
            ...r,
            ...er,
            ...e?.env
          };
          return c(n), "win32" === t && !0 === e?.powershellUtf8ChildEnv && (D(n), O(n)), n;
        }(r),
        u = R(l) ? A(t) : t,
        d = B.tmpdir(),
        p = h.join(d, `ps-state-out-${(0, U.randomUUID)()}.txt`),
        f = "win32" === process.platform,
        m = ((e, t, r, n, o) => {
          return `\n${o?.utf8Console ? Cr : ""}\n${e}\n${xr}${o?.webRequestUtf8 ? Pr : ""}\n${o?.envInjection ?? ""}\nSet-Location ${s = t, `'${s.replace(/['\u2018\u2019\u201A\u201B]/g, "$&$&")}'`}\n\n# PowerShell 5.1 does not treat \\" as an escaped quote, so cmd /c "rmdir /s /q \\"D:\\dir\\""\n# hands cmd a bare \\ (the drive root). Refuse double-quoted args that end in \\ and touch the next arg.\n${o?.parseAfterUtf8Switch ? (e => `# The command is parsed here, after the statements above ran, so a syntax error in it is\n# reported in the encoding they set and not in the console's start-up code page.\n$__cursorCommandText = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${Buffer.from(e, "utf8").toString("base64")}'))\n$__cursorParseErrors = $null\n$__cursorCommandAst = [System.Management.Automation.Language.Parser]::ParseInput($__cursorCommandText, [ref]$null, [ref]$__cursorParseErrors)\nif ($__cursorParseErrors.Count -gt 0) {\n    foreach ($__cursorParseError in $__cursorParseErrors) {\n        [Console]::Error.WriteLine($__cursorParseError.ToString())\n    }\n    exit 1\n}\n$__cursorCommand = $__cursorCommandAst.GetScriptBlock()`)(r) : (e => `$__cursorCommand = {\n${e}\n}`)(r)}\n$__cursorBrokenQuote = $__cursorCommand.Ast.Find({\n    param($node)\n    if ($node -isnot [System.Management.Automation.Language.CommandAst]) { return $false }\n    $elements = $node.CommandElements\n    for ($i = 0; $i -lt $elements.Count - 1; $i++) {\n        $element = $elements[$i]\n        if (($element -is [System.Management.Automation.Language.StringConstantExpressionAst] -or\n             $element -is [System.Management.Automation.Language.ExpandableStringExpressionAst]) -and\n            $element.StringConstantType -eq 'DoubleQuoted' -and\n            $element.Value.EndsWith('\\') -and\n            $elements[$i + 1].Extent.StartOffset -eq $element.Extent.EndOffset) {\n            return $true\n        }\n    }\n    return $false\n}, $true)\nif ($__cursorBrokenQuote) {\n    [Console]::Error.WriteLine('Command refused: PowerShell does not treat \\" as an escaped quote, so a double-quoted string ends at \\" and the rest runs as separate arguments, near: ' + $__cursorBrokenQuote.Extent.Text)\n    [Console]::Error.WriteLine('Quote the outer string with single quotes instead, or write a double quote inside a double-quoted string as \`".')\n    exit 1\n}\n# Out-Default writes held-back table output before exit, dot-sourcing keeps the command's state for the dump\n. $__cursorCommand | Out-Default\n$COMMAND_EXIT_CODE = $LASTEXITCODE\n\n\nfunction Dump-PowerShellState {\n    param(\n        [Parameter(Mandatory = $true)]\n        [string]$OutputFile\n    )\n\n    function Emit {\n        param([string]$Content)\n        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8\n    }\n\n    if (Test-Path $OutputFile) {\n        Remove-Item $OutputFile -Force\n    }\n    New-Item -Path $OutputFile -ItemType File -Force | Out-Null\n    #Log-Timing "file_init"\n\n    Emit $PWD.Path\n    #Log-Timing "working_dir"\n\n    function ShouldPersistEnvVar {\n        param([string]$Name)\n        if ($Name -eq 'CURSOR_CONVERSATION_ID') {\n            return $false\n        }\n        if ($Name -eq 'CURSOR_REQUEST_ID') {\n            return $false\n        }\n        if ($Name -like 'CURSOR_AGENT_STORE*') {\n            return $false\n        }\n        if ($Name -like '*CURSOR_SANDBOX*') {\n            return $false\n        }\n        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {\n            return $false\n        }\n        return $true\n    }\n\n    $envVars = Get-ChildItem Env: | Sort-Object Name\n    foreach ($var in $envVars) {\n        if (-not (ShouldPersistEnvVar -Name $var.Name)) {\n            continue\n        }\n        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))\n        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)\n    }\n    #Log-Timing "environment"\n\n    $aliases = Get-Alias | Sort-Object Name\n    foreach ($alias in $aliases) {\n        $definition = $alias.Definition\n\n        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {\n        }\n        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {\n        }\n        else {\n            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)\n        }\n    }\n\n    #Log-Timing "finalize"\n}\n\nDump-PowerShellState -OutputFile "${n}"\n\nexit $COMMAND_EXIT_CODE\n`;
          var s;
        })(this.state, i, u, p, {
          utf8Console: f && !0 === r?.powershellUtf8Console,
          parseAfterUtf8Switch: f && !0 === r?.powershellParseAfterUtf8Switch,
          envInjection: f && !0 === r?.powershellUtf8ChildEnv ? L : "",
          webRequestUtf8: f && !0 === r?.powershellWebRequestUtf8
        }),
        g = h.join(d, `ps-script-${(0, U.randomUUID)()}.ps1`);
      await async function (e, t) {
        await X.writeFile(e, "\ufeff" + t, {
          encoding: "utf8"
        });
      }(g, m);
      const w = ["-ExecutionPolicy", "Bypass"];
      s || w.push("-NonInteractive"), w.push("-File", g);
      const y = Rr(),
        v = r?.sandboxWorkspaceRoot ?? i,
        b = (await Je(v, r?.sandboxPolicy)).policy,
        S = rr(y, w, {
          env: l,
          stdio: [s ? "pipe" : "ignore", "pipe", "pipe"],
          cwd: i,
          detached: !f
        }, "insecure_none" !== b.type ? {
          ...b,
          sandboxWorkspaceRoot: v
        } : b, r?.signal);
      S.on("spawn", async () => {
        try {
          await a.write({
            type: "stdin_ready",
            stdin: S.stdin ?? void 0,
            pid: S.pid
          });
        } catch (e) {}
      });
      const k = Zt({
          stdout: S.stdout,
          stderr: S.stderr,
          writable: a,
          bufferOutputEvents: r?.bufferOutputEvents,
          outputLimiterOptions: r?.outputLimiterOptions
        }),
        _ = async () => {
          try {
            const e = await X.readFile(p, "utf8"),
              {
                cwd: t,
                rest: r
              } = dr(e);
            this.state = r, this.cwd = t.trim(), await (0, X.rm)(p).catch(() => {});
          } catch (e) {}
          await (0, X.rm)(g, {
            recursive: !0,
            force: !0,
            maxRetries: 5
          }).catch(e => {
            console.warn(`[shell-exec] Could not remove PowerShell script ${g}`, e);
          });
        };
      let C = null,
        E = null,
        x = null,
        P = !1;
      const I = async e => {
        if (!P) {
          if (P = !0, x && (clearTimeout(x), x = null), (0, Ht.HF)(o.ctx, "exit"), e) try {
            await k.waitForOutput();
          } catch (e) {
            return await _(), void a.throw(e instanceof Error ? e : new Error(String(e)));
          }
          await k.flush();
          try {
            await a.write({
              type: "exit",
              code: C,
              signal: E ?? void 0,
              data: "",
              aborted: r?.signal?.aborted ?? !1
            });
          } catch (e) {}
          await _(), a.close();
        }
      };
      S.on("exit", (e, t) => {
        C = e, E = t;
        const n = r?.closeTimeout ?? 5e3;
        n > 0 && (x = setTimeout(() => {
          console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), I(!1);
        }, n));
      }), S.on("close", async () => {
        await I(!0);
      }), S.on("error", e => {
        _().catch(() => {}), a.throw(e);
      }), yield* a;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      Ir(n);
    }
  }
}
async function Ar() {
  return new Tr(process.cwd(), "");
}
var $r = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Mr(e) {
  const t = h.win32.parse(e).name.toLowerCase();
  return "powershell" === t || "pwsh" === t;
}
class Dr {
  cwd;
  options;
  deps;
  constructor(e, t, r) {
    this.cwd = e, this.options = t, this.deps = r;
  }
  async getCwd() {
    return this.cwd;
  }
  clone(e) {
    return new Dr(e ?? this.cwd, this.options, this.deps);
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const o = function (e, t, r) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, o;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = t[Symbol.dispose], r && (o = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            o && (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }), e.stack.push({
              value: t,
              dispose: n,
              async: r
            });
          } else r && e.stack.push({
            async: !0
          });
          return t;
        }(n, (0, Ht.VI)(e.withName("NaiveTerminalExecutor.execute")), !1),
        s = (0, qt.Jt)(),
        i = r?.pipeStdin ?? !1,
        a = this.options?.shell || process.env.SHELL || "/bin/sh",
        c = r?.powershellUtf8Console ?? this.options?.powershellUtf8Console,
        l = r?.powershellUtf8ChildEnv ?? this.options?.powershellUtf8ChildEnv,
        u = function (e, t, r = process.platform, n = process.env) {
          const o = {
            ...n,
            ...er,
            ...t?.env
          };
          return "win32" !== r || !0 !== t?.powershellUtf8ChildEnv && Mr(e) || (D(o), O(o)), o;
        }(a, {
          env: r?.env,
          powershellUtf8ChildEnv: l
        }),
        d = function (e, t, r, n = process.platform) {
          return "win32" === n && Mr(e) ? `${!0 === r?.powershellUtf8Console ? Cr : ""}${!0 === r?.powershellUtf8ChildEnv ? `${L}\n` : ""}${t}` : t;
        }(a, R(u) ? A(t) : t, {
          powershellUtf8Console: c,
          powershellUtf8ChildEnv: l
        }),
        h = r?.workingDirectory ?? this.cwd,
        p = r?.sandboxWorkspaceRoot ?? h,
        f = this.deps?.resolveSandboxPolicyForWorkspace ?? Je,
        m = (await f(p, r?.sandboxPolicy)).policy,
        g = "insecure_none" !== m.type ? {
          ...m,
          sandboxWorkspaceRoot: p
        } : m,
        w = "win32" === process.platform,
        y = (this.deps?.spawnWithSignal ?? rr)(a, [...(this.options?.shellArgs ?? []), "-c", d], {
          env: u,
          cwd: h,
          stdio: [i ? "pipe" : "ignore", "pipe", "pipe"],
          detached: !w
        }, g, r?.signal);
      y.on("spawn", async () => {
        try {
          await s.write({
            type: "stdin_ready",
            stdin: y.stdin ?? void 0,
            pid: y.pid
          });
        } catch (e) {}
      });
      const v = (this.deps?.attachShellOutputStreams ?? Zt)({
        stdout: y.stdout,
        stderr: y.stderr,
        writable: s,
        bufferOutputEvents: r?.bufferOutputEvents,
        outputLimiterOptions: r?.outputLimiterOptions
      });
      y.on("error", e => {
        s.throw(e);
      });
      const b = new Promise(e => {
          y.once("close", () => e());
        }),
        S = r?.closeTimeout ?? 250;
      y.on("exit", async (e, t) => {
        (0, Ht.HF)(o.ctx, "exit");
        const n = r?.signal?.aborted ?? !1;
        if (await (0 === S ? b : async function (e, t) {
          let r;
          const n = new Promise(e => {
            r = setTimeout(() => setImmediate(e), t);
          });
          try {
            await Promise.race([e, n]);
          } finally {
            clearTimeout(r);
          }
        }(b, S)), await v.flush(), g.captureDenies) try {
          const e = await Ut(y);
          e && e.length > 0 && (await s.write({
            type: "sandbox_denies",
            events: e
          }));
        } catch {}
        try {
          await s.write({
            type: "exit",
            code: e,
            signal: t ?? void 0,
            data: "",
            aborted: n
          }), s.close();
        } catch (e) {
          s.close();
        }
      }), yield* s;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      $r(n);
    }
  }
}
const Or = "__CURSOR_ZSH_STATE_START__",
  Fr = "__CURSOR_ZSH_STATE_END__",
  Nr = '  local tool\n  for tool in base64 tr; do\n    if ! builtin whence -p "$tool" >/dev/null 2>&1; then\n      builtin print -ru2 -- "Shell state not saved: $tool is not on PATH"\n      return 0\n    fi\n  done\n  if ! command base64 </dev/null >/dev/null 2>&1; then\n    builtin print -ru2 -- "Shell state not saved: the environment is too large to run commands"\n    return 0\n  fi\n',
  jr = `#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state.zsh\n#   dump_zsh_state\n# Or execute directly (captures a subshell's state):\n#   ./dump_zsh_state.zsh\n\n# Define a function so sourcing won't alter caller state; emulate locally inside\nfunction dump_zsh_state() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=\${EPOCHREALTIME}\n    typeset step_start=\${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=\${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:functions p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values, then the line that replays them (one eval by default)\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)\n' "$var_name" "$(command base64 <<<"$content" | command tr -d '\n')"\n      if [[ -n "\${3:-}" ]]; then\n        builtin print -r -- "$3"\n      else\n        builtin printf 'builtin eval "$cursor_snap_%s"\n' "$var_name"\n      fi\n    fi\n  }\n\n  # Aliases replay after the functions, so a user function named alias would run in place of\n  # each alias line. Only a line that starts an alias gets builtin: a quoted value can span\n  # lines, and a continuation line can start with "alias ". awk reads bytes under LC_ALL=C, so a\n  # value that is not valid UTF-8 does not make it warn. Without awk the lines stay as they are.\n  _builtin_alias_lines() {\n    [[ -n "$1" ]] || return 0\n    builtin printf '%s\n' "$1" | LC_ALL=C command awk -v sq="'" '\n      !q && /^alias / { $0 = "builtin " $0 }\n      {\n        print\n        for (i = 1; i <= length($0); i++) {\n          c = substr($0, i, 1)\n          if (q == 1) { if (c == sq) q = 0 }\n          else if (q == 2) { if (c == "\\\\") i++; else if (c == sq) q = 0 }\n          else if (c == "\\\\") i++\n          else if (c == "$" && substr($0, i + 1, 1) == sq) { q = 2; i++ }\n          else if (c == sq) q = 1\n        }\n      }' 2>/dev/null ||\n      builtin printf '%s\n' "$1"\n  }\n\n  _log_timing "init"\n\n${Nr}\n  # Emit start marker at the very beginning of the output\n  _emit "__CURSOR_ZSH_STATE_START__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $'...' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)\n  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf '%s\n' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # 'cmd | head' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # Each function ends in a NUL and gets its own eval, since one eval of all is quadratic in size\n  # and one bad definition would drop the rest. typeset +f lists names without zsh/parameter.\n  local all_functions fn\n  all_functions=$(\n    for fn in \${(f)"$(builtin typeset +f)"}; do\n      builtin typeset -f -- "$fn"\n      builtin print -rn -- $'\\0'\n    done 2>/dev/null || true\n  )\n  local replay_functions='for cursor_snap_fn in "\${(@0)cursor_snap_FUNCTIONS_B64}"; do builtin eval "$cursor_snap_fn" || builtin true; done'\n  _emit_encoded "$all_functions" "FUNCTIONS_B64" "$replay_functions"\n  _log_timing "functions"\n\n  # Aliases (regular, global, and suffix)\n  local alias_lines\n  alias_lines=$({\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  })\n  _builtin_alias_lines "$alias_lines" || true\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump"\n  _emit "__CURSOR_ZSH_STATE_END__"\n  _log_timing "finalize"\n}\n`,
  Lr = "__CURSOR_ZSH_STATE_LIGHT_VALID__",
  Ur = `#!/usr/bin/env zsh\n\n# Usage:\n#   source dump_zsh_state_light.zsh\n#   dump_zsh_state_light\n# Or execute directly (captures a subshell's state):\n#   ./dump_zsh_state_light.zsh\n\n# Lightweight version that skips function tracking for better performance\n\n# Define a function so sourcing won't alter caller state; emulate locally inside\nfunction dump_zsh_state_light() {\n  emulate -L zsh -o errreturn -o pipefail\n  set -u\n\n\n  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set\n  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then\n    # Timing setup\n    typeset start_time=\${EPOCHREALTIME}\n    typeset step_start=\${EPOCHREALTIME}\n    _log_timing() {\n      typeset step_name="$1"\n      typeset now=\${EPOCHREALTIME}\n      typeset step_duration=$((now - step_start))\n      typeset total_duration=$((now - start_time))\n      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)\n" "$step_name" "$step_duration" "$total_duration" >&2\n      step_start=$now\n    }\n  else\n    _log_timing() { :; }\n  fi\n\n  # Ensure parameter arrays are available\n  builtin zmodload -F zsh/parameter p:parameters p:options p:aliases p:galiases p:saliases 2>/dev/null || true\n  _log_timing "zmodload"\n\n  # Helper to print a line to stdout\n  _emit() {\n    builtin print -r -- "$1"\n  }\n\n  # Helper to safely encode and emit unsafe values\n  _emit_encoded() {\n    local content="$1"\n    local var_name="$2"\n    if [[ -n "$content" ]]; then\n      # Builtin printf, not a here-document: no argument length limit, and no temp file\n      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)\n' "$var_name" "$(command base64 <<<"$content" | command tr -d '\n')"\n      builtin printf 'eval "$cursor_snap_%s"\n' "$var_name"\n    fi\n  }\n\n  _log_timing "init"\n\n${Nr}\n  # Emit validity marker so we can detect if dump_zsh_state_light completed\n  _emit "__CURSOR_ZSH_STATE_LIGHT_VALID__"\n\n  # Header\n  _emit "$PWD"\n\n  _emit "# zsh state dump (light) generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"\n  _log_timing "header"\n\n  # Working directory\n  _log_timing "working_dir"\n\n  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't\n  # bake it into the snapshot that every later command re-evals (IDE-2911:\n  # Cypress boots as plain Node until a new chat). Exact unset rather than the\n  # line-based grep below, which would also eat vars whose name or multiline\n  # value merely contains the token. The shell exits right after the dump.\n  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true\n\n  # Environment variables (exported)\n  # Filter out: proxy settings plus request/session-scoped vars that must not\n  # leak across shell executions.\n  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which\n  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,\n  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites\n  # that one escape to the § form so the restore eval can parse it. It runs\n  # only on scalar $'...' lines: a plain-quoted value can hold the same four\n  # characters literally, and there they must stay.\n  local env_vars\n  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)\n  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then\n    env_vars=$(builtin printf '%s\n' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)\n  fi\n  _emit_encoded "$env_vars" "ENV_VARS_B64"\n  _log_timing "env_variables"\n\n  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this\n  # function force-enables above, so they are not baked into the restored snapshot and\n  # leaked onto every subsequent command (a stray pipefail makes a successful\n  # 'cmd | head' report exit 141).\n  local zsh_opts\n  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)\n  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"\n  _log_timing "options"\n\n  # SKIP FUNCTIONS - this is the key difference for performance\n\n  # Aliases (regular, global, and suffix)\n  {\n    builtin alias -L 2>/dev/null || true\n    builtin alias -gL 2>/dev/null || true\n    builtin alias -sL 2>/dev/null || true\n  }\n  _log_timing "aliases"\n\n  # Done\n  _emit "# end of zsh state dump (light)"\n  _log_timing "finalize"\n}\n`;
var Br = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Wr() {
  const e = process.env.SHELL;
  return e?.includes("zsh") ? e : v("zsh", []).cmd;
}
class Hr {
  cwd;
  state;
  commandPipeUnreadable;
  constructor(e, t, r = !1) {
    this.cwd = e, this.state = t, this.commandPipeUnreadable = r;
  }
  async getCwd() {
    return this.cwd;
  }
  clone(e) {
    return new Hr(e ?? this.cwd, this.state, this.commandPipeUnreadable);
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const o = function (e, t, r) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, o;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = t[Symbol.dispose], r && (o = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            o && (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }), e.stack.push({
              value: t,
              dispose: n,
              async: r
            });
          } else r && e.stack.push({
            async: !0
          });
          return t;
        }(n, (0, Ht.VI)(e.withName("ZshLightState.execute")), !1),
        s = r?.pipeStdin ?? !1,
        i = (0, qt.Jt)(),
        a = r?.workingDirectory ?? this.cwd,
        l = {
          ...process.env,
          ...er,
          ...r?.env
        };
      c(l);
      let u = 'builtin eval "$1"';
      s || (u += " < /dev/null");
      const d = T(l),
        h = ar() && !this.commandPipeUnreadable,
        p = ["-c", (h ? sr : "") + "builtin export PATH=\"/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}\"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; " + `${Ur} builtin eval "$snap"; { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + J + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${d}${u}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`, zt, ...(h ? [] : [t])],
        f = r?.sandboxWorkspaceRoot ?? a,
        m = (await Je(f, r?.sandboxPolicy)).policy,
        g = "insecure_none" !== m.type ? {
          ...m,
          sandboxWorkspaceRoot: f
        } : m,
        w = rr(Wr(), p, {
          env: l,
          stdio: [s ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", h ? "pipe" : "ignore"],
          cwd: a,
          detached: !0
        }, g, r?.signal);
      let y = "";
      w.on("spawn", async () => {
        try {
          await i.write({
            type: "stdin_ready",
            stdin: w.stdin ?? void 0,
            pid: w.pid
          });
        } catch (e) {}
      });
      const v = Zt({
        stdout: w.stdout,
        stderr: w.stderr,
        writable: i,
        bufferOutputEvents: r?.bufferOutputEvents,
        outputLimiterOptions: r?.outputLimiterOptions
      });
      w.on("error", e => {
        i.throw(e);
      });
      let b = null,
        S = null,
        k = null,
        _ = !1;
      const C = async e => {
        if (!_) {
          if (_ = !0, k && (clearTimeout(k), k = null), (0, Ht.HF)(o.ctx, "exit"), e) try {
            await v.waitForOutput();
          } catch (e) {
            return void i.throw(e instanceof Error ? e : new Error(String(e)));
          }
          if (await v.flush(), h && ir(b, y) && (this.commandPipeUnreadable = !0), !r?.signal?.aborted) {
            const e = `${Lr}\n`;
            if (y.startsWith(e)) {
              const t = y.slice(e.length),
                {
                  cwd: r,
                  rest: n
                } = dr(t);
              r?.startsWith("/") && (this.state = n, this.cwd = r);
            }
          }
          if (g.captureDenies) try {
            const e = await Ut(w);
            e && e.length > 0 && (await i.write({
              type: "sandbox_denies",
              events: e
            }));
          } catch {}
          try {
            await i.write({
              type: "exit",
              code: b,
              signal: S ?? void 0,
              data: "",
              aborted: r?.signal?.aborted ?? !1
            }), i.close();
          } catch (e) {
            i.close();
          }
        }
      };
      w.on("exit", (e, t) => {
        b = e, S = t;
        const n = r?.closeTimeout ?? 5e3;
        n > 0 && (k = setTimeout(() => {
          console.warn(`[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), C(!1);
        }, n));
      }), w.on("close", async () => {
        await C(!0);
      });
      const E = w.stdio[3],
        x = w.stdio[4],
        P = E instanceof Wt.default.Writable ? E : null,
        I = x instanceof Wt.default.Readable ? x : null;
      h && cr(w, t), lr(P, this.state), ur(I, e => {
        y += e;
      }), yield* i;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      Br(n);
    }
  }
}
async function qr(e) {
  const t = {
      ...process.env,
      ...er,
      ...e?.env
    },
    r = "__CURSOR_STATE_MARKER__",
    n = ["-o", "extendedglob", "-ilc", `${Ur} builtin printf '${r}\\n'; dump_zsh_state_light`],
    o = rr(Wr(), n, {
      env: t,
      stdio: ["ignore", "pipe", "pipe"],
      detached: !0
    }, {
      type: "insecure_none"
    }, e?.signal),
    s = nr(o.stdout);
  o.on("error", e => {
    console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
  }), await new Promise(e => {
    o.on("close", () => {
      e(void 0);
    });
  });
  const i = hr(s(), r),
    a = `${Lr}\n`,
    c = i.startsWith(a) ? i.slice(a.length) : `${process.cwd()}\n`,
    {
      cwd: l,
      rest: u
    } = dr(c);
  return new Hr(l, u);
}
var zr = function (e) {
  return function (t) {
    function r(r) {
      t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
    }
    var n,
      o = 0;
    return function e() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(e);
        if (n.dispose) {
          var s = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(s).then(e, function (t) {
            return r(t), e();
          });
        } else o |= 1;
      } catch (e) {
        r(e);
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }();
  };
}("function" == typeof SuppressedError ? SuppressedError : function (e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Gr() {
  const e = process.env.SHELL;
  return e?.includes("zsh") ? e : v("zsh", []).cmd;
}
class Vr {
  cwd;
  state;
  commandPipeUnreadable;
  constructor(e, t, r = !1) {
    this.cwd = e, this.state = t, this.commandPipeUnreadable = r;
  }
  async getCwd() {
    return this.cwd;
  }
  clone(e) {
    return new Vr(e ?? this.cwd, this.state, this.commandPipeUnreadable);
  }
  async *execute(e, t, r) {
    const n = {
      stack: [],
      error: void 0,
      hasError: !1
    };
    try {
      const o = function (e, t, r) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var n, o;
            if (r) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              n = t[Symbol.asyncDispose];
            }
            if (void 0 === n) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              n = t[Symbol.dispose], r && (o = n);
            }
            if ("function" != typeof n) throw new TypeError("Object not disposable.");
            o && (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }), e.stack.push({
              value: t,
              dispose: n,
              async: r
            });
          } else r && e.stack.push({
            async: !0
          });
          return t;
        }(n, (0, Ht.VI)(e.withName("ZshState.execute")), !1),
        s = r?.pipeStdin ?? !1,
        i = r?.keepBackgroundJobs ?? !1,
        a = (0, qt.Jt)(),
        l = r?.workingDirectory ?? this.cwd,
        u = {
          ...process.env,
          ...er,
          ...r?.env
        };
      c(u);
      let d = 'builtin eval "$1"';
      i && (d += " 3<&- 4>&-"), s || (d += " < /dev/null");
      const h = T(u),
        p = ar() && !this.commandPipeUnreadable,
        f = ["-c", (p ? sr : "") + "builtin export PATH=\"/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}\"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; " + `${jr} builtin eval "$snap"; { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + J + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${h}${d}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`, zt, ...(p ? [] : [t])],
        m = r?.sandboxWorkspaceRoot ?? l,
        g = (await Je(m, r?.sandboxPolicy)).policy,
        w = "insecure_none" !== g.type ? {
          ...g,
          sandboxWorkspaceRoot: m
        } : g,
        y = rr(Gr(), f, {
          env: u,
          stdio: [s ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", p ? "pipe" : "ignore"],
          cwd: l,
          detached: !0
        }, w, r?.signal);
      let v = "";
      y.on("spawn", async () => {
        try {
          await a.write({
            type: "stdin_ready",
            stdin: y.stdin ?? void 0,
            pid: y.pid
          });
        } catch (e) {}
      });
      const b = Zt({
        stdout: y.stdout,
        stderr: y.stderr,
        writable: a,
        bufferOutputEvents: r?.bufferOutputEvents,
        outputLimiterOptions: r?.outputLimiterOptions
      });
      y.on("error", e => {
        a.throw(e);
      });
      let S = null,
        k = null,
        _ = null,
        C = !1;
      const E = async e => {
        if (!C) {
          if (C = !0, _ && (clearTimeout(_), _ = null), (0, Ht.HF)(o.ctx, "exit"), e) try {
            await b.waitForOutput();
          } catch (e) {
            return void a.throw(e instanceof Error ? e : new Error(String(e)));
          }
          if (await b.flush(), p && ir(S, v) && (this.commandPipeUnreadable = !0), !r?.signal?.aborted) {
            const e = `${Or}\n`,
              t = `${Fr}\n`;
            if (v.startsWith(e) && v.endsWith(t)) {
              let t = v.slice(e.length);
              t = t.slice(0, -25);
              const {
                cwd: r,
                rest: n
              } = dr(t);
              r?.startsWith("/") && (this.state = n, this.cwd = r);
            }
          }
          if (w.captureDenies) try {
            const e = await Ut(y);
            e && e.length > 0 && (await a.write({
              type: "sandbox_denies",
              events: e
            }));
          } catch {}
          try {
            await a.write({
              type: "exit",
              code: S,
              signal: k ?? void 0,
              data: "",
              aborted: r?.signal?.aborted ?? !1
            }), a.close();
          } catch (e) {
            a.close();
          }
        }
      };
      y.on("exit", (e, t) => {
        S = e, k = t;
        const n = r?.closeTimeout ?? 5e3;
        n > 0 && (_ = setTimeout(() => {
          if (C) return;
          const e = `[shell-exec] Close event did not fire within ${n}ms after exit. This may indicate a background process is holding file descriptors open. `;
          i ? console.warn(`${e}Leaving it running because keepBackgroundJobs is set.`) : (console.warn(`${e}Killing detached process group.`), function (e, t) {
            if (e) try {
              process.kill(-e, t);
            } catch {
              return;
            }
          }(y.pid, "SIGKILL")), E(!1);
        }, n));
      }), y.on("close", async () => {
        await E(!0);
      });
      const x = y.stdio[3],
        P = y.stdio[4],
        I = x instanceof Wt.default.Writable ? x : null,
        R = P instanceof Wt.default.Readable ? P : null;
      p && cr(y, t), lr(I, this.state), ur(R, e => {
        v += e;
      }), yield* a;
    } catch (e) {
      n.error = e, n.hasError = !0;
    } finally {
      zr(n);
    }
  }
}
async function Kr(e) {
  const t = {
      ...process.env,
      ...er,
      ...e?.env
    },
    r = "__CURSOR_STATE_MARKER__",
    n = ["-o", "extendedglob", "-ilc", `${jr} builtin printf '${r}\\n'; dump_zsh_state`],
    o = rr(Gr(), n, {
      env: t,
      stdio: ["ignore", "pipe", "pipe"],
      detached: !0
    }, {
      type: "insecure_none"
    }, e?.signal),
    s = nr(o.stdout);
  o.on("error", e => {
    console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${e instanceof Error ? e.message : String(e)}`);
  }), await new Promise(e => {
    o.on("close", () => {
      e(void 0);
    });
  });
  const i = pr(hr(s(), r), Or, Fr) ?? `${process.cwd()}\n`,
    {
      cwd: a,
      rest: c
    } = dr(i);
  return new Vr(a, c);
}
function Jr(e) {
  try {
    return v(e, []).cmd !== e;
  } catch (e) {
    return !1;
  }
}
function Zr() {
  if ("win32" !== process.platform) return;
  if (!process.env.MSYSTEM) return;
  const e = process.env.EXEPATH;
  if (e) return function (e) {
    const t = e.replace(/[\\/]+$/, ""),
      r = h.default.win32.basename(t).toLowerCase();
    return "bash.exe" === r ? t : "bin" === r ? h.default.win32.join(t, "bash.exe") : h.default.win32.join(t, "bin", "bash.exe");
  }(e);
  const t = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (const e of t) try {
    if (v(e, []).cmd === e) return e;
  } catch {}
  return "C:\\Program Files\\Git\\bin\\bash.exe";
}
function Xr(e) {
  if (e === Yt.ZshLight) return Yt.ZshLight;
  const t = e || process.env.SHELL || "",
    r = "win32" === process.platform,
    n = r && !e ? Zr() : void 0,
    o = void 0 !== n || /git.*bash\.exe$/i.test(t) || /program.*git.*bin.*bash\.exe$/i.test(t),
    s = !r || o;
  return t.includes("zsh") ? Yt.Zsh : t.includes("bash") && s ? Yt.Bash : t.includes("pwsh") || t.includes("powershell") ? Yt.PowerShell : n ? Yt.Bash : r && (Jr("pwsh") || Jr("powershell")) ? Yt.PowerShell : Jr("zsh") ? Yt.Zsh : Jr("bash") && s ? Yt.Bash : Jr("pwsh") || Jr("powershell") ? Yt.PowerShell : Yt.Naive;
}
function Qr(e, t) {
  let r = e;
  if (!e?.userTerminalHint) {
    const t = Zr();
    t && (r = {
      ...e,
      userTerminalHint: t
    });
  }
  const n = Xr(r?.userTerminalHint ?? ""),
    o = t?.initBashState ?? Sr,
    s = t?.initPowerShellState ?? Ar,
    i = t?.initZshState ?? Kr,
    a = t?.initZshLightState ?? qr;
  switch (n) {
    case Yt.Zsh:
      return new _r(() => i(r));
    case Yt.Bash:
      return new _r(() => o(r));
    case Yt.PowerShell:
      return new _r(() => s());
    case Yt.ZshLight:
      return new _r(() => a(r));
    default:
      {
        const e = t?.getPowerShellExecutable ?? Rr;
        return function (e) {
          const t = "win32" === process.platform,
            r = e?.shell ?? (t ? Rr() : void 0),
            n = process.cwd();
          return new Dr(n, {
            ...e,
            shell: r
          });
        }({
          env: r?.env,
          shell: "win32" === process.platform ? e() : void 0
        });
      }
  }
}
const Yr = {
  perUser: {
    type: "insecure_none"
  }
};
export { Yr as BM, d as Ls, Ft as SandboxUnsupportedError, _ as J, jt as St, Qr as Fn, o as ue, he as r5, Rr as oG, P as Ko, je as CG, V as W1, Xr as G6, Ie as _B, xe as OK, Pe as $b, Bt as K3, Oe as tv, qe as wG, Ge as fZ, Ue as s9, He as XX, Te as T6, Re as Po, Me as $6, Fe as l7, k as xS, Je as resolveSandboxPolicyForWorkspace, Lt as spawnInSandbox, x as Xw };
