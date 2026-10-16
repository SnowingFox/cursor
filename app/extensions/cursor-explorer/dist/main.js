(() => {
  var t = { 613: (t2) => {
    function e2(t3) {
      return Array.isArray(t3) ? t3 : [t3];
    }
    const r2 = /^\s+$/, i2 = /(?:[^\\]|^)\\$/, n2 = /^\\!/, o2 = /^\\#/, s = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, c = /\/$/, h = "/";
    let l = "node-ignore";
    "undefined" != typeof Symbol && (l = /* @__PURE__ */ Symbol.for("node-ignore"));
    const d = l, u = (t3, e3, r3) => (Object.defineProperty(t3, e3, { value: r3 }), r3), f = /([0-z])-([0-z])/g, p = () => false, g = [[/^\uFEFF/, () => ""], [/((?:\\\\)*?)(\\?\s+)$/, (t3, e3, r3) => e3 + (0 === r3.indexOf("\\") ? " " : "")], [/(\\+?)\s/g, (t3, e3) => {
      const { length: r3 } = e3;
      return e3.slice(0, r3 - r3 % 2) + " ";
    }], [/[\\$.|*+(){^]/g, (t3) => `\\${t3}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
      return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (t3, e3, r3) => e3 + 6 < r3.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (t3, e3, r3) => e3 + r3.replace(/\\\*/g, "[^\\/]*")], [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"], [/\\\\/g, () => "\\"], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (t3, e3, r3, i3, n3) => "\\" === e3 ? `\\[${r3}${((t4) => {
      const { length: e4 } = t4;
      return t4.slice(0, e4 - e4 % 2);
    })(i3)}${n3}` : "]" === n3 && i3.length % 2 == 0 ? `[${((t4) => t4.replace(f, (t5, e4, r4) => e4.charCodeAt(0) <= r4.charCodeAt(0) ? t5 : ""))(r3)}${i3}]` : "[]"], [/(?:[^*])$/, (t3) => /\/$/.test(t3) ? `${t3}$` : `${t3}(?=$|\\/$)`]], m = /(^|\\\/)?\\\*$/, v = "regex", y = "checkRegex", b = { [v]: (t3, e3) => `${e3 ? `${e3}[^/]+` : "[^/]*"}(?=$|\\/$)`, [y]: (t3, e3) => `${e3 ? `${e3}[^/]*` : "[^/]*"}(?=$|\\/$)` }, w = (t3) => "string" == typeof t3;
    class P {
      constructor(t3, e3, r3, i3, n3, o3) {
        this.pattern = t3, this.mark = e3, this.negative = n3, u(this, "body", r3), u(this, "ignoreCase", i3), u(this, "regexPrefix", o3);
      }
      get regex() {
        const t3 = "_" + v;
        return this[t3] ? this[t3] : this._make(v, t3);
      }
      get checkRegex() {
        const t3 = "_" + y;
        return this[t3] ? this[t3] : this._make(y, t3);
      }
      _make(t3, e3) {
        const r3 = this.regexPrefix.replace(m, b[t3]), i3 = this.ignoreCase ? new RegExp(r3, "i") : new RegExp(r3);
        return u(this, e3, i3);
      }
    }
    const _ = ({ pattern: t3, mark: e3 }, r3) => {
      let i3 = false, s2 = t3;
      0 === s2.indexOf("!") && (i3 = true, s2 = s2.substr(1)), s2 = s2.replace(n2, "!").replace(o2, "#");
      const a2 = ((t4) => g.reduce((e4, [r4, i4]) => e4.replace(r4, i4.bind(t4)), t4))(s2);
      return new P(t3, e3, s2, r3, i3, a2);
    };
    class k {
      constructor(t3) {
        this._ignoreCase = t3, this._rules = [];
      }
      _add(t3) {
        if (t3 && t3[d]) return this._rules = this._rules.concat(t3._rules._rules), void (this._added = true);
        if (w(t3) && (t3 = { pattern: t3 }), ((t4) => t4 && w(t4) && !r2.test(t4) && !i2.test(t4) && 0 !== t4.indexOf("#"))(t3.pattern)) {
          const e3 = _(t3, this._ignoreCase);
          this._added = true, this._rules.push(e3);
        }
      }
      add(t3) {
        return this._added = false, e2(w(t3) ? ((t4) => t4.split(s).filter(Boolean))(t3) : t3).forEach(this._add, this), this._added;
      }
      test(t3, e3, r3) {
        let i3, n3 = false, o3 = false;
        this._rules.forEach((s3) => {
          const { negative: a2 } = s3;
          if (o3 === a2 && n3 !== o3 || a2 && !n3 && !o3 && !e3) return;
          s3[r3].test(t3) && (n3 = !a2, o3 = a2, i3 = a2 ? void 0 : s3);
        });
        const s2 = { ignored: n3, unignored: o3 };
        return i3 && (s2.rule = i3), s2;
      }
    }
    const $ = (t3, e3) => {
      throw new e3(t3);
    }, x = (t3, e3, r3) => {
      if (!w(t3)) return r3(`path must be a string, but got \`${e3}\``, TypeError);
      if (!t3) return r3("path must not be empty", TypeError);
      if (x.isNotRelative(t3)) {
        return r3(`path should be a ${"`path.relative()`d"} string, but got "${e3}"`, RangeError);
      }
      return true;
    }, S = (t3) => a.test(t3);
    x.isNotRelative = S, x.convert = (t3) => t3;
    class E {
      constructor({ ignorecase: t3 = true, ignoreCase: e3 = t3, allowRelativePaths: r3 = false } = {}) {
        u(this, d, true), this._rules = new k(e3), this._strictPathCheck = !r3, this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null), this._testCache = /* @__PURE__ */ Object.create(null);
      }
      add(t3) {
        return this._rules.add(t3) && this._initCache(), this;
      }
      addPattern(t3) {
        return this.add(t3);
      }
      _test(t3, e3, r3, i3) {
        const n3 = t3 && x.convert(t3);
        return x(n3, t3, this._strictPathCheck ? $ : p), this._t(n3, e3, r3, i3);
      }
      checkIgnore(t3) {
        if (!c.test(t3)) return this.test(t3);
        const e3 = t3.split(h).filter(Boolean);
        if (e3.pop(), e3.length) {
          const t4 = this._t(e3.join(h) + h, this._testCache, true, e3);
          if (t4.ignored) return t4;
        }
        return this._rules.test(t3, false, y);
      }
      _t(t3, e3, r3, i3) {
        if (t3 in e3) return e3[t3];
        if (i3 || (i3 = t3.split(h).filter(Boolean)), i3.pop(), !i3.length) return e3[t3] = this._rules.test(t3, r3, v);
        const n3 = this._t(i3.join(h) + h, e3, r3, i3);
        return e3[t3] = n3.ignored ? n3 : this._rules.test(t3, r3, v);
      }
      ignores(t3) {
        return this._test(t3, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (t3) => !this.ignores(t3);
      }
      filter(t3) {
        return e2(t3).filter(this.createFilter());
      }
      test(t3) {
        return this._test(t3, this._testCache, true);
      }
    }
    const C = (t3) => new E(t3), D = () => {
      x.convert = (t4) => /^\\\\\?\\/.test(t4) || /["<>|\u0000-\u001F]+/u.test(t4) ? t4 : t4.replace(/\\/g, "/");
      const t3 = /^[a-z]:\//i;
      x.isNotRelative = (e3) => t3.test(e3) || S(e3);
    };
    "undefined" != typeof process && "win32" === process.platform && D(), t2.exports = C, C.default = C, t2.exports.isPathValid = (t3) => x(t3 && x.convert(t3), t3, p), u(t2.exports, /* @__PURE__ */ Symbol.for("setupWindows"), D);
  } }, e = {};
  function r(i2) {
    var n2 = e[i2];
    if (void 0 !== n2) return n2.exports;
    var o2 = e[i2] = { exports: {} };
    return t[i2](o2, o2.exports, r), o2.exports;
  }
  r.d = (t2, e2) => {
    for (var i2 in e2) r.o(e2, i2) && !r.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  };
  var i = {};
  (() => {
    "use strict";
    r.r(i), r.d(i, { activate: () => M, deactivate: () => j });
    const t2 = require("node:fs/promises"), e2 = require("node:os"), n2 = require("node:path");
    var o2 = r(613);
    const s = 32, a = 256, c = /* @__PURE__ */ new Set([".git", "node_modules", "venv", ".venv"]), h = /* @__PURE__ */ new Set(["EACCES", "ETIMEDOUT", "ELOOP", "ENOENT", "ENOTDIR", "EPERM"]), l = [["Desktop"], ["Documents"], ["Downloads"], ["Library", "Application Support", "CloudDocs"], ["Library", "CloudStorage"], ["Library", "Containers"], ["Library", "Mobile Documents"], ["Movies"], ["Music"], ["Pictures"]];
    const d = [...l, ["Library"]], u = [["go", "pkg", "mod"], ["OrbStack"]], f = { win32: [["AppData"]], linux: [], darwin: [] };
    class p {
      constructor() {
        this.bufferedValues = [], this.pendingNext = [], this.done = false, this.failure = void 0;
      }
      push(t3) {
        if (this.done || void 0 !== this.failure) return;
        const e3 = this.pendingNext.shift();
        void 0 === e3 ? this.bufferedValues.push(t3) : e3.resolve({ value: t3, done: false });
      }
      close() {
        if (!this.done && void 0 === this.failure) for (this.done = true; this.pendingNext.length > 0; ) {
          const t3 = this.pendingNext.shift();
          t3?.resolve({ value: void 0, done: true });
        }
      }
      fail(t3) {
        if (!this.done && void 0 === this.failure) for (this.failure = t3; this.pendingNext.length > 0; ) {
          const e3 = this.pendingNext.shift();
          e3?.reject(t3);
        }
      }
      async next() {
        if (this.bufferedValues.length > 0) {
          return { value: this.bufferedValues.shift(), done: false };
        }
        if (void 0 !== this.failure) throw this.failure;
        return this.done ? { value: void 0, done: true } : new Promise((t3, e3) => {
          this.pendingNext.push({ resolve: t3, reject: e3 });
        });
      }
    }
    function g(t3) {
      return t3.isDirectory() ? "directory" : t3.isFile() ? "file" : t3.isSymbolicLink() ? "symlink" : "other";
    }
    const m = { readDir: async (e3) => (await (0, t2.readdir)(e3, { withFileTypes: true })).map((t3) => ({ name: t3.name, kind: g(t3) })), readFile: (e3) => (0, t2.readFile)(e3, "utf8") };
    function v(t3) {
      if (!t3?.aborted) return;
      const e3 = t3.reason;
      if (e3 instanceof Error) throw e3;
      throw new Error(void 0 === e3 ? "Workspace explorer aborted" : String(e3));
    }
    function y(t3) {
      const e3 = t3?.code;
      return "string" == typeof e3 && h.has(e3);
    }
    async function b(t3) {
      const { fileSystem: e3, filePath: r2 } = t3;
      try {
        return await e3.readFile(r2);
      } catch (t4) {
        if (y(t4)) return;
        throw t4;
      }
    }
    function w(t3, e3) {
      if (t3 === e3) return true;
      const r2 = e3.endsWith(n2.sep) ? e3 : `${e3}${n2.sep}`;
      return t3.startsWith(r2);
    }
    function P(t3, e3) {
      return e3.some((e4) => w(t3, e4));
    }
    function _(t3) {
      return t3.replaceAll("\\", "/");
    }
    function k(t3, e3) {
      const r2 = t3.test(e3), i2 = t3.test(`${e3}/`);
      if (r2.ignored || r2.unignored || i2.ignored || i2.unignored) return !i2.unignored && (i2.ignored || r2.ignored);
    }
    function $(t3) {
      const { directoryPath: e3, ignoreMatchers: r2 } = t3;
      let i2;
      for (const t4 of r2) {
        if (!w(e3, t4.basePath)) continue;
        const r3 = _((0, n2.relative)(t4.basePath, e3));
        if (0 === r3.length) continue;
        const o3 = k(t4.matcher, r3);
        void 0 !== o3 && (i2 = o3);
      }
      return true === i2;
    }
    function x(t3) {
      const e3 = t3.match(/^\s*gitdir:\s*(.+)\s*$/im);
      if (null === e3) return;
      const r2 = e3[1]?.trim();
      return void 0 !== r2 && r2.length > 0 ? r2 : void 0;
    }
    async function S(t3) {
      const e3 = await (async function(t4) {
        const { directoryPath: e4, repositoryKind: r2, fileSystem: i2 } = t4;
        switch (r2) {
          case "git-directory":
            return b({ fileSystem: i2, filePath: (0, n2.join)(e4, ".git", "config") });
          case "bare":
            return b({ fileSystem: i2, filePath: (0, n2.join)(e4, "config") });
          case "git-file": {
            const t5 = (0, n2.join)(e4, ".git"), r3 = await b({ fileSystem: i2, filePath: t5 });
            if (void 0 === r3) return;
            const o3 = x(r3);
            if (void 0 === o3) return;
            const s2 = (0, n2.resolve)(e4, o3), a2 = await b({ fileSystem: i2, filePath: (0, n2.join)(s2, "config") });
            if (void 0 !== a2) return a2;
            const c2 = await b({ fileSystem: i2, filePath: (0, n2.join)(s2, "commondir") });
            if (void 0 === c2) return;
            const h2 = c2.trim();
            if (0 === h2.length) return;
            return b({ fileSystem: i2, filePath: (0, n2.join)((0, n2.resolve)(s2, h2), "config") });
          }
          default:
            throw new Error(`Unhandled repository kind: ${String(r2)}`);
        }
      })(t3);
      return void 0 === e3 ? [] : (function(t4) {
        const e4 = /* @__PURE__ */ new Map();
        let r2;
        for (const i2 of t4.split(/\r?\n/u)) {
          const t5 = i2.trim();
          if (0 === t5.length || t5.startsWith("#") || t5.startsWith(";")) continue;
          const n3 = t5.match(/^\[\s*remote\s+"([^"]+)"\s*\]$/i);
          if (null !== n3) {
            r2 = n3[1], e4.has(r2) || e4.set(r2, { name: r2 });
            continue;
          }
          if (t5.startsWith("[") && t5.endsWith("]")) {
            r2 = void 0;
            continue;
          }
          if (void 0 === r2) continue;
          const o3 = t5.match(/^([A-Za-z0-9.-]+)\s*=\s*(.*)$/u);
          if (null === o3) continue;
          const s2 = o3[1].toLowerCase(), a2 = o3[2].trim();
          if (0 === a2.length) continue;
          const c2 = e4.get(r2);
          void 0 !== c2 && ("url" !== s2 || void 0 !== c2.fetchUrl ? "pushurl" === s2 && void 0 === c2.pushUrl && (c2.pushUrl = a2) : c2.fetchUrl = a2);
        }
        return Array.from(e4.values()).filter((t5) => void 0 !== t5.fetchUrl || void 0 !== t5.pushUrl).sort((t5, e5) => t5.name.localeCompare(e5.name)).map((t5) => {
          const e5 = { name: t5.name };
          return void 0 !== t5.fetchUrl && (e5.fetchUrl = t5.fetchUrl), void 0 !== t5.pushUrl && (e5.pushUrl = t5.pushUrl), e5;
        });
      })(e3);
    }
    async function E(t3) {
      const r2 = t3.signal;
      v(r2);
      const i2 = t3.platform ?? process.platform, h2 = (0, n2.resolve)(t3.homeDirectory ?? (0, e2.homedir)()), l2 = (0, n2.resolve)(t3.rootDirectory ?? h2), p2 = (function(t4) {
        if (void 0 === t4) return s;
        if (!Number.isFinite(t4) || t4 < 1) throw new Error("maxConcurrency must be a positive finite number");
        return Math.min(Math.floor(t4), a);
      })(t3.maxConcurrency), g2 = (function(t4) {
        if (void 0 === t4) return Number.POSITIVE_INFINITY;
        if (!Number.isFinite(t4) || t4 < 0) throw new Error("maxDepth must be a non-negative finite number");
        return Math.floor(t4);
      })(t3.maxDepth), _2 = t3.scanNestedRepositories ?? false, k2 = t3.includeBareRepositories ?? true, E2 = t3.includeWorktrees ?? false, C2 = t3.skipMacOsProtectedDirectories ?? true, D2 = t3.fileSystem ?? m, O2 = (function(t4) {
        const e3 = new Set(c);
        for (const r3 of t4 ?? []) r3.length > 0 && e3.add(r3);
        return e3;
      })(t3.additionalSkipDirectoryNames), M2 = (function(t4) {
        const { platform: e3, homeDirectory: r3, rootDirectory: i3, skipMacOsProtectedDirectories: o3, macOsTccPermissions: s2 } = t4, a2 = [], c2 = [...u, ...f[e3] ?? []];
        for (const t5 of c2) {
          const e4 = (0, n2.resolve)(r3, ...t5);
          w(i3, e4) || a2.push(e4);
        }
        if ("darwin" !== e3 || !o3) return a2;
        const h3 = void 0 !== s2 ? new Set(s2.filter((t5) => "authorized" === t5.state).map((t5) => t5.path)) : void 0;
        for (const t5 of d) {
          const e4 = (0, n2.resolve)(r3, ...t5);
          w(i3, e4) || h3?.has(e4) || a2.push(e4);
        }
        return a2;
      })({ platform: i2, homeDirectory: h2, rootDirectory: l2, skipMacOsProtectedDirectories: C2, macOsTccPermissions: t3.macOsTccPermissions }), j2 = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set([l2]), W = [{ directoryPath: l2, depth: 0, isWithinRepository: false, ignoreMatchers: [] }], R = async (e3) => {
        v(r2);
        const { directoryPath: i3, depth: s2 } = e3;
        let a2;
        try {
          a2 = await D2.readDir(i3);
        } catch (t4) {
          if (y(t4)) return [];
          throw t4;
        }
        v(r2);
        const c2 = a2.find((t4) => ".git" === t4.name);
        let h3;
        void 0 !== c2 && (h3 = await (async function(t4) {
          const { directoryPath: e4, gitMarkerEntry: r3, fileSystem: i4 } = t4;
          if ("directory" === r3.kind) return "git-directory";
          const o3 = (0, n2.join)(e4, ".git");
          if ("symlink" === r3.kind) try {
            return await i4.readDir(o3), "git-directory";
          } catch (t5) {
            if (!y(t5)) throw t5;
          }
          if ("file" !== r3.kind && "symlink" !== r3.kind) return;
          const s3 = await b({ fileSystem: i4, filePath: o3 });
          return void 0 !== s3 && void 0 !== x(s3) ? "git-file" : void 0;
        })({ directoryPath: i3, gitMarkerEntry: c2, fileSystem: D2 })), void 0 === h3 && void 0 === c2 && k2 && (function(t4) {
          let e4 = false, r3 = false, i4 = false;
          for (const n3 of t4) "HEAD" !== n3.name || "file" !== n3.kind && "symlink" !== n3.kind || (e4 = true), "objects" === n3.name && "directory" === n3.kind && (r3 = true), "refs" === n3.name && "directory" === n3.kind && (i4 = true);
          return e4 && r3 && i4;
        })(a2) && (h3 = "bare");
        const l3 = "git-file" === h3 && !E2, d2 = e3.isWithinRepository || void 0 !== h3;
        let u2 = e3.ignoreMatchers;
        if (d2) {
          const t4 = (0, n2.join)(i3, ".gitignore"), e4 = await b({ fileSystem: D2, filePath: t4 });
          if (void 0 !== e4) {
            const t5 = (function(t6) {
              const e5 = [];
              for (const r3 of t6.split(/\r?\n/u)) {
                const t7 = r3.trimStart();
                0 === t7.length || t7.startsWith("#") || e5.push(r3);
              }
              return e5;
            })(e4);
            t5.length > 0 && (u2 = [...u2, { basePath: i3, matcher: o2().add(t5) }]);
          }
        }
        if (void 0 !== h3 && !l3 && !j2.has(i3)) {
          j2.add(i3);
          const e4 = await S({ directoryPath: i3, repositoryKind: h3, fileSystem: D2 });
          t3.onRepositoryDiscovered({ path: i3, kind: h3, remotes: e4 });
        }
        if (s2 >= g2) return [];
        if (void 0 !== h3 && (l3 || !_2)) return [];
        const f2 = [];
        for (const t4 of a2) {
          if ("directory" !== t4.kind) continue;
          if (t4.name.startsWith(".")) continue;
          if (O2.has(t4.name)) continue;
          const e4 = (0, n2.resolve)((0, n2.join)(i3, t4.name));
          P(e4, M2) || ($({ directoryPath: e4, ignoreMatchers: u2 }) || f2.push({ directoryPath: e4, depth: s2 + 1, isWithinRepository: d2, ignoreMatchers: u2 }));
        }
        return f2;
      };
      let U = 0, F = false;
      await new Promise((t4, e3) => {
        let i3;
        const n3 = () => {
          void 0 !== r2 && void 0 !== i3 && (r2.removeEventListener("abort", i3), i3 = void 0);
        }, o3 = () => {
          F || (F = true, n3(), t4());
        }, s2 = (t5) => {
          F || (F = true, n3(), e3(t5));
        };
        i3 = () => {
          var t5;
          s2((t5 = r2?.reason, t5 instanceof Error ? t5 : new Error(void 0 === t5 ? "Workspace explorer aborted" : String(t5))));
        }, void 0 !== r2 && r2.addEventListener("abort", i3, { once: true });
        const a2 = () => {
          if (!F) {
            try {
              v(r2);
            } catch (t5) {
              return void s2(t5);
            }
            for (; U < p2 && W.length > 0; ) {
              const t5 = W.pop();
              if (void 0 === t5) break;
              U += 1, R(t5).then((t6) => {
                for (const e4 of t6) N.has(e4.directoryPath) || (N.add(e4.directoryPath), W.push(e4));
              }).catch((t6) => {
                s2(t6);
              }).finally(() => {
                U -= 1, F || (0 !== W.length || 0 !== U ? a2() : o3());
              });
            }
            0 === W.length && 0 === U && o3();
          }
        };
        a2();
      });
    }
    async function* C(t3 = {}) {
      const e3 = new AbortController(), { signal: r2, dispose: i2 } = (function(t4) {
        const e4 = new AbortController(), r3 = [], i3 = (t5) => {
          e4.signal.aborted || (void 0 !== t5 ? e4.abort(t5) : e4.abort(new Error("Workspace explorer aborted")));
        };
        for (const e5 of t4) {
          if (void 0 === e5) continue;
          if (e5.aborted) {
            i3(e5.reason);
            break;
          }
          const t5 = () => {
            i3(e5.reason);
          };
          e5.addEventListener("abort", t5, { once: true }), r3.push(() => {
            e5.removeEventListener("abort", t5);
          });
        }
        return { signal: e4.signal, dispose: () => {
          for (const t5 of r3) t5();
        } };
      })([t3.signal, e3.signal]), n3 = new p(), o3 = E({ ...t3, signal: r2, onRepositoryDiscovered: (t4) => {
        n3.push(t4);
      } }).then(() => {
        n3.close();
      }).catch((t4) => {
        n3.fail(t4);
      }).finally(() => {
        i2();
      });
      try {
        for (; ; ) {
          const t4 = await n3.next();
          if (t4.done) break;
          yield t4.value;
        }
        await o3;
      } finally {
        e3.signal.aborted || e3.abort(new Error("Workspace explorer iteration stopped")), i2(), await o3.catch(() => {
        });
      }
    }
    const D = require("vscode");
    function O(t3, e3) {
      if (t3 === e3) return "~";
      const r2 = "win32" === process.platform, i2 = r2 ? t3.toLowerCase() : t3, o3 = r2 ? e3.toLowerCase() : e3, s2 = o3.endsWith(n2.sep) ? o3 : `${o3}${n2.sep}`;
      if (!i2.startsWith(s2)) return t3;
      const a2 = (0, n2.relative)(e3, t3);
      return 0 === a2.length || "." === a2 ? "~" : `~${n2.sep}${a2}`;
    }
    function M(t3) {
      const r2 = (0, e2.homedir)(), i2 = D.cursor.registerExplorerProvider(async (t4) => {
        const e3 = [];
        for await (const i3 of C(t4)) e3.push({ path: i3.path, displayPath: O(i3.path, r2), kind: i3.kind, remotes: i3.remotes.map((t5) => ({ name: t5.name, fetchUrl: t5.fetchUrl, pushUrl: t5.pushUrl })) });
        return e3;
      });
      t3.subscriptions.push(i2);
    }
    function j() {
    }
  })();
  var n = exports;
  for (var o in i) n[o] = i[o];
  i.__esModule && Object.defineProperty(n, "__esModule", { value: true });
})();
