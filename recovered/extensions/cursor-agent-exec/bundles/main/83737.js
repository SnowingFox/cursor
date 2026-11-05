// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 83737 range:10912655..10931069
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83737: (e, t, r) => {
    "use strict";
    var n, s;
    r.d(t, { $t: () => J, A8: () => l.A8, AC: () => N, AD: () => d, Ae: () => l.Ae, Ai: () => f, BE: () => D, DE: () => F, Dr: () => B, Du: () => A, EJ: () => l.EJ, Ew: () => $, Jl: () => p, N1: () => O, OE: () => l.OE, PE: () => G, PZ: () => l.PZ, Pz: () => v, QQ: () => x, TM: () => h, VN: () => q, WX: () => _, Wi: () => g, Wo: () => w, Y6: () => l.Y6, Yy: () => se, _L: () => l._L, _b: () => T, dv: () => I, f$: () => C, j6: () => l.j6, kM: () => E, kR: () => u, mD: () => M, qA: () => m, qH: () => y, qh: () => U, rs: () => L, v5: () => S, v8: () => l.v8, ve: () => R, xD: () => j, y$: () => b, yA: () => P });
    var o = r(31421), i = r(73024), a = r(48161), c = r(76760), l = r(61933);
    const u = ".sync", d = ".control", p = ".evicted", m = ".recovered";
    function h(e2) {
      return e2.split("/").some(l.Ju);
    }
    const f = "conflict-events.jsonl", g = "conflict-events.pending.jsonl", y = 448;
    function w(e2) {
      return "cursor-dev" === e2 ? l.OE : l.EJ;
    }
    function v(e2) {
      return void 0 !== (0, l.Z6)(e2) ? "user" : void 0 !== (0, l.ZJ)(e2) ? "team" : (0, l.PZ)(e2) ? "cloud" : (0, l.Ae)(e2) ? "local" : (0, l.Y6)(e2) || (0, l.A8)(e2) ? "store" : "unknown";
    }
    function _(e2, t2) {
      return { base: e2.base, agentId: t2, tmpDirName: e2.tmpDirName };
    }
    class b extends Error {
      constructor({ code: e2, message: t2, failedPath: r2 }) {
        super(t2), this.name = "AgentStorePathError", this.code = e2, this.failedPath = r2;
      }
    }
    function S(e2 = {}) {
      const t2 = W(e2), r2 = w(e2.urlProtocol), n2 = t2.env.CURSOR_AGENT_STORE_DIR;
      if (n2) return { base: H(t2.path.resolve(n2), { allowChmodExisting: false, deps: t2 }), source: "env_override", ephemeralOnLogout: false, tmpDirName: r2 };
      if ("linux" === t2.platform) {
        for (const e3 of (function(e4) {
          const t3 = [], r3 = e4.env.XDG_STATE_HOME?.trim();
          r3 && e4.path.isAbsolute(r3) && t3.push(e4.path.join(e4.path.resolve(r3), "cursor", "agent-stores"));
          const n3 = (function(e5) {
            let t4;
            try {
              t4 = e5.osHomedir().trim();
            } catch {
              return;
            }
            if (0 === t4.length || !e5.path.isAbsolute(t4)) return;
            const r4 = e5.path.resolve(t4);
            if (e5.path.parse(r4).root === r4) return;
            return r4;
          })(e4);
          void 0 !== n3 && t3.push(e4.path.join(n3, ".local", "state", "cursor", "agent-stores"));
          return t3;
        })(t2)) try {
          return { base: H(e3, { allowChmodExisting: true, deps: t2 }), source: "user_state", ephemeralOnLogout: false, tmpDirName: r2 };
        } catch (t3) {
          if (t3 instanceof b && t3.failedPath === e3) throw t3;
        }
        return (function(e3, t3) {
          const r3 = e3.env.XDG_RUNTIME_DIR;
          if (r3) {
            const n4 = e3.path.resolve(r3);
            if ((function(e4, t4) {
              try {
                L(e4, t4);
              } catch (e5) {
                if (e5 instanceof b) return false;
                throw e5;
              }
              const r4 = ne(e4, t4.fs);
              if (!r4) return false;
              return (function(e5, t5, r5, n5) {
                try {
                  return X(e5, t5, r5, n5), true;
                } catch (e6) {
                  if (e6 instanceof b) return false;
                  throw e6;
                }
              })(e4, r4, t4, { allowLooseMode: false });
            })(n4, e3)) return { base: n4, source: "temp_fallback", ephemeralOnLogout: true, tmpDirName: t3 };
          }
          const n3 = Z(e3);
          return { base: H(e3.path.join(e3.osTmpdir(), `cursor-${n3}`), { allowChmodExisting: true, deps: e3 }), source: "temp_fallback", ephemeralOnLogout: false, tmpDirName: t3 };
        })(t2, r2);
      }
      if ("darwin" === t2.platform) {
        let e3;
        try {
          e3 = (function(e4) {
            let t3;
            try {
              t3 = e4.osHomedir();
            } catch {
              return;
            }
            if (0 === t3.length) return;
            const r3 = e4.path.resolve(t3);
            if (r3 === e4.path.parse(r3).root) return;
            const n4 = ne(r3, e4.fs);
            if (void 0 === n4) return;
            return Q(r3, n4), e4.path.join(r3, "Library", "Application Support", "Cursor", "AgentStores");
          })(t2);
        } catch (e4) {
          throw e4;
        }
        if (void 0 === e3) return k(t2, r2);
        const n3 = void 0 !== ne(e3, t2.fs);
        try {
          return { base: H(e3, { allowChmodExisting: false, deps: t2 }), source: "user_state", ephemeralOnLogout: false, tmpDirName: r2 };
        } catch (e4) {
          if (e4 instanceof b || n3) throw e4;
        }
        return k(t2, r2);
      }
      if ("win32" === t2.platform) return (function(e3, t3) {
        let r3;
        for (const n4 of (function(e4) {
          const t4 = [], r4 = e4.env.LOCALAPPDATA?.trim();
          r4 && e4.path.isAbsolute(r4) && t4.push(() => e4.path.join(e4.path.resolve(r4), "Cursor", "AgentStores"));
          return t4.push(() => e4.path.join((function(e5) {
            const t5 = e5.osHomedir().trim();
            if (0 === t5.length) throw new b({ code: "missing_homedir", message: "Could not determine the current user home directory for agent store path resolution" });
            return e5.path.resolve(t5);
          })(e4), "AppData", "Local", "Cursor", "AgentStores")), t4;
        })(e3)) {
          let s2;
          try {
            s2 = n4();
          } catch {
            continue;
          }
          const o2 = void 0 !== ne(s2, e3.fs);
          try {
            return { base: K(s2, e3), source: "user_state", ephemeralOnLogout: false, tmpDirName: t3 };
          } catch (e4) {
            if (o2) throw e4;
            e4 instanceof b && "missing_homedir" !== e4.code && e4.failedPath === s2 && (r3 ??= e4);
          }
        }
        if (void 0 !== r3) throw r3;
        const n3 = e3.path.resolve(e3.osTmpdir());
        return L(n3, e3), G(n3, e3.windowsAcl), { base: n3, source: "temp_fallback", ephemeralOnLogout: false, tmpDirName: t3 };
      })(t2, r2);
      throw new b({ code: "unsupported_platform", message: `Unsupported agent store platform: ${t2.platform}` });
    }
    function k(e2, t2) {
      return { base: V((function(e3, t3) {
        const r2 = t3.fs;
        try {
          if ("function" == typeof r2.realpathSync) return "function" == typeof r2.realpathSync.native ? r2.realpathSync.native(e3) : r2.realpathSync(e3);
        } catch {
        }
        return e3;
      })(e2.path.resolve(e2.osTmpdir()), e2), e2), source: "tmpdir", ephemeralOnLogout: false, tmpDirName: t2 };
    }
    function x(e2 = {}) {
      try {
        return S(e2).source;
      } catch {
        return "unresolved";
      }
    }
    function E(e2) {
      return (0, l.v8)(e2);
    }
    function I({ base: e2, agentId: t2, tmpDirName: r2 }) {
      return (function(e3) {
        if (!c.isAbsolute(e3)) throw new b({ code: "invalid_store_base", message: `Agent store base must be absolute: ${e3}`, failedPath: e3 });
      })(e2), T(t2), c.join(e2, r2 ?? l.EJ, t2);
    }
    function T(e2) {
      if (0 === e2.length || e2 !== e2.trim() || "." === e2 || ".." === e2 || e2.includes("\0") || e2.includes("/") || e2.includes("\\") || c.posix.isAbsolute(e2) || c.win32.isAbsolute(e2)) throw new b({ code: "invalid_agent_id", message: `Agent id must be a single safe path segment: ${e2}`, failedPath: e2 });
    }
    function C(e2) {
      return c.join(I(e2), l._L);
    }
    function P(e2) {
      return c.join(C(e2), l.RZ);
    }
    function A(e2) {
      return c.join(I(e2), u);
    }
    function R(e2, t2) {
      U(t2);
      const r2 = I(_(e2, t2));
      return c.join(c.dirname(r2), d, t2);
    }
    function M(e2) {
      return c.join(A(e2), "index.sqlite");
    }
    function J(e2) {
      return c.join(A(e2), "root-id");
    }
    function O(e2) {
      return c.join(A(e2), "sync.lock");
    }
    function B(e2) {
      return c.join(A(e2), "owner.json");
    }
    function D(e2) {
      return c.join(A(e2), "mount.json");
    }
    function q(e2) {
      return c.join(A(e2), f);
    }
    function N(e2) {
      return c.join(A(e2), g);
    }
    function F(e2) {
      return c.join(A(e2), "tmp");
    }
    function U(e2) {
      if (!((0, l.v8)(e2) || (0, l.XW)(e2) || (0, l.Y6)(e2) || (0, l.A8)(e2))) throw new b({ code: "invalid_agent_id", message: `Mount key must be an agent store source id, agent store id, or store-<digest> share id: ${e2}`, failedPath: e2 });
      T(e2);
    }
    function L(e2, t2 = {}) {
      const r2 = W(t2), n2 = r2.path.resolve(e2);
      if ((function(e3, t3) {
        const r3 = t3.realpathSync;
        if ("function" != typeof r3?.native) return;
        try {
          return r3.native(e3);
        } catch {
          return;
        }
      })(n2, r2.fs) === n2) return;
      const s2 = re(n2, r2.path);
      for (const e3 of s2) {
        const t3 = ne(e3, r2.fs);
        if (!t3) return;
        if (t3.isSymbolicLink()) throw new b({ code: "symlink_refused", message: `Refusing to use symlinked agent store path: ${e3}`, failedPath: e3 });
      }
    }
    function $(e2, t2 = {}) {
      const r2 = W(t2), n2 = r2.path.resolve(e2), s2 = void 0 !== t2.trustedBase ? r2.path.resolve(t2.trustedBase) : (function(e3, t3) {
        const r3 = re(t3.path.resolve(e3), t3.path);
        let n3 = r3[0] ?? t3.path.resolve(e3);
        for (let e4 = 1; e4 < r3.length; e4++) {
          const s3 = r3[e4], o3 = ne(s3, t3.fs);
          if (!o3) break;
          if (o3.isSymbolicLink()) throw new b({ code: "symlink_refused", message: `Refusing to use symlinked agent store path: ${s3}`, failedPath: s3 });
          if (!o3.isDirectory()) throw new b({ code: "not_directory", message: `Agent store path is not a directory: ${s3}`, failedPath: s3 });
          n3 = s3;
        }
        return n3;
      })(n2, r2);
      if (n2 === s2) return void ee(s2, r2);
      const o2 = r2.path.relative(s2, n2);
      if (0 === o2.length || o2.startsWith("..") || r2.path.isAbsolute(o2)) throw new b({ code: "invalid_store_base", message: `Refusing to create ${n2} outside trusted base ${s2}`, failedPath: n2 });
      const i2 = o2.split(r2.path.sep).filter((e3) => e3.length > 0);
      let a2 = s2;
      for (const e3 of i2) ee(a2, r2), a2 = r2.path.join(a2, e3), te(a2, r2);
    }
    function j(e2, t2 = {}) {
      const r2 = t2.execFileSync ?? o.execFileSync;
      r2("icacls", [e2, "/inheritance:r", "/grant:r", `*${oe(t2, r2).sid}:(OI)(CI)F`, `*${t2.systemSid ?? "S-1-5-18"}:(OI)(CI)F`, `*${t2.administratorsSid ?? "S-1-5-32-544"}:(OI)(CI)F`]);
    }
    function G(e2, t2 = {}) {
      const r2 = t2.execFileSync ?? o.execFileSync, n2 = oe(t2, r2), s2 = t2.systemSid ?? "S-1-5-18", i2 = t2.administratorsSid ?? "S-1-5-32-544", a2 = /* @__PURE__ */ new Set([n2.sid.toLowerCase(), n2.name.toLowerCase(), s2.toLowerCase(), i2.toLowerCase()]);
      for (const e3 of [t2.systemName ?? ce(s2, r2) ?? "NT AUTHORITY\\SYSTEM", t2.administratorsName ?? ce(i2, r2) ?? "BUILTIN\\Administrators"]) e3 && a2.add(e3.toLowerCase());
      const c2 = (function({ output: e3, targetPath: t3 }) {
        const r3 = [], n3 = /^(.+):(?:\([^)]+\))*[A-Z]*$/;
        for (const s3 of e3.split(/\r?\n/)) {
          let e4 = s3.trim();
          if (e4.toLowerCase().startsWith(t3.toLowerCase()) && (e4 = e4.slice(t3.length).trimStart()), e4.toUpperCase().includes("(DENY)")) continue;
          const o2 = e4.match(n3);
          o2 && r3.push(z(o2[1]));
        }
        return r3;
      })({ output: String(r2("icacls", [e2], { encoding: "utf8" })), targetPath: e2 });
      if (0 === c2.length) throw new b({ code: "acl_refused", message: `Could not verify ACL for agent store path: ${e2}`, failedPath: e2 });
      for (const t3 of c2) if (!a2.has(t3.toLowerCase())) throw new b({ code: "acl_refused", message: `Refusing agent store path with unexpected ACL entry: ${t3}`, failedPath: e2 });
    }
    function z(e2) {
      const t2 = e2.trim();
      if (!t2.includes(":")) return t2.replace(/^\*/, "");
      const r2 = t2.match(/(\*?S-\d-\d+(?:-\d+)+)$/) ?? t2.match(/(NT AUTHORITY\\SYSTEM|BUILTIN\\Administrators)$/) ?? t2.match(/(?:^|\s)([^\s\\:]+\\[^\r\n:]+)$/);
      if (r2) return r2[1].trim().replace(/^\*/, "");
      const n2 = t2.lastIndexOf(" ");
      return t2.slice(n2 + 1).trim().replace(/^\*/, "");
    }
    function W(e2) {
      return { env: e2.env ?? process.env, fs: e2.fs ?? (n || (n = r.t(i, 2))), geteuid: e2.geteuid ?? process.geteuid?.bind(process), osHomedir: e2.osHomedir ?? a.homedir, osTmpdir: e2.osTmpdir ?? a.tmpdir, path: e2.path ?? (s || (s = r.t(c, 2))), platform: e2.platform ?? process.platform, windowsAcl: e2.windowsAcl ?? {} };
    }
    function H(e2, { allowChmodExisting: t2, deps: r2 }) {
      if ("win32" === r2.platform) return K(e2, r2);
      L(e2, r2), Y(e2, r2);
      const n2 = ne(e2, r2.fs);
      n2 && X(e2, n2, r2, { allowLooseMode: t2 }), r2.fs.mkdirSync(e2, { recursive: true, mode: y }), !t2 && n2 || r2.fs.chmodSync(e2, y), Y(e2, r2);
      return X(e2, r2.fs.lstatSync(e2), r2, { allowLooseMode: false }), e2;
    }
    function K(e2, t2) {
      L(e2, t2);
      const r2 = ne(e2, t2.fs);
      if (r2) {
        Q(e2, r2);
        try {
          G(e2, t2.windowsAcl);
        } catch (r3) {
          if (!(r3 instanceof b)) throw r3;
          return (function(e3, t3, r4) {
            try {
              t3.fs.rmdirSync(e3), t3.fs.mkdirSync(e3, { mode: y });
            } catch {
              throw r4;
            }
            const n2 = t3.fs.lstatSync(e3);
            return Q(e3, n2), j(e3, t3.windowsAcl), G(e3, t3.windowsAcl), e3;
          })(e2, t2, r3);
        }
        return e2;
      }
      t2.fs.mkdirSync(e2, { recursive: true, mode: y });
      return Q(e2, t2.fs.lstatSync(e2)), j(e2, t2.windowsAcl), G(e2, t2.windowsAcl), e2;
    }
    function V(e2, t2) {
      L(e2, t2), Y(e2, t2);
      return X(e2, t2.fs.lstatSync(e2), t2, { allowLooseMode: false }), e2;
    }
    function Y(e2, t2) {
      const r2 = re(t2.path.resolve(e2), t2.path);
      for (const e3 of r2.slice(0, -1)) {
        const r3 = ne(e3, t2.fs);
        if (!r3) continue;
        Q(e3, r3);
        const n2 = !!(18 & r3.mode), s2 = !!(512 & r3.mode);
        if (n2 && !s2) throw new b({ code: "insecure_permissions", message: `Agent store parent must not be group/world writable: ${e3}`, failedPath: e3 });
      }
    }
    function Q(e2, t2) {
      if (t2.isSymbolicLink()) throw new b({ code: "symlink_refused", message: `Refusing to use symlinked agent store path: ${e2}`, failedPath: e2 });
      if (!t2.isDirectory()) throw new b({ code: "not_directory", message: `Agent store path is not a directory: ${e2}`, failedPath: e2 });
    }
    function X(e2, t2, r2, n2) {
      Q(e2, t2);
      const s2 = Z(r2);
      if (t2.uid !== s2) throw new b({ code: "foreign_uid", message: `Agent store path is owned by uid ${t2.uid}, expected ${s2}: ${e2}`, failedPath: e2 });
      if (!n2.allowLooseMode && 63 & t2.mode) throw new b({ code: "insecure_permissions", message: `Agent store path must not be group/world accessible: ${e2}`, failedPath: e2 });
    }
    function Z(e2) {
      const t2 = e2.geteuid?.();
      if (void 0 === t2) throw new b({ code: "missing_uid", message: "Could not determine current uid for agent store path validation" });
      return t2;
    }
    function ee(e2, t2) {
      const r2 = ne(e2, t2.fs);
      if (!r2) throw new b({ code: "not_directory", message: `Trusted directory does not exist: ${e2}`, failedPath: e2 });
      Q(e2, r2);
    }
    function te(e2, t2) {
      let r2 = ne(e2, t2.fs);
      if (!r2) {
        try {
          t2.fs.mkdirSync(e2, { mode: y });
        } catch (e3) {
          if (!le(e3) || "EEXIST" !== e3.code) throw e3;
        }
        if (r2 = ne(e2, t2.fs), !r2) throw new b({ code: "not_directory", message: `Failed to create directory: ${e2}`, failedPath: e2 });
      }
      Q(e2, r2);
    }
    function re(e2, t2) {
      const r2 = t2.parse(e2).root, n2 = e2.slice(r2.length).split(/[\\/]+/).filter(Boolean), s2 = [];
      let o2 = r2;
      r2 && s2.push(r2);
      for (const e3 of n2) o2 = o2 === r2 ? t2.join(r2, e3) : t2.join(o2, e3), s2.push(o2);
      return s2;
    }
    function ne(e2, t2) {
      try {
        return t2.lstatSync(e2);
      } catch (e3) {
        if (le(e3) && "ENOENT" === e3.code) return;
        throw e3;
      }
    }
    const se = /* @__PURE__ */ (function(e2) {
      let t2;
      return () => (t2 ??= ie(e2), t2);
    })(o.execFileSync);
    function oe(e2, t2) {
      if (e2.currentUserName && e2.currentUserSid) return { name: e2.currentUserName, sid: e2.currentUserSid };
      const r2 = void 0 === e2.execFileSync ? se() : ie(t2), n2 = e2.currentUserName ?? r2?.name, s2 = e2.currentUserSid ?? r2?.sid;
      if (!n2 || !s2) throw new b({ code: "acl_refused", message: "Could not determine current Windows user" });
      return { name: n2, sid: s2 };
    }
    function ie(e2) {
      const t2 = String(e2("whoami", ["/user", "/fo", "csv", "/nh"], { encoding: "utf8" })).trim().split(",").map((e3) => e3.replace(/^"|"$/g, "")), r2 = t2.at(-2), n2 = t2.at(-1);
      if (r2 && n2) return { name: r2, sid: n2 };
    }
    const ae = /* @__PURE__ */ new Map();
    function ce(e2, t2) {
      if (!(function(e3) {
        return /^S-\d-\d+(?:-\d+)+$/.test(e3);
      })(e2)) return;
      const r2 = t2 === o.execFileSync;
      if (r2 && ae.has(e2)) return ae.get(e2);
      const n2 = (function(e3, t3) {
        try {
          const r3 = String(t3("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", `[System.Security.Principal.SecurityIdentifier]::new('${e3}').Translate([System.Security.Principal.NTAccount]).Value`], { encoding: "utf8", timeout: 1e4, windowsHide: true })).trim();
          return r3.length > 0 && !r3.includes("\n") && r3.includes("\\") ? r3 : void 0;
        } catch {
          return;
        }
      })(e2, t2);
      return r2 && ae.set(e2, n2), n2;
    }
    function le(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
  }