// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6702 range:492689..571537
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6702: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { SandboxUnsupportedError: () => Se, J: () => c, St: () => Ee, getLastSandboxFailureReason: () => be, K3: () => Te, resolveSandboxPolicyForWorkspace: () => Gt, spawnInSandbox: () => xe });
    var n2 = r2(6760), o2 = r2(1455), s2 = r2(8161), i2 = r2(1421);
    r2(7075);
    let a2;
    function c(e3) {
      if (!e3) throw new Error("configureRipgrepPath: path must not be empty");
      a2 = e3;
    }
    function u(e3) {
      const t3 = Object.keys(e3).filter((e4) => "path" === e4.toLowerCase());
      if (0 !== t3.length) return "win32" === process.platform ? t3.find((e4) => "Path" === e4) ?? t3[0] : t3.find((e4) => "PATH" === e4) ?? t3[0];
    }
    function l(e3, t3) {
      const r3 = (0, n2.dirname)(t3);
      if (!r3 || "." === r3) return e3;
      const o3 = (function(e4) {
        const t4 = u(e4);
        return void 0 !== t4 ? e4[t4] ?? "" : "";
      })(e3).split(n2.delimiter).filter(Boolean);
      return (function(e4, t4) {
        const r4 = u(e4) ?? ("win32" === process.platform ? "Path" : "PATH"), n3 = { ...e4 };
        for (const e5 of Object.keys(n3)) e5 !== r4 && "path" === e5.toLowerCase() && delete n3[e5];
        return n3[r4] = t4, n3;
      })(e3, [r3, ...o3.filter((e4) => e4 !== r3)].join(n2.delimiter));
    }
    function d() {
      if (!a2) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
      return a2;
    }
    var p = r2(3024), f = r2(3015);
    function h(e3) {
      const t3 = e3 || process.env, { ELECTRON_RUN_AS_NODE: r3, ...n3 } = t3;
      return n3;
    }
    const m = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];
    function g(e3) {
      const t3 = { ...e3 };
      for (const e4 of m) delete t3[e4];
      return t3;
    }
    var y = r2(7598);
    function _(e3) {
      return e3.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    const v = "cursor-sandbox-cache";
    let w;
    function b() {
      return w || (w = (0, y.randomBytes)(16).toString("hex")), w;
    }
    function S(e3, t3) {
      const r3 = (0, p.lstatSync)(e3);
      return r3.isDirectory() && r3.uid === t3 && !(18 & r3.mode);
    }
    function k(e3) {
      try {
        (0, p.mkdirSync)(e3, { mode: 448 });
      } catch (e4) {
        if ("EEXIST" !== e4.code) throw e4;
      }
    }
    function E(e3, { create: t3 }) {
      const r3 = process.getuid?.();
      if (void 0 === r3) return;
      const o3 = (0, n2.join)((0, s2.tmpdir)(), `cursor-sandbox-${_((0, n2.resolve)(e3))}`);
      try {
        for (const e4 of [o3, (0, n2.join)(o3, "tmp")]) if (t3 && k(e4), !S(e4, r3)) return;
        return o3;
      } catch {
        return;
      }
    }
    function x(e3 = (0, n2.join)((0, s2.tmpdir)(), v, b())) {
      return { NPM_CONFIG_CACHE: (0, n2.join)(e3, "npm"), PNPM_STORE_PATH: (0, n2.join)(e3, "pnpm-store"), GOCACHE: (0, n2.join)(e3, "go-build"), GOMODCACHE: (0, n2.join)(e3, "go-mod"), CARGO_TARGET_DIR: (0, n2.join)(e3, "cargo-target"), PIP_CACHE_DIR: (0, n2.join)(e3, "pip"), UV_CACHE_DIR: (0, n2.join)(e3, "uv"), BUN_INSTALL_CACHE_DIR: (0, n2.join)(e3, "bun"), YARN_CACHE_FOLDER: (0, n2.join)(e3, "yarn"), npm_config_devdir: (0, n2.join)(e3, "node-gyp"), PLAYWRIGHT_BROWSERS_PATH: (0, n2.join)(e3, "playwright"), PUPPETEER_CACHE_DIR: (0, n2.join)(e3, "puppeteer"), TURBO_CACHE_DIR: (0, n2.join)(e3, "turbo"), GRADLE_USER_HOME: (0, n2.join)(e3, "gradle"), CONDA_PKGS_DIRS: (0, n2.join)(e3, "conda"), POETRY_CACHE_DIR: (0, n2.join)(e3, "poetry"), GEM_SPEC_CACHE: (0, n2.join)(e3, "gem-specs"), BUNDLE_PATH: (0, n2.join)(e3, "bundle"), COMPOSER_HOME: (0, n2.join)(e3, "composer"), HOMEBREW_CACHE: (0, n2.join)(e3, "homebrew"), CYPRESS_CACHE_FOLDER: (0, n2.join)(e3, "cypress"), NX_CACHE_DIRECTORY: (0, n2.join)(e3, "nx"), NUGET_PACKAGES: (0, n2.join)(e3, "nuget"), CCACHE_DIR: (0, n2.join)(e3, "ccache"), CP_HOME_DIR: (0, n2.join)(e3, "cocoapods") };
    }
    var T = r2(7949), O = r2(3002), P = r2(3228);
    r2(6613);
    const I = [".local/bin", ".local/share/mise", ".local/share/pnpm", ".nvm", ".volta", ".asdf", ".pyenv", ".rbenv", ".rustup", ".cargo/bin", ".cargo/registry", ".cargo/git"], C = ["bin", "sbin", "lib", "opt", "Cellar", "share", "Frameworks", "etc/gitconfig", "etc/openssl@3/cert.pem", "etc/openssl@3/openssl.cnf", "etc/ca-certificates"], A = (e3, t3) => t3.flatMap((t4) => C.map((r3) => ({ platform: e3, scope: "global", path: `${t4}/${r3}` }))), $ = { linux: [".cache/node", ".cache/yarn"], darwin: [".cache/node", "Library/Caches/Yarn"] }, R = (e3) => [...I, ...$[e3]].map((t3) => ({ platform: e3, scope: "home-dir", path: t3 })), N = [{ platform: "linux", scope: "global", path: "/bin" }, { platform: "linux", scope: "global", path: "/sbin" }, { platform: "linux", scope: "global", path: "/usr/bin" }, { platform: "linux", scope: "global", path: "/usr/sbin" }, { platform: "linux", scope: "global", path: "/lib" }, { platform: "linux", scope: "global", path: "/lib64" }, { platform: "linux", scope: "global", path: "/usr/lib" }, { platform: "linux", scope: "global", path: "/usr/lib64" }, { platform: "linux", scope: "global", path: "/usr/libexec" }, { platform: "linux", scope: "global", path: "/usr/share" }, { platform: "linux", scope: "global", path: "/etc/ld.so.cache" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf.d" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs" }, { platform: "linux", scope: "global", path: "/etc/ssl/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/ssl/cert.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/ca-bundle.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs/ca-certificates.crt" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/certs" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/pki/ca-trust/extracted" }, { platform: "linux", scope: "global", path: "/etc/resolv.conf" }, { platform: "linux", scope: "global", path: "/etc/hosts" }, { platform: "linux", scope: "global", path: "/etc/nsswitch.conf" }, { platform: "linux", scope: "global", path: "/etc/gai.conf" }, { platform: "linux", scope: "global", path: "/etc/alternatives" }, { platform: "linux", scope: "global", path: "/etc/mime.types" }, { platform: "linux", scope: "global", path: "/etc/profile" }, { platform: "linux", scope: "global", path: "/etc/bash.bashrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshenv" }, { platform: "linux", scope: "global", path: "/etc/zsh/zprofile" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zlogin" }, { platform: "linux", scope: "global", path: "/etc/gitconfig" }, { platform: "linux", scope: "home", path: ".bashrc" }, { platform: "linux", scope: "home", path: ".bash_profile" }, { platform: "linux", scope: "home", path: ".profile" }, { platform: "linux", scope: "home", path: ".zshenv" }, { platform: "linux", scope: "home", path: ".zprofile" }, { platform: "linux", scope: "home", path: ".zshrc" }, { platform: "linux", scope: "home", path: ".zlogin" }, { platform: "linux", scope: "home", path: ".gitconfig" }, { platform: "linux", scope: "home", path: ".ssh/known_hosts" }, { platform: "linux", scope: "home", path: ".config/mise/config.toml" }, { platform: "linux", scope: "home-dir", path: ".cache/dotslash" }, ...R("linux"), ...A("linux", ["/usr/local", "/home/linuxbrew/.linuxbrew"]), { platform: "linux", scope: "global", path: "/usr/local/go" }, { platform: "linux", scope: "global", path: "/nix/store" }, { platform: "linux", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "linux", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/bin" }, { platform: "darwin", scope: "global", path: "/usr/bin" }, { platform: "darwin", scope: "global", path: "/usr/lib" }, { platform: "darwin", scope: "global", path: "/usr/libexec" }, { platform: "darwin", scope: "global", path: "/usr/share" }, { platform: "darwin", scope: "global", path: "/System/Library" }, { platform: "darwin", scope: "global", path: "/System/Cryptexes" }, { platform: "darwin", scope: "global", path: "/Library/Apple" }, { platform: "darwin", scope: "global", path: "/Library/Developer/CommandLineTools" }, { platform: "darwin", scope: "global", path: "/Applications/Xcode.app" }, { platform: "darwin", scope: "global", path: "/Library/Preferences/com.apple.dt.Xcode.plist" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/cert.pem" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/certs" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/openssl.cnf" }, { platform: "darwin", scope: "global", path: "/private/etc/hosts" }, { platform: "darwin", scope: "global", path: "/private/etc/resolv.conf" }, { platform: "darwin", scope: "global", path: "/private/etc/apache2/mime.types" }, { platform: "darwin", scope: "global", path: "/etc/profile" }, { platform: "darwin", scope: "global", path: "/etc/bashrc" }, { platform: "darwin", scope: "global", path: "/etc/zshenv" }, { platform: "darwin", scope: "global", path: "/etc/zprofile" }, { platform: "darwin", scope: "global", path: "/etc/zshrc" }, { platform: "darwin", scope: "global", path: "/etc/zlogin" }, { platform: "darwin", scope: "global", path: "/etc/gitconfig" }, { platform: "darwin", scope: "home", path: ".bashrc" }, { platform: "darwin", scope: "home", path: ".bash_profile" }, { platform: "darwin", scope: "home", path: ".profile" }, { platform: "darwin", scope: "home", path: ".zshenv" }, { platform: "darwin", scope: "home", path: ".zprofile" }, { platform: "darwin", scope: "home", path: ".zshrc" }, { platform: "darwin", scope: "home", path: ".zlogin" }, { platform: "darwin", scope: "home", path: ".gitconfig" }, { platform: "darwin", scope: "home", path: ".ssh/known_hosts" }, { platform: "darwin", scope: "home", path: "Library/Preferences/.GlobalPreferences.plist" }, { platform: "darwin", scope: "home", path: ".config/mise/config.toml" }, { platform: "darwin", scope: "home-dir", path: "Library/Python" }, { platform: "darwin", scope: "home-dir", path: "Library/Caches/dotslash" }, ...R("darwin"), ...A("darwin", ["/opt/homebrew", "/usr/local"]), { platform: "darwin", scope: "global", path: "/nix/store" }, { platform: "darwin", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "darwin", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/dev/null" }, { platform: "darwin", scope: "global", path: "/dev/zero" }, { platform: "darwin", scope: "global", path: "/dev/random" }, { platform: "darwin", scope: "global", path: "/dev/urandom" }];
    const M = [{ type: "workspace", pattern: "**/.cursor/*.json" }, { type: "workspace", pattern: "**/.cursor/**/*.json" }, { type: "workspace", pattern: "**/.cursor/.workspace-trusted" }, { type: "workspace", pattern: "!**/.cursor/rules" }, { type: "workspace", pattern: "!**/.cursor/rules/**" }, { type: "workspace", pattern: "!**/.cursor/commands" }, { type: "workspace", pattern: "!**/.cursor/commands/**" }, { type: "workspace", pattern: "!**/.cursor/worktrees" }, { type: "workspace", pattern: "!**/.cursor/worktrees/**" }, { type: "workspace", pattern: "!**/.cursor/skills" }, { type: "workspace", pattern: "!**/.cursor/skills/**" }, { type: "workspace", pattern: "!**/.cursor/agents" }, { type: "workspace", pattern: "!**/.cursor/agents/**" }, { type: "workspace", pattern: "**/.claude/*.json" }, { type: "workspace", pattern: "**/.claude/**/*.json" }, { type: "workspace", pattern: "**/.vscode/**" }, { type: "workspace", pattern: "**/.idea/**" }, { type: "workspace", pattern: "**/.venv/" }, { type: "workspace", pattern: "**/venv/" }, { type: "workspace", pattern: "**/*.code-workspace" }, { type: "workspace", pattern: "**/.cursorignore" }, { type: "workspace", pattern: "**/.workspace-trusted" }, { type: "workspace", pattern: "**/.cursor/**/cli.json" }, { type: "workspace", pattern: "**/.cursor/**/cli-config.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp-approvals.json" }, { type: "workspace", pattern: "**/.cursor/**/permissions.json" }, { type: "git", pattern: "**/.git/hooks/**" }, { type: "git", pattern: "**/.git/config" }, { type: "git", pattern: "**/.git/config.worktree" }, { type: "git", pattern: "**/.git/info/attributes" }, { type: "git", pattern: "**/.git/commondir" }, { type: "git", pattern: "**/.git/worktrees/*/commondir" }, { type: "worktree", pattern: ".git" }, { type: "absolute", pattern: "/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/ca-bundle.pem" }, { type: "absolute", pattern: "/private/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/certs/ca-certificates.crt" }, { type: "absolute", pattern: "/etc/pki/tls/certs/ca-bundle.crt" }, { type: "absolute", pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem" }, { type: "home", pattern: ".cursor/sandbox-policies" }];
    M.filter((e3) => "git" === e3.type).map((e3) => e3.pattern), M.filter((e3) => "workspace" === e3.type && e3.pattern.startsWith("!") && !e3.pattern.endsWith("/**")).map((e3) => e3.pattern.replace(/^!(\*\*\/)?/, ""));
    function J(e3) {
      const t3 = M.filter((e4) => "workspace" === e4.type).map((e4) => e4.pattern);
      return { [e3]: t3 };
    }
    function j(e3) {
      const t3 = M.filter((e4) => "worktree" === e4.type).map((e4) => e4.pattern);
      return { [e3]: t3 };
    }
    const D = [];
    function F(e3) {
      const t3 = (function() {
        if (0 !== D.length) return { version: 1, deny: [...D] };
      })(), r3 = s2.homedir(), o3 = [];
      for (const e4 of M) switch (e4.type) {
        case "workspace":
        case "git":
        case "worktree":
          break;
        case "absolute":
          o3.push(e4.pattern);
          break;
        case "home":
          r3.length > 0 && o3.push((0, n2.join)(r3, e4.pattern));
          break;
        default: {
          const t4 = e4.type;
          throw new Error(`Unknown entry type: ${t4}`);
        }
      }
      return { type: "workspace_readwrite", additionalReadonlyPaths: o3, writeProtectionMapping: J(e3), ...t3 && { networkPolicy: t3 }, networkPolicyStrict: true };
    }
    /* @__PURE__ */ new Map();
    "win32" === process.platform || process.platform;
    const q = /* @__PURE__ */ new WeakMap();
    function z(e3) {
      return void 0 !== e3 && ("allow" === e3.default || void 0 !== e3.allow && e3.allow.length > 0);
    }
    const U = "sandbox-policies", B = "CURSOR_SANDBOX_POLICY_DIR";
    const L = 36e5, V = 9e5;
    let K = 0;
    function Z() {
      const e3 = (function() {
        const e4 = process.env[B]?.trim();
        return e4 ? n2.resolve(e4) : n2.resolve(n2.join(s2.homedir(), ".cursor", U));
      })();
      p.mkdirSync(e3, { recursive: true, mode: 448 });
      try {
        p.chmodSync(e3, 448);
      } catch {
      }
      const t3 = Date.now();
      return t3 - K >= V && (K = t3, (function(e4) {
        let t4;
        try {
          t4 = p.readdirSync(e4);
        } catch {
          return;
        }
        const r3 = Date.now();
        for (const o3 of t4) {
          if (!o3.startsWith("sandbox-policy-")) continue;
          const t5 = n2.join(e4, o3);
          try {
            const e5 = p.statSync(t5);
            if (!e5.isFile()) continue;
            r3 - e5.mtimeMs > L && p.unlinkSync(t5);
          } catch {
          }
        }
      })(e3)), e3;
    }
    function W(e3) {
      const t3 = Z(), r3 = y.randomBytes(8).toString("hex"), o3 = n2.join(t3, `sandbox-policy-${r3}`);
      return p.writeFileSync(o3, e3, { encoding: "utf-8", mode: 384 }), o3;
    }
    const H = "darwin" === process.platform, Y = "linux" === process.platform, G = (0, T.h)("shell-exec:sandbox");
    function X(e3) {
      const t3 = Z();
      return e3 && 0 !== e3.length ? e3.includes(t3) ? e3 : [...e3, t3] : [t3];
    }
    let Q, ee = true;
    function te() {
      return Q;
    }
    function re(e3) {
      "linux" === process.platform && Object.assign(e3, (function(e4) {
        return a2 && (0, n2.isAbsolute)(a2) ? { ...l(e4, a2), CURSOR_RIPGREP_PATH: a2 } : e4;
      })(e3));
    }
    let ne = null, oe = null, se = null, ie = null;
    function ae(e3 = process.platform) {
      const t3 = [], r3 = /* @__PURE__ */ new Set(), o3 = {};
      try {
        o3.ripgrep = d();
      } catch {
      }
      for (const i3 of (function(e4 = process.platform, t4 = s2.homedir(), r4 = {}) {
        const o4 = [];
        for (const s3 of N) {
          if (s3.platform !== e4) continue;
          if ("global" === s3.scope) {
            o4.push(s3.path);
            continue;
          }
          const i4 = "bundled" === s3.scope ? r4[s3.path] : (0, n2.join)(t4, s3.path);
          if (i4) try {
            let e5;
            switch (s3.scope) {
              case "home":
                e5 = (0, p.lstatSync)(i4).isFile();
                break;
              case "home-dir":
                e5 = (0, p.lstatSync)(i4).isDirectory();
                break;
              case "bundled":
                e5 = (0, p.statSync)(i4).isFile();
            }
            e5 && o4.push(i4);
          } catch {
          }
        }
        return o4;
      })(e3, s2.homedir(), o3)) r3.has(i3) || (r3.add(i3), t3.push(i3));
      return t3;
    }
    function ce(e3) {
      return { ...e3, additionalReadonlyPaths: X(e3.additionalReadonlyPaths) };
    }
    function ue(e3, t3, r3) {
      let o3;
      e3.ignoreMapping && (o3 = (function(e4, t4, r4, n3) {
        return _e(e4, t4, r4, n3);
      })(e3.ignoreMapping, t3, [], []));
      const i3 = (function(e4, t4, r4) {
        const o4 = e4 && e4.length > 0 ? (function(...e5) {
          const t5 = {};
          for (const r5 of e5) {
            let e6 = false;
            try {
              e6 = (0, p.existsSync)(r5) && (0, p.statSync)(r5).isDirectory();
            } catch {
            }
            if (e6) t5[r5] || (t5[r5] = []), t5[r5].push("**");
            else {
              const e7 = r5.lastIndexOf("/"), n3 = e7 > 0 ? r5.slice(0, e7) : "/", o5 = e7 >= 0 ? r5.slice(e7 + 1) : r5;
              t5[n3] || (t5[n3] = []), o5 ? t5[n3].push(o5, `${o5}/**`) : t5[n3].push("**");
            }
          }
          return t5;
        })(...e4) : {}, s3 = (function(e5, t5 = (e6) => p.existsSync(e6)) {
          if ((0, P.$f)(e5)) return true;
          let r5 = n2.resolve(e5);
          for (; ; ) {
            try {
              if (t5(n2.join(r5, ".git"))) return true;
            } catch {
            }
            const e6 = n2.dirname(r5);
            if (e6 === r5) return false;
            r5 = e6;
          }
        })(r4), i4 = !Y || s3 ? t4 ?? {} : {}, a4 = { ...o4 };
        for (const [e5, t5] of Object.entries(i4)) a4[e5] ? a4[e5] = [...a4[e5], ...t5] : a4[e5] = t5;
        if (0 === Object.keys(a4).length) return;
        return _e(a4, r4, [], []);
      })(e3.additionalReadonlyPaths, e3.writeProtectionMapping, t3), a3 = (c2 = e3.readBoundary, r3?.workspaceReadEnabled ?? (function() {
        const e4 = ee;
        return "function" == typeof e4 ? e4() : e4;
      })() ? c2 ?? "system" : "system");
      var c2;
      const u2 = ae(), l2 = "workspace" === a3 ? (function(e4) {
        const t4 = [], r4 = /* @__PURE__ */ new Set();
        for (const o4 of e4) {
          let e5 = o4.trim();
          if (!e5) continue;
          "~" === e5 ? e5 = s2.homedir() : (e5.startsWith("~/") || e5.startsWith("~\\")) && (e5 = n2.join(s2.homedir(), e5.slice(2))), e5 = e5.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e5 = e5.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
          const i4 = n2.basename(e5);
          if ((i4.includes("*") || i4.includes("?")) && (e5 = n2.dirname(e5)), !e5 || "." === e5) continue;
          const a4 = n2.normalize(e5);
          r4.has(a4) || (r4.add(a4), t4.push(a4));
        }
        return t4;
      })(e3.additionalReadPaths ?? []) : [], d2 = [...u2], f2 = new Set(u2);
      for (const e4 of l2) f2.has(e4) || (f2.add(e4), d2.push(e4));
      const h2 = { cwd: t3, readBoundary: a3, hardcodedReadPaths: d2, additionalReadonlyPaths: i3, networkAccess: z(e3.networkPolicy), ignoreMapping: o3 };
      return "workspace_readonly" === e3.type ? { type: e3.type, ...h2 } : { type: e3.type, ...h2, additionalReadwritePaths: e3.additionalReadwritePaths || [], disableTmpWrite: e3.disableTmpWrite || false };
    }
    function le(e3) {
      if (!("workspace" !== e3.readBoundary || "workspace_readwrite" === e3.type && e3.disableTmpWrite || "win32" === process.platform)) return E(e3.cwd, { create: true });
    }
    function de(e3, t3, r3) {
      const o3 = (function(e4) {
        const t4 = (0, n2.join)(e4, "tmp");
        return { TMPDIR: t4, TMP: t4, TEMP: t4, TMPPREFIX: (0, n2.join)(t4, "sh-") };
      })(e3);
      if (r3) {
        const r4 = x();
        for (const [n3, s3] of Object.entries(x(e3))) t3[n3] === r4[n3] && (o3[n3] = s3);
      }
      return o3;
    }
    function pe(e3) {
      if (null !== ne) return !!ne;
      try {
        const t3 = te();
        return G.info(e3, `[checkBinaryAvailable] Resolved binary path: ${t3}`), t3 ? (ne = p.existsSync(t3), ne ? G.info(e3, `[checkBinaryAvailable] Binary path exists: ${ne}`) : (oe = new Error(`Sandbox binary not found at ${t3}`), G.info(e3, `[checkBinaryAvailable] Binary not found at: ${t3}`)), !!ne) : (oe = new Error("Sandbox binary path was not configured"), ne = false, G.info(e3, "[checkBinaryAvailable] Binary path not set, returning false"), false);
      } catch (t3) {
        return oe = t3, ne = false, G.info(e3, `[checkBinaryAvailable] Exception checking binary: ${t3}`), false;
      }
    }
    function fe(e3) {
      if (null !== ie) return ie;
      const t3 = e3 ?? (0, O.q6)();
      if (G.info(t3, "[isSandboxHelperSupported] Starting sandbox support check..."), !pe(t3)) {
        const e4 = oe?.message || "Binary check failed";
        return se = e4, G.info(t3, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e4}`), ie = false, ie;
      }
      if ("win32" === process.platform) return se = "Windows sandbox helper only provides network proxy, not filesystem isolation", G.info(t3, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), ie = false, ie;
      if ("darwin" === process.platform) return se = null, G.info(t3, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), ie = true, ie;
      const { binaryPath: r3, args: n3, env: o3 } = me(t3, process.cwd());
      try {
        const e4 = Date.now();
        (0, f.D9)(i2.execFileSync, r3, n3, { stdio: ["ignore", "ignore", "pipe"], timeout: he, env: o3, shell: false });
        const s3 = Date.now() - e4;
        return se = null, G.info(t3, `[isSandboxHelperSupported] Preflight succeeded in ${s3}ms, sandbox supported!`), ie = true, ie;
      } catch (e4) {
        const r4 = e4;
        return ge(t3, { message: r4.message, status: r4.status, stderrText: r4.stderr?.toString?.() || "" });
      }
    }
    const he = 15e3;
    function me(e3, t3) {
      const r3 = { sandbox: ue(ce({ type: "workspace_readwrite" }), t3) }, n3 = String(te());
      G.info(e3, `[sandboxPreflight] Running preflight with binary: ${n3}`), G.info(e3, `[sandboxPreflight] CWD: ${t3}`);
      const o3 = { ...process.env };
      re(o3);
      return { binaryPath: n3, args: ["--policy", W(JSON.stringify(r3)), "--preflight-only", "--", "/bin/true"], env: o3 };
    }
    function ge(e3, t3) {
      const { message: r3, status: n3, stderrText: o3 } = t3;
      return G.error(e3, `[sandboxPreflight] Preflight failed: ${r3}`), G.error(e3, `[sandboxPreflight] Exit status: ${n3}`), o3 && G.error(e3, `[sandboxPreflight] Stderr: ${o3}`), se = 2 === n3 ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${o3 || "none"}` : `Linux preflight failed: ${r3 || "unknown error"}. Exit status: ${n3}. stderr: ${o3 || "none"}`, ie = false, false;
    }
    function ye(e3, t3 = [], r3 = {}, n3) {
      const o3 = (0, O.q6)();
      if (r3.env = h(r3.env), !pe(o3)) throw new Error(`Sandbox binary not available: ${oe?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
      if ("insecure_none" === n3.type) return (0, f.D9)(i2.spawn, e3, t3, { ...r3, windowsHide: true });
      if ("workspace_readwrite" === n3.type || "workspace_readonly" === n3.type) return (function(e4, t4, r4, n4) {
        if ("workspace_readwrite" !== n4.type && "workspace_readonly" !== n4.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const o4 = String(r4.cwd ?? process.cwd()), s3 = n4.sandboxWorkspaceRoot ?? o4;
        let a3 = e4, c2 = t4;
        if (r4.shell) if ("win32" === process.platform) {
          a3 = "string" == typeof r4.shell ? r4.shell : "cmd.exe", c2 = ["/c", `${e4} ${t4.join(" ")}`];
        } else {
          a3 = "string" == typeof r4.shell ? r4.shell : "/bin/sh", c2 = ["-c", `${e4} ${t4.join(" ")}`];
        }
        const u2 = ue(ce(n4), s3), l2 = le(u2);
        l2 && (u2.additionalReadwritePaths = [...u2.additionalReadwritePaths ?? [], l2]);
        const d2 = (function(e5) {
          if ("insecure_none" === e5.type) return;
          const t5 = e5.networkPolicy;
          if (void 0 === t5) return;
          if (!z(t5)) return;
          const r5 = void 0 !== t5.deny && t5.deny.length > 0;
          return "allow" !== t5.default || r5 ? { version: 1, ...t5 } : void 0;
        })(n4), p2 = { sandbox: u2 };
        void 0 !== d2 && (p2.networkPolicy = d2);
        false === n4.networkPolicyStrict && (p2.networkPolicyStrict = false);
        const h2 = ["--policy", W(JSON.stringify(p2)), "--", a3, ...c2], m2 = "linux" === process.platform ? g(process.env) : process.env, y2 = "linux" === process.platform && r4.env ? g(r4.env) : r4.env, _2 = { ...m2, ...y2, CURSOR_SANDBOX: "native" };
        if (re(_2), l2) {
          const e5 = de(l2, _2, n4.enableSharedBuildCache);
          Object.assign(_2, e5), _2.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e5).join(" "), _2.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e5).map(([e6, t5]) => `builtin export ${e6}='${t5.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const v2 = { cwd: r4.cwd || o4, env: _2, stdio: r4.stdio || ["pipe", "pipe", "pipe"], detached: r4.detached, windowsHide: true };
        try {
          const e5 = /* @__PURE__ */ new Date(), t5 = (0, f.D9)(i2.spawn, String(te()), h2, v2);
          return H && t5.pid && (function(e6, t6) {
            q.set(e6, t6);
          })(t5, { startTime: e5, pid: t5.pid }), t5;
        } catch (e5) {
          throw new Error(`Failed to spawn sandboxed process: ${e5}`);
        }
      })(e3, t3, r3, n3);
      throw new Error(`Unsupported sandbox policy: ${String(n3)}`);
    }
    function _e(e3, t3, r3, n3) {
      const o3 = {};
      for (const [t4, r4] of Object.entries(e3)) {
        const e4 = t4.startsWith("file://") ? ve(t4) : t4;
        o3[e4] = r4;
        const n4 = we(e4);
        n4 !== e4 && (o3[n4] = r4);
      }
      return o3;
    }
    function ve(e3) {
      let t3 = e3.replace(/^file:\/\//, "");
      return t3 = decodeURIComponent(t3), t3.length > 1 && t3.endsWith("/") && (t3 = t3.slice(0, -1)), t3;
    }
    function we(e3, t3) {
      if ((0, P.$f)(e3)) return e3;
      try {
        return (t3 ?? p.realpathSync)(e3);
      } catch {
        return e3;
      }
    }
    function be() {
      return se;
    }
    class Se extends Error {
      reason;
      constructor(e3, t3) {
        super(e3), this.reason = t3, this.name = "SandboxUnsupportedError";
      }
    }
    const ke = "darwin" === process.platform;
    function Ee(e3) {
      !(function(e4) {
        d();
        const { sandboxBinaryPath: t3, workspaceReadEnabled: r3 } = e4;
        Q || (Q = t3), void 0 !== r3 && (ee = r3);
      })(e3);
    }
    function xe(e3, t3 = [], r3 = {}, n3) {
      if (r3.env = h(r3.env), n3.enableSharedBuildCache && (r3 = { ...r3, env: { ...h(process.env), ...x(), ...r3.env } }), "insecure_none" !== n3.type) {
        if (fe()) return ye(e3, t3, r3, n3);
        const o3 = be();
        throw new Se(`Sandbox policy '${n3.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o3 || "unknown"}`, o3 ?? void 0);
      }
      return (function(e4, t4, r4) {
        return (0, f.D9)(i2.spawn, e4, t4, { ...r4, windowsHide: true });
      })(e3, t3, r3);
    }
    function Te(e3, t3) {
      if (ke) try {
        (0, p.accessSync)("/usr/bin/sandbox-exec", p.constants.X_OK);
      } catch {
        return false;
      }
      return fe(t3?.ctx);
    }
    var Oe;
    !(function(e3) {
      e3.Zsh = "zsh", e3.ZshLight = "zsh-light", e3.Bash = "bash", e3.PowerShell = "powershell", e3.Naive = "naive";
    })(Oe || (Oe = {}));
    var Pe, Ie, Ce, Ae, $e, Re, Ne, Me, Je, je, De, Fe, qe, ze, Ue, Be, Le, Ve, Ke, Ze, We, He, Ye, Ge, Xe, Qe, et, tt, rt, nt, ot, st, it, at, ct, ut, lt, dt, pt, ft, ht, mt, gt, yt, _t, vt, wt, bt, St, kt = r2(7357), Et = r2(91), xt = function(e3, t3, r3, n3, o3) {
      if ("m" === n3) throw new TypeError("Private method is not writable");
      if ("a" === n3 && !o3) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t3 ? e3 !== t3 || !o3 : !t3.has(e3)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === n3 ? o3.call(e3, r3) : o3 ? o3.value = r3 : t3.set(e3, r3), r3;
    }, Tt = function(e3, t3, r3, n3) {
      if ("a" === r3 && !n3) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t3 ? e3 !== t3 || !n3 : !t3.has(e3)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r3 ? n3 : "a" === r3 ? n3.call(e3) : n3 ? n3.value : t3.get(e3);
    };
    const Ot = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, Pt = /* @__PURE__ */ new Set(), It = "object" == typeof process && process ? process : {}, Ct = (e3, t3, r3, n3) => {
      "function" == typeof It.emitWarning ? It.emitWarning(e3, t3, r3, n3) : console.error(`[${r3}] ${t3}: ${e3}`);
    };
    let At = globalThis.AbortController, $t = globalThis.AbortSignal;
    if (void 0 === At) {
      $t = class {
        constructor() {
          this._onabort = [], this.aborted = false;
        }
        addEventListener(e4, t4) {
          this._onabort.push(t4);
        }
      }, At = class {
        constructor() {
          this.signal = new $t(), t3();
        }
        abort(e4) {
          if (!this.signal.aborted) {
            this.signal.reason = e4, this.signal.aborted = true;
            for (const t4 of this.signal._onabort) t4(e4);
            this.signal.onabort?.(e4);
          }
        }
      };
      let e3 = "1" !== It.env?.LRU_CACHE_IGNORE_AC_WARNING;
      const t3 = () => {
        e3 && (e3 = false, Ct("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t3));
      };
    }
    /* @__PURE__ */ Symbol("type");
    const Rt = (e3) => e3 && e3 === Math.floor(e3) && e3 > 0 && Number.isFinite(e3), Nt = (e3) => Rt(e3) ? e3 <= 256 ? Uint8Array : e3 <= 65536 ? Uint16Array : e3 <= 2 ** 32 ? Uint32Array : e3 <= Number.MAX_SAFE_INTEGER ? Mt : null : null;
    class Mt extends Array {
      constructor(e3) {
        super(e3), this.fill(0);
      }
    }
    class Jt {
      static create(e3) {
        const t3 = Nt(e3);
        if (!t3) return [];
        xt(Pe, Pe, true, "f", Ie);
        const r3 = new Pe(e3, t3);
        return xt(Pe, Pe, false, "f", Ie), r3;
      }
      constructor(e3, t3) {
        if (!Tt(Pe, Pe, "f", Ie)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t3(e3), this.length = 0;
      }
      push(e3) {
        this.heap[this.length++] = e3;
      }
      pop() {
        return this.heap[--this.length];
      }
    }
    Pe = Jt, Ie = { value: false };
    class jt {
      get perf() {
        return Tt(this, De, "f");
      }
      static unsafeExposeInternals(e3) {
        return { starts: Tt(e3, Ge, "f"), ttls: Tt(e3, Xe, "f"), sizes: Tt(e3, Ye, "f"), keyMap: Tt(e3, ze, "f"), keyList: Tt(e3, Ue, "f"), valList: Tt(e3, Be, "f"), next: Tt(e3, Le, "f"), prev: Tt(e3, Ve, "f"), get head() {
          return Tt(e3, Ke, "f");
        }, get tail() {
          return Tt(e3, Ze, "f");
        }, free: Tt(e3, We, "f"), isBackgroundFetch: (t3) => Tt(e3, Ce, "m", yt).call(e3, t3), backgroundFetch: (t3, r3, n3, o3) => Tt(e3, Ce, "m", gt).call(e3, t3, r3, n3, o3), moveToTail: (t3) => Tt(e3, Ce, "m", vt).call(e3, t3), indexes: (t3) => Tt(e3, Ce, "m", pt).call(e3, t3), rindexes: (t3) => Tt(e3, Ce, "m", ft).call(e3, t3), isStale: (t3) => Tt(e3, at, "f").call(e3, t3) };
      }
      get max() {
        return Tt(this, Ae, "f");
      }
      get maxSize() {
        return Tt(this, $e, "f");
      }
      get calculatedSize() {
        return Tt(this, qe, "f");
      }
      get size() {
        return Tt(this, Fe, "f");
      }
      get fetchMethod() {
        return Tt(this, Je, "f");
      }
      get memoMethod() {
        return Tt(this, je, "f");
      }
      get dispose() {
        return Tt(this, Re, "f");
      }
      get onInsert() {
        return Tt(this, Ne, "f");
      }
      get disposeAfter() {
        return Tt(this, Me, "f");
      }
      constructor(e3) {
        Ce.add(this), Ae.set(this, void 0), $e.set(this, void 0), Re.set(this, void 0), Ne.set(this, void 0), Me.set(this, void 0), Je.set(this, void 0), je.set(this, void 0), De.set(this, void 0), Fe.set(this, void 0), qe.set(this, void 0), ze.set(this, void 0), Ue.set(this, void 0), Be.set(this, void 0), Le.set(this, void 0), Ve.set(this, void 0), Ke.set(this, void 0), Ze.set(this, void 0), We.set(this, void 0), He.set(this, void 0), Ye.set(this, void 0), Ge.set(this, void 0), Xe.set(this, void 0), Qe.set(this, void 0), et.set(this, void 0), tt.set(this, void 0), rt.set(this, void 0), ot.set(this, () => {
        }), st.set(this, () => {
        }), it.set(this, () => {
        }), at.set(this, () => false), ut.set(this, (e4) => {
        }), lt.set(this, (e4, t4, r4) => {
        }), dt.set(this, (e4, t4, r4, n4) => {
          if (r4 || n4) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0;
        }), this[St] = "LRUCache";
        const { max: t3 = 0, ttl: r3, ttlResolution: n3 = 1, ttlAutopurge: o3, updateAgeOnGet: s3, updateAgeOnHas: i3, allowStale: a3, dispose: c2, onInsert: u2, disposeAfter: l2, noDisposeOnSet: d2, noUpdateTTL: p2, maxSize: f2 = 0, maxEntrySize: h2 = 0, sizeCalculation: m2, fetchMethod: g2, memoMethod: y2, noDeleteOnFetchRejection: _2, noDeleteOnStaleGet: v2, allowStaleOnFetchRejection: w2, allowStaleOnFetchAbort: b2, ignoreFetchAbort: S2, perf: k2 } = e3;
        if (void 0 !== k2 && "function" != typeof k2?.now) throw new TypeError("perf option must have a now() method if specified");
        if (xt(this, De, k2 ?? Ot, "f"), 0 !== t3 && !Rt(t3)) throw new TypeError("max option must be a nonnegative integer");
        const E2 = t3 ? Nt(t3) : Array;
        if (!E2) throw new Error(`invalid max value: ${t3}`);
        if (xt(this, Ae, t3, "f"), xt(this, $e, f2, "f"), this.maxEntrySize = h2 || Tt(this, $e, "f"), this.sizeCalculation = m2, this.sizeCalculation) {
          if (!Tt(this, $e, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== y2 && "function" != typeof y2) throw new TypeError("memoMethod must be a function if defined");
        if (xt(this, je, y2, "f"), void 0 !== g2 && "function" != typeof g2) throw new TypeError("fetchMethod must be a function if specified");
        if (xt(this, Je, g2, "f"), xt(this, et, !!g2, "f"), xt(this, ze, /* @__PURE__ */ new Map(), "f"), xt(this, Ue, new Array(t3).fill(void 0), "f"), xt(this, Be, new Array(t3).fill(void 0), "f"), xt(this, Le, new E2(t3), "f"), xt(this, Ve, new E2(t3), "f"), xt(this, Ke, 0, "f"), xt(this, Ze, 0, "f"), xt(this, We, Jt.create(t3), "f"), xt(this, Fe, 0, "f"), xt(this, qe, 0, "f"), "function" == typeof c2 && xt(this, Re, c2, "f"), "function" == typeof u2 && xt(this, Ne, u2, "f"), "function" == typeof l2 ? (xt(this, Me, l2, "f"), xt(this, He, [], "f")) : (xt(this, Me, void 0, "f"), xt(this, He, void 0, "f")), xt(this, Qe, !!Tt(this, Re, "f"), "f"), xt(this, rt, !!Tt(this, Ne, "f"), "f"), xt(this, tt, !!Tt(this, Me, "f"), "f"), this.noDisposeOnSet = !!d2, this.noUpdateTTL = !!p2, this.noDeleteOnFetchRejection = !!_2, this.allowStaleOnFetchRejection = !!w2, this.allowStaleOnFetchAbort = !!b2, this.ignoreFetchAbort = !!S2, 0 !== this.maxEntrySize) {
          if (0 !== Tt(this, $e, "f") && !Rt(Tt(this, $e, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
          if (!Rt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          Tt(this, Ce, "m", ct).call(this);
        }
        if (this.allowStale = !!a3, this.noDeleteOnStaleGet = !!v2, this.updateAgeOnGet = !!s3, this.updateAgeOnHas = !!i3, this.ttlResolution = Rt(n3) || 0 === n3 ? n3 : 1, this.ttlAutopurge = !!o3, this.ttl = r3 || 0, this.ttl) {
          if (!Rt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          Tt(this, Ce, "m", nt).call(this);
        }
        if (0 === Tt(this, Ae, "f") && 0 === this.ttl && 0 === Tt(this, $e, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Tt(this, Ae, "f") && !Tt(this, $e, "f")) {
          const e4 = "LRU_CACHE_UNBOUNDED";
          if (((e5) => !Pt.has(e5))(e4)) {
            Pt.add(e4);
            Ct("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e4, jt);
          }
        }
      }
      getRemainingTTL(e3) {
        return Tt(this, ze, "f").has(e3) ? 1 / 0 : 0;
      }
      *entries() {
        for (const e3 of Tt(this, Ce, "m", pt).call(this)) void 0 === Tt(this, Be, "f")[e3] || void 0 === Tt(this, Ue, "f")[e3] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield [Tt(this, Ue, "f")[e3], Tt(this, Be, "f")[e3]]);
      }
      *rentries() {
        for (const e3 of Tt(this, Ce, "m", ft).call(this)) void 0 === Tt(this, Be, "f")[e3] || void 0 === Tt(this, Ue, "f")[e3] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield [Tt(this, Ue, "f")[e3], Tt(this, Be, "f")[e3]]);
      }
      *keys() {
        for (const e3 of Tt(this, Ce, "m", pt).call(this)) {
          const t3 = Tt(this, Ue, "f")[e3];
          void 0 === t3 || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield t3);
        }
      }
      *rkeys() {
        for (const e3 of Tt(this, Ce, "m", ft).call(this)) {
          const t3 = Tt(this, Ue, "f")[e3];
          void 0 === t3 || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield t3);
        }
      }
      *values() {
        for (const e3 of Tt(this, Ce, "m", pt).call(this)) {
          void 0 === Tt(this, Be, "f")[e3] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield Tt(this, Be, "f")[e3]);
        }
      }
      *rvalues() {
        for (const e3 of Tt(this, Ce, "m", ft).call(this)) {
          void 0 === Tt(this, Be, "f")[e3] || Tt(this, Ce, "m", yt).call(this, Tt(this, Be, "f")[e3]) || (yield Tt(this, Be, "f")[e3]);
        }
      }
      [(Ae = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakSet(), nt = function() {
        const e3 = new Mt(Tt(this, Ae, "f")), t3 = new Mt(Tt(this, Ae, "f"));
        xt(this, Xe, e3, "f"), xt(this, Ge, t3, "f"), xt(this, it, (r4, n4, o3 = Tt(this, De, "f").now()) => {
          if (t3[r4] = 0 !== n4 ? o3 : 0, e3[r4] = n4, 0 !== n4 && this.ttlAutopurge) {
            const e4 = setTimeout(() => {
              Tt(this, at, "f").call(this, r4) && Tt(this, Ce, "m", wt).call(this, Tt(this, Ue, "f")[r4], "expire");
            }, n4 + 1);
            e4.unref && e4.unref();
          }
        }, "f"), xt(this, ot, (r4) => {
          t3[r4] = 0 !== e3[r4] ? Tt(this, De, "f").now() : 0;
        }, "f"), xt(this, st, (o3, s3) => {
          if (e3[s3]) {
            const i3 = e3[s3], a3 = t3[s3];
            if (!i3 || !a3) return;
            o3.ttl = i3, o3.start = a3, o3.now = r3 || n3();
            const c2 = o3.now - a3;
            o3.remainingTTL = i3 - c2;
          }
        }, "f");
        let r3 = 0;
        const n3 = () => {
          const e4 = Tt(this, De, "f").now();
          if (this.ttlResolution > 0) {
            r3 = e4;
            const t4 = setTimeout(() => {
              r3 = 0;
            }, this.ttlResolution);
            t4.unref && t4.unref();
          }
          return e4;
        };
        this.getRemainingTTL = (o3) => {
          const s3 = Tt(this, ze, "f").get(o3);
          if (void 0 === s3) return 0;
          const i3 = e3[s3], a3 = t3[s3];
          if (!i3 || !a3) return 1 / 0;
          return i3 - ((r3 || n3()) - a3);
        }, xt(this, at, (o3) => {
          const s3 = t3[o3], i3 = e3[o3];
          return !!i3 && !!s3 && (r3 || n3()) - s3 > i3;
        }, "f");
      }, ct = function() {
        const e3 = new Mt(Tt(this, Ae, "f"));
        xt(this, qe, 0, "f"), xt(this, Ye, e3, "f"), xt(this, ut, (t3) => {
          xt(this, qe, Tt(this, qe, "f") - e3[t3], "f"), e3[t3] = 0;
        }, "f"), xt(this, dt, (e4, t3, r3, n3) => {
          if (Tt(this, Ce, "m", yt).call(this, t3)) return 0;
          if (!Rt(r3)) {
            if (!n3) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof n3) throw new TypeError("sizeCalculation must be a function");
            if (r3 = n3(t3, e4), !Rt(r3)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return r3;
        }, "f"), xt(this, lt, (t3, r3, n3) => {
          if (e3[t3] = r3, Tt(this, $e, "f")) {
            const r4 = Tt(this, $e, "f") - e3[t3];
            for (; Tt(this, qe, "f") > r4; ) Tt(this, Ce, "m", mt).call(this, true);
          }
          xt(this, qe, Tt(this, qe, "f") + e3[t3], "f"), n3 && (n3.entrySize = r3, n3.totalCalculatedSize = Tt(this, qe, "f"));
        }, "f");
      }, pt = function* ({ allowStale: e3 = this.allowStale } = {}) {
        if (Tt(this, Fe, "f")) for (let t3 = Tt(this, Ze, "f"); Tt(this, Ce, "m", ht).call(this, t3) && (!e3 && Tt(this, at, "f").call(this, t3) || (yield t3), t3 !== Tt(this, Ke, "f")); ) t3 = Tt(this, Ve, "f")[t3];
      }, ft = function* ({ allowStale: e3 = this.allowStale } = {}) {
        if (Tt(this, Fe, "f")) for (let t3 = Tt(this, Ke, "f"); Tt(this, Ce, "m", ht).call(this, t3) && (!e3 && Tt(this, at, "f").call(this, t3) || (yield t3), t3 !== Tt(this, Ze, "f")); ) t3 = Tt(this, Le, "f")[t3];
      }, ht = function(e3) {
        return void 0 !== e3 && Tt(this, ze, "f").get(Tt(this, Ue, "f")[e3]) === e3;
      }, Symbol.iterator)]() {
        return this.entries();
      }
      find(e3, t3 = {}) {
        for (const r3 of Tt(this, Ce, "m", pt).call(this)) {
          const n3 = Tt(this, Be, "f")[r3], o3 = Tt(this, Ce, "m", yt).call(this, n3) ? n3.__staleWhileFetching : n3;
          if (void 0 !== o3 && e3(o3, Tt(this, Ue, "f")[r3], this)) return this.get(Tt(this, Ue, "f")[r3], t3);
        }
      }
      forEach(e3, t3 = this) {
        for (const r3 of Tt(this, Ce, "m", pt).call(this)) {
          const n3 = Tt(this, Be, "f")[r3], o3 = Tt(this, Ce, "m", yt).call(this, n3) ? n3.__staleWhileFetching : n3;
          void 0 !== o3 && e3.call(t3, o3, Tt(this, Ue, "f")[r3], this);
        }
      }
      rforEach(e3, t3 = this) {
        for (const r3 of Tt(this, Ce, "m", ft).call(this)) {
          const n3 = Tt(this, Be, "f")[r3], o3 = Tt(this, Ce, "m", yt).call(this, n3) ? n3.__staleWhileFetching : n3;
          void 0 !== o3 && e3.call(t3, o3, Tt(this, Ue, "f")[r3], this);
        }
      }
      purgeStale() {
        let e3 = false;
        for (const t3 of Tt(this, Ce, "m", ft).call(this, { allowStale: true })) Tt(this, at, "f").call(this, t3) && (Tt(this, Ce, "m", wt).call(this, Tt(this, Ue, "f")[t3], "expire"), e3 = true);
        return e3;
      }
      info(e3) {
        const t3 = Tt(this, ze, "f").get(e3);
        if (void 0 === t3) return;
        const r3 = Tt(this, Be, "f")[t3], n3 = Tt(this, Ce, "m", yt).call(this, r3) ? r3.__staleWhileFetching : r3;
        if (void 0 === n3) return;
        const o3 = { value: n3 };
        if (Tt(this, Xe, "f") && Tt(this, Ge, "f")) {
          const e4 = Tt(this, Xe, "f")[t3], r4 = Tt(this, Ge, "f")[t3];
          if (e4 && r4) {
            const t4 = e4 - (Tt(this, De, "f").now() - r4);
            o3.ttl = t4, o3.start = Date.now();
          }
        }
        return Tt(this, Ye, "f") && (o3.size = Tt(this, Ye, "f")[t3]), o3;
      }
      dump() {
        const e3 = [];
        for (const t3 of Tt(this, Ce, "m", pt).call(this, { allowStale: true })) {
          const r3 = Tt(this, Ue, "f")[t3], n3 = Tt(this, Be, "f")[t3], o3 = Tt(this, Ce, "m", yt).call(this, n3) ? n3.__staleWhileFetching : n3;
          if (void 0 === o3 || void 0 === r3) continue;
          const s3 = { value: o3 };
          if (Tt(this, Xe, "f") && Tt(this, Ge, "f")) {
            s3.ttl = Tt(this, Xe, "f")[t3];
            const e4 = Tt(this, De, "f").now() - Tt(this, Ge, "f")[t3];
            s3.start = Math.floor(Date.now() - e4);
          }
          Tt(this, Ye, "f") && (s3.size = Tt(this, Ye, "f")[t3]), e3.unshift([r3, s3]);
        }
        return e3;
      }
      load(e3) {
        this.clear();
        for (const [t3, r3] of e3) {
          if (r3.start) {
            const e4 = Date.now() - r3.start;
            r3.start = Tt(this, De, "f").now() - e4;
          }
          this.set(t3, r3.value, r3);
        }
      }
      set(e3, t3, r3 = {}) {
        var n3;
        if (void 0 === t3) return this.delete(e3), this;
        const { ttl: o3 = this.ttl, start: s3, noDisposeOnSet: i3 = this.noDisposeOnSet, sizeCalculation: a3 = this.sizeCalculation, status: c2 } = r3;
        let { noUpdateTTL: u2 = this.noUpdateTTL } = r3;
        const l2 = Tt(this, dt, "f").call(this, e3, t3, r3.size || 0, a3);
        if (this.maxEntrySize && l2 > this.maxEntrySize) return c2 && (c2.set = "miss", c2.maxEntrySizeExceeded = true), Tt(this, Ce, "m", wt).call(this, e3, "set"), this;
        let d2 = 0 === Tt(this, Fe, "f") ? void 0 : Tt(this, ze, "f").get(e3);
        if (void 0 === d2) d2 = 0 === Tt(this, Fe, "f") ? Tt(this, Ze, "f") : 0 !== Tt(this, We, "f").length ? Tt(this, We, "f").pop() : Tt(this, Fe, "f") === Tt(this, Ae, "f") ? Tt(this, Ce, "m", mt).call(this, false) : Tt(this, Fe, "f"), Tt(this, Ue, "f")[d2] = e3, Tt(this, Be, "f")[d2] = t3, Tt(this, ze, "f").set(e3, d2), Tt(this, Le, "f")[Tt(this, Ze, "f")] = d2, Tt(this, Ve, "f")[d2] = Tt(this, Ze, "f"), xt(this, Ze, d2, "f"), xt(this, Fe, (n3 = Tt(this, Fe, "f"), ++n3), "f"), Tt(this, lt, "f").call(this, d2, l2, c2), c2 && (c2.set = "add"), u2 = false, Tt(this, rt, "f") && Tt(this, Ne, "f")?.call(this, t3, e3, "add");
        else {
          Tt(this, Ce, "m", vt).call(this, d2);
          const r4 = Tt(this, Be, "f")[d2];
          if (t3 !== r4) {
            if (Tt(this, et, "f") && Tt(this, Ce, "m", yt).call(this, r4)) {
              r4.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: t4 } = r4;
              void 0 === t4 || i3 || (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, t4, e3, "set"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([t4, e3, "set"]));
            } else i3 || (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, r4, e3, "set"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([r4, e3, "set"]));
            if (Tt(this, ut, "f").call(this, d2), Tt(this, lt, "f").call(this, d2, l2, c2), Tt(this, Be, "f")[d2] = t3, c2) {
              c2.set = "replace";
              const e4 = r4 && Tt(this, Ce, "m", yt).call(this, r4) ? r4.__staleWhileFetching : r4;
              void 0 !== e4 && (c2.oldValue = e4);
            }
          } else c2 && (c2.set = "update");
          Tt(this, rt, "f") && this.onInsert?.(t3, e3, t3 === r4 ? "update" : "replace");
        }
        if (0 === o3 || Tt(this, Xe, "f") || Tt(this, Ce, "m", nt).call(this), Tt(this, Xe, "f") && (u2 || Tt(this, it, "f").call(this, d2, o3, s3), c2 && Tt(this, st, "f").call(this, c2, d2)), !i3 && Tt(this, tt, "f") && Tt(this, He, "f")) {
          const e4 = Tt(this, He, "f");
          let t4;
          for (; t4 = e4?.shift(); ) Tt(this, Me, "f")?.call(this, ...t4);
        }
        return this;
      }
      pop() {
        try {
          for (; Tt(this, Fe, "f"); ) {
            const e3 = Tt(this, Be, "f")[Tt(this, Ke, "f")];
            if (Tt(this, Ce, "m", mt).call(this, true), Tt(this, Ce, "m", yt).call(this, e3)) {
              if (e3.__staleWhileFetching) return e3.__staleWhileFetching;
            } else if (void 0 !== e3) return e3;
          }
          return;
        } finally {
          if (Tt(this, tt, "f") && Tt(this, He, "f")) {
            const e3 = Tt(this, He, "f");
            let t3;
            for (; t3 = e3?.shift(); ) Tt(this, Me, "f")?.call(this, ...t3);
          }
        }
      }
      has(e3, t3 = {}) {
        const { updateAgeOnHas: r3 = this.updateAgeOnHas, status: n3 } = t3, o3 = Tt(this, ze, "f").get(e3);
        if (void 0 !== o3) {
          const e4 = Tt(this, Be, "f")[o3];
          if (Tt(this, Ce, "m", yt).call(this, e4) && void 0 === e4.__staleWhileFetching) return false;
          if (!Tt(this, at, "f").call(this, o3)) return r3 && Tt(this, ot, "f").call(this, o3), n3 && (n3.has = "hit", Tt(this, st, "f").call(this, n3, o3)), true;
          n3 && (n3.has = "stale", Tt(this, st, "f").call(this, n3, o3));
        } else n3 && (n3.has = "miss");
        return false;
      }
      peek(e3, t3 = {}) {
        const { allowStale: r3 = this.allowStale } = t3, n3 = Tt(this, ze, "f").get(e3);
        if (void 0 === n3 || !r3 && Tt(this, at, "f").call(this, n3)) return;
        const o3 = Tt(this, Be, "f")[n3];
        return Tt(this, Ce, "m", yt).call(this, o3) ? o3.__staleWhileFetching : o3;
      }
      async fetch(e3, t3 = {}) {
        const { allowStale: r3 = this.allowStale, updateAgeOnGet: n3 = this.updateAgeOnGet, noDeleteOnStaleGet: o3 = this.noDeleteOnStaleGet, ttl: s3 = this.ttl, noDisposeOnSet: i3 = this.noDisposeOnSet, size: a3 = 0, sizeCalculation: c2 = this.sizeCalculation, noUpdateTTL: u2 = this.noUpdateTTL, noDeleteOnFetchRejection: l2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: p2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: f2 = this.allowStaleOnFetchAbort, context: h2, forceRefresh: m2 = false, status: g2, signal: y2 } = t3;
        if (!Tt(this, et, "f")) return g2 && (g2.fetch = "get"), this.get(e3, { allowStale: r3, updateAgeOnGet: n3, noDeleteOnStaleGet: o3, status: g2 });
        const _2 = { allowStale: r3, updateAgeOnGet: n3, noDeleteOnStaleGet: o3, ttl: s3, noDisposeOnSet: i3, size: a3, sizeCalculation: c2, noUpdateTTL: u2, noDeleteOnFetchRejection: l2, allowStaleOnFetchRejection: d2, allowStaleOnFetchAbort: f2, ignoreFetchAbort: p2, status: g2, signal: y2 }, v2 = Tt(this, ze, "f").get(e3);
        if (void 0 === v2) {
          g2 && (g2.fetch = "miss");
          const t4 = Tt(this, Ce, "m", gt).call(this, e3, v2, _2, h2);
          return t4.__returned = t4;
        }
        {
          const t4 = Tt(this, Be, "f")[v2];
          if (Tt(this, Ce, "m", yt).call(this, t4)) {
            const e4 = r3 && void 0 !== t4.__staleWhileFetching;
            return g2 && (g2.fetch = "inflight", e4 && (g2.returnedStale = true)), e4 ? t4.__staleWhileFetching : t4.__returned = t4;
          }
          const o4 = Tt(this, at, "f").call(this, v2);
          if (!m2 && !o4) return g2 && (g2.fetch = "hit"), Tt(this, Ce, "m", vt).call(this, v2), n3 && Tt(this, ot, "f").call(this, v2), g2 && Tt(this, st, "f").call(this, g2, v2), t4;
          const s4 = Tt(this, Ce, "m", gt).call(this, e3, v2, _2, h2), i4 = void 0 !== s4.__staleWhileFetching && r3;
          return g2 && (g2.fetch = o4 ? "stale" : "refresh", i4 && o4 && (g2.returnedStale = true)), i4 ? s4.__staleWhileFetching : s4.__returned = s4;
        }
      }
      async forceFetch(e3, t3 = {}) {
        const r3 = await this.fetch(e3, t3);
        if (void 0 === r3) throw new Error("fetch() returned undefined");
        return r3;
      }
      memo(e3, t3 = {}) {
        const r3 = Tt(this, je, "f");
        if (!r3) throw new Error("no memoMethod provided to constructor");
        const { context: n3, forceRefresh: o3, ...s3 } = t3, i3 = this.get(e3, s3);
        if (!o3 && void 0 !== i3) return i3;
        const a3 = r3(e3, i3, { options: s3, context: n3 });
        return this.set(e3, a3, s3), a3;
      }
      get(e3, t3 = {}) {
        const { allowStale: r3 = this.allowStale, updateAgeOnGet: n3 = this.updateAgeOnGet, noDeleteOnStaleGet: o3 = this.noDeleteOnStaleGet, status: s3 } = t3, i3 = Tt(this, ze, "f").get(e3);
        if (void 0 !== i3) {
          const t4 = Tt(this, Be, "f")[i3], a3 = Tt(this, Ce, "m", yt).call(this, t4);
          return s3 && Tt(this, st, "f").call(this, s3, i3), Tt(this, at, "f").call(this, i3) ? (s3 && (s3.get = "stale"), a3 ? (s3 && r3 && void 0 !== t4.__staleWhileFetching && (s3.returnedStale = true), r3 ? t4.__staleWhileFetching : void 0) : (o3 || Tt(this, Ce, "m", wt).call(this, e3, "expire"), s3 && r3 && (s3.returnedStale = true), r3 ? t4 : void 0)) : (s3 && (s3.get = "hit"), a3 ? t4.__staleWhileFetching : (Tt(this, Ce, "m", vt).call(this, i3), n3 && Tt(this, ot, "f").call(this, i3), t4));
        }
        s3 && (s3.get = "miss");
      }
      delete(e3) {
        return Tt(this, Ce, "m", wt).call(this, e3, "delete");
      }
      clear() {
        Tt(this, Ce, "m", bt).call(this, "delete");
      }
    }
    St = Symbol.toStringTag, mt = function(e3) {
      var t3;
      const r3 = Tt(this, Ke, "f"), n3 = Tt(this, Ue, "f")[r3], o3 = Tt(this, Be, "f")[r3];
      return Tt(this, et, "f") && Tt(this, Ce, "m", yt).call(this, o3) ? o3.__abortController.abort(new Error("evicted")) : (Tt(this, Qe, "f") || Tt(this, tt, "f")) && (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, o3, n3, "evict"), Tt(this, tt, "f") && Tt(this, He, "f")?.push([o3, n3, "evict"])), Tt(this, ut, "f").call(this, r3), e3 && (Tt(this, Ue, "f")[r3] = void 0, Tt(this, Be, "f")[r3] = void 0, Tt(this, We, "f").push(r3)), 1 === Tt(this, Fe, "f") ? (xt(this, Ke, xt(this, Ze, 0, "f"), "f"), Tt(this, We, "f").length = 0) : xt(this, Ke, Tt(this, Le, "f")[r3], "f"), Tt(this, ze, "f").delete(n3), xt(this, Fe, (t3 = Tt(this, Fe, "f"), --t3), "f"), r3;
    }, gt = function(e3, t3, r3, n3) {
      const o3 = void 0 === t3 ? void 0 : Tt(this, Be, "f")[t3];
      if (Tt(this, Ce, "m", yt).call(this, o3)) return o3;
      const s3 = new At(), { signal: i3 } = r3;
      i3?.addEventListener("abort", () => s3.abort(i3.reason), { signal: s3.signal });
      const a3 = { signal: s3.signal, options: r3, context: n3 }, c2 = (n4, o4 = false) => {
        const { aborted: i4 } = s3.signal, c3 = r3.ignoreFetchAbort && void 0 !== n4;
        if (r3.status && (i4 && !o4 ? (r3.status.fetchAborted = true, r3.status.fetchError = s3.signal.reason, c3 && (r3.status.fetchAbortIgnored = true)) : r3.status.fetchResolved = true), i4 && !c3 && !o4) return u2(s3.signal.reason);
        const d3 = l2, p2 = Tt(this, Be, "f")[t3];
        return (p2 === l2 || c3 && o4 && void 0 === p2) && (void 0 === n4 ? void 0 !== d3.__staleWhileFetching ? Tt(this, Be, "f")[t3] = d3.__staleWhileFetching : Tt(this, Ce, "m", wt).call(this, e3, "fetch") : (r3.status && (r3.status.fetchUpdated = true), this.set(e3, n4, a3.options))), n4;
      }, u2 = (n4) => {
        const { aborted: o4 } = s3.signal, i4 = o4 && r3.allowStaleOnFetchAbort, a4 = i4 || r3.allowStaleOnFetchRejection, c3 = a4 || r3.noDeleteOnFetchRejection, u3 = l2;
        if (Tt(this, Be, "f")[t3] === l2) {
          !c3 || void 0 === u3.__staleWhileFetching ? Tt(this, Ce, "m", wt).call(this, e3, "fetch") : i4 || (Tt(this, Be, "f")[t3] = u3.__staleWhileFetching);
        }
        if (a4) return r3.status && void 0 !== u3.__staleWhileFetching && (r3.status.returnedStale = true), u3.__staleWhileFetching;
        if (u3.__returned === u3) throw n4;
      };
      r3.status && (r3.status.fetchDispatched = true);
      const l2 = new Promise((t4, n4) => {
        const i4 = Tt(this, Je, "f")?.call(this, e3, o3, a3);
        i4 && i4 instanceof Promise && i4.then((e4) => t4(void 0 === e4 ? void 0 : e4), n4), s3.signal.addEventListener("abort", () => {
          r3.ignoreFetchAbort && !r3.allowStaleOnFetchAbort || (t4(void 0), r3.allowStaleOnFetchAbort && (t4 = (e4) => c2(e4, true)));
        });
      }).then(c2, (e4) => (r3.status && (r3.status.fetchRejected = true, r3.status.fetchError = e4), u2(e4))), d2 = Object.assign(l2, { __abortController: s3, __staleWhileFetching: o3, __returned: void 0 });
      return void 0 === t3 ? (this.set(e3, d2, { ...a3.options, status: void 0 }), t3 = Tt(this, ze, "f").get(e3)) : Tt(this, Be, "f")[t3] = d2, d2;
    }, yt = function(e3) {
      if (!Tt(this, et, "f")) return false;
      const t3 = e3;
      return !!t3 && t3 instanceof Promise && t3.hasOwnProperty("__staleWhileFetching") && t3.__abortController instanceof At;
    }, _t = function(e3, t3) {
      Tt(this, Ve, "f")[t3] = e3, Tt(this, Le, "f")[e3] = t3;
    }, vt = function(e3) {
      e3 !== Tt(this, Ze, "f") && (e3 === Tt(this, Ke, "f") ? xt(this, Ke, Tt(this, Le, "f")[e3], "f") : Tt(this, Ce, "m", _t).call(this, Tt(this, Ve, "f")[e3], Tt(this, Le, "f")[e3]), Tt(this, Ce, "m", _t).call(this, Tt(this, Ze, "f"), e3), xt(this, Ze, e3, "f"));
    }, wt = function(e3, t3) {
      var r3;
      let n3 = false;
      if (0 !== Tt(this, Fe, "f")) {
        const o3 = Tt(this, ze, "f").get(e3);
        if (void 0 !== o3) if (n3 = true, 1 === Tt(this, Fe, "f")) Tt(this, Ce, "m", bt).call(this, t3);
        else {
          Tt(this, ut, "f").call(this, o3);
          const n4 = Tt(this, Be, "f")[o3];
          if (Tt(this, Ce, "m", yt).call(this, n4) ? n4.__abortController.abort(new Error("deleted")) : (Tt(this, Qe, "f") || Tt(this, tt, "f")) && (Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, n4, e3, t3), Tt(this, tt, "f") && Tt(this, He, "f")?.push([n4, e3, t3])), Tt(this, ze, "f").delete(e3), Tt(this, Ue, "f")[o3] = void 0, Tt(this, Be, "f")[o3] = void 0, o3 === Tt(this, Ze, "f")) xt(this, Ze, Tt(this, Ve, "f")[o3], "f");
          else if (o3 === Tt(this, Ke, "f")) xt(this, Ke, Tt(this, Le, "f")[o3], "f");
          else {
            const e4 = Tt(this, Ve, "f")[o3];
            Tt(this, Le, "f")[e4] = Tt(this, Le, "f")[o3];
            const t4 = Tt(this, Le, "f")[o3];
            Tt(this, Ve, "f")[t4] = Tt(this, Ve, "f")[o3];
          }
          xt(this, Fe, (r3 = Tt(this, Fe, "f"), --r3), "f"), Tt(this, We, "f").push(o3);
        }
      }
      if (Tt(this, tt, "f") && Tt(this, He, "f")?.length) {
        const e4 = Tt(this, He, "f");
        let t4;
        for (; t4 = e4?.shift(); ) Tt(this, Me, "f")?.call(this, ...t4);
      }
      return n3;
    }, bt = function(e3) {
      for (const t3 of Tt(this, Ce, "m", ft).call(this, { allowStale: true })) {
        const r3 = Tt(this, Be, "f")[t3];
        if (Tt(this, Ce, "m", yt).call(this, r3)) r3.__abortController.abort(new Error("deleted"));
        else {
          const n3 = Tt(this, Ue, "f")[t3];
          Tt(this, Qe, "f") && Tt(this, Re, "f")?.call(this, r3, n3, e3), Tt(this, tt, "f") && Tt(this, He, "f")?.push([r3, n3, e3]);
        }
      }
      if (Tt(this, ze, "f").clear(), Tt(this, Be, "f").fill(void 0), Tt(this, Ue, "f").fill(void 0), Tt(this, Xe, "f") && Tt(this, Ge, "f") && (Tt(this, Xe, "f").fill(0), Tt(this, Ge, "f").fill(0)), Tt(this, Ye, "f") && Tt(this, Ye, "f").fill(0), xt(this, Ke, 0, "f"), xt(this, Ze, 0, "f"), Tt(this, We, "f").length = 0, xt(this, qe, 0, "f"), xt(this, Fe, 0, "f"), Tt(this, tt, "f") && Tt(this, He, "f")) {
        const e4 = Tt(this, He, "f");
        let t3;
        for (; t3 = e4?.shift(); ) Tt(this, Me, "f")?.call(this, ...t3);
      }
    };
    const Dt = "undefined" != typeof process && "win32" === process.platform, Ft = new jt({ max: 512 });
    function qt(e3) {
      try {
        return p.statSync(e3);
      } catch {
        return null;
      }
    }
    function zt(e3, t3) {
      if (e3.match(/[\\/]/)) return e3;
      const r3 = t3 ? `${e3}\0${t3.source}\0${t3.flags}` : e3, o3 = Ft.get(r3);
      if (void 0 !== o3) return o3;
      const s3 = n2.join(".", e3);
      if (qt(s3)) return Ft.set(r3, s3), s3;
      const i3 = process.env.PATH.split(Dt ? ";" : ":");
      for (const o4 of i3) {
        const s4 = n2.join(o4, e3);
        if (qt(s4) && (!t3 || t3.test(s4))) return Ft.set(r3, s4), s4;
      }
      return Ft.set(r3, e3), e3;
    }
    function Ut(e3, t3, r3) {
      if ("win32" !== process.platform) return { cmd: zt(e3), args: t3 };
      if (!p.existsSync(e3)) {
        const n3 = [".exe", ".bat", ".cmd", ".ps1"], o3 = e3.toLowerCase();
        if (n3.some((e4) => o3.endsWith(e4))) {
          const n4 = zt(e3, r3);
          if (p.existsSync(n4)) return Ut(n4, t3, r3);
        }
        for (const o4 of n3) {
          const n4 = zt(`${e3}${o4}`, r3);
          if (p.existsSync(n4)) return Ut(n4, t3, r3);
        }
      }
      if (e3.match(/\.ps1$/i)) {
        return { cmd: n2.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"), args: ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", e3].concat(t3) };
      }
      if (e3.match(/\.(bat|cmd)$/i)) {
        return { cmd: n2.join(process.env.SYSTEMROOT, "System32", "cmd.exe"), args: ["/C", e3, ...t3] };
      }
      if (e3.match(/\.(js)$/i)) {
        return { cmd: process.execPath, args: [e3].concat(t3) };
      }
      return { cmd: e3, args: t3 };
    }
    class Bt extends Error {
      constructor(e3, t3, r3, n3, o3, s3) {
        super(e3), this.name = "SpawnError", this.exitCode = t3, this.code = t3, this.stdout = o3, this.stderr = s3, this.command = r3, this.args = n3, Error.captureStackTrace && Error.captureStackTrace(this, Bt);
      }
    }
    function Lt(e3, t3, r3) {
      r3 = r3 ?? {};
      let n3 = new kt.Observable((n4) => {
        const { encoding: o3, timeout: s3, ...a3 } = r3, { cmd: c2, args: u2 } = Ut(e3, t3), l2 = a3.stdin;
        l2 && (delete a3.stdin, a3.stdio ??= ["pipe", "pipe", "pipe"]), a3.stdio ??= ["ignore", "pipe", "pipe"];
        const d2 = (0, i2.spawn)(c2, u2, a3);
        r3.processInfo && void 0 !== d2.pid && (r3.processInfo.pid = d2.pid);
        let p2 = null;
        s3 && s3 > 0 && (p2 = setTimeout(() => {
          d2.killed || d2.kill();
          const e4 = new Bt(`Process timed out after ${s3}ms`, -1, c2, u2);
          n4.error(e4);
        }, s3));
        const f2 = (t4) => (s4) => {
          if (s4.length < 1) return;
          r3.echoOutput && ("stdout" === t4 ? process.stdout : process.stderr).write(s4);
          let i3 = "<< String sent back was too long >>";
          try {
            i3 = "string" == typeof s4 ? s4.toString() : s4.toString(o3 || "utf8");
          } catch {
            i3 = `<< Lost chunk of process output for ${e3} - length was ${s4.length}>>`;
          }
          n4.next({ source: t4, text: i3 });
        }, h2 = new kt.Subscription();
        if (l2) if (d2.stdin) {
          const e4 = d2.stdin;
          h2.add(l2.subscribe({ next: (t4) => e4.write(t4), error: n4.error.bind(n4), complete: () => e4.end() }));
        } else n4.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let m2 = null, g2 = null, y2 = false;
        return d2.stdout ? (g2 = new kt.AsyncSubject(), d2.stdout.on("data", f2("stdout")), d2.stdout.on("close", () => {
          g2.next(true), g2.complete();
        })) : g2 = (0, kt.of)(true), d2.stderr ? (m2 = new kt.AsyncSubject(), d2.stderr.on("data", f2("stderr")), d2.stderr.on("close", () => {
          m2.next(true), m2.complete();
        })) : m2 = (0, kt.of)(true), d2.on("error", (e4) => {
          y2 = true, p2 && clearTimeout(p2), n4.error(e4);
        }), d2.on("close", (e4) => {
          y2 = true, p2 && clearTimeout(p2);
          const t4 = (0, kt.merge)(g2, m2).pipe((0, Et.TS)((e5) => true, true));
          0 === e4 ? t4.subscribe(() => n4.complete()) : t4.subscribe(() => {
            const t5 = new Bt(`Process failed with exit code: ${e4}`, e4, c2, u2);
            n4.error(t5);
          });
        }), h2.add(new kt.Subscription(() => {
          y2 || (p2 && clearTimeout(p2), d2.kill());
        })), h2;
      });
      if (r3.retries && r3.retries > 0) {
        const e4 = r3.retries, t4 = r3.retryDelay ?? 1e3;
        n3 = n3.pipe((0, Et.L5)({ count: e4, delay: (e5, r4) => {
          if (e5 instanceof Bt && 0 !== e5.exitCode) return (0, kt.timer)(t4);
          throw e5;
        } }));
      }
      return r3.split ? n3 : n3.pipe((0, Et.Tj)((e4) => e4?.text));
    }
    function Vt(e3, t3, r3) {
      return r3?.split ? (n3 = Lt(e3, t3, { ...r3 ?? {}, split: true }), new Promise((e4, t4) => {
        let r4 = "", o3 = "";
        n3.subscribe({ next: (e5) => {
          "stdout" === e5.source ? r4 += e5.text : o3 += e5.text;
        }, error: (e5) => {
          if (e5 instanceof Bt) {
            const n4 = new Bt(`${r4}
${e5.message}`, e5.exitCode, e5.command, e5.args, r4, o3);
            t4(n4);
          } else {
            const n4 = new Error(`${r4}
${e5 instanceof Error ? e5.message : String(e5)}`);
            t4(n4);
          }
        }, complete: () => e4([r4, o3]) });
      })) : (function(e4) {
        return new Promise((t4, r4) => {
          let n4 = "";
          e4.subscribe({ next: (e5) => {
            n4 += e5;
          }, error: (e5) => {
            if (e5 instanceof Bt) {
              const t5 = new Bt(`${n4}
${e5.message}`, e5.exitCode, e5.command, e5.args, n4, e5.stderr);
              r4(t5);
            } else {
              const t5 = new Error(`${n4}
${e5 instanceof Error ? e5.message : String(e5)}`);
              r4(t5);
            }
          }, complete: () => t4(n4) });
        });
      })(Lt(e3, t3, { ...r3 ?? {}, split: false }));
      var n3;
    }
    function Kt(...e3) {
      return e3.some((e4) => true === e4);
    }
    function Zt(...e3) {
      const t3 = /* @__PURE__ */ new Set();
      for (const r3 of e3) if (r3) for (const e4 of r3) t3.add(Wt(e4));
      return [...t3];
    }
    function Wt(e3) {
      const t3 = e3.replace(/\\/g, "/").replace(/\/+$/, "");
      return "" === t3 ? "/" : /^[a-zA-Z]:$/.test(t3) ? `${t3}/` : t3;
    }
    function Ht(...e3) {
      const t3 = e3.filter((e4) => void 0 !== e4);
      if (0 === t3.length) return;
      const r3 = {};
      for (const e4 of t3) for (const [t4, n3] of Object.entries(e4)) {
        const e5 = r3[t4];
        if (e5) {
          const o3 = new Set(e5);
          for (const e6 of n3) o3.has(e6) && o3.delete(e6), o3.add(e6);
          r3[t4] = [...o3];
        } else r3[t4] = [...n3];
      }
      return 0 !== Object.keys(r3).length ? r3 : void 0;
    }
    function Yt(...e3) {
      for (let t3 = e3.length - 1; t3 >= 0; t3--) if (void 0 !== e3[t3]) return e3[t3];
    }
    async function Gt(e3, t3, r3 = {}) {
      if (!t3) return { policy: { type: "insecure_none" } };
      if ((0, P.$f)(e3)) return Xt(t3, { workspaceDir: e3 });
      const s3 = r3.stat ?? o2.stat, i3 = r3.spawnPromise ?? Vt, a3 = await s3((0, n2.join)(e3, ".git")).then((e4) => e4, () => null), c2 = a3?.isFile() ?? false, u2 = null !== a3;
      if ("workspace_readwrite" === (l2 = t3, l2.teamAdmin?.type ?? l2.perRepo?.type ?? l2.perUser?.type ?? "insecure_none")) {
        let r4 = e3;
        if (c2) {
          const o3 = await i3("git", ["rev-parse", "--git-common-dir"], { cwd: e3 }).then((t4) => (0, n2.resolve)(e3, t4.trim()), () => null);
          if (o3) {
            r4 = (0, n2.dirname)(o3);
            const s4 = t3.perRepo, i4 = s4?.ignoreMapping;
            t3 = { ...t3, perRepo: { ...s4, type: "workspace_readwrite", additionalReadwritePaths: [...s4?.additionalReadwritePaths ?? [], o3], ignoreMapping: i4, writeProtectionMapping: Ht(s4?.writeProtectionMapping, j(e3)) } };
          }
        }
        if (u2) return Xt(t3, { workspaceDir: e3, gitDirParent: r4 });
      }
      var l2;
      return Xt(t3, { workspaceDir: e3 });
    }
    function Xt(e3, t3) {
      const r3 = (function(e4) {
        const { perUser: t4, perRepo: r4, teamAdmin: n3 } = e4, o3 = [t4, r4, n3].filter((e5) => void 0 !== e5);
        if (0 === o3.length) return;
        const s3 = o3[0].type;
        for (const e5 of o3) if (e5.type !== s3) throw new Error(`Cannot merge policies of different types: found "${s3}" and "${e5.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        return s3;
      })(e3);
      if (void 0 === r3) return tr(e3, t3);
      switch (r3) {
        case "workspace_readwrite":
          return tr(e3, t3);
        case "workspace_readonly":
          return (function(e4, t4) {
            const r4 = t4?.debug, n3 = Qt(e4, t4), o3 = { policy: er({ type: "workspace_readonly", disableTmpWrite: n3.disableTmpWrite, networkPolicyStrict: n3.networkPolicyStrict, readBoundary: n3.readBoundary, additionalReadPaths: n3.additionalReadPaths, additionalReadonlyPaths: n3.additionalReadonlyPaths, networkPolicy: n3.networkPolicy, debugOutputDir: n3.debugOutputDir, captureDenies: n3.captureDenies, enableSharedBuildCache: n3.enableSharedBuildCache, ignoreMapping: n3.ignoreMapping, writeProtectionMapping: n3.writeProtectionMapping }, "workspace_readonly") };
            r4 && (o3.debug = { fieldSources: n3.fieldSources });
            return o3;
          })(e3, t3);
        case "insecure_none":
          return (function(e4, t4) {
            const { perUser: r4, perRepo: n3, teamAdmin: o3 } = e4, s3 = t4?.debug, i3 = {}, a3 = Kt(r4?.allowlistEscalated, n3?.allowlistEscalated, o3?.allowlistEscalated), c2 = Yt(r4?.debugOutputDir, n3?.debugOutputDir, o3?.debugOutputDir), u2 = Kt(r4?.captureDenies, n3?.captureDenies, o3?.captureDenies), l2 = Yt(r4?.enableSharedBuildCache, n3?.enableSharedBuildCache, o3?.enableSharedBuildCache), d2 = { type: "insecure_none", allowlistEscalated: a3 || void 0, debugOutputDir: c2, captureDenies: u2 || void 0, enableSharedBuildCache: l2 }, p2 = Object.fromEntries(Object.entries(d2).filter(([e5, t5]) => void 0 !== t5));
            p2.type = "insecure_none";
            const f2 = { policy: p2 };
            s3 && (f2.debug = { fieldSources: i3 });
            return f2;
          })(e3, t3);
        default:
          throw new Error(`Unknown policy type: ${r3}`);
      }
    }
    function Qt(e3, t3) {
      const r3 = t3?.debug, { perUser: n3, perRepo: o3, teamAdmin: s3 } = e3, i3 = t3?.workspaceDir ?? process.cwd(), a3 = F(i3), c2 = {}, u2 = [n3, o3, s3], l2 = ["perUser", "perRepo", "teamAdmin", "hardcoded"], d2 = (e4, t4) => {
        r3 && (c2[e4] = l2[t4] ?? "unknown");
      }, p2 = Kt(n3?.disableTmpWrite, o3?.disableTmpWrite, s3?.disableTmpWrite);
      for (let e4 = u2.length - 1; e4 >= 0; e4--) if (true === u2[e4]?.disableTmpWrite) {
        d2("disableTmpWrite", e4);
        break;
      }
      const f2 = Kt(n3?.networkPolicyStrict, o3?.networkPolicyStrict, s3?.networkPolicyStrict, a3.networkPolicyStrict);
      a3.networkPolicyStrict && d2("networkPolicyStrict", 3);
      const h2 = Yt(n3?.readBoundary, o3?.readBoundary, s3?.readBoundary) ?? "system", m2 = Yt(n3?.additionalReadPaths, o3?.additionalReadPaths), g2 = false === s3?.allowUserOverrideReadPaths ? Zt(s3.additionalReadPaths) : Zt(m2, s3?.additionalReadPaths), y2 = "workspace" === h2 ? g2 : void 0, _2 = Zt(n3?.additionalReadonlyPaths, o3?.additionalReadonlyPaths, s3?.additionalReadonlyPaths, a3.additionalReadonlyPaths), v2 = _2.length > 0 ? _2 : void 0;
      let w2 = (function(...e4) {
        const t4 = e4.filter((e5) => void 0 !== e5);
        if (0 === t4.length) return;
        let r4;
        for (const e5 of t4) {
          if ("deny" === e5.default) {
            r4 = "deny";
            break;
          }
          "allow" === e5.default && void 0 === r4 && (r4 = "allow");
        }
        const n4 = /* @__PURE__ */ new Set();
        for (const e5 of t4) if (e5.deny) for (const t5 of e5.deny) n4.add(t5);
        const o4 = /* @__PURE__ */ new Set();
        for (const e5 of t4) if (e5.allow) for (const t5 of e5.allow) o4.add(t5);
        const s4 = o4.size > 0 ? [...o4] : void 0;
        let i4;
        for (let e5 = t4.length - 1; e5 >= 0; e5--) if (void 0 !== t4[e5].logging) {
          i4 = t4[e5].logging;
          break;
        }
        const a4 = { version: 1 };
        return void 0 !== r4 && (a4.default = r4), void 0 !== s4 && (a4.allow = s4), n4.size > 0 && (a4.deny = [...n4]), void 0 !== i4 && (a4.logging = i4), void 0 !== a4.default || void 0 !== a4.allow && 0 !== a4.allow.length || void 0 !== a4.deny && 0 !== a4.deny.length || void 0 !== a4.logging ? a4 : void 0;
      })(n3?.networkPolicy, o3?.networkPolicy, s3?.networkPolicy, a3.networkPolicy);
      const b2 = s3?.networkPolicy?.allow;
      void 0 !== b2 && b2.length > 0 && void 0 !== w2 && (w2 = { ...w2, allow: [...b2] }, r3 && (c2["networkPolicy.allow"] = "teamAdmin (replace)"));
      const S2 = void 0 !== (k2 = w2) ? k2 : { version: 1, default: "deny" };
      var k2;
      const E2 = Yt(n3?.debugOutputDir, o3?.debugOutputDir, s3?.debugOutputDir), x2 = Kt(n3?.captureDenies, o3?.captureDenies, s3?.captureDenies), T2 = Yt(n3?.enableSharedBuildCache, o3?.enableSharedBuildCache, s3?.enableSharedBuildCache), O2 = Ht(n3?.ignoreMapping, o3?.ignoreMapping, s3?.ignoreMapping, a3.ignoreMapping), P2 = (function(e4) {
        const t4 = M.filter((e5) => "git" === e5.type).map((e5) => e5.pattern);
        return { [e4]: t4 };
      })(t3?.gitDirParent ?? i3);
      return { disableTmpWrite: p2 || void 0, networkPolicyStrict: f2, readBoundary: h2, additionalReadPaths: y2, additionalReadonlyPaths: v2, networkPolicy: S2, debugOutputDir: E2, captureDenies: x2 || void 0, enableSharedBuildCache: T2, ignoreMapping: O2, writeProtectionMapping: Ht(n3?.writeProtectionMapping, o3?.writeProtectionMapping, s3?.writeProtectionMapping, a3.writeProtectionMapping, P2), fieldSources: c2 };
    }
    function er(e3, t3) {
      const r3 = Object.fromEntries(Object.entries(e3).filter(([e4, t4]) => void 0 !== t4));
      return r3.type = t3, r3;
    }
    function tr(e3, t3) {
      const { perUser: r3, perRepo: n3, teamAdmin: o3 } = e3, s3 = t3?.debug, i3 = Qt(e3, t3), a3 = Zt(r3?.additionalReadwritePaths, n3?.additionalReadwritePaths, o3?.additionalReadwritePaths), c2 = { policy: er({ type: "workspace_readwrite", disableTmpWrite: i3.disableTmpWrite, networkPolicyStrict: i3.networkPolicyStrict, readBoundary: i3.readBoundary, additionalReadPaths: i3.additionalReadPaths, additionalReadwritePaths: a3.length > 0 ? a3 : void 0, additionalReadonlyPaths: i3.additionalReadonlyPaths, networkPolicy: i3.networkPolicy, debugOutputDir: i3.debugOutputDir, captureDenies: i3.captureDenies, enableSharedBuildCache: i3.enableSharedBuildCache, ignoreMapping: i3.ignoreMapping, writeProtectionMapping: i3.writeProtectionMapping }, "workspace_readwrite") };
      return s3 && (c2.debug = { fieldSources: i3.fieldSources }), c2;
    }
    process.platform;
    "function" == typeof SuppressedError && SuppressedError;
    "function" == typeof SuppressedError && SuppressedError;
    "function" == typeof SuppressedError && SuppressedError;
    "function" == typeof SuppressedError && SuppressedError;
    "function" == typeof SuppressedError && SuppressedError;
    "function" == typeof SuppressedError && SuppressedError;
    require("node:perf_hooks");
    var rr, nr;
    !(function(e3) {
      e3[e3.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e3[e3.EventLoopUtilization = 0.7] = "EventLoopUtilization";
    })(rr || (rr = {})), (function(e3) {
      e3[e3.SampleIntervalMs = 250] = "SampleIntervalMs", e3[e3.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
    })(nr || (nr = {}));
  }