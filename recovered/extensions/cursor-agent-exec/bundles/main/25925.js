// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 25925 range:1128720..1259297
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25925: (e, t, r) => {
    "use strict";
    r.d(t, { BM: () => Vr, vu: () => qr, Ls: () => Dr, SandboxUnsupportedError: () => st, J: () => v, St: () => it, Fn: () => Kr, fi: () => mr, r5: () => Z, Ko: () => k, CG: () => Pt, W1: () => B, WE: () => Gr, G6: () => Hr, _B: () => ke, OK: () => ye, $b: () => Se, tv: () => $r, wG: () => Dt, fZ: () => Nt, s9: () => Mt, XX: () => Bt, T6: () => Ee, Po: () => xe, $6: () => Ur, l7: () => jr, resolveSandboxPolicyForWorkspace: () => Lt, spawnInSandbox: () => at, Xw: () => S });
    var n = r(76760), s = r(73024), o = r(68505);
    const i = "undefined" != typeof process && "win32" === process.platform, a = new o.q({ max: 512 });
    function c(e2) {
      try {
        return s.statSync(e2);
      } catch {
        return null;
      }
    }
    function l(e2, t2) {
      if (e2.match(/[\\/]/)) return e2;
      const r2 = t2 ? `${e2}\0${t2.source}\0${t2.flags}` : e2, s2 = a.get(r2);
      if (void 0 !== s2) return s2;
      const o2 = n.join(".", e2);
      if (c(o2)) return a.set(r2, o2), o2;
      const l2 = process.env.PATH.split(i ? ";" : ":");
      for (const s3 of l2) {
        const o3 = n.join(s3, e2);
        if (c(o3) && (!t2 || t2.test(o3))) return a.set(r2, o3), o3;
      }
      return a.set(r2, e2), e2;
    }
    function u(e2, t2, r2) {
      if ("win32" !== process.platform) return { cmd: l(e2), args: t2 };
      if (!s.existsSync(e2)) {
        const n2 = [".exe", ".bat", ".cmd", ".ps1"], o2 = e2.toLowerCase();
        if (n2.some((e3) => o2.endsWith(e3))) {
          const n3 = l(e2, r2);
          if (s.existsSync(n3)) return u(n3, t2, r2);
        }
        for (const o3 of n2) {
          const n3 = l(`${e2}${o3}`, r2);
          if (s.existsSync(n3)) return u(n3, t2, r2);
        }
      }
      if (e2.match(/\.ps1$/i)) {
        return { cmd: n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"), args: ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", e2].concat(t2) };
      }
      if (e2.match(/\.(bat|cmd)$/i)) {
        return { cmd: n.join(process.env.SYSTEMROOT, "System32", "cmd.exe"), args: ["/C", e2, ...t2] };
      }
      if (e2.match(/\.(js)$/i)) {
        return { cmd: process.execPath, args: [e2].concat(t2) };
      }
      return { cmd: e2, args: t2 };
    }
    var d = r(51455), p = r(48161), m = r(98875), h = r(87199), f = r(91434), g = r(31421), y = r(57075);
    let w;
    function v(e2) {
      if (!e2) throw new Error("configureRipgrepPath: path must not be empty");
      w = e2;
    }
    function _(e2) {
      const t2 = Object.keys(e2).filter((e3) => "path" === e3.toLowerCase());
      if (0 !== t2.length) return "win32" === process.platform ? t2.find((e3) => "Path" === e3) ?? t2[0] : t2.find((e3) => "PATH" === e3) ?? t2[0];
    }
    function b(e2, t2) {
      const r2 = (0, n.dirname)(t2);
      if (!r2 || "." === r2) return e2;
      const s2 = (function(e3) {
        const t3 = _(e3);
        return void 0 !== t3 ? e3[t3] ?? "" : "";
      })(e2).split(n.delimiter).filter(Boolean);
      return (function(e3, t3) {
        const r3 = _(e3) ?? ("win32" === process.platform ? "Path" : "PATH"), n2 = { ...e3 };
        for (const e4 of Object.keys(n2)) e4 !== r3 && "path" === e4.toLowerCase() && delete n2[e4];
        return n2[r3] = t3, n2;
      })(e2, [r2, ...s2.filter((e3) => e3 !== r2)].join(n.delimiter));
    }
    function S(e2) {
      return w && (0, n.isAbsolute)(w) ? { ...b(e2, w), CURSOR_RIPGREP_PATH: w } : e2;
    }
    function k() {
      if (!w) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
      return w;
    }
    var x = r(73015);
    function E(e2) {
      const t2 = e2 || process.env, { ELECTRON_RUN_AS_NODE: r2, ...n2 } = t2;
      return n2;
    }
    const I = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];
    function T(e2) {
      const t2 = { ...e2 };
      for (const e3 of I) delete t2[e3];
      return t2;
    }
    var C = r(77598), P = r(68503);
    const A = "cursor-sandbox-cache";
    let R;
    function M() {
      return R || (R = (0, C.randomBytes)(16).toString("hex")), R;
    }
    function J(e2, t2) {
      const r2 = (0, s.lstatSync)(e2);
      return r2.isDirectory() && r2.uid === t2 && !(18 & r2.mode);
    }
    function O(e2) {
      try {
        (0, s.mkdirSync)(e2, { mode: 448 });
      } catch (e3) {
        if ("EEXIST" !== e3.code) throw e3;
      }
    }
    function B(e2) {
      return D(e2, { create: false });
    }
    function D(e2, { create: t2 }) {
      const r2 = process.getuid?.();
      if (void 0 === r2) return;
      const s2 = (0, n.join)((0, p.tmpdir)(), `cursor-sandbox-${(0, P.r_)((0, n.resolve)(e2))}`);
      try {
        for (const e3 of [s2, (0, n.join)(s2, "tmp")]) if (t2 && O(e3), !J(e3, r2)) return;
        return s2;
      } catch {
        return;
      }
    }
    const q = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
    function N(e2 = (0, n.join)((0, p.tmpdir)(), A, M())) {
      return { NPM_CONFIG_CACHE: (0, n.join)(e2, "npm"), PNPM_STORE_PATH: (0, n.join)(e2, "pnpm-store"), GOCACHE: (0, n.join)(e2, "go-build"), GOMODCACHE: (0, n.join)(e2, "go-mod"), CARGO_TARGET_DIR: (0, n.join)(e2, "cargo-target"), PIP_CACHE_DIR: (0, n.join)(e2, "pip"), UV_CACHE_DIR: (0, n.join)(e2, "uv"), BUN_INSTALL_CACHE_DIR: (0, n.join)(e2, "bun"), YARN_CACHE_FOLDER: (0, n.join)(e2, "yarn"), npm_config_devdir: (0, n.join)(e2, "node-gyp"), PLAYWRIGHT_BROWSERS_PATH: (0, n.join)(e2, "playwright"), PUPPETEER_CACHE_DIR: (0, n.join)(e2, "puppeteer"), TURBO_CACHE_DIR: (0, n.join)(e2, "turbo"), GRADLE_USER_HOME: (0, n.join)(e2, "gradle"), CONDA_PKGS_DIRS: (0, n.join)(e2, "conda"), POETRY_CACHE_DIR: (0, n.join)(e2, "poetry"), GEM_SPEC_CACHE: (0, n.join)(e2, "gem-specs"), BUNDLE_PATH: (0, n.join)(e2, "bundle"), COMPOSER_HOME: (0, n.join)(e2, "composer"), HOMEBREW_CACHE: (0, n.join)(e2, "homebrew"), CYPRESS_CACHE_FOLDER: (0, n.join)(e2, "cypress"), NX_CACHE_DIRECTORY: (0, n.join)(e2, "nx"), NUGET_PACKAGES: (0, n.join)(e2, "nuget"), CCACHE_DIR: (0, n.join)(e2, "ccache"), CP_HOME_DIR: (0, n.join)(e2, "cocoapods") };
    }
    var F = r(37949), U = r(33002), L = r(97357), $ = r(10091);
    class j extends Error {
      constructor(e2, t2, r2, n2, s2, o2) {
        super(e2), this.name = "SpawnError", this.exitCode = t2, this.code = t2, this.stdout = s2, this.stderr = o2, this.command = r2, this.args = n2, Error.captureStackTrace && Error.captureStackTrace(this, j);
      }
    }
    function G(e2, t2, r2) {
      r2 = r2 ?? {};
      let n2 = new L.Observable((n3) => {
        const { encoding: s2, timeout: o2, ...i2 } = r2, { cmd: a2, args: c2 } = u(e2, t2), l2 = i2.stdin;
        l2 && (delete i2.stdin, i2.stdio ??= ["pipe", "pipe", "pipe"]), i2.stdio ??= ["ignore", "pipe", "pipe"];
        const d2 = (0, g.spawn)(a2, c2, i2);
        r2.processInfo && void 0 !== d2.pid && (r2.processInfo.pid = d2.pid);
        let p2 = null;
        o2 && o2 > 0 && (p2 = setTimeout(() => {
          d2.killed || d2.kill();
          const e3 = new j(`Process timed out after ${o2}ms`, -1, a2, c2);
          n3.error(e3);
        }, o2));
        const m2 = (t3) => (o3) => {
          if (o3.length < 1) return;
          r2.echoOutput && ("stdout" === t3 ? process.stdout : process.stderr).write(o3);
          let i3 = "<< String sent back was too long >>";
          try {
            i3 = "string" == typeof o3 ? o3.toString() : o3.toString(s2 || "utf8");
          } catch {
            i3 = `<< Lost chunk of process output for ${e2} - length was ${o3.length}>>`;
          }
          n3.next({ source: t3, text: i3 });
        }, h2 = new L.Subscription();
        if (l2) if (d2.stdin) {
          const e3 = d2.stdin;
          h2.add(l2.subscribe({ next: (t3) => e3.write(t3), error: n3.error.bind(n3), complete: () => e3.end() }));
        } else n3.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let f2 = null, y2 = null, w2 = false;
        return d2.stdout ? (y2 = new L.AsyncSubject(), d2.stdout.on("data", m2("stdout")), d2.stdout.on("close", () => {
          y2.next(true), y2.complete();
        })) : y2 = (0, L.of)(true), d2.stderr ? (f2 = new L.AsyncSubject(), d2.stderr.on("data", m2("stderr")), d2.stderr.on("close", () => {
          f2.next(true), f2.complete();
        })) : f2 = (0, L.of)(true), d2.on("error", (e3) => {
          w2 = true, p2 && clearTimeout(p2), n3.error(e3);
        }), d2.on("close", (e3) => {
          w2 = true, p2 && clearTimeout(p2);
          const t3 = (0, L.merge)(y2, f2).pipe((0, $.TS)((e4) => true, true));
          0 === e3 ? t3.subscribe(() => n3.complete()) : t3.subscribe(() => {
            const t4 = new j(`Process failed with exit code: ${e3}`, e3, a2, c2);
            n3.error(t4);
          });
        }), h2.add(new L.Subscription(() => {
          w2 || (p2 && clearTimeout(p2), d2.kill());
        })), h2;
      });
      if (r2.retries && r2.retries > 0) {
        const e3 = r2.retries, t3 = r2.retryDelay ?? 1e3;
        n2 = n2.pipe((0, $.L5)({ count: e3, delay: (e4, r3) => {
          if (e4 instanceof j && 0 !== e4.exitCode) return (0, L.timer)(t3);
          throw e4;
        } }));
      }
      return r2.split ? n2 : n2.pipe((0, $.Tj)((e3) => e3?.text));
    }
    function z(e2, t2, r2) {
      return r2?.split ? (n2 = G(e2, t2, { ...r2 ?? {}, split: true }), new Promise((e3, t3) => {
        let r3 = "", s2 = "";
        n2.subscribe({ next: (e4) => {
          "stdout" === e4.source ? r3 += e4.text : s2 += e4.text;
        }, error: (e4) => {
          if (e4 instanceof j) {
            const n3 = new j(`${r3}
${e4.message}`, e4.exitCode, e4.command, e4.args, r3, s2);
            t3(n3);
          } else {
            const n3 = new Error(`${r3}
${e4 instanceof Error ? e4.message : String(e4)}`);
            t3(n3);
          }
        }, complete: () => e3([r3, s2]) });
      })) : (function(e3) {
        return new Promise((t3, r3) => {
          let n3 = "";
          e3.subscribe({ next: (e4) => {
            n3 += e4;
          }, error: (e4) => {
            if (e4 instanceof j) {
              const t4 = new j(`${n3}
${e4.message}`, e4.exitCode, e4.command, e4.args, n3, e4.stderr);
              r3(t4);
            } else {
              const t4 = new Error(`${n3}
${e4 instanceof Error ? e4.message : String(e4)}`);
              r3(t4);
            }
          }, complete: () => t3(n3) });
        });
      })(G(e2, t2, { ...r2 ?? {}, split: false }));
      var n2;
    }
    var W = r(86613);
    const H = [".local/bin", ".local/share/mise", ".local/share/pnpm", ".nvm", ".volta", ".asdf", ".pyenv", ".rbenv", ".rustup", ".cargo/bin", ".cargo/registry", ".cargo/git"], K = ["bin", "sbin", "lib", "opt", "Cellar", "share", "Frameworks", "etc/gitconfig", "etc/openssl@3/cert.pem", "etc/openssl@3/openssl.cnf", "etc/ca-certificates"], V = (e2, t2) => t2.flatMap((t3) => K.map((r2) => ({ platform: e2, scope: "global", path: `${t3}/${r2}` }))), Y = { linux: [".cache/node", ".cache/yarn"], darwin: [".cache/node", "Library/Caches/Yarn"] }, Q = (e2) => [...H, ...Y[e2]].map((t2) => ({ platform: e2, scope: "home-dir", path: t2 })), X = [{ platform: "linux", scope: "global", path: "/bin" }, { platform: "linux", scope: "global", path: "/sbin" }, { platform: "linux", scope: "global", path: "/usr/bin" }, { platform: "linux", scope: "global", path: "/usr/sbin" }, { platform: "linux", scope: "global", path: "/lib" }, { platform: "linux", scope: "global", path: "/lib64" }, { platform: "linux", scope: "global", path: "/usr/lib" }, { platform: "linux", scope: "global", path: "/usr/lib64" }, { platform: "linux", scope: "global", path: "/usr/libexec" }, { platform: "linux", scope: "global", path: "/usr/share" }, { platform: "linux", scope: "global", path: "/etc/ld.so.cache" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf.d" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs" }, { platform: "linux", scope: "global", path: "/etc/ssl/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/ssl/cert.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/ca-bundle.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs/ca-certificates.crt" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/certs" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/pki/ca-trust/extracted" }, { platform: "linux", scope: "global", path: "/etc/resolv.conf" }, { platform: "linux", scope: "global", path: "/etc/hosts" }, { platform: "linux", scope: "global", path: "/etc/nsswitch.conf" }, { platform: "linux", scope: "global", path: "/etc/gai.conf" }, { platform: "linux", scope: "global", path: "/etc/alternatives" }, { platform: "linux", scope: "global", path: "/etc/mime.types" }, { platform: "linux", scope: "global", path: "/etc/profile" }, { platform: "linux", scope: "global", path: "/etc/bash.bashrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshenv" }, { platform: "linux", scope: "global", path: "/etc/zsh/zprofile" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zlogin" }, { platform: "linux", scope: "global", path: "/etc/gitconfig" }, { platform: "linux", scope: "home", path: ".bashrc" }, { platform: "linux", scope: "home", path: ".bash_profile" }, { platform: "linux", scope: "home", path: ".profile" }, { platform: "linux", scope: "home", path: ".zshenv" }, { platform: "linux", scope: "home", path: ".zprofile" }, { platform: "linux", scope: "home", path: ".zshrc" }, { platform: "linux", scope: "home", path: ".zlogin" }, { platform: "linux", scope: "home", path: ".gitconfig" }, { platform: "linux", scope: "home", path: ".ssh/known_hosts" }, { platform: "linux", scope: "home", path: ".config/mise/config.toml" }, { platform: "linux", scope: "home-dir", path: ".cache/dotslash" }, ...Q("linux"), ...V("linux", ["/usr/local", "/home/linuxbrew/.linuxbrew"]), { platform: "linux", scope: "global", path: "/usr/local/go" }, { platform: "linux", scope: "global", path: "/nix/store" }, { platform: "linux", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "linux", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/bin" }, { platform: "darwin", scope: "global", path: "/usr/bin" }, { platform: "darwin", scope: "global", path: "/usr/lib" }, { platform: "darwin", scope: "global", path: "/usr/libexec" }, { platform: "darwin", scope: "global", path: "/usr/share" }, { platform: "darwin", scope: "global", path: "/System/Library" }, { platform: "darwin", scope: "global", path: "/System/Cryptexes" }, { platform: "darwin", scope: "global", path: "/Library/Apple" }, { platform: "darwin", scope: "global", path: "/Library/Developer/CommandLineTools" }, { platform: "darwin", scope: "global", path: "/Applications/Xcode.app" }, { platform: "darwin", scope: "global", path: "/Library/Preferences/com.apple.dt.Xcode.plist" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/cert.pem" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/certs" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/openssl.cnf" }, { platform: "darwin", scope: "global", path: "/private/etc/hosts" }, { platform: "darwin", scope: "global", path: "/private/etc/resolv.conf" }, { platform: "darwin", scope: "global", path: "/private/etc/apache2/mime.types" }, { platform: "darwin", scope: "global", path: "/etc/profile" }, { platform: "darwin", scope: "global", path: "/etc/bashrc" }, { platform: "darwin", scope: "global", path: "/etc/zshenv" }, { platform: "darwin", scope: "global", path: "/etc/zprofile" }, { platform: "darwin", scope: "global", path: "/etc/zshrc" }, { platform: "darwin", scope: "global", path: "/etc/zlogin" }, { platform: "darwin", scope: "global", path: "/etc/gitconfig" }, { platform: "darwin", scope: "home", path: ".bashrc" }, { platform: "darwin", scope: "home", path: ".bash_profile" }, { platform: "darwin", scope: "home", path: ".profile" }, { platform: "darwin", scope: "home", path: ".zshenv" }, { platform: "darwin", scope: "home", path: ".zprofile" }, { platform: "darwin", scope: "home", path: ".zshrc" }, { platform: "darwin", scope: "home", path: ".zlogin" }, { platform: "darwin", scope: "home", path: ".gitconfig" }, { platform: "darwin", scope: "home", path: ".ssh/known_hosts" }, { platform: "darwin", scope: "home", path: "Library/Preferences/.GlobalPreferences.plist" }, { platform: "darwin", scope: "home", path: ".config/mise/config.toml" }, { platform: "darwin", scope: "home-dir", path: "Library/Python" }, { platform: "darwin", scope: "home-dir", path: "Library/Caches/dotslash" }, ...Q("darwin"), ...V("darwin", ["/opt/homebrew", "/usr/local"]), { platform: "darwin", scope: "global", path: "/nix/store" }, { platform: "darwin", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "darwin", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/dev/null" }, { platform: "darwin", scope: "global", path: "/dev/zero" }, { platform: "darwin", scope: "global", path: "/dev/random" }, { platform: "darwin", scope: "global", path: "/dev/urandom" }];
    function Z(e2 = process.platform, t2 = p.homedir(), r2 = {}) {
      const o2 = [];
      for (const i2 of X) {
        if (i2.platform !== e2) continue;
        if ("global" === i2.scope) {
          o2.push(i2.path);
          continue;
        }
        const a2 = "bundled" === i2.scope ? r2[i2.path] : (0, n.join)(t2, i2.path);
        if (a2) try {
          let e3;
          switch (i2.scope) {
            case "home":
              e3 = (0, s.lstatSync)(a2).isFile();
              break;
            case "home-dir":
              e3 = (0, s.lstatSync)(a2).isDirectory();
              break;
            case "bundled":
              e3 = (0, s.statSync)(a2).isFile();
          }
          e3 && o2.push(a2);
        } catch {
        }
      }
      return o2;
    }
    const ee = [{ type: "workspace", pattern: "**/.cursor/*.json" }, { type: "workspace", pattern: "**/.cursor/**/*.json" }, { type: "workspace", pattern: "**/.cursor/.workspace-trusted" }, { type: "workspace", pattern: "!**/.cursor/rules" }, { type: "workspace", pattern: "!**/.cursor/rules/**" }, { type: "workspace", pattern: "!**/.cursor/commands" }, { type: "workspace", pattern: "!**/.cursor/commands/**" }, { type: "workspace", pattern: "!**/.cursor/worktrees" }, { type: "workspace", pattern: "!**/.cursor/worktrees/**" }, { type: "workspace", pattern: "!**/.cursor/skills" }, { type: "workspace", pattern: "!**/.cursor/skills/**" }, { type: "workspace", pattern: "!**/.cursor/agents" }, { type: "workspace", pattern: "!**/.cursor/agents/**" }, { type: "workspace", pattern: "**/.claude/*.json" }, { type: "workspace", pattern: "**/.claude/**/*.json" }, { type: "workspace", pattern: "**/.vscode/**" }, { type: "workspace", pattern: "**/.idea/**" }, { type: "workspace", pattern: "**/.venv/" }, { type: "workspace", pattern: "**/venv/" }, { type: "workspace", pattern: "**/*.code-workspace" }, { type: "workspace", pattern: "**/.cursorignore" }, { type: "workspace", pattern: "**/.workspace-trusted" }, { type: "workspace", pattern: "**/.cursor/**/cli.json" }, { type: "workspace", pattern: "**/.cursor/**/cli-config.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp-approvals.json" }, { type: "workspace", pattern: "**/.cursor/**/permissions.json" }, { type: "git", pattern: "**/.git/hooks/**" }, { type: "git", pattern: "**/.git/config" }, { type: "git", pattern: "**/.git/config.worktree" }, { type: "git", pattern: "**/.git/info/attributes" }, { type: "git", pattern: "**/.git/commondir" }, { type: "git", pattern: "**/.git/worktrees/*/commondir" }, { type: "worktree", pattern: ".git" }, { type: "absolute", pattern: "/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/ca-bundle.pem" }, { type: "absolute", pattern: "/private/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/certs/ca-certificates.crt" }, { type: "absolute", pattern: "/etc/pki/tls/certs/ca-bundle.crt" }, { type: "absolute", pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem" }, { type: "home", pattern: ".cursor/sandbox-policies" }];
    ee.filter((e2) => "git" === e2.type).map((e2) => e2.pattern), ee.filter((e2) => "workspace" === e2.type && e2.pattern.startsWith("!") && !e2.pattern.endsWith("/**")).map((e2) => e2.pattern.replace(/^!(\*\*\/)?/, ""));
    function te(e2) {
      const t2 = ee.filter((e3) => "workspace" === e3.type).map((e3) => e3.pattern);
      return { [e2]: t2 };
    }
    function re(e2) {
      const t2 = ee.filter((e3) => "worktree" === e3.type).map((e3) => e3.pattern);
      return { [e2]: t2 };
    }
    const ne = [];
    function se(e2) {
      const t2 = (function() {
        if (0 !== ne.length) return { version: 1, deny: [...ne] };
      })(), r2 = p.homedir(), s2 = [];
      for (const e3 of ee) switch (e3.type) {
        case "workspace":
        case "git":
        case "worktree":
          break;
        case "absolute":
          s2.push(e3.pattern);
          break;
        case "home":
          r2.length > 0 && s2.push((0, n.join)(r2, e3.pattern));
          break;
        default: {
          const t3 = e3.type;
          throw new Error(`Unknown entry type: ${t3}`);
        }
      }
      return { type: "workspace_readwrite", additionalReadonlyPaths: s2, writeProtectionMapping: te(e2), ...t2 && { networkPolicy: t2 }, networkPolicyStrict: true };
    }
    let oe = null, ie = null;
    function ae() {
      return null === oe && (oe = W({ ignoreCase: true }), oe.add(ee.filter((e2) => "workspace" === e2.type).map((e2) => e2.pattern))), oe;
    }
    function ce() {
      return null === ie && (ie = W({ ignoreCase: true }), ie.add(ee.filter((e2) => "git" === e2.type).map((e2) => e2.pattern))), ie;
    }
    let le = null;
    const ue = /* @__PURE__ */ new Map();
    async function de(e2) {
      const t2 = ue.get(e2);
      if (t2) return t2;
      const r2 = await (0, d.stat)((0, n.join)(e2, ".git")).catch(() => null);
      if (!(r2?.isFile() ?? false)) {
        const t3 = { isWorktree: false, gitDirParent: e2 };
        return ue.set(e2, t3), t3;
      }
      const s2 = await (async function(e3) {
        try {
          const t3 = await z("git", ["rev-parse", "--git-common-dir"], { cwd: e3 });
          return (0, n.dirname)((0, n.resolve)(e3, t3.trim()));
        } catch {
          return null;
        }
      })(e2), o2 = { isWorktree: true, gitDirParent: s2 ?? e2 };
      return ue.set(e2, o2), o2;
    }
    const pe = "win32" === process.platform || "darwin" === process.platform;
    function me(e2) {
      if (!e2.endsWith(n.sep)) return e2;
      const t2 = e2.slice(0, -1);
      return "" === t2 || "win32" === process.platform && /^[a-zA-Z]:$/.test(t2) ? e2 : t2;
    }
    function he(e2) {
      return e2.endsWith(n.sep) ? e2 : e2 + n.sep;
    }
    function fe(e2, t2) {
      const r2 = me(t2);
      if (pe) {
        const t3 = e2.toLowerCase(), n2 = r2.toLowerCase();
        return t3 === n2 || t3.startsWith(he(n2));
      }
      return e2 === r2 || e2.startsWith(he(r2));
    }
    function ge(e2, t2) {
      const r2 = me(e2);
      return pe ? (0, n.relative)(r2.toLowerCase(), t2.toLowerCase()).replace(/\\/g, "/") : (0, n.relative)(r2, t2).replace(/\\/g, "/");
    }
    async function ye(e2, t2) {
      if (fe(e2, t2)) {
        const r3 = ge(t2, e2);
        if (ae().ignores(r3)) return true;
      }
      const { isWorktree: r2, gitDirParent: s2 } = await de(t2);
      if (fe(e2, s2)) {
        const t3 = ge(s2, e2);
        if (ce().ignores(t3)) return true;
      }
      if (r2 && fe(e2, t2)) {
        if (".git" === ge(t2, e2)) return true;
      }
      for (const t3 of (function() {
        if (null !== le) return le;
        const e3 = p.homedir(), t4 = [];
        for (const r3 of ee) switch (r3.type) {
          case "absolute":
            t4.push(r3.pattern);
            break;
          case "home":
            e3.length > 0 && t4.push((0, n.join)(e3, r3.pattern));
        }
        return le = t4, t4;
      })()) if (fe(e2, t3)) return true;
      return false;
    }
    const we = g.execFile, ve = /* @__PURE__ */ new WeakMap();
    async function _e(e2) {
      const t2 = ve.get(e2);
      return t2 ? (r2 = t2.pid, n2 = t2.startTime, s2 = t2.unrelatedPids, new Promise((e3) => {
        try {
          const t3 = /* @__PURE__ */ new Date(), o2 = ["show", "--style", "ndjson", "--predicate", 'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"', "--last", Math.ceil((t3.getTime() - n2.getTime()) / 1e3).toString()];
          (0, x.D9)(we, "/usr/bin/log", o2, (t4, n3) => {
            if (t4) return void e3([{ raw: t4.message }]);
            const o3 = n3.split(/\r?\n/).filter((e4) => e4.trim().length > 0), i2 = [];
            for (const e4 of o3) try {
              const t5 = JSON.parse(e4), n4 = t5?.eventMessage ?? "";
              if (!n4 || "string" != typeof n4) continue;
              const o4 = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(n4);
              if (o4) {
                const [, e5, a3, c2, l2, u2, d2] = o4, p2 = Number(a3);
                i2.push({ timestamp: t5.timestamp, processName: e5.trim(), pid: p2, decision: c2.toLowerCase(), decisionCode: Number(l2), operation: u2, target: d2, duplicateCount: 1, raw: n4, relationship: be(p2, r2, s2) });
                continue;
              }
              const a2 = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(n4);
              if (a2) {
                const e5 = Number(a2[1]), o5 = a2[2], c2 = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(o5);
                if (c2) {
                  const [, o6, a3, l2, u2, d2, p2] = c2, m2 = Number(a3);
                  i2.push({ timestamp: t5.timestamp, processName: o6.trim(), pid: m2, decision: l2.toLowerCase(), decisionCode: Number(u2), operation: d2, target: p2, duplicateCount: e5, raw: n4, relationship: be(m2, r2, s2) });
                } else i2.push({ timestamp: t5.timestamp, duplicateCount: e5, raw: n4 });
                continue;
              }
              i2.push({ timestamp: t5.timestamp, raw: n4 });
            } catch {
            }
            e3(i2);
          });
        } catch (t3) {
          e3([{ raw: String(t3) }]);
        }
      })) : (console.log("No sandbox metadata found on child process"), []);
      var r2, n2, s2;
    }
    function be(e2, t2, r2) {
      return e2 === t2 ? "related" : r2?.has(e2) ? "probably_unrelated" : "maybe_related";
    }
    function Se(e2) {
      return void 0 !== e2 && ("allow" === e2.default || void 0 !== e2.allow && e2.allow.length > 0);
    }
    function ke(e2) {
      return void 0 !== e2 && "allow" === e2.default;
    }
    function xe() {
      return { version: 1, default: "deny" };
    }
    function Ee() {
      return { version: 1, default: "allow" };
    }
    const Ie = "sandbox-policies", Te = "CURSOR_SANDBOX_POLICY_DIR";
    const Ce = 36e5, Pe = 9e5;
    let Ae = 0;
    function Re() {
      const e2 = (function() {
        const e3 = process.env[Te]?.trim();
        return e3 ? n.resolve(e3) : n.resolve(n.join(p.homedir(), ".cursor", Ie));
      })();
      s.mkdirSync(e2, { recursive: true, mode: 448 });
      try {
        s.chmodSync(e2, 448);
      } catch {
      }
      const t2 = Date.now();
      return t2 - Ae >= Pe && (Ae = t2, (function(e3) {
        let t3;
        try {
          t3 = s.readdirSync(e3);
        } catch {
          return;
        }
        const r2 = Date.now();
        for (const o2 of t3) {
          if (!o2.startsWith("sandbox-policy-")) continue;
          const t4 = n.join(e3, o2);
          try {
            const e4 = s.statSync(t4);
            if (!e4.isFile()) continue;
            r2 - e4.mtimeMs > Ce && s.unlinkSync(t4);
          } catch {
          }
        }
      })(e2)), e2;
    }
    function Me(e2) {
      const t2 = Re(), r2 = C.randomBytes(8).toString("hex"), o2 = n.join(t2, `sandbox-policy-${r2}`);
      return s.writeFileSync(o2, e2, { encoding: "utf-8", mode: 384 }), o2;
    }
    const Je = "darwin" === process.platform, Oe = "linux" === process.platform, Be = (0, F.h)("shell-exec:sandbox");
    function De(e2) {
      const t2 = Re();
      return e2 && 0 !== e2.length ? e2.includes(t2) ? e2 : [...e2, t2] : [t2];
    }
    let qe, Ne = true;
    function Fe() {
      return qe;
    }
    function Ue(e2) {
      "linux" === process.platform && Object.assign(e2, S(e2));
    }
    let Le = null, $e = null, je = null, Ge = null;
    function ze(e2) {
      return { ...e2, additionalReadonlyPaths: De(e2.additionalReadonlyPaths) };
    }
    function We(e2, t2, r2) {
      let o2;
      e2.ignoreMapping && (o2 = (function(e3, t3, r3, n2) {
        return tt(e3, t3, r3, n2);
      })(e2.ignoreMapping, t2, [], []));
      const i2 = (function(e3, t3, r3) {
        const o3 = e3 && e3.length > 0 ? (function(...e4) {
          const t4 = {};
          for (const r4 of e4) {
            let e5 = false;
            try {
              e5 = (0, s.existsSync)(r4) && (0, s.statSync)(r4).isDirectory();
            } catch {
            }
            if (e5) t4[r4] || (t4[r4] = []), t4[r4].push("**");
            else {
              const e6 = r4.lastIndexOf("/"), n2 = e6 > 0 ? r4.slice(0, e6) : "/", s2 = e6 >= 0 ? r4.slice(e6 + 1) : r4;
              t4[n2] || (t4[n2] = []), s2 ? t4[n2].push(s2, `${s2}/**`) : t4[n2].push("**");
            }
          }
          return t4;
        })(...e3) : {}, i3 = (function(e4, t4 = (e5) => s.existsSync(e5)) {
          if ((0, h.$f)(e4)) return true;
          let r4 = n.resolve(e4);
          for (; ; ) {
            try {
              if (t4(n.join(r4, ".git"))) return true;
            } catch {
            }
            const e5 = n.dirname(r4);
            if (e5 === r4) return false;
            r4 = e5;
          }
        })(r3), a3 = !Oe || i3 ? t3 ?? {} : {}, c3 = { ...o3 };
        for (const [e4, t4] of Object.entries(a3)) c3[e4] ? c3[e4] = [...c3[e4], ...t4] : c3[e4] = t4;
        if (0 === Object.keys(c3).length) return;
        return tt(c3, r3, [], []);
      })(e2.additionalReadonlyPaths, e2.writeProtectionMapping, t2), a2 = (c2 = e2.readBoundary, r2?.workspaceReadEnabled ?? (function() {
        const e3 = Ne;
        return "function" == typeof e3 ? e3() : e3;
      })() ? c2 ?? "system" : "system");
      var c2;
      const l2 = (function(e3 = process.platform) {
        const t3 = [], r3 = /* @__PURE__ */ new Set(), n2 = {};
        try {
          n2.ripgrep = k();
        } catch {
        }
        for (const s2 of Z(e3, p.homedir(), n2)) r3.has(s2) || (r3.add(s2), t3.push(s2));
        return t3;
      })(), u2 = "workspace" === a2 ? (function(e3) {
        const t3 = [], r3 = /* @__PURE__ */ new Set();
        for (const s2 of e3) {
          let e4 = s2.trim();
          if (!e4) continue;
          "~" === e4 ? e4 = p.homedir() : (e4.startsWith("~/") || e4.startsWith("~\\")) && (e4 = n.join(p.homedir(), e4.slice(2))), e4 = e4.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e4 = e4.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
          const o3 = n.basename(e4);
          if ((o3.includes("*") || o3.includes("?")) && (e4 = n.dirname(e4)), !e4 || "." === e4) continue;
          const i3 = n.normalize(e4);
          r3.has(i3) || (r3.add(i3), t3.push(i3));
        }
        return t3;
      })(e2.additionalReadPaths ?? []) : [], d2 = [...l2], m2 = new Set(l2);
      for (const e3 of u2) m2.has(e3) || (m2.add(e3), d2.push(e3));
      const f2 = { cwd: t2, readBoundary: a2, hardcodedReadPaths: d2, additionalReadonlyPaths: i2, networkAccess: Se(e2.networkPolicy), ignoreMapping: o2 };
      return "workspace_readonly" === e2.type ? { type: e2.type, ...f2 } : { type: e2.type, ...f2, additionalReadwritePaths: e2.additionalReadwritePaths || [], disableTmpWrite: e2.disableTmpWrite || false };
    }
    function He(e2) {
      if (!("workspace" !== e2.readBoundary || "workspace_readwrite" === e2.type && e2.disableTmpWrite || "win32" === process.platform)) return D(e2.cwd, { create: true });
    }
    function Ke(e2, t2, r2) {
      const s2 = (function(e3) {
        const t3 = (0, n.join)(e3, "tmp");
        return { TMPDIR: t3, TMP: t3, TEMP: t3, TMPPREFIX: (0, n.join)(t3, "sh-") };
      })(e2);
      if (r2) {
        const r3 = N();
        for (const [n2, o2] of Object.entries(N(e2))) t2[n2] === r3[n2] && (s2[n2] = o2);
      }
      return s2;
    }
    function Ve(e2) {
      if (null !== Le) return !!Le;
      try {
        const t2 = Fe();
        return Be.info(e2, `[checkBinaryAvailable] Resolved binary path: ${t2}`), t2 ? (Le = s.existsSync(t2), Le ? Be.info(e2, `[checkBinaryAvailable] Binary path exists: ${Le}`) : ($e = new Error(`Sandbox binary not found at ${t2}`), Be.info(e2, `[checkBinaryAvailable] Binary not found at: ${t2}`)), !!Le) : ($e = new Error("Sandbox binary path was not configured"), Le = false, Be.info(e2, "[checkBinaryAvailable] Binary path not set, returning false"), false);
      } catch (t2) {
        return $e = t2, Le = false, Be.info(e2, `[checkBinaryAvailable] Exception checking binary: ${t2}`), false;
      }
    }
    function Ye(e2) {
      if (null !== Ge) return Ge;
      const t2 = e2 ?? (0, U.q6)();
      if (Be.info(t2, "[isSandboxHelperSupported] Starting sandbox support check..."), !Ve(t2)) {
        const e3 = $e?.message || "Binary check failed";
        return je = e3, Be.info(t2, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e3}`), Ge = false, Ge;
      }
      if ("win32" === process.platform) return je = "Windows sandbox helper only provides network proxy, not filesystem isolation", Be.info(t2, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), Ge = false, Ge;
      if ("darwin" === process.platform) return je = null, Be.info(t2, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), Ge = true, Ge;
      const { binaryPath: r2, args: n2, env: s2 } = Xe(t2, process.cwd());
      try {
        const e3 = Date.now();
        (0, x.D9)(g.execFileSync, r2, n2, { stdio: ["ignore", "ignore", "pipe"], timeout: Qe, env: s2, shell: false });
        const o2 = Date.now() - e3;
        return je = null, Be.info(t2, `[isSandboxHelperSupported] Preflight succeeded in ${o2}ms, sandbox supported!`), Ge = true, Ge;
      } catch (e3) {
        const r3 = e3;
        return Ze(t2, { message: r3.message, status: r3.status, stderrText: r3.stderr?.toString?.() || "" });
      }
    }
    const Qe = 15e3;
    function Xe(e2, t2) {
      const r2 = { sandbox: We(ze({ type: "workspace_readwrite" }), t2) }, n2 = String(Fe());
      Be.info(e2, `[sandboxPreflight] Running preflight with binary: ${n2}`), Be.info(e2, `[sandboxPreflight] CWD: ${t2}`);
      const s2 = { ...process.env };
      Ue(s2);
      return { binaryPath: n2, args: ["--policy", Me(JSON.stringify(r2)), "--preflight-only", "--", "/bin/true"], env: s2 };
    }
    function Ze(e2, t2) {
      const { message: r2, status: n2, stderrText: s2 } = t2;
      return Be.error(e2, `[sandboxPreflight] Preflight failed: ${r2}`), Be.error(e2, `[sandboxPreflight] Exit status: ${n2}`), s2 && Be.error(e2, `[sandboxPreflight] Stderr: ${s2}`), je = 2 === n2 ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${s2 || "none"}` : `Linux preflight failed: ${r2 || "unknown error"}. Exit status: ${n2}. stderr: ${s2 || "none"}`, Ge = false, false;
    }
    function et(e2, t2 = [], r2 = {}, n2) {
      const s2 = (0, U.q6)();
      if (r2.env = E(r2.env), !Ve(s2)) throw new Error(`Sandbox binary not available: ${$e?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
      if ("insecure_none" === n2.type) return (0, x.D9)(g.spawn, e2, t2, { ...r2, windowsHide: true });
      if ("workspace_readwrite" === n2.type || "workspace_readonly" === n2.type) return (function(e3, t3, r3, n3) {
        if ("workspace_readwrite" !== n3.type && "workspace_readonly" !== n3.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const s3 = String(r3.cwd ?? process.cwd()), o2 = n3.sandboxWorkspaceRoot ?? s3;
        let i2 = e3, a2 = t3;
        if (r3.shell) if ("win32" === process.platform) {
          i2 = "string" == typeof r3.shell ? r3.shell : "cmd.exe", a2 = ["/c", `${e3} ${t3.join(" ")}`];
        } else {
          i2 = "string" == typeof r3.shell ? r3.shell : "/bin/sh", a2 = ["-c", `${e3} ${t3.join(" ")}`];
        }
        const c2 = We(ze(n3), o2), l2 = He(c2);
        l2 && (c2.additionalReadwritePaths = [...c2.additionalReadwritePaths ?? [], l2]);
        const u2 = (function(e4) {
          if ("insecure_none" === e4.type) return;
          const t4 = e4.networkPolicy;
          if (void 0 === t4) return;
          if (!Se(t4)) return;
          const r4 = void 0 !== t4.deny && t4.deny.length > 0;
          return "allow" !== t4.default || r4 ? { version: 1, ...t4 } : void 0;
        })(n3), d2 = { sandbox: c2 };
        void 0 !== u2 && (d2.networkPolicy = u2);
        false === n3.networkPolicyStrict && (d2.networkPolicyStrict = false);
        const p2 = ["--policy", Me(JSON.stringify(d2)), "--", i2, ...a2], m2 = "linux" === process.platform ? T(process.env) : process.env, h2 = "linux" === process.platform && r3.env ? T(r3.env) : r3.env, f2 = { ...m2, ...h2, CURSOR_SANDBOX: "native" };
        if (Ue(f2), l2) {
          const e4 = Ke(l2, f2, n3.enableSharedBuildCache);
          Object.assign(f2, e4), f2.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e4).join(" "), f2.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e4).map(([e5, t4]) => `builtin export ${e5}='${t4.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const y2 = { cwd: r3.cwd || s3, env: f2, stdio: r3.stdio || ["pipe", "pipe", "pipe"], detached: r3.detached, windowsHide: true };
        try {
          const e4 = /* @__PURE__ */ new Date(), t4 = (0, x.D9)(g.spawn, String(Fe()), p2, y2);
          return Je && t4.pid && (function(e5, t5) {
            ve.set(e5, t5);
          })(t4, { startTime: e4, pid: t4.pid }), t4;
        } catch (e4) {
          throw new Error(`Failed to spawn sandboxed process: ${e4}`);
        }
      })(e2, t2, r2, n2);
      throw new Error(`Unsupported sandbox policy: ${String(n2)}`);
    }
    function tt(e2, t2, r2, n2) {
      const s2 = {};
      for (const [t3, r3] of Object.entries(e2)) {
        const e3 = t3.startsWith("file://") ? rt(t3) : t3;
        s2[e3] = r3;
        const n3 = nt(e3);
        n3 !== e3 && (s2[n3] = r3);
      }
      return s2;
    }
    function rt(e2) {
      let t2 = e2.replace(/^file:\/\//, "");
      return t2 = decodeURIComponent(t2), t2.length > 1 && t2.endsWith("/") && (t2 = t2.slice(0, -1)), t2;
    }
    function nt(e2, t2) {
      if ((0, h.$f)(e2)) return e2;
      try {
        return (t2 ?? s.realpathSync)(e2);
      } catch {
        return e2;
      }
    }
    class st extends Error {
      reason;
      constructor(e2, t2) {
        super(e2), this.reason = t2, this.name = "SandboxUnsupportedError";
      }
    }
    const ot = "darwin" === process.platform;
    function it(e2) {
      !(function(e3) {
        k();
        const { sandboxBinaryPath: t2, workspaceReadEnabled: r2 } = e3;
        qe || (qe = t2), void 0 !== r2 && (Ne = r2);
      })(e2);
    }
    function at(e2, t2 = [], r2 = {}, n2) {
      if (r2.env = E(r2.env), n2.enableSharedBuildCache && (r2 = { ...r2, env: { ...E(process.env), ...N(), ...r2.env } }), "insecure_none" !== n2.type) {
        if (Ye()) return et(e2, t2, r2, n2);
        const s2 = je;
        throw new st(`Sandbox policy '${n2.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${s2 || "unknown"}`, s2 ?? void 0);
      }
      return (function(e3, t3, r3) {
        return (0, x.D9)(g.spawn, e3, t3, { ...r3, windowsHide: true });
      })(e2, t2, r2);
    }
    function ct(e2) {
      return ot ? _e(e2) : Promise.resolve([]);
    }
    var lt;
    !(function(e2) {
      e2.Zsh = "zsh", e2.ZshLight = "zsh-light", e2.Bash = "bash", e2.PowerShell = "powershell", e2.Naive = "naive";
    })(lt || (lt = {}));
    const ut = { TERM: "dumb", NO_COLOR: "1", FORCE_COLOR: "0", _ZO_DOCTOR: "0" };
    function dt(e2, t2, r2) {
      const n2 = e2.pid;
      if (void 0 === n2) return;
      const s2 = () => {
        try {
          e2.kill(r2);
        } catch {
        }
      };
      switch (t2) {
        case "process_group":
          try {
            process.kill(-n2, r2);
          } catch {
            s2();
          }
          return;
        case "windows_tree":
          try {
            (0, g.spawn)("taskkill", ["/pid", String(n2), "/t", "/f"], { stdio: "ignore", windowsHide: true }).on("error", s2);
          } catch {
            s2();
          }
          return;
        case "single_process":
          return void s2();
        default:
          throw new Error(`Unknown process tree kill mode: ${String(t2)}`);
      }
    }
    function pt(e2, t2 = [], r2 = {}, n2, s2) {
      const o2 = at(e2, t2, { ...r2, env: S(r2.env ?? process.env) }, n2);
      if (s2) {
        const e3 = (function(e4) {
          return "win32" === e4.platform ? "windows_tree" : e4.detached ? "process_group" : "single_process";
        })({ platform: process.platform, detached: true === r2.detached }), t3 = () => {
          if (!o2.pid) return;
          dt(o2, e3, "SIGTERM");
          const t4 = setTimeout(() => {
            !o2.killed && o2.pid && dt(o2, e3, "SIGKILL");
          }, 1e3);
          o2.once("exit", () => {
            clearTimeout(t4);
          });
        };
        s2.aborted ? t3() : (s2.addEventListener("abort", t3, { once: true }), o2.once("exit", () => {
          s2.removeEventListener("abort", t3);
        }));
      }
      return o2;
    }
    function mt(e2) {
      e2?.on("error", () => {
      });
    }
    const ht = `IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- "$__cursor_command"; builtin unset __cursor_command; `;
    function ft() {
      return "win32" !== process.platform;
    }
    function gt(e2, t2) {
      const r2 = e2.stdio.at(5);
      r2 instanceof y.Writable && (mt(r2), r2.end(`${t2}\0`));
    }
    function yt(e2, t2) {
      e2 && (mt(e2), e2.write(t2), e2.end());
    }
    function wt(e2, t2) {
      e2 && (mt(e2), e2.on("data", (e3) => {
        t2(e3.toString());
      }));
    }
    function vt(e2) {
      const t2 = e2.indexOf("\n");
      return { cwd: e2.substring(0, t2), rest: e2.substring(t2) };
    }
    function _t(e2, t2) {
      const r2 = `${t2}
`, n2 = e2.indexOf(r2);
      return n2 >= 0 ? e2.slice(n2 + r2.length) : e2;
    }
    const bt = "__CURSOR_BASH_STATE_START__", St = "__CURSOR_BASH_STATE_END__", kt = `#!/usr/bin/env bash

# Usage:
#   source dump_bash_state.bash
#   dump_bash_state OUTPUT_FILE
# Or execute directly (captures a subshell's state):
#   ./dump_bash_state.bash OUTPUT_FILE

dump_bash_state() {
  set -euo pipefail

  # Require base64 for safe encoding of emitted sections
  if ! command -v base64 >/dev/null 2>&1; then
    echo "Error: base64 command is required" >&2
    return 1
  fi

  # Helper to log timing, only if DUMP_BASH_STATE_TIMING is set
  if [[ -n "\${DUMP_BASH_STATE_TIMING:-}" ]]; then
    # Timing setup
    if [[ "\${BASH_VERSION%%.*}" -ge 5 ]]; then
      # Use EPOCHREALTIME if available (bash 5+)
      local start_time=\${EPOCHREALTIME}
      local step_start=\${EPOCHREALTIME}
      _log_timing() {
        local step_name="$1"
        local now=\${EPOCHREALTIME}
        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")
        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")
        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
        step_start=$now
      }
    else
      # Fallback for older bash versions
      local start_time=$(command date +%s.%N)
      local step_start=$(command date +%s.%N)
      _log_timing() {
        local step_name="$1"
        local now=$(command date +%s.%N)
        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")
        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")
        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
        step_start=$now
      }
    fi
  else
    _log_timing() { :; }
  fi

  # Helper to append a line to output file
  _emit() {
    builtin printf '%s
' "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  # Start fresh
  _log_timing "file_init"

  # Emit start marker at the very beginning of the output
  _emit "__CURSOR_BASH_STATE_START__"

  # Working directory
  _emit "$PWD"
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (export statements)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  local env_vars
  env_vars=$(builtin export -p 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "environment"

  # POSIX shell options (replayable as set +/-o lines). Exclude the errexit/nounset/
  # pipefail this function force-enables above, so they are not baked into the restored
  # snapshot and leaked onto every subsequent command (a stray pipefail makes a
  # successful 'cmd | head' report exit 141).
  local posix_opts
  posix_opts=$(builtin shopt -po 2>/dev/null | command grep -vE '^set [-+]o (errexit|nounset|pipefail)$' || true)
  _emit_encoded "$posix_opts" "POSIX_OPTS_B64"
  _log_timing "posix_options"

  # Bash shopt options (replayable as shopt -s/-u lines)
  local bash_opts
  bash_opts=$(builtin shopt -p 2>/dev/null || true)
  _emit_encoded "$bash_opts" "BASH_OPTS_B64"
  _log_timing "bash_options"

  # Functions: capture all functions
  local all_functions
  all_functions=$(builtin declare -f 2>/dev/null || true)
  _emit_encoded "$all_functions" "FUNCTIONS_B64"
  _log_timing "functions"

  # Aliases
  local aliases
  aliases=$(builtin alias -p 2>/dev/null || true)
  _emit_encoded "$aliases" "ALIASES_B64"
  _log_timing "aliases"

  # Done
  _emit "# end of bash state dump"
  _emit "__CURSOR_BASH_STATE_END__"
  _log_timing "finalize"
}
`, xt = { flushIntervalMs: 50, maxBufferedBytes: 262144 };
    class Et {
      writable;
      pending = [];
      pendingBytes = 0;
      flushTimeout;
      flushPromise;
      flushIntervalMs;
      maxBufferedBytes;
      constructor(e2, t2) {
        this.writable = e2, this.flushIntervalMs = t2?.flushIntervalMs ?? xt.flushIntervalMs, this.maxBufferedBytes = t2?.maxBufferedBytes ?? xt.maxBufferedBytes;
      }
      async push(e2, t2) {
        0 !== t2.length && (this.pending.push({ type: e2, data: t2 }), this.pendingBytes += t2.length, this.pendingBytes >= this.maxBufferedBytes ? await this.flush() : this.scheduleFlush());
      }
      async flush() {
        if (this.clearFlushTimeout(), this.flushPromise) return await this.flushPromise, void (this.pendingBytes > 0 && await this.flush());
        if (0 === this.pendingBytes) return;
        const e2 = this.pending;
        this.pending = [], this.pendingBytes = 0, this.flushPromise = this.writeBufferedOutput(e2);
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
      async writeBufferedOutput(e2) {
        for (const t2 of (function(e3) {
          if (0 === e3.length) return [];
          const t3 = [];
          let r2 = e3[0].type, n2 = [e3[0].data];
          for (let s2 = 1; s2 < e3.length; s2++) {
            const o2 = e3[s2];
            o2.type !== r2 ? (t3.push({ type: r2, data: Buffer.concat(n2) }), r2 = o2.type, n2 = [o2.data]) : n2.push(o2.data);
          }
          return t3.push({ type: r2, data: Buffer.concat(n2) }), t3;
        })(e2)) try {
          await this.writable.write(t2);
        } catch {
        }
      }
    }
    function It(e2) {
      const t2 = new h.Zv();
      if (!e2.bufferOutputEvents) {
        const r3 = (t3, r4) => {
          e2.writable.write({ type: t3, data: r4 }).catch(() => {
          });
        };
        return e2.stdout?.on("data", (e3) => {
          const n3 = t2.note(e3);
          void 0 !== n3 && n3.length > 0 && r3("stdout", n3);
        }), e2.stderr?.on("data", (e3) => {
          r3("stderr", e3);
        }), { get stdoutBytes() {
          return t2.bytes;
        }, get stdoutPrefix() {
          return t2.stdoutPrefix;
        }, async waitForOutput() {
        }, async releaseHeldStdout() {
          const e3 = t2.takeHeld();
          void 0 !== e3 && e3.length > 0 && r3("stdout", e3);
        }, dropHeldStdout() {
          t2.takeHeld();
        }, async flush() {
          await this.releaseHeldStdout();
        } };
      }
      const r2 = new Et(e2.writable, e2.outputLimiterOptions);
      let n2;
      const s2 = Promise.all([Tt(e2.stdout, r2, t2), Ct(e2.stderr, "stderr", r2)]).then(() => {
      }).catch((e3) => {
        n2 = e3;
      });
      return { get stdoutBytes() {
        return t2.bytes;
      }, get stdoutPrefix() {
        return t2.stdoutPrefix;
      }, async waitForOutput() {
        if (await s2, void 0 !== n2) throw (e3 = n2) instanceof Error ? e3 : new Error(String(e3));
        var e3;
      }, async releaseHeldStdout() {
        const e3 = t2.takeHeld();
        void 0 !== e3 && e3.length > 0 && await r2.push("stdout", e3);
      }, dropHeldStdout() {
        t2.takeHeld();
      }, async flush() {
        await this.releaseHeldStdout(), await r2.flush();
      } };
    }
    async function Tt(e2, t2, r2) {
      if (e2) for await (const n2 of e2) {
        const e3 = r2.note(n2);
        void 0 !== e3 && e3.length > 0 && await t2.push("stdout", e3);
      }
    }
    async function Ct(e2, t2, r2, n2) {
      if (e2) for await (const s2 of e2) n2?.(s2), await r2.push(t2, s2);
    }
    function Pt(e2) {
      return e2.teamAdmin?.type ?? e2.perRepo?.type ?? e2.perUser?.type ?? "insecure_none";
    }
    function At(...e2) {
      return e2.some((e3) => true === e3);
    }
    function Rt(...e2) {
      const t2 = e2.filter((e3) => void 0 !== e3);
      if (0 === t2.length) return [];
      if (t2.some((e3) => 0 === e3.length)) return [];
      if (1 === t2.length) return (function(e3) {
        const t3 = /* @__PURE__ */ new Set(), r3 = [];
        for (const n2 of e3) {
          const e4 = qt(n2);
          t3.has(e4) || (t3.add(e4), r3.push(n2));
        }
        return r3;
      })(t2[0]).map(qt);
      let r2 = new Set(t2[0].map(qt));
      for (let e3 = 1; e3 < t2.length; e3++) {
        const n2 = new Set(t2[e3].map(qt));
        r2 = new Set([...r2].filter((e4) => n2.has(e4)));
      }
      return [...r2];
    }
    function Mt(...e2) {
      const t2 = /* @__PURE__ */ new Set();
      for (const r2 of e2) if (r2) for (const e3 of r2) t2.add(qt(e3));
      return [...t2];
    }
    const Jt = (function({ defaultValue: e2, rank: t2 }) {
      return { defaultValue: e2, merge: (...r2) => {
        const n2 = r2.filter((e3) => void 0 !== e3);
        return 0 === n2.length ? e2 : n2.reduce((e3, r3) => t2[r3] < t2[e3] ? r3 : e3);
      } };
    })({ defaultValue: "system", rank: { workspace: 0, system: 1 } }), Ot = { defaultValue: [], merge: (...e2) => Rt(...e2) };
    function Bt(...e2) {
      return Jt.merge(...e2);
    }
    function Dt(...e2) {
      return Ot.merge(...e2);
    }
    function qt(e2) {
      const t2 = e2.replace(/\\/g, "/").replace(/\/+$/, "");
      return "" === t2 ? "/" : /^[a-zA-Z]:$/.test(t2) ? `${t2}/` : t2;
    }
    function Nt(...e2) {
      const t2 = e2.filter((e3) => void 0 !== e3);
      if (0 === t2.length) return;
      let r2;
      for (const e3 of t2) {
        if ("deny" === e3.default) {
          r2 = "deny";
          break;
        }
        "allow" === e3.default && void 0 === r2 && (r2 = "allow");
      }
      const n2 = /* @__PURE__ */ new Set();
      for (const e3 of t2) if (e3.deny) for (const t3 of e3.deny) n2.add(t3);
      const s2 = /* @__PURE__ */ new Set();
      for (const e3 of t2) if (e3.allow) for (const t3 of e3.allow) s2.add(t3);
      const o2 = s2.size > 0 ? [...s2] : void 0;
      let i2;
      for (let e3 = t2.length - 1; e3 >= 0; e3--) if (void 0 !== t2[e3].logging) {
        i2 = t2[e3].logging;
        break;
      }
      const a2 = { version: 1 };
      return void 0 !== r2 && (a2.default = r2), void 0 !== o2 && (a2.allow = o2), n2.size > 0 && (a2.deny = [...n2]), void 0 !== i2 && (a2.logging = i2), void 0 !== a2.default || void 0 !== a2.allow && 0 !== a2.allow.length || void 0 !== a2.deny && 0 !== a2.deny.length || void 0 !== a2.logging ? a2 : void 0;
    }
    function Ft(...e2) {
      const t2 = e2.filter((e3) => void 0 !== e3);
      if (0 === t2.length) return;
      const r2 = {};
      for (const e3 of t2) for (const [t3, n2] of Object.entries(e3)) {
        const e4 = r2[t3];
        if (e4) {
          const s2 = new Set(e4);
          for (const e5 of n2) s2.has(e5) && s2.delete(e5), s2.add(e5);
          r2[t3] = [...s2];
        } else r2[t3] = [...n2];
      }
      return 0 !== Object.keys(r2).length ? r2 : void 0;
    }
    function Ut(...e2) {
      for (let t2 = e2.length - 1; t2 >= 0; t2--) if (void 0 !== e2[t2]) return e2[t2];
    }
    async function Lt(e2, t2, r2 = {}) {
      if (!t2) return { policy: { type: "insecure_none" } };
      if ((0, h.$f)(e2)) return $t(t2, { workspaceDir: e2 });
      const s2 = r2.stat ?? d.stat, o2 = r2.spawnPromise ?? z, i2 = await s2((0, n.join)(e2, ".git")).then((e3) => e3, () => null), a2 = i2?.isFile() ?? false, c2 = null !== i2;
      if ("workspace_readwrite" === Pt(t2)) {
        let r3 = e2;
        if (a2) {
          const s3 = await o2("git", ["rev-parse", "--git-common-dir"], { cwd: e2 }).then((t3) => (0, n.resolve)(e2, t3.trim()), () => null);
          if (s3) {
            r3 = (0, n.dirname)(s3);
            const o3 = t2.perRepo, i3 = o3?.ignoreMapping;
            t2 = { ...t2, perRepo: { ...o3, type: "workspace_readwrite", additionalReadwritePaths: [...o3?.additionalReadwritePaths ?? [], s3], ignoreMapping: i3, writeProtectionMapping: Ft(o3?.writeProtectionMapping, re(e2)) } };
          }
        }
        if (c2) return $t(t2, { workspaceDir: e2, gitDirParent: r3 });
      }
      return $t(t2, { workspaceDir: e2 });
    }
    function $t(e2, t2) {
      const r2 = (function(e3) {
        const { perUser: t3, perRepo: r3, teamAdmin: n2 } = e3, s2 = [t3, r3, n2].filter((e4) => void 0 !== e4);
        if (0 === s2.length) return;
        const o2 = s2[0].type;
        for (const e4 of s2) if (e4.type !== o2) throw new Error(`Cannot merge policies of different types: found "${o2}" and "${e4.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        return o2;
      })(e2);
      if (void 0 === r2) return zt(e2, t2);
      switch (r2) {
        case "workspace_readwrite":
          return zt(e2, t2);
        case "workspace_readonly":
          return (function(e3, t3) {
            const r3 = t3?.debug, n2 = jt(e3, t3), s2 = { policy: Gt({ type: "workspace_readonly", disableTmpWrite: n2.disableTmpWrite, networkPolicyStrict: n2.networkPolicyStrict, readBoundary: n2.readBoundary, additionalReadPaths: n2.additionalReadPaths, additionalReadonlyPaths: n2.additionalReadonlyPaths, networkPolicy: n2.networkPolicy, debugOutputDir: n2.debugOutputDir, captureDenies: n2.captureDenies, enableSharedBuildCache: n2.enableSharedBuildCache, ignoreMapping: n2.ignoreMapping, writeProtectionMapping: n2.writeProtectionMapping }, "workspace_readonly") };
            r3 && (s2.debug = { fieldSources: n2.fieldSources });
            return s2;
          })(e2, t2);
        case "insecure_none":
          return (function(e3, t3) {
            const { perUser: r3, perRepo: n2, teamAdmin: s2 } = e3, o2 = t3?.debug, i2 = {}, a2 = At(r3?.allowlistEscalated, n2?.allowlistEscalated, s2?.allowlistEscalated), c2 = Ut(r3?.debugOutputDir, n2?.debugOutputDir, s2?.debugOutputDir), l2 = At(r3?.captureDenies, n2?.captureDenies, s2?.captureDenies), u2 = Ut(r3?.enableSharedBuildCache, n2?.enableSharedBuildCache, s2?.enableSharedBuildCache), d2 = { type: "insecure_none", allowlistEscalated: a2 || void 0, debugOutputDir: c2, captureDenies: l2 || void 0, enableSharedBuildCache: u2 }, p2 = Object.fromEntries(Object.entries(d2).filter(([e4, t4]) => void 0 !== t4));
            p2.type = "insecure_none";
            const m2 = { policy: p2 };
            o2 && (m2.debug = { fieldSources: i2 });
            return m2;
          })(e2, t2);
        default:
          throw new Error(`Unknown policy type: ${r2}`);
      }
    }
    function jt(e2, t2) {
      const r2 = t2?.debug, { perUser: n2, perRepo: s2, teamAdmin: o2 } = e2, i2 = t2?.workspaceDir ?? process.cwd(), a2 = se(i2), c2 = {}, l2 = [n2, s2, o2], u2 = ["perUser", "perRepo", "teamAdmin", "hardcoded"], d2 = (e3, t3) => {
        r2 && (c2[e3] = u2[t3] ?? "unknown");
      }, p2 = At(n2?.disableTmpWrite, s2?.disableTmpWrite, o2?.disableTmpWrite);
      for (let e3 = l2.length - 1; e3 >= 0; e3--) if (true === l2[e3]?.disableTmpWrite) {
        d2("disableTmpWrite", e3);
        break;
      }
      const m2 = At(n2?.networkPolicyStrict, s2?.networkPolicyStrict, o2?.networkPolicyStrict, a2.networkPolicyStrict);
      a2.networkPolicyStrict && d2("networkPolicyStrict", 3);
      const h2 = Ut(n2?.readBoundary, s2?.readBoundary, o2?.readBoundary) ?? "system", f2 = Ut(n2?.additionalReadPaths, s2?.additionalReadPaths), g2 = false === o2?.allowUserOverrideReadPaths ? Mt(o2.additionalReadPaths) : Mt(f2, o2?.additionalReadPaths), y2 = "workspace" === h2 ? g2 : void 0, w2 = Mt(n2?.additionalReadonlyPaths, s2?.additionalReadonlyPaths, o2?.additionalReadonlyPaths, a2.additionalReadonlyPaths), v2 = w2.length > 0 ? w2 : void 0;
      let _2 = Nt(n2?.networkPolicy, s2?.networkPolicy, o2?.networkPolicy, a2.networkPolicy);
      const b2 = o2?.networkPolicy?.allow;
      void 0 !== b2 && b2.length > 0 && void 0 !== _2 && (_2 = { ..._2, allow: [...b2] }, r2 && (c2["networkPolicy.allow"] = "teamAdmin (replace)"));
      const S2 = void 0 !== (k2 = _2) ? k2 : { version: 1, default: "deny" };
      var k2;
      const x2 = Ut(n2?.debugOutputDir, s2?.debugOutputDir, o2?.debugOutputDir), E2 = At(n2?.captureDenies, s2?.captureDenies, o2?.captureDenies), I2 = Ut(n2?.enableSharedBuildCache, s2?.enableSharedBuildCache, o2?.enableSharedBuildCache), T2 = Ft(n2?.ignoreMapping, s2?.ignoreMapping, o2?.ignoreMapping, a2.ignoreMapping), C2 = (function(e3) {
        const t3 = ee.filter((e4) => "git" === e4.type).map((e4) => e4.pattern);
        return { [e3]: t3 };
      })(t2?.gitDirParent ?? i2);
      return { disableTmpWrite: p2 || void 0, networkPolicyStrict: m2, readBoundary: h2, additionalReadPaths: y2, additionalReadonlyPaths: v2, networkPolicy: S2, debugOutputDir: x2, captureDenies: E2 || void 0, enableSharedBuildCache: I2, ignoreMapping: T2, writeProtectionMapping: Ft(n2?.writeProtectionMapping, s2?.writeProtectionMapping, o2?.writeProtectionMapping, a2.writeProtectionMapping, C2), fieldSources: c2 };
    }
    function Gt(e2, t2) {
      const r2 = Object.fromEntries(Object.entries(e2).filter(([e3, t3]) => void 0 !== t3));
      return r2.type = t2, r2;
    }
    function zt(e2, t2) {
      const { perUser: r2, perRepo: n2, teamAdmin: s2 } = e2, o2 = t2?.debug, i2 = jt(e2, t2), a2 = Mt(r2?.additionalReadwritePaths, n2?.additionalReadwritePaths, s2?.additionalReadwritePaths), c2 = { policy: Gt({ type: "workspace_readwrite", disableTmpWrite: i2.disableTmpWrite, networkPolicyStrict: i2.networkPolicyStrict, readBoundary: i2.readBoundary, additionalReadPaths: i2.additionalReadPaths, additionalReadwritePaths: a2.length > 0 ? a2 : void 0, additionalReadonlyPaths: i2.additionalReadonlyPaths, networkPolicy: i2.networkPolicy, debugOutputDir: i2.debugOutputDir, captureDenies: i2.captureDenies, enableSharedBuildCache: i2.enableSharedBuildCache, ignoreMapping: i2.ignoreMapping, writeProtectionMapping: i2.writeProtectionMapping }, "workspace_readwrite") };
      return o2 && (c2.debug = { fieldSources: i2.fieldSources }), c2;
    }
    const Wt = "win32" === process.platform;
    function Ht(e2) {
      return !Wt && !!e2?.SUDO_ASKPASS;
    }
    function Kt(e2) {
      return Ht(e2) ? "alias sudo='sudo -A'; " : "";
    }
    function Vt(e2) {
      const t2 = [];
      let r2 = 0;
      for (; r2 < e2.length; ) {
        const n2 = 0 === r2 || "&&" === e2.slice(Math.max(0, r2 - 2), r2) || "||" === e2.slice(Math.max(0, r2 - 2), r2) || "|" === e2[r2 - 1] || ";" === e2[r2 - 1], s2 = Math.max(0, r2 - 10), o2 = e2.slice(s2, r2), i2 = /(?:&&|\|\||[|;])\s*$/.test(o2) || 0 === r2 && /^\s*$/.test(o2);
        if ((n2 || i2) && "sudo" === e2.slice(r2, r2 + 4)) {
          const n3 = r2 + 4;
          if (n3 >= e2.length || /\s/.test(e2[n3])) {
            let s3 = n3;
            for (; s3 < e2.length && /\s/.test(e2[s3]); ) s3++;
            let o3 = false;
            if (s3 < e2.length && "-" === e2[s3]) {
              let t3 = s3 + 1;
              for (; t3 < e2.length && /[^\s]/.test(e2[t3]); ) t3++;
              const r3 = e2.slice(s3, t3);
              o3 = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(r3);
            }
            o3 ? (t2.push("sudo"), r2 = n3) : (t2.push("sudo -A"), r2 = n3);
            continue;
          }
        }
        t2.push(e2[r2]), r2++;
      }
      return t2.join("");
    }
    var Yt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Qt = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Xt(e2) {
      if ("win32" === process.platform) {
        const t3 = /git.*bash/i;
        if (e2 && t3.test(e2)) return e2;
        const r2 = u("bash", [], t3).cmd;
        return t3.test(r2) ? r2 : null;
      }
      const t2 = process.env.SHELL;
      if (t2?.includes("bash")) return t2;
      return u("bash", []).cmd;
    }
    function Zt(e2) {
      if ("win32" !== process.platform) return e2;
      const t2 = n.normalize(e2), r2 = t2[0]?.toLowerCase();
      if (r2 && ":" === t2[1] && t2[2] === n.sep) {
        return `/${r2}${t2.slice(2).replace(/\\/g, "/")}`;
      }
      return t2.replace(/\\/g, "/");
    }
    class er {
      cwd;
      state;
      userTerminalHint;
      useFileStateTransport;
      constructor(e2, t2, r2, n2 = false) {
        this.cwd = e2, this.state = t2, this.userTerminalHint = r2, this.useFileStateTransport = n2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new er(e2 ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
      }
      resetSessionCwdAfterHopCdFailure(e2) {
        const { cwd: t2, sandboxWorkspaceRoot: r2 } = e2;
        n.resolve(t2) === n.resolve(this.cwd) && (this.cwd = void 0 === r2 || n.resolve(r2) === n.resolve(t2) || (0, h.A)(r2) ? (0, h.D1)() : r2);
      }
      async *execute(e2, t2, r2) {
        const s2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Yt(s2, (0, m.VI)(e2.withName("BashState.execute")), false), i2 = r2?.pipeStdin ?? false, a2 = (0, f.Jt)(), c2 = r2?.workingDirectory ?? this.cwd, l2 = { ...process.env, ...ut, ...r2?.env };
          let u2 = 'builtin eval "$1"';
          i2 || (u2 += " < /dev/null");
          const g2 = Kt(l2), y2 = this.useFileStateTransport;
          let w2, v2, _2;
          if (y2) {
            w2 = await (0, d.mkdtemp)(n.join(p.tmpdir(), "cursor-bash-state-"));
            n.basename(w2);
            v2 = n.join(w2, "state-in"), _2 = n.join(w2, "state-out"), await (0, d.writeFile)(v2, this.state, "utf8"), await (0, d.writeFile)(_2, "", "utf8").catch(() => {
            });
            const e3 = Zt(v2), t3 = Zt(_2);
            l2.CURSOR_STATE_INPUT_FILE = e3, l2.CURSOR_STATE_OUTPUT_FILE = t3;
          }
          const b2 = ["-O", "extglob", "-c", (y2 ? "" : ht) + `${y2 ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)"} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + q + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${g2}${u2}; }; COMMAND_EXIT_CODE=$?; ${y2 ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4"}; builtin exit $COMMAND_EXIT_CODE`, "--", ...y2 ? [t2] : []], S2 = Xt(this.userTerminalHint);
          if (!S2) throw new Error("Can't find Bash");
          const k2 = r2?.sandboxWorkspaceRoot ?? c2, x2 = (await Lt(k2, r2?.sandboxPolicy)).policy, E2 = "insecure_none" !== x2.type ? { ...x2, sandboxWorkspaceRoot: k2 } : x2;
          let I2 = "";
          const T2 = async () => {
            if (y2) {
              if (!_2) return void (I2 = this.state);
              try {
                I2 = await (0, d.readFile)(_2, "utf8");
              } catch (e3) {
                console.warn("[shell-exec] Failed to read bash state file", e3), I2 = this.state;
              }
            }
          }, C2 = async () => {
            if (w2) try {
              await (0, d.rm)(w2, { recursive: true, force: true });
            } catch {
            }
          };
          let P2;
          (0, h.$Y)(c2) && (0, m.HF)(o2.ctx, h.yo);
          try {
            P2 = pt(S2, b2, { env: l2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", y2 ? "ignore" : "pipe"], cwd: c2, detached: true }, E2, r2?.signal);
          } catch (e3) {
            throw await C2(), e3;
          }
          P2.on("spawn", async () => {
            try {
              await a2.write({ type: "stdin_ready", stdin: P2.stdin ?? void 0, pid: P2.pid });
            } catch (e3) {
            }
          });
          const A2 = It({ stdout: P2.stdout, stderr: P2.stderr, writable: a2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          P2.on("error", async (e3) => {
            if ((0, h.fK)(e3, c2)) {
              this.resetSessionCwdAfterHopCdFailure({ cwd: c2, sandboxWorkspaceRoot: r2?.sandboxWorkspaceRoot }), (0, m.HF)(o2.ctx, h.Gq);
              const e4 = (0, h.iA)(c2);
              console.warn(`[shell-exec] working directory is not accessible (${e4.cwdKind}:${e4.cwdHash})`);
            }
            await C2(), a2.throw(e3);
          });
          let R2 = null, M2 = null, J2 = false;
          const O2 = async (e3) => {
            if (J2) return;
            if (J2 = true, M2 && (clearTimeout(M2), M2 = null), (0, m.HF)(o2.ctx, "exit"), e3) try {
              await A2.waitForOutput();
            } catch (e4) {
              return await C2(), void a2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
            }
            const t3 = (0, h.wz)({ exitCode: R2, stdoutBytes: A2.stdoutBytes, stdoutPrefix: A2.stdoutPrefix, cwd: c2 }) && "" === I2;
            if (t3 && A2.dropHeldStdout(), await A2.flush(), t3) {
              this.resetSessionCwdAfterHopCdFailure({ cwd: c2, sandboxWorkspaceRoot: r2?.sandboxWorkspaceRoot }), await C2(), (0, m.HF)(o2.ctx, h.Gq);
              const e4 = (0, h.iA)(c2);
              return console.warn(`[shell-exec] working directory is not accessible (${e4.cwdKind}:${e4.cwdHash})`), void a2.throw((0, h.Vn)(c2));
            }
            if (!r2?.signal?.aborted) {
              await T2();
              const e4 = `${bt}
`, t4 = `${St}
`;
              if (I2.startsWith(e4) && I2.endsWith(t4)) {
                let t5 = I2.slice(e4.length);
                t5 = t5.slice(0, -(St.length + 1));
                const { cwd: r3, rest: n2 } = vt(t5);
                this.state = n2, "win32" !== process.platform && r3?.startsWith("/") && (this.cwd = r3);
              }
            }
            if (E2.captureDenies) try {
              const e4 = await ct(P2);
              e4 && e4.length > 0 && await a2.write({ type: "sandbox_denies", events: e4 });
            } catch {
            }
            try {
              await a2.write({ type: "exit", code: R2, data: "", aborted: r2?.signal?.aborted ?? false }), a2.close();
            } catch {
              a2.close();
            }
            await C2();
          };
          P2.on("exit", (e3, t3) => {
            R2 = e3;
            const n2 = r2?.closeTimeout ?? 5e3;
            n2 > 0 && (M2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n2}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), O2(false);
            }, n2));
          }), P2.on("close", async () => {
            await O2(true);
          });
          const B2 = P2.stdio[3], D2 = P2.stdio[4];
          y2 || (gt(P2, t2), yt(B2, this.state), wt(D2, (e3) => {
            I2 += e3;
          })), yield* a2;
        } catch (e3) {
          s2.error = e3, s2.hasError = true;
        } finally {
          Qt(s2);
        }
      }
    }
    var tr = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, rr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class nr {
      initializer;
      promise;
      constructor(e2) {
        this.initializer = e2;
      }
      getExecutor() {
        return void 0 === this.promise && (this.promise = this.initializer()), this.promise;
      }
      async getCwd() {
        return (await this.getExecutor()).getCwd();
      }
      clone(e2) {
        return new nr(async () => (await this.getExecutor()).clone(e2));
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          tr(n2, (0, m.VI)(e2.withName("LazyTerminalExecutor.execute")), false);
          const s2 = await this.getExecutor();
          for await (const n3 of s2.execute(e2, t2, r2)) yield n3;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          rr(n2);
        }
      }
    }
    const sr = (e2, t2, r2, n2, s2) => `
${s2?.utf8Console ? "\ntry { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\n" : ""}
${e2}

Set-Location '${t2}'

# Execute user command
${r2}
$COMMAND_EXIT_CODE = $LASTEXITCODE


function Dump-PowerShellState {
    param(
        [Parameter(Mandatory = $true)]
        [string]$OutputFile
    )

    function Emit {
        param([string]$Content)
        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8
    }

    if (Test-Path $OutputFile) {
        Remove-Item $OutputFile -Force
    }
    New-Item -Path $OutputFile -ItemType File -Force | Out-Null
    #Log-Timing "file_init"

    Emit $PWD.Path
    #Log-Timing "working_dir"

    function ShouldPersistEnvVar {
        param([string]$Name)
        if ($Name -eq 'CURSOR_CONVERSATION_ID') {
            return $false
        }
        if ($Name -eq 'CURSOR_REQUEST_ID') {
            return $false
        }
        if ($Name -like 'CURSOR_AGENT_STORE*') {
            return $false
        }
        if ($Name -like '*CURSOR_SANDBOX*') {
            return $false
        }
        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {
            return $false
        }
        return $true
    }

    $envVars = Get-ChildItem Env: | Sort-Object Name
    foreach ($var in $envVars) {
        if (-not (ShouldPersistEnvVar -Name $var.Name)) {
            continue
        }
        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))
        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)
    }
    #Log-Timing "environment"

    $aliases = Get-Alias | Sort-Object Name
    foreach ($alias in $aliases) {
        $definition = $alias.Definition

        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {
        }
        else {
            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)
        }
    }

    #Log-Timing "finalize"
}

Dump-PowerShellState -OutputFile "${n2}"

exit $COMMAND_EXIT_CODE
`;
    var or = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, ir = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function ar() {
      if ("win32" !== process.platform) {
        const e3 = process.env.SHELL;
        if (e3?.includes("pwsh") || e3?.includes("powershell")) return e3;
      }
      let e2 = u("pwsh", []).cmd;
      if ("pwsh" !== e2) return e2;
      if (e2 = u("powershell", []).cmd, "powershell" !== e2) return e2;
      if ("win32" === process.platform && (e2 = n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), (0, s.existsSync)(e2))) return e2;
      throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
    }
    class cr {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new cr(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const s2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = or(s2, (0, m.VI)(e2.withName("PowerShellState.execute")), false), i2 = r2?.pipeStdin ?? false, a2 = r2?.workingDirectory ?? this.cwd, c2 = (0, f.Jt)(), l2 = { ...process.env, ...ut, ...r2?.env }, u2 = Ht(l2) ? Vt(t2) : t2, h2 = p.tmpdir(), g2 = n.join(h2, `ps-state-out-${(0, C.randomUUID)()}.txt`), y2 = "win32" === process.platform, w2 = sr(this.state, a2, u2, g2, { utf8Console: y2 && true === r2?.powershellUtf8Console }), v2 = n.join(h2, `ps-script-${(0, C.randomUUID)()}.ps1`);
          await (async function(e3, t3) {
            await d.writeFile(e3, lr + t3, { encoding: "utf8" });
          })(v2, w2);
          const _2 = ["-ExecutionPolicy", "Bypass"];
          i2 || _2.push("-NonInteractive"), _2.push("-File", v2);
          const b2 = ar(), S2 = r2?.sandboxWorkspaceRoot ?? a2, k2 = (await Lt(S2, r2?.sandboxPolicy)).policy, x2 = pt(b2, _2, { env: l2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe"], cwd: a2, detached: !y2 }, "insecure_none" !== k2.type ? { ...k2, sandboxWorkspaceRoot: S2 } : k2, r2?.signal);
          x2.on("spawn", async () => {
            try {
              await c2.write({ type: "stdin_ready", stdin: x2.stdin ?? void 0, pid: x2.pid });
            } catch (e3) {
            }
          });
          const E2 = It({ stdout: x2.stdout, stderr: x2.stderr, writable: c2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions }), I2 = async () => {
            try {
              const e3 = await d.readFile(g2, "utf8"), { cwd: t3, rest: r3 } = vt(e3);
              this.state = r3, this.cwd = t3.trim(), await (0, d.rm)(g2).catch(() => {
              });
            } catch (e3) {
            }
            await (0, d.rm)(v2).catch(() => {
            });
          };
          let T2 = null, P2 = null, A2 = false;
          const R2 = async (e3) => {
            if (!A2) {
              if (A2 = true, P2 && (clearTimeout(P2), P2 = null), (0, m.HF)(o2.ctx, "exit"), e3) try {
                await E2.waitForOutput();
              } catch (e4) {
                return await I2(), void c2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              await E2.flush();
              try {
                await c2.write({ type: "exit", code: T2, data: "", aborted: r2?.signal?.aborted ?? false }), await I2(), c2.close();
              } catch (e4) {
                c2.close();
              }
            }
          };
          x2.on("exit", (e3, t3) => {
            T2 = e3;
            const n2 = r2?.closeTimeout ?? 5e3;
            n2 > 0 && (P2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n2}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), R2(false);
            }, n2));
          }), x2.on("close", async () => {
            await R2(true);
          }), x2.on("error", (e3) => {
            I2().catch(() => {
            }), c2.throw(e3);
          }), yield* c2;
        } catch (e3) {
          s2.error = e3, s2.hasError = true;
        } finally {
          ir(s2);
        }
      }
    }
    const lr = "\uFEFF";
    var ur = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, dr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class pr {
      cwd;
      options;
      constructor(e2, t2) {
        this.cwd = e2, this.options = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new pr(e2 ?? this.cwd, this.options);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = ur(n2, (0, m.VI)(e2.withName("NaiveTerminalExecutor.execute")), false), o2 = (0, f.Jt)(), i2 = r2?.pipeStdin ?? false, a2 = { ...process.env, ...ut, ...r2?.env }, c2 = Ht(a2) ? Vt(t2) : t2, l2 = r2?.workingDirectory ?? this.cwd, u2 = r2?.sandboxWorkspaceRoot ?? l2, d2 = (await Lt(u2, r2?.sandboxPolicy)).policy, p2 = "insecure_none" !== d2.type ? { ...d2, sandboxWorkspaceRoot: u2 } : d2, h2 = "win32" === process.platform, g2 = pt(this.options?.shell || process.env.SHELL || "/bin/sh", [...this.options?.shellArgs ?? [], "-c", c2], { env: a2, cwd: l2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe"], detached: !h2 }, p2, r2?.signal);
          g2.on("spawn", async () => {
            try {
              await o2.write({ type: "stdin_ready", stdin: g2.stdin ?? void 0, pid: g2.pid });
            } catch (e3) {
            }
          });
          const y2 = It({ stdout: g2.stdout, stderr: g2.stderr, writable: o2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          g2.on("error", (e3) => {
            o2.throw(e3);
          }), g2.on("exit", async (e3) => {
            if ((0, m.HF)(s2.ctx, "exit"), await y2.flush(), p2.captureDenies) try {
              const e4 = await ct(g2);
              e4 && e4.length > 0 && await o2.write({ type: "sandbox_denies", events: e4 });
            } catch {
            }
            try {
              await o2.write({ type: "exit", code: e3, data: "", aborted: r2?.signal?.aborted ?? false }), o2.close();
            } catch (e4) {
              o2.close();
            }
          }), yield* o2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          dr(n2);
        }
      }
    }
    function mr(e2) {
      const t2 = "win32" === process.platform, r2 = e2?.shell ?? (t2 ? ar() : void 0), n2 = process.cwd();
      return new pr(n2, { ...e2, shell: r2 });
    }
    const hr = "__CURSOR_ZSH_STATE_START__", fr = "__CURSOR_ZSH_STATE_END__", gr = `#!/usr/bin/env zsh

# Usage:
#   source dump_zsh_state.zsh
#   dump_zsh_state
# Or execute directly (captures a subshell's state):
#   ./dump_zsh_state.zsh

# Define a function so sourcing won't alter caller state; emulate locally inside
function dump_zsh_state() {
  emulate -L zsh -o errreturn -o pipefail
  set -u


  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set
  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then
    # Timing setup
    typeset start_time=\${EPOCHREALTIME}
    typeset step_start=\${EPOCHREALTIME}
    _log_timing() {
      typeset step_name="$1"
      typeset now=\${EPOCHREALTIME}
      typeset step_duration=$((now - step_start))
      typeset total_duration=$((now - start_time))
      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
      step_start=$now
    }
  else
    _log_timing() { :; }
  fi

  # Ensure parameter arrays are available
  builtin zmodload -F zsh/parameter p:parameters p:options p:functions p:aliases p:galiases p:saliases 2>/dev/null || true
  _log_timing "zmodload"

  # Helper to print a line to stdout
  _emit() {
    builtin print -r -- "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  _log_timing "init"

  # Emit start marker at the very beginning of the output
  _emit "__CURSOR_ZSH_STATE_START__"

  # Header
  _emit "$PWD"

  _emit "# zsh state dump generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"
  _log_timing "header"

  # Working directory
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (exported)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which
  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,
  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites
  # that one escape to the § form so the restore eval can parse it. It runs
  # only on scalar $'...' lines: a plain-quoted value can hold the same four
  # characters literally, and there they must stay.
  local env_vars
  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "env_variables"

  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this
  # function force-enables above, so they are not baked into the restored snapshot and
  # leaked onto every subsequent command (a stray pipefail makes a successful
  # 'cmd | head' report exit 141).
  local zsh_opts
  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)
  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"
  _log_timing "options"

  # Functions: dump all functions at once (much faster than individual processing)
  local all_functions
  all_functions=$(builtin typeset -f 2>/dev/null || true)
  _emit_encoded "$all_functions" "FUNCTIONS_B64"
  _log_timing "functions"

  # Aliases (regular, global, and suffix)
  {
    builtin alias -L 2>/dev/null || true
    builtin alias -gL 2>/dev/null || true
    builtin alias -sL 2>/dev/null || true
  }
  _log_timing "aliases"

  # Done
  _emit "# end of zsh state dump"
  _emit "__CURSOR_ZSH_STATE_END__"
  _log_timing "finalize"
}
`;
    var yr = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, wr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function vr() {
      const e2 = process.env.SHELL;
      return e2?.includes("zsh") ? e2 : u("zsh", []).cmd;
    }
    class _r {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new _r(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = yr(n2, (0, m.VI)(e2.withName("ZshState.execute")), false), o2 = r2?.pipeStdin ?? false, i2 = (0, f.Jt)(), a2 = r2?.workingDirectory ?? this.cwd, c2 = { ...process.env, ...ut, ...r2?.env };
          let l2 = 'builtin eval "$1"';
          o2 || (l2 += " < /dev/null");
          const u2 = Kt(c2), d2 = ft(), p2 = ["-c", (d2 ? ht : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + q + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u2}${l2}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...d2 ? [] : [t2]], h2 = r2?.sandboxWorkspaceRoot ?? a2, g2 = (await Lt(h2, r2?.sandboxPolicy)).policy, y2 = "insecure_none" !== g2.type ? { ...g2, sandboxWorkspaceRoot: h2 } : g2, w2 = pt(vr(), p2, { env: c2, stdio: [o2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", d2 ? "pipe" : "ignore"], cwd: a2, detached: true }, y2, r2?.signal);
          let v2 = "";
          w2.on("spawn", async () => {
            try {
              await i2.write({ type: "stdin_ready", stdin: w2.stdin ?? void 0, pid: w2.pid });
            } catch (e3) {
            }
          });
          const _2 = It({ stdout: w2.stdout, stderr: w2.stderr, writable: i2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          w2.on("error", (e3) => {
            i2.throw(e3);
          });
          let b2 = null, S2 = null, k2 = false;
          const x2 = async (e3) => {
            if (!k2) {
              if (k2 = true, S2 && (clearTimeout(S2), S2 = null), (0, m.HF)(s2.ctx, "exit"), e3) try {
                await _2.waitForOutput();
              } catch (e4) {
                return void i2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              if (await _2.flush(), !r2?.signal?.aborted) {
                const e4 = `${hr}
`, t3 = `${fr}
`;
                if (v2.startsWith(e4) && v2.endsWith(t3)) {
                  let t4 = v2.slice(e4.length);
                  t4 = t4.slice(0, -(fr.length + 1));
                  const { cwd: r3, rest: n3 } = vt(t4);
                  r3?.startsWith("/") && (this.state = n3, this.cwd = r3);
                }
              }
              if (y2.captureDenies) try {
                const e4 = await ct(w2);
                e4 && e4.length > 0 && await i2.write({ type: "sandbox_denies", events: e4 });
              } catch {
              }
              try {
                await i2.write({ type: "exit", code: b2, data: "", aborted: r2?.signal?.aborted ?? false }), i2.close();
              } catch (e4) {
                i2.close();
              }
            }
          };
          w2.on("exit", (e3, t3) => {
            b2 = e3;
            const n3 = r2?.closeTimeout ?? 5e3;
            n3 > 0 && (S2 = setTimeout(() => {
              k2 || (console.warn(`[shell-exec] Close event did not fire within ${n3}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), (function(e4, t4, r3) {
                if (e4) {
                  try {
                    process.kill(-e4, t4);
                  } catch {
                    return;
                  }
                  "SIGTERM" === t4 && void 0 !== r3 && r3 > 0 && setTimeout(() => {
                    try {
                      process.kill(-e4, "SIGKILL");
                    } catch {
                    }
                  }, r3);
                }
              })(w2.pid, "SIGKILL"), x2(false));
            }, n3));
          }), w2.on("close", async () => {
            await x2(true);
          });
          const E2 = w2.stdio[3], I2 = w2.stdio[4];
          d2 && gt(w2, t2), yt(E2, this.state), wt(I2, (e3) => {
            v2 += e3;
          }), yield* i2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          wr(n2);
        }
      }
    }
    const br = "__CURSOR_ZSH_STATE_LIGHT_VALID__", Sr = `#!/usr/bin/env zsh

# Usage:
#   source dump_zsh_state_light.zsh
#   dump_zsh_state_light
# Or execute directly (captures a subshell's state):
#   ./dump_zsh_state_light.zsh

# Lightweight version that skips function tracking for better performance

# Define a function so sourcing won't alter caller state; emulate locally inside
function dump_zsh_state_light() {
  emulate -L zsh -o errreturn -o pipefail
  set -u


  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set
  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then
    # Timing setup
    typeset start_time=\${EPOCHREALTIME}
    typeset step_start=\${EPOCHREALTIME}
    _log_timing() {
      typeset step_name="$1"
      typeset now=\${EPOCHREALTIME}
      typeset step_duration=$((now - step_start))
      typeset total_duration=$((now - start_time))
      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
      step_start=$now
    }
  else
    _log_timing() { :; }
  fi

  # Ensure parameter arrays are available
  builtin zmodload -F zsh/parameter p:parameters p:options p:aliases p:galiases p:saliases 2>/dev/null || true
  _log_timing "zmodload"

  # Helper to print a line to stdout
  _emit() {
    builtin print -r -- "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  _log_timing "init"

  # Emit validity marker so we can detect if dump_zsh_state_light completed
  _emit "__CURSOR_ZSH_STATE_LIGHT_VALID__"

  # Header
  _emit "$PWD"

  _emit "# zsh state dump (light) generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"
  _log_timing "header"

  # Working directory
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (exported)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which
  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,
  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites
  # that one escape to the § form so the restore eval can parse it. It runs
  # only on scalar $'...' lines: a plain-quoted value can hold the same four
  # characters literally, and there they must stay.
  local env_vars
  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "env_variables"

  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this
  # function force-enables above, so they are not baked into the restored snapshot and
  # leaked onto every subsequent command (a stray pipefail makes a successful
  # 'cmd | head' report exit 141).
  local zsh_opts
  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)
  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"
  _log_timing "options"

  # SKIP FUNCTIONS - this is the key difference for performance

  # Aliases (regular, global, and suffix)
  {
    builtin alias -L 2>/dev/null || true
    builtin alias -gL 2>/dev/null || true
    builtin alias -sL 2>/dev/null || true
  }
  _log_timing "aliases"

  # Done
  _emit "# end of zsh state dump (light)"
  _log_timing "finalize"
}
`;
    var kr = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, xr = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Er() {
      const e2 = process.env.SHELL;
      return e2?.includes("zsh") ? e2 : u("zsh", []).cmd;
    }
    class Ir {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new Ir(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = kr(n2, (0, m.VI)(e2.withName("ZshLightState.execute")), false), o2 = r2?.pipeStdin ?? false, i2 = (0, f.Jt)(), a2 = r2?.workingDirectory ?? this.cwd, c2 = { ...process.env, ...ut, ...r2?.env };
          let l2 = 'builtin eval "$1"';
          o2 || (l2 += " < /dev/null");
          const u2 = Kt(c2), d2 = ft(), p2 = ["-c", (d2 ? ht : "") + `builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin\${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; ${Sr} builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + q + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u2}${l2}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...d2 ? [] : [t2]], h2 = r2?.sandboxWorkspaceRoot ?? a2, g2 = (await Lt(h2, r2?.sandboxPolicy)).policy, y2 = "insecure_none" !== g2.type ? { ...g2, sandboxWorkspaceRoot: h2 } : g2, w2 = pt(Er(), p2, { env: c2, stdio: [o2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", d2 ? "pipe" : "ignore"], cwd: a2, detached: true }, y2, r2?.signal);
          let v2 = "";
          w2.on("spawn", async () => {
            try {
              await i2.write({ type: "stdin_ready", stdin: w2.stdin ?? void 0, pid: w2.pid });
            } catch (e3) {
            }
          });
          const _2 = It({ stdout: w2.stdout, stderr: w2.stderr, writable: i2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          w2.on("error", (e3) => {
            i2.throw(e3);
          });
          let b2 = null, S2 = null, k2 = false;
          const x2 = async (e3) => {
            if (!k2) {
              if (k2 = true, S2 && (clearTimeout(S2), S2 = null), (0, m.HF)(s2.ctx, "exit"), e3) try {
                await _2.waitForOutput();
              } catch (e4) {
                return void i2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              if (await _2.flush(), !r2?.signal?.aborted) {
                const e4 = `${br}
`;
                if (v2.startsWith(e4)) {
                  const t3 = v2.slice(e4.length), { cwd: r3, rest: n3 } = vt(t3);
                  r3?.startsWith("/") && (this.state = n3, this.cwd = r3);
                }
              }
              if (y2.captureDenies) try {
                const e4 = await ct(w2);
                e4 && e4.length > 0 && await i2.write({ type: "sandbox_denies", events: e4 });
              } catch {
              }
              try {
                await i2.write({ type: "exit", code: b2, data: "", aborted: r2?.signal?.aborted ?? false }), i2.close();
              } catch (e4) {
                i2.close();
              }
            }
          };
          w2.on("exit", (e3, t3) => {
            b2 = e3;
            const n3 = r2?.closeTimeout ?? 5e3;
            n3 > 0 && (S2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n3}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), x2(false);
            }, n3));
          }), w2.on("close", async () => {
            await x2(true);
          });
          const E2 = w2.stdio[3], I2 = w2.stdio[4];
          d2 && gt(w2, t2), yt(E2, this.state), wt(I2, (e3) => {
            v2 += e3;
          }), yield* i2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          xr(n2);
        }
      }
    }
    var Tr, Cr, Pr = r(643);
    !(function(e2) {
      e2[e2.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e2[e2.EventLoopUtilization = 0.7] = "EventLoopUtilization";
    })(Tr || (Tr = {})), (function(e2) {
      e2[e2.SampleIntervalMs = 250] = "SampleIntervalMs", e2[e2.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
    })(Cr || (Cr = {}));
    const Ar = { eventLoopDelayP95Ms: 0, eventLoopUtilization: 0 };
    let Rr, Mr = 0;
    class Jr {
      eventLoopMonitor;
      sampleTimer;
      lastEventLoopUtilization = Pr.performance.eventLoopUtilization();
      latestSnapshot = Ar;
      constructor() {
        this.eventLoopMonitor = (0, Pr.monitorEventLoopDelay)({ resolution: Cr.EventLoopResolutionMs }), this.lastEventLoopUtilization = Pr.performance.eventLoopUtilization(), this.eventLoopMonitor.enable(), this.sample(), this.sampleTimer = setInterval(() => {
          this.sample();
        }, Cr.SampleIntervalMs), this.sampleTimer.unref?.();
      }
      dispose() {
        void 0 !== this.sampleTimer && (clearInterval(this.sampleTimer), this.sampleTimer = void 0, this.eventLoopMonitor.disable(), this.latestSnapshot = Ar, this.lastEventLoopUtilization = Pr.performance.eventLoopUtilization());
      }
      isUnderPressure() {
        return this.latestSnapshot.eventLoopDelayP95Ms >= Tr.EventLoopDelayP95Ms || this.latestSnapshot.eventLoopUtilization >= Tr.EventLoopUtilization;
      }
      formatSuppressionSection() {
        const e2 = this.latestSnapshot, t2 = [`event loop delay p95 ${e2.eventLoopDelayP95Ms.toFixed(1)}ms (threshold ${Tr.EventLoopDelayP95Ms}ms)`, `event loop utilization ${(100 * e2.eventLoopUtilization).toFixed(1)}% (threshold ${(100 * Tr.EventLoopUtilization).toFixed(1)}%)`].join(", "), r2 = this.getPressureTriggerReasons(e2);
        return `event loop pressure gate enabled; ${r2.length > 0 ? `event loop under pressure (${r2.join(", ")})` : "event loop not under pressure"}; event loop metrics: ${t2}`;
      }
      getPressureTriggerReasons(e2) {
        const t2 = [];
        return e2.eventLoopDelayP95Ms >= Tr.EventLoopDelayP95Ms && t2.push(`event loop delay p95 ${e2.eventLoopDelayP95Ms.toFixed(1)}ms >= ${Tr.EventLoopDelayP95Ms}ms`), e2.eventLoopUtilization >= Tr.EventLoopUtilization && t2.push(`event loop utilization ${(100 * e2.eventLoopUtilization).toFixed(1)}% >= ${(100 * Tr.EventLoopUtilization).toFixed(1)}%`), t2;
      }
      sample() {
        this.latestSnapshot = { eventLoopDelayP95Ms: this.computeEventLoopDelayP95Ms(), eventLoopUtilization: this.computeEventLoopUtilization() };
      }
      computeEventLoopDelayP95Ms() {
        const e2 = this.eventLoopMonitor.percentile(95);
        if (this.eventLoopMonitor.reset(), !Number.isFinite(e2)) return 0;
        const t2 = e2 / 1e6;
        return Math.max(0, t2 - Cr.EventLoopResolutionMs);
      }
      computeEventLoopUtilization() {
        const e2 = Pr.performance.eventLoopUtilization(), t2 = e2.active - this.lastEventLoopUtilization.active, r2 = t2 + (e2.idle - this.lastEventLoopUtilization.idle);
        return this.lastEventLoopUtilization = e2, r2 <= 0 || !Number.isFinite(r2) ? 0 : t2 / r2;
      }
    }
    const Or = { windowMs: 6e4, minimumThresholdCharsPerSecond: 65536, thresholdCharsPerSecondWithoutPressure: 2097152, minChars: 262144 }, Br = 1e3, Dr = "\n[This shell is producing too much output to stream. The command will still run.]\n";
    class qr {
      bucketChars;
      bucketStarts;
      totalChars = 0;
      outputSuppressed = false;
      noticeSent = false;
      windowMs;
      minimumThresholdCharsPerSecond;
      thresholdCharsPerSecondWithoutPressure;
      minChars;
      eventLoopPressureTracker;
      disposed = false;
      constructor(e2) {
        this.windowMs = e2?.windowMs ?? Or.windowMs, this.minimumThresholdCharsPerSecond = e2?.minimumThresholdCharsPerSecond ?? Or.minimumThresholdCharsPerSecond, this.thresholdCharsPerSecondWithoutPressure = e2?.thresholdCharsPerSecondWithoutPressure ?? Or.thresholdCharsPerSecondWithoutPressure, this.minChars = e2?.minChars ?? Or.minChars;
        const t2 = Math.ceil(this.windowMs / Br) + 1;
        this.bucketChars = new Uint32Array(t2), this.bucketStarts = new Float64Array(t2);
      }
      record(e2, t2 = Date.now()) {
        if (this.disposed) return { shouldForward: !this.outputSuppressed, noticeJustTriggered: false, charsPerSecond: 0, thresholdCharsPerSecond: this.minimumThresholdCharsPerSecond };
        this.recordChars(e2, t2);
        const r2 = this.getEventLoopPressureTracker().isUnderPressure(), n2 = this.getCharsInWindow(t2), s2 = this.getAverageCharsPerSecond(t2), o2 = this.getPeakBucketCharsPerSecond(t2), i2 = Math.max(s2, o2), a2 = n2 >= this.minChars, c2 = a2 && i2 >= this.thresholdCharsPerSecondWithoutPressure, l2 = a2 && r2 && s2 >= this.minimumThresholdCharsPerSecond, u2 = c2 ? this.thresholdCharsPerSecondWithoutPressure : r2 ? this.minimumThresholdCharsPerSecond : this.thresholdCharsPerSecondWithoutPressure, d2 = c2 ? i2 : s2;
        this.outputSuppressed || !c2 && !l2 || (this.outputSuppressed = true);
        const p2 = this.outputSuppressed && !this.noticeSent;
        return p2 && (this.noticeSent = true, console.warn("[OutputSuppressionController] Suppressing shell output:", (function(e3) {
          const t3 = `volume thresholds met (${[`output volume ${e3.charsInWindow} chars in window >= min ${e3.minChars}`, `output rate ${Math.round(e3.charsPerSecond)} chars/s >= threshold ${e3.triggeredThresholdCharsPerSecond} chars/s`].join("; ")})`, r3 = e3.suppressWithoutPressure ? "event loop pressure gate bypassed due to extreme output rate" : e3.eventLoopPressureTracker.formatSuppressionSection();
          return `${t3}; ${r3}`;
        })({ charsInWindow: n2, charsPerSecond: d2, minChars: this.minChars, triggeredThresholdCharsPerSecond: u2, suppressWithoutPressure: c2, eventLoopPressureTracker: this.getEventLoopPressureTracker() }))), { shouldForward: !this.outputSuppressed, noticeJustTriggered: p2, charsPerSecond: d2, thresholdCharsPerSecond: u2 };
      }
      reset() {
        this.disposed || (this.bucketChars.fill(0), this.bucketStarts.fill(0), this.totalChars = 0, this.outputSuppressed = false, this.noticeSent = false);
      }
      dispose() {
        this.disposed || (this.disposed = true, this.eventLoopPressureTracker?.dispose(), this.eventLoopPressureTracker = void 0);
      }
      getEventLoopPressureTracker() {
        return void 0 === this.eventLoopPressureTracker && (this.eventLoopPressureTracker = (function() {
          Mr++, void 0 === Rr && (Rr = new Jr());
          const e2 = Rr;
          let t2 = false;
          return { isUnderPressure: () => e2.isUnderPressure(), formatSuppressionSection: () => e2.formatSuppressionSection(), dispose: () => {
            t2 || (t2 = true, Mr--, 0 === Mr && void 0 !== Rr && (Rr.dispose(), Rr = void 0));
          } };
        })()), this.eventLoopPressureTracker;
      }
      recordChars(e2, t2) {
        if (this.prune(t2), e2 <= 0) return;
        const r2 = Math.floor(t2 / Br) * Br, n2 = Math.floor(r2 / Br) % this.bucketChars.length;
        this.bucketStarts[n2] !== r2 && (this.totalChars -= this.bucketChars[n2], this.bucketStarts[n2] = r2, this.bucketChars[n2] = 0), this.bucketChars[n2] += e2, this.totalChars += e2;
      }
      getAverageCharsPerSecond(e2) {
        if (this.prune(e2), 0 === this.totalChars) return 0;
        const t2 = e2 - this.windowMs;
        let r2 = e2;
        for (let e3 = 0; e3 < this.bucketStarts.length; e3++) this.bucketChars[e3] > 0 && this.bucketStarts[e3] >= t2 && (r2 = Math.min(r2, this.bucketStarts[e3]));
        const n2 = Math.max(Br, Math.min(this.windowMs, e2 - r2 + Br));
        return this.totalChars / (n2 / 1e3);
      }
      getPeakBucketCharsPerSecond(e2) {
        this.prune(e2);
        const t2 = e2 - this.windowMs;
        let r2 = 0;
        for (let e3 = 0; e3 < this.bucketChars.length; e3++) this.bucketStarts[e3] >= t2 && (r2 = Math.max(r2, this.bucketChars[e3]));
        return r2 / 1;
      }
      getCharsInWindow(e2) {
        return this.prune(e2), this.totalChars;
      }
      prune(e2) {
        const t2 = e2 - this.windowMs;
        for (let e3 = 0; e3 < this.bucketStarts.length; e3++) 0 !== this.bucketStarts[e3] && this.bucketStarts[e3] < t2 && (this.totalChars -= this.bucketChars[e3], this.bucketStarts[e3] = 0, this.bucketChars[e3] = 0);
      }
    }
    var Nr = r(68388);
    function Fr(e2) {
      if (!e2) return;
      const t2 = { version: 1 };
      if ("allow" !== e2.default && "deny" !== e2.default || (t2.default = e2.default), Array.isArray(e2.allow) && e2.allow.length > 0 && (t2.allow = e2.allow.filter((e3) => "string" == typeof e3)), Array.isArray(e2.deny) && e2.deny.length > 0 && (t2.deny = e2.deny.filter((e3) => "string" == typeof e3)), e2.logging) {
        const r2 = {};
        "string" == typeof e2.logging.decisionLogPath && (r2.decisionLogPath = e2.logging.decisionLogPath), "jsonl" === e2.logging.logFormat && (r2.logFormat = "jsonl"), Object.keys(r2).length > 0 && (t2.logging = r2);
      }
      return t2;
    }
    function Ur(e2) {
      const t2 = e2.type ?? "workspace_readwrite", r2 = { debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, enableSharedBuildCache: e2.enableSharedBuildCache };
      if ("insecure_none" === t2) {
        return { type: "insecure_none", ...r2 };
      }
      let n2;
      if (Array.isArray(e2.additionalReadonlyPaths)) {
        const t3 = e2.additionalReadonlyPaths;
        n2 = t3.length > 0 ? t3 : void 0;
      }
      const s2 = { ...r2, networkAccess: e2.networkAccess, networkPolicy: Fr(e2.networkPolicy), networkPolicyStrict: e2.networkPolicyStrict, additionalReadonlyPaths: n2, readBoundary: e2.readBoundary, additionalReadPaths: Array.isArray(e2.additionalReadPaths) ? e2.additionalReadPaths : void 0, disableTmpWrite: e2.disableTmpWrite };
      if ("workspace_readonly" === t2) {
        return { type: "workspace_readonly", ...s2 };
      }
      return { type: "workspace_readwrite", ...s2, additionalReadwritePaths: e2.additionalReadwritePaths };
    }
    async function Lr(e2, t2) {
      try {
        const r2 = await (0, d.readFile)(e2, "utf-8"), n2 = JSON.parse(r2), s2 = (function(e3) {
          if ("object" != typeof e3 || null === e3) return "Expected an object";
          const t3 = e3;
          if (void 0 !== t3.type) {
            const e4 = ["insecure_none", "workspace_readwrite", "workspace_readonly"];
            if ("string" != typeof t3.type || !e4.includes(t3.type)) return `Invalid type: expected one of ${e4.join(", ")}`;
          }
          const r3 = ["networkAccess", "networkPolicyStrict", "disableTmpWrite", "enableSharedBuildCache", "captureDenies"];
          for (const e4 of r3) if (void 0 !== t3[e4] && "boolean" != typeof t3[e4]) return `Invalid ${e4}: expected boolean`;
          const n3 = ["debugOutputDir"];
          for (const e4 of n3) if (void 0 !== t3[e4] && "string" != typeof t3[e4]) return `Invalid ${e4}: expected string`;
          const s3 = ["additionalReadwritePaths", "additionalReadonlyPaths", "additionalReadPaths"];
          for (const e4 of s3) if (void 0 !== t3[e4]) {
            if (!Array.isArray(t3[e4])) return `Invalid ${e4}: expected array`;
            if (!t3[e4].every((e5) => "string" == typeof e5)) return `Invalid ${e4}: expected array of strings`;
          }
          if (void 0 !== t3.readBoundary && "system" !== t3.readBoundary && "workspace" !== t3.readBoundary) return 'Invalid readBoundary: expected "system" or "workspace"';
          if (void 0 !== t3.networkPolicy) {
            if ("object" != typeof t3.networkPolicy || null === t3.networkPolicy) return "Invalid networkPolicy: expected object";
            const e4 = t3.networkPolicy;
            if (void 0 !== e4.default && "allow" !== e4.default && "deny" !== e4.default) return 'Invalid networkPolicy.default: expected "allow" or "deny"';
            if (void 0 !== e4.allow && !Array.isArray(e4.allow)) return "Invalid networkPolicy.allow: expected array";
            if (void 0 !== e4.deny && !Array.isArray(e4.deny)) return "Invalid networkPolicy.deny: expected array";
          }
        })(n2);
        if (s2) return { success: false, error: `Invalid sandbox policy: ${s2}` };
        let o2 = Ur(n2);
        return t2 && (o2 = jr(o2, t2)), { success: true, policy: o2 };
      } catch (e3) {
        return e3 instanceof Error ? "code" in e3 && "ENOENT" === e3.code ? { success: false, error: "File not found" } : e3 instanceof SyntaxError ? { success: false, error: `Invalid JSON: ${e3.message}` } : { success: false, error: e3.message } : { success: false, error: "Unknown error" };
      }
    }
    async function $r(e2, t2) {
      const r2 = await Lr(e2, t2);
      if (r2.success) return r2.policy;
    }
    function jr(e2, t2) {
      if ("insecure_none" === e2.type) return e2;
      const r2 = e2.additionalReadonlyPaths?.map((e3) => (0, Nr.o1)(e3, t2)), n2 = e2.additionalReadPaths?.map((e3) => (0, Nr.o1)(e3, t2));
      if ("workspace_readonly" === e2.type) return { ...e2, additionalReadonlyPaths: r2, additionalReadPaths: n2 };
      const s2 = e2.additionalReadwritePaths?.map((e3) => (0, Nr.o1)(e3, t2));
      return { ...e2, additionalReadonlyPaths: r2, additionalReadPaths: n2, additionalReadwritePaths: s2 };
    }
    function Gr(e2) {
      switch (e2) {
        case lt.Zsh:
        case lt.ZshLight:
          return u("zsh", []).cmd;
        case lt.Bash:
          return u("bash", []).cmd;
        case lt.PowerShell:
          return ar();
        default:
          return process.env.SHELL || "/bin/sh";
      }
    }
    function zr(e2) {
      try {
        return u(e2, []).cmd !== e2;
      } catch (e3) {
        return false;
      }
    }
    function Wr() {
      if ("win32" !== process.platform) return;
      if (!process.env.MSYSTEM) return;
      const e2 = process.env.EXEPATH;
      if (e2) return (function(e3) {
        const t3 = e3.replace(/[\\/]+$/, ""), r2 = n.win32.basename(t3).toLowerCase();
        return "bash.exe" === r2 ? t3 : "bin" === r2 ? n.win32.join(t3, "bash.exe") : n.win32.join(t3, "bin", "bash.exe");
      })(e2);
      const t2 = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
      for (const e3 of t2) try {
        if (u(e3, []).cmd === e3) return e3;
      } catch {
      }
      return "C:\\Program Files\\Git\\bin\\bash.exe";
    }
    function Hr(e2) {
      if (e2 === lt.ZshLight) return lt.ZshLight;
      const t2 = e2 || process.env.SHELL || "", r2 = "win32" === process.platform, n2 = r2 && !e2 ? Wr() : void 0, s2 = void 0 !== n2 || /git.*bash\.exe$/i.test(t2) || /program.*git.*bin.*bash\.exe$/i.test(t2), o2 = !r2 || s2;
      return t2.includes("zsh") ? lt.Zsh : t2.includes("bash") && o2 ? lt.Bash : t2.includes("pwsh") || t2.includes("powershell") ? lt.PowerShell : n2 ? lt.Bash : r2 && (zr("pwsh") || zr("powershell")) ? lt.PowerShell : zr("zsh") ? lt.Zsh : zr("bash") && o2 ? lt.Bash : zr("pwsh") || zr("powershell") ? lt.PowerShell : lt.Naive;
    }
    function Kr(e2) {
      let t2 = e2;
      if (!e2?.userTerminalHint) {
        const r2 = Wr();
        r2 && (t2 = { ...e2, userTerminalHint: r2 });
      }
      switch (Hr(t2?.userTerminalHint ?? "")) {
        case lt.Zsh:
          return new nr(() => (async function(e3) {
            const t3 = { ...process.env, ...ut, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-o", "extendedglob", "-ilc", `${gr} builtin printf '${r2}\\n'; dump_zsh_state`], s2 = pt(vr(), n2, { env: t3, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e3?.signal);
            let o2 = "";
            s2.stdout?.on("data", (e4) => {
              o2 += e4.toString();
            }), s2.on("error", (e4) => {
              console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              s2.on("close", () => {
                e4(void 0);
              });
            });
            const i2 = _t(o2, r2), a2 = `${hr}
`, c2 = `${fr}
`;
            let l2;
            i2.startsWith(a2) && i2.endsWith(c2) ? (l2 = i2.slice(a2.length), l2 = l2.slice(0, -(fr.length + 1))) : l2 = `${process.cwd()}
`;
            const { cwd: u2, rest: d2 } = vt(l2);
            return new _r(u2, d2);
          })(t2));
        case lt.Bash:
          return new nr(() => (async function(e3) {
            const t3 = { ...process.env, ...ut, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-O", "extglob", "-ilc", kt + ` builtin printf '${r2}\\n'; dump_bash_state`], s2 = Xt(e3?.userTerminalHint);
            if (!s2) throw new Error("Can't find Bash");
            const o2 = pt(s2, n2, { env: t3, detached: true, stdio: ["ignore", "pipe", "pipe"] }, { type: "insecure_none" }, e3?.signal);
            let i2 = "";
            o2.stdout?.on("data", (e4) => {
              i2 += e4.toString();
            }), o2.on("error", (e4) => {
              console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              o2.on("close", () => {
                e4(void 0);
              });
            });
            const a2 = _t(i2, r2), c2 = `${bt}
`, l2 = `${St}
`;
            let u2;
            a2.startsWith(c2) && a2.endsWith(l2) ? (u2 = a2.slice(c2.length), u2 = u2.slice(0, -(St.length + 1))) : u2 = `${process.cwd()}
`;
            const { cwd: d2, rest: p2 } = vt(u2), m2 = "win32" === process.platform, h2 = "win32" === process.platform ? process.cwd() : d2;
            return new er(h2, p2, e3?.userTerminalHint, m2);
          })(t2));
        case lt.PowerShell:
          return new nr(() => (async function() {
            return new cr(process.cwd(), "");
          })());
        case lt.ZshLight:
          return new nr(() => (async function(e3) {
            const t3 = { ...process.env, ...ut, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-o", "extendedglob", "-ilc", `${Sr} builtin printf '${r2}\\n'; dump_zsh_state_light`], s2 = pt(Er(), n2, { env: t3, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e3?.signal);
            let o2 = "";
            s2.stdout?.on("data", (e4) => {
              o2 += e4.toString();
            }), s2.on("error", (e4) => {
              console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              s2.on("close", () => {
                e4(void 0);
              });
            });
            const i2 = _t(o2, r2), a2 = `${br}
`, c2 = i2.startsWith(a2) ? i2.slice(a2.length) : `${process.cwd()}
`, { cwd: l2, rest: u2 } = vt(c2);
            return new Ir(l2, u2);
          })(t2));
        default:
          return mr(t2);
      }
    }
    const Vr = { perUser: { type: "insecure_none" } };
  }