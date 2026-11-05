// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25925 range:717553..832753
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25925: (e, t, r) => {
    "use strict";
    r.d(t, { BM: () => hr, Ls: () => or, SandboxUnsupportedError: () => Fe, Fn: () => pr, Ko: () => S, CG: () => dt, G6: () => dr, $b: () => ee, T6: () => re, Po: () => te, $6: () => ar, l7: () => lr, resolveSandboxPolicyForWorkspace: () => yt, spawnInSandbox: () => Ue, Xw: () => _ });
    var n = r(76760), o = r(73024), s = r(68505);
    const i = "undefined" != typeof process && "win32" === process.platform, a = new s.q({ max: 512 });
    function l(e2) {
      try {
        return o.statSync(e2);
      } catch {
        return null;
      }
    }
    function c(e2, t2) {
      if (e2.match(/[\\/]/)) return e2;
      const r2 = t2 ? `${e2}\0${t2.source}\0${t2.flags}` : e2, o2 = a.get(r2);
      if (void 0 !== o2) return o2;
      const s2 = n.join(".", e2);
      if (l(s2)) return a.set(r2, s2), s2;
      const c2 = process.env.PATH.split(i ? ";" : ":");
      for (const o3 of c2) {
        const s3 = n.join(o3, e2);
        if (l(s3) && (!t2 || t2.test(s3))) return a.set(r2, s3), s3;
      }
      return a.set(r2, e2), e2;
    }
    function u(e2, t2, r2) {
      if ("win32" !== process.platform) return { cmd: c(e2), args: t2 };
      if (!o.existsSync(e2)) {
        const n2 = [".exe", ".bat", ".cmd", ".ps1"], s2 = e2.toLowerCase();
        if (n2.some((e3) => s2.endsWith(e3))) {
          const n3 = c(e2, r2);
          if (o.existsSync(n3)) return u(n3, t2, r2);
        }
        for (const s3 of n2) {
          const n3 = c(`${e2}${s3}`, r2);
          if (o.existsSync(n3)) return u(n3, t2, r2);
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
    var d = r(51455), p = r(48161), h = r(98875), m = r(87199), f = r(91434), g = r(31421), y = r(57075);
    let v;
    function w(e2) {
      const t2 = Object.keys(e2).filter((e3) => "path" === e3.toLowerCase());
      if (0 !== t2.length) return "win32" === process.platform ? t2.find((e3) => "Path" === e3) ?? t2[0] : t2.find((e3) => "PATH" === e3) ?? t2[0];
    }
    function b(e2, t2) {
      const r2 = (0, n.dirname)(t2);
      if (!r2 || "." === r2) return e2;
      const o2 = (function(e3) {
        const t3 = w(e3);
        return void 0 !== t3 ? e3[t3] ?? "" : "";
      })(e2).split(n.delimiter).filter(Boolean);
      return (function(e3, t3) {
        const r3 = w(e3) ?? ("win32" === process.platform ? "Path" : "PATH"), n2 = { ...e3 };
        for (const e4 of Object.keys(n2)) e4 !== r3 && "path" === e4.toLowerCase() && delete n2[e4];
        return n2[r3] = t3, n2;
      })(e2, [r2, ...o2.filter((e3) => e3 !== r2)].join(n.delimiter));
    }
    function _(e2) {
      return v && (0, n.isAbsolute)(v) ? { ...b(e2, v), CURSOR_RIPGREP_PATH: v } : e2;
    }
    function S() {
      if (!v) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
      return v;
    }
    var x = r(73015);
    function k(e2) {
      const t2 = e2 || process.env, { ELECTRON_RUN_AS_NODE: r2, ...n2 } = t2;
      return n2;
    }
    const E = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];
    function T(e2) {
      const t2 = { ...e2 };
      for (const e3 of E) delete t2[e3];
      return t2;
    }
    var C = r(77598), I = r(68503);
    const A = "cursor-sandbox-cache";
    let P;
    function M() {
      return P || (P = (0, C.randomBytes)(16).toString("hex")), P;
    }
    function R(e2, t2) {
      const r2 = (0, o.lstatSync)(e2);
      return r2.isDirectory() && r2.uid === t2 && !(18 & r2.mode);
    }
    function O(e2) {
      try {
        (0, o.mkdirSync)(e2, { mode: 448 });
      } catch (e3) {
        if ("EEXIST" !== e3.code) throw e3;
      }
    }
    function D(e2, { create: t2 }) {
      const r2 = process.getuid?.();
      if (void 0 === r2) return;
      const o2 = (0, n.join)((0, p.tmpdir)(), `cursor-sandbox-${(0, I.r_)((0, n.resolve)(e2))}`);
      try {
        for (const e3 of [o2, (0, n.join)(o2, "tmp")]) if (t2 && O(e3), !R(e3, r2)) return;
        return o2;
      } catch {
        return;
      }
    }
    const N = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
    function F(e2 = (0, n.join)((0, p.tmpdir)(), A, M())) {
      return { NPM_CONFIG_CACHE: (0, n.join)(e2, "npm"), PNPM_STORE_PATH: (0, n.join)(e2, "pnpm-store"), GOCACHE: (0, n.join)(e2, "go-build"), GOMODCACHE: (0, n.join)(e2, "go-mod"), CARGO_TARGET_DIR: (0, n.join)(e2, "cargo-target"), PIP_CACHE_DIR: (0, n.join)(e2, "pip"), UV_CACHE_DIR: (0, n.join)(e2, "uv"), BUN_INSTALL_CACHE_DIR: (0, n.join)(e2, "bun"), YARN_CACHE_FOLDER: (0, n.join)(e2, "yarn"), npm_config_devdir: (0, n.join)(e2, "node-gyp"), PLAYWRIGHT_BROWSERS_PATH: (0, n.join)(e2, "playwright"), PUPPETEER_CACHE_DIR: (0, n.join)(e2, "puppeteer"), TURBO_CACHE_DIR: (0, n.join)(e2, "turbo"), GRADLE_USER_HOME: (0, n.join)(e2, "gradle"), CONDA_PKGS_DIRS: (0, n.join)(e2, "conda"), POETRY_CACHE_DIR: (0, n.join)(e2, "poetry"), GEM_SPEC_CACHE: (0, n.join)(e2, "gem-specs"), BUNDLE_PATH: (0, n.join)(e2, "bundle"), COMPOSER_HOME: (0, n.join)(e2, "composer"), HOMEBREW_CACHE: (0, n.join)(e2, "homebrew"), CYPRESS_CACHE_FOLDER: (0, n.join)(e2, "cypress"), NX_CACHE_DIRECTORY: (0, n.join)(e2, "nx"), NUGET_PACKAGES: (0, n.join)(e2, "nuget"), CCACHE_DIR: (0, n.join)(e2, "ccache"), CP_HOME_DIR: (0, n.join)(e2, "cocoapods") };
    }
    var L = r(37949), U = r(33002);
    r(86613);
    const B = [".local/bin", ".local/share/mise", ".local/share/pnpm", ".nvm", ".volta", ".asdf", ".pyenv", ".rbenv", ".rustup", ".cargo/bin", ".cargo/registry", ".cargo/git"], $ = ["bin", "sbin", "lib", "opt", "Cellar", "share", "Frameworks", "etc/gitconfig", "etc/openssl@3/cert.pem", "etc/openssl@3/openssl.cnf", "etc/ca-certificates"], q = (e2, t2) => t2.flatMap((t3) => $.map((r2) => ({ platform: e2, scope: "global", path: `${t3}/${r2}` }))), j = { linux: [".cache/node", ".cache/yarn"], darwin: [".cache/node", "Library/Caches/Yarn"] }, J = (e2) => [...B, ...j[e2]].map((t2) => ({ platform: e2, scope: "home-dir", path: t2 })), z = [{ platform: "linux", scope: "global", path: "/bin" }, { platform: "linux", scope: "global", path: "/sbin" }, { platform: "linux", scope: "global", path: "/usr/bin" }, { platform: "linux", scope: "global", path: "/usr/sbin" }, { platform: "linux", scope: "global", path: "/lib" }, { platform: "linux", scope: "global", path: "/lib64" }, { platform: "linux", scope: "global", path: "/usr/lib" }, { platform: "linux", scope: "global", path: "/usr/lib64" }, { platform: "linux", scope: "global", path: "/usr/libexec" }, { platform: "linux", scope: "global", path: "/usr/share" }, { platform: "linux", scope: "global", path: "/etc/ld.so.cache" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf.d" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs" }, { platform: "linux", scope: "global", path: "/etc/ssl/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/ssl/cert.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/ca-bundle.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs/ca-certificates.crt" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/certs" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/pki/ca-trust/extracted" }, { platform: "linux", scope: "global", path: "/etc/resolv.conf" }, { platform: "linux", scope: "global", path: "/etc/hosts" }, { platform: "linux", scope: "global", path: "/etc/nsswitch.conf" }, { platform: "linux", scope: "global", path: "/etc/gai.conf" }, { platform: "linux", scope: "global", path: "/etc/alternatives" }, { platform: "linux", scope: "global", path: "/etc/mime.types" }, { platform: "linux", scope: "global", path: "/etc/profile" }, { platform: "linux", scope: "global", path: "/etc/bash.bashrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshenv" }, { platform: "linux", scope: "global", path: "/etc/zsh/zprofile" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zlogin" }, { platform: "linux", scope: "global", path: "/etc/gitconfig" }, { platform: "linux", scope: "home", path: ".bashrc" }, { platform: "linux", scope: "home", path: ".bash_profile" }, { platform: "linux", scope: "home", path: ".profile" }, { platform: "linux", scope: "home", path: ".zshenv" }, { platform: "linux", scope: "home", path: ".zprofile" }, { platform: "linux", scope: "home", path: ".zshrc" }, { platform: "linux", scope: "home", path: ".zlogin" }, { platform: "linux", scope: "home", path: ".gitconfig" }, { platform: "linux", scope: "home", path: ".ssh/known_hosts" }, { platform: "linux", scope: "home", path: ".config/mise/config.toml" }, { platform: "linux", scope: "home-dir", path: ".cache/dotslash" }, ...J("linux"), ...q("linux", ["/usr/local", "/home/linuxbrew/.linuxbrew"]), { platform: "linux", scope: "global", path: "/usr/local/go" }, { platform: "linux", scope: "global", path: "/nix/store" }, { platform: "linux", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "linux", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/bin" }, { platform: "darwin", scope: "global", path: "/usr/bin" }, { platform: "darwin", scope: "global", path: "/usr/lib" }, { platform: "darwin", scope: "global", path: "/usr/libexec" }, { platform: "darwin", scope: "global", path: "/usr/share" }, { platform: "darwin", scope: "global", path: "/System/Library" }, { platform: "darwin", scope: "global", path: "/System/Cryptexes" }, { platform: "darwin", scope: "global", path: "/Library/Apple" }, { platform: "darwin", scope: "global", path: "/Library/Developer/CommandLineTools" }, { platform: "darwin", scope: "global", path: "/Applications/Xcode.app" }, { platform: "darwin", scope: "global", path: "/Library/Preferences/com.apple.dt.Xcode.plist" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/cert.pem" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/certs" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/openssl.cnf" }, { platform: "darwin", scope: "global", path: "/private/etc/hosts" }, { platform: "darwin", scope: "global", path: "/private/etc/resolv.conf" }, { platform: "darwin", scope: "global", path: "/private/etc/apache2/mime.types" }, { platform: "darwin", scope: "global", path: "/etc/profile" }, { platform: "darwin", scope: "global", path: "/etc/bashrc" }, { platform: "darwin", scope: "global", path: "/etc/zshenv" }, { platform: "darwin", scope: "global", path: "/etc/zprofile" }, { platform: "darwin", scope: "global", path: "/etc/zshrc" }, { platform: "darwin", scope: "global", path: "/etc/zlogin" }, { platform: "darwin", scope: "global", path: "/etc/gitconfig" }, { platform: "darwin", scope: "home", path: ".bashrc" }, { platform: "darwin", scope: "home", path: ".bash_profile" }, { platform: "darwin", scope: "home", path: ".profile" }, { platform: "darwin", scope: "home", path: ".zshenv" }, { platform: "darwin", scope: "home", path: ".zprofile" }, { platform: "darwin", scope: "home", path: ".zshrc" }, { platform: "darwin", scope: "home", path: ".zlogin" }, { platform: "darwin", scope: "home", path: ".gitconfig" }, { platform: "darwin", scope: "home", path: ".ssh/known_hosts" }, { platform: "darwin", scope: "home", path: "Library/Preferences/.GlobalPreferences.plist" }, { platform: "darwin", scope: "home", path: ".config/mise/config.toml" }, { platform: "darwin", scope: "home-dir", path: "Library/Python" }, { platform: "darwin", scope: "home-dir", path: "Library/Caches/dotslash" }, ...J("darwin"), ...q("darwin", ["/opt/homebrew", "/usr/local"]), { platform: "darwin", scope: "global", path: "/nix/store" }, { platform: "darwin", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "darwin", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/dev/null" }, { platform: "darwin", scope: "global", path: "/dev/zero" }, { platform: "darwin", scope: "global", path: "/dev/random" }, { platform: "darwin", scope: "global", path: "/dev/urandom" }];
    const H = [{ type: "workspace", pattern: "**/.cursor/*.json" }, { type: "workspace", pattern: "**/.cursor/**/*.json" }, { type: "workspace", pattern: "**/.cursor/.workspace-trusted" }, { type: "workspace", pattern: "!**/.cursor/rules" }, { type: "workspace", pattern: "!**/.cursor/rules/**" }, { type: "workspace", pattern: "!**/.cursor/commands" }, { type: "workspace", pattern: "!**/.cursor/commands/**" }, { type: "workspace", pattern: "!**/.cursor/worktrees" }, { type: "workspace", pattern: "!**/.cursor/worktrees/**" }, { type: "workspace", pattern: "!**/.cursor/skills" }, { type: "workspace", pattern: "!**/.cursor/skills/**" }, { type: "workspace", pattern: "!**/.cursor/agents" }, { type: "workspace", pattern: "!**/.cursor/agents/**" }, { type: "workspace", pattern: "**/.claude/*.json" }, { type: "workspace", pattern: "**/.claude/**/*.json" }, { type: "workspace", pattern: "**/.vscode/**" }, { type: "workspace", pattern: "**/.idea/**" }, { type: "workspace", pattern: "**/.venv/" }, { type: "workspace", pattern: "**/venv/" }, { type: "workspace", pattern: "**/*.code-workspace" }, { type: "workspace", pattern: "**/.cursorignore" }, { type: "workspace", pattern: "**/.workspace-trusted" }, { type: "workspace", pattern: "**/.cursor/**/cli.json" }, { type: "workspace", pattern: "**/.cursor/**/cli-config.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp-approvals.json" }, { type: "workspace", pattern: "**/.cursor/**/permissions.json" }, { type: "git", pattern: "**/.git/hooks/**" }, { type: "git", pattern: "**/.git/config" }, { type: "git", pattern: "**/.git/config.worktree" }, { type: "git", pattern: "**/.git/info/attributes" }, { type: "git", pattern: "**/.git/commondir" }, { type: "git", pattern: "**/.git/worktrees/*/commondir" }, { type: "worktree", pattern: ".git" }, { type: "absolute", pattern: "/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/ca-bundle.pem" }, { type: "absolute", pattern: "/private/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/certs/ca-certificates.crt" }, { type: "absolute", pattern: "/etc/pki/tls/certs/ca-bundle.crt" }, { type: "absolute", pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem" }, { type: "home", pattern: ".cursor/sandbox-policies" }];
    H.filter((e2) => "git" === e2.type).map((e2) => e2.pattern), H.filter((e2) => "workspace" === e2.type && e2.pattern.startsWith("!") && !e2.pattern.endsWith("/**")).map((e2) => e2.pattern.replace(/^!(\*\*\/)?/, ""));
    function W(e2) {
      const t2 = H.filter((e3) => "workspace" === e3.type).map((e3) => e3.pattern);
      return { [e2]: t2 };
    }
    function G(e2) {
      const t2 = H.filter((e3) => "worktree" === e3.type).map((e3) => e3.pattern);
      return { [e2]: t2 };
    }
    const Y = [];
    function V(e2) {
      const t2 = (function() {
        if (0 !== Y.length) return { version: 1, deny: [...Y] };
      })(), r2 = p.homedir(), o2 = [];
      for (const e3 of H) switch (e3.type) {
        case "workspace":
        case "git":
        case "worktree":
          break;
        case "absolute":
          o2.push(e3.pattern);
          break;
        case "home":
          r2.length > 0 && o2.push((0, n.join)(r2, e3.pattern));
          break;
        default: {
          const t3 = e3.type;
          throw new Error(`Unknown entry type: ${t3}`);
        }
      }
      return { type: "workspace_readwrite", additionalReadonlyPaths: o2, writeProtectionMapping: W(e2), ...t2 && { networkPolicy: t2 }, networkPolicyStrict: true };
    }
    /* @__PURE__ */ new Map();
    "win32" === process.platform || process.platform;
    const K = g.execFile, Z = /* @__PURE__ */ new WeakMap();
    async function X(e2) {
      const t2 = Z.get(e2);
      return t2 ? (r2 = t2.pid, n2 = t2.startTime, o2 = t2.unrelatedPids, new Promise((e3) => {
        try {
          const t3 = /* @__PURE__ */ new Date(), s2 = ["show", "--style", "ndjson", "--predicate", 'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"', "--last", Math.ceil((t3.getTime() - n2.getTime()) / 1e3).toString()];
          (0, x.D9)(K, "/usr/bin/log", s2, (t4, n3) => {
            if (t4) return void e3([{ raw: t4.message }]);
            const s3 = n3.split(/\r?\n/).filter((e4) => e4.trim().length > 0), i2 = [];
            for (const e4 of s3) try {
              const t5 = JSON.parse(e4), n4 = t5?.eventMessage ?? "";
              if (!n4 || "string" != typeof n4) continue;
              const s4 = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(n4);
              if (s4) {
                const [, e5, a3, l2, c2, u2, d2] = s4, p2 = Number(a3);
                i2.push({ timestamp: t5.timestamp, processName: e5.trim(), pid: p2, decision: l2.toLowerCase(), decisionCode: Number(c2), operation: u2, target: d2, duplicateCount: 1, raw: n4, relationship: Q(p2, r2, o2) });
                continue;
              }
              const a2 = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(n4);
              if (a2) {
                const e5 = Number(a2[1]), s5 = a2[2], l2 = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(s5);
                if (l2) {
                  const [, s6, a3, c2, u2, d2, p2] = l2, h2 = Number(a3);
                  i2.push({ timestamp: t5.timestamp, processName: s6.trim(), pid: h2, decision: c2.toLowerCase(), decisionCode: Number(u2), operation: d2, target: p2, duplicateCount: e5, raw: n4, relationship: Q(h2, r2, o2) });
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
      var r2, n2, o2;
    }
    function Q(e2, t2, r2) {
      return e2 === t2 ? "related" : r2?.has(e2) ? "probably_unrelated" : "maybe_related";
    }
    function ee(e2) {
      return void 0 !== e2 && ("allow" === e2.default || void 0 !== e2.allow && e2.allow.length > 0);
    }
    function te() {
      return { version: 1, default: "deny" };
    }
    function re() {
      return { version: 1, default: "allow" };
    }
    const ne = "sandbox-policies", oe = "CURSOR_SANDBOX_POLICY_DIR";
    const se = 36e5, ie = 9e5;
    let ae = 0;
    function le() {
      const e2 = (function() {
        const e3 = process.env[oe]?.trim();
        return e3 ? n.resolve(e3) : n.resolve(n.join(p.homedir(), ".cursor", ne));
      })();
      o.mkdirSync(e2, { recursive: true, mode: 448 });
      try {
        o.chmodSync(e2, 448);
      } catch {
      }
      const t2 = Date.now();
      return t2 - ae >= ie && (ae = t2, (function(e3) {
        let t3;
        try {
          t3 = o.readdirSync(e3);
        } catch {
          return;
        }
        const r2 = Date.now();
        for (const s2 of t3) {
          if (!s2.startsWith("sandbox-policy-")) continue;
          const t4 = n.join(e3, s2);
          try {
            const e4 = o.statSync(t4);
            if (!e4.isFile()) continue;
            r2 - e4.mtimeMs > se && o.unlinkSync(t4);
          } catch {
          }
        }
      })(e2)), e2;
    }
    function ce(e2) {
      const t2 = le(), r2 = C.randomBytes(8).toString("hex"), s2 = n.join(t2, `sandbox-policy-${r2}`);
      return o.writeFileSync(s2, e2, { encoding: "utf-8", mode: 384 }), s2;
    }
    const ue = "darwin" === process.platform, de = "linux" === process.platform, pe = (0, L.h)("shell-exec:sandbox");
    function he(e2) {
      const t2 = le();
      return e2 && 0 !== e2.length ? e2.includes(t2) ? e2 : [...e2, t2] : [t2];
    }
    let me, fe = true;
    function ge() {
      return me;
    }
    function ye(e2) {
      "linux" === process.platform && Object.assign(e2, _(e2));
    }
    let ve = null, we = null, be = null, _e = null;
    function Se(e2 = process.platform) {
      const t2 = [], r2 = /* @__PURE__ */ new Set(), s2 = {};
      try {
        s2.ripgrep = S();
      } catch {
      }
      for (const i2 of (function(e3 = process.platform, t3 = p.homedir(), r3 = {}) {
        const s3 = [];
        for (const i3 of z) {
          if (i3.platform !== e3) continue;
          if ("global" === i3.scope) {
            s3.push(i3.path);
            continue;
          }
          const a2 = "bundled" === i3.scope ? r3[i3.path] : (0, n.join)(t3, i3.path);
          if (a2) try {
            let e4;
            switch (i3.scope) {
              case "home":
                e4 = (0, o.lstatSync)(a2).isFile();
                break;
              case "home-dir":
                e4 = (0, o.lstatSync)(a2).isDirectory();
                break;
              case "bundled":
                e4 = (0, o.statSync)(a2).isFile();
            }
            e4 && s3.push(a2);
          } catch {
          }
        }
        return s3;
      })(e2, p.homedir(), s2)) r2.has(i2) || (r2.add(i2), t2.push(i2));
      return t2;
    }
    function xe(e2) {
      return { ...e2, additionalReadonlyPaths: he(e2.additionalReadonlyPaths) };
    }
    function ke(e2, t2, r2) {
      let s2;
      e2.ignoreMapping && (s2 = (function(e3, t3, r3, n2) {
        return Oe(e3, t3, r3, n2);
      })(e2.ignoreMapping, t2, [], []));
      const i2 = (function(e3, t3, r3) {
        const s3 = e3 && e3.length > 0 ? (function(...e4) {
          const t4 = {};
          for (const r4 of e4) {
            let e5 = false;
            try {
              e5 = (0, o.existsSync)(r4) && (0, o.statSync)(r4).isDirectory();
            } catch {
            }
            if (e5) t4[r4] || (t4[r4] = []), t4[r4].push("**");
            else {
              const e6 = r4.lastIndexOf("/"), n2 = e6 > 0 ? r4.slice(0, e6) : "/", o2 = e6 >= 0 ? r4.slice(e6 + 1) : r4;
              t4[n2] || (t4[n2] = []), o2 ? t4[n2].push(o2, `${o2}/**`) : t4[n2].push("**");
            }
          }
          return t4;
        })(...e3) : {}, i3 = (function(e4, t4 = (e5) => o.existsSync(e5)) {
          if ((0, m.$f)(e4)) return true;
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
        })(r3), a3 = !de || i3 ? t3 ?? {} : {}, l3 = { ...s3 };
        for (const [e4, t4] of Object.entries(a3)) l3[e4] ? l3[e4] = [...l3[e4], ...t4] : l3[e4] = t4;
        if (0 === Object.keys(l3).length) return;
        return Oe(l3, r3, [], []);
      })(e2.additionalReadonlyPaths, e2.writeProtectionMapping, t2), a2 = (l2 = e2.readBoundary, r2?.workspaceReadEnabled ?? (function() {
        const e3 = fe;
        return "function" == typeof e3 ? e3() : e3;
      })() ? l2 ?? "system" : "system");
      var l2;
      const c2 = Se(), u2 = "workspace" === a2 ? (function(e3) {
        const t3 = [], r3 = /* @__PURE__ */ new Set();
        for (const o2 of e3) {
          let e4 = o2.trim();
          if (!e4) continue;
          "~" === e4 ? e4 = p.homedir() : (e4.startsWith("~/") || e4.startsWith("~\\")) && (e4 = n.join(p.homedir(), e4.slice(2))), e4 = e4.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), e4 = e4.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
          const s3 = n.basename(e4);
          if ((s3.includes("*") || s3.includes("?")) && (e4 = n.dirname(e4)), !e4 || "." === e4) continue;
          const i3 = n.normalize(e4);
          r3.has(i3) || (r3.add(i3), t3.push(i3));
        }
        return t3;
      })(e2.additionalReadPaths ?? []) : [], d2 = [...c2], h2 = new Set(c2);
      for (const e3 of u2) h2.has(e3) || (h2.add(e3), d2.push(e3));
      const f2 = { cwd: t2, readBoundary: a2, hardcodedReadPaths: d2, additionalReadonlyPaths: i2, networkAccess: ee(e2.networkPolicy), ignoreMapping: s2 };
      return "workspace_readonly" === e2.type ? { type: e2.type, ...f2 } : { type: e2.type, ...f2, additionalReadwritePaths: e2.additionalReadwritePaths || [], disableTmpWrite: e2.disableTmpWrite || false };
    }
    function Ee(e2) {
      if (!("workspace" !== e2.readBoundary || "workspace_readwrite" === e2.type && e2.disableTmpWrite || "win32" === process.platform)) return D(e2.cwd, { create: true });
    }
    function Te(e2, t2, r2) {
      const o2 = (function(e3) {
        const t3 = (0, n.join)(e3, "tmp");
        return { TMPDIR: t3, TMP: t3, TEMP: t3, TMPPREFIX: (0, n.join)(t3, "sh-") };
      })(e2);
      if (r2) {
        const r3 = F();
        for (const [n2, s2] of Object.entries(F(e2))) t2[n2] === r3[n2] && (o2[n2] = s2);
      }
      return o2;
    }
    function Ce(e2) {
      if (null !== ve) return !!ve;
      try {
        const t2 = ge();
        return pe.info(e2, `[checkBinaryAvailable] Resolved binary path: ${t2}`), t2 ? (ve = o.existsSync(t2), ve ? pe.info(e2, `[checkBinaryAvailable] Binary path exists: ${ve}`) : (we = new Error(`Sandbox binary not found at ${t2}`), pe.info(e2, `[checkBinaryAvailable] Binary not found at: ${t2}`)), !!ve) : (we = new Error("Sandbox binary path was not configured"), ve = false, pe.info(e2, "[checkBinaryAvailable] Binary path not set, returning false"), false);
      } catch (t2) {
        return we = t2, ve = false, pe.info(e2, `[checkBinaryAvailable] Exception checking binary: ${t2}`), false;
      }
    }
    function Ie(e2) {
      if (null !== _e) return _e;
      const t2 = e2 ?? (0, U.q6)();
      if (pe.info(t2, "[isSandboxHelperSupported] Starting sandbox support check..."), !Ce(t2)) {
        const e3 = we?.message || "Binary check failed";
        return be = e3, pe.info(t2, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${e3}`), _e = false, _e;
      }
      if ("win32" === process.platform) return be = "Windows sandbox helper only provides network proxy, not filesystem isolation", pe.info(t2, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), _e = false, _e;
      if ("darwin" === process.platform) return be = null, pe.info(t2, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), _e = true, _e;
      const { binaryPath: r2, args: n2, env: o2 } = Pe(t2, process.cwd());
      try {
        const e3 = Date.now();
        (0, x.D9)(g.execFileSync, r2, n2, { stdio: ["ignore", "ignore", "pipe"], timeout: Ae, env: o2, shell: false });
        const s2 = Date.now() - e3;
        return be = null, pe.info(t2, `[isSandboxHelperSupported] Preflight succeeded in ${s2}ms, sandbox supported!`), _e = true, _e;
      } catch (e3) {
        const r3 = e3;
        return Me(t2, { message: r3.message, status: r3.status, stderrText: r3.stderr?.toString?.() || "" });
      }
    }
    const Ae = 15e3;
    function Pe(e2, t2) {
      const r2 = { sandbox: ke(xe({ type: "workspace_readwrite" }), t2) }, n2 = String(ge());
      pe.info(e2, `[sandboxPreflight] Running preflight with binary: ${n2}`), pe.info(e2, `[sandboxPreflight] CWD: ${t2}`);
      const o2 = { ...process.env };
      ye(o2);
      return { binaryPath: n2, args: ["--policy", ce(JSON.stringify(r2)), "--preflight-only", "--", "/bin/true"], env: o2 };
    }
    function Me(e2, t2) {
      const { message: r2, status: n2, stderrText: o2 } = t2;
      return pe.error(e2, `[sandboxPreflight] Preflight failed: ${r2}`), pe.error(e2, `[sandboxPreflight] Exit status: ${n2}`), o2 && pe.error(e2, `[sandboxPreflight] Stderr: ${o2}`), be = 2 === n2 ? `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${o2 || "none"}` : `Linux preflight failed: ${r2 || "unknown error"}. Exit status: ${n2}. stderr: ${o2 || "none"}`, _e = false, false;
    }
    function Re(e2, t2 = [], r2 = {}, n2) {
      const o2 = (0, U.q6)();
      if (r2.env = k(r2.env), !Ce(o2)) throw new Error(`Sandbox binary not available: ${we?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
      if ("insecure_none" === n2.type) return (0, x.D9)(g.spawn, e2, t2, { ...r2, windowsHide: true });
      if ("workspace_readwrite" === n2.type || "workspace_readonly" === n2.type) return (function(e3, t3, r3, n3) {
        if ("workspace_readwrite" !== n3.type && "workspace_readonly" !== n3.type) throw new Error("Expected workspace_readwrite or workspace_readonly policy");
        const o3 = String(r3.cwd ?? process.cwd()), s2 = n3.sandboxWorkspaceRoot ?? o3;
        let i2 = e3, a2 = t3;
        if (r3.shell) if ("win32" === process.platform) {
          i2 = "string" == typeof r3.shell ? r3.shell : "cmd.exe", a2 = ["/c", `${e3} ${t3.join(" ")}`];
        } else {
          i2 = "string" == typeof r3.shell ? r3.shell : "/bin/sh", a2 = ["-c", `${e3} ${t3.join(" ")}`];
        }
        const l2 = ke(xe(n3), s2), c2 = Ee(l2);
        c2 && (l2.additionalReadwritePaths = [...l2.additionalReadwritePaths ?? [], c2]);
        const u2 = (function(e4) {
          if ("insecure_none" === e4.type) return;
          const t4 = e4.networkPolicy;
          if (void 0 === t4) return;
          if (!ee(t4)) return;
          const r4 = void 0 !== t4.deny && t4.deny.length > 0;
          return "allow" !== t4.default || r4 ? { version: 1, ...t4 } : void 0;
        })(n3), d2 = { sandbox: l2 };
        void 0 !== u2 && (d2.networkPolicy = u2);
        false === n3.networkPolicyStrict && (d2.networkPolicyStrict = false);
        const p2 = ["--policy", ce(JSON.stringify(d2)), "--", i2, ...a2], h2 = "linux" === process.platform ? T(process.env) : process.env, m2 = "linux" === process.platform && r3.env ? T(r3.env) : r3.env, f2 = { ...h2, ...m2, CURSOR_SANDBOX: "native" };
        if (ye(f2), c2) {
          const e4 = Te(c2, f2, n3.enableSharedBuildCache);
          Object.assign(f2, e4), f2.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(e4).join(" "), f2.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(e4).map(([e5, t4]) => `builtin export ${e5}='${t4.replace(/'/g, "'\\''")}'`).join("; ");
        }
        const y2 = { cwd: r3.cwd || o3, env: f2, stdio: r3.stdio || ["pipe", "pipe", "pipe"], detached: r3.detached, windowsHide: true };
        try {
          const e4 = /* @__PURE__ */ new Date(), t4 = (0, x.D9)(g.spawn, String(ge()), p2, y2);
          return ue && t4.pid && (function(e5, t5) {
            Z.set(e5, t5);
          })(t4, { startTime: e4, pid: t4.pid }), t4;
        } catch (e4) {
          throw new Error(`Failed to spawn sandboxed process: ${e4}`);
        }
      })(e2, t2, r2, n2);
      throw new Error(`Unsupported sandbox policy: ${String(n2)}`);
    }
    function Oe(e2, t2, r2, n2) {
      const o2 = {};
      for (const [t3, r3] of Object.entries(e2)) {
        const e3 = t3.startsWith("file://") ? De(t3) : t3;
        o2[e3] = r3;
        const n3 = Ne(e3);
        n3 !== e3 && (o2[n3] = r3);
      }
      return o2;
    }
    function De(e2) {
      let t2 = e2.replace(/^file:\/\//, "");
      return t2 = decodeURIComponent(t2), t2.length > 1 && t2.endsWith("/") && (t2 = t2.slice(0, -1)), t2;
    }
    function Ne(e2, t2) {
      if ((0, m.$f)(e2)) return e2;
      try {
        return (t2 ?? o.realpathSync)(e2);
      } catch {
        return e2;
      }
    }
    class Fe extends Error {
      reason;
      constructor(e2, t2) {
        super(e2), this.reason = t2, this.name = "SandboxUnsupportedError";
      }
    }
    const Le = "darwin" === process.platform;
    function Ue(e2, t2 = [], r2 = {}, n2) {
      if (r2.env = k(r2.env), n2.enableSharedBuildCache && (r2 = { ...r2, env: { ...k(process.env), ...F(), ...r2.env } }), "insecure_none" !== n2.type) {
        if (Ie()) return Re(e2, t2, r2, n2);
        const o2 = be;
        throw new Fe(`Sandbox policy '${n2.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${o2 || "unknown"}`, o2 ?? void 0);
      }
      return (function(e3, t3, r3) {
        return (0, x.D9)(g.spawn, e3, t3, { ...r3, windowsHide: true });
      })(e2, t2, r2);
    }
    function Be(e2) {
      return Le ? X(e2) : Promise.resolve([]);
    }
    var $e;
    !(function(e2) {
      e2.Zsh = "zsh", e2.ZshLight = "zsh-light", e2.Bash = "bash", e2.PowerShell = "powershell", e2.Naive = "naive";
    })($e || ($e = {}));
    const qe = { TERM: "dumb", NO_COLOR: "1", FORCE_COLOR: "0", _ZO_DOCTOR: "0" };
    function je(e2, t2, r2) {
      const n2 = e2.pid;
      if (void 0 === n2) return;
      const o2 = () => {
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
            o2();
          }
          return;
        case "windows_tree":
          try {
            (0, g.spawn)("taskkill", ["/pid", String(n2), "/t", "/f"], { stdio: "ignore", windowsHide: true }).on("error", o2);
          } catch {
            o2();
          }
          return;
        case "single_process":
          return void o2();
        default:
          throw new Error(`Unknown process tree kill mode: ${String(t2)}`);
      }
    }
    function Je(e2, t2 = [], r2 = {}, n2, o2) {
      const s2 = Ue(e2, t2, { ...r2, env: _(r2.env ?? process.env) }, n2);
      if (o2) {
        const e3 = (function(e4) {
          return "win32" === e4.platform ? "windows_tree" : e4.detached ? "process_group" : "single_process";
        })({ platform: process.platform, detached: true === r2.detached }), t3 = () => {
          if (!s2.pid) return;
          je(s2, e3, "SIGTERM");
          const t4 = setTimeout(() => {
            !s2.killed && s2.pid && je(s2, e3, "SIGKILL");
          }, 1e3);
          s2.once("exit", () => {
            clearTimeout(t4);
          });
        };
        o2.aborted ? t3() : (o2.addEventListener("abort", t3, { once: true }), s2.once("exit", () => {
          o2.removeEventListener("abort", t3);
        }));
      }
      return s2;
    }
    function ze(e2) {
      e2?.on("error", () => {
      });
    }
    const He = `IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- "$__cursor_command"; builtin unset __cursor_command; `;
    function We() {
      return "win32" !== process.platform;
    }
    function Ge(e2, t2) {
      const r2 = e2.stdio.at(5);
      r2 instanceof y.Writable && (ze(r2), r2.end(`${t2}\0`));
    }
    function Ye(e2, t2) {
      e2 && (ze(e2), e2.write(t2), e2.end());
    }
    function Ve(e2, t2) {
      e2 && (ze(e2), e2.on("data", (e3) => {
        t2(e3.toString());
      }));
    }
    function Ke(e2) {
      const t2 = e2.indexOf("\n");
      return { cwd: e2.substring(0, t2), rest: e2.substring(t2) };
    }
    function Ze(e2, t2) {
      const r2 = `${t2}
`, n2 = e2.indexOf(r2);
      return n2 >= 0 ? e2.slice(n2 + r2.length) : e2;
    }
    const Xe = "__CURSOR_BASH_STATE_START__", Qe = "__CURSOR_BASH_STATE_END__", et = `#!/usr/bin/env bash

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
`, tt = { flushIntervalMs: 50, maxBufferedBytes: 262144 };
    class rt {
      writable;
      pending = [];
      pendingBytes = 0;
      flushTimeout;
      flushPromise;
      flushIntervalMs;
      maxBufferedBytes;
      constructor(e2, t2) {
        this.writable = e2, this.flushIntervalMs = t2?.flushIntervalMs ?? tt.flushIntervalMs, this.maxBufferedBytes = t2?.maxBufferedBytes ?? tt.maxBufferedBytes;
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
          for (let o2 = 1; o2 < e3.length; o2++) {
            const s2 = e3[o2];
            s2.type !== r2 ? (t3.push({ type: r2, data: Buffer.concat(n2) }), r2 = s2.type, n2 = [s2.data]) : n2.push(s2.data);
          }
          return t3.push({ type: r2, data: Buffer.concat(n2) }), t3;
        })(e2)) try {
          await this.writable.write(t2);
        } catch {
        }
      }
    }
    function nt(e2) {
      const t2 = new m.Zv();
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
      const r2 = new rt(e2.writable, e2.outputLimiterOptions);
      let n2;
      const o2 = Promise.all([ot(e2.stdout, r2, t2), st(e2.stderr, "stderr", r2)]).then(() => {
      }).catch((e3) => {
        n2 = e3;
      });
      return { get stdoutBytes() {
        return t2.bytes;
      }, get stdoutPrefix() {
        return t2.stdoutPrefix;
      }, async waitForOutput() {
        if (await o2, void 0 !== n2) throw (e3 = n2) instanceof Error ? e3 : new Error(String(e3));
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
    async function ot(e2, t2, r2) {
      if (e2) for await (const n2 of e2) {
        const e3 = r2.note(n2);
        void 0 !== e3 && e3.length > 0 && await t2.push("stdout", e3);
      }
    }
    async function st(e2, t2, r2, n2) {
      if (e2) for await (const o2 of e2) n2?.(o2), await r2.push(t2, o2);
    }
    var it = r(97357), at = r(10091);
    class lt extends Error {
      constructor(e2, t2, r2, n2, o2, s2) {
        super(e2), this.name = "SpawnError", this.exitCode = t2, this.code = t2, this.stdout = o2, this.stderr = s2, this.command = r2, this.args = n2, Error.captureStackTrace && Error.captureStackTrace(this, lt);
      }
    }
    function ct(e2, t2, r2) {
      r2 = r2 ?? {};
      let n2 = new it.Observable((n3) => {
        const { encoding: o2, timeout: s2, ...i2 } = r2, { cmd: a2, args: l2 } = u(e2, t2), c2 = i2.stdin;
        c2 && (delete i2.stdin, i2.stdio ??= ["pipe", "pipe", "pipe"]), i2.stdio ??= ["ignore", "pipe", "pipe"];
        const d2 = (0, g.spawn)(a2, l2, i2);
        r2.processInfo && void 0 !== d2.pid && (r2.processInfo.pid = d2.pid);
        let p2 = null;
        s2 && s2 > 0 && (p2 = setTimeout(() => {
          d2.killed || d2.kill();
          const e3 = new lt(`Process timed out after ${s2}ms`, -1, a2, l2);
          n3.error(e3);
        }, s2));
        const h2 = (t3) => (s3) => {
          if (s3.length < 1) return;
          r2.echoOutput && ("stdout" === t3 ? process.stdout : process.stderr).write(s3);
          let i3 = "<< String sent back was too long >>";
          try {
            i3 = "string" == typeof s3 ? s3.toString() : s3.toString(o2 || "utf8");
          } catch {
            i3 = `<< Lost chunk of process output for ${e2} - length was ${s3.length}>>`;
          }
          n3.next({ source: t3, text: i3 });
        }, m2 = new it.Subscription();
        if (c2) if (d2.stdin) {
          const e3 = d2.stdin;
          m2.add(c2.subscribe({ next: (t3) => e3.write(t3), error: n3.error.bind(n3), complete: () => e3.end() }));
        } else n3.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
        let f2 = null, y2 = null, v2 = false;
        return d2.stdout ? (y2 = new it.AsyncSubject(), d2.stdout.on("data", h2("stdout")), d2.stdout.on("close", () => {
          y2.next(true), y2.complete();
        })) : y2 = (0, it.of)(true), d2.stderr ? (f2 = new it.AsyncSubject(), d2.stderr.on("data", h2("stderr")), d2.stderr.on("close", () => {
          f2.next(true), f2.complete();
        })) : f2 = (0, it.of)(true), d2.on("error", (e3) => {
          v2 = true, p2 && clearTimeout(p2), n3.error(e3);
        }), d2.on("close", (e3) => {
          v2 = true, p2 && clearTimeout(p2);
          const t3 = (0, it.merge)(y2, f2).pipe((0, at.TS)((e4) => true, true));
          0 === e3 ? t3.subscribe(() => n3.complete()) : t3.subscribe(() => {
            const t4 = new lt(`Process failed with exit code: ${e3}`, e3, a2, l2);
            n3.error(t4);
          });
        }), m2.add(new it.Subscription(() => {
          v2 || (p2 && clearTimeout(p2), d2.kill());
        })), m2;
      });
      if (r2.retries && r2.retries > 0) {
        const e3 = r2.retries, t3 = r2.retryDelay ?? 1e3;
        n2 = n2.pipe((0, at.L5)({ count: e3, delay: (e4, r3) => {
          if (e4 instanceof lt && 0 !== e4.exitCode) return (0, it.timer)(t3);
          throw e4;
        } }));
      }
      return r2.split ? n2 : n2.pipe((0, at.Tj)((e3) => e3?.text));
    }
    function ut(e2, t2, r2) {
      return r2?.split ? (n2 = ct(e2, t2, { ...r2 ?? {}, split: true }), new Promise((e3, t3) => {
        let r3 = "", o2 = "";
        n2.subscribe({ next: (e4) => {
          "stdout" === e4.source ? r3 += e4.text : o2 += e4.text;
        }, error: (e4) => {
          if (e4 instanceof lt) {
            const n3 = new lt(`${r3}
${e4.message}`, e4.exitCode, e4.command, e4.args, r3, o2);
            t3(n3);
          } else {
            const n3 = new Error(`${r3}
${e4 instanceof Error ? e4.message : String(e4)}`);
            t3(n3);
          }
        }, complete: () => e3([r3, o2]) });
      })) : (function(e3) {
        return new Promise((t3, r3) => {
          let n3 = "";
          e3.subscribe({ next: (e4) => {
            n3 += e4;
          }, error: (e4) => {
            if (e4 instanceof lt) {
              const t4 = new lt(`${n3}
${e4.message}`, e4.exitCode, e4.command, e4.args, n3, e4.stderr);
              r3(t4);
            } else {
              const t4 = new Error(`${n3}
${e4 instanceof Error ? e4.message : String(e4)}`);
              r3(t4);
            }
          }, complete: () => t3(n3) });
        });
      })(ct(e2, t2, { ...r2 ?? {}, split: false }));
      var n2;
    }
    function dt(e2) {
      return e2.teamAdmin?.type ?? e2.perRepo?.type ?? e2.perUser?.type ?? "insecure_none";
    }
    function pt(...e2) {
      return e2.some((e3) => true === e3);
    }
    function ht(...e2) {
      const t2 = /* @__PURE__ */ new Set();
      for (const r2 of e2) if (r2) for (const e3 of r2) t2.add(mt(e3));
      return [...t2];
    }
    function mt(e2) {
      const t2 = e2.replace(/\\/g, "/").replace(/\/+$/, "");
      return "" === t2 ? "/" : /^[a-zA-Z]:$/.test(t2) ? `${t2}/` : t2;
    }
    function ft(...e2) {
      const t2 = e2.filter((e3) => void 0 !== e3);
      if (0 === t2.length) return;
      const r2 = {};
      for (const e3 of t2) for (const [t3, n2] of Object.entries(e3)) {
        const e4 = r2[t3];
        if (e4) {
          const o2 = new Set(e4);
          for (const e5 of n2) o2.has(e5) && o2.delete(e5), o2.add(e5);
          r2[t3] = [...o2];
        } else r2[t3] = [...n2];
      }
      return 0 !== Object.keys(r2).length ? r2 : void 0;
    }
    function gt(...e2) {
      for (let t2 = e2.length - 1; t2 >= 0; t2--) if (void 0 !== e2[t2]) return e2[t2];
    }
    async function yt(e2, t2, r2 = {}) {
      if (!t2) return { policy: { type: "insecure_none" } };
      if ((0, m.$f)(e2)) return vt(t2, { workspaceDir: e2 });
      const o2 = r2.stat ?? d.stat, s2 = r2.spawnPromise ?? ut, i2 = await o2((0, n.join)(e2, ".git")).then((e3) => e3, () => null), a2 = i2?.isFile() ?? false, l2 = null !== i2;
      if ("workspace_readwrite" === dt(t2)) {
        let r3 = e2;
        if (a2) {
          const o3 = await s2("git", ["rev-parse", "--git-common-dir"], { cwd: e2 }).then((t3) => (0, n.resolve)(e2, t3.trim()), () => null);
          if (o3) {
            r3 = (0, n.dirname)(o3);
            const s3 = t2.perRepo, i3 = s3?.ignoreMapping;
            t2 = { ...t2, perRepo: { ...s3, type: "workspace_readwrite", additionalReadwritePaths: [...s3?.additionalReadwritePaths ?? [], o3], ignoreMapping: i3, writeProtectionMapping: ft(s3?.writeProtectionMapping, G(e2)) } };
          }
        }
        if (l2) return vt(t2, { workspaceDir: e2, gitDirParent: r3 });
      }
      return vt(t2, { workspaceDir: e2 });
    }
    function vt(e2, t2) {
      const r2 = (function(e3) {
        const { perUser: t3, perRepo: r3, teamAdmin: n2 } = e3, o2 = [t3, r3, n2].filter((e4) => void 0 !== e4);
        if (0 === o2.length) return;
        const s2 = o2[0].type;
        for (const e4 of o2) if (e4.type !== s2) throw new Error(`Cannot merge policies of different types: found "${s2}" and "${e4.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        return s2;
      })(e2);
      if (void 0 === r2) return _t(e2, t2);
      switch (r2) {
        case "workspace_readwrite":
          return _t(e2, t2);
        case "workspace_readonly":
          return (function(e3, t3) {
            const r3 = t3?.debug, n2 = wt(e3, t3), o2 = { policy: bt({ type: "workspace_readonly", disableTmpWrite: n2.disableTmpWrite, networkPolicyStrict: n2.networkPolicyStrict, readBoundary: n2.readBoundary, additionalReadPaths: n2.additionalReadPaths, additionalReadonlyPaths: n2.additionalReadonlyPaths, networkPolicy: n2.networkPolicy, debugOutputDir: n2.debugOutputDir, captureDenies: n2.captureDenies, enableSharedBuildCache: n2.enableSharedBuildCache, ignoreMapping: n2.ignoreMapping, writeProtectionMapping: n2.writeProtectionMapping }, "workspace_readonly") };
            r3 && (o2.debug = { fieldSources: n2.fieldSources });
            return o2;
          })(e2, t2);
        case "insecure_none":
          return (function(e3, t3) {
            const { perUser: r3, perRepo: n2, teamAdmin: o2 } = e3, s2 = t3?.debug, i2 = {}, a2 = pt(r3?.allowlistEscalated, n2?.allowlistEscalated, o2?.allowlistEscalated), l2 = gt(r3?.debugOutputDir, n2?.debugOutputDir, o2?.debugOutputDir), c2 = pt(r3?.captureDenies, n2?.captureDenies, o2?.captureDenies), u2 = gt(r3?.enableSharedBuildCache, n2?.enableSharedBuildCache, o2?.enableSharedBuildCache), d2 = { type: "insecure_none", allowlistEscalated: a2 || void 0, debugOutputDir: l2, captureDenies: c2 || void 0, enableSharedBuildCache: u2 }, p2 = Object.fromEntries(Object.entries(d2).filter(([e4, t4]) => void 0 !== t4));
            p2.type = "insecure_none";
            const h2 = { policy: p2 };
            s2 && (h2.debug = { fieldSources: i2 });
            return h2;
          })(e2, t2);
        default:
          throw new Error(`Unknown policy type: ${r2}`);
      }
    }
    function wt(e2, t2) {
      const r2 = t2?.debug, { perUser: n2, perRepo: o2, teamAdmin: s2 } = e2, i2 = t2?.workspaceDir ?? process.cwd(), a2 = V(i2), l2 = {}, c2 = [n2, o2, s2], u2 = ["perUser", "perRepo", "teamAdmin", "hardcoded"], d2 = (e3, t3) => {
        r2 && (l2[e3] = u2[t3] ?? "unknown");
      }, p2 = pt(n2?.disableTmpWrite, o2?.disableTmpWrite, s2?.disableTmpWrite);
      for (let e3 = c2.length - 1; e3 >= 0; e3--) if (true === c2[e3]?.disableTmpWrite) {
        d2("disableTmpWrite", e3);
        break;
      }
      const h2 = pt(n2?.networkPolicyStrict, o2?.networkPolicyStrict, s2?.networkPolicyStrict, a2.networkPolicyStrict);
      a2.networkPolicyStrict && d2("networkPolicyStrict", 3);
      const m2 = gt(n2?.readBoundary, o2?.readBoundary, s2?.readBoundary) ?? "system", f2 = gt(n2?.additionalReadPaths, o2?.additionalReadPaths), g2 = false === s2?.allowUserOverrideReadPaths ? ht(s2.additionalReadPaths) : ht(f2, s2?.additionalReadPaths), y2 = "workspace" === m2 ? g2 : void 0, v2 = ht(n2?.additionalReadonlyPaths, o2?.additionalReadonlyPaths, s2?.additionalReadonlyPaths, a2.additionalReadonlyPaths), w2 = v2.length > 0 ? v2 : void 0;
      let b2 = (function(...e3) {
        const t3 = e3.filter((e4) => void 0 !== e4);
        if (0 === t3.length) return;
        let r3;
        for (const e4 of t3) {
          if ("deny" === e4.default) {
            r3 = "deny";
            break;
          }
          "allow" === e4.default && void 0 === r3 && (r3 = "allow");
        }
        const n3 = /* @__PURE__ */ new Set();
        for (const e4 of t3) if (e4.deny) for (const t4 of e4.deny) n3.add(t4);
        const o3 = /* @__PURE__ */ new Set();
        for (const e4 of t3) if (e4.allow) for (const t4 of e4.allow) o3.add(t4);
        const s3 = o3.size > 0 ? [...o3] : void 0;
        let i3;
        for (let e4 = t3.length - 1; e4 >= 0; e4--) if (void 0 !== t3[e4].logging) {
          i3 = t3[e4].logging;
          break;
        }
        const a3 = { version: 1 };
        return void 0 !== r3 && (a3.default = r3), void 0 !== s3 && (a3.allow = s3), n3.size > 0 && (a3.deny = [...n3]), void 0 !== i3 && (a3.logging = i3), void 0 !== a3.default || void 0 !== a3.allow && 0 !== a3.allow.length || void 0 !== a3.deny && 0 !== a3.deny.length || void 0 !== a3.logging ? a3 : void 0;
      })(n2?.networkPolicy, o2?.networkPolicy, s2?.networkPolicy, a2.networkPolicy);
      const _2 = s2?.networkPolicy?.allow;
      void 0 !== _2 && _2.length > 0 && void 0 !== b2 && (b2 = { ...b2, allow: [..._2] }, r2 && (l2["networkPolicy.allow"] = "teamAdmin (replace)"));
      const S2 = void 0 !== (x2 = b2) ? x2 : { version: 1, default: "deny" };
      var x2;
      const k2 = gt(n2?.debugOutputDir, o2?.debugOutputDir, s2?.debugOutputDir), E2 = pt(n2?.captureDenies, o2?.captureDenies, s2?.captureDenies), T2 = gt(n2?.enableSharedBuildCache, o2?.enableSharedBuildCache, s2?.enableSharedBuildCache), C2 = ft(n2?.ignoreMapping, o2?.ignoreMapping, s2?.ignoreMapping, a2.ignoreMapping), I2 = (function(e3) {
        const t3 = H.filter((e4) => "git" === e4.type).map((e4) => e4.pattern);
        return { [e3]: t3 };
      })(t2?.gitDirParent ?? i2);
      return { disableTmpWrite: p2 || void 0, networkPolicyStrict: h2, readBoundary: m2, additionalReadPaths: y2, additionalReadonlyPaths: w2, networkPolicy: S2, debugOutputDir: k2, captureDenies: E2 || void 0, enableSharedBuildCache: T2, ignoreMapping: C2, writeProtectionMapping: ft(n2?.writeProtectionMapping, o2?.writeProtectionMapping, s2?.writeProtectionMapping, a2.writeProtectionMapping, I2), fieldSources: l2 };
    }
    function bt(e2, t2) {
      const r2 = Object.fromEntries(Object.entries(e2).filter(([e3, t3]) => void 0 !== t3));
      return r2.type = t2, r2;
    }
    function _t(e2, t2) {
      const { perUser: r2, perRepo: n2, teamAdmin: o2 } = e2, s2 = t2?.debug, i2 = wt(e2, t2), a2 = ht(r2?.additionalReadwritePaths, n2?.additionalReadwritePaths, o2?.additionalReadwritePaths), l2 = { policy: bt({ type: "workspace_readwrite", disableTmpWrite: i2.disableTmpWrite, networkPolicyStrict: i2.networkPolicyStrict, readBoundary: i2.readBoundary, additionalReadPaths: i2.additionalReadPaths, additionalReadwritePaths: a2.length > 0 ? a2 : void 0, additionalReadonlyPaths: i2.additionalReadonlyPaths, networkPolicy: i2.networkPolicy, debugOutputDir: i2.debugOutputDir, captureDenies: i2.captureDenies, enableSharedBuildCache: i2.enableSharedBuildCache, ignoreMapping: i2.ignoreMapping, writeProtectionMapping: i2.writeProtectionMapping }, "workspace_readwrite") };
      return s2 && (l2.debug = { fieldSources: i2.fieldSources }), l2;
    }
    const St = "win32" === process.platform;
    function xt(e2) {
      return !St && !!e2?.SUDO_ASKPASS;
    }
    function kt(e2) {
      return xt(e2) ? "alias sudo='sudo -A'; " : "";
    }
    function Et(e2) {
      const t2 = [];
      let r2 = 0;
      for (; r2 < e2.length; ) {
        const n2 = 0 === r2 || "&&" === e2.slice(Math.max(0, r2 - 2), r2) || "||" === e2.slice(Math.max(0, r2 - 2), r2) || "|" === e2[r2 - 1] || ";" === e2[r2 - 1], o2 = Math.max(0, r2 - 10), s2 = e2.slice(o2, r2), i2 = /(?:&&|\|\||[|;])\s*$/.test(s2) || 0 === r2 && /^\s*$/.test(s2);
        if ((n2 || i2) && "sudo" === e2.slice(r2, r2 + 4)) {
          const n3 = r2 + 4;
          if (n3 >= e2.length || /\s/.test(e2[n3])) {
            let o3 = n3;
            for (; o3 < e2.length && /\s/.test(e2[o3]); ) o3++;
            let s3 = false;
            if (o3 < e2.length && "-" === e2[o3]) {
              let t3 = o3 + 1;
              for (; t3 < e2.length && /[^\s]/.test(e2[t3]); ) t3++;
              const r3 = e2.slice(o3, t3);
              s3 = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(r3);
            }
            s3 ? (t2.push("sudo"), r2 = n3) : (t2.push("sudo -A"), r2 = n3);
            continue;
          }
        }
        t2.push(e2[r2]), r2++;
      }
      return t2.join("");
    }
    var Tt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ct = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function It(e2) {
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
    function At(e2) {
      if ("win32" !== process.platform) return e2;
      const t2 = n.normalize(e2), r2 = t2[0]?.toLowerCase();
      if (r2 && ":" === t2[1] && t2[2] === n.sep) {
        return `/${r2}${t2.slice(2).replace(/\\/g, "/")}`;
      }
      return t2.replace(/\\/g, "/");
    }
    class Pt {
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
        return new Pt(e2 ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
      }
      resetSessionCwdAfterHopCdFailure(e2) {
        const { cwd: t2, sandboxWorkspaceRoot: r2 } = e2;
        n.resolve(t2) === n.resolve(this.cwd) && (this.cwd = void 0 === r2 || n.resolve(r2) === n.resolve(t2) || (0, m.A)(r2) ? (0, m.D1)() : r2);
      }
      async *execute(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = Tt(o2, (0, h.VI)(e2.withName("BashState.execute")), false), i2 = r2?.pipeStdin ?? false, a2 = (0, f.Jt)(), l2 = r2?.workingDirectory ?? this.cwd, c2 = { ...process.env, ...qe, ...r2?.env };
          let u2 = 'builtin eval "$1"';
          i2 || (u2 += " < /dev/null");
          const g2 = kt(c2), y2 = this.useFileStateTransport;
          let v2, w2, b2;
          if (y2) {
            v2 = await (0, d.mkdtemp)(n.join(p.tmpdir(), "cursor-bash-state-"));
            n.basename(v2);
            w2 = n.join(v2, "state-in"), b2 = n.join(v2, "state-out"), await (0, d.writeFile)(w2, this.state, "utf8"), await (0, d.writeFile)(b2, "", "utf8").catch(() => {
            });
            const e3 = At(w2), t3 = At(b2);
            c2.CURSOR_STATE_INPUT_FILE = e3, c2.CURSOR_STATE_OUTPUT_FILE = t3;
          }
          const _2 = ["-O", "extglob", "-c", (y2 ? "" : He) + `${y2 ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)"} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + N + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${g2}${u2}; }; COMMAND_EXIT_CODE=$?; ${y2 ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4"}; builtin exit $COMMAND_EXIT_CODE`, "--", ...y2 ? [t2] : []], S2 = It(this.userTerminalHint);
          if (!S2) throw new Error("Can't find Bash");
          const x2 = r2?.sandboxWorkspaceRoot ?? l2, k2 = (await yt(x2, r2?.sandboxPolicy)).policy, E2 = "insecure_none" !== k2.type ? { ...k2, sandboxWorkspaceRoot: x2 } : k2;
          let T2 = "";
          const C2 = async () => {
            if (y2) {
              if (!b2) return void (T2 = this.state);
              try {
                T2 = await (0, d.readFile)(b2, "utf8");
              } catch (e3) {
                console.warn("[shell-exec] Failed to read bash state file", e3), T2 = this.state;
              }
            }
          }, I2 = async () => {
            if (v2) try {
              await (0, d.rm)(v2, { recursive: true, force: true });
            } catch {
            }
          };
          let A2;
          (0, m.$Y)(l2) && (0, h.HF)(s2.ctx, m.yo);
          try {
            A2 = Je(S2, _2, { env: c2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", y2 ? "ignore" : "pipe"], cwd: l2, detached: true }, E2, r2?.signal);
          } catch (e3) {
            throw await I2(), e3;
          }
          A2.on("spawn", async () => {
            try {
              await a2.write({ type: "stdin_ready", stdin: A2.stdin ?? void 0, pid: A2.pid });
            } catch (e3) {
            }
          });
          const P2 = nt({ stdout: A2.stdout, stderr: A2.stderr, writable: a2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          A2.on("error", async (e3) => {
            if ((0, m.fK)(e3, l2)) {
              this.resetSessionCwdAfterHopCdFailure({ cwd: l2, sandboxWorkspaceRoot: r2?.sandboxWorkspaceRoot }), (0, h.HF)(s2.ctx, m.Gq);
              const e4 = (0, m.iA)(l2);
              console.warn(`[shell-exec] working directory is not accessible (${e4.cwdKind}:${e4.cwdHash})`);
            }
            await I2(), a2.throw(e3);
          });
          let M2 = null, R2 = null, O2 = false;
          const D2 = async (e3) => {
            if (O2) return;
            if (O2 = true, R2 && (clearTimeout(R2), R2 = null), (0, h.HF)(s2.ctx, "exit"), e3) try {
              await P2.waitForOutput();
            } catch (e4) {
              return await I2(), void a2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
            }
            const t3 = (0, m.wz)({ exitCode: M2, stdoutBytes: P2.stdoutBytes, stdoutPrefix: P2.stdoutPrefix, cwd: l2 }) && "" === T2;
            if (t3 && P2.dropHeldStdout(), await P2.flush(), t3) {
              this.resetSessionCwdAfterHopCdFailure({ cwd: l2, sandboxWorkspaceRoot: r2?.sandboxWorkspaceRoot }), await I2(), (0, h.HF)(s2.ctx, m.Gq);
              const e4 = (0, m.iA)(l2);
              return console.warn(`[shell-exec] working directory is not accessible (${e4.cwdKind}:${e4.cwdHash})`), void a2.throw((0, m.Vn)(l2));
            }
            if (!r2?.signal?.aborted) {
              await C2();
              const e4 = `${Xe}
`, t4 = `${Qe}
`;
              if (T2.startsWith(e4) && T2.endsWith(t4)) {
                let t5 = T2.slice(e4.length);
                t5 = t5.slice(0, -(Qe.length + 1));
                const { cwd: r3, rest: n2 } = Ke(t5);
                this.state = n2, "win32" !== process.platform && r3?.startsWith("/") && (this.cwd = r3);
              }
            }
            if (E2.captureDenies) try {
              const e4 = await Be(A2);
              e4 && e4.length > 0 && await a2.write({ type: "sandbox_denies", events: e4 });
            } catch {
            }
            try {
              await a2.write({ type: "exit", code: M2, data: "", aborted: r2?.signal?.aborted ?? false }), a2.close();
            } catch {
              a2.close();
            }
            await I2();
          };
          A2.on("exit", (e3, t3) => {
            M2 = e3;
            const n2 = r2?.closeTimeout ?? 5e3;
            n2 > 0 && (R2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n2}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), D2(false);
            }, n2));
          }), A2.on("close", async () => {
            await D2(true);
          });
          const F2 = A2.stdio[3], L2 = A2.stdio[4];
          y2 || (Ge(A2, t2), Ye(F2, this.state), Ve(L2, (e3) => {
            T2 += e3;
          })), yield* a2;
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ct(o2);
        }
      }
    }
    var Mt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Rt = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class Ot {
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
        return new Ot(async () => (await this.getExecutor()).clone(e2));
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          Mt(n2, (0, h.VI)(e2.withName("LazyTerminalExecutor.execute")), false);
          const o2 = await this.getExecutor();
          for await (const n3 of o2.execute(e2, t2, r2)) yield n3;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Rt(n2);
        }
      }
    }
    const Dt = (e2, t2, r2, n2, o2) => `
${o2?.utf8Console ? "\ntry { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\ntry { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }\n" : ""}
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
    var Nt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Ft = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Lt() {
      if ("win32" !== process.platform) {
        const e3 = process.env.SHELL;
        if (e3?.includes("pwsh") || e3?.includes("powershell")) return e3;
      }
      let e2 = u("pwsh", []).cmd;
      if ("pwsh" !== e2) return e2;
      if (e2 = u("powershell", []).cmd, "powershell" !== e2) return e2;
      if ("win32" === process.platform && (e2 = n.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), (0, o.existsSync)(e2))) return e2;
      throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
    }
    class Ut {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new Ut(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const o2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = Nt(o2, (0, h.VI)(e2.withName("PowerShellState.execute")), false), i2 = r2?.pipeStdin ?? false, a2 = r2?.workingDirectory ?? this.cwd, l2 = (0, f.Jt)(), c2 = { ...process.env, ...qe, ...r2?.env }, u2 = xt(c2) ? Et(t2) : t2, m2 = p.tmpdir(), g2 = n.join(m2, `ps-state-out-${(0, C.randomUUID)()}.txt`), y2 = "win32" === process.platform, v2 = Dt(this.state, a2, u2, g2, { utf8Console: y2 && true === r2?.powershellUtf8Console }), w2 = n.join(m2, `ps-script-${(0, C.randomUUID)()}.ps1`);
          await (async function(e3, t3) {
            await d.writeFile(e3, Bt + t3, { encoding: "utf8" });
          })(w2, v2);
          const b2 = ["-ExecutionPolicy", "Bypass"];
          i2 || b2.push("-NonInteractive"), b2.push("-File", w2);
          const _2 = Lt(), S2 = r2?.sandboxWorkspaceRoot ?? a2, x2 = (await yt(S2, r2?.sandboxPolicy)).policy, k2 = Je(_2, b2, { env: c2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe"], cwd: a2, detached: !y2 }, "insecure_none" !== x2.type ? { ...x2, sandboxWorkspaceRoot: S2 } : x2, r2?.signal);
          k2.on("spawn", async () => {
            try {
              await l2.write({ type: "stdin_ready", stdin: k2.stdin ?? void 0, pid: k2.pid });
            } catch (e3) {
            }
          });
          const E2 = nt({ stdout: k2.stdout, stderr: k2.stderr, writable: l2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions }), T2 = async () => {
            try {
              const e3 = await d.readFile(g2, "utf8"), { cwd: t3, rest: r3 } = Ke(e3);
              this.state = r3, this.cwd = t3.trim(), await (0, d.rm)(g2).catch(() => {
              });
            } catch (e3) {
            }
            await (0, d.rm)(w2).catch(() => {
            });
          };
          let I2 = null, A2 = null, P2 = false;
          const M2 = async (e3) => {
            if (!P2) {
              if (P2 = true, A2 && (clearTimeout(A2), A2 = null), (0, h.HF)(s2.ctx, "exit"), e3) try {
                await E2.waitForOutput();
              } catch (e4) {
                return await T2(), void l2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              await E2.flush();
              try {
                await l2.write({ type: "exit", code: I2, data: "", aborted: r2?.signal?.aborted ?? false }), await T2(), l2.close();
              } catch (e4) {
                l2.close();
              }
            }
          };
          k2.on("exit", (e3, t3) => {
            I2 = e3;
            const n2 = r2?.closeTimeout ?? 5e3;
            n2 > 0 && (A2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n2}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), M2(false);
            }, n2));
          }), k2.on("close", async () => {
            await M2(true);
          }), k2.on("error", (e3) => {
            T2().catch(() => {
            }), l2.throw(e3);
          }), yield* l2;
        } catch (e3) {
          o2.error = e3, o2.hasError = true;
        } finally {
          Ft(o2);
        }
      }
    }
    const Bt = "\uFEFF";
    var $t = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, qt = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class jt {
      cwd;
      options;
      constructor(e2, t2) {
        this.cwd = e2, this.options = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new jt(e2 ?? this.cwd, this.options);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = $t(n2, (0, h.VI)(e2.withName("NaiveTerminalExecutor.execute")), false), s2 = (0, f.Jt)(), i2 = r2?.pipeStdin ?? false, a2 = { ...process.env, ...qe, ...r2?.env }, l2 = xt(a2) ? Et(t2) : t2, c2 = r2?.workingDirectory ?? this.cwd, u2 = r2?.sandboxWorkspaceRoot ?? c2, d2 = (await yt(u2, r2?.sandboxPolicy)).policy, p2 = "insecure_none" !== d2.type ? { ...d2, sandboxWorkspaceRoot: u2 } : d2, m2 = "win32" === process.platform, g2 = Je(this.options?.shell || process.env.SHELL || "/bin/sh", [...this.options?.shellArgs ?? [], "-c", l2], { env: a2, cwd: c2, stdio: [i2 ? "pipe" : "ignore", "pipe", "pipe"], detached: !m2 }, p2, r2?.signal);
          g2.on("spawn", async () => {
            try {
              await s2.write({ type: "stdin_ready", stdin: g2.stdin ?? void 0, pid: g2.pid });
            } catch (e3) {
            }
          });
          const y2 = nt({ stdout: g2.stdout, stderr: g2.stderr, writable: s2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          g2.on("error", (e3) => {
            s2.throw(e3);
          }), g2.on("exit", async (e3) => {
            if ((0, h.HF)(o2.ctx, "exit"), await y2.flush(), p2.captureDenies) try {
              const e4 = await Be(g2);
              e4 && e4.length > 0 && await s2.write({ type: "sandbox_denies", events: e4 });
            } catch {
            }
            try {
              await s2.write({ type: "exit", code: e3, data: "", aborted: r2?.signal?.aborted ?? false }), s2.close();
            } catch (e4) {
              s2.close();
            }
          }), yield* s2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          qt(n2);
        }
      }
    }
    const Jt = "__CURSOR_ZSH_STATE_START__", zt = "__CURSOR_ZSH_STATE_END__", Ht = `#!/usr/bin/env zsh

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
    var Wt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Gt = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function Yt() {
      const e2 = process.env.SHELL;
      return e2?.includes("zsh") ? e2 : u("zsh", []).cmd;
    }
    class Vt {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new Vt(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Wt(n2, (0, h.VI)(e2.withName("ZshState.execute")), false), s2 = r2?.pipeStdin ?? false, i2 = (0, f.Jt)(), a2 = r2?.workingDirectory ?? this.cwd, l2 = { ...process.env, ...qe, ...r2?.env };
          let c2 = 'builtin eval "$1"';
          s2 || (c2 += " < /dev/null");
          const u2 = kt(l2), d2 = We(), p2 = ["-c", (d2 ? He : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + N + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u2}${c2}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...d2 ? [] : [t2]], m2 = r2?.sandboxWorkspaceRoot ?? a2, g2 = (await yt(m2, r2?.sandboxPolicy)).policy, y2 = "insecure_none" !== g2.type ? { ...g2, sandboxWorkspaceRoot: m2 } : g2, v2 = Je(Yt(), p2, { env: l2, stdio: [s2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", d2 ? "pipe" : "ignore"], cwd: a2, detached: true }, y2, r2?.signal);
          let w2 = "";
          v2.on("spawn", async () => {
            try {
              await i2.write({ type: "stdin_ready", stdin: v2.stdin ?? void 0, pid: v2.pid });
            } catch (e3) {
            }
          });
          const b2 = nt({ stdout: v2.stdout, stderr: v2.stderr, writable: i2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          v2.on("error", (e3) => {
            i2.throw(e3);
          });
          let _2 = null, S2 = null, x2 = false;
          const k2 = async (e3) => {
            if (!x2) {
              if (x2 = true, S2 && (clearTimeout(S2), S2 = null), (0, h.HF)(o2.ctx, "exit"), e3) try {
                await b2.waitForOutput();
              } catch (e4) {
                return void i2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              if (await b2.flush(), !r2?.signal?.aborted) {
                const e4 = `${Jt}
`, t3 = `${zt}
`;
                if (w2.startsWith(e4) && w2.endsWith(t3)) {
                  let t4 = w2.slice(e4.length);
                  t4 = t4.slice(0, -(zt.length + 1));
                  const { cwd: r3, rest: n3 } = Ke(t4);
                  r3?.startsWith("/") && (this.state = n3, this.cwd = r3);
                }
              }
              if (y2.captureDenies) try {
                const e4 = await Be(v2);
                e4 && e4.length > 0 && await i2.write({ type: "sandbox_denies", events: e4 });
              } catch {
              }
              try {
                await i2.write({ type: "exit", code: _2, data: "", aborted: r2?.signal?.aborted ?? false }), i2.close();
              } catch (e4) {
                i2.close();
              }
            }
          };
          v2.on("exit", (e3, t3) => {
            _2 = e3;
            const n3 = r2?.closeTimeout ?? 5e3;
            n3 > 0 && (S2 = setTimeout(() => {
              x2 || (console.warn(`[shell-exec] Close event did not fire within ${n3}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), (function(e4, t4, r3) {
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
              })(v2.pid, "SIGKILL"), k2(false));
            }, n3));
          }), v2.on("close", async () => {
            await k2(true);
          });
          const E2 = v2.stdio[3], T2 = v2.stdio[4];
          d2 && Ge(v2, t2), Ye(E2, this.state), Ve(T2, (e3) => {
            w2 += e3;
          }), yield* i2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Gt(n2);
        }
      }
    }
    const Kt = "__CURSOR_ZSH_STATE_LIGHT_VALID__", Zt = `#!/usr/bin/env zsh

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
    var Xt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, o2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (o2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        o2 && (n2 = function() {
          try {
            o2.call(this);
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
        var n2, o2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === o2) return o2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var s2 = n2.dispose.call(n2.value);
              if (n2.async) return o2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else o2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === o2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    function er() {
      const e2 = process.env.SHELL;
      return e2?.includes("zsh") ? e2 : u("zsh", []).cmd;
    }
    class tr {
      cwd;
      state;
      constructor(e2, t2) {
        this.cwd = e2, this.state = t2;
      }
      async getCwd() {
        return this.cwd;
      }
      clone(e2) {
        return new tr(e2 ?? this.cwd, this.state);
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const o2 = Xt(n2, (0, h.VI)(e2.withName("ZshLightState.execute")), false), s2 = r2?.pipeStdin ?? false, i2 = (0, f.Jt)(), a2 = r2?.workingDirectory ?? this.cwd, l2 = { ...process.env, ...qe, ...r2?.env };
          let c2 = 'builtin eval "$1"';
          s2 || (c2 += " < /dev/null");
          const u2 = kt(l2), d2 = We(), p2 = ["-c", (d2 ? He : "") + `builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin\${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; ${Zt} builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + N + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${u2}${c2}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...d2 ? [] : [t2]], m2 = r2?.sandboxWorkspaceRoot ?? a2, g2 = (await yt(m2, r2?.sandboxPolicy)).policy, y2 = "insecure_none" !== g2.type ? { ...g2, sandboxWorkspaceRoot: m2 } : g2, v2 = Je(er(), p2, { env: l2, stdio: [s2 ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", d2 ? "pipe" : "ignore"], cwd: a2, detached: true }, y2, r2?.signal);
          let w2 = "";
          v2.on("spawn", async () => {
            try {
              await i2.write({ type: "stdin_ready", stdin: v2.stdin ?? void 0, pid: v2.pid });
            } catch (e3) {
            }
          });
          const b2 = nt({ stdout: v2.stdout, stderr: v2.stderr, writable: i2, bufferOutputEvents: r2?.bufferOutputEvents, outputLimiterOptions: r2?.outputLimiterOptions });
          v2.on("error", (e3) => {
            i2.throw(e3);
          });
          let _2 = null, S2 = null, x2 = false;
          const k2 = async (e3) => {
            if (!x2) {
              if (x2 = true, S2 && (clearTimeout(S2), S2 = null), (0, h.HF)(o2.ctx, "exit"), e3) try {
                await b2.waitForOutput();
              } catch (e4) {
                return void i2.throw(e4 instanceof Error ? e4 : new Error(String(e4)));
              }
              if (await b2.flush(), !r2?.signal?.aborted) {
                const e4 = `${Kt}
`;
                if (w2.startsWith(e4)) {
                  const t3 = w2.slice(e4.length), { cwd: r3, rest: n3 } = Ke(t3);
                  r3?.startsWith("/") && (this.state = n3, this.cwd = r3);
                }
              }
              if (y2.captureDenies) try {
                const e4 = await Be(v2);
                e4 && e4.length > 0 && await i2.write({ type: "sandbox_denies", events: e4 });
              } catch {
              }
              try {
                await i2.write({ type: "exit", code: _2, data: "", aborted: r2?.signal?.aborted ?? false }), i2.close();
              } catch (e4) {
                i2.close();
              }
            }
          };
          v2.on("exit", (e3, t3) => {
            _2 = e3;
            const n3 = r2?.closeTimeout ?? 5e3;
            n3 > 0 && (S2 = setTimeout(() => {
              console.warn(`[shell-exec] Close event did not fire within ${n3}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), k2(false);
            }, n3));
          }), v2.on("close", async () => {
            await k2(true);
          });
          const E2 = v2.stdio[3], T2 = v2.stdio[4];
          d2 && Ge(v2, t2), Ye(E2, this.state), Ve(T2, (e3) => {
            w2 += e3;
          }), yield* i2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          Qt(n2);
        }
      }
    }
    var rr, nr;
    r(643);
    !(function(e2) {
      e2[e2.EventLoopDelayP95Ms = 50] = "EventLoopDelayP95Ms", e2[e2.EventLoopUtilization = 0.7] = "EventLoopUtilization";
    })(rr || (rr = {})), (function(e2) {
      e2[e2.SampleIntervalMs = 250] = "SampleIntervalMs", e2[e2.EventLoopResolutionMs = 20] = "EventLoopResolutionMs";
    })(nr || (nr = {}));
    const or = "\n[This shell is producing too much output to stream. The command will still run.]\n";
    var sr = r(68388);
    function ir(e2) {
      if (!e2) return;
      const t2 = { version: 1 };
      if ("allow" !== e2.default && "deny" !== e2.default || (t2.default = e2.default), Array.isArray(e2.allow) && e2.allow.length > 0 && (t2.allow = e2.allow.filter((e3) => "string" == typeof e3)), Array.isArray(e2.deny) && e2.deny.length > 0 && (t2.deny = e2.deny.filter((e3) => "string" == typeof e3)), e2.logging) {
        const r2 = {};
        "string" == typeof e2.logging.decisionLogPath && (r2.decisionLogPath = e2.logging.decisionLogPath), "jsonl" === e2.logging.logFormat && (r2.logFormat = "jsonl"), Object.keys(r2).length > 0 && (t2.logging = r2);
      }
      return t2;
    }
    function ar(e2) {
      const t2 = e2.type ?? "workspace_readwrite", r2 = { debugOutputDir: e2.debugOutputDir, captureDenies: e2.captureDenies, enableSharedBuildCache: e2.enableSharedBuildCache };
      if ("insecure_none" === t2) {
        return { type: "insecure_none", ...r2 };
      }
      let n2;
      if (Array.isArray(e2.additionalReadonlyPaths)) {
        const t3 = e2.additionalReadonlyPaths;
        n2 = t3.length > 0 ? t3 : void 0;
      }
      const o2 = { ...r2, networkAccess: e2.networkAccess, networkPolicy: ir(e2.networkPolicy), networkPolicyStrict: e2.networkPolicyStrict, additionalReadonlyPaths: n2, readBoundary: e2.readBoundary, additionalReadPaths: Array.isArray(e2.additionalReadPaths) ? e2.additionalReadPaths : void 0, disableTmpWrite: e2.disableTmpWrite };
      if ("workspace_readonly" === t2) {
        return { type: "workspace_readonly", ...o2 };
      }
      return { type: "workspace_readwrite", ...o2, additionalReadwritePaths: e2.additionalReadwritePaths };
    }
    function lr(e2, t2) {
      if ("insecure_none" === e2.type) return e2;
      const r2 = e2.additionalReadonlyPaths?.map((e3) => (0, sr.o1)(e3, t2)), n2 = e2.additionalReadPaths?.map((e3) => (0, sr.o1)(e3, t2));
      if ("workspace_readonly" === e2.type) return { ...e2, additionalReadonlyPaths: r2, additionalReadPaths: n2 };
      const o2 = e2.additionalReadwritePaths?.map((e3) => (0, sr.o1)(e3, t2));
      return { ...e2, additionalReadonlyPaths: r2, additionalReadPaths: n2, additionalReadwritePaths: o2 };
    }
    function cr(e2) {
      try {
        return u(e2, []).cmd !== e2;
      } catch (e3) {
        return false;
      }
    }
    function ur() {
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
    function dr(e2) {
      if (e2 === $e.ZshLight) return $e.ZshLight;
      const t2 = e2 || process.env.SHELL || "", r2 = "win32" === process.platform, n2 = r2 && !e2 ? ur() : void 0, o2 = void 0 !== n2 || /git.*bash\.exe$/i.test(t2) || /program.*git.*bin.*bash\.exe$/i.test(t2), s2 = !r2 || o2;
      return t2.includes("zsh") ? $e.Zsh : t2.includes("bash") && s2 ? $e.Bash : t2.includes("pwsh") || t2.includes("powershell") ? $e.PowerShell : n2 ? $e.Bash : r2 && (cr("pwsh") || cr("powershell")) ? $e.PowerShell : cr("zsh") ? $e.Zsh : cr("bash") && s2 ? $e.Bash : cr("pwsh") || cr("powershell") ? $e.PowerShell : $e.Naive;
    }
    function pr(e2) {
      let t2 = e2;
      if (!e2?.userTerminalHint) {
        const r2 = ur();
        r2 && (t2 = { ...e2, userTerminalHint: r2 });
      }
      switch (dr(t2?.userTerminalHint ?? "")) {
        case $e.Zsh:
          return new Ot(() => (async function(e3) {
            const t3 = { ...process.env, ...qe, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-o", "extendedglob", "-ilc", `${Ht} builtin printf '${r2}\\n'; dump_zsh_state`], o2 = Je(Yt(), n2, { env: t3, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e3?.signal);
            let s2 = "";
            o2.stdout?.on("data", (e4) => {
              s2 += e4.toString();
            }), o2.on("error", (e4) => {
              console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              o2.on("close", () => {
                e4(void 0);
              });
            });
            const i2 = Ze(s2, r2), a2 = `${Jt}
`, l2 = `${zt}
`;
            let c2;
            i2.startsWith(a2) && i2.endsWith(l2) ? (c2 = i2.slice(a2.length), c2 = c2.slice(0, -(zt.length + 1))) : c2 = `${process.cwd()}
`;
            const { cwd: u2, rest: d2 } = Ke(c2);
            return new Vt(u2, d2);
          })(t2));
        case $e.Bash:
          return new Ot(() => (async function(e3) {
            const t3 = { ...process.env, ...qe, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-O", "extglob", "-ilc", et + ` builtin printf '${r2}\\n'; dump_bash_state`], o2 = It(e3?.userTerminalHint);
            if (!o2) throw new Error("Can't find Bash");
            const s2 = Je(o2, n2, { env: t3, detached: true, stdio: ["ignore", "pipe", "pipe"] }, { type: "insecure_none" }, e3?.signal);
            let i2 = "";
            s2.stdout?.on("data", (e4) => {
              i2 += e4.toString();
            }), s2.on("error", (e4) => {
              console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              s2.on("close", () => {
                e4(void 0);
              });
            });
            const a2 = Ze(i2, r2), l2 = `${Xe}
`, c2 = `${Qe}
`;
            let u2;
            a2.startsWith(l2) && a2.endsWith(c2) ? (u2 = a2.slice(l2.length), u2 = u2.slice(0, -(Qe.length + 1))) : u2 = `${process.cwd()}
`;
            const { cwd: d2, rest: p2 } = Ke(u2), h2 = "win32" === process.platform, m2 = "win32" === process.platform ? process.cwd() : d2;
            return new Pt(m2, p2, e3?.userTerminalHint, h2);
          })(t2));
        case $e.PowerShell:
          return new Ot(() => (async function() {
            return new Ut(process.cwd(), "");
          })());
        case $e.ZshLight:
          return new Ot(() => (async function(e3) {
            const t3 = { ...process.env, ...qe, ...e3?.env }, r2 = "__CURSOR_STATE_MARKER__", n2 = ["-o", "extendedglob", "-ilc", `${Zt} builtin printf '${r2}\\n'; dump_zsh_state_light`], o2 = Je(er(), n2, { env: t3, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e3?.signal);
            let s2 = "";
            o2.stdout?.on("data", (e4) => {
              s2 += e4.toString();
            }), o2.on("error", (e4) => {
              console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${e4 instanceof Error ? e4.message : String(e4)}`);
            }), await new Promise((e4) => {
              o2.on("close", () => {
                e4(void 0);
              });
            });
            const i2 = Ze(s2, r2), a2 = `${Kt}
`, l2 = i2.startsWith(a2) ? i2.slice(a2.length) : `${process.cwd()}
`, { cwd: c2, rest: u2 } = Ke(l2);
            return new tr(c2, u2);
          })(t2));
        default:
          return (function(e3) {
            const t3 = "win32" === process.platform, r2 = e3?.shell ?? (t3 ? Lt() : void 0), n2 = process.cwd();
            return new jt(n2, { ...e3, shell: r2 });
          })(t2);
      }
    }
    const hr = { perUser: { type: "insecure_none" } };
  }